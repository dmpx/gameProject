function Stanislic_SendInfo(n) {
    famobi.log("Stanislic Send " + n)
    // g_an("set", "page", "/" + n), g_an("set", "title", "" + n), g_an("send", "pageview"), g_an("send", "event", "GameEvent", "" + n)
}

function Stanislic_Start() {
    Stanislic_SendInfo("Main_Page")
}! function(t) {
    "use strict";
    var n = {};
    "undefined" == typeof exports ? "function" == typeof define && "object" == typeof define.amd && define.amd ? (n.exports = {}, define(function() {
            return n.exports
        })) : n.exports = "undefined" != typeof window ? window : t : n.exports = exports,
        function(t) {
            if (!n) var n = 1e-6;
            if (!r) var r = "undefined" != typeof Float32Array ? Float32Array : Array;
            if (!e) var e = Math.random;
            var a = {};
            a.setMatrixArrayType = function(t) {
                r = t
            }, "undefined" != typeof t && (t.glMatrix = a);
            var u = Math.PI / 180;
            a.toRadian = function(t) {
                return t * u
            };
            var o = {};
            o.create = function() {
                var t = new r(2);
                return t[0] = 0, t[1] = 0, t
            }, o.clone = function(t) {
                var n = new r(2);
                return n[0] = t[0], n[1] = t[1], n
            }, o.fromValues = function(t, n) {
                var e = new r(2);
                return e[0] = t, e[1] = n, e
            }, o.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t
            }, o.set = function(t, n, r) {
                return t[0] = n, t[1] = r, t
            }, o.add = function(t, n, r) {
                return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t
            }, o.subtract = function(t, n, r) {
                return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t
            }, o.sub = o.subtract, o.multiply = function(t, n, r) {
                return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t
            }, o.mul = o.multiply, o.divide = function(t, n, r) {
                return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t
            }, o.div = o.divide, o.min = function(t, n, r) {
                return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t
            }, o.max = function(t, n, r) {
                return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t
            }, o.scale = function(t, n, r) {
                return t[0] = n[0] * r, t[1] = n[1] * r, t
            }, o.scaleAndAdd = function(t, n, r, e) {
                return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t
            }, o.distance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1];
                return Math.sqrt(r * r + e * e)
            }, o.dist = o.distance, o.squaredDistance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1];
                return r * r + e * e
            }, o.sqrDist = o.squaredDistance, o.length = function(t) {
                var n = t[0],
                    r = t[1];
                return Math.sqrt(n * n + r * r)
            }, o.len = o.length, o.squaredLength = function(t) {
                var n = t[0],
                    r = t[1];
                return n * n + r * r
            }, o.sqrLen = o.squaredLength, o.negate = function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t
            }, o.normalize = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = r * r + e * e;
                return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n[0] * a, t[1] = n[1] * a), t
            }, o.dot = function(t, n) {
                return t[0] * n[0] + t[1] * n[1]
            }, o.cross = function(t, n, r) {
                var e = n[0] * r[1] - n[1] * r[0];
                return t[0] = t[1] = 0, t[2] = e, t
            }, o.lerp = function(t, n, r, e) {
                var a = n[0],
                    u = n[1];
                return t[0] = a + e * (r[0] - a), t[1] = u + e * (r[1] - u), t
            }, o.random = function(t, n) {
                n = n || 1;
                var r = 2 * e() * Math.PI;
                return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t
            }, o.transformMat2 = function(t, n, r) {
                var e = n[0],
                    a = n[1];
                return t[0] = r[0] * e + r[2] * a, t[1] = r[1] * e + r[3] * a, t
            }, o.transformMat2d = function(t, n, r) {
                var e = n[0],
                    a = n[1];
                return t[0] = r[0] * e + r[2] * a + r[4], t[1] = r[1] * e + r[3] * a + r[5], t
            }, o.transformMat3 = function(t, n, r) {
                var e = n[0],
                    a = n[1];
                return t[0] = r[0] * e + r[3] * a + r[6], t[1] = r[1] * e + r[4] * a + r[7], t
            }, o.transformMat4 = function(t, n, r) {
                var e = n[0],
                    a = n[1];
                return t[0] = r[0] * e + r[4] * a + r[12], t[1] = r[1] * e + r[5] * a + r[13], t
            }, o.forEach = function() {
                var t = o.create();
                return function(n, r, e, a, u, o) {
                    var i, c;
                    for (r || (r = 2), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) t[0] = n[i], t[1] = n[i + 1], u(t, t, o), n[i] = t[0], n[i + 1] = t[1];
                    return n
                }
            }(), o.str = function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            }, "undefined" != typeof t && (t.vec2 = o);
            var i = {};
            i.create = function() {
                var t = new r(3);
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            }, i.clone = function(t) {
                var n = new r(3);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
            }, i.fromValues = function(t, n, e) {
                var a = new r(3);
                return a[0] = t, a[1] = n, a[2] = e, a
            }, i.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
            }, i.set = function(t, n, r, e) {
                return t[0] = n, t[1] = r, t[2] = e, t
            }, i.add = function(t, n, r) {
                return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t
            }, i.subtract = function(t, n, r) {
                return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t
            }, i.sub = i.subtract, i.multiply = function(t, n, r) {
                return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t
            }, i.mul = i.multiply, i.divide = function(t, n, r) {
                return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t
            }, i.div = i.divide, i.min = function(t, n, r) {
                return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t
            }, i.max = function(t, n, r) {
                return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t
            }, i.scale = function(t, n, r) {
                return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t
            }, i.scaleAndAdd = function(t, n, r, e) {
                return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t[2] = n[2] + r[2] * e, t
            }, i.distance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1],
                    a = n[2] - t[2];
                return Math.sqrt(r * r + e * e + a * a)
            }, i.dist = i.distance, i.squaredDistance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1],
                    a = n[2] - t[2];
                return r * r + e * e + a * a
            }, i.sqrDist = i.squaredDistance, i.length = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2];
                return Math.sqrt(n * n + r * r + e * e)
            }, i.len = i.length, i.squaredLength = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2];
                return n * n + r * r + e * e
            }, i.sqrLen = i.squaredLength, i.negate = function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
            }, i.normalize = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = r * r + e * e + a * a;
                return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u), t
            }, i.dot = function(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }, i.cross = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = r[0],
                    i = r[1],
                    c = r[2];
                return t[0] = a * c - u * i, t[1] = u * o - e * c, t[2] = e * i - a * o, t
            }, i.lerp = function(t, n, r, e) {
                var a = n[0],
                    u = n[1],
                    o = n[2];
                return t[0] = a + e * (r[0] - a), t[1] = u + e * (r[1] - u), t[2] = o + e * (r[2] - o), t
            }, i.random = function(t, n) {
                n = n || 1;
                var r = 2 * e() * Math.PI,
                    a = 2 * e() - 1,
                    u = Math.sqrt(1 - a * a) * n;
                return t[0] = Math.cos(r) * u, t[1] = Math.sin(r) * u, t[2] = a * n, t
            }, i.transformMat4 = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2];
                return t[0] = r[0] * e + r[4] * a + r[8] * u + r[12], t[1] = r[1] * e + r[5] * a + r[9] * u + r[13], t[2] = r[2] * e + r[6] * a + r[10] * u + r[14], t
            }, i.transformMat3 = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2];
                return t[0] = e * r[0] + a * r[3] + u * r[6], t[1] = e * r[1] + a * r[4] + u * r[7], t[2] = e * r[2] + a * r[5] + u * r[8], t
            }, i.transformQuat = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = r[0],
                    i = r[1],
                    c = r[2],
                    f = r[3],
                    s = f * e + i * u - c * a,
                    h = f * a + c * e - o * u,
                    v = f * u + o * a - i * e,
                    M = -o * e - i * a - c * u;
                return t[0] = s * f + M * -o + h * -c - v * -i, t[1] = h * f + M * -i + v * -o - s * -c, t[2] = v * f + M * -c + s * -i - h * -o, t
            }, i.rotateX = function(t, n, r, e) {
                var a = [],
                    u = [];
                return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], u[0] = a[0], u[1] = a[1] * Math.cos(e) - a[2] * Math.sin(e), u[2] = a[1] * Math.sin(e) + a[2] * Math.cos(e), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
            }, i.rotateY = function(t, n, r, e) {
                var a = [],
                    u = [];
                return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], u[0] = a[2] * Math.sin(e) + a[0] * Math.cos(e), u[1] = a[1], u[2] = a[2] * Math.cos(e) - a[0] * Math.sin(e), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
            }, i.rotateZ = function(t, n, r, e) {
                var a = [],
                    u = [];
                return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], u[0] = a[0] * Math.cos(e) - a[1] * Math.sin(e), u[1] = a[0] * Math.sin(e) + a[1] * Math.cos(e), u[2] = a[2], t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
            }, i.forEach = function() {
                var t = i.create();
                return function(n, r, e, a, u, o) {
                    var i, c;
                    for (r || (r = 3), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
                    return n
                }
            }(), i.str = function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }, "undefined" != typeof t && (t.vec3 = i);
            var c = {};
            c.create = function() {
                var t = new r(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            }, c.clone = function(t) {
                var n = new r(4);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
            }, c.fromValues = function(t, n, e, a) {
                var u = new r(4);
                return u[0] = t, u[1] = n, u[2] = e, u[3] = a, u
            }, c.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
            }, c.set = function(t, n, r, e, a) {
                return t[0] = n, t[1] = r, t[2] = e, t[3] = a, t
            }, c.add = function(t, n, r) {
                return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t
            }, c.subtract = function(t, n, r) {
                return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t
            }, c.sub = c.subtract, c.multiply = function(t, n, r) {
                return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t
            }, c.mul = c.multiply, c.divide = function(t, n, r) {
                return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t
            }, c.div = c.divide, c.min = function(t, n, r) {
                return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t
            }, c.max = function(t, n, r) {
                return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t
            }, c.scale = function(t, n, r) {
                return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t
            }, c.scaleAndAdd = function(t, n, r, e) {
                return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t[2] = n[2] + r[2] * e, t[3] = n[3] + r[3] * e, t
            }, c.distance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1],
                    a = n[2] - t[2],
                    u = n[3] - t[3];
                return Math.sqrt(r * r + e * e + a * a + u * u)
            }, c.dist = c.distance, c.squaredDistance = function(t, n) {
                var r = n[0] - t[0],
                    e = n[1] - t[1],
                    a = n[2] - t[2],
                    u = n[3] - t[3];
                return r * r + e * e + a * a + u * u
            }, c.sqrDist = c.squaredDistance, c.length = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2],
                    a = t[3];
                return Math.sqrt(n * n + r * r + e * e + a * a)
            }, c.len = c.length, c.squaredLength = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2],
                    a = t[3];
                return n * n + r * r + e * e + a * a
            }, c.sqrLen = c.squaredLength, c.negate = function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
            }, c.normalize = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = r * r + e * e + a * a + u * u;
                return o > 0 && (o = 1 / Math.sqrt(o), t[0] = n[0] * o, t[1] = n[1] * o, t[2] = n[2] * o, t[3] = n[3] * o), t
            }, c.dot = function(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
            }, c.lerp = function(t, n, r, e) {
                var a = n[0],
                    u = n[1],
                    o = n[2],
                    i = n[3];
                return t[0] = a + e * (r[0] - a), t[1] = u + e * (r[1] - u), t[2] = o + e * (r[2] - o), t[3] = i + e * (r[3] - i), t
            }, c.random = function(t, n) {
                return n = n || 1, t[0] = e(), t[1] = e(), t[2] = e(), t[3] = e(), c.normalize(t, t), c.scale(t, t, n), t
            }, c.transformMat4 = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3];
                return t[0] = r[0] * e + r[4] * a + r[8] * u + r[12] * o, t[1] = r[1] * e + r[5] * a + r[9] * u + r[13] * o, t[2] = r[2] * e + r[6] * a + r[10] * u + r[14] * o, t[3] = r[3] * e + r[7] * a + r[11] * u + r[15] * o, t
            }, c.transformQuat = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = r[0],
                    i = r[1],
                    c = r[2],
                    f = r[3],
                    s = f * e + i * u - c * a,
                    h = f * a + c * e - o * u,
                    v = f * u + o * a - i * e,
                    M = -o * e - i * a - c * u;
                return t[0] = s * f + M * -o + h * -c - v * -i, t[1] = h * f + M * -i + v * -o - s * -c, t[2] = v * f + M * -c + s * -i - h * -o, t
            }, c.forEach = function() {
                var t = c.create();
                return function(n, r, e, a, u, o) {
                    var i, c;
                    for (r || (r = 4), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
                    return n
                }
            }(), c.str = function(t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, "undefined" != typeof t && (t.vec4 = c);
            var f = {};
            f.create = function() {
                var t = new r(4);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, f.clone = function(t) {
                var n = new r(4);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
            }, f.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
            }, f.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, f.transpose = function(t, n) {
                if (t === n) {
                    var r = n[1];
                    t[1] = n[2], t[2] = r
                } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
                return t
            }, f.invert = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = r * u - a * e;
                return o ? (o = 1 / o, t[0] = u * o, t[1] = -e * o, t[2] = -a * o, t[3] = r * o, t) : null
            }, f.adjoint = function(t, n) {
                var r = n[0];
                return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t
            }, f.determinant = function(t) {
                return t[0] * t[3] - t[2] * t[1]
            }, f.multiply = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = r[0],
                    c = r[1],
                    f = r[2],
                    s = r[3];
                return t[0] = e * i + u * c, t[1] = a * i + o * c, t[2] = e * f + u * s, t[3] = a * f + o * s, t
            }, f.mul = f.multiply, f.rotate = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = Math.sin(r),
                    c = Math.cos(r);
                return t[0] = e * c + u * i, t[1] = a * c + o * i, t[2] = e * -i + u * c, t[3] = a * -i + o * c, t
            }, f.scale = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = r[0],
                    c = r[1];
                return t[0] = e * i, t[1] = a * i, t[2] = u * c, t[3] = o * c, t
            }, f.str = function(t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, f.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
            }, f.LDU = function(t, n, r, e) {
                return t[2] = e[2] / e[0], r[0] = e[0], r[1] = e[1], r[3] = e[3] - t[2] * r[1], [t, n, r]
            }, "undefined" != typeof t && (t.mat2 = f);
            var s = {};
            s.create = function() {
                var t = new r(6);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, s.clone = function(t) {
                var n = new r(6);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
            }, s.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
            }, s.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, s.invert = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = r * u - e * a;
                return c ? (c = 1 / c, t[0] = u * c, t[1] = -e * c, t[2] = -a * c, t[3] = r * c, t[4] = (a * i - u * o) * c, t[5] = (e * o - r * i) * c, t) : null
            }, s.determinant = function(t) {
                return t[0] * t[3] - t[1] * t[2]
            }, s.multiply = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = r[0],
                    s = r[1],
                    h = r[2],
                    v = r[3],
                    M = r[4],
                    l = r[5];
                return t[0] = e * f + u * s, t[1] = a * f + o * s, t[2] = e * h + u * v, t[3] = a * h + o * v, t[4] = e * M + u * l + i, t[5] = a * M + o * l + c, t
            }, s.mul = s.multiply, s.rotate = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = Math.sin(r),
                    s = Math.cos(r);
                return t[0] = e * s + u * f, t[1] = a * s + o * f, t[2] = e * -f + u * s, t[3] = a * -f + o * s, t[4] = i, t[5] = c, t
            }, s.scale = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = r[0],
                    s = r[1];
                return t[0] = e * f, t[1] = a * f, t[2] = u * s, t[3] = o * s, t[4] = i, t[5] = c, t
            }, s.translate = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = r[0],
                    s = r[1];
                return t[0] = e, t[1] = a, t[2] = u, t[3] = o, t[4] = e * f + u * s + i, t[5] = a * f + o * s + c, t
            }, s.str = function(t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            }, s.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
            }, "undefined" != typeof t && (t.mat2d = s);
            var h = {};
            h.create = function() {
                var t = new r(9);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, h.fromMat4 = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
            }, h.clone = function(t) {
                var n = new r(9);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
            }, h.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
            }, h.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, h.transpose = function(t, n) {
                if (t === n) {
                    var r = n[1],
                        e = n[2],
                        a = n[5];
                    t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = e, t[7] = a
                } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
                return t
            }, h.invert = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    f = n[7],
                    s = n[8],
                    h = s * o - i * f,
                    v = -s * u + i * c,
                    M = f * u - o * c,
                    l = r * h + e * v + a * M;
                return l ? (l = 1 / l, t[0] = h * l, t[1] = (-s * e + a * f) * l, t[2] = (i * e - a * o) * l, t[3] = v * l, t[4] = (s * r - a * c) * l, t[5] = (-i * r + a * u) * l, t[6] = M * l, t[7] = (-f * r + e * c) * l, t[8] = (o * r - e * u) * l, t) : null
            }, h.adjoint = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    f = n[7],
                    s = n[8];
                return t[0] = o * s - i * f, t[1] = a * f - e * s, t[2] = e * i - a * o, t[3] = i * c - u * s, t[4] = r * s - a * c, t[5] = a * u - r * i, t[6] = u * f - o * c, t[7] = e * c - r * f, t[8] = r * o - e * u, t
            }, h.determinant = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2],
                    a = t[3],
                    u = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    f = t[8];
                return n * (f * u - o * c) + r * (-f * a + o * i) + e * (c * a - u * i)
            }, h.multiply = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = n[6],
                    s = n[7],
                    h = n[8],
                    v = r[0],
                    M = r[1],
                    l = r[2],
                    d = r[3],
                    m = r[4],
                    p = r[5],
                    w = r[6],
                    y = r[7],
                    q = r[8];
                return t[0] = v * e + M * o + l * f, t[1] = v * a + M * i + l * s, t[2] = v * u + M * c + l * h, t[3] = d * e + m * o + p * f, t[4] = d * a + m * i + p * s, t[5] = d * u + m * c + p * h, t[6] = w * e + y * o + q * f, t[7] = w * a + y * i + q * s, t[8] = w * u + y * c + q * h, t
            }, h.mul = h.multiply, h.translate = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = n[6],
                    s = n[7],
                    h = n[8],
                    v = r[0],
                    M = r[1];
                return t[0] = e, t[1] = a, t[2] = u, t[3] = o, t[4] = i, t[5] = c, t[6] = v * e + M * o + f, t[7] = v * a + M * i + s, t[8] = v * u + M * c + h, t
            }, h.rotate = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = n[6],
                    s = n[7],
                    h = n[8],
                    v = Math.sin(r),
                    M = Math.cos(r);
                return t[0] = M * e + v * o, t[1] = M * a + v * i, t[2] = M * u + v * c, t[3] = M * o - v * e, t[4] = M * i - v * a, t[5] = M * c - v * u, t[6] = f, t[7] = s, t[8] = h, t
            }, h.scale = function(t, n, r) {
                var e = r[0],
                    a = r[1];
                return t[0] = e * n[0], t[1] = e * n[1], t[2] = e * n[2], t[3] = a * n[3], t[4] = a * n[4], t[5] = a * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
            }, h.fromMat2d = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
            }, h.fromQuat = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = r + r,
                    i = e + e,
                    c = a + a,
                    f = r * o,
                    s = e * o,
                    h = e * i,
                    v = a * o,
                    M = a * i,
                    l = a * c,
                    d = u * o,
                    m = u * i,
                    p = u * c;
                return t[0] = 1 - h - l, t[3] = s - p, t[6] = v + m, t[1] = s + p, t[4] = 1 - f - l, t[7] = M - d, t[2] = v - m, t[5] = M + d, t[8] = 1 - f - h, t
            }, h.normalFromMat4 = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    f = n[7],
                    s = n[8],
                    h = n[9],
                    v = n[10],
                    M = n[11],
                    l = n[12],
                    d = n[13],
                    m = n[14],
                    p = n[15],
                    w = r * i - e * o,
                    y = r * c - a * o,
                    q = r * f - u * o,
                    g = e * c - a * i,
                    x = e * f - u * i,
                    b = a * f - u * c,
                    A = s * d - h * l,
                    L = s * m - v * l,
                    D = s * p - M * l,
                    z = h * m - v * d,
                    V = h * p - M * d,
                    j = v * p - M * m,
                    I = w * j - y * V + q * z + g * D - x * L + b * A;
                return I ? (I = 1 / I, t[0] = (i * j - c * V + f * z) * I, t[1] = (c * D - o * j - f * L) * I, t[2] = (o * V - i * D + f * A) * I, t[3] = (a * V - e * j - u * z) * I, t[4] = (r * j - a * D + u * L) * I, t[5] = (e * D - r * V - u * A) * I, t[6] = (d * b - m * x + p * g) * I, t[7] = (m * q - l * b - p * y) * I, t[8] = (l * x - d * q + p * w) * I, t) : null
            }, h.str = function(t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            }, h.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
            }, "undefined" != typeof t && (t.mat3 = h);
            var v = {};
            v.create = function() {
                var t = new r(16);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, v.clone = function(t) {
                var n = new r(16);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
            }, v.copy = function(t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
            }, v.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, v.transpose = function(t, n) {
                if (t === n) {
                    var r = n[1],
                        e = n[2],
                        a = n[3],
                        u = n[6],
                        o = n[7],
                        i = n[11];
                    t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = e, t[9] = u, t[11] = n[14], t[12] = a, t[13] = o, t[14] = i
                } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
                return t
            }, v.invert = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    f = n[7],
                    s = n[8],
                    h = n[9],
                    v = n[10],
                    M = n[11],
                    l = n[12],
                    d = n[13],
                    m = n[14],
                    p = n[15],
                    w = r * i - e * o,
                    y = r * c - a * o,
                    q = r * f - u * o,
                    g = e * c - a * i,
                    x = e * f - u * i,
                    b = a * f - u * c,
                    A = s * d - h * l,
                    L = s * m - v * l,
                    D = s * p - M * l,
                    z = h * m - v * d,
                    V = h * p - M * d,
                    j = v * p - M * m,
                    I = w * j - y * V + q * z + g * D - x * L + b * A;
                return I ? (I = 1 / I, t[0] = (i * j - c * V + f * z) * I, t[1] = (a * V - e * j - u * z) * I, t[2] = (d * b - m * x + p * g) * I, t[3] = (v * x - h * b - M * g) * I, t[4] = (c * D - o * j - f * L) * I, t[5] = (r * j - a * D + u * L) * I, t[6] = (m * q - l * b - p * y) * I, t[7] = (s * b - v * q + M * y) * I, t[8] = (o * V - i * D + f * A) * I, t[9] = (e * D - r * V - u * A) * I, t[10] = (l * x - d * q + p * w) * I, t[11] = (h * q - s * x - M * w) * I, t[12] = (i * L - o * z - c * A) * I, t[13] = (r * z - e * L + a * A) * I, t[14] = (d * y - l * g - m * w) * I, t[15] = (s * g - h * y + v * w) * I, t) : null
            }, v.adjoint = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    f = n[7],
                    s = n[8],
                    h = n[9],
                    v = n[10],
                    M = n[11],
                    l = n[12],
                    d = n[13],
                    m = n[14],
                    p = n[15];
                return t[0] = i * (v * p - M * m) - h * (c * p - f * m) + d * (c * M - f * v), t[1] = -(e * (v * p - M * m) - h * (a * p - u * m) + d * (a * M - u * v)), t[2] = e * (c * p - f * m) - i * (a * p - u * m) + d * (a * f - u * c), t[3] = -(e * (c * M - f * v) - i * (a * M - u * v) + h * (a * f - u * c)), t[4] = -(o * (v * p - M * m) - s * (c * p - f * m) + l * (c * M - f * v)), t[5] = r * (v * p - M * m) - s * (a * p - u * m) + l * (a * M - u * v), t[6] = -(r * (c * p - f * m) - o * (a * p - u * m) + l * (a * f - u * c)), t[7] = r * (c * M - f * v) - o * (a * M - u * v) + s * (a * f - u * c), t[8] = o * (h * p - M * d) - s * (i * p - f * d) + l * (i * M - f * h), t[9] = -(r * (h * p - M * d) - s * (e * p - u * d) + l * (e * M - u * h)), t[10] = r * (i * p - f * d) - o * (e * p - u * d) + l * (e * f - u * i), t[11] = -(r * (i * M - f * h) - o * (e * M - u * h) + s * (e * f - u * i)), t[12] = -(o * (h * m - v * d) - s * (i * m - c * d) + l * (i * v - c * h)), t[13] = r * (h * m - v * d) - s * (e * m - a * d) + l * (e * v - a * h), t[14] = -(r * (i * m - c * d) - o * (e * m - a * d) + l * (e * c - a * i)), t[15] = r * (i * v - c * h) - o * (e * v - a * h) + s * (e * c - a * i), t
            }, v.determinant = function(t) {
                var n = t[0],
                    r = t[1],
                    e = t[2],
                    a = t[3],
                    u = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    f = t[8],
                    s = t[9],
                    h = t[10],
                    v = t[11],
                    M = t[12],
                    l = t[13],
                    d = t[14],
                    m = t[15],
                    p = n * o - r * u,
                    w = n * i - e * u,
                    y = n * c - a * u,
                    q = r * i - e * o,
                    g = r * c - a * o,
                    x = e * c - a * i,
                    b = f * l - s * M,
                    A = f * d - h * M,
                    L = f * m - v * M,
                    D = s * d - h * l,
                    z = s * m - v * l,
                    V = h * m - v * d;
                return p * V - w * z + y * D + q * L - g * A + x * b
            }, v.multiply = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    f = n[6],
                    s = n[7],
                    h = n[8],
                    v = n[9],
                    M = n[10],
                    l = n[11],
                    d = n[12],
                    m = n[13],
                    p = n[14],
                    w = n[15],
                    y = r[0],
                    q = r[1],
                    g = r[2],
                    x = r[3];
                return t[0] = y * e + q * i + g * h + x * d, t[1] = y * a + q * c + g * v + x * m, t[2] = y * u + q * f + g * M + x * p, t[3] = y * o + q * s + g * l + x * w, y = r[4], q = r[5], g = r[6], x = r[7], t[4] = y * e + q * i + g * h + x * d, t[5] = y * a + q * c + g * v + x * m, t[6] = y * u + q * f + g * M + x * p, t[7] = y * o + q * s + g * l + x * w, y = r[8], q = r[9], g = r[10], x = r[11], t[8] = y * e + q * i + g * h + x * d, t[9] = y * a + q * c + g * v + x * m, t[10] = y * u + q * f + g * M + x * p, t[11] = y * o + q * s + g * l + x * w, y = r[12], q = r[13], g = r[14], x = r[15], t[12] = y * e + q * i + g * h + x * d, t[13] = y * a + q * c + g * v + x * m, t[14] = y * u + q * f + g * M + x * p, t[15] = y * o + q * s + g * l + x * w, t
            }, v.mul = v.multiply, v.translate = function(t, n, r) {
                var e, a, u, o, i, c, f, s, h, v, M, l, d = r[0],
                    m = r[1],
                    p = r[2];
                return n === t ? (t[12] = n[0] * d + n[4] * m + n[8] * p + n[12], t[13] = n[1] * d + n[5] * m + n[9] * p + n[13], t[14] = n[2] * d + n[6] * m + n[10] * p + n[14], t[15] = n[3] * d + n[7] * m + n[11] * p + n[15]) : (e = n[0], a = n[1], u = n[2], o = n[3], i = n[4], c = n[5], f = n[6], s = n[7], h = n[8], v = n[9], M = n[10], l = n[11], t[0] = e, t[1] = a, t[2] = u, t[3] = o, t[4] = i, t[5] = c, t[6] = f, t[7] = s, t[8] = h, t[9] = v, t[10] = M, t[11] = l, t[12] = e * d + i * m + h * p + n[12], t[13] = a * d + c * m + v * p + n[13], t[14] = u * d + f * m + M * p + n[14], t[15] = o * d + s * m + l * p + n[15]), t
            }, v.scale = function(t, n, r) {
                var e = r[0],
                    a = r[1],
                    u = r[2];
                return t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t[3] = n[3] * e, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * u, t[9] = n[9] * u, t[10] = n[10] * u, t[11] = n[11] * u, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
            }, v.rotate = function(t, r, e, a) {
                var u, o, i, c, f, s, h, v, M, l, d, m, p, w, y, q, g, x, b, A, L, D, z, V, j = a[0],
                    I = a[1],
                    P = a[2],
                    Q = Math.sqrt(j * j + I * I + P * P);
                return Math.abs(Q) < n ? null : (Q = 1 / Q, j *= Q, I *= Q, P *= Q, u = Math.sin(e), o = Math.cos(e), i = 1 - o, c = r[0], f = r[1], s = r[2], h = r[3], v = r[4], M = r[5], l = r[6], d = r[7], m = r[8], p = r[9], w = r[10], y = r[11], q = j * j * i + o, g = I * j * i + P * u, x = P * j * i - I * u, b = j * I * i - P * u, A = I * I * i + o, L = P * I * i + j * u, D = j * P * i + I * u, z = I * P * i - j * u, V = P * P * i + o, t[0] = c * q + v * g + m * x, t[1] = f * q + M * g + p * x, t[2] = s * q + l * g + w * x, t[3] = h * q + d * g + y * x, t[4] = c * b + v * A + m * L, t[5] = f * b + M * A + p * L, t[6] = s * b + l * A + w * L, t[7] = h * b + d * A + y * L, t[8] = c * D + v * z + m * V, t[9] = f * D + M * z + p * V, t[10] = s * D + l * z + w * V, t[11] = h * D + d * z + y * V, r !== t && (t[12] = r[12], t[13] = r[13], t[14] = r[14], t[15] = r[15]), t)
            }, v.rotateX = function(t, n, r) {
                var e = Math.sin(r),
                    a = Math.cos(r),
                    u = n[4],
                    o = n[5],
                    i = n[6],
                    c = n[7],
                    f = n[8],
                    s = n[9],
                    h = n[10],
                    v = n[11];
                return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = u * a + f * e, t[5] = o * a + s * e, t[6] = i * a + h * e, t[7] = c * a + v * e, t[8] = f * a - u * e, t[9] = s * a - o * e, t[10] = h * a - i * e, t[11] = v * a - c * e, t
            }, v.rotateY = function(t, n, r) {
                var e = Math.sin(r),
                    a = Math.cos(r),
                    u = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    f = n[8],
                    s = n[9],
                    h = n[10],
                    v = n[11];
                return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * a - f * e, t[1] = o * a - s * e, t[2] = i * a - h * e, t[3] = c * a - v * e, t[8] = u * e + f * a, t[9] = o * e + s * a, t[10] = i * e + h * a, t[11] = c * e + v * a, t
            }, v.rotateZ = function(t, n, r) {
                var e = Math.sin(r),
                    a = Math.cos(r),
                    u = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    f = n[4],
                    s = n[5],
                    h = n[6],
                    v = n[7];
                return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * a + f * e, t[1] = o * a + s * e, t[2] = i * a + h * e, t[3] = c * a + v * e, t[4] = f * a - u * e, t[5] = s * a - o * e, t[6] = h * a - i * e, t[7] = v * a - c * e, t
            }, v.fromRotationTranslation = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = e + e,
                    c = a + a,
                    f = u + u,
                    s = e * i,
                    h = e * c,
                    v = e * f,
                    M = a * c,
                    l = a * f,
                    d = u * f,
                    m = o * i,
                    p = o * c,
                    w = o * f;
                return t[0] = 1 - (M + d), t[1] = h + w, t[2] = v - p, t[3] = 0, t[4] = h - w, t[5] = 1 - (s + d), t[6] = l + m, t[7] = 0, t[8] = v + p, t[9] = l - m, t[10] = 1 - (s + M), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
            }, v.fromQuat = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = r + r,
                    i = e + e,
                    c = a + a,
                    f = r * o,
                    s = e * o,
                    h = e * i,
                    v = a * o,
                    M = a * i,
                    l = a * c,
                    d = u * o,
                    m = u * i,
                    p = u * c;
                return t[0] = 1 - h - l, t[1] = s + p, t[2] = v - m, t[3] = 0, t[4] = s - p, t[5] = 1 - f - l, t[6] = M + d, t[7] = 0, t[8] = v + m, t[9] = M - d, t[10] = 1 - f - h, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, v.frustum = function(t, n, r, e, a, u, o) {
                var i = 1 / (r - n),
                    c = 1 / (a - e),
                    f = 1 / (u - o);
                return t[0] = 2 * u * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * u * c, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (a + e) * c, t[10] = (o + u) * f, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * u * 2 * f, t[15] = 0, t
            }, v.perspective = function(t, n, r, e, a) {
                var u = 1 / Math.tan(n / 2),
                    o = 1 / (e - a);
                return t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + e) * o, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * a * e * o, t[15] = 0, t
            }, v.ortho = function(t, n, r, e, a, u, o) {
                var i = 1 / (n - r),
                    c = 1 / (e - a),
                    f = 1 / (u - o);
                return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (n + r) * i, t[13] = (a + e) * c, t[14] = (o + u) * f, t[15] = 1, t
            }, v.lookAt = function(t, r, e, a) {
                var u, o, i, c, f, s, h, M, l, d, m = r[0],
                    p = r[1],
                    w = r[2],
                    y = a[0],
                    q = a[1],
                    g = a[2],
                    x = e[0],
                    b = e[1],
                    A = e[2];
                return Math.abs(m - x) < n && Math.abs(p - b) < n && Math.abs(w - A) < n ? v.identity(t) : (h = m - x, M = p - b, l = w - A, d = 1 / Math.sqrt(h * h + M * M + l * l), h *= d, M *= d, l *= d, u = q * l - g * M, o = g * h - y * l, i = y * M - q * h, d = Math.sqrt(u * u + o * o + i * i), d ? (d = 1 / d, u *= d, o *= d, i *= d) : (u = 0, o = 0, i = 0), c = M * i - l * o, f = l * u - h * i, s = h * o - M * u, d = Math.sqrt(c * c + f * f + s * s), d ? (d = 1 / d, c *= d, f *= d, s *= d) : (c = 0, f = 0, s = 0), t[0] = u, t[1] = c, t[2] = h, t[3] = 0, t[4] = o, t[5] = f, t[6] = M, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = -(u * m + o * p + i * w), t[13] = -(c * m + f * p + s * w), t[14] = -(h * m + M * p + l * w), t[15] = 1, t)
            }, v.str = function(t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            }, v.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
            }, "undefined" != typeof t && (t.mat4 = v);
            var M = {};
            M.create = function() {
                var t = new r(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, M.rotationTo = function() {
                var t = i.create(),
                    n = i.fromValues(1, 0, 0),
                    r = i.fromValues(0, 1, 0);
                return function(e, a, u) {
                    var o = i.dot(a, u);
                    return -.999999 > o ? (i.cross(t, n, a), i.length(t) < 1e-6 && i.cross(t, r, a), i.normalize(t, t), M.setAxisAngle(e, t, Math.PI), e) : o > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (i.cross(t, a, u), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = 1 + o, M.normalize(e, e))
                }
            }(), M.setAxes = function() {
                var t = h.create();
                return function(n, r, e, a) {
                    return t[0] = e[0], t[3] = e[1], t[6] = e[2], t[1] = a[0], t[4] = a[1], t[7] = a[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], M.normalize(n, M.fromMat3(n, t))
                }
            }(), M.clone = c.clone, M.fromValues = c.fromValues, M.copy = c.copy, M.set = c.set, M.identity = function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, M.setAxisAngle = function(t, n, r) {
                r *= .5;
                var e = Math.sin(r);
                return t[0] = e * n[0], t[1] = e * n[1], t[2] = e * n[2], t[3] = Math.cos(r), t
            }, M.add = c.add, M.multiply = function(t, n, r) {
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = r[0],
                    c = r[1],
                    f = r[2],
                    s = r[3];
                return t[0] = e * s + o * i + a * f - u * c, t[1] = a * s + o * c + u * i - e * f, t[2] = u * s + o * f + e * c - a * i, t[3] = o * s - e * i - a * c - u * f, t
            }, M.mul = M.multiply, M.scale = c.scale, M.rotateX = function(t, n, r) {
                r *= .5;
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = Math.sin(r),
                    c = Math.cos(r);
                return t[0] = e * c + o * i, t[1] = a * c + u * i, t[2] = u * c - a * i, t[3] = o * c - e * i, t
            }, M.rotateY = function(t, n, r) {
                r *= .5;
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = Math.sin(r),
                    c = Math.cos(r);
                return t[0] = e * c - u * i, t[1] = a * c + o * i, t[2] = u * c + e * i, t[3] = o * c - a * i, t
            }, M.rotateZ = function(t, n, r) {
                r *= .5;
                var e = n[0],
                    a = n[1],
                    u = n[2],
                    o = n[3],
                    i = Math.sin(r),
                    c = Math.cos(r);
                return t[0] = e * c + a * i, t[1] = a * c - e * i, t[2] = u * c + o * i, t[3] = o * c - u * i, t
            }, M.calculateW = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2];
                return t[0] = r, t[1] = e, t[2] = a, t[3] = -Math.sqrt(Math.abs(1 - r * r - e * e - a * a)), t
            }, M.dot = c.dot, M.lerp = c.lerp, M.slerp = function(t, n, r, e) {
                var a, u, o, i, c, f = n[0],
                    s = n[1],
                    h = n[2],
                    v = n[3],
                    M = r[0],
                    l = r[1],
                    d = r[2],
                    m = r[3];
                return u = f * M + s * l + h * d + v * m, 0 > u && (u = -u, M = -M, l = -l, d = -d, m = -m), 1 - u > 1e-6 ? (a = Math.acos(u), o = Math.sin(a), i = Math.sin((1 - e) * a) / o, c = Math.sin(e * a) / o) : (i = 1 - e, c = e), t[0] = i * f + c * M, t[1] = i * s + c * l, t[2] = i * h + c * d, t[3] = i * v + c * m, t
            }, M.invert = function(t, n) {
                var r = n[0],
                    e = n[1],
                    a = n[2],
                    u = n[3],
                    o = r * r + e * e + a * a + u * u,
                    i = o ? 1 / o : 0;
                return t[0] = -r * i, t[1] = -e * i, t[2] = -a * i, t[3] = u * i, t
            }, M.conjugate = function(t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
            }, M.length = c.length, M.len = M.length, M.squaredLength = c.squaredLength, M.sqrLen = M.squaredLength, M.normalize = c.normalize, M.fromMat3 = function(t, n) {
                var r, e = n[0] + n[4] + n[8];
                if (e > 0) r = Math.sqrt(e + 1), t[3] = .5 * r, r = .5 / r, t[0] = (n[7] - n[5]) * r, t[1] = (n[2] - n[6]) * r, t[2] = (n[3] - n[1]) * r;
                else {
                    var a = 0;
                    n[4] > n[0] && (a = 1), n[8] > n[3 * a + a] && (a = 2);
                    var u = (a + 1) % 3,
                        o = (a + 2) % 3;
                    r = Math.sqrt(n[3 * a + a] - n[3 * u + u] - n[3 * o + o] + 1), t[a] = .5 * r, r = .5 / r, t[3] = (n[3 * o + u] - n[3 * u + o]) * r, t[u] = (n[3 * u + a] + n[3 * a + u]) * r, t[o] = (n[3 * o + a] + n[3 * a + o]) * r
                }
                return t
            }, M.str = function(t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, "undefined" != typeof t && (t.quat = M)
        }(n.exports)
}(this);
WebGLUtils = function() {
    var e = function(e) {
            return '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">' + e + "</div></div></td></tr></table>"
        },
        t = 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',
        r = 'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>',
        n = function(n, o, a) {
            function u(i) {
                var o = n.parentNode;
                if (o) {
                    var a = window.WebGLRenderingContext ? r : t;
                    i && (a += "<br/><br/>Status: " + i), o.innerHTML = e(a)
                }
            }
            a = a || u, n.addEventListener && n.addEventListener("webglcontextcreationerror", function(e) {
                a(e.statusMessage)
            }, !1);
            var d = i(n, o);
            return d || window.WebGLRenderingContext || a(""), d
        },
        i = function(e, t) {
            for (var r = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], n = null, i = 0; i < r.length; ++i) {
                try {
                    n = e.getContext(r[i], t)
                } catch (o) {}
                if (n) break
            }
            return n
        };
    return {
        create3DContext: i,
        setupWebGL: n
    }
}(), window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
        window.setTimeout(e, 1e3 / 60)
    }
}();

