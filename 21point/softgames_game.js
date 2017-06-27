/*
* Viewporter v2.0
* http://github.com/zynga/viewporter
*
* Copyright 2011, Zynga Inc.
* Licensed under the MIT License.
* https://raw.github.com/zynga/viewporter/master/MIT-LICENSE.txt
*/
var viewporter;
(function() {

var _viewporter;


// initialize viewporter object
viewporter = {

// options
forceDetection: false,

disableLegacyAndroid: true,

// constants
ACTIVE: (function() {

// it's best not do to anything to very weak devices running Android 2.x
if(viewporter.disableLegacyAndroid && (/android 2/i).test(navigator.userAgent)) {
//return false;
}

// iPad's don't allow you to scroll away the UI of the browser
if((/ipad/i).test(navigator.userAgent)) {
return false;
}

// WebOS has no touch events, but definitely the need for viewport normalization
if((/webos/i).test(navigator.userAgent)) {
return true;
}

// touch enabled devices
if('ontouchstart' in window) {
return true;
}

return false;

}),

READY: false,

// methods
isLandscape: function() {
return window.orientation === 90 || window.orientation === -90;
},

ready: function(callback) {
window.addEventListener('viewportready', callback, false);
},

change: function(callback) {
window.addEventListener('viewportchange', callback, false);
},

refresh: function(){
if (_viewporter) {
_viewporter.prepareVisualViewport();
}
},

preventPageScroll: function() {

// prevent page scroll if `preventPageScroll` option was set to `true`
document.body.addEventListener('touchmove', function(event) {
event.preventDefault();
}, false);

// reset page scroll if `preventPageScroll` option was set to `true`
// this is used after showing the address bar on iOS
document.body.addEventListener("touchstart", function() {
_viewporter.prepareVisualViewport();
}, false);

}

};

// execute the ACTIVE flag
viewporter.ACTIVE = viewporter.ACTIVE();

// if we are on Desktop, no need to go further
if (!viewporter.ACTIVE) {
return;
}

// create private constructor with prototype..just looks cooler
var _Viewporter = function() {

var that = this;

// Scroll away the header, but not in Chrome
this.IS_ANDROID = /Android/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

var _onReady = function() {

// scroll the shit away and fix the viewport!
that.prepareVisualViewport();

// listen for orientation change
var cachedOrientation = window.orientation;
window.addEventListener('orientationchange', function() {
if(window.orientation !== cachedOrientation) {
that.prepareVisualViewport();
cachedOrientation = window.orientation;
}
}, false);

};


// listen for document ready if not already loaded
// then try to prepare the visual viewport and start firing custom events
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', function() {
_onReady();
}, false);
} else {
_onReady();
}


};

_Viewporter.prototype = {

getProfile: function() {

if(viewporter.forceDetection) {
return null;
}

for(var searchTerm in viewporter.profiles) {
if(new RegExp(searchTerm).test(navigator.userAgent)) {
return viewporter.profiles[searchTerm];
}
}
return null;
},

postProcess: function() {

// let everyone know we're finally ready
viewporter.READY = true;

this.triggerWindowEvent(!this._firstUpdateExecuted ? 'viewportready' : 'viewportchange');
this._firstUpdateExecuted = true;

},

prepareVisualViewport: function() {

var that = this;

// if we're running in webapp mode (iOS), there's nothing to scroll away
if(navigator.standalone) {
return this.postProcess();
}

// maximize the document element's height to be able to scroll away the url bar
document.documentElement.style.minHeight = '5000px';

var startHeight = window.innerHeight;
var deviceProfile = this.getProfile();
var orientation = viewporter.isLandscape() ? 'landscape' : 'portrait';

// try scrolling immediately
window.scrollTo(0, that.IS_ANDROID ? 1 : 0); // Android needs to scroll by at least 1px

// start the checker loop
var iterations = 40;
var check = window.setInterval(function() {

// retry scrolling
window.scrollTo(0, that.IS_ANDROID ? 1 : 0); // Android needs to scroll by at least 1px

function androidProfileCheck() {
return deviceProfile ? window.innerHeight === deviceProfile[orientation] : false;
}
function iosInnerHeightCheck() {
return window.innerHeight > startHeight;
}

iterations--;

// check iterations first to make sure we never get stuck
if ( (that.IS_ANDROID ? androidProfileCheck() : iosInnerHeightCheck()) || iterations < 0) {

// set minimum height of content to new window height
document.documentElement.style.minHeight = window.innerHeight + 'px';

// set the right height for the body wrapper to allow bottom positioned elements
document.getElementById('viewporter').style.position = 'relative';
document.getElementById('viewporter').style.height = window.innerHeight + 'px';

clearInterval(check);

// fire events, get ready
that.postProcess();

}

}, 10);

},

triggerWindowEvent: function(name) {
var event = document.createEvent("Event");
event.initEvent(name, false, false);
window.dispatchEvent(event);
}

};

// initialize
_viewporter = new _Viewporter();

})();

