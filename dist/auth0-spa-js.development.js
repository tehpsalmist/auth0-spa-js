(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self), (global.createAuth0Client = factory()));
})(this, function() {
  'use strict';

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  var commonjsGlobal =
    typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function unwrapExports(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, 'default')
      ? x.default
      : x;
  }

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  (function(l) {
    function m(b) {
      b = void 0 === b ? 'utf-8' : b;
      if ('utf-8' !== b)
        throw new RangeError(
          "Failed to construct 'TextEncoder': The encoding label provided ('" +
            b +
            "') is invalid."
        );
    }
    function k(b, a) {
      b = void 0 === b ? 'utf-8' : b;
      a = void 0 === a ? { fatal: !1 } : a;
      if ('utf-8' !== b)
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            b +
            "') is invalid."
        );
      if (a.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    if (l.TextEncoder && l.TextDecoder) return !1;
    Object.defineProperty(m.prototype, 'encoding', { value: 'utf-8' });
    m.prototype.encode = function(b, a) {
      a = void 0 === a ? { stream: !1 } : a;
      if (a.stream)
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      a = 0;
      for (
        var h = b.length,
          f = 0,
          c = Math.max(32, h + (h >> 1) + 7),
          e = new Uint8Array((c >> 3) << 3);
        a < h;

      ) {
        var d = b.charCodeAt(a++);
        if (55296 <= d && 56319 >= d) {
          if (a < h) {
            var g = b.charCodeAt(a);
            56320 === (g & 64512) &&
              (++a, (d = ((d & 1023) << 10) + (g & 1023) + 65536));
          }
          if (55296 <= d && 56319 >= d) continue;
        }
        f + 4 > e.length &&
          ((c += 8),
          (c *= 1 + (a / b.length) * 2),
          (c = (c >> 3) << 3),
          (g = new Uint8Array(c)),
          g.set(e),
          (e = g));
        if (0 === (d & 4294967168)) e[f++] = d;
        else {
          if (0 === (d & 4294965248)) e[f++] = ((d >> 6) & 31) | 192;
          else if (0 === (d & 4294901760))
            (e[f++] = ((d >> 12) & 15) | 224), (e[f++] = ((d >> 6) & 63) | 128);
          else if (0 === (d & 4292870144))
            (e[f++] = ((d >> 18) & 7) | 240),
              (e[f++] = ((d >> 12) & 63) | 128),
              (e[f++] = ((d >> 6) & 63) | 128);
          else continue;
          e[f++] = (d & 63) | 128;
        }
      }
      return e.slice(0, f);
    };
    Object.defineProperty(k.prototype, 'encoding', { value: 'utf-8' });
    Object.defineProperty(k.prototype, 'fatal', { value: !1 });
    Object.defineProperty(k.prototype, 'ignoreBOM', { value: !1 });
    k.prototype.decode = function(b, a) {
      a = void 0 === a ? { stream: !1 } : a;
      if (a.stream)
        throw Error("Failed to decode: the 'stream' option is unsupported.");
      b = new Uint8Array(b);
      a = 0;
      for (var h = b.length, f = []; a < h; ) {
        var c = b[a++];
        if (0 === c) break;
        if (0 === (c & 128)) f.push(c);
        else if (192 === (c & 224)) {
          var e = b[a++] & 63;
          f.push(((c & 31) << 6) | e);
        } else if (224 === (c & 240)) {
          e = b[a++] & 63;
          var d = b[a++] & 63;
          f.push(((c & 31) << 12) | (e << 6) | d);
        } else if (240 === (c & 248)) {
          e = b[a++] & 63;
          d = b[a++] & 63;
          var g = b[a++] & 63;
          c = ((c & 7) << 18) | (e << 12) | (d << 6) | g;
          65535 < c &&
            ((c -= 65536),
            f.push(((c >>> 10) & 1023) | 55296),
            (c = 56320 | (c & 1023)));
          f.push(c);
        }
      }
      return String.fromCharCode.apply(null, f);
    };
    l.TextEncoder = m;
    l.TextDecoder = k;
  })(
    'undefined' !== typeof window
      ? window
      : 'undefined' !== typeof commonjsGlobal
      ? commonjsGlobal
      : commonjsGlobal
  );

  var has = Object.prototype.hasOwnProperty;

  var hexTable = (function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
  })();

  var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
      var item = queue.pop();
      var obj = item.obj[item.prop];

      if (Array.isArray(obj)) {
        var compacted = [];

        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== 'undefined') {
            compacted.push(obj[j]);
          }
        }

        item.obj[item.prop] = compacted;
      }
    }
  };

  var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== 'undefined') {
        obj[i] = source[i];
      }
    }

    return obj;
  };

  var merge = function merge(target, source, options) {
    if (!source) {
      return target;
    }

    if (typeof source !== 'object') {
      if (Array.isArray(target)) {
        target.push(source);
      } else if (typeof target === 'object') {
        if (
          (options && (options.plainObjects || options.allowPrototypes)) ||
          !has.call(Object.prototype, source)
        ) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }

      return target;
    }

    if (typeof target !== 'object') {
      return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
      mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
      source.forEach(function(item, i) {
        if (has.call(target, i)) {
          if (target[i] && typeof target[i] === 'object') {
            target[i] = merge(target[i], item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }

    return Object.keys(source).reduce(function(acc, key) {
      var value = source[key];

      if (has.call(acc, key)) {
        acc[key] = merge(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      return acc;
    }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };

  var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
      // unescape never throws, no try...catch needed:
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };

  var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
      return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
      });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);

      if (
        c === 0x2d || // -
        c === 0x2e || // .
        c === 0x5f || // _
        c === 0x7e || // ~
        (c >= 0x30 && c <= 0x39) || // 0-9
        (c >= 0x41 && c <= 0x5a) || // a-z
        (c >= 0x61 && c <= 0x7a) // A-Z
      ) {
        out += string.charAt(i);
        continue;
      }

      if (c < 0x80) {
        out = out + hexTable[c];
        continue;
      }

      if (c < 0x800) {
        out = out + (hexTable[0xc0 | (c >> 6)] + hexTable[0x80 | (c & 0x3f)]);
        continue;
      }

      if (c < 0xd800 || c >= 0xe000) {
        out =
          out +
          (hexTable[0xe0 | (c >> 12)] +
            hexTable[0x80 | ((c >> 6) & 0x3f)] +
            hexTable[0x80 | (c & 0x3f)]);
        continue;
      }

      i += 1;
      c = 0x10000 + (((c & 0x3ff) << 10) | (string.charCodeAt(i) & 0x3ff));
      out +=
        hexTable[0xf0 | (c >> 18)] +
        hexTable[0x80 | ((c >> 12) & 0x3f)] +
        hexTable[0x80 | ((c >> 6) & 0x3f)] +
        hexTable[0x80 | (c & 0x3f)];
    }

    return out;
  };

  var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
      var item = queue[i];
      var obj = item.obj[item.prop];

      var keys = Object.keys(obj);
      for (var j = 0; j < keys.length; ++j) {
        var key = keys[j];
        var val = obj[key];
        if (
          typeof val === 'object' &&
          val !== null &&
          refs.indexOf(val) === -1
        ) {
          queue.push({ obj: obj, prop: key });
          refs.push(val);
        }
      }
    }

    compactQueue(queue);

    return value;
  };

  var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return false;
    }

    return !!(
      obj.constructor &&
      obj.constructor.isBuffer &&
      obj.constructor.isBuffer(obj)
    );
  };

  var combine = function combine(a, b) {
    return [].concat(a, b);
  };

  var utils = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;

  var formats = {
    default: 'RFC3986',
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, '+');
      },
      RFC3986: function(value) {
        return value;
      }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
  };

  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      // eslint-disable-line func-name-matching
      return prefix + '[]';
    },
    indices: function indices(prefix, key) {
      // eslint-disable-line func-name-matching
      return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
      // eslint-disable-line func-name-matching
      return prefix;
    }
  };

  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      // eslint-disable-line func-name-matching
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };

  var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
  ) {
    var obj = object;
    if (typeof filter === 'function') {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    }

    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly
          ? encoder(prefix, defaults.encoder, charset)
          : prefix;
      }

      obj = '';
    }

    if (
      typeof obj === 'string' ||
      typeof obj === 'number' ||
      typeof obj === 'boolean' ||
      utils.isBuffer(obj)
    ) {
      if (encoder) {
        var keyValue = encodeValuesOnly
          ? prefix
          : encoder(prefix, defaults.encoder, charset);
        return [
          formatter(keyValue) +
            '=' +
            formatter(encoder(obj, defaults.encoder, charset))
        ];
      }
      return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
      return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
      objKeys = filter;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];

      if (skipNulls && obj[key] === null) {
        continue;
      }

      if (Array.isArray(obj)) {
        pushToArray(
          values,
          stringify(
            obj[key],
            generateArrayPrefix(prefix, key),
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
          )
        );
      } else {
        pushToArray(
          values,
          stringify(
            obj[key],
            prefix + (allowDots ? '.' + key : '[' + key + ']'),
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
          )
        );
      }
    }

    return values;
  };

  var stringify_1 = function(object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (
      options.encoder !== null &&
      options.encoder !== undefined &&
      typeof options.encoder !== 'function'
    ) {
      throw new TypeError('Encoder has to be a function.');
    }

    var delimiter =
      typeof options.delimiter === 'undefined'
        ? defaults.delimiter
        : options.delimiter;
    var strictNullHandling =
      typeof options.strictNullHandling === 'boolean'
        ? options.strictNullHandling
        : defaults.strictNullHandling;
    var skipNulls =
      typeof options.skipNulls === 'boolean'
        ? options.skipNulls
        : defaults.skipNulls;
    var encode =
      typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder =
      typeof options.encoder === 'function'
        ? options.encoder
        : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots =
      typeof options.allowDots === 'undefined'
        ? defaults.allowDots
        : !!options.allowDots;
    var serializeDate =
      typeof options.serializeDate === 'function'
        ? options.serializeDate
        : defaults.serializeDate;
    var encodeValuesOnly =
      typeof options.encodeValuesOnly === 'boolean'
        ? options.encodeValuesOnly
        : defaults.encodeValuesOnly;
    var charset = options.charset || defaults.charset;
    if (
      typeof options.charset !== 'undefined' &&
      options.charset !== 'utf-8' &&
      options.charset !== 'iso-8859-1'
    ) {
      throw new Error(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    }

    if (typeof options.format === 'undefined') {
      options.format = formats['default'];
    } else if (
      !Object.prototype.hasOwnProperty.call(formats.formatters, options.format)
    ) {
      throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
      filter = options.filter;
      obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
      filter = options.filter;
      objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
      return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
      arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
      arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
      objKeys = Object.keys(obj);
    }

    if (sort) {
      objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];

      if (skipNulls && obj[key] === null) {
        continue;
      }
      pushToArray(
        keys,
        stringify(
          obj[key],
          key,
          generateArrayPrefix,
          strictNullHandling,
          skipNulls,
          encode ? encoder : null,
          filter,
          sort,
          allowDots,
          serializeDate,
          formatter,
          encodeValuesOnly,
          charset
        )
      );
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
      if (charset === 'iso-8859-1') {
        // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += 'utf8=%26%2310003%3B&';
      } else {
        // encodeURIComponent('✓')
        prefix += 'utf8=%E2%9C%93&';
      }
    }

    return joined.length > 0 ? prefix + joined : '';
  };

  var has$1 = Object.prototype.hasOwnProperty;

  var defaults$1 = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
  };

  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit =
      options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf('utf8=') === 0) {
          if (parts[i] === charsetSentinel) {
            charset = 'utf-8';
          } else if (parts[i] === isoSentinel) {
            charset = 'iso-8859-1';
          }
          skipIndex = i;
          i = parts.length; // The eslint settings do not allow break;
        }
      }
    }

    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];

      var bracketEqualsPos = part.indexOf(']=');
      var pos =
        bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

      var key, val;
      if (pos === -1) {
        key = options.decoder(part, defaults$1.decoder, charset);
        val = options.strictNullHandling ? null : '';
      } else {
        key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset);
        val = options.decoder(part.slice(pos + 1), defaults$1.decoder, charset);
      }

      if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
        val = interpretNumericEntities(val);
      }
      if (has$1.call(obj, key)) {
        obj[key] = utils.combine(obj[key], val);
      } else {
        obj[key] = val;
      }
    }

    return obj;
  };

  var parseObject = function(chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root = chain[i];

      if (root === '[]' && options.parseArrays) {
        obj = [].concat(leaf);
      } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot =
          root.charAt(0) === '[' && root.charAt(root.length - 1) === ']'
            ? root.slice(1, -1)
            : root;
        var index = parseInt(cleanRoot, 10);
        if (!options.parseArrays && cleanRoot === '') {
          obj = { 0: leaf };
        } else if (
          !isNaN(index) &&
          root !== cleanRoot &&
          String(index) === cleanRoot &&
          index >= 0 &&
          (options.parseArrays && index <= options.arrayLimit)
        ) {
          obj = [];
          obj[index] = leaf;
        } else {
          obj[cleanRoot] = leaf;
        }
      }

      leaf = obj;
    }

    return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
      return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots
      ? givenKey.replace(/\.([^.[]+)/g, '[$1]')
      : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
      // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
      if (!options.plainObjects && has$1.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }

      keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;
      if (
        !options.plainObjects &&
        has$1.call(Object.prototype, segment[1].slice(1, -1))
      ) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
      keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
  };

  var parse = function(str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (
      options.decoder !== null &&
      options.decoder !== undefined &&
      typeof options.decoder !== 'function'
    ) {
      throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter =
      typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter)
        ? options.delimiter
        : defaults$1.delimiter;
    options.depth =
      typeof options.depth === 'number' ? options.depth : defaults$1.depth;
    options.arrayLimit =
      typeof options.arrayLimit === 'number'
        ? options.arrayLimit
        : defaults$1.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder =
      typeof options.decoder === 'function'
        ? options.decoder
        : defaults$1.decoder;
    options.allowDots =
      typeof options.allowDots === 'undefined'
        ? defaults$1.allowDots
        : !!options.allowDots;
    options.plainObjects =
      typeof options.plainObjects === 'boolean'
        ? options.plainObjects
        : defaults$1.plainObjects;
    options.allowPrototypes =
      typeof options.allowPrototypes === 'boolean'
        ? options.allowPrototypes
        : defaults$1.allowPrototypes;
    options.parameterLimit =
      typeof options.parameterLimit === 'number'
        ? options.parameterLimit
        : defaults$1.parameterLimit;
    options.strictNullHandling =
      typeof options.strictNullHandling === 'boolean'
        ? options.strictNullHandling
        : defaults$1.strictNullHandling;

    if (
      typeof options.charset !== 'undefined' &&
      options.charset !== 'utf-8' &&
      options.charset !== 'iso-8859-1'
    ) {
      throw new Error(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    }
    if (typeof options.charset === 'undefined') {
      options.charset = defaults$1.charset;
    }

    if (str === '' || str === null || typeof str === 'undefined') {
      return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var newObj = parseKeys(key, tempObj[key], options);
      obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
  };

  var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify_1
  };
  var lib_2 = lib.parse;
  var lib_3 = lib.stringify;

  const TIMEOUT_ERROR = { error: 'timeout', error_description: 'Timeout' };
  const getUniqueScopes = (...scopes) => {
    const scopeString = scopes.filter(Boolean).join();
    return Array.from(new Set(scopeString.replace(/\s/g, ',').split(',')))
      .join(' ')
      .trim();
  };
  const parseQueryResult = hash => {
    var hashed = lib_2(hash);
    return Object.assign({}, hashed, {
      expires_in: parseInt(hashed.expires_in)
    });
  };
  const runIframe = (authorizeUrl, eventOrigin) => {
    return new Promise((res, rej) => {
      var iframe = window.document.createElement('iframe');
      iframe.setAttribute('width', '0');
      iframe.setAttribute('height', '0');
      iframe.style.display = 'none';
      const timeoutSetTimeoutId = setTimeout(() => {
        rej(TIMEOUT_ERROR);
        window.document.body.removeChild(iframe);
      }, 60 * 1000);
      const iframeEventHandler = function(e) {
        if (e.origin != eventOrigin) return;
        if (!e.data || e.data.type !== 'authorization_response') return;
        e.source.close();
        e.data.response.error ? rej(e.data.response) : res(e.data.response);
        clearTimeout(timeoutSetTimeoutId);
        window.removeEventListener('message', iframeEventHandler, false);
        window.document.body.removeChild(iframe);
      };
      window.addEventListener('message', iframeEventHandler, false);
      window.document.body.appendChild(iframe);
      iframe.setAttribute('src', authorizeUrl);
    });
  };
  const openPopup = () => {
    const popup = window.open(
      '',
      'auth0:authorize:popup',
      'left=100,top=100,width=400,height=600,resizable,scrollbars=yes,status=1'
    );
    if (!popup) {
      throw new Error('Could not open popup');
    }
    return popup;
  };
  const runPopup = (popup, authorizeUrl) => {
    popup.location.href = authorizeUrl;
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(TIMEOUT_ERROR);
      }, 60 * 1000);
      window.addEventListener('message', e => {
        if (!e.data || e.data.type !== 'authorization_response') {
          return;
        }
        clearTimeout(timeoutId);
        popup.close();
        if (e.data.response.error) {
          return reject(e.data.response);
        }
        resolve(e.data.response);
      });
    });
  };
  const createRandomString = () => {
    const charset =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-_~.';
    let random = '';
    const randomValues = crypto.getRandomValues(new Uint8Array(43));
    randomValues.forEach(v => (random += charset[v % charset.length]));
    return random;
  };
  const encodeState = state => btoa(state);
  const createQueryParams = params => lib_3(params);
  const sha256 = s =>
    window.crypto.subtle.digest(
      { name: 'SHA-256' },
      new TextEncoder().encode(s)
    );
  const urlEncodeB64 = input => {
    const b64Chars = { '+': '-', '/': '_', '=': '' };
    return input.replace(/[\+\/=]/g, m => b64Chars[m]);
  };
  // https://stackoverflow.com/questions/30106476/
  const decodeB64 = input =>
    decodeURIComponent(
      atob(input)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  const urlDecodeB64 = input =>
    decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
  const bufferToBase64UrlEncoded = input =>
    urlEncodeB64(
      window.btoa(String.fromCharCode(...Array.from(new Uint8Array(input))))
    );
  const oauthToken = _a =>
    __awaiter(undefined, void 0, void 0, function*() {
      var { baseUrl } = _a,
        options = __rest(_a, ['baseUrl']);
      return yield fetch(`${baseUrl}/oauth/token`, {
        method: 'POST',
        body: JSON.stringify(
          Object.assign(
            {
              grant_type: 'authorization_code',
              redirect_uri: window.location.origin
            },
            options
          )
        ),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(r => r.json());
    });

  const createKey = e => `${e.audience}::${e.scope}`;
  const getExpirationTimeoutInMilliseconds = (expiresIn, exp) => {
    const expTime =
      (new Date(exp * 1000).getTime() - new Date().getTime()) / 1000;
    return Math.min(expiresIn, expTime) * 1000;
  };
  class Cache {
    constructor() {
      this.cache = {};
    }
    save(entry) {
      const key = createKey(entry);
      this.cache[key] = entry;
      const timeout = getExpirationTimeoutInMilliseconds(
        entry.expires_in,
        entry.decodedToken.claims.exp
      );
      setTimeout(() => {
        delete this.cache[key];
      }, timeout);
    }
    get(key) {
      return this.cache[createKey(key)];
    }
  }

  var esCookie = createCommonjsModule(function(module, exports) {
    var __assign =
      (commonjsGlobal && commonjsGlobal.__assign) ||
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    exports.__esModule = true;
    function stringifyAttribute(name, value) {
      if (!value) {
        return '';
      }
      var stringified = '; ' + name;
      if (value === true) {
        return stringified; // boolean attributes shouldn't have a value
      }
      return stringified + '=' + value;
    }
    function stringifyAttributes(attributes) {
      if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(
          expires.getMilliseconds() + attributes.expires * 864e5
        );
        attributes.expires = expires;
      }
      return (
        stringifyAttribute(
          'Expires',
          attributes.expires ? attributes.expires.toUTCString() : ''
        ) +
        stringifyAttribute('Domain', attributes.domain) +
        stringifyAttribute('Path', attributes.path) +
        stringifyAttribute('Secure', attributes.secure) +
        stringifyAttribute('SameSite', attributes.sameSite)
      );
    }
    function encode(name, value, attributes) {
      return (
        encodeURIComponent(name)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') + // replace opening and closing parens
        '=' +
        encodeURIComponent(value).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) + // allowed special characters
        stringifyAttributes(attributes)
      );
    }
    exports.encode = encode;
    function parse(cookieString) {
      var result = {};
      var cookies = cookieString ? cookieString.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name_1 = parts[0].replace(rdecode, decodeURIComponent);
          result[name_1] = cookie.replace(rdecode, decodeURIComponent);
        } catch (e) {
          // ignore cookies with invalid name/value encoding
        }
      }
      return result;
    }
    exports.parse = parse;
    function getAll() {
      return parse(document.cookie);
    }
    exports.getAll = getAll;
    function get(name) {
      return getAll()[name];
    }
    exports.get = get;
    function set(name, value, attributes) {
      document.cookie = encode(
        name,
        value,
        __assign({ path: '/' }, attributes)
      );
    }
    exports.set = set;
    function remove(name, attributes) {
      set(name, '', __assign({}, attributes, { expires: -1 }));
    }
    exports.remove = remove;
  });

  unwrapExports(esCookie);
  var esCookie_1 = esCookie.encode;
  var esCookie_2 = esCookie.parse;
  var esCookie_3 = esCookie.getAll;
  var esCookie_4 = esCookie.get;
  var esCookie_5 = esCookie.set;
  var esCookie_6 = esCookie.remove;

  const getAllKeys = () => Object.keys(esCookie_3() || {});
  const get = key => {
    const value = esCookie_4(key);
    if (typeof value === 'undefined') {
      return;
    }
    return JSON.parse(value);
  };
  const save = (key, value, options) => {
    esCookie_5(key, JSON.stringify(value), {
      expires: options.daysUntilExpire
    });
  };
  const remove = key => {
    esCookie_6(key);
  };

  const COOKIE_KEY = 'a0.spajs.txs.';
  const getTransactionKey = state => `${COOKIE_KEY}${state}`;
  class TransactionManager {
    constructor() {
      this.transactions = {};
      getAllKeys()
        .filter(k => k.startsWith(COOKIE_KEY))
        .forEach(k => {
          const state = k.replace(COOKIE_KEY, '');
          this.transactions[state] = get(k);
        });
    }
    create(state, transaction) {
      this.transactions[state] = transaction;
      save(getTransactionKey(state), transaction, {
        daysUntilExpire: 1
      });
    }
    get(state) {
      return this.transactions[state];
    }
    remove(state) {
      delete this.transactions[state];
      remove(getTransactionKey(state));
    }
  }

  const idTokendecoded = [
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
  ];
  const decode$1 = token => {
    const [header, payload, signature] = token.split('.');
    const payloadJSON = JSON.parse(urlDecodeB64(payload));
    const claims = {};
    const user = {};
    Object.keys(payloadJSON).forEach(k => {
      claims[k] = payloadJSON[k];
      if (!idTokendecoded.includes(k)) {
        user[k] = payloadJSON[k];
      }
    });
    return {
      encoded: { header, payload, signature },
      header: JSON.parse(urlDecodeB64(header)),
      claims,
      user
    };
  };
  const verify = options => {
    const decoded = decode$1(options.id_token);
    if (decoded.claims.iss !== options.iss) {
      throw new Error('Invalid issuer');
    }
    if (decoded.claims.aud !== options.aud) {
      throw new Error('Invalid audience');
    }
    if (decoded.header.alg !== 'RS256') {
      throw new Error('Invalid algorithm');
    }
    if (decoded.claims.nonce !== options.nonce) {
      throw new Error('Invalid nonce');
    }
    const now = new Date();
    const expDate = new Date(0);
    const iatDate = new Date(0);
    const nbfDate = new Date(0);
    const leeway = options.leeway || 60;
    expDate.setUTCSeconds(decoded.claims.exp + leeway);
    iatDate.setUTCSeconds(decoded.claims.iat - leeway);
    nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
    if (now > expDate) {
      throw new Error('id_token expired');
    }
    if (now < iatDate) {
      throw new Error('id_token was issued in the future (invalid iat)');
    }
    if (typeof decoded.claims.nbf !== 'undefined' && now < nbfDate) {
      throw new Error('token is not yet valid (invalid notBefore)');
    }
    return decoded;
  };

  class AuthenticationError extends Error {
    constructor(error, error_description, state) {
      super(error_description);
      this.error = error;
      this.error_description = error_description;
      this.state = state;
    }
  }

  var version = '1.0.2';

  /**
   * Auth0 SDK for Single Page Applications using [Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce).
   */
  class Auth0Client {
    constructor(options) {
      this.options = options;
      this.DEFAULT_SCOPE = 'openid profile email';
      this.cache = new Cache();
      this.transactionManager = new TransactionManager();
      this.domainUrl = `https://${this.options.domain}`;
    }
    _url(path) {
      const telemetry = encodeURIComponent(
        btoa(
          JSON.stringify({
            name: 'auth0-spa-js',
            version: version
          })
        )
      );
      return `${this.domainUrl}${path}&auth0Client=${telemetry}`;
    }
    _getParams(authorizeOptions, state, nonce, code_challenge, redirect_uri) {
      const _a = this.options,
        withoutDomain = __rest(_a, ['domain']);
      return Object.assign({}, withoutDomain, authorizeOptions, {
        scope: getUniqueScopes(
          this.DEFAULT_SCOPE,
          this.options.scope,
          authorizeOptions.scope
        ),
        response_type: 'code',
        response_mode: 'query',
        state,
        nonce,
        redirect_uri: this.options.redirect_uri || redirect_uri,
        code_challenge,
        code_challenge_method: 'S256'
      });
    }
    _authorizeUrl(authorizeOptions) {
      return this._url(`/authorize?${createQueryParams(authorizeOptions)}`);
    }
    _verifyIdToken(id_token, nonce) {
      return verify({
        iss: `${this.domainUrl}/`,
        aud: this.options.client_id,
        id_token,
        nonce,
        leeway: this.options.leeway
      });
    }
    /**
     * ```js
     * await auth0.loginWithPopup(options);
     * ```
     *
     * Opens a popup with the `/authorize` URL using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated. If the response is successful,
     * results will be valid according to their expiration times.
     *
     * IMPORTANT: This method has to be called from an event handler
     * that was started by the user like a button click, for example,
     * otherwise the popup will be blocked in most browsers.
     *
     * @param options
     */
    loginWithPopup(options) {
      return __awaiter(this, void 0, void 0, function*() {
        const popup = yield openPopup();
        const authorizeOptions = __rest(options, []);
        const stateIn = encodeState(createRandomString());
        const nonceIn = createRandomString();
        const code_verifier = createRandomString();
        const code_challengeBuffer = yield sha256(code_verifier);
        const code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
        const params = this._getParams(
          authorizeOptions,
          stateIn,
          nonceIn,
          code_challenge,
          window.location.origin
        );
        const url = this._authorizeUrl(
          Object.assign({}, params, { response_mode: 'web_message' })
        );
        const codeResult = yield runPopup(popup, url);
        if (stateIn !== codeResult.state) {
          throw new Error('Invalid state');
        }
        const authResult = yield oauthToken({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier,
          code: codeResult.code
        });
        const decodedToken = this._verifyIdToken(authResult.id_token, nonceIn);
        const cacheEntry = Object.assign({}, authResult, {
          decodedToken,
          scope: params.scope,
          audience: params.audience || 'default'
        });
        this.cache.save(cacheEntry);
        save('auth0.is.authenticated', true, { daysUntilExpire: 1 });
      });
    }
    /**
     * ```js
     * const user = await auth0.getUser();
     * ```
     *
     * Returns the user information if available (decoded
     * from the `id_token`).
     *
     * @param options
     */
    getUser(
      options = {
        audience: this.options.audience || 'default',
        scope: this.options.scope || this.DEFAULT_SCOPE
      }
    ) {
      return __awaiter(this, void 0, void 0, function*() {
        options.scope = getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
        const cache = this.cache.get(options);
        return cache && cache.decodedToken.user;
      });
    }
    /**
     * ```js
     * const user = await auth0.getIdToken();
     * ```
     *
     * Returns the id_token if available.
     *
     * @param options
     */
    getIdToken(
      options = {
        audience: this.options.audience || 'default',
        scope: this.options.scope || this.DEFAULT_SCOPE
      }
    ) {
      return __awaiter(this, void 0, void 0, function*() {
        options.scope = getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
        const cache = this.cache.get(options);
        return cache && cache.id_token;
      });
    }
    /**
     * ```js
     * const claims = await auth0.getIdTokenClaims();
     * ```
     *
     * Returns all claims from the id_token if available.
     *
     * @param options
     */
    getIdTokenClaims(
      options = {
        audience: this.options.audience || 'default',
        scope: this.options.scope || this.DEFAULT_SCOPE
      }
    ) {
      return __awaiter(this, void 0, void 0, function*() {
        options.scope = getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
        const cache = this.cache.get(options);
        return cache && cache.decodedToken.claims;
      });
    }
    /**
     * ```js
     * await auth0.loginWithRedirect(options);
     * ```
     *
     * Performs a redirect to `/authorize` using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated.
     *
     * @param options
     */
    loginWithRedirect(options) {
      return __awaiter(this, void 0, void 0, function*() {
        const { redirect_uri, appState } = options,
          authorizeOptions = __rest(options, ['redirect_uri', 'appState']);
        const stateIn = encodeState(createRandomString());
        const nonceIn = createRandomString();
        const code_verifier = createRandomString();
        const code_challengeBuffer = yield sha256(code_verifier);
        const code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
        const params = this._getParams(
          authorizeOptions,
          stateIn,
          nonceIn,
          code_challenge,
          redirect_uri
        );
        const url = this._authorizeUrl(params);
        this.transactionManager.create(stateIn, {
          nonce: nonceIn,
          code_verifier,
          appState,
          scope: params.scope,
          audience: params.audience || 'default'
        });
        window.location.assign(url);
      });
    }
    /**
     * After the browser redirects back to the callback page,
     * call `handleRedirectCallback` to handle success and error
     * responses from Auth0. If the response is successful, results
     * will be valid according to their expiration times.
     */
    handleRedirectCallback() {
      return __awaiter(this, void 0, void 0, function*() {
        if (!window.location.search) {
          throw new Error(
            'There are no query params available at `window.location.search`.'
          );
        }
        const { state, code, error, error_description } = parseQueryResult(
          window.location.search.substr(1)
        );
        if (error) {
          throw new AuthenticationError(error, error_description, state);
        }
        const transaction = this.transactionManager.get(state);
        if (!transaction) {
          throw new Error('Invalid state');
        }
        this.transactionManager.remove(state);
        const authResult = yield oauthToken({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier: transaction.code_verifier,
          code
        });
        const decodedToken = this._verifyIdToken(
          authResult.id_token,
          transaction.nonce
        );
        const cacheEntry = Object.assign({}, authResult, {
          decodedToken,
          audience: transaction.audience,
          scope: transaction.scope
        });
        this.cache.save(cacheEntry);
        save('auth0.is.authenticated', true, { daysUntilExpire: 1 });
        return {
          appState: transaction.appState
        };
      });
    }
    /**
     * ```js
     * const token = await auth0.getTokenSilently(options);
     * ```
     *
     * If there's a valid token stored, return it. Otherwise, opens an
     * iframe with the `/authorize` URL using the parameters provided
     * as arguments. Random and secure `state` and `nonce` parameters
     * will be auto-generated. If the response is successful, results
     * will be valid according to their expiration times.
     *
     * @param options
     */
    getTokenSilently(
      options = {
        audience: this.options.audience,
        scope: this.options.scope || this.DEFAULT_SCOPE,
        ignoreCache: false
      }
    ) {
      return __awaiter(this, void 0, void 0, function*() {
        options.scope = getUniqueScopes(this.DEFAULT_SCOPE, options.scope);
        if (!options.ignoreCache) {
          const cache = this.cache.get({
            scope: options.scope,
            audience: options.audience || 'default'
          });
          if (cache) {
            return cache.access_token;
          }
        }
        const stateIn = encodeState(createRandomString());
        const nonceIn = createRandomString();
        const code_verifier = createRandomString();
        const code_challengeBuffer = yield sha256(code_verifier);
        const code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
        const authorizeOptions = {
          audience: options.audience,
          scope: options.scope
        };
        const params = this._getParams(
          authorizeOptions,
          stateIn,
          nonceIn,
          code_challenge,
          window.location.origin
        );
        const url = this._authorizeUrl(
          Object.assign({}, params, {
            prompt: 'none',
            response_mode: 'web_message'
          })
        );
        const codeResult = yield runIframe(url, this.domainUrl);
        if (stateIn !== codeResult.state) {
          throw new Error('Invalid state');
        }
        const authResult = yield oauthToken({
          baseUrl: this.domainUrl,
          audience: this.options.audience,
          client_id: this.options.client_id,
          code_verifier,
          code: codeResult.code
        });
        const decodedToken = this._verifyIdToken(authResult.id_token, nonceIn);
        const cacheEntry = Object.assign({}, authResult, {
          decodedToken,
          scope: params.scope,
          audience: params.audience || 'default'
        });
        this.cache.save(cacheEntry);
        save('auth0.is.authenticated', true, { daysUntilExpire: 1 });
        return authResult.access_token;
      });
    }
    /**
     * ```js
     * const token = await auth0.getTokenWithPopup(options);
     * ```
     * Opens a popup with the `/authorize` URL using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated. If the response is successful,
     * results will be valid according to their expiration times.
     *
     * @param options
     */
    getTokenWithPopup(
      options = {
        audience: this.options.audience,
        scope: this.options.scope || this.DEFAULT_SCOPE
      }
    ) {
      return __awaiter(this, void 0, void 0, function*() {
        options.scope = getUniqueScopes(
          this.DEFAULT_SCOPE,
          this.options.scope,
          options.scope
        );
        yield this.loginWithPopup(options);
        const cache = this.cache.get({
          scope: options.scope,
          audience: options.audience || 'default'
        });
        return cache.access_token;
      });
    }
    /**
     * ```js
     * const isAuthenticated = await auth0.isAuthenticated();
     * ```
     *
     * Returns `true` if there's valid information stored,
     * otherwise returns `false`.
     *
     */
    isAuthenticated() {
      return __awaiter(this, void 0, void 0, function*() {
        const user = yield this.getUser();
        return !!user;
      });
    }
    /**
     * ```js
     * auth0.logout();
     * ```
     *
     * Performs a redirect to `/v2/logout` using the parameters provided
     * as arguments. [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
     *
     * @param options
     */
    logout(options = {}) {
      if (options.client_id !== null) {
        options.client_id = options.client_id || this.options.client_id;
      } else {
        delete options.client_id;
      }
      remove('auth0.is.authenticated');
      const url = this._url(`/v2/logout?${createQueryParams(options)}`);
      window.location.assign(url);
    }
  }

  function createAuth0Client(options) {
    return __awaiter(this, void 0, void 0, function*() {
      const auth0 = new Auth0Client(options);
      if (!get('auth0.is.authenticated')) {
        return auth0;
      }
      try {
        yield auth0.getTokenSilently({
          audience: options.audience,
          scope: options.scope,
          ignoreCache: true
        });
      } catch (error) {
        // ignore
      }
      return auth0;
    });
  }

  return createAuth0Client;
});
//# sourceMappingURL=auth0-spa-js.development.js.map