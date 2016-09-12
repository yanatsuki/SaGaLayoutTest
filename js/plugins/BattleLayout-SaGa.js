//
// バトルレイアウト変更-SaGa ver1.00
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
Imported['BattleLayout-SaGa'] = 1.00;

/*:
 * @plugindesc ver1.00/戦闘のレイアウトをサガっぽくします。
 * @author Yana
 *
 * @param 【基本設定】
 * @param NameBasicCommand
 * @desc 基本コマンドの表示名です。
 * @default アクター
 *
 * @param NameExtendCommand
 * @desc 拡張コマンドの表示名です。
 * @default パーティ
 *
 * @param EscapeIconIndex
 * @desc 逃げるコマンドのアイコンインデックスです。
 * @default 82
 *
 * @param
 * @param 【コマンドの設定】
 *
 * @param MaxPageRows
 * @desc アクターコマンド1ページに表示する項目数です。
 * @default 10
 *
 * @param Command1
 * @desc 1ページ目のコマンドです。
 * @default attack,guard
 *
 * @param Command2
 * @desc 最後のページのコマンドです。
 * @default escape
 *
 * @param ActorCommandOffsetX
 * @desc アクターコマンドのX座標補正値です。
 * @default 0
 *
 * @param ActorCommandOffsetY
 * @desc アクターコマンドのY座標補正値です。
 * @default 0
 *
 * @param ActorCommandWidth
 * @desc アクターコマンドの横幅です。
 * @default 280
 *
 * @param CommandIcons
 * @desc コマンドのアイコンインデックスです。
 * 1:基本、2:拡張、3:アイテム、4以降はスキルタイプ1番目から順です。
 * @default 76,209,83,79,78
 *
 * @param ActorCommandNameY
 * @desc アクターコマンドのアクター名の表示Y座標です。
 * @default 0
 *
 * @param ShowActorCommandMp
 * @desc アクターコマンドにMPを表示するかの設定です。
 * @default true
 *
 * @param ShowActorCommandTp
 * @desc アクターコマンドにTPを表示するかの設定です。
 * @default true
 *
 * @param ItemCommandUsable
 * @desc アイテムコマンドを使用するかの設定です。
 * falseを指定すると、アイテムコマンドがなくなります。
 * @default true
 *
 * @param
 * @param 【ステータスの設定】
 *
 * @param StatusOffsetX
 * @desc アクターステータスのX座標補正値です。
 * @default 0
 *
 * @param StatusOffsetY
 * @desc アクターステータスのY座標補正値です。
 * @default 0
 *
 * @param ShowActorActions
 * @desc ステータスに行動回数を表示するかの設定です。
 * 表示する場合はアイコンインデックスを指定してください。
 * @default 16
 *
 * @param ShowStateTurns
 * @desc ステータスにステートの残りターンを表示するかの設定です。
 * @default true
 *
 * @param
 * @param 【カメラの設定】
 *
 * @param MoveCameraX
 * @desc カメラのX方向の動作範囲です。
 * 数値を大きくすると、背景が見切れます。
 * @default 92
 *
 * @param MoveCameraSpeed
 * @desc カメラの動作速度です。数値を上げると遅くなります。
 * @default 10
 *
 * @param
 * @param 【エネミーの設定】
 *
 * @param EnemyOffsetY
 * @desc エネミーの表示位置の補正値Y座標です。
 * @default 140
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
 * @default 640,180 655,240 670,300 685,360 700,420
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
 * @param
 * @param 【拡張設定】
 *
 * @param PassiveSkillType
 * @desc 【PassiveSkill導入時限定】パッシブスキルのスキルタイプIDです。
 * @default 3
 *
 * @param StateHelpTextAndIcon
 * @desc 【StateHelp導入時限定】ステートヘルプの表示名とアイコンです。
 * @default ステート詳細,79
 *
 * @param FormationTextAndIcon
 * @desc 【SceneFormation導入時限定】並び替えの名前とアイコンです。
 * @default パーティ編成,75
 *
 * @param LogTextAndIcon
 * @desc 【StackBattleLog導入時限定】ログの名前とアイコンです。
 * @default ログ,83
 *
 * @help ------------------------------------------------------
 * プラグインについて
 * ------------------------------------------------------
 *
 * このプラグインは、サイドビュー戦闘のレイアウトを某サガのように変更するプラグインです。
 *
 * ------------------------------------------------------
 * 使い方
 * ------------------------------------------------------
 * 基本的には入れるだけで動作します。
 * YEP_BattleEngineCoreやYEP_ActionSequencePackと併用する場合、それらより下に配置してください。
 *
 * ――メモによる設定――
 * 特徴を持ったオブジェクトのメモに、
 * <追加コマンド:○[,○,○…]>
 * または、
 * <AddCommand:○[,○,○…]>
 * と記述すると、基本コマンドに指定したコマンドが追加されます。
 * 追加されるコマンドは下で説明するCommand1,Command2で使えるキーワードで使用するものになります。
 * 複数指定した場合、指定しただけ追加されます。
 *
 * また、同じように
 * <隠しコマンド:○[,○,○…]>
 * または、
 * <HiddenCommand:○[,○,○…]>
 * と記述すると、使用条件を満たさないと出現しないコマンドになります。
 * 例えば、スキルに武器タイプ条件が付いている場合、その武器タイプの武器を装備しているときだけ、
 * または、スキルのコストがTP100の場合、TP100のときだけコマンドが出現します。
 *
 * ――Command1,Command2で使えるキーワード――
 * attack   →通常攻撃を追加します
 * guard    →防御を追加します
 * escape   →逃げるを追加します
 * s○      →○番のスキルを追加します
 * i○      →○番のアイテムを追加します
 *
 * 以下のキーワードは対応するプラグインを導入している場合使用可能です。
 * stateHelp    →コマンドにステート詳細を追加します(StateHelpが必要です)
 * formation    →コマンドに並び替えを追加します(SceneFormationが必要です)
 * log          →ログ表示を追加します(StackBattleLogが必要です)
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
 */

