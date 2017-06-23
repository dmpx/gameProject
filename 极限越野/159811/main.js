var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path='src/riverrun/ImportTS.d.ts' />
///<reference path='src/uphill/ImportTS.d.ts' />
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.config = document['ccConfig'];
        this._screenCoveredWarning = false;
        tx.FixBug2_2_2.init();
        tx.FixBug2_2_2.FixCcsUiLoadPlist();
        tx.UILayerTx.init();
        cc.log("!!!!!!!!!!!isMoblieSys!!!!!!!!!!!" + tx.isMoblieSys());
        rr.Linker.SkipLoadLogoInIE9 = false;
        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    }
    Main.prototype.applicationDidFinishLaunching = function () {
        //        if (cc.RenderDoesnotSupport()) {
        //            //show Information to user
        //            alert("Browser doesn't support WebGL");
        //            return false;
        //        }
        // initialize director
        var director = cc.Director.getInstance();
        tx.SharedObjectUtil.init(Root.GAME_NAME);
        //多国初始化
        rr.Localization.init(false, 1);
        //TC初始化
        TC.init(Root.GAME_NAME, false);
        //        WSSLog.init("ws://192.168.189.64:9000");
        rr.ResPathManager.KEYWORD_TXT = ["UI_all_tx"];
        if (cc.Application.getInstance().getTargetPlatform() == cc.TARGET_PLATFORM.PC_BROWSER) {
            Root.__RESOLUTION_TYPE__ = Root.RESOLUTION_TYPE_HD;
        }
        else {
            Root.__RESOLUTION_TYPE__ = Root.RESOLUTION_TYPE_NORMAL;
        }
        //        Root.__RESOLUTION_TYPE__ = tx.getResolutionType(-1);
        this.setResolutionSize();
        //设置资源缩放
        cc.EGLView.getInstance().resizeWithBrowserSize(true);
        cc.EGLView.getInstance().setDesignResolutionSize(Root.STAGE_WH.width, Root.STAGE_WH.height, cc.RESOLUTION_POLICY.SHOW_ALL);
        director.setContentScaleFactor(Root.ResourceSize.width / Root.STAGE_WH.width);
        //        if(Root.__debug__){
        // turn on display FPS
        //            director.setDisplayStats(this.config['showFPS']);
        //        }
        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / this.config['frameRate']);
        //        if (tx.isMoblieSys()) {
        this.initReplaceSceneEvent();
        var _this = this;
        window.addEventListener("resize", function (event) {
            document.body.scrollTop = 0;
            _this.adjustSizeForWindow();
        });
        document.addEventListener('fullscreenchange', function (event) {
            document.body.scrollTop = 0;
            _this.adjustSizeForWindow();
        }, false);
        document.addEventListener('mozfullscreenchange', function (event) {
            document.body.scrollTop = 0;
            _this.adjustSizeForWindow();
        }, false);
        document.addEventListener('webkitfullscreenchange', function (event) {
            document.body.scrollTop = 0;
            _this.adjustSizeForWindow();
        }, false);
        document.addEventListener('MSFullscreenChange', function (event) {
            document.body.scrollTop = 0;
            _this.adjustSizeForWindow();
        }, false);
        //        }
        /*TODO:ZIP加载还有点BUG，暂时先屏蔽该功能*/
        //        if (tx.getIfLoadZip()) {
        //            rr.ZipProxy.getInstance().loadToCocos("res/res.zip", this.zipLoadFinish, this);
        //        }
        //        else {
        cc.Loader.preload(loading_resources, this.preLoadFinish, this);
        //        }
        return true;
    };
    Main.prototype.setResolutionSize = function () {
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NORMAL) {
            Root.ResourceSize = tx.copyS(Root.NORMAL_WH);
            Root.ResDir = rr.ResPathManager.RESOLUTION_NORMAL;
            Root.SET_LOW(true);
        }
        else {
            Root.ResDir = rr.ResPathManager.RESOLUTION_HD;
            if (Root.___DEV___) {
                Root.ResDir = rr.ResPathManager.RESOLUTION_DEV;
            }
            Root.SET_LOW(false);
        }
        //资源位置初始化
        rr.ResPathManager.getInstance().init(rr.Localization.currLanguage.getLangPath(), Root.ResDir);
        rr.ResPathManager.KEYWORD_XML.push(".mapJson");
    };
    Main.prototype.zipLoadFinish = function () {
        trace("!!!!!!!!!!!!!zipLoadFinish!!!!!!!!!!!!");
        //开始LOADING
        cc.Loader.preload(loading_resources, this.preLoadFinish, this);
    };
    //loading界面加载完成
    Main.prototype.preLoadFinish = function () {
        var _this = this;
        cc.log("loading ui loading finish");
        //读取spilAPI;
        rr.Localization.loadAPI(Root.GAME_ID);
        //因为cc.PreLoader是单例,所以在回调函数里再开始会有问题
        rr.Preloader.getInstance().initUi(new up.UiLoading(true));
        var fpsSniffer = new tx.FPSSniffer(0, false);
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NOKNOWN) {
            fpsSniffer.addEventListener(tx.Event.COMPLETE, this.fpsSnifferFinish, this);
            rr.Preloader.getInstance().addChild(fpsSniffer);
        }
        else {
            setTimeout(function () {
                _this.fpsSnifferFinish(null);
            }, 100);
        }
    };
    Main.prototype.fpsSnifferFinish = function (e) {
        if (Root.__RESOLUTION_TYPE__ == Root.RESOLUTION_TYPE_NOKNOWN) {
            cc.log("fpsSniffer:" + e.userParameter);
            Root.__RESOLUTION_TYPE__ = tx.getResolutionType(e.userParameter);
            this.setResolutionSize();
        }
        rr.SoundManager.init();
        rr.Preloader.getInstance().initMusicLoader(musicObject, soundObject, other_sounds_resource);
        rr.Preloader.getInstance().preload(res_mainmenu, this.loadFinish, this.showSplashScreen, this, 10);
    };
    //所有美术资源加载完成
    Main.prototype.loadFinish = function () {
        //初始化美术资源
        cc.Director.getInstance().setContentScaleFactor(Root.ResourceSize.width / Root.STAGE_WH.width);
    };
    Main.prototype.loadXmlFinish = function () {
        rr.Preloader.destroy();
        cc.log("all resoucre loading finish");
        //展示动画
        //        if(Root.__SKIP_SPILAPI){
        //            continueGame();
        //        }else{
        //            var SpilData = new Object();
        //            SpilData["id"] = Root.GAME_ID;
        //            GameAPI.loadAPI(function(apiInstance){
        //                //all the displaySplashScreen method with the callback as a parameter
        //                apiInstance.Branding.displaySplashScreen(continueGame);
        //            }, SpilData);
        //        }
        continueGame();
        function continueGame() {
            // display game menu
            new Root();
        }
        ;
    };
    //按了开始按钮后
    Main.prototype.showSplashScreen = function (e) {
        //加载XML
        var gameData = az.XMLLoader.createXMLLoader();
        gameData.addEventListener(az.LoaderEvent.LOAD_XML_COMPLETE, this.loadXmlFinish, this);
        gameData.loaderXML(r_xml_vehicleData, r_xml_designData, r_xml_vehicleSoundData);
    };
    Main.prototype.startGame = function () {
        new Root();
    };
    //////////////////////////////////////////////////////////////////////////////////////
    Main.prototype.initReplaceSceneEvent = function () {
        var _this = this;
        var setNextScene = cc.Director.getInstance().setNextScene;
        cc.Director.getInstance().setNextScene = function () {
            trace("setNextScene");
            setNextScene.call(cc.Director.getInstance());
            _this.adjustSizeForWindow();
        };
    };
    Main.prototype.adjustSizeForWindow = function () {
        var currRunScene = cc.Director.getInstance().getRunningScene();
        if (!currRunScene)
            return;
        var screenSize = tx.copyS(cc.EGLView.getInstance().getFrameSize());
        var scaleW = Root.STAGE_WH.width / screenSize.width;
        var scaleH = Root.STAGE_WH.height / screenSize.height;
        var scale = scaleW > scaleH ? scaleW : scaleH;
        screenSize.width *= scale;
        screenSize.height *= scale;
        if (screenSize.width > Root.MAX_STAGE_WH.width) {
            screenSize.width = Root.MAX_STAGE_WH.width;
        }
        if (screenSize.height > Root.MAX_STAGE_WH.height) {
            screenSize.height = Root.MAX_STAGE_WH.height;
        }
        currRunScene.setPositionX((screenSize.width - Root.STAGE_WH.width) / 2);
        currRunScene.setPositionY((screenSize.height - Root.STAGE_WH.height) / 2);
        cc.EGLView.getInstance().setDesignResolutionSize(screenSize.width, screenSize.height, cc.EGLView.getInstance()._resolutionPolicy);
        this.SetGameResolution();
        if (Root.instance) {
            Root.instance.dispatchEvent(new tx.Event(tx.Event.CHANGE));
        }
    };
    Main.prototype.SetGameResolution = function () {
        // initialize director
        var director = cc.Director.getInstance();
        var width = Root.STAGE_WH.width;
        var heigth = Root.STAGE_WH.height;
        if (window.innerHeight > window.innerWidth) {
            //            cc.EGLView.getInstance().setDesignResolutionSize(width, heigth, cc.RESOLUTION_POLICY.FIXED_WIDTH);
            if (tx.isMoblieSys()) {
                if (!this._screenCoveredWarning) {
                    var image = document.getElementById("rotateImage");
                    var canvas = document.getElementById("gameCanvas");
                    image.style.display = "block";
                    canvas.style.display = "none";
                    this._screenCoveredWarning = true;
                }
            }
        }
        else {
            //            cc.EGLView.getInstance().setDesignResolutionSize(width, heigth, cc.RESOLUTION_POLICY.FIXED_HEIGHT);
            if (tx.isMoblieSys()) {
                if (this._screenCoveredWarning) {
                    var image = document.getElementById("rotateImage");
                    var canvas = document.getElementById("gameCanvas");
                    image.style.display = "none";
                    canvas.style.display = "block";
                    this._screenCoveredWarning = false;
                }
            }
        }
        var WIN_SIZE = director.getWinSize();
        var CENTER_POS = cc.p(WIN_SIZE.width / 2, WIN_SIZE.height / 2);
        //    if (CURRENT_LAYERS.length > 0)
        //    {
        //        for (var i = 0; i < CURRENT_LAYERS.length; i++)
        //        {
        //            CURRENT_LAYERS[i].updatePositions();
        //        }
        //    }
        // Fix canvas on fullscreen
        var isFullScreen = document["mozFullScreen"] || document["webkitIsFullScreen"];
        if (isFullScreen) {
            var c = document.getElementById("gameCanvas");
            c.style.width = "100%";
            c.style.height = "100%";
        }
    };
    return Main;
})(cc.Application);
new Main();
//# sourceMappingURL=main.js.map