viewporter.profiles = {

// Motorola Xoom
'MZ601': {
portrait: 696,
landscape: 1176
},

// Samsung Galaxy S, S2 and Nexus S
'GT-I9000|GT-I9100|Nexus S': {
portrait: 508,
landscape: 295
},

// Samsung Galaxy Pad
'GT-P1000': {
portrait: 657,
landscape: 400
},

// HTC Desire & HTC Desire HD
'Desire_A8181|DesireHD_A9191': {
portrait: 533,
landscape: 320
}

};/*!
 * VERSION: beta 1.10.2
 * DATE: 2013-08-05
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=function(t){return t.jquery||t.length&&t!==window&&t[0]&&(t[0]===window||t[0].nodeType&&t[0].style&&!t.nodeType)},a=r.prototype=i.to({},.1,{}),o=[];r.version="1.10.2",a.constructor=r,a.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},a.updateTo=function(t,e){var s,r=this.ratio;e&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},a.render=function(t,e,i){var s,r,n,a,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._totalTime,c=this._cycle;if(t>=u?(this._totalTime=u,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=this._duration+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(h=this._time/this._duration,l=this._easeType,_=this._easePower,(1===l||3===l&&h>=.5)&&(h=1-h),3===l&&(h*=2),1===_?h*=h:2===_?h*=h*h:3===_?h*=h*h*h:4===_&&(h*=h*h*h*h),this.ratio=1===l?1-h:2===l?h:.5>this._time/this._duration?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/this._duration)),p===this._time&&!i)return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===f&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),this._cycle!==c&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||o)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||o)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,a,h,l,_,u){h=h||0;var p,f,c,m,d=a.delay||0,g=[],v=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),l.apply(u||this,_||o)};for(t instanceof Array||("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s.call(t,0))),p=t.length,c=0;p>c;c++){f={};for(m in a)f[m]=a[m];f.delay=d,c===p-1&&l&&(f.onComplete=v),g[c]=new r(t[c],e,f),d+=h}return g},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){for(var e,s=i.getTweensOf(t),r=s.length;--r>-1;)if(e=s[r],e._active||e._startTime===e._timeline._time&&e._timeline._active)return!0;return!1};var h=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(h(n,e)),r=s.length),n=n._next;return s},l=r.getAllTweens=function(e){return h(t._rootTimeline,e).concat(h(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=l(0!=r),_=h.length,u=i&&s&&r;for(o=0;_>o;o++)a=h[o],(u||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var a,o,h,l,_,u=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s(t,0)),t instanceof Array)for(l=t.length;--l>-1;)r.killChildTweensOf(t[l],e);else{a=[];for(h in u)for(o=u[h].target.parentNode;o;)o===t&&(a=a.concat(u[h].tweens)),o=o.parentNode;for(_=a.length,l=0;_>l;l++)e&&a[l].totalTime(a[l].totalDuration()),a[l]._enabled(!1,!1)}}};var _=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=l(r),h=i&&s&&r,_=o.length;--_>-1;)a=o[_],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){_(!0,t,e,i)},r.resumeAll=function(t,e,i){_(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||1e-6,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},a.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},a.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},a.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},a.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},a.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},a.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},a.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],i instanceof Array&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));r.tweens instanceof Array&&this.add(r.tweens,0,r.align,r.stagger)},r=[],n=function(t){var e,i={};for(e in t)i[e]=t[e];return i},a=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||r)},o=r.slice,h=s.prototype=new e;return s.version="1.10.2",h.constructor=s,h.kill()._gc=!1,h.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},h.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},h.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},h.staggerTo=function(t,e,r,a,h,l,_,u){var p,f=new s({onComplete:l,onCompleteParams:_,onCompleteScope:u});for("string"==typeof t&&(t=i.selector(t)||t),!(t instanceof Array)&&t.length&&t!==window&&t[0]&&(t[0]===window||t[0].nodeType&&t[0].style&&!t.nodeType)&&(t=o.call(t,0)),a=a||0,p=0;t.length>p;p++)r.startAt&&(r.startAt=n(r.startAt)),f.to(t[p],e,n(r),p*a);return this.add(f,h)},h.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},h.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},h.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},h.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},h.add=function(r,n,a,o){var h,l,_,u,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array){for(a=a||"normal",o=o||0,h=n,l=r.length,_=0;l>_;_++)(u=r[_])instanceof Array&&(u=new s({tweens:u})),this.add(u,h),"string"!=typeof u&&"function"!=typeof u&&("sequence"===a?h=u._startTime+u.totalDuration()/u._timeScale:"start"===a&&(u._startTime-=u.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is neither a tween, timeline, function, nor a string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(p=this;p._gc&&p._timeline;)p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._enabled(!0,!1),p=p._timeline;return this},h.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},h._remove=function(t,i){return e.prototype._remove.call(this,t,i),this._last?this._time>this._last._startTime&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},h.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},h.insert=h.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},h.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},h.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},h.addPause=function(t,e,i,s){return this.call(a,["{self}",e,i,s],this,t)},h.removeLabel=function(t){return delete this._labels[t],this},h.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},h._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r instanceof Array)for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},h.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(t,e){return this.play(t,e)},h.gotoAndStop=function(t,e){return this.pause(t,e)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,l=this._dirty?this.totalDuration():this._totalDuration,_=this._time,u=this._startTime,p=this._timeScale,f=this._paused;if(t>=l?(this._totalTime=this._time=l,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,t=l+1e-6):1e-7>t?(this._totalTime=this._time=0,(0!==_||0===this._duration&&this._rawPrevTime>0)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=t,t=0,this._initted||(h=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==_&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==_&&t>0&&(this._active=!0),0===_&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=_)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||_>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._gc||(u===this._startTime||p!==this._timeScale)&&(0===this._time||l>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))}},h._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},h.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},h.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},h._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},h.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},h._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},h.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},h._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*t,!1):this._time/this.duration()},h.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},h.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=[],n=new i(null,null,1,0),a=function(t){for(;t;){if(t._paused)return!0;t=t._timeline}return!1},o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.10.2",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,a,o={ease:n,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(s in i)o[s]=i[s];return o.time=this._parseTimeOrLabel(t),a=new e(this,Math.abs(Number(o.time)-this._time)/this._timeScale||.001,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||r)},a},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._duration,p=this._time,f=this._totalTime,c=this._startTime,m=this._timeScale,d=this._rawPrevTime,g=this._paused,v=this._cycle;if(t>=_?(this._locked||(this._totalTime=_,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===u&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=u,t=u+1e-6)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===u&&this._rawPrevTime>0&&!this._locked)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===u&&this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=t,t=0,this._initted||(h=!0))):(this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(l=u+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=u-this._time),this._time>u?(this._time=u,t=u+1e-6):0>this._time?this._time=t=0:t=this._time))),this._cycle!==v&&!this._locked){var y=this._yoyo&&0!==(1&v),T=y===(this._yoyo&&0!==(1&this._cycle)),w=this._totalTime,x=this._cycle,b=this._rawPrevTime,P=this._time;if(this._totalTime=v*u,v>this._cycle?y=!y:this._totalTime+=u,this._time=p,this._rawPrevTime=0===u?d-1e-5:d,this._cycle=v,this._locked=!0,p=y?0:u,this.render(p,e,0===u),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||r),T&&(p=y?u+1e-6:-1e-6,this.render(p,!0,!1)),this._locked=!1,this._paused&&!g)return;this._time=P,this._totalTime=w,this._cycle=x,this._rawPrevTime=b}if(!(this._time!==p&&this._first||i||h))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||g);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||g);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._locked||this._gc||(c===this._startTime||m!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],o=this.getChildren(t,e,i),h=0,l=o.length;for(s=0;l>s;s++)r=o[s],r._paused||r._timeline._time>=r._startTime&&r._timeline._time<r._startTime+r._totalDuration/r._timeScale&&(a(r._timeline)||(n[h++]=r));return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=Math.PI/180,i=[],s=[],r=[],n={},a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,f=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,e,n,a,o){var l,_,u,p,f,c,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)f=t[b],_=f.a,u=f.d,p=t[b+1].d,o?(y=i[l],T=s[l],w=.25*(T+y)*e/(a?.5:r[l]||.5),c=u-(u-_)*(a?.5*e:0!==y?w/y:0),m=u+(p-u)*(a?.5*e:0!==T?w/T:0),d=u-(c+((m-c)*(3*y/(y+T)+.5)/4||0))):(c=u-.5*(u-_)*e,m=u+.5*(p-u)*e,d=u-(c+m)/2),c+=d,m+=d,f.c=g=c,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,e,r,n){var o,h,l,_,u,p,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][e])&&"="===p.charAt(1)&&(t[h][e]=n[e]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][e],0,0,t[-1>o?0:1][e]),f;for(h=0;o>h;h++)l=t[h][e],_=t[h+1][e],f[h]=new a(l,0,0,_),r&&(u=t[h+2][e],i[h]=(i[h]||0)+(_-l)*(_-l),s[h]=(s[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][e],0,0,t[h+1][e]),f},u=function(t,e,a,h,u,p){var f,c,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==e&&(e=1);for(c in t[0])x.push(c);if(t.length>1){for(T=t[t.length-1],y=!0,f=x.length;--f>-1;)if(c=x[f],Math.abs(b[c]-T[c])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(i.length=s.length=r.length=0,f=x.length;--f>-1;)c=x[f],n[c]=-1!==u.indexOf(","+c+","),w[c]=_(t,c,n[c],p);for(f=i.length;--f>-1;)i[f]=Math.sqrt(i[f]),s[f]=Math.sqrt(s[f]);if(!h){for(f=x.length;--f>-1;)if(n[c])for(m=w[x[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/s[d]+m[d].da/i[d],r[d]=(r[d]||0)+g*g;for(f=r.length;--f>-1;)r[f]=Math.sqrt(r[f])}for(f=x.length,d=a?4:1;--f>-1;)c=x[f],m=w[c],l(m,e,a,h,n[c]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,f,c,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(c=t[_][p])&&"="===c.charAt(1)?i[p]+Number(c.charAt(0)+c.substr(2)):Number(c),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=c=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,f,c=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=c*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,f=this._func,c=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),f[n]?c[n](h):c[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,f[n]?c[n](h):c[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var i=t._internals,s=i._parseToProxy,r=i._setPluginRatio,n=i.CSSPropTween;i._registerComplexSpecialProp("bezier",{parser:function(t,i,a,o,h,l){i instanceof Array&&(i={values:i}),l=new m;var _,u,p,f=i.values,c=f.length-1,d=[],g={};if(0>c)return h;for(_=0;c>=_;_++)p=s(t,f[_],o,h,l,c!==_),d[_]=p.end;for(u in i)g[u]=i[u];return g.values=d,h=new n(t,"bezier",0,0,p.pt,2),h.data=p,h.plugin=l,h.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(_=g.autoRotate===!0?0:Number(g.autoRotate)*e,g.autoRotate=null!=p.end.left?[["left","top","rotation",_,!0]]:null!=p.end.x?[["x","y","rotation",_,!0]]:!1),g.autoRotate&&(o._transform||o._enableTransforms(!1),p.autoRotate=o._target._gsTransform),l._onInitTween(p.proxy,g,o._tween),h
}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.10.2",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h};var l,_,u,p,f,c,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,k=/-([a-z])/gi,S=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,F={},E=document,N=E.createElement("div"),L=E.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=E.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),f=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||N;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=N.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||E.body,h[a?"width":"height"]=i+s),o.appendChild(N),n=parseFloat(N[a?"offsetWidth":"offsetHeight"]),o.removeChild(N),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Q=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},W=function(t,e){var i,s,r={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(k,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)r[i.replace(k,R)]=e[i];return U||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation*I,r.skewX=s.skewX*I,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX*I,r.rotationY=s.rotationY*I,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t*M:(r=2*Math.PI,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?M:1)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,_>f--)for(;_>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},f={},c=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,f,c,g,v,y,T,w,x,P,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=S.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=S.length),A!==R.length&&(S=(n||"").split(" "),A=S.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(c=S[u],g=R[u],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))k=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":k,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,k,!1)));else if(v=c.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],x=c.indexOf(P,f),a.appendXtra(c.substr(f,x-f),Number(P),ie(y[p],P),"",C&&"px"===c.substr(x+P.length,2),0===p),f=x+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(h=pe.prototype,h.l=h.pr=0;--ce>0;)h["xn"+ce]=0,h["xs"+ce]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,f,c,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=-Math.PI+1e-4,b=Math.PI-1e-4,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var k=n[8],S=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=k*D-n[12],O=S*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var M,I,F,E,N,L,X,z=n[0],U=n[1],Y=n[2],j=n[3],B=n[4],q=n[5],V=n[6],Z=n[7],$=n[11],Q=v.rotationX=Math.atan2(V,R),W=x>Q||Q>b;Q&&(E=Math.cos(-Q),N=Math.sin(-Q),M=B*E+k*N,I=q*E+S*N,F=V*E+R*N,k=B*-N+k*E,S=q*-N+S*E,R=V*-N+R*E,$=Z*-N+$*E,B=M,q=I,V=F),Q=v.rotationY=Math.atan2(k,z),Q&&(L=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),M=z*E-k*N,I=U*E-S*N,F=Y*E-R*N,S=U*N+S*E,R=Y*N+R*E,$=j*N+$*E,z=M,U=I,Y=F),Q=v.rotation=Math.atan2(U,q),Q&&(X=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),z=z*E+B*N,I=U*E+q*N,q=U*-N+q*E,V=Y*-N+V*E,U=I),X&&W?v.rotation=v.rotationX=0:X&&L?v.rotation=v.rotationY=0:L&&W&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(z*z+U*U)*w+.5)/w,v.scaleY=(0|Math.sqrt(q*q+S*S)*w+.5)/w,v.scaleZ=(0|Math.sqrt(V*V+R*R)*w+.5)/w,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var H=n.length>=6,K=H?n[0]:1,J=n[1]||0,te=n[2]||0,ee=H?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(K*K+J*J),u=Math.sqrt(ee*ee+te*te),p=K||J?Math.atan2(J,K):v.rotation||0,f=te||ee?Math.atan2(te,ee)+p:v.skewX||0,c=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(f)>Math.PI/2&&Math.abs(f)<1.5*Math.PI&&(y?(_*=-1,f+=0>=p?Math.PI:-Math.PI,p+=0>=p?Math.PI:-Math.PI):(u*=-1,f+=0>=f?Math.PI:-Math.PI)),d=(p-v.rotation)%Math.PI,g=(f-v.skewX)%Math.PI,(void 0===v.skewX||c>T||-T>c||m>T||-T>m||d>x&&b>d&&false|d*w||g>x&&b>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=f),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation,n=r+s.skewX,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var f,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+m*h),b+=m-(f*l+m*_)),v)f=d/2,m=g/2,w+=", Dx="+(f-(f*o+m*h)+x)+", Dy="+(m-(f*l+m*_)+b)+")";else{var P,k,S,R=8>c?1:-1;for(f=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ce=0;4>ce;ce++)k=J[ce],P=p[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(y,""))||0,S=i!==s[k]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:m-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ce||2===ce?1:R)))+"px";w+=", sizingMethod='auto expand')"}u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient(")&&u.removeAttribute("filter"))}},ke=function(){var t,e,i,s,r,n,a,o,h,l,_,u,f,c,m,d,g,v,y,T,w,x,b,P,k,S,R,A=this.data,C=this.t.style,O=A.rotation,D=A.scaleX,M=A.scaleY,I=A.scaleZ;if(p&&(k=C.top?"top":C.bottom?"bottom":parseFloat(G(this.t,"top",null,!1))?"bottom":"top",w=G(this.t,k,null,!1),S=parseFloat(w)||0,R=w.substr((S+"").length)||"px",A._ffFix=!A._ffFix,C[k]=(A._ffFix?S+.05:S-.05)+R),O||A.skewX)y=Math.cos(O),T=Math.sin(O),t=y,r=T,A.skewX&&(O-=A.skewX,y=Math.cos(O),T=Math.sin(O)),e=-T,n=y;else{if(!A.rotationY&&!A.rotationX&&1===I)return C[ye]="translate3d("+A.x+"px,"+A.y+"px,"+A.z+"px)"+(1!==D||1!==M?" scale("+D+","+M+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=f=c=0,d=A.perspective,m=d?-1/d:0,g=A.zOrigin,v=1e5,O=A.rotationY,O&&(y=Math.cos(O),T=Math.sin(O),h=_*-T,f=m*-T,i=t*T,a=r*T,_*=y,m*=y,t*=y,r*=y),O=A.rotationX,O&&(y=Math.cos(O),T=Math.sin(O),w=e*y+i*T,x=n*y+a*T,b=l*y+_*T,P=c*y+m*T,i=e*-T+i*y,a=n*-T+a*y,_=l*-T+_*y,m=c*-T+m*y,e=w,n=x,l=b,c=P),1!==I&&(i*=I,a*=I,_*=I,m*=I),1!==M&&(e*=M,n*=M,l*=M,c*=M),1!==D&&(t*=D,r*=D,h*=D,f*=D),g&&(u-=g,s=i*u,o=a*u,u=_*u+g),s=(w=(s+=A.x)-(s|=0))?(0|w*v+(0>w?-.5:.5))/v+s:s,o=(w=(o+=A.y)-(o|=0))?(0|w*v+(0>w?-.5:.5))/v+o:o,u=(w=(u+=A.z)-(u|=0))?(0|w*v+(0>w?-.5:.5))/v+u:u,C[ye]="matrix3d("+[(0|t*v)/v,(0|r*v)/v,(0|h*v)/v,(0|f*v)/v,(0|e*v)/v,(0|n*v)/v,(0|l*v)/v,(0|c*v)/v,(0|i*v)/v,(0|a*v)/v,(0|_*v)/v,(0|m*v)/v,s,o,u,d?1+-u/d:1].join(",")+")"},Se=function(){var t,e,i,s,r,n,a,o,h,l=this.data,_=this.t,u=_.style;p&&(t=u.top?"top":u.bottom?"bottom":parseFloat(G(_,"top",null,!1))?"bottom":"top",e=G(_,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",l._ffFix=!l._ffFix,u[t]=(l._ffFix?i+.05:i-.05)+s),l.rotation||l.skewX?(r=l.rotation,n=r-l.skewX,a=1e5,o=l.scaleX*a,h=l.scaleY*a,u[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-h)/a+","+(0|Math.cos(n)*h)/a+","+l.x+","+l.y+")"):u[ye]="matrix("+l.scaleX+",0,0,"+l.scaleY+","+l.x+","+l.y+")"};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,f,c,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(_ in c)y[_]=c[_];else y.rotation=c;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation*I,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX*I||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY*I||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(null!=y.force3D&&(m.force3D=y.force3D,f=!0),p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=F[i])&&(f=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(f=!0,i=we,u=(u||G(t,i,r,!1,"50% 50%"))+"",n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),w=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+c+g,l=parseFloat(_)+c+g)),a=fe(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,f="background-position",m=r||Z(t,null),d=this.format((m?c?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(S,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>c?(h=t.currentStyle,l=8>c?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Re=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter+=" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return e=parseFloat(e),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Re),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n)),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,f,c=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=c,_=W(t,r),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,W(t),h,p),t.className=c,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration){if("all"===this.e)return this.t.style.cssText="",this.t._gsTransform&&delete this.t._gsTransform,void 0;for(var e,i=this.t.style,s=this.e.split(","),r=s.length,n=o.transform.parse;--r>-1;)e=s[r],o[e]&&(e=o[e].parse===n?ye:o[e].p),Ae(i,e)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ce=h.length;ce--;)ge(h[ce]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,p,c,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=W(t,r),x.cssText=m+";"+e,h=H(t,h,W(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),f&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?ke:ye?Se:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=m;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:d)?p._prev._next=p:m=p,(p._next=c)?c._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],h=o[a],h?i=h.parse(t,f,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(f)?(d||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(_=parseFloat(p),c=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),c="px"):"left"===a||"top"===a?(_=Q(t,a,r),c="px"):(_="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(y,"")):(u=parseFloat(f),m=d?f.substr((u+"").length)||"":""),""===m&&(m=s[a]||c),f=u||0===u?(g?u+_:u)+m:e[a],c!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,c),"%"===m?(_/=$(t,a,100,"%")/100,_>100&&(_=100),e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(W(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(t,e){var i;
if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i)&&this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},c=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,c=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=c?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),c?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),f=u;--f>-1;)a=l[f],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),c},!0)}),function(t){"use strict";var e,i,s,r,n,a=t.GreenSockGlobals||t,o=function(t){var e,i=t.split("."),s=a;for(e=0;i.length>e;e++)s[i[e]]=s=s[i[e]]||{};return s},h=o("com.greensock"),l=[].slice,_=function(){},u={},p=function(e,i,s,r){this.sc=u[e]?u[e].sc:[],u[e]=this,this.gsClass=null,this.func=s;var n=[];this.check=function(h){for(var l,_,f,c,m=i.length,d=m;--m>-1;)(l=u[i[m]]||new p(i[m],[])).gsClass?(n[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&s)for(_=("com.greensock."+e).split("."),f=_.pop(),c=o(_.join("."))[f]=this.gsClass=s.apply(s,n),r&&(a[f]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+e.split(".").join("/"),[],function(){return c}):"undefined"!=typeof module&&module.exports&&(module.exports=c)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},f=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},c=h._class=function(t,e,i){return e=e||function(){},f(t,[],function(){return e},i),e};f.globals=a;var m=[0,0,1,1],d=[],g=c("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?m.concat(e):m},!0),v=g.map={},y=g.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?c("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],v[n+"."+o]=v[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(s=g.prototype,s._calcEnd=!1,s.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],i=e.length;--i>-1;)s=e[i]+",Power"+i,y(new g(null,null,1,i),s,"easeOut",!0),y(new g(null,null,2,i),s,"easeIn"+(0===i?",easeNone":"")),y(new g(null,null,3,i),s,"easeInOut");v.linear=h.easing.Linear.easeIn,v.swing=h.easing.Quad.easeInOut;var T=c("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});s=T.prototype,s.addEventListener=function(t,e,i,s,a){a=a||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&a>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:a}),this!==r||n||r.wake()},s.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},s.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var w=t.requestAnimationFrame,x=t.cancelAnimationFrame,b=Date.now||function(){return(new Date).getTime()},P=b();for(e=["ms","moz","webkit","o"],i=e.length;--i>-1&&!w;)w=t[e[i]+"RequestAnimationFrame"],x=t[e[i]+"CancelAnimationFrame"]||t[e[i]+"CancelRequestAnimationFrame"];c("Ticker",function(t,e){var i,s,a,o,h,l=this,u=b(),p=e!==!1&&w,f=function(t){P=b(),l.time=(P-u)/1e3;var e,r=l.time-h;(!i||r>0||t===!0)&&(l.frame++,h+=r+(r>=o?.004:o-r),e=!0),t!==!0&&(a=s(f)),e&&l.dispatchEvent("tick")};T.call(l),this.time=this.frame=0,this.tick=function(){f(!0)},this.sleep=function(){null!=a&&(p&&x?x(a):clearTimeout(a),s=_,a=null,l===r&&(n=!1))},this.wake=function(){null!==a&&l.sleep(),s=0===i?_:p&&w?w:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===r&&(n=!0),f(2)},this.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},this.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!a||5>l.frame)&&l.useRAF(!1)},1500)}),s=h.Ticker.prototype=new h.events.EventDispatcher,s.constructor=h.Ticker;var k=c("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,X){n||r.wake();var i=this.vars.useFrames?L:X;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});r=k.ticker=new h.Ticker,s=k.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;var S=function(){b()-P>2e3&&r.wake(),setTimeout(S,2e3)};S(),s.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},s.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},s.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},s.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},s.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},s.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this},s._enabled=function(t,e){return n||r.wake(),this._gc=!t,this._active=t&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(t,e){return this._kill(t,e),this},s._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},s._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},s.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=i instanceof Array&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},s.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},s.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},s.totalTime=function(t,e,i){if(n||r.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,a=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:a._time)-(this._reversed?s-t:t)/this._timeScale,a._dirty||this._uncache(!1),a._timeline)for(;a._timeline;)a._timeline._time!==(a._startTime+a._totalTime)/a._timeScale&&a.totalTime(a._totalTime,!0),a=a._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==t&&this.render(t,e,!1)}return this},s.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},s.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||1e-6,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},s.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},s.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){n||t||r.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=!t&&this._totalTime>0&&this._totalTime<this._totalDuration,t||0===s||0===this._duration||this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=c("core.SimpleTimeline",function(t){k.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});s=R.prototype=new k,s.constructor=R,s.kill()._gc=!1,s._first=s._last=null,s._sortChildren=!1,s.add=s.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},s._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},s.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},s.rawTime=function(){return n||r.wake(),this._totalTime};var A=c("TweenLite",function(e,i,s){if(k.call(this,i,s),this.render=A.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:A.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?N[A.defaultOverwrite]:"number"==typeof h?h>>0:N[h],(o||e instanceof Array)&&"number"!=typeof e[0])for(this._targets=a=l.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(l.call(n,0))):(this._siblings[r]=z(n,this,!1),1===h&&this._siblings[r].length>1&&U(n,this,null,1,this._siblings[r])):(n=a[r--]=A.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=z(e,this,!1),1===h&&this._siblings.length>1&&U(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),C=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)E[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!M[i]||M[i]&&M[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};s=A.prototype=new k,s.constructor=A,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=!1,A.version="1.10.2",A.defaultEase=s._ease=new g(null,null,1,1),A.defaultOverwrite="auto",A.ticker=r,A.autoSleep=!0,A.selector=t.$||t.jQuery||function(e){return t.$?(A.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var D=A._internals={},M=A._plugins={},I=A._tweenLookup={},F=0,E=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},N={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},L=k._rootFramesTimeline=new R,X=k._rootTimeline=new R;X._startTime=r.time,L._startTime=r.frame,X._active=L._active=!0,k._updateRoot=function(){if(X.render((r.time-X._startTime)*X._timeScale,!1,!1),L.render((r.frame-L._startTime)*L._timeScale,!1,!1),!(r.frame%120)){var t,e,i;for(i in I){for(e=I[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete I[i]}if(i=X._first,(!i||i._paused)&&A.autoSleep&&!L._first&&1===r._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||r.sleep()}}},r.addEventListener("tick",k._updateRoot);var z=function(t,e,i){var s,r,n=t._gsTweenID;if(I[n||(t._gsTweenID=n="t"+F++)]||(I[n]={target:t,tweens:[]}),e&&(s=I[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return I[n].tweens},U=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,_=e._startTime+1e-10,u=[],p=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Y(e,0,f),0===Y(o,l,f)&&(u[p++]=o)):_>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+1e-10>_&&((f||!o._initted)&&2e-10>=_-o._startTime||(u[p++]=o)));for(n=p;--n>-1;)o=u[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},Y=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime,a=1e-10;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*a>n-e?a:(n+=t.totalDuration()/t._timeScale/r)>e+a?0:n-e-a};s._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=A.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&r.immediateRender&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){i={};for(s in r)E[s]&&"autoCSS"!==s||(i[s]=r[s]);return i.overwrite=0,this._startAt=A.to(this.target,0,i),void 0}if(this._ease=h?h instanceof g?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new g(h,r.easeParams):v[h]||A.defaultEase:A.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&A._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},s._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&M.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],E[n])_ instanceof Array&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(M[n]&&(h=new M[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&U(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},s.render=function(t,e,i){var s,r,n,a=this._time;if(t>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var o=t/this._duration,h=this._easeType,l=this._easePower;(1===h||3===h&&o>=.5)&&(o=1-o),3===h&&(o*=2),1===l?o*=o:2===l?o*=o*o:3===l?o*=o*o*o:4===l&&(o*=o*o*o*o),this.ratio=1===h?1-o:2===h?o:.5>t/this._duration?o/2:1-o/2}else this.ratio=this._ease.getRatio(t/this._duration);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||d))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||d)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||d)))}},s._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:A.selector(e)||e;var i,s,r,n,a,o,h,l;if((e instanceof Array||C(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&(null==t||t._tempKill!==!0);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},s.invalidate=function(){return this._notifyPluginsOfEnabled&&A._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},s._enabled=function(t,e){if(n||r.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=z(s[i],this,!0);else this._siblings=z(this.target,this,!0)}return k.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?A._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},A.to=function(t,e,i){return new A(t,e,i)},A.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new A(t,e,i)},A.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new A(t,e,s)},A.delayedCall=function(t,e,i,s,r){return new A(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},A.set=function(t,e){return new A(t,0,e)},A.killTweensOf=A.killDelayedCallsTo=function(t,e){for(var i=A.getTweensOf(t),s=i.length;--s>-1;)i[s]._kill(e,t)},A.getTweensOf=function(t){if(null==t)return[];t="string"!=typeof t?t:A.selector(t)||t;var e,i,s,r;if((t instanceof Array||C(t))&&"number"!=typeof t[0]){for(e=t.length,i=[];--e>-1;)i=i.concat(A.getTweensOf(t[e]));for(e=i.length;--e>-1;)for(r=i[e],s=e;--s>-1;)r===i[s]&&i.splice(e,1)}else for(i=z(t).concat(),e=i.length;--e>-1;)i[e]._gc&&i.splice(e,1);return i};var j=c("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=j.prototype},!0);if(s=j.prototype,j.version="1.10.1",j.API=2,s._firstPT=null,s._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},s.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},s._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},s._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},A._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},j.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===j.API&&(M[(new t[e])._propName]=t[e]);return!0},f.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=c("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){j.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new j(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,j.activate([a]),a},e=t._gsQueue){for(i=0;e.length>i;i++)e[i]();for(s in u)u[s].func||t.console.log("GSAP encountered missing dependency: com.greensock."+s)}n=!1}(window);﻿/*!
* howler.js v1.1.12
* howlerjs.com
*
* (c) 2013, James Simpson of GoldFire Studios
* goldfirestudios.com
*
* MIT License
*/