function f1(v) {
    var e;
    e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.onreadystatechange = function() {
        if (4 == e.readyState) {
            v146 = v + "", v146 = "en";
            var r = e.responseText,
                f = r.split("\n");
            if (f.length < 3) return;
            var t = 0;
            for (i = 0; i < f.length; i++) {
                var a = f[i],
                    n = a.indexOf('"') + 1;
                if (1 == n) {
                    famobi.log("start_pos: " + n);
                    var o = a.indexOf('"', n),
                        s = a.substring(n, o);
                    v287[t] = s, t++
                }
            }
        }
    }, e.open("GET", "datas/localisation/" + v + ".txt", !0), e.send()
}

function f22() {
    var v = navigator.language || navigator.userLanguage;
    famobi.log("Navigator Language: " + v);
    for (var e = window.location.search.substring(1), r = e.split("&"), f = 0; f < r.length; f++) {
        var t = r[f].search("locale=");
        if (0 == t) {
            var a = r[f].substring(7, 9);
            famobi.log("Navigator Forced Language: '" + a + "'"), v = a + "-" + a
        }
    }
    return v
}

function f7() {
    var v = f22(); - 1 != v.search("fr") && f1("fr"), -1 != v.search("de") && f1("de"), -1 != v.search("es") && f1("es"), -1 != v.search("nl") && f1("nl"), -1 != v.search("pl") && f1("pl"), -1 != v.search("pt") && f1("pt"), -1 != v.search("ru") && f1("ru"), -1 != v.search("tr") && f1("tr")
}

function f172(v) {
    if (null === v || "undefined" == typeof v) return "";
    var e, r, f = v + "",
        t = "",
        a = 0;
    e = r = 0, a = f.length;
    for (var n = 0; a > n; n++) {
        var o = f.charCodeAt(n),
            i = null;
        if (128 > o) r++;
        else if (o > 127 && 2048 > o) i = String.fromCharCode(o >> 6 | 192, 63 & o | 128);
        else if (55296 != (63488 & o)) i = String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128);
        else {
            if (55296 != (64512 & o)) throw new RangeError("Unmatched trail surrogate at " + n);
            var s = f.charCodeAt(++n);
            if (56320 != (64512 & s)) throw new RangeError("Unmatched lead surrogate at " + (n - 1));
            o = ((1023 & o) << 10) + (1023 & s) + 65536, i = String.fromCharCode(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
        }
        null !== i && (r > e && (t += f.slice(e, r)), t += i, e = r = n + 1)
    }
    return r > e && (t += f.slice(e, a)), t
}

function md5(v) {
    var e, r, f, t, a, n, o, i, s, u, l = function(v, e) {
            return v << e | v >>> 32 - e
        },
        d = function(v, e) {
            var r, f, t, a, n;
            return t = 2147483648 & v, a = 2147483648 & e, r = 1073741824 & v, f = 1073741824 & e, n = (1073741823 & v) + (1073741823 & e), r & f ? 2147483648 ^ n ^ t ^ a : r | f ? 1073741824 & n ? 3221225472 ^ n ^ t ^ a : 1073741824 ^ n ^ t ^ a : n ^ t ^ a
        },
        g = function(v, e, r) {
            return v & e | ~v & r
        },
        C = function(v, e, r) {
            return v & r | e & ~r
        },
        y = function(v, e, r) {
            return v ^ e ^ r
        },
        c = function(v, e, r) {
            return e ^ (v | ~r)
        },
        T = function(v, e, r, f, t, a, n) {
            return v = d(v, d(d(g(e, r, f), t), n)), d(l(v, a), e)
        },
        P = function(v, e, r, f, t, a, n) {
            return v = d(v, d(d(C(e, r, f), t), n)), d(l(v, a), e)
        },
        x = function(v, e, r, f, t, a, n) {
            return v = d(v, d(d(y(e, r, f), t), n)), d(l(v, a), e)
        },
        h = function(v, e, r, f, t, a, n) {
            return v = d(v, d(d(c(e, r, f), t), n)), d(l(v, a), e)
        },
        S = function(v) {
            for (var e, r = v.length, f = r + 8, t = (f - f % 64) / 64, a = 16 * (t + 1), n = new Array(a - 1), o = 0, i = 0; r > i;) e = (i - i % 4) / 4, o = i % 4 * 8, n[e] = n[e] | v.charCodeAt(i) << o, i++;
            return e = (i - i % 4) / 4, o = i % 4 * 8, n[e] = n[e] | 128 << o, n[a - 2] = r << 3, n[a - 1] = r >>> 29, n
        },
        _ = function(v) {
            var e, r, f = "",
                t = "";
            for (r = 0; 3 >= r; r++) e = v >>> 8 * r & 255, t = "0" + e.toString(16), f += t.substr(t.length - 2, 2);
            return f
        },
        m = [],
        p = 7,
        b = 12,
        B = 17,
        E = 22,
        O = 5,
        R = 9,
        A = 14,
        D = 20,
        M = 4,
        F = 11,
        I = 16,
        z = 23,
        w = 6,
        U = 10,
        L = 15,
        J = 21;
    for (v = this.f172(v), m = S(v), o = 1732584193, i = 4023233417, s = 2562383102, u = 271733878, e = m.length, r = 0; e > r; r += 16) f = o, t = i, a = s, n = u, o = T(o, i, s, u, m[r + 0], p, 3614090360), u = T(u, o, i, s, m[r + 1], b, 3905402710), s = T(s, u, o, i, m[r + 2], B, 606105819), i = T(i, s, u, o, m[r + 3], E, 3250441966), o = T(o, i, s, u, m[r + 4], p, 4118548399), u = T(u, o, i, s, m[r + 5], b, 1200080426), s = T(s, u, o, i, m[r + 6], B, 2821735955), i = T(i, s, u, o, m[r + 7], E, 4249261313), o = T(o, i, s, u, m[r + 8], p, 1770035416), u = T(u, o, i, s, m[r + 9], b, 2336552879), s = T(s, u, o, i, m[r + 10], B, 4294925233), i = T(i, s, u, o, m[r + 11], E, 2304563134), o = T(o, i, s, u, m[r + 12], p, 1804603682), u = T(u, o, i, s, m[r + 13], b, 4254626195), s = T(s, u, o, i, m[r + 14], B, 2792965006), i = T(i, s, u, o, m[r + 15], E, 1236535329), o = P(o, i, s, u, m[r + 1], O, 4129170786), u = P(u, o, i, s, m[r + 6], R, 3225465664), s = P(s, u, o, i, m[r + 11], A, 643717713), i = P(i, s, u, o, m[r + 0], D, 3921069994), o = P(o, i, s, u, m[r + 5], O, 3593408605), u = P(u, o, i, s, m[r + 10], R, 38016083), s = P(s, u, o, i, m[r + 15], A, 3634488961), i = P(i, s, u, o, m[r + 4], D, 3889429448), o = P(o, i, s, u, m[r + 9], O, 568446438), u = P(u, o, i, s, m[r + 14], R, 3275163606), s = P(s, u, o, i, m[r + 3], A, 4107603335), i = P(i, s, u, o, m[r + 8], D, 1163531501), o = P(o, i, s, u, m[r + 13], O, 2850285829), u = P(u, o, i, s, m[r + 2], R, 4243563512), s = P(s, u, o, i, m[r + 7], A, 1735328473), i = P(i, s, u, o, m[r + 12], D, 2368359562), o = x(o, i, s, u, m[r + 5], M, 4294588738), u = x(u, o, i, s, m[r + 8], F, 2272392833), s = x(s, u, o, i, m[r + 11], I, 1839030562), i = x(i, s, u, o, m[r + 14], z, 4259657740), o = x(o, i, s, u, m[r + 1], M, 2763975236), u = x(u, o, i, s, m[r + 4], F, 1272893353), s = x(s, u, o, i, m[r + 7], I, 4139469664), i = x(i, s, u, o, m[r + 10], z, 3200236656), o = x(o, i, s, u, m[r + 13], M, 681279174), u = x(u, o, i, s, m[r + 0], F, 3936430074), s = x(s, u, o, i, m[r + 3], I, 3572445317), i = x(i, s, u, o, m[r + 6], z, 76029189), o = x(o, i, s, u, m[r + 9], M, 3654602809), u = x(u, o, i, s, m[r + 12], F, 3873151461), s = x(s, u, o, i, m[r + 15], I, 530742520), i = x(i, s, u, o, m[r + 2], z, 3299628645), o = h(o, i, s, u, m[r + 0], w, 4096336452), u = h(u, o, i, s, m[r + 7], U, 1126891415), s = h(s, u, o, i, m[r + 14], L, 2878612391), i = h(i, s, u, o, m[r + 5], J, 4237533241), o = h(o, i, s, u, m[r + 12], w, 1700485571), u = h(u, o, i, s, m[r + 3], U, 2399980690), s = h(s, u, o, i, m[r + 10], L, 4293915773), i = h(i, s, u, o, m[r + 1], J, 2240044497), o = h(o, i, s, u, m[r + 8], w, 1873313359), u = h(u, o, i, s, m[r + 15], U, 4264355552), s = h(s, u, o, i, m[r + 6], L, 2734768916), i = h(i, s, u, o, m[r + 13], J, 1309151649), o = h(o, i, s, u, m[r + 4], w, 4149444226), u = h(u, o, i, s, m[r + 11], U, 3174756917), s = h(s, u, o, i, m[r + 2], L, 718787259), i = h(i, s, u, o, m[r + 9], J, 3951481745), o = d(o, f), i = d(i, t), s = d(s, a), u = d(u, n);
    var W = _(o) + _(i) + _(s) + _(u);
    return W.toLowerCase()
}

function f190() {
    this.HashCount_X = 1, this.HashCount_Y = 1, this.HashSize_X = 0, this.HashSize_Y = 0, this.HashPos_Left = 0, this.HashPos_Right = 0, this.HashPos_Top = 0, this.HashPos_Bottom = 0, this.HashDetected = 0, this.HashDetectedCount = 0, this.StaticSegments, this.StaticSegmentsCount = 0, this.HashStaticsList, this.Dyna_ax = 0, this.Dyna_bx = 0, this.Dyna_cx = 0, this.Dyna_dx = 0, this.Dyna_ay = 0, this.Dyna_by = 0, this.Dyna_cy = 0, this.Dyna_dy = 0
}

function f138() {
    this.ax = 0, this.ay = 0, this.bx = 0, this.by = 0
}

function f84() {
    ColizWord = [], ColizWord = new f190, ColizWord.StaticSegmentsCount = 0, ColizWord.HashDetected = new Array;
    for (var v = 0; 20 > v; v++) ColizWord.HashDetected.push;
    ColizWord.StaticSegments = new Array, ColizWord.HashStaticsList = new Array;
    for (var v = 0; 1e4 > v; v++) ColizWord.HashStaticsList.push, ColizWord.HashStaticsList[v] = new Array;
    for (var v = 0; 100 > v; v++) v162.push, v160.push
}

function f32(v, e, r, f, t, a) {
    v113 = 0, v112 = 0;
    var n = v - r,
        o = e - f,
        i = t - r,
        s = a - f,
        u = n * i + o * s,
        l = i * i + s * s,
        d = -1;
    0 != l && (d = u / l);
    var g, C;
    0 > d ? (g = r, C = f) : d > 1 ? (g = t, C = a) : (g = r + d * i, C = f + d * s), v113 = g, v112 = C;
    var y = v - g,
        c = e - C;
    return Math.sqrt(y * y + c * c)
}

function f3(v, e, r, f, t, a, n) {
    var o = f32(v, e, f, t, a, n);
    return o > 0 && r > o ? !0 : !1
}

function f8(v, e, r, f, t, a, n, o) {
    1 == v192 && famobi.log("f8");
    var i = (o - a) * (r - v) - (n - t) * (f - e);
    if (0 == i) return !1;
    var s = ((n - t) * (e - a) - (o - a) * (v - t)) / i,
        u = ((r - v) * (e - a) - (f - e) * (v - t)) / i;
    return 0 > s || s > 1 || 0 > u || u > 1 ? !1 : (v258 = v + s * (r - v), v259 = e + s * (f - e), v162[v233] = v258, v160[v233] = v259, v233++, v233 > 100 && (v233 = 0), ColDirX += v258, ColDirY += v259, ColDirCount++, 1 == v192 && famobi.log("f8 ColDirCount" + ColDirCount + ", ColDirX" + ColDirX + ",ColDirY " + ColDirY), !0)
}

function f0(v, e, r, f, t, a, n, o) {
    1 == v192 && famobi.log("f0 " + v + " " + e + " " + r + " " + f + " " + t + " " + a + " " + n + " " + o);
    var i = (o - a) * (r - v) - (n - t) * (f - e);
    if (0 == i) return !1;
    1 == v192 && famobi.log("f0 denom OK");
    var s = ((n - t) * (e - a) - (o - a) * (v - t)) / i,
        u = ((r - v) * (e - a) - (f - e) * (v - t)) / i;
    if (0 > s || s > 1 || 0 > u || u > 1) return !1;
    1 == v192 && famobi.log("f0 ua < 0 || ua > 1 || ub < 0 || ub > 1 OK"), v258 = v + s * (r - v), v259 = e + s * (f - e), ColDirY > v259 && (v162[0] = v258, v160[0] = v259, ColDirX = v258, ColDirY = v259, ColDirCount++), t > n ? (v72 = t - n, v76 = a - o) : (v72 = n - t, v76 = o - a);
    var l = Math.sqrt(v72 * v72 + v76 * v76);
    return 0 == l && (l = 1e-9), v72 /= l, v76 /= l, 1 == v192 && famobi.log("f0 ColDirCount" + ColDirCount + ", ColDirX" + ColDirX + ",ColDirY " + ColDirY), !0
}

function f31(v, e, r) {
    f15(v, e, 2.1 * r, 2.1 * r), v72 = 0, v76 = 0;
    for (var f = 0; f < ColizWord.HashDetectedCount; f++) {
        var t = ColizWord.HashDetected[f];
        if (t > -1 && 1e4 > t)
            for (var a = ColizWord.HashStaticsList[t].length, n = 0; a > n; n++) {
                var o = ColizWord.HashStaticsList[t][n];
                if (1 == f3(v, e, r, ColizWord.StaticSegments[o].ax, ColizWord.StaticSegments[o].ay, ColizWord.StaticSegments[o].bx, ColizWord.StaticSegments[o].by)) {
                    ColizWord.StaticSegments[o].ax > ColizWord.StaticSegments[o].bx ? (v72 = ColizWord.StaticSegments[o].ax - ColizWord.StaticSegments[o].bx, v76 = ColizWord.StaticSegments[o].ay - ColizWord.StaticSegments[o].by) : (v72 = ColizWord.StaticSegments[o].bx - ColizWord.StaticSegments[o].ax, v76 = ColizWord.StaticSegments[o].by - ColizWord.StaticSegments[o].ay);
                    var i = Math.sqrt(v72 * v72 + v76 * v76);
                    return 0 == i && (i = 1e-9), v72 /= i, v76 /= i, !0
                }
            }
    }
    return !1
}

function f57(v, e, r, f) {
    ColizWord.Dyna_ax = v, ColizWord.Dyna_ay = e, ColizWord.Dyna_bx = r, ColizWord.Dyna_by = f, ColizWord.Dyna_cx = v, ColizWord.Dyna_cy = e, ColizWord.Dyna_dx = r, ColizWord.Dyna_dy = f, ColDirX = 0, ColDirY = 1e7, ColDirCount = 0;
    var t = .5 * (v + r),
        a = .5 * (e + f),
        n = Math.abs(r - v),
        o = Math.abs(f - e);
    1 > n && (n = 1), 1 > o && (o = 1), f15(t, a, n, o);
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var s = ColizWord.HashDetected[i];
        if (s > -1 && 1e4 > s)
            for (var u = ColizWord.HashStaticsList[s].length, l = 0; u > l; l++) {
                var d = ColizWord.HashStaticsList[s][l];
                f0(v, e, r, f, ColizWord.StaticSegments[d].ax, ColizWord.StaticSegments[d].ay, ColizWord.StaticSegments[d].bx, ColizWord.StaticSegments[d].by)
            }
    }
}

function f69(v, e, r, f, t, a, n, o) {
    ColizWord.Dyna_ax = v, ColizWord.Dyna_ay = e, ColizWord.Dyna_bx = r, ColizWord.Dyna_by = f, ColizWord.Dyna_cx = t, ColizWord.Dyna_cy = a, ColizWord.Dyna_dx = n, ColizWord.Dyna_dy = o, ColDirX = 0, ColDirY = 0, ColDirCount = 0;
    for (var i = 0; i < ColizWord.HashDetectedCount; i++) {
        var s = ColizWord.HashDetected[i];
        if (s > -1 && 1e4 > s)
            for (var u = ColizWord.HashStaticsList[s].length, l = 0; u > l; l++) {
                var d = ColizWord.HashStaticsList[s][l];
                f8(v, e, r, f, ColizWord.StaticSegments[d].ax, ColizWord.StaticSegments[d].ay, ColizWord.StaticSegments[d].bx, ColizWord.StaticSegments[d].by), f8(r, f, t, a, ColizWord.StaticSegments[d].ax, ColizWord.StaticSegments[d].ay, ColizWord.StaticSegments[d].bx, ColizWord.StaticSegments[d].by), f8(t, a, n, o, ColizWord.StaticSegments[d].ax, ColizWord.StaticSegments[d].ay, ColizWord.StaticSegments[d].bx, ColizWord.StaticSegments[d].by), f8(n, o, v, e, ColizWord.StaticSegments[d].ax, ColizWord.StaticSegments[d].ay, ColizWord.StaticSegments[d].bx, ColizWord.StaticSegments[d].by)
            }
    }
    ColDirCount > 0 && (ColDirX /= ColDirCount, ColDirY /= ColDirCount)
}

function f20(v, e, r, f) {
    ColizWord.StaticSegments.push, ColizWord.StaticSegments[ColizWord.StaticSegmentsCount] = new f138, ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].ax = v, ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].ay = e, ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].bx = r, ColizWord.StaticSegments[ColizWord.StaticSegmentsCount].by = f, ColizWord.StaticSegmentsCount++
}

function f15(v, e, r, f) {
    ColizWord.HashDetectedCount = 0;
    for (var t = v - ColizWord.HashPos_Left, a = e - ColizWord.HashPos_Top, n = Math.floor((t - .5 * r) / ColizWord.HashSize_X), o = Math.floor((a - .5 * f) / ColizWord.HashSize_Y), i = Math.floor((t + .5 * r) / ColizWord.HashSize_X), s = Math.floor((a + .5 * f) / ColizWord.HashSize_Y), t = n; i + 1 > t; t++)
        for (var a = o; s + 1 > a; a++) ColizWord.HashDetected[ColizWord.HashDetectedCount] = Math.floor(t + a * ColizWord.HashCount_X), ColizWord.HashDetectedCount++
}

function f59(v) {
    for (var e = 0; e < ColizWord.StaticSegmentsCount; e++) ColizWord.StaticSegments[e].ax -= v, ColizWord.StaticSegments[e].bx -= v
}

function f12(v) {
    return
}

function f94() {
    ColizWord.HashStaticsList = new Array;
    for (var v = 0; 1e4 > v; v++) ColizWord.HashStaticsList.push, ColizWord.HashStaticsList[v] = new Array
}

function f28() {
    for (var v = 0; v < ColizWord.StaticSegmentsCount; v++) {
        var e = .5 * (ColizWord.StaticSegments[v].ax + ColizWord.StaticSegments[v].bx),
            r = .5 * (ColizWord.StaticSegments[v].ay + ColizWord.StaticSegments[v].by),
            f = Math.abs(ColizWord.StaticSegments[v].bx - ColizWord.StaticSegments[v].ax),
            t = Math.abs(ColizWord.StaticSegments[v].by - ColizWord.StaticSegments[v].ay);
        f15(e, r, f, t);
        for (var a = 0; a < ColizWord.HashDetectedCount; a++) {
            var n = ColizWord.HashDetected[a];
            n > -1 && 1e4 > n && ColizWord.HashStaticsList[n].push(v)
        }
    }
    famobi.log("Static Count in Hash vs Evil " + ColizWord.StaticSegmentsCount)
}

function f55() {
    ColizWord.HashSize_X = (ColizWord.HashPos_Right - ColizWord.HashPos_Left) / ColizWord.HashCount_X, ColizWord.HashSize_Y = (ColizWord.HashPos_Bottom - ColizWord.HashPos_Top) / ColizWord.HashCount_Y
}

function f21(v, e, r, f) {
    ColizWord.HashPos_Left = v, ColizWord.HashPos_Top = e, ColizWord.HashPos_Right = r, ColizWord.HashPos_Bottom = f, f55()
}

function f49(v, e) {
    v > 100 && (v = 100), e > 100 && (e = 100), ColizWord.HashCount_X = v, ColizWord.HashCount_Y = e, f55()
}

function f229(v, e, r, f) {
    var t = Math.sqrt((v - r) * (v - r) + (e - f) * (e - f)),
        a = -f201(v, e, r, f);
    f153(), f186(v, e, 0), f251(a, 0, 0, 1), f129(-v277, -v277, v277, t + v277), f185()
}

function f92() {
    v277 = .5, f153(), f186(0, 5, 0), f251(90, 1, 0, 0), gl.enable(gl.BLEND), gl.depthMask(!1), f183(3);
    for (var v = 0; v < ColizWord.HashCount_X; v++)
        for (var e = ColizWord.HashPos_Left + v * ColizWord.HashSize_X, r = 0; r < ColizWord.HashCount_Y; r++) {
            f139(0, 0, 0, .8);
            for (var f = ColizWord.HashPos_Top + r * ColizWord.HashSize_Y, t = 0; t < ColizWord.HashDetectedCount; t++)
                if (ColizWord.HashDetected[t] == Math.floor(v + r * ColizWord.HashCount_X)) {
                    f139(0, 1, 0, .2);
                    break
                }
            f129(e + v277, f + v277, e + ColizWord.HashSize_X - v277, f + ColizWord.HashSize_Y - v277)
        }
    f139(1, 1, 0, .2);
    for (var t = 0; t < ColizWord.StaticSegmentsCount; t++) f229(ColizWord.StaticSegments[t].ax, ColizWord.StaticSegments[t].ay, ColizWord.StaticSegments[t].bx, ColizWord.StaticSegments[t].by);
    f139(1, 1, 0, 1);
    for (var t = 0; t < ColizWord.HashDetectedCount; t++) {
        var a = ColizWord.HashDetected[t];
        if (a > -1 && 1e4 > a)
            for (var n = ColizWord.HashStaticsList[a].length, o = 0; n > o; o++) {
                var i = ColizWord.HashStaticsList[a][o];
                f229(ColizWord.StaticSegments[i].ax, ColizWord.StaticSegments[i].ay, ColizWord.StaticSegments[i].bx, ColizWord.StaticSegments[i].by)
            }
    }
    v277 = .5, f139(0, 1, 0, 1), f229(ColizWord.Dyna_ax, ColizWord.Dyna_ay, ColizWord.Dyna_bx, ColizWord.Dyna_by), f229(ColizWord.Dyna_bx, ColizWord.Dyna_by, ColizWord.Dyna_cx, ColizWord.Dyna_cy), f229(ColizWord.Dyna_cx, ColizWord.Dyna_cy, ColizWord.Dyna_dx, ColizWord.Dyna_dy), f229(ColizWord.Dyna_dx, ColizWord.Dyna_dy, ColizWord.Dyna_ax, ColizWord.Dyna_ay), f139(1, 0, 0, 1);
    for (var t = 0; 100 > t; t++) f129(v162[t] - 1, v160[t] - 1, v162[t] + 1, v160[t] + 1);
    gl.disable(gl.BLEND), gl.depthMask(!0), f185()
}

function f240(v) {
    return Math.cos(v)
}

function f241(v) {
    return Math.sin(v)
}

function f201(v, e, r, f) {
    return 270 - Math.atan2(e - f, v - r) * v217
}

function f133(v, e, r, f) {
    return Math.atan2(f - e, r - v)
}

function f114() {
    var v = 100;
    return "number" == typeof window.innerWidth ? v = window.innerWidth : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? v = document.documentElement.clientWidth : document.body && (document.body.clientWidth || document.body.clientHeight) && (v = document.body.clientWidth), v
}

function f96() {
    var v = 100;
    return "number" == typeof window.innerWidth ? v = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? v = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (v = document.body.clientHeight), v
}

function f67() {}

function f175(v, e, r) {
    Realv313 = e, Realv312 = r;
    var f = (v151.width, v151.height, e - v151.offsetLeft),
        t = r - v151.offsetTop;
    0 == isNaN(f) && 0 == isNaN(t) && (OLD_v313 = v313, OLD_v312 = v312, v313 = e, v312 = r, v313 *= v207 / v176, v312 *= v142 / v149, v313 = Math.floor(v313), v312 = Math.floor(v312), 1 == isNaN(v312) && (v312 = 0), 1 == isNaN(v313) && (v313 = 0), 0 > v313 && (v313 = 0), 0 > v312 && (v312 = 0), v313 > v207 && (v313 = v207), v312 > v142 && (v312 = v142))
}

function f79() {
    0 == v178 && -1 == v215 && (v215 = 0), 1 == v215 && (v215 = -1), 1 == v178 && 0 == v215 && (v215 = 1)
}

function f177() {
    this.x = 0, this.y = 0, this.Touch_id = 0
}

function f178() {
    v80 = [], v138 = 0
}

function f24(v) {
    v.preventDefault(), v.stopPropagation();
    for (var e, r = v.changedTouches, f = 0; f < r.length; f++) {
        e = 1;
        for (var t = 0; v138 > t; t++)
            if (v80[t].Touch_id == r[f].identifier) {
                v80[t].x = r[f].pageX, v80[t].y = r[f].pageY, e = 0;
                break
            }
        if (1 == e) {
            v80.push(), v80[v138] = new f177, v80[v138].x = r[f].pageX, v80[v138].y = r[f].pageY, v80[v138].Touch_id = r[f].identifier, v138++
        }
    }
}

function f41(v) {
    v.preventDefault(), v.stopPropagation();
    for (var e = v.changedTouches, r = 0; r < e.length; r++)
        for (var f = 0; v138 > f; f++)
            if (v80[f].Touch_id == e[r].identifier) {
                v80.splice(f, 1), v138--;
                break
            }
}

function f36(v) {
    v.preventDefault(), v.stopPropagation();
    for (var e = v.changedTouches, r = 0; r < e.length; r++)
        for (var f = 0; v138 > f; f++)
            if (v80[f].Touch_id == e[r].identifier) {
                v80[f].x = e[r].pageX, v80[f].y = e[r].pageY;
                break
            }
}

function f137(v, e, r, f) {
    return 1 == v215 && v313 >= v && r >= v313 && v312 >= e && f >= v312 ? (v215 = -1, 1) : 0
}

function f136(v, e, r, f) {
    if (1 == v178 && v313 >= v && r >= v313 && v312 >= e && f >= v312) return 1;
    for (var t = 0; v138 > t; t++) {
        var a = v80[t].x * v207 / v176,
            n = v80[t].y * v142 / v149;
        if (a > v && r > a && n > e && f > n) return 1
    }
    return 0
}

function f40() {
    f67(), v151.addEventListener("touchstart", function(v) {
        1 == v26 && 1 == v50 && (v26 = 0, f219(9)), f24(v), f175(v151, v.changedTouches[0].pageX, v.changedTouches[0].pageY), v313 > v201 - 255 && v201 + 255 > v313 && v312 > TextField_y - 5 && TextField_y + 75 > v312 && (v201 = -5e3, TextField_y = -5e3, document.getElementById("dlg-textfield").focus()), v178 = 1, window.scrollTo(0, 1)
    }, !1), v151.addEventListener("touchmove", function(v) {
        f36(v), f175(v151, v.changedTouches[0].pageX, v.changedTouches[0].pageY), v178 = 1, window.scrollTo(0, 1)
    }, !1), v151.addEventListener("touchend", function(v) {
        f41(v), 1 == v0 && (v305.load(), v305.play(), v0 = 0), v265.length > 5
         // && (window.open(v265), v265 = ""),
         v178 = 0, window.scrollTo(0, 1)
    }, !1), v151.addEventListener("touchcancel", function(v) {
        f41(v), v265.length > 5
        // && (window.open(v265), v265 = ""),
        v178 = 0, window.scrollTo(0, 1)
    }, !1), v151.addEventListener("touchleave", function(v) {
        f41(v), v178 = 0, window.scrollTo(0, 1)
    }, !1), 0 == v79 && (v151.onmousemove = function(v) {
        f175(v151, v.pageX, v.pageY)
    }, v151.onmousedown = function(v) {
        v265.length > 5
        // && (window.open(v265), v265 = ""),
        f175(v151, v.pageX, v.pageY), v178 = 1
    }, v151.onmouseup = function(v) {
        v265.length > 5
        // && (window.open(v265), v265 = ""),
        v178 = 0
    }, v151.onmouseout = function(v) {
        v265.length > 5
        // && (window.open(v265), v265 = ""),
        v178 = 0
    }, addEventListener("keydown", function(v) {
        [32, 37, 38, 39, 40].indexOf(v.keyCode) > -1 && v.preventDefault(), KeyIsDown = 1, v250 = v.keyCode, keysDown[v.keyCode] = !0, [32, 37, 38, 39, 40].indexOf(v.keyCode) > -1 && v.preventDefault()
    }, !1), addEventListener("keyup", function(v) {
        KeyIsDown = 0, v250 = 0, delete keysDown[v.keyCode]
    }, !1))
}

