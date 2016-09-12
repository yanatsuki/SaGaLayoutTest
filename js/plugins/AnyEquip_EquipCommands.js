//
//  なんでも装備&装備コマンド ver1.00
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author Yana
//

var Imported = Imported || {};
Imported['AnyEquip_EquipCommands'] = 1.00;
/*:
 * @plugindesc ver1.00/アイテムを装備しないと使えないなど、サガっぽい装備システムとコマンドを実装します。
 * @author Yana
 *
 *
 * @param SlotSize
 * @desc 装備スロットの装備数です。
 * @default 10
 *
 * @param ItemEquipType
 * @desc アイテムとして扱う装備タイプです。
 * @default 6
 *
 * @param MultipleEquipType
 * @desc 複数装備可能な装備タイプです。
 * @default 1,5,6
 *
 * @param UnequipText
 * @desc 装備していないスロットに表示するテキストです。
 * @default -----------------------
 *
 * @param HideSkillType
 * @desc アクターコマンドに表示しないスキルタイプです。
 * @default
 *
 * @help ------------------------------------------------------
 * プラグインについて
 * ------------------------------------------------------
 * このプラグインは以下の機能があります。
 * ・装備タイプの枠を取り払い、好きな箇所に好きな装備を付けられるようにします。
 * ・アイテムを装備しないと使えなくします。
 * ・複数の武器を装備した状態に対応したアクターコマンドの改変を行います。
 * ・武器スキルとして、使用条件に武器タイプが設定されているスキルを、
 *   設定されたタイプの武器の下にコマンドとして追加します。
 *   この際、そのスキルのスキルタイプが追加されているかは考慮されません。
 * ・このプラグインを導入すると、通常の攻撃のコマンドは武器を選択せずに攻撃した
 *   状態となります。
 * ・複数装備可能な武器及び防具は、それぞれのパラメータが全て加算されます。
 * ・したがって、武器の差別化を行う場合、D値などのプラグインを別途導入して計算式を
 *   それに合わせて調整するか、その武器選択時に使用されるスキルを変更する等の仕組み
 *   が必要です。(攻撃スキルの変更はこのプラグインで可能です)
 *
 * ※注意※
 * このプラグインはBattleLayout-SaGa専用の追加プラグインです。
 * 使用する場合は必ず、BattleLayout-SaGaを導入したうえで、それより下に配置してください。
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * ――メモを使った設定――
 * 武器または防具のメモに
 * <バックパック>
 * または、
 * <Backpack>
 * と記述すると、それを装備しているアクターは自由にアイテムが使用できるようになります。
 *
 * 武器のメモに
 * <武器コマンド:○[,○,○…]>
 * または、
 * <WeaponCommand:○[,○,○…]>
 * と記述すると、その武器のコマンド一覧に○で指定したスキルまたはアイテムが追加されます。
 * この際、○にはBattleLayout-SaGaのコマンド用キーワードに従って記述してください。
 *
 * 武器のメモに、
 * <通常攻撃スキル:○>
 * または、
 * <AttackSkill:○>
 * と記述すると、その武器で攻撃した際のスキルを○番に設定します。
 *
 * スキルのメモに
 * <使用可能タグ:xxx>
 * または、
 * <UsableTag:xxx>
 * と記述すると、そのスキルは<xxx>をメモに持つ武器でしか使用できなくなります。
 * xxxは任意のテキストです。
 * これは、一つの武器タイプの中で、さらに特定の武器でしか使用できないようなスキルを
 * 実装するための仕組みです。(剣スキルの中でも刀でしか使用できない刀技など)
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------
 * 当プラグインはMITライセンスで公開されています。
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */


