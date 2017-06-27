/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    var num = Math.random()*100;
    var interstitialId = "ca-app-pub-2897079823460641/3915417619";
    if(num<20){
        interstitialId = 'ca-app-pub-2897079823460641/3915417619';
    }

    admobid = { // for iOS
        banner: 'ca-app-pub-2897079823460641/3915417619',
        interstitial: interstitialId
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
        //startBlackjack();
        app.initLang();
       // app.initAdmob();
       // window.admob.preloadInterstitialAd();

        //window.admob.preloadInterstitialAd();
        AdMob.prepareInterstitial({
            adId:admobid.interstitial

        });
        app.startANotification();

        app.rateThing();
    },
    rateThing:function(){
        Storage.addPlayTime();
        //alert(Storage.gethasRate());
        //alert(Storage.getPlayTime());
        if(Storage.gethasRate()===0){

            if(Storage.getPlayTime()%2==0){
                app.showRateDiaglog();
            }
        }


    },
    showRateDiaglog:function(){
        var customLocale = {};
        if(LANGUAGE=='zh')
        {
            customLocale.title = "评价：21 BlackJack";
            customLocale.message = "如果你喜欢这个游戏，能不能帮忙评价一下？评价最多花费你1分钟时间，谢谢你对独立游戏的支持。";
            customLocale.cancelButtonLabel = "不，谢谢！";
            customLocale.laterButtonLabel = "以后提醒我！";
            customLocale.rateButtonLabel = "现在就去评价 :)";
        }
        else{
            customLocale.title = "Rate 21 BlackJack";
            customLocale.message = "If you enjoy playing, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!";
            customLocale.cancelButtonLabel = "No, Thanks";
            customLocale.laterButtonLabel = "Remind me Later";
            customLocale.rateButtonLabel = "Rate It Now :)";
        }



        AppRate.preferences.storeAppURL.ios = '1056591182';
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.topgeek.blackjack';
        AppRate.preferences.customLocale = customLocale;
        var onButtonClicked = function(buttonIndex) {
            if(buttonIndex===3){
                Storage.sethasRate(1);
                //alert('has rate');
            }

        };
        AppRate.preferences.callbacks.onButtonClicked = onButtonClicked;
        AppRate.promptForRating();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    initAdmob:function(){
        var bannerAdUnit = "ca-app-pub-2897079823460641/9685573211";
        var interstitialAdUnit = "ca-app-pub-2897079823460641/4282428012";




        var isOverlap = true; //true: overlap, false: split
        //var isTest = true;

        window.admob.setUp(bannerAdUnit, interstitialAdUnit, isOverlap, false);
        //alert(' i am in init admob new new ');
        //
        window.admob.onBannerAdPreloaded = function() {
            //alert('onBannerAdPreloaded');
        };
        window.admob.onBannerAdLoaded = function() {
            // alert('onBannerAdLoaded');
        };
        window.admob.onBannerAdShown = function() {
            // alert('onBannerAdShown');
        };
        window.admob.onBannerAdHidden = function() {
            // alert('onBannerAdHidden');
        };
        //
        window.admob.onInterstitialAdPreloaded = function() {
            //alert('onInterstitialAdPreloaded');
        };
        window.admob.onInterstitialAdLoaded = function() {
            // alert('onInterstitialAdLoaded');
        };
        window.admob.onInterstitialAdShown = function() {
            //alert('onInterstitialAdShown');
        };
        window.admob.onInterstitialAdHidden = function() {
            // alert('onInterstitialAdHidden');
        };},
    initLang:function(){
        var type=navigator.appName;
        if (type=="Netscape"){
            var lang = navigator.language;
        }
        else{
            var lang = navigator.userLanguage;
        }
        var lang = lang.substr(0,2);
        switch (lang){
            case 'en':
                LANGUAGE="en";
                break;
            case 'zh':
                LANGUAGE="zh";
                break;
            default :
                LANGUAGE="en";
                break;
        }

    },
    startANotification:function(){
        //var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';
        var date = new Date();
        var minute= new Date( date.getTime()+ 6000*2)
        //date.setDate(minute);

        cordova.plugins.notification.local.schedule({
            id: 1,
            title: "快来试试今天的手气！",
            message: "黑杰克绝杀！",

            //sound: sound,
            //at: date,
            firstAt:date,
            every:5
            //icon: "../media/icon1.png"
        });
        //cordova.plugins.notification.local.on("click", function (notification) {
        //    alert(notification.text);
        //});
        cordova.plugins.notification.badge.clear();
    }
};

app.initialize();
//
//// interlval window.admob.showInterstitialAd();
//setInterval(function(){
//
//    window.admob.showInterstitialAd();
//    window.admob.preloadInterstitialAd();
//},1000*60);

var ShowAds=function(){
    try{

        AdMob.showInterstitial();
        AdMob.prepareInterstitial({
            adId:admobid.interstitial,
            autoShow:false
        });
    }catch(e){
        console.log('show ads error')
    }
};

var Saver = localStorage;
var Storage = {
   
    getPlayTime:function(){
        return  parseInt(Saver.getItem('playTime')||0);

    },
    setPlayTime:function(time){
        Saver.setItem('playTime',time);
    },
    addPlayTime:function(){
        var time = this.getPlayTime();
        Saver.setItem('playTime',time+1);
    },
    gethasRate:function(){
        return (Saver.getItem('hasRate')||0);

    },
    sethasRate:function(){
        Saver.setItem('hasRate',1);
    },
    getStandTime:function(){
        return  parseInt(Saver.getItem('StandTime')||0);

    },
    setStandTime:function(time){
        Saver.setItem('StandTime',time);

    },
    addStandTime:function(){
        var time = this.getStandTime();

        Saver.setItem('StandTime',time+1);

    }
    
}
setTimeout(function(){
    //alert('badge');
    cordova.plugins.notification.badge.set(1);

},6*1000*1); //6 seconds
