(function() {
    try { 
        var j = true,
        k = null,
        m = false,
        o;
        window.gbar.tev && window.gbar.tev(3, "pw");
        var r = this,
        aa = function(a, b, c) {
            a = a.split(".");
            c = c || r; ! (a[0] in c) && c.execScript && c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) if (!a.length && b !== undefined) c[d] = b;
            else c = c[d] ? c[d] : c[d] = {}
        },
        ba = function(a) {
            a = a.split(".");
            for (var b = r, c; c = a.shift();) if (b[c] != k) b = b[c];
            else return k;
            return b
        },
        s = function() {},
        ca = function(a) {
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
        },
        u = function(a) {
            return ca(a) == "array"
        },
        v = function(a) {
            return typeof a == "string"
        },
        w = function(a) {
            return ca(a) ==
            "function"
        },
        x = function(a) {
            return a[da] || (a[da] = ++ea)
        },
        da = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36),
        ea = 0,
        fa = function(a) {
            return a.call.apply(a.bind, arguments)
        },
        ga = function(a, b) {
            var c = b || r;
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var f = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(f, d);
                    return a.apply(c, f)
                }
            } else return function() {
                return a.apply(c, arguments)
            }
        },
        y = function() {
            y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") !=
            -1 ? fa: ga;
            return y.apply(k, arguments)
        },
        z = Date.now ||
        function() {
            return + new Date
        },
        A = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.B = b.prototype;
            a.prototype = new c
        };
        var ha = /^[a-zA-Z0-9\-_.!~*'()]*$/,
        ia = function(a) {
            a = String(a);
            if (!ha.test(a)) return encodeURIComponent(a);
            return a
        },
        ja = /&/g,
        ka = /</g,
        la = />/g,
        ma = /\"/g,
        na = /[&<>\"]/,
        pa = function(a, b) {
            for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0; c == 0 && g < e; g++) {
                var h = d[g] || "",
                i = f[g] || "",
                n = RegExp("(\\d*)(\\D*)", "g"),
                q = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var l = n.exec(h) || ["", "", ""],
                    p = q.exec(i) || ["", "", ""];
                    if (l[0].length ==
                    0 && p[0].length == 0) break;
                    c = oa(l[1].length == 0 ? 0: parseInt(l[1], 10), p[1].length == 0 ? 0: parseInt(p[1], 10)) || oa(l[2].length == 0, p[2].length == 0) || oa(l[2], p[2])
                }
                while (c == 0)
            }
            return c
        },
        oa = function(a, b) {
            if (a < b) return - 1;
            else if (a > b) return 1;
            return 0
        };
        var qa = function(a) {
            return a
        };
        var B = Array.prototype,
        C = B.indexOf ?
        function(a, b, c) {
            return B.indexOf.call(a, b, c)
        }: function(a, b, c) {
            c = c == k ? 0: c < 0 ? Math.max(0, a.length + c) : c;
            if (v(a)) {
                if (!v(b) || b.length != 1) return - 1;
                return a.indexOf(b, c)
            }
            for (; c < a.length; c++) if (c in a && a[c] === b) return c;
            return - 1
        },
        ra = B.forEach ?
        function(a, b, c) {
            B.forEach.call(a, b, c)
        }: function(a, b, c) {
            for (var d = a.length, f = v(a) ? a.split("") : a, e = 0; e < d; e++) e in f && b.call(c, f[e], e, a)
        },
        ta = function(a) {
            B.splice.apply(a, sa(arguments, 1))
        },
        sa = function(a, b, c) {
            return arguments.length <= 2 ? B.slice.call(a,
            b) : B.slice.call(a, b, c)
        };
        var ua = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        va = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        wa = function(a) {
            for (var b, c, d = 1; d < arguments.length; d++) {
                c = arguments[d];
                for (b in c) a[b] = c[b];
                for (var f = 0; f < va.length; f++) {
                    b = va[f];
                    if (Object.prototype.hasOwnProperty.call(c, b)) a[b] = c[b]
                }
            }
        };
        var D,
        xa,
        ya,
        za,
        Aa = function() {
            return r.navigator ? r.navigator.userAgent: k
        };
        za = ya = xa = D = m;
        var Ba;
        if (Ba = Aa()) {
            var Ca = r.navigator;
            D = Ba.indexOf("Opera") == 0;
            xa = !D && Ba.indexOf("MSIE") != -1;
            ya = !D && Ba.indexOf("WebKit") != -1;
            za = !D && !ya && Ca.product == "Gecko"
        }
        var E = xa,
        Da = za,
        Ea = ya,
        Fa = r.navigator,
        Ga = (Fa && Fa.platform || "").indexOf("Mac") != -1,
        Ha;
        a: {
            var Ia = "",
            F;
            if (D && r.opera) {
                var Ja = r.opera.version;
                Ia = typeof Ja == "function" ? Ja() : Ja
            } else {
                if (Da) F = /rv\:([^\);]+)(\)|;)/;
                else if (E) F = /MSIE\s+([^\);]+)(\)|;)/;
                else if (Ea) F = /WebKit\/(\S+)/;
                if (F) {
                    var La = F.exec(Aa());
                    Ia = La ? La[1] : ""
                }
            }
            if (E) {
                var Ma,
                Na = r.document;
                Ma = Na ? Na.documentMode: undefined;
                if (Ma > parseFloat(Ia)) {
                    Ha = String(Ma);
                    break a
                }
            }
            Ha = Ia
        }
        var Oa = Ha,
        Pa = {};
        var Qa = new Function("a", "return a");
        var Ra;
        if (E) Pa["9"] || (Pa["9"] = pa(Oa, "9") >= 0);
        if (E) Pa["8"] || (Pa["8"] = pa(Oa, "8") >= 0);
        var G = function() {};
        G.prototype.ja = m;
        G.prototype.u = function() {
            if (!this.ja) {
                this.ja = j;
                this.d()
            }
        };
        G.prototype.d = function() {
            Sa(this.Ab)
        };
        var Ta = function(a) {
            a && typeof a.u == "function" && a.u()
        },
        Sa = function() {
            for (var a = 0, b = arguments.length; a < b; ++a) {
                var c = arguments[a],
                d = c,
                f = ca(d);
                f == "array" || f == "object" && typeof d.length == "number" ? Sa.apply(k, c) : Ta(c)
            }
        };
        var H = function(a, b) {
            this.type = a;
            this.currentTarget = this.target = b
        };
        A(H, G);
        H.prototype.d = function() {
            delete this.type;
            delete this.target;
            delete this.currentTarget
        };
        H.prototype.z = m;
        H.prototype.O = j;
        var I = function(a, b) {
            a && this.init(a, b)
        };
        A(I, H);
        o = I.prototype;
        o.target = k;
        o.relatedTarget = k;
        o.offsetX = 0;
        o.offsetY = 0;
        o.clientX = 0;
        o.clientY = 0;
        o.screenX = 0;
        o.screenY = 0;
        o.button = 0;
        o.keyCode = 0;
        o.charCode = 0;
        o.ctrlKey = m;
        o.altKey = m;
        o.shiftKey = m;
        o.metaKey = m;
        o.Ra = m;
        o.ka = k;
        o.init = function(a, b) {
            var c = this.type = a.type;
            H.call(this, c);
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (Da) {
                    var f;
                    a: {
                        try {
                            Qa(d.nodeName);
                            f = j;
                            break a
                        } catch(e) {}
                        f = m
                    }
                    f || (d = k)
                }
            } else if (c == "mouseover") d = a.fromElement;
            else if (c == "mouseout") d = a.toElement;
            this.relatedTarget = d;
            this.offsetX = a.offsetX !== undefined ? a.offsetX: a.layerX;
            this.offsetY = a.offsetY !== undefined ? a.offsetY: a.layerY;
            this.clientX = a.clientX !== undefined ? a.clientX: a.pageX;
            this.clientY = a.clientY !== undefined ?
            a.clientY: a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || (c == "keypress" ? a.keyCode: 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.Ra = Ga ? a.metaKey: a.ctrlKey;
            this.state = a.state;
            this.ka = a;
            delete this.O;
            delete this.z
        };
        o.d = function() {
            I.B.d.call(this);
            this.relatedTarget = this.currentTarget = this.target = this.ka = k
        };
        var J = function(a, b) {
            this.qa = b;
            this.p = [];
            if (a > this.qa) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
            for (var c = 0; c < a; c++) this.p.push(this.I ? this.I() : {})
        };
        A(J, G);
        J.prototype.I = k;
        J.prototype.ia = k;
        J.prototype.getObject = function() {
            if (this.p.length) return this.p.pop();
            return this.I ? this.I() : {}
        };
        var Ua = function(a, b) {
            if (a.ia) a.ia(b);
            else {
                var c = ca(b);
                if (c == "object" || c == "array" || c == "function") if (w(b.u)) b.u();
                else for (var d in b) delete b[d]
            }
        };
        J.prototype.d = function() {
            J.B.d.call(this);
            for (var a = this.p; a.length;) Ua(this, a.pop());
            delete this.p
        };
        "ScriptEngine" in r && r.ScriptEngine() == "JScript" && (r.ScriptEngineMajorVersion(), r.ScriptEngineMinorVersion(), r.ScriptEngineBuildVersion());
        var Va = function() {},
        Wa = 0;
        o = Va.prototype;
        o.key = 0;
        o.A = m;
        o.ga = m;
        o.init = function(a, b, c, d, f, e) {
            if (w(a)) this.oa = j;
            else if (a && a.handleEvent && w(a.handleEvent)) this.oa = m;
            else throw Error("Invalid listener argument");
            this.G = a;
            this.wa = b;
            this.src = c;
            this.type = d;
            this.capture = !!f;
            this.aa = e;
            this.ga = m;
            this.key = ++Wa;
            this.A = m
        };
        o.handleEvent = function(a) {
            if (this.oa) return this.G.call(this.aa || this.src, a);
            return this.G.handleEvent.call(this.G, a)
        };
        var Xa,
        Ya,
        Za,
        $a,
        ab,
        bb,
        cb,
        db,
        eb,
        fb,
        gb; (function() {
            var a;
            bb = function(b) {
                a = b
            };
            Xa = function() {
                return {
                    f: 0,
                    e: 0
                }
            };
            Ya = s;
            Za = function() {
                return []
            };
            $a = s;
            ab = function() {
                var b = function(c) {
                    return a.call(b.src, b.key, c)
                };
                return b
            };
            cb = s;
            db = function() {
                return new Va
            };
            eb = s;
            fb = function() {
                return new I
            };
            gb = s
        })();
        var K = {},
        L = {},
        M = {},
        hb = {},
        ib = function(a, b, c, d, f) {
            if (b) if (u(b)) {
                for (var e = 0; e < b.length; e++) ib(a, b[e], c, d, f);
                return k
            } else {
                d = !!d;
                var g = L;
                b in g || (g[b] = Xa());
                g = g[b];
                if (! (d in g)) {
                    g[d] = Xa();
                    g.f++
                }
                g = g[d];
                var h = x(a),
                i;
                g.e++;
                if (g[h]) {
                    i = g[h];
                    for (e = 0; e < i.length; e++) {
                        g = i[e];
                        if (g.G == c && g.aa == f) {
                            if (g.A) break;
                            return i[e].key
                        }
                    }
                } else {
                    i = g[h] = Za();
                    g.f++
                }
                e = ab();
                e.src = a;
                g = db();
                g.init(c, e, a, b, d, f);
                c = g.key;
                e.key = c;
                i.push(g);
                K[c] = g;
                M[h] || (M[h] = Za());
                M[h].push(g);
                if (a.addEventListener) {
                    if (a == r || !a.ha) a.addEventListener(b,
                    e, d)
                } else a.attachEvent(jb(b), e);
                return c
            } else throw Error("Invalid event type");
        },
        kb = function(a, b, c, d, f) {
            if (u(b)) for (var e = 0; e < b.length; e++) kb(a, b[e], c, d, f);
            else {
                d = !!d;
                a: {
                    e = L;
                    if (b in e) {
                        e = e[b];
                        if (d in e) {
                            e = e[d];
                            a = x(a);
                            if (e[a]) {
                                a = e[a];
                                break a
                            }
                        }
                    }
                    a = k
                }
                if (a) for (e = 0; e < a.length; e++) if (a[e].G == c && a[e].capture == d && a[e].aa == f) {
                    N(a[e].key);
                    break
                }
            }
        },
        N = function(a) {
            if (K[a]) {
                var b = K[a];
                if (!b.A) {
                    var c = b.src,
                    d = b.type,
                    f = b.wa,
                    e = b.capture;
                    if (c.removeEventListener) {
                        if (c == r || !c.ha) c.removeEventListener(d, f, e)
                    } else c.detachEvent &&
                    c.detachEvent(jb(d), f);
                    c = x(c);
                    f = L[d][e][c];
                    if (M[c]) {
                        var g = M[c],
                        h = C(g, b);
                        h >= 0 && B.splice.call(g, h, 1);
                        g.length == 0 && delete M[c]
                    }
                    b.A = j;
                    f.sa = j;
                    lb(d, e, c, f);
                    delete K[a]
                }
            }
        },
        lb = function(a, b, c, d) {
            if (!d.M) if (d.sa) {
                for (var f = 0, e = 0; f < d.length; f++) if (d[f].A) {
                    var g = d[f].wa;
                    g.src = k;
                    cb(g);
                    eb(d[f])
                } else {
                    if (f != e) d[e] = d[f];
                    e++
                }
                d.length = e;
                d.sa = m;
                if (e == 0) {
                    $a(d);
                    delete L[a][b][c];
                    L[a][b].f--;
                    if (L[a][b].f == 0) {
                        Ya(L[a][b]);
                        delete L[a][b];
                        L[a].f--
                    }
                    if (L[a].f == 0) {
                        Ya(L[a]);
                        delete L[a]
                    }
                }
            }
        },
        mb = function(a) {
            var b,
            c = 0,
            d = b == k;
            b = !!b;
            if (a == k) ua(M,
            function(g) {
                for (var h = g.length - 1; h >= 0; h--) {
                    var i = g[h];
                    if (d || b == i.capture) {
                        N(i.key);
                        c++
                    }
                }
            });
            else {
                a = x(a);
                if (M[a]) {
                    a = M[a];
                    for (var f = a.length - 1; f >= 0; f--) {
                        var e = a[f];
                        if (d || b == e.capture) {
                            N(e.key);
                            c++
                        }
                    }
                }
            }
        },
        jb = function(a) {
            if (a in hb) return hb[a];
            return hb[a] = "on" + a
        },
        O = function(a, b, c, d, f) {
            var e = 1;
            b = x(b);
            if (a[b]) {
                a.e--;
                a = a[b];
                if (a.M) a.M++;
                else a.M = 1;
                try {
                    for (var g = a.length, h = 0; h < g; h++) {
                        var i = a[h];
                        if (i && !i.A) e &= nb(i, f) !== m
                    }
                } finally {
                    a.M--;
                    lb(c, d, b, a)
                }
            }
            return Boolean(e)
        },
        nb = function(a, b) {
            var c = a.handleEvent(b);
            a.ga && N(a.key);
            return c
        };
        bb(function(a, b) {
            if (!K[a]) return j;
            var c = K[a],
            d = c.type,
            f = L;
            if (! (d in f)) return j;
            f = f[d];
            var e,
            g;
            if (Ra === undefined) Ra = E && !r.addEventListener;
            if (Ra) {
                e = b || ba("window.event");
                var h = j in f,
                i = m in f;
                if (h) {
                    if (e.keyCode < 0 || e.returnValue != undefined) return j;
                    a: {
                        var n = m;
                        if (e.keyCode == 0) try {
                            e.keyCode = -1;
                            break a
                        } catch(q) {
                            n = j
                        }
                        if (n || e.returnValue == undefined) e.returnValue = j
                    }
                }
                n = fb();
                n.init(e, this);
                e = j;
                try {
                    if (h) {
                        for (var l = Za(), p = n.currentTarget; p; p = p.parentNode) l.push(p);
                        g = f[j];
                        g.e = g.f;
                        for (var t = l.length - 1; ! n.z && t >=
                        0 && g.e; t--) {
                            n.currentTarget = l[t];
                            e &= O(g, l[t], d, j, n)
                        }
                        if (i) {
                            g = f[m];
                            g.e = g.f;
                            for (t = 0; ! n.z && t < l.length && g.e; t++) {
                                n.currentTarget = l[t];
                                e &= O(g, l[t], d, m, n)
                            }
                        }
                    } else e = nb(c, n)
                } finally {
                    if (l) {
                        l.length = 0;
                        $a(l)
                    }
                    n.u();
                    gb(n)
                }
                return e
            }
            d = new I(b, this);
            try {
                e = nb(c, d)
            } finally {
                d.u()
            }
            return e
        });
        var P = function(a) {
            this.i = a
        };
        P.prototype.Z = function(a) {
            return a
        };
        P.prototype.$ = function(a) {
            return a
        };
        P.prototype.P = 0;
        P.prototype.update = function(a, b) {
            var c = Q(this.i, a); ! b || b.error || !b.result ? ob(c, k, this.P) : pb(c, b.result, this.P)
        };
        var R = function(a) {
            this.i = a
        };
        A(R, P);
        R.prototype.Z = function(a) {
            var b = a.params,
            c = b && b.optimistic,
            d = b && b.id;
            this.N = d;
            var f = Q(this.i, d).get();
            f = f ? qb(f) : {
                id: d,
                isSetByViewer: m,
                metadata: {}
            };
            var e;
            e = f || {};
            e.metadata = e.metadata || {};
            e.metadata.globalCounts = e.metadata.globalCounts || {};
            this.ra(f, b);
            this.Ja = f;
            if (c) {
                ob(Q(this.i, d), f);
                a = qb(a);
                delete a.params.optimistic
            }
            this.P = Q(this.i, d).s;
            return a
        };
        R.prototype.$ = function(a) {
            if (a.result) {
                var b = a.result,
                c = this.Ja;
                b.metadata = b.metadata || c.metadata;
                b.metadata.globalCounts = b.metadata.globalCounts || c.metadata.globalCounts;
                b.metadata.globalCounts.count = b.metadata.globalCounts.count || c.metadata.globalCounts.count
            }
            this.update(this.N, a);
            return a
        };
        var qb = function(a, b) {
            var c = b || {},
            d;
            for (d in a) {
                var f = a[d];
                if (typeof f != "function") c[d] = f && typeof f == "object" ? qb(a[d], c[d]) : a[d]
            }
            return c
        };
        var rb = function(a) {
            this.i = a
        };
        A(rb, R);
        rb.prototype.ra = function(a) {
            if (a.isSetByViewer && a.metadata.globalCounts.count != undefined) a.metadata.globalCounts.count = Math.max(a.metadata.globalCounts.count - 1, 0);
            a.isSetByViewer = m
        };
        var sb = function(a) {
            this.i = a
        };
        A(sb, P);
        sb.prototype.Z = function(a) {
            this.N = a.params && a.params.id;
            this.P = Q(this.i, this.N).s;
            return a
        };
        sb.prototype.$ = function(a) {
            this.update(this.N, a);
            return a
        };
        var tb = function(a) {
            this.i = a
        };
        A(tb, R);
        tb.prototype.ra = function(a, b) { ! a.isSetByViewer && a.metadata.globalCounts.count != undefined && a.metadata.globalCounts.count++;
            a.isSetByViewer = j;
            a.aclJson = b.aclJson
        };
        var ub = function() {};
        A(ub, G);
        o = ub.prototype;
        o.ha = j;
        o.ca = k;
        o.addEventListener = function(a, b, c, d) {
            ib(this, a, b, c, d)
        };
        o.removeEventListener = function(a, b, c, d) {
            kb(this, a, b, c, d)
        };
        o.dispatchEvent = function(a) {
            var b = a.type || a,
            c = L;
            if (b in c) {
                if (v(a)) a = new H(a, this);
                else if (a instanceof H) a.target = a.target || this;
                else {
                    var d = a;
                    a = new H(b, this);
                    wa(a, d)
                }
                d = 1;
                var f;
                c = c[b];
                b = j in c;
                var e;
                if (b) {
                    f = [];
                    for (e = this; e; e = e.ca) f.push(e);
                    e = c[j];
                    e.e = e.f;
                    for (var g = f.length - 1; ! a.z && g >= 0 && e.e; g--) {
                        a.currentTarget = f[g];
                        d &= O(e, f[g], a.type, j, a) && a.O != m
                    }
                }
                if (m in c) {
                    e = c[m];
                    e.e = e.f;
                    if (b) for (g = 0; ! a.z && g < f.length && e.e; g++) {
                        a.currentTarget = f[g];
                        d &= O(e, f[g], a.type, m, a) && a.O != m
                    } else for (f = this; ! a.z && f && e.e; f =
                    f.ca) {
                        a.currentTarget = f;
                        d &= O(e, f, a.type, m, a) && a.O != m
                    }
                }
                a = Boolean(d)
            } else a = j;
            return a
        };
        o.d = function() {
            ub.B.d.call(this);
            mb(this);
            this.ca = k
        };
        var vb = function(a, b) {
            this.ea = a || k;
            this.t = b || k;
            this.s = 1
        };
        A(vb, ub);
        vb.prototype.get = function() {
            return this.t || this.ea
        };
        var ob = function(a, b, c) {
            if (!c || c == a.s) {
                a.t = b;
                a.s++;
                a.dispatchEvent("change")
            }
        },
        pb = function(a, b, c) {
            if (!c || c == a.s) {
                a.t = k;
                a.s++;
                a.ea = b;
                a.dispatchEvent("change")
            } else {
                a.ea = b;
                a.t || a.dispatchEvent("change")
            }
        };
        var wb = function() {
            this.H = []
        };
        wb.prototype.D = 0;
        var xb = function(a, b) {
            if (! (a.D >= 1)) {
                b();
                return 0
            }
            if (! (a.H.length >= 1)) {
                a.H.push(b);
                return 1
            }
            return 2
        };
        var S = function(a) {
            this.da = {};
            this.fa = {};
            a = a || window.googleapis;
            this.T = a.plusones;
            this.Bb = a.people
        };
        S.prototype.get = function(a) {
            return yb(this, this.T.get(a))
        };
        S.prototype.insert = function(a) {
            return yb(this, this.T.insert(a))
        };
        S.prototype.remove = function(a) {
            return yb(this, this.T.remove(a))
        };
        var Q = function(a, b) {
            a.da[b] || (a.da[b] = new vb);
            return a.da[b]
        },
        zb = function(a, b) {
            a.fa[b] || (a.fa[b] = new wb);
            return a.fa[b]
        };
        S.prototype.pa = function(a, b) {
            var c = a.id;
            return qa(ib(Q(this, c), "change", y(function() {
                var d = Q(this, c);
                b(d.get(), !d.t)
            },
            this)))
        };
        var yb = function(a, b) {
            b.transport = {
                name: "wrapped_googleapis",
                execute: y(a.Ia, a, b.transport)
            };
            return b
        };
        S.prototype.Ia = function(a, b, c) {
            for (var d = {},
            f = [], e = [], g = 0, h = b.length; g < h; ++g) {
                var i = b[g],
                n = Ab(this, i);
                if (n) {
                    n.D++;
                    e.push(n)
                }
                n = i.id;
                d[n] = Bb(this, i); (i = d[n].Z(i)) && f.push(i)
            }
            a.execute(f, y(function(q) {
                for (var l = 0, p = e.length; l < p; ++l) {
                    var t = e[l];
                    for (t.D--; ! (t.D >= 1) && t.H.length;) t.H.shift()()
                }
                l = {};
                for (var Ka in d) if (p = d[Ka].$(q[Ka] || k)) l[Ka] = p;
                c(l)
            },
            this))
        };
        var Bb = function(a, b) {
            switch (b.method) {
            case "pos.plusones.get":
                return new sb(a);
            case "pos.plusones.insert":
                return new tb(a);
            case "pos.plusones.delete":
                return new rb(a);
            default:
                return new P(a)
            }
        },
        Ab = function(a, b) {
            var c = b.method,
            d = b.params;
            d = d && d.id;
            if ((c == "pos.plusones.insert" || c == "pos.plusones.delete") && d) return zb(a, d);
            return k
        };
        var Cb = function(a, b) {
            b || (b = {});
            var c = window,
            d = typeof a.href != "undefined" ? a.href: String(a),
            f = b.target || a.target,
            e = [],
            g;
            for (g in b) switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(g + "=" + b[g]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                e.push(g + "=" + (b[g] ? 1: 0))
            }
            e = e.join(",");
            if (b.noreferrer) {
                if (c = c.open("", f, e)) {
                    if (E) if (d.indexOf(";") != -1) d = "'" + d.replace(/'/g, "%27") + "'";
                    if (na.test(d)) {
                        if (d.indexOf("&") != -1) d = d.replace(ja, "&amp;");
                        if (d.indexOf("<") != -1) d = d.replace(ka, "&lt;");
                        if (d.indexOf(">") != -1) d = d.replace(la, "&gt;");
                        if (d.indexOf('"') != -1) d = d.replace(ma, "&quot;")
                    }
                    c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">');
                    c.document.close()
                }
            } else c = c.open(d, f, e);
            return c
        };
        var Db = function() {
            this.V = {}
        };
        Db.prototype.setData = function(a) {
            this.V = Object(a)
        };
        Db.prototype.Y = function() {
            return String(this.V.version || "")
        };
        var Eb = function(a, b) {
            var c = 800,
            d = 600;
            a = a || window;
            if (typeof c != "number") c = 800;
            if (typeof d != "number") d = 600;
            c = {
                left: Math.max(0, (a.screenX != k ? a.screenX: a.screenLeft) + ((a.outerWidth != k ? a.outerWidth: a.document.documentElement.clientWidth) >> 1) - (c >> 1)),
                top: Math.max(0, (a.screenY != k ? a.screenY: a.screenTop) + ((a.outerHeight != k ? a.outerHeight: a.document.documentElement.clientHeight) >> 1) - (d >> 1)),
                menubar: m,
                toolbar: m,
                location: m,
                status: j,
                scrollbars: j,
                width: c,
                height: d
            };
            if (b) c.target = b;
            return c
        };
        var Fb = function(a, b, c) {
            this.r = a;
            this.Wa = "GooglePlusOneSignup";
            this.o = "";
            this.Pa = "" + Math.floor(Math.random() * 1E9);
            a = c || window;
            this.ta = a.location.protocol + "//" + a.location.host;
            this.la = b
        },
        Gb = function(a) {
            if (window.localStorage && window.localStorage.ihatepopups) return j;
            return a.ba
        };
        Fb.prototype.Y = function() {
            return this.Sa
        };
        Fb.prototype.show = function(a, b) {
            this.U = b || k;
            if (this.o) {
                var c = this.o.indexOf("/", this.o.indexOf("://") + 3);
                this.Qa = c >= 0 ? this.o.substring(0, c) : this.o
            } else this.Qa = this.ta;
            c = this.o + "/_/+1/messageproxy";
            if (!this.xa) {
                var d = document.createElement("div");
                d.style.position = "absolute";
                d.style.left = "-1000px";
                d.style.top = "-1000px";
                d.style.width = "1px";
                d.style.height = "1px";
                this.xa = iframes.open(c, {
                    container: d
                },
                {},
                {
                    handleMessage: y(this.Ma, this)
                });
                document.body.appendChild(d)
            }
            c = this.o + "/+1/profile/?type=po&source=" +
            encodeURIComponent(this.r) + "&parent=" + encodeURIComponent(this.ta) + "&proxy=" + this.xa.getId() + (this.Ta ? "&ru=" + encodeURIComponent(this.Ta) : "");
            d = window.__P1_LOCALE ? "&hl=" + window.__P1_LOCALE: "";
            return Cb(c + d + "#" + this.Pa, Eb(a, this.Wa))
        };
        Fb.prototype.Ma = function(a) {
            if (this.U) try {
                var b = new Db;
                b.setData(a);
                this.ba = !!b.V.created;
                this.Sa = b.Y();
                this.U();
                this.U = k
            } catch(c) {
                this.la.log(c)
            }
        };
        var Hb = function(a) {
            return (a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
        },
        Jb = function(a) {
            var b = Hb(a),
            c = sa(arguments, 1);
            Ib(b, c);
            a.className = b.join(" ")
        },
        Ib = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) if (! (C(a, b[d]) >= 0)) {
                a.push(b[d]);
                c++
            }
            return c == b.length
        };
        var T = function(a) {
            this.ma = a
        };
        A(T, G);
        var U = new J(0, 100),
        Kb = [];
        T.prototype.pa = function(a, b, c, d, f) {
            if (!u(b)) {
                Kb[0] = b;
                b = Kb
            }
            for (var e = 0; e < b.length; e++) {
                var g = ib(a, b[e], c || this, d || m, f || this.ma || this);
                if (this.h) this.h[g] = j;
                else if (this.F) {
                    this.h = U.getObject();
                    this.h[this.F] = j;
                    this.F = k;
                    this.h[g] = j
                } else this.F = g
            }
            return this
        };
        T.prototype.d = function() {
            T.B.d.call(this);
            if (this.h) {
                for (var a in this.h) {
                    N(a);
                    delete this.h[a]
                }
                a = this.h;
                U.p.length < U.qa ? U.p.push(a) : Ua(U, a);
                this.h = k
            } else this.F && N(this.F)
        };
        T.prototype.handleEvent = function() {
            throw Error("EventHandler.handleEvent not implemented");
        };
        var Lb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
        var Mb = function(a) {
            this.r = a || "inline";
            this.b = {
                v: s,
                C: s,
                error: s
            }
        },
        Nb = function(a, b) {
            if (w(b)) {
                a.b.C = b;
                a.b.v = function(c) {
                    b({
                        evt: c
                    })
                }
            }
        };
        var Ob = function(a) {
            this.g = a.match(Lb)
        };
        var V = function(a, b, c, d, f, e) {
            this.ma = void 0;
            this.a = a;
            this.X = b;
            Jb(b, "esw");
            this.L = this.a.L;
            if (this.R = d || k) if ((a = this.R.getElementsByTagName("a")) && a[0]) a[0].onclick = y(function() {
                Pb(this, m);
                xb(zb(this.a.w, this.k), y(this.ya, this, z() - this.L));
                if (window.event) window.event.returnValue = m;
                return m
            },
            this);
            C(Hb(b), "eswa") >= 0 || Jb(b, "eswd");
            this.b = this.a.b;
            this.ua = f ? f.split(/,| /) : [];
            this.k = c;
            this.r = e || k;
            this.n = Q(this.a.w, c);
            this.pa(this.n, "change", this.K)
        };
        A(V, T);
        var Qb = {
            jb: "eswa",
            ib: "eswd",
            cb: "eswh",
            zb: "esww",
            ab: "eswe"
        };
        V.prototype.J = m;
        V.prototype.va = function(a) {
            if (a && a.error && a.error.code) {
                this.J = j;
                switch (a.error.code) {
                case 401:
                    this.a.Q.ba = m
                }
                this.b.error({
                    code: a.error.code,
                    message: a.error.message,
                    entity: this.k
                });
                this.K()
            } else a && this.b.C({
                resp: "plusone",
                state: a.isSetByViewer
            })
        };
        V.prototype.Va = function() {
            var a = this.n.get();
            a = !!a && a.isSetByViewer;
            this.b.v("click");
            var b;
            b = this.a.Q;
            if (Gb(b)) if (this.J) {
                Cb("https://www.google.com/support/profiles/?p=plusone_button_error", Eb(window, "GooglePlusOneHelp"));
                this.b.v("help_window");
                b = j
            } else b = m;
            else {
                b.show(window, y(this.Na, this, a)).focus();
                this.b.C({
                    req: "signup"
                });
                b = j
            }
            b || (Rb(this) ? this.b.v("blocked") : Sb(this, a))
        };
        var Sb = function(a, b) {
            if (window.gbar && window.gbar.sos) {
                var c = window.gbar.sos();
                if (!c || c.length == 0) {
                    a.b.v("signed_out");
                    window.location.href = "https://www.google.com/accounts/ServiceLogin?service=oz&continue=" + encodeURIComponent(window.location.href)
                }
            }
            if (c = window.google || k) {
                c.comm && c.comm.j && c.comm.j();
                c.j && c.j.cl && c.j.cl()
            }
            c = b ? a.ya: a.Ua;
            Pb(a, !b);
            c = xb(zb(a.a.w, a.k), y(c, a, z() - a.L));
            if (b && c != 2) window.setTimeout(y(a.K, a), 150);
            else c == 2 && a.b.v("throttler_rejected")
        };
        V.prototype.Ua = function(a) {
            var b = this.n.get();
            if (!b || !b.isSetByViewer) {
                a = a.toString(16);
                this.b.C({
                    req: "plusone",
                    evt: "set_plusone"
                });
                this.a.w.insert(Tb(this, {
                    id: this.k,
                    optimistic: j,
                    cdx: a,
                    source: this.r || this.a.r
                })).execute(y(this.va, this))
            }
            Ub(this, j)
        };
        V.prototype.ya = function(a) {
            var b = this.n.get();
            if (b && b.isSetByViewer) {
                a = a.toString(16);
                this.b.C({
                    req: "plusone",
                    evt: "set_unplusone"
                });
                this.a.w.remove(Tb(this, {
                    id: this.k,
                    cdx: a,
                    source: this.r || this.a.r
                })).execute(y(this.va, this))
            }
            Ub(this, m)
        };
        var Tb = function(a, b) {
            var c = a.a.Q.Y();
            if (c) b.profileVersion = c;
            return b
        },
        Pb = function(a, b) {
            if (a.R) a.R.style.display = b ? "": "none"
        },
        Ub = function(a, b) {
            for (var c = new Ob(window.location.href), d = 0, f = a.ua.length; d < f; ++d) {
                var e = a.ua[d];
                if (e) {
                    var g = c;
                    e = e.match(Lb);
                    var h = e[1];
                    if (!h) {
                        e[1] = g.g[1];
                        h = e[2]
                    }
                    if (!h) {
                        e[2] = g.g[2];
                        h = e[3]
                    }
                    if (!h) {
                        e[3] = g.g[3];
                        h = e[4]
                    }
                    if (!h) {
                        e[4] = g.g[4];
                        var i = e[5],
                        n = g.g[5];
                        if (h = i) {
                            if (i.charAt(0) != "/") if (g.g[3] && !n) i = "/" + i;
                            else {
                                var q = n.lastIndexOf("/");
                                if (q != -1) i = n.substr(0, q + 1) + i
                            }
                            n = e;
                            if (i == ".." ||
                            i == ".") q = "";
                            else if (i.indexOf("./") == -1 && i.indexOf("/.") == -1) q = i;
                            else {
                                q = i.lastIndexOf("/", 0) == 0;
                                i = i.split("/");
                                for (var l = [], p = 0; p < i.length;) {
                                    var t = i[p++];
                                    if (t == ".") q && p == i.length && l.push("");
                                    else if (t == "..") {
                                        if (l.length > 1 || l.length == 1 && l[0] != "") l.pop();
                                        q && p == i.length && l.push("")
                                    } else {
                                        l.push(t);
                                        q = j
                                    }
                                }
                                q = l.join("/")
                            }
                            n[5] = q
                        }
                    }
                    if (!h) {
                        e[5] = g.g[5];
                        h = e[6]
                    }
                    if (!h) {
                        e[6] = g.g[6];
                        h = e[7]
                    }
                    h || (e[7] = g.g[7]);
                    g = e[1];
                    h = e[2];
                    n = e[3];
                    q = e[4];
                    i = e[5];
                    l = e[6];
                    e = e[7];
                    p = [];
                    g && p.push(g, ":");
                    if (n) {
                        p.push("//");
                        h && p.push(h, "@");
                        p.push(n);
                        q && p.push(":", q)
                    }
                    i && p.push(i);
                    l && p.push("?", l);
                    e && p.push("#", e);
                    e = p.join("");
                    if (e.lastIndexOf("http://", 0) == 0 || e.lastIndexOf("https://", 0) == 0) {
                        g = {
                            entity: a.k,
                            toggle: b ? "on": "off"
                        };
                        if (window.google && window.google.kEI) g.ei = window.google.kEI;
                        g.zx = Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ z()).toString(36);
                        e = [e];
                        h = void 0;
                        for (h in g) {
                            n = h;
                            q = g[h];
                            i = e;
                            if (u(q)) for (l = 0; l < q.length; l++) {
                                i.push("&", n);
                                q[l] !== "" && i.push("=", ia(q[l]))
                            } else if (q != k) {
                                i.push("&",
                                n);
                                q !== "" && i.push("=", ia(q))
                            }
                        }
                        if (e[1]) {
                            g = e[0];
                            h = g.indexOf("#");
                            if (h >= 0) {
                                e.push(g.substr(h));
                                e[0] = g = g.substr(0, h)
                            }
                            h = g.indexOf("?");
                            if (h < 0) e[1] = "?";
                            else if (h == g.length - 1) e[1] = undefined
                        }
                        e = e.join(""); (new Image).src = e
                    }
                }
            }
        };
        V.prototype.K = function() {
            try {
                if (this.S) {
                    var a = this.S - z();
                    if (a > 0) {
                        window.setTimeout(y(this.K, this), a);
                        return
                    } else this.S = undefined
                }
                if (this.J) {
                    Vb(this, "eswe");
                    Pb(this, m)
                } else {
                    var b = this.n.get();
                    if (b) if (Rb(this)) {
                        Vb(this, "esww");
                        this.S = z() + 650
                    } else Vb(this, b.isSetByViewer ? "eswa": "eswd")
                }
            } catch(c) {
                this.a.la.log(c)
            }
        };
        var Vb = function(a, b) {
            var c = [],
            d;
            for (d in Qb) {
                var f = Qb[d];
                b != f && c.push(f)
            }
            d = a.X;
            f = Hb(d);
            if (v(c)) {
                c = C(f, c);
                c >= 0 && B.splice.call(f, c, 1)
            } else if (u(c)) for (var e = 0, g = 0; g < f.length; g++) if (C(c, f[g]) >= 0) {
                ta(f, g--, 1);
                e++
            }
            if (v(b) && !(C(f, b) >= 0)) f.push(b);
            else u(b) && Ib(f, b);
            d.className = f.join(" ")
        },
        Rb = function(a) {
            var b = zb(a.a.w, a.k);
            return !! a.S || !!b.H.length || !!b.D && !a.n.t
        };
        V.prototype.Na = function(a) {
            var b = Gb(this.a.Q);
            this.b.C({
                req: "signup",
                success: b
            });
            if (b) {
                this.J = m;
                Sb(this, a)
            }
        };
        V.prototype.d = function() {
            V.B.d.call(this)
        };
        var Wb = function(a) {
            this.b = a
        };
        Wb.prototype.log = function(a) {
            try {
                this.b && this.b(a)
            } catch(b) {}
        };
        var W = function(a, b, c) {
            a = a || {};
            this.c = {};
            this.a = new Mb(c);
            this.a.W = b || window.document;
            this.a.w = new S(a.googleapis);
            b = new Fb("g", new Wb(a.elog), window);
            b.ba = !!a.signed;
            if (c = a.base) {
                if (c.match(/.*\/$/)) c = c.substr(0, c.length - 1);
                b.o = c
            }
            this.a.Q = b;
            Nb(this.a, a.logEvent);
            b = this.a;
            c = a.logErr;
            if (w(c)) b.b.error = c;
            b = this.a;
            c = a.loadTime || z();
            b.L = c;
            this.na = a.logRender || k;
            Xb(this)
        },
        Yb;
        A(W, G);
        W.prototype.Oa = 0;
        aa("gbar.pw.init",
        function(a, b, c) {
            if (Yb) throw Error("Registry already initialized");
            a = new W(a, b, c);
            b = y(a.Ka, a);
            aa("gbar.pw.clk", b, void 0);
            b = y(a.La, a);
            aa("gbar.pw.hvr", b, void 0);
            Yb = a;
            if (a.na) try {
                a.na()
            } catch(d) {}
            return a
        },
        void 0);
        aa("gbar.pw.dsp",
        function() {
            Ta(Yb);
            Yb = k
        },
        void 0);
        var Xb = function(a) {
            var b = {};
            ra(a.a.W.getElementsByName("eswidget"),
            function(c) {
                if (!c.id) c.id = "gbpwm_" + W.prototype.Oa++;
                var d = c.id;
                if (d in this.c) {
                    b[d] = this.c[d];
                    delete this.c[d]
                } else if (c = Zb(this, c)) b[d] = c
            },
            a);
            $b(a);
            a.c = b
        },
        Zb = function(a, b) {
            var c = b.getAttribute("g:entity");
            if (!c) return k;
            if (b.getAttribute("g:type") != "plusone") return k;
            var d = b.getAttribute("g:undo"),
            f = undefined;
            if (d) f = a.a.W.getElementById(d);
            d = b.getAttribute("g:pingback");
            var e = b.getAttribute("g:source");
            c = new V(a.a, b, c, f, d, e);
            f = C(Hb(c.X),
            "eswa") >= 0;
            if (d = c.n.get()) d.isSetByViewer = f;
            else d = {
                id: c.k,
                isSetByViewer: f,
                metadata: {}
            };
            pb(c.n, d);
            return c
        };
        W.prototype.Ka = function(a) {
            ac(this, a);
            if (a.id)(a = this.c[a.id]) && a.Va()
        };
        W.prototype.La = function(a) {
            if (a) {
                ac(this, a);
                for (var b in this.c);
            }
        };
        var ac = function(a, b) {
            if (!b.id || !(b.id in a.c)) Xb(a);
            else if (b.id && b.id in a.c) {
                for (var c = a.c[b.id].X; c && c.parentNode;) c = c.parentNode;
                if (c != a.a.W) {
                    Ta(a.c[b.id]);
                    if (c = Zb(a, b)) a.c[b.id] = c
                }
            }
        },
        $b = function(a) {
            for (var b in a.c) Ta(a.c[b]);
            a.c = k
        };
        W.prototype.d = function() {
            $b(this);
            W.B.d.call(this)
        };
        var bc = {
            eb: 1,
            hb: 2,
            sb: 3,
            Za: 4,
            rb: 5,
            lb: 6,
            fb: 7,
            mb: 8,
            wb: 9,
            qb: 10,
            kb: 11,
            pb: 12,
            ob: 13,
            nb: 14,
            Ha: 15,
            Ga: 16,
            ub: 17,
            bb: 18,
            Fa: 19,
            vb: 20,
            tb: 21,
            $a: 22,
            gb: 23,
            xb: 24,
            yb: 25
        };
        var X = window.gbar;
        var Y = {
            za: 1,
            Ya: 2,
            Xa: 3,
            Ca: 4,
            Ba: 5,
            Ea: 6,
            Da: 7,
            Aa: 8
        };
        var cc = [],
        dc = k,
        Z = function(a, b) {
            var c = k;
            if (b) c = {
                m: b
            };
            X.tev && X.tev(a, "pw", c)
        };
        cc.push(["pw", {
            init: function(a) {
                a.signed = a.signed[0];
                var b = ba("gbar.logger.il");
                if (b) {
                    a.logRender = a.logRender || y(b, k, bc.Ha);
                    a.logEvent = a.logEvent || y(b, k, bc.Ga);
                    a.logErr = a.logErr || y(b, k, bc.Fa)
                }
                ba("gbar.pw.init")(a)
            }
        }]);
        Z(Y.Aa);
        Z(Y.Ca);
        var ec,
        fc;
        for (ec = 0; fc = X.bnc[ec]; ++ec) if (fc[0] == "pw") break;
        if (fc && !fc[1].l) {
            for (var gc = X.mdc, hc = X.mdi || {},
            ic = 0, jc; jc = cc[ic]; ++ic) {
                var $ = jc[0],
                kc = gc[$],
                lc = hc[$],
                mc;
                if (mc = kc) {
                    var nc;
                    if (nc = !lc) {
                        var oc;
                        a: {
                            var pc = $,
                            qc = X.mdd;
                            if (qc) try {
                                if (!dc) {
                                    dc = {};
                                    for (var rc = qc.split(/;/), sc = 0; sc < rc.length; ++sc) dc[rc[sc]] = j
                                }
                                oc = dc[pc];
                                break a
                            } catch(tc) {
                                X.logger && X.logger.ml(tc)
                            }
                            oc = m
                        }
                        nc = !oc
                    }
                    mc = nc
                }
                if (mc) {
                    Z(Y.Ea, $);
                    try {
                        jc[1].init(kc);
                        hc[$] = j
                    } catch(uc) {
                        X.logger && X.logger.ml(uc)
                    }
                    Z(Y.Da, $)
                }
            }
            var vc = X.qd.pw;
            if (vc) {
                X.qd.pw = [];
                for (var wc = 0, xc; xc = vc[wc]; ++wc) try {
                    xc()
                } catch(yc) {
                    X.logger &&
                    X.logger.ml(yc)
                }
            }
            fc[1].l = j;
            Z(Y.Ba);
            var zc;
            a: {
                for (var Ac = 0, Bc; Bc = X.bnc[Ac]; ++Ac) if ((Bc[1].auto || Bc[0] == "m") && !Bc[1].l) {
                    zc = m;
                    break a
                }
                zc = j
            }
            zc && Z(Y.za)
        };
    } catch(e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "pw.init"
        });
    }
})();