function f76() {
    // "undefined" != typeof window && window.famobi && (Monetisation_IsFamobi = 1, v19 = "https://formulafever.famobi.com/php/" + Game_ID_String + "_")
}

function f13() {
    return 1 == v5 ? 1 : 0
}

function f43() {
    // Stanislic_SendInfo("Monetisation__ShowAd_Request"), 1 == Monetisation_IsFamobi
    // && window.famobi.showAd()
}

function f19() {
    // Stanislic_SendInfo("Monetisation__MoreGames_LinkClicked"), 1 == Monetisation_IsFamobi
     // && famobi.moreGamesLink()
}

function f250() {
    var v = ["crios"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return v256 = 1, 1
    }
    return 0
}

function f249() {
    var v = ["crios"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return 0
    }
    var f = ["safari"],
        e = 0;
    for (e = 0; e < f.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(f[e]);
        if (r > -1) return 1
    }
    return 0
}

function f238() {
    var v = ["android", "bean"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return v68 = 1, 1
    }
    return 0
}

function f262() {
    var v = ["iphone", "ipad"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return DeviceIsiOS = 1, 1
    }
    return DeviceIsiOS = 0, 0
}

function f261() {
    var v = ["os 8_"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return v295 = 1, 1
    }
    return 0
}

function f248() {
    var v = ["kfsowi", "silk", "tablet", "mobile", "iphone", "ipad", "android", "blackberry", "nokia", "opera mini", "windows mobile", "windows phone", "iemobile"],
        e = 0;
    for (e = 0; e < v.length; e++) {
        var r = navigator.userAgent.toLowerCase().search(v[e]);
        if (r > -1) return f238(), v79 = 1, 1
    }
    return v79 = 0, 0
}

function f246(v) {
    return "undefined" == typeof localStorage ? null : 1 == Monetisation_IsFamobi ? famobi.localStorage.getItem(v169 + v) : localStorage.getItem(v169 + v)
}

function f233(v, e) {
    return "undefined" == typeof localStorage ? null : 1 == Monetisation_IsFamobi ? void famobi.localStorage.setItem(v169 + v, e) : void localStorage.setItem(v169 + v, e)
}

function f230() {
    if (v109 = f246("UserKey"), null == v109) {
        var v = new Date,
            e = v.getTime();
        v109 = md5("mykey" + e + 256 * Math.random()), f233("UserKey", v109)
    }
    v212 = f246("UserID"), null == v212 && (v212 = md5("UserID" + v109), f233("UserID", v212)), v45 = f246("UserAvatar"), 1 > v45 && (v45 = 1, f233("UserAvatar", v45)), v97 = f246("UserName"), null == v97 && (f163(0, 0, 0), v97 = "Pilot" + Math.floor(.1 * (5e4 + 5e4 * Math.random())), f233("UserName", v97))
}

function f181() {
    this.LastUpdate = -1, this.Name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.Score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.Rank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.Avatar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.PlayerRank = 0
}

function f221() {
    for (var v = 0; v103 > v; v++) ScoresTable.push(), ScoresTable[v] = new f181
}

function f239(v) {
    // v71 = 0, v104 = 0;
    // var e;
    // e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.onreadystatechange = function() {
    //     if (4 == e.readyState && 200 == e.status) {
    //         ScoresTable[v].Rank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], v104 = 0;
    //         var r, f = e.responseText,
    //             t = f.split(",");
    //         if (t.length < 3) return;
    //         for (r = 0; r < t.length; r += 3) {
    //             if (v104 > 19) return void(v71 = v104);
    //             if (t[r].length < 1) return void(v71 = v104);
    //             if (">>" == t[r].substring(0, 2)) ScoresTable[v].PlayerRank = parseInt(t[r].substring(2)), famobi.log("ScoresTable [PlayerRank]: " + ScoresTable[v].PlayerRank);
    //             else {
    //                 if (t[r + 2] < 1) return void(v71 = v104);
    //                 if (NaN == t[r]) return void(v71 = v104);
    //                 if (NaN == t[r + 2]) return void(v71 = v104);
    //                 var a = r / 3 - 1;
    //                 ScoresTable[v].Rank[a] = a + 1, ScoresTable[v].Avatar[a] = 1, "-" == t[r][t[r].length - 3] ? (ScoresTable[v].Name[a] = t[r].substring(0, t[r].length - 3), ScoresTable[v].Avatar[a] = parseInt(t[r].substring(t[r].length, t[r].length - 2))) : ScoresTable[v].Name[a] = t[r], ScoresTable[v].Score[a] = t[r + 2], famobi.log("ScoresTable [" + (a + 1) + "]: " + ScoresTable[v].Name[a] + " " + ScoresTable[v].Score[a]), v104++
    //             }
    //         }
    //         v71 = v104
    //     }
    // }, e.open("GET", v19 + "get_scores.php?cat=" + v + "&maxscore=" + v75, !0), e.send()
}

function f220(v) {
    var e = (new Date).getTime() / 1e3;
    e < ScoresTable[v].LastUpdate || (ScoresTable[v].LastUpdate = e + 30, f239(v))
}

function f45(v) {
    return f220(v), ScoresTable[v].PlayerRank
}

function f98(v, e) {
    return v > v103 - 1 ? 1 : (f220(e), ScoresTable[e].Avatar[v])
}

function f135(v, e) {
    return v > v103 - 1 ? 0 : (f220(e), ScoresTable[e].Rank[v])
}

function f132(v, e) {
    return v > v103 - 1 ? 0 : (f220(e), ScoresTable[e].Name[v])
}

function f104(v, e) {
    return v > v103 - 1 ? 0 : (f220(e), ScoresTable[e].Score[v])
}

function f163(v, e, r) {
    // var f;
    // f = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), f.onreadystatechange = function() {
    //     4 == f.readyState && 200 != f.status && (famobi.log("f163 ERROR: " + f.responseText), r > 0 && Submit_Score(v, e, r - 1)), 4 == f.readyState && 200 == f.status && (famobi.log("f163: " + f.responseText), ScoresTable[v].LastUpdate = -1)
    // }, e = parseInt(e);
    // var t = md5(v109 + e + v212),
    //     a = "-" + v45;
    // 10 > v45 && (a = "-0" + v45);
    // var n = v97 + a,
    //     o = v19 + "update_scores.php?id=" + v212 + "&key=" + v109 + "&name=" + n + "&avatar=" + v45 + "&email=" + v65 + "&score=" + e + "&scorekey=" + t + "&cat=" + v;
    // f.open("GET", o, !0), f.send()
}

function Overlay_Hide() {
    var v = document.getElementById("overlay");
    v.style.display = "none", Overlay_OnScreen = 0
}

function Overlay_fadeIn(v) {
    v > 1 && (v = 1);
    var e = document.getElementById("DialBox");
    e.style.opacity = v, e.style.filter = "alpha(opacity=" + 100 * v + ")", 1 > v && setTimeout(function() {
        Overlay_fadeIn(v + .1)
    }, 25)
}

function Overlay_Show(v) {
    document.getElementById("OverlayFrame").src = v, Overlay_fadeIn(0);
    var e = document.getElementById("overlay");
    e.style.display = "block", Overlay_OnScreen = 1
}

function f93() {
    this.Exist = 0, this.x = 0, this.y = 0, this.z = 0, this.s_sx = 0, this.s_sy = 0, this.s_sz = 0, this.size = 0, this.s_size = 0, this.Rotation = 0, this.s_Rotation = 0, this.TextureID = 0, this.v306y = 0, this.GroundBounce = 0, this.Alpha = 1, this.AlphaFade = 0
}

function f61(v) {
    v134 = v
}

function f127() {
    for (var v = 0; Maxv273 > v; v++) v273.push(), v273[v] = new f93
}

function f48(v, e) {
    v172 = v, TempGroundBounce = e
}

function f64(v, e) {
    v274 = v, v274Fade = e
}

function f47(v) {
    v124 = v
}

function f46(v, e, r, f) {
    v283 = v, Temps_size = e, TempRotation = r, Temps_Rotation = f
}

function f34(v, e, r, f, t, a) {
    v322 = v, Tempy = e, Tempz = r, Tempsx = f, Tempsy = t, Tempsz = a
}

function f146() {
    for (var v = -1, e = 0; Maxv273 > e; e++)
        if (0 == v273[e].Exist) {
            v = e;
            break
        }
    return -1 == v ? void famobi.log("v273 No Room !") : (v273[v].Exist = 1, v273[v].x = v322, v273[v].y = Tempy, v273[v].z = Tempz, v273[v].sx = .01 * Tempsx, v273[v].sy = .01 * Tempsy, v273[v].sz = .01 * Tempsz, v273[v].v306y = .01 * v172, v273[v].GroundBounce = TempGroundBounce, v273[v].Alpha = v274, v273[v].AlphaFade = .01 * v274Fade, v273[v].TextureID = v124, v273[v].size = .5 * v283, v273[v].s_size = .1 * Temps_size, v273[v].Rotation = TempRotation, void(v273[v].s_Rotation = .1 * Temps_Rotation))
}

function f78(v) {
    for (var e = 0; Maxv273 > e; e++) 1 == v273[e].Exist && (v273[e].x += v)
}

function f125() {
    gl.depthMask(!1), f183(2);
    for (var v = 0; Maxv273 > v; v++) 1 == v273[v].Exist && (f139(1, 1, 1, v273[v].Alpha), f153(), f186(v273[v].x, v273[v].y, v273[v].z), 0 == v134 && (f189(-v148 - 1.57, 0, 1, 0), f251(30, -1, 0, 0)), f251(v273[v].Rotation, 0, 0, 1), f86(v273[v].TextureID, -v273[v].size, -v273[v].size, +v273[v].size, +v273[v].size), f185(), v273[v].size += v273[v].s_size, v273[v].Alpha -= v273[v].AlphaFade * v262, (v273[v].Alpha < 0 || v273[v].size < 1) && (v273[v].Exist = 0), v273[v].Rotation += v273[v].s_Rotation * v262, v273[v].x += v273[v].sx * v262, v273[v].y += v273[v].sy * v262, v273[v].z += v273[v].sz * v262, v273[v].sy -= v273[v].v306y * v262, v273[v].GroundBounce > 0 && v273[v].y < .5 * v273[v].size && (v273[v].y = .5 * v273[v].size, v273[v].sy = Math.abs(v273[v].sy) * v273[v].GroundBounce));
    gl.depthMask(!0)
}

function f139(v, e, r, f) {
    gl.uniform4f(v101[v116].ColorsUniform, v, e, r, f)
}

function f10() {
    gl.uniformMatrix4fv(v101[v116].v304Uniform, !1, v304), gl.uniformMatrix4fv(v101[v116].v284Uniform, !1, v284), gl.uniformMatrix4fv(v101[v116].v170Uniform, !1, v170), 3 != v116 && (gl.uniform1i(v101[v116].Texture0_Uniform, 0), gl.uniform1i(v101[v116].Texture1_Uniform, 1))
}

function f183(v) {
    1 == v154[v] && (gl.useProgram(shaderProgram[v]), v116 = v)
}

function f70(v) {
    famobi.log("f70[" + v + "]");
    var e = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(e, v240[v]), gl.compileShader(e), gl.getShaderParameter(e, gl.COMPILE_STATUS) || (alert("Error Compile Vertex Shader [" + v + "]" + gl.getShaderInfoLog(e)), alert(v240[v]), v167 = 0);
    var r = gl.createShader(gl.FRAGMENT_SHADER);
    return gl.shaderSource(r, v241[v]), gl.compileShader(r), gl.getShaderParameter(r, gl.COMPILE_STATUS) || (alert("Error Compile Fragment Shader [" + v + "]" + gl.getShaderInfoLog(r)), alert(v241[v]), v167 = 0), shaderProgram[v] = gl.createProgram(), gl.attachShader(shaderProgram[v], e), gl.attachShader(shaderProgram[v], r), gl.linkProgram(shaderProgram[v]), gl.getProgramParameter(shaderProgram[v], gl.LINK_STATUS) ? (gl.useProgram(shaderProgram[v]), v101[v].vertexPositionAttribute = gl.getAttribLocation(shaderProgram[v], "aVertexPosition"), gl.enableVertexAttribArray(v101[v].vertexPositionAttribute), v101[v].textureCoordAttribute = gl.getAttribLocation(shaderProgram[v], "aTextureCoord"), -1 != v101[v].textureCoordAttribute && gl.enableVertexAttribArray(v101[v].textureCoordAttribute), v101[v].v304Uniform = gl.getUniformLocation(shaderProgram[v], "uPMatrix"), v101[v].v284Uniform = gl.getUniformLocation(shaderProgram[v], "uMVMatrix"), v101[v].nMatrixUniform = gl.getUniformLocation(shaderProgram[v], "uNMatrix"), v101[v].v170Uniform = gl.getUniformLocation(shaderProgram[v], "CamMatrix"), v101[v].Texture0_Uniform = gl.getUniformLocation(shaderProgram[v], "Texture0"), v101[v].Texture1_Uniform = gl.getUniformLocation(shaderProgram[v], "Texture1"), v101[v].ColorsUniform = gl.getUniformLocation(shaderProgram[v], "uColors"), v154[v] = 1, void v167--) : (alert("Could not initialise shaders"), void(v167 = 0))
}

function f106(v, e) {
    var r;
    r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), r.onreadystatechange = function() {
        4 == r.readyState && (v240[v] = "\n" + r.responseText + "\n", v154[v] -= 1)
    }, r.open("GET", "datas/shaders/" + e + ".vsh" + v197, !0), r.send()
}

function f107(v, e) {
    var r;
    r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), r.onreadystatechange = function() {
        4 == r.readyState && (v241[v] = "\n" + r.responseText + "\n", v154[v] -= 1)
    }, r.open("GET", "datas/shaders/" + e + ".fsh" + v197, !0), r.send()
}

function f168(v, e) {
    v167++, v154[v] = 0, f106(v, e), f107(v, e)
}

function f72() {
    if (0 == v167) return 1;
    for (var v = 1; 20 > v; v++) - 2 == v154[v] && f70(v);
    return 0
}

function f23() {
    this.vertexPositionAttribute = 0, this.textureCoordAttribute = 0, this.v304Uniform = 0, this.v284Uniform = 0, this.nMatrixUniform = 0, this.v170Uniform = 0, this.Texture0_Uniform = 0, this.Texture1_Uniform = 0, this.ColorsUniform = 0
}

function f145() {
    for (var v = 0; 20 > v; v++) shaderProgram.push, v154.push, v154[v] = 0, v101.push, v101[v] = new f23, v241.push, v240.push;
    f168(1, "simple"), f168(2, "simple_color"), f168(3, "only_color"), f168(4, "shadow"), f168(5, "simple_shadow")
}

function f51() {
    v7 = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v7);
    var v = [-.5, .5, -.2, .5, .5, -.2, .5, -.5, -.2, -.5, -.5, -.2];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(v), gl.STATIC_DRAW), v7.itemSize = 3, v7.numItems = 4, v3 = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v3);
    var e = [0, 0, 1, 0, 1, 1, 0, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(e), gl.STATIC_DRAW), v3.itemSize = 2, v3.numItems = 4, v14 = gl.createBuffer(), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v14);
    var r = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(r), gl.STATIC_DRAW), v14.itemSize = 1, v14.numItems = 6
}

function f42(v) {
    DataToDownload > 0 && DataToDownload--, gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0), gl.bindTexture(gl.TEXTURE_2D, v), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, v.image), 1 == f102(v.image.width, v.image.height) ? (gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.generateMipmap(gl.TEXTURE_2D)) : (gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)), gl.bindTexture(gl.TEXTURE_2D, null)
}

function f110(v) {
    return v > 4096 ? 4096 : v > 2048 ? 4096 : v > 1024 ? 2048 : v > 512 ? 1024 : v > 256 ? 512 : v > 128 ? 256 : v > 64 ? 128 : v > 32 ? 64 : v > 16 ? 32 : 16
}

function f102(v, e) {
    return 16 != v && 32 != v && 64 != v && 128 != v && 256 != v && 512 != v && 1024 != v && 2048 != v && 4096 != v ? 0 : 16 != e && 32 != e && 64 != e && 128 != e && 256 != e && 512 != e && 1024 != e && 2048 != e && 4096 != e ? 0 : 1
}

function f2(v, e, r, f) {
    famobi.log("No Power Of Two[" + i + "] '" + r + "' " + v + "x" + e), v = f110(v), e = f110(e);
    var t = .5 * (v - f.image.width),
        a = .5 * (e - f.image.height),
        n = f.image.width,
        o = f.image.height;
    famobi.log("New Size " + v + "x" + e);
    var s = document.createElement("canvas");
    s.width = v, s.height = e;
    var u = s.getContext("2d");
    u.drawImage(f.image, t, a), f.image.style.width = n, f.image.style.height = o, f.image.src = s.toDataURL()
}

function f116(v, e) {
    var r = "datas/" + e + v197; - 1 != e.search("data:") && (r = e), -1 != e.search("http") && (r = e);
    var f;
    if (-1 != v)
        for (v98[v] = r, f = 0; v144 > f; f++)
            if (v98[f] == r && f != v) return famobi.log("Found Dupliacte Texture[" + f + "] '" + r + "'"), GLTexture[f];
    famobi.log("f116[" + v + "] '" + r + "'"), DataToDownload++;
    var t = gl.createTexture();
    return t.image = new Image, t.image.onload = function() {
        t.image.width, t.image.height;
        f42(t)
    }, t.image.src = r, t
}

function f131() {
    var v;
    for (v; v144 > v; v++) GLTexture.push, v98.push
}

function f160(v) {
    v210 != v && (v210 = v, -1 != v && (gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, GLTexture[v])))
}

function f121(v) {
    gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, GLTexture[v]), gl.activeTexture(gl.TEXTURE0)
}

function f129(v, e, r, f) {
    f153(), f186(v, e, 0), f256(r - v, f - e, 1), f186(.5, .5, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v7), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v7.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v14), f10(1), gl.drawElements(gl.TRIANGLES, v14.numItems, gl.UNSIGNED_SHORT, 0), f185(), v95 += 2
}

function f86(v, e, r, f, t) {
    -1 != v && f160(v), f153(), f186(e, r, 0), f256(f - e, t - r, 1), f186(.5, .5, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v7), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v7.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v3), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v3.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v14), f10(1), gl.drawElements(gl.TRIANGLES, v14.numItems, gl.UNSIGNED_SHORT, 0), f185(), v95 += 2
}

function f165(v) {
    f160(v), f153(), f256(GLTexture[v].image.width, GLTexture[v].image.height, 1), gl.bindBuffer(gl.ARRAY_BUFFER, v7), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v7.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v3), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v3.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v14), f10(1), gl.drawElements(gl.TRIANGLES, v14.numItems, gl.UNSIGNED_SHORT, 0), f185(), v95 += 2
}

function f234(v) {
    for (var e = 0; e < v150.length; e++)
        if (v150[e] == v) return e;
    var e = v150.length;
    v150.push(), v56.push(), v96.push(), v150[e] = v, v96[e] = 0;
    var r = gl.createTexture();
    return r.image = new Image, r.image.crossOrigin = "Anonymous", r.image.onload = function() {
        r.image.width, r.image.height;
        f42(r), v56[e] = r, v96[e] = 1
    }, r.image.src = v, e
}

function f18(v) {
    var e = f234(v);
    return 0 == v96[e] ? 0 : v56[e].image.width
}

function f14(v) {
    var e = f234(v);
    return 0 == v96[e] ? 0 : v56[e].image.height
}

function f9(v) {
    var e = f234(v);
    return 0 == v96[e] ? 0 : parseInt(v56[e].image.style.width)
}

function f5(v) {
    var e = f234(v);
    return 0 == v96[e] ? 0 : parseInt(v56[e].image.style.height)
}

function f27(v, e) {
    var r = f234(v);
    return 0 == v96[r] ? void f160(e) : (v210 = -1, gl.activeTexture(gl.TEXTURE0), void gl.bindTexture(gl.TEXTURE_2D, v56[r]))
}

function f30(v, e) {
    var r = f234(v);
    return 0 == v96[r] ? (f153(), f256(.5, .5, 1), f251(360 * Math.random(), 0, 0, 1), e > 0 && f165(e), void f185()) : (v210 = -1, gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, v56[r]), f153(), f256(v56[r].image.width, v56[r].image.height, 1), gl.bindBuffer(gl.ARRAY_BUFFER, v7), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v7.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v3), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v3.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v14), f10(1), gl.drawElements(gl.TRIANGLES, v14.numItems, gl.UNSIGNED_SHORT, 0), f185(), void(v95 += 2))
}

function f153() {
    var v = mat4.create();
    mat4.copy(v, v284), v135.push(v)
}

function f185() {
    if (0 == v135.length) throw "Invalid pov304!";
    v284 = v135.pop()
}

function f38(v, e, r) {
    LightX = v, LightY = e, LightZ = r
}

function f112() {
    var v = [50, .1, 50, 1];
    v[0] = LightX, v[1] = LightY, v[2] = LightZ;
    var e, r = [0, 1, 0, 0],
        f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    e = r[0] * v[0] + r[1] * v[1] + r[2] * v[2], f[0] = e - v[0] * r[0], f[4] = -v[0] * r[1], f[8] = -v[0] * r[2], f[12] = -v[0] * r[3], f[1] = -v[1] * r[0], f[5] = e - v[1] * r[1], f[9] = -v[1] * r[2], f[13] = -v[1] * r[3] + 1e3, f[2] = -v[2] * r[0], f[6] = -v[2] * r[1], f[10] = e - v[2] * r[2], f[14] = -v[2] * r[3], f[3] = -v[3] * r[0], f[7] = -v[3] * r[1], f[11] = -v[3] * r[2], f[15] = e - v[3] * r[3], mat4.multiply(v284, v284, f)
}

function f253(v) {
    return v * Math.PI / 180
}

function f186(v, e, r) {
    mat4.translate(v284, v284, [v, e, r])
}

function f256(v, e, r) {
    mat4.scale(v284, v284, [v, e, r])
}

function f251(v, e, r, f) {
    mat4.rotate(v284, v284, f253(v), [e, r, f])
}

function f189(v, e, r, f) {
    mat4.rotate(v284, v284, v, [e, r, f])
}

function f50(v) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight), mat4.perspective(v304, f253(v), v176 / v149, 20, 4500), mat4.identity(v284), gl.enable(gl.DEPTH_TEST), gl.disable(gl.BLEND)
}

function f166() {
    v207 = v176 * v142 / v149, 500 > v207 && (v207 = 500), gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight), mat4.ortho(v304, 0, v207, v142, 0, .1, 800), mat4.identity(v284), mat4.identity(v170), gl.disable(gl.DEPTH_TEST), gl.enable(gl.BLEND), gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
}

function f202(v, e, r, f, t, a, n, o, i) {
    v173 = v, v174 = e, v175 = r, mat4.lookAt(v170, [v, e, r], [f, t, a], [n, o, i]), mat4.multiply(v284, v170, v284), v148 = f133(v, r, f, a)
}

function f80(v, e, r, f, t, a, n, o, i) {
    v173 = v, v174 = e, v175 = r, mat4.lookAt(v170, [v, e, r], [f, t, a], [n, o, i]), mat4.multiply(v137, v170, v284)
}

function f122(v, e) {
    var r = Math.sqrt(v[e][A] * v[e][A] + v[e][B] * v[e][B] + v[e][C] * v[e][C]);
    v[e][A] /= r, v[e][B] /= r, v[e][C] /= r, v[e][D] /= r
}

function f105() {
    var v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    v[0] = v284[0] * v304[0] + v284[1] * v304[4] + v284[2] * v304[8] + v284[3] * v304[12], v[1] = v284[0] * v304[1] + v284[1] * v304[5] + v284[2] * v304[9] + v284[3] * v304[13], v[2] = v284[0] * v304[2] + v284[1] * v304[6] + v284[2] * v304[10] + v284[3] * v304[14], v[3] = v284[0] * v304[3] + v284[1] * v304[7] + v284[2] * v304[11] + v284[3] * v304[15], v[4] = v284[4] * v304[0] + v284[5] * v304[4] + v284[6] * v304[8] + v284[7] * v304[12], v[5] = v284[4] * v304[1] + v284[5] * v304[5] + v284[6] * v304[9] + v284[7] * v304[13], v[6] = v284[4] * v304[2] + v284[5] * v304[6] + v284[6] * v304[10] + v284[7] * v304[14], v[7] = v284[4] * v304[3] + v284[5] * v304[7] + v284[6] * v304[11] + v284[7] * v304[15], v[8] = v284[8] * v304[0] + v284[9] * v304[4] + v284[10] * v304[8] + v284[11] * v304[12], v[9] = v284[8] * v304[1] + v284[9] * v304[5] + v284[10] * v304[9] + v284[11] * v304[13], v[10] = v284[8] * v304[2] + v284[9] * v304[6] + v284[10] * v304[10] + v284[11] * v304[14], v[11] = v284[8] * v304[3] + v284[9] * v304[7] + v284[10] * v304[11] + v284[11] * v304[15], v[12] = v284[12] * v304[0] + v284[13] * v304[4] + v284[14] * v304[8] + v284[15] * v304[12], v[13] = v284[12] * v304[1] + v284[13] * v304[5] + v284[14] * v304[9] + v284[15] * v304[13], v[14] = v284[12] * v304[2] + v284[13] * v304[6] + v284[14] * v304[10] + v284[15] * v304[14], v[15] = v284[12] * v304[3] + v284[13] * v304[7] + v284[14] * v304[11] + v284[15] * v304[15], v246[RIGHT][A] = v[3] - v[0], v246[RIGHT][B] = v[7] - v[4], v246[RIGHT][C] = v[11] - v[8], v246[RIGHT][D] = v[15] - v[12], f122(v246, RIGHT), v246[LEFT][A] = v[3] + v[0], v246[LEFT][B] = v[7] + v[4], v246[LEFT][C] = v[11] + v[8], v246[LEFT][D] = v[15] + v[12], f122(v246, LEFT), v246[v308][A] = v[3] + v[1], v246[v308][B] = v[7] + v[5], v246[v308][C] = v[11] + v[9], v246[v308][D] = v[15] + v[13], f122(v246, v308), v246[TOP][A] = v[3] - v[1], v246[TOP][B] = v[7] - v[5], v246[TOP][C] = v[11] - v[9], v246[TOP][D] = v[15] - v[13], f122(v246, TOP), v246[BACK][A] = v[3] - v[2], v246[BACK][B] = v[7] - v[6], v246[BACK][C] = v[11] - v[10], v246[BACK][D] = v[15] - v[14], f122(v246, BACK), v246[v318][A] = v[3] + v[2], v246[v318][B] = v[7] + v[6], v246[v318][C] = v[11] + v[10], v246[v318][D] = v[15] + v[14], f122(v246, v318)
}

function f71(v, e, r, f, t, a) {
    for (var n = 0; 6 > n; n++)
        if (!(v246[n][A] * v + v246[n][B] * t + v246[n][C] * r + v246[n][D] > 0 || v246[n][A] * f + v246[n][B] * t + v246[n][C] * r + v246[n][D] > 0 || v246[n][A] * v + v246[n][B] * e + v246[n][C] * r + v246[n][D] > 0 || v246[n][A] * f + v246[n][B] * e + v246[n][C] * r + v246[n][D] > 0 || v246[n][A] * v + v246[n][B] * t + v246[n][C] * a + v246[n][D] > 0 || v246[n][A] * f + v246[n][B] * t + v246[n][C] * a + v246[n][D] > 0 || v246[n][A] * v + v246[n][B] * e + v246[n][C] * a + v246[n][D] > 0 || v246[n][A] * f + v246[n][B] * e + v246[n][C] * a + v246[n][D] > 0)) return 0;
    return 1
}

function f37(v, e, r, f) {
    for (var t = 0; 6 > t; t++)
        if (v246[t][A] * v + v246[t][B] * e + v246[t][C] * r + v246[t][D] <= -f) return 0;
    return 1
}

function f193() {
    var v = [0, 0, 0, 1],
        e = [0, 0, 0, 0];
    return e[0] = v[0] * v284[0] + v[1] * v284[4] + v[2] * v284[8] + v[3] * v284[12], e[1] = v[0] * v284[1] + v[1] * v284[5] + v[2] * v284[9] + v[3] * v284[13], e[2] = v[0] * v284[2] + v[1] * v284[6] + v[2] * v284[10] + v[3] * v284[14], e[3] = v[0] * v284[3] + v[1] * v284[7] + v[2] * v284[11] + v[3] * v284[15], v[0] = e[0] * v304[0] + e[1] * v304[4] + e[2] * v304[8] + e[3] * v304[12], v[1] = e[0] * v304[1] + e[1] * v304[5] + e[2] * v304[9] + e[3] * v304[13], v[2] = e[0] * v304[2] + e[1] * v304[6] + e[2] * v304[10] + e[3] * v304[14], v[3] = e[0] * v304[3] + e[1] * v304[7] + e[2] * v304[11] + e[3] * v304[15], 0 == v[3] ? (v199 = .5 * v149, v198 = -v176, 0) : (v[0] /= v[3], v[1] /= v[3], v[2] /= v[3], v[3] < 0 && (v[0] *= 2e4, v[1] *= 2e4), v[0] = .5 * v[0] + .5, v[1] = .5 * v[1] + .5, v[2] = .5 * v[2] + .5, v[0] = v[0] * v176, v[1] = v[1] * v149, v[3] > 0 ? (v199 = v[0], v198 = v149 - v[1]) : (v199 = v176 - v[0], v198 = v[1]), 1)
}

function f151() {
    this.Exist = 0, this.xa = 0, this.ya = 0, this.xb = 0, this.yb = 0, this.width = 0, this.height = 0, this.centerX = 0, this.centerY = 0, this.HPx = 0, this.HPy = 0, this.textureID = 0, this.VertexSpritePositionBuffer, this.TextureSpriteCoordBuffer, this.VertexSpriteIndexBuffer
}

function f44(v) {
    v264[v].VertexSpritePositionBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v264[v].VertexSpritePositionBuffer), vertices = [-v264[v].centerX, v264[v].centerY, -.25, v264[v].centerX, v264[v].centerY, -.25, v264[v].centerX, -v264[v].centerY, -.25, -v264[v].centerX, -v264[v].centerY, -.25], gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW), v264[v].VertexSpritePositionBuffer.itemSize = 3, v264[v].VertexSpritePositionBuffer.numItems = 4;
    var e = GLTexture[v264[v].textureID].image.width,
        r = GLTexture[v264[v].textureID].image.height,
        f = v264[v].xa / e,
        t = 1 - v264[v].ya / r,
        a = v264[v].xb / e,
        n = 1 - v264[v].yb / r;
    v264[v].VertexTextureSpriteCoordBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v264[v].VertexTextureSpriteCoordBuffer);
    var o = [f, n, a, n, a, t, f, t];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(o), gl.STATIC_DRAW), v264[v].VertexTextureSpriteCoordBuffer.itemSize = 2, v264[v].VertexTextureSpriteCoordBuffer.numItems = 4, v264[v].VertexSpriteIndexBuffer = gl.createBuffer(), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v264[v].VertexSpriteIndexBuffer);
    var i = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(i), gl.STATIC_DRAW), v264[v].VertexSpriteIndexBuffer.itemSize = 1, v264[v].VertexSpriteIndexBuffer.numItems = 6
}

function f198(v, e, r, f, t, a) {
    v264[v].xa = r, v264[v].ya = f, v264[v].xb = t, v264[v].yb = a, v264[v].textureID = e, v264[v].width = t - r, v264[v].height = a - f, v264[v].centerX = .5 * v264[v].width, v264[v].centerY = .5 * v264[v].height, f44(v), v264[v].Exist = 1
}

function f66(v, e, r) {
    v264[v].HPx = e, v264[v].HPy = r
}

function f111(v, e, r, f, t) {
    return v > -1 ? void(1 == v264[v].Exist && (f160(v264[v].textureID), f153(), f186(e, r, 0), f256(f - e, t - r, 1), f186(.5, .5, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v7), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v264[v].VertexSpritePositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v264[v].VertexTextureSpriteCoordBuffer), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v264[v].VertexTextureSpriteCoordBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v264[v].VertexSpriteIndexBuffer), f10(1), gl.drawElements(gl.TRIANGLES, v264[v].VertexSpriteIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0), f185(), v95 += 2)) : void famobi.log("f111 " + v + " " + x + " " + y + " " + s)
}

function f16(v, e, r, f) {
    if (!(v > -1)) return void famobi.log("f65 " + v + " " + e + " " + r + " " + f);
    var t = v264[v].centerX * f,
        a = v264[v].centerY * f;
    return f195(v, e, r, f), 1 == f136(e - t, r - a - 40, e + t, r + a + 40) ? 1 : 0
}

function f65(v, e, r, f) {
    if (!(v > -1)) return void famobi.log("f65 " + v + " " + e + " " + r + " " + f);
    var t = v264[v].centerX * f,
        a = v264[v].centerY * f;
    return f195(v, e, r, f), 1 == f137(e - t, r - a, e + t, r + a) ? 1 : 0
}

function f195(v, e, r, f) {
    return v > -1 ? void(1 == v264[v].Exist && (f160(v264[v].textureID), f153(), f186(e, r, 0), 1 != f && f256(f, f, 1), f186(v264[v].HPx, v264[v].HPy, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v264[v].VertexSpritePositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v264[v].VertexSpritePositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v264[v].VertexTextureSpriteCoordBuffer), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v264[v].VertexTextureSpriteCoordBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v264[v].VertexSpriteIndexBuffer), f10(1), gl.drawElements(gl.TRIANGLES, v264[v].VertexSpriteIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0), v95 += 2, f185())) : void famobi.log("!!f195 " + v + " " + e + " " + r + " " + f)
}

function f194() {
    for (var v = 0; v219 > v; v++) v264.push(), v264[v] = new f151
}

function f252() {
    this.x, this.y, this.radius, this.Pos, this.sx, this.sy, this.Rot, this.RotSpeed, this.OnGround, this.Sup_x, this.Sup_y, this.Sup_sx, this.Sup_sy, this.GroundY, this.GroundNormal_X, this.GroundNormal_Y
}

function f204() {
    this.z
}

function f243() {
    this.x, this.y, this.Size
}

function f247() {
    this.x, this.z, this.sx, this.sz
}

function f257() {
    this.x, this.y, this.sx = 0, this.sy = 0, this.sR = 0, this.Tyre, this.TyreCount, this.Body_x, this.Body_y, this.FlyingTime, this.RotationStep
}

