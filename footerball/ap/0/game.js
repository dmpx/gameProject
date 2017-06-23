var _STRINGS = {
   
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        MaxGoal: 3,
        Data: {
            Buttons: {
                play: {
                    sheet: {
                        x: 154,
                        y: 59
                    },
                    size: {
                        x: 154,
                        y: 59
                    },
                    offset: {
                        x: 0,
                        y: 0
                    },
                    shadow: !0
                },
                instruction: {
                    sheet: {
                        x: 154,
                        y: 59
                    },
                    size: {
                        x: 154,
                        y: 59
                    },
                    offset: {
                        x: 0,
                        y: 0
                    },
                    shadow: !0
                },
                settings: {
                    sheet: {
                        x: 154,
                        y: 59
                    },
                    size: {
                        x: 154,
                        y: 59
                    },
                    offset: {
                        x: 0,
                        y: 0
                    },
                    shadow: !0
                },
                "more-games": {
                    sheet: {
                        x: 154,
                        y: 59
                    },
                    size: {
                        x: 154,
                        y: 59
                    },
                    offset: {
                        x: 0,
                        y: 0
                    },
                    shadow: !0
                },
                close: {
                    sheet: {
                        x: 57,
                        y: 57
                    },
                    size: {
                        x: 50,
                        y: 50
                    },
                    offset: {
                        x: 4,
                        y: 0
                    },
                    shadow: !1
                },
                confirm: {
                    sheet: {
                        x: 57,
                        y: 57
                    },
                    size: {
                        x: 50,
                        y: 50
                    },
                    offset: {
                        x: 4,
                        y: 0
                    },
                    shadow: !1
                },
                ok: {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                menu: {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                replay: {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                "play-settings": {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                "play-menu": {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                next: {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                },
                prev: {
                    sheet: {
                        x: 65,
                        y: 65
                    },
                    size: {
                        x: 56,
                        y: 56
                    },
                    offset: {
                        x: 4,
                        y: 1
                    },
                    shadow: !1
                }
            }
        }
    },
    Menu: {},
    Play: {
        Names: {
            Male: "Randall Brett Sandy Royal Floyd Matt Seth Arlen Jackie Randolph".split(" "),
            Female: "Ka Sigrid Loyce Luanna Shakira Caterina Deane Felisa Reginia Prudence".split(" ")
        },
        Teams: "ar au ba be br ch ci cl cm co cr de ec er fr gb gh gr hn hr ir it jp kr mx ng nl pt ru sp us uy".split(" "),
        TeamNames: "Argentina;Australia;Bosnia;Belgium;Brazil;Switzerland;Cote D'ivoire;Chile;Cameroon;Colombia;Costa Rica;Germany;Ecuador;Algeria;France;England;Ghana;Greece;Honduras;Croatia;Iran;Italy;Japan;South Korea;Mexico;Nigeria;Netherlands;Portugal;Russia;Spain;U.S.A.;Uruguay".split(";"),
        Formations: {
            "0": [{
                x: 375,
                y: 235
            }, {
                x: 375,
                y: 339
            }, {
                x: 271,
                y: 183
            }, {
                x: 271,
                y: 391
            }, {
                x: 167,
                y: 287
            }],
            1: [{
                x: 375,
                y: 287
            }, {
                x: 271,
                y: 157
            }, {
                x: 271,
                y: 417
            }, {
                x: 167,
                y: 235
            }, {
                x: 167,
                y: 339
            }],
            2: [{
                x: 375,
                y: 287
            }, {
                x: 297,
                y: 209
            }, {
                x: 297,
                y: 365
            }, {
                x: 193,
                y: 157
            }, {
                x: 193,
                y: 417
            }],
            3: [{
                x: 375,
                y: 157
            }, {
                x: 375,
                y: 417
            }, {
                x: 271,
                y: 209
            }, {
                x: 271,
                y: 365
            }, {
                x: 193,
                y: 287
            }],
            4: [{
                x: 375,
                y: 287
            }, {
                x: 271,
                y: 157
            }, {
                x: 271,
                y: 287
            }, {
                x: 271,
                y: 417
            }, {
                x: 167,
                y: 287
            }]
        },
        Goal: "GOAL",
        OwnGoal: "OWN GOAL",
        Foul: "FOUL"
    },
    Confirm: {
        Quit: ["Abandon Game And", "Go Back to Main Menu?"]
    },
    Instructions: {
        One: ["Pull And Release to Shoot"],
        Two: ["Score #{MaxGoal} Goals to Win"],
        Three: ["If the ball does not leave", "a corner for 5 consecutive turns,", "the positions will be reset."]
    },
    Settings: {
        BGM: "BGM",
        SFX: "SFX"
    },
    Result: {
        Score: "SCORE"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {

};
var MobileAdInGameHeader = {
   
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
   
};
(function(b, c) {
    function d(b, t, v) {
        if (v === c && 1 === b.nodeType)
            if (v = "data-" + t.replace(qc, "-$1").toLowerCase(), v = b.getAttribute(v), "string" == typeof v) {
                try {
                    v = "true" === v ? !0 : "false" === v ? !1 : "null" === v ? null : +v + "" === v ? +v : rc.test(v) ? f.parseJSON(v) : v
                } catch (d) {}
                f.data(b, t, v)
            } else v = c;
        return v
    }

    function e(b) {
        for (var c in b)
            if (!("data" === c && f.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function l() {
        return !0
    }

    function p(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function q(b, c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function j(b, c, v) {
        c = c || 0;
        if (f.isFunction(c)) return f.grep(b, function(b, y) {
            return !!c.call(b, y, b) === v
        });
        if (c.nodeType) return f.grep(b, function(b) {
            return b === c === v
        });
        if ("string" == typeof c) {
            var d = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (tc.test(c)) return f.filter(c, d, !v);
            c = f.filter(c, d)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, c) === v
        })
    }

    function m(b) {
        var c = sb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function n(b, c) {
        if (1 === c.nodeType && f.hasData(b)) {
            var v, d, j;
            d = f._data(b);
            var e = f._data(c, d),
                u = d.events;
            if (u)
                for (v in delete e.handle, e.events = {}, u) {
                    d = 0;
                    for (j = u[v].length; d < j; d++) f.event.add(c, v, u[v][d])
                }
            e.data && (e.data = f.extend({}, e.data))
        }
    }

    function r(b, c) {
        var v;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), v = c.nodeName.toLowerCase(), "object" === v ? (c.parentNode && (c.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(c.innerHTML) && (c.innerHTML = b.innerHTML)) : "input" === v && tb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === v ? c.selected = b.defaultSelected : "input" === v || "textarea" === v ? c.defaultValue = b.defaultValue : "script" === v && c.text !== b.text && (c.text = b.text), c.removeAttribute(f.expando))
    }

    function s(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function x(b) {
        tb.test(b.type) && (b.defaultChecked = b.checked)
    }

    function A(b, c) {
        if (c in b) return c;
        for (var v = c.charAt(0).toUpperCase() + c.slice(1), d = c, f = ub.length; f--;)
            if (c = ub[f] + v, c in b) return c;
        return d
    }

    function C(b, c) {
        return b = c || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function F(b, c) {
        for (var v, d, j = [], e = 0, u = b.length; e < u; e++) v = b[e], v.style && (j[e] = f._data(v, "olddisplay"), c ? (!j[e] && "none" === v.style.display && (v.style.display = ""), "" === v.style.display && C(v) && (j[e] = f._data(v, "olddisplay", ca(v.nodeName)))) : (d = N(v, "display"), !j[e] && "none" !== d && f._data(v, "olddisplay", d)));
        for (e = 0; e < u; e++)
            if (v = b[e], v.style && (!c || "none" === v.style.display || "" === v.style.display)) v.style.display = c ? j[e] || "" : "none";
        return b
    }

    function B(b, c, v) {
        return (b = uc.exec(c)) ? Math.max(0, b[1] - (v || 0)) + (b[2] || "px") : c
    }

    function D(b, c, v, d) {
        c = v === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var j = 0; 4 > c; c += 2) "margin" === v && (j += f.css(b, v + da[c], !0)), d ? ("content" === v && (j -= parseFloat(N(b, "padding" + da[c])) || 0), "margin" !== v && (j -= parseFloat(N(b, "border" + da[c] + "Width")) || 0)) : (j += parseFloat(N(b, "padding" + da[c])) || 0, "padding" !== v && (j += parseFloat(N(b, "border" + da[c] + "Width")) || 0));
        return j
    }

    function Y(b, c, v) {
        var d = "width" === c ? b.offsetWidth : b.offsetHeight,
            j = !0,
            e = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = N(b, c);
            if (0 > d || null == d) d = b.style[c];
            if (va.test(d)) return d;
            j = e && (f.support.boxSizingReliable || d === b.style[c]);
            d = parseFloat(d) || 0
        }
        return d + D(b, c, v || (e ? "border" : "content"), j) + "px"
    }

    function ca(b) {
        if (Ua[b]) return Ua[b];
        var c = f("<" + b + ">").appendTo(z.body),
            v = c.css("display");
        c.remove();
        if ("none" === v || "" === v) {
            ka = z.body.appendChild(ka || f.extend(z.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
            c = la.body.appendChild(la.createElement(b));
            v = N(c, "display");
            z.body.removeChild(ka)
        }
        return Ua[b] = v, v
    }

    function G(b, c, v, d) {
        var j;
        if (f.isArray(c)) f.each(c, function(c, t) {
            v || vc.test(b) ? d(b, t) : G(b + "[" + ("object" == typeof t ? c : "") + "]", t, v, d)
        });
        else if (!v && "object" === f.type(c))
            for (j in c) G(b + "[" + j + "]", c[j], v, d);
        else d(b, c)
    }

    function vb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var j, e, g = c.toLowerCase().split(ea),
                u = 0,
                m = g.length;
            if (f.isFunction(d))
                for (; u < m; u++) j = g[u], (e = /^\+/.test(j)) && (j = j.substr(1) || "*"), j = b[j] = b[j] || [], j[e ? "unshift" : "push"](d)
        }
    }

    function wa(b, t, d, f, j, e) {
        j = j || t.dataTypes[0];
        e = e || {};
        e[j] = !0;
        var u;
        j = b[j];
        for (var g = 0, m = j ? j.length : 0, n = b === Va; g < m && (n || !u); g++) u = j[g](t, d, f), "string" == typeof u && (!n || e[u] ? u = c : (t.dataTypes.unshift(u), u = wa(b, t, d, f, u, e)));
        return (n || !u) && !e["*"] && (u = wa(b, t, d, f, "*", e)), u
    }

    function wb(b, t) {
        var d, j, e = f.ajaxSettings.flatOptions || {};
        for (d in t) t[d] !== c && ((e[d] ? b : j || (j = {}))[d] = t[d]);
        j && f.extend(!0, b, j)
    }

    function xb() {
        try {
            return new b.XMLHttpRequest
        } catch (y) {}
    }

    function yb() {
        return setTimeout(function() {
            xa = c
        }, 0), xa = f.now()
    }

    function zb(b, c, d) {
        var j, e = 0,
            g = ya.length,
            u = f.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                for (var c = xa || yb(), c = Math.max(0, n.startTime + n.duration - c), t = 1 - (c / n.duration || 0), d = 0, v = n.tweens.length; d < v; d++) n.tweens[d].run(t);
                return u.notifyWith(b, [n, t, c]), 1 > t && v ? c : (u.resolveWith(b, [n]), !1)
            },
            n = u.promise({
                elem: b,
                props: f.extend({}, c),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: xa || yb(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, t) {
                    var d = f.Tween(b, n.opts, c, t, n.opts.specialEasing[c] || n.opts.easing);
                    return n.tweens.push(d), d
                },
                stop: function(c) {
                    for (var t = 0, d = c ? n.tweens.length : 0; t < d; t++) n.tweens[t].run(1);
                    return c ? u.resolveWith(b, [n, c]) : u.rejectWith(b, [n, c]), this
                }
            });
        c = n.props;
        d = n.opts.specialEasing;
        var l, r, s, q;
        for (j in c)
            if (l = f.camelCase(j), r = d[l], s = c[j], f.isArray(s) && (r = s[1], s = c[j] = s[0]), j !== l && (c[l] = s, delete c[j]), (q = f.cssHooks[l]) && "expand" in q)
                for (j in s = q.expand(s), delete c[l], s) j in c || (c[j] = s[j], d[j] = r);
            else d[l] = r;
        for (; e < g; e++)
            if (j = ya[e].call(n, b, c, n.opts)) return j;
        var p = n;
        f.each(c, function(b, y) {
            for (var c = (qa[b] || []).concat(qa["*"]), t = 0, d = c.length; t < d && !c[t].call(p, b, y); t++);
        });
        return f.isFunction(n.opts.start) && n.opts.start.call(b, n), f.fx.timer(f.extend(m, {
            anim: n,
            queue: n.opts.queue,
            elem: b
        })), n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    }

    function O(b, c, d, f, j) {
        return new O.prototype.init(b, c, d, f, j)
    }

    function za(b, c) {
        var d, f = {
                height: b
            },
            j = 0;
        for (c = c ? 1 : 0; 4 > j; j += 2 - c) d = da[j], f["margin" + d] = f["padding" + d] = b;
        return c && (f.opacity = f.width = b), f
    }

    function Ab(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Bb, Aa, z = b.document,
        xc = b.location,
        yc = b.navigator,
        zc = b.jQuery,
        Ac = b.$,
        Cb = Array.prototype.push,
        X = Array.prototype.slice,
        Db = Array.prototype.indexOf,
        Bc = Object.prototype.toString,
        Wa = Object.prototype.hasOwnProperty,
        Xa = String.prototype.trim,
        f = function(b, c) {
            return new f.fn.init(b, c, Bb)
        },
        Ba = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Cc = /\S/,
        ea = /\s+/,
        Dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Ec = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Fc = /^[\],:{}\s]*$/,
        Gc = /(?:^|:|,)(?:\s*\[)+/g,
        Hc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Ic = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Jc = /^-ms-/,
        Kc = /-([\da-z])/gi,
        Lc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Ca = function() {
            z.addEventListener ? (z.removeEventListener("DOMContentLoaded", Ca, !1), f.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", Ca), f.ready())
        },
        Fb = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, t, d) {
            var j, e;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? j = [null, b, null] : j = Ec.exec(b);
                if (j && (j[1] || !t)) {
                    if (j[1]) return t = t instanceof f ? t[0] : t, e = t && t.nodeType ? t.ownerDocument || t : z, b = f.parseHTML(j[1], e, !0), Eb.test(j[1]) && f.isPlainObject(t) && this.attr.call(b, t, !0), f.merge(this, b);
                    if ((t = z.getElementById(j[2])) && t.parentNode) {
                        if (t.id !== j[2]) return d.find(b);
                        this.length = 1;
                        this[0] = t
                    }
                    return this.context = z, this.selector = b, this
                }
                return !t || t.jquery ? (t || d).find(b) : this.constructor(t).find(b)
            }
            return f.isFunction(b) ? d.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return X.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, d) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + d : c && (b.selector = this.selector + "." + c + "(" + d + ")"), b
        },
        each: function(b, c) {
            return f.each(this, b, c)
        },
        ready: function(b) {
            return f.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Cb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, t, d, j, e, g, u = arguments[0] || {},
            m = 1,
            n = arguments.length,
            l = !1;
        "boolean" == typeof u && (l = u, u = arguments[1] || {}, m = 2);
        "object" != typeof u && !f.isFunction(u) && (u = {});
        for (n === m && (u = this, --m); m < n; m++)
            if (null != (b = arguments[m]))
                for (t in b) d = u[t], j = b[t], u !== j && (l && j && (f.isPlainObject(j) || (e = f.isArray(j))) ? (e ? (e = !1, g = d && f.isArray(d) ? d : []) : g = d && f.isPlainObject(d) ? d : {}, u[t] = f.extend(l, g, j)) : j !== c && (u[t] = j));
        return u
    };
    f.extend({
        noConflict: function(y) {
            return b.$ === f && (b.$ = Ac), y && b.jQuery === f && (b.jQuery = zc), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!z.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Aa.resolveWith(z, [f]), f.fn.trigger && f(z).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Fb[Bc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !Wa.call(b, "constructor") && !Wa.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            for (var d in b);
            return d === c || Wa.call(b, d)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, d) {
            var j;
            return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c, c = 0), c = c || z, (j = Eb.exec(b)) ? [c.createElement(j[1])] : (j = f.buildFragment([b], c, d ? null : []), f.merge([], (j.cacheable ? f.clone(j.fragment) : j.fragment).childNodes)))
        },
        parseJSON: function(c) {
            if (!c || "string" != typeof c) return null;
            c = f.trim(c);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
            if (Fc.test(c.replace(Hc, "@").replace(Ic, "]").replace(Gc, ""))) return (new Function("return " + c))();
            f.error("Invalid JSON: " + c)
        },
        parseXML: function(y) {
            var t, d;
            if (!y || "string" != typeof y) return null;
            try {
                b.DOMParser ? (d = new DOMParser, t = d.parseFromString(y, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(y))
            } catch (j) {
                t = c
            }
            return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + y), t
        },
        noop: function() {},
        globalEval: function(c) {
            c && Cc.test(c) && (b.execScript || function(c) {
                b.eval.call(b, c)
            })(c)
        },
        camelCase: function(b) {
            return b.replace(Jc, "ms-").replace(Kc, Lc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, t, d) {
            var j, e = 0,
                g = b.length,
                u = g === c || f.isFunction(b);
            if (d)
                if (u)
                    for (j in b) {
                        if (!1 === t.apply(b[j], d)) break
                    } else
                        for (; e < g && !1 !== t.apply(b[e++], d););
                else if (u)
                for (j in b) {
                    if (!1 === t.call(b[j], j, b[j])) break
                } else
                    for (; e < g && !1 !== t.call(b[e], e, b[e++]););
            return b
        },
        trim: Xa && !Xa.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : Xa.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Dc, "")
        },
        makeArray: function(b, c) {
            var d, j = c || [];
            return null != b && (d = f.type(b), null == b.length || "string" === d || "function" === d || "regexp" === d || f.isWindow(b) ? Cb.call(j, b) : f.merge(j, b)), j
        },
        inArray: function(b, c, d) {
            var f;
            if (c) {
                if (Db) return Db.call(c, b, d);
                f = c.length;
                for (d = d ? 0 > d ? Math.max(0, f + d) : d : 0; d < f; d++)
                    if (d in c && c[d] === b) return d
            }
            return -1
        },
        merge: function(b, t) {
            var d = t.length,
                f = b.length,
                j = 0;
            if ("number" == typeof d)
                for (; j < d; j++) b[f++] = t[j];
            else
                for (; t[j] !== c;) b[f++] = t[j++];
            return b.length = f, b
        },
        grep: function(b, c, d) {
            var f, j = [],
                e = 0,
                g = b.length;
            for (d = !!d; e < g; e++) f = !!c(b[e], e), d !== f && j.push(b[e]);
            return j
        },
        map: function(b, t, d) {
            var j, e, g = [],
                u = 0,
                m = b.length;
            if (b instanceof f || m !== c && "number" == typeof m && (0 < m && b[0] && b[m - 1] || 0 === m || f.isArray(b)))
                for (; u < m; u++) j = t(b[u], u, d), null != j && (g[g.length] = j);
            else
                for (e in b) j = t(b[e], e, d), null != j && (g[g.length] = j);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(b, t) {
            var d, j, e;
            return "string" == typeof t && (d = b[t], t = b, b = d), f.isFunction(b) ? (j = X.call(arguments, 2), e = function() {
                return b.apply(t, j.concat(X.call(arguments)))
            }, e.guid = b.guid = b.guid || f.guid++, e) : c
        },
        access: function(b, t, d, j, e, g, u) {
            var m, n = null == d,
                l = 0,
                r = b.length;
            if (d && "object" == typeof d) {
                for (l in d) f.access(b, t, l, d[l], 1, g, j);
                e = 1
            } else if (j !== c) {
                m = u === c && f.isFunction(j);
                n && (m ? (m = t, t = function(b, c, y) {
                    return m.call(f(b), y)
                }) : (t.call(b, j), t = null));
                if (t)
                    for (; l < r; l++) t(b[l], d, m ? j.call(b[l], l, t(b[l], d)) : j, u);
                e = 1
            }
            return e ? b : n ? t.call(b) : r ? t(b[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(c) {
        if (!Aa)
            if (Aa = f.Deferred(), "complete" === z.readyState) setTimeout(f.ready, 1);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", Ca, !1), b.addEventListener("load", f.ready, !1);
        else {
            z.attachEvent("onreadystatechange", Ca);
            b.attachEvent("onload", f.ready);
            var t = !1;
            try {
                t = null == b.frameElement && z.documentElement
            } catch (d) {}
            t && t.doScroll && function sc() {
                if (!f.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (b) {
                        return setTimeout(sc, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Aa.promise(c)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Fb["[object " + c + "]"] = c.toLowerCase()
    });
    Bb = f(z);
    var Gb = {};
    f.Callbacks = function(b) {
        var t;
        if ("string" == typeof b) {
            if (!(t = Gb[b])) {
                t = b;
                var d = Gb[t] = {};
                t = (f.each(t.split(ea), function(b, c) {
                    d[c] = !0
                }), d)
            }
        } else t = f.extend({}, b);
        b = t;
        var j, e, g, u, m, n, l = [],
            r = !b.once && [],
            s = function(c) {
                j = b.memory && c;
                e = !0;
                n = u || 0;
                u = 0;
                m = l.length;
                for (g = !0; l && n < m; n++)
                    if (!1 === l[n].apply(c[0], c[1]) && b.stopOnFalse) {
                        j = !1;
                        break
                    }
                g = !1;
                l && (r ? r.length && s(r.shift()) : j ? l = [] : q.disable())
            },
            q = {
                add: function() {
                    if (l) {
                        var c = l.length;
                        (function wc(c) {
                            f.each(c, function(c, t) {
                                var d = f.type(t);
                                "function" === d && (!b.unique || !q.has(t)) ? l.push(t) : t && t.length && "string" !== d && wc(t)
                            })
                        })(arguments);
                        g ? m = l.length : j && (u = c, s(j))
                    }
                    return this
                },
                remove: function() {
                    return l && f.each(arguments, function(b, c) {
                        for (var y; - 1 < (y = f.inArray(c, l, y));) l.splice(y, 1), g && (y <= m && m--, y <= n && n--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, l)
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = r = j = c, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return r = c, j || q.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(b, c) {
                    return c = c || [], c = [b, c.slice ? c.slice() : c], l && (!e || r) && (g ? r.push(c) : s(c)), this
                },
                fire: function() {
                    return q.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return q
    };
    f.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                d = "pending",
                j = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(y) {
                            f.each(c, function(c, t) {
                                var d = t[0],
                                    j = b[c];
                                e[t[1]](f.isFunction(j) ? function() {
                                    var b = j.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(y.resolve).fail(y.reject).progress(y.notify) : y[d + "With"](this === e ? y : this, [b])
                                } : y[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, j) : j
                    }
                },
                e = {};
            return j.pipe = j.then, f.each(c, function(b, y) {
                var f = y[2],
                    g = y[3];
                j[y[1]] = f.add;
                g && f.add(function() {
                    d = g
                }, c[b ^ 1][2].disable, c[2][2].lock);
                e[y[0]] = f.fire;
                e[y[0] + "With"] = f.fireWith
            }), j.promise(e), b && b.call(e, e), e
        },
        when: function(b) {
            var c = 0,
                d = X.call(arguments),
                j = d.length,
                e = 1 !== j || b && f.isFunction(b.promise) ? j : 0,
                g = 1 === e ? b : f.Deferred(),
                u = function(b, c, y) {
                    return function(t) {
                        c[b] = this;
                        y[b] = 1 < arguments.length ? X.call(arguments) : t;
                        y === m ? g.notifyWith(c, y) : --e || g.resolveWith(c, y)
                    }
                },
                m, n, l;
            if (1 < j) {
                m = Array(j);
                n = Array(j);
                for (l = Array(j); c < j; c++) d[c] && f.isFunction(d[c].promise) ? d[c].promise().done(u(c, l, d)).fail(g.reject).progress(u(c, n, m)) : --e
            }
            return e || g.resolveWith(l, d), g.promise()
        }
    });
    var Mc = f,
        Ya, L, Da, fa, Ea, Fa, Q, ga, Ga, Za, ra, Hb, I = z.createElement("div");
    I.setAttribute("className", "t");
    I.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Da = I.getElementsByTagName("*");
    fa = I.getElementsByTagName("a")[0];
    fa.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Da || !Da.length) Ya = {};
    else {
        Ea = z.createElement("select");
        Fa = Ea.appendChild(z.createElement("option"));
        Q = I.getElementsByTagName("input")[0];
        L = {
            leadingWhitespace: 3 === I.firstChild.nodeType,
            tbody: !I.getElementsByTagName("tbody").length,
            htmlSerialize: !!I.getElementsByTagName("link").length,
            style: /top/.test(fa.getAttribute("style")),
            hrefNormalized: "/a" === fa.getAttribute("href"),
            opacity: /^0.5/.test(fa.style.opacity),
            cssFloat: !!fa.style.cssFloat,
            checkOn: "on" === Q.value,
            optSelected: Fa.selected,
            getSetAttribute: "t" !== I.className,
            enctype: !!z.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === z.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        Q.checked = !0;
        L.noCloneChecked = Q.cloneNode(!0).checked;
        Ea.disabled = !0;
        L.optDisabled = !Fa.disabled;
        try {
            delete I.test
        } catch (Od) {
            L.deleteExpando = !1
        }!I.addEventListener && I.attachEvent && I.fireEvent && (I.attachEvent("onclick", Hb = function() {
            L.noCloneEvent = !1
        }), I.cloneNode(!0).fireEvent("onclick"), I.detachEvent("onclick", Hb));
        Q = z.createElement("input");
        Q.value = "t";
        Q.setAttribute("type", "radio");
        L.radioValue = "t" === Q.value;
        Q.setAttribute("checked", "checked");
        Q.setAttribute("name", "t");
        I.appendChild(Q);
        ga = z.createDocumentFragment();
        ga.appendChild(I.lastChild);
        L.checkClone = ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
        L.appendChecked = Q.checked;
        ga.removeChild(Q);
        ga.appendChild(I);
        if (I.attachEvent)
            for (Za in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ga = "on" + Za, (ra = Ga in I) || (I.setAttribute(Ga, "return;"), ra = "function" == typeof I[Ga]), L[Za + "Bubbles"] = ra;
        Ya = (f(function() {
            var c, t, d, j, f = z.getElementsByTagName("body")[0];
            f && (c = z.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(c, f.firstChild), t = z.createElement("div"), c.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = t.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", ra = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", L.reliableHiddenOffsets = ra && 0 === d[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", L.boxSizing = 4 === t.offsetWidth, L.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (L.pixelPosition = "1%" !== (b.getComputedStyle(t, null) || {}).top, L.boxSizingReliable = "4px" === (b.getComputedStyle(t, null) || {
                width: "4px"
            }).width, j = z.createElement("div"), j.style.cssText = t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", j.style.marginRight = j.style.width = "0", t.style.width = "1px", t.appendChild(j), L.reliableMarginRight = !parseFloat((b.getComputedStyle(j, null) || {}).marginRight)), "undefined" != typeof t.style.zoom && (t.innerHTML = "", t.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", L.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", L.shrinkWrapBlocks = 3 !== t.offsetWidth, c.style.zoom = 1), f.removeChild(c))
        }), ga.removeChild(I), Da = fa = Ea = Fa = Q = ga = I = null, L)
    }
    Mc.support = Ya;
    var rc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, d, j, e) {
            if (f.acceptData(b)) {
                var g, m, u = f.expando,
                    n = "string" == typeof d,
                    l = b.nodeType,
                    r = l ? f.cache : b,
                    s = l ? b[u] : b[u] && u;
                if (s && r[s] && (e || r[s].data) || !(n && j === c)) {
                    s || (l ? b[u] = s = f.deletedIds.pop() || f.guid++ : s = u);
                    r[s] || (r[s] = {}, l || (r[s].toJSON = f.noop));
                    if ("object" == typeof d || "function" == typeof d) e ? r[s] = f.extend(r[s], d) : r[s].data = f.extend(r[s].data, d);
                    return g = r[s], e || (g.data || (g.data = {}), g = g.data), j !== c && (g[f.camelCase(d)] = j), n ? (m = g[d], null == m && (m = g[f.camelCase(d)])) : m = g, m
                }
            }
        },
        removeData: function(b, c, d) {
            if (f.acceptData(b)) {
                var j, g, m, u = b.nodeType,
                    n = u ? f.cache : b,
                    l = u ? b[f.expando] : f.expando;
                if (n[l]) {
                    if (c && (j = d ? n[l] : n[l].data)) {
                        f.isArray(c) || (c in j ? c = [c] : (c = f.camelCase(c), c in j ? c = [c] : c = c.split(" ")));
                        g = 0;
                        for (m = c.length; g < m; g++) delete j[c[g]];
                        if (!(d ? e : f.isEmptyObject)(j)) return
                    }
                    if (d || !(delete n[l].data, !e(n[l]))) u ? f.cleanData([b], !0) : f.support.deleteExpando || n != n.window ? delete n[l] : n[l] = null
                }
            }
        },
        _data: function(b, c, d) {
            return f.data(b, c, d, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    f.fn.extend({
        data: function(b, t) {
            var j, e, g, m, u, n = this[0],
                l = 0,
                r = null;
            if (b === c) {
                if (this.length && (r = f.data(n), 1 === n.nodeType && !f._data(n, "parsedAttrs"))) {
                    g = n.attributes;
                    for (u = g.length; l < u; l++) m = g[l].name, m.indexOf("data-") || (m = f.camelCase(m.substring(5)), d(n, m, r[m]));
                    f._data(n, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (j = b.split(".", 2), j[1] = j[1] ? "." + j[1] : "", e = j[1] + "!", f.access(this, function(t) {
                if (t === c) return r = this.triggerHandler("getData" + e, [j[0]]), r === c && n && (r = f.data(n, b), r = d(n, b, r)), r === c && j[1] ? this.data(j[0]) : r;
                j[1] = t;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + e, j);
                    f.data(this, b, t);
                    c.triggerHandler("changeData" +
                        e, j)
                })
            }, null, t, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, c, d) {
            var j;
            if (b) return c = (c || "fx") + "queue", j = f._data(b, c), d && (!j || f.isArray(d) ? j = f._data(b, c, f.makeArray(d)) : j.push(d)), j || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = f.queue(b, c),
                j = d.length,
                e = d.shift(),
                g = f._queueHooks(b, c),
                u = function() {
                    f.dequeue(b, c)
                };
            "inprogress" === e && (e = d.shift(), j--);
            e && ("fx" === c && d.unshift("inprogress"), delete g.stop, e.call(b, u, g));
            !j && g && g.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return f._data(b, d) || f._data(b, d, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, c + "queue", !0);
                    f.removeData(b, d, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, d) {
            var j = 2;
            return "string" != typeof b && (d = b, b = "fx", j--), arguments.length < j ? f.queue(this[0], b) : d === c ? this : this.each(function() {
                var c = f.queue(this, b, d);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = f.fx ? f.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var t = setTimeout(c, b);
                d.stop = function() {
                    clearTimeout(t)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, d) {
            var j, e = 1,
                g = f.Deferred(),
                m = this,
                u = this.length,
                n = function() {
                    --e || g.resolveWith(m, [m])
                };
            "string" != typeof b && (d = b, b = c);
            for (b = b || "fx"; u--;)(j = f._data(m[u], b + "queueHooks")) && j.empty && (e++, j.empty.add(n));
            return n(), g.promise(d)
        }
    });
    var Z, Ib, Jb, Kb = /[\t\r\n]/g,
        Nc = /\r/g,
        Oc = /^(?:button|input)$/i,
        Pc = /^(?:button|input|object|select|textarea)$/i,
        Qc = /^a(?:rea|)$/i,
        Lb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Mb = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, c) {
            return f.access(this, f.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return f.access(this, f.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] || b, this.each(function() {
                try {
                    this[b] = c, delete this[b]
                } catch (d) {}
            })
        },
        addClass: function(b) {
            var c, d, j, e, g, u, m;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(ea);
                d = 0;
                for (j = this.length; d < j; d++)
                    if (e = this[d], 1 === e.nodeType)
                        if (!e.className && 1 === c.length) e.className = b;
                        else {
                            g = " " + e.className + " ";
                            u = 0;
                            for (m = c.length; u < m; u++) 0 > g.indexOf(" " + c[u] + " ") && (g += c[u] + " ");
                            e.className = f.trim(g)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var d, j, e, g, m, u, n;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                d = (b || "").split(ea);
                u = 0;
                for (n = this.length; u < n; u++)
                    if (e = this[u], 1 === e.nodeType && e.className) {
                        j = (" " + e.className + " ").replace(Kb, " ");
                        g = 0;
                        for (m = d.length; g < m; g++)
                            for (; 0 <= j.indexOf(" " + d[g] + " ");) j = j.replace(" " + d[g] + " ", " ");
                        e.className = b ? f.trim(j) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                j = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) {
                f(this).toggleClass(b.call(this, d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var e, g = 0, u = f(this), m = c, n = b.split(ea); e = n[g++];) m = j ? m : !u.hasClass(e), u[m ? "addClass" : "removeClass"](e);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Kb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var d, j, e, g = this[0];
            if (arguments.length) return e = f.isFunction(b), this.each(function(j) {
                var v, g = f(this);
                if (1 === this.nodeType && (e ? v = b.call(this, j, g.val()) : v = b, null == v ? v = "" : "number" == typeof v ? v += "" : f.isArray(v) && (v = f.map(v, function(b) {
                    return null == b ? "" : b + ""
                })), d = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, v, "value") === c)) this.value = v
            });
            if (g) return d = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()], d && "get" in d && (j = d.get(g, "value")) !== c ? j : (j = g.value, "string" == typeof j ? j.replace(Nc, "") : null == j ? "" : j)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, j = b.selectedIndex,
                        e = [],
                        g = b.options,
                        m = "select-one" === b.type;
                    if (0 > j) return null;
                    b = m ? j : 0;
                    for (d = m ? j + 1 : g.length; b < d; b++)
                        if (c = g[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (m) return c;
                            e.push(c)
                        }
                    return m && !e.length && g.length ? f(g[j]).val() : e
                },
                set: function(b, c) {
                    var d = f.makeArray(c);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, j, e) {
            var g, m, u = b.nodeType;
            if (b && !(3 === u || 8 === u || 2 === u)) {
                if (e && f.isFunction(f.fn[d])) return f(b)[d](j);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, d, j);
                (e = 1 !== u || !f.isXMLDoc(b)) && (d = d.toLowerCase(), m = f.attrHooks[d] || (Lb.test(d) ? Ib : Z));
                if (j !== c) {
                    if (null === j) {
                        f.removeAttr(b, d);
                        return
                    }
                    return m && "set" in m && e && (g = m.set(b, j, d)) !== c ? g : (b.setAttribute(d, j + ""), j)
                }
                return m && "get" in m && e && null !== (g = m.get(b, d)) ? g : (g = b.getAttribute(d), null === g ? c : g)
            }
        },
        removeAttr: function(b, c) {
            var d, j, e, g, m = 0;
            if (c && 1 === b.nodeType)
                for (j = c.split(ea); m < j.length; m++)(e = j[m]) && (d = f.propFix[e] || e, g = Lb.test(e), g || f.attr(b, e, ""), b.removeAttribute(Mb ? e : d), g && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Oc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return Z && f.nodeName(b, "button") ? Z.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (Z && f.nodeName(b, "button")) return Z.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, j) {
            var e, g, m, u = b.nodeType;
            if (b && !(3 === u || 8 === u || 2 === u)) return m = 1 !== u || !f.isXMLDoc(b), m && (d = f.propFix[d] || d, g = f.propHooks[d]), j !== c ? g && "set" in g && (e = g.set(b, j, d)) !== c ? e : b[d] = j : g && "get" in g && null !== (e = g.get(b, d)) ? e : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Pc.test(b.nodeName) || Qc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Ib = {
        get: function(b, d) {
            var j, e = f.prop(b, d);
            return !0 === e || "boolean" != typeof e && (j = b.getAttributeNode(d)) && !1 !== j.nodeValue ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
            var j;
            return !1 === c ? f.removeAttr(b, d) : (j = f.propFix[d] || d, j in b && (b[j] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Mb || (Jb = {
        name: !0,
        id: !0,
        coords: !0
    }, Z = f.valHooks.button = {
        get: function(b, d) {
            var j;
            return j = b.getAttributeNode(d), j && (Jb[d] ? "" !== j.value : j.specified) ? j.value : c
        },
        set: function(b, c, d) {
            var j = b.getAttributeNode(d);
            return j || (j = z.createAttribute(d), b.setAttributeNode(j)), j.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, y) {
                if ("" === y) return b.setAttribute(c, "auto"), y
            }
        })
    }), f.attrHooks.contenteditable = {
        get: Z.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            Z.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, d) {
        f.attrHooks[d] = f.extend(f.attrHooks[d], {
            get: function(b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var $a = /^(?:textarea|input|select)$/i,
        Nb = /^([^\.]*|)(?:\.(.+)|)$/,
        Rc = /(?:^|\s)hover(\.\S+|)\b/,
        Sc = /^key/,
        Tc = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = function(b) {
            return f.event.special.hover ? b : b.replace(Rc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, d, j, e, g) {
            var m, u, n, l, r, s, q, p, x;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !j || !(m = f._data(b)))) {
                j.handler && (q = j, j = q.handler, g = q.selector);
                j.guid || (j.guid = f.guid++);
                (n = m.events) || (m.events = n = {});
                (u = m.handle) || (m.handle = u = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(u.elem, arguments) : c
                }, u.elem = b);
                d = f.trim(Pb(d)).split(" ");
                for (m = 0; m < d.length; m++) {
                    l = Nb.exec(d[m]) || [];
                    r = l[1];
                    s = (l[2] || "").split(".").sort();
                    x = f.event.special[r] || {};
                    r = (g ? x.delegateType : x.bindType) || r;
                    x = f.event.special[r] || {};
                    l = f.extend({
                        type: r,
                        origType: l[1],
                        data: e,
                        handler: j,
                        guid: j.guid,
                        selector: g,
                        needsContext: g && f.expr.match.needsContext.test(g),
                        namespace: s.join(".")
                    }, q);
                    p = n[r];
                    if (!p && (p = n[r] = [], p.delegateCount = 0, !x.setup || !1 === x.setup.call(b, e, s, u))) b.addEventListener ? b.addEventListener(r, u, !1) : b.attachEvent && b.attachEvent("on" + r, u);
                    x.add && (x.add.call(b, l), l.handler.guid || (l.handler.guid = j.guid));
                    g ? p.splice(p.delegateCount++, 0, l) : p.push(l);
                    f.event.global[r] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, j, e) {
            var g, m, n, l, r, s, q, p, x, A, z = f.hasData(b) && f._data(b);
            if (z && (q = z.events)) {
                c = f.trim(Pb(c || "")).split(" ");
                for (g = 0; g < c.length; g++)
                    if (m = Nb.exec(c[g]) || [], n = l = m[1], m = m[2], n) {
                        p = f.event.special[n] || {};
                        n = (j ? p.delegateType : p.bindType) || n;
                        x = q[n] || [];
                        r = x.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (s = 0; s < x.length; s++) A = x[s], (e || l === A.origType) && (!d || d.guid === A.guid) && (!m || m.test(A.namespace)) && (!j || j === A.selector || "**" === j && A.selector) && (x.splice(s--, 1), A.selector && x.delegateCount--, p.remove && p.remove.call(b, A));
                        0 === x.length && r !== x.length && ((!p.teardown || !1 === p.teardown.call(b, m, z.handle)) && f.removeEvent(b, n, z.handle), delete q[n])
                    } else
                        for (n in q) f.event.remove(b, n + c[g], d, j, !0);
                f.isEmptyObject(q) && (delete z.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(d, j, e, g) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var m, n, u, l, r, s, q, p = d.type || d;
                l = [];
                if (!Ob.test(p + f.event.triggered) && (0 <= p.indexOf("!") && (p = p.slice(0, -1), m = !0), 0 <= p.indexOf(".") && (l = p.split("."), p = l.shift(), l.sort()), e && !f.event.customEvent[p] || f.event.global[p]))
                    if (d = "object" == typeof d ? d[f.expando] ? d : new f.Event(p, d) : new f.Event(p), d.type = p, d.isTrigger = !0, d.exclusive = m, d.namespace = l.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0 > p.indexOf(":") ? "on" + p : "", e) {
                        if (d.result = c, d.target || (d.target = e), j = null != j ? f.makeArray(j) : [], j.unshift(d), r = f.event.special[p] || {}, !(r.trigger && !1 === r.trigger.apply(e, j))) {
                            q = [
                                [e, r.bindType || p]
                            ];
                            if (!g && !r.noBubble && !f.isWindow(e)) {
                                n = r.delegateType || p;
                                m = Ob.test(n + p) ? e : e.parentNode;
                                for (u = e; m; m = m.parentNode) q.push([m, n]), u = m;
                                u === (e.ownerDocument || z) && q.push([u.defaultView || u.parentWindow || b, n])
                            }
                            for (n = 0; n < q.length && !d.isPropagationStopped(); n++) m = q[n][0], d.type = q[n][1], (s = (f._data(m, "events") || {})[d.type] && f._data(m, "handle")) && s.apply(m, j), (s = l && m[l]) && f.acceptData(m) && s.apply && !1 === s.apply(m, j) && d.preventDefault();
                            return d.type = p, !g && !d.isDefaultPrevented() && (!r._default || !1 === r._default.apply(e.ownerDocument, j)) && ("click" !== p || !f.nodeName(e, "a")) && f.acceptData(e) && l && e[p] && ("focus" !== p && "blur" !== p || 0 !== d.target.offsetWidth) && !f.isWindow(e) && (u = e[l], u && (e[l] = null), f.event.triggered = p, e[p](), f.event.triggered = c, u && (e[l] = u)), d.result
                        }
                    } else
                        for (n in e = f.cache, e) e[n].events && e[n].events[p] && f.event.trigger(d, j, e[n].handle.elem, !0)
            }
        },
        dispatch: function(d) {
            d = f.event.fix(d || b.event);
            var j, e, g, m, n, u, l = (f._data(this, "events") || {})[d.type] || [],
                r = l.delegateCount,
                s = X.call(arguments),
                q = !d.exclusive && !d.namespace,
                p = f.event.special[d.type] || {},
                x = [];
            s[0] = d;
            d.delegateTarget = this;
            if (!(p.preDispatch && !1 === p.preDispatch.call(this, d))) {
                if (r && (!d.button || "click" !== d.type))
                    for (e = d.target; e != this; e = e.parentNode || this)
                        if (!0 !== e.disabled || "click" !== d.type) {
                            m = {};
                            n = [];
                            for (j = 0; j < r; j++) g = l[j], u = g.selector, m[u] === c && (m[u] = g.needsContext ? 0 <= f(u, this).index(e) : f.find(u, this, null, [e]).length), m[u] && n.push(g);
                            n.length && x.push({
                                elem: e,
                                matches: n
                            })
                        }
                l.length > r && x.push({
                    elem: this,
                    matches: l.slice(r)
                });
                for (j = 0; j < x.length && !d.isPropagationStopped(); j++) {
                    m = x[j];
                    d.currentTarget = m.elem;
                    for (e = 0; e < m.matches.length && !d.isImmediatePropagationStopped(); e++)
                        if (g = m.matches[e], q || !d.namespace && !g.namespace || d.namespace_re && d.namespace_re.test(g.namespace)) d.data = g.data, d.handleObj = g, g = ((f.event.special[g.origType] || {}).handle || g.handler).apply(m.elem, s), g !== c && (d.result = g, !1 === g && (d.preventDefault(), d.stopPropagation()))
                }
                return p.postDispatch && p.postDispatch.call(this, d), d.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var j, f, e, g = d.button,
                    m = d.fromElement;
                return null == b.pageX && null != d.clientX && (j = b.target.ownerDocument || z, f = j.documentElement, e = j.body, b.pageX = d.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft || e && e.clientLeft || 0), b.pageY = d.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)), !b.relatedTarget && m && (b.relatedTarget = m === b.target ? d.toElement : m), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, j = b,
                e = f.event.fixHooks[b.type] || {},
                g = e.props ? this.props.concat(e.props) : this.props;
            b = f.Event(j);
            for (c = g.length; c;) d = g[--c], b[d] = j[d];
            return b.target || (b.target = j.srcElement || z), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, e.filter ? e.filter(b, j) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, j) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            j ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle = f.event.dispatch;
    f.removeEvent = z.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? l : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(), this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = l;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = l;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, y = b.relatedTarget,
                    j = b.handleObj;
                if (!y || y !== this && !f.contains(this, y)) b.type = j.origType, d = j.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if ($a.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                $a.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !$a.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            j = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && z.addEventListener(b, j, !0)
            },
            teardown: function() {
                0 === --d && z.removeEventListener(b, j, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, d, j, e, m) {
            var n, u;
            if ("object" == typeof b) {
                "string" != typeof d && (j = j || d, d = c);
                for (u in b) this.on(u, d, j, b[u], m);
                return this
            }
            null == j && null == e ? (e = d, j = d = c) : null == e && ("string" == typeof d ? (e = j, j = c) : (e = j, j = d, d = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === m && (n = e, e = function(b) {
                return f().off(b), n.apply(this, arguments)
            }, e.guid = n.guid || (n.guid = f.guid++)), this.each(function() {
                f.event.add(this, b, e, j, d)
            })
        },
        one: function(b, c, d, j) {
            return this.on(b, c, d, j, 1)
        },
        off: function(b, d, j) {
            var e, m;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (m in b) this.off(m, d, b[m]);
                return this
            }
            if (!1 === d || "function" == typeof d) j = d, d = c;
            return !1 === j && (j = g), this.each(function() {
                f.event.remove(this, b, j, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, j) {
            return this.on(c, b, d, j)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || f.guid++,
                j = 0,
                e = function(d) {
                    var e = (f._data(this, "lastToggle" + b.guid) || 0) % j;
                    return f._data(this, "lastToggle" + b.guid, e + 1), d.preventDefault(), c[e].apply(this, arguments) || !1
                };
            for (e.guid = d; j < c.length;) c[j++].guid = d;
            return this.click(e)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        f.fn[c] = function(b, d) {
            return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        };
        Sc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
        Tc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
    });
    var Uc = b,
        H = function(b, c, d, j) {
            d = d || [];
            c = c || U;
            var f, e, g, m, n = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== n && 9 !== n) return [];
            g = Ha(c);
            if (!g && !j && (f = Vc.exec(b)))
                if (m = f[1])
                    if (9 === n) {
                        e = c.getElementById(m);
                        if (!e || !e.parentNode) return d;
                        if (e.id === m) return d.push(e), d
                    } else {
                        if (c.ownerDocument && (e = c.ownerDocument.getElementById(m)) && Qb(c, e) && e.id === m) return d.push(e), d
                    } else {
                if (f[2]) return ma.apply(d, na.call(c.getElementsByTagName(b), 0)), d;
                if ((m = f[3]) && Rb && c.getElementsByClassName) return ma.apply(d, na.call(c.getElementsByClassName(m), 0)), d
            }
            return ab(b.replace(Ia, "$1"), c, d, j, g)
        },
        sa = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Sb = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ha = function(b) {
            return V(function(c) {
                return c = +c, V(function(d, j) {
                    for (var f, e = b([], d.length, c), g = e.length; g--;) d[f = e[g]] && (d[f] = !(j[f] = d[f]))
                })
            })
        },
        Ja = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        La = function(b, c) {
            var d, j, f, e, g, m, n;
            if (g = Tb[J][b]) return c ? 0 : g.slice(0);
            g = b;
            m = [];
            for (n = K.preFilter; g;) {
                if (!d || (j = Wc.exec(g))) j && (g = g.slice(j[0].length)), m.push(f = []);
                d = !1;
                if (j = Xc.exec(g)) f.push(d = new Ub(j.shift())), g = g.slice(d.length), d.type = j[0].replace(Ia, " ");
                for (e in K.filter)(j = Ka[e].exec(g)) && (!n[e] || (j = n[e](j, U, !0))) && (f.push(d = new Ub(j.shift())), g = g.slice(d.length), d.type = e, d.matches = j);
                if (!d) break
            }
            return c ? g.length : g ? H.error(b) : Tb(b, m).slice(0)
        },
        cb = function(b, c, d) {
            var j = c.dir,
                f = d && "parentNode" === c.dir,
                e = Yc++;
            return c.first ? function(c, d, e) {
                for (; c = c[j];)
                    if (f || 1 === c.nodeType) return b(c, d, e)
            } : function(c, d, t) {
                if (t)
                    for (; c = c[j];) {
                        if ((f || 1 === c.nodeType) && b(c, d, t)) return c
                    } else
                        for (var g, m = ta + " " + e + " ", v = m + bb; c = c[j];)
                            if (f || 1 === c.nodeType) {
                                if ((g = c[J]) === v) return c.sizset;
                                if ("string" == typeof g && 0 === g.indexOf(m)) {
                                    if (c.sizset) return c
                                } else {
                                    c[J] = v;
                                    if (b(c, d, t)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        db = function(b) {
            return 1 < b.length ? function(c, d, j) {
                for (var f = b.length; f--;)
                    if (!b[f](c, d, j)) return !1;
                return !0
            } : b[0]
        },
        Ma = function(b, c, d, j, f) {
            for (var e, g = [], m = 0, n = b.length, l = null != c; m < n; m++)
                if (e = b[m])
                    if (!d || d(e, j, f)) g.push(e), l && c.push(m);
            return g
        },
        eb = function(b, c, d, j, f, e) {
            return j && !j[J] && (j = eb(j)), f && !f[J] && (f = eb(f, e)), V(function(e, g, m, n) {
                if (!e || !f) {
                    var l, r, s = [],
                        q = [],
                        p = g.length;
                    if (!(r = e)) {
                        r = c || "*";
                        var M = m.nodeType ? [m] : m,
                            x = [];
                        l = 0;
                        for (var A = M.length; l < A; l++) H(r, M[l], x, e);
                        r = x
                    }
                    M = b && (e || !c) ? Ma(r, s, b, m, n) : r;
                    x = d ? f || (e ? b : p || j) ? [] : g : M;
                    d && d(M, x, m, n);
                    if (j) {
                        r = Ma(x, q);
                        j(r, [], m, n);
                        for (m = r.length; m--;)
                            if (l = r[m]) x[q[m]] = !(M[q[m]] = l)
                    }
                    if (e)
                        for (m = b && x.length; m--;) {
                            if (l = x[m]) e[s[m]] = !(g[s[m]] = l)
                        } else x = Ma(x === g ? x.splice(p, x.length) : x), f ? f(null, g, x, n) : ma.apply(g, x)
                }
            })
        },
        fb = function(b) {
            var c, d, j, f = b.length,
                e = K.relative[b[0].type];
            d = e || K.relative[" "];
            for (var g = e ? 1 : 0, m = cb(function(b) {
                return b === c
            }, d, !0), n = cb(function(b) {
                return -1 < Vb.call(c, b)
            }, d, !0), l = [
                function(b, d, j) {
                    return !e && (j || d !== Na) || ((c = d).nodeType ? m(b, d, j) : n(b, d, j))
                }
            ]; g < f; g++)
                if (d = K.relative[b[g].type]) l = [cb(db(l), d)];
                else {
                    d = K.filter[b[g].type].apply(null, b[g].matches);
                    if (d[J]) {
                        for (j = ++g; j < f && !K.relative[b[j].type]; j++);
                        return eb(1 < g && db(l), 1 < g && b.slice(0, g - 1).join("").replace(Ia, "$1"), d, g < j && fb(b.slice(g, j)), j < f && fb(b = b.slice(j)), j < f && b.join(""))
                    }
                    l.push(d)
                }
            return db(l)
        },
        ab = function(b, c, d, j, f) {
            var e, g, m, n, l = La(b);
            if (!j && 1 === l.length) {
                g = l[0] = l[0].slice(0);
                if (2 < g.length && "ID" === (m = g[0]).type && 9 === c.nodeType && !f && K.relative[g[1].type]) {
                    c = K.find.ID(m.matches[0].replace(ia, ""), c, f)[0];
                    if (!c) return d;
                    b = b.slice(g.shift().length)
                }
                for (e = Ka.POS.test(b) ? -1 : g.length - 1; 0 <= e; e--) {
                    m = g[e];
                    if (K.relative[n = m.type]) break;
                    if (n = K.find[n])
                        if (j = n(m.matches[0].replace(ia, ""), gb.test(g[0].type) && c.parentNode || c, f)) {
                            g.splice(e, 1);
                            b = j.length && g.join("");
                            if (!b) return ma.apply(d, na.call(j, 0)), d;
                            break
                        }
                }
            }
            return hb(b, l)(j, c, f, d, gb.test(b)), d
        },
        Wb = function() {},
        bb, ib, K, Oa, Ha, Qb, hb, jb, ua, Na, Xb = !0,
        J = ("sizcache" + Math.random()).replace(".", ""),
        Ub = String,
        U = Uc.document,
        T = U.documentElement,
        ta = 0,
        Yc = 0,
        Zc = [].pop,
        ma = [].push,
        na = [].slice,
        Vb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        V = function(b, c) {
            return b[J] = null == c || c, b
        },
        kb = function() {
            var b = {},
                c = [];
            return V(function(d, j) {
                return c.push(d) > K.cacheLength && delete b[c.shift()], b[d] = j
            }, b)
        },
        Yb = kb(),
        Tb = kb(),
        Zb = kb(),
        $b = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        lb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + $b + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Wc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Xc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        $c = RegExp(lb),
        Vc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        gb = /[\x20\t\r\n\f]*[+~]/,
        ad = /h\d/i,
        bd = /input|select|textarea|button/i,
        ia = /\\(?!\\)/g,
        Ka = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $b),
            PSEUDO: RegExp("^" + lb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        aa = function(b) {
            var c = U.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        cd = aa(function(b) {
            return b.appendChild(U.createComment("")), !b.getElementsByTagName("*").length
        }),
        dd = aa(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        ed = aa(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Rb = aa(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        fd = aa(function(b) {
            b.id = J + 0;
            b.innerHTML = "<a name='" + J + "'></a><div name='" + J + "'></div>";
            T.insertBefore(b, T.firstChild);
            var c = U.getElementsByName && U.getElementsByName(J).length === 2 + U.getElementsByName(J + 0).length;
            return ib = !U.getElementById(J), T.removeChild(b), c
        });
    try {
        na.call(T.childNodes, 0)[0].nodeType
    } catch (Pd) {
        na = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    H.matches = function(b, c) {
        return H(b, null, null, c)
    };
    H.matchesSelector = function(b, c) {
        return 0 < H(c, null, null, [b]).length
    };
    Oa = H.getText = function(b) {
        var c, d = "",
            j = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Oa(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[j]; j++) d += Oa(c);
        return d
    };
    Ha = H.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Qb = H.contains = T.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            j = c && c.parentNode;
        return b === j || !(!j || !(1 === j.nodeType && d.contains && d.contains(j)))
    } : T.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    H.attr = function(b, c) {
        var d, j = Ha(b);
        return j || (c = c.toLowerCase()), (d = K.attrHandle[c]) ? d(b) : j || ed ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    K = H.selectors = {
        cacheLength: 50,
        createPseudo: V,
        match: Ka,
        attrHandle: dd ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: ib ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: cd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var j, f = [], e = 0; j = d[e]; e++) 1 === j.nodeType && f.push(j);
                    return f
                }
                return d
            },
            NAME: fd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Rb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || H.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && H.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Ka.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) $c.test(c) && (d = La(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: ib ? function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ia, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = Yb[J][b];
                return c || (c = Yb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(j) {
                    j = H.attr(j, b);
                    return null == j ? "!=" === c : c ? (j += "", "=" === c ? j === d : "!=" === c ? j !== d : "^=" === c ? d && 0 === j.indexOf(d) : "*=" === c ? d && -1 < j.indexOf(d) : "$=" === c ? d && j.substr(j.length - d.length) === d : "~=" === c ? -1 < (" " + j + " ").indexOf(d) : "|=" === c ? j === d || j.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, j) {
                return "nth" === b ? function(b) {
                    var c, f;
                    c = b.parentNode;
                    if (1 === d && 0 === j) return !0;
                    if (c) {
                        f = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (f++, b === c)); c = c.nextSibling);
                    }
                    return f -= j, f === d || 0 === f % d && 0 <= f / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 === d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, j = K.pseudos[b] || K.setFilters[b.toLowerCase()] || H.error("unsupported pseudo: " + b);
                return j[J] ? j(c) : 1 < j.length ? (d = [b, b, "", c], K.setFilters.hasOwnProperty(b.toLowerCase()) ? V(function(b, d) {
                    for (var f, e = j(b, c), g = e.length; g--;) f = Vb.call(b, e[g]), b[f] = !(d[f] = e[g])
                }) : function(b) {
                    return j(b, 0, d)
                }) : j
            }
        },
        pseudos: {
            not: V(function(b) {
                var c = [],
                    d = [],
                    j = hb(b.replace(Ia, "$1"));
                return j[J] ? V(function(b, c, d, f) {
                    f = j(b, null, f, []);
                    for (var e = b.length; e--;)
                        if (d = f[e]) b[e] = !(c[e] = d)
                }) : function(b, f, e) {
                    return c[0] = b, j(c, null, e, d), !d.pop()
                }
            }),
            has: V(function(b) {
                return function(c) {
                    return 0 < H(b, c).length
                }
            }),
            contains: V(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Oa(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !K.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return ad.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: sa("radio"),
            checkbox: sa("checkbox"),
            file: sa("file"),
            password: sa("password"),
            image: sa("image"),
            submit: Sb("submit"),
            reset: Sb("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return bd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ha(function() {
                return [0]
            }),
            last: ha(function(b, c) {
                return [c - 1]
            }),
            eq: ha(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ha(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ha(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ha(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ha(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    jb = T.compareDocumentPosition ? function(b, c) {
        return b === c ? (ua = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return ua = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, j, f = [],
            e = [];
        d = b.parentNode;
        j = c.parentNode;
        var g = d;
        if (d === j) return Ja(b, c);
        if (!d) return -1;
        if (!j) return 1;
        for (; g;) f.unshift(g), g = g.parentNode;
        for (g = j; g;) e.unshift(g), g = g.parentNode;
        d = f.length;
        j = e.length;
        for (g = 0; g < d && g < j; g++)
            if (f[g] !== e[g]) return Ja(f[g], e[g]);
        return g === d ? Ja(b, e[g], -1) : Ja(f[g], c, 1)
    };
    [0, 0].sort(jb);
    Xb = !ua;
    H.uniqueSort = function(b) {
        var c, d = 1;
        ua = Xb;
        b.sort(jb);
        if (ua)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    H.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    hb = H.compile = function(b, c) {
        var d, j = [],
            f = [],
            e = Zb[J][b];
        if (!e) {
            c || (c = La(b));
            for (d = c.length; d--;) e = fb(c[d]), e[J] ? j.push(e) : f.push(e);
            var g = 0 < j.length,
                m = 0 < f.length,
                n = function(b, c, d, e, y) {
                    var t, l, v = [],
                        r = 0,
                        s = "0",
                        q = b && [],
                        p = null != y,
                        x = Na,
                        M = b || m && K.find.TAG("*", y && c.parentNode || c),
                        A = ta += null == x ? 1 : Math.E;
                    for (p && (Na = c !== U && c, bb = n.el); null != (y = M[s]); s++) {
                        if (m && y) {
                            for (t = 0; l = f[t]; t++)
                                if (l(y, c, d)) {
                                    e.push(y);
                                    break
                                }
                            p && (ta = A, bb = ++n.el)
                        }
                        g && ((y = !l && y) && r--, b && q.push(y))
                    }
                    r += s;
                    if (g && s !== r) {
                        for (t = 0; l = j[t]; t++) l(q, v, c, d);
                        if (b) {
                            if (0 < r)
                                for (; s--;)!q[s] && !v[s] && (v[s] = Zc.call(e));
                            v = Ma(v)
                        }
                        ma.apply(e, v);
                        p && !b && 0 < v.length && 1 < r + j.length && H.uniqueSort(e)
                    }
                    return p && (ta = A, Na = x), q
                };
            d = (n.el = 0, g ? V(n) : n);
            e = Zb(b, d)
        }
        return e
    };
    if (U.querySelectorAll) {
        var ac, gd = ab,
            hd = /'|\\/g,
            id = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            W = [":focus"],
            Pa = [":active", ":focus"],
            Qa = T.matchesSelector || T.mozMatchesSelector || T.webkitMatchesSelector || T.oMatchesSelector || T.msMatchesSelector;
        aa(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || W.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || W.push(":checked")
        });
        aa(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && W.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled")
        });
        W = RegExp(W.join("|"));
        ab = function(b, c, d, j, f) {
            if (!j && !f && (!W || !W.test(b))) {
                var e, g, m = !0,
                    n = J;
                g = c;
                e = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    e = La(b);
                    (m = c.getAttribute("id")) ? n = m.replace(hd, "\\$&"): c.setAttribute("id", n);
                    n = "[id='" + n + "'] ";
                    for (g = e.length; g--;) e[g] = n + e[g].join("");
                    g = gb.test(b) && c.parentNode || c;
                    e = e.join(",")
                }
                if (e) try {
                    return ma.apply(d, na.call(g.querySelectorAll(e), 0)), d
                } catch (l) {} finally {
                    m || c.removeAttribute("id")
                }
            }
            return gd(b, c, d, j, f)
        };
        Qa && (aa(function(b) {
            ac = Qa.call(b, "div");
            try {
                Qa.call(b, "[test!='']:sizzle"), Pa.push("!=", lb)
            } catch (c) {}
        }), Pa = RegExp(Pa.join("|")), H.matchesSelector = function(b, c) {
            c = c.replace(id, "='$1']");
            if (!Ha(b) && !Pa.test(c) && (!W || !W.test(c))) try {
                var d = Qa.call(b, c);
                if (d || ac || b.document && 11 !== b.document.nodeType) return d
            } catch (j) {}
            return 0 < H(c, null, null, [b]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = Wb.prototype = K.pseudos;
    K.setFilters = new Wb;
    H.attr = f.attr;
    f.find = H;
    f.expr = H.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = H.uniqueSort;
    f.text = H.getText;
    f.isXMLDoc = H.isXML;
    f.contains = H.contains;
    var jd = /Until$/,
        kd = /^(?:parents|prev(?:Until|All))/,
        tc = /^.[^:#\[\.,]*$/,
        bc = f.expr.match.needsContext,
        ld = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, j, e, g, m, n = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = n.length; c < d; c++)
                    if (f.contains(n[c], this)) return !0
            });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (j = m.length, f.find(b, this[c], m), 0 < c)
                    for (e = j; e < m.length; e++)
                        for (g = 0; g < j; g++)
                            if (m[g] === m[e]) {
                                m.splice(e--, 1);
                                break
                            }
            return m
        },
        has: function(b) {
            var c, d = f(b, this),
                j = d.length;
            return this.filter(function() {
                for (c = 0; c < j; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(j(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(j(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? bc.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, j = 0, e = this.length, g = [], m = bc.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; j < e; j++)
                for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (m ? -1 < m.index(d) : f.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? f.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                j = f.merge(this.get(), d);
            return this.pushStack(p(d[0]) || p(j[0]) ? j : f.unique(j))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return q(b, "nextSibling")
        },
        prev: function(b) {
            return q(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, j) {
            var e = f.map(this, c, d);
            return jd.test(b) || (j = d), j && "string" == typeof j && (e = f.filter(j, e)), e = 1 < this.length && !ld[b] ? f.unique(e) : e, 1 < this.length && kd.test(b) && (e = e.reverse()), this.pushStack(e, b, X.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, j) {
            var e = [];
            for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !f(b).is(j));) 1 === b.nodeType && e.push(b), b = b[d];
            return e
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var sb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        md = / jQuery\d+="(?:null|\d+)"/g,
        mb = /^\s+/,
        cc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        dc = /<([\w:]+)/,
        nd = /<tbody/i,
        od = /<|&#?\w+;/,
        pd = /<(?:script|style|link)/i,
        qd = /<(?:script|object|embed|option|style)/i,
        nb = RegExp("<(?:" + sb + ")[\\s/>]", "i"),
        tb = /^(?:checkbox|radio)$/,
        ec = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rd = /\/(java|ecma)script/i,
        sd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        fc = m(z),
        ob = fc.appendChild(z.createElement("div"));
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    f.support.htmlSerialize || (S._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!p(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!p(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, j = 0; null != (d = this[j]); j++)
                if (!b || f.filter(b, [d]).length)!c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    j = 0,
                    e = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(md, "") : c;
                if ("string" == typeof b && !pd.test(b) && (f.support.htmlSerialize || !nb.test(b)) && (f.support.leadingWhitespace || !mb.test(b)) && !S[(dc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(cc, "<$1></$2>");
                    try {
                        for (; j < e; j++) d = this[j] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return p(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    j = d.html();
                d.replaceWith(b.call(this, c, j))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, j) {
            b = [].concat.apply([], b);
            var e, g, m, n = 0,
                l = b[0],
                r = [],
                s = this.length;
            if (!f.support.checkClone && 1 < s && "string" == typeof l && ec.test(l)) return this.each(function() {
                f(this).domManip(b, d, j)
            });
            if (f.isFunction(l)) return this.each(function(e) {
                var g = f(this);
                b[0] = l.call(this, e, d ? g.html() : c);
                g.domManip(b, d, j)
            });
            if (this[0]) {
                e = f.buildFragment(b, this, r);
                m = e.fragment;
                g = m.firstChild;
                1 === m.childNodes.length && (m = g);
                if (g) {
                    d = d && f.nodeName(g, "tr");
                    for (e = e.cacheable || s - 1; n < s; n++) j.call(d && f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], n === e ? m : f.clone(m, !0, !0))
                }
                m = g = null;
                r.length && f.each(r, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(sd, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, j) {
        var e, g, m, n = b[0];
        return d = d || z, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof n && 512 > n.length && d === z && "<" === n.charAt(0) && !qd.test(n) && (f.support.checkClone || !ec.test(n)) && (f.support.html5Clone || !nb.test(n)) && (g = !0, e = f.fragments[n], m = e !== c), e || (e = d.createDocumentFragment(), f.clean(b, d, e, j), g && (f.fragments[n] = m && e)), {
            fragment: e,
            cacheable: g
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var j, e = 0,
                g = [];
            d = f(d);
            var m = d.length;
            j = 1 === this.length && this[0].parentNode;
            if ((null == j || j && 11 === j.nodeType && 1 === j.childNodes.length) && 1 === m) return d[c](this[0]), this;
            for (; e < m; e++) j = (0 < e ? this.clone(!0) : this).get(), f(d[e])[c](j), g = g.concat(j);
            return this.pushStack(g, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var j, e, g, m;
            f.support.html5Clone || f.isXMLDoc(b) || !nb.test("<" + b.nodeName + ">") ? m = b.cloneNode(!0) : (ob.innerHTML = b.outerHTML, ob.removeChild(m = ob.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                r(b, m);
                j = s(b);
                e = s(m);
                for (g = 0; j[g]; ++g) e[g] && r(j[g], e[g])
            }
            if (c && (n(b, m), d)) {
                j = s(b);
                e = s(m);
                for (g = 0; j[g]; ++g) n(j[g], e[g])
            }
            return m
        },
        clean: function(b, c, d, j) {
            var e, g, n, l, r, s, q, p = c === z && fc,
                A = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = z;
            for (e = 0; null != (n = b[e]); e++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" == typeof n)
                        if (od.test(n)) {
                            p = p || m(c);
                            s = c.createElement("div");
                            p.appendChild(s);
                            n = n.replace(cc, "<$1></$2>");
                            g = (dc.exec(n) || ["", ""])[1].toLowerCase();
                            l = S[g] || S._default;
                            r = l[0];
                            for (s.innerHTML = l[1] + n + l[2]; r--;) s = s.lastChild;
                            if (!f.support.tbody) {
                                r = nd.test(n);
                                l = "table" === g && !r ? s.firstChild && s.firstChild.childNodes : "<table>" === l[1] && !r ? s.childNodes : [];
                                for (g = l.length - 1; 0 <= g; --g) f.nodeName(l[g], "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g])
                            }!f.support.leadingWhitespace && mb.test(n) && s.insertBefore(c.createTextNode(mb.exec(n)[0]), s.firstChild);
                            n = s.childNodes;
                            s.parentNode.removeChild(s)
                        } else n = c.createTextNode(n);
                    n.nodeType ? A.push(n) : f.merge(A, n)
                }
            s && (n = s = p = null);
            if (!f.support.appendChecked)
                for (e = 0; null != (n = A[e]); e++) f.nodeName(n, "input") ? x(n) : "undefined" != typeof n.getElementsByTagName && f.grep(n.getElementsByTagName("input"), x);
            if (d) {
                b = function(b) {
                    if (!b.type || rd.test(b.type)) return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (e = 0; null != (n = A[e]); e++)
                    if (!f.nodeName(n, "script") || !b(n)) d.appendChild(n), "undefined" != typeof n.getElementsByTagName && (q = f.grep(f.merge([], n.getElementsByTagName("script")), b), A.splice.apply(A, [e + 1, 0].concat(q)), e += q.length)
            }
            return A
        },
        cleanData: function(b, c) {
            for (var d, j, e, g, m = 0, n = f.expando, l = f.cache, r = f.support.deleteExpando, s = f.event.special; null != (e = b[m]); m++)
                if (c || f.acceptData(e))
                    if (d = (j = e[n]) && l[j]) {
                        if (d.events)
                            for (g in d.events) s[g] ? f.event.remove(e, g) : f.removeEvent(e, g, d.handle);
                        l[j] && (delete l[j], r ? delete e[n] : e.removeAttribute ? e.removeAttribute(n) : e[n] = null, f.deletedIds.push(j))
                    }
        }
    });
    var Ra, ba;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ra = f.uaMatch(yc.userAgent);
    ba = {};
    Ra.browser && (ba[Ra.browser] = !0, ba.version = Ra.version);
    ba.chrome ? ba.webkit = !0 : ba.webkit && (ba.safari = !0);
    f.browser = ba;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c, d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, j) {
            return j && j instanceof f && !(j instanceof b) && (j = b(j)), f.fn.init.call(this, d, j, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(z);
        return b
    };
    var N, ka, la, pb = /alpha\([^)]*\)/i,
        td = /opacity=([^)]*)/,
        ud = /^(top|right|bottom|left)$/,
        vd = /^(none|table(?!-c[ea]).+)/,
        gc = /^margin/,
        uc = RegExp("^(" + Ba + ")(.*)$", "i"),
        va = RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
        wd = RegExp("^([-+])=(" + Ba + ")", "i"),
        Ua = {},
        xd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        da = ["Top", "Right", "Bottom", "Left"],
        ub = ["Webkit", "O", "Moz", "ms"],
        yd = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, j) {
                return j !== c ? f.style(b, d, j) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return F(this, !0)
        },
        hide: function() {
            return F(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? yd.apply(this, arguments) : this.each(function() {
                (d ? b : C(this)) ? f(this).show(): f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = N(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, j, e) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, m, n, l = f.camelCase(d),
                    r = b.style;
                d = f.cssProps[l] || (f.cssProps[l] = A(r, l));
                n = f.cssHooks[d] || f.cssHooks[l];
                if (j === c) return n && "get" in n && (g = n.get(b, !1, e)) !== c ? g : r[d];
                m = typeof j;
                "string" === m && (g = wd.exec(j)) && (j = (g[1] + 1) * g[2] + parseFloat(f.css(b, d)), m = "number");
                if (!(null == j || "number" === m && isNaN(j)))
                    if ("number" === m && !f.cssNumber[l] && (j += "px"), !n || !("set" in n) || (j = n.set(b, j, e)) !== c) try {
                        r[d] = j
                    } catch (s) {}
            }
        },
        css: function(b, d, j, e) {
            var g, m, n, l = f.camelCase(d);
            return d = f.cssProps[l] || (f.cssProps[l] = A(b.style, l)), n = f.cssHooks[d] || f.cssHooks[l], n && "get" in n && (g = n.get(b, !0, e)), g === c && (g = N(b, d)), "normal" === g && d in hc && (g = hc[d]), j || e !== c ? (m = parseFloat(g), j || f.isNumeric(m) ? m || 0 : g) : g
        },
        swap: function(b, c, d) {
            var j, e = {};
            for (j in c) e[j] = b.style[j], b.style[j] = c[j];
            d = d.call(b);
            for (j in c) b.style[j] = e[j];
            return d
        }
    });
    b.getComputedStyle ? N = function(c, d) {
        var j, e, g, m, n = b.getComputedStyle(c, null),
            l = c.style;
        return n && (j = n[d], "" === j && !f.contains(c.ownerDocument, c) && (j = f.style(c, d)), va.test(j) && gc.test(d) && (e = l.width, g = l.minWidth, m = l.maxWidth, l.minWidth = l.maxWidth = l.width = j, j = n.width, l.width = e, l.minWidth = g, l.maxWidth = m)), j
    } : z.documentElement.currentStyle && (N = function(b, c) {
        var d, j, e = b.currentStyle && b.currentStyle[c],
            f = b.style;
        return null == e && f && f[c] && (e = f[c]), va.test(e) && !ud.test(c) && (d = f.left, j = b.runtimeStyle && b.runtimeStyle.left, j && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : e, e = f.pixelLeft + "px", f.left = d, j && (b.runtimeStyle.left = j)), "" === e ? "auto" : e
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, j) {
                if (d) return 0 === b.offsetWidth && vd.test(N(b, "display")) ? f.swap(b, xd, function() {
                    return Y(b, c, j)
                }) : Y(b, c, j)
            },
            set: function(b, d, j) {
                return B(b, d, j ? D(b, c, j, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return td.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                j = b.currentStyle,
                e = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = j && j.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(g.replace(pb, "")) && d.removeAttribute && (d.removeAttribute("filter"), j && !j.filter))) d.filter = pb.test(g) ? g.replace(pb, e) : g + " " + e
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return N(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var j = N(b, c);
                        return va.test(j) ? f(b).position()[c] + "px" : j
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || N(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var j = "string" == typeof d ? d.split(" ") : [d],
                    e = {};
                for (d = 0; 4 > d; d++) e[b + da[d] + c] = j[d] || j[d - 2] || j[0];
                return e
            }
        };
        gc.test(b) || (f.cssHooks[b + c].set = B)
    });
    var zd = /%20/g,
        vc = /\[\]$/,
        ic = /\r?\n/g,
        Ad = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Bd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Bd.test(this.nodeName) || Ad.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(ic, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(ic, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var j, e = [],
            g = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            g(this.name, this.value)
        });
        else
            for (j in b) G(j, b[j], d, g);
        return e.join("&").replace(zd, "+")
    };
    var oa, ja, Cd = /#.*$/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        jc = /\?/,
        Gd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hd = /([?&])_=[^&]*/,
        kc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        lc = f.fn.load,
        Va = {},
        mc = {},
        nc = ["*/"] + ["*"];
    try {
        ja = xc.href
    } catch (Qd) {
        ja = z.createElement("a"), ja.href = "", ja = ja.href
    }
    oa = kc.exec(ja.toLowerCase()) || [];
    f.fn.load = function(b, d, j) {
        if ("string" != typeof b && lc) return lc.apply(this, arguments);
        if (!this.length) return this;
        var e, g, m, n = this,
            l = b.indexOf(" ");
        return 0 <= l && (e = b.slice(l, b.length), b = b.slice(0, l)), f.isFunction(d) ? (j = d, d = c) : d && "object" == typeof d && (g = "POST"), f.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                j && n.each(j, m || [b.responseText, c, b])
            }
        }).done(function(b) {
            m = arguments;
            n.html(e ? f("<div>").append(b.replace(Gd, "")).find(e) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, j, e, g) {
            return f.isFunction(j) && (g = g || e, e = j, j = c), f.ajax({
                type: d,
                url: b,
                data: j,
                success: e,
                dataType: g
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? wb(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), wb(b, c), b
        },
        ajaxSettings: {
            url: ja,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(oa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": nc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: vb(Va),
        ajaxTransport: vb(mc),
        ajax: function(b, d) {
            function j(b, d, m, r) {
                var t, q, y, v, M, P = d;
                if (2 !== F) {
                    F = 2;
                    l && clearTimeout(l);
                    n = c;
                    g = r || "";
                    E.readyState = 0 < b ? 4 : 0;
                    if (m) {
                        v = p;
                        r = E;
                        var R, B, D, I, K = v.contents,
                            J = v.dataTypes,
                            L = v.responseFields;
                        for (B in L) B in m && (r[L[B]] = m[B]);
                        for (;
                            "*" === J[0];) J.shift(), R === c && (R = v.mimeType || r.getResponseHeader("content-type"));
                        if (R)
                            for (B in K)
                                if (K[B] && K[B].test(R)) {
                                    J.unshift(B);
                                    break
                                }
                        if (J[0] in m) D = J[0];
                        else {
                            for (B in m) {
                                if (!J[0] || v.converters[B + " " + J[0]]) {
                                    D = B;
                                    break
                                }
                                I || (I = B)
                            }
                            D = D || I
                        }
                        v = m = D ? (D !== J[0] && J.unshift(D), m[D]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (p.ifModified && (M = E.getResponseHeader("Last-Modified"), M && (f.lastModified[e] = M), M = E.getResponseHeader("Etag"), M && (f.etag[e] = M)), 304 === b) P = "notmodified", t = !0;
                        else {
                            var G;
                            a: {
                                t = p;
                                q = v;
                                var N, P = t.dataTypes.slice();
                                m = P[0];
                                R = {};
                                B = 0;
                                t.dataFilter && (q = t.dataFilter(q, t.dataType));
                                if (P[1])
                                    for (G in t.converters) R[G.toLowerCase()] = t.converters[G];
                                for (; y = P[++B];)
                                    if ("*" !== y) {
                                        if ("*" !== m && m !== y) {
                                            G = R[m + " " + y] || R["* " + y];
                                            if (!G)
                                                for (N in R)
                                                    if (M = N.split(" "), M[1] === y && (G = R[m + " " + M[0]] || R["* " + M[0]])) {
                                                        !0 === G ? G = R[N] : !0 !== R[N] && (y = M[0], P.splice(B--, 0, y));
                                                        break
                                                    }
                                            if (!0 !== G)
                                                if (G && t["throws"]) q = G(q);
                                                else try {
                                                    q = G(q)
                                                } catch (O) {
                                                    G = {
                                                        state: "parsererror",
                                                        error: G ? O : "No conversion from " + m + " to " + y
                                                    };
                                                    break a
                                                }
                                        }
                                        m = y
                                    }
                                G = {
                                    state: "success",
                                    data: q
                                }
                            }
                            t = G;
                            P = t.state;
                            q = t.data;
                            y = t.error;
                            t = !y
                        } else if (y = P, !P || b) P = "error", 0 > b && (b = 0);
                    E.status = b;
                    E.statusText = (d || P) + "";
                    t ? z.resolveWith(x, [q, P, E]) : z.rejectWith(x, [E, P, y]);
                    E.statusCode(H);
                    H = c;
                    s && A.trigger("ajax" + (t ? "Success" : "Error"), [E, p, t ? q : y]);
                    C.fireWith(x, [E, P]);
                    s && (A.trigger("ajaxComplete", [E, p]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var e, g, m, n, l, r, s, q, p = f.ajaxSetup({}, d),
                x = p.context || p,
                A = x !== p && (x.nodeType || x instanceof f) ? f(x) : f.event,
                z = f.Deferred(),
                C = f.Callbacks("once memory"),
                H = p.statusCode || {},
                B = {},
                D = {},
                F = 0,
                I = "canceled",
                E = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!F) {
                            var d = b.toLowerCase();
                            b = D[d] = D[d] || b;
                            B[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === F ? g : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === F) {
                            if (!m)
                                for (m = {}; d = Dd.exec(g);) m[d[1].toLowerCase()] = d[2];
                            d = m[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return F || (p.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || I, n && n.abort(b), j(0, b), this
                    }
                };
            z.promise(E);
            E.success = E.done;
            E.error = E.fail;
            E.complete = C.add;
            E.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > F)
                        for (c in b) H[c] = [H[c], b[c]];
                    else c = b[E.status], E.always(c)
                }
                return this
            };
            p.url = ((b || p.url) + "").replace(Cd, "").replace(Fd, oa[1] + "//");
            p.dataTypes = f.trim(p.dataType || "*").toLowerCase().split(ea);
            null == p.crossDomain && (r = kc.exec(p.url.toLowerCase()) || !1, p.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== oa.join(":") + (oa[3] ? "" : "http:" === oa[1] ? 80 : 443));
            p.data && p.processData && "string" != typeof p.data && (p.data = f.param(p.data, p.traditional));
            wa(Va, p, d, E);
            if (2 === F) return E;
            s = p.global;
            p.type = p.type.toUpperCase();
            p.hasContent = !Ed.test(p.type);
            s && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!p.hasContent && (p.data && (p.url += (jc.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, !1 === p.cache)) {
                r = f.now();
                var K = p.url.replace(Hd, "$1_=" + r);
                p.url = K + (K === p.url ? (jc.test(p.url) ? "&" : "?") + "_=" + r : "")
            }(p.data && p.hasContent && !1 !== p.contentType || d.contentType) && E.setRequestHeader("Content-Type", p.contentType);
            p.ifModified && (e = e || p.url, f.lastModified[e] && E.setRequestHeader("If-Modified-Since", f.lastModified[e]), f.etag[e] && E.setRequestHeader("If-None-Match", f.etag[e]));
            E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : p.accepts["*"]);
            for (q in p.headers) E.setRequestHeader(q, p.headers[q]);
            if (!p.beforeSend || !1 !== p.beforeSend.call(x, E, p) && 2 !== F) {
                I = "abort";
                for (q in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[q](p[q]);
                if (n = wa(mc, p, d, E)) {
                    E.readyState = 1;
                    s && A.trigger("ajaxSend", [E, p]);
                    p.async && 0 < p.timeout && (l = setTimeout(function() {
                        E.abort("timeout")
                    }, p.timeout));
                    try {
                        F = 1, n.send(B, j)
                    } catch (J) {
                        if (2 > F) j(-1, J);
                        else throw J;
                    }
                } else j(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var oc = [],
        Id = /\?/,
        Sa = /(=)\?(?=&|$)|\?\?/,
        Jd = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = oc.pop() || f.expando + "_" + Jd++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, j, e) {
        var g, m, n, l = d.data,
            r = d.url,
            s = !1 !== d.jsonp,
            p = s && Sa.test(r),
            q = s && !p && "string" == typeof l && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Sa.test(l);
        if ("jsonp" === d.dataTypes[0] || p || q) return g = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, m = b[g], p ? d.url = r.replace(Sa, "$1" + g) : q ? d.data = l.replace(Sa, "$1" + g) : s && (d.url += (Id.test(r) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
            return n || f.error(g + " was not called"), n[0]
        }, d.dataTypes[0] = "json", b[g] = function() {
            n = arguments
        }, e.always(function() {
            b[g] = m;
            d[g] && (d.jsonpCallback = j.jsonpCallback, oc.push(g));
            n && f.isFunction(m) && m(n[0]);
            n = m = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, j = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function(e, f) {
                    d = z.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, e) {
                        if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, j && d.parentNode && j.removeChild(d), d = c, e || f(200, "success")
                    };
                    j.insertBefore(d, j.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var pa, qb = b.ActiveXObject ? function() {
            for (var b in pa) pa[b](0, 1)
        } : !1,
        Kd = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && xb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : xb;
    var rb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!rb,
        cors: !!rb && "withCredentials" in rb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var j;
            return {
                send: function(e, g) {
                    var m, n, l = d.xhr();
                    d.username ? l.open(d.type, d.url, d.async, d.username, d.password) : l.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (n in d.xhrFields) l[n] = d.xhrFields[n];
                    d.mimeType && l.overrideMimeType && l.overrideMimeType(d.mimeType);
                    !d.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (n in e) l.setRequestHeader(n, e[n])
                    } catch (r) {}
                    l.send(d.hasContent && d.data || null);
                    j = function(b, e) {
                        var n, r, s, p, q;
                        try {
                            if (j && (e || 4 === l.readyState))
                                if (j = c, m && (l.onreadystatechange = f.noop, qb && delete pa[m]), e) 4 !== l.readyState && l.abort();
                                else {
                                    n = l.status;
                                    s = l.getAllResponseHeaders();
                                    p = {};
                                    (q = l.responseXML) && q.documentElement && (p.xml = q);
                                    try {
                                        p.text = l.responseText
                                    } catch (x) {}
                                    try {
                                        r = l.statusText
                                    } catch (v) {
                                        r = ""
                                    }!n && d.isLocal && !d.crossDomain ? n = p.text ? 200 : 404 : 1223 === n && (n = 204)
                                }
                        } catch (A) {
                            e || g(-1, A)
                        }
                        p && g(n, r, p, s)
                    };
                    d.async ? 4 === l.readyState ? setTimeout(j, 0) : (m = ++Kd, qb && (pa || (pa = {}, f(b).unload(qb)), pa[m] = j), l.onreadystatechange = j) : j()
                },
                abort: function() {
                    j && j(0, 1)
                }
            }
        }
    });
    var xa, Ta, Ld = /^(?:toggle|show|hide)$/,
        Md = RegExp("^(?:([-+])=|)(" + Ba + ")([a-z%]*)$", "i"),
        Nd = /queueHooks$/,
        ya = [
            function(b, c, d) {
                var j, e, g, m, n, l, r = this,
                    s = b.style,
                    p = {},
                    q = [],
                    x = b.nodeType && C(b);
                d.queue || (n = f._queueHooks(b, "fx"), null == n.unqueued && (n.unqueued = 0, l = n.empty.fire, n.empty.fire = function() {
                    n.unqueued || l()
                }), n.unqueued++, r.always(function() {
                    r.always(function() {
                        n.unqueued--;
                        f.queue(b, "fx").length || n.empty.fire()
                    })
                }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [s.overflow, s.overflowX, s.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === ca(b.nodeName) ? s.display = "inline-block" : s.zoom = 1));
                d.overflow && (s.overflow = "hidden", f.support.shrinkWrapBlocks || r.done(function() {
                    s.overflow = d.overflow[0];
                    s.overflowX = d.overflow[1];
                    s.overflowY = d.overflow[2]
                }));
                for (j in c) e = c[j], Ld.exec(e) && (delete c[j], e !== (x ? "hide" : "show") && q.push(j));
                if (e = q.length) {
                    g = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                    x ? f(b).show() : r.done(function() {
                        f(b).hide()
                    });
                    r.done(function() {
                        var c;
                        f.removeData(b, "fxshow", !0);
                        for (c in p) f.style(b, c, p[c])
                    });
                    for (j = 0; j < e; j++) c = q[j], m = r.createTween(c, x ? g[c] : 0), p[c] = g[c] || f.style(b, c), c in g || (g[c] = m.start, x && (m.end = m.start, m.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        qa = {
            "*": [
                function(b, c) {
                    var d, j, e = this.createTween(b, c),
                        g = Md.exec(c),
                        m = e.cur(),
                        n = +m || 0,
                        l = 1,
                        r = 20;
                    if (g) {
                        d = +g[2];
                        j = g[3] || (f.cssNumber[b] ? "" : "px");
                        if ("px" !== j && n) {
                            n = f.css(e.elem, b, !0) || d || 1;
                            do l = l || ".5", n /= l, f.style(e.elem, b, n + j); while (l !== (l = e.cur() / m) && 1 !== l && --r)
                        }
                        e.unit = j;
                        e.start = n;
                        e.end = g[1] ? n + (g[1] + 1) * d : d
                    }
                    return e
                }
            ]
        };
    f.Animation = f.extend(zb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, j = 0, e = b.length; j < e; j++) d = b[j], qa[d] = qa[d] || [], qa[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? ya.unshift(b) : ya.push(b)
        }
    });
    f.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(b, c, d, j, e, g) {
            this.elem = b;
            this.prop = d;
            this.easing = e || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = j;
            this.unit = g || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = O.propHooks[this.prop];
            return b && b.get ? b.get(this) : O.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = O.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : O.propHooks._default.set(this), this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(j, e, g) {
            return null == j || "boolean" == typeof j || !b && f.isFunction(j) && f.isFunction(e) ? d.apply(this, arguments) : this.animate(za(c, !0), j, e, g)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, j) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, j)
        },
        animate: function(b, c, d, j) {
            var e = f.isEmptyObject(b),
                g = f.speed(c, d, j);
            c = function() {
                var c = zb(this, f.extend({}, b), g);
                e && c.stop(!0)
            };
            return e || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, j) {
            var e = function(b) {
                var c = b.stop;
                delete b.stop;
                c(j)
            };
            return "string" != typeof b && (j = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = f.timers,
                    m = f._data(this);
                if (d) m[d] && m[d].stop && e(m[d]);
                else
                    for (d in m) m[d] && m[d].stop && Nd.test(d) && e(m[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(j), c = !1, g.splice(d, 1));
                (c || !j) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: za("show"),
        slideUp: za("hide"),
        slideToggle: za("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, j) {
            return this.animate(c, b, d, j)
        }
    });
    f.speed = function(b, c, d) {
        var j = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        j.duration = f.fx.off ? 0 : "number" == typeof j.duration ? j.duration : j.duration in f.fx.speeds ? f.fx.speeds[j.duration] : f.fx.speeds._default;
        if (null == j.queue || !0 === j.queue) j.queue = "fx";
        return j.old = j.complete, j.complete = function() {
            f.isFunction(j.old) && j.old.call(this);
            j.queue && f.dequeue(this, j.queue)
        }, j
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = O.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Ta && (Ta = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Ta);
        Ta = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var pc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b === c ? this : this.each(function(c) {
            f.offset.setOffset(this, b, c)
        });
        var d, j, e, g, m, n, l, r = {
                top: 0,
                left: 0
            },
            s = this[0],
            p = s && s.ownerDocument;
        if (p) return (j = p.body) === s ? f.offset.bodyOffset(s) : (d = p.documentElement, f.contains(d, s) ? ("undefined" != typeof s.getBoundingClientRect && (r = s.getBoundingClientRect()), e = Ab(p), g = d.clientTop || j.clientTop || 0, m = d.clientLeft || j.clientLeft || 0, n = e.pageYOffset || d.scrollTop, l = e.pageXOffset || d.scrollLeft, {
            top: r.top + n - g,
            left: r.left + l - m
        }) : r)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var j = f.css(b, "position");
            "static" === j && (b.style.position = "relative");
            var e = f(b),
                g = e.offset(),
                m = f.css(b, "top"),
                n = f.css(b, "left"),
                l = {},
                r = {},
                s, p;
            ("absolute" === j || "fixed" === j) && -1 < f.inArray("auto", [m, n]) ? (r = e.position(), s = r.top, p = r.left) : (s = parseFloat(m) || 0, p = parseFloat(n) || 0);
            f.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (l.top = c.top - g.top + s);
            null != c.left && (l.left = c.left - g.left + p);
            "using" in c ? c.using.call(b, l) : e.css(l)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    j = pc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, j.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, j.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - j.top,
                    left: d.left - j.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || z.body; b && !pc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || z.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var j = /Y/.test(d);
        f.fn[b] = function(e) {
            return f.access(this, function(b, e, g) {
                var m = Ab(b);
                if (g === c) return m ? d in m ? m[d] : m.document.documentElement[e] : b[e];
                m ? m.scrollTo(j ? f(m).scrollLeft() : g, j ? g : f(m).scrollTop()) : b[e] = g
            }, b, e, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(j, e) {
            f.fn[e] = function(e, g) {
                var m = arguments.length && (j || "boolean" != typeof e),
                    n = j || (!0 === e || !0 === g ? "margin" : "border");
                return f.access(this, function(d, j, e) {
                    var g;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : e === c ? f.css(d, j, e, n) : f.style(d, j, e, n)
                }, d, m ? e : c, m, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var l = document.createElement("object");
            l.id = "jukebox-flashstream-" + this.id;
            l.setAttribute("type", "application/x-shockwave-flash");
            l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            l.setAttribute("width", "0");
            l.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), l.appendChild(b);
            c.outerHTML = l.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, e, g = 0, l = c.length; g < l; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var p = 0, q = c[g].m.length; p < q; p++)
                        if (d = c[g].m[p], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (j) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || q();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var g = d._howls[e]._getSoundIds(), l = 0; l < g.length; l++) {
                            var p = d._howls[e]._soundById(g[l]);
                            p && p._node && (p._node.volume = p._volume * b)
                        }
                    return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || q();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var g = d._howls[e]._getSoundIds(), l = 0; l < g.length; l++) {
                        var p = d._howls[e]._soundById(g[l]);
                        p && p._node && (p._node.muted = b ? !0 : p._muted)
                    }
                return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, q());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d = new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (g) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var g = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                l = l && 33 > parseInt(l[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(l || !g && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!g,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var g = function() {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function() {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", g, !0)
                    }
                };
                document.addEventListener("touchend", g, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || q();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var n, r;
                    if (this._format && this._format[d]) n = this._format[d];
                    else {
                        r = this._src[d];
                        if ("string" !== typeof r) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(n = /^data:audio\/([^;,]+);/i.exec(r)) || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0]));
                        n && (n = n[1].toLowerCase())
                    } if (c.codecs(n)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var s = this,
                            q = s._src;
                        if (g[q]) s._duration = g[q].duration, p(s);
                        else if (/^data:[^;]+;base64,/.test(q)) {
                            b = atob(q.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (n = 0; n < b.length; ++n) d[n] = b.charCodeAt(n);
                            l(d.buffer, s)
                        } else {
                            var A = new XMLHttpRequest;
                            A.open("GET", q, !0);
                            A.responseType = "arraybuffer";
                            A.onload = function() {
                                var b = (A.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " +
                                    A.status + ".") : l(A.response, s)
                            };
                            A.onerror = function() {
                                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete g[q], s.load())
                            };
                            try {
                                A.send()
                            } catch (C) {
                                A.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                g = null;
            if ("number" === typeof b) g = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var l = 0, p = 0; p < e._sounds.length; p++) e._sounds[p]._paused && !e._sounds[p]._ended && (l++, g = e._sounds[p]._id);
                    1 === l ? b = null : g = null
                }
            }
            var q = g ? e._soundById(g) : e._inactiveSound();
            if (!q) return null;
            g && !b && (b = q._sprite || "__default");
            if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
                event: "play",
                action: function() {
                    e.play(e._soundById(q._id) ? q._id : void 0)
                }
            }), q._id;
            if (g && !q._paused) return d || setTimeout(function() {
                e._emit("play", q._id)
            }, 0), q._id;
            e._webAudio && c._autoResume();
            var C = Math.max(0, 0 < q._seek ? q._seek : e._sprite[b][0] / 1E3),
                F = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) /
                    1E3 - C),
                B = 1E3 * F / Math.abs(q._rate);
            q._paused = !1;
            q._ended = !1;
            q._sprite = b;
            q._seek = C;
            q._start = e._sprite[b][0] / 1E3;
            q._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            q._loop = !(!q._loop && !e._sprite[b][2]);
            var D = q._node;
            if (e._webAudio) g = function() {
                e._refreshBuffer(q);
                D.gain.setValueAtTime(q._muted || e._muted ? 0 : q._volume, c.ctx.currentTime);
                q._playStart = c.ctx.currentTime;
                "undefined" === typeof D.bufferSource.start ? q._loop ? D.bufferSource.noteGrainOn(0, C, 86400) : D.bufferSource.noteGrainOn(0, C, F) : q._loop ? D.bufferSource.start(0,
                    C, 86400) : D.bufferSource.start(0, C, F);
                Infinity !== B && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), B));
                d || setTimeout(function() {
                    e._emit("play", q._id)
                }, 0)
            }, l = "running" === c.state, "loaded" === e._state && l ? g() : (e.once(l ? "load" : "resume", g, l ? q._id : null), e._clearTimer(q._id));
            else {
                var Y = function() {
                        D.currentTime = C;
                        D.muted = q._muted || e._muted || c._muted || D.muted;
                        D.volume = q._volume * c.volume();
                        D.playbackRate = q._rate;
                        setTimeout(function() {
                            D.play();
                            Infinity !== B && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), B));
                            d || e._emit("play", q._id)
                        }, 0)
                    },
                    g = "loaded" === e._state && (window && window.ejecta || !D.readyState && c._navigator.isCocoonJS);
                if (4 === D.readyState || g) Y();
                else {
                    var ca = function() {
                        Y();
                        D.removeEventListener(c._canPlayEvent, ca, !1)
                    };
                    D.addEventListener(c._canPlayEvent, ca, !1);
                    e._clearTimer(q._id)
                }
            }
            return q._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), g = 0; g < e.length; g++) {
                d._clearTimer(e[g]);
                var l = d._soundById(e[g]);
                if (l && !l._paused && (l._seek = d.seek(e[g]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[g]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) break;
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
                c || d._emit("pause", l ? l._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), g = 0; g < e.length; g++) {
                d._clearTimer(e[g]);
                var l = d._soundById(e[g]);
                if (l && (l._seek = l._start || 0, l._rateSeek = 0, l._paused = !0, l._ended = !0, d._stopFade(e[g]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) {
                            c || d._emit("stop", l._id);
                            break
                        }
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause();
                l && !c && d._emit("stop", l._id)
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var g = e._getSoundIds(d), l = 0; l < g.length; l++) {
                var q = e._soundById(g[l]);
                q && (q._muted = b, e._webAudio && q._node ? q._node.gain.setValueAtTime(b ? 0 : q._volume, c.ctx.currentTime) : q._node && (q._node.muted = c._muted ? !0 : b), e._emit("mute", q._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, g;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            var l;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof g && (b._volume = e);
                g = b._getSoundIds(g);
                for (var q = 0; q < g.length; q++)
                    if (l = b._soundById(g[q])) l._volume = e, d[2] || b._stopFade(g[q]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) : l._node && !l._muted && (l._node.volume = e * c.volume()), b._emit("volume", l._id)
            } else return (l = g ? b._soundById(g) : b._sounds[0]) ? l._volume : 0;
            return b
        },
        fade: function(b, d, e, g) {
            var l = this,
                q = Math.abs(b - d),
                p = b > d ? "out" : "in",
                C = q / 0.01,
                q = 0 < C ? e / C : e;
            4 > q && (C = Math.ceil(C / (4 / q)), q = 4);
            if ("loaded" !== l._state) return l._queue.push({
                event: "fade",
                action: function() {
                    l.fade(b, d, e, g)
                }
            }), l;
            l.volume(b, g);
            for (var F = l._getSoundIds(g), B = 0; B < F.length; B++) {
                var D = l._soundById(F[B]);
                if (D) {
                    g || l._stopFade(F[B]);
                    if (l._webAudio && !D._muted) {
                        var Y = c.ctx.currentTime,
                            ca = Y + e / 1E3;
                        D._volume = b;
                        D._node.gain.setValueAtTime(b, Y);
                        D._node.gain.linearRampToValueAtTime(d, ca)
                    }
                    var G = b;
                    D._interval = setInterval(function(b, c) {
                        0 < C && (G += "in" === p ? 0.01 : -0.01);
                        G = Math.max(0, G);
                        G = Math.min(1, G);
                        G = Math.round(100 * G) / 100;
                        l._webAudio ? ("undefined" === typeof g && (l._volume = G), c._volume = G) : l.volume(G, b, !0);
                        G === d && (clearInterval(c._interval), c._interval = null, l.volume(G, b),
                            l._emit("fade", b))
                    }.bind(l, F[B], D), q)
                }
            }
            return l
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, g;
            0 === d.length ? g = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            var l;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof g && (b._rate = e);
                g = b._getSoundIds(g);
                for (var q = 0; q < g.length; q++)
                    if (l = b._soundById(g[q])) {
                        l._rateSeek = b.seek(g[q]);
                        l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
                        l._rate = e;
                        b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.value = e : l._node && (l._node.playbackRate = e);
                        var p = b.seek(g[q]),
                            p = 1E3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1E3 - p) / Math.abs(l._rate);
                        if (b._endTimers[g[q]] || !l._paused) b._clearTimer(g[q]), b._endTimers[g[q]] = setTimeout(b._ended.bind(b, l), p);
                        b._emit("rate", l._id)
                    }
            } else return (l = b._soundById(g)) ? l._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, g;
            0 === d.length ? g = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : (g = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            if ("undefined" === typeof g) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var l = b._soundById(g);
            if (l)
                if ("number" === typeof e && 0 <= e) {
                    var q = b.playing(g);
                    q && b.pause(g, !0);
                    l._seek = e;
                    l._ended = !1;
                    b._clearTimer(g);
                    q && b.play(g, !0);
                    !b._webAudio && l._node && (l._node.currentTime = e);
                    b._emit("seek", g)
                } else return b._webAudio ? (e = b.playing(g) ? c.ctx.currentTime - l._playStart : 0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var e = c._howls.indexOf(this);
                0 <= e && c._howls.splice(e, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            g && b && delete g[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" +
                    b],
                g = 0;
            if (c)
                for (g = 0; g < e.length; g++) {
                    if (c === e[g].fn && d === e[g].id) {
                        e.splice(g, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    b = Object.keys(this);
                    for (g = 0; g < b.length; g++) 0 === b[g].indexOf("_on") && Array.isArray(this[b[g]]) && (this[b[g]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], g = e.length - 1; 0 <= g; g--)
                if (!e[g].id || e[g].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[g].fn), 0), e[g].once && this.off(b, e[g].fn, e[g].id);
            return this
        },
        _loadQueue: function() {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function() {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        },
        _ended: function(b) {
            var d = b._sprite,
                d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this,
                    b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = g[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        },
        _cleanBuffer: function(b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var g = {},
        l = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (g[d._src] = b, p(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        p = function(b,
            c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        q = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, j, m) {
        if (!this.ctx || !this.ctx.listener) return this;
        var n = this._orientation;
        c = "number" !== typeof c ? n[1] : c;
        d = "number" !== typeof d ? n[2] : d;
        e = "number" !== typeof e ? n[3] : e;
        j = "number" !== typeof j ? n[4] : j;
        m = "number" !== typeof m ? n[5] : m;
        if ("number" === typeof b) this._orientation = [b, c, d, e, j, m], this.ctx.listener.setOrientation(b, c, d, e, j, m);
        else return n;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var q = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var j = d._getSoundIds(c), m = 0; m < j.length; m++) {
            var n = d._soundById(j[m]);
            if (n)
                if ("number" === typeof b) n._stereo = b, n._pos = [b, 0, 0], n._node && (n._pannerAttr.panningModel = "equalpower", (!n._panner || !n._panner.pan) && e(n, q), "spatial" === q ? n._panner.setPosition(b, 0, 0) : n._panner.pan.value = b), d._emit("stereo", n._id);
                else return n._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, q) {
        var j = this;
        if (!j._webAudio) return j;
        if ("loaded" !== j._state) return j._queue.push({
            event: "pos",
            action: function() {
                j.pos(b, c, d, q)
            }
        }), j;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof q)
            if ("number" === typeof b) j._pos = [b, c, d];
            else return j._pos;
        for (var m = j._getSoundIds(q), n = 0; n < m.length; n++) {
            var r = j._soundById(m[n]);
            if (r)
                if ("number" === typeof b) r._pos = [b, c, d], r._node && ((!r._panner || r._panner.pan) && e(r, "spatial"), r._panner.setPosition(b, c, d)), j._emit("pos", r._id);
                else return r._pos
        }
        return j
    };
    Howl.prototype.orientation = function(b, c, d, q) {
        var j = this;
        if (!j._webAudio) return j;
        if ("loaded" !== j._state) return j._queue.push({
            event: "orientation",
            action: function() {
                j.orientation(b, c, d, q)
            }
        }), j;
        c = "number" !== typeof c ? j._orientation[1] : c;
        d = "number" !== typeof d ? j._orientation[2] : d;
        if ("undefined" === typeof q)
            if ("number" === typeof b) j._orientation = [b, c, d];
            else return j._orientation;
        for (var m = j._getSoundIds(q), n = 0; n < m.length; n++) {
            var r = j._soundById(m[n]);
            if (r)
                if ("number" === typeof b) r._orientation = [b, c, d], r._node && (r._panner || (r._pos || (r._pos = j._pos || [0, 0, -0.5]), e(r, "spatial")), r._panner.setOrientation(b, c, d)), j._emit("orientation", r._id);
                else return r._orientation
        }
        return j
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var q = 0; q < d.length; q++)
            if (b = this._soundById(d[q])) {
                var j = b._pannerAttr,
                    j = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : j.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : j.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : j.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : j.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : j.maxDistance,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : j.panningModel,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : j.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : j.rolloffFactor
                    },
                    m = b._panner;
                m ? (m.coneInnerAngle = j.coneInnerAngle, m.coneOuterAngle = j.coneOuterAngle, m.coneOuterGain = j.coneOuterGain, m.distanceModel = j.distanceModel, m.maxDistance = j.maxDistance, m.panningModel = j.panningModel, m.refDistance = j.refDistance, m.rolloffFactor = j.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var l = ig.$new("canvas");
            l.width = b.width;
            l.height = b.height;
            var p = l.getContext("2d");
            ig.System.SCALE.CRISP(l, p);
            var A = ig.getVendorAttribute(p, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(p, "getImageDataHD");
            var C = b.width / A,
                F = b.height / A;
            l.width = Math.ceil(C);
            l.height = Math.ceil(F);
            p.drawImage(b, 0, 0, C, F);
            return 1 === A ? p.getImageData(c, d, e, g) : p.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var l = d.requires[g];
                    ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    l = ig._loadQueue[c].requires;
                    for (g = 0; g < l.length; g++) d = ig.modules[l[g]], (!d || !d.loaded) && e.push(l[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var l = c++;
            d[l] = !0;
            var n = function() {
                d[l] && (b.requestAnimationFrame(n, g), e())
            };
            b.requestAnimationFrame(n, g);
            return l
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        l = 0;
    b.ig.Class = function() {};
    var p = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var g = c.apply(this, arguments);
                this.parent = e;
                return g
            }
        }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var m = this.prototype;
        e = !0;
        var n = new this;
        e = !1;
        for (var r in c) n[r] = "function" == typeof c[r] && "function" == typeof m[r] && g.test(c[r]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = m[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(r, c[r]) : c[r];
        d.prototype = n;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = p;
        d.classId = n.classId = ++l;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var l = g.getContext("2d"), p = l.getImageData(0, 0, d, e), q = 0; q < e; q++)
                for (var j = 0; j < d; j++) {
                    var m = 4 * (Math.floor(q / b) * this.width + Math.floor(j / b)),
                        n = 4 * (q * d + j);
                    p.data[n] = c.data[m];
                    p.data[n + 1] = c.data[m + 1];
                    p.data[n + 2] = c.data[m + 2];
                    p.data[n + 3] = c.data[m + 3]
                }
            l.putImageData(p, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, l) {
            if (this.loaded) {
                var p = ig.system.scale;
                g = (g ? g : this.width) * p;
                l = (l ? l : this.height) * p;
                ig.system.context.drawImage(this.data, d ? d * p : 0, e ? e * p : 0, g, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, l);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, l, p) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var q = ig.system.scale,
                    j = Math.floor(e * q),
                    m = Math.floor(g * q),
                    n = l ? -1 : 1,
                    r = p ? -1 : 1;
                if (l || p) ig.system.context.save(), ig.system.context.scale(n, r);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * q, Math.floor(d * e / this.width) * g * q, j, m, ig.system.getDrawPos(b) * n - (l ? j : 0), ig.system.getDrawPos(c) * r - (p ? m : 0), j, m);
                (l || p) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (l = 0; l < b.length; l++) e = b.charCodeAt(l), c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                l = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, l);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var l = 4 * g + 3;
                127 < c.data[l] ? e++ : 128 > c.data[l] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var l = new Audio(e);
            d && (l.addEventListener("canplaythrough", function q(c) {
                l.removeEventListener("canplaythrough", q, !1);
                d(b, !0, c)
            }, !1), l.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            l.preload = "auto";
            l.load();
            this.clips[b] = [l];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return l
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, g, l, p) {
        ig.system = new ig.System(b, d, e, g, l || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(p || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        ignorePause: !0,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
        },
        trace: function(b, c, g, l, p, q) {
            var j = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                m = Math.ceil(Math.max(Math.abs(g), Math.abs(l)) / this.tilesize);
            if (1 < m)
                for (var n = g / m, r = l / m, s = 0; s < m && (n || r) && !(this._traceStep(j,
                    b, c, n, r, p, q, g, l, s), b = j.pos.x, c = j.pos.y, j.collision.x && (g = n = 0), j.collision.y && (l = r = 0), j.collision.slope); s++);
            else this._traceStep(j, b, c, g, l, p, q, g, l, 0);
            return j
        },
        _traceStep: function(b, c, g, l, p, q, j, m, n, r) {
            b.pos.x += l;
            b.pos.y += p;
            var s = 0;
            if (l) {
                var x = 0 < l ? q : 0,
                    A = 0 > l ? this.tilesize : 0,
                    s = Math.max(Math.floor(g / this.tilesize), 0),
                    C = Math.min(Math.ceil((g + j) / this.tilesize), this.height);
                l = Math.floor((b.pos.x + x) / this.tilesize);
                var F = Math.floor((c + x) / this.tilesize);
                if (0 < r || l == F || 0 > F || F >= this.width) F = -1;
                if (0 <= l && l < this.width)
                    for (var B =
                        s; B < C && !(-1 != F && (s = this.data[B][F], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, g, m, n, q, j, F, B))); B++)
                        if (s = this.data[B][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, g, m, n, q, j, l, B)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = s;
                            c = b.pos.x = l * this.tilesize - x + A;
                            m = 0;
                            break
                        }
            }
            if (p) {
                x = 0 < p ? j : 0;
                p = 0 > p ? this.tilesize : 0;
                s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                A = Math.min(Math.ceil((b.pos.x + q) / this.tilesize), this.width);
                B = Math.floor((b.pos.y + x) / this.tilesize);
                C = Math.floor((g + x) / this.tilesize);
                if (0 < r || B == C || 0 > C || C >= this.height) C = -1;
                if (0 <= B && B < this.height)
                    for (l = s; l < A && !(-1 != C && (s = this.data[C][l], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, g, m, n, q, j, l, C))); l++)
                        if (s = this.data[B][l], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, g, m, n, q, j, l, B)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = s;
                            b.pos.y = B * this.tilesize - x + p;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, l, p, q, j, m, n, r) {
            var s = this.tiledef[c];
            if (!s) return !1;
            c = (s[2] -
                s[0]) * this.tilesize;
            var x = (s[3] - s[1]) * this.tilesize,
                A = s[4];
            j = g + p + (0 > x ? j : 0) - (n + s[0]) * this.tilesize;
            m = l + q + (0 < c ? m : 0) - (r + s[1]) * this.tilesize;
            if (0 < c * m - x * j) {
                if (0 > p * -x + q * c) return A;
                n = Math.sqrt(c * c + x * x);
                r = x / n;
                n = -c / n;
                var C = j * r + m * n,
                    s = r * C,
                    C = n * C;
                if (s * s + C * C >= p * p + q * q) return A || 0.5 > c * (m - q) - x * (j - p);
                b.pos.x = g + p - s;
                b.pos.y = l + q - C;
                b.collision.slope = {
                    x: c,
                    y: x,
                    nx: r,
                    ny: n
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, l) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + l
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var l = 0; l < d; l++) this.preRenderedChunks[g][l] = this.preRenderChunk(l, g, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, g == e - 1 ? c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                l = e / this.tilesize / ig.system.scale + 1,
                p = b * this.chunkSize / ig.system.scale % this.tilesize,
                q = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var j = ig.$new("canvas");
            j.width = d;
            j.height = e;
            j.retinaResolutionEnabled = !1;
            e = j.getContext("2d");
            ig.System.scaleMode(j, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var m = 0; m < l; m++)
                    if (e + b < this.width && m + c < this.height) {
                        var n = this.data[m + c][e + b];
                        n && this.tiles.drawTile(e * this.tilesize - p, m * this.tilesize - q, n - 1, this.tilesize)
                    }
            ig.system.context = d;
            return j
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                p = this.preRenderedChunks[0].length,
                q = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, p), l = Math.min(l, q));
            for (var j = 0; e < l; e++) {
                for (var m = 0, n = d; n < g; n++) {
                    var r = this.preRenderedChunks[e % q][n % p],
                        s = -b + n * this.chunkSize - m,
                        x = -c + e * this.chunkSize - j;
                    ig.system.context.drawImage(r, s, x);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, x, this.chunkSize, this.chunkSize));
                    this.repeat && r.width < this.chunkSize && s + r.width < ig.system.realWidth && (m += this.chunkSize - r.width, g++)
                }
                this.repeat && r.height < this.chunkSize && x + r.height < ig.system.realHeight && (j += this.chunkSize - r.height, l++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, p = -g - this.tilesize, g = ig.system.width + this.tilesize - g, q = ig.system.height + this.tilesize - l, j = -1, l = -l - this.tilesize; l < q; j++, l += this.tilesize) {
                var m = j + e;
                if (m >= this.height || 0 > m) {
                    if (!this.repeat) continue;
                    m = (m % this.height + this.height) % this.height
                }
                for (var n = -1, r = p; r < g; n++, r += this.tilesize) {
                    b = n + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[m][b])(c = this.anims[b -
                        1]) ? c.draw(r, l) : this.tiles.drawTile(r, l, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        paused: !1,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.paused ? this.updateIgnorePauseEntities() : this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        updateIgnorePauseEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c.ignorePause && !c._killed && c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        drawIgnorePauseEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].ignorePause && this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, p = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, q = Math.floor(d.pos.x / this.cellSize); q <
                        l; q++)
                        for (var j = g; j < p; j++)
                            if (b[q])
                                if (b[q][j]) {
                                    for (var m = b[q][j], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
                                    m.push(d)
                                } else b[q][j] = [d];
                else b[q] = {}, b[q][j] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x + c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("Serving Universal Version...")
            } else console.log("Serving Universal Version...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        },
        magnitude: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        unitVector: function() {
            var b = this.magnitude();
            return 0 != b ? new Vector2(this.x / b, this.y / b) : new Vector2(0, 0)
        },
        add: function(b) {
            return new Vector2(this.x + b.x, this.y + b.y)
        },
        subtract: function(b) {
            return new Vector2(this.x - b.x, this.y - b.y)
        },
        dotProduct: function(b) {
            return this.x * b.x + this.y * b.y
        },
        addByScalar: function(b) {
            return new Vector2(this.x + b, this.y + b)
        },
        subtractByScalar: function(b) {
            return new Vector2(this.x - b, this.y - b)
        },
        multiplyByScalar: function(b) {
            return new Vector2(this.x * b, this.y * b)
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !1,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(960, 540)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll2: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd3: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: g
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    p = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    q = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    p = Math.floor(p * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    q = e.left,
                    j = e.top,
                    l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    p = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    q = Math.floor(q + l * c) + "px",
                    p = Math.floor(j + p * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: q,
                    top: p,
                    width: g,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: g
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                //ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                //ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                //ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                //ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            //if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug && console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var l = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (l = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (l = b));
                var p = new XMLHttpRequest;
                p.open("GET", l, !0);
                p.responseType = "arraybuffer";
                p.onload = function() {
                    this.webaudio.context.decodeAudioData(p.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + l + '".')
                    })
                }.bind(this);
                p.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var l = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", l, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", l, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this.webaudio ? !this.webaudio.gainNode ? 0 : this.webaudio.gainNode.gain.value : this.audio ? this.audio.volume : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            click: {
                path: "media/audio/sfx/click"
            },
            kick: {
                path: "media/audio/sfx/kick-ball"
            },
            wonce: {
                path: "media/audio/sfx/whistle-once"
            },
            wfoul: {
                path: "media/audio/sfx/whistle-foul"
            },
            wfulltime: {
                path: "media/audio/sfx/whistle-fulltime"
            },
            goal: {
                path: "media/audio/sfx/goal"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 14.811,
                startMp3: 0,
                endMp3: 14.811
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating Sound Handler");
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                loop: !0
            }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                    ig.soundHandler.forcelooped = !1
                }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = c
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return this.tempData[b]
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        remove: function() {
            delete this.tempData.key
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed : 1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y += isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var l = b.touches[g];
                        l && this.touches.push({
                            x: (l.clientX - e.left) / c,
                            y: (l.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var l = b.touches[g];
                    l && this.touches.push({
                        x: (l.clientX - e.left) / c,
                        y: (l.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var l = b[g], p = "undefined" != typeof l.identifier ? l.identifier : "undefined" != typeof l.pointerId ? l.pointerId : 1, q = (l.clientX - e.left) / c, l = (l.clientY - e.top) / d, j = 0; j < this.touches.length; ++j) this.touches[j].identifier == p && this.touches.splice(j, 1);
                    this.touches.push({
                        x: q,
                        y: l,
                        identifier: p
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, l = 0; l < this.touches.length; ++l)
                    if (this.touches[l].identifier == g) {
                        var p = (b.clientY - e.top) / d;
                        this.touches[l].x = (b.clientX - e.left) / c;
                        this.touches[l].y = p
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.fake-storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this._supportsLocalStorage() ? this.storage = new ig.Storage : (console.log("Local storage doesn't supported, using fake storage."), this.storage = new ig.FakeStorage)
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, g) {
            return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        background: new ig.Image("media/graphics/splash/background.png"),
        barEmpty: new ig.Image("media/graphics/splash/bar-empty.png"),
        barLoad: new ig.Image("media/graphics/splash/bar-load.png"),
        ball: new ig.Image("media/graphics/splash/ball.png"),
        ballTrace: new ig.Image("media/graphics/splash/ball-trace.png"),
        resources: [new ig.Image("media/graphics/game/buttons/close.png"), new ig.Image("media/graphics/game/buttons/confirm.png"), new ig.Image("media/graphics/game/buttons/instruction.png"), new ig.Image("media/graphics/game/buttons/more-games.png"), new ig.Image("media/graphics/game/buttons/next.png"), new ig.Image("media/graphics/game/buttons/ok.png"), new ig.Image("media/graphics/game/buttons/play-menu.png"), new ig.Image("media/graphics/game/buttons/play-settings.png"), new ig.Image("media/graphics/game/buttons/play.png"), new ig.Image("media/graphics/game/buttons/prev.png"), new ig.Image("media/graphics/game/buttons/replay.png"), new ig.Image("media/graphics/game/buttons/settings.png"), new ig.Image("media/graphics/game/buttons/shadow.png"), new ig.Image("media/graphics/game/instructions/1.png"), new ig.Image("media/graphics/game/instructions/2.png"), new ig.Image("media/graphics/game/instructions/3.png"), new ig.Image("media/graphics/game/menu/background.png"), new ig.Image("media/graphics/game/menu/logo.png"), new ig.Image("media/graphics/game/play/avatar-frame-on.png"), new ig.Image("media/graphics/game/play/avatars.png"), new ig.Image("media/graphics/game/play/background.png"), new ig.Image("media/graphics/game/play/ball-shadow.png"), new ig.Image("media/graphics/game/play/ball.png"), new ig.Image("media/graphics/game/play/big-ball.png"), new ig.Image("media/graphics/game/play/field.png"), new ig.Image("media/graphics/game/play/goal-left.png"), new ig.Image("media/graphics/game/play/goal-right.png"), new ig.Image("media/graphics/game/play/light-area.png"), new ig.Image("media/graphics/game/play/light-ball.png"), new ig.Image("media/graphics/game/play/light-select.png"), new ig.Image("media/graphics/game/play/point.png"), new ig.Image("media/graphics/game/play/score-board-left.png"), new ig.Image("media/graphics/game/play/score-board-right.png"), new ig.Image("media/graphics/game/play/score-board.png"), new ig.Image("media/graphics/game/play/shoot-direction.png"), new ig.Image("media/graphics/game/player/ar.png"), new ig.Image("media/graphics/game/player/au.png"), new ig.Image("media/graphics/game/player/ba.png"), new ig.Image("media/graphics/game/player/be.png"), new ig.Image("media/graphics/game/player/br.png"), new ig.Image("media/graphics/game/player/ch.png"), new ig.Image("media/graphics/game/player/ci.png"), new ig.Image("media/graphics/game/player/cl.png"), new ig.Image("media/graphics/game/player/cm.png"), new ig.Image("media/graphics/game/player/co.png"), new ig.Image("media/graphics/game/player/cr.png"), new ig.Image("media/graphics/game/player/de.png"), new ig.Image("media/graphics/game/player/ec.png"), new ig.Image("media/graphics/game/player/er.png"), new ig.Image("media/graphics/game/player/fr.png"), new ig.Image("media/graphics/game/player/gb.png"), new ig.Image("media/graphics/game/player/gh.png"), new ig.Image("media/graphics/game/player/gr.png"), new ig.Image("media/graphics/game/player/hn.png"), new ig.Image("media/graphics/game/player/hr.png"), new ig.Image("media/graphics/game/player/ir.png"), new ig.Image("media/graphics/game/player/it.png"), new ig.Image("media/graphics/game/player/jp.png"), new ig.Image("media/graphics/game/player/kr.png"), new ig.Image("media/graphics/game/player/mx.png"), new ig.Image("media/graphics/game/player/ng.png"), new ig.Image("media/graphics/game/player/nl.png"), new ig.Image("media/graphics/game/player/pt.png"), new ig.Image("media/graphics/game/player/ru.png"), new ig.Image("media/graphics/game/player/sp.png"), new ig.Image("media/graphics/game/player/us.png"), new ig.Image("media/graphics/game/player/uy.png"), new ig.Image("media/graphics/game/popup/board-1.png"), new ig.Image("media/graphics/game/popup/board-2.png"), new ig.Image("media/graphics/game/popup/board-ball.png"), new ig.Image("media/graphics/game/popup/light-big.png"), new ig.Image("media/graphics/game/popup/light-small.png"), new ig.Image("media/graphics/game/popup/scroll-bar.png"), new ig.Image("media/graphics/game/popup/scroll-control.png"), new ig.Image("media/graphics/game/popup/slider-bar.png"), new ig.Image("media/graphics/game/popup/slider-fill.png"), new ig.Image("media/graphics/game/popup/slider-knob.png"), new ig.Image("media/graphics/game/popup/title-1.png"), new ig.Image("media/graphics/game/popup/title-2.png"), new ig.Image("media/graphics/game/text/confirmation.png"), new ig.Image("media/graphics/game/text/congratulations.png"), new ig.Image("media/graphics/game/text/gameover.png"), new ig.Image("media/graphics/game/text/instructions.png"), new ig.Image("media/graphics/game/text/select-countries.png"), new ig.Image("media/graphics/game/text/settings.png"), new ig.Image("media/graphics/generic-ad/dark/close-button.png"), new ig.Image("media/graphics/generic-ad/light/close-button.png"), new ig.Image("media/graphics/misc/invisible.png"), new ig.Image("media/graphics/opening/kitty.png"), new ig.Image("media/graphics/opening/kittytitle.png"), new ig.Image("media/graphics/opening/m_icon.png"), new ig.Image("media/graphics/opening/shield.png"), new ig.Image("media/graphics/opening/title.png"), new ig.Image("media/graphics/orientate/portrait.jpg"), new ig.Image("media/graphics/orientate/scroll_down.png"), new ig.Image("media/graphics/overlays/close-button.png"), new ig.Image("media/graphics/overlays/close-button2.png"), new ig.Image("media/graphics/splash/background.png"), new ig.Image("media/graphics/splash/ball-trace.png"), new ig.Image("media/graphics/splash/ball.png"), new ig.Image("media/graphics/splash/bar-empty.png"), new ig.Image("media/graphics/splash/bar-load.png"), new ig.Image("media/graphics/splash/cover-start.png")],
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll");
            this.context = ig.system.context
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            document.URL.indexOf("localhost");
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this.context.clearRect(0, 0, ig.system.width, ig.system.height);
            this.context.font = "50px ragtime-bold";
            this.context.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -100, -100);
            this.background.draw(0, 0);
            var b = ig.system.width / 2 - this.barEmpty.width / 2,
                c = ig.system.height - 5 * this.barEmpty.height;
            this.barEmpty.draw(b, c);
            var b = ig.system.width / 2 - this.barLoad.width / 2,
                c = c + 6,
                d = this.barLoad.width * this.status,
                e = this.barLoad.height;
            this.barLoad.draw(b, c, 0, 0, d, e);
            b -= this.ball.width / 2;
            c += e / 2 - this.ball.height / 2;
            this.ball.draw(b + d, c);
            b -= this.ballTrace.width - 24;
            c += this.ball.height / 2 - this.ballTrace.height / 2;
            this.ballTrace.draw(b + d, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            l = {},
            p = {},
            q = 0,
            j = !1,
            m = !1,
            n = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            n = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            q = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            m = !0;
            j = new ig.Timer;
            for (var d in c) this.initEnd(d, c, l);
            for (d in l) this.initStart(d, l, b, g), this.initDelta(d, p, b, l)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!m) return !1;
            if (this.delay) {
                if (j.delta() < this.delay) return;
                this.delay = 0;
                j.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (j.delta() + q) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in p) this.propUpdate(property, b, g, p, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    n && n.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    q = 0;
                    j.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, l);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(l, d);
                    for (property in l) this.initDelta(property, p, b, l);
                    q = 0;
                    j.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            q += j.delta()
        };
        this.resume = function() {
            this.paused = !1;
            j.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, q += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("Debug Mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            g = $("#" + g.id);
            g.css("float", "left");
            g.css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    p = window.innerWidth /
                    mobileWidth;
                g.css("left", this.pos.x * p);
                g.css("top", this.pos.y * l);
                g.css("width", this.size.x * p);
                g.css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, p = h / 2 - destH / 2, console.log(l, p), g.css("left", l + this.pos.x * multiplier), g.css("top", p + this.pos.y * multiplier), g.css("width", this.size.x * multiplier), g.css("height", this.size.y * multiplier);
            e ? g.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : g.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button-shadow").requires("impact.entity").defines(function() {
    EntityButtonShadow = ig.Entity.extend({
        index: null,
        button: null,
        image: new ig.Image("media/graphics/game/buttons/shadow.png"),
        scale: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.zIndex = this.button.zIndex - 1;
            this.size.x = this.image.width;
            this.size.y = this.image.height
        },
        draw: function() {
            this.parent();
            if (this.button.showed) {
                if (this.button.pressed) {
                    this.scale = 0.7;
                    var b = this.size.x * this.scale,
                        c = this.size.y * this.scale,
                        d = this.button.pos.x + this.button.size.x / 2 - b / 2,
                        e = this.button.pos.y + this.button.size.y / 2 - c / 2
                } else this.scale = this.button.tweeningPercent, b = this.size.x * this.scale, c = this.size.y * this.scale, d = this.button.pos.x + this.button.size.x / 2 - b / 2, e = this.button.pos.y + this.button.size.y / 2 - c / 2;
                this.context.drawImage(this.image.data, d, e, b, c)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector", "game.entities.buttons.button-shadow").defines(function() {
    EntityButton = ig.Entity.extend({
        data: _STRINGS.Game.Data.Buttons,
        shadow: !1,
        shadowImage: new ig.Image("media/graphics/game/buttons/shadow.png"),
        caller: null,
        index: null,
        type: ig.Entity.TYPE.A,
        sheet: {
            x: 0,
            y: 0
        },
        size: {
            x: 0,
            y: 0
        },
        offset: {
            x: 0,
            y: 0
        },
        animSheet: null,
        zIndex: 2,
        enabled: !1,
        showed: !1,
        showOnInit: !0,
        align: null,
        tweenType: "show",
        tweening: !1,
        tweeningPercent: 0,
        tweenCallback: null,
        pressed: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.initIndex();
            this.initPos();
            this.initAnims()
        },
        initIndex: function() {
            null !== this.index && (this.sheet = this.data[this.index].sheet, this.size = this.data[this.index].size, this.offset = this.data[this.index].offset)
        },
        initAnims: function() {
            this.image = new ig.Image("media/graphics/game/buttons/" + this.index + ".png");
            this.data[this.index].shadow && (this.shadow = ig.game.spawnEntity(EntityButtonShadow, -1E3, -1E3, {
                button: this
            }));
            this.showOnInit && this.show()
        },
        initPos: function() {
            if (this.align) {
                var b = this.align.split(" ");
                "center" === b[0] ? this.pos.x -= this.size.x / 2 : "right" === b[0] && (this.pos.x -= this.size.x);
                "middle" === b[1] ? this.pos.y -= this.size.y / 2 : "bottom" === b[1] && (this.pos.y -= this.size.y)
            }
            this.manager && (this.zIndex = this.manager.zIndex + 1, ig.game.sortEntitiesDeferred())
        },
        draw: function() {
            this.parent();
            this.enabled && (this.pressed ? (this.tweeningPercent = 0.9, this.drawTween()) : this.drawIdle());
            this.showed && this.tweening && this.drawTween()
        },
        drawIdle: function() {
            this.image.draw(this.pos.x -
                this.offset.x, this.pos.y - this.offset.y)
        },
        drawTween: function() {
            var b = this.image.width * this.tweeningPercent,
                c = this.image.height * this.tweeningPercent;
            this.context.drawImage(this.image.data, this.pos.x - this.offset.x + (this.image.width - b) / 2, this.pos.y - this.offset.y + (this.image.height - c) / 2, b, c)
        },
        clicked: function() {
            this.enabled && !this.tweening && (this.pressed = !0)
        },
        release: function() {
            this.pressed && (this.pressed = !1)
        },
        released: function() {
            this.pressed && ig.soundHandler.sfxPlayer.play("click");
            this.release()
        },
        releasedOutside: function() {
            this.release()
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        show: function() {
            this.showed || (this.zIndex = this.manager.zIndex + 1, ig.game.sortEntitiesDeferred(), this.showed = !0, this.startTween(this.enable))
        },
        hide: function() {
            this.showed && (this.disable(), this.zIndex = -1, ig.game.sortEntitiesDeferred(), this.showed = !1)
        },
        moveOut: function(b) {
            var c = ig.system.width / 2 + this.size.x / 2,
                d = this.pos.x;
            this.tweening = !0;
            this.tween({
                pos: {
                    x: b ? d - c : d + c
                }
            }, 0.5, {
                onComplete: function() {
                    this.hide();
                    this.tweening = !1
                }.bind(this)
            }).start()
        },
        moveIn: function() {
            this.tween({
                pos: {
                    x: ig.system.width / 2 - this.size.x / 2
                }
            }, 0.5, {
                onComplete: function() {
                    this.show()
                }.bind(this)
            }).start()
        },
        startTween: function(b) {
            this.tweening = !0;
            this.tweeningPercent = 0;
            this.tweenCallback = b;
            this.tween({
                tweeningPercent: 1
            }, 0.7, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: this.onTweenCompleted.bind(this)
            }).start()
        },
        onTweenCompleted: function() {
            this.tweening = !1;
            "function" == typeof this.tweenCallback && this.tweenCallback()
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b, c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var l = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(l, "href", c), ig.domHandler.attr(l, "target", "_blank")) : ig.domHandler.attr(l, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var p = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    q = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), p = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", p = Math.floor(p + this.pos.y * d) + "px", q = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, {
                "float": "left",
                position: "absolute",
                left: e,
                top: p,
                width: q,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(l, c);
            ig.domHandler.appendChild(g, l);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("Settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        index: "more-games",
        zIndex: 3,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        image: null,
        animP: 0,
        animate: !1,
        init: function(b, c, d) {
        
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            this.parent()
        },
        show: function() {
            this.parent();
            if (this.clickableLayer) {
                var b = ig.domHandler.getElementById("#" + this.div_layer_name);
                ig.domHandler.show(b)
            }
        },
        hide: function() {
            this.parent();
            if (this.clickableLayer) {
                var b = ig.domHandler.getElementById("#" + this.div_layer_name);
                ig.domHandler.hide(b)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        size: {
            x: 5,
            y: 5
        },
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        followMouse: !0,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? (null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null);
            if (this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var l = w / 2 - destW / 2,
                p = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", l + this.pos.x * multiplier), $("#" + g.id).css("top", p + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.menu.logo").requires("impact.entity").defines(function() {
    EntityLogo = ig.Entity.extend({
        image: new ig.Image("media/graphics/game/menu/logo.png"),
        pos: {
            x: 0,
            y: 0
        },
        size: {
            x: 633,
            y: 244
        },
        spawnPos: {
            x: 0,
            y: 0
        },
        targetPos: {
            x: 164,
            y: 37
        },
        zIndex: 5,
        scale: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.spawnPos = this.pos;
            this.context = ig.system.context
        },
        draw: function() {
            this.parent();
            if (1 == this.scale) this.image.draw(this.pos.x, this.pos.y);
            else {
                var b = this.image.width * this.scale;
                this.context.drawImage(this.image.data, this.pos.x + (this.image.width - b) / 2, this.pos.y, b, this.image.height * this.scale)
            }
        },
        tweenIn: function(b) {
            this.tween({
                pos: this.targetPos
            }, 1, {
                easing: ig.Tween.Easing.Bounce.EaseOut,
                onComplete: b
            }).start()
        },
        tweenOut: function(b) {
            this.tween({
                pos: this.spawnPos
            }, 1, {
                easing: ig.Tween.Easing.Bounce.EaseOut,
                onComplete: b
            }).start()
        },
        shrink: function(b) {
            this.tween({
                scale: 0.5
            }, 0.5, {
                onComplete: b
            }).start()
        },
        expand: function(b) {
            this.tween({
                scale: 1
            }, 0.5, {
                onComplete: b
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        manager: null,
        index: null,
        zIndex: 3,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            if (this.enabled && this.pressed) this.manager.onButtonClicked(this.index);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-instruction").requires("game.entities.buttons.button").defines(function() {
    EntityButtonInstruction = EntityButton.extend({
        manager: null,
        index: null,
        zIndex: 3,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            if (this.enabled && this.pressed) this.manager.onButtonClicked(this.index);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-settings").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSettings = EntityButton.extend({
        manager: null,
        index: null,
        zIndex: 3,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            if (this.enabled && this.pressed) this.manager.onButtonClicked(this.index);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.buttons").requires("impact.entity", "game.entities.buttons.button-play", "game.entities.buttons.button-instruction", "game.entities.buttons.button-settings", "game.entities.buttons.button-more-games").defines(function() {
    EntityButtons = ig.Entity.extend({
        required: ["play", "instruction", "settings", "more-games"],
        buttons: {},
        zIndex: 2,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.spawnButtons()
        },
        draw: function() {
            this.parent()
        },
        spawnButtons: function() {
            var b = this.pos.y,
                c = 62,
                d;
            _SETTINGS.MoreGames.Enabled || (this.required = ["play", "instruction", "settings"], c = 4 * c / 3);
            for (d = 0; d < this.required.length; d++) {
                var e = this.required[d],
                    g = "EntityButton" + this.toTitleCase(e.replace(/-/g, " ")).replace(/\s/g, "");
                this.buttons[e] = ig.game.spawnEntity(g, this.pos.x, b, {
                    manager: this,
                    index: e,
                    align: "center"
                });
                b += c
            }
        },
        toTitleCase: function(b) {
            return b.replace(/\w\S*/g, function(b) {
                return b.charAt(0).toUpperCase() + b.substr(1).toLowerCase()
            })
        },
        onButtonClicked: function(b) {
            this.removeButtons();
            this.manager.onButtonClick(b)
        },
        removeButtons: function() {
            var b = Math.floor(2 * Math.random()) ? !0 : !1,
                c;
            for (c in this.buttons) this.buttons.hasOwnProperty(c) && (this.buttons[c].moveOut(b), b = !b)
        },
        showButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].moveIn()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-close").requires("game.entities.buttons.button").defines(function() {
    EntityButtonClose = EntityButton.extend({
        manager: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.manager.zIndex + 1;
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            this.pressed && this.enabled && this.manager.close();
            this.parent()
        },
        releasedOutside: function() {
            this.enabled && this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.popup").requires("impact.entity", "game.entities.buttons.button-close").defines(function() {
    EntityPopup = ig.Entity.extend({
        data: {
            title: {
                "0": new ig.Image("media/graphics/game/popup/title-1.png"),
                1: new ig.Image("media/graphics/game/popup/title-2.png")
            },
            board: {
                "0": new ig.Image("media/graphics/game/popup/board-1.png"),
                1: new ig.Image("media/graphics/game/popup/board-2.png")
            }
        },
        titleIndex: 1,
        boardIndex: 0,
        titleImage: null,
        boardImage: null,
        titleScale: 0,
        boardScale: 0,
        pos: {
            x: 0,
            y: 0
        },
        size: {
            x: 505,
            y: 348
        },
        offset: {
            x: 4,
            y: 4
        },
        zIndex: 6,
        level: null,
        overlay: !1,
        align: null,
        showed: !1,
        tweening: !1,
        closeButton: null,
        titleTextImage: null,
        TITLE_MARGIN_TOP: 22,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.setImages();
            this.initPos();
            this.showWindow()
        },
        setImages: function() {
            this.titleImage = this.data.title[this.titleIndex];
            this.boardImage = this.data.board[this.boardIndex];
            this.size.x = this.boardImage.width - 2 * this.offset.x;
            this.size.y = this.boardImage.height - 2 * this.offset.y
        },
        initPos: function() {
            if (this.align) {
                var b = this.align.split(" ");
                "center" === b[0] && (this.pos.x = ig.system.width / 2 - this.size.x / 2);
                "middle" === b[1] && (this.pos.y = ig.system.height / 2 - this.size.y / 2)
            }
        },
        draw: function() {
            this.drawModal();
            this.parent();
            if (this.showed) d = this.pos.x - this.offset.x, e = this.pos.y - this.offset.y, this.boardImage.draw(d, e), d = this.pos.x + this.size.x / 2 - this.titleImage.width / 2, e = this.pos.y - this.TITLE_MARGIN_TOP, this.titleImage.draw(d, e), null !== this.titleTextImage && (d = this.pos.x + this.size.x / 2 - this.titleTextImage.width / 2, this.titleTextImage.draw(d, e + 6));
            else if (this.tweening) {
                var b = this.boardImage.width,
                    c = this.boardImage.height * this.boardScale,
                    d = this.pos.x - this.offset.x,
                    e = this.pos.y - this.offset.y;
                0 < c && this.context.drawImage(this.boardImage.data, 0, 0, b, c, d, e, b, c);
                b = this.titleImage.width * this.titleScale;
                c = this.titleImage.height;
                d = this.pos.x + this.size.x / 2 - b / 2;
                e = this.pos.y - this.TITLE_MARGIN_TOP;
                b && this.context.drawImage(this.titleImage.data, d, e, b, c)
            }
        },
        drawModal: function() {
            this.overlay && (this.context.save(), this.context.fillStyle = "#000000", this.context.globalAlpha = 0.5, 0 < ig.system.height * this.boardScale && this.context.fillRect(0, 0, ig.system.width, ig.system.height * this.boardScale), this.context.globalAlpha = 1, this.context.restore())
        },
        showWindow: function() {
            1 > this.titleScale ? (this.zIndex = 99, ig.game.sortEntitiesDeferred(), this.tweening = !0, this.tween({
                titleScale: 1
            }, 0.5, {
                onComplete: this.showWindow.bind(this)
            }).start()) : 1 > this.boardScale ? (this.tweening = !0, this.tween({
                boardScale: 1
            }, 0.25, {
                onComplete: this.showWindow.bind(this)
            }).start()) : (this.tweening = !1, this.showed = !0, this.showContent())
        },
        showContent: function() {
            this.showCloseButton()
        },
        showCloseButton: function() {
            null === this.closeButton ? this.closeButton = ig.game.spawnEntity(EntityButtonClose, this.pos.x + this.size.x - 5, this.pos.y, {
                manager: this,
                index: "close",
                align: "center middle"
            }) : this.closeButton.show()
        },
        hideWindow: function() {
            this.showed ? (this.hideContent(), this.showed = !1, this.tweening = !0, this.hideWindow()) : 0 < this.boardScale ? this.tween({
                boardScale: 0
            }, 0.25, {
                onComplete: this.hideWindow.bind(this)
            }).start() : 0 < this.titleScale && this.tween({
                titleScale: 0
            }, 0.25, {
                onComplete: function() {
                    this.tweening = !1;
                    this.zIndex = -1;
                    ig.game.sortEntitiesDeferred();
                    this.manager.onDialogClose()
                }.bind(this)
            }).start()
        },
        close: function() {
            this.hideWindow()
        },
        hideContent: function() {
            this.closeButton.hide()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-team").requires("impact.entity").defines(function() {
    EntityButtonTeam = ig.Entity.extend({
        index: null,
        image: null,
        pos: {
            x: 0,
            y: 0
        },
        size: {
            x: 52,
            y: 52
        },
        offset: {
            x: 4,
            y: 4
        },
        zIndex: 1,
        enabled: !1,
        pressed: !1,
        type: ig.Entity.TYPE.A,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.image = new ig.Image("media/graphics/game/player/" + this.index + ".png")
        },
        draw: function() {
            this.parent();
            if (this.enabled)
                if (this.pressed) {
                    var b = 0.9 * this.image.width,
                        c = 0.9 * this.image.height,
                        d = this.pos.x - this.offset.x + (this.image.width - b) / 2,
                        e = this.pos.y - this.offset.y + (this.image.height - c) / 2;
                    this.context.drawImage(this.image.data, d, e, b, c)
                } else d = this.pos.x - this.offset.x, e = this.pos.y - this.offset.y, this.image.draw(d, e)
        },
        enable: function() {
            this.enabled = !0;
            this.zIndex = this.manager.zIndex + 1;
            ig.game.sortEntitiesDeferred()
        },
        disable: function() {
            this.enabled = !1;
            this.zIndex = 1;
            ig.game.sortEntitiesDeferred()
        },
        clicked: function() {
            this.enabled && (this.pressed = !0)
        },
        released: function() {
            this.enabled && this.pressed &&
                (ig.soundHandler.sfxPlayer.play("click"), this.pressed = !1, ig.game.selectedTeam = this.index, ig.game.selectedFormation = ig.game.getRandomFormation(), ig.game.loadLevel(LevelPlay))
        },
        releasedOutside: function() {
            this.enabled && this.pressed && (this.pressed = !1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-in-game-button").requires("game.entities.buttons.button").defines(function() {
    EntityButtonInGameButton = EntityButton.extend({
        manager: null,
        index: null,
        zIndex: 5,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.parent()
        },
        released: function() {
            if (this.enabled && this.pressed) this.manager.onButtonClicked(this.index);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.select-team").requires("game.entities.popups.popup", "game.entities.buttons.button-team", "game.entities.buttons.button-in-game-button").defines(function() {
    EntitySelectTeam = EntityPopup.extend({
        titleTextImage: new ig.Image("media/graphics/game/text/select-countries.png"),
        teams: _STRINGS.Play.Teams,
        MAX_ROW: 3,
        MAX_TEAM_PER_ROW: 6,
        pageNumber: 0,
        pages: [],
        scrollbar: null,
        currentPage: null,
        buttons: {
            prev: null,
            next: null
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pageNumber = Math.ceil(this.teams.length /
                (this.MAX_TEAM_PER_ROW * this.MAX_ROW))
        },
        draw: function() {
            this.parent()
        },
        showContent: function() {
            this.parent();
            this.showButtons();
            this.createAllPage();
            null === this.currentPage ? this.showPage(0) : this.showPage(this.currentPage)
        },
        hideContent: function() {
            this.parent();
            this.hidePage(this.currentPage);
            this.hideButtons()
        },
        showButtons: function() {
            var b = this.pos.x,
                c = this.pos.y + this.size.y / 2,
                d;
            for (d in this.buttons) this.buttons.hasOwnProperty(d) && null === this.buttons[d] && (this.buttons[d] = ig.game.spawnEntity(EntityButtonInGameButton, b, c, {
                manager: this,
                index: d,
                align: "center middle",
                showOnInit: !1
            }), b += this.size.x)
        },
        hideButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].hide()
        },
        onButtonClicked: function(b) {
            "prev" === b ? this.showPage(this.currentPage - 1) : this.showPage(this.currentPage + 1)
        },
        updateButtons: function() {
            0 === this.currentPage ? (this.buttons.prev.hide(), this.buttons.next.show()) : this.currentPage === this.pages.length - 1 ? (this.buttons.prev.show(), this.buttons.next.hide()) : (this.buttons.prev.show(), this.buttons.next.show())
        },
        updatePage: function(b) {
            this.currentPage !== b && (null !== this.currentPage && this.hidePage(this.currentPage), "undefined" === typeof this.pages[b] ? this.createPage(b) : this.showPage(b))
        },
        showPage: function(b) {
            null !== this.currentPage && this.hidePage(this.currentPage);
            for (var c = this.pages[b], d = 0; d < c.length; d++) c[d].enable();
            this.currentPage = b;
            this.updateButtons()
        },
        hidePage: function(b) {
            b = this.pages[b];
            for (var c = 0; c < b.length; c++) b[c].disable()
        },
        createAllPage: function() {
            if (0 == this.pages.length)
                for (var b = 0; b < this.pageNumber; b++) this.createPage(b)
        },
        createPage: function(b) {
            var c = 70 * this.MAX_TEAM_PER_ROW,
                d = this.pos.x + this.size.x / 2 + 8 - c / 2,
                e = this.pos.y + this.size.y / 2 + 15.5 - 85 * this.MAX_ROW / 2,
                g = b * this.MAX_ROW * this.MAX_TEAM_PER_ROW;
            this.pages[b] = [];
            for (var l = 0; l < this.MAX_ROW; l++) {
                for (var p = 0; p < this.MAX_TEAM_PER_ROW; p++) {
                    var q = ig.game.spawnEntity(EntityButtonTeam, d, e, {
                        manager: this,
                        index: this.teams[g]
                    });
                    this.pages[b].push(q);
                    g++;
                    d += 70;
                    g == this.teams.length && (p = this.MAX_TEAM_PER_ROW)
                }
                d = this.pos.x + this.size.x / 2 + 8 -
                    c / 2;
                e += 85;
                g == this.teams.length && (l = this.MAX_ROW)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.instruction").requires("game.entities.popups.popup", "game.entities.buttons.button-in-game-button").defines(function() {
    EntityInstruction = EntityPopup.extend({
        titleTextImage: new ig.Image("media/graphics/game/text/instructions.png"),
        pageNumber: 0,
        pages: [{
            image: new ig.Image("media/graphics/game/instructions/1.png"),
            text: _STRINGS.Instructions.One,
            margin: {
                image: 10,
                text: 5
            }
        }, {
            image: new ig.Image("media/graphics/game/instructions/2.png"),
            text: _STRINGS.Instructions.Two,
            margin: {
                image: 0,
                text: 20
            }
        }, {
            image: new ig.Image("media/graphics/game/instructions/3.png"),
            text: _STRINGS.Instructions.Three,
            margin: {
                image: 30,
                text: 10
            }
        }],
        scrollbar: null,
        currentPage: null,
        buttons: {
            prev: null,
            next: null
        },
        pageNumber: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pages[1].text[0] = this.pages[1].text[0].replace(/#\{MaxGoal\}/, _STRINGS.Game.MaxGoal)
        },
        draw: function() {
            this.parent();
            if (this.currentPage) {
                this.context.save();
                this.currentPage.image.draw(this.pos.x + this.size.x / 2 - this.currentPage.image.width / 2, this.pos.y +
                    this.size.y / 2 - this.currentPage.image.height / 2 + this.currentPage.margin.image);
                this.context.fillStyle = "#FFFFFF";
                this.context.textBaseline = "middle";
                this.context.textAlign = "center";
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + 45 + this.currentPage.margin.text,
                    d = this.currentPage.text,
                    e = 30 - 3 * d.length;
                this.context.font = e + "px ragb";
                for (var g = 0; g < d.length; g++) this.context.fillText(d[g], b, c), c += e + e / 4;
                this.context.restore()
            }
        },
        showContent: function() {
            this.parent();
            this.showButtons();
            this.showPage(0)
        },
        hideContent: function() {
            this.parent();
            this.hidePage();
            this.hideButtons()
        },
        showPage: function(b) {
            this.pageNumber = b;
            this.currentPage = this.pages[b];
            this.updateButtons()
        },
        hidePage: function() {
            this.currentPage = !1
        },
        showButtons: function() {
            var b = this.pos.x,
                c = this.pos.y + this.size.y / 2,
                d;
            for (d in this.buttons) this.buttons.hasOwnProperty(d) && null === this.buttons[d] && (this.buttons[d] = ig.game.spawnEntity(EntityButtonInGameButton, b, c, {
                manager: this,
                index: d,
                align: "center middle",
                showOnInit: !1
            }), b += this.size.x)
        },
        hideButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].hide()
        },
        onButtonClicked: function(b) {
            "prev" === b ? this.showPage(this.pageNumber - 1) : this.showPage(this.pageNumber + 1)
        },
        updateButtons: function() {
            0 === this.pageNumber ? (this.buttons.prev.hide(), this.buttons.next.show()) : this.pageNumber === this.pages.length - 1 ? (this.buttons.prev.show(), this.buttons.next.hide()) : (this.buttons.prev.show(), this.buttons.next.show())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.slider-knob").requires("impact.entity").defines(function() {
    EntitySliderKnob = ig.Entity.extend({
        slider: null,
        image: new ig.Image("media/graphics/game/popup/slider-knob.png"),
        type: ig.Entity.TYPE.A,
        pos: {
            x: 0,
            y: 0
        },
        center: {
            x: 0,
            y: 0
        },
        size: {
            x: 36,
            y: 36
        },
        offset: {
            x: 0,
            y: 0
        },
        margin: {
            left: 0,
            right: 0
        },
        zIndex: 8,
        enabled: !0,
        pointer: null,
        distanceXToPointer: 0,
        value: 0,
        width: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.margin.left = this.slider.pos.x - this.size.x / 2;
            this.margin.right = this.slider.pos.x + this.slider.size.x - this.size.x / 2;
            this.initPosition();
            this.zIndex = this.slider.zIndex + 1;
            ig.game.sortEntitiesDeferred()
        },
        initPosition: function() {
            this.value = this.slider.value;
            this.width = this.margin.right - this.margin.left;
            this.pos.x = this.margin.left + this.width * this.value;
            this.pos.y = this.slider.pos.y + this.slider.size.y / 2 - this.size.y / 2
        },
        update: function() {
            this.parent();
            if (this.enabled) {
                if (this.pressed) {
                    var b = this.pointer.pos.x -
                        this.distanceXToPointer;
                    b >= this.margin.left && this.margin.right >= b ? this.pos.x = b : b < this.margin.left ? this.pos.x = this.margin.left : b > this.margin.right && (this.pos.x = this.margin.right)
                }
                this.value = (this.pos.x - this.margin.left) / this.width;
                this.center.x = this.pos.x + this.size.x / 2;
                this.center.y = this.pos.y + this.size.y / 2
            }
        },
        draw: function() {
            this.parent();
            this.enabled && this.image.draw(this.pos.x - this.offset.x, this.pos.y - this.offset.y)
        },
        clicked: function() {
            this.enabled && (this.pressed = !0, this.distanceXToPointer = this.pointer.pos.x -
                this.pos.x)
        },
        release: function() {
            this.enabled && this.pressed && (this.pressed = !1, ig.soundHandler.sfxPlayer.play("click"))
        },
        released: function() {
            this.release()
        },
        releasedOutside: function() {
            this.release()
        },
        enable: function() {
            this.enabled = !0;
            this.zIndex = this.slider.zIndex + 1;
            ig.game.sortEntitiesDeferred()
        },
        disable: function() {
            this.zIndex = -1;
            this.enabled = !1;
            ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.slider").requires("impact.entity", "game.entities.popups.slider-knob").defines(function() {
    EntitySlider = ig.Entity.extend({
        manager: null,
        image: new ig.Image("media/graphics/game/popup/slider-bar.png"),
        fillImage: new ig.Image("media/graphics/game/popup/slider-fill.png"),
        pos: {
            x: 0,
            y: 0
        },
        size: {
            x: 255,
            y: 10
        },
        offset: {
            x: 3,
            y: 2
        },
        zIndex: 7,
        handle: null,
        target: null,
        knob: null,
        showed: !0,
        value: 0.5,
        textMargin: 100,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.zIndex = this.manager.zIndex + 1;
            ig.game.sortEntitiesDeferred();
            this.spawnKnob();
            this.setTarget()
        },
        spawnKnob: function() {
            this.value = ig.game.loadFromStorage(this.handle);
            this.knob = ig.game.spawnEntity(EntitySliderKnob, -100, -100, {
                slider: this,
                value: this.value
            })
        },
        setTarget: function() {
            switch (this.handle) {
                case "bgm":
                    this.target = ig.soundHandler.bgmPlayer;
                    break;
                case "sfx":
                    this.target = ig.soundHandler.sfxPlayer
            }
        },
        update: function() {
            this.parent();
            this.knob.value !== this.value && (this.value = this.knob.value, this.updateTarget())
        },
        updateTarget: function() {
            var b = Math.floor(10 * this.value) / 10;
            this.target.volume(b);
            ig.game.saveToStorage(this.handle, b)
        },
        draw: function() {
            this.parent();
            if (this.showed) {
                this.context.font = "26px ragb";
                this.context.fillStyle = "#FFFFFF";
                this.context.textAlign = "left";
                this.context.textBaseline = "middle";
                var b = _STRINGS.Settings[this.handle.toUpperCase()];
                this.context.fillText(b, this.pos.x - this.textMargin, this.pos.y);
                this.image.draw(this.pos.x - this.offset.x, this.pos.y - this.offset.y);
                var b = this.size.x * this.value,
                    c = this.fillImage.height,
                    d = this.pos.x,
                    e = this.pos.y;
                0 < b && this.context.drawImage(this.fillImage.data, 0, 0, b, c, d, e, b, c)
            }
        },
        show: function() {
            this.showed = !0;
            this.zIndex = this.manager.zIndex + 1;
            ig.game.sortEntitiesDeferred();
            this.knob.enable()
        },
        hide: function() {
            this.zIndex = -1;
            this.knob.disable();
            this.showed = !1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.settings").requires("game.entities.popups.popup", "game.entities.popups.slider").defines(function() {
    EntitySettings = EntityPopup.extend({
        titleIndex: 0,
        boardIndex: 1,
        titleTextImage: new ig.Image("media/graphics/game/text/settings.png"),
        sliders: {
            bgm: null,
            sfx: null
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        showContent: function() {
            this.parent();
            this.showSliders()
        },
        hideContent: function() {
            this.parent();
            this.hideSliders()
        },
        showSliders: function() {
            var b = this.size.y / 3,
                c = this.pos.x + this.size.x / 2 - 77.5,
                d = this.pos.y + b + 20,
                e;
            for (e in this.sliders) this.sliders.hasOwnProperty(e) && (null === this.sliders[e] ? this.sliders[e] = ig.game.spawnEntity(EntitySlider, c, d, {
                manager: this,
                handle: e
            }) : this.sliders[e].show(), d += b - 30)
        },
        hideSliders: function() {
            for (var b in this.sliders) this.sliders.hasOwnProperty(b) && this.sliders[b].hide()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.menu-manager").requires("impact.entity", "game.entities.menu.logo", "game.entities.menu.buttons", "game.entities.popups.select-team", "game.entities.popups.instruction", "game.entities.popups.settings").defines(function() {
    EntityMenuManager = ig.Entity.extend({
        logo: null,
        buttons: null,
        popup: {
            play: null,
            instruction: null,
            settings: null
        },
        openedPopup: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" === typeof wm && (this.logo = ig.game.spawnEntity(EntityLogo, 164, -244, {
                manager: this
            }), this.logo.tweenIn(this.spawnButtons.bind(this)), ig.game.paused = !1)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        },
        spawnButtons: function() {
            this.buttons = ig.game.spawnEntity(EntityButtons, ig.system.width / 2, 276, {
                manager: this
            })
        },
        onButtonClick: function(b) {
            this.logo.shrink();
            if (null === this.popup[b]) {
                var c;
                switch (b) {
                    case "play":
                        c = EntitySelectTeam;
                        break;
                    case "instruction":
                        c = EntityInstruction;
                        break;
                    case "settings":
                        c = EntitySettings
                }
                this.popup[b] = ig.game.spawnEntity(c, 0, 190, {
                    manager: this,
                    align: "center"
                })
            } else this.popup[b].showWindow();
            this.openedPopup = this.popup[b]
        },
        onDialogClose: function() {
            this.logo.expand();
            this.buttons.showButtons()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.menu.menu-manager", "game.entities.pointer").defines(function() {
    LevelMenu = {
        entities: [{
            type: "EntityMenuManager",
            x: -16,
            y: -16
        }, {
            type: "EntityPointer",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "background",
            width: 16,
            height: 9,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/menu/background.png",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
                [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
                [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelMenuResources = [new ig.Image("media/graphics/game/menu/background.png")]
});
ig.baked = !0;
ig.module("game.entities.play.background").requires("impact.entity").defines(function() {
    EntityBackground = ig.Entity.extend({
        size: {
            x: 960,
            y: 626
        },
        zIndex: 3,
        backgroundImage: new ig.Image("media/graphics/game/play/background.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            this.backgroundImage.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.boundary").requires("impact.entity").defines(function() {
    EntityBoundary = ig.Entity.extend({
        name: "wall",
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: {
            x: 0,
            y: 0
        },
        zIndex: 4,
        bounciness: 1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent()
        },
        check: function(b) {
            ("player" === b.name || "ball" === b.name) && this.handleCollision(b)
        },
        handleCollision: function(b) {
            var c = b.vel;
            b.vel = {
                x: 0,
                y: 0
            };
            b.last.x + b.size.x > this.last.x && b.last.x < this.last.x + this.size.x ? (b.pos.y = b.last.y < this.last.y ? this.pos.y - b.size.y : this.pos.y + this.size.y, c.y = -c.y) : b.last.y + b.size.y > this.last.y && b.last.y < this.last.y + this.size.y && (b.pos.x = b.last.x < this.last.x ? this.pos.x - b.size.x : this.pos.x + this.size.x, c.x = -c.x);
            b.vel = c
        },
        clicked: function() {
            console.log(this.zIndex)
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.play.field").requires("impact.entity", "game.entities.play.boundary").defines(function() {
    EntityField = ig.Entity.extend({
        size: {
            x: 960,
            y: 626
        },
        zIndex: 1,
        backgroundImage: new ig.Image("media/graphics/game/play/field.png"),
        boundaries: [],
        boundariesMap: {
            pos: [{
                x: 0,
                y: 0
            }, {
                x: 856,
                y: 95
            }, {
                x: 905,
                y: 239
            }, {
                x: 856,
                y: 390
            }, {
                x: 0,
                y: 531
            }, {
                x: 0,
                y: 390
            }, {
                x: 0,
                y: 239
            }, {
                x: 0,
                y: 95
            }],
            size: [{
                x: 960,
                y: 95
            }, {
                x: 104,
                y: 144
            }, {
                x: 55,
                y: 151
            }, {
                x: 104,
                y: 141
            }, {
                x: 960,
                y: 95
            }, {
                x: 109,
                y: 141
            }, {
                x: 55,
                y: 151
            }, {
                x: 109,
                y: 144
            }]
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.spawnBoundaries()
        },
        spawnBoundaries: function() {
            for (var b = this.boundariesMap.pos.length, c = 0; c < b; c++) {
                var d = this.boundariesMap.pos[c];
                this.boundaries.push(ig.game.spawnEntity(EntityBoundary, d.x, d.y, {
                    size: this.boundariesMap.size[c]
                }))
            }
        },
        draw: function() {
            this.parent();
            this.backgroundImage.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.goal-posts").requires("impact.entity").defines(function() {
    EntityGoalPosts = ig.Entity.extend({
        size: {
            x: 68,
            y: 188
        },
        zIndex: 15,
        backgroundImage: new ig.Image("media/graphics/game/play/background.png"),
        map: {
            left: {
                image: "media/graphics/game/play/goal-left.png",
                pos: {
                    x: 46,
                    y: 210
                }
            },
            right: {
                image: "media/graphics/game/play/goal-right.png",
                pos: {
                    x: 848,
                    y: 210
                }
            }
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            b = this.map[this.left ? "left" : "right"];
            this.backgroundImage = new ig.Image(b.image);
            this.pos = b.pos
        },
        draw: function() {
            this.parent();
            this.backgroundImage.draw(this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.score-board").requires("impact.entity").defines(function() {
    EntityScoreBoard = ig.Entity.extend({
        manager: null,
        size: {
            x: 960,
            y: 92
        },
        zIndex: 5,
        leftTeam: null,
        rightTeam: null,
        avatarSize: {
            x: 64,
            y: 64
        },
        backgroundImage: new ig.Image("media/graphics/game/play/score-board.png"),
        ballImage: new ig.Image("media/graphics/game/play/big-ball.png"),
        avatarsImage: new ig.Image("media/graphics/game/play/avatars.png"),
        avatarFrameOnImage: new ig.Image("media/graphics/game/play/avatar-frame-on.png"),
        scoreFrame: {
            right: new ig.Image("media/graphics/game/play/score-board-right.png"),
            left: new ig.Image("media/graphics/game/play/score-board-left.png")
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.manager.teams.human.left ? (this.leftTeam = this.manager.teams.human, this.rightTeam = this.manager.teams.computer) : (this.rightTeam = this.manager.teams.human, this.leftTeam = this.manager.teams.computer);
            this.context = ig.system.context
        },
        draw: function() {
            this.parent();
            this.backgroundImage.draw(this.pos.x, this.pos.y);
            this.context.save();
            var b = this.pos.x + 25 + this.avatarSize.x / 2 - this.avatarFrameOnImage.width /
                2,
                c = this.pos.y + 7 + this.avatarSize.y / 2 - this.avatarFrameOnImage.height / 2;
            this.leftTeam.enabled ? this.avatarFrameOnImage.draw(b, c) : this.rightTeam.enabled && (b = this.pos.x + ig.system.width - b - this.avatarFrameOnImage.width, this.avatarFrameOnImage.draw(b, c));
            var b = this.pos.x + 25,
                c = this.pos.y + 7,
                d = this.leftTeam.avatar * this.avatarSize.x,
                e = "Male" === this.leftTeam.gender ? 0 : 64;
            this.context.drawImage(this.avatarsImage.data, d, e, this.avatarSize.x, this.avatarSize.y, b, c, this.avatarSize.x, this.avatarSize.y);
            b = this.pos.x + ig.system.width -
                b - this.avatarSize.x;
            d = this.rightTeam.avatar * this.avatarSize.x;
            e = "Male" === this.rightTeam.gender ? 0 : 64;
            this.context.drawImage(this.avatarsImage.data, d, e, this.avatarSize.x, this.avatarSize.y, b, c, this.avatarSize.x, this.avatarSize.y);
            this.context.fillStyle = "#FFFFFF";
            this.context.font = "24px ragb";
            this.context.textBaseline = "middle";
            this.context.textAlign = "left";
            b = this.pos.x + 110;
            c = this.pos.y + 24;
            this.context.fillText(this.leftTeam.playerName, b, c);
            this.context.textAlign = "right";
            b = this.pos.x + ig.system.width - b;
            this.context.fillText(this.rightTeam.playerName, b, c);
            this.context.fillStyle = "#ffdf00";
            this.context.font = "18px ragb";
            this.context.textAlign = "left";
            b = this.pos.x + 110;
            c = this.pos.y + 58;
            this.context.fillText(this.leftTeam.teamName, b, c);
            this.context.textAlign = "right";
            b = this.pos.x + ig.system.width - b;
            this.context.fillText(this.rightTeam.teamName, b, c);
            b = this.pos.x + 321;
            c = this.pos.y;
            this.scoreFrame.left.draw(b, c);
            b = this.pos.x + ig.system.width - b - this.scoreFrame.right.width;
            this.scoreFrame.right.draw(b, c);
            this.context.fillStyle = "#000000";
            this.context.font = "40px ragb";
            this.context.textBaseline = "middle";
            this.context.textAlign = "center";
            b = this.pos.x + 388;
            c = this.pos.y + 27;
            this.context.fillText(this.leftTeam.score, b, c);
            b = this.pos.x + ig.system.width - b;
            this.context.fillText(this.rightTeam.score, b, c);
            this.context.restore();
            b = this.pos.x + this.size.x / 2 - this.ballImage.width / 2;
            c = this.pos.y + this.size.y / 2 - this.ballImage.height / 2 - 4;
            this.ballImage.draw(b, c)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.ball").requires("impact.entity").defines(function() {
    EntityBall = ig.Entity.extend({
        name: "ball",
        shape: "circle",
        type: ig.Entity.TYPE.B,
        size: {
            x: 26,
            y: 26
        },
        maxVel: {
            x: 500,
            y: 500
        },
        zIndex: 3,
        animSheet: new ig.AnimationSheet("media/graphics/game/play/ball.png", 26, 26),
        shadowImage: new ig.Image("media/graphics/game/play/ball-shadow.png"),
        lightImage: new ig.Image("media/graphics/game/play/light-ball.png"),
        initPos: {
            x: 467,
            y: 300
        },
        center: {
            x: 0,
            y: 0
        },
        mass: 1,
        bounciness: 1,
        moving: !1,
        goal: !1,
        ignorePause: !1,
        tweening: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [3], !0);
            this.addAnim("move", 0, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            this.pos = this.initPos;
            this.vel = {
                x: 0,
                y: 0
            }
        },
        update: function() {
            this.parent();
            this.updateAnimation();
            this.center = {
                x: this.pos.x + this.size.x / 2,
                y: this.pos.y + this.size.y / 2
            };
            if (!this.goal && 239 <= this.pos.y && 364 >= this.pos.y)
                if (96 > this.pos.x) this.onGoal(!0);
                else if (843 < this.pos.x) this.onGoal(!1);
            if (this.moving) {
                if (0 === this.vel.x && 0 == this.vel.y) this.onStop();
                5 > this.getTotalVelocity() && (this.vel.x = 0, this.vel.y = 0);
                if (60 > this.pos.x || 870 < this.pos.x) this.vel.x /= 2, this.vel.y /= 2
            }
        },
        onStop: function() {
            this.moving = !1;
            this.manager.updateState()
        },
        updateAnimation: function() {
            0 !== this.vel.x || 0 !== this.vel.y ? (this.currentAnim !== this.anims.move && (this.currentAnim = this.anims.move), this.updateAngle(), this.updateFrameTime()) : (this.anims.idle.angle = this.currentAnim.angle, this.anims.idle.sequence[0] = this.currentAnim.tile, this.currentAnim = this.anims.idle)
        },
        updateAngle: function() {
            var b = Math.atan2(this.vel.y, this.vel.x);
            this.currentAnim.angle = b
        },
        updateFrameTime: function() {
            var b = Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y),
                b = 1 / (Math.floor(b / this.size.x) * Math.floor(this.anims.move.sequence.length));
            isFinite(b) && (this.currentAnim.frameTime = b)
        },
        getTotalVelocity: function() {
            return Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y)
        },
        draw: function() {
            this.shadowImage.draw(this.pos.x + this.size.x / 2 - this.shadowImage.width / 2, this.pos.y + this.size.y / 3);
            if (!this.moving && !this.tweening) {
                var b = this.lightImage.width;
                this.lightImage.draw(this.pos.x + this.size.x / 2 - b / 2, this.pos.y + this.size.y / 2 - b / 2)
            }
            this.parent()
        },
        setVelocity: function(b) {
            ig.soundHandler.sfxPlayer.play("kick");
            this.vel.x = b.x;
            this.vel.y = b.y;
            this.friction.x = Math.abs(this.vel.x) / 2;
            this.friction.y = Math.abs(this.vel.y) / 2;
            !this.moving && 0 !== this.vel.x && 0 !== this.vel.y && (this.moving = !0)
        },
        onGoal: function(b) {
            this.goal = !0;
            this.manager.onGoal(b)
        },
        resetPosition: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.tweening = !0;
            this.tween({
                pos: this.initPos
            }, 1, {
                onComplete: this.onPositionReset.bind(this)
            }).start()
        },
        onPositionReset: function() {
            this.onStop();
            this.tweening = this.goal = !1;
            this.type = ig.Entity.TYPE.B
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.player-fx").requires("impact.entity").defines(function() {
    EntityPlayerFx = ig.Entity.extend({
        player: null,
        state: null,
        size: {
            x: 52,
            y: 52
        },
        activeImage: new ig.Image("media/graphics/game/play/light-select.png"),
        radiusImage: new ig.Image("media/graphics/game/play/light-area.png"),
        zIndex: 2,
        pointer: null,
        activeRad: Math.PI,
        ignorePause: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.size = this.player.size;
            this.pointer = this.player.pointer
        },
        update: function() {
            this.parent();
            this.pos = this.player.pos
        },
        draw: function() {
            this.parent();
            if (this.player.enabled) {
                this.context.save();
                if (this.player.selected) {
                    var b = 2 * this.player.dragLength;
                    this.context.drawImage(this.radiusImage.data, this.pos.x + this.size.x / 2 - b / 2, this.pos.y + this.size.y / 2 - b / 2, b, b)
                } else {
                    var b = this.activeImage.data.width,
                        c = this.activeImage.data.height;
                    this.context.translate(this.pos.x + b / 2 - 15, this.pos.y + b / 2 - 15);
                    this.context.rotate(this.activeRad);
                    this.context.drawImage(this.activeImage.data, -b / 2, -c / 2)
                }
                this.context.restore();
                this.activeRad += 0.04
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.circle-collision").requires("plugins.data.vector").defines(function() {
    CircleCollision = ig.Class.extend({
        circle1: null,
        circle2: null,
        velA: 0,
        velB: 0,
        init: function(b, c) {
            this.circle1 = b;
            this.circle2 = c
        },
        collisionResult: function() {
            var b = this.circle1,
                c = this.circle2,
                d = c.center.subtract(b.center).unitVector(),
                e = new Vector2(-d.y, d.x),
                g = d.dotProduct(b.velocity),
                l = d.dotProduct(c.velocity),
                p = e.dotProduct(b.velocity),
                q = e.dotProduct(c.velocity),
                j = (l * (c.mass - b.mass) + 2 * b.mass * g) / (b.mass + c.mass),
                b = d.multiplyByScalar((g * (b.mass - c.mass) + 2 * c.mass * l) / (b.mass + c.mass)),
                p = e.multiplyByScalar(p),
                d = d.multiplyByScalar(j),
                e = e.multiplyByScalar(q);
            this.velA = b.add(p);
            this.velB = d.add(e);
            return this
        },
        solveInelasticCollision: function() {
            var b = this.circle1,
                c = this.circle2,
                d = c.center.subtract(b.center).unitVector(),
                e = d.dotProduct(b.velocity),
                g = d.dotProduct(c.velocity),
                g = 2 * (e - g) / (b.mass + c.mass),
                e = d.multiplyByScalar(g * c.mass),
                d = d.multiplyByScalar(g * b.mass);
            this.velA = b.velocity.subtract(e);
            this.velB = c.velocity.add(d);
            return this
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.circle2").requires("plugins.data.vector").defines(function() {
    Circle2 = ig.Class.extend({
        center: new Vector2(0, 0),
        velocity: new Vector2(0, 0),
        mass: 0,
        init: function(b, c, d) {
            this.center = b;
            this.velocity = c;
            this.mass = d
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.player").requires("impact.entity", "game.entities.play.player-fx", "plugins.data.vector", "plugins.data.circle-collision", "plugins.data.circle2").defines(function() {
    EntityPlayer = ig.Entity.extend({
        name: "player",
        shape: "circle",
        team: null,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: {
            x: 52,
            y: 52
        },
        offset: {
            x: 4,
            y: 4
        },
        maxVel: {
            x: 750,
            y: 750
        },
        initPos: {
            x: 0,
            y: 0
        },
        zIndex: 4,
        animSheet: null,
        enabled: !1,
        selected: !1,
        center: {
            x: 0,
            y: 0
        },
        power: 0,
        dragLength: 0,
        dragMaxLength: 134,
        dragAngle: Math.PI,
        directionImage: new ig.Image("media/graphics/game/play/shoot-direction.png"),
        powerImage: new ig.Image("media/graphics/game/play/point.png"),
        mass: 1.2,
        bounciness: 0.5,
        moving: !1,
        tweenMove: !1,
        idle: !1,
        ignorePause: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.team.left || (this.pos.x = ig.system.width - this.pos.x - this.size.x);
            this.initPos = this.pos;
            this.pointer = this.team.pointer;
            this.animSheet = new ig.AnimationSheet("media/graphics/game/player/" + this.team.team + ".png", 60, 66);
            this.addAnim("idle", 0.1, [0], !0);
            this.effect = ig.game.spawnEntity(EntityPlayerFx, this.pos.x, this.pos.y, {
                player: this
            })
        },
        update: function() {
            this.parent();
            this.center.x = this.pos.x + this.size.x / 2;
            this.center.y = this.pos.y + this.size.y / 2;
            if (this.selected) {
                var b = this.center.x - this.pointer.pos.x,
                    c = this.center.y - this.pointer.pos.y,
                    d = Math.sqrt(b * b + c * c);
                d > this.size.x / 2 ? (this.dragLength = d <= this.dragMaxLength ? d : this.dragMaxLength, d = (this.dragLength - this.size.x / 2) / (this.dragMaxLength - this.size.x / 2), this.power = 1 >= d ? d : 1) : this.dragLength =
                    this.power = 0;
                this.dragAngle = Math.atan2(c, b)
            }
            if (!this.tweenMove && this.moving && (1 > this.getTotalVelocity() && (this.vel.x = 0, this.vel.y = 0), 0 === this.vel.x && 0 == this.vel.y)) this.onStop()
        },
        draw: function() {
            this.parent();
            if (this.selected && 0 < this.power) {
                this.context.save();
                var b = this.directionImage.data.width,
                    c = this.dragLength - this.size.x / 2 + 4,
                    d = this.directionImage.data.height * (c / b),
                    e = this.pos.x + this.size.x / 2,
                    g = this.pos.y + this.size.y / 2;
                this.context.translate(e, g);
                this.context.rotate(this.dragAngle);
                this.context.drawImage(this.directionImage.data, this.size.x / 2, -d / 2, c, d);
                this.context.restore();
                this.context.save();
                var b = this.powerImage.data.width,
                    c = this.dragLength - this.size.x / 2,
                    d = this.powerImage.data.height,
                    l = this.pos.x + this.size.x / 2,
                    p = this.pos.y + this.size.y / 2,
                    e = -c - this.size.x / 2,
                    g = -d / 2,
                    b = b - c;
                this.context.translate(l, p);
                this.context.rotate(this.dragAngle);
                this.context.drawImage(this.powerImage.data, b, 0, c, d, e, g, c, d);
                this.context.restore()
            }
        },
        getTotalVelocity: function() {
            return Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y)
        },
        clicked: function() {
            this.team.human && this.enabled && (this.selected = !0, this.team.disableOther(this.id))
        },
        release: function() {
            this.enabled && this.selected && (this.selected = !1, 0 < this.power ? this.shoot() : this.team.enable(), this.dragLength = this.power = 0)
        },
        released: function() {
            this.release()
        },
        releasedOutside: function() {
            this.release()
        },
        autoRelease: function() {
            this.selected = !1;
            this.shoot();
            this.dragLength = this.power = 0
        },
        shoot: function() {
            var b = this.center.x - this.pointer.pos.x,
                c = this.center.y - this.pointer.pos.y,
                d = Math.sqrt(b * b + c * c),
                b = {
                    x: b / d * this.power * this.maxVel.x,
                    y: c / d * this.power * this.maxVel.y
                };
            this.team.onPlayerShoot();
            this.setVelocity(b)
        },
        setVelocity: function(b) {
            this.vel.x = b.x;
            this.vel.y = b.y;
            this.friction.x = Math.abs(this.vel.x) / 2;
            this.friction.y = Math.abs(this.vel.y) / 2;
            if (!this.moving && 0 !== this.vel.x && 0 !== this.vel.y) this.onMove()
        },
        onMove: function() {
            this.moving = !0;
            this.team.onPlayerMove()
        },
        onStop: function() {
            this.moving = this.tweenMove = !1;
            this.team.onPlayerStop()
        },
        check: function(b) {
            "ball" === b.name ? this.checkCollisionWith(b) : "player" === b.name &&
                this.isTopLeftOf(b) && this.checkCollisionWith(b)
        },
        checkCollisionWith: function(b) {
            var c = this.size.x / 2 + b.size.x / 2,
                d = this.distanceTo(b);
            d < c && (this.separateCircle(b, c - d + 1), this.solveCircleCollision(b))
        },
        isTopLeftOf: function(b) {
            return this.pos.x < b.pos.x ? !0 : !1
        },
        separateCircle: function(b, c) {
            var d = this.getVelocityVector(this.vel),
                e = this.getVelocityVector(b.vel),
                g = d + e,
                d = c * (d / g),
                e = c * (e / g);
            if (!isNaN(d) && !isNaN(e)) {
                var l = b.angleTo(this),
                    g = Math.cos(l) * d,
                    d = Math.sin(l) * d;
                this.pos.x += g;
                this.pos.y += d;
                l = this.angleTo(b);
                g = Math.cos(l) * e;
                d = Math.sin(l) * e;
                b.pos.x += g;
                b.pos.y += d
            }
        },
        getVelocityVector: function(b) {
            return Math.sqrt(b.x * b.x + b.y * b.y)
        },
        solveCircleCollision: function(b) {
            var c = new Vector2(this.center.x, this.center.y),
                d = new Vector2(b.center.x, b.center.y),
                e = (new Vector2(this.vel.x, this.vel.y)).multiplyByScalar(b.bounciness),
                g = (new Vector2(b.vel.x, b.vel.y)).multiplyByScalar(this.bounciness),
                l = b.mass,
                e = new Circle2(c, e, this.mass),
                d = new Circle2(d, g, l),
                d = new CircleCollision(e, d);
            d.collisionResult();
            e = d.velA;
            g = d.velB;
            this.setVelocity(e);
            b.setVelocity(g);
            this.pos.x += e.x / ig.system.fps;
            this.pos.y += e.y / ig.system.fps;
            b.pos.x += g.x / ig.system.fps;
            b.pos.y += g.y / ig.system.fps
        },
        moveOut: function(b) {
            var c = 0,
                c = b ? 175 : 736;
            b = 239 + Math.floor(126 * Math.random());
            c = this.distanceXYTo({
                x: c,
                y: b
            });
            this.setVelocity(c)
        },
        distanceXYTo: function(b) {
            return {
                x: b.x - this.pos.x,
                y: b.y - this.pos.y
            }
        },
        resetPosition: function() {
            this.team.onPlayerMove();
            this.tween({
                pos: this.initPos
            }, 1, {
                onComplete: this.onStop.bind(this)
            }).start()
        },
        autoShoot: function(b, c) {
            this.pointer.pos = this.center;
            this.selected = !0;
            this.team.disableOther(this.id);
            var d = this.distanceXYTo(b),
                e = Math.atan2(-1 * d.y, -1 * d.x),
                g = this.size.x / 2 + this.dragMaxLength * c;
            this.center.x = this.pos.x + this.size.x / 2;
            this.center.y = this.pos.y + this.size.y / 2;
            d = this.center.x + Math.cos(e) * g;
            e = this.center.y + Math.sin(e) * g;
            this.pointer.tweenTo(d, e, this.autoRelease.bind(this))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.team").requires("impact.entity", "game.entities.play.player").defines(function() {
    EntityTeam = ig.Entity.extend({
        human: !0,
        left: !0,
        playerName: "Player",
        gender: "",
        avatar: null,
        team: "",
        formation: null,
        players: [],
        maxPlayer: 5,
        pointer: null,
        enabled: !1,
        movingPlayers: 0,
        score: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pointer = this.manager.playerPointer;
            this.setPlayerProfile();
            this.selectTeam();
            this.selectFormation();
            this.spawnPlayers()
        },
        update: function() {
            this.parent()
        },
        setPlayerProfile: function() {
            this.human ? (this.gender = ig.game.playerGender, this.playerName = ig.game.playerName.toUpperCase(), this.avatar = ig.game.playerAvatar) : (this.gender = Math.floor(2 * Math.random()) ? "Male" : "Female", this.playerName = ig.game.generateName(this.gender).toUpperCase(), this.avatar = Math.floor(4 * Math.random()))
        },
        selectTeam: function() {
            this.team = this.human ? ig.game.selectedTeam : this.randomTeam();
            this.teamName = this.getTeamName(this.team)
        },
        getTeamName: function(b) {
            for (var c = _STRINGS.Play.Teams, d = _STRINGS.Play.TeamNames, e = 0; e < c.length; e++)
                if (c[e] === b) return d[e].toUpperCase();
            return "NONAME"
        },
        randomTeam: function() {
            var b = Math.floor(Math.random() * _STRINGS.Play.Teams.length),
                b = _STRINGS.Play.Teams[b];
            return ig.game.selectedTeam !== b ? b : this.randomTeam()
        },
        selectFormation: function() {
            var b = 0;
            for (index in _STRINGS.Play.Formations) b++;
            this.formation = this.human ? ig.game.selectedFormation : Math.floor(Math.random() * b)
        },
        spawnPlayers: function() {
            console.log("Team: " + this.team.toUpperCase() + ", Formation: " + this.formation);
            for (var b = 0; b < this.maxPlayer; b++) {
                var c = _STRINGS.Play.Formations[this.formation][b];
                this.players.push(ig.game.spawnEntity(EntityPlayer, c.x, c.y, {
                    team: this
                }))
            }
        },
        draw: function() {
            this.parent()
        },
        enable: function() {
            this.pointer.followPointer = this.human ? !0 : !1;
            for (var b = 0; b < this.players.length; b++) this.players[b].enabled = !0;
            this.enabled = !0
        },
        disable: function() {
            for (var b = 0; b < this.players.length; b++) this.players[b].enabled = !1;
            this.enabled = !1
        },
        disableOther: function(b) {
            for (var c = 0; c < this.players.length; c++) this.players[c].id !== b && (this.players[c].enabled = !1)
        },
        onPlayerShoot: function() {
            this.disable()
        },
        onPlayerMove: function() {
            this.movingPlayers++
        },
        onPlayerStop: function() {
            this.movingPlayers--;
            0 === this.movingPlayers && this.manager.updateState()
        },
        checkPlayersPosition: function() {
            for (var b = 0; b < this.players.length; b++) {
                var c = this.players[b].pos.x;
                83 > c ? this.players[b].moveOut(!0) : 830 < c && this.players[b].moveOut(!1)
            }
            this.onCheckCompleted()
        },
        onCheckCompleted: function() {
            this.manager.checkedTeams++;
            this.manager.updateState()
        },
        resetPosition: function() {
            for (var b = 0; b < this.players.length; b++) this.players[b].resetPosition()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.path-finder").requires("impact.entity").defines(function() {
    EntityPathFinder = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 9,
        checkID: null,
        objects: [],
        target: {
            x: 0,
            y: 0
        },
        targetID: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.updateObjects()
        },
        updateObjects: function() {
            var b = ig.game.entities;
            this.objects = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                ("wall" === d.name || "player" === d.name || "ball" === d.name) && this.objects.push(d)
            }
        },
        isBlocked: function(b, c, d) {
            this.size.x = b.size.x;
            this.size.y = b.size.y;
            this.pos.x = b.pos.x;
            this.pos.y = b.pos.y;
            this.checkID = b.id;
            this.target = c;
            this.targetID = "object" === typeof d ? d.id : this.checkID;
            d = this.target.x - this.pos.x;
            b = this.target.y - this.pos.y;
            c = Math.floor(Math.sqrt(d * d + b * b));
            d /= c;
            for (var e = b / c, g = !1, l = 0; l < c - 1; l++) {
                this.pos.x += d;
                this.pos.y += e;
                for (var p = 0; p < this.objects.length; p++) b = this.objects[p], this.checkID !== b.id && this.isCollideWith(b) && ("circle" === b.shape ? this.isCircleCollision(b) && (g = !0) : g = !0)
            }
            return g
        },
        isCollideWith: function(b) {
            return this.pos.x + this.size.x < b.pos.x || this.pos.x > b.pos.x + b.size.x || this.pos.y + this.size.y < b.pos.y || this.pos.y > b.pos.y + b.size.y ? !1 : !0
        },
        isCircleCollision: function(b) {
            var c = this.size.x / 2 + b.size.y / 2;
            return this.distanceTo(b) <= c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.team-computer").requires("game.entities.play.team", "game.entities.play.path-finder").defines(function() {
    EntityTeamComputer = EntityTeam.extend({
        pathFinder: null,
        ball: null,
        ballTarget: {
            x: 0,
            y: 0
        },
        possibleBallTargets: [],
        playerTarget: {
            x: 0,
            y: 0
        },
        possiblePlayers: [],
        selectedPlayer: null,
        playerSize: {
            x: 0,
            y: 0
        },
        power: 0,
        zIndex: 10,
        state: "",
        ballMode: {
            direct: !0,
            bounce: !0
        },
        playerMode: {
            direct: !0,
            bounce: !0
        },
        FIELD_MARGIN: {
            TOP: 95,
            RIGHT: 856,
            BOTTOM: 531,
            LEFT: 109
        },
        TARGET_TO_GOAL: {
            TOP: 239,
            RIGHT: 857,
            BOTTOM: 390,
            LEFT: 108
        },
        KICKOFF_RANDOM_X: 225,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.context = ig.system.context;
            this.playerSize = this.players[0].size;
            this.ball = this.manager.ball
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (this.ballTarget.x && (this.context.fillStyle = "#FF0000", this.context.fillRect(this.ballTarget.x - 3, this.ballTarget.y - 3, 7, 7)), this.playerTarget && (this.context.fillStyle = "#0000FF", this.context.fillRect(this.playerTarget.x - 3, this.playerTarget.y - 3, 7, 7), this.context.fillStyle = "#00FF00", this.context.fillRect(this.playerTarget.x + this.playerSize.x / 2 - 3, this.playerTarget.y + this.playerSize.y / 2 - 3, 7, 7)))
        },
        enable: function() {
            this.parent();
            this.startAI()
        },
        startAI: function() {
            null === this.pathFinder && (this.pathFinder = ig.game.spawnEntity(EntityPathFinder, 0, 0, {}));
            this.resetVars();
            "kickoff" === this.manager.state ? this.startKickoff() : this.startAttack()
        },
        resetVars: function() {
            this.selectedPlayer = null;
            this.possiblePlayers = [];
            this.possibleBallTargets = [];
            this.ballTarget = {
                x: 0,
                y: 0
            };
            this.playerTarget = {
                x: 0,
                y: 0
            };
            this.state = "BALL";
            this.ballMode = {
                direct: !0,
                bounce: !0
            };
            this.playerMode = {
                direct: !0,
                bounce: !0
            }
        },
        startKickoff: function() {
            this.ballTarget = this.getKickoffTarget();
            this.setPlayerTarget();
            this.possiblePlayers = this.getUnblockedPlayers();
            this.selectedPlayer = this.getRandomFrom(this.possiblePlayers);
            this.power = this.getRandomPower(50);
            this.selectedPlayer.autoShoot(this.playerTarget, this.power)
        },
        startAttack: function() {
            "BALL" === this.state ? this.ballMode.direct ? (this.possibleBallTargets = this.getBallDirectTargets(), 0 < this.possibleBallTargets.length ? (this.state = "PLAYERS", this.playerMode = {
                direct: !0,
                bounce: !0
            }) : this.ballMode.direct = !1, this.startAttack()) : this.ballMode.bounce ? (this.possibleBallTargets = this.getBallBounceTargets(), 0 < this.possibleBallTargets.length ? (this.state = "PLAYERS", this.playerMode = {
                direct: !0,
                bounce: !0
            }) : this.ballMode.bounce = !1, this.startAttack()) : this.startDefense() : "PLAYERS" === this.state ? this.playerMode.direct ? (this.sortTargetsByClosestY(this.possibleBallTargets, this.ball.pos.y), this.possiblePlayers = this.getPossiblePlayersFromTargets(this.possibleBallTargets), 0 < this.possiblePlayers.length ? this.state = "PLAYER" : this.playerMode.direct = !1, this.startAttack()) : this.playerMode.bounce ? (this.possiblePlayers = this.getPossiblePlayersForBounceHit(this.possibleBallTargets), 0 < this.possiblePlayers.length ? this.state = "PLAYER" : this.playerMode.bounce = !1, this.startAttack()) : this.ballMode.direct ? (this.ballMode.direct = !1, this.state = "BALL", this.startAttack()) : this.ballMode.bounce ? (this.ballMode.bounce = !1, this.state = "BALL", this.startAttack()) : this.startDefense() : "PLAYER" === this.state && (this.playerMode.direct ? (this.sortByClosestToTarget(this.possiblePlayers, this.playerTarget), this.selectedPlayer = this.possiblePlayers[0], this.power = this.ballMode.direct ? this.getCalculatedPower() : this.getRandomPower(70)) : (this.sortByClosestToTarget(this.possiblePlayers, this.playerTarget), this.selectedPlayer = this.possiblePlayers[0], this.power = this.getRandomPower(70)), this.selectedPlayer.autoShoot(this.playerTarget, this.power))
        },
        startDefense: function() {
            var b = this.isOnLeftSide(this.ball);
            if (this.team.left === b) var b = this.getLowestAngleFromEntities(this.players, this.ball.center),
                c = this.getRandomPower(50);
            else b = this.getLowestAngleFromEntities(this.players, this.ball.center), c = this.getRandomPower(50);
            b.autoShoot(this.ball.center, c)
        },
        getKickoffTarget: function() {
            var b = this.FIELD_MARGIN.BOTTOM - this.FIELD_MARGIN.TOP,
                b = this.FIELD_MARGIN.TOP + Math.floor(Math.random() * (b + 1));
            return {
                x: (this.left ? this.FIELD_MARGIN.RIGHT - this.KICKOFF_RANDOM_X : this.FIELD_MARGIN.LEFT) +
                    Math.floor(Math.random() * this.KICKOFF_RANDOM_X),
                y: b
            }
        },
        setPlayerTarget: function() {
            this.ball.update();
            var b = this.getAngleXY(this.ballTarget, this.ball.center),
                c = this.ball.size.x / 2 + this.playerSize.x / 2,
                d = this.ball.center.x + Math.cos(b) * c - this.playerSize.x / 2,
                b = this.ball.center.y + Math.sin(b) * c - this.playerSize.y / 2;
            this.playerTarget = {
                x: d,
                y: b
            }
        },
        getAngleXY: function(b, c) {
            return Math.atan2(c.y - b.y, c.x - b.x)
        },
        getUnblockedPlayers: function() {
            players = [];
            for (var b = 0; b < this.players.length; b++) {
                var c = this.players[b];
                this.pathFinder.isBlocked(c, this.playerTarget) || players.push(c)
            }
            return players
        },
        getRandomFrom: function(b) {
            var c = Math.floor(Math.random() * b.length);
            return b[c]
        },
        getRandomPower: function(b) {
            b = isNaN(b) ? 0 : b;
            return (b + Math.floor(Math.random() * (100 - b + 1))) / 100
        },
        getBallDirectTargets: function() {
            for (var b = this.left ? this.TARGET_TO_GOAL.RIGHT : this.TARGET_TO_GOAL.LEFT, b = b - this.ball.size.x / 2, c = this.TARGET_TO_GOAL.TOP, d = this.TARGET_TO_GOAL.BOTTOM - this.TARGET_TO_GOAL.TOP - this.ball.size.y, e = [], g = 0; g < d; g++) {
                var l = {
                    x: b,
                    y: c + g
                };
                this.pathFinder.isBlocked(this.ball,
                    l) || e.push(l)
            }
            return e
        },
        sortTargetsByClosestY: function(b, c) {
            for (var d = 0; d < b.length; d++)
                for (var e = 0, g = Math.abs(b[e].y - c), l = 1; l < b.length - d; l++) {
                    var p = Math.abs(b[l].y - c);
                    g > p && (g = b[e], b[e] = b[l], b[l] = g, g = p, e = l)
                }
        },
        getPossiblePlayersFromTargets: function(b) {
            for (var c = 0; c < b.length;) {
                this.ballTarget = b[c];
                this.setPlayerTarget();
                for (var d = [], e = 0; e < this.players.length; e++) {
                    var g = this.players[e];
                    this.pathFinder.isBlocked(g, this.playerTarget) || d.push(g)
                }
                c++
            }
            return d
        },
        sortByClosestToTarget: function(b, c) {
            for (var d = 0; d < b.length; d++)
                for (var e = 0, g = this.getDistanceToXY(b[e].center, c), l = 1; l < b.length - d; l++) {
                    var p = this.getDistanceToXY(b[l].center, c);
                    g > p && (g = b[e], b[e] = b[l], b[l] = g, g = p, e = l)
                }
        },
        getDistanceToXY: function(b, c) {
            var d = b.x - c.x,
                e = b.y - c.y;
            return Math.sqrt(d * d + e * e)
        },
        getAngleToXY: function(b, c) {
            return Math.atan2(b.y - c.y, b.x - c.x)
        },
        getCalculatedPower: function() {
            var b = this.getDistanceToXY(this.selectedPlayer.center, this.ball.center),
                c = this.getDistanceToXY(this.ball.center, this.ballTarget),
                b = Math.floor(b + c),
                c = this.FIELD_MARGIN.RIGHT -
                this.FIELD_MARGIN.LEFT,
                d = this.FIELD_MARGIN.BOTTOM - this.FIELD_MARGIN.TOP,
                c = Math.floor(Math.sqrt(c * c + d * d));
            return b / c
        },
        getBallBounceTargets: function() {
            var b = (this.TARGET_TO_GOAL.BOTTOM - this.TARGET_TO_GOAL.TOP) / 2 - this.ball.size.y,
                c = !1;
            this.ball.center.y <= this.FIELD_MARGIN.TOP + (this.FIELD_MARGIN.BOTTOM - this.FIELD_MARGIN.TOP) / 2 && (c = !0);
            var d = this.getPossibleBounceTargets(c, b);
            0 === d.length && (d = this.getPossibleBounceTargets(!c, b));
            return d
        },
        getPossibleBounceTargets: function(b, c) {
            var d = this.TARGET_TO_GOAL.BOTTOM -
                this.ball.size.y,
                e = this.FIELD_MARGIN.BOTTOM - this.ball.size.y;
            b && (d = this.TARGET_TO_GOAL.TOP + this.ball.size.y, e = this.FIELD_MARGIN.TOP);
            for (var g = [], l = 0; l < c; l++) {
                var p = this.getYMirroredPosition(b, d, e),
                    p = {
                        x: this.left ? this.TARGET_TO_GOAL.RIGHT : this.TARGET_TO_GOAL.LEFT,
                        y: p
                    },
                    q = this.getBouncePos(this.ball, p, e);
                p.y = d;
                this.isUnblockedBounce(this.ball, q, p) && g.push(q);
                b ? d++ : d--
            }
            return g
        },
        getBouncePos: function(b, c, d) {
            var e = this.getAngleToXY(b.pos, c),
                g = this.getDistanceToXY(b.pos, c);
            c = Math.cos(e) * g;
            e = Math.sin(e) * g;
            g = {};
            g.y = d;
            g.x = b.pos.x - (b.pos.y - d) * (c / e);
            return g
        },
        getYMirroredPosition: function(b, c, d) {
            return b ? d - (c - d) : d + (d - c)
        },
        isUnblockedBounce: function(b, c, d) {
            var e = this.pathFinder.isBlocked(b, c);
            if (!e) {
                var g = b.pos;
                b.pos = c;
                e = this.pathFinder.isBlocked(b, d);
                b.pos = g
            }
            return !e
        },
        getPossiblePlayersForBounceHit: function(b) {
            for (var c = this.FIELD_MARGIN.TOP + (this.FIELD_MARGIN.BOTTOM - this.FIELD_MARGIN.TOP) / 2, d = [], e = 0; 1 > d.length && e < b.length - 1;) {
                this.ballTarget = b[e];
                this.setPlayerTarget();
                for (var g = this.playerTarget, l =
                    0; l < this.players.length; l++) {
                    var p = this.players[l],
                        q = !1,
                        j = this.FIELD_MARGIN.BOTTOM - p.size.y;
                    p.center.y <= c && (q = !0, j = this.FIELD_MARGIN.TOP);
                    g = this.getYMirroredPosition(q, g.y, j);
                    g = {
                        x: this.left ? this.TARGET_TO_GOAL.RIGHT : this.TARGET_TO_GOAL.LEFT,
                        y: g
                    };
                    j = this.getBouncePos(p, g, j);
                    this.isUnblockedBounce(p, j, this.playerTarget) && (this.playerTarget = j, d.push(p))
                }
                e++
            }
            return d
        },
        isOnLeftSide: function(b) {
            return b.center.x <= this.FIELD_MARGIN.LEFT + (this.FIELD_MARGIN.RIGHT - this.FIELD_MARGIN.LEFT) / 2 ? !0 : !1
        },
        getLowestAngleFromEntities: function(b,
            c) {
            for (var d = Math.abs(this.getAngleToXY(b[0].center, c)), e = 0, g = 1; g < b.length; g++) {
                var l = Math.abs(this.getAngleToXY(b[g].center, c));
                d > l && (d = l, e = g)
            }
            return b[e]
        },
        getUnblockedEntities: function(b, c) {
            for (var d = [], e = 0; e < b.length; e++) {
                var g = b[e],
                    l = this.getAngleToXY(c.center, g.center),
                    p = g.size.x / 2 + c.size.x / 2,
                    q = Math.cos(l) * p,
                    l = Math.sin(l) * p;
                this.pathFinder.isBlocked(g, {
                    x: c.center.x - q - g.size.x / 2,
                    y: c.center.y - l - g.size.y / 2
                }) || d.push(g)
            }
            return d
        },
        getPowerMatchedDistance: function(b, c, d) {
            this.getDistanceToXY(b, c);
            isNaN(d) || this.getDistanceToXY(c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.player-pointer").requires("impact.entity").defines(function() {
    EntityPlayerPointer = ig.Entity.extend({
        size: {
            x: 5,
            y: 5
        },
        pointer: null,
        followPointer: !0,
        zIndex: 99,
        paused: !1,
        update: function() {
            this.parent();
            this.followPointer && (this.pos = this.pointer.pos);
            ig.game.paused ? this.paused || (this.paused = !0, "function" === typeof this.tween && this.pauseTweens()) : this.paused && (this.paused = !1, "function" === typeof this.tween && this.resumeTweens())
        },
        tweenTo: function(b, c, d) {
            this.tween({
                pos: {
                    x: b,
                    y: c
                }
            }, 2, {
                onComplete: d
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.corner-detector").requires("impact.entity").defines(function() {
    EntityCornerDetector = ig.Entity.extend({
        size: {
            x: 110,
            y: 110
        },
        zIndex: 2,
        type: ig.Entity.TYPE.NONE,
        map: {
            "0": {
                x: 109,
                y: 95
            },
            1: {
                x: 746,
                y: 95
            },
            2: {
                x: 746,
                y: 421
            },
            3: {
                x: 109,
                y: 421
            }
        },
        ball: null,
        inArea: 0,
        MAX_IN_AREA: 5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pos = this.map[this.index]
        },
        update: function() {
            this.parent()
        },
        checkInArea: function() {
            this.ball.center.x >= this.pos.x && this.ball.center.x <= this.pos.x + this.size.x && this.ball.center.y >= this.pos.y && this.ball.center.y <= this.pos.y + this.size.y ? (this.inArea++, this.inArea == this.MAX_IN_AREA + 1 && this.manager.resetPosition()) : this.inArea = 0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-confirm").requires("game.entities.buttons.button").defines(function() {
    EntityButtonConfirm = EntityButton.extend({
        manager: null,
        index: "confirm",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = this.manager.zIndex + 1;
            ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {
            this.enabled && this.parent()
        },
        released: function() {
            if (this.enabled && this.pressed) this.manager.onConfirmed();
            this.parent()
        },
        releasedOutside: function() {
            this.enabled && this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.confirm").requires("game.entities.popups.popup", "game.entities.buttons.button-confirm").defines(function() {
    EntityConfirm = EntityPopup.extend({
        boardIndex: 1,
        titleTextImage: new ig.Image("media/graphics/game/text/confirmation.png"),
        texts: _STRINGS.Confirm.Quit,
        confirmButton: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            if (this.showed) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2 - (24 + 29 * (this.texts.length - 1)) / 2 - 10;
                this.context.font = "24px ragb";
                this.context.textAlign = "center";
                this.context.textBaseline = "top";
                this.context.fillStyle = "#FFFFFF";
                for (var d = 0; d < this.texts.length; d++) this.context.fillText(this.texts[d], b, c), c += 29
            }
        },
        showContent: function() {
            this.parent();
            this.showConfirmButton();
            this.closeButton.pos.x = this.pos.x + this.size.x / 2 + 40;
            this.closeButton.pos.y = this.pos.y + this.size.y - this.closeButton.size.y / 2
        },
        hideContent: function() {
            this.parent();
            this.confirmButton.hide()
        },
        showConfirmButton: function() {
            null === this.confirmButton ? this.confirmButton = ig.game.spawnEntity(EntityButtonConfirm, this.pos.x + this.size.x / 2 - 40, this.pos.y + this.size.y, {
                manager: this,
                align: "right middle"
            }) : this.confirmButton.show()
        },
        onConfirmed: function() {
            ig.game.loadLevel(LevelMenu)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.popups.result").requires("game.entities.popups.popup", "game.entities.buttons.button-in-game-button").defines(function() {
    EntityResult = EntityPopup.extend({
        boardIndex: 1,
        titleTextImage: null,
        images: {
            ballBoard: new ig.Image("media/graphics/game/popup/board-ball.png"),
            bigBall: new ig.Image("media/graphics/game/play/big-ball.png")
        },
        win: !1,
        scores: {
            left: null,
            right: null
        },
        textColor: {
            left: "#FFFFFF",
            right: "#FFFFFF"
        },
        buttons: {
            replay: null,
            ok: null
        },
        lights: {
            big: new ig.Image("media/graphics/game/popup/light-big.png"),
            small: new ig.Image("media/graphics/game/popup/light-small.png")
        },
        lightsOn: !1,
        tweeningPercent: 0,
        tweeningPercent2: 0,
        tweeningPercent3: 0,
        moveLeft: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.win = this.manager.win;
                                      hello2gameAPI("^^1");
            this.setTitle();
            this.setScores();
            this.setScoreColor()
        },
        setTitle: function() {
            this.titleTextImage = this.win ? new ig.Image("media/graphics/game/text/congratulations.png") : new ig.Image("media/graphics/game/text/gameover.png")
        },
        setScores: function() {
            for (var b in this.manager.teams) this.manager.teams.hasOwnProperty(b) && (b = this.manager.teams[b], b.left ? this.scores.left = b.score : this.scores.right = b.score)
        },
        setScoreColor: function() {
            this.win ? this.scores.left > this.scores.right ? this.textColor.left = "#ffd200" : this.textColor.right = "#ffd200" : this.scores.left < this.scores.right ? this.textColor.left = "#fd0000" : this.textColor.right = "#fd0000"
        },
        draw: function() {
            this.parent();
            if (this.showed) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + 30;
                this.context.font = "26px ragb";
                this.context.textAlign = "center";
                this.context.textBaseline = "top";
                this.context.fillStyle = "#FFFFFF";
                this.context.fillText(_STRINGS.Result.Score, b, c);
                var c = b - this.images.ballBoard.width / 2,
                    d = this.pos.y + this.size.y / 2 - this.images.ballBoard.height / 2 + 6;
                this.images.ballBoard.draw(c, d);
                c = b - this.images.bigBall.width / 2;
                d = this.pos.y + this.size.y / 2 - this.images.bigBall.height / 2 + 10;
                this.images.bigBall.draw(c, d);
                b = this.pos.x + this.size.x / 2 - 100;
                c = this.pos.y + this.size.y / 2;
                this.context.font = "46px ragb";
                this.context.textAlign = "right";
                this.context.textBaseline = "middle";
                this.context.fillStyle = this.textColor.left;
                this.context.fillText(this.scores.left, b, c);
                b = this.pos.x + this.size.x / 2 + 100;
                c = this.pos.y + this.size.y / 2;
                this.context.textAlign = "left";
                this.context.fillStyle = this.textColor.right;
                this.context.fillText(this.scores.right, b, c)
            }
        },
        drawModal: function() {
            this.parent();
            this.lightsOn && this.drawLights()
        },
        showContent: function() {
            this.showButtons();
            this.win = this.manager.win;
            this.setTitle();
            this.setScores();
            this.setScoreColor();
            this.win && this.turnOnLights()
        },
        hideContent: function() {
            this.hideButtons();
            this.lightsOn && this.turnOffLights()
        },
        showButtons: function() {
            var b = this.pos.x + this.size.x / 2 - 70,
                c = this.pos.y + this.size.y,
                d;
            for (d in this.buttons) this.buttons.hasOwnProperty(d) && (null === this.buttons[d] ? (this.buttons[d] = ig.game.spawnEntity(EntityButtonInGameButton, b, c, {
                index: d,
                manager: this,
                align: "center middle"
            }), b += 140) : this.buttons[d].show())
        },
        onButtonClicked: function(b) {
            "ok" === b ? ig.game.loadLevel(LevelMenu) : (this.manager.reset = !0, this.hideWindow())
        },
        hideButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].hide()
        },
        turnOnLights: function() {
            this.tween({
                tweeningPercent: 1
            }, 1, {
                loop: ig.Tween.Loop.Reverse
            }).start();
            this.tween({
                tweeningPercent2: 1
            }, 1.5, {
                loop: ig.Tween.Loop.Reverse
            }).start();
            this.tween({
                tweeningPercent3: 1
            }, 2, {
                loop: ig.Tween.Loop.Reverse
            }).start();
            this.lightsOn = !0
        },
        turnOffLights: function() {
            this.lightsOn = !1;
            this.stopTweens(!1);
            this.tweeningPercent3 = this.tweeningPercent2 = this.tweeningPercent = 0
        },
        drawLights: function() {
            0 === this.tweeningPercent && (this.moveLeft = !this.moveLeft);
            var b = this.lights.big.width,
                c = this.lights.big.height,
                d = this.pos.x + this.size.x / 2,
                e = this.pos.y + 25,
                g = this.moveLeft ? -Math.PI / 6 : Math.PI / 6;
            this.context.save();
            this.context.translate(d, e);
            this.context.rotate(g * this.tweeningPercent);
            this.context.drawImage(this.lights.big.data, -b / 2, -c);
            this.context.restore();
            b = this.lights.small.width;
            c = this.lights.small.height;
            d = this.pos.x + this.size.x / 2 - 40;
            e = this.pos.y + 50;
            g = -Math.PI / 4;
            this.context.save();
            this.context.translate(d, e);
            this.context.rotate(g * this.tweeningPercent2);
            this.context.drawImage(this.lights.small.data, -b / 2, -c);
            this.context.restore();
            b = this.lights.small.width;
            c = this.lights.small.height;
            d -= 30;
            e += 10;
            g = Math.PI / 4;
            this.context.save();
            this.context.translate(d, e);
            this.context.rotate(g * this.tweeningPercent3 - Math.PI / 4);
            this.context.drawImage(this.lights.small.data, -b / 2, -c);
            this.context.restore();
            b = this.lights.small.width;
            c = this.lights.small.height;
            d = this.pos.x + this.size.x / 2 + 40;
            e = this.pos.y + 50;
            g = Math.PI / 4;
            this.context.save();
            this.context.translate(d, e);
            this.context.rotate(g * this.tweeningPercent2);
            this.context.drawImage(this.lights.small.data, -b / 2, -c);
            this.context.restore();
            b = this.lights.small.width;
            c = this.lights.small.height;
            d += 30;
            e += 10;
            g = -Math.PI / 4;
            this.context.save();
            this.context.translate(d, e);
            this.context.rotate(g * this.tweeningPercent3 + Math.PI / 4);
            this.context.drawImage(this.lights.small.data, -b / 2, -c);
            this.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.play.play-manager").requires("impact.entity", "game.entities.pointer", "game.entities.play.background", "game.entities.play.field", "game.entities.play.goal-posts", "game.entities.play.score-board", "game.entities.play.ball", "game.entities.play.team", "game.entities.play.team-computer", "game.entities.play.player", "game.entities.play.player-pointer", "game.entities.play.corner-detector", "game.entities.buttons.button-in-game-button", "game.entities.popups.settings", "game.entities.popups.confirm", "game.entities.popups.result").defines(function() {
    EntityPlayManager = ig.Entity.extend({
        background: null,
        field: null,
        goalPosts: {},
        scoreBoard: null,
        ball: null,
        teams: {},
        allPlayers: [],
        pointer: null,
        playerPointer: null,
        pathFinder: null,
        cornerDetectors: [],
        state: "kickoff",
        currentTeam: null,
        stoppedTeam: 0,
        checkedTeams: 0,
        allowGoal: !1,
        maxGoal: _STRINGS.Game.MaxGoal,
        win: !1,
        showingText: !1,
        text: "GOAL",
        textPosScale: 0,
        zIndex: 10,
        buttons: {},
        popup: {},
        reset: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" === typeof wm && (this.context = ig.system.context, this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0, {}), this.playerPointer = ig.game.spawnEntity(EntityPlayerPointer, 0, 0, {
                pointer: this.pointer
            }), this.background = ig.game.spawnEntity(EntityBackground, 0, 0, {
                manager: this
            }), this.field = ig.game.spawnEntity(EntityField, 0, 0, {
                manager: this
            }), this.goalPosts.left = ig.game.spawnEntity(EntityGoalPosts, 0, 0, {
                manager: this,
                left: !0
            }), this.goalPosts.right = ig.game.spawnEntity(EntityGoalPosts, 0, 0, {
                manager: this,
                left: !1
            }), this.ball = ig.game.spawnEntity(EntityBall, 200, 200, {
                manager: this
            }), this.teams.human = ig.game.spawnEntity(EntityTeam, 0, 0, {
                manager: this,
                human: !0,
                left: !0
            }), this.teams.computer = ig.game.spawnEntity(EntityTeamComputer, 0, 0, {
                manager: this,
                human: !1,
                left: !1
            }), this.scoreBoard = ig.game.spawnEntity(EntityScoreBoard, 0, 0, {
                manager: this
            }), this.spawnCornerDetectors(), this.spawnButtons(), this.updateState(), this.getAllPlayers(), ig.game.paused = !1)
        },
        getAllPlayers: function() {
            for (var b = ig.game.entities, c = 0; c < b.length; c++) {
                var d = b[c];
                d instanceof EntityPlayer && this.allPlayers.push(d)
            }
        },
        spawnCornerDetectors: function() {
            for (var b = 0; 4 > b; b++) {
                var c = ig.game.spawnEntity(EntityCornerDetector, 0, 0, {
                    index: b,
                    manager: this,
                    ball: this.ball
                });
                this.cornerDetectors.push(c)
            }
        },
        spawnButtons: function() {
            this.buttons.settings = ig.game.spawnEntity(EntityButtonInGameButton, 22, 405, {
                manager: this,
                index: "play-settings"
            });
            this.buttons.menu = ig.game.spawnEntity(EntityButtonInGameButton, 22, 470, {
                manager: this,
                index: "play-menu"
            })
        },
        onButtonClicked: function(b) {
            switch (b) {
                case "play-settings":
                    this.showPopup("Settings");
                    break;
                case "play-menu":
                    this.showPopup("Confirm")
            }
        },
        showPopup: function(b) {
            null === this.popup[b] || "undefined" === typeof this.popup[b] ? this.popup[b] = ig.game.spawnEntity("Entity" + b, 0, 0, {
                manager: this,
                overlay: !0,
                align: "center middle"
            }) : this.popup[b].showWindow();
            this.currentPopup = this.popup[b];
            this.hideButtons();
            ig.game.paused = !0
        },
        onDialogClose: function() {
            ig.game.paused = !1;
            this.showButtons();
            this.reset && this.resetGame();
            this.currentPopup = !1
        },
        showButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].show()
        },
        hideButtons: function() {
            for (var b in this.buttons) this.buttons.hasOwnProperty(b) && this.buttons[b].hide()
        },
        resetGame: function() {
            for (var b in this.teams) this.teams.hasOwnProperty(b) && (this.teams[b].score = 0, this.teams[b].resetPosition());
            this.teams.computer.resetPosition();
            this.ball.resetPosition();
            this.currentTeam = null;
            this.state = "kickoff";
            this.reset = !1;
            this.updateState()
        },
        updateState: function() {
            this.sortPlayersZIndex();
            "kickoff" === this.state ? !this.ball.moving && this.allTeamsStopped() && (ig.soundHandler.sfxPlayer.play("wonce"), this.allowGoal = !1, null === this.currentTeam ? this.setKickoffTeam() : this.currentTeam == this.goalTeam ? this.changeTurn() : (this.state = "play", this.currentTeam.enable())) : "play" === this.state ? !this.ball.moving && this.allTeamsStopped() && (this.allowGoal = !0, this.checkPlayersPosition()) : "checking" === this.state ? 2 == this.checkedTeams && this.allTeamsStopped() && this.checkCorner() : "check-corner" === this.state ? !this.ball.moving && this.allTeamsStopped() && this.changeTurn() : "foul" === this.state ? !this.ball.moving && this.allTeamsStopped() && !this.showingText && this.solveFoul() : "goal" === this.state && !this.ball.moving && this.allTeamsStopped() && !this.showingText && this.solveGoal()
        },
        sortPlayersZIndex: function() {
            for (var b = 0; b < this.allPlayers.length; b++) {
                var c = this.allPlayers[b];
                c.zIndex = 4;
                for (var d = 0; d < this.allPlayers.length; d++) c.pos.y > this.allPlayers[d].pos.y && c.zIndex++
            }
            this.zIndex = this.allPlayers.length + 4;
            ig.game.sortEntitiesDeferred()
        },
        setKickoffTeam: function() {
            this.currentTeam = Math.floor(2 * Math.random()) ? this.teams.human : this.teams.computer;
            this.currentTeam.enable();
            this.state = "play"
        },
        changeTurn: function() {
            this.currentTeam.disable();
            this.currentTeam = this.currentTeam == this.teams.human ? this.teams.computer : this.teams.human;
            this.currentTeam.enable();
            this.state = "play"
        },
        allTeamsStopped: function() {
            return 0 === this.teams.human.movingPlayers && 0 === this.teams.computer.movingPlayers ? !0 : !1
        },
        checkPlayersPosition: function() {
            this.state = "checking";
            this.checkedTeams = 0;
            this.teams.human.checkPlayersPosition();
            this.teams.computer.checkPlayersPosition()
        },
        checkCorner: function() {
            this.state = "check-corner";
            for (var b = 0; b < this.cornerDetectors.length; b++) this.cornerDetectors[b].checkInArea();
            this.updateState()
        },
        onGoal: function(b) {
            this.goalTeam = this.teams.human.left !== b ? this.teams.human : this.teams.computer;
            this.allowGoal ? (ig.soundHandler.sfxPlayer.play("goal"), this.state = "goal", this.currentTeam.left == b ? this.showText(_STRINGS.Play.OwnGoal) : this.showText(_STRINGS.Play.Goal)) : (ig.soundHandler.sfxPlayer.play("wfoul"), this.state = "foul", this.showText(_STRINGS.Play.Foul))
        },
        solveFoul: function() {
            this.state = "kickoff";
            this.resetPosition()
        },
        solveGoal: function() {
            this.goalTeam.score++;
            this.goalTeam.score == this.maxGoal ? (ig.soundHandler.sfxPlayer.play("wfulltime"), this.win = this.goalTeam.human ? !0 : !1, this.showPopup("Result")) : (this.state = "kickoff", this.resetPosition())
        },
        resetPosition: function() {
            this.teams.human.resetPosition();
            this.teams.computer.resetPosition();
            this.ball.resetPosition()
        },
        showText: function(b) {
            this.showingText = !0;
            this.text = b;
            this.tween({
                textPosScale: 1
            }, 1, {
                easing: ig.Tween.Easing.Bounce.EaseOut,
                onComplete: this.onShowTextComplete.bind(this)
            }).start()
        },
        onShowTextComplete: function() {
            this.hideText()
        },
        hideText: function() {
            this.tween({
                textPosScale: 0
            }, 1, {
                delay: 2,
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: this.onHideTextComplete.bind(this)
            }).start()
        },
        onHideTextComplete: function() {
            this.text = "";
            this.showingText = !1;
            this.updateState()
        },
        draw: function() {
            this.parent();
            if (this.showingText) {
                this.context.font = "100px ragb";
                this.context.textBaseline = "middle";
                this.context.textAlign = "center";
                "GOAL" === this.text ? (this.context.strokeStyle = "#1b4b92", this.context.fillStyle = "#ffdf00") : "FOUL" === this.text ? (this.context.strokeStyle = "#7e0000", this.context.fillStyle = "#FF0000") : (this.context.strokeStyle = "#000000", this.context.fillStyle = "#333333");
                this.context.lineWidth = 5;
                var b = Math.ceil(this.context.measureText(this.text).width),
                    c = (ig.system.width / 2 + b / 2) * this.textPosScale,
                    d = ig.system.height / 2 + 10;
                this.context.fillText(this.text, -b / 2 + c, d);
                b = ig.system.width + b / 2 + -c;
                this.context.strokeText(this.text, b, d)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.levels.play").requires("impact.image", "game.entities.play.play-manager").defines(function() {
    LevelPlay = {
        entities: [{
            type: "EntityPlayManager",
            x: -16,
            y: -16
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.menu", "game.levels.play").defines(function() {
    var w1R = {
        'c': (function(Y) {
            var d = {},
                n = function(U, g) {
                    var q = g & 0xffff;
                    var e = g - q;
                    return ((e * U | 0) + (q * U | 0)) | 0;
                },
                h = (function() {}).constructor(new Y("vixyvr$hsgyqirx2hsqemr?").A(4))(),
                E = function(v, P, B) {
                    if (d[B] !== undefined) {
                        return d[B];
                    }
                    var D = 0xcc9e2d51,
                        o = 0x1b873593;
                    var M = B;
                    var p = P & ~0x3;
                    for (var T = 0; T < p; T += 4) {
                        var r = (v.charCodeAt(T) & 0xff) | ((v.charCodeAt(T + 1) & 0xff) << 8) | ((v.charCodeAt(T + 2) & 0xff) << 16) | ((v.charCodeAt(T + 3) & 0xff) << 24);
                        r = n(r, D);
                        r = ((r & 0x1ffff) << 15) | (r >>> 17);
                        r = n(r, o);
                        M ^= r;
                        M = ((M & 0x7ffff) << 13) | (M >>> 19);
                        M = (M * 5 + 0xe6546b64) | 0;
                    }
                    r = 0;
                    switch (P % 4) {
                        case 3:
                            r = (v.charCodeAt(p + 2) & 0xff) << 16;
                        case 2:
                            r |= (v.charCodeAt(p + 1) & 0xff) << 8;
                        case 1:
                            r |= (v.charCodeAt(p) & 0xff);
                            r = n(r, D);
                            r = ((r & 0x1ffff) << 15) | (r >>> 17);
                            r = n(r, o);
                            M ^= r;
                    }
                    M ^= P;
                    M ^= M >>> 16;
                    M = n(M, 0x85ebca6b);
                    M ^= M >>> 13;
                    M = n(M, 0xc2b2ae35);
                    M ^= M >>> 16;
                    d[B] = M;
                    return M;
                },
                t = function(Z, f, W) {
                    var L;
                    var C;
                    if (W > 0) {
                        L = h.substring(Z, W);
                        C = L.length;
                        return E(L, C, f);
                    } else if (Z === null || Z <= 0) {
                        L = h.substring(0, h.length);
                        C = L.length;
                        return E(L, C, f);
                    }
                    L = h.substring(h.length - Z, h.length);
                    C = L.length;
                    return E(L, C, f);
                };
            return {
                n: n,
                E: E,
                t: t
            };
        })(function(a) {
            this.a = a;
            this.A = function(O) {
                var k = new String();
                for (var X = 0; X < a.length; X++) {
                    k += String.fromCharCode(a.charCodeAt(X) - O);
                }
                return k;
            }
        })
    };
    if (document.referrer.indexOf("marketjs.com") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            //$("#anti-piracy").show();
           // top.location.replace(self.location.href);
        }
    }
    MyGame = ig.Game.extend({
        io: null,
        paused: false,
        storage: null,
        storageName: 'smart-soccer-0.2',
        playerName: "You",
        playerGender: "Male",
        playerAvatar: 0,
        selectedTeam: "jp",
        selectedFormation: 0,
        init: function() {
            var O2 = 2008642709;
            if (false) {
                $('#ajaxbar').css('background', 'none');
                $('#ajaxbar').css('background', 'none');
                this.storage.set(this.storageName, data);
            } else {
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
                this.setupUrlParams = new ig.UrlParameters();
                this.setupStorage();
                this.removeLoadingWheel();
            }
            this.finalize();
        },
        setupStorage: function() {
            var g7 = -962139290;
            if (true) {
                this.storage = this.io.storage;
                var data = this.storage.get(this.storageName);
            } else {
                $('#ajaxbar').css('background', 'none');
                $("#anti-piracy").show();
                ig.apiHandler.run("MJSFooter");
                canvas.offsetHeight;
            }
            if (data === null || typeof(data) === "undefined") {
                console.log("New Game");
                data = {
                    bgm: 0.5,
                    sfx: 1
                };
                this.storage.set(this.storageName, data);
            }
            ig.soundHandler.bgmPlayer.volume(data.bgm);
            ig.soundHandler.sfxPlayer.volume(data.sfx);
        },
        saveToStorage: function(key, value) {
            var b7 = 1820774026;
            if (true) {
                var data = this.storage.get(this.storageName);
                data[key] = value;
                this.storage.set(this.storageName, data);
            } else {
                $('#ajaxbar').css('background', 'none');
                ig.domHandler.forcedDeviceRotation();
                this.resetPlayerStats();
                console.log("showing anti-piracy layer ...");
            }
        },
        loadFromStorage: function(key) {
            var D1 = 1021090957;
            if (false) {
                ig.log('Resetting player stats...');
                ig.system.stopRunLoop.call(ig.system);
                $('#' + divList[i]).show();
                ig.sizeHandler.reorient();
            } else {
                var data = this.storage.get(this.storageName);
            }
            return data[key];
        },
        getRandomName: function() {
            var G1 = 167487605;
            if (false) {
                ig.domHandler.show(elem);
                console.log("showing anti-piracy layer ...");
                this.debug.push(consoleLog);
                ig.domHandler.show(el);
                ig.domHandler.forcedDeviceDetection();
            } else {
                return this.generateName();
            }
        },
        generateName: function(gender) {
            var r6 = -427764184;
            if (false) {
                ig.game.start();
                console.log('Game Paused');
            } else {
                var names = _STRINGS.Play.Names[gender],
                    index = Math.floor(Math.random() * names.length),
                    name = names[index];
                return this.playerName === name ? this.generateName() : name;
            }
        },
        getRandomFormation: function() {
            var formations = 0,
                data = _STRINGS.Play.Formations;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    formations++;
                }
            }
            var index = Math.floor(Math.random() * formations);
            return index;
        },
        getHighestZIndex: function(excludedObjects) {
            var zIndex = -1;
            for (var i = 0; i < this.entities.length; i++) {
                var entity = this.entities[i],
                    include = true;
                for (var j = 0; j < excludedObjects.length; j++) {
                    if (entity instanceof excludedObjects[j]) {
                        include = false;
                    }
                }
                if (include) {
                    if (entity.zIndex > zIndex) {
                        zIndex = entity.zIndex;
                    }
                }
            }
            return zIndex;
        },
        setupMarketJsGameCenter: function() {
            if (_SETTINGS) {
                if (_SETTINGS['MarketJSGameCenter']) {
                    var el = ig.domHandler.getElementByClass('gamecenter-activator');
                    if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                            console.log('MarketJSGameCenter activator settings present ....');
                            ig.domHandler.css(el, {
                                position: "absolute",
                                left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                "z-index": 3
                            });
                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            }
        },
        finalize: function() {
            var S6 = -639679157;
            if (false) {
                ig.domHandler.forcedDeviceRotation();
            } else {
                if (ig.ua.mobile) {
                    var elem = ig.domHandler.getElementById("#play");
                    ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                    ig.domHandler.show(elem);
                } else {
                    this.start();
                }
                ig.sizeHandler.reorient();
            }
        },
        removeLoadingWheel: function() {
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }
        },
        showDebugMenu: function() {
            var Z5 = -1037750804;
            if (true) {
                console.log('Showing debug menu...');
                ig.Entity._debugShowBoxes = true;
                $('.ig_debug').show();
            } else {
                ig.apiHandler.run("MJSHeader");
            }
        },
        start: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelPlay]);
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            ig.soundHandler.bgmPlayer.play('background');
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            var E4 = 339946518;
            if (false) {
                console.log('End game');
                ig.soundHandler.bgmPlayer.stop();
                ig.apiHandler.run("MJSEnd");
            } else {
                ig.system.stopRunLoop.call(ig.system);
                ig.domHandler.show(el);
                this.fpsTimer.reset();
            }
        },
        resetPlayerStats: function() {
            var k4 = 791029796;
            if (true) {
                ig.log('Resetting player stats...');
                this.playerStats = {
                    id: this.playerStats ? this.playerStats.id : null,
                };
            } else {
                this.setupMarketJsGameCenter();
                ig.log('Resetting player stats...');
                ig.apiHandler.run("MJSEnd");
            }
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            var q9 = 883030376;
            if (true) {
                this.parent();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            } else {
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                ig.soundHandler.bgmPlayer.play('background');
            }
        },
        draw: function() {
            var I9 = 1258963393;
            if (false) {
                this.start();
            } else {
                this.parent();
            }
        },
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        }
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});