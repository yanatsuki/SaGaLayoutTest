//
//  陣形 ver1.00
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author yana
//

var Imported = Imported || {};
Imported['BattleFormation'] = 1.00;
/*:
 * @plugindesc ver1.00/陣形の仕組みを追加します。
 * @author Yana
 *
 *
 * @param BasicFormationText
 * @desc 基本陣形の名称です。
 * @default 基本陣形
 *
 * @param BasicFormationHelp
 * @desc 基本陣形に表示するヘルプです。
 * @default もっとも基本となる陣形。特に特別な効果はない。
 *
 * @param AddMenuBattleFormation
 * @desc メニューに陣形の項目を追加するかの設定です。
 * @default true
 *
 * @param MenuBattleFormationTitle
 * @desc メニューに表示する陣形の名称です。
 * @default 陣形
 *
 * @param FormationListWidth
 * @desc 陣形シーン時のリスト部分の横幅です。
 * @default 320
 *
 * @param ShowParamWindow
 * @desc 陣形の詳細を表示するためのウィンドウを使用するかの設定です。
 * @default true
 *
 * @param ParamWindowWidth
 * @desc 陣形の詳細を表示するためのウィンドウの横幅です。
 * @default 220
 *
 * @param BasicWinExp
 * @desc 勝利時に加算される陣形経験値の基本値です。
 * @default 1
 *
 * @param MasterText
 * @desc 陣形をマスターした時にNext欄に表示されるテキストです。
 * @default Master!
 *
 * @param LevelUpText
 * @desc 陣形のレベルが上がった時に表示されるテキストです。
 * @default _nameの熟練度が上がった！
 *
 * @param MasterFormText
 * @desc 陣形のレベルが最高値に達した時に表示されるテキストです。
 * @default _nameをマスターした！
 *
 * @param ActiveHelpText
 * @desc ステータスがアクティブなときに表示される操作ヘルプです。
 * @default 決定:並び替え　←,キャンセル:リストに戻る
 *
 * @param DeactiveHelpText
 * @desc ステータスが非アクティブなときに表示される操作ヘルプです。
 * @default 決定:陣形を変更　→:陣形の詳細を確認,並び替え
 *
 * @param
 * @param 【ホームの設定】
 *
 * @param HomePosition1
 * @desc メンバーが1人の時のアクターのホームポジションです。
 * x,yで記述してください。
 * @default 700,300
 *
 * @param HomePosition2
 * @desc メンバーが2人の時のアクターのホームポジションです。
 * x,y x,yで記述してください。
 * @default 640,240 700,360
 *
 * @param HomePosition3
 * @desc メンバーが3人の時のアクターのホームポジションです。
 * x,y x,y x,yで記述してください。
 * @default 640,220 670,300 700,380
 *
 * @param HomePosition4
 * @desc メンバーが4人の時のアクターのホームポジションです。
 * x,y x,y x,y x,yで記述してください。
 * @default 640,200 660,266 680,333 700,400
 *
 * @param HomePosition5
 * @desc メンバーが5人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,yで記述してください。
 * @default 550,140 580,220 610,300 640,380 670,460
 *
 * @param HomePosition6
 * @desc メンバーが6人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,y x,yで記述してください。
 * @default 550,280 630,200 630,360 710,120 710,440 730,280
 *
 * @param HomePosition7
 * @desc メンバーが7人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,y x,y x,yで記述してください。
 * @default 550,220 550,380 660,140 660,460 660,300 750,220 750,380
 *
 * @param HomePosition8
 * @desc メンバーが8人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,y x,y x,y x,yで記述してください。
 * @default 510,300 550,210 550,390 660,120 660,480 710,300 750,210 750,390
 *
 * @param HomePosition9
 * @desc メンバーが9人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,y x,y x,y x,y x,yで記述してください。
 * @default 510,210 510,390 540,120 540,480 630,300 720,120 720,480 750,210 750,390
 *
 * @param HomePosition10
 * @desc メンバーが10人の時のアクターのホームポジションです。
 * x,y x,y x,y x,y x,y x,y x,y x,y x,y x,yで記述してください。
 * @default 490,300 540,210 540,390 510,120 510,480 690,300 720,210 720,390 750,120 750,480
 *
 * @help ------------------------------------------------------
 * プラグインコマンド
 * ------------------------------------------------------
 * このプラグインには、以下のプラグインコマンドがあります。
 *
 * 陣形 シーン呼び出し
 * BattleFormation callScene
 * ・陣形シーンを呼び出します。
 *
 * 陣形 設定 アイテムID
 * BattleFormation Set アイテムID
 * ・陣形をアイテムIDに設定します。
 *
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * ―――基本的なこと―――
 * 陣形とは、アクターの位置を特定の位置に設定して、場所によってアクターの能力を強化する機能です。
 * この際一人でも戦闘不能者がいると、陣形崩壊となり陣形効果は無効になります。
 * いずれかの戦闘メンバーの特徴オブジェクトのメモに
 * <陣形無効>
 * <InvalidFormation>
 * のいずれかが記述されている場合、陣形効果は無効となります。
 * また、上記いずれかの要因で陣形が無効化された状態で戦闘が終了すると、陣形経験値は入手できません。
 *
 * ―――陣形を作る―――
 * ・陣形の基本設定
 * アイテムのメモ欄で設定します。
 * 設定したアイテムを入手することで、その陣形が使用可能になります。
 *
 * 以下の設定がある場合、そのアイテムは陣形アイテムとして扱われます。
 * アイテムのメモに
 * <陣形設定>
 * 一人目のX座標,Y座標,使用するクラスID[,配置条件]
 * 二人目のX座標,Y座標,使用するクラスID[,配置条件]
 * 三人目のX座標,Y座標,使用するクラスID[,配置条件]
 * ・・・
 * </陣形設定>
 * と記述します。
 *
 * 一人目までなら一人陣形、二人目までなら二人、三人目までなら三人陣形・・・となります。
 * クラスIDはこの位置に配置されたアクターの能力や特徴にそのクラスで設定したものが追加される設定です。
 * 配置条件の記述は任意です。この部分がevalで判定され、全員がtrueの場合は陣形が有効になります。
 * 省略した場合は、常にtrueとして扱われます。
 *
 * また、アイテム名はそのまま陣形の名前として、アイテムの説明は陣形の説明として使用されます。
 *
 * ・陣形経験値の設定
 * 同じように、アイテムのメモに
 * <陣形経験値設定:Lv2までの必要値,Lv3までの必要値,Lv4までの必要値…>
 * <FormationExpSetting:Lv2までの必要値,Lv3までの必要値,Lv4までの必要値…>
 * と記述することで、陣形にレベルを設定することができます。
 *
 * レベルの最大値は設定した個数+1となります。
 * 陣形の経験値は戦闘に勝利することで蓄積されていきます。
 * 陣形のレベルは、以下で解説するクラスの設定でのレベルによるステータスの補正や、習得スキルで使用されます。
 *
 * ―――陣形の中身を設定する―――
 * 陣形の各ポジションによる補正はクラスを使用して行います。
 * クラスに設定した特徴やステータス値、更に習得するスキルがそのポジションにいるアクターに追加されます。
 * この際、このクラスのレベルの値は、陣形レベルが使用されます。
 *
 * このクラスに設定した名前は、陣形シーンで各ポジションの特徴などを確認するウィンドウに表示されます。
 *
 * 以下のいずれかを記述をすることで、クラスの詳細を確認するウィンドウにテキストを追加することができます。
 *
 * <陣形効果テキスト追加:前:表示したいテキスト>
 * <陣形効果テキスト追加:後:表示したいテキスト>
 * <AddFormationEffectText:F:表示したいテキスト>
 * <AddFormationEffectText:L:表示したいテキスト>
 *
 * この際、前やFを指定した場合はほかの効果よりも前に、
 * 後やLを指定した場合は他の効果より後にテキストが追加されます。
 * また、
 * <陣形効果テキスト追加:前:Lv2:表示したいテキスト>
 * のように、前後の指定の後にLv○:を追加することで、そのレベル以上で追加されるテキストとなります。
 *
 * ―――陣形経験値について―――
 * 陣形経験値は基本的には勝利することで1ポイント追加されます。
 * このポイントは、エネミーのメモに
 * <陣形経験値:x>
 * <BattleFormationExp:x>
 * のいずれかを記述することで、そのエネミーを倒した際に追加でxポイントの陣形経験値を加算します。
 *
 * また、アクターやクラス等特徴を持ったオブジェクトのメモ欄に
 * <陣形経験値倍率:x>
 * <BattleFormationExpRate:x>
 * のいずれかを記述すると、最終的に得られる陣形経験値がx倍になります。
 * これらは全てのアクターで個別に反映され、重複して乗算されていくので、設定には注意してください。
 * (アクター5人がそれぞれ2倍の設定を持っていると、最終的に32倍になる)
 *
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

    var parameters = PluginManager.parameters('BattleFormation');
    var basicFormationText = parameters['BasicFormationText'] || '基本陣形';
    var basicFormationHelp = parameters['BasicFormationHelp'] || '';
    var addMenuBattleFormation = parameters['AddMenuBattleFormation'] === 'true';
    var formationListWidth = Number(parameters['FormationListWidth']) || 320;
    var showParamWindow = parameters['ShowParamWindow'] === 'true';
    var paramWindowWidth = Number(parameters['ParamWindowWidth']) || 220;
    var menuBattleFormationTitle = parameters['MenuBattleFormationTitle'];
    var basicWinExp = parseInt(parameters['BasicWinExp'],10);
    var masterText = parameters['MasterText'];
    var levelUpText = parameters['LevelUpText'];
    var masterFormText = parameters['MasterFormText'];
    var activeHelpText = parameters['ActiveHelpText'];
    var deactiveHelpText = parameters['DeactiveHelpText'];
    var basicFormations = [];
    
    for (var i=0,max=10;i<max;i++) {
        var key = 'HomePosition' + (i+1);
        basicFormations[i] = parameters[key].split(' ');
    }

    ////////////////////////////////////////////////////////////////////////////////////
    
    DataManager.formationStatus = function(item) {
        if (!item) return this.basicFormation();
        if (item._formationStatus) return item._formationStatus;
        item._formationStatus = [];
        var texts = item.note.split('\n');
        for (var i=0,max=texts.length;i<max;i++) {
            var text = texts[i];
            if (text.match(/^<陣形設定>/)) {
                for (var j=i;j<max;j++) {
                    var stext = texts[j];
                    if (stext.match(/<\/陣形設定>/)) {
                        i = j;
                        break;
                    }
                    if (stext.match(/(\d+),(\d+),(\d+),?(.+)?/)) {
                        var obj = {
                            x:parseInt(RegExp.$1,10),
                            y:parseInt(RegExp.$2,10),
                            classId:parseInt(RegExp.$3,10),
                            cond:RegExp.$4
                        };
                        item._formationStatus.push(obj);
                    }
                }
            }
        }
        return item._formationStatus;
    };

    DataManager.bfExps = function(item) {
        if (!item) return [];
        var ary = [];
        if (item && item.meta['陣形経験値設定'] || item.meta['FormationExpSetting']) {
            if (item.meta['陣形経験値設定']) {
                ary = item.meta['陣形経験値設定'].split(',').map(function (n) {
                    return parseInt(n, 10)
                });
            } else if (item.meta['FormationExpSetting']) {
                ary = item.meta['FormationExpSetting'].split(',').map(function(n){
                    return parseInt(n,10)
                });
            }
        }
        return ary;
    };

    DataManager.basicFormation = function() {
        var size = $gameParty.battleMembers().length;
        var homes = basicFormations[size-1];
        var ary = [];
        for (var i=0;i<size;i++) {
            var home = homes[i].split(',').map(function(n){ return parseInt(n,10) });
            ary.push({x:home[0],y:home[1],classId:0});
        }
        return ary;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __BManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function() {
        __BManager_startBattle.call(this);
    };

    var __BManager_startInput = BattleManager.startInput;
    BattleManager.startInput = function() {
        __BManager_startInput.call(this);
        $gameParty.checkBattleFormation();
    };

    var __BManager_processVictory = BattleManager.processVictory;
    BattleManager.processVictory = function() {
        var lv = $gameParty.currentBfLevel();
        $gameParty.increaseFormationExp();
        this._upBfLevel = lv < $gameParty.currentBfLevel();
        __BManager_processVictory.call(this);
    };

    var __BManager_displayRewards = BattleManager.displayRewards;
    BattleManager.displayRewards = function() {
        __BManager_displayRewards.call(this);
        if (this._upBfLevel) this.displayBfLevel();
    };

    BattleManager.displayBfLevel = function() {
        var item = $gameParty.battleFormation();
        var text = '';
        if ($gameParty.isMaxBfLevel(item.id)) {
            text = masterFormText.replace(/_name/,item.name);
        } else {
            text = levelUpText.replace(/_name/,item.name);
        }
        $gameMessage.add('\\.' + text);
    };


    ////////////////////////////////////////////////////////////////////////////////////

    var __GInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        __GInterpreter_pluginCommand.call(this, command, args);
        if (command === '陣形' || command === 'BattleFormation') {
            switch (args[0]) {
                case 'シーン呼び出し':
                case 'callScene':
                    this.callSceneBattleFormation();
                    break;
                case '設定':
                case 'Set':
                    var id = parseInt(args[1],10);
                    var item = $dataItems[id];
                    $gameParty.setBattleFormation(item);
            }
        }
    };

    Game_Interpreter.prototype.callSceneBattleFormation = function() {
        SceneManager.push(Scene_BattleFormation);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __GActor_paramPlus = Game_Actor.prototype.paramPlus;
    Game_Actor.prototype.paramPlus = function(paramId) {
        var value = __GActor_paramPlus.call(this, paramId);
        if ($gameParty.formationEnable() && this._bfClass) {
            var cl = $dataClasses[this._bfClass];
            if (cl.params[paramId] > 1) {
                value += cl.params[paramId][$gameParty.currentBfLevel()];
            }
        }
        return value;
    };

    var __GActor_traitObjects = Game_Actor.prototype.traitObjects;
    Game_Actor.prototype.traitObjects = function() {
        var result = __GActor_traitObjects.call(this);
        if ($gameParty.formationEnable() && this._bfClass) {
            var cl = $dataClasses[this._bfClass];
            result.push(cl);
        }
        return result;
    };

    var __GActor_skills = Game_Actor.prototype.skills;
    Game_Actor.prototype.skills = function() {
        var result = __GActor_skills.call(this);
        return result.concat(this.bfClassSkills());
    };

    Game_Actor.prototype.bfClassSkills = function() {
        var result = [];
        if ($gameParty.formationEnable() && this._bfClass) {
            var cl = $dataClasses[this._bfClass];
            for (var i=0,max=cl.learnings.length;i<max;i++) {
                var l = cl.learnings[i];
                if ($gameParty.currentBfLevel() >= l.level) {
                    result.push($dataSkills[l.skillId]);
                }
            }
        }
        return result;
    };

    Game_Actor.prototype.checkFormationEnable = function(cond, id) {
        if (this.isDead()) return false;
        if (this.traitObjects().some(function(t){
            return (t.meta['陣形無効'] || t.meta['InvalidFormation']) })) return false;
        var pf = $gameParty.battleFormation();
        if (pf && id === pf.id) cond = this._bfCond;
        if (!cond) return true;
        var a = $gameActors.actor(this.actorId());
        var v = $gameVariables._data;
        return eval(cond);
    };

    if (Imported['yPassiveSkill']) {
        var __GActor_enableSkills = Game_Actor.prototype.enableSkills;
        Game_Actor.prototype.enableSkills = function() {
            var skills = __GActor_enableSkills.call(this);
            return skills.concat(this.bfClassSkills());
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////

    Game_Party.prototype.refreshBattleFormation = function() {
        var formation = this.battleFormation();
        this.setBattleFormation(formation);
        this.checkBattleFormation();
    };

    Game_Party.prototype.battleFormation = function() {
        if (!this._battleFormation) this._battleFormation = [];
        var id = this._battleFormation[this.battleMembers().length];
        return $dataItems[id];
    };

    Game_Party.prototype.setBattleFormation = function(formation) {
        if (!this._battleFormation) this._battleFormation = [];
        var members = this.battleMembers();
        var size = members.length;
        var id = 0;
        if (formation) id = formation.id;
        this._battleFormation[size] = id;
        var data = DataManager.formationStatus(formation);
        for (var i=0;i<size;i++) {
            var member = members[i];
            var d = data[i];
            member._bfHome = [d.x, d.y];
            member._bfClass = d.classId;
            member._bfCond = d.cond;
        }
    };

    Game_Party.prototype.checkBattleFormation = function() {
        this._formationEnable = this.isEnableBattleFormation();
    };

    Game_Party.prototype.isEnableBattleFormation = function(id) {
        var members = this.battleMembers();
        var status = DataManager.formationStatus($dataItems[id]);
        for (var i=0,max=members.length;i<max;i++) {
            var member = members[i];
            if (!member.checkFormationEnable(status[i].cond, id)) {
                return false;
            }
        }
        return true;
    };

    Game_Party.prototype.formationEnable = function() {
        return this.inBattle() && this._formationEnable;
    };

    Game_Party.prototype.bfLevel = function(id) {
        if (!this._bfExps) return 1;
        if (!this._bfExps[id]) return 1;
        return this.levelForBfExp(id);
    };

    Game_Party.prototype.currentBfLevel = function() {
        var item = this.battleFormation();
        if (!item) return 1;
        return this.bfLevel(item.id);
    };

    Game_Party.prototype.levelForBfExp = function(id) {
        var item = $dataItems[id];
        var exps = DataManager.bfExps(item);
        var exp = this._bfExps[item.id];
        var value = 0;
        for (var i=0,max=exps.length;i<max;i++) {
            value += exps[i];
            if (exp < value) return i+1;
        }
        return i+1;
    };

    Game_Party.prototype.bfExpForLevel = function(id, level) {
        var item = $dataItems[id];
        var exps = DataManager.bfExps(item);
        var value = 0;
        var max = Math.min(level-1, exps.length);
        for (var i=0;i<max;i++) value += exps[i];
        return value;
    };

    Game_Party.prototype.increaseFormationExp = function() {
        if (!this.battleFormation()) return;
        var id = this.battleFormation().id;
        var count = this.winExp();
        var bfExp = this.bfExp(id)
        this._bfExps[id] = bfExp + count;
    };

    Game_Party.prototype.bfExp = function(id) {
        if (!this._bfExps) this._bfExps = {};
        if (!this._bfExps[id]) this._bfExps[id] = 0;
        return this._bfExps[id];
    };

    Game_Party.prototype.isMaxBfLevel = function(id) {
        var item = $dataItems[id];
        var exps = DataManager.bfExps(item);
        var maxLevel = exps.length + 1;
        return this.bfLevel(id) >= maxLevel;
    };

    Game_Party.prototype.winExp = function() {
        if (!this.isEnableBattleFormation(this.battleFormation().id)) return 0;
        var value = basicWinExp;
        $gameTroop.members().forEach(function(e){
            if (e.enemy().meta['陣形経験値']) value += parseInt(e.enemy().meta['陣形経験値'],10);
            if (e.enemy().meta['BattleFormationExp']) value += parseInt(e.enemy().meta['BattleFormationExp'],10);
        }.bind(this));
        $gameParty.battleMembers().forEach(function(m){
            m.traitObjects().forEach(function(t){
                if (t.meta['陣形経験値倍率'] !== undefined) value *= Number(t.meta['陣形経験値倍率']);
                if (t.meta['BattleFormationExpRate'] !== undefined) value *= Number(t.meta['BattleFormationExpRate']);
            }.bind(this));
        }.bind(this));
        return value;
    };
    
    ////////////////////////////////////////////////////////////////////////////////////

    var __SActor_setActorHome = Sprite_Actor.prototype.setActorHome;
    Sprite_Actor.prototype.setActorHome = function(index) {
        __SActor_setActorHome.call(this, index);
        if (!this._actor._bfHome) $gameParty.setBattleFormation(null);
        var home = this._actor._bfHome;
        this.setHome(home[0], home[1] + 80);
        if (this._actor._home) {
            this._actor._home = this._actor._bfHome;
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    function Window_BFFormationList() {
        this.initialize.apply(this, arguments);
    }

    Window_BFFormationList.prototype = Object.create(Window_Command.prototype);
    Window_BFFormationList.prototype.constructor = Window_BFFormationList;

    Window_BFFormationList.prototype.initialize = function(y) {
        if ($gameParty.battleFormation() === undefined) $gameParty.setBattleFormation(null);
        //this._oy = y;
        Window_Command.prototype.initialize.call(this, 0, y);
        this.openness = 0;
        //var yy = (Graphics.boxHeight - this._oy) / 2 - (this.windowHeight() / 2) + this._oy;
        //this.y = yy;
        this.selectExt($gameParty.battleFormation());
    };

    Window_BFFormationList.prototype.windowWidth = function() {
        return formationListWidth;
    };
    
    Window_BFFormationList.prototype.makeCommandList = function() {
        this.addCommand(basicFormationText,'set',true);
        var items = $gameParty.items();
        for (var i=0,max=items.length;i<max;i++) {
            var item = items[i];
            if (item.meta['陣形設定']) {
                var data = DataManager.formationStatus(item);
                if (data.length === $gameParty.battleMembers().length) {
                    this.addCommand(item.name,'set',true,item);
                }
            }
        }
    };

    Window_BFFormationList.prototype.lineHeight = function() {
        return 48;
    };

    Window_BFFormationList.prototype.offsetHeight = function() {
        return 0;
    };

    Window_BFFormationList.prototype.refresh = function() {
        this.clearCommandList();
        this.makeCommandList();
        var l = Math.min(this._list.length,this.maxPageRows());
        this.height = l * this.lineHeight() + this.standardPadding() * 2 + this.offsetHeight();
        this._upArrowSprite.y += this.offsetHeight();
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    };

    Window_BFFormationList.prototype.drawItem = function(index) {
        var rect = this.itemRectForText(index);
        var align = this.itemTextAlign();
        var item = this._list[index].ext;
        var exps = DataManager.bfExps(item);

        var enable = !(item && !$gameParty.isEnableBattleFormation(item.id));

        this.contents.fontSize = 24;
        this.resetTextColor();
        if (exps.length > 0) rect.y -= 8;
        if (this._list[index].ext === $gameParty.battleFormation()) this.changeTextColor('rgba(128,255,128,1.0)');
        this.changePaintOpacity(enable);
        this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
        if (!enable) {
            this.changeTextColor(this.textColor(2));
            this.drawText('×', rect.x, rect.y, rect.width, 'right');
        }
        if (exps.length > 0) {
            this.resetTextColor();
            this.contents.fontSize = 16;
            var id = item.id;
            var exp = $gameParty.bfExp(id);
            var lv = $gameParty.bfLevel(id);
            var next = $gameParty.bfExpForLevel(id, lv + 1);
            var crt = $gameParty.bfExpForLevel(id, lv);
            var rate = next - crt > 0 ? Math.min((exp - crt) / (next - crt),1.0) : 1.0;
            this.changeTextColor('rgba(255,255,128,1.0)');
            var txt = '';
            for (var i=0;i<lv;i++) txt += '★';
            this.drawText(txt, rect.x, rect.y+22, rect.width);
            this.resetTextColor();
            this.drawGauge(rect.x + 160, rect.y + 6, rect.width - 160, rate, 'rgba(128,128,255,1.0)','rgba(0,0,255,1.0)');
            if ($gameParty.isMaxBfLevel(id)) {
                this.drawText(masterText,rect.x + 160, rect.y + 22, rect.width - 160, 'center');
            } else {
                this.changeTextColor('rgba(180,180,255,1.0)');
                this.drawText('Next',rect.x + 160, rect.y + 22, rect.width - 160);
                this.resetTextColor();
                this.drawText((exp-crt)+'/'+(next-crt),rect.x + 160, rect.y + 22, rect.width - 160, 'right');
            }
        }
    };

    Window_BFFormationList.prototype.formation = function() {
        return DataManager.formationStatus(this.currentExt());
    };

    Window_BFFormationList.prototype.updateHelp = function() {
        var item = this.currentExt();
        if (item) {
            this.setHelpWindowItem(item);
        } else {
            this._helpWindow.setText(basicFormationHelp);
        }
    };


    Window_BFFormationList.prototype.cursorRight = function(wrap) {
        if (this.currentExt()) {
            SoundManager.playOk();
            this.callHandler('right');
        } else {
            SoundManager.playBuzzer();
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////


    function Window_BFStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_BFStatus.prototype = Object.create(Window_Selectable.prototype);
    Window_BFStatus.prototype.constructor = Window_BFStatus;

    Window_BFStatus.prototype.initialize = function(x,y) {
        this._frameCount = 0;
        this._lockIndex = -1;
        var w = Graphics.boxWidth - x;
        var h = Graphics.boxHeight - y + 4;
        Window_Selectable.prototype.initialize.call(this, x, y, w, h);
        this._actorSprites = [];
        var members = $gameParty.battleMembers();
        for (var i=0,max=members.length;i<max;i++) {
            var actor = members[i];
            var bitmap = ImageManager.loadSvActor(actor._battlerName);
            var sprite = new Sprite(bitmap);
            sprite.setFrame(0,0,64,64);
            sprite._actor = actor;
            sprite.ox = 0;
            sprite.oy = 0;
            this.addChild(sprite);
            this._actorSprites.push(sprite);
        }
        this.opacity = 0;
        //this.openness = 0;
    };

    Window_BFStatus.prototype.standardFontSize = function() {
        return 20;
    };

    Window_BFStatus.prototype.standardPadding = function() {
        return 8;
    };

    Window_BFStatus.prototype.maxItems = function() {
        return $gameParty.battleMembers().length;
    };

    Window_BFStatus.prototype.itemRect = function(index) {
        var fr = this._commandWindow.formation()[index];
        var xx = fr.x - 420;
        var yy = fr.y - 48;
        return { x:xx, y:yy, width:64, height:64 };
    };

    Window_BFStatus.prototype.refresh = function() {
        Window_Selectable.prototype.refresh.call(this);
        var text = this.active ? activeHelpText : deactiveHelpText;
        this.resetTextColor();
        this.drawTextEx(text, 0, this.contentsHeight() - 28, this.contentsWidth(),'right');
    };

    Window_BFStatus.prototype.drawItem  = function(index) {
        if (this._commandWindow) {
            this.resetTextColor();
            var rect = this.itemRect(index);
            var item = this._commandWindow.currentExt();
            if (index === this._lockIndex) {
                var color = 'rgba(180,180,180,0.5)';
                this.contents.fillRect(rect.x,rect.y,rect.width,rect.height,color);
            }
            if (this.isFixed(index)) {
                var color = 'rgba(255,128,128,0.5)';
                this.contents.fillRect(rect.x,rect.y,rect.width,rect.height,color);
            }
            var actor = this._actorSprites[index]._actor;
            var status = DataManager.formationStatus(item);
            if (item && !actor.checkFormationEnable(status[index].cond)){
                this.changeTextColor(this.textColor(2));
                this.drawText('×',rect.x + 64, rect.y + 32);
                this._actorSprites[index].ox = 6;
                this._actorSprites[index].oy = 2;
            } else {
                this._actorSprites[index].ox = 0;
                this._actorSprites[index].oy = 0;
            }
            this._actorSprites[index].x = rect.x + 8;
            this._actorSprites[index].y = rect.y + 8;
            this.drawText(index+1,rect.x + 64, rect.y);
        }
    };

    Window_BFStatus.prototype.setCommandWindow = function(window) {
        this._commandWindow = window;
        this.refresh();
    };

    Window_BFStatus.prototype.update = function() {
        Window_Selectable.prototype.update.call(this);
        if (this._frameCount % 12 === 0) this.updateSprite();
        this._frameCount++;
    };

    Window_BFStatus.prototype.updateSprite = function() {
        for (var i=0,max=this._actorSprites.length;i<max;i++) {
            var sprite = this._actorSprites[i];
            var frame = Math.floor(this._frameCount / 12) % 3;
            var sw = sprite.bitmap.width / 9;
            var sh = sprite.bitmap.height / 6;
            var ox = sprite.ox;
            var oy = sprite.oy;
            if (sprite._actor.isDead()) { ox = 6; oy = 5; }
            sprite.setFrame(sw * frame + ox * sw, oy * sh, sw, sh);
        }
    };

    Window_BFStatus.prototype.isLock = function() {
        return this._lockIndex >= 0;
    };

    Window_BFStatus.prototype.setLock = function() {
        this._lockIndex = this._index;
        this.refresh();
    };

    Window_BFStatus.prototype.clearLock = function() {
        this._lockIndex = -1;
        this.refresh();
    };

    Window_BFStatus.prototype.changeActorFormation = function() {
        if (!this.isLock()) return;
        $gameParty.swapOrder(this._index, this._lockIndex);
        var ary = [];
        var members = $gameParty.battleMembers();
        for (var i=0,max=members.length;i<max;i++) {
            for (var j=0,jmax=this._actorSprites.length;j<jmax;j++) {
                if (this._actorSprites[j]._actor === members[i]) {
                    ary.push(this._actorSprites[j]);
                    break;
                }
            }
        }
        this._actorSprites = ary;
    };

    Window_BFStatus.prototype.cursorLeft = function(wrap) {
        SoundManager.playCancel();
        this.callHandler('cancel');
    };

    Window_BFStatus.prototype.isCurrentItemEnabled = function() {
        return !this.isFixed(this._index);
    };

    Window_BFStatus.prototype.isFixed = function(index) {
        if (Imported['SceneFormation']) {
            var actor = $gameParty.battleMembers()[index];
            if (actor._fixed === undefined) actor._fixed = actor.initFixed();
            if (actor._fixed) return true;
        }
        return false;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    function Window_BFParameter() {
        this.initialize.apply(this, arguments);
    }

    Window_BFParameter.prototype = Object.create(Window_Base.prototype);
    Window_BFParameter.prototype.constructor = Window_BFParameter;

    Window_BFParameter.prototype.initialize = function() {
        Window_Selectable.prototype.initialize.call(this, 0,0,144,50);
        this.openness = 0;
    };

    Window_BFParameter.prototype.standardPadding = function() {
        return 6;
    };

    Window_BFParameter.prototype.standardFontSize = function() {
        return 16;
    };

    Window_BFParameter.prototype.setStatusWindow = function(window) {
        this._statusWindow = window;
    };

    Window_BFParameter.prototype.setCommandWindow = function(window) {
        this._commandWindow = window;
    };

    Window_BFParameter.prototype.lineHeight = function() {
        return 24;
    };

    Window_BFParameter.prototype.refresh = function() {
        if (showParamWindow && this._commandWindow && this._statusWindow) {
            var item = this._commandWindow.currentExt();
            var status = DataManager.formationStatus(item);
            var index = this._statusWindow._index;
            var c = $dataClasses[status[index].classId];
            var id = item.id;
            var ary = [];
            var ary2 = [];
            var texts = c.note.split(',');
            var level = $gameParty.bfLevel(id);
            for (var i=0,max=texts.length;i<max;i++) {
                var text = texts[i];
                if (text.match(/<(?:陣形効果テキスト追加|AddFormationEffectText):([前後FL]):?(?:Lv(\d+))?:(.+)>/)) {
                    if (!RegExp.$2 || Number(RegExp.$2) <= level) {
                        if (['前', 'F'].contains(RegExp.$1)) {
                            ary.push(RegExp.$3);
                        } else {
                            ary2.push(RegExp.$3);
                        }
                    }
                }
            }
            for (var i=0,max=c.learnings.length;i<max;i++) {
                var l = c.learnings[i];
                var s = $dataSkills[l.skillId];
                if (s && l.level <= level && !l.note.includes('<陣形非表示>')) {
                    var text = '\\C[4]スキル追加 \\C[6]' + s.name;
                    ary.push(text);
                }

            }
            for (var i=0;i<8;i++) {
                var value = c.params[i][$gameParty.bfLevel(id)];
                if (value > 1) {
                    ary.push([i,value]);
                }
            }
            for (var i=0,max=c.traits.length;i<max;i++) {
                var trait = c.traits[i];
                if (!(trait.code === 23 && trait.dataId === 10) && !(trait.code === 55 && trait.dataId === 0) &&
                    !(trait.code === 63)) {
                    ary.push(trait);
                }
            }
            ary = ary.concat(ary2);
            var size = 18;
            this.height = (ary.length * (size + 2)) + this.lineHeight() + this.standardPadding() * 2 + 8;
            this.width = Math.max(this.textWidth(c.name) + 18, paramWindowWidth);
            if (ary.length > 0) this.height += 4;
            this.createContents();
            this.contents.fontSize = 20;
            this.drawText(c.name,0,1,this.contentsWidth(),'center');
            if (ary.length > 0) this.contents.fillRect(4,25,this.contentsWidth()-8,2,'rgba(255,255,255,0.5)');
            this.contents.fontSize = size;
            for (var i=0,max=ary.length;i<max;i++) {
                if (typeof ary[i] === 'string') {
                    this.drawTextEx(ary[i], 4, (size+2) * i + 30);
                } else if (ary[i][1]) {
                    var text = '\\C[4]' + TextManager.param(ary[i][0]) + '\\C[24]+' + ary[i][1];
                    this.drawTextEx(text, 4, (size+2) * i + 30);
                } else {
                    var trait = ary[i];
                    this.drawTraits(trait,4, (size+2) * i + 30);
                }
            }
        }
    };

    Window_BFParameter.prototype.drawTraits = function(trait, x, y) {
        var vocab = ['有効度 ',' 無効化','会心率','会心回避','魔法回避','魔法反射率',
                    '反撃率','再生率','狙われ率','防御効果率','回復効果率','薬の知識',
                    '消費率','ＴＰチャージ率','物理ダメージ率','魔法ダメージ率',
                    '床ダメージ率','経験値獲得率','攻撃属性付与 ','攻撃時ステート付与',
                    '攻撃速度','攻撃回数','スキルタイプ追加 ','スキルタイプ封印 ',
                    'スキル追加 ','スキル封印 ','武器タイプ追加 ','防具タイプ追加 ',
                    '装備固定 ','装備封印 ','二刀流','行動回数追加 ','自動戦闘',
                    '防御','身代わり','ＴＰ持越し','エンカウント半減','エンカウント無効',
                    '不意打ち無効','先制率アップ','取得金額倍化','アイテム取得率倍化'];
        var text = '';
        var dataId = trait.dataId;
        var value = trait.value;
        var sys = '\\C[4]';
        var cl = '\\C[6]';
        var ud = value > 1.0 ? '\\C[24]' : '\\C[2]';
        var sym = value > 0 ? '+' : '';
        switch (trait.code) {
            case 11:
                var ele = $dataSystem.elements[dataId];
                ud = value < 1.0 ? '\\C[24]' : '\\C[2]';
                text = sys + ele + vocab[0] + ud + 'x' + Math.floor(value * 100) + '%';
                break;
            case 12:
                var param = TextManager.param(dataId);
                ud = value < 1.0 ? '\\C[24]' : '\\C[2]';
                text = sys + param + vocab[0] + ud + 'x' + Math.floor(value * 100) + '%';
                break;
            case 13:
                var state = $dataStates[dataId].iconIndex;
                ud = value < 1.0 ? '\\C[24]' : '\\C[2]';
                text = sys + state + vocab[0] + ud + 'x' + Math.floor(value * 100) + '%';
                break;
            case 14:
                var state = $dataStates[dataId].name;
                text = sys + state + vocab[1];
                break;
            case 21:
                var param = TextManager.param(dataId);
                text = sys + param + ud + 'x' + Math.floor(value * 100) + '%';
                break;
            case 22:
                var xparam = vocab[dataId];
                if (dataId === 0) xparam = TextManager.param(8);
                if (dataId === 1) xparam = TextManager.param(9);
                if (dataId === 7) xparam = TextManager.hpA + xparam;
                if (dataId === 8) xparam = TextManager.mpA + xparam;
                if (dataId === 9) xparam = 'TP' + xparam;
                ud = value > 0 ? '\\C[24]' : '\\C[2]';
                text = sys + xparam + ud + sym + Math.floor(value * 100) + '%';
                break;
            case 23:
                var sparam = vocab[dataId+8];
                if (dataId === 0) ud = cl;
                if (dataId === 4){
                    sparam = TextManager.mpA + sparam;
                    ud = '\\C[0]';
                }
                if (dataId === 6 || dataId === 7 || dataId === 8) ud = value < 1.0 ? '\\C[24]' : '\\C[2]';
                text = sys + sparam + ud + 'x' + Math.floor(value * 100) + '%';
                break;
            case 31:
                var ele = $dataSystem.elements[dataId];
                text = sys + vocab[18] + ':' + cl + ele;
                break;
            case 32:
                var state = $dataStates[dataId].name;
                text = sys + vocab[19] + ':' + cl + state;
                break;
            case 33:
                text = sys + vocab[20] + ud + sym + value;
                break;
            case 34:
                text = sys + vocab[21] + cl + '+' + value + '回';
                break;
            case 41:
            case 42:
                var stype = $dataSystem.skillTypes[dataId];
                var v = trait.code === 41 ? vocab[22] : vocab[23];
                text = sys + v + cl + stype;
                break;
            case 43:
            case 44:
                var skill = $dataSkills[dataId];
                var v = trait.code === 43 ? vocab[24] : vocab[25];
                text = sys + v + cl + skill.name;
                break;
            case 51:
            case 52:
                var type = trait.code === 51 ? $dataSystem.weaponTypes[dataId] : $dataSystem.armorTypes[dataId];
                var v = trait.code === 51 ? vocab[26] : vocab[27];
                text = sys + v + cl + type;
                break;
            case 53:
            case 54:
                var etype = $dataSystem.equipTypes[dataId];
                var v = trait.code === 53 ? vocab[28] : vocab[29];
                text = sys + v + cl + etype;
                break;
            case 55:
                text = sys + vocab[30];
                break;
            case 61:
                ud = value > 0 ? '\\C[24]' : '\\C[2]';
                text = sys + vocab[31] + ud + sym + (value * 100) + '%';
                break;
            case 62:
                text = sys + vocab[32 + dataId];
                break;
            case 64:
                text = sys + vocab[36 + dataId];
                break;
        }

        this.drawTextEx(text, x, y);
    };

    Window_BFParameter.prototype.updatePosition = function() {
        if (this._statusWindow && this._statusWindow.active) {
            var index = this._statusWindow._index;
            var rect = this._statusWindow.itemRect(index);
            this.x = rect.x - this.width + this._statusWindow.x;
            if (this._statusWindow.x > this.x){
                this.x = rect.x + this._statusWindow.x + 80;
            }
            var y = rect.y - this.height / 2 + this._statusWindow.y + (rect.height / 2);
            y = y.clamp(this._statusWindow.y,Graphics.boxHeight - this.height);
            this.y = y;
            if (index !== this._index) {
                this.refresh();
                this._index = index;
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    function Window_BFInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_BFInfo.prototype = Object.create(Window_Base.prototype);
    Window_BFInfo.prototype.constructor = Window_BFInfo;

    Window_BFInfo.prototype.initialize = function(x,y,w,h) {
        Window_Base.prototype.initialize.call(this, x,y,w,h);
        this.refresh();
    };

    Window_BFInfo.prototype.standardPadding = function() {
        return 6;
    };

    Window_BFInfo.prototype.refresh = function() {
        var text = $gameParty.battleFormation() ? $gameParty.battleFormation().name : basicFormationText;
        this.contents.fontSize = 22;
        this.changeTextColor(this.textColor(4));
        this.drawText(menuBattleFormationTitle,8,0,this.contentsWidth()-16,'center');
        this.contents.fillRect(4,32,this.contentsWidth()-8,2,'rgba(255,255,255,0.5)');
        this.changeTextColor(this.normalColor());
        this.drawText(text,8,32,this.contentsWidth()-16,'center');
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WMCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
    Window_MenuCommand.prototype.addOriginalCommands = function() {
        __WMCommand_addOriginalCommands.call(this);
        if (addMenuBattleFormation){
            this.addCommand(menuBattleFormationTitle, 'battleFormation', true);
        }
    };

    var __SMenu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        __SMenu_create.call(this);
        this.createFormationInfoWindow();
    };

    Scene_Menu.prototype.createFormationInfoWindow = function() {
        var x = 0;
        var h = this._goldWindow.height + 8;
        var y = Graphics.boxHeight - (this._goldWindow.height + h);
        var w = this._goldWindow.width;
        this._fInfoWindow = new Window_BFInfo(x,y,w,h);
        this.addWindow(this._fInfoWindow);
    };

    var __SMenu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        __SMenu_createCommandWindow.call(this);
        this._commandWindow.setHandler('battleFormation',   this.commandBattleFormation.bind(this));
    };

    Scene_Menu.prototype.commandBattleFormation = function() {
        SceneManager.push(Scene_BattleFormation);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    function Scene_BattleFormation() {
        this.initialize.apply(this, arguments);
    }

    Scene_BattleFormation.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_BattleFormation.prototype.constructor = Scene_BattleFormation;

    Scene_BattleFormation.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_BattleFormation.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createBackSprite();
        this.createWindowLayer();
        this.createHelpWindow();
        this.createCommandWindow();
        this.createStatusWindow();
        this.createParameterWindow();
    };

    Scene_BattleFormation.prototype.createBackSprite = function() {
        var back1 = new Sprite(ImageManager.loadBattleback1($gameMap._battleback1Name));
        back1.move(-92,-58);
        var back2 = new Sprite(ImageManager.loadBattleback2($gameMap._battleback2Name));
        back2.move(-92,-58);
        this.addChild(back1);
        this.addChild(back2);
    };

    Scene_BattleFormation.prototype.update = function() {
        if (!this.isBusy()) {
            this._commandWindow.open();
        }
        Scene_MenuBase.prototype.update.call(this);
        if (this._preIndex !== this._commandWindow.index()) {
            this._statusWindow.refresh();
            this._preIndex = this._commandWindow.index();
        }
        if (showParamWindow && this._statusWindow.active) this._paramWindow.open();
        this._paramWindow.updatePosition();
    };

    Scene_BattleFormation.prototype.isBusy = function() {
        return this._commandWindow.isClosing() || Scene_MenuBase.prototype.isBusy.call(this);
    };

    Scene_BattleFormation.prototype.terminate = function() {
        Scene_MenuBase.prototype.terminate.call(this);
    };

    Scene_BattleFormation.prototype.createCommandWindow = function() {
        var y = this._helpWindow.y + this._helpWindow.height;
        this._commandWindow = new Window_BFFormationList(y);
        this._commandWindow.setHandler('cancel', this.popScene.bind(this));
        this._commandWindow.setHandler('set', this.setFormation.bind(this));
        this._commandWindow.setHandler('right', this.commandStatus.bind(this));
        this.addWindow(this._commandWindow);
        this._commandWindow.setHelpWindow(this._helpWindow);
    };

    Scene_BattleFormation.prototype.createStatusWindow = function() {
        var x = this._commandWindow.x + this._commandWindow.width;
        var y = this._helpWindow.y + this._helpWindow.height;
        this._statusWindow = new Window_BFStatus(x,y);
        this._statusWindow.setHandler('cancel', this.onCancelStatus.bind(this));
        this._statusWindow.setHandler('ok', this.onOkStatus.bind(this));
        this._statusWindow.setCommandWindow(this._commandWindow);
        this.addWindow(this._statusWindow);
    };

    Scene_BattleFormation.prototype.createParameterWindow = function() {
        this._paramWindow = new Window_BFParameter();
        this._paramWindow.setStatusWindow(this._statusWindow);
        this._paramWindow.setCommandWindow(this._commandWindow);
        this.addChild(this._paramWindow);
    };
    
    Scene_BattleFormation.prototype.setFormation = function() {
        $gameParty.setBattleFormation(this._commandWindow.currentExt());
        this._commandWindow.refresh();
        this._commandWindow.activate();
    };

    Scene_BattleFormation.prototype.commandStatus = function() {
        this._commandWindow.deactivate();
        this._statusWindow.activate();
        this._statusWindow.select(0);
        this._statusWindow.refresh();
        this._paramWindow.refresh();
    };

    Scene_BattleFormation.prototype.onCancelStatus = function() {
        this._paramWindow.close();
        this._statusWindow.clearLock();
        this._statusWindow.deselect();
        this._statusWindow.deactivate();
        this._statusWindow.refresh();
        this._commandWindow.activate();
    };

    Scene_BattleFormation.prototype.onOkStatus = function() {
        if (!this._statusWindow.isLock()) {
            this._statusWindow.setLock();
            this._statusWindow.activate();
            this._statusWindow.refresh();
        } else {
            this._statusWindow.changeActorFormation();
            $gameParty.setBattleFormation(this._commandWindow.currentExt());
            this._statusWindow.clearLock();
            this._statusWindow.activate();
            this._commandWindow.refresh();
            this._statusWindow.refresh();
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SBattle_initialize = Scene_Battle.prototype.initialize;
    Scene_Battle.prototype.initialize = function() {
        $gameParty.refreshBattleFormation();
        __SBattle_initialize.call(this);
    };

    Scene_Battle.prototype.resetActorPosition = function() {
        this._spriteset._actorSprites.forEach(function(actor){
            actor.startMove(0,0);
        }.bind(this));
    };

    if (Imported['SceneFormation']) {

        var __SBattle_onMemberOk = Scene_Battle.prototype.onMemberOk;
        Scene_Battle.prototype.onMemberOk = function() {
            __SBattle_onMemberOk.call(this);
            if (this._scopeIndex === null){
                $gameParty.refreshBattleFormation();
                this.resetActorPosition();
            }
        };

        var __SBattle_onStandOk = Scene_Battle.prototype.onStandOk;
        Scene_Battle.prototype.onStandOk = function() {
            __SBattle_onStandOk.call(this);
            if (this._scopeIndex === null){
                $gameParty.refreshBattleFormation();
                this.resetActorPosition();
            }
        };

        var __SBattle_onRelease = Scene_Battle.prototype.onRelease;
        Scene_Battle.prototype.onRelease = function() {
            __SBattle_onRelease.call(this);
            $gameParty.refreshBattleFormation();
            this.resetActorPosition();
        };

        var __SBattle_onAdd = Scene_Battle.prototype.onAdd;
        Scene_Battle.prototype.onAdd = function() {
            __SBattle_onAdd.call(this);
            $gameParty.refreshBattleFormation();
            this.resetActorPosition();
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////
}());