function f213(v) {
    var e = v262 / v181 * .01;
    if (v188 > 0 && (v70 -= 5, PCar.Tyre[1].sx -= v230 * e * v70, PCar.Tyre[1].sy += v231 * e * v70, PCar.Tyre[0].sx += v230 * e * v70, PCar.Tyre[0].sy -= v231 * e * v70, v188 -= e, v222 > 3 && (f48(0, .1), f64(1, .1), f47(Math.random() > .5 ? 5 : 8), f46(25 + 15 * Math.random(), 5.5 + 5 * Math.random(), 360 * Math.random(), .1 * (25 + 5.5 * Math.random())), f34(PCar.x, 7, PCar.y, .5 * PCar.sx + 10 * Math.random() - 5, 10, -1 - 10 * Math.random()), f146(), v222 = 0), v222 += 7 * e), 0 == v114 ? (PCar.sy = -30, PCar.sx = .5 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), PCar.sR = 10) : (PCar.Body_x = PCar.x, PCar.Body_y = PCar.y, v189 = 0), 0 == v && 1 == v114 && (v272 > 0 && (v272 *= .995), PCar.Body_x += PCar.sx * e, PCar.x += PCar.sx * e, PCar.sx > 0 && (PCar.sx -= e), PCar.sx < 0 && (PCar.sx *= .999), PCar.Body_y += PCar.sy * e, PCar.y += PCar.sy * e, PCar.sy += 2 * e, v254 += PCar.sR * e, PCar.sR > 0 && (PCar.sR -= 12 * e), PCar.sR < 0 && (PCar.sR += 12 * e), PCar.sR *= .9999, v222 > 5 && (f48(0, .1), f64(1, .1), f47(Math.random() > .5 ? 5 : 8), f46(25 + 15 * Math.random(), 5.5 + 5 * Math.random(), 360 * Math.random(), .1 * (25 + 5.5 * Math.random())), f34(PCar.x, 7, PCar.y, .5 * PCar.sx + 10 * Math.random() - 5, 10, -1 - 10 * Math.random()), f146(), v222 = 0), v222 += 7 * e), 1 == f31(PCar.Body_x, PCar.Body_y, 15)) {
        var r = -1 * e;
        return PCar.y += r, 0 == v && (PCar.sR = 4 * -PCar.sx, PCar.sy = -Math.abs(.5 * PCar.sy), PCar.sy < -2 && f219(11)), 0 == v114 && (f99(), f219(6), v29 = 0, v114 = 1, PCar.Tyre[0].sx = PCar.sx, PCar.Tyre[1].sx = PCar.sx, PCar.Tyre[0].sy = -10, PCar.Tyre[1].sy = -25), void f213(v + 1)
    }
}

function f224(v) {
    var e = v262 / v181 * .01,
        r = PCar.Tyre[v].radius;
    v129 = v231, v130 = v230, v189 > 0 ? PCar.Tyre[v].sy += v306 * e * .5 : PCar.Tyre[v].sy += v306 * e, PCar.Tyre[v].x += PCar.Tyre[v].sx * e, PCar.Tyre[v].y += PCar.Tyre[v].sy * e;
    var f = Math.sqrt(PCar.Tyre[v].sx * PCar.Tyre[v].sx + PCar.Tyre[v].sy * PCar.Tyre[v].sy);
    if (0 == f && (f = 1e-9), v189 > 0 && f > 1.5 * v285 && (f = 1.5 * v285), .1 > v189 && f > v285 && (f -= .5 * (f - v285)), 1 == f31(PCar.Tyre[v].x, PCar.Tyre[v].y, r)) {
        v129 = v72, v130 = v76;
        var t = v113 - PCar.Tyre[v].x,
            a = v112 - PCar.Tyre[v].y,
            n = Math.sqrt(t * t + a * a);
        if (0 == n && (n = 1e-9), t /= n, a /= n, PCar.Tyre[v].x = v113 - t * r, PCar.Tyre[v].y = v112 - a * r, PCar.Tyre[v].sx = v129 * f, PCar.Tyre[v].sy = v130 * f, PCar.Tyre[v].OnGround < 80) {
            var o = PCar.Tyre[v].sy;
            PCar.Tyre[v].sy = -Math.abs(.1 * o), PCar.Tyre[v].y -= 2, f219(8), f48(-.01, 1), f64(1, .05), f47(5), f46(30, 5.5, 360, .5), f34(PCar.Tyre[v].x, 10, PCar.Tyre[v].y, .2 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), -2, .2 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy)), f146(), f48(0, 1), f64(1, .5), f47(2), f46(35 + 25 * Math.random(), 5.5, 360 * Math.random(), .1 * (25 + 5.5 * Math.random())), f34(PCar.Tyre[v].x, 0, PCar.Tyre[v].y, .2 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), -3, .2 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy) + 2), f146()
        }
        PCar.Tyre[v].OnGround = 100
    }
    if (PCar.Tyre[v].OnGround > 95) {
        PCar.Tyre[v].RotSpeed = 3 * f * e, v89 = .5;
        var i = 2 + 2 * v156;
        1 == v179 ? (PCar.Tyre[v].sx += v129 * e * i, PCar.Tyre[v].sy += v130 * e * i, v189 > 0 && (PCar.Tyre[v].sx += v129 * e * i * 2, PCar.Tyre[v].sy += v130 * e * i * 2, 0 == v239 && (f48(0, 1), f64(1, .6), f47(4), f46(50, -5, 360 * Math.random(), -10.5), f34(PCar.Tyre[v].x, 10, PCar.Tyre[v].y, .1 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), 0, .1 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy)), f146()))) : (PCar.Tyre[v].sx > 0 && (PCar.Tyre[v].sx -= 1.1 * e), PCar.Tyre[v].sx < 0 && (PCar.Tyre[v].sx = 0))
    } else PCar.Tyre[v].sx > 0 && (PCar.Tyre[v].sx -= .1 * e), PCar.Tyre[v].sx < 0 && (PCar.Tyre[v].sx = 0), PCar.Tyre[v].RotSpeed > 1 && (PCar.Tyre[v].RotSpeed -= .04 * e), 20 > v89 && (v89 += .1 * e);
    PCar.Tyre[v].OnGround -= 5 * e, PCar.Tyre[v].Rot -= PCar.Tyre[v].RotSpeed, PCar.Tyre[v].Sup_x += PCar.Tyre[v].Sup_sx * e, PCar.Tyre[v].Sup_y += PCar.Tyre[v].Sup_sy * e;
    var s = 8.5;
    PCar.Tyre[v].Sup_x < PCar.Tyre[v].x ? PCar.Tyre[v].Sup_sx += e * s : PCar.Tyre[v].Sup_sx -= e * s, PCar.Tyre[v].Sup_y < PCar.Tyre[v].y ? PCar.Tyre[v].Sup_sy += e * s : PCar.Tyre[v].Sup_sy -= e * s, PCar.Tyre[v].Sup_sx *= .99, PCar.Tyre[v].Sup_sy *= .99, PCar.Tyre[v].Sup_x = .99 * PCar.Tyre[v].Sup_x + .01 * PCar.Tyre[v].x, PCar.Tyre[v].Sup_y = .99 * PCar.Tyre[v].Sup_y + .01 * PCar.Tyre[v].y, PCar.Tyre[v].OnGround < 95 && (PCar.Tyre[v].Sup_y = .95 * PCar.Tyre[v].Sup_y + .05 * PCar.Tyre[v].y), PCar.Tyre[v].OnGround < 95 && (PCar.Tyre[v].Sup_x = .95 * PCar.Tyre[v].Sup_x + .05 * PCar.Tyre[v].x);
    var u = 15;
    PCar.Tyre[v].Sup_x < PCar.Tyre[v].x - u && (PCar.Tyre[v].Sup_x = PCar.Tyre[v].x - u), PCar.Tyre[v].Sup_x > PCar.Tyre[v].x + u && (PCar.Tyre[v].Sup_x = PCar.Tyre[v].x + u), PCar.Tyre[v].Sup_y < PCar.Tyre[v].y - u && (PCar.Tyre[v].Sup_y = PCar.Tyre[v].y - u), PCar.Tyre[v].Sup_y > PCar.Tyre[v].y + u && (PCar.Tyre[v].Sup_y = PCar.Tyre[v].y + u)
}

function f228() {
    0 == v79 && (v159 = keysDown[37], Control_Right = keysDown[39], v161 = keysDown[32]), 0 > v272 && (PCar.Tyre[0].OnGround > 90 || PCar.Tyre[1].OnGround > 90) && (v159 = 0, Control_Right = 0, v161 = 0, PCar.Tyre[0].sx *= .995, PCar.Tyre[1].sx *= .995);
    for (var v = (PCar.TyreCount - 1, 0); v181 > v; v++) {
        if (0 == v114) {
            v231 = PCar.Tyre[0].x - PCar.Tyre[1].x, v230 = PCar.Tyre[0].y - PCar.Tyre[1].y;
            var e = Math.sqrt(v231 * v231 + v230 * v230);
            0 == e && (e = 1e-9), v231 /= e, v230 /= e
        }
        var r = v262 / v181 * .01;
        if (1 == v159 ? (2 == v225 && (v225 = 0, f219(14), f113(131, 5)), v70 += v89 * r * 1, 0 > v70 && (v70 += v89 * r * .5), PCar.Tyre[1].Sup_y < PCar.Tyre[1].y + 8 && (PCar.Tyre[1].Sup_y += 9.5 * r, PCar.Tyre[1].Sup_sy *= .5)) : v70 > 0 && (v70 -= v89 * r * .4), 1 == Control_Right ? (2 == v225 && (v225 = 0, f219(14), f113(131, 5)), v70 -= v89 * r * 1, v70 > 0 && (v70 -= v89 * r * .5), PCar.Tyre[0].Sup_y < PCar.Tyre[0].y + 8 && (PCar.Tyre[0].Sup_y += 9.5 * r, PCar.Tyre[0].Sup_sy *= .5)) : 0 > v70 && (v70 += v89 * r * .4), v70 > 3 * v89 && (v70 = 3 * v89), 3 * -v89 > v70 && (v70 = 3 * -v89), PCar.Tyre[1].sx -= v230 * r * v70, PCar.Tyre[1].sy += v231 * r * v70, PCar.Tyre[0].sx += v230 * r * v70, PCar.Tyre[0].sy -= v231 * r * v70, 1 == v161 && (PCar.Tyre[1].OnGround > 95 || PCar.Tyre[0].OnGround > 95) && (1 == v225 && (v225 = 0, f219(14), f113(130, 5)), f219(10), PCar.Tyre[0].sy += -16 * v231, PCar.Tyre[0].sx += -16 * v230 * .1, PCar.Tyre[1].sy += -18 * v231, PCar.Tyre[1].sx += -15 * v230 * .1, PCar.Tyre[0].sx = .5 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), PCar.Tyre[0].sy = .5 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy), PCar.Tyre[1].OnGround = 95, PCar.Tyre[0].OnGround = 95, PCar.Tyre[0].Sup_x = PCar.Tyre[0].x, PCar.Tyre[0].Sup_y = PCar.Tyre[0].y, PCar.Tyre[1].Sup_x = PCar.Tyre[1].x, PCar.Tyre[1].Sup_y = PCar.Tyre[1].y, PCar.Tyre[0].Sup_sx = PCar.Tyre[0].sx, PCar.Tyre[1].Sup_sx = PCar.Tyre[1].sx, PCar.Tyre[0].Sup_sy = 25, PCar.Tyre[1].Sup_sy = -25, v41 = 1), 0 == v114) {
            PCar.Tyre[0].x > PCar.Tyre[1].x ? (v231 = PCar.Tyre[0].x - PCar.Tyre[1].x, v230 = PCar.Tyre[0].y - PCar.Tyre[1].y) : (v231 = PCar.Tyre[1].x - PCar.Tyre[0].x, v230 = PCar.Tyre[1].y - PCar.Tyre[0].y), v231 = PCar.Tyre[0].x - PCar.Tyre[1].x, v230 = PCar.Tyre[0].y - PCar.Tyre[1].y;
            var e = Math.sqrt(v231 * v231 + v230 * v230);
            0 == e && (e = 1e-9), v231 /= e, v230 /= e
        }
        f57(PCar.Tyre[0].x, PCar.Tyre[0].y, PCar.Tyre[0].x, PCar.Tyre[0].y + 1e3), PCar.Tyre[0].GroundY = ColDirY, PCar.Tyre[0].GroundNormal_X = v72, PCar.Tyre[0].GroundNormal_Y = v76, f57(PCar.Tyre[1].x, PCar.Tyre[1].y, PCar.Tyre[1].x, PCar.Tyre[1].y + 1e3), PCar.Tyre[1].GroundY = ColDirY, PCar.Tyre[1].GroundNormal_X = v72, PCar.Tyre[1].GroundNormal_Y = v76, v69 = PCar.Tyre[0].x - PCar.Tyre[1].x, v67 = PCar.Tyre[0].GroundY - PCar.Tyre[1].GroundY;
        var e = Math.sqrt(v69 * v69 + v67 * v67);
        if (0 == e && (e = 1e-9), v69 /= e, v67 /= e, f224(1), f224(0), 0 == v114)
            for (var f = 0; f < PCar.TyreCount - 1; f++) {
                var t = f + 1,
                    a = PCar.Tyre[f].x,
                    n = PCar.Tyre[f].y,
                    o = PCar.Tyre[t].x,
                    i = PCar.Tyre[t].y,
                    s = a - o,
                    u = n - i,
                    e = Math.sqrt(s * s + u * u);
                0 == e && (e = 1e-7), s /= e, u /= e;
                var l = .5 * (PCar.Tyre[f].x + PCar.Tyre[t].x),
                    d = .5 * (PCar.Tyre[f].y + PCar.Tyre[t].y),
                    g = .5 * Math.abs(PCar.Tyre[f].Dist - PCar.Tyre[t].Dist);
                PCar.Tyre[f].x = l + g * s, PCar.Tyre[f].y = d + g * u, PCar.Tyre[t].x = l - g * s, PCar.Tyre[t].y = d - g * u
            }
        if (0 == v114) {
            PCar.x = 0, PCar.y = 0;
            for (var f = 0; f < PCar.TyreCount; f++) PCar.x += PCar.Tyre[f].x, PCar.y += PCar.Tyre[f].y;
            PCar.x /= PCar.TyreCount, PCar.y /= PCar.TyreCount
        }
        f213(0), 0 == v114 && (v254 = f201(PCar.Tyre[0].Sup_x, PCar.Tyre[0].Sup_y, PCar.Tyre[1].Sup_x, PCar.Tyre[1].Sup_y) + 90, v133 = f201(PCar.Tyre[0].x, PCar.Tyre[0].y, PCar.Tyre[1].x, PCar.Tyre[1].y) + 90), PCar.Tyre[1].OnGround > 99 || PCar.Tyre[0].OnGround > 99 ? (0 == v114 && v272 > 0 && PCar.FlyingTime > 11 && Math.abs(Math.round(100 * (v231 - v69)) / 100) < .25 && Math.abs(Math.round(100 * (v230 - v67)) / 100) < .25 && (PCar.Tyre[0].sx *= 1.5, PCar.Tyre[1].sx *= 1.5, f113(3, 15), v41 = 3, v189 = 10, f219(3), v17++, v2 = v49, v4 = v63), v77 = 1, v110 = 1, v49 = 0, v63 = 0, PCar.FlyingTime = 0, PCar.RotationStep = 0) : (PCar.FlyingTime += r, v41 > -7 && (v41 -= 3 * r), 0 == PCar.RotationStep && -.9 > v230 && (PCar.RotationStep = 1), 1 == PCar.RotationStep && -.9 > v231 && (PCar.RotationStep = 2), 1 == PCar.RotationStep && v231 > .9 && (PCar.RotationStep = 0), 2 == PCar.RotationStep && v230 > .9 && (PCar.RotationStep = 3), 2 == PCar.RotationStep && -.9 > v230 && (PCar.RotationStep = 1), 3 == PCar.RotationStep && v231 > .7 && (PCar.RotationStep = 0, f113(1, 10 * v110), v110 *= 2, v63++, 3 == v63 && v15++, 4 == v63 && v10++), 3 == PCar.RotationStep && -.9 > v231 && (PCar.RotationStep = 2), 0 == PCar.RotationStep && v230 > .9 && (PCar.RotationStep = -1), -1 == PCar.RotationStep && -.9 > v231 && (PCar.RotationStep = -2), -1 == PCar.RotationStep && v231 > .9 && (PCar.RotationStep = 0), -2 == PCar.RotationStep && -.9 > v230 && (PCar.RotationStep = -3), -2 == PCar.RotationStep && v230 > .9 && (PCar.RotationStep = -1), -3 == PCar.RotationStep && v231 > .7 && (PCar.RotationStep = 0, f113(2, 10 * v77), v77 *= 2, v49++, 3 == v49 && v13++, 4 == v49 && v8++), -3 == PCar.RotationStep && -.9 > v231 && (PCar.RotationStep = -2))
    }
}

function f226() {
    this.ObjID, this.PosX
}

function f90(v) {
    for (var e = 0; v269 > e; e++)
        if (famobi.log("v168[" + e + "].ObjID=" + v168[e].ObjID), -1 == v168[e].ObjID) {
            var r = 9; - 1 != v && (r = v), v168[e].ObjID = r, v168[e].PosX = v59;
            for (var f = 0; f < OBJ[r].MarkersCount - 1; f++) f20(v59 + OBJ[r].Marker[f].x, -OBJ[r].Marker[f].z, v59 + OBJ[r].Marker[f + 1].x, -OBJ[r].Marker[f + 1].z);
            return v59 += OBJ[r].Max_X, void famobi.log("f90 " + v + " v59" + v59 + " ID" + e)
        }
}

function f182(v) {
    var e = v168[v].ObjID,
        r = OBJ[e].Max_X;
    v168[v].ObjID = -1, v59 -= r, v289 -= r, v216 -= r, v303 -= r, PCar.x -= r, PCar.Body_x -= r, PCar.Tyre[0].x -= r, PCar.Tyre[1].x -= r, PCar.Tyre[0].Sup_x -= r, PCar.Tyre[1].Sup_x -= r, v310 -= r, v226 -= r, v173 -= r, v164 -= r, f78(-r);
    for (var f = 0; FlagCount > f; f++) PFlag[f].x -= r;
    for (var f = 0; v269 > f; f++) - 1 != v168[f].ObjID && (v168[f].PosX -= r);
    for (var f = 0; v255 > f; f++) - 1 != v307[f].ID && (v307[f].x -= r);
    f59(r);
    var t = Math.floor(8 * Math.random()),
        a = 26;
    0 == t && (a = 12), 1 == t && (a = 13), 2 == t && (a = 22), 3 == t && (a = 9), 4 == t && (a = 31), 5 == t && (a = 32), f90(a), f12(-2e3), f94(), f28()
}

function f232() {
    if (1 != v114)
        for (var v = 8.4, e = 0; FlagCount > e; e++) {
            var r = FlagGoalX - FlagX,
                f = FlagGoalZ - FlagZ,
                t = Math.sqrt(r * r + f * f);
            0 == t && (t = 1e-9), r /= t, f /= t;
            var a = FlagX + r * v,
                n = FlagZ + f * v;
            PFlag[e].x = .4 * a + .6 * PFlag[e].x, PFlag[e].z = .4 * n + .6 * PFlag[e].z, PFlag[e].x += PFlag[e].sx * v262, PFlag[e].z += PFlag[e].sz * v262, PFlag[e].sx *= .99, PFlag[e].sz *= .99;
            var o = 3e-4 * v262;
            PFlag[e].x < a - .8 && (PFlag[e].sx += o), PFlag[e].x > a - .1 && (PFlag[e].sx -= o), PFlag[e].z < n - .1 && (PFlag[e].sz += o), PFlag[e].z > n && (PFlag[e].sz -= o), r = PFlag[e].x - FlagX, f = PFlag[e].z - FlagZ, t = Math.sqrt(r * r + f * f), 0 == t && (t = 1e-9), r /= t, f /= t, FlagX += r * v, FlagZ += f * v, FlagGoalX = FlagX + r * v, FlagGoalZ = FlagZ + f * v, f153(), f186(FlagX, 9, FlagZ), f251(90, -1, 0, 0);
            var i = f201(FlagX, FlagZ, FlagGoalX, FlagGoalZ);
            f251(i, 0, 0, 1), f196(FlagCount == e + 1 ? 5 : 4), f185()
        }
}

function f254() {
    var v = .11;
    v66 != v191 && (v66 = v191, 1 == v191 && f188(0, "body_1b.obj"), 2 == v191 && f188(0, "body_2.obj"), 3 == v191 && f188(0, "body_3.obj"), 4 == v191 && f188(0, "body_4.obj"), 5 == v191 && f188(0, "body_5.obj"), 6 == v191 && f188(0, "body_5b.obj"), 7 == v191 && f188(0, "body_5c.obj"), 8 == v191 && f188(0, "body_5d.obj")), v166 != v190 && (v166 = v190, 1 == v190 && f188(1, "tyre_2.obj"), 2 == v190 && f188(1, "tyre_3.obj"), 3 == v190 && f188(1, "tyre_4.obj"), 4 == v190 && f188(1, "tyre_5.obj")), 0 == v114 && (f153(), f186(PCar.x, 0, PCar.y - 2), f251(v133, 0, 1, 0), f196(15), f185()), PCar.Tyre[0].OnGround < 98 ? v292 *= .8 : v292 = 4 * f240(2 * v81), f153(), f186(PCar.x, 0, PCar.y), f251(v292, 1, 0, 0), f251(v254, 0, 1, 0), 0 == v114 && f186(0, 0, v41), f251(-90, 1, 0, 0), f256(v, v, v), 1 == v114 && (f186(0, -170, 0), f251(25, 1, 1, 1)), f196(0), f196(2), v105 > 0 && f196(17 + v105), f185(), v41 *= .94, 0 == v114 && (f153(), f186(PCar.Tyre[0].x, 0, PCar.Tyre[0].y - 2), f251(v302, 0, 1, 0), f256(1, 1, .8 - .05 * v41), f196(16), f185(), f153(), f186(v294, 0, v293), f251(v302 + 180, 0, 1, 0), f196(17), f185(), f153(), f186(PCar.Tyre[1].x, 0, PCar.Tyre[1].y - 2), f251(v299, 0, 1, 0), f256(1, 1, .8 - .05 * v41), f196(16), f185(), f153(), f186(v301, 0, v300), f251(v299 + 180, 0, 1, 0), f196(17), f185());
    for (var e = 0; e < PCar.TyreCount; e++) {
        var r = 2 * f240(10 * v81 + 130 * e);
        PCar.Tyre[0].OnGround < 80 && (r = 0);
        var v = .008 * PCar.Tyre[e].radius;
        f153(), f186(PCar.Tyre[e].x, 0, PCar.Tyre[e].y - 2), f251(r, 1, 0, 0), f256(v, v, v), f251(PCar.Tyre[e].Rot, 0, 1, 0), f196(1), f185()
    }
}

function f212() {
    this.x, this.z, this.nx, this.ny, this.ID = -1
}

function f211(v, e, r) {
    for (var f = 0; v255 > f; f++)
        if (-1 == v307[f].ID) {
            if (-1 == r) {
                if (v192 = 0, f57(e, -1e3, e, -1), v192 = 0, r = ColDirY, r > 5) return;
                if (28 == v && -60 > r) return 0;
                if (33 == v && -60 > r) return 0;
                if (33 == v && (r = 0), 34 == v && -30 > r) return 0
            }
            return v307[f].x = e, v307[f].z = r, 34 == v && (v192 = 0, f57(e - 600, -1e3, e - 600, -1), Math.abs(v307[f].z - ColDirY) > 5) ? 0 : (v307[f].ID = v, 1)
        }
    return 0
}

function f176() {
    f183(2), f139(1, 1, 1, 1);
    for (var v = 0; v255 > v; v++)
        if (-1 != v307[v].ID) {
            var e = 15 * f240(10 * v249 + 5 * v);
            if (0 > e && (e = 0), (28 == v307[v].ID || 33 == v307[v].ID || 34 == v307[v].ID) && (e = 0), f153(), f186(v307[v].x, 0, v307[v].z - e), v307[v].ID < 28 && f251(200 * v249 + 50 * v, 0, 0, 1), 34 == v307[v].ID && f240(20 * v249 + 5 * v) > 0 ? f139(2, 2, 1.5, 1) : f139(1, 1, 1, 1), 34 == v307[v].ID && f256(1, 1, 1 + .05 * f240(15 * v249 + 5 * v)), f196(v307[v].ID), f185(), v307[v].x < -100 && (v307[v].ID = -1), 33 == v307[v].ID && f209(v307[v].x), 23 == v307[v].ID && v307[v].x < PCar.x + 50 && v307[v].x > PCar.x - 50 && v307[v].z - 75 < PCar.y && (f219(7), .1 > v272 && (v1 = 1), v307[v].ID = -1, v272 += 50, v92 = 700, v272 > v153 && (v272 = v153), f48(0, 1), f64(1, .1), f47(8), f46(5 + 15 * Math.random(), 25.5, 360 * Math.random(), .1 * (25 + 5.5 * Math.random())), f34(PCar.x, 0, PCar.y - 15, .2 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), 2, .2 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy)), f146(), f113(38, 0), v42++), 24 == v307[v].ID && v307[v].x < PCar.x + 50 && v307[v].x > PCar.x - 50 && v307[v].z - 75 < PCar.y && (f219(4), v307[v].ID = -1, f184(v199 * v207 / v176, v198 * v142 / v149, 10, -20), f48(0, 1), f64(1, .1), f47(8), f46(5 + 15 * Math.random(), 25.5, 360 * Math.random(), .1 * (25 + 5.5 * Math.random())), f34(PCar.x, 0, PCar.y - 15, .2 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), 2, .2 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy)), f146(), v29 += 5), 34 == v307[v].ID && v307[v].x < PCar.x + 50 && v307[v].x > PCar.x - 50 && v307[v].z - 35 < PCar.y) {
                f219(2), f219(6), v307[v].ID = -1, PCar.Tyre[0].sx = .5 * PCar.sx, PCar.Tyre[1].sx = .5 * PCar.sx, PCar.Tyre[0].sy = -45, PCar.Tyre[1].sy = -45, v70 = 0, v89 = 0, v188 = 10, PCar.Tyre[0].OnGround = 90, PCar.Tyre[1].OnGround = 90, PCar.Tyre[0].y -= 5, PCar.Tyre[1].y -= 5, PCar.sy = -50, PCar.sx = .5 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), f48(0, 5), f64(1, .05), f47(2);
                for (var r = 0; 10 > r; r++) f47(Math.random() > .5 ? 2 : 5), f46(65 + 15 * Math.random(), 3, .1 * (5 * r + 25 + 5.5 * Math.random()), 2 + r), Math.random() > .5 && (f47(12), f46(25 + 15 * Math.random(), 0, 360 * Math.random(), .3 * (2 + r))), f34(PCar.x, -60 + 120 * Math.random(), PCar.y - 15, .5 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx + (-100 + 100 * Math.random())), 2, .1 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy - 20 * r - (-15 + 30 * Math.random()))), f146();
                PCar.Tyre[0].sx *= .2 + .2 * v105, PCar.Tyre[1].sx *= .2 + .2 * v105, v189 = 0
            }
            if (28 == v307[v].ID && 1 == v44 && 10 == v214 && PCar.Tyre[0].OnGround > 95 && PCar.Tyre[1].OnGround > 95 && 0 == v114 && PCar.x < v307[v].x && PCar.x > v307[v].x - 350 && (v44 = 0, v225 = 1, v78 = 0), 28 == v307[v].ID && v307[v].x < PCar.x + 50 && v307[v].x > PCar.x - 50 && v307[v].z - 35 < PCar.y) {
                f219(1), v225 = 0, v307[v].ID = 29, f48(0, 5), f64(1, .05), f47(9);
                for (var r = 0; 6 > r; r++) f46(25 + 15 * Math.random(), 0, .1 * (5 * r + 25 + 5.5 * Math.random()), 2 + r), f34(PCar.x, -60 + 120 * Math.random(), PCar.y - 15, .4 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx + (-100 + 200 * Math.random())), 2, .2 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy - 20 * r - (-15 + 30 * Math.random()))), f146();
                PCar.Tyre[0].sx *= .2 + .2 * v105, PCar.Tyre[1].sx *= .2 + .2 * v105, v189 = 0
            }
        }
}

function f209(v) {
    for (var e = 0; v140 > e; e++)
        if (-2e3 == v291[e].z) return void(v291[e].z = v)
}

function f174() {
    gl.depthMask(!1), gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    for (var v = 0; v140 > v; v++) - 2e3 != v291[v].z && (f153(), f186(v291[v].z, -103, -148), f251(90, 1, 0, 0), f251(35, 0, 1, 0), f256(1.5, .5, 1), f195(v267, 0, 0, 2), f185(), f153(), f186(v291[v].z, 103, -148), f251(90, 1, 0, 0), f251(35, 0, 1, 0), f256(1.5, .5, 1), f195(v267, 0, 0, 2), f185(), v291[v].z = -2e3);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA), gl.depthMask(!0)
}

function f4() {}

function f203() {
    if (v303 != PCar.x) {
        -1 != v303 && (v81 += .01 * (PCar.x - v303)), -1 != v303 && 1 == v114 && (v11 += .01 * (PCar.x - v303)), v81 > v33 && (v33 = v81), v310 -= .9 * (PCar.x - v303), v310 > 3e3 && (v310 -= 3e3), -3e3 > v310 && (v310 += 3e3), v131 += 1e-4 * (PCar.x - v303);
        for (var v = 0; v187 > v; v++) {
            v311[v].x -= (PCar.x - v303) * (.05 + .01 * v) + .01 * (v262 + .1 * v * v262);
            var e = -600;
            v214 > 10 && 19 > v214 && (e = -2200), 10 > v214 && (e = -2200), v311[v].x < e && (v311[v].x = 1500)
        }
        v303 = PCar.x, v180 = -550 + 100 * v131, v155 = -550 + 100 * (v131 - 3), 0 > v131 && (v131 = 0), 1 > v131 && (v290 = 1, Sky_Green = 1, Sky_Blue = 1, v251 = 1, Cloud_Green = 1, Cloud_Blue = 1, v126 = 0), v131 > 1 && (v290 = f263(1, 2, v131 - 1), Sky_Green = f263(1, .9, v131 - 1), Sky_Blue = f263(1, .5, v131 - 1), v251 = f263(1, 1, v131 - 1), Cloud_Green = f263(1, .5, v131 - 1), Cloud_Blue = f263(1, 0, v131 - 1)), v131 > 2.5 && (v290 = f263(v290, .1, 2 * v131 - 5), Sky_Green = f263(Sky_Green, .2, 2 * v131 - 5), Sky_Blue = f263(Sky_Blue, .2, 2 * v131 - 5), v251 = f263(v251, 0, 2 * v131 - 5), Cloud_Green = f263(Cloud_Green, .1, 2 * v131 - 5), Cloud_Blue = f263(Cloud_Blue, .15, 2 * v131 - 5), v126 = f263(0, 1, 2 * v131 - 5)), v131 > 6 && (v290 = f263(v290, 2, v131 - 6), Sky_Green = f263(Sky_Green, .8, v131 - 6), Sky_Blue = f263(Sky_Blue, 1.9, v131 - 6), v251 = f263(v251, 1, v131 - 6), Cloud_Green = f263(Cloud_Green, .5, v131 - 6), Cloud_Blue = f263(Cloud_Blue, 1, v131 - 6), v126 = f263(1, 0, v131 - 6), v180 = -550 + 100 * (9 - v131)), v131 > 7 && (v290 = f263(v290, 1, v131 - 7), Sky_Green = f263(Sky_Green, 1, v131 - 7), Sky_Blue = f263(Sky_Blue, 1, v131 - 7), v251 = f263(v251, 1, v131 - 7), Cloud_Green = f263(Cloud_Green, 1, v131 - 7), Cloud_Blue = f263(Cloud_Blue, 1, v131 - 7), v180 = -550 + 100 * (9 - v131), v131 > 10 && (v131 -= 10))
    }
    v297 = f263(1, v290, .3), Obj_Green = f263(1, Sky_Green, .3), Obj_Blue = f263(1, Sky_Blue, .3), v227 = .99 * v227 + 25e-5 * (v180 + 450), v227 > 3 && (v227 = 3), .2 > v227 && (v227 = .2), f153(), f186(PCar.x, 0, PCar.y), f251(v292, 1, 0, 0), f251(v254, 0, 1, 0), f186(0, 0, v41), FlagMatrix = v284, f185();
    var r = 0,
        f = -20;
    0 == v114 && (PCar.Body_x = r * FlagMatrix[0] + f * FlagMatrix[8] + FlagMatrix[12], PCar.Body_y = r * FlagMatrix[2] + f * FlagMatrix[10] + FlagMatrix[14]), r = -20, f = -20, FlagX = r * FlagMatrix[0] + f * FlagMatrix[8] + FlagMatrix[12], FlagZ = r * FlagMatrix[2] + f * FlagMatrix[10] + FlagMatrix[14], r = -20, f = -1e3, FlagGoalX = r * FlagMatrix[0] + f * FlagMatrix[8] + FlagMatrix[12], FlagGoalZ = r * FlagMatrix[2] + f * FlagMatrix[10] + FlagMatrix[14], r = 10, f = -12.2, v294 = r * FlagMatrix[0] + f * FlagMatrix[8] + FlagMatrix[12], v293 = r * FlagMatrix[2] + f * FlagMatrix[10] + FlagMatrix[14], v302 = f201(v294, v293, PCar.Tyre[0].x, PCar.Tyre[0].y - 2), r = -10, f = -12.2, v301 = r * FlagMatrix[0] + f * FlagMatrix[8] + FlagMatrix[12], v300 = r * FlagMatrix[2] + f * FlagMatrix[10] + FlagMatrix[14], v299 = f201(v301, v300, PCar.Tyre[1].x, PCar.Tyre[1].y - 2), v226 -= 1, v226 > 1e3 && (v226 -= 1e3), -1e3 > v226 && (v226 += 1e3), v216 != v173 && (v216 = v173), f50(20), gl.clear(gl.DEPTH_BUFFER_BIT), f202(v173, v174, v175, v164, v158, v157, 0, -1, 0), f153(), f186(PCar.x, PCar.y, 0), f193(), f185(), f251(-90, 1, 0, 0), gl.disable(gl.DEPTH_TEST), f183(2), f139(v290, Sky_Green, Sky_Blue, 1), f153(), f186(v173, -400, 370 + .7 * v174), f251(20, 0, 0, 1), f196(11), f153(), f251(90, 1, 0, 0), gl.enable(gl.BLEND), v126 > .01 && (f139(1, 1, 1, v126), f195(43, 900, -495, -.8), f195(43, 800, -444, 1), -280 > v155 && f195(41, 970, v155, .5)), f139(1, 1, 1, 1), -280 > v180 && f195(40, 870, v180, 1), gl.disable(gl.BLEND), f185(), f139(v290, Sky_Green, Sky_Blue, 1), f196(25), gl.enable(gl.BLEND), f139(v251, Cloud_Green, Cloud_Blue, 1), f153(), f251(90, 1, 0, 0);
    for (var v = 0; v187 > v; v++) f195(42, v311[v].x, v311[v].y + v174 * (.02 + .005 * v), v311[v].Size);
    f185(), f139(1, 1, 1, 1), gl.disable(gl.BLEND), f185(), gl.enable(gl.DEPTH_TEST), f183(1), f176(), f183(1), f254(), f232(), gl.disable(gl.BLEND);
    var t = -1;
    f153(), f251(-90, 1, 0, 0);
    for (var v = 0; v269 > v; v++) - 1 != v168[v].ObjID && (f183(2), f139(v297, Obj_Green, Obj_Blue, 1), f153(), f186(v168[v].PosX, -.5, 0), f196(v168[v].ObjID), f183(5), f139(.7 * v290, .6 * Sky_Green, .3 * Sky_Blue, v227), f77(v168[v].ObjID), f185(), v168[v].PosX < PCar.x - 400 - OBJ[v168[v].ObjID].Max_X && (t = v));
    var a = PCar.x + 100 * (v125 - v81);
    v81 > v125 + 20 && (v125 += 50, v25 = 1), v81 > v125 && 1 == v25 && (f219(9), v25 = 0), f183(2), f139(v297, Obj_Green, Obj_Blue, 1), f153(), f186(a, -.5, 0), f196(27), gl.depthMask(!1), gl.enable(gl.BLEND), f153(), f227(v234), f186(0, 165, -265), f251(-25, 0, 1, 0), f256(.6, -.8, 1), f139(0, 0, 0, 1), f144(v125 + "m"), f185(), gl.depthMask(!0), gl.disable(gl.BLEND), f183(5), f139(.7 * v290, .6 * Sky_Green, .3 * Sky_Blue, 1), f77(27), f185(), f185(), f183(2), gl.depthMask(!1), gl.enable(gl.BLEND);
    for (var v = 0; v < PCar.TyreCount; v++)
        if (PCar.Tyre[v].GroundY - PCar.Tyre[v].y - 10 < 20) {
            var n = 1 - (PCar.Tyre[v].GroundY - PCar.Tyre[v].y - 10) / 20;
            f139(1, 1, 1, n), f153(), f186(PCar.Tyre[v].x, 3, PCar.Tyre[v].GroundY - 2), f251(90, 0, 0, 1);
            var o = f201(0, 0, PCar.Tyre[v].GroundNormal_X, PCar.Tyre[v].GroundNormal_Y) - 90;
            f251(o, 1, 0, 0), f86(3, -31, -5 - 10 * n, 31, 5 + 10 * n), f185()
        }
    if (f139(1, 1, 1, 1), gl.depthMask(!0), gl.disable(gl.BLEND), f183(1), f183(2), f139(v290, Sky_Green, Sky_Blue, 1), f153(), f186(v226, 700 + 60 * f240(2 * v249), 1), f251(-90, 1, 0, 0), f256(1, 1, 1.2), f196(10), f185(), f139(1, 1, 1, 1), gl.enable(gl.BLEND), f174(), f125(), v189 > 0) {
        f183(2), gl.depthMask(!1), gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        for (var v = 0; v < PCar.TyreCount; v++) {.008 * PCar.Tyre[v].radius;
            f153(), f186(PCar.Tyre[v].x, -21, PCar.Tyre[v].y), f251(90, 1, 0, 0), f139(1, .5 * f240(105 * v249 + 5 * v) + .8, .5 * f240(195 * v249 + 9 * v) + .8, v189), f195(3, -35, 0, .4), f186(0, 0, -42), f139(1, .5 * f240(103 * v249 + 6 * v) + .8, .5 * f240(196 * v249 + 7 * v) + .8, v189), f195(3, -35, 0, .4), f185()
        }
        v189 -= .005 * v262, gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA), gl.depthMask(!0)
    }
    gl.disable(gl.DEPTH_TEST), gl.disable(gl.BLEND), f183(1), f139(1, 1, 1, 1), -1 != t && f182(t)
}