(function() {
  // setup
  var cache = {};

  // setup the audio context
  var ctx = null,
    usingWebAudio = true,
    noAudio = false;
  if (typeof AudioContext !== 'undefined') {
    ctx = new AudioContext();
  } else if (typeof webkitAudioContext !== 'undefined') {
    ctx = new webkitAudioContext();
  } else if (typeof Audio !== 'undefined') {
    usingWebAudio = false;
    try {
      new Audio();
    } catch(e) {
      noAudio = true;
    }
  } else {
    usingWebAudio = false;
    noAudio = true;
  }

  // create a master gain node
  if (usingWebAudio) {
    var masterGain = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(ctx.destination);
  }

  // create global controller
  var HowlerGlobal = function() {
    this._volume = 1;
    this._muted = false;
    this.usingWebAudio = usingWebAudio;
    this._howls = [];
  };
  HowlerGlobal.prototype = {
    /**
* Get/set the global volume for all sounds.
* @param {Float} vol Volume from 0.0 to 1.0.
* @return {Howler/Float} Returns self or current volume.
*/
    volume: function(vol) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol && vol >= 0 && vol <= 1) {
        self._volume = vol;

        if (usingWebAudio) {
          masterGain.gain.value = vol;
        }

        // loop through cache and change volume of all nodes that are using HTML5 Audio
        for (var key in self._howls) {
          if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
            // loop through the audio nodes
            for (var i=0; i<self._howls[key]._audioNode.length; i++) {
              self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
            }
          }
        }

        return self;
      }

      // return the current global volume
      return (usingWebAudio) ? masterGain.gain.value : self._volume;
    },

    /**
* Mute all sounds.
* @return {Howler}
*/
    mute: function() {
      this._setMuted(true);

      return this;
    },

    /**
* Unmute all sounds.
* @return {Howler}
*/
    unmute: function() {
      this._setMuted(false);

      return this;
    },

    /**
* Handle muting and unmuting globally.
* @param {Boolean} muted Is muted or not.
*/
    _setMuted: function(muted) {
      var self = this;

      self._muted = muted;

      if (usingWebAudio) {
        masterGain.gain.value = muted ? 0 : self._volume;
      }

      for (var key in self._howls) {
        if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === false) {
          // loop through the audio nodes
          for (var i=0; i<self._howls[key]._audioNode.length; i++) {
            self._howls[key]._audioNode[i].muted = muted;
          }
        }
      }
    }
  };

  // allow access to the global audio controls
  var Howler = new HowlerGlobal();

  // check for browser codec support
  var audioTest = null;
  if (!noAudio) {
    audioTest = new Audio();
    var codecs = {
      mp3: !!audioTest.canPlayType('audio/mpeg;').replace(/^no$/,''),
      opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,''),
      ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,''),
      wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/,''),
      m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/,''),
      webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,'')
    };
  }

  // setup the audio object
  var Howl = function(o) {
    var self = this;

    // setup the defaults
    self._autoplay = o.autoplay || false;
    self._buffer = o.buffer || false;
    self._duration = o.duration || 0;
    self._format = o.format || null;
    self._loop = o.loop || false;
    self._loaded = false;
    self._sprite = o.sprite || {};
    self._src = o.src || '';
    self._pos3d = o.pos3d || [0, 0, -0.5];
    self._volume = o.volume || 1;
    self._urls = o.urls || [];
    self._rate = o.rate || 1;

    // setup event functions
    self._onload = [o.onload || function() {}];
    self._onloaderror = [o.onloaderror || function() {}];
    self._onend = [o.onend || function() {}];
    self._onpause = [o.onpause || function() {}];
    self._onplay = [o.onplay || function() {}];

    self._onendTimer = [];

    // Web Audio or HTML5 Audio?
    self._webAudio = usingWebAudio && !self._buffer;

    // check if we need to fall back to HTML5 Audio
    self._audioNode = [];
    if (self._webAudio) {
      self._setupAudioNode();
    }

    // add this to an array of Howl's to allow global control
    Howler._howls.push(self);

    // load the track
    self.load();
  };

  // setup all of the methods
  Howl.prototype = {
    /**
* Load an audio file.
* @return {Howl}
*/
    load: function() {
      var self = this,
        url = null;

      // if no audio is available, quit immediately
      if (noAudio) {
        self.on('loaderror');
        return;
      }

      var canPlay = {
        mp3: codecs.mp3,
        opus: codecs.opus,
        ogg: codecs.ogg,
        wav: codecs.wav,
        m4a: codecs.m4a,
        weba: codecs.webm
      };

      // loop through source URLs and pick the first one that is compatible
      for (var i=0; i<self._urls.length; i++) {
        var ext;

        if (self._format) {
          // use specified audio format if available
          ext = self._format;
        } else {
          // figure out the filetype (whether an extension or base64 data)
          ext = self._urls[i].toLowerCase().match(/.+\.([^?]+)(\?|$)/);
          ext = (ext && ext.length >= 2) ? ext[1] : self._urls[i].toLowerCase().match(/data\:audio\/([^?]+);/)[1];
        }

        if (canPlay[ext]) {
          url = self._urls[i];
          break;
        }
      }

      if (!url) {
        self.on('loaderror');
        return;
      }

      self._src = url;

      if (self._webAudio) {
        loadBuffer(self, url);
      } else {
        var newNode = new Audio();
        self._audioNode.push(newNode);

        // setup the new audio node
        newNode.src = url;
        newNode._pos = 0;
        newNode.preload = 'auto';
        newNode.volume = (Howler._muted) ? 0 : self._volume * Howler.volume();
       
        // add this sound to the cache
        cache[url] = self;

        // setup the event listener to start playing the sound
        // as soon as it has buffered enough
        var listener = function() {
          self._duration = newNode.duration;

          // setup a sprite if none is defined
          if (Object.getOwnPropertyNames(self._sprite).length === 0) {
            self._sprite = {_default: [0, self._duration * 1000]};
          }

          if (!self._loaded) {
            self._loaded = true;
            self.on('load');
          }

          if (self._autoplay) {
            self.play();
          }

          // clear the event listener
          newNode.removeEventListener('canplaythrough', listener, false);
        };
        newNode.addEventListener('canplaythrough', listener, false);
        newNode.load();
      }

      return self;
    },

    /**
* Get/set the URLs to be pulled from to play in this source.
* @param {Array} urls Arry of URLs to load from
* @return {Howl} Returns self or the current URLs
*/
    urls: function(urls) {
      var self = this;

      if (urls) {
        self.stop();
        self._urls = (typeof urls === 'string') ? [urls] : urls;
        self._loaded = false;
        self.load();

        return self;
      } else {
        return self._urls;
      }
    },

    /**
* Play a sound from the current time (0 by default).
* @param {String} sprite (optional) Plays from the specified position in the sound sprite definition.
* @param {Function} callback (optional) Returns the unique playback id for this sound instance.
* @return {Howl}
*/
    play: function(sprite, callback) {
      var self = this;

      // if no sprite was passed but a callback was, update the variables
      if (typeof sprite === 'function') {
        callback = sprite;
      }

      // use the default sprite if none is passed
      if (!sprite || typeof sprite === 'function') {
        sprite = '_default';
      }

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.play(sprite, callback);
        });

        return self;
      }

      // if the sprite doesn't exist, play nothing
      if (!self._sprite[sprite]) {
        if (typeof callback === 'function') callback();
        return self;
      }

      // get the node to playback
      self._inactiveNode(function(node) {
        // persist the sprite being played
        node._sprite = sprite;

        // determine where to start playing from
        var pos = (node._pos > 0) ? node._pos : self._sprite[sprite][0] / 1000,
          duration = self._sprite[sprite][1] / 1000 - node._pos;

        // determine if this sound should be looped
        var loop = !!(self._loop || self._sprite[sprite][2]);

        // set timer to fire the 'onend' event
        var soundId = (typeof callback === 'string') ? callback : Math.round(Date.now() * Math.random()) + '',
          timerId;
        (function() {
          var data = {
            id: soundId,
            sprite: sprite,
            loop: loop
          };
          timerId = setTimeout(function() {
            // if looping, restart the track
            if (!self._webAudio && loop) {
              self.stop(data.id, data.timer).play(sprite, data.id);
            }

            // set web audio node to paused at end
            if (self._webAudio && !loop) {
              self._nodeById(data.id).paused = true;
            }

            // end the track if it is HTML audio and a sprite
            if (!self._webAudio && !loop) {
              self.stop(data.id, data.timer);
            }

            // fire ended event
            self.on('end', soundId);
          }, duration * 1000);

          // store the reference to the timer
          self._onendTimer.push(timerId);

          // remember which timer to cancel
          data.timer = self._onendTimer[self._onendTimer.length - 1];
        })();

        if (self._webAudio) {
          var loopStart = self._sprite[sprite][0] / 1000,
            loopEnd = self._sprite[sprite][1] / 1000;

          // set the play id to this node and load into context
          node.id = soundId;
          node.paused = false;
          refreshBuffer(self, [loop, loopStart, loopEnd], soundId);
          self._playStart = ctx.currentTime;
          node.gain.value = self._volume;

          if (typeof node.bufferSource.start === 'undefined') {
            node.bufferSource.noteGrainOn(0, pos, duration);
          } else {
            node.bufferSource.start(0, pos, duration);
          }
        } else {
          if (node.readyState === 4) {
            node.id = soundId;
            node.currentTime = pos;
            node.muted = Howler._muted;
            node.volume = self._volume * Howler.volume();
            setTimeout(function() { node.play(); }, 0);
          } else {
            self._clearEndTimer(timerId);

            (function(){
              var sound = self,
                playSprite = sprite,
                fn = callback,
                newNode = node;
              var listener = function() {
                sound.play(playSprite, fn);

                // clear the event listener
                newNode.removeEventListener('canplaythrough', listener, false);
              };
              newNode.addEventListener('canplaythrough', listener, false);
            })();

            return self;
          }
        }

        // fire the play event and send the soundId back in the callback
        self.on('play');
        if (typeof callback === 'function') callback(soundId);

        return self;
      });

      return self;
    },

    /**
* Pause playback and save the current position.
* @param {String} id (optional) The play instance ID.
* @param {String} timerId (optional) Clear the correct timeout ID.
* @return {Howl}
*/
    pause: function(id, timerId) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pause(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(timerId || 0);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = self.pos(null, id);

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource) {
            return self;
          }

          activeNode.paused = true;
          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
        }
      }

      self.on('pause');

      return self;
    },

    /**
* Stop playback and reset to start.
* @param {String} id (optional) The play instance ID.
* @param {String} timerId (optional) Clear the correct timeout ID.
* @return {Howl}
*/
    stop: function(id, timerId) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.stop(id);
        });

        return self;
      }

      // clear 'onend' timer
      self._clearEndTimer(timerId || 0);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        activeNode._pos = 0;

        if (self._webAudio) {
          // make sure the sound has been created
          if (!activeNode.bufferSource) {
            return self;
          }

          activeNode.paused = true;

          if (typeof activeNode.bufferSource.stop === 'undefined') {
            activeNode.bufferSource.noteOff(0);
          } else {
            activeNode.bufferSource.stop(0);
          }
        } else {
          activeNode.pause();
          activeNode.currentTime = 0;
        }
      }

      return self;
    },

    /**
* Mute this sound.
* @param {String} id (optional) The play instance ID.
* @return {Howl}
*/
    mute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.mute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = 0;
        } else {
          activeNode.volume = 0;
        }
      }

      return self;
    },

    /**
* Unmute this sound.
* @param {String} id (optional) The play instance ID.
* @return {Howl}
*/
    unmute: function(id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.unmute(id);
        });

        return self;
      }

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          activeNode.gain.value = self._volume;
        } else {
          activeNode.volume = self._volume;
        }
      }

      return self;
    },

    /**
* Get/set volume of this sound.
* @param {Float} vol Volume from 0.0 to 1.0.
* @param {String} id (optional) The play instance ID.
* @return {Howl/Float} Returns self or current volume.
*/
    volume: function(vol, id) {
      var self = this;

      // make sure volume is a number
      vol = parseFloat(vol);

      if (vol >= 0 && vol <= 1) {
        self._volume = vol;

        // if the sound hasn't been loaded, add it to the event queue
        if (!self._loaded) {
          self.on('play', function() {
            self.volume(vol, id);
          });

          return self;
        }

        var activeNode = (id) ? self._nodeById(id) : self._activeNode();
        if (activeNode) {
          if (self._webAudio) {
            activeNode.gain.value = vol;
          } else {
            activeNode.volume = vol * Howler.volume();
          }
        }

        return self;
      } else {
        return self._volume;
      }
    },

    /**
* Get/set whether to loop the sound.
* @param {Boolean} loop To loop or not to loop, that is the question.
* @return {Howl/Boolean} Returns self or current looping value.
*/
    loop: function(loop) {
      var self = this;

      if (typeof loop === 'boolean') {
        self._loop = loop;

        return self;
      } else {
        return self._loop;
      }
    },

    /**
* Get/set sound sprite definition.
* @param {Object} sprite Example: {spriteName: [offset, duration, loop]}
* @param {Integer} offset Where to begin playback in milliseconds
* @param {Integer} duration How long to play in milliseconds
* @param {Boolean} loop (optional) Set true to loop this sprite
* @return {Howl} Returns current sprite sheet or self.
*/
    sprite: function(sprite) {
      var self = this;

      if (typeof sprite === 'object') {
        self._sprite = sprite;

        return self;
      } else {
        return self._sprite;
      }
    },

    /**
* Get/set the position of playback.
* @param {Float} pos The position to move current playback to.
* @param {String} id (optional) The play instance ID.
* @return {Howl/Float} Returns self or current playback position.
*/
    pos: function(pos, id) {
      var self = this;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.pos(pos);
        });

        return typeof pos === 'number' ? self : self._pos || 0;
      }

      // make sure we are dealing with a number for pos
      pos = parseFloat(pos);

      var activeNode = (id) ? self._nodeById(id) : self._activeNode();
      if (activeNode) {
        if (self._webAudio) {
          if (pos >= 0) {
            activeNode._pos = pos;
            self.pause(id).play(activeNode._sprite, id);

            return self;
          } else {
            return activeNode._pos + (ctx.currentTime - self._playStart);
          }
        } else {
          if (pos >= 0) {
            activeNode.currentTime = pos;

            return self;
          } else {
            return activeNode.currentTime;
          }
        }
      } else if (pos >= 0) {
        return self;
      } else {
        // find the first inactive node to return the pos for
        for (var i=0; i<self._audioNode.length; i++) {
          if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
            return (self._webAudio) ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
          }
        }
      }
    },

    /**
* Get/set the 3D position of the audio source.
* The most common usage is to set the 'x' position
* to affect the left/right ear panning. Setting any value higher than
* 1.0 will begin to decrease the volume of the sound as it moves further away.
* NOTE: This only works with Web Audio API, HTML5 Audio playback
* will not be affected.
* @param {Float} x The x-position of the playback from -1000.0 to 1000.0
* @param {Float} y The y-position of the playback from -1000.0 to 1000.0
* @param {Float} z The z-position of the playback from -1000.0 to 1000.0
* @param {String} id (optional) The play instance ID.
* @return {Howl/Array} Returns self or the current 3D position: [x, y, z]
*/
    pos3d: function(x, y, z, id) {
      var self = this;

      // set a default for the optional 'y' & 'z'
      y = (typeof y === 'undefined' || !y) ? 0 : y;
      z = (typeof z === 'undefined' || !z) ? -0.5 : z;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('play', function() {
          self.pos3d(x, y, z, id);
        });

        return self;
      }

      if (x >= 0 || x < 0) {
        if (self._webAudio) {
          var activeNode = (id) ? self._nodeById(id) : self._activeNode();
          if (activeNode) {
            self._pos3d = [x, y, z];
            activeNode.panner.setPosition(x, y, z);
          }
        }
      } else {
        return self._pos3d;
      }

      return self;
    },

    /**
* Fade a currently playing sound between two volumes.
* @param {Number} from The volume to fade from (0.0 to 1.0).
* @param {Number} to The volume to fade to (0.0 to 1.0).
* @param {Number} len Time in milliseconds to fade.
* @param {Function} callback (optional) Fired when the fade is complete.
* @param {String} id (optional) The play instance ID.
* @return {Howl}
*/
    fade: function(from, to, len, callback, id) {
      var self = this,
        diff = Math.abs(from - to),
        dir = from > to ? 'down' : 'up',
        steps = diff / 0.01,
        stepTime = len / steps;

      // if the sound hasn't been loaded, add it to the event queue
      if (!self._loaded) {
        self.on('load', function() {
          self.fade(from, to, len, callback, id);
        });

        return self;
      }

      // set the volume to the start position
      self.volume(from, id);

      for (var i=1; i<=steps; i++) {
        (function() {
          var change = self._volume + (dir === 'up' ? 0.01 : -0.01) * i,
            vol = Math.round(1000 * change) / 1000,
            toVol = to;

          setTimeout(function() {
            self.volume(vol, id);

            if (vol === toVol) {
              if (callback) callback();
            }
          }, stepTime * i);
        })();
      }
    },

    /**
* [DEPRECATED] Fade in the current sound.
* @param {Float} to Volume to fade to (0.0 to 1.0).
* @param {Number} len Time in milliseconds to fade.
* @param {Function} callback
* @return {Howl}
*/
    fadeIn: function(to, len, callback) {
      return this.volume(0).play().fade(0, to, len, callback);
    },

    /**
* [DEPRECATED] Fade out the current sound and pause when finished.
* @param {Float} to Volume to fade to (0.0 to 1.0).
* @param {Number} len Time in milliseconds to fade.
* @param {Function} callback
* @param {String} id (optional) The play instance ID.
* @return {Howl}
*/
    fadeOut: function(to, len, callback, id) {
      var self = this;

      return self.fade(self._volume, to, len, function() {
        if (callback) callback();
        self.pause(id);

        // fire ended event
        self.on('end');
      }, id);
    },

    /**
* Get an audio node by ID.
* @return {Howl} Audio node.
*/
    _nodeById: function(id) {
      var self = this,
        node = self._audioNode[0];

      // find the node with this ID
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].id === id) {
          node = self._audioNode[i];
          break;
        }
      }

      return node;
    },

    /**
* Get the first active audio node.
* @return {Howl} Audio node.
*/
    _activeNode: function() {
      var self = this,
        node = null;

      // find the first playing node
      for (var i=0; i<self._audioNode.length; i++) {
        if (!self._audioNode[i].paused) {
          node = self._audioNode[i];
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      return node;
    },

    /**
* Get the first inactive audio node.
* If there is none, create a new one and add it to the pool.
* @param {Function} callback Function to call when the audio node is ready.
*/
    _inactiveNode: function(callback) {
      var self = this,
        node = null;

      // find first inactive node to recycle
      for (var i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused && self._audioNode[i].readyState === 4) {
          callback(self._audioNode[i]);
          node = true;
          break;
        }
      }

      // remove excess inactive nodes
      self._drainPool();

      if (node) {
        return;
      }

      // create new node if there are no inactives
      var newNode;
      if (self._webAudio) {
        newNode = self._setupAudioNode();
        callback(newNode);
      } else {
        self.load();
        newNode = self._audioNode[self._audioNode.length - 1];
        newNode.addEventListener('loadedmetadata', function() {
          callback(newNode);
        });
      }
    },

    /**
* If there are more than 5 inactive audio nodes in the pool, clear out the rest.
*/
    _drainPool: function() {
      var self = this,
        inactive = 0,
        i;

      // count the number of inactive nodes
      for (i=0; i<self._audioNode.length; i++) {
        if (self._audioNode[i].paused) {
          inactive++;
        }
      }

      // remove excess inactive nodes
      for (i=self._audioNode.length-1; i>=0; i--) {
        if (inactive <= 5) {
          break;
        }

        if (self._audioNode[i].paused) {
          // disconnect the audio source if using Web Audio
          if (self._webAudio) {
            self._audioNode[i].disconnect(0);
          }

          inactive--;
          self._audioNode.splice(i, 1);
        }
      }
    },

    /**
* Clear 'onend' timeout before it ends.
* @param {Number} timerId The ID of the sound to be cancelled.
*/
    _clearEndTimer: function(timerId) {
      var self = this,
        timer = self._onendTimer.indexOf(timerId);

      // make sure the timer gets cleared
      timer = timer >= 0 ? timer : 0;

      if (self._onendTimer[timer]) {
        clearTimeout(self._onendTimer[timer]);
        self._onendTimer.splice(timer, 1);
      }
    },

    /**
* Setup the gain node and panner for a Web Audio instance.
* @return {Object} The new audio node.
*/
    _setupAudioNode: function() {
      var self = this,
        node = self._audioNode,
        index = self._audioNode.length;

      // create gain node
      node[index] = (typeof ctx.createGain === 'undefined') ? ctx.createGainNode() : ctx.createGain();
      node[index].gain.value = self._volume;
      node[index].paused = true;
      node[index]._pos = 0;
      node[index].readyState = 4;
      node[index].connect(masterGain);

      // create the panner
      node[index].panner = ctx.createPanner();
      node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]);
      node[index].panner.connect(node[index]);

      return node[index];
    },

    /**
* Call/set custom events.
* @param {String} event Event type.
* @param {Function} fn Function to call.
* @return {Howl}
*/
    on: function(event, fn) {
      var self = this,
        events = self['_on' + event];

      if (typeof fn === "function") {
        events.push(fn);
      } else {
        for (var i=0; i<events.length; i++) {
          if (fn) {
            events[i].call(self, fn);
          } else {
            events[i].call(self);
          }
        }
      }

      return self;
    },

    /**
* Remove a custom event.
* @param {String} event Event type.
* @param {Function} fn Listener to remove.
* @return {Howl}
*/
    off: function(event, fn) {
      var self = this,
        events = self['_on' + event],
        fnString = fn.toString();

      // loop through functions in the event for comparison
      for (var i=0; i<events.length; i++) {
        if (fnString === events[i].toString()) {
          events.splice(i, 1);
          break;
        }
      }

      return self;
    },

    /**
* Unload and destroy the current Howl object.
* This will immediately stop all play instances attached to this sound.
*/
    unload: function() {
      var self = this;

      // stop playing any active nodes
      var nodes = self._audioNode;
      for (var i=0; i<self._audioNode.length; i++) {
        self.stop(nodes[i].id);

        if (!self._webAudio) {
           // remove the source if using HTML5 Audio
          nodes[i].src = '';
        } else {
          // disconnect the output from the master gain
          nodes[i].disconnect(0);
        }
      }

      // remove the reference in the global Howler object
      var index = Howler._howls.indexOf(self);
      if (index) {
        Howler._howls.splice(index, 1);
      }

      // delete this sound from the cache
      delete cache[self._src];
      self = null;
    }

  };

  // only define these functions when using WebAudio
  if (usingWebAudio) {

    /**
* Buffer a sound from URL (or from cache) and decode to audio source (Web Audio API).
* @param {Object} obj The Howl object for the sound to load.
* @param {String} url The path to the sound file.
*/
    var loadBuffer = function(obj, url) {
      // check if the buffer has already been cached
      if (url in cache) {
        // set the duration from the cache
        obj._duration = cache[url].duration;

        // load the sound into this object
        loadSound(obj);
      } else {
        // load the buffer from the URL
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          // decode the buffer into an audio source
          ctx.decodeAudioData(xhr.response, function(buffer) {
            if (buffer) {
              cache[url] = buffer;
              loadSound(obj, buffer);
            }
          });
        };
        xhr.onerror = function() {
          // if there is an error, switch the sound to HTML Audio
          if (obj._webAudio) {
            obj._buffer = true;
            obj._webAudio = false;
            obj._audioNode = [];
            delete obj._gainNode;
            obj.load();
          }
        };
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      }
    };

    /**
* Finishes loading the Web Audio API sound and fires the loaded event
* @param {Object} obj The Howl object for the sound to load.
* @param {Objecct} buffer The decoded buffer sound source.
*/
    var loadSound = function(obj, buffer) {
      // set the duration
      obj._duration = (buffer) ? buffer.duration : obj._duration;

      // setup a sprite if none is defined
      if (Object.getOwnPropertyNames(obj._sprite).length === 0) {
        obj._sprite = {_default: [0, obj._duration * 1000]};
      }

      // fire the loaded event
      if (!obj._loaded) {
        obj._loaded = true;
        obj.on('load');
      }

      if (obj._autoplay) {
        obj.play();
      }
    };

    /**
* Load the sound back into the buffer source.
* @param {Object} obj The sound to load.
* @param {Array} loop Loop boolean, pos, and duration.
* @param {String} id (optional) The play instance ID.
*/
    var refreshBuffer = function(obj, loop, id) {
      // determine which node to connect to
      var node = obj._nodeById(id);

      // setup the buffer source for playback
      node.bufferSource = ctx.createBufferSource();
      node.bufferSource.buffer = cache[obj._src];
      node.bufferSource.connect(node.panner);
      node.bufferSource.loop = loop[0];
      if (loop[0]) {
        node.bufferSource.loopStart = loop[1];
        node.bufferSource.loopEnd = loop[1] + loop[2];
      }
      node.bufferSource.playbackRate.value = obj._rate;
    };

  }

  /**
* Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
*/
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    });
  }
  
  // define globally in case AMD is not available or available but not used
  window.Howler = Howler;
  window.Howl = Howl;
  
})();