(function(){
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('BattleLayout-SaGa');
    var nameBasicCommand = parameters['NameBasicCommand'];
    var nameExtendCommand = parameters['NameExtendCommand'];
    var escapeIconIndex = Number(parameters['EscapeIconIndex']) || 82;
    var maxPageRows = Number(parameters['MaxPageRows']) || 10;
    var command1 = parameters['Command1'].split(',');
    var command2 = parameters['Command2'].split(',');
    var actorCommandOffsetX = Number(parameters['ActorCommandOffsetX']) || 0;
    var actorCommandOffsetY = Number(parameters['ActorCommandOffsetY']) || 0;
    var actorCommandWidth = Number(parameters['ActorCommandWidth']) || 280;
    var itemCommandUsable = parameters['ItemCommandUsable'] === 'true';
    var showActorActions = Number(parameters['ShowActorActions']);
    var actorCommandNameY = Number(parameters['ActorCommandNameY']) || 0;
    var showActorCommandMp = parameters['ShowActorCommandMp'] === 'true';
    var showActorCommandTp = parameters['ShowActorCommandTp'] === 'true';
    var statusOffsetX = Number(parameters['StatusOffsetX']) || 0;
    var statusOffsetY = Number(parameters['StatusOffsetY']) || 0;
    var showStateTurns = parameters['ShowStateTurns'] === 'true';
    var homePosition = [parameters['HomePosition1'].split(' '),parameters['HomePosition2'].split(' '),
        parameters['HomePosition3'].split(' '),parameters['HomePosition4'].split(' '),
        parameters['HomePosition5'].split(' '),parameters['HomePosition6'].split(' '),
        parameters['HomePosition7'].split(' '),parameters['HomePosition8'].split(' '),
        parameters['HomePosition9'].split(' '),parameters['HomePosition10'].split(' ')];
    var commandIcons = parameters['CommandIcons'].split(',').map(function(n){ return Number(n)});
    var passiveSkillType = Number(parameters['PassiveSkillType']) || 3;
    var stateHelpText = parameters['StateHelpTextAndIcon'].split(',')[0];
    var stateHelpIcon = Number(parameters['StateHelpTextAndIcon'].split(',')[1]) || 0;
    var formationText = parameters['FormationTextAndIcon'].split(',')[0];
    var formationIcon = Number(parameters['FormationTextAndIcon'].split(',')[1]) || 0;
    var logText = parameters['LogTextAndIcon'].split(',')[0];
    var logIcon = Number(parameters['LogTextAndIcon'].split(',')[1]) || 0;

    var moveCameraX = Number(parameters['MoveCameraX']);
    var enemyOffsetY = Number(parameters['EnemyOffsetY']);
    var moveCameraSpeed = Number(parameters['MoveCameraSpeed']);

    ////////////////////////////////////////////////////////////////////////////////////

    function BattleCameraManager() {
        throw new Error('This is a static class');
    };

    BattleCameraManager.initCamera = function() {
        this.x = 0;
        this.y = 0;
        //this.width = Graphics.boxHeight;
        //this.height = Graphics.boxWidth;
        this.scale = new Point(1.0,1.0);
        this.anchor = new Point(0.5,0.5);
        this._stack = [];
        this._initialized = true;
    };

    BattleCameraManager.update = function() {
        if (!this._initialized) this.initCamera();
        var updates = [this.updateMove,this.updateTurn,this.updateZoom,this.updateWait];
        if (this._stack.length === 0){ return }
        for (var i=0;i<this._stack.length;i++){
            var obj = this._stack[i];
            if (obj.dur > 0){ updates[obj.index].call(this,obj) }
            if (obj.dur <= 0){ this._stack[i] = null }
            if (obj.delay > 0){
                obj.delay--;
                break;
            }
        }
        var ary = [];
        for (var i=0;i<this._stack.length;i++){
            if (this._stack[i] !== null) { ary.push(this._stack[i]) }
        }
        this._stack = ary;
    };
    BattleCameraManager.updateMove = function(obj) {
        if (!obj) { return }
        if (obj.dur === obj.mDur){
            obj.bx = this.x;
            obj.by = this.y;
            if (obj.relative){
                obj.x += obj.bx;
                obj.y += obj.by;
            }
            obj.mSpeedX = (obj.x - obj.bx) / obj.mDur;
            obj.mSpeedY = (obj.y - obj.by) / obj.mDur;
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var xx = obj.bx + obj.mSpeedX * count;
        var yy = obj.by + obj.mSpeedY * count;
        this.x = xx;
        this.y = yy;
    };

    BattleCameraManager.updateTurn = function(obj) {
        if (!obj){ return }
        if (obj.dur === obj.mDur){
            obj.bsx = this.scale.x;
            obj.tSpeed = obj.bsx / (obj.mDur / 2);
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var zX = obj.bsx - (obj.tSpeed * count);
        this.scale = new Point( zX, this.scale.y);
    };

    BattleCameraManager.updateZoom = function(obj) {
        if (!obj){ return }
        if (obj.dur === obj.mDur){
            obj.bsx = this.scale.x;
            obj.bsy = this.scale.y;
            if (obj.relative){
                obj.zx += obj.bsx;
                obj.zy += obj.bsy;
            }
            obj.zSpeedX = (obj.zx - obj.bsx) / obj.mDur;
            obj.zSpeedY = (obj.zy - obj.bsy) / obj.mDur;
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var zX = obj.bsx + (obj.zSpeedX * count);
        var zY = obj.bsy + (obj.zSpeedY * count);
        this.scale = new Point(zX, zY);
    };

    BattleCameraManager.updateWait = function(obj) {
        obj.dur--;
    };

    BattleCameraManager.setParam = function(arg){
        var obj = {};
        obj.index = arg[0];
        obj.delay = 0;
        var duration = arg[1];
        if (!duration){ duration = 0 }
        if (duration < 0){
            duration = Math.abs(duration);
            obj.delay = duration;
        }
        obj.dur = duration;
        obj.mDur = duration;
        return obj;
    };

    BattleCameraManager.setMove = function(x,y,duration,relative) {
        if (duration){
            if (!x){ x = 0 }
            if (!y){ y = 0 }
            var obj = this.setParam([0,duration]);
            obj.x = x;
            obj.y = y;
            obj.relative = relative;
            this._stack.push(obj);
        } else {
            if (relative){
                this.x += x;
                this.y += y;
            } else {
                this.x = x;
                this.y = y;
            }
        }
    };

    BattleCameraManager.setTurn = function(duration) {
        if (duration){
            var obj = this.setParam([1,duration]);
            this._stack.push(obj);
        } else {
            this.scale.x = -1.0;
        }
    };

    BattleCameraManager.setZoom = function(zx,zy,duration,relative) {
        if (duration){
            if (!zx){ zx = 1.0 }
            if (!zy){ zy = 1.0 }
            var obj = this.setParam([2,duration]);
            obj.zx = zx/100;
            obj.zy = zy/100;
            obj.relative = relative;
            this._stack.push(obj);
        } else {
            if (relative){
                this.scale.x += zx / 100;
                this.scale.y += zy / 100;
            } else {
                this.scale.x = zx / 100;
                this.scale.y = zy / 100;
            }
        }
    };

    BattleCameraManager.setWait = function(duration) {
        if (duration){
            var obj = this.setParam([3,-duration]);
            this._stack.push(obj);
        }
    };

    BattleCameraManager.clearStack = function() {
        this._stack = [];
    };

    BattleCameraManager.resetCamera = function(){
        this.x = 0;
        this.y = 0;
        this.scale.x = 1.0;
        this.scale.y = 1.0;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.rotation = 0;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Game_BattlerBase.prototype.stateIds = function() {
        return this.states().reduce(function(r,state) {
            if (state.iconIndex > 0){ r.push(state.id) }
            return r;
        },[]);
    };

    Game_BattlerBase.prototype.buffIds = function() {
        var icons = [];
        for (var i = 0; i < this._buffs.length; i++) {
            if (this._buffs[i] !== 0) {
                icons.push(i);
            }
        }
        return icons;
    };

    var __GBBase_attackSkillId = Game_BattlerBase.prototype.attackSkillId;
    Game_BattlerBase.prototype.attackSkillId = function() {
        if (this._attackSkillId) {
            return this._attackSkillId;
        } else {
            return __GBBase_attackSkillId.call(this);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Game_Actor.prototype.onTurnEnd = function() {
        Game_Battler.prototype.onTurnEnd.call(this);
        this.clearTempInput();
    };

    Game_Actor.prototype.onBattleEnd = function() {
        Game_Battler.prototype.onBattleEnd.call(this);
        this.clearTempInput();
    };

    Game_Actor.prototype.clearTempInput = function() {
        this._tmpCommandPage = 0;
        this._tmpLastCommandSymbol = '';
    };

    Game_Actor.prototype.addBasicCommand = function() {
        var commandList = [];
        var spCommand = [];
        var tos = this.traitObjects();
        for (var i=0,max=tos.length;i<max;i++) {
            var to = tos[i];
            if (to.meta['追加コマンド']) commandList = commandList.concat(to.meta['追加コマンド'].split(','));
            if (to.meta['AddCommand']) commandList = commandList.concat(to.meta['AddCommand'].split(','));
            if (to.meta['隠しコマンド']) spCommand = spCommand.concat(to.meta['隠しコマンド'].split(','));
            if (to.meta['HideCommand']) spCommand = spCommand.concat(to.meta['HideCommand'].split(','));
        }
        commandList = commandList.filter(function(x,i,self){ return self.indexOf(x) === i });
        spCommand = spCommand.filter(function(x,i,self){ return self.indexOf(x) === i });
        spCommand = spCommand.filter(function(cmd){
            if (cmd.match(/([is])(\d+)/i)) {
                var r = true;
                var type = RegExp.$1.toUpperCase();
                var id = parseInt(RegExp.$2,10);
                var item = type === 'I' ? $dataItems[id] : $dataSkills[id];
                return this.canUse(item) && r;
            } else {
                return true;
            }
        }.bind(this));
        commandList = commandList.concat(spCommand);
        return commandList;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __GParty_addActor = Game_Party.prototype.addActor;
    Game_Party.prototype.addActor = function(actorId) {
        var bs = this.battleMembers.length;
        __GParty_addActor.call(this, actorId);
        if (this.inBattle() && bs !== this.battleMembers().length) this._refreshHome = true;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    //var __SsBattle_createBattleback = Spriteset_Battle.prototype.createBattleback;
    Spriteset_Battle.prototype.createBattleback = function() {
        var margin = moveCameraX;
        var x = -this._battleField.x - margin;
        var y = -this._battleField.y - margin;
        var width = Graphics.width + margin * 2;
        var height = Graphics.height + margin * 2;
        this._back1Sprite = new TilingSprite();
        this._back2Sprite = new TilingSprite();
        this._back1Sprite.bitmap = this.battleback1Bitmap();
        this._back2Sprite.bitmap = this.battleback2Bitmap();
        this._back1Sprite.move(x, y, width, height);
        this._back2Sprite.move(x, y, width, height);
        this._battleField.addChild(this._back1Sprite);
        this._battleField.addChild(this._back2Sprite);
        //__SsBattle_createBattleback.call(this);
    };

    var __SsBattle_createEnemies = Spriteset_Battle.prototype.createEnemies;
    Spriteset_Battle.prototype.createEnemies = function() {
        __SsBattle_createEnemies.call(this);
        this._enemySprites.forEach(function(enemy){
            enemy.setHome(enemy._homeX,enemy._homeY+enemyOffsetY);
        }.bind(this));
    };

    var __SsBattle_updatePosition = Spriteset_Battle.prototype.updatePosition;
    Spriteset_Battle.prototype.updatePosition = function() {
        __SsBattle_updatePosition.call(this);

        if (Imported.YEP_X_ActSeqPack3) return;

        if (!BattleCameraManager._initialized) return;
        if (this.bx === undefined) this.bx = this.x;
        if (this.by === undefined) this.by = this.y;
        if (this.bx !== BattleCameraManager.x) this.bx = BattleCameraManager.x;
        if (this.by !== BattleCameraManager.y) this.by = BattleCameraManager.y;
        if (this.anchor.x !== BattleCameraManager.anchor.x) this.anchor.x = BattleCameraManager.anchor.x;
        if (this.anchor.y !== BattleCameraManager.anchor.y) this.anchor.y = BattleCameraManager.anchor.y;
        if (this.scale.x !== BattleCameraManager.scale.x) this.scale.x = BattleCameraManager.scale.x;
        if (this.scale.y !== BattleCameraManager.scale.y) this.scale.y = BattleCameraManager.scale.y;
        this.x = Math.round(this.bx + $gameScreen.shake());
        this.y = Math.round(this.by);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SActor_setActorHome = Sprite_Actor.prototype.setActorHome;
    Sprite_Actor.prototype.setActorHome = function(index) {
        var ary = homePosition[$gameParty.battleMembers().length-1];
        ary = ary.map(function(a1) {
            return a1.split(',').map(function (a2) {
                return Number(a2);
            }.bind(this));
        }.bind(this));
        __SActor_setActorHome.call(this, index);
        var x = ary[index][0];
        var y = ary[index][1];
        this.setHome(x, y + 80);
        this._actor._home = [x,y];
    };

    var __SActor_updateTargetPosition = Sprite_Actor.prototype.updateTargetPosition;
    Sprite_Actor.prototype.updateTargetPosition = function() {
        if (this._actor.canMove() && BattleManager.isEscaped()) {
            this.retreat();
        } else {
            __SActor_updateTargetPosition.call(this);
        }
    };

    // 再定義 無効化
    Sprite_Actor.prototype.stepForward = function() {
        //this.startMove(-48, 0, 12);
    };

    // 再定義 距離を延ばす
    Sprite_Actor.prototype.retreat = function() {
        this.startMove(480, 0, 30);
    };

    var __SActor_update = Sprite_Actor.prototype.update;
    Sprite_Actor.prototype.update = function() {
        if (this._actor && $gameParty._refreshHome) {
            this.setActorHome(this._actor.index());
            this.retreat();
        }
        __SActor_update.call(this);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    // 再定義
    Window_BattleStatus.prototype.initialize = function() {
        var width = this.windowWidth();
        var height = this.windowHeight();
        var x = -this.standardPadding();
        Window_Selectable.prototype.initialize.call(this, x, -this.standardPadding(), width, height);
        this.refresh();
        this.openness = 0;
        this.opacity = 0;
    };

    // 再定義
    Window_BattleStatus.prototype.standardPadding = function() {
        return 4;
    };

    // 再定義
    Window_BattleStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth + this.standardPadding() * 2 + moveCameraX;
    };

    // 再定義
    Window_BattleStatus.prototype.windowHeight = function() {
        return Graphics.boxHeight + this.standardPadding()*2;
    };

    // 再定義
    Window_BattleStatus.prototype.drawItem = function(index) {
        var actor = $gameParty.battleMembers()[index];
        this.drawBasicArea(this.basicAreaRect(index), actor);
        //this.drawGaugeArea(this.gaugeAreaRect(index), actor);
    };

    // 再定義
    Window_BattleStatus.prototype.drawGaugeArea = function() {
    };

    // 再定義　使わない上に邪魔をするので範囲外を指定
    Window_BattleStatus.prototype.itemRect = function(index) {
        var rect = new Rectangle();
        rect.x = -1;
        rect.y = -1;
        rect.width = 1;
        rect.width = 1;
        return rect;
    };

    // 再定義
    Window_BattleStatus.prototype.basicAreaRect = function(index) {
        var home = [0,0];
        var actor = $gameParty.battleMembers()[index];
        if (actor) home = actor._home;
        var x = home[0] + 32 + statusOffsetX;
        var y = home[1]+this.standardPadding()+8 + statusOffsetY;
        var rect = { x:x, y:y, width:216, height:48 };
        return rect;
    };

    // 再定義
    Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
        this.contents.fontSize = 18;
        var xx = 0;
        if (showActorActions) {
            for (var i = 0, max = actor._actions.length; i < max; i++) {
                var action = actor._actions[i];
                if (BattleManager.actor() === actor && actor._actionInputIndex === i){
                    this.contents.fillRect(rect.x + xx-1, rect.y+1, 22,22,'rgba(255,255,255,1.0)');
                } else {
                    this.contents.fillRect(rect.x + xx-1, rect.y+1, 22,22,'rgba(128,128,128,0.5)');
                }
                if (action._item.isNull()) {
                    this.changePaintOpacity(false);
                    this.drawIcon(showActorActions, rect.x + xx, rect.y);
                } else {
                    this.changePaintOpacity(true);
                    this.drawIcon(action.item().iconIndex, rect.x + xx, rect.y);
                }
                xx += 21;
            }
            this.changePaintOpacity(true);
            xx += 4;
        }
        this.drawActorIcons(actor, rect.x + xx, rect.y, 128 - xx);
        //this.drawActorName(actor, rect.x, rect.y + 20, 150);
        this.drawActorHp(actor, rect.x, rect.y + 14, 108);
        this.drawActorMp(actor, rect.x, rect.y + 33, 56);
        this.drawActorTp(actor, rect.x+60, rect.y + 33, 48);
    };

    Window_BattleStatus.prototype.drawActorIcons = function(actor, x, y, width) {
        width = width || 144;
        var w = this.contents.fontSize + 4;
        var icons = actor.allIcons().slice(0, Math.floor(width / w));
        var stateIds = actor.stateIds();
        var buffIds = actor.buffIds();
        for (var i = 0; i < icons.length; i++) {
            var xx = x + w * i;
            var turns = 0;
            this.drawIcon(icons[i], xx, y);
            if ($gameParty.inBattle() && showStateTurns){
                if (stateIds.length > i){
                    var state = $dataStates[stateIds[i]];
                    turns = state.autoRemovalTiming === 0 ? 0 : actor._stateTurns[stateIds[i]];
                }else{
                    turns = actor._buffTurns[buffIds[i-stateIds.length]];
                }
                if (turns > 0){ this.drawText( turns, xx, y - 4, w, 'right') }
            }
        }
    };

    // 再定義
    Window_BattleStatus.prototype.drawActorHp = function(actor, x, y, width) {
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();
        this.drawGauge(x, y-8, width, actor.hpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.hpA, x, y, 44);
        this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
            this.hpColor(actor), this.normalColor());
    };

    // 再定義
    Window_BattleStatus.prototype.drawActorMp = function(actor, x, y, width) {
        var color1 = this.mpGaugeColor1();
        var color2 = this.mpGaugeColor2();
        this.drawGauge(x, y-8, width, actor.mpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.mpA, x, y, 44);
        this.changeTextColor(this.mpColor(actor));
        this.drawText(actor.mp, x, y, width, 'right');
    };

    // 再定義
    Window_BattleStatus.prototype.drawActorTp = function(actor, x, y, width) {
        width = width || 96;
        var color1 = this.tpGaugeColor1();
        var color2 = this.tpGaugeColor2();
        this.drawGauge(x, y-8, width, actor.tpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.tpA, x, y, 44);
        this.changeTextColor(this.tpColor(actor));
        this.drawText(actor.tp, x + width - 64, y, 64, 'right');
    };

    // 再定義
    Window_BattleStatus.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                       width, color1, color2) {
        var valueWidth = this.textWidth('0000');
        var slashWidth = this.textWidth('/');
        var x1 = x + width - valueWidth;
        var x2 = x1 - slashWidth;
        var x3 = x2 - valueWidth;
        this.changeTextColor(color1);
        this.drawText(current, x3, y, valueWidth, 'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(max, x1, y, valueWidth, 'right');
    };

    // 再定義
    Window_BattleStatus.prototype.updateCursor = function() {
        var index = this.index();
        var rect = { x:0, y:-48, width:64, height: 20 };
        if (index >= 0) {
            rect = this.basicAreaRect(index);
            rect.x = rect.x - 8;
            //rect.y = rect.y;
            rect.height = rect.height + 13;
            rect.width = rect.width - 92;
        }
        this.setCursorRect(rect.x,rect.y,rect.width,rect.height);
    };

    // 再定義
    Window_BattleStatus.prototype.drawIcon = function(iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        var n = Math.floor((this.contents.fontSize / 28) * Window_Base._iconWidth);
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y + 2, n, n);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WACommand_setup = Window_ActorCommand.prototype.setup;
    Window_ActorCommand.prototype.setup = function(actor) {
        this._skillTypes = null;
        this._commands = null;
        this._actor = actor;
        actor._attackSkillId = 0;
        this.selectLastCommand(actor);
        actor._actions[actor._actionInputIndex] = new Game_Action(actor);
        __WACommand_setup.call(this,actor);
    };

    Window_ActorCommand.prototype.selectLastCommand = function(actor) {
        if (actor && ConfigManager.commandRemember) {
            if (actor._lastCommandPage === undefined) actor._lastCommandPage = 0;
            this._subIndex = actor._lastCommandPage;
        } else {
            this._subIndex = 0;
            if (actor._tmpCommandPage) this._subIndex = actor._tmpCommandPage;
            if (actor._tmpLastCommandSymbol) this.selectSymbol(actor._tmpLastCommandSymbol);
        }
    };

    Window_ActorCommand.prototype.windowWidth = function() {
        return actorCommandWidth;
    };

    Window_ActorCommand.prototype.makeCommandList = function() {
        if (this._actor) {
            this.commandList(this._subIndex).forEach(function(cl){
                this.makeCommandContents(cl);
            }.bind(this));
        }
    };

    Window_ActorCommand.prototype.makeCommandContents = function(cl) {
        switch(cl) {
            case 'attack':
                this.addAttackCommand();
                break;
            case 'guard':
                this.addGuardCommand();
                break;
            case 'escape':
                this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
                break;
            case 'stateHelp':
                this.addCommand(stateHelpText, 'stateHelp');
                break;
            case 'formation':
                this.addCommand(formationText, 'formation');
                break;
            case 'log':
                this.addCommand(logText, 'log');
                break;
            default:
                if (typeof cl === 'string') {
                    if (cl.match(/([is])(\d+)/i)) {
                        var type = RegExp.$1.toUpperCase();
                        if (type === 'I') {
                            cl = $dataItems[parseInt(RegExp.$2, 10)];
                        } else {
                            cl = $dataSkills[parseInt(RegExp.$2, 10)];
                        }
                    }
                }

                var canUse = true;
                if (DataManager.isItem(cl)) canUse = this.canUseItem(cl);
                if (DataManager.isSkill(cl)) canUse = this._actor.canUse(cl);
                if (DataManager.isWeapon(cl)) canUse = true;
                this.addCommand(cl.name, 'direct', canUse, cl);
        }
    };

    Window_ActorCommand.prototype.canUseItem = function(item) {
        return $gameParty.canUse(item);
    };

    Window_ActorCommand.prototype.standardFontSize = function() {
        return 20;
    };

    Window_ActorCommand.prototype.lineHeight = function() {
        return this.standardFontSize() + 8;
    };

    Window_ActorCommand.prototype.itemRect = function(index) {
        var rect = Window_Selectable.prototype.itemRect.call(this, index);
        rect.y += this.offsetHeight();
        return rect;
    };

    Window_ActorCommand.prototype.maxPageRows = function() {
        return maxPageRows;
    };

    Window_ActorCommand.prototype.offsetHeight = function() {
        return 64;
    };

    Window_ActorCommand.prototype.refresh = function() {
        this.clearCommandList();
        this.makeCommandList();
        var l = Math.min(this._list.length,this.maxPageRows());
        this.height = l * this.lineHeight() + this.standardPadding() * 2 + this.offsetHeight();
        this._upArrowSprite.y += this.offsetHeight();
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
        this.drawActorBasic();
    };

    Window_ActorCommand.prototype.drawActorBasic = function() {
        this.resetTextColor();
        this.changePaintOpacity(true);
        var y = 20;
        if (this._actor) {
            this.drawActorName(this._actor, 0, actorCommandNameY, this.contentsWidth());
            this.contents.fontSize = 18;
            var fs = this.contents.fontSize;
            var x = 0;
            if (showActorCommandMp) {
                this.drawActorMp(this._actor, x, y + 4, 64);
                x += 70;
            }
            if (showActorCommandTp) {
                this.drawActorTp(this._actor, x, y + 4, 64);
            }
            for (var i=0,max=this.pageMax();i<max;i++){
                var stype = this.skillTypes()[(max - 1) - i];
                this.changePaintOpacity(this._subIndex === ((max - 1) - i));
                var icon = this.typeIcon(stype);
                this.drawIcon(icon, this.contentsWidth() - (fs+2) * (i+1), 0);
                /*if (this.commandList( ((max - 1) - i)).length === 0) {
                    this.contents.fillRect(this.contentsWidth() - (fs + 2) * (i + 1), 2,20,20,'rgba(128,0,0,0.5)');
                    this.changeTextColor(this.textColor(2));
                    this.drawText('×',this.contentsWidth() - (fs + 2) * (i + 1)+9, 0);
                    this.changeTextColor(this.normalColor());
                }*/
                this.changePaintOpacity(true);
            }
            this.contents.fontSize = 16;
            var name = this.commandTypeName();
            this.drawText(name, 0, 24, this.contentsWidth(), 'right');
            this.contents.fontSize = this.standardFontSize();
            this.contents.paintOpacity = 128;
            this.contents.fillRect(0,y + 29,this.contentsWidth(),2,this.normalColor());
            this.contents.paintOpacity = 255;
        }
    };

    Window_ActorCommand.prototype.typeIcon = function(stype) {
        var icon = 0;
        if (stype <= 0) {
            icon = commandIcons[Math.abs(stype)];
        } else if (stype > 1000) {
            icon = $dataWeapons[stype-1000].iconIndex;
        } else {
            icon = commandIcons[stype+2];
        }
        return icon;
    };

    Window_ActorCommand.prototype.commandTypeName = function () {
        var name = '';
        var st = this.skillTypes()[this._subIndex];
        switch(st){
            case -2: name = nameExtendCommand;break;
            case -1: name = TextManager.item;break;
            case  0: name = nameBasicCommand;break;
            default:
                if (st > 1000) {
                    name = $dataWeapons[st-1000].name;
                } else {
                    name = $dataSystem.skillTypes[st];
                }
        }
        return name;
    };

    Window_ActorCommand.prototype.drawItem = function(index) {
        var rect = this.itemRectForText(index);
        var align = 'left';//this.itemTextAlign();
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        this.drawItemIcon(index, rect.x, rect.y);
        this.drawText(this.commandName(index), rect.x + this.standardFontSize() + 4, rect.y, rect.width - this.costWidth(), align);
        if (this._list[index].ext){
            var item = this._list[index].ext;
            if (DataManager.isItem(item)) {
                this.drawItemNumber(item, rect.x, rect.y, rect.width);
            } else if (DataManager.isSkill(item)) {
                this.drawSkillCost(item, rect.x, rect.y, rect.width);
            }
        }
    };

    Window_ActorCommand.prototype.drawItemIcon = function(index, x, y) {
        var icon = 0;
        if (this.commandSymbol(index) === 'attack') {
            icon = $dataSkills[this._actor.attackSkillId()].iconIndex;
        } else if (this.commandSymbol(index) === 'guard') {
            icon = $dataSkills[this._actor.guardSkillId()].iconIndex;
        } else if (this.commandSymbol(index) === 'escape') {
            icon = escapeIconIndex;
        } else if (this.commandSymbol(index) === 'stateHelp') {
            icon = stateHelpIcon;
        } else if (this.commandSymbol(index) === 'formation') {
            icon = formationIcon;
        } else if (this.commandSymbol(index) === 'log') {
            icon = logIcon;
        } else {
            if (this._list[index].ext) icon = this._list[index].ext.iconIndex;
        }
        this.drawIcon(icon, x, y);
    };

    Window_ActorCommand.prototype.needsNumber = function() {
        return true;
    };

    Window_ActorCommand.prototype.drawItemNumber = function(item, x, y, width) {
        if (this.needsNumber()) {
            this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(item), x, y, width, 'right');
        }
    };

    Window_ActorCommand.prototype.costWidth = function() {
        return this.textWidth('000');
    };

    Window_ActorCommand.prototype.drawSkillCost = function(skill, x, y, width) {
        if (this._actor.skillTpCost(skill) > 0) {
            this.changeTextColor(this.tpCostColor());
            this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
        } else if (this._actor.skillMpCost(skill) > 0) {
            this.changeTextColor(this.mpCostColor());
            this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
        }
    };

    Window_ActorCommand.prototype.cursorRight = function(wrap) {
        var prevIndex = this._subIndex;
        for (;;) {
            this._commands = null;
            this._subIndex++;
            this._subIndex = this._subIndex % this.pageMax();
            if (this.commandList(this._subIndex).length > 0) break;
        }
        if (prevIndex !== this._subIndex) SoundManager.playCursor();
        this.select(0);
        this.refresh();
    };

    Window_ActorCommand.prototype.cursorLeft = function(wrap) {
        var prevIndex = this._subIndex;
        for (;;) {
            this._commands = null;
            this._subIndex += this.pageMax() - 1;
            this._subIndex = this._subIndex % this.pageMax();
            if (this.commandList(this._subIndex).length > 0) break;
        }
        if (prevIndex !== this._subIndex) SoundManager.playCursor();
        this.select(0);
        this.refresh();
    };

    Window_ActorCommand.prototype.pageMax = function() {
        if (!this._actor) return 1;
        return this.skillTypes().length;
    };

    Window_ActorCommand.prototype.skillTypes = function() {
        if (this._skillTypes) return this._skillTypes;
        if (!this._actor) return [];
        var ary = this._actor.addedSkillTypes();
        var a2 = [];
        ary = ary.filter(function(x,i,self){ return self.indexOf(x) === i });
        if (Imported['yPassiveSkill']) {
            ary = ary.filter(function(a){ return a !== passiveSkillType }.bind(this));
        }
        for(var i=0,max=this._actor.skills().length;i<max;i++) {
            var skill = this._actor.skills()[i];
            if (!a2.contains(skill.stypeId) && ary.contains(skill.stypeId)) a2.push(skill.stypeId);
        }
        ary = a2;
        if (command1[0]) ary.unshift(0);
        if (this.canItem()) ary.push(-1);
        if (command2[0]) ary.push(-2);
        this._skillTypes = ary;
        return this._skillTypes;
    };

    Window_ActorCommand.prototype.canItem = function() {
        if (!itemCommandUsable) return false;
        var items = $gameParty.items();
        for (var i=0,max=items.length;i<max;i++) {
            var item = items[i];
            if (item && this._actor.meetsItemConditions(item)) return true;
        }
        return false;
    };

    Window_ActorCommand.prototype.commandList = function(index) {
        if (!this._actor) return [];
        if (this._commands && this._commands[index]) return this._commands[index];
        if (!this._commands) this._commands = [];
        this._commands[index] = this.makeCommands(index);
        return this._commands[index];
    };

    Window_ActorCommand.prototype.makeCommands = function(index) {
        var list = [];
        var type = this.skillTypes()[index];
        if (type === 0) {
            list = this.makeBasicCommands();
        } else if (type === -2) {
            list = this.makeExtendCommands();
        } else if (type === -1) {
            list = this.makeItemCommands();
        } else {
            list = this.makeSkillCommands(type);
        }
        return list;
    };

    Window_ActorCommand.prototype.makeBasicCommands = function() {
        var list = [];
        command1.forEach(function(c){ list.push(c) }.bind(this));
        list = list.concat(this._actor.addBasicCommand());
        return list;
    };

    Window_ActorCommand.prototype.makeExtendCommands = function() {
        var list = [];
        command2.forEach(function(c){ list.push(c) }.bind(this));
        return list;
    };

    Window_ActorCommand.prototype.makeItemCommands = function() {
        var list = [];
        var items = $gameParty.items();
        items.forEach(function(item){
            if (item && $gameParty.canUse(item)) list.push(item);
        }.bind(this));
        return list;
    };

    Window_ActorCommand.prototype.makeSkillCommands = function(type) {
        var list = [];
        this._actor.skills().forEach(function(skill){
            if (skill && type === skill.stypeId) list.push(skill);
        }.bind(this));
        return list;
    };

    Window_ActorCommand.prototype.drawIcon = function(iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        var n = Math.floor((this.contents.fontSize / 28) * Window_Base._iconWidth);
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y + 2, n, n);
    };

    Window_ActorCommand.prototype.onTouch = function(triggered) {
        var lastIndex = this.index();
        var x = this.canvasToLocalX(TouchInput.x);
        var y = this.canvasToLocalY(TouchInput.y);
        var hitIndex = this.hitTest(x, y);
        if (hitIndex >= 0) {
            if (hitIndex === this.index()) {
                if (triggered && this.isTouchOkEnabled()) {
                    this.processOk();
                }
            } else if (this.isCursorMovable()) {
                this.select(hitIndex);
            }
        } else if (this._stayCount >= 10) {
            if (y < this.padding) {
                this.cursorUp();
            } else if (y >= this.height - this.padding) {
                this.cursorDown();
            } else if (x < this.padding) {
                this.cursorLeft();
            } else if (x >= this.width - this.padding) {
                this.cursorRight();
            }
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    };

    var __WACommand_processOk = Window_ActorCommand.prototype.processOk;
    Window_ActorCommand.prototype.processOk = function() {
        if (this._actor) {
            if (ConfigManager.commandRemember) this._actor._lastCommandPage = this._subIndex;
            this._actor._tmpCommandPage = this._subIndex;
            this._actor._tmpLastCommandSymbol = this.currentSymbol();
        }
        __WACommand_processOk.call(this);
    };

    var __WACommand_selectLast = Window_ActorCommand.prototype.selectLast;
    Window_ActorCommand.prototype.selectLast = function() {
        __WACommand_selectLast.call(this);
        if (this._actor && ConfigManager.commandRemember) {
            var sIndex = this._actor._lastCommandPage;
            if (sIndex) this._subIndex = sIndex;
        }
    };

    // 再定義
    Window_ActorCommand.prototype.drawActorMp = function(actor, x, y, width) {
        var color1 = this.mpGaugeColor1();
        var color2 = this.mpGaugeColor2();
        this.drawGauge(x, y-4, width, actor.mpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.mpA, x, y, 44);
        this.changeTextColor(this.mpColor(actor));
        this.drawText(actor.mp, x, y, width, 'right');
    };

    // 再定義
    Window_ActorCommand.prototype.drawActorTp = function(actor, x, y, width) {
        width = width || 96;
        var color1 = this.tpGaugeColor1();
        var color2 = this.tpGaugeColor2();
        this.drawGauge(x, y-4, width, actor.tpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.tpA, x, y, 44);
        this.changeTextColor(this.tpColor(actor));
        this.drawText(actor.tp, x + width - 64, y, 64, 'right');
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WBEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function(x, y) {
        __WBEnemy_initialize.call(this, x, y);
        this.opacity = 0;
    };

    Window_BattleEnemy.prototype.windowWidth = function() {
        return Graphics.boxWidth + this.standardPadding();
    };

    Window_BattleEnemy.prototype.windowHeight = function() {
        return Graphics.boxHeight + this.standardPadding() * 2;
    };

    Window_BattleEnemy.prototype.standardFontSize = function() {
        return 20;
    };

    Window_BattleEnemy.prototype.itemRect = function(index) {
        var enemy = this._enemies[index];
        var sprite = SceneManager._scene._spriteset._enemySprites.filter(function(s){
            return enemy === s._enemy;
        }.bind(this))[0];
        var x = sprite._homeX - 110 + 48;
        var y = sprite._homeY - this.lineHeight();
        return {x:x,y:y,width:220,height:this.lineHeight()};

    };

    Window_BattleEnemy.prototype.updateCursor = function() {
        if (this._cursorAll) {
            this.setCursorRect(0, 0, this.contents.width, this.contents.height);
            this.setTopRow(0);
        } else if (this.isCursorVisible()) {
            var rect = this.itemRect(this.index());
            this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
        } else {
            this.setCursorRect(0, 0, 0, 0);
        }
    };

    Window_BattleEnemy.prototype.drawItem = function(index) {
        this.resetTextColor();
        var name = this._enemies[index].name();
        var rect = this.itemRectForText(index);
        this.drawText(name, rect.x, rect.y, rect.width, 'center');
    };

    ////////////////////////////////////////////////////////////////////////////////////

    if (Imported.YEP_BattleEngineCore) {
        var __WEVSelect_makeWindowBoundaries = Window_EnemyVisualSelect.prototype.makeWindowBoundaries;
        Window_EnemyVisualSelect.prototype.makeWindowBoundaries = function () {
            __WEVSelect_makeWindowBoundaries.call(this);
            this._maxY += SceneManager._scene._statusWindow.height;
        };

        var __WEVSelect_updateWindowPosition = Window_EnemyVisualSelect.prototype.updateWindowPosition;
        Window_EnemyVisualSelect.prototype.updateWindowPosition = function() {
            __WEVSelect_updateWindowPosition.call(this);
            this.x += BattleCameraManager.x;
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////

    Scene_Battle.prototype.createWindowLayer = function() {
        Scene_Base.prototype.createWindowLayer.call(this);
        var width = Graphics.boxWidth + moveCameraX;
        var height = Graphics.boxHeight;
        var x = (Graphics.width - width) / 2 + moveCameraX / 2;
        var y = (Graphics.height - height) / 2;
        this._windowLayer2 = new WindowLayer();
        this._windowLayer2.move(x, y, width, height);
        this.addChild(this._windowLayer2);
        this._windowLayer3 = new WindowLayer();
        this._windowLayer3.move(x, y, width, height);
        this.addChild(this._windowLayer3);
        this._wlx = x;
        this._wly = y;
    };

    Scene_Battle.prototype.addWindow2 = function(window) {
        this._windowLayer2.addChild(window);
    };

    Scene_Battle.prototype.addWindow3 = function(window) {
        this._windowLayer3.addChild(window);
    };

    var __SBattle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
    Scene_Battle.prototype.createActorCommandWindow = function() {
        __SBattle_createActorCommandWindow.call(this);
        this._actorCommandWindow.setHandler('direct', this.commandDirect.bind(this));
        for (var key in this._partyCommandWindow._handlers) {
            if (key !== 'fight') {
                this._actorCommandWindow._handlers[key] = this._partyCommandWindow._handlers[key];
            }
        }
    };

    // 再定義
    Scene_Battle.prototype.createEnemyWindow = function() {
        this._enemyWindow = new Window_BattleEnemy(0, 0);
        this._enemyWindow.x = -this._enemyWindow.standardPadding();
        this._enemyWindow.y = -this._enemyWindow.standardPadding();
        this._enemyWindow.setHandler('ok',     this.onEnemyOk.bind(this));
        this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
        this._windowLayer.removeChild(this._statusWindow);
        this._windowLayer.removeChild(this._actorCommandWindow);
        this._windowLayer.removeChild(this._actorWindow);
        this.addWindow(this._enemyWindow);
        this.addWindow2(this._statusWindow);
        this.addWindow2(this._actorWindow);
        this.addWindow3(this._actorCommandWindow);
        if (Imported.YEP_BattleEngineCore) this._enemyWindow.y = Graphics.boxHeight;
    };

    var __SBattle_createActorWindow = Scene_Battle.prototype.createActorWindow;
    Scene_Battle.prototype.createActorWindow = function() {
        __SBattle_createActorWindow.call(this);
        this._actorWindow.x = this._statusWindow.x;
    };

    var __SBattle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
    Scene_Battle.prototype.createPartyCommandWindow = function() {
        __SBattle_createPartyCommandWindow.call(this);
        this._partyCommandWindow.hide();
    };

    /*var __SBattle_commandAttack = Scene_Battle.prototype.commandAttack;
    Scene_Battle.prototype.commandAttack = function() {
        BattleManager.inputtingAction().subject()._attackSkillId = 0;
        __SBattle_commandAttack.call(this);
    };*/

    Scene_Battle.prototype.commandDirect = function() {
        var item = this._actorCommandWindow.currentExt();
        var action = BattleManager.inputtingAction();
        if (DataManager.isItem(item)) action.setItem(item.id);
        if (DataManager.isSkill(item)) action.setSkill(item.id);
        if (DataManager.isWeapon(item)){
            var skill = null;
            if (item.meta['通常攻撃スキル']) skill = $dataSkills[parseInt(item.meta['通常攻撃スキル'],10)];
            if (item.meta['AttackSkill']) skill = $dataSkills[parseInt(item.meta['AttackSkill'],10)];
            if (skill) {
                action.subject()._attackSkillId = skill.id;
                action.setSkill(skill.id);
            } else {
                action.subject()._attackSkillId = 0;
                action.setAttack();
            }
            //item = skill;
        }
        BattleManager.actor().setLastBattleSkill(item);
        this._actorCommandWindow.close();
        this.onSelectAction();
    };

    // 再定義
    Scene_Battle.prototype.onEnemyCancel = function() {
        this._enemyWindow.hide();
        this._actorCommandWindow.activate();
    };

    Scene_Battle.prototype.moveCameraActorPosition = function() {
        if (Imported.YEP_X_ActSeqPack3) return;
        BattleCameraManager.clearStack();
        BattleCameraManager.setWait(5);
        BattleCameraManager.setMove(-moveCameraX, 0, moveCameraSpeed);
    };

    Scene_Battle.prototype.moveCameraBasicPosition = function() {
        if (Imported.YEP_X_ActSeqPack3) return;
        BattleCameraManager.clearStack();
        BattleCameraManager.setMove(0,0,moveCameraSpeed);
    };

    Scene_Battle.prototype.moveCameraEnemyPosition = function() {
        if (Imported.YEP_X_ActSeqPack3) return;
        BattleCameraManager.clearStack();
        BattleCameraManager.setMove(moveCameraX/2,0,moveCameraSpeed);
    };

    /*
    var __SBattle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;
    Scene_Battle.prototype.startPartyCommandSelection = function() {
        __SBattle_startPartyCommandSelection.call(this);
    };
    */

    var __SBattle_startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
    Scene_Battle.prototype.startActorCommandSelection = function() {
        __SBattle_startActorCommandSelection.call(this);
        this.refreshStatus();
        this._setActorCamera = true;
    };

    var __SBattle_selectActorSelection = Scene_Battle.prototype.selectActorSelection;
    Scene_Battle.prototype.selectActorSelection = function() {
        __SBattle_selectActorSelection.call(this);
        this._setActorCamera = true;
    };

    var __SBattle_selectEnemySelection = Scene_Battle.prototype.selectEnemySelection;
    Scene_Battle.prototype.selectEnemySelection = function() {
        __SBattle_selectEnemySelection.call(this);
        this.moveCameraEnemyPosition();
    };

    var __SBattle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
    Scene_Battle.prototype.onEnemyCancel = function() {
        __SBattle_onEnemyCancel.call(this);
        this._setActorCamera = true;
    };

    var __SBattle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        __SBattle_update.call(this);
        if (this._refreshStatus && this._statusWindow.isOpen()) {
            this._statusWindow.refresh();
            this._refreshStatus = false;
        }
        if ($gameParty._refreshHome) {
            for (var i=0,max=$gameParty.battleMembers().length;i<max;i++) {
                //var actor = $gameParty.members()[i];
                var actor = this._spriteset._actorSprites[i];
                if (actor) {
                    if (!actor._actor) actor._actor = $gameParty.battleMembers()[i];
                    actor.setActorHome(i);
                    actor.startMove(0, 0, 30);
                }
            }
            $gameParty._refreshHome = false;
        }
        this.updateActorCameraPosition();
    };

    var __SBattle_updateStatusWindow = Scene_Battle.prototype.updateStatusWindow;
    Scene_Battle.prototype.updateStatusWindow = function() {
        BattleCameraManager.update();
        __SBattle_updateStatusWindow.call(this);
        this.updateWindowOC();
    };

    // 再定義
    Scene_Battle.prototype.updateWindowPositions = function() {
        if (this._actorCommandWindow.active) {
            var actor = BattleManager.actor();
            var home = [0, 0];
            if (actor) home = actor._home;
            var h = this._actorCommandWindow.height;
            var w = this._actorCommandWindow.width;
            var x = home[0] - 32 - w + actorCommandOffsetX;
            var y = home[1] - h / 2 + 56 + actorCommandOffsetY;
            y = y.clamp(0, Graphics.boxHeight - h);
            this._actorCommandWindow.x = x;
            this._actorCommandWindow.y = y;
        }
    };

    Scene_Battle.prototype.updateWindowOC = function() {
        //if (BattleManager._phase !== 'input') this._statusWindow.close();
        if (this._enemyWindow.active){
            this._actorCommandWindow.close();
        } else if (this._partyCommandWindow.active) {
            this._partyCommandWindow.deactivate();
            this.selectNextCommand();
            this._statusWindow.refresh();
        }
        if (this._actorCommandWindow.active){
            this._actorCommandWindow.open();
        } else {
            this._actorCommandWindow.close();
        }
        if (this._actorCommandWindow.active || this._actorWindow.active) {
            this._statusWindow.open();
        } else {
            this._statusWindow.close();
        }
        this.moveCamera();
    };

    Scene_Battle.prototype.moveCamera = function() {
        if (!BattleCameraManager._initialized) return;
        var x = this._wlx + this._spriteset.x;
        var y = this._wly + this._spriteset.y;
        //var ax = BattleCameraManager.anchor.x;
        //var ay = BattleCameraManager.anchor.y;
        //var zx = BattleCameraManager.scale.x;
        //var zy = BattleCameraManager.scale.y;
        if (this._windowLayer2.x !== x) {
            //this._windowLayer.x = x;
            this._windowLayer2.x = x;
            this._windowLayer3.x = x;
        }
        if (this._windowLayer2.y !== y) {
            //this._windowLayer.y = y;
            this._windowLayer2.y = y;
            this._windowLayer3.y = y;
        }
        if (Imported['CommonPopupCore']) {
            if ( CommonPopupManager._tempCommonSprites) {
                CommonPopupManager._tempCommonSprites.forEach(function (s) {
                    if (s._lsx === undefined) s._lsx = s.x;
                    if (s._lsy === undefined) s._lsy = s.y;
                    s.x = s._lsx - this._spriteset.x;
                    s.y = s._lsy - this._spriteset.y;
                }.bind(this));
            }
        }
    };

    Scene_Battle.prototype.updateActorCameraPosition = function() {
        if (this._actorCommandWindow.active && this._setActorCamera) {
            var actor = this._actorCommandWindow._actor;
            this.moveCameraActorPosition(actor);
            this._setActorCamera = false;
        }
    };

    // 再定義 ステータスウィンドウのリフレッシュは1フレーム1回で十分なので、フラグだけ立てる
    Scene_Battle.prototype.refreshStatus = function() {
        //this._statusWindow.refresh();
        this._refreshStatus = true;
    };

    var __SBattle_endCommandSelection = Scene_Battle.prototype.endCommandSelection;
    Scene_Battle.prototype.endCommandSelection = function() {
        __SBattle_endCommandSelection.call(this);
        this.moveCameraBasicPosition();
    };

    if (Imported['SceneFormation']) {
        var __SBattle_returnScene = Scene_Battle.prototype.returnScene;
        Scene_Battle.prototype.returnScene = function() {
            __SBattle_returnScene.call(this);
            this._statusWindow.open();
            BattleManager.clearActor();
            this._partyCommandWindow.deactivate();
            this.selectNextCommand();
            this._statusWindow.refresh();
        };

        var __SBattle_onMemberOk = Scene_Battle.prototype.onMemberOk;
        Scene_Battle.prototype.onMemberOk = function() {
            __SBattle_onMemberOk.call(this);
            if (this._scopeIndex === null) $gameParty._refreshHome = true;
        };

        var __SBattle_onStandOk = Scene_Battle.prototype.onStandOk;
        Scene_Battle.prototype.onStandOk = function() {
            __SBattle_onStandOk.call(this);
            if (this._scopeIndex === null) $gameParty._refreshHome = true;
        };

        var __SBattle_onRelease = Scene_Battle.prototype.onRelease;
        Scene_Battle.prototype.onRelease = function() {
            __SBattle_onRelease.call(this);
            $gameParty._refreshHome = true;
        };

        var __SBattle_onAdd = Scene_Battle.prototype.onAdd;
        Scene_Battle.prototype.onAdd = function() {
            __SBattle_onAdd.call(this);
            $gameParty._refreshHome = true;
        };
    }

    if (Imported['StackBattleLog']) {
        var __SBattle_onLogOk = Scene_Battle.prototype.onLogOk;
        Scene_Battle.prototype.onLogOk = function() {
            __SBattle_onLogOk.call(this);
            this._partyCommandWindow.deactivate();
            this._actorCommandWindow.activate();
            this._actorCommandWindow.open();
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////
}());