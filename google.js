< script > window.google = {
    kEI: "UQn-TfiSKYqAswaA6JnPCQ",
    kEXPI: "17259,17291,28505,29859,30460,30535,30646,30760",
    kCSI: {
        e: "17259,17291,28505,29859,30460,30535,30646,30760",
        ei: "UQn-TfiSKYqAswaA6JnPCQ",
        expi: "17259,17291,28505,29859,30460,30535,30646,30760"
    }, 
    authuser: 0,
    ml: function() {},
    pageState: "#",
    kHL: "it",
    time: function() {
        return (new Date).getTime()
    },
    log: function(c, d, b) {
        var a = new Image,
        e = google,
        g = e.lc,
        f = e.li;
        a.onerror = (a.onload = (a.onabort = function() {
            delete g[f]
        }));
        g[f] = a;
        b = b || "/gen_204?atyp=i&ct=" + c + "&cad=" + d + "&zx=" + google.time();
        a.src = b;
        e.li = f + 1
    },
    lc: [],
    li: 0,
    j: {
        en: 1,
        l: function() {
            google.fl = true
        },
        e: function() {
            google.fl = true
        },
        b: location.hash && location.hash != "#",
        bv: 8,
        pm: "p",
        pl: [],
        mc: 0,
        sc: 0.5,
        u: "7515a260"
    },
    Toolbelt: {}
}; (function() {
    var c = google.j;
    window.onpopstate = function() {
        c.psc = 1
    };
    for (var d = 0, b; b = ["ad",
    "bc", "is", "p", "pa", "ac", "pc", "pah", "ph", "sa", "slp", "spf", "xx", "zc", "zz"][d++];)(function(a) {
        c[a] = function() {
            c.pl.push([a, arguments])
        }
    })(b)
})();
if (!window.chrome) window.chrome = {};
window.chrome.sv = 1.00;
window.google.sn = "webhp";
var i = window.google.timers = {};
window.google.startTick = function(a, b) {
    i[a] = {
        t: {
            start: (new Date).getTime()
        },
        bfr: !(!b)
    }
};
window.google.tick = function(a, b, c) {
    if (!i[a]) google.startTick(a);
    i[a].t[b] = c || (new Date).getTime()
};
google.startTick("load", true);
try {
    window.google.pt = window.gtbExternal && window.gtbExternal.pageT();
} catch(v) {}
 < /script>

