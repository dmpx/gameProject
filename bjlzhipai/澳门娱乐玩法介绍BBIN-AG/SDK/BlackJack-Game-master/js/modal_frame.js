/**
 * Created by Les Wang on 2016/4/10.
 */
var Modal = {
    // 简单动画实现
    fadeIn: function (e, time, callback) {
        if (typeof e == "string") {
            e = document.getElementById(e);
        }
        if (!time) {
            time = 500;
        }
        e.style.opacity = 0;
        var ease = Math.sqrt;  // 非线性函数，实现动画变换由快到慢
        var start = (new Date()).getTime();
        animate();
        function animate() {
            var elapsed = (new Date()).getTime() - start;  // 记录当前动画已执行多少时间
            var fraction = elapsed / time;  // 当前已执行时间与总时间比例，用以判别动画过程
            e.style.display = "block";
            if (fraction < 1) {
                var opacity = ease(fraction);
                e.style.opacity = String(opacity);
                setTimeout(animate, Math.min(25, time-elapsed));
            }
            else {
                e.style.opacity = 1;
                if (callback) {  // 若有回调函数，执行回调函数
                    callback(e);
                }
            }
        }
    },
    fadeOut: function (e, time, callback) {
        if (typeof e === "string") {
            e = document.getElementById(e);
        }
        if (!time) {
            time = 500;
        }
        var ease = Math.sqrt;
        var start = (new Date()).getTime();
        animate();
        function animate() {
            var elapsed = (new Date()).getTime() - start;
            var fraction = elapsed / time;
            if (fraction < 1) {
                var opacity = 1 - ease(fraction);
                e.style.opacity = String(opacity);
                setTimeout(animate, Math.min(25, time-elapsed));
            }
            else {
                e.style.opacity = 0;
                e.style.display = "none";
                if (callback) {
                    callback(e);
                }
            }
        }
    },
    slideIn: function (e, time, oncomplete) {
        if (typeof e == "string") {
            e = document.getElementById(e);
        }
        if (!time) {
            time = 500;
        }
        e.style.display = "block";
        var start = (new Date()).getTime();
        var curSize = e.getBoundingClientRect();
        var curHeight = curSize.top - curSize.bottom;  // 是一个负值
        animate();
        function animate() {
            var elapsed = (new Date()).getTime() - start;
            var fraction = elapsed / time;
            if (fraction < 1) {
                e.style.top = String((1 - fraction) * curHeight) + "px";
                setTimeout(animate, Math.min(25, time-elapsed));
            }
            else {
                e.style.top = "0px";
                if (oncomplete) {
                    oncomplete(e);
                }
            }
        }
    },
    slideOut: function (e, time, oncomplete) {
        if (typeof e == "string") {
            e = document.getElementById(e);
        }
        if (!time) {
            time = 500;
        }
        var ease = Math.sqrt;
        var start = (new Date()).getTime();
        var curSize = e.getBoundingClientRect();
        var curHeight = curSize.top - curSize.bottom;  // 是一个负值
        animate();
        function animate() {
            var elapsed = (new Date()).getTime() - start;
            var fraction = elapsed / time;
            if (fraction < 1) {
                e.style.top = String(ease(fraction) * curHeight) + "px";
                setTimeout(animate, Math.min(25, time-elapsed));
            }
            else {
                e.style.top = String(curHeight) + "px";
                e.style.display = "none";
                if (oncomplete) {
                    oncomplete(e);
                }
            }
        }
    },
    getViewportSize: function (w) {
        w = w || window;
        if (w.innerWidth != null) {
            return {
                w: w.innerWidth,
                h: w.innerHeight
            };
        }
        var d = w.document;
        if (document.compatMode == "CSS1Compat") {
            return {
                w: d.documentElement.clientWidth,
                h: d.documentElement.clientHeight
            };
        }
        return {
            w: d.body.clientWidth,
            h: d.body.clientHeight
        }
    },
    getScrollOffsets: function (w) {
        w = w || window;
        if (w.pageXOffset != null) {
            return {
                w: w.pageXOffset,
                h: w.pageYOffset
            }
        }
        var d = w.document;
        if (document.compatMode == "CSS1Compat") {
            return {
                w: d.documentElement.scrollLeft,
                h: d.documentElement.scrollTop
            };
        }
        return {
            w: d.body.scrollLeft,
            h: d.body.scrollTop
        };
    }
};