(function() {
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('AnyEquip_EquipCommands');
    var slotSize = Number(parameters['SlotSize']);
    var itemEquipType = Number(parameters['ItemEquipType']);
    var multipleEquipType = parameters['MultipleEquipType'].split(',').map(function(n){return Number(n)});
    var unequipText = parameters['UnequipText'];
    var hideSkillType = parameters['HideSkillType'];

    ////////////////////////////////////////////////////////////////////////////////////

    var __GBBase_meetsItemConditions = Game_BattlerBase.prototype.meetsItemConditions;
    Game_BattlerBase.prototype.meetsItemConditions = function(item) {
        return __GBBase_meetsItemConditions.call(this, item) ||
            (this.meetsUsableItemConditions(item) && $gameParty.hasEquip(item));
    };

    var __GBBase_canEquip = Game_BattlerBase.prototype.canEquip;
    Game_BattlerBase.prototype.canEquip = function(item) {
        if (!item) return false;
        var result = __GBBase_canEquip.call(this, item);
        if (result) return true;
        if (DataManager.isItem(item) && $gameParty.canUse(item)){
            if (!item.traits) item.traits = [];
            if (!item.params) item.params = [0,0,0,0,0,0,0,0];
            return true;
        }
        return false;
    };

    // エイリアス ただし、実質再定義 二刀流のシステムを無効化する
    var __GBBase_isDualWield = Game_BattlerBase.prototype.isDualWield;
    Game_BattlerBase.prototype.isDualWield = function() {
        if (this._callInitEquip) return __GBBase_isDualWield.call(this);
        return false;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __GBattler_consumeItem = Game_Battler.prototype.consumeItem;
    Game_Battler.prototype.consumeItem = function(item) {
        if (DataManager.isItem(item) && item.consumable) {
            for (var i=0,max=this.equips().length;i<max;i++) {
                if (item === this.equips()[i]) {
                    this.changeEquip(i,null);
                    break;
                }
            }
        }
        __GBattler_consumeItem.call(this, item);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __GActor_initEquips = Game_Actor.prototype.initEquips;
    Game_Actor.prototype.initEquips = function(equips) {
        this._callInitEquip = true;
        __GActor_initEquips.call(this, equips);
        this._callInitEquip = false;
        for (var i=0,max=this._equipSlots.length;i<max;i++) {
            if (!equips[i]) this._equipSlots[i] = 0;
        }
    };

    var __GActor_equipSlots = Game_Actor.prototype.equipSlots;
    Game_Actor.prototype.equipSlots = function() {
        if (this._equipSlots) return this._equipSlots;
        var slots = __GActor_equipSlots.call(this);
        for (var i=0;i<slotSize;i++){ if (slots[i] === undefined) slots.push(0) }
        this._equipSlots = slots;
        return this._equipSlots;
    };

    var __GActor_changeEquip = Game_Actor.prototype.changeEquip;
    Game_Actor.prototype.changeEquip = function(slotId, item) {
        this._equipSlots[slotId] = item ? item.etypeId : 0;
        __GActor_changeEquip.call(this, slotId, item);
    };

    var __GActor_forceChangeEquip = Game_Actor.prototype.forceChangeEquip;
    Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
        this._equipSlots[slotId] = item ? item.etypeId : 0;
        __GActor_forceChangeEquip.call(this, slotId, item);
    };

    Game_Actor.prototype.equipItems = function() {
        return this.equips().filter(function(item) {
            return item && DataManager.isItem(item);
        });
    };

    Game_Actor.prototype.isEquipBackpack = function() {
        for (var i=0,max=this.equips().length;i<max;i++) {
            var item = this.equips()[i];
            if (item && (item.meta['Backpack'] || item.meta['バックパック'])) {
                return true;
            }
        }
        return false;
    };

    var __GActor_weapons = Game_Actor.prototype.weapons;
    Game_Actor.prototype.weapons = function() {
        var weapons = __GActor_weapons.call(this);
        if (!$gameParty.inBattle()) return weapons;
        if (this._weaponPage && this._weaponPage > 1000) {
            return [$dataWeapons[this._weaponPage - 1000]];
        } else if (this._weaponPage === 0){
            return [];
        } else {
            return weapons;
        }
    };

    Game_Actor.prototype.weaponCommands = function(weapon) {
        var cmd = [];
        if (!weapon) return cmd;
        if (weapon.meta['武器コマンド']) cmd = cmd.concat(weapon.meta['武器コマンド'].split(','));
        cmd = cmd.filter(function(x,i,self){ return self.indexOf(x) === i });
        return cmd;
    };

    Game_Actor.prototype.weaponCond = function(skill, weapon){
        var tag = null;
        if (skill.meta['使用可能タグ']) tag = skill.meta['使用可能タグ'];
        if (skill.meta['UsableTag']) tag = skill.meta['UsableTag'];
        if (!tag) return true;
        return weapon.meta[tag];
    };

    Game_Actor.prototype.isUsableItem = function(item) {
        return this.isEquipBackpack() || this.equipItems().contains(item);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Game_Party.prototype.hasEquip = function(item) {
        for (var i=0,max=$gameParty.members().length;i<max;i++) {
            var actor = $gameParty.members()[i];
            if (actor.isUsableItem(item)) return true;
        }
        return false;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    // 再定義　フォントを少し小さく
    Window_EquipSlot.prototype.standardFontSize = function() {
        return 22;
    };

    // 再定義　装備タイプの表示を削除
    Window_EquipSlot.prototype.drawItem = function(index) {
        if (this._actor) {
            var rect = this.itemRectForText(index);
            //this.changeTextColor(this.systemColor());
            this.changePaintOpacity(this.isEnabled(index));
            //this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
            if (this._actor.equips()[index]) {
                this.drawItemName(this._actor.equips()[index], rect.x, rect.y);
            } else {
                this.drawText(unequipText,rect.x,rect.y,(this.contentsWidth()-16),'center');
            }
            this.changePaintOpacity(true);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    // 再定義　フォントを少し小さく
    Window_EquipItem.prototype.standardFontSize = function() {
        return 22;
    };

    // 再定義
    Window_EquipItem.prototype.includes = function(item) {
        if (item === null) {
            return true;
        }
        //if (this._slotId < 0 || item.etypeId !== this._actor.equipSlots()[this._slotId]) {
        //    return false;
        //}
        if (DataManager.isItem(item) && !item.etypeId) item.etypeId = itemEquipType;
        if (!this._actor) return false;
        if (!multipleEquipType.contains(item.etypeId) &&
            item.etypeId !== this._actor.equipSlots()[this._slotId] &&
            this._actor.equipSlots().contains(item.etypeId)) {
            return false;
        }
        return this._actor.canEquip(item);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WACommand_setup = Window_ActorCommand.prototype.setup;
    Window_ActorCommand.prototype.setup = function(actor) {
        actor._weaponPage = null;
        __WACommand_setup.call(this, actor);
    };

    var __WACommand_select = Window_ActorCommand.prototype.select;
    Window_ActorCommand.prototype.select = function(index) {
        if (this._actor) this._actor._weaponPage = this.skillTypes()[this._subIndex];
        __WACommand_select.call(this, index);
    };

    var __WACommand_makeItemCommands = Window_ActorCommand.prototype.makeItemCommands;
    Window_ActorCommand.prototype.makeItemCommands = function() {
        if (this._actor.isEquipBackpack()) return __WACommand_makeItemCommands.call(this);
        var list = [];
        var items = this._actor.equipItems();
        items.forEach(function (item) {
            if (item && $gameParty.canUse(item) && !list.contains(item)) {
                list.push(item);
            }
        }.bind(this));
        return list;
    };

    var __WACommand_drawItemNumber = Window_ActorCommand.prototype.drawItemNumber;
    Window_ActorCommand.prototype.drawItemNumber = function(item, x, y, width) {
        if (this._actor.isEquipBackpack()) {
            __WACommand_drawItemNumber.call(this, item, x, y, width);
        } else {
            if (this.needsNumber()) {
                var size = this._actor.equipItems().filter(function (ei) {
                    return ei === item
                }).length;
                this.drawText(':', x, y, width - this.textWidth('00'), 'right');
                this.drawText(size, x, y, width, 'right');
            }
        }
    };

    var __WACommand_skillTypes = Window_ActorCommand.prototype.skillTypes;
    Window_ActorCommand.prototype.skillTypes = function() {
        var isInitialized = !!this._skillTypes;
        var results = __WACommand_skillTypes.call(this);
        if (!isInitialized) {
            var ary = [];
            for (var i = 0, max = this._actor.weapons().length; i < max; i++) {
                var weapon = this._actor.weapons()[i];
                ary.push(weapon.id + 1000);
            }
            this._skillTypes = ary.concat(this._skillTypes);
            this._skillTypes = this._skillTypes.filter(function (r) {
                return !hideSkillType.contains(r)
            });
            results = this._skillTypes;
        }
        return results;
    };

    var __WACommand_makeCommands = Window_ActorCommand.prototype.makeCommands;
    Window_ActorCommand.prototype.makeCommands = function(index) {
        if (this._commands && this._commands[index]) {
            return __WACommand_makeCommands.call(this, index);
        } else {
            var type = this.skillTypes()[index];
            if (type > 1000) {
                var commands = this.makeWeaponCommands(type);
                this._commands[index] = commands;
                return this._commands[index];
            } else {
                return __WACommand_makeCommands.call(this, index);
            }
        }
    };

    Window_ActorCommand.prototype.makeWeaponCommands = function(type) {
        var list = [];
        var weapon = $dataWeapons[type - 1000];
        list.push(weapon);
        list = list.concat(this._actor.weaponCommands(weapon));
        var skills = this._actor.skills();
        for (var i = 0, max = skills.length; i < max; i++) {
            var skill = skills[i];
            if (skill.requiredWtypeId1 === weapon.wtypeId ||
                skill.requiredWtypeId2 === weapon.wtypeId) {
                if (this._actor.weaponCond(skill, weapon)) list.push(skill);
            }
        }
        return list
    };

    var __WACommand_canItem = Window_ActorCommand.prototype.canItem;
    Window_ActorCommand.prototype.canItem = function() {
        if (this._actor.isEquipBackpack()) {
            return __WACommand_canItem.call(this);
        } else {
            return this._actor.equipItems().length > 0;
        }
    };


    var __WACommand_canUseItem = Window_ActorCommand.prototype.canUseItem;
    Window_ActorCommand.prototype.canUseItem = function(item) {
        return __WACommand_canUseItem.call(this, item) && this._actor.isUsableItem(item);
    };

    ////////////////////////////////////////////////////////////////////////////////////
}());


