(function() {
    try {
        ;
        (function() {
            var e = void 0,
            i = null,
            aa = encodeURIComponent,
            j = window,
            ba = navigator,
            da = Error,
            ea = parseInt,
            k = String,
            l = document,
            fa = decodeURIComponent,
            ha = Array,
            ia = Math;
            function ja(a, b) {
                return a.width = b
            }
            function ka(a, b) {
                return a.innerHTML = b
            }
            function la(a, b) {
                return a.remove = b
            }
            function ma(a, b) {
                return a.clear = b
            }
            function na(a, b) {
                return a.prototype = b
            }
            function oa(a, b) {
                return a.close = b
            }
            function pa(a, b) {
                return a.execute = b
            }
            function ta(a, b) {
                return a.height = b
            }
            var ua = "origin",
            n = "error",
            q = "push",
            va = "hash",
            r = "stringify",
            xa = "open",
            ya = "test",
            za = "shift",
            Aa = "width",
            Ba = "slice",
            s = "replace",
            Ca = "nodeType",
            t = "getElementById",
            Da = "innerHTML",
            Ea = "charAt",
            Fa = "JSON",
            v = "indexOf",
            Ga = "match",
            Ha = "remove",
            Ia = "createElement",
            Ja = "scrollHeight",
            Ka = "firstChild",
            La = "addEventListener",
            x = "method",
            Ma = "clear",
            Na = "attachEvent",
            Qa = "defaultView",
            Ra = "name",
            Sa = "code",
            Ta = "frameElement",
            Ua = "getTime",
            Va = "parse",
            Wa = "getElementsByTagName",
            Xa = "host",
            Ya = "documentElement",
            $a = "substr",
            ab = "warn",
            bb = "window",
            cb = "innerText",
            z = "length",
            A = "prototype",
            db = "size",
            eb = "overflowY",
            B = "setTimeout",
            fb = "document",
            C = "split",
            gb = "userAgent",
            D = "location",
            hb = "localStorage",
            E = "hasOwnProperty",
            ib = "getComputedStyle",
            F = "style",
            jb = "close",
            G = "body",
            kb = "parent",
            H = "call",
            lb = "lastIndexOf",
            mb = "getAttribute",
            nb = "protocol",
            ob = "enabled",
            sb = "clientHeight",
            tb = "charCodeAt",
            ub = "href",
            I = "substring",
            vb = "apply",
            wb = "navigator",
            xb = "parentNode",
            yb = "update",
            zb = "execute",
            Ab = "offsetTop",
            J = "height",
            Bb = "splice",
            Cb = "offsetHeight",
            K = "join",
            Db = "toLowerCase";
            function Eb() {
                return function() {}
            }
            function Fb(a) {
                return function() {
                    return this[a]
                }
            }
            function Gb(a) {
                return function() {
                    return a
                }
            }
            var N;
            function O(a, b, d) {
                function c(a) {
                    var b = d || {},
                    c;
                    for (c in b) b[E](c) && a[E](c) && (a[b[c]] || (a[b[c]] = a[c]))
                }
                for (var f = j, g = i, a = a[C]("."), h = 0, m; m = a[za](); h++) f[m] = f[m] || b[h] || {},
                g = f,
                f = f[m];
                typeof f === "object" ? c(f) : typeof f === "function" && (g[m] = function() {
                    var a = f[vb](i, arguments);
                    typeof a === "object" && c(a);
                    return a
                })
            };
            j.___jsl = j.___jsl || {};
            j.___jsl.u = "";
            j.___jsl.f = ["plusone", "googleapis"];
            j.___jsl.h = "s;googleapis.client:iframes-styles-bubble:plusone@gc/21773286-02b1a9f6/googleapis.client__iframes-styles-bubble__plusone;googleapis.client:iframes-styles-bubble@gc/21773286-02b1a9f6/googleapis.client__iframes-styles-bubble;googleapis.client:iframes@gc/21773286-02b1a9f6/googleapis.client__iframes;googleapis.client:plusone@gc/21773286-02b1a9f6/googleapis.client__plusone;googleapis.proxy@gc/21773286-02b1a9f6/googleapis.proxy;gwidget:plusone@gc/21773286-02b1a9f6/gwidget__plusone;iframes-styles-bubble!googleapis.client:iframes@gc/21773286-02b1a9f6/iframes-styles-bubble!googleapis.client--iframes;iframes-styles-bubble:plusone@gc/21773286-02b1a9f6/iframes-styles-bubble__plusone;iframes@gc/21773286-02b1a9f6/iframes;plusone-unsupported@gc/21773286-02b1a9f6/plusone-unsupported";
            var Hb = j.gapi || {};
            O("gapi", [Hb]);
            var Q = j.gadgets || {},
            Ib = j.shindig || {},
            R = j.osapi || {},
            google = j.google || {};
            O("gadgets", [Q]);
            O("google", [google]);
            O("shindig", [Ib]);
            O("osapi", [R]);
            var Jb = j.tamings___ || [],
            Kb = j.caja___;
            O("tamings___", [Jb]);
            j.gadgets.config ? (Q.i = j.gadgets.config, Q.i.k = Q.i.register, Q.i.get = Q.i.get, Q.i.w = Q.i.init, Q.i.update = Q.i[yb]) : Q.i = function() {
                function a(b, d) {
                    for (var c in d) d[E](c) && (typeof b[c] === "object" && typeof d[c] === "object" ? a(b[c], d[c]) : b[c] = d[c])
                }
                function b(a) {
                    var c = "";
                    if (a[Ca] == 3 || a[Ca] == 4) c = a.nodeValue;
                    else if (a[cb]) c = a[cb];
                    else if (a[Da]) c = a[Da];
                    else if (a[Ka]) {
                        c = [];
                        for (a = a[Ka]; a; a = a.nextSibling) c[q](b(a));
                        c = c[K]("")
                    }
                    return c
                }
                function d(c) {
                    var d;
                    d = l.scripts || l[Wa]("script");
                    if (!d || d[z] == 0) d = i;
                    else {
                        var g;
                        if (f.u) for (var h =
                        0; ! g && h < d[z]; ++h) {
                            var u = d[h];
                            u.src && u.src[v](f.u) == 0 && (g = u)
                        }
                        g || (g = d[d[z] - 1]);
                        d = !g.src ? i: g
                    }
                    if (d) {
                        var w;
                        d = b(d);
                        try {
                            w = (new Function("return (" + d + "\n)"))()
                        } catch(L) {}
                        if (typeof w !== "object") {
                            try {
                                w = (new Function("return ({" + d + "\n})"))()
                            } catch(M) {}
                            w = typeof w === "object" ? w: {}
                        }
                        f.f && f.f[z] == 1 && !w[f.f[0]] && (d = {},
                        d[f.f[0]] = w, w = d);
                        a(c, w); (w = j.___cfg) && a(c, w)
                    }
                }
                function c(a) {
                    for (var b in g) if (g[E](b)) for (var d = g[b], c = 0, f = d[z]; c < f; ++c) a(b, d[c])
                }
                var f,
                g = {},
                h = {};
                return {
                    k: function(a, b, d, c) {
                        var f = g[a];
                        f || (f = [], g[a] = f);
                        f[q]({
                            Yd: b || {},
                            $: d,
                            Uc: c
                        })
                    },
                    get: function(a) {
                        return a ? h[a] || {}: h
                    },
                    w: function(b, g) {
                        f = j.___jsl || {};
                        a(h, b);
                        d(h);
                        a(h, j.___config || {});
                        c(function(a, b) {
                            var d = h[a];
                            if (d && !g) {
                                var c = b.Yd,
                                f;
                                for (f in c) if (c[E](f) && !c[f](d[f])) throw da('Invalid config value "' + d[f] + '" for parameter "' + f + '" in component "' + a + '"');
                            }
                            b.$ && b.$(h)
                        })
                    },
                    update: function(b, d) {
                        var f = [];
                        c(function(a, c) { (b[E](a) || d && h && h[a]) && c.$ && c.Uc && f[q](c.$)
                        });
                        h = d ? {}: h || {};
                        a(h, b);
                        for (var g = 0, u = f[z]; g < u; ++g) f[g](h)
                    }
                }
            } ();
            O("gadgets.config", [Q, Q.i], {
                k: "register",
                get: "get",
                w: "init",
                update: "update"
            });
            if (j[Fa] && j[Fa][Va] && j[Fa][r]) Q.p = function() {
                function a(a) {
                    return this[a]
                }
                var b = /___$/;
                return {
                    parse: function(a) {
                        try {
                            return j[Fa][Va](a)
                        } catch(b) {
                            return ! 1
                        }
                    },
                    stringify: function(d) {
                        function c(b) {
                            return f[H](this, b, a)
                        }
                        var f = j[Fa][r],
                        g = ha[A].toJSON && f([{
                            x: 1
                        }]) === '"[{\\"x\\": 1}]"' ? c: f;
                        try {
                            return g(d,
                            function(a, c) {
                                return ! b[ya](a) ? c: e
                            })
                        } catch(h) {
                            return i
                        }
                    }
                }
            } ();
            if (!j[Fa] || !j[Fa][Va] || !j[Fa][r]) Q.p = function() {
                function a(a) {
                    return a < 10 ? "0" + a: a
                }
                function b(a) {
                    var f,
                    g,
                    h;
                    f = /[\"\\\x00-\x1f\x7f-\x9f]/g;
                    switch (typeof a) {
                    case "string":
                        return f[ya](a) ? '"' + a[s](f,
                        function(a) {
                            var b = d[a];
                            if (b) return b;
                            b = a[tb]();
                            return "\\u00" + ia.floor(b / 16).toString(16) + (b % 16).toString(16)
                        }) + '"': '"' + a + '"';
                    case "number":
                        return isFinite(a) ? k(a) : "null";
                    case "boolean":
                    case "null":
                        return k(a);
                    case "object":
                        if (!a) return "null";
                        f = [];
                        if (typeof a[z] === "number" && !a.propertyIsEnumerable("length")) {
                            h =
                            a[z];
                            for (g = 0; g < h; g += 1) f[q](b(a[g]) || "null");
                            return "[" + f[K](",") + "]"
                        }
                        for (g in a) ! /___$/ [ya](g) && a[E](g) && typeof g === "string" && (h = b(a[g])) && f[q](b(g) + ":" + h);
                        return "{" + f[K](",") + "}"
                    }
                    return ""
                }
                Date[A].toJSON = function() {
                    return [this.getUTCFullYear(), "-", a(this.getUTCMonth() + 1), "-", a(this.getUTCDate()), "T", a(this.getUTCHours()), ":", a(this.getUTCMinutes()), ":", a(this.getUTCSeconds()), "Z"][K]("")
                };
                var d = {
                    "\u0008": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\u000c": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                };
                return {
                    stringify: b,
                    parse: function(a) {
                        return /^[\],:{}\s]*$/ [ya](a[s](/\\["\\\/b-u]/g, "@")[s](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")[s](/(?:^|:|,)(?:\s*\[)+/g, "")) ? eval("(" + a + ")") : !1
                    }
                }
            } ();
            Q.p.dd = function(a) {
                var b = {};
                if (a === i || a === e) return b;
                for (var d in a) if (a[E](d)) {
                    var c = a[d];
                    i === c || e === c || (b[d] = typeof c === "string" ? c: Q.p[r](c))
                }
                return b
            };
            O("gadgets.json", [Q, Q.p], {
                dd: "flatten",
                parse: "parse",
                stringify: "stringify"
            });
            Q.log = function() {
                function a(a) {
                    b(1, a)
                }
                function b(a, b) { ! (a < d) && c && (a === 2 && c[ab] ? c[ab](b) : a === 3 && c[n] ? c[n](b) : c.log && c.log(b))
                }
                Q.warn = function(a) {
                    b(2, a)
                };
                Q.error = function(a) {
                    b(3, a)
                };
                Q.Sd = function(a) {
                    d = a
                };
                a.INFO = 1;
                a.WARNING = 2;
                a.NONE = 4;
                var d = 1,
                c = j.console ? j.console: j.opera ? j.opera.postError: e;
                return a
            } ();
            O("gadgets", [Q], {
                error: "error",
                Sd: "setLogLevel",
                warn: "warn"
            });
            O("gadgets.log", [Q, Q.log], {
                $d: "INFO",
                ee: "WARNING",
                NONE: "NONE"
            });
            Q.g = Q.g || {}; (function() {
                var a = [];
                Q.g.Fd = function(b) {
                    a[q](b)
                };
                Q.g.Od = function() {
                    for (var b = 0, d = a[z]; b < d; ++b) a[b]()
                }
            })();
            O("gadgets.util", [Q, Q.g], {
                Fd: "registerOnLoadHandler",
                Od: "runOnLoadHandlers"
            });
            Q.g = Q.g || {}; (function() {
                var a = i;
                Q.g.G = function(b) {
                    var d = typeof b === "undefined";
                    if (a !== i && d) return a;
                    for (var c = {},
                    b = b || l[D][ub], f = b[v]("?"), g = b[v]("#"), b = (g === -1 ? b[$a](f + 1) : [b[$a](f + 1, g - f - 1), "&", b[$a](g + 1)][K](""))[C]("&"), f = j.ie ? fa: unescape, g = 0, h = b[z]; g < h; ++g) {
                        var m = b[g][v]("=");
                        if (m !== -1) {
                            var p = b[g][I](0, m),
                            m = b[g][I](m + 1),
                            m = m[s](/\+/g, " ");
                            try {
                                c[p] = f(m)
                            } catch(y) {}
                        }
                    }
                    d && (a = c);
                    return c
                }
            })();
            Q.g.G();
            O("gadgets.util", [Q, Q.g], {
                G: "getUrlParameters"
            });
            function Lb() {
                function a() {
                    g[0] = 1732584193;
                    g[1] = 4023233417;
                    g[2] = 2562383102;
                    g[3] = 271733878;
                    g[4] = 3285377520;
                    u = o = 0
                }
                function b(a, b) {
                    return (a << b | a >>> 32 - b) & 4294967295
                }
                function d(a) {
                    for (var d = m, c = 0; c < 64; c += 4) d[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
                    for (c = 16; c < 80; c++) d[c] = b(d[c - 3] ^ d[c - 8] ^ d[c - 14] ^ d[c - 16], 1);
                    for (var a = g[0], f = g[1], h = g[2], p = g[3], y = g[4], o, u, c = 0; c < 80; c++) c < 40 ? c < 20 ? (o = p ^ f & (h ^ p), u = 1518500249) : (o = f ^ h ^ p, u = 1859775393) : c < 60 ? (o = f & h | p & (f | h), u = 2400959708) : (o = f ^ h ^ p, u = 3395469782),
                    o = b(a, 5) + o + y + u + d[c] & 4294967295,
                    y = p,
                    p = h,
                    h = b(f, 30),
                    f = a,
                    a = o;
                    g[0] = g[0] + a & 4294967295;
                    g[1] = g[1] + f & 4294967295;
                    g[2] = g[2] + h & 4294967295;
                    g[3] = g[3] + p & 4294967295;
                    g[4] = g[4] + y & 4294967295
                }
                function c(a, b) {
                    if (typeof a === "string") {
                        for (var a = unescape(aa(a)), c = [], f = 0, g = a[z]; f < g; ++f) c[q](a[tb](f));
                        a = c
                    }
                    b || (b = a[z]);
                    c = 0;
                    if (o == 0) for (; c + 64 < b;) d(a[Ba](c, c + 64)),
                    c += 64,
                    u += 64;
                    for (; c < b;) if (h[o++] = a[c++], u++, o == 64) {
                        o = 0;
                        for (d(h); c + 64 < b;) d(a[Ba](c, c + 64)),
                        c += 64,
                        u += 64
                    }
                }
                function f() {
                    var a = [],
                    b = u * 8;
                    o < 56 ? c(p, 56 - o) : c(p, 64 - (o - 56));
                    for (var f = 63; f >= 56; f--) h[f] = b & 255,
                    b >>>=
                    8;
                    d(h);
                    for (f = b = 0; f < 5; f++) for (var m = 24; m >= 0; m -= 8) a[b++] = g[f] >> m & 255;
                    return a
                }
                for (var g = [], h = [], m = [], p = [128], y = 1; y < 64; ++y) p[y] = 0;
                var o,
                u;
                a();
                return {
                    reset: a,
                    update: c,
                    $c: f,
                    bb: function() {
                        for (var a = f(), b = "", c = 0; c < a[z]; c++) b += "0123456789ABCDEF" [Ea](ia.floor(a[c] / 16)) + "0123456789ABCDEF" [Ea](a[c] % 16);
                        return b
                    }
                }
            };
            O("shindig.sha1", [Ib, Lb], {
                reset: "reset",
                update: "update",
                $c: "digest",
                bb: "digestString"
            });
            var S = j.googleapis || {};
            S.H = {};
            S.H.Ba = function(a, b) {
                var d = a[C]("."),
                c = j; ! (d[0] in c) && c.execScript && c.execScript("var " + d[0]);
                for (var f; d[z] && (f = d[za]());) ! d[z] && b !== e ? c[f] = b: c = c[f] ? c[f] : c[f] = {}
            };
            S.H.jb = function(a, b) {
                for (var d = a[C]("."), c = b || j, f; f = d[za]();) if (c[f] != i) c = c[f];
                else return i;
                return c
            };
            S.H.ne = function(a, b) {
                function d() {}
                na(d, b[A]);
                a.ue = b[A];
                na(a, new d)
            };
            O("googleapis", [S]);
            Q.g = Q.g || {};
            Q.g.createElement = function(a) {
                var b;
                if (!l[G] || l[G].namespaceURI) try {
                    b = l.createElementNS("http://www.w3.org/1999/xhtml", a)
                } catch(d) {}
                return b || l[Ia](a)
            };
            Q.g.Mb = function(a) {
                var b = Q.g[Ia]("iframe");
                try {
                    var d = ["<", "iframe"],
                    c = a || {},
                    f;
                    for (f in c) c[E](f) && (d[q](" "), d[q](f), d[q]('="'), d[q](Q.g.ra(c[f])), d[q]('"'));
                    d[q]("></");
                    d[q]("iframe");
                    d[q](">");
                    var g = Q.g[Ia](d[K](""));
                    if (g && (!b || g.tagName == b.tagName && g.namespaceURI == b.namespaceURI)) b = g
                } catch(h) {}
                var d = b,
                a = a || {},
                m;
                for (m in a) a[E](m) && (d[m] = a[m]);
                return b
            };
            Q.g.ed = function() {
                if (l[G]) return l[G];
                try {
                    var a = l.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                    if (a && a[z] == 1) return a[0]
                } catch(b) {}
                return l[Ya] || l
            };
            O("gadgets.util", [Q, Q.g], {
                createElement: "createElement",
                Mb: "createIframeElement",
                ed: "getBodyElement"
            });
            Q.z = Q.z || {};
            if (!Q.z.yb) Q.z.yb = function() {
                function a(a) {
                    typeof j[La] != "undefined" ? j[La]("message", a, !1) : typeof j[Na] != "undefined" && j[Na]("onmessage", a)
                }
                function b(a) {
                    var b = Q.p[Va](a.data);
                    if (b && b.f) {
                        var c = Q.e.Fa(b.f); (!f || !(typeof a[ua] !== "undefined" ? a[ua] !== c: a.domain !== /^.+:\/\/([^:]+).*/.exec(c)[1])) && d(b, a[ua])
                    }
                }
                var d,
                c,
                f = !0;
                return {
                    fd: Gb("wpm"),
                    oe: Gb(!0),
                    w: function(g, h) {
                        Q.i.k("rpc", i,
                        function(a) {
                            k((a ? a.rpc: {}).disableForceSecure) === "true" && (f = !1)
                        });
                        d = g;
                        c = h;
                        a(b);
                        c("..", !0);
                        return ! 0
                    },
                    Td: function(a) {
                        c(a, !0);
                        return ! 0
                    },
                    call: function(a, b, c) {
                        var d = Q.e.Fa(a),
                        f = Q.e.Pc(a);
                        d ? j[B](function() {
                            f.postMessage(Q.p[r](c), d)
                        },
                        0) : Q[n]("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                        return ! 0
                    }
                }
            } ();
            j.gadgets.rpc ? (Q.e = j.gadgets.rpc, Q.e.i = Q.e.config, Q.e.k = Q.e.register, Q.e.xb = Q.e.unregister, Q.e.qc = Q.e.registerDefault, Q.e.Dc = Q.e.unregisterDefault, Q.e.Rb = Q.e.forceParentVerifiable, Q.e.call = Q.e[H], Q.e.Wb = Q.e.getRelayUrl, Q.e.vb = Q.e.setRelayUrl, Q.e.tb = Q.e.setAuthToken, Q.e.Va = Q.e.setupReceiver, Q.e.gb = Q.e.getAuthToken, Q.e.rb = Q.e.removeReceiver, Q.e.Vb = Q.e.getRelayChannel, Q.e.pc = Q.e.receive, Q.e.qb = Q.e.receiveSameDomain, Q.e.W = Q.e.getOrigin, Q.e.Fa = Q.e.getTargetOrigin) : (Q.e = function() {
                function a() {}
                function b(a,
                b) {
                    if (!qa[a]) {
                        var c = ga;
                        b || (c = Pb);
                        qa[a] = c;
                        for (var d = Pa[a] || [], f = 0; f < d[z]; ++f) {
                            var h = d[f];
                            h.t = V[a];
                            c[H](a, h.f, h)
                        }
                        Pa[a] = []
                    }
                }
                function d() {
                    function a() {
                        dc = !0
                    }
                    ec || (typeof j[La] != "undefined" ? j[La]("unload", a, !1) : typeof j[Na] != "undefined" && j[Na]("onunload", a), ec = !0)
                }
                function c(b, c, f, h, g) {
                    if (!V[c] || V[c] !== f) Q[n]("Invalid auth token. " + V[c] + " vs " + f),
                    a(c, Vb);
                    g.onunload = function() {
                        X[c] && !dc && (a(c, fc), Q.e.rb(c))
                    };
                    d();
                    h = Q.p[Va](fa(h))
                }
                function f(c, d) {
                    if (c && typeof c.s === "string" && typeof c.f === "string" && c.a instanceof
                    ha) if (V[c.f] && V[c.f] !== c.t && (Q[n]("Invalid auth token. " + V[c.f] + " vs " + c.t), a(c.f, Vb)), c.s === "__ack") j[B](function() {
                        b(c.f, !0)
                    },
                    0);
                    else {
                        c.c && (c.callback = function(a) {
                            Q.e[H](c.f, "__cb", i, c.c, a)
                        });
                        if (d) {
                            var f = g(d);
                            c.origin = d;
                            var h = c.r;
                            if (!h || g(h) != f) h = d;
                            c[pb] = h
                        }
                        f = (U[c.s] || U[""])[vb](c, c.a);
                        c.c && typeof f !== "undefined" && Q.e[H](c.f, "__cb", i, c.c, f)
                    }
                }
                function g(a) {
                    if (!a) return "";
                    a = a[Db]();
                    a[v]("//") == 0 && (a = j[D][nb] + a);
                    a[v]("://") == -1 && (a = j[D][nb] + "//" + a);
                    var b = a[I](a[v]("://") + 3),
                    c = b[v]("/");
                    c != -1 && (b = b[I](0,
                    c));
                    var a = a[I](0, a[v]("://")),
                    c = "",
                    d = b[v](":");
                    if (d != -1) {
                        var f = b[I](d + 1),
                        b = b[I](0, d);
                        if (a === "http" && f !== "80" || a === "https" && f !== "443") c = ":" + f
                    }
                    return a + "://" + b + c
                }
                function h(a) {
                    if (a[Ea](0) == "/") {
                        var b = a[v]("|");
                        return {
                            id: b > 0 ? a[I](1, b) : a[I](1),
                            origin: b > 0 ? a[I](b + 1) : i
                        }
                    } else return i
                }
                function m(a) {
                    if (typeof a === "undefined" || a === "..") return j[kb];
                    var b = h(a);
                    if (b) return j.top.frames[b.id];
                    a = k(a);
                    return (b = j.frames[a]) ? b: (b = l[t](a)) && b.contentWindow ? b.contentWindow: i
                }
                function p(a, b) {
                    if (X[a] !== !0) {
                        typeof X[a] ===
                        "undefined" && (X[a] = 0);
                        var c = m(a);
                        if ((a === ".." || c != i) && ga.Td(a, b) === !0) X[a] = !0;
                        else if (X[a] !== !0 && X[a]++<10) j[B](function() {
                            p(a, b)
                        },
                        500);
                        else qa[a] = Pb,
                        X[a] = !0
                    }
                }
                function y(a) { (a = Za[a]) && a[I](0, 1) === "/" && (a = a[I](1, 2) === "/" ? l[D][nb] + a: l[D][nb] + "//" + l[D][Xa] + a);
                    return a
                }
                function o(a, b, c) { / http(s) ? :\ / \ / . + /[ya](b)||(b[v]("/ / ")==0?b=j[D][nb]+b:b[Ea](0)==" / "?b=j[D][nb]+"
                    //"+j[D][Xa]+b:b[v]("://")==-1&&(b=j[D][nb]+"//"+b));Za[a]=b;typeof c!=="undefined"&&(Oa[a]=!!c)}function u(a,b){b=b||"";V[a]=k(b);p(a,b)}
                    function w(a) {
                        a = (a.passReferrer || "")[C](":", 2);
                        ra = a[0] || "none";
                        sa = a[1] || "origin"
                    }
                    function L(a) {
                        if (k(a.useLegacyProtocol) === "true") ga = Q.z.ac,
                        ga.w(f, b)
                    }
                    function M(a, b) {
                        function c(d) {
                            d = d ? d.rpc: {};
                            w(d);
                            var f = d.parentRelayUrl || "",
                            f = g(P[kb] || b) + f;
                            o("..", f, k(d.useLegacyProtocol) === "true");
                            L(d);
                            u("..", a)
                        } ! P[kb] && b ? c({}) : Q.i.k("rpc", i, c)
                    }
                    function ca(a, b, c) {
                        if (a === "..") M(c || P.rpctoken || P.ifpctok || "", b);
                        else a: {
                            var d = i;
                            if (a[Ea](0) != "/") {
                                if (!Q.g) break a;
                                d = l[t](a);
                                if (!d) throw da("Cannot set up gadgets.rpc receiver with ID: " +
                                a + ", element not found.");
                            }
                            d = d && d.src;
                            b = b || Q.e.W(d);
                            o(a, b);
                            b = Q.g.G(d);
                            u(a, c || b.rpctoken)
                        }
                    }
                    var pb = "referer",
                    U = {},
                    Za = {},
                    Oa = {},
                    V = {},
                    qb = 0,
                    rb = {},
                    X = {},
                    wa = {},
                    P = {},
                    qa = {},
                    Pa = {},
                    ra = i,
                    sa = i,
                    Qb = j.top !== j.self,
                    Wb = j[Ra],
                    fc = 1,
                    Vb = 2,
                    Xb = j.console,
                    gc = Xb && Xb.log &&
                    function(a) {
                        Xb.log(a)
                    } || Eb(),
                    Pb = function() {
                        function a(b) {
                            return function() {
                                gc(b + ": call ignored")
                            }
                        }
                        return {
                            getCode: Gb("noop"),
                            isParentVerifiable: Gb(!0),
                            init: a("init"),
                            setup: a("setup"),
                            call: a("call")
                        }
                    } ();
                    Q.g && (P = Q.g.G());
                    var dc = !1,
                    ec = !1,
                    ga = P.rpctx == "flash" ? Q.z.Qb:
                    P.rpctx == "rmr" ? Q.z.Nd: typeof j.postMessage === "function" ? Q.z.yb: typeof j.postMessage === "object" ? Q.z.yb: j.ActiveXObject ? Q.z.Qb ? Q.z.Qb: Q.z.re: ba[gb][v]("WebKit") > 0 ? Q.z.Nd: ba.product === "Gecko" ? Q.z[Ta] : Q.z.ac;
                    U[""] = function() {
                        gc("Unknown RPC service: " + this.te)
                    };
                    U.__cb = function(a, b) {
                        var c = rb[a];
                        c && (delete rb[a], c[H](this, b))
                    };
                    return {
                        i: function(b) {
                            if (typeof b.Rd === "function") a = b.Rd
                        },
                        k: function(a, b) {
                            if (a === "__cb" || a === "__ack") throw da("Cannot overwrite callback/ack service");
                            if (a === "") throw da("Cannot overwrite default service: use registerDefault");
                            U[a] = b
                        },
                        xb: function(a) {
                            if (a === "__cb" || a === "__ack") throw da("Cannot delete callback/ack service");
                            if (a === "") throw da("Cannot delete default service: use unregisterDefault");
                            delete U[a]
                        },
                        qc: function(a) {
                            U[""] = a
                        },
                        Dc: function() {
                            delete U[""]
                        },
                        Rb: Eb(),
                        call: function(a, b, c, d) {
                            var a = a || "..",
                            f = "..";
                            a === ".." ? f = Wb: a[Ea](0) == "/" && (f = Q.e.W(j[D][ub]), f = "/" + Wb + (f ? "|" + f: "")); ++qb;
                            c && (rb[qb] = c);
                            var p = {
                                s: b,
                                f: f,
                                c: c ? qb: 0,
                                a: ha[A][Ba][H](arguments, 3),
                                t: V[a],
                                l: !!Oa[a]
                            },
                            o;
                            a: if (ra === "bidir" || ra === "c2p" && a === ".." || ra === "p2c" &&
                            a !== "..") {
                                o = j[D][ub];
                                var u = "?";
                                if (sa === "query") u = "#";
                                else if (sa === "hash") break a;
                                u = o[lb](u);
                                u = u === -1 ? o[z] : u;
                                o = o[I](0, u)
                            } else o = i;
                            o && (p.r = o);
                            if (o = !(a !== ".." && h(a) == i && !l[t](a))) {
                                a: {
                                    o = a;
                                    u = p;
                                    if (typeof wa[o] === "undefined") {
                                        wa[o] = !1;
                                        if (g(y(o)) !== g(j[D][ub])) {
                                            o = !1;
                                            break a
                                        }
                                        var U = m(o);
                                        try {
                                            wa[o] = U.gadgets.e.qb
                                        } catch(pb) {}
                                    }
                                    typeof wa[o] === "function" ? (wa[o](u), o = !0) : o = !1
                                }
                                o = !o
                            }
                            if (o) if (o = qa[a], !o && h(a) !== i && (o = ga), o) {
                                if (Oa[a]) o = Q.z.ac;
                                o[H](a, f, p) === !1 && (qa[a] = Pb, ga[H](a, f, p))
                            } else Pa[a] ? Pa[a][q](p) : Pa[a] = [p]
                        },
                        Wb: y,
                        vb: o,
                        tb: u,
                        Va: ca,
                        gb: function(a) {
                            return V[a]
                        },
                        rb: function(a) {
                            delete Za[a];
                            delete Oa[a];
                            delete V[a];
                            delete X[a];
                            delete wa[a];
                            delete qa[a]
                        },
                        Vb: function() {
                            return ga.fd()
                        },
                        pc: function(a, b) {
                            a[z] > 4 ? ga.ge(a, f) : c[vb](i, a.concat(b))
                        },
                        qb: function(a) {
                            a.a = ha[A][Ba][H](a.a);
                            j[B](function() {
                                f(a)
                            },
                            0)
                        },
                        W: g,
                        Fa: function(a) {
                            var b = i,
                            b = y(a);
                            b || (b = (b = h(a)) ? b[ua] : a == ".." ? P[kb] : l[t](a).src);
                            return g(b)
                        },
                        w: function() {
                            ga.w(f, b) === !1 && (ga = Pb);
                            Qb ? ca("..") : Q.i.k("rpc", i,
                            function(a) {
                                a = a.rpc || {};
                                w(a);
                                L(a)
                            })
                        },
                        Pc: m,
                        fe: h,
                        Zd: "__ack",
                        ae: Wb || "..",
                        de: 0,
                        ce: fc,
                        be: Vb
                    }
                } (),
                Q.e.w()); O("gadgets.rpc", [Q, Q.e], {
                    i: "config",
                    k: "register",
                    xb: "unregister",
                    qc: "registerDefault",
                    Dc: "unregisterDefault",
                    Rb: "forceParentVerifiable",
                    call: "call",
                    Wb: "getRelayUrl",
                    vb: "setRelayUrl",
                    tb: "setAuthToken",
                    Va: "setupReceiver",
                    gb: "getAuthToken",
                    rb: "removeReceiver",
                    Vb: "getRelayChannel",
                    pc: "receive",
                    qb: "receiveSameDomain",
                    W: "getOrigin",
                    Fa: "getTargetOrigin"
                }); Ib.random = function() {
                    function a(a) {
                        var b = Lb();
                        b[yb](a);
                        return b.bb()
                    }
                    var b = ia.random(),
                    d = 1,
                    c = (screen[Aa] * screen[Aa] + screen[J]) * 1E6,
                    f = j.onmousemove || Eb();
                    j.onmousemove = function(a) {
                        if (j.event) a = j.event;
                        var b = a.screenX + a.clientX << 16;
                        b += a.screenY + a.clientY;
                        b *= (new Date)[Ua]() % 1E6;
                        d = d * b % c;
                        return f[H](j, ha[A][Ba][H](arguments))
                    };
                    var g = a(l.cookie + "|" + l[D] + "|" + (new Date)[Ua]() + "|" + b);
                    return function() {
                        var b = d;
                        b += ea(g[$a](0, 20), 16);
                        g = a(g);
                        return b / (c + ia.pow(16, 20))
                    }
                } (); O("shindig", [Ib], {
                    random: "random"
                }); Q.window = Q[bb] || {}; Q[bb].Zb = function() {
                    var a = 0,
                    b = 0;
                    if (self.innerHeight) a = self.innerWidth,
                    b = self.innerHeight;
                    else if (l[Ya] && l[Ya][sb]) a = l[Ya].clientWidth,
                    b = l[Ya][sb];
                    else if (l[G]) a = l[G].clientWidth,
                    b = l[G][sb];
                    return {
                        width: a,
                        height: b
                    }
                }; O("gadgets.window", [Q, Q[bb]], {
                    Zb: "getViewportDimensions"
                }); S.qa = function() {
                    var a = /\s*;\s*/;
                    return {
                        get: function(b, d) {
                            for (var c = b + "=", f = (l.cookie || "")[C](a), g = 0, h; h = f[g]; ++g) if (h[v](c) == 0) return h[$a](c[z]);
                            return d
                        }
                    }
                } (); O("googleapis.cookies", [S, S.qa], {
                    get: "get"
                }); S.A = function() {
                    function a(a) {
                        for (var b = (new Date)[Ua](), c = 0; c < ca[z]; c++) j[B](function(c) {
                            return function() {
                                c(a, b)
                            }
                        } (ca[c]), 1)
                    }
                    function b() {
                        return S.j.P("transport.isProxyShared")
                    }
                    function d() {
                        return ! u && S.j.P("transport.useSharedProxy")
                    }
                    function c(a, c, d) {
                        var f = S.j.get().proxy,
                        h = S.j.P("gcv");
                        h && (f += (f[v]("?") >= 0 ? "&": "?") + "gcv=" + aa(h)); (h = S.j.P("jsh")) && (f += (f[v]("?") >= 0 ? "&": "?") + "jsh=" + aa(h));
                        f += "#parent=" + aa(Q.e.W(l[D][ub]));
                        f += "&rpctoken=" + a; (a = !!S.j.P("requestCache.enabled")) && (f += "&rcache=" + a);
                        (a = !!S.j.P("sessionCache.enabled")) && (f += "&scache=" + a); (a = b()) && (f += "&isProxyShared=" + a);
                        c && (f += "&superBatchSize=" + c);
                        d && (f += "&superBatchTimeout=" + d);
                        return f
                    }
                    function f(a) {
                        var b = Q.g.Mb({
                            id: "apiproxy",
                            name: "apiproxy"
                        });
                        if (!S.j.P("debug")) ja(b[F], "1px"),
                        ta(b[F], "1px"),
                        b[F].position = "absolute",
                        b[F].top = "-100px",
                        b.src = g() ? "about:blank": a;
                        return b
                    }
                    function g() {
                        if (!j[wb]) return ! 1;
                        var a = j[wb][gb] || "",
                        b = j[wb].product || "";
                        return a[v]("Opera") != 0 && a[v]("WebKit") == -1 && b == "Gecko" && a[v]("rv:1.") > 0
                    }
                    function h(a,
                    c) {
                        var d = f(c);
                        Q.e.k("ready:" + a,
                        function() {
                            Q.e.xb("ready:" + a);
                            y()
                        });
                        l[G].appendChild(d);
                        if (g()) d.src = c;
                        Q.e.Va(d.id, c);
                        o = d;
                        b() && Q.e.k("notifySharedProxyReady",
                        function() {
                            var a = this.callback;
                            w ? a && a(c) : a && L[q](function() {
                                a(c)
                            })
                        })
                    }
                    function m(b, f) {
                        var g = k(2147483647 * Ib.random() | 0),
                        m = c(g, b, f);
                        a("loading");
                        if (o) o.src = m,
                        Q.e[H]("apiproxy", "init");
                        else if (d()) {
                            var p = j[B](function() {
                                p = i;
                                Q[ab]("No response for shared proxy, ignored.");
                                u = !0;
                                h(g, m)
                            },
                            1E4);
                            Q.e[H]("..", "notifySharedProxyReady",
                            function(a) {
                                p != i && (j.clearTimeout(p),
                                p = i, Q.e.W(a) == Q.e.W(m) ? (Q.e.Va("/apiproxy", a), o = j[kb].frames.apiproxy, y()) : (Q[ab]("No matching shared proxy URL, ignored."), u = !0, h(g, m)))
                            })
                        } else h(g, m)
                    }
                    function p(a, b, c) {
                        o || m();
                        if (w) {
                            var f = d() ? "/apiproxy": "apiproxy";
                            Q.e[H](f, a,
                            function(b) {
                                b = Q.p[Va](b);
                                if (a == "makeRequest") {
                                    for (var d = {},
                                    f = 0; f < b[z]; f++) d[b[f].id] = b[f];
                                    c(d)
                                } else c(b)
                            },
                            b)
                        } else M[q]({
                            e: a,
                            Ld: b,
                            $: c
                        })
                    }
                    function y() {
                        if (!w) {
                            w = !0;
                            if (b()) for (var c = L, d = 0; d < c[z]; d++) c[d]();
                            for (d = 0; d < M[z]; d++) c = M[d],
                            p(c.e, c.Ld, c.$);
                            M = [];
                            a("ready")
                        }
                    }
                    var o,
                    u = !1,
                    w = !1,
                    L = [],
                    M = [],
                    ca = [];
                    return {
                        M: function(a) {
                            var a = a || {},
                            b = S.qa.get("SID") ? S.qa.get("BEAT") || j.__PVT: i;
                            b && (a.OriginToken = b);
                            b = i;
                            if (S.j.P("auth.useInterimAuth") === !1) {
                                if ("auth" in j.googleapis) {
                                    var c = j.googleapis.auth.getToken();
                                    c && (b = "OAuth " + c.access_token)
                                }
                            } else b = "InterimServerLogin service=google,auth=" + S.qa.get("SID");
                            b && (a.Authorization = b);
                            return a
                        },
                        oa: function(a) {
                            ca[q](a)
                        },
                        Sa: function(a) {
                            for (var b = 0; b < ca[z]; b++) if (ca[b] == a) {
                                ca[Bb](b, 1);
                                break
                            }
                        },
                        Ta: p,
                        Ac: m,
                        kc: y
                    }
                } (); O("googleapis.Transport", [S, S.A], {
                    M: "addAuthHeader",
                    oa: "addTransportInitListener",
                    Sa: "removeTransportInitListener",
                    Ta: "sendRequest",
                    Ac: "setupProxyIframe",
                    kc: "onProxyReady"
                });
                var T = j.iframer || {},
                W = j.iframes || {}; O("iframer", [T]); O("iframes", [W]); Q.g = Q.g || {}; Q.g.ea = function(a, b, d) {
                    for (var c = [], f = 2, g = arguments[z]; f < g; ++f) c[q](arguments[f]);
                    return function() {
                        for (var d = c[Ba](), f = 0, g = arguments[z]; f < g; ++f) d[q](arguments[f]);
                        return b[vb](a, d)
                    }
                }; Q.g.wd = function(a) {
                    var b,
                    d,
                    c = {};
                    for (b = 0; d = a[b]; ++b) c[d] = d;
                    return c
                }; O("gadgets.util", [Q, Q.g], {
                    ea: "makeClosure",
                    wd: "makeEnum"
                }); Q.g = Q.g || {}; Q.g.Gb = function(a, b, d, c) {
                    typeof a[La] != "undefined" ? a[La](b, d, c) : typeof a[Na] != "undefined" ? a[Na]("on" + b, d) : Q[ab]("cannot attachBrowserEvent: " + b)
                }; Q.g.Id = function(a, b, d, c) {
                    a.removeEventListener ? a.removeEventListener(b, d, c) : a.detachEvent ? a.detachEvent("on" + b, d) : Q[ab]("cannot removeBrowserEvent: " + b)
                }; O("gadgets.util", [Q, Q.g], {
                    Gb: "attachBrowserEvent",
                    Id: "removeBrowserEvent"
                }); Q.g = Q.g || {};
                (function() {
                    function a(a, b) {
                        return k.fromCharCode(b)
                    }
                    var b = {
                        0: !1,
                        10: !0,
                        13: !0,
                        34: !0,
                        39: !0,
                        60: !0,
                        62: !0,
                        92: !0,
                        8232: !0,
                        8233: !0,
                        65282: !0,
                        65287: !0,
                        65308: !0,
                        65310: !0,
                        65340: !0
                    };
                    Q.g.escape = function(a, b) {
                        if (a) if (typeof a === "string") return Q.g.ra(a);
                        else if (typeof a === "array") for (var f = 0, g = a[z]; f < g; ++f) a[f] = Q.g.escape(a[f]);
                        else if (typeof a === "object" && b) {
                            f = {};
                            for (g in a) a[E](g) && (f[Q.g.ra(g)] = Q.g.escape(a[g], !0));
                            return f
                        }
                        return a
                    };
                    Q.g.ra = function(a) {
                        if (!a) return a;
                        for (var c = [], f, g, h = 0, m = a[z]; h < m; ++h) f = a[tb](h),
                        g = b[f],
                        g === !0 ? c[q]("&#", f, ";") : g !== !1 && c[q](a[Ea](h));
                        return c[K]("")
                    };
                    Q.g.Wd = function(b) {
                        return ! b ? b: b[s](/&#([0-9]+);/g, a)
                    }
                })(); O("gadgets.util", [Q, Q.g], {
                    escape: "escape",
                    ra: "escapeString",
                    Wd: "unescapeString"
                }); Q.window = Q[bb] || {};
                (function() {
                    function a(a, b) {
                        j[ib](a, "").getPropertyValue(b)[Ga](/^([0-9]+)/);
                        return ea(RegExp.$1, 10)
                    }
                    function b() {
                        for (var b = 0, c = [l[G]]; c[z] > 0;) {
                            var f = c[za](),
                            g = f.childNodes;
                            if (typeof f[F] !== "undefined") {
                                var h = f[F][eb];
                                h || (h = (h = l[Qa][ib](f, i)) ? h[eb] : i);
                                if (h != "visible" && h != "inherit" && (h = f[F][J], h || (h = (h = l[Qa][ib](f, i)) ? h[J] : ""), h[z] > 0 && h != "auto")) continue
                            }
                            for (f = 0; f < g[z]; f++) {
                                h = g[f];
                                if (typeof h[Ab] !== "undefined" && typeof h[Cb] !== "undefined") var m = h[Ab] + h[Cb] + a(h, "margin-bottom"),
                                b = ia.max(b, m);
                                c[q](h)
                            }
                        }
                        return b +
                        a(l[G], "border-bottom") + a(l[G], "margin-bottom") + a(l[G], "padding-bottom")
                    }
                    function a(a, b) {
                        j[ib](a, "").getPropertyValue(b)[Ga](/^([0-9]+)/);
                        return ea(RegExp.$1, 10)
                    }
                    function b() {
                        for (var b = 0, c = [l[G]]; c[z] > 0;) {
                            var f = c[za](),
                            g = f.childNodes;
                            if (typeof f[F] !== "undefined") {
                                var h = f[F][eb];
                                h || (h = (h = l[Qa][ib](f, i)) ? h[eb] : i);
                                if (h != "visible" && h != "inherit" && (h = f[F][J], h || (h = (h = l[Qa][ib](f, i)) ? h[J] : ""), h[z] > 0 && h != "auto")) continue
                            }
                            for (f = 0; f < g[z]; f++) {
                                h = g[f];
                                if (typeof h[Ab] !== "undefined" && typeof h[Cb] !== "undefined") var m =
                                h[Ab] + h[Cb] + a(h, "margin-bottom"),
                                b = ia.max(b, m);
                                c[q](h)
                            }
                        }
                        return b + a(l[G], "border-bottom") + a(l[G], "margin-bottom") + a(l[G], "padding-bottom")
                    }
                    Q[bb].ib = function() {
                        var a = Q[bb].Zb()[J],
                        c = l[G],
                        f = l[Ya];
                        if (l.compatMode === "CSS1Compat" && f[Ja]) return f[Ja] !== a ? f[Ja] : f[Cb];
                        else if (ba[gb][v]("AppleWebKit") >= 0) return b();
                        else if (c && f) {
                            var g = f[Ja],
                            h = f[Cb];
                            f[sb] !== h && (g = c[Ja], h = c[Cb]);
                            return g > a ? g > h ? g: h: g < h ? g: h
                        }
                    }
                })(); O("gadgets.window", [Q, Q[bb]], {
                    ib: "getHeight"
                }); R.fa = function() {
                    function a(a) {
                        var b = {
                            method: a.request[x],
                            id: a.key
                        };
                        a.request.rpc && (b.params = a.request.rpc);
                        return b
                    }
                    var b = {},
                    d = [];
                    pa(b,
                    function(b) {
                        function f(a) {
                            a[n] && (g.error = a[n]);
                            for (var f = 0; f < d[z]; f++) {
                                var h = d[f].key,
                                o = a[h];
                                o && (g[h] = o[n] ? o: o.data || o.result)
                            }
                            m--;
                            m === 0 && b(g)
                        }
                        for (var g = {},
                        h = {},
                        m = 0, p = [], y = 0; y < d[z]; y++) {
                            var o = d[y].request.transport;
                            h[o[Ra]] || (p[q](o), m++);
                            h[o[Ra]] = h[o[Ra]] || [];
                            h[o[Ra]][q](a(d[y]))
                        }
                        for (y = 0; y < p[z]; y++) p[y][zb](h[p[y][Ra]], f);
                        m == 0 && j[B](function() {
                            b(g)
                        },
                        0)
                    });
                    b.add = function(a,
                    f) {
                        f && a && d[q]({
                            key: a,
                            request: f
                        });
                        return b
                    };
                    return b
                }; R.ab = function(a, b) {
                    if (a !== "newBatch") {
                        for (var d = a[C]("."), c = R, f = 0; f < d[z] - 1; f++) c[d[f]] = c[d[f]] || {},
                        c = c[d[f]];
                        var g = d[d[z] - 1];
                        c[g] ? (c.__dupwarn || Q[ab]("Skipping duplicate osapi method definition " + a + " on transport " + b[Ra] + "; others may exist, but suppressing warnings"), c.__dupwarn = !0) : (c[g] = function(c) {
                            c = c || {};
                            c.userId = c.userId || "@viewer";
                            c.groupId = c.groupId || "@self";
                            return new R.la(a, b, c)
                        },
                        typeof Jb !== "undefined" && Jb[q](function() {
                            Kb.qe(c[g], a)
                        }))
                    }
                };
                R.la = function(a, b, d) {
                    this.method = a;
                    this.transport = b;
                    this.rpc = d
                }; pa(R.la[A],
                function(a) {
                    var b = typeof Kb !== "undefined" && Kb.Xb && Kb.Xb(),
                    d = b ? Kb.Xb() : this,
                    c = b ? Kb.ve(a) : a,
                    a = R.fa();
                    a.add(this[x], this);
                    a[zb](function(a) {
                        a[n] ? c[H](d, a[n]) : c[H](d, a[d[x]])
                    })
                }); O("osapi.newBatch", [R, R.fa], {
                    add: "add",
                    execute: "execute"
                }); O("osapi", [R], {
                    ab: "_registerMethod",
                    la: "_BoundCall"
                }); O("osapi._BoundCall.prototype", [R, R.la, R.la[A]], {
                    execute: "execute"
                }); S.Ua = function() {
                    function a(a, d) {
                        return {
                            execute: function(c) {
                                S.A.Ta(a, d, c || Eb())
                            }
                        }
                    }
                    return {
                        clear: function() {
                            var b = {
                                headers: S.A.M()
                            };
                            return a("clear", b)
                        },
                        get: function(b) {
                            b = {
                                headers: S.A.M(),
                                key: b
                            };
                            return a("get", b)
                        },
                        remove: function(b) {
                            b = {
                                headers: S.A.M(),
                                key: b
                            };
                            return a("remove", b)
                        },
                        set: function(b, d) {
                            var c = {
                                headers: S.A.M(),
                                key: b,
                                value: d
                            };
                            return a("set", c)
                        }
                    }
                } (); O("googleapis.session", [S, S.Ua], {
                    M: "addAuthHeader",
                    clear: "clear",
                    get: "get",
                    remove: "remove",
                    set: "set"
                }); W.g = {}; W.g.Ya = "friendlyIframe"; W.g.Vc = function(a) {
                    return !! a[fb]
                }; W.g.Ga = function(a) {
                    var b = a[kb];
                    return a != b && W.g.Vc(b) ? W.g.Ga(b) : a
                }; W.g.me = function(a) {
                    return W.g.Ga(a) != a && a[Ta] && a[Ta][Ra] == W.g.Ya
                }; W.g.od = function() {
                    var a = j[wb] || {},
                    b = a[gb] || "",
                    a = a.product || "";
                    return b[v]("Opera") != 0 && b[v]("WebKit") == -1 && a == "Gecko" && b[v]("rv:1.") > 0
                };
                var Mb;
                if (j.iframes[xa]) W.Eb = W.allow, oa(W, W[jb]), W.hb = W.getGoogleConnectJsUri, W.Tb = W.getHandler, W.Ub = W.getParentInfo, W.cc = W.iframer, W.open = W[xa], W.mc = W.propagate, W.oc = W.ready, W.sc = W.resize, W.wc = W.setGoogleConnectJsVersion, W.xc = W.setJsHint, W.ub = W.setHandler, Y = j.IframeBase, na(Y, j.IframeBase[A]), N = Y[A], N.N = Y[A].addCallback, N.ba = Y[A].getMethods, N.ca = Y[A].getOpenerIframe, N.O = Y[A].getOpenParams, N.da = Y[A].getParams, N.ia = Y[A].removeCallback, Z = j.Iframe, na(Z, j.Iframe[A]), N = Z[A], oa(N, Z[A][jb]), N.Pb = Z[A].exposeMethod,
                N.aa = Z[A].getId, N.Da = Z[A].getIframeEl, N.lb = Z[A].getSiteEl, N.Ka = Z[A].openInto, la(N, Z[A][Ha]), N.yc = Z[A].setSiteEl, N.N = Z[A].addCallback, N.ba = Z[A].getMethods, N.ca = Z[A].getOpenerIframe, N.O = Z[A].getOpenParams, N.da = Z[A].getParams, N.ia = Z[A].removeCallback, $ = j.IframeProxy, na($, j.IframeProxy[A]), N = $[A], N.N = $[A].addCallback, N.ba = $[A].getMethods, N.ca = $[A].getOpenerIframe, N.O = $[A].getOpenParams, N.da = $[A].getParams, N.ia = $[A].removeCallback, W.Q = j.iframes.handlers, W.Q.get = W.Q.get, W.Q.set = W.Q.set, W.tc = W.resizeMe,
                W.zc = W.setVersionOverride; else {
                    var Nb = {
                        open: "open",
                        onready: "ready",
                        close: "close",
                        onresize: "resize",
                        onOpen: "open",
                        onReady: "ready",
                        onClose: "close",
                        onResize: "resize"
                    },
                    Ob = {
                        onBeforeParentOpen: "beforeparentopen"
                    },
                    Rb = {
                        longdesc: !0,
                        name: !0,
                        src: !0,
                        frameborder: !0,
                        marginwidth: !0,
                        marginheight: !0,
                        scrolling: !0,
                        align: !0,
                        height: !0,
                        width: !0,
                        id: !0,
                        "class": !0,
                        style: !0,
                        tabindex: !0,
                        hspace: !0,
                        vspace: !0,
                        allowtransparency: !0
                    },
                    Sb = {
                        onOpen: function(a) {
                            var b = a.O();
                            a.Ka(b.container || b.element);
                            return a
                        },
                        onClose: function(a) {
                            a[Ha]()
                        }
                    },
                    Tb = aa || escape,
                    Yb = function() {
                        var a = W.g.Ga(j),
                        b = {
                            height: 0,
                            name: W.g.Ya,
                            style: "left:0;position:absolute;top:0;z-index:-10000",
                            width: 0
                        },
                        d = a[fb][Ia]("ins");
                        d.className = "friendlyIframeContainer";
                        ka(d, Ub("", "about:blank", b));
                        a[fb][G].appendChild(d);
                        a = d[Ka].contentWindow;
                        W.fb[q](a);
                        return a
                    },
                    Zb = function(a) {
                        Q[n](a[K](""))
                    },
                    $b = function(a) {
                        var b = ['<html><body><script src="', W.hb(), '"><\/script></body></html>'][K]("");
                        a[xa]();
                        a.write(b);
                        a[jb]()
                    },
                    ac = function() {
                        W.bc++;
                        return ["I", W.bc, "_", (new Date)[Ua]()][K]("")
                    },
                    Ub = function(a, b, d) {
                        var d = d || {},
                        a = {
                            allowtransparency: "true",
                            frameborder: 0,
                            hspace: 0,
                            id: a,
                            marginheight: 0,
                            marginwidth: 0,
                            name: a,
                            scrolling: "no",
                            src: b,
                            style: "",
                            tabindex: "-1",
                            vspace: 0,
                            width: "100%"
                        },
                        c;
                        for (c in d) a[c] = d[c];
                        b = [];
                        b[q]("<iframe ");
                        for (c in a) Rb[c[Db]()] ? (d = k(a[c]), b[q](c), b[q]('="'), b[q](Q.g.ra(c[Db]() == "style" ? bc(d) : d)), b[q]('" ')) : Zb(['Iframe attribute "', c, '" not allowed.']);
                        b[q]("></iframe>");
                        return b[K]("")
                    },
                    bc = function(a) {
                        if (!a) return "";
                        for (var b = [], a = a[C](";"), d = 0, c = a[z]; d < c; ++d) {
                            var f =
                            a[d][C](":");
                            f[z] == 2 && f[0][Ga](/^[ a-zA-Z_-]+$/) && f[1][Ga](/^[ +.%0-9a-zA-Z_-]+$/) ? b[q](f[K](":")) : Zb(['Iframe style "', a[d], '" not allowed.'])
                        }
                        return b[K](";")
                    },
                    cc = function(a) {
                        if (a[v]("http:") == 0 || a[v]("https:") == 0) return a;
                        if (a[v]("//") == 0) return j[D][nb] + a;
                        if (a[v]("/") == 0) return j[D][nb] + "//" + j[D][Xa] + a;
                        var b = j[D][nb] + "//" + j[D][Xa] + j[D].pathname;
                        return b[I](0, b[lb]("/") + 1) + a
                    },
                    hc = function(a) {
                        return a instanceof ha ? a[K](",") : a instanceof Object ? Q.p[r](a) : a
                    },
                    ic = function(a, b, d) {
                        var c = {},
                        f = a[v]("#");
                        f == -1 ? (c.hash = i, c.Z = a) : (c.hash = a[I](f + 1), c.Z = a[I](0, f));
                        a = c.Z[v]("?");
                        a == -1 ? c.ha = i: (c.ha = c.Z[I](a + 1), c.Z = c.Z[I](0, a));
                        var a = d ? c[va] ? [c[va]] : [] : c.ha ? [c.ha] : [],
                        g;
                        for (g in b) f = hc(b[g]),
                        a[q]([Tb(g), Tb(f)][K]("="));
                        d ? c.hash = a[K]("&") : c.ha = a[K]("&");
                        return c.Z + (c.ha ? "?" + c.ha: "") + (c[va] ? "#" + c[va] : "")
                    },
                    jc = function() {
                        return Q.i.get("googleapis.config") || {}
                    },
                    kc = function(a) {
                        var b = jc().elog;
                        if (b) try {
                            b(a)
                        } catch(d) {}
                    },
                    mc = function(a) {
                        lc("jsh", a)
                    },
                    lc = function(a, b) {
                        var d = {};
                        d[a] = b;
                        var c = {};
                        c["googleapis.config"] =
                        d;
                        Q.i[yb](c)
                    },
                    nc = function(a, b) {
                        var d = b || {},
                        c;
                        for (c in a) d[c] = a[c];
                        return d
                    },
                    oc = function(a) {
                        W.Pa[a] || (W.Pa[a] = {},
                        Q.e.k(a,
                        function(b, d) {
                            var c = this.f;
                            if (typeof b == "string" && !(b in {}) && !(c in {})) {
                                var f = this.callback,
                                g = W.Pa[a][c],
                                h;
                                g && g[E](b) ? h = g[b] : W.sa[E](a) && (h = W.sa[a]);
                                if (h) return c = ha[A][Ba][H](arguments, 1),
                                h._iframe_wrapped_rpc_ && f && c[q](f),
                                h[vb]({},
                                c)
                            }
                            Zb(['Unregistered call in window "', j[Ra], '" for method "', a, '", via proxyId "', b, '" from frame "', c, '".']);
                            return i
                        }));
                        return W.Pa[a]
                    },
                    pc = function(a,
                    b, d, c, f) {
                        var g = [],
                        h;
                        for (h in a) {
                            var m = b,
                            p = d,
                            y = a[h],
                            o = c,
                            u = oc(h);
                            u[m] = u[m] || {};
                            o = Q.g.ea(o, y);
                            y._iframe_wrapped_rpc_ && (o._iframe_wrapped_rpc_ = !0);
                            u[m][p] = o;
                            g[q](h)
                        }
                        if (f) for (h in W.sa) g[q](h);
                        return g[K](",")
                    },
                    rc = function(a, b, d) {
                        function c(c) {
                            var g = ha[A][Ba][H](arguments, 0),
                            h = g[g[z] - 1];
                            if (typeof h === "function") {
                                var m = h;
                                g.pop()
                            }
                            g.unshift(b, a, m, d); (h = qc(b)) ? (h = h.gadgets, h.e[H][vb](h.e, g)) : Zb(['RPC not sent. Target iframeId "', b, '" not found.'])
                        }
                        c._iframe_wrapped_rpc_ = !0;
                        return c
                    },
                    qc = function(a) {
                        if (a == "..") return j;
                        else if (l[t](a)) return j;
                        else for (var b = 0; b < W.fb[z]; b++) try {
                            var d = W.fb[b];
                            if (d && d[fb] && (d[fb] || l)[t](a)) return d
                        } catch(c) {}
                        return i
                    },
                    sc = function(a, b, d) {
                        var c = {};
                        if (a && a._methods) for (var a = a._methods[C](","), f = 0; f < a[z]; f++) {
                            var g = a[f];
                            c[g] = rc(g, b, d)
                        }
                        return c
                    },
                    tc = function(a) {
                        var b;
                        if (b = T) if (b = T._open) if (b = a[F] != "inline") if (b = a.inline !== !0) {
                            a: {
                                if (a = a.container) if (typeof a == "string" && l[t](a)) {
                                    a = !0;
                                    break a
                                } else if (l == (a.ownerDocument || a[fb])) {
                                    a = !0;
                                    break a
                                }
                                a = !1
                            }
                            b = !a
                        }
                        return b
                    },
                    uc = function(a) {
                        a && a[xb] && a[xb].removeChild(a)
                    },
                    vc = function(a) {
                        function b() {}
                        na(b, Y[A]);
                        na(a, new b)
                    },
                    Y = function(a, b, d, c, f, g, h) {
                        if (a[v](":") == 0) {
                            var m = a = Q.i.get("iframes")[a[I](1)] || {},
                            p;
                            p = a.url;
                            p = (p || "")[s](/:session_index:/g, jc().sessionIndex || "0");
                            p = p[s](/:socialhost:/g, Q.i.get("iframes")[":socialhost:"] || "");
                            m.url = p;
                            a.params = a.params || {}
                        } else a = {
                            url: a
                        };
                        a.url = cc(a.url);
                        this.i = a;
                        this.openParams = this.ob = b;
                        this.S = d || {};
                        this.C = c;
                        this.pa = {};
                        this.Sc(f);
                        g && this.N("close", g);
                        this.R = h;
                        if (b && b.superbatch || this.i.superbatch) b = this.S,
                        d = Q.i.get("googleapis.config"),
                        d.debug && (b["#debug"] = !0),
                        d.transport && d.transport.isProxyShared && (b["#useSharedProxy"] = !0),
                        d.requestCache && d.requestCache[ob] && (b["#rcache"] = !0),
                        d.sessionCache && d.sessionCache[ob] && (b["#scache"] = !0)
                    };
                    N = Y[A];
                    N.O = Fb("ob");
                    N.da = Fb("S");
                    N.ba = Fb("C");
                    N.ca = Fb("R");
                    N.Sc = function(a) {
                        var b = this.hd();
                        if (typeof b === "function") b = b(this);
                        else {
                            var d = {},
                            c;
                            for (c in b) {
                                var f = b[c];
                                d[c] = typeof f === "function" ? Q.g.ea(b, f, this) : f
                            }
                            b = d
                        }
                        for (var g in a) d = b[g],
                        typeof d === "function" && this.N(a[g], Q.g.ea(b, d))
                    };
                    N.N = function(a,
                    b) {
                        this.pa[a] = this.pa[a] || [];
                        this.pa[a][q](b)
                    };
                    N.ia = function(a, b) {
                        var d = this.pa[a];
                        if (d) for (var c = 0, f = d[z]; c < f; ++c) if (d[c] === b) {
                            d[Bb](c, 1);
                            break
                        }
                    };
                    N.X = function(a, b) {
                        var d,
                        c = this.pa[a];
                        if (c) for (var f = ha[A][Ba][H](arguments, 1), g = 0, h = c[z]; g < h; ++g) try {
                            d = c[g][vb]({},
                            f)
                        } catch(m) {
                            Zb(['Exception when calling callback "', a, '" with exception "', m, '".']),
                            kc(m)
                        }
                        return d
                    };
                    N.hd = function() {
                        var a = this.ob[F];
                        if (a && W.Wa[a]) return W.Wa[a];
                        else a && Q[ab](['Missing handler for style "', a, '". Continuing with default handler.'][K](""));
                        return Sb
                    };
                    var Z = function(a, b, d, c, f, g) {
                        Y[H](this, a, b, d, c, Nb, f, g);
                        this.id = b.id || ac();
                        this.Xd = !!b.rpcToken;
                        this.uc = b.rpcToken || ia.round(Ib.random() * 1E9);
                        var a = this.S,
                        b = {},
                        d = this.i.params || {},
                        h;
                        for (h in a) h[v]("#") == 0 && (b[h[I](1)] = a[h]),
                        d[h] == "#" && (b[h] = a[h]);
                        for (var m in b) delete a["#" + m],
                        delete a[m];
                        this.pd = b;
                        this.eb = {};
                        this.X("open");
                        nc(this.eb, this)
                    };
                    vc(Z);
                    N = Z[A];
                    N.Ka = function(a, b) {
                        var d = this.i.url,
                        c = j[D][nb] + "//" + j[D][Xa],
                        f = this.id,
                        g = this.S,
                        h = jc().gcv; ! g.gcv && h && (g.gcv = h);
                        h = jc().jsh; ! g.jsh && h &&
                        (g.jsh = h);
                        g = nc(this.C);
                        g._ready = this.nb;
                        g._close = this[jb];
                        g._open = this.Cd;
                        g._resizeMe = this.Md;
                        h = this.pd;
                        h.id = f;
                        h.parent = c;
                        h.rpctoken = this.uc;
                        h._methods = pc(g, f, "", this, !0);
                        d = ic(d, this.S, !1);
                        d = ic(d, h, !0);
                        a = typeof a === "string" ? l[t](a) : a;
                        if (this.Xd) ka(a, Ub(f, d, b));
                        else if (W.g.od()) {
                            ka(a, Ub(f, "about:blank", b));
                            a[Ka].src = d;
                            try {
                                a[Ka].contentDocument[D].href = d
                            } catch(m) {}
                        } else ka(a, Ub(f, d, b));
                        this.cb = a;
                        this.Ia = a[Ka];
                        W.Ha[f] = this;
                        Q.e.tb(f, this.uc);
                        Q.e.vb(f, d);
                        return this
                    };
                    N.Pb = function(a, b) {
                        this.eb[a] = b
                    };
                    N.aa =
                    Fb("id");
                    N.Da = Fb("Ia");
                    N.lb = Fb("cb");
                    N.yc = function(a) {
                        this.cb = a
                    };
                    N.nb = function(a) {
                        var b = sc(a, this.id, "");
                        this.R && typeof this.C._ready == "function" && (a._methods = pc(b, this.R.aa(), this.id, this, !1), this.C._ready(a));
                        nc(a, this);
                        nc(b, this);
                        this.X("ready")
                    };
                    N.Hd = function(a, b, d) {
                        d._methods = pc(sc(d, a, ""), this.id, a, this, !1);
                        b(d)
                    };
                    oa(N,
                    function(a) {
                        a = this.X("close", a);
                        if (j[Ta] && j[Ta][Ra] == W.g.Ya) {
                            var b = j[Ta],
                            d = b[xb];
                            d.className == "friendlyIframeContainer" ? uc(d) : uc(b)
                        }
                        delete W.Ha[this.id];
                        return a
                    });
                    la(N,
                    function() {
                        uc(l[t](this.id))
                    });
                    N.Cd = function(a) {
                        var b = sc(a.params, this.id, a.proxyId);
                        delete a.params._methods;
                        if (a.openParams.anchor == "_parent") a.openParams.anchor = this.cb;
                        tc(a.openParams) ? new $(a.url, a.openParams, a.params, b, b._onclose, this) : a.openParams[F] === "expandable" && a.openParams.inline !== !0 && W.g.Ga(j) != j ? this.Bd(a, b) : (a = this.Ib(new Z(a.url, a.openParams, a.params, b, b._onclose, this)), b._onopen(a))
                    };
                    N.Bd = function(a, b) {
                        var d = Yb();
                        $b(d[fb]);
                        var c = a.openParams.id || ac();
                        a.openParams.id = c;
                        c = Q.g.ea(this, this.Hd, c, b._ready);
                        b._ready =
                        c;
                        var f = Q.g.ea(d,
                        function(c, d) {
                            if (!c.dc || typeof c.dc[xa] != "function") return ! 1;
                            var f = c.dc[xa](a.url, a.openParams, a.params, b, b._onclose, d),
                            f = d.Ib(f);
                            b._onopen(f);
                            return ! 0
                        },
                        d, this),
                        g = j.setInterval(function() {
                            f() && j.clearInterval(g)
                        },
                        10)
                    };
                    N.Ib = function(a) {
                        var b = {
                            childId: a.aa()
                        },
                        d = a.eb;
                        d._toclose = a[jb];
                        b._methods = pc(d, this.id, a.id, a, !1);
                        return b
                    };
                    N.Md = function(a) {
                        this.X("resize", a) === e && this.Ia && (typeof a[Aa] != "undefined" && ja(this.Ia[F], a[Aa] + "px"), typeof a[J] != "undefined" && ta(this.Ia[F], a[J] + "px"))
                    };
                    var $ = function(a, b, d, c, f, g) {
                        Y[H](this, a, b, d, c, Ob, f, g);
                        this.url = a;
                        this.ja = i;
                        this.nc = ac();
                        this.X("beforeparentopen");
                        a = nc(this.C);
                        a._onopen = this.Ad;
                        a._ready = this.nb;
                        a._onclose = this.zd;
                        this.S._methods = pc(a, "..", this.nc, this, !0);
                        var a = {},
                        h;
                        for (h in this.S) a[h] = hc(this.S[h]);
                        T._open({
                            url: this.i.url,
                            openParams: this.ob,
                            params: a,
                            proxyId: this.nc
                        })
                    };
                    vc($);
                    $[A].Ad = function(a) {
                        this.ja = a.childId;
                        var b = sc(a, "..", this.ja);
                        nc(b, this);
                        oa(this, b._toclose);
                        W.Ha[this.ja] = this;
                        this.R && this.C._onopen && (a._methods = pc(b,
                        this.R.aa(), this.ja, this, !1), this.C._onopen(a))
                    };
                    $[A].nb = function(a) {
                        var b = k(this.ja),
                        d = sc(a, "..", b);
                        nc(a, this);
                        nc(d, this);
                        this.X("ready");
                        this.R && this.C._ready && (a._methods = pc(d, this.R.aa(), b, this, !1), this.C._ready(a))
                    };
                    $[A].zd = function(a) {
                        if (this.R && this.C._onclose) this.C._onclose(a);
                        else return a = this.X("close", a),
                        delete W.Ha[this.ja],
                        a
                    };
                    var wc = function(a) {
                        return W.Wa[a]
                    },
                    xc = function(a, b) {
                        W.Wa[a] = b
                    },
                    yc = function(a) {
                        a = a || {};
                        a[J] === "auto" && ta(a, Q[bb].ib());
                        T && T._resizeMe && T._resizeMe(a)
                    },
                    zc = function(a) {
                        lc("gcv",
                        a)
                    };
                    Mb = function() {
                        function a() {
                            try {
                                W.Na = {
                                    origin: this[ua],
                                    referer: this.referer
                                };
                                for (var a = 0; a < W.Ma[z]; ++a) W.Ma[a](W.Na);
                                W.Ma = []
                            } catch(b) {
                                kc(b)
                            }
                        }
                        W.Ha = {};
                        W.Wa = {};
                        W.bc = 0;
                        W.fb = [];
                        W.Pa = {};
                        W.sa = {};
                        W.Na = i;
                        W.Ma = [];
                        Q.e.k("_noop_echo",
                        function() {
                            this.callback()
                        });
                        if (j[kb] !== j) {
                            var b = Q.g.G();
                            b.gcv && lc("gcv", b.gcv);
                            var d = b.jsh;
                            d && (mc(d), Q.i.k("googleapis.config", i,
                            function() {
                                d && (mc(d), d = i)
                            }), j[B](function() {
                                d = i
                            },
                            0));
                            nc(sc(b, "..", ""), T);
                            nc(b, T);
                            Q.i.k("rpc", i,
                            function() {
                                Q.e[H]("..", "_noop_echo", a)
                            })
                        }
                        W.Tb = wc;
                        W.ub =
                        xc;
                        W.wc = zc;
                        W.xc = mc;
                        W.sc = yc;
                        W.tc = yc;
                        W.zc = zc;
                        W.Q = {};
                        W.Q.get = wc;
                        W.Q.set = xc;
                        W.Eb = function(a, b) {
                            oc(a);
                            W.sa[a] = b || j[a]
                        };
                        W.je = function(a) {
                            delete W.sa[a]
                        };
                        W.open = function(a, b, d, h, m, p) {
                            arguments[z] == 3 ? h = {}: arguments[z] == 4 && typeof h === "function" && (m = h, h = {});
                            return tc(b) ? new $(a, b, d, h, m, p) : new Z(a, b, d, h, m, p)
                        };
                        oa(W,
                        function(a, b) {
                            T && T._close && T._close(a, b)
                        });
                        W.oc = function(a, b, d) {
                            arguments[z] == 2 && typeof b === "function" && (d = b, b = {});
                            a = a || {};
                            "height" in a || ta(a, Q[bb].ib());
                            a._methods = pc(b, "..", "", T, !0);
                            T && T._ready &&
                            T._ready(a, d)
                        };
                        W.Ub = function(a) {
                            W.Na ? a(W.Na) : W.Ma[q](a)
                        };
                        W.hb = function() {
                            return j[hb] && j[hb]["__GOOGLEAPIS.jsurl"] ? j[hb]["__GOOGLEAPIS.jsurl"] : ["https://ssl.gstatic.com/gb/js/", jc().gcv][K]("")
                        };
                        W.mc = function(a) {
                            var b = {
                                mouseover: 1,
                                mouseout: 1
                            };
                            if (T._event) for (var d = 0; d < a[z]; d++) {
                                var h = a[d];
                                h in b && Q.g.Gb(l, h,
                                function(a) {
                                    T._event({
                                        event: a.type,
                                        timestamp: (new Date)[Ua]()
                                    })
                                },
                                !0)
                            }
                        };
                        W.pe = kc;
                        W.cc = T
                    };
                    Mb()
                }; O("iframes", [W], {
                    Eb: "allow",
                    close: "close",
                    hb: "getGoogleConnectJsUri",
                    Tb: "getHandler",
                    Ub: "getParentInfo",
                    cc: "iframer",
                    open: "open",
                    mc: "propagate",
                    oc: "ready",
                    sc: "resize",
                    wc: "setGoogleConnectJsVersion",
                    xc: "setJsHint",
                    ub: "setHandler",
                    tc: "resizeMe",
                    zc: "setVersionOverride"
                }); O("IframeBase.prototype", [Y, Y[A]], {
                    N: "addCallback",
                    ba: "getMethods",
                    ca: "getOpenerIframe",
                    O: "getOpenParams",
                    da: "getParams",
                    ia: "removeCallback"
                });
                O("Iframe.prototype", [Z, Z[A]], {
                    close: "close",
                    Pb: "exposeMethod",
                    aa: "getId",
                    Da: "getIframeEl",
                    lb: "getSiteEl",
                    Ka: "openInto",
                    remove: "remove",
                    yc: "setSiteEl",
                    N: "addCallback",
                    ba: "getMethods",
                    ca: "getOpenerIframe",
                    O: "getOpenParams",
                    da: "getParams",
                    ia: "removeCallback"
                }); O("IframeProxy.prototype", [$, $[A]], {
                    N: "addCallback",
                    ba: "getMethods",
                    ca: "getOpenerIframe",
                    O: "getOpenParams",
                    da: "getParams",
                    ia: "removeCallback"
                }); O("iframes.handlers", [W, W.Q], {
                    get: "get",
                    set: "set"
                }); (function() {
                    function a(b) {
                        var c = "";
                        if (b[Ca] == 3 || b[Ca] == 4) c = b.nodeValue;
                        else if (b[cb]) c = b[cb];
                        else if (b[Da]) c = b[Da];
                        else if (b[Ka]) {
                            c = [];
                            for (b = b[Ka]; b; b = b.nextSibling) c[q](a(b));
                            c = c[K]("")
                        }
                        return c
                    }
                    j.__GOOGLEAPIS = j.__GOOGLEAPIS || {};
                    j.__GOOGLEAPIS.gwidget = j.__GOOGLEAPIS.gwidget || {};
                    var b = l[Wa]("script");
                    if (b[z] > 0) {
                        for (var d = "", c = 0; c < b[z]; c++) {
                            var f = b[c][mb]("src");
                            f && f[v]("/js/plusone.js") != -1 && (d = a(b[c]))
                        }
                        d = d[s](/^\s+|\s+$/g, "");
                        d[v]("{") != 0 && (d = "{" + d + "}");
                        try {
                            var g = (new Function("return (" + d + "\n)"))(),
                            h;
                            for (h in g) j.__GOOGLEAPIS.gwidget[h] = g[h]
                        } catch(m) {}
                    }
                })(); S.lc = function(a) {
                    a && a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis)
                }; S.L = "__GOOGLEAPIS";
                if (j[S.L]) {
                    var Ac = j[S.L];
                    S.lc(Ac);
                    j.___config = Ac
                }
                S.bd = function(a) {
                    var b = S.d.Ab,
                    d = a[lb](b);
                    return d != -1 && d + b[z] == a[z]
                }; S.kd = function(a) {
                    return a[I](0, a[v]("."))
                }; S.w = function() {
                    S.d.w()
                }; S.k = function(a) {
                    S.d.k(a)
                }; S.sb = function(a) {
                    S.d.sb(a)
                }; S.wa = function(a) {
                    S.d.wa(a)
                }; S.ma = function(a) {
                    S.d.ma(a)
                }; S.Qa = function(a) {
                    S.d.Qa(a)
                };
                S.na = function(a) {
                    S.d.na(a)
                }; S.Ra = function(a) {
                    S.d.Ra(a)
                }; S.oa = function(a) {
                    S.A.oa(a)
                }; S.Sa = function(a) {
                    S.A.Sa(a)
                }; S.V = function(a, b) {
                    S.j.V(a, b)
                }; S.Wc = function() {
                    S.j.he()
                }; S.Ca = function(a) {
                    return S.j.Ca(a)
                }; S.yd = function(a, b) {
                    var b = b || {},
                    d = {
                        name: "googleapis",
                        execute: S.d.Ob
                    },
                    c = R.fa(),
                    f = this,
                    g = {};
                    g.method = a;
                    g.transport = d;
                    g.rpc = b;
                    pa(g,
                    function(g) {
                        c.add(a, {
                            method: a,
                            rpc: b,
                            transport: d
                        });
                        c[zb](function(b) {
                            b[n] ? g[H](f, b[n]) : g[H](f, b[a])
                        })
                    });
                    return g
                }; S.fa = function() {
                    return new S.Y
                }; S.ya = function(a) {
                    S.d.ya(a)
                };
                S.xa = function(a, b) {
                    S.d.xa(a, b)
                }; S.va = function(a) {
                    S.d.va(a)
                }; S.j = Eb(); S.j.Jc = "googleapis.config"; S.j.ua = function(a, b) {
                    for (var d in b) {
                        var c = b[d];
                        typeof c === "object" && c != i ? typeof a == "object" ? (a[d] || (a[d] = {}), S.j.ua(a[d], c)) : typeof a == "boolean" && S.j.ua(a, c) : typeof a == "object" ? a[d] = c: a = c
                    }
                }; S.j.gd = function() {
                    var a = Q.i.get();
                    j[S.L] && S.j.ua(a, j[S.L]);
                    var b;
                    try {
                        b = j[hb] && j[hb][S.L]
                    } catch(d) {}
                    b && S.j.ua(a, Q.p[Va](b));
                    return a
                }; S.j.Ca = function(a) {
                    return S.j.gd()[a]
                };
                S.j.get = function() {
                    return S.j.Ca(S.j.Jc) || {}
                }; S.j.P = function(a) {
                    if (!a) return i;
                    var b = a;
                    typeof a === "string" && (b = a[C]("."));
                    for (var a = S.j.get(), d = 0; d < b[z]; d++) {
                        if (typeof a !== "object") {
                            a = i;
                            break
                        }
                        var c = b[d];
                        if (c in a) a = a[c];
                        else {
                            a = i;
                            break
                        }
                    }
                    return a
                }; S.j.V = function(a) {
                    j[S.L] = j[S.L] || {};
                    S.lc(a);
                    S.j.ua(j[S.L], a)
                }; S.d = {}; S.d.Kc = "1.0.0-alpha"; S.d.Ab = ".delete"; S.d.Fb = i; S.d.Ec = {}; S.d.ga = []; S.d.ta = [];
                S.d.k = function(a) {
                    R.ab(a, {
                        name: "googleapis",
                        execute: S.d.Ob
                    });
                    var b = S.H.jb(a, R);
                    S.H.Ba(a, b);
                    a[v]("googleapis.") != 0 && (a = a[I](a[v](".") + 1), S.bd(a) && (a = a[s](S.d.Ab, ".remove")), S.H.Ba("googleapis." + a, b))
                }; S.d.ya = function(a) {
                    for (var b in a) a[E](b) && (S.d.Ec[b] = a[b])
                }; S.d.sb = function(a) {
                    S.d.Fb = a
                }; S.d.wa = function(a) {
                    S.d.xa("key", a)
                }; S.d.xa = function(a, b) {
                    b == i ? S.d.va(a) : (S.d.U = S.d.U || {},
                    S.d.U[a] = b)
                }; S.d.va = function(a) {
                    S.d.U && delete S.d.U[a]
                }; S.d.nd = function(a) {
                    return S.d.Ec[a]
                };
                S.d.Cb = function(a) {
                    a = a || {};
                    if (j[wb]) {
                        for (var b = ["appVersion", "platform", "userAgent"], d = [], c = 0; c < b[z]; c++) j[wb][b[c]] && d[q](aa(b[c]) + "=" + aa(j[wb][b[c]]));
                        a["X-ClientDetails"] = d[K]("&")
                    }
                    return a
                }; S.d.Jb = function(a, b) {
                    for (var d = 0; d < S.d.ga[z]; d++) j[B](function(b) {
                        return function() {
                            b(a)
                        }
                    } (S.d.ga[d]), 1);
                    var c = S.d.ta;
                    return function() {
                        var a = arguments;
                        b[vb](i, a);
                        for (var d = 0; d < c[z]; d++) j[B](function(b) {
                            return function() {
                                b[vb](i, a)
                            }
                        } (c[d]), 1)
                    }
                };
                S.d.Db = function(a) {
                    a.applicationName = S.d.Fb;
                    a.clientVersion = S.d.Kc;
                    if (S.d.U) a.urlParams = S.d.U,
                    S.d.U.key && (a.developerKey = S.d.U.key)
                }; S.d.Ob = function(a, b) {
                    for (var d = 0; d < a[z]; d++) {
                        var c = a[d],
                        f = S.kd(c[x]);
                        c.jsonrpc = "2.0";
                        c.key = c.id; (f = S.d.nd(f)) && (c.apiVersion = f)
                    }
                    d = {};
                    d = S.A.M(d);
                    d = S.d.Cb(d);
                    d = {
                        requests: a,
                        headers: d
                    };
                    S.d.Db(d);
                    c = S.d.Jb(a, b);
                    S.A.Ta("makeRequest", d, c)
                }; S.d.ma = function(a) {
                    S.d.ga[q](a)
                }; S.d.na = function(a) {
                    S.d.ta[q](a)
                };
                S.d.Qa = function(a) {
                    for (var b = 0; b < S.d.ga[z]; b++) if (S.d.ga[b] == a) {
                        S.d.ga[Bb](b, 1);
                        break
                    }
                }; S.d.Ra = function(a) {
                    for (var b = 0; b < S.d.ta[z]; b++) if (S.d.ta[b] == a) {
                        S.d.ta[Bb](b, 1);
                        break
                    }
                }; S.d.cd = function(a, b) {
                    for (var d = 0, c = a[z]; d < c; d++) {
                        var f = a[d];
                        f.key = f.id;
                        var g = f.params.headers || {},
                        g = S.A.M(g),
                        g = S.d.Cb(g);
                        f.params.headers = g;
                        S.d.Db(f.params)
                    }
                    d = S.d.Jb(a, b);
                    S.A.Ta("makeHttpRequests", a, d)
                };
                S.d.w = function() {
                    function a(a, c) {
                        b[a] && c(b[a] == "true")
                    }
                    var b = Q.g.G();
                    a("debug",
                    function(a) {
                        S.V({
                            "googleapis.config": {
                                debug: a
                            }
                        })
                    });
                    a("useSharedProxy",
                    function(a) {
                        S.V({
                            "googleapis.config": {
                                transport: {
                                    useSharedProxy: a
                                }
                            }
                        })
                    });
                    a("rcache",
                    function(a) {
                        S.V({
                            "googleapis.config": {
                                requestCache: {
                                    enabled: a
                                }
                            }
                        })
                    });
                    a("scache",
                    function(a) {
                        S.V({
                            "googleapis.config": {
                                sessionCache: {
                                    enabled: a
                                }
                            }
                        })
                    });
                    var d = S.j.get(),
                    c;
                    for (c in d.methods) S.d.k(c);
                    "versions" in d && S.d.ya(d.versions);
                    "developerKey" in d && S.d.wa(d.developerKey);
                    Q.e.k("ready",
                    function() {
                        S.A.kc()
                    });
                    R.ab("googleapis.newHttpRequest", {
                        name: "googleapis",
                        execute: S.d.cd
                    });
                    S.H.Ba("googleapis.newHttpRequest", S.H.jb("googleapis.newHttpRequest", R))
                }; Q.i.k("googleapis.config", i,
                function() {
                    S.d.w()
                }); S.Y = function() {
                    this.Kb = {};
                    this.Hb = R.fa()
                }; S.Y[A].add = function(a, b, d) {
                    this.Kb[a] = d;
                    this.Hb.add(a, b);
                    return this
                }; pa(S.Y[A],
                function(a) {
                    var b = this;
                    this.Hb[zb](function(d) {
                        var c = {},
                        f = !1,
                        g;
                        for (g in d) if (d[E](g)) {
                            var h = d[g],
                            m = b.Kb[g];
                            m ? m(h) : (c[g] = h, f = !0)
                        }
                        f && a && a(c)
                    })
                }); S.wb = {};
                S.wb.start = function(a, b) {
                    S.A.Ac(a, b)
                };
                if (!S.H.jb("googleapis.logging")) S.vd = function() {
                    function a() {
                        return ! b ? e: Q.i.get("googleapis").ilog
                    }
                    var b = !1,
                    d = i;
                    S.ma(function(b) {
                        var d = a();
                        if (d) if (l[t]("apiproxy")) {
                            if (b[z] && b[0][x]) {
                                var g = {
                                    dlm: b[0][x]
                                };
                                b[0][x] == "pos.plusones.insert" ? g.dlpo = "ireq": b[0][x] == "pos.plusones.delete" && (g.dlpo = "dreq");
                                d(g)
                            }
                        } else d({
                            dlpo: "missing proxy"
                        })
                    });
                    S.na(function(b) {
                        var d = a();
                        if (d) {
                            var g = {},
                            h;
                            for (h in b) break;
                            "error" in b[h] ? (g.dlr = h + "-err", b[h][n][Sa] && (g.ecode = b[h][n][Sa]), b[h][n].message && (g.emsg = b[h][n].message)) :
                            g.dlr = h + "-ok";
                            var m = i;
                            b["pos.plusones.insert"] ? m = "i": b["pos.plusones.delete"] ? m = "d": h = i;
                            h != i && (b[h][n] ? (g.dlpo = m + "err", b[h][n][Sa] && (g.c = b[h][n][Sa])) : g.dlpo = m + "ok");
                            d(g)
                        }
                    });
                    S.oa(function(b, f) {
                        var g = a();
                        if (g) if (b == "loading") d = f,
                        g({
                            dlpo: "loadIframe"
                        });
                        else if (b == "ready") {
                            var h = {
                                dlpo: "iframeLoaded"
                            };
                            d && (h.loadTime = f - d);
                            g(h)
                        }
                    });
                    return {
                        enable: function(a) {
                            b = a
                        }
                    }
                } (), S.H.Ba("googleapis.logging", S.vd); O("googleapis.ApiClient", [S, S.d], {
                    k: "register",
                    ya: "setVersions",
                    wa: "setDeveloperKey",
                    xa: "setUrlParameter",
                    va: "removeUrlParameter",
                    ma: "addExecuteListener",
                    na: "addResponseListener",
                    Qa: "removeExecuteListener",
                    Ra: "removeResponseListener",
                    w: "init"
                });
                O("googleapis", [S], {
                    Y: "Batch",
                    Wc: "clearconfig",
                    V: "configure",
                    Ca: "getFeatureConfig",
                    w: "init",
                    fa: "newBatch",
                    yd: "newRequest",
                    k: "register",
                    xa: "setUrlParameter",
                    va: "removeUrlParameter",
                    wa: "setDeveloperKey",
                    sb: "setApplicationName",
                    ya: "setVersions",
                    ma: "addExecuteListener",
                    Qa: "removeExecuteListener",
                    na: "addResponseListener",
                    Ra: "removeResponseListener",
                    oa: "addTransportInitListener",
                    Sa: "removeTransportInitListener"
                }); O("googleapis.Batch.prototype", [S, S.Y, S.Y[A]], {
                    add: "add",
                    execute: "execute"
                });
                O("googleapis.superbatch", [S, S.wb], {
                    start: "start"
                }); W.ub("inline", {
                    open: function(a) {
                        var b = l[t](a.O().container);
                        return a.Ka(b, {
                            style: "position:absolute;left:-10000px;top:-10000px;width:" + (b.clientWidth || 300) + "px"
                        })
                    },
                    onready: function(a) {
                        var b = a.Da()[F];
                        ta(b, a[J] + "px");
                        b.position = "static";
                        b.left = 0;
                        b.top = 0;
                        b.visibility = "visible"
                    },
                    close: function(a) {
                        var b = a.lb();
                        b && b.removeChild(a.Da())
                    }
                });
                var Bc = j.googleapisv0 || {},
                Cc = j.poshare || {},
                Dc = j.xdclient || {}; O("googleapisv0", [Bc]); O("poshare", [Cc]); O("xdclient", [Dc]); Hb.Fc = function() {
                    function a(a) {
                        return a
                    }
                    function b(a) {
                        return function(b) {
                            var c = a;
                            typeof b === "number" ? c = b: typeof b === "string" && (c = b[v]("px"), c != -1 && (b = b[I](0, c)), c = ea(b, 10));
                            return c
                        }
                    }
                    function d(a) {
                        a = a ? j[a] : i;
                        return typeof a === "function" ? a: i
                    }
                    var c = ["div"],
                    f = "en-US",
                    g = "onload",
                    h = !0,
                    m = 1E4;
                    Q.i.k("gwidget", i,
                    function(a) {
                        var b = a.gwidget || {};
                        f = a.lang || b.lang || f;
                        var c = a.parsetags || b.parsetags;
                        g = c === "explicit" || c === "onload" ? c: g;
                        c = a.superbatch || b.superbatch;
                        h = typeof c !== "undefined" ? !!c: h;
                        m = (a = a.superbatchTimeout ||
                        b.superbatchTimeout) ? ea(a, 10) : m
                    },
                    !0);
                    var p = function() {
                        var a = {};
                        ja(a, [b(450)]);
                        ta(a, [b(24)]);
                        a.callback = [d];
                        a.lang = [function() {
                            return f
                        },
                        "hl"];
                        return a
                    } ();
                    return {
                        fc: function(b, d, f, w, L) {
                            function M() {
                                Qb || (Qb = !0, g === "onload" && Oa())
                            }
                            function ca(a, b) {
                                for (var c in p) if (p[E](c)) {
                                    var d = p[c][1];
                                    d && !b[E](d) && (b[d] = a[d])
                                }
                                return b
                            }
                            function pb(b, c) {
                                var d = {},
                                f;
                                for (f in b) b[E](f) && (d[b[f][1] || f] = (b[f] && b[f][0] || a)(c[f], c));
                                return d
                            }
                            function U(a, b, c) {
                                var f = pb(ra, b);
                                P[q]({
                                    element: a,
                                    i: f,
                                    pb: ca(f, pb(d, b)),
                                    Kd: c
                                })
                            }
                            function Za() {
                                var a =
                                h && P[z] > 1 && j.top === j;
                                for (a && (h = !1, S.wb.start(P[z], m)); P[z] > 0;) {
                                    var b = P[za](),
                                    c = a,
                                    d = b.element;
                                    if (b.Kd === 0) {
                                        var f = l[Ia]("div"),
                                        g = d[xb];
                                        g.insertBefore(f, d);
                                        g.removeChild(d);
                                        d = f
                                    }
                                    if (!d.id || d.id[z] === 0) d.id = rb + qa++;
                                    f = b.i;
                                    ta(d[F], f[J] + "px");
                                    ja(d[F], f[Aa] + "px");
                                    if (!d[F].display) d[F].display = "inline-block";
                                    var g = !ba[gb][Ga](/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/) ? V: qb,
                                    o = {},
                                    p = f.callback;
                                    w && p && (o[w] = p);
                                    var p = {},
                                    u = e;
                                    for (u in b.pb) b.pb[u] != i && (p[u] = b.pb[u]);
                                    W[xa](g, {
                                        container: d.id,
                                        style: "inline",
                                        height: f[J],
                                        width: f[Aa],
                                        superbatch: c
                                    },
                                    p, o)
                                }
                            }
                            function Oa(a) {
                                var b = (typeof a === "string" ? l[t](a) : a) || l[G];
                                if (b) {
                                    for (var a = [], b = b[Wa]("*"), c = 0; c < b[z]; ++c) {
                                        var f = b.item(c),
                                        g = f.nodeName[Db]();
                                        if (Pa[g]) {
                                            var h = "";
                                            if (! (g !== X && (h = "data-", wa !== f[mb]("class")))) {
                                                var m = g = {},
                                                p = d,
                                                u = f,
                                                w = h,
                                                y = e;
                                                for (y in p) p[E](y) && (m[y] = u[mb](w + y));
                                                m = g;
                                                p = ra;
                                                u = f;
                                                w = e;
                                                for (w in p) p[E](w) && (m[w] = u[mb](h + w));
                                                a[q]({
                                                    element: f,
                                                    Tc: g
                                                })
                                            }
                                        }
                                    }
                                    for (b = 0; b < a[z]; ++b) c = a[b],
                                    U(c.element, c.Tc, 0);
                                    Za()
                                }
                            }
                            var V = ":" + b,
                            qb = ":" + b + "_m",
                            rb = "___" + b + "_",
                            X = "g:" + b,
                            wa = "g-" + b,
                            P = [],
                            qa = 0,
                            Pa = function(a) {
                                for (var b = {},
                                c = 0; c < a[z]; ++c) b[a[c][Db]()] = 1;
                                b[X] = 1;
                                return b
                            } (L || c),
                            ra = f || {},
                            sa;
                            for (sa in p) p[E](sa) && !ra[E](sa) && (ra[sa] = p[sa]);
                            var Qb = !1;
                            l.readyState === "complete" ? j[B](M, 0) : j[La] ? (j[La]("load", M, !1), j[La]("DOMContentLoaded", M, !1)) : j[Na] && (j[Na]("onreadystatechange",
                            function() {
                                l.readyState === "complete" && M()
                            }), j[Na]("onload", M));
                            return {
                                rc: function(a, b, c) {
                                    a = (typeof a === "string" ? l[t](a) : a) || e;
                                    b = b || {};
                                    b.callback = c || b.callback;
                                    a && a[Ca] === 1 && U(a, b, 1);
                                    Za()
                                },
                                go: Oa,
                                se: function() {
                                    qa = 0
                                }
                            }
                        }
                    }
                } ();
                Hb.load = Hb.load ||
                function(a, b) {
                    a in {
                        gwidget: 1,
                        plusone: 1
                    } && b()
                }; O("gapi.widget", [Hb, Hb.Fc], {
                    fc: "make"
                }); Hb.Oa = function() {
                    function a(a) {
                        return typeof a == "string" && d[a[Db]()] ? a[Db]() : "standard"
                    }
                    function b(b, d) {
                        return a(d) == "tall" ? "true": b == "" || b == "0" || b === !1 || typeof b == "string" && b[Db]() == "false" ? "false": "true"
                    }
                    var d = {
                        tall: {
                            "true": {
                                width: 50,
                                height: 60
                            }
                        },
                        small: {
                            "false": {
                                width: 24,
                                height: 15
                            },
                            "true": {
                                width: 70,
                                height: 15
                            }
                        },
                        medium: {
                            "false": {
                                width: 32,
                                height: 20
                            },
                            "true": {
                                width: 90,
                                height: 20
                            }
                        },
                        standard: {
                            "false": {
                                width: 38,
                                height: 24
                            },
                            "true": {
                                width: 106,
                                height: 24
                            }
                        }
                    };
                    return Hb.Fc.fc("plusone", {
                        href: [function(a) {
                            if (!a ||
                            !(a[z] && a[v]("//") != -1)) a: {
                                for (var a = l[Wa]("link"), b = 0; b < a[z]; b++) {
                                    var d = a[b];
                                    if ((d[mb]("rel") || "")[Db]() == "canonical") {
                                        a = d[mb]("href");
                                        break a
                                    }
                                }
                                a = j[D][ub]
                            }
                            return a
                        },
                        "url"],
                        source: [i, "source"],
                        size: [a],
                        count: [function(a, d) {
                            return b(d.count, d[db])
                        }]
                    },
                    {
                        width: [function(c, f) {
                            return d[a(f[db])][b(f.count, f[db])][Aa]
                        }],
                        height: [function(c, f) {
                            return d[a(f[db])][b(f.count, f[db])][J]
                        }]
                    },
                    "onPlusOne", ["div", "button"])
                } (); Bc.Oa = Hb.Oa; O("gapi.plusone", [Hb, Hb.Oa], {
                    rc: "render",
                    go: "go"
                }); O("googleapisv0.plusone", [Bc, Bc.Oa], {
                    rc: "render",
                    go: "go"
                }); S.J = {}; S.vc = {}; S.Ud = function(a, b) {
                    return a[v](b) === 0
                }; S.Nb = function(a, b) {
                    for (var d = 0, c = b[z]; d < c; d++) if (a[lb](b[d]) + b[d][z] == a[z]) return ! 0;
                    return ! 1
                }; S.J.Gd = function(a, b) {
                    Q.e.k(a,
                    function(a) {
                        b[H](this, a, this.callback, this[ua], this.referer)
                    })
                };
                S.J.w = function() {
                    function a(a, d) {
                        S.J.Gd(a, d)
                    }
                    a("makeRequest", S.b.ic);
                    a("makeHttpRequests", S.b.hc);
                    S.vc.sd() && (a("set", S.q.set), a("get", S.q.get), a("remove", S.q[Ha]), a("clear",
                    function(a, d) {
                        S.v[Ma](a, Eb());
                        S.q[Ma](a, d)
                    }));
                    S.b.w();
                    Q.e[H]("..", "ready:" + Q.e.gb(".."));
                    Q.e[H]("..", "ready")
                }; S.vc.sd = function() {
                    var a = Q.g.G();
                    return a ? a.scache: !1
                };
                S.J.Vd = function(a) {
                    for (var a = a[s](/\r\n/g, "\n"), b = [], d = 0, c = 0; c < a[z]; c++) {
                        var f = a[tb](c);
                        f < 128 ? b[d++] = f: (f < 2048 ? b[d++] = f >> 6 | 192: (b[d++] = f >> 12 | 224, b[d++] = f >> 6 & 63 | 128), b[d++] = f & 63 | 128)
                    }
                    return b
                }; S.J.$b = function(a) {
                    var b = Lb();
                    b[yb](S.J.Vd(a));
                    return b.bb()
                }; S.I = function(a) {
                    this.m = a
                }; N = S.I[A]; N.isSupported = function() {
                    try {
                        return this.m in j && j[this.m] !== i && typeof j[this.m][z] === "number"
                    } catch(a) {
                        return ! 1
                    }
                }; N.set = function(a, b) {
                    j[this.m].setItem(a, b)
                }; N.get = function(a) {
                    return j[this.m].getItem(a)
                }; la(N,
                function(a) {
                    j[this.m].removeItem(a)
                });
                ma(N,
                function() {
                    j[this.m][Ma]()
                }); N.Ea = function(a) {
                    for (var a = a || i, b = [], d = 0, c = j[this.m][z]; d < c; d++) {
                        var f = j[this.m].key(d); (a == i || S.Ud(f, a)) && b[q](f)
                    }
                    return b
                }; S.I.ec = new S.I("localStorage"); S.I.Ua = new S.I("sessionStorage"); S.Xa = function(a) {
                    this.Ja = a || "googleapis.";
                    this.m = i;
                    if (S.I.Ua.isSupported()) this.m = S.I.Ua;
                    else if (S.I.ec.isSupported()) this.m = S.I.ec; (function(a) {
                        j[B](function() {
                            if (a.m !== i) for (var d = a.Ea(), c = 0; c < d[z]; c++) Ec(a, d[c])
                        },
                        1E3)
                    })(this)
                }; N = S.Xa[A]; N.F = function(a) {
                    return this.Ja + a
                };
                N.set = function(a, b, d) {
                    if (this.m !== i) {
                        var c = (new Date)[Ua](),
                        f = i;
                        d && (f = c + d * 1E3);
                        b = {
                            item: b,
                            added: c,
                            expiration: f
                        };
                        this.m.set(this.F(a), Q.p[r](b) || "")
                    }
                }; N.get = function(a) {
                    if (this.m === i) return i;
                    a = Ec(this, a);
                    return ! a ? i: a.item
                };
                function Ec(a, b) {
                    var d = a.F(b),
                    c = a.m.get(d);
                    if (!c) return i;
                    var c = Q.p[Va](c),
                    f = c.expiration;
                    return f && (new Date)[Ua]() > f ? (a.m[Ha](d), i) : c
                }
                la(N,
                function(a) {
                    this.m !== i && this.m[Ha](this.F(a))
                });
                N.Ea = function() {
                    if (this.m === i) return [];
                    var a = this.m.Ea(this.Ja);
                    if (this.Ja) for (var b = 0, d = a[z]; b < d; b++) a[b] = a[b][I](this.Ja[z]);
                    return a
                }; ma(N,
                function() {
                    this.m !== i && this.m[Ma]()
                }); S.n = Eb(); S.n.Hc = [".count", ".get", ".list", ".search"]; S.n.Mc = [".insert", ".update", ".create", ".delete"]; S.n.Aa = i; S.n.ud = function() {
                    if (S.n.Aa == i) {
                        var a = {},
                        b = Q.i.get("googleapis.config").methods,
                        d;
                        for (d in b) {
                            var c = b[d].cache || {};
                            a[d] = S.n.Sb(d, c[ob], c.expiration, c.invalidates)
                        }
                        S.n.Aa = a
                    }
                }; S.n.ke = Gb(300);
                S.n.rd = function(a) {
                    return S.Nb(a, S.n.Hc)
                }; S.n.jd = function(a) {
                    var b = [];
                    S.Nb(a, S.n.Mc) && b[q](a[I](0, a[lb](".")));
                    return b
                }; S.n.Sb = function(a, b, d, c) {
                    b = b || S.n.rd(a);
                    d = d || 300;
                    a = c || S.n.jd(a);
                    return {
                        enabled: b,
                        expiration: d,
                        invalidates: a
                    }
                }; S.n.get = function(a) {
                    S.n.ud();
                    var b = S.n.Aa[a];
                    b || (b = S.n.Sb(a), S.n.Aa[a] = b);
                    return b
                }; S.v = Eb(); S.v.D = new S.Xa; S.v.F = function(a, b) {
                    var b = b || {},
                    d = Q.p[r](a),
                    c = b.sid,
                    f = b.userToken;
                    c && (d += c);
                    f && (d += f);
                    return (a[x] || "") + "__" + S.J.$b(d)
                };
                S.v.xd = function(a) {
                    for (var b = {},
                    d = 0; d < a[z]; d++) {
                        var c = a[d];
                        b[c.id] = c
                    }
                    return b
                }; S.v.Ed = function(a, b, d) {
                    for (var b = S.v.xd(b), c = 0; c < a[z]; c++) {
                        var f = a[c],
                        g = S.n.get(f[x]);
                        if (g[ob]) {
                            var h = b[f.id];
                            h && !h[n] && S.v.D.set(S.v.F(f, d), h, g.expiration)
                        }
                    }
                }; S.v.get = function(a, b) {
                    return S.v.D.get(S.v.F(a, b))
                }; S.v.qd = function(a) {
                    for (var b = {},
                    d = !1, c = 0, f = a[z]; c < f; c++) for (var g = S.n.get(a[c][x]).invalidates, h = 0, m = g[z]; h < m; h++) d = !0,
                    b[g[h]] = !0;
                    if (d) {
                        a = S.v.D.Ea();
                        d = 0;
                        for (c = a[z]; d < c; d++) {
                            var f = a[d],
                            p;
                            for (p in b) f[v](p) > -1 && S.v.D[Ha](f)
                        }
                    }
                };
                ma(S.v,
                function(a, b) {
                    S.v.D[Ma]();
                    b("true")
                }); S.q = Eb(); S.q.D = new S.Xa; S.q.F = function(a, b) {
                    var b = b || {},
                    d = Q.p[r](a),
                    c = b.sid,
                    f = b.userToken;
                    c && (d += c);
                    f && (d += f);
                    return (a.key || "") + "__" + S.J.$b(d)
                }; S.q.kb = function() {
                    return {
                        sid: S.b.le()
                    }
                }; S.q.set = function(a, b) {
                    var d = S.q.kb(),
                    a = a || {},
                    c = a.value || "";
                    S.q.D.set(S.q.F(a.key || "", d), c);
                    b("true")
                }; S.q.get = function(a, b) {
                    var d = S.q.kb(),
                    a = a || {},
                    d = S.q.D.get(S.q.F(a.key || "", d)),
                    d = Q.p[r](d);
                    b(d)
                }; la(S.q,
                function(a, b) {
                    var d = S.q.kb(),
                    a = a || {};
                    S.q.D[Ha](S.q.F(a.key || "", d));
                    b("true")
                });
                ma(S.q,
                function(a, b) {
                    S.q.D[Ma]();
                    b("true")
                }); S.b = {}; S.b.Ic = "google-api-javascript-client"; S.b.Lc = "SID"; S.b.Nc = 4; S.b.B = {
                    Gc: "Authorization",
                    zb: "Content-Type",
                    za: "OriginToken",
                    Oc: "X-ClientDetails",
                    Bb: "X-JavaScript-User-Agent",
                    Za: "X-Origin",
                    $a: "X-Referer"
                }; S.b.ka = ["headers", "applicationName", "clientVersion", "urlParams"]; S.b.md = function(a, b) {
                    var b = b || "0.1", 
                    d = [];
                    a && (d[q](a), d[q](" "));
                    d[q](S.b.Ic);
                    b && (d[q]("/"), d[q](b));
                    return d[K]("")
                };
                S.b.td = function(a) {
                    for (var b in S.b.B) if (S.b.B[E](b) && S.b.B[b] == a) return ! 0;
                    return ! 1
                }; S.b.Yc = function() {
                    try {
                        return new XMLHttpRequest
                    } catch(a) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch(b) {}
                    return i
                }; S.b.ld = function() {
                    return S.qa.get(S.b.Lc)
                }; S.b.Yb = function(a) {
                    return (a = a[S.b.B.za]) && a[z] > 5 ? a[I](a[z] - 5) : a
                }; S.b.Rc = function(a) {
                    if (!a[S.b.B.za]) {
                        var b = Q.g.G(); (b = b ? b.pvt: i) && (a[S.b.B.za] = b)
                    }
                };
                S.b.Dd = function(a) {
                    var b = {};
                    if (!a) return b;
                    for (var a = a[C]("\r\n"), d = 0; d < a[z]; d++) {
                        var c = a[d],
                        f = c[v](": ");
                        f > 0 && (b[c[I](0, f)] = c[I](f + 2))
                    }
                    return b
                }; S.b.w = function() {
                    if (! (S.b.T != e && S.b.T > 0)) {
                        S.b.T == e && Q.e.k("init",
                        function() {
                            S.b.w()
                        });
                        S.b.La = Q.g.G(j[D][ub]);
                        S.b.T = S.b.La.isProxyShared && ea(S.b.La.superBatchSize, 10) || 0;
                        S.b.K = [];
                        S.b.Cc = [];
                        var a = ea(S.b.La.superBatchTimeout, 10) || 0;
                        a && S.b.La.isProxyShared && S.b.Zc(a,
                        function() {
                            S.b.T != 0 && S.b.jc()
                        })
                    }
                }; S.b.Zc = function(a, b) {
                    j[B](b, a)
                };
                S.b.Xc = function() {
                    for (var a = [], b = 0; b < S.b.K[z]; b++) a = a.concat(S.b.K[b].requests);
                    for (var d = S.b.K[0], a = {
                        requests: a
                    },
                    b = 0; b < S.b.ka[z]; ++b) {
                        var c = S.b.ka[b];
                        a[c] = d[c]
                    }
                    return a
                }; S.b.Qc = function(a) {
                    return S.b.T + "|" + a
                }; S.b.Jd = function(a) {
                    return a[I](a[v]("|") + 1)
                }; S.b.ad = function() {
                    return function(a) {
                        for (var a = Q.p[Va](a), b = {},
                        d = 0; d < a[z]; d++) b[a[d].id] = a[d];
                        for (d = 0; d < S.b.K[z]; d++) {
                            for (var c = S.b.K[d].requests, f = [], g = 0; g < c[z]; g++) a = b[c[g].id],
                            a.id = S.b.Jd(a.id),
                            f[q](a);
                            S.b.Cc[d](Q.p[r](f))
                        }
                    }
                };
                S.b.Lb = function(a, b) {
                    for (var d = a.requests, c = 0; c < d[z]; c++) d[c].id = S.b.Qc(d[c].id);
                    S.b.K[q](a);
                    S.b.Cc[q](b)
                }; S.b.Bc = function(a, b) {
                    for (var d in a) if (a[d] !== b[d]) return ! 1;
                    return ! 0
                }; S.b.Pd = function(a, b) {
                    return S.b.Bc(a, b) && S.b.Bc(b, a)
                }; S.b.Qd = function(a, b) {
                    return a === b || typeof b == "object" && S.b.Pd(a, b)
                }; S.b.jc = function() {
                    S.b.K[z] > 0 && S.b.mb(S.b.Xc(), S.b.ad());
                    S.b.T = 0
                };
                S.b.gc = function(a, b, d, c) {
                    var a = a || {},
                    f = a.headers || {},
                    g = a.httpMethod || "GET",
                    h = a.url || i,
                    m = a.urlParams || i,
                    p = a[G] || i,
                    y = a.applicationName || i,
                    a = a.clientVersion || i,
                    d = d || i,
                    c = c || i;
                    if (m) {
                        var o = [],
                        u;
                        for (u in m) m[E](u) && o[q](aa(u) + "=" + aa(m[u]));
                        o[z] > 0 && (h += h[v]("?") <= 0 ? "?": "&", h += o[K]("&"))
                    }
                    f[S.b.B.Bb] = S.b.md(y, a);
                    S.b.Rc(f);
                    delete f[S.b.B.Za];
                    d && (f[S.b.B.Za] = d);
                    delete f[S.b.B.$a];
                    c && (f[S.b.B.$a] = c);
                    p && typeof p === "object" && (p = Q.p[r](p));
                    var w = S.b.Yc();
                    if (!w) throw da("XHR not supported");
                    w[xa](g, h);
                    w.onreadystatechange =
                    function() {
                        if (w.readyState == S.b.Nc) {
                            var a = {
                                body: w.responseText,
                                headers: S.b.Dd(w.getAllResponseHeaders()),
                                status: w.status,
                                statusText: w.statusText
                            };
                            b(a)
                        }
                    };
                    for (var L in f) f[E](L) && S.b.td(L) && w.setRequestHeader(L, f[L]);
                    w.send(p ? p: i)
                };
                S.b.mb = function(a, b, d, c) {
                    var f = [],
                    g = {
                        sid: S.b.ld()
                    },
                    b = b || Eb(),
                    a = a || {},
                    h = a.headers || {},
                    m = a.requests || [],
                    p = a.applicationName || i,
                    y = a.clientVersion || i,
                    o = Q.g.G(),
                    u = o ? o.rcache || o.cache: !1;
                    h[S.b.B.zb] = "application/json"; (o = S.b.Yb(h)) && (g.userToken = o);
                    S.v.qd(m);
                    if (u) {
                        for (var o = [], w = 0; w < m[z]; w++) {
                            var L = m[w],
                            M = S.v.get(L, g);
                            M ? f[q](M) : o[q](L)
                        }
                        if (o[z] === 0) {
                            b(Q.p[r](f));
                            return
                        }
                        m = o
                    }
                    S.b.gc({
                        headers: h,
                        body: m,
                        httpMethod: "POST",
                        url: "../rpc",
                        urlParams: a.urlParams,
                        applicationName: p,
                        clientVersion: y
                    },
                    function(a) {
                        a = a[G];
                        if (u) {
                            a = Q.p[Va](a);
                            S.v.Ed(m, a, g);
                            for (var c = 0; c < f[z]; c++) a[q](f[c]);
                            a = Q.p[r](a)
                        }
                        b(a)
                    },
                    d, c)
                }; S.b.hc = function(a, b, d, c) {
                    function f(m) {
                        var p = m.key;
                        S.b.gc(m.params,
                        function(c) {
                            g[p] = {
                                data: c
                            };
                            h++;
                            a[z] == h ? b(Q.p[r](g)) : f(a[h])
                        },
                        d, c)
                    }
                    var g = {},
                    h = 0;
                    a[z] == 0 && b(g);
                    f(a[h])
                }; S.b.ic = function(a, b, d, c) {
                    if (S.b.T > 0) {
                        if (S.b.K[z] > 0) {
                            for (var f = S.b.K[0], g = 0; g < S.b.ka[z]; ++g) {
                                var h = S.b.ka[g];
                                if (!S.b.Qd(a[h], f[h])) break
                            }
                            g == S.b.ka[z] ? S.b.Lb(a, b) : S.b.mb(a, b, d, c)
                        } else S.b.Lb(a, b); --S.b.T == 0 && S.b.jc()
                    } else S.b.mb(a, b, d, c)
                }; O("googleapis.ApiServer.Headers", [S, S.b, S.b.B], {
                    Gc: "AUTHORIZATION",
                    zb: "CONTENT_TYPE",
                    za: "ORIGINTOKEN",
                    Oc: "X_CLIENTDETAILS",
                    Bb: "X_JAVASCRIPT_USER_AGENT",
                    Za: "X_ORIGIN",
                    $a: "X_REFERER"
                }); O("googleapis.ApiServer", [S, S.b], {
                    Yb: "getUserToken",
                    hc: "makeHttpRequests",
                    ic: "makeRequest"
                }); O("googleapis.server", [S, S.J], {
                    w: "init"
                }); Q.i.w({
                    gwidget: {
                        parsetags: "explicit"
                    },
                    rpc: {
                        commSwf: "///gadgets",
                        passReferrer: "p2c:query",
                        parentRelayUrl: "/rpc_relay.html"
                    },
                    iframes: {
                        ":socialhost:": "https://plusone.google.com",
                        plusone_m: {
                            params: {
                                count: "#",
                                url: "#",
                                size: "#"
                            },
                            url: ":socialhost:/u/:session_index:/_/+1/button"
                        },
                        plusone: {
                            params: {
                                count: "#",
                                url: "#",
                                size: "#"
                            },
                            url: ":socialhost:/u/:session_index:/_/+1/button"
                        }
                    },
                    "googleapis.config": {
                        methods: {
                            "chili.people.list": !0,
                            "pos.plusones.list": !0,
                            "chili.entities.starred.insert": {
                                cache: {
                                    invalidates: ["chili.entities.starred",
                                    "chili.entitiesDefaultAcl"]
                                }
                            },
                            "chili.people.get": !0,
                            "chili.entities.get": !0,
                            "pos.plusones.delete": !0,
                            "chili.entities.starred.delete": !0,
                            "chili.entities.list": !0,
                            "pos.plusones.get": !0,
                            "chili.groups.list": !0,
                            "pos.plusones.getDefaultAcl": {
                                cache: {
                                    enabled: !0
                                }
                            },
                            "chili.entities.starred.get": !0,
                            "pos.plusones.insert": !0,
                            "chili.activities.list": !0,
                            "chili.entitiesDefaultAcl.get": !0,
                            "chili.entities.starred.list": !0,
                            "chili.activities.get": !0,
                            "chili.activities.search": !0,
                            "pos.plusones.getSignupState": !0
                        },
                        requestCache: {
                            enabled: !0
                        },
                        versions: {
                            chili: "v1",
                            pos: "v1"
                        },
                        rpc: "/rpc",
                        sessionCache: {
                            enabled: !0
                        },
                        transport: {
                            isProxyShared: !0
                        },
                        proxy: "https://clients6.google.com/static/proxy.html",
                        jsh: "r;gc/21773286-02b1a9f6",
                        developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
                        auth: {
                            useInterimAuth: !1
                        }
                    }
                }); j.___jsl.l = (j.___jsl.l || []).concat(["gapi-globals", "globals", "taming", "core.config.base", "core.json", "core.log", "core.util.onload", "core.util.urlparams", "shindig.sha1", "googleapis.globals", "core.util.dom", "rpc", "shindig.random", "dynamic-height.util", "googleapis.cookies", "googleapis.transport", "iframes-globals", "core.util.base", "core.util.event", "core.util.string", "dynamic-height.height", "osapi.base", "googleapis.session", "iframes", "googleapis.client", "iframes-styles-inline", "client-globals", "gwidget",
                "plusone", "googleapis.proxy"]);
                var Fc = j.___jsl; Fc.c && --Fc.o <= 0 && (Fc.c(), delete Fc.c, delete Fc.o);
            })();
            ;;
        } catch(e) {
            window.gbar && gbar.logger && gbar.logger.ml(e);
        }
    })();
    (function() {
        try {
            var b = null;
            window.gbar.tev && window.gbar.tev(3, "gc");
            var e = this,
            f = function(a) {
                a = a.split(".");
                for (var c = e, d; d = a.shift();) if (c[d] != b) c = c[d];
                else return b;
                return c
            },
            g = function(a) {
                return a.call.apply(a.bind, arguments)
            },
            h = function(a, c) {
                var d = c || e;
                if (arguments.length > 2) {
                    var m = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var i = Array.prototype.slice.call(arguments);
                        Array.prototype.unshift.apply(i, m);
                        return a.apply(d, i)
                    }
                } else return function() {
                    return a.apply(d, arguments)
                }
            },
            j = function() {
                j = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") !=
                -1 ? g: h;
                return j.apply(b, arguments)
            };
            var k = {
                o: 1,
                s: 2,
                H: 3,
                j: 4,
                G: 5,
                v: 6,
                p: 7,
                w: 8,
                L: 9,
                F: 10,
                u: 11,
                D: 12,
                C: 13,
                z: 14,
                B: 15,
                g: 16,
                J: 17,
                n: 18,
                A: 19,
                K: 20,
                I: 21,
                k: 22,
                r: 23,
                M: 24,
                N: 25,
                t: 500
            };
            var l = window.gbar;
            var n = {
                a: 1,
                i: 2,
                h: 3,
                d: 4,
                c: 5,
                f: 6,
                e: 7,
                b: 8
            };
            var o = [],
            p = b,
            q = function(a, c) {
                var d = b;
                if (c) d = {
                    m: c
                };
                l.tev && l.tev(a, "gc", d)
            };
            o.push(["gc", {
                init: function(a) {
                    var c = f("gbar.logger.il");
                    window.gadgets.config.update({
                        "googleapis.config": {
                            gcv: a.version,
                            sessionIndex: a.index,
                            elog: function(d, m) {
                                var i = f("gbar.logger.ml");
                                if (i) {
                                    var y = m || {};
                                    y._sn = "gc";
                                    i(d, y)
                                }
                            },
                            ilog: c && j(c, b, k.g)
                        },
                        gwidget: {
                            lang: a.lang
                        }
                    })
                }
            }]);
            q(n.b);
            if (window.gbar && window.gbar.bnc) {
                q(n.d);
                var r,
                s;
                for (r = 0; s = l.bnc[r]; ++r) if (s[0] == "gc") break;
                if (s && !s[1].l) {
                    for (var t = l.mdc, u = l.mdi || {},
                    v = 0, w; w = o[v]; ++v) {
                        var x = w[0],
                        z = t[x],
                        A = u[x],
                        B;
                        if (B = z) {
                            var C;
                            if (C = !A) {
                                var D;
                                a: {
                                    var E = x,
                                    F = l.mdd;
                                    if (F) try {
                                        if (!p) {
                                            p = {};
                                            for (var G = F.split(/;/), H = 0; H < G.length; ++H) p[G[H]] = true
                                        }
                                        D = p[E];
                                        break a
                                    } catch(I) {
                                        l.logger && l.logger.ml(I)
                                    }
                                    D = false
                                }
                                C = !D
                            }
                            B = C
                        }
                        if (B) {
                            q(n.f, x);
                            try {
                                w[1].init(z);
                                u[x] = true
                            } catch(J) {
                                l.logger && l.logger.ml(J)
                            }
                            q(n.e, x)
                        }
                    }
                    var K = l.qd.gc;
                    if (K) {
                        l.qd.gc = [];
                        for (var L = 0, M; M =
                        K[L]; ++L) try {
                            M()
                        } catch(N) {
                            l.logger && l.logger.ml(N)
                        }
                    }
                    s[1].l = true;
                    q(n.c);
                    var O;
                    a: {
                        for (var P = 0, Q; Q = l.bnc[P]; ++P) if ((Q[1].auto || Q[0] == "m") && !Q[1].l) {
                            O = false;
                            break a
                        }
                        O = true
                    }
                    O && q(n.a)
                }
            };
        } catch(e) {
            window.gbar && gbar.logger && gbar.logger.ml(e, {
                "_sn": "gc.init"
            });
        }
    })();