var Utils;
(function (Utils) {
    var AssetLoader = (function () {
        function AssetLoader(_lang, _aFileData, _ctx, _canvasWidth, _canvasHeight, _showBar) {
            if (typeof _showBar === "undefined") { _showBar = true; }
            this.oAssetData = {
            };
            this.assetsLoaded = 0;
            this.totalAssets = _aFileData.length;
            this.ctx = _ctx;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.showBar = _showBar;
            this.topLeftX = this.canvasWidth / 2 - _canvasWidth / 4;
            this.topLeftY = this.canvasHeight / 2;
            if(this.showBar) {
                var loadingText;
                if(_lang == "EN" || _lang == "") {
                    loadingText = "Loading...";
                } else if(_lang == "ES") {
                    loadingText = "Cargando...";
                } else if(_lang == "FR") {
                    loadingText = "Chargement...";
                }
                ctx.fillStyle = "#aaaaaa";
                ctx.textAlign = "center";
                ctx.font = "14px Helvetica";
                ctx.fillText(loadingText, this.canvasWidth / 2, this.topLeftY + 35);
                ctx.strokeStyle = "#aaaaaa";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#ffffff";
                ctx.moveTo(this.topLeftX, this.topLeftY);
                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 0);
                ctx.lineTo(this.topLeftX + _canvasWidth / 2, this.topLeftY + 20);
                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20);
                ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0);
                ctx.stroke();
            }
            for(var i = 0; i < _aFileData.length; i++) {
                this.loadImage(_aFileData[i]);
            }
        }
        AssetLoader.prototype.loadImage = function (_oData) {
            var _this = this;
            var img = new Image();
            img.onload = function () {
                _this.oAssetData[_oData.id] = {
                };
                _this.oAssetData[_oData.id].img = img;
                if(_oData.oData != undefined) {
                    _this.oAssetData[_oData.id].oData = _oData.oData;
                    _this.oAssetData[_oData.id].isSpriteSheet = true;
                } else {
                    _this.oAssetData[_oData.id].isSpriteSheet = false;
                }
                ++_this.assetsLoaded;
                if(_this.showBar) {
                    ctx.fillRect(_this.topLeftX + 2, _this.topLeftY + 2, ((_this.canvasWidth / 2 - 4) / _this.totalAssets) * _this.assetsLoaded, 16);
                }
                _this.checkLoadComplete();
            };
            img.src = _oData.file;
        };
        AssetLoader.prototype.checkLoadComplete = function () {
            if(this.assetsLoaded == this.totalAssets) {
                this.loadedCallback();
            }
        };
        AssetLoader.prototype.onReady = function (_func) {
            this.loadedCallback = _func;
        };
        AssetLoader.prototype.getImg = function (_id) {
            return this.oAssetData[_id].img;
        };
        AssetLoader.prototype.getData = function (_id) {
            return this.oAssetData[_id];
        };
        return AssetLoader;
    })();
    Utils.AssetLoader = AssetLoader;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var AnimSprite = (function () {
        function AnimSprite(_oImgData, _fps, _radius, _animId) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.frameInc = 0;
            this.animType = "loop";
            this.oImgData = _oImgData;
            this.oAnims = this.oImgData.oData.oAnims;
            this.fps = _fps;
            this.radius = _radius;
            this.animId = _animId;
        }
        AnimSprite.prototype.updateAnimation = function (_delta) {
            this.frameInc += this.fps * _delta;
        };
        AnimSprite.prototype.resetAnim = function () {
            this.frameInc = 0;
        };
        AnimSprite.prototype.setFrame = function (_frameNum) {
            this.fixedFrame = _frameNum;
        };
        AnimSprite.prototype.setAnimType = function (_type, _animId) {
            this.animId = _animId;
            this.animType = _type;
            switch(_type) {
                case "loop":
                    break;
                case "once":
                    this.resetAnim();
                    this.maxIdx = this.oAnims[this.animId].length - 1;
                    break;
            }
        };
        AnimSprite.prototype.render = function (_ctx) {
            if(this.animId != null) {
                var max = this.oAnims[this.animId].length;
                var idx = Math.floor(this.frameInc);
                var frame = this.oAnims[this.animId][idx % max];
                var imgX = (frame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(frame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if(this.animType == "once") {
                    if(idx > this.maxIdx) {
                        this.fixedFrame = this.oAnims[this.animId][max - 1];
                        this.animId = null;
                        this.animEndedFunc();
                        var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                        var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                    }
                }
            } else {
                var imgX = (this.fixedFrame * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
                var imgY = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            }
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2, -this.oImgData.oData.spriteHeight / 2, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return AnimSprite;
    })();
    Utils.AnimSprite = AnimSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var BasicSprite = (function () {
        function BasicSprite(_oImgData, _radius) {
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.radius = 10;
            this.removeMe = false;
            this.oImgData = _oImgData;
            this.radius = _radius;
        }
        BasicSprite.prototype.setFrame = function (_frameNum) {
            this.frameNum = _frameNum;
        };
        BasicSprite.prototype.render = function (_ctx) {
            var imgX = (this.frameNum * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2, -this.oImgData.oData.spriteHeight / 2, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return BasicSprite;
    })();
    Utils.BasicSprite = BasicSprite;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var UserInput = (function () {
        function UserInput(_canvas, _isBugBrowser) {
            var _this = this;
            this.isDown = false;
            this.canvasX = 0;
            this.canvasY = 0;
            this.canvasScaleX = 1;
            this.canvasScaleY = 1;
            this.prevHitTime = 0;
            this.pauseIsOn = false;
            this.isBugBrowser = _isBugBrowser;
            _canvas.addEventListener("touchstart", function (e) {
                _this.hitDown(e, e.touches[0].pageX, e.touches[0].pageY);
            }, false);
            _canvas.addEventListener("touchend", function (e) {
                _this.hitUp(e, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            }, false);
            _canvas.addEventListener("mousedown", function (e) {
                _this.hitDown(e, e.pageX, e.pageY);
            }, false);
            _canvas.addEventListener("mouseup", function (e) {
                _this.hitUp(e, e.pageX, e.pageY);
            }, false);
            this.aHitAreas = new Array();
        }
        UserInput.prototype.setCanvas = function (_canvasX, _canvasY, _canvasScaleX, _canvasScaleY) {
            this.canvasX = _canvasX;
            this.canvasY = _canvasY;
            this.canvasScaleX = _canvasScaleX;
            this.canvasScaleY = _canvasScaleY;
        };
        UserInput.prototype.hitDown = function (e, _posX, _posY) {
            if(this.pauseIsOn) {
                return;
            }
            var curHitTime = new Date().getTime();
            if(curHitTime - this.prevHitTime < 500 && isBugBrowser) {
                return;
            }
            this.prevHitTime = curHitTime;
            e.preventDefault();
            e.stopPropagation();
            _posX = (_posX - this.canvasX) * this.canvasScaleX;
            _posY = (_posY - this.canvasY) * this.canvasScaleY;
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].rect) {
                    if(_posX > this.aHitAreas[i].area[0] && _posY > this.aHitAreas[i].area[1] && _posX < this.aHitAreas[i].area[2] && _posY < this.aHitAreas[i].area[3]) {
                        this.aHitAreas[i].oData.hitX = _posX;
                        this.aHitAreas[i].oData.hitY = _posY;
                        this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData);
                        break;
                    }
                } else {
                }
            }
        };
        UserInput.prototype.hitUp = function (e, _posX, _posY) {
            e.preventDefault();
            e.stopPropagation();
        };
        UserInput.prototype.addHitArea = function (_id, _callback, _oCallbackData, _oAreaData, _isUnique) {
            if (typeof _isUnique === "undefined") { _isUnique = false; }
            if(_oCallbackData == null) {
                _oCallbackData = new Object();
            }
            if(_isUnique) {
                this.removeHitArea(_id);
            }
            switch(_oAreaData.type) {
                case "image":
                    if(_oAreaData.oImageData.isSpriteSheet) {
                        this.aHitAreas.push({
                            id: _id,
                            callback: _callback,
                            oData: _oCallbackData,
                            rect: true,
                            area: [
                                _oAreaData.aCentrePos[0] - _oAreaData.oImageData.oData.spriteWidth / 2, 
                                _oAreaData.aCentrePos[1] - _oAreaData.oImageData.oData.spriteHeight / 2, 
                                _oAreaData.aCentrePos[0] + _oAreaData.oImageData.oData.spriteWidth / 2, 
                                _oAreaData.aCentrePos[1] + _oAreaData.oImageData.oData.spriteHeight / 2
                            ]
                        });
                    } else {
                        this.aHitAreas.push({
                            id: _id,
                            callback: _callback,
                            oData: _oCallbackData,
                            rect: true,
                            area: [
                                _oAreaData.aCentrePos[0] - _oAreaData.oImageData.img.width / 2, 
                                _oAreaData.aCentrePos[1] - _oAreaData.oImageData.img.height / 2, 
                                _oAreaData.aCentrePos[0] + _oAreaData.oImageData.img.width / 2, 
                                _oAreaData.aCentrePos[1] + _oAreaData.oImageData.img.height / 2
                            ]
                        });
                    }
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: _id,
                        callback: _callback,
                        oData: _oCallbackData,
                        rect: true,
                        area: _oAreaData.aRect
                    });
                    break;
            }
        };
        UserInput.prototype.removeHitArea = function (_id) {
            for(var i = 0; i < this.aHitAreas.length; i++) {
                if(this.aHitAreas[i].id == _id) {
                    this.aHitAreas.splice(i, 1);
                    i -= 1;
                }
            }
        };
        return UserInput;
    })();
    Utils.UserInput = UserInput;    
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var FpsMeter = (function () {
        function FpsMeter(_canvasHeight) {
            this.updateFreq = 10;
            this.updateInc = 0;
            this.frameAverage = 0;
            this.display = 1;
            this.log = "";
            this.render = function (_ctx) {
                this.frameAverage += this.delta / this.updateFreq;
                if(++this.updateInc >= this.updateFreq) {
                    this.updateInc = 0;
                    this.display = this.frameAverage;
                    this.frameAverage = 0;
                }
                _ctx.textAlign = "left";
                ctx.font = "10px Helvetica";
                _ctx.fillStyle = "#333333";
                _ctx.beginPath();
                _ctx.rect(0, this.canvasHeight - 15, 40, 15);
                _ctx.closePath();
                _ctx.fill();
                _ctx.fillStyle = "#ffffff";
                _ctx.fillText(Math.round(1000 / (this.display * 1000)) + " fps " + this.log, 5, this.canvasHeight - 5);
            };
            this.canvasHeight = _canvasHeight;
        }
        FpsMeter.prototype.update = function (_delta) {
            this.delta = _delta;
        };
        return FpsMeter;
    })();
    Utils.FpsMeter = FpsMeter;    
})(Utils || (Utils = {}));
var Elements;
(function (Elements) {
    var Background = (function () {
        function Background(_oImgData, _tableType, _canvasWidth, _canvasHeight) {
            this.oImgData = _oImgData;
            this.tableType = _tableType;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Background.prototype.update = function (_delta) {
        };
        Background.prototype.render = function (_ctx) {
            var id = this.tableType;
            var imgX = (id * this.oImgData.oData.spriteWidth) % this.oImgData.img.width;
            var imgY = Math.floor(id / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            _ctx.drawImage(this.oImgData.img, imgX, imgY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, 0, 0, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight);
        };
        return Background;
    })();
    Elements.Background = Background;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Screens = (function () {
        function Screens(_oScreenImgData, _aButs, _canvasWidth, _canvasHeight) {
            this.incY = 0;
            this.score = 0;
            this.highestScore = 0;
            this.posX = 0;
            this.oScreenImgData = _oScreenImgData;
            this.aButs = _aButs;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posX = -this.canvasWidth;
        }
        Screens.prototype.setRenderFunc = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            this.posX = -this.canvasWidth;
            switch(_type) {
                case "start":
                    this.renderFunc = this.renderStartScreen;
                    TweenLite.to(this, .5, {
                        posX: 0
                    });
                    break;
                case "map":
                    this.oData = _oData;
                    this.renderFunc = this.renderMapScreen;
                    TweenLite.to(this, .5, {
                        posX: 0
                    });
                    break;
                case "help":
                    break;
                case "end":
                    break;
            }
        };
        Screens.prototype.render = function (_ctx, _delta) {
            this.renderFunc(_ctx, _delta);
        };
        Screens.prototype.renderStartScreen = function (_ctx, _delta) {
            this.incY += 5 * _delta;
            _ctx.drawImage(this.oScreenImgData.img, 0, 0);
            this.renderButs(_ctx);
        };
        Screens.prototype.renderMapScreen = function (_ctx, _delta) {
            this.incY += 5 * _delta;
            _ctx.drawImage(this.oScreenImgData.img, 0, 0);
            var id = this.oData.lives;
            var imgX = (id * this.oData.oHeartImgData.oData.spriteWidth) % this.oData.oHeartImgData.img.width;
            var imgY = Math.floor(id / (this.oData.oHeartImgData.img.width / this.oData.oHeartImgData.oData.spriteWidth)) * this.oData.oHeartImgData.oData.spriteHeight;
            _ctx.drawImage(this.oData.oHeartImgData.img, imgX, imgY, this.oData.oHeartImgData.oData.spriteWidth, this.oData.oHeartImgData.oData.spriteHeight, 15, 740, this.oData.oHeartImgData.oData.spriteWidth, this.oData.oHeartImgData.oData.spriteHeight);
            for(var i = 0; i <= this.oData.careerLevel; i++) {
                var id = 0;
                if(i == this.oData.careerLevel) {
                    id = 1;
                }
                var imgX = (id * this.oData.oMarkerImgData.oData.spriteWidth) % this.oData.oMarkerImgData.img.width;
                var imgY = Math.floor(id / (this.oData.oMarkerImgData.img.width / this.oData.oMarkerImgData.oData.spriteWidth)) * this.oData.oMarkerImgData.oData.spriteHeight;
                _ctx.drawImage(this.oData.oMarkerImgData.img, imgX, imgY, this.oData.oMarkerImgData.oData.spriteWidth, this.oData.oMarkerImgData.oData.spriteHeight, this.oData.aMapData[i].aMarkerPos[0] - this.oData.oMarkerImgData.oData.spriteWidth / 2, this.oData.aMapData[i].aMarkerPos[1] - this.oData.oMarkerImgData.oData.spriteHeight / 2, this.oData.oMarkerImgData.oData.spriteWidth, this.oData.oMarkerImgData.oData.spriteHeight);
            }
            if(this.oData.careerLevel == 0) {
                var id = 0;
                var imgX = (id * this.oData.oMapInfoImgData.oData.spriteWidth) % this.oData.oMapInfoImgData.img.width;
                var imgY = Math.floor(id / (this.oData.oMapInfoImgData.img.width / this.oData.oMapInfoImgData.oData.spriteWidth)) * this.oData.oMapInfoImgData.oData.spriteHeight;
                _ctx.drawImage(this.oData.oMapInfoImgData.img, imgX, imgY, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight, this.canvasWidth / 2 - this.oData.oMapInfoImgData.oData.spriteWidth / 2 + this.posX, 300 - this.oData.oMapInfoImgData.oData.spriteHeight / 2, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight);
            } else if(this.oData.careerLevel < 10) {
                var id = 1;
                var imgX = (id * this.oData.oMapInfoImgData.oData.spriteWidth) % this.oData.oMapInfoImgData.img.width;
                var imgY = Math.floor(id / (this.oData.oMapInfoImgData.img.width / this.oData.oMapInfoImgData.oData.spriteWidth)) * this.oData.oMapInfoImgData.oData.spriteHeight;
                _ctx.drawImage(this.oData.oMapInfoImgData.img, imgX, imgY, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight, 70 - this.oData.oMapInfoImgData.oData.spriteWidth / 2 + this.posX, 166 - this.oData.oMapInfoImgData.oData.spriteHeight / 2, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight);
            } else {
                var id = 2;
                var imgX = (id * this.oData.oMapInfoImgData.oData.spriteWidth) % this.oData.oMapInfoImgData.img.width;
                var imgY = Math.floor(id / (this.oData.oMapInfoImgData.img.width / this.oData.oMapInfoImgData.oData.spriteWidth)) * this.oData.oMapInfoImgData.oData.spriteHeight;
                _ctx.drawImage(this.oData.oMapInfoImgData.img, imgX, imgY, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight, 70 - this.oData.oMapInfoImgData.oData.spriteWidth / 2 + this.posX, 166 - this.oData.oMapInfoImgData.oData.spriteHeight / 2, this.oData.oMapInfoImgData.oData.spriteWidth, this.oData.oMapInfoImgData.oData.spriteHeight);
            }
            this.renderButs(_ctx);
        };
        Screens.prototype.renderButs = function (_ctx) {
            for(var i = 0; i < this.aButs.length; i++) {
                var offsetPosX = this.posX;
                if(i % 2 == 0) {
                    offsetPosX *= -1;
                }
                if(!this.aButs[i].isHidden) {
                    if(this.aButs[i].type == 0) {
                        _ctx.drawImage(this.aButs[i].oImgData.img, this.aButs[i].aPos[0] - this.aButs[i].oImgData.img.width / 2 + offsetPosX, this.aButs[i].aPos[1] - this.aButs[i].oImgData.img.height / 2 - Math.sin(this.incY + (45 * i)) * 5);
                    } else {
                        var id = this.aButs[i].frame;
                        var imgX = (id * this.aButs[i].oImgData.oData.spriteWidth) % this.aButs[i].oImgData.img.width;
                        var imgY = Math.floor(id / (this.aButs[i].oImgData.img.width / this.aButs[i].oImgData.oData.spriteWidth)) * this.aButs[i].oImgData.oData.spriteHeight;
                        _ctx.drawImage(this.aButs[i].oImgData.img, imgX, imgY, this.aButs[i].oImgData.oData.spriteWidth, this.aButs[i].oImgData.oData.spriteHeight, this.aButs[i].aPos[0] - this.aButs[i].oImgData.oData.spriteWidth / 2 + offsetPosX, this.aButs[i].aPos[1] - this.aButs[i].oImgData.oData.spriteHeight / 2 - Math.sin(this.incY + (45 * i)) * 5, this.aButs[i].oImgData.oData.spriteWidth, this.aButs[i].oImgData.oData.spriteHeight);
                    }
                }
            }
        };
        return Screens;
    })();
    Elements.Screens = Screens;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Splash = (function () {
        function Splash(_oSplashScreenImgData, _canvasWidth, _canvasHeight) {
            this.inc = 0;
            this.oSplashScreenImgData = _oSplashScreenImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.posY = this.canvasHeight;
            TweenLite.to(this, .7, {
                posY: 0,
                ease: "Power2.easeOut"
            });
        }
        Splash.prototype.render = function (_ctx, _delta) {
            _ctx.drawImage(this.oSplashScreenImgData.img, 0, this.posY);
        };
        return Splash;
    })();
    Elements.Splash = Splash;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Panel = (function () {
        function Panel(_oPanelsImgData, _oNumbersImgData, _canvasWidth, _canvasHeight) {
            this.frameNum = 0;
            this.x = 0;
            this.y = 0;
            this.playerHandTotal1 = 0;
            this.playerHandTotal2 = 0;
            this.compHandTotal = 0;
            this.letterSpace = 17;
            this.handSide = "right";
            this.oPanelsImgData = _oPanelsImgData;
            this.oNumbersImgData = _oNumbersImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Panel.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            this.type = _type;
            switch(this.type) {
                case "betting":
                    this.aPanels = new Array({
                        id: 0,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    }, {
                        id: 7,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    this.renderFunc = this.renderInGame;
                    TweenLite.to(this.aPanels[0], .5, {
                        posY: -20
                    });
                    break;
                case "firstDeal":
                    this.hideDealBut();
                    this.renderFunc = this.renderInGame;
                    TweenLite.to(this.aPanels[0], .5, {
                        posY: -160,
                        onComplete: this.hideDealTweenComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    if(_oData.dealType != "blackjack") {
                        this.insuranceIsOn = _oData.insuranceIsOn;
                    }
                    if(this.insuranceIsOn) {
                        this.aPanels.push({
                            id: 8,
                            posX: -380,
                            posY: 200
                        });
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: -225,
                            delay: 1
                        });
                    }
                    this.aPanels.push({
                        id: 4,
                        posX: this.canvasWidth,
                        posY: 420
                    });
                    this.playerValuePanel1 = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posX: 445,
                        delay: 1
                    });
                    this.playerHandTotal1 = _oData.value;
                    if(dealType == "blackjack") {
                        this.actionCompleteCallback = _oData.callback;
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: 445,
                            delay: 1,
                            onComplete: this.blackjackDealComplete,
                            onCompleteParams: [
                                this
                            ]
                        });
                    } else {
                        TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                            posX: 445,
                            delay: 1
                        });
                    }
                    break;
                case "newPlayerCard":
                    if(this.handSide == "right") {
                        this.playerHandTotal1 = _oData.value;
                    } else {
                        this.playerHandTotal2 = _oData.value;
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "newCompCard":
                    this.compHandTotal = _oData.value;
                    break;
                case "bust":
                    this.aPanels.push({
                        id: 3,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.killTweensOf(this.aPanels[this.aPanels.length - 1]);
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    if(this.handSide == "right") {
                        TweenLite.to(this.playerValuePanel1, .3, {
                            posX: this.canvasWidth,
                            delay: 2
                        });
                    }
                    if(_oData.broke) {
                        if(_oData.gameMode == 0) {
                            this.aPanels.push({
                                id: 14,
                                posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                                posY: this.canvasHeight
                            });
                            TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                                posY: 600,
                                delay: 1,
                                ease: "Back.easeOut"
                            });
                        } else {
                            this.aPanels.push({
                                id: 15,
                                posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                                posY: this.canvasHeight
                            });
                            TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                                posY: 600,
                                delay: 1,
                                ease: "Back.easeOut"
                            });
                        }
                    }
                    break;
                case "gameOver":
                    this.aPanels.push({
                        id: 18,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 17,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.killTweensOf(this.aPanels[this.aPanels.length - 1]);
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    if(this.handSide == "right") {
                        TweenLite.to(this.playerValuePanel1, .3, {
                            posX: this.canvasWidth,
                            delay: 2
                        });
                    }
                    break;
                case "levelComplete":
                    if(_oData.careerLevel < 9) {
                        this.aPanels.push({
                            id: 16,
                            posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                            posY: -160
                        });
                    } else {
                        this.aPanels.push({
                            id: 19,
                            posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                            posY: -160
                        });
                    }
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 17,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "blackjack":
                    this.aPanels.push({
                        id: 1,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Elastic.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 2
                            });
                            break;
                        }
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "push":
                    this.aPanels.push({
                        id: 6,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        delay: 1,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 2.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 2
                            });
                            break;
                        }
                    }
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "compPlay":
                    this.aPanels.push({
                        id: 5,
                        posX: this.canvasWidth,
                        posY: 80
                    });
                    this.compValuePanel = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posX: 445,
                        delay: 1
                    });
                    this.compHandTotal = _oData.value;
                    break;
                case "insuranceTaken":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    break;
                case "insuranceLose":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    this.aPanels.push({
                        id: 13,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .5, {
                        posY: -20
                    });
                    break;
                case "hidePlayOn":
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 13) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posY: -160
                            });
                        }
                    }
                    break;
                case "insuranceWin":
                    this.aPanels.push({
                        id: 10,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "playerWin":
                    this.aPanels.push({
                        id: 12,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "compWin":
                    this.aPanels.push({
                        id: 11,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    if(_oData.broke) {
                        if(_oData.gameMode == 0) {
                            this.aPanels.push({
                                id: 14,
                                posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                                posY: this.canvasHeight
                            });
                            TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                                posY: 600,
                                delay: 1,
                                ease: "Back.easeOut"
                            });
                        } else {
                            this.aPanels.push({
                                id: 15,
                                posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                                posY: this.canvasHeight
                            });
                            TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                                posY: 600,
                                delay: 1,
                                ease: "Back.easeOut"
                            });
                        }
                    }
                    break;
                case "compBust":
                    this.aPanels.push({
                        id: 2,
                        posX: this.canvasWidth / 2 - this.oPanelsImgData.oData.spriteWidth / 2,
                        posY: -160
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], 1, {
                        posY: 213,
                        ease: "Back.easeOut"
                    });
                    this.aPanels.push({
                        id: 9,
                        posX: this.canvasWidth,
                        posY: 385
                    });
                    TweenLite.to(this.aPanels[this.aPanels.length - 1], .3, {
                        posX: 383,
                        delay: 1.3
                    });
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.aPanels[i].id == 4) {
                            TweenLite.to(this.aPanels[i], .3, {
                                posX: this.canvasWidth,
                                delay: 1
                            });
                            break;
                        }
                    }
                    break;
                case "split":
                    this.playerHandTotal1 = _oData.playerHandTotal2;
                    this.playerHandTotal2 = _oData.playerHandTotal1;
                    for(var i = 0; i < this.aPanels.length; i++) {
                        if(this.insuranceIsOn && this.aPanels[i].id == 8) {
                            TweenLite.to(this.aPanels[i], .5, {
                                posX: -380
                            });
                        }
                    }
                    TweenLite.to(this.playerValuePanel1, .3, {
                        posX: this.canvasWidth
                    });
                    this.aPanels.push({
                        id: 4,
                        posX: -379,
                        posY: 420
                    });
                    this.playerValuePanel2 = this.aPanels[this.aPanels.length - 1];
                    TweenLite.to(this.playerValuePanel2, .3, {
                        posX: -291
                    });
                    this.handSide = "left";
                    break;
                case "switchHands":
                    this.handSide = "right";
                    this.actionCompleteCallback = _oData.callback;
                    TweenLite.to(this.playerValuePanel1, .3, {
                        posX: 445,
                        delay: .5,
                        onComplete: this.panelSwitchRight,
                        onCompleteParams: [
                            this
                        ]
                    });
                    if(_oData.event == "bust") {
                        TweenLite.to(this.playerValuePanel2, .3, {
                            posX: -379,
                            delay: .5
                        });
                    }
                    break;
            }
        };
        Panel.prototype.panelSwitchRight = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Panel.prototype.blackjackDealComplete = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Panel.prototype.hideDealTweenComplete = function (_scope) {
            for(var i = 0; i < _scope.aPanels.length; i++) {
                if(_scope.aPanels[i].id == 0 || _scope.aPanels[i].id == 7) {
                    _scope.aPanels.splice(i, 1);
                    i -= 1;
                }
            }
        };
        Panel.prototype.showDealBut = function () {
            TweenLite.killTweensOf(this.aPanels[1]);
            TweenLite.to(this.aPanels[1], .5, {
                posX: 383
            });
        };
        Panel.prototype.hideDealBut = function () {
            TweenLite.killTweensOf(this.aPanels[1]);
            TweenLite.to(this.aPanels[1], .5, {
                posX: this.canvasWidth
            });
        };
        Panel.prototype.render = function (_ctx) {
            this.renderFunc(_ctx);
        };
        Panel.prototype.renderInGame = function (_ctx) {
            for(var i = 0; i < this.aPanels.length; i++) {
                var imgX = (this.aPanels[i].id * this.oPanelsImgData.oData.spriteWidth) % this.oPanelsImgData.img.width;
                var imgY = Math.floor(this.aPanels[i].id / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oPanelsImgData.img, imgX, imgY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, this.aPanels[i].posX, this.aPanels[i].posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
            }
            if(this.playerHandTotal1 > 0) {
                for(var i = 0; i < this.playerHandTotal1.toString().length; i++) {
                    var id = parseFloat(this.playerHandTotal1.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    var offset;
                    offset = i * this.letterSpace + 50 - (this.letterSpace * this.playerHandTotal1.toString().length) / 2;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.playerValuePanel1.posX + offset, this.playerValuePanel1.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
            if(this.playerHandTotal2 > 0) {
                for(var i = 0; i < this.playerHandTotal2.toString().length; i++) {
                    var id = parseFloat(this.playerHandTotal2.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    var offset;
                    offset = i * this.letterSpace + 329 - (this.letterSpace * this.playerHandTotal2.toString().length) / 2;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.playerValuePanel2.posX + offset, this.playerValuePanel2.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
            if(this.compHandTotal > 0) {
                for(var i = 0; i < this.compHandTotal.toString().length; i++) {
                    var id = parseFloat(this.compHandTotal.toString().charAt(i));
                    var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                    var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.compValuePanel.posX + i * this.letterSpace + 50 - (this.letterSpace * this.compHandTotal.toString().length) / 2, this.compValuePanel.posY + 60, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                }
            }
        };
        return Panel;
    })();
    Elements.Panel = Panel;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Numbers = (function () {
        function Numbers(_oNumbersImgData, _goal, _canvasWidth, _canvasHeight) {
            this.bet = 0;
            this.bank = 0;
            this.letterSpace = 17;
            this.oNumbersImgData = _oNumbersImgData;
            this.goal = _goal;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            if(this.goal == 0) {
                this.renderFunc = this.renderQuick;
            } else {
                this.renderFunc = this.renderCareer;
            }
        }
        Numbers.prototype.setAmounts = function (_bet, _bank) {
            this.bet = _bet;
            this.bank = _bank;
        };
        Numbers.prototype.render = function (_ctx) {
            this.renderFunc(_ctx);
        };
        Numbers.prototype.renderQuick = function (_ctx) {
            for(var i = 0; i < this.bet.toString().length; i++) {
                var id = parseFloat(this.bet.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 75 + i * this.letterSpace, 580, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.bank.toString().length; i++) {
                var id = parseFloat(this.bank.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 232 + i * this.letterSpace, 761, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
        };
        Numbers.prototype.renderCareer = function (_ctx) {
            for(var i = 0; i < this.bet.toString().length; i++) {
                var id = parseFloat(this.bet.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 75 + i * this.letterSpace, 580, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.bank.toString().length; i++) {
                var id = parseFloat(this.bank.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 102 + i * this.letterSpace, 761, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.goal.toString().length; i++) {
                var id = parseFloat(this.goal.toString().charAt(i));
                var imgX = (id * this.oNumbersImgData.oData.spriteWidth) % this.oNumbersImgData.img.width;
                var imgY = Math.floor(id / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                _ctx.drawImage(this.oNumbersImgData.img, imgX, imgY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 396 + i * this.letterSpace, 761, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
            }
        };
        return Numbers;
    })();
    Elements.Numbers = Numbers;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Chips = (function () {
        function Chips(_oChipImgData, _chipLevel, _aChipAmounts, _canvasWidth, _canvasHeight) {
            this.bet = 0;
            this.bank = 0;
            this.oChipImgData = _oChipImgData;
            this.chipLevel = _chipLevel;
            this.aChipAmounts = _aChipAmounts;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.aChipStacks = new Array({
                targX: 3,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 133,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 266,
                targY: 630,
                x: 200,
                y: 800
            }, {
                targX: 399,
                targY: 630,
                x: 200,
                y: 800
            });
        }
        Chips.prototype.setAmounts = function (_bet, _bank) {
            this.bet = _bet;
            this.bank = _bank;
        };
        Chips.prototype.updateChipStacks = function () {
            if(this.bank < this.aChipAmounts[0 + this.chipLevel]) {
                this.aChipStacks[0].y = 800;
                this.aChipStacks[1].y = 800;
                this.aChipStacks[2].y = 800;
                this.aChipStacks[3].y = 800;
            } else {
                this.aChipStacks[0].y = this.aChipStacks[0].targY;
                if(this.bank < this.aChipAmounts[1 + this.chipLevel]) {
                    this.aChipStacks[1].y = 800;
                    this.aChipStacks[2].y = 800;
                    this.aChipStacks[3].y = 800;
                } else {
                    this.aChipStacks[1].y = this.aChipStacks[1].targY;
                    if(this.bank < this.aChipAmounts[2 + this.chipLevel]) {
                        this.aChipStacks[2].y = 800;
                        this.aChipStacks[3].y = 800;
                    } else {
                        this.aChipStacks[2].y = this.aChipStacks[2].targY;
                        if(this.bank < this.aChipAmounts[3 + this.chipLevel]) {
                            this.aChipStacks[3].y = 800;
                        } else {
                            this.aChipStacks[3].y = this.aChipStacks[3].targY;
                        }
                    }
                }
            }
        };
        Chips.prototype.setUp = function (_type) {
            switch(_type) {
                case "betting":
                    this.aBetChips = new Array();
                    this.renderFunc = this.renderStart;
                    var stackNum;
                    if(this.bank >= this.aChipAmounts[3 + this.chipLevel]) {
                        stackNum = 4;
                    } else if(this.bank >= this.aChipAmounts[2 + this.chipLevel]) {
                        stackNum = 3;
                    } else if(this.bank >= this.aChipAmounts[1 + this.chipLevel]) {
                        stackNum = 2;
                    } else if(this.bank >= this.aChipAmounts[0 + this.chipLevel]) {
                        stackNum = 1;
                    }
                    for(var i = 0; i < stackNum; i++) {
                        TweenLite.to(this.aChipStacks[i], .5, {
                            y: this.aChipStacks[i].targY,
                            x: this.aChipStacks[i].targX,
                            ease: "Back.easeOut",
                            delay: i * .1
                        });
                    }
                    break;
                case "firstDeal":
                    this.renderFunc = this.renderSmall;
                    this.aSmallBetChips = new Array();
                    for(var i = 0; i < Math.min(this.aBetChips.length, 5); i++) {
                        var oTemp = {
                            id: this.aBetChips[this.aBetChips.length - i - 1].id,
                            posX: 170 + i * (i * 3) + 1 * i,
                            posY: 400,
                            scale: 1
                        };
                        this.aSmallBetChips.push(oTemp);
                        TweenLite.killTweensOf(this);
                        TweenLite.to(this.aSmallBetChips[i], .3, {
                            scale: .5,
                            posX: Math.random() * 90 + 190,
                            posY: Math.random() * 10 + 550,
                            delay: i * .1
                        });
                    }
                    for(var i = 0; i < this.aChipStacks.length; i++) {
                        TweenLite.to(this.aChipStacks[i], .3, {
                            y: 800,
                            x: 200,
                            delay: i * .1
                        });
                    }
                    break;
                case "double":
                    this.renderFunc = this.renderDouble;
                    this.aDoubleBetChips = new Array();
                    for(var i = 0; i < this.aSmallBetChips.length; i++) {
                        var oTemp = {
                            id: this.aSmallBetChips[i].id,
                            posX: 200,
                            posY: 800,
                            scale: 1
                        };
                        this.aDoubleBetChips.push(oTemp);
                        TweenLite.to(this.aDoubleBetChips[i], .5, {
                            posX: Math.random() * 90 + 190,
                            posY: Math.random() * 10 + 550,
                            ease: "Back.easeOut",
                            delay: .3 + i * .1
                        });
                    }
                    break;
            }
        };
        Chips.prototype.addChip = function (_id, _chipLevel, _bet, _bank) {
            this.setAmounts(_bet, _bank);
            this.updateChipStacks();
            this.curChipX = this.aChipStacks[_id].targX;
            this.curChipY = this.aChipStacks[_id].targY;
            this.curChipId = _id;
            var num = Math.min(this.aBetChips.length, 4);
            TweenLite.killTweensOf(this);
            TweenLite.to(this, .3, {
                curChipX: 170 + num * (num * 3) + 1 * num,
                curChipY: 400,
                ease: "Back.easeOut",
                onComplete: this.betTweenComplete,
                onCompleteParams: [
                    this
                ]
            });
            this.aBetChips.push({
                id: _id,
                chipLevel: _chipLevel
            });
            this.renderFunc = this.renderAdding;
        };
        Chips.prototype.betTweenComplete = function (_scope) {
            _scope.renderFunc = _scope.renderWaiting;
        };
        Chips.prototype.removeChip = function (_bet, _bank) {
            this.setAmounts(_bet, _bank);
            this.updateChipStacks();
            var num = Math.min(this.aBetChips.length, 4);
            this.curChipX = 170 + num * (num * 3) + 1 * num;
            this.curChipY = 400;
            this.curChipId = this.aBetChips[this.aBetChips.length - 1].id;
            this.aBetChips.pop();
            TweenLite.killTweensOf(this);
            TweenLite.to(this, .3, {
                curChipX: this.aChipStacks[this.curChipId].targX,
                curChipY: this.aChipStacks[this.curChipId].targY,
                ease: "Back.easeIn",
                onComplete: this.betTweenComplete,
                onCompleteParams: [
                    this
                ]
            });
            this.renderFunc = this.renderRemoving;
        };
        Chips.prototype.render = function (_ctx) {
            this.renderFunc(_ctx);
        };
        Chips.prototype.renderStart = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
        };
        Chips.prototype.renderAdding = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length - 1, 4); i++) {
                var id = this.aBetChips[this.aBetChips.length - 1 - Math.min(this.aBetChips.length - 1, 4) + i].id + this.aBetChips[this.aBetChips.length - 1 - Math.min(this.aBetChips.length - 1, 4) + i].chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            var id = this.aBetChips[this.aBetChips.length - 1].id + this.aBetChips[this.aBetChips.length - 1].chipLevel;
            var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
            var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
            _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.curChipX, this.curChipY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
        };
        Chips.prototype.renderRemoving = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length, 4); i++) {
                var id = this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 4) + i].id + this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 4) + i].chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            var imgX = ((this.curChipId + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
            var imgY = Math.floor((this.curChipId + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
            _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.curChipX, this.curChipY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
        };
        Chips.prototype.renderWaiting = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < Math.min(this.aBetChips.length, 5); i++) {
                var id = this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 5) + i].id + this.aBetChips[this.aBetChips.length - Math.min(this.aBetChips.length, 5) + i].chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, 170 + i * (i * 3) + 1 * i, 400, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
        };
        Chips.prototype.renderSmall = function (_ctx) {
            for(var i = 0; i < this.aChipStacks.length; i++) {
                var imgX = ((i + this.chipLevel) * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor((i + this.chipLevel) / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aChipStacks[i].x, this.aChipStacks[i].y, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight);
            }
            for(var i = 0; i < this.aSmallBetChips.length; i++) {
                var id = this.aSmallBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aSmallBetChips[i].posX, this.aSmallBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
        };
        Chips.prototype.renderDouble = function (_ctx) {
            for(var i = 0; i < this.aSmallBetChips.length; i++) {
                var id = this.aSmallBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aSmallBetChips[i].posX, this.aSmallBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
            for(var i = 0; i < this.aDoubleBetChips.length; i++) {
                var id = this.aDoubleBetChips[i].id + this.chipLevel;
                var imgX = (id * this.oChipImgData.oData.spriteWidth) % this.oChipImgData.img.width;
                var imgY = Math.floor(id / (this.oChipImgData.img.width / this.oChipImgData.oData.spriteWidth)) * this.oChipImgData.oData.spriteHeight;
                _ctx.drawImage(this.oChipImgData.img, imgX, imgY, this.oChipImgData.oData.spriteWidth, this.oChipImgData.oData.spriteHeight, this.aDoubleBetChips[i].posX, this.aDoubleBetChips[i].posY, this.oChipImgData.oData.spriteWidth * this.aSmallBetChips[i].scale, this.oChipImgData.oData.spriteHeight * this.aSmallBetChips[i].scale);
            }
        };
        return Chips;
    })();
    Elements.Chips = Chips;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Cards = (function () {
        function Cards(_oCardsImgData, _canvasWidth, _canvasHeight) {
            this.centreId = 0;
            this.oCardsImgData = _oCardsImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }
        Cards.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            switch(_type) {
                case "firstDeal":
                    this.aPlayerCards1 = new Array();
                    this.aPlayerCards2 = new Array();
                    this.aCurPlayerCards = this.aPlayerCards1;
                    this.aCompCards = new Array();
                    this.aCurPlayerCards.push({
                        id: _oData.aPlayerDealtCards[0].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    this.aCurPlayerCards.push({
                        id: _oData.aPlayerDealtCards[1].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    this.aCompCards.push({
                        id: _oData.aCompDealtCards[0].id,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    this.aCompCards.push({
                        id: 52,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    for(var i = 0; i < this.aCurPlayerCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCurPlayerCards.length, this.centreId);
                        TweenLite.to(this.aCurPlayerCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: this.getCentreX(i, this.aCurPlayerCards.length, this.centreId),
                            posY: 460,
                            delay: i * .1
                        });
                        var posX = this.getCentreX(i, this.aCompCards.length, this.centreId);
                        TweenLite.to(this.aCompCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: this.getCentreX(i, this.aCompCards.length, this.centreId),
                            posY: 130,
                            delay: i * .1 + .2
                        });
                    }
                    break;
                case "newPlayerCard":
                    this.aCurPlayerCards.push({
                        id: _oData.newCard.id,
                        posX: 200,
                        posY: -200,
                        rotation: 0
                    });
                    for(var i = 0; i < this.aCurPlayerCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCurPlayerCards.length, this.centreId);
                        if(_oData.callback && i == this.aCurPlayerCards.length - 1) {
                            this.actionCompleteCallback = _oData.callback;
                            TweenLite.to(this.aCurPlayerCards[i], 1, {
                                rotation: this.getRotation(posX),
                                posX: posX,
                                posY: 460,
                                onComplete: this.handComplete,
                                onCompleteParams: [
                                    this
                                ]
                            });
                            break;
                        }
                        TweenLite.to(this.aCurPlayerCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: posX,
                            posY: 460
                        });
                    }
                    break;
                case "newCompCard":
                    this.centreId = 0;
                    this.aCompCards.push({
                        id: _oData.oNewCard.id,
                        posX: 200,
                        posY: -200,
                        rotation: 0,
                        scaleX: 1
                    });
                    for(var i = 0; i < this.aCompCards.length; i++) {
                        var posX = this.getCentreX(i, this.aCompCards.length, this.centreId);
                        if(_oData.callback && i == this.aCompCards.length - 1) {
                            this.actionCompleteCallback = _oData.callback;
                            TweenLite.to(this.aCompCards[i], 1, {
                                rotation: this.getRotation(posX),
                                posX: posX,
                                posY: 130,
                                onComplete: this.handComplete,
                                onCompleteParams: [
                                    this
                                ]
                            });
                            break;
                        }
                        TweenLite.to(this.aCompCards[i], 1, {
                            rotation: this.getRotation(posX),
                            posX: posX,
                            posY: 130
                        });
                    }
                    break;
                case "compPlay":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5,
                        onComplete: this.holeCardRevealComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    this.actionCompleteCallback = _oData.callback;
                    break;
                case "compShow":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5
                    });
                    break;
                case "compInsuranceShow":
                    this.centreId = 0;
                    TweenLite.to(this.aCompCards[1], .5, {
                        scaleX: 0,
                        ease: "Power1.easeIn"
                    });
                    this.aCompCards.push({
                        id: _oData.oHoleCard.id,
                        posX: this.aCompCards[1].posX,
                        posY: this.aCompCards[1].posY,
                        rotation: this.aCompCards[1].rotation,
                        scaleX: 0
                    });
                    TweenLite.to(this.aCompCards[2], .5, {
                        scaleX: 1,
                        delay: .5,
                        onComplete: this.holeCardRevealComplete,
                        onCompleteParams: [
                            this
                        ]
                    });
                    this.actionCompleteCallback = _oData.callback;
                    break;
                case "split":
                    this.aPlayerCards2 = new Array(this.aPlayerCards1.pop());
                    this.centreId = 1;
                    var posX = this.getCentreX(0, this.aCurPlayerCards.length, 1);
                    TweenLite.to(this.aCurPlayerCards[0], .5, {
                        rotation: this.getRotation(posX),
                        posX: posX
                    });
                    var posX = this.getCentreX(0, this.aPlayerCards2.length, 2);
                    TweenLite.to(this.aPlayerCards2[0], .5, {
                        rotation: this.getRotation(posX),
                        posX: posX
                    });
                    break;
                case "switchHands":
                    this.centreId = 2;
                    this.aCurPlayerCards = this.aPlayerCards2;
                    break;
            }
        };
        Cards.prototype.handComplete = function (_scope) {
            _scope.actionCompleteCallback();
        };
        Cards.prototype.holeCardRevealComplete = function (_scope) {
            for(var i = 0; i < _scope.aCompCards.length; i++) {
                if(_scope.aCompCards[i].id == 52) {
                    _scope.aCompCards.splice(i, 1);
                }
            }
            _scope.actionCompleteCallback();
        };
        Cards.prototype.getCentreX = function (_pos, _length, _type) {
            if (typeof _type === "undefined") { _type = 0; }
            var centre = this.canvasWidth / 2;
            var cardSpace = 50;
            if(_type == 1) {
                centre = this.canvasWidth / 4;
                cardSpace = 25;
            } else if(_type == 2) {
                centre = (this.canvasWidth / 4) * 3;
                cardSpace = 25;
            }
            return centre + _pos * cardSpace - ((_length - 1) * cardSpace) / 2;
        };
        Cards.prototype.getRotation = function (_posX) {
            return ((Math.PI / 8) / this.canvasWidth) * _posX - (Math.PI / 16);
        };
        Cards.prototype.render = function (_ctx) {
            for(var i = 0; i < this.aCompCards.length; i++) {
                _ctx.save();
                _ctx.translate(this.aCompCards[i].posX, this.aCompCards[i].posY);
                _ctx.rotate(this.aCompCards[i].rotation);
                var id = this.aCompCards[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2 + (1 - this.aCompCards[i].scaleX) * (this.oCardsImgData.oData.spriteWidth / 2), -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth * this.aCompCards[i].scaleX, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
            for(var i = 0; i < this.aPlayerCards1.length; i++) {
                _ctx.save();
                ctx.translate(this.aPlayerCards1[i].posX, this.aPlayerCards1[i].posY);
                ctx.rotate(this.aPlayerCards1[i].rotation);
                var id = this.aPlayerCards1[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2, -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
            for(var i = 0; i < this.aPlayerCards2.length; i++) {
                _ctx.save();
                ctx.translate(this.aPlayerCards2[i].posX, this.aPlayerCards2[i].posY);
                ctx.rotate(this.aPlayerCards2[i].rotation);
                var id = this.aPlayerCards2[i].id;
                var imgX = (id * this.oCardsImgData.oData.spriteWidth) % this.oCardsImgData.img.width;
                var imgY = Math.floor(id / (this.oCardsImgData.img.width / this.oCardsImgData.oData.spriteWidth)) * this.oCardsImgData.oData.spriteHeight;
                _ctx.drawImage(this.oCardsImgData.img, imgX, imgY, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight, -this.oCardsImgData.oData.spriteWidth / 2, -this.oCardsImgData.oData.spriteHeight / 2, this.oCardsImgData.oData.spriteWidth, this.oCardsImgData.oData.spriteHeight);
                _ctx.restore();
            }
        };
        return Cards;
    })();
    Elements.Cards = Cards;    
})(Elements || (Elements = {}));
var Elements;
(function (Elements) {
    var Buttons = (function () {
        function Buttons(_oButtonsImgData, _canvasWidth, _canvasHeight) {
            this.canHit = false;
            this.oButtonsImgData = _oButtonsImgData;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
            this.aButs = new Array({
                targX: 3,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 133,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 266,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            }, {
                targX: 399,
                targY: 630,
                x: 200,
                y: 800,
                isOn: true
            });
        }
        Buttons.prototype.setUp = function (_type, _oData) {
            if (typeof _oData === "undefined") { _oData = null; }
            switch(_type) {
                case "firstDeal":
                    if(_oData.dealType == "blackjack") {
                        return;
                    }
                    if(_oData.dealType == "normal") {
                        this.aButs[0].isOn = false;
                    }
                    if(!_oData.doubleIsOn) {
                        this.aButs[1].isOn = false;
                    }
                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .5, {
                                y: this.aButs[i].targY,
                                x: this.aButs[i].targX,
                                ease: "Back.easeOut",
                                delay: 1 + i * .1,
                                onComplete: this.allowButs,
                                onCompleteParams: [
                                    this
                                ]
                            });
                        }
                    }
                    break;
                case "double":
                case "stand":

                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: i * .1
                            });
                        }
                    }
                    break;
                case "split":
                case "hit":
                    for(var i = 0; i < 2; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: i * .1
                            });
                        }
                    }
                    break;
                case "bust":
                case "insuranceWin":
                    for(var i = 0; i < this.aButs.length; i++) {
                        if(this.aButs[i].isOn) {
                            TweenLite.to(this.aButs[i], .3, {
                                y: 800,
                                x: 200,
                                delay: 1 + i * .1
                            });
                        }
                    }
                    break;
            }
        };
        Buttons.prototype.allowButs = function (_scope) {
            _scope.canHit = true;
        };
        Buttons.prototype.render = function (_ctx) {
            for(var i = 0; i < this.aButs.length; i++) {
                if(this.aButs[i].isOn) {
                    var imgX = (i * this.oButtonsImgData.oData.spriteWidth) % this.oButtonsImgData.img.width;
                    var imgY = Math.floor(i / (this.oButtonsImgData.img.width / this.oButtonsImgData.oData.spriteWidth)) * this.oButtonsImgData.oData.spriteHeight;
                    _ctx.drawImage(this.oButtonsImgData.img, imgX, imgY, this.oButtonsImgData.oData.spriteWidth, this.oButtonsImgData.oData.spriteHeight, this.aButs[i].x, this.aButs[i].y, this.oButtonsImgData.oData.spriteWidth, this.oButtonsImgData.oData.spriteHeight);
                }
            }
        };
        return Buttons;
    })();
    Elements.Buttons = Buttons;    
})(Elements || (Elements = {}));
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60, new Date().getTime());
    };
})();
var previousTime;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 533;
canvas.height = 800;
var canvasX;
var canvasY;
var canvasScaleX;
var canvasScaleY;
var div = document.getElementById('viewporter');
var sound;
var music;
var allowSound = false;
var muted = false;
var splash;
var splashTimer = 0;
var screens;
var assetLib;
var preAssetLib;
var rotatePause = false;
var manualPause = false;
var isMobile = false;
var gameState = "loading";
var aLangs = new Array("EN");
var curLang = "";
var isBugBrowser = false;
var deviceAgent = navigator.userAgent.toLowerCase();
if(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) {
    isMobile = true;
    if(deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent)) {
        isBugBrowser = true;
    }
}
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas();
window.onresize = function () {
    setTimeout(function () {
        resizeCanvas();
    }, 1);
};
function startBlackjack() {
    setTimeout(function () {
        resizeCanvas();
    }, 0);
    window.addEventListener("orientationchange", function () {
        resizeCanvas();
    }, false);
    SG_Hooks.setOrientationHandler(resizeCanvas);
    SG_Hooks.setResizeHandler(resizeCanvas);
    loadPreAssets();
};
if(typeof (window).AudioContext !== 'undefined' || typeof (window).webkitAudioContext !== 'undefined' || navigator.userAgent.indexOf('Android') == -1) {
    allowSound = true;
    sound = new Howl({
        urls: [
            'audio/sound.ogg', 
            'audio/sound.m4a'
        ],
        sprite: {
            click: [
                0, 
                150
            ],
            cardHard: [
                250, 
                500
            ],
            chip: [
                1000, 
                300
            ],
            bust: [
                1500, 
                750
            ],
            win: [
                2500, 
                750
            ],
            blackjack: [
                3500, 
                750
            ],
            push: [
                4500, 
                750
            ],
            cardSoft: [
                5500, 
                300
            ],
            chipIntro: [
                6000, 
                500
            ]
        }
    });
}
var panel;
var background;
var bet = 0;
var bank = 0;
var numbers;
var chips;
var aChipAmounts = new Array(5, 10, 25, 100, 500, 1000, 5000, 10000, 50000, 100000);
var cards;
var aDeck;
var dealType;
var buttons;
var aPCards1;
var aPCards2;
var aCurPlayerCards;
var aCompCards;
var insuranceTaken = false;
var splitTaken = false;
var insuranceCard;
var chipLevel = 0;
var gameMode;
var careerLevel = 0;
var careerBank = -1;
var lives = 2;
var aMapData = new Array({
    aMarkerPos: [
        435, 
        678
    ],
    aButPos: [
        432, 
        593
    ],
    goal: 2500,
    startBank: 1000
}, {
    aMarkerPos: [
        266, 
        650
    ],
    aButPos: [
        265, 
        565
    ],
    goal: 5000,
    startBank: 1500
}, {
    aMarkerPos: [
        106, 
        630
    ],
    aButPos: [
        108, 
        712
    ],
    goal: 10000,
    startBank: 3000
}, {
    aMarkerPos: [
        198, 
        546
    ],
    aButPos: [
        202, 
        624
    ],
    goal: 25000,
    startBank: 6000
}, {
    aMarkerPos: [
        336, 
        546
    ],
    aButPos: [
        336, 
        464
    ],
    goal: 50000,
    startBank: 10000
}, {
    aMarkerPos: [
        442, 
        472
    ],
    aButPos: [
        444, 
        388
    ],
    goal: 100000,
    startBank: 15000
}, {
    aMarkerPos: [
        349, 
        391
    ],
    aButPos: [
        354, 
        476
    ],
    goal: 150000,
    startBank: 20000
}, {
    aMarkerPos: [
        209, 
        355
    ],
    aButPos: [
        214, 
        270
    ],
    goal: 350000,
    startBank: 30000
}, {
    aMarkerPos: [
        105, 
        278
    ],
    aButPos: [
        110, 
        370
    ],
    goal: 600000,
    startBank: 40000
}, {
    aMarkerPos: [
        276, 
        194
    ],
    aButPos: [
        286, 
        280
    ],
    goal: 1000000,
    startBank: 50000
}, {
    aMarkerPos: [
        -1000, 
        -1000
    ],
    aButPos: [
        -1000, 
        -1000
    ],
    goal: 0,
    startBank: 0
});
if(typeof (Storage) !== "undefined") {
    if(localStorage.getItem("careerLevel") != null) {
        careerLevel = parseInt(localStorage.getItem("careerLevel"));
        lives = parseInt(localStorage.getItem("lives"));
        careerBank = parseInt(localStorage.getItem("careerBank"));
    } else {
        localStorage.setItem("careerLevel", "0");
        localStorage.setItem("lives", "2");
        localStorage.setItem("careerBank", "-1");
    }
}
function initSplash() {
    gameState = "splash";
    resizeCanvas();
    splash = new Elements.Splash(assetLib.getData("splash"), canvas.width, canvas.height);
    previousTime = new Date().getTime();
    updateSplashScreenEvent();
}
function resetDeck() {
    aDeck = new Array();
    for(var i = 0; i < 52; i++) {
        aDeck.push({
            id: i,
            value: i % 13 + 1
        });
    }
}
function initStartScreen() {
    gameState = "start";
    resizeCanvas();
    if(allowSound) {
    }
    bet = 0;
    bank = 1000;
    userInput.addHitArea("mute", butEventHandler, null, {
        type: "rect",
        aRect: [
            455, 
            0, 
            canvas.width, 
            75
        ]
    }, true);
    userInput.addHitArea("help", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    var oCareerBut = {
        oImgData: assetLib.getData("menuButs"),
        aPos: [
            canvas.width / 2, 
            530
        ],
        type: 1,
        frame: 1
    };
    var oQuickPlayBut = {
        oImgData: assetLib.getData("menuButs"),
        aPos: [
            canvas.width / 2, 
            660
        ],
        type: 1,
        frame: 0
    };
    userInput.addHitArea("startCareer", butEventHandler, null, {
        type: "image",
        oImageData: oCareerBut.oImgData,
        aCentrePos: oCareerBut.aPos
    });
    userInput.addHitArea("startQuickPlay", butEventHandler, null, {
        type: "image",
        oImageData: oQuickPlayBut.oImgData,
        aCentrePos: oQuickPlayBut.aPos
    });
    var aButs = new Array(oCareerBut, oQuickPlayBut);
    screens = new Elements.Screens(assetLib.getData("titleScreen"), aButs, canvas.width, canvas.height);
    screens.setRenderFunc(gameState);
    previousTime = new Date().getTime();
    updateStartScreenEvent();
}
function initMapScreen() {
    gameState = "map";
    bet = 0;
    if(typeof (Storage) !== "undefined") {
        if(localStorage.getItem("careerLevel") != null) {
            careerLevel = parseInt(localStorage.getItem("careerLevel"));
            lives = parseInt(localStorage.getItem("lives"));
            careerBank = parseInt(localStorage.getItem("careerBank"));
        }
    }
    if(careerBank == -1) {
        bank = aMapData[careerLevel].startBank;
    } else {
        bank = careerBank;
    }
    userInput.addHitArea("quitMap", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    userInput.addHitArea("clearData", butEventHandler, null, {
        type: "rect",
        aRect: [
            200, 
            755, 
            330, 
            800
        ]
    }, true);
    var oPlayBut = {
        oImgData: assetLib.getData("playNextBut"),
        aPos: aMapData[careerLevel].aButPos,
        type: 1,
        frame: 1
    };
    userInput.addHitArea("playNextLevel", butEventHandler, null, {
        type: "image",
        oImageData: oPlayBut.oImgData,
        aCentrePos: oPlayBut.aPos
    });
    var aButs = new Array(oPlayBut);
    screens = new Elements.Screens(assetLib.getData("mapScreen"), aButs, canvas.width, canvas.height);
    screens.setRenderFunc(gameState, {
        oMapInfoImgData: assetLib.getData("mapInfo"),
        lives: lives,
        oHeartImgData: assetLib.getData("heart"),
        oMarkerImgData: assetLib.getData("mapMarkers"),
        careerLevel: careerLevel,
        aMapData: aMapData
    });
    previousTime = new Date().getTime();
    updateMapScreenEvent();
}
function initBetting() {
    gameState = "betting";
    insuranceTaken = false;
    setChipLevel();
    if(allowSound) {
    }
    playSound("chipIntro");
    userInput.addHitArea("quitGameBetting", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    userInput.addHitArea("addChip", butEventHandler, {
        id: 0
    }, {
        type: "rect",
        aRect: [
            0, 
            630, 
            133, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 1
    }, {
        type: "rect",
        aRect: [
            133, 
            630, 
            266, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 2
    }, {
        type: "rect",
        aRect: [
            266, 
            630, 
            399, 
            758
        ]
    });
    userInput.addHitArea("addChip", butEventHandler, {
        id: 3
    }, {
        type: "rect",
        aRect: [
            399, 
            630, 
            533, 
            758
        ]
    });
    userInput.addHitArea("removeChip", butEventHandler, null, {
        type: "rect",
        aRect: [
            170, 
            390, 
            360, 
            530
        ]
    });
    userInput.addHitArea("deal", butEventHandler, null, {
        type: "rect",
        aRect: [
            390, 
            390, 
            canvas.width, 
            530
        ]
    });
    if(gameMode == 0) {
        background = new Elements.Background(assetLib.getData("background"), 0, canvas.width, canvas.height);
        numbers = new Elements.Numbers(assetLib.getData("numbers"), 0, canvas.width, canvas.height);
    } else {
        background = new Elements.Background(assetLib.getData("background"), 1, canvas.width, canvas.height);
        numbers = new Elements.Numbers(assetLib.getData("numbers"), aMapData[careerLevel].goal, canvas.width, canvas.height);
    }
    numbers.setAmounts(bet, bank);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("numbers"), canvas.width, canvas.height);
    panel.setUp("betting");
    chips = new Elements.Chips(assetLib.getData("chips"), chipLevel, aChipAmounts, canvas.width, canvas.height);
    chips.setAmounts(bet, bank);
    chips.setUp("betting");
    previousTime = new Date().getTime();
    updateBettingEvent();
}
function saveCareerBank() {
    if(gameMode != 0) {
        console.log("saved " + bank);
        localStorage.setItem("careerBank", bank.toString());
    }
}
function initHelp() {
    gameState = "help";
    userInput.addHitArea("quitHelp", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    ctx.drawImage(assetLib.getData("helpScreen").img, 0, 0);
}
function initDeal() {
    gameState = "dealing";
    resetDeck();
    playSound("cardHard");
    userInput.addHitArea("quitGameDealing", butEventHandler, null, {
        type: "rect",
        aRect: [
            0, 
            0, 
            80, 
            75
        ]
    }, true);
    userInput.addHitArea("hit", butEventHandler, null, {
        type: "rect",
        aRect: [
            266, 
            630, 
            399, 
            758
        ]
    });
    userInput.addHitArea("stand", butEventHandler, null, {
        type: "rect",
        aRect: [
            399, 
            630, 
            533, 
            758
        ]
    });
    aPCards2 = new Array();
    aPCards1 = aCurPlayerCards = getCards(2);
    aCompCards = getCards(1);
    if((roundToTen(this.aCurPlayerCards[0].value) + roundToTen(this.aCurPlayerCards[1].value)) == 11 && (this.aCurPlayerCards[0].value == 1 || this.aCurPlayerCards[1].value == 1)) {
        dealType = "blackjack";
    } else if(roundToTen(this.aCurPlayerCards[0].value) == roundToTen(this.aCurPlayerCards[1].value) && bank >= bet) {
        dealType = "split";
        userInput.addHitArea("split", butEventHandler, null, {
            type: "rect",
            aRect: [
                0, 
                630, 
                133, 
                758
            ]
        });
    } else {
        dealType = "normal";
    }
    var insuranceIsOn = false;
    var doubleIsOn = false;
    if(aCompCards[0].value == 1 && bank >= bet) {
        userInput.addHitArea("insure", butEventHandler, null, {
            type: "rect",
            aRect: [
                0, 
                200, 
                150, 
                350
            ]
        });
        insuranceIsOn = true;
    }
    if(bank >= bet) {
        userInput.addHitArea("double", butEventHandler, null, {
            type: "rect",
            aRect: [
                133, 
                630, 
                266, 
                758
            ]
        });
        doubleIsOn = true;
    }
    panel.setUp("firstDeal", {
        dealType: dealType,
        insuranceIsOn: insuranceIsOn,
        value: getBestValue(this.aCurPlayerCards),
        callback: initBlackjackCompare
    });
    cards = new Elements.Cards(assetLib.getData("cards"), canvas.width, canvas.height);
    cards.setUp("firstDeal", {
        aPlayerDealtCards: this.aCurPlayerCards,
        aCompDealtCards: this.aCompCards,
        dealType: dealType
    });
    chips.setUp("firstDeal");
    previousTime = new Date().getTime();
    buttons = new Elements.Buttons(assetLib.getData("buttons"), canvas.width, canvas.height);
    buttons.setUp("firstDeal", {
        dealType: dealType,
        doubleIsOn: doubleIsOn
    });
    updateDealingEvent();
}
function initBlackjackCompare() {
    var oHoleCard = getCards(1)[0];
    aCompCards.push(oHoleCard);
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compPlay", {
        oHoleCard: oHoleCard,
        callback: checkBlackjack
    });
}
function initCompPlay() {
    var oHoleCard;
    if(!insuranceTaken) {
        oHoleCard = getCards(1)[0];
    } else {
        oHoleCard = insuranceCard;
    }
    aCompCards.push(oHoleCard);
    playSound("cardSoft");
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compPlay", {
        oHoleCard: oHoleCard,
        callback: checkHands
    });
}
function dealNewCompCard() {
    var oNewCard = getCards(1)[0];
    aCompCards.push(oNewCard);
    playSound("cardSoft");
    panel.setUp("newCompCard", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("newCompCard", {
        oNewCard: oNewCard,
        callback: checkHands
    });
}
function initCompShow() {
    var oHoleCard = getCards(1)[0];
    aCompCards.push(oHoleCard);
    playSound("cardSoft");
    cards.setUp("compShow", {
        oHoleCard: oHoleCard
    });
}
function initCompInsuranceShow() {
    aCompCards.push(insuranceCard);
    playSound("cardSoft");
    panel.setUp("compPlay", {
        value: getBestValue(aCompCards)
    });
    cards.setUp("compInsuranceShow", {
        oHoleCard: insuranceCard,
        callback: checkInsuranceHand
    });
}
function initLevelComplete() {
    panel.setUp("levelComplete", {
        careerLevel: careerLevel
    });
    SG_Hooks.levelUp(careerLevel + 1, bank);
    bank = aMapData[careerLevel + 1].startBank;
    saveCareerBank();
    userInput.addHitArea("levelComplete", butEventHandler, null, {
        type: "rect",
        aRect: [
            390, 
            390, 
            canvas.width, 
            530
        ]
    });
}
function initGameOver() {
    SG_Hooks.gameOver(careerLevel, bank);
    careerLevel = 0;
    careerBank = -1;
    if(typeof (Storage) !== "undefined") {
        localStorage.setItem("careerLevel", "0");
        localStorage.setItem("lives", "2");
        localStorage.setItem("careerBank", "-1");
    }
    panel.setUp("gameOver");
    userInput.addHitArea("gameOver", butEventHandler, null, {
        type: "rect",
        aRect: [
            390, 
            390, 
            canvas.width, 
            530
        ]
    });
}
function setChipLevel() {
    if(bank < 1500) {
        chipLevel = 0;
    } else if(bank < 5000) {
        chipLevel = 1;
    } else if(bank < 15000) {
        chipLevel = 2;
    } else if(bank < 50000) {
        chipLevel = 3;
    } else if(bank < 100000) {
        chipLevel = 4;
    } else if(bank < 500000) {
        chipLevel = 5;
    } else {
        chipLevel = 6;
    }
}
function checkInsuranceHand() {
    var compHandValue = getBestValue(aCompCards);
    if(compHandValue == 21) {
        bank += Math.round(bet * 1.5);
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        saveCareerBank();
        if(gameMode == 1 && bank >= aMapData[careerLevel].goal) {
            initLevelComplete();
            return;
        }
        panel.setUp("insuranceWin");
        buttons.setUp("insuranceWin");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else {
        buttons.canHit = true;
    }
}
function checkHands() {
    var compHandValue = getBestValue(aCompCards);
    var playerHandValue = getBestValue2(aPCards1, aPCards2);
    if(compHandValue > 21) {
        SG_Hooks.gameOver(careerLevel, bank);
        playSound("win");
        bank += bet * 2;
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        saveCareerBank();
        if(gameMode == 1 && bank >= aMapData[careerLevel].goal) {
            initLevelComplete();
            return;
        }
        panel.setUp("compBust");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else if(compHandValue > 16) {
        SG_Hooks.gameOver(careerLevel, bank);
        if(compHandValue > playerHandValue) {
            playSound("bust");
            bet = 0;
            numbers.setAmounts(bet, bank);
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            var broke = false;
            saveCareerBank();
            if(bank < 5) {
                if(gameMode == 0) {
                    broke = true;
                    bank = 1000;
                } else {
                    lives--;
                    if(typeof (Storage) !== "undefined") {
                        localStorage.setItem("lives", lives.toString());
                    }
                    if(lives < 0) {
                        initGameOver();
                        return;
                    } else {
                        broke = true;
                        bank = 1000;
                        saveCareerBank();
                    }
                }
            }
            panel.setUp("compWin", {
                broke: broke,
                gameMode: gameMode
            });
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        } else if(compHandValue < playerHandValue) {
            playSound("win");
            bank += bet * 2;
            bet = 0;
            numbers.setAmounts(bet, bank);
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            saveCareerBank();
            if(gameMode == 1 && bank >= aMapData[careerLevel].goal) {
                initLevelComplete();
                return;
            }
            panel.setUp("playerWin");
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        } else {
            panel.setUp("push");
            playSound("push");
            bank += bet;
            bet = 0;
            numbers.setAmounts(bet, bank);
            saveCareerBank();
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.addHitArea("replay", butEventHandler, null, {
                type: "rect",
                aRect: [
                    390, 
                    390, 
                    canvas.width, 
                    530
                ]
            });
        }
    } else {
        dealNewCompCard();
    }
}
function checkBlackjack() {
    var compHandValue = getBestValue(aCompCards);
    if(compHandValue == 21) {
        console.log("push");
        playSound("push");
        bank += bet;
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        saveCareerBank();
        if(gameMode == 1 && bank >= aMapData[careerLevel].goal) {
            initLevelComplete();
            return;
        }
        panel.setUp("push");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    } else {
        playSound("blackjack");
        bank += bet + Math.round(bet *= 1.5);
        bet = 0;
        numbers.setAmounts(bet, bank);
        userInput.removeHitArea("split");
        userInput.removeHitArea("double");
        userInput.removeHitArea("hit");
        userInput.removeHitArea("stand");
        saveCareerBank();
        if(gameMode == 1 && bank >= aMapData[careerLevel].goal) {
            initLevelComplete();
            return;
        }
        panel.setUp("blackjack");
        userInput.addHitArea("replay", butEventHandler, null, {
            type: "rect",
            aRect: [
                390, 
                390, 
                canvas.width, 
                530
            ]
        });
    }
}
function roundToTen(_num) {
    if(_num > 10) {
        _num = 10;
    }
    return _num;
}
function getBestValue(_aHand) {
    var handTotal = 0;
    var aceNum = 0;
    for(var i = 0; i < _aHand.length; i++) {
        if(_aHand[i].value == 1) {
            aceNum++;
            handTotal += 11;
        } else {
            handTotal += roundToTen(_aHand[i].value);
        }
    }
    if(handTotal > 21) {
        for(var i = 0; i < aceNum; i++) {
            handTotal -= 10;
            if(handTotal <= 21) {
                break;
            }
        }
    }
    return handTotal;
}
function getBestValue2(_aHand1, _aHand2) {
    var h1 = getBestValue(_aHand1);
    var h2 = getBestValue(_aHand2);
    if(h1 > 22) {
        return h2;
    } else if(h2 > 22) {
        return h1;
    } else {
        if(h1 > h2) {
            return h1;
        } else {
            return h2;
        }
    }
}
function getCards(_num) {
    var aCards = new Array();
    for(var i = 0; i < _num; i++) {
        if(aDeck.length > 0) {
            var ran = Math.floor(Math.random() * aDeck.length);
            aCards.push(aDeck[ran]);
            aDeck.splice(ran, 1);
        } else {
            break;
        }
    }
    return aCards;
}
function dealNewPlayerCard(_isDouble) {
    if (typeof _isDouble === "undefined") { _isDouble = false; }
    var newCard = getCards(1)[0];
    aCurPlayerCards.push(newCard);
    panel.setUp("newPlayerCard", {
        value: getBestValue(aCurPlayerCards)
    });
    if(getBestValue(aCurPlayerCards) > 21) {
        if(!splitTaken) {
            SG_Hooks.gameOver(careerLevel, bank);
            if(getBestValue(aPCards1) > 21) {
                chips.setUp("bust");
                playSound("bust");
                bet = 0;
                numbers.setAmounts(bet, bank);
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                cards.setUp("newPlayerCard", {
                    newCard: newCard,
                    callback: initCompShow
                });
                var broke = false;
                saveCareerBank();
                if(bank < 5) {
                    if(gameMode == 0) {
                        broke = true;
                        bank = 1000;
                    } else {
                        lives--;
                        if(typeof (Storage) !== "undefined") {
                            localStorage.setItem("lives", lives.toString());
                        }
                        if(lives < 0) {
                            initGameOver();
                            return;
                        } else {
                            broke = true;
                            bank = 1000;
                            saveCareerBank();
                        }
                    }
                }
                panel.setUp("bust", {
                    broke: broke,
                    gameMode: gameMode
                });
                buttons.setUp("bust");
                userInput.addHitArea("replay", butEventHandler, null, {
                    type: "rect",
                    aRect: [
                        390, 
                        390, 
                        canvas.width, 
                        530
                    ]
                });
            } else {
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                buttons.setUp("stand");
                panel.setUp("stand");
                initCompPlay();
            }
        } else {
            splitTaken = false;
            cards.setUp("newPlayerCard", {
                newCard: newCard
            });
            panel.setUp("switchHands", {
                callback: dealNewPlayerCard,
                event: "bust"
            });
            bet /= 2;
            numbers.setAmounts(bet, bank);
            cards.setUp("switchHands");
            aCurPlayerCards = aPCards2;
        }
    } else if(_isDouble) {
        cards.setUp("newPlayerCard", {
            newCard: newCard,
            callback: initCompPlay
        });
    } else {
        cards.setUp("newPlayerCard", {
            newCard: newCard
        });
    }
}
function butEventHandler(_id, _oData) {
    switch(_id) {
        case "langSelect":
            curLang = _oData.lang;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            userInput.removeHitArea("langSelect");
            initLoadAssets();
            break;
        case "replay":
            playSound("click");
            userInput.removeHitArea("replay");
            userInput.removeHitArea("quitGameDealing");
            bet = 0;
            numbers.setAmounts(bet, bank);
            initBetting();
            break;
        case "split":
            if(buttons.canHit) {
                playSound("click");
                splitTaken = true;
                aPCards2 = new Array();
                aPCards2.push(aCurPlayerCards.pop());
                aPCards1 = aCurPlayerCards;
                bank -= bet;
                bet *= 2;
                numbers.setAmounts(bet, bank);
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                buttons.setUp("split");
                cards.setUp("split");
                dealNewPlayerCard();
                panel.setUp("split", {
                    playerHandTotal1: getBestValue(aPCards1),
                    playerHandTotal2: getBestValue(aPCards2)
                });
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "double":
            if(buttons.canHit) {
                playSound("cardSoft");
                bank -= bet;
                bet *= 2;
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                userInput.removeHitArea("hit");
                userInput.removeHitArea("stand");
                numbers.setAmounts(bet, bank);
                buttons.setUp("double");
                chips.setUp("double");
                dealNewPlayerCard(true);
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "hit":
            if(buttons.canHit) {
                playSound("cardSoft");
                userInput.removeHitArea("split");
                userInput.removeHitArea("double");
                buttons.setUp("hit");
                dealNewPlayerCard();
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "stand":
            Storage.addStandTime();
            var standTime = Storage.getStandTime();
            if(standTime%4===0){
                    ShowAds();
                Storage.setStandTime(0);
            }

            if(buttons.canHit) {
                playSound("click");
                if(!splitTaken) {
                    userInput.removeHitArea("split");
                    userInput.removeHitArea("double");
                    userInput.removeHitArea("hit");
                    userInput.removeHitArea("stand");
                    buttons.setUp("stand");
                    panel.setUp("stand");
                    initCompPlay();
                } else {
                    splitTaken = false;
                    panel.setUp("switchHands", {
                        callback: dealNewPlayerCard
                    });
                    cards.setUp("switchHands");
                    aCurPlayerCards = aPCards2;
                }
                if(insuranceTaken) {
                    panel.setUp("hidePlayOn");
                }
            }
            break;
        case "startCareer":
            console.log('career play')
            playSound("click");
            userInput.removeHitArea("startQuickPlay");
            userInput.removeHitArea("startCareer");
            userInput.removeHitArea("help");
            SG_Hooks.start();
            initMapScreen();
            break;
        case "startQuickPlay":
            ShowAds();
            console.log('quick play')
            playSound("click");
            userInput.removeHitArea("startQuickPlay");
            userInput.removeHitArea("startCareer");
            userInput.removeHitArea("help");
            gameMode = 0;
            SG_Hooks.start();
            initBetting();
            break;
        case "playNextLevel":
            ShowAds();
            playSound("click");
            userInput.removeHitArea("playNextLevel");
            userInput.removeHitArea("quitMap");
            userInput.removeHitArea("clearData");
            gameMode = 1;
            initBetting();
            break;
        case "help":


            playSound("click");
            userInput.removeHitArea("startQuickPlay");
            userInput.removeHitArea("startCareer");
            userInput.removeHitArea("help");
            initHelp();

            //var iosUrl ="https://itunes.apple.com/us/app/endless-lake-running-game/id1084094845?mt=8";
            //var url = "https://play.google.com/store/apps/details?id=com.topgeek.river";
            //
            //if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            //    window.open(iosUrl);
            //}
            //else{
            //    window.open(url);
            //}

            break;
        case "quitHelp":
            playSound("click");
            userInput.removeHitArea("quitHelp");
            initStartScreen();
            break;
        case "quitMap":
            console.log('quit');
            playSound("click");
            userInput.removeHitArea("quitMap");
            userInput.removeHitArea("clearData");
            userInput.removeHitArea("playNextLevel");
            initStartScreen();
            break;
        case "clearData":
            playSound("click");
            if(typeof (Storage) !== "undefined") {
                localStorage.setItem("careerLevel", "0");
                localStorage.setItem("lives", "2");
                localStorage.setItem("careerBank", "-1");
            }
            careerLevel = 0;
            lives = 2;
            careerBank = -1;
            initMapScreen();
            break;
        case "mute":
            playSound("click");
            toggleMute();
            break;
        case "quitGameBetting":
            console.log('quitGameBetting');
            ShowAds();
            playSound("click");
            userInput.removeHitArea("quitGameBetting");
            userInput.removeHitArea("addChip");
            userInput.removeHitArea("removeChip");
            userInput.removeHitArea("deal");
            initStartScreen();
            break;
        case "quitGameDealing":
            console.log('quit game dealing');
            ShowAds();
            playSound("click");
            userInput.removeHitArea("quitGameDealing");
            userInput.removeHitArea("split");
            userInput.removeHitArea("double");
            userInput.removeHitArea("hit");
            userInput.removeHitArea("stand");
            userInput.removeHitArea("insure");
            userInput.removeHitArea("replay");
            initStartScreen();
            break;
        case "addChip":
            if(aChipAmounts[_oData.id] <= bank) {
                playSound("chip");
                panel.showDealBut();
                bet += aChipAmounts[_oData.id + chipLevel];
                bank -= aChipAmounts[_oData.id + chipLevel];
                numbers.setAmounts(bet, bank);
                chips.addChip(_oData.id, chipLevel, bet, bank);
                setChipLevel();
                chips.chipLevel = chipLevel;
            }
            break;
        case "removeChip":
            if(bet >= 5) {
                playSound("click");
                bet -= aChipAmounts[chips.aBetChips[chips.aBetChips.length - 1].id + chips.aBetChips[chips.aBetChips.length - 1].chipLevel];
                bank += aChipAmounts[chips.aBetChips[chips.aBetChips.length - 1].id + chips.aBetChips[chips.aBetChips.length - 1].chipLevel];
                numbers.setAmounts(bet, bank);
                chips.removeChip(bet, bank);
                if(bet <= 0) {
                    panel.hideDealBut();
                }
                setChipLevel();
                chips.chipLevel = chipLevel;
            }
            break;
        case "deal":
            if(bet > 0) {
                playSound("click");
                userInput.removeHitArea("quitGameBetting");
                userInput.removeHitArea("addChip");
                userInput.removeHitArea("removeChip");
                userInput.removeHitArea("deal");
                initDeal();
            }
            break;
        case "insure":
            playSound("click");
            insuranceCard = getCards(1)[0];
            bank -= Math.round(bet / 2);
            numbers.setAmounts(bet, bank);
            insuranceTaken = true;
            if(roundToTen(insuranceCard.value) == 10) {
                panel.setUp("insuranceTaken");
                initCompInsuranceShow();
                buttons.canHit = false;
            } else {
                panel.setUp("insuranceLose");
            }
            break;
        case "levelComplete":
            playSound("click");
            userInput.removeHitArea("levelComplete");
            careerLevel = Math.min(careerLevel + 1, 10);
            lives = Math.min(lives + 1, 9);
            if(typeof (Storage) !== "undefined") {
                localStorage.setItem("careerLevel", careerLevel.toString());
                localStorage.setItem("lives", lives.toString());
            }
            initMapScreen();
            break;
        case "gameOver":
            playSound("click");
            userInput.removeHitArea("gameOver");
            lives = 2;
            initStartScreen();
            break;
    }
}
function updateDealingEvent() {
    if(rotatePause || gameState != "dealing") {
        return;
    }
    var delta = getDelta();
    background.render(ctx);
    numbers.render(ctx);
    chips.render(ctx);
    cards.render(ctx);
    if(gameMode == 1) {
        renderHeart();
    }
    buttons.render(ctx);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateDealingEvent);
}
function updateBettingEvent() {
    if(rotatePause || gameState != "betting") {
        return;
    }
    var delta = getDelta();
    background.render(ctx);
    numbers.render(ctx);
    if(gameMode == 1) {
        renderHeart();
    }
    chips.render(ctx);
    panel.render(ctx);
    renderMuteBut();
    requestAnimFrame(updateBettingEvent);
}
function renderHeart() {
    if(lives < 0) {
        return;
    }
    var id = lives;
    var oImgData = assetLib.getData("heart");
    var imgX = (id * oImgData.oData.spriteWidth) % oImgData.img.width;
    var imgY = Math.floor(id / (oImgData.img.width / oImgData.oData.spriteWidth)) * oImgData.oData.spriteHeight;
    ctx.drawImage(oImgData.img, imgX, imgY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight, 237, 750, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight);
}
function updateSplashScreenEvent() {
    if(rotatePause || gameState != "splash") {
        return;
    }
    var delta = getDelta();
    splashTimer += delta;
    if(splashTimer > 2.5) {
        initStartScreen();
        return;
    }
    splash.render(ctx, delta);
    requestAnimFrame(updateSplashScreenEvent);
}
function updateStartScreenEvent() {
    if(rotatePause || gameState != "start") {
        return;
    }
    var delta = getDelta();
    screens.render(ctx, delta);
    renderMuteBut();
    requestAnimFrame(updateStartScreenEvent);
}
function updateMapScreenEvent() {
    if(rotatePause || gameState != "map") {
        return;
    }
    var delta = getDelta();
    screens.render(ctx, delta);
    renderMuteBut();
    requestAnimFrame(updateMapScreenEvent);
}
function getDelta() {
    var currentTime = new Date().getTime();
    var delta = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    if(delta > .5) {
        delta = 0;
    }
    return delta;
}
function renderSprite(_element) {
    ctx.save();
    ctx.translate(_element.x, _element.y);
    ctx.rotate(_element.rotation);
    _element.render(ctx);
    ctx.restore();
}
function loadPreAssets() {
    curLang = SG_Hooks.getLanguage([
        'en'
    ]).toUpperCase();
    preAssetLib = new Utils.AssetLoader(curLang, [
        {
            id: "preloadImage",
            file: "images/preloadImage.jpg"
        }
    ], ctx, canvas.width, canvas.height, false);
    preAssetLib.onReady(initLoadAssets);
}
function initLangSelect() {
    var oImgData = preAssetLib.getData("langSelect");
    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height / 2);
    var butSize = 140;
    for(var i = 0; i < aLangs.length; i++) {
        var px = canvas.width / 2 - (butSize * aLangs.length) / 2 + i * butSize;
        var py = canvas.height / 2 - butSize / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[i]
        }, {
            type: "rect",
            aRect: [
                px, 
                py, 
                px + butSize, 
                py + 140
            ]
        });
    }
}
function initLoadAssets() {
    var oImgData = preAssetLib.getData("preloadImage");
    ctx.drawImage(oImgData.img, canvas.width / 2 - oImgData.img.width / 2, canvas.height / 2 - oImgData.img.height - 10);
    loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {
            id: "background",
            file: "images/" + curLang + "/background_533x800.jpg",
            oData: {
                columns: 1,
                spriteWidth: 533,
                spriteHeight: 800
            }
        }, 
        {
            id: "helpScreen",
            file: "images/" + curLang + "/helpScreen.jpg"
        }, 
        {
            id: "mapScreen",
            file: "images/" + curLang + "/mapScreen.jpg"
        }, 
        {
            id: "titleScreen",
            file: "images/titleScreen.jpg"
        }, 
        {
            id: "rotateDeviceMessage",
            file: "images/rotateDeviceMessage.jpg"
        }, 
        {
            id: "splash",
            file: "images/splashScreen.jpg"
        }, 
        {
            id: "playNextBut",
            file: "images/" + curLang + "/playNextBut_159x102.png",
            oData: {
                columns: 2,
                spriteWidth: 159,
                spriteHeight: 102
            }
        }, 
        {
            id: "mapInfo",
            file: "images/" + curLang + "/mapInfo_458x332.png",
            oData: {
                columns: 2,
                spriteWidth: 458,
                spriteHeight: 332
            }
        }, 
        {
            id: "menuButs",
            file: "images/" + curLang + "/menuButs_379x102.png",
            oData: {
                columns: 2,
                spriteWidth: 379,
                spriteHeight: 102
            }
        }, 
        {
            id: "heart",
            file: "images/heart_57x51.png",
            oData: {
                columns: 3,
                spriteWidth: 57,
                spriteHeight: 51
            }
        }, 
        {
            id: "mapMarkers",
            file: "images/mapMarkers_107x106.png",
            oData: {
                columns: 2,
                spriteWidth: 107,
                spriteHeight: 106
            }
        }, 
        {
            id: "panels",
            file: "images/" + curLang + "/panels_380x160.png",
            oData: {
                columns: 2,
                spriteWidth: 380,
                spriteHeight: 160
            }
        }, 
        {
            id: "numbers",
            file: "images/numbers_17x36.png",
            oData: {
                columns: 3,
                spriteWidth: 17,
                spriteHeight: 36
            }
        }, 
        {
            id: "cards",
            file: "images/cards_128x173.png",
            oData: {
                columns: 9,
                spriteWidth: 128,
                spriteHeight: 173
            }
        }, 
        {
            id: "buttons",
            file: "images/" + curLang + "/buttons_131x133.png",
            oData: {
                columns: 4,
                spriteWidth: 131,
                spriteHeight: 133
            }
        }, 
        {
            id: "chips",
            file: "images/chips_133x133.png",
            oData: {
                columns: 7,
                spriteWidth: 133,
                spriteHeight: 133
            }
        }, 
        {
            id: "muteBut",
            file: "images/mute_68x67.png",
            oData: {
                columns: 2,
                spriteWidth: 68,
                spriteHeight: 67
            }
        }
    ], ctx, canvas.width, canvas.height);
    if(allowSound && !muted) {
    }
    assetLib.onReady(initStartScreen);
}
function resizeCanvas() {
    var tempInnerWidth = window.innerWidth;
    var tempInnerHeight = window.innerHeight;
    if(tempInnerWidth > 480) {
        tempInnerWidth -= 1;
        tempInnerHeight -= 1;
    }
    if(window.innerWidth > window.innerHeight && isMobile) {
        if(gameState != "loading") {
            rotatePauseOn();
        }
        if(tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) {
            canvas.style.width = tempInnerWidth + "px";
            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";
            canvas.style.height = tempInnerHeight + "px";
            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else if(!isMobile) {
        if(rotatePause) {
            rotatePauseOff();
        }
        if(tempInnerWidth / canvas.width < tempInnerHeight / canvas.height) {
            canvas.style.width = tempInnerWidth + "px";
            canvas.style.height = (tempInnerWidth / canvas.width) * canvas.height + "px";
            canvasX = 0;
            canvasY = ((tempInnerHeight - (tempInnerWidth / canvas.width) * canvas.height) / 2);
            canvasScaleX = canvasScaleY = canvas.width / tempInnerWidth;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        } else {
            canvas.style.width = (tempInnerHeight / canvas.height) * canvas.width + "px";
            canvas.style.height = tempInnerHeight + "px";
            canvasX = ((tempInnerWidth - (tempInnerHeight / canvas.height) * canvas.width) / 2);
            canvasY = 0;
            canvasScaleX = canvasScaleY = canvas.height / tempInnerHeight;
            div.style.marginTop = canvasY + "px";
            div.style.marginLeft = canvasX + "px";
        }
    } else {
        if(rotatePause) {
            rotatePauseOff();
        }
        canvasX = canvasY = 0;
        canvasScaleX = canvas.width / tempInnerWidth;
        canvasScaleY = canvas.height / tempInnerHeight;
        canvas.style.width = tempInnerWidth + "px";
        canvas.style.height = tempInnerHeight + "px";
        div.style.marginTop = 0 + "px";
        div.style.marginLeft = 0 + "px";
    }
    userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY);
}
function playSound(_id) {
    if(allowSound) {
        sound.play(_id);
    }
}
function toggleMute() {
    muted = !muted;
    if(allowSound) {
        if(muted) {
            Howler.mute();
        } else {
            Howler.unmute();
        }
    }
    renderMuteBut();
}
function renderMuteBut() {
    if(!allowSound) {
        return;
    }
    var oImgData = assetLib.getData("muteBut");
    var id = 0;
    if(muted) {
        id = 1;
    }
    var imgX = (id * oImgData.oData.spriteWidth) % oImgData.img.width;
    var imgY = Math.floor(id / (oImgData.img.width / oImgData.oData.spriteWidth)) * oImgData.oData.spriteHeight;
    ctx.drawImage(oImgData.img, imgX, imgY, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight, 459, 6, oImgData.oData.spriteWidth, oImgData.oData.spriteHeight);
}
function toggleManualPause() {
    if(!manualPause) {
        manualPause = true;
        if(allowSound) {
            Howler.mute();
        }
        pauseCoreOn();
    } else {
        manualPause = false;
        if(allowSound) {
            if(!muted) {
                Howler.unmute();
            }
        }
        pauseCoreOff();
    }
}
function rotatePauseOn() {
    rotatePause = true;
    ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0);
    pauseCoreOn();
}
function rotatePauseOff() {
    rotatePause = false;
    pauseCoreOff();
}
function pauseCoreOn() {
    userInput.pauseIsOn = true;
    switch(gameState) {
        case "start":
            break;
        case "betting":
            break;
        case "dealing":
            break;
    }
}
function pauseCoreOff() {
    previousTime = new Date().getTime();
    userInput.pauseIsOn = false;
    switch(gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "help":
            initHelp();
            break;
        case "help":
            initMapScreen();
            break;
        case "map":
            initMapScreen();
            break;
        case "betting":
            updateBettingEvent();
            break;
        case "dealing":
            updateDealingEvent();
            break;
    }
}
window.gameLangs = ['en'];

SG=SG_Hooks;


