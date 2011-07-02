(function() { ! google.nocsixjs && google.timers && google.timers.load.t && (google.timers.load.t.xjses = (new Date).getTime());
})();
 (function() {
    var e = {},
    f = !1,
    g = function(b, c, a) {
        try {
            var d = e[c[a][0]];
            if (d && d[b]) d[b](c[a][1])
        } catch(m) {
            google.ml(m, !1, {
                cause: "m" + b,
                index: a,
                mid: c[a] && c[a][0]
            })
        }
    };
    if (google.mc && google.j) for (var h = 0, i; i = google.mc[h++];) if (i[0] == 29) {
        google.j.cfg = i[1];
        break
    }
    var j = null,
    k,
    l;
    function n() {
        var b = j.value;
        l = b ? eval("(" + b + ")") : {}
    }
    google.med = function(b) {
        if (google.mc) {
            for (var c = google.mc.concat(google.smc || []), a = 0, d = c.length; a < d; a++) g(b, c, b == "dispose" ? d - a - 1: a);
            if (b == "dispose") google.mc = null,
            google.smc = null;
            f = b != "dispose"
        }
    };
    google.register = function(b, c) {
        e[b] = c;
        if (google.smc && f) for (var a = 0, d = google.smc.length; a < d; a++) google.smc[a][0] == b && g("init", google.smc, a)
    };
    google.save = function(b, c) {
        if (j) {
            var a;
            a: {
                if (google.mc) {
                    a = 0;
                    for (var d; d = google.mc[a++];) if (d[0] == b) {
                        a -= 1;
                        break a
                    }
                }
                a = -1
            }
            if (a >= 0) google.mc[a][1] = c,
            n(),
            l[k] = google.mc,
            j.value = google.stringify(l)
        }
    };
    google.initHistory = function() {
        k = google.kEI;
        if (j = document.getElementById("hcache")) if (n(), l[k]) google.mc = l[k]
    };
})();
 (function() {
    var h = void 0,
    i = null;
    var k = function(a, b, c, d) {
        a = a.split(".");
        c = c || window; ! (a[0] in c) && c.execScript && c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) if (!a.length && b !== h) {
            if (!c[e] || !d) c[e] = b
        } else c = c[e] ? c[e] : c[e] = {}
    };
    google.exportSymbol = function(a, b, c) {
        k(a, b, c)
    };
    google.exportDefaultSymbol = function(a, b, c) {
        k(a, b, c, !0)
    };
    google.exportProperty = function(a, b, c) {
        a[b] = c
    };
    google.inherits = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.o = b.prototype;
        a.prototype = new c
    };
    var m = {
        a: !1,
        h: !1,
        b: !1,
        opera: !1
    },
    n = {
        a: !1,
        g: !1,
        m: !1,
        i: !1,
        j: !1,
        k: !1,
        e: !1,
        d: !1,
        c: !1,
        opera: !1
    };
    m.version = "";
    n.version = "";
    var o = function(a) {
        for (var b in m) m[b] = !1;
        for (var c in n) n[c] = !1;
        b = c = i;
        if (window.opera) m.opera = !0,
        n.opera = !0,
        c = b = /Opera\/(\S+)/;
        else if (a.indexOf("MSIE") >= 0) m.a = !0,
        n.a = !0,
        c = b = /MSIE\s+([^\);]+)(\)|;)/;
        else if (a.indexOf("WebKit") >= 0) {
            m.b = !0;
            if (a.indexOf("Chrome") >= 0) n.e = !0,
            b = /Chrome\/(\S+)/;
            else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") < 0) n.d = !0,
            b = /Version\/(\S+)/;
            else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") >= 0) n.c = !0,
            b = /Version\/(\S+)/;
            else if (a.indexOf("Safari") >= 0) n.m = !0,
            b = /Version\/(\S+)/;
            if (a.indexOf("iPad") >= 0) n.i = !0;
            else if (a.indexOf("iPhone") >= 0) n.j = !0;
            else if (a.indexOf("iPod") >= 0) n.k = !0;
            c = /WebKit\/(\S+)/
        } else if (a.indexOf("Gecko") >= 0) {
            m.h = !0;
            if (a.indexOf("Firefox") >= 0) n.g = !0,
            b = /Firefox\/(\S+)/;
            c = /rv\:([^\);]+)(\)|;)/
        }
        if (c) c = c.exec(a),
        m.version = c ? c[1] : "";
        if (b) c = b.exec(a),
        n.version = c ? c[1] : "";
        google.browser = google.browser || {};
        google.browser.engine = {
            IE: m.a,
            GECKO: m.h,
            WEBKIT: m.b,
            OPERA: m.opera,
            version: m.version
        };
        google.browser.product = {
            IE: n.a,
            FIREFOX: n.g,
            SAFARI: n.m,
            IPAD: n.i,
            IPHONE: n.j,
            IPOD: n.k,
            CHROME: n.e,
            ANDROID_TABLET: n.d,
            ANDROID_MOBILE: n.c,
            OPERA: n.opera,
            version: n.version
        }
    };
    o(google.ua || window.navigator.userAgent);
    var p = function(a, b) {
        function c(a, b) {
            if (a < b) return - 1;
            else if (a > b) return 1;
            return 0
        }
        for (var d = 0, e = a.replace(/^\s+|\s+$/g, "").split("."), f = b.replace(/^\s+|\s+$/g, "").split("."), g = Math.max(e.length, f.length), j = 0; d == 0 && j < g; j++) {
            var w = e[j] || "",
            l = f[j] || "",
            Q = RegExp("(\\d*)(\\D*)", "g"),
            R = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = Q.exec(w) || ["", "", ""],
                r = R.exec(l) || ["", "", ""];
                if (q[0].length == 0 && r[0].length == 0) break;
                d = c(q[1].length == 0 ? 0: parseInt(q[1], 10), r[1].length == 0 ? 0: parseInt(r[1], 10)) || c(q[2].length == 0, r[2].length ==
                0) || c(q[2], r[2])
            }
            while (d == 0)
        }
        return d
    };
    google.browser = google.browser || {};
    google.browser.init = o;
    google.browser.compareVersions = p;
    google.browser.isEngineVersion = function(a) {
        return p(m.version, a) >= 0
    };
    google.browser.isProductVersion = function(a) {
        return p(n.version, a) >= 0
    };
    var s = /^(\w+)?(?:\.(.+))?$/,
    t = /^#([\w-]+)$/,
    u = function(a) {
        return (document.getElementById("xjsc") || document.body).appendChild(a)
    },
    v = function(a, b) {
        var c;
        if (c = a.match(t)) {
            var d = document.getElementById(c[1]);
            return d ? [d] : []
        }
        c = a.match(s);
        d = c[2] && RegExp("\\b" + c[2] + "\\b");
        c = (b || document).getElementsByTagName(c[1] || "*");
        for (var e = [], f = 0, g; g = c[f++];)(!d || d.test(g.className)) && e.push(g);
        return e
    },
    x = function(a) {
        return a.textContent || a.innerText || ""
    };
    google.dom = {
        append: u,
        create: function(a, b) {
            var c = a.match(s),
            d = document.createElement(c[1]);
            if (c[2]) d.className = c[2];
            if (b) d.innerHTML = b;
            return d
        },
        get: function(a, b) {
            return v(a, b)[0] || i
        },
        getAll: v,
        getText: x,
        insert: function(a, b, c) {
            return b.parentNode.insertBefore(a, c ? b.nextSibling: b)
        },
        remove: function(a) {
            return a && a.parentNode && a.parentNode.removeChild(a)
        },
        set: function(a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d = arguments[c],
                e = arguments[c + 1],
                f = a.style;
                if (f && d in f) f[d] = e;
                else if (d in a) a[d] = e;
                else if (m.a &&
                f && d == "opacity") a.zoom = 1,
                d = (f.filter || "").replace(/alpha\([^)]*\)/, ""),
                isNaN(parseFloat(e)) || (d += "alpha(opacity=" + e * 100 + ")"),
                f.filter = d
            }
            return a
        }
    };
    google.listen = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    };
    google.unlisten = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    };
    var y = {},
    z = function(a, b) {
        return a[1] - b[1]
    },
    A = function(a, b, c, d) {
        var e = c === h ? !0: c,
        f = c === !1,
        g = b && b[0] === c;
        if (a in y) {
            d === h && (d = !1);
            var j;
            j = typeof d == "function" ? d: function(a) {
                return a === d
            };
            for (var w = 0, l; l = y[a][w++];) if (l = l[0].apply(i, b || []), f) e = e || l;
            else if (g && (b[0] = l), e = l, j(e)) return e
        }
        return typeof d == "function" ? c: e
    };
    google.msg = {
        listen: function(a) {
            var b = 0,
            c = arguments,
            d = c.length;
            d % 2 == 1 && (b = c[d - 1]);
            for (var e = 0; e < d - 1; e += 2) {
                var f = c[e];
                y[f] || (y[f] = []);
                y[f].push([c[e + 1], b]);
                y[f].sort(z)
            }
        },
        unlisten: function(a) {
            for (var b = 0; b < arguments.length - 1; b += 2) {
                var c = y[arguments[b]];
                if (c) for (var d = arguments[b + 1], e = 0; e < c.length; ++e) if (c[e][0] == d) {
                    c.splice(e, 1);
                    break
                }
            }
        },
        send: A
    };
    var B,
    C = window.location.protocol + "//" + window.location.host,
    D = function(a, b, c) {
        if (!A(32, [a, b, c], !1)) try {
            if (RegExp("^(" + C + ")?/(url|aclk)\\?.*&rct=j(&|$)").test(a)) if (b) google.r = 1,
            b.location.replace(a);
            else {
                if (!B) B = document.createElement("iframe"),
                B.style.display = "none",
                u(B);
                google.r = 1;
                B.src = a
            } else window.location.href = a
        } catch(d) {
            window.location.href = a
        }
    },
    E = function() {
        var a = window.location,
        b = a.hash ? a.href.substr(a.href.indexOf("#") + 1) : "",
        c = b && b.match(/(^|&)q=/),
        d = a.search ? a.href.substr(a.href.indexOf("?") +
        1).replace(/#.*/, "") : "",
        b = (c ? b: d).replace(/(^|&)(fp|tch)=[^&]*/g, "").replace(/^&/, "");
        return (c ? "/search": a.pathname) + (b ? "?" + b: "")
    },
    F = function() {
        var a = window.location;
        return a.hash ? a.href.substr(a.href.indexOf("#")) : ""
    },
    G = function(a, b) {
        var c,
        d = b ? (c = b.indexOf("#")) >= 0 && b.substr(c) : F();
        return (c = d && d.match("[#&]" + (b ? "(q|fp)": "fp") + "=") ? d.match("[#&]" + a + "=([^&]*)") : (b ? b.match(/(\?|$)[^#]*/)[0] : window.location.search).match("[?&]" + a + "=([^&]*)")) ? c[1] : i
    };
    google.nav = {
        go: D,
        search: function(a, b) {
            var c = E().match(/[?&][\w\.\-~]+=([^&]*)/g),
            d = {};
            if (c) for (var e = 0, f; f = c[e++];) {
                f = f.match(/([\w\.\-~]+?)=(.*)/);
                var g = f[2];
                d[f[1]] = g
            }
            for (f in a) a.hasOwnProperty(f) && (g = a[f], g == i ? delete d[f] : d[f] = g);
            c = ["/search?"];
            e = !0;
            for (f in d) d.hasOwnProperty(f) && (c.push((e ? "": "&") + f + "=" + d[f]), e = !1);
            D(c.join(""), h, b)
        },
        getLocation: E,
        getLocationHash: F,
        getParam: G,
        getQuery: function() {
            return G("q")
        }
    };
    var H = function() {
        return document.body.dir == "rtl" || document.dir == "rtl"
    },
    I = function(a, b, c) {
        var d = c ? "": 0;
        if (m.a) {
            if (d = b.replace(/\-([a-z])/g,
            function(a, b) {
                return b.toUpperCase()
            }), d = a.currentStyle && a.currentStyle[d] || "", !c) {
                if (!/^-?\d/.test(d)) return 0;
                c = a.style.left;
                a.style.left = d;
                d = a.style.pixelLeft;
                a.style.left = c
            }
        } else {
            a = document.defaultView && document.defaultView.getComputedStyle(a, "");
            if (m.b && !a) return d;
            d = a.getPropertyValue(b);
            d = c ? d: parseInt(d, 10)
        }
        return d
    },
    J = function(a) {
        var b;
        m.a ? (b = a.style.pixelWidth ||
        0, b || (b = a.offsetWidth - I(a, "paddingLeft") - I(a, "paddingRight") - I(a, "borderLeft") - I(a, "borderRight"), b < 0 && (b = 0))) : b = I(a, "width");
        return isNaN(b) ? 0: b
    },
    K = function(a) {
        return a.offsetTop + (a.offsetParent ? K(a.offsetParent) : 0)
    },
    L = function(a) {
        return a.offsetLeft + (a.offsetParent ? L(a.offsetParent) : 0)
    },
    M = function(a, b) {
        return ! a || !b ? !1: RegExp("(^|\\s)" + b + "($|\\s)").test(a.className)
    };
    google.style = {
        getComputedStyle: I,
        getHeight: function(a) {
            var b = I(a, "height");
            m.a && !b && (b = a.offsetHeight - I(a, "paddingTop") - I(a, "paddingBottom") - I(a, "borderTop") - I(a, "borderBottom"), b < 0 && (b = 0));
            return isNaN(b) ? 0: b
        },
        getWidth: J,
        getPageOffsetTop: K,
        getPageOffsetLeft: L,
        getPageOffsetStart: function(a) {
            return L(a) + (H() ? J(a) : 0)
        },
        getColor: function(a) {
            return String(I(a, "color", !0))
        },
        hasClass: M,
        isRtl: H,
        addClass: function(a, b) {
            if (a && b && !M(a, b)) {
                var c = a.className == "" ? [] : a.className.split(/\s/);
                c.push(b);
                a.className =
                c.join(" ")
            }
        },
        removeClass: function(a, b) {
            if (M(a, b)) {
                for (var c = a.className.split(/\s/), d = c.length - 1; d >= 0; d--) c[d] == b && c.splice(d, 1);
                a.className = c.join(" ")
            }
        }
    };
    var N = {},
    O = ["&", "&amp;", "<", "&lt;", ">", "&gt;", '"', "&quot;", "'", "&#39;", "{", "&#123;"],
    P = function(a) {
        return m.a ? window.event.srcElement: a.target
    },
    S = function(a) { ! a || m.a ? window.event.cancelBubble = !0: a.stopPropagation && a.stopPropagation()
    },
    T = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    },
    U = function(a, b) {
        S(b);
        var c = document.getElementById(a);
        if (c) c.style.display == "none" ? (c.style.display =
        "", N[a] = T(U, a), google.listen(document.body, "click", N[a])) : (c.style.display = "none", N[a] && google.unlisten(document.body, "click", N[a]))
    };
    google.util = {
        escape: function(a) {
            for (var b = 0; b < O.length; b += 2) a = a.replace(RegExp(O[b], "g"), O[b + 1]);
            return a
        },
        unescape: function(a) {
            for (var b = 0; b < O.length; b += 2) a = a.replace(RegExp(O[b + 1], "g"), O[b]);
            return a
        },
        eventTarget: P,
        stopPropagation: S,
        getSelection: function() {
            return window.getSelection && window.getSelection().toString() || document.selection && document.selection.createRange && document.selection.createRange().text
        },
        xjsol: function(a) {
            if (google.sc && (a = google.sc[a])) {
                for (var b = 0; b < a.cb.length; b++) a.cb[b]();
                a.cb = []
            }
        },
        xjsl: function(a, b) {
            var c = google.sc[a];
            if (c) c.dl ? b && b() : (b && c.cb.push(b), google.dlj(c.u), c.dl = !0)
        },
        togglePopup: U,
        rateLimitFunction: function(a, b, c, d) {
            var e = 0,
            f = !1,
            g = i;
            return function() {
                var j = google.time();
                f ? g = Array.prototype.slice.call(arguments, 0) : j - e >= c ? (e = j, b.apply(a, arguments)) : d && (j = c - (j - e), f = !0, g = Array.prototype.slice.call(arguments, 0), setTimeout(function() {
                    f = !1;
                    e = google.time();
                    b.apply(a, g)
                },
                j))
            }
        }
    };
    var V = function(a, b, c) {
        var d = RegExp("([?&])" + b + "=.*?(&|$)"),
        a = a.replace(/^([^#]*)(#|$)/,
        function(a, b) {
            return b
        });
        return ! a.match(d) && c != "" ? a + "&" + b + "=" + c: a.replace(d,
        function(a, d, g) {
            return c ? d + b + "=" + c + g: g ? d: ""
        })
    };
    google.srp = {
        isSerpLink: function(a) {
            return /(search|images)/.test(a.href)
        },
        isSerpForm: function(a) {
            return /\/search$/.test(a.action)
        },
        updateLinksWithParam: function(a, b, c, d) {
            var e = document.getElementsByTagName("A");
            google.base_href = V(google.base_href, a, b);
            for (var f = 0, g; g = e[f++];) if (c(g)) {
                var j = m.a ? g.innerHTML: h;
                g.href = V(g.href, a, b);
                if (j != h) g.innerHTML = j
            }
            for (f = 0; c = document.forms[f++];) if (d(c)) {
                for (g = e = 0; j = c.elements[g++];) if (j.name == a) e = 1,
                b != "" ? j.value = b: j.parentNode.removeChild(j);
                if (!e && b != "") e = document.createElement("input"),
                e.type = "hidden",
                e.value = b,
                e.name = a,
                c.appendChild(e)
            }
        },
        qs: function(a) {
            if (a = P(a)) {
                for (; ! M(a, "qs");) if (a = a.parentNode, !a || a == document.body) return;
                var b = document.getElementsByName("q"),
                c = b && b[0],
                b = document.getElementById("tsf-oq");
                if (c && b && window.n && (c = c.value, b = x(b), c && c != b)) b = V(a.href, "q", encodeURIComponent(c)),
                a.href = V(b, "prmd", "")
            }
        }
    };
    google.xhr = function() {
        var a = i;
        if (window.XMLHttpRequest) try {
            a = new XMLHttpRequest
        } catch(b) {}
        if (!a) for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0, e; e = c[d++];) try {
            a = new ActiveXObject(e);
            break
        } catch(f) {}
        return a
    };
})();
 (function() {
    var e = function(a) {
        var b = typeof a;
        if (b == "object") if (a) {
            if (a instanceof Array) return "array";
            else if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if (c == "[object Window]") return "object";
            if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
            if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if (b == "function" && typeof a.call == "undefined") return "object";
        return b
    };
    var f = function() {},
    j = function(a, b, c) {
        switch (typeof b) {
        case "string":
            i(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b: "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (b == null) {
                c.push("null");
                break
            }
            if (e(b) == "array") {
                var h = b.length;
                c.push("[");
                for (var d = "", g = 0; g < h; g++) c.push(d),
                j(a, b[g], c),
                d = ",";
                c.push("]");
                break
            }
            c.push("{");
            h = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], typeof g != "function" && (c.push(h), i(d, c), c.push(":"),
            j(a, g, c), h = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    },
    k = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\u0008": "\\b",
        "\u000c": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\u000b": "\\u000b"
    },
    l = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g,
    i = function(a, b) {
        b.push('"', a.replace(l,
        function(a) {
            if (a in k) return k[a];
            var b = a.charCodeAt(0),
            d = "\\u";
            b < 16 ? d += "000": b < 256 ? d += "00": b < 4096 && (d += "0");
            return k[a] = d + b.toString(16)
        }), '"')
    };
    var m = [],
    n = "/",
    o,
    p;
    function q() {
        var a = o.value;
        p = a ? eval("(" + a + ")") : {}
    }
    var r = [];
    google.History = {
        addPostInitCallback: function(a) {
            r.push(a)
        },
        client: function(a) {
            m.push(a);
            return m.length - 1
        },
        initialize: function(a) {
            n = a;
            p = null;
            if (o = document.getElementById("hcache")) {
                q();
                for (a = 0; a < m.length; ++a) p && p[n] && p[n][a] && m[a].call(null, p[n][a]);
                for (var a = 0, b; b = r[a++];) b();
                r = []
            }
        },
        save: function(a, b) {
            if (o) q(),
            p[n] || (p[n] = {}),
            p[n][a] = b,
            o.value = google.stringify(p)
        }
    };
    google.stringify = function(a) {
        var b = [];
        j(new f, a, b);
        return b.join("")
    };
})();
 (function() {
    var f = 0,
    h = 0,
    i = [];
    function k(b) {
        return b
    }
    function l() {++h;
        for (var b = 0, c; c = i[b++];) {
            var g = google.time() - c.e;
            if (g >= c.c || c.a) {
                for (var e = 0, a = void 0; a = c.d[e++];) google.dom.set(a[0], a[1], a[6] ? "rgb(" + a[3].join(",") + ")": a[3] + a[5]);
                c.a = !0;
                c.b && c.b();
                c = 0
            } else {
                for (e = 0; a = c.d[e++];) {
                    var d = a[4](g / c.c);
                    google.dom.set(a[0], a[1], (a[6] ? "rgb(" + [m(a[2][0], a[3][0], d, !0), m(a[2][1], a[3][1], d, !0), m(a[2][2], a[3][2], d, !0)].join(",") + ")": m(a[2], a[3], d, a[5] == "px")) + a[5])
                }
                c = 1
            }
            c || i.splice(--b, 1)
        }
        i.length || (window.clearInterval(f), f = 0)
    }
    function m(b, c, g, e) {
        b += (c - b) * g;
        return e ? Math.round(b) : b
    }
    function n(b) {
        for (var b = b.match(/#(..)(..)(..)/).slice(1), c = 0; c < 3; ++c) b[c] = parseInt(b[c], 16);
        return b
    }
    google.fx = {
        animate: function(b, c, g) {
            for (var e = 0, a; a = c[e++];) {
                var d = typeof a[2] == "string";
                d ? (a[2] = n(a[2]), a[3] = n(a[3]), a[5] = "") : a[5] = a[5] == null ? "px": a[5];
                a[4] = a[4] || k;
                a[6] = d;
                google.dom.set(a[0], a[1], d ? "rgb(" + a[2].join(",") + ")": a[2] + a[5])
            }
            var j = {
                c: b,
                b: g,
                e: google.time(),
                d: c
            };
            i.push(j);
            f = f || window.setInterval(l, 15);
            return {
                finish: function() {
                    if (!j.a) j.a = !0,
                    l()
                }
            }
        },
        easeInAndOut: function(b) {
            return (3 - 2 * b) * b * b
        },
        easeOut: function(b) {
            return 1 - Math.pow(1 - b, 3)
        },
        getFrameCount: function() {
            return h
        },
        linear: k,
        unwrap: function(b) {
            b.parentNode.parentNode.replaceChild(b,
            b.parentNode)
        },
        wrap: function(b) {
            var c = document.createElement("div");
            b.parentNode.replaceChild(c, b);
            c.appendChild(b);
            return c
        }
    };
    google.register(60, {
        dispose: function() {
            window.clearInterval(f);
            f = 0;
            i = []
        }
    });
})();
 (function() {
    google.event = google.event || {};
    google.event.back = {};
    var d = [],
    f = [],
    g;
    function h(a, c) {
        a && (g[a] = c);
        google.save(81, g)
    }
    function j() {
        for (var a = [], c = 0, b = d.length; c < b; c++) {
            var e = d[c](g[f[c]]);
            e && (a.length > 0 && a.push(","), a.push(e))
        }
        google.a = 1;
        a.push("&ei=", google.kEI);
        window.google.log("backbutton", a.join(""))
    }
    function k(a, c) {
        return function(b) {
            b = b || window.event;
            for (b = b.target || b.srcElement; b.parentNode && b.tagName != "A";) b = b.parentNode;
            a(b, c ? g[c] : null)
        }
    }
    var l = google.j && google.j.en,
    m;
    function n(a) { (a.persisted || m) && !l && j();
        m = !0
    }
    google.event.back.register = function(a, c, b, e) {
        e && (g[e] = {});
        for (var o = document.getElementsByTagName("a"), p = 0, i; i = o[p++];) a(i) && google.listen(i, "click", k(c, e));
        d.push(b);
        f.push(e)
    };
    google.event.back.saveHistory = h;
    google.register(81, {
        init: function() {
            g = {
                persisted: !1
            };
            google.a = 0
        },
        history: function(a) {
            a && (g = a);
            if (g.persisted) j();
            else if (!g.persisted) g.persisted = !0,
            h(),
            window.addEventListener && (window.addEventListener("pageshow", n, !1), m = !1)
        },
        dispose: function() {
            d.length = 0;
            f.length = 0
        }
    });
})();
 (function() {
    var o = void 0,
    z = null;
    var B = {
        K: 0,
        J: 1,
        N: 2,
        D: 3,
        F: 4,
        O: 5
    },
    D = {
        sa: !0,
        ta: !1
    },
    J = {
        W: 0,
        R: 1,
        va: 2
    },
    K = google.browser.engine,
    R = /[&\?]ech=([0-9]+)/,
    W = /[\?&#](tch|ech|psi|wrapid)=[^&]*/g,
    X = function(m) {
        return typeof m != "undefined"
    };
    function Y(m, p) {
        function i() {
            return m == !0
        }
        var l = {
            ob: !0,
            Ca: !1
        },
        c = p || google.time(),
        e = l.ob,
        d,
        b,
        h,
        g = !0,
        k,
        n,
        j,
        f;
        return {
            Ua: function(f, a, s, c) {
                h || (h = [], g = !0, k = f);
                a && i() && h.push({
                    data: a,
                    url: f
                });
                if (s) e = l.Ca;
                d = google.time();
                b = c
            },
            qa: function() {
                return h ? h.length: 0
            },
            ma: function() {
                return n
            },
            ra: function(b) {
                return h ? h[b].data: z
            },
            lb: function() {
                return f
            },
            ca: function() {
                return e == l.Ca
            },
            aa: i,
            mb: function() {
                return g
            },
            da: function() {
                return c
            },
            Va: function(b) {
                return b && h && h.length > b && h[b].url ? h[b].url: k
            },
            ba: function() {
                return j
            },
            refresh: function() {
                var f = google.time();
                d + b * 1E3 < f && (h = [], delete d, delete b, g = !1)
            },
            za: function(b) {
                n = b
            },
            nb: function(b) {
                f = b
            },
            na: function(b) {
                j = b
            }
        }
    };
    function Z() {
        function m(c, e) {
            var d = l[c];
            if (d) {
                var b = e.ba();
                delete d.Z[b];
                delete d.ha[e.lb()]
            }
        }
        function p(c) {
            var e = l[c];
            e || (e = l[c] = {
                Z: {},
                ha: {},
                M: {}
            });
            return e
        }
        function i(c) {
            return c && (c.refresh(), c.mb()) ? c: z
        }
        var l = {};
        return {
            Qa: function(c, e, d, b) {
                c = p(c);
                d && (c.Z[d] = b, b.na(d));
                e && b.aa() && (c.M[e] = b, b.za(e))
            },
            oa: function(c, e, d, b) {
                c = p(c);
                d && (c.ha[d] = b, b.nb(d));
                e && b.aa() && (c.M[e] = b, b.za(e));
                e = b.ba();
                delete c.Z[e]
            },
            Ta: function(c, e, d) {
                return (c = l[c]) ? (e = c.Z[e], d ? e: i(e)) : z
            },
            Sa: function(c, e, d) {
                return (c = l[c]) ? (e =
                c.ha[e], d ? e: i(e)) : z
            },
            pa: function(c, e) {
                var d = l[c];
                return d ? i(d.M[e]) : z
            },
            Ra: m,
            clear: function(c) {
                if (c) for (var e = 0, d; d = c[e++];) {
                    if (d = l[d]) d.M = {}
                } else for (d in l) if (c = l[d]) c.M = {}
            },
            abort: function(c, e) {
                var d = l[c];
                d && (m(c, e), delete d.M[e.ma()])
            }
        }
    };
    function $(m) {
        function p() {
            return z
        }
        function i() {}
        function l() {
            return ! 1
        }
        function c(a, b, f) {
            for (var c = 0, d; d = q[c++];) d.C(a, b, f)
        }
        function e(a, b, f, c, d) {
            for (var f = 0, e; e = q[f++];) e.handleError(a, b, c, d)
        }
        function d(a, f, d, e, g) {
            a = a.split('/*""*/');
            g = g ? 0: -1;
            for (d = f; d < a.length + g; ++d)++f,
            a[d] && c(b(a[d], 0, e));
            return f
        }
        function b(a, b, f) {
            try {
                return K.IE ? eval("(" + a + ")") : (new Function("return " + a))()
            } catch(d) {
                e(1, 9, 0, d, f)
            }
            return a
        }
        function h(a, b) {
            return {
                B: a,
                L: b || ""
            }
        }
        function g(a) {
            google.log("omcr", a.toString())
        }
        var k =
        {
            kb: !0,
            jb: !1
        },
        n = B,
        j = m.B,
        f,
        q = [],
        a = 1; (function() {
            var a = {
                C: c,
                ib: b,
                ya: d,
                Y: h,
                handleError: e,
                xa: g
            };
            switch (j) {
            case n.D:
                f = ca(m.ka, m.gb, m.hb, a);
                break;
            case n.F:
                f = da(m.ka, m.S, m.U, m.T, a);
                break;
            case n.J:
            case n.N:
            case n.O:
                f = ea(j == n.O ? k.kb: k.jb, j == n.J, m.L, m.S, m.U, m.T, a);
                break;
            case n.K:
                f = fa(m.L, m.Q, a)
            }
        })();
        return ! f ? z: {
            P: function() {
                return j
            },
            la: function(a) {
                q.push(a)
            },
            Ea: function(a) {
                for (var b = 0, d; d = q[b]; ++b) if (d == a) {
                    q.splice(b, 1);
                    break
                }
                q.length || (a.$(), f.close())
            },
            Da: function() {
                return (a++).toString()
            },
            open: f.open,
            I: f.I,
            X: f.X || i,
            V: f.V || l,
            getName: f.getName || p,
            G: f.G,
            H: f.H
        }
    };
    function ca(m, p, i, l) {
        function c(f, c, g) {
            for (var h = function() {
                a: {
                    var c,
                    e;
                    try {
                        c = f.location.href,
                        e = a <= 7 || f.document.readyState == "complete"
                    } catch(h) {
                        d(13, h);
                        break a
                    }
                    try { ! n.test(c) && (!f.google || !f.google.loc) && e && c.indexOf(j[g]) < 0 && d(19)
                    } catch(i) {
                        d(7, i)
                    }
                    if (s == b.ja && f) f.src = "about:blank"
                }
            },
            c = document.getElementsByName(c), k = 0, i; i = c[k++];) i.nodeName == "IFRAME" && (google.listen(i, "load", h), e(i));
            if (s == b.ia && !j[g]) try {
                f.document.title = document.title
            } catch(q) {}
        }
        function e(f) {
            if (s == b.ja && a >= 8) {
                var c = document.createElement("div");
                c.style.display = "none";
                google.dom.insert(c, f)
            }
        }
        function d(a, b) {
            l.handleError(1, a, k, b, o)
        }
        var b = {
            ja: 0,
            ia: 1
        },
        h = p || "tlif" + google.time() + m,
        g = "^" + h + "[0-9]+$",
        k = l.Y(3),
        n = /(\/blank\.html|about:blank)$/,
        j = [],
        f = [],
        q = 0,
        a = 0,
        s,
        t = document;
        if (typeof i != "number" || i < 1) i = 1;
        K.IE && (a = document.documentMode ? document.documentMode: parseInt(google.browser.engine.version.split(".")[0], 10));
        s = a && a <= 7 ? b.ia: b.ja;
        return {
            open: function() {
                if (K.IE) try {
                    var a = google.ihtmlfile = new ActiveXObject("htmlfile");
                    a.open();
                    a.close();
                    a.parentWindow.google =
                    google;
                    t = a
                } catch(b) {
                    return d(2, b),
                    !1
                }
                for (a = 0; a < i; ++a) {
                    var s = h + a,
                    e;
                    if (!f[a]) try {
                        var g = t.createElement("IFRAME");
                        g.name = s;
                        g.style.display = "none";
                        g.src = "about:blank";
                        var k = t.createElement("DIV");
                        k.id = s;
                        k.appendChild(g);
                        t.body.appendChild(k);
                        e = f[a] = g.contentWindow
                    } catch(j) {
                        return d(5, j),
                        !1
                    }
                    if (!e) return ! 1;
                    c(e, s, a)
                }
                return ! 0
            },
            I: function(a) {
                q = (q + 1) % i;
                a += "&wrapid=" + encodeURIComponent(h + q);
                var c = f[q].location;
                s == b.ia ? c.href = a: c.replace(a);
                j[q] = a
            },
            X: function(a, b) {
                a && a.match(g) && l.C(b)
            },
            getName: function() {
                return h
            },
            G: function() {
                return k
            },
            H: function() {
                return ! 0
            },
            close: function() {
                for (var a = 0; a < i; ++a) google.dom.remove(t.getElementById(h + a))
            }
        }
    };
    function da(m, p, i, l, c) {
        function e() {
            return p && n.length >= i
        }
        function d(b) {
            var c = j[b];
            if (c) {
                delete j[b];
                for (var a = 0; a < n.length; ++a) if (n[a] == b) {
                    n.splice(a, 1);
                    break
                }
                window.setTimeout(function() {
                    try {
                        google.dom.remove(c),
                        c.src = K.IE ? "blank.html": "about:blank"
                    } catch(a) {}
                },
                0)
            }
        }
        function b(b, c) {
            K.IE ? c.onreadystatechange = function() {
                var a = c.readyState; (a == "loaded" || a == "complete") && d(b)
            }: c.onload = function() {
                d(b)
            }
        }
        var h = "tljp" + google.time() + m,
        g = c.Y(4),
        k = 0,
        n = [],
        j = {};
        return {
            open: function() {
                return ! 0
            },
            I: function(f) {
                var g =
                document.createElement("script"),
                a = h + k++;
                g.src = f + "&wrapid=" + a;
                j[a] = g;
                if (e()) {
                    for (; n.length;) d(n[0]);
                    l && c.xa(i)
                }
                n.push(a);
                b(a, g);
                google.dom.append(g)
            },
            X: function(b, d) {
                j[b] && c.C(d)
            },
            getName: function() {
                return h
            },
            G: function() {
                return g
            },
            H: function() {
                return ! 1
            },
            V: e,
            close: function() {
                for (var b in j) d(b)
            }
        }
    };
    function fa(m, p, i) {
        function l() {
            n = b.Ba;
            for (var c = 0; c < k.length; ++c) j.send(k[c]);
            k = []
        }
        function c(b) {
            var c = b.data;
            m && (c = i.ib(b.data, g));
            c && i.C(c)
        }
        function e() {
            n != b.ga && i.handleError(h.W, 16, g, o, o);
            n = b.fa
        }
        function d(b) {
            i.handleError(h.R, b, g, o, o)
        }
        var b = {
            fa: 1,
            Aa: 2,
            Ba: 3,
            ga: 4
        },
        h = J,
        g = i.Y(0, m),
        k = [],
        n = b.fa,
        j;
        return {
            open: function() {
                try {
                    j = new window.WebSocket(p),
                    n = b.Aa
                } catch(d) {
                    return i.handleError(h.W, 6, g, d, o),
                    !1
                }
                j.onopen = l;
                j.onmessage = c;
                j.onclose = e;
                return ! 0
            },
            I: function(c) {
                switch (n) {
                case b.Ba:
                    j.send(c);
                    break;
                case b.fa:
                case b.ga:
                    d(11);
                    break;
                case b.Aa:
                    k.push(c);
                    break;
                default:
                    d(17)
                }
            },
            G: function() {
                return g
            },
            H: function() {
                return ! 0
            },
            close: function() {
                n = b.ga;
                j.close()
            }
        }
    };
    function ea(m, p, i, l, c, e, d) {
        function b(a) {
            a && (a.send(z), f.push(a))
        }
        function h(a, b) {
            var c = 0;
            return function() {
                try {
                    if (a.readyState == 4 && a.status == 0) {
                        k(21, b);
                        g(a);
                        return
                    }
                } catch(f) {
                    k(21, b);
                    g(a);
                    return
                } (a.readyState == 3 || a.readyState == 4) && a.status == 200 && i && (a.getResponseHeader("Content-Type") || "").indexOf("application/json") < 0 ? (k(12, b), g(a)) : a.readyState == 3 && p ? i ? c = d.ya(a.responseText, c, j, b) : d.C(a.responseText, !0, !0) : a.readyState == 4 && (a.status == 200 && (i || !p || c == 0) ? i ? d.ya(a.responseText, c, j, b, !0) : d.C(a.responseText) :
                a.status >= 400 && a.status < 500 ? k(0, b) : a.status >= 500 && a.status < 600 && k(1, b), g(a))
            }
        }
        function g(a) {
            for (var d = 0, e; e = f[d]; ++d) if (a == e) {
                f.splice(d, 1);
                break
            }
            for (; f.length < c && q.length;) b(q.shift())
        }
        function k(a, b) {
            d.handleError(n.R, a, j, z, b)
        }
        var n = J,
        j = d.Y(m ? 5: p ? 1: 2, i),
        f = [],
        q = [];
        if (typeof c != "number" || c < 1) c = 5;
        return {
            open: function() {
                var a = google.xhr();
                return m ? !!a && "withCredentials" in a: !!a
            },
            I: function(a) {
                var g = google.xhr();
                g.open("GET", a);
                if (g) if (m && (g.withCredentials = !0), g.onreadystatechange = h(g, a), f.length < c) b(g);
                else if (l) {
                    for (; f.length;) a = f.shift(),
                    a.onreadystatechange = function() {},
                    a.abort();
                    b(g);
                    e && d.xa(c)
                } else q.push(g)
            },
            G: function() {
                return j
            },
            H: function() {
                return p
            },
            V: function() {
                return l && f.length >= c
            },
            close: function() {
                q = [];
                for (var a = 0; a < f.length; ++a) {
                    var b = f[a];
                    if (b) b.onreadystatechange = function() {};
                    b && b.readyState != 0 && b.readyState != 4 && b.abort()
                }
                f = []
            }
        }
    };
    function ha(m, p, i) {
        function l(a, c) {
            c ? (M[c] && b(A.va, 4, z, c), M[c] = a) : F = function(b, c) {
                var d = M[c];
                return d ? d(b) : a(b)
            }
        }
        function c(a, b) {
            N = a || [0, 0, 0];
            O = b || [0, 0, 0];
            P = !1;
            if (a || b) for (var c = N.concat(O), d = 0, g; g = c[d++];) if (g > 0) {
                P = !0;
                break
            }
        }
        function e() {++H
        }
        function d() {
            return u
        }
        function b(a, b, c, d) {
            if (a == A.W || a == A.R) {
                var g = r.G(),
                g = {
                    _svty: a,
                    _err: b,
                    _type: g && g.B,
                    _noWrap: g && !g.L
                };
                d && (g._data = encodeURIComponent("" + d));
                try {
                    g._wl = encodeURIComponent(google.nav.getLocation())
                } catch(f) {}
                google.ml(c || Error("comm"), !1, g)
            }
            for (c =
            0; g = T[c++];) g.ea(a, b, d)
        }
        function h(a, b, c) {
            a.push({
                ea: b,
                wa: c || 0
            });
            a.sort(function(a, b) {
                return b.wa - a.wa
            })
        }
        function g(a) {
            window.postMessage ? (y || (y = [], google.listen(window, "message", k)), y.push(a), window.postMessage("comm.df", window.location.href)) : window.setTimeout(a, 0)
        }
        function k(a) {
            a && a.source == window && a.data == "comm.df" && (y.length && y.shift()(), y.length && window.postMessage("comm.df", window.location.href))
        }
        function n(a, b) {
            return ! a.aa() ?
            function() {
                return b
            }: function() {
                var c = [];
                if (a) for (var d = a.qa(), g =
                0; g < d; ++g) {
                    var f = a.ra(g);
                    f && c.push(f)
                }
                return ! c.length ? b: c.join("")
            }
        }
        function j(a) {
            return r && u ? r.P() == a: !1
        }
        function f(a) {
            return a && (a = a.match(R)) ? a[1] : ""
        }
        function q(a, b, c, d, g) {
            var f = v.Sa(b, d, !0);
            f || ((f = v.Ta(b, c, !0)) ? v.oa(b, f.ma(), d, f) : (f = g ? G.ta: G.sa, a = F(a, b), f = Y(f, U[c]), f.na(c), v.oa(b, a, d, f)));
            return f
        }
        function a(a, c, d, g, f, e, h) {
            var k = C[g] || C["_?"];
            if (!k || !k.length) b(A.R, 10, z, g);
            else for (var g = 0, i; i = k[g]; ++g) i.ea(a, d, e, !c, h == L.ua, f)
        }
        function s(a, c, d) {
            w.ab(a, c);
            d && P && (a = w.Wa(N, O)) && b(A.va, 15, z, a.join(","))
        }
        function t(b, c) {
            var d = v.pa(b, c);
            if (d) {
                for (var f = d.ca(), e = d.qa(), k = google.time(), h = 0; h < e; ++h)(function(c, f, e) {
                    g(function() {
                        a(c, f, n(d, c), b, k, d.Va(e), L.ua)
                    })
                })(d.ra(h), f && h == e - 1, h);
                return ! 0
            }
            return ! 1
        }
        function aa(a, b, c, d) {
            var g = b.ca();
            c == S.db || g && d ? v.abort(a, b) : g && v.Ra(a, b)
        }
        function ba(a) {
            var b = google.time() - a.da(),
            c = a.ba();
            w.bb(c, b);
            a.ca() && w.cb(c, b)
        }
        var S = {
            db: -1,
            pb: 0,
            fb: 1
        },
        L = {
            ua: !0,
            eb: !1
        },
        x = B,
        G = D,
        A = J,
        ga = google.kEI + "." + google.time(),
        E = p.L,
        r,
        F,
        M = {},
        I = function(a) {
            var a = a.replace(/^http[s]?:\/\/[^\/]*/,
            ""),
            b = a.indexOf("?");
            return b == -1 ? a: a.substring(0, b)
        },
        C = {},
        T = [],
        u = !1,
        V = 59,
        N,
        O,
        P = !1,
        U = {},
        w,
        H = 0,
        v,
        y;
        l(function(a) {
            return a.substring(a.indexOf("?") + 1).split("&").sort().join("&")
        });
        c(p.Fa, p.La);
        w = ia();
        v = i.Ga();
        var Q = {
            C: function(b, c, d) {
                if (u) {
                    typeof b == "string" && (b = {
                        d: b
                    });
                    var e = b.u,
                    h = e ? I(e) : "",
                    k = f(e),
                    i = q(e, h, k, b.e, d);
                    ba(i);
                    var j = b.c,
                    m = X(c) && !E ? !c: !j || j != S.fb,
                    l = b.d,
                    c = google.time();
                    if (X(l) && l != z) {
                        var b = b.ct || V,
                        t = e ? e.replace(W, "") : "";
                        i.Ua(t, l, m, b);
                        e = function() {
                            a(l, m, n(i, l), h, i.da(), t, L.eb)
                        };
                        y && y.length ?
                        g(e) : e()
                    }
                    c = google.time() - c;
                    s(k, c, m);
                    aa(h, i, j, d)
                }
            },
            handleError: b,
            $: function() {
                i.$(r);
                r.P() == x.K && i.Pa(r.Q)
            }
        };
        return {
            a: function() {
                return "_?"
            },
            b: d,
            c: function() {
                w.$a();
                var a = w.Xa(),
                b = w.Ya(),
                c = w.Za();
                return [[c, a.w, a.A, a.z], [c, b.w, b.A, b.z]]
            },
            d: function(a) {
                V = a
            },
            e: c,
            f: function(a) {
                typeof a == "function" && (I = a)
            },
            g: l,
            h: function(a, b, c) {
                if (b) {
                    var d = C[b];
                    d || (d = C[b] = []);
                    h(d, a, c)
                }
            },
            i: function(a, b) {
                h(T, a, b)
            },
            j: function() {
                if (u) return ! 0; ++H;
                for (var a = i.Ja(), b = 0, c; c = m[b]; ++b) {
                    var d = c.B == x.K && c.Ma && E,
                    g;
                    if (g = d)(r = i.Ia(c.Q)) ?
                    (r.la(Q), g = u = !0) : g = !1;
                    if (g) return ! 0;
                    c.ka = a;
                    c.L = E;
                    a: {
                        g = d;
                        if (d = $(c)) if (d.la(Q), d.open()) {
                            if (g) c = c.Q,
                            i.Oa(c, d),
                            d.Q = c;
                            r = d;
                            i.Na(r);
                            d = u = !0;
                            break a
                        }
                        d = !1
                    }
                    if (d) return ! 0;
                    m.splice(b--, 1)
                }
                return ! 1
            },
            k: function(a, c) {
                if (!u) return b(A.W, 14),
                !1;
                var d = I(a),
                g = F(a, d);
                if (!c && t(d, g)) return ! 0;
                var f = r.Da(),
                e = Y(c ? G.ta: G.sa);
                U[f] = e.da();
                v.Qa(d, g, f, e);
                r.V() && ++H;
                a = [a, a.indexOf("?") == -1 ? "?": "&", E ? "tch=" + r.P() : "", "&ech=", f, "&psi=", ga, ".", H].join("");
                r.I(a);
                return ! 0
            },
            l: function(a) {
                if (typeof a == "string") {
                    var b = I(a);
                    if (b) return a =
                    F(a, b),
                    !!v.pa(b, a)
                }
                return ! 1
            },
            m: function() {
                return j(x.D)
            },
            n: function() {
                return j(x.F)
            },
            o: function() {
                return j(x.N)
            },
            p: function() {
                return j(x.J)
            },
            q: function() {
                return j(x.K)
            },
            r: function() {
                return j(x.O)
            },
            s: function() {
                return r && u ? r.H() : !1
            },
            t: e,
            u: function() {
                u ? (u = !1, r.Ea(Q), r = z) : b(A.R, 3)
            },
            v: function(a, b) {
                var c = C[b];
                if (c) for (var d = 0, g; g = c[d]; ++d) if (g.ea == a) {
                    c.splice(d, 1);
                    break
                }
            },
            Ha: d,
            Ka: e
        }
    };
    function ia() {
        function m() {
            b.reset();
            h.reset();
            for (var d = 0; d < e.length; ++d) {
                var k = c[e[d]],
                i = k.w || 0,
                j = k.A,
                k = k.z;
                b.w += i;
                b.A += j;
                b.z += k;
                h.w = Math.max(i, h.w);
                h.A = Math.max(j, h.A);
                h.z = Math.max(k, h.z)
            }
            d = p();
            if (d > 1) d -= 1,
            b.w = (b.w - h.w) / d,
            b.A = (b.A - h.A) / d,
            b.z = (b.z - h.z) / d
        }
        function p() {
            return e.length
        }
        function i() {
            var b = {
                w: z,
                A: 0,
                z: 0
            };
            b.reset = function() {
                b.w = b.A = b.z = 0
            };
            return b
        }
        function l(b, h, m, j) {
            var f = c[b];
            if (!f) {
                var f = i(),
                l = e[d];
                l && delete c[l];
                c[b] = f;
                e[d] = b;
                d = (d + 1) % 10
            }
            if (h != z && f.w == z) f.w = h;
            if (m != z) f.A = m;
            j != z && (f.z +=
            j)
        }
        var c = {},
        e = [],
        d = 0,
        b = i(),
        h = i();
        return {
            bb: function(b, c) {
                l(b, c, z, z)
            },
            cb: function(b, c) {
                l(b, z, c, z)
            },
            ab: function(b, c) {
                l(b, z, z, c)
            },
            Wa: function(c, d) {
                m();
                var i = [b.w, b.A, b.z],
                j = [h.w, h.A, h.z],
                f = j,
                l = d;
                e.length == 10 && (f = i.concat(j), l = c.concat(d));
                for (var a = 0, s; a < f.length; ++a) if (s = l[a], s > 0 && f[a] > s) return i.concat(j);
                return z
            },
            $a: m,
            Xa: function() {
                return b
            },
            Ya: function() {
                return h
            },
            Za: p
        }
    };
    google.comm = function() {
        function m(a, c) {
            return {
                B: b.D,
                gb: c,
                hb: a || 1
            }
        }
        function p(a, c, d) {
            return {
                B: b.F,
                S: !!a,
                U: c || 5,
                T: !!d
            }
        }
        function i(a, c, d) {
            return {
                B: b.N,
                S: !!a,
                U: c || 5,
                T: !!d
            }
        }
        function l(a, c, d) {
            return {
                B: b.J,
                S: !!a,
                U: c || 5,
                T: !!d
            }
        }
        function c(a, b, c) {
            X(a) || (a = !0);
            return {
                L: a,
                Fa: b,
                La: c
            }
        }
        function e(a, c, d, f) {
            if (c == b.D || c == b.F) {
                var c = k[c],
                e;
                for (e in c) c[e].X(a, d, f)
            }
        }
        function d(a) {
            switch (a) {
            case b.D:
            case b.F:
            case b.N:
                return ! 0;
            case b.J:
            case b.O:
                return ! K.IE;
            case b.K:
                return K.WEBKIT
            }
            return ! 1
        }
        var b = B,
        h,
        g = [],
        k = {},
        n = {},
        j =
        0,
        f;
        k[b.D] = {};
        k[b.F] = {};
        f = Z();
        google.td = e;
        var q = {
            Ja: function() {
                return j++
            },
            Na: function(a) {
                var b = k[a.P()];
                b && (b[a.getName()] = a)
            },
            $: function(a) {
                var b = k[a.P()];
                b && delete b[a.getName()]
            },
            Oa: function(a, b) {
                n[a] = b
            },
            Ia: function(a) {
                return n[a]
            },
            Pa: function(a) {
                n[a] && delete n[a]
            },
            Ga: function() {
                return f
            }
        };
        return {
            a: m,
            b: p,
            c: i,
            d: l,
            e: function(a, c, d) {
                return {
                    B: b.O,
                    S: !!a,
                    U: c || 5,
                    T: !!d
                }
            },
            f: function(a, c) {
                return {
                    B: b.K,
                    Q: a,
                    Ma: !!c
                }
            },
            g: c,
            h: function(a, f) {
                var e;
                if (a) {
                    e = [];
                    for (var j = 0, k; k = a[j++];) d(k.B) && e.push(k);
                    e = e.length ?
                    e: z
                } else {
                    if (!X(h)) {
                        e = [[b.J, l], [b.N, i], [b.D, m], [b.F, p]];
                        j = [];
                        k = 0;
                        for (var n; n = e[k++];) d(n[0]) && (n = n[1](), j.push(n));
                        h = j.length ? j: z
                    }
                    e = h
                }
                if (!e) return z;
                e = ha(e, f || c(), q);
                g.push(e);
                return e
            },
            i: e,
            j: function(a) {
                f.clear(a);
                for (var a = 0, b; b = g[a++];) b.Ha() && b.Ka()
            }
        }
    } ();
})();
 (function() {
    var g = null;
    function ca() {
        function a(a) {
            return {
                api: a,
                ea: a.a,
                ha: a.b,
                da: a.c,
                ta: a.d,
                ua: a.e,
                ra: a.f,
                Q: a.g,
                H: a.h,
                T: a.i,
                P: a.j,
                I: a.k,
                ga: a.l,
                ia: a.m,
                L: a.n,
                ja: a.o,
                la: a.p,
                ma: a.q,
                M: a.r,
                ka: a.s,
                pa: a.t,
                S: a.u,
                va: a.v
            }
        }
        var b = window.google.comm;
        return ! b ? g: {
            N: function(c, d) {
                var e = b.h(c, d);
                return a(e)
            },
            U: function(b) {
                return a(b.api)
            },
            fa: b.a,
            O: b.b,
            V: b.c,
            W: b.d,
            oa: b.e,
            na: b.f,
            ca: b.g,
            qa: b.i,
            R: b.j
        }
    };
    var h = google.browser.engine,
    da = google.browser.product.OPERA,
    ea = !1,
    fa,
    i = !1,
    j = !1,
    k = !1,
    m,
    ga,
    ha,
    ia,
    ja,
    n,
    ka,
    la,
    o,
    ma,
    na,
    oa,
    pa,
    qa = !1,
    p,
    r,
    ra,
    sa,
    s,
    t,
    u = "",
    ta = g,
    ua,
    v = g,
    w = g,
    x = -1,
    y = document,
    A,
    C,
    D,
    E,
    F,
    G,
    H,
    va,
    wa,
    J,
    xa,
    K,
    ya = {},
    za,
    L = {},
    M,
    N = 0,
    Aa = !1,
    Ba = !1,
    O = g,
    Ca = 0,
    Da,
    Ea,
    Fa = 0,
    P;
    var R,
    T,
    Ha = 0,
    Ia = !1,
    Ja = !1,
    U = {
        addPbx: !1,
        addPsj: !1,
        allowHideSuggestions: !0,
        clearParamsOnPrefetch: !1,
        colorQuerySuggestionWithLinks: !1,
        executeQueryOnEsc: !1,
        fullWidth: !1,
        insideFrame: g,
        installForm: g,
        pp_msg1: "",
        pp_msg2: "",
        pp_msg3: "",
        pp_url: "",
        setAqToFirstSuggestion: !1,
        showFeelingLuckyLinks: !1,
        showSearchButtons: !0,
        smallLearnMoreDisclaimer: !1,
        useKeyDown: !1
    };
    function Ka(a, b) {
        var c = a[a.length - 1];
        return c ? c[b] : g
    }
    function La(a) {
        return (a = a[a.length - 1]) ? a.c: g
    }
    function Ma(a) {
        return (a = a && a.match(/\D+$/)) ? a[0] : g
    }
    var Na = {
        0: "hp",
        1: "serp",
        2: "img"
    },
    V;
    function Oa(a) { (y.getElementById("gac_scont") || y.getElementById("main") || y.getElementById("xjsc") || y.body).appendChild(a)
    }
    function Pa() {
        google.msg.send(8) && Qa()
    }
    function Qa() {
        Ra();
        W();
        if (A) {
            Sa();
            window.clearTimeout(ta);
            u = Ea = za = "";
            ta = v = w = g;
            x = -1;
            N = Ca = 0;
            i = Aa = !1;
            V = 0;
            ya = {};
            P = Fa = 0;
            Ha = 0
        }
    }
    function Sa() {
        H.value = "f";
        va.value = wa.value = J.value = ""
    }
    var Ta = {
        ds: 1,
        hl: 1,
        client: 1,
        expIds: 1,
        tok: 1,
        xhr: 1,
        q: 1,
        cp: 1
    },
    Ua = function(a) {
        for (var a = a.substring(a.indexOf("?") + 1).split("&"), b = [], c = {},
        d = 0, e; e = a[d++];) {
            var f = e.split("=");
            f.length == 2 && (f = f[0], Ta[f] && !c[f] && (b.push(f == "q" ? e.toLowerCase().replace(/\+/g, " ") : e), c[f] = !0))
        }
        b.sort();
        return decodeURIComponent(b.join("&"))
    };
    function Va(a, b, c) {
        google.msg.send(17, [a, b, c], !1) && Wa()
    }
    function Xa(a, b, c, d, e, f) {
        if (!e) {
            c && (a = c());
            try {
                typeof a == "string" && (a = eval("(" + a + ")")),
                b(a, f)
            } catch(l) {
                google.ml(l, !1, {
                    _response: a,
                    _url: d,
                    _isPartial: e,
                    _opt_fromCache: f
                })
            }
        }
    }
    function Ya() {
        var a = ca(),
        b = [a.O()];
        if ((T = a.N(b)) && T.P()) a = Za($a),
        T.H(a, "/complete/init"),
        a = Za(ab),
        T.H(a, "/complete/deleteitems")
    }
    function Za(a) {
        return function(b, c, d, e, f) {
            Xa(b, a, c, d, e, f)
        }
    }
    function Wa() {
        var a = ca(),
        b = [a.O(), a.V(), a.W()],
        a = a.N(b);
        a.P();
        bb(a, !0)
    }
    function bb(a, b) {
        if (a) {
            R && R.S();
            R = b ? a: ca().U(a);
            R.T(Va, 10);
            var c = "/complete/search",
            d = Za(cb);
            R.H(d, c);
            R.Q(Ua, c);
            c = "/s";
            R.Q(Ua, c);
            if (google.ucp || !R.L() && !R.M()) d = Za(cb),
            R.H(d, c)
        }
    }
    function db(a, b) {
        V = 0;
        a == "i" ? V = 2: b && b != "" && (V = 1)
    }
    function eb() {
        if (A && (U.addPbx && !Ia && (X("pbx", "1"), Ia = !0), U.addPsj && !Ja && (X("psj", "1"), Ja = !0), !U.addPsj && Ja)) {
            var a = A.psj;
            a && (A.removeChild(a), Ja = !1)
        }
    }
    function fb() {
        D = gb();
        D.className = "gac_m";
        F = gb();
        F.className = "gac_su";
        G = F.style;
        var a = F.insertRow( - 1);
        E = a.insertCell(0);
        E.className = "gac_q";
        a = a.insertCell( - 1);
        if (r) {
            var b = y.createElement("div");
            b.className = "gac_id";
            b.appendChild(D);
            var c = y.createElement("div");
            c.className = "gac_od";
            c.appendChild(b);
            a.appendChild(c);
            Oa(F)
        } else a.appendChild(D),
        A.appendChild(F)
    }
    function hb(a) {
        if (!ib(a, -1)) return ! 1;
        window.setTimeout(function() {
            s = C.value;
            j = !1;
            s && (k = !1);
            P = jb()
        },
        0);
        return ! 0
    }
    function ib(a, b) {
        return ! google.msg.send(14, [b, a]) ? (a.cancelBubble = !0, a.returnValue = !1) : !0
    }
    function kb() {
        function a(a, c) {
            b.push(a, "{", c, "}")
        }
        var b = [];
        if (r) {
            var c = "#e7e7e7";
            ra && (c = "transparent");
            c = "1px solid " + c;
            a(".gac_od", "background:#fff;margin:0;z-index:100;border-top:0;border-left:0;border-right:" + c + ";border-bottom:" + c + ";margin-top:1px;padding:0!important;position:relative");
            a(".gac_id", "background:#fff;margin:0;z-index:100;border-top:1px solid #a2bff0;border-left:1px solid #a2bff0;border-right:1px solid #558be3;border-bottom:1px solid #558be3;position:relative");
            a(".gac_m", "background:#fff;margin:0;z-index:100;border:0;color:#000;cursor:default;width:100%;font-size:17px;line-height:117%;padding:0;position:relative")
        } else a(".gac_m",
        "background:#fff;border:1px solid #666;color:#000;cursor:default;width:100%;font-size:17px;line-height:117%;margin:0;position:absolute;z-index:99");
        a(".gac_q", "width:1px;font-size:17px;visibility:hidden;white-space:nowrap");
        a(".gac_su", "position:absolute");
        a("#gac_pp", "color:#a1b9ed;text-decoration:none;cursor:pointer;font:22px Arial,sans-serif;height:20px;line-height:22px;margin:0 2px 0 0;padding:4px 0 0 0;top:4px;width:8px");
        a("#gac_pp:hover", "color:#36c;text-decoration:none");
        a("#gac_lm", "color:#36c;text-decoration:none");
        a("#gac_lm:hover", "color:#36c;text-decoration:underline");
        a(".gac_m td", "line-height:22px");
        a(".gac_n", "padding-top:1px;padding-bottom:1px");
        a(".gac_b td.gac_c", "background:#d5e2ff");
        da && a(".gac_b td.gac_d", "background:#d5e2ff");
        a(".gac_b", "background:#d5e2ff");
        a(".gac_k", "display:none");
        a(".gac_b td.gac_k", "display:block");
        a(".gac_a td.gac_f", "background:#fff8dd");
        a(".gac_t", "width:100%;text-align:left;font-size:17px");
        a(".gac_za", "position:absolute;bottom:0;right:0;text-align:right;font-size:12px;padding-right:5px");
        a(".gac_bt", "width:" + (C.offsetWidth - 2) + "px;text-align:center;padding:8px 0 7px;position:relative");
        a(".gac_sb", "font-size:15px;height:28px;margin:0.2em" + (h.WEBKIT ? ";-webkit-appearance:button": ""));
        a(".gac_z", "white-space:nowrap;color:#c00");
        a(".gac_s", "height:3px;font-size:1px" + (h.IE ? ";row-height:1px": ""));
        c = ["white-space:nowrap;", "overflow:hidden;", "width:100%;", "text-align:left;", "padding-left:", r ? 7: 3, "px;", "padding-right:3px"]; (h.IE || da) && c.push(";padding-bottom:1px");
        a(".gac_c", c.join(""));
        a(".gac_p", "white-space:nowrap;padding:3px;line-height:112%;vertical-align:top");
        a(".gac_e", "text-align:right;padding:0 3px 0 8px;white-space:nowrap");
        a(".gac_d", "font-size:13px");
        a(".gac_h", "color:green");
        a(".gac_j", "display:block");
        a(".gac_l", "line-height:18px");
        a(".gac_x", "display:block;line-height:16px");
        a(".gac_i", "color:#666");
        a(".gac_w img", "width:40px;height:40px");
        a(".gac_w", "width:1px");
        a(".gac_r", "color:red");
        a(".gac_v", "padding-bottom:5px");
        c = y.createElement("style");
        c.setAttribute("type", "text/css");
        Da.appendChild(c);
        b = b.join("");
        h.IE ? c.styleSheet.cssText = b: c.appendChild(y.createTextNode(b))
    }
    function lb() {
        if (F && C.parentNode) {
            for (var a, b = C, c = a = 0; b;) {
                if (b.style.position == "fixed") {
                    a = c = 0;
                    break
                }
                a += b.offsetTop;
                c += b.offsetLeft;
                try {
                    b = b.offsetParent
                } catch(d) {
                    b = g
                }
            }
            a = {
                aa: a,
                $: c
            };
            b = !U.showSearchButtons ? 1: 0;
            G.left = a.$ - b + "px";
            G.top = a.aa + C.offsetHeight - 1 + "px";
            a = C.offsetWidth;
            if (U.fullWidth && (c = y.getElementById("sftab"))) a = c.offsetWidth;
            a = i ? 1: a + b;
            if (a >= 0) G.width = a + "px";
        }
    }
    function X(a, b) {
        var c = y.createElement("input");
        c.type = "hidden";
        c.name = a;
        c.value = b;
        return A.appendChild(c)
    }
    function mb(a) {
        var b = a.keyCode;
        Aa = k = !1;
        if (!ib(a, b)) return ! 1;
        if (b == 27 && nb()) return ob(a, !0);
        if (b == 13) return ob(a);
        if (pb(b, a)) {
            Aa = !0;
            if (h.WEBKIT) a.cancelBubble = !0,
            a.returnValue = !1;
            return ! 1
        }
        U.useKeyDown && window.setTimeout(function() {
            qb(b, a)
        },
        0)
    }
    function ob(a, b) { (!b || U.executeQueryOnEsc) && rb(!1);
        b && W();
        a.cancelBubble = !0;
        return a.returnValue = !1
    }
    function rb(a) { ! h.IE && !a && xa && (A.removeChild(xa), xa = g);
        if (w && x != -1 && Ba && (!a || !w.Z) && nb()) w.onclick(g);
        else if (C.value == "") W();
        else {
            if (a && (xa = X("btnI", "1"), w)) C.value = w.w;
            sb(void 0, void 0);
            A.onsubmit && A.onsubmit() == !1 || A.submit()
        }
    }
    function tb(a) {
        var b = a.keyCode,
        c = pb(b, a);
        c ? Aa && qb(b, a) : U.useKeyDown || qb(b, a);
        Aa = !1;
        return h.WEBKIT ? !c: !1
    }
    function qb(a, b) {
        if (C.value != sa) U.useKeyDown && (t = s),
        s = C.value,
        j = !1,
        P = jb(),
        J.value = s;
        if (pb(a, b)) {
            var c = a == 40;
            if (! (s != u || !v || !v.length)) if (nb()) {
                if (w) w.className = "gac_a";
                for (var d = w, e = x, f = v.length, l = (x + 1 + (c ? 1: f)) % (f + 1) - 1; l != -1 && Y(l).J;) l = (l + 1 + (c ? 1: f)) % (f + 1) - 1;
                x = l;
                x == -1 ? (ub(), google.msg.send(12, [e, d, d && d.w || "", x, g, s])) : (w = Y(l), w.className = "gac_b", vb(w.w), j = !0, H.value = w.G, google.msg.send(12, [e, d, d && d.w || "", x, w, w.w]))
            } else wb();
            Ba = nb()
        }
        lb();
        u != s && !O && U.allowHideSuggestions && (O = window.setTimeout(W, 500));
        sa = C.value
    }
    function pb(a, b) {
        return a == 38 || a == 40 ? !b || !(b.ctrlKey || b.altKey || b.shiftKey || b.metaKey) : !1
    }
    function xb() {
        if (w) w.className = "gac_a",
        w = g,
        x = -1
    }
    function yb() {
        Ba = !1;
        if (!Ca) {
            if (w) w.className = "gac_a";
            w = this;
            for (var a = 0, b; b = Y(a); a++) b == w && (x = a);
            w.className = "gac_b"
        }
    }
    function zb(a, b) {
        return function(c) {
            var d = Ab(a),
            e = window.frames.wgjf;
            e && !b ? (google.r = 1, e.location.replace(d)) : window.location = d;
            Z(c);
            return ! 1
        }
    }
    function Ab(a) {
        return [a, "&aq=", w.G, "&oq=", J.value, Bb("aqi", va), Bb("aql", wa)].join("")
    }
    function Bb(a, b) {
        return b && b.value.length && a.length ? ["&", a, "=", b.value].join("") : ""
    }
    function Cb() {
        try {
            C.focus()
        } catch(a) {}
    }
    function ub() {
        Cb();
        vb(s);
        w = g;
        H.value = U.setAqToFirstSuggestion && v && v.length ? "0": "f"
    }
    function W() {
        if (google.msg.send(11)) {
            O && (window.clearTimeout(O), O = g);
            G && (G.visibility = "hidden");
        }
    }
    function wb() {
        if (google.msg.send(22)) {
            G && (G.visibility = "visible");
            lb();
            Ca = 1
        }
    }
    function nb() {
        return !! G && G.visibility == "visible"
    }
    function Ra() {
        if (D) {
            if (i) E.innerHTML = "",
            E.style.paddingLeft = "0",
            i = !1;
            if (h.IE) {
                for (; D.rows.length;) D.deleteRow( - 1);
                p = g
            } else D.innerHTML = ""
        }
    }
    function Db(a, b, c) {
        a.onclick = b ? zb(b, c) : function() {
            H.value = a.G;
            var b = Y(0),
            b = b ? b.w: void 0,
            c = a.w;
            if (google.msg.send(23, [c, s])) {
                try {
                    C.blur()
                } catch(f) {}
                vb(c);
                sb(b, c),
                A.onsubmit && A.onsubmit() == !1 || A.submit();
            }
        };
        a.Z = !b;
        a.onmousedown =
        Eb;
        a.onmouseout = xb;
        a.onmouseover = yb;
        a.onmousemove = function() {
            Ca && (Ca = 0, yb.call(this))
        }
    }
    function Fb() {
        if (T) {
            var a = [na, "clients1.google.com", "/complete/init"],
            b = "?";
            M && (a.push(b, "tok=", encodeURIComponent(M)), b = "&");
            var c = google.authuser;
            c && a.push(b, "authuser=" + encodeURIComponent(String(c)));
            T.I(a.join(""), !1)
        }
    }
    function $a(a) {
        L = a;
        L.ts = google.time()
    }
    function ab(a) {
        var b = ca();
        b && b.R(["/complete/search", "/s"]);
        for (var b = 0, c; c = Y(b++);) if (Ma(c.G) == "p" && c.w == a[0]) {
            c.J = 1;
            c.onclick = c.onmouseover = g;
            if (c == w) c.className = "gac_a",
            x = -1,
            ub();
            c.K.className = "gac_c gac_i fl";
            c.K.innerHTML = "Questa ricerca è stata rimossa dalla tua \x3ca href\x3d\x22/history\x22\x3eCronologia web\x3c/a\x3e"
        }
    }
    function Gb(a) {
        return a.toLowerCase().replace(/\s+/g, " ").replace(/^ /, "")
    }
    function Hb(a, b) {
        var c = s.toLowerCase(),
        d = b[0],
        e;
        if (e = a.toLowerCase() != c) {
            if (! (e = !d)) if (! (e = !c)) d = d[0],
            !d || c.length > 2 * d.length ? d = !1: (c = c.replace(/[^\s0-9a-z+_\-.]/g, ""), d = (c = Gb(c)) ? d.replace(/<\/?(b|em)>/gi, "").indexOf(c) == 0: !1),
            e = !d;
            if (d = e) d = a,
            c = s,
            e = u,
            c = Gb(c),
            d = Gb(d),
            e = Gb(e),
            d = c.indexOf(d) == 0 ? c.indexOf(e) == 0 ? d.length >= e.length: !0: !1;
            e = d
        }
        return e ? !1: !0
    }
    function cb(a, b) {
        function c(a, b) {
            var c = b ? Ma(b[2]) : g,
            c = a + (c ? "-" + c: "");
            c != I && ($ && (q += I + $), $ = 0, I = c);
            $++
        }
        var d = a[0];
        N > 0 && N--;
        if (!k && D) {
            var e = a[1],
            d = Hb(d, e),
            f = e[0],
            l = a[0];
            if (U.setAqToFirstSuggestion && f) H.value = f[2];
            if (google.msg.send(9, [l, d ? e: g, D, b, !!Ka(a, "b"), d, !!La(a)]) && d) {
                O && (window.clearTimeout(O), O = g);
                u = l;
                xb();
                Ra();
                for (var q = "", I, $ = 0, d = e.length - 1, f = 0, aa, ba, z, S, B; f <= d; ++f) if (B = e[f]) if (z = ya[B[1]]) z.Y && z.Y(f, d) && Ib(),
                aa = B[2],
                l =
                B[3],
                ba = z.F ? z.F(B, l) : g,
                S = D.insertRow( - 1),
                Db(S, ba, z.X),
                S.G = aa,
                S.className = "gac_a",
                ba = S.K = y.createElement("td"),
                ba.className = "gac_c",
                z.B(ba, aa, B, l),
                aa = z.D,
                S.w = aa ? aa(B, l, u) : B[0],
                S.appendChild(ba),
                c(z.A, B),
                f < d && z.ba && Ib();
                wa.value = Ka(a, "e") || ""; (v = D.rows) && v.length > 0 ? (V == 0 ? (Jb(), !U.showSearchButtons && (o || la) && Kb()) : V == 1 && (o || la) && Kb(), qa || ((pa = google.kHL == "en" && ka && U.pp_url && Lb("web-ac-p") < 999 && Lb("web-ac-p2") < 3) && Mb(), qa = !0), pa && !i && Nb(), wb()) : W();
                c("");
                va.value = q;
                x = -1
            }
        }
    }
    function Kb() {
        var a = U.smallLearnMoreDisclaimer,
        b = Ib(),
        c = b.style;
        c.textAlign = "right";
        c.fontSize = a ? "11px": "12px";
        c.paddingRight = "5px";
        if (a) c.lineHeight = "14px";
        b.innerHTML = Ob()
    }
    function Y(a) {
        return h.IE ? v[a] : v.item(a)
    }
    function Pb(a) {
        var b = "gac_sb",
        c = "",
        d = "";
        r && (b = "lsb", c = "<span class=ds><span class=lsbb>", d = "</span></span>");
        return [c, '<input type=button value="', a ? "Mi sento fortunato": "Cerca con Google", '" class=', b, h.IE ? ' style="padding:0 6px;width:auto;overflow:visible"': "", ' onclick="google.ac.rd(', a, ')">', d].join("")
    }
    function Jb() {
        if (U.showSearchButtons) {
            var a = Qb(),
            b = "";
            if (o || la) b = "<div class=gac_za>" + Ob() + "</div>";
            a.insertCell(0).innerHTML = ['<div style="position:relative"><div class=gac_bt>', Pb(!1), Pb(!0), "</div>", b, "</div>"].join("")
        }
    }
    function Lb(a) {
        var b;
        try {
            window.localStorage && (b = window.localStorage.getItem(a))
        } catch(c) {}
        if (b) {
            if (typeof b.value == "string") b = b.value;
            return parseInt(b, 10)
        }
        return 0
    }
    function Mb(a) {
        try {
            var b = window.localStorage;
            b && (a || (a = Lb("web-ac-p2") + 1), b["web-ac-p2"] = "" + a)
        } catch(c) {}
    }
    function Nb() {
        var a = Qb();
        a.id = "p_pl";
        var a = a.insertCell(0),
        b = a.style;
        b.borderTop = "1px solid #598ee3";
        b.background = "#dcebfa";
        b.backgroundImage = "url(/images/pp_gbg.png)";
        b.backgroundRepeat = "repeat-x";
        if (!p) b = h.IE ? ["<span style=white-space:nowrap>", '<a id=shp0 href="#" class=fl onclick="return google.ac.z()">', U.pp_msg2, "</a>", "</span>"] : ["<span style=white-space:nowrap>", U.pp_msg2, ".", "</span>", " &nbsp;", "<span style=white-space:nowrap>", '<a href="', U.pp_url, '" class=fl>', U.pp_msg3, "</a>", "</span>"],
        p = y.createElement("div"),
        p.className = "gac_c",
        p.style.paddingTop = "1px",
        p.innerHTML = ['<table cellpadding=0 cellspacing=0 border=0 style=width:100%><tr><td style="width:100%;text-align:center;padding-top:4px">', U.pp_msg1, '<br><div style="font-size:12px;white-space:normal">', b.join(""), '</div><td style=vertical-align:top><a id=gac_pp title="Dismiss" href="#" onclick="return google.ac.x(event)">&times;</a></table>'].join("");
        a.appendChild(p)
    }
    function Qb() {
        var a = D.insertRow( - 1);
        a.J = 1;
        a.onmousedown = Eb;
        return a
    }
    function Ob() {
        var a = "fr",
        b = "En savoir plus";
        if (o) a = google.kHL,
        b = "Ulteriori informazioni";
        return ["<a ", U.smallLearnMoreDisclaimer ? "id=gac_lm ": "", 'href="http://www.google.com/support/websearch/bin/answer.py?hl=', a, '&answer=106230">', b, "</a>"].join("")
    }
    function Rb(a, b) {
        return ['href="', a, '" onmousedown="google.ac.r(event, this, \'', b, '\')" onclick="return google.ac.c(event)"'].join("")
    }
    function Z(a) {
        if (a = a || window.event) a.stopPropagation && a.stopPropagation(),
        a.cancelBubble = a.cancel = a.returnValue = !0
    }
    function Ib() {
        var a = D.insertRow( - 1);
        a.J = 1;
        a.onmousedown = Eb;
        a = a.insertCell(0);
        a.className = "gac_s";
        return a
    }
    function sb(a, b) {
        var c = s;
        if (v) {
            var d = Y(x);
            if (d) c = d.w
        }
        k = !0;
        if (google.msg.send(15, [c, !!xa])) {
            W();
            c = C.value;
            if (J.value == c || c != b && c != a) if (H.value = "f", J.value = "", N >= 10 || Ha >= 3) H.value = "o";
            Tb(!0)
        }
    }
    function Ub() {
        if (! (Ha >= 3)) {
            if (!j && s != C.value) t = s,
            s = C.value;
            if (t != s && google.msg.send(10, [s, t]) && s) {
                P = jb();
                var a;
                var b = za,
                c = s;
                a = s.length < t.length;
                if (U.clearParamsOnPrefetch && b.indexOf("/complete/search") == 0) Sa(),
                H.value = "";
                b = Vb(b, "q", c);
                if (b = google.msg.send(16, [b, a], b)) {
                    if (R.L() || R.M()) a = [na, "clients1.google.it", b],
                    M && m && n && a.push("&tok=", encodeURIComponent(M)),
                    b = a.join("");
                    R.I(b);
                    m && n && L && L.ts !== void 0 && google.time() - L.ts > 828E5 && Fb();
                    a = !0
                } else a = !1;
                a && N++;
                Cb()
            }
            t = s
        }
    }
    function Tb(a) {
        sa = s = C.value;
        k = j = !1;
        a && (t = s);
        return Vb(za, "q", s)
    }
    function Wb() {
        Ub();
        for (var a = 100, b = 1; b <= (N - 2) / 2; ++b) a *= 2;
        a += 50;
        ta = window.setTimeout(Wb, a)
    }
    function Vb(a, b, c) {
        var d = encodeURIComponent(c),
        e = P,
        f;
        if (oa) {
            f = ["&gs_gbg="];
            for (var l = 4 + Math.floor(Math.random() * 32), q = 0, I; q < l; ++q) I = Math.random() < 0.3 ? 48 + Math.floor(Math.random() * 10) : (Math.random() > 0.5 ? 65: 97) + Math.floor(Math.random() * 26),
            f.push(String.fromCharCode(I));
            f = f.join("")
        } else f = "";
        a = [a, "&xhr=t", "&", b, "=", d, "&cp=", e, f];
        d = google.enc;
        if (!d || !d.b64d) d = google;
        m && n && L && L.websafe_signing_key && d && d.b64d && (e = d.b64d(L.websafe_signing_key), b = d.b64e(c), e = new d.HMAC(new d.MD5, e), e.update(c), c = d.b64e(e.digest()),
        a.push("&qe=" + b), a.push("&qesig=" + c), a.push("&pkc=" + L.pkc));
        return a.join("")
    }
    function vb(a) {
        if (C) C.value = sa = a,
        j = !1
    }
    function Eb(a) {
        h.GECKO || h.WEBKIT ? a.stopPropagation() : da && (wb(), Cb());
        Fa = 1;
        return ! 1
    }
    function jb() {
        if (y.selection) {
            var a = y.selection.createRange();
            return Math.abs(a.moveStart("character", -C.value.length))
        }
        try {
            return a = C.selectionStart,
            typeof a == "undefined" ? 0: a
        } catch(b) {
            return 0
        }
    }
    function gb() {
        var a = y.createElement("table");
        a.cellSpacing = a.cellPadding = "0";
        return a
    }
    function Xb(a) {
        "c" in a && (m = a.c);
        "f" in a && (la = a.f);
        "i" in a && (ja = a.i);
        "l" in a && (ga = a.l);
        "lm" in a && (o = a.lm);
        "n" in a && (ha = a.n);
        "o" in a && (ia = a.o);
        "p" in a && (n = a.p);
        "r" in a && (ka = a.r);
        "s" in a && (ma = a.s);
        "sw" in a && (r = a.sw);
        "tds" in a && (ra = a.tds);
        V == 2 && (n = m = !1);
        ua = a
    }
    function Yb() {
        var a = [Zb];
        m && a.push($b);
        ja && a.push(ac);
        ga && a.push(bc);
        ha && a.push(cc);
        ia && a.push(dc, ec, fc, gc, hc, ic, jc, kc, lc, mc);
        n && a.push(nc);
        for (var b = 0, c; c = a[b++];) ya[c.C] = c
    }
    function oc(a, b, c) {
        var d = b[0];
        K.innerHTML = d;
        b.w = google.dom.getText(K);
        var b = U.showFeelingLuckyLinks,
        e = "width:100%";
        c && U.colorQuerySuggestionWithLinks && (e += ";color:#52188c");
        d = ["<table cellpadding=0 cellspacing=0 border=0 class=gac_t>", "<tr>", '<td class=gac_c style="', e, '">', d];
        c && b && d.push('<span class="gac_d gac_e">', c, "</span>");
        b && d.push('<td class="gac_d gac_e gac_k">', "<a href=#ifl class=fl ", 'onclick="google.ac.rd(true);google.ac.p(event);return false">', "Mi sento fortunato &raquo;", "</a>");
        c && !b && d.push('<td class="gac_d gac_e">', c);
        d.push("</table>");
        a.className = "";
        a.innerHTML = d.join("");
    }
    var ic = {
        C: 11,
        A: "b",
        X: !0,
        F: function(a, b) {
            return b[0]
        },
        B: function(a, b, c, d) {
            var b = d[0],
            c = d[1],
            e = d[2],
            f = d[3],
            l = d[4],
            q = d[5],
            I = d[6],
            d = d[7],
            $ = b.match(/^([^&]*)/)[1];
            a.innerHTML = ['<span class="gac_j gac_l"><a class=q ', Rb($, b), "><b>", c, "</b> - ", e, " (", f, ")</a><br><b>", l, "</b> <span class=gac_d><span class=gac_", q >= 0 ? "h": "r", ">", q, " (", I, "%)</span> ", d, ' - </span><a href=/help/stock_disclaimer.html class="gac_d fl" onclick="google.ac.p(event);return true">Disclaimer</a></span>'].join("")
        }
    },
    jc = {
        C: 12,
        A: "c",
        F: function(a, b) {
            return b[0]
        },
        B: function(a, b, c, d) {
            for (var b = d[0], c = d[1], d = d[2], e = "", f = d.length - 1, l = 0, q; l < f; l++) q = d[l],
            e += [q[0], '<div class="gac_v">', q[1], "</div>"].join("");
            q = d[f];
            e += [q[0], "<br>", q[1]].join("");
            pc(a, c, b, "www.flightstats.com", e)
        }
    },
    kc = {
        C: 15,
        A: "d",
        B: function(a, b, c, d) {
            a.innerHTML = ["<b>", d[0], "</b> ", d[2], " (", d[1], ") in <b>", d[3], "</b>"].join("")
        }
    },
    lc = {
        C: 13,
        A: "e",
        F: function(a, b) {
            return b[0]
        },
        B: function(a, b, c, d) {
            pc(a, d[1], d[0], d[2])
        }
    },
    ec = {
        C: 14,
        A: "f",
        F: function(a, b) {
            return b[0]
        },
        B: function(a,
        b, c, d) {
            pc(a, d[1], d[0], d[3], d[2])
        }
    },
    Zb = {
        C: 0,
        A: "g",
        D: function(a) {
            return a.w
        },
        B: function(a, b, c) {
            oc(a, c, "")
        }
    },
    fc = {
        C: 19,
        A: "h",
        B: function(a, b, c, d) {
            a.innerHTML = ["<b>", d[0], " = ", d[1], "</b>"].join("")
        }
    },
    dc = {
        C: 17,
        A: "i",
        F: function(a, b) {
            return b[3]
        },
        B: function(a, b, c, d) {
            var b = d[0],
            c = d[1],
            e = d[2],
            d = d[3],
            f = d.match(/url=([^&]*)/)[1];
            a.innerHTML = ['<span class="gac_j gac_l"><a ', Rb(f, d), ">", b, " &#151; ", c, ": ", e, '</a><span class=gac_d style="line-height:16px"><br>According to <span class=gac_h>', f, "</span></span></span>"].join("")
        }
    },
    mc = {
        C: 10,
        A: "j",
        B: function(a, b, c, d) {
            b = d[5];
            c = function(a) {
                var b = a[1];
                return ['<td class=gac_w><img src="', a[0], '" alt="', b, '" title="', b, '"><td class="gac_p">', a[4], "<br>", a[2], "&deg; | ", a[3], "&deg;"].join("")
            };
            a.innerHTML = ["<b>Weather:</b> ", d[4], "&deg;", d[1], " in ", d[0], "<br><table><tr>", c(b[0]), c(b[1]), c(b[2]), c(b[3]), "</table>"].join("")
        }
    },
    gc = {
        C: 20,
        A: "k",
        B: function(a, b, c, d) {
            a.innerHTML = ["<b>", d[0], " = ", d[1], '</b> - <a href=/intl/en/help/currency_disclaimer.html class="gac_d fl" onclick="google.ac.p(event);return true">Disclaimer</a>'].join("")
        }
    },
    hc = {
        C: 16,
        A: "l",
        D: function(a, b) {
            return "define: " + b[0]
        },
        B: function(a, b, c, d) {
            b = d[0];
            c = d[1];
            d = d[2];
            pc(a, "Web definitions for <b>" + b + "</b>", "/search?q=define:" + b.replace(" ", "+"), "www.google.com", [c, " - <span class=gac_i>", d, "</span>"].join(""))
        }
    },
    bc = {
        C: 30,
        A: "m",
        D: function(a) {
            return a.w
        },
        B: function(a, b, c) {
            b = c[0];
            K.innerHTML = b;
            c.w = google.dom.getText(K);
            a.innerHTML = ["<span class=gac_z>Did you mean: </span>", b].join("")
        }
    },
    cc = {
        C: 5,
        A: "n",
        D: function(a, b, c) {
            return c
        },
        F: function(a, b) {
            return b[0]
        },
        B: function(a,
        b, c, d) {
            b = d[0];
            d = d[1];
            a.className = "gac_c gac_n";
            a.style.lineHeight = "117%";
            var e = c[0],
            c = e.replace(/HTTPS?:\/\//gi, ""),
            e = e.replace(/<\/?(b|em)>/gi, "");
            /^HTTPS?:\/\//i.test(e) || (e = (b.indexOf("/url?url=https:") > 0 ? "https": "http") + "://" + e);
            a.innerHTML = ["<span class=gac_x><a ", Rb(e, b), ">", d, '</a><br><span class="gac_d gac_h"', ">", c, "</span></span>"].join("");
        }
    },
    $b = {
        C: 32,
        A: "o",
        D: function(a) {
            return a.w
        },
        B: function(a, b, c, d) {
            oc(a, c, ['<a href="', d[1], '" class=fl onclick="google.ac.p(event);return true">From ES</a>'].join(""))
        }
    },
    ac = {
        C: 33,
        A: "q",
        D: function(a) {
            return a.w
        },
        B: function(a, b, c, d) {
            b = d[0];
            d = d[1];
            if (!i) E.innerHTML = b,
            E.style.paddingLeft = "1px",
            i = !0;
            K.innerHTML = c[0];
            c.w = google.dom.getText(K);
            a.innerHTML = d;
            a.style.paddingRight = "8px"
        }
    },
    nc = {
        C: 35,
        A: "p",
        D: function(a) {
            return a.w
        },
        B: function(a, b, c) {
            oc(a, c, ["<a href=#ps class=fl onclick=\"return google.ac.dc(event,'", b, "')\">Rimuovi</a>"].join(""))
        }
    };
    function pc(a, b, c, d, e) {
        var f = c.indexOf("/url") ? c: c.match(/url=([^&]*)/)[1];
        a.style.lineHeight = "112%";
        a.innerHTML = ["<a class=q ", Rb(f, c), ">", b, '</a><span class="gac_d gac_x">', e ? e + "<br>": "", "", d ? "<span class=gac_h>" + d + "</span></span>": ""].join("")
    }
    google.ac = {
        c: function(a) {
            return fa ? (Z(a), !0) : !1
        },
        cfg: function() {
            return ua
        },
        cp: jb,
        cq: function() {
            return u
        },
        ct: Ra,
        d: ab,
        dc: function(a, b) {
            Z(a);
            for (var c = 0, d; d = Y(c++);) if (d.G == b) {
                T && (c = [na, "clients1.google.com", Vb(Ea, "delq", d.w)], M && c.push("&tok=", encodeURIComponent(M)), T.I(c.join("")));
                break
            }
            return ! 1
        },
        ds: Qa,
        h: cb,
        hs: W,
        i: function(a, b, c, d, e, f) {
            R || Wa();
            y = U.insideFrame || document;
            var l = U.installForm;
            if (l && l.q) a = l,
            b = a.q;
            else if (!b) a = document.f || document.gs,
            b = a.q;
            if (google.msg.send(13, [b, c]) || !C) {
                db(c, d);
                m = !0;
                ga = o = ja = ma = la = !1;
                ha = !0;
                ia = !1;
                n = !0;
                ra = r = ka = !1;
                f && Xb(f);
                Yb();
                A = a;
                C = b;
                s = t = sa = C.value;
                if (!b.init) Da = y.getElementsByTagName("head")[0],
                U.insideFrame && (ea = !1),
                google.listen(A, "submit", sb),
                a = function(a, b) {
                    google.listen(C, a, b)
                },
                a("cut",
                function(a) {
                    return hb(a)
                }),
                a("paste",
                function(a) {
                    return hb(a)
                }),
                C.setAttribute("autocomplete", "off"),
                U.allowHideSuggestions && a("blur", W),
                h.IE ? (C.onbeforedeactivate = function() {
                    if (Fa) return Fa = 0,
                    !1
                },
                a("keydown", mb), a("keyup", tb)) : h.GECKO ? (C.onkeypress = mb, a("keyup", tb)) : h.WEBKIT ?
                (a("keydown", mb), C.onkeyup = tb, C.setAttribute("spellcheck", !1)) : (a("keypress", mb), a("keyup", tb)),
                H = X("aq", "f"),
                va = X("aqi", ""),
                wa = X("aql", ""),
                J = X("oq", s),
                Ia = Ja = !1,
                eb(),
                fb(),
                K = y.createElement("div");
                b.init = !0;
                W();
                lb();
                ea || (kb(), ea = !0);
                b = "&client=" + Na[V];
                a = google.authuser;
                c = ["?hl=",
                google.kHL, a ? "&authuser=" + encodeURIComponent(String(a)) : "", b, c ? "&ds=" + c: "", d ? "&pq=" + encodeURIComponent(d) : ""].join("");
                za = "/complete/search" + c;
                Ea = "/complete/deleteitems" + c;
                P = jb();
                h.GECKO && google.listen(window, "pageshow",
                function(a) {
                    if (a.persisted) H.value = "f",
                    J.value = C.value
                });
                oa = "https:" == document.location.protocol;
                Wb();
                c = ma || e && e.length ||
                oa;
                na = ["http", c ? "s": "", "://"].join("");
                c && m && n && (Ya(), M = e, Fb())
            }
        },
        isr: function() {
            return k
        },
        p: Z,
        ps: lb,
        r: function(a, b, c) {
            a = a || window.event;
            fa = !1;
            a.which ? fa = a.which == 2: a.button && (fa = a.button == 4);
            b.href = Ab(c)
        },
        rd: rb,
        ru: function() {
            return za
        },
        sa: function() {
            return !! w && !!Ba
        },
        sb: function() {
            return F
        },
        shr: Hb,
        sr: Ub,
        st: bb,
        sv: function(a) {
            for (var b in a) U[b] = a[b]
        },
        ui: Tb,
        uhi: eb,
        x: function(a) {
            y.getElementById("p_pl").style.display = "none";
            Mb(999);
            Z(a);
            return pa = !1
        },
        z: function() {
            if (h.IE) {
                try {
                    var a = y.location,
                    b = a.protocol +
                    "//" + a.host,
                    c = y.getElementById("shp0");
                    c.style.behavior = "url(#default#homepage)";
                    c.setHomePage(b);
                    var d = new Image;
                    d.src = "/gen_204?mgmhp=shp0&ct=c&client=instant";
                    window.dummy = d
                } catch(e) {}
                Z(g)
            }
            return ! 1
        },
        u: vb
    };
    google.listen(window, "resize", lb);
    google.dstr && google.dstr.push && google.dstr.push(Pa);
})();
 (function() {
    window.ManyBox = {};
    var e,
    g,
    h = 1,
    j = google.History.client(i),
    k = [],
    l;
    window.ManyBox.delayedRegister = function(a) {
        k.push(a)
    };
    function n(a) {
        for (var b in e) if (e[b].b && a(e[b])) break
    }
    function p(a, b, c, d, f) {
        this.b = a;
        this.v = b;
        this.s = d;
        this.o = f;
        this.m = "/mbd?jsid=" + a + (b ? "&docid=" + b: "") + "&resnum=" + a.replace(/[^0-9]/, "") + "&mbtype=" + d + "&usg=" + c + "&hl=" + (google.kHL || "");
        this.g = {};
        this.z = {};
        g[a] = {
            open: 0,
            content: this.g,
            doc: this.v,
            sent: 0
        };
        this.n = 0
    }
    p.prototype.append = function(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b].split("=");
            this.z[c[0]] = c[1]
        }
    };
    function q(a) {
        var b = "",
        c;
        for (c in a.z) b = [b, "&", c, "=", a.z[c]].join("");
        return b
    }
    function r(a, b) {
        return document.getElementById("mb" + b + a.b)
    }
    function s(a, b) {
        a.i.style.paddingTop = b + "px";
        a.i.style.display = a.i.innerHTML ? "": "none";
        if (b > a.n) a.n = b;
        a.j.style.fontSize = b + "px";
        a.j.style.fontSize = null
    }
    function t(a) {
        if (!a.J) a.J = 1,
        a.d = r(a, "b"),
        a.d ? (a.k = 0, a.a = r(a, "l"), a.a ? (a.j = a.a.getElementsByTagName("DIV")[0], a.p = a.a.getElementsByTagName("A")[0], a.B = a.p.innerHTML, a.o = a.o || a.B, a.j.title = l && l.m_tip, a.a.I = function(b, c) {
            var d = google.style.getPageOffsetStart(a.a),
            f = google.style.getPageOffsetTop(a.a);
            return b > d - 5 && b < d + google.style.getWidth(a.a) + 5 && c > f - 5 && c < f + google.style.getHeight(a.a) + 5
        },
        a.i = r(a, "f"), s(a, 0), a.a.onmousedown = u(a), a.a.onclick = w(a), a.a.go = function() {
            a.a.onmousedown();
            a.a.onclick()
        }) : delete e[a.b]) :
        delete e[a.b]
    }
    function x(a) {
        google.log("manybox", [a.k ? "close": "open", "&id=", a.b, "&docid=", a.v, "&mbtype=", a.s, q(a)].join(""))
    }
    function y(a, b) {
        var c = google.xhr();
        if (c) c.open("GET", a.m + q(a) + "&zx=" + google.time()),
        a.w = 0,
        c.onreadystatechange = function() {
            z(a, c, b)
        },
        a.w = 1,
        c.send(null)
    }
    function z(a, b, c) {
        if (b.readyState == 4) {
            var d = 0;
            if (b.status == 200) try {
                eval(b.responseText),
                d = 1
            } catch(f) {} ! d && !a.K ? (g[a.b].sent = 0, a.K = 1, a.m += "&cad=retry", y(a, c)) : (c ? (r(a, "cb").parentNode.innerHTML = a.g.h, A(a)) : a.A && B(a), a.w = 0)
        }
    }
    function C(a) {
        g[a.b].sent ? a.L++<3 && x(a) : (a.g.h ? x(a) : y(a, !1), g[a.b].sent = a.L = 1)
    }
    function D(a) {
        g[a.b].sent || C(a); (a.A = a.w) || B(a)
    }
    function u(a) {
        return function() {
            C(a)
        }
    }
    function w(a) {
        return function() {
            D(a)
        }
    }
    function E(a) {
        if (!a.g.h) {
            if (l && l.m_errors) if (l.m_errors[a.s]) a.g.h = l.m_errors[a.s];
            else if (l.m_errors["default"]) a.g.h = l.m_errors["default"];
            a.H = a.a.onclick;
            a.a.onclick = function() {
                h = 0;
                B(a);
                h = 1;
                a.c.parentNode.removeChild(a.c);
                g[a.b].sent = a.g.h = a.D = 0;
                a.a.onclick = a.H
            }
        }
        if (!a.D) {
            a.D = 1;
            var b = document.getElementById("res");
            a.F = b && google.style.getPageOffsetStart(a.d) > google.style.getPageOffsetStart(b) + google.style.getWidth(b);
            a.c = document.createElement("div");
            s(a, 0);
            a.c.style.position = "absolute";
            a.c.style.paddingTop =
            a.c.style.paddingBottom = "6px";
            a.c.style.display = "none";
            a.c.className = "med";
            b = document.createElement("div");
            a.c.appendChild(b);
            b.className = "std";
            b.innerHTML = a.g.h;
            a.i.parentNode.insertBefore(a.c, a.i)
        }
    }
    function i(a) {
        h = 0;
        F();
        n(function(b) {
            b.v == a[b.b].doc ? (b.g = a[b.b].content, a[b.b].open != b.k && B(b)) : a[b.b].sent = 0
        });
        g = a;
        h = 1;
        google.History.save(j, g)
    }
    window.ManyBox.create = function(a, b, c, d, f) {
        return new p(a, b, c, d, f)
    };
    window.ManyBox.register = function(a, b, c, d, f) {
        return e[a] = window.ManyBox.create(a, b, c, d, f)
    };
    google.listen(document, "click", G);
    function G(a) {
        for (var a = a || window.event, b = a.target || a.srcElement; b.parentNode;) {
            if (b.tagName == "A" || b.onclick) return;
            b = b.parentNode
        }
        var c = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        d = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        n(function(a) {
            if (a.a.I(c, d)) return a.a.go(),
            1
        })
    }
    function H() {
        e = {};
        g = {};
        k = []
    }
    H();
    function F(a) {
        a && (l = a);
        for (a = 0; a < k.length; a++) try {
            k[a].func()
        } catch(b) {
            delete e[k[a].b]
        }
        k = [];
        n(t)
    }
    function I(a, b) {
        a.c.style.clip = "rect(0px," + (a.d.width || "34em") + "," + (b || 1) + "px,0px)"
    }
    p.prototype.insert = function(a) {
        this.g.h = a
    };
    p.prototype.loadManyboxData = function() {
        C(this)
    };
    p.prototype.toggleManyboxState = function() {
        D(this)
    };
    p.prototype.updateManybox = function() {
        y(this, !0)
    };
    function A(a) {
        a.e = r(a, "cb");
        var b = a.e && a.e.getAttribute("mbopen");
        b && (eval(b), a.onopen(a.e))
    }
    function J(a) {
        if (!a.e) a.e = r(a, "cb");
        var b = a.e && a.e.getAttribute("mbpreopen");
        b && (eval(b), a.onpreopen(a.e))
    }
    function K(a, b, c, d, f) {
        var o = c > 0 ? 150: 75,
        m = google.time() - f,
        o = m < o && h ? m / o * c: d > 1 ? c - 10: c,
        m = Math.max(a.u, b + o),
        v = m - a.u;
        I(a, v);
        a.d.style.height = m < 0 ? 0: v ? m + "px": "";
        s(a, Math.max(0, v - 5));
        Math.abs(o) < Math.abs(c) ? window.setTimeout(function() {
            K(a, b, c, d - 1, f)
        },
        30) : window.setTimeout(function() {
            c < 0 ? (a.c.style.display = "none", a.j.style.backgroundPosition = "-159px -41px", a.p.innerHTML = a.B, a.k = g[a.b].open = 0, google.History.save(j, g)) : A(a);
            if (!google.browser.engine.IE && a.F) a.c.style.width = "100px";
            a.c.style.position =
            a.d.style.height = "";
            s(a, 0);
            google.msg.send(48);
            a.d.C = 0
        },
        0)
    }
    function B(a) {
        a.A = 0;
        if (!a.d.C) {
            a.d.C = 1;
            var b;
            if (a.k) {
                if (b = a.e && a.e.getAttribute("mbclose")) eval(b),
                a.onclose(a.e);
                b = a.u - google.style.getHeight(a.d);
                a.i.style.display = "none";
                s(a, a.n);
                a.c.style.position = "absolute"
            } else a.u = google.style.getHeight(a.d),
            E(a),
            s(a, 0),
            a.n = 0,
            n(function(a) {
                a.j.title = ""
            }),
            J(a),
            a.j.style.backgroundPosition = "-159px -55px",
            a.p.innerHTML = a.o,
            I(a, 1),
            a.c.style.position = "absolute",
            a.c.style.display = "",
            a.k = g[a.b].open = 1,
            google.History.save(j, g),
            b = a.c.offsetHeight;
            K(a, google.style.getHeight(a.d), b, google.browser.product.SAFARI ? 2: 1, google.time())
        }
    }
    google.register(22, {
        init: F,
        dispose: H
    });
})();
 (function() {
    var h,
    i,
    j,
    l = google.browser.engine;
    google.acrs = function(a) {
        for (var a = a.split(/{|}/), d = 1; d < a.length; d += 2) {
            var b = a[d - 1],
            c = a[d];
            if (!h) h = document.createElement("style"),
            l.IE ? (document.getElementById("xjsc").appendChild(h), i = h.styleSheet) : (document.getElementsByTagName("head")[0].appendChild(h), i = h.sheet),
            l.WEBKIT && !i && (j = document.createTextNode(""), h.appendChild(j));
            if (l.IE) for (var b = b.split(","), e = 0, f = void 0; f = b[e++];) i.addRule(f, c);
            else c = b + "{" + c + "}",
            l.WEBKIT && !i ? j.data += c: i.insertRule(c, i.cssRules.length)
        }
    };
    google.Toolbelt.ascrs = function() {};
    var m,
    n;
    function o() {
        google.nav.go(document.getElementById("tbpi").href)
    }
    function p() {
        mbtb1.insert = function(a) {
            try {
                for (var b = eval(a), c = a = 0, e, f; (e = b[a]) && (f = n[c]); a++, c++) google.Toolbelt.pti[c] ? f.id != e[0] && a--:(e[2] ? (f.className = "tbos", google.listen(f, "click", google.Toolbelt.tbosClk)) : f.className = "tbou", f.id = e[0], f.innerHTML = e[1]);
                google.msg.send(48)
            } catch(g) {
                o()
            }
        };
        var a = google.xhr();
        if (a) a.open("GET", [google.base_href.indexOf("/images?") == 0 ? google.base_href.replace(/^\/images\?/, "/mbd?") : google.base_href.replace(/^\/search\?/, "/mbd?"), "&mbtype=29&resnum=1&tbo=1", mbtb1.tbm ?
        "&tbm=" + mbtb1.tbm: "", mbtb1.tbs ? "&tbs=" + mbtb1.tbs: "", "&docid=", mbtb1.docid, "&usg=", mbtb1.usg, "&zx=", google.time()].join(""), !0),
        a.onreadystatechange = function() {
            if (a.readyState == 4) if (a.status == 200) try {
                eval(a.responseText)
            } catch(d) {
                o()
            } else o()
        },
        a.send(null)
    }
    function r() {
        m = [];
        n = [];
        var a = document.getElementById("tbd");
        if (a) {
            for (var d = a.getElementsByTagName("ul"), b = 0, c; c = d[b++];) {
                m.push(c);
                c = c.getElementsByTagName("li");
                for (var e = 0, f; f = c[e++];) n.push(f)
            }
            if (google.browser.engine.IE) {
                a = a.getElementsByTagName("ul");
                for (b = 0; c = a[b]; b++) google.style.getHeight(c)
            }
        }
    }
    google.Toolbelt.togglePromotedTools = function() {
        var a = !google.style.hasClass(document.body, "tbo");
        if (a) {
            var d = document.getElementById("tbd");
            if (!d.getAttribute("data-loaded")) {
                d.setAttribute("data-loaded", 1);
                for (var b = [], c = 0, e = 0, f = google.Toolbelt.atg.length; e < f; ++e) {
                    var g = google.Toolbelt.atg[e],
                    k = google.style.hasClass(m[e], "tbpd");
                    b.push('<li><ul class="tbt' + (k ? " tbpd": "") + '">');
                    for (var q; (q = google.Toolbelt.pbt[c]) && q[0] == e; c++) {
                        for (k = 0; k++<q[1];) b.push("<li>");
                        b.push('<li class="' + n[c].className +
                        '" id=' + n[c].id + ">" + n[c].innerHTML)
                    }
                    for (k = 0; k++<g;) b.push("<li>");
                    b.push("</ul>")
                }
                d.innerHTML = b.join("");
                r();
                p()
            }
        }
        google.srp.updateLinksWithParam("tbo", a ? "1": "", google.srp.isSerpLink, google.srp.isSerpForm);
        c = a ? 1: 0;
        d = a ? "": "none";
        for (b = 0; e = m[b]; b++) {
            google.style.hasClass(e, "tbpd") || google.dom.set(e, "marginBottom", c * 8 + "px");
            if (f = google.browser.engine.IE) if (f = google.browser.isEngineVersion("7")) if (f = !google.browser.isEngineVersion("8")) {
                a: {
                    f = 0;
                    for (g = void 0; g = google.Toolbelt.pbt[f++];) if (g[0] == b) {
                        f = !0;
                        break a
                    }
                    f = !1
                }
                f = !f
            }
            if (f) e.parentNode.style.display = d
        }
        for (b = 0; c = n[b]; b++) if (!google.Toolbelt.pti[b]) c.style.display = d;
        a ? google.style.addClass(document.body, "tbo") : google.style.removeClass(document.body, "tbo");
        google.msg.send(48);
        google.log("toolbelt", (a ? "0": "1") + "&ei=" + google.kEI);
        return ! 1
    };
    var s = {},
    t = {};
    google.register(25, {
        init: function(a) {
            s = a.t || {};
            t = a.m || {};
            r()
        },
        dispose: function() {
            s = t = {}
        }
    });
    google.Toolbelt.hasInURL = function(a, d) {
        var b = google.nav.getParam("tbm", d);
        if (b) for (var c = 0, e; e = a[c++];) if (e == b) return ! 0;
        return (b = google.nav.getParam("tbs", d)) && RegExp("(^|,)(" + a.join("|") + "):").test(b) ? !0: !1
    };
    google.Toolbelt.get = function(a) {
        return s[a]
    };
    google.Toolbelt.set = function(a, d, b) {
        if (a in t) b = b || {},
        b.tbm = a;
        else {
            var b = google.Toolbelt.unset(a, b),
            c = b.tbs,
            d = encodeURIComponent(d.replace("_", "_1").replace(",", "_2").replace(":", "_3")),
            a = a + ":" + d;
            b.tbs = c ? c + "," + a: a
        }
        return b
    };
    google.Toolbelt.unset = function(a, d) {
        var b = d || {};
        if (a in t) {
            var c = d ? d.tbm: google.nav.getParam("tbm");
            if (!c || c == a) d.tbm = null
        } else {
            var e = d ? d.tbs: google.nav.getParam("tbs"),
            c = null;
            if (e) for (var e = e.split(","), f = 0, g; g = e[f++];) g.match("^" + a + ":") || (c = c ? c + "," + g: g);
            b.tbs = c
        }
        return b
    };
    function u(a) {
        for (; a && !google.style.hasClass(a, "tbt");) a = a.parentNode;
        return a
    }
    google.Toolbelt.ctlClk = function(a, d, b) {
        a = a || "cdr_opt";
        if (a == "cdr_opt" && b) google.browser.engine.IE ? b.cancelBubble = !0: b.stopPropagation();
        google.Toolbelt.maybeLoadCal && google.Toolbelt.maybeLoadCal();
        d = d || "cdr_min";
        if (a = document.getElementById(a)) if (a.className = "tbots", a = u(a)) {
            for (var b = 0, c; c = a.childNodes[b++];) if (c.className == "tbos") c.className = "tbotu"; (d = document.getElementById(d)) && d.focus()
        }
        return ! 1
    };
    google.Toolbelt.cdrClk = google.Toolbelt.ctlClk;
    google.Toolbelt.cdrSbt = function() {
        return v("ctbs", {
            cdr_min: "cd_min",
            cdr_max: "cd_max"
        })
    };
    google.Toolbelt.clSbt = function() {
        return v("ltbs", {
            l_in: "cl_loc"
        })
    };
    google.Toolbelt.prcSbt = function(a, d) {
        v("prcbs", {
            prc_max: d,
            prc_min: a
        });
        var b = document.getElementById("prc_frm");
        if (b) {
            var c = document.getElementById("tsf");
            if (c) b.elements.q.value = c.elements.q.value
        }
    };
    function v(a, d) {
        var b = document.getElementById(a);
        if (b) for (var c in d) {
            var e = document.getElementById(c).value.replace(/_/g, "_1").replace(/,/g, "_2").replace(/:/g, "_3"),
            e = e.replace(/^\s+|\s+$/g, "");
            b.value = b.value.replace(RegExp("(" + d[c] + ":)([^,]*)"), "$1" + e)
        }
        return ! 0
    }
    google.Toolbelt.tbosClk = function(a) {
        a = a || window.event;
        if ((a = a.target || a.srcElement) && a.className == "tbotu") if (a.className = "tbos", a = u(a)) for (var d = 0, b; b = a.childNodes[d++];) if (b.className == "tbots") b.className = "tbou"
    };
})();
 (function() {
    var h = null;
    var i = google.dom;
    document.dir && document.dir == "rtl" && google.browser.product.FIREFOX && google.browser.isProductVersion("3");
    var k = h,
    l = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function(b) {
            return a.apply(h, c.concat(Array.prototype.slice.call(arguments)))
        }
    },
    m = function(a, b) {
        try {
            var c = google.xhr();
            c.onreadystatechange = function() {
                c.readyState == 4 && c.status == 200 && (b && b(eval("(" + c.responseText + ")")), c = h)
            };
            var e = a.split("?");
            c.open("POST", e[0], !0);
            c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            c.send(e[1] || "")
        } catch(f) {}
    };
    var n = {
        s: "s2CellId"
    },
    o = "",
    q = [],
    t = function(a, b, c) {
        var e = {
            applicationId: 19
        },
        f = "/reviews/json/";
        if (o) {
            var d;
            d = b.a ? {
                url: b.a
            }: {
                swUrl: b.n,
                groups: ["W"],
                encrypted: b.i == h ? k.qt: k.at[b.c]
            };
            if (a == "write") {
                var j = {},
                g = b.c;
                d = {
                    entity: d,
                    attributes: j
                };
                g && g.length > 256 && (g = g.substr(0, 256));
                k.ex && (j.exp = k.ex);
                if (b.i != h) {
                    j.rquery = g;
                    if (b.k != h) j.pa = b.k;
                    d.starRating = b.i
                } else if (b.j) {
                    if (j.rquery = g, d.bookmarked = !0, b.g) {
                        var p = b.g.split(/=|\|/);
                        if (p.length % 2 == 0) for (g = 0; g < p.length; g += 2) {
                            var x = p[g];
                            x in n && (j[n[x]] = p[g + 1])
                        }
                    }
                } else d.labels =
                [b.c],
                d.comment = b.m;
                if (b.d) d.title = b.d;
                d.language = google.kHL;
                d.country = k.gl;
                e.annotations = [d]
            } else a == "delete" && (e.entities = [d]);
            f += a + "?req=" + encodeURIComponent(google.stringify(e));
            if (a == "write" || a == "delete") f += "&token=" + o;
            r(f, c)
        } else if (q.push([a, b, c]) == 1) {
            if (k.q) e.queries = [k.q];
            else {
                e.queries = [];
                g = 0;
                for (b = {}; a = s[g++];) b[a.c] || (e.queries.push(a.c), b[a.c] = 1)
            }
            r(f + "sw?req=" + encodeURIComponent(google.stringify(e)))
        }
    },
    r = function(a, b, c) {
        m(a,
        function(e) {
            if (e.channelHeader.token) {
                o = e.channelHeader.token;
                if (e.swToken) {
                    k.qt = e.swToken;
                    k.at = {};
                    for (var f = 0, d; d = e.queryTokens[f++];) k.at[d.query] = d.token
                }
                for (; q.length;) t.apply(h, q.shift())
            }
            f = e.channelHeader.errorCode;
            d = c || 1;
            f == 7 && d < 3 ? r(a, b, d + 1) : (f && google.log("error", "&sa=X&oi=sw_s&cd=" + f), b && b(e))
        })
    };
    var v = google.History.client(u),
    w = [],
    y = 0,
    z = 0,
    A = {},
    B = 0,
    u = function(a) {
        if (a && y && (y = 0, B == a[0])) {
            w = a[1];
            z = 1;
            for (var a = 0, b; b = w[a++];) A[b[0]] && A[b[0]].call(h, b[1], b[2]);
            z = 0
        }
    };
    A[1] = function(a, b) {
        var c = s[a];
        c && c.b && c.b.className != (b ? "wsa": "ws") && C(c)
    };
    var C = function(a) {
        var b = a.b.className == "ws",
        c = b ? "wsa": "ws";
        a.b.className = c;
        for (var e = 0, f; f = s[e]; ++e) if (e != a.h && f.a == a.a && f.b) f.b.className = c;
        if (!z) {
            if (b) {
                var d;
                d = d || {};
                d.c = a.c || k.q;
                d.a = a.a;
                d.j = !0;
                d.d = a.d;
                if (c = i.get(".wra", a.e)) d.g = i.getText(c);
                t("write", d)
            } else t("delete", {
                a: a.a
            });
            a: {
                a = a.h;
                for (d = 0; c = w[d++];) if (c[0] == 1 && c[1] == a) {
                    c[2] = b;
                    google.History.save(v, [B, w]);
                    break a
                }
                w.push([1, a, b]);
                google.History.save(v, [B, w])
            }
        }
    },
    D = function() {
        var a;
        a = i.get("button.wpb", this);
        a.style.backgroundPosition ? (a.style.cssText =
        "", a = !0) : (a.style.backgroundPosition = k.pb, a = !1);
        this.parentNode.nextSibling.style.display = a ? "none": "";
        i.get("a", this).innerHTML = a ? k.msgs.r: k.msgs.s;
        google.log(a ? 0: 1, "&sa=X&oi=sw_top&cd=0")
    };
    var s = h,
    E = function() {
        for (var a = i.getAll("li.w\\d"), a = a.concat(i.getAll("td.w\\d"), i.getAll("div.w\\d")), b = 0, c; c = a[b++];) a: if (c) {
            for (var e = 0, f = void 0; f = s[e++];) if (c == f.e) break a;
            var f = i.get("a.l", c) || i.get("a", c),
            e = f.href,
            d = i.get(".wru", c);
            if (d) d.href ? (f = d, e = f.href) : e = i.getText(d);
            var d = i.get(".wrt", c) || f,
            j = e.match(/[\/.]google\.[.\w:]+\/url\?(.+)/);
            if (j) {
                var g = j[1];
                if ((j = g.match(/(^|&)url=(.*?)(&|$)/)) || (j = g.match(/(^|&)q=(.*?)(&|$)/))) e = decodeURIComponent(j[2])
            }
            c = f = {
                a: e,
                h: s.length,
                o: f,
                e: c,
                d: i.getText(d)
            };
            c.b = i.get("button.wsa?", c.e);
            if (c.b && !google.style.hasClass(c.b, "wss")) c.b.onclick = l(C, c);
            s.push(f)
        }
    };
    google.sw = function(a) {
        k = a;
        s = [];
        w = [];
        y = 1;
        o = "";
        E();
        for (var a = B = 0, b; b = s[a++];) B = B << 5 ^ B >> 27 ^ b.a.length;
        if (a = document.getElementById("wsz")) a.onclick = D
    };
    google.sw.find = E;
    google.register && google.register(33, {
        init: google.sw
    });
})();
 (function() {
    try {
        if (!window.gbar || !gbar.close) {
            window.gbar = {};
            window.gbar.sb = function() {
                return ! 1
            };
            var i,
            j,
            l;
            function m(a, b, c, d, h, g) {
                var e = document.getElementById(a);
                if (e) {
                    var f = e.style;
                    f.left = d ? "auto": b + "px";
                    f.right = d ? b + "px": "auto";
                    f.top = c + "px";
                    f.visibility = j ? "hidden": "visible";
                    h && g ? (f.width = h + "px", f.height = g + "px") : (m(i, b, c, d, e.offsetWidth, e.offsetHeight), j = j ? "": a)
                }
            }
            var n = [],
            o = function() {
                j && m(j, 0, 0)
            },
            q = function(a, b) {
                var c,
                d = document.getElementById("gbi"),
                h = a;
                if (!h) h = d.firstChild;
                for (; b && (c = b.pop());) {
                    var g = d,
                    e = c,
                    f = h;
                    l || (l = "gb2");
                    g.insertBefore(e, f).className = l
                }
            };
            window.gbar.qs = function(a) {
                var b = window.encodeURIComponent && (document.forms[0].q || "").value;
                if (b) a.href = a.href.replace(/([?&])q=[^&]*|$/,
                function(a, d) {
                    return (d || "&") + "q=" + encodeURIComponent(b)
                })
            };
            window.gbar.tg = function(a) {
                var a = a || window.event,
                b = a.target || a.srcElement;
                a.cancelBubble = !0;
                if (i == null) a = document.createElement(Array.every || window.createPopup ? "iframe": "div"),
                a.frameBorder = "0",
                i = a.id = "gbs",
                a.src = "#",
                document.body.appendChild(a),
                document.onclick = o;
                var c = b,
                b = 0;
                if (c.className != "gb3") c = c.parentNode;
                var a = c.getAttribute("aria-owns") || "gbi",
                d = c.offsetWidth,
                h = c.offsetTop > 20 ? 46: 24;
                document.getElementById("tphdr") && (h -= 3);
                var g = !1;
                do b += c.offsetLeft || 0;
                while (c = c.offsetParent);
                var c = (document.documentElement.clientWidth ||
                document.body.clientWidth) - b - d,
                e,
                d = document.body,
                f = document.defaultView;
                f && f.getComputedStyle ? (d = f.getComputedStyle(d, "")) && (e = d.direction) : e = d.currentStyle ? d.currentStyle.direction: d.style.direction;
                e = e == "rtl";
                if (a == "gbi") {
                    for (d = 0; f = n[d++];) f();
                    q(null, window.navExtra);
                    e && (b = c, g = !0)
                } else e || (b = c, g = !0);
                j != a && o();
                m(a, b, h, g)
            };
            window.gbar.close = o;
            window.gbar.almm = q;
            window.gbar.si = function() {
                return document.getElementById("gb_70")
            };
            window.gbar.adh = function(a, b) {
                n.push(b)
            };
            var r = -1,
            s = function(a) {
                var b = /\bgbz0l\b/,
                a = a.className;
                return ! (!a || !a.match(b))
            };
            window.gbar.slp = function(a) {
                try {
                    var b,
                    c;
                    if (r == -1) a: {
                        var d = document.getElementById("gbar");
                        if (d) for (var h = d.getElementsByTagName("a"), d = 0, g; g = h[d++];) if (s(g)) {
                            var e,
                            f = /^gb_(\d+)/.exec(g.id);
                            e = f ? f[1] : null;
                            if (e != null) {
                                r = e;
                                c = g;
                                break a
                            }
                            break
                        }
                        r = 0;
                        c = null
                    } else c = document.getElementById("gb_" + r);
                    b = c;
                    var k = document.getElementById("gb_" + a);
                    if (b) {
                        var p = b.className;
                        c = /\s?\bgbz0l\b/;
                        if (p && p.match(c)) b.className = p.replace(c, "")
                    }
                    if (k) {
                        var t = k.className;
                        s(k) || (k.className += (t != "" ? " ": "") + "gbz0l")
                    }
                } catch(u) {
                    window.gbar.logger.ml(u)
                }
                r =
                a
            };
        }
    } catch(e) {
        window.gbar && gbar.logger && gbar.logger.ml(e);
    }
})();
 (function() {
    window.google.crm = {};
    window.google.cri = 0;
    window.clk = function(e, a, b, l, j, c, k, f) {
        if (document.images) {
            var a = encodeURIComponent || escape,
            b = new Image,
            g = window.google.cri++;
            window.google.crm[g] = b;
            b.onerror = b.onload = b.onabort = function() {
                delete window.google.crm[g]
            };
            var d,
            h,
            i;
            if (google.v6) d = google.v6.src,
            h = google.v6.complete || google.v6s ? 2: 1,
            i = (new Date).getTime() - google.v6t,
            delete google.v6;
            c && c.substring(0, 6) != "&sig2=" && (c = "&sig2=" + c);
            b.src = ["/url?sa=T&source=", google.sn, "&cd=", a(j), google.j && google.j.pf ? "&sqi=2": "", "&ved=", a(k), f ? "&authuser=" + a(f.toString()) :
            "", e ? "&url=" + a(e.replace(/#.*/, "")).replace(/\+/g, "%2B") : "", "&ei=", google.kEI, d ? "&v6u=" + a(d) + "&v6s=" + h + "&v6t=" + i: "", c].join("")
        }
        return ! 0
    };
})();
 (function() {
    window.rwt = function(a, b, m, n, i, e, c, j, f) {
        try {
            if (a === window) for (a = window.event.srcElement; a;) {
                if (a.href) break;
                a = a.parentNode
            }
            var b = encodeURIComponent || escape,
            k = google.browser.engine.IE ? a.getAttribute("href", 2) : a.getAttribute("href"),
            d,
            g,
            h;
            if (google.v6) d = google.v6.src,
            g = google.v6.complete || google.v6s ? 2: 1,
            h = (new Date).getTime() - google.v6t,
            delete google.v6;
            c && c.substring(0, 6) != "&sig2=" && (c = "&sig2=" + c);
            var l = ["/url?sa=t&source=", google.sn, "&cd=", b(i), google.j && google.j.pf ? "&sqi=2": "", "&ved=", b(j), "&url=",
            b(k).replace(/\+/g, "%2B"), "&ei=", google.kEI, f ? "&authuser=" + b(f.toString()) : "", d ? "&v6u=" + b(d) + "&v6s=" + g + "&v6t=" + h: "", e ? "&usg=" + e: "", c].join("");
            a.href = l;
            a.onmousedown = ""
        } catch(o) {}
        return ! 0
    };
})();
 (function() {
    var b;
    google.safeSearchBar = {
        toggle: function(a) {
            if (!google.nossbar) if (a = a || window.event, a.cancelBubble = !0, a.stopPropagation && a.stopPropagation(), document.getElementById("ss-box").style.visibility == "visible") {
                if (document.getElementById("ss-box").style.visibility = "hidden", document.body.removeEventListener ? document.body.removeEventListener("click", google.safeSearchBar.toggle, !1) : document.body.detachEvent("onclick", google.safeSearchBar.toggle), b) b.style.visibility = "hidden"
            } else {
                var a = document.getElementById("ss-box"),
                d =
                document.getElementById("ss-status");
                if (!b) {
                    b = document.createElement(Array.every || window.createPopup ? "iframe": "div");
                    b.frameBorder = "0";
                    b.src = "#";
                    a.parentNode.appendChild(b).id = "ss-barframe";
                    var c = a.offsetWidth - 2;
                    document.getElementById("ss-off").style.width = c + "px";
                    document.getElementById("ss-moderate").style.width = c + "px";
                    document.getElementById("ss-strict").style.width = c + "px"
                }
                c = 0;
                do c += d.offsetLeft;
                while (d = d.offsetParent);
                a.style.visibility = "visible";
                b.style.visibility = "visible";
                b.style.width = a.offsetWidth +
                "px";
                b.style.height = a.offsetHeight + "px";
                b.style.position = "absolute";
                b.style.top = a.offsetTop + "px";
                google.listen(document.body, "click", google.safeSearchBar.toggle)
            }
        },
        updateLinkUrl: function(a) {
            for (var d = ["ss-off", "ss-moderate", "ss-strict"], c = 0, e; e = d[c++];) if (e = document.getElementById(e)) e.href = [e.href.replace(/([?&])prev=([^&]*)&?/i, "$1").replace(/&$/i, ""), "&prev=", encodeURIComponent(a)].join("")
        }
    };
})();
 (function() {
    var f = null;
    google.rt = {};
    var g,
    h,
    i,
    aa,
    ba = [],
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
    ca,
    da,
    u,
    v,
    ea,
    fa,
    ga,
    w,
    x,
    ha,
    ia = !1,
    ja = "";
    google.rt.init = function(a, b, c) {
        k = 30;
        m = [];
        l = [];
        p = o = !1;
        q = "";
        s = 0;
        t = !1;
        ca = (new Date).getTime();
        da = 100;
        u = 0;
        v = !1;
        w = [];
        x = "";
        n = [];
        g = 6E3;
        h = 3E3;
        i = 1200;
        aa = 5;
        if (r = document.getElementById(a)) {
            if (r.className.indexOf("rtob") > -1) r.style.height = r.clientHeight - google.style.getComputedStyle(r, "padding-top") - google.style.getComputedStyle(r, "padding-bottom") + "px";
            b && ka(b, l);
            if (c) c.maxResults && (da = c.maxResults),
            c.promotedTweetRequestUrl && (x = c.promotedTweetRequestUrl),
            c.resultUrl && la(c.resultUrl),
            c.enableAS && (ia = !0, g = 5E3,
            l.length == 0 && (h = 5E3), i = 800, aa = 1);
            b = function() {
                t = !0
            };
            google.listen(document, "keydown", b);
            google.listen(document, "mousemove", b);
            u += r.getElementsByTagName("li").length;
            google.rt.timestampToString = ma;
            na();
            oa();
            pa(y, k);
            qa(a) && (z.push(function() {
                p = !0
            }), A.push(function() {
                p = !1
            }), B(0, !0));
            C(ra, h);
            sa()
        }
    };
    google.rt.pause = function() {
        window.clearTimeout(fa);
        ta();
        var a = document.getElementById("rth").getElementsByTagName("span");
        D(a[0]);
        a[1].style.display = "";
        ga = (new Date).getTime()
    };
    google.rt.resume = function() { ((new Date).getTime() - ga) / 1E3 > 10 && (m = []);
        y();
        pa(y, k);
        C(ra, 2E3);
        var a = document.getElementById("rth").getElementsByTagName("span");
        D(a[1]);
        a[0].style.display = ""
    };
    function D(a) {
        a.style.display = "none"
    }
    function ua(a) {
        return Math.min(7200, (Math.random() + 0.5) * Math.pow(2, a) * 5)
    }
    function pa(a, b) {
        var c = b;
        s && (c = ua(s));
        fa = window.setTimeout(function() {
            a();
            pa(a, b)
        },
        c * 1E3)
    }
    function C(a, b) {
        ea = window.setTimeout(function() { ! a() && o ? C(a, 1E3) : C(a, g)
        },
        b)
    }
    function ta() {
        window.clearTimeout(ea);
        window.clearInterval(void 0)
    }
    function ra() {
        var a = m;
        l.length > 0 && (a = l);
        if (!a.length || p) {
            if (v) {
                ta();
                var b = document.getElementById("rth").getElementsByTagName("span");
                if (b.length > 2) D(b[0]),
                D(b[1]),
                b[2].style.display = ""
            }
            return ! 1
        }
        for (var c = a.shift(), a = c.e, d = a.getElementsByTagName("li")[0], b = d.getElementsByTagName("span"), e = 0, j; j = b[e++];) j.className.match("rtd") && (j.className += " strm");
        r.insertBefore(a, r.firstChild);
        c.updateDate();
        google.History.save(va, {
            r: r.innerHTML,
            u: q,
            n: u,
            s: w,
            t: E()
        });
        var b = -google.style.getHeight(d) - google.style.getComputedStyle(d,
        "margin-bottom"),
        c = r.scrollTop,
        Ba = function() {
            r.className.indexOf("rtob") == -1 && google.msg.send(48)
        };
        c < 20 ? (B(c), google.fx.animate(i, [[a, "marginTop", b, 0, google.fx.easeInAndOut]],
        function() {
            Ba()
        })) : (B(c - b), Ba());
        return ! 0
    }
    function ka(a, b) {
        if (a.results) {
            for (var c = a.results.length, d = 0; d < ba.length; ++d) ba[d](a.results);
            for (d = c; c = a.results[--d];) {
                var e;
                a: {
                    e = n;
                    for (var j = e.length; j--;) if (e[j] === c.url) {
                        e = !0;
                        break a
                    }
                    e = !1
                }
                e || (wa(c.url), e = b, u++, e.push(xa(c)))
            }
        }
        a.nextRequest && (q = a.nextRequest);
        a.pollSeconds && (k = a.pollSeconds)
    }
    function wa(a) {
        for (n.push(a); n.length > 50;) n.shift()
    }
    function la(a) {
        for (var b = 0; b < a.length; ++b) wa(a[b])
    }
    google.rt.pushRealtimeResultsCallback = function(a) {
        ba.push(a)
    };
    window.mbrt0 = window.a = {
        insert: function(a) {
            a = eval("(" + a + ")");
            "numUpdates" in a ? ya(a) : (ka(a, m), l.length > 0 && m.length > 0 && (u -= l.length, l = []))
        }
    };
    function y() {
        if (t) t = !1,
        ca = (new Date).getTime();
        else if ((new Date).getTime() - ca > 24E4) return;
        v = u + aa > da;
        if (!o && !v && q) {
            var a = google.xhr();
            a.open("GET", q);
            a.onreadystatechange = function() {
                a.readyState == 4 && (a.status == 200 ? (eval(a.responseText), s = 0) : s++, o = !1)
            };
            o = !0;
            a.send(f)
        }
    }
    window.mbrtpl = {
        insert: function(a) {
            ha = !1;
            var b = eval("(" + a + ")");
            if (b.results) {
                var c = b.results.length;
                if ((a = document.getElementById("rtpl")) && c > 0) {
                    for (var d; d = b.results[--c];) a.innerHTML += d.html;
                    a.style.marginTop = "-100px";
                    a.style.display = "";
                    b = -google.style.getHeight(a) - google.style.getComputedStyle(a, "margin-bottom");
                    a.style.marginTop = b + "px";
                    google.fx.animate(i, [[a, "marginTop", b, 11, google.fx.easeInAndOut]])
                }
            }
        }
    };
    function sa() {
        if (x && !ha) {
            ha = !0;
            var a = google.xhr();
            a.open("GET", x);
            a.onreadystatechange = function() {
                a.readyState == 4 && a.status == 200 && eval(a.responseText)
            };
            a.send(f)
        }
    }
    function xa(a) {
        var b = document.createElement("div");
        b.innerHTML = a.html;
        return {
            e: b,
            updateDate: za(b)
        }
    }
    var va = google.History.client(function(a) {
        r.innerHTML = a.r;
        q = a.u;
        u = a.n;
        w = a.s;
        F(r, w, a.t);
        B(0, !0);
        m = [];
        y()
    });
    google.dstr.push(function() {
        ta();
        window.clearTimeout(fa)
    });
    google.register(64, {
        init: function(a) {
            a && (ja = a.secs)
        }
    });
    var G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    z,
    A,
    O,
    P,
    Q = !1,
    R = "ontouchstart" in window;
    function Aa() {
        return Math.max(P / J.scrollHeight * O, 20)
    }
    function S(a) {
        a = google.browser.product.IE ? a.offsetHeight: google.style.getComputedStyle(a, "height");
        return Number(a)
    }
    function Ca(a) {
        var a = a.offsetTop,
        b = google.browser.product.IE;
        if (b && google.browser.isProductVersion("8") || !b) a -= J.offsetTop;
        return a
    }
    function T(a) {
        if (a) for (var b = 0, c; c = z[b++];) c();
        else if (N) for (b = 0; c = A[b++];) c();
        N = a
    }
    function Da(a) {
        var b = Ea(a);
        if (b) {
            var c = Ca(b);
            a || (c += S(b) - P);
            M = !0;
            Fa(c, !0, 300,
            function() {
                M = !1;
                Ga(a)
            })
        }
    }
    function Fa(a, b, c, d) {
        var e = J.scrollHeight - P,
        e = e == 0 ? 0: Ha(a * (O - Aa()) / e, Aa()),
        e = [[I, "marginTop", Number(google.style.getComputedStyle(I, "margin-top")), e, google.fx.easeInAndOut]];
        b ? e.push([J, "scrollTop", J.scrollTop, a, google.fx.easeInAndOut, ""]) : J.scrollTop = a;
        google.fx.animate(c, e, d)
    }
    function Ga(a) {
        setTimeout(function() {
            N && Da(a)
        },
        200)
    }
    function Ea(a) {
        var b = J.childNodes;
        if (a) for (a = b.length - 1; a >= 0; --a) {
            var c = b[a],
            d = Ca(c);
            if (c.nodeType == 1 && d < J.scrollTop) return c
        } else for (a = 0; c = b[a++];) if (d = Ca(c), c.nodeType == 1 && d + S(c) > J.scrollTop + P) return c
    }
    function U(a) {
        a.touches && (a.preventDefault(), a = a.touches[0]);
        var b = a.clientY - K,
        b = Ha(Number(google.style.getComputedStyle(I, "margin-top")) + b);
        I.style.marginTop = b + "px";
        J.scrollTop = b * (J.scrollHeight - P) / (O - S(I));
        K = a.clientY
    }
    function Ha(a, b) {
        var c = b == f ? S(I) : b;
        return Math.max(0, Math.min(O - c, a))
    }
    function B(a, b) {
        if (Q) {
            var c = S(I),
            d = Aa(),
            c = [[I, "height", c, d], [document.getElementById("sbbb"), "marginTop", c - 4, d - 4]];
            if (!L) {
                for (var e = d = 0, j; j = J.childNodes[e++];) j.nodeType == 1 && (d += S(j));
                if (d > P) document.getElementById("sb").style.display = "block",
                c.push([document.getElementById("sb"), "opacity", 0, 1, google.fx.linear, ""]),
                L = !0
            }
            d = b ? 0: 1200;
            Fa(a, !1, d);
            google.fx.animate(d, c,
            function() {
                if (L) I.style.position = "absolute"
            })
        }
    }
    function V(a, b) {
        a.parentNode == I && (a = I);
        var c = 70 * (b ? 1: -1);
        Ia(a, c);
        for (var d = 0, e; e = a.childNodes[d++];) e.nodeType == 1 && Ia(e, c)
    }
    function Ia(a, b) {
        var c = a.style.backgroundPosition.match(/^-?\d+/),
        d = a.style.backgroundPosition.match(/\s+.*$/);
        a.style.backgroundPosition = parseInt(c, 10) + b + "px " + (d ? d: "")
    }
    function Ja() {
        var a = G,
        b = H,
        c = I,
        d = function() {
            M || (T(!0), Da(!0))
        };
        R ? google.listen(a, "touchstart", d) : google.listen(a, "mousedown", d);
        a = function() {
            M || (T(!0), Da())
        };
        R ? google.listen(b, "touchstart", a) : google.listen(b, "mousedown", a);
        R ? google.listen(c, "touchstart",
        function(a) {
            T(!0);
            K = a.touches[0].clientY;
            google.listen(document, "touchmove", U)
        }) : google.listen(c, "mousedown",
        function(a) {
            T(!0);
            K = a.clientY;
            google.listen(document, "mousemove", U)
        })
    }
    function qa(a) {
        G = document.getElementById("sbu");
        H = document.getElementById("sbd");
        I = document.getElementById("sbb");
        J = document.getElementById(a);
        if (!G || !H || !I || !J) return Q = !1;
        N = M = L = !1;
        z = [];
        A = [];
        P = Number(google.style.getComputedStyle(J, "height"));
        a = P - 34;
        document.getElementById("sbc").style.height = a + "px";
        O = a - 1;
        document.getElementById("sbbb").marginTop = a - 4 + "px";
        document.getElementById("sb").style.display = "none";
        for (var a = [G, H, I], b = 0, c; c = a[b++];) google.browser.product.IE ? (google.listen(c, "mouseover",
        function(a) {
            V(a.srcElement)
        }),
        google.listen(c, "mouseout",
        function(a) {
            V(a.srcElement, !0)
        }), c.b = function() {
            return ! 1
        }) : (google.listen(c, "mouseover",
        function(a) {
            V(a.target)
        }), google.listen(c, "mouseout",
        function(a) {
            V(a.target, !0)
        }), c.onmousedown = function() {
            return ! 1
        });
        Ja();
        return Q = !0
    }
    R ? (google.listen(document, "touchend",
    function() {
        document.removeEventListener("touchmove", U, !1);
        T(!1)
    }), google.dstr.push(function() {
        z = A = [];
        Q = !1
    })) : google.listen(document, "mouseup",
    function() {
        google.browser.product.IE ? document.detachEvent("onmousemove", U) : document.removeEventListener("mousemove", U, !1);
        T(!1)
    });
    google.rt || (google.rt = {});
    var Ka = -1,
    La = f;
    google.rt.timestampToString = f;
    function Ma(a, b) {
        for (var c = a.getElementsByTagName("div"), d = 0, e; e = c[d++];) if (e.className == "rtdelta") return b - parseInt(e.innerHTML, 10);
        return ! 1
    }
    function E() {
        return Math.round((new Date).getTime() / 1E3)
    }
    function ma(a, b, c) {
        a = b - a;
        return a < 86400 ? a < 55 ? c ? "secondi fa": ja.replace("1", a + "") : a < 115 ? "1 minuto fa": a < 3355 ? "1 minuti fa".replace("1", Math.floor(a / 60) + (a % 60 >= 55 ? 1: 0) + "") : a < 6900 ? "1 ora fa": "1 ore fa".replace("1", Math.floor(a / 3600) + (a % 3600 >= 3300 ? 1: 0) + "") : !1
    }
    function Na(a, b, c) {
        var d = google.rt.timestampToString;
        if (b && (b = d(b, c, a.className.indexOf("strm") >= 0))) a.innerHTML = b
    }
    function Oa(a) {
        for (var b = [], a = a.getElementsByTagName("span"), c = 0, d; d = a[c++];) d.className.match("rtd") && b.push(d);
        return b
    }
    function F(a, b, c) {
        for (var a = Oa(a), c = c || E(), d = 0, e; e = a[d]; d++) Na(e, b[d], c)
    }
    function za(a) {
        var b = w,
        c = E();
        return function() {
            var d;
            d = Oa(a);
            if (d = d.length > 0 ? d[0] : !1) {
                var e = Ma(d, c);
                e && (Na(d, e, c), b.unshift(e), ia && F(La, b, c))
            }
        }
    }
    function na(a) {
        var b = r,
        c = w;
        La = b;
        for (var b = Oa(b), a = a || E(), d = 0, e; e = b[d++];)(e = Ma(e, a)) && c.push(e)
    }
    function oa() {
        var a = r,
        b = w;
        Ka = window.setInterval(function() {
            F(a, b)
        },
        6E4);
        google.dstr.push(function() {
            window.clearInterval(Ka)
        })
    };
    google.rt.replayCallbacks = [];
    google.rt.pushReplayCallback = function(a) {
        google.rt.replayCallbacks.push(a)
    };
    function Pa() {
        google.rt.timestampToString = function(a) {
            return google.rt.formatTime(a, "FullDate")
        }
    }
    var Qa = google.History.client(function(a) {
        r.innerHTML = a.r;
        w = a.s;
        F(r, w, a.t)
    });
    google.rt.replayinit = function(a) {
        r = document.getElementById(a);
        w = [];
        Pa();
        r && (google.rt.pushReplayCallback(function() {
            na(f);
            F(r, w)
        }), window.setTimeout(function() {
            google.History.save(Qa, {
                r: r.innerHTML,
                s: w,
                t: E()
            })
        },
        100))
    };
    google.rtc = {};
    var Ra,
    Sa,
    W,
    X,
    Ta,
    Ua,
    Y,
    Va,
    Wa,
    Z,
    $,
    Xa;
    google.rtc.init = function(a, b) {
        var c;
        if (c = b)(Ra = document.getElementById(a)) ? (Sa = parseInt(Ra.innerHTML, 10), W = 0, Ua = "", Y = !1, Va = (new Date).getTime(), Z = Wa = 0, $ = !1, Ta = X = 0, c = !0) : c = !1;
        c && (ya(b), c = function() {
            Y = !0
        },
        google.listen(document, "keydown", c), google.listen(document, "mousemove", c), Ya(Za, 1))
    };
    function Ya(a, b) {
        Y && (Y = !1, Va = (new Date).getTime());
        if (! (Wa > 200 || Z > 3 || (new Date).getTime() > Va + 24E4)) {
            $a();
            var c = b;
            Z && (c = ua(Z));
            var d;
            $ || W != 0 ? d = function() {
                Ya(a, b)
            }: (X = 0, d = function() {
                a();
                Ya(a, b)
            });
            Xa = window.setTimeout(d, c * 1E3)
        }
    }
    function Za() {
        var a = google.xhr();
        a.open("GET", Ua);
        a.onreadystatechange = function() {
            a.readyState == 4 && (a.status == 200 ? (eval(a.responseText), Z = 0) : Z++);
            $ = !1
        };
        $ = !0;
        a.send(f)
    }
    function ya(a) {
        a.numUpdates && (X = a.numUpdates);
        a.nextRequest && (Ua = a.nextRequest)
    }
    function $a() {
        if (!$) {
            Wa++;
            W++;
            W >= 30 && (W -= 30);
            var a = Ta + X / 30,
            b = Math.round(a);
            Ta = a - b;
            Sa += b;
            Ra.innerHTML = Sa
        }
    }
    google.dstr.push(function() {
        window.clearTimeout(Xa)
    });
})();
 (function() {
    var e = !1;
    function h(a, c, b) {
        return [[c, "height", a ? b: 0, a ? 0: b], [c, "opacity", a ? 1: 0, a ? 0: 1, null, ""]]
    }
    function i(a) {
        if (!a) return null;
        var c = a.offsetHeight,
        b = google.style.getComputedStyle(a, "overflow", !0);
        a.style.overflow = "hidden";
        return {
            height: c,
            overflow: b
        }
    }
    function j(a, c, b) {
        c ? a.style.height = b.height + "px": a.style.removeAttribute && a.style.removeAttribute("filter");
        a.style.overflow = b.overflow
    }
    google.exportSymbol("google.srp.toggleModes",
    function() {
        if (!e) {
            e = !0;
            var a = document.getElementById("ms"),
            c = document.getElementById("hidden_modes"),
            b = document.getElementById("hmp"),
            d = google.style.hasClass(a, "open");
            a.className = "open";
            var k = i(c),
            f = i(b),
            g = h(d, c, k.height);
            f && (g = g.concat(h(d, b, f.height)));
            google.srp.updateLinksWithParam("prmdo", !d ? "1": "", google.srp.isSerpLink, google.srp.isSerpForm);
            google.fx.animate(227, g,
            function() {
                if (d) a.className = "";
                j(c, d, k);
                b && j(b, d, f);
                e = !1;
                google.msg.send(48)
            })
        }
    });
})();
 (function() {
    function f() {
        function b(a) {
            return {
                api: a,
                G: a.a,
                J: a.b,
                F: a.c,
                da: a.d,
                ea: a.e,
                aa: a.f,
                ba: a.g,
                $: a.h,
                Z: a.i,
                Y: a.j,
                ca: a.k,
                I: a.l,
                K: a.m,
                L: a.n,
                M: a.o,
                O: a.p,
                P: a.q,
                Q: a.r,
                N: a.s,
                W: a.t,
                B: a.u,
                ga: a.v
            }
        }
        var c = window.google.comm;
        return ! c ? null: {
            D: function(a, d) {
                var e = c.h(a, d);
                return b(e)
            },
            fa: function(a) {
                return b(a.api)
            },
            H: c.a,
            R: c.b,
            S: c.c,
            T: c.d,
            V: c.e,
            U: c.f,
            C: c.g,
            X: c.i,
            z: c.j
        }
    };
    var g = !1,
    h = function() {};
    function j(b, c, a) {
        var d = document.getElementById("set_location_section");
        if (b.innerHTML != "") d.style.height = d.offsetHeight - b.offsetHeight - 4 + "px";
        var e = d.offsetHeight,
        i = "";
        a && (i = "color:#c11;");
        b.innerHTML = '<div style="' + i + 'margin-top:3px">' + c + "</div>";
        b.style.display = "block";
        if (d.offsetHeight == e) d.style.height = d.offsetHeight + b.offsetHeight + 4 + "px"
    }
    function k() {
        var b = {
            q: google.nav.getQuery(),
            changed_loc: 1
        };
        google.nav.search(b, !0)
    }
    function l(b) {
        var c = document.getElementById("error_section"),
        a = google.xhr();
        a.onreadystatechange = function() {
            if (a.readyState == 4) if (a.status == 200 && !a.responseText) {
                c.innerHTML = "";
                try {
                    var b = f();
                    b && b.z()
                } catch(e) {
                    google.log("location_widget_make_uul_request", "&err=" + e + "&ei=" + google.kEI)
                }
                k()
            } else a.status == 200 && a.responseText ? a.responseText.match("\n") ? j(c, a.responseText.split("\n")[0], !0) : j(c, a.responseText, !1) : j(c, google.loc.m3, !0)
        };
        a.open("GET", "/uul?muul=4_18" + b + "&usg=" + encodeURIComponent(google.loc.s) +
        "&hl=" + google.kHL, !0);
        a.send(null)
    }
    var m = function() {
        google.log("location_widget_enable_autodetect", "&ei=" + google.kEI);
        l("&uulo=2")
    };
    function n(b) {
        if (!b) return null;
        var c = b.offsetHeight,
        a = google.style.getComputedStyle(b, "overflow", !0);
        b.style.overflow = "hidden";
        return {
            w: c,
            A: a
        }
    }
    google.loc = google.loc || {};
    google.loc.init = h;
    google.loc.enableAutoDetect = m;
    google.loc.submit = function() {
        var b = document.getElementById("lc-input").value;
        b ? (google.log("location_widget_change_location", "&ei=" + google.kEI), l("&luul=" + encodeURIComponent(b) + "&uulo=1")) : m();
        return ! 1
    };
    google.loc.f = function() {
        var b = document.getElementById("lc-input");
        if (b.value == google.loc.m4) b.value = "",
        b.style.color = "#000000"
    };
    google.loc.b = function() {
        var b = document.getElementById("lc-input");
        if (b.value == "") b.value = google.loc.m4,
        b.style.color = "#666666"
    };
    google.loc.toggleLocationChange = function() {
        if (!g) {
            g = !0;
            var b = document.getElementById("lc"),
            c = document.getElementById("set_location_section"),
            a = google.style.hasClass(b, "lco");
            b.className = "lco";
            var d = n(c);
            google.fx.animate(227, [[c, "height", a ? d.w: 0, a ? 0: d.w], [c, "opacity", a ? 1: 0, a ? 0: 1, null, ""]],
            function() {
                if (a) b.className = "";
                google.log("location_widget", "&open=" + (a ? "0": "1") + "&ei=" + google.kEI);
                a ? c.style.height = d.w + "px": c.style.removeAttribute && c.style.removeAttribute("filter");
                c.style.overflow = d.A;
                g = !1
            })
        }
    };
    google.loc.devloc = function() {
        var b = document.getElementById("error_section");
        google.devloc ? google.devloc.pnlic(k,
        function() {
            j(b, google.loc.m5, !0)
        }) : j(b, google.loc.m5, !0)
    };
    google.register(77, {
        init: h
    });
})();
 (function() {
    google.tbpr = {};
    var d = {},
    f = /\bl\b/,
    h = function(c) {
        return f.test(c.className)
    },
    i = function(c) {
        var b = "",
        a;
        for (a in d) d[a].style.display = "none";
        if (c && c.a >= 0) {
            b = c.a;
            if (d[b]) d[b].style.display = "block";
            b = "tbpr:idx=" + c.a
        }
        return b
    },
    j = function(c, b) {
        b == null && (b = {});
        b.a = c.b || -1;
        google.event.back.saveHistory("tbpr", b)
    };
    google.register(78, {
        init: function() {
            d = {};
            for (var c = document.getElementsByTagName("h3"), b = 0, a; a = c[b++];) if (a.className == "tbpr") {
                var g = Number(a.id.substr(5));
                for (d[g] = a; a && a.nodeName != "LI";) a = a.parentNode;
                if (a) {
                    a = a.getElementsByTagName("a");
                    for (var k = 0, e = void 0; e = a[k++];) if (h(e)) {
                        e.b = g;
                        break
                    }
                }
            }
            google.event.back.register(h, j, i, "tbpr")
        }
    });
})();
 (function() {
    var d = /^\/(search|images)\?/;
    function e(a) {
        var b = "inner" + a,
        c = "client" + a;
        if (google.browser.product.ANDROID_TABLET && google.browser.engine.WEBKIT) return window.screen[a.toLowerCase()];
        else if (window[b]) return window[b];
        else if (document.documentElement && document.documentElement[c]) return document.documentElement[c];
        return 0
    }
    function f() {
        g("biw", e("Width"));
        g("bih", e("Height"))
    }
    function g(a, b) {
        for (var c = document.getElementsByName(a), l = 0, h; h = c[l++];) h.value = b
    }
    function i(a) {
        var b = e("Height"),
        a = j(a, "biw", e("Width"));
        return a = j(a, "bih", b)
    }
    function k(a) {
        if (!google.j || !google.j.init) {
            a = a || window.event;
            for (a = a.target || a.srcElement; a && a.tagName != "A";) a = a.parentNode;
            if (a && a.href) {
                var b = a.getAttribute("href", 2);
                if (d.test(b)) a.href = i(b)
            }
        }
    }
    function j(a, b, c) {
        return a.replace(RegExp("([?&#])" + b + "=([^&#]*)&?", "i"), "$1").replace(/&*$/, "&" + b + "=" + c)
    }
    google.register(83, {
        init: function() {
            if (!google.Toolbelt || !google.Toolbelt.get || !google.Toolbelt.get("isch")) f(),
            google.listen(window, "resize", f),
            google.cds || (google.cds = {}),
            google.cds.rs = f;
            google.msg.listen(51, i);
            google.listen(document, "click", k)
        },
        dispose: function() {
            google.unlisten(window, "resize", f);
            google.unlisten(document, "click", k);
            google.msg.unlisten(51, i)
        }
    });
})();
 (function() {
    var e = null;
    google.LU = {};
    google.register(84, {
        init: function(a) {
            google.LU.u = a.no_tt;
            document.getElementById("rhs_map") && (google.browser.engine.IE && google.browser.compareVersions("7", google.browser.product.version) == 0 || google.browser.product.IPAD || document.getElementById("tbt5") || j());
            k = !1;
            if (google.LU.fmap_url_delta && (l = document.getElementById("lu_map"))) {
                for (m = l; m && m.tagName != "A";) m = m.parentNode;
                n = document.getElementById("rhs_map");
                o = (a = document.getElementById("center_col")) && a.parentNode || document.getElementById("ires");
                if (m &&
                o && (p = m.href, q = p.search(/&iwloc=|&cid=0,0,/) != -1, a = l, a.tagName == "IMG" ? a = a.src: (a = /url\(([\'\"]?)(.*)\1\)/.exec(a.style.background), a = !a || a.length < 3 ? "": a[2]), a)) {
                    var b = a.indexOf("data=") + 5,
                    c = a.indexOf(",") + 1;
                    r = a.substring(0, c);
                    s = a.substring(0, b) + google.LU.fmap_url_delta + ",";
                    t = 0;
                    u = {
                        id: t++,
                        token: a.substring(c),
                        featuresCallback: e
                    };
                    google.LU.u || (v = new google.LU.g(!google.style.isRtl()));
                    w = {
                        x: 0,
                        y: 0
                    };
                    x = google.util.rateLimitFunction(e, aa, 100, !0);
                    u.featuresCallback = ba;
                    y = [u];
                    z = new google.LU.w(r, s, "0", [u.token],
                    o, !0);
                    k = !!z;
                    A["0"] = z;
                    z.key = "0";
                    google.listen(l, "mousemove", C);
                    google.listen(window, "scroll", E);
                    google.listen(window, "pagehide", F);
                    google.listen(l, "mouseout", G)
                }
            }
        },
        dispose: function() {
            l && (google.unlisten(l, "mousemove", C), google.unlisten(window, "scroll", E), google.unlisten(window, "pagehide", F), google.unlisten(l, "mouseout", G));
            n = o = m = l = e;
            p = "";
            q = !1;
            z = e;
            y.length = 0;
            H.length = 0;
            A = {};
            u = e;
            t = 0;
            k = !1;
            if (v) {
                var a = v;
                a.d && a.d.parentElement && a.d.parentElement.removeChild(a.d);
                v = e
            }
            x = w = e;
            I && (google.unlisten(window, "scroll",
            J), google.browser.engine.IE || google.unlisten(window, "resize", K), L && window.clearInterval(L), I = e);
            delete google.LU.u
        }
    });
    var l,
    m,
    o,
    n,
    p,
    q,
    r,
    s,
    M,
    z,
    y = [],
    H = [],
    A = {},
    u,
    t = 0,
    v,
    w,
    k = !1,
    x = e;
    function aa() {
        if (z && z.k()) {
            M = l.offsetHeight;
            var a;
            if (google.browser.engine.IE) {
                a = l.getBoundingClientRect();
                var b = l.ownerDocument;
                a.left -= b.documentElement.clientLeft + b.body.clientLeft;
                a.top -= b.documentElement.clientTop + b.body.clientTop;
                a = {
                    x: w.x - a.left,
                    y: w.y - a.top
                }
            } else b = (a = n && n.style.position == "fixed") ? 0: document.body.scrollTop + document.documentElement.scrollTop,
            a = {
                x: w.x + (a ? 0: document.body.scrollLeft + document.documentElement.scrollLeft) - google.style.getPageOffsetLeft(l),
                y: w.y + b - google.style.getPageOffsetTop(l)
            };
            b = z.h;
            b = (b.j[3] - b.j[1]) / M;
            b = {
                x: a.x * b,
                y: a.y * b
            };
            a = b.x;
            for (var b = b.y, c = z.h, d = [], f = 0, i; i = c.v[f]; ++f) i.contains(a, b) && d.push(i);
            m.href = N(d)
        }
    }
    function C(a) {
        a = a || window.event;
        w.x = a.clientX;
        w.y = a.clientY;
        x()
    }
    function E() {
        x()
    }
    function G() {
        w.x = w.y = 0;
        m.href = N([])
    }
    function F() {
        w.x = w.y = 0;
        O(v)
    }
    function N(a) {
        var f;
        for (var b = p, c = 0, d; d = y[c++];)(f = (d = d.featuresCallback) && d(a), d = f) && (b = d);
        return b
    }
    function ba(a) {
        m.style.cursor = a.length == 0 ? "default": "pointer";
        for (var b = e, c = 0, d; d = a[c++];) {
            if (d.id == "0") return e;
            d.z && (b = d)
        }
        a = b && [b] || a;
        if (!google.LU.u) b = a,
        c = {
            x: 6 * (google.style.isRtl() ? 1: -1),
            y: 12
        },
        ca(b, {
            x: w.x + c.x,
            y: w.y + c.y
        }),
        v.b.length && (a = v.b);
        if (a.length == 0 || q) a = p;
        else {
            b = [];
            for (c = 0; d = a[c++];) b.push(d.id);
            a = b.length ? p + "&iwloc=cids:" + b.join(",") : e
        }
        return a
    }
    google.LU.addMapConfig = function(a) {
        if (!k) return ! 1;
        a.id || (a.id = t++);
        y.push(a);
        P();
        return ! 0
    };
    google.LU.replaceMapConfig = function(a) {
        if (!k || !a.token) return ! 1;
        a.id || (a.id = t++);
        H.push(y);
        y = [a];
        P();
        return ! 0
    };
    google.LU.deleteMapConfig = function(a) {
        if (a.id != "0") {
            for (var b = 0; b < y.length; ++b) y[b].id == a.id && y.splice(b, 1);
            y.length == 0 && (y = H.pop());
            P()
        }
    };
    function P() {
        for (var a = [], b = 0, c; c = y[b++];) c.token && a.push(c);
        for (var d = [], f = [], b = 0; c = a[b++];) d.push(c.id),
        f.push(c.token);
        a = d.join("_");
        b = A[a];
        b || (b = new google.LU.w(r, s, a, f, o, !1), A[a] = b);
        b != z && (da(b), z = b)
    };
    google.LU.w = function(a, b, c, d, f, i) {
        this.A = 0;
        this.h = e;
        d = d.join(",");
        this.I = a + d;
        var g = "loadFeaturemap_" + google.kEI + "_" + c,
        h = this;
        google.LU[g] = function(a) {
            delete google.LU[g];
            h.i && (h.i.parentNode.removeChild(h.i), delete h.i);
            h.h = new google.LU.H(a);
            google.log("lu_featuremap", google.time() - h.A + "")
        };
        a = [b, d, "&callback=google.LU.", g].join("");
        i ? ea(this, a, f) : this.i = Q(this, a)
    };
    var da = function(a) {
        var b = l,
        c = a.I,
        d = b.cloneNode(!0);
        google.dom.set(d, "position", "absolute");
        d.onload = function() {
            google.dom.insert(d, b);
            google.fx.animate(100, [[d, "opacity", 0, 1, e, ""]],
            function() {
                b.src = c;
                google.dom.remove(d)
            })
        };
        d.src = c
    },
    Q = function(a, b) {
        a.A = google.time();
        var c = document.createElement("SCRIPT");
        c.src = b;
        google.dom.append(c);
        return c
    },
    ea = function(a, b, c) {
        c.B = !0;
        c.n = function() {
            if (c.B) c.B = !1,
            google.unlisten(c, "mouseover", c.n),
            google.unlisten(c, "mousemove", c.n),
            a.i = Q(a, b)
        };
        google.listen(c, "mouseover",
        c.n);
        google.listen(c, "mousemove", c.n)
    };
    google.LU.w.prototype.k = function() {
        return !! this.h && this.h.k
    };
    google.LU.Feature = function(a) {
        this.m = a.a;
        this.e = a.bb;
        this.id = a.id;
        var b = {};
        if ("c" in a) try {
            b = eval("(0," + a.c + ")")
        } catch(c) {}
        if (b && b["9"] && google.LU.fmap_xc) {
            var a = google.LU.fmap_xc[b["9"].index],
            d;
            for (d in a) b[d] = a[d]
        }
        this.extendedContent = b;
        this.z = !(!b || !(b["9"] && b["9"].index.substr(0, 1) == "r"))
    };
    google.LU.Feature.prototype.z = !1;
    google.LU.Feature.prototype.height = function() {
        return this.e[3] - this.e[1] + 1
    };
    google.LU.Feature.prototype.width = function() {
        return this.e[2] - this.e[0] + 1
    };
    google.LU.Feature.prototype.top = function() {
        return this.m[1] - this.height() + 1
    };
    google.LU.Feature.prototype.left = function() {
        return this.m[0] + this.e[0] + 1
    };
    google.LU.Feature.prototype.contains = function(a, b) {
        var c = a - this.m[0],
        d = b - this.m[1];
        return c >= this.e[0] && d >= this.e[1] && c <= this.e[2] && d <= this.e[3]
    };
    google.LU.H = function(a) {
        this.j = e;
        this.v = [];
        this.k = !1;
        var b;
        if (a) {
            b = 0;
            for (var c; b < a.length; ++b) if (c = a[b].features) for (var d = 0, f; f = c[d]; ++d) this.v.push(new google.LU.Feature(f));
            b = this.v.length > 0
        } else b = !1;
        if (b && (this.j = a[0].rectangle) && this.j.length == 4) this.k = !0
    };
    google.LU.g = function(a) {
        this.s = 0;
        this.b = [];
        this.d = document.createElement("div");
        var b = this.d.style;
        b.position = "fixed";
        b.WebkitTransitionProperty = "left, top";
        b.O = ".1s, .1s";
        b.P = "left, top";
        b.WebkitTransitionDuration = ".1s, .1s";
        this.p = document.createElement("div");
        b = this.p.style;
        b.position = "absolute";
        b.zIndex = 110;
        b.border = "1px solid #999";
        b.padding = "3px 6px";
        b.lineHeight = "1.2";
        b.fontSize = "85%";
        b.backgroundColor = "#ffffd5";
        b.whiteSpace = "nowrap";
        b.WebkitBoxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        b.N = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        a ? b.right = 0: b.left = 0;
        this.d.appendChild(this.p);
        O(this);
        google.dom.append(this.d)
    };
    google.LU.g.F = 5;
    google.LU.g.G = 200;
    var ca = function(a, b) {
        var c = v;
        fa(c, a) && (c.s++, setTimeout(function() {
            c.s--;
            if (c.s == 0) if (c.b.length) {
                for (var a = [], f = 0, i; f < google.LU.g.F && (i = c.b[f++]);) {
                    var g = R(i);
                    if (g.title) {
                        c.b.length != 1 && a.push('<div style="min-height: 16px">');
                        a.push("<b>", g.title, "</b> ");
                        var h = g.star_rating,
                        g = g.review_count,
                        B = a;
                        if (! (typeof h == "undefined" || typeof g == "undefined")) {
                            B.push('<div style="display: inline-block; vertical-align: -2px">');
                            for (var Z = 0; Z < 5; ++Z) {
                                var D;
                                h > 0.75 ? (D = "rsw-starred", h -= 1) : h > 0.25 ? (D = "rsw-half-starred",
                                h -= 0.5) : D = "rsw-unstarred";
                                B.push('<div style="float: none; display: inline-block" class="', D, '"></div>')
                            }
                            B.push("</div>");
                            B.push("<span dir=", google.style.isRtl() ? "dir=rtl": "", "> (", g, ") </span>")
                        }
                        c.b.length != 1 && a.push("</div>")
                    }
                }
                c.b.length == 1 && (f = (g = R(c.b[0])) && g.snippet, i = g && g.snippet_attribution, f && i && (a.push('<div style="min-width: 150px; white-space: normal">', f, "</div>"), a.push('<div style="color: #666">', i, "</div>")));
                c.p.innerHTML = a.join("");
                c.d.style.left = b.x + "px";
                c.d.style.top = b.y + "px";
                c.d.style.display = ""
            } else O(c)
        },
        google.LU.g.G))
    };
    function R(a) {
        return a.extendedContent && a.extendedContent["1"]
    }
    function S(a, b) {
        for (var c = 0, d; d = b[c++];) if (d.id == a) return ! 0;
        return ! 1
    }
    var fa = function(a, b) {
        for (var c = !1, d = 0, f; f = a.b[d];) S(f.id, b) ? d++:(a.b.splice(d, 1), c = !0);
        for (var d = 0, i; i = b[d++];) if (!S(i.id, a.b)) {
            f = a;
            var g = R(i);
            if (g) {
                if (typeof g.star_rating == "undefined") f.b.push(i);
                else {
                    for (var h = void 0, h = 0; h < f.b.length; ++h) if ((g = R(f.b[h])) && typeof g.star_rating == "undefined") break;
                    f.b.splice(h, 0, i)
                }
                f = !0
            } else f = !1;
            f && (c = !0)
        }
        return c
    },
    O = function(a) {
        a.d.style.display = "none"
    };
    var T,
    U,
    V = !0,
    I,
    L,
    ga = ["left", "margin", "paddingTop", "position", "top", "width", "zIndex"],
    W = {},
    X = {};
    function Y(a) {
        return google.browser.engine.IE ? document.documentElement["client" + a] : window["inner" + a]
    }
    function ha() {
        if (I) for (var a in W) I.style[a] = W[a]
    }
    function ia() {
        var a = document.getElementById("rhs_map-placeholder");
        a && a.parentNode.removeChild(a)
    }
    function J() {
        if (V && !((document.body.scrollLeft || document.documentElement.scrollLeft) > 0)) {
            var a = document.body.scrollTop + document.documentElement.scrollTop;
            if (!U && a >= T) {
                if (I) {
                    X.Q = google.style.getPageOffsetLeft(I);
                    X.K = google.style.getWidth(I);
                    X.M = I.offsetWidth;
                    X.L = I.offsetHeight;
                    for (var a = 0, b; b = ga[a++];) W[b] = I.style[b]
                }
                if (I) {
                    if (google.style.getComputedStyle(I, "position", !0) != "absolute") a = document.createElement("div"),
                    a.id = I.id + "-placeholder",
                    google.browser.engine.IE ? a.style.styleFloat = google.style.getComputedStyle(I,
                    "styleFloat", !0) : a.style.cssFloat = google.style.getComputedStyle(I, "float", !0),
                    a.style.width = X.M + "px",
                    a.style.height = X.L + "px",
                    a.style.marginTop = google.style.getComputedStyle(I, "margin-top", !0),
                    a.style.marginBottom = google.style.getComputedStyle(I, "margin-bottom", !0),
                    a.style.marginLeft = google.style.getComputedStyle(I, "margin-left", !0),
                    a.style.marginRight = google.style.getComputedStyle(I, "margin-right", !0),
                    I.parentNode.insertBefore(a, I.nextSibling);
                    I.style.margin = 0;
                    I.style.zIndex = 109;
                    I.style.width = X.K +
                    "px";
                    I.style.top = 0;
                    I.style.position = "fixed";
                    I.style.paddingTop = "5px"
                }
                U = !0
            } else U && a < T && (ia(), ha(), U = !1)
        }
    }
    function ja() {
        if (!I) return ! 1;
        var a = document.getElementById("rhs_block");
        if (!a) return ! 1;
        var b = a.getElementsByTagName("li");
        if (!b || b.length == 0) return ! 1;
        var a = Y("Height"),
        c = google.style.getHeight(I),
        b = 2 * (b[0].offsetHeight + 12) + c + google.style.getPageOffsetTop(I);
        return a < b
    }
    function K() {
        U && (ia(), ha(), U = !1);
        ja() ? V = !1: (V = !0, T = google.style.getPageOffsetTop(document.getElementById("leftnav")), J())
    }
    var $;
    function ka() {
        if (I) this.C = google.style.getHeight(I),
        this.o = Y("Height"),
        this.D = Y("Width"),
        this.J = function() {
            var a = $;
            return google.browser.engine.IE ? this.C == a.C && this.o == a.o && this.D == a.D: this.o == a.o
        }
    }
    function la() {
        if (I) {
            var a = new ka;
            a.J() || (K(), $ = a)
        }
    }
    function j() {
        google.listen && google.style.getHeight ? (I = document.getElementById("rhs_map"), W = {},
        X = {},
        $ = new ka, google.listen(window, "scroll", J), google.browser.engine.IE ? L = window.setInterval(la, 200) : google.listen(window, "resize", K), K()) : window.setTimeout(function() {
            j()
        },
        100)
    };
})();
 (function() {
    var h = null;
    var aa,
    k = function(a) {
        var b = ba(a),
        c = aa[b];
        if (!c) c = new ca(a),
        c.K = b,
        aa[b] = c;
        return c
    },
    ca = function(a, b) {
        this.result = a;
        this.e = b || 0;
        this.source = this.a = this.data = h;
        this.u = !1
    },
    da = new ca(h, 1),
    ea = function(a) {
        return a.e == 0 || a.e == 4
    },
    l = function(a) {
        return a.e == 1 || a.e == 4
    },
    n = function(a, b, c) {
        a.e = b;
        a.data = c || a.data
    };
    var fa = function() {
        this.t = {
            start: google.time()
        }
    },
    ga = ["e", "ei", "expi"],
    ha = function(a) {
        var b = k(a);
        if (b && b.a) {
            var c = b.a;
            if (c.name && !b.u) {
                b.u = !0;
                c.t.ol = google.time();
                for (var b = {},
                d = 0, e; e = ga[d++];) e in google.kCSI && (b[e] = google.kCSI[e]);
                a = o(a);
                if (a == 1 || a == 2) c.name = "ads,ads_" + c.name;
                a = google.sn;
                google.sn = "vsnip";
                try {
                    google.report && google.report(c, b)
                } finally {
                    google.sn = a
                }
            }
        }
    };
    window.L = function() {};
    var ia = function(a, b, c) {
        this.i = a;
        this.A = b;
        this.z = c;
        this.H = !1;
        this.B = this.j = this.I = h
    },
    ja = function(a) {
        this.p = a;
        this.k = 0;
        this.c = {};
        this.d = []
    },
    ma = function(a) {
        var b = q; ! b.c[a.i] && ka(b, a) < 0 && (b.d.push(a), la(b))
    },
    la = function(a) {
        for (; a.k < a.p && a.d.length > 0;) na(a, a.d.shift())
    },
    na = function(a, b) {
        if (!a.c[b.i]) {
            var c = ka(a, b);
            c >= 0 && a.d.splice(c, 1);
            b.H ? oa(a, b) : pa(b);
            a.c[b.i] = b;
            a.k++
        }
    },
    oa = function(a, b) {
        var c = google.dom.create("img");
        c.onload = function() {
            var c = b.i,
            e = a.c[c];
            if (e) {
                var f = {};
                f.img = e.B;
                f.url = c;
                e.I(f)
            }
        };
        c.onerror =
        b.z;
        c.src = b.A;
        b.B = c
    },
    pa = function(a) {
        var b = google.dom.create("script");
        b.src = a.A;
        b.onerror = a.z;
        window.setTimeout(function() {
            google.dom.append(b)
        },
        0);
        a.j = b
    },
    ka = function(a, b) {
        for (var c = 0; c < a.d.length; c++) if (a.d[c].i == b.i) return c;
        return - 1
    },
    ra = function(a) {
        var b = q,
        c = b.c[a];
        c && (c.j && qa(c.j), delete b.c[a], b.k--, la(b))
    },
    qa = function(a) {
        window.setTimeout(function() {
            try {
                google.dom.remove(a),
                a.src = "about:blank"
            } catch(b) {}
        },
        0)
    };
    ja.prototype.clear = function() {
        for (var a in this.c) {
            var b = this.c[a];
            b.j && qa(b.j)
        }
        this.p = this.p;
        this.k = 0;
        this.c = {};
        this.d = []
    };
    var sa = function(a) {
        this.type = a;
        this.o = void 0
    },
    ta = function(a, b) {
        this.x = a || 0;
        this.y = b || 0
    },
    ua = function(a, b, c) {
        c.push("x:" + (ea(b) && !l(b) ? "w": l(b) ? ea(b) ? "y": "np": "p")); (google.style.hasClass(a, "vsta") || google.style.hasClass(a, "vsra")) && c.push("ad")
    },
    va = function(a, b, c) {
        google.log(c || "", (b || "") + "&oi=vsnip&ved=" + a + "&ei=" + google.kEI)
    },
    xa = function(a) {
        var b = wa;
        b && b != document && (b = b.getAttribute("cved")) && va(b, a, "vsvprev")
    },
    ya = function(a, b) {
        var c = {};
        b && b.hasAttribute("pved") && (c.ved = b.getAttribute("pved"));
        google.ml(a,
        !1, c)
    };
    var o = function(a) {
        if (a.hasAttribute("vidx")) return 3;
        else if (google.style.hasClass(a, "vsta")) return 1;
        else if (google.style.hasClass(a, "vsra")) return 2;
        return 0
    },
    za = /^\/url.*[?&]url=([^&]+)/,
    Aa = /^\/url.*[?&]q=([^&]+)/,
    Ba = /(?:(?:\/aclk)|(?:\/d\/AdPreview\/adclick.html)).*[?&]adurl=([^&]+)/,
    ba = function(a) {
        if (a.hasAttribute("rawurl")) return a.getAttribute("rawurl");
        var b = "",
        b = o(a);
        if (b == 1 || b == 2) var b = (b = Ca(a)) ? b.getAttribute("href") : "",
        c = b.match(Ba);
        else b = "",
        b = a.hasAttribute("url") ? a.getAttribute("url") :
        (b = Da(a)) ? b.getAttribute("href") : "",
        c = b.match(za) || b.match(Aa);
        c && (b = decodeURIComponent(c[1]));
        a.setAttribute("rawurl", b);
        return b
    },
    Da = function(a) {
        for (var b = google.dom.getAll("a.l", a), c = 0, d; d = b[c]; c++) if (Ea(d)) return d;
        ya(Error("(visual-snippets) No result link"), a);
        return h
    },
    Ca = function(a) {
        var b = google.dom.get("h3", a);
        if (b && (b = google.dom.get("a", b), Ea(b))) return b;
        ya(Error("(visual-snippets) No ad link"), a);
        return h
    },
    Ea = function(a) {
        if (!a) return ! 1;
        a = a.getAttribute("href");
        return a != h && a.length > 0 &&
        a != "#"
    };
    var Fa = function() {
        this.n = "web-vs";
        try {
            var a = window.sessionStorage;
            if (a) {
                var b = google.time().toString();
                a.setItem(this.n + "-" + b, b);
                a.removeItem(this.n + "-" + b);
                this.F = !0
            }
        } catch(c) {}
        this.G = {}
    },
    Ga = function(a) {
        var b = s,
        a = (b.F ? window.sessionStorage: b.G)[b.n + "-" + a];
        return typeof a == "undefined" || a === h ? a: typeof a.value == "string" ? a.value: a
    },
    Ha = function(a, b, c) { (a.F ? window.sessionStorage: a.G)[a.n + "-" + b] = c
    };
    var t = function(a) {
        return a ? google.style.getComputedStyle(a, "visibility", !0) == "visible": !1
    },
    u = function(a, b) {
        google.dom.set(a, "visibility", b ? "visible": "hidden")
    },
    Ia = function(a) {
        return a.clientX == h || a.clientY == h ? h: new ta(a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.clientY + document.body.scrollTop + document.documentElement.scrollTop)
    };
    google.video = {};
    var v,
    w,
    x,
    y,
    Ja,
    z,
    A,
    B,
    Ka,
    C,
    La,
    D,
    Ma,
    wa,
    E,
    Na,
    Oa,
    Pa,
    Qa,
    Ra,
    F,
    Sa = 0,
    Ta = 0,
    Va = function(a) {
        for (var b in x) b && !Ja[b] && Ua(b, a)
    },
    Wa = function() {
        C && (window.clearTimeout(C), C = 0);
        for (var a in x) if (!z[a]) {
            z[a] = !0;
            var b = a;
            Ka++; (b = G(b)) && b.showThumbnail()
        }
    },
    Xa = function(a) {
        return a.substring(0, a.length - 1) + (Number(a.charAt(a.length - 1)) + 1) % y
    },
    H = function(a) {
        var b = w;
        return a != h && a.hasAttribute("vidx") && !!b[a.getAttribute("vidx")] && !!b[a.getAttribute("vidx")].video
    },
    Ya = function(a, b) {
        return a.replace(/%\((\w+)\)[ds]/g,
        function(a,
        d) {
            return b[d]
        })
    },
    $a = function() {
        var a = document.getElementById("vsvsndv"),
        b;
        Za() == 1 ? (google.style.addClass(a, "vsvsndon"), google.style.removeClass(a, "vsvsndoff"), b = v.msgs.mute) : (google.style.addClass(a, "vsvsndoff"), google.style.removeClass(a, "vsvsndon"), b = v.msgs.unmute);
        a.setAttribute("title", b)
    },
    cb = function(a) { ! Na[a] && Ma && (ab(Ma), Ma = h);
        bb(a, !0)
    },
    db = function() {
        var a = document.getElementById("vsvpc");
        if (a) a.innerHTML = ""
    },
    eb = function(a) {
        a = a.getAttribute("vidx");
        return w[a] ? w[a].numClips: 0
    },
    fb = function() {
        return !! w[E].stitchedThumbnailUrl
    },
    ib = function() {
        window.setTimeout(function() {
            I.hasAttribute("vidx") || db()
        },
        0);
        gb();
        hb()
    },
    hb = function() {
        var a = 0,
        b = 0,
        c = [],
        d = 0,
        e;
        for (e in x) Oa[e] ? b++:a++,
        c[d++] = Pa[e];
        a = E + "&ac=c" + ("&md=" + (v.vp.videoMode ? "v": "w")) + "&cc=" + b + "&cn=" + a + "&ct=" + y + "&au=" + (Za() == 1 ? "1": "0") + "&top=" + Sa + "&tm=" + (google.time() - Ta);
        Qa && (a += "&an=" + Qa);
        Ra && (a += "&af=" + Ra);
        b = ["to", "tt", "th", "tf"];
        for (d = 0; e = c[d]; d++) e && (a += "&" + b[d] + "=" + e);
        xa(a)
    },
    Ua = function(a, b) {
        var c = G(a);
        c && c.loadThumbnail(b)
    },
    bb = function(a, b) {
        var c = G(a);
        c && (b && (D = a), c.playVideo(b))
    },
    ab = function(a) {
        var b = G(a);
        b && (a == D && (D = h), b.stopVideo())
    },
    gb = function() {
        var a = G(D);
        a && a.sendClipEndStat()
    },
    G = function(a) {
        if (!x[a]) return h;
        var b = document.getElementById("playerObjId" + a);
        return b && b.playVideo ? b: (b = document.getElementById("playerEmbId" + a)) && b.playVideo ? b: h
    };
    google.vsvp = {
        ts: function() {
            var a = Za() == 0 ? 1: 0,
            b = F;
            a == 0 ? (b.g = 0, jb(0)) : kb(b);
            $a();
            a == 1 ? (a = 100, Qa++) : (Ra++, a = 0); (b = G(D)) && b.setSound(a)
        }
    };
    var lb = function() {
        this.g = 0;
        var a = v;
        if (a.vp.soundStateExpTime && (a = parseInt(a.vp.soundStateExpTime, 10), !isNaN(a))) this.g = a
    },
    Za = function() {
        var a = F;
        return a.g ? Math.round(google.time() / 6E4) >= a.g ? (a.g = 0, jb(0), 0) : (kb(a), 1) : 0
    },
    kb = function(a) {
        var b = Math.round(google.time() / 6E4) + 60;
        if (a.g != b) a.g = b,
        jb(b)
    },
    jb = function(a) {
        var b = v;
        if (b.vp.setUserPrefsUrl && (a = Ya(b.vp.setUserPrefsUrl, {
            exptime: a
        }), b = google.xhr())) b.open("GET", a),
        b.onreadystatechange = function() {},
        b.send(h)
    };
    google.video.fpInitComplete = function(a) {
        La++;
        x[a] = !0;
        var b = fb();
        a.charAt(a.length - 1) == "0" ? (cb(a), Ua(a, b)) : b ? A != h && Ua(a, A == 0) : Ua(a, !1)
    };
    google.video.fpThumbnailLoadComplete = function(a, b, c) {
        c ? (Ja[a] = !0, B++, !z[a] && B == y ? Wa() : b && B == 1 && (Va(b), A = 0)) : b && B == 0 && (Va(!1), A = 1); ! z[a] && !C && (C = setTimeout(function() {
            Ka != La && Wa()
        },
        1250))
    };
    google.video.fpFlashStatus = function(a, b) {
        a.indexOf("Play.Stop") >= 0 && b == D && (Oa[b] = !0, D = h, cb(Xa(b)))
    };
    google.video.fpOnMouseOver = function(a) {
        a != D && (ab(D), cb(a))
    };
    google.video.fpBytesReceived = function(a) {
        Na[a] = !0;
        for (var b = 0; b < y - 1; b++) if (a = Xa(a), !Na[a]) {
            bb(a, !1);
            break
        }
    };
    google.video.fpGetVolume = function() {
        var a = {};
        a.volume = Za() == 1 ? 100: 0;
        return a
    };
    google.video.fpGen204 = function(a) {
        a += "&md=" + (v.vp.videoMode ? "v": "w");
        xa(a)
    };
    google.video.fpDBMsg = function() {};
    google.video.fpPreviewNotAvailable = function() {};
    google.video.fpStat = function(a, b, c) {
        b == 1 && (Pa[a] || (Pa[a] = c))
    };
    var s,
    J,
    K,
    L,
    mb,
    nb,
    ob,
    M,
    pb,
    qb,
    I,
    rb,
    N,
    sb,
    O,
    q,
    tb = {
        kfe: {
            maxPrefetchConnections: 2,
            kfeHost: ""
        },
        time: {
            hoverOpen: 125,
            hoverClose: 300,
            prefetchOnLoad: 3E3,
            hoverModeTimeout: 60
        },
        logging: {
            csiFraction: 0.05
        },
        knav: {
            sendMsg: !1
        }
    },
    ub = 0,
    P = h,
    Q = h,
    vb = h,
    R = !1,
    wb = 150,
    S = -1,
    xb = !1,
    T = -Number.MAX_VALUE,
    yb = -Number.MAX_VALUE,
    U = !1,
    zb = /^t[123]map$/,
    Ab = /^t[123][ABCD]image$/,
    Cb = function(a) {
        a == V && t(J) || (window.clearTimeout(N), N = window.setTimeout(function() {
            rb == a && (W(), Bb(a, new sa(3)))
        },
        M.time.hoverOpen))
    },
    Db = function(a, b, c) {
        if (a == V && t(J)) X(b ?
        1: 2);
        else if (a.hasAttribute("sig")) {
            var d = h;
            if (a && a.getAttribute("pved") && (d = new sa(b ? 1: 2), c && (c.x -= google.style.getPageOffsetStart(a), c.y -= google.style.getPageOffsetTop(a), c.x >= 0 && c.x < a.offsetWidth && c.y >= 0 && c.y < a.offsetHeight))) d.o = c;
            Bb(a, d);
            Y(!0)
        }
    },
    Fb = function(a) {
        if (!J) return ! 1;
        if (!U) return ! 0; (a = Eb(a)) && !(a == V && t(J)) ? (W(), Bb(a, new sa(4))) : a || W();
        google.style.removeClass(L, "vsh");
        ub = google.time();
        return ! 0
    },
    Gb = function(a, b) {
        if (!J) return ! 1;
        if (!Eb(a)) return ! 0;
        b ? (Y(!0), Fb(a)) : X(4);
        return ! 0
    },
    Eb = function(a) {
        if (!a) return h;
        for (var a = a.childNodes, b = 0, c; c = a[b++];) if (c.nodeName == "DIV" && google.style.hasClass(c, "vsc")) return c;
        return h
    },
    Ib = function(a, b) {
        var c = document.getElementById("center_col");
        if (c && c.parentNode && google.style.hasClass(c.parentNode, "fade")) return h;
        c = google.util.eventTarget(a);
        if (!b && google.util.getSelection()) return h;
        for (; c && c != document.body && c != J && !Hb(c);) {
            var d = c.nodeName,
            e;
            if (e = !b) if (! (e = d == "A")) if (! (e = d == "BUTTON" && c.className != "vspib")) if (! (e = d == "INPUT")) {
                if (! (d = d == "DIV" && c.className == "mbi")) d = c.id,
                d = zb.test(d) || Ab.test(d);
                e = d
            }
            if (e) return h;
            c = c.parentNode
        }
        return c
    },
    Bb = function(a, b) {
        var c = new fa;
        I = a;
        var d = k(a);
        H(a) ? (d.data = w[a.getAttribute("vidx")], Jb(a, d, b)) : a.hasAttribute("sig") ? Kb(d.data) && !d.data.retry ? (d.source = b, d.a = c, c.name = "pf", Jb(a, d, b)) : (Lb(a, !0, !0, c, b), window.clearTimeout(O), O = window.setTimeout(function() {
            Mb(a)
        },
        M.time.loading)) : Jb(a, da, b);
        Nb(a);
        M.knav.sendMsg && google.style.hasClass(a.parentNode, "knavi") && google.msg.send(36, [a, !1])
    },
    Nb = function(a) {
        if (M.kfe.v && !(M.kfe.v <= 0)) {
            q.d = [];
            window.clearTimeout(sb);
            var b = h;
            b = a != h && o(a) == 2 ? nb = nb || google.dom.getAll("div.vsc", document.getElementById("rhs")) : mb = mb || google.dom.getAll("div.vsc", document.getElementById("center_col"));
            var c = -1;
            if (a) if (Array.prototype.indexOf) c = b.indexOf(a);
            else for (var c = 0, d; (d = b[c]) && d != a; c++);
            for (a = 1; a <= M.kfe.v; a++) Ob(b[c + a], !0),
            Ob(b[c - a], !0)
        }
    },
    Ob = function(a, b) {
        var c;
        if (c = a) if (c = !H(a)) c = k(a),
        c = !(Kb(c.data) && !c.data.retry);
        c && Lb(a, !1, b, h)
    },
    Lb = function(a, b, c, d, e) {
        var f = Pb(a, c);
        if (f) {
            var i = k(a);
            i.a = d || i.a;
            i.source =
            e || i.source;
            var j = i.K + "|b=" + (c ? "1": "0"),
            c = new ia(j, f,
            function() {
                Jb(a, i, i.source);
                ra(j)
            });
            b ? na(q, c) : ma(c)
        }
    },
    Pb = function(a, b) {
        var c = M.kfe.kfeHost,
        d = a.getAttribute("sig");
        if (!d) return h;
        var e = "";
        if (!M.kfe.kfeUrlPrefix || M.kfe.kfeUrlPrefix.indexOf("&c=") == -1 && M.kfe.kfeUrlPrefix.indexOf("?c=") == -1) {
            var e = 11,
            f = o(a);
            if (f == 1 || f == 2) e = 21;
            e = "&c=" + e
        }
        f = ba(a);
        if (!f) return h;
        c = [c ? "//" + c: "", M.kfe.kfeUrlPrefix, e, "&d=", encodeURIComponent(f), "&b=", b ? 1: 0, "&j=google.vs.r"];
        c.push("&a=");
        c.push(encodeURIComponent(d));
        if (d =
        a.getAttribute("blobref")) c.push("&bl="),
        c.push(d);
        return c.join("")
    },
    Mb = function(a) {
        var b = k(a);
        Qb(a, b, b.source);
        O = window.setTimeout(function() {
            M.msgs.loading ? n(b, 4, M.msgs.loading) : n(b, 1, M.msgs.noPreview);
            Qb(a, b, b.source)
        },
        M.time.timeout)
    },
    Rb = function(a) {
        return ! a ? -100: !Kb(a) ? -10: a.retry ? -2: a.retry == !1 ? -1: 1
    },
    Jb = function(a, b, c) {
        a == I && window.clearTimeout(O);
        if (H(a)) n(b, 3, b.data);
        else if (Kb(b.data)) n(b, 2, b.data);
        else if (n(b, 1, M.msgs.noPreview), b.a) b.a.name = "e";
        Qb(a, b, c);
        a = s;
        b = google.time();
        Ha(a, "lastOpenTime",
        b + "")
    },
    Kb = function(a) {
        return a != h && a.ssegs != h && a.ssegs.length > 0 && a.ssegs[0].length > 0 && a.dim != h && a.dim.length == 2
    },
    Qb = function(a, b, c) {
        if (! (I == h || I != a || l(b) && a == V && t(J) && t(K))) {
            if (c) {
                var d = a.getAttribute("pved");
                if (d) {
                    var e = [];
                    e.push("s" + c.type);
                    var f = google.dom.getAll("h3.r", a),
                    i = google.dom.getAll("div.s", a);
                    c.o && f.length == 1 && i.length == 1 && (e.push(["p", c.o.x, c.o.y].join(":")), e.push(["t", f[0].offsetWidth, f[0].offsetHeight].join(":")), e.push(["s", i[0].offsetWidth, i[0].offsetHeight].join(":")));
                    ua(a, b,
                    e);
                    va(d, e.join(","))
                }
            }
            c = o(a);
            Sb(a, c, b);
            u(J, !0); (b = google.dom.getAll("div.vso")) && b.length > 0 && google.style.removeClass(b[0], "vso");
            google.style.addClass(a, "vso");
            pb && ha(a)
        }
    },
    W = function(a) {
        if (t(J)) {
            var b = k(I);
            if (a && I) {
                var c = I,
                d = c.getAttribute("cved");
                if (d) {
                    var e = [];
                    e.push("c" + a);
                    ua(c, b, e);
                    va(d, e.join(","))
                }
            }
            if (pb && b && !b.u && b.a && (ea(b) || l(b))) b.a.name = "y",
            ha(I);
            a = H(I);
            I = document.body;
            u(J, !1);
            google.dom.set(J, "display", "none");
            b = document.getElementById("vsrs");
            c = document.getElementById("vsrsr");
            b && google.dom.set(b,
            "display", "none");
            c && google.dom.set(c, "display", "none"); (b = google.dom.get("div.vso")) && google.style.removeClass(b, "vso");
            a && ib()
        }
    },
    X = function(a) {
        Y(!1);
        W(a)
    },
    Y = function(a) {
        U = a;
        Ha(s, "inHoverMode", a ? "true": "false");
        a ? google.style.addClass(L, "vse") : (google.style.removeClass(L, "vse"), google.style.removeClass(L, "vsh"))
    },
    Tb = function(a) {
        for (var a = google.dom.getAll("div.vsc", a), b = 0, c; c = a[b]; b++) if (google.dom.getAll("div.vspi", c).length == 0) {
            var d = google.dom.create("div.vspi");
            c.insertBefore(d, c.firstChild)
        }
    },
    Ub = function(a) {
        if (U || a) sb = window.setTimeout(function() {
            if (U) Nb();
            else {
                var a = google.dom.getAll("div.vsc");
                if (a.length != 0) {
                    var c = q;
                    c.d.length == 0 && c.k == 0 && Ob(a[0], !1)
                }
            }
        },
        M.time.prefetchOnLoad)
    },
    Wb = function() {
        var a = document.getElementById("vspci");
        google.browser.product.IPAD ? google.listen(a, "touchend",
        function() {
            R || X(5)
        }) : google.listen(a, "click",
        function() {
            X(5)
        });
        Vb()
    },
    Vb = function() {
        ob || (google.browser.engine.IE && (wb = 200), google.browser.product.IPAD ? Xb() : Yb(), google.listen(document, "dblclick",
        function(a) {
            google.util.eventTarget(a).className !=
            "vspib" && (window.clearTimeout(S), window.clearTimeout(O))
        }), google.listen(document, "mousedown",
        function(a) {
            J && (xb = google.util.getSelection(), xb || (google.time() - T < wb && !google.browser.product.IPAD && (window.clearTimeout(S), window.clearTimeout(O)), a = Ib(a, !1), Hb(a) && a != h && !U && Ob(a, !0)))
        }), google.listen(document, "mouseover",
        function(a) {
            U && J && !google.browser.product.IPAD && !google.browser.product.ANDROID_TABLET && (ub > 0 && google.time() - ub < 300 ? ub = 0: (rb = a = Ib(a, !0), Hb(a) ? Cb(a) : a == document.body ? (window.clearTimeout(N),
            N = window.setTimeout(function() {
                rb == document.body && W(3)
            },
            M.time.hoverClose)) : a == J && window.clearTimeout(N), google.style.addClass(L, "vsh")))
        }), google.listen(document, "keydown",
        function(a) {
            J && (a = a || window.event, a.keyCode == 27 && X(6))
        }), google.listen(window, "focus",
        function() {
            yb = google.time()
        }), google.msg.listen(14,
        function() {
            if (!J) return ! 0;
            W(7);
            return ! 0
        }))
    },
    Yb = function() {
        google.listen(document, "click",
        function(a) {
            if (J && (T = google.time(), !(T - yb < 500))) if (window.clearTimeout(S), xb) xb = !1;
            else {
                var b = Ib(a, !1),
                c = google.util.eventTarget(a);
                if (a.button <= 1 && Hb(b)) {
                    var d = google.style.hasClass(c, "vspib"),
                    e = Ia(a),
                    a = Zb(e, b);
                    d || U && !a ? Db(b, d, e) : a || (S = setTimeout(function() {
                        Db(b, d, e)
                    },
                    wb))
                } else b == document.body && X(8)
            }
        })
    },
    Xb = function() {
        google.listen(document, "touchstart",
        function(a) {
            R = !1;
            Q = P = h;
            if (google.time() - T < 350) window.clearTimeout(S),
            window.clearTimeout(O);
            else if (a.targetTouches && a.targetTouches.length == 1) P = a.targetTouches[0].pageX,
            Q = a.targetTouches[0].pageY,
            vb = a
        });
        google.listen(document, "touchmove",
        function(a) {
            if (a.targetTouches &&
            a.targetTouches.length == 1 && P && Q) {
                var b = Math.abs(a.targetTouches[0].pageX - P),
                a = Math.abs(a.targetTouches[0].pageY - Q);
                if (!R && (b > 5 || a > 5)) R = !0
            }
        });
        google.listen(document, "touchend",
        function(a) {
            if (J && !R && P && Q && !(350 > google.time() - T)) {
                T = google.time();
                var b = Ib(a, !1),
                c = google.util.eventTarget(a);
                if (Hb(b)) {
                    var d = google.style.hasClass(c, "vspib"),
                    e = Ia(vb ? vb.targetTouches[0] : a),
                    a = Zb(e, b);
                    if (d || !a) S = setTimeout(function() {
                        Db(b, d, e)
                    },
                    350)
                } else b == document.body && (S = setTimeout(function() {
                    X(8)
                },
                350))
            }
        })
    },
    Zb = function(a,
    b) {
        if (!a) return ! 1;
        var c = 0,
        d = [],
        c = o(b);
        c == 1 ? (d = [Ca(b)], c = 4) : (d = c == 2 ? [Ca(b)] : google.dom.getAll("a.l", b), c = 8);
        for (var e = 0, f; f = d[e]; e++) {
            var i = google.style.getPageOffsetStart(f) - c,
            j = google.style.getPageOffsetTop(f) - c,
            m = i + f.offsetWidth + c;
            f = j + f.offsetHeight + 2 * c;
            if (a.x >= i && a.x < m && a.y >= j && a.y < f) return ! 0
        }
        return ! 1
    },
    Hb = function(a) {
        return a != h && a.nodeName == "DIV" && google.style.hasClass(a, "vsc")
    };
    google.register(95, {
        init: function(a) {
            M = a;
            J = document.getElementById("vspb");
            K = document.getElementById("vsi");
            L = document.getElementById("cnt");
            nb = mb = h;
            qb = {};
            s = s || new Fa;
            if (a && a.pb && J) {
                for (var b in tb) {
                    M[b] = M[b] || {};
                    for (var c in tb[b]) c in M[b] || (M[b][c] = tb[b][c])
                }
                b = Math.floor(M.kfe.prefetch / 10);
                c = M.kfe.prefetch % 10;
                delete M.kfe.prefetch;
                M.kfe.v = b + c;
                pb = Math.random() < a.logging.csiFraction;
                aa = {};
                q = new ja(a.kfe.maxPrefetchConnections);
                v = M;
                v.vp = v.vp || {
                    previewUrls: {}
                };
                w = v.vp.previewUrls || {};
                F || (F = new lb);
                Wb();
                Tb();
                ob || google.msg.listen(34, Gb, 35, Fb);
                a = Ga("inHoverMode") == "true";
                b = google.psy && google.psy.q && google.psy.q() || google.nav.getQuery();
                c = Ga("prevQuery");
                var d = parseFloat(Ga("lastOpenTime")) || 0,
                e = google.time();
                b == c && e - d < M.time.hoverModeTimeout * 1E3 ? Y(a) : Y(!1);
                b && Ha(s, "prevQuery", b);
                Ub(a);
                ob = !0
            }
        },
        dispose: function() {
            I = K = J = h;
            L && google.style.removeClass(L, "vse");
            q && q.clear();
            window.clearTimeout(N);
            window.clearTimeout(O);
            window.clearTimeout(sb);
            $b = !1;
            db();
            F && delete F
        }
    });
    google.vs = {
        r: function(a) {
            var b;
            if (b = aa[a.url]) {
                if (Rb(a) >= Rb(b.data)) b.data = a
            } else b = h;
            if (b) {
                if (b.a) {
                    var c = b.a;
                    c.name = c.name || a.s
                }
                Jb(b.result, b, b.source);
                ra(a.url + "|b=" + (a.b == 1 ? "1": "0"))
            }
        },
        mbi: function(a) {
            J && !qb[a] && (qb[a] = !0, (a = document.getElementById("mbb" + a)) && Tb(a))
        }
    };
    var V,
    $b,
    ac,
    Z,
    $,
    bc,
    cc,
    dc,
    ec,
    fc,
    gc,
    hc,
    ic,
    jc = ["onmousedown", "onmouseup", "onclick"],
    kc = function(a, b, c) {
        this.D = a;
        this.C = b;
        this.J = c
    },
    nc = function() {
        $b = !0;
        Z = document.getElementById("vsic");
        $ = document.getElementById("vsia");
        bc = document.getElementById("vsm");
        cc = document.getElementById("vsli");
        cc.src = "/images/vsli1.gif";
        dc = M;
        fc = ec = V = h;
        gc = lc();
        mc();
        hc || (google.listen(window, "resize",
        function() {
            window.setTimeout(function() {
                mc();
                t(J) && Sb(V, ec, fc)
            },
            0)
        }), hc = !0)
    },
    mc = function() {
        if (document.getElementById("cnt")) {
            if (google.browser.product.ANDROID_TABLET) ic =
            {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
            else {
                var a = document.createElement("div");
                a.setAttribute("style", "position:fixed;top:0;bottom:0;left:0;right:0");
                document.body.appendChild(a);
                var b = {
                    width: a.clientWidth,
                    height: a.clientHeight
                };
                document.body.removeChild(a);
                ic = b
            }
            for (var c = google.dom.getAll("span.tl"), b = a = 0, d; d = c[b++];) d = google.style.getWidth(d),
            a = a < d ? d: a;
            var e = google.dom.getAll("div.vsc", document.getElementById("res"));
            if (e.length != 0) {
                for (var f =
                546, b = 0; c = e[b]; b++) {
                    var i = google.dom.getAll("div.s", c);
                    d = google.dom.getAll("div.vspi", c);
                    if (i.length > 0 && d.length > 0) {
                        b = google.style.getWidth(i[0]);
                        a = Math.min(Math.max(a, b), google.style.getWidth(d[0]) - 24);
                        b = google.style.getPageOffsetStart(c);
                        f = google.style.isRtl() ? b - a: b + a;
                        break
                    }
                }
                ac = oc(f)
            }
        }
    },
    oc = function(a) {
        var b = google.style.getPageOffsetLeft(document.getElementById("cnt")),
        c = 0,
        d = document.getElementById("rhs_block");
        d && (c = google.style.getPageOffsetStart(d) - b);
        d = google.style.isRtl() ? -31: 15;
        return new kc(a -
        b + d, a / 2 - b + d, c)
    },
    lc = function() {
        for (var a = J.parentNode; a && google.style.getComputedStyle(a, "position", !0) == "static";) a = a.parentNode;
        return a || J.parentNode
    },
    Sb = function(a, b, c) {
        $b || nc();
        V = a;
        ec = b;
        fc = c;
        google.dom.set(J, "display", "block");
        var d = ic.width,
        e = J,
        f = dc,
        i = f.pb.desiredWidth,
        j = c.data;
        H(a) ? i = 165: c.e == 2 && j && j.dim && j.dim.length == 2 && (i = j.dim[0]);
        var j = d - 30 - i - 6,
        m = ac.D,
        p = ac.C;
        if (google.style.hasClass(a, "vsgv")) {
            var g = google.dom.get("div.vspi", a);
            google.style.isRtl() ? g = oc(google.style.getPageOffsetLeft(g) +
            14) : (g = google.style.getPageOffsetStart(g) + google.style.getWidth(g), g = oc(g - 14));
            m = g.D;
            p = g.C
        }
        g = 0;
        g = b == 2 ? ac.J - i - 30 - 16 + 2: Math.max(Math.min(j, m), p);
        d = d - g - 30;
        f = H(a) ? i: f.pb.minWidth + 2;
        i = Math.max(Math.min(d, i), f);
        google.style.isRtl() && (g = Math.max(0, g - i - 16));
        google.dom.set(e, "left", g.toFixed(0) + "px");
        google.dom.set(e, "width", i + "px");
        google.dom.set(Z, "width", i + "px");
        i = ic.height;
        e = J;
        f = dc;
        d = f.pb.minHeight;
        j = c.data;
        H(a) ? f = d = eb(a) * 120 + 13: (c.e == 2 && j && j.dim && j.dim.length == 2 && (d = j.dim[1]), f = Math.max(d, f.pb.minHeight));
        d = document.body.scrollTop || document.documentElement.scrollTop;
        j = 0; (g = document.getElementById("sfcnt")) && (j = g.clientHeight + g.offsetTop + 1);
        j = Math.max(0, j - d);
        g = google.style.getPageOffsetTop(a) - d;
        m = i - g - a.clientHeight;
        i = j + Math.max(i - Math.min(m, 0) - j - (f + 30), 0) * (g <= 0 ? 0: g / (g + Math.max(m, 0)));
        i = Math.min(g - 4 - 15, i);
        i += d - google.style.getPageOffsetTop(gc);
        google.dom.set(e, "top", i.toFixed(0) + "px");
        google.dom.set(e, "height", f.toFixed(0) + "px");
        e = e.clientHeight - 30;
        google.dom.set(document.getElementById("vspc"), "height",
        e + "px");
        google.dom.set(Z, "height", e + "px");
        if (H(a)) {
            google.style.addClass(J, "vspbv");
            wa = a;
            E = a.getAttribute("vidx");
            y = eb(a);
            x = {};
            Ja = {};
            z = {};
            Na = {};
            La = Ka = B = 0;
            Ma = D = A = C = h;
            Ra = Qa = 0;
            Oa = {};
            Pa = {};
            Sa++;
            Ta = google.time();
            v.vp.fixChromeRendering && google.dom.set(document.getElementById("vsrs"), "top", "1px");
            e = w;
            i = "";
            e[E].stitchedThumbnailUrl = e[E].stitchedThumbnailUrl || "";
            for (f = 0; d = e[E].video[f]; f++) d.streamerUrl = d.streamerUrl || "",
            d.thumbnailUrl = d.thumbnailUrl || "",
            j = a.hasAttribute("vurl") ? a.getAttribute("vurl") : "",
            d = "vid=" + d.streamerUrl + "&thumbnailUrl=" + d.thumbnailUrl + "&playerID=" + f + "&playPage=" + j + "&length=" + e[E].length + "&index=" + f,
            fb && (d += "&stitchedThumbnailUrl=" + e[E].stitchedThumbnailUrl),
            i += "<tr><td>" + Ya('<object width="%(width)d" height="%(height)d" id="playerObjId%(suffix)s" class="vpvfl" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/" swflash.cab#version=9,0,0,0 classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" > <param value="%(swf)s" name="movie"/> <param value="always" name="allowScriptAccess"/> <param value="%(flashvars)s" name="flashvars"/> <embed width="%(width)d" height="%(height)d" id="playerEmbId%(suffix)s" class="vpvfl" src="%(swf)s" allowScriptAccess="always" type="application/x-shockwave-flash" flashvars="%(flashvars)s"> </embed> </object>',
            {
                width: 160,
                height: 120,
                suffix: f,
                swf: "//video.googleapis.com/static/PreviewPlayer6.swf",
                flashvars: d
            }) + "</td></tr>";
            document.getElementById("vsvpc").innerHTML = '<span class=vsvsn><a id=vsvsna href="javascript:google.vsvp.ts()"><div id=vsvsndv class=vsvsnd></div></a></span><table class=vsvptbl><tbody>' + i + "</tbody></table>";
            $a()
        } else {
            u(cc, !1);
            u(bc, !1);
            u($, !1);
            google.style.removeClass(J, "vspbv");
            google.dom.set($, "display", "none");
            if ((e = c.data) && e.ssegs && e.ssegs.length > 0) {
                g = e.url;
                i = $;
                for (f = 0; d = jc[f++];) i.removeAttribute(d);
                if (a.hasAttribute("url")) i.href = a.getAttribute("url");
                else if (j = h, j = b == 2 || b == 1 ? Ca(a) : Da(a)) {
                    i.href = j.getAttribute("href");
                    for (f = 0; d = jc[f++];)(g = j.getAttribute(d)) && i.setAttribute(d, g)
                } else i.href = g;
                K.src = e.ssegs[0];
                i = K;
                f = google.dom.getAll("img.vsi", Z);
                f.unshift(K);
                for (d = 1; j = e.ssegs[d]; d++) g = f[d],
                g || (g = google.dom.create("img.vsi"), google.dom.insert(g, i, !0)),
                g.src = j,
                i = g,
                google.dom.set(g, "display", "block");
                for (; g = f[d++];) google.dom.set(g, "display", "none");
                u($, !0);
                google.dom.set($, "display", "block")
            }
            if (l(c) &&
            e) bc.innerHTML = e,
            u(bc, !0);
            ea(c) && u(cc, !0)
        }
        e = b != 2;
        b = document.getElementById(e ? "vsrs": "vsrsr"); (e = document.getElementById(e ? "vsrsr": "vsrs")) && google.dom.set(e, "display", "none");
        b && (google.dom.set(b, "display", "inline"), google.dom.set(b, "top", google.style.getPageOffsetTop(a) + a.clientHeight / 2 - google.style.getPageOffsetTop(J) - b.clientHeight / 2 + "px"));
        b = google.dom.getAll("div.vsb", $);
        for (a = 0; e = b[a++];) google.dom.remove(e);
        if (c.e == 2 && c.data && c.data.tbts && !(c.data.tbts.length < 1)) {
            c = c.data.tbts;
            for (a = c.length -
            1; a >= 0; a--) if (b = c[a], b.txt && b.box && b.box.t != h && b.box.l != h && b.box.h != h && b.box.w != h) {
                var m = google.style.getHeight(Z),
                j = google.style.getWidth(Z) - 2,
                e = google.dom.get("div.vsbb", $),
                i = google.dom.get("div.vstb", $),
                f = google.dom.create("div.vsb vsbb"),
                d = b.box.t - 4,
                g = b.box.l - 4 - 1,
                p = b.box.h,
                r = b.box.w + 1;
                if (! (d + p > m)) {
                    google.dom.set(f, "top", d + "px");
                    google.dom.set(f, "left", g + "px");
                    google.dom.set(f, "height", p + "px");
                    google.dom.set(f, "width", r + "px");
                    google.dom.insert(f, K, !0);
                    g = google.dom.create("div.vsb vstb");
                    if (b.dir) g.dir =
                    b.dir;
                    g.innerHTML = b.txt;
                    google.dom.insert(g, K, !0);
                    m = m - g.offsetHeight - 2;
                    if (b.txtBox && b.txtBox.l != h && b.txtBox.l >= -4 && b.txtBox.l < j && b.txtBox.w != h) p = b.txtBox.l,
                    r = b.txtBox.w,
                    r != j && p + r < j && (r = Math.min(r, j) - 4),
                    p > 0 ? r -= 4: p = -4,
                    r -= 2,
                    google.dom.set(g, "left", p + "px"),
                    google.dom.set(g, "width", r + "px"),
                    google.dom.set(g, "right", j - 8 - (2 + r + p) + "px");
                    j = d + f.offsetHeight;
                    b.txtBox && b.txtBox.h >= 0 && b.txtBox.t < d && (d - g.offsetHeight >= -4 ? j = d - g.offsetHeight: (google.dom.set(g, "left", ""), google.dom.set(g, "right", ""), google.dom.set(g,
                    "width", "")));
                    if (j > m || pc(g, j, e, i)) if (google.dom.set(g, "left", ""), google.dom.set(g, "right", ""), google.dom.set(g, "width", ""), j = d + f.offsetHeight, j > m || pc(g, j, e, i)) j = d - g.offsetHeight;
                    j < -4 ? (google.dom.remove(f), google.dom.remove(g)) : google.dom.set(g, "top", j + "px")
                }
            }
        }
    },
    pc = function(a, b, c, d) {
        if (!c || !d) return ! 1;
        c = google.style.getComputedStyle(c, "top");
        d = google.style.getComputedStyle(d, "top");
        return (c > d ? d: c) < b + a.offsetHeight + 4
    };
})();
 (function() {
    var h = {},
    j = function(a) {
        for (var c = Array(a.length), b = 0; b < a.length; ++b) c[b] = a.charCodeAt(b);
        return c
    };
    h.stringToByteArray = j;
    var k = function(a) {
        return typeof a == "string" ? j(a) : a
    },
    n = function() {
        this.a = Array(4);
        this.c = Array(64);
        this.j = Array(64);
        this.i = Array(64);
        this.i[0] = 128;
        for (var a = 1; a < 64; ++a) this.i[a] = 0;
        this.reset()
    };
    h.MD5 = n;
    var o = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
    p = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512,
    1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745];
    n.prototype.reset = function() {
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.h = this.d = 0
    };
    h.MD5.prototype.reset = n.prototype.reset;
    var q = function(a, c) {
        for (var b = a.j, d = 0; d < 64; d += 4) b[d / 4] = c[d] | c[d + 1] << 8 | c[d + 2] << 16 | c[d + 3] << 24;
        for (var d = a.a[0], e = a.a[1], f = a.a[2], i = a.a[3], l, m, s, g = 0; g < 64; ++g) g < 16 ? (l = i ^ e & (f ^ i), m = g) : g < 32 ? (l = f ^ i & (e ^ f), m = 5 * g + 1 & 15) : g < 48 ? (l = e ^ f ^ i, m = 3 * g + 5 & 15) : (l = f ^ (e | ~i), m = 7 * g & 15),
        s = i,
        i = f,
        f = e,
        e = e + (((d + l + p[g] + b[m] & 4294967295) << o[g] | (d + l + p[g] + b[m] & 4294967295) >>> 32 - o[g]) & 4294967295) & 4294967295,
        d = s;
        a.a[0] = a.a[0] + d & 4294967295;
        a.a[1] = a.a[1] + e & 4294967295;
        a.a[2] = a.a[2] + f & 4294967295;
        a.a[3] = a.a[3] + i & 4294967295
    };
    n.prototype.update = function(a, c) {
        a = k(a);
        if (!c) c = a.length;
        this.h += c;
        for (var b = 0; b < c; ++b) if (this.c[this.d++] = a[b], this.d == 64) q(this, this.c),
        this.d = 0
    };
    h.MD5.prototype.update = n.prototype.update;
    n.prototype.g = function() {
        var a = Array(16),
        c = this.h * 8;
        this.d < 56 ? this.update(this.i, 56 - this.d) : this.update(this.i, 64 - (this.d - 56));
        for (var b = 56; b < 64; ++b) this.c[b] = c & 255,
        c >>>= 8;
        q(this, this.c);
        for (b = c = 0; b < 4; ++b) for (var d = 0; d < 32; d += 8) a[c++] = this.a[b] >> d & 255;
        return a
    };
    h.MD5.prototype.digest = n.prototype.g;
    var r = function(a, c) {
        c = k(c);
        this.b = a;
        this.e = Array(64);
        var b = 0;
        if (c.length > 64) {
            a.reset();
            a.update(c);
            for (var d = a.g(); b < d.length; ++b) this.e[b] = d[b]
        } else for (; b < c.length; ++b) this.e[b] = c[b];
        for (; b < 64; ++b) this.e[b] = 0;
        for (b = 0; b < 64; ++b) this.e[b] ^= 92;
        this.reset()
    };
    h.HMAC = r;
    r.prototype.reset = function() {
        this.b.reset();
        for (var a = 0; a < 64; ++a) this.b.c[a] = this.e[a] ^ 106;
        q(this.b, this.b.c);
        this.b.h = 64
    };
    h.HMAC.prototype.reset = r.prototype.reset;
    r.prototype.update = function(a, c) {
        this.b.update(a, c)
    };
    h.HMAC.prototype.update = r.prototype.update;
    r.prototype.g = function() {
        var a = this.b.g();
        this.b.reset();
        q(this.b, this.e);
        this.b.h = 64;
        this.b.update(a);
        return this.b.g()
    };
    h.HMAC.prototype.digest = r.prototype.g;
    h.b64e = function(a, c) {
        if (!a) return "";
        a = k(a);
        if (!c) c = a.length;
        for (var b = "", d = 0, e = 0, f = 0; c--;) {
            e <<= 8;
            e |= a[f++];
            for (d += 8; d >= 6;) {
                var i = e >> d - 6 & 63;
                b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(i);
                d -= 6
            }
        }
        d && (e <<= 8, d += 8, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e >> d - 6 & 63));
        return b
    };
    var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0];
    h.b64d = function(a) {
        if (!a) return [];
        for (var c = [], b = 0, d = 0, e = 0; e < a.length; ++e) {
            var f = a.charCodeAt(e);
            if (f < 32 || f > 127 || !t[f - 32]) return [];
            b <<= 6;
            b |= t[f - 32] - 1;
            d += 6;
            d >= 8 && (c.push(b >> d - 8 & 255), d -= 8)
        }
        return c
    };
    window.google.enc = h;
})();
 (function() {
    google.onebox = {};
    var j = !0,
    t = function(b, d, c, e, k, l) {
        for (var a = [], m = [], n = b ? 1: 0, p = 1 - n, f, g, h, q = google.dom.getAll("div.obsmw", d), d = google.style, s = 0, i; i = q[s++];) f = i.offsetHeight,
        google.browser.WEBKIT ? (h = d.getWidth(i.parentNode), g = -100 * f / h - 10, h = "%") : (g = -f - 1, h = "px"),
        f = (1 - n) * g,
        g *= 1 - p,
        a.push([i, "marginTop", f, g, google.fx.linear, h]),
        m.push([i.parentNode, "opacity", n, p, google.fx.linear, ""]);
        var o = google.fx.animate,
        r = function() {
            var a = q,
            c = !b;
            j = !0;
            if (c) {
                typeof a.length == "undefined" && (a = [a]);
                for (var c = 0, d; d = a[c++];) google.browser.engine.IE ?
                d.parentNode.style.removeAttribute("filter") : d.parentNode.style.opacity = ""
            }
            l && l()
        };
        c ? o(e, m.concat(a), r) : (c = function(a, b, c, d) {
            o(c, a,
            function() {
                o(d, b, r)
            })
        },
        b ? c(m, a, e, k) : c(a, m, k, e))
    };
    google.onebox.sm = {
        toggle: function(b, d, c, e, k, l) {
            if (j) {
                for (j = !1; ! google.style.hasClass(b, "obcontainer");) {
                    if (b == document.body) {
                        j = !0;
                        return
                    }
                    b = b.parentNode
                }
                var a = google.style.hasClass(b, "obsmo");
                a ? google.style.removeClass(b, "obsmo") : google.style.addClass(b, "obsmo");
                t(a, b, d, c, k, l);
                google.log("prose_onebox_show_more", (a ? "close": "open") + "&id=" + e)
            }
        }
    };
})();
 (function() {
    var f = null;
    function aa() {
        function a(a) {
            return {
                api: a,
                T: a.a,
                U: a.b,
                I: a.c,
                da: a.d,
                ea: a.e,
                ca: a.f,
                Q: a.g,
                P: a.h,
                F: a.i,
                A: a.j,
                G: a.k,
                J: a.l,
                V: a.m,
                W: a.n,
                X: a.o,
                Y: a.p,
                Z: a.q,
                $: a.r,
                D: a.s,
                O: a.t,
                H: a.u,
                ga: a.v
            }
        }
        var b = window.google.comm;
        if (!b) return f;
        var c = {
            B: function(c, e) {
                var g = b.h(c, e);
                return a(g)
            },
            fa: function(b) {
                return a(b.api)
            },
            C: b.a,
            K: b.b,
            L: b.c,
            M: b.d,
            N: b.e,
            aa: b.f,
            S: b.g,
            ba: b.i,
            R: b.j
        };
        return c
    };
    if (!google.j) window.google.j = {};
    var j = window.google.j,
    ba = !1,
    ca = !(!window.history.pushState || !(google.browser.product.FIREFOX || google.browser.product.CHROME && parseInt(google.browser.product.version, 10) >= 8)),
    da = google.browser.product.IE || google.browser.product.OPERA || google.browser.engine.WEBKIT || google.browser.product.FIREFOX && google.browser.compareVersions(google.browser.product.version.replace(/b\d*$/, ""), "4") >= 0;
    function ea(a) {
        a = window.sessionStorage.getItem("web-" + a);
        return typeof a == "undefined" || a === f ? a: typeof a.value == "string" ? a.value: a
    }
    var k = !1;
    try {
        if (window.sessionStorage) {
            var fa = google.time().toString(),
            ga = "web-s" + fa;
            window.sessionStorage[ga] = fa;
            k = ea("s" + fa) === fa;
            window.sessionStorage.removeItem(ga);
            if (k && j.bv) {
                var ha = j.bv + "_" + (j.u || ""),
                ia = window.sessionStorage["web-v"];
                if (ia != ha) {
                    var l,
                    m,
                    ja = o("s");
                    for (l = 0; m = ja[l++];) window.sessionStorage.removeItem("web-s" + m);
                    window.sessionStorage.removeItem("web-s");
                    ja = o("c");
                    for (l = 0; m = ja[l++];) window.sessionStorage.removeItem("web-c" + m);
                    window.sessionStorage.removeItem("web-c");
                    window.sessionStorage["web-v"] =
                    ha
                }
            }
        }
    } catch(ka) {}
    var q,
    la = !1,
    ma,
    na = google.j.mc || 4E5,
    r = 0;
    if (google.browser.product.IE) document.documentMode ? r = document.documentMode: (r = parseInt(google.browser.product.version, 10), isNaN(r) && (r = 0));
    var s = window.frames.wgjf,
    t,
    v,
    oa = {
        csiSlowMarker: 0,
        shouldBlur: !0
    };
    function pa(a) {
        for (var b in a) oa[b] = a[b]
    }
    j.sjcv = pa;
    var w = {},
    qa = {},
    ra = {},
    sa = "",
    ta = window.history;
    function x() {
        return window.location
    }
    function ua() {
        return window.top.location
    }
    j.gwtl = ua;
    var y,
    va;
    j.ss = 1;
    var z = !1,
    xa = !1,
    A,
    C = "1",
    ya = "1",
    D = {
        c: {
            1: google.j[1]
        },
        s: {}
    },
    E = {
        c: {},
        s: {}
    },
    F,
    za,
    Aa,
    Ba,
    Ca,
    Da = !1,
    Ea = {},
    G = [];
    function H(a, b, c) {
        b._sn = a;
        b._t = "jesr";
        b._ls = y;
        b._fr = !!s;
        b._ph = Ea[sa] || 0;
        j.w != j.ss && (b._ss = j.ss + "," + j.w);
        try {
            b._wlt = typeof x().href,
            b._flt = typeof s.location.href,
            b._wl = x().href,
            b._fl = s.location.href
        } catch(d) {}
        google.ml(c || Error("jesr"), !1, b)
    }
    var I,
    J,
    Fa = 0,
    K = 0,
    Ga = 0,
    L = [];
    function Ha(a, b) {
        a.removeEventListener ? (a.removeEventListener("load", b, !1), a.removeEventListener("error", b, !1)) : (a.detachEvent("onload", b), a.detachEvent("onerror", b))
    }
    function M(a, b) {
        if ((b || j.ss == j.w && ++J == I) && google.timers && google.timers.load.t && google.timers.load.e) {
            google.timers.load.t.iml = google.time();
            google.timers.load.e.imn = I;
            if (Fa > 1) google.timers.load.e.alm = Fa - 1;
            google.report && google.report(google.timers.load, google.timers.load.e);
            google.dph && google.dph();
            Fa = 0
        }
        if (!b) {
            var a = a || window.event,
            c = a.target || a.srcElement;
            Ha(c, M)
        }
    }
    function Ia() {
        try {++Fa;
            var a = document.getElementsByTagName("img");
            I = a.length;
            for (var b = J = 0, c; b < I; ++b) c = a[b],
            Ha(c, M),
            c.complete || typeof c.src != "string" || !c.src ? ++J: c.addEventListener ? (c.addEventListener("load", M, !1), c.addEventListener("error", M, !1)) : (c.attachEvent("onload", M), c.attachEvent("onerror", M));
            google.timers.load.e = {
                ei: google.kEI,
                e: google.kEXPI,
                cp: Ja,
                imp: I - J
            };
            Ka && (google.timers.load.e.pf = 1);
            var d = t.I();
            if (d) a = function(a) {
                var b = oa.csiSlowMarker;
                return "n." + a[0] + ",ttfc." + Math.round(a[1]) + ",ttlc." +
                Math.round(a[2]) + ",cbt." + Math.round(a[3]) + (b ? ",slow." + b: "")
            },
            google.timers.load.e.pfa = a(d[0]),
            google.timers.load.e.pfm = a(d[1]);
            J == I && M(f, !0)
        } catch(e) {
            H("SCSI", {
                n: I,
                i: b,
                s: c ? typeof c.src == "string" ? c.src.substr(0, 40) : 1: 0,
                c: c ? c.complete: 0
            },
            e)
        }
    }
    function N(a, b, c) {
        try {
            if (j.h5h && a == x() && b.indexOf("#") == 0) {
                var d = b.replace(/^#/, "/" + O() + "?").replace(/&fp=([^&]*)/g, "&fpz=$1");
                if (! (x().href.replace(RegExp(".*(?=/" + O() + "?)"), "") == d || b == "#" && La())) ta[c ? "replaceState": "pushState"](b, "", d)
            } else c || j.ahr ? (b.indexOf("#") ? a.replace(b) : a.replace(a.href.replace(/#.*/, "") + b), google.msg.send(43, [b, c])) : b.indexOf("#") ? (a.href = b, google.msg.send(43, [b])) : Ma(a, b)
        } catch(e) {
            H("SL", {
                h5h: j.h5h,
                psy: 1,
                r: c,
                v: b
            },
            e)
        }
    }
    j.sl = N;
    function Ma(a, b) {
        a.hash = b;
        google.msg.send(43, [b])
    }
    var Na = !1,
    P = !1,
    Oa = !1,
    Ja = !1,
    Pa = "",
    Ka = !1,
    Qa = "";
    function Ra(a, b, c) {
        if (a[b]) {
            if (!a.__handler) a.__handler = a[b],
            a[b] = function(a) {
                return this.__handler(a) != !1 && c.call(this, a)
            }
        } else a.__handler = a[b] = function(a) {
            return c.call(this, a)
        }
    }
    function Sa(a) {
        if (za && za.test(a.action)) for (var a = a.getElementsByTagName("input"), b = 0, c; c = a[b]; ++b) if (c.name == "tbm" && c.value == "isch") return ! 0;
        return ! 1
    }
    function _trap() {
        for (var a = document.getElementsByTagName("form"), b = 0, c; c = a[b++];)(F.test(c.action) || Sa(c)) && !/\bnj\b/.test(c.className) && Ra(c, "onsubmit",
        function(a) {
            return Ta(this, !1, a)
        })
    }
    j.trap = _trap;
    function Ua() {
        if (k) {
            var a = o("s");
            for (l = 0; m = a[l++];) window.sessionStorage.removeItem("web-s" + m);
            Va("s", [])
        } else Wa(C);
        D.s = {}
    }
    j.cl = Ua;
    function Q(a, b) {
        D[a][b] === 1 && (D[a][b] = eval(ea(a + b)));
        return D[a][b]
    }
    function Xa(a, b) {
        delete D[a][b];
        if (k) {
            for (var c = a + b, d = o(a), e = -1, g = 0, h; h = d[g++];) if (h == c) {
                e = g - 1;
                break
            }
            if (e >= 0) {
                d.splice(e, 1);
                try {
                    Va(a, d),
                    window.sessionStorage.removeItem("web-" + c)
                } catch(i) {
                    H("RCI", {
                        k: d ? d.length: -1,
                        s: typeof window.sessionStorage.remainingSpace == "number" ? window.sessionStorage.remainingSpace: -1
                    },
                    i)
                }
            }
        }
    }
    function o(a) {
        return (a = ea(a)) ? eval(a) : []
    }
    function Va(a, b) {
        for (var c = {},
        d = [], e = b.length - 1; e >= 0; e--) c[b[e]] || (c[b[e]] = 1, d.push(b[e]));
        d.reverse();
        window.sessionStorage["web-" + a] = "(" + google.stringify(d) + ")"
    }
    function R() {
        return S > j.ss ? S: j.ss + 1
    }
    function T(a) {
        return ! a ? a === 0: a == j.ss && j.ss > j.w
    }
    function Ya(a) {
        function b(a, b) {
            var g = document.createElement("script");
            g.text = b;
            c.appendChild(g)
        }
        var c = document.getElementById("jjsd");
        if (!c) c = document.createElement("div"),
        c.id = "jjsd",
        google.dom.append(c);
        a.replace(/\x3cscript[\s\S]*?\x3e([\s\S]*?)\x3c\/script/ig, b)
    }
    function _bc(a, b) {
        try {
            b || U("bc", [a]),
            document.body.className = a || ""
        } catch(c) {
            H("BC", {
                name: a
            },
            c)
        }
    }
    j.bc = _bc;
    function _p(a, b, c, d, e) {
        if (T(d)) {
            if (!google.msg.send(6, [b, a])) return ! 1;
            try {
                e || U("p", [b, c, 0]);
                if ((b == "sdb" || b == "taw") && Na) {
                    document.body.style.height = document.body.offsetHeight + 4 + "px";
                    try {
                        V(C)
                    } catch(g) {}
                    window.scroll(0, 0);
                    Na = !1
                }
                var h = document.getElementById(b);
                try {
                    h.innerHTML = c,
                    Ya(c)
                } catch(i) {
                    var p = h.cloneNode(!1);
                    p.innerHTML = c;
                    h.parentNode.replaceChild(p, h);
                    da && Ya(c)
                }
                if (b == "main") {
                    var n = W("q", a) || W("as_q", a),
                    n = google.msg.send(4, [n, !0], n, f);
                    if (n != f) for (var a = 0, u; u = ["gs", "bgs", "f"][a++];) if (document[u] &&
                    document[u].q.value != n) document[u].q.value = n
                }
                document.getElementById(b).style.visibility = ""
            } catch(B) {
                H("P", {
                    id: b
                },
                B)
            }
            X(21);
            if (!google.msg.send(18, [b])) return ! 1
        }
    }
    j.p = _p;
    function _ph(a, b, c, d) {
        if (T(c)) {
            var e,
            g,
            h;
            try {
                for (e in U("ph", [b, 0, d]), b) if ((g = document.getElementById(e)) || !d) h = b[e],
                g.href = h
            } catch(i) {
                H("PH", {
                    id: e,
                    href: h
                },
                i)
            }
        }
    }
    j.ph = _ph;
    function _pah(a, b, c) {
        if (T(c)) {
            var d,
            e;
            try {
                for (d in U("pah", [b, 0]), b) {
                    e = b[d];
                    var g = document.getElementById(d);
                    if (g) {
                        if (!g.orighref) {
                            var h = g.href.indexOf("?");
                            g.orighref = h >= 0 ? g.href.substr(0, h + 1) : g.href
                        }
                        g.href = g.orighref + e
                    }
                }
            } catch(i) {
                H("PAH", {
                    id: d,
                    suffix: e
                },
                i)
            }
        }
    }
    j.pah = _pah;
    function _pa(a, b, c, d) {
        if (T(d)) {
            try {
                U("pa", [b, c, 0]);
                var e = document.getElementById(b),
                g = document.createElement("div");
                g.innerHTML = c;
                for (var h; h = g.firstChild;) e.appendChild(h);
                da && Ya(c)
            } catch(i) {
                H("PA", {
                    id: b
                },
                i)
            }
            X(22)
        }
    }
    j.pa = _pa;
    function Za(a, b) {
        for (var c in b) {
            var d = b[c];
            if (d && typeof d == "object") {
                if (!a[c] || typeof a[c] != "object") a[c] = {};
                Za(a[c], d)
            } else a[c] = d
        }
    }
    function _sa(a, b, c, d) {
        if (T(d)) try {
            U("sa", [b, c, 0]);
            var e = document.getElementById(b);
            Za(e, c)
        } catch(g) {
            H("SA", {
                id: b,
                elt: e,
                attbs: google.stringify(c)
            },
            g)
        }
    }
    j.sa = _sa;
    function _slp(a, b, c) {
        if (T(c)) try {
            U("slp", [b, 0]);
            var d;
            window.gbar && (d = window.gbar.slp) && d(b)
        } catch(e) {
            H("SLP", {
                id: b
            },
            e)
        }
    }
    j.slp = _slp;
    var Y = 1,
    $a = ["wgjc"],
    S,
    ab = 1;
    function bb() {
        return /#.+/.test(cb()) ? cb() : x().href.substr(x().href.indexOf("?")).replace(/#.*/, "")
    }
    function W(a, b) {
        try {
            var c = b || bb(),
            d = c.match("[?&#]" + a + "=(.*?)([&#]|$)");
            if (d) return decodeURIComponent(d[1].replace(/\+/g, " ").replace(/[\n\r]+/g, " "))
        } catch(e) {
            H("GQC", {
                c: a
            },
            e)
        }
        return "" 
    }
    var db = google.j.b;
    function _ad(a, b, c, d, e, g, h) {
        var b = Qa || b,
        i = !1;
        z = !1;
        if (T(e)) {
            G = [];
            U("ad", [b, c, d, 0, 0, 1]);
            h || eb();
            google.med && (db ? db = !1: google.med("dispose"));
            Da && fb();
            b = google.msg.send(21, [b], b, "");
            try {
                if (b) s.document.title = document.title = b,
                google.browser.engine.WEBKIT && google.msg.send(24, [y]) && (j.h5h ? N(x(), y) : j.ahr ? x().replace(x().href.replace(/#.*/, "") + y) : Ma(x(), y))
            } catch(p) {}
            google.kEI = c;
            if (g) google.kCSI = g,
            google.kEXPI = g.expi;
            i = C != d ? gb(d, a) : !0;
            A = W("q", a) || A;
            j.bc("", !0);
            google.j.spf(a, Ka);
            X(20)
        }
        return i
    }
    j.ad = _ad;
    function _spf(a, b) {
        U("spf", [b]);
        google.j.pf = b
    }
    j.spf = _spf;
    function _xx(a, b, c) {
        if (T(c)) try {
            z = !0,
            V(C),
            j.p(y, "sdb", "", j.ss),
            j.p(y, O(), b, j.ss)
        } catch(d) {
            H("_xx", {},
            d)
        }
    }
    j.xx = _xx;
    function _zz(a, b, c) {
        if (T(b)) {
            U("zz", [0, 1, z]);
            document.body.style.height = "";
            if (!c) google.timers && google.timers.load.t && (google.timers.load.t.prt = google.time());
            a = google.msg.send(19, [y], y);
            hb();
            if (!c) google.timers && google.timers.load.t && (google.timers.load.t.pprt = google.time());
            c || ib(a);
            Y = 1;
            j.w = j.ss;
            if (!z && !c && google.timers && google.timers.load.t) google.timers.load.t.ol = google.time(),
            google.timers.load.t.jsrt = S,
            P && Ia();
            if (!c) s.src = "about:blank"
        }
        P = z = !1;
        X(0)
    }
    j.zz = _zz;
    function jb() {
        google.pageState = y;
        for (var a = 0; a < google.rein.length; a++) {
            var b = google.rein[a];
            if (b) try {
                b(y == "#", Oa)
            } catch(c) {
                H("INJS", {
                    i: a + 1
                },
                c)
            }
        }
        Da = !0
    }
    function fb() {
        if (google.y.x) google.x = google.y.x;
        for (var a = 0; a < google.dstr.length; a++) {
            var b = google.dstr[a];
            if (b) try {
                b()
            } catch(c) {
                H("DEJS", {
                    i: a + 1
                },
                c)
            }
        }
    }
    function _l(a) {
        google.fl = !0;
        if (la) {
            try {
                if (ma) {
                    a = ma;
                    ma = "";
                    google.browser.product.IE ? (ta.back(), N(j.gwtl(), a)) : N(j.gwtl(), a, 1);
                    return
                }
                var b = s.location.href;
                if (google.browser.product.CHROME && !b) {
                    Z(3, y, 2);
                    return
                }
                var c = r <= 7 || s.document.readyState == "complete"; ! /\/blank\.html$/.test(b) && !/about:blank$/.test(b) && (!s.google || !s.google.loc) && c && N(x(), b)
            } catch(d) {
                Z(4, y, 2);
                return
            }
            a && (Ea[a] || 0) != 0 && Z(8, bb(), 2)
        }
    }
    j.l = _l;
    function _bvch(a) {
        if (google.msg.send(26)) {
            var b = a.indexOf("?") + 1;
            b >= 1 && (a = a.substr(0, b) + a.substr(b).replace(/(^|&|#)(fp|bav|escfg)\=[^&]*/g, "") + "&cad=cbv");
            j.ss = R();
            j.w = j.ss;
            ma = a;
            s.location.replace("about:blank")
        } else j.ss = R(),
        j.w = j.ss
    }
    j.bvch = _bvch;
    function Z(a, b, c, d) {
        var e = function(a) {
            return a != 1
        },
        g = d || {};
        g._c = "je";
        g._ce = a;
        a == 8 && (g._ph = Ea[sa] || 0);
        e = google.msg.send(30, Array.prototype.slice.call(arguments, 0, 2), c, e);
        kb(b, g, e)
    }
    function O() {
        return x().pathname == "/images" || x().pathname == "/imghp" ? "images": "search"
    }
    function kb(a, b, c) {
        if (c !== 1) {
            var a = "/" + O() + "?" + a.substr(1).replace(/(^|&)fp\=[^&]*/g, "").replace(/(^|&)tch\=[^&]*/g, "").replace(/(^|&)escfg\=[^&]*/g, "") + "&emsg=NCSR&noj=1&ei=" + window.google.kEI,
            d,
            e,
            g;
            d = e = g = "(none)";
            try {
                if (s && s.document && s.location) d = s.google,
                e = s.location.href,
                g = s.document.title
            } catch(h) {}
            try {
                var i = {
                    _sn: "NCSR",
                    _t: "jesr",
                    _g: !!d,
                    _lg: S ? google.time() - S: "NA",
                    _sl: ab,
                    _wl: x().href,
                    _fl: e,
                    _it: g.substr(0, 100)
                },
                p;
                for (p in b) b.hasOwnProperty(p) && (i[p] = b[p]);
                google.ml(Error("jesr"), !1, i)
            } catch(n) {}
            c !=
            3 && c == 2 && (google.browser.product.IE ? (ta.back(), N(j.gwtl(), a)) : N(j.gwtl(), a, 1))
        }
    }
    function _e(a) {
        google.fl = !0;
        H("IFE", {},
        a || window.event)
    }
    j.e = _e;
    function lb(a) {
        a = a.replace(/(^|&)bav\=[^&]*/g, "");
        if (window.gbar) {
            var b = window.gbar.bv;
            if (b) return [a, "&bav=on.", b.n, ",or.", b.r].join("")
        }
        return a
    }
    j.fb = lb;
    function Ta(a, b, c, d, e) {
        b = mb(a, b, c, d, e);
        if (j.bo && b && a instanceof Element) a.target = "_top";
        return b
    }
    j.hsa = Ta;
    function mb(a, b, c, d, e) {
        if (!q || ba) return ! 0;
        c = "#";
        try {
            if (b) c += a.match(/\?(.*)/)[1].replace(/#.*/, "");
            else {
                b = [];
                d || a.q && a.q.blur();
                for (var g = 0, h; h = a.elements[g++];) if (! (h.type == "radio" || h.type == "submit") || h.checked) {
                    if (h.name == "btnI") return ! 0;
                    h.name && b.push(h.name + "=" + encodeURIComponent(h.value).replace("%3A", ":"))
                }
                c += b.join("&").replace(/\%20/g, "+")
            }
            var c = lb(c),
            c = c.replace(/\'/g, "%27"),
            i = W("q", c);
            if (!i && !d) return ! 1;
            if (/(^| )cache:/.test(i)) return ! 0
        } catch(p) {
            return H("HSA", {
                t: a.tagName
            },
            p),
            !0
        }
        c += "&fp=" +
        (C == "1" ? ya: C);
        c = google.msg.send(51, [c], c) || ""; ! d && !google.browser.engine.WEBKIT && google.msg.send(24, [c]) && N(x(), c);
        d ? window.google.jesrstate = c: (P = !0, Xa("s", c), google.dom.remove(document.getElementById("jjsd")), window.google._bfr = void 0, document.getElementById("csi").value = "", nb(c, !1, e));
        return ! 1
    }
    function La() {
        return (x().href.indexOf(va) == 0 || x().pathname != "/search" && x().pathname != "/images") && !x().hash.match(/[#&]q=/)
    }
    function ob() {
        return La() ? "#": cb()
    }
    j.h5s = ob;
    function pb(a, b, c) { (!a || a == "#") && x().href.replace(/#.*/, "") != va && !(x().pathname == "/search" || x().pathname == "/images") ? x().replace(x().href) : $(b ? 1: 0, c, a || ob())
    }
    function qb(a) {
        var b = ob();
        pb(b == "#" ? "#": a && a.state, !1, !1)
    }
    function rb() {
        return x().hash.match(/[#&]q=/) ? (N(x(), x().href.match(/#.*/)[0], !0), !0) : !1
    }
    function sb() {
        rb() && $()
    }
    function tb() {
        $()
    }
    function $(a, b, c) {
        a = a === 1;
        c = c || cb(); ! xa && c != "#" && !/[&#]q=/.test(c) && (H("BF", {
            o: a,
            f: b,
            s: c
        }), xa = !0);
        if (Y && c != y && Aa.test(x().href)) {
            P = !(c in D.s);
            oa.shouldBlur && (document.gs && document.gs.q.blur(), document.bgs && document.bgs.q.blur(), document.f && document.f.q.blur());
            try {
                a && c != "#" && b && (c = ub(c, "fp", "1"), c.indexOf("&fp=") == -1 && (c += "&fp=1"), c = lb(c), c.indexOf("&cad=") == -1 && (c += "&cad=b"), Xa("s", c), N(x(), c, 1))
            } catch(d) {}
            if (google.msg.send(7, [c])) {
                if (a && google.y && google.y.first && (google.y.first = [], b = document.getElementById("searchform"),
                (google.sn == "webhp" || google.sn == "imghp") && b)) b.style.display = "none";
                nb(c, a)
            } else y = c
        }
    }
    function vb(a, b) {
        $(a, b);
        window.setTimeout(vb, 100)
    }
    function nb(a, b, c) {
        google.msg.send(53);
        S = google.time();
        Ja = Oa = Na = !1;
        if (google.timers) google.timers.load.t = f,
        google.timers.load.e = f;
        a != "#" && a.indexOf("&fp=") == -1 && (a += "&fp=" + C, N(x(), a, 1));
        y = a;
        ab = 0;
        try {
            Y = 0;
            var d = a.substr(1);
            if (a in D.s && !c) j.ss = R(),
            wb(a);
            else if (a != "#") {
                var e = "/" + O() + "?" + d; (e = google.msg.send(5, [e, c], e)) ? (j.ss = R(), la = Na = !0, xb(e, c)) : Y = 1
            } else x().reload()
        } catch(g) {
            ab = 1,
            H("GO", {
                o: b,
                s: a
            },
            g)
        }
        window.setTimeout(function() {
            ab = 1
        },
        50)
    }
    j.go = nb;
    function xb(a, b) {
        if (!t.J(a) && (t.H(), t.A(), t.O(), v && !t.D())) {
            v.G(a, b);
            return
        }
        t.G(a, b)
    }
    function V(a) {
        try {
            for (var b = Q("c", a), c = 0, d; d = b.cc[c++];) {
                var e = document.getElementById(d);
                e ? e.style.visibility = "hidden": H("C", {
                    container: d
                },
                Error("Missing chrome container"))
            }
        } catch(g) {
            H("C", {
                fp: a,
                c: d
            },
            g)
        }
    }
    j.clr = function() {
        V(C)
    };
    function yb(a, b) {
        for (var c = document.getElementById(a), c = c.getElementsByTagName("a"), d = {},
        e = 0, g; g = c[e++];) if (g.id.indexOf(b) == 0) d[g.id] = g.href;
        U("ph", [d, 0])
    }
    function zb() {
        var a = "#";
        try {
            G = [];
            U("ad", [document.title, window.google.kEI, C, 0, 0, 1]);
            for (var b = Q("c", C), c = 0, d; d = b.co[c++];) {
                var e = document.getElementById(d);
                e ? U("p", [d, e.innerHTML, 0]) : H("IS", {
                    container: d
                },
                Error("Missing chrome container"))
            }
            b.bl && yb(b.bl[0], b.bl[1]);
            U("zz", [0, 1]);
            ib(a, !0, !0)
        } catch(g) {
            H("IS", {},
            g)
        }
    }
    j.is = zb;
    function ib(a, b, c) {
        if (b || !Q("s", a)) {
            if (!b && /[&#]deb=/.test(a)) {
                G = [];
                return
            }
            D.s[a] = G;
            G = []
        }
        c || Wa(C, a)
    }
    function U(a, b) {
        G.push({
            n: a,
            a: b
        })
    }
    function Ab(a, b) {
        if (b.d) b.n = b.g,
        b.a = b.d;
        else if (b.h) b.n = b.h,
        b.a = b.g;
        var c;
        c = b.n != "bc" ? [a].concat(b.a) : b.a;
        try {
            j[b.n].apply(f, c)
        } catch(d) {
            H("ECF", {
                n: b.n,
                a: b.a,
                s: a
            },
            d)
        }
    }
    function Wa(a, b) {
        k && (E.c[a] = 1, b && (E.s[b] = 1));
        E.stale = 1;
        setTimeout(Bb, 0)
    }
    function Cb(a) {
        var b = [],
        c;
        for (c in E[a]) window.sessionStorage["web-" + a + c] = "(" + google.stringify(Q(a, c)) + ")",
        b.push(c);
        b.length > 0 && (c = o(a), c = c.concat(b), Va(a, c))
    }
    function Db(a) {
        try {
            Cb(a)
        } catch(b) {
            var c = o("s"),
            d = Math.floor(c.length * google.j.sc),
            d = c.splice(1, d);
            Va("s", c);
            for (var c = 0, e; e = d[c++];) delete D.s[e],
            window.sessionStorage.removeItem("web-s" + e);
            try {
                Cb(a)
            } catch(g) {
                throw H("SCSTSSAC", {
                    p: a
                },
                g),
                g;
            }
        }
    }
    function Bb() {
        if (E.stale) try {
            if (k) Db("c"),
            Db("s");
            else {
                var a = google.stringify(D);
                if (a.length > na) {
                    ba = !0;
                    try {
                        var b = 0,
                        c = 0,
                        d;
                        for (d in D.s) b++;
                        for (d in D.c) c++;
                        google.ml(Error("jesr"), !1, {
                            _sn: "JMCSE",
                            _t: "jesr",
                            _s: b,
                            _c: c,
                            _l: a.length
                        })
                    } catch(e) {}
                }
                document.getElementById("wgjc").value = "(" + a + ")"
            }
        } catch(g) {
            document.getElementById("wgjc").value = "({})",
            H("SE", {
                ss: !!window.sessionStorage
            },
            g)
        } finally {
            E = {
                c: {},
                s: {}
            }
        }
    }
    function Eb() {
        var a = !1;
        try {
            if (k) {
                D = {
                    s: {},
                    c: {
                        1: j[1]
                    }
                };
                for (var b = o("s"), c = o("c"), d = 0, e; e = b[d++];) D.s[e] = 1;
                e = 0;
                for (var g; g = c[e++];) g == "1" && D.c[1] || (D.c[g] = 1);
                a = b.length > 0 || c.length > 0
            } else d = document.getElementById("wgjc").value,
            d.length > na && (ba = !0),
            a = d != "",
            D = eval(d)
        } catch(h) {
            H("RC", {},
            h)
        }
        D || (D = {
            s: {},
            c: {
                1: j[1]
            }
        });
        return a
    }
    function Fb() {
        var a = google.browser.engine.GECKO,
        b = google.browser.product.SAFARI,
        c = google.browser.product.ANDROID_TABLET;
        a && window.addEventListener("pageshow",
        function() {
            var a = document.f || document.gs;
            if (a && A) a.q.value = A
        },
        !1); (b || c) && window.addEventListener("pagehide",
        function() {
            var a = document.f || document.gs;
            a && (a.q.setAttribute("value", a.q.value), (a = document.getElementById("grey")) && a.setAttribute("value", a.value))
        },
        !1)
    }
    function eb() {
        Gb();
        if (google.timers && !google.timers.load.t) google.rph && google.rph(),
        google.timers.load.t = {
            start: google.time()
        }
    }
    function Gb() {
        if (!Pa) Pa = google.sn;
        google.sn = y == "#" ? Pa: "web"
    }
    function _ac(a, b, c, d, e, g) {
        if (C != b && T(g)) {
            if (!d) {
                D.c[b] = {};
                for (var h in a) D.c[b][h] = a[h]
            }
            if (c) Ja = Oa = !0,
            eb(),
            a = Q("c", b).css,
            b = document.getElementById("gstyle"),
            google.browser.product.IE ? b && b.styleSheet ? b.styleSheet.cssText = a: document.styleSheets[0].cssText = a: (b || document.getElementsByTagName("style")[0]).textContent = a;
            X(10)
        }
    }
    j.ac = _ac;
    function _pc(a, b, c, d, e, g, h) {
        if (C != c && T(h)) {
            try {
                if (e || (Q("c", c)[a] = b), d) j.p(y, a, b, h, !0),
                document.body.style.display = "",
                document.body.style.visibility = ""
            } catch(i) {
                H("PC", {
                    c: a,
                    f: c
                },
                i)
            }
            X(11)
        }
    }
    j.pc = _pc;
    function _zc(a, b, c, d, e, g) {
        if (C != b && T(g)) {
            if (!d) {
                var d = Q("c", b),
                h;
                for (h in a) d[h] = a[h]
            }
            c ? C = b: ya = b;
            google.msg.send(42, [b]);
            X(12)
        }
    }
    j.zc = _zc;
    function gb(a, b) {
        if (Q("c", a)) j.ac({},
        a, !0, !0, y, 0),
        Ja = !1,
        j.pc("main", Q("c", a).main, a, !0, !0, y, 0),
        j.zc({},
        a, !0, !0, y, 0);
        else {
            var c = W("fp", b) || "1";
            H("CM", {
                fp: c
            });
            c != "1" ? nb(ub(b, "fp", "1")) : Z(0, b, 2);
            return ! 1
        }
        return ! 0
    }
    function wb(a, b, c) {
        if (!c && !google.msg.send(3, [a])) Y = 1;
        else {
            K == 0 && !c && V(C);
            var d = [],
            e = K == 0 || c;
            try {
                var g;
                g = b ? b: Q("s", a);
                for (var b = 0, h; h = g[b++];) K != 0 ? d.push(h) : Ab(a, h);
                d.length > 0 && L.push(function() {
                    wb(a, d, e)
                });
                if (google.browser.product.IE) {
                    g = ["pmocntr", "pmocntr2"];
                    for (var b = 0, i; i = g[b++];) {
                        var p = document.getElementById(i);
                        if (p) p.style.display = "none"
                    }
                }
            } catch(n) {
                H("DPFC", {
                    s: a
                },
                n)
            }
            d.length == 0 && google.msg.send(31, [a])
        }
    }
    function _xi() {
        if (google.y.first) {
            for (var a = 0, b; b = google.y.first[a]; ++a) b();
            google.y.first = []
        }
        google.x = function(a, b) {
            b && b.apply(a);
            return ! 1
        };
        jb()
    }
    j.xi = _xi;
    function cb() {
        var a;
        j.h5h ? (a = x().hash.match(/[#&](as_q|q)=/), a = x().href.match(a ? /#(.*)/: /\?([^#]*)/)) : a = x().href.match(/#(.*)/);
        a = a ? "#" + a[1] : "#";
        j.h5h && (a = a.replace(/&fpz=([^&]*)/g, "&fp=$1"));
        return a
    }
    function ub(a, b, c) {
        b = RegExp("([?&]" + b + "=).*?([&#]|$)");
        return a.replace(b, "$1" + encodeURIComponent(c).replace(/\%20/g, "+") + "$2")
    }
    function hb() {
        try {
            var a = W("q") || W("as_q") || A,
            a = google.msg.send(4, [a], a, f);
            if (a == f) return;
            for (var b = 0, c; c = ["gs", "bgs", "f"][b++];) if (document[c] && document[c].q.value != a) document[c].q.value = a
        } catch(d) {
            H("PQ", {},
            d)
        }
        j.trap()
    }
    function Hb(a) {
        Aa = RegExp("^" + a);
        google.Toolbelt.hasInURL(["isch"], x().href) ? (za = RegExp("(^" + a + "|^)/(" + O() + ")(\\?|$)"), F = RegExp("(^" + a + "|^)/(" + O() + ")\\?(.*&)?tbm=isch(&|$)")) : (za = f, F = RegExp("(^" + a + "|^)/(" + O() + ")(\\?|$)(?!(.*&)?tbm=isch(&|$))"));
        Ba = RegExp("(^" + a + "|^)/aclk\\?");
        Ca = RegExp("(^" + a + "|^)/url\\?(.*&)?sa=(X|t|U)")
    }
    function Ib() {
        if (window.event && typeof window.event.button == "number") Jb = window.event.button
    }
    var Jb;
    function Kb(a) {
        if (!q) return ! 0;
        a = a || window.event;
        if (!google.msg.send(2, [a])) return a.preventDefault && a.preventDefault(),
        a.cancelBubble = !0,
        !1;
        var b = a.target || a.srcElement;
        if (j.bo && b.nodeName.toLowerCase() == "input" && b.type == "submit" && b.form) b.form.target = "_top";
        for (var c; b && b.nodeName.toLowerCase() != "body";) {
            if (b.nodeName.toLowerCase() == "a") {
                c = b;
                break
            }
            b = b.parentNode
        }
        if (!c) return ! 0;
        var b = c.getAttribute("href", 2),
        d = google.msg.send(33, [b], b);
        if (b != d) c.href = d;
        b = !1;
        if (!google.njr) {
            d = "";
            if (Ca.test(c.href) ||
            Ba.test(c.href) && /(\\?|&)adurl=/.test(c.href) && !/(\\?|&)q=/.test(c.href)) / (\\ ? |&) rct = j / .test(c.href) || (d += "&rct=j"),
            /(\\?|&)q=/.test(c.href) || (d += "&q=" + encodeURIComponent(W("q") || W("as_q") || A), d = d.substring(0, 1948 - c.href.length)),
            b = !0;
            if (Ba.test(c.href) || /\/url\?/.test(c.href)) {
                var e = W("tbm");
                e && !/(\\?|&)tbm=/.test(c.href) && (d += "&tbm=" + encodeURIComponent(e)); (e = W("tbs")) && !/(\\?|&)tbs=/.test(c.href) && (d += "&tbs=" + encodeURIComponent(e))
            }
            e = oa.csiSlowMarker;
            F.test(c.href) && e && e == 2 && (d += "&psj=1");
            if (d) e =
            c.href.indexOf("&ei="),
            e >= 0 ? c.href = [c.href.substr(0, e), d, c.href.substr(e)].join("") : c.href += d
        }
        if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || a.button && a.button != 0 || Jb > 1) return b && !/(\\?|&)cad=/.test(c.href) && (c.href += "&cad=rja"),
        !0;
        if (c.target) return b && !/(\\?|&)cad=/.test(c.href) && (c.href += "&cad=rjt"),
        !0;
        b = F.test(c.href) && !/\bnj\b/.test(c.className);
        if (j.bo && !b && c.getAttribute("href") != "#") c.target = "_top";
        if (b && c.getAttribute("href") != "#") {
            c = Ta(c.href, !0);
            if (c === !1) a.preventDefault && a.preventDefault(),
            a.cancelBubble = !0;
            return c
        } else if (/&rct=j/.test(c.href) && c.target != "_top") try {
            return la = !0,
            google.browser.product.CHROME && /&sa=D/.test(c.href) ? window.location = c.href: google.nav.go(c.href, s),
            a.preventDefault && a.preventDefault(),
            a.cancelBubble = !0,
            !1
        } catch(g) {
            return ! 0
        }
    }
    function Lb() {
        if (r >= 8) for (var a = document.getElementsByTagName("iframe"), b = 0, c = a.length; b < c; b++) if (a[b].contentWindow == s) {
            c = document.createElement("div");
            c.style.display = "none";
            a[b].parentNode.insertBefore(c, a[b]);
            break
        }
    }
    var Mb = {
        aq: 1,
        aqi: 1,
        aql: 1,
        bih: 1,
        biw: 1,
        bs: 1,
        btnG: 1,
        client: 1,
        cp: 1,
        ds: 1,
        ech: 1,
        gs_id: 1,
        gs_is: 1,
        gs_sm: 1,
        gs_upl: 1,
        hs: 1,
        inm: 1,
        oq: 1,
        p_deb: 1,
        pbx: 1,
        pdl: 1,
        pf: 1,
        pkc: 1,
        pnp: 1,
        pq: 1,
        prmdo: 1,
        psi: 1,
        qe: 1,
        qesig: 1,
        rlz: 1,
        sclient: 1,
        site: 1,
        source: 1,
        sugexp: 1,
        tbo: 1,
        tch: 1,
        tok: 1,
        wrapid: 1,
        xhr: 1
    };
    function Nb(a, b) {
        if (!a) return a;
        for (var c = a.substring(a.indexOf("?") + 1), c = c.split("&"), d = [], e = {},
        g = 0; g < c.length; ++g) {
            var h = c[g],
            i = h.split("=");
            if (i.length == 2 && !Mb[i[0]] && (!b || !b[i[0]]) && !e[i[0]]) i[0] == "q" ? d.push(h.toLowerCase().replace(/\+/g, " ")) : d.push(h),
            e[i[0]] = !0
        }
        d.sort();
        return decodeURIComponent(d.join("&"))
    }
    j.ckc = Nb;
    function Ob() {
        return t
    }
    j.gt = Ob;
    function Pb(a, b, c) {
        var d = function(a) {
            return a != 1
        },
        d = google.msg.send(25, Array.prototype.slice.call(arguments), 3, d),
        e = typeof c == "string" ? c.replace(/^\/search\?/, "#").replace(/^\/images\?/, "#") : y;
        kb(e, {
            _c: "te",
            _ce: b
        },
        d)
    }
    function Qb(a) {
        for (var b = [], c = 0, d = 0, e = 0; c != -1 && e >= c;) c = a.indexOf("<script", e),
        c != -1 && (d = a.indexOf(">", c) + 1, e = a.indexOf("<\/script>", d), d > 0 && e > d && b.push(a.substring(d, e)));
        return b
    }
    function Rb(a) {
        var b = "";
        if (a && (a = a.match(/<title.*?>(.*?)<\/title>/)) && a[1]) b = document.createElement("div"),
        b.innerHTML = a[1],
        b = google.dom.getText(b);
        return b
    }
    function Sb(a, b, c, d) {
        var e = !0;
        try {
            var g = aa(),
            h = !0,
            i,
            p = g.M(h, b, c),
            n = g.K(h, b, c);
            if (google.ucp || d) i = [g.N(h, b, c), n];
            else {
                i = [];
                var u = 5,
                B = g.C(u);
                a && i.push(B);
                i.push(p);
                google.browser.engine.GECKO || i.push(n);
                a || i.push(B);
                i.push(g.L(h, b, c))
            }
            t = g.B(i);
            t.F(Pb);
            e = t.A();
            Tb(t)
        } catch(wa) {
            return ! 1
        }
        try {
            if (!t.D() && (u = 1, i = [p, g.C(u)], v = g.B(i))) v.F(Pb),
            v.A() && Tb(v)
        } catch(ac) {
            v = f
        }
        return e
    }
    function Ub(a) {
        var b = a.lastIndexOf("<\/script>");
        return b < 0 ? a: a.substr(b + 9)
    }
    function Vb(a, b, c, d, e, g) {
        if (google.Toolbelt.hasInURL(["isch"], c) && c.indexOf("&ijn=") != -1) return ! 0;
        if (K != 0) return L.push(function() {
            Vb(a, b, c, d, e, g)
        }),
        !0;
        la = !0;
        if (!google.msg.send(1, [c, d, e])) {
            Y = 1;
            a = (typeof w[c] == "string" ? w[c] : "") + a;
            if (d && w[c]) w[c] = a;
            else if (!d && (delete w[c], a == '"NCSR"')) return Z(7, y, 2, {
                url: c
            }),
            !1;
            return ! 0
        }
        P = !0;
        j.h5h && (y = "#" + c.substring(c.indexOf("?") + 1));
        var h = function() {
            if (google.timers) google.timers.load.t = f,
            google.timers.load.e = f
        };
        d && !w[c] ? (w[c] = !0, j.ss = R(), b && (a = b()), qa[c] = !1, h()) :
        !d && !w[c] ? (j.ss = R(), b && (a = b()), qa[c] = !1, h()) : !d && w[c] ? (typeof w[c] == "string" && (a = w[c] + a), delete w[c]) : typeof w[c] == "string" && (a = w[c] + a, w[c] = !0);
        var i = f;
        try {
            if (s.window.document) i = s.window
        } catch(p) {
            return Z(1, y, 2),
            !1
        }
        S = g || S;
        Ka = c.indexOf("&pf=") > 0;
        Qa = "";
        for (var n = Qb(a), h = [], u = 0; u < n.length; ++u) {
            var B = n[u];
            K != 0 ? h.push(B) : (qa[c] || (qa[c] = !0, ra[c] = !1, Qa || (Qa = Rb(a)), B = B.replace(/location.href/gi, '"' + c + '"')), !ra[c] && /var je=parent.google.j;/.test(B) && (ra[c] = !0), sa = c, Wb(i, B, y))
        }
        if (h.length > 0) {
            for (var wa = "",
            n = 0; n < h.length; ++n) wa += "<script>" + h[n] + "<\/script>";
            d && (wa += Ub(a));
            w[c] || (w[c] = !0);
            L.push(function() {
                Vb(wa, f, c, d, e, g)
            })
        } else if (d)(h = Ub(a)) && (w[c] = h);
        else {
            if (a == '"NCSR"') return Z(7, y, 2, {
                url: c
            }),
            !1;
            else if (!ra[c]) return Z(6, y, 2, {
                url: c
            }),
            !1;
            google.j.l(c);
            window.setTimeout(function() {
                Xb(i)
            },
            0);
            google.msg.send(0, [c, e])
        }
        return ! 0
    }
    function Tb(a) {
        var b = "/" + O();
        a.P(Vb, b);
        a.Q(Nb, b)
    }
    function Wb(a, b, c) {
        try {
            var d = a.document.createElement("script");
            d.text = b;
            a.jesrScriptTags = a.jesrScriptTags || [];
            a.jesrScriptTags.push(d);
            a.document.body.appendChild(d)
        } catch(e) {
            c ? Z(2, c, 2) : H("NSAIST", {},
            e)
        }
    }
    function Xb(a) {
        var b = "gcscript";
        a[b] || (a[b] = function() {
            if (a.jesrScriptTags) for (; a.jesrScriptTags.length;) google.dom.remove(a.jesrScriptTags.shift())
        });
        b = "try{window." + b + "()}catch(e){}";
        Wb(a, b)
    }
    function Yb() {
        q = !1;
        j.init = !1
    }
    j.dj = Yb;
    function _cq() {
        K = 0;
        Ga && window.clearTimeout(Ga);
        for (Ga = 0; L.length > 0;) {
            var a = L.shift();
            a()
        }
    }
    function _q() {
        K++==0 && (Ga = window.setTimeout(_cq, 1E3))
    }
    j.q = _q;
    function _dq() {
        K == 0 || --K > 0 || _cq()
    }
    j.dq = _dq;
    function Zb(a, b, c) {
        b = !/&rct=j/.test(a) && F.test(a) && !Ta(a, !0, void 0, !1, c); ! b && j.bo && (N(j.gwtl(), a), b = !0);
        return b
    }
    function X(a) {
        Ea[sa] = a
    }
    function $b(a) {
        j.init = !1;
        j.h5h = ca && a.h5h;
        try {
            if (google.browser.engine.WEBKIT && s) {
                var b = document.querySelector('iframe[name="wgjf"]');
                if (b && b.src == "/blank.html" && !google.fl) {
                    b.onload = function() {
                        try {
                            google.fl = !0,
                            b.onload = j.l,
                            $b(j.cfg)
                        } catch(a) {
                            H("INIT3", {},
                            a),
                            q = !1,
                            window._gjp && window._gjuc && window._gjp()
                        }
                    };
                    return
                }
            }
        } catch(c) {
            H("INIT4", {},
            c);
            q = !1;
            window._gjp && window._gjuc && window._gjp();
            return
        }
        try {
            if (!s) {
                var d = document.createElement("IFRAME");
                d.name = "wgjf";
                d.style.display = "none";
                d.src = "about:blank";
                document.body.appendChild(d);
                s = d.contentWindow;
                s.addEventListener("load", j.l, !1);
                s.addEventListener("error", j.e, !1)
            }
        } catch(e) {
            H("INIT5", {},
            e);
            q = !1;
            return
        }
        if (j.h5h && !j.psc) window.onpopstate = function() {
            j.psc = !0;
            $b(j.cfg)
        };
        else {
            var d = google.nav.getParam("client"),
            g = google.nav.getParam("source"),
            h = /^mobilesearchapp/;
            if (!h.test(d) && !h.test(g)) {
                if (q = j.en && j[1] && encodeURIComponent && s && google.rein && google.dstr) {
                    if (a.rt && k && (d = a.rt + "", g = ea("rt"), typeof g == "undefined" || g === f || g && g != d)) google.log("jr", ""),
                    Ua(),
                    window.sessionStorage["web-rt"] =
                    d;
                    var d = a.pi,
                    g = a.mcr,
                    h = a.emcrl,
                    i = a.fdst;
                    q = Sb(d, g, h, i)
                }
                if (q) {
                    d = $a.concat(Q("c", "1").co);
                    for (g = 0; g < d.length; g++) q &= !!document.getElementById(d[g])
                }
                try {
                    if (q) {
                        y = "#";
                        S = google.time();
                        Pa = google.sn;
                        j.ss = j.w = R();
                        var p = x().href.match(/.*?:\/\/[^\/]*/)[0];
                        Hb(p);
                        j.trap();
                        google.listen(document, "click", Kb);
                        google.browser.product.IE && google.listen(document, "mousedown", Ib);
                        j.h5h && (va = a.h5l); (j.h5h && x().href != va || !j.h5h && x().hash && x().hash != "#") && V(C);
                        var n = !Eb();
                        zb();
                        Fb();
                        window.wgjp && window.wgjp();
                        google.msg.listen(32,
                        Zb);
                        j.h5h ? (rb(), pb(void 0, !0, n), window.onpopstate = qb, window.onhashchange = sb) : typeof window.onhashchange != "undefined" || !google.browser.engine.IE && window.hasOwnProperty("onhashchange") ? ($(1, n), window.onhashchange = tb) : vb(1, n);
                        if (y == "#") document.body.style.display = "",
                        document.body.style.visibility = "",
                        Da = !0;
                        Lb();
                        j.init = !0;
                        google.med && google.med("jesrLoaded")
                    } else google.j.en != 0 && H("INIT1", {}),
                    window._gjp && window._gjuc && window._gjp()
                } catch(u) {
                    H("INIT2", {},
                    u),
                    q = !1,
                    window._gjp && window._gjuc && window._gjp()
                }
            }
        }
    }
    $b(j.cfg);
})();
 (function() {
    var f = void 0,
    i = null;
    var l = function() {
        j();
        aa(!0)
    },
    j = function() {
        ba();
        google.dom.remove(n("knavm"))
    },
    ca = function(a) {
        var b = n("knavm");
        return b ? google.msg.send(34, [b.parentNode, a], !1) : !1
    },
    ga = function(a, b) {
        da();
        var c = a;
        google.style.hasClass(a, "knavi") || (c = ea(a));
        c ? fa(c, b) : j()
    },
    da = function() {
        for (var a = [], b = n("topstuff"), c = n("rtr"), b = [["li.ta\\w", n("tadsto")], ["li.ta\\w", n("tads")], ["p.ssp", b], ["div.e", b], ["li.(g|ta\\w|bkgi)", n("res"),
        function(a) {
            var b;
            a: {
                b = 4;
                if (a && c) for (; (a = a.parentNode) && b--;) if (a == c) {
                    b = !0;
                    break a
                }
                b = !1
            }
            return ! b
        }],
        ["a.pn", n("nav")], ["li", n("rhs_block")]], d = 0, e; e = b[d++];) if (e[1]) for (var h = google.dom.getAll(e[0], e[1]), g = 0, k; k = h[g++];) if ((k.nodeName == "A" || google.dom.get("a", k)) && (!e[2] || e[2](k)) && !google.style.hasClass(k, "noknav")) google.style.addClass(k, "knavi"),
        a.push(k);
        return a
    },
    ea = function(a) {
        if (a) for (; (a = a.parentNode) && !google.style.hasClass(a, "knavi"););
        return a
    },
    ba = function() {
        var a = ea(n("knavm"));
        a && google.style.removeClass(google.dom.get("a.noline", a), "noline")
    },
    aa = function(a) {
        var b = n("center_col");
        if (!b ||
        !google.style.hasClass(b.parentNode, "fade")) {
            var b = da(),
            c = b.length,
            d = ea(document.activeElement) || ea(n("knavm")),
            e = 0,
            a = a ? 1: -1;
            if (d) for (var h = 0, g; g = b[h]; ++h) if (g == d) {
                e = h + a;
                break
            }
            for (; e >= 0 && e < c && b[e].offsetHeight <= 0;) e += a;
            e < 0 ? (window.scrollBy(0, -(document.body.scrollTop || document.documentElement.scrollTop)), ha(p.w), j()) : e < c && (g = b[e], fa(g, !0), d && google.msg.send(35, [g]))
        }
    },
    fa = function(a, b) {
        ba();
        var c = n("knavm");
        if (!c) c = google.dom.create("span", "&#9658;"),
        c.id = "knavm",
        c.title = ia.kntt || "";
        if (!a.style.position) a.style.position =
        "relative";
        a.appendChild(c);
        c.style.paddingTop = google.style.getComputedStyle(a, "padding-top", !0);
        var c = document.body.scrollTop || document.documentElement.scrollTop,
        d = document.documentElement.clientHeight,
        e = google.style.getPageOffsetTop(a),
        h = a.offsetHeight,
        g = e < c;
        if (g || e + h > c + d) window.scrollBy(0, (b ? Math.min(e, e - (d - h) / 2) : g ? e: e + h - d) - c);
        c = a;
        c.nodeName != "A" && (c = google.dom.getAll("a.l", a), c = c.length == 1 ? c[0] : google.dom.get("a", a));
        google.style.addClass(c, "noline");
        try {
            c.focus()
        } catch(k) {}
    };
    var ja = {
        0: 1,
        19: 1,
        30: 1,
        32: 1,
        33: 1,
        35: 1
    },
    ka = function(a) {
        return ! a ? "Google": a + " - " + (ia.gs || "Google Search")
    },
    la = function(a) {
        var b = a.lastIndexOf(" ");
        return b != -1 ? a.substr(0, b) : a
    },
    na = function() {
        this.C = new ma;
        this.w = new r;
        this.results = new s(this.w);
        this.J = !0;
        this.wa = 0;
        this.ga = i
    },
    pa = function() {
        var a = p;
        a.results.clear();
        a = a.w;
        t(a, "", !0);
        oa();
        u.go("#");
        var b = v();
        b && b != "#" && google.nav.go("#");
        document.title = ka("");
        ha(a)
    },
    sa = function(a, b, c) {
        w(!0);
        b ? x(a.w, "inline") : a.clear();
        c ? (qa(a.results, b), a = a.results, y(a,
        ""), ra(a.D)) : (c = a.results, c.H = c.F.N, z(!a.results.A.ca || a.results.A.ca.nodeName != "INPUT" ? "": a.results.A.ca.value, b) || y(a.results, ""))
    };
    na.prototype.clear = function() {
        this.w.clear(); ! (this.results.B && this.results.B != "#" || this.results.G) || this.results.clear()
    };
    var ya = function(a) {
        var b = p,
        c = ta(a) && (ua || !va());
        wa(c);
        c && !b.J ? (google.msg.listen.apply(i, xa), b.J = !0, A(b.results, a || "#"), B.sv && (B.sv({
            addPsj: !1
        }), B.uhi && B.uhi())) : !c && b.J && b.T();
        B.sv && B.sv({
            setAqToFirstSuggestion: b.J
        });
        c && C(b.w) ? x(b.w, "inline") : x(b.w, "none");
        D("po-bar", c || va());
        E(b.C, b.C.L.ta)
    };
    na.prototype.T = function() {
        google.msg.unlisten.apply(i, xa);
        this.J = !1;
        this.clear();
        this.results.T();
        google.msg.send(37, [!1])
    };
    var Ba = function() {
        var a = p,
        b = va();
        try {
            window.localStorage && (window.localStorage["web-psy-sc"] = google.time() + "")
        } catch(c) {}
        return b ? !1: !ua ? (a.T(), za(a.C, a.C.L.ta, 1), Aa(), u.sjcv && u.sjcv({
            csiSlowMarker: 2
        }), B.sv && (B.sv({
            addPsj: !0
        }), B.uhi && B.uhi()), !0) : !1
    },
    va = function() {
        var a;
        try {
            if (!window.localStorage) return ! 1;
            a = window.localStorage.getItem("web-psy-sc")
        } catch(b) {}
        if (!a) return ! 1;
        if (typeof a.value == "string") a = a.value;
        a = parseInt(a, 10);
        var c = google.time();
        if (a > 0 && c - a < 864E5) return ! 0;
        try {
            window.localStorage.removeItem("web-psy-sc")
        } catch(d) {}
        return ! 1
    },
    Ea = function(a) {
        var b = p;
        if (!a || !(a.indexOf("/complete/search?") != -1 && Ca && b.w.I == i)) if (++b.wa > 6) Da();
        else if (!b.ga) b.ga = F(function() {
            return p.wa > 0
        },
        function() {
            Da()
        },
        4E3)
    },
    ma = function() {
        this.L = {
            Na: new G(2, 0, 1, 2),
            Ma: new G(2, 0, 2, 2),
            Oa: new G(2, 0, 3, 2),
            Aa: new G(0, 100, 5),
            ta: new G(1, 50, 0)
        };
        var a = n("pocs");
        this.A = {
            C: a,
            La: a ? a.getElementsByTagName("div") : []
        };
        this.qa = this.X = i
    },
    H = function(a) {
        var b = i,
        c;
        for (c in a.L) {
            var d = a.L[c];
            if (d.na && (!b || d.Ea > b.Ea)) b = d
        }
        return b
    },
    za = function(a, b, c) {
        var d = H(a);
        b.na = !0;
        if (!b.xa) b.aa =
        c;
        b = H(a);
        a.X && a.X.finish();
        if (a.A.C) {
            for (var c = a.A.C.id + b.Pa, e = 0, h; h = a.A.La[e++];) h.style.display = h.id == c ? "": "none";
            a.A.C.className = b.aa == 2 ? "sft": "";
            I("subform_ctrl", !1);
            I("sbfrm_l", !1);
            D("sflinks", !1);
            a.A.C.style.display = "";
            b != d && google.log("1", ["1&ei=", google.kEI, "&rsm=", b.reason].join(""))
        }
    },
    E = function(a, b) {
        b.na = !1;
        var c = H(a);
        if (c) za(a, c, c.aa);
        else {
            for (var d in a.L) a.L[d].na = !1;
            if (a.A.C) a.A.C.style.display = "none";
            p.results.B && (I("subform_ctrl", !0), I("sbfrm_l", !0));
            google.sn == "webhp" && D("sflinks",
            !0);
            a.X && a.X.finish()
        }
    },
    Fa = function() {
        var a = p.C,
        b = H(a);
        if (a.A.C && a.A.C.style.display == "" && b && !(b.xa || b.aa == 2)) {
            var c = a.A.C;
            a.X && a.X.finish();
            a.X = google.fx.animate(150, [[c, "backgroundColor", "#fff1a8", "#ffffff"]],
            function() {
                c.style.backgroundColor = ""
            });
            c.className = "sft";
            b.aa = 2
        }
    },
    Ga = function(a) {
        if (a.qa) window.clearTimeout(a.qa),
        a.qa = i
    },
    Da = function() {
        var a = p.C,
        b = p.C.L.Aa;
        Ga(a);
        za(a, b, 1);
        a.qa = F(function() {
            return b == H(p.C)
        },
        function() {
            Fa();
            b.xa = !0;
            b.aa = 2
        },
        1E4)
    },
    G = function(a, b, c, d) {
        this.na = !1;
        this.Pa = a;
        this.Ea = b;
        this.reason = c;
        this.xa = !!d;
        this.aa = d || i
    },
    s = function(a) {
        this.A = {
            ca: n("grey"),
            $: i
        };
        this.G = this.B = i;
        this.H = this.F.N;
        this.M = 0;
        this.ba = !1;
        this.ra = 0;
        this.ea = "1";
        this.ka = this.da = this.fa = i;
        this.D = a
    },
    Ha = function(a, b) {
        return a.H != a.F.Q && a.ba ? !1: a.G == i || J(K(a, b), a.G)
    },
    Ka = function(a, b) {
        if (a.H != a.F.Q) {
            var c = a.G;
            a.D.setSuggestions(b);
            a.H == a.F.N && (Ia(a, L(a.D)), L(a.D) && J(a.G, c) && y(a, a.D.I || ""));
            Ja(a);
            return ! 0
        }
        return ! 1
    },
    Na = function(a, b) {
        if (Ka(a, b)) {
            La(a);
            var c = L(a.D);
            a.D.ha && (c = la(c));
            Ma(a, M(a, c), 500);
            return ! 0
        }
        return ! 1
    };
    s.prototype.T = function() {
        Oa("")
    };
    var Pa = function(a) {
        if (a.H != a.F.Q && a.G == i) a.G = ""
    },
    Ta = function(a) {
        var b = p.results,
        c = b.D.I || "";
        b.ea = N("fp", a) || "1";
        w(!1);
        b.B = Qa(b, a);
        b.D.I == i && (c = P(b.B));
        b.H == b.F.N && y(b, c);
        a = b.H == b.F.Q;
        b.M = a ? 2: 0;
        Ra(b);
        a && Sa(b);
        google.msg.send(37, [!1])
    },
    Qa = function(a, b) {
        var c = C(a.D);
        if (/[A-Z]/.test(c)) {
            var d = P(b);
            if (z(d, c, !0)) return c = Ua("q", b, c + d.substr(c.length)),
            b.indexOf("%20") == -1 && c.indexOf("%20") != -1 && (c = c.replace(/%20/g, "+")),
            c
        }
        return b
    },
    Va = function(a) {
        var b = p.results;
        if (!b.B) return ! a || a == "#";
        b = u.ckc(b.B.substr(1));
        a = u.ckc(a.substr(1));
        return b == a
    },
    Ia = function(a, b) {
        a.D.ha && (b = la(b));
        a.H = a.F.N;
        if (Wa(a, M(a, b))) {
            var c = M(a, b);
            Q.ja(c) && Q.Z(c)
        }
    },
    A = function(a, b, c) {
        a.H = a.F.Q;
        y(a, "");
        R();
        c = Wa(a, b, c);
        if (!c && a.M != 2) S(a, 3),
        a.M = 2,
        Sa(a),
        Ja(a);
        if (b = P(b)) a.D.za = b;
        return c
    },
    qa = function(a, b) {
        a.H = a.F.Ca;
        if (Wa(a, M(a, b))) {
            var c = M(a, b);
            if (c) if (Q.ja(c)) Q.Z(c);
            else {
                var d = a.G;
                if (d) {
                    var e = M(a, P(d));
                    F(function() {
                        var a = p.results,
                        b = J(a.G, d),
                        c = !J(d, K(a, a.B)),
                        a = a.H == a.F.Ca;
                        return b && c && a
                    },
                    function() {
                        Q.Z(e + "&pf=p&pdl=300")
                    },
                    300)
                }
            }
        }
    },
    Ya = function() {
        var a =
        p.results,
        b = a.D;
        if (b.S || b.W == 0) return ! 1;
        var c = C(b),
        d = L(b);
        return d != c ? (t(b, z(d, c, !0) ? c + d.substr(c.length) : d, !0), y(a, ""), Xa(b), !0) : !1
    };
    s.prototype.clear = function() {
        La(this);
        T(this);
        U(this);
        Za();
        this.B = i;
        this.G = "";
        this.ra = 0;
        this.H = this.F.N;
        this.M = 0;
        this.ba = !1;
        y(this, "");
        this.ba = !1;
        E(p.C, p.C.L.ta);
        google.msg.send(37, [!0])
    };
    var Za = function() {
        u.clr();
        Oa("");
        $a(!1);
        if (ab()) for (var a = ["leftnav", "rhs", "foot", "bfoot"], b = 0, c; c = a[b++];) I(c, !1)
    },
    U = function(a) {
        if (a.ka != i) window.clearTimeout(a.ka),
        a.ka = i
    },
    y = function(a, b) {
        T(a);
        bb(a);
        var c = a.D.A.O;
        if (!a.A.$) google.dom.insert(a.A.$ = google.dom.set(google.dom.create("div.lst"), "position", "absolute", "top", "-900px", "left", "-9000px", "maxWidth", "3000px", "overflow", "hidden", "width", "auto"), c);
        var d = a.A.$;
        if (d && d.nodeName == "INPUT") d.value = C(a.D);
        c = d.offsetWidth + 5 > c.offsetWidth ? "": cb(C(a.D),
        b);
        if ((d = a.A.ca) && d.nodeName == "INPUT") d.value = c
    },
    db = function(a) {
        return a.M != 2 ? (a.M = 2, Sa(a), !0) : !1
    },
    Ja = function(a) {
        var b = a.D,
        c = P(a.B),
        d = C(b),
        e = c == la(d.replace(/ +$/, "")),
        h = b.ha && e,
        g = P(a.G);
        if (! (d == g && d != c && e)) {
            a = a.B;
            e = d;
            g = /[sxl]/.test(b.R) && b.R.indexOf("d") == -1 || /[grm]/.test(b.R) || !z(L(b), eb(C(b)), !0) || h;
            b = ia;
            h = document.getElementById("msg_box");
            d = !1;
            if (g && c && !fb(c, e)) if ((g = document.getElementById("topstuff")) && g.style.visibility != "hidden") for (var g = g.getElementsByTagName("p"), k = 0, m; m = g[k]; ++k) {
                if (/\bsp_cnt\b/.test(m.className) ||
                /\bssp\b/.test(m.className)) {
                    d = !0;
                    break
                }
            } else d = !0;
            else d = !0;
            if (d) {
                if (h) h.style.display = "none"
            } else {
                for (var d = e, e = google.util.escape(e), c = google.util.escape(c), e = eb(e), h = gb(e, c, !1, "<b><i>", "</i></b>"), g = e, e = [], k = c.replace(/\s+<\/b>/g, "</b> "), c = g.replace(/^\s+/g, "").replace(/\s{2,}/g, " ").split(" "), g = {
                    U: "",
                    Y: 0,
                    K: 0,
                    P: 0
                },
                k = k.split(" "), o; g.P < k.length; ++g.P) o = k[g.P],
                g.K == c.length ? e.push(o, " ") : (m = c[g.K], fb(m, o) ? (++g.K, e.push(o, " ")) : (hb(m, o, c, k, g, !0), m = ib(g.Y, g.K == c.length, o, g.U, "<b><i>", "</i></b>"),
                e.push(m, " ")));
                c = jb(e.join(""));
                if (e = document.getElementById("msg_box")) document.getElementById("msg_box_entered").innerHTML = h,
                document.getElementById("msg_box_rendered").innerHTML = c,
                e.style.display = "block";
                else if (a) a = K(p.results, a).replace(/^#/, "/search?"),
                (e = kb()) && (a += "&" + e),
                g = a + "&spell=1",
                a = a.replace(/([#&\?]q=)[^&#]*/g, "$1" + encodeURIComponent(d) + "&nfpr=1&ei=" + google.kEI + "&sqi=2"),
                e = google.dom.create("div"),
                e.id = "msg_box",
                e.innerHTML = ['<p style="margin-top:0"><nobr><span class="spell">', b.srf,
                ' </span><a id="msg_box_rendered" class="spell" href="', g, '" onclick="return google.psy.h(event)">', c, '</a>.</nobr> <nobr><span class="spell">', b.sif, ' </span><a id="msg_box_entered" class="spell" href="', a, '" onclick="return google.psy.r(event)">', h, "</a></nobr><br></p>"].join(""),
                b = document.getElementById("topstuff"),
                b.firstChild ? google.dom.insert(e, b.firstChild) : b.appendChild(e)
            }
        }
    },
    nb = function(a) {
        var b = p.results;
        Ia(b, a);
        lb(b, M(b, a), 2);
        mb()
    },
    lb = function(a, b, c) {
        if (Ha(a, b)) {
            U(a);
            a.ba = !0;
            Za();
            y(a,
            "");
            ra(a.D);
            a.B = i;
            for (var d in p.C.L) if (a = p.C.L[d], a.reason == c) {
                za(p.C, a, 2);
                break
            }
        }
    },
    ob = function() {
        var a = p.results.B;
        return a ? a.replace(/^.*\?/, "") : "#"
    },
    pb = function(a) {
        var b = p.results;
        return Ha(b, a) && b.H != b.F.N
    },
    qb = function(a, b) {
        var c = N("fp", b);
        c && a.ea != "1" && a.ea != c && (b = Ua("fp", b, a.ea));
        return b
    },
    rb = function(a, b) {
        var c = v();
        c != "" && (c = c.substring(1));
        a && a[0] == "#" && (a = a.substring(1));
        var c = u.ckc(c, b),
        d = u.ckc(a, b);
        return c == d
    };
    s.prototype.F = {
        N: 0,
        Q: 1,
        Ca: 2
    };
    s.prototype.Fa = {
        deb: i,
        filter: i,
        lr: i,
        nfpr: i,
        q: i,
        start: 0,
        tbm: i,
        tbs: i
    };
    var K = function(a, b) {
        if (!b || b == "#") return "";
        var c = sb(b),
        d = [],
        e;
        for (e in a.Fa) {
            var h = a.Fa[e],
            g = c[e];
            e == "q" && g && (g = decodeURIComponent(g.replace(/\+/g, "%20")), g = tb ? g.replace(tb, "") : g, g = encodeURIComponent(g.toLowerCase()));
            g === f && h != i && (g = h);
            g !== f && d.push(e + "=" + g)
        }
        d.sort();
        return "#" + d.join("&")
    },
    J = function(a, b) {
        return decodeURIComponent(a || "") == decodeURIComponent(b || "")
    },
    Wa = function(a, b, c) {
        a.G = K(a, b);
        a.ba = !1;
        a.ra = 0;
        if (!P(a.G)) return ! 1;
        if (J(K(a, a.B), a.G)) return Ra(a),
        !Q.ja(b) || !!c;
        La(a);
        T(a);
        U(a);
        ub(a);
        a.H != a.F.Q && (Ma(a, b, 3E3), google.msg.send(46, [P(a.G)]));
        return ! 0
    },
    S = function(a, b, c) {
        google.msg.send(47, [b]);
        var b = ["1&sqi=", b, "&ei=", google.kEI, "&q=", P(a.B)],
        d = N("tbs", a.B || "");
        b.push(d ? "&tbs=" + d: "");
        a = N("tbm", a.B || "");
        b.push(a ? "&tbm=" + a: "");
        c && (c.charAt(0) != "&" && b.push("&"), b.push(c));
        google.log("1", b.join(""))
    },
    $a = function(a) {
        I("center_col", a);
        I("subform_ctrl", a)
    },
    Oa = function(a) {
        var b = n("center_col");
        if (b)(b.parentNode.className = a) || $a(!0)
    },
    Ra = function(a) {
        Oa("");
        a.M == 0 && bb(a);
        U(a)
    },
    vb = function() {
        var a =
        p.results;
        T(a);
        U(a);
        google.msg.send(44, [a.B, a.G]) && (Oa("fade"), j())
    },
    ub = function(a) {
        U(a);
        var b = a.B;
        if (b) a.H != a.F.N ? vb() : a.ka = F(function() {
            var a = p.results;
            return b == a.B && !J(a.G, K(a, b))
        },
        function() {
            vb()
        },
        wb)
    },
    Sa = function(a) {
        if (a.B && a.B != "#") {
            var b = ka(P(a.B));
            if (document.title != b) document.title = b;
            window.setTimeout(xb, 0);
            if (rb(a.B, {
                fp: 1
            })) {
                if (!rb(a.B, {})) return u.h5h ? u.sl(window.location, a.B, !0) : (window.location.replace(window.location.href.replace(/#.*/, "") + a.B), google.msg.send(43, [a.B, !0])),
                !0
            } else return u.h5h ?
            u.sl(window.location, a.B) : (u.ahr ? window.location.replace(window.location.href.replace(/#.*/, "") + a.B) : window.location.hash = a.B, google.msg.send(43, [a.B])),
            !0
        }
        return ! 1
    },
    yb = function(a) {
        Sa(a) && google.browser.product.CHROME && parseInt(google.browser.product.version, 10) < 7 && window.history.pushState && window.history.pushState({},
        document.title)
    },
    bb = function(a) {
        a.fa != i && T(a);
        var b = a.B;
        if (b) a.fa = F(function() {
            var a = p.results;
            return b == a.B && a.M == 0
        },
        function() {
            var a = p.results;
            Sa(a);
            if (a.B.indexOf("&pf=") > -1) {
                var b =
                n("msg_box");
                S(a, 1, b && b.style.display != "none" ? "&p_fprl=1": "")
            }
            a.M = 1
        },
        3E3)
    },
    La = function(a) {
        if (a.da) window.clearTimeout(a.da),
        a.da = i
    },
    Ma = function(a, b, c) {
        if (! (a.da != i || p.w.ia)) {
            var d = K(a, b);
            if (b && P(b)) {
                b[0] == "#" && (b = "/search?" + b.substr(1));
                var e = qb(a, b);
                a.da = F(function() {
                    var a = p.results,
                    b = J(d, a.G),
                    a = !J(K(a, e), K(a, a.B));
                    return b && a && !zb(P(d))
                },
                function() {
                    Q.Z(e + "&pf=p&pdl=" + c)
                },
                c)
            }
        }
    },
    M = function(a, b) {
        u.hsa(a.D.A.ma, !1, !1, !0);
        var c = google.jesrstate;
        if (!c) return "";
        var c = Ua("q", c, b),
        d = kb();
        d && (c += "&" + d);
        return qb(a,
        "/search?" + c.substr(1))
    },
    cb = function(a, b) {
        if (!b || !a) return "";
        var c = google.util.unescape(b.replace(/<[^>]*>/g, ""));
        if (z(c, a, !0)) return a + c.substr(a.length);
        var d = b.match(/<b>([^<]*)<\/b>/g);
        if (d) {
            var d = google.util.unescape(d[d.length - 1].replace(/<[^>]*>/g, "")),
            e = a.replace(/[,|"'<>\/\\]/g, "").replace(/\s+/g, " ").replace(/^ | $/g, "");
            if (d && c.lastIndexOf(d) >= e.length) return a[a.length - 1] == " " && d[0] == " " ? a + d.substring(1) : a + d
        }
        return ""
    },
    T = function(a) {
        if (a.fa) window.clearTimeout(a.fa),
        a.fa = i
    },
    r = function() {
        var a =
        document.gs || document.f;
        this.A = {
            ma: a,
            O: a.q,
            oa: n("misspell"),
            ua: n("xbtn")
        };
        this.S = !0;
        this.I = i;
        this.za = this.R = "";
        this.W = 0;
        this.ha = this.ia = !1;
        this.la = i
    };
    r.prototype.clear = function() {
        C(this) || x(this, "none");
        if (this.I != i) this.I = "";
        this.R = "";
        this.W = 0;
        ra(this);
        this.S = !0;
        Ab(this);
        B.hs();
        R();
        Bb(this)
    };
    var C = function(a) {
        return a.A.O.value
    },
    L = function(a) {
        return a.I ? Cb(a.I) : C(a)
    };
    r.prototype.getHeight = function() {
        if (this.S || this.W == 0) return 0;
        var a = B.sb();
        return a ? Math.max(a.offsetHeight - 2, 0) : this.W * 22 + 1
    };
    var Db = function(a, b) {
        if (b && b.length) for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d && d[a.V.Da] in ja) return d
        }
        return i
    };
    r.prototype.setSuggestions = function(a) {
        this.W = 0;
        this.R = this.I = "";
        if (a && a.length) {
            this.W = a.length;
            if (a = Db(this, a)) this.I = a[this.V.va],
            this.R = a[this.V.Ba] || "";
            this.S = !1
        }
        var b = this.I || "";
        F(function() {
            return b == (p.w.I || "")
        },
        function() {
            Xa(p.w)
        },
        0)
    };
    var ra = function(a) {
        if (a.A.oa) a.A.oa.innerHTML = ""
    },
    Xa = function(a) {
        if (a.A.oa) {
            var b = "";
            if (/[sxl]/.test(a.R) && a.R.indexOf("d") == -1) {
                var c = google.util.escape(C(a)),
                d = a.I || "";
                c && d && (b = gb(c, d, !0))
            }
            a.A.oa.innerHTML = b
        }
    },
    ha = function(a) {
        a.A.ma.q.offsetHeight <= 0 || a.A.O.focus()
    },
    Eb = function(a, b) {
        var c = a.A.O;
        c.setSelectionRange ? c.setSelectionRange(b, b) : c.createTextRange && (c = c.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select())
    },
    Ab = function(a) {
        a.ia = !1;
        E(p.C, p.C.L.Na);
        E(p.C, p.C.L.Ma);
        E(p.C, p.C.L.Oa)
    },
    Fb = function(a) {
        var b = p.w;
        Bb(b);
        if (a) {
            var c = P(a);
            b.la = F(function() {
                if (B.isr()) return ! 1;
                var a = B.cq(),
                b = p.w.I ? Cb(p.w.I) : "";
                return (!Ca || p.w.I != i) && p.results.H == p.results.F.N && a.toLowerCase() != c.toLowerCase() && (!b || !z(b, c, !0))
            },
            function() {
                qa(p.results, c);
                mb()
            },
            3E3)
        }
    },
    Gb = function(a) {
        var b = p.w.A;
        b.O = a;
        if (b.$) google.dom.remove(b.$),
        b.$ = i
    };
    r.prototype.V = {
        va: 0,
        Da: 1,
        Ba: 2,
        Ta: 3
    };
    var t = function(a, b, c) {
        if (!fb(b, C(a))) a.A.O.value = b,
        B.ui(!c);
        b ? x(a, "inline") : a.clear()
    },
    Cb = function(a) {
        return google.util.unescape(a.replace(/<[^>]*>/g, ""))
    },
    x = function(a, b) {
        var c = a.A.ua;
        if (c) c.style.display = b
    },
    Bb = function(a) {
        if (a.la) window.clearTimeout(a.la),
        a.la = i
    };
    var gb = function(a, b, c, d, e) {
        if (a.length > 70) return a;
        var b = b.replace(/\s+<\/b>/g, "</b> "),
        h = [],
        g;
        g = [];
        for (var k = [], m, o = a.length, q = 0; q < o;) {
            for (m = []; q < o && a.charAt(q) == " ";) m.push(" "),
            ++q;
            m.length ? (m = m.join(""), k.length ? k.push(" " + (m.length > 1 ? m.substring(1).replace(/ /g, "&nbsp;") : "")) : k.push(m.replace(/ /g, "&nbsp;")), m = []) : k.push("");
            for (; q < o && a.charAt(q) != " ";) m.push(a.charAt(q)),
            ++q;
            g.push(m.join(""))
        }
        g = {
            Ua: g,
            ya: k
        };
        a = g.Ua;
        g = g.ya;
        m = google.util.unescape(b.replace(/<[^>]*>/g, "")).split(" ");
        for (var b =
        {
            U: "",
            Y: 0,
            K: 0,
            P: 0,
            ya: g
        },
        k = a && a.length || 0, o = m && m.length || 0, O; b.K < k && b.P < o; ++b.P) q = a[b.K],
        O = m[b.P],
        h.push(g[b.K]),
        fb(q, O) ? (++b.K, h.push(q)) : (hb(q, O, a, m, b, !1), d = d || "<span class=misspelled>", e = e || "</span>", h.push(ib(b.Y, b.K == k, q, b.U, d, e)));
        if (c) return h = h.join(""),
        d = h.lastIndexOf(e + ""),
        d < 0 ? "": h.substring(0, d + e.length);
        c = b.K;
        if (c < k) {
            for (h.push(g[c], d); c < k;) h.push(a[c++], g[c]);
            h.push(e);
            b.K = c
        }
        return h.join("")
    },
    fb = function(a, b) {
        return ! a && !b ? !0: !!a && !!b && a.toLowerCase() == b.toLowerCase()
    },
    z = function(a, b,
    c) {
        c && (a = a.toLowerCase(), b = b.toLowerCase());
        return b.length <= a.length && a.substring(0, b.length) == b
    },
    eb = function(a) {
        return a.replace(/^\s+|\s+$/g, "").replace(/  +/g, " ")
    },
    hb = function(a, b, c, d, e, h) {
        e.K = Hb(b, c, e.K, e, !h);
        if (!e.Y) e.P = Hb(a, d, e.P, e, h, f),
        ++e.K,
        e.Y > 0 && --e.P
    },
    Hb = function(a, b, c, d, e, h) {
        d.U = [];
        for (var g = d.Y = 0, k = a.length, m = b.length, o = b[c], q = d.ya; g < k && z(a.substring(g), o);) {
            e && (g && d.U.push(q ? q[c] : " "), d.U.push(h ? h[c] : o)); ++d.Y;
            g += o.length;
            if (++c == m) break;
            o = b[c]
        }
        d.U = d.U.join("");
        return c
    },
    ib = function(a,
    b, c, d, e, h) {
        d = d && d.length ? jb(d) : c;
        return a == 1 && b ? d: [e, d, h].join("")
    },
    jb = function(a) {
        if (!a) return "";
        var b = a.length - 1;
        return a.substr(b) == " " ? a.substr(0, b) : a
    };
    function Ib() {
        function a(a) {
            return {
                api: a,
                ab: a.a,
                cb: a.b,
                $a: a.c,
                tb: a.d,
                Ja: a.e,
                qb: a.f,
                rb: a.g,
                Ia: a.h,
                pb: a.i,
                Sa: a.j,
                Z: a.k,
                ja: a.l,
                db: a.m,
                Ga: a.n,
                eb: a.o,
                hb: a.p,
                ib: a.q,
                Ha: a.r,
                gb: a.s,
                Ra: a.t,
                Qa: a.u,
                ub: a.v
            }
        }
        var b = window.google.comm;
        return ! b ? i: {
            Za: function(c, d) {
                var e = b.h(c, d);
                return a(e)
            },
            Ka: function(b) {
                return a(b.api)
            },
            bb: b.a,
            jb: b.b,
            kb: b.c,
            lb: b.d,
            nb: b.e,
            mb: b.f,
            Ya: b.g,
            ob: b.i,
            Xa: b.j
        }
    };
    var p,
    ia,
    ua,
    Jb,
    tb,
    V,
    Kb,
    Lb,
    Mb = !1,
    u = google.j,
    B = google.ac,
    Q = i,
    Nb = 50,
    Ob = 250,
    Pb = 41,
    Qb = {},
    Rb = {},
    W = {},
    Sb = i,
    X = i,
    Ca = !1,
    Tb = !1,
    Ub = "",
    wb = 1E3,
    Vb = {
        e: 1,
        expflags: 1,
        expid: 1,
        ion: 1,
        escfg: 1
    },
    n = function(a) {
        return document.getElementById(a)
    },
    v = function() {
        var a;
        a = u.h5h ? u.h5s() : google.nav.getLocationHash();
        return Wb(a)
    },
    Wb = function(a) {
        if (a && a != "#") return a;
        a = window.location.search || "";
        return ab() && a ? u.h5h ? u.h5s() : "#" + a.substr(1) : ""
    },
    D = function(a, b) {
        var c = n(a);
        if (c) c.style.display = b ? "": "none"
    },
    Yb = function(a, b) {
        Xb(a, "display",
        b ? "block": "none")
    },
    I = function(a, b) {
        var c = n(a);
        if (c) c.style.visibility = b ? "visible": "hidden"
    },
    Zb = function(a) {
        Xb(".nojsv", "visibility", a ? "visible": "hidden")
    },
    N = function(a, b, c, d) {
        return (a = b.match("[&?#]" + a + "=([^&#]*)")) && a[1] != f ? (c = decodeURIComponent(c ? a[1].replace(/\+/g, " ") : a[1]), d ? c.toLowerCase() : c) : i
    },
    Y = function(a, b) {
        return N(a, b) != i
    },
    Ua = function(a, b, c) {
        return b.replace(RegExp("([#?&]" + a + "=)[^&#]*"), "$1" + (c ? encodeURIComponent(c) : ""))
    },
    P = function(a) {
        return ! a ? "": N("q", a, !0, !0) || ""
    },
    sb = function(a) {
        if (!a) return {};
        for (var a = a.substr(Math.max(a.indexOf("?"), a.indexOf("#")) + 1).split("&"), b = {},
        c = 0; c < a.length; ++c) {
            var d = a[c];
            d && (d = d.split("="), b[d[0]] = d[1] || "")
        }
        return b
    },
    kb = function() {
        var a = sb(window.location.search || ""),
        b = [],
        c;
        for (c in a) Vb[c] && b.push(c + "=" + a[c]);
        return b.join("&")
    },
    zb = function(a) {
        return !! a && (a.length > 100 || Jb.test(a))
    },
    Z = function(a) {
        return ! a || !a.replace(/\s+|\u3000+/g, "")
    },
    F = function(a, b, c) {
        return window.setTimeout(function() {
            a() && b()
        },
        c)
    },
    R = function() {
        var a = p.w.getHeight(),
        b = B.vh && B.vh();
        google.msg.send(41,
        [a]) && $b(!1, a, b)
    },
    oa = function() {
        ac();
        for (var a = document.gs || document.f, b = ["prmdo", "tbo", "tbm", "tbs"], c = 0, d; d = b[c++];) google.dom.remove(a[d]);
        google.sn = "webhp";
        if (b = n("searchform")) google.style.addClass(b, "jhp"),
        c = n("mgmhppd"),
        b.style.top = Ob + (c && c.style.display == "" ? c.offsetHeight: 0) + "px";
        Yb(".jsb", !0);
        Yb(".nojsb", !1);
        Zb(!1);
        B.ps();
        if (!p || !p.J) {
            var e = a.q.value;
            F(function() {
                return e == a.q.value
            },
            function() {
                a.q.value = "";
                B.ui();
                a.q.focus()
            },
            0)
        }
    },
    ta = function(a) {
        return ! (a && a != "#" && (bc(a) || Sb && google.Toolbelt.hasInURL(Sb,
        a)))
    },
    ab = function() {
        var a = n("searchform");
        return !! a && google.style.hasClass(a, "jsrp")
    },
    Aa = function() {
        D("po-on-message", !1);
        D("po-off-message", !1);
        D("po-off-sc-message", !0);
        D("po-sc-lm", !0);
        var a = n("po-on");
        google.style.removeClass(a, "po-selected");
        google.style.addClass(a, "po-unselected");
        a = n("po-off");
        google.style.removeClass(a, "po-unselected");
        google.style.addClass(a, "po-selected")
    },
    mb = function() {
        p.w.S = !0;
        B.hs();
        R()
    },
    wa = function(a) {
        a ? B.sv({
            pp_msg1: "<b>Welcome to Google Instant</b>",
            pp_msg2: "Results with every letter.",
            pp_msg3: "Learn more",
            pp_url: "/instant/#utm_campaign=launch3&utm_medium=rpp&utm_source=en"
        }) : B.sv({
            pp_url: "",
            pp_msg1: "",
            pp_msg2: "",
            pp_msg3: ""
        })
    },
    xb = function() {
        if (Ub) {
            var a = ob();
            rb(a, {
                fp: 1
            }) && (document.readyState == "complete" ? cc() : google.listen(window, "load", cc))
        }
    },
    Xb = function(a, b, c) {
        for (var a = google.dom.getAll(a, n("searchform")), d = 0, e; e = a[d++];) e.style[b] = c
    },
    dc = function(a, b, c) {
        u.hsa(p.w.A.ma, !1, !1, !0);
        var d = google.jesrstate;
        if (!d) return b;
        var d = d.substring(1),
        b = [a, "pf=p"],
        a = sb(a),
        e = sb(d),
        h = google.nav.getParam("safe");
        h && !Y("safe", d) && (e.safe = h);
        for (var g in e) g != "pq" && a[g] === f && b.push(g + "=" + e[g]);
        c && b.push("bs=1");
        return b.join("&")
    },
    ec = function(a, b) {
        function c(a, b) {
            this.Va = a;
            this.Wa = b
        }
        b === f && (b = a);
        var d = {
            subform_ctrl: new c(0, 1),
            pocs: new c(0, 1),
            beta: new c(0, -1)
        };
        if (google.Toolbelt.hasInURL(["isch"], String(p.results.B))) d.center_col = new c(1, 0),
        d.rgsh_s = new c( - 1, 1),
        d.tbbcc = new c( - 1, 1);
        d.leftnav = Tb ? new c(0, -0.768) : new c( - 1, 0);
        google.Toolbelt.hasInURL(["mbl"], ob()) || (d.rhs = new c(0, -1));
        var e = {},
        h;
        for (h in d) e[h] =
        d[h].Va * a + d[h].Wa * b;
        return e
    },
    $b = function(a, b, c) {
        var d = b;
        if (Y("escfg", window.location.href)) {
            var e = B.sb();
            e && (b += google.style.getPageOffsetTop(e), e = google.style.getPageOffsetTop(n("main")), b = Math.max(0, b - e))
        }
        var h = ec(b, c),
        e = {},
        g;
        for (g in h) {
            var k = n(g);
            if (k) {
                var m = k.offsetTop;
                e[g] = k.style.marginTop;
                k.style.marginTop = h[g] + "px";
                if (g == "leftnav" && (k.style.minHeight = b + "px", b == 0 && Tb)) k.style.marginTop = "19px";
                if (google.browser.product.IE && !a && e[g] != k.style.marginTop && m + h[g] != k.offsetTop) {
                    for (g in e) if (a =
                    n(g)) a.style.marginTop = e[g];
                    F(function() {
                        return ! 0
                    },
                    function() {
                        $b(!0, d, c)
                    },
                    0);
                    return
                }
            }
        }
        google.msg.send(52, [b])
    },
    fc = function(a) {
        a.preventDefault && a.preventDefault();
        a = p;
        t(a.w, "", !0);
        a.clear();
        ha(a.w);
        return ! 1
    },
    w = function(a) {
        var b = n("mgmhppd"),
        c = n("searchform"),
        d = b && b.style.display == "";
        if (google.sn == "webhp" && (google.sn = "web", d && c)) c.style.top = c.offsetTop - b.offsetHeight + "px",
        b.style.display = "none";
        var d = b && d ? b.offsetHeight: 0,
        b = Pb + d,
        e = Ob + d;
        I("hplogo", !1);
        I("prm", !1);
        I("cpf", !1);
        I("footer", !1);
        I("ssleh",
        !1);
        Yb(".jsb", !1);
        if (c) if (google.style.removeClass(c, "jhp"), d = google.style.getPageOffsetTop(c), d == e || !a && d != b) {
            if (!document.gs) document.f.name = "gs";
            var h = (e = B.sb()) ? parseInt(e.style.top, 10) : 0,
            g = h - (d - b);
            if (a) a = google.fx.easeInAndOut,
            c = [[c, "top", d, b, a]],
            e && c.push([e, "top", h, g, a]),
            google.fx.animate(Nb, c, gc);
            else {
                c.style.top = b + "px";
                if (e) e.style.top = g + "px";
                gc()
            }
        } else gc()
    },
    gc = function() {
        Yb(".nojsb", !0);
        Zb(!0)
    },
    hc = function() {
        var a = document.activeElement;
        return a && !(p.w.A.ma.q.offsetHeight <= 0) && !/^(?:INPUT|TEXTAREA|SELECT)$/.test(a.nodeName)
    },
    ic = function(a) {
        a = a || window.event;
        a.persisted || t(p.w, "", !0)
    },
    kc = function(a) {
        var a = a || window.event,
        b = a.keyCode,
        c = Rb[b],
        d = W[b];
        if (a.altKey || a.ctrlKey || a.metaKey || !Qb[b] && !c && !d) {
            if (b == 13) {
                for (a = a.target || a.srcElement; a && a.nodeName != "A";) a = a.parentNode;
                if (a) {
                    if (a.onmousedown) a.onmousedown();
                    c = a.href;
                    if (/\/(url|aclk)\?/.test(c) && !Y("kb", c) && (Y("usg", c) || Y("sig", c))) a.href += "&kb=1"
                }
            }
            return ! 0
        }
        if (hc()) if (d) if (b == 9) j();
        else {
            if (b == 40) aa(!0);
            else if (b == 38) aa(!1);
            else if ((b == 37 || b == 39) && !ca(b == 39)) return ! 0;
            a.preventDefault &&
            a.preventDefault();
            return a.returnValue = !1
        } else {
            var d = p.w,
            e = C(d).length;
            c && e > 0 && (d.A.O.value += " ", ++e);
            if (b == 27) return d.A.O.select(),
            !1;
            else Eb(d, e),
            ha(d),
            jc(b, a);
            F(function() {
                return ! 0
            },
            function() {
                b != 27 && google.log("fif", ["&ei=", google.kEI, "&psi=", N("psi", window.location.href), "&kc=", b].join(""));
                B.ui()
            },
            0)
        }
        return ! 0
    },
    bc = function(a) {
        a = N("deb", a);
        return a != i && !/^0(?:j\d*|mobile|tablet)*$/.test(a)
    },
    lc = function(a, b, c, d, e) {
        if (d) return ! 0;
        else b && (a = b());
        try {
            typeof a == "string" && (a = eval("(" + a + ")"));
            var h =
            a[1];
            if (B.shr(a[0], h)) {
                var g = p.results;
                if (g.D.I == i) {
                    var k,
                    m = g.D,
                    o = Db(m, h);
                    k = o ? Cb(o[m.V.va]) : i;
                    Ia(g, k ? k: C(g.D))
                }
            }
        } catch(q) {
            google.ml(q, !1, {
                _response: a,
                _url: c,
                _isPartial: d,
                _opt_fromCache: e
            })
        }
        return ! 0
    },
    mc = function() {
        var a = N("escfg", window.location.href);
        if (a) {
            var b = function() {
                return ! 1
            };
            google.srp.updateLinksWithParam("escfg", a, b, b)
        }
    },
    cc = function() {
        if (window.google._bfr != "1") {
            var a = n("lpu");
            if (!a) a = google.dom.create("link"),
            a.id = "lpu",
            a.rel = "prerender",
            google.dom.append(a);
            a.href = Ub
        }
    },
    oc = function(a) { (!p ||
        !p.J) && nc(a)
    };
    if (window.gbar && window.gbar.qs) {
        var nc = window.gbar.qs;
        window.gbar.qs = oc
    }
    var pc = function(a, b) {
        var c = B.ru();
        if (!c) return ! 0;
        c = N("ds", c) || "";
        return b != c ? (B.ds(), p.w.clear(), !0) : !1
    },
    jc = function(a, b) {
        if (b && (b.altKey || b.ctrlKey || b.metaKey)) return ! 0;
        var c = C(p.w),
        d = a == 39 && B.cp() == c.length,
        e = B.sa();
        if (a == 9) {
            if (e) B.ui();
            else if (!Ya()) return ! 0;
            return ! 1
        }
        if (d) return e ? Kb && (yb(p.results), B.rd(!0)) : Ya(),
        !1;
        var h = a == 46;
        a != 38 && a != 40 && (Pa(p.results), F(function() {
            var a = C(p.w);
            return a != c && !(Z(a) && Z(c)) || h && a == c && c != ""
        },
        function() {
            sa(p, C(p.w), h)
        },
        0));
        return ! 0
    },
    qc = function(a, b) {
        var c = p;
        c &&
        c.J && (Pa(c.results), sa(c, a, b == 46), t(c.w, a, !0))
    },
    rc = function(a, b, c, d, e) {
        u.bo = !0;
        b = d + b;
        c = ",#searchform";
        d = "";
        e || (b = Math.max(b, 70), c = "", d = "#searchform div{visibility:hidden}#logocnt{visibility:visible}#searchform{top:12px!important}");
        e = n("p_chrome");
        google.dom.remove(e);
        e = document.createElement("style");
        e.type = "text/css";
        e.id = "p_chrome";
        c = ["#gb,#ghead,#gbar,#gac_scont,#subform_ctrl,#sfcnt,#gog", c, "{display:none}#cnt{padding-top:0;position:relative;top:", b, "px}", d].join("");
        google.browser.engine.IE ?
        e.styleSheet.cssText = c: e.appendChild(document.createTextNode(c));
        google.dom.append(e);
        if (e = n("pocs")) {
            c = n("pocsC");
            if (!e.parentNode || e.parentNode.id != "pocsC") {
                if (!c) c = google.dom.create("DIV"),
                c.id = "pocsC",
                google.dom.append(c);
                d = n("oPocsC");
                if (!d) d = google.dom.create("DIV"),
                d.id = "oPocsC",
                e.parentNode.insertBefore(d, e);
                c.appendChild(e)
            }
            google.dom.set(c, "position", "absolute", "top", b + "px", "left", a + "px")
        }
    },
    ac = function() {
        google.dom.remove(n("p_chrome"));
        var a = n("oPocsC");
        a && (a.appendChild(n("pocs")), google.dom.remove(n("pocsC")))
    },
    sc = function(a, b) {
        var c = n("p_chrome");
        if (c) c.className = "dep";
        else if (b) c = document.createElement("style"),
        c.type = "text/css",
        c.id = "p_chrome",
        c.className = "dep",
        google.dom.append(c);
        F(function() {
            var a = n("p_chrome");
            return a && a.className == "dep"
        },
        function() {
            u.bo = !1;
            ac();
            var c = p;
            if (c && c.J) {
                c.w.clear();
                if (b) {
                    t(c.w, a, !1);
                    var e = M(c.results, a);
                    e && google.nav.go(e)
                } else t(c.w, a, !0);
                c.w.A.O.blur();
                V && l()
            }
        },
        b ? 0: 500)
    },
    tc = function() {
        var a = X;
        a && qc(a.value, a.verbatim ? 46: 0)
    },
    uc = function() {
        var a = X;
        a && sc(a.value, !0)
    },
    vc =
    function() {
        var a = X;
        a && sc(a.value, !1)
    },
    wc = function() {
        var a = X;
        a && rc(a.x, a.y, 0, a.height)
    },
    yc = function() {
        var a = X = xc();
        if (a) a.onchange = tc,
        a.onsubmit = uc,
        a.oncancel = vc,
        a.onresize = wc,
        a.value && (wc(), tc()),
        a.setSuggestions && google.msg.listen(39,
        function(b, c, d) {
            for (var b = p.w, d = {
                query: d
            },
            e = d.suggestions = [], h = 0, g; g = c[h++];) {
                var k = g[b.V.Da],
                m = (g[b.V.Ba] || "").replace(/^\d*/g, ""),
                k = {
                    type: k + m,
                    value: g[b.V.va]
                };
                g = g[b.V.Ta] || [];
                g.length && (k.renderingInfo = g);
                e.push(k)
            }
            a.setSuggestions(d)
        })
    },
    xc = function() {
        if (navigator) {
            var a =
            navigator.searchBox;
            if (a) return a
        }
        return google.browser.product.ANDROID_TABLET ? (a = window.chrome) && a.searchBox: i
    },
    zc = window.location.origin || window.location.protocol + "//" + window.location.host,
    Bc = {
        clear: function() {
            p && (p.J ? (p.clear(), t(p.w, "", !0)) : (ya("#"), pa()))
        },
        historyUpdate: function(a) {
            window.location.replace(a.state)
        },
        ping: function() {
            p.results.B && p.results.B != "#" || p.results.G ? $() : Ac('["shrinkFrame"]')
        }
    },
    Cc = function(a) {
        try {
            return google.browser.engine.IE ? eval("(" + a + ")") : (new Function("return " + a))()
        } catch(b) {
            return ["",
            {}]
        }
    },
    Ac = function(a) {
        window.top && window.top.postMessage && window.top.postMessage(a, zc)
    },
    $ = function() {
        var a = document.documentElement,
        a = a.clientHeight != a.scrollHeight ? a.scrollHeight: a.offsetHeight,
        a = Math.max(a, 400);
        Ac('["expandFrame",{"height": "' + a + 'px"}]')
    },
    Dc = function() {
        u.h5h = !1;
        u.bo = !0;
        u.ahr = !0;
        google.listen(window, "message",
        function(a) {
            if (a.origin == zc && (a = Cc(a.data)) && a.length) {
                var c = Bc[a[0]];
                c && c(a[1])
            }
        });
        var a = v();
        P(a) && $();
        google.msg.listen(37,
        function(a) {
            a && p.J && (Ac('["shrinkFrame"]'), oa(),
            u.go("#"), (a = v()) && a != "#" && window.location.replace("#"))
        });
        google.msg.listen(48, $);
        google.msg.listen(0, $);
        google.msg.listen(31,
        function(a) {
            a != "#" && $()
        });
        google.msg.listen(10,
        function(a) {
            Z(a) || $();
            return ! 0
        });
        google.msg.listen(43,
        function(a) {
            Ac('["pushHistory",{"state":"' + a + '"}]')
        })
    };
    google.psy = {
        d: function() {
            B.ds()
        },
        h: function(a) {
            a = a || window.event;
            if (a.ctrlKey || a.metaKey) return ! 0;
            D("msg_box", !1);
            Ya();
            var b = p.results;
            db(b) && S(b, 2);
            B.p(a);
            return ! 1
        },
        i: function(a, b, c, d, e, h, g) {
            rc(0, 0, 0, 0, !0);
            google.msg.listen(37, d, 10, h);
            p.results.A.ca = c;
            Gb(b.q);
            b.onsubmit = function() {
                var a = M(p.results, !b.q || b.q.nodeName != "INPUT" ? "": b.q.value);
                a && google.nav.go(a);
                return ! 1
            };
            Pb = 0;
            g || (g = 52);
            google.msg.listen(41,
            function(a) {
                rc(0, 0, 0, Math.max(a - g, 0), !0);
                return ! 1
            });
            google.msg.unlisten(13, pc);
            B.sv({
                insideFrame: a,
                installForm: b
            });
            a = B.cfg();
            B.i(b, b.q, "", "", "", a);
            google.msg.listen(13, pc);
            u.bo = !0
        },
        m: function(a) {
            var b = p.results;
            b.M == 0 && (T(b), db(b) && S(b, a))
        },
        pf: function(a) {
            p && Q && p.J && (a = u.fb(a), Y("fp", a) || (a += "&fp=1"), a = qb(p.results, a), Y("pf", a) ? a = Ua("pf", a, "p") : a += "&pf=p", Q.ja(a) || Q.Z(a))
        },
        q: function() {
            return p ? P(ob()) : ""
        },
        qs: function(a) {
            var b = google.util.eventTarget(a);
            if (b) {
                for (; b && b != document.body && !google.style.hasClass(b, "qs");) b = b.parentNode;
                if (b && b != document.body && google.style.hasClass(b, "qs")) b.href = Ua("site",
                b.href, "")
            } (!p || !p.J) && google.srp.qs(a)
        },
        r: function(a) {
            a = a || window.event; ! a.ctrlKey && !a.metaKey && (db(p.results), mb())
        },
        t: function(a) {
            google.util.togglePopup("po-box", a)
        }
    };
    var xa = [18,
    function(a) { (a == "leftnavc" || a == "rhscol" || a == "sbfrm_l") && R();
        a == "search" && Ja(p.results);
        a = p;
        if (a.ga) window.clearTimeout(a.ga),
        a.ga = i;
        E(p.C, p.C.L.Aa);
        a.wa = 0;
        return ! 0
    },
    26,
    function() {
        var a = p.results,
        a = a.H == a.F.Q;
        p.T();
        return a
    },
    1,
    function(a, b) {
        if (p.w.ia) return lb(p.results, a, 2),
        !1;
        else if (N("pnp", a)) return lb(p.results, a, 1),
        !1;
        if (b) {
            var c;
            a: {
                c = p.results;
                if (Ha(c, a) && (U(c), ++c.ra % 5 == 0)) {
                    c = !0;
                    break a
                }
                c = !1
            }
            return c
        }
        return Ha(p.results, a) ? (Ab(p.w), U(p.results), !0) : !1
    },
    24,
    function(a) {
        return ! rb(a,
        {
            fp: 1
        }) && !Y("escfg", window.location.href)
    },
    19,
    function() {
        return ob().replace(/\%20/g, "+")
    },
    51,
    function(a) {
        var b = kb();
        return qb(p.results, a) + (b ? "&" + b: "")
    },
    42,
    function(a) {
        p.results.ea = a
    },
    2,
    function(a) {
        if (a = a.target || a.srcElement) {
            for (var b; ! (b = a.nodeName == "A") && (a = a.parentNode););
            if (b) {
                if (a.id == "logo" && !ab()) return pa(),
                !1;
                else if (a == p.w.A.ua) return ! 0;
                b = N("sqi", a.href);
                a = a.href.indexOf("/url?") != -1 || a.href.indexOf("/aclk?") != -1;
                if (b || a) {
                    if (a = p.results, a.M != 2) a.M = 2,
                    yb(a)
                } else a = p.results,
                db(a) && S(a,
                2)
            }
        }
        return ! 0
    },
    3,
    function(a) {
        a = Wb(a);
        return Ha(p.results, a) && (U(p.results), P(a)) ? (w(!1), A(p.results, a)) : !0
    },
    4,
    function(a, b) {
        if (!b) {
            var c = p.results;
            if (c.H == c.F.Q || c.G == i) a != C(c.D) && c.D.clear(),
            y(c, ""),
            t(c.D, a, !1),
            Xa(c.D),
            Ja(c);
            u.trap()
        }
        return i
    },
    21,
    function(a) {
        return ! C(p.w) ? a: i
    },
    30,
    function(a, b) {
        if (a == 1 || a == 3 || a == 4) return p.T(),
        2;
        else if (a == 0 || a == 2 || a == 7 || a == 6 || a == 8) return pb(b) ? (p.T(), 2) : (Ea(), 3);
        return 1
    },
    25,
    function(a, b, c) {
        return b == 21 || b == 0 || b == 1 || b == 12 || b == 9 ? pb(c) ? (p.T(), 2) : (Ea(c), 3) : 1
    },
    6,
    function(a,
    b) {
        var c = p.results;
        c.B = Qa(c, b);
        if (a == "search" || a == "main" && ab() && !P(b)) b = Wb(b),
        Ta(b),
        google.msg.send(40, [P(b)]);
        return ! 0
    },
    45, R, 8,
    function() {
        return ! 1
    },
    9,
    function(a, b, c, d, e, h, g) {
        e ? p.w.ia = !0: Ab(p.w);
        p.w.ha = !!g && a.lastIndexOf(" ") != a.length - 1;
        c = p.results;
        Pa(c);
        if (h === !1) return ! 1;
        F(function() {
            return ! 0
        },
        function() {
            R()
        },
        0);
        h = !1;
        e ? nb(a) : h = d ? Na(c, b) : Ka(c, b);
        google.msg.send(39, [L(p.w), b, a]);
        return h
    },
    10,
    function(a, b) {
        if (! (a != b && (!Z(a) || !Z(b)))) return ! 1;
        if (Z(a)) return p.clear(),
        !1;
        var c = p.results;
        if (! (c.H != c.F.N &&
        P(c.G) == a)) c = p.results,
        c.H = c.F.N;
        return ! 0
    },
    23,
    function(a, b) {
        if (b != a || a != L(p.w)) p.w.clear(),
        B.ct();
        return ! 0
    },
    11,
    function() {
        var a = p.w;
        if (a = !(!a.S && a.W != 0) || !C(a)) p.w.S = !0;
        return a
    },
    12,
    function(a, b, c, d, e, h) {
        d == -1 ? (Ia(p.results, L(p.w)), y(p.results, p.w.I || "")) : sa(p, h, !0)
    },
    13, pc, 14, jc, 22,
    function() {
        p.w.S = !1;
        R();
        w(!0);
        return ! 0
    },
    15,
    function(a, b) {
        var c = p;
        Ab(c.w);
        mb();
        try {
            c.w.A.O.blur()
        } catch(d) {}
        V && !b && F(function() {
            return ! 0
        },
        l, 0);
        return b || A(c.results, M(c.results, a))
    },
    16,
    function(a, b) {
        var c = p.w.za,
        d = c && Lb ?
        c: i,
        c = a.indexOf("?"),
        e = a.indexOf("#"),
        h = c > -1 ? sb(e > -1 ? a.substr(0, e) : a) : {},
        c = c > -1 ? a.substr(0, c + 1) : a + "?",
        e = e > -1 ? a.substr(e) : "";
        d === i ? delete h.pq: h.pq = d ? encodeURIComponent(d) : "";
        var d = [],
        g;
        for (g in h) d.push(g + "=" + h[g]);
        g = a = [c, d.join("&"), e].join("");
        c = P(a);
        if (zb(c)) return Ia(p.results, c),
        lb(p.results, dc(a, g, b), 3),
        mb(),
        "";
        a = a.replace(/[&\?]client=[^&]*/, "");
        a = a.replace("/complete/search", "/s");
        c = dc(a, g, b);
        Fb(c);
        return Ca ? (Q.Z(c), g + "&sclient=psy") : c
    },
    17,
    function(a, b) {
        b == 15 && Ba() && (Q.Qa(), Q.Sa(), Q.Ra());
        return ! 1
    },
    27,
    function() {
        return ! 1
    },
    28,
    function() {},
    29,
    function() {}],
    Ec = [31,
    function() {
        V && hc() && l()
    },
    0,
    function(a, b) {
        if (p.J && b && N("pf", a)) {
            var c = p.results;
            if (c.H == c.F.Q) S(c, 3),
            c.M = 2
        }
        V && hc() && l();
        mc();
        window.setTimeout(xb, 0);
        return ! 0
    },
    7,
    function(a) {
        a = Wb(a);
        ya(a);
        if ((!a || a == "#") && !ab()) return pa(),
        !0;
        if (!p.J) return w(!1),
        !0;
        if (Va(a)) return ! 1;
        p.w.clear();
        A(p.results, a);
        return ! 0
    }],
    Fc = [5,
    function(a, b) {
        ya(a);
        return p.J && !A(p.results, a, b) && Va(a) ? i: a
    },
    100],
    Gc = [7,
    function(a) {
        a = Wb(a);
        a == "#" || !a ? oa() : w(!1);
        return ! 0
    },
    5,
    function(a) {
        w(!1);
        return a
    }],
    Hc = function(a) {
        try {
            if (Ub = a.lpu, Kb = a.fl, B && B.sv && B.sv({
                showFeelingLuckyLinks: a.fl
            }), !Mb && (B && B.sv && B.sv({
                fullWidth: !0
            }), D("searchform", !0), u && u.init)) {
                a.hpt && (Ob = a.hpt);
                a.rpt && (Pb = a.rpt);
                var b = a.tct;
                b && (tb = RegExp("[" + b + "]+$"));
                a.mds && (Sb = a.mds.split(","));
                Jb = RegExp("\\b(?:(?:(?:cache" + (a.odef ? "": "|define") + "):)|\\d+\\.{3}\\d+\\b)");
                ua = a.optIn;
                V = a.kn;
                Lb = a.pq;
                Tb = a.mtss;
                ia = a.msg;
                var c = v(),
                d = P(c);
                d ? w(!1) : google.sn = "webhp";
                var e = !a.optIn && va();
                if (a.optOut || e || bc(c) || !B) {
                    var h =
                    ta(c);
                    D("po-bar", h);
                    h && e && Aa();
                    B.sv && B.sv({
                        addPsj: e,
                        colorQuerySuggestionWithLinks: !0,
                        showSearchButtons: !1
                    });
                    if (u.sjcv && (a.optOut || e)) u.sjcv({
                        csiSlowMarker: a.optOut ? 1: 2
                    });
                    google.msg.listen.apply(i, Gc);
                    B.uhi && B.uhi()
                } else {
                    "tdur" in a && (Nb = a.tdur);
                    "fd" in a && (wb = a.fd);
                    google.msg.listen.apply(i, xa);
                    google.msg.listen.apply(i, Ec);
                    google.msg.listen.apply(i, Fc);
                    B.sv && (B.sv({
                        addPbx: !0,
                        addPsj: e,
                        allowHideSuggestions: !1,
                        clearParamsOnPrefetch: !0,
                        colorQuerySuggestionWithLinks: !0,
                        executeQueryOnEsc: !0,
                        showSearchButtons: !1,
                        smallLearnMoreDisclaimer: !0,
                        useKeyDown: !0,
                        showSpeechRecognitionAlternatives: !0
                    }), wa(!0));
                    B.uhi && B.uhi();
                    u.sjcv && u.sjcv({
                        shouldBlur: !1
                    });
                    u.gt && ((Q = Ib().Ka(u.gt())) && B.st && B.st(Q), Q.Ja([a.avgTtfc || 0, a.avgTtlc || 0, a.avgCbt || 0], [a.maxTtfc || 0, a.maxTtlc || 0, a.maxCbt || 0]), (Ca = !google.ucp && (Q.Ga() || Q.Ha())) && Q.Ia(lc, "/s"));
                    p = new na;
                    ya(c);
                    p.J && d && (A(p.results, c), Ta(c), mc(), V && l());
                    var g = p.w.A.ua;
                    g && google.listen(g, "click", fc);
                    google.listen(google.browser.product.FIREFOX ? window: document.body, "keydown", kc);
                    a.ophe &&
                    google.browser.product.SAFARI && !google.browser.product.IPAD && "onpagehide" in window && google.listen(window, "pagehide", ic);
                    if (a.focus) {
                        Qb[8] = Qb[27] = Qb[63] = 1;
                        for (var a = [[48, 57], [65, 90], [96, 111], [186, 221]], b = 0, k; k = a[b++];) for (var m = k[0]; m <= k[1]; ++m) Rb[m] = 1
                    }
                    V && (W[40] = W[38] = W[9] = W[37] = W[39] = 1, google.msg.listen(36, ga));
                    y(p.results, "");
                    Mb = !0;
                    yc();
                    if (!X) {
                        var o = window.chrome;
                        o || (o = window.chrome = {});
                        o.userInput = qc;
                        o.setDropdownDimensions = rc;
                        o.userWantsQuery = sc;
                        var q = o.setSuggestResult;
                        q && google.msg.listen(39,
                        q);
                        var O = o.onRender;
                        O && google.msg.listen(40, O)
                    }
                    Y("escfg", window.location.href) && Dc();
                    xb()
                }
            }
        } catch(Ic) {
            throw u.dj(),
            Ic;
        }
    };
    google.register(92, {
        init: Hc,
        jesrLoaded: Hc
    });
})();
 (function() {
    var e = void 0,
    g = null,
    i;
    var aa = this,
    k = function() {},
    ba = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    ca = function(a, b, c) {
        var d = b || aa;
        if (arguments.length > 2) {
            var f = Array.prototype.slice.call(arguments, 2);
            return function() {
                var b = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(b, f);
                return a.apply(d, b)
            }
        } else return function() {
            return a.apply(d, arguments)
        }
    },
    l = function(a, b, c) {
        l = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ba: ca;
        return l.apply(g, arguments)
    },
    da =
    function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    },
    ea = Date.now ||
    function() {
        return + new Date
    };
    Function.prototype.bind = Function.prototype.bind ||
    function(a, b) {
        if (arguments.length > 1) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return l.apply(g, c)
        } else return l(this, a)
    };
    function n(a) {
        this.b = a
    }
    n.prototype.Y = function() {
        var a = this.b[1];
        return typeof a === "string" ? a: ""
    };
    n.prototype.fa = function() {
        var a = this.b[2];
        return typeof a === "number" ? a: -1
    };
    function _gel(a) {
        return document.getElementById(a)
    }
    function _urlesc(a) {
        return window.encodeURIComponent ? window.encodeURIComponent(a) : escape(String(a))
    }
    function _urlunesc(a) {
        return window.decodeURIComponent ? window.decodeURIComponent(a) : unescape(String(a))
    }
    function _argsUrl(a) {
        var b = {};
        var a = a || document.location.href,
        c = a.indexOf("?");
        if (c == -1) a = "";
        else var d = a.indexOf("#"),
        a = (d == -1 ? a.substr(c + 1) : a.substr(c + 1, d - c - 1) + "&" + a.substr(d + 1)).split("&");
        for (c = 0; c < a.length; c++) {
            var f = a[c].indexOf("=");
            f != -1 && (d = a[c].substring(0, f), f = a[c].substring(f + 1), f = f.replace(/\+/g, " "), b[d] = _urlunesc(f))
        }
        return b
    }
    function _jesc(a) {
        return a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"')
    }
    function _sendx(a, b, c, d) {
        var f = google.xhr();
        f.open(d ? "POST": "GET", a, !0);
        if (b) f.onreadystatechange = function() {
            f.readyState == 4 && b(c && f.responseXML ? f.responseXML: f.responseText)
        };
        f.send(d || g)
    }
    function _sendxstatus(a, b) {
        var c = google.xhr();
        c.open("HEAD", a, !0);
        c.onreadystatechange = function() {
            c.readyState == 4 && b(c.status)
        };
        c.send(g)
    }
    function o(a) {
        _sendx("/ig/cp/fail?reason=" + a)
    }
    function _windowWidth() {
        if (typeof window.innerWidth == "number") return window.innerWidth;
        else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
        else if (document.body && document.body.clientWidth) return document.body.clientWidth
    }
    function _hashCode(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c),
        b %= 4294967296;
        return b
    };
    var p = function(a, b) {
        this.Ma = a;
        this.Na = b || g;
        this.ea = {}
    },
    q = function(a, b, c) {
        if (a.ea[b]) return g;
        a.ea[b] = c;
        return a
    },
    r = function(a) {
        if (a.Ma == "") a = "()";
        else {
            var b = '("' + a.Ma + '",' + (a.Na ? '"' + a.Na + '"': "null"),
            c = [],
            d;
            for (d in a.ea) c.push('"' + d + '":"' + a.ea[d] + '"');
            a = b + (c.length == 0 ? "": ",{" + c.join(",") + "}") + ")"
        }
        return a
    };
    var s = function(a) {
        a = new n(a);
        this.z = a.b[11];
        this.Xa = a.b[3] || k;
        this.Ca = a.b[5] || k;
        var b = a.b[9];
        this.Aa = (typeof b === "function" ? b: g) || k;
        this.ja = this.sa = k;
        this.na = window.onresize;
        this.Wa = window.onscroll;
        this.S = a.fa();
        this.Za = this.z.ipt;
        this.Da = {
            errorText: this.z.cou,
            closeText: this.z.ccw
        };
        this.I = -1;
        this.Ya = !1;
        this.T = [];
        this.J = g;
        this.ma = this.N = !1;
        this.g = this.ba = g;
        this.ya = document.body && document.body.style.overflow ? document.body.style.overflow: g;
        this.za = document.body && document.body.parentNode && document.body.parentNode.style.overflow ?
        document.body.parentNode.style.overflow: g
    },
    fa = function(a) {
        a = new s(a);
        t(t(t(t(t(t(t(a, q(new p("photos", a.z.pg ? a.z.pg: e), "type", "featured")), new p("photo-upload", a.z.cpyc ? a.z.cpyc: e)), new p("photos", a.z.cpyppt ? a.z.cpyppt: e)), q(new p("recently-picked", a.z.cpyrpt ? a.z.cpyrpt: e), "mode", "photos")), new p("")), new p("")), q(new p("icon", e), "type", "homepage"));
        return a
    },
    t = function(a, b) {
        a.T.push(b);
        return a
    };
    s.prototype.gb = function() {
        if (!this.k || !this.N) {
            this.sa();
            var a = document.createElement("style");
            a.type = "text/css";
            a.styleSheet ? a.styleSheet.cssText = "#pickerContainer {position: absolute;background-color: #F6F5F6;border: 0;width: auto;padding: 0;z-index: 1001;-webkit-box-shadow: rgba(0,0,0,.3) 7px 7px 14px;-moz-box-shadow: rgba(0,0,0,.3) 7px 7px 14px;box-shadow: rgba(0,0,0,.3) 7px 7px 14px;}.pickerFrame {width: 715px;height: 400px;border: 0;overflow: hidden;z-index: 1002;}div.onePickMsg {background: #FFF;font-size: 1em;text-align: center;}div.errorText {padding-top: 140px;padding-bottom: 15px;}.pickerBg {background-color: #999;position: absolute;top: 0;left: 0;opacity: .5;filter: alpha(opacity = 50);z-index: 1000;}":
            a.appendChild(document.createTextNode("#pickerContainer {position: absolute;background-color: #F6F5F6;border: 0;width: auto;padding: 0;z-index: 1001;-webkit-box-shadow: rgba(0,0,0,.3) 7px 7px 14px;-moz-box-shadow: rgba(0,0,0,.3) 7px 7px 14px;box-shadow: rgba(0,0,0,.3) 7px 7px 14px;}.pickerFrame {width: 715px;height: 400px;border: 0;overflow: hidden;z-index: 1002;}div.onePickMsg {background: #FFF;font-size: 1em;text-align: center;}div.errorText {padding-top: 140px;padding-bottom: 15px;}.pickerBg {background-color: #999;position: absolute;top: 0;left: 0;opacity: .5;filter: alpha(opacity = 50);z-index: 1000;}"));
            google.dom.append(a);
            this.ba = ga(this);
            this.J = ha(this);
            this.N = !1;
            this.I = window.setTimeout(l(this.pa, this), 5E3);
            this.k = document.createElement("div");
            this.k.id = "pickerContainer";
            this.k.style.display = "none";
            this.k.appendChild(this.ba);
            this.k.appendChild(this.J);
            document.body.appendChild(this.k);
            this.J.contentWindow._pickerCallback = l(this.ab, this);
            if (!this.g) this.g = document.createElement("div"),
            this.g.className = "pickerBg",
            this.g.style.display = "none",
            document.body.appendChild(this.g)
        }
        this.k.style.display =
        "block";
        if (this.J.style.display == "block") this.g.style.display = "block",
        this.U();
        ia(this)
    };
    var ja = function(a) {
        for (var b = google.kHL, c = a.S, d = a.Za, f = a.T[0] ? r(a.T[0]) : "", h = 1; h < a.T.length; ++h) f += "," + r(a.T[h]);
        b = {
            hl: b,
            hostId: "gws",
            authuser: c,
            protocol: "injected",
            title: d,
            minSize: "800x600",
            icons: "false",
            learnMore: "180720",
            white: "true",
            actions: "loaded",
            nav: "(" + f + ")"
        };
        a.Ya && (b.actionPane = "legal");
        var a = "",
        j;
        for (j in b) a += _urlesc(j) + "=" + _urlesc(b[j]) + "&";
        return "/ajax/picker?" + a.slice(0, -1)
    },
    ha = function(a) {
        var b;
        google.browser.engine.kb && (document.documentMode != e ? document.documentMode != 9: 1) ? b = document.createElement('<iframe frameBorder="0" scrolling="no">') :
        (b = document.createElement("iframe"), b.frameBorder = "0", b.scrolling = "no");
        b.style.display = "none";
        b.src = ja(a);
        var c = function() {
            a.ma = !0;
            if (!a.N) window.clearTimeout(a.I),
            a.I = window.setTimeout(l(a.pa, a), 2E3);
            google.unlisten(b, "load", c)
        };
        google.listen(b, "load", c);
        return b
    },
    ga = function(a) {
        var b = document.createElement("div");
        b.id = "onePickMsg";
        b.className = "onePickMsg pickerFrame";
        b.style.display = "none";
        var c = document.createElement("div");
        c.className = "errorText";
        c.innerHTML = a.Da.errorText;
        var d = document.createElement("a");
        d.href = "javascript:void(0)";
        d.innerHTML = a.Da.closeText;
        d.onclick = function() {
            u(a)
        };
        b.appendChild(c);
        b.appendChild(d);
        return b
    };
    s.prototype.pa = function() {
        if (!this.N) try {
            this.J.contentWindow.location.href.search("/ajax/picker") < 0 ? this.Aa() : this.ma ? (this.g.style.display = "block", this.U(), this.ba.style.display = "block", this.ja()) : this.I = window.setTimeout(l(this.pa, this), 5E3)
        } catch(a) {
            this.Aa()
        }
    };
    var u = function(a) {
        window.clearTimeout(a.I);
        a.g.style.display = "none";
        a.k.style.display = "none";
        document.body.style.overflow = a.ya ? a.ya: "";
        if (document.body.parentNode) document.body.parentNode.style.overflow = a.za ? a.za: "";
        window.onresize = a.na;
        window.onscroll = a.Wa;
        if (!a.N) {
            if (a.k.parentNode) a.k.parentNode.removeChild(a.k),
            a.k = g;
            if (a.g.parentNode) a.g.parentNode.removeChild(a.g),
            a.g = g;
            a.ma = !1
        }
    };
    s.prototype.U = function() {
        if (this.k && this.k.style.display == "block" && this.g && this.g.style.display == "block") {
            var a,
            b = a = 0;
            if (window.innerHeight) a = window.innerWidth,
            b = window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) a = document.documentElement.clientWidth,
            b = document.documentElement.clientHeight;
            a = {
                width: a,
                height: b
            };
            var c = b = 0;
            if (typeof window.pageYOffset == "number") b = window.pageXOffset,
            c = window.pageYOffset;
            else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) b =
            document.body.scrollLeft,
            c = document.body.scrollTop;
            else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) b = document.documentElement.scrollLeft,
            c = document.documentElement.scrollTop;
            b = {
                x: b,
                y: c
            };
            c = {
                top: (a.height - 400) / 2 + b.y,
                left: (a.width - 715) / 2 + b.x
            };
            this.k.style.top = c.top + "px";
            this.k.style.left = c.left + "px";
            this.g.style.height = a.height + b.y + "px";
            this.g.style.width = a.width + b.x + "px"
        }
    };
    var ia = function(a) {
        window.onresize = function() {
            a.na && a.na();
            a.U()
        };
        window.onscroll = l(a.U, a)
    };
    s.prototype.ab = function(a) {
        switch (a.action) {
        case "loaded":
            window.clearTimeout(this.I);
            this.I = -1;
            this.ba.style.display = "none";
            this.N = !0;
            this.g.style.display = "block";
            this.U();
            this.J.style.display = "block";
            this.J.className = "pickerFrame";
            this.ja();
            break;
        case "picked":
            u(this);
            a = a.view && a.view == "icon" ? "": a.docs[0] && a.docs[0].thumbnails && a.docs[0].thumbnails.length > 0 ? a.docs[0].thumbnails.pop().url: g;
            typeof a == "null" ? this.Ca() : this.Xa(a || "");
            break;
        case "cancel":
            u(this);
            break;
        default:
            u(this),
            this.Ca()
        }
    };
    var v = function(a) {
        if (a.i) return a.i;
        this.b = a;
        a.i = this
    },
    x = function(a) {
        a = a.b[5];
        return ! a ? g: a.i || new w(a)
    };
    v.prototype.P = function() {
        return this.b
    };
    var w = function(a) {
        if (a.i) return a.i;
        this.b = a;
        a.i = this
    },
    y = function(a) {
        a = a.b[0];
        return a != g ? a: ""
    },
    z = function(a) {
        a = a.b[2];
        return a != g ? a: ""
    },
    A = function(a) {
        a = a.b[7];
        return a != g ? a: ""
    },
    B = function(a) {
        a = a.b[8];
        return a != g ? a: ""
    },
    C = function(a) {
        a = a.b[9];
        return a != g ? a: ""
    },
    D = function(a) {
        a = a.b[13];
        return a != g ? a: ""
    },
    E = function(a) {
        a = a.b[15];
        return a != g ? a: ""
    },
    F = function(a) {
        a = a.b[16];
        return a != g ? a: ""
    },
    G = function(a) {
        a = a.b[17];
        return a != g ? a: ""
    };
    w.prototype.P = function() {
        return this.b
    };
    var H = function(a) {
        if (a.i) return a.i;
        this.b = a;
        a.i = this
    };
    H.prototype.P = function() {
        return this.b
    };
    var I = function(a) {
        if (a.i) return a.i;
        this.b = a;
        a.i = this;
        this.b[0] || (this.b[0] = [])
    };
    I.prototype.P = function() {
        return this.b
    };
    var J = function(a) {
        if (a.i) return a.i;
        this.b = a;
        a.i = this
    },
    K = function(a) {
        a = a.b[0];
        return ! a ? g: a.i || new I(a)
    };
    J.prototype.Y = function() {
        var a = this.b[3];
        return a != g ? a: ""
    };
    var L = function(a) {
        a = a.b[4];
        return a != g ? a: !1
    };
    J.prototype.fa = function() {
        var a = this.b[5];
        return a != g ? a: 0
    };
    var ka = function(a) {
        a = a.b[7];
        return a != g ? a: !1
    };
    J.prototype.P = function() {
        return this.b
    };
    function M(a) {
        this.db = 12E4;
        this.Ka = 15E3;
        this.da = 1E3;
        this.C = this.Ka;
        this.qa = 2 * this.C;
        this.Ha = this.ra = g;
        this.eb = a
    }
    M.prototype.start = function(a) {
        this.ra = _gel(a);
        this.Ia = window.setTimeout(l(this.Ja, this), this.da)
    };
    M.prototype.Ja = function() {
        this.C -= this.da;
        if (this.C > 0) {
            if (this.ra) this.ra.innerHTML = Math.floor(this.C / this.da);
            this.Ia = window.setTimeout(l(this.Ja, this), this.da)
        } else this.C = this.qa,
        this.qa = 2 * this.C,
        this.C <= this.db ? this.Ha() : (this.cancel(), this.eb())
    };
    M.prototype.cancel = function() {
        this.C = this.Ka;
        this.qa = 2 * this.C;
        window.clearTimeout(this.Ia)
    };
    function N(a, b, c) {
        this.S = a;
        this.Ga = b;
        this.H = c || "";
        this.G = 0;
        this.Fa = this.ca = g;
        this.ta = this.ua = this.ga = k;
        this.ha = g;
        this.va = this.ka = this.ia = k;
        this.bb = la
    }
    var ma = /^https?:\/\/.+\/.+\.(jpg|png|gif)$/i,
    O = function(a, b) {
        _sendx("/url?sa=p&pref=cp&pval=" + (b ? "1": "0") + "&authuser=" + a.S)
    };
    N.prototype.display = function() {
        this.la(!1, this.H)
    };
    N.prototype.$a = function(a) {
        this.la(!0, a || "")
    };
    var la = function(a) {
        return !! a.match(ma)
    };
    N.prototype.La = function(a) {
        var b = ["/ig/cp/set_bg?url=", _urlesc(a), "&et=", _urlesc(this.Ga), "&authuser=", this.S].join(""),
        a = l(this.hb, this, a);
        _sendx(b, a)
    };
    N.prototype.hb = function(a, b) {
        if (b && b.length > 0 && b.charAt(27) == "[") na(this, a, !0);
        else {
            var c = l(this.La, this, a);
            if (!this.ca) this.ca = new M(this.ta);
            this.ca.Ha = c;
            this.ha && this.ha(this.ca)
        }
    };
    var oa = function(a, b, c) {
        a.ua();
        var d = new Image;
        d.onload = function() {
            a.Fa = d;
            c ? a.La(b) : na(a, b, c);
            d.onload = g
        };
        d.onerror = l(a.ga, a);
        d.src = b
    },
    na = function(a, b, c) {
        a.G == 0 && a.ka();
        a.G = a.H ? a.H == b ? 2: b ? 5: 4: b ? 3: 1;
        a.G == 3 && (a.ka(), c && O(a, !0));
        a.H = b;
        a.ia(a.Fa)
    },
    pa = function(a) {
        var b = "/ig/cp/reset?et=" + _urlesc(a.Ga) + "&authuser=" + a.S;
        _sendx(b,
        function() {
            O(a, !1)
        })
    };
    N.prototype.la = function(a, b) {
        var c = b || "";
        if (! (this.G != 0 && c == this.H)) c ? (c = encodeURI(decodeURI(c)), this.bb(c) ? oa(this, c, a) : this.ga()) : (this.G != 0 && (a && pa(this), this.va()), this.G = this.H ? this.H == "" ? 2: 4: 1, this.H = "", this.ia())
    };
    function qa() {
        this.b = []
    }
    qa.prototype.P = function() {
        return this.b
    };
    function P() {
        if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
        else if (document.body && document.body.clientHeight) return document.body.clientHeight;
        return 0
    };
    google.cp = google.cp || {};
    function Q(a, b) {
        this.A = new J(a);
        this.V = this.A.fa() || 0;
        this.K = ra(this.A);
        this.L = K(this.A);
        this.W = new v(b);
        this.s = this.c = this.ib = this.w = this.n = this.e = this.Q = g;
        this.wa = this.M = "";
        this.X = "logo";
        this.Oa = g;
        this.$ = this.aa = 0;
        this.R = sa();
        this.B = 0;
        this.F = [];
        this.j = google.cp ? google.cp.o: g;
        this.p = 0;
        this.D = g;
        this.Pa = google.style.isRtl()
    }
    var ta = ["sbl", "als", "fctr", "fll", "cpNavTextWrapper", "cp-shd"],
    R = ["prt", "prll", "prlr", "prmu", "prm"],
    S = g;
    Q.prototype.init = function() {
        var a = x(this.W);
        S.ccbi = y(a);
        var b = a.b[1];
        S.crbi = b != g ? b: "";
        S.cbti = z(a);
        b = a.b[3];
        S.ipt = b != g ? b: "";
        b = a.b[4];
        S.mpwp = b != g ? b: "";
        b = a.b[5];
        S.fmc = b != g ? b: "";
        b = a.b[6];
        S.pg = b != g ? b: "";
        S.cli = A(a);
        S.ciu = B(a);
        S.ccni = C(a);
        b = a.b[10];
        S.ep = b != g ? b: "";
        b = a.b[11];
        S.clm = b != g ? b: "";
        b = a.b[12];
        S.cou = b != g ? b: "";
        S.coe = D(a);
        b = a.b[14];
        S.ccw = b != g ? b: "";
        S.cuts = E(a);
        S.cst = F(a);
        S.cctvd = G(a);
        a = a.b[18];
        S.csi = a != g ? a: "";
        google.rein && google.rein.push(l(this.Sa, this));
        google.dstr && google.dstr.push(l(this.xa, this));
        T() && google.msg.listen(10, l(this.Ra, this));
        this.L ? (a = this.L.b[1], a = a != g ? a: "") : a = -1;
        a == ua(this) && (this.p |= 8);
        this.X = _gel("hplogo") ? "hplogo": "logo";
        this.L && this.L.b[0].length > 0 ? (a = this.L.b[0][this.L.b[0].length - 1], a = (!a ? g: a.i || new H(a)).b[0], a = a != g ? a: "") : a = "";
        var b = new N(this.V, this.A.Y(), a),
        c = l(this.v, this, 4);
        b.ga = c;
        c = l(this.v, this, 3);
        b.ua = c;
        c = l(this.v, this, 0);
        b.ta = c;
        c = l(this.Va, this);
        b.ha = c;
        c = l(this.Qa, this);
        b.ia = c;
        c = l(this.Ta, this);
        b.ka = c;
        c = l(this.Ua, this);
        b.va = c;
        b = this.D = b;
        c = google.cp;
        if (c.setBg) throw "Namespace clash, function: setBg already exists.";
        google.exportProperty(c, "setBg", l(b.la, b, !1)); ! a && L(this.A) ? (O(this.D, !1), this.p |= 4) : a && !L(this.A) && O(this.D, !0);
        if (va()) wa(this),
        (a = _argsUrl(document.location.href).cplp) ? (b = ea() - 3E5, a = a[0] == "r" && this.K == 3 && a.slice(1) > b ? !0: a[0] != "r" && this.K == 4 && a > b ? !0: !1) : a = !1,
        a && this.Z()
    };
    var va = function() {
        var a = window.location.href,
        b;
        if (b = google.sn == "webhp") if (b = !!a) a = a.match("[&?#]q=([^&]*)"),
        b = (a && a[1] != e ? decodeURIComponent(a[1]) : g) == g;
        return b
    },
    T = function() {
        return !! google.psy && !!google.psy.h && !!_gel("searchform")
    },
    xa = function(a) {
        var a = _gel(a.X) != g,
        b = _gel("lga") != g,
        c = document.getElementsByTagName("CENTER").length > 0;
        return document.body != g && a && b && c
    },
    sa = function() {
        var a = navigator.userAgent,
        b = google.browser;
        if (b.product.IE) {
            if (b.isProductVersion("8")) return 6;
            else if (b.isProductVersion("7")) return a.indexOf("Trident") !=
            -1 ? 6: 5;
            return 4
        } else if (b.product.FIREFOX) return b.isProductVersion("3.5") ? 3: 2;
        else if (b.product.CHROME) return 1;
        else if (b.product.SAFARI) return 7;
        return 0
    },
    ya = function(a) {
        a.M = _gel("lga").innerHTML;
        if (a.j) if (a.j.h) a.M = a.j.l;
        else {
            var b = new Image;
            b.onload = l(a.fb, a, b);
            b.src = a.j.l
        }
    };
    Q.prototype.fb = function(a) {
        if (this.j) {
            this.M = U(this, a.src, a.width, a.height, this.j.a);
            if (this.j.u) this.M = ['<a href="', this.j.u, '">', this.M, "</a>"].join("");
            this.p & 4 && (V(this, 0), this.p ^= 4);
            a.onload = g
        }
    };
    Q.prototype.Sa = function() {
        va() && this.B != 1 && wa(this)
    };
    Q.prototype.xa = function() {
        google.dom.remove(this.c);
        google.dom.remove(this.e);
        google.dom.remove(this.w);
        google.dom.remove(this.O);
        google.dom.remove(this.s);
        for (var a = 0; a < this.F.length; ++a) {
            var b = this.F[a];
            b && google.dom.remove(b)
        }
        this.Oa = this.s = this.jb = this.w = this.e = this.c = g;
        this.B = 0;
        this.D.G = 0;
        this.F = [];
        this.p &= -49
    };
    Q.prototype.Ra = function(a) {
        this.B == 1 && a && this.xa();
        return ! 0
    };
    var ra = function(a) {
        var b = a.b[2];
        if (b != g && b) if (b = a.b[1], b != g && b) {
            if (! (b = a.b[0] == g)) b = K(a).b[0].length == 0;
            if (b) return 4
        } else return 2;
        else return 0;
        return 3
    },
    wa = function(a) {
        if (xa(a)) a.wa = T() ? U(a, "images/logos/ps_logo2a_cp.png", 364, 126, "Google") : U(a, "logos/classicplus.png", 275, 95, "Google"),
        ya(a),
        a.e || za(a),
        a.D.display(),
        window.onresize = function() {
            W(a)
        }
    },
    za = function(a) {
        a.O = document.createElement("style");
        a.O.type = "text/css";
        a.O.styleSheet ? a.O.styleSheet.cssText = "#cpErrorMsg { margin-right: 5px; }#cpFooter {cursor: default;position: relative;margin: 0px 8px 0px 8px;}#cpNavContainer { position: absolute; bottom: 0; height: 20px; }#cpNavTextWrapper { position: relative }#cpNavTextWrapper a:link { text-decoration: none }#cpNavTextWrapper a:hover {text-decoration: underline }":
        a.O.appendChild(document.createTextNode("#cpErrorMsg { margin-right: 5px; }#cpFooter {cursor: default;position: relative;margin: 0px 8px 0px 8px;}#cpNavContainer { position: absolute; bottom: 0; height: 20px; }#cpNavTextWrapper { position: relative }#cpNavTextWrapper a:link { text-decoration: none }#cpNavTextWrapper a:hover {text-decoration: underline }"));
        google.dom.append(a.O);
        a.w = document.createElement("div");
        a.w.id = "cpFooter";
        var b = document.createElement("font");
        b.id = "cpNavContainer";
        b.size = "-1";
        if (a.Pa) b.style.right = "0";
        var c = document.createElement("div");
        c.id = "cpNavTextWrapper";
        a.n = document.createElement("span");
        a.n.id = "cpErrorMsg";
        a.e = document.createElement("a");
        a.e.id = "cpNavLink";
        a.e.href = "javascript:void(0)";
        c.appendChild(a.n);
        c.appendChild(a.e);
        b.appendChild(c);
        a.w.appendChild(b);
        document.body.appendChild(a.w);
        Aa(a, P())
    };
    i = Q.prototype;
    i.v = function(a) {
        if (this.e && this.n) {
            this.e.innerHTML = "";
            this.n.style.display = "none";
            var b = x(this.W);
            switch (a) {
            case 0:
                this.e.innerHTML = y(b);
                this.e.onclick = l(this.Z, this);
                this.R == 2 && this.K == 3 && X(this, this.e);
                break;
            case 7:
                this.e.innerHTML = y(b);
                this.e.onclick = l(this.Ba, this);
                this.R == 2 && X(this, this.e);
                break;
            case 2:
                this.e.innerHTML = z(b);
                this.e.onclick = l(this.cb, this);
                break;
            case 3:
                this.n.innerHTML = A(b);
                this.n.style.display = "inline";
                break;
            case 4:
                this.n.innerHTML = B(b);
                this.n.style.display = "inline";
                this.e.innerHTML =
                C(b);
                this.e.onclick = l(this.Z, this);
                o(1);
                break;
            case 6:
                this.n.innerHTML = D(b);
                this.n.style.display = "inline";
                this.e.onclick = g;
                o(4);
                break;
            case 9:
                this.n.innerHTML = S.ld,
                this.n.style.display = "inline"
            }
        }
    };
    i.Z = function() {
        this.Q ? this.Q.openPicker() : (google.exportSymbol("createUploader", fa, google.cp), google.exportProperty(s.prototype, "openPicker", s.prototype.gb), this.createUploader(l(this.Z, this)))
    };
    i.Ba = function() {
        var a,
        b = {
            cplp: (this.K == 3 ? "r": "") + google.time()
        };
        a = document.location.href;
        var c = _argsUrl(a),
        d;
        for (d in b) c[d] = b[d];
        var b = [],
        f;
        for (f in c) b.push(_urlesc(f) + "=" + _urlesc(c[f]));
        a = a.split("?")[0];
        a = a.replace(/(\/)?(webhp)?$/, "/webhp");
        a = ["https://www.google.com/accounts/Login?continue=", _urlesc(a + "?" + b.join("&")), "&hl=", google.kHL, "&authuser=", this.V].join("");
        document.location = a
    };
    i.createUploader = function(a) {
        var b = new qa;
        b.b[11] = S;
        b.b[1] = this.A.Y();
        b.b[2] = this.V;
        var c = l(this.D.$a, this.D);
        b.b[3] = c;
        b.b[10] = google.kHL;
        c = l(this.v, this, 6);
        b.b[5] = c;
        c = l(this.Ba, this);
        b.b[9] = c;
        this.Q = google.cp.createUploader(b.P());
        this.Q.sa = l(this.v, this, 9);
        this.Q.ja = l(this.v, this, 0);
        a()
    };
    i.Va = function(a) {
        if (a) {
            var b = x(this.W);
            this.n.innerHTML = E(b).replace(/\%1\$s/g, ['<span id="timer">', Math.floor(a.C / 1E3), "</span>"].join(""));
            this.n.style.display = "inline";
            this.e.innerHTML = F(b);
            var c = this;
            this.e.onclick = function() {
                a.cancel();
                c.v(0)
            };
            o(5);
            a.start("timer")
        }
    };
    i.Qa = function(a) {
        ka(this.A) ? this.v(7) : this.v(0);
        if (a) this.c && google.dom.remove(this.c),
        this.c = document.createElement("img"),
        this.c.id = "cpBackgroundImg",
        this.aa = a.width,
        this.$ = a.height,
        this.c.src = a.src,
        Ba(this, _windowWidth(), P()),
        Ca(this, _windowWidth()),
        google.dom.append(this.c),
        this.D.G == 2 ? (a = new Da, a.Ea = google.time(), a.oa = 0, Ea(this, 0, a)) : (this.p |= 16, Y(this));
        else if (this.c) google.dom.remove(this.c),
        this.c = g,
        W(this)
    };
    i.Ta = function() {
        Z(this, 1);
        V(this, 1);
        this.K = 3
    };
    i.Ua = function() {
        Z(this, 0);
        V(this, 0);
        this.K = 4;
        this.p &= -33
    };
    var Z = function(a, b) {
        if (b == 1) {
            if (a.B = 1, !a.s) a.s = document.createElement("style"),
            a.s.id = "cpStyle",
            a.s.type = "text/css",
            a.s.styleSheet ? a.s.styleSheet.cssText = Fa() : a.s.appendChild(document.createTextNode(Fa())),
            google.dom.append(a.s),
            Ga(a)
        } else if (b == 0 && (a.B = 0, Ga(a), a.s)) google.dom.remove(a.s),
        a.s = g
    },
    Fa = function() {
        var a = 275,
        b = 95;
        T() && (a = 364, b = 126);
        return "form a,#cp-shd,#cpFooter a,#cpNavContainer,#cpNavTextWrapper,#fctr a, #fctr p,#prt, #prll, #prlr, #prmu, #prm,#prt a, #prll a, #prlr a, #prmu a, #prm a,#als, #als a,.sblc a {color: #FFF !important;text-shadow: black 0px 1px 3px !important;filter: shadow(color=#333333, direction=135, strength=2);}#fctr p { width: 150px; }#cpBackgroundImg {left: -999999px;position: fixed;top: 0px;z-index: -2;}#sbl,#fctr,#cpFooter,.fade {background: transparent;}#ghead,#gog,#pmocntr {background: #fff;}.gbh { border: none; }.cpTextCloneShadow {color: #333;left: 1px;position: absolute;top: 1px;z-index: -1;}" + ["#cpDoodleNotifier {background-image:url('http://skins.gmodules.com/ig/images/classic_plus_sprite.png');background-position: 0 0;height: 22px;left: ",
        a, "px;position: absolute;top: -", b, "px;width: 22px;}"].join("")
    },
    Ga = function(a) {
        if (a.R == 5) {
            var b = google.dom.get("form");
            if (b = b ? google.dom.get("td.fl", b) : g) if (a.B == 1) b.style.filter += " shadow(color=#333333,direction=135,strength=2)";
            else if (a.B == 0) b.style.filter = ""
        } else if (a.R == 2) if (a.B == 1) if (a.F.length == 0) {
            for (b = 0; b < ta.length; ++b) {
                var c = _gel(ta[b]);
                if (c) for (var d = c.getElementsByTagName(c.id == "fctr" ? "p": "a"), c = 0; c < d.length; ++c) X(a, d[c])
            }
            for (b = 0; b < R.length; ++b) if (d = _gel(R[b])) {
                var f = d.getElementsByTagName("font");
                f.length == 0 && (f = d.getElementsByTagName("a"));
                for (var h = [], c = 0; c < f.length; ++c) {
                    for (var j = !1, m = f[c].parentNode; m != d;) {
                        if (m.tagName.toLowerCase() == "font") {
                            j = !0;
                            break
                        }
                        m = m.parentNode
                    }
                    j || h.push(f[c])
                }
                for (c = 0; c < h.length; ++c) X(a, h[c])
            }
        } else for (b = 0; b < a.F.length; ++b) {
            if (c = a.F[b]) c.style.display = "block"
        } else if (a.B == 0) for (b = 0; b < a.F.length; ++b) if (c = a.F[b]) c.style.display = "none";
        Ha(a)
    },
    X = function(a, b) {
        if (b) {
            var c = b.offsetWidth,
            d = b.innerHTML,
            f = b.textContent;
            b.innerHTML = "";
            var h = document.createElement("span");
            h.innerHTML = d;
            d = document.createElement("span");
            d.className = "cpTextCloneShadow";
            d.innerHTML = f;
            d.style.width = c + 1 + "px";
            b.appendChild(h);
            b.appendChild(d);
            b.style.position = "relative";
            a.F.push(d);
            W(a)
        }
    },
    Ha = function(a) {
        for (var b = 0; b < R.length; ++b) {
            var c = _gel(R[b]);
            if (c) {
                var d = c.getElementsByTagName("font");
                if (d = d.length > 0 ? d[0] : g) if (a.B == 1) {
                    var f = c.getElementsByTagName("a");
                    if (f.length > 0) d.onclick = function() {
                        window.location = f[0].href
                    },
                    d.style.cursor = "pointer"
                } else d.onclick = g,
                d.style.cursor = "default"
            }
        }
    },
    V =
    function(a, b) {
        var c = _gel("lga");
        if (c) {
            if (b == 1) c.innerHTML = a.wa,
            a.j && a.j.d && Ia(a);
            else {
                var d = a.M,
                f = [],
                h = [],
                d = $("noscript", d),
                d = $("script", d, f),
                d = $("style", d, h);
                c.innerHTML = d;
                for (d = 0; d < f.length; ++d) {
                    var j = document.createElement("script");
                    j.type = "text/javascript";
                    j.text = f[d];
                    c.appendChild(j)
                }
                for (f = 0; f < h.length; ++f) d = document.createElement("style"),
                d.type = "text/css",
                d.styleSheet ? d.styleSheet.cssText = h[f] : d.appendChild(document.createTextNode(h[f])),
                c.appendChild(d);
                google.doodle && google.doodle.cpInit &&
                google.doodle.cpInit()
            }
            W(a)
        }
    },
    Ia = function(a) {
        var b = _gel(a.X),
        c = _gel("lga");
        if (!_gel("cpDoodleNotifier") && b && c) {
            var d = b.cloneNode(!0),
            f = document.createElement("span");
            f.style.position = "relative";
            var h = document.createElement("span");
            h.id = "cpDoodleNotifier";
            h.onclick = da(function(a) {
                Z(a, 0);
                V(a, 0);
                a.v(2);
                if (a.c) a.c.style.display = "none";
                W(a);
                if (! (a.p & 8)) {
                    a.p |= 8;
                    var b = ua(a);
                    b && (a = ["/ig/cp/doodle_click?et=", _urlesc(a.A.Y()), "&id=", b, "&authuser=", a.V].join(""), _sendx(a))
                }
            },
            a);
            h.style.cursor = "pointer";
            var j =
            x(a.W);
            h.title = j ? G(j) : a.j.a;
            if (a.R == 5) h.style.top = "25px";
            f.appendChild(d);
            f.appendChild(h);
            google.doodle && google.doodle.cpDestroy && google.doodle.cpDestroy();
            c.replaceChild(f, b)
        }
        Y(a)
    },
    ua = function(a) {
        var b = 0;
        a.j && a.j.d && (b = _hashCode(a.j.h ? a.j.l: a.j.u));
        return b
    },
    Y = function(a) { ! (a.p & 32) && !(a.p & 8) && a.p & 16 && (a.p |= 32, Ja(a))
    },
    Ja = function(a) {
        var b = _gel("cpDoodleNotifier");
        if (b) {
            var c = 0,
            c = b.style.backgroundPosition ? parseInt(b.style.backgroundPosition.split(" ")[1], 10) : 0,
            c = c > -2784 ? c - 32 + "px": "0";
            window.setTimeout(function() {
                Ja(a)
            },
            40);
            b.style.backgroundPosition = ["0 ", c].join("")
        }
    },
    $ = function(a, b, c) {
        for (var a = RegExp(["<", a, "[^>]*>([\\S\\s]*?)</", a, ">"].join(""), "img"), d; d = a.exec(b);) d[1] && c && c.push(d[1]);
        return b.replace(a, "")
    },
    U = function(a, b, c, d, f) {
        var h = 0,
        j = 0,
        m = 0;
        T() ? (h = 126, j = 152, m = 26) : (h = 95, j = 137, m = 28);
        h = Math.max(0, m + h - d);
        return ['<img height="', d, '" width="', c, '" style="padding: ', h, "px 0px ", Math.max(0, j - d - h), 'px; border-width: 0px;" onload="window.lol&&lol()" id="', a.X, '" src="', b, '" alt="', f, '"/><br/><br/>'].join("")
    },
    Ca = function(a, b) {
        if (a.c) {
            var c = a.c.style.width ? parseInt(a.c.style.width, 10) : 0;
            a.c.style.left = b < c ? (b - c) / 2 + "px": "0px"
        }
    };
    function Da() {
        this.oa = this.Ea = 0
    }
    var Ea = function(a, b, c) {
        var d = (google.time() - c.Ea) / 500,
        b = Math.min(Math.min(100, c.oa + (100 - c.oa) * d), b + 34);
        Ka(a.c, b);
        b == 100 ? La(a) : window.setTimeout(function() {
            Ea(a, b, c)
        },
        25)
    },
    La = function(a) {
        a.p |= 16;
        Y(a)
    },
    Ka = function(a, b) {
        if (a) b = Math.min(99.999, b),
        a.style.filter = "alpha(opacity:" + b + ")",
        a.style.opacity = b / 100
    },
    W = function(a) {
        var b = _windowWidth(),
        c = P();
        a.c && (Ba(a, b, c), Ca(a, b));
        a.w && Aa(a, c)
    },
    Ba = function(a, b, c) {
        if (a.c && a.aa && a.$) {
            var d = b / a.aa,
            f = c / a.$;
            d >= f ? (a.c.style.width = b + "px", a.c.style.height = a.$ * d + "px") :
            (a.c.style.height = c + "px", a.c.style.width = a.aa * f + "px")
        }
    },
    Aa = function(a, b) {
        var c = document.body.offsetHeight;
        if (a.w) {
            var d = a.w;
            d.style.height = Math.max(b - (d.offsetHeight ? c - d.offsetHeight: c + 10) - 10, 0) + "px"
        }
    };
    Q.prototype.cb = function() {
        Z(this, 1);
        V(this, 1);
        ka(this.A) ? this.v(7) : this.v(0);
        if (this.c) this.c.style.display = "block";
        if (this.w) this.w.style.display = "block";
        W(this)
    };
    google.cp.initcp = function(a, b) { (new Q(a, b)).init()
    };
    google.register(111, {
        init: function(a) {
            S = a.msg
        }
    });
})();
 (function() {
    if (google.y.first) {
        for (var a = 0, b; b = google.y.first[a]; ++a) b();
        delete google.y.first
    }
    for (a in google.y) google.y[a][1] ? google.y[a][1].apply(google.y[a][0]) : google.y[a][0].go();
    google.y.x = google.x;
    google.x = function(d, c) {
        c && c.apply(d);
        return ! 1
    };
    google.y.first = [];
})();
 (function() {
    if (window.google) {
        window.google.a = {};
        window.google.c = 1;
        var j = function(a, b, e) {
            b = a.t[b];
            a = a.t.start;
            if (b && (a || e)) return e != void 0 && (a = e),
            b > a ? b - a: a - b
        },
        k = function(a, b, e) {
            var c = "";
            window.google.pt && (c += "&srt=" + window.google.pt, delete window.google.pt);
            var d = document.getElementById("csi");
            if (d) {
                var f;
                window.google._bfr != void 0 ? f = window.google._bfr: (f = d.value, window.google._bfr = f, d.value = 1);
                if (f) return ""
            }
            if (d = window.chrome) if (d = d.loadTimes) d().wasFetchedViaSpdy && (c += "&p=s"),
            d().wasNpnNegotiated && (c += "&npn=1"),
            d().wasAlternateProtocolAvailable && (c += "&apa=1");
            a.b && (c += "&" + a.b);
            window.parent != window && (c += "&wif=1");
            d = a.t;
            f = d.start;
            var h = [],
            g;
            for (g in d) g != "start" && f && h.push(g + "." + j(a, g));
            delete d.start;
            if (b) for (var i in b) c += "&" + i + "=" + b[i];
            return a = [e ? e: "/csi", "?v=3", "&s=" + (window.google.sn || "GWS") + "&action=", a.name, "", c, "&rt=", h.join(",")].join("")
        };
        window.google.report = function(a, b, e) {
            a = k(a, b, e);
            if (!a) return "";
            var b = new Image,
            c = window.google.c++;
            window.google.a[c] = b;
            b.onload = b.onerror = function() {
                delete window.google.a[c]
            };
            b.src = a;
            b = null;
            return a
        }
    };
    function l() {
        function a(a) {
            try {
                var b = window.external[a];
                if (b != void 0) return google.kCSI[a] = b,
                !0
            } catch(c) {}
            return ! 1
        }
        for (var b = ["ist_rc", "ist_rn", "ist_nr", "ist_cdts", "ist_dp", "ist_rrx", "ist_rxr", "ist_rs", "ist_sr"], e = 0, c; c = b[e++];) if (a(c) === !1) break
    }
    if (google.timers && google.timers.load.t) {
        if (!google.nocsixjs) google.timers.load.t.xjsee = google.time();
        window.setTimeout(function() {
            if (google.timers.load.t) google.timers.load.t.xjs = google.time(),
            l(),
            google.timers.load.t.ol && google.report(google.timers.load, google.kCSI)
        },
        0)
    };
})();
