!(function(t) {
  'function' == typeof define && define.amd ? define(t) : t();
})(function() {
  'use strict';
  !(function() {
    function t(t) {
      return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, 'default')
        ? t.default
        : t;
    }
    function n(t, n) {
      return t((n = { exports: {} }), n.exports), n.exports;
    }
    var e = n(function(t) {
        var n = (t.exports =
          'undefined' != typeof window && window.Math == Math
            ? window
            : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')());
        'number' == typeof __g && (__g = n);
      }),
      r = n(function(t) {
        var n = (t.exports = { version: '2.6.5' });
        'number' == typeof __e && (__e = n);
      }),
      i = (r.version,
      function(t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      }),
      o = function(t) {
        if (!i(t)) throw TypeError(t + ' is not an object!');
        return t;
      },
      u = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      },
      c = !u(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            }
          }).a
        );
      }),
      f = e.document,
      a = i(f) && i(f.createElement),
      s = function(t) {
        return a ? f.createElement(t) : {};
      },
      l =
        !c &&
        !u(function() {
          return (
            7 !=
            Object.defineProperty(s('div'), 'a', {
              get: function() {
                return 7;
              }
            }).a
          );
        }),
      h = function(t, n) {
        if (!i(t)) return t;
        var e, r;
        if (n && 'function' == typeof (e = t.toString) && !i((r = e.call(t))))
          return r;
        if ('function' == typeof (e = t.valueOf) && !i((r = e.call(t))))
          return r;
        if (!n && 'function' == typeof (e = t.toString) && !i((r = e.call(t))))
          return r;
        throw TypeError("Can't convert object to primitive value");
      },
      p = Object.defineProperty,
      v = {
        f: c
          ? Object.defineProperty
          : function(t, n, e) {
              if ((o(t), (n = h(n, !0)), o(e), l))
                try {
                  return p(t, n, e);
                } catch (t) {}
              if ('get' in e || 'set' in e)
                throw TypeError('Accessors not supported!');
              return 'value' in e && (t[n] = e.value), t;
            }
      },
      d = function(t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      },
      g = c
        ? function(t, n, e) {
            return v.f(t, n, d(1, e));
          }
        : function(t, n, e) {
            return (t[n] = e), t;
          },
      y = {}.hasOwnProperty,
      _ = function(t, n) {
        return y.call(t, n);
      },
      S = 0,
      w = Math.random(),
      b = function(t) {
        return 'Symbol('.concat(
          void 0 === t ? '' : t,
          ')_',
          (++S + w).toString(36)
        );
      },
      m = n(function(t) {
        var n = e['__core-js_shared__'] || (e['__core-js_shared__'] = {});
        (t.exports = function(t, e) {
          return n[t] || (n[t] = void 0 !== e ? e : {});
        })('versions', []).push({
          version: r.version,
          mode: 'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
        });
      }),
      M = m('native-function-to-string', Function.toString),
      O = n(function(t) {
        var n = b('src'),
          i = ('' + M).split('toString');
        (r.inspectSource = function(t) {
          return M.call(t);
        }),
          (t.exports = function(t, r, o, u) {
            var c = 'function' == typeof o;
            c && (_(o, 'name') || g(o, 'name', r)),
              t[r] !== o &&
                (c &&
                  (_(o, n) || g(o, n, t[r] ? '' + t[r] : i.join(String(r)))),
                t === e
                  ? (t[r] = o)
                  : u
                  ? t[r]
                    ? (t[r] = o)
                    : g(t, r, o)
                  : (delete t[r], g(t, r, o)));
          })(Function.prototype, 'toString', function() {
            return ('function' == typeof this && this[n]) || M.call(this);
          });
      }),
      E = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      },
      P = function(t, n, e) {
        if ((E(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function(e) {
              return t.call(n, e);
            };
          case 2:
            return function(e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function(e, r, i) {
              return t.call(n, e, r, i);
            };
        }
        return function() {
          return t.apply(n, arguments);
        };
      },
      A = function(t, n, i) {
        var o,
          u,
          c,
          f,
          a = t & A.F,
          s = t & A.G,
          l = t & A.S,
          h = t & A.P,
          p = t & A.B,
          v = s ? e : l ? e[n] || (e[n] = {}) : (e[n] || {}).prototype,
          d = s ? r : r[n] || (r[n] = {}),
          y = d.prototype || (d.prototype = {});
        for (o in (s && (i = n), i))
          (c = ((u = !a && v && void 0 !== v[o]) ? v : i)[o]),
            (f =
              p && u
                ? P(c, e)
                : h && 'function' == typeof c
                ? P(Function.call, c)
                : c),
            v && O(v, o, c, t & A.U),
            d[o] != c && g(d, o, f),
            h && y[o] != c && (y[o] = c);
      };
    (e.core = r),
      (A.F = 1),
      (A.G = 2),
      (A.S = 4),
      (A.P = 8),
      (A.B = 16),
      (A.W = 32),
      (A.U = 64),
      (A.R = 128);
    var j = A,
      x = {}.toString,
      F = function(t) {
        return x.call(t).slice(8, -1);
      },
      R = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == F(t) ? t.split('') : Object(t);
          },
      T = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      },
      k = function(t) {
        return Object(T(t));
      },
      I = Math.ceil,
      L = Math.floor,
      C = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? L : I)(t);
      },
      N = Math.min,
      W = function(t) {
        return t > 0 ? N(C(t), 9007199254740991) : 0;
      },
      D =
        Array.isArray ||
        function(t) {
          return 'Array' == F(t);
        },
      U = n(function(t) {
        var n = m('wks'),
          r = e.Symbol,
          i = 'function' == typeof r;
        (t.exports = function(t) {
          return n[t] || (n[t] = (i && r[t]) || (i ? r : b)('Symbol.' + t));
        }).store = n;
      }),
      B = U('species'),
      V = function(t, n) {
        return new ((function(t) {
          var n;
          return (
            D(t) &&
              ('function' != typeof (n = t.constructor) ||
                (n !== Array && !D(n.prototype)) ||
                (n = void 0),
              i(n) && null === (n = n[B]) && (n = void 0)),
            void 0 === n ? Array : n
          );
        })(t))(n);
      },
      G = function(t, n) {
        var e = 1 == t,
          r = 2 == t,
          i = 3 == t,
          o = 4 == t,
          u = 6 == t,
          c = 5 == t || u,
          f = n || V;
        return function(n, a, s) {
          for (
            var l,
              h,
              p = k(n),
              v = R(p),
              d = P(a, s, 3),
              g = W(v.length),
              y = 0,
              _ = e ? f(n, g) : r ? f(n, 0) : void 0;
            g > y;
            y++
          )
            if ((c || y in v) && ((h = d((l = v[y]), y, p)), t))
              if (e) _[y] = h;
              else if (h)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return l;
                  case 6:
                    return y;
                  case 2:
                    _.push(l);
                }
              else if (o) return !1;
          return u ? -1 : i || o ? o : _;
        };
      },
      z = U('unscopables'),
      q = Array.prototype;
    null == q[z] && g(q, z, {});
    var K = function(t) {
        q[z][t] = !0;
      },
      H = G(5),
      Y = !0;
    'find' in [] &&
      Array(1).find(function() {
        Y = !1;
      }),
      j(j.P + j.F * Y, 'Array', {
        find: function(t) {
          return H(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      K('find');
    r.Array.find;
    var X = G(6),
      $ = !0;
    'findIndex' in [] &&
      Array(1).findIndex(function() {
        $ = !1;
      }),
      j(j.P + j.F * $, 'Array', {
        findIndex: function(t) {
          return X(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      K('findIndex');
    r.Array.findIndex;
    var J = Math.max,
      Z = Math.min,
      Q = function(t, n) {
        return (t = C(t)) < 0 ? J(t + n, 0) : Z(t, n);
      },
      tt = function(t) {
        for (
          var n = k(this),
            e = W(n.length),
            r = arguments.length,
            i = Q(r > 1 ? arguments[1] : void 0, e),
            o = r > 2 ? arguments[2] : void 0,
            u = void 0 === o ? e : Q(o, e);
          u > i;

        )
          n[i++] = t;
        return n;
      };
    j(j.P, 'Array', { fill: tt }), K('fill');
    r.Array.fill;
    var nt =
      [].copyWithin ||
      function(t, n) {
        var e = k(this),
          r = W(e.length),
          i = Q(t, r),
          o = Q(n, r),
          u = arguments.length > 2 ? arguments[2] : void 0,
          c = Math.min((void 0 === u ? r : Q(u, r)) - o, r - i),
          f = 1;
        for (
          o < i && i < o + c && ((f = -1), (o += c - 1), (i += c - 1));
          c-- > 0;

        )
          o in e ? (e[i] = e[o]) : delete e[i], (i += f), (o += f);
        return e;
      };
    j(j.P, 'Array', { copyWithin: nt }), K('copyWithin');
    r.Array.copyWithin;
    var et = function(t) {
        return function(n, e) {
          var r,
            i,
            o = String(T(n)),
            u = C(e),
            c = o.length;
          return u < 0 || u >= c
            ? t
              ? ''
              : void 0
            : (r = o.charCodeAt(u)) < 55296 ||
              r > 56319 ||
              u + 1 === c ||
              (i = o.charCodeAt(u + 1)) < 56320 ||
              i > 57343
            ? t
              ? o.charAt(u)
              : r
            : t
            ? o.slice(u, u + 2)
            : i - 56320 + ((r - 55296) << 10) + 65536;
        };
      },
      rt = {},
      it = function(t) {
        return R(T(t));
      },
      ot = function(t) {
        return function(n, e, r) {
          var i,
            o = it(n),
            u = W(o.length),
            c = Q(r, u);
          if (t && e != e) {
            for (; u > c; ) if ((i = o[c++]) != i) return !0;
          } else
            for (; u > c; c++)
              if ((t || c in o) && o[c] === e) return t || c || 0;
          return !t && -1;
        };
      },
      ut = m('keys'),
      ct = function(t) {
        return ut[t] || (ut[t] = b(t));
      },
      ft = ot(!1),
      at = ct('IE_PROTO'),
      st = function(t, n) {
        var e,
          r = it(t),
          i = 0,
          o = [];
        for (e in r) e != at && _(r, e) && o.push(e);
        for (; n.length > i; ) _(r, (e = n[i++])) && (~ft(o, e) || o.push(e));
        return o;
      },
      lt = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      ),
      ht =
        Object.keys ||
        function(t) {
          return st(t, lt);
        },
      pt = c
        ? Object.defineProperties
        : function(t, n) {
            o(t);
            for (var e, r = ht(n), i = r.length, u = 0; i > u; )
              v.f(t, (e = r[u++]), n[e]);
            return t;
          },
      vt = e.document,
      dt = vt && vt.documentElement,
      gt = ct('IE_PROTO'),
      yt = function() {},
      _t = function() {
        var t,
          n = s('iframe'),
          e = lt.length;
        for (
          n.style.display = 'none',
            dt.appendChild(n),
            n.src = 'javascript:',
            (t = n.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            _t = t.F;
          e--;

        )
          delete _t.prototype[lt[e]];
        return _t();
      },
      St =
        Object.create ||
        function(t, n) {
          var e;
          return (
            null !== t
              ? ((yt.prototype = o(t)),
                (e = new yt()),
                (yt.prototype = null),
                (e[gt] = t))
              : (e = _t()),
            void 0 === n ? e : pt(e, n)
          );
        },
      wt = v.f,
      bt = U('toStringTag'),
      mt = function(t, n, e) {
        t &&
          !_((t = e ? t : t.prototype), bt) &&
          wt(t, bt, { configurable: !0, value: n });
      },
      Mt = {};
    g(Mt, U('iterator'), function() {
      return this;
    });
    var Ot = function(t, n, e) {
        (t.prototype = St(Mt, { next: d(1, e) })), mt(t, n + ' Iterator');
      },
      Et = ct('IE_PROTO'),
      Pt = Object.prototype,
      At =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = k(t)),
            _(t, Et)
              ? t[Et]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Pt
              : null
          );
        },
      jt = U('iterator'),
      xt = !([].keys && 'next' in [].keys()),
      Ft = function() {
        return this;
      },
      Rt = function(t, n, e, r, i, o, u) {
        Ot(e, n, r);
        var c,
          f,
          a,
          s = function(t) {
            if (!xt && t in v) return v[t];
            switch (t) {
              case 'keys':
              case 'values':
                return function() {
                  return new e(this, t);
                };
            }
            return function() {
              return new e(this, t);
            };
          },
          l = n + ' Iterator',
          h = 'values' == i,
          p = !1,
          v = t.prototype,
          d = v[jt] || v['@@iterator'] || (i && v[i]),
          y = d || s(i),
          _ = i ? (h ? s('entries') : y) : void 0,
          S = ('Array' == n && v.entries) || d;
        if (
          (S &&
            (a = At(S.call(new t()))) !== Object.prototype &&
            a.next &&
            (mt(a, l, !0), 'function' != typeof a[jt] && g(a, jt, Ft)),
          h &&
            d &&
            'values' !== d.name &&
            ((p = !0),
            (y = function() {
              return d.call(this);
            })),
          (xt || p || !v[jt]) && g(v, jt, y),
          (rt[n] = y),
          (rt[l] = Ft),
          i)
        )
          if (
            ((c = {
              values: h ? y : s('values'),
              keys: o ? y : s('keys'),
              entries: _
            }),
            u)
          )
            for (f in c) f in v || O(v, f, c[f]);
          else j(j.P + j.F * (xt || p), n, c);
        return c;
      },
      Tt = et(!0);
    Rt(
      String,
      'String',
      function(t) {
        (this._t = String(t)), (this._i = 0);
      },
      function() {
        var t,
          n = this._t,
          e = this._i;
        return e >= n.length
          ? { value: void 0, done: !0 }
          : ((t = Tt(n, e)), (this._i += t.length), { value: t, done: !1 });
      }
    );
    var kt = function(t, n, e, r) {
        try {
          return r ? n(o(e)[0], e[1]) : n(e);
        } catch (n) {
          var i = t.return;
          throw (void 0 !== i && o(i.call(t)), n);
        }
      },
      It = U('iterator'),
      Lt = Array.prototype,
      Ct = function(t) {
        return void 0 !== t && (rt.Array === t || Lt[It] === t);
      },
      Nt = function(t, n, e) {
        n in t ? v.f(t, n, d(0, e)) : (t[n] = e);
      },
      Wt = U('toStringTag'),
      Dt =
        'Arguments' ==
        F(
          (function() {
            return arguments;
          })()
        ),
      Ut = function(t) {
        var n, e, r;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (e = (function(t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), Wt))
          ? e
          : Dt
          ? F(n)
          : 'Object' == (r = F(n)) && 'function' == typeof n.callee
          ? 'Arguments'
          : r;
      },
      Bt = U('iterator'),
      Vt = (r.getIteratorMethod = function(t) {
        if (null != t) return t[Bt] || t['@@iterator'] || rt[Ut(t)];
      }),
      Gt = U('iterator'),
      zt = !1;
    try {
      [7][Gt]().return = function() {
        zt = !0;
      };
    } catch (t) {}
    var qt = function(t, n) {
      if (!n && !zt) return !1;
      var e = !1;
      try {
        var r = [7],
          i = r[Gt]();
        (i.next = function() {
          return { done: (e = !0) };
        }),
          (r[Gt] = function() {
            return i;
          }),
          t(r);
      } catch (t) {}
      return e;
    };
    j(j.S + j.F * !qt(function(t) {}), 'Array', {
      from: function(t) {
        var n,
          e,
          r,
          i,
          o = k(t),
          u = 'function' == typeof this ? this : Array,
          c = arguments.length,
          f = c > 1 ? arguments[1] : void 0,
          a = void 0 !== f,
          s = 0,
          l = Vt(o);
        if (
          (a && (f = P(f, c > 2 ? arguments[2] : void 0, 2)),
          null == l || (u == Array && Ct(l)))
        )
          for (e = new u((n = W(o.length))); n > s; s++)
            Nt(e, s, a ? f(o[s], s) : o[s]);
        else
          for (i = l.call(o), e = new u(); !(r = i.next()).done; s++)
            Nt(e, s, a ? kt(i, f, [r.value, s], !0) : r.value);
        return (e.length = s), e;
      }
    });
    r.Array.from;
    j(
      j.S +
        j.F *
          u(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t);
          }),
      'Array',
      {
        of: function() {
          for (
            var t = 0,
              n = arguments.length,
              e = new ('function' == typeof this ? this : Array)(n);
            n > t;

          )
            Nt(e, t, arguments[t++]);
          return (e.length = n), e;
        }
      }
    );
    r.Array.of;
    var Kt = v.f,
      Ht = Function.prototype,
      Yt = /^\s*function ([^ (]*)/;
    'name' in Ht ||
      (c &&
        Kt(Ht, 'name', {
          configurable: !0,
          get: function() {
            try {
              return ('' + this).match(Yt)[1];
            } catch (t) {
              return '';
            }
          }
        })),
      j(j.S, 'Math', {
        clz32: function(t) {
          return (t >>>= 0)
            ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E)
            : 32;
        }
      });
    r.Math.clz32;
    var Xt = Math.imul;
    j(
      j.S +
        j.F *
          u(function() {
            return -5 != Xt(4294967295, 5) || 2 != Xt.length;
          }),
      'Math',
      {
        imul: function(t, n) {
          var e = +t,
            r = +n,
            i = 65535 & e,
            o = 65535 & r;
          return (
            0 |
            (i * o +
              ((((65535 & (e >>> 16)) * o + i * (65535 & (r >>> 16))) << 16) >>>
                0))
          );
        }
      }
    );
    r.Math.imul;
    var $t =
      Math.sign ||
      function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
    j(j.S, 'Math', { sign: $t });
    r.Math.sign;
    j(j.S, 'Math', {
      log10: function(t) {
        return Math.log(t) * Math.LOG10E;
      }
    });
    r.Math.log10;
    j(j.S, 'Math', {
      log2: function(t) {
        return Math.log(t) / Math.LN2;
      }
    });
    r.Math.log2;
    var Jt =
      Math.log1p ||
      function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
      };
    j(j.S, 'Math', { log1p: Jt });
    r.Math.log1p;
    var Zt = Math.expm1,
      Qt =
        !Zt ||
        Zt(10) > 22025.465794806718 ||
        Zt(10) < 22025.465794806718 ||
        -2e-17 != Zt(-2e-17)
          ? function(t) {
              return 0 == (t = +t)
                ? t
                : t > -1e-6 && t < 1e-6
                ? t + (t * t) / 2
                : Math.exp(t) - 1;
            }
          : Zt;
    j(j.S + j.F * (Qt != Math.expm1), 'Math', { expm1: Qt });
    r.Math.expm1;
    var tn = Math.exp;
    j(j.S, 'Math', {
      cosh: function(t) {
        return (tn((t = +t)) + tn(-t)) / 2;
      }
    });
    r.Math.cosh;
    var nn = Math.exp;
    j(
      j.S +
        j.F *
          u(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      'Math',
      {
        sinh: function(t) {
          return Math.abs((t = +t)) < 1
            ? (Qt(t) - Qt(-t)) / 2
            : (nn(t - 1) - nn(-t - 1)) * (Math.E / 2);
        }
      }
    );
    r.Math.sinh;
    var en = Math.exp;
    j(j.S, 'Math', {
      tanh: function(t) {
        var n = Qt((t = +t)),
          e = Qt(-t);
        return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (en(t) + en(-t));
      }
    });
    r.Math.tanh;
    var rn = Math.sqrt,
      on = Math.acosh;
    j(
      j.S +
        j.F *
          !(
            on &&
            710 == Math.floor(on(Number.MAX_VALUE)) &&
            on(1 / 0) == 1 / 0
          ),
      'Math',
      {
        acosh: function(t) {
          return (t = +t) < 1
            ? NaN
            : t > 94906265.62425156
            ? Math.log(t) + Math.LN2
            : Jt(t - 1 + rn(t - 1) * rn(t + 1));
        }
      }
    );
    r.Math.acosh;
    var un = Math.asinh;
    j(j.S + j.F * !(un && 1 / un(0) > 0), 'Math', {
      asinh: function t(n) {
        return isFinite((n = +n)) && 0 != n
          ? n < 0
            ? -t(-n)
            : Math.log(n + Math.sqrt(n * n + 1))
          : n;
      }
    });
    r.Math.asinh;
    var cn = Math.atanh;
    j(j.S + j.F * !(cn && 1 / cn(-0) < 0), 'Math', {
      atanh: function(t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
      }
    });
    r.Math.atanh;
    var fn = Math.abs;
    j(j.S, 'Math', {
      hypot: function(t, n) {
        for (var e, r, i = 0, o = 0, u = arguments.length, c = 0; o < u; )
          c < (e = fn(arguments[o++]))
            ? ((i = i * (r = c / e) * r + 1), (c = e))
            : (i += e > 0 ? (r = e / c) * r : e);
        return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i);
      }
    });
    r.Math.hypot;
    j(j.S, 'Math', {
      trunc: function(t) {
        return (t > 0 ? Math.floor : Math.ceil)(t);
      }
    });
    r.Math.trunc;
    var an = Math.pow,
      sn = an(2, -52),
      ln = an(2, -23),
      hn = an(2, 127) * (2 - ln),
      pn = an(2, -126),
      vn =
        Math.fround ||
        function(t) {
          var n,
            e,
            r = Math.abs(t),
            i = $t(t);
          return r < pn
            ? i * (r / pn / ln + 1 / sn - 1 / sn) * pn * ln
            : (e = (n = (1 + ln / sn) * r) - (n - r)) > hn || e != e
            ? i * (1 / 0)
            : i * e;
        };
    j(j.S, 'Math', { fround: vn });
    r.Math.fround;
    j(j.S, 'Math', {
      cbrt: function(t) {
        return $t((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
      }
    });
    r.Math.cbrt;
    j(j.S, 'Number', { EPSILON: Math.pow(2, -52) });
    var dn = e.isFinite;
    j(j.S, 'Number', {
      isFinite: function(t) {
        return 'number' == typeof t && dn(t);
      }
    });
    r.Number.isFinite;
    var gn = Math.floor,
      yn = function(t) {
        return !i(t) && isFinite(t) && gn(t) === t;
      };
    j(j.S, 'Number', { isInteger: yn });
    r.Number.isInteger;
    j(j.S, 'Number', {
      isNaN: function(t) {
        return t != t;
      }
    });
    r.Number.isNaN;
    var _n = Math.abs;
    j(j.S, 'Number', {
      isSafeInteger: function(t) {
        return yn(t) && _n(t) <= 9007199254740991;
      }
    });
    r.Number.isSafeInteger;
    j(j.S, 'Number', { MAX_SAFE_INTEGER: 9007199254740991 }),
      j(j.S, 'Number', { MIN_SAFE_INTEGER: -9007199254740991 });
    var Sn = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
      wn = '[' + Sn + ']',
      bn = RegExp('^' + wn + wn + '*'),
      mn = RegExp(wn + wn + '*$'),
      Mn = function(t, n, e) {
        var r = {},
          i = u(function() {
            return !!Sn[t]() || '​' != '​'[t]();
          }),
          o = (r[t] = i ? n(On) : Sn[t]);
        e && (r[e] = o), j(j.P + j.F * i, 'String', r);
      },
      On = (Mn.trim = function(t, n) {
        return (
          (t = String(T(t))),
          1 & n && (t = t.replace(bn, '')),
          2 & n && (t = t.replace(mn, '')),
          t
        );
      }),
      En = Mn,
      Pn = e.parseFloat,
      An = En.trim,
      jn =
        1 / Pn(Sn + '-0') != -1 / 0
          ? function(t) {
              var n = An(String(t), 3),
                e = Pn(n);
              return 0 === e && '-' == n.charAt(0) ? -0 : e;
            }
          : Pn;
    j(j.G + j.F * (parseFloat != jn), { parseFloat: jn });
    r.parseFloat;
    var xn = e.parseInt,
      Fn = En.trim,
      Rn = /^[-+]?0[xX]/,
      Tn =
        8 !== xn(Sn + '08') || 22 !== xn(Sn + '0x16')
          ? function(t, n) {
              var e = Fn(String(t), 3);
              return xn(e, n >>> 0 || (Rn.test(e) ? 16 : 10));
            }
          : xn;
    j(j.G + j.F * (parseInt != Tn), { parseInt: Tn });
    r.parseInt;
    var kn = { f: Object.getOwnPropertySymbols },
      In = { f: {}.propertyIsEnumerable },
      Ln = Object.assign,
      Cn =
        !Ln ||
        u(function() {
          var t = {},
            n = {},
            e = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[e] = 7),
            r.split('').forEach(function(t) {
              n[t] = t;
            }),
            7 != Ln({}, t)[e] || Object.keys(Ln({}, n)).join('') != r
          );
        })
          ? function(t, n) {
              for (
                var e = k(t), r = arguments.length, i = 1, o = kn.f, u = In.f;
                r > i;

              )
                for (
                  var c,
                    f = R(arguments[i++]),
                    a = o ? ht(f).concat(o(f)) : ht(f),
                    s = a.length,
                    l = 0;
                  s > l;

                )
                  u.call(f, (c = a[l++])) && (e[c] = f[c]);
              return e;
            }
          : Ln;
    j(j.S + j.F, 'Object', { assign: Cn });
    r.Object.assign;
    var Nn =
      Object.is ||
      function(t, n) {
        return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
      };
    j(j.S, 'Object', { is: Nn });
    r.Object.is;
    var Wn = Object.getOwnPropertyDescriptor,
      Dn = {
        f: c
          ? Wn
          : function(t, n) {
              if (((t = it(t)), (n = h(n, !0)), l))
                try {
                  return Wn(t, n);
                } catch (t) {}
              if (_(t, n)) return d(!In.f.call(t, n), t[n]);
            }
      },
      Un = function(t, n) {
        if ((o(t), !i(n) && null !== n))
          throw TypeError(n + ": can't set as prototype!");
      },
      Bn = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, n, e) {
                try {
                  (e = P(
                    Function.call,
                    Dn.f(Object.prototype, '__proto__').set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array));
                } catch (t) {
                  n = !0;
                }
                return function(t, r) {
                  return Un(t, r), n ? (t.__proto__ = r) : e(t, r), t;
                };
              })({}, !1)
            : void 0),
        check: Un
      };
    j(j.S, 'Object', { setPrototypeOf: Bn.set });
    r.Object.setPrototypeOf;
    var Vn = function() {
      var t = o(this),
        n = '';
      return (
        t.global && (n += 'g'),
        t.ignoreCase && (n += 'i'),
        t.multiline && (n += 'm'),
        t.unicode && (n += 'u'),
        t.sticky && (n += 'y'),
        n
      );
    };
    c &&
      'g' != /./g.flags &&
      v.f(RegExp.prototype, 'flags', { configurable: !0, get: Vn });
    var Gn = Bn.set,
      zn = function(t, n, e) {
        var r,
          o = n.constructor;
        return (
          o !== e &&
            'function' == typeof o &&
            (r = o.prototype) !== e.prototype &&
            i(r) &&
            Gn &&
            Gn(t, r),
          t
        );
      },
      qn = lt.concat('length', 'prototype'),
      Kn = {
        f:
          Object.getOwnPropertyNames ||
          function(t) {
            return st(t, qn);
          }
      },
      Hn = U('match'),
      Yn = function(t) {
        var n;
        return i(t) && (void 0 !== (n = t[Hn]) ? !!n : 'RegExp' == F(t));
      },
      Xn = U('species'),
      $n = function(t) {
        var n = e[t];
        c &&
          n &&
          !n[Xn] &&
          v.f(n, Xn, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
      },
      Jn = v.f,
      Zn = Kn.f,
      Qn = e.RegExp,
      te = Qn,
      ne = Qn.prototype,
      ee = /a/g,
      re = /a/g,
      ie = new Qn(ee) !== ee;
    if (
      c &&
      (!ie ||
        u(function() {
          return (
            (re[U('match')] = !1),
            Qn(ee) != ee || Qn(re) == re || '/a/i' != Qn(ee, 'i')
          );
        }))
    ) {
      Qn = function(t, n) {
        var e = this instanceof Qn,
          r = Yn(t),
          i = void 0 === n;
        return !e && r && t.constructor === Qn && i
          ? t
          : zn(
              ie
                ? new te(r && !i ? t.source : t, n)
                : te(
                    (r = t instanceof Qn) ? t.source : t,
                    r && i ? Vn.call(t) : n
                  ),
              e ? this : ne,
              Qn
            );
      };
      for (
        var oe = function(t) {
            (t in Qn) ||
              Jn(Qn, t, {
                configurable: !0,
                get: function() {
                  return te[t];
                },
                set: function(n) {
                  te[t] = n;
                }
              });
          },
          ue = Zn(te),
          ce = 0;
        ue.length > ce;

      )
        oe(ue[ce++]);
      (ne.constructor = Qn), (Qn.prototype = ne), O(e, 'RegExp', Qn);
    }
    $n('RegExp');
    var fe = et(!1);
    j(j.P, 'String', {
      codePointAt: function(t) {
        return fe(this, t);
      }
    });
    r.String.codePointAt;
    var ae = function(t, n, e) {
        if (Yn(n)) throw TypeError('String#' + e + " doesn't accept regex!");
        return String(T(t));
      },
      se = U('match'),
      le = function(t) {
        var n = /./;
        try {
          '/./'[t](n);
        } catch (e) {
          try {
            return (n[se] = !1), !'/./'[t](n);
          } catch (t) {}
        }
        return !0;
      };
    j(j.P + j.F * le('includes'), 'String', {
      includes: function(t) {
        return !!~ae(this, t, 'includes').indexOf(
          t,
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    });
    r.String.includes;
    var he = ''.endsWith;
    j(j.P + j.F * le('endsWith'), 'String', {
      endsWith: function(t) {
        var n = ae(this, t, 'endsWith'),
          e = arguments.length > 1 ? arguments[1] : void 0,
          r = W(n.length),
          i = void 0 === e ? r : Math.min(W(e), r),
          o = String(t);
        return he ? he.call(n, o, i) : n.slice(i - o.length, i) === o;
      }
    });
    r.String.endsWith;
    var pe = function(t) {
      var n = String(T(this)),
        e = '',
        r = C(t);
      if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
      for (; r > 0; (r >>>= 1) && (n += n)) 1 & r && (e += n);
      return e;
    };
    j(j.P, 'String', { repeat: pe });
    r.String.repeat;
    var ve = ''.startsWith;
    j(j.P + j.F * le('startsWith'), 'String', {
      startsWith: function(t) {
        var n = ae(this, t, 'startsWith'),
          e = W(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)
          ),
          r = String(t);
        return ve ? ve.call(n, r, e) : n.slice(e, e + r.length) === r;
      }
    });
    r.String.startsWith;
    var de = /"/g,
      ge = function(t, n, e, r) {
        var i = String(T(t)),
          o = '<' + n;
        return (
          '' !== e &&
            (o += ' ' + e + '="' + String(r).replace(de, '&quot;') + '"'),
          o + '>' + i + '</' + n + '>'
        );
      },
      ye = function(t, n) {
        var e = {};
        (e[t] = n(ge)),
          j(
            j.P +
              j.F *
                u(function() {
                  var n = ''[t]('"');
                  return n !== n.toLowerCase() || n.split('"').length > 3;
                }),
            'String',
            e
          );
      };
    ye('anchor', function(t) {
      return function(n) {
        return t(this, 'a', 'name', n);
      };
    });
    r.String.anchor;
    ye('big', function(t) {
      return function() {
        return t(this, 'big', '', '');
      };
    });
    r.String.big;
    ye('blink', function(t) {
      return function() {
        return t(this, 'blink', '', '');
      };
    });
    r.String.blink;
    ye('bold', function(t) {
      return function() {
        return t(this, 'b', '', '');
      };
    });
    r.String.bold;
    ye('fixed', function(t) {
      return function() {
        return t(this, 'tt', '', '');
      };
    });
    r.String.fixed;
    ye('fontcolor', function(t) {
      return function(n) {
        return t(this, 'font', 'color', n);
      };
    });
    r.String.fontcolor;
    ye('fontsize', function(t) {
      return function(n) {
        return t(this, 'font', 'size', n);
      };
    });
    r.String.fontsize;
    ye('italics', function(t) {
      return function() {
        return t(this, 'i', '', '');
      };
    });
    r.String.italics;
    ye('link', function(t) {
      return function(n) {
        return t(this, 'a', 'href', n);
      };
    });
    r.String.link;
    ye('small', function(t) {
      return function() {
        return t(this, 'small', '', '');
      };
    });
    r.String.small;
    ye('strike', function(t) {
      return function() {
        return t(this, 'strike', '', '');
      };
    });
    r.String.strike;
    ye('sub', function(t) {
      return function() {
        return t(this, 'sub', '', '');
      };
    });
    r.String.sub;
    ye('sup', function(t) {
      return function() {
        return t(this, 'sup', '', '');
      };
    });
    r.String.sup;
    var _e = String.fromCharCode,
      Se = String.fromCodePoint;
    j(j.S + j.F * (!!Se && 1 != Se.length), 'String', {
      fromCodePoint: function(t) {
        for (var n, e = [], r = arguments.length, i = 0; r > i; ) {
          if (((n = +arguments[i++]), Q(n, 1114111) !== n))
            throw RangeError(n + ' is not a valid code point');
          e.push(
            n < 65536
              ? _e(n)
              : _e(55296 + ((n -= 65536) >> 10), (n % 1024) + 56320)
          );
        }
        return e.join('');
      }
    });
    r.String.fromCodePoint;
    j(j.S, 'String', {
      raw: function(t) {
        for (
          var n = it(t.raw),
            e = W(n.length),
            r = arguments.length,
            i = [],
            o = 0;
          e > o;

        )
          i.push(String(n[o++])), o < r && i.push(String(arguments[o]));
        return i.join('');
      }
    });
    r.String.raw;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var we = {};
    (we[U('toStringTag')] = 'z'),
      we + '' != '[object z]' &&
        O(
          Object.prototype,
          'toString',
          function() {
            return '[object ' + Ut(this) + ']';
          },
          !0
        );
    var be = function(t, n) {
        return { value: n, done: !!t };
      },
      me = Rt(
        Array,
        'Array',
        function(t, n) {
          (this._t = it(t)), (this._i = 0), (this._k = n);
        },
        function() {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), be(1))
            : be(0, 'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]);
        },
        'values'
      );
    (rt.Arguments = rt.Array), K('keys'), K('values'), K('entries');
    for (
      var Me = U('iterator'),
        Oe = U('toStringTag'),
        Ee = rt.Array,
        Pe = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        },
        Ae = ht(Pe),
        je = 0;
      je < Ae.length;
      je++
    ) {
      var xe,
        Fe = Ae[je],
        Re = Pe[Fe],
        Te = e[Fe],
        ke = Te && Te.prototype;
      if (
        ke &&
        (ke[Me] || g(ke, Me, Ee), ke[Oe] || g(ke, Oe, Fe), (rt[Fe] = Ee), Re)
      )
        for (xe in me) ke[xe] || O(ke, xe, me[xe], !0);
    }
    var Ie,
      Le,
      Ce,
      Ne = function(t, n, e, r) {
        if (!(t instanceof n) || (void 0 !== r && r in t))
          throw TypeError(e + ': incorrect invocation!');
        return t;
      },
      We = n(function(t) {
        var n = {},
          e = {},
          r = (t.exports = function(t, r, i, u, c) {
            var f,
              a,
              s,
              l,
              h = c
                ? function() {
                    return t;
                  }
                : Vt(t),
              p = P(i, u, r ? 2 : 1),
              v = 0;
            if ('function' != typeof h)
              throw TypeError(t + ' is not iterable!');
            if (Ct(h)) {
              for (f = W(t.length); f > v; v++)
                if (
                  (l = r ? p(o((a = t[v]))[0], a[1]) : p(t[v])) === n ||
                  l === e
                )
                  return l;
            } else
              for (s = h.call(t); !(a = s.next()).done; )
                if ((l = kt(s, p, a.value, r)) === n || l === e) return l;
          });
        (r.BREAK = n), (r.RETURN = e);
      }),
      De = U('species'),
      Ue = function(t, n) {
        var e,
          r = o(t).constructor;
        return void 0 === r || null == (e = o(r)[De]) ? n : E(e);
      },
      Be = function(t, n, e) {
        var r = void 0 === e;
        switch (n.length) {
          case 0:
            return r ? t() : t.call(e);
          case 1:
            return r ? t(n[0]) : t.call(e, n[0]);
          case 2:
            return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
          case 3:
            return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
          case 4:
            return r
              ? t(n[0], n[1], n[2], n[3])
              : t.call(e, n[0], n[1], n[2], n[3]);
        }
        return t.apply(e, n);
      },
      Ve = e.process,
      Ge = e.setImmediate,
      ze = e.clearImmediate,
      qe = e.MessageChannel,
      Ke = e.Dispatch,
      He = 0,
      Ye = {},
      Xe = function() {
        var t = +this;
        if (Ye.hasOwnProperty(t)) {
          var n = Ye[t];
          delete Ye[t], n();
        }
      },
      $e = function(t) {
        Xe.call(t.data);
      };
    (Ge && ze) ||
      ((Ge = function(t) {
        for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
        return (
          (Ye[++He] = function() {
            Be('function' == typeof t ? t : Function(t), n);
          }),
          Ie(He),
          He
        );
      }),
      (ze = function(t) {
        delete Ye[t];
      }),
      'process' == F(Ve)
        ? (Ie = function(t) {
            Ve.nextTick(P(Xe, t, 1));
          })
        : Ke && Ke.now
        ? (Ie = function(t) {
            Ke.now(P(Xe, t, 1));
          })
        : qe
        ? ((Ce = (Le = new qe()).port2),
          (Le.port1.onmessage = $e),
          (Ie = P(Ce.postMessage, Ce, 1)))
        : e.addEventListener &&
          'function' == typeof postMessage &&
          !e.importScripts
        ? ((Ie = function(t) {
            e.postMessage(t + '', '*');
          }),
          e.addEventListener('message', $e, !1))
        : (Ie =
            'onreadystatechange' in s('script')
              ? function(t) {
                  dt.appendChild(s('script')).onreadystatechange = function() {
                    dt.removeChild(this), Xe.call(t);
                  };
                }
              : function(t) {
                  setTimeout(P(Xe, t, 1), 0);
                }));
    var Je = { set: Ge, clear: ze },
      Ze = Je.set,
      Qe = e.MutationObserver || e.WebKitMutationObserver,
      tr = e.process,
      nr = e.Promise,
      er = 'process' == F(tr);
    function rr(t) {
      var n, e;
      (this.promise = new t(function(t, r) {
        if (void 0 !== n || void 0 !== e)
          throw TypeError('Bad Promise constructor');
        (n = t), (e = r);
      })),
        (this.resolve = E(n)),
        (this.reject = E(e));
    }
    var ir,
      or,
      ur,
      cr,
      fr = {
        f: function(t) {
          return new rr(t);
        }
      },
      ar = function(t) {
        try {
          return { e: !1, v: t() };
        } catch (t) {
          return { e: !0, v: t };
        }
      },
      sr = e.navigator,
      lr = (sr && sr.userAgent) || '',
      hr = function(t, n) {
        if ((o(t), i(n) && n.constructor === t)) return n;
        var e = fr.f(t);
        return (0, e.resolve)(n), e.promise;
      },
      pr = function(t, n, e) {
        for (var r in n) O(t, r, n[r], e);
        return t;
      },
      vr = Je.set,
      dr = (function() {
        var t,
          n,
          r,
          i = function() {
            var e, i;
            for (er && (e = tr.domain) && e.exit(); t; ) {
              (i = t.fn), (t = t.next);
              try {
                i();
              } catch (e) {
                throw (t ? r() : (n = void 0), e);
              }
            }
            (n = void 0), e && e.enter();
          };
        if (er)
          r = function() {
            tr.nextTick(i);
          };
        else if (!Qe || (e.navigator && e.navigator.standalone))
          if (nr && nr.resolve) {
            var o = nr.resolve(void 0);
            r = function() {
              o.then(i);
            };
          } else
            r = function() {
              Ze.call(e, i);
            };
        else {
          var u = !0,
            c = document.createTextNode('');
          new Qe(i).observe(c, { characterData: !0 }),
            (r = function() {
              c.data = u = !u;
            });
        }
        return function(e) {
          var i = { fn: e, next: void 0 };
          n && (n.next = i), t || ((t = i), r()), (n = i);
        };
      })(),
      gr = e.TypeError,
      yr = e.process,
      _r = yr && yr.versions,
      Sr = (_r && _r.v8) || '',
      wr = e.Promise,
      br = 'process' == Ut(yr),
      mr = function() {},
      Mr = (or = fr.f),
      Or = !!(function() {
        try {
          var t = wr.resolve(1),
            n = ((t.constructor = {})[U('species')] = function(t) {
              t(mr, mr);
            });
          return (
            (br || 'function' == typeof PromiseRejectionEvent) &&
            t.then(mr) instanceof n &&
            0 !== Sr.indexOf('6.6') &&
            -1 === lr.indexOf('Chrome/66')
          );
        } catch (t) {}
      })(),
      Er = function(t) {
        var n;
        return !(!i(t) || 'function' != typeof (n = t.then)) && n;
      },
      Pr = function(t, n) {
        if (!t._n) {
          t._n = !0;
          var e = t._c;
          dr(function() {
            for (
              var r = t._v,
                i = 1 == t._s,
                o = 0,
                u = function(n) {
                  var e,
                    o,
                    u,
                    c = i ? n.ok : n.fail,
                    f = n.resolve,
                    a = n.reject,
                    s = n.domain;
                  try {
                    c
                      ? (i || (2 == t._h && xr(t), (t._h = 1)),
                        !0 === c
                          ? (e = r)
                          : (s && s.enter(),
                            (e = c(r)),
                            s && (s.exit(), (u = !0))),
                        e === n.promise
                          ? a(gr('Promise-chain cycle'))
                          : (o = Er(e))
                          ? o.call(e, f, a)
                          : f(e))
                      : a(r);
                  } catch (t) {
                    s && !u && s.exit(), a(t);
                  }
                };
              e.length > o;

            )
              u(e[o++]);
            (t._c = []), (t._n = !1), n && !t._h && Ar(t);
          });
        }
      },
      Ar = function(t) {
        vr.call(e, function() {
          var n,
            r,
            i,
            o = t._v,
            u = jr(t);
          if (
            (u &&
              ((n = ar(function() {
                br
                  ? yr.emit('unhandledRejection', o, t)
                  : (r = e.onunhandledrejection)
                  ? r({ promise: t, reason: o })
                  : (i = e.console) &&
                    i.error &&
                    i.error('Unhandled promise rejection', o);
              })),
              (t._h = br || jr(t) ? 2 : 1)),
            (t._a = void 0),
            u && n.e)
          )
            throw n.v;
        });
      },
      jr = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      xr = function(t) {
        vr.call(e, function() {
          var n;
          br
            ? yr.emit('rejectionHandled', t)
            : (n = e.onrejectionhandled) && n({ promise: t, reason: t._v });
        });
      },
      Fr = function(t) {
        var n = this;
        n._d ||
          ((n._d = !0),
          ((n = n._w || n)._v = t),
          (n._s = 2),
          n._a || (n._a = n._c.slice()),
          Pr(n, !0));
      },
      Rr = function(t) {
        var n,
          e = this;
        if (!e._d) {
          (e._d = !0), (e = e._w || e);
          try {
            if (e === t) throw gr("Promise can't be resolved itself");
            (n = Er(t))
              ? dr(function() {
                  var r = { _w: e, _d: !1 };
                  try {
                    n.call(t, P(Rr, r, 1), P(Fr, r, 1));
                  } catch (t) {
                    Fr.call(r, t);
                  }
                })
              : ((e._v = t), (e._s = 1), Pr(e, !1));
          } catch (t) {
            Fr.call({ _w: e, _d: !1 }, t);
          }
        }
      };
    Or ||
      ((wr = function(t) {
        Ne(this, wr, 'Promise', '_h'), E(t), ir.call(this);
        try {
          t(P(Rr, this, 1), P(Fr, this, 1));
        } catch (t) {
          Fr.call(this, t);
        }
      }),
      ((ir = function(t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = pr(wr.prototype, {
        then: function(t, n) {
          var e = Mr(Ue(this, wr));
          return (
            (e.ok = 'function' != typeof t || t),
            (e.fail = 'function' == typeof n && n),
            (e.domain = br ? yr.domain : void 0),
            this._c.push(e),
            this._a && this._a.push(e),
            this._s && Pr(this, !1),
            e.promise
          );
        },
        catch: function(t) {
          return this.then(void 0, t);
        }
      })),
      (ur = function() {
        var t = new ir();
        (this.promise = t),
          (this.resolve = P(Rr, t, 1)),
          (this.reject = P(Fr, t, 1));
      }),
      (fr.f = Mr = function(t) {
        return t === wr || t === cr ? new ur(t) : or(t);
      })),
      j(j.G + j.W + j.F * !Or, { Promise: wr }),
      mt(wr, 'Promise'),
      $n('Promise'),
      (cr = r.Promise),
      j(j.S + j.F * !Or, 'Promise', {
        reject: function(t) {
          var n = Mr(this);
          return (0, n.reject)(t), n.promise;
        }
      }),
      j(j.S + j.F * !Or, 'Promise', {
        resolve: function(t) {
          return hr(this, t);
        }
      }),
      j(
        j.S +
          j.F *
            !(
              Or &&
              qt(function(t) {
                wr.all(t).catch(mr);
              })
            ),
        'Promise',
        {
          all: function(t) {
            var n = this,
              e = Mr(n),
              r = e.resolve,
              i = e.reject,
              o = ar(function() {
                var e = [],
                  o = 0,
                  u = 1;
                We(t, !1, function(t) {
                  var c = o++,
                    f = !1;
                  e.push(void 0),
                    u++,
                    n.resolve(t).then(function(t) {
                      f || ((f = !0), (e[c] = t), --u || r(e));
                    }, i);
                }),
                  --u || r(e);
              });
            return o.e && i(o.v), e.promise;
          },
          race: function(t) {
            var n = this,
              e = Mr(n),
              r = e.reject,
              i = ar(function() {
                We(t, !1, function(t) {
                  n.resolve(t).then(e.resolve, r);
                });
              });
            return i.e && r(i.v), e.promise;
          }
        }
      );
    r.Promise;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var Tr = n(function(t) {
        var n = b('meta'),
          e = v.f,
          r = 0,
          o =
            Object.isExtensible ||
            function() {
              return !0;
            },
          c = !u(function() {
            return o(Object.preventExtensions({}));
          }),
          f = function(t) {
            e(t, n, { value: { i: 'O' + ++r, w: {} } });
          },
          a = (t.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function(t, e) {
              if (!i(t))
                return 'symbol' == typeof t
                  ? t
                  : ('string' == typeof t ? 'S' : 'P') + t;
              if (!_(t, n)) {
                if (!o(t)) return 'F';
                if (!e) return 'E';
                f(t);
              }
              return t[n].i;
            },
            getWeak: function(t, e) {
              if (!_(t, n)) {
                if (!o(t)) return !0;
                if (!e) return !1;
                f(t);
              }
              return t[n].w;
            },
            onFreeze: function(t) {
              return c && a.NEED && o(t) && !_(t, n) && f(t), t;
            }
          });
      }),
      kr = (Tr.KEY,
      Tr.NEED,
      Tr.fastKey,
      Tr.getWeak,
      Tr.onFreeze,
      function(t, n) {
        if (!i(t) || t._t !== n)
          throw TypeError('Incompatible receiver, ' + n + ' required!');
        return t;
      }),
      Ir = v.f,
      Lr = Tr.fastKey,
      Cr = c ? '_s' : 'size',
      Nr = function(t, n) {
        var e,
          r = Lr(n);
        if ('F' !== r) return t._i[r];
        for (e = t._f; e; e = e.n) if (e.k == n) return e;
      },
      Wr = {
        getConstructor: function(t, n, e, r) {
          var i = t(function(t, o) {
            Ne(t, i, n, '_i'),
              (t._t = n),
              (t._i = St(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[Cr] = 0),
              null != o && We(o, e, t[r], t);
          });
          return (
            pr(i.prototype, {
              clear: function() {
                for (var t = kr(this, n), e = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                (t._f = t._l = void 0), (t[Cr] = 0);
              },
              delete: function(t) {
                var e = kr(this, n),
                  r = Nr(e, t);
                if (r) {
                  var i = r.n,
                    o = r.p;
                  delete e._i[r.i],
                    (r.r = !0),
                    o && (o.n = i),
                    i && (i.p = o),
                    e._f == r && (e._f = i),
                    e._l == r && (e._l = o),
                    e[Cr]--;
                }
                return !!r;
              },
              forEach: function(t) {
                kr(this, n);
                for (
                  var e,
                    r = P(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.n : this._f);

                )
                  for (r(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function(t) {
                return !!Nr(kr(this, n), t);
              }
            }),
            c &&
              Ir(i.prototype, 'size', {
                get: function() {
                  return kr(this, n)[Cr];
                }
              }),
            i
          );
        },
        def: function(t, n, e) {
          var r,
            i,
            o = Nr(t, n);
          return (
            o
              ? (o.v = e)
              : ((t._l = o = {
                  i: (i = Lr(n, !0)),
                  k: n,
                  v: e,
                  p: (r = t._l),
                  n: void 0,
                  r: !1
                }),
                t._f || (t._f = o),
                r && (r.n = o),
                t[Cr]++,
                'F' !== i && (t._i[i] = o)),
            t
          );
        },
        getEntry: Nr,
        setStrong: function(t, n, e) {
          Rt(
            t,
            n,
            function(t, e) {
              (this._t = kr(t, n)), (this._k = e), (this._l = void 0);
            },
            function() {
              for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
              return this._t && (this._l = n = n ? n.n : this._t._f)
                ? be(0, 'keys' == t ? n.k : 'values' == t ? n.v : [n.k, n.v])
                : ((this._t = void 0), be(1));
            },
            e ? 'entries' : 'values',
            !e,
            !0
          ),
            $n(n);
        }
      },
      Dr = function(t, n, r, o, c, f) {
        var a = e[t],
          s = a,
          l = c ? 'set' : 'add',
          h = s && s.prototype,
          p = {},
          v = function(t) {
            var n = h[t];
            O(
              h,
              t,
              'delete' == t
                ? function(t) {
                    return !(f && !i(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                ? function(t) {
                    return !(f && !i(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                ? function(t) {
                    return f && !i(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : 'add' == t
                ? function(t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : function(t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          };
        if (
          'function' == typeof s &&
          (f ||
            (h.forEach &&
              !u(function() {
                new s().entries().next();
              })))
        ) {
          var d = new s(),
            g = d[l](f ? {} : -0, 1) != d,
            y = u(function() {
              d.has(1);
            }),
            _ = qt(function(t) {
              new s(t);
            }),
            S =
              !f &&
              u(function() {
                for (var t = new s(), n = 5; n--; ) t[l](n, n);
                return !t.has(-0);
              });
          _ ||
            (((s = n(function(n, e) {
              Ne(n, s, t);
              var r = zn(new a(), n, s);
              return null != e && We(e, c, r[l], r), r;
            })).prototype = h),
            (h.constructor = s)),
            (y || S) && (v('delete'), v('has'), c && v('get')),
            (S || g) && v(l),
            f && h.clear && delete h.clear;
        } else
          (s = o.getConstructor(n, t, c, l)),
            pr(s.prototype, r),
            (Tr.NEED = !0);
        return (
          mt(s, t),
          (p[t] = s),
          j(j.G + j.W + j.F * (s != a), p),
          f || o.setStrong(s, t, c),
          s
        );
      },
      Ur = (Dr(
        'Map',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function(t) {
            var n = Wr.getEntry(kr(this, 'Map'), t);
            return n && n.v;
          },
          set: function(t, n) {
            return Wr.def(kr(this, 'Map'), 0 === t ? 0 : t, n);
          }
        },
        Wr,
        !0
      ),
      r.Map,
      Tr.getWeak),
      Br = G(5),
      Vr = G(6),
      Gr = 0,
      zr = function(t) {
        return t._l || (t._l = new qr());
      },
      qr = function() {
        this.a = [];
      },
      Kr = function(t, n) {
        return Br(t.a, function(t) {
          return t[0] === n;
        });
      };
    qr.prototype = {
      get: function(t) {
        var n = Kr(this, t);
        if (n) return n[1];
      },
      has: function(t) {
        return !!Kr(this, t);
      },
      set: function(t, n) {
        var e = Kr(this, t);
        e ? (e[1] = n) : this.a.push([t, n]);
      },
      delete: function(t) {
        var n = Vr(this.a, function(n) {
          return n[0] === t;
        });
        return ~n && this.a.splice(n, 1), !!~n;
      }
    };
    var Hr = {
      getConstructor: function(t, n, e, r) {
        var o = t(function(t, i) {
          Ne(t, o, n, '_i'),
            (t._t = n),
            (t._i = Gr++),
            (t._l = void 0),
            null != i && We(i, e, t[r], t);
        });
        return (
          pr(o.prototype, {
            delete: function(t) {
              if (!i(t)) return !1;
              var e = Ur(t);
              return !0 === e
                ? zr(kr(this, n)).delete(t)
                : e && _(e, this._i) && delete e[this._i];
            },
            has: function(t) {
              if (!i(t)) return !1;
              var e = Ur(t);
              return !0 === e ? zr(kr(this, n)).has(t) : e && _(e, this._i);
            }
          }),
          o
        );
      },
      def: function(t, n, e) {
        var r = Ur(o(n), !0);
        return !0 === r ? zr(t).set(n, e) : (r[t._i] = e), t;
      },
      ufstore: zr
    };
    n(function(t) {
      var n,
        r = G(0),
        o = kr,
        u = !e.ActiveXObject && 'ActiveXObject' in e,
        c = Tr.getWeak,
        f = Object.isExtensible,
        a = Hr.ufstore,
        s = function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        l = {
          get: function(t) {
            if (i(t)) {
              var n = c(t);
              return !0 === n
                ? a(kr(this, 'WeakMap')).get(t)
                : n
                ? n[this._i]
                : void 0;
            }
          },
          set: function(t, n) {
            return Hr.def(kr(this, 'WeakMap'), t, n);
          }
        },
        h = (t.exports = Dr('WeakMap', s, l, Hr, !0, !0));
      o &&
        u &&
        ((n = Hr.getConstructor(s, 'WeakMap')),
        Cn(n.prototype, l),
        (Tr.NEED = !0),
        r(['delete', 'has', 'get', 'set'], function(t) {
          var e = h.prototype,
            r = e[t];
          O(e, t, function(e, o) {
            if (i(e) && !f(e)) {
              this._f || (this._f = new n());
              var u = this._f[t](e, o);
              return 'set' == t ? this : u;
            }
            return r.call(this, e, o);
          });
        }));
    }),
      r.WeakMap,
      Dr(
        'Set',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return Wr.def(kr(this, 'Set'), (t = 0 === t ? 0 : t), t);
          }
        },
        Wr
      ),
      r.Set;
    Dr(
      'WeakSet',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(t) {
          return Hr.def(kr(this, 'WeakSet'), t, !0);
        }
      },
      Hr,
      !1,
      !0
    );
    r.WeakSet;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var Yr = (e.Reflect || {}).apply,
      Xr = Function.apply;
    j(
      j.S +
        j.F *
          !u(function() {
            Yr(function() {});
          }),
      'Reflect',
      {
        apply: function(t, n, e) {
          var r = E(t),
            i = o(e);
          return Yr ? Yr(r, n, i) : Xr.call(r, n, i);
        }
      }
    );
    var $r = [].slice,
      Jr = {},
      Zr =
        Function.bind ||
        function(t) {
          var n = E(this),
            e = $r.call(arguments, 1),
            r = function() {
              var i = e.concat($r.call(arguments));
              return this instanceof r
                ? (function(t, n, e) {
                    if (!(n in Jr)) {
                      for (var r = [], i = 0; i < n; i++) r[i] = 'a[' + i + ']';
                      Jr[n] = Function(
                        'F,a',
                        'return new F(' + r.join(',') + ')'
                      );
                    }
                    return Jr[n](t, e);
                  })(n, i.length, i)
                : Be(n, i, t);
            };
          return i(n.prototype) && (r.prototype = n.prototype), r;
        },
      Qr = (e.Reflect || {}).construct,
      ti = u(function() {
        function t() {}
        return !(Qr(function() {}, [], t) instanceof t);
      }),
      ni = !u(function() {
        Qr(function() {});
      });
    j(j.S + j.F * (ti || ni), 'Reflect', {
      construct: function(t, n) {
        E(t), o(n);
        var e = arguments.length < 3 ? t : E(arguments[2]);
        if (ni && !ti) return Qr(t, n, e);
        if (t == e) {
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
          }
          var r = [null];
          return r.push.apply(r, n), new (Zr.apply(t, r))();
        }
        var u = e.prototype,
          c = St(i(u) ? u : Object.prototype),
          f = Function.apply.call(t, c, n);
        return i(f) ? f : c;
      }
    }),
      j(
        j.S +
          j.F *
            u(function() {
              Reflect.defineProperty(v.f({}, 1, { value: 1 }), 1, { value: 2 });
            }),
        'Reflect',
        {
          defineProperty: function(t, n, e) {
            o(t), (n = h(n, !0)), o(e);
            try {
              return v.f(t, n, e), !0;
            } catch (t) {
              return !1;
            }
          }
        }
      );
    var ei = Dn.f;
    j(j.S, 'Reflect', {
      deleteProperty: function(t, n) {
        var e = ei(o(t), n);
        return !(e && !e.configurable) && delete t[n];
      }
    });
    var ri = function(t) {
      (this._t = o(t)), (this._i = 0);
      var n,
        e = (this._k = []);
      for (n in t) e.push(n);
    };
    Ot(ri, 'Object', function() {
      var t,
        n = this._k;
      do {
        if (this._i >= n.length) return { value: void 0, done: !0 };
      } while (!((t = n[this._i++]) in this._t));
      return { value: t, done: !1 };
    }),
      j(j.S, 'Reflect', {
        enumerate: function(t) {
          return new ri(t);
        }
      }),
      j(j.S, 'Reflect', {
        get: function t(n, e) {
          var r,
            u,
            c = arguments.length < 3 ? n : arguments[2];
          return o(n) === c
            ? n[e]
            : (r = Dn.f(n, e))
            ? _(r, 'value')
              ? r.value
              : void 0 !== r.get
              ? r.get.call(c)
              : void 0
            : i((u = At(n)))
            ? t(u, e, c)
            : void 0;
        }
      }),
      j(j.S, 'Reflect', {
        getOwnPropertyDescriptor: function(t, n) {
          return Dn.f(o(t), n);
        }
      }),
      j(j.S, 'Reflect', {
        getPrototypeOf: function(t) {
          return At(o(t));
        }
      }),
      j(j.S, 'Reflect', {
        has: function(t, n) {
          return n in t;
        }
      });
    var ii = Object.isExtensible;
    j(j.S, 'Reflect', {
      isExtensible: function(t) {
        return o(t), !ii || ii(t);
      }
    });
    var oi = e.Reflect,
      ui =
        (oi && oi.ownKeys) ||
        function(t) {
          var n = Kn.f(o(t)),
            e = kn.f;
          return e ? n.concat(e(t)) : n;
        };
    j(j.S, 'Reflect', { ownKeys: ui });
    var ci = Object.preventExtensions;
    j(j.S, 'Reflect', {
      preventExtensions: function(t) {
        o(t);
        try {
          return ci && ci(t), !0;
        } catch (t) {
          return !1;
        }
      }
    }),
      j(j.S, 'Reflect', {
        set: function t(n, e, r) {
          var u,
            c,
            f = arguments.length < 4 ? n : arguments[3],
            a = Dn.f(o(n), e);
          if (!a) {
            if (i((c = At(n)))) return t(c, e, r, f);
            a = d(0);
          }
          if (_(a, 'value')) {
            if (!1 === a.writable || !i(f)) return !1;
            if ((u = Dn.f(f, e))) {
              if (u.get || u.set || !1 === u.writable) return !1;
              (u.value = r), v.f(f, e, u);
            } else v.f(f, e, d(0, r));
            return !0;
          }
          return void 0 !== a.set && (a.set.call(f, r), !0);
        }
      }),
      Bn &&
        j(j.S, 'Reflect', {
          setPrototypeOf: function(t, n) {
            Bn.check(t, n);
            try {
              return Bn.set(t, n), !0;
            } catch (t) {
              return !1;
            }
          }
        });
    r.Reflect;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var fi = ot(!0);
    j(j.P, 'Array', {
      includes: function(t) {
        return fi(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }),
      K('includes');
    r.Array.includes;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var ai = In.f,
      si = function(t) {
        return function(n) {
          for (
            var e, r = it(n), i = ht(r), o = i.length, u = 0, c = [];
            o > u;

          )
            ai.call(r, (e = i[u++])) && c.push(t ? [e, r[e]] : r[e]);
          return c;
        };
      },
      li = si(!1);
    j(j.S, 'Object', {
      values: function(t) {
        return li(t);
      }
    });
    r.Object.values;
    var hi = si(!0);
    j(j.S, 'Object', {
      entries: function(t) {
        return hi(t);
      }
    });
    r.Object.entries;
    j(j.S, 'Object', {
      getOwnPropertyDescriptors: function(t) {
        for (
          var n, e, r = it(t), i = Dn.f, o = ui(r), u = {}, c = 0;
          o.length > c;

        )
          void 0 !== (e = i(r, (n = o[c++]))) && Nt(u, n, e);
        return u;
      }
    });
    r.Object.getOwnPropertyDescriptors;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    var pi = function(t, n, e, r) {
        var i = String(T(t)),
          o = i.length,
          u = void 0 === e ? ' ' : String(e),
          c = W(n);
        if (c <= o || '' == u) return i;
        var f = c - o,
          a = pe.call(u, Math.ceil(f / u.length));
        return a.length > f && (a = a.slice(0, f)), r ? a + i : i + a;
      },
      vi = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(lr);
    j(j.P + j.F * vi, 'String', {
      padStart: function(t) {
        return pi(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
      }
    });
    r.String.padStart;
    var di = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(lr);
    j(j.P + j.F * di, 'String', {
      padEnd: function(t) {
        return pi(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
      }
    });
    r.String.padEnd;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    );
    for (
      var gi,
        yi = b('typed_array'),
        _i = b('view'),
        Si = !(!e.ArrayBuffer || !e.DataView),
        wi = Si,
        bi = 0,
        mi = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
          ','
        );
      bi < 9;

    )
      (gi = e[mi[bi++]])
        ? (g(gi.prototype, yi, !0), g(gi.prototype, _i, !0))
        : (wi = !1);
    var Mi = { ABV: Si, CONSTR: wi, TYPED: yi, VIEW: _i },
      Oi = function(t) {
        if (void 0 === t) return 0;
        var n = C(t),
          e = W(n);
        if (n !== e) throw RangeError('Wrong length!');
        return e;
      },
      Ei = n(function(t, n) {
        var r = Kn.f,
          i = v.f,
          o = 'prototype',
          f = 'Wrong index!',
          a = e.ArrayBuffer,
          s = e.DataView,
          l = e.Math,
          h = e.RangeError,
          p = e.Infinity,
          d = a,
          y = l.abs,
          _ = l.pow,
          S = l.floor,
          w = l.log,
          b = l.LN2,
          m = c ? '_b' : 'buffer',
          M = c ? '_l' : 'byteLength',
          O = c ? '_o' : 'byteOffset';
        function E(t, n, e) {
          var r,
            i,
            o,
            u = new Array(e),
            c = 8 * e - n - 1,
            f = (1 << c) - 1,
            a = f >> 1,
            s = 23 === n ? _(2, -24) - _(2, -77) : 0,
            l = 0,
            h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            (t = y(t)) != t || t === p
              ? ((i = t != t ? 1 : 0), (r = f))
              : ((r = S(w(t) / b)),
                t * (o = _(2, -r)) < 1 && (r--, (o *= 2)),
                (t += r + a >= 1 ? s / o : s * _(2, 1 - a)) * o >= 2 &&
                  (r++, (o /= 2)),
                r + a >= f
                  ? ((i = 0), (r = f))
                  : r + a >= 1
                  ? ((i = (t * o - 1) * _(2, n)), (r += a))
                  : ((i = t * _(2, a - 1) * _(2, n)), (r = 0)));
            n >= 8;
            u[l++] = 255 & i, i /= 256, n -= 8
          );
          for (
            r = (r << n) | i, c += n;
            c > 0;
            u[l++] = 255 & r, r /= 256, c -= 8
          );
          return (u[--l] |= 128 * h), u;
        }
        function P(t, n, e) {
          var r,
            i = 8 * e - n - 1,
            o = (1 << i) - 1,
            u = o >> 1,
            c = i - 7,
            f = e - 1,
            a = t[f--],
            s = 127 & a;
          for (a >>= 7; c > 0; s = 256 * s + t[f], f--, c -= 8);
          for (
            r = s & ((1 << -c) - 1), s >>= -c, c += n;
            c > 0;
            r = 256 * r + t[f], f--, c -= 8
          );
          if (0 === s) s = 1 - u;
          else {
            if (s === o) return r ? NaN : a ? -p : p;
            (r += _(2, n)), (s -= u);
          }
          return (a ? -1 : 1) * r * _(2, s - n);
        }
        function A(t) {
          return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        }
        function j(t) {
          return [255 & t];
        }
        function x(t) {
          return [255 & t, (t >> 8) & 255];
        }
        function F(t) {
          return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
        }
        function R(t) {
          return E(t, 52, 8);
        }
        function T(t) {
          return E(t, 23, 4);
        }
        function k(t, n, e) {
          i(t[o], n, {
            get: function() {
              return this[e];
            }
          });
        }
        function I(t, n, e, r) {
          var i = Oi(+e);
          if (i + n > t[M]) throw h(f);
          var o = t[m]._b,
            u = i + t[O],
            c = o.slice(u, u + n);
          return r ? c : c.reverse();
        }
        function L(t, n, e, r, i, o) {
          var u = Oi(+e);
          if (u + n > t[M]) throw h(f);
          for (var c = t[m]._b, a = u + t[O], s = r(+i), l = 0; l < n; l++)
            c[a + l] = s[o ? l : n - l - 1];
        }
        if (Mi.ABV) {
          if (
            !u(function() {
              a(1);
            }) ||
            !u(function() {
              new a(-1);
            }) ||
            u(function() {
              return new a(), new a(1.5), new a(NaN), 'ArrayBuffer' != a.name;
            })
          ) {
            for (
              var N,
                D = ((a = function(t) {
                  return Ne(this, a), new d(Oi(t));
                })[o] = d[o]),
                U = r(d),
                B = 0;
              U.length > B;

            )
              (N = U[B++]) in a || g(a, N, d[N]);
            D.constructor = a;
          }
          var V = new s(new a(2)),
            G = s[o].setInt8;
          V.setInt8(0, 2147483648),
            V.setInt8(1, 2147483649),
            (!V.getInt8(0) && V.getInt8(1)) ||
              pr(
                s[o],
                {
                  setInt8: function(t, n) {
                    G.call(this, t, (n << 24) >> 24);
                  },
                  setUint8: function(t, n) {
                    G.call(this, t, (n << 24) >> 24);
                  }
                },
                !0
              );
        } else
          (a = function(t) {
            Ne(this, a, 'ArrayBuffer');
            var n = Oi(t);
            (this._b = tt.call(new Array(n), 0)), (this[M] = n);
          }),
            (s = function(t, n, e) {
              Ne(this, s, 'DataView'), Ne(t, a, 'DataView');
              var r = t[M],
                i = C(n);
              if (i < 0 || i > r) throw h('Wrong offset!');
              if (i + (e = void 0 === e ? r - i : W(e)) > r)
                throw h('Wrong length!');
              (this[m] = t), (this[O] = i), (this[M] = e);
            }),
            c &&
              (k(a, 'byteLength', '_l'),
              k(s, 'buffer', '_b'),
              k(s, 'byteLength', '_l'),
              k(s, 'byteOffset', '_o')),
            pr(s[o], {
              getInt8: function(t) {
                return (I(this, 1, t)[0] << 24) >> 24;
              },
              getUint8: function(t) {
                return I(this, 1, t)[0];
              },
              getInt16: function(t) {
                var n = I(this, 2, t, arguments[1]);
                return (((n[1] << 8) | n[0]) << 16) >> 16;
              },
              getUint16: function(t) {
                var n = I(this, 2, t, arguments[1]);
                return (n[1] << 8) | n[0];
              },
              getInt32: function(t) {
                return A(I(this, 4, t, arguments[1]));
              },
              getUint32: function(t) {
                return A(I(this, 4, t, arguments[1])) >>> 0;
              },
              getFloat32: function(t) {
                return P(I(this, 4, t, arguments[1]), 23, 4);
              },
              getFloat64: function(t) {
                return P(I(this, 8, t, arguments[1]), 52, 8);
              },
              setInt8: function(t, n) {
                L(this, 1, t, j, n);
              },
              setUint8: function(t, n) {
                L(this, 1, t, j, n);
              },
              setInt16: function(t, n) {
                L(this, 2, t, x, n, arguments[2]);
              },
              setUint16: function(t, n) {
                L(this, 2, t, x, n, arguments[2]);
              },
              setInt32: function(t, n) {
                L(this, 4, t, F, n, arguments[2]);
              },
              setUint32: function(t, n) {
                L(this, 4, t, F, n, arguments[2]);
              },
              setFloat32: function(t, n) {
                L(this, 4, t, T, n, arguments[2]);
              },
              setFloat64: function(t, n) {
                L(this, 8, t, R, n, arguments[2]);
              }
            });
        mt(a, 'ArrayBuffer'),
          mt(s, 'DataView'),
          g(s[o], Mi.VIEW, !0),
          (n.ArrayBuffer = a),
          (n.DataView = s);
      }),
      Pi = e.ArrayBuffer,
      Ai = Ei.ArrayBuffer,
      ji = Ei.DataView,
      xi = Mi.ABV && Pi.isView,
      Fi = Ai.prototype.slice,
      Ri = Mi.VIEW;
    j(j.G + j.W + j.F * (Pi !== Ai), { ArrayBuffer: Ai }),
      j(j.S + j.F * !Mi.CONSTR, 'ArrayBuffer', {
        isView: function(t) {
          return (xi && xi(t)) || (i(t) && Ri in t);
        }
      }),
      j(
        j.P +
          j.U +
          j.F *
            u(function() {
              return !new Ai(2).slice(1, void 0).byteLength;
            }),
        'ArrayBuffer',
        {
          slice: function(t, n) {
            if (void 0 !== Fi && void 0 === n) return Fi.call(o(this), t);
            for (
              var e = o(this).byteLength,
                r = Q(t, e),
                i = Q(void 0 === n ? e : n, e),
                u = new (Ue(this, Ai))(W(i - r)),
                c = new ji(this),
                f = new ji(u),
                a = 0;
              r < i;

            )
              f.setUint8(a++, c.getUint8(r++));
            return u;
          }
        }
      ),
      $n('ArrayBuffer'),
      j(j.G + j.W + j.F * !Mi.ABV, { DataView: Ei.DataView });
    var Ti = n(function(t) {
      if (c) {
        var n = e,
          r = u,
          o = j,
          f = Mi,
          a = Ei,
          s = P,
          l = Ne,
          p = d,
          y = g,
          S = pr,
          w = C,
          m = W,
          M = Oi,
          O = Q,
          E = h,
          A = _,
          x = Ut,
          F = i,
          R = k,
          T = Ct,
          I = St,
          L = At,
          N = Kn.f,
          D = Vt,
          B = b,
          V = U,
          z = G,
          q = ot,
          K = Ue,
          H = me,
          Y = rt,
          X = qt,
          $ = $n,
          J = tt,
          Z = nt,
          et = v,
          it = Dn,
          ut = et.f,
          ct = it.f,
          ft = n.RangeError,
          at = n.TypeError,
          st = n.Uint8Array,
          lt = Array.prototype,
          ht = a.ArrayBuffer,
          pt = a.DataView,
          vt = z(0),
          dt = z(2),
          gt = z(3),
          yt = z(4),
          _t = z(5),
          wt = z(6),
          bt = q(!0),
          mt = q(!1),
          Mt = H.values,
          Ot = H.keys,
          Et = H.entries,
          Pt = lt.lastIndexOf,
          jt = lt.reduce,
          xt = lt.reduceRight,
          Ft = lt.join,
          Rt = lt.sort,
          Tt = lt.slice,
          kt = lt.toString,
          It = lt.toLocaleString,
          Lt = V('iterator'),
          Nt = V('toStringTag'),
          Wt = B('typed_constructor'),
          Dt = B('def_constructor'),
          Bt = f.CONSTR,
          Gt = f.TYPED,
          zt = f.VIEW,
          Kt = z(1, function(t, n) {
            return Jt(K(t, t[Dt]), n);
          }),
          Ht = r(function() {
            return 1 === new st(new Uint16Array([1]).buffer)[0];
          }),
          Yt =
            !!st &&
            !!st.prototype.set &&
            r(function() {
              new st(1).set({});
            }),
          Xt = function(t, n) {
            var e = w(t);
            if (e < 0 || e % n) throw ft('Wrong offset!');
            return e;
          },
          $t = function(t) {
            if (F(t) && Gt in t) return t;
            throw at(t + ' is not a typed array!');
          },
          Jt = function(t, n) {
            if (!(F(t) && Wt in t))
              throw at('It is not a typed array constructor!');
            return new t(n);
          },
          Zt = function(t, n) {
            return Qt(K(t, t[Dt]), n);
          },
          Qt = function(t, n) {
            for (var e = 0, r = n.length, i = Jt(t, r); r > e; ) i[e] = n[e++];
            return i;
          },
          tn = function(t, n, e) {
            ut(t, n, {
              get: function() {
                return this._d[e];
              }
            });
          },
          nn = function(t) {
            var n,
              e,
              r,
              i,
              o,
              u,
              c = R(t),
              f = arguments.length,
              a = f > 1 ? arguments[1] : void 0,
              l = void 0 !== a,
              h = D(c);
            if (null != h && !T(h)) {
              for (u = h.call(c), r = [], n = 0; !(o = u.next()).done; n++)
                r.push(o.value);
              c = r;
            }
            for (
              l && f > 2 && (a = s(a, arguments[2], 2)),
                n = 0,
                e = m(c.length),
                i = Jt(this, e);
              e > n;
              n++
            )
              i[n] = l ? a(c[n], n) : c[n];
            return i;
          },
          en = function() {
            for (var t = 0, n = arguments.length, e = Jt(this, n); n > t; )
              e[t] = arguments[t++];
            return e;
          },
          rn =
            !!st &&
            r(function() {
              It.call(new st(1));
            }),
          on = function() {
            return It.apply(rn ? Tt.call($t(this)) : $t(this), arguments);
          },
          un = {
            copyWithin: function(t, n) {
              return Z.call(
                $t(this),
                t,
                n,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            every: function(t) {
              return yt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            fill: function(t) {
              return J.apply($t(this), arguments);
            },
            filter: function(t) {
              return Zt(
                this,
                dt($t(this), t, arguments.length > 1 ? arguments[1] : void 0)
              );
            },
            find: function(t) {
              return _t(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            findIndex: function(t) {
              return wt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            forEach: function(t) {
              vt($t(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            indexOf: function(t) {
              return mt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            includes: function(t) {
              return bt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            join: function(t) {
              return Ft.apply($t(this), arguments);
            },
            lastIndexOf: function(t) {
              return Pt.apply($t(this), arguments);
            },
            map: function(t) {
              return Kt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            reduce: function(t) {
              return jt.apply($t(this), arguments);
            },
            reduceRight: function(t) {
              return xt.apply($t(this), arguments);
            },
            reverse: function() {
              for (
                var t, n = $t(this).length, e = Math.floor(n / 2), r = 0;
                r < e;

              )
                (t = this[r]), (this[r++] = this[--n]), (this[n] = t);
              return this;
            },
            some: function(t) {
              return gt(
                $t(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            sort: function(t) {
              return Rt.call($t(this), t);
            },
            subarray: function(t, n) {
              var e = $t(this),
                r = e.length,
                i = O(t, r);
              return new (K(e, e[Dt]))(
                e.buffer,
                e.byteOffset + i * e.BYTES_PER_ELEMENT,
                m((void 0 === n ? r : O(n, r)) - i)
              );
            }
          },
          cn = function(t, n) {
            return Zt(this, Tt.call($t(this), t, n));
          },
          fn = function(t) {
            $t(this);
            var n = Xt(arguments[1], 1),
              e = this.length,
              r = R(t),
              i = m(r.length),
              o = 0;
            if (i + n > e) throw ft('Wrong length!');
            for (; o < i; ) this[n + o] = r[o++];
          },
          an = {
            entries: function() {
              return Et.call($t(this));
            },
            keys: function() {
              return Ot.call($t(this));
            },
            values: function() {
              return Mt.call($t(this));
            }
          },
          sn = function(t, n) {
            return (
              F(t) &&
              t[Gt] &&
              'symbol' != typeof n &&
              n in t &&
              String(+n) == String(n)
            );
          },
          ln = function(t, n) {
            return sn(t, (n = E(n, !0))) ? p(2, t[n]) : ct(t, n);
          },
          hn = function(t, n, e) {
            return !(sn(t, (n = E(n, !0))) && F(e) && A(e, 'value')) ||
              A(e, 'get') ||
              A(e, 'set') ||
              e.configurable ||
              (A(e, 'writable') && !e.writable) ||
              (A(e, 'enumerable') && !e.enumerable)
              ? ut(t, n, e)
              : ((t[n] = e.value), t);
          };
        Bt || ((it.f = ln), (et.f = hn)),
          o(o.S + o.F * !Bt, 'Object', {
            getOwnPropertyDescriptor: ln,
            defineProperty: hn
          }),
          r(function() {
            kt.call({});
          }) &&
            (kt = It = function() {
              return Ft.call(this);
            });
        var pn = S({}, un);
        S(pn, an),
          y(pn, Lt, an.values),
          S(pn, {
            slice: cn,
            set: fn,
            constructor: function() {},
            toString: kt,
            toLocaleString: on
          }),
          tn(pn, 'buffer', 'b'),
          tn(pn, 'byteOffset', 'o'),
          tn(pn, 'byteLength', 'l'),
          tn(pn, 'length', 'e'),
          ut(pn, Nt, {
            get: function() {
              return this[Gt];
            }
          }),
          (t.exports = function(t, e, i, u) {
            var c = t + ((u = !!u) ? 'Clamped' : '') + 'Array',
              a = 'get' + t,
              s = 'set' + t,
              h = n[c],
              p = h || {},
              v = h && L(h),
              d = !h || !f.ABV,
              g = {},
              _ = h && h.prototype,
              S = function(t, n) {
                ut(t, n, {
                  get: function() {
                    return (function(t, n) {
                      var r = t._d;
                      return r.v[a](n * e + r.o, Ht);
                    })(this, n);
                  },
                  set: function(t) {
                    return (function(t, n, r) {
                      var i = t._d;
                      u &&
                        (r =
                          (r = Math.round(r)) < 0
                            ? 0
                            : r > 255
                            ? 255
                            : 255 & r),
                        i.v[s](n * e + i.o, r, Ht);
                    })(this, n, t);
                  },
                  enumerable: !0
                });
              };
            d
              ? ((h = i(function(t, n, r, i) {
                  l(t, h, c, '_d');
                  var o,
                    u,
                    f,
                    a,
                    s = 0,
                    p = 0;
                  if (F(n)) {
                    if (
                      !(
                        n instanceof ht ||
                        'ArrayBuffer' == (a = x(n)) ||
                        'SharedArrayBuffer' == a
                      )
                    )
                      return Gt in n ? Qt(h, n) : nn.call(h, n);
                    (o = n), (p = Xt(r, e));
                    var v = n.byteLength;
                    if (void 0 === i) {
                      if (v % e) throw ft('Wrong length!');
                      if ((u = v - p) < 0) throw ft('Wrong length!');
                    } else if ((u = m(i) * e) + p > v)
                      throw ft('Wrong length!');
                    f = u / e;
                  } else (f = M(n)), (o = new ht((u = f * e)));
                  for (
                    y(t, '_d', { b: o, o: p, l: u, e: f, v: new pt(o) });
                    s < f;

                  )
                    S(t, s++);
                })),
                (_ = h.prototype = I(pn)),
                y(_, 'constructor', h))
              : (r(function() {
                  h(1);
                }) &&
                  r(function() {
                    new h(-1);
                  }) &&
                  X(function(t) {
                    new h(), new h(null), new h(1.5), new h(t);
                  }, !0)) ||
                ((h = i(function(t, n, r, i) {
                  var o;
                  return (
                    l(t, h, c),
                    F(n)
                      ? n instanceof ht ||
                        'ArrayBuffer' == (o = x(n)) ||
                        'SharedArrayBuffer' == o
                        ? void 0 !== i
                          ? new p(n, Xt(r, e), i)
                          : void 0 !== r
                          ? new p(n, Xt(r, e))
                          : new p(n)
                        : Gt in n
                        ? Qt(h, n)
                        : nn.call(h, n)
                      : new p(M(n))
                  );
                })),
                vt(
                  v !== Function.prototype ? N(p).concat(N(v)) : N(p),
                  function(t) {
                    t in h || y(h, t, p[t]);
                  }
                ),
                (h.prototype = _),
                (_.constructor = h));
            var w = _[Lt],
              b = !!w && ('values' == w.name || null == w.name),
              O = an.values;
            y(h, Wt, !0),
              y(_, Gt, c),
              y(_, zt, !0),
              y(_, Dt, h),
              (u ? new h(1)[Nt] == c : Nt in _) ||
                ut(_, Nt, {
                  get: function() {
                    return c;
                  }
                }),
              (g[c] = h),
              o(o.G + o.W + o.F * (h != p), g),
              o(o.S, c, { BYTES_PER_ELEMENT: e }),
              o(
                o.S +
                  o.F *
                    r(function() {
                      p.of.call(h, 1);
                    }),
                c,
                { from: nn, of: en }
              ),
              'BYTES_PER_ELEMENT' in _ || y(_, 'BYTES_PER_ELEMENT', e),
              o(o.P, c, un),
              $(c),
              o(o.P + o.F * Yt, c, { set: fn }),
              o(o.P + o.F * !b, c, an),
              _.toString != kt && (_.toString = kt),
              o(
                o.P +
                  o.F *
                    r(function() {
                      new h(1).slice();
                    }),
                c,
                { slice: cn }
              ),
              o(
                o.P +
                  o.F *
                    (r(function() {
                      return (
                        [1, 2].toLocaleString() !=
                        new h([1, 2]).toLocaleString()
                      );
                    }) ||
                      !r(function() {
                        _.toLocaleString.call([1, 2]);
                      })),
                c,
                { toLocaleString: on }
              ),
              (Y[c] = b ? w : O),
              b || y(_, Lt, O);
          });
      } else t.exports = function() {};
    });
    Ti('Int8', 1, function(t) {
      return function(n, e, r) {
        return t(this, n, e, r);
      };
    }),
      Ti('Uint8', 1, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti(
        'Uint8',
        1,
        function(t) {
          return function(n, e, r) {
            return t(this, n, e, r);
          };
        },
        !0
      ),
      Ti('Int16', 2, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti('Uint16', 2, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti('Int32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti('Uint32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti('Float32', 4, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      Ti('Float64', 8, function(t) {
        return function(n, e, r) {
          return t(this, n, e, r);
        };
      }),
      t(
        n(function(t, n) {
          Object.defineProperty(n, '__esModule', { value: !0 });
        })
      ),
      j(j.P + j.R, 'Promise', {
        finally: function(t) {
          var n = Ue(this, r.Promise || e.Promise),
            i = 'function' == typeof t;
          return this.then(
            i
              ? function(e) {
                  return hr(n, t()).then(function() {
                    return e;
                  });
                }
              : t,
            i
              ? function(e) {
                  return hr(n, t()).then(function() {
                    throw e;
                  });
                }
              : t
          );
        }
      });
    r.Promise.finally;
    t(
      n(function(t, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
      })
    ),
      t(
        n(function(t, n) {
          Object.defineProperty(n, '__esModule', { value: !0 });
        })
      );
  })();
  self.fetch ||
    (self.fetch = function(t, n) {
      return (
        (n = n || {}),
        new Promise(function(e, r) {
          var i = new XMLHttpRequest(),
            o = [],
            u = [],
            c = {},
            f = function() {
              return {
                ok: 2 == ((i.status / 100) | 0),
                statusText: i.statusText,
                status: i.status,
                url: i.responseURL,
                text: function() {
                  return Promise.resolve(i.responseText);
                },
                json: function() {
                  return Promise.resolve(JSON.parse(i.responseText));
                },
                blob: function() {
                  return Promise.resolve(new Blob([i.response]));
                },
                clone: f,
                headers: {
                  keys: function() {
                    return o;
                  },
                  entries: function() {
                    return u;
                  },
                  get: function(t) {
                    return c[t.toLowerCase()];
                  },
                  has: function(t) {
                    return t.toLowerCase() in c;
                  }
                }
              };
            };
          for (var a in (i.open(n.method || 'get', t, !0),
          (i.onload = function() {
            i
              .getAllResponseHeaders()
              .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(t, n, e) {
                o.push((n = n.toLowerCase())),
                  u.push([n, e]),
                  (c[n] = c[n] ? c[n] + ',' + e : e);
              }),
              e(f());
          }),
          (i.onerror = r),
          (i.withCredentials = 'include' == n.credentials),
          n.headers))
            i.setRequestHeader(a, n.headers[a]);
          i.send(n.body || null);
        })
      );
    });
  var t = function(n, e) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(t, n) {
          t.__proto__ = n;
        }) ||
      function(t, n) {
        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
      })(n, e);
  };
  var n =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  !(function(t) {
    function n(t) {
      if ('utf-8' !== (t = void 0 === t ? 'utf-8' : t))
        throw new RangeError(
          "Failed to construct 'TextEncoder': The encoding label provided ('" +
            t +
            "') is invalid."
        );
    }
    function e(t, n) {
      if (
        ((n = void 0 === n ? { fatal: !1 } : n),
        'utf-8' !== (t = void 0 === t ? 'utf-8' : t))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            t +
            "') is invalid."
        );
      if (n.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    if (t.TextEncoder && t.TextDecoder) return !1;
    Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      (n.prototype.encode = function(t, n) {
        if ((n = void 0 === n ? { stream: !1 } : n).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        n = 0;
        for (
          var e = t.length,
            r = 0,
            i = Math.max(32, e + (e >> 1) + 7),
            o = new Uint8Array((i >> 3) << 3);
          n < e;

        ) {
          var u = t.charCodeAt(n++);
          if (55296 <= u && 56319 >= u) {
            if (n < e) {
              var c = t.charCodeAt(n);
              56320 == (64512 & c) &&
                (++n, (u = ((1023 & u) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= u && 56319 >= u) continue;
          }
          if (
            (r + 4 > o.length &&
              ((i += 8),
              (i = ((i *= 1 + (n / t.length) * 2) >> 3) << 3),
              (c = new Uint8Array(i)).set(o),
              (o = c)),
            0 == (4294967168 & u))
          )
            o[r++] = u;
          else {
            if (0 == (4294965248 & u)) o[r++] = ((u >> 6) & 31) | 192;
            else if (0 == (4294901760 & u))
              (o[r++] = ((u >> 12) & 15) | 224),
                (o[r++] = ((u >> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & u)) continue;
              (o[r++] = ((u >> 18) & 7) | 240),
                (o[r++] = ((u >> 12) & 63) | 128),
                (o[r++] = ((u >> 6) & 63) | 128);
            }
            o[r++] = (63 & u) | 128;
          }
        }
        return o.slice(0, r);
      }),
      Object.defineProperty(e.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(e.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(e.prototype, 'ignoreBOM', { value: !1 }),
      (e.prototype.decode = function(t, n) {
        if ((n = void 0 === n ? { stream: !1 } : n).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        n = 0;
        for (var e = (t = new Uint8Array(t)).length, r = []; n < e; ) {
          var i = t[n++];
          if (0 === i) break;
          if (0 == (128 & i)) r.push(i);
          else if (192 == (224 & i)) {
            var o = 63 & t[n++];
            r.push(((31 & i) << 6) | o);
          } else if (224 == (240 & i)) {
            o = 63 & t[n++];
            var u = 63 & t[n++];
            r.push(((31 & i) << 12) | (o << 6) | u);
          } else if (240 == (248 & i)) {
            65535 <
              (i =
                ((7 & i) << 18) |
                ((o = 63 & t[n++]) << 12) |
                ((u = 63 & t[n++]) << 6) |
                (63 & t[n++])) &&
              ((i -= 65536),
              r.push(((i >>> 10) & 1023) | 55296),
              (i = 56320 | (1023 & i))),
              r.push(i);
          }
        }
        return String.fromCharCode.apply(null, r);
      }),
      (t.TextEncoder = n),
      (t.TextDecoder = e);
  })('undefined' != typeof window ? window : n);
  !(function() {
    for (var t = [], n = 0; n < 256; ++n)
      t.push('%' + ((n < 16 ? '0' : '') + n.toString(16)).toUpperCase());
  })();
  var e,
    r,
    i = ((function(t, e) {
      var r =
        (n && n.__assign) ||
        Object.assign ||
        function(t) {
          for (var n, e = 1, r = arguments.length; e < r; e++)
            for (var i in (n = arguments[e]))
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          return t;
        };
      function i(t, n) {
        if (!n) return '';
        var e = '; ' + t;
        return !0 === n ? e : e + '=' + n;
      }
      function o(t, n, e) {
        return (
          encodeURIComponent(t)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29') +
          '=' +
          encodeURIComponent(n).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          ) +
          (function(t) {
            if ('number' == typeof t.expires) {
              var n = new Date();
              n.setMilliseconds(n.getMilliseconds() + 864e5 * t.expires),
                (t.expires = n);
            }
            return (
              i('Expires', t.expires ? t.expires.toUTCString() : '') +
              i('Domain', t.domain) +
              i('Path', t.path) +
              i('Secure', t.secure) +
              i('SameSite', t.sameSite)
            );
          })(e)
        );
      }
      function u(t) {
        for (
          var n = {}, e = t ? t.split('; ') : [], r = /(%[0-9A-Z]{2})+/g, i = 0;
          i < e.length;
          i++
        ) {
          var o = e[i].split('='),
            u = o.slice(1).join('=');
          '"' === u.charAt(0) && (u = u.slice(1, -1));
          try {
            n[o[0].replace(r, decodeURIComponent)] = u.replace(
              r,
              decodeURIComponent
            );
          } catch (t) {}
        }
        return n;
      }
      function c() {
        return u(document.cookie);
      }
      function f(t, n, e) {
        document.cookie = o(t, n, r({ path: '/' }, e));
      }
      (e.__esModule = !0),
        (e.encode = o),
        (e.parse = u),
        (e.getAll = c),
        (e.get = function(t) {
          return c()[t];
        }),
        (e.set = f),
        (e.remove = function(t, n) {
          f(t, '', r({}, n, { expires: -1 }));
        });
    })((e = { exports: {} }), e.exports),
    e.exports);
  (r = i) &&
    r.__esModule &&
    Object.prototype.hasOwnProperty.call(r, 'default') &&
    r.default;
  i.encode,
    i.parse,
    i.getAll,
    i.get,
    i.set,
    i.remove,
    (function(n) {
      function e(t, e, r) {
        var i = n.call(this, e) || this;
        return (i.error = t), (i.error_description = e), (i.state = r), i;
      }
      (function(n, e) {
        function r() {
          this.constructor = n;
        }
        t(n, e),
          (n.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, n);
    })(Error);
  if (
    (!window.crypto && window.msCrypto && (window.crypto = window.msCrypto),
    !window.crypto)
  )
    throw new Error(
      'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
    );
});
//# sourceMappingURL=auth0-spa-js.production.legacy.js.map
