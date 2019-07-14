'use strict';

require('fast-text-encoding');
var qs = require('qs');
var Cookies = require('es-cookie');

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

const TIMEOUT_ERROR = { error: 'timeout', error_description: 'Timeout' };
const getUniqueScopes = (...scopes) => {
  const scopeString = scopes.filter(Boolean).join();
  return Array.from(new Set(scopeString.replace(/\s/g, ',').split(',')))
    .join(' ')
    .trim();
};
const parseQueryResult = hash => {
  var hashed = qs.parse(hash);
  return Object.assign({}, hashed, { expires_in: parseInt(hashed.expires_in) });
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
const createQueryParams = params => qs.stringify(params);
const sha256 = s =>
  window.crypto.subtle.digest({ name: 'SHA-256' }, new TextEncoder().encode(s));
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

const getAllKeys = () => Object.keys(Cookies.getAll() || {});
const get = key => {
  const value = Cookies.get(key);
  if (typeof value === 'undefined') {
    return;
  }
  return JSON.parse(value);
};
const save = (key, value, options) => {
  Cookies.set(key, JSON.stringify(value), {
    expires: options.daysUntilExpire
  });
};
const remove = key => {
  Cookies.remove(key);
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
const decode = token => {
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
  const decoded = decode(options.id_token);
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

module.exports = createAuth0Client;
//# sourceMappingURL=auth0-spa-js.cjs.js.map