function f170() {
    this.x, this.y, this.sx = 0, this.sy = 0, this.Exist = 0, this.R
}

function f157() {
    for (var v = 0; v238 + 1 > v; v++) v323.push, v323[v] = new f170
}

function f184(v, e, r, f) {
    for (var t = 0; v238 + 1 > t; t++)
        if (0 == v323[t].Exist) return v323[t].Exist = 1, v323[t].x = v, v323[t].y = e, v323[t].sx = r, v323[t].sy = f, void(v323[t].R = 360 * Math.random());
    v171 += 5, v36 += 5
}

function f159() {
    f166(), f183(2), f139(1, 1, 1, 1);
    for (var v = 0; v238 > v; v++) 1 == v323[v].Exist && (f153(), f186(v323[v].x, v323[v].y, 0), f251(v323[v].R, 0, 0, 1), f195(2, 0, 0, .6), f185(), v323[v].x += v323[v].sx * v262 * .01, v323[v].y += v323[v].sy * v262 * .01, v323[v].R += Math.abs(v323[v].sx + v323[v].sy) * v262 * .01, v323[v].x > 50 && (v323[v].sx -= .05 * v262), v323[v].y < v142 - 50 && (v323[v].sy += .05 * v262), v323[v].y > v142 - 50 && (v323[v].y = v142 - 50, v323[v].sy = .25 * -Math.abs(v323[v].sy)), v323[v].x < 50 && (v323[v].x = 50, v323[v].sx = .25 * Math.abs(v323[v].sx)), v323[v].x < 55 && v323[v].y > v142 - 55 && (v323[v].Exist = 0, v171 += 5, v36 += 5, f219(4)))
}

function f115() {
    this.TextID, this.Coins, this.y, this.Timer, this.Position
}

function f81() {
    for (var v = 0; v123 + 1 > v; v++) v317.push, v317[v] = new f115, v317[v].Timer = -1
}

function f113(v, e) {
    for (var r = 0; v123 + 1 > r; r++)
        if (-1 == v317[r].Timer) return f219(12), v317[r].TextID = v, v317[r].Coins = e, v317[r].Timer = 100, 104 == v && (v317[r].Timer = 300), void(v317[r].y = 190);
    v171 += e, v36 += e
}

function f101() {
    for (var v = 0; v123 > v; v++) v317[v].Position = v123;
    for (var v = 0; v123 > v; v++)
        for (var e = 0; v123 > e; e++) v != e && v317[v].Timer >= v317[e].Timer && v317[v].Timer > -1 && v317[e].Timer > -1 && v317[v].Position--;
    f166(), f183(2), f139(0, 0, 0, 1), f227(v234), v194 > 0 ? f186(.5 * v207, v142 - 287, 0) : f186(.5 * v207, v142 - 190, 0), f256(.7, .8, 1);
    for (var r, f, t = 0, e = 0; v123 + 1 > e; e++)
        for (var v = 0; v123 > v; v++)
            if (v317[v].Position == e && v317[v].Timer > -1) {
                var a = v287[v317[v].TextID];
                v317[v].Coins > 0 && (a = a + " " + v317[v].Coins + "¶"), f153(), f186(0, v317[v].y, 0), f139(0, 0, 0, 1), v131 > 2.8 && 6 > v131 && f139(2, 2, 2, 1), v317[v].Coins > 15 && f240(30 * v249) > 0 && f139(3, 3, .5, 1), 104 == v317[v].TextID && f240(50 * v249) > 0 && f139(8, 8, 8, 1), 104 == v317[v].TextID && f240(50 * v249) < 0 && f139(0, .5, 0, 1);
                var n = f144(a);
                if (f139(1, 1, 1, 1), v317[v].Coins > 0 && f195(1, -n + 30, 56, .6), f185(), v317[v].y = .8 * v317[v].y + 70 * -t * .2, v317[v].Timer -= .05 * v262, v317[v].Timer < 0) {
                    v317[v].Timer = -1;
                    var r = .5 * v207 + .7 * (-n + 30),
                        f = v142 - 180 + .8 * v317[v].y + 35;
                    for (e = 0; e < v317[v].Coins; e += 5) f184(r + 3 * e, f + 3 * e, 10 + .5 * (v + e), -48 + 2.5 * (v + e))
                }
                t++
            }
}

function f60(v, e, r) {
    var f = 0;
    0 == r && (f = v156), 1 == r && (f = v191), 2 == r && (f = v190), 3 == r && (f = v244), 4 == r && (f = v105), f195(12, v, e, .29), f195(f83(f), v - 1, e + 15, .29), f195(18 + r, v, e - 8, .29), e += 14, 1 == f225(f, r) ? f195(63, v, e, .25) : 1 == f207(f, r) && f195(62, v, e, .25 + .005 * f240(25 * v249))
}

function f11(v, e, r, f) {
    return f139(.5, .5, .5, .5), r *= .5, f111(32, v - r, e, v - r + 27, e + 91), f111(33, v - r + 27, e, v + r - 27, e + 91), f111(32, v + r, e, v + r - 27, e + 91), f139(1, 1, 1, .25), f153(), f227(v234), f186(v, e + 8, 0), f256(.65, .7, 1), f144(v287[f]), f185(), 0
}

function f87(v, e, r, f) {
    return f139(1, 1, 1, 1), r *= .5, f111(32, v - r, e, v - r + 27, e + 91), f111(33, v - r + 27, e, v + r - 27, e + 91), f111(32, v + r, e, v + r - 27, e + 91), f153(), f227(v234), f186(v, e + 13, 0), f256(.65, .7, 1), f139(0, 0, 0, 1), f144(v287[f]), f139(1, 1, 1, 1), f186(0, -8, 0), f144(v287[f]), f185(), 1 == f137(v - r - 5, e - 5, v + r + 5, e + 91 + 5) ? 1 : 0
}

function f169(v, e, r, f, t) {
    var a = 1;
    f139(1, 1, 1, 1), f111(23, v, e, v + 84 * a, e + 117 * a), f111(24, v + 84 * a, e, r - 84 * a, e + 117 * a), f111(25, r - 84 * a, e, r, e + 117 * a), f111(26, v, e + 117 * a, v + 84 * a, f - 71 * a), f111(27, v + 84 * a, e + 117 * a, r - 84 * a, f - 71 * a), f111(28, r - 84 * a, e + 117 * a, r, f - 71 * a), f111(29, v, f - 71 * a, v + 84 * a, f), f111(30, v + 84 * a, f - 71 * a, r - 84 * a, f), f111(31, r - 84 * a, f - 71 * a, r, f), v184 > .99 && (v184 = 1), .8 > v184 || -1 != t && (f153(), f227(v234), f186(.5 * (v + r), e + 28, 0), f256(.65, .7, 1), f144(v287[t]), f185())
}

function f54() {
    if (f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), v121 += .1 * v262, v121 > 100) {
        if (v102++, v121 = 0, v75 = 2e4 - v33, 0 == v102 && f220(0), 1 == v102)
            for (e = 0; e < Math.abs(Math.round(.1 * v81)); e += 5) f184(.5 * v207 + 200, 190, 10 + .5 * e, -48 + 2.5 * e);
        2 == v102 && (v24 += v81, f43())
    }
    var v = 6;
    if (1 == v114 && (v = 106), f169(.5 * v207 - 250 * v184, v184, .5 * v207 + 250 * v184, 700 * v184, v), v184 = .8 * v184 + .2, !(.95 > v184)) {
        v102 > 1 && 1 == f87(.5 * v207, 565, 398, 9) && (f130(), v28 = 1, v102 = 0, v121 = 0, v184 = 0, v214 = 1), f153(), f227(v281), f186(.5 * v207 - 190, 112, 0), f153(), f256(.5, .5, 1), f139(0, 0, 0, .8), f144(v287[13]), f256(1.6, 1.6, 1), f186(0, 41, 0), f139(2, 2, 2, .8), f144(Math.abs(Math.round(v81)) + "m"), v102 > 0 && (f227(FontRight), f186(473, 0, 0), f144(Math.abs(Math.round(.1 * v81)) + "¶"), f139(1, 1, 1, 1), f195(1, 35, 58, .6), f227(v281)), f185(), f153(), f186(0, 111, 0), f256(.5, .5, 1), f139(0, 0, 0, .8), f144(v287[107]), f185();
        for (var e = 0; 3 > e; e++) f148(e, -12, 183 + 43 * e, 1);
        f148(-1, -12, 350.7, 1), f185()
    }
}

function f82() {
    f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), f169(.5 * v207 - 200 * v184, 100 * v184, .5 * v207 + 200 * v184, 460 * v184, 10), v184 = .8 * v184 + .2, .8 > v184 || (1 == f87(.5 * v207, 212, 307, 11) && (v184 = 0, v214 = 10), 1 == f87(.5 * v207, 316, 307, 12) && (f99(), f130(), v28 = 0, v184 = 0, v214 = 1))
}

function f83(v) {
    return v > 4 ? 58 + v - 5 : v + 13
}

function f225(v, e) {
    return v > 3 && 1 != e ? 1 : v > 7 && 1 == e ? 1 : 0
}

function f155(v, e) {
    return 0 == e ? v196[v] : 1 == e ? v83[v] : 2 == e ? v195[v] : 3 == e ? v107[v] : 4 == e ? v143[v] : 1e6
}

function f207(v, e) {
    return v171 < f155(v, e) ? 0 : 1
}

function f123() {
    var v = 0;
    0 == v54 && (v = v156), 1 == v54 && (v = v191), 2 == v54 && (v = v190), 3 == v54 && (v = v244), 4 == v54 && (v = v105), v > 4 && 1 != v54 && (v = 4), v > 8 && 1 == v54 && (v = 8);
    var e = f155(v, v54);
    if (f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), f169(.5 * v207 - 300 * v184, 100 * v184, .5 * v207 + 300 * v184, 499 * v184, 15), v184 = .8 * v184 + .2, !(.99 > v184)) {
        f153(), f186(.5 * v207 - 179, 264, 0);
        f195(f83(v), -1, 68, 1), f195(18 + v54, 0, -8, 1), f185(), f153(), f227(v281), f186(.5 * v207 - 90, 220, 0), f256(.55, .6, 1), "en" != v146 && f256(.8, .9, 1), f139(0, 0, 0, .8), f144(v287[16 + v54]), f185(), f153(), f227(v281), f186(.5 * v207 - 90, 270, 0), f256(.4, .4, 1), "en" != v146 && f256(.8, .9, 1), f139(2, 2, 2, .8), f144(v287[21 + v54]), f139(0, 0, 0, .5), f186(0, 95, 0), f144(v287[26 + v54]), f185();
        var r = (new Date).getTime() / 1e3;
        if (0 == f225(v, v54) && e > v171 && v120 + 60 > r) {
            f11(.5 * v207 + 106, 367, 300, 33);
            var f = Math.floor(v120 + 61 - r) + "";
            f153(), f227(v234), f186(.5 * v207 + 106, 370, 0), f256(.8, .8, 1), f139(2, 2, 2, 1), f144(f), f185()
        }
        if (0 == f225(v, v54) && e > v171 && r > v120 + 60 && 1 == f87(.5 * v207 + 106, 367, 300, 33)) {
            v120 = r, v215 = -1, v313 = -1, v312 = -1;
            for (var t = 0; 30 > t; t++) f184(.5 * v207 + 106, 367, 10 * Math.random() - 5, -5 - 3 * t);
            return void window.famobi.rewardedAd()
        }
        0 == f225(v, v54) && v171 >= e && 1 == f87(.5 * v207 + 133, 367, 250, 31) && (PCar.Tyre[0].sy += -5, PCar.Tyre[1].sy += -6, PCar.Tyre[0].sx = .5 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), PCar.Tyre[0].sy = .5 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy), PCar.Tyre[1].OnGround = 95, PCar.Tyre[0].OnGround = 95, PCar.Tyre[0].Sup_x = PCar.Tyre[0].x, PCar.Tyre[0].Sup_y = PCar.Tyre[0].y, PCar.Tyre[1].Sup_x = PCar.Tyre[1].x, PCar.Tyre[1].Sup_y = PCar.Tyre[1].y, PCar.Tyre[0].Sup_sx = 0, PCar.Tyre[1].Sup_sx = 0, PCar.Tyre[0].Sup_sy = 25, PCar.Tyre[1].Sup_sy = -25, v41 = 1, v171 -= e, v184 = 0, v214 = 5, f219(14), 0 == v54 && v156++, 1 == v54 && v191++, 2 == v54 && v190++, 3 == v54 && v244++, 4 == v54 && v105++, f130(), 0 == v54 && Stanislic_SendInfo("Upgrade, Engine LVL" + v156), 1 == v54 && Stanislic_SendInfo("Upgrade, Bodyshell LVL" + v191), 2 == v54 && Stanislic_SendInfo("Upgrade, Wheels LVL" + v190), 3 == v54 && Stanislic_SendInfo("Upgrade, Bullbar LVL" + v244), 4 == v54 && Stanislic_SendInfo("Upgrade, Tank LVL" + v105)), f139(1, 1, 1, 1), f240(10 * v249) > 0 && f139(1.5, 1.5, 0, 1), 1 == f136(.5 * v207 + 256 - 50, 80, .5 * v207 + 256 + 50, 190) && (v184 = 0, v214 = 5), f139(1, 1, 1, 1), f195(34, .5 * v207 + 256, 138, .9), 0 == f225(v, v54) && (f195(1, .5 * v207 - 261, 400, .7), f153(), f227(v281), f186(.5 * v207 - 253, 366, 0), f256(.8, .9, 1), f139(0, 0, 0, .6), f144("¶" + e), f186(0, -4, 0), f139(1, 1, 1, 1), e > v171 && f139(1, 0, 0, 1), f144("¶" + e), f185()), f139(1, 1, 1, 1), 1 == f225(v, v54) && (f227(v234), f186(.5 * v207, 366, 0), f256(.6, .7, 1), f139(0, 0, 0, 1), f144(v287[32]), f185(), f139(1, 1, 1, 1))
    }
}

function f85() {
    if (f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), f169(.5 * v207 - 200 * v184, v184, .5 * v207 + 200 * v184, 700 * v184, 110), v184 = .8 * v184 + .2, !(.99 > v184)) {
        f139(1, 1, 1, 1), f183(1), v265 = v312 > 195 && 315 > v312 && v313 > .5 * v207 - 100 && .5 * v207 + 100 > v313 && 1 == v178 ? "http://famobi.com" : "", f183(2), 1 == f87(.5 * v207, 566, 300, 119) && (v247 = 0);
        var v = 71;
        f186(.5 * v207, 140, 0), f153(), f227(v234), f256(.3, .35, 1), f139(2, 2, 2, 1), f144(v287[111]), f186(0, 78, 0), f256(.8, .8, 1), f139(0, 0, 0, .5), f144("Exclusively published by"), f153(), f139(0, 0, 0, 1), f186(0, 307, 0), f256(3, 3, 1), f30("datas/textures/famobi.png", 10), f139(1, 1, 1, 1), f185(), f185(), f186(0, 111, 0), f186(0, v, 0), f153(), f227(v234), f256(.3, .35, 1), f139(2, 2, 2, 1), f144(v287[113]), f186(0, 78, 0), f256(.8, .8, 1), f139(0, 0, 0, .5), f144(v287[114]), f185(), f186(0, v, 0), f153(), f227(v234), f256(.3, .35, 1), f139(2, 2, 2, 1), f144(v287[115]), f186(0, 78, 0), f256(.8, .8, 1), f139(0, 0, 0, .5), f144(v287[116]), f185(), f186(0, v, 0), f153(), f227(v234), f256(.3, .35, 1), f139(2, 2, 2, 1), f144(v287[117]), f186(0, 78, 0), f256(.8, .8, 1), f139(0, 0, 0, .5), f144(v287[118]), f185()
    }
}

function f62() {
    return 1 == v247 ? void f85() : (f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), f169(.5 * v207 - 200 * v184, v184, .5 * v207 + 200 * v184, 600 * v184, 34), v184 = .8 * v184 + .2, void(.99 > v184 || (f139(1, 1, 1, 1), f240(10 * v249) > 0 && f139(1.5, 1.5, 0, 1), 1 == f136(.5 * v207 + 169 - 50, 0, .5 * v207 + 169 + 50, 100) && (v247 = 0, v184 = 0, v214 = 5, f130(), v75 = 2e4 - v33, f163(0, 0, 0)), f195(34, .5 * v207 + 169, 48, .9), f139(1, 1, 1, 1), f139(0, 0, 0, .8), f153(), f227(v281), f186(.5 * v207 - 44, 195, 0), f256(.4, .4, 1), f144(v287[36]), f185(), f139(1, 1, 1, 1), 1 == f65(35 + Pref_User_Sound, .5 * v207 - 102, 214, .6) && (Pref_User_Sound = window.famobi_paused ? 0 : 1 - Pref_User_Sound, f219(5), 0 == Pref_User_Sound && Stanislic_SendInfo("Sound Switch OFF"), 1 == Pref_User_Sound && Stanislic_SendInfo("Sound Switch ON")), f139(0, 0, 0, .8), f153(), f227(v281), f186(.5 * v207 - 44, 295, 0), f256(.4, .4, 1), f144(v287[35]), f185(), f139(1, 1, 1, 1), 1 == f65(35 + v61, .5 * v207 - 102, 314, .6) && (v61 = 1 - v61, (0 == v61 || window.famobi_paused) && f99(), 1 != v61 || window.famobi_paused || f100(-1), f219(5), 0 == v61 && Stanislic_SendInfo("Music Switch OFF"), 1 == v61 && Stanislic_SendInfo("Music Switch ON")), 1 == f87(.5 * v207, 463, 300, 37) && (v184 = 0, v247 = 1))))
}

function f126() {
    if (f166(), f183(2), f139(1, 1, 1, 1), f86(7, 0, 0, v207, v142), f169(.5 * v207 - 300 * v184, v184, .5 * v207 + 300 * v184, 635 * v184, 108), v184 = .8 * v184 + .2, !(.99 > v184)) {
        f139(1, 1, 1, 1), f240(10 * v249) > 0 && f139(1.5, 1.5, 0, 1), f195(34, .5 * v207 + 269, 48, .9), f139(1, 1, 1, 1), f227(v281), f153(), f186(.5 * v207 - 251, 113, 0), f256(.5, .5, 1), f139(0, 0, 0, .8), f144(v287[109]), f185(), v97 = f108(0, v97, .5 * v207 + 1, 163, -1);
        var v = .5 * v207 - 211,
            e = .5 * v207 + 210,
            r = v,
            f = 296;
        f153(), v45 > 0 && 25 > v45 || (v45 = 1);
        for (var t = 44, a = 1; 25 > a; a++) a == v45 && (f183(3), f139(1, 1, 0, 1), f129(r - t, f - t, r + t, f + t)), 1 == v215 && v313 > r - t && r + t > v313 && v312 > f - t && f + t > v312 && (v215 = -1, v45 = a), f183(1), f153(), f139(1, 1, 1, 1), f186(r, f, 0), f256(.6, .6, 1), f30("datas/textures/avatars/" + a + ".jpg", 10), f139(1, 1, 1, 1), f185(), r += 84, r > e && (r = v, f += 83);
        f153(), f183(2), 1 == f136(.5 * v207 + 269 - 50, 0, .5 * v207 + 269 + 50, 100) && (v201 = -5e3, TextField_y = -5e3, v247 = 0, v184 = 0, v214 = 5, f130(), 1 == v61 && Stanislic_SendInfo("User Name Edited"))
    }
}

function f88() {
    f183(2), gl.depthMask(!1), f153(), f186(358, 56, -206), f139(1, 1, 1, 1), f251(90, 1, 0, 0), f227(v234), f256(.35, .4, 1), f139(0, 0, 0, .75), f144(v287[9]), f186(0, -3, 0), f139(2, 2, 2, .75), f144(v287[9]), f185(), f153(), f186(362, -38, -218), f139(1, 1, 1, 1), f251(90, 1, 0, 0), f60(-65, 90, 0), f60(0, 90, 1), f60(65, 90, 2), f60(-65, 141, 3), f60(65, 141, 4), f185(), gl.depthMask(!0), 1 == v115 && (1 == f137(.5 * v207 - 270, 190, .5 * v207 - 80, 343) && (v214 = 13, v54 = 0), 1 == f137(.5 * v207 - 80, 190, .5 * v207 + 80, 343) && (v214 = 13, v54 = 1), 1 == f137(.5 * v207 + 80, 190, .5 * v207 + 270, 343) && (v214 = 13, v54 = 2), 1 == f137(.5 * v207 - 270, 343, .5 * v207 - 80, 490) && (v214 = 13, v54 = 3), 1 == f137(.5 * v207 + 80, 343, .5 * v207 + 270, 490) && (v214 = 13, v54 = 4))
}

function f148(v, e, r, f) {
    if (v75 = 2e4 - v33, f220(0), v71 > 0) {
        v270 = "";
        for (var t = 0; 20 > t; t++) 20 > t && (v270 += f132(t, 0) + ";" + f98(t, 0) + ";123;" + (2e4 - f104(t, 0)) + ",");
        v71 = 0
    }
    var a = "1",
        n = "",
        o = 0,
        i = v + 1;
    if (v > -1) {
        var s = v270.split(","),
            u = (s.length, s[v].split(";"));
        u.length;
        n = u[0], a = u[1], o = u[3]
    } else n = v97 + "", a = v45 + "", o = Math.floor(v33) + "", i = ScoresTable[0].PlayerRank;
    1 > o || o > 19999 || (f139(1, 1, 1, 1), f153(), f186(e, r, 0), f256(f, f, 1), f153(), f186(34, 0, 0), f256(.3, .3, 1), f30("datas/textures/avatars/" + a + ".jpg", 10), f185(), f195(44, 0, 0, .5), f153(), f186(-1, -15, 0), f256(.3, .3, 1), f227(v234), f186(0, 0, -1), i > 99 && f256(.7, 1, 1), i > 999 && f256(.9, 1, 1), f139(3, 3, 3, .8), f144(i + ""), f186(-3, -3, -1), f139(0, 0, 0, 1), f144(i + ""), f185(), f139(1.8, .5625, 47 / 256, 1), v214 > 10 && f139(0, 0, 0, .5), f153(), f186(56, -25, 0), f256(.4, .5, 1), f227(v281), f144(n), f185(), f139(1.5, 1.5, 1.5, 1), f153(), f186(326, -25, 0), 12 == v214 && f186(77, 0, 0), f256(.4, .5, 1), f227(FontRight), f144(o + "m"), f185(), f185(), v100++)
}

function f124() {
    v64 -= .01 * v262, 1 == v178 && v313 > .5 * v207 - 350 && .5 * v207 + 350 > v313 && (v64 -= .1 * v262, 1 == v215 && Stanislic_SendInfo("High scores Scroll")), f183(2), gl.depthMask(!1), f153(), f186(-481, 56, -282), f139(1, 1, 1, 1), f251(90, 1, 0, 0), f227(v234), f256(.3, .4, 1), f139(0, 0, 0, .75), f144(v287[105]), f186(0, -3, 0), f139(2, 2, 2, .75), f144(v287[105]), f185(), f153(), f186(-578, -28, -218), f139(1, 1, 1, 1), f251(90, 1, 0, 0), gl.enable(gl.DEPTH_TEST), v100 = 0;
    for (var v = -1; 20 > v; v++) {
        var e = 25.5 * v + v64 + 110; - 1 == v && (e -= 15), e > -56 && 240 > e && f148(v, 0, e, .6)
    }
    0 == v100 && (v64 = 111), gl.enable(gl.DEPTH_TEST), gl.depthMask(!0), f185()
}

function f263(v, e, r) {
    return 0 >= r ? v : r >= 1 ? e : e * r + v * (1 - r)
}

function f134() {
    v171 = parseInt(f246("pl_Coins")), (null == v171 || isNaN(v171)) && (v171 = 200), v33 = parseInt(f246("pl_BestDist")), (null == v33 || isNaN(v33)) && (v33 = 0), v24 = parseInt(f246("pl_TotalDist")), (null == v24 || isNaN(v24)) && (v24 = 0), v156 = parseInt(f246("pl_Engine")), (null == v156 || isNaN(v156)) && (v156 = 0), v191 = parseInt(f246("pl_Shell")), (null == v191 || isNaN(v191)) && (v191 = 0), v190 = parseInt(f246("pl_Wheel")), (null == v190 || isNaN(v190)) && (v190 = 0), v244 = parseInt(f246("pl_Tank")), (null == v244 || isNaN(v244)) && (v244 = 0), v105 = parseInt(f246("pl_BullBar")), (null == v105 || isNaN(v105)) && (v105 = 0), v74 = parseInt(f246("pl_Missions")), (null == v74 || isNaN(v74)) && (v74 = 0), Pref_User_Sound = parseInt(f246("UserSound")), (null == Pref_User_Sound || isNaN(Pref_User_Sound)) && (Pref_User_Sound = 1), v61 = parseInt(f246("UserMusic")), (null == v61 || isNaN(v61)) && (v61 = 1), v45 = parseInt(f246("UserAvatar")), (null == v45 || isNaN(v45)) && (v45 = 1), v270 = f246("pl_ScoreTop") + "___", v270.length < 10 && (v270 = "ROBERTO;textures/avatar_default.png;123456789;757,DAN;textures/avatar_default.png;12345679;661,JULIEN;textures/avatar_default.png;1234589;600,BJORN;textures/avatar_default.png;123789;559,JEAN PIERRE;1;12389;478,SAMUEL;textures/avatar_default.png;1289;409,IGGY;textures/avatar_default.png;129;313,PABLO;textures/avatar_default.png;123;222,RICKY;textures/avatar_default.png;121;208,LEA;textures/avatar_default.png;120;136,EMMA;textures/avatar_default.png;12;135,")
}

function f130() {
    f233("pl_Coins", v171), f233("pl_BestDist", v33), f233("pl_TotalDist", v24), f233("pl_Engine", v156), f233("pl_Shell", v191), f233("pl_Wheel", v190), f233("pl_Tank", v244), f233("pl_BullBar", v105), -1 != v74 && f233("pl_Missions", v74), v270.length > 10 && f233("pl_ScoreTop", v270), f233("UserName", v97), f233("UserAvatar", v45), f233("UserSound", Pref_User_Sound), f233("UserMusic", v61)
}

function f143() {
    if (-1 != v194) {
        if (1 == v128 && 1 == v122 && 1 == v111 && (0 == v90 && (f113(104, 250 * (v91 + 1)), f219(14)), v90 += .01 * v262, v84 = 1, v87 = 1, v88 = 1, v194 = 1, v90 > 20)) return v74++, f130(), v128 = 0, v122 = 0, v111 = 0, v84 = 0, v87 = 0, v88 = 0, v90 = 0, v13 = 0, v15 = 0, v8 = 0, v10 = 0, v49 = 0, v63 = 0, v17 = 0, v36 = 0, v42 = 0, v1 = 0, v29 = 0, v2 = 0, v4 = 0, void(v194 = -1);
        var v = 0;
        switch (v156 > 3 && v++, v191 > 6 && v++, v190 > 3 && v++, v244 > 3 && v++, v105 > 3 && v++, 1 == v52 && (f219(13), v52 = 0), v91) {
            case 0:
                0 == v128 && v49 > 0 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v36 >= 150 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v17 > 0 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 1:
                0 == v128 && v63 > 0 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v81 >= 300 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v17 > 1 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 2:
                0 == v128 && v49 > 1 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v36 >= 500 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v156 + v191 + v190 + v244 + v105 > 1 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 3:
                0 == v128 && v63 > 1 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v42 > 1 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v24 > 1e3 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 4:
                0 == v128 && v63 > 0 && v49 > 0 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v81 >= 500 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v29 >= 100 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 5:
                0 == v128 && v49 > 2 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v42 > 2 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v156 + v191 + v190 + v244 + v105 > 2 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 6:
                0 == v128 && v63 > 2 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v29 > 9 && 1 == v114 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v171 >= 1e3 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 7:
                0 == v128 && v49 > 3 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v2 > 0 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v81 >= 600 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 8:
                0 == v128 && v63 > 3 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v24 >= 5e3 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v49 > 4 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 9:
                0 == v128 && v1 > 0 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v63 > 4 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v156 + v191 + v190 + v244 + v105 > 3 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 10:
                0 == v128 && v81 >= 700 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v49 > 4 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v42 > 2 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 11:
                0 == v128 && v2 > 2 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v156 + v191 + v190 + v244 + v105 > 7 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v63 > 5 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 12:
                0 == v128 && v36 >= 600 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v > 0 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v49 > 5 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 13:
                0 == v128 && v24 >= 1e4 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v13 > 2 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v > 2 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 14:
                0 == v128 && v42 > 4 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v15 > 2 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v36 >= 2e3 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 15:
                0 == v128 && v4 > 0 && v10 > 0 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v11 >= 40 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v8 > 1 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 16:
                0 == v128 && v > 2 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v10 > 1 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v13 > 2 && v63 > 0 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 17:
                0 == v128 && v36 >= 3e3 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v > 3 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v8 > 0 && v2 > 0 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1);
                break;
            case 18:
                0 == v128 && v81 >= 1e4 && (v128 = 1, v84 = 1, v194 = 1, v52 = 1), 0 == v122 && v8 > 1 && (v122 = 1, v87 = 1, v194 = 1, v52 = 1), 0 == v111 && v15 > 0 && v49 > 0 && (v111 = 1, v88 = 1, v194 = 1, v52 = 1)
        }
        v2 = 0, v4 = 0
    }
}

