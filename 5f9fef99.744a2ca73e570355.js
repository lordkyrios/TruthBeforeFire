(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6751], {
        38054: function(e, t, n) {
            var i = n(51925),
                r = n(74227).Buffer;
            e.exports = function() {
                "use strict";

                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(t)
                }

                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), i.forEach(function(t) {
                            o(e, t, n[t])
                        })
                    }
                    return e
                }

                function a() {
                    return "object" == typeof window && (null == window ? void 0 : window.document) !== void 0
                }(f || (f = {})).IDENTIFY = "$identify", (l = g || (g = {})).SET = "$set", l.SET_ONCE = "$setOnce", l.ADD = "$add", l.APPEND = "$append", l.PREPEND = "$prepend", l.REMOVE = "$remove", l.PREINSERT = "$preinsert", l.POSTINSERT = "$postinsert", l.UNSET = "$unset", l.CLEAR_ALL = "$clearAll", (p = v || (v = {}))[p.None = 0] = "None", p[p.Error = 1] = "Error", p[p.Warn = 2] = "Warn", p[p.Verbose = 3] = "Verbose", (d = y || (y = {})).Unknown = "unknown", d.Skipped = "skipped", d.Success = "success", d.RateLimit = "rate_limit", d.PayloadTooLarge = "payload_too_large", d.Invalid = "invalid", d.Failed = "failed", (h = y || (y = {})).fromHttpCode = function(e) {
                    return e >= 200 && e < 300 ? h.Success : 429 === e ? h.RateLimit : 413 === e ? h.PayloadTooLarge : e >= 400 && e < 500 ? h.Invalid : e >= 500 ? h.Failed : h.Unknown
                }, y.Skipped;
                var u, c, l, p, d, h, f, g, v, y, m, _, E = function() {
                        var e;
                        if (a()) {
                            var t = window,
                                n = Array;
                            if (void 0 !== t.Prototype && (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON) !== void 0) return delete n.prototype.toJSON, !0
                        }
                        return !1
                    },
                    w = ((c = "object" == typeof i && (null === (u = null == i ? void 0 : i.versions) || void 0 === u ? void 0 : u.node) !== void 0 ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).__AMPLITUDE__ = c.__AMPLITUDE__ || {}, c.__AMPLITUDE__),
                    I = "Amplitude Logger ",
                    b = function() {
                        function e() {
                            this._logLevel = 0
                        }
                        return e.prototype.disable = function() {
                            this._logLevel = 0
                        }, e.prototype.enable = function(e) {
                            void 0 === e && (e = v.Warn), this._logLevel = e
                        }, e.prototype.log = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Verbose || n.g.console.log(I + "[Log]: " + e.join(" "))
                        }, e.prototype.warn = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Warn || n.g.console.warn(I + "[Warn]: " + e.join(" "))
                        }, e.prototype.error = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Error || n.g.console.error(I + "[Error]: " + e.join(" "))
                        }, e
                    }();
                w.logger || (w.logger = new b);
                var S = {
                        DEFAULT_INSTANCE: "$default_instance",
                        API_VERSION: 2,
                        MAX_STRING_LENGTH: 4096,
                        MAX_PROPERTY_KEYS: 1e3,
                        IDENTIFY_EVENT: "$identify",
                        GROUP_IDENTIFY_EVENT: "$groupidentify",
                        LAST_EVENT_ID: "amplitude_lastEventId",
                        LAST_EVENT_TIME: "amplitude_lastEventTime",
                        LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
                        LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
                        SESSION_ID: "amplitude_sessionId",
                        DEVICE_ID: "amplitude_deviceId",
                        OPT_OUT: "amplitude_optOut",
                        USER_ID: "amplitude_userId",
                        DEVICE_ID_INDEX: 0,
                        USER_ID_INDEX: 1,
                        OPT_OUT_INDEX: 2,
                        SESSION_ID_INDEX: 3,
                        LAST_EVENT_TIME_INDEX: 4,
                        EVENT_ID_INDEX: 5,
                        IDENTIFY_ID_INDEX: 6,
                        SEQUENCE_NUMBER_INDEX: 7,
                        COOKIE_TEST_PREFIX: "amp_cookie_test",
                        COOKIE_PREFIX: "amp",
                        STORAGE_DEFAULT: "",
                        STORAGE_COOKIES: "cookies",
                        STORAGE_NONE: "none",
                        STORAGE_LOCAL: "localStorage",
                        STORAGE_SESSION: "sessionStorage",
                        REVENUE_EVENT: "revenue_amount",
                        REVENUE_PRODUCT_ID: "$productId",
                        REVENUE_QUANTITY: "$quantity",
                        REVENUE_PRICE: "$price",
                        REVENUE_REVENUE_TYPE: "$revenueType",
                        AMP_DEVICE_ID_PARAM: "amp_device_id",
                        REFERRER: "referrer",
                        UTM_SOURCE: "utm_source",
                        UTM_MEDIUM: "utm_medium",
                        UTM_CAMPAIGN: "utm_campaign",
                        UTM_TERM: "utm_term",
                        UTM_CONTENT: "utm_content",
                        ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
                        TRANSPORT_HTTP: "http",
                        TRANSPORT_BEACON: "beacon"
                    },
                    T = {
                        encode: function(e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n);
                                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) + String.fromCharCode(63 & i | 128) : t += String.fromCharCode(i >> 12 | 224) + String.fromCharCode(i >> 6 & 63 | 128) + String.fromCharCode(63 & i | 128)
                            }
                            return t
                        },
                        decode: function(e) {
                            for (var t = "", n = 0, i = 0, r = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (t += String.fromCharCode((31 & i) << 6 | 63 & e.charCodeAt(n + 1)), n += 2) : (t += String.fromCharCode((15 & i) << 12 | (63 & e.charCodeAt(n + 1)) << 6 | 63 & e.charCodeAt(n + 2)), n += 3);
                            return t
                        }
                    },
                    N = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function(e) {
                            try {
                                if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                            } catch (e) {}
                            return N._encode(e)
                        },
                        _encode: function(e) {
                            var t, n, i, r, o, s, a, u = "",
                                c = 0;
                            for (e = T.encode(e); c < e.length;) t = e.charCodeAt(c++), n = e.charCodeAt(c++), i = e.charCodeAt(c++), r = t >> 2, o = (3 & t) << 4 | n >> 4, s = (15 & n) << 2 | i >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), u = u + N._keyStr.charAt(r) + N._keyStr.charAt(o) + N._keyStr.charAt(s) + N._keyStr.charAt(a);
                            return u
                        },
                        decode: function(e) {
                            try {
                                if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                            } catch (e) {}
                            return N._decode(e)
                        },
                        _decode: function(e) {
                            var t, n, i, r, o, s, a, u = "",
                                c = 0;
                            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;) r = N._keyStr.indexOf(e.charAt(c++)), o = N._keyStr.indexOf(e.charAt(c++)), s = N._keyStr.indexOf(e.charAt(c++)), a = N._keyStr.indexOf(e.charAt(c++)), t = r << 2 | o >> 4, n = (15 & o) << 4 | s >> 2, i = (3 & s) << 6 | a, u += String.fromCharCode(t), 64 !== s && (u += String.fromCharCode(n)), 64 !== a && (u += String.fromCharCode(i));
                            return T.decode(u)
                        }
                    },
                    O = Object.prototype.toString;

                function A(t) {
                    switch (O.call(t)) {
                        case "[object Date]":
                            return "date";
                        case "[object RegExp]":
                            return "regexp";
                        case "[object Arguments]":
                            return "arguments";
                        case "[object Array]":
                            return "array";
                        case "[object Error]":
                            return "error"
                    }
                    return null === t ? "null" : void 0 === t ? "undefined" : t != t ? "nan" : t && 1 === t.nodeType ? "element" : void 0 !== r && "function" == typeof r.isBuffer && r.isBuffer(t) ? "buffer" : e(t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
                }
                var k = {
                        DISABLE: 0,
                        ERROR: 1,
                        WARN: 2,
                        INFO: 3
                    },
                    R = k.WARN,
                    C = {
                        error: function(e) {
                            R >= k.ERROR && P(e)
                        },
                        warn: function(e) {
                            R >= k.WARN && P(e)
                        },
                        info: function(e) {
                            R >= k.INFO && P(e)
                        }
                    },
                    P = function(e) {
                        try {
                            console.log("[Amplitude] " + e)
                        } catch (e) {}
                    },
                    D = function(e, t, n) {
                        return A(e) === n || (C.error("Invalid " + t + " input type. Expected " + n + " but received " + A(e)), !1)
                    },
                    x = function(e) {
                        var t = A(e);
                        if ("object" !== t) return C.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                        if (Object.keys(e).length > S.MAX_PROPERTY_KEYS) return C.error("Error: too many properties (more than 1000), ignoring"), {};
                        var n = {};
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                var r = i,
                                    o = A(r);
                                "string" !== o && (r = String(r), C.warn("WARNING: Non-string property key, received type " + o + ', coercing to string "' + r + '"'));
                                var s = j(r, e[i]);
                                null !== s && (n[r] = s)
                            }
                        return n
                    },
                    U = ["nan", "function", "arguments", "regexp", "element"],
                    j = function e(t, n) {
                        var i = A(n);
                        if (-1 !== U.indexOf(i)) C.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"), n = null;
                        else if ("undefined" === i) n = null;
                        else if ("error" === i) n = String(n), C.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                        else if ("array" === i) {
                            for (var r = [], o = 0; o < n.length; o++) {
                                var s = n[o],
                                    a = A(s);
                                if ("array" === a) {
                                    C.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping");
                                    continue
                                }
                                "object" === a ? r.push(x(s)) : r.push(e(t, s))
                            }
                            n = r
                        } else "object" === i && (n = x(n));
                        return n
                    },
                    q = function(e, t) {
                        var n = A(t);
                        if ("string" === n) return t;
                        if ("date" === n || "number" === n || "boolean" === n) return t = String(t), C.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                        if ("array" === n) {
                            for (var i = [], r = 0; r < t.length; r++) {
                                var o = t[r],
                                    s = A(o);
                                if ("array" === s || "object" === s) {
                                    C.warn("WARNING: Skipping nested " + s + " in array groupName");
                                    continue
                                }
                                "string" === s ? i.push(o) : ("date" === s || "number" === s || "boolean" === s) && (o = String(o), C.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + o + '"'), i.push(o))
                            }
                            return i
                        }
                        C.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                    },
                    M = {
                        setLogLevel: function(e) {
                            Object.prototype.hasOwnProperty.call(k, e) && (R = k[e])
                        },
                        getLogLevel: function() {
                            return R
                        },
                        logLevels: k,
                        log: C,
                        isEmptyString: function(e) {
                            return !e || 0 === e.length
                        },
                        getQueryParam: function(e, t) {
                            var n = RegExp("[\\?&]" + (e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)").exec(t);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        sessionStorageEnabled: function() {
                            try {
                                if (window.sessionStorage) return !0
                            } catch (e) {}
                            return !1
                        },
                        truncate: function e(t) {
                            if ("array" === A(t))
                                for (var n, i = 0; i < t.length; i++) t[i] = e(t[i]);
                            else if ("object" === A(t))
                                for (var r in t) r in t && (t[r] = e(t[r]));
                            else t = "string" === A(n = t) && n.length > S.MAX_STRING_LENGTH ? n.substring(0, S.MAX_STRING_LENGTH) : n;
                            return t
                        },
                        validateGroups: function(e) {
                            var t = A(e);
                            if ("object" !== t) return C.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            var n = {};
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i)) {
                                    var r = i,
                                        o = A(r);
                                    "string" !== o && (r = String(r), C.warn("WARNING: Non-string groupType, received type " + o + ', coercing to string "' + r + '"'));
                                    var s = q(r, e[i]);
                                    null !== s && (n[r] = s)
                                }
                            return n
                        },
                        validateInput: D,
                        validateProperties: x,
                        validateDeviceId: function(e) {
                            return !!D(e, "deviceId", "string") && (!e.includes(".") || (C.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), !1))
                        },
                        validateTransport: function(e) {
                            return !!D(e, "transport", "string") && (e !== S.TRANSPORT_HTTP && e !== S.TRANSPORT_BEACON ? (C.error("transport value must be one of '".concat(S.TRANSPORT_BEACON, "' or '").concat(S.TRANSPORT_HTTP, "'")), !1) : e === S.TRANSPORT_HTTP || !!navigator.sendBeacon || (C.error("browser does not support sendBeacon, so transport must be HTTP"), !1))
                        }
                    },
                    L = function() {
                        return window.location
                    },
                    V = function() {
                        for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                        return e
                    },
                    G = function(e) {
                        try {
                            for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                                for (var r = t[i];
                                    " " === r.charAt(0);) r = r.substring(1, r.length);
                                if (0 === r.indexOf(e)) {
                                    n = r.substring(e.length, r.length);
                                    break
                                }
                            }
                            return n
                        } catch (e) {
                            return null
                        }
                    },
                    F = function(e, t, n) {
                        var i = null !== t ? n.expirationDays : -1;
                        if (i) {
                            var r = new Date;
                            r.setTime(r.getTime() + 864e5 * i), i = r
                        }
                        var o = e + "=" + t;
                        i && (o += "; expires=" + i.toUTCString()), o += "; path=/", n.domain && (o += "; domain=" + n.domain), n.secure && (o += "; Secure"), n.sameSite && (o += "; SameSite=" + n.sameSite), document.cookie = o
                    },
                    K = function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = t.split(".")[S.LAST_EVENT_TIME_INDEX];
                        return (n && (e = parseInt(n, 32)), e) ? e : (M.log.warn("unable to parse malformed cookie: ".concat(t)), 0)
                    },
                    B = {
                        set: F,
                        get: G,
                        getAll: function(e) {
                            try {
                                var t = document.cookie.split(";").map(function(e) {
                                        return e.trimStart()
                                    }),
                                    n = [],
                                    i = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                                        for (var u = s.value;
                                            " " === u.charAt(0);) u = u.substring(1);
                                        0 === u.indexOf(e) && n.push(u.substring(e.length))
                                    }
                                } catch (e) {
                                    r = !0, o = e
                                } finally {
                                    try {
                                        i || null == a.return || a.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            } catch (e) {
                                return []
                            }
                        },
                        getLastEventTime: K,
                        sortByEventTime: function(e) {
                            return ((function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                            })(e) || function(e) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                            }(e) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance")
                            }()).sort(function(e, t) {
                                var n = K(e);
                                return K(t) - n
                            })
                        },
                        areCookiesEnabled: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = S.COOKIE_TEST_PREFIX + V(),
                                n = !1;
                            try {
                                var i = String(new Date);
                                F(t, i, e), M.log.info("Testing if cookies available"), n = G(t + "=") === i
                            } catch (e) {
                                M.log.warn('Error thrown when checking for cookies. Reason: "'.concat(e, '"'))
                            } finally {
                                M.log.info("Cleaning up cookies availability test"), F(t, null, e)
                            }
                            return n
                        }
                    },
                    z = function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.hostname || location.hostname
                    },
                    X = function(e) {
                        for (var t = z(e).split("."), n = [], i = "_tldtest_" + V(), r = t.length - 2; r >= 0; --r) n.push(t.slice(r).join("."));
                        for (var o = 0; o < n.length; ++o) {
                            var s = n[o],
                                a = {
                                    domain: "." + s
                                };
                            if (B.set(i, 1, a), B.get(i)) return B.set(i, null, a), s
                        }
                        return ""
                    },
                    $ = {
                        expirationDays: void 0,
                        domain: void 0
                    },
                    W = function(e) {
                        var t = "";
                        return $.domain && (t = "." === $.domain.charAt(0) ? $.domain.substring(1) : $.domain), e + t
                    },
                    Q = function(e) {
                        var t = W(e) + "=",
                            n = B.get(t);
                        try {
                            if (n) return JSON.parse(N.decode(n))
                        } catch (e) {}
                        return null
                    },
                    H = function(e, t) {
                        try {
                            return B.set(W(e), N.encode(JSON.stringify(t)), $), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    Y = function(e) {
                        try {
                            return B.set(W(e), null, $), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    J = {
                        reset: function() {
                            $ = {
                                expirationDays: void 0,
                                domain: void 0
                            }
                        },
                        options: function(e) {
                            if (0 == arguments.length) return $;
                            e = e || {}, $.expirationDays = e.expirationDays, $.secure = e.secure, $.sameSite = e.sameSite;
                            var t = M.isEmptyString(e.domain) ? "." + X(L().href) : e.domain,
                                n = Math.random();
                            $.domain = t, H("amplitude_test", n);
                            var i = Q("amplitude_test");
                            return i && i === n || (t = null), Y("amplitude_test"), $.domain = t, $
                        },
                        get: Q,
                        set: H,
                        remove: Y,
                        setRaw: function(e, t) {
                            try {
                                return B.set(W(e), t, $), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        getRaw: function(e) {
                            var t = W(e) + "=";
                            return B.get(t)
                        }
                    };
                if (function() {
                        var e, t = new Date;
                        try {
                            return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                        } catch (e) {}
                        return !1
                    }()) m = window.localStorage;
                else if ("undefined" != typeof window && window.globalStorage) try {
                    m = window.globalStorage[window.location.hostname]
                } catch (e) {} else if ("undefined" != typeof document) {
                    var Z = document.createElement("div"),
                        ee = "localStorage";
                    Z.style.display = "none", document.getElementsByTagName("head")[0].appendChild(Z), Z.addBehavior && (Z.addBehavior("#default#userdata"), m = {
                        length: 0,
                        setItem: function(e, t) {
                            Z.load(ee), !Z.getAttribute(e) && this.length++, Z.setAttribute(e, t), Z.save(ee)
                        },
                        getItem: function(e) {
                            return Z.load(ee), Z.getAttribute(e)
                        },
                        removeItem: function(e) {
                            Z.load(ee), Z.getAttribute(e) && this.length--, Z.removeAttribute(e), Z.save(ee)
                        },
                        clear: function() {
                            Z.load(ee);
                            for (var e, t = 0; e = Z.XMLDocument.documentElement.attributes[t++];) Z.removeAttribute(e.name);
                            Z.save(ee), this.length = 0
                        },
                        key: function(e) {
                            return Z.load(ee), Z.XMLDocument.documentElement.attributes[e]
                        }
                    }, Z.load(ee), m.length = Z.XMLDocument.documentElement.attributes.length)
                }
                m || (m = {
                    length: 0,
                    setItem: function(e, t) {},
                    getItem: function(e) {},
                    removeItem: function(e) {},
                    clear: function() {},
                    key: function(e) {}
                });
                var et = m,
                    en = function() {
                        this.storage = null
                    };
                en.prototype.getStorage = function() {
                    if (null !== this.storage) return this.storage;
                    if (B.areCookiesEnabled()) this.storage = J;
                    else {
                        var e = "amp_cookiestore_";
                        this.storage = {
                            _options: {
                                expirationDays: void 0,
                                domain: void 0,
                                secure: !1
                            },
                            reset: function() {
                                this._options = {
                                    expirationDays: void 0,
                                    domain: void 0,
                                    secure: !1
                                }
                            },
                            options: function(e) {
                                return 0 == arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = e.secure || !1)
                            },
                            get: function(t) {
                                try {
                                    return JSON.parse(et.getItem(e + t))
                                } catch (e) {}
                                return null
                            },
                            set: function(t, n) {
                                try {
                                    return et.setItem(e + t, JSON.stringify(n)), !0
                                } catch (e) {}
                                return !1
                            },
                            remove: function(t) {
                                try {
                                    et.removeItem(e + t)
                                } catch (e) {
                                    return !1
                                }
                            }
                        }
                    }
                    return this.storage
                };
                var ei = (o(_ = {}, S.STORAGE_COOKIES, !0), o(_, S.STORAGE_NONE, !0), o(_, S.STORAGE_LOCAL, !0), o(_, S.STORAGE_SESSION, !0), _),
                    er = function() {
                        var e, n;

                        function i(e) {
                            var t = e.storageKey,
                                n = e.disableCookies,
                                r = e.domain,
                                o = e.secure,
                                s = e.sameSite,
                                a = e.expirationDays,
                                u = e.storage;
                            (function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            })(this, i), this.storageKey = t, this.domain = r, this.secure = o, this.sameSite = s, this.expirationDays = a, this.cookieDomain = "";
                            var c = X(L().href);
                            this.cookieDomain = r || (c ? "." + c : null), ei[u] ? this.storage = u : n || !B.areCookiesEnabled({
                                domain: this.cookieDomain,
                                secure: this.secure,
                                sameSite: this.sameSite,
                                expirationDays: this.expirationDays
                            }) ? this.storage = S.STORAGE_LOCAL : this.storage = S.STORAGE_COOKIES
                        }
                        return e = [{
                            key: "getCookieStorageKey",
                            value: function() {
                                if (!this.domain) return this.storageKey;
                                var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                            }
                        }, {
                            key: "save",
                            value: function(e) {
                                var t = e.deviceId,
                                    n = e.userId,
                                    i = e.optOut,
                                    r = e.sessionId,
                                    o = e.lastEventTime,
                                    s = e.eventId,
                                    a = e.identifyId,
                                    u = e.sequenceNumber;
                                if (this.storage !== S.STORAGE_NONE) {
                                    var c = [t, N.encode(n || ""), i ? "1" : "", r ? r.toString(32) : "0", o ? o.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                    switch (this.storage) {
                                        case S.STORAGE_SESSION:
                                            window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                                            break;
                                        case S.STORAGE_LOCAL:
                                            et.setItem(this.storageKey, c);
                                            break;
                                        case S.STORAGE_COOKIES:
                                            this.saveCookie(c)
                                    }
                                }
                            }
                        }, {
                            key: "saveCookie",
                            value: function(e) {
                                B.set(this.getCookieStorageKey(), e, {
                                    domain: this.cookieDomain,
                                    secure: this.secure,
                                    sameSite: this.sameSite,
                                    expirationDays: this.expirationDays
                                })
                            }
                        }, {
                            key: "load",
                            value: function() {
                                var e, t = this;
                                if (this.storage === S.STORAGE_COOKIES) {
                                    var n = this.getCookieStorageKey() + "=",
                                        i = B.getAll(n);
                                    if (0 === i.length || 1 === i.length) e = i[0];
                                    else {
                                        var r = B.sortByEventTime(i)[0];
                                        i.forEach(function() {
                                            return B.set(t.getCookieStorageKey(), null, {})
                                        }), this.saveCookie(r), e = B.get(n)
                                    }
                                }
                                if (e || (e = et.getItem(this.storageKey)), !e) try {
                                    e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                                } catch (e) {
                                    M.log.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                                }
                                if (!e) return null;
                                var o = e.split("."),
                                    s = null;
                                if (o[S.USER_ID_INDEX]) try {
                                    s = N.decode(o[S.USER_ID_INDEX])
                                } catch (e) {
                                    s = null
                                }
                                return {
                                    deviceId: o[S.DEVICE_ID_INDEX],
                                    userId: s,
                                    optOut: "1" === o[S.OPT_OUT_INDEX],
                                    sessionId: parseInt(o[S.SESSION_ID_INDEX], 32),
                                    lastEventTime: parseInt(o[S.LAST_EVENT_TIME_INDEX], 32),
                                    eventId: parseInt(o[S.EVENT_ID_INDEX], 32),
                                    identifyId: parseInt(o[S.IDENTIFY_ID_INDEX], 32),
                                    sequenceNumber: parseInt(o[S.SEQUENCE_NUMBER_INDEX], 32)
                                }
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                var e;
                                if (this.storage === S.STORAGE_COOKIES && (e = B.get(this.getCookieStorageKey() + "="), B.set(this.getCookieStorageKey(), null, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: 0
                                    })), e || (e = et.getItem(this.storageKey), et.clear()), !e) try {
                                    e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey), window.sessionStorage.clear()
                                } catch (e) {
                                    M.log.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                                }
                                return !!e
                            }
                        }], t(i.prototype, e), n && t(i, n), i
                    }(),
                    eo = function(e, t) {
                        var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                            i = function(e, t, n, i) {
                                return M.getQueryParam(e, t) || M.getQueryParam(n, i)
                            },
                            r = i(S.UTM_SOURCE, t, "utmcsr", n),
                            o = i(S.UTM_MEDIUM, t, "utmcmd", n),
                            s = i(S.UTM_CAMPAIGN, t, "utmccn", n),
                            a = i(S.UTM_TERM, t, "utmctr", n),
                            u = i(S.UTM_CONTENT, t, "utmcct", n),
                            c = {},
                            l = function(e, t) {
                                M.isEmptyString(t) || (c[e] = t)
                            };
                        return l(S.UTM_SOURCE, r), l(S.UTM_MEDIUM, o), l(S.UTM_CAMPAIGN, s), l(S.UTM_TERM, a), l(S.UTM_CONTENT, u), c
                    },
                    es = "$clearAll",
                    ea = function() {
                        this.userPropertiesOperations = {}, this.properties = []
                    };
                ea.prototype.add = function(e, t) {
                    return "number" === A(t) || "string" === A(t) ? this._addOperation("$add", e, t) : M.log.error("Unsupported type for value: " + A(t) + ", expecting number or string"), this
                }, ea.prototype.append = function(e, t) {
                    return this._addOperation("$append", e, t), this
                }, ea.prototype.clearAll = function() {
                    return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, es) || M.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations[es] = "-", this)
                }, ea.prototype.prepend = function(e, t) {
                    return this._addOperation("$prepend", e, t), this
                }, ea.prototype.set = function(e, t) {
                    return this._addOperation("$set", e, t), this
                }, ea.prototype.setOnce = function(e, t) {
                    return this._addOperation("$setOnce", e, t), this
                }, ea.prototype.unset = function(e) {
                    return this._addOperation("$unset", e, "-"), this
                }, ea.prototype.preInsert = function(e, t) {
                    return this._addOperation("$preInsert", e, t), this
                }, ea.prototype.postInsert = function(e, t) {
                    return this._addOperation("$postInsert", e, t), this
                }, ea.prototype.remove = function(e, t) {
                    return this._addOperation("$remove", e, t), this
                }, ea.prototype._addOperation = function(e, t, n) {
                    if (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, es)) {
                        M.log.error("This identify already contains a $clearAll operation, skipping operation " + e);
                        return
                    }
                    if (-1 !== this.properties.indexOf(t)) {
                        M.log.error('User property "' + t + '" already used in this identify, skipping operation ' + e);
                        return
                    }
                    Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)
                };
                var eu = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

                function ec(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var el = ec(function(e) {
                        ! function(t) {
                            function n(e, t) {
                                var n = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                            }

                            function i(e, t, i, r, o, s) {
                                var a;
                                return n((a = n(n(t, e), n(r, s))) << o | a >>> 32 - o, i)
                            }

                            function r(e, t, n, r, o, s, a) {
                                return i(t & n | ~t & r, e, t, o, s, a)
                            }

                            function o(e, t, n, r, o, s, a) {
                                return i(t & r | n & ~r, e, t, o, s, a)
                            }

                            function s(e, t, n, r, o, s, a) {
                                return i(t ^ n ^ r, e, t, o, s, a)
                            }

                            function a(e, t, n, r, o, s, a) {
                                return i(n ^ (t | ~r), e, t, o, s, a)
                            }

                            function u(e, t) {
                                e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
                                var i, u, c, l, p, d = 1732584193,
                                    h = -271733879,
                                    f = -1732584194,
                                    g = 271733878;
                                for (i = 0; i < e.length; i += 16) u = d, c = h, l = f, p = g, d = r(d, h, f, g, e[i], 7, -680876936), g = r(g, d, h, f, e[i + 1], 12, -389564586), f = r(f, g, d, h, e[i + 2], 17, 606105819), h = r(h, f, g, d, e[i + 3], 22, -1044525330), d = r(d, h, f, g, e[i + 4], 7, -176418897), g = r(g, d, h, f, e[i + 5], 12, 1200080426), f = r(f, g, d, h, e[i + 6], 17, -1473231341), h = r(h, f, g, d, e[i + 7], 22, -45705983), d = r(d, h, f, g, e[i + 8], 7, 1770035416), g = r(g, d, h, f, e[i + 9], 12, -1958414417), f = r(f, g, d, h, e[i + 10], 17, -42063), h = r(h, f, g, d, e[i + 11], 22, -1990404162), d = r(d, h, f, g, e[i + 12], 7, 1804603682), g = r(g, d, h, f, e[i + 13], 12, -40341101), f = r(f, g, d, h, e[i + 14], 17, -1502002290), h = r(h, f, g, d, e[i + 15], 22, 1236535329), d = o(d, h, f, g, e[i + 1], 5, -165796510), g = o(g, d, h, f, e[i + 6], 9, -1069501632), f = o(f, g, d, h, e[i + 11], 14, 643717713), h = o(h, f, g, d, e[i], 20, -373897302), d = o(d, h, f, g, e[i + 5], 5, -701558691), g = o(g, d, h, f, e[i + 10], 9, 38016083), f = o(f, g, d, h, e[i + 15], 14, -660478335), h = o(h, f, g, d, e[i + 4], 20, -405537848), d = o(d, h, f, g, e[i + 9], 5, 568446438), g = o(g, d, h, f, e[i + 14], 9, -1019803690), f = o(f, g, d, h, e[i + 3], 14, -187363961), h = o(h, f, g, d, e[i + 8], 20, 1163531501), d = o(d, h, f, g, e[i + 13], 5, -1444681467), g = o(g, d, h, f, e[i + 2], 9, -51403784), f = o(f, g, d, h, e[i + 7], 14, 1735328473), h = o(h, f, g, d, e[i + 12], 20, -1926607734), d = s(d, h, f, g, e[i + 5], 4, -378558), g = s(g, d, h, f, e[i + 8], 11, -2022574463), f = s(f, g, d, h, e[i + 11], 16, 1839030562), h = s(h, f, g, d, e[i + 14], 23, -35309556), d = s(d, h, f, g, e[i + 1], 4, -1530992060), g = s(g, d, h, f, e[i + 4], 11, 1272893353), f = s(f, g, d, h, e[i + 7], 16, -155497632), h = s(h, f, g, d, e[i + 10], 23, -1094730640), d = s(d, h, f, g, e[i + 13], 4, 681279174), g = s(g, d, h, f, e[i], 11, -358537222), f = s(f, g, d, h, e[i + 3], 16, -722521979), h = s(h, f, g, d, e[i + 6], 23, 76029189), d = s(d, h, f, g, e[i + 9], 4, -640364487), g = s(g, d, h, f, e[i + 12], 11, -421815835), f = s(f, g, d, h, e[i + 15], 16, 530742520), h = s(h, f, g, d, e[i + 2], 23, -995338651), d = a(d, h, f, g, e[i], 6, -198630844), g = a(g, d, h, f, e[i + 7], 10, 1126891415), f = a(f, g, d, h, e[i + 14], 15, -1416354905), h = a(h, f, g, d, e[i + 5], 21, -57434055), d = a(d, h, f, g, e[i + 12], 6, 1700485571), g = a(g, d, h, f, e[i + 3], 10, -1894986606), f = a(f, g, d, h, e[i + 10], 15, -1051523), h = a(h, f, g, d, e[i + 1], 21, -2054922799), d = a(d, h, f, g, e[i + 8], 6, 1873313359), g = a(g, d, h, f, e[i + 15], 10, -30611744), f = a(f, g, d, h, e[i + 6], 15, -1560198380), h = a(h, f, g, d, e[i + 13], 21, 1309151649), d = a(d, h, f, g, e[i + 4], 6, -145523070), g = a(g, d, h, f, e[i + 11], 10, -1120210379), f = a(f, g, d, h, e[i + 2], 15, 718787259), h = a(h, f, g, d, e[i + 9], 21, -343485551), d = n(d, u), h = n(h, c), f = n(f, l), g = n(g, p);
                                return [d, h, f, g]
                            }

                            function c(e) {
                                var t, n = "",
                                    i = 32 * e.length;
                                for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                return n
                            }

                            function l(e) {
                                var t, n = [];
                                for (t = 0, n[(e.length >> 2) - 1] = void 0; t < n.length; t += 1) n[t] = 0;
                                var i = 8 * e.length;
                                for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                return n
                            }

                            function p(e) {
                                var t, n, i = "0123456789abcdef",
                                    r = "";
                                for (n = 0; n < e.length; n += 1) r += i.charAt((t = e.charCodeAt(n)) >>> 4 & 15) + i.charAt(15 & t);
                                return r
                            }

                            function d(e) {
                                return unescape(encodeURIComponent(e))
                            }

                            function h(e) {
                                var t;
                                return c(u(l(t = d(e)), 8 * t.length))
                            }

                            function f(e, t) {
                                return function(e, t) {
                                    var n, i, r = l(e),
                                        o = [],
                                        s = [];
                                    for (o[15] = s[15] = void 0, r.length > 16 && (r = u(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], s[n] = 1549556828 ^ r[n];
                                    return i = u(o.concat(l(t)), 512 + 8 * t.length), c(u(s.concat(i), 640))
                                }(d(e), d(t))
                            }

                            function g(e, t, n) {
                                return t ? n ? f(t, e) : p(f(t, e)) : n ? h(e) : p(h(e))
                            }
                            e.exports ? e.exports = g : t.md5 = g
                        }(eu)
                    }),
                    ep = Object.getOwnPropertySymbols,
                    ed = Object.prototype.hasOwnProperty,
                    eh = Object.prototype.propertyIsEnumerable,
                    ef = ! function() {
                        try {
                            if (!Object.assign) return !1;
                            var e = new String("abc");
                            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                            var i = Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            });
                            if ("0123456789" !== i.join("")) return !1;
                            var r = {};
                            if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                                    r[e] = e
                                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join("")) return !1;
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }() ? function(e, t) {
                        for (var n, i, r = function(e) {
                                if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                                return Object(e)
                            }(e), o = 1; o < arguments.length; o++) {
                            for (var s in n = Object(arguments[o])) ed.call(n, s) && (r[s] = n[s]);
                            if (ep) {
                                i = ep(n);
                                for (var a = 0; a < i.length; a++) eh.call(n, i[a]) && (r[i[a]] = n[i[a]])
                            }
                        }
                        return r
                    } : Object.assign,
                    eg = "%[a-f0-9]{2}",
                    ev = RegExp(eg, "gi"),
                    ey = RegExp("(" + eg + ")+", "gi"),
                    em = function(e) {
                        if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                        try {
                            return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                        } catch (t) {
                            return function(e) {
                                for (var t = {
                                        "%FE%FF": "��",
                                        "%FF%FE": "��"
                                    }, n = ey.exec(e); n;) {
                                    try {
                                        t[n[0]] = decodeURIComponent(n[0])
                                    } catch (e) {
                                        var i = function(e) {
                                            try {
                                                return decodeURIComponent(e)
                                            } catch (i) {
                                                for (var t = e.match(ev), n = 1; n < t.length; n++) t = (e = (function e(t, n) {
                                                    try {
                                                        return decodeURIComponent(t.join(""))
                                                    } catch (e) {}
                                                    if (1 === t.length) return t;
                                                    n = n || 1;
                                                    var i = t.slice(0, n),
                                                        r = t.slice(n);
                                                    return Array.prototype.concat.call([], e(i), e(r))
                                                })(t, n).join("")).match(ev);
                                                return e
                                            }
                                        }(n[0]);
                                        i !== n[0] && (t[n[0]] = i)
                                    }
                                    n = ey.exec(e)
                                }
                                t["%C2"] = "�";
                                for (var r = Object.keys(t), o = 0; o < r.length; o++) {
                                    var s = r[o];
                                    e = e.replace(RegExp(s, "g"), t[s])
                                }
                                return e
                            }(e)
                        }
                    };

                function e_(e, t) {
                    return t.encode ? t.strict ? encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                    }) : encodeURIComponent(e) : e
                }

                function eE(e) {
                    var t = e.indexOf("?");
                    return -1 === t ? "" : e.slice(t + 1)
                }

                function ew(e, t) {
                    var n = function(e) {
                            var t;
                            switch (e.arrayFormat) {
                                case "index":
                                    return function(e, n, i) {
                                        if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                            i[e] = n;
                                            return
                                        }
                                        void 0 === i[e] && (i[e] = {}), i[e][t[1]] = n
                                    };
                                case "bracket":
                                    return function(e, n, i) {
                                        if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t) {
                                            if (void 0 === i[e]) {
                                                i[e] = [n];
                                                return
                                            }
                                        } else {
                                            i[e] = n;
                                            return
                                        }
                                        i[e] = [].concat(i[e], n)
                                    };
                                default:
                                    return function(e, t, n) {
                                        if (void 0 === n[e]) {
                                            n[e] = t;
                                            return
                                        }
                                        n[e] = [].concat(n[e], t)
                                    }
                            }
                        }(t = ef({
                            arrayFormat: "none"
                        }, t)),
                        i = Object.create(null);
                    return "string" == typeof e && (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach(function(e) {
                        var t = e.replace(/\+/g, " ").split("="),
                            r = t.shift(),
                            o = t.length > 0 ? t.join("=") : void 0;
                        o = void 0 === o ? null : em(o), n(em(r), o, i)
                    }), Object.keys(i).sort().reduce(function(e, t) {
                        var n = i[t];
                        return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                            return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                                return Number(e) - Number(t)
                            }).map(function(e) {
                                return t[e]
                            }) : t
                        }(n) : e[t] = n, e
                    }, Object.create(null))) : i
                }
                var eI = {
                        extract: eE,
                        parse: ew,
                        stringify: function(e, t) {
                            !1 === (t = ef({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, t)).sort && (t.sort = function() {});
                            var n = function(e) {
                                switch (e.arrayFormat) {
                                    case "index":
                                        return function(t, n, i) {
                                            return null === n ? [e_(t, e), "[", i, "]"].join("") : [e_(t, e), "[", e_(i, e), "]=", e_(n, e)].join("")
                                        };
                                    case "bracket":
                                        return function(t, n) {
                                            return null === n ? e_(t, e) : [e_(t, e), "[]=", e_(n, e)].join("")
                                        };
                                    default:
                                        return function(t, n) {
                                            return null === n ? e_(t, e) : [e_(t, e), "=", e_(n, e)].join("")
                                        }
                                }
                            }(t);
                            return e ? Object.keys(e).sort(t.sort).map(function(i) {
                                var r = e[i];
                                if (void 0 === r) return "";
                                if (null === r) return e_(i, t);
                                if (Array.isArray(r)) {
                                    var o = [];
                                    return r.slice().forEach(function(e) {
                                        void 0 !== e && o.push(n(i, e, o.length))
                                    }), o.join("&")
                                }
                                return e_(i, t) + "=" + e_(r, t)
                            }).filter(function(e) {
                                return e.length > 0
                            }).join("&") : ""
                        },
                        parseUrl: function(e, t) {
                            return {
                                url: e.split("?")[0] || "",
                                query: ew(eE(e), t)
                            }
                        }
                    },
                    eb = function(e, t, n) {
                        this.url = e, this.data = t || {}, this.headers = n
                    };
                eb.prototype.send = function(e) {
                    if (window.XDomainRequest) {
                        var t = new window.XDomainRequest;
                        t.open("POST", this.url, !0), t.onload = function() {
                            e(200, t.responseText)
                        }, t.onerror = function() {
                            "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                        }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(eI.stringify(this.data))
                    } else {
                        var n = new XMLHttpRequest;
                        n.open("POST", this.url, !0), n.onreadystatechange = function() {
                                4 === n.readyState && e(n.status, n.responseText)
                            },
                            function(e, t) {
                                for (var n in t) e.setRequestHeader(n, t[n])
                            }(n, this.headers), n.send(eI.stringify(this.data))
                    }
                };
                var eS = function() {
                    this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                };
                eS.prototype.setProductId = function(e) {
                    return "string" !== A(e) ? M.log.error("Unsupported type for productId: " + A(e) + ", expecting string") : M.isEmptyString(e) ? M.log.error("Invalid empty productId") : this._productId = e, this
                }, eS.prototype.setQuantity = function(e) {
                    return "number" !== A(e) ? M.log.error("Unsupported type for quantity: " + A(e) + ", expecting number") : this._quantity = parseInt(e), this
                }, eS.prototype.setPrice = function(e) {
                    return "number" !== A(e) ? M.log.error("Unsupported type for price: " + A(e) + ", expecting number") : this._price = e, this
                }, eS.prototype.setRevenueType = function(e) {
                    return "string" !== A(e) ? M.log.error("Unsupported type for revenueType: " + A(e) + ", expecting string") : this._revenueType = e, this
                }, eS.prototype.setEventProperties = function(e) {
                    return "object" !== A(e) ? M.log.error("Unsupported type for eventProperties: " + A(e) + ", expecting object") : this._properties = M.validateProperties(e), this
                }, eS.prototype._isValidRevenue = function() {
                    return "number" === A(this._price) || (M.log.error("Invalid revenue, need to set price field"), !1)
                }, eS.prototype._toJSONObject = function() {
                    var e = "object" === A(this._properties) ? this._properties : {};
                    return null !== this._productId && (e[S.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (e[S.REVENUE_QUANTITY] = this._quantity), null !== this._price && (e[S.REVENUE_PRICE] = this._price), null !== this._revenueType && (e[S.REVENUE_REVENUE_TYPE] = this._revenueType), e
                };
                var eT = ec(function(e, t) {
                    !
                    /*!
                     * UAParser.js v0.7.21
                     * Lightweight JavaScript-based User-Agent string parser
                     * https://github.com/faisalman/ua-parser-js
                     *
                     * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
                     * Licensed under MIT License
                     */
                    function(n, i) {
                        var r = "function",
                            o = "object",
                            s = "model",
                            a = "name",
                            u = "type",
                            c = "vendor",
                            l = "version",
                            p = "architecture",
                            d = "console",
                            h = "mobile",
                            f = "tablet",
                            g = "smarttv",
                            v = "wearable",
                            y = {
                                extend: function(e, t) {
                                    var n = {};
                                    for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                    return n
                                },
                                has: function(e, t) {
                                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                                },
                                lowerize: function(e) {
                                    return e.toLowerCase()
                                },
                                major: function(e) {
                                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
                                },
                                trim: function(e) {
                                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                }
                            },
                            m = {
                                rgx: function(e, t) {
                                    for (var n, s, a, u, c, l, p = 0; p < t.length && !c;) {
                                        var d = t[p],
                                            h = t[p + 1];
                                        for (n = s = 0; n < d.length && !c;)
                                            if (c = d[n++].exec(e))
                                                for (a = 0; a < h.length; a++) l = c[++s], typeof(u = h[a]) === o && u.length > 0 ? 2 == u.length ? typeof u[1] == r ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== r || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : i : this[u[0]] = l ? u[1].call(this, l, u[2]) : i : 4 == u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : i) : this[u] = l || i;
                                        p += 2
                                    }
                                },
                                str: function(e, t) {
                                    for (var n in t)
                                        if (typeof t[n] === o && t[n].length > 0) {
                                            for (var r = 0; r < t[n].length; r++)
                                                if (y.has(t[n][r], e)) return "?" === n ? i : n
                                        } else if (y.has(t[n], e)) return "?" === n ? i : n;
                                    return e
                                }
                            },
                            _ = {
                                browser: {
                                    oldsafari: {
                                        version: {
                                            "1.0": "/8",
                                            "1.2": "/1",
                                            "1.3": "/3",
                                            "2.0": "/412",
                                            "2.0.2": "/416",
                                            "2.0.3": "/417",
                                            "2.0.4": "/419",
                                            "?": "/"
                                        }
                                    }
                                },
                                device: {
                                    amazon: {
                                        model: {
                                            "Fire Phone": ["SD", "KF"]
                                        }
                                    },
                                    sprint: {
                                        model: {
                                            "Evo Shift 4G": "7373KT"
                                        },
                                        vendor: {
                                            HTC: "APA",
                                            Sprint: "Sprint"
                                        }
                                    }
                                },
                                os: {
                                    windows: {
                                        version: {
                                            ME: "4.90",
                                            "NT 3.11": "NT3.51",
                                            "NT 4.0": "NT4.0",
                                            2e3: "NT 5.0",
                                            XP: ["NT 5.1", "NT 5.2"],
                                            Vista: "NT 6.0",
                                            7: "NT 6.1",
                                            8: "NT 6.2",
                                            "8.1": "NT 6.3",
                                            10: ["NT 6.4", "NT 10.0"],
                                            RT: "ARM"
                                        }
                                    }
                                }
                            },
                            E = {
                                browser: [
                                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                    [a, l],
                                    [/(opios)[\/\s]+([\w\.]+)/i],
                                    [
                                        [a, "Opera Mini"], l
                                    ],
                                    [/\s(opr)\/([\w\.]+)/i],
                                    [
                                        [a, "Opera"], l
                                    ],
                                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                                    [a, l],
                                    [/(konqueror)\/([\w\.]+)/i],
                                    [
                                        [a, "Konqueror"], l
                                    ],
                                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                    [
                                        [a, "IE"], l
                                    ],
                                    [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                                    [
                                        [a, "Edge"], l
                                    ],
                                    [/(yabrowser)\/([\w\.]+)/i],
                                    [
                                        [a, "Yandex"], l
                                    ],
                                    [/(Avast)\/([\w\.]+)/i],
                                    [
                                        [a, "Avast Secure Browser"], l
                                    ],
                                    [/(AVG)\/([\w\.]+)/i],
                                    [
                                        [a, "AVG Secure Browser"], l
                                    ],
                                    [/(puffin)\/([\w\.]+)/i],
                                    [
                                        [a, "Puffin"], l
                                    ],
                                    [/(focus)\/([\w\.]+)/i],
                                    [
                                        [a, "Firefox Focus"], l
                                    ],
                                    [/(opt)\/([\w\.]+)/i],
                                    [
                                        [a, "Opera Touch"], l
                                    ],
                                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                    [
                                        [a, "UCBrowser"], l
                                    ],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [a, /_/g, " "], l
                                    ],
                                    [/(windowswechat qbcore)\/([\w\.]+)/i],
                                    [
                                        [a, "WeChat(Win) Desktop"], l
                                    ],
                                    [/(micromessenger)\/([\w\.]+)/i],
                                    [
                                        [a, "WeChat"], l
                                    ],
                                    [/(brave)\/([\w\.]+)/i],
                                    [
                                        [a, "Brave"], l
                                    ],
                                    [/(qqbrowserlite)\/([\w\.]+)/i],
                                    [a, l],
                                    [/(QQ)\/([\d\.]+)/i],
                                    [a, l],
                                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                                    [a, l],
                                    [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                                    [a, l],
                                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                                    [a, l],
                                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                                    [a],
                                    [/(LBBROWSER)/i],
                                    [a],
                                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                    [l, [a, "MIUI Browser"]],
                                    [/;fbav\/([\w\.]+);/i],
                                    [l, [a, "Facebook"]],
                                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                                    [a, l],
                                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                    [l, [a, "Chrome Headless"]],
                                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [a, /(.+)/, "$1 WebView"], l
                                    ],
                                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                    [
                                        [a, /(.+(?:g|us))(.+)/, "$1 $2"], l
                                    ],
                                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],
                                    [
                                        [a, "Chrome Mobile"], l
                                    ],
                                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                    [l, [a, "Android Browser"]],
                                    [/(sailfishbrowser)\/([\w\.]+)/i],
                                    [
                                        [a, "Sailfish Browser"], l
                                    ],
                                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                    [a, l],
                                    [/(dolfin)\/([\w\.]+)/i],
                                    [
                                        [a, "Dolphin"], l
                                    ],
                                    [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                                    [
                                        [a, "360 Browser"]
                                    ],
                                    [/(coast)\/([\w\.]+)/i],
                                    [
                                        [a, "Opera Coast"], l
                                    ],
                                    [/fxios\/([\w\.-]+)/i],
                                    [l, [a, "Firefox"]],
                                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                    [l, [a, "Mobile Safari"]],
                                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                    [l, a],
                                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                    [
                                        [a, "GSA"], l
                                    ],
                                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                    [a, [l, m.str, _.browser.oldsafari.version]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [a, l],
                                    [/(navigator|netscape)\/([\w\.-]+)/i],
                                    [
                                        [a, "Netscape"], l
                                    ],
                                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                    [a, l]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                    [
                                        [p, "amd64"]
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [p, y.lowerize]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [p, "ia32"]
                                    ],
                                    [/windows\s(ce|mobile);\sppc;/i],
                                    [
                                        [p, "arm"]
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                    [
                                        [p, /ower/, "", y.lowerize]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [p, "sparc"]
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                    [
                                        [p, y.lowerize]
                                    ]
                                ],
                                device: [
                                    [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                                    [s, c, [u, f]],
                                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                                    [s, [c, "Apple"],
                                        [u, f]
                                    ],
                                    [/(apple\s{0,1}tv)/i],
                                    [
                                        [s, "Apple TV"],
                                        [c, "Apple"],
                                        [u, g]
                                    ],
                                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                                    [c, s, [u, f]],
                                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                                    [s, [c, "Amazon"],
                                        [u, f]
                                    ],
                                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                                    [
                                        [s, m.str, _.device.amazon.model],
                                        [c, "Amazon"],
                                        [u, h]
                                    ],
                                    [/android.+aft([bms])\sbuild/i],
                                    [s, [c, "Amazon"],
                                        [u, g]
                                    ],
                                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                    [s, c, [u, h]],
                                    [/\((ip[honed|\s\w*]+);/i],
                                    [s, [c, "Apple"],
                                        [u, h]
                                    ],
                                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                                    [c, s, [u, h]],
                                    [/\(bb10;\s(\w+)/i],
                                    [s, [c, "BlackBerry"],
                                        [u, h]
                                    ],
                                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                                    [s, [c, "Asus"],
                                        [u, f]
                                    ],
                                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                                    [
                                        [c, "Sony"],
                                        [s, "Xperia Tablet"],
                                        [u, f]
                                    ],
                                    [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [s, [c, "Sony"],
                                        [u, h]
                                    ],
                                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                                    [c, s, [u, d]],
                                    [/android.+;\s(shield)\sbuild/i],
                                    [s, [c, "Nvidia"],
                                        [u, d]
                                    ],
                                    [/(playstation\s[34portablevi]+)/i],
                                    [s, [c, "Sony"],
                                        [u, d]
                                    ],
                                    [/(sprint\s(\w+))/i],
                                    [
                                        [c, m.str, _.device.sprint.vendor],
                                        [s, m.str, _.device.sprint.model],
                                        [u, h]
                                    ],
                                    [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                                    [c, [s, /_/g, " "],
                                        [u, h]
                                    ],
                                    [/(nexus\s9)/i],
                                    [s, [c, "HTC"],
                                        [u, f]
                                    ],
                                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                                    [s, [c, "Huawei"],
                                        [u, h]
                                    ],
                                    [/android.+(bah2?-a?[lw]\d{2})/i],
                                    [s, [c, "Huawei"],
                                        [u, f]
                                    ],
                                    [/(microsoft);\s(lumia[\s\w]+)/i],
                                    [c, s, [u, h]],
                                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                    [s, [c, "Microsoft"],
                                        [u, d]
                                    ],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [s, /\./g, " "],
                                        [c, "Microsoft"],
                                        [u, h]
                                    ],
                                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                                    [s, [c, "Motorola"],
                                        [u, h]
                                    ],
                                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                    [s, [c, "Motorola"],
                                        [u, f]
                                    ],
                                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                    [
                                        [c, y.trim],
                                        [s, y.trim],
                                        [u, g]
                                    ],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [s, /^/, "SmartTV"],
                                        [c, "Samsung"],
                                        [u, g]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i],
                                    [s, [c, "Sharp"],
                                        [u, g]
                                    ],
                                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                                    [
                                        [c, "Samsung"], s, [u, f]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [c, [u, g], s],
                                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                                    [
                                        [c, "Samsung"], s, [u, h]
                                    ],
                                    [/sie-(\w*)/i],
                                    [s, [c, "Siemens"],
                                        [u, h]
                                    ],
                                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                                    [
                                        [c, "Nokia"], s, [u, h]
                                    ],
                                    [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                    [s, [c, "Acer"],
                                        [u, f]
                                    ],
                                    [/android.+([vl]k\-?\d{3})\s+build/i],
                                    [s, [c, "LG"],
                                        [u, f]
                                    ],
                                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                    [
                                        [c, "LG"], s, [u, f]
                                    ],
                                    [/(lg) netcast\.tv/i],
                                    [c, s, [u, g]],
                                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                                    [s, [c, "LG"],
                                        [u, h]
                                    ],
                                    [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                                    [c, s, [u, f]],
                                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                    [s, [c, "Lenovo"],
                                        [u, f]
                                    ],
                                    [/(lenovo)[_\s-]?([\w-]+)/i],
                                    [c, s, [u, h]],
                                    [/linux;.+((jolla));/i],
                                    [c, s, [u, h]],
                                    [/((pebble))app\/[\d\.]+\s/i],
                                    [c, s, [u, v]],
                                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                    [c, s, [u, h]],
                                    [/crkey/i],
                                    [
                                        [s, "Chromecast"],
                                        [c, "Google"],
                                        [u, g]
                                    ],
                                    [/android.+;\s(glass)\s\d/i],
                                    [s, [c, "Google"],
                                        [u, v]
                                    ],
                                    [/android.+;\s(pixel c)[\s)]/i],
                                    [s, [c, "Google"],
                                        [u, f]
                                    ],
                                    [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                                    [s, [c, "Google"],
                                        [u, h]
                                    ],
                                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                                    [
                                        [s, /_/g, " "],
                                        [c, "Xiaomi"],
                                        [u, h]
                                    ],
                                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                                    [
                                        [s, /_/g, " "],
                                        [c, "Xiaomi"],
                                        [u, f]
                                    ],
                                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                                    [s, [c, "Meizu"],
                                        [u, h]
                                    ],
                                    [/(mz)-([\w-]{2,})/i],
                                    [
                                        [c, "Meizu"], s, [u, h]
                                    ],
                                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                                    [s, [c, "OnePlus"],
                                        [u, h]
                                    ],
                                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                                    [s, [c, "RCA"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                                    [s, [c, "Dell"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                                    [s, [c, "Verizon"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                                    [
                                        [c, "Barnes & Noble"], s, [u, f]
                                    ],
                                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                                    [s, [c, "NuVision"],
                                        [u, f]
                                    ],
                                    [/android.+;\s(k88)\sbuild/i],
                                    [s, [c, "ZTE"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                                    [s, [c, "Swiss"],
                                        [u, h]
                                    ],
                                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                                    [s, [c, "Swiss"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                                    [s, [c, "Zeki"],
                                        [u, f]
                                    ],
                                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                                    [
                                        [c, "Dragon Touch"], s, [u, f]
                                    ],
                                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                                    [s, [c, "Insignia"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                                    [s, [c, "NextBook"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                                    [
                                        [c, "Voice"], s, [u, h]
                                    ],
                                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                                    [
                                        [c, "LvTel"], s, [u, h]
                                    ],
                                    [/android.+;\s(PH-1)\s/i],
                                    [s, [c, "Essential"],
                                        [u, h]
                                    ],
                                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                                    [s, [c, "Envizen"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                                    [c, s, [u, f]],
                                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                                    [s, [c, "MachSpeed"],
                                        [u, f]
                                    ],
                                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                                    [c, s, [u, f]],
                                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                                    [s, [c, "Rotor"],
                                        [u, f]
                                    ],
                                    [/android.+(KS(.+))\s+build/i],
                                    [s, [c, "Amazon"],
                                        [u, f]
                                    ],
                                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                                    [c, s, [u, f]],
                                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                                    [
                                        [u, y.lowerize], c, s
                                    ],
                                    [/[\s\/\(](smart-?tv)[;\)]/i],
                                    [
                                        [u, g]
                                    ],
                                    [/(android[\w\.\s\-]{0,9});.+build/i],
                                    [s, [c, "Generic"]]
                                ],
                                engine: [
                                    [/windows.+\sedge\/([\w\.]+)/i],
                                    [l, [a, "EdgeHTML"]],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [l, [a, "Blink"]],
                                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                    [a, l],
                                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                                    [l, a]
                                ],
                                os: [
                                    [/microsoft\s(windows)\s(vista|xp)/i],
                                    [a, l],
                                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                    [
                                        [a, m.str, _.os.windows.name],
                                        [l, m.str, _.os.windows.version]
                                    ],
                                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                    [
                                        [a, "Windows"],
                                        [l, m.str, _.os.windows.version]
                                    ],
                                    [/\((bb)(10);/i],
                                    [
                                        [a, "BlackBerry"], l
                                    ],
                                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                                    [a, l],
                                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                                    [
                                        [a, "Symbian"], l
                                    ],
                                    [/\((series40);/i],
                                    [a],
                                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                    [
                                        [a, "Firefox OS"], l
                                    ],
                                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                                    [
                                        [a, "Linux"], l
                                    ],
                                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                    [
                                        [a, "Chromium OS"], l
                                    ],
                                    [/(sunos)\s?([\w\.\d]*)/i],
                                    [
                                        [a, "Solaris"], l
                                    ],
                                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                                    [
                                        [a, "Linux"], l
                                    ],
                                    [/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
                                    [
                                        [a, "iPhone"],
                                        [l, /_/g, "."]
                                    ],
                                    [/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i],
                                    [
                                        [a, "iPad"],
                                        [l, /_/g, "."]
                                    ],
                                    [/(haiku)\s(\w+)/i],
                                    [a, l],
                                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                                    [
                                        [l, /_/g, "."],
                                        [a, "iOS"]
                                    ],
                                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                    [
                                        [a, "Mac"],
                                        [l, /_/g, "."]
                                    ],
                                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                                    [a, l]
                                ]
                            },
                            w = function(e, t) {
                                if ("object" == typeof e && (t = e, e = i), !(this instanceof w)) return new w(e, t).getResult();
                                var r = e || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                    o = t ? y.extend(E, t) : E;
                                return this.getBrowser = function() {
                                    var e = {
                                        name: i,
                                        version: i
                                    };
                                    return m.rgx.call(e, r, o.browser), e.major = y.major(e.version), e
                                }, this.getCPU = function() {
                                    var e = {
                                        architecture: i
                                    };
                                    return m.rgx.call(e, r, o.cpu), e
                                }, this.getDevice = function() {
                                    var e = {
                                        vendor: i,
                                        model: i,
                                        type: i
                                    };
                                    return m.rgx.call(e, r, o.device), e
                                }, this.getEngine = function() {
                                    var e = {
                                        name: i,
                                        version: i
                                    };
                                    return m.rgx.call(e, r, o.engine), e
                                }, this.getOS = function() {
                                    var e = {
                                        name: i,
                                        version: i
                                    };
                                    return m.rgx.call(e, r, o.os), e
                                }, this.getResult = function() {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU()
                                    }
                                }, this.getUA = function() {
                                    return r
                                }, this.setUA = function(e) {
                                    return r = e, this
                                }, this
                            };
                        w.VERSION = "0.7.21", w.BROWSER = {
                            NAME: a,
                            MAJOR: "major",
                            VERSION: l
                        }, w.CPU = {
                            ARCHITECTURE: p
                        }, w.DEVICE = {
                            MODEL: s,
                            VENDOR: c,
                            TYPE: u,
                            CONSOLE: d,
                            MOBILE: h,
                            SMARTTV: g,
                            TABLET: f,
                            WEARABLE: v,
                            EMBEDDED: "embedded"
                        }, w.ENGINE = {
                            NAME: a,
                            VERSION: l
                        }, w.OS = {
                            NAME: a,
                            VERSION: l
                        }, e.exports && (t = e.exports = w), t.UAParser = w;
                        var I = n && (n.jQuery || n.Zepto);
                        if (I && !I.ua) {
                            var b = new w;
                            I.ua = b.getResult(), I.ua.get = function() {
                                return b.getUA()
                            }, I.ua.set = function(e) {
                                b.setUA(e);
                                var t = b.getResult();
                                for (var n in t) I.ua[n] = t[n]
                            }
                        }
                    }("object" == typeof window ? window : eu)
                });
                eT.UAParser;
                var eN = "8.5.0",
                    eO = {
                        apiEndpoint: "api.amplitude.com",
                        batchEvents: !1,
                        cookieExpiration: 365,
                        cookieName: "amplitude_id",
                        sameSiteCookie: "Lax",
                        cookieForceUpgrade: !1,
                        deferInitialization: !1,
                        disableCookies: !1,
                        deviceIdFromUrlParam: !1,
                        domain: "",
                        eventUploadPeriodMillis: 3e4,
                        eventUploadThreshold: 30,
                        forceHttps: !0,
                        includeFbclid: !1,
                        includeGclid: !1,
                        includeReferrer: !1,
                        includeUtm: !1,
                        language: ({
                            getLanguage: function() {
                                return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || ""
                            }
                        }).getLanguage(),
                        logLevel: "WARN",
                        logAttributionCapturedEvent: !1,
                        optOut: !1,
                        onError: function() {},
                        onExitPage: function() {},
                        platform: "Web",
                        savedMaxCount: 1e3,
                        saveEvents: !0,
                        saveParamsReferrerOncePerSession: !0,
                        secureCookie: !1,
                        sessionTimeout: 18e5,
                        storage: S.STORAGE_DEFAULT,
                        trackingOptions: {
                            city: !0,
                            country: !0,
                            carrier: !0,
                            device_manufacturer: !0,
                            device_model: !0,
                            dma: !0,
                            ip_address: !0,
                            language: !0,
                            os_name: !0,
                            os_version: !0,
                            platform: !0,
                            region: !0,
                            version_name: !0
                        },
                        transport: S.TRANSPORT_HTTP,
                        unsetParamsReferrerOnNewSession: !1,
                        unsentKey: "amplitude_unsent",
                        unsentIdentifyKey: "amplitude_unsent_identify",
                        uploadBatchSize: 100,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }
                    },
                    eA = function(e) {
                        a() || M.log.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = M.isEmptyString(e) ? S.DEFAULT_INSTANCE : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new eT(navigator.userAgent).getResult(), this.options = s({}, eO, {
                            trackingOptions: s({}, eO.trackingOptions)
                        }), this.cookieStorage = new en().getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                    };
                eA.prototype.Identify = ea, eA.prototype.Revenue = eS, eA.prototype.init = function(e, t, n, i) {
                    var r = this;
                    if ("string" !== A(e) || M.isEmptyString(e)) {
                        M.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                        return
                    }
                    try {
                        eR(this.options, n), a() && void 0 !== window.Prototype && Array.prototype.toJSON && (E(), M.log.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== eO.cookieName && M.log.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === S.DEFAULT_INSTANCE ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = S.COOKIE_PREFIX + "_" + this._storageSuffixV5, this.cookieStorage.options({
                            expirationDays: this.options.cookieExpiration,
                            domain: this.options.domain,
                            secure: this.options.secureCookie,
                            sameSite: this.options.sameSiteCookie
                        }), this._metadataStorage = new er({
                            storageKey: this._cookieName,
                            disableCookies: this.options.disableCookies,
                            expirationDays: this.options.cookieExpiration,
                            domain: this.options.domain,
                            secure: this.options.secureCookie,
                            sameSite: this.options.sameSiteCookie,
                            storage: this.options.storage
                        });
                        var o = !!this.cookieStorage.get(this._oldCookiename),
                            s = !!this._metadataStorage.load();
                        if (this._useOldCookie = !s && o && !this.options.cookieForceUpgrade, this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !(s || o)) {
                            this._deferInitialization(e, t, n, i);
                            return
                        }
                        "string" === A(this.options.logLevel) && M.setLogLevel(this.options.logLevel);
                        var u = eM(this);
                        this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                                tracking_options: u
                            } : {}, this.options.cookieForceUpgrade && o && (s || eP(this), this.cookieStorage.remove(this._oldCookiename)), eC(this), this._pendingReadStorage = !0, this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map(function(e) {
                                return {
                                    event: e
                                }
                            }).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map(function(e) {
                                return {
                                    event: e
                                }
                            }).concat(this._unsentIdentifys)),
                            function() {
                                n && n.deviceId && !M.validateDeviceId(n.deviceId) && (M.log.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), r.options.deviceId = r._getInitialDeviceId(n && n.deviceId, void 0), r.options.userId = "string" === A(t) && !M.isEmptyString(t) && t || "number" === A(t) && t.toString() || r.options.userId || null;
                                var e = new Date().getTime();
                                (!r._sessionId || !r._lastEventTime || e - r._lastEventTime > r.options.sessionTimeout) && (r.options.unsetParamsReferrerOnNewSession && r._unsetUTMParams(), r._newSession = !0, r._sessionId = e, r.options.saveParamsReferrerOncePerSession && r._trackParamsAndReferrer()), r.options.saveParamsReferrerOncePerSession || r._trackParamsAndReferrer(), r.options.saveEvents && (ek(r._unsentEvents), ek(r._unsentIdentifys)), r._lastEventTime = e, ex(r), r._pendingReadStorage = !1, r._sendEventsIfReady();
                                for (var i = 0; i < r._onInit.length; i++) r._onInit[i](r);
                                r._onInit = [], r._isInitialized = !0
                            }(), this.runQueuedFunctions(), "function" === A(i) && i(this);
                        var c = this.options.onExitPage;
                        if ("function" === A(c) && !this.pageHandlersAdded) {
                            this.pageHandlersAdded = !0;
                            var l = function() {
                                var e = r.options.transport;
                                r.setTransport(S.TRANSPORT_BEACON), c(), r.setTransport(e)
                            };
                            window.addEventListener("pagehide", function() {
                                l()
                            }, !1)
                        }
                    } catch (e) {
                        M.log.error(e), "function" === A(n.onError) && n.onError(e)
                    }
                }, eA.prototype.deleteLowerLevelDomainCookies = function() {
                    var e = z(),
                        t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                    if (t && e !== t && RegExp(t + "$").test(e)) {
                        for (var n = e.split("."), i = t.split("."), r = n.length; r > i.length; --r) {
                            var o = n.slice(n.length - r).join(".");
                            B.set(this._cookieName, null, {
                                domain: "." + o
                            })
                        }
                        B.set(this._cookieName, null, {})
                    }
                }, eA.prototype._getInitialDeviceId = function(e, t) {
                    if (e) return e;
                    if (this.options.deviceIdFromUrlParam) {
                        var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                        if (n) return n
                    }
                    return this.options.deviceId ? this.options.deviceId : t || V()
                };
                var ek = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].event.user_properties,
                            i = e[t].event.event_properties,
                            r = e[t].event.groups;
                        e[t].event.user_properties = M.validateProperties(n), e[t].event.event_properties = M.validateProperties(i), e[t].event.groups = M.validateGroups(r)
                    }
                };
                eA.prototype._trackParamsAndReferrer = function() {
                    if (this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                        var e, t, n, i, r = s({}, e, t, n, i);
                        Object.keys(r).length > 0 && this.logEvent(S.ATTRIBUTION_EVENT, r)
                    }
                };
                var eR = function e(t, n) {
                    if ("object" === A(n)) {
                        var i = new Set(["headers"]);
                        for (var r in n) i.has(r) ? t[r] = s({}, t[r], n[r]) : Object.prototype.hasOwnProperty.call(n, r) && function(i) {
                            if (Object.prototype.hasOwnProperty.call(t, i)) {
                                var r = n[i],
                                    o = A(t[i]);
                                ("transport" !== i || M.validateTransport(r)) && M.validateInput(r, i + " option", o) && ("boolean" === o ? t[i] = !!r : "string" === o && !M.isEmptyString(r) || "number" === o && r > 0 || "function" === o ? t[i] = r : "object" === o && e(t[i], r))
                            }
                        }(r)
                    }
                };
                eA.prototype.runQueuedFunctions = function() {
                    var e = this._q;
                    this._q = [];
                    for (var t = 0; t < e.length; t++) {
                        var n = this[e[t][0]];
                        "function" === A(n) && n.apply(this, e[t].slice(1))
                    }
                }, eA.prototype._apiKeySet = function(e) {
                    return !M.isEmptyString(this.options.apiKey) || (M.log.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                }, eA.prototype._loadSavedUnsentEvents = function(e) {
                    var t = this._getFromStorage(et, e),
                        n = this._parseSavedUnsentEventsString(t, e);
                    return this._setInStorage(et, e, JSON.stringify(n)), n
                }, eA.prototype._parseSavedUnsentEventsString = function(e, t) {
                    if (M.isEmptyString(e)) return [];
                    if ("string" === A(e)) try {
                        var n = JSON.parse(e);
                        if ("array" === A(n)) return n
                    } catch (e) {}
                    return M.log.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                }, eA.prototype.isNewSession = function() {
                    return this._newSession
                }, eA.prototype.onInit = function(e) {
                    this._isInitialized ? e(this) : this._onInit.push(e)
                }, eA.prototype.getSessionId = function() {
                    return this._sessionId
                }, eA.prototype.nextEventId = function() {
                    return this._eventId++, this._eventId
                }, eA.prototype.nextIdentifyId = function() {
                    return this._identifyId++, this._identifyId
                }, eA.prototype.nextSequenceNumber = function() {
                    return this._sequenceNumber++, this._sequenceNumber
                }, eA.prototype._unsentCount = function() {
                    return this._unsentEvents.length + this._unsentIdentifys.length
                }, eA.prototype._sendEventsIfReady = function() {
                    return 0 !== this._unsentCount() && (!this.options.batchEvents || this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === S.TRANSPORT_BEACON ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout((function() {
                        this._updateScheduled = !1, this.sendEvents()
                    }).bind(this), this.options.eventUploadPeriodMillis)), !1))
                }, eA.prototype.clearStorage = function() {
                    return this._metadataStorage.clear()
                }, eA.prototype._getFromStorage = function(e, t) {
                    return e.getItem(t + this._storageSuffix)
                }, eA.prototype._setInStorage = function(e, t, n) {
                    e.setItem(t + this._storageSuffix, n)
                };
                var eC = function(e) {
                        if (!e._useOldCookie) {
                            var t = e._metadataStorage.load();
                            "object" === A(t) && eD(e, t);
                            return
                        }
                        var n = e.cookieStorage.get(e._oldCookiename);
                        if ("object" === A(n)) {
                            eD(e, n);
                            return
                        }
                    },
                    eP = function(e) {
                        var t = e.cookieStorage.get(e._oldCookiename);
                        "object" === A(t) && (eD(e, t), ex(e))
                    },
                    eD = function(e, t) {
                        t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                    },
                    ex = function(e) {
                        var t = {
                            deviceId: e.options.deviceId,
                            userId: e.options.userId,
                            optOut: e.options.optOut,
                            sessionId: e._sessionId,
                            lastEventTime: e._lastEventTime,
                            eventId: e._eventId,
                            identifyId: e._identifyId,
                            sequenceNumber: e._sequenceNumber
                        };
                        e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                    };
                eA.prototype._initUtmData = function(e, t) {
                    e = e || this._getUrlParams();
                    var n = eo(t = t || this.cookieStorage.get("__utmz"), e);
                    return eU(this, n), n
                }, eA.prototype._unsetUTMParams = function() {
                    var e = new ea;
                    e.unset(S.REFERRER), e.unset(S.UTM_SOURCE), e.unset(S.UTM_MEDIUM), e.unset(S.UTM_CAMPAIGN), e.unset(S.UTM_TERM), e.unset(S.UTM_CONTENT), this.identify(e)
                };
                var eU = function(e, t) {
                    if ("object" === A(t) && 0 !== Object.keys(t).length) {
                        var n = new ea;
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
                        e.identify(n)
                    }
                };
                eA.prototype._getReferrer = function() {
                    return document.referrer
                }, eA.prototype._getUrlParams = function() {
                    return location.search
                }, eA.prototype._saveGclid = function(e) {
                    var t = M.getQueryParam("gclid", e);
                    if (!M.isEmptyString(t)) {
                        var n = {
                            gclid: t
                        };
                        return eU(this, n), n
                    }
                }, eA.prototype._saveFbclid = function(e) {
                    var t = M.getQueryParam("fbclid", e);
                    if (!M.isEmptyString(t)) {
                        var n = {
                            fbclid: t
                        };
                        return eU(this, n), n
                    }
                }, eA.prototype._getDeviceIdFromUrlParam = function(e) {
                    return M.getQueryParam(S.AMP_DEVICE_ID_PARAM, e)
                }, eA.prototype._getReferringDomain = function(e) {
                    if (M.isEmptyString(e)) return null;
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : null
                }, eA.prototype._saveReferrer = function(e) {
                    if (!M.isEmptyString(e)) {
                        var t = {
                            referrer: e,
                            referring_domain: this._getReferringDomain(e)
                        };
                        return eU(this, t), t
                    }
                }, eA.prototype.saveEvents = function() {
                    try {
                        var e = JSON.stringify(this._unsentEvents.map(function(e) {
                            return e.event
                        }));
                        this._setInStorage(et, this.options.unsentKey, e)
                    } catch (e) {}
                    try {
                        var t = JSON.stringify(this._unsentIdentifys.map(function(e) {
                            return e.event
                        }));
                        this._setInStorage(et, this.options.unsentIdentifyKey, t)
                    } catch (e) {}
                }, eA.prototype.setDomain = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (M.validateInput(e, "domain", "string")) try {
                        this.cookieStorage.options({
                            expirationDays: this.options.cookieExpiration,
                            secure: this.options.secureCookie,
                            domain: e,
                            sameSite: this.options.sameSiteCookie
                        }), this.options.domain = this.cookieStorage.options().domain, eC(this), ex(this)
                    } catch (e) {
                        M.log.error(e)
                    }
                }, eA.prototype.setUserId = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.userId = null != e && "" + e || null, ex(this)
                    } catch (e) {
                        M.log.error(e)
                    }
                }, eA.prototype.setGroup = function(e, t) {
                    if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (!(!this._apiKeySet("setGroup()") || !M.validateInput(e, "groupType", "string") || M.isEmptyString(e))) {
                        var n = {};
                        n[e] = t;
                        var i = new ea().set(e, t);
                        this._logEvent(S.IDENTIFY_EVENT, null, null, i.userPropertiesOperations, n, null, null, null)
                    }
                }, eA.prototype.setOptOut = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (M.validateInput(e, "enable", "boolean")) try {
                        this.options.optOut = e, ex(this)
                    } catch (e) {
                        M.log.error(e)
                    }
                }, eA.prototype.setSessionId = function(e) {
                    if (M.validateInput(e, "sessionId", "number")) try {
                        this._sessionId = e, ex(this)
                    } catch (e) {
                        M.log.error(e)
                    }
                }, eA.prototype.resetSessionId = function() {
                    this.setSessionId(new Date().getTime())
                }, eA.prototype.regenerateDeviceId = function() {
                    if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                    this.setDeviceId(V())
                }, eA.prototype.setDeviceId = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (M.validateDeviceId(e)) try {
                        M.isEmptyString(e) || (this.options.deviceId = "" + e, ex(this))
                    } catch (e) {
                        M.log.error(e)
                    }
                }, eA.prototype.setTransport = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                    M.validateTransport(e) && (this.options.transport = e)
                }, eA.prototype.setUserProperties = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("setUserProperties()") && M.validateInput(e, "userProperties", "object")) {
                        var t = M.truncate(M.validateProperties(e));
                        if (0 !== Object.keys(t).length) {
                            var n = new ea;
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
                            this.identify(n)
                        }
                    }
                }, eA.prototype.clearUserProperties = function() {
                    if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("clearUserProperties()")) {
                        var e = new ea;
                        e.clearAll(), this.identify(e)
                    }
                };
                var ej = function(e, t) {
                    for (var n = 0; n < t._q.length; n++) {
                        var i = e[t._q[n][0]];
                        "function" === A(i) && i.apply(e, t._q[n].slice(1))
                    }
                    return e
                };
                eA.prototype.identify = function(e, t, n) {
                    if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (!this._apiKeySet("identify()")) {
                        eV(t, n, 0, "No request sent", {
                            reason: "API key is not set"
                        });
                        return
                    }
                    if ("object" === A(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = ej(new ea, e)), e instanceof ea) {
                        if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(S.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, null, t, n);
                        eV(t, n, 0, "No request sent", {
                            reason: "No user property operations"
                        })
                    } else M.log.error("Invalid identify input type. Expected Identify object but saw " + A(e)), eV(t, n, 0, "No request sent", {
                        reason: "Invalid identify input type"
                    })
                }, eA.prototype.groupIdentify = function(e, t, n, i, r) {
                    if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (!this._apiKeySet("groupIdentify()")) {
                        eV(i, r, 0, "No request sent", {
                            reason: "API key is not set"
                        });
                        return
                    }
                    if (!M.validateInput(e, "group_type", "string") || M.isEmptyString(e)) {
                        eV(i, r, 0, "No request sent", {
                            reason: "Invalid group type"
                        });
                        return
                    }
                    if (null == t) {
                        eV(i, r, 0, "No request sent", {
                            reason: "Invalid group name"
                        });
                        return
                    }
                    if ("object" === A(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = ej(new ea, n)), n instanceof ea) {
                        if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(S.GROUP_IDENTIFY_EVENT, null, null, null, o({}, e, t), n.userPropertiesOperations, null, i, r);
                        eV(i, r, 0, "No request sent", {
                            reason: "No group property operations"
                        })
                    } else M.log.error("Invalid identify input type. Expected Identify object but saw " + A(n)), eV(i, r, 0, "No request sent", {
                        reason: "Invalid identify input type"
                    })
                }, eA.prototype.setVersionName = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                    M.validateInput(e, "versionName", "string") && (this.options.versionName = e)
                }, eA.prototype._logEvent = function(e, t, n, i, r, o, a, u, c) {
                    if (eC(this), !e) {
                        eV(u, c, 0, "No request sent", {
                            reason: "Missing eventType"
                        });
                        return
                    }
                    if (this.options.optOut) {
                        eV(u, c, 0, "No request sent", {
                            reason: "optOut is set to true"
                        });
                        return
                    }
                    try {
                        l = e === S.IDENTIFY_EVENT || e === S.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
                        var l, p = this.nextSequenceNumber(),
                            d = "number" === A(a) ? a : new Date().getTime();
                        this._sessionId && this._lastEventTime && !(d - this._lastEventTime > this.options.sessionTimeout) || (this._sessionId = d), this._lastEventTime = d, ex(this);
                        var h = this._ua.browser.name,
                            f = this._ua.browser.major,
                            g = this._ua.os.name;
                        i = i || {};
                        var v = s({}, this._apiPropertiesTrackingOptions);
                        n = s({}, n || {}, v), t = t || {}, r = r || {}, o = o || {};
                        var y = {
                            device_id: this.options.deviceId,
                            user_id: this.options.userId,
                            timestamp: d,
                            event_id: l,
                            session_id: this._sessionId || -1,
                            event_type: e,
                            version_name: this.options.versionName || null,
                            platform: eq(this, "platform") ? this.options.platform : null,
                            os_name: eq(this, "os_name") && h || null,
                            os_version: eq(this, "os_version") && f || null,
                            device_model: eq(this, "device_model") && g || null,
                            language: eq(this, "language") ? this.options.language : null,
                            api_properties: n,
                            event_properties: M.truncate(M.validateProperties(t)),
                            user_properties: M.truncate(M.validateProperties(i)),
                            uuid: function e(t) {
                                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e)
                            }(),
                            library: {
                                name: "amplitude-js",
                                version: eN
                            },
                            sequence_number: p,
                            groups: M.truncate(M.validateGroups(r)),
                            group_properties: M.truncate(M.validateProperties(o)),
                            user_agent: this._userAgent
                        };
                        return e === S.IDENTIFY_EVENT || e === S.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                            event: y,
                            callback: u,
                            errorCallback: c
                        }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                            event: y,
                            callback: u,
                            errorCallback: c
                        }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), l
                    } catch (e) {
                        M.log.error(e)
                    }
                };
                var eq = function(e, t) {
                        return !!e.options.trackingOptions[t]
                    },
                    eM = function(e) {
                        for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
                            var r = t[i];
                            eq(e, r) || (n[r] = !1)
                        }
                        return n
                    };
                eA.prototype._limitEventsQueued = function(e) {
                    e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach(function(e) {
                        eV(e.callback, e.errorCallback, 0, "No request sent", {
                            reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                        })
                    })
                }, eA.prototype.logEvent = function(e, t, n, i) {
                    return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n, i)
                }, eA.prototype.logEventWithTimestamp = function(e, t, n, i, r) {
                    return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? M.validateInput(e, "eventType", "string") ? M.isEmptyString(e) ? (eV(i, r, 0, "No request sent", {
                        reason: "Missing eventType"
                    }), -1) : this._logEvent(e, t, null, null, null, null, n, i, r) : (eV(i, r, 0, "No request sent", {
                        reason: "Invalid type for eventType"
                    }), -1) : (eV(i, r, 0, "No request sent", {
                        reason: "API key not set"
                    }), -1)
                }, eA.prototype.logEventWithGroups = function(e, t, n, i, r) {
                    return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? M.validateInput(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, i, r) : (eV(event.callback, event.errorCallback, 0, "No request sent", {
                        reason: "Invalid type for eventType"
                    }), -1) : (eV(event.callback, event.errorCallback, 0, "No request sent", {
                        reason: "API key not set"
                    }), -1)
                };
                var eL = function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    eV = function(e, t, n, i, r) {
                        "function" === A(e) && e(n, i, r), "function" === A(t) && t(n, i, r)
                    };
                eA.prototype.logRevenueV2 = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("logRevenueV2()")) {
                        if ("object" === A(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = ej(new eS, e)), e instanceof eS) {
                            if (e && e._isValidRevenue()) return this.logEvent(S.REVENUE_EVENT, e._toJSONObject())
                        } else M.log.error("Invalid revenue input type. Expected Revenue object but saw " + A(e))
                    }
                }, eA.prototype.logRevenue = function(e, t, n) {
                    return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && eL(e) && (void 0 === t || eL(t)) ? this._logEvent(S.REVENUE_EVENT, {}, {
                        productId: n,
                        special: "revenue_amount",
                        quantity: t || 1,
                        price: e
                    }, null, null, null, null, null) : -1
                }, eA.prototype._logErrorsOnEvents = function(e, t, n, i) {
                    for (var r = ["_unsentEvents", "_unsentIdentifys"], o = 0; o < r.length; o++)
                        for (var s = r[o], a = "_unsentEvents" === s ? e : t, u = 0; u < this[s].length; u++) {
                            var c = this[s][u];
                            c.event.event_id <= a && c.errorCallback && c.errorCallback(n, i)
                        }
                }, eA.prototype.removeEvents = function(e, t, n, i) {
                    eG(this, "_unsentEvents", e, n, i), eG(this, "_unsentIdentifys", t, n, i)
                };
                var eG = function(e, t, n, i, r) {
                    if (!(n < 0)) {
                        for (var o = [], s = 0; s < e[t].length; s++) {
                            var a = e[t][s];
                            a.event.event_id > n ? o.push(a) : a.callback && a.callback(i, r)
                        }
                        e[t] = o
                    }
                };
                eA.prototype.sendEvents = function() {
                    if (!this._apiKeySet("sendEvents()")) {
                        this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "API key not set"
                        });
                        return
                    }
                    if (this.options.optOut) {
                        this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "Opt out is set to true"
                        });
                        return
                    }
                    if (0 !== this._unsentCount()) {
                        if (this.options.transport !== S.TRANSPORT_BEACON) {
                            if (this._sending) return;
                            this._sending = !0
                        }
                        var e = (this.options.forceHttps ? "https" : "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                            t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                            n = this._mergeEventsAndIdentifys(t),
                            i = n.maxEventId,
                            r = n.maxIdentifyId,
                            o = JSON.stringify(n.eventsToSend.map(function(e) {
                                return e.event
                            })),
                            s = new Date().getTime(),
                            a = {
                                client: this.options.apiKey,
                                e: o,
                                v: S.API_VERSION,
                                upload_time: s,
                                checksum: el(S.API_VERSION + this.options.apiKey + o + s)
                            };
                        if (this.options.transport === S.TRANSPORT_BEACON) {
                            navigator.sendBeacon(e, new URLSearchParams(a)) ? (this.removeEvents(i, r, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(i, r, 0, "");
                            return
                        }
                        var u = this;
                        new eb(e, a, this.options.headers).send(function(e, n) {
                            u._sending = !1;
                            try {
                                200 === e && "success" === n ? (u.removeEvents(i, r, e, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(i, r, e, n), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(i, r, e, n), u.options.uploadBatchSize = Math.ceil(t / 2), u.sendEvents()))
                            } catch (e) {}
                        })
                    }
                }, eA.prototype._mergeEventsAndIdentifys = function(e) {
                    for (var t = [], n = 0, i = -1, r = 0, o = -1; t.length < e;) {
                        var s = void 0,
                            a = r >= this._unsentIdentifys.length,
                            u = n >= this._unsentEvents.length;
                        if (u && a) {
                            M.log.error("Merging Events and Identifys, less events and identifys than expected");
                            break
                        }
                        a ? i = (s = this._unsentEvents[n++]).event.event_id : u ? o = (s = this._unsentIdentifys[r++]).event.event_id : "sequence_number" in this._unsentEvents[n].event && !(this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[r].event.sequence_number) ? o = (s = this._unsentIdentifys[r++]).event.event_id : i = (s = this._unsentEvents[n++]).event.event_id, t.push(s)
                    }
                    return {
                        eventsToSend: t,
                        maxEventId: i,
                        maxIdentifyId: o
                    }
                }, eA.prototype.setGlobalUserProperties = function(e) {
                    this.setUserProperties(e)
                }, eA.prototype.__VERSION__ = eN, eA.prototype._shouldDeferCall = function() {
                    return this._pendingReadStorage || this._initializationDeferred
                }, eA.prototype._deferInitialization = function() {
                    this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                }, eA.prototype.enableTracking = function() {
                    this._initializationDeferred = !1, ex(this), this.runQueuedFunctions()
                };
                var eF = function() {
                    this.options = s({}, eO), this._q = [], this._instances = {}
                };
                eF.prototype.Identify = ea, eF.prototype.Revenue = eS, eF.prototype.getInstance = function(e) {
                    e = M.isEmptyString(e) ? S.DEFAULT_INSTANCE : e.toLowerCase();
                    var t = this._instances[e];
                    return void 0 === t && (t = new eA(e), this._instances[e] = t), t
                }, eF.prototype.runQueuedFunctions = function() {
                    for (var e = 0; e < this._q.length; e++) {
                        var t = this[this._q[e][0]];
                        "function" === A(t) && t.apply(this, this._q[e].slice(1))
                    }
                    for (var n in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
                }, eF.prototype.init = function(e, t, n, i) {
                    this.getInstance().init(e, t, n, (function(e) {
                        this.options = e.options, "function" === A(i) && i(e)
                    }).bind(this))
                }, eF.prototype.isNewSession = function() {
                    return this.getInstance().isNewSession()
                }, eF.prototype.getSessionId = function() {
                    return this.getInstance().getSessionId()
                }, eF.prototype.nextEventId = function() {
                    return this.getInstance().nextEventId()
                }, eF.prototype.nextIdentifyId = function() {
                    return this.getInstance().nextIdentifyId()
                }, eF.prototype.nextSequenceNumber = function() {
                    return this.getInstance().nextSequenceNumber()
                }, eF.prototype.saveEvents = function() {
                    this.getInstance().saveEvents()
                }, eF.prototype.setDomain = function(e) {
                    this.getInstance().setDomain(e)
                }, eF.prototype.setUserId = function(e) {
                    this.getInstance().setUserId(e)
                }, eF.prototype.setGroup = function(e, t) {
                    this.getInstance().setGroup(e, t)
                }, eF.prototype.setOptOut = function(e) {
                    this.getInstance().setOptOut(e)
                }, eF.prototype.regenerateDeviceId = function() {
                    this.getInstance().regenerateDeviceId()
                }, eF.prototype.setDeviceId = function(e) {
                    this.getInstance().setDeviceId(e)
                }, eF.prototype.setUserProperties = function(e) {
                    this.getInstance().setUserProperties(e)
                }, eF.prototype.clearUserProperties = function() {
                    this.getInstance().clearUserProperties()
                }, eF.prototype.identify = function(e, t) {
                    this.getInstance().identify(e, t)
                }, eF.prototype.setVersionName = function(e) {
                    this.getInstance().setVersionName(e)
                }, eF.prototype.logEvent = function(e, t, n) {
                    return this.getInstance().logEvent(e, t, n)
                }, eF.prototype.logEventWithGroups = function(e, t, n, i) {
                    return this.getInstance().logEventWithGroups(e, t, n, i)
                }, eF.prototype.logRevenueV2 = function(e) {
                    return this.getInstance().logRevenueV2(e)
                }, eF.prototype.logRevenue = function(e, t, n) {
                    return this.getInstance().logRevenue(e, t, n)
                }, eF.prototype.removeEvents = function(e, t) {
                    this.getInstance().removeEvents(e, t)
                }, eF.prototype.sendEvents = function(e) {
                    this.getInstance().sendEvents(e)
                }, eF.prototype.setGlobalUserProperties = function(e) {
                    this.getInstance().setUserProperties(e)
                }, eF.prototype.__VERSION__ = eN;
                var eK = "undefined" != typeof window && window.amplitude || {},
                    eB = new eF;
                for (var ez in eB._q = eK._q || [], eK._iq) Object.prototype.hasOwnProperty.call(eK._iq, ez) && (eB.getInstance(ez)._q = eK._iq[ez]._q || []);
                return eB.runQueuedFunctions(), eB
            }()
        }
    }
]);
//# sourceMappingURL=5f9fef99.744a2ca73e570355.js.map