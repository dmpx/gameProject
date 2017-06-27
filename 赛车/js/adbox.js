var screenW = document.documentElement.clientWidth;
var screenH = document.documentElement.clientHeight;

function enterMain()
{
    // if (!navigator.userAgent.toLowerCase().match(/iPad/i)) {
    //     randOnlyFullscreenAd();
    // }
    startIntervalCd();
    setTimeout(function(){
        randOnlyFullscreenAd();
    }, 5000);

    onRewardReview();
}

function onMoreGames()
{
    if (window.webkit) {
        window.webkit.messageHandlers.adbox.postMessage("moreGames");
        return;
    }
    
    if (!navigator.adbox) return;

    navigator.adbox.moreGames();
}

function onGamePause()
{
    showFullscreenAdOrVideo()
}

function onGameWin()
{
    showFullscreenAdOrVideo()
}

function onGameLose()
{
    showFullscreenAd();
}

function onRewardReview()
{
    if (!window.localStorage.getItem("initt")) {
        window.localStorage.setItem("initt", Date.now());
    }

    let initt = parseInt(window.localStorage.getItem("initt"));
    let now = Date.now() - initt;
    let diff = (now - initt) / 1000;
    if (diff > 600) {
        if (window.webkit) {
            setTimeout(function(){
                window.webkit.messageHandlers.adbox.postMessage("rewardReview");
            }, 5000);
        }
    }
}

function getScreenScaleX(designW)
{
    return screenW / designW;
}

function getScreenScaleY(designH)
{
    return screenH / designH;
}

function showBannerAd()
{
    if (window.webkit) {
        window.webkit.messageHandlers.adbox.postMessage("banner");
        return;
    }

    if(!navigator.adbox) return;

    navigator.adbox.banner();
}

function closeBannerAd()
{
    if(!navigator.adbox) return;

    navigator.adbox.bannerClose();
}

function showFullscreenAd()
{
    if (window.webkit) {
        window.webkit.messageHandlers.adbox.postMessage("fullscreen");
        return;
    }
    
    if(!navigator.adbox) return;

    navigator.adbox.fullscreen();
}

function showVideoAd()
{
    if (window.webkit) {
        window.webkit.messageHandlers.adbox.postMessage("video");
        return;
    }
}

function showRewardedVideoAd()
{
    if (window.webkit) {
        window.webkit.messageHandlers.adbox.postMessage("rewardedVideo");
        return;
    }
}

function randShowFullscreenAd()
{   
    var rand = Math.floor(Math.random() * ( 2 + 0));
    if (rand == 1) {
        showFullscreenAdOrVideo();
    }
}

function randOnlyFullscreenAd()
{
    var rand = Math.floor(Math.random() * ( 3 + 0));
    if (rand == 2) {
        showFullscreenAd()
    }
}

function showFullscreenAdOrVideo()
{
    var rand1 = Math.floor(Math.random() * ( 1 + 1));
    if (rand1 == 1) {
        showFullscreenAd();
    }
    else {
        showVideoAd();
    }
}

function startIntervalCd()
{
    var _cd = 0;
    var _interval = setInterval(()=>{
        _cd++;
        if (_cd % 120 == 0) {
            showFullscreenAd();
        }
    }, 1000);
}

enterMain();
// window.onload = function(){
//     enterMain();
// }