function f141() {
    if (-1 != v194 && !(-1 == v91 || v91 > 18 || (f143(), -1 == v91 || v91 > 18))) {
        var v = 3 * v91,
            e = v + 1,
            r = v + 2,
            f = -1,
            t = -1,
            a = .7;
        if (v147 > -90) {
            if (f153(), f186(v207 - .8 * v147 * a, v142 - 177 * a, 0), f256(.8 * a, .8 * a, 1), f111(39, -28, 0, v147 + 50, v108), f227(v281), f256(.6, .7, 1), f186(0, -91, 0), f139(.3, .3, .3, 1), v194 > .6) f144(v287[39] + " " + (v91 + 1));
            else {
                var n = v287[123] + 250 * (v91 + 1) + "¶";
                f240(25 * v249) > 0 && f139(.7, .7, .7, 1), f144(n);
                var o = f156(n);
                f139(1, 1, 1, 1), f195(1, o + 30, 56, .6)
            }
            f186(0, 91, 0), -1 != v && (t = f156(v287[40 + v]), f139(1, 1, 1, 1), v84 > 0 && f240(50 * v249) > 0 && (v84 -= .001 * v262, f139(3, 3, 0, 2)), f195(37 + v128, -52, 54, 1.2), 0 == v128 ? f139(2, 2, 2, .5) : f139(1, 1, 1, 1), v84 > 0 && f240(50 * v249) > 0 && f139(3, 3, 0, 2), f144(v287[40 + v]), f186(0, 82, 0), t > f && (f = t)), -1 != e && (t = f156(v287[40 + e]), f139(1, 1, 1, 1), v87 > 0 && f240(50 * v249) > 0 && (v87 -= .001 * v262, f139(3, 3, 0, 2)), f195(37 + v122, -52, 54, 1.2), 0 == v122 ? f139(2, 2, 2, .5) : f139(1, 1, 1, 1), v87 > 0 && f240(50 * v249) > 0 && f139(3, 3, 0, 2), f144(v287[40 + e]), f186(0, 82, 0), t > f && (f = t)), -1 != r && (t = f156(v287[40 + r]), f139(1, 1, 1, 1), v88 > 0 && f240(50 * v249) > 0 && (v88 -= .001 * v262, f139(3, 3, 0, 2)), f195(37 + v111, -52, 54, 1.2), 0 == v111 ? f139(2, 2, 2, .5) : f139(1, 1, 1, 1), v88 > 0 && f240(50 * v249) > 0 && f139(3, 3, 0, 2), f144(v287[40 + r]), f186(0, 82, 0), t > f && (f = t)), f185(), f139(1, 1, 1, 1)
        }(v84 > 0 || v87 > 0 || v88 > 0) && (v194 = 1), v108 = 47, -1 != v && (v108 += 49), -1 != e && (v108 += 49), -1 != r && (v108 += 49), f *= .6, f += 25, 455 > f && (f = 455), 0 >= v194 && (f = -100), v147 = .3 * f + .7 * v147, v194 > 0 && (v194 -= 2e-4 * v262)
    }
}

function f167(v, e, r) {
    var f = v.substring(e + 1),
        t = v.substring(0, e);
    return 0 == e && (t = ""), t + r + f
}

function f119() {
    f134(), v147 = -500, v91 = v74, v91 > 18 && (v91 = -1)
}

function f56() {
    f166(), gl.clear(gl.COLOR_BUFFER_BIT), f183(2), f139(1, 1, 1, 1), f153(), f139(1, 1, 1, 1), f186(.5 * v207, 300, 0), f256(.6, .6, 1), 1 == v79 ? f30("datas/textures/larger_device.png", 10) : f30("datas/textures/larger_window.png", 10), f139(1, 1, 1, 1), f185(), f153(), f186(.5 * v207, 380, 0), f227(v234), f256(.4, .5, 1), f139(2, 2, 2, 1), 1 == v79 ? f144(v287[120]) : (f144(v287[121]), f186(0, 69, 0), f144(v287[122])), f185(), f139(1, 1, 1, 1)
}

function f117() {
    1 == v114 && (v225 = 0), v194 = 0;
    var v, e, r, f;
    1 == v225 && (r = 0 == v79 ? 125 : 124, f = 126, v = "datas/textures/tutorial_jump1.png", e = 0 == v79 ? "datas/textures/tutorial_jump3.png" : "datas/textures/tutorial_jump2.png"), 2 == v225 && (r = 0 == v79 ? 128 : 127, f = 129, v = "datas/textures/tutorial_flip1.png", e = 0 == v79 ? "datas/textures/tutorial_flip3.png" : "datas/textures/tutorial_flip2.png"), f227(v234), f139(0, 0, 0, 2), f153(), f86(7, 0, 0, v207, 115 * v78), f86(7, 0, v142 - 115 * v78, v207, v142), f139(1, 1, 1, 1);
    var t = 105 * v78;
    f153(), f186(t, t, 0), f256(.85, .85, 1), f251(10, 0, 0, -1), f30(v, 1), f185(), f240(20 * v249) > 0 && f139(1.5, 1.5, 1.5, 1), f153(), f186(v207 - t, t, 0), f256(.85, .85, 1), f251(10, 0, 0, 1), f30(e, 2), f185(), f186(.5 * v207, v142 - 112 * v78, 0), f153(), 800 > v207 && f256(.8, 1, 1), f256(.5, .6, 1), f139(1, 1, 1, 1);
    var a = 1.25 + .5 * f240(5 * v249);
    f139(a, a, 0, 1), f144(v287[r]), f186(0, 69, 0), f144(v287[f]), f185(), f139(1, 1, 1, 1), f185(), v78 = .9 * v78 + .1
}

function f245() {
    if (v249 += .001 * v262, v249 > 360 && (v249 -= 360), !(DataToDownload > 0 || 1 != v106)) {
        switch (106 == v250 && (v268 = 1 - v268, v250 = 0), v225 > 0 ? (v262 *= v119, v119 = .9 * v119 + .025 * .1) : v119 = .9 * v119 + .1, f166(), f183(1), v152 != v214 && v214 > 1 && (v152 = v214, f219(0)), v214) {
            case 0:
                f134(), f198(0, 6, 3, 3, 143, 131), f198(1, 6, 147, 3, 278, 124), f198(2, 6, 282, 3, 402, 73), f198(3, 6, 406, 3, 656, 77), f198(4, 6, 12, 135, 212, 211), f198(5, 6, 233, 135, 433, 211), f198(6, 6, 445, 80, 552, 216), f198(7, 6, 827, 2, 1021, 196), f198(8, 6, 3, 215, 173, 369), f198(9, 6, 177, 215, 346, 369), f198(10, 6, 351, 220, 532, 374), f198(11, 6, 660, 2, 786, 114), f198(12, 6, 823, 200, 1021, 376), f198(13, 6, 556, 118, 723, 157), f198(14, 6, 556, 161, 723, 200), f198(15, 6, 556, 204, 723, 243), f198(16, 6, 556, 247, 723, 286), f198(17, 6, 556, 290, 723, 327), f198(18, 6, 3, 373, 136, 515), f198(19, 6, 140, 373, 306, 515), f198(20, 6, 310, 378, 436, 505), f198(21, 6, 440, 378, 601, 497), f198(22, 6, 605, 378, 788, 491), f198(23, 6, 2, 519, 85, 635), f198(24, 6, 88, 519, 111, 635), f198(25, 6, 114, 519, 197, 635), f198(26, 6, 2, 639, 85, 664), f198(27, 6, 88, 639, 111, 664), f198(28, 6, 114, 639, 197, 664), f198(29, 6, 2, 668, 85, 737), f198(30, 6, 88, 668, 111, 737), f198(31, 6, 114, 668, 197, 737), f198(32, 6, 732, 130, 758, 220), f198(33, 6, 760, 130, 792, 220), f198(34, 6, 727, 223, 820, 312), f198(35, 6, 3, 740, 164, 831), f198(36, 6, 3, 835, 164, 926), f198(37, 6, 9, 939, 80, 1014), f198(38, 6, 80, 939, 160, 1014), f198(39, 6, 795, 384, 1024, 489), f198(40, 6, 822, 624, 1019, 828), f198(41, 6, 621, 624, 818, 828), f198(42, 6, 177, 832, 1019, 1012), f198(43, 6, 200, 520, 1019, 620), f198(44, 6, 168, 758, 235, 829), f198(45, 6, 459, 687, 616, 828);
                var v = 200,
                    e = 28.33;
                f198(46, 6, v, 624, v + e, 751), v += e, f198(47, 6, v, 624, v + e, 751), v += e, f198(48, 6, v, 624, v + e, 751), v += e, f198(49, 6, v, 624, v + e, 751), v += e, f198(50, 6, v, 624, v + e, 751), v += e, f198(51, 6, v, 624, v + e, 751), v += e, f198(52, 6, v, 624, v + e, 751), v += e, f198(53, 6, v, 624, v + e, 751), v += e, f198(54, 6, v, 624, v + e, 751), v += e, f198(55, 11, 1, 1, 122, 126), f198(56, 11, 124, 1, 245, 126), f198(57, 11, 247, 1, 368, 126), f198(58, 6, 824, 3, 991, 42), f198(59, 6, 824, 46, 991, 85), f198(60, 6, 824, 89, 991, 128), f198(61, 6, 824, 132, 991, 171), f198(62, 6, 307, 758, 377, 828), f198(63, 6, 382, 758, 452, 828), f81(), f157();
                for (var r = 0; FlagCount + 1 > r; r++) PFlag.push, PFlag[r] = new f247, PFlag[r].sx = 0, PFlag[r].sz = 0, PFlag[r].x = 0, PFlag[r].z = 0;
                v214 = 1;
                break;
            case 1:
                f134(), v223 = 0, v289 = 392, v276 = 227, v220 = 0, v173 = 0, v174 = -50, v175 = -500, v164 = 0, v158 = 0, v157 = 0, v25 = 1, v114 = 0, v188 = 0, v49 = 0, v63 = 0, v13 = 0, v15 = 0, v8 = 0, v10 = 0, v36 = 0, v17 = 0, v42 = 0, v1 = 0, v29 = 0, v128 = 0, v122 = 0, v111 = 0, v84 = 0, v87 = 0, v88 = 0, v90 = 0, f119(), v125 = 50, v89 = 0, v70 = 0, v81 = 0, v11 = 0, PCar = new f257, PCar.Tyre = new Array, PCar.TyreCount = 0, PCar.x = 0, PCar.y = -67, 1 == v28 && (PCar.x = v139 + 70), v303 = PCar.x, PCar.Tyre.push, PCar.Tyre[PCar.TyreCount] = new f252, PCar.Tyre[PCar.TyreCount].Dist = 0, PCar.Tyre[PCar.TyreCount].x = PCar.x + PCar.Tyre[PCar.TyreCount].Dist, PCar.Tyre[PCar.TyreCount].y = PCar.y, PCar.Tyre[PCar.TyreCount].sx = 0, PCar.Tyre[PCar.TyreCount].sy = 0, PCar.Tyre[PCar.TyreCount].Sup_sx = 0, PCar.Tyre[PCar.TyreCount].Sup_sy = 0, PCar.Tyre[PCar.TyreCount].Sup_x = 0, PCar.Tyre[PCar.TyreCount].Sup_y = 0, PCar.Tyre[PCar.TyreCount].radius = 10, PCar.Tyre[PCar.TyreCount].Rot = 0, PCar.Tyre[PCar.TyreCount].OnGround = 0, PCar.Tyre[PCar.TyreCount].RotSpeed = 0, PCar.TyreCount++, PCar.Tyre.push, PCar.Tyre[PCar.TyreCount] = new f252, PCar.Tyre[PCar.TyreCount].Dist = -30, PCar.Tyre[PCar.TyreCount].x = PCar.x + PCar.Tyre[PCar.TyreCount].Dist, PCar.Tyre[PCar.TyreCount].y = PCar.y, PCar.Tyre[PCar.TyreCount].sx = 0, PCar.Tyre[PCar.TyreCount].sy = 0, PCar.Tyre[PCar.TyreCount].Sup_sx = 0, PCar.Tyre[PCar.TyreCount].Sup_sy = 0, PCar.Tyre[PCar.TyreCount].Sup_x = 0, PCar.Tyre[PCar.TyreCount].Sup_y = 0, PCar.Tyre[PCar.TyreCount].radius = 10, PCar.Tyre[PCar.TyreCount].Rot = 0, PCar.Tyre[PCar.TyreCount].OnGround = 0, PCar.Tyre[PCar.TyreCount].RotSpeed = 0, PCar.TyreCount++, v168 = new Array, v59 = 0;
                for (var r = 0; v269 > r; r++) v168.push, v168[r] = new f226, v168[r].ObjID = -1;
                v307 = new Array;
                for (var r = 0; v255 > r; r++) v307.push, v307[r] = new f212, v307[r].id = -1;
                v311 = new Array;
                for (var r = 0; v187 > r; r++) v311.push, v311[r] = new f243, v311[r].x = -1e3 + 100 * Math.random() + 700 * r, v311[r].y = -395 - 60 * Math.random(), v311[r].Size = .25 + .4 * Math.random();
                v291 = new Array;
                for (var r = 0; v140 > r; r++) v291.push, v291[r] = new f204, v291[r].z = -2e3;
                v115 = 0 == v28 ? 0 : 1, -1 == v28 && (v115 = 2), f84(), f21(-5e3, -5e3, 1e4, 1e3), f49(100, 6), f90(30), f90(3), f90(14), f90(26), f90(9), f90(26), f90(31), f90(31), f28(), f100("title"), v214 = 5, v228 = 0, v159 = 0, Control_Right = 0, v161 = 0, 2 == v28 && (PCar.x = 300, PCar.Tyre[0].x = PCar.x + PCar.Tyre[0].Dist, PCar.Tyre[1].x = PCar.x + PCar.Tyre[1].Dist, f219(9), l = 0, v28 = 0, v228 = 0, v214 = 9, v250 = 0, v215 = -1);
                break;
            case 5:
                if (v114 = 0, v188 = 0, PCar.Tyre[1].y < -100 && (PCar.Tyre[1].sy += .1 * v262), PCar.Tyre[0].y < -100 && (PCar.Tyre[0].sy += .1 * v262), v272 = 0, (0 == v115 || 2 == v115) && (v179 = 0, PCar.Tyre[0].x = .9 * PCar.Tyre[0].x + 1.5, PCar.Tyre[1].x = .9 * PCar.Tyre[1].x - 1, PCar.x > 50 && (PCar.Tyre[1].sx *= .8), PCar.x > 50 && (PCar.Tyre[0].sx *= .99)), 1 == v115 && (v179 = PCar.x < 100 ? 1 : 0, PCar.x < 100 && (PCar.Tyre[0].sx += .1 * v262), PCar.Tyre[1].x > v139 + 25 && (PCar.Tyre[1].x = .5 * (PCar.Tyre[1].x + v139 + 25)), PCar.Tyre[1].x < v139 + 25 && (PCar.Tyre[1].x = .999 * PCar.Tyre[1].x + .001 * (v139 + 25)), PCar.x > v139 && (PCar.Tyre[1].sx *= .8), PCar.x > v139 && (PCar.Tyre[0].sx *= .99)), v289 = PCar.x, v276 = PCar.y, 0 == v115 && (v131 *= .95, v173 = f263(v173, v289 + 430, v228), v174 = f263(v174, v276, v228), v175 = f263(v175, -680, v228), v164 = f263(v164, v289, v228), v158 = f263(v158, v276 - 72, v228), v157 = f263(v157, 0, v228), 1 > v228 && (v228 += 5e-4 * v262)), 1 == v115 && (v131 *= .95, v173 = f263(v173, v289, v228), v174 = f263(v174, v276 - 24, v228), v175 = f263(v175, -680, v228), v164 = f263(v164, v289, .9), v158 = f263(v158, v276 - 40, v228), v157 = f263(v157, 0, v228), 1 > v228 && (v228 += 1e-5 * v262), 1 == v28 && 1 > v228 && (v228 += 3e-4 * v262)), 2 == v115 && (v131 = .9 * v131 + .25, v173 = f263(v173, -478, v228), v174 = f263(v174, v276, v228), v175 = f263(v175, -787, v228), v164 = f263(v164, -478, v228), v158 = f263(v158, v276 - 98, v228), v157 = f263(v157, 0, v228), 1 > v228 && (v228 += 25e-5 * v262)), gl.disable(gl.BLEND), f153(), f228(), f203(), gl.enable(gl.BLEND), gl.enable(gl.DEPTH_TEST), f153(), f186(0, 30, -206), f139(1, 1, 1, 1), f251(90, 1, 0, 0), f256(.4, .4, 1), f165(1), f185(), v164 > 3 && f88(), 2 > v164 && f124(), gl.disable(gl.DEPTH_TEST), f185(), f166(), f183(2), f139(1, 1, 1, 1), 0 == v115) {
                    var f = "datas/textures/html5games_logo.png";
                    1 == Monetisation_IsFamobi && (f = famobi.getMoreGamesButtonImage());
                    var t = f18(f),
                        a = f14(f);
                    if (t > 8 && a > 8) {
                        var n = 200;
                        v142 > v207 && (n = 100);
                        var o = n / t,
                            i = n / a,
                            s = o;
                        o > i && (s = i), f153(), f186(15, v142 - 15, 0), f256(s, s, 1), f186(.5 * t, .5 * -a, 0), f30(f), f185(), t * s + 15 > v313 && v312 > v142 - 15 - a * s && 1 == v178 ? 1 == Monetisation_IsFamobi ?  null : v265 = "http://html5games.com/" : v265 = ""
                    }
                }
                if (2 != v115 && f195(8, v207 - 54, 54, .6), 2 != v115 && f195(9, v207 - 54, 155, .6), 1 == v115 && PCar.x < 300 && f139(1, 1, 1, .5), (1 == v115 || 0 == v115) && (f153(), f186(v207 - 87 - 180, v142 - 71, 0), f256(-1, 1, 1), f195(10, 0, 0, .9), f185()), f240(10 * v249) > 0 && f139(2.5, 2.5, 0, 1), 1 == v115 && PCar.x < 300 && f139(1, 1, 1, .5), f195(10, v207 - 87, v142 - 71, .9), 2 == v115) {
                    f153(), f186(v207 - 16, 3, 0), f227(FontRight), f256(.8, .9, 1), f139(0, 0, 0, 1), f144(v97);
                    var u = .8 * f156(v97);
                    f185(), f139(1, 1, 1, 1), f153(), f186(v207 - 72 - u, 49, 0), f256(.59, .49, 1), f30("datas/textures/avatars/" + v45 + ".jpg", 10), f185(), f240(10 * v249) > 0 && f139(2.5, 2.5, 0, 1), f195(45, v207 - 72 - u, 54, .64), f139(1, 1, 1, 1), 1 == f137(v207 - 140 - u, 0, v207, 120) && (v214 = 15)
                }
                var l = f137(v207 - 180, v142 - 160, v207, v142),
                    d = f137(v207 - 180 - 180, v142 - 160, v207 - 180, v142),
                    g = f137(v207 - 100, 0, v207, 95),
                    C = f137(v207 - 100, 101, v207, 195);
                1 == g && 2 != v115 && (v214 = 14), 1 == C && 2 != v115 && (v115 = 2), v179 = PCar.x < 150 ? 1 : 0, PCar.Tyre[1].x > 335 && 1 == v115 && 1 == d && PCar.x > 300 && (f219(9), d = 0, v28 = 0, v228 = 0, v115 = 0, v250 = 0, v215 = -1), 1 == v115 && 1 == l && PCar.x > 300 && (f219(9), l = 0, v28 = 0, v228 = 0, v214 = 9, v250 = 0, v215 = -1), 0 == v115 && 1 == l && (f219(9), l = 0, v28 = 0, v228 = 0, v115 = 1, v250 = 0, v215 = -1), 0 == v115 && 1 == d && (f219(9), d = 0, v28 = 0, v228 = 0, v115 = 2, v250 = 0, v215 = -1, v64 = 0, Stanislic_SendInfo("High scores table")), 2 == v115 && 1 == l && (f219(9), l = 0, v28 = 0, v228 = 0, v115 = 0, v250 = 0, v215 = -1);
                break;
            case 9:
                Stanislic_SendInfo("Game started"), v131 = 1e-5, v303 = PCar.x, v153 = 150 + 55 * v244 + 11 * v191, v272 = v153, v285 = 35 + 7 * v156, v306 = 1.8 * (1.35 - .025 * v191 + .01 * v105), v73 = -2e3 - 6e3 * Math.random(), v37 = -2e3 - 6e3 * Math.random(), v27 = 0, v22 = 0, v32 = 0, v194 = 1, v214 = 10, f100("ingame");
            case 10:
                ;
                v272 > 0 ? v179 = 1 : (v179 = 0, v306 = 1.5, PCar.Tyre[0].sx *= .999, PCar.Tyre[1].sx *= .9999), .1 > v272 && Math.abs(PCar.Tyre[0].sy) < 1 && Math.abs(PCar.Tyre[0].sx) < 1 && PCar.FlyingTime < 2 && (v214 = 12, v75 = 2e4 - v33, f163(0, 2e4 - Math.floor(v81), 0), window.famobi.submitHighscore("", Math.round(v81))), 1 > v92 && (v272 -= .006 * v262), f228(), v53 = .99 * v53 + .005 * (PCar.Tyre[0].sx + PCar.Tyre[1].sx), v289 = PCar.x, v276 = .9 * v276 + .1 * PCar.y, v165 = .9 * v165 - .25 * (PCar.Tyre[0].sy + PCar.Tyre[1].sy), v165 > 0 && (v165 = 0), -90 > v165 && (v165 = -90);
                var y = .5 * PCar.y;
                if (-180 > y && (y = -180), y -= 300 * (1 - v119), PCar.FlyingTime > 20 && v99 > -450 ? v99 -= .03 * v262 : v99 *= .99, 1 == v114 && (v99 = 0, v165 = 0, y = 0), v173 = f263(v173, v289 - 536, v228), v174 = f263(v174, v276 - 100 + 2 * v165 + v99, v228), v175 = f263(v175, -600 - y, v228), v164 = f263(v164, v289 + 50, v228), v158 = f263(v158, v276, v228), v157 = f263(v157, 0, v228), 1 > v228 && (v228 += 1e-4 * v262), gl.disable(gl.BLEND), f153(), f203(), 1 == v43 && PCar.Tyre[0].sy < -12 && PCar.Tyre[1].sy < -12 && PCar.Tyre[0].GroundY - PCar.Tyre[0].y > 100 && (v43 = 0, v225 = 2, v78 = 0), gl.enable(gl.BLEND), 1 == v79 && 1 == v114 ? (v159 = 0, Control_Right = 0, v161 = 0) : 1 == v79 && 0 == v114 && v81 > 3 && (f166(), f183(2), 1 == v159 || 2 == v225 && f240(50 * v249) < 0 ? f139(1, 1, 1, 1) : f139(1, 1, 1, .3), v159 = f16(55, 77, v142 - 240, 1.5), 1 == Control_Right || 2 == v225 && f240(50 * v249) > 0 ? f139(1, 1, 1, 1) : f139(1, 1, 1, .3), Control_Right = f16(56, 280, v142 - 220, 1.5), 1 == v161 || 1 == v225 && f240(50 * v249) > 0 ? f139(1, 1, 1, 1) : f139(1, 1, 1, .3), v161 = f16(57, v207 - 100, v142 - 230, 1.5), f139(1, 1, 1, 1)), f185(), f166(), f139(1, 1, 1, 1), f139(1, 1, 1, 1), 0 == v225) {
                    f195(11, v207 - 54, 47, .8);
                    var c = f137(v207 - 110, 0, v207, 110);
                    1 == c && (v214 = 11, v194 = 0)
                }
                if (v73 += v262, v73 > 4e3 && 1 == f211(23, PCar.x + 2e3, -1) && (v73 = -2e3 - 6e3 * Math.random()), v37 += v262, v37 > 2500) {
                    for (var r = 0; 5 > r; r++) f211(24, PCar.x + 2e3 + 100 * r, -1);
                    v37 = -4e3 - 6e3 * Math.random()
                }
                v27 += v262, v27 > 0 && 1 == f211(28, PCar.x + 2e3, -1) && (v27 = -4e3 - 4e3 * Math.random()), v81 > 100 && v81 > v22 && (1 == f211(34, PCar.x + 2e3, -1) ? v22 = v81 + 25 : v22++), v131 > 3 && 6 > v131 && (v32 += v262), v200 += v262, v200 > 80 && (v200 -= 80, v267++, 55 == v267 && (v267 = 46)), v32 > 0 && (f211(33, PCar.x + 2e3, -1), v32 = -1500);
                break;
            case 11:
                f203(), f82();
                break;
            case 12:
                f203(), f54();
                break;
            case 13:
                f203(), f123();
                break;
            case 14:
                f203(), f62();
                break;
            case 15:
                f203(), f126()
        }
        if (f166(), f183(2), 0 == v225 && 0 != v115 && (f153(), f186(96, v142 - 123, 0), 1 == v224 && (f186(-19, 36, 0), f256(.75, .75, 1)), f227(v281), f256(1.2 + v266, 1.3 + v266, 1), f139(1, 1, 1, 1), v266 > .1 && f240(45 * v249) > 0 && f139(5, 5, 5, 1), f144("" + v171), f195(0, -44, 44, .7), f185()), f139(1, 1, 1, 1), v266 *= .9, v86 != v171 && (v86 = v171, v266 = .4), 10 == v214 && 0 == v225) {
            var T = Math.floor(v81);
            f153(), f186(v207 - 19, v142 - 123, 0), f227(FontRight), f256(1.2, 1.3, 1), f139(1, 1, 1, 1), f144(T + "m"), f256(.4, .4, 1), f186(0, -43, 0), f139(0, 0, 0, .5), f144(v287[4] + Math.floor(v33) + "m"), f185();
            var P = .005 * v153,
                x = .005 * v272;
            v272 > v153 && (v272 = v153), 0 > v272 && (v272 = 0), 0 == v225 && (f153(), f139(1, 1, 1, 1), v92 > 0 && f240(50 * v249) > 0 && (v92 -= v262, f139(3.5, 3.5, 3.5, 1)), f153(), f186(61, 57, 0), f153(), f256(P, .6, 1), f195(5, 105, 0, 1), f185(), f256(x, .6, 1), f195(4, 100, 0, 1), f185(), f195(6, 44, 58, .8), 40 > v272 && (f227(FontRight), f186(P + 261, 75, 0), f256(.4, .4, 1), f139(1, 0, 0, 1), v272 > 0 && f240(10 * v249) > 0 && f139(1.5, 1.5, 0, 1), f144(v272 > 0 ? v287[5] : v287[6])), f185())
        }
        f139(1, 1, 1, 1), 0 == v225 && f101(), f159(), f166(), f183(2), v214 > 5 && 0 == v225 && f141();
        for (var r = 0; r < v80.length; r++) {
            var h = v80[r].pageX * v207 / v176,
                S = v80[r].pageY * v142 / v149;
            f195(40, h, S, 1.2)
        }
        v225 > 0 && 10 == v214 && f117(), 1 == v268 && (f166(), f183(2), f139(-1, 1, 0, 1), f227(v281), f256(.2, .25, 1), f144("Device Pixel Ratio " + v31), f186(0, 70, 0), f144("Mouse " + v313 + " " + v312), f186(0, 70, 0), f144("v250 " + v250), f186(0, 70, 0), f144("PCar.Tyre[i].GroundY-PCar.Tyre[i].y:" + (PCar.Tyre[0].GroundY - PCar.Tyre[0].y)), f186(0, 70, 0), f144("PCar.Tyre[i].sy:" + PCar.Tyre[0].sy), f186(0, 70, 0), f144("Monetisation_IsFamobi " + Monetisation_IsFamobi), f186(0, 70, 0), 1 == Monetisation_IsFamobi && (f144("getMoreGamesButtonImage " + famobi.getMoreGamesButtonImage()), f186(0, 70, 0)), f139(1, 1, 1, 1))
    }
}

function f255() {
    this.xa, this.za, this.xb, this.zb
}

function f259(v, e, r, f) {
    Wall.push, Wall[v248] = new f255, Wall[v248].xa = v, Wall[v248].za = e, Wall[v248].xb = r, Wall[v248].zb = f, v248++
}

function f63(v) {
    if ("dummy" == v.substring(0, 5)) return -1;
    for (i = 0; i < v93; i++)
        if (v48[i] == v) return i;
    for (i = 0; i < v93; i++)
        if ("none" == v48[i]) return v48[i] = v, v203[i] = f116(-1, "textures/" + v + ".jpg"), i;
    return -1
}

function f35(v) {
    if (!(OBJ[v].Triangles < 1) && -1 != v101[v116].vertexPositionAttribute)
        for (var e = 0; e < OBJ[v].ObjCount; e++) 1 == f71(OBJ[v].SubOBJ[e].MinX, OBJ[v].SubOBJ[e].MinY, OBJ[v].SubOBJ[e].MinZ, OBJ[v].SubOBJ[e].MaxX, OBJ[v].SubOBJ[e].MaxY, OBJ[v].SubOBJ[e].MaxZ) && 0 == OBJ[v].SubOBJ[e].NoShadow && (gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexPositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, OBJ[v].SubOBJ[e].VertexPositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexTextureCoordBuffer), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexIndexBuffer), f10(1), gl.drawElements(gl.TRIANGLES, OBJ[v].SubOBJ[e].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0), v95 += OBJ[v].SubOBJ[e].Triangles)
}

function f53(v) {
    if (!(OBJ[v].Triangles < 1) && -1 != v101[v116].vertexPositionAttribute && -1 != v101[v116].textureCoordAttribute)
        for (var e = 0; e < OBJ[v].ObjCount; e++) 1 == f71(OBJ[v].SubOBJ[e].MinX, OBJ[v].SubOBJ[e].MinY, OBJ[v].SubOBJ[e].MinZ, OBJ[v].SubOBJ[e].MaxX, OBJ[v].SubOBJ[e].MaxY, OBJ[v].SubOBJ[e].MaxZ) && (-1 != OBJ[v].SubOBJ[e].TextureID && (v210 = -1,
            gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, v203[OBJ[v].SubOBJ[e].TextureID])), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexPositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, OBJ[v].SubOBJ[e].VertexPositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexTextureCoordBuffer), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, OBJ[v].SubOBJ[e].VertexTextureCoordBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexIndexBuffer), f10(), gl.drawElements(gl.TRIANGLES, OBJ[v].SubOBJ[e].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0), v95 += OBJ[v].SubOBJ[e].Triangles)
}

function f77(v) {
    if (!(OBJ[v].Triangles < 1) && -1 != v101[v116].vertexPositionAttribute) {
        for (var e = 0; e < OBJ[v].ObjCount; e++) gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexPositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, OBJ[v].SubOBJ[e].VertexPositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexIndexBuffer), f10(), gl.drawElements(gl.TRIANGLES, OBJ[v].SubOBJ[e].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        v95 += OBJ[v].Triangles
    }
}

function f196(v) {
    if (!(OBJ[v].Triangles < 1) && -1 != v101[v116].vertexPositionAttribute && -1 != v101[v116].textureCoordAttribute) {
        for (var e = 0; e < OBJ[v].ObjCount; e++) - 1 != OBJ[v].SubOBJ[e].TextureID && (v210 = -1, gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, v203[OBJ[v].SubOBJ[e].TextureID])), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexPositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, OBJ[v].SubOBJ[e].VertexPositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexTextureCoordBuffer), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, OBJ[v].SubOBJ[e].VertexTextureCoordBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[v].SubOBJ[e].VertexIndexBuffer), f10(), gl.drawElements(gl.TRIANGLES, OBJ[v].SubOBJ[e].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        v95 += OBJ[v].Triangles
    }
}

function f150() {
    this.Name, this.Triangles = 0, this.Vertexs = 0, this.UVs = 0, this.Material, this.VertexPositionBuffer, this.TextureCoordBuffer, this.VertexIndexBuffer, this.TextureID = -1, this.NoShadow = 0, this.MinX = 1e5, this.MaxX = -1e5, this.MinY = 1e5, this.MaxY = -1e5, this.MinZ = 1e5, this.MaxZ = -1e5
}

function f192() {
    this.x = 0, this.y = 0, this.z = 0
}

function f200() {
    this.va = 0, this.vb = 0, this.vc = 0, this.ta = 0, this.tb = 0, this.tc = 0
}

function f191() {
    this.Vec = 0, this.UV = 0
}

function f140() {
    this.x = 0, this.z = 0, this.type = 0, this.activated = 0, this.Rot = 0
}

function f17() {
    return
}

function f68() {
    0 != v252.length && (v252 = []), v62 = 0, 0 != v141.length && (v141 = []), v30 = 0, 0 != Wall.length && (Wall = []), v248 = 0
}

function f58(v) {
    if (0 != OBJ[v].Triangles) {
        OBJ[v].Triangles = 0;
        for (var e = 0; e < OBJ[v].ObjCount; e++) gl.deleteBuffer(OBJ[v].SubOBJ[e].VertexPositionBuffer), gl.deleteBuffer(OBJ[v].SubOBJ[e].TextureCoordBuffer), gl.deleteBuffer(OBJ[v].SubOBJ[e].VertexIndexBuffer);
        return OBJ[v].ObjCount = 0, 1
    }
    return 0
}

