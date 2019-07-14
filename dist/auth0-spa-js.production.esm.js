function e(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (r[o] = e[o]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && (r[o[i]] = e[o[i]]);
  }
  return r;
}
function t(e, t, r, o) {
  return new (r || (r = Promise))(function(i, n) {
    function a(e) {
      try {
        c(o.next(e));
      } catch (e) {
        n(e);
      }
    }
    function s(e) {
      try {
        c(o.throw(e));
      } catch (e) {
        n(e);
      }
    }
    function c(e) {
      e.done
        ? i(e.value)
        : new r(function(t) {
            t(e.value);
          }).then(a, s);
    }
    c((o = o.apply(e, t || [])).next());
  });
}
var r =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
!(function(e) {
  function t(e) {
    if ('utf-8' !== (e = void 0 === e ? 'utf-8' : e))
      throw new RangeError(
        "Failed to construct 'TextEncoder': The encoding label provided ('" +
          e +
          "') is invalid."
      );
  }
  function r(e, t) {
    if (
      ((t = void 0 === t ? { fatal: !1 } : t),
      'utf-8' !== (e = void 0 === e ? 'utf-8' : e))
    )
      throw new RangeError(
        "Failed to construct 'TextDecoder': The encoding label provided ('" +
          e +
          "') is invalid."
      );
    if (t.fatal)
      throw Error(
        "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
      );
  }
  if (e.TextEncoder && e.TextDecoder) return !1;
  Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
    (t.prototype.encode = function(e, t) {
      if ((t = void 0 === t ? { stream: !1 } : t).stream)
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      t = 0;
      for (
        var r = e.length,
          o = 0,
          i = Math.max(32, r + (r >> 1) + 7),
          n = new Uint8Array((i >> 3) << 3);
        t < r;

      ) {
        var a = e.charCodeAt(t++);
        if (55296 <= a && 56319 >= a) {
          if (t < r) {
            var s = e.charCodeAt(t);
            56320 == (64512 & s) &&
              (++t, (a = ((1023 & a) << 10) + (1023 & s) + 65536));
          }
          if (55296 <= a && 56319 >= a) continue;
        }
        if (
          (o + 4 > n.length &&
            ((i += 8),
            (i = ((i *= 1 + (t / e.length) * 2) >> 3) << 3),
            (s = new Uint8Array(i)).set(n),
            (n = s)),
          0 == (4294967168 & a))
        )
          n[o++] = a;
        else {
          if (0 == (4294965248 & a)) n[o++] = ((a >> 6) & 31) | 192;
          else if (0 == (4294901760 & a))
            (n[o++] = ((a >> 12) & 15) | 224), (n[o++] = ((a >> 6) & 63) | 128);
          else {
            if (0 != (4292870144 & a)) continue;
            (n[o++] = ((a >> 18) & 7) | 240),
              (n[o++] = ((a >> 12) & 63) | 128),
              (n[o++] = ((a >> 6) & 63) | 128);
          }
          n[o++] = (63 & a) | 128;
        }
      }
      return n.slice(0, o);
    }),
    Object.defineProperty(r.prototype, 'encoding', { value: 'utf-8' }),
    Object.defineProperty(r.prototype, 'fatal', { value: !1 }),
    Object.defineProperty(r.prototype, 'ignoreBOM', { value: !1 }),
    (r.prototype.decode = function(e, t) {
      if ((t = void 0 === t ? { stream: !1 } : t).stream)
        throw Error("Failed to decode: the 'stream' option is unsupported.");
      t = 0;
      for (var r = (e = new Uint8Array(e)).length, o = []; t < r; ) {
        var i = e[t++];
        if (0 === i) break;
        if (0 == (128 & i)) o.push(i);
        else if (192 == (224 & i)) {
          var n = 63 & e[t++];
          o.push(((31 & i) << 6) | n);
        } else if (224 == (240 & i)) {
          n = 63 & e[t++];
          var a = 63 & e[t++];
          o.push(((31 & i) << 12) | (n << 6) | a);
        } else if (240 == (248 & i)) {
          65535 <
            (i =
              ((7 & i) << 18) |
              ((n = 63 & e[t++]) << 12) |
              ((a = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((i -= 65536),
            o.push(((i >>> 10) & 1023) | 55296),
            (i = 56320 | (1023 & i))),
            o.push(i);
        }
      }
      return String.fromCharCode.apply(null, o);
    }),
    (e.TextEncoder = t),
    (e.TextDecoder = r);
})('undefined' != typeof window ? window : r);
var o = Object.prototype.hasOwnProperty,
  i = (function() {
    for (var e = [], t = 0; t < 256; ++t)
      e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
    return e;
  })(),
  n = function(e, t) {
    for (
      var r = t && t.plainObjects ? Object.create(null) : {}, o = 0;
      o < e.length;
      ++o
    )
      void 0 !== e[o] && (r[o] = e[o]);
    return r;
  },
  a = {
    arrayToObject: n,
    assign: function(e, t) {
      return Object.keys(t).reduce(function(e, r) {
        return (e[r] = t[r]), e;
      }, e);
    },
    combine: function(e, t) {
      return [].concat(e, t);
    },
    compact: function(e) {
      for (
        var t = [{ obj: { o: e }, prop: 'o' }], r = [], o = 0;
        o < t.length;
        ++o
      )
        for (
          var i = t[o], n = i.obj[i.prop], a = Object.keys(n), s = 0;
          s < a.length;
          ++s
        ) {
          var c = a[s],
            d = n[c];
          'object' == typeof d &&
            null !== d &&
            -1 === r.indexOf(d) &&
            (t.push({ obj: n, prop: c }), r.push(d));
        }
      return (
        (function(e) {
          for (; e.length > 1; ) {
            var t = e.pop(),
              r = t.obj[t.prop];
            if (Array.isArray(r)) {
              for (var o = [], i = 0; i < r.length; ++i)
                void 0 !== r[i] && o.push(r[i]);
              t.obj[t.prop] = o;
            }
          }
        })(t),
        e
      );
    },
    decode: function(e, t, r) {
      var o = e.replace(/\+/g, ' ');
      if ('iso-8859-1' === r) return o.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(o);
      } catch (e) {
        return o;
      }
    },
    encode: function(e, t, r) {
      if (0 === e.length) return e;
      var o = 'string' == typeof e ? e : String(e);
      if ('iso-8859-1' === r)
        return escape(o).replace(/%u[0-9a-f]{4}/gi, function(e) {
          return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
        });
      for (var n = '', a = 0; a < o.length; ++a) {
        var s = o.charCodeAt(a);
        45 === s ||
        46 === s ||
        95 === s ||
        126 === s ||
        (s >= 48 && s <= 57) ||
        (s >= 65 && s <= 90) ||
        (s >= 97 && s <= 122)
          ? (n += o.charAt(a))
          : s < 128
          ? (n += i[s])
          : s < 2048
          ? (n += i[192 | (s >> 6)] + i[128 | (63 & s)])
          : s < 55296 || s >= 57344
          ? (n +=
              i[224 | (s >> 12)] + i[128 | ((s >> 6) & 63)] + i[128 | (63 & s)])
          : ((a += 1),
            (s = 65536 + (((1023 & s) << 10) | (1023 & o.charCodeAt(a)))),
            (n +=
              i[240 | (s >> 18)] +
              i[128 | ((s >> 12) & 63)] +
              i[128 | ((s >> 6) & 63)] +
              i[128 | (63 & s)]));
      }
      return n;
    },
    isBuffer: function(e) {
      return (
        null != e &&
        !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
      );
    },
    isRegExp: function(e) {
      return '[object RegExp]' === Object.prototype.toString.call(e);
    },
    merge: function e(t, r, i) {
      if (!r) return t;
      if ('object' != typeof r) {
        if (Array.isArray(t)) t.push(r);
        else {
          if ('object' != typeof t) return [t, r];
          ((i && (i.plainObjects || i.allowPrototypes)) ||
            !o.call(Object.prototype, r)) &&
            (t[r] = !0);
        }
        return t;
      }
      if ('object' != typeof t) return [t].concat(r);
      var a = t;
      return (
        Array.isArray(t) && !Array.isArray(r) && (a = n(t, i)),
        Array.isArray(t) && Array.isArray(r)
          ? (r.forEach(function(r, n) {
              o.call(t, n)
                ? t[n] && 'object' == typeof t[n]
                  ? (t[n] = e(t[n], r, i))
                  : t.push(r)
                : (t[n] = r);
            }),
            t)
          : Object.keys(r).reduce(function(t, n) {
              var a = r[n];
              return o.call(t, n) ? (t[n] = e(t[n], a, i)) : (t[n] = a), t;
            }, a)
      );
    }
  },
  s = String.prototype.replace,
  c = /%20/g,
  d = {
    default: 'RFC3986',
    formatters: {
      RFC1738: function(e) {
        return s.call(e, c, '+');
      },
      RFC3986: function(e) {
        return e;
      }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
  },
  l = {
    brackets: function(e) {
      return e + '[]';
    },
    indices: function(e, t) {
      return e + '[' + t + ']';
    },
    repeat: function(e) {
      return e;
    }
  },
  u = Array.isArray,
  p = Array.prototype.push,
  f = function(e, t) {
    p.apply(e, u(t) ? t : [t]);
  },
  h = Date.prototype.toISOString,
  y = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: a.encode,
    encodeValuesOnly: !1,
    indices: !1,
    serializeDate: function(e) {
      return h.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  g = function e(t, r, o, i, n, s, c, d, l, u, p, h, g) {
    var m = t;
    if (
      ('function' == typeof c ? (m = c(r, m)) : m instanceof Date && (m = u(m)),
      null === m)
    ) {
      if (i) return s && !h ? s(r, y.encoder, g) : r;
      m = '';
    }
    if (
      'string' == typeof m ||
      'number' == typeof m ||
      'boolean' == typeof m ||
      a.isBuffer(m)
    )
      return s
        ? [p(h ? r : s(r, y.encoder, g)) + '=' + p(s(m, y.encoder, g))]
        : [p(r) + '=' + p(String(m))];
    var v,
      w = [];
    if (void 0 === m) return w;
    if (Array.isArray(c)) v = c;
    else {
      var b = Object.keys(m);
      v = d ? b.sort(d) : b;
    }
    for (var _ = 0; _ < v.length; ++_) {
      var O = v[_];
      (n && null === m[O]) ||
        (Array.isArray(m)
          ? f(w, e(m[O], o(r, O), o, i, n, s, c, d, l, u, p, h, g))
          : f(
              w,
              e(
                m[O],
                r + (l ? '.' + O : '[' + O + ']'),
                o,
                i,
                n,
                s,
                c,
                d,
                l,
                u,
                p,
                h,
                g
              )
            ));
    }
    return w;
  },
  m = Object.prototype.hasOwnProperty,
  v = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: !1,
    decoder: a.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  w = function(e) {
    return e.replace(/&#(\d+);/g, function(e, t) {
      return String.fromCharCode(parseInt(t, 10));
    });
  },
  b = function(e, t, r) {
    if (e) {
      var o = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        i = /(\[[^[\]]*])/g,
        n = /(\[[^[\]]*])/.exec(o),
        a = n ? o.slice(0, n.index) : o,
        s = [];
      if (a) {
        if (
          !r.plainObjects &&
          m.call(Object.prototype, a) &&
          !r.allowPrototypes
        )
          return;
        s.push(a);
      }
      for (var c = 0; null !== (n = i.exec(o)) && c < r.depth; ) {
        if (
          ((c += 1),
          !r.plainObjects &&
            m.call(Object.prototype, n[1].slice(1, -1)) &&
            !r.allowPrototypes)
        )
          return;
        s.push(n[1]);
      }
      return (
        n && s.push('[' + o.slice(n.index) + ']'),
        (function(e, t, r) {
          for (var o = t, i = e.length - 1; i >= 0; --i) {
            var n,
              a = e[i];
            if ('[]' === a && r.parseArrays) n = [].concat(o);
            else {
              n = r.plainObjects ? Object.create(null) : {};
              var s =
                  '[' === a.charAt(0) && ']' === a.charAt(a.length - 1)
                    ? a.slice(1, -1)
                    : a,
                c = parseInt(s, 10);
              r.parseArrays || '' !== s
                ? !isNaN(c) &&
                  a !== s &&
                  String(c) === s &&
                  c >= 0 &&
                  r.parseArrays &&
                  c <= r.arrayLimit
                  ? ((n = [])[c] = o)
                  : (n[s] = o)
                : (n = { 0: o });
            }
            o = n;
          }
          return o;
        })(s, t, r)
      );
    }
  },
  _ = function(e, t) {
    var r = t ? a.assign({}, t) : {};
    if (
      null !== r.decoder &&
      void 0 !== r.decoder &&
      'function' != typeof r.decoder
    )
      throw new TypeError('Decoder has to be a function.');
    if (
      ((r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix),
      (r.delimiter =
        'string' == typeof r.delimiter || a.isRegExp(r.delimiter)
          ? r.delimiter
          : v.delimiter),
      (r.depth = 'number' == typeof r.depth ? r.depth : v.depth),
      (r.arrayLimit =
        'number' == typeof r.arrayLimit ? r.arrayLimit : v.arrayLimit),
      (r.parseArrays = !1 !== r.parseArrays),
      (r.decoder = 'function' == typeof r.decoder ? r.decoder : v.decoder),
      (r.allowDots = void 0 === r.allowDots ? v.allowDots : !!r.allowDots),
      (r.plainObjects =
        'boolean' == typeof r.plainObjects ? r.plainObjects : v.plainObjects),
      (r.allowPrototypes =
        'boolean' == typeof r.allowPrototypes
          ? r.allowPrototypes
          : v.allowPrototypes),
      (r.parameterLimit =
        'number' == typeof r.parameterLimit
          ? r.parameterLimit
          : v.parameterLimit),
      (r.strictNullHandling =
        'boolean' == typeof r.strictNullHandling
          ? r.strictNullHandling
          : v.strictNullHandling),
      void 0 !== r.charset &&
        'utf-8' !== r.charset &&
        'iso-8859-1' !== r.charset)
    )
      throw new Error(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    if (
      (void 0 === r.charset && (r.charset = v.charset), '' === e || null == e)
    )
      return r.plainObjects ? Object.create(null) : {};
    for (
      var o =
          'string' == typeof e
            ? (function(e, t) {
                var r,
                  o = {},
                  i = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                  n = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                  s = i.split(t.delimiter, n),
                  c = -1,
                  d = t.charset;
                if (t.charsetSentinel)
                  for (r = 0; r < s.length; ++r)
                    0 === s[r].indexOf('utf8=') &&
                      ('utf8=%E2%9C%93' === s[r]
                        ? (d = 'utf-8')
                        : 'utf8=%26%2310003%3B' === s[r] && (d = 'iso-8859-1'),
                      (c = r),
                      (r = s.length));
                for (r = 0; r < s.length; ++r)
                  if (r !== c) {
                    var l,
                      u,
                      p = s[r],
                      f = p.indexOf(']='),
                      h = -1 === f ? p.indexOf('=') : f + 1;
                    -1 === h
                      ? ((l = t.decoder(p, v.decoder, d)),
                        (u = t.strictNullHandling ? null : ''))
                      : ((l = t.decoder(p.slice(0, h), v.decoder, d)),
                        (u = t.decoder(p.slice(h + 1), v.decoder, d))),
                      u &&
                        t.interpretNumericEntities &&
                        'iso-8859-1' === d &&
                        (u = w(u)),
                      m.call(o, l) ? (o[l] = a.combine(o[l], u)) : (o[l] = u);
                  }
                return o;
              })(e, r)
            : e,
        i = r.plainObjects ? Object.create(null) : {},
        n = Object.keys(o),
        s = 0;
      s < n.length;
      ++s
    ) {
      var c = n[s],
        d = b(c, o[c], r);
      i = a.merge(i, d, r);
    }
    return a.compact(i);
  },
  O = function(e, t) {
    var r = e,
      o = t ? a.assign({}, t) : {};
    if (
      null !== o.encoder &&
      void 0 !== o.encoder &&
      'function' != typeof o.encoder
    )
      throw new TypeError('Encoder has to be a function.');
    var i = void 0 === o.delimiter ? y.delimiter : o.delimiter,
      n =
        'boolean' == typeof o.strictNullHandling
          ? o.strictNullHandling
          : y.strictNullHandling,
      s = 'boolean' == typeof o.skipNulls ? o.skipNulls : y.skipNulls,
      c = 'boolean' == typeof o.encode ? o.encode : y.encode,
      u = 'function' == typeof o.encoder ? o.encoder : y.encoder,
      p = 'function' == typeof o.sort ? o.sort : null,
      h = void 0 === o.allowDots ? y.allowDots : !!o.allowDots,
      m =
        'function' == typeof o.serializeDate
          ? o.serializeDate
          : y.serializeDate,
      v =
        'boolean' == typeof o.encodeValuesOnly
          ? o.encodeValuesOnly
          : y.encodeValuesOnly,
      w = o.charset || y.charset;
    if (
      void 0 !== o.charset &&
      'utf-8' !== o.charset &&
      'iso-8859-1' !== o.charset
    )
      throw new Error(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    if (void 0 === o.format) o.format = d.default;
    else if (!Object.prototype.hasOwnProperty.call(d.formatters, o.format))
      throw new TypeError('Unknown format option provided.');
    var b,
      _,
      O = d.formatters[o.format];
    'function' == typeof o.filter
      ? (r = (_ = o.filter)('', r))
      : Array.isArray(o.filter) && (b = _ = o.filter);
    var E,
      j = [];
    if ('object' != typeof r || null === r) return '';
    E =
      o.arrayFormat in l
        ? o.arrayFormat
        : 'indices' in o
        ? o.indices
          ? 'indices'
          : 'repeat'
        : 'indices';
    var A = l[E];
    b || (b = Object.keys(r)), p && b.sort(p);
    for (var C = 0; C < b.length; ++C) {
      var x = b[C];
      (s && null === r[x]) ||
        f(j, g(r[x], x, A, n, s, c ? u : null, _, p, h, m, O, v, w));
    }
    var T = j.join(i),
      S = !0 === o.addQueryPrefix ? '?' : '';
    return (
      o.charsetSentinel &&
        (S += 'iso-8859-1' === w ? 'utf8=%26%2310003%3B&' : 'utf8=%E2%9C%93&'),
      T.length > 0 ? S + T : ''
    );
  };
const E = { error: 'timeout', error_description: 'Timeout' },
  j = (...e) => {
    const t = e.filter(Boolean).join();
    return Array.from(new Set(t.replace(/\s/g, ',').split(',')))
      .join(' ')
      .trim();
  },
  A = e => {
    var t = _(e);
    return Object.assign({}, t, { expires_in: parseInt(t.expires_in) });
  },
  C = (e, t) =>
    new Promise((r, o) => {
      var i = window.document.createElement('iframe');
      i.setAttribute('width', '0'),
        i.setAttribute('height', '0'),
        (i.style.display = 'none');
      const n = setTimeout(() => {
          o(E), window.document.body.removeChild(i);
        }, 6e4),
        a = function(e) {
          e.origin == t &&
            e.data &&
            'authorization_response' === e.data.type &&
            (e.source.close(),
            e.data.response.error ? o(e.data.response) : r(e.data.response),
            clearTimeout(n),
            window.removeEventListener('message', a, !1),
            window.document.body.removeChild(i));
        };
      window.addEventListener('message', a, !1),
        window.document.body.appendChild(i),
        i.setAttribute('src', e);
    }),
  x = () => {
    const e = window.open(
      '',
      'auth0:authorize:popup',
      'left=100,top=100,width=400,height=600,resizable,scrollbars=yes,status=1'
    );
    if (!e) throw new Error('Could not open popup');
    return e;
  },
  T = (e, t) => (
    (e.location.href = t),
    new Promise((t, r) => {
      const o = setTimeout(() => {
        r(E);
      }, 6e4);
      window.addEventListener('message', i => {
        if (i.data && 'authorization_response' === i.data.type) {
          if ((clearTimeout(o), e.close(), i.data.response.error))
            return r(i.data.response);
          t(i.data.response);
        }
      });
    })
  ),
  S = () => {
    const e =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-_~.';
    let t = '';
    return (
      crypto
        .getRandomValues(new Uint8Array(43))
        .forEach(r => (t += e[r % e.length])),
      t
    );
  },
  U = e => btoa(e),
  P = e => O(e),
  k = e =>
    window.crypto.subtle.digest(
      { name: 'SHA-256' },
      new TextEncoder().encode(e)
    ),
  D = e =>
    (e =>
      decodeURIComponent(
        atob(e)
          .split('')
          .map(e => '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      ))(e.replace(/_/g, '/').replace(/-/g, '+')),
  F = e =>
    (e => {
      const t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[\+\/=]/g, e => t[e]);
    })(window.btoa(String.fromCharCode(...Array.from(new Uint8Array(e))))),
  L = r =>
    t(void 0, void 0, void 0, function*() {
      var { baseUrl: t } = r,
        o = e(r, ['baseUrl']);
      return yield fetch(`${t}/oauth/token`, {
        method: 'POST',
        body: JSON.stringify(
          Object.assign(
            {
              grant_type: 'authorization_code',
              redirect_uri: window.location.origin
            },
            o
          )
        ),
        headers: { 'Content-type': 'application/json' }
      }).then(e => e.json());
    }),
  I = e => `${e.audience}::${e.scope}`,
  R = (e, t) => {
    const r = (new Date(1e3 * t).getTime() - new Date().getTime()) / 1e3;
    return 1e3 * Math.min(e, r);
  };
class N {
  constructor() {
    this.cache = {};
  }
  save(e) {
    const t = I(e);
    this.cache[t] = e;
    const r = R(e.expires_in, e.decodedToken.claims.exp);
    setTimeout(() => {
      delete this.cache[t];
    }, r);
  }
  get(e) {
    return this.cache[I(e)];
  }
}
var z,
  B,
  $ = ((function(e, t) {
    var o =
      (r && r.__assign) ||
      Object.assign ||
      function(e) {
        for (var t, r = 1, o = arguments.length; r < o; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      };
    function i(e, t) {
      if (!t) return '';
      var r = '; ' + e;
      return !0 === t ? r : r + '=' + t;
    }
    function n(e, t, r) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function(e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            i('Expires', e.expires ? e.expires.toUTCString() : '') +
            i('Domain', e.domain) +
            i('Path', e.path) +
            i('Secure', e.secure) +
            i('SameSite', e.sameSite)
          );
        })(r)
      );
    }
    function a(e) {
      for (
        var t = {}, r = e ? e.split('; ') : [], o = /(%[0-9A-Z]{2})+/g, i = 0;
        i < r.length;
        i++
      ) {
        var n = r[i].split('='),
          a = n.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[n[0].replace(o, decodeURIComponent)] = a.replace(
            o,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function s() {
      return a(document.cookie);
    }
    function c(e, t, r) {
      document.cookie = n(e, t, o({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = n),
      (t.parse = a),
      (t.getAll = s),
      (t.get = function(e) {
        return s()[e];
      }),
      (t.set = c),
      (t.remove = function(e, t) {
        c(e, '', o({}, t, { expires: -1 }));
      });
  })((z = { exports: {} }), z.exports),
  z.exports);
(B = $) &&
  B.__esModule &&
  Object.prototype.hasOwnProperty.call(B, 'default') &&
  B.default;
$.encode, $.parse;
var H = $.getAll,
  M = $.get,
  J = $.set,
  Q = $.remove;
const V = () => Object.keys(H() || {}),
  W = e => {
    const t = M(e);
    if (void 0 !== t) return JSON.parse(t);
  },
  q = (e, t, r) => {
    J(e, JSON.stringify(t), { expires: r.daysUntilExpire });
  },
  Z = e => {
    Q(e);
  },
  G = 'a0.spajs.txs.',
  K = e => `${G}${e}`;
class X {
  constructor() {
    (this.transactions = {}),
      V()
        .filter(e => e.startsWith(G))
        .forEach(e => {
          const t = e.replace(G, '');
          this.transactions[t] = W(e);
        });
  }
  create(e, t) {
    (this.transactions[e] = t), q(K(e), t, { daysUntilExpire: 1 });
  }
  get(e) {
    return this.transactions[e];
  }
  remove(e) {
    delete this.transactions[e], Z(K(e));
  }
}
const Y = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm'
  ],
  ee = e => {
    const t = (e => {
      const [t, r, o] = e.split('.'),
        i = JSON.parse(D(r)),
        n = {},
        a = {};
      return (
        Object.keys(i).forEach(e => {
          (n[e] = i[e]), Y.includes(e) || (a[e] = i[e]);
        }),
        {
          encoded: { header: t, payload: r, signature: o },
          header: JSON.parse(D(t)),
          claims: n,
          user: a
        }
      );
    })(e.id_token);
    if (t.claims.iss !== e.iss) throw new Error('Invalid issuer');
    if (t.claims.aud !== e.aud) throw new Error('Invalid audience');
    if ('RS256' !== t.header.alg) throw new Error('Invalid algorithm');
    if (t.claims.nonce !== e.nonce) throw new Error('Invalid nonce');
    const r = new Date(),
      o = new Date(0),
      i = new Date(0),
      n = new Date(0),
      a = e.leeway || 60;
    if (
      (o.setUTCSeconds(t.claims.exp + a),
      i.setUTCSeconds(t.claims.iat - a),
      n.setUTCSeconds(t.claims.nbf - a),
      r > o)
    )
      throw new Error('id_token expired');
    if (r < i)
      throw new Error('id_token was issued in the future (invalid iat)');
    if (void 0 !== t.claims.nbf && r < n)
      throw new Error('token is not yet valid (invalid notBefore)');
    return t;
  };
class te extends Error {
  constructor(e, t, r) {
    super(t), (this.error = e), (this.error_description = t), (this.state = r);
  }
}
var re = '1.0.2';
class oe {
  constructor(e) {
    (this.options = e),
      (this.DEFAULT_SCOPE = 'openid profile email'),
      (this.cache = new N()),
      (this.transactionManager = new X()),
      (this.domainUrl = `https://${this.options.domain}`);
  }
  _url(e) {
    const t = encodeURIComponent(
      btoa(JSON.stringify({ name: 'auth0-spa-js', version: re }))
    );
    return `${this.domainUrl}${e}&auth0Client=${t}`;
  }
  _getParams(t, r, o, i, n) {
    const a = e(this.options, ['domain']);
    return Object.assign({}, a, t, {
      scope: j(this.DEFAULT_SCOPE, this.options.scope, t.scope),
      response_type: 'code',
      response_mode: 'query',
      state: r,
      nonce: o,
      redirect_uri: this.options.redirect_uri || n,
      code_challenge: i,
      code_challenge_method: 'S256'
    });
  }
  _authorizeUrl(e) {
    return this._url(`/authorize?${P(e)}`);
  }
  _verifyIdToken(e, t) {
    return ee({
      iss: `${this.domainUrl}/`,
      aud: this.options.client_id,
      id_token: e,
      nonce: t,
      leeway: this.options.leeway
    });
  }
  loginWithPopup(r) {
    return t(this, void 0, void 0, function*() {
      const t = yield x(),
        o = e(r, []),
        i = U(S()),
        n = S(),
        a = S(),
        s = yield k(a),
        c = F(s),
        d = this._getParams(o, i, n, c, window.location.origin),
        l = this._authorizeUrl(
          Object.assign({}, d, { response_mode: 'web_message' })
        ),
        u = yield T(t, l);
      if (i !== u.state) throw new Error('Invalid state');
      const p = yield L({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier: a,
          code: u.code
        }),
        f = this._verifyIdToken(p.id_token, n),
        h = Object.assign({}, p, {
          decodedToken: f,
          scope: d.scope,
          audience: d.audience || 'default'
        });
      this.cache.save(h),
        q('auth0.is.authenticated', !0, { daysUntilExpire: 1 });
    });
  }
  getUser(
    e = {
      audience: this.options.audience || 'default',
      scope: this.options.scope || this.DEFAULT_SCOPE
    }
  ) {
    return t(this, void 0, void 0, function*() {
      e.scope = j(this.DEFAULT_SCOPE, e.scope);
      const t = this.cache.get(e);
      return t && t.decodedToken.user;
    });
  }
  getIdToken(
    e = {
      audience: this.options.audience || 'default',
      scope: this.options.scope || this.DEFAULT_SCOPE
    }
  ) {
    return t(this, void 0, void 0, function*() {
      e.scope = j(this.DEFAULT_SCOPE, e.scope);
      const t = this.cache.get(e);
      return t && t.id_token;
    });
  }
  getIdTokenClaims(
    e = {
      audience: this.options.audience || 'default',
      scope: this.options.scope || this.DEFAULT_SCOPE
    }
  ) {
    return t(this, void 0, void 0, function*() {
      e.scope = j(this.DEFAULT_SCOPE, e.scope);
      const t = this.cache.get(e);
      return t && t.decodedToken.claims;
    });
  }
  loginWithRedirect(r) {
    return t(this, void 0, void 0, function*() {
      const { redirect_uri: t, appState: o } = r,
        i = e(r, ['redirect_uri', 'appState']),
        n = U(S()),
        a = S(),
        s = S(),
        c = yield k(s),
        d = F(c),
        l = this._getParams(i, n, a, d, t),
        u = this._authorizeUrl(l);
      this.transactionManager.create(n, {
        nonce: a,
        code_verifier: s,
        appState: o,
        scope: l.scope,
        audience: l.audience || 'default'
      }),
        window.location.assign(u);
    });
  }
  handleRedirectCallback() {
    return t(this, void 0, void 0, function*() {
      if (!window.location.search)
        throw new Error(
          'There are no query params available at `window.location.search`.'
        );
      const { state: e, code: t, error: r, error_description: o } = A(
        window.location.search.substr(1)
      );
      if (r) throw new te(r, o, e);
      const i = this.transactionManager.get(e);
      if (!i) throw new Error('Invalid state');
      this.transactionManager.remove(e);
      const n = yield L({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier: i.code_verifier,
          code: t
        }),
        a = this._verifyIdToken(n.id_token, i.nonce),
        s = Object.assign({}, n, {
          decodedToken: a,
          audience: i.audience,
          scope: i.scope
        });
      return (
        this.cache.save(s),
        q('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
        { appState: i.appState }
      );
    });
  }
  getTokenSilently(
    e = {
      audience: this.options.audience,
      scope: this.options.scope || this.DEFAULT_SCOPE,
      ignoreCache: !1
    }
  ) {
    return t(this, void 0, void 0, function*() {
      if (((e.scope = j(this.DEFAULT_SCOPE, e.scope)), !e.ignoreCache)) {
        const t = this.cache.get({
          scope: e.scope,
          audience: e.audience || 'default'
        });
        if (t) return t.access_token;
      }
      const t = U(S()),
        r = S(),
        o = S(),
        i = yield k(o),
        n = F(i),
        a = { audience: e.audience, scope: e.scope },
        s = this._getParams(a, t, r, n, window.location.origin),
        c = this._authorizeUrl(
          Object.assign({}, s, { prompt: 'none', response_mode: 'web_message' })
        ),
        d = yield C(c, this.domainUrl);
      if (t !== d.state) throw new Error('Invalid state');
      const l = yield L({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier: o,
          code: d.code
        }),
        u = this._verifyIdToken(l.id_token, r),
        p = Object.assign({}, l, {
          decodedToken: u,
          scope: s.scope,
          audience: s.audience || 'default'
        });
      return (
        this.cache.save(p),
        q('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
        l.access_token
      );
    });
  }
  getTokenWithPopup(
    e = {
      audience: this.options.audience,
      scope: this.options.scope || this.DEFAULT_SCOPE
    }
  ) {
    return t(this, void 0, void 0, function*() {
      return (
        (e.scope = j(this.DEFAULT_SCOPE, this.options.scope, e.scope)),
        yield this.loginWithPopup(e),
        this.cache.get({ scope: e.scope, audience: e.audience || 'default' })
          .access_token
      );
    });
  }
  isAuthenticated() {
    return t(this, void 0, void 0, function*() {
      return !!(yield this.getUser());
    });
  }
  logout(e = {}) {
    null !== e.client_id
      ? (e.client_id = e.client_id || this.options.client_id)
      : delete e.client_id,
      Z('auth0.is.authenticated');
    const t = this._url(`/v2/logout?${P(e)}`);
    window.location.assign(t);
  }
}
export default function(e) {
  return t(this, void 0, void 0, function*() {
    const t = new oe(e);
    if (!W('auth0.is.authenticated')) return t;
    try {
      yield t.getTokenSilently({
        audience: e.audience,
        scope: e.scope,
        ignoreCache: !0
      });
    } catch (e) {}
    return t;
  });
}
//# sourceMappingURL=auth0-spa-js.production.esm.js.map
