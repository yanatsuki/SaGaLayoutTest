// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":false,"description":"v1.17 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"932","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":false,"description":"v1.38a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"121","Physical Animation":"0","Magical Animation":"122","Enemy Attack Animation":"0","Reflect Animation":"42","Motion Waiting":"true","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"false","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack1","status":false,"description":"v1.10 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":false,"description":"v1.11 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":false,"description":"v1.03 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"ConditionallyCore","status":true,"description":"ver1.051/条件付き○○のプラグインを使用するのに、必要となる条件をまとめたベースプラグインです。","parameters":{}},
{"name":"ConditionallyChangeSkill","status":true,"description":"ver1.03/条件を満たすと別のスキルやアイテムに変化するスキルやアイテムを作成できます。","parameters":{"Display Flash Text":"_subjectは_nameを閃いた！","Cond Change Skill Flash Anime":"121"}},
{"name":"ActionSetBeforeSwitchOn","status":true,"description":"ver1.00/行動決定前やイベント判定前に条件に従ってスイッチを操作します。","parameters":{"CheckFrameCount":"1"}},
{"name":"EnemyBreathing","status":true,"description":"エネミーを上に伸ばしたり、横に伸ばしたり、反転させたりします。","parameters":{"Breath Frequency":"10","Breath Rhythem":"0,0,1,2,3,4,5,5,4,3,2,1","ExpansionX":"0.005","Enemy Size":"10"}},
{"name":"SceneFormation","status":true,"description":"ver1.07/並び替えシーンを追加します。","parameters":{"Stand Members Size":"8","Max Battle Members Size":"5","Use Menu Formation Scene":"true","Formation Scene Battle Name":"戦闘メンバー","Formation Scene Stand Name":"待機メンバー","Use Battle Formation Switch ID":"20","Battle Command Formation":"Formation","Status Window Font Size":"24","Status Block Width":"372"}},
{"name":"DPoint","status":true,"description":"ver1.00/ダメージ計算式に使用できるD値を設定できるようにします。","parameters":{"DefaultDFormula":"a.atk / 5","DefaultWeaponD":"0"}},
{"name":"BattleLayout-SaGa","status":true,"description":"ver1.00/戦闘のレイアウトをサガっぽくします。","parameters":{"【基本設定】":"","NameBasicCommand":"アクター","NameExtendCommand":"パーティ","EscapeIconIndex":"82","":"","【コマンドの設定】":"","MaxPageRows":"10","Command1":"attack,guard,i7","Command2":"escape","ActorCommandOffsetX":"0","ActorCommandOffsetY":"0","ActorCommandWidth":"320","CommandIcons":"81,209,83,79,78","ActorCommandNameY":"24","ShowActorCommandMp":"false","ShowActorCommandTp":"false","ItemCommandUsable":"true","【ステータスの設定】":"","StatusOffsetX":"0","StatusOffsetY":"0","ShowActorActions":"16","ShowStateTurns":"true","【カメラの設定】":"","MoveCameraX":"92","MoveCameraSpeed":"10","【エネミーの設定】":"","EnemyOffsetY":"140","【ホームの設定】":"","HomePosition1":"700,300","HomePosition2":"640,240 700,360","HomePosition3":"640,220 670,300 700,380","HomePosition4":"640,200 660,266 680,333 700,400","HomePosition5":"640,180 655,240 670,300 685,360 700,420","HomePosition6":"550,280 630,200 630,360 710,120 710,440 730,280","HomePosition7":"550,220 550,380 660,140 660,460 660,300 750,220 750,380","HomePosition8":"510,300 550,210 550,390 660,120 660,480 710,300 750,210 750,390","HomePosition9":"510,210 510,390 540,120 540,480 630,300 720,120 720,480 750,210 750,390","HomePosition10":"490,300 540,210 540,390 510,120 510,480 690,300 720,210 720,390 750,120 750,480","【拡張設定】":"","PassiveSkillType":"3","StateHelpTextAndIcon":"ステート詳細,79","FormationTextAndIcon":"パーティ編成,75","LogTextAndIcon":"ログ,83"}},
{"name":"AnyEquip_EquipCommands","status":true,"description":"ver1.00/アイテムを装備しないと使えないなど、サガっぽい装備システムとコマンドを実装します。","parameters":{"SlotSize":"10","ItemEquipType":"6","MultipleEquipType":"1,5,6","UnequipText":"-----------------------","HideSkillType":"4,5,6,7,8,9"}},
{"name":"MotionSetting","status":true,"description":"ver1.00/スキルの行動モーションを再設定します。","parameters":{"PhysicalSkillMotion":"attack","MagicalSkillMotion":"","CertainSkillMotion":"","HideWeaponSkillTypes":"1"}},
{"name":"BattleFormation","status":true,"description":"ver1.00/陣形の仕組みを追加します。","parameters":{"BasicFormationText":"基本陣形","BasicFormationHelp":"もっとも基本となる陣形。特に特別な効果はない。","AddMenuBattleFormation":"true","MenuBattleFormationTitle":"陣形","FormationListWidth":"320","ShowParamWindow":"true","ParamWindowWidth":"220","BasicWinExp":"1","MasterText":"Master!","LevelUpText":"_nameの熟練度が上がった！","MasterFormText":"_nameをマスターした！","ActiveHelpText":"決定:並び替え　←,キャンセル:リストに戻る","DeactiveHelpText":"決定:陣形を変更　→:陣形の詳細を確認,並び替え","":"","【ホームの設定】":"","HomePosition1":"700,300","HomePosition2":"640,240 700,360","HomePosition3":"640,220 670,300 700,380","HomePosition4":"640,200 660,266 680,333 700,400","HomePosition5":"550,140 580,220 610,300 640,380 670,460","HomePosition6":"550,280 630,200 630,360 710,120 710,440 730,280","HomePosition7":"550,220 550,380 660,140 660,460 660,300 750,220 750,380","HomePosition8":"510,300 550,210 550,390 660,120 660,480 710,300 750,210 750,390","HomePosition9":"510,210 510,390 540,120 540,480 630,300 720,120 720,480 750,210 750,390","HomePosition10":"490,300 540,210 540,390 510,120 510,480 690,300 720,210 720,390 750,120 750,480"}},
{"name":"EscapeRateTrait","status":true,"description":"ver1.00/逃げるの成功率を補正する特徴を追加します。","parameters":{}},
{"name":"StateAddRemoveCommonTrait","status":true,"description":"ver1.00/ステートが付与または解除された時に、コモンイベントを予約する特徴を追加します。","parameters":{}}
];