function f188(v, e) {
    DataToDownload++, f58(v);
    var r, f = 0;
    famobi.log("f188[" + v + "]:" + e + v197), r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), r.onreadystatechange = function() {
        if (4 == r.readyState) {
            var e, t = r.responseText,
                a = t.split("\n");
            if (a.length < 3) return;
            var n = 0,
                o = -1,
                i = new Array,
                s = 0,
                u = new Array,
                l = 0,
                d = new Array,
                g = 0,
                C = 0;
            for (OBJ[v].SubOBJ = new Array, e = 0; e < a.length; e++) {
                if (3 == n && "f" != a[e][0] && "Marker" == OBJ[v].SubOBJ[o].Name.substring(0, 6)) {
                    var y = d[C].vc - 1,
                        c = i[y].x,
                        T = i[y].y;
                    OBJ[v].Max_X < c && (OBJ[v].Max_X = c), OBJ[v].Marker.push, OBJ[v].Marker[OBJ[v].MarkersCount] = new f192, OBJ[v].Marker[OBJ[v].MarkersCount].x = c, OBJ[v].Marker[OBJ[v].MarkersCount].y = T, OBJ[v].Marker[OBJ[v].MarkersCount].z = T, OBJ[v].MarkersCount++, n = 0, o--, OBJ[v].ObjCount--
                }
                if (3 == n && "f" != a[e][0] && "exclude" == OBJ[v].SubOBJ[o].Name.substring(0, 7) && (n = 0, o--, OBJ[v].ObjCount--), 3 == n && "f" != a[e][0] && "Element_" == OBJ[v].SubOBJ[o].Name.substring(0, 8)) {
                    var y = d[C].va - 1,
                        P = d[C].vb - 1;
                    v141.push, v141[v30] = new f140, v141[v30].x = i[y].x, v141[v30].z = i[y].z, v141[v30].Rot = f201(i[y].x, i[y].z, i[P].x, i[P].z), "Element_OIL" == OBJ[v].SubOBJ[o].Name.substring(0, 11) && (v141[v30].type = 1), "Element_COIN" == OBJ[v].SubOBJ[o].Name.substring(0, 12) && (v141[v30].type = 2), "Element_BOOST" == OBJ[v].SubOBJ[o].Name.substring(0, 13) && (v141[v30].type = 3), "Element_ICE" == OBJ[v].SubOBJ[o].Name.substring(0, 11) && (v141[v30].type = 4), "Element_Lamp" == OBJ[v].SubOBJ[o].Name.substring(0, 12) && (v141[v30].type = 5), v30++, n = 0, o--, OBJ[v].ObjCount--
                }
                if (3 == n && "f" != a[e][0] && "AI_Path_A" == OBJ[v].SubOBJ[o].Name.substring(0, 9)) {
                    var y = d[C].va - 1;
                    v252.push, v252[v62] = new f140, v252[v62].x = i[y].x, v252[v62].z = i[y].z, v62++, n = 0, o--, OBJ[v].ObjCount--
                }
                if (3 == n && "f" != a[e][0]) {
                    if ("no_shadow" == OBJ[v].SubOBJ[o].Name.substring(0, 9) ? OBJ[v].SubOBJ[o].NoShadow = 1 : OBJ[v].SubOBJ[o].NoShadow = 0, "Wall" == OBJ[v].SubOBJ[o].Name.substring(0, 4))
                        for (var x = C; g > x; x++) {
                            var y = d[x].va - 1,
                                P = d[x].vb - 1,
                                h = d[x].vc - 1;
                            i[y].y < .1 && i[P].y < .1 && f259(i[y].x, i[y].z, i[P].x, i[P].z), i[P].y < .1 && i[h].y < .1 && f259(i[P].x, i[P].z, i[h].x, i[h].z), i[h].y < .1 && i[y].y < .1 && f259(i[h].x, i[h].z, i[y].x, i[y].z)
                        }
                    for (var S = new Array, _ = 0, m = new Array, p = 0, b = new Array, B = 0, x = C; g > x; x++) {
                        S.push, S[_] = _, _++;
                        var E = d[x].va - 1;
                        m.push, m[p] = i[E].x, m.push, m[p + 1] = i[E].y, m.push, m[p + 2] = i[E].z, p += 3;
                        var O = d[x].ta - 1;
                        b.push, b[B] = u[O].x, b.push, b[B + 1] = u[O].y, B += 2, S.push, S[_] = _, _++;
                        var E = d[x].vb - 1;
                        m.push, m[p] = i[E].x, m.push, m[p + 1] = i[E].y, m.push, m[p + 2] = i[E].z, p += 3;
                        var O = d[x].tb - 1;
                        b.push, b[B] = u[O].x, b.push, b[B + 1] = u[O].y, B += 2, S.push, S[_] = _, _++;
                        var E = d[x].vc - 1;
                        m.push, m[p] = i[E].x, m.push, m[p + 1] = i[E].y, m.push, m[p + 2] = i[E].z, p += 3;
                        var O = d[x].tc - 1;
                        b.push, b[B] = u[O].x, b.push, b[B + 1] = u[O].y, B += 2
                    }
                    for (var x = 0; _ > x; x++)
                        for (var R = S[x], A = x; _ > A; A++) {
                            var D = S[A];
                            if (x != A && S[x] != S[A] && m[3 * R] == m[3 * D] && m[3 * R + 1] == m[3 * D + 1] && m[3 * R + 2] == m[3 * D + 2] && b[2 * R] == b[2 * D] && b[2 * R + 1] == b[2 * D + 1]) {
                                S[A] = R, m[3 * D] = m[3 * p], m[3 * D + 1] = m[3 * p + 1], m[3 * D + 2] = m[3 * p + 2], b[2 * D] = b[2 * B], b[2 * D + 1] = b[2 * B + 1];
                                for (var M = A; _ + 1 > M; M++) S[x] == p && (S[x] = D);
                                p--, B--
                            }
                        }
                    OBJ[v].SubOBJ[o].VertexPositionBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[o].VertexPositionBuffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(m), gl.STATIC_DRAW), OBJ[v].SubOBJ[o].VertexPositionBuffer.itemSize = 3, OBJ[v].SubOBJ[o].VertexPositionBuffer.numItems = p / 3, OBJ[v].SubOBJ[o].VertexTextureCoordBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, OBJ[v].SubOBJ[o].VertexTextureCoordBuffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(b), gl.STATIC_DRAW), OBJ[v].SubOBJ[o].VertexTextureCoordBuffer.itemSize = 2, OBJ[v].SubOBJ[o].VertexTextureCoordBuffer.numItems = B / 2, OBJ[v].SubOBJ[o].VertexIndexBuffer = gl.createBuffer(), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, OBJ[v].SubOBJ[o].VertexIndexBuffer), gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(S), gl.STATIC_DRAW), OBJ[v].SubOBJ[o].VertexIndexBuffer.itemSize = 1, OBJ[v].SubOBJ[o].VertexIndexBuffer.numItems = _, n = 999
                }
                if (3 == n && "f" == a[e][0]) {
                    for (var F, I, z, w, U, L, J, W = -1, N = a[e].substring(2), k = N.split(" "), x = 0; x < k.length; x++) {
                        var G = k[x].split("/");
                        0 == x && (F = parseInt(G[0]), w = parseInt(G[1])), 1 == x && (I = parseInt(G[0]), U = parseInt(G[1])), 2 == x && (z = parseInt(G[0]), L = parseInt(G[1])), 3 == x && (W = parseInt(G[0]), J = parseInt(G[1]))
                    }
                    d.push, d[g] = new f200, d[g].va = F, d[g].vb = I, d[g].vc = z, d[g].ta = w, d[g].tb = U, d[g].tc = L, g++, OBJ[v].SubOBJ[o].Triangles++, f++, k[3].length > 2 && (d.push, d[g] = new f200, d[g].va = F, d[g].vb = z, d[g].vc = W, d[g].ta = w, d[g].tb = L, d[g].tc = J, g++, OBJ[v].SubOBJ[o].Triangles++, OBJ[v].Triangles++, f++)
                }
                if (2 == n && "v" != a[e][0] && (n = 3), 2 == n && "v" == a[e][0] && "t" == a[e][1]) {
                    u.push, u[l] = new f192;
                    var N = a[e].substring(3),
                        k = N.split(" ");
                    u[l].x = parseFloat(k[0]), u[l].y = parseFloat(k[1]), u[l].z = 0, l++, OBJ[v].SubOBJ[o].UVs++
                }
                if (1 == n && "v" != a[e][0] && (n = 2), 1 == n && "v" == a[e][0]) {
                    i.push, i[s] = new f192;
                    var N = a[e].substring(2),
                        k = N.split(" ");
                    i[s].x = parseFloat(k[0]), i[s].y = parseFloat(k[1]), i[s].z = parseFloat(k[2]), OBJ[v].SubOBJ[o].MinX > i[s].x && (OBJ[v].SubOBJ[o].MinX = i[s].x), OBJ[v].SubOBJ[o].MaxX < i[s].x && (OBJ[v].SubOBJ[o].MaxX = i[s].x), OBJ[v].SubOBJ[o].MinY > i[s].y && (OBJ[v].SubOBJ[o].MinY = i[s].y), OBJ[v].SubOBJ[o].MaxY < i[s].y && (OBJ[v].SubOBJ[o].MaxY = i[s].y), OBJ[v].SubOBJ[o].MinZ > i[s].z && (OBJ[v].SubOBJ[o].MinZ = i[s].z), OBJ[v].SubOBJ[o].MaxZ < i[s].z && (OBJ[v].SubOBJ[o].MaxZ = i[s].z), s++, OBJ[v].SubOBJ[o].Vertexs++
                }
                "g" == a[e][0] && (o++, OBJ[v].ObjCount++, OBJ[v].SubOBJ.push, OBJ[v].SubOBJ[o] = new f150, OBJ[v].SubOBJ[o].Vertexs = 0, OBJ[v].SubOBJ[o].Name = a[e].substring(2), C = g, "u" == a[e + 1][0] && (OBJ[v].SubOBJ[o].TextureID = f63(a[e + 1].substring(7))), e++, n = 1)
            }
            OBJ[v].Triangles = f, DataToDownload--, f17()
        }
    }, r.open("GET", "datas/objects/" + e + v197, !0), r.send()
}

function f242() {
    this.Triangles = 0, this.ObjCount = 0, this.SubOBJ, this.Min_X = 0, this.Max_X = 0, this.MarkersCount = 0, this.Marker = new Array
}

function f162() {
    var v;
    for (v = 0; 50 > v; v++) OBJ.push, OBJ[v] = new f242;
    for (v = 0; v93 > v; v++) v203.push, v48.push, v48[v] = "none"
}

function f187() {
    this.Exist = 0, this.uvStart_X = 0, this.uvStart_Y = 0, this.uvEnd_X = 0, this.uvEnd_Y = 0, this.size_X = 0, this.size_Y = 0, this.xOffset = 0, this.yOffset = 0, this.xAdvance = 0, this.VertexPositionBuffer, this.TextureCoordBuffer, this.VertexIndexBuffer
}

function f210() {
    var v;
    for (v = 0; 8800 > v; v++) v320.push, v320[v] = new f187
}

function f52(v) {
    v320[v].VertexPositionBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v320[v].VertexPositionBuffer), vertices = [v320[v].xOffset, v320[v].yOffset + v320[v].size_Y, -.25, v320[v].xOffset + v320[v].size_X, v320[v].yOffset + v320[v].size_Y, -.25, v320[v].xOffset + v320[v].size_X, v320[v].yOffset, -.25, v320[v].xOffset, v320[v].yOffset, -.25], gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW), v320[v].VertexPositionBuffer.itemSize = 3, v320[v].VertexPositionBuffer.numItems = 4, v320[v].VertexTextureCoordBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, v320[v].VertexTextureCoordBuffer);
    var e = [v320[v].uvStart_X, v320[v].uvEnd_Y, v320[v].uvEnd_X, v320[v].uvEnd_Y, v320[v].uvEnd_X, v320[v].uvStart_Y, v320[v].uvStart_X, v320[v].uvStart_Y];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(e), gl.STATIC_DRAW), v320[v].VertexTextureCoordBuffer.itemSize = 2, v320[v].VertexTextureCoordBuffer.numItems = 4, v320[v].VertexIndexBuffer = gl.createBuffer(), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v320[v].VertexIndexBuffer);
    var r = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(r), gl.STATIC_DRAW), v320[v].VertexIndexBuffer.itemSize = 1, v320[v].VertexIndexBuffer.numItems = 6
}

function f39(v, e, r) {
    var f = v.indexOf(e);
    if (0 == f) {
        var t = e.length,
            a = v.substring(t, v.length - 1);
        a = a.replace("(", ""), a = a.replace(")", ""), a = a.replace(" ", "");
        var n = a.split(",");
        new Array;
        return r[0] = parseFloat(n[0]), r[1] = parseFloat(n[1]), 1
    }
    return -1
}

function f75(v, e) {
    var r = v.indexOf(e);
    if (0 == r) {
        var f = e.length,
            t = v.substring(f, v.length - 1);
        return parseInt(t)
    }
    return -1
}

function f26() {
    // return ["fr", "de", "en"].indexOf(window.famobi.getCurrentLanguage()) > 0 ? 0 : 1
    return 1;
}

function f231() {
    var v = 1,
        e = "font";
    1 == f26() && (e = "font_unicode", v = .7);
    var r;
    famobi.log("f231"), GLFontTexture = f116(-1, "fonts/" + e + ".png"), f210();
    var f = new Array;
    f.push, f.push, r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), r.onreadystatechange = function() {
        if (4 == r.readyState) {
            var e, t = r.responseText,
                a = t.split("#");
            if (a.length < 3) return;
            var n = 0;
            for (e = 9; e < a.length; e += 7) {
                var o = f75(a[e], "charId=");
                if (-1 != o) {
                    n = o, v320[n].Exist = 1;
                    f39(a[e + 1], "uvStart=", f);
                    v320[n].uvStart_X = f[0], v320[n].uvStart_Y = 1 - f[1], f39(a[e + 2], "uvEnd=", f), v320[n].uvEnd_X = f[0], v320[n].uvEnd_Y = 1 - f[1], f39(a[e + 3], "size=", f), v320[n].size_X = f[0] * v, v320[n].size_Y = f[1];
                    var i = f75(a[e + 4], "xOffset=");
                    v320[n].xOffset = i * v;
                    var s = f75(a[e + 5], "yOffset=");
                    v320[n].yOffset = s;
                    var u = f75(a[e + 6], "xAdvance=");
                    v320[n].xAdvance = u * v - 3, f52(o)
                }
            }
            v232++
        }
    }, r.open("GET", "datas/fonts/" + e + ".fnt" + v197, !0), r.send()
}

function f164(v) {
    0 == v320[v].Exist || v > 2048 || (gl.bindBuffer(gl.ARRAY_BUFFER, v320[v].VertexPositionBuffer), gl.vertexAttribPointer(v101[v116].vertexPositionAttribute, v320[v].VertexPositionBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ARRAY_BUFFER, v320[v].VertexTextureCoordBuffer), gl.vertexAttribPointer(v101[v116].textureCoordAttribute, v320[v].VertexTextureCoordBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, v320[v].VertexIndexBuffer), f10(1), gl.drawElements(gl.TRIANGLES, v320[v].VertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0), f186(v320[v].xAdvance, 0, 0), v95 += 2)
}

function f227(v) {
    v235 = v
}

function f218(v) {
    return 8217 == v ? 39 : v
}

function f156(v) {
    for (var e = 0, r = 0; r < v.length; r++) e += v320[f218(v.charCodeAt(r))].xAdvance;
    return e
}

function f144(v) {
    if (0 == v232) return 0;
    var e = 0;
    v235 > 0 && (e = -f156(v), v235 == v234 && (e *= .5)), v210 = -1, gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, GLFontTexture), f153(), f186(e, 0, 0);
    for (var r = 0; r < v.length; r++) f164(f218(v.charCodeAt(r)));
    return f185(), e
}

function f235(v) {
    for (var e = 0; e < v.length; e++) {
        for (var r = 0, f = 0; f < v209.length; f++)
            if (v[e] == v209[f]) {
                r = 1;
                break
            }
        0 == r && (v = v.replaceAt(e, "_"))
    }
    return v
}

function f108(v, e, r, f, t) {
    v201 = r, TextField_y = f;
    var a = document.getElementById("dlg-textfield");
    if (TextField_Selected != v && 1 == v178 && v313 > r - 255 && r + 255 > v313 && v312 > f - 5 && f + 75 > v312 && (TextField_Selected = v, a.value = "", a.select(), a.value = "" + e, a.focus()), TextField_Selected == v && e != a.value && (e = a.value, e.length > 10 && (e = e.substring(0, 10)), e = f235(e), a = e), f183(3), TextField_Selected == v && (f139(1, 1, 1, .8), f129(r - 255, f - 5, r + 255, f + 75)), f139(0, 0, 0, 1), f129(r - 250, f, r + 250, f + 70), f183(2), f139(1.5, 1.5, 1.5, 1), f153(), f186(r - 255 + 10, f - 4, 0), f256(.7, .7, 1), f227(v281), f139(2, 2, 2, 1), f144(v97), f185(), TextField_Selected == v) {
        if (0 == v185) {
            var n = r - 235 + .7 * f156(v97);
            f183(3), f139(1, 1, 1, .8), f129(n, f + 2, n + 40, f + 68), f183(2)
        }
        1 == v178 && (r - 255 > v313 || v313 > r + 255 || f - 5 > v312 || v312 > f + 75) && (TextField_Selected = -1, document.getElementById("dlg-textfield").blur(), v201 = -5e3), 13 == v250 && (TextField_Selected = -1, document.getElementById("dlg-textfield").blur(), v201 = -5e3)
    }
    return -1 != t && (f183(2), TextField_Selected == v ? f139(1.5, 1.5, 1.5, 1) : f139(1, 1, 1, .5), f153(), f186(r - 255 + 10, f - 45, 0), f256(.45, .45, 1), f227(v281), f144(v287[t]), f185()), e
}

function f223() {
    famobi.log("Sound: Init"), 1 == f261() && 1 == f262() && 0 == f250() && (v58 = 1), (1 == f262() || 1 == f238()) && (v26 = 1), v50 = 1;
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext, v118 = new AudioContext
    } catch (v) {
        return void(v50 = 0)
    }
    var e = document.createElement("audio");
    return e.canPlayType("audio/mp3") ? (v279 = "mp3", void famobi.log("Sound: ext:" + v279)) : e.canPlayType("audio/ogg") ? (v279 = "ogg", void famobi.log("Sound: ext:" + v279)) : e.canPlayType("audio/mp4") ? (v279 = "mp4", void famobi.log("Sound: ext:" + v279)) : void(v50 = 0)
}

function f260() {}

function f222(v, e) {
    if (0 != v50) {
        DataToDownload++;
        var r = e.replace("snd", v279) + v197,
            f = new XMLHttpRequest;
        f.open("GET", r, !0), f.responseType = "arraybuffer", famobi.log("Sound: load:" + r), f.onload = function() {
            v118.decodeAudioData(f.response, function(e) {
                v211.push = null, v211[v] = e, DataToDownload--
            }, f260)
        }, f.send()
    }
}

function f97(v) {
    v57 = v
}

function f219(v) {
    if (0 != v50 && 0 != Pref_User_Sound) {
        var e = v118.createBufferSource();
        if (null != e) {
            e.buffer = v211[v];
            var r = v118.createGain();
            r.gain.value = .25 * v57, e.connect(r), r.connect(v118.destination), e.connect(v118.destination), e.start ? e.start(0) : e.noteOn(0)
        }
    }
}

function f217() {}

function f216(v) {
    0 != v50 && null != v213 && (v213.stop ? v213.stop(0) : v213.noteOff(0), v213 = null)
}

function f197(v) {
    0 != v50 && 0 != v61 && (f216(1), v213 = v118.createBufferSource(), 1 == v && (v213.buffer = v211[4]), 2 == v && (v213.buffer = v211[5]), v213.loop = !0, v213.connect(v118.destination), v213.start ? v213.start(0) : v213.noteOn(0))
}

function f99() {
    0 != v50 && null != v305 && "MusicStreamPlayer" == v305.id && (v305.pause(), v305.currentTime = 0)
}

function f100(v) {
    if (-1 == v && null != v18 && (v = v18), v.length > 2 && (v18 = v), 0 != v50 && (null != v305 && "MusicStreamPlayer" == v305.id && (v305.pause(), v305.currentTime = 0, null != v127 && v305.removeChild(v127), v127 = null), 0 != v61 && (v305 = document.createElement("audio"), v305.id = "MusicStreamPlayer", v305.preload = "auto", famobi.log("Musique: createElement"), v305.canPlayType))) {
        famobi.log("Musique: v305.canPlayType");
        var e = !!v305.canPlayType && "" != v305.canPlayType("audio/mp4"),
            r = !!v305.canPlayType && "" != v305.canPlayType("audio/mp3"),
            f = !!v305.canPlayType && "" != v305.canPlayType('audio/ogg; codecs="vorbis"');
        1 == f ? (v127 = document.createElement("source"), v127.type = 'audio/ogg; codecs="vorbis"', v127.src = "datas/musics/" + v + ".ogg", v305.appendChild(v127)) : 1 == e && 1 == f262() ? (v127 = document.createElement("source"), v127.type = "audio/mp4", v127.src = "datas/musics/" + v + ".m4a", v305.appendChild(v127)) : 1 == r && (v127 = document.createElement("source"), v127.type = "audio/mp3", v127.src = "datas/musics/" + v + ".mp3", v305.appendChild(v127)), famobi.log("Musique:" + v127.src), v305.load(), v305.play(), v305.volume = .35, v0 = 1
    }
}

function f215() {
    if (0 != v245) return 0;
    var v = .7 + .005 * Math.cos(v257 / 57.2957795 * 6);
    return f227(v281), f153(), f186(20 + 200 * v263 - 200, 10, 0), f251(-2, 0, 0, 1), f256(v, v, 1), f139(3, 3, 3, 1.5), f144(v287[22]), f186(-3, -3, 0), f139(0, 0, 0, 1), f144(v287[22]), f185(), 1 == v215 && 100 > v312 && .5 * v207 > v313 ? 1 : 0
}

function f180() {
    f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), f183(1), f214(0, 650 + 50 * (1 - v263)), f214(0, 640 * v263 - 730), v97 = f108(1, v97, .5 * v207, 140 * v263, 51);
    var v = .5 * v207 - 211,
        e = .5 * v207 + 210,
        r = v,
        f = 274 * v263;
    famobi.log("v45 " + v45), f153(), v45 > 0 && 25 > v45 || (v45 = 1);
    for (var t = 44, a = 1; 25 > a; a++) a == v45 && (f183(3), f139(1, 1, 0, 1), f129(r - t, f - t, r + t, f + t)), 1 == v215 && v313 > r - t && r + t > v313 && v312 > f - t && f + t > v312 && (v215 = -1, v45 = a), f183(1), f153(), f139(1, 1, 1, 1), f186(r, f, 0), f256(.6 * v263, .6 * v263, 1), f30("textures/avatars/" + a + ".jpg"), f139(1, 1, 1, 1), f185(), r += 84, r > e && (r = v, f += 83);
    f153(), f183(2), 1 == f215() && (TextField_Selected = -1, document.getElementById("dlg-textfield").blur(), v97.length < 3 && (v97 = v38), v97 != v38 && Stanislic_SendInfo("User_Changed_Name"), Save_UserPrefs(), v245 = 1, v21 = 1, v35 = -1)
}

function f73() {
    v45 > 0 && 25 > v45 || (v45 = 1);
    var v = v207 - .8 * f156(v97) - 155;
    250 > v && (v = v207 - 130), f183(2), f139(1, 1, 1, 1), f153(), f186(v, 700 - 150 * v263, 0), f86(12, 0, 0, v207, 205), f186(130, 40, 0), f256(.8, .9, 1), f227(v281), f139(2, 2, 2, 1), f144(v97), f186(-3, -3, 0), f139(0, 0, 0, 1), 0 == v185 && "Player" == v97.substring(0, 6) && f139(.5, .5, .5, 1), f144(v97), f153(), f139(1, 1, 1, 1), 0 == v185 && "Player" == v97.substring(0, 6) && f139(1.5, 1.5, 1.5, 1), f186(-84, 46, 0), f256(1, 1, 1), f30("textures/avatars/" + v45 + ".jpg"), f139(1, 1, 1, 1), f185(), f185(), 1 == v215 && v313 > v && v312 > 550 && (v38 = v97, v245 = 1, v21 = 5, v35 = -1)
}

function f214(v, e) {
    f183(2), 1 == v178 && v312 > e + 5 && e + 195 > v312 ? f139(2, 2, 0, 1) : f139(1, 1, 1, 1), f86(12, -4, e, v207 + 4, e + 200), f183(2);
    var r = .8;
    return f227(v234), f153(), f186(.5 * v207, e + 55, 0), f251(-2, 0, 0, 1), f256(r, r, 1), f139(3, 3, 3, 1.8), f144(v287[v]), f186(-3, -3, 0), f139(0, 0, 0, .85), f144(v287[v]), f185(), 0 == v245 && 1 == v215 && v312 > e + 5 && e + 195 > v312 ? 1 : 0
}

function f89(v, e) {
    f183(2), 1 == v178 && v312 > e + 5 && e + 165 > v312 ? f139(2, 2, 0, 1) : f139(1, 1, 1, 1), f86(12, -4, e, v207 + 4, e + 170), f183(2);
    var r = .8;
    return f227(v234), f153(), f186(.5 * v207, e + 42, 0), f251(-2, 0, 0, 1), f256(r, r, 1), f139(3, 3, 3, 1.8), f144(v287[v]), f186(-3, -3, 0), f139(0, 0, 0, .85), f144(v287[v]), f185(), 0 == v245 && 1 == v215 && v312 > e + 5 && e + 195 > v312 ? 1 : 0
}

function f103() {
    f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), f183(1), f214(0, 650 + 50 * (1 - v263)), f214(0, 640 * v263 - 730), f153(), f186(.5 * v207, 268 * v263 - 200, 0), f251(-2, 0, 0, 1), f139(1.5, 1.5, 1.5, 1), f144(v287[50]), f185();
    for (var v = 380, e = -5; 6 > e; e++) {
        for (var r = e + v229; r > v298;) r -= v298;
        for (; 1 > r;) r += v298;
        var f = .5 * v207 + e * v + v85;
        if (f > -200 && v207 + 200 > f) {
            if (f153(), f186(f, 680 * v263 - 320, 0), f251(-2, 0, 0, 1), f256(.7, .7, 1), f153(), f186(0, 0, -5), f256(4.8, -4.8, .01), gl.enable(gl.DEPTH_TEST), f153(), f251(32, 1, 0, 0), f251(50 * e + v85 / v * 50, 0, 1, 0), f183(2), gl.depthMask(!1), f139(1, 1, 1, 1), f153(), f251(90, 1, 0, 0), f165(2), f185(), gl.depthMask(!0), f183(2), 1 == Pref_User_Unlocked_B[r] ? f139(1, 1, 1, 1) : f139(.3, .3, .3, 1), f153(), f196(v316[r]), f186(0, 24, -3), f196(4), f185(), f153(), f186(0, 10.8, -25.9), f196(1), f185(), f153(), f186(18.9, 7.2, 17.9), f196(2), f185(), f153(), f186(-18.9, 7.2, 17.9), f251(-180, 0, 1, 0), f196(2), f185(), f185(), gl.disable(gl.DEPTH_TEST), f185(), 1 != Pref_User_Unlocked_B[r]) {
                gl.clear(gl.DEPTH_BUFFER_BIT), f186(0, -100, 0), 0 == e ? f139(1, 1, 1, 1) : f139(.25, .25, .25, 1), f30("textures/lock.png"), f186(0, 70, 0);
                var t = f156("" + v278[r]);
                f153(), f186(.5 * -t - 33, 95, -5), f256(1.8, -1.8, .01), f251(2 * v249, 0, 1, 0), gl.enable(gl.DEPTH_TEST), f196(7), gl.disable(gl.DEPTH_TEST), f185(), f144(v278[r]), f186(0, 30, 0)
            }
            f186(0, 100, 0), f256(.85, 1, 1), f139(0, 0, 0, 1), f144(v288[r]), f186(0, -5, 0), 0 == e ? f139(5, 5, 5, 1) : f139(1, 1, 1, .5), f144(v288[r]), 0 == e ? f139(1, 1, 1, 1) : f139(1, 1, 1, .5), f186(0, 120, 0), f86(26, -200, 0, 200, 70), f183(3);
            var f = -183;
            f139(0, 1, 0, .8);
            for (var a = 3 * r - 2, n = 0; a > n; n++) f129(f, 13, f + 20, 59), f += 29;
            f183(2), f186(-203, 64, 0), f256(.6, .5, 1), 0 == e ? f139(5, 5, 5, .5) : f139(1, 1, 1, .25), f227(v281), f144(v287[62]), f227(v234), f185()
        }
    }
    var o = 5 * Math.cos(v257 / 57.2957795 * 5);
    for (f153(), f186(v207 - 50 - o, 320 * v263, 0), f183(2), f256(-1, 3, 1), f139(1, 1, 1, 1), f165(14), f185(), f153(), f186(50 + o, 320 * v263, 0), f183(2), f256(1, 3, 1), f139(1, 1, 1, 1), f165(14), f185(), v85 *= .9, 1 == v215 && v312 > 155 && 530 > v312 && 516 > v312 && v313 > .5 * v207 + .5 * v && (v229++, v85 += v), 1 == v215 && v312 > 155 && 530 > v312 && 516 > v312 && .5 * v207 - .5 * v > v313 && (v229--, v85 -= v); v229 > v298;) v229 -= v298;
    for (; 1 > v229;) v229 += v298;
    1 != Pref_User_Unlocked_B[v229] && 1 == v215 && v312 > 155 && 530 > v312 && .5 * v207 + .5 * v > v313 && v313 > .5 * v207 - .5 * v && (v215 = -1, v263 = .8, Pref_User_COINS = parseInt(Pref_User_COINS), Pref_User_COINS >= parseInt(v278[v229]) ? (Pref_User_COINS -= parseInt(v278[v229]), Pref_User_Unlocked_B[v229] = 1, f219(9), Save_UserPrefs(), Stanislic_SendInfo("Car_Unlocked_" + v229)) : f219(10)), 1 == Pref_User_Unlocked_B[v229] && 1 == v215 && v312 > 155 && 530 > v312 && .5 * v207 + .5 * v > v313 && v313 > .5 * v207 - .5 * v && (SelectedCarID = v229, v215 = -1, f219(0), v245 = 1, v21 = 100, v35 = -1, Car[0].posSY += .4), 1 == f215() && (v245 = 1, v21 = 0, v35 = -1), f73()
}

function f91() {
    f183(2), f153(), f186(.5 * v207, 680 * v263 - 320, 0), f256(1.7, 1.7, 1), f139(.3, .3, .3, .9), f30("textures/track_" + v145 + ".png"), f251(-2, 0, 0, 1), f186(0, 250, 0), f256(.8, .8, 1), f139(5, 5, 5, 1), f144(v271[v145]), f185(), f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), f183(1), f214(0, 640 * v263 - 730), f153(), f186(.5 * v207, 293 * v263, 0), f183(2), f256(.8, .8, 1), f139(1, 1, 1, 1), f165(0 == v79 ? 6 : 7), f185(), 1 == f214(64, 490 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = 999, v35 = 10), 1 == f215() && (v245 = 1, v21 = 100, v35 = -1)
}

function f120(v) {
    v215 = -1, v263 = .8, Pref_User_COINS = parseInt(Pref_User_COINS), Pref_User_COINS >= parseInt(v60[v]) ? (Pref_User_COINS -= parseInt(v60[v]), Pref_User_Unlocked[v] = 1, f219(9), Save_UserPrefs(), Stanislic_SendInfo("Track_Unlocked_" + v), v208 = 100, v145 = v) : f219(10)
}

function f74() {
    Pref_User_Unlocked[1] = 1, f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), f183(1), f214(0, 650 + 50 * (1 - v263)), f214(0, 640 * v263 - 730), f153(), f186(.5 * v207, 268 * v263 - 200, 0), f251(-2, 0, 0, 1), f139(1.5, 1.5, 1.5, 1), f144(v287[21]), f185();
    for (var v = 380, e = -5; 6 > e; e++) {
        for (var r = e + v145; r > v275;) r -= v275;
        for (; 1 > r;) r += v275;
        var f = r;
        f > 12 && (f -= 12);
        var t = .5 * v207 + e * v + v82;
        if (t > -200 && v207 + 200 > t) {
            if (f153(), f186(t, 680 * v263 - 320, 0), f256(.7, .7, 1), 0 == e ? f139(1, 1, 1, 1) : f139(.5, .5, .5, .5), 1 != Pref_User_Unlocked[r] && f139(.05, .05, .05, .9), f30("textures/track_" + f + ".png"), f251(-2, 0, 0, 1), f186(0, 250, 0), f256(.8, .8, 1), f139(0, 0, 0, 1), 0 == e ? f139(5, 5, 5, 1) : f139(1, 1, 1, .5), f144(v271[f]), f != r && (f153(), f186(0, -73, 0), f144(v287[63]), f185()), 1 != Pref_User_Unlocked[r]) {
                f186(0, -420, 0), 0 == e ? f139(1, 1, 1, 1) : f139(.25, .25, .25, 1), f30("textures/lock.png"), f186(0, 70, 0);
                var a = f156("" + v60[r]);
                f153(), f186(.5 * -a - 33, 95, -5), f256(1.8, -1.8, .01), f251(2 * v249, 0, 1, 0), gl.enable(gl.DEPTH_TEST), f196(7), gl.disable(gl.DEPTH_TEST), f185(), f144(v60[r])
            }
            f185()
        }
    }
    var n = 5 * Math.cos(v257 / 57.2957795 * 5);
    for (f153(), f186(v207 - 50 - n, 400 * v263, 0), f183(2), f256(-1, 3, 1), f139(1, 1, 1, 1), f165(14), f185(), f153(), f186(50 + n, 400 * v263, 0), f183(2), f256(1, 3, 1), f139(1, 1, 1, 1), f165(14), f185(), f153(), f186(.5 * v207, 600 * v263, 0), f183(2), f256(.6, .6, .6), f139(1, 1, 1, 1), f144(v145 + "/" + v275), f185(), v82 *= .8, 1 == v215 && v312 > 155 && v313 > .5 * v207 + .5 * v && (v145++, v82 += v), 1 == v215 && v312 > 155 && .5 * v207 - .5 * v > v313 && (v145--, v82 -= v); v145 > v275;) v145 -= v275;
    for (; 1 > v145;) v145 += v275;
    1 != Pref_User_Unlocked[v145] && 1 == v215 && v312 > 155 && .5 * v207 + .5 * v > v313 && v313 > .5 * v207 - .5 * v && f120(v145), 1 == Pref_User_Unlocked[v145] && 1 == v215 && v312 > 155 && .5 * v207 + .5 * v > v313 && v313 > .5 * v207 - .5 * v && (f219(0), 3 > v40 ? (v208 = 8, v40++, Save_UserPrefs()) : (v245 = 1, v21 = 999, v35 = 10), Save_UserPrefs()), 1 == f215() && (v245 = 1, v21 = 1, v35 = -1)
}

function f95(v, e, r) {
    f153();
    for (var f = 40, t = 0, a = 0; r > a; a++) {
        t = 1 - t, 1 == t && (f183(3), f139(0, 0, 0, .1), f129(.5 * -e, 0, .5 * e, f), f183(2));
        var n = 35;
        if (f139(.5, .5, .5, 1), f135(a, v) > 0) {
            f153(), f186(.5 * -e + 3, -2, 0), f256(.45, .4, 1);
            var o = "" + f135(a, v);
            f227(v281), f144(o);
            var i = .45 * f156(o) + 10;
            i > n && (n = i), f185(), f139(0, 0, 0, 1), f153(), f186(.5 * -e + n, -4, 0), f256(.4, .45, 1), f227(v281), f144(f132(a, v)), f185(), f153(), f186(.5 * e - 3, -4, 0), f256(.4, .45, 1), f227(FontRight), f144(f104(a, v)), f185()
        }
        f186(0, f, 0)
    }
    f185()
}

function f33(v) {
    var e = Math.floor(v / 60 / 100),
        r = Math.floor((v - 100 * e * 60) / 100),
        f = Math.floor(v - 100 * r - 100 * e * 60),
        t = "" + e,
        a = "" + r,
        n = "" + f;
    if (10 > e) var t = "0" + e;
    if (10 > r) var a = "0" + r;
    if (10 > f) var n = "0" + f;
    var o = t + ":" + a + ":" + n;
    return o
}

