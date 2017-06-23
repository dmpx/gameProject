FZ = {
	_showMsg : function (a) {
		var b = document.querySelector("#msgParent").appendChild(window.msgDiv);
		b.innerText = a,
		b.style.opacity = 1,
		setTimeout(function () {
			window.msgDiv.style.opacity = 0
		}, 700)
	},
	showMsg : function (a) {
		var b = [SpilGames._("Turn to Player 1"), SpilGames._("Turn to Player 2"), SpilGames._("Turn to Computer")],
		c;
		switch (vs) {
		case "pvp":
			a ? c = 0 : c = 1;
			break;
		case "pvc":
			a ? c = 0 : c = 2;
			break;
		case "p":
		}
		undefined !== c && this._showMsg(b[c])
	},
	checkSpilEvents : function () {
		undefined !== window.SpilGames && undefined !== window.SpilGames.Events && undefined !== window.SpilGames.Events.subscribe && (FZ.hasGameContainer = !0);
		if (!1)
			FZ.hasGameContainer = !0, window.SpilGames || (window.SpilGames = {}), window.SpilGames.Events || (window.SpilGames.Events = {}), window.SpilGames.Events.subscribe || (window.SpilGames.Events.subscribe = function (a, b) {
				window.addEventListener("resize", function () {
					b({
						height : window.innerHeight - 25,
						offsetLeft : 0,
						offsetTop : 25,
						width : window.innerWidth
					})
				}),
				b({
					height : window.innerHeight - 25,
					offsetLeft : 0,
					offsetTop : 25,
					width : window.innerWidth
				})
			})
	},
	changeSize : function (a) {
		var b = Math.min(a.width / parseInt(FZ.rootDiv.style.width), a.height / parseInt(FZ.rootDiv.style.height)),
		c = (window.innerWidth - parseInt(FZ.rootDiv.style.width) * b) / 2;
		FZ.rootDiv.style.webkitTransformOrigin = "0% 0%",
		FZ.rootDiv.style.webkitTransform = "scale(" + b + ")",
		FZ.update(a.offsetTop, c, b),
		FZ.system.offsetLeft = 0,
		FZ.system.offsetTop = 0;
		var d = function () {
			FZ.rootDiv.style.top = a.offsetTop + "px",
			FZ.rootDiv.style.left = c + "px",
			console.log("set the left border")
		};
		window.setTimeout(d, 100)
	}
}, function (a, b) {
	function cy(a) {
		return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	function cu(a) {
		if (!cj[a]) {
			var b = c.body,
			d = f("<" + a + ">").appendTo(b),
			e = d.css("display");
			d.remove();
			if (e === "none" || e === "") {
				ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0),
				b.appendChild(ck);
				if (!cl || !ck.createElement)
					cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
				d = cl.createElement(a),
				cl.body.appendChild(d),
				e = f.css(d, "display"),
				b.removeChild(ck)
			}
			cj[a] = e
		}
		return cj[a]
	}
	function ct(a, b) {
		var c = {};
		f.each(cp.concat.apply([], cp.slice(0, b)), function () {
			c[this] = a
		});
		return c
	}
	function cs() {
		cq = b
	}
	function cr() {
		setTimeout(cs, 0);
		return cq = f.now()
	}
	function ci() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}

	}
	function ch() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}

	}
	function cb(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var d = a.dataTypes,
		e = {},
		g,
		h,
		i = d.length,
		j,
		k = d[0],
		l,
		m,
		n,
		o,
		p;
		for (g = 1; g < i; g++) {
			if (g === 1)
				for (h in a.converters)
					typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
			l = k,
			k = d[g];
			if (k === "*")
				k = l;
			else if (l !== "*" && l !== k) {
				m = l + " " + k,
				n = e[m] || e["* " + k];
				if (!n) {
					p = b;
					for (o in e) {
						j = o.split(" ");
						if (j[0] === l || j[0] === "*") {
							p = e[j[1] + " " + k];
							if (p) {
								o = e[o],
								o === !0 ? n = p : p === !0 && (n = o);
								break
							}
						}
					}
				}
				!n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
				n !== !0 && (c = n ? n(c) : p(o(c)))
			}
		}
		return c
	}
	function ca(a, c, d) {
		var e = a.contents,
		f = a.dataTypes,
		g = a.responseFields,
		h,
		i,
		j,
		k;
		for (i in g)
			i in d && (c[g[i]] = d[i]);
		while (f[0] === "*")
			f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if (h)
			for (i in e)
				if (e[i] && e[i].test(h)) {
					f.unshift(i);
					break
				}
		if (f[0]in d)
			j = f[0];
		else {
			for (i in d) {
				if (!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if (j) {
			j !== f[0] && f.unshift(j);
			return d[j]
		}
	}
	function b_(a, b, c, d) {
		if (f.isArray(b))
			f.each(b, function (b, e) {
				c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
			});
		else if (!c && f.type(b) === "object")
			for (var e in b)
				b_(a + "[" + e + "]", b[e], c, d);
		else
			d(a, b)
	}
	function b$(a, c) {
		var d,
		e,
		g = f.ajaxSettings.flatOptions || {};
		for (d in c)
			c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
		e && f.extend(!0, a, e)
	}
	function bZ(a, c, d, e, f, g) {
		f = f || c.dataTypes[0],
		g = g || {},
		g[f] = !0;
		var h = a[f],
		i = 0,
		j = h ? h.length : 0,
		k = a === bS,
		l;
		for (; i < j && (k || !l); i++)
			l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
		(k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
		return l
	}
	function bY(a) {
		return function (b, c) {
			typeof b != "string" && (c = b, b = "*");
			if (f.isFunction(c)) {
				var d = b.toLowerCase().split(bO),
				e = 0,
				g = d.length,
				h,
				i,
				j;
				for (; e < g; e++)
					h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
			}
		}
	}
	function bB(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
		e = b === "width" ? 1 : 0,
		g = 4;
		if (d > 0) {
			if (c !== "border")
				for (; e < g; e += 2)
					c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
			return d + "px"
		}
		d = by(a, b);
		if (d < 0 || d == null)
			d = a.style[b];
		if (bt.test(d))
			return d;
		d = parseFloat(d) || 0;
		if (c)
			for (; e < g; e += 2)
				d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
		return d + "px"
	}
	function bo(a) {
		var b = c.createElement("div");
		bh.appendChild(b),
		b.innerHTML = a.outerHTML;
		return b.firstChild
	}
	function bn(a) {
		var b = (a.nodeName || "").toLowerCase();
		b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
	}
	function bm(a) {
		if (a.type === "checkbox" || a.type === "radio")
			a.defaultChecked = a.checked
	}
	function bl(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}
	function bk(a, b) {
		var c;
		b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
	}
	function bj(a, b) {
		if (b.nodeType === 1 && !!f.hasData(a)) {
			var c,
			d,
			e,
			g = f._data(a),
			h = f._data(b, g),
			i = g.events;
			if (i) {
				delete h.handle,
				h.events = {};
				for (c in i)
					for (d = 0, e = i[c].length; d < e; d++)
						f.event.add(b, c, i[c][d])
			}
			h.data && (h.data = f.extend({}, h.data))
		}
	}
	function bi(a, b) {
		return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function U(a) {
		var b = V.split("|"),
		c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length)
				c.createElement(b.pop());
		return c
	}
	function T(a, b, c) {
		b = b || 0;
		if (f.isFunction(b))
			return f.grep(a, function (a, d) {
				var e = !!b.call(a, d, a);
				return e === c
			});
		if (b.nodeType)
			return f.grep(a, function (a, d) {
				return a === b === c
			});
		if (typeof b == "string") {
			var d = f.grep(a, function (a) {
					return a.nodeType === 1
				});
			if (O.test(b))
				return f.filter(b, d, !c);
			b = f.filter(b, d)
		}
		return f.grep(a, function (a, d) {
			return f.inArray(a, b) >= 0 === c
		})
	}
	function S(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}
	function K() {
		return !0
	}
	function J() {
		return !1
	}
	function n(a, b, c) {
		var d = b + "defer",
		e = b + "queue",
		g = b + "mark",
		h = f._data(a, d);
		h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
			!f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
		}, 0)
	}
	function m(a) {
		for (var b in a) {
			if (b === "data" && f.isEmptyObject(a[b]))
				continue;
			if (b !== "toJSON")
				return !1
		}
		return !0
	}
	function l(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(k, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
				} catch (g) {}

				f.data(a, c, d)
			} else
				d = b
		}
		return d
	}
	function h(a) {
		var b = g[a] = {},
		c,
		d;
		a = a.split(/\s+/);
		for (c = 0, d = a.length; c < d; c++)
			b[a[c]] = !0;
		return b
	}
	var c = a.document,
	d = a.navigator,
	e = a.location,
	f = function () {
		function J() {
			if (!e.isReady) {
				try {
					c.documentElement.doScroll("left")
				} catch (a) {
					setTimeout(J, 1);
					return
				}
				e.ready()
			}
		}
		var e = function (a, b) {
			return new e.fn.init(a, b, h)
		},
		f = a.jQuery,
		g = a.$,
		h,
		i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		j = /\S/,
		k = /^\s+/,
		l = /\s+$/,
		m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		n = /^[\],:{}\s]*$/,
		o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		q = /(?:^|:|,)(?:\s*\[)+/g,
		r = /(webkit)[ \/]([\w.]+)/,
		s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		t = /(msie) ([\w.]+)/,
		u = /(mozilla)(?:.*? rv:([\w.]+))?/,
		v = /-([a-z]|[0-9])/ig,
		w = /^-ms-/,
		x = function (a, b) {
			return (b + "").toUpperCase()
		},
		y = d.userAgent,
		z,
		A,
		B,
		C = Object.prototype.toString,
		D = Object.prototype.hasOwnProperty,
		E = Array.prototype.push,
		F = Array.prototype.slice,
		G = String.prototype.trim,
		H = Array.prototype.indexOf,
		I = {};
		e.fn = e.prototype = {
			constructor : e,
			init : function (a, d, f) {
				var g,
				h,
				j,
				k;
				if (!a)
					return this;
				if (a.nodeType) {
					this.context = this[0] = a,
					this.length = 1;
					return this
				}
				if (a === "body" && !d && c.body) {
					this.context = c,
					this[0] = c.body,
					this.selector = a,
					this.length = 1;
					return this
				}
				if (typeof a == "string") {
					a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? g = [null, a, null] : g = i.exec(a);
					if (g && (g[1] || !d)) {
						if (g[1]) {
							d = d instanceof e ? d[0] : d,
							k = d ? d.ownerDocument || d : c,
							j = m.exec(a),
							j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
							return e.merge(this, a)
						}
						h = c.getElementById(g[2]);
						if (h && h.parentNode) {
							if (h.id !== g[2])
								return f.find(a);
							this.length = 1,
							this[0] = h
						}
						this.context = c,
						this.selector = a;
						return this
					}
					return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
				}
				if (e.isFunction(a))
					return f.ready(a);
				a.selector !== b && (this.selector = a.selector, this.context = a.context);
				return e.makeArray(a, this)
			},
			selector : "",
			jquery : "1.7.2",
			length : 0,
			size : function () {
				return this.length
			},
			toArray : function () {
				return F.call(this, 0)
			},
			get : function (a) {
				return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
			},
			pushStack : function (a, b, c) {
				var d = this.constructor();
				e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
				d.prevObject = this,
				d.context = this.context,
				b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
				return d
			},
			each : function (a, b) {
				return e.each(this, a, b)
			},
			ready : function (a) {
				e.bindReady(),
				A.add(a);
				return this
			},
			eq : function (a) {
				a = +a;
				return a === -1 ? this.slice(a) : this.slice(a, a + 1)
			},
			first : function () {
				return this.eq(0)
			},
			last : function () {
				return this.eq(-1)
			},
			slice : function () {
				return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
			},
			map : function (a) {
				return this.pushStack(e.map(this, function (b, c) {
						return a.call(b, c, b)
					}))
			},
			end : function () {
				return this.prevObject || this.constructor(null)
			},
			push : E,
			sort : [].sort,
			splice : [].splice
		},
		e.fn.init.prototype = e.fn,
		e.extend = e.fn.extend = function () {
			var a,
			c,
			d,
			f,
			g,
			h,
			i = arguments[0] || {},
			j = 1,
			k = arguments.length,
			l = !1;
			typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2),
			typeof i != "object" && !e.isFunction(i) && (i = {}),
			k === j && (i = this, --j);
			for (; j < k; j++)
				if ((a = arguments[j]) != null)
					for (c in a) {
						d = i[c],
						f = a[c];
						if (i === f)
							continue;
						l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
					}
			return i
		},
		e.extend({
			noConflict : function (b) {
				a.$ === e && (a.$ = g),
				b && a.jQuery === e && (a.jQuery = f);
				return e
			},
			isReady : !1,
			readyWait : 1,
			holdReady : function (a) {
				a ? e.readyWait++ : e.ready(!0)
			},
			ready : function (a) {
				if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
					if (!c.body)
						return setTimeout(e.ready, 1);
					e.isReady = !0;
					if (a !== !0 && --e.readyWait > 0)
						return;
					A.fireWith(c, [e]),
					e.fn.trigger && e(c).trigger("ready").off("ready")
				}
			},
			bindReady : function () {
				if (!A) {
					A = e.Callbacks("once memory");
					if (c.readyState === "complete")
						return setTimeout(e.ready, 1);
					if (c.addEventListener)
						c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
					else if (c.attachEvent) {
						c.attachEvent("onreadystatechange", B),
						a.attachEvent("onload", e.ready);
						var b = !1;
						try {
							b = a.frameElement == null
						} catch (d) {}

						c.documentElement.doScroll && b && J()
					}
				}
			},
			isFunction : function (a) {
				return e.type(a) === "function"
			},
			isArray : Array.isArray || function (a) {
				return e.type(a) === "array"
			},
			isWindow : function (a) {
				return a != null && a == a.window
			},
			isNumeric : function (a) {
				return !isNaN(parseFloat(a)) && isFinite(a)
			},
			type : function (a) {
				return a == null ? String(a) : I[C.call(a)] || "object"
			},
			isPlainObject : function (a) {
				if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
					return !1;
				try {
					if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
						return !1
				} catch (c) {
					return !1
				}
				var d;
				for (d in a);
				return d === b || D.call(a, d)
			},
			isEmptyObject : function (a) {
				for (var b in a)
					return !1;
				return !0
			},
			error : function (a) {
				throw new Error(a)
			},
			parseJSON : function (b) {
				if (typeof b != "string" || !b)
					return null;
				b = e.trim(b);
				if (a.JSON && a.JSON.parse)
					return a.JSON.parse(b);
				if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
					return (new Function("return " + b))();
				e.error("Invalid JSON: " + b)
			},
			parseXML : function (c) {
				if (typeof c != "string" || !c)
					return null;
				var d,
				f;
				try {
					a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
				} catch (g) {
					d = b
				}
				(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
				return d
			},
			noop : function () {},
			globalEval : function (b) {
				b && j.test(b) && (a.execScript || function (b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase : function (a) {
				return a.replace(w, "ms-").replace(v, x)
			},
			nodeName : function (a, b) {
				return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
			},
			each : function (a, c, d) {
				var f,
				g = 0,
				h = a.length,
				i = h === b || e.isFunction(a);
				if (d) {
					if (i) {
						for (f in a)
							if (c.apply(a[f], d) === !1)
								break
					} else
						for (; g < h; )
							if (c.apply(a[g++], d) === !1)
								break
				} else if (i) {
					for (f in a)
						if (c.call(a[f], f, a[f]) === !1)
							break
				} else
					for (; g < h; )
						if (c.call(a[g], g, a[g++]) === !1)
							break;
				return a
			},
			trim : G ? function (a) {
				return a == null ? "" : G.call(a)
			}
			 : function (a) {
				return a == null ? "" : a.toString().replace(k, "").replace(l, "")
			},
			makeArray : function (a, b) {
				var c = b || [];
				if (a != null) {
					var d = e.type(a);
					a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
				}
				return c
			},
			inArray : function (a, b, c) {
				var d;
				if (b) {
					if (H)
						return H.call(b, a, c);
					d = b.length,
					c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
					for (; c < d; c++)
						if (c in b && b[c] === a)
							return c
				}
				return -1
			},
			merge : function (a, c) {
				var d = a.length,
				e = 0;
				if (typeof c.length == "number")
					for (var f = c.length; e < f; e++)
						a[d++] = c[e];
				else
					while (c[e] !== b)
						a[d++] = c[e++];
				a.length = d;
				return a
			},
			grep : function (a, b, c) {
				var d = [],
				e;
				c = !!c;
				for (var f = 0, g = a.length; f < g; f++)
					e = !!b(a[f], f), c !== e && d.push(a[f]);
				return d
			},
			map : function (a, c, d) {
				var f,
				g,
				h = [],
				i = 0,
				j = a.length,
				k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
				if (k)
					for (; i < j; i++)
						f = c(a[i], i, d), f != null && (h[h.length] = f);
				else
					for (g in a)
						f = c(a[g], g, d), f != null && (h[h.length] = f);
				return h.concat.apply([], h)
			},
			guid : 1,
			proxy : function (a, c) {
				if (typeof c == "string") {
					var d = a[c];
					c = a,
					a = d
				}
				if (!e.isFunction(a))
					return b;
				var f = F.call(arguments, 2),
				g = function () {
					return a.apply(c, f.concat(F.call(arguments)))
				};
				g.guid = a.guid = a.guid || g.guid || e.guid++;
				return g
			},
			access : function (a, c, d, f, g, h, i) {
				var j,
				k = d == null,
				l = 0,
				m = a.length;
				if (d && typeof d == "object") {
					for (l in d)
						e.access(a, c, l, d[l], 1, h, f);
					g = 1
				} else if (f !== b) {
					j = i === b && e.isFunction(f),
					k && (j ? (j = c, c = function (a, b, c) {
							return j.call(e(a), c)
						}) : (c.call(a, f), c = null));
					if (c)
						for (; l < m; l++)
							c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
					g = 1
				}
				return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
			},
			now : function () {
				return (new Date).getTime()
			},
			uaMatch : function (a) {
				a = a.toLowerCase();
				var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
				return {
					browser : b[1] || "",
					version : b[2] || "0"
				}
			},
			sub : function () {
				function a(b, c) {
					return new a.fn.init(b, c)
				}
				e.extend(!0, a, this),
				a.superclass = this,
				a.fn = a.prototype = this(),
				a.fn.constructor = a,
				a.sub = this.sub,
				a.fn.init = function (d, f) {
					f && f instanceof e && !(f instanceof a) && (f = a(f));
					return e.fn.init.call(this, d, f, b)
				},
				a.fn.init.prototype = a.fn;
				var b = a(c);
				return a
			},
			browser : {}

		}),
		e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
			I["[object " + b + "]"] = b.toLowerCase()
		}),
		z = e.uaMatch(y),
		z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version),
		e.browser.webkit && (e.browser.safari = !0),
		j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/),
		h = e(c),
		c.addEventListener ? B = function () {
			c.removeEventListener("DOMContentLoaded", B, !1),
			e.ready()
		}
		 : c.attachEvent && (B = function () {
			c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
		});
		return e
	}
	(),
	g = {};
	f.Callbacks = function (a) {
		a = a ? g[a] || h(a) : {};
		var c = [],
		d = [],
		e,
		i,
		j,
		k,
		l,
		m,
		n = function (b) {
			var d,
			e,
			g,
			h,
			i;
			for (d = 0, e = b.length; d < e; d++)
				g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
		},
		o = function (b, f) {
			f = f || [],
			e = !a.memory || [b, f],
			i = !0,
			j = !0,
			m = k || 0,
			k = 0,
			l = c.length;
			for (; c && m < l; m++)
				if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
					e = !0;
					break
				}
			j = !1,
			c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
		},
		p = {
			add : function () {
				if (c) {
					var a = c.length;
					n(arguments),
					j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
				}
				return this
			},
			remove : function () {
				if (c) {
					var b = arguments,
					d = 0,
					e = b.length;
					for (; d < e; d++)
						for (var f = 0; f < c.length; f++)
							if (b[d] === c[f]) {
								j && f <= l && (l--, f <= m && m--),
								c.splice(f--, 1);
								if (a.unique)
									break
							}
				}
				return this
			},
			has : function (a) {
				if (c) {
					var b = 0,
					d = c.length;
					for (; b < d; b++)
						if (a === c[b])
							return !0
				}
				return !1
			},
			empty : function () {
				c = [];
				return this
			},
			disable : function () {
				c = d = e = b;
				return this
			},
			disabled : function () {
				return !c
			},
			lock : function () {
				d = b,
				(!e || e === !0) && p.disable();
				return this
			},
			locked : function () {
				return !d
			},
			fireWith : function (b, c) {
				d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
				return this
			},
			fire : function () {
				p.fireWith(this, arguments);
				return this
			},
			fired : function () {
				return !!i
			}
		};
		return p
	};
	var i = [].slice;
	f.extend({
		Deferred : function (a) {
			var b = f.Callbacks("once memory"),
			c = f.Callbacks("once memory"),
			d = f.Callbacks("memory"),
			e = "pending",
			g = {
				resolve : b,
				reject : c,
				notify : d
			},
			h = {
				done : b.add,
				fail : c.add,
				progress : d.add,
				state : function () {
					return e
				},
				isResolved : b.fired,
				isRejected : c.fired,
				then : function (a, b, c) {
					i.done(a).fail(b).progress(c);
					return this
				},
				always : function () {
					i.done.apply(i, arguments).fail.apply(i, arguments);
					return this
				},
				pipe : function (a, b, c) {
					return f.Deferred(function (d) {
						f.each({
							done : [a, "resolve"],
							fail : [b, "reject"],
							progress : [c, "notify"]
						}, function (a, b) {
							var c = b[0],
							e = b[1],
							g;
							f.isFunction(c) ? i[a](function () {
								g = c.apply(this, arguments),
								g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
							}) : i[a](d[e])
						})
					}).promise()
				},
				promise : function (a) {
					if (a == null)
						a = h;
					else
						for (var b in h)
							a[b] = h[b];
					return a
				}
			},
			i = h.promise({}),
			j;
			for (j in g)
				i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
			i.done(function () {
				e = "resolved"
			}, c.disable, d.lock).fail(function () {
				e = "rejected"
			}, b.disable, d.lock),
			a && a.call(i, i);
			return i
		},
		when : function (a) {
			function m(a) {
				return function (b) {
					e[a] = arguments.length > 1 ? i.call(arguments, 0) : b,
					j.notifyWith(k, e)
				}
			}
			function l(a) {
				return function (c) {
					b[a] = arguments.length > 1 ? i.call(arguments, 0) : c,
					--g || j.resolveWith(j, b)
				}
			}
			var b = i.call(arguments, 0),
			c = 0,
			d = b.length,
			e = Array(d),
			g = d,
			h = d,
			j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
			k = j.promise();
			if (d > 1) {
				for (; c < d; c++)
					b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
				g || j.resolveWith(j, b)
			} else
				j !== a && j.resolveWith(j, d ? [a] : []);
			return k
		}
	}),
	f.support = function () {
		var b,
		d,
		e,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o,
		p = c.createElement("div"),
		q = c.documentElement;
		p.setAttribute("className", "t"),
		p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
		d = p.getElementsByTagName("*"),
		e = p.getElementsByTagName("a")[0];
		if (!d || !d.length || !e)
			return {};
		g = c.createElement("select"),
		h = g.appendChild(c.createElement("option")),
		i = p.getElementsByTagName("input")[0],
		b = {
			leadingWhitespace : p.firstChild.nodeType === 3,
			tbody : !p.getElementsByTagName("tbody").length,
			htmlSerialize : !!p.getElementsByTagName("link").length,
			style : /top/.test(e.getAttribute("style")),
			hrefNormalized : e.getAttribute("href") === "/a",
			opacity : /^0.55/.test(e.style.opacity),
			cssFloat : !!e.style.cssFloat,
			checkOn : i.value === "on",
			optSelected : h.selected,
			getSetAttribute : p.className !== "t",
			enctype : !!c.createElement("form").enctype,
			html5Clone : c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles : !0,
			changeBubbles : !0,
			focusinBubbles : !1,
			deleteExpando : !0,
			noCloneEvent : !0,
			inlineBlockNeedsLayout : !1,
			shrinkWrapBlocks : !1,
			reliableMarginRight : !0,
			pixelMargin : !0
		},
		f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
		i.checked = !0,
		b.noCloneChecked = i.cloneNode(!0).checked,
		g.disabled = !0,
		b.optDisabled = !h.disabled;
		try {
			delete p.test
		} catch (r) {
			b.deleteExpando = !1
		}
		!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
				b.noCloneEvent = !1
			}), p.cloneNode(!0).fireEvent("onclick")),
		i = c.createElement("input"),
		i.value = "t",
		i.setAttribute("type", "radio"),
		b.radioValue = i.value === "t",
		i.setAttribute("checked", "checked"),
		i.setAttribute("name", "t"),
		p.appendChild(i),
		j = c.createDocumentFragment(),
		j.appendChild(p.lastChild),
		b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
		b.appendChecked = i.checked,
		j.removeChild(i),
		j.appendChild(p);
		if (p.attachEvent)
			for (n in {
				submit : 1,
				change : 1,
				focusin : 1
			})
				m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
		j.removeChild(p),
		j = g = h = p = i = null,
		f(function () {
			var d,
			e,
			g,
			h,
			i,
			j,
			l,
			m,
			n,
			q,
			r,
			s,
			t,
			u = c.getElementsByTagName("body")[0];
			!u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
								marginRight : 0
							}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
					doesNotAddBorder : g.offsetTop !== 5,
					doesAddBorderForTableAndCells : i.offsetTop === 5
				}, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
						marginTop : 0
					}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
		});
		return b
	}
	();
	var j = /^(?:\{.*\}|\[.*\])$/,
	k = /([A-Z])/g;
	f.extend({
		cache : {},
		uuid : 0,
		expando : "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData : {
			embed : !0,
			object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet : !0
		},
		hasData : function (a) {
			a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
			return !!a && !m(a)
		},
		data : function (a, c, d, e) {
			if (!!f.acceptData(a)) {
				var g,
				h,
				i,
				j = f.expando,
				k = typeof c == "string",
				l = a.nodeType,
				m = l ? f.cache : a,
				n = l ? a[j] : a[j] && j,
				o = c === "events";
				if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
					return;
				n || (l ? a[j] = n = ++f.uuid : n = j),
				m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
				if (typeof c == "object" || typeof c == "function")
					e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
				g = h = m[n],
				e || (h.data || (h.data = {}), h = h.data),
				d !== b && (h[f.camelCase(c)] = d);
				if (o && !h[c])
					return g.events;
				k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
				return i
			}
		},
		removeData : function (a, b, c) {
			if (!!f.acceptData(a)) {
				var d,
				e,
				g,
				h = f.expando,
				i = a.nodeType,
				j = i ? f.cache : a,
				k = i ? a[h] : h;
				if (!j[k])
					return;
				if (b) {
					d = c ? j[k] : j[k].data;
					if (d) {
						f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
						for (e = 0, g = b.length; e < g; e++)
							delete d[b[e]];
						if (!(c ? m : f.isEmptyObject)(d))
							return
					}
				}
				if (!c) {
					delete j[k].data;
					if (!m(j[k]))
						return
				}
				f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null,
				i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
			}
		},
		_data : function (a, b, c) {
			return f.data(a, b, c, !0)
		},
		acceptData : function (a) {
			if (a.nodeName) {
				var b = f.noData[a.nodeName.toLowerCase()];
				if (b)
					return b !== !0 && a.getAttribute("classid") === b
			}
			return !0
		}
	}),
	f.fn.extend({
		data : function (a, c) {
			var d,
			e,
			g,
			h,
			i,
			j = this[0],
			k = 0,
			m = null;
			if (a === b) {
				if (this.length) {
					m = f.data(j);
					if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
						g = j.attributes;
						for (i = g.length; k < i; k++)
							h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
						f._data(j, "parsedAttrs", !0)
					}
				}
				return m
			}
			if (typeof a == "object")
				return this.each(function () {
					f.data(this, a)
				});
			d = a.split(".", 2),
			d[1] = d[1] ? "." + d[1] : "",
			e = d[1] + "!";
			return f.access(this, function (c) {
				if (c === b) {
					m = this.triggerHandler("getData" + e, [d[0]]),
					m === b && j && (m = f.data(j, a), m = l(j, a, m));
					return m === b && d[1] ? this.data(d[0]) : m
				}
				d[1] = c,
				this.each(function () {
					var b = f(this);
					b.triggerHandler("setData" + e, d),
					f.data(this, a, c),
					b.triggerHandler("changeData" + e, d)
				})
			}, null, c, arguments.length > 1, null, !1)
		},
		removeData : function (a) {
			return this.each(function () {
				f.removeData(this, a)
			})
		}
	}),
	f.extend({
		_mark : function (a, b) {
			a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
		},
		_unmark : function (a, b, c) {
			a !== !0 && (c = b, b = a, a = !1);
			if (b) {
				c = c || "fx";
				var d = c + "mark",
				e = a ? 0 : (f._data(b, d) || 1) - 1;
				e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
			}
		},
		queue : function (a, b, c) {
			var d;
			if (a) {
				b = (b || "fx") + "queue",
				d = f._data(a, b),
				c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
				return d || []
			}
		},
		dequeue : function (a, b) {
			b = b || "fx";
			var c = f.queue(a, b),
			d = c.shift(),
			e = {};
			d === "inprogress" && (d = c.shift()),
			d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
					f.dequeue(a, b)
				}, e)),
			c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
		}
	}),
	f.fn.extend({
		queue : function (a, c) {
			var d = 2;
			typeof a != "string" && (c = a, a = "fx", d--);
			if (arguments.length < d)
				return f.queue(this[0], a);
			return c === b ? this : this.each(function () {
				var b = f.queue(this, a, c);
				a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
			})
		},
		dequeue : function (a) {
			return this.each(function () {
				f.dequeue(this, a)
			})
		},
		delay : function (a, b) {
			a = f.fx ? f.fx.speeds[a] || a : a,
			b = b || "fx";
			return this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d)
				}
			})
		},
		clearQueue : function (a) {
			return this.queue(a || "fx", [])
		},
		promise : function (a, c) {
			function m() {
				--h || d.resolveWith(e, [e])
			}
			typeof a != "string" && (c = a, a = b),
			a = a || "fx";
			var d = f.Deferred(),
			e = this,
			g = e.length,
			h = 1,
			i = a + "defer",
			j = a + "queue",
			k = a + "mark",
			l;
			while (g--)
				if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))
					h++, l.add(m);
			m();
			return d.promise(c)
		}
	});
	var o = /[\n\t\r]/g,
	p = /\s+/,
	q = /\r/g,
	r = /^(?:button|input)$/i,
	s = /^(?:button|input|object|select|textarea)$/i,
	t = /^a(?:rea)?$/i,
	u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	v = f.support.getSetAttribute,
	w,
	x,
	y;
	f.fn.extend({
		attr : function (a, b) {
			return f.access(this, f.attr, a, b, arguments.length > 1)
		},
		removeAttr : function (a) {
			return this.each(function () {
				f.removeAttr(this, a)
			})
		},
		prop : function (a, b) {
			return f.access(this, f.prop, a, b, arguments.length > 1)
		},
		removeProp : function (a) {
			a = f.propFix[a] || a;
			return this.each(function () {
				try {
					this[a] = b,
					delete this[a]
				} catch (c) {}

			})
		},
		addClass : function (a) {
			var b,
			c,
			d,
			e,
			g,
			h,
			i;
			if (f.isFunction(a))
				return this.each(function (b) {
					f(this).addClass(a.call(this, b, this.className))
				});
			if (a && typeof a == "string") {
				b = a.split(p);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1)
						if (!e.className && b.length === 1)
							e.className = a;
						else {
							g = " " + e.className + " ";
							for (h = 0, i = b.length; h < i; h++)
								~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
							e.className = f.trim(g)
						}
				}
			}
			return this
		},
		removeClass : function (a) {
			var c,
			d,
			e,
			g,
			h,
			i,
			j;
			if (f.isFunction(a))
				return this.each(function (b) {
					f(this).removeClass(a.call(this, b, this.className))
				});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(p);
				for (d = 0, e = this.length; d < e; d++) {
					g = this[d];
					if (g.nodeType === 1 && g.className)
						if (a) {
							h = (" " + g.className + " ").replace(o, " ");
							for (i = 0, j = c.length; i < j; i++)
								h = h.replace(" " + c[i] + " ", " ");
							g.className = f.trim(h)
						} else
							g.className = ""
				}
			}
			return this
		},
		toggleClass : function (a, b) {
			var c = typeof a,
			d = typeof b == "boolean";
			if (f.isFunction(a))
				return this.each(function (c) {
					f(this).toggleClass(a.call(this, c, this.className, b), b)
				});
			return this.each(function () {
				if (c === "string") {
					var e,
					g = 0,
					h = f(this),
					i = b,
					j = a.split(p);
					while (e = j[g++])
						i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
				} else if (c === "undefined" || c === "boolean")
					this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
			})
		},
		hasClass : function (a) {
			var b = " " + a + " ",
			c = 0,
			d = this.length;
			for (; c < d; c++)
				if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)
					return !0;
			return !1
		},
		val : function (a) {
			var c,
			d,
			e,
			g = this[0]; {
				if (!!arguments.length) {
					e = f.isFunction(a);
					return this.each(function (d) {
						var g = f(this),
						h;
						if (this.nodeType === 1) {
							e ? h = a.call(this, d, g.val()) : h = a,
							h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
											return a == null ? "" : a + ""
										})),
							c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
							if (!c || !("set" in c) || c.set(this, h, "value") === b)
								this.value = h
						}
					})
				}
				if (g) {
					c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
					if (c && "get" in c && (d = c.get(g, "value")) !== b)
						return d;
					d = g.value;
					return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
				}
			}
		}
	}),
	f.extend({
		valHooks : {
			option : {
				get : function (a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select : {
				get : function (a) {
					var b,
					c,
					d,
					e,
					g = a.selectedIndex,
					h = [],
					i = a.options,
					j = a.type === "select-one";
					if (g < 0)
						return null;
					c = j ? g : 0,
					d = j ? g + 1 : i.length;
					for (; c < d; c++) {
						e = i[c];
						if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
							b = f(e).val();
							if (j)
								return b;
							h.push(b)
						}
					}
					if (j && !h.length && i.length)
						return f(i[g]).val();
					return h
				},
				set : function (a, b) {
					var c = f.makeArray(b);
					f(a).find("option").each(function () {
						this.selected = f.inArray(f(this).val(), c) >= 0
					}),
					c.length || (a.selectedIndex = -1);
					return c
				}
			}
		},
		attrFn : {
			val : !0,
			css : !0,
			html : !0,
			text : !0,
			data : !0,
			width : !0,
			height : !0,
			offset : !0
		},
		attr : function (a, c, d, e) {
			var g,
			h,
			i,
			j = a.nodeType;
			if (!!a && j !== 3 && j !== 8 && j !== 2) {
				if (e && c in f.attrFn)
					return f(a)[c](d);
				if (typeof a.getAttribute == "undefined")
					return f.prop(a, c, d);
				i = j !== 1 || !f.isXMLDoc(a),
				i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
				if (d !== b) {
					if (d === null) {
						f.removeAttr(a, c);
						return
					}
					if (h && "set" in h && i && (g = h.set(a, d, c)) !== b)
						return g;
					a.setAttribute(c, "" + d);
					return d
				}
				if (h && "get" in h && i && (g = h.get(a, c)) !== null)
					return g;
				g = a.getAttribute(c);
				return g === null ? b : g
			}
		},
		removeAttr : function (a, b) {
			var c,
			d,
			e,
			g,
			h,
			i = 0;
			if (b && a.nodeType === 1) {
				d = b.toLowerCase().split(p),
				g = d.length;
				for (; i < g; i++)
					e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
			}
		},
		attrHooks : {
			type : {
				set : function (a, b) {
					if (r.test(a.nodeName) && a.parentNode)
						f.error("type property can't be changed");
					else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
						var c = a.value;
						a.setAttribute("type", b),
						c && (a.value = c);
						return b
					}
				}
			},
			value : {
				get : function (a, b) {
					if (w && f.nodeName(a, "button"))
						return w.get(a, b);
					return b in a ? a.value : null
				},
				set : function (a, b, c) {
					if (w && f.nodeName(a, "button"))
						return w.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix : {
			tabindex : "tabIndex",
			readonly : "readOnly",
			"for" : "htmlFor",
			"class" : "className",
			maxlength : "maxLength",
			cellspacing : "cellSpacing",
			cellpadding : "cellPadding",
			rowspan : "rowSpan",
			colspan : "colSpan",
			usemap : "useMap",
			frameborder : "frameBorder",
			contenteditable : "contentEditable"
		},
		prop : function (a, c, d) {
			var e,
			g,
			h,
			i = a.nodeType;
			if (!!a && i !== 3 && i !== 8 && i !== 2) {
				h = i !== 1 || !f.isXMLDoc(a),
				h && (c = f.propFix[c] || c, g = f.propHooks[c]);
				return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
			}
		},
		propHooks : {
			tabIndex : {
				get : function (a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}),
	f.attrHooks.tabindex = f.propHooks.tabIndex,
	x = {
		get : function (a, c) {
			var d,
			e = f.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set : function (a, b, c) {
			var d;
			b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
			return c
		}
	},
	v || (y = {
			name : !0,
			id : !0,
			coords : !0
		}, w = f.valHooks.button = {
			get : function (a, c) {
				var d;
				d = a.getAttributeNode(c);
				return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
			},
			set : function (a, b, d) {
				var e = a.getAttributeNode(d);
				e || (e = c.createAttribute(d), a.setAttributeNode(e));
				return e.nodeValue = b + ""
			}
		}, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
			f.attrHooks[b] = f.extend(f.attrHooks[b], {
					set : function (a, c) {
						if (c === "") {
							a.setAttribute(b, "auto");
							return c
						}
					}
				})
		}), f.attrHooks.contenteditable = {
			get : w.get,
			set : function (
				a, b, c) {
				b === "" && (b = "false"),
				w.set(a, b, c)
			}
		}),
	f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
		f.attrHooks[c] = f.extend(f.attrHooks[c], {
				get : function (a) {
					var d = a.getAttribute(c, 2);
					return d === null ? b : d
				}
			})
	}),
	f.support.style || (f.attrHooks.style = {
			get : function (a) {
				return a.style.cssText.toLowerCase() || b
			},
			set : function (a, b) {
				return a.style.cssText = "" + b
			}
		}),
	f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
				get : function (a) {
					var b = a.parentNode;
					b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
					return null
				}
			})),
	f.support.enctype || (f.propFix.enctype = "encoding"),
	f.support.checkOn || f.each(["radio", "checkbox"], function () {
		f.valHooks[this] = {
			get : function (a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}),
	f.each(["radio", "checkbox"], function () {
		f.valHooks[this] = f.extend(f.valHooks[this], {
				set : function (a, b) {
					if (f.isArray(b))
						return a.checked = f.inArray(f(a).val(), b) >= 0
				}
			})
	});
	var z = /^(?:textarea|input|select)$/i,
	A = /^([^\.]*)?(?:\.(.+))?$/,
	B = /(?:^|\s)hover(\.\S+)?\b/,
	C = /^key/,
	D = /^(?:mouse|contextmenu)|click/,
	E = /^(?:focusinfocus|focusoutblur)$/,
	F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	G = function (a) {
		var b = F.exec(a);
		b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
		return b
	},
	H = function (a, b) {
		var c = a.attributes || {};
		return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
	},
	I = function (a) {
		return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
	};
	f.event = {
		add : function (a, c, d, e, g) {
			var h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s;
			if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
				d.handler && (p = d, d = p.handler, g = p.selector),
				d.guid || (d.guid = f.guid++),
				j = h.events,
				j || (h.events = j = {}),
				i = h.handle,
				i || (h.handle = i = function (a) {
					return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
				}, i.elem = a),
				c = f.trim(I(c)).split(" ");
				for (k = 0; k < c.length; k++) {
					l = A.exec(c[k]) || [],
					m = l[1],
					n = (l[2] || "").split(".").sort(),
					s = f.event.special[m] || {},
					m = (g ? s.delegateType : s.bindType) || m,
					s = f.event.special[m] || {},
					o = f.extend({
							type : m,
							origType : l[1],
							data : e,
							handler : d,
							guid : d.guid,
							selector : g,
							quick : g && G(g),
							namespace : n.join(".")
						}, p),
					r = j[m];
					if (!r) {
						r = j[m] = [],
						r.delegateCount = 0;
						if (!s.setup || s.setup.call(a, e, n, i) === !1)
							a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
					}
					s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
					g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
					f.event.global[m] = !0
				}
				a = null
			}
		},
		global : {},
		remove : function (a, b, c, d, e) {
			var g = f.hasData(a) && f._data(a),
			h,
			i,
			j,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s;
			if (!!g && !!(o = g.events)) {
				b = f.trim(I(b || "")).split(" ");
				for (h = 0; h < b.length; h++) {
					i = A.exec(b[h]) || [],
					j = k = i[1],
					l = i[2];
					if (!j) {
						for (j in o)
							f.event.remove(a, j + b[h], c, d, !0);
						continue
					}
					p = f.event.special[j] || {},
					j = (d ? p.delegateType : p.bindType) || j,
					r = o[j] || [],
					m = r.length,
					l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
					for (n = 0; n < r.length; n++)
						s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
					r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
				}
				f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
			}
		},
		customEvent : {
			getData : !0,
			setData : !0,
			changeData : !0
		},
		trigger : function (c, d, e, g) {
			if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
				var h = c.type || c,
				i = [],
				j,
				k,
				l,
				m,
				n,
				o,
				p,
				q,
				r,
				s;
				if (E.test(h + f.event.triggered))
					return;
				h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
				h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
				if ((!e || f.event.customEvent[h]) && !f.event.global[h])
					return;
				c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h),
				c.type = h,
				c.isTrigger = !0,
				c.exclusive = k,
				c.namespace = i.join("."),
				c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
				o = h.indexOf(":") < 0 ? "on" + h : "";
				if (!e) {
					j = f.cache;
					for (l in j)
						j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
					return
				}
				c.result = b,
				c.target || (c.target = e),
				d = d != null ? f.makeArray(d) : [],
				d.unshift(c),
				p = f.event.special[h] || {};
				if (p.trigger && p.trigger.apply(e, d) === !1)
					return;
				r = [[e, p.bindType || h]];
				if (!g && !p.noBubble && !f.isWindow(e)) {
					s = p.delegateType || h,
					m = E.test(s + h) ? e : e.parentNode,
					n = null;
					for (; m; m = m.parentNode)
						r.push([m, s]), n = m;
					n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
				}
				for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
					m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
				c.type = h,
				!g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
				return c.result
			}
		},
		dispatch : function (c) {
			c = f.event.fix(c || a.event);
			var d = (f._data(this, "events") || {})[c.type] || [],
			e = d.delegateCount,
			g = [].slice.call(arguments, 0),
			h = !c.exclusive && !c.namespace,
			i = f.event.special[c.type] || {},
			j = [],
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r,
			s,
			t,
			u;
			g[0] = c,
			c.delegateTarget = this;
			if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
				if (e && (!c.button || c.type !== "click")) {
					n = f(this),
					n.context = this.ownerDocument || this;
					for (m = c.target; m != this; m = m.parentNode || this)
						if (m.disabled !== !0) {
							p = {},
							r = [],
							n[0] = m;
							for (k = 0; k < e; k++)
								s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
							r.length && j.push({
								elem : m,
								matches : r
							})
						}
				}
				d.length > e && j.push({
					elem : this,
					matches : d.slice(e)
				});
				for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
					q = j[k],
					c.currentTarget = q.elem;
					for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
						s = q.matches[l];
						if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))
							c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
					}
				}
				i.postDispatch && i.postDispatch.call(this, c);
				return c.result
			}
		},
		props : "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function (a, b) {
				a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
				return a
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter : function (a, d) {
				var e,
				f,
				g,
				h = d.button,
				i = d.fromElement;
				a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
				!a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
				!a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
				return a
			}
		},
		fix : function (a) {
			if (a[f.expando])
				return a;
			var d,
			e,
			g = a,
			h = f.event.fixHooks[a.type] || {},
			i = h.props ? this.props.concat(h.props) : this.props;
			a = f.Event(g);
			for (d = i.length; d; )
				e = i[--d], a[e] = g[e];
			a.target || (a.target = g.srcElement || c),
			a.target.nodeType === 3 && (a.target = a.target.parentNode),
			a.metaKey === b && (a.metaKey = a.ctrlKey);
			return h.filter ? h.filter(a, g) : a
		},
		special : {
			ready : {
				setup : f.bindReady
			},
			load : {
				noBubble : !0
			},
			focus : {
				delegateType : "focusin"
			},
			blur : {
				delegateType : "focusout"
			},
			beforeunload : {
				setup : function (a, b, c) {
					f.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown : function (a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate : function (a, b, c, d) {
			var e = f.extend(new f.Event, c, {
					type : a,
					isSimulated : !0,
					originalEvent : {}

				});
			d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
			e.isDefaultPrevented() && c.preventDefault()
		}
	},
	f.event.handle = f.event.dispatch,
	f.removeEvent = c.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}
	 : function (a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	},
	f.Event = function (a, b) {
		if (!(this instanceof f.Event))
			return new f.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a,
		b && f.extend(this, b),
		this.timeStamp = a && a.timeStamp || f.now(),
		this[f.expando] = !0
	},
	f.Event.prototype = {
		preventDefault : function () {
			this.isDefaultPrevented = K;
			var a = this.originalEvent;
			!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation : function () {
			this.isPropagationStopped = K;
			var a = this.originalEvent;
			!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = K,
			this.stopPropagation()
		},
		isDefaultPrevented : J,
		isPropagationStopped : J,
		isImmediatePropagationStopped : J
	},
	f.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (a, b) {
		f.event.special[a] = {
			delegateType : b,
			bindType : b,
			handle : function (a) {
				var c = this,
				d = a.relatedTarget,
				e = a.handleObj,
				g = e.selector,
				h;
				if (!d || d !== c && !f.contains(c, d))
					a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
				return h
			}
		}
	}),
	f.support.submitBubbles || (f.event.special.submit = {
			setup : function () {
				if (f.nodeName(this, "form"))
					return !1;
				f.event.add(this, "click._submit keypress._submit", function (a) {
					var c = a.target,
					d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
					d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
							a._submit_bubble = !0
						}), d._submit_attached = !0)
				})
			},
			postDispatch : function (a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown : function () {
				if (f.nodeName(this, "form"))
					return !1;
				f.event.remove(this, "._submit")
			}
		}),
	f.support.changeBubbles || (f.event.special.change = {
			setup : function () {
				if (z.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio")
						f.event.add(this, "propertychange._change", function (a) {
							a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
						}), f.event.add(this, "click._change", function (a) {
							this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
						});
					return !1
				}
				f.event.add(this, "beforeactivate._change", function (a) {
					var b = a.target;
					z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
							this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
						}), b._change_attached = !0)
				})
			},
			handle : function (a) {
				var b = a.target;
				if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
					return a.handleObj.handler.apply(this, arguments)
			},
			teardown : function () {
				f.event.remove(this, "._change");
				return z.test(this.nodeName)
			}
		}),
	f.support.focusinBubbles || f.each({
		focus : "focusin",
		blur : "focusout"
	}, function (a, b) {
		var d = 0,
		e = function (a) {
			f.event.simulate(b, a.target, f.event.fix(a), !0)
		};
		f.event.special[b] = {
			setup : function () {
				d++ === 0 && c.addEventListener(a, e, !0)
			},
			teardown : function () {
				--d === 0 && c.removeEventListener(a, e, !0)
			}
		}
	}),
	f.fn.extend({
		on : function (a, c, d, e, g) {
			var h,
			i;
			if (typeof a == "object") {
				typeof c != "string" && (d = d || c, c = b);
				for (i in a)
					this.on(i, c, d, a[i], g);
				return this
			}
			d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
			if (e === !1)
				e = J;
			else if (!e)
				return this;
			g === 1 && (h = e, e = function (a) {
				f().off(a);
				return h.apply(this, arguments)
			}, e.guid = h.guid || (h.guid = f.guid++));
			return this.each(function () {
				f.event.add(this, a, e, d, c)
			})
		},
		one : function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off : function (a, c, d) {
			if (a && a.preventDefault && a.handleObj) {
				var e = a.handleObj;
				f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
				return this
			}
			if (typeof a == "object") {
				for (var g in a)
					this.off(g, c, a[g]);
				return this
			}
			if (c === !1 || typeof c == "function")
				d = c, c = b;
			d === !1 && (d = J);
			return this.each(function () {
				f.event.remove(this, a, d, c)
			})
		},
		bind : function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind : function (a, b) {
			return this.off(a, null, b)
		},
		live : function (a, b, c) {
			f(this.context).on(a, this.selector, b, c);
			return this
		},
		die : function (a, b) {
			f(this.context).off(a, this.selector || "**", b);
			return this
		},
		delegate : function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate : function (a, b, c) {
			return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
		},
		trigger : function (a, b) {
			return this.each(function () {
				f.event.trigger(a, b, this)
			})
		},
		triggerHandler : function (a, b) {
			if (this[0])
				return f.event.trigger(a, b, this[0], !0)
		},
		toggle : function (a) {
			var b = arguments,
			c = a.guid || f.guid++,
			d = 0,
			e = function (c) {
				var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
				f._data(this, "lastToggle" + a.guid, e + 1),
				c.preventDefault();
				return b[e].apply(this, arguments) || !1
			};
			e.guid = c;
			while (d < b.length)
				b[d++].guid = c;
			return this.click(e)
		},
		hover : function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}),
	f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		f.fn[b] = function (a, c) {
			c == null && (c = a, a = null);
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		},
		f.attrFn && (f.attrFn[b] = !0),
		C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
		D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
	}),
	function () {
		function x(a, b, c, e, f, g) {
			for (var h = 0, i = e.length; h < i; h++) {
				var j = e[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[d] === c) {
							k = e[j.sizset];
							break
						}
						if (j.nodeType === 1) {
							g || (j[d] = c, j.sizset = h);
							if (typeof b != "string") {
								if (j === b) {
									k = !0;
									break
								}
							} else if (m.filter(b, [j]).length > 0) {
								k = j;
								break
							}
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		function w(a, b, c, e, f, g) {
			for (var h = 0, i = e.length; h < i; h++) {
				var j = e[h];
				if (j) {
					var k = !1;
					j = j[a];
					while (j) {
						if (j[d] === c) {
							k = e[j.sizset];
							break
						}
						j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
						if (j.nodeName.toLowerCase() === b) {
							k = j;
							break
						}
						j = j[a]
					}
					e[h] = k
				}
			}
		}
		var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		d = "sizcache" + (Math.random() + "").replace(".", ""),
		e = 0,
		g = Object.prototype.toString,
		h = !1,
		i = !0,
		j = /\\/g,
		k = /\r\n/g,
		l = /\W/;
		[0, 0].sort(function () {
			i = !1;
			return 0
		});
		var m = function (b, d, e, f) {
			e = e || [],
			d = d || c;
			var h = d;
			if (d.nodeType !== 1 && d.nodeType !== 9)
				return [];
			if (!b || typeof b != "string")
				return e;
			var i,
			j,
			k,
			l,
			n,
			q,
			r,
			t,
			u = !0,
			v = m.isXML(d),
			w = [],
			x = b;
			do {
				a.exec(""),
				i = a.exec(x);
				if (i) {
					x = i[3],
					w.push(i[1]);
					if (i[2]) {
						l = i[3];
						break
					}
				}
			} while (i);
			if (w.length > 1 && p.exec(b))
				if (w.length === 2 && o.relative[w[0]])
					j = y(w[0] + w[1], d, f);
				else {
					j = o.relative[w[0]] ? [d] : m(w.shift(), d);
					while (w.length)
						b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
				}
			else {
				!f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
				if (d) {
					n = f ? {
						expr : w.pop(),
						set : s(f)
					}
					 : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v),
					j = n.expr ? m.filter(n.expr, n.set) : n.set,
					w.length > 0 ? k = s(j) : u = !1;
					while (w.length)
						q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
				} else
					k = w = []
			}
			k || (k = j),
			k || m.error(q || b);
			if (g.call(k) === "[object Array]")
				if (!u)
					e.push.apply(e, k);
				else if (d && d.nodeType === 1)
					for (t = 0; k[t] != null; t++)
						k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
				else
					for (t = 0; k[t] != null; t++)
						k[t] && k[t].nodeType === 1 && e.push(j[t]);
			else
				s(k, e);
			l && (m(l, h, e, f), m.uniqueSort(e));
			return e
		};
		m.uniqueSort = function (a) {
			if (u) {
				h = i,
				a.sort(u);
				if (h)
					for (var b = 1; b < a.length; b++)
						a[b] === a[b - 1] && a.splice(b--, 1)
			}
			return a
		},
		m.matches = function (a, b) {
			return m(a, null, null, b)
		},
		m.matchesSelector = function (a, b) {
			return m(b, null, null, [a]).length > 0
		},
		m.find = function (a, b, c) {
			var d,
			e,
			f,
			g,
			h,
			i;
			if (!a)
				return [];
			for (e = 0, f = o.order.length; e < f; e++) {
				h = o.order[e];
				if (g = o.leftMatch[h].exec(a)) {
					i = g[1],
					g.splice(1, 1);
					if (i.substr(i.length - 1) !== "\\") {
						g[1] = (g[1] || "").replace(j, ""),
						d = o.find[h](g, b, c);
						if (d != null) {
							a = a.replace(o.match[h], "");
							break
						}
					}
				}
			}
			d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
			return {
				set : d,
				expr : a
			}
		},
		m.filter = function (a, c, d, e) {
			var f,
			g,
			h,
			i,
			j,
			k,
			l,
			n,
			p,
			q = a,
			r = [],
			s = c,
			t = c && c[0] && m.isXML(c[0]);
			while (a && c.length) {
				for (h in o.filter)
					if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
						k = o.filter[h],
						l = f[1],
						g = !1,
						f.splice(1, 1);
						if (l.substr(l.length - 1) === "\\")
							continue;
						s === r && (r = []);
						if (o.preFilter[h]) {
							f = o.preFilter[h](f, s, d, r, e, t);
							if (!f)
								g = i = !0;
							else if (f === !0)
								continue
						}
						if (f)
							for (n = 0; (j = s[n]) != null; n++)
								j && (i = k(j, f, n, s), p = e^i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
						if (i !== b) {
							d || (s = r),
							a = a.replace(o.match[h], "");
							if (!g)
								return [];
							break
						}
					}
				if (a === q)
					if (g == null)
						m.error(a);
					else
						break;
				q = a
			}
			return s
		},
		m.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		};
		var n = m.getText = function (a) {
			var b,
			c,
			d = a.nodeType,
			e = "";
			if (d) {
				if (d === 1 || d === 9 || d === 11) {
					if (typeof a.textContent == "string")
						return a.textContent;
					if (typeof a.innerText == "string")
						return a.innerText.replace(k, "");
					for (a = a.firstChild; a; a = a.nextSibling)
						e += n(a)
				} else if (d === 3 || d === 4)
					return a.nodeValue
			} else
				for (b = 0; c = a[b]; b++)
					c.nodeType !== 8 && (e += n(c));
			return e
		},
		o = m.selectors = {
			order : ["ID", "NAME", "TAG"],
			match : {
				ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
				TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD : /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch : {},
			attrMap : {
				"class" : "className",
				"for" : "htmlFor"
			},
			attrHandle : {
				href : function (a) {
					return a.getAttribute("href")
				},
				type : function (a) {
					return a.getAttribute("type")
				}
			},
			relative : {
				"+" : function (a, b) {
					var c = typeof b == "string",
					d = c && !l.test(b),
					e = c && !d;
					d && (b = b.toLowerCase());
					for (var f = 0, g = a.length, h; f < g; f++)
						if (h = a[f]) {
							while ((h = h.previousSibling) && h.nodeType !== 1);
							a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
						}
					e && m.filter(b, a, !0)
				},
				">" : function (a, b) {
					var c,
					d = typeof b == "string",
					e = 0,
					f = a.length;
					if (d && !l.test(b)) {
						b = b.toLowerCase();
						for (; e < f; e++) {
							c = a[e];
							if (c) {
								var g = c.parentNode;
								a[e] = g.nodeName.toLowerCase() === b ? g : !1
							}
						}
					} else {
						for (; e < f; e++)
							c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
						d && m.filter(b, a, !0)
					}
				},
				"" : function (a, b, c) {
					var d,
					f = e++,
					g = x;
					typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
					g("parentNode", b, f, a, d, c)
				},
				"~" : function (a, b, c) {
					var d,
					f = e++,
					g = x;
					typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w),
					g("previousSibling", b, f, a, d, c)
				}
			},
			find : {
				ID : function (a, b, c) {
					if (typeof b.getElementById != "undefined" && !c) {
						var d = b.getElementById(a[1]);
						return d && d.parentNode ? [d] : []
					}
				},
				NAME : function (a, b) {
					if (typeof b.getElementsByName != "undefined") {
						var c = [],
						d = b.getElementsByName(a[1]);
						for (var e = 0, f = d.length; e < f; e++)
							d[e].getAttribute("name") === a[1] && c.push(d[e]);
						return c.length === 0 ? null : c
					}
				},
				TAG : function (a, b) {
					if (typeof b.getElementsByTagName != "undefined")
						return b.getElementsByTagName(a[1])
				}
			},
			preFilter : {
				CLASS : function (a, b, c, d, e, f) {
					a = " " + a[1].replace(j, "") + " ";
					if (f)
						return a;
					for (var g = 0, h; (h = b[g]) != null; g++)
						h && (e^(h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
					return !1
				},
				ID : function (a) {
					return a[1].replace(j, "")
				},
				TAG : function (a, b) {
					return a[1].replace(j, "").toLowerCase()
				},
				CHILD : function (a) {
					if (a[1] === "nth") {
						a[2] || m.error(a[0]),
						a[2] = a[2].replace(/^\+|\s*/g, "");
						var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = b[1] + (b[2] || 1) - 0,
						a[3] = b[3] - 0
					} else
						a[2] && m.error(a[0]);
					a[0] = e++;
					return a
				},
				ATTR : function (a, b, c, d, e, f) {
					var g = a[1] = a[1].replace(j, "");
					!f && o.attrMap[g] && (a[1] = o.attrMap[g]),
					a[4] = (a[4] || a[5] || "").replace(j, ""),
					a[2] === "~=" && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO : function (b, c, d, e, f) {
					if (b[1] === "not")
						if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
							b[3] = m(b[3], null, null, c);
						else {
							var g = m.filter(b[3], c, d, !0^f);
							d || e.push.apply(e, g);
							return !1
						}
					else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
						return !0;
					return b
				},
				POS : function (a) {
					a.unshift(!0);
					return a
				}
			},
			filters : {
				enabled : function (a) {
					return a.disabled === !1 && a.type !== "hidden"
				},
				disabled : function (a) {
					return a.disabled === !0
				},
				checked : function (a) {
					return a.checked === !0
				},
				selected : function (a) {
					a.parentNode && a.parentNode.selectedIndex;
					return a.selected === !0
				},
				parent : function (a) {
					return !!a.firstChild
				},
				empty : function (a) {
					return !a.firstChild
				},
				has : function (a, b, c) {
					return !!m(c[3], a).length
				},
				header : function (a) {
					return /h\d/i.test(a.nodeName)
				},
				text : function (a) {
					var b = a.getAttribute("type"),
					c = a.type;
					return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
				},
				radio : function (a) {
					return a.nodeName.toLowerCase() === "input" && "radio" === a.type
				},
				checkbox : function (a) {
					return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
				},
				file : function (a) {
					return a.nodeName.toLowerCase() === "input" && "file" === a.type
				},
				password : function (a) {
					return a.nodeName.toLowerCase() === "input" && "password" === a.type
				},
				submit : function (a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "submit" === a.type
				},
				image : function (a) {
					return a.nodeName.toLowerCase() === "input" && "image" === a.type
				},
				reset : function (a) {
					var b = a.nodeName.toLowerCase();
					return (b === "input" || b === "button") && "reset" === a.type
				},
				button : function (a) {
					var b = a.nodeName.toLowerCase();
					return b === "input" && "button" === a.type || b === "button"
				},
				input : function (a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				},
				focus : function (a) {
					return a === a.ownerDocument.activeElement
				}
			},
			setFilters : {
				first : function (a, b) {
					return b === 0
				},
				last : function (a, b, c, d) {
					return b === d.length - 1
				},
				even : function (a, b) {
					return b % 2 === 0
				},
				odd : function (a, b) {
					return b % 2 === 1
				},
				lt : function (a, b, c) {
					return b < c[3] - 0
				},
				gt : function (a, b, c) {
					return b > c[3] - 0
				},
				nth : function (a, b, c) {
					return c[3] - 0 === b
				},
				eq : function (a, b, c) {
					return c[3] - 0 === b
				}
			},
			filter : {
				PSEUDO : function (a, b, c, d) {
					var e = b[1],
					f = o.filters[e];
					if (f)
						return f(a, c, b, d);
					if (e === "contains")
						return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
					if (e === "not") {
						var g = b[3];
						for (var h = 0, i = g.length; h < i; h++)
							if (g[h] === a)
								return !1;
						return !0
					}
					m.error(e)
				},
				CHILD : function (a, b) {
					var c,
					e,
					f,
					g,
					h,
					i,
					j,
					k = b[1],
					l = a;
					switch (k) {
					case "only":
					case "first":
						while (l = l.previousSibling)
							if (l.nodeType === 1)
								return !1;
						if (k === "first")
							return !0;
						l = a;
					case "last":
						while (l = l.nextSibling)
							if (l.nodeType === 1)
								return !1;
						return !0;
					case "nth":
						c = b[2],
						e = b[3];
						if (c === 1 && e === 0)
							return !0;
						f = b[0],
						g = a.parentNode;
						if (g && (g[d] !== f || !a.nodeIndex)) {
							i = 0;
							for (l = g.firstChild; l; l = l.nextSibling)
								l.nodeType === 1 && (l.nodeIndex = ++i);
							g[d] = f
						}
						j = a.nodeIndex - e;
						return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
					}
				},
				ID : function (a, b) {
					return a.nodeType === 1 && a.getAttribute("id") === b
				},
				TAG : function (a, b) {
					return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
				},
				CLASS : function (a, b) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
				},
				ATTR : function (a, b) {
					var c = b[1],
					d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
					e = d + "",
					f = b[2],
					g = b[4];
					return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
				},
				POS : function (a, b, c, d) {
					var e = b[2],
					f = o.setFilters[e];
					if (f)
						return f(a, c, b, d)
				}
			}
		},
		p = o.match.POS,
		q = function (a, b) {
			return "\\" + (b - 0 + 1)
		};
		for (var r in o.match)
			o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
		o.match.globalPOS = p;
		var s = function (a, b) {
			a = Array.prototype.slice.call(a, 0);
			if (b) {
				b.push.apply(b, a);
				return b
			}
			return a
		};
		try {
			Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
		} catch (t) {
			s = function (a, b) {
				var c = 0,
				d = b || [];
				if (g.call(a) === "[object Array]")
					Array.prototype.push.apply(d, a);
				else if (typeof a.length == "number")
					for (var e = a.length; c < e; c++)
						d.push(a[c]);
				else
					for (; a[c]; c++)
						d.push(a[c]);
				return d
			}
		}
		var u,
		v;
		c.documentElement.compareDocumentPosition ? u = function (a, b) {
			if (a === b) {
				h = !0;
				return 0
			}
			if (!a.compareDocumentPosition || !b.compareDocumentPosition)
				return a.compareDocumentPosition ? -1 : 1;
			return a.compareDocumentPosition(b) & 4 ? -1 : 1
		}
		 : (u = function (a, b) {
			if (a === b) {
				h = !0;
				return 0
			}
			if (a.sourceIndex && b.sourceIndex)
				return a.sourceIndex - b.sourceIndex;
			var c,
			d,
			e = [],
			f = [],
			g = a.parentNode,
			i = b.parentNode,
			j = g;
			if (g === i)
				return v(a, b);
			if (!g)
				return -1;
			if (!i)
				return 1;
			while (j)
				e.unshift(j), j = j.parentNode;
			j = i;
			while (j)
				f.unshift(j), j = j.parentNode;
			c = e.length,
			d = f.length;
			for (var k = 0; k < c && k < d; k++)
				if (e[k] !== f[k])
					return v(e[k], f[k]);
			return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
		}, v = function (a, b, c) {
			if (a === b)
				return c;
			var d = a.nextSibling;
			while (d) {
				if (d === b)
					return -1;
				d = d.nextSibling
			}
			return 1
		}),
		function () {
			var a = c.createElement("div"),
			d = "script" + (new Date).getTime(),
			e = c.documentElement;
			a.innerHTML = "<a name='" + d + "'/>",
			e.insertBefore(a, e.firstChild),
			c.getElementById(d) && (o.find.ID = function (a, c, d) {
				if (typeof c.getElementById != "undefined" && !d) {
					var e = c.getElementById(a[1]);
					return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
				}
			}, o.filter.ID = function (a, b) {
				var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
				return a.nodeType === 1 && c && c.nodeValue === b
			}),
			e.removeChild(a),
			e = a = null
		}
		(),
		function () {
			var a = c.createElement("div");
			a.appendChild(c.createComment("")),
			a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
				var c = b.getElementsByTagName(a[1]);
				if (a[1] === "*") {
					var d = [];
					for (var e = 0; c[e]; e++)
						c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			}),
			a.innerHTML = "<a href='#'></a>",
			a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
				return a.getAttribute("href", 2)
			}),
			a = null
		}
		(),
		c.querySelectorAll && function () {
			var a = m,
			b = c.createElement("div"),
			d = "__sizzle__";
			b.innerHTML = "<p class='TEST'></p>";
			if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
				m = function (b, e, f, g) {
					e = e || c;
					if (!g && !m.isXML(e)) {
						var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
						if (h && (e.nodeType === 1 || e.nodeType === 9)) {
							if (h[1])
								return s(e.getElementsByTagName(b), f);
							if (h[2] && o.find.CLASS && e.getElementsByClassName)
								return s(e.getElementsByClassName(h[2]), f)
						}
						if (e.nodeType === 9) {
							if (b === "body" && e.body)
								return s([e.body], f);
							if (h && h[3]) {
								var i = e.getElementById(h[3]);
								if (!i || !i.parentNode)
									return s([], f);
								if (i.id === h[3])
									return s([i], f)
							}
							try {
								return s(e.querySelectorAll(b), f)
							} catch (j) {}

						} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
							var k = e,
							l = e.getAttribute("id"),
							n = l || d,
							p = e.parentNode,
							q = /^\s*[+~]/.test(b);
							l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n),
							q && p && (e = e.parentNode);
							try {
								if (!q || p)
									return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
							} catch (r) {}

							finally {
								l || k.removeAttribute("id")
							}
						}
					}
					return a(b, e, f, g)
				};
				for (var e in a)
					m[e] = a[e];
				b = null
			}
		}
		(),
		function () {
			var a = c.documentElement,
			b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b) {
				var d = !b.call(c.createElement("div"), "div"),
				e = !1;
				try {
					b.call(c.documentElement, "[test!='']:sizzle")
				} catch (f) {
					e = !0
				}
				m.matchesSelector = function (a, c) {
					c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!m.isXML(a))
						try {
							if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
								var f = b.call(a, c);
								if (f || !d || a.document && a.document.nodeType !== 11)
									return f
							}
						} catch (g) {}

					return m(c, null, null, [a]).length > 0
				}
			}
		}
		(),
		function () {
			var a = c.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length === 1)
					return;
				o.order.splice(1, 0, "CLASS"),
				o.find.CLASS = function (a, b, c) {
					if (typeof b.getElementsByClassName != "undefined" && !c)
						return b.getElementsByClassName(a[1])
				},
				a = null
			}
		}
		(),
		c.documentElement.contains ? m.contains = function (a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		}
		 : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
			return !!(a.compareDocumentPosition(b) & 16)
		}
		 : m.contains = function () {
			return !1
		},
		m.isXML = function (a) {
			var b = (a ? a.ownerDocument || a : 0).documentElement;
			return b ? b.nodeName !== "HTML" : !1
		};
		var y = function (a, b, c) {
			var d,
			e = [],
			f = "",
			g = b.nodeType ? [b] : b;
			while (d = o.match.PSEUDO.exec(a))
				f += d[0], a = a.replace(o.match.PSEUDO, "");
			a = o.relative[a] ? a + "*" : a;
			for (var h = 0, i = g.length; h < i; h++)
				m(a, g[h], e, c);
			return m.filter(f, e)
		};
		m.attr = f.attr,
		m.selectors.attrMap = {},
		f.find = m,
		f.expr = m.selectors,
		f.expr[":"] = f.expr.filters,
		f.unique = m.uniqueSort,
		f.text = m.getText,
		f.isXMLDoc = m.isXML,
		f.contains = m.contains
	}
	();
	var L = /Until$/,
	M = /^(?:parents|prevUntil|prevAll)/,
	N = /,/,
	O = /^.[^:#\[\.,]*$/,
	P = Array.prototype.slice,
	Q = f.expr.match.globalPOS,
	R = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	f.fn.extend({
		find : function (a) {
			var b = this,
			c,
			d;
			if (typeof a != "string")
				return f(a).filter(function () {
					for (c = 0, d = b.length; c < d; c++)
						if (f.contains(b[c], this))
							return !0
				});
			var e = this.pushStack("", "find", a),
			g,
			h,
			i;
			for (c = 0, d = this.length; c < d; c++) {
				g = e.length,
				f.find(a, this[c], e);
				if (c > 0)
					for (h = g; h < e.length; h++)
						for (i = 0; i < g; i++)
							if (e[i] === e[h]) {
								e.splice(h--, 1);
								break
							}
			}
			return e
		},
		has : function (a) {
			var b = f(a);
			return this.filter(function () {
				for (var a = 0, c = b.length; a < c; a++)
					if (f.contains(this, b[a]))
						return !0
			})
		},
		not : function (a) {
			return this.pushStack(T(this, a, !1), "not", a)
		},
		filter : function (a) {
			return this.pushStack(T(this, a, !0), "filter", a)
		},
		is : function (a) {
			return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest : function (a, b) {
			var c = [],
			d,
			e,
			g = this[0];
			if (f.isArray(a)) {
				var h = 1;
				while (g && g.ownerDocument && g !== b) {
					for (d = 0; d < a.length; d++)
						f(g).is(a[d]) && c.push({
							selector : a[d],
							elem : g,
							level : h
						});
					g = g.parentNode,
					h++
				}
				return c
			}
			var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
			for (d = 0, e = this.length; d < e; d++) {
				g = this[d];
				while (g) {
					if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
						break
				}
			}
			c = c.length > 1 ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index : function (a) {
			if (!a)
				return this[0] && this[0].parentNode ? this.prevAll().length : -1;
			if (typeof a == "string")
				return f.inArray(this[0], f(a));
			return f.inArray(a.jquery ? a[0] : a, this)
		},
		add : function (a, b) {
			var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
			d = f.merge(this.get(), c);
			return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
		},
		andSelf : function () {
			return this.add(this.prevObject)
		}
	}),
	f.each({
		parent : function (a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents : function (a) {
			return f.dir(a, "parentNode")
		},
		parentsUntil : function (a, b, c) {
			return f.dir(a, "parentNode", c)
		},
		next : function (a) {
			return f.nth(a, 2, "nextSibling")
		},
		prev : function (a) {
			return f.nth(a, 2, "previousSibling")
		},
		nextAll : function (a) {
			return f.dir(a, "nextSibling")
		},
		prevAll : function (a) {
			return f.dir(a, "previousSibling")
		},
		nextUntil : function (a, b, c) {
			return f.dir(a, "nextSibling", c)
		},
		prevUntil : function (a, b, c) {
			return f.dir(a, "previousSibling", c)
		},
		siblings : function (a) {
			return f.sibling((a.parentNode || {}).firstChild, a)
		},
		children : function (a) {
			return f.sibling(a.firstChild)
		},
		contents : function (a) {
			return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
		}
	}, function (a, b) {
		f.fn[a] = function (c, d) {
			var e = f.map(this, b, c);
			L.test(a) || (d = c),
			d && typeof d == "string" && (e = f.filter(d, e)),
			e = this.length > 1 && !R[a] ? f.unique(e) : e,
			(this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
			return this.pushStack(e, a, P.call(arguments).join(","))
		}
	}),
	f.extend({
		filter : function (a, b, c) {
			c && (a = ":not(" + a + ")");
			return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
		},
		dir : function (a, c, d) {
			var e = [],
			g = a[c];
			while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
				g.nodeType === 1 && e.push(g), g = g[c];
			return e
		},
		nth : function (a, b, c, d) {
			b = b || 1;
			var e = 0;
			for (; a; a = a[c])
				if (a.nodeType === 1 && ++e === b)
					break;
			return a
		},
		sibling : function (a, b) {
			var c = [];
			for (; a; a = a.nextSibling)
				a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	W = / jQuery\d+="(?:\d+|null)"/g,
	X = /^\s+/,
	Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	Z = /<([\w:]+)/,
	$ = /<tbody/i,
	_ = /<|&#?\w+;/,
	ba = /<(?:script|style)/i,
	bb = /<(?:script|object|embed|option|style)/i,
	bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
	bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
	be = /\/(java|ecma)script/i,
	bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
	bg = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		legend : [1, "<fieldset>", "</fieldset>"],
		thead : [1, "<table>", "</table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area : [1, "<map>", "</map>"],
		_default : [0, "", ""]
	},
	bh = U(c);
	bg.optgroup = bg.option,
	bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead,
	bg.th = bg.td,
	f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
	f.fn.extend({
		text : function (a) {
			return f.access(this, function (a) {
				return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
			}, null, a, arguments.length)
		},
		wrapAll : function (
			a) {
			if (f.isFunction(a))
				return this.each(function (b) {
					f(this).wrapAll(a.call(this, b))
				});
			if (this[0]) {
				var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]),
				b.map(function () {
					var a = this;
					while (a.firstChild && a.firstChild.nodeType === 1)
						a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner : function (a) {
			if (f.isFunction(a))
				return this.each(function (b) {
					f(this).wrapInner(a.call(this, b))
				});
			return this.each(function () {
				var b = f(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap : function (a) {
			var b = f.isFunction(a);
			return this.each(function (c) {
				f(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
			}).end()
		},
		append : function () {
			return this.domManip(arguments, !0, function (a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend : function () {
			return this.domManip(arguments, !0, function (a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this)
				});
			if (arguments.length) {
				var a = f.clean(arguments);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, f.clean(arguments));
				return a
			}
		},
		remove : function (a, b) {
			for (var c = 0, d; (d = this[c]) != null; c++)
				if (!a || f.filter(a, [d]).length)
					!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty : function () {
			for (var a = 0, b; (b = this[a]) != null; a++) {
				b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
				while (b.firstChild)
					b.removeChild(b.firstChild)
			}
			return this
		},
		clone : function (a, b) {
			a = a == null ? !1 : a,
			b = b == null ? a : b;
			return this.map(function () {
				return f.clone(this, a, b)
			})
		},
		html : function (a) {
			return f.access(this, function (a) {
				var c = this[0] || {},
				d = 0,
				e = this.length;
				if (a === b)
					return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
				if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(Y, "<$1></$2>");
					try {
						for (; d < e; d++)
							c = this[d] || {},
						c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
						c = 0
					} catch (g) {}

				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith : function (a) {
			if (this[0] && this[0].parentNode) {
				if (f.isFunction(a))
					return this.each(function (b) {
						var c = f(this),
						d = c.html();
						c.replaceWith(a.call(this, b, d))
					});
				typeof a != "string" && (a = f(a).detach());
				return this.each(function () {
					var b = this.nextSibling,
					c = this.parentNode;
					f(this).remove(),
					b ? f(b).before(a) : f(c).append(a)
				})
			}
			return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach : function (a) {
			return this.remove(a, !0)
		},
		domManip : function (a, c, d) {
			var e,
			g,
			h,
			i,
			j = a[0],
			k = [];
			if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
				return this.each(function () {
					f(this).domManip(a, c, d, !0)
				});
			if (f.isFunction(j))
				return this.each(function (e) {
					var g = f(this);
					a[0] = j.call(this, e, c ? g.html() : b),
					g.domManip(a, c, d)
				});
			if (this[0]) {
				i = j && j.parentNode,
				f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
					fragment : i
				}
				 : e = f.buildFragment(a, this, k),
				h = e.fragment,
				h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
				if (g) {
					c = c && f.nodeName(g, "tr");
					for (var l = 0, m = this.length, n = m - 1; l < m; l++)
						d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
				}
				k.length && f.each(k, function (a, b) {
					b.src ? f.ajax({
						type : "GET",
						global : !1,
						url : b.src,
						async : !1,
						dataType : "script"
					}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")),
					b.parentNode && b.parentNode.removeChild(b)
				})
			}
			return this
		}
	}),
	f.buildFragment = function (a, b, d) {
		var e,
		g,
		h,
		i,
		j = a[0];
		b && b[0] && (i = b[0].ownerDocument || b[0]),
		i.createDocumentFragment || (i = c),
		a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)),
		e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)),
		g && (f.fragments[j] = h ? e : 1);
		return {
			fragment : e,
			cacheable : g
		}
	},
	f.fragments = {},
	f.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (a, b) {
		f.fn[a] = function (c) {
			var d = [],
			e = f(c),
			g = this.length === 1 && this[0].parentNode;
			if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
				e[b](this[0]);
				return this
			}
			for (var h = 0, i = e.length; h < i; h++) {
				var j = (h > 0 ? this.clone(!0) : this).get();
				f(e[h])[b](j),
				d = d.concat(j)
			}
			return this.pushStack(d, a, e.selector)
		}
	}),
	f.extend({
		clone : function (a, b, c) {
			var d,
			e,
			g,
			h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
			if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
				bk(a, h),
				d = bl(a),
				e = bl(h);
				for (g = 0; d[g]; ++g)
					e[g] && bk(d[g], e[g])
			}
			if (b) {
				bj(a, h);
				if (c) {
					d = bl(a),
					e = bl(h);
					for (g = 0; d[g]; ++g)
						bj(d[g], e[g])
				}
			}
			d = e = null;
			return h
		},
		clean : function (a, b, d, e) {
			var g,
			h,
			i,
			j = [];
			b = b || c,
			typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
			for (var k = 0, l; (l = a[k]) != null; k++) {
				typeof l == "number" && (l += "");
				if (!l)
					continue;
				if (typeof l == "string")
					if (!_.test(l))
						l = b.createTextNode(l);
					else {
						l = l.replace(Y, "<$1></$2>");
						var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
						n = bg[m] || bg._default,
						o = n[0],
						p = b.createElement("div"),
						q = bh.childNodes,
						r;
						b === c ? bh.appendChild(p) : U(b).appendChild(p),
						p.innerHTML = n[1] + l + n[2];
						while (o--)
							p = p.lastChild;
						if (!f.support.tbody) {
							var s = $.test(l),
							t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
							for (i = t.length - 1; i >= 0; --i)
								f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
						}
						!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
						l = p.childNodes,
						p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
					}
				var u;
				if (!f.support.appendChecked)
					if (l[0] && typeof(u = l.length) == "number")
						for (i = 0; i < u; i++)
							bn(l[i]);
					else
						bn(l);
				l.nodeType ? j.push(l) : j = f.merge(j, l)
			}
			if (d) {
				g = function (a) {
					return !a.type || be.test(a.type)
				};
				for (k = 0; j[k]; k++) {
					h = j[k];
					if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))
						e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
					else {
						if (h.nodeType === 1) {
							var v = f.grep(h.getElementsByTagName("script"), g);
							j.splice.apply(j, [k + 1, 0].concat(v))
						}
						d.appendChild(h)
					}
				}
			}
			return j
		},
		cleanData : function (a) {
			var b,
			c,
			d = f.cache,
			e = f.event.special,
			g = f.support.deleteExpando;
			for (var h = 0, i; (i = a[h]) != null; h++) {
				if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
					continue;
				c = i[f.expando];
				if (c) {
					b = d[c];
					if (b && b.events) {
						for (var j in b.events)
							e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
						b.handle && (b.handle.elem = null)
					}
					g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
					delete d[c]
				}
			}
		}
	});
	var bp = /alpha\([^)]*\)/i,
	bq = /opacity=([^)]*)/,
	br = /([A-Z]|^ms)/g,
	bs = /^[\-+]?(?:\d*\.)?\d+$/i,
	bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
	bu = /^([\-+])=([\-+.\de]+)/,
	bv = /^margin/,
	bw = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	bx = ["Top", "Right", "Bottom", "Left"],
	by,
	bz,
	bA;
	f.fn.css = function (a, c) {
		return f.access(this, function (a, c, d) {
			return d !== b ? f.style(a, c, d) : f.css(a, c)
		}, a, c, arguments.length > 1)
	},
	f.extend({
		cssHooks : {
			opacity : {
				get : function (a, b) {
					if (b) {
						var c = by(a, "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber : {
			fillOpacity : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {
			"float" : f.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style : function (a, c, d, e) {
			if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
				var g,
				h,
				i = f.camelCase(c),
				j = a.style,
				k = f.cssHooks[i];
				c = f.cssProps[i] || i;
				if (d === b) {
					if (k && "get" in k && (g = k.get(a, !1, e)) !== b)
						return g;
					return j[c]
				}
				h = typeof d,
				h === "string" && (g = bu.exec(d)) && (d =  + (g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
				if (d == null || h === "number" && isNaN(d))
					return;
				h === "number" && !f.cssNumber[i] && (d += "px");
				if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
					try {
						j[c] = d
					} catch (l) {}

			}
		},
		css : function (a, c, d) {
			var e,
			g;
			c = f.camelCase(c),
			g = f.cssHooks[c],
			c = f.cssProps[c] || c,
			c === "cssFloat" && (c = "float");
			if (g && "get" in g && (e = g.get(a, !0, d)) !== b)
				return e;
			if (by)
				return by(a, c)
		},
		swap : function (a, b, c) {
			var d = {},
			e,
			f;
			for (f in b)
				d[f] = a.style[f], a.style[f] = b[f];
			e = c.call(a);
			for (f in b)
				a.style[f] = d[f];
			return e
		}
	}),
	f.curCSS = f.css,
	c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
		var c,
		d,
		e,
		g,
		h = a.style;
		b = b.replace(br, "-$1").toLowerCase(),
		(d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))),
		!f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
		return c
	}),
	c.documentElement.currentStyle && (bA = function (a, b) {
		var c,
		d,
		e,
		f = a.currentStyle && a.currentStyle[b],
		g = a.style;
		f == null && g && (e = g[b]) && (f = e),
		bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
		return f === "" ? "auto" : f
	}),
	by = bz || bA,
	f.each(["height", "width"], function (a, b) {
		f.cssHooks[b] = {
			get : function (a, c, d) {
				if (c)
					return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
						return bB(a, b, d)
					})
			},
			set : function (a, b) {
				return bs.test(b) ? b + "px" : b
			}
		}
	}),
	f.support.opacity || (f.cssHooks.opacity = {
			get : function (a, b) {
				return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
			},
			set : function (a, b) {
				var c = a.style,
				d = a.currentStyle,
				e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				g = d && d.filter || c.filter || "";
				c.zoom = 1;
				if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
					c.removeAttribute("filter");
					if (d && !d.filter)
						return
				}
				c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
			}
		}),
	f(function () {
		f.support.reliableMarginRight || (f.cssHooks.marginRight = {
				get : function (a, b) {
					return f.swap(a, {
						display : "inline-block"
					}, function () {
						return b ? by(a, "margin-right") : a.style.marginRight
					})
				}
			})
	}),
	f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
		var b = a.offsetWidth,
		c = a.offsetHeight;
		return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
	}, f.expr.filters.visible = function (a) {
		return !f.expr.filters.hidden(a)
	}),
	f.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function (a, b) {
		f.cssHooks[a + b] = {
			expand : function (c) {
				var d,
				e = typeof c == "string" ? c.split(" ") : [c],
				f = {};
				for (d = 0; d < 4; d++)
					f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
				return f
			}
		}
	});
	var bC = /%20/g,
	bD = /\[\]$/,
	bE = /\r?\n/g,
	bF = /#.*$/,
	bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	bJ = /^(?:GET|HEAD)$/,
	bK = /^\/\//,
	bL = /\?/,
	bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	bN = /^(?:select|textarea)/i,
	bO = /\s+/,
	bP = /([?&])_=[^&]*/,
	bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
	bR = f.fn.load,
	bS = {},
	bT = {},
	bU,
	bV,
	bW = ["*/"] + ["*"];
	try {
		bU = e.href
	} catch (bX) {
		bU = c.createElement("a"),
		bU.href = "",
		bU = bU.href
	}
	bV = bQ.exec(bU.toLowerCase()) || [],
	f.fn.extend({
		load : function (a, c, d) {
			if (typeof a != "string" && bR)
				return bR.apply(this, arguments);
			if (!this.length)
				return this;
			var e = a.indexOf(" ");
			if (e >= 0) {
				var g = a.slice(e, a.length);
				a = a.slice(0, e)
			}
			var h = "GET";
			c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
			var i = this;
			f.ajax({
				url : a,
				type : h,
				dataType : "html",
				data : c,
				complete : function (a, b, c) {
					c = a.responseText,
					a.isResolved() && (a.done(function (a) {
							c = a
						}), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
					d && i.each(d, [c, b, a])
				}
			});
			return this
		},
		serialize : function () {
			return f.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				return this.elements ? f.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
			}).map(function (a, b) {
				var c = f(this).val();
				return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
					return {
						name : b.name,
						value : a.replace(bE, "\r\n")
					}
				}) : {
					name : b.name,
					value : c.replace(bE, "\r\n")
				}
			}).get()
		}
	}),
	f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
		f.fn[b] = function (a) {
			return this.on(b, a)
		}
	}),
	f.each(["get", "post"], function (a, c) {
		f[c] = function (a, d, e, g) {
			f.isFunction(d) && (g = g || e, e = d, d = b);
			return f.ajax({
				type : c,
				url : a,
				data : d,
				success : e,
				dataType : g
			})
		}
	}),
	f.extend({
		getScript : function (a, c) {
			return f.get(a, b, c, "script")
		},
		getJSON : function (a, b, c) {
			return f.get(a, b, c, "json")
		},
		ajaxSetup : function (a, b) {
			b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
			b$(a, b);
			return a
		},
		ajaxSettings : {
			url : bU,
			isLocal : bI.test(bV[1]),
			global : !0,
			type : "GET",
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			processData : !0,
			async : !0,
			accepts : {
				xml : "application/xml, text/xml",
				html : "text/html",
				text : "text/plain",
				json : "application/json, text/javascript",
				"*" : bW
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText"
			},
			converters : {
				"* text" : a.String,
				"text html" : !0,
				"text json" : f.parseJSON,
				"text xml" : f.parseXML
			},
			flatOptions : {
				context : !0,
				url : !0
			}
		},
		ajaxPrefilter : bY(bS),
		ajaxTransport : bY(bT),
		ajax : function (a, c) {
			function w(a, c, l, m) {
				if (s !== 2) {
					s = 2,
					q && clearTimeout(q),
					p = b,
					n = m || "",
					v.readyState = a > 0 ? 4 : 0;
					var o,
					r,
					u,
					w = c,
					x = l ? ca(d, v, l) : b,
					y,
					z;
					if (a >= 200 && a < 300 || a === 304) {
						if (d.ifModified) {
							if (y = v.getResponseHeader("Last-Modified"))
								f.lastModified[k] = y;
							if (z = v.getResponseHeader("Etag"))
								f.etag[k] = z
						}
						if (a === 304)
							w = "notmodified", o = !0;
						else
							try {
								r = cb(d, x),
								w = "success",
								o = !0
							} catch (A) {
								w = "parsererror",
								u = A
							}
					} else {
						u = w;
						if (!w || a)
							w = "error", a < 0 && (a = 0)
					}
					v.status = a,
					v.statusText = "" + (c || w),
					o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
					v.statusCode(j),
					j = b,
					t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
					i.fireWith(e, [v, w]),
					t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
				}
			}
			typeof a == "object" && (c = a, a = b),
			c = c || {};
			var d = f.ajaxSetup({}, c),
			e = d.context || d,
			g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
			h = f.Deferred(),
			i = f.Callbacks("once memory"),
			j = d.statusCode || {},
			k,
			l = {},
			m = {},
			n,
			o,
			p,
			q,
			r,
			s = 0,
			t,
			u,
			v = {
				readyState : 0,
				setRequestHeader : function (a, b) {
					if (!s) {
						var c = a.toLowerCase();
						a = m[c] = m[c] || a,
						l[a] = b
					}
					return this
				},
				getAllResponseHeaders : function () {
					return s === 2 ? n : null
				},
				getResponseHeader : function (a) {
					var c;
					if (s === 2) {
						if (!o) {
							o = {};
							while (c = bG.exec(n))
								o[c[1].toLowerCase()] = c[2]
						}
						c = o[a.toLowerCase()]
					}
					return c === b ? null : c
				},
				overrideMimeType : function (a) {
					s || (d.mimeType = a);
					return this
				},
				abort : function (a) {
					a = a || "abort",
					p && p.abort(a),
					w(0, a);
					return this
				}
			};
			h.promise(v),
			v.success = v.done,
			v.error = v.fail,
			v.complete = i.add,
			v.statusCode = function (a) {
				if (a) {
					var b;
					if (s < 2)
						for (b in a)
							j[b] = [j[b], a[b]];
					else
						b = a[v.status], v.then(b, b)
				}
				return this
			},
			d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"),
			d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO),
			d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))),
			d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
			bZ(bS, d, c, v);
			if (s === 2)
				return !1;
			t = d.global,
			d.type = d.type.toUpperCase(),
			d.hasContent = !bJ.test(d.type),
			t && f.active++ === 0 && f.event.trigger("ajaxStart");
			if (!d.hasContent) {
				d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data),
				k = d.url;
				if (d.cache === !1) {
					var x = f.now(),
					y = d.url.replace(bP, "$1_=" + x);
					d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
				}
			}
			(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
			d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
			v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
			for (u in d.headers)
				v.setRequestHeader(u, d.headers[u]);
			if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
				v.abort();
				return !1
			}
			for (u in {
				success : 1,
				error : 1,
				complete : 1
			})
				v[u](d[u]);
			p = bZ(bT, d, c, v);
			if (!p)
				w(-1, "No Transport");
			else {
				v.readyState = 1,
				t && g.trigger("ajaxSend", [v, d]),
				d.async && d.timeout > 0 && (q = setTimeout(function () {
							v.abort("timeout")
						}, d.timeout));
				try {
					s = 1,
					p.send(l, w)
				} catch (z) {
					if (s < 2)
						w(-1, z);
					else
						throw z
				}
			}
			return v
		},
		param : function (a, c) {
			var d = [],
			e = function (a, b) {
				b = f.isFunction(b) ? b() : b,
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
			c === b && (c = f.ajaxSettings.traditional);
			if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
				f.each(a, function () {
					e(this.name, this.value)
				});
			else
				for (var g in a)
					b_(g, a[g], c, e);
			return d.join("&").replace(bC, "+")
		}
	}),
	f.extend({
		active : 0,
		lastModified : {},
		etag : {}

	});
	var cc = f.now(),
	cd = /(\=)\?(&|$)|\?\?/i;
	f.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			return f.expando + "_" + cc++
		}
	}),
	f.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
		if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
			var g,
			h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
			i = a[h],
			j = b.url,
			k = b.data,
			l = "$1" + h + "$2";
			b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
			b.url = j,
			b.data = k,
			a[h] = function (a) {
				g = [a]
			},
			d.always(function () {
				a[h] = i,
				g && f.isFunction(i) && a[h](g[0])
			}),
			b.converters["script json"] = function () {
				g || f.error(h + " was not called");
				return g[0]
			},
			b.dataTypes[0] = "json";
			return "script"
		}
	}),
	f.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /javascript|ecmascript/
		},
		converters : {
			"text script" : function (a) {
				f.globalEval(a);
				return a
			}
		}
	}),
	f.ajaxPrefilter("script", function (a) {
		a.cache === b && (a.cache = !1),
		a.crossDomain && (a.type = "GET", a.global = !1)
	}),
	f.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var d,
			e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
			return {
				send : function (f, g) {
					d = c.createElement("script"),
					d.async = "async",
					a.scriptCharset && (d.charset = a.scriptCharset),
					d.src = a.url,
					d.onload = d.onreadystatechange = function (a, c) {
						if (c || !d.readyState || /loaded|complete/.test(d.readyState))
							d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
					},
					e.insertBefore(d, e.firstChild)
				},
				abort : function () {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var ce = a.ActiveXObject ? function () {
		for (var a in cg)
			cg[a](0, 1)
	}
	 : !1,
	cf = 0,
	cg;
	f.ajaxSettings.xhr = a.ActiveXObject ? function () {
		return !this.isLocal && ch() || ci()
	}
	 : ch,
	function (a) {
		f.extend(f.support, {
			ajax : !!a,
			cors : !!a && "withCredentials" in a
		})
	}
	(f.ajaxSettings.xhr()),
	f.support.ajax && f.ajaxTransport(function (c) {
		if (!c.crossDomain || f.support.cors) {
			var d;
			return {
				send : function (e, g) {
					var h = c.xhr(),
					i,
					j;
					c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
					if (c.xhrFields)
						for (j in c.xhrFields)
							h[j] = c.xhrFields[j];
					c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
					!c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (j in e)
							h.setRequestHeader(j, e[j])
					} catch (k) {}

					h.send(c.hasContent && c.data || null),
					d = function (a, e) {
						var j,
						k,
						l,
						m,
						n;
						try {
							if (d && (e || h.readyState === 4)) {
								d = b,
								i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
								if (e)
									h.readyState !== 4 && h.abort();
								else {
									j = h.status,
									l = h.getAllResponseHeaders(),
									m = {},
									n = h.responseXML,
									n && n.documentElement && (m.xml = n);
									try {
										m.text = h.responseText
									} catch (a) {}

									try {
										k = h.statusText
									} catch (o) {
										k = ""
									}
									!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
								}
							}
						} catch (p) {
							e || g(-1, p)
						}
						m && g(j, k, m, l)
					},
					!c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
				},
				abort : function () {
					d && d(0, 1)
				}
			}
		}
	});
	var cj = {},
	ck,
	cl,
	cm = /^(?:toggle|show|hide)$/,
	cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	co,
	cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
	cq;
	f.fn.extend({
		show : function (a, b, c) {
			var d,
			e;
			if (a || a === 0)
				return this.animate(ct("show", 3), a, b, c);
			for (var g = 0, h = this.length; g < h; g++)
				d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
			for (g = 0; g < h; g++) {
				d = this[g];
				if (d.style) {
					e = d.style.display;
					if (e === "" || e === "none")
						d.style.display = f._data(d, "olddisplay") || ""
				}
			}
			return this
		},
		hide : function (a, b, c) {
			if (a || a === 0)
				return this.animate(ct("hide", 3), a, b, c);
			var d,
			e,
			g = 0,
			h = this.length;
			for (; g < h; g++)
				d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
			for (g = 0; g < h; g++)
				this[g].style && (this[g].style.display = "none");
			return this
		},
		_toggle : f.fn.toggle,
		toggle : function (a, b, c) {
			var d = typeof a == "boolean";
			f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
				var b = d ? a : f(this).is(":hidden");
				f(this)[b ? "show" : "hide"]()
			}) : this.animate(ct("toggle", 3), a, b, c);
			return this
		},
		fadeTo : function (a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity : b
			}, a, c, d)
		},
		animate : function (a, b, c, d) {
			function g() {
				e.queue === !1 && f._mark(this);
				var b = f.extend({}, e),
				c = this.nodeType === 1,
				d = c && f(this).is(":hidden"),
				g,
				h,
				i,
				j,
				k,
				l,
				m,
				n,
				o,
				p,
				q;
				b.animatedProperties = {};
				for (i in a) {
					g = f.camelCase(i),
					i !== g && (a[g] = a[i], delete a[i]);
					if ((k = f.cssHooks[g]) && "expand" in k) {
						l = k.expand(a[g]),
						delete a[g];
						for (i in l)
							i in a || (a[i] = l[i])
					}
				}
				for (g in a) {
					h = a[g],
					f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
					if (h === "hide" && d || h === "show" && !d)
						return b.complete.call(this);
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for (i in a)
					j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
				return !0
			}
			var e = f.speed(b, c, d);
			if (f.isEmptyObject(a))
				return this.each(e.complete, [!1]);
			a = f.extend({}, a);
			return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
		},
		stop : function (a, c, d) {
			typeof a != "string" && (d = c, c = a, a = b),
			c && a !== !1 && this.queue(a || "fx", []);
			return this.each(function () {
				function h(a, b, c) {
					var e = b[c];
					f.removeData(a, c, !0),
					e.stop(d)
				}
				var b,
				c = !1,
				e = f.timers,
				g = f._data(this);
				d || f._unmark(!0, this);
				if (a == null)
					for (b in g)
						g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
				else
					g[b = a + ".run"] && g[b].stop && h(this, g, b);
				for (b = e.length; b--; )
					e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
				(!d || !c) && f.dequeue(this, a)
			})
		}
	}),
	f.each({
		slideDown : ct("show", 1),
		slideUp : ct("hide", 1),
		slideToggle : ct("toggle", 1),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (a, b) {
		f.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}),
	f.extend({
		speed : function (a, b, c) {
			var d = a && typeof a == "object" ? f.extend({}, a) : {
				complete : c || !c && b || f.isFunction(a) && a,
				duration : a,
				easing : c && b || b && !f.isFunction(b) && b
			};
			d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
			if (d.queue == null || d.queue === !0)
				d.queue = "fx";
			d.old = d.complete,
			d.complete = function (a) {
				f.isFunction(d.old) && d.old.call(this),
				d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
			};
			return d
		},
		easing : {
			linear : function (a) {
				return a
			},
			swing : function (a) {
				return -Math.cos(a * Math.PI) / 2 + .5
			}
		},
		timers : [],
		fx : function (a, b, c) {
			this.options = b,
			this.elem = a,
			this.prop = c,
			b.orig = b.orig || {}

		}
	}),
	f.fx.prototype = {
		update : function () {
			this.options.step && this.options.step.call(this.elem, this.now, this),
			(f.fx.step[this.prop] || f.fx.step._default)(this)
		},
		cur : function () {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
				return this.elem[this.prop];
			var a,
			b = f.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
		},
		custom : function (a, c, d) {
			function h(a) {
				return e.step(a)
			}
			var e = this,
			g = f.fx;
			this.startTime = cq || cr(),
			this.end = c,
			this.now = this.start = a,
			this.pos = this.state = 0,
			this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
			h.queue = this.options.queue,
			h.elem = this.elem,
			h.saveState = function () {
				f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
			},
			h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
		},
		show : function () {
			var a = f._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = a || f.style(this.elem, this.prop),
			this.options.show = !0,
			a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
			f(this.elem).show()
		},
		hide : function () {
			this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop),
			this.options.hide = !0,
			this.custom(this.cur(), 0)
		},
		step : function (a) {
			var b,
			c,
			d,
			e = cq || cr(),
			g = !0,
			h = this.elem,
			i = this.options;
			if (a || e >= i.duration + this.startTime) {
				this.now = this.end,
				this.pos = this.state = 1,
				this.update(),
				i.animatedProperties[this.prop] = !0;
				for (b in i.animatedProperties)
					i.animatedProperties[b] !== !0 && (g = !1);
				if (g) {
					i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
						h.style["overflow" + b] = i.overflow[a]
					}),
					i.hide && f(h).hide();
					if (i.hide || i.show)
						for (b in i.animatedProperties)
							f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
					d = i.complete,
					d && (i.complete = !1, d.call(h))
				}
				return !1
			}
			i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
			this.update();
			return !0
		}
	},
	f.extend(f.fx, {
		tick : function () {
			var a,
			b = f.timers,
			c = 0;
			for (; c < b.length; c++)
				a = b[c], !a() && b[c] === a && b.splice(c--, 1);
			b.length || f.fx.stop()
		},
		interval : 13,
		stop : function () {
			clearInterval(co),
			co = null
		},
		speeds : {
			slow : 600,
			fast : 200,
			_default : 400
		},
		step : {
			opacity : function (a) {
				f.style(a.elem, "opacity", a.now)
			},
			_default : function (a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
			}
		}
	}),
	f.each(cp.concat.apply([], cp), function (a, b) {
		b.indexOf("margin") && (f.fx.step[b] = function (a) {
			f.style(a.elem, b, Math.max(0, a.now) + a.unit)
		})
	}),
	f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
		return f.grep(f.timers, function (b) {
			return a === b.elem
		}).length
	});
	var cv,
	cw = /^t(?:able|d|h)$/i,
	cx = /^(?:body|html)$/i;
	"getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
		try {
			d = a.getBoundingClientRect()
		} catch (e) {}

		if (!d || !f.contains(c, a))
			return d ? {
				top : d.top,
				left : d.left
			}
		 : {
			top : 0,
			left : 0
		};
		var g = b.body,
		h = cy(b),
		i = c.clientTop || g.clientTop || 0,
		j = c.clientLeft || g.clientLeft || 0,
		k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
		l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
		m = d.top + k - i,
		n = d.left + l - j;
		return {
			top : m,
			left : n
		}
	}
	 : cv = function (a, b, c) {
		var d,
		e = a.offsetParent,
		g = a,
		h = b.body,
		i = b.defaultView,
		j = i ? i.getComputedStyle(a, null) : a.currentStyle,
		k = a.offsetTop,
		l = a.offsetLeft;
		while ((a = a.parentNode) && a !== h && a !== c) {
			if (f.support.fixedPosition && j.position === "fixed")
				break;
			d = i ? i.getComputedStyle(a, null) : a.currentStyle,
			k -= a.scrollTop,
			l -= a.scrollLeft,
			a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent),
			f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
			j = d
		}
		if (j.position === "relative" || j.position === "static")
			k += h.offsetTop, l += h.offsetLeft;
		f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
		return {
			top : k,
			left : l
		}
	},
	f.fn.offset = function (a) {
		if (arguments.length)
			return a === b ? this : this.each(function (b) {
				f.offset.setOffset(this, a, b)
			});
		var c = this[0],
		d = c && c.ownerDocument;
		if (!d)
			return null;
		if (c === d.body)
			return f.offset.bodyOffset(c);
		return cv(c, d, d.documentElement)
	},
	f.offset = {
		bodyOffset : function (a) {
			var b = a.offsetTop,
			c = a.offsetLeft;
			f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
			return {
				top : b,
				left : c
			}
		},
		setOffset : function (a, b, c) {
			var d = f.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = f(a),
			g = e.offset(),
			h = f.css(a, "top"),
			i = f.css(a, "left"),
			j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
			k = {},
			l = {},
			m,
			n;
			j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0),
			f.isFunction(b) && (b = b.call(a, c, g)),
			b.top != null && (k.top = b.top - g.top + m),
			b.left != null && (k.left = b.left - g.left + n),
			"using" in b ? b.using.call(a, k) : e.css(k)
		}
	},
	f.fn.extend({
		position : function () {
			if (!this[0])
				return null;
			var a = this[0],
			b = this.offsetParent(),
			c = this.offset(),
			d = cx.test(b[0].nodeName) ? {
				top : 0,
				left : 0
			}
			 : b.offset();
			c.top -= parseFloat(f.css(a, "marginTop")) || 0,
			c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
			d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
			d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
			return {
				top : c.top - d.top,
				left : c.left - d.left
			}
		},
		offsetParent : function () {
			return this.map(function () {
				var a = this.offsetParent || c.body;
				while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
					a = a.offsetParent;
				return a
			})
		}
	}),
	f.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function (a, c) {
		var d = /Y/.test(c);
		f.fn[a] = function (e) {
			return f.access(this, function (a, e, g) {
				var h = cy(a);
				if (g === b)
					return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
				h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
			}, a, e, arguments.length, null)
		}
	}),
	f.each({
		Height : "height",
		Width : "width"
	}, function (a, c) {
		var d = "client" + a,
		e = "scroll" + a,
		g = "offset" + a;
		f.fn["inner" + a] = function () {
			var a = this[0];
			return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
		},
		f.fn["outer" + a] = function (a) {
			var b = this[0];
			return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
		},
		f.fn[c] = function (a) {
			return f.access(this, function (a, c, h) {
				var i,
				j,
				k,
				l;
				if (f.isWindow(a)) {
					i = a.document,
					j = i.documentElement[d];
					return f.support.boxModel && j || i.body && i.body[d] || j
				}
				if (a.nodeType === 9) {
					i = a.documentElement;
					if (i[d] >= i[e])
						return i[d];
					return Math.max(a.body[e], i[e], a.body[g], i[g])
				}
				if (h === b) {
					k = f.css(a, c),
					l = parseFloat(k);
					return f.isNumeric(l) ? l : k
				}
				f(a).css(c, h)
			}, c, a, arguments.length, null)
		}
	}),
	a.jQuery = a.$ = f,
	typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
		return f
	})
}
(window), function (a, b) {
	var c = a.Math,
	d = a.JSON,
	e = a.Date,
	f = a.document,
	g = a.parseInt,
	h = a.navigator.userAgent.toLowerCase(),
	i = h.indexOf("webkit") > -1 && "webkit",
	j = h.indexOf("gecko") > -1 && "Moz",
	k = h.indexOf("presto") > -1 && "o",
	l = h.indexOf("msie") > -1 && "ms",
	m = h.indexOf("ipad") > -1,
	n = h.indexOf("ipod") > -1,
	o = h.indexOf("iphone") > -1,
	p = h.indexOf("android") > -1 && /android ([0-9]+)\.([0-9]+)(|\.([0-9]+));/,
	q = (m || n || o) && /os ([0-9]+)_([0-9]+)(|_([0-9]+)) /,
	r = (q || p) && a.orientation !== b,
	s = i || j || k || l,
	t = "-" + s.toLowerCase() + "-$2",
	u = q && q.exec(h) || p && p.exec(h);
	u = new Number(u ? (u[1] << 16) + (u[2] << 8) + (u[4] << 0) : 255 << 16),
	u.gt = function (a, b, c) {
		return this >= (a << 16) + (b << 8) + (c << 0)
	};
	var v = /\s+/g,
	w = /\?/g,
	x = /(\.png|\.jpg|\.gif)/ig,
	y = /(^| )-(([^0-9])[^:(]*)/g,
	z = /-([a-zA-Z])/g,
	A = /([0-9.]+)px/ig,
	B = 0,
	C = "",
	D = {},
	E = {},
	F = 1,
	G = 1,
	H = "$1",
	I = 0,
	J = 0,
	K = 1;
	FZ.update = function (a, b, c) {
		I = a,
		J = b,
		K = c
	};
	var L = e.now,
	M = Array.prototype.slice,
	N = function (a) {
		var b = arguments.length;
		while (--b) {
			var c = arguments[b];
			for (var d in c)
				a[d] = c[d]
		}
	};
	N(Array.prototype, {
		bsearch : function (a) {
			var b = 0,
			c = this.length,
			d;
			while (b <= c) {
				d = g((b + c) / 2);
				switch (a(this[d])) {
				case 1:
					c = d - 1;
					break;
				case  - 1:
					b = d + 1;
					break;
				default:
					return d
				}
			}
			return c
		},
		randomSort : function () {
			this.sort(function () {
				return c.random() > .5 ? -1 : 1
			})
		},
		random : function () {
			return this[g(c.random() * this.length)]
		}
	}),
	N(String.prototype, {
		tpl : function () {
			var a = 0,
			b = arguments;
			return this.replace(w, function () {
				return b[a++]
			})
		}
	});
	var O = 0,
	P = 0,
	Q = 0,
	R = 0,
	S = 0,
	T = 1,
	U = function () {
		return S
	},
	V = function () {
		return S = $() - O
	},
	W = function () {
		R = 0
	},
	X = function () {
		R === 0 && (R = U())
	},
	Y = function () {
		R !== 0 && (O += V() - R, W())
	},
	Z = function (a) {
		T = a
	},
	$ = function () {
		var a = L();
		Q += (a - P) * T,
		P = a;
		return Q
	},
	_ = [],
	ba = [],
	bb = function () {
		_ = _.concat(ba).sort(function (a, b) {
				return b[0] - a[0]
			}),
		ba = []
	},
	bc = function (a) {
		ba.length !== 0 && bb();
		var b = _.length;
		while (b--)
			if (_[b][0] <= a)
				_[b][1](), _.splice(b, 1);
			else
				break
	},
	bd = function (a, b) {
		ba[ba.length] = [U() + b, a, ++B];
		return B
	},
	be = function (a) {
		var b = _.length;
		while (b--)
			_[b][2] === a && _.splice(b, 1);
		b = ba.length;
		while (b--)
			ba[b][2] === a && ba.splice(b, 1)
	},
	bf = function () {
		_.length = 0
	},
	bg = function (a, b) {
		b = b || 0;
		return g
		(c.random() * (a - b) + b)
	},
	bh = function () {
		var a = c.random(),
		b = arguments.length;
		while (b--)
			if ((a -= arguments[b]) < 0)
				break;
		return b
	},
	bi = function (a, b, c, d, e, f, g, h) {
		return {
			left : c * a + e * b + g,
			top : d * a + f * b + h
		}
	},
	bj = function (a, b, c, d, e, f, g, h) {
		return bi(a, b, f, -d, -e, c, e * h - f * g, -c * h + d * g)
	},
	bk = function (a, b, c, d, e, f, g) {
		var h = [],
		i = 0,
		j = a.length;
		while (i < j) {
			var k = a[i++],
			l = a[i++];
			h[h.length] = b * k + d * l + f,
			h[h.length] = c * k + e * l + g
		}
		return h
	},
	bl = function (a, b, d, e) {
		return c.sqrt((a -= d) * a + (b -= e) * b)
	},
	bm = function (a, b, c, d) {
		return (a -= c) * a + (b -= d) * b
	},
	bn = function (a, b) {
		for (var c in b)
			a[c] = b[c] * F;
		return b
	},
	bo = function (a) {
		var b = 0,
		c = a.length,
		d,
		e,
		f,
		g,
		h,
		i;
		while (b < c)
			h = a[b], i = a[b + 1], d = d < h ? d : h, e = e < i ? e : i, f = f > h ? f : h, g = g > i ? g : i, b += 2;
		return {
			left : d,
			top : e,
			right : f,
			bottom : g,
			width : f - d,
			height : g - e
		}
	},
	bp = function (b, c, d) {
		b = b.split("|");
		var e = a.parseFloat,
		f = d ? [] : {};
		c = c || function (a, b) {
			f[a] = b
		};
		for (var g = 0, h = b.length; g < h; g++) {
			var i = b[g].split(":"),
			j = i[1].split(","),
			k = j.length;
			while (k--)
				j[k] = e(j[k]);
			c(i[0], j, f)
		}
		return f
	},
	bq = b,
	br = function (c) {
		if (!!a.openDatabase) {
			bq = openDatabase(E.namespace, "1.0", "", 512);
			if (!!bq) {
				bq.transaction(function (a) {
					a.executeSql("CREATE TABLE IF NOT EXISTS data ( id UNIQUE, data )", [], function (b) {
						a.executeSql("INSERT INTO data ( id, data ) VALUES ( 1, '' )", [], function () {
							c && c()
						})
					})
				}, function (a) {
					console.log(a),
					c && c()
				});
				return
			}
		}
		bq = b,
		c && c()
	},
	bs = function (b) {
		bq ? bq.transaction(function (a) {
			a.executeSql("SELECT * FROM data WHERE id = 1", [], function (a, c) {
				c.rows.length !== 0 ? D.global = d.parse(c.rows.item(0).data || "{}") : D.global = {},
				b && b()
			})
		}) : a.localStorage ? (D.global = d.parse(a.localStorage.getItem(E.namespace) || "{}"), b && b()) : (D.global = {}, b && b())
	},
	bt = function () {
		bq ? bq.transaction(function (a) {
			a.executeSql("UPDATE data SET data = ? WHERE id = 1", [d.stringify(D.global || {})])
		}) : a.localStorage && a.localStorage.setItem(E.namespace, d.stringify(D.global || "{}"))
	},
	bu = function () {
		D.global = {},
		bt()
	},
	bv = b,
	bw = {},
	bx = {},
	by = function (a) {
		var b = arguments.length;
		while (--b) {
			var c = arguments[b];
			c === "scene" ? (bx[a.name] = a, a.parent !== D.root && (a.addClass("animation"), a.setStyle("opacity: 0;")), a.setVisible(!1)) : (bw[c] || (bw[c] = [])).push(a)
		}
	},
	bz = function (c) {
		var e = bw[c];
		if (e !== b) {
			c === "pause" && console.log(d.stringify(bw[c]));
			var f = e.length,
			g = M.call(arguments, 1);
			g[g.length] = this === a;
			while (f--) {
				var h = e[f];
				h[c].apply(h, g)
			}
		}
	},
	bA = function (b) {
		var c = [!0].concat(M.call(arguments, 1)),
		d = bv,
		e = bv = bx[b];
		D.curScene = b,
		D.eventMask.setVisible(!0),
		e.prescene && e.prescene.apply(e, c),
		d ? (c[0] = !1, d.scene.apply(d, c), c[0] = !0, d.parent !== e.parent ? e.parent === d ? (e.inscene && e.inscene.apply(e, c), e.setVisible(!0), a.setTimeout(function () {
					e.setStyle("opacity: 1;"),
					a.setTimeout(function () {
						e.scene.apply(e, c),
						D.eventMask.setVisible(!1)
					}, 250)
				}, 0)) : d.parent === e ? (e.inscene && e.inscene.apply(e, c), d.setStyle("opacity: 0;"), a.setTimeout(function () {
					d.setVisible(!1),
					e.scene.apply(e, c),
					D.eventMask.setVisible(!1)
				}, 250)) : (D.root.setStyle("opacity: 0"), a.setTimeout(function () {
					e.inscene && e.inscene.apply(e, c),
					d.parent.setVisible(!1),
					d.setVisible(!1),
					d.setStyle("opacity: 0;"),
					e.setVisible(!0),
					D.root.setStyle("opacity: 1"),
					a.setTimeout(function () {
						e.scene.apply(e, c),
						D.eventMask.setVisible(!1)
					}, 250)
				}, 250)) : (D.root.setStyle("opacity: 0"), a.setTimeout(function () {
					e.inscene && e.inscene.apply(e, c),
					d.setVisible(!1),
					e.setVisible(!0),
					D.root.setStyle("opacity: 1"),
					a.setTimeout(function () {
						e.scene.apply(e, c),
						D.eventMask.setVisible(!1)
					}, 250)
				}, 250))) : (e.inscene && e.inscene.apply(e, c), e.setVisible(!0), D.root.setStyle("opacity: 1"), a.setTimeout(function () {
				e.scene.apply(e, c),
				D.eventMask.setVisible(!1)
			}, 250))
	},
	bB = function (b, c) {
		var d = !1,
		e = 0,
		f = 0,
		h = 0,
		i = g(1e3 / c),
		j = i * 2,
		k = function () {
			var c = L() - f;
			c > j && (O += (c - i) * T << 0);
			var g = V();
			bc(g),
			b(h, g),
			!d && (e = a.setTimeout(k, i)),
			f = L()
		};
		return {
			reset : function () {
				W(),
				bf(),
				h = V(),
				a.clearTimeout(e),
				d = !1
			},
			resume : function () {
				f = L(),
				d = !1,
				k()
			},
			pause : function () {
				d = !0,
				a.clearTimeout(e)
			}
		}
	},
	bC = {},
	bD = b,
	bE = 0,
	bF = 0,
	bG = {
		audioTrigger : function (c) {
			if (this.readyState === 4 && !isNaN(this.duration)) {
				var d = this.beat[c],
				e = this,
				f = d[0] + d[1] / 1e3 - .1;
				if (d === b)
					return;
				a.clearTimeout(bD),
				this.pause(),
				bD = a.setTimeout(function () {
						e.currentTime = d[0],
						bD = a.setTimeout(function () {
								e.play(),
								bD = a.setTimeout(function () {
										e.currentTime < f ? bD = a.setTimeout(arguments.callee, 0) : e.pause()
									}, 0)
							}, 0)
					}, 0)
			} else
				this.readyState === 0 && this.started !== !0 && (this.load(), this.started = !0)
		},
		audioLoader : function (a, b) {
			this.readyState === 4 ? b() : this.readyState === 0 && this.started !== !0 && (a(), this.load(), this.started = !0, this.addEventListener("error", function () {
					alert("Audio Error!"),
					b()
				}, !1), this.addEventListener("durationchange", function () {
					isNaN(this.duration) ? (this.src = this.beat.src, this.load()) : b()
				}, !1))
		}
	},
	bH = {
		audio : function (a, b) {
			var c = new Audio,
			d = c.canPlayType("audio/mpeg") === "maybe";
			if (typeof b == "object")
				c.src = C + b.src, c.beat = b, c.trigger = d ? bG.audioTrigger : function () {};
			else {
				c.src = b;
				var e = function () {
					c.load(),
					f.removeEventListener("touchstart", e, !1)
				};
				f.addEventListener("touchstart", e, !1),
				c.addEventListener("ended", function () {
					D.musicOver && D.musicOver()
				}, !1)
			}
			return c
		},
		image : function (a, b) {
			var c = new Image;
			c.addEventListener("load", function () {
				this.width /= F,
				this.height /= F,
				bJ()
			}, !1),
			c.src = bI(b),
			bC[a] = c,
			++bF;
			return c
		},
		dynamic : function (a, b) {
			var c = new Image;
			c.loader = function (a) {
				this.addEventListener("load", function () {
					this.loader && (this.width /= F, this.height /= F, delete this.loader),
					a()
				}, !1),
				this.src = bI(b)
			},
			bC[a] = c;
			return c
		},
		frame : function (a, b) {
			var c = b[0] = bC[b[0]];
			c.loader ? cc(a, b) : c.addEventListener("load", function () {
				cc(a, b)
			}, !1);
			return a
		},
		UTCTime : function (a, b) {
			var c = new XMLHttpRequest,
			d = 0;
			c.open("GET", b + "?" + L(), !1),
			c.addEventListener("readystatechange", function () {
				if (c.readyState === 4 && c.status === 200) {
					bJ();
					var a = c.getResponseHeader("Date"),
					b = L();
					a = a === null ? b : (new e(a)).getTime(),
					d = b - a
				}
			}, !1),
			c.send(null),
			++bF;
			return function () {
				return L() - d
			}
		},
		text : function (a, b) {
			var c = new XMLHttpRequest;
			c.open("GET", b, !1),
			c.addEventListener("readystatechange", function () {
				c.readyState === 4 && c.status === 200 && bJ()
			}, !1),
			c.send(null),
			++bF;
			return c
		},
		fonts : function (a, b) {
			var c = f.head.appendChild(f.createElement("LINK"));
			c.setAttribute("rel", "stylesheet"),
			c.setAttribute("type", "text/css"),
			c.setAttribute("href", "http://fonts.googleapis.com/css?family=" + b.replace(v, "+"));
			return b
		},
		custom : function (a, b) {
			++bF,
			b(bJ);
			return null
		}
	},
	bI = function (a) {
		return C + a.replace(x, H)
	},
	bJ = function () {
		a.setTimeout(function () {
			bz("progress", ++bE, bF),
			bE >= bF && bz("complete")
		}, 10)
	},
	bK = function () {
		(bF === 0 || bE >= bF) && bz("complete")
	},
	bL = {
		linear : function (a, b, c, d) {
			return b * d / c + a
		}
	},
	bM = function (a, b) {
		this.x = a || 0,
		this.y = b || 0
	},
	bN = function (a, b) {
		return new bM(a, b)
	};
	N(bM.prototype, {
		clone : function () {
			return new bM(this.x, this.y)
		},
		set : function (a, b) {
			this.x = a,
			this.y = b
		},
		add : function (a) {
			this.x += a.x,
			this.y += a.y;
			return this
		},
		sub : function (a) {
			this.x -= a.x,
			this.y -= a.y;
			return this
		},
		dot : function (a) {
			return this.x * a.x + this.y * a.y
		},
		projection : function (a) {
			return a.clone().norm().scale(this.clone().dot(a) / a.length())
		},
		scale : function (a) {
			this.x *= a,
			this.y *= a;
			return this
		},
		cross : function (a) {
			return this.x * a.y - this.y * a.x
		},
		norm : function () {
			return this.scale(1 / this.length())
		},
		sqLength : function () {
			return this.x * this.x + this.y * this.y
		},
		length : function () {
			return c.sqrt(this.x * this.x + this.y * this.y)
		}
	});
	var bO = {},
	bP = {},
	bQ = function (a, b, c) {
		var d = function () {},
		e = bO[b] || function () {},
		f = d.prototype = new e;
		d.prototype.constructor = d;
		for (var g in c)
			f[g] = c[g];
		f.className = a,
		f.superClass = e.prototype,
		bO[a] = d,
		bP[a] = []
	},
	bR = function (a) {
		var b = bP[a].length > 0 ? bP[a].pop() : new bO[a];
		!b.guid && (b.guid = ++B),
		b.__init__.apply(b, M.call(arguments, 1));
		return b
	},
	bS = function (a) {
		bP[a.className].push(a),
		a.free.apply(a, M.call(arguments, 1))
	};
	bQ("Unknown", b, {
		__init__ : function () {
			this.init && this.init()
		},
		free : function () {}

	}),
	bQ("MotionPath", "Unknown", {
		PATH_MOVE : 0,
		PATH_LINE : 1,
		PATH_CUBIC : 2,
		__init__ : function () {
			this.pathList = [],
			this.length = 0,
			this.lastPoint = {
				finish : !0
			},
			this.moveTo(0, 0)
		},
		parse : function (a) {
			var b = this;
			this.length = 0,
			bp(a, function (a, c) {
				switch (g(a)) {
				case b.PATH_MOVE:
					b.moveTo.apply(b, c);
					break;
				case b.PATH_LINE:
					b.lineTo.apply(b, c);
					break;
				case b.PATH_CUBIC:
					b.bezierCurveTo.apply(b, c)
				}
			})
		},
		moveTo : function (a, b) {
			this.lastPoint.left = this.touchLeft = a,
			this.lastPoint.top = this.touchTop = b
		},
		lineTo : function (a, b) {
			var c = this.pathList[this.pathList.length] = {
				type : this.PATH_LINE,
				origin : this.length,
				x1 : this.touchLeft,
				y1 : this.touchTop,
				x2 : a - this.touchLeft,
				y2 : b - this.touchTop
			};
			this.length += c.length = this.getLineLength(c),
			c.distance = this.length,
			this.moveTo(a, b)
		},
		getLine : function (a, b) {
			return {
				left : a.x1 + a.x2 * b,
				top : a.y1 + a.y2 * b
			}
		},
		getLineLength : function (a) {
			return bl(a.x1, a.y1, a.x1 + a.x2, a.y1 + a.y2)
		},
		bezierCurveTo : function (a, b, c, d, e, f) {
			var g = this.pathList[this.pathList.length] = {
				type : this.PATH_CUBIC,
				origin : this.length,
				x1 : this.touchLeft,
				y1 : this.touchTop,
				x2 : a,
				y2 : b,
				x3 : c,
				y3 : d,
				x4 : e,
				y4 : f
			};
			this.length += g.length = this.getBezierCurveLength(g),
			g.distance = this.length,
			this.moveTo(e, f)
		},
		getBezierCurve : function (a, b) {
			var c = 1 - b,
			d = c * c * c,
			e = 3 * b * c * c,
			f = 3 * b * b * c,
			g = b * b * b;
			return {
				left : a.x1 * d + a.x2 * e + a.x3 * f + a.x4 * g,
				top : a.y1 * d + a.y2 * e + a.y3 * f + a.y4 * g
			}
		},
		getBezierCurveLength : function (a) {
			var b = 0,
			c = 0,
			d = this.getBezierCurve(a, b),
			e;
			while ((b += .1) <= 1)
				e = this.getBezierCurve(a, b), c += bl(d.left, d.top, e.left, e.top), d = e;
			return c
		},
		getPosition : function (a) {
			var c = b,
			d;
			if (this.length < a)
				return this.lastPoint;
			if (a >= 0) {
				var e = 0,
				f = this.pathList.length;
				while (e <= f) {
					d = (e + f) / 2 << 0,
					c = this.pathList[d];
					if (c.origin > a)
						f = d - 1;
					else if (c.distance < a)
						e = d + 1;
					else {
						f = d;
						break
					}
				}
				d = (a - c.origin) / c.length
			} else
				c = this.pathList[0], d = 0;
			switch (c.type) {
			case this.PATH_LINE:
				return this.getLine(c, d);
			case this.PATH_CUBIC:
				return this.getBezierCurve(c, d)
			}
			return this.lastPoint
		}
	}),
	bQ("ImpactTest", "Unknown", {
		ENTITY_LINE : 1,
		ENTITY_CIRCLE : 2,
		__init__ : function () {
			this.indexList = [],
			this.entityList = [],
			this.dynamicList = [],
			this.clear()
		},
		clear : function () {
			this.widgetTree = {},
			this.indexList.length = 0,
			this.entityList.length = 0,
			this.dynamicList.length = 0
		},
		parse : function (a) {
			var b = this;
			bp(a, function (a, c) {
				switch (g(a)) {
				case b.ENTITY_LINE:
					b.appendChild(b.allocLine.apply(b, c));
					break;
				case b.ENTITY_CIRCLE:
					b.appendChild(b.allocCircle.apply(b, c))
				}
			})
		},
		appendChild : function (a) {
			if (typeof a != "function") {
				var b = a.left,
				c = this.widgetTree[b] || (this.widgetTree[b] = []);
				c[c.length] = a,
				this.indexList.indexOf(b) === -1 && (this.indexList[this.indexList.length] = b),
				this.indexSort = !0
			} else
				this.dynamicList[this.dynamicList.length] = a
		},
		appendEntity : function (a) {
			var b = a.length,
			c = [],
			d,
			e,
			f,
			g;
			while (b--) {
				var h = a[b];
				switch (h.type) {
				case this.ENTITY_LINE:
					h = c[c.length] = this.allocLine(h.x1, h.y1, h.x2, h.y2),
					d = d < h.left ? d : h.left,
					e = e < h.top ? e : h.top,
					f = f > h.right ? f : h.right,
					g = g > h.bottom ? g : h.bottom;
					break;
				case this.ENTITY_CIRCLE:
					h = c[c.length] = this.allocCircle(h.x, h.y, h.radius),
					d = d < h.left ? d : h.left,
					e = e < h.top ? e : h.top,
					f = f > h.right ? f : h.right,
					g = g > h.bottom ? g : h.bottom
				}
			}
			this.entityList[this.entityList.length] = {
				rect : {
					left : d,
					top : e,
					right : f,
					bottom : g
				},
				children : c
			}
		},
		allocLine : function (a, b, c, d) {
			var e = {
				type : this.ENTITY_LINE,
				x1 : a,
				y1 : b,
				sqX1 : a * a,
				sqY1 : b * b,
				x2 : c,
				y2 : d,
				width : c - a,
				height : d - b
			};
			a <= c ? (e.left = a - .5, e.right = c + .5) : (e.left = c - .5, e.right = a + .5),
			b <= d ? (e.top = b - .5, e.bottom = d + .5) : (e.top = d - .5, e.bottom = b + .5),
			a === c ? (e.k = 1, e.c = 0, e.b = -a) : b === d ? (e.k = 0, e.c = 1, e.b = b) : (e.k = (d - b) / (c - a), e.c = 1, e.b = b - e.k * a);
			return e
		},
		allocCircle : function (a, b, c) {
			return {
				type : this.ENTITY_CIRCLE,
				left : a - c,
				top : b - c,
				right : a + c,
				bottom : b + c,
				x : a,
				y : b,
				sqX : a * a,
				sqY : b * b,
				radius : c,
				sqRadius : c * c
			}
		},
		isLineInRect : function (a, b) {
			var c = (a.x1 < b.left ? 1 : 0) << 3 | (a.x1 > b.right ? 1 : 0) << 2 | (a.y1 < b.top ? 1 : 0) << 1 | (a.y1 > b.bottom ? 1 : 0),
			d = (a.x2 < b.left ? 1 : 0) << 3 | (a.x2 > b.right ? 1 : 0) << 2 | (a.y2 < b.top ? 1 : 0) << 1 | (a.y2 > b.bottom ? 1 : 0);
			return (c & d) === 0
		},
		checkSegment : function (a, b) {
			var c,
			d;
			a.c === 0 ? (c = -a.b / a.k, d = (b.k * c + b.b) * b.c) : b.c === 0 ? (c = -b.b / b.k, d = (a.k * c + a.b) * a.c) : (c = (b.b - a.b) / (a.k - b.k), d = (a.k * c + a.b) * a.c);
			return c >= a.left && c <= a.right && c >= b.left && c <= b.right && d >= a.top && d <= a.bottom && d >= b.top && d <= b.bottom && {
				left : c,
				top : d
			}
		},
		checkCircle : function (a, b) {
			if (b.sqRadius >= bm(b.x, b.y, a.x1, a.y1))
				return {
					left : a.x1,
					top : a.y1
				};
			if (b.sqRadius >= bm(b.x, b.y, a.x2, a.y2))
				return {
					left : a.x2,
					top : a.y2
				};
			var d = a.width * a.width + a.height * a.height,
			e = 2 * (a.width * (a.x1 - b.x) + a.height * (a.y1 - b.y)),
			f = b.sqX + b.sqY + a.sqX1 + a.sqY1 - 2 * (b.x * a.x1 + b.y * a.y1) - b.sqRadius,
			g = e * e - 4 * d * f,
			h;
			if (g > 0) {
				g = c.sqrt(g);
				var i = (-e + g) / (2 * d),
				j = (-e - g) / (2 * d);
				if (i >= 0 && i <= 1 && j >= 0 && j <= 1) {
					h = (i + j) / 2;
					return {
						left : a.x1 + a.width * h,
						top : a.y1 + a.height * h
					}
				}
			}
			return !1
		},
		getImpact : function (a) {
			var c = bo(a),
			d = a.length - 2,
			e = this.indexList,
			f = this.widgetTree,
			g = this.entityList,
			h = [],
			i,
			j,
			k,
			l,
			m = b;
			this.indexSort === !0 && e.sort(function (a, b) {
				return a - b
			}),
			i = 0;
			while (i < d)
				h[h.length] = this.allocLine(a[i], a[i + 1], a[i + 2], a[i + 3]), i += 2;
			h[h.length] = this.allocLine(a[i - 2], a[i - 1], a[0], a[1]),
			i = 0,
			k = e.length;
			while (i < k) {
				var n = e[i++];
				if (n > c.right)
					break;
				var o = f[n],
				p = o.length;
				while (p--) {
					j = o[p];
					if (!(j.right < c.left || j.top > c.bottom || j.bottom < c.top) && (j.type === this.ENTITY_CIRCLE || this.isLineInRect(j, c))) {
						l = h.length;
						while (l--) {
							switch (j.type) {
							case this.ENTITY_LINE:
								m = this.checkSegment(h[l], j);
								break;
							case this.ENTITY_CIRCLE:
								m = this.checkCircle(h[l], j)
							}
							if (m)
								return m
						}
					}
				}
			}
			i = g.length;
			while (i--) {
				var q = g[i].rect;
				if (!(c.left > q.right || c.right < q.left || c.top > q.bottom || c.bottom < q.top)) {
					var j = g[i],
					r = j.children,
					p = r.length;
					while (p--) {
						j = r[p];
						if (!(j.right < c.left || j.top > c.bottom || j.bottom < c.top) && (j.type === this.ENTITY_CIRCLE || this.isLineInRect(j, c))) {
							l = h.length;
							while (l--) {
								switch (j.type) {
								case this.ENTITY_LINE:
									m = this.checkSegment(h[l], j);
									break;
								case this.ENTITY_CIRCLE:
									m = this.checkCircle(h[l], j)
								}
								if (m)
									return m
							}
						}
					}
				}
			}
			if (this.dynamicList.length > 0) {
				i = this.dynamicList.length;
				while (i--) {
					j = this.dynamicList[i](),
					l = h.length;
					while (l--) {
						switch (j.type) {
						case this.ENTITY_LINE:
							j = this.allocLine(j.x1, j.y1, j.x2, j.y2),
							m = this.checkSegment(h[l], j);
							break;
						case this.ENTITY_CIRCLE:
							j = this.allocCircle(j.x, j.y, j.radius),
							m = this.checkCircle(h[l], j)
						}
						if (m) {
							m.dynamic = this.dynamicList[i];
							return m
						}
					}
				}
			}
			return !1
		},
		getImpactList : function (a) {
			var b = bo(a),
			c = this.indexList,
			d = this.widgetTree,
			e = [],
			f = [],
			g,
			h,
			i;
			this.indexSort === !0 && c.sort(function (a, b) {
				return a - b
			}),
			h = 0,
			i = c.length;
			while (h < i) {
				var j = c[h++];
				if (j > b.right)
					break;
				var k = d[j],
				l = k.length;
				while (l--)
					g = k[l], !(g.right < b.left || g.top > b.bottom || g.bottom < b.top) && (g.type === this.ENTITY_CIRCLE || this.isLineInRect(g, b)) && (e[e.length] = g)
			}
			h = e.length;
			if (h !== 0) {
				var m = [],
				l = 0,
				n,
				o = function () {};
				i = a.length - 2;
				while (l < i)
					m[m.length] = this.allocLine(a[l], a[l + 1], a[l + 2], a[l + 3]), l += 2;
				m[m.length] = this.allocLine(a[l - 2], a[l - 1], a[0], a[1]);
				while (h--) {
					g = e[h];
					switch (g.type) {
					case this.ENTITY_LINE:
						o = this.checkSegment;
						break;
					case this.ENTITY_CIRCLE:
						o = this.checkCircle
					}
					l = m.length;
					while (l--)
						n = o.call(this, m[l], g), n && (f[f.length] = n)
				}
			}
			return f
		}
	});
	var bT = {},
	bU = {},
	bV = f.defaultView.getComputedStyle(f.createElement("DIV")),
	bW = function (a) {
		a = (a[0] === "!" ? a : a.replace(x, H)).replace(y, function (a, b, c) {
			if (c[0] === "!")
				return "-" + s + "-" + c.substr(1);
			var d = "-" + s + "-" + c,
			e = d.replace(z, function (a, b) {
					return b.toUpperCase()
				});
			return bU[a] || e in bV && (bU[a] = d) || (bU[a] = c)
		});
		return G === 1 ? a : a.replace(A, function (a, b) {
			return g(b) * G + "px"
		})
	};
	bQ("DOM", "Unknown", {
		useCanvas : !1,
		__init__ : function (b, c, d) {
			var e = this;
			d = this.useCanvas ? "CANVAS" : d,
			c = bT[c],
			this.name = b,
			this.parent = c,
			c ? (this.path = c.path + "." + b, this.__view__ = c.__view__.appendChild(f.createElement(d || "DIV"))) : (this.path = b, this.__view__ = f.body.appendChild(f.createElement(d || "DIV"))),
			this.__view__.__model__ = this,
			this.__text__ = this.__view__.appendChild(f.createElement("DIV")),
			bT[this.path] = this,
			this.setStyle("position: absolute;"),
			this.init && a.setTimeout(function () {
				e.init()
			}, 0)
		},
		findChild : function (a) {
			return bT[this.path + "." + a]
		},
		filterChild : function (a) {
			var b = [];
			for (var c in bT) {
				var d = bT[c];
				c.indexOf(this.path) === 0 && a(c, d) && (b[b.length] = d)
			}
			return b
		},
		getContext : function (a, b) {
			this.setStyle("width: ?px; height: ?px", a, b),
			this.__view__.width = a * F,
			this.__view__.height = b * F;
			return this.__view__.getContext("2d").__init__()
		},
		getText : function () {
			return this.__text.innerHTML
		},
		setText : function (a) {
			this.__text__.innerHTML = a;
			return this
		},
		getRect : function () {
			var a = this.__view__.getBoundingClientRect(),
			b;
			FZ.hasGameContainer ? b = {
				left : (a.left - J) / (G * K),
				top : (a.top - I) / (G * K),
				right : (a.right - J) / (G * K),
				bottom : (a.bottom - I) / (G * K),
				width : a.width / (G * K),
				height : a.height / (G * K)
			}
			 : b = {
				left : (a.left - J) / (G * K),
				top : a.top / (G * K),
				right : (a.right - J) / (G * K),
				bottom : a.bottom / (G * K),
				width : a.width / (G * K),
				height : a.height / (G * K)
			};
			return b
		},
		setStyle : function (a) {
			if (arguments.length > 1) {
				var b = 0,
				c = arguments;
				a = a.replace(w, function () {
						return c[++b]
					})
			}
			this.__view__.style.cssText += ";" + bW(a)
		},
		setStyleAttr : function (a) {
			var b = this.__view__.style;
			for (var c in a)
				a.hasOwnProperty(c) && (b[c[0].toUpperCase() === c[0] ? s + c : c] = bW(a[c]))
		},
		setTransform : function (a, b, c, d, e, f) {
			this.__view__.style[s + "Transform"] = ["matrix(", [a, b, c, d, e * G, f * G].join(","), ")"].join("")
		},
		setVisible : function (a) {
			this.__view__.style.visibility = a === !0 ? "inherit" : "hidden"
		},
		addClass : function (a) {
			var b = a.split(v),
			c = b.length,
			d = this.__view__.className.split(v);
			while (c--) {
				var e = b[c];
				d.indexOf(e) === -1 && (d[d.length] = e)
			}
			this.__view__.className = d.join(" ")
		},
		delClass : function (a) {
			var b = a.split(v),
			c = b.length,
			d = this.__view__.className.split(v);
			while (c--) {
				var e = d.indexOf(b[c]);
				e > -1 && d.splice(e, 1)
			}
			this.__view__.className = d.join(" ")
		},
		hasClass : function (a) {
			return (" " + this.__view__.className + " ").indexOf(" " + a + " ") > -1
		},
		getTouchDOM : function () {
			return cd
		},
		getTouchPoint : function () {
			var a = ce[0],
			b = {
				guid : a.identifier,
				left : (a.pageX - J) / (G * K) << 0,
				top : (a.pageY - I) / (G * K) << 0
			};
			console.log(d.stringify(b));
			return b
		},
		getLastTouchPoint : function () {
			var a = cf.length;
			while (a--) {
				var b = cf[a];
				if (!ch[b.identifier])
					return {
						guid : b.identifier,
						left : (b.pageX - J) / (G * K) << 0,
						top : (b.pageY - I) / (G * K) << 0
					}
			}
		},
		getTouchList : function () {
			var a = cf.length,
			b = {};
			while (a--) {
				var c = cf[a];
				b[c.identifier] = {
					left : (c.pageX - J) / G << 0,
					top : (c.pageY - I) / G << 0
				}
			}
			return b
		}
	});
	var bX = CanvasRenderingContext2D.prototype;
	N(bX, {
		SORT_REAL_TIME : 1,
		SORT_TIME_SHARING : 2,
		TEXT_LEFT : 0,
		TEXT_CENTER : 1,
		TEXT_RIGHT : 2,
		__sort__ : !1,
		__schedule__ : !1,
		__init__ : function () {
			this.flushRect = {},
			this.flushIndex = {},
			this.actList = {},
			this.childNodes = [],
			this.lineWidth = 1 * F,
			this.width = this.canvas.width,
			this.height = this.canvas.height,
			this.setFont(14, "Georgia"),
			this.setSortSchedule(this.SORT_REAL_TIME);
			return this
		},
		fixScale : function () {
			F === 1 ? (bX.drawImageScale = bX.drawImage, bX.transformScale = bX.transform, bX.setTransformScale = bX.setTransform, bX.translateScale = bX.translate, bX.moveToScale = bX.moveTo, bX.lineToScale = bX.lineTo, bX.arcScale = bX.arc, bX.strokeRectScale = bX.strokeRect, bX.fillRectScale = bX.fillRect, bX.rectScale = bX.rect, bX.fillTextScale = bX.fillText, bX.clearRectScale = bX.clearRect, bX.bezierCurveToScale = bX.bezierCurveTo, bX.createRadialGradientScale = bX.createRadialGradient) : N(bX, {
				drawImageScale : function () {
					var a = arguments.length;
					while (--a)
						arguments[a] *= F;
					this.drawImage.apply(this, arguments)
				},
				transformScale : function (a, b, c, d, e, f) {
					this.transform(a, b, c, d, e * F, f * F)
				},
				setTransformScale : function (a, b, c, d, e, f) {
					this.setTransform(a, b, c, d, e * F, f * F)
				},
				translateScale : function (a, b) {
					this.translate(a * F, b * F)
				},
				moveToScale : function (a, b) {
					this.moveTo(a * F, b * F)
				},
				lineToScale : function (a, b) {
					this.lineTo(a * F, b * F)
				},
				arcScale : function (a, b, c, d, e) {
					this.arc(a * F, b * F, c * F, d, e, !1)
				},
				strokeRectScale : function (a, b, c, d) {
					this.strokeRect(a * F, b * F, c * F, d * F)
				},
				fillRectScale : function (a, b, c, d) {
					this.fillRect(a * F, b * F, c * F, d * F)
				},
				rectScale : function (a, b, c, d) {
					this.rect(a * F, b * F, c * F, d * F)
				},
				fillTextScale : function (a, b, c) {
					this.fillText(a, b * F, c * F)
				},
				clearRectScale : function (a, b, c, d) {
					this.clearRect(a * F, b * F, c * F, d * F)
				},
				bezierCurveToScale : function (a, b, c, d, e, f) {
					this.bezierCurveTo(a * F, b * F, c * F, d * F, e * F, f * F)
				},
				createRadialGradientScale : function (a, b, c, d, e, f) {
					return this.createRadialGradient(a * F, b * F, c * F, d * F, e * F, f * F)
				}
			})
		},
		appendChild : function (a) {
			var b = bR(a, this);
			this.childNodes.push(b);
			return b
		},
		setLineWidth : function (a) {
			this.lineWidth = a * F
		},
		setFont : function (a, b, c) {
			this.font = (c === !0 ? "bold " : "") + a * F + "px '" + b + "'"
		},
		drawText : function (a, b, c, d, e, f) {
			var g = this.measureText(a).width,
			h = f * F,
			i = d * F;
			if (g > i) {
				var j = a.length,
				k = b * F,
				l = c * F,
				m = 0;
				g = 0;
				for (var n = 0; n < j; n++) {
					g += this.measureText(a[n]).width;
					if (g < i)
						continue;
					this.fillText(a.substring(m, n), k, l),
					l += h,
					c += f,
					g = 0,
					m = n
				}
				a = a.substr(m)
			}
			switch (e) {
			case this.TEXT_CENTER:
				b = b + d / 2 - g / 2;
				break;
			case this.TEXT_RIGHT:
				b = b + d - g
			}
			this.fillText(a, b * F, c * F)
		},
		clear : function () {
			this.clearRect(0, 0, this.width, this.height)
		},
		cleanActSprite : function () {
			var a = this.actList;
			for (var b in a)
				a[b].trigger && a[b].trigger()
		},
		ascsort : function (a, b) {
			return a.__layer__ - b.__layer__
		},
		descsort : function (a, b) {
			return b.__layer__ - a.__layer__
		},
		layer : function () {
			this.childNodes.sort(this.ascsort),
			this.__sort__ = !1
		},
		setSortSchedule : function (a) {
			this.__schedule__ = a
		},
		flush : function () {
			var a = this.flushRect,
			d = this.actList,
			e = this.childNodes,
			f = this.flushIndex,
			g = U(),
			h = [],
			i,
			j;
			this.__schedule__ === this.SORT_TIME_SHARING && this.__sort__ && this.layer();
			for (j in d)
				d[j].update();
			for (j in f)
				f[j].flushRect();
			if (a.left !== b) {
				var k = a.left < 0 ? 0 : a.left << 0,
				l = a.top < 0 ? 0 : a.top << 0,
				m = a.right > this.width ? this.width : c.ceil(a.right),
				n = a.bottom > this.height ? this.height : c.ceil(a.bottom),
				o = m - k,
				p = n - l;
				this.flushRect = {},
				this.flushIndex = {};
				if (o <= 0 || p <= 0)
					return;
				j = e.length;
				while (j--) {
					i = e[j];
					if (i.__visible__)
						if (i.__update__)
							h[h.length] = i;
						else {
							if (i.__rectLeft__ >= m || i.__rectTop__ >= n || i.__rectRight__ <= k || i.__rectBottom__ <= l)
								continue;
							h[h.length] = i
						}
				}
				this.clearRect(k, l, o, p),
				j = h.length;
				if (j > 0) {
					this.__schedule__ === this.SORT_REAL_TIME && h.sort(this.descsort),
					this.save(),
					this.beginPath(),
					this.rect(k, l, o, p),
					this.clip();
					while (j--)
						i = h[j], i.__alpha__ !== this.globalAlpha && (this.globalAlpha = i.__alpha__), i.drawSprite(this, g), i.__update__ = !1;
					this.closePath(),
					this.restore()
				}
			}
		}
	});
	var bY = 0,
	bZ = 1,
	b$ = 2,
	b_ = 3,
	ca = {},
	cb = function (a) {
		var b = a[0],
		c = 0,
		d = 0,
		e = !1,
		f;
		switch (a.length) {
		case 3:
			c = a[1],
			d = a[2],
			e = !0;
		case 1:
			f = {
				type : bY,
				source : b,
				width : b.width,
				height : b.height,
				centerLeft : c,
				centerTop : d,
				center : e
			};
			break;
		case 6:
			c = a[4],
			d = a[5],
			e = !0;
		case 4:
			var h = a[1],
			i = a[2],
			j = g(b.width / h),
			k = a[3];
			f = {
				type : b$,
				source : b,
				left : k % j * h * F,
				top : g(k / j) * i * F,
				width : h,
				height : i,
				centerLeft : c,
				centerTop : d,
				center : e
			};
			break;
		case 7:
			c = a[5],
			d = a[6],
			e = !0;
		case 5:
			f = a[3];
			var h = a[1],
			i = a[2],
			l = a[4],
			j = g(b.width / h),
			k = f.length;
			while (k--) {
				var m = f[k];
				f[k] = {
					left : m % j * h * F,
					top : g(m / j) * i * F
				}
			}
			f.type = b_,
			f.source = b,
			f.width = h,
			f.height = i,
			f.interval = l,
			f.centerLeft = c,
			f.centerTop = d,
			f.center = e;
			break;
		default:
			f = {}

		}
		return f
	},
	cc = function (a, b) {
		var c = b[0];
		c.loader ? ca[a] = {
			type : bZ,
			loader : function (d) {
				c.loader(function () {
					ca[a] = cb(b),
					d.setFrame(a),
					d.setPosition(d.vectorLeft, d.vectorTop)
				})
			}
		}
		 : ca[a] = cb(b)
	};
	bQ("Sprite", "Unknown", {
		RADIAN : c.PI / 180,
		POSITION_NONE : 0,
		POSITION_LEFT : 1,
		POSITION_CENTER : 2,
		POSITION_RIGHT : 4,
		POSITION_TOP : 16,
		POSITION_MIDDLE : 32,
		POSITION_BOTTOM : 64,
		TRANSFORM_NONE : 1,
		TRANSFORM_MIRROR : 2,
		TRANSFORM_ROTATE : 3,
		__visible__ : !1,
		__update__ : !1,
		__alpha__ : 1,
		__layer__ : 0,
		__centerLeft__ : 0,
		__centerTop__ : 0,
		__init__ : function (a) {
			this.parent = a,
			this.__transform__ = this.TRANSFORM_NONE,
			this.init && this.init()
		},
		remove : function (a) {
			this.parent && (a === b && bS(this), this.setVisible(!1), delete this.parent.flushIndex[this.guid], delete this.parent.actList[this.guid], this.parent.childNodes.splice(this.parent.childNodes.indexOf(this), 1), this.parent = this.frameName = this.vectorLeft = this.__rectLeft__ = b)
		},
		update : function () {
			this.parent.flushIndex[this.guid] = this
		},
		flush : function () {
			this.parent.flushIndex[this.guid] = this,
			this.__update__ = !0
		},
		flushRect : function () {
			var a = this.parent.flushRect;
			this.__rectLeft__ !== b && (a.left = a.left < this.__rectLeft__ ? a.left : this.__rectLeft__, a.top = a.top < this.__rectTop__ ? a.top : this.__rectTop__, a.right = a.right > this.__rectRight__ ? a.right : this.__rectRight__, a.bottom = a.bottom > this.__rectBottom__ ? a.bottom : this.__rectBottom__);
			if (this.__update__ === !0 && this.vectorLeft !== b) {
				var c = this.vectorLeft * F << 0,
				d = this.vectorTop * F << 0;
				switch (this.__transform__) {
				case this.TRANSFORM_MIRROR:
					var e = bi(this.__centerLeft__, this.__centerTop__, this.__m11__, this.__m21__, this.__m12__, this.__m22__, c, d);
					this.__targetLeft__ = -e.left,
					this.__targetTop__ = e.top,
					this.__rectRight__ = c - this.__centerLeft__,
					this.__rectTop__ = d + this.__centerTop__,
					this.__rectLeft__ = this.__rectRight__ - this.__targetWidth__,
					this.__rectBottom__ = this.__rectTop__ + this.__targetHeight__;
					break;
				case this.TRANSFORM_ROTATE:
					this.__targetLeft__ = c,
					this.__targetTop__ = d;
					var e = bo(bk([this.__centerLeft__, this.__centerTop__, this.__centerLeft__ + this.__targetWidth__, this.__centerTop__, this.__centerLeft__ + this.__targetWidth__, this.__centerTop__ + this.__targetHeight__, this.__centerLeft__, this.__centerTop__ + this.__targetHeight__], this.__m11__, this.__m21__, this.__m12__, this.__m22__, c, d));
					this.__rectLeft__ = e.left,
					this.__rectTop__ = e.top,
					this.__rectRight__ = e.right,
					this.__rectBottom__ = e.bottom;
					break;
				default:
					this.__targetLeft__ = this.__centerLeft__ + c,
					this.__targetTop__ = this.__centerTop__ + d,
					this.__rectLeft__ = this.__targetLeft__,
					this.__rectTop__ = this.__targetTop__,
					this.__rectRight__ = this.__targetLeft__ + this.__targetWidth__,
					this.__rectBottom__ = this.__targetTop__ + this.__targetHeight__
				}
				a.left = a.left < this.__rectLeft__ ? a.left : this.__rectLeft__,
				a.top = a.top < this.__rectTop__ ? a.top : this.__rectTop__,
				a.right = a.right > this.__rectRight__ ? a.right : this.__rectRight__,
				a.bottom = a.bottom > this.__rectBottom__ ? a.bottom : this.__rectBottom__
			} else
				this.__update__ = !0
		},
		setVisible : function (a) {
			this.__visible__ !== a && (this.__visible__ = a, a ? (this.update(), this.frameType === b_ && (this.parent.actList[this.guid] = this)) : (this.flushRect(), delete this.parent.flushIndex[this.guid], delete this.parent.actList[this.guid]))
		},
		setAlpha : function (a) {
			this.__alpha__ = a,
			this.update()
		},
		setLayer : function (a) {
			this.__layer__ !== a && (this.__layer__ = a, this.parent.__sort__ = !0),
			this.update()
		},
		setCenter : function () {
			switch (arguments.length) {
			case 1:
				var a = arguments[0];
				switch (a & 15) {
				case this.POSITION_LEFT:
					this.__centerLeft__ = 0;
					break;
				case this.POSITION_CENTER:
					this.__centerLeft__ = -c.round(this.__targetWidth__ / 2);
					break;
				case this.POSITION_RIGHT:
					this.__centerLeft__ = -c.round(this.__targetWidth__)
				}
				switch (a & 240) {
				case this.POSITION_TOP:
					this.__centerTop__ = 0;
					break;
				case this.POSITION_MIDDLE:
					this.__centerTop__ = -c.round(this.__targetHeight__ / 2);
					break;
				case this.POSITION_BOTTOM:
					this.__centerTop__ = -c.round(this.__targetHeight__)
				}
				break;
			case 2:
				this.__centerLeft__ = -arguments[0] * F,
				this.__centerTop__ = -arguments[1] * F
			}
			this.flush()
		},
		resetRotate : function () {
			this.__transform__ = this.TRANSFORM_NONE,
			this.flush()
		},
		setRotate : function (a) {
			a *= this.RADIAN,
			this.__transform__ = this.TRANSFORM_ROTATE,
			this.__m22__ = this.__m11__ = c.cos(a),
			this.__m12__ =  - (this.__m21__ = c.sin(a)),
			this.flush()
		},
		setRadian : function (a) {
			this.__transform__ = this.TRANSFORM_ROTATE,
			this.__m22__ = this.__m11__ = c.cos(a),
			this.__m12__ =  - (this.__m21__ = c.sin(a)),
			this.flush()
		},
		setMirror : function (a) {
			this.__transform__ = a ? this.TRANSFORM_MIRROR : this.TRANSFORM_NONE,
			this.__m11__ =  - (this.__m22__ = 1),
			this.__m12__ = this.__m21__ = 0,
			this.flush()
		},
		setSize : function (a, b) {
			this.vectorWidth = a,
			this.vectorHeight = b,
			this.__targetWidth__ = a * F,
			this.__targetHeight__ = b * F,
			this.flush()
		},
		setPosition : function (a, b) {
			this.vectorLeft = a,
			this.vectorTop = b,
			this.flush()
		},
		resetFrame : function () {
			this.__startTime__ = D.getTime(),
			this.__times__ = 0
		},
		drawSelf : function (a, b) {
			switch (this.__frame__.type) {
			case b_:
				var c = (b - this.__startTime__) / this.__interval__ << 0,
				d = this.__frame__[c % this.__length__];
				this.__sourceLeft__ = d.left,
				this.__sourceTop__ = d.top;
				if (this.trigger) {
					var e = c / this.__length__ << 0;
					if (this.__times__ !== e) {
						this.__times__ = e;
						if (this.trigger() === !1)
							return
					}
				}
			}
			switch (this.__transform__) {
			case this.TRANSFORM_NONE:
				a.drawImage(this.__source__, this.__sourceLeft__, this.__sourceTop__, this.__targetWidth__, this.__targetHeight__, this.__targetLeft__, this.__targetTop__, this.__targetWidth__, this.__targetHeight__);
				break;
			case this.TRANSFORM_ROTATE:
				a.transform(this.__m11__, this.__m21__, this.__m12__, this.__m22__, this.__targetLeft__, this.__targetTop__),
				a.drawImage(this.__source__, this.__sourceLeft__, this.__sourceTop__, this.__targetWidth__, this.__targetHeight__, this.__centerLeft__, this.__centerTop__, this.__targetWidth__, this.__targetHeight__),
				a.setTransform(1, 0, 0, 1, 0, 0);
				break;
			default:
				a.transform(this.__m11__, this.__m21__, this.__m12__, this.__m22__, 0, 0),
				a.drawImage(this.__source__, this.__sourceLeft__, this.__sourceTop__, this.__targetWidth__, this.__targetHeight__, this.__targetLeft__, this.__targetTop__, this.__targetWidth__, this.__targetHeight__),
				a.transform(this.__m11__, -this.__m21__, -this.__m12__, this.__m22__, 0, 0)
			}
		},
		setFrame : function (a) {
			if (this.frameName !== a) {
				var b = ca[a];
				switch (b.type) {
				case bY:
					this.__sourceLeft__ = 0,
					this.__sourceTop__ = 0;
					break;
				case bZ:
					b.loader(this),
					this.drawSprite = function () {};
					return;
				case b$:
					this.__sourceLeft__ = b.left,
					this.__sourceTop__ = b.top;
					break;
				case b_:
					this.__times__ = 0,
					this.__length__ = b.length,
					this.__interval__ = b.interval,
					this.__startTime__ = U();
					break;
				default:
					return
				}
				this.frameType = b.type,
				this.frameName = a,
				this.drawSprite = this.drawSelf,
				this.vectorWidth = b.width,
				this.vectorHeight = b.height,
				this.__frame__ = b,
				this.__source__ = b.source,
				this.setSize(b.width, b.height),
				b.center && this.setCenter(b.centerLeft, b.centerTop),
				this.flush()
			}
		}
	});
	var cd,
	ce,
	cf,
	cg,
	ch = {},
	ci = 0,
	cj = function (a) {
		while (a && !a.__model__)
			a = a.parentNode;
		return a
	},
	ck = function (a) {
		var c = a.type,
		d = cj(cd = a.target);
		a.stopPropagation();
		if (!!d) {
			if (a.touches.length > 1)
				return;
			a.touches.length > 0 && (ce = a.touches),
			cf = a.touches,
			d = d.__model__;
			switch (c) {
			case "touchstart":
				cg = d,
				d.mouseover && d.mouseover(),
				d.mousedown && d.mousedown();
				var e = cf.length;
				while (e--)
					ch[cf[e].identifier] = !0;
				break;
			case "touchmove":
				d.mousemove && d.mousemove();
				break;
			case "touchend":
				cg = b;
				if (d.click) {
					var f = d.__view__.getBoundingClientRect(),
					g = ce[0].pageX,
					h;
					FZ.hasGameContainer ? h = ce[0].pageY : h = ce[0].pageY - I,
					f.left < g && f.right > g && f.top < h && f.bottom > h && d.click()
				}
				d.mouseup && d.mouseup(),
				d.mouseout && d.mouseout(),
				a.touches.length === 0 && (ch = {});
				return
			}
		}
	},
	cl = function (a) {
		var c = a.type;
		cd = a.target,
		a.stopPropagation();
		switch (c) {
		case "mousedown":
			arguments.callee.target = a.target,
			arguments.callee.touchstart = !0,
			c = "touchstart",
			ci = ++B;
			break;
		case "mouseup":
			arguments.callee.touchstart = !1,
			c = "touchend",
			ci = b;
			break;
		case "mousemove":
			if (arguments.callee.touchstart !== !0)
				return;
			c = "touchmove"
		}
		ck({
			type : c,
			target : arguments.callee.target,
			stopPropagation : function () {},
			touches : [{
					identifier : ci,
					pageX : a.pageX,
					pageY : a.pageY
				}
			]
		})
	},
	cm = function (a) {
		D.HAS_PUBLIC_API && SpilGames.Highscores.insert({
			score : a
		}),
		D.global.highScore > a || (D.global.highScore = a, bt())
	},
	cn = function () {
		return D.global.highScore << 0
	},
	co = function (a) {
		D.HAS_PUBLIC_API ? SpilGames.Highscores.showScoreboard() : alert(SpilGames._("TOP: %s", cn()))
	},
	cp = function () {
		return D.orientation === 0 ? D.HAS_PUBLIC_API && SpilGames.Settings.get("currentGameInfo").rotationLockSreen.portrait || "./system/Portrait.png" : D.HAS_PUBLIC_API && SpilGames.Settings.get("currentGameInfo").rotationLockSreen.landscape || "./system/Landscape.png"
	};
	N(D, {
		IS_MOBILE : r,
		IS_COMPUTER : !r,
		IS_IOS : q,
		IS_IPAD : m,
		IS_IPOD : n,
		IS_IPHONE : o,
		IS_ANDROID : p,
		VERSION : u,
		getScore : cn,
		submitScore : cm,
		showScoreboard : co,
		getTime : U,
		resetTime : W,
		flushTime : V,
		pauseTime : X,
		resumeTime : Y,
		setTimeRatio : Z,
		setTimeout : bd,
		clearTimeout : be,
		getUrl : bI,
		random : bg,
		randomChoise : bh,
		transform : bi,
		transformShape : bk,
		transformInverse : bj,
		parseArray : bp,
		distance : bl,
		distanceSquare : bm,
		setScaleRatio : bn,
		getBoundingRect : bo,
		getVector : bN,
		loadSetting : bs,
		saveSetting : bt,
		clearSetting : bu,
		connect : by,
		message : bz,
		setScene : bA,
		mainLoop : bB,
		tween : bL,
		allocClass : bQ,
		allocObject : bR,
		freeObject : bS
	});
	var cq = {
		resize : function (a) {
			switch (a) {
			case "portrait":
				D.orientation = 0,
				D.width = 320,
				D.naturalWidth = 320,
				D.height = 416,
				D.naturalHeight = 480;
				return !0;
			case "landscape":
				D.orientation = 90,
				D.width = 480,
				D.naturalWidth = 480,
				D.height = 268,
				D.naturalHeight = 320;
				return !0;
			default:
				return !1
			}
		},
		screen : function () {
			G = c.min(k ? 4 : 2, g(c.min(a.innerWidth / D.width, a.innerHeight / D.height) * 100) / 100),
			G >= 2 || (n || o) && a.devicePixelRatio === 2 ? (p && (G = 1), F = 2) : G = F = 1,
			H = F === 1 ? "$1" : "x" + F + "$1",
			J = g((a.innerWidth - D.naturalWidth * G) / 2),
			I = g((a.innerHeight - D.naturalHeight * G) / 2),
			D.root.setStyle("left: ?px; top: 0px; width: ?px; height: ?px; font: 16px/20px 'Georgia';", J / G, D.naturalWidth, D.naturalHeight),
			D.scaleRatio = G,
			D.offsetLeft = g(-c.min(0, J / G)),
			D.offsetTop = g(-c.min(0, I / G)),
			J = c.max(0, J),
			I = c.max(0, -I),
			V(),
			bX.fixScale(),
			FZ.hasGameContainer && SpilGames.Events.subscribe("gamecontainer.resize", FZ.changeSize)
		},
		setupAudio : function () {
			if (a.Audio === b) {
				var c = a.Audio = function () {};
				c.prototype = {
					canPlayType : function () {
						return ""
					},
					play : function () {},
					pause : function () {},
					load : function () {},
					duration : NaN,
					currentTime : 0,
					readyState : 0,
					addEventListener : function () {},
					constructor : c
				}
			}
		},
		preload : function (b) {
			var c = E.cacheManifest;
			if (c && c.length > 0) {
				var d = 0,
				e = c.length,
				f = a.devicePixelRatio >= 2 || m ? "x2$1" : "$1";
				while (e--) {
					var g = new Image;
					g.onload = function () {
						++d === c.length && b()
					},
					g.src = C + c[e].replace(x, f)
				}
			} else
				b()
		},
		eventAssign : function () {
			r ? (f.addEventListener("touchstart", ck, !1), f.addEventListener("touchmove", ck, !1), f.addEventListener("touchend", ck, !1)) : (f.addEventListener("mousedown", cl, !1), f.addEventListener("mousemove", cl, !1), f.addEventListener("mouseup", cl, !1))
		},
		device : function () {
			var a = f.head.appendChild(f.createElement("STYLE"));
			a.type = "text/css",
			a.textContent = bW(["body\t\t\t{ padding: 0px; margin: 0px; cursor: default; -user-select: none; -text-size-adjust: none; }", ".root div\t\t{ padding: 0px; margin: 0px; -box-sizing: border-box; background-repeat: no-repeat; -background-size: 100% !important; }", ".mask\t\t\t{ left: 0px; top: 0px; -transition: opacity 500ms linear; z-index: 999; }", ".screen\t\t{ width: 2048px; height: 2048px; }", ".eventmask\t\t{ left: 0px; top: 0px; width: 100%; height: 100%; z-index: 10; }", ".animation\t\t{ -transition: opacity 200ms linear; }"].join("\n"));
			if (!!r) {
				var b = f.head.appendChild(f.createElement("META"));
				b.name = "viewport",
				b.content = p ? "width=device-width, user-scalable=no;" : "width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
			}
		},
		decorator : function () {
			r ? f.body.appendChild(f.createElement("DIV")).className = "screen" : f.body.style.overflow = "hidden",
			D.root = bR("DOM", "root"),
			D.root.addClass("animation root"),
			D.root.setStyle("opacity: 0;"),
			D.eventMask = bR("DOM", "mask", "root"),
			D.eventMask.addClass("eventmask"),
			D.mask = bR("DOM", "mask"),
			D.mask.addClass("mask"),
			D.mask.setStyle("opacity: 0;"),
			FZ.rootDiv = D.root.__view__,
			FZ.eventMaskDiv = D.eventMask.__view__,
			FZ.maskDiv = D.mask.__view__
		},
		publicAPI : function () {
			D.HAS_PUBLIC_API = !!a.SpilGames,
			D.HAS_PUBLIC_API ? a.SpilGames._ || (a.SpilGames._ = this.translate) : a.SpilGames = {
				_ : this.translate
			},
			FZ.checkSpilEvents()
		},
		translate : function (a) {
			var b = 0,
			c = arguments;
			return a.replace(/%s/g, function () {
				b++;
				return c[b] ? c[b] : arguments[0]
			})
		}
	},
	cr = {
		config : function (b) {
			var c = this;
			this.parseStyle(b.style),
			this.parseClass(b["class"]),
			this.parseObject(b.object),
			a.setTimeout(function () {
				c.parseStorage(b.storage)
			}, 0)
		},
		parseStyle : function (a) {
			if (a && a.length) {
				var b = f.head.appendChild(f.createElement("STYLE"));
				b.type = "text/css",
				b.textContent = bW(a.join("\n"))
			}
		},
		parseStorage : function (a) {
			for (var c in a) {
				var d = bH[c];
				if (d === b)
					D[c] = a[c];
				else {
					var e = a[c];
					switch (typeof e) {
					case "string":
						D[c] = d(c, e);
						break;
					case "object":
						if (e.constructor === Array) {
							var f = D[c] = [];
							e.forEach(function (a, b) {
								f[b] = d(b, a)
							})
						} else {
							var f = D[c] = {};
							for (var g in e)
								f[g] = d(g, e[g])
						}
					}
				}
			}
			bK()
		},
		parseClass : function (a) {
			var b = /^(:){0,2}/,
			c;
			for (var d in a) {
				switch (b.exec(d)[0]) {
				case ":":
					c = "DOM";
					break;
				case "::":
					c = "Sprite";
					break;
				default:
					c = "Unknown"
				}
				bQ(d, c, a[d])
			}
		},
		parseObject : function (a) {
			var b = /^(.*)\.(.*)(:.*)$/,
			c = /^([^:]*):(.*)$/,
			d = [];
			for (var e in a) {
				var g = b.exec(e),
				h = c.exec(e),
				i = h[2],
				j = h[1].replace(/\./g, "-");
				d[d.length] = [".", i, ".", j, " { ", a[e], " }"].join(""),
				bR(g[3], g[2], g[1]).addClass(i + " " + j)
			}
			var k = f.head.appendChild(f.createElement("STYLE"));
			k.type = "text/css",
			k.textContent = bW(d.join("\n"))
		}
	},
	cs = function (b) {
		console.log("resetScroll set a scroll", "hasGamer:" + FZ.hasGameContainer),
		a.setTimeout(function () {
			FZ.hasGameContainer ? (a.scrollTo(0, p ? 1 : 0), console.error("window.scroll")) : a.scrollTo(0, I + (p ? 1 : 0))
		}, 600),
		typeof b == "function" && a.setTimeout(b, 900),
		f.removeEventListener("touchstart", cs, !1)
	},
	ct = function () {
		f.addEventListener("touchstart", cs, !1)
	},
	cu = function () {
		var d = a.orientation;
		if (d === b)
			return D.orientation;
		var e = arguments.callee.cache || (arguments.callee.cache = {});
		d = c.abs(d),
		e[d] === b && (e[d] = a.innerWidth > a.innerHeight ? 90 : 0);
		return e[d]
	},
	cv = function (b) {
		var c = arguments.callee;
		cs(function () {
			c.orientation === cu() && (delete c.orientation, c.callback()),
			D.orientation === cu() ? (D.mask.setVisible(!1), D.root.setVisible(!0), bz("resume")) : (D.mask.setVisible(!0), D.root.setVisible(!1), bz("pause")),
			typeof b == "function" && a.setTimeout(b, 0)
		})
	},
	cw = function () {
		cs(function () {
			D.mask.setStyle("visibility: hidden; opacity: 1; -transition: none; background: #FFF url(?) no-repeat center; background-size: contain;", cp()),
			a.addEventListener("resize", cv, !1),
			a.addEventListener("orientationchange", cv, !1),
			cv(function () {
				D.orientation === cu() ? (console.log("sysOri:" + D.orientation), console.log("getOri:" + cu()), cq.screen(), cs(function () {
						cr.config(a.onstartup(D))
					}), cv.orientation = D.orientation ? 0 : 90, cv.callback = function () {
					D.mask.setStyle("top: ?px; width: ?px; height: ?px;", I / G, a.innerWidth / G, (a.innerHeight + 2) / G)
				}) : (D.mask.setStyle("width: ?px; height: ?px;", a.innerWidth, a.innerHeight + 2), cv.orientation = D.orientation, cv.callback = function () {
					cq.screen(),
					D.mask.setStyle("top: ?px;", I / G),
					cs(function () {
						cr.config(a.onstartup(D))
					})
				})
			})
		})
	},
	cx = function () {
		cx = !0
	},
	cy = function (c) {
		if (!(a.onstartup && (E = a.onstartup.config) && !cq.resize(E.orientation))) {
			if (E.autolaunch === !1 && c && c.type === "DOMContentLoaded") {
				E.launch = cy;
				return
			}
			C = E.baseurl || "",
			cq.decorator(),
			cq.setupAudio(),
			br(function () {
				bs(function () {
					cq.preload(function () {
						r && (a.addEventListener("scroll", ct, !1), a.addEventListener("pageshow", function () {
								D.audioBtn && D.audioBtn.audioState === !0 && D.audio.audio.play(),
								bz("resume")
							}, !1), a.addEventListener("pagehide", function () {
								D.audio.audio.pause(),
								bz("pause"),
								cg && (cg.mouseup && cg.mouseup(), cg.mouseout && cg.mouseout(), ch = {})
							}, !1), f.addEventListener("touchstart", function (a) {
								a.target.value === b && a.target.nodeName !== "A" && a.preventDefault()
							}, !1)),
						cq.eventAssign(),
						cx !== !0 && c && c.type === "DOMContentLoaded" ? a.addEventListener("load", cw, !1) : cw()
					})
				})
			})
		}
	};
	cq.device(),
	cq.publicAPI(),
	a.addEventListener("DOMContentLoaded", cy, !1),
	a.addEventListener("load", cx, !1),
	FZ.system = D
}
(window), window.profile = function (a, b) {
	return {}

}
(window);
var Ball8Mode = function () {
	this.initialize()
};
Ball8Mode.prototype = {
	p1balls : null,
	p1suit : null,
	p2balls : null,
	p2suit : null,
	curBalls : null,
	opening : !0,
	k_all : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	k_n8all : [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15],
	k_small : [1, 2, 3, 4, 5, 6, 7],
	k_big : [9, 10, 11, 12, 13, 14, 15],
	k_8 : [8],
	takeCueBall : function () {
		console.log("takeCueBall")
	},
	takeAllBall : function () {
		console.log("takeAllBall")
	},
	takePartBall : function (a) {
		console.log("takePartBall", a)
	},
	p1exec : function () {
		console.log("p1exec")
	},
	p1won : function () {
		console.log("p1won")
	},
	p1goal : function (a) {
		console.log("p1goal", a)
	},
	p2exec : function () {
		console.log("p2exec")
	},
	p2won : function () {
		console.log("p2won")
	},
	p2goal : function (a) {
		console.log("p2goal", a)
	},
	initialize : function () {
		this.p1balls = this.curBalls = [],
		this.p2balls = [],
		this.p1suit = this.p2suit = this.k_n8all
	},
	kickoff : function () {
		this.p1exec()
	},
	exec : function (a, b) {
		var c = !1,
		d = !1,
		e = null,
		f = a.length;
		while (f--) {
			e = a[f];
			if (e === 0) {
				c = !0,
				d = !0,
				this.takeCueBall(),
				a.splice(f, 1);
				break
			}
		}
		var g = this.curBalls === this.p1balls ? this.p1suit : this.p2suit,
		h = this.curBalls === this.p1balls ? this.p2balls : this.p1balls;
		f = a.length;
		while (f--) {
			var i = a[f];
			if (i === 8) {
				g !== this.k_8 && this.opening !== !0 || c === !0 ? this.curBalls === this.p1balls ? this.p2won() : this.p1won() : this.curBalls === this.p1balls ? this.p1won() : this.p2won();
				return
			}
		}
		if (e !== 0)
			if (b === undefined)
				c = !0;
			else if (g.indexOf(b) === -1)
				c = !0, d = !0;
			else {
				var j = !1;
				f = a.length;
				while (f--) {
					var e = a[f];
					g.indexOf(e) > -1 ? (j = !0, this.curBalls.push(e), this.curBalls === this.p1balls ? this.p1goal(e) : this.p2goal(e), g === this.k_n8all && (this.curBalls === this.p1balls ? (g = this.p1suit = e < 8 ? this.k_small : this.k_big, this.p2suit = e < 8 ? this.k_big : this.k_small) : (g = this.p2suit = e < 8 ? this.k_small : this.k_big, this.p1suit = e < 8 ? this.k_big : this.k_small))) : (h.push(e), h === this.p1balls ? this.p1goal(e) : this.p2goal(e), g === this.k_n8all && (this.curBalls === this.p1balls ? (g = this.p1suit = e < 8 ? this.k_big : this.k_small, this.p2suit = e < 8 ? this.k_small : this.k_big) : (g = this.p2suit = e < 8 ? this.k_big : this.k_small, this.p1suit = e < 8 ? this.k_small : this.k_big)))
				}
				j === !1 && (c = !0)
			}
		if (d === !0)
			if (g !== this.k_n8all) {
				f = a.length;
				var k = [];
				while (f--) {
					var e = a[f];
					g.indexOf(e) > -1 ? k[k.length] = e : (h.push(e), h === this.p1balls ? this.p1goal(e) : this.p2goal(e))
				}
				k.length > 0 && this.takePartBall(k)
			} else
				this.takeAllBall(), console.log("还未分出花色");
		this.p1balls.length >= 7 && (this.p1suit = this.k_8),
		this.p2balls.length >= 7 && (this.p2suit = this.k_8),
		c === !0 && (this.curBalls = this.curBalls === this.p1balls ? this.p2balls : this.p1balls),
		this.curBalls === this.p1balls ? this.p1exec() : this.p2exec(),
		this.opening = !1,
		c === !0 && FZ.showMsg(this.curBalls === this.p1balls);
		var l = this
	},
	constructor : Ball8Mode
};
var StraightMode = function (a) {
	this.initialize(a)
};
StraightMode.prototype = {
	p1balls : null,
	p1suit : null,
	p2balls : null,
	p2suit : null,
	curBalls : null,
	opening : !0,
	k_all : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	k_n8all : [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15],
	k_small : [1, 2, 3, 4, 5, 6, 7],
	k_big : [9, 10, 11, 12, 13, 14, 15],
	k_8 : [8],
	takeCueBall : function () {
		console.log("takeCueBall")
	},
	takeAllBall : function () {
		console.log("takeAllBall")
	},
	takePartBall : function (a) {
		console.log("takePartBall", a)
	},
	p1exec : function () {
		console.log("p1exec")
	},
	p1won : function () {
		console.log("p1won")
	},
	p1goal : function (a) {
		console.log("p1goal", a)
	},
	p2exec : function () {
		console.log("p2exec")
	},
	p2won : function () {
		console.log("p2won")
	},
	p2goal : function (a) {
		console.log("p2goal", a)
	},
	initialize : function (a) {
		switch (a) {
		case 1:
			this.p1balls = this.p2balls = this.curBalls = [];
			break;
		case 2:
			this.p1balls = this.curBalls = [],
			this.p2balls = [];
			break;
		default:
			console.log("error player number " + a)
		}
		this.p1suit = this.p2suit = this.k_all
	},
	kickoff : function () {
		this.p1exec()
	},
	exec : function (a) {
		var b = !1,
		c = a.length;
		if (c !== 0) {
			var d = 0;
			while (c--) {
				d = a[c];
				if (d === 0) {
					b = !0,
					this.takeCueBall(),
					this.takeAllBall();
					break
				}
			}
			if (d !== 0) {
				c = a.length;
				while (c--)
					this.curBalls === this.p1balls ? this.p1goal(this.curBalls[this.curBalls.length] = a[c]) : this.p2goal(this.curBalls[this.curBalls.length] = a[c])
			}
		} else
			b = !0;
		b === !0 && (this.curBalls = this.curBalls === this.p1balls ? this.p2balls : this.p1balls);
		var e = this.curBalls === this.p1balls ? this.p2balls : this.p1balls;
		if (this.curBalls.length >= 8)
			this.curBalls === this.p1balls ? this.p1won() : this.p2won();
		else if (e.length >= 8)
			e === this.p1balls ? this.p1won() : this.p2won();
		else {
			b === !0 && FZ.showMsg(this.curBalls === this.p1balls);
			var f = this;
			this.curBalls === this.p1balls ? this.p1exec() : this.p2exec()
		}
	},
	constructor : StraightMode
};
var Gesture = function () {};
Gesture.prototype = {
	PARALLEL : 1,
	VERTICAL : 2,
	END : 3,
	CANCEL : 4,
	m_x : null,
	m_y : null,
	m_vx : 0,
	m_vy : 0,
	m_vl : 0,
	m_op : null,
	m_limit : 5,
	ongesture : function () {},
	start : function (a, b, c, d) {
		this.m_x = c,
		this.m_y = d,
		this.m_vx = a,
		this.m_vy = b,
		this.m_vl = Math.sqrt(this.m_vx * this.m_vx + this.m_vy * this.m_vy),
		this.m_vx /= this.m_vl,
		this.m_vy /= this.m_vl
	},
	move : function (a, b) {
		if (this.m_x !== null && this.m_y !== null) {
			var c = a - this.m_x,
			d = b - this.m_y;
			switch (this.op) {
			case this.PARALLEL:
				this.ongesture(this.PARALLEL, this.m_vx, this.m_vy, c * this.m_vx + d * this.m_vy);
				break;
			case this.VERTICAL:
				this.ongesture(this.VERTICAL, -this.m_vy, this.m_vx, c * -this.m_vy + d * this.m_vx);
				break;
			default:
				var e = c * -this.m_vy + d * this.m_vx,
				f = c * this.m_vx + d * this.m_vy;
				Math.max(Math.abs(e), Math.abs(f)) > this.m_limit && (Math.abs(e) >= Math.abs(f) ? (this.op = this.VERTICAL, this.ongesture(this.VERTICAL, -this.m_vy, this.m_vx, e)) : (this.op = this.PARALLEL, this.ongesture(this.PARALLEL, this.m_vx, this.m_vy, f)))
			}
		}
	},
	end : function () {
		this.m_x !== null && this.m_y !== null && (this.m_x = this.m_y = this.op = null, this.ongesture(this.END))
	},
	cancel : function () {
		this.m_x !== null && this.m_y !== null && (this.m_x = this.m_y = this.op = null, this.ongesture(this.CANCEL))
	},
	constructor : Gesture
}, function (a, b) {
	var c = .5,
	d = Math.PI / 180,
	e = Number.MAX_VALUE,
	f = Math.sqrt,
	g = Math.abs,
	h = Math.max,
	i = Math.min,
	j = Math.cos,
	k = Math.sin,
	l = function (a, b) {
		for (var c in b)
			a[c] = b[c]
	},
	m = function (a, b, c) {
		return a < b ? b : a > c ? c : a
	},
	n = function () {};
	n.prototype = {
		x : 0,
		y : 0,
		vx : 0,
		vy : 0,
		userData : null,
		constructor : n
	};
	var o = function (a, b) {
		this.initialize(a, b)
	};
	o.prototype = {
		m_x : 0,
		m_y : 0,
		m_x0 : 0,
		m_y0 : 0,
		m_vx : 0,
		m_vy : 0,
		m_lengthSqr : 0,
		m_length : 0,
		m_left : 0,
		m_top : 0,
		m_right : 0,
		m_bottom : 0,
		m_userData : null,
		m_table : null,
		m_prev : null,
		m_next : null,
		initialize : function (a, b) {
			this.m_table = a,
			(this.m_next = this.m_table.m_sideList) !== null && (this.m_next.m_prev = this),
			this.m_prev = null,
			this.m_table.m_sideList = this;
			var c = this.m_table.m_radius;
			this.m_x = b.x + this.m_table.m_marginWidth,
			this.m_y = b.y + this.m_table.m_marginHeight,
			this.m_vx = b.vx,
			this.m_vy = b.vy,
			this.m_lengthSqr = this.m_vx * this.m_vx + this.m_vy * this.m_vy,
			this.m_length = f(this.m_lengthSqr),
			this.m_left = i(this.m_x, this.m_x + this.m_vx) - c,
			this.m_top = i(this.m_y, this.m_y + this.m_vy) - c,
			this.m_right = h(this.m_x, this.m_x + this.m_vx) + c,
			this.m_bottom = h(this.m_y, this.m_y + this.m_vy) + c,
			l(this.m_userData = {}, b.userData),
			this.m_x0 = this.m_x - b.vy / this.m_length * c,
			this.m_y0 = this.m_y + b.vx / this.m_length * c
		},
		collide : function (a) {
			var b = a.m_x - this.m_x0,
			c = a.m_y - this.m_y0;
			if (b * this.m_vy + c * -this.m_vx < 0 || a.m_vx * -this.m_vy + a.m_vy * this.m_vx >= 0)
				return !1;
			var d = a.m_x - this.m_x,
			e = a.m_y - this.m_y,
			f = d - this.m_vx,
			g = e - this.m_vy,
			h = (b * this.m_vx + c * this.m_vy) / this.m_length;
			if (h >= 0 && h <= this.m_length)
				a.contactPoint(this.m_vy, -this.m_vx);
			else if (d * d + e * e <= this.m_table.m_radiusSqr)
				a.contactPoint(d, e);
			else if (f * f + g * g <= this.m_table.m_radiusSqr)
				a.contactPoint(-f, -g);
			else
				return !1;
			return !0
		},
		constructor : o
	};
	var p = function () {};
	p.prototype = {
		x : 0,
		y : 0,
		radius : 0,
		userData : null,
		constructor : p
	};
	var q = function (a, b) {
		this.initialize(a, b)
	};
	q.prototype = {
		m_x : 0,
		m_y : 0,
		m_radius : 0,
		m_radiusSqr : 0,
		m_userData : null,
		m_table : null,
		m_prev : null,
		m_next : null,
		initialize : function (a, b) {
			this.m_table = a,
			(this.m_next = this.m_table.m_pocketList) !== null && (this.m_next.m_prev = this),
			this.m_prev = null,
			this.m_table.m_pocketList = this,
			this.m_x = b.x + this.m_table.m_marginWidth,
			this.m_y = b.y + this.m_table.m_marginHeight,
			this.m_radius = b.radius,
			this.m_radiusSqr = this.m_radius * this.m_radius,
			l(this.m_userData = {}, b.userData)
		},
		constructor : q
	};
	var r = function () {};
	r.prototype = {
		x : 0,
		y : 0,
		a : 0,
		userData : null,
		ongoal : function () {},
		onfree : function () {},
		onmove : function () {},
		oncollide : function () {},
		constructor : r
	};
	var s = function (a, b, c) {
		this.initialize(a, b, c)
	};
	s.prototype = {
		m_x : 0,
		m_y : 0,
		m_a : 0,
		m_x0 : 0,
		m_y0 : 0,
		m_vx : 0,
		m_vy : 0,
		m_va : 0,
		m_userData : null,
		ongoal : function () {},
		onfree : function () {},
		onmove : function () {},
		oncollide : function () {},
		m_table : null,
		m_prev : null,
		m_next : null,
		initialize : function (a, b, c) {
			this.m_table = a,
			!c || c.constructor !== s ? ((this.m_next = this.m_table.m_ballList) !== null && (this.m_next.m_prev = this), this.m_prev = null, this.m_table.m_ballList = this) : (this.m_prev = c, (this.m_next = this.m_prev.m_next) !== null && (this.m_next.m_prev = this), this.m_prev.m_next = this),
			this.m_x = b.x + this.m_table.m_marginWidth,
			this.m_y = b.y + this.m_table.m_marginHeight,
			this.m_a = b.a,
			this.m_x0 = this.m_x,
			this.m_y0 = this.m_y,
			this.m_vx = 0,
			this.m_vy = 0,
			this.m_va = 0,
			l(this.m_userData = {}, b.userData),
			this.ongoal = b.ongoal,
			this.onfree = b.onfree,
			this.onmove = b.onmove,
			this.oncollide = b.oncollide
		},
		destroy : function () {
			this.onfree(),
			this.m_prev !== null ? this.m_prev.m_next = this.m_next : this.m_table.m_ballList = this.m_next,
			this.m_next !== null && (this.m_next.m_prev = this.m_prev)
		},
		applyImpulse : function (a, b, c) {
			a *= d;
			var e = Math.cos(a) * this.m_table.m_radius,
			g = Math.sin(a) * this.m_table.m_radius;
			this.m_va += (e * c - g * b) / this.m_table.m_radiusSqr,
			this.m_vx += b,
			this.m_vy += c;
			var h = f(this.m_vx * this.m_vx + this.m_vy * this.m_vy);
			this.m_vx /= h,
			this.m_vy /= h,
			h = m(h, 0, this.m_table.m_maxLinearVelocity),
			this.m_vx *= h,
			this.m_vy *= h,
			this.computeStep()
		},
		contactPoint : function (a, b) {
			var c = a * a + b * b,
			d = 1 / c,
			e = (this.m_vx * a + this.m_vy * b) * d;
			a *= e,
			b *= e,
			this.m_vx -= a * 2,
			this.m_vy -= b * 2;
			var g = this.m_va * this.m_table.m_radius,
			h = 1 / f(c) * g,
			i = b * h,
			j = -a * h;
			this.m_vx += i,
			this.m_vy += j,
			this.computeStep()
		},
		computeStep : function () {
			var a = c / f(this.m_vx * this.m_vx + this.m_vy * this.m_vy);
			this.m_table.m_minStep > a && (this.m_table.m_minStep = a)
		},
		getDef : function () {
			var a = new r;
			a.x = this.m_x - this.m_table.m_marginWidth,
			a.y = this.m_y - this.m_table.m_marginHeight,
			a.a = this.m_a,
			a.userData = this.m_userData,
			a.ongoal = this.ongoal,
			a.onfree = this.onfree,
			a.onmove = this.onmove,
			a.oncollide = this.oncollide;
			return a
		},
		constructor : s
	};
	var t = function () {};
	t.prototype = {
		m_tree : null,
		insert : function (a, b) {
			if (this.m_tree === null)
				this.m_tree = {
					left : a,
					right : b,
					next : null,
					prev : null
				};
			else {
				var c = null;
				for (var d = this.m_tree; d; d = d.next) {
					if (d.left > b) {
						var e = {
							left : a,
							right : b,
							next : null,
							prev : null
						};
						e.next = d,
						e.prev = d.prev,
						e.next && (e.next.prev = e),
						e.prev ? e.prev.next = e : this.m_tree = e,
						c = null;
						break
					}
					if (d.right < a) {
						c = d;
						continue
					}
					d.left = d.left < a ? d.left : a,
					d.right = d.right > b ? d.right : b,
					c = null;
					break
				}
				c !== null && (c.next = {
						left : a,
						right : b,
						next : null,
						prev : c
					})
			}
		},
		trim : function () {
			for (var a = this.m_tree; a; a = a.next)
				while (a.next && a.right >= a.next.left)
					a.right = h(a.right, a.next.right), a.next = a.next.next, a.next && (a.next.prev = a)
		},
		CIRCLE_RADIAN : Math.PI * 2,
		insertCircle : function (a, b, c) {
			var d = Math.asin(c / Math.sqrt(a * a + b * b)),
			e = Math.atan2(b, a);
			e = e < 0 ? Math.PI * 2 + e : e;
			var f = e - d,
			g = e + d;
			f < 0 ? (this.insert(this.CIRCLE_RADIAN + f, this.CIRCLE_RADIAN), this.insert(0, g)) : g > this.CIRCLE_RADIAN ? (this.insert(f, this.CIRCLE_RADIAN), this.insert(0, g - this.CIRCLE_RADIAN)) : this.insert(f, g)
		},
		computeOffset : function (a) {
			for (var b = this.m_tree; b; b = b.next) {
				var c = b.right - b.left;
				a -= c;
				if (a < 0)
					return b.left + c + a
			}
			return null
		},
		constructor : t
	};
	var u = function () {};
	u.prototype = {
		width : 0,
		height : 0,
		marginWidth : 0,
		marginHeight : 0,
		radius : 0,
		linearDamping : 0,
		angularDamping : 0,
		sideRevert : .75,
		maxLinearVelocity : 10,
		onstatic : function () {},
		constructor : u
	};
	var v = function (a) {
		this.initialize(a)
	};
	v.prototype = {
		m_width : 0,
		m_height : 0,
		m_marginWidth : 0,
		m_marginHeight : 0,
		m_radius : 0,
		m_radiusSqr : 0,
		m_radius2 : 0,
		m_radius2Sqr : 0,
		m_invRadius2Sqr : 0,
		m_edgeLeft : 0,
		m_edgeTop : 0,
		m_edgeRight : 0,
		m_edgeBottom : 0,
		m_linearDamping : 1,
		m_angularDamping : 1,
		m_sideRevert : .75,
		m_maxLinearVelocity : 10,
		m_minStep : e,
		m_mutex : !1,
		m_dt : 0,
		onstatic : function () {},
		m_ballList : null,
		m_sideList : null,
		m_pocketList : null,
		initialize : function (a) {
			this.m_width = a.width,
			this.m_height = a.height,
			this.m_marginWidth = a.marginWidth,
			this.m_marginHeight = a.marginHeight,
			this.m_radius = a.radius,
			this.m_radiusSqr = this.m_radius * this.m_radius,
			this.m_radius2 = this.m_radius * 2,
			this.m_radius2Sqr = this.m_radius2 * this.m_radius2,
			this.m_invRadius2Sqr = 1 / this.m_radius2Sqr,
			this.m_edgeLeft = this.m_radius + this.m_marginWidth,
			this.m_edgeTop = this.m_radius + this.m_marginHeight,
			this.m_edgeRight = this.m_width - this.m_radius + this.m_marginWidth,
			this.m_edgeBottom = this.m_height - this.m_radius + this.m_marginHeight,
			this.m_linearDamping = 1 - a.linearDamping,
			this.m_angularDamping = 1 - a.angularDamping,
			this.m_sideRevert = a.sideRevert,
			this.m_maxLinearVelocity = a.maxLinearVelocity,
			this.m_dt = 0,
			this.m_mutex = !1,
			this.onstatic = a.onstatic
		},
		createBall : function (a, b) {
			return new s(this, a, b)
		},
		createPocket : function (a) {
			return new q(this, a)
		},
		createSide : function (a) {
			return new o(this, a)
		},
		BOOST_FILTER_SIDE : 1,
		BOOST_FILTER_POCKET : 2,
		boost : function (a, b, c, d) {
			d <<= 0;
			var h = this.m_radius,
			i = 1 / f(b * b + c * c),
			j = b * i,
			k = c * i,
			l = a.m_x,
			m = a.m_y,
			n = null,
			o = l,
			p = m,
			q = null,
			r = null,
			s = null,
			t = null,
			u = null,
			v = e,
			w = e;
			for (var x = this.m_ballList; x; x = x.m_next) {
				if (a === x)
					continue;
				var y = x.m_x - l,
				z = x.m_y - m,
				A = y * b + z * c;
				if (A >= 0) {
					var B = (y * c - z * b) * i;
					if (g(B) <= this.m_radius2) {
						A *= i,
						y -= j * A,
						z -= k * A;
						var C = A - f(this.m_radius2Sqr - (y * y + z * z));
						y = j * C,
						z = k * C;
						var D = y * y + z * z;
						w > D && (w = D, n = x, o = l + y, p = m + z)
					}
				}
			}
			if (n === null || o <= this.m_edgeLeft || o >= this.m_edgeRight || p <= this.m_edgeTop || p >= this.m_edgeBottom) {
				if (!(d & this.BOOST_FILTER_SIDE))
					for (var E = this.m_sideList; E; E = E.m_next) {
						var F = b * E.m_vy - c * E.m_vx,
						y = E.m_x0 - l,
						z = E.m_y0 - m,
						G = (E.m_vy * y - E.m_vx * z) / F;
						if (G < 0)
							continue;
						var H = (c * y - b * z) / F;
						if (H > 0 && H < 1) {
							y = b * G,
							z = c * G;
							var D = y * y + z * z;
							w > D && (w = D, n = E, o = l + y, p = m + z)
						} else {
							y = E.m_x - l,
							z = E.m_y - m;
							if (g((y * c - z * b) * i) <= h) {
								var A = (y * b + z * c) * i;
								if (A > 0) {
									y -= j * A,
									z -= k * A;
									var C = A - f(this.m_radiusSqr - (y * y + z * z));
									y = j * C,
									z = k * C;
									var D = y * y + z * z;
									w > D && (w = D, n = E, o = l + y, p = m + z)
								}
							}
							y = E.m_x + E.m_vx - l,
							z = E.m_y + E.m_vy - m;
							if (g((y * c - z * b) * i) <= h) {
								var A = (y * b + z * c) * i;
								if (A > 0) {
									y -= j * A,
									z -= k * A;
									var C = A - f(this.m_radiusSqr - (y * y + z * z));
									y = j * C,
									z = k * C;
									var D = y * y + z * z;
									w > D && (w = D, n = E, o = l + y, p = m + z)
								}
							}
						}
					}
				if (!(d & this.BOOST_FILTER_POCKET))
					if (n !== null)
						for (var I = this.m_pocketList; I; I = I.m_next) {
							var y = I.m_x - o,
							z = I.m_y - p,
							D = y * y + z * z;
							if (D <= I.m_radiusSqr) {
								n = I,
								u = I,
								v = 0;
								break
							}
							v > D && (u = I, v = D)
						}
					else
						for (var I = this.m_pocketList; I; I = I.m_next) {
							var y = I.m_x - o,
							z = I.m_y - p;
							if (y * b + z * c > 0 && g((y * c - z * b) * i) <= I.m_radius) {
								var C = f(y * y + z * z);
								n = I,
								u = I,
								v = 0,
								o = l + j * C,
								p = m + k * C;
								break
							}
						}
			} else {
				s = (n.m_x - o) / 2,
				t = (n.m_y - p) / 2;
				var J = (b * s + c * t) / (s * s + t * t);
				q = b - s * J,
				r = c - t * J;
				var K = 1 / f(q * q + r * r) * h;
				K === Infinity && (K = 0),
				q *= K,
				r *= K
			}
			return {
				nearestPocket : u,
				nearestDistPocketSqr : v,
				bounceX : q,
				bounceY : r,
				impactX : s,
				impactY : t,
				sourceX : l,
				sourceY : m,
				contactX : o,
				contactY : p,
				contactTarget : n,
				forceX : j,
				forceY : k
			}
		},
		robots : function (a, b, e) {
			a *= d;
			var g = 0,
			h = this.BOOST_FILTER_SIDE | this.BOOST_FILTER_POCKET,
			i = null,
			l = null,
			n = null,
			o = new t,
			p = this.m_ballList;
			for (var q = p.m_next; q; q = q.m_next)
				o.insertCircle(q.m_x - p.m_x, q.m_y - p.m_y, this.m_radius);
			o.trim();
			var r = 0;
			while ((r = o.computeOffset(g)) !== null) {
				var s = this.boost(b, j(r), k(r), h);
				if (s.contactTarget) {
					var u = e.indexOf(s.contactTarget);
					if (u !== -1) {
						u = e[u];
						var v = this.boost(u, s.impactX, s.impactY);
						if (v.nearestDistPocketSqr === 0) {
							i = s,
							l = v;
							break
						}
						if (i === null || v.nearestDistPocketSqr < l.nearestDistPocketSqr)
							i = s, l = v
					} else
						n = s
				}
				g += a
			}
			var w = function (a, b, c, d) {
				while (a > 0)
					a -= c * b, b /= d;
				return b
			};
			if (i) {
				var x = l.contactX - l.sourceX,
				y = l.contactY - l.sourceY,
				z = f(x * x + y * y),
				A = w(z, c, this.m_dt, this.m_linearDamping);
				A /= i.forceX * l.forceX + i.forceY * l.forceY,
				x = i.contactX - i.sourceX,
				y = i.contactY - i.sourceY,
				z = f(x * x + y * y),
				i.forceLength = m(w(z, A, this.m_dt, this.m_linearDamping), this.m_maxLinearVelocity * .4, this.m_maxLinearVelocity);
				return i
			}
			if (n) {
				var x = n.contactX - n.sourceX,
				y = n.contactY - n.sourceY,
				z = f(x * x + y * y);
				n.forceLength = m(w(z, this.m_maxLinearVelocity * .4, this.m_dt, this.m_linearDamping), 0, this.m_maxLinearVelocity);
				return n
			}
			return null
		},
		collideEdge : function (a) {
			var b = a.m_x,
			c = a.m_y;
			for (var d = this.m_pocketList; d; d = d.m_next) {
				var e = b - d.m_x,
				f = c - d.m_y;
				if (e * e + f * f <= d.m_radiusSqr) {
					a.ongoal(d),
					a.destroy();
					return
				}
			}
			for (var g = this.m_sideList; g; g = g.m_next)
				if (g.m_left <= b && g.m_right >= b && g.m_top <= c && g.m_bottom >= c && g.collide(a) === !0) {
					a.m_vx *= this.m_sideRevert,
					a.m_vy *= this.m_sideRevert;
					return
				}
		},
		isStatic : function () {
			return this.m_minStep === e
		},
		step : function (a) {
			var b = 0;
			if (a === 0)
				return b;
			this.m_dt = a;
			var d = this.m_radius2Sqr,
			g = this.m_invRadius2Sqr,
			h = this.m_edgeLeft,
			i = this.m_edgeTop,
			j = this.m_edgeRight,
			k = this.m_edgeBottom,
			l = this.m_linearDamping,
			m = this.m_angularDamping,
			n = this.m_minStep,
			o = 0;
			while (a >= n || (n = a) > 0) {
				b++,
				a -= n;
				for (var p = this.m_ballList; p; p = p.m_next)
					p.m_x += p.m_vx * n, p.m_y += p.m_vy * n, p.m_a += p.m_va * n, (p.m_x <= h || p.m_y <= i || p.m_x >= j || p.m_y >= k) && this.collideEdge(p);
				o = 0;
				for (var p = this.m_ballList; p; p = p.m_next) {
					var q = p.m_vx * p.m_vx + p.m_vy * p.m_vy;
					for (var r = p.m_next; r; r = r.m_next) {
						var s = p.m_x - r.m_x,
						t = p.m_y - r.m_y,
						u = s * s + t * t;
						if (u <= d) {
							var v = r.m_vx * r.m_vx + r.m_vy * r.m_vy,
							w = c / f(q > v ? q : v),
							x = s + p.m_vx * w - r.m_vx * w,
							y = t + p.m_vy * w - r.m_vy * w;
							if (x * x + y * y <= d) {
								var z = (p.m_vx * s + p.m_vy * t) * g,
								A = (r.m_vx * -s + r.m_vy * -t) * g,
								B = z + A,
								C = s * B,
								D = t * B;
								p.m_vx -= C,
								p.m_vy -= D,
								r.m_vx += C,
								r.m_vy += D,
								q = p.m_vx * p.m_vx + p.m_vy * p.m_vy,
								p.oncollide(r),
								r.oncollide(p)
							}
						}
					}
					q > o && (o = q)
				}
				n = c / f(o)
			}
			this.m_mutex = !1,
			o = 0;
			for (p = this.m_ballList; p; p = p.m_next) {
				for (var r = p.m_next; r; r = r.m_next) {
					var s = p.m_x - r.m_x,
					t = p.m_y - r.m_y,
					u = s * s + t * t;
					u <= d && (p.m_x += s * .01, p.m_y += t * .01, r.m_x -= s * .01, r.m_y -= t * .01, this.m_mutex = !0)
				}
				p.onmove(),
				p.m_x0 = p.m_x,
				p.m_y0 = p.m_y,
				p.m_vx *= l,
				p.m_vy *= l,
				p.m_va *= m,
				p.m_va < 2e-4 && p.m_va > -0.0002 && (p.m_va = 0);
				var E = p.m_vx * p.m_vx + p.m_vy * p.m_vy;
				E < .005 ? (p.m_vx = 0, p.m_vy = 0) : E > o && (o = E)
			}
			o === 0 ? this.m_minStep !== e && (this.m_minStep = e, this.onstatic()) : this.m_minStep = c / f(o);
			return b
		},
		constructor : v
	},
	a.Table = v,
	a.TableDef = u,
	a.BallDef = r,
	a.PocketDef = p,
	a.SideDef = n
}
(window), function (a, b) {
	a.onstartup = function (c) {
		var d = Math.PI * 2,
		e = Math.PI / 180,
		f = 6,
		g = f * 3,
		h = 360,
		i = 175,
		j = 26.5,
		k = 32.5,
		l = 70,
		m = i / 2,
		n = h * .7,
		o = h / 2 + j,
		p = i / 2 + k,
		q = 1e3,
		r = function (a, b, c) {
			return a < b ? b : a > c ? c : a
		},
		s = function () {},
		t = function () {};
		(function () {
			var a = [],
			b = f + 1,
			c = 3;
			s = function (d) {
				var e = Math.cos(d),
				f = Math.sin(d);
				a[0] = [e * b + -f * -c, f * b + e * -c, e * b + -f * c, f * b + e * c],
				a[1] = [e * -b + -f * -c, f * -b + e * -c, e * -b + -f * c, f * -b + e * c],
				a[2] = [e * -c + -f * b, f * -c + e * b, e * c + -f * b, f * c + e * b],
				a[3] = [e * -c + -f * -b, f * -c + e * -b, e * c + -f * -b, f * c + e * -b]
			},
			t = function (a, c, d) {
				a.beginPath(),
				a.arcScale(c, d, b, 0, 2 * Math.PI, !1),
				a.stroke()
			}
		})();
		var u = function () {},
		v = function () {},
		w = null,
		x = f,
		y = x * .8;
		(function () {
			var a = Math.sqrt,
			b = Math.asin,
			c = Math.sin,
			e = Math.abs,
			f = Math.PI / 2,
			g = Math.PI,
			h = b(y / x),
			i = c(f - h) * x;
			u = function (b, f, g, j, k, l, m) {
				var n = Math.sqrt(k * k + l * l),
				o = 0,
				p = 0;
				if (n === 0)
					b.moveToScale(f + k, g + l), b.arcScale(f + k, g + l, m, 0, d, !1);
				else {
					o = k / n,
					p = l / n;
					var q = p,
					r = -o,
					s = Math.asin(n / j),
					t = c(s + h) * j - n,
					u = n - c(s - h) * j,
					v = n - n * a(j * j - m * m) / j,
					w = (t + e(v)) * .5,
					x = (u - e(v)) * .5,
					y = m * .6,
					z = o * j,
					A = p * j,
					B = k + q * m - o * v,
					C = l + r * m - p * v,
					D = B + o * w,
					E = C + p * w,
					F = B - o * x,
					G = C - p * x,
					H = k + o * t,
					I = l + p * t,
					J = H + q * y,
					K = I + r * y,
					L = H - q * y,
					M = I - r * y,
					N = k - q * m - o * v,
					O = l - r * m - p * v,
					P = N + o * w,
					Q = O + p * w,
					R = N - o * x,
					S = O - p * x,
					T = k - o * u,
					U = l - p * u,
					V = T - q * y,
					W = U - r * y,
					X = T + q * y,
					Y = U + r * y;
					if (i <= n) {
						var Z = (j - n) / (j - i),
						$ = (j - n + v) * (.01 + .49 * Z * (2 - Z)),
						_ = m * (.6 + .06 * (1 - Z));
						b.moveToScale(f - B, g - C),
						b.bezierCurveToScale(f - D, g - E, f - J, g - K, f - H, g - I),
						b.bezierCurveToScale(f - L, g - M, f - P, g - Q, f - N, g - O),
						b.bezierCurveToScale(f - (N + o * $), g - (O + p * $), f - (z - q * _), g - (A - r * _), f - z, g - A),
						b.bezierCurveToScale(f - (z + q * _), g - (A + r * _), f - (B + o * $), g - (C + p * $), f - B, g - C),
						b.moveToScale(f + B, g + C),
						b.bezierCurveToScale(f + (B + o * $), g + (C + p * $), f + (z + q * _), g + (A + r * _), f + z, g + A),
						b.bezierCurveToScale(f + (z - q * _), g + (A - r * _), f + (N + o * $), g + (O + p * $), f + N, g + O),
						b.bezierCurveToScale(f + R, g + S, f + V, g + W, f + T, g + U),
						b.bezierCurveToScale(f + X, g + Y, f + F, g + G, f + B, g + C)
					} else
						b.moveToScale(f + B, g + C), b.bezierCurveToScale(f + D, g + E, f + J, g + K, f + H, g + I), b.bezierCurveToScale(f + L, g + M, f + P, g + Q, f + N, g + O), b.bezierCurveToScale(f + R, g + S, f + V, g + W, f + T, g + U), b.bezierCurveToScale(f + X, g + Y, f + F, g + G, f + B, g + C)
				}
			},
			v = function (d, e, h, i, j) {
				var k = a(i * i + j * j),
				l = k / d,
				m = -j / k,
				n = i / k,
				o = e * m + h * n,
				p = e * n - h * m,
				q = a(d * d - o * o),
				r = b(p / q) + l,
				s = p - c(r) * q;
				e += -n * s,
				h += m * s,
				(r + f) / g << 0 & 1 && (e = -e, h = -h);
				return {
					x : e,
					y : h
				}
			}
		})(),
		c.global.g8ball === b && (c.global.g8ball = {
				pvc : [0, 0],
				pvp : [0, 0]
			}, c.global.gStraight = {
				pvc : [0, 0],
				pvp : [0, 0]
			}, c.saveSetting());
		var z = f * 2 * 9 + 2,
		A = f * 2 + 2;
		return {
			style : [".cue { background: url('./image/cue.png') no-repeat; -transform-origin: 50% -" + f + "px; width: 9px; height: 180px; }", ".content { color: #fff; }", ".content table { width: 100%; text-align: center; border-collapse: collapse; }", ".content table tr { height: 25px; }", ".root .AudioBtn { background: url('./image/audioBtn.png') no-repeat; -background-size: 400% 100% !important; }", ".root .AudioBtn.playaudio { background-position-x: -80px; }", ".root .AudioBtn.playaudio.audiotouch { background-position-x: -120px; }", ".root .AudioBtn.stopaudio { background-position-x: -0px; }", ".root .AudioBtn.stopaudio.audiotouch { background-position-x: -40px; }", ".button { background: -!gradient(linear, left top, left bottom, from(#00699c), to(#00c9fc)); border: 1px solid #fff; -border-radius: 4px; -box-shadow: 1px 1px 4px rgba(0,0,0,.5); color: #fff; text-align: center; }", ".finger { background: url('./image/finger.png') no-repeat; width: 105px; height: 105px; }", ".prompt { font: 14px/20px 'Georgia'; left: 50%; top: 220px; margin-left: -90px !important; color: #fff; width: 180px; padding: 4px !important; -border-radius: 10px; height: 52px; text-align: center; border: 2px solid rgba(255,255,255,.9); background: rgba(0,0,0,.4); }", ".pocket { border: 1px solid rgba(219,220,200,.8); background: rgba(4,15,21,.3); -border-radius: 7px; }", ".player1_head { background: url('./image/player1.png') no-repeat; left: 46px; top: 30px; width: 30px; height: 30px; }", ".player1_head.active { background: url('./image/shadow_p.png') no-repeat, url('./image/player1.png') no-repeat; }", ".player2_head { background: url('./image/player2.png') no-repeat; right: 46px; top: 30px; width: 30px; height: 30px; }", ".player2_head.active { background: url('./image/shadow_p.png') no-repeat, url('./image/player2.png') no-repeat; }", ".computer_head { background: url('./image/computer.png') no-repeat; right: 46px; top: 30px; width: 30px; height: 30px; }", ".computer_head.active { background: url('./image/shadow_c.png') no-repeat, url('./image/computer.png') no-repeat; }", "._8ballpvc { background: url('./image/pvc.png') center no-repeat; width: 80px; height: 60px; }", "._8ballpvp { background: url('./image/pvp.png') center no-repeat; width: 80px; height: 60px; }", "._straightp { background: url('./image/p.png') center no-repeat; width: 60px; height: 60px; }", "._straightpvc { background: url('./image/pvc.png') center no-repeat; width: 80px; height: 60px; }", "._straightpvp { background: url('./image/pvp.png') center no-repeat; width: 80px; height: 60px; }"],
			storage : {
				audio : {
					audio : "./audio.mp3"
				},
				image : {
					main : "./image/main.jpg",
					player1 : "./image/player1.png",
					player2 : "./image/player2.png",
					computer : "./image/computer.png",
					finger : "./image/finger.png",
					matte : "./image/matte.png",
					cue : "./image/cue.png",
					shadow_c : "./image/shadow_c.png",
					shadow_p : "./image/shadow_p.png"
				}
			},
			object : {
				"root.load:Load" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/menu.png') no-repeat;",
				"root.load.title:Unknown" : "left: 50%; top: 30px; width: 280px; margin-left: -140px; height: 110px; background: url('./image/title.png') no-repeat;",
				"root.load.progress:Unknown" : "left: 0px; top: 200px; width: 100%; text-align: center; font: bold 20px/20px 'Georgia'; color: #00fe98;",
				"root.menu:Menu" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/menu.png') no-repeat;",
				"root.menu.title:Unknown" : "left: 50%; top: 30px; width: 280px; margin-left: -140px; height: 110px; background: url('./image/title.png') no-repeat;",
				"root.menu.start:Button" : "left: 50%; top: 142px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.menu.htp:Button" : "left: 50%; top: 178px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.menu.statistic:Button" : "left: 50%; top: 214px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.menu.rule:Button"      : "left: 50%; top: 250px; width: 0px; margin-left: -1880px; height: 0px; line-height: 26px;",
				"root.menu.audio:AudioBtn" : "left: 10px; top: " + (c.offsetTop + 5) + "px; width: 40px; height: 40px;",
				"root.statistic:Statistic" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/menu.png') no-repeat;",
				"root.statistic.title:Unknown" : "font: bold 24px/24px 'Georgia'; text-align: center; top: 40px; width: 100%; color: red; text-shadow: 2px 2px 4px rgba(0,0,0,.8); -text-stroke: 1px red; -text-fill-color: #fff;",
				"root.statistic.mode:Unknown" : "font: bold 14px/20px 'Georgia'; text-align: center; top: 70px; width: 100%; color: #00fe98; text-shadow: 1px 1px 2px rgba(0,0,0,.8);",
				"root.statistic.content:Unknown" : "left: 50%; top: 100px; width: 270px; margin-left: -135px;",
				"root.statistic.prev:Button" : "left: 50px; top: 150px; padding: 2px 4px 3px;",
				"root.statistic.next:Button" : "right: 50px; top: 150px; padding: 2px 4px 3px;",
				"root.statistic.reset:Button" : "left: 50%; top: 214px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.statistic.return:Button" : "left: 50%; top: 250px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.rule:Rule" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/menu.png') no-repeat;",
				"root.rule.title:Unknown" : "font: bold 24px/24px 'Georgia'; text-align: center; top: 40px; width: 100%; color: red; text-shadow: 2px 2px 4px rgba(0,0,0,.8); -text-stroke: 1px red; -text-fill-color: #fff;",
				"root.rule.title1:Unknown" : "font: bold 14px/20px 'Georgia'; left: 40px; top: 80px; color: #00fe98; text-shadow: 1px 1px 2px rgba(0,0,0,.8);",
				"root.rule.content1:Unknown" : "font: 14px/20px 'Georgia'; left: 40px; right: 40px; top: 110px; color: #fff; text-shadow: 0px 0px 4px rgba(0,0,0,.8);",
				"root.rule.title2:Unknown" : "font: bold 14px/20px 'Georgia'; left: 40px; top: 168px; color: #00fe98; text-shadow: 1px 1px 2px rgba(0,0,0,.8);",
				"root.rule.content2:Unknown" : "font: 14px/20px 'Georgia'; left: 40px; right: 40px; top: 198px; color: #fff; text-shadow: 0px 0px 4px rgba(0,0,0,.8);",
				"root.rule.return:Button" : "left: 50%; top: 250px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.mode:Mode" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/menu.png') no-repeat;",
				"root.mode.8ball:Unknown" : "font: bold 14px/20px 'Georgia'; width: 100%; top: 38px; color: #00fe98; text-align: center; text-shadow: 1px 1px 2px rgba(0,0,0,.8);",
				"root.mode.8ballbox:Unknown" : "top: 66px; left: 50%; width: 163px; height: 64px; margin-left: -82px; border: 2px solid rgba(219,220,200,.8); background: rgba(4,15,21,.6); -box-shadow: 2px 2px 4px rgba(0,0,0,.5); -border-radius: 7px;",
				"root.mode.8ballpvc:ModeBtn" : "top: 68px; left: 162px;",
				"root.mode.8ballpvp:ModeBtn" : "top: 68px; left: 238px;",
				"root.mode.straight:Unknown" : "font: bold 14px/20px 'Georgia'; width: 100%; top: 142px; color: #00fe98; text-align: center; text-shadow: 1px 1px 2px rgba(0,0,0,.8);",
				"root.mode.straightbox:Unknown" : "top: 170px; left: 50%; width: 220px; height: 64px; margin-left: -110px; border: 2px solid rgba(219,220,200,.8); background: rgba(4,15,21,.6); -box-shadow: 2px 2px 4px rgba(0,0,0,.5); -border-radius: 7px;",
				"root.mode.straightp:ModeBtn" : "top: 172px; left: 135px;",
				"root.mode.straightpvc:ModeBtn" : "top: 172px; left: 191px;",
				"root.mode.straightpvp:ModeBtn" : "top: 172px; left: 267px;",
				"root.mode.return:Button" : "left: 50%; top: 250px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.main:Main" : "visibility: hidden; width: 100%; height: 100%; background: url('./image/main.jpg') no-repeat;",
				"root.main.audio:AudioBtn" : "left: 10px; top: " + (c.offsetTop + 5) + "px; width: 40px; height: 40px;",
				"root.main.table:Table" : "",
				"root.main.cue:Unknown" : "visibility: hidden;",
				"root.main.player1:Unknown" : "left: 46px; top: 30px; width: 30px; height: 30px;",
				"root.main.player1pocket:Pocket" : "top: 46px; left: 82px;",
				"root.main.player2:Unknown" : "right: 46px; top: 30px; width: 30px; height: 30px;",
				"root.main.player2pocket:Pocket" : "top: 46px; right: 82px;",
				"root.main.finger:Unknown" : "",
				"root.main.prompt:Unknown" : "",
				"root.main.title:Unknown" : "left: 50%; top: 30px; width: 100px; margin-left: -50px; text-align: center; color: #fff;",
				"root.main.msg:Unknown" : "color:white;left: 50%; width: 200px; top: 120px; margin-left: -100px; height: 80px;border: 1px solid rgba(255,255,255,.5); -border-radius: 4px; background: rgba(0,0,0,.4);opacity:0;-webkit-transition:opacity .4s;text-align:center;vertical-align:middle",
				"root.main.pauseBtn:Button" : "color: #fff; right: 6px; top: 32px; width: 28px; height: 28px; line-height: 24px; font-weight: bold; font-family: Verdana;",
				"root.main.pause:Pause"
				 : "visibility: hidden; width: 100%; height: 100%;",
				"root.main.pause.frame:Unknown" : "left: 50%; width: 280px; top: 60px; margin-left: -140px; height: 200px; border: 4px solid rgba(255,255,255,.5); -border-radius: 12px; background: rgba(0,0,0,.4);",
				"root.main.pause.title:Unknown" : "font: bold 24px/24px 'Georgia'; text-shadow: 2px 2px 4px rgba(0,0,0,.8); left: 50%; -text-stroke: 1px #fff; top: 85px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px; text-align: center; color: #00ccff;",
				"root.main.pause.continue:Button" : "left: 50%; top: 130px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.main.pause.restart:Button" : "left: 50%; top: 170px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.main.pause.menu:Button" : "left: 50%; top: 210px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.main.result:Result" : "visibility: hidden; width: 100%; height: 100%;",
				"root.main.result.frame:Unknown" : "left: 50%; width: 280px; top: 60px; margin-left: -140px; height: 180px; border: 4px solid rgba(255,255,255,.5); -border-radius: 12px; background: rgba(0,0,0,.4);",
				"root.main.result.title:Unknown" : "font: bold 24px/24px 'Georgia'; text-shadow: 2px 2px 4px rgba(0,0,0,.8); left: 50%; -text-stroke: 1px #fff; top: 85px; width: 250px; margin-left: -125px; height: 28px; line-height: 26px; text-align: center; color: #00ccff;",
				"root.main.result.again:Button" : "left: 50%; top: 140px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;",
				"root.main.result.menu:Button" : "left: 50%; top: 180px; width: 160px; margin-left: -80px; height: 28px; line-height: 26px;"
			},
			"class" : {
				":Unknown" : {},
				":AudioBtn" : {
					audioState : !1,
					init : function () {
						if (c.IS_ANDROID)
							this.setVisible(!1);
						else {
							c.connect(this, "setAudio"),
							this.addClass("stopaudio");
							var a = this;
							c.musicOver = function () {
								a.setAudio.call(a, !1)
							},
							c.audioBtn = this
						}
					},
					setAudio : function (a) {
						a === !0 ? (this.audioState = !0, this.delClass("stopaudio"), this.addClass("playaudio"), c.audio.audio.play()) : (this.audioState = !1, this.delClass("playaudio"), this.addClass("stopaudio"), c.audio.audio.pause())
					},
					mousedown : function () {
						this.addClass("audiotouch")
					},
					mouseup : function () {
						this.delClass("audiotouch")
					},
					click : function () {
						c.message("setAudio", !this.audioState)
					}
				},
				":ModeBtn" : {
					init : function () {
						this.addClass("_" + this.name)
					},
					mousedown : function () {
						this.setStyle("-transform: scale(0.9);")
					},
					mouseup : function () {
						this.setStyle("-transform: scale(1);")
					},
					click : function () {
						c.setScene("main", this.name)
					}
				},
				":Button" : {
					m_disabled : !1,
					init : function () {
						switch (this.name) {
						case "start":
							this.setText(SpilGames._("Start Game"));
							break;
						case "statistic":
							this.setText(SpilGames._("Statistics"));
							break;
						case "rule":
							this.setText(SpilGames._(""));
							break;
						case "htp":
                         this.setText(SpilGames._("Instructions"));
							break;
						case "prev":
							this.setText("&lt;&lt;");
							break;
						case "next":
							this.setText("&gt;&gt;");
							break;
						case "reset":
							this.setText(SpilGames._("Reset"));
							break;
						case "return":
							this.setText(SpilGames._("Back"));
							break;
						case "continue":
							this.setText(SpilGames._("Continue"));
							break;
						case "restart":
							this.setText(SpilGames._("Replay"));
							break;
						case "menu":
							this.setText(SpilGames._("Home"));
							break;
						case "pauseBtn":
							this.setText("||");
							break;
						case "again":
							this.setText(SpilGames._("Again"))
						}
						this.addClass("button")
					},
					mousedown : function () {
						this.m_disabled === !1 && this.setStyle("-transform: scale(0.95);")
					},
					mouseup : function () {
						this.setStyle("-transform: scale(1);")
					},
					setDisabled : function (a) {
						this.m_disabled = !!a,
						this.m_disabled === !0 ? this.setStyle("background: -!gradient(linear, left top, left bottom, from(#616161), to(#b5b5b5)); color: #ccc;") : this.setStyle("background: -!gradient(linear, left top, left bottom, from(#00699c), to(#00c9fc)); color: #fff;")
					},
					click : function () {
						if (this.m_disabled !== !0)
							switch (this.name) {
							case "start":
								c.global.first !== !1 ? c.setScene("main", "straightp", !0) : c.setScene("mode");
								break;
							case "statistic":
								c.setScene("statistic");
								break;
							case "rule":
								//c.setScene("rule");
								 //window.location.href='http://m.7k7k.com/categories_1_24_4_0.html';
								break;
							case "htp":
								c.setScene("main", "straightp", !0);
								break;
							case "prev":
								this.parent.prev();
								break;
							case "next":
								this.parent.next();
								break;
							case "reset":
								this.parent.reset();
								break;
							case "return":
								c.setScene("menu");
								break;
							case "continue":
								c.setScene("main");
								break;
							case "restart":
								c.setScene("main", this.parent.parent.m_modeName);
								break;
							case "menu":
								c.setScene("menu");
								break;
							case "pauseBtn":
								c.setScene("pause");
								break;
							case "again":
								c.setScene("main", this.parent.parent.m_modeName)
							}
					}
				},
				":Load" : {
					init : function () {
						c.connect(this, "scene", "progress", "complete"),
						c.setScene("load")
					},
					progress : function (a, b) {
						this.findChild("progress").setText(parseInt(a / b * 100) + "%")
					},
					scene : function () {},
					complete : function () {
						c.setScene("menu")
					}
				},
				":Menu" : {
					init : function () {
						c.connect(this, "scene")
					},
					scene : function () {}

				},
				":Statistic" : {
					m_curMode : 0,
					m_modeEnum : ["8ball.pvc", "8ball.pvp", "straight.pvc", "straight.pvp"],
					init : function () {
						c.connect(this, "scene"),
						this.findChild("title").setText(SpilGames._("Achievements")),
						this.mode = this.findChild("mode"),
						this.mode.setText(SpilGames._("- 8 Pool -")),
						this.content = this.findChild("content"),
						this.content.addClass("content")
					},
					prev : function () {
						this.m_modeEnum[this.m_curMode - 1] !== b && (this.m_curMode -= 1, this.setStatistic(this.m_modeEnum[this.m_curMode]))
					},
					next : function () {
						this.m_modeEnum[this.m_curMode + 1] !== b && (this.m_curMode += 1, this.setStatistic(this.m_modeEnum[this.m_curMode]))
					},
					reset : function () {
						var b = this.m_modeEnum[this.m_curMode];
						switch (b) {
						case "8ball.pvc":
							if (a.confirm(SpilGames._("Reset 8 pool data!")) !== !0)
								return;
							c.global.g8ball.pvc = [0, 0];
							break;
						case "8ball.pvp":
							if (a.confirm(SpilGames._("Reset 8 pool data!")) !== !0)
								return;
							c.global.g8ball.pvp = [0, 0];
							break;
						case "straight.pvc":
							if (a.confirm(SpilGames._("Reset snooker data!")) !== !0)
								return;
							c.global.gStraight.pvc = [0, 0];
							break;
						case "straight.pvp":
							if (a.confirm(SpilGames._("Reset snooker data!")) !== !0)
								return;
							c.global.gStraight.pvp = [0, 0];
							break;
						default:
							return
						}
						c.saveSetting(),
						this.setStatistic(b)
					},
					setStatistic : function (a) {
						var b = "Player2",
						d = null;
						switch (a) {
						case "8ball.pvc":
							this.mode.setText(SpilGames._("- 8 pool -")),
							b = "Computer",
							d = c.global.g8ball.pvc;
							break;
						case "8ball.pvp":
							this.mode.setText(SpilGames._("- 8 pool -")),
							d = c.global.g8ball.pvp;
							break;
						case "straight.pvc":
							this.mode.setText(SpilGames._("- Snooker -")),
							b = "Computer",
							d = c.global.gStraight.pvc;
							break;
						case "straight.pvp":
							this.mode.setText(SpilGames._("- Snooker -")),
							d = c.global.gStraight.pvp;
							break;
						default:
							return
						}
						this.m_curMode = this.m_modeEnum.indexOf(a),
						this.content.setText(SpilGames._("<table><tr><td style='width:110px;'></td><td style='width:75px;'>Player 1</td><td style='width:75px;'>%s</td></tr><tr><td>Win</td><td>%s</td><td>%s</td></tr><tr><td>Lose</td><td>%s</td><td>%s</td></tr><tr><td>Ratio</td><td>%s%</td><td>%s%</td></tr></table>", b + "", d[0] + "", d[1] + "", d[1] + "", d[0] + "", (d[0] / (d[0] + d[1]) * 100 << 0) + "", (d[1] / (d[0] + d[1]) * 100 << 0) + "")),
						this.findChild("prev").setDisabled(this.m_curMode <= 0),
						this.findChild("next").setDisabled(this.m_curMode >= this.m_modeEnum.length - 1)
					},
					prescene : function (a) {
						a === !0 && this.setStatistic("8ball.pvc")
					},
					scene : function (a) {}

				},
				":Rule" : { 
					init : function () {  
						c.connect(this, "scene"),
						this.findChild("title").setText(SpilGames._("Game Rule")),
						this.findChild("title1").setText(SpilGames._("8 Pool:")),
						this.findChild("content1").setText(SpilGames._("Put all the ball in the hole, but to retain the last ball is black 8!")),
						this.findChild("title2").setText(SpilGames._("Snooker:")),
						this.findChild("content2").setText(SpilGames._("Try to hit the ball of '9' into the hole as the first one!"))
					},
					scene : function () {} 			
				},
				":Mode" : {
					init : function () {
						c.connect(this, "scene"),
						this.findChild("8ball").setText(SpilGames._("- 8 Pool -")),
						this.findChild("straight").setText(SpilGames._("- Snooker -"))
					},
					scene : function () {}

				},
				":Main" : {
					mainLoop : null,
					m_table : null,
					m_title : null,
					m_modeName : "",
					init : function () {
						c.connect(this, "scene"),
						this.m_table = this.findChild("table"),
						this.m_title = this.findChild("title"),
						this.m_table.m_player1 = this.m_player1 = this.findChild("player1"),
						this.m_player1pocket = this.findChild("player1pocket"),
						this.m_player1pocket.addClass("pocket"),
						this.m_table.m_player2 = this.m_player2 = this.findChild("player2"),
						this.m_player2pocket = this.findChild("player2pocket"),
						this.m_player2pocket.addClass("pocket");
						var b = this.findChild("msg");
						b.__view__.innerText = SpilGames._("������"),
						b.__view__.id = "msg",
						b.__view__.style.lineHeight = $("#msg").height() + "px",
						b.__view__.parentElement.id = "msgParent",
						a.msgDiv = b.__view__,
						b.__view__.parentElement.removeChild(b.__view__),
						a.msgDiv.addEventListener("webkitTransitionEnd", function () {
							a.msgDiv.parentElement.removeChild(a.msgDiv)
						})
					},
					setVisiblePlayer2 : function (a) {
						!!a == !0 ? (this.m_player2.setVisible(!0), this.m_player2pocket.setVisible(!0)) : (this.m_player2.setVisible(!1), this.m_player2pocket.setVisible(!1))
					},
					prescene : function (b, c, d) {
						if (b === !0) {
							switch (c) {
							case "8ballpvc":
								this.m_title.setText(SpilGames._("8 Pool")),
								this.m_player1.__view__.className = "player1_head",
								this.m_player2.__view__.className = "computer_head",
								this.setVisiblePlayer2(!0),
								this.m_table.setRule(0, "pvc");
								break;
							case "8ballpvp":
								this.m_title.setText(SpilGames._("8 Pool")),
								this.m_player1.__view__.className = "player1_head",
								this.m_player2.__view__.className = "player2_head",
								this.setVisiblePlayer2(!0),
								this.m_table.setRule(0, "pvp");
								break;
							case "straightp":
								this.m_title.setText(SpilGames._("Snooker")),
								this.m_player1.__view__.className = "player1_head",
								this.setVisiblePlayer2(!1),
								this.m_table.setRule(1, "p"),
								d === !0 && this.m_table.enterTutorials();
								break;
							case "straightpvc":
								this.m_title.setText(SpilGames._("Snooker")),
								this.m_player1.__view__.className = "player1_head",
								this.m_player2.__view__.className = "computer_head",
								this.setVisiblePlayer2(!0),
								this.m_table.setRule(1, "pvc");
								break;
							case "straightpvp":
								this.m_title.setText(SpilGames._("Snooker")),
								this.m_player1.__view__.className = "player1_head",
								this.m_player2.__view__.className = "player2_head",
								this.setVisiblePlayer2(!0),
								this.m_table.setRule(1, "pvp");
								break;
							default:
								return
							}
							this.m_modeName = c,
							a.modeName = c
						}
					},
					scene : function (a) {
						a === !0 ? (this.m_table.m_rect = this.m_table.getRect(), c.resumeTime(), this.mainLoop.resume()) : (this.mainLoop.pause(), c.pauseTime())
					}
				},
				":Table" : {
					useCanvas : !0,
					m_canvas : null,
					m_table : null,
					m_prompt : null,
					m_point : null,
					m_rect : null,
					m_gesture : null,
					m_cue : null,
					m_goalList : [],
					m_collideList : [],
					m_playMode : 0,
					m_modeExec : null,
					m_curPlayer : 1,
					m_isbusy : !1,
					m_curAI : !1,
					m_tutorialsState : 0,
					m_tutorialsHandle : 0,
					m_moveBallState : 0,
					m_moveBallError : !1,
					m_player1 : null,
					m_player1pocket : [],
					m_player2 : null,
					m_player2pocket : [],
					setRule : function (b, d) {
						this.m_playMode = b;
						switch (b) {
						case 0:
							this.m_modeExec = new Ball8Mode;
							break;
						case 1:
							this.m_modeExec = new StraightMode(d === "p" ? 1 : 2)
						}
						var e = this;
						this.m_modeExec.p1won = function () {
							a.setTimeout(function () {
								c.setScene("result", e.parent.m_modeName, 1)
							}, 0)
						},
						this.m_modeExec.p2won = function () {
							a.setTimeout(function () {
								c.setScene("result", e.parent.m_modeName, 2)
							}, 0)
						},
						this.m_modeExec.takeCueBall = function () {
							e.takeCueBall()
						},
						this.m_modeExec.takeAllBall = function () {
							e.takeAllBall()
						},
						this.m_modeExec.takePartBall = function (a) {
							e.takePartBall(a)
						},
						this.m_modeExec.p1goal = function (a) {
							var b = e.m_goalList.length;
							while (b--) {
								var c = e.m_goalList[b];
								if (c.m_userData.number === a) {
									e.m_player1pocket.push(c),
									e.m_goalList.splice(b, 1);
									return
								}
							}
						},
						this.m_modeExec.p2goal = function (a) {
							var b = e.m_goalList.length;
							while (b--) {
								var c = e.m_goalList[b];
								if (c.m_userData.number === a) {
									e.m_player2pocket.push(c),
									e.m_goalList.splice(b, 1);
									return
								}
							}
						},
						a.vs = d;
						switch (d) {
						case "pvp":
							this.m_modeExec.p1exec = function () {
								e.m_player1.addClass("active"),
								e.m_player2.delClass("active"),
								e.m_curAI = !1
							},
							this.m_modeExec.p2exec = function () {
								e.m_player1.delClass("active"),
								e.m_player2.addClass("active"),
								e.m_curAI = !1
							};
							break;
						case "pvc":
							this.m_modeExec.p1exec = function () {
								e.m_player1.addClass("active"),
								e.m_player2.delClass("active"),
								e.m_curAI = !1
							},
							this.m_modeExec.p2exec = function () {
								e.m_player1.delClass("active"),
								e.m_player2.addClass("active"),
								e.m_curAI = !0,
								e.AI(e.getBalls(this.curBalls === this.p1balls ? this.p1suit : this.p2suit))
							};
							break;
						case "p":
							this.m_modeExec.p1exec = this.m_modeExec.p2exec = function () {
								e.m_player1.addClass("active"),
								e.m_player2.delClass("active"),
								e.m_curAI = !1
							}
						}
						c.clearTimeout(this.m_tutorialsHandle),
						this.m_prompt.setVisible(!1),
						this.m_finger.setVisible(!1),
						this.makeTable(),
						a.mt = this.m_table,
						this.m_modeExec.kickoff(),
						this.m_moveBallState = 1,
						a.firstPlace = !0
					},
					ruleManager : function () {
						this.m_player1.delClass("un"),
						this.m_player2.delClass("un");
						var a = [],
						b = this.m_goalList.length;
						while (b--)
							a[b] = this.m_goalList[b].m_userData.number;
						this.m_modeExec.exec(a, this.m_collideList[0] && this.m_collideList[0].m_userData.number);
						if (this.m_goalList.length > 0) {
							var c = this.m_goalList.length,
							d = !1;
							while (c--)
								if (this.m_goalList[c].m_userData.number === 8) {
									d = !0;
									break
								}
							d !== !1
						}
						this.m_goalList.length = 0,
						this.m_collideList.length = 0,
						this.parent.m_player1pocket.drawBall(this.m_player1pocket),
						this.parent.m_player2pocket.drawBall(this.m_player2pocket)
					},
					takeCueBall : function () {
						var a = this.m_goalList.length;
						while (a--) {
							var b = this.m_goalList[a];
							if (b.m_userData.number === 0) {
								var c = b.getDef();
								c.x = 83.5,
								c.y = i / 2,
								this.m_moveBallState = 1,
								this.m_table.createBall(c),
								this.checkPutCueBall(),
								this.m_goalList.splice(a, 1)
							}
						}
					},
					takeAllBall : function () {
						var a = [],
						b = this.m_goalList.length;
						while (b--) {
							var c = this.m_goalList[b];
							this.m_goalList.splice(b, 1),
							c.m_x = j + n,
							c.m_y = k + m,
							a[a.length] = c
						}
						var d = this;
						this.putBallOn(a, function () {
							var b = a.length;
							while (b--) {
								var c = d.m_table.createBall(a[b].getDef(), d.m_table.m_ballList);
								c.m_userData.same && (c.m_userData.same.m_userData.same = c)
							}
						})
					},
					takePartBall : function (a) {
						var b = [],
						c = this.m_goalList.length,
						d = this;
						while (c--) {
							var e = this.m_goalList[c];
							a.indexOf(e.m_userData.number) > -1 && (this.m_goalList.splice(c, 1), e.m_x = j + n, e.m_y = k + m, b[b.length] = e)
						}
						this.putBallOn(b, function () {
							var a = b.length;
							while (a--) {
								var c = d.m_table.createBall(b[a].getDef(), d.m_table.m_ballList);
								c.m_userData.same && (c.m_userData.same.m_userData.same = c)
							}
						})
					},
					getBalls : function (a) {
						a = a || [];
						var b = [] || [];
						for (var c = this.m_table.m_ballList; c; c = c.m_next)
							a.indexOf(c.m_userData.number) !== -1 && (b[b.length] = c);
						return b
					},
					AI : function (a) {
						var b = this;
						if (this.m_moveBallError === !0) {
							var d = this.m_table.m_ballList;
							d.destroy(),
							this.putBallOn([d], function () {
								b.m_table.createBall(d.getDef()),
								b.checkPutCueBall(),
								b.m_moveBallError === !0 && console.log("this is a bug")
							})
						}
						var e = Date.now(),
						f = this.m_table.robots(.5, this.m_table.m_ballList, a);
						if (f !== null) {
							var g = f.contactX - f.sourceX,
							h = f.contactY - f.sourceY,
							i = Math.sqrt(g * g + h * h);
							this.mousedown(g * 1e3, h * 1e3),
							this.mouseup(!0),
							this.mousedown(1e3, 1e3),
							this.mousemove(1e3 - g / i * l, 1e3 - h / i * l),
							c.setTimeout(function () {
								b.mouseup(!0)
							}, 1e3)
						}
					},
					putBallOn : function (a, b) {
						var c = this.m_table,
						d = c.m_radius2Sqr,
						e = .1,
						f = [] || [],
						g = a.length;
						while (g--)
							f[g] = {
								x : 0,
								y : 0
							};
						for (; ; ) {
							var g = a.length,
							h = !1;
							while (g--) {
								var i = a[g],
								j = f[g];
								for (var k = c.m_ballList; k; k = k.m_next) {
									var l = k.m_x - i.m_x,
									m = k.m_y - i.m_y,
									n = l * l + m * m;
									if (n <= d) {
										n === 0 ? (l = j.x, m = j.y, n = l * l + m * m) : l * j.x + m * j.y < 0 && (l = -l, m = -m),
										j.x = l,
										j.y = m,
										n = Math.sqrt(n),
										i.m_x -= l / n,
										i.m_y -= m / n,
										h = !0;
										break
									}
								}
								var o = g;
								while (o--) {
									var k = a[o],
									l = k.m_x - i.m_x,
									m = k.m_y - i.m_y,
									n = l * l + m * m;
									n <= d && (k.m_x += l * e, k.m_y += m * e, i.m_x -= l * e, i.m_y -= m * e, h = !0)
								}
							}
							if (h === !1) {
								b && b();
								return
							}
						}
					},
					enterTutorials : function () {
						var a = this,
						b = c.getTime(),
						d = 0,
						f = this.m_finger,
						g = this.m_prompt;
						this.m_tutorialsState = 0,
						this.m_curAI = !0,
						this.m_tutorialsHandle = c.setTimeout(function () {
								var l = c.getTime() - b,
								m = 0,
								n = 0,
								o = a.m_table.m_ballList.m_x - j,
								p = a.m_table.m_ballList.m_y - k;
								switch (a.m_tutorialsState) {
								case 0:
									d === 0 ? (f.setVisible(!0), m = h / 2, n = i / 2, a.mousedown(m - o, n - p), d = 1, g.setVisible(!0), g.setText(SpilGames._("Adjust the direction of the stroke.<br /><span style='color: red;'>Tap to continue</span>"))) : (m = h / 2, n = i / 2 - Math.sin(l * .1 * e) * 20, a.mousemove(m - o, n - p));
									break;
								case 1:
									d === 1 ? (a.mousemove(h / 2 - o, i / 2 - p), a.mouseup(!0), m = h / 2, n = i / 2, a.mousedown(m - o, n - p), b = c.getTime(), d = 2, g.setText(SpilGames._("Trimming angle.<br /><span style='color: red;'>Tap to continue</span>"))) : (m = h / 2, n = i / 2 - Math.sin(l * .1 * e) * 30, a.mousemove(m - o, n - p));
									break;
								case 2:
									d === 2 ? (a.mousemove(h / 2 - o, i / 2 - p), a.mouseup(!0), m = h / 2, n = i / 2, a.mousedown(m - o, n - p), b = c.getTime(), d = 3, g.setText(SpilGames._("Aim ball<br /><span style='color: red;'>Tap to continue</span>"))) : (m = h / 2 - (Math.sin(l * .1 * e) + 1) * 80, n = i / 2, a.mousemove(m - o, n - p));
									break;
								case 3:
									a.mousemove(h / 2 - 160 - o, i / 2 - p),
									a.mouseup(!0),
									g.setVisible(!1),
									f.setVisible(!1),
									c.global.first = !1,
									c.saveSetting();
									return
								}
								f.setStyle("left: ?px; top: ?px;", c.offsetLeft + a.m_rect.left + parseInt(m) + 6, c.offsetTop + a.m_rect.top + parseInt(n) + 6),
								a.m_tutorialsHandle = c.setTimeout(arguments.callee, 16)
							}, 0)
					},
					makeTable : function () {
						this.m_canvas.clear(),
						this.m_goalList.length = 0,
						this.m_collideList.length = 0,
						this.m_curPlayer = 1,
						this.m_player1pocket = [],
						this.parent.m_player1pocket.drawBall([]),
						this.m_player2pocket = [],
						this.parent.m_player2pocket.drawBall([]),
						this.m_curAI = !1,
						this.m_moveBallState = 0,
						this.m_moveBallError = !1,
						this.m_point = null,
						this.m_isbusy = !1,
						this.m_cue.setVisible(!1);
						var a = this,
						b = new TableDef;
						b.width = h,
						b.height = i,
						b.marginWidth = j,
						b.marginHeight = k,
						b.radius = f,
						b.maxLinearVelocity = 10,
						b.linearDamping = .018,
						b.angularDamping = .018,
						b.sideRevert = 1,
						b.onstatic = function () {
							a.ruleManager()
						},
						this.m_table = new Table(b);
						var c = new PocketDef;
						c.radius = 10,
						c.x = -3,
						c.y = -4,
						this.m_table.createPocket(c),
						c.x = this.m_table.m_width + 1,
						c.y = -4,
						this.m_table.createPocket(c),
						c.x = -3,
						c.y = this.m_table.m_height + 4,
						this.m_table.createPocket(c),
						c.x = this.m_table.m_width + 1,
						c.y = this.m_table.m_height + 4,
						this.m_table.createPocket(c),
						c.x = this.m_table.m_width / 2,
						c.y = -5,
						this.m_table.createPocket(c),
						c.x = this.m_table.m_width / 2,
						c.y = this.m_table.m_height + 6,
						this.m_table.createPocket(c);
						var d = new SideDef;
						d.x = 14,
						d.y = this.m_table.m_height,
						d.vx = -10,
						d.vy = 10,
						this.m_table.createSide(d),
						d.x = -6,
						d.y = this.m_table.m_height - 6,
						d.vx = 6,
						d.vy = -7,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width - 6,
						d.y = this.m_table.m_height + 10,
						d.vx = -10,
						d.vy = -10,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width,
						d.y = this.m_table.m_height - 13,
						d.vx = 10,
						d.vy = 12,
						this.m_table.createSide(d),
						d.x = 4,
						d.y = -10,
						d.vx = 10,
						d.vy = 10,
						this.m_table.createSide(d),
						d.x = 0,
						d.y = 14,
						d.vx = -9,
						d.vy = -10,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width - 15,
						d.y = 0,
						d.vx = 10,
						d.vy = -10,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width + 10,
						d.y = 0,
						d.vx = -10,
						d.vy = 14,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 - 18,
						d.y = 0,
						d.vx = 10,
						d.vy = -10,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 + 6,
						d.y = -10,
						d.vx = 10,
						d.vy = 10,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 - 10,
						d.y = this.m_table.m_height + 7,
						d.vx = -7,
						d.vy = -7,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 + 16,
						d.y = this.m_table.m_height,
						d.vx = -6,
						d.vy = 6,
						this.m_table.createSide(d),
						d.x = 0,
						d.y = this.m_table.m_height - 13,
						d.vx = 0,
						d.vy =  - (this.m_table.m_height - 27),
						this.m_table.createSide(d),
						d.x = this.m_table.m_width,
						d.y = 14,
						d.vx = 0,
						d.vy = this.m_table.m_height - 27,
						this.m_table.createSide(d),
						d.x = 14,
						d.y = 0,
						d.vx = this.m_table.m_width / 2 - 31,
						d.vy = 0,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 + 16,
						d.y = 0,
						d.vx = this.m_table.m_width / 2 - 31,
						d.vy = 0,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width / 2 - 17,
						d.y = this.m_table.m_height,
						d.vx =  - (this.m_table.m_width / 2 - 31),
						d.vy = 0,
						this.m_table.createSide(d),
						d.x = this.m_table.m_width - 16,
						d.y = this.m_table.m_height,
						d.vx =  - (this.m_table.m_width / 2 - 32),
						d.vy = 0,
						this.m_table.createSide(d),
						function () {
							var b = new BallDef,
							c = a.m_table;
							b.userData = {
								x : 0,
								y : 0,
								flags : 0,
								number : 0,
								color : "",
								same : null
							},
							b.onmove = function () {
								if (!(this.m_userData.number <= 8)) {
									var a = this.m_x - this.m_x0,
									b = this.m_y - this.m_y0;
									if (a === 0 && b === 0)
										return;
									var c = v(f, this.m_userData.x, this.m_userData.y, a, b);
									this.m_userData.x = c.x,
									this.m_userData.y = c.y
								}
							},
							b.ongoal = function (b) {
								this.m_userData.same && (this.m_userData.same.m_userData.same = null),
								a.m_goalList[a.m_goalList.length] = this
							},
							b.onfree = function () {
								this.m_userData.same && (this.m_userData.same.m_userData.same = null)
							};
							var d = a.m_table.m_radius2 / Math.sqrt(3) - 1,
							e = d * 2 - 2;
							b.x = n,
							b.y = m,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#e09006";
							var g = c.createBall(b);
							b.x = n + e,
							b.y = m - d,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#1a4ad0";
							var h = c.createBall(b);
							b.x = n + e * 3,
							b.y = m + d,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#e22e20";
							var i = c.createBall(b);
							b.x = n + e * 4,
							b.y = m + d * 4,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#003366";
							var j = c.createBall(b);
							b.x = n + e * 4,
							b.y = m,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#ff7d49";
							var k = c.createBall(b);
							b.x = n + e * 2,
							b.y = m + d * 2,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#109259";
							var l = c.createBall(b);
							b.x = n + e * 3,
							b.y = m - d * 3,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#6d1217";
							var o = c.createBall(b);
							b.x = n + e * 2,
							b.y = m,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "black";
							var p = c.createBall(b);
							b.x = n + e,
							b.y = m + d,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#e09006";
							var q = c.createBall(b);
							b.x = n + e * 2,
							b.y = m - d * 2,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#1a4ad0";
							var r = c.createBall(b);
							b.x = n + e * 4,
							b.y = m - d * 4,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#e22e20";
							var s = c.createBall(b);
							b.x = n + e * 4,
							b.y = m - d * 2,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#003366";
							var t = c.createBall(b);
							b.x = n + e * 3,
							b.y = m - d,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#ff7d49";
							var u = c.createBall(b);
							b.x = n + e * 4,
							b.y = m + d * 2,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#109259";
							var w = c.createBall(b);
							b.x = n + e * 3,
							b.y = m + d * 3,
							b.userData.number++,
							b.userData.flags = 1 << b.userData.number,
							b.userData.color = "#6d1217";
							var x = c.createBall(b);
							g.m_userData.same = q,
							h.m_userData.same = r,
							i.m_userData.same = s,
							j.m_userData.same = t,
							k.m_userData.same = u,
							l.m_userData.same = w,
							o.m_userData.same = x,
							p.m_userData.same = null,
							q.m_userData.same = g,
							r.m_userData.same = h,
							s.m_userData.same = i,
							t.m_userData.same = j,
							u.m_userData.same = k,
							w.m_userData.same = l,
							x.m_userData.same = o;
							for (var y = c.m_ballList; y; y = y.m_next)
								y.m_userData.same && (y.m_userData.flags |= y.m_userData.same.m_userData.flags), y.m_userData.x = Math.random() > .5 ? Math.random() * 4 : -Math.random() * 4, y.m_userData.y = Math.random() > .5 ? Math.random() * 4 : -Math.random() * 4;
							b.oncollide = function (b) {
								a.m_collideList[a.m_collideList.length] = b
							},
							b.x = 83.5,
							b.y = m,
							b.userData.number = 0,
							b.userData.flags = 0,
							b.userData.color = "white",
							a.m_table.createBall(b)
						}
						()
					},
					init : function () {
						var b = this;
						this.m_cue = this.parent.findChild("cue"),
						this.m_cue.addClass("cue"),
						this.m_finger = this.parent.findChild("finger"),
						this.m_finger.addClass("finger"),
						this.m_finger.setVisible(!1),
						this.m_finger.mouseup = function () {
							b.mouseup()
						},
						this.m_prompt = this.parent.findChild("prompt"),
						this.m_prompt.addClass("prompt"),
						this.m_prompt.mouseup = function () {
							b.mouseup()
						},
						this.m_gesture = new Gesture,
						this.m_gesture.ongesture = function (d, f, g, h) {
							var i = b.m_point;
							switch (d) {
							case this.PARALLEL:
								h < x ? i.forceLength = x : i.forceLength = Math.min(x + h * .5, x + i.maxLinear);
								break;
							case this.VERTICAL:
								i.ma = -h * e * .1,
								i.vx = Math.cos(i.a + i.ma),
								i.vy = Math.sin(i.a + i.ma);
								break;
							case this.END:
								i.a += i.ma,
								i.ma = 0,
								i.vx = Math.cos(i.a),
								i.vy = Math.sin(i.a);
								if (i.forceLength > x) {
									a.firstPlace = !1,
									i.launchTime = c.getTime(),
									i.forceSize =  - (i.forceLength - x) / i.maxLinear * b.m_table.m_maxLinearVelocity,
									b.m_isbusy = !0,
									b.m_player1.addClass("un"),
									b.m_player2.addClass("un");
									return
								}
								i.forceLength = x
							}
							i.x = i.vx * (i.forceLength || x),
							i.y = i.vy * (i.forceLength || x)
						},
						this.setStyle("left: 50%; margin-left: -205px; top: 56px; -background: url('./image/table.png') no-repeat center; -background-size: 410px 240px !important"),
						this.m_canvas = this.getContext(410, 240),
						w = this.m_canvas.createRadialGradientScale(x * .3, -x * .4, 0, x * .4, x * .5, x * 1.8),
						w.addColorStop(0, "rgba(255,255,255,.4)"),
						w.addColorStop(.7, "rgba(0,0,0,.4)"),
						w.addColorStop(1, "rgba(0,0,0,.7)"),
						this.parent.mainLoop = c.mainLoop(function (a, e) {
								var h = b.m_canvas,
								i = b.m_table,
								j = i.m_radius2;
								i.step(b.m_moveBallState === 2 || b.m_moveBallError === !0 ? 0 : 2),
								h.clear(),
								b.m_moveBallState !== 0 && (h.fillStyle = b.m_moveBallError ? "rgba(255,0,0,.3)" : "rgba(0,254,152,.3)", h.beginPath(), h.arcScale(i.m_ballList.m_x, i.m_ballList.m_y, g, 0, d, !1), h.fill());
								var k = 1 / (q - j) * j;
								h.fillStyle = "rgba(0,0,0,.2)",
								h.beginPath();
								for (var l = i.m_ballList; l; l = l.m_next)
									h.moveToScale(l.m_x, l.m_y), h.arcScale(l.m_x + (l.m_x - o) * k, l.m_y + (l.m_y - p) * k, f, 0, d, !1);
								h.fill();
								if (b.m_playMode === 0 && b.m_table.isStatic() && (b.m_point ? b.m_point.launchTime === 0 : !0)) {
									var m = b.m_modeExec.curBalls === b.m_modeExec.p1balls ? b.m_modeExec.p1suit : b.m_modeExec.p2suit;
									h.strokeStyle = "white";
									for (var l = i.m_ballList; l; l = l.m_next)
										m.indexOf(l.m_userData.number) > -1 && t(h, l.m_x, l.m_y)
								}
								var n = null,
								r = 0;
								for (var l = i.m_ballList; l; l = l.m_next) {
									if (r & l.m_userData.flags)
										continue;
									h.fillStyle = l.m_userData.color,
									h.beginPath(),
									r |= l.m_userData.flags,
									h.arcScale(l.m_x, l.m_y, f, 0, d, !1);
									if (n = l.m_userData.same)
										h.moveToScale(n.m_x + f, n.m_y), h.arcScale(n.m_x, n.m_y, f, 0, d, !1);
									h.fill()
								}
								h.fillStyle = "white",
								h.beginPath();
								for (var l = i.m_ballList; l; l = l.m_next)
									l.m_userData.number > 8 && u(h, l.m_x, l.m_y, f, l.m_userData.x, l.m_userData.y, y);
								h.fill();
								var s = c.image.matte;
								for (var l = i.m_ballList; l; l = l.m_next)
									h.drawImageScale(s, l.m_x - 7.5, l.m_y - 7.5, 15, 15);
								h.setLineWidth(.5);
								if (b.m_point !== null) {
									var v = b.m_point,
									w = v.vx.toFixed(14),
									x = v.vy.toFixed(14);
									if (v.launchTime !== 0) {
										var z = (e - v.launchTime) / 150;
										z < 1 ? (v.x = v.vx * v.forceLength * (1 - z), v.y = v.vy * v.forceLength * (1 - z), b.m_cue.setTransform(x, -w, w, x, v.x.toFixed(14), v.y.toFixed(14))) : (b.m_isbusy = !1, b.m_table.m_ballList.applyImpulse(v.a, v.vx * v.forceSize, v.vy * v.forceSize), b.m_moveBallState = 0, b.m_point = null, b.m_cue.setVisible(!1))
									} else {
										b.m_cue.setTransform(x, -w, w, x, v.x.toFixed(10), v.y.toFixed(10));
										var A = i.boost(i.m_ballList, -v.vx, -v.vy);
										A.contactTarget !== null && (h.strokeStyle = A.nearestDistPocketSqr === 0 ? "red" : "white", h.beginPath(), A.bounceX !== null && (h.moveToScale(A.contactX, A.contactY), h.lineToScale(A.contactX + A.bounceX * 2, A.contactY + A.bounceY * 2), h.moveToScale(A.contactTarget.m_x, A.contactTarget.m_y), h.lineToScale(A.contactTarget.m_x + A.impactX * 2, A.contactTarget.m_y + A.impactY * 2)), h.moveToScale(A.sourceX, A.sourceY), h.lineToScale(A.contactX, A.contactY), h.moveToScale(A.contactX + f, A.contactY), h.arcScale(A.contactX, A.contactY, f, 0, d, !1), h.stroke())
									}
								}
								h.setLineWidth(1)
							}, 60)
					},
					m_diffpoint : null,
					checkPutCueBall : function () {
						var a = this.m_table.m_ballList;
						this.m_moveBallError = !1;
						for (var b = a.m_next; b; b = b.m_next) {
							var c = b.m_x - a.m_x,
							d = b.m_y - a.m_y;
							if (c * c + d * d <= this.m_table.m_radius2Sqr) {
								this.m_moveBallError = !0;
								break
							}
						}
					},
					mousedown : function (a, d) {
						if (this.m_curAI !== !0 || a !== b) {
							if (!this.m_table.isStatic() || this.m_isbusy === !0)
								return;
							if (a === b) {
								var e = this.getTouchPoint();
								a = e.left - this.m_rect.left - this.m_table.m_ballList.m_x,
								d = e.top - this.m_rect.top - this.m_table.m_ballList.m_y
							}
							if (this.m_moveBallState === 1 && a * a + d * d <= g * g) {
								this.m_moveBallState = 2,
								this.m_diffpoint = {
									x : a,
									y : d
								},
								this.m_point = null,
								this.m_cue.setVisible(!1);
								return
							}
							if (this.m_moveBallError === !0)
								return;
							if (this.m_point === null) {
								var f = this.m_point = {
									first : !0,
									a : Math.atan2(-d, -a),
									ma : 0,
									x : 0,
									y : 0,
									vx : 0,
									vy : 0,
									launchTime : 0,
									forceSize : 0,
									forceLength : x,
									maxLinear : l
								};
								f.vx = Math.cos(f.a),
								f.vy = Math.sin(f.a),
								f.x = f.vx * x,
								f.y = f.vy * x;
								var h = f.vx.toFixed(14),
								i = f.vy.toFixed(14),
								j = this;
								setTimeout(function () {
									j.m_cue.setStyle("left: ?px; top: ?px;", j.m_table.m_ballList.m_x + j.m_rect.left + c.offsetLeft - c.image.cue.width / 2, j.m_table.m_ballList.m_y + j.m_rect.top + c.offsetTop + x + 1),
									j.m_cue.setVisible(!0)
								}, 0),
								this.m_cue.setTransform(i, -h, h, i, f.x.toFixed(10), f.y.toFixed(10))
							} else
								this.m_point.first = !1, this.m_gesture.start(this.m_point.vx, this.m_point.vy, a, d)
						}
					},
					mousemove : function (c, d) {
						if (this.m_curAI !== !0 || c !== b) {
							if (this.m_moveBallState === 2) {
								if (a.firstPlace === !0) {
									var e = this.getTouchPoint(),
									f = this.m_table.m_ballList;
									f.m_y = r(e.top - this.m_rect.top - this.m_diffpoint.y, this.m_table.m_edgeTop + .5, this.m_table.m_edgeBottom - .5),
									this.checkPutCueBall();
									return
								}
								var e = this.getTouchPoint(),
								f = this.m_table.m_ballList;
								f.m_x = r(e.left - this.m_rect.left - this.m_diffpoint.x, this.m_table.m_edgeLeft + .5, this.m_table.m_edgeRight - .5),
								f.m_y = r(e.top - this.m_rect.top - this.m_diffpoint.y, this.m_table.m_edgeTop + .5, this.m_table.m_edgeBottom - .5),
								this.checkPutCueBall();
								return
							}
							if (this.m_point === null || this.m_isbusy === !0)
								return;
							if (c === b) {
								var e = this.getTouchPoint();
								c = e.left - this.m_rect.left - this.m_table.m_ballList.m_x,
								d = e.top - this.m_rect.top - this.m_table.m_ballList.m_y
							}
							this.m_point.first === !0 ? (this.m_point.a = Math.atan2(-d, -c), this.m_point.vx = Math.cos(this.m_point.a), this.m_point.vy = Math.sin(this.m_point.a), this.m_point.x = this.m_point.vx * x, this.m_point.y = this.m_point.vy * x) : this.m_gesture.move(c, d)
						}
					},
					mouseup : function (a) {
						this.m_curAI === !0 && a !== !0 ? this.m_tutorialsState++ : this.m_moveBallState === 2 ? this.m_moveBallState = 1 : this.m_point !== null && this.m_isbusy === !1 && this.m_gesture.end()
					}
				},
				":Pocket" : {
					useCanvas : !0,
					m_canvas : null,
					init : function () {
						this.m_canvas = this.getContext(z, A)
					},
					drawBall : function (a) {
						var b = this.m_canvas;
						b.clear();
						var c = a.length,
						e = f + 1,
						g = f + 1;
						while (c--) {
							var h = a[c];
							b.fillStyle = h.m_userData.color,
							b.beginPath(),
							b.arcScale(e, g, f, 0, d, !1),
							b.fill(),
							h.m_userData.number > 8 && (b.fillStyle = "white", b.beginPath(), u(b, e, g, f, h.m_userData.x, h.m_userData.y, y), b.fill()),
							b.fillStyle = w,
							b.translateScale(e, g),
							b.beginPath(),
							b.arcScale(0, 0, f + .1, 0, d, !1),
							b.fill(),
							b.translateScale(-e, -g),
							b.fillStyle = "black",
							e += f * 2 + 1
						}
					}
				},
				":Pause" : {
					init : function () {
						c.connect(this, "scene"),
						this.findChild("title").setText(SpilGames._("Pause"))
					},
					scene : function () {}

				},
				":Result" : {
					init : function () {
						c.connect(this, "scene"),
						this.m_title = this.findChild("title")
					},
					prescene : function (a, b, d) {
						if (a === !0) {
							switch (b) {
							case "8ballpvc":
								c.global.g8ball.pvc[d - 1]++,
								this.m_title.setText(d === 1 ? SpilGames._("You Win") : SpilGames._("You Lose"));
                         hello2gameAPI("^^");
								break;
							case "8ballpvp":
								c.global.g8ball.pvp[d - 1]++,
								this.m_title.setText(d === 1 ? SpilGames._("Player 1 Win") : SpilGames._("Player 2 Win"));
                         hello2gameAPI("^^");
								break;
							case "straightp":
								this.m_title.setText(SpilGames._("Well Done!"));
                         hello2gameAPI("^^");
								break;
							case "straightpvc":
								c.global.gStraight.pvc[d - 1]++,
								this.m_title.setText(d === 1 ? SpilGames._("You Win") : SpilGames._("You Lose"));
                         hello2gameAPI("^^");
								break;
							case "straightpvp":
								c.global.gStraight.pvp[d - 1]++,
								this.m_title.setText(d === 1 ? SpilGames._("Player 1 Win") : SpilGames._("Player 2 Win"));
                         hello2gameAPI("^^");
								break;
							default:
								return
							}
							c.saveSetting()
						}
					},
					scene : function () {}

				}
			}
		}
	},
	a.onstartup.config = {
		orientation : "landscape",
		namespace : "BilliardsMaster",
		cacheManifest : ["./image/menu.png", "./image/title.png"]
	}
}
(window)
