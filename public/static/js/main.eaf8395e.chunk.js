/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  16(e, t, n) {},
  17(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const c = n.n(o); const s = n(7); const r = n.n(s); const i = (n(16), n(10)); const u = n(4); const l = n(2); const p = `${n.p}static/media/logo.a307e1c4.svg`; const d = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: p, alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f' }) }); }; const m = c.a.createContext(); const j = function (e) {
      const t = e.card; const n = e.onCardClick; const o = e.onCardLike; const s = e.onCardDelete; const r = c.a.useContext(m); const i = t.likes.some(((e) => e._id === r._id)); const u = 'button button_type_like-card '.concat(i ? 'button_type_like-card-active' : ''); const l = t.owner._id !== r._id; const p = 'button button_type_trash-card '.concat(l ? 'button_type_trash-card-hidden' : ''); return Object(a.jsxs)('li', {
        className: 'card__item',
        children: [Object(a.jsx)('button', { type: 'button', className: p, onClick() { s(t); } }), Object(a.jsx)('img', {
          className: 'card__image', src: t.link, alt: t.name, onClick() { n(t); },
        }), Object(a.jsxs)('div', { className: 'card__description', children: [Object(a.jsx)('h2', { className: 'card__title', children: t.name }), Object(a.jsxs)('div', { children: [Object(a.jsx)('button', { type: 'button', className: u, onClick() { o(t); } }), Object(a.jsx)('div', { className: 'card__counter-likes', children: t.likes.length })] })] })],
      });
    }; const b = function (e) {
      const t = e.cards; const n = e.onEditAvatar; const o = e.onEditProfile; const s = e.onAddPlace; const r = e.onCardClick; const i = e.onCardLike; const u = e.onCardDelete; const l = c.a.useContext(m); return Object(a.jsxs)('main', {
        className: 'content',
        children: [Object(a.jsxs)('section', { className: 'profile', children: [Object(a.jsx)('div', { className: 'profile__avatar-container', onClick: n, children: Object(a.jsx)('img', { className: 'profile__avatar', src: l.avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440' }) }), Object(a.jsxs)('div', { className: 'profile__content', children: [Object(a.jsxs)('div', { className: 'profile__info', children: [Object(a.jsx)('h1', { className: 'profile__name', children: l.name }), Object(a.jsx)('p', { className: 'profile__profession', children: l.about })] }), Object(a.jsx)('button', { type: 'button', className: 'button button_type_edit-profile', onClick: o })] }), Object(a.jsx)('button', { type: 'button', className: 'button button_type_add-gallery', onClick: s })] }), Object(a.jsx)('section', {
          className: 'gallery',
          children: Object(a.jsx)('ul', {
            className: 'cards',
            children: t.map(((e) => Object(a.jsx)(j, {
              card: e, onCardClick: r, onCardLike: i, onCardDelete: u,
            }, e._id))),
          }),
        })],
      });
    }; const h = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__content', children: '\xa9 '.concat((new Date()).getFullYear(), ' Mesto Russia') }) }); }; const _ = function (e) {
      const t = e.card; const n = e.onClose; const o = e.onClick; return Object(a.jsx)('section', {
        className: 'popup popup_type_card '.concat(t && 'popup_is-opened'),
        onClick: o,
        children: Object(a.jsxs)('div', {
          className: 'popup__container-card',
          children: [Object(a.jsx)('button', {
            type: 'button', id: 'close-card', className: 'button button_type_close-popup button_type_close-popup-card', onClick: n,
          }), Object(a.jsx)('img', { className: 'popup__image-card', src: t ? t.link : '', alt: ''.concat(t ? t.name : '') }), Object(a.jsx)('h2', { className: 'popup__title popup__title_type_card', children: t ? t.name : '' })],
        }),
      });
    }; const f = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onClick; const c = e.onSubmit; const s = e.title; const r = e.captionButton; const i = e.popupName; const u = e.formName; const l = e.children; return Object(a.jsx)('section', {
        className: 'popup popup_type_'.concat(i, ' ').concat(t ? 'popup_is-opened' : ''),
        onClick: o,
        children: Object(a.jsxs)('form', {
          className: 'popup__form popup__form_type_'.concat(u),
          onSubmit: c,
          children: [Object(a.jsx)('button', { type: 'button', className: 'button button_type_close-popup button_type_close-popup-'.concat(i), onClick: n }), Object(a.jsx)('h2', { className: 'popup__title', children: s }), l, Object(a.jsx)('button', {
            type: 'submit', value: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c', className: 'button button_type_save-popup button_type_save-popup-'.concat(i), children: r,
          })],
        }),
      });
    }; const O = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onClick; const s = e.onUpdateUser; const r = c.a.useContext(m); const i = c.a.useState(''); const u = Object(l.a)(i, 2); const p = u[0]; const d = u[1]; const j = c.a.useState(''); const b = Object(l.a)(j, 2); const h = b[0]; const _ = b[1]; return c.a.useEffect((() => { t && (d(r.name), _(r.about)); }), [r, t]), Object(a.jsxs)(f, {
        isOpen: t,
        onClose: n,
        onClick: o,
        onSubmit(e) { e.preventDefault(), s({ name: p, about: h }); },
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        captionButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        popupName: 'profile',
        formName: 'profile',
        children: [Object(a.jsx)('input', {
          className: 'popup__subtitle popup__subtitle_type_profile', type: 'text', name: 'name', id: 'name', placeholder: '\u0418\u043c\u044f', minLength: '2', maxLength: '40', onChange(e) { d(e.target.value); }, value: p || '', required: !0,
        }), Object(a.jsx)('span', { id: 'name-error', className: 'error' }), Object(a.jsx)('input', {
          className: 'popup__subtitle popup__subtitle_type_profile', type: 'text', name: 'profession', id: 'profession', placeholder: '\u041e \u0441\u0435\u0431\u0435', minLength: '2', maxLength: '200', onChange(e) { _(e.target.value); }, value: h || '', required: !0,
        }), Object(a.jsx)('span', { id: 'profession-error', className: 'error' })],
      });
    }; const v = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onClick; const s = e.onAddPlace; const r = c.a.useState(''); const i = Object(l.a)(r, 2); const u = i[0]; const p = i[1]; const d = c.a.useState(''); const m = Object(l.a)(d, 2); const j = m[0]; const b = m[1]; return c.a.useEffect((() => { t && (p(''), b('')); }), [t]), Object(a.jsxs)(f, {
        isOpen: t,
        onClose: n,
        onClick: o,
        onSubmit(e) { e.preventDefault(), s({ name: u, link: j }); },
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        captionButton: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        popupName: 'gallery',
        formName: 'gallery',
        children: [Object(a.jsx)('input', {
          className: 'popup__subtitle popup__subtitle_type_gallery', type: 'text', name: 'name_card', id: 'name-card', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', minLength: '2', maxLength: '30', onChange(e) { p(e.target.value); }, value: u, required: !0,
        }), Object(a.jsx)('span', { id: 'name-card-error', className: 'error' }), Object(a.jsx)('input', {
          className: 'popup__subtitle popup__subtitle_type_gallery', type: 'url', name: 'link_card', id: 'link-card', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', onChange(e) { b(e.target.value); }, value: j, required: !0,
        }), Object(a.jsx)('span', { id: 'link-card-error', className: 'error' })],
      });
    }; const C = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onClick; const s = e.onUpdateAvatar; const r = c.a.useRef(); return c.a.useEffect((() => { t && (r.current.value = ''); }), [t]), Object(a.jsxs)(f, {
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), s({ avatar: r.current.value }); },
        onClick: o,
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        captionButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        popupName: 'avatar',
        formName: 'avatar',
        children: [Object(a.jsx)('input', {
          className: 'popup__subtitle popup__subtitle_type_avatar', type: 'url', name: 'link_avatar', id: 'link-avatar', ref: r, placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440', required: !0,
        }), Object(a.jsx)('span', { id: 'avatar-error', className: 'error' })],
      });
    }; const x = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.onClick; const c = e.onCardDelete; const s = e.card; return Object(a.jsx)(f, {
        isOpen: t, onClose: n, onClick: o, onSubmit(e) { e.preventDefault(), c(s); }, title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', captionButton: '\u0414\u0430', popupName: 'confirm', formName: 'confirm',
      });
    }; const k = n(8); const N = n(9); const y = new (function () { function e(t) { Object(k.a)(this, e), this._url = t.url, this._headers = t.headers; } return Object(N.a)(e, [{ key: 'statusResponse', value(e) { return e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)); } }, { key: 'getUserData', value() { return fetch(''.concat(this._url, '/users/me'), { method: 'GET', headers: this._headers }).then(this.statusResponse); } }, { key: 'getInitialCards', value() { return fetch(''.concat(this._url, '/cards'), { method: 'GET', headers: this._headers }).then(this.statusResponse); } }, { key: 'updateUserData', value(e) { return fetch(''.concat(this._url, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: e.name, about: e.profession }) }).then(this.statusResponse); } }, { key: 'addNewPlace', value(e) { return fetch(''.concat(this._url, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: e.name, link: e.link }) }).then(this.statusResponse); } }, { key: 'deleteCard', value(e) { return fetch(''.concat(this._url, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(this.statusResponse); } }, { key: 'putLike', value(e, t) { return fetch(''.concat(this._url, '/cards/likes/').concat(e), { method: t ? 'DELETE' : 'PUT', headers: this._headers }).then(this.statusResponse); } }, { key: 'updateUserAvatar', value(e) { return fetch(''.concat(this._url, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: e.avatar }) }).then(this.statusResponse); } }]), e; }())({ url: 'https://mesto.nomoreparties.co/v1/cohort-18', headers: { authorization: 'ee7d3d7a-088a-4faf-a6a4-125e05d2a819', 'Content-Type': 'application/json' } }); const g = function () {
      const e = c.a.useState(!1); const t = Object(l.a)(e, 2); const n = t[0]; const o = t[1]; const s = c.a.useState(!1); const r = Object(l.a)(s, 2); const p = r[0]; const j = r[1]; const f = c.a.useState(!1); const k = Object(l.a)(f, 2); const N = k[0]; const g = k[1]; const S = c.a.useState(!1); const E = Object(l.a)(S, 2); const L = E[0]; const D = E[1]; const P = c.a.useState(!1); const w = Object(l.a)(P, 2); const U = w[0]; const A = w[1]; const T = c.a.useState(null); const B = Object(l.a)(T, 2); const R = B[0]; const q = B[1]; const F = c.a.useState({}); const J = Object(l.a)(F, 2); const I = J[0]; const G = J[1]; const H = c.a.useState([]); const M = Object(l.a)(H, 2); const z = M[0]; const Y = M[1]; const K = c.a.useState(null); const Q = Object(l.a)(K, 2); const V = Q[0]; const W = Q[1]; function X(e) { e.target.classList.contains('popup_is-opened') && $(); } function Z(e) { e.key === 'Escape' && $(); } function $() { o(!1), j(!1), g(!1), D(!1), A(!1), q(null), document.removeEventListener('keydown', Z); } return c.a.useEffect((() => { Promise.all([y.getUserData(), y.getInitialCards()]).then(((e) => { const t = Object(l.a)(e, 2); const n = t[0]; const a = t[1]; G(n), Y(a); })).catch(((e) => console.error(e))); }), []), Object(a.jsx)(m.Provider, {
        value: I,
        children: Object(a.jsxs)('div', {
          className: 'page',
          children: [Object(a.jsx)(d, {}), Object(a.jsx)(b, {
            onEditProfile() { o(!0), document.addEventListener('keydown', Z); }, onAddPlace() { j(!0), document.addEventListener('keydown', Z); }, onEditAvatar() { g(!0), document.addEventListener('keydown', Z); }, onCardClick(e) { q(e), D(!0), document.addEventListener('keydown', Z); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === I._id)); y.putLike(e._id, t).then(((t) => { const n = z.map(((n) => (n._id === e._id ? t : n))); Y(n); })).catch(((e) => console.error(e))); }, onCardDelete(e) { A(!0), W(e), document.addEventListener('keydown', Z); }, cards: z,
          }), Object(a.jsx)(h, {}), Object(a.jsx)(O, {
            isOpen: n, onClose: $, onUpdateUser(e) { y.getUserData(e).then((() => { G(Object(u.a)(Object(u.a)({}, I), e)), $(); })).catch(((e) => console.error(e))); }, onClick: X, title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c', captionButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c', popupName: 'profile', formName: 'profile',
          }), Object(a.jsx)(v, {
            isOpen: p, onClose: $, onAddPlace(e) { y.addNewPlace(e).then(((e) => { Y([e].concat(Object(i.a)(z))), $(); })).catch(((e) => console.error(e))); }, onClick: X, title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e', captionButton: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c', popupName: 'gallery', formName: 'gallery',
          }), Object(a.jsx)(C, {
            isOpen: N, onClose: $, onUpdateAvatar(e) { y.updateUserAvatar(e).then((() => { G(Object(u.a)(Object(u.a)({}, I), e)), $(); })).catch(((e) => console.error(e))); }, onClick: X, title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440', captionButton: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c', popupName: 'avatar', formName: 'avatar',
          }), Object(a.jsx)(_, {
            card: R, isOpen: L, onClose: $, onClick: X,
          }), Object(a.jsx)(x, {
            isOpen: U, onClose: $, onCardDelete(e) { y.deleteCard(e._id).then((() => { const t = z.filter(((t) => t._id !== e._id)); Y(t), W({}), $(); })).catch(((e) => console.error(e))); }, onClick: X, card: V,
          })],
        }),
      });
    }; const S = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 18)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const c = t.getLCP; const s = t.getTTFB; n(e), a(e), o(e), c(e), s(e); })); }; r.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(g, {}) }), document.getElementById('root')), S();
  },
}, [[17, 1, 2]]]);
// # sourceMappingURL=main.eaf8395e.chunk.js.map