function f179() {
    for (var v = -1, e = 1; 13 > e; e++)
        if (0 == Pref_User_Unlocked[e]) {
            v = e;
            break
        }
    if (-1 == v && 1 != v245 && (v245 = 1, v21 = v9, v35 = v12), -1 != v) {
        var r = v60[v] - Pref_User_COINS;
        if (v182 = v263, f183(2), f153(), f183(3), f139(1, 1, 1, .9 * v182), f129(0, 123, v207, 550), f185(), f183(2), f139(1, 1, 1, 1), f153(), f186(.5 * v207, -300 + 403 * v182, 0), f256(.4, .4, 1), f30("textures/track_" + v + ".png"), f185(), f183(2), f153(), f186(.5 * v207, -600 + 795 * v182, 0), f251(-2, 0, 0, 1), f256(.6, .7, 1), f139(0, 0, 0, 1), f227(v234), f144(v271[v]), f185(), r > 0) {
            f183(2), f153(), f186(.5 * v207, -600 + 851 * v182, 0), f251(-2, 0, 0, 1), f256(.6, .7, 1), f139(0, 0, 0, .8), f227(v234), f144(v287[82] + " " + r);
            var f = f156(v287[82] + " " + r);
            f139(1, 1, 1, 1), f153(), f186(.5 * +f + 46, 91, -5), f256(1.8, -1.8, .01), f251(2 * v249, 0, 1, 0), gl.enable(gl.DEPTH_TEST), f196(7), gl.disable(gl.DEPTH_TEST), f139(0, 0, 0, 1), f185(), f186(0, 79, 0), f139(0, 0, 0, .8), f144(v287[83]), f185(), f183(1), 1 == f89(81, 411 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = v9, v35 = v12)
        }
        if (1 > r) {
            f183(2), f153(), f186(.5 * v207, -600 + 851 * v182, 0), f251(-2, 0, 0, 1), f256(.6, .7, 1), f139(0, 0, 0, .8), f227(v234), f144(v287[84] + " " + v60[v]);
            var f = f156(v287[84] + " " + v60[v]);
            f139(1, 1, 1, 1), f153(), f186(.5 * +f + 46, 91, -5), f256(1.8, -1.8, .01), f251(2 * v249, 0, 1, 0), gl.enable(gl.DEPTH_TEST), f196(7), gl.disable(gl.DEPTH_TEST), f139(0, 0, 0, 1), f185(), f185(), f183(1), 1 == f89(85, 331 * v263) && 0 == v245 && (f219(0), f120(v)), 1 == f89(86, 492 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = v9, v35 = v12)
        }
    }
}

function f152() {
    if (0 == v218 && (0 == Timer_Minutes && 0 == Timer_Seconds && 0 == Timer_Mili && (Timer_Mili = 33, Timer_Seconds = 44, Timer_Minutes = 55), v117 = parseInt(v242[v145]), v117 /= Car[0].Pos, v94 = 100 * Timer_Minutes * 60 + 100 * Timer_Seconds + Timer_Mili, Car[0].Pos > 3 && (v117 *= .5), v117 = Math.floor(v117), v16 = v117, v236 = -1, 1 == Car[0].Pos && (v236 = 17, v296 = v287[29], v163 = v287[44]), 2 == Car[0].Pos && (v236 = 18, v296 = v287[30], v163 = v287[45]), 3 == Car[0].Pos && (v236 = 19, v296 = v287[31], v163 = v287[46]), 4 == Car[0].Pos && (v296 = v287[32]), 5 == Car[0].Pos && (v296 = v287[33]), 6 == Car[0].Pos && (v296 = v287[34]), f183(2), f153(), f186(.5 * v207, 300, 0), f256(1.8 * v182, 1.8 * v182, 1.5), Car[0].Pos < 4 ? (f183(2), f139(1, 1, 1, 1), f165(v236), f153(), f186(57, -88, 0), f256(.5, .5, 1.5), f251(5, 0, 0, 1), f227(v281), f139(1.5, 1.5, 1.5, 1), f144(v163), f186(-2, -8, 0), f139(0, 0, 0, .8), f144(v163), f185()) : f186(0, -120, 0), f227(v234), f186(0, 109, 0), f256(.8, .8, 1), f139(0, 0, 0, 1), f144(v296), f186(-1, -3, 0), f139(1.5, 1.5, 1.5, 1), f144(v296), f185(), v182 = 1, v183 = 1400, 1 == v182 && (v183 += v262, v183 > 1400))) {
        v183 = 0, v182 = 0, v218 = 1, (Pref_User_Scores[v145] > v94 || 0 == Pref_User_Scores[v145]) && (Pref_User_Scores[v145] = v94), Pref_User_Scores[19] = 0;
        for (var v = 0; 19 > v; v++) Pref_User_Scores[19] += (Pref_User_Scores[v] + v) * (v + 3);
        Save_UserPrefs(), f163(v145, v94, 10)
    }
    if (1 == v218) {
        if (f183(3), f139(1, 1, 1, .9 * v182), 0 == v117 ? f129(0, 123, v207, 550) : f129(0, 123, v207, 280), f183(2), f153(), f186(.5 * v207, 300 - 220 * v182, 0), f256(1.8 * (1 - .6 * v182), 1.8 * (1 - .6 * v182), 1.5), Car[0].Pos < 4 ? (f183(2), f139(1, 1, 1, 1), f165(v236), f153(), f186(57, -88, 0), f256(.5, .5, 1.5), f251(5, 0, 0, 1), f227(v281), f139(1.5, 1.5, 1.5, 1), f144(v163), f186(-2, -8, 0), f139(0, 0, 0, .8), f144(v163), f185()) : (f186(0, -120, 0), f227(v234), f186(0, 109, 0), f256(.8, .8, 1), f139(0, 0, 0, 1), f144(v296), f186(-1, -3, 0), f139(1.5, 1.5, 1.5, 1), f144(v296)), 1 == v182) {
            f186(0, 109, 0), f256(1.4, 1.4, 1), f227(v234), f139(0, 0, 0, 1);
            var e = f156("" + v16);
            if (f144("" + v16), f139(1, 1, 1, 1), f153(), f186(.5 * -e - 33, 95, -5), f256(1.8, -1.8, .01), f251(2 * v249, 0, 1, 0), gl.enable(gl.DEPTH_TEST), f196(7), gl.disable(gl.DEPTH_TEST), f139(0, 0, 0, 1), f185(), v183 += v262, v183 > 100 && v117 > 100) {
                AddCoin(.5 * v207 - 50 + 100 * Math.random(), 250);
                for (var v = 0; 99 > v; v++) Pref_User_COINS++;
                v117 -= 100, v183 = 0
            } else if (v183 > 100 && v117 > 20) {
                AddCoin(.5 * v207 - 50 + 100 * Math.random(), 250);
                for (var v = 0; 19 > v; v++) Pref_User_COINS++;
                v117 -= 20, v183 = 0
            } else v183 > 100 && v117 > 0 && (AddCoin(.5 * v207 - 50 + 100 * Math.random(), 250), v117--, v183 = 0);
            0 == v117 && (f186(0, 84, 0), f144(f33(v94)), Pref_User_Scores[v145] > 0 && (f186(0, 130, 0), f144(f33(Pref_User_Scores[v145])), f139(0, 0, 0, .5), f153(), f186(0, -35, 0), f256(.6, .6, 1), f144(v287[80]), f185(), f139(0, 0, 0, 1)))
        }
        f185(), 0 == v117 && (f139(1, 1, 1, 1), f153(), f186(.5 * v207 - 165, 546, 0), f256(.6, .6, 1), f30("textures/try1.png"), f185(), f153(), f186(.5 * v207, 546, 0), f256(.6, .6, 1), f30("textures/try2.png"), f185(), f153(), f186(.5 * v207 + 165, 546, 0), f256(.6, .6, 1), f30("textures/try3.png"), f185(), 1 == v215 && v313 > .5 * v207 - 246 && .5 * v207 - 82 > v313 && v312 > 440 && 650 > v312 && (v218 = 0, v183 = 0, v94 = 0, f219(0), v245 = 1, v21 = 2, v35 = 5), 1 == v215 && v313 > .5 * v207 - 82 && .5 * v207 + 82 > v313 && v312 > 440 && 650 > v312 && (v218 = 0, v183 = 0, v94 = 0, f219(0), v9 = 999, v12 = 10, v208 = 9), 1 == v215 && v313 > .5 * v207 + 82 && .5 * v207 + 246 > v313 && v312 > 440 && 650 > v312 && (v218 = 0, v183 = 0, v94 = 0, f219(0), v9 = 1, v12 = 5, v208 = 9))
    }
    1 > v182 && (v182 += .002 * v262), v182 > 1 && (v182 = 1)
}

function f149() {
    f183(3), f139(0, 0, 0, .8), f129(0, 0, v207, 700), f183(2), f153(), f186(.5 * v207, 300, 0), f256(.8, .8, 1), f139(1.5, 1.5, 1.5, 1), f227(v234), f144(v287[25]), f256(.8, .8, 1), f186(0, 120, 0), f139(.5, .5, .5, 1), f144(v287[26]), f185()
}

function f158(v, e, r) {
    var f = v313,
        t = v312;
    return f139(1, 1, 1, 1), f153(), f186(e, r, 0), f165(v), f185(), 1 == v215 && f > e - .5 * GLTexture[v].image.width && f < e + .5 * GLTexture[v].image.width && t > r - .5 * GLTexture[v].image.height && t < r + .5 * GLTexture[v].image.height ? 1 : 0
}

function f208() {
    1 == f214(19, 200 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = 1, v35 = -1), 1 == f214(20, 380 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = 2, v35 = -1);
    var v = 1 + .01 * Math.cos(v257 / 57.2957795 * 3);
    610 > v207 && (v *= .9), 560 > v207 && (v *= .9), f153(), f186(.5 * v207, 135 * v263, 0), f251(180 * v263 + 180, 0, 0, 1), f183(2), f256(v, v, 1), f186(0, -5, 0), f139(1, 1, 1, 1), f165(5), f185(), 1 == f158(16 - Pref_User_Sound, v207 - 50, 50) && (Pref_User_Sound = 1 - Pref_User_Sound, Save_UserPrefs()), 1 == f158(20, v207 - 50, 130) && (v245 = 1, v21 = 6, v35 = -1), v265 = "Nop", f153(), f186(.5 * v207, 598, 0), f256(.5, .5, 1), 929 > v207 && f256(.75, .8, 1), f227(v234), f139(0, 0, 0, .8), f144(v287[77]), f186(0, 78, 0), f144(v287[78]), f227(v234), f139(1.5, 1.5, 1.5, 1), f186(0, -88, 0), f144(v287[77]), f186(0, 78, 0), f144(v287[78]), f185(), 1 == f137(0, 575, v207, 710) && (v265 = "http://games.famobi.com")
}

function f173() {
    f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), v243 *= .9, 0 == v245 && 1 == v215 && v312 > 155 && v313 > v207 - 200 && (v145++, v243 = 1), 0 == v245 && 1 == v215 && v312 > 155 && 200 > v313 && (v145--, v243 = -1), v145 > v275 && (v145 = 1), 1 > v145 && (v145 = v275);
    var v = 170 * v263,
        e = 60 * v263;
    f153(), f186(20, v, 0), f251(-2, 0, 0, 1);
    var r = 3 * Math.cos(v257 / 57.2957795 * 5);
    if (f153(), f186(v207 - 65 - r, 246 * v263, 0), f183(2), f256(-.9, 3.7, 1), f139(1, 1, 1, 1), f165(14), f185(), f153(), f186(8 + r, 246 * v263, 0), f183(2), f256(.9, 3.7, 1), f139(1, 1, 1, 1), f165(14), f185(), f186(v243 * v207, 0, 0), f153(), f186(v207 - 110, -78, 0), f256(.8, .8, 1), 750 > v207 && f256(.8, .9, 1), 600 > v207 && f256(.9, 1, 1), f139(1.5, 1.5, 1.5, 1), 0 == v145) f227(FontRight), f144(v287[23]);
    else {
        f139(1.5, 1.5, 1.5, 1), f227(FontRight), f144(v287[24]);
        var f = f156(v287[24]);
        f186(-f, 0, 0), f144(v271[v145]), f = f156(v271[v145]), f153(), f139(1, 1, 1, 1), f186(-f - 45, 50, 0), f256(.2, .19, 1), f30("textures/track_" + v145 + ".png"), f185()
    }
    f185();
    for (var t = 0, a = 0; 8 > a; a++) {
        t = 1 - t, 1 == t && (f183(3), f139(1, 1, 1, .2), f129(2 * -v207, 0, 3 * v207, e), f183(2)), f186(100 * v243, 0, 0);
        var n = .95;
        600 > v207 && (n = .75), 550 > v207 && (n = .7), 505 > v207 && (n = .6);
        var o = 35;
        if (f139(2, 2, 0, 1), 7 > a && f135(a, v145) > 0 || 7 == a && parseInt(Pref_User_Scores[v145]) > 0 && parseInt(f45(v145)) > 0) {
            f153(), f186(45, 10, 0), f256(.45 * n, .45, 1);
            var i = "" + f135(a, v145),
                s = f98(a, v145);
            7 == a && (i = "" + f45(v145)), 7 == a && (s = v45), (1 > s || s > 24) && (s = 1), f227(v281), f144(i);
            var f = n * (.45 * f156(i) + 10);
            f > o && (o = f), f185(), v207 > 670 && (f139(1, 1, 1, 1), f153(), f186(o + 68, 30, 0), f256(.42, .42, 1), f30("textures/avatars/" + s + ".jpg"), f185(), o += 51), f139(2, 2, 2, 1);
            var u = f132(a, v145),
                l = f104(a, v145);
            7 == a && (f139(2, 2, 0, 1), u = "" + v97, l = "" + Pref_User_Scores[v145]), f153(), f186(45 + o, 0, 0), f256(.6 * n, .6, 1), f227(v281), f144(u), f185(), f153(), f186(v207 - 110, 0, 0), f256(.6 * n, .6, 1), f227(FontRight), f144(f33(l)), f185()
        }
        f186(0, e, 0)
    }
    f185(), f183(1), f214(0, 640 * v263), f214(0, 640 * v263 - 740), 1 == f215() && (v245 = 1, v21 = 0, v35 = -1)
}

function f206() {
    f183(3), f139(0, 0, 0, .6 * v263), f129(0, 0, v207, 700), f183(1), f214(0, 650 + 50 * (1 - v263)),
        f214(0, 640 * v263 - 730), f227(v234), f153(), f186(.5 * v207, 110, 0), f251(-2, 0, 0, 1), f256(.25 * (v263 + 1), .5, 1), 610 > v207 && f256(.8, .9, 1), f139(2, 2, 0, .8), f144(v287[52]), f186(0, 90, 0), f139(3, 3, 3, 1.5), f144(v287[53]), f186(0, 120, 0), f139(2, 2, 0, .8), f144(v287[54]), f186(0, 90, 0), f139(3, 3, 3, 1.5), f144(v287[55]), f186(0, 120, 0), f139(2, 2, 0, .8), f144(v287[56]), f186(0, 90, 0), f139(3, 3, 3, 1.5), f144(v287[57]), f186(0, 503, 0), f139(3, 3, 3, 1.5), f144(v287[76]), f186(0, -201, 0), f256(1.8, 1.8, 1), f139(1, 1, 1, 1), f30("textures/about_pic.png"), f185(), 1 == f215() && (v245 = 1, v21 = 0, v35 = -1)
}

function f205() {
    f183(3), f139(0, 0, 0, .8 * v263), f129(0, 0, v207, 700), f183(1), 1 == f89(58, 200 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = -1, v35 = 21), 1 == f89(59, 350 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = -1, v35 = 10, f216(1)), 1 == f89(60, 500 * v263) && 0 == v245 && (f219(0), v245 = 1, v21 = 0, v35 = 1, f216(1)), f227(v234), f153(), f186(.5 * v207, 75, 0), f251(-2, 0, 0, 1), f256(.5 * (v263 + 1), 1, 1), f139(2, 2, 2, .8), f144(v287[61]), f186(0, 90, 0), f185()
}

function f244() {
    switch (f166(), v208) {
        case 0:
            f208();
            break;
        case 1:
            f103();
            break;
        case 100:
            f74();
            break;
        case 2:
            f173();
            break;
        case 3:
            f149();
            break;
        case 4:
            f152();
            break;
        case 5:
            f180();
            break;
        case 6:
            f206();
            break;
        case 7:
            f205();
            break;
        case 8:
            f91();
            break;
        case 9:
            f179()
    }
    0 == v245 && 1 > v263 && (v263 += .005 * v262, v263 > 1 && (v263 = 1)), 1 == v245 && v263 > -1 && (v263 -= .01 * v262, -1 > v263 && (v263 = -1)), 1 == v245 && -1 == v263 && (v245 = 0, -1 != v21 && (v208 = v21, v21 = -1), -1 != v35 && (v214 = v35, v35 = -1)), v257 += .1 * v262, v257 > 360 && (v257 -= 360)
}

function f6() {
    v106 = -1;
    var v;
    v = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), v.onreadystatechange = function() {
        if (4 == v.readyState) {
            var e = v.responseText,
                r = e.split("\n");
            if (r.length < 3) return;
            var f = 0;
            for (i = 0; i < r.length; i++) {
                var t = r[i],
                    a = t.indexOf('"') + 1,
                    n = t.indexOf('"', a),
                    o = t.substring(a, n);
                o.length > 4 && (v282[f] = o, f++)
            }
            v106 = 1
        }
    };
    var e = (new Date).getTime();
    v.open("GET", "datas/resources.txt?" + e, !0), v.send()
}

function f171() {
    if (0 == v106 && f6(), -1 == v106 || v177 > 5) return 0;
    if (0 == v232) return 1;
    var v = v282.length;
    v == LoaderPosition && 0 == DataToDownload && v177++, gl.clearColor(.2, .2, .2, 1), gl.clear(gl.COLOR_BUFFER_BIT), f166();
    var e = .5 * v207,
        r = .5 * v142,
        f = Math.floor(LoaderPosition / v * 100);
    if (3 > LoaderPosition && DataToDownload > 0) return 1;
    if (LoaderPosition > 2) {
        f183(2), f153(), f186(e, r, 0), f256(.6, .6, 1), f139(0, 0, 0, .5);
        for (var t = 0; 360 > t; t += 15) f153(), f251(t + 180, 0, 0, 1), f186(0, -128, 0), f165(0), f185();
        f139(1, 1, 1, 1);
        for (var t = 0; 360 > t; t += 15) f > t / 3.6 && (f153(), f186(0, -10, 0), f251(t + 180, 0, 0, 1), f186(0, -128, 0), f165(0), f185());
        f185()
    }
    if (f183(2), f139(2, 2, 2, .2), f153(), f186(e, r - 60, 0), f256(1.1, 1.1, 1.1), f227(v234), f139(0, 0, 0, 1), f144(f + "%"), f186(0, -5, 0), f139(2, 2, 2, 1), f144(f + "%"), f185(), 6 > DataToDownload && v > LoaderPosition) {
        var a = v282[LoaderPosition],
            n = a.search(".png"),
            o = a.search(".jpg");
        if (n > 0 || o > 0) return GLTexture[v280] = f116(v280, "textures/" + a), v280++, LoaderPosition++, 1;
        var i = a.search(".obj");
        if (i > 0) return f188(v314, a), v314++, LoaderPosition++, 1;
        var s = a.search(".snd");
        if (s > 0) return f222(v315, "datas/sounds/" + a), v315++, LoaderPosition++, 1
    }
    return 1
}

function f154() {
    0 != f72() && 1 != f171() && (f79(), v95 = 0, v221 += v262, v221 > 50 && (v221 -= 50, v239 = 1 - v239), v186 += v262, v186 > 250 && (v186 -= 250, v185 = 1 - v185), f245())
}

function f118() {
    gl.bindTexture(gl.TEXTURE_2D, v34)
}

function f29(v, e) {
    var r = gl.createTexture();
    return gl.bindTexture(gl.TEXTURE_2D, r), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, v, e, 0, gl.RGBA, gl.UNSIGNED_BYTE, null), r
}

function f237(v, e) {
    v34 = f29(v, e), v39 = gl.createFramebuffer(), gl.bindFramebuffer(gl.FRAMEBUFFER, v39), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, v34, 0), gl.bindTexture(gl.TEXTURE_2D, null), gl.bindFramebuffer(gl.FRAMEBUFFER, null), famobi.log("f237")
}

function f258() {
    f154()
}

function f236() {
    var v = (new Date).getTime(),
        e = v - (v286 || v);
    e > 45 && (e = 45), .001 > e && (e = .001), v262 = e, requestAnimationFrame(f236), f258(), v286 = v
}

function f199() {
    if (famobi.log("f199"), !gl) {
        for (var v = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = 0; e < v.length; ++e)
            if (!gl) try {
                gl = v151.getContext(v[e], {
                    antialias: !1,
                    alpha: !1,
                    stencil: !1,
                    preserveDrawingBuffer: !0
                }), gl.viewportWidth = v176, gl.viewportHeight = v149, famobi.log("WebGL Init with: " + v[e]), famobi.log("WebGL Size: " + v176 + "x" + v149)
            } catch (r) {}
            gl || (v151.style.display = "none", document.getElementById("dlg-error-div").style.display = "block", Stanislic_SendInfo("WebGL_Error"))
    }
}

function f128() {
    v176 = f114(), v149 = f96(), v151.style.width = v176, v151.style.height = v149, v31 = window.devicePixelRatio || 1, v31 > 1 && (v51 = 1), v31 > 1 && (v31 *= .8), 1 == v79 && (v51 = 1), v151.width = v176 * devicePixelRatio * v51, v151.height = v149 * devicePixelRatio * v51, famobi.log("Screen:" + v176 + "x" + v149)
}

function f161() {
    f128(), gl && (gl.viewportWidth = v176, gl.viewportHeight = v149)
}

function DLG_WebGLStart() {
    f76(), f7(), f262(), Stanislic_Start(), f248(), f230(), v151 = document.getElementById("dlg-webgl-canvas"), f128(), f199(), f40(), f145(), f162(), f231(), f223(), f217(), f51(), f127(), f194(), f221(), f236()
}
var v146 = "en",
    ColizWord = new Array,
    v162 = new Array,
    v160 = new Array,
    v233 = 0,
    v192 = 0,
    v113, v112, v258 = 0,
    v259 = 0,
    v6, v72 = 0,
    v76 = 0,
    v277, v136 = 0,
    DataToDownload = 0,
    v262 = 0,
    v95 = 0,
    v215 = 0,
    v178 = 0,
    v265 = "",
    keysDown = {},
    v250 = 0,
    v313 = -1,
    v312 = -1,
    v239 = 0,
    v221 = 0,
    v185 = 0,
    v186 = 0,
    v217 = 180 / Math.PI,
    v80 = [],
    v138 = 0,
    v201 = -5e3,
    TextField_y = -5e3,
    Monetisation_IsFamobi = 0,
    v5 = 0,
    v19 = "php/";
window.famobi_onPauseRequested = function() {
    v5 = 1
}, window.famobi_onResumeRequested = function() {
    v5 = 0
};
var v79 = 0,
    v68 = 0,
    v256 = 0,
    v295 = 0,
    Pref_User_Sound = 1,
    v61 = 1,
    v212 = null,
    v109 = null,
    v45 = 1,
    v97 = null,
    v65 = "none",
    v169 = "EndlessTruck_DLG_001_",
    ScoresTable = [],
    v103 = 20,
    v104 = 0,
    v71 = 0,
    v75 = 0,
    Overlay_OnScreen = 0,
    Maxv273 = 40,
    v273 = new Array,
    v134 = !1,
    v172, TempGroundBounce, v274, v274Fade, v124, v283, Temps_size, TempRotation, Temps_Rotation, v322, Tempy, Tempz, Tempsx, Tempsy, Tempsz, shaderProgram = new Array,
    v101 = new Array,
    v154 = new Array,
    v241 = new Array,
    v240 = new Array,
    v167 = 0,
    v116 = -1,
    GLTexture = new Array,
    v98 = new Array,
    v144 = 200,
    v7, v3, v14, v150 = new Array,
    v96 = new Array,
    v56 = new Array,
    v210 = -1,
    v135 = [],
    v304 = mat4.create(),
    v284 = mat4.create(),
    v170 = mat4.create(),
    v137 = mat4.create(),
    v20, v207 = 300,
    v142 = 700,
    v173, v174, v175, v148, v246 = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    RIGHT = 0,
    LEFT = 1,
    v308 = 2,
    TOP = 3,
    BACK = 4,
    v318 = 5,
    v199 = 0,
    v198 = 0,
    v264 = new Array,
    v219 = 100,
    Game_ID_String = "endlesstruck",
    v197 = "?0.957",
    v287 = ["Please wait, loading...", "Back FLIP", "Front FLIP", "Perfect LANDING", "Best ", "Low On Gas", "Out Of Gas", "Press Space Bar", "Touch to continue", "GARAGE", "PAUSED", "CONTINUE", "EXIT", "Distance", "Total Distance", "Garage Shop", "ENGINE", "BODYSHELL", "WHEELS", "FUEL TANK", "BULLBAR", "Increase max speed", "Increase Tank Capacity", "Better handling", "Increase Tank Capacity", "Better protection", "Speed+1", "Weight-1 Fuel+1", "Weight-1 Handling+1", "Fuel+1", "Weight+1 Shield+1", "BUY", "Fully Geared", "Free Bucks", "Options", "Play Music", "Play Sounds", "About", "Fuel Bonus!", "MISSION", "Perform 1 front flip", "Earn more than $150", "Do a perfect landing", "Perform 1 back flip", "Drive over 300m in one run", "Do 2 perfect landings", "Perform a double front flip", "Earn more than $500", "Buy one upgrade from the shop", "Perform a double back flip", "Pick up 2 gas tanks", "Drive a cumulative distance of 1000m", "Perform 1 front flip & 1 back flip in 1 jump", "Drive over 500m in one run", "Pick up more than $100 in one run", "Perform a triple front flip", "Pick up 3 gas tanks", "Buy 3 upgrades from the shop", "Perform a triple back flip", "Pick up $10 after crashing", "Have a cash balance of $1000", "Perform a quadruple front flip", "Do a perfect landing after a front flip", "Drive over 600m in one run", "Perform a quadrupe back flip", "Drive a cumulative distance of 5000m", "Perform a quintuple front flip", "Collect a gas tank after running out of gas", "Perform a quintuple back flip", "Buy 4 upgrades from the shop", "Drive over 700m in one run", "Perform a quintuple front flip", "Collect 3 gas tanks in one run", "Land perfectly after a triple front flip", "Buy 8 upgrades from the shop", "Perform a sextuple back flip", "Earn more than $600 in one run", "Fully upgrade one part of your truck", "Perform a sextuple front flip", "Drive a cumulative distance of 10km", "Perform 3 triple front flips", "Fully upgrade 2 parts of your truck", "Pick up 5 gas tanks in one run", "Perform 3 triple back flips", "Earn more than $2000 in one run", "Do a perfect landing after a quadruple back flip", "Roll over 40m after a crash", "Perform 2 quadruple front flips", "Fully upgrade 3 parts of your truck", "Perform 2 quadruple back flips", "Do 1 triple front flip and a back flip in 1 jump", "Earn more than $3000 in one run", "Fully upgrade 4 parts of your truck", "Do a perfect landing after a quadruple front flip", "Drive more than 1km in one run", "Perform a septuple front flip", "Do 1 triple back flip and 1 front flip in 1 jump", "", "", "", "", "", "", "", "Mission completed", "HI-SCORES", "Crashed", "Best Scores", "User Prefs", "Edit Your Name", "About", "ENDLESS TRUCK", "©FAMOBI INC.", "ENGINE CODING, GRAPHICS", "Daniel Labriet, DanLabGames", "PRODUCTION, BUSINESS DEV.", "Julien Donguy, AdAsGame", "TESTERS", "Lea, Emma, Monsieur S.", "Ok", "Please Rotate Device", "Please Make this", "Game Window larger", "Earn ", "Push Jump Button On Right", "Press the space bar on the keyboard", "To jump over the fence", "Push Rotation Button On left", "Press ARROW KEYS on the keyboard", "To perform a FLIP!", "JUMP Control Learned", "FLIP Controls Learned"],
    help = null;
for ($i = 0; $i < v287.length; $i++) help = window.famobi.__(v287[$i]), help ? v287[$i] = help : famobi.log("not translated: " + v287[$i]);
var v74 = 0,
    v196 = [300, 1e3, 3e3, 7e3],
    v83 = [400, 800, 1e3, 2500, 6e3, 7e3, 8e3, 9e3, 9999],
    v195 = [350, 900, 2e3, 4500],
    v143 = [250, 600, 1500, 3500],
    v107 = [500, 2e3, 4e3, 7e3],
    v214 = 0,
    v193 = 0,
    v249 = 0,
    v171 = 500,
    v33 = 0,
    v24 = 0,
    v81 = 0,
    v11 = 0,
    v153 = 200,
    v272 = 200,
    v156 = 0,
    v191 = 0,
    v190 = 0,
    v244 = 0,
    v105 = 0,
    v86 = -1,
    v266 = 0,
    v41 = 0,
    v189 = 0,
    v89 = 0,
    v70 = 0,
    v77 = 1,
    v110 = 1,
    v92 = 0,
    v114 = 0,
    v188 = 0,
    v49 = 0,
    v63 = 0,
    v13 = 0,
    v15 = 0,
    v8 = 0,
    v10 = 0,
    v2 = 0,
    v4 = 0,
    v17 = 0,
    v36 = 0,
    v42 = 0,
    v1 = 0,
    v29 = 0,
    v311, v187 = 5,
    v291, v140 = 9,
    v223 = 0,
    v289 = 392,
    v276 = 227,
    v220 = 0,
    v292 = 0,
    v268 = 0,
    PCar = new f257,
    v285 = 45,
    v181 = 5,
    v231 = 0,
    v230 = 0,
    v69 = 0,
    v67 = 0,
    v129, v130, v306 = 1.3,
    v179 = 0,
    v222 = 0,
    v270, v159 = 0,
    Control_Right = 0,
    v161 = 0,
    v254 = 90,
    v133 = 90,
    v216 = 0,
    FlagCount = 6,
    PFlag = new Array,
    v269 = 10,
    v168 = new Array,
    v59 = 0,
    v310 = 0,
    v226 = 0,
    FlagX, FlagZ, FlagGoalX, FlagGoalZ, FlagMatrix, v66 = 0,
    v166 = 0,
    v165 = 0,
    v173 = 0,
    v174 = 0,
    v175 = 0,
    v164 = 0,
    v158 = 0,
    v157 = 0,
    v303 = -1,
    v294, v293, v302, v301, v300, v299, v255 = 15,
    v307 = new Array,
    v131 = 0,
    v180 = 0,
    v227 = .25,
    v155 = 0,
    v126 = 0,
    v125 = 50,
    v290 = 1,
    Sky_Green = 1,
    Sky_Blue = 1,
    v251 = 1,
    Cloud_Green = 1,
    Cloud_Blue = 1,
    v297 = 1,
    Obj_Green = 1,
    Obj_Blue = 1,
    v25 = 1,
    v238 = 10,
    v323 = new Array,
    v123 = 5,
    v317 = new Array,
    v184 = 0,
    v102 = 0,
    v121 = 0,
    v120 = -1,
    v247 = 0,
    v54 = 0,
    v64 = 0,
    v100 = 0,
    v53 = 0,
    v115 = 0,
    v228 = 0,
    v99 = 0,
    v28 = 0,
    v139 = 319,
    v27 = 0,
    v22 = 0,
    v73 = 0,
    v37 = 0,
    v32 = 0,
    v91 = -1,
    v147 = 0,
    v108 = 0,
    v194 = 0,
    v128 = 0,
    v122 = 0,
    v111 = 0,
    v84 = 0,
    v87 = 0,
    v88 = 0,
    v90 = 0,
    v52 = 0,
    v78 = 0,
    v267 = 46,
    v200 = 0,
    v152 = -1,
    v224 = 0,
    v225 = 0,
    v43 = 1,
    v44 = 1,
    v119 = 1,
    v309 = 0,
    Wall = new Array,
    v248 = 0,
    OBJ = new Array,
    v203 = new Array,
    v48 = new Array,
    v93 = 150,
    v252 = new Array,
    v253 = new Array,
    v62 = 0,
    v141 = new Array,
    v30 = 0,
    GLFontTexture, v320 = new Array,
    v232 = 0,
    v281 = 0,
    v234 = 1,
    FontRight = 2,
    v235 = 0,
    TextField_Selected = -1,
    v47 = 0,
    v209 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_.!";
String.prototype.replaceAt = function(v, e) {
    return this.substr(0, v) + e + this.substr(v + e.length)
};
var v50 = 0,
    v211 = new Array,
    v279 = "",
    v26 = 0,
    v118, v58 = 0,
    v57 = 1,
    v213 = null,
    v305 = null,
    v127 = null,
    v18 = null,
    v0 = 0;
window.onbeforeunload = function() {
    v305.pause(), v305.currentTime = 0
};
var v271 = ["", "MONTENRY", "MANYRUN", "MACANO", "WAYCOCO", "TIKINANEN", "AUSTRAMIA", "BROOMAP", "FLAKESTONES", "MOOSWOOD", "KWOOLSTOOD", "DUSTDOWN", "SUNNINGSTONES"],
    v288 = ["", "Red Puledro", "BonBallo", "Mad Buffalo", "Samy Runner", "Usually Serious", "Groucho"],
    v316 = ["", "0", "11", "9", "10", "8"],
    v278 = ["", "0", "100", "225", "350", "400", "475", "1000", "3000", "5000", "7000"],
    v242 = ["", "50", "75", "100", "125", "150", "175", "200", "225", "250", "275", "300", "325", "350", "375", "400", "425", "450", "475", "500", "525", "550", "575", "600", "625", "650", "675", "700", "725", "750", "775", "800", "900", "1000", "1100"],
    v60 = ["", "50", "125", "225", "350", "400", "475", "600", "650", "700", "800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "25000", "25000", "25000", "25000", "25000", "25000", "25000", "25000", "25000", "25000"],
    v263 = -1,
    v208 = 0,
    v257 = 0,
    v21 = -1,
    v35 = -1,
    v245 = 0,
    v275 = 12,
    v145 = 1,
    v82 = 0,
    v229 = 1,
    v298 = 5,
    v38 = "Oups",
    v85 = 0,
    v40 = 0,
    v218 = 0,
    v183 = 0,
    v182 = 0,
    v163, v296, v236 = -1,
    v117, v16, v94 = 0,
    v9 = 1,
    v12 = 5,
    v55 = 0,
    v243 = 0,
    LoaderPosition = 0,
    v177 = 0,
    v106 = 0,
    v282 = [],
    v280 = 0,
    v314 = 0,
    v315 = 0,
    gl, v151, v286 = 0,
    v176 = 600,
    v149 = 300,
    v51 = 1.5,
    v39, v34, fps = 60,
    v31 = 1;
window.onresize = function() {
    f161(), v151.focus()
};