<script>var _gjwl=location;function _gjuc(){var b=_gjwl.href.indexOf("#");if(b>=0){var a=_gjwl.href.substring(b+1);if(/ ( ^ |&) q = /.test(a)&&a.indexOf("#")==-1&&!/ ( ^ |&) cad = h($ | &) / .test(a)) {
    _gjwl.replace("/search?" + a.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h");
    return 1
}
}
return 0
}
function _gjp() { ! (window._gjwl.hash && window._gjuc()) && setTimeout(_gjp, 500)
};
google.y = {};google.x = function(e, g) {
    google.y[e.id] = [e, g];
    return false
};
if (!window.google) window.google = {};window.google.crm = {};window.google.cri = 0;window.clk = function(e, f, g, l, m, b, n, h) {
    if (document.images) {
        var a = encodeURIComponent || escape,
        c = new Image,
        i = window.google.cri++;
        window.google.crm[i] = c;
        c.onerror = (c.onload = (c.onabort = function() {
            delete window.google.crm[i]
        }));
        if (b && b.substring(0, 6) != "&sig2=") b = "&sig2=" + b;
        c.src = ["/url?sa=T", "", "&cd=", a(m), h ? "&authuser=" + a(h) : "", google.j && google.j.pf ?
        "&sqi=2": "", "&ved=", a(n), e ? "&url=" + a(e.replace(/#.*/, "")).replace(/\+/g, "%2B") : "", "&ei=", "UQn-TfiSKYqAswaA6JnPCQ", b].join("")
    }
    return true
};
 (function() {
    try {
        var e = true,
        k = false;
        var m = window.gbar = window.gbar || {};
        function _tvn(a, b) {
            var c = parseInt(a, 10);
            return isNaN(c) ? b: c
        }
        function _tvf(a, b) {
            var c = parseFloat(a);
            return isNaN(c) ? b: c
        }
        function _tvb(a, b) {
            return a == "true" ? e: a == "false" ? k: b
        }
        function _tvv(a) {
            return !! a
        }
        function n(a, b, c) { (c || m)[a] = b
        }
        m.bv = {
            n: _tvn("2", 0),
            r: "r_gc.r_pw.",
            m: _tvn("1", 1)
        };
        var aa = function() {
            return m.bv.m == 1
        };
        n("sb", aa);
        var o = {},
        da = {},
        p = [],
        ea = function(a, b) {
            p.push([a, b])
        },
        fa = function(a, b) {
            o[a] = b
        },
        ga = function(a) {
            return a in o
        },
        q = {},
        r = function(a, b) {
            q[a] || (q[a] = []);
            q[a].push(b)
        },
        t = function(a) {
            r("m", a)
        },
        u = function(a) {
            var b = document.createElement("script");
            b.src = a; (document.getElementById("xjsc") || document.body).appendChild(b)
        },
        w = function(a) {
            for (var b = 0, c; c = p[b]; ++b) if (c[0] == a) break;
            if (c && !c[1].l) {
                v(2, a);
                u(c[1].url)
            }
        },
        x = function(a) {
            r("gc", a)
        },
        y = null,
        ha = function(a) {
            y = a
        },
        v = function(a, b, c) {
            if (y) {
                a = {
                    t: a,
                    b: b
                };
                if (c) for (var d in c) a[d] =
                c[d];
                try {
                    y(a)
                } catch(f) {}
            }
        };
        n("mdc", o);
        n("mdi", da);
        n("bnc", p);
        n("qGC", x);
        n("qd", q);
        n("lb", w);
        n("mcf", fa);
        n("bcf", ea);
        n("aq", r);
        n("mdd", "");
        n("has", ga);
        n("trh", ha);
        n("tev", v);
        var z = function() {},
        A = function() {},
        D = function(a) {
            var b = new Image,
            c = B;
            b.onerror = b.onload = b.onabort = function() {
                try {
                    delete C[c]
                } catch(d) {}
            };
            C[c] = b;
            b.src = a;
            B = c + 1
        },
        C = [],
        B = 0;
        n("logger", {
            il: A,
            ml: z
        });
        var E = window.gbar.logger,
        F = _tvf("0.001", 1.0E-4),
        G = 0;
        function _mlToken(a, b) {
            try {
                if (G < 1) {
                    G++;
                    var c,
                    d = a,
                    f = b || {},
                    g = encodeURIComponent,
                    h = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&jexpid=", g("28832"), "&srcpg=", g("prop=1"), "&jsr=", Math.round(1 / F), "&ogv=", g("1308264206.0")];
                    if (f._sn) f._sn = "og." + f._sn;
                    for (var l in f) {
                        h.push("&");
                        h.push(g(l));
                        h.push("=");
                        h.push(g(f[l]))
                    }
                    h.push("&emsg=");
                    h.push(g(d.name + ":" + d.message));
                    var i = h.join("");
                    if (H(i)) i = i.substr(0, 2E3);
                    c = i;
                    var j = window.gbar.logger._aem(a,
                    c);
                    D(j)
                }
            } catch(s) {}
        }
        var H = function(a) {
            return a.length >= 2E3
        },
        ia = function(a, b) {
            return b
        };
        function I(a) {
            z = a;
            n("_itl", H, E);
            n("_aem", ia, E);
            n("ml", z, E);
            a = {};
            o.er = a
        }
        if (_tvv("")) I(function(a) {
            throw a;
        });
        else _tvv("1") && Math.random() < F && I(_mlToken);
        var ja = ["gb_71", "gb_155"];
        function ka(a) {
            try {
                var b = (document.forms[0].q || "").value;
                if (b) a.href = a.href.replace(/([?&])q=[^&]*|$/,
                function(d, f) {
                    return (f || "&") + "q=" + encodeURIComponent(b)
                })
            } catch(c) {
                z(c)
            }
        }
        var L = function() {
            for (var a = [], b = 0, c; c = ja[b]; ++b)(c = document.getElementById(c)) && a.push(c);
            return a
        },
        la = function() {
            var a = L();
            return a.length > 0 ? a[0] : null
        },
        ma = function() {
            return document.getElementById("gb_70")
        },
        M = {},
        N = {},
        O = {},
        P = undefined,
        pa = function(a, b) {
            try {
                var c = document.getElementById("gb");
                Q(c, "gbpdjs");
                R();
                if (b && b.getAttribute) {
                    var d = b.getAttribute("aria-owns");
                    if (d.length) {
                        var f = document.getElementById(d);
                        if (f) {
                            var g = b.parentNode;
                            if (P == d) {
                                P = undefined;
                                S(g, "gbto")
                            } else {
                                if (P) {
                                    var h = document.getElementById(P);
                                    if (h && h.getAttribute) {
                                        var l = h.getAttribute("aria-owner");
                                        if (l.length) {
                                            var i = document.getElementById(l);
                                            i && i.parentNode && S(i.parentNode, "gbto")
                                        }
                                    }
                                }
                                T(f) && na(f);
                                P = d;
                                Q(g, "gbto")
                            }
                        }
                    }
                }
                t(function() {
                    m.tg(a, b, e)
                });
                oa(a)
            } catch(j) {
                z(j)
            }
        },
        qa = function(a) {
            t(function() {
                m.close(a)
            })
        },
        Q = function(a, b) {
            var c = a.className;
            U(a, b) || (a.className += (c != "" ? " ": "") + b)
        },
        S = function(a, b) {
            var c = a.className,
            d = RegExp("\\s?\\b" + b + "\\b");
            if (c && c.match(d)) a.className = c.replace(d, "")
        },
        U = function(a, b) {
            var c = RegExp("\\b" + b + "\\b"),
            d = a.className;
            return !! (d && d.match(c))
        },
        ra = function(a, b, c) {
            if (a) try {
                var d = document.getElementById("gbd5").firstChild,
                f = d.firstChild,
                g = document.createElement("li");
                g.className = b + " gbmtc";
                g.id = c;
                a.className = "gbmt";
                g.appendChild(a);
                if (f.hasChildNodes()) {
                    c = [["gbkc"], ["gbf", "gbe", "gbn"], ["gbkp"]];
                    d = 0;
                    for (var h = f.childNodes.length, l = k, i = -1, j = 0, s; s = c[j]; j++) {
                        for (var ba = 0, J; J = s[ba]; ba++) {
                            for (; d < h && U(f.childNodes[d], J);) d++;
                            if (J == b) {
                                f.insertBefore(g, f.childNodes[d]);
                                l = e;
                                break
                            }
                        }
                        if (l) {
                            if (d + 1 < f.childNodes.length && U(f.childNodes[d +
                            1], "gbkp")) i = d + 1;
                            break
                        }
                        if (d > 0 && d + 1 < h) d++;
                        else if (d > 0 && d == h - 1) i = d
                    }
                    if (i >= 0) {
                        var K = document.createElement("li"),
                        ca = document.createElement("div");
                        K.className = "gbmtc";
                        ca.className = "gbmt gbmh";
                        K.appendChild(ca);
                        f.insertBefore(K, f.childNodes[i])
                    }
                    m.addHover && m.addHover(a)
                } else f.appendChild(g)
            } catch(xa) {
                z(xa)
            }
        },
        sa = function(a, b, c) {
            ra(a, b, c)
        },
        ta = function(a, b) {
            ra(a, "gbe", b)
        },
        ua = function() {
            t(function() {
                m.pcm && m.pcm()
            })
        },
        va = function(a, b, c, d, f, g, h, l) {
            t(function() {
                m.paa && m.paa(a, b, c, d, f, g, h, l)
            })
        },
        wa = function(a,
        b) {
            M[a] || (M[a] = []);
            M[a].push(b)
        },
        ya = function(a, b) {
            N[a] || (N[a] = []);
            N[a].push(b)
        },
        za = function(a, b) {
            O[a] || (O[a] = []);
            O[a].push(b)
        },
        oa = function(a) {
            a.preventDefault && a.preventDefault();
            a.returnValue = k;
            a.cancelBubble = e
        },
        V = null,
        na = function(a, b) {
            R();
            if (a) {
                W(a, "Apertura&hellip;");
                X(a, e);
                var c = typeof b != "undefined" ? b: 1E4;
                V = window.setTimeout(Aa, c)
            }
        },
        Ba = function(a) {
            R();
            if (a) {
                X(a, k);
                W(a, "")
            }
        },
        Aa = function(a) {
            R();
            if (a = a || document.getElementById(P)) {
                W(a, "Questo servizio non è al momento disponibile.%1$sRiprova più tardi.", "%1$1");
                X(a, e)
            }
        },
        W = function(a, b, c) {
            if (a && b) {
                var d = T(a);
                if (d) {
                    if (c) {
                        d.innerHTML = "";
                        b = b.split(c);
                        c = 0;
                        for (var f; f = b[c]; c++) {
                            var g = document.createElement("div");
                            g.innerHTML = f;
                            d.appendChild(g)
                        }
                    } else d.innerHTML = b;
                    X(a, e)
                }
            }
        },
        X = function(a, b) {
            var c = b !== undefined ? b: e;
            c ? Q(a, "gbmsgo") : S(a, "gbmsgo")
        },
        T = function(a) {
            for (var b = 0, c; c = a.childNodes[b]; b++) if (U(c, "gbmsg")) return c
        },
        R = function() {
            V && window.clearTimeout(V)
        };
        n("so", la);
        n("sos", L);
        n("si", ma);
        n("tg", pa);
        n("close", qa);
        n("addLink", sa);
        n("addExtraLink", ta);
        n("pcm", ua);
        n("paa", va);
        n("ddld", na);
        n("ddrd", Ba);
        n("dderr", Aa);
        n("ca", Q);
        n("cr", S);
        n("cc", U);
        n("bh", M);
        n("abh", wa);
        n("dh", N);
        n("adh", ya);
        n("ch", O);
        n("ach", za);
        n("qs", ka);
        var Ca = {};
        o.base = Ca;
        p.push(["m", {
            url: "//ssl.gstatic.com/gb/js/sem_67691c26458c684deff94c5b94fcc700.js"
        }]);
        var Y = _tvn("1", 0),
        Da = function(a) {
            var b,
            c;
            if ((b = a.id) && (c = /^gb_(\d+)/.exec(b))) if (c[1] == Y) return;
            m.qs(a)
        },
        Ea = /\bgbmt\b/,
        Fa = function(a) {
            if (Ea.test(a.className)) return "gbm0l";
            return "gbz0l"
        },
        Ga = function(a) {
            try {
                var b = document.getElementById("gb_" + Y),
                c = document.getElementById("gb_" + a);
                b && S(b, Fa(b));
                c && Q(c, Fa(c))
            } catch(d) {
                z(d)
            }
            Y = a
        };
        n("qsj", Da);
        n("slp", Ga);
        if (_tvv("1")) {
            var Ha = _tvb("false", k);
            p.push(["gc", {
                auto: Ha,
                url: "https://ssl.gstatic.com/gb/js/gcm_db5d28cdf8a6967cf1a8c2a26ccf7542.js"
            }]);
            var Ia = {
                version: "gcm_db5d28cdf8a6967cf1a8c2a26ccf7542.js",
                index: "0",
                lang: "it"
            };
            o.gc = Ia;
            var Z = function(a) {
                if (window.googleapis) a && a();
                else {
                    a && x(a);
                    w("gc")
                }
            };
            n("lGC", Z);
            _tvv("1") && n("lPWF", Z)
        }
        window.__PVT = "APfa0bpfP0nqNWyyihFxK9VBV8auszniE99-qL6YvaWhZy5wOxzzG4-gfEqrRxINMGbNGfJRrH4Z40Se-EXYzO1S17Tw0zLBtQ==";
        var Ja = _tvf("0.001", 1.0E-4),
        Ka = _tvf("0.01", 1);
        function La(a, b) {
            var c = Ja,
            d;
            d = a <= 14 ? a == 7 || a == 8 || a == 12 ? k: e: k;
            if (d) c = Ka;
            if (_tvv("1") && Math.random() <= c) {
                d = encodeURIComponent;
                c = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&oge=", a, "&ogex=", d("28832"), "&ogp=", d("1"), "&ogsr=", Math.round(1 / c), "&ogv=", d("1308264206.0")];
                if (b) {
                    if ("ogw" in b) {
                        c.push("&ogw=" + b.ogw);
                        delete b.ogw
                    }
                    var f,
                    g = b,
                    h = [];
                    for (f in g) {
                        h.length != 0 && h.push(",");
                        h.push(f);
                        h.push(".");
                        h.push(g[f])
                    }
                    f = h.join("");
                    if (f != "") {
                        c.push("&ogad=");
                        c.push(d(f))
                    }
                }
                D(c.join(""))
            }
        }
        A = La;
        n("il", A, E);
        var Ma = {};
        o.il = Ma;
        var Na = function() {
            m.prm && m.prm()
        };
        wa("gbd4", Na);
        if (_tvb("true", e)) {
            var Oa = {
                g: _tvv(""),
                d: _tvv(""),
                e: "srinzivillo@gmail.com",
                m: "gmail.com",
                p: "//lh5.googleusercontent.com/-3zvxXMRvYMY/AAAAAAAAAAI/AAAAAAAAAAA/pY9Wa_z8zsc/s96-c/photo.jpg",
                xp: _tvv("1"),
                mg: "%1$s (delegato)",
                md: "%1$s (predefinito)"
            };
            o.prf = Oa
        }
        if (_tvv("1") && _tvv("1")) {
            var $ = function(a) {
                Z(function() {
                    r("pw", a);
                    w("pw")
                })
            };
            n("lPW", $);
            p.push(["pw", {
                url: "//ssl.gstatic.com/gb/js/pwm_e845c2895710067d8b3a5d390fe6d2f7.js"
            }]);
            var Pa = [],
            Qa = function(a) {
                Pa[0] = a
            },
            Ra = {
                signed: Pa,
                elog: z,
                base: "https://profiles.google.com/u/0",
                loadTime: (new Date).getTime()
            };
            o.pw = Ra;
            var Sa = function(a, b) {
                for (var c = b.split("."), d = function() {
                    var l = arguments;
                    a(function() {
                        for (var i = m, j = 0, s = c.length - 1; j < s; ++j) i = i[c[j]];
                        i[c[j]].apply(i, l)
                    })
                },
                f = m, g = 0, h = c.length - 1; g < h; ++g) f = f[c[g]] = f[c[g]] ||
                {};
                return f[c[g]] = d
            };
            Sa($, "pw.clk");
            Sa($, "pw.hvr");
            n("su", Qa, m.pw)
        }
        function Ta() {
            function a() {
                for (var j; j = g[h++];) if (j[0] == "m" || j[1].auto) break;
                if (j) {
                    v(2, j[0]);
                    u(j[1].url)
                }
                h < g.length && setTimeout(a, 0)
            }
            function b() {
                f-->0 ? setTimeout(b, 0) : a()
            }
            var c = _tvb("true", e),
            d = _tvb("false", k),
            f = 3,
            g = p,
            h = 0,
            l = window.gbarOnReady;
            if (l) try {
                l()
            } catch(i) {
                z(i)
            }
            if (d) n("ldb", a);
            else if (c) window.addEventListener ? window.addEventListener("load", b, k) : window.attachEvent("onload", b);
            else b()
        }
        n("rdl", Ta);
    } catch(e) {
        window.gbar && gbar.logger && gbar.logger.ml(e);
    }
})();
 (function() {
    try {
        window.gbar.rdl();
    } catch(e) {
        window.gbar && gbar.logger && gbar.logger.ml(e);
    }
})();
 < /script>

<script>if(google.j.b)document.body.style.visibility='hidden';</script >

<script >
function _gjp() { ! (location.hash && _gjuc()) && setTimeout(_gjp, 500);
}
google.j[1] = {
    cc: [],
    co: ['body', 'footer', 'xjsi'],
    pc: [],
    css: document.getElementById('gstyle').innerHTML,
    main: '<span class=ctr-p id=body></span>' + '<span class=ctr-p id=footer></span>' + '<span id=xjsi></span>',
    bl: ['mngb', 'gb_']
}; < /script>

<script>function wgjp(){var xjs=document.createElement('script');xjs.src='/extern_chrome / dc6c6c727409255a.js ';(document.getElementById('xjsd ')||document.body).appendChild(xjs)};</script>

<script>if (google.y) google.y.first = [];
google.dlj = function(b) {
    window.setTimeout(function() {
        var a = document.createElement("script");
        a.src = b;
        document.getElementById("xjsd").appendChild(a)
    },
    0)
};
if (google.y) google.y.first = [];
if (!google.xjs) {
    google.dstr = [];
    google.rein = [];
    if (google.timers && google.timers.load.t) {
        google.timers.load.t.xjsls = new Date().getTime();
    }
    google.dlj(' / extern_js / f / CgJpdBICaXQrMEU4ACwrMFo4ACwrMA44ACwrMBc4ACwrMDw4ACwrMFE4ACwrMFk4ACwrMAo4AEAdmgICcHMsKzAWOAAsKzAZOAAsKzAhOAAsKzAlOAAsKzAqOAAsKzArOAAsKzA1OAAsKzBAOAAsKzBBOAAsKzBNOAAsKzBOOAAsKzBTOACaAgZzZWFyY2gsKzBUOAAsKzBfOAAsKzBjOAAsKzBpOAAsKzAdOAAsKzBcOAAsKzBvOAAsKzAYOAAsKzAmOAAsgAJIkAJB / 9pgr0higcew.js ');
    google.xjs = 1
}
google.neegg = 1;
google.mc = [];
google.mc = google.mc.concat([[69, {}], [14, {}], [60, {}], [81, {}], [42, {}], [43, {}], [83, {
    "bih": 588,
    "biw": 965
}], [95, {
    "kfe": {
        "kfeHost": "clients1.google.it",
        "kfeUrlPrefix": "/webpagethumbnail?c=11\u0026r=2\u0026f=2\u0026s=300:585\u0026query=\u0026hl=it\u0026gl=it",
        "maxPrefetchConnections": 2,
        "prefetch": 90,
        "slowConnection": false
    },
    "logging": {
        "csiFraction": 0.050,
        "gen204Fraction": 0.050
    },
    "msgs": {
        "loading": "Caricamento ancora in corso...",
        "mute": "Disattiva l'audio ",
        "noPreview ": "Anteprima non disponibile ",
        "sound ": "Audio: ",
        "soundOff ": "disattiva ",
        "soundOn ": "su ",
        "unmute ": "Attiva l 'audio"
    },
    "pb": {
        "desiredHeight": 585,
        "desiredWidth": 300,
        "minHeight": 200,
        "minWidth": 300
    },
    "time": {
        "hoverClose": 300,
        "hoverModeTimeout": 60,
        "hoverOpen": 125,
        "loading": 100,
        "longHoverOpen": 725,
        "prefetchOnLoad": 3000,
        "timeout": 2500
    }
}], [78, {}], [25, {
    "m": {
        "bks": true,
        "blg": true,
        "dsc": true,
        "evn": true,
        "frm": true,
        "isch": true,
        "klg": true,
        "mbl": true,
        "nws": true,
        "plcs": true,
        "ppl": true,
        "prc": true,
        "pts": true,
        "rcp": true,
        "shop": true,
        "vid": true
    },
    "t": null
}], [33, {
    "gl": "it",
    "msgs": {
        "r": "Mostra altri risultati speciali",
        "s": "Nascondi altri risultati speciali"
    },
    "pb": "-159px -55px",
    "q": ""
}], [64, {
    "hr": "1 ora fa",
    "hrs": "1 ore fa",
    "jsecs": "secondi fa",
    "min": "1 minuto fa",
    "mins": "1 minuti fa",
    "secs": "1 secondi fa"
}], [105, {}], [22, {
    "m_errors": {
        "32": "Spiacenti, non esistono altri risultati da visualizzare.",
        "default": "\u003Cfont color=red\u003EErrore:\u003C/font\u003E il server non è riuscito a completare la richiesta. Riprovare tra 30 secondi."
    },
    "m_tip": "Fai clic per ulteriori informazioni"
}], [77, {}], [84, {}], [99, {}], [29, {
    "mcr": 5
}], [92, {
    "avgTtfc": 2000,
    "fd": 1000,
    "fl": true,
    "focus": true,
    "hpt": 250,
    "kn": true,
    "mds": "clir,clue,dfn,evn,frim,klg,prc,rl,show,sp,sts,ww,mbl_he,mbl_hs,mbl_re,mbl_rs,mbl_sv,isch",
    "msg": {
        "dym": "Forse cercavi:",
        "gs": "Cerca con Google",
        "kntt": "Utilizza i tasti freccia su e giù per selezionare ogni risultato. Premi Invio per visualizzare la selezione.",
        "sif": "Cerca invece",
        "srf": "Risultati visualizzati per"
    },
    "odef": true,
    "ophe": true,
    "pq": true,
    "rpt": 50,
    "tct": " ?",
    "tdur": 50
}], [111, {
    "gl": "it",
    "hl": "it",
    "msg": {
        "cprpt": "Scelte di recente",
        "cpyc": "Dal tuo computer",
        "cpyppt": "Le tue foto di Picasa Web",
        "cpyrpt": "Le tue scelte recenti",
        "ld": "Caricamento in corso..."
    }
}], [24, {}], [38, {}]]); (function() {
    var r = (function() {
        google.y.first.push(function() {
            try {
                var form = document.f || document.f || document.gs;
                google.ac.i(form, form.q, '', '', '', {
                    ep: 1,
                    lm: 1,
                    o: 1,
                    sw: 1
                }); (function() {
                    function e() {
                        var a = null;
                        if (window.ActiveXObject) {
                            a = new ActiveXObject("Msxml2.XMLHTTP");
                            if (!a) a = new ActiveXObject("Microsoft.XMLHTTP")
                        } else if (window.XMLHttpRequest) a = new XMLHttpRequest;
                        return a
                    }
                    function f(a) {
                        if (window.execScript) window.execScript(a, "JavaScript");
                        else if (window.eval) {
                            var b = null;
                            window.eval("var _et_ = 1;");
                            if (typeof window._et_ != "undefined") {
                                delete window._et_;
                                b = true
                            } else b = false;
                            if (b) window.eval(a);
                            else {
                                var d = window.document,
                                c = d.createElement("script");
                                c.type = "text/javascript";
                                c.defer =
                                false;
                                c.appendChild(d.createTextNode(a));
                                d.body.appendChild(c);
                                d.body.removeChild(c)
                            }
                        }
                    }
                    function g(a) {
                        var b = a;
                        if (b && b.length > 0) {
                            b = b.substring(27);
                            if (b.substring(0, 6) == "initcp") b = "google.cp." + b
                        }
                        f(b)
                    }
                    function h(a) {
                        if (a.readyState == 4 && (a.status == 200 || a.status == 304)) try {
                            g(a.responseText)
                        } catch(b) {}
                    }
                    function i() {
                        if (window.google && (!window.google.cp || window.google.cp.initcp && !window.google.cp.o)) {
                            window.google.cp = window.google.cp || {};
                            window.google.cp.o = {
                                l: "/images/logos/ps_logo2.png",
                                h: false,
                                a: "Google",
                                u: "",
                                d: false
                            };
                            var a = e();
                            if (a) {
                                a.open("GET", "/ig/cp/get?hl=it&gl=it&authuser=0&bundleJs=0", true);
                                a.onreadystatechange = function() {
                                    h(a)
                                };
                                a.send(null)
                            }
                        }
                    }
                    i();
                })();
                ;
            } catch(e) {
                google.ml(e, false, {
                    'cause ': 'defer '
                });
            }
            if (google.med) {
                google.med('init ');
                google.initHistory();
                google.med('history ');
            }
            google.History && google.History.initialize(' / ')
        });
    });
    r();
    var l = window.location.hash ? window.location.href.substr(window.location.href.indexOf('#')) : '#';
    if (l == '#' && google.defre) {
        google.defre = 1;
        google.y.first.push(function() {
            if (google.j && google.j.init) {
                google.rein && google.rein.push(r);
            }
        });
    }
})();
if (google.j && google.j.en && google.j.xi) {
    window.setTimeout(google.j.xi, 0);
}</script>

<script>(function() {
    var a,
    b = window.location.href.match(/\/webhp\?[^#]*tune=[^#]*/);
    if (a = b && b.length > 0 ? "http://www.google.com/logos/2011/lespaul.html#" + b[0].substr(7) : null) google.nav && google.nav.go ? google.nav.go(a) : window.location.href = a;
})();</script>

<script>(function() {
    var b,
    d,
    e,
    f;
    function g(a, c) {
        if (a.removeEventListener) {
            a.removeEventListener("load", c, false);
            a.removeEventListener("error", c, false)
        } else {
            a.detachEvent("onload", c);
            a.detachEvent("onerror", c)
        }
    }
    function h(a) {
        f = (new Date).getTime(); ++d;
        a = a || window.event;
        var c = a.target || a.srcElement;
        g(c, h)
    }
    var i = document.getElementsByTagName("img");
    b = i.length;
    d = 0;
    for (var j = 0, k; j < b; ++j) {
        k = i[j];
        if (k.complete || typeof k.src != "string" || !k.src)++d;
        else if (k.addEventListener) {
            k.addEventListener("load", h, false);
            k.addEventListener("error",
            h, false)
        } else {
            k.attachEvent("onload", h);
            k.attachEvent("onerror", h)
        }
    }
    e = b - d;
    function l() {
        if (!google.timers.load.t) return;
        google.timers.load.t.ol = (new Date).getTime();
        google.timers.load.t.iml = f;
        google.kCSI.imc = d;
        google.kCSI.imn = b;
        google.kCSI.imp = e;
        google.timers.load.t.xjs && google.report && google.report(google.timers.load, google.kCSI)
    }
    if (window.addEventListener) window.addEventListener("load", l, false);
    else if (window.attachEvent) window.attachEvent("onload", l);
    google.timers.load.t.prt = (f = (new Date).getTime());
})();

</script>'