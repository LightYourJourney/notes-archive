/*! For license information please see magicmouse-2.0.0.cdn.min.js.LICENSE.txt */
var magicMouse;
(() => {
  var e = {
      763: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s });
        var n = r(537),
          o = r.n(n),
          i = r(645),
          a = r.n(i)()(o());
        a.push([
          e.id,
          "body #magicMouseCursor{position:fixed;width:35px;height:35px;border:1px solid #fff;border-radius:50%;z-index:9999;left:0;top:0;transition:transform .07s,width .3s,height .3s;pointer-events:none}body #magicMouseCursor.cursor-square{border-radius:0}body #magicPointer{height:5px;width:5px;top:0;left:0;position:fixed;background:#fff;border-radius:50%;pointer-events:none;transition:background .2s,width .2s,height .2s,box-shadow .2s}body #magicPointer.pointer-blur{height:50px;width:50px;background:none;border:1px solid #fff;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.pointer-overlay{height:50px;width:50px;mix-blend-mode:difference;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.is-hover{background:red}body .magic-hover{transition:all .2s}body .magic-hover:hover{cursor:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/scss/style.scss"],
            names: [],
            mappings:
              "AAAA,uBAAuB,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,YAAY,CAAC,MAAM,CAAC,KAAK,CAAC,8CAA8C,CAAC,mBAAmB,CAAC,qCAAqC,eAAe,CAAC,mBAAmB,UAAU,CAAC,SAAS,CAAC,KAAK,CAAC,MAAM,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,6DAA6D,CAAC,gCAAgC,WAAW,CAAC,UAAU,CAAC,eAAe,CAAC,qBAAqB,CAAC,iCAAiC,CAAC,mCAAmC,WAAW,CAAC,UAAU,CAAC,yBAAyB,CAAC,iCAAiC,CAAC,4BAA4B,cAAc,CAAC,kBAAkB,kBAAkB,CAAC,wBAAwB,WAAW",
            sourcesContent: [
              "body #magicMouseCursor{position:fixed;width:35px;height:35px;border:1px solid #fff;border-radius:50%;z-index:9999;left:0;top:0;transition:transform .07s,width .3s,height .3s;pointer-events:none}body #magicMouseCursor.cursor-square{border-radius:0}body #magicPointer{height:5px;width:5px;top:0;left:0;position:fixed;background:#fff;border-radius:50%;pointer-events:none;transition:background .2s,width .2s,height .2s,box-shadow .2s}body #magicPointer.pointer-blur{height:50px;width:50px;background:none;border:1px solid #fff;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.pointer-overlay{height:50px;width:50px;mix-blend-mode:difference;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.is-hover{background:red}body .magic-hover{transition:all .2s}body .magic-hover:hover{cursor:none}",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (n)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (a[u] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var f = [].concat(e[c]);
                (n && a[f[0]]) ||
                  (void 0 !== i &&
                    (void 0 === f[5] ||
                      (f[1] = "@layer"
                        .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                        .concat(f[1], "}")),
                    (f[5] = i)),
                  r &&
                    (f[2]
                      ? ((f[1] = "@media "
                          .concat(f[2], " {")
                          .concat(f[1], "}")),
                        (f[2] = r))
                      : (f[2] = r)),
                  o &&
                    (f[4]
                      ? ((f[1] = "@supports ("
                          .concat(f[4], ") {")
                          .concat(f[1], "}")),
                        (f[4] = o))
                      : (f[4] = "".concat(o))),
                  t.push(f));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e[1],
            r = e[3];
          if (!r) return t;
          if ("function" == typeof btoa) {
            var n = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  n
                ),
              i = "/*# ".concat(o, " */"),
              a = r.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(r.sourceRoot || "")
                  .concat(e, " */");
              });
            return [t].concat(a).concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var u = e[s],
              c = n.base ? u[0] + n.base : u[0],
              f = i[c] || 0,
              l = "".concat(c, " ").concat(f);
            i[c] = f + 1;
            var d = r(l),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var h = o(p, n);
              (n.byIndex = s),
                t.splice(s, 0, { identifier: l, updater: h, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = r(i[a]);
              t[s].references--;
            }
            for (var u = n(e, o), c = 0; c < i.length; c++) {
              var f = r(i[c]);
              0 === t[f].references && (t[f].updater(), t.splice(f, 1));
            }
            i = u;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        "use strict";
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      942: () => {
        !(function (e, t, r) {
          function n(e, t) {
            return typeof e === t;
          }
          function o() {
            return "function" != typeof t.createElement
              ? t.createElement(arguments[0])
              : d
              ? t.createElementNS.call(
                  t,
                  "http://www.w3.org/2000/svg",
                  arguments[0]
                )
              : t.createElement.apply(t, arguments);
          }
          function i() {
            var e = t.body;
            return e || ((e = o(d ? "svg" : "body")).fake = !0), e;
          }
          var a = [],
            s = [],
            u = {
              _version: "3.6.0",
              _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0,
              },
              _q: [],
              on: function (e, t) {
                var r = this;
                setTimeout(function () {
                  t(r[e]);
                }, 0);
              },
              addTest: function (e, t, r) {
                s.push({ name: e, fn: t, options: r });
              },
              addAsyncTest: function (e) {
                s.push({ name: null, fn: e });
              },
            },
            c = function () {};
          (c.prototype = u), (c = new c());
          var f = u._config.usePrefixes
            ? " -webkit- -moz- -o- -ms- ".split(" ")
            : ["", ""];
          u._prefixes = f;
          var l = t.documentElement,
            d = "svg" === l.nodeName.toLowerCase(),
            p = (u.testStyles = function (e, r, n, a) {
              var s,
                u,
                c,
                f,
                d = "modernizr",
                p = o("div"),
                h = i();
              if (parseInt(n, 10))
                for (; n--; )
                  ((c = o("div")).id = a ? a[n] : d + (n + 1)),
                    p.appendChild(c);
              return (
                ((s = o("style")).type = "text/css"),
                (s.id = "s" + d),
                (h.fake ? h : p).appendChild(s),
                h.appendChild(p),
                s.styleSheet
                  ? (s.styleSheet.cssText = e)
                  : s.appendChild(t.createTextNode(e)),
                (p.id = d),
                h.fake &&
                  ((h.style.background = ""),
                  (h.style.overflow = "hidden"),
                  (f = l.style.overflow),
                  (l.style.overflow = "hidden"),
                  l.appendChild(h)),
                (u = r(p, e)),
                h.fake
                  ? (h.parentNode.removeChild(h),
                    (l.style.overflow = f),
                    l.offsetHeight)
                  : p.parentNode.removeChild(p),
                !!u
              );
            });
          c.addTest("touchevents", function () {
            var r;
            if (
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof DocumentTouch)
            )
              r = !0;
            else {
              var n = [
                "@media (",
                f.join("touch-enabled),("),
                "heartz",
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join("");
              p(n, function (e) {
                r = 9 === e.offsetTop;
              });
            }
            return r;
          }),
            (function () {
              var e, t, r, o, i, u;
              for (var f in s)
                if (s.hasOwnProperty(f)) {
                  if (
                    ((e = []),
                    (t = s[f]).name &&
                      (e.push(t.name.toLowerCase()),
                      t.options &&
                        t.options.aliases &&
                        t.options.aliases.length))
                  )
                    for (r = 0; r < t.options.aliases.length; r++)
                      e.push(t.options.aliases[r].toLowerCase());
                  for (
                    o = n(t.fn, "function") ? t.fn() : t.fn, i = 0;
                    i < e.length;
                    i++
                  )
                    1 === (u = e[i].split(".")).length
                      ? (c[u[0]] = o)
                      : (!c[u[0]] ||
                          c[u[0]] instanceof Boolean ||
                          (c[u[0]] = new Boolean(c[u[0]])),
                        (c[u[0]][u[1]] = o)),
                      a.push((o ? "" : "no-") + u.join("-"));
                }
            })(),
            (function (e) {
              var t = l.className,
                r = c._config.classPrefix || "";
              if ((d && (t = t.baseVal), c._config.enableJSClass)) {
                var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
                t = t.replace(n, "$1" + r + "js$2");
              }
              c._config.enableClasses &&
                ((t += " " + r + e.join(" " + r)),
                d ? (l.className.baseVal = t) : (l.className = t));
            })(a),
            delete u.addTest,
            delete u.addAsyncTest;
          for (var h = 0; h < c._q.length; h++) c._q[h]();
          e.Modernizr = c;
        })(window, document);
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { id: n, exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var n = {};
  (() => {
    "use strict";
    r.d(n, { magicMouse: () => ue });
    var e = r(379),
      t = r.n(e),
      o = r(795),
      i = r.n(o),
      a = r(569),
      s = r.n(a),
      u = r(565),
      c = r.n(u),
      f = r(216),
      l = r.n(f),
      d = r(589),
      p = r.n(d),
      h = r(763),
      y = {};
    function m(e) {
      return (
        null != e &&
        "object" == typeof e &&
        !0 === e["@@functional/placeholder"]
      );
    }
    function v(e) {
      return function t(r) {
        return 0 === arguments.length || m(r) ? t : e.apply(this, arguments);
      };
    }
    function A(e) {
      return function t(r, n) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return m(r)
              ? t
              : v(function (t) {
                  return e(r, t);
                });
          default:
            return m(r) && m(n)
              ? t
              : m(r)
              ? v(function (t) {
                  return e(t, n);
                })
              : m(n)
              ? v(function (t) {
                  return e(r, t);
                })
              : e(r, n);
        }
      };
    }
    (y.styleTagTransform = p()),
      (y.setAttributes = c()),
      (y.insert = s().bind(null, "head")),
      (y.domAPI = i()),
      (y.insertStyleElement = l()),
      t()(h.Z, y),
      h.Z && h.Z.locals && h.Z.locals;
    const g =
      Array.isArray ||
      function (e) {
        return (
          null != e &&
          e.length >= 0 &&
          "[object Array]" === Object.prototype.toString.call(e)
        );
      };
    function b(e) {
      return null != e && "function" == typeof e["@@transducer/step"];
    }
    function C(e, t, r) {
      return function () {
        if (0 === arguments.length) return r();
        var n = arguments[arguments.length - 1];
        if (!g(n)) {
          for (var o = 0; o < e.length; ) {
            if ("function" == typeof n[e[o]])
              return n[e[o]].apply(
                n,
                Array.prototype.slice.call(arguments, 0, -1)
              );
            o += 1;
          }
          if (b(n)) {
            var i = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
            return i(n);
          }
        }
        return r.apply(this, arguments);
      };
    }
    const x = function () {
        return this.xf["@@transducer/init"]();
      },
      w = function (e) {
        return this.xf["@@transducer/result"](e);
      };
    function O(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    const S = v(function (e) {
      return (
        !!g(e) ||
        (!!e &&
          "object" == typeof e &&
          !O(e) &&
          (0 === e.length ||
            (e.length > 0 &&
              e.hasOwnProperty(0) &&
              e.hasOwnProperty(e.length - 1))))
      );
    });
    var j = (function () {
      function e(e) {
        this.f = e;
      }
      return (
        (e.prototype["@@transducer/init"] = function () {
          throw new Error("init not implemented on XWrap");
        }),
        (e.prototype["@@transducer/result"] = function (e) {
          return e;
        }),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(e, t);
        }),
        e
      );
    })();
    function q(e, t) {
      switch (e) {
        case 0:
          return function () {
            return t.apply(this, arguments);
          };
        case 1:
          return function (e) {
            return t.apply(this, arguments);
          };
        case 2:
          return function (e, r) {
            return t.apply(this, arguments);
          };
        case 3:
          return function (e, r, n) {
            return t.apply(this, arguments);
          };
        case 4:
          return function (e, r, n, o) {
            return t.apply(this, arguments);
          };
        case 5:
          return function (e, r, n, o, i) {
            return t.apply(this, arguments);
          };
        case 6:
          return function (e, r, n, o, i, a) {
            return t.apply(this, arguments);
          };
        case 7:
          return function (e, r, n, o, i, a, s) {
            return t.apply(this, arguments);
          };
        case 8:
          return function (e, r, n, o, i, a, s, u) {
            return t.apply(this, arguments);
          };
        case 9:
          return function (e, r, n, o, i, a, s, u, c) {
            return t.apply(this, arguments);
          };
        case 10:
          return function (e, r, n, o, i, a, s, u, c, f) {
            return t.apply(this, arguments);
          };
        default:
          throw new Error(
            "First argument to _arity must be a non-negative integer no greater than ten"
          );
      }
    }
    const k = A(function (e, t) {
      return q(e.length, function () {
        return e.apply(t, arguments);
      });
    });
    function B(e, t, r) {
      for (var n = r.next(); !n.done; ) {
        if (
          (t = e["@@transducer/step"](t, n.value)) &&
          t["@@transducer/reduced"]
        ) {
          t = t["@@transducer/value"];
          break;
        }
        n = r.next();
      }
      return e["@@transducer/result"](t);
    }
    function E(e, t, r, n) {
      return e["@@transducer/result"](r[n](k(e["@@transducer/step"], e), t));
    }
    var M = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
    var P = (function () {
      function e(e, t) {
        (this.xf = t), (this.f = e);
      }
      return (
        (e.prototype["@@transducer/init"] = x),
        (e.prototype["@@transducer/result"] = w),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.xf["@@transducer/step"](e, this.f(t));
        }),
        e
      );
    })();
    const L = A(function (e, t) {
      return new P(e, t);
    });
    function T(e, t, r) {
      return function () {
        for (
          var n = [], o = 0, i = e, a = 0;
          a < t.length || o < arguments.length;

        ) {
          var s;
          a < t.length && (!m(t[a]) || o >= arguments.length)
            ? (s = t[a])
            : ((s = arguments[o]), (o += 1)),
            (n[a] = s),
            m(s) || (i -= 1),
            (a += 1);
        }
        return i <= 0 ? r.apply(this, n) : q(i, T(e, n, r));
      };
    }
    const I = A(function (e, t) {
      return 1 === e ? v(t) : q(e, T(e, [], t));
    });
    function N(e, t) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    var U = Object.prototype.toString;
    const _ = (function () {
      return "[object Arguments]" === U.call(arguments)
        ? function (e) {
            return "[object Arguments]" === U.call(e);
          }
        : function (e) {
            return N("callee", e);
          };
    })();
    var W = !{ toString: null }.propertyIsEnumerable("toString"),
      z = [
        "constructor",
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ],
      R = (function () {
        return arguments.propertyIsEnumerable("length");
      })(),
      D = function (e, t) {
        for (var r = 0; r < e.length; ) {
          if (e[r] === t) return !0;
          r += 1;
        }
        return !1;
      };
    const F =
        "function" != typeof Object.keys || R
          ? v(function (e) {
              if (Object(e) !== e) return [];
              var t,
                r,
                n = [],
                o = R && _(e);
              for (t in e)
                !N(t, e) || (o && "length" === t) || (n[n.length] = t);
              if (W)
                for (r = z.length - 1; r >= 0; )
                  N((t = z[r]), e) && !D(n, t) && (n[n.length] = t), (r -= 1);
              return n;
            })
          : v(function (e) {
              return Object(e) !== e ? [] : Object.keys(e);
            }),
      H = A(
        C(["fantasy-land/map", "map"], L, function (e, t) {
          switch (Object.prototype.toString.call(t)) {
            case "[object Function]":
              return I(t.length, function () {
                return e.call(this, t.apply(this, arguments));
              });
            case "[object Object]":
              return (function (e, t, r) {
                if (
                  ("function" == typeof e &&
                    (e = (function (e) {
                      return new j(e);
                    })(e)),
                  S(r))
                )
                  return (function (e, t, r) {
                    for (var n = 0, o = r.length; n < o; ) {
                      if (
                        (t = e["@@transducer/step"](t, r[n])) &&
                        t["@@transducer/reduced"]
                      ) {
                        t = t["@@transducer/value"];
                        break;
                      }
                      n += 1;
                    }
                    return e["@@transducer/result"](t);
                  })(e, t, r);
                if ("function" == typeof r["fantasy-land/reduce"])
                  return E(e, t, r, "fantasy-land/reduce");
                if (null != r[M]) return B(e, t, r[M]());
                if ("function" == typeof r.next) return B(e, t, r);
                if ("function" == typeof r.reduce) return E(e, t, r, "reduce");
                throw new TypeError("reduce: list must be array or iterable");
              })(
                function (r, n) {
                  return (r[n] = e(t[n])), r;
                },
                {},
                F(t)
              );
            default:
              return (function (e, t) {
                for (var r = 0, n = t.length, o = Array(n); r < n; )
                  (o[r] = e(t[r])), (r += 1);
                return o;
              })(e, t);
          }
        })
      ),
      K =
        Number.isInteger ||
        function (e) {
          return e << 0 === e;
        },
      Y = A(function (e, t) {
        var r = e < 0 ? t.length + e : e;
        return O(t) ? t.charAt(r) : t[r];
      }),
      $ = A(function (e, t) {
        if (null != t) return K(e) ? Y(e, t) : t[e];
      }),
      X = A(function (e, t) {
        return H($(e), t);
      });
    function Z(e) {
      return function t(r, n, o) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return m(r)
              ? t
              : A(function (t, n) {
                  return e(r, t, n);
                });
          case 2:
            return m(r) && m(n)
              ? t
              : m(r)
              ? A(function (t, r) {
                  return e(t, n, r);
                })
              : m(n)
              ? A(function (t, n) {
                  return e(r, t, n);
                })
              : v(function (t) {
                  return e(r, n, t);
                });
          default:
            return m(r) && m(n) && m(o)
              ? t
              : m(r) && m(n)
              ? A(function (t, r) {
                  return e(t, r, o);
                })
              : m(r) && m(o)
              ? A(function (t, r) {
                  return e(t, n, r);
                })
              : m(n) && m(o)
              ? A(function (t, n) {
                  return e(r, t, n);
                })
              : m(r)
              ? v(function (t) {
                  return e(t, n, o);
                })
              : m(n)
              ? v(function (t) {
                  return e(r, t, o);
                })
              : m(o)
              ? v(function (t) {
                  return e(r, n, t);
                })
              : e(r, n, o);
        }
      };
    }
    function J(e) {
      for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
      return r;
    }
    function V(e, t, r) {
      for (var n = 0, o = r.length; n < o; ) {
        if (e(t, r[n])) return !0;
        n += 1;
      }
      return !1;
    }
    const G =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            },
      Q = v(function (e) {
        return null === e
          ? "Null"
          : void 0 === e
          ? "Undefined"
          : Object.prototype.toString.call(e).slice(8, -1);
      });
    function ee(e, t, r, n) {
      var o = J(e);
      function i(e, t) {
        return te(e, t, r.slice(), n.slice());
      }
      return !V(
        function (e, t) {
          return !V(i, t, e);
        },
        J(t),
        o
      );
    }
    function te(e, t, r, n) {
      if (G(e, t)) return !0;
      var o,
        i,
        a = Q(e);
      if (a !== Q(t)) return !1;
      if (
        "function" == typeof e["fantasy-land/equals"] ||
        "function" == typeof t["fantasy-land/equals"]
      )
        return (
          "function" == typeof e["fantasy-land/equals"] &&
          e["fantasy-land/equals"](t) &&
          "function" == typeof t["fantasy-land/equals"] &&
          t["fantasy-land/equals"](e)
        );
      if ("function" == typeof e.equals || "function" == typeof t.equals)
        return (
          "function" == typeof e.equals &&
          e.equals(t) &&
          "function" == typeof t.equals &&
          t.equals(e)
        );
      switch (a) {
        case "Arguments":
        case "Array":
        case "Object":
          if (
            "function" == typeof e.constructor &&
            "Promise" ===
              ((o = e.constructor),
              null == (i = String(o).match(/^function (\w*)/)) ? "" : i[1])
          )
            return e === t;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof e != typeof t || !G(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Date":
          if (!G(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Error":
          return e.name === t.name && e.message === t.message;
        case "RegExp":
          if (
            e.source !== t.source ||
            e.global !== t.global ||
            e.ignoreCase !== t.ignoreCase ||
            e.multiline !== t.multiline ||
            e.sticky !== t.sticky ||
            e.unicode !== t.unicode
          )
            return !1;
      }
      for (var s = r.length - 1; s >= 0; ) {
        if (r[s] === e) return n[s] === t;
        s -= 1;
      }
      switch (a) {
        case "Map":
          return (
            e.size === t.size &&
            ee(e.entries(), t.entries(), r.concat([e]), n.concat([t]))
          );
        case "Set":
          return (
            e.size === t.size &&
            ee(e.values(), t.values(), r.concat([e]), n.concat([t]))
          );
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
          break;
        default:
          return !1;
      }
      var u = F(e);
      if (u.length !== F(t).length) return !1;
      var c = r.concat([e]),
        f = n.concat([t]);
      for (s = u.length - 1; s >= 0; ) {
        var l = u[s];
        if (!N(l, t) || !te(t[l], e[l], c, f)) return !1;
        s -= 1;
      }
      return !0;
    }
    const re = A(function (e, t) {
      return te(e, t, [], []);
    });
    Date.prototype.toISOString;
    var ne = (function () {
      function e(e, t) {
        (this.xf = t), (this.f = e), (this.found = !1);
      }
      return (
        (e.prototype["@@transducer/init"] = x),
        (e.prototype["@@transducer/result"] = function (e) {
          return (
            this.found || (e = this.xf["@@transducer/step"](e, void 0)),
            this.xf["@@transducer/result"](e)
          );
        }),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return (
            this.f(t) &&
              ((this.found = !0),
              (e =
                (r = this.xf["@@transducer/step"](e, t)) &&
                r["@@transducer/reduced"]
                  ? r
                  : { "@@transducer/value": r, "@@transducer/reduced": !0 })),
            e
          );
          var r;
        }),
        e
      );
    })();
    const oe = A(
      C(
        ["find"],
        A(function (e, t) {
          return new ne(e, t);
        }),
        function (e, t) {
          for (var r = 0, n = t.length; r < n; ) {
            if (e(t[r])) return t[r];
            r += 1;
          }
        }
      )
    );
    "function" == typeof Object.assign && Object.assign;
    const ie = Z(function (e, t, r) {
      return re(t, $(e, r));
    });
    String.prototype.trim;
    const ae = [
      { name: "outerWidth", type: "number", required: !1, default: 30 },
      { name: "outerHeight", type: "number", required: !1, default: 30 },
      {
        name: "outerStyle",
        type: "enum",
        required: !1,
        default: "circle",
        allowed: ["circle", "square", "diamond", "disable"],
      },
      {
        name: "hoverEffect",
        type: "enum",
        required: !1,
        default: "circle-move",
        allowed: ["circle-move", "pointer-blur", "pointer-overlay"],
      },
      { name: "hoverItemMove", type: "boolean", required: !1, default: !1 },
      { name: "defaultCursor", type: "boolean", required: !1, default: !1 },
    ];
    class se {
      defaultOptions = {};
      constructor(e) {
        this.defaultOptions = this.generateDefault();
        for (let t in e)
          this.isValid(t, e[t]) && (this.defaultOptions[t] = e[t]);
        return this.defaultOptions;
      }
      generateDefault() {
        const e = X("name", ae);
        let t = {};
        for (let r of e) t[r] = this.getOptionByKey(r).default;
        return t;
      }
      isValid(e, t) {
        if (!X("name", ae).includes(e))
          return console.error(`${e} is not a valid option`), !1;
        const r = this.getOptionByKey(e);
        let n = !1;
        switch (r.type) {
          case "number":
            n = Number.isInteger(t);
            break;
          case "enum":
            n = r.allowed.includes(t);
            break;
          case "boolean":
            n = "boolean" == typeof t;
            break;
          default:
            n = !1;
        }
        return n || console.error(`${t} is not a valid value for ${e}`), n;
      }
      getOptionByKey(e) {
        return oe(ie("name", e), ae);
      }
    }
    r(942);
    const ue = (e) => {
      if ((console.log(e), (e = new se(e)), !Modernizr.touchevents)) {
        if ("disable" != e.outerStyle) {
          var t = document.createElement("div");
          t.setAttribute("id", "magicMouseCursor"),
            document.body.appendChild(t);
          var r = document.getElementById("magicMouseCursor");
        }
        if (!e.defaultCursor) {
          document.body.style.cursor = "none";
          var n = document.createElement("div");
          n.setAttribute("id", "magicPointer"), document.body.appendChild(n);
          var o = document.getElementById("magicPointer");
        }
        if (r) {
          (r.style.width = e.outerWidth + "px"),
            (r.style.height = e.outerHeight + "px");
          var i = e.outerWidth,
            a = e.outerHeight,
            s = e.outerWidth,
            u = e.outerHeight;
        }
        var c = 0,
          f = 0,
          l = 0,
          d = 0,
          p = !1;
        document.addEventListener("mousemove", function (e) {
          (l = e.clientX),
            (d = e.clientY),
            setTimeout(() => {
              p || ((c = e.clientX - i / 2), (f = e.clientY - a / 2));
            }, 50);
        }),
          document.querySelectorAll(".magic-hover").forEach((t, r) => {
            t.addEventListener("mouseenter", (r) => {
              switch (e.hoverEffect) {
                case "circle-move":
                  y(t), e.hoverItemMove && g(r, t);
                  break;
                case "pointer-blur":
                  v(t, "pointer-blur");
                  break;
                case "pointer-overlay":
                  v(t, "pointer-overlay");
              }
            }),
              t.addEventListener("mouseleave", (r) => {
                switch (
                  ((t.style.transform = "translate3d(0,0,0)"), e.hoverEffect)
                ) {
                  case "circle-move":
                    m();
                    break;
                  case "pointer-blur":
                    A("pointer-blur");
                    break;
                  case "pointer-overlay":
                    A("pointer-overlay");
                }
              });
          }),
          document.querySelectorAll(".no-cursor").forEach((e, t) => {
            e.addEventListener("mouseenter", (e) => {
              (r.style.opacity = 0),
                (o.style.opacity = 0),
                (document.body.style.cursor = "auto");
            }),
              e.addEventListener("mouseleave", (e) => {
                (r.style.opacity = 1),
                  (o.style.opacity = 1),
                  (document.body.style.cursor = "none");
              });
          });
        var h = () => {
          r &&
            ((r.style.transform = "matrix(1, 0, 0, 1, " + c + ", " + f + ")"),
            (r.style.width = i + "px"),
            (r.style.height = a + "px")),
            o &&
              (o.style.transform =
                "matrix(1, 0, 0, 1, " +
                l +
                ", " +
                d +
                ") translate3d(-50%, -50%, 0)"),
            requestAnimationFrame(h);
        };
        requestAnimationFrame(h);
        const y = (e) => {
            if (((p = !0), r)) {
              (r.style.transition =
                "transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s"),
                r.classList.add("is-hover");
              var t = event.currentTarget.getBoundingClientRect();
              e.classList.contains("magic-hover__square")
                ? (r.classList.add("cursor-square"),
                  (c = t.left),
                  (f = t.top),
                  (i = t.width),
                  (a = t.height))
                : ((c = t.left), (f = t.top), (i = t.width), (a = t.height));
            }
            o && o.classList.add("is-hover");
          },
          m = () => {
            (p = !1),
              r &&
                ((i = s),
                (a = u),
                (r.style.transition =
                  "transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s"),
                r.classList.remove("cursor-square"),
                r.classList.remove("is-hover")),
              o && o.classList.remove("is-hover");
          },
          v = (e, t) => {
            o && o.classList.add(t);
          },
          A = (e) => {
            o && o.classList.remove(e);
          },
          g = (e, t) => {
            e.clientX,
              e.clientY,
              t.addEventListener("mousemove", (e) => {
                t.style.transform =
                  "matrix(1,0,0,1," +
                  (e.offsetX - e.target.offsetWidth / 2) / 2 +
                  ", " +
                  (e.offsetY - e.target.offsetHeight / 2) / 2 +
                  ")";
              });
          };
      }
    };
  })(),
    (magicMouse = n.magicMouse);
})();
