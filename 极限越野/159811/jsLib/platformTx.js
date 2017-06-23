var tx;
(function (tx) {
    function isMoblieSys() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if ((sUserAgent.match(/(iphone|ipod|android|ios|ipad|backerry|blackberry|mqqbrowser|xoom|j2me|win ce|wap|webos|symbian|ucweb|windows ce|windows phone|phone|coolpad|mmp|smartphone|midp|rv:1.2.3.4)/i))) {
            return true;
        } else {
            return false;
        }
    }

    tx.isMoblieSys = isMoblieSys;

    function isIosSys() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if ((sUserAgent.match(/(iphone|ipod|ios|ipad)/i))) {
            return true;
        } else {
            return false;
        }
    }

    tx.isIosSys = isIosSys;

    function isIE9() {
//        return true;
        return (navigator.userAgent.indexOf("Trident/5") > -1);
    }

    tx.isIE9 = isIE9;


    function getBrowserId() {
        var userAgent = navigator.userAgent.toLowerCase();

        //            console.log("aaaaaaaaaaaaaaaaaaa"+userAgent);
        var ie11 = /(msie\s|trident.*rv:)([\w.]+)/.test(userAgent);
        var msie = /msie/.test(userAgent) && !/opera/.test(userAgent);
        var version = (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
        var chrome = /chrome\/([\d.]+)/.test(userAgent);
        var safari = /webkit/.test(userAgent);
        var opera = /opera/.test(userAgent);

        //            var mozilla = /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent);
        var firefox = /firefox\/([\d.]+)/.test(userAgent);

        if (ie11 || msie) {
            return "ie";
        }
        if (chrome)
            return "chrome";
        if (opera)
            return "opera";
        if (firefox)
            return "firefox";
        if (safari)
            return "safari";

        return "";
        //        console.log("ie11" + ie11);
        //            console.log("version" + version);
        //            console.log("safari" + safari);
        //            console.log("opera" + opera);
        //            console.log("msie" + msie);
        //            console.log("chrome" + chrome);
        ////            console.log("mozilla" + mozilla);
        //            console.log("firefox" + firefox);
    }

    tx.getBrowserId = getBrowserId;

    function getIfLoadZip() {
        //********************************第一优先看参数********************************
        var param = tx.Utils.getUrlParam("loadZip");
        if (param == "true") {
            return true
        }
        else if (param == "false") {
            return false
        }

        //********************************第二优先看cookie********************************
        var data = tx.SharedObjectUtil.getGlobal("loadZip");
        if (data.data["loadZip"] == "true") {
            return Root.RESOLUTION_TYPE_HD;
        }
        else if (data.data["loadZip"] == "false") {
            return Root.RESOLUTION_TYPE_NORMAL;
        }

        //********************************第三优先看机器类型********************************
        ////******************************Apple**************************************
        var userAgent = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        //screen.width,screen.height,window.devicePixelRatio)
        if (platform == "iPad" || /ipad/.test(userAgent)) {
            return true;
        }

        if (platform == "iPhone" || /iphone/.test(userAgent)) {
            return true;
        }

        if (platform == "iPod" || /iPod/.test(userAgent)) {
            return true;
        }

        ////******************************PC/MAC****************************************

        if (!tx.isMoblieSys()) {
            if (tx.getBrowserId() != "ie" && tx.getBrowserId() != "safari") {
                return true;
            }
        }
        return false;

    }

    tx.getIfLoadZip = getIfLoadZip;

    function getResolutionType(fps) {
        if (typeof fps === "undefined") {
            fps = -1;
        }
        //********************************第一优先看参数********************************
        var param = tx.Utils.getUrlParam("HD");
        if (param == "true") {
            return Root.RESOLUTION_TYPE_HD;
        }
        else if (param == "false") {
            return Root.RESOLUTION_TYPE_NORMAL;
        }

        //********************************第二优先看cookie********************************

        var data = tx.SharedObjectUtil.getGlobal("ResolutionType");
        if (data.data["hd"] == "true") {
            return Root.RESOLUTION_TYPE_HD;
        }
        else if (data.data["hd"] == "false") {
            return Root.RESOLUTION_TYPE_NORMAL;
        }

        //********************************第三优先看机器类型********************************
        ////******************************Apple**************************************
        var userAgent = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        //screen.width,screen.height,window.devicePixelRatio)
        if (platform == "iPad" || /ipad/.test(userAgent)) {
            if (window.devicePixelRatio == 2) {
                return Root.RESOLUTION_TYPE_HD;
            }
            else {
                return Root.RESOLUTION_TYPE_NORMAL;
            }
        }

        if (platform == "iPhone" || /iphone/.test(userAgent)) {
            if (screen.height > 481) {
                return Root.RESOLUTION_TYPE_HD;
            }
            else {
                return Root.RESOLUTION_TYPE_NORMAL;
            }
        }

        if (platform == "iPod" || /iPod/.test(userAgent)) {
            if (screen.height > 481) {
                return Root.RESOLUTION_TYPE_HD;
            }
            else {
                return Root.RESOLUTION_TYPE_NORMAL;
            }
        }

        ////******************************PC/MAC****************************************

        if (!tx.isMoblieSys()) {
            return Root.RESOLUTION_TYPE_HD;
        }
        //********************************第四优先看fps嗅探结果********************************
        if (fps == -1) {
            return Root.RESOLUTION_TYPE_NOKNOWN;
        }

        if (fps > 200) {
            data.data["hd"] = "false";
            tx.SharedObjectUtil.save(data);
            return Root.RESOLUTION_TYPE_NORMAL;
        }
        else {
            data.data["hd"] = "true";
            tx.SharedObjectUtil.save(data);
            return Root.RESOLUTION_TYPE_HD;
        }

    }

    tx.getResolutionType = getResolutionType;

})(tx || (tx = {}));