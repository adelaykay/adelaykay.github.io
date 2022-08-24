/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
  'use strict'
  var t = {
      689: (t, e, n) => {
        n.d(e, { Z: () => a })
        var i = n(81),
          r = n.n(i),
          o = n(645),
          s = n.n(o)()(r())
        s.push([
          t.id,
          'body{\r\n    background: #1e3b47;\r\n    overflow: hidden;\r\n}\r\n.container {\r\n    max-width: 600px;\r\n}\r\n.chat-window {\r\n    max-height: 40%;\r\n    overflow-y: auto;\r\n}\r\n.chat-window::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n.card-footer {\r\n    margin-left: -20px;\r\n    border-top: none;\r\n    font-size: 0.6em;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    height: 20px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n.username {\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n}\r\n.btn{\r\n    box-shadow: none !important;\r\n}\r\n.new-chat .btn {\r\n    border-radius: 0 5px 5px 0 ;\r\n}\r\n.btn:focus{\r\n    outline: none !important;\r\n}\r\n.modal {\r\n    font-size: x-small;\r\n}\r\n.modal-header {\r\n    height: 50px;\r\n}\r\n.modal-body {\r\n    margin-top: -20px;\r\n    height: 140px;\r\n}',
          '',
        ])
        const a = s
      },
      645: t => {
        t.exports = function (t) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  i = void 0 !== e[5]
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  i &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += t(e)),
                  i && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                )
              }).join('')
            }),
            (e.i = function (t, n, i, r, o) {
              'string' == typeof t && (t = [[null, t, void 0]])
              var s = {}
              if (i)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0]
                  null != l && (s[l] = !0)
                }
              for (var c = 0; c < t.length; c++) {
                var u = [].concat(t[c])
                ;(i && s[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = o)),
                  n &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = n))
                      : (u[2] = n)),
                  r &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = r))
                      : (u[4] = ''.concat(r))),
                  e.push(u))
              }
            }),
            e
          )
        }
      },
      81: t => {
        t.exports = function (t) {
          return t[1]
        }
      },
      379: t => {
        var e = []
        function n(t) {
          for (var n = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              n = i
              break
            }
          return n
        }
        function i(t, i) {
          for (var o = {}, s = [], a = 0; a < t.length; a++) {
            var l = t[a],
              c = i.base ? l[0] + i.base : l[0],
              u = o[c] || 0,
              h = ''.concat(c, ' ').concat(u)
            o[c] = u + 1
            var d = n(h),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              }
            if (-1 !== d) e[d].references++, e[d].updater(f)
            else {
              var p = r(f, i)
              ;(i.byIndex = a),
                e.splice(a, 0, { identifier: h, updater: p, references: 1 })
            }
            s.push(h)
          }
          return s
        }
        function r(t, e) {
          var n = e.domAPI(e)
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return
                n.update((t = e))
              } else n.remove()
            }
          )
        }
        t.exports = function (t, r) {
          var o = i((t = t || []), (r = r || {}))
          return function (t) {
            t = t || []
            for (var s = 0; s < o.length; s++) {
              var a = n(o[s])
              e[a].references--
            }
            for (var l = i(t, r), c = 0; c < o.length; c++) {
              var u = n(o[c])
              0 === e[u].references && (e[u].updater(), e.splice(u, 1))
            }
            o = l
          }
        }
      },
      569: t => {
        var e = {}
        t.exports = function (t, n) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t)
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head
                } catch (t) {
                  n = null
                }
              e[t] = n
            }
            return e[t]
          })(t)
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          i.appendChild(n)
        }
      },
      216: t => {
        t.exports = function (t) {
          var e = document.createElement('style')
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
        }
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc
          e && t.setAttribute('nonce', e)
        }
      },
      795: t => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t)
          return {
            update: function (n) {
              !(function (t, e, n) {
                var i = ''
                n.supports && (i += '@supports ('.concat(n.supports, ') {')),
                  n.media && (i += '@media '.concat(n.media, ' {'))
                var r = void 0 !== n.layer
                r &&
                  (i += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (i += n.css),
                  r && (i += '}'),
                  n.media && (i += '}'),
                  n.supports && (i += '}')
                var o = n.sourceMap
                o &&
                  'undefined' != typeof btoa &&
                  (i +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      ' */'
                    )),
                  e.styleTagTransform(i, t, e.options)
              })(e, t, n)
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(e)
            },
          }
        }
      },
      589: t => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(t))
          }
        }
      },
    },
    e = {}
  function n(i) {
    var r = e[i]
    if (void 0 !== r) return r.exports
    var o = (e[i] = { id: i, exports: {} })
    return t[i](o, o.exports, n), o.exports
  }
  ;(n.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t
    return n.d(e, { a: e }), e
  }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] })
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = t => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.nc = void 0),
    (() => {
      var t = {}
      function e(t) {
        return (
          (e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          e(t)
        )
      }
      function i() {
        i = function () {
          return t
        }
        var t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = 'function' == typeof Symbol ? Symbol : {},
          s = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          l = o.toStringTag || '@@toStringTag'
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          )
        }
        try {
          c({}, '')
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function u(t, e, n, i) {
          var r = e && e.prototype instanceof f ? e : f,
            o = Object.create(r.prototype),
            s = new x(i || [])
          return (
            (o._invoke = (function (t, e, n) {
              var i = 'suspendedStart'
              return function (r, o) {
                if ('executing' === i)
                  throw new Error('Generator is already running')
                if ('completed' === i) {
                  if ('throw' === r) throw o
                  return { value: void 0, done: !0 }
                }
                for (n.method = r, n.arg = o; ; ) {
                  var s = n.delegate
                  if (s) {
                    var a = E(s, n)
                    if (a) {
                      if (a === d) continue
                      return a
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === i) throw ((i = 'completed'), n.arg)
                    n.dispatchException(n.arg)
                  } else 'return' === n.method && n.abrupt('return', n.arg)
                  i = 'executing'
                  var l = h(t, e, n)
                  if ('normal' === l.type) {
                    if (
                      ((i = n.done ? 'completed' : 'suspendedYield'),
                      l.arg === d)
                    )
                      continue
                    return { value: l.arg, done: n.done }
                  }
                  'throw' === l.type &&
                    ((i = 'completed'), (n.method = 'throw'), (n.arg = l.arg))
                }
              }
            })(t, n, s)),
            o
          )
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        t.wrap = u
        var d = {}
        function f() {}
        function p() {}
        function m() {}
        var g = {}
        c(g, s, function () {
          return this
        })
        var _ = Object.getPrototypeOf,
          v = _ && _(_(C([])))
        v && v !== n && r.call(v, s) && (g = v)
        var b = (m.prototype = f.prototype = Object.create(g))
        function y(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function w(t, n) {
          function i(o, s, a, l) {
            var c = h(t[o], t, s)
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value
              return d && 'object' == e(d) && r.call(d, '__await')
                ? n.resolve(d.__await).then(
                    function (t) {
                      i('next', t, a, l)
                    },
                    function (t) {
                      i('throw', t, a, l)
                    }
                  )
                : n.resolve(d).then(
                    function (t) {
                      ;(u.value = t), a(u)
                    },
                    function (t) {
                      return i('throw', t, a, l)
                    }
                  )
            }
            l(c.arg)
          }
          var o
          this._invoke = function (t, e) {
            function r() {
              return new n(function (n, r) {
                i(t, e, n, r)
              })
            }
            return (o = o ? o.then(r, r) : r())
          }
        }
        function E(t, e) {
          var n = t.iterator[e.method]
          if (void 0 === n) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                E(t, e),
                'throw' === e.method)
              )
                return d
              ;(e.method = 'throw'),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ))
            }
            return d
          }
          var i = h(n, t.iterator, e.arg)
          if ('throw' === i.type)
            return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), d
          var r = i.arg
          return r
            ? r.done
              ? ((e[t.resultName] = r.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                d)
              : r
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              d)
        }
        function A(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function T(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function x(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(A, this),
            this.reset(!0)
        }
        function C(t) {
          if (t) {
            var e = t[s]
            if (e) return e.call(t)
            if ('function' == typeof t.next) return t
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
                  return (e.value = void 0), (e.done = !0), e
                }
              return (i.next = i)
            }
          }
          return { next: O }
        }
        function O() {
          return { value: void 0, done: !0 }
        }
        return (
          (p.prototype = m),
          c(b, 'constructor', m),
          c(m, 'constructor', p),
          (p.displayName = c(m, l, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === p || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(b)),
              t
            )
          }),
          (t.awrap = function (t) {
            return { __await: t }
          }),
          y(w.prototype),
          c(w.prototype, a, function () {
            return this
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, i, r, o) {
            void 0 === o && (o = Promise)
            var s = new w(u(e, n, i, r), o)
            return t.isGeneratorFunction(n)
              ? s
              : s.next().then(function (t) {
                  return t.done ? t.value : s.next()
                })
          }),
          y(b),
          c(b, l, 'Generator'),
          c(b, s, function () {
            return this
          }),
          c(b, 'toString', function () {
            return '[object Generator]'
          }),
          (t.keys = function (t) {
            var e = []
            for (var n in t) e.push(n)
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var i = e.pop()
                  if (i in t) return (n.value = i), (n.done = !1), n
                }
                return (n.done = !0), n
              }
            )
          }),
          (t.values = C),
          (x.prototype = {
            constructor: x,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (t) {
              if (this.done) throw t
              var e = this
              function n(n, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (e.next = n),
                  i && ((e.method = 'next'), (e.arg = void 0)),
                  !!i
                )
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  s = o.completion
                if ('root' === o.tryLoc) return n('end')
                if (o.tryLoc <= this.prev) {
                  var a = r.call(o, 'catchLoc'),
                    l = r.call(o, 'finallyLoc')
                  if (a && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                  } else if (a) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var s = o ? o.completion : {}
              return (
                (s.type = t),
                (s.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
                  : this.complete(s)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                d
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), T(n), d
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var i = n.completion
                  if ('throw' === i.type) {
                    var r = i.arg
                    T(n)
                  }
                  return r
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: C(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          t
        )
      }
      function r(t, e, n, i, r, o, s) {
        try {
          var a = t[o](s),
            l = a.value
        } catch (t) {
          return void n(t)
        }
        a.done ? e(l) : Promise.resolve(l).then(i, r)
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
      }
      n.r(t),
        n.d(t, {
          afterMain: () => lt,
          afterRead: () => ot,
          afterWrite: () => ht,
          applyStyles: () => vt,
          arrow: () => It,
          auto: () => Y,
          basePlacements: () => Q,
          beforeMain: () => st,
          beforeRead: () => it,
          beforeWrite: () => ct,
          bottom: () => R,
          clippingParents: () => G,
          computeStyles: () => qt,
          createPopper: () => me,
          createPopperBase: () => pe,
          createPopperLite: () => ge,
          detectOverflow: () => ee,
          end: () => K,
          eventListeners: () => zt,
          flip: () => ne,
          hide: () => oe,
          left: () => V,
          main: () => at,
          modifierPhases: () => dt,
          offset: () => se,
          placements: () => nt,
          popper: () => Z,
          popperGenerator: () => fe,
          popperOffsets: () => ae,
          preventOverflow: () => le,
          read: () => rt,
          reference: () => tt,
          right: () => X,
          start: () => U,
          top: () => $,
          variationPlacements: () => et,
          viewport: () => J,
          write: () => ut,
        })
      var s = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.room = e),
            (this.username = n),
            (this.chats = db.collection('chats')),
            this.unsub
        }
        var e, n, s, a
        return (
          (e = t),
          (n = [
            {
              key: 'addChat',
              value:
                ((s = i().mark(function t(e) {
                  var n, r
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = new Date()),
                              (r = {
                                message: e,
                                username: this.username,
                                room: this.room,
                                created_at:
                                  firebase.firestore.Timestamp.fromDate(n),
                              }),
                              (t.next = 4),
                              this.chats.add(r)
                            )
                          case 4:
                            return t.sent, t.abrupt('return', this)
                          case 6:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })),
                (a = function () {
                  var t = this,
                    e = arguments
                  return new Promise(function (n, i) {
                    var o = s.apply(t, e)
                    function a(t) {
                      r(o, n, i, a, l, 'next', t)
                    }
                    function l(t) {
                      r(o, n, i, a, l, 'throw', t)
                    }
                    a(void 0)
                  })
                }),
                function (t) {
                  return a.apply(this, arguments)
                }),
            },
            {
              key: 'getChats',
              value: function (t) {
                return (
                  (this.unsub = this.chats
                    .where('room', '==', this.room)
                    .orderBy('created_at')
                    .onSnapshot(function (e) {
                      e.docChanges().forEach(function (e) {
                        'added' === e.type && t(e.doc.data())
                      })
                    })),
                  this
                )
              },
            },
            {
              key: 'updateName',
              value: function (t) {
                return (
                  (this.username = t), localStorage.setItem('username', t), this
                )
              },
            },
            {
              key: 'updateRoom',
              value: function (t) {
                return (this.room = t), this.unsub && this.unsub(), this
              },
            },
          ]),
          n && o(e.prototype, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t
        )
      })()
      const a = s
      var l = {}
      function c() {
        return l
      }
      function u(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              ' argument' +
              (t > 1 ? 's' : '') +
              ' required, but only ' +
              e.length +
              ' present'
          )
      }
      function h(t) {
        u(1, arguments)
        var e = Object.prototype.toString.call(t)
        return t instanceof Date ||
          ('object' == typeof t && '[object Date]' === e)
          ? new Date(t.getTime())
          : 'number' == typeof t || '[object Number]' === e
          ? new Date(t)
          : (('string' != typeof t && '[object String]' !== e) ||
              'undefined' == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN))
      }
      function d(t, e) {
        u(2, arguments)
        var n = h(t),
          i = h(e),
          r = n.getTime() - i.getTime()
        return r < 0 ? -1 : r > 0 ? 1 : r
      }
      function f(t, e) {
        u(2, arguments)
        var n = h(t),
          i = h(e),
          r = n.getFullYear() - i.getFullYear(),
          o = n.getMonth() - i.getMonth()
        return 12 * r + o
      }
      function p(t) {
        u(1, arguments)
        var e = h(t)
        return e.setHours(23, 59, 59, 999), e
      }
      function m(t) {
        u(1, arguments)
        var e = h(t),
          n = e.getMonth()
        return (
          e.setFullYear(e.getFullYear(), n + 1, 0),
          e.setHours(23, 59, 59, 999),
          e
        )
      }
      function g(t) {
        u(1, arguments)
        var e = h(t)
        return p(e).getTime() === m(e).getTime()
      }
      function _(t, e) {
        u(2, arguments)
        var n,
          i = h(t),
          r = h(e),
          o = d(i, r),
          s = Math.abs(f(i, r))
        if (s < 1) n = 0
        else {
          1 === i.getMonth() && i.getDate() > 27 && i.setDate(30),
            i.setMonth(i.getMonth() - o * s)
          var a = d(i, r) === -o
          g(h(t)) && 1 === s && 1 === d(t, r) && (a = !1),
            (n = o * (s - Number(a)))
        }
        return 0 === n ? 0 : n
      }
      function v(t, e) {
        return u(2, arguments), h(t).getTime() - h(e).getTime()
      }
      var b = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (t) {
          return t < 0 ? Math.ceil(t) : Math.floor(t)
        },
      }
      function y(t) {
        return t ? b[t] : b.trunc
      }
      function w(t, e, n) {
        u(2, arguments)
        var i = v(t, e) / 1e3
        return y(null == n ? void 0 : n.roundingMethod)(i)
      }
      var E = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      }
      function A(t) {
        return function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.width ? String(e.width) : t.defaultWidth,
            i = t.formats[n] || t.formats[t.defaultWidth]
          return i
        }
      }
      const T = {
        date: A({
          formats: {
            full: 'EEEE, MMMM do, y',
            long: 'MMMM do, y',
            medium: 'MMM d, y',
            short: 'MM/dd/yyyy',
          },
          defaultWidth: 'full',
        }),
        time: A({
          formats: {
            full: 'h:mm:ss a zzzz',
            long: 'h:mm:ss a z',
            medium: 'h:mm:ss a',
            short: 'h:mm a',
          },
          defaultWidth: 'full',
        }),
        dateTime: A({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}',
          },
          defaultWidth: 'full',
        }),
      }
      var x = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
      }
      function C(t) {
        return function (e, n) {
          var i
          if (
            'formatting' ===
              (null != n && n.context ? String(n.context) : 'standalone') &&
            t.formattingValues
          ) {
            var r = t.defaultFormattingWidth || t.defaultWidth,
              o = null != n && n.width ? String(n.width) : r
            i = t.formattingValues[o] || t.formattingValues[r]
          } else {
            var s = t.defaultWidth,
              a = null != n && n.width ? String(n.width) : t.defaultWidth
            i = t.values[a] || t.values[s]
          }
          return i[t.argumentCallback ? t.argumentCallback(e) : e]
        }
      }
      const O = {
        ordinalNumber: function (t, e) {
          var n = Number(t),
            i = n % 100
          if (i > 20 || i < 10)
            switch (i % 10) {
              case 1:
                return n + 'st'
              case 2:
                return n + 'nd'
              case 3:
                return n + 'rd'
            }
          return n + 'th'
        },
        era: C({
          values: {
            narrow: ['B', 'A'],
            abbreviated: ['BC', 'AD'],
            wide: ['Before Christ', 'Anno Domini'],
          },
          defaultWidth: 'wide',
        }),
        quarter: C({
          values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
          },
          defaultWidth: 'wide',
          argumentCallback: function (t) {
            return t - 1
          },
        }),
        month: C({
          values: {
            narrow: [
              'J',
              'F',
              'M',
              'A',
              'M',
              'J',
              'J',
              'A',
              'S',
              'O',
              'N',
              'D',
            ],
            abbreviated: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            wide: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          },
          defaultWidth: 'wide',
        }),
        day: C({
          values: {
            narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            wide: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
          defaultWidth: 'wide',
        }),
        dayPeriod: C({
          values: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
          },
          defaultWidth: 'wide',
          formattingValues: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
          },
          defaultFormattingWidth: 'wide',
        }),
      }
      function k(t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = n.width,
            r =
              (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(r)
          if (!o) return null
          var s,
            a = o[0],
            l =
              (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth],
            c = Array.isArray(l)
              ? S(l, function (t) {
                  return t.test(a)
                })
              : L(l, function (t) {
                  return t.test(a)
                })
          ;(s = t.valueCallback ? t.valueCallback(c) : c),
            (s = n.valueCallback ? n.valueCallback(s) : s)
          var u = e.slice(a.length)
          return { value: s, rest: u }
        }
      }
      function L(t, e) {
        for (var n in t) if (t.hasOwnProperty(n) && e(t[n])) return n
      }
      function S(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n])) return n
      }
      var D,
        M = {
          ordinalNumber:
            ((D = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (t) {
                return parseInt(t, 10)
              },
            }),
            function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.match(D.matchPattern)
              if (!n) return null
              var i = n[0],
                r = t.match(D.parsePattern)
              if (!r) return null
              var o = D.valueCallback ? D.valueCallback(r[0]) : r[0]
              o = e.valueCallback ? e.valueCallback(o) : o
              var s = t.slice(i.length)
              return { value: o, rest: s }
            }),
          era: k({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: 'any',
          }),
          quarter: k({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: 'any',
            valueCallback: function (t) {
              return t + 1
            },
          }),
          month: k({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: 'any',
          }),
          day: k({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: 'wide',
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: 'any',
          }),
          dayPeriod: k({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: 'any',
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: 'any',
          }),
        }
      const P = {
        code: 'en-US',
        formatDistance: function (t, e, n) {
          var i,
            r = E[t]
          return (
            (i =
              'string' == typeof r
                ? r
                : 1 === e
                ? r.one
                : r.other.replace('{{count}}', e.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? 'in ' + i
                : i + ' ago'
              : i
          )
        },
        formatLong: T,
        formatRelative: function (t, e, n, i) {
          return x[t]
        },
        localize: O,
        match: M,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      }
      function N(t, e) {
        if (null == t)
          throw new TypeError(
            'assign requires that input parameter not be null or undefined'
          )
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        return t
      }
      function j(t) {
        return N({}, t)
      }
      function I(t) {
        var e = new Date(
          Date.UTC(
            t.getFullYear(),
            t.getMonth(),
            t.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
          )
        )
        return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime()
      }
      var W = 1440,
        F = 43200
      function H(t, e, n) {
        var i, r
        u(2, arguments)
        var o = c(),
          s =
            null !==
              (i =
                null !== (r = null == n ? void 0 : n.locale) && void 0 !== r
                  ? r
                  : o.locale) && void 0 !== i
              ? i
              : P
        if (!s.formatDistance)
          throw new RangeError('locale must contain formatDistance property')
        var a = d(t, e)
        if (isNaN(a)) throw new RangeError('Invalid time value')
        var l,
          f,
          p = N(j(n), {
            addSuffix: Boolean(null == n ? void 0 : n.addSuffix),
            comparison: a,
          })
        a > 0 ? ((l = h(e)), (f = h(t))) : ((l = h(t)), (f = h(e)))
        var m,
          g = w(f, l),
          v = (I(f) - I(l)) / 1e3,
          b = Math.round((g - v) / 60)
        if (b < 2)
          return null != n && n.includeSeconds
            ? g < 5
              ? s.formatDistance('lessThanXSeconds', 5, p)
              : g < 10
              ? s.formatDistance('lessThanXSeconds', 10, p)
              : g < 20
              ? s.formatDistance('lessThanXSeconds', 20, p)
              : g < 40
              ? s.formatDistance('halfAMinute', 0, p)
              : g < 60
              ? s.formatDistance('lessThanXMinutes', 1, p)
              : s.formatDistance('xMinutes', 1, p)
            : 0 === b
            ? s.formatDistance('lessThanXMinutes', 1, p)
            : s.formatDistance('xMinutes', b, p)
        if (b < 45) return s.formatDistance('xMinutes', b, p)
        if (b < 90) return s.formatDistance('aboutXHours', 1, p)
        if (b < W) {
          var y = Math.round(b / 60)
          return s.formatDistance('aboutXHours', y, p)
        }
        if (b < 2520) return s.formatDistance('xDays', 1, p)
        if (b < F) {
          var E = Math.round(b / W)
          return s.formatDistance('xDays', E, p)
        }
        if (b < 86400)
          return (m = Math.round(b / F)), s.formatDistance('aboutXMonths', m, p)
        if ((m = _(f, l)) < 12) {
          var A = Math.round(b / F)
          return s.formatDistance('xMonths', A, p)
        }
        var T = m % 12,
          x = Math.floor(m / 12)
        return T < 3
          ? s.formatDistance('aboutXYears', x, p)
          : T < 9
          ? s.formatDistance('overXYears', x, p)
          : s.formatDistance('almostXYears', x + 1, p)
      }
      function q(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
      }
      var B = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.list = e)
        }
        var e, n
        return (
          (e = t),
          (n = [
            {
              key: 'clear',
              value: function () {
                return (this.list.innerHTML = ''), this
              },
            },
            {
              key: 'render',
              value: function (t) {
                var e = (function (t, e) {
                    return u(1, arguments), H(t, Date.now(), e)
                  })(t.created_at.toDate(), { addSuffix: !0 }),
                  n =
                    '\n        <li class="list-group-item">\n            <div><span class="username">'
                      .concat(
                        t.username,
                        '</span></div>\n            <span class="message">'
                      )
                      .concat(
                        t.message,
                        '</span>\n            <div class="time card-footer">'
                      )
                      .concat(e, '</div>\n        </li>\n        ')
                return (this.list.innerHTML += n), this
              },
            },
          ]),
          n && q(e.prototype, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t
        )
      })()
      const z = B
      var $ = 'top',
        R = 'bottom',
        X = 'right',
        V = 'left',
        Y = 'auto',
        Q = [$, R, X, V],
        U = 'start',
        K = 'end',
        G = 'clippingParents',
        J = 'viewport',
        Z = 'popper',
        tt = 'reference',
        et = Q.reduce(function (t, e) {
          return t.concat([e + '-' + U, e + '-' + K])
        }, []),
        nt = [].concat(Q, [Y]).reduce(function (t, e) {
          return t.concat([e, e + '-' + U, e + '-' + K])
        }, []),
        it = 'beforeRead',
        rt = 'read',
        ot = 'afterRead',
        st = 'beforeMain',
        at = 'main',
        lt = 'afterMain',
        ct = 'beforeWrite',
        ut = 'write',
        ht = 'afterWrite',
        dt = [it, rt, ot, st, at, lt, ct, ut, ht]
      function ft(t) {
        return t ? (t.nodeName || '').toLowerCase() : null
      }
      function pt(t) {
        if (null == t) return window
        if ('[object Window]' !== t.toString()) {
          var e = t.ownerDocument
          return (e && e.defaultView) || window
        }
        return t
      }
      function mt(t) {
        return t instanceof pt(t).Element || t instanceof Element
      }
      function gt(t) {
        return t instanceof pt(t).HTMLElement || t instanceof HTMLElement
      }
      function _t(t) {
        return (
          'undefined' != typeof ShadowRoot &&
          (t instanceof pt(t).ShadowRoot || t instanceof ShadowRoot)
        )
      }
      const vt = {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn: function (t) {
          var e = t.state
          Object.keys(e.elements).forEach(function (t) {
            var n = e.styles[t] || {},
              i = e.attributes[t] || {},
              r = e.elements[t]
            gt(r) &&
              ft(r) &&
              (Object.assign(r.style, n),
              Object.keys(i).forEach(function (t) {
                var e = i[t]
                !1 === e
                  ? r.removeAttribute(t)
                  : r.setAttribute(t, !0 === e ? '' : e)
              }))
          })
        },
        effect: function (t) {
          var e = t.state,
            n = {
              popper: {
                position: e.options.strategy,
                left: '0',
                top: '0',
                margin: '0',
              },
              arrow: { position: 'absolute' },
              reference: {},
            }
          return (
            Object.assign(e.elements.popper.style, n.popper),
            (e.styles = n),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var i = e.elements[t],
                  r = e.attributes[t] || {},
                  o = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                  ).reduce(function (t, e) {
                    return (t[e] = ''), t
                  }, {})
                gt(i) &&
                  ft(i) &&
                  (Object.assign(i.style, o),
                  Object.keys(r).forEach(function (t) {
                    i.removeAttribute(t)
                  }))
              })
            }
          )
        },
        requires: ['computeStyles'],
      }
      function bt(t) {
        return t.split('-')[0]
      }
      var yt = Math.max,
        wt = Math.min,
        Et = Math.round
      function At(t, e) {
        void 0 === e && (e = !1)
        var n = t.getBoundingClientRect(),
          i = 1,
          r = 1
        if (gt(t) && e) {
          var o = t.offsetHeight,
            s = t.offsetWidth
          s > 0 && (i = Et(n.width) / s || 1),
            o > 0 && (r = Et(n.height) / o || 1)
        }
        return {
          width: n.width / i,
          height: n.height / r,
          top: n.top / r,
          right: n.right / i,
          bottom: n.bottom / r,
          left: n.left / i,
          x: n.left / i,
          y: n.top / r,
        }
      }
      function Tt(t) {
        var e = At(t),
          n = t.offsetWidth,
          i = t.offsetHeight
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - i) <= 1 && (i = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
        )
      }
      function xt(t, e) {
        var n = e.getRootNode && e.getRootNode()
        if (t.contains(e)) return !0
        if (n && _t(n)) {
          var i = e
          do {
            if (i && t.isSameNode(i)) return !0
            i = i.parentNode || i.host
          } while (i)
        }
        return !1
      }
      function Ct(t) {
        return pt(t).getComputedStyle(t)
      }
      function Ot(t) {
        return ['table', 'td', 'th'].indexOf(ft(t)) >= 0
      }
      function kt(t) {
        return ((mt(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement
      }
      function Lt(t) {
        return 'html' === ft(t)
          ? t
          : t.assignedSlot || t.parentNode || (_t(t) ? t.host : null) || kt(t)
      }
      function St(t) {
        return gt(t) && 'fixed' !== Ct(t).position ? t.offsetParent : null
      }
      function Dt(t) {
        for (
          var e = pt(t), n = St(t);
          n && Ot(n) && 'static' === Ct(n).position;

        )
          n = St(n)
        return n &&
          ('html' === ft(n) ||
            ('body' === ft(n) && 'static' === Ct(n).position))
          ? e
          : n ||
              (function (t) {
                var e =
                  -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
                if (
                  -1 !== navigator.userAgent.indexOf('Trident') &&
                  gt(t) &&
                  'fixed' === Ct(t).position
                )
                  return null
                var n = Lt(t)
                for (
                  _t(n) && (n = n.host);
                  gt(n) && ['html', 'body'].indexOf(ft(n)) < 0;

                ) {
                  var i = Ct(n)
                  if (
                    'none' !== i.transform ||
                    'none' !== i.perspective ||
                    'paint' === i.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(i.willChange) ||
                    (e && 'filter' === i.willChange) ||
                    (e && i.filter && 'none' !== i.filter)
                  )
                    return n
                  n = n.parentNode
                }
                return null
              })(t) ||
              e
      }
      function Mt(t) {
        return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'
      }
      function Pt(t, e, n) {
        return yt(t, wt(e, n))
      }
      function Nt(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t)
      }
      function jt(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e
        }, {})
      }
      const It = {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn: function (t) {
          var e,
            n = t.state,
            i = t.name,
            r = t.options,
            o = n.elements.arrow,
            s = n.modifiersData.popperOffsets,
            a = bt(n.placement),
            l = Mt(a),
            c = [V, X].indexOf(a) >= 0 ? 'height' : 'width'
          if (o && s) {
            var u = (function (t, e) {
                return Nt(
                  'number' !=
                    typeof (t =
                      'function' == typeof t
                        ? t(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : t)
                    ? t
                    : jt(t, Q)
                )
              })(r.padding, n),
              h = Tt(o),
              d = 'y' === l ? $ : V,
              f = 'y' === l ? R : X,
              p =
                n.rects.reference[c] +
                n.rects.reference[l] -
                s[l] -
                n.rects.popper[c],
              m = s[l] - n.rects.reference[l],
              g = Dt(o),
              _ = g
                ? 'y' === l
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              v = p / 2 - m / 2,
              b = u[d],
              y = _ - h[c] - u[f],
              w = _ / 2 - h[c] / 2 + v,
              E = Pt(b, w, y),
              A = l
            n.modifiersData[i] =
              (((e = {})[A] = E), (e.centerOffset = E - w), e)
          }
        },
        effect: function (t) {
          var e = t.state,
            n = t.options.element,
            i = void 0 === n ? '[data-popper-arrow]' : n
          null != i &&
            ('string' != typeof i ||
              (i = e.elements.popper.querySelector(i))) &&
            xt(e.elements.popper, i) &&
            (e.elements.arrow = i)
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      }
      function Wt(t) {
        return t.split('-')[1]
      }
      var Ft = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
      function Ht(t) {
        var e,
          n = t.popper,
          i = t.popperRect,
          r = t.placement,
          o = t.variation,
          s = t.offsets,
          a = t.position,
          l = t.gpuAcceleration,
          c = t.adaptive,
          u = t.roundOffsets,
          h = t.isFixed,
          d = s.x,
          f = void 0 === d ? 0 : d,
          p = s.y,
          m = void 0 === p ? 0 : p,
          g = 'function' == typeof u ? u({ x: f, y: m }) : { x: f, y: m }
        ;(f = g.x), (m = g.y)
        var _ = s.hasOwnProperty('x'),
          v = s.hasOwnProperty('y'),
          b = V,
          y = $,
          w = window
        if (c) {
          var E = Dt(n),
            A = 'clientHeight',
            T = 'clientWidth'
          E === pt(n) &&
            'static' !== Ct((E = kt(n))).position &&
            'absolute' === a &&
            ((A = 'scrollHeight'), (T = 'scrollWidth')),
            (r === $ || ((r === V || r === X) && o === K)) &&
              ((y = R),
              (m -=
                (h && E === w && w.visualViewport
                  ? w.visualViewport.height
                  : E[A]) - i.height),
              (m *= l ? 1 : -1)),
            (r !== V && ((r !== $ && r !== R) || o !== K)) ||
              ((b = X),
              (f -=
                (h && E === w && w.visualViewport
                  ? w.visualViewport.width
                  : E[T]) - i.width),
              (f *= l ? 1 : -1))
        }
        var x,
          C = Object.assign({ position: a }, c && Ft),
          O =
            !0 === u
              ? (function (t) {
                  var e = t.x,
                    n = t.y,
                    i = window.devicePixelRatio || 1
                  return { x: Et(e * i) / i || 0, y: Et(n * i) / i || 0 }
                })({ x: f, y: m })
              : { x: f, y: m }
        return (
          (f = O.x),
          (m = O.y),
          l
            ? Object.assign(
                {},
                C,
                (((x = {})[y] = v ? '0' : ''),
                (x[b] = _ ? '0' : ''),
                (x.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? 'translate(' + f + 'px, ' + m + 'px)'
                    : 'translate3d(' + f + 'px, ' + m + 'px, 0)'),
                x)
              )
            : Object.assign(
                {},
                C,
                (((e = {})[y] = v ? m + 'px' : ''),
                (e[b] = _ ? f + 'px' : ''),
                (e.transform = ''),
                e)
              )
        )
      }
      const qt = {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            o = n.adaptive,
            s = void 0 === o || o,
            a = n.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: bt(e.placement),
              variation: Wt(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: r,
              isFixed: 'fixed' === e.options.strategy,
            }
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              Ht(
                Object.assign({}, c, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                })
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                Ht(
                  Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: !1,
                    roundOffsets: l,
                  })
                )
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              'data-popper-placement': e.placement,
            }))
        },
        data: {},
      }
      var Bt = { passive: !0 }
      const zt = {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            n = t.instance,
            i = t.options,
            r = i.scroll,
            o = void 0 === r || r,
            s = i.resize,
            a = void 0 === s || s,
            l = pt(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper)
          return (
            o &&
              c.forEach(function (t) {
                t.addEventListener('scroll', n.update, Bt)
              }),
            a && l.addEventListener('resize', n.update, Bt),
            function () {
              o &&
                c.forEach(function (t) {
                  t.removeEventListener('scroll', n.update, Bt)
                }),
                a && l.removeEventListener('resize', n.update, Bt)
            }
          )
        },
        data: {},
      }
      var $t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
      function Rt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return $t[t]
        })
      }
      var Xt = { start: 'end', end: 'start' }
      function Vt(t) {
        return t.replace(/start|end/g, function (t) {
          return Xt[t]
        })
      }
      function Yt(t) {
        var e = pt(t)
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
      }
      function Qt(t) {
        return At(kt(t)).left + Yt(t).scrollLeft
      }
      function Ut(t) {
        var e = Ct(t),
          n = e.overflow,
          i = e.overflowX,
          r = e.overflowY
        return /auto|scroll|overlay|hidden/.test(n + r + i)
      }
      function Kt(t) {
        return ['html', 'body', '#document'].indexOf(ft(t)) >= 0
          ? t.ownerDocument.body
          : gt(t) && Ut(t)
          ? t
          : Kt(Lt(t))
      }
      function Gt(t, e) {
        var n
        void 0 === e && (e = [])
        var i = Kt(t),
          r = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          o = pt(i),
          s = r ? [o].concat(o.visualViewport || [], Ut(i) ? i : []) : i,
          a = e.concat(s)
        return r ? a : a.concat(Gt(Lt(s)))
      }
      function Jt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        })
      }
      function Zt(t, e) {
        return e === J
          ? Jt(
              (function (t) {
                var e = pt(t),
                  n = kt(t),
                  i = e.visualViewport,
                  r = n.clientWidth,
                  o = n.clientHeight,
                  s = 0,
                  a = 0
                return (
                  i &&
                    ((r = i.width),
                    (o = i.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((s = i.offsetLeft), (a = i.offsetTop))),
                  { width: r, height: o, x: s + Qt(t), y: a }
                )
              })(t)
            )
          : mt(e)
          ? (function (t) {
              var e = At(t)
              return (
                (e.top = e.top + t.clientTop),
                (e.left = e.left + t.clientLeft),
                (e.bottom = e.top + t.clientHeight),
                (e.right = e.left + t.clientWidth),
                (e.width = t.clientWidth),
                (e.height = t.clientHeight),
                (e.x = e.left),
                (e.y = e.top),
                e
              )
            })(e)
          : Jt(
              (function (t) {
                var e,
                  n = kt(t),
                  i = Yt(t),
                  r = null == (e = t.ownerDocument) ? void 0 : e.body,
                  o = yt(
                    n.scrollWidth,
                    n.clientWidth,
                    r ? r.scrollWidth : 0,
                    r ? r.clientWidth : 0
                  ),
                  s = yt(
                    n.scrollHeight,
                    n.clientHeight,
                    r ? r.scrollHeight : 0,
                    r ? r.clientHeight : 0
                  ),
                  a = -i.scrollLeft + Qt(t),
                  l = -i.scrollTop
                return (
                  'rtl' === Ct(r || n).direction &&
                    (a += yt(n.clientWidth, r ? r.clientWidth : 0) - o),
                  { width: o, height: s, x: a, y: l }
                )
              })(kt(t))
            )
      }
      function te(t) {
        var e,
          n = t.reference,
          i = t.element,
          r = t.placement,
          o = r ? bt(r) : null,
          s = r ? Wt(r) : null,
          a = n.x + n.width / 2 - i.width / 2,
          l = n.y + n.height / 2 - i.height / 2
        switch (o) {
          case $:
            e = { x: a, y: n.y - i.height }
            break
          case R:
            e = { x: a, y: n.y + n.height }
            break
          case X:
            e = { x: n.x + n.width, y: l }
            break
          case V:
            e = { x: n.x - i.width, y: l }
            break
          default:
            e = { x: n.x, y: n.y }
        }
        var c = o ? Mt(o) : null
        if (null != c) {
          var u = 'y' === c ? 'height' : 'width'
          switch (s) {
            case U:
              e[c] = e[c] - (n[u] / 2 - i[u] / 2)
              break
            case K:
              e[c] = e[c] + (n[u] / 2 - i[u] / 2)
          }
        }
        return e
      }
      function ee(t, e) {
        void 0 === e && (e = {})
        var n = e,
          i = n.placement,
          r = void 0 === i ? t.placement : i,
          o = n.boundary,
          s = void 0 === o ? G : o,
          a = n.rootBoundary,
          l = void 0 === a ? J : a,
          c = n.elementContext,
          u = void 0 === c ? Z : c,
          h = n.altBoundary,
          d = void 0 !== h && h,
          f = n.padding,
          p = void 0 === f ? 0 : f,
          m = Nt('number' != typeof p ? p : jt(p, Q)),
          g = u === Z ? tt : Z,
          _ = t.rects.popper,
          v = t.elements[d ? g : u],
          b = (function (t, e, n) {
            var i =
                'clippingParents' === e
                  ? (function (t) {
                      var e = Gt(Lt(t)),
                        n =
                          ['absolute', 'fixed'].indexOf(Ct(t).position) >= 0 &&
                          gt(t)
                            ? Dt(t)
                            : t
                      return mt(n)
                        ? e.filter(function (t) {
                            return mt(t) && xt(t, n) && 'body' !== ft(t)
                          })
                        : []
                    })(t)
                  : [].concat(e),
              r = [].concat(i, [n]),
              o = r[0],
              s = r.reduce(function (e, n) {
                var i = Zt(t, n)
                return (
                  (e.top = yt(i.top, e.top)),
                  (e.right = wt(i.right, e.right)),
                  (e.bottom = wt(i.bottom, e.bottom)),
                  (e.left = yt(i.left, e.left)),
                  e
                )
              }, Zt(t, o))
            return (
              (s.width = s.right - s.left),
              (s.height = s.bottom - s.top),
              (s.x = s.left),
              (s.y = s.top),
              s
            )
          })(mt(v) ? v : v.contextElement || kt(t.elements.popper), s, l),
          y = At(t.elements.reference),
          w = te({
            reference: y,
            element: _,
            strategy: 'absolute',
            placement: r,
          }),
          E = Jt(Object.assign({}, _, w)),
          A = u === Z ? E : y,
          T = {
            top: b.top - A.top + m.top,
            bottom: A.bottom - b.bottom + m.bottom,
            left: b.left - A.left + m.left,
            right: A.right - b.right + m.right,
          },
          x = t.modifiersData.offset
        if (u === Z && x) {
          var C = x[r]
          Object.keys(T).forEach(function (t) {
            var e = [X, R].indexOf(t) >= 0 ? 1 : -1,
              n = [$, R].indexOf(t) >= 0 ? 'y' : 'x'
            T[t] += C[n] * e
          })
        }
        return T
      }
      const ne = {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name
          if (!e.modifiersData[i]._skip) {
            for (
              var r = n.mainAxis,
                o = void 0 === r || r,
                s = n.altAxis,
                a = void 0 === s || s,
                l = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                h = n.rootBoundary,
                d = n.altBoundary,
                f = n.flipVariations,
                p = void 0 === f || f,
                m = n.allowedAutoPlacements,
                g = e.options.placement,
                _ = bt(g),
                v =
                  l ||
                  (_ !== g && p
                    ? (function (t) {
                        if (bt(t) === Y) return []
                        var e = Rt(t)
                        return [Vt(t), e, Vt(e)]
                      })(g)
                    : [Rt(g)]),
                b = [g].concat(v).reduce(function (t, n) {
                  return t.concat(
                    bt(n) === Y
                      ? (function (t, e) {
                          void 0 === e && (e = {})
                          var n = e,
                            i = n.placement,
                            r = n.boundary,
                            o = n.rootBoundary,
                            s = n.padding,
                            a = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            c = void 0 === l ? nt : l,
                            u = Wt(i),
                            h = u
                              ? a
                                ? et
                                : et.filter(function (t) {
                                    return Wt(t) === u
                                  })
                              : Q,
                            d = h.filter(function (t) {
                              return c.indexOf(t) >= 0
                            })
                          0 === d.length && (d = h)
                          var f = d.reduce(function (e, n) {
                            return (
                              (e[n] = ee(t, {
                                placement: n,
                                boundary: r,
                                rootBoundary: o,
                                padding: s,
                              })[bt(n)]),
                              e
                            )
                          }, {})
                          return Object.keys(f).sort(function (t, e) {
                            return f[t] - f[e]
                          })
                        })(e, {
                          placement: n,
                          boundary: u,
                          rootBoundary: h,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: m,
                        })
                      : n
                  )
                }, []),
                y = e.rects.reference,
                w = e.rects.popper,
                E = new Map(),
                A = !0,
                T = b[0],
                x = 0;
              x < b.length;
              x++
            ) {
              var C = b[x],
                O = bt(C),
                k = Wt(C) === U,
                L = [$, R].indexOf(O) >= 0,
                S = L ? 'width' : 'height',
                D = ee(e, {
                  placement: C,
                  boundary: u,
                  rootBoundary: h,
                  altBoundary: d,
                  padding: c,
                }),
                M = L ? (k ? X : V) : k ? R : $
              y[S] > w[S] && (M = Rt(M))
              var P = Rt(M),
                N = []
              if (
                (o && N.push(D[O] <= 0),
                a && N.push(D[M] <= 0, D[P] <= 0),
                N.every(function (t) {
                  return t
                }))
              ) {
                ;(T = C), (A = !1)
                break
              }
              E.set(C, N)
            }
            if (A)
              for (
                var j = function (t) {
                    var e = b.find(function (e) {
                      var n = E.get(e)
                      if (n)
                        return n.slice(0, t).every(function (t) {
                          return t
                        })
                    })
                    if (e) return (T = e), 'break'
                  },
                  I = p ? 3 : 1;
                I > 0 && 'break' !== j(I);
                I--
              );
            e.placement !== T &&
              ((e.modifiersData[i]._skip = !0),
              (e.placement = T),
              (e.reset = !0))
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 },
      }
      function ie(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        )
      }
      function re(t) {
        return [$, X, R, V].some(function (e) {
          return t[e] >= 0
        })
      }
      const oe = {
          name: 'hide',
          enabled: !0,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: function (t) {
            var e = t.state,
              n = t.name,
              i = e.rects.reference,
              r = e.rects.popper,
              o = e.modifiersData.preventOverflow,
              s = ee(e, { elementContext: 'reference' }),
              a = ee(e, { altBoundary: !0 }),
              l = ie(s, i),
              c = ie(a, r, o),
              u = re(l),
              h = re(c)
            ;(e.modifiersData[n] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: u,
              hasPopperEscaped: h,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                'data-popper-reference-hidden': u,
                'data-popper-escaped': h,
              }))
          },
        },
        se = {
          name: 'offset',
          enabled: !0,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = t.name,
              r = n.offset,
              o = void 0 === r ? [0, 0] : r,
              s = nt.reduce(function (t, n) {
                return (
                  (t[n] = (function (t, e, n) {
                    var i = bt(t),
                      r = [V, $].indexOf(i) >= 0 ? -1 : 1,
                      o =
                        'function' == typeof n
                          ? n(Object.assign({}, e, { placement: t }))
                          : n,
                      s = o[0],
                      a = o[1]
                    return (
                      (s = s || 0),
                      (a = (a || 0) * r),
                      [V, X].indexOf(i) >= 0 ? { x: a, y: s } : { x: s, y: a }
                    )
                  })(n, e.rects, o)),
                  t
                )
              }, {}),
              a = s[e.placement],
              l = a.x,
              c = a.y
            null != e.modifiersData.popperOffsets &&
              ((e.modifiersData.popperOffsets.x += l),
              (e.modifiersData.popperOffsets.y += c)),
              (e.modifiersData[i] = s)
          },
        },
        ae = {
          name: 'popperOffsets',
          enabled: !0,
          phase: 'read',
          fn: function (t) {
            var e = t.state,
              n = t.name
            e.modifiersData[n] = te({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: 'absolute',
              placement: e.placement,
            })
          },
          data: {},
        },
        le = {
          name: 'preventOverflow',
          enabled: !0,
          phase: 'main',
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = t.name,
              r = n.mainAxis,
              o = void 0 === r || r,
              s = n.altAxis,
              a = void 0 !== s && s,
              l = n.boundary,
              c = n.rootBoundary,
              u = n.altBoundary,
              h = n.padding,
              d = n.tether,
              f = void 0 === d || d,
              p = n.tetherOffset,
              m = void 0 === p ? 0 : p,
              g = ee(e, {
                boundary: l,
                rootBoundary: c,
                padding: h,
                altBoundary: u,
              }),
              _ = bt(e.placement),
              v = Wt(e.placement),
              b = !v,
              y = Mt(_),
              w = 'x' === y ? 'y' : 'x',
              E = e.modifiersData.popperOffsets,
              A = e.rects.reference,
              T = e.rects.popper,
              x =
                'function' == typeof m
                  ? m(Object.assign({}, e.rects, { placement: e.placement }))
                  : m,
              C =
                'number' == typeof x
                  ? { mainAxis: x, altAxis: x }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, x),
              O = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              k = { x: 0, y: 0 }
            if (E) {
              if (o) {
                var L,
                  S = 'y' === y ? $ : V,
                  D = 'y' === y ? R : X,
                  M = 'y' === y ? 'height' : 'width',
                  P = E[y],
                  N = P + g[S],
                  j = P - g[D],
                  I = f ? -T[M] / 2 : 0,
                  W = v === U ? A[M] : T[M],
                  F = v === U ? -T[M] : -A[M],
                  H = e.elements.arrow,
                  q = f && H ? Tt(H) : { width: 0, height: 0 },
                  B = e.modifiersData['arrow#persistent']
                    ? e.modifiersData['arrow#persistent'].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  z = B[S],
                  Y = B[D],
                  Q = Pt(0, A[M], q[M]),
                  K = b
                    ? A[M] / 2 - I - Q - z - C.mainAxis
                    : W - Q - z - C.mainAxis,
                  G = b
                    ? -A[M] / 2 + I + Q + Y + C.mainAxis
                    : F + Q + Y + C.mainAxis,
                  J = e.elements.arrow && Dt(e.elements.arrow),
                  Z = J
                    ? 'y' === y
                      ? J.clientTop || 0
                      : J.clientLeft || 0
                    : 0,
                  tt = null != (L = null == O ? void 0 : O[y]) ? L : 0,
                  et = P + G - tt,
                  nt = Pt(f ? wt(N, P + K - tt - Z) : N, P, f ? yt(j, et) : j)
                ;(E[y] = nt), (k[y] = nt - P)
              }
              if (a) {
                var it,
                  rt = 'x' === y ? $ : V,
                  ot = 'x' === y ? R : X,
                  st = E[w],
                  at = 'y' === w ? 'height' : 'width',
                  lt = st + g[rt],
                  ct = st - g[ot],
                  ut = -1 !== [$, V].indexOf(_),
                  ht = null != (it = null == O ? void 0 : O[w]) ? it : 0,
                  dt = ut ? lt : st - A[at] - T[at] - ht + C.altAxis,
                  ft = ut ? st + A[at] + T[at] - ht - C.altAxis : ct,
                  pt =
                    f && ut
                      ? (function (t, e, n) {
                          var i = Pt(t, e, n)
                          return i > n ? n : i
                        })(dt, st, ft)
                      : Pt(f ? dt : lt, st, f ? ft : ct)
                ;(E[w] = pt), (k[w] = pt - st)
              }
              e.modifiersData[i] = k
            }
          },
          requiresIfExists: ['offset'],
        }
      function ce(t, e, n) {
        void 0 === n && (n = !1)
        var i,
          r,
          o = gt(e),
          s =
            gt(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                n = Et(e.width) / t.offsetWidth || 1,
                i = Et(e.height) / t.offsetHeight || 1
              return 1 !== n || 1 !== i
            })(e),
          a = kt(e),
          l = At(t, s),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 }
        return (
          (o || (!o && !n)) &&
            (('body' !== ft(e) || Ut(a)) &&
              (c =
                (i = e) !== pt(i) && gt(i)
                  ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                  : Yt(i)),
            gt(e)
              ? (((u = At(e, !0)).x += e.clientLeft), (u.y += e.clientTop))
              : a && (u.x = Qt(a))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        )
      }
      function ue(t) {
        var e = new Map(),
          n = new Set(),
          i = []
        function r(t) {
          n.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!n.has(t)) {
                  var i = e.get(t)
                  i && r(i)
                }
              }),
            i.push(t)
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t)
          }),
          t.forEach(function (t) {
            n.has(t.name) || r(t)
          }),
          i
        )
      }
      var he = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
      function de() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n]
        return !e.some(function (t) {
          return !(t && 'function' == typeof t.getBoundingClientRect)
        })
      }
      function fe(t) {
        void 0 === t && (t = {})
        var e = t,
          n = e.defaultModifiers,
          i = void 0 === n ? [] : n,
          r = e.defaultOptions,
          o = void 0 === r ? he : r
        return function (t, e, n) {
          void 0 === n && (n = o)
          var r,
            s,
            a = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, he, o),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (n) {
                var r = 'function' == typeof n ? n(a.options) : n
                h(),
                  (a.options = Object.assign({}, o, a.options, r)),
                  (a.scrollParents = {
                    reference: mt(t)
                      ? Gt(t)
                      : t.contextElement
                      ? Gt(t.contextElement)
                      : [],
                    popper: Gt(e),
                  })
                var s,
                  c,
                  d = (function (t) {
                    var e = ue(t)
                    return dt.reduce(function (t, n) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === n
                        })
                      )
                    }, [])
                  })(
                    ((s = [].concat(i, a.options.modifiers)),
                    (c = s.reduce(function (t, e) {
                      var n = t[e.name]
                      return (
                        (t[e.name] = n
                          ? Object.assign({}, n, e, {
                              options: Object.assign({}, n.options, e.options),
                              data: Object.assign({}, n.data, e.data),
                            })
                          : e),
                        t
                      )
                    }, {})),
                    Object.keys(c).map(function (t) {
                      return c[t]
                    }))
                  )
                return (
                  (a.orderedModifiers = d.filter(function (t) {
                    return t.enabled
                  })),
                  a.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      i = void 0 === n ? {} : n,
                      r = t.effect
                    if ('function' == typeof r) {
                      var o = r({ state: a, name: e, instance: u, options: i })
                      l.push(o || function () {})
                    }
                  }),
                  u.update()
                )
              },
              forceUpdate: function () {
                if (!c) {
                  var t = a.elements,
                    e = t.reference,
                    n = t.popper
                  if (de(e, n)) {
                    ;(a.rects = {
                      reference: ce(e, Dt(n), 'fixed' === a.options.strategy),
                      popper: Tt(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (t) {
                        return (a.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ))
                      })
                    for (var i = 0; i < a.orderedModifiers.length; i++)
                      if (!0 !== a.reset) {
                        var r = a.orderedModifiers[i],
                          o = r.fn,
                          s = r.options,
                          l = void 0 === s ? {} : s,
                          h = r.name
                        'function' == typeof o &&
                          (a =
                            o({ state: a, options: l, name: h, instance: u }) ||
                            a)
                      } else (a.reset = !1), (i = -1)
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (t) {
                    u.forceUpdate(), t(a)
                  })
                }),
                function () {
                  return (
                    s ||
                      (s = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          ;(s = void 0), t(r())
                        })
                      })),
                    s
                  )
                }),
              destroy: function () {
                h(), (c = !0)
              },
            }
          if (!de(t, e)) return u
          function h() {
            l.forEach(function (t) {
              return t()
            }),
              (l = [])
          }
          return (
            u.setOptions(n).then(function (t) {
              !c && n.onFirstUpdate && n.onFirstUpdate(t)
            }),
            u
          )
        }
      }
      var pe = fe(),
        me = fe({ defaultModifiers: [zt, ae, qt, vt, se, ne, le, It, oe] }),
        ge = fe({ defaultModifiers: [zt, ae, qt, vt] })
      const _e = 'transitionend',
        ve = t => {
          let e = t.getAttribute('data-bs-target')
          if (!e || '#' === e) {
            let n = t.getAttribute('href')
            if (!n || (!n.includes('#') && !n.startsWith('.'))) return null
            n.includes('#') &&
              !n.startsWith('#') &&
              (n = `#${n.split('#')[1]}`),
              (e = n && '#' !== n ? n.trim() : null)
          }
          return e
        },
        be = t => {
          const e = ve(t)
          return e && document.querySelector(e) ? e : null
        },
        ye = t => {
          const e = ve(t)
          return e ? document.querySelector(e) : null
        },
        we = t => {
          t.dispatchEvent(new Event(_e))
        },
        Ee = t =>
          !(!t || 'object' != typeof t) &&
          (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Ae = t =>
          Ee(t)
            ? t.jquery
              ? t[0]
              : t
            : 'string' == typeof t && t.length > 0
            ? document.querySelector(t)
            : null,
        Te = t => {
          if (!Ee(t) || 0 === t.getClientRects().length) return !1
          const e =
              'visible' === getComputedStyle(t).getPropertyValue('visibility'),
            n = t.closest('details:not([open])')
          if (!n) return e
          if (n !== t) {
            const e = t.closest('summary')
            if (e && e.parentNode !== n) return !1
            if (null === e) return !1
          }
          return e
        },
        xe = t =>
          !t ||
          t.nodeType !== Node.ELEMENT_NODE ||
          !!t.classList.contains('disabled') ||
          (void 0 !== t.disabled
            ? t.disabled
            : t.hasAttribute('disabled') &&
              'false' !== t.getAttribute('disabled')),
        Ce = t => {
          if (!document.documentElement.attachShadow) return null
          if ('function' == typeof t.getRootNode) {
            const e = t.getRootNode()
            return e instanceof ShadowRoot ? e : null
          }
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? Ce(t.parentNode)
            : null
        },
        Oe = () => {},
        ke = t => {
          t.offsetHeight
        },
        Le = () =>
          window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
            ? window.jQuery
            : null,
        Se = [],
        De = () => 'rtl' === document.documentElement.dir,
        Me = t => {
          var e
          ;(e = () => {
            const e = Le()
            if (e) {
              const n = t.NAME,
                i = e.fn[n]
              ;(e.fn[n] = t.jQueryInterface),
                (e.fn[n].Constructor = t),
                (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface))
            }
          }),
            'loading' === document.readyState
              ? (Se.length ||
                  document.addEventListener('DOMContentLoaded', () => {
                    for (const t of Se) t()
                  }),
                Se.push(e))
              : e()
        },
        Pe = t => {
          'function' == typeof t && t()
        },
        Ne = (t, e, n = !0) => {
          if (!n) return void Pe(t)
          const i =
            (t => {
              if (!t) return 0
              let { transitionDuration: e, transitionDelay: n } =
                window.getComputedStyle(t)
              const i = Number.parseFloat(e),
                r = Number.parseFloat(n)
              return i || r
                ? ((e = e.split(',')[0]),
                  (n = n.split(',')[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(n)))
                : 0
            })(e) + 5
          let r = !1
          const o = ({ target: n }) => {
            n === e && ((r = !0), e.removeEventListener(_e, o), Pe(t))
          }
          e.addEventListener(_e, o),
            setTimeout(() => {
              r || we(e)
            }, i)
        },
        je = (t, e, n, i) => {
          const r = t.length
          let o = t.indexOf(e)
          return -1 === o
            ? !n && i
              ? t[r - 1]
              : t[0]
            : ((o += n ? 1 : -1),
              i && (o = (o + r) % r),
              t[Math.max(0, Math.min(o, r - 1))])
        },
        Ie = /[^.]*(?=\..*)\.|.*/,
        We = /\..*/,
        Fe = /::\d+$/,
        He = {}
      let qe = 1
      const Be = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
        ze = new Set([
          'click',
          'dblclick',
          'mouseup',
          'mousedown',
          'contextmenu',
          'mousewheel',
          'DOMMouseScroll',
          'mouseover',
          'mouseout',
          'mousemove',
          'selectstart',
          'selectend',
          'keydown',
          'keypress',
          'keyup',
          'orientationchange',
          'touchstart',
          'touchmove',
          'touchend',
          'touchcancel',
          'pointerdown',
          'pointermove',
          'pointerup',
          'pointerleave',
          'pointercancel',
          'gesturestart',
          'gesturechange',
          'gestureend',
          'focus',
          'blur',
          'change',
          'reset',
          'select',
          'submit',
          'focusin',
          'focusout',
          'load',
          'unload',
          'beforeunload',
          'resize',
          'move',
          'DOMContentLoaded',
          'readystatechange',
          'error',
          'abort',
          'scroll',
        ])
      function $e(t, e) {
        return (e && `${e}::${qe++}`) || t.uidEvent || qe++
      }
      function Re(t) {
        const e = $e(t)
        return (t.uidEvent = e), (He[e] = He[e] || {}), He[e]
      }
      function Xe(t, e, n = null) {
        return Object.values(t).find(
          t => t.callable === e && t.delegationSelector === n
        )
      }
      function Ve(t, e, n) {
        const i = 'string' == typeof e,
          r = i ? n : e || n
        let o = Ke(t)
        return ze.has(o) || (o = t), [i, r, o]
      }
      function Ye(t, e, n, i, r) {
        if ('string' != typeof e || !t) return
        let [o, s, a] = Ve(e, n, i)
        if (e in Be) {
          const t = t =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e)
            }
          s = t(s)
        }
        const l = Re(t),
          c = l[a] || (l[a] = {}),
          u = Xe(c, s, o ? n : null)
        if (u) return void (u.oneOff = u.oneOff && r)
        const h = $e(s, e.replace(Ie, '')),
          d = o
            ? (function (t, e, n) {
                return function i(r) {
                  const o = t.querySelectorAll(e)
                  for (let { target: s } = r; s && s !== this; s = s.parentNode)
                    for (const a of o)
                      if (a === s)
                        return (
                          Je(r, { delegateTarget: s }),
                          i.oneOff && Ge.off(t, r.type, e, n),
                          n.apply(s, [r])
                        )
                }
              })(t, n, s)
            : (function (t, e) {
                return function n(i) {
                  return (
                    Je(i, { delegateTarget: t }),
                    n.oneOff && Ge.off(t, i.type, e),
                    e.apply(t, [i])
                  )
                }
              })(t, s)
        ;(d.delegationSelector = o ? n : null),
          (d.callable = s),
          (d.oneOff = r),
          (d.uidEvent = h),
          (c[h] = d),
          t.addEventListener(a, d, o)
      }
      function Qe(t, e, n, i, r) {
        const o = Xe(e[n], i, r)
        o && (t.removeEventListener(n, o, Boolean(r)), delete e[n][o.uidEvent])
      }
      function Ue(t, e, n, i) {
        const r = e[n] || {}
        for (const o of Object.keys(r))
          if (o.includes(i)) {
            const i = r[o]
            Qe(t, e, n, i.callable, i.delegationSelector)
          }
      }
      function Ke(t) {
        return (t = t.replace(We, '')), Be[t] || t
      }
      const Ge = {
        on(t, e, n, i) {
          Ye(t, e, n, i, !1)
        },
        one(t, e, n, i) {
          Ye(t, e, n, i, !0)
        },
        off(t, e, n, i) {
          if ('string' != typeof e || !t) return
          const [r, o, s] = Ve(e, n, i),
            a = s !== e,
            l = Re(t),
            c = l[s] || {},
            u = e.startsWith('.')
          if (void 0 === o) {
            if (u) for (const n of Object.keys(l)) Ue(t, l, n, e.slice(1))
            for (const n of Object.keys(c)) {
              const i = n.replace(Fe, '')
              if (!a || e.includes(i)) {
                const e = c[n]
                Qe(t, l, s, e.callable, e.delegationSelector)
              }
            }
          } else {
            if (!Object.keys(c).length) return
            Qe(t, l, s, o, r ? n : null)
          }
        },
        trigger(t, e, n) {
          if ('string' != typeof e || !t) return null
          const i = Le()
          let r = null,
            o = !0,
            s = !0,
            a = !1
          e !== Ke(e) &&
            i &&
            ((r = i.Event(e, n)),
            i(t).trigger(r),
            (o = !r.isPropagationStopped()),
            (s = !r.isImmediatePropagationStopped()),
            (a = r.isDefaultPrevented()))
          let l = new Event(e, { bubbles: o, cancelable: !0 })
          return (
            (l = Je(l, n)),
            a && l.preventDefault(),
            s && t.dispatchEvent(l),
            l.defaultPrevented && r && r.preventDefault(),
            l
          )
        },
      }
      function Je(t, e) {
        for (const [n, i] of Object.entries(e || {}))
          try {
            t[n] = i
          } catch (e) {
            Object.defineProperty(t, n, { configurable: !0, get: () => i })
          }
        return t
      }
      const Ze = new Map(),
        tn = {
          set(t, e, n) {
            Ze.has(t) || Ze.set(t, new Map())
            const i = Ze.get(t)
            i.has(e) || 0 === i.size
              ? i.set(e, n)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(i.keys())[0]
                  }.`
                )
          },
          get: (t, e) => (Ze.has(t) && Ze.get(t).get(e)) || null,
          remove(t, e) {
            if (!Ze.has(t)) return
            const n = Ze.get(t)
            n.delete(e), 0 === n.size && Ze.delete(t)
          },
        }
      function en(t) {
        if ('true' === t) return !0
        if ('false' === t) return !1
        if (t === Number(t).toString()) return Number(t)
        if ('' === t || 'null' === t) return null
        if ('string' != typeof t) return t
        try {
          return JSON.parse(decodeURIComponent(t))
        } catch (e) {
          return t
        }
      }
      function nn(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
      }
      const rn = {
        setDataAttribute(t, e, n) {
          t.setAttribute(`data-bs-${nn(e)}`, n)
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${nn(e)}`)
        },
        getDataAttributes(t) {
          if (!t) return {}
          const e = {},
            n = Object.keys(t.dataset).filter(
              t => t.startsWith('bs') && !t.startsWith('bsConfig')
            )
          for (const i of n) {
            let n = i.replace(/^bs/, '')
            ;(n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
              (e[n] = en(t.dataset[i]))
          }
          return e
        },
        getDataAttribute: (t, e) => en(t.getAttribute(`data-bs-${nn(e)}`)),
      }
      class on {
        static get Default() {
          return {}
        }
        static get DefaultType() {
          return {}
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!'
          )
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          )
        }
        _configAfterMerge(t) {
          return t
        }
        _mergeConfigObj(t, e) {
          const n = Ee(e) ? rn.getDataAttribute(e, 'config') : {}
          return {
            ...this.constructor.Default,
            ...('object' == typeof n ? n : {}),
            ...(Ee(e) ? rn.getDataAttributes(e) : {}),
            ...('object' == typeof t ? t : {}),
          }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const i of Object.keys(e)) {
            const r = e[i],
              o = t[i],
              s = Ee(o)
                ? 'element'
                : null == (n = o)
                ? `${n}`
                : Object.prototype.toString
                    .call(n)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase()
            if (!new RegExp(r).test(s))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`
              )
          }
          var n
        }
      }
      class sn extends on {
        constructor(t, e) {
          super(),
            (t = Ae(t)) &&
              ((this._element = t),
              (this._config = this._getConfig(e)),
              tn.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
          tn.remove(this._element, this.constructor.DATA_KEY),
            Ge.off(this._element, this.constructor.EVENT_KEY)
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }
        _queueCallback(t, e, n = !0) {
          Ne(t, e, n)
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t, this._element)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          )
        }
        static getInstance(t) {
          return tn.get(Ae(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
          return (
            this.getInstance(t) || new this(t, 'object' == typeof e ? e : null)
          )
        }
        static get VERSION() {
          return '5.2.0'
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`
        }
        static eventName(t) {
          return `${t}${this.EVENT_KEY}`
        }
      }
      const an = (t, e = 'hide') => {
        const n = `click.dismiss${t.EVENT_KEY}`,
          i = t.NAME
        Ge.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
          if (
            (['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
            xe(this))
          )
            return
          const r = ye(this) || this.closest(`.${i}`)
          t.getOrCreateInstance(r)[e]()
        })
      }
      class ln extends sn {
        static get NAME() {
          return 'alert'
        }
        close() {
          if (Ge.trigger(this._element, 'close.bs.alert').defaultPrevented)
            return
          this._element.classList.remove('show')
          const t = this._element.classList.contains('fade')
          this._queueCallback(() => this._destroyElement(), this._element, t)
        }
        _destroyElement() {
          this._element.remove(),
            Ge.trigger(this._element, 'closed.bs.alert'),
            this.dispose()
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ln.getOrCreateInstance(this)
            if ('string' == typeof t) {
              if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
                throw new TypeError(`No method named "${t}"`)
              e[t](this)
            }
          })
        }
      }
      an(ln, 'close'), Me(ln)
      const cn = '[data-bs-toggle="button"]'
      class un extends sn {
        static get NAME() {
          return 'button'
        }
        toggle() {
          this._element.setAttribute(
            'aria-pressed',
            this._element.classList.toggle('active')
          )
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = un.getOrCreateInstance(this)
            'toggle' === t && e[t]()
          })
        }
      }
      Ge.on(document, 'click.bs.button.data-api', cn, t => {
        t.preventDefault()
        const e = t.target.closest(cn)
        un.getOrCreateInstance(e).toggle()
      }),
        Me(un)
      const hn = {
          find: (t, e = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) =>
            Element.prototype.querySelector.call(e, t),
          children: (t, e) =>
            [].concat(...t.children).filter(t => t.matches(e)),
          parents(t, e) {
            const n = []
            let i = t.parentNode.closest(e)
            for (; i; ) n.push(i), (i = i.parentNode.closest(e))
            return n
          },
          prev(t, e) {
            let n = t.previousElementSibling
            for (; n; ) {
              if (n.matches(e)) return [n]
              n = n.previousElementSibling
            }
            return []
          },
          next(t, e) {
            let n = t.nextElementSibling
            for (; n; ) {
              if (n.matches(e)) return [n]
              n = n.nextElementSibling
            }
            return []
          },
          focusableChildren(t) {
            const e = [
              'a',
              'button',
              'input',
              'textarea',
              'select',
              'details',
              '[tabindex]',
              '[contenteditable="true"]',
            ]
              .map(t => `${t}:not([tabindex^="-"])`)
              .join(',')
            return this.find(e, t).filter(t => !xe(t) && Te(t))
          },
        },
        dn = { endCallback: null, leftCallback: null, rightCallback: null },
        fn = {
          endCallback: '(function|null)',
          leftCallback: '(function|null)',
          rightCallback: '(function|null)',
        }
      class pn extends on {
        constructor(t, e) {
          super(),
            (this._element = t),
            t &&
              pn.isSupported() &&
              ((this._config = this._getConfig(e)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents())
        }
        static get Default() {
          return dn
        }
        static get DefaultType() {
          return fn
        }
        static get NAME() {
          return 'swipe'
        }
        dispose() {
          Ge.off(this._element, '.bs.swipe')
        }
        _start(t) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
            : (this._deltaX = t.touches[0].clientX)
        }
        _end(t) {
          this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            Pe(this._config.endCallback)
        }
        _move(t) {
          this._deltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
          const t = Math.abs(this._deltaX)
          if (t <= 40) return
          const e = t / this._deltaX
          ;(this._deltaX = 0),
            e &&
              Pe(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
          this._supportPointerEvents
            ? (Ge.on(this._element, 'pointerdown.bs.swipe', t =>
                this._start(t)
              ),
              Ge.on(this._element, 'pointerup.bs.swipe', t => this._end(t)),
              this._element.classList.add('pointer-event'))
            : (Ge.on(this._element, 'touchstart.bs.swipe', t => this._start(t)),
              Ge.on(this._element, 'touchmove.bs.swipe', t => this._move(t)),
              Ge.on(this._element, 'touchend.bs.swipe', t => this._end(t)))
        }
        _eventIsPointerPenTouch(t) {
          return (
            this._supportPointerEvents &&
            ('pen' === t.pointerType || 'touch' === t.pointerType)
          )
        }
        static isSupported() {
          return (
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0
          )
        }
      }
      const mn = 'next',
        gn = 'prev',
        _n = 'left',
        vn = 'right',
        bn = 'slid.bs.carousel',
        yn = 'carousel',
        wn = 'active',
        En = { ArrowLeft: vn, ArrowRight: _n },
        An = {
          interval: 5e3,
          keyboard: !0,
          pause: 'hover',
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        Tn = {
          interval: '(number|boolean)',
          keyboard: 'boolean',
          pause: '(string|boolean)',
          ride: '(boolean|string)',
          touch: 'boolean',
          wrap: 'boolean',
        }
      class xn extends sn {
        constructor(t, e) {
          super(t, e),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = hn.findOne(
              '.carousel-indicators',
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === yn && this.cycle()
        }
        static get Default() {
          return An
        }
        static get DefaultType() {
          return Tn
        }
        static get NAME() {
          return 'carousel'
        }
        next() {
          this._slide(mn)
        }
        nextWhenVisible() {
          !document.hidden && Te(this._element) && this.next()
        }
        prev() {
          this._slide(gn)
        }
        pause() {
          this._isSliding && we(this._element), this._clearInterval()
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ))
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? Ge.one(this._element, bn, () => this.cycle())
              : this.cycle())
        }
        to(t) {
          const e = this._getItems()
          if (t > e.length - 1 || t < 0) return
          if (this._isSliding)
            return void Ge.one(this._element, bn, () => this.to(t))
          const n = this._getItemIndex(this._getActive())
          if (n === t) return
          const i = t > n ? mn : gn
          this._slide(i, e[t])
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
          return (t.defaultInterval = t.interval), t
        }
        _addEventListeners() {
          this._config.keyboard &&
            Ge.on(this._element, 'keydown.bs.carousel', t => this._keydown(t)),
            'hover' === this._config.pause &&
              (Ge.on(this._element, 'mouseenter.bs.carousel', () =>
                this.pause()
              ),
              Ge.on(this._element, 'mouseleave.bs.carousel', () =>
                this._maybeEnableCycle()
              )),
            this._config.touch &&
              pn.isSupported() &&
              this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
          for (const t of hn.find('.carousel-item img', this._element))
            Ge.on(t, 'dragstart.bs.carousel', t => t.preventDefault())
          const t = {
            leftCallback: () => this._slide(this._directionToOrder(_n)),
            rightCallback: () => this._slide(this._directionToOrder(vn)),
            endCallback: () => {
              'hover' === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )))
            },
          }
          this._swipeHelper = new pn(this._element, t)
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return
          const e = En[t.key]
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
          return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return
          const e = hn.findOne('.active', this._indicatorsElement)
          e.classList.remove(wn), e.removeAttribute('aria-current')
          const n = hn.findOne(
            `[data-bs-slide-to="${t}"]`,
            this._indicatorsElement
          )
          n && (n.classList.add(wn), n.setAttribute('aria-current', 'true'))
        }
        _updateInterval() {
          const t = this._activeElement || this._getActive()
          if (!t) return
          const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10)
          this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e = null) {
          if (this._isSliding) return
          const n = this._getActive(),
            i = t === mn,
            r = e || je(this._getItems(), n, i, this._config.wrap)
          if (r === n) return
          const o = this._getItemIndex(r),
            s = e =>
              Ge.trigger(this._element, e, {
                relatedTarget: r,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(n),
                to: o,
              })
          if (s('slide.bs.carousel').defaultPrevented) return
          if (!n || !r) return
          const a = Boolean(this._interval)
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(o),
            (this._activeElement = r)
          const l = i ? 'carousel-item-start' : 'carousel-item-end',
            c = i ? 'carousel-item-next' : 'carousel-item-prev'
          r.classList.add(c),
            ke(r),
            n.classList.add(l),
            r.classList.add(l),
            this._queueCallback(
              () => {
                r.classList.remove(l, c),
                  r.classList.add(wn),
                  n.classList.remove(wn, c, l),
                  (this._isSliding = !1),
                  s(bn)
              },
              n,
              this._isAnimated()
            ),
            a && this.cycle()
        }
        _isAnimated() {
          return this._element.classList.contains('slide')
        }
        _getActive() {
          return hn.findOne('.active.carousel-item', this._element)
        }
        _getItems() {
          return hn.find('.carousel-item', this._element)
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null))
        }
        _directionToOrder(t) {
          return De() ? (t === _n ? gn : mn) : t === _n ? mn : gn
        }
        _orderToDirection(t) {
          return De() ? (t === gn ? _n : vn) : t === gn ? vn : _n
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = xn.getOrCreateInstance(this, t)
            if ('number' != typeof t) {
              if ('string' == typeof t) {
                if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
                  throw new TypeError(`No method named "${t}"`)
                e[t]()
              }
            } else e.to(t)
          })
        }
      }
      Ge.on(
        document,
        'click.bs.carousel.data-api',
        '[data-bs-slide], [data-bs-slide-to]',
        function (t) {
          const e = ye(this)
          if (!e || !e.classList.contains(yn)) return
          t.preventDefault()
          const n = xn.getOrCreateInstance(e),
            i = this.getAttribute('data-bs-slide-to')
          return i
            ? (n.to(i), void n._maybeEnableCycle())
            : 'next' === rn.getDataAttribute(this, 'slide')
            ? (n.next(), void n._maybeEnableCycle())
            : (n.prev(), void n._maybeEnableCycle())
        }
      ),
        Ge.on(window, 'load.bs.carousel.data-api', () => {
          const t = hn.find('[data-bs-ride="carousel"]')
          for (const e of t) xn.getOrCreateInstance(e)
        }),
        Me(xn)
      const Cn = 'show',
        On = 'collapse',
        kn = 'collapsing',
        Ln = '[data-bs-toggle="collapse"]',
        Sn = { parent: null, toggle: !0 },
        Dn = { parent: '(null|element)', toggle: 'boolean' }
      class Mn extends sn {
        constructor(t, e) {
          super(t, e), (this._isTransitioning = !1), (this._triggerArray = [])
          const n = hn.find(Ln)
          for (const t of n) {
            const e = be(t),
              n = hn.find(e).filter(t => t === this._element)
            null !== e && n.length && this._triggerArray.push(t)
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle()
        }
        static get Default() {
          return Sn
        }
        static get DefaultType() {
          return Dn
        }
        static get NAME() {
          return 'collapse'
        }
        toggle() {
          this._isShown() ? this.hide() : this.show()
        }
        show() {
          if (this._isTransitioning || this._isShown()) return
          let t = []
          if (
            (this._config.parent &&
              (t = this._getFirstLevelChildren(
                '.collapse.show, .collapse.collapsing'
              )
                .filter(t => t !== this._element)
                .map(t => Mn.getOrCreateInstance(t, { toggle: !1 }))),
            t.length && t[0]._isTransitioning)
          )
            return
          if (Ge.trigger(this._element, 'show.bs.collapse').defaultPrevented)
            return
          for (const e of t) e.hide()
          const e = this._getDimension()
          this._element.classList.remove(On),
            this._element.classList.add(kn),
            (this._element.style[e] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0)
          const n = `scroll${e[0].toUpperCase() + e.slice(1)}`
          this._queueCallback(
            () => {
              ;(this._isTransitioning = !1),
                this._element.classList.remove(kn),
                this._element.classList.add(On, Cn),
                (this._element.style[e] = ''),
                Ge.trigger(this._element, 'shown.bs.collapse')
            },
            this._element,
            !0
          ),
            (this._element.style[e] = `${this._element[n]}px`)
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return
          if (Ge.trigger(this._element, 'hide.bs.collapse').defaultPrevented)
            return
          const t = this._getDimension()
          ;(this._element.style[t] = `${
            this._element.getBoundingClientRect()[t]
          }px`),
            ke(this._element),
            this._element.classList.add(kn),
            this._element.classList.remove(On, Cn)
          for (const t of this._triggerArray) {
            const e = ye(t)
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
          }
          ;(this._isTransitioning = !0),
            (this._element.style[t] = ''),
            this._queueCallback(
              () => {
                ;(this._isTransitioning = !1),
                  this._element.classList.remove(kn),
                  this._element.classList.add(On),
                  Ge.trigger(this._element, 'hidden.bs.collapse')
              },
              this._element,
              !0
            )
        }
        _isShown(t = this._element) {
          return t.classList.contains(Cn)
        }
        _configAfterMerge(t) {
          return (t.toggle = Boolean(t.toggle)), (t.parent = Ae(t.parent)), t
        }
        _getDimension() {
          return this._element.classList.contains('collapse-horizontal')
            ? 'width'
            : 'height'
        }
        _initializeChildren() {
          if (!this._config.parent) return
          const t = this._getFirstLevelChildren(Ln)
          for (const e of t) {
            const t = ye(e)
            t && this._addAriaAndCollapsedClass([e], this._isShown(t))
          }
        }
        _getFirstLevelChildren(t) {
          const e = hn.find(':scope .collapse .collapse', this._config.parent)
          return hn.find(t, this._config.parent).filter(t => !e.includes(t))
        }
        _addAriaAndCollapsedClass(t, e) {
          if (t.length)
            for (const n of t)
              n.classList.toggle('collapsed', !e),
                n.setAttribute('aria-expanded', e)
        }
        static jQueryInterface(t) {
          const e = {}
          return (
            'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function () {
              const n = Mn.getOrCreateInstance(this, e)
              if ('string' == typeof t) {
                if (void 0 === n[t])
                  throw new TypeError(`No method named "${t}"`)
                n[t]()
              }
            })
          )
        }
      }
      Ge.on(document, 'click.bs.collapse.data-api', Ln, function (t) {
        ;('A' === t.target.tagName ||
          (t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
          t.preventDefault()
        const e = be(this),
          n = hn.find(e)
        for (const t of n) Mn.getOrCreateInstance(t, { toggle: !1 }).toggle()
      }),
        Me(Mn)
      const Pn = 'dropdown',
        Nn = 'ArrowUp',
        jn = 'ArrowDown',
        In = 'click.bs.dropdown.data-api',
        Wn = 'keydown.bs.dropdown.data-api',
        Fn = 'show',
        Hn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        qn = `${Hn}.show`,
        Bn = '.dropdown-menu',
        zn = De() ? 'top-end' : 'top-start',
        $n = De() ? 'top-start' : 'top-end',
        Rn = De() ? 'bottom-end' : 'bottom-start',
        Xn = De() ? 'bottom-start' : 'bottom-end',
        Vn = De() ? 'left-start' : 'right-start',
        Yn = De() ? 'right-start' : 'left-start',
        Qn = {
          autoClose: !0,
          boundary: 'clippingParents',
          display: 'dynamic',
          offset: [0, 2],
          popperConfig: null,
          reference: 'toggle',
        },
        Un = {
          autoClose: '(boolean|string)',
          boundary: '(string|element)',
          display: 'string',
          offset: '(array|string|function)',
          popperConfig: '(null|object|function)',
          reference: '(string|element|object)',
        }
      class Kn extends sn {
        constructor(t, e) {
          super(t, e),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu = hn.findOne(Bn, this._parent)),
            (this._inNavbar = this._detectNavbar())
        }
        static get Default() {
          return Qn
        }
        static get DefaultType() {
          return Un
        }
        static get NAME() {
          return Pn
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show()
        }
        show() {
          if (xe(this._element) || this._isShown()) return
          const t = { relatedTarget: this._element }
          if (
            !Ge.trigger(this._element, 'show.bs.dropdown', t).defaultPrevented
          ) {
            if (
              (this._createPopper(),
              'ontouchstart' in document.documentElement &&
                !this._parent.closest('.navbar-nav'))
            )
              for (const t of [].concat(...document.body.children))
                Ge.on(t, 'mouseover', Oe)
            this._element.focus(),
              this._element.setAttribute('aria-expanded', !0),
              this._menu.classList.add(Fn),
              this._element.classList.add(Fn),
              Ge.trigger(this._element, 'shown.bs.dropdown', t)
          }
        }
        hide() {
          if (xe(this._element) || !this._isShown()) return
          const t = { relatedTarget: this._element }
          this._completeHide(t)
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
          ;(this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
          if (
            !Ge.trigger(this._element, 'hide.bs.dropdown', t).defaultPrevented
          ) {
            if ('ontouchstart' in document.documentElement)
              for (const t of [].concat(...document.body.children))
                Ge.off(t, 'mouseover', Oe)
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(Fn),
              this._element.classList.remove(Fn),
              this._element.setAttribute('aria-expanded', 'false'),
              rn.removeDataAttribute(this._menu, 'popper'),
              Ge.trigger(this._element, 'hidden.bs.dropdown', t)
          }
        }
        _getConfig(t) {
          if (
            'object' == typeof (t = super._getConfig(t)).reference &&
            !Ee(t.reference) &&
            'function' != typeof t.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${Pn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            )
          return t
        }
        _createPopper() {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            )
          let e = this._element
          'parent' === this._config.reference
            ? (e = this._parent)
            : Ee(this._config.reference)
            ? (e = Ae(this._config.reference))
            : 'object' == typeof this._config.reference &&
              (e = this._config.reference)
          const n = this._getPopperConfig()
          this._popper = me(e, this._menu, n)
        }
        _isShown() {
          return this._menu.classList.contains(Fn)
        }
        _getPlacement() {
          const t = this._parent
          if (t.classList.contains('dropend')) return Vn
          if (t.classList.contains('dropstart')) return Yn
          if (t.classList.contains('dropup-center')) return 'top'
          if (t.classList.contains('dropdown-center')) return 'bottom'
          const e =
            'end' ===
            getComputedStyle(this._menu)
              .getPropertyValue('--bs-position')
              .trim()
          return t.classList.contains('dropup') ? (e ? $n : zn) : e ? Xn : Rn
        }
        _detectNavbar() {
          return null !== this._element.closest('.navbar')
        }
        _getOffset() {
          const { offset: t } = this._config
          return 'string' == typeof t
            ? t.split(',').map(t => Number.parseInt(t, 10))
            : 'function' == typeof t
            ? e => t(e, this._element)
            : t
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: 'preventOverflow',
                options: { boundary: this._config.boundary },
              },
              { name: 'offset', options: { offset: this._getOffset() } },
            ],
          }
          return (
            (this._inNavbar || 'static' === this._config.display) &&
              (rn.setDataAttribute(this._menu, 'popper', 'static'),
              (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
            {
              ...t,
              ...('function' == typeof this._config.popperConfig
                ? this._config.popperConfig(t)
                : this._config.popperConfig),
            }
          )
        }
        _selectMenuItem({ key: t, target: e }) {
          const n = hn
            .find(
              '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
              this._menu
            )
            .filter(t => Te(t))
          n.length && je(n, e, t === jn, !n.includes(e)).focus()
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Kn.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
              e[t]()
            }
          })
        }
        static clearMenus(t) {
          if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return
          const e = hn.find(qn)
          for (const n of e) {
            const e = Kn.getInstance(n)
            if (!e || !1 === e._config.autoClose) continue
            const i = t.composedPath(),
              r = i.includes(e._menu)
            if (
              i.includes(e._element) ||
              ('inside' === e._config.autoClose && !r) ||
              ('outside' === e._config.autoClose && r)
            )
              continue
            if (
              e._menu.contains(t.target) &&
              (('keyup' === t.type && 'Tab' === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue
            const o = { relatedTarget: e._element }
            'click' === t.type && (o.clickEvent = t), e._completeHide(o)
          }
        }
        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName),
            n = 'Escape' === t.key,
            i = [Nn, jn].includes(t.key)
          if (!i && !n) return
          if (e && !n) return
          t.preventDefault()
          const r = hn.findOne(Hn, t.delegateTarget.parentNode),
            o = Kn.getOrCreateInstance(r)
          if (i) return t.stopPropagation(), o.show(), void o._selectMenuItem(t)
          o._isShown() && (t.stopPropagation(), o.hide(), r.focus())
        }
      }
      Ge.on(document, Wn, Hn, Kn.dataApiKeydownHandler),
        Ge.on(document, Wn, Bn, Kn.dataApiKeydownHandler),
        Ge.on(document, In, Kn.clearMenus),
        Ge.on(document, 'keyup.bs.dropdown.data-api', Kn.clearMenus),
        Ge.on(document, In, Hn, function (t) {
          t.preventDefault(), Kn.getOrCreateInstance(this).toggle()
        }),
        Me(Kn)
      const Gn = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        Jn = '.sticky-top',
        Zn = 'padding-right',
        ti = 'margin-right'
      class ei {
        constructor() {
          this._element = document.body
        }
        getWidth() {
          const t = document.documentElement.clientWidth
          return Math.abs(window.innerWidth - t)
        }
        hide() {
          const t = this.getWidth()
          this._disableOverFlow(),
            this._setElementAttributes(this._element, Zn, e => e + t),
            this._setElementAttributes(Gn, Zn, e => e + t),
            this._setElementAttributes(Jn, ti, e => e - t)
        }
        reset() {
          this._resetElementAttributes(this._element, 'overflow'),
            this._resetElementAttributes(this._element, Zn),
            this._resetElementAttributes(Gn, Zn),
            this._resetElementAttributes(Jn, ti)
        }
        isOverflowing() {
          return this.getWidth() > 0
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, 'overflow'),
            (this._element.style.overflow = 'hidden')
        }
        _setElementAttributes(t, e, n) {
          const i = this.getWidth()
          this._applyManipulationCallback(t, t => {
            if (t !== this._element && window.innerWidth > t.clientWidth + i)
              return
            this._saveInitialAttribute(t, e)
            const r = window.getComputedStyle(t).getPropertyValue(e)
            t.style.setProperty(e, `${n(Number.parseFloat(r))}px`)
          })
        }
        _saveInitialAttribute(t, e) {
          const n = t.style.getPropertyValue(e)
          n && rn.setDataAttribute(t, e, n)
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, t => {
            const n = rn.getDataAttribute(t, e)
            null !== n
              ? (rn.removeDataAttribute(t, e), t.style.setProperty(e, n))
              : t.style.removeProperty(e)
          })
        }
        _applyManipulationCallback(t, e) {
          if (Ee(t)) e(t)
          else for (const n of hn.find(t, this._element)) e(n)
        }
      }
      const ni = 'show',
        ii = 'mousedown.bs.backdrop',
        ri = {
          className: 'modal-backdrop',
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: 'body',
        },
        oi = {
          className: 'string',
          clickCallback: '(function|null)',
          isAnimated: 'boolean',
          isVisible: 'boolean',
          rootElement: '(element|string)',
        }
      class si extends on {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isAppended = !1),
            (this._element = null)
        }
        static get Default() {
          return ri
        }
        static get DefaultType() {
          return oi
        }
        static get NAME() {
          return 'backdrop'
        }
        show(t) {
          if (!this._config.isVisible) return void Pe(t)
          this._append()
          const e = this._getElement()
          this._config.isAnimated && ke(e),
            e.classList.add(ni),
            this._emulateAnimation(() => {
              Pe(t)
            })
        }
        hide(t) {
          this._config.isVisible
            ? (this._getElement().classList.remove(ni),
              this._emulateAnimation(() => {
                this.dispose(), Pe(t)
              }))
            : Pe(t)
        }
        dispose() {
          this._isAppended &&
            (Ge.off(this._element, ii),
            this._element.remove(),
            (this._isAppended = !1))
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement('div')
            ;(t.className = this._config.className),
              this._config.isAnimated && t.classList.add('fade'),
              (this._element = t)
          }
          return this._element
        }
        _configAfterMerge(t) {
          return (t.rootElement = Ae(t.rootElement)), t
        }
        _append() {
          if (this._isAppended) return
          const t = this._getElement()
          this._config.rootElement.append(t),
            Ge.on(t, ii, () => {
              Pe(this._config.clickCallback)
            }),
            (this._isAppended = !0)
        }
        _emulateAnimation(t) {
          Ne(t, this._getElement(), this._config.isAnimated)
        }
      }
      const ai = '.bs.focustrap',
        li = 'backward',
        ci = { autofocus: !0, trapElement: null },
        ui = { autofocus: 'boolean', trapElement: 'element' }
      class hi extends on {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null)
        }
        static get Default() {
          return ci
        }
        static get DefaultType() {
          return ui
        }
        static get NAME() {
          return 'focustrap'
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            Ge.off(document, ai),
            Ge.on(document, 'focusin.bs.focustrap', t =>
              this._handleFocusin(t)
            ),
            Ge.on(document, 'keydown.tab.bs.focustrap', t =>
              this._handleKeydown(t)
            ),
            (this._isActive = !0))
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), Ge.off(document, ai))
        }
        _handleFocusin(t) {
          const { trapElement: e } = this._config
          if (t.target === document || t.target === e || e.contains(t.target))
            return
          const n = hn.focusableChildren(e)
          0 === n.length
            ? e.focus()
            : this._lastTabNavDirection === li
            ? n[n.length - 1].focus()
            : n[0].focus()
        }
        _handleKeydown(t) {
          'Tab' === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? li : 'forward')
        }
      }
      const di = 'hidden.bs.modal',
        fi = 'show.bs.modal',
        pi = 'modal-open',
        mi = 'show',
        gi = 'modal-static',
        _i = { backdrop: !0, focus: !0, keyboard: !0 },
        vi = {
          backdrop: '(boolean|string)',
          focus: 'boolean',
          keyboard: 'boolean',
        }
      var config = {
        apiKey: "AIzaSyDiOw0sbSMsu9AqnU3LOPTHk-d53BhrsVg",
        authDomain: "learning-javascript-8586a.firebaseapp.com",
        projectId: "learning-javascript-8586a",
        storageBucket: "learning-javascript-8586a.appspot.com",
        messagingSenderId: "955823472458",
        appId: "1:955823472458:web:0180a82a8a14377184cbb3",
        measurementId: "G-29W3CYL3G4"
      };
      firebase.initializeApp(config);
      const db = firebase.firestore();
      class bi extends sn {
        constructor(t, e) {
          super(t, e),
            (this._dialog = hn.findOne('.modal-dialog', this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new ei()),
            this._addEventListeners()
        }
        static get Default() {
          return _i
        }
        static get DefaultType() {
          return vi
        }
        static get NAME() {
          return 'modal'
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          this._isShown ||
            this._isTransitioning ||
            Ge.trigger(this._element, fi, { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(pi),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(t)))
        }
        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (Ge.trigger(this._element, 'hide.bs.modal').defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(mi),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              )))
        }
        dispose() {
          for (const t of [window, this._dialog]) Ge.off(t, '.bs.modal')
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
          this._adjustDialog()
        }
        _initializeBackDrop() {
          return new si({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          })
        }
        _initializeFocusTrap() {
          return new hi({ trapElement: this._element })
        }
        _showElement(t) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            (this._element.scrollTop = 0)
          const e = hn.findOne('.modal-body', this._dialog)
          e && (e.scrollTop = 0),
            ke(this._element),
            this._element.classList.add(mi),
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  Ge.trigger(this._element, 'shown.bs.modal', {
                    relatedTarget: t,
                  })
              },
              this._dialog,
              this._isAnimated()
            )
        }
        _addEventListeners() {
          Ge.on(this._element, 'keydown.dismiss.bs.modal', t => {
            if ('Escape' === t.key)
              return this._config.keyboard
                ? (t.preventDefault(), void this.hide())
                : void this._triggerBackdropTransition()
          }),
            Ge.on(window, 'resize.bs.modal', () => {
              this._isShown && !this._isTransitioning && this._adjustDialog()
            }),
            Ge.on(this._element, 'mousedown.dismiss.bs.modal', t => {
              t.target === t.currentTarget &&
                ('static' !== this._config.backdrop
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition())
            })
        }
        _hideModal() {
          ;(this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(pi),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                Ge.trigger(this._element, di)
            })
        }
        _isAnimated() {
          return this._element.classList.contains('fade')
        }
        _triggerBackdropTransition() {
          if (
            Ge.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented
          )
            return
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._element.style.overflowY
          'hidden' === e ||
            this._element.classList.contains(gi) ||
            (t || (this._element.style.overflowY = 'hidden'),
            this._element.classList.add(gi),
            this._queueCallback(() => {
              this._element.classList.remove(gi),
                this._queueCallback(() => {
                  this._element.style.overflowY = e
                }, this._dialog)
            }, this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            n = e > 0
          if (n && !t) {
            const t = De() ? 'paddingLeft' : 'paddingRight'
            this._element.style[t] = `${e}px`
          }
          if (!n && t) {
            const t = De() ? 'paddingRight' : 'paddingLeft'
            this._element.style[t] = `${e}px`
          }
        }
        _resetAdjustments() {
          ;(this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '')
        }
        static jQueryInterface(t, e) {
          return this.each(function () {
            const n = bi.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`)
              n[t](e)
            }
          })
        }
      }
      Ge.on(
        document,
        'click.bs.modal.data-api',
        '[data-bs-toggle="modal"]',
        function (t) {
          const e = ye(this)
          ;['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
            Ge.one(e, fi, t => {
              t.defaultPrevented ||
                Ge.one(e, di, () => {
                  Te(this) && this.focus()
                })
            })
          const n = hn.findOne('.modal.show')
          n && bi.getInstance(n).hide(), bi.getOrCreateInstance(e).toggle(this)
        }
      ),
        an(bi),
        Me(bi)
      const yi = 'show',
        wi = 'showing',
        Ei = 'hiding',
        Ai = '.offcanvas.show',
        Ti = 'hidePrevented.bs.offcanvas',
        xi = 'hidden.bs.offcanvas',
        Ci = { backdrop: !0, keyboard: !0, scroll: !1 },
        Oi = {
          backdrop: '(boolean|string)',
          keyboard: 'boolean',
          scroll: 'boolean',
        }
      class ki extends sn {
        constructor(t, e) {
          super(t, e),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners()
        }
        static get Default() {
          return Ci
        }
        static get DefaultType() {
          return Oi
        }
        static get NAME() {
          return 'offcanvas'
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
          this._isShown ||
            Ge.trigger(this._element, 'show.bs.offcanvas', { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new ei().hide(),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            this._element.classList.add(wi),
            this._queueCallback(
              () => {
                ;(this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(yi),
                  this._element.classList.remove(wi),
                  Ge.trigger(this._element, 'shown.bs.offcanvas', {
                    relatedTarget: t,
                  })
              },
              this._element,
              !0
            ))
        }
        hide() {
          this._isShown &&
            (Ge.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Ei),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(yi, Ei),
                    this._element.removeAttribute('aria-modal'),
                    this._element.removeAttribute('role'),
                    this._config.scroll || new ei().reset(),
                    Ge.trigger(this._element, xi)
                },
                this._element,
                !0
              )))
        }
        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop)
          return new si({
            className: 'offcanvas-backdrop',
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t
              ? () => {
                  'static' !== this._config.backdrop
                    ? this.hide()
                    : Ge.trigger(this._element, Ti)
                }
              : null,
          })
        }
        _initializeFocusTrap() {
          return new hi({ trapElement: this._element })
        }
        _addEventListeners() {
          Ge.on(this._element, 'keydown.dismiss.bs.offcanvas', t => {
            'Escape' === t.key &&
              (this._config.keyboard
                ? this.hide()
                : Ge.trigger(this._element, Ti))
          })
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ki.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
                throw new TypeError(`No method named "${t}"`)
              e[t](this)
            }
          })
        }
      }
      Ge.on(
        document,
        'click.bs.offcanvas.data-api',
        '[data-bs-toggle="offcanvas"]',
        function (t) {
          const e = ye(this)
          if (
            (['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
            xe(this))
          )
            return
          Ge.one(e, xi, () => {
            Te(this) && this.focus()
          })
          const n = hn.findOne(Ai)
          n && n !== e && ki.getInstance(n).hide(),
            ki.getOrCreateInstance(e).toggle(this)
        }
      ),
        Ge.on(window, 'load.bs.offcanvas.data-api', () => {
          for (const t of hn.find(Ai)) ki.getOrCreateInstance(t).show()
        }),
        Ge.on(window, 'resize.bs.offcanvas', () => {
          for (const t of hn.find(
            '[aria-modal][class*=show][class*=offcanvas-]'
          ))
            'fixed' !== getComputedStyle(t).position &&
              ki.getOrCreateInstance(t).hide()
        }),
        an(ki),
        Me(ki)
      const Li = new Set([
          'background',
          'cite',
          'href',
          'itemtype',
          'longdesc',
          'poster',
          'src',
          'xlink:href',
        ]),
        Si = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Di =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Mi = (t, e) => {
          const n = t.nodeName.toLowerCase()
          return e.includes(n)
            ? !Li.has(n) ||
                Boolean(Si.test(t.nodeValue) || Di.test(t.nodeValue))
            : e.filter(t => t instanceof RegExp).some(t => t.test(n))
        },
        Pi = {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Ni = {
          allowList: Pi,
          content: {},
          extraClass: '',
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: '<div></div>',
        },
        ji = {
          allowList: 'object',
          content: 'object',
          extraClass: '(string|function)',
          html: 'boolean',
          sanitize: 'boolean',
          sanitizeFn: '(null|function)',
          template: 'string',
        },
        Ii = {
          entry: '(string|element|function|null)',
          selector: '(string|element)',
        }
      class Wi extends on {
        constructor(t) {
          super(), (this._config = this._getConfig(t))
        }
        static get Default() {
          return Ni
        }
        static get DefaultType() {
          return ji
        }
        static get NAME() {
          return 'TemplateFactory'
        }
        getContent() {
          return Object.values(this._config.content)
            .map(t => this._resolvePossibleFunction(t))
            .filter(Boolean)
        }
        hasContent() {
          return this.getContent().length > 0
        }
        changeContent(t) {
          return (
            this._checkContent(t),
            (this._config.content = { ...this._config.content, ...t }),
            this
          )
        }
        toHtml() {
          const t = document.createElement('div')
          t.innerHTML = this._maybeSanitize(this._config.template)
          for (const [e, n] of Object.entries(this._config.content))
            this._setContent(t, n, e)
          const e = t.children[0],
            n = this._resolvePossibleFunction(this._config.extraClass)
          return n && e.classList.add(...n.split(' ')), e
        }
        _typeCheckConfig(t) {
          super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
          for (const [e, n] of Object.entries(t))
            super._typeCheckConfig({ selector: e, entry: n }, Ii)
        }
        _setContent(t, e, n) {
          const i = hn.findOne(n, t)
          i &&
            ((e = this._resolvePossibleFunction(e))
              ? Ee(e)
                ? this._putElementInTemplate(Ae(e), i)
                : this._config.html
                ? (i.innerHTML = this._maybeSanitize(e))
                : (i.textContent = e)
              : i.remove())
        }
        _maybeSanitize(t) {
          return this._config.sanitize
            ? (function (t, e, n) {
                if (!t.length) return t
                if (n && 'function' == typeof n) return n(t)
                const i = new window.DOMParser().parseFromString(
                    t,
                    'text/html'
                  ),
                  r = [].concat(...i.body.querySelectorAll('*'))
                for (const t of r) {
                  const n = t.nodeName.toLowerCase()
                  if (!Object.keys(e).includes(n)) {
                    t.remove()
                    continue
                  }
                  const i = [].concat(...t.attributes),
                    r = [].concat(e['*'] || [], e[n] || [])
                  for (const e of i) Mi(e, r) || t.removeAttribute(e.nodeName)
                }
                return i.body.innerHTML
              })(t, this._config.allowList, this._config.sanitizeFn)
            : t
        }
        _resolvePossibleFunction(t) {
          return 'function' == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
          if (this._config.html) return (e.innerHTML = ''), void e.append(t)
          e.textContent = t.textContent
        }
      }
      const Fi = new Set(['sanitize', 'allowList', 'sanitizeFn']),
        Hi = 'fade',
        qi = 'show',
        Bi = '.modal',
        zi = 'hide.bs.modal',
        $i = 'hover',
        Ri = 'focus',
        Xi = {
          AUTO: 'auto',
          TOP: 'top',
          RIGHT: De() ? 'left' : 'right',
          BOTTOM: 'bottom',
          LEFT: De() ? 'right' : 'left',
        },
        Vi = {
          allowList: Pi,
          animation: !0,
          boundary: 'clippingParents',
          container: !1,
          customClass: '',
          delay: 0,
          fallbackPlacements: ['top', 'right', 'bottom', 'left'],
          html: !1,
          offset: [0, 0],
          placement: 'top',
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: '',
          trigger: 'hover focus',
        },
        Yi = {
          allowList: 'object',
          animation: 'boolean',
          boundary: '(string|element)',
          container: '(string|element|boolean)',
          customClass: '(string|function)',
          delay: '(number|object)',
          fallbackPlacements: 'array',
          html: 'boolean',
          offset: '(array|string|function)',
          placement: '(string|function)',
          popperConfig: '(null|object|function)',
          sanitize: 'boolean',
          sanitizeFn: '(null|function)',
          selector: '(string|boolean)',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
        }
      class Qi extends sn {
        constructor(e, n) {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            )
          super(e, n),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = !1),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners()
        }
        static get Default() {
          return Vi
        }
        static get DefaultType() {
          return Yi
        }
        static get NAME() {
          return 'tooltip'
        }
        enable() {
          this._isEnabled = !0
        }
        disable() {
          this._isEnabled = !1
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled
        }
        toggle(t) {
          if (this._isEnabled) {
            if (t) {
              const e = this._initializeOnDelegatedTarget(t)
              return (
                (e._activeTrigger.click = !e._activeTrigger.click),
                void (e._isWithActiveTrigger() ? e._enter() : e._leave())
              )
            }
            this._isShown() ? this._leave() : this._enter()
          }
        }
        dispose() {
          clearTimeout(this._timeout),
            Ge.off(this._element.closest(Bi), zi, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
          if ('none' === this._element.style.display)
            throw new Error('Please use show on visible elements')
          if (!this._isWithContent() || !this._isEnabled) return
          const t = Ge.trigger(
              this._element,
              this.constructor.eventName('show')
            ),
            e = (
              Ce(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element)
          if (t.defaultPrevented || !e) return
          this.tip && (this.tip.remove(), (this.tip = null))
          const n = this._getTipElement()
          this._element.setAttribute('aria-describedby', n.getAttribute('id'))
          const { container: i } = this._config
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (i.append(n),
              Ge.trigger(
                this._element,
                this.constructor.eventName('inserted')
              )),
            this._popper
              ? this._popper.update()
              : (this._popper = this._createPopper(n)),
            n.classList.add(qi),
            'ontouchstart' in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              Ge.on(t, 'mouseover', Oe)
          this._queueCallback(
            () => {
              const t = this._isHovered
              ;(this._isHovered = !1),
                Ge.trigger(this._element, this.constructor.eventName('shown')),
                t && this._leave()
            },
            this.tip,
            this._isAnimated()
          )
        }
        hide() {
          if (!this._isShown()) return
          if (
            Ge.trigger(this._element, this.constructor.eventName('hide'))
              .defaultPrevented
          )
            return
          const t = this._getTipElement()
          if (
            (t.classList.remove(qi), 'ontouchstart' in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              Ge.off(t, 'mouseover', Oe)
          ;(this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = !1),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || t.remove(),
                  this._element.removeAttribute('aria-describedby'),
                  Ge.trigger(
                    this._element,
                    this.constructor.eventName('hidden')
                  ),
                  this._disposePopper())
              },
              this.tip,
              this._isAnimated()
            )
        }
        update() {
          this._popper && this._popper.update()
        }
        _isWithContent() {
          return Boolean(this._getTitle())
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          )
        }
        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml()
          if (!e) return null
          e.classList.remove(Hi, qi),
            e.classList.add(`bs-${this.constructor.NAME}-auto`)
          const n = (t => {
            do {
              t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t))
            return t
          })(this.constructor.NAME).toString()
          return (
            e.setAttribute('id', n),
            this._isAnimated() && e.classList.add(Hi),
            e
          )
        }
        setContent(t) {
          ;(this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(t) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(t)
              : (this._templateFactory = new Wi({
                  ...this._config,
                  content: t,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          )
        }
        _getContentForTemplate() {
          return { '.tooltip-inner': this._getTitle() }
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._config.originalTitle
          )
        }
        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(
            t.delegateTarget,
            this._getDelegateConfig()
          )
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(Hi))
          )
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(qi)
        }
        _createPopper(t) {
          const e =
              'function' == typeof this._config.placement
                ? this._config.placement.call(this, t, this._element)
                : this._config.placement,
            n = Xi[e.toUpperCase()]
          return me(this._element, t, this._getPopperConfig(n))
        }
        _getOffset() {
          const { offset: t } = this._config
          return 'string' == typeof t
            ? t.split(',').map(t => Number.parseInt(t, 10))
            : 'function' == typeof t
            ? e => t(e, this._element)
            : t
        }
        _resolvePossibleFunction(t) {
          return 'function' == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: 'offset', options: { offset: this._getOffset() } },
              {
                name: 'preventOverflow',
                options: { boundary: this._config.boundary },
              },
              {
                name: 'arrow',
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: 'preSetPlacement',
                enabled: !0,
                phase: 'beforeMain',
                fn: t => {
                  this._getTipElement().setAttribute(
                    'data-popper-placement',
                    t.state.placement
                  )
                },
              },
            ],
          }
          return {
            ...e,
            ...('function' == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          }
        }
        _setListeners() {
          const t = this._config.trigger.split(' ')
          for (const e of t)
            if ('click' === e)
              Ge.on(
                this._element,
                this.constructor.eventName('click'),
                this._config.selector,
                t => this.toggle(t)
              )
            else if ('manual' !== e) {
              const t =
                  e === $i
                    ? this.constructor.eventName('mouseenter')
                    : this.constructor.eventName('focusin'),
                n =
                  e === $i
                    ? this.constructor.eventName('mouseleave')
                    : this.constructor.eventName('focusout')
              Ge.on(this._element, t, this._config.selector, t => {
                const e = this._initializeOnDelegatedTarget(t)
                ;(e._activeTrigger['focusin' === t.type ? Ri : $i] = !0),
                  e._enter()
              }),
                Ge.on(this._element, n, this._config.selector, t => {
                  const e = this._initializeOnDelegatedTarget(t)
                  ;(e._activeTrigger['focusout' === t.type ? Ri : $i] =
                    e._element.contains(t.relatedTarget)),
                    e._leave()
                })
            }
          ;(this._hideModalHandler = () => {
            this._element && this.hide()
          }),
            Ge.on(this._element.closest(Bi), zi, this._hideModalHandler),
            this._config.selector
              ? (this._config = {
                  ...this._config,
                  trigger: 'manual',
                  selector: '',
                })
              : this._fixTitle()
        }
        _fixTitle() {
          const t = this._config.originalTitle
          t &&
            (this._element.getAttribute('aria-label') ||
              this._element.textContent.trim() ||
              this._element.setAttribute('aria-label', t),
            this._element.removeAttribute('title'))
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show()
              }, this._config.delay.show))
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide()
            }, this._config.delay.hide))
        }
        _setTimeout(t, e) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(t, e))
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
          const e = rn.getDataAttributes(this._element)
          for (const t of Object.keys(e)) Fi.has(t) && delete e[t]
          return (
            (t = { ...e, ...('object' == typeof t && t ? t : {}) }),
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          )
        }
        _configAfterMerge(t) {
          return (
            (t.container =
              !1 === t.container ? document.body : Ae(t.container)),
            'number' == typeof t.delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            (t.originalTitle = this._element.getAttribute('title') || ''),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            t
          )
        }
        _getDelegateConfig() {
          const t = {}
          for (const e in this._config)
            this.constructor.Default[e] !== this._config[e] &&
              (t[e] = this._config[e])
          return t
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null))
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Qi.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
              e[t]()
            }
          })
        }
      }
      Me(Qi)
      const Ui = {
          ...Qi.Default,
          content: '',
          offset: [0, 8],
          placement: 'right',
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: 'click',
        },
        Ki = { ...Qi.DefaultType, content: '(null|string|element|function)' }
      class Gi extends Qi {
        static get Default() {
          return Ui
        }
        static get DefaultType() {
          return Ki
        }
        static get NAME() {
          return 'popover'
        }
        _isWithContent() {
          return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
          return {
            '.popover-header': this._getTitle(),
            '.popover-body': this._getContent(),
          }
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Gi.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
              e[t]()
            }
          })
        }
      }
      Me(Gi)
      const Ji = 'click.bs.scrollspy',
        Zi = 'active',
        tr = '[href]',
        er = {
          offset: null,
          rootMargin: '0px 0px -25%',
          smoothScroll: !1,
          target: null,
        },
        nr = {
          offset: '(number|null)',
          rootMargin: 'string',
          smoothScroll: 'boolean',
          target: 'element',
        }
      class ir extends sn {
        constructor(t, e) {
          super(t, e),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              'visible' === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh()
        }
        static get Default() {
          return er
        }
        static get DefaultType() {
          return nr
        }
        static get NAME() {
          return 'scrollspy'
        }
        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver())
          for (const t of this._observableSections.values())
            this._observer.observe(t)
        }
        dispose() {
          this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
          return (t.target = Ae(t.target) || document.body), t
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (Ge.off(this._config.target, Ji),
            Ge.on(this._config.target, Ji, tr, t => {
              const e = this._observableSections.get(t.target.hash)
              if (e) {
                t.preventDefault()
                const n = this._rootElement || window,
                  i = e.offsetTop - this._element.offsetTop
                if (n.scrollTo)
                  return void n.scrollTo({ top: i, behavior: 'smooth' })
                n.scrollTop = i
              }
            }))
        }
        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: [0.1, 0.5, 1],
            rootMargin: this._getRootMargin(),
          }
          return new IntersectionObserver(t => this._observerCallback(t), t)
        }
        _observerCallback(t) {
          const e = t => this._targetLinks.get(`#${t.target.id}`),
            n = t => {
              ;(this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                this._process(e(t))
            },
            i = (this._rootElement || document.documentElement).scrollTop,
            r = i >= this._previousScrollData.parentScrollTop
          this._previousScrollData.parentScrollTop = i
          for (const o of t) {
            if (!o.isIntersecting) {
              ;(this._activeTarget = null), this._clearActiveClass(e(o))
              continue
            }
            const t =
              o.target.offsetTop >= this._previousScrollData.visibleEntryTop
            if (r && t) {
              if ((n(o), !i)) return
            } else r || t || n(o)
          }
        }
        _getRootMargin() {
          return this._config.offset
            ? `${this._config.offset}px 0px -30%`
            : this._config.rootMargin
        }
        _initializeTargetsAndObservables() {
          ;(this._targetLinks = new Map()),
            (this._observableSections = new Map())
          const t = hn.find(tr, this._config.target)
          for (const e of t) {
            if (!e.hash || xe(e)) continue
            const t = hn.findOne(e.hash, this._element)
            Te(t) &&
              (this._targetLinks.set(e.hash, e),
              this._observableSections.set(e.hash, t))
          }
        }
        _process(t) {
          this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = t),
            t.classList.add(Zi),
            this._activateParents(t),
            Ge.trigger(this._element, 'activate.bs.scrollspy', {
              relatedTarget: t,
            }))
        }
        _activateParents(t) {
          if (t.classList.contains('dropdown-item'))
            hn.findOne(
              '.dropdown-toggle',
              t.closest('.dropdown')
            ).classList.add(Zi)
          else
            for (const e of hn.parents(t, '.nav, .list-group'))
              for (const t of hn.prev(
                e,
                '.nav-link, .nav-item > .nav-link, .list-group-item'
              ))
                t.classList.add(Zi)
        }
        _clearActiveClass(t) {
          t.classList.remove(Zi)
          const e = hn.find('[href].active', t)
          for (const t of e) t.classList.remove(Zi)
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ir.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
                throw new TypeError(`No method named "${t}"`)
              e[t]()
            }
          })
        }
      }
      Ge.on(window, 'load.bs.scrollspy.data-api', () => {
        for (const t of hn.find('[data-bs-spy="scroll"]'))
          ir.getOrCreateInstance(t)
      }),
        Me(ir)
      const rr = 'ArrowLeft',
        or = 'ArrowRight',
        sr = 'ArrowUp',
        ar = 'ArrowDown',
        lr = 'active',
        cr = 'fade',
        ur = 'show',
        hr =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        dr = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${hr}`
      class fr extends sn {
        constructor(t) {
          super(t),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              Ge.on(this._element, 'keydown.bs.tab', t => this._keydown(t)))
        }
        static get NAME() {
          return 'tab'
        }
        show() {
          const t = this._element
          if (this._elemIsActive(t)) return
          const e = this._getActiveElem(),
            n = e ? Ge.trigger(e, 'hide.bs.tab', { relatedTarget: t }) : null
          Ge.trigger(t, 'show.bs.tab', { relatedTarget: e }).defaultPrevented ||
            (n && n.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
          t &&
            (t.classList.add(lr),
            this._activate(ye(t)),
            this._queueCallback(
              () => {
                'tab' === t.getAttribute('role')
                  ? (t.focus(),
                    t.removeAttribute('tabindex'),
                    t.setAttribute('aria-selected', !0),
                    this._toggleDropDown(t, !0),
                    Ge.trigger(t, 'shown.bs.tab', { relatedTarget: e }))
                  : t.classList.add(ur)
              },
              t,
              t.classList.contains(cr)
            ))
        }
        _deactivate(t, e) {
          t &&
            (t.classList.remove(lr),
            t.blur(),
            this._deactivate(ye(t)),
            this._queueCallback(
              () => {
                'tab' === t.getAttribute('role')
                  ? (t.setAttribute('aria-selected', !1),
                    t.setAttribute('tabindex', '-1'),
                    this._toggleDropDown(t, !1),
                    Ge.trigger(t, 'hidden.bs.tab', { relatedTarget: e }))
                  : t.classList.remove(ur)
              },
              t,
              t.classList.contains(cr)
            ))
        }
        _keydown(t) {
          if (![rr, or, sr, ar].includes(t.key)) return
          t.stopPropagation(), t.preventDefault()
          const e = [or, ar].includes(t.key),
            n = je(
              this._getChildren().filter(t => !xe(t)),
              t.target,
              e,
              !0
            )
          n && fr.getOrCreateInstance(n).show()
        }
        _getChildren() {
          return hn.find(dr, this._parent)
        }
        _getActiveElem() {
          return this._getChildren().find(t => this._elemIsActive(t)) || null
        }
        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, 'role', 'tablist')
          for (const t of e) this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t)
          const e = this._elemIsActive(t),
            n = this._getOuterElement(t)
          t.setAttribute('aria-selected', e),
            n !== t && this._setAttributeIfNotExists(n, 'role', 'presentation'),
            e || t.setAttribute('tabindex', '-1'),
            this._setAttributeIfNotExists(t, 'role', 'tab'),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
          const e = ye(t)
          e &&
            (this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
            t.id &&
              this._setAttributeIfNotExists(e, 'aria-labelledby', `#${t.id}`))
        }
        _toggleDropDown(t, e) {
          const n = this._getOuterElement(t)
          if (!n.classList.contains('dropdown')) return
          const i = (t, i) => {
            const r = hn.findOne(t, n)
            r && r.classList.toggle(i, e)
          }
          i('.dropdown-toggle', lr),
            i('.dropdown-menu', ur),
            i('.dropdown-item', lr),
            n.setAttribute('aria-expanded', e)
        }
        _setAttributeIfNotExists(t, e, n) {
          t.hasAttribute(e) || t.setAttribute(e, n)
        }
        _elemIsActive(t) {
          return t.classList.contains(lr)
        }
        _getInnerElement(t) {
          return t.matches(dr) ? t : hn.findOne(dr, t)
        }
        _getOuterElement(t) {
          return t.closest('.nav-item, .list-group-item') || t
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = fr.getOrCreateInstance(this)
            if ('string' == typeof t) {
              if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
                throw new TypeError(`No method named "${t}"`)
              e[t]()
            }
          })
        }
      }
      Ge.on(document, 'click.bs.tab', hr, function (t) {
        ;['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
          xe(this) || fr.getOrCreateInstance(this).show()
      }),
        Ge.on(window, 'load.bs.tab', () => {
          for (const t of hn.find(
            '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
          ))
            fr.getOrCreateInstance(t)
        }),
        Me(fr)
      const pr = 'hide',
        mr = 'show',
        gr = 'showing',
        _r = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
        vr = { animation: !0, autohide: !0, delay: 5e3 }
      class br extends sn {
        constructor(t, e) {
          super(t, e),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners()
        }
        static get Default() {
          return vr
        }
        static get DefaultType() {
          return _r
        }
        static get NAME() {
          return 'toast'
        }
        show() {
          Ge.trigger(this._element, 'show.bs.toast').defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add('fade'),
            this._element.classList.remove(pr),
            ke(this._element),
            this._element.classList.add(mr, gr),
            this._queueCallback(
              () => {
                this._element.classList.remove(gr),
                  Ge.trigger(this._element, 'shown.bs.toast'),
                  this._maybeScheduleHide()
              },
              this._element,
              this._config.animation
            ))
        }
        hide() {
          this.isShown() &&
            (Ge.trigger(this._element, 'hide.bs.toast').defaultPrevented ||
              (this._element.classList.add(gr),
              this._queueCallback(
                () => {
                  this._element.classList.add(pr),
                    this._element.classList.remove(gr, mr),
                    Ge.trigger(this._element, 'hidden.bs.toast')
                },
                this._element,
                this._config.animation
              )))
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(mr),
            super.dispose()
        }
        isShown() {
          return this._element.classList.contains(mr)
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide()
              }, this._config.delay)))
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case 'mouseover':
            case 'mouseout':
              this._hasMouseInteraction = e
              break
            case 'focusin':
            case 'focusout':
              this._hasKeyboardInteraction = e
          }
          if (e) return void this._clearTimeout()
          const n = t.relatedTarget
          this._element === n ||
            this._element.contains(n) ||
            this._maybeScheduleHide()
        }
        _setListeners() {
          Ge.on(this._element, 'mouseover.bs.toast', t =>
            this._onInteraction(t, !0)
          ),
            Ge.on(this._element, 'mouseout.bs.toast', t =>
              this._onInteraction(t, !1)
            ),
            Ge.on(this._element, 'focusin.bs.toast', t =>
              this._onInteraction(t, !0)
            ),
            Ge.on(this._element, 'focusout.bs.toast', t =>
              this._onInteraction(t, !1)
            )
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null)
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = br.getOrCreateInstance(this, t)
            if ('string' == typeof t) {
              if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`)
              e[t](this)
            }
          })
        }
      }
      an(br), Me(br)
      var yr = n(379),
        wr = n.n(yr),
        Er = n(795),
        Ar = n.n(Er),
        Tr = n(569),
        xr = n.n(Tr),
        Cr = n(565),
        Or = n.n(Cr),
        kr = n(216),
        Lr = n.n(kr),
        Sr = n(589),
        Dr = n.n(Sr),
        Mr = n(689),
        Pr = {}
      ;(Pr.styleTagTransform = Dr()),
        (Pr.setAttributes = Or()),
        (Pr.insert = xr().bind(null, 'head')),
        (Pr.domAPI = Ar()),
        (Pr.insertStyleElement = Lr()),
        wr()(Mr.Z, Pr),
        Mr.Z && Mr.Z.locals && Mr.Z.locals
      var Nr = document.querySelector('.chat-list'),
        jr = document.querySelector('.new-chat'),
        Ir = document.querySelector('.new-name'),
        Wr = document.querySelector('.update-msg'),
        Fr = document.querySelector('.chat-rooms')
      jr.addEventListener('submit', function (t) {
        t.preventDefault()
        var e = jr.message.value.trim()
        jr.reset(),
          Hr.addChat(e).catch(function (t) {
            return console.log(t)
          })
      }),
        Ir.addEventListener('submit', function (t) {
          t.preventDefault()
          var e = Ir.name.value.trim()
          Hr.updateName(e),
            Ir.reset(),
            (Wr.innerText = 'Username updated to '.concat(e, '!')),
            setTimeout(function () {
              Wr.innerText = ''
            }, 3e3)
        })
      var Hr = new a(
          'general',
          localStorage.username ? localStorage.username : 'anon'
        ),
        qr = new z(Nr)
      Hr.getChats(function (t) {
        qr.render(t)
      }),
        Fr.addEventListener('click', function (t) {
          var e = t.target.innerText.toLowerCase()
          'LABEL' === t.target.tagName &&
            Hr.room !== e &&
            (Hr.updateRoom(e),
            qr.clear(),
            Hr.getChats(function (t) {
              return qr.render(t)
            }))
        })
    })()
})()
