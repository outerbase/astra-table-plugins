var Astra=function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,n=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1]),t[0]);return new o(n,t,r)},s=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,{is:l,defineProperty:c,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:f}=Object,p=globalThis,g=p.trustedTypes,b=g?g.emptyScript:"",v=p.reactiveElementPolyfillSupport,y=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},w=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:i}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const o=r?.call(this);i.call(this,e),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(n)t.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of r){const r=document.createElement("style"),i=e.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:m).toAttribute(e,n.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=n.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??w)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[y("elementProperties")]=new Map,_[y("finalized")]=new Map,v?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const k=globalThis,$=k.trustedTypes,E=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,C=`<${A}>`,T=document,D=()=>T.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,L=t=>R(t)||"function"==typeof t?.[Symbol.iterator],O="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,I=/>/g,j=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,F=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),V=F(1),q=F(2),Y=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),X=new WeakMap,K=T.createTreeWalker(T,129);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",a=z;for(let e=0;e<n;e++){const n=t[e];let s,l,c=-1,u=0;for(;u<n.length&&(a.lastIndex=u,l=a.exec(n),null!==l);)u=a.lastIndex,a===z?"!--"===l[1]?a=P:void 0!==l[1]?a=I:void 0!==l[2]?(H.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=i??z,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?j:'"'===l[3]?B:U):a===B||a===U?a=j:a===P||a===I?a=z:(a=j,i=void 0);const d=a===j&&t[e+1].startsWith("/>")?" ":"";o+=a===z?n+C:c>=0?(r.push(s),n.slice(0,c)+M+n.slice(c)+S+d):n+S+(-2===c?e:d)}return[Z(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),r]};class J{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const a=t.length-1,s=this.parts,[l,c]=G(t,e);if(this.el=J.createElement(l,n),K.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=K.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(M)){const e=c[o++],n=r.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:a[2],strings:n,ctor:"."===a[1]?rt:"?"===a[1]?ot:"@"===a[1]?at:nt}),r.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:i}),r.removeAttribute(t));if(H.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],D()),K.nextNode(),s.push({type:2,index:++i});r.append(t[e],D())}}}else if(8===r.nodeType)if(r.data===A)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)s.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const n=T.createElement("template");return n.innerHTML=t,n}}function Q(t,e,n=t,r){if(e===Y)return e;let i=void 0!==r?n._$Co?.[r]:n._$Cl;const o=N(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,n,r)),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(e=Q(t,i._$AS(t,e.values),i,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);K.currentNode=r;let i=K.nextNode(),o=0,a=0,s=n[0];for(;void 0!==s;){if(o===s.index){let e;2===s.type?e=new et(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new st(i,this,t)),this._$AV.push(e),s=n[++a]}o!==s?.index&&(i=K.nextNode(),o++)}return K.currentNode=T,r}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}let et=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),N(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):L(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=J.createElement(Z(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new J(t)),e}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new t(this.S(D()),this.S(D()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=W}_$AI(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=Q(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==Y,o&&(this._$AH=t);else{const r=t;let a,s;for(t=i[0],a=0;a<i.length-1;a++)s=Q(this,r[n+a],e,a),s===Y&&(s=this._$AH[a]),o||=!N(s)||s!==this._$AH[a],s===W?t=W:t!==W&&(t+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let rt=class extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}};class ot extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class at extends nt{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===Y)return;const n=this._$AH,r=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==W&&(n===W||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const lt={P:M,A:S,C:A,M:1,L:G,R:tt,D:L,V:Q,I:et,H:nt,N:ot,U:at,B:rt,F:st},ct=k.litHtmlPolyfillSupport;ct?.(J,et),(k.litHtmlVersions??=[]).push("3.1.3");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
let ut=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const r=n?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=n?.renderBefore??null;r._$litPart$=i=new et(e.insertBefore(D(),t),t,void 0,n??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};ut._$litElement$=!0,ut.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ut});const dt=globalThis.litElementPolyfillSupport;dt?.({LitElement:ut}),(globalThis.litElementVersions??=[]).push("4.0.5");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ht=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,ft={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w},pt=(t=ft,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),"accessor"===r){const{name:r}=n;return{set(n){const i=e.get.call(this);e.set.call(this,n),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];e.call(this,n),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function gt(t){return(e,n)=>"object"==typeof n?pt(t,e,n):((t,e,n)=>{const r=e.hasOwnProperty(n);return e.constructor.createProperty(n,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function bt(t){return gt({...t,state:!0,attribute:!1})}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var vt,yt,mt,wt=a`
  :host {
    font-size: var(--astra-font-size, 14px);

    --astra-font-family: 'Inter', sans-serif;
    --astra-accent: var(--astra-neutral-400, lime);

    --astra-neutral-50: #fafafa;
    --astra-neutral-100: #f5f5f5;
    --astra-neutral-200: #e5e5e5;
    --astra-neutral-300: #d4d4d4;
    --astra-neutral-400: #a3a3a3;
    --astra-neutral-500: #737373;
    --astra-neutral-600: #525252;
    --astra-neutral-700: #404040;
    --astra-neutral-800: #262626;
    --astra-neutral-900: #171717;
    --astra-neutral-950: #0a0a0a;

    --astra-red-400: #f87171;
    --astra-red-600: #dc2626;
    --astra-red-700: #b91c1c;
    --astra-red-800: #991b1b;
    --astra-red-900: #7f1d1d;
  }
`,xt=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};!function(t){t.primary="primary",t.secondary="secondary",t.transparent="transparent"}(vt||(vt={})),function(t){t.base="base",t.small="small",t.compact="compact"}(yt||(yt={})),function(t){t.default="default",t.square="square",t.circle="circle"}(mt||(mt={}));let _t=class extends ut{constructor(){super(),this.disabled=!1,this.size=yt.base,this.shape=mt.default,this.variant=vt.primary,this.onKeyDown=this.onKeyDown.bind(this)}onKeyDown(t){const{code:e}=t;this.disabled||"Space"!==e&&"Enter"!==e||(t.preventDefault(),this.click())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeyDown)}render(){return V`
      <button tabindex="0" class="${`variant-${this.variant} size-${this.size} shape-${this.shape}`}" ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `}};_t.styles=[wt,a`
      /* Base button styles */
      button {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        font-weight: 500;
        font-family: var(--astra-font-family);
        line-height: 20px;
        border-radius: 6px;
        user-select: none;
        -webkit-user-select: none;
        outline: none; /* Avoid default focus styles */
      }

      /* Enhanced focus styles for keyboard navigation */
      button:focus-visible {
        box-shadow: 0 0 0 3px var(--astra-accent, lime); /* Custom focus indicator */
      }

      /* Handling active and disabled states */
      button:active {
        opacity: 0.75;
      }

      button[disabled] {
        opacity: 0.4;
        cursor: default;
      }

      /* Styling for button shapes */
      .shape-default {
        padding: 8px 10px;
        font-size: 14px;
      }

      .shape-square {
        padding: 0 !important;
      }

      .shape-circle {
        padding: 0 !important;
        border-radius: 50%;
        overflow: hidden;
      }

      .size-base.shape-square,
      .size-base.shape-circle {
        width: 40px;
        height: 40px;
      }

      .size-small.shape-square,
      .size-small.shape-circle {
        width: 36px;
        height: 36px;
      }

      .size-compact.shape-square,
      .size-compact.shape-circle {
        width: 32px;
        height: 32px;
      }

      /* Styling for button sizes */
      .size-base {
        padding: 10px 16px;
        font-size: 14px;
      }

      .size-small {
        padding: 8px 12px;
        font-size: 14px;
      }

      .size-compact {
        padding: 8px 10px;
        font-size: 12px;
        line-height: 16px;
      }

      /* Variant styling for buttons */
      .variant-primary {
        background: var(--astra-neutral-700);
        color: white;
      }

      .variant-secondary {
        background: var(--astra-neutral-100);
        color: var(--astra-neutral-900);
      }

      .variant-transparent {
        background: transparent;
        color: var(--astra-neutral-900);
      }

      .variant-destructive {
        background: var(--astra-red-600);
        color: white !important;
      }

      button:not([disabled]) {
        .variant-primary:hover {
          background: var(--astra-neutral-900);
        }

        .variant-secondary:hover {
          background: var(--astra-neutral-200);
        }

        .variant-destructive:hover {
          background: var(--astra-red-700);
        }
      }

      /* Media queries for dark mode adaptations */
      @media (prefers-color-scheme: dark) {
        button[disabled] {
          opacity: 0.4;
          cursor: default;
        }

        .variant-primary {
          background: var(--astra-neutral-200);
          color: black;
        }

        button:not([disabled]) {
          .variant-primary:hover {
            background: white;
          }

          .variant-secondary:hover {
            background: var(--astra-neutral-700);
          }

          .variant-transparent:hover {
            background: var(--astra-neutral-800);
          }
        }

        .variant-secondary {
          background: var(--astra-neutral-800);
          color: var(--astra-neutral-200);
        }

        .variant-transparent {
          background: transparent;
          color: var(--astra-neutral-200);
        }

        .variant-destructive {
          background: var(--astra-red-900);
        }

        .variant-destructive:hover {
          background: var(--astra-red-800);
        }
      }
    `],xt([gt({type:Boolean,reflect:!0})],_t.prototype,"disabled",void 0),xt([gt({type:String})],_t.prototype,"size",void 0),xt([gt({type:String})],_t.prototype,"shape",void 0),xt([gt({type:String})],_t.prototype,"variant",void 0),_t=xt([ht("astra-button")],_t);var kt,$t=_t,Et=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};!function(t){t[t.OUT_OF_RANGE=0]="OUT_OF_RANGE",t[t.ENABLED=1]="ENABLED",t[t.SELECTED_START_NODE=2]="SELECTED_START_NODE",t[t.SELECTED_END_NODE=3]="SELECTED_END_NODE",t[t.SELECTED=4]="SELECTED",t[t.SELECTED_OUT_OF_RANGE=5]="SELECTED_OUT_OF_RANGE"}(kt||(kt={}));const Mt=["Su","Mo","Tu","We","Th","Fr","Sa"];let St=class extends ut{constructor(){super(...arguments),this.singleMonthView=!1,this.startDate=null,this.endDate=null,this.viewingMonth=new Date,this.hoveringDate=null}getMonthName(t,e=0){const n=new Date(t);return n.setMonth(n.getMonth()+e),n.toLocaleString("default",{month:"long"})}getDateYear(t,e=0){const n=new Date(t);return n.setMonth(n.getMonth()+e),n.getFullYear()}getMonthsStartingDay(t,e=0){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n.getDay()}getNumberOfDaysInMonth(t,e=0){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e+1),n.setDate(0),n.getDate()}adjustMonth(t){this.viewingMonth=new Date(this.viewingMonth.setMonth(this.viewingMonth.getMonth()+t))}getDateFromIndex(t,e,n){const r=this.getMonthsStartingDay(t,e);if(n<r){const i=new Date(t);return i.setMonth(i.getMonth()+e),i.setDate(1),i.setDate(i.getDate()-(r-n)),i}if(n>this.getNumberOfDaysInMonth(t,e)+r-1){const i=new Date(t);return i.setMonth(i.getMonth()+e+1),i.setDate(n-this.getNumberOfDaysInMonth(t,e)-r+1),i}{const i=new Date(t);return i.setMonth(i.getMonth()+e),i.setDate(n-r+1),i}}isDateEqual(t,e){return!(!t||!e)&&t.toDateString()===e.toDateString()}handleDateClick(t){this.singleMonthView?(this.startDate=t,this.endDate=null,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))):(!this.startDate||t<this.startDate?(this.startDate=t,this.hoveringDate=t):this.endDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{startDate:this.startDate,endDate:this.endDate},bubbles:!0,composed:!0})))}handleDateHover(t){this.startDate&&!this.endDate&&t>this.startDate&&(this.hoveringDate=t)}resetDates(){this.startDate=null,this.endDate=null}render(){return V`
      <div class="date-range-picker" style="">
        <div class="top-section">
          <div class="month-container">
            <div class="month-header">
              <button @click=${()=>this.adjustMonth(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <polyline
                    points="160 208 80 128 160 48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
              </button>

              <div contenteditable @blur=${t=>this.setViewingMonth(t.target.textContent||"")}>
                ${this.getMonthName(this.viewingMonth)} ${this.getDateYear(this.viewingMonth)}
              </div>

              ${this.singleMonthView?V`<button @click=${()=>this.adjustMonth(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none" />
                      <polyline
                        points="96 48 176 128 96 208"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      />
                    </svg>
                  </button>`:V`<div style="width: 28px;"></div>`}
            </div>
            <div class="days-of-week">${Mt.map((t=>V`<div>${t}</div>`))}</div>
            <div class="days">
              ${Array.from({length:42}).map(((t,e)=>{const n=this.getDateFromIndex(this.viewingMonth,0,e),r=this.getDateMode(n,e);return V`
                  <div class="day-cell ${r}" @click=${()=>this.handleDateClick(n)} @mouseover=${()=>this.handleDateHover(n)}>
                    ${n.getDate()}
                  </div>
                `}))}
            </div>
          </div>
          ${this.singleMonthView?"":V`
                <div class="month-container">
                  <div class="month-header">
                    <div style="width: 28px;"></div>
                    <div contenteditable @blur=${t=>this.setViewingMonth(t.target.textContent||"",-1)}>
                      ${this.getMonthName(this.viewingMonth,1)} ${this.getDateYear(this.viewingMonth,1)}
                    </div>
                    <button @click=${()=>this.adjustMonth(1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <polyline
                          points="96 48 176 128 96 208"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="days-of-week">${Mt.map((t=>V`<div>${t}</div>`))}</div>
                  <div class="days">
                    ${Array.from({length:42}).map(((t,e)=>{const n=this.getDateFromIndex(this.viewingMonth,1,e),r=this.getDateMode(n,e,1);return V`
                        <div
                          class="day-cell ${r}"
                          @click=${()=>this.handleDateClick(n)}
                          @mouseover=${()=>this.handleDateHover(n)}
                        >
                          ${n.getDate()}
                        </div>
                      `}))}
                  </div>
                </div>
              `}
        </div>

        ${this.singleMonthView?"":V`
        <div class="footer">
          <div style="flex: 1; display: flex; gap: 4px; align-items: center;"></div>
          <button class="reset-dates" @click=${this.resetDates}>Reset Dates</button>
        </div>
      </div>
      `}
      </div>
    `}getDateMode(t,e,n=0){const r=this.getMonthsStartingDay(this.viewingMonth,n),i=this.getNumberOfDaysInMonth(this.viewingMonth,n);return e<r||e>=i+r?"out-of-range":this.isDateEqual(t,this.startDate)?this.singleMonthView?"selected-start-node selected-end-node":"selected-start-node":this.isDateEqual(t,this.endDate)?"selected-end-node":!this.singleMonthView&&this.startDate&&t>=this.startDate&&this.endDate&&t<=this.endDate||!this.singleMonthView&&this.startDate&&!this.endDate&&this.hoveringDate&&t<=this.hoveringDate&&t>this.startDate?"selected":"enabled"}setViewingMonth(t,e=0){const n=new Date(t);n.setMonth(n.getMonth()+e),this.viewingMonth=n}};St.styles=a`
    .top-section {
      display: flex;
      flex-direction: row;
      gap: 0.625rem; /* gap-2.5 */
    }

    .date-range-picker {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      display: inline-block;
      flex-direction: column;
      gap: 0.625rem; /* gap-2.5 */
      border-radius: 0.75rem; /* rounded-xl */
      background-color: #f5f5f5; /* bg-neutral-100 */
      padding: 1rem; /* p-4 */
      color: #1a1a1a; /* dark:bg-neutral-900 */
      user-select: none; /* select-none */
      max-width: 400px;
    }

    .month-header > button {
      cursor: pointer;
      border-radius: 0.25rem; /* rounded */
      background-color: rgba(209, 213, 219, 0.85); /* bg-neutral-300/85 */
      padding: 0.375rem; /* p-1.5 */
      transition: background-color 0.2s;
      width: 28px;
      height: 28px;
    }

    .month-header > button:hover {
      background-color: #d1d5db; /* hover:bg-neutral-300 */
    }

    @media (prefers-color-scheme: dark) {
      .month-header > button {
        background-color: rgba(55, 65, 81, 0.85); /* dark:bg-neutral-700/85 */
      }

      .month-header > button:hover {
        background-color: #374151; /* hover:dark:bg-neutral-700 */
      }
    }

    .month-container {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* gap-4 */
      position: relative; /* relative */
      width: 194px; /* w-[196px] */
    }

    .month-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .month-header button {
      cursor: pointer; /* cursor-pointer */
      border-radius: 0.25rem; /* rounded */
      background-color: rgba(209, 213, 219, 0.85); /* bg-neutral-300/85 */
      padding: 0.375rem; /* p-1.5 */
      transition: background-color 0.2s;
      border: none;
    }

    .month-header button:hover {
      background-color: #d1d5db; /* hover:bg-neutral-300 */
    }

    .month-header div[contenteditable] {
      padding: 0.375rem; /* py-1.5 */
      text-align: center; /* text-center */
      font-size: 12px; /* text-sm */
      font-weight: 600; /* font-semibold */
      border-radius: 0.375rem; /* rounded-md */
      color: #111827; /* text-neutral-900 */
      transition: background-color 0.2s;
    }

    .month-header div[contenteditable]:hover {
      background-color: rgba(209, 213, 219, 0.1); /* hover:dark:bg-neutral-300/10 */
    }

    .days-of-week {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr)); /* grid-cols-7 */
      gap: 0.25rem; /* gap-1 */
    }

    .days-of-week div {
      text-align: center; /* text-center */
      font-size: 12px; /* text-sm */
      color: #6b7280; /* text-neutral-500 */
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr)); /* grid-cols-7 */
      gap: 0.125rem; /* gap-y-0.5 */
    }

    .day-cell {
      height: 26px; /* h-[26px] */
      width: 1.75rem; /* w-7 */
      text-align: center; /* text-center */
      font-size: 12px; /* text-sm */
      line-height: 26px; /* leading-[26px] */
      cursor: pointer; /* cursor-pointer */
      transition:
        background-color 0.05s,
        color 0.05s; /* transition-all duration-[50] */
    }

    .day-cell.out-of-range {
      background-color: transparent; /* bg-transparent */
      color: #d1d5db; /* !text-neutral-300 */
    }

    .day-cell.enabled:hover {
      background-color: #d1d5db; /* hover:bg-neutral-300 */
      color: #111827; /* text-neutral-900 */
    }

    .day-cell.selected-start-node {
      background-color: #0a0a0a; /* !bg-neutral-950 */
      border-top-left-radius: 5px; /* rounded-tl-[5px] */
      border-bottom-left-radius: 5px; /* rounded-bl-[5px] */
      color: #e5e7eb; /* !text-neutral-200 */
    }

    .day-cell.selected-end-node {
      background-color: #0a0a0a; /* !bg-neutral-950 */
      border-top-right-radius: 5px; /* rounded-tr-[5px] */
      border-bottom-right-radius: 5px; /* rounded-br-[5px] */
      color: #e5e7eb; /* !text-neutral-200 */
    }

    .day-cell.selected {
      background-color: #d1d5db; /* bg-neutral-300 */
      color: #111827; /* text-neutral-900 */
    }

    .day-cell.selected-out-of-range {
      background-color: #e5e7eb; /* bg-neutral-200 */
      color: #d1d5db; /* !text-neutral-300 */
    }

    .footer {
      display: flex;
      align-items: center;
      gap: 0.5rem; /* gap-2 */
      font-size: 12px; /* text-sm */
      color: #374151; /* text-neutral-700 */
    }

    .footer span {
      flex: 1; /* flex-1 */
    }

    .footer button {
      cursor: pointer; /* cursor-pointer */
      font-weight: 600; /* font-semibold */
      text-decoration: underline; /* underline */
      text-underline-offset: 2px; /* underline-offset-2 */
      color: #111827; /* text-neutral-800 */
      transition: color 0.2s;
      background: transparent;
      border: none;
    }

    .footer button:hover {
      color: #1f2937; /* dark:text-neutral-200 */
    }
  `,Et([gt({type:Boolean,attribute:"single-month-view"})],St.prototype,"singleMonthView",void 0),Et([bt()],St.prototype,"startDate",void 0),Et([bt()],St.prototype,"endDate",void 0),Et([bt()],St.prototype,"viewingMonth",void 0),Et([bt()],St.prototype,"hoveringDate",void 0),St=Et([ht("astra-calendar")],St);var At,Ct=St,Tt=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};!function(t){t.base="base",t.small="small",t.compact="compact"}(At||(At={}));let Dt=class extends ut{constructor(){super(...arguments),this.size=At.base}render(){return V`
      <section class="size-${this.size}">
        <slot></slot>
      </section>
    `}};Dt.styles=[wt,a`
      section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 500;
        font-family: var(--astra-font-family);
        color: black;
        background: var(--astra-neutral-100);
        border: 1px solid var(--astra-neutral-200);
        border-radius: 6px;
      }

      .size-base {
        padding: 12px;
        gap: 8px;
      }

      .size-small {
        padding: 8px;
        gap: 4px;
      }

      .size-compact {
        padding: 4px;
        gap: 2px;
      }

      @media (prefers-color-scheme: dark) {
        div {
          background: var(--astra-neutral-900);
          border: 1px solid var(--astra-neutral-800);
          color: white;
        }
      }
    `],Tt([gt({type:String})],Dt.prototype,"size",void 0),Dt=Tt([ht("astra-card")],Dt);var Nt=Dt;function Rt(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Lt(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Ot(t){let e,n,r;function i(t,r,i=0,o=t.length){if(i<o){if(0!==e(r,r))return o;do{const e=i+o>>>1;n(t[e],r)<0?i=e+1:o=e}while(i<o)}return i}return 2!==t.length?(e=Rt,n=(e,n)=>Rt(t(e),n),r=(e,n)=>t(e)-n):(e=t===Rt||t===Lt?t:zt,n=t,r=t),{left:i,center:function(t,e,n=0,o=t.length){const a=i(t,e,n,o-1);return a>n&&r(t[a-1],e)>-r(t[a],e)?a-1:a},right:function(t,r,i=0,o=t.length){if(i<o){if(0!==e(r,r))return o;do{const e=i+o>>>1;n(t[e],r)<=0?i=e+1:o=e}while(i<o)}return i}}}function zt(){return 0}function Pt(t){return null===t?NaN:+t}const It=Ot(Rt).right;function jt(t,e){let n=0;for(let e of t)null!=e&&(e=+e)>=e&&++n;return n}function Ut(t){return 0|t.length}function Bt(t){return!(t>0)}function Ht(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function Ft(t,e){var n=0;return Float64Array.from(t,(t=>n+=+t||0))}function Vt(t,e){let n,r=0,i=0,o=0;if(void 0===e)for(let e of t)null!=e&&(e=+e)>=e&&(n=e-i,i+=n/++r,o+=n*(e-i));else{let a=-1;for(let s of t)null!=(s=e(s,++a,t))&&(s=+s)>=s&&(n=s-i,i+=n/++r,o+=n*(s-i))}if(r>1)return o/(r-1)}function qt(t,e){const n=Vt(t,e);return n?Math.sqrt(n):n}function Yt(t,e){let n,r;if(void 0===e)for(const e of t)null!=e&&(void 0===n?e>=e&&(n=r=e):(n>e&&(n=e),r<e&&(r=e)));else{let i=-1;for(let o of t)null!=(o=e(o,++i,t))&&(void 0===n?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)))}return[n,r]}Ot(Pt).center;class Wt{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const i=e[r],o=t+i,a=Math.abs(t)<Math.abs(i)?t-(o-i):i-(o-t);a&&(e[n++]=a),t=o}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e,n,r,i=this._n,o=0;if(i>0){for(o=t[--i];i>0&&(e=o,n=t[--i],o=e+n,r=n-(o-e),!r););i>0&&(r<0&&t[i-1]<0||r>0&&t[i-1]>0)&&(n=2*r,e=o+n,n==e-o&&(o=e))}return o}}class Xt extends Map{constructor(t,e=Qt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,n]of t)this.set(e,n)}get(t){return super.get(Zt(this,t))}has(t){return super.has(Zt(this,t))}set(t,e){return super.set(Gt(this,t),e)}delete(t){return super.delete(Jt(this,t))}}class Kt extends Set{constructor(t,e=Qt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const e of t)this.add(e)}has(t){return super.has(Zt(this,t))}add(t){return super.add(Gt(this,t))}delete(t){return super.delete(Jt(this,t))}}function Zt({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):n}function Gt({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):(t.set(r,n),n)}function Jt({_intern:t,_key:e},n){const r=e(n);return t.has(r)&&(n=t.get(r),t.delete(r)),n}function Qt(t){return null!==t&&"object"==typeof t?t.valueOf():t}function te(t){return t}function ee(t,...e){return ie(t,te,te,e)}function ne(t,e,...n){return ie(t,te,e,n)}function re(t,e,...n){return ie(t,Array.from,e,n)}function ie(t,e,n,r){return function t(i,o){if(o>=r.length)return n(i);const a=new Xt,s=r[o++];let l=-1;for(const t of i){const e=s(t,++l,i),n=a.get(e);n?n.push(t):a.set(e,[t])}for(const[e,n]of a)a.set(e,t(n,o));return e(a)}(t,0)}function oe(t,...e){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[n]=e;if(n&&2!==n.length||e.length>1){const r=Uint32Array.from(t,((t,e)=>e));return e.length>1?(e=e.map((e=>t.map(e))),r.sort(((t,n)=>{for(const r of e){const e=se(r[t],r[n]);if(e)return e}}))):(n=t.map(n),r.sort(((t,e)=>se(n[t],n[e])))),function(t,e){return Array.from(e,(e=>t[e]))}(t,r)}return t.sort(ae(n))}function ae(t=Rt){if(t===Rt)return se;if("function"!=typeof t)throw new TypeError("compare is not a function");return(e,n)=>{const r=t(e,n);return r||0===r?r:(0===t(n,n))-(0===t(e,e))}}function se(t,e){return(null==t||!(t>=t))-(null==e||!(e>=e))||(t<e?-1:t>e?1:0)}function le(t,e,n){return(2!==e.length?oe(ne(t,e,n),(([t,e],[n,r])=>Rt(e,r)||Rt(t,n))):oe(ee(t,n),(([t,n],[r,i])=>e(n,i)||Rt(t,r)))).map((([t])=>t))}const ce=Math.sqrt(50),ue=Math.sqrt(10),de=Math.sqrt(2);function he(t,e,n){const r=(e-t)/Math.max(0,n),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),a=o>=ce?10:o>=ue?5:o>=de?2:1;let s,l,c;return i<0?(c=Math.pow(10,-i)/a,s=Math.round(t*c),l=Math.round(e*c),s/c<t&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,i)*a,s=Math.round(t/c),l=Math.round(e/c),s*c<t&&++s,l*c>e&&--l),l<s&&.5<=n&&n<2?he(t,e,2*n):[s,l,c]}function fe(t,e,n){if(!((n=+n)>0))return[];if((t=+t)===(e=+e))return[t];const r=e<t,[i,o,a]=r?he(e,t,n):he(t,e,n);if(!(o>=i))return[];const s=o-i+1,l=new Array(s);if(r)if(a<0)for(let t=0;t<s;++t)l[t]=(o-t)/-a;else for(let t=0;t<s;++t)l[t]=(o-t)*a;else if(a<0)for(let t=0;t<s;++t)l[t]=(i+t)/-a;else for(let t=0;t<s;++t)l[t]=(i+t)*a;return l}function pe(t,e,n){return he(t=+t,e=+e,n=+n)[2]}function ge(t,e,n){n=+n;const r=(e=+e)<(t=+t),i=r?pe(e,t,n):pe(t,e,n);return(r?-1:1)*(i<0?1/-i:i)}function be(t){return Math.max(1,Math.ceil(Math.log(jt(t))/Math.LN2)+1)}function ve(t,e){let n;if(void 0===e)for(const e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let i of t)null!=(i=e(i,++r,t))&&(n<i||void 0===n&&i>=i)&&(n=i)}return n}function ye(t,e){let n,r=-1,i=-1;if(void 0===e)for(const e of t)++i,null!=e&&(n<e||void 0===n&&e>=e)&&(n=e,r=i);else for(let o of t)null!=(o=e(o,++i,t))&&(n<o||void 0===n&&o>=o)&&(n=o,r=i);return r}function me(t,e){let n;if(void 0===e)for(const e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let i of t)null!=(i=e(i,++r,t))&&(n>i||void 0===n&&i>=i)&&(n=i)}return n}function we(t,e){let n,r=-1,i=-1;if(void 0===e)for(const e of t)++i,null!=e&&(n>e||void 0===n&&e>=e)&&(n=e,r=i);else for(let o of t)null!=(o=e(o,++i,t))&&(n>o||void 0===n&&o>=o)&&(n=o,r=i);return r}function xe(t,e,n=0,r=1/0,i){if(e=Math.floor(e),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(t.length-1,r)),!(n<=e&&e<=r))return t;for(i=void 0===i?se:ae(i);r>n;){if(r-n>600){const o=r-n+1,a=e-n+1,s=Math.log(o),l=.5*Math.exp(2*s/3),c=.5*Math.sqrt(s*l*(o-l)/o)*(a-o/2<0?-1:1);xe(t,e,Math.max(n,Math.floor(e-a*l/o+c)),Math.min(r,Math.floor(e+(o-a)*l/o+c)),i)}const o=t[e];let a=n,s=r;for(_e(t,n,e),i(t[r],o)>0&&_e(t,n,r);a<s;){for(_e(t,a,s),++a,--s;i(t[a],o)<0;)++a;for(;i(t[s],o)>0;)--s}0===i(t[n],o)?_e(t,n,s):(++s,_e(t,s,r)),s<=e&&(n=s+1),e<=s&&(r=s-1)}return t}function _e(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function ke(t,e=Rt){let n,r=!1;if(1===e.length){let i;for(const o of t){const t=e(o);(r?Rt(t,i)>0:0===Rt(t,t))&&(n=o,i=t,r=!0)}}else for(const i of t)(r?e(i,n)>0:0===e(i,i))&&(n=i,r=!0);return n}function $e(t,e,n){if(t=Float64Array.from(function*(t,e){if(void 0===e)for(let e of t)null!=e&&(e=+e)>=e&&(yield e);else{let n=-1;for(let r of t)null!=(r=e(r,++n,t))&&(r=+r)>=r&&(yield r)}}(t,n)),(r=t.length)&&!isNaN(e=+e)){if(e<=0||r<2)return me(t);if(e>=1)return ve(t);var r,i=(r-1)*e,o=Math.floor(i),a=ve(xe(t,o).subarray(0,o+1));return a+(me(t.subarray(o+1))-a)*(i-o)}}function Ee(t,e,n=Pt){if((r=t.length)&&!isNaN(e=+e)){if(e<=0||r<2)return+n(t[0],0,t);if(e>=1)return+n(t[r-1],r-1,t);var r,i=(r-1)*e,o=Math.floor(i),a=+n(t[o],o,t);return a+(+n(t[o+1],o+1,t)-a)*(i-o)}}function Me(t,e,n){const r=jt(t),i=$e(t,.75)-$e(t,.25);return r&&i?Math.ceil((n-e)/(2*i*Math.pow(r,-1/3))):1}function Se(t,e,n){const r=jt(t),i=qt(t);return r&&i?Math.ceil((n-e)*Math.cbrt(r)/(3.49*i)):1}function Ae(t,e){let n=0,r=0;if(void 0===e)for(let e of t)null!=e&&(e=+e)>=e&&(++n,r+=e);else{let i=-1;for(let o of t)null!=(o=e(o,++i,t))&&(o=+o)>=o&&(++n,r+=o)}if(n)return r/n}function Ce(t,e){return $e(t,.5,e)}function Te(t){return Array.from(function*(t){for(const e of t)yield*e}(t))}function De(t,e){const n=new Xt;if(void 0===e)for(let e of t)null!=e&&e>=e&&n.set(e,(n.get(e)||0)+1);else{let r=-1;for(let i of t)null!=(i=e(i,++r,t))&&i>=i&&n.set(i,(n.get(i)||0)+1)}let r,i=0;for(const[t,e]of n)e>i&&(i=e,r=t);return r}function Ne(t,e){return[t,e]}function Re(t,e,n){t=+t,e=+e,n=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+n;for(var r=-1,i=0|Math.max(0,Math.ceil((e-t)/n)),o=new Array(i);++r<i;)o[r]=t+r*n;return o}function Le(t,e){let n=0;if(void 0===e)for(let e of t)(e=+e)&&(n+=e);else{let r=-1;for(let i of t)(i=+e(i,++r,t))&&(n+=i)}return n}function Oe(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()}function ze(t){return t}var Pe=1e-6;function Ie(t){return"translate("+t+",0)"}function je(t){return e=>+t(e)}function Ue(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function Be(){return!this.__axis}function He(t,e){var n=[],r=null,i=null,o=6,a=6,s=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c="y",u=Ie;function d(t){var d=null==r?e.ticks?e.ticks.apply(e,n):e.domain():r,h=null==i?e.tickFormat?e.tickFormat.apply(e,n):ze:i,f=Math.max(o,0)+s,p=e.range(),g=+p[0]+l,b=+p[p.length-1]+l,v=(e.bandwidth?Ue:je)(e.copy(),l),y=t.selection?t.selection():t,m=y.selectAll(".domain").data([null]),w=y.selectAll(".tick").data(d,e).order(),x=w.exit(),_=w.enter().append("g").attr("class","tick"),k=w.select("line"),$=w.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(_),k=k.merge(_.append("line").attr("stroke","currentColor").attr("y2",1*o)),$=$.merge(_.append("text").attr("fill","currentColor").attr(c,1*f).attr("dy","0.71em")),t!==y&&(m=m.transition(t),w=w.transition(t),k=k.transition(t),$=$.transition(t),x=x.transition(t).attr("opacity",Pe).attr("transform",(function(t){return isFinite(t=v(t))?u(t+l):this.getAttribute("transform")})),_.attr("opacity",Pe).attr("transform",(function(t){var e=this.parentNode.__axis;return u((e&&isFinite(e=e(t))?e:v(t))+l)}))),x.remove(),m.attr("d",a?"M"+g+","+1*a+"V"+l+"H"+b+"V"+1*a:"M"+g+","+l+"H"+b),w.attr("opacity",1).attr("transform",(function(t){return u(v(t)+l)})),k.attr("y2",1*o),$.attr(c,1*f).text(h),y.filter(Be).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor","middle"),y.each((function(){this.__axis=v}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return n=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(n=null==t?[]:Array.from(t),d):n.slice()},d.tickValues=function(t){return arguments.length?(r=null==t?null:Array.from(t),d):r&&r.slice()},d.tickFormat=function(t){return arguments.length?(i=t,d):i},d.tickSize=function(t){return arguments.length?(o=a=+t,d):o},d.tickSizeInner=function(t){return arguments.length?(o=+t,d):o},d.tickSizeOuter=function(t){return arguments.length?(a=+t,d):a},d.tickPadding=function(t){return arguments.length?(s=+t,d):s},d.offset=function(t){return arguments.length?(l=+t,d):l},d}var Fe={value:()=>{}};function Ve(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new qe(r)}function qe(t){this._=t}function Ye(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function We(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=Fe,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}qe.prototype=Ve.prototype={constructor:qe,on:function(t,e){var n,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))),a=-1,s=o.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<s;)if(n=(t=o[a]).type)i[n]=We(i[n],t.name,e);else if(null==e)for(n in i)i[n]=We(i[n],t.name,null);return this}for(;++a<s;)if((n=(t=o[a]).type)&&(n=Ye(i[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new qe(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,n=(r=this._[t]).length;o<n;++o)r[o].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};var Xe="http://www.w3.org/1999/xhtml",Ke={svg:"http://www.w3.org/2000/svg",xhtml:Xe,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ze(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),Ke.hasOwnProperty(e)?{space:Ke[e],local:t}:t}function Ge(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Xe&&e.documentElement.namespaceURI===Xe?e.createElement(t):e.createElementNS(n,t)}}function Je(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Qe(t){var e=Ze(t);return(e.local?Je:Ge)(e)}function tn(){}function en(t){return null==t?tn:function(){return this.querySelector(t)}}function nn(){return[]}function rn(t){return null==t?nn:function(){return this.querySelectorAll(t)}}function on(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function an(t){return function(){return this.matches(t)}}function sn(t){return function(e){return e.matches(t)}}var ln=Array.prototype.find;function cn(){return this.firstElementChild}var un=Array.prototype.filter;function dn(){return Array.from(this.children)}function hn(t){return new Array(t.length)}function fn(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function pn(t,e,n,r,i,o){for(var a,s=0,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],r[s]=a):n[s]=new fn(t,o[s]);for(;s<l;++s)(a=e[s])&&(i[s]=a)}function gn(t,e,n,r,i,o,a){var s,l,c,u=new Map,d=e.length,h=o.length,f=new Array(d);for(s=0;s<d;++s)(l=e[s])&&(f[s]=c=a.call(l,l.__data__,s,e)+"",u.has(c)?i[s]=l:u.set(c,l));for(s=0;s<h;++s)c=a.call(t,o[s],s,o)+"",(l=u.get(c))?(r[s]=l,l.__data__=o[s],u.delete(c)):n[s]=new fn(t,o[s]);for(s=0;s<d;++s)(l=e[s])&&u.get(f[s])===l&&(i[s]=l)}function bn(t){return t.__data__}function vn(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function yn(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function mn(t){return function(){this.removeAttribute(t)}}function wn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function xn(t,e){return function(){this.setAttribute(t,e)}}function _n(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function kn(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function $n(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function En(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Mn(t){return function(){this.style.removeProperty(t)}}function Sn(t,e,n){return function(){this.style.setProperty(t,e,n)}}function An(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function Cn(t,e){return t.style.getPropertyValue(e)||En(t).getComputedStyle(t,null).getPropertyValue(e)}function Tn(t){return function(){delete this[t]}}function Dn(t,e){return function(){this[t]=e}}function Nn(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function Rn(t){return t.trim().split(/^|\s+/)}function Ln(t){return t.classList||new On(t)}function On(t){this._node=t,this._names=Rn(t.getAttribute("class")||"")}function zn(t,e){for(var n=Ln(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function Pn(t,e){for(var n=Ln(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function In(t){return function(){zn(this,t)}}function jn(t){return function(){Pn(this,t)}}function Un(t,e){return function(){(e.apply(this,arguments)?zn:Pn)(this,t)}}function Bn(){this.textContent=""}function Hn(t){return function(){this.textContent=t}}function Fn(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function Vn(){this.innerHTML=""}function qn(t){return function(){this.innerHTML=t}}function Yn(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function Wn(){this.nextSibling&&this.parentNode.appendChild(this)}function Xn(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Kn(){return null}function Zn(){var t=this.parentNode;t&&t.removeChild(this)}function Gn(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Jn(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Qn(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,o=e.length;r<o;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function tr(t,e,n){return function(){var r,i=this.__on,o=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),void(r.value=e);this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function er(t,e,n){var r=En(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function nr(t,e){return function(){return er(this,t,e)}}function rr(t,e){return function(){return er(this,t,e.apply(this,arguments))}}fn.prototype={constructor:fn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},On.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ir=[null];function or(t,e){this._groups=t,this._parents=e}function ar(){return new or([[document.documentElement]],ir)}function sr(t){return"string"==typeof t?new or([[document.querySelector(t)]],[document.documentElement]):new or([[t]],ir)}function lr(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function cr(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function ur(){}or.prototype=ar.prototype={constructor:or,select:function(t){"function"!=typeof t&&(t=en(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a,s=e[i],l=s.length,c=r[i]=new Array(l),u=0;u<l;++u)(o=s[u])&&(a=t.call(o,o.__data__,u,s))&&("__data__"in o&&(a.__data__=o.__data__),c[u]=a);return new or(r,this._parents)},selectAll:function(t){t="function"==typeof t?on(t):rn(t);for(var e=this._groups,n=e.length,r=[],i=[],o=0;o<n;++o)for(var a,s=e[o],l=s.length,c=0;c<l;++c)(a=s[c])&&(r.push(t.call(a,a.__data__,c,s)),i.push(a));return new or(r,i)},selectChild:function(t){return this.select(null==t?cn:function(t){return function(){return ln.call(this.children,t)}}("function"==typeof t?t:sn(t)))},selectChildren:function(t){return this.selectAll(null==t?dn:function(t){return function(){return un.call(this.children,t)}}("function"==typeof t?t:sn(t)))},filter:function(t){"function"!=typeof t&&(t=an(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a=e[i],s=a.length,l=r[i]=[],c=0;c<s;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&l.push(o);return new or(r,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,bn);var n=e?gn:pn,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),s=new Array(o),l=new Array(o),c=0;c<o;++c){var u=r[c],d=i[c],h=d.length,f=vn(t.call(u,u&&u.__data__,c,r)),p=f.length,g=s[c]=new Array(p),b=a[c]=new Array(p);n(u,d,g,b,l[c]=new Array(h),f,e);for(var v,y,m=0,w=0;m<p;++m)if(v=g[m]){for(m>=w&&(w=m+1);!(y=b[w])&&++w<p;);v._next=y||null}}return(a=new or(a,r))._enter=s,a._exit=l,a},enter:function(){return new or(this._enter||this._groups.map(hn),this._parents)},exit:function(){return new or(this._exit||this._groups.map(hn),this._parents)},join:function(t,e,n){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==n?o.remove():n(o),r&&i?r.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,n=this._groups,r=e._groups,i=n.length,o=r.length,a=Math.min(i,o),s=new Array(i),l=0;l<a;++l)for(var c,u=n[l],d=r[l],h=u.length,f=s[l]=new Array(h),p=0;p<h;++p)(c=u[p]||d[p])&&(f[p]=c);for(;l<i;++l)s[l]=n[l];return new or(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=yn);for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a,s=n[o],l=s.length,c=i[o]=new Array(l),u=0;u<l;++u)(a=s[u])&&(c[u]=a);c.sort(e)}return new or(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,o=e[n],a=0,s=o.length;a<s;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,e){var n=Ze(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?wn:mn:"function"==typeof e?n.local?$n:kn:n.local?_n:xn)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?Mn:"function"==typeof e?An:Sn)(t,e,null==n?"":n)):Cn(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Tn:"function"==typeof e?Nn:Dn)(t,e)):this.node()[t]},classed:function(t,e){var n=Rn(t+"");if(arguments.length<2){for(var r=Ln(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?Un:e?In:jn)(n,e))},text:function(t){return arguments.length?this.each(null==t?Bn:("function"==typeof t?Fn:Hn)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Vn:("function"==typeof t?Yn:qn)(t)):this.node().innerHTML},raise:function(){return this.each(Wn)},lower:function(){return this.each(Xn)},append:function(t){var e="function"==typeof t?t:Qe(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:Qe(t),r=null==e?Kn:"function"==typeof e?e:en(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(Zn)},clone:function(t){return this.select(t?Jn:Gn)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,o=function(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}(t+""),a=o.length;if(!(arguments.length<2)){for(s=e?tr:Qn,r=0;r<a;++r)this.each(s(o[r],e,n));return this}var s=this.node().__on;if(s)for(var l,c=0,u=s.length;c<u;++c)for(r=0,l=s[c];r<a;++r)if((i=o[r]).type===l.type&&i.name===l.name)return l.value},dispatch:function(t,e){return this.each(("function"==typeof e?rr:nr)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};var dr=.7,hr=1/dr,fr="\\s*([+-]?\\d+)\\s*",pr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",br=/^#([0-9a-f]{3,8})$/,vr=new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),yr=new RegExp(`^rgb\\(${gr},${gr},${gr}\\)$`),mr=new RegExp(`^rgba\\(${fr},${fr},${fr},${pr}\\)$`),wr=new RegExp(`^rgba\\(${gr},${gr},${gr},${pr}\\)$`),xr=new RegExp(`^hsl\\(${pr},${gr},${gr}\\)$`),_r=new RegExp(`^hsla\\(${pr},${gr},${gr},${pr}\\)$`),kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function $r(){return this.rgb().formatHex()}function Er(){return this.rgb().formatRgb()}function Mr(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=br.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?Sr(e):3===n?new Dr(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?Ar(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?Ar(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=vr.exec(t))?new Dr(e[1],e[2],e[3],1):(e=yr.exec(t))?new Dr(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=mr.exec(t))?Ar(e[1],e[2],e[3],e[4]):(e=wr.exec(t))?Ar(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=xr.exec(t))?Pr(e[1],e[2]/100,e[3]/100,1):(e=_r.exec(t))?Pr(e[1],e[2]/100,e[3]/100,e[4]):kr.hasOwnProperty(t)?Sr(kr[t]):"transparent"===t?new Dr(NaN,NaN,NaN,0):null}function Sr(t){return new Dr(t>>16&255,t>>8&255,255&t,1)}function Ar(t,e,n,r){return r<=0&&(t=e=n=NaN),new Dr(t,e,n,r)}function Cr(t){return t instanceof ur||(t=Mr(t)),t?new Dr((t=t.rgb()).r,t.g,t.b,t.opacity):new Dr}function Tr(t,e,n,r){return 1===arguments.length?Cr(t):new Dr(t,e,n,null==r?1:r)}function Dr(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function Nr(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}`}function Rr(){const t=Lr(this.opacity);return`${1===t?"rgb(":"rgba("}${Or(this.r)}, ${Or(this.g)}, ${Or(this.b)}${1===t?")":`, ${t})`}`}function Lr(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Or(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function zr(t){return((t=Or(t))<16?"0":"")+t.toString(16)}function Pr(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Ur(t,e,n,r)}function Ir(t){if(t instanceof Ur)return new Ur(t.h,t.s,t.l,t.opacity);if(t instanceof ur||(t=Mr(t)),!t)return new Ur;if(t instanceof Ur)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),o=Math.max(e,n,r),a=NaN,s=o-i,l=(o+i)/2;return s?(a=e===o?(n-r)/s+6*(n<r):n===o?(r-e)/s+2:(e-n)/s+4,s/=l<.5?o+i:2-o-i,a*=60):s=l>0&&l<1?0:a,new Ur(a,s,l,t.opacity)}function jr(t,e,n,r){return 1===arguments.length?Ir(t):new Ur(t,e,n,null==r?1:r)}function Ur(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function Br(t){return(t=(t||0)%360)<0?t+360:t}function Hr(t){return Math.max(0,Math.min(1,t||0))}function Fr(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}lr(ur,Mr,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:$r,formatHex:$r,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Ir(this).formatHsl()},formatRgb:Er,toString:Er}),lr(Dr,Tr,cr(ur,{brighter(t){return t=null==t?hr:Math.pow(hr,t),new Dr(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?dr:Math.pow(dr,t),new Dr(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Dr(Or(this.r),Or(this.g),Or(this.b),Lr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Nr,formatHex:Nr,formatHex8:function(){return`#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Rr,toString:Rr})),lr(Ur,jr,cr(ur,{brighter(t){return t=null==t?hr:Math.pow(hr,t),new Ur(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?dr:Math.pow(dr,t),new Ur(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new Dr(Fr(t>=240?t-240:t+120,i,r),Fr(t,i,r),Fr(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new Ur(Br(this.h),Hr(this.s),Hr(this.l),Lr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Lr(this.opacity);return`${1===t?"hsl(":"hsla("}${Br(this.h)}, ${100*Hr(this.s)}%, ${100*Hr(this.l)}%${1===t?")":`, ${t})`}`}}));const Vr=Math.PI/180,qr=180/Math.PI,Yr=.96422,Wr=1,Xr=.82521,Kr=4/29,Zr=6/29,Gr=3*Zr*Zr,Jr=Zr*Zr*Zr;function Qr(t){if(t instanceof ei)return new ei(t.l,t.a,t.b,t.opacity);if(t instanceof si)return li(t);t instanceof Dr||(t=Cr(t));var e,n,r=oi(t.r),i=oi(t.g),o=oi(t.b),a=ni((.2225045*r+.7168786*i+.0606169*o)/Wr);return r===i&&i===o?e=n=a:(e=ni((.4360747*r+.3850649*i+.1430804*o)/Yr),n=ni((.0139322*r+.0971045*i+.7141733*o)/Xr)),new ei(116*a-16,500*(e-a),200*(a-n),t.opacity)}function ti(t,e,n,r){return 1===arguments.length?Qr(t):new ei(t,e,n,null==r?1:r)}function ei(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function ni(t){return t>Jr?Math.pow(t,1/3):t/Gr+Kr}function ri(t){return t>Zr?t*t*t:Gr*(t-Kr)}function ii(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function oi(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function ai(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof si)return new si(t.h,t.c,t.l,t.opacity);if(t instanceof ei||(t=Qr(t)),0===t.a&&0===t.b)return new si(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*qr;return new si(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new si(t,e,n,null==r?1:r)}function si(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}function li(t){if(isNaN(t.h))return new ei(t.l,0,0,t.opacity);var e=t.h*Vr;return new ei(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}lr(ei,ti,cr(ur,{brighter(t){return new ei(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker(t){return new ei(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new Dr(ii(3.1338561*(e=Yr*ri(e))-1.6168667*(t=Wr*ri(t))-.4906146*(n=Xr*ri(n))),ii(-.9787684*e+1.9161415*t+.033454*n),ii(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),lr(si,ai,cr(ur,{brighter(t){return new si(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker(t){return new si(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb(){return li(this).rgb()}}));var ci=-.14861,ui=1.78277,di=-.29227,hi=-.90649,fi=1.97294,pi=fi*hi,gi=fi*ui,bi=ui*di-hi*ci;function vi(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof yi)return new yi(t.h,t.s,t.l,t.opacity);t instanceof Dr||(t=Cr(t));var e=t.r/255,n=t.g/255,r=t.b/255,i=(bi*r+pi*e-gi*n)/(bi+pi-gi),o=r-i,a=(fi*(n-i)-di*o)/hi,s=Math.sqrt(a*a+o*o)/(fi*i*(1-i)),l=s?Math.atan2(a,o)*qr-120:NaN;return new yi(l<0?l+360:l,s,i,t.opacity)}(t):new yi(t,e,n,null==r?1:r)}function yi(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}lr(yi,vi,cr(ur,{brighter(t){return t=null==t?hr:Math.pow(hr,t),new yi(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?dr:Math.pow(dr,t),new yi(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=isNaN(this.h)?0:(this.h+120)*Vr,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return new Dr(255*(e+n*(ci*r+ui*i)),255*(e+n*(di*r+hi*i)),255*(e+n*(fi*r)),this.opacity)}}));var mi=t=>()=>t;function wi(t,e){return function(n){return t+n*e}}function xi(t,e){var n=e-t;return n?wi(t,n>180||n<-180?n-360*Math.round(n/360):n):mi(isNaN(t)?e:t)}function _i(t){return 1==(t=+t)?ki:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):mi(isNaN(e)?n:e)}}function ki(t,e){var n=e-t;return n?wi(t,n):mi(isNaN(t)?e:t)}var $i=function t(e){var n=_i(e);function r(t,e){var r=n((t=Tr(t)).r,(e=Tr(e)).r),i=n(t.g,e.g),o=n(t.b,e.b),a=ki(t.opacity,e.opacity);return function(e){return t.r=r(e),t.g=i(e),t.b=o(e),t.opacity=a(e),t+""}}return r.gamma=t,r}(1);var Ei,Mi=(Ei=function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,s=r<e-1?t[r+2]:2*o-i;return function(t,e,n,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6}((n-r/e)*e,a,i,o,s)}},function(t){var e,n,r=t.length,i=new Array(r),o=new Array(r),a=new Array(r);for(e=0;e<r;++e)n=Tr(t[e]),i[e]=n.r||0,o[e]=n.g||0,a[e]=n.b||0;return i=Ei(i),o=Ei(o),a=Ei(a),n.opacity=1,function(t){return n.r=i(t),n.g=o(t),n.b=a(t),n+""}});function Si(t,e){e||(e=[]);var n,r=t?Math.min(e.length,t.length):0,i=e.slice();return function(o){for(n=0;n<r;++n)i[n]=t[n]*(1-o)+e[n]*o;return i}}function Ai(t,e){var n,r=e?e.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(n=0;n<i;++n)o[n]=Oi(t[n],e[n]);for(;n<r;++n)a[n]=e[n];return function(t){for(n=0;n<i;++n)a[n]=o[n](t);return a}}function Ci(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function Ti(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function Di(t,e){var n,r={},i={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?r[n]=Oi(t[n],e[n]):i[n]=e[n];return function(t){for(n in r)i[n]=r[n](t);return i}}var Ni=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ri=new RegExp(Ni.source,"g");function Li(t,e){var n,r,i,o=Ni.lastIndex=Ri.lastIndex=0,a=-1,s=[],l=[];for(t+="",e+="";(n=Ni.exec(t))&&(r=Ri.exec(e));)(i=r.index)>o&&(i=e.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(n=n[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,l.push({i:a,x:Ti(n,r)})),o=Ri.lastIndex;return o<e.length&&(i=e.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var n,r=0;r<e;++r)s[(n=l[r]).i]=n.x(t);return s.join("")})}function Oi(t,e){var n,r=typeof e;return null==e||"boolean"===r?mi(e):("number"===r?Ti:"string"===r?(n=Mr(e))?(e=n,$i):Li:e instanceof Mr?$i:e instanceof Date?Ci:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?Si:Array.isArray(e)?Ai:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?Di:Ti)(t,e)}function zi(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}var Pi,Ii=180/Math.PI,ji={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ui(t,e,n,r,i,o){var a,s,l;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(l=t*n+e*r)&&(n-=t*l,r-=e*l),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,l/=s),t*r<e*n&&(t=-t,e=-e,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(e,t)*Ii,skewX:Math.atan(l)*Ii,scaleX:a,scaleY:s}}function Bi(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var s=[],l=[];return o=t(o),a=t(a),function(t,r,i,o,a,s){if(t!==i||r!==o){var l=a.push("translate(",null,e,null,n);s.push({i:l-4,x:Ti(t,i)},{i:l-2,x:Ti(r,o)})}else(i||o)&&a.push("translate("+i+e+o+n)}(o.translateX,o.translateY,a.translateX,a.translateY,s,l),function(t,e,n,o){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),o.push({i:n.push(i(n)+"rotate(",null,r)-2,x:Ti(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}(o.rotate,a.rotate,s,l),function(t,e,n,o){t!==e?o.push({i:n.push(i(n)+"skewX(",null,r)-2,x:Ti(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}(o.skewX,a.skewX,s,l),function(t,e,n,r,o,a){if(t!==n||e!==r){var s=o.push(i(o)+"scale(",null,",",null,")");a.push({i:s-4,x:Ti(t,n)},{i:s-2,x:Ti(e,r)})}else 1===n&&1===r||o.push(i(o)+"scale("+n+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,s,l),o=a=null,function(t){for(var e,n=-1,r=l.length;++n<r;)s[(e=l[n]).i]=e.x(t);return s.join("")}}}var Hi=Bi((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?ji:Ui(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),Fi=Bi((function(t){return null==t?ji:(Pi||(Pi=document.createElementNS("http://www.w3.org/2000/svg","g")),Pi.setAttribute("transform",t),(t=Pi.transform.baseVal.consolidate())?Ui((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):ji)}),", ",")",")");var Vi=function(t){return function(e,n){var r=t((e=jr(e)).h,(n=jr(n)).h),i=ki(e.s,n.s),o=ki(e.l,n.l),a=ki(e.opacity,n.opacity);return function(t){return e.h=r(t),e.s=i(t),e.l=o(t),e.opacity=a(t),e+""}}}(xi);var qi=function(t){return function(e,n){var r=t((e=ai(e)).h,(n=ai(n)).h),i=ki(e.c,n.c),o=ki(e.l,n.l),a=ki(e.opacity,n.opacity);return function(t){return e.h=r(t),e.c=i(t),e.l=o(t),e.opacity=a(t),e+""}}}(xi);function Yi(t){return function e(n){function r(e,r){var i=t((e=vi(e)).h,(r=vi(r)).h),o=ki(e.s,r.s),a=ki(e.l,r.l),s=ki(e.opacity,r.opacity);return function(t){return e.h=i(t),e.s=o(t),e.l=a(Math.pow(t,n)),e.opacity=s(t),e+""}}return n=+n,r.gamma=e,r}(1)}Yi(xi);var Wi=Yi(ki);function Xi(t,e){void 0===e&&(e=t,t=Oi);for(var n=0,r=e.length-1,i=e[0],o=new Array(r<0?0:r);n<r;)o[n]=t(i,i=e[++n]);return function(t){var e=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[e](t-e)}}function Ki(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n}var Zi,Gi,Ji=0,Qi=0,to=0,eo=1e3,no=0,ro=0,io=0,oo="object"==typeof performance&&performance.now?performance:Date,ao="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function so(){return ro||(ao(lo),ro=oo.now()+io)}function lo(){ro=0}function co(){this._call=this._time=this._next=null}function uo(t,e,n){var r=new co;return r.restart(t,e,n),r}function ho(){ro=(no=oo.now())+io,Ji=Qi=0;try{!function(){so(),++Ji;for(var t,e=Zi;e;)(t=ro-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ji}()}finally{Ji=0,function(){var t,e,n=Zi,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:Zi=e);Gi=t,po(r)}(),ro=0}}function fo(){var t=oo.now(),e=t-no;e>eo&&(io-=e,no=t)}function po(t){Ji||(Qi&&(Qi=clearTimeout(Qi)),t-ro>24?(t<1/0&&(Qi=setTimeout(ho,t-oo.now()-io)),to&&(to=clearInterval(to))):(to||(no=oo.now(),to=setInterval(fo,eo)),Ji=1,ao(ho)))}function go(t,e,n){var r=new co;return e=null==e?0:+e,r.restart((n=>{r.stop(),t(n+e)}),e,n),r}co.prototype=uo.prototype={constructor:co,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?so():+n)+(null==e?0:+e),this._next||Gi===this||(Gi?Gi._next=this:Zi=this,Gi=this),this._call=t,this._time=n,po()},stop:function(){this._call&&(this._call=null,this._time=1/0,po())}};var bo=Ve("start","end","cancel","interrupt"),vo=[],yo=0,mo=1,wo=2,xo=3,_o=4,ko=5,$o=6;function Eo(t,e,n,r,i,o){var a=t.__transition;if(a){if(n in a)return}else t.__transition={};!function(t,e,n){var r,i=t.__transition;function o(t){n.state=mo,n.timer.restart(a,n.delay,n.time),n.delay<=t&&a(t-n.delay)}function a(o){var c,u,d,h;if(n.state!==mo)return l();for(c in i)if((h=i[c]).name===n.name){if(h.state===xo)return go(a);h.state===_o?(h.state=$o,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=$o,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(go((function(){n.state===xo&&(n.state=_o,n.timer.restart(s,n.delay,n.time),s(o))})),n.state=wo,n.on.call("start",t,t.__data__,n.index,n.group),n.state===wo){for(n.state=xo,r=new Array(d=n.tween.length),c=0,u=-1;c<d;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++u]=h);r.length=u+1}}function s(e){for(var i=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(l),n.state=ko,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);n.state===ko&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){for(var r in n.state=$o,n.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=n,n.timer=uo(o,0,n.time)}(t,n,{name:e,index:r,group:i,on:bo,tween:vo,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:yo})}function Mo(t,e){var n=Ao(t,e);if(n.state>yo)throw new Error("too late; already scheduled");return n}function So(t,e){var n=Ao(t,e);if(n.state>xo)throw new Error("too late; already running");return n}function Ao(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Co(t,e){var n,r;return function(){var i=So(this,t),o=i.tween;if(o!==n)for(var a=0,s=(r=n=o).length;a<s;++a)if(r[a].name===e){(r=r.slice()).splice(a,1);break}i.tween=r}}function To(t,e,n){var r,i;if("function"!=typeof n)throw new Error;return function(){var o=So(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var s={name:e,value:n},l=0,c=i.length;l<c;++l)if(i[l].name===e){i[l]=s;break}l===c&&i.push(s)}o.tween=i}}function Do(t,e,n){var r=t._id;return t.each((function(){var t=So(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return Ao(t,r).value[e]}}function No(t,e){var n;return("number"==typeof e?Ti:e instanceof Mr?$i:(n=Mr(e))?(e=n,$i):Li)(t,e)}function Ro(t){return function(){this.removeAttribute(t)}}function Lo(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Oo(t,e,n){var r,i,o=n+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=e(r=a,n)}}function zo(t,e,n){var r,i,o=n+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=e(r=a,n)}}function Po(t,e,n){var r,i,o;return function(){var a,s,l=n(this);if(null!=l)return(a=this.getAttribute(t))===(s=l+"")?null:a===r&&s===i?o:(i=s,o=e(r=a,l));this.removeAttribute(t)}}function Io(t,e,n){var r,i,o;return function(){var a,s,l=n(this);if(null!=l)return(a=this.getAttributeNS(t.space,t.local))===(s=l+"")?null:a===r&&s===i?o:(i=s,o=e(r=a,l));this.removeAttributeNS(t.space,t.local)}}function jo(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&function(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}(t,i)),n}return i._value=e,i}function Uo(t,e){var n,r;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&function(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}(t,i)),n}return i._value=e,i}function Bo(t,e){return function(){Mo(this,t).delay=+e.apply(this,arguments)}}function Ho(t,e){return e=+e,function(){Mo(this,t).delay=e}}function Fo(t,e){return function(){So(this,t).duration=+e.apply(this,arguments)}}function Vo(t,e){return e=+e,function(){So(this,t).duration=e}}var qo=ar.prototype.constructor;function Yo(t){return function(){this.style.removeProperty(t)}}var Wo=0;function Xo(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function Ko(){return++Wo}var Zo=ar.prototype;Xo.prototype={constructor:Xo,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=en(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var s,l,c=r[a],u=c.length,d=o[a]=new Array(u),h=0;h<u;++h)(s=c[h])&&(l=t.call(s,s.__data__,h,c))&&("__data__"in s&&(l.__data__=s.__data__),d[h]=l,Eo(d[h],e,n,h,d,Ao(s,n)));return new Xo(o,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=rn(t));for(var r=this._groups,i=r.length,o=[],a=[],s=0;s<i;++s)for(var l,c=r[s],u=c.length,d=0;d<u;++d)if(l=c[d]){for(var h,f=t.call(l,l.__data__,d,c),p=Ao(l,n),g=0,b=f.length;g<b;++g)(h=f[g])&&Eo(h,e,n,g,f,p);o.push(f),a.push(l)}return new Xo(o,a,e,n)},selectChild:Zo.selectChild,selectChildren:Zo.selectChildren,filter:function(t){"function"!=typeof t&&(t=an(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a=e[i],s=a.length,l=r[i]=[],c=0;c<s;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&l.push(o);return new Xo(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new Array(r),s=0;s<o;++s)for(var l,c=e[s],u=n[s],d=c.length,h=a[s]=new Array(d),f=0;f<d;++f)(l=c[f]||u[f])&&(h[f]=l);for(;s<r;++s)a[s]=e[s];return new Xo(a,this._parents,this._name,this._id)},selection:function(){return new qo(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=Ko(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,s=r[o],l=s.length,c=0;c<l;++c)if(a=s[c]){var u=Ao(a,e);Eo(a,t,n,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Xo(r,this._parents,t,n)},call:Zo.call,nodes:Zo.nodes,node:Zo.node,size:Zo.size,empty:Zo.empty,each:Zo.each,on:function(t,e){var n=this._id;return arguments.length<2?Ao(this.node(),n).on.on(t):this.each(function(t,e,n){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?Mo:So;return function(){var a=o(this,t),s=a.on;s!==r&&(i=(r=s).copy()).on(e,n),a.on=i}}(n,t,e))},attr:function(t,e){var n=Ze(t),r="transform"===n?Fi:No;return this.attrTween(t,"function"==typeof e?(n.local?Io:Po)(n,r,Do(this,"attr."+t,e)):null==e?(n.local?Lo:Ro)(n):(n.local?zo:Oo)(n,r,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var r=Ze(t);return this.tween(n,(r.local?jo:Uo)(r,e))},style:function(t,e,n){var r="transform"==(t+="")?Hi:No;return null==e?this.styleTween(t,function(t,e){var n,r,i;return function(){var o=Cn(this,t),a=(this.style.removeProperty(t),Cn(this,t));return o===a?null:o===n&&a===r?i:i=e(n=o,r=a)}}(t,r)).on("end.style."+t,Yo(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var r,i,o;return function(){var a=Cn(this,t),s=n(this),l=s+"";return null==s&&(this.style.removeProperty(t),l=s=Cn(this,t)),a===l?null:a===r&&l===i?o:(i=l,o=e(r=a,s))}}(t,r,Do(this,"style."+t,e))).each(function(t,e){var n,r,i,o,a="style."+e,s="end."+a;return function(){var l=So(this,t),c=l.on,u=null==l.value[a]?o||(o=Yo(e)):void 0;c===n&&i===u||(r=(n=c).copy()).on(s,i=u),l.on=r}}(this._id,t)):this.styleTween(t,function(t,e,n){var r,i,o=n+"";return function(){var a=Cn(this,t);return a===o?null:a===r?i:i=e(r=a,n)}}(t,r,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;return this.tween(r,function(t,e,n){var r,i;function o(){var o=e.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,e,n){return function(r){this.style.setProperty(t,e.call(this,r),n)}}(t,o,n)),r}return o._value=e,o}(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(Do(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,n;function r(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&function(t){return function(e){this.textContent=t.call(this,e)}}(r)),e}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r,i=Ao(this.node(),n).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==e?Co:To)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Bo:Ho)(e,t)):Ao(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Fo:Vo)(e,t)):Ao(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){So(this,t).ease=e}}(e,t)):Ao(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;So(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,r=n._id,i=n.size();return new Promise((function(o,a){var s={value:a},l={value:function(){0==--i&&o()}};n.each((function(){var n=So(this,r),i=n.on;i!==t&&((e=(t=i).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),n.on=e})),0===i&&o()}))},[Symbol.iterator]:Zo[Symbol.iterator]};var Go={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function Jo(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}ar.prototype.interrupt=function(t){return this.each((function(){!function(t,e){var n,r,i,o=t.__transition,a=!0;if(o){for(i in e=null==e?null:e+"",o)(n=o[i]).name===e?(r=n.state>wo&&n.state<ko,n.state=$o,n.timer.stop(),n.on.call(r?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete o[i]):a=!1;a&&delete t.__transition}}(this,t)}))},ar.prototype.transition=function(t){var e,n;t instanceof Xo?(e=t._id,t=t._name):(e=Ko(),(n=Go).time=so(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,s=r[o],l=s.length,c=0;c<l;++c)(a=s[c])&&Eo(a,t,e,c,s,n||Jo(a,e));return new Xo(r,this._parents,t,e)};const Qo=Math.PI,ta=2*Qo,ea=1e-6,na=ta-ea;function ra(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}class ia{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?ra:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return ra;const n=10**e;return function(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=Math.round(arguments[e]*n)/n+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,i,o){this._append`C${+t},${+e},${+n},${+r},${this._x1=+i},${this._y1=+o}`}arcTo(t,e,n,r,i){if(t=+t,e=+e,n=+n,r=+r,(i=+i)<0)throw new Error(`negative radius: ${i}`);let o=this._x1,a=this._y1,s=n-t,l=r-e,c=o-t,u=a-e,d=c*c+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(d>ea)if(Math.abs(u*s-l*c)>ea&&i){let h=n-o,f=r-a,p=s*s+l*l,g=h*h+f*f,b=Math.sqrt(p),v=Math.sqrt(d),y=i*Math.tan((Qo-Math.acos((p+d-g)/(2*b*v)))/2),m=y/v,w=y/b;Math.abs(m-1)>ea&&this._append`L${t+m*c},${e+m*u}`,this._append`A${i},${i},0,0,${+(u*h>c*f)},${this._x1=t+w*s},${this._y1=e+w*l}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,n,r,i,o){if(t=+t,e=+e,o=!!o,(n=+n)<0)throw new Error(`negative radius: ${n}`);let a=n*Math.cos(r),s=n*Math.sin(r),l=t+a,c=e+s,u=1^o,d=o?r-i:i-r;null===this._x1?this._append`M${l},${c}`:(Math.abs(this._x1-l)>ea||Math.abs(this._y1-c)>ea)&&this._append`L${l},${c}`,n&&(d<0&&(d=d%ta+ta),d>na?this._append`A${n},${n},0,1,${u},${t-a},${e-s}A${n},${n},0,1,${u},${this._x1=l},${this._y1=c}`:d>ea&&this._append`A${n},${n},0,${+(d>=Qo)},${u},${this._x1=t+n*Math.cos(i)},${this._y1=e+n*Math.sin(i)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}function oa(t=3){return new ia(+t)}function aa(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function sa(t){return(t=aa(Math.abs(t)))?t[1]:NaN}var la,ca=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ua(t){if(!(e=ca.exec(t)))throw new Error("invalid format: "+t);var e;return new da({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function da(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function ha(t,e){var n=aa(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}ua.prototype=da.prototype,da.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var fa={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>ha(100*t,e),r:ha,s:function(t,e){var n=aa(t,e);if(!n)return t+"";var r=n[0],i=n[1],o=i-(la=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+aa(t,Math.max(0,e+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function pa(t){return t}var ga,ba,va,ya=Array.prototype.map,ma=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function wa(t){var e,n,r=void 0===t.grouping||void 0===t.thousands?pa:(e=ya.call(t.grouping,Number),n=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,s=e[0],l=0;i>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),o.push(t.substring(i-=s,i+s)),!((l+=s+1)>r));)s=e[a=(a+1)%e.length];return o.reverse().join(n)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?pa:function(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}(ya.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function d(t){var e=(t=ua(t)).fill,n=t.align,d=t.sign,h=t.symbol,f=t.zero,p=t.width,g=t.comma,b=t.precision,v=t.trim,y=t.type;"n"===y?(g=!0,y="g"):fa[y]||(void 0===b&&(b=12),v=!0,y="g"),(f||"0"===e&&"="===n)&&(f=!0,e="0",n="=");var m="$"===h?i:"#"===h&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",w="$"===h?o:/[%p]/.test(y)?l:"",x=fa[y],_=/[defgprs%]/.test(y);function k(t){var i,o,l,h=m,k=w;if("c"===y)k=x(t)+k,t="";else{var $=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:x(Math.abs(t),b),v&&(t=function(t){t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break;case"0":0===i&&(i=r),e=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),$&&0==+t&&"+"!==d&&($=!1),h=($?"("===d?d:c:"-"===d||"("===d?"":d)+h,k=("s"===y?ma[8+la/3]:"")+k+($&&"("===d?")":""),_)for(i=-1,o=t.length;++i<o;)if(48>(l=t.charCodeAt(i))||l>57){k=(46===l?a+t.slice(i+1):t.slice(i))+k,t=t.slice(0,i);break}}g&&!f&&(t=r(t,1/0));var E=h.length+t.length+k.length,M=E<p?new Array(p-E+1).join(e):"";switch(g&&f&&(t=r(M+t,M.length?p-k.length:1/0),M=""),n){case"<":t=h+t+k+M;break;case"=":t=h+M+t+k;break;case"^":t=M.slice(0,E=M.length>>1)+h+t+k+M.slice(E);break;default:t=M+h+t+k}return s(t)}return b=void 0===b?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),k.toString=function(){return t+""},k}return{format:d,formatPrefix:function(t,e){var n=d(((t=ua(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(sa(e)/3))),i=Math.pow(10,-r),o=ma[8+r/3];return function(t){return n(i*t)+o}}}}ga=wa({thousands:",",grouping:[3],currency:["$",""]}),ba=ga.format,va=ga.formatPrefix;var xa=1e-6,_a=1e-12,ka=Math.PI,$a=ka/2,Ea=ka/4,Ma=2*ka,Sa=180/ka,Aa=ka/180,Ca=Math.abs,Ta=Math.atan,Da=Math.atan2,Na=Math.cos,Ra=Math.exp,La=Math.log,Oa=Math.pow,za=Math.sin,Pa=Math.sign||function(t){return t>0?1:t<0?-1:0},Ia=Math.sqrt,ja=Math.tan;function Ua(t){return t>1?0:t<-1?ka:Math.acos(t)}function Ba(t){return t>1?$a:t<-1?-$a:Math.asin(t)}function Ha(){}function Fa(t,e){t&&qa.hasOwnProperty(t.type)&&qa[t.type](t,e)}var Va={Feature:function(t,e){Fa(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,i=n.length;++r<i;)Fa(n[r].geometry,e)}},qa={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){Ya(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)Ya(n[r],e,0)},Polygon:function(t,e){Wa(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)Wa(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,i=n.length;++r<i;)Fa(n[r],e)}};function Ya(t,e,n){var r,i=-1,o=t.length-n;for(e.lineStart();++i<o;)r=t[i],e.point(r[0],r[1],r[2]);e.lineEnd()}function Wa(t,e){var n=-1,r=t.length;for(e.polygonStart();++n<r;)Ya(t[n],e,1);e.polygonEnd()}function Xa(t,e){t&&Va.hasOwnProperty(t.type)?Va[t.type](t,e):Fa(t,e)}function Ka(t){return[Da(t[1],t[0]),Ba(t[2])]}function Za(t){var e=t[0],n=t[1],r=Na(n);return[r*Na(e),r*za(e),za(n)]}function Ga(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Ja(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function Qa(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function ts(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function es(t){var e=Ia(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function ns(t,e){function n(n,r){return n=t(n,r),e(n[0],n[1])}return t.invert&&e.invert&&(n.invert=function(n,r){return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n}function rs(t,e){return Ca(t)>ka&&(t-=Math.round(t/Ma)*Ma),[t,e]}function is(t,e,n){return(t%=Ma)?e||n?ns(as(t),ss(e,n)):as(t):e||n?ss(e,n):rs}function os(t){return function(e,n){return Ca(e+=t)>ka&&(e-=Math.round(e/Ma)*Ma),[e,n]}}function as(t){var e=os(t);return e.invert=os(-t),e}function ss(t,e){var n=Na(t),r=za(t),i=Na(e),o=za(e);function a(t,e){var a=Na(e),s=Na(t)*a,l=za(t)*a,c=za(e),u=c*n+s*r;return[Da(l*i-u*o,s*n-c*r),Ba(u*i+l*o)]}return a.invert=function(t,e){var a=Na(e),s=Na(t)*a,l=za(t)*a,c=za(e),u=c*i-l*o;return[Da(l*i+c*o,s*n+u*r),Ba(u*n-s*r)]},a}function ls(t,e){(e=Za(e))[0]-=t,es(e);var n=Ua(-e[1]);return((-e[2]<0?-n:n)+Ma-xa)%Ma}function cs(){var t,e=[];return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){e.push(t=[])},lineEnd:Ha,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function us(t,e){return Ca(t[0]-e[0])<xa&&Ca(t[1]-e[1])<xa}function ds(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function hs(t,e,n,r,i){var o,a,s=[],l=[];if(t.forEach((function(t){if(!((e=t.length-1)<=0)){var e,n,r=t[0],a=t[e];if(us(r,a)){if(!r[2]&&!a[2]){for(i.lineStart(),o=0;o<e;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a[0]+=2*xa}s.push(n=new ds(r,t,null,!0)),l.push(n.o=new ds(r,null,n,!1)),s.push(n=new ds(a,t,null,!1)),l.push(n.o=new ds(a,null,n,!0))}})),s.length){for(l.sort(e),fs(s),fs(l),o=0,a=l.length;o<a;++o)l[o].e=n=!n;for(var c,u,d=s[0];;){for(var h=d,f=!0;h.v;)if((h=h.n)===d)return;c=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(f)for(o=0,a=c.length;o<a;++o)i.point((u=c[o])[0],u[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(f)for(c=h.p.z,o=c.length-1;o>=0;--o)i.point((u=c[o])[0],u[1]);else r(h.x,h.p.x,-1,i);h=h.p}c=(h=h.o).z,f=!f}while(!h.v);i.lineEnd()}}}function fs(t){if(e=t.length){for(var e,n,r=0,i=t[0];++r<e;)i.n=n=t[r],n.p=i,i=n;i.n=n=t[0],n.p=i}}function ps(t){return Ca(t[0])<=ka?t[0]:Pa(t[0])*((Ca(t[0])+ka)%Ma-ka)}function gs(t,e,n,r){return function(i){var o,a,s,l=e(i),c=cs(),u=e(c),d=!1,h={point:f,lineStart:g,lineEnd:b,polygonStart:function(){h.point=v,h.lineStart=y,h.lineEnd=m,a=[],o=[]},polygonEnd:function(){h.point=f,h.lineStart=g,h.lineEnd=b,a=Te(a);var t=function(t,e){var n=ps(e),r=e[1],i=za(r),o=[za(n),-Na(n),0],a=0,s=0,l=new Wt;1===i?r=$a+xa:-1===i&&(r=-$a-xa);for(var c=0,u=t.length;c<u;++c)if(h=(d=t[c]).length)for(var d,h,f=d[h-1],p=ps(f),g=f[1]/2+Ea,b=za(g),v=Na(g),y=0;y<h;++y,p=w,b=_,v=k,f=m){var m=d[y],w=ps(m),x=m[1]/2+Ea,_=za(x),k=Na(x),$=w-p,E=$>=0?1:-1,M=E*$,S=M>ka,A=b*_;if(l.add(Da(A*E*za(M),v*k+A*Na(M))),a+=S?$+E*Ma:$,S^p>=n^w>=n){var C=Ja(Za(f),Za(m));es(C);var T=Ja(o,C);es(T);var D=(S^$>=0?-1:1)*Ba(T[2]);(r>D||r===D&&(C[0]||C[1]))&&(s+=S^$>=0?1:-1)}}return(a<-xa||a<xa&&l<-_a)^1&s}(o,r);a.length?(d||(i.polygonStart(),d=!0),hs(a,vs,t,n,i)):t&&(d||(i.polygonStart(),d=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),d&&(i.polygonEnd(),d=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function f(e,n){t(e,n)&&i.point(e,n)}function p(t,e){l.point(t,e)}function g(){h.point=p,l.lineStart()}function b(){h.point=f,l.lineEnd()}function v(t,e){s.push([t,e]),u.point(t,e)}function y(){u.lineStart(),s=[]}function m(){v(s[0][0],s[0][1]),u.lineEnd();var t,e,n,r,l=u.clean(),h=c.result(),f=h.length;if(s.pop(),o.push(s),s=null,f)if(1&l){if((e=(n=h[0]).length-1)>0){for(d||(i.polygonStart(),d=!0),i.lineStart(),t=0;t<e;++t)i.point((r=n[t])[0],r[1]);i.lineEnd()}}else f>1&&2&l&&h.push(h.pop().concat(h.shift())),a.push(h.filter(bs))}return h}}function bs(t){return t.length>1}function vs(t,e){return((t=t.x)[0]<0?t[1]-$a-xa:$a-t[1])-((e=e.x)[0]<0?e[1]-$a-xa:$a-e[1])}rs.invert=rs;var ys=gs((function(){return!0}),(function(t){var e,n=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),e=1},point:function(o,a){var s=o>0?ka:-ka,l=Ca(o-n);Ca(l-ka)<xa?(t.point(n,r=(r+a)/2>0?$a:-$a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(s,r),t.point(o,r),e=0):i!==s&&l>=ka&&(Ca(n-i)<xa&&(n-=i*xa),Ca(o-s)<xa&&(o-=s*xa),r=function(t,e,n,r){var i,o,a=za(t-n);return Ca(a)>xa?Ta((za(e)*(o=Na(r))*za(n)-za(r)*(i=Na(e))*za(t))/(i*o*a)):(e+r)/2}(n,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(s,r),e=0),t.point(n=o,r=a),i=s},lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}}),(function(t,e,n,r){var i;if(null==t)i=n*$a,r.point(-ka,i),r.point(0,i),r.point(ka,i),r.point(ka,0),r.point(ka,-i),r.point(0,-i),r.point(-ka,-i),r.point(-ka,0),r.point(-ka,i);else if(Ca(t[0]-e[0])>xa){var o=t[0]<e[0]?ka:-ka;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(e[0],e[1])}),[-ka,-$a]);function ms(t){var e=Na(t),n=2*Aa,r=e>0,i=Ca(e)>xa;function o(t,n){return Na(t)*Na(n)>e}function a(t,n,r){var i=[1,0,0],o=Ja(Za(t),Za(n)),a=Ga(o,o),s=o[0],l=a-s*s;if(!l)return!r&&t;var c=e*a/l,u=-e*s/l,d=Ja(i,o),h=ts(i,c);Qa(h,ts(o,u));var f=d,p=Ga(h,f),g=Ga(f,f),b=p*p-g*(Ga(h,h)-1);if(!(b<0)){var v=Ia(b),y=ts(f,(-p-v)/g);if(Qa(y,h),y=Ka(y),!r)return y;var m,w=t[0],x=n[0],_=t[1],k=n[1];x<w&&(m=w,w=x,x=m);var $=x-w,E=Ca($-ka)<xa;if(!E&&k<_&&(m=_,_=k,k=m),E||$<xa?E?_+k>0^y[1]<(Ca(y[0]-w)<xa?_:k):_<=y[1]&&y[1]<=k:$>ka^(w<=y[0]&&y[0]<=x)){var M=ts(f,(-p+v)/g);return Qa(M,h),[y,Ka(M)]}}}function s(e,n){var i=r?t:ka-t,o=0;return e<-i?o|=1:e>i&&(o|=2),n<-i?o|=4:n>i&&(o|=8),o}return gs(o,(function(t){var e,n,l,c,u;return{lineStart:function(){c=l=!1,u=1},point:function(d,h){var f,p=[d,h],g=o(d,h),b=r?g?0:s(d,h):g?s(d+(d<0?ka:-ka),h):0;if(!e&&(c=l=g)&&t.lineStart(),g!==l&&(!(f=a(e,p))||us(e,f)||us(p,f))&&(p[2]=1),g!==l)u=0,g?(t.lineStart(),f=a(p,e),t.point(f[0],f[1])):(f=a(e,p),t.point(f[0],f[1],2),t.lineEnd()),e=f;else if(i&&e&&r^g){var v;b&n||!(v=a(p,e,!0))||(u=0,r?(t.lineStart(),t.point(v[0][0],v[0][1]),t.point(v[1][0],v[1][1]),t.lineEnd()):(t.point(v[1][0],v[1][1]),t.lineEnd(),t.lineStart(),t.point(v[0][0],v[0][1],3)))}!g||e&&us(e,p)||t.point(p[0],p[1]),e=p,l=g,n=b},lineEnd:function(){l&&t.lineEnd(),e=null},clean:function(){return u|(c&&l)<<1}}}),(function(e,r,i,o){!function(t,e,n,r,i,o){if(n){var a=Na(e),s=za(e),l=r*n;null==i?(i=e+r*Ma,o=e-l/2):(i=ls(a,i),o=ls(a,o),(r>0?i<o:i>o)&&(i+=r*Ma));for(var c,u=i;r>0?u>o:u<o;u-=l)c=Ka([a,-s*Na(u),-s*za(u)]),t.point(c[0],c[1])}}(o,t,n,i,e,r)}),r?[0,-t]:[-ka,t-ka])}var ws=1e9,xs=-ws;function _s(t,e,n,r){function i(i,o){return t<=i&&i<=n&&e<=o&&o<=r}function o(i,o,s,c){var u=0,d=0;if(null==i||(u=a(i,s))!==(d=a(o,s))||l(i,o)<0^s>0)do{c.point(0===u||3===u?t:n,u>1?r:e)}while((u=(u+s+4)%4)!==d);else c.point(o[0],o[1])}function a(r,i){return Ca(r[0]-t)<xa?i>0?0:3:Ca(r[0]-n)<xa?i>0?2:1:Ca(r[1]-e)<xa?i>0?1:0:i>0?3:2}function s(t,e){return l(t.x,e.x)}function l(t,e){var n=a(t,1),r=a(e,1);return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}return function(a){var l,c,u,d,h,f,p,g,b,v,y,m=a,w=cs(),x={point:_,lineStart:function(){x.point=k,c&&c.push(u=[]);v=!0,b=!1,p=g=NaN},lineEnd:function(){l&&(k(d,h),f&&b&&w.rejoin(),l.push(w.result()));x.point=_,b&&m.lineEnd()},polygonStart:function(){m=w,l=[],c=[],y=!0},polygonEnd:function(){var e=function(){for(var e=0,n=0,i=c.length;n<i;++n)for(var o,a,s=c[n],l=1,u=s.length,d=s[0],h=d[0],f=d[1];l<u;++l)o=h,a=f,h=(d=s[l])[0],f=d[1],a<=r?f>r&&(h-o)*(r-a)>(f-a)*(t-o)&&++e:f<=r&&(h-o)*(r-a)<(f-a)*(t-o)&&--e;return e}(),n=y&&e,i=(l=Te(l)).length;(n||i)&&(a.polygonStart(),n&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&hs(l,s,e,o,a),a.polygonEnd());m=a,l=c=u=null}};function _(t,e){i(t,e)&&m.point(t,e)}function k(o,a){var s=i(o,a);if(c&&u.push([o,a]),v)d=o,h=a,f=s,v=!1,s&&(m.lineStart(),m.point(o,a));else if(s&&b)m.point(o,a);else{var l=[p=Math.max(xs,Math.min(ws,p)),g=Math.max(xs,Math.min(ws,g))],w=[o=Math.max(xs,Math.min(ws,o)),a=Math.max(xs,Math.min(ws,a))];!function(t,e,n,r,i,o){var a,s=t[0],l=t[1],c=0,u=1,d=e[0]-s,h=e[1]-l;if(a=n-s,d||!(a>0)){if(a/=d,d<0){if(a<c)return;a<u&&(u=a)}else if(d>0){if(a>u)return;a>c&&(c=a)}if(a=i-s,d||!(a<0)){if(a/=d,d<0){if(a>u)return;a>c&&(c=a)}else if(d>0){if(a<c)return;a<u&&(u=a)}if(a=r-l,h||!(a>0)){if(a/=h,h<0){if(a<c)return;a<u&&(u=a)}else if(h>0){if(a>u)return;a>c&&(c=a)}if(a=o-l,h||!(a<0)){if(a/=h,h<0){if(a>u)return;a>c&&(c=a)}else if(h>0){if(a<c)return;a<u&&(u=a)}return c>0&&(t[0]=s+c*d,t[1]=l+c*h),u<1&&(e[0]=s+u*d,e[1]=l+u*h),!0}}}}}(l,w,t,e,n,r)?s&&(m.lineStart(),m.point(o,a),y=!1):(b||(m.lineStart(),m.point(l[0],l[1])),m.point(w[0],w[1]),s||m.lineEnd(),y=!1)}p=o,g=a,b=s}return x}}var ks,$s,Es,Ms,Ss=t=>t,As=new Wt,Cs=new Wt,Ts={point:Ha,lineStart:Ha,lineEnd:Ha,polygonStart:function(){Ts.lineStart=Ds,Ts.lineEnd=Ls},polygonEnd:function(){Ts.lineStart=Ts.lineEnd=Ts.point=Ha,As.add(Ca(Cs)),Cs=new Wt},result:function(){var t=As/2;return As=new Wt,t}};function Ds(){Ts.point=Ns}function Ns(t,e){Ts.point=Rs,ks=Es=t,$s=Ms=e}function Rs(t,e){Cs.add(Ms*t-Es*e),Es=t,Ms=e}function Ls(){Rs(ks,$s)}var Os=1/0,zs=Os,Ps=-Os,Is=Ps,js={point:function(t,e){t<Os&&(Os=t);t>Ps&&(Ps=t);e<zs&&(zs=e);e>Is&&(Is=e)},lineStart:Ha,lineEnd:Ha,polygonStart:Ha,polygonEnd:Ha,result:function(){var t=[[Os,zs],[Ps,Is]];return Ps=Is=-(zs=Os=1/0),t}};var Us,Bs,Hs,Fs,Vs=0,qs=0,Ys=0,Ws=0,Xs=0,Ks=0,Zs=0,Gs=0,Js=0,Qs={point:tl,lineStart:el,lineEnd:il,polygonStart:function(){Qs.lineStart=ol,Qs.lineEnd=al},polygonEnd:function(){Qs.point=tl,Qs.lineStart=el,Qs.lineEnd=il},result:function(){var t=Js?[Zs/Js,Gs/Js]:Ks?[Ws/Ks,Xs/Ks]:Ys?[Vs/Ys,qs/Ys]:[NaN,NaN];return Vs=qs=Ys=Ws=Xs=Ks=Zs=Gs=Js=0,t}};function tl(t,e){Vs+=t,qs+=e,++Ys}function el(){Qs.point=nl}function nl(t,e){Qs.point=rl,tl(Hs=t,Fs=e)}function rl(t,e){var n=t-Hs,r=e-Fs,i=Ia(n*n+r*r);Ws+=i*(Hs+t)/2,Xs+=i*(Fs+e)/2,Ks+=i,tl(Hs=t,Fs=e)}function il(){Qs.point=tl}function ol(){Qs.point=sl}function al(){ll(Us,Bs)}function sl(t,e){Qs.point=ll,tl(Us=Hs=t,Bs=Fs=e)}function ll(t,e){var n=t-Hs,r=e-Fs,i=Ia(n*n+r*r);Ws+=i*(Hs+t)/2,Xs+=i*(Fs+e)/2,Ks+=i,Zs+=(i=Fs*t-Hs*e)*(Hs+t),Gs+=i*(Fs+e),Js+=3*i,tl(Hs=t,Fs=e)}function cl(t){this._context=t}cl.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Ma)}},result:Ha};var ul,dl,hl,fl,pl,gl=new Wt,bl={point:Ha,lineStart:function(){bl.point=vl},lineEnd:function(){ul&&yl(dl,hl),bl.point=Ha},polygonStart:function(){ul=!0},polygonEnd:function(){ul=null},result:function(){var t=+gl;return gl=new Wt,t}};function vl(t,e){bl.point=yl,dl=fl=t,hl=pl=e}function yl(t,e){fl-=t,pl-=e,gl.add(Ia(fl*fl+pl*pl)),fl=t,pl=e}let ml,wl,xl,_l;class kl{constructor(t){this._append=null==t?$l:function(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return $l;if(e!==ml){const t=10**e;ml=e,wl=function(e){let n=1;this._+=e[0];for(const r=e.length;n<r;++n)this._+=Math.round(arguments[n]*t)/t+e[n]}}return wl}(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:this._append`M${t},${e}`,this._point=1;break;case 1:this._append`L${t},${e}`;break;default:if(this._append`M${t},${e}`,this._radius!==xl||this._append!==wl){const t=this._radius,e=this._;this._="",this._append`m0,${t}a${t},${t} 0 1,1 0,${-2*t}a${t},${t} 0 1,1 0,${2*t}z`,xl=t,wl=this._append,_l=this._,this._=e}this._+=_l}}result(){const t=this._;return this._="",t.length?t:null}}function $l(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function El(t,e){let n,r,i=3,o=4.5;function a(t){return t&&("function"==typeof o&&r.pointRadius(+o.apply(this,arguments)),Xa(t,n(r))),r.result()}return a.area=function(t){return Xa(t,n(Ts)),Ts.result()},a.measure=function(t){return Xa(t,n(bl)),bl.result()},a.bounds=function(t){return Xa(t,n(js)),js.result()},a.centroid=function(t){return Xa(t,n(Qs)),Qs.result()},a.projection=function(e){return arguments.length?(n=null==e?(t=null,Ss):(t=e).stream,a):t},a.context=function(t){return arguments.length?(r=null==t?(e=null,new kl(i)):new cl(e=t),"function"!=typeof o&&r.pointRadius(o),a):e},a.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(r.pointRadius(+t),+t),a):o},a.digits=function(t){if(!arguments.length)return i;if(null==t)i=null;else{const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);i=e}return null===e&&(r=new kl(i)),a},a.projection(t).digits(i).context(e)}function Ml(t){return{stream:Sl(t)}}function Sl(t){return function(e){var n=new Al;for(var r in t)n[r]=t[r];return n.stream=e,n}}function Al(){}function Cl(t,e,n){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Xa(n,t.stream(js)),e(js.result()),null!=r&&t.clipExtent(r),t}function Tl(t,e,n){return Cl(t,(function(n){var r=e[1][0]-e[0][0],i=e[1][1]-e[0][1],o=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),a=+e[0][0]+(r-o*(n[1][0]+n[0][0]))/2,s=+e[0][1]+(i-o*(n[1][1]+n[0][1]))/2;t.scale(150*o).translate([a,s])}),n)}function Dl(t,e,n){return Tl(t,[[0,0],e],n)}function Nl(t,e,n){return Cl(t,(function(n){var r=+e,i=r/(n[1][0]-n[0][0]),o=(r-i*(n[1][0]+n[0][0]))/2,a=-i*n[0][1];t.scale(150*i).translate([o,a])}),n)}function Rl(t,e,n){return Cl(t,(function(n){var r=+e,i=r/(n[1][1]-n[0][1]),o=-i*n[0][0],a=(r-i*(n[1][1]+n[0][1]))/2;t.scale(150*i).translate([o,a])}),n)}Al.prototype={constructor:Al,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Ll=16,Ol=Na(30*Aa);function zl(t,e){return+e?function(t,e){function n(r,i,o,a,s,l,c,u,d,h,f,p,g,b){var v=c-r,y=u-i,m=v*v+y*y;if(m>4*e&&g--){var w=a+h,x=s+f,_=l+p,k=Ia(w*w+x*x+_*_),$=Ba(_/=k),E=Ca(Ca(_)-1)<xa||Ca(o-d)<xa?(o+d)/2:Da(x,w),M=t(E,$),S=M[0],A=M[1],C=S-r,T=A-i,D=y*C-v*T;(D*D/m>e||Ca((v*C+y*T)/m-.5)>.3||a*h+s*f+l*p<Ol)&&(n(r,i,o,a,s,l,S,A,E,w/=k,x/=k,_,g,b),b.point(S,A),n(S,A,E,w,x,_,c,u,d,h,f,p,g,b))}}return function(e){var r,i,o,a,s,l,c,u,d,h,f,p,g={point:b,lineStart:v,lineEnd:m,polygonStart:function(){e.polygonStart(),g.lineStart=w},polygonEnd:function(){e.polygonEnd(),g.lineStart=v}};function b(n,r){n=t(n,r),e.point(n[0],n[1])}function v(){u=NaN,g.point=y,e.lineStart()}function y(r,i){var o=Za([r,i]),a=t(r,i);n(u,d,c,h,f,p,u=a[0],d=a[1],c=r,h=o[0],f=o[1],p=o[2],Ll,e),e.point(u,d)}function m(){g.point=b,e.lineEnd()}function w(){v(),g.point=x,g.lineEnd=_}function x(t,e){y(r=t,e),i=u,o=d,a=h,s=f,l=p,g.point=y}function _(){n(u,d,c,h,f,p,i,o,r,a,s,l,Ll,e),g.lineEnd=m,m()}return g}}(t,e):function(t){return Sl({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)}var Pl=Sl({point:function(t,e){this.stream.point(t*Aa,e*Aa)}});function Il(t,e,n,r,i,o){if(!o)return function(t,e,n,r,i){function o(o,a){return[e+t*(o*=r),n-t*(a*=i)]}return o.invert=function(o,a){return[(o-e)/t*r,(n-a)/t*i]},o}(t,e,n,r,i);var a=Na(o),s=za(o),l=a*t,c=s*t,u=a/t,d=s/t,h=(s*n-a*e)/t,f=(s*e+a*n)/t;function p(t,o){return[l*(t*=r)-c*(o*=i)+e,n-c*t-l*o]}return p.invert=function(t,e){return[r*(u*t-d*e+h),i*(f-d*t-u*e)]},p}function jl(t){return Ul((function(){return t}))()}function Ul(t){var e,n,r,i,o,a,s,l,c,u,d=150,h=480,f=250,p=0,g=0,b=0,v=0,y=0,m=0,w=1,x=1,_=null,k=ys,$=null,E=Ss,M=.5;function S(t){return l(t[0]*Aa,t[1]*Aa)}function A(t){return(t=l.invert(t[0],t[1]))&&[t[0]*Sa,t[1]*Sa]}function C(){var t=Il(d,0,0,w,x,m).apply(null,e(p,g)),r=Il(d,h-t[0],f-t[1],w,x,m);return n=is(b,v,y),s=ns(e,r),l=ns(n,s),a=zl(s,M),T()}function T(){return c=u=null,S}return S.stream=function(t){return c&&u===t?c:c=Pl(function(t){return Sl({point:function(e,n){var r=t(e,n);return this.stream.point(r[0],r[1])}})}(n)(k(a(E(u=t)))))},S.preclip=function(t){return arguments.length?(k=t,_=void 0,T()):k},S.postclip=function(t){return arguments.length?(E=t,$=r=i=o=null,T()):E},S.clipAngle=function(t){return arguments.length?(k=+t?ms(_=t*Aa):(_=null,ys),T()):_*Sa},S.clipExtent=function(t){return arguments.length?(E=null==t?($=r=i=o=null,Ss):_s($=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),T()):null==$?null:[[$,r],[i,o]]},S.scale=function(t){return arguments.length?(d=+t,C()):d},S.translate=function(t){return arguments.length?(h=+t[0],f=+t[1],C()):[h,f]},S.center=function(t){return arguments.length?(p=t[0]%360*Aa,g=t[1]%360*Aa,C()):[p*Sa,g*Sa]},S.rotate=function(t){return arguments.length?(b=t[0]%360*Aa,v=t[1]%360*Aa,y=t.length>2?t[2]%360*Aa:0,C()):[b*Sa,v*Sa,y*Sa]},S.angle=function(t){return arguments.length?(m=t%360*Aa,C()):m*Sa},S.reflectX=function(t){return arguments.length?(w=t?-1:1,C()):w<0},S.reflectY=function(t){return arguments.length?(x=t?-1:1,C()):x<0},S.precision=function(t){return arguments.length?(a=zl(s,M=t*t),T()):Ia(M)},S.fitExtent=function(t,e){return Tl(S,t,e)},S.fitSize=function(t,e){return Dl(S,t,e)},S.fitWidth=function(t,e){return Nl(S,t,e)},S.fitHeight=function(t,e){return Rl(S,t,e)},function(){return e=t.apply(this,arguments),S.invert=e.invert&&A,C()}}function Bl(t){var e=0,n=ka/3,r=Ul(t),i=r(e,n);return i.parallels=function(t){return arguments.length?r(e=t[0]*Aa,n=t[1]*Aa):[e*Sa,n*Sa]},i}function Hl(t,e){var n=za(t),r=(n+za(e))/2;if(Ca(r)<xa)return function(t){var e=Na(t);function n(t,n){return[t*e,za(n)/e]}return n.invert=function(t,n){return[t/e,Ba(n*e)]},n}(t);var i=1+n*(2*r-n),o=Ia(i)/r;function a(t,e){var n=Ia(i-2*r*za(e))/r;return[n*za(t*=r),o-n*Na(t)]}return a.invert=function(t,e){var n=o-e,a=Da(t,Ca(n))*Pa(n);return n*r<0&&(a-=ka*Pa(t)*Pa(n)),[a/r,Ba((i-(t*t+n*n)*r*r)/(2*r))]},a}function Fl(){return Bl(Hl).scale(155.424).center([0,33.6442])}function Vl(){return Fl().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function ql(){var t,e,n,r,i,o,a=Vl(),s=Fl().rotate([154,0]).center([-2,58.5]).parallels([55,65]),l=Fl().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(t,e){o=[t,e]}};function u(t){var e=t[0],a=t[1];return o=null,n.point(e,a),o||(r.point(e,a),o)||(i.point(e,a),o)}function d(){return t=e=null,u}return u.invert=function(t){var e=a.scale(),n=a.translate(),r=(t[0]-n[0])/e,i=(t[1]-n[1])/e;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?l:a).invert(t)},u.stream=function(n){return t&&e===n?t:t=function(t){var e=t.length;return{point:function(n,r){for(var i=-1;++i<e;)t[i].point(n,r)},sphere:function(){for(var n=-1;++n<e;)t[n].sphere()},lineStart:function(){for(var n=-1;++n<e;)t[n].lineStart()},lineEnd:function(){for(var n=-1;++n<e;)t[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<e;)t[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<e;)t[n].polygonEnd()}}}([a.stream(e=n),s.stream(n),l.stream(n)])},u.precision=function(t){return arguments.length?(a.precision(t),s.precision(t),l.precision(t),d()):a.precision()},u.scale=function(t){return arguments.length?(a.scale(t),s.scale(.35*t),l.scale(t),u.translate(a.translate())):a.scale()},u.translate=function(t){if(!arguments.length)return a.translate();var e=a.scale(),o=+t[0],u=+t[1];return n=a.translate(t).clipExtent([[o-.455*e,u-.238*e],[o+.455*e,u+.238*e]]).stream(c),r=s.translate([o-.307*e,u+.201*e]).clipExtent([[o-.425*e+xa,u+.12*e+xa],[o-.214*e-xa,u+.234*e-xa]]).stream(c),i=l.translate([o-.205*e,u+.212*e]).clipExtent([[o-.214*e+xa,u+.166*e+xa],[o-.115*e-xa,u+.234*e-xa]]).stream(c),d()},u.fitExtent=function(t,e){return Tl(u,t,e)},u.fitSize=function(t,e){return Dl(u,t,e)},u.fitWidth=function(t,e){return Nl(u,t,e)},u.fitHeight=function(t,e){return Rl(u,t,e)},u.scale(1070)}function Yl(t){return function(e,n){var r=Na(e),i=Na(n),o=t(r*i);return o===1/0?[2,0]:[o*i*za(e),o*za(n)]}}function Wl(t){return function(e,n){var r=Ia(e*e+n*n),i=t(r),o=za(i),a=Na(i);return[Da(e*o,r*a),Ba(r&&n*o/r)]}}var Xl=Yl((function(t){return Ia(2/(1+t))}));function Kl(){return jl(Xl).scale(124.75).clipAngle(179.999)}Xl.invert=Wl((function(t){return 2*Ba(t/2)}));var Zl=Yl((function(t){return(t=Ua(t))&&t/za(t)}));function Gl(){return jl(Zl).scale(79.4188).clipAngle(179.999)}function Jl(t,e){return[t,La(ja(($a+e)/2))]}function Ql(){return tc(Jl).scale(961/Ma)}function tc(t){var e,n,r,i=jl(t),o=i.center,a=i.scale,s=i.translate,l=i.clipExtent,c=null;function u(){var o=ka*a(),s=i(function(t){function e(e){return(e=t(e[0]*Aa,e[1]*Aa))[0]*=Sa,e[1]*=Sa,e}return t=is(t[0]*Aa,t[1]*Aa,t.length>2?t[2]*Aa:0),e.invert=function(e){return(e=t.invert(e[0]*Aa,e[1]*Aa))[0]*=Sa,e[1]*=Sa,e},e}(i.rotate()).invert([0,0]));return l(null==c?[[s[0]-o,s[1]-o],[s[0]+o,s[1]+o]]:t===Jl?[[Math.max(s[0]-o,c),e],[Math.min(s[0]+o,n),r]]:[[c,Math.max(s[1]-o,e)],[n,Math.min(s[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),u()):a()},i.translate=function(t){return arguments.length?(s(t),u()):s()},i.center=function(t){return arguments.length?(o(t),u()):o()},i.clipExtent=function(t){return arguments.length?(null==t?c=e=n=r=null:(c=+t[0][0],e=+t[0][1],n=+t[1][0],r=+t[1][1]),u()):null==c?null:[[c,e],[n,r]]},u()}function ec(t){return ja(($a+t)/2)}function nc(t,e){var n=Na(t),r=t===e?za(t):La(n/Na(e))/La(ec(e)/ec(t)),i=n*Oa(ec(t),r)/r;if(!r)return Jl;function o(t,e){i>0?e<-$a+xa&&(e=-$a+xa):e>$a-xa&&(e=$a-xa);var n=i/Oa(ec(e),r);return[n*za(r*t),i-n*Na(r*t)]}return o.invert=function(t,e){var n=i-e,o=Pa(r)*Ia(t*t+n*n),a=Da(t,Ca(n))*Pa(n);return n*r<0&&(a-=ka*Pa(t)*Pa(n)),[a/r,2*Ta(Oa(i/o,1/r))-$a]},o}function rc(){return Bl(nc).scale(109.5).parallels([30,30])}function ic(t,e){return[t,e]}function oc(){return jl(ic).scale(152.63)}function ac(t,e){var n=Na(t),r=t===e?za(t):(n-Na(e))/(e-t),i=n/r+t;if(Ca(r)<xa)return ic;function o(t,e){var n=i-e,o=r*t;return[n*za(o),i-n*Na(o)]}return o.invert=function(t,e){var n=i-e,o=Da(t,Ca(n))*Pa(n);return n*r<0&&(o-=ka*Pa(t)*Pa(n)),[o/r,i-Pa(r)*Ia(t*t+n*n)]},o}function sc(){return Bl(ac).scale(131.154).center([0,13.9389])}Zl.invert=Wl((function(t){return t})),Jl.invert=function(t,e){return[t,2*Ta(Ra(e))-$a]},ic.invert=ic;var lc=1.340264,cc=-.081106,uc=893e-6,dc=.003796,hc=Ia(3)/2;function fc(t,e){var n=Ba(hc*za(e)),r=n*n,i=r*r*r;return[t*Na(n)/(hc*(lc+3*cc*r+i*(7*uc+9*dc*r))),n*(lc+cc*r+i*(uc+dc*r))]}function pc(){return jl(fc).scale(177.158)}function gc(t,e){var n=Na(e),r=Na(t)*n;return[n*za(t)/r,za(e)/r]}function bc(){return jl(gc).scale(144.049).clipAngle(60)}function vc(t,e){return[Na(e)*za(t),za(e)]}function yc(){return jl(vc).scale(249.5).clipAngle(90+xa)}function mc(t,e){var n=Na(e),r=1+Na(t)*n;return[n*za(t)/r,za(e)/r]}function wc(){return jl(mc).scale(250).clipAngle(142)}function xc(t,e){return[La(ja(($a+e)/2)),-t]}function _c(){var t=tc(xc),e=t.center,n=t.rotate;return t.center=function(t){return arguments.length?e([-t[1],t[0]]):[(t=e())[1],-t[0]]},t.rotate=function(t){return arguments.length?n([t[0],t[1],t.length>2?t[2]+90:90]):[(t=n())[0],t[1],t[2]-90]},n([0,0,90]).scale(159.155)}function kc(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}function $c(t,e){switch(arguments.length){case 0:break;case 1:"function"==typeof t?this.interpolator(t):this.range(t);break;default:this.domain(t),"function"==typeof e?this.interpolator(e):this.range(e)}return this}fc.invert=function(t,e){for(var n,r=e,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=n=(r*(lc+cc*i+o*(uc+dc*i))-e)/(lc+3*cc*i+o*(7*uc+9*dc*i)))*r)*i*i,!(Ca(n)<_a));++a);return[hc*t*(lc+3*cc*i+o*(7*uc+9*dc*i))/Na(r),Ba(za(r)/hc)]},gc.invert=Wl(Ta),vc.invert=Wl(Ba),mc.invert=Wl((function(t){return 2*Ta(t)})),xc.invert=function(t,e){return[-e,2*Ta(Ra(t))-$a]};const Ec=Symbol("implicit");function Mc(){var t=new Xt,e=[],n=[],r=Ec;function i(i){let o=t.get(i);if(void 0===o){if(r!==Ec)return r;t.set(i,o=e.push(i)-1)}return n[o%n.length]}return i.domain=function(n){if(!arguments.length)return e.slice();e=[],t=new Xt;for(const r of n)t.has(r)||t.set(r,e.push(r)-1);return i},i.range=function(t){return arguments.length?(n=Array.from(t),i):n.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return Mc(e,n).unknown(r)},kc.apply(i,arguments),i}function Sc(){var t,e,n=Mc().unknown(void 0),r=n.domain,i=n.range,o=0,a=1,s=!1,l=0,c=0,u=.5;function d(){var n=r().length,d=a<o,h=d?a:o,f=d?o:a;t=(f-h)/Math.max(1,n-l+2*c),s&&(t=Math.floor(t)),h+=(f-h-t*(n-l))*u,e=t*(1-l),s&&(h=Math.round(h),e=Math.round(e));var p=Re(n).map((function(e){return h+t*e}));return i(d?p.reverse():p)}return delete n.unknown,n.domain=function(t){return arguments.length?(r(t),d()):r()},n.range=function(t){return arguments.length?([o,a]=t,o=+o,a=+a,d()):[o,a]},n.rangeRound=function(t){return[o,a]=t,o=+o,a=+a,s=!0,d()},n.bandwidth=function(){return e},n.step=function(){return t},n.round=function(t){return arguments.length?(s=!!t,d()):s},n.padding=function(t){return arguments.length?(l=Math.min(1,c=+t),d()):l},n.paddingInner=function(t){return arguments.length?(l=Math.min(1,t),d()):l},n.paddingOuter=function(t){return arguments.length?(c=+t,d()):c},n.align=function(t){return arguments.length?(u=Math.max(0,Math.min(1,t)),d()):u},n.copy=function(){return Sc(r(),[o,a]).round(s).paddingInner(l).paddingOuter(c).align(u)},kc.apply(d(),arguments)}function Ac(t){var e=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Ac(e())},t}function Cc(){return Ac(Sc.apply(null,arguments).paddingInner(1))}function Tc(t){return+t}var Dc=[0,1];function Nc(t){return t}function Rc(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function Lc(t,e,n){var r=t[0],i=t[1],o=e[0],a=e[1];return i<r?(r=Rc(i,r),o=n(a,o)):(r=Rc(r,i),o=n(o,a)),function(t){return o(r(t))}}function Oc(t,e,n){var r=Math.min(t.length,e.length)-1,i=new Array(r),o=new Array(r),a=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<r;)i[a]=Rc(t[a],t[a+1]),o[a]=n(e[a],e[a+1]);return function(e){var n=It(t,e,1,r)-1;return o[n](i[n](e))}}function zc(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Pc(){var t,e,n,r,i,o,a=Dc,s=Dc,l=Oi,c=Nc;function u(){var t=Math.min(a.length,s.length);return c!==Nc&&(c=function(t,e){var n;return t>e&&(n=t,t=e,e=n),function(n){return Math.max(t,Math.min(e,n))}}(a[0],a[t-1])),r=t>2?Oc:Lc,i=o=null,d}function d(e){return null==e||isNaN(e=+e)?n:(i||(i=r(a.map(t),s,l)))(t(c(e)))}return d.invert=function(n){return c(e((o||(o=r(s,a.map(t),Ti)))(n)))},d.domain=function(t){return arguments.length?(a=Array.from(t,Tc),u()):a.slice()},d.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},d.rangeRound=function(t){return s=Array.from(t),l=zi,u()},d.clamp=function(t){return arguments.length?(c=!!t||Nc,u()):c!==Nc},d.interpolate=function(t){return arguments.length?(l=t,u()):l},d.unknown=function(t){return arguments.length?(n=t,d):n},function(n,r){return t=n,e=r,u()}}function Ic(){return Pc()(Nc,Nc)}function jc(t,e,n,r){var i,o=ge(t,e,n);switch((r=ua(null==r?",f":r)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(e));return null!=r.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(sa(e)/3)))-sa(Math.abs(t)))}(o,a))||(r.precision=i),va(r,a);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,sa(e)-sa(t))+1}(o,Math.max(Math.abs(t),Math.abs(e))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-sa(Math.abs(t)))}(o))||(r.precision=i-2*("%"===r.type))}return ba(r)}function Uc(t){var e=t.domain;return t.ticks=function(t){var n=e();return fe(n[0],n[n.length-1],null==t?10:t)},t.tickFormat=function(t,n){var r=e();return jc(r[0],r[r.length-1],null==t?10:t,n)},t.nice=function(n){null==n&&(n=10);var r,i,o=e(),a=0,s=o.length-1,l=o[a],c=o[s],u=10;for(c<l&&(i=l,l=c,c=i,i=a,a=s,s=i);u-- >0;){if((i=pe(l,c,n))===r)return o[a]=l,o[s]=c,e(o);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}r=i}return t},t}function Bc(){var t=Ic();return t.copy=function(){return zc(t,Bc())},kc.apply(t,arguments),Uc(t)}function Hc(t){var e;function n(t){return null==t||isNaN(t=+t)?e:t}return n.invert=n,n.domain=n.range=function(e){return arguments.length?(t=Array.from(e,Tc),n):t.slice()},n.unknown=function(t){return arguments.length?(e=t,n):e},n.copy=function(){return Hc(t).unknown(e)},t=arguments.length?Array.from(t,Tc):[0,1],Uc(n)}function Fc(t,e){var n,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(n=r,r=i,i=n,n=o,o=a,a=n),t[r]=e.floor(o),t[i]=e.ceil(a),t}function Vc(t){return Math.log(t)}function qc(t){return Math.exp(t)}function Yc(t){return-Math.log(-t)}function Wc(t){return-Math.exp(-t)}function Xc(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Kc(t){return(e,n)=>-t(-e,n)}function Zc(t){const e=t(Vc,qc),n=e.domain;let r,i,o=10;function a(){return r=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),e=>Math.log(e)/t)}(o),i=function(t){return 10===t?Xc:t===Math.E?Math.exp:e=>Math.pow(t,e)}(o),n()[0]<0?(r=Kc(r),i=Kc(i),t(Yc,Wc)):t(Vc,qc),e}return e.base=function(t){return arguments.length?(o=+t,a()):o},e.domain=function(t){return arguments.length?(n(t),a()):n()},e.ticks=t=>{const e=n();let a=e[0],s=e[e.length-1];const l=s<a;l&&([a,s]=[s,a]);let c,u,d=r(a),h=r(s);const f=null==t?10:+t;let p=[];if(!(o%1)&&h-d<f){if(d=Math.floor(d),h=Math.ceil(h),a>0){for(;d<=h;++d)for(c=1;c<o;++c)if(u=d<0?c/i(-d):c*i(d),!(u<a)){if(u>s)break;p.push(u)}}else for(;d<=h;++d)for(c=o-1;c>=1;--c)if(u=d>0?c/i(-d):c*i(d),!(u<a)){if(u>s)break;p.push(u)}2*p.length<f&&(p=fe(a,s,f))}else p=fe(d,h,Math.min(h-d,f)).map(i);return l?p.reverse():p},e.tickFormat=(t,n)=>{if(null==t&&(t=10),null==n&&(n=10===o?"s":","),"function"!=typeof n&&(o%1||null!=(n=ua(n)).precision||(n.trim=!0),n=ba(n)),t===1/0)return n;const a=Math.max(1,o*t/e.ticks().length);return t=>{let e=t/i(Math.round(r(t)));return e*o<o-.5&&(e*=o),e<=a?n(t):""}},e.nice=()=>n(Fc(n(),{floor:t=>i(Math.floor(r(t))),ceil:t=>i(Math.ceil(r(t)))})),e}function Gc(){const t=Zc(Pc()).domain([1,10]);return t.copy=()=>zc(t,Gc()).base(t.base()),kc.apply(t,arguments),t}function Jc(t){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function Qc(t){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function tu(t){var e=1,n=t(Jc(e),Qc(e));return n.constant=function(n){return arguments.length?t(Jc(e=+n),Qc(e)):e},Uc(n)}function eu(){var t=tu(Pc());return t.copy=function(){return zc(t,eu()).constant(t.constant())},kc.apply(t,arguments)}function nu(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function ru(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function iu(t){return t<0?-t*t:t*t}function ou(t){var e=t(Nc,Nc),n=1;return e.exponent=function(e){return arguments.length?1===(n=+e)?t(Nc,Nc):.5===n?t(ru,iu):t(nu(n),nu(1/n)):n},Uc(e)}function au(){var t=ou(Pc());return t.copy=function(){return zc(t,au()).exponent(t.exponent())},kc.apply(t,arguments),t}function su(){var t,e=[],n=[],r=[];function i(){var t=0,i=Math.max(1,n.length);for(r=new Array(i-1);++t<i;)r[t-1]=Ee(e,t/i);return o}function o(e){return null==e||isNaN(e=+e)?t:n[It(r,e)]}return o.invertExtent=function(t){var i=n.indexOf(t);return i<0?[NaN,NaN]:[i>0?r[i-1]:e[0],i<r.length?r[i]:e[e.length-1]]},o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(let n of t)null==n||isNaN(n=+n)||e.push(n);return e.sort(Rt),i()},o.range=function(t){return arguments.length?(n=Array.from(t),i()):n.slice()},o.unknown=function(e){return arguments.length?(t=e,o):t},o.quantiles=function(){return r.slice()},o.copy=function(){return su().domain(e).range(n).unknown(t)},kc.apply(o,arguments)}function lu(){var t,e=[.5],n=[0,1],r=1;function i(i){return null!=i&&i<=i?n[It(e,i,0,r)]:t}return i.domain=function(t){return arguments.length?(e=Array.from(t),r=Math.min(e.length,n.length-1),i):e.slice()},i.range=function(t){return arguments.length?(n=Array.from(t),r=Math.min(e.length,n.length-1),i):n.slice()},i.invertExtent=function(t){var r=n.indexOf(t);return[e[r-1],e[r]]},i.unknown=function(e){return arguments.length?(t=e,i):t},i.copy=function(){return lu().domain(e).range(n).unknown(t)},kc.apply(i,arguments)}const cu=new Date,uu=new Date;function du(t,e,n,r){function i(e){return t(e=0===arguments.length?new Date:new Date(+e)),e}return i.floor=e=>(t(e=new Date(+e)),e),i.ceil=n=>(t(n=new Date(n-1)),e(n,1),t(n),n),i.round=t=>{const e=i(t),n=i.ceil(t);return t-e<n-t?e:n},i.offset=(t,n)=>(e(t=new Date(+t),null==n?1:Math.floor(n)),t),i.range=(n,r,o)=>{const a=[];if(n=i.ceil(n),o=null==o?1:Math.floor(o),!(n<r&&o>0))return a;let s;do{a.push(s=new Date(+n)),e(n,o),t(n)}while(s<n&&n<r);return a},i.filter=n=>du((e=>{if(e>=e)for(;t(e),!n(e);)e.setTime(e-1)}),((t,r)=>{if(t>=t)if(r<0)for(;++r<=0;)for(;e(t,-1),!n(t););else for(;--r>=0;)for(;e(t,1),!n(t););})),n&&(i.count=(e,r)=>(cu.setTime(+e),uu.setTime(+r),t(cu),t(uu),Math.floor(n(cu,uu))),i.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?e=>r(e)%t==0:e=>i.count(0,e)%t==0):i:null)),i}const hu=du((()=>{}),((t,e)=>{t.setTime(+t+e)}),((t,e)=>e-t));hu.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?du((e=>{e.setTime(Math.floor(e/t)*t)}),((e,n)=>{e.setTime(+e+n*t)}),((e,n)=>(n-e)/t)):hu:null),hu.range;const fu=1e3,pu=6e4,gu=36e5,bu=864e5,vu=6048e5,yu=2592e6,mu=31536e6,wu=du((t=>{t.setTime(t-t.getMilliseconds())}),((t,e)=>{t.setTime(+t+e*fu)}),((t,e)=>(e-t)/fu),(t=>t.getUTCSeconds()));wu.range;const xu=du((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*fu)}),((t,e)=>{t.setTime(+t+e*pu)}),((t,e)=>(e-t)/pu),(t=>t.getMinutes()));xu.range;const _u=du((t=>{t.setUTCSeconds(0,0)}),((t,e)=>{t.setTime(+t+e*pu)}),((t,e)=>(e-t)/pu),(t=>t.getUTCMinutes()));_u.range;const ku=du((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*fu-t.getMinutes()*pu)}),((t,e)=>{t.setTime(+t+e*gu)}),((t,e)=>(e-t)/gu),(t=>t.getHours()));ku.range;const $u=du((t=>{t.setUTCMinutes(0,0,0)}),((t,e)=>{t.setTime(+t+e*gu)}),((t,e)=>(e-t)/gu),(t=>t.getUTCHours()));$u.range;const Eu=du((t=>t.setHours(0,0,0,0)),((t,e)=>t.setDate(t.getDate()+e)),((t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*pu)/bu),(t=>t.getDate()-1));Eu.range;const Mu=du((t=>{t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+e)}),((t,e)=>(e-t)/bu),(t=>t.getUTCDate()-1));Mu.range;const Su=du((t=>{t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+e)}),((t,e)=>(e-t)/bu),(t=>Math.floor(t/bu)));function Au(t){return du((e=>{e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)}),((t,e)=>{t.setDate(t.getDate()+7*e)}),((t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*pu)/vu))}Su.range;const Cu=Au(0),Tu=Au(1),Du=Au(2),Nu=Au(3),Ru=Au(4),Lu=Au(5),Ou=Au(6);function zu(t){return du((e=>{e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+7*e)}),((t,e)=>(e-t)/vu))}Cu.range,Tu.range,Du.range,Nu.range,Ru.range,Lu.range,Ou.range;const Pu=zu(0),Iu=zu(1),ju=zu(2),Uu=zu(3),Bu=zu(4),Hu=zu(5),Fu=zu(6);Pu.range,Iu.range,ju.range,Uu.range,Bu.range,Hu.range,Fu.range;const Vu=du((t=>{t.setDate(1),t.setHours(0,0,0,0)}),((t,e)=>{t.setMonth(t.getMonth()+e)}),((t,e)=>e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())),(t=>t.getMonth()));Vu.range;const qu=du((t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCMonth(t.getUTCMonth()+e)}),((t,e)=>e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())),(t=>t.getUTCMonth()));qu.range;const Yu=du((t=>{t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,e)=>{t.setFullYear(t.getFullYear()+e)}),((t,e)=>e.getFullYear()-t.getFullYear()),(t=>t.getFullYear()));Yu.every=t=>isFinite(t=Math.floor(t))&&t>0?du((e=>{e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,n)=>{e.setFullYear(e.getFullYear()+n*t)})):null,Yu.range;const Wu=du((t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCFullYear(t.getUTCFullYear()+e)}),((t,e)=>e.getUTCFullYear()-t.getUTCFullYear()),(t=>t.getUTCFullYear()));function Xu(t,e,n,r,i,o){const a=[[wu,1,fu],[wu,5,5e3],[wu,15,15e3],[wu,30,3e4],[o,1,pu],[o,5,3e5],[o,15,9e5],[o,30,18e5],[i,1,gu],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,bu],[r,2,1728e5],[n,1,vu],[e,1,yu],[e,3,7776e6],[t,1,mu]];function s(e,n,r){const i=Math.abs(n-e)/r,o=Ot((([,,t])=>t)).right(a,i);if(o===a.length)return t.every(ge(e/mu,n/mu,r));if(0===o)return hu.every(Math.max(ge(e,n,r),1));const[s,l]=a[i/a[o-1][2]<a[o][2]/i?o-1:o];return s.every(l)}return[function(t,e,n){const r=e<t;r&&([t,e]=[e,t]);const i=n&&"function"==typeof n.range?n:s(t,e,n),o=i?i.range(t,+e+1):[];return r?o.reverse():o},s]}Wu.every=t=>isFinite(t=Math.floor(t))&&t>0?du((e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n*t)})):null,Wu.range;const[Ku,Zu]=Xu(Wu,qu,Pu,Su,$u,_u),[Gu,Ju]=Xu(Yu,Vu,Cu,Eu,ku,xu);function Qu(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function td(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ed(t,e,n){return{y:t,m:e,d:n,H:0,M:0,S:0,L:0}}var nd,rd,id,od={"-":"",_:" ",0:"0"},ad=/^\s*\d+/,sd=/^%/,ld=/[\\^$*+?|[\]().{}]/g;function cd(t,e,n){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<n?new Array(n-o+1).join(e)+i:i)}function ud(t){return t.replace(ld,"\\$&")}function dd(t){return new RegExp("^(?:"+t.map(ud).join("|")+")","i")}function hd(t){return new Map(t.map(((t,e)=>[t.toLowerCase(),e])))}function fd(t,e,n){var r=ad.exec(e.slice(n,n+1));return r?(t.w=+r[0],n+r[0].length):-1}function pd(t,e,n){var r=ad.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}function gd(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.U=+r[0],n+r[0].length):-1}function bd(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}function vd(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.W=+r[0],n+r[0].length):-1}function yd(t,e,n){var r=ad.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}function md(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function wd(t,e,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function xd(t,e,n){var r=ad.exec(e.slice(n,n+1));return r?(t.q=3*r[0]-3,n+r[0].length):-1}function _d(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.m=r[0]-1,n+r[0].length):-1}function kd(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}function $d(t,e,n){var r=ad.exec(e.slice(n,n+3));return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function Ed(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}function Md(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.M=+r[0],n+r[0].length):-1}function Sd(t,e,n){var r=ad.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}function Ad(t,e,n){var r=ad.exec(e.slice(n,n+3));return r?(t.L=+r[0],n+r[0].length):-1}function Cd(t,e,n){var r=ad.exec(e.slice(n,n+6));return r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function Td(t,e,n){var r=sd.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function Dd(t,e,n){var r=ad.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}function Nd(t,e,n){var r=ad.exec(e.slice(n));return r?(t.s=+r[0],n+r[0].length):-1}function Rd(t,e){return cd(t.getDate(),e,2)}function Ld(t,e){return cd(t.getHours(),e,2)}function Od(t,e){return cd(t.getHours()%12||12,e,2)}function zd(t,e){return cd(1+Eu.count(Yu(t),t),e,3)}function Pd(t,e){return cd(t.getMilliseconds(),e,3)}function Id(t,e){return Pd(t,e)+"000"}function jd(t,e){return cd(t.getMonth()+1,e,2)}function Ud(t,e){return cd(t.getMinutes(),e,2)}function Bd(t,e){return cd(t.getSeconds(),e,2)}function Hd(t){var e=t.getDay();return 0===e?7:e}function Fd(t,e){return cd(Cu.count(Yu(t)-1,t),e,2)}function Vd(t){var e=t.getDay();return e>=4||0===e?Ru(t):Ru.ceil(t)}function qd(t,e){return t=Vd(t),cd(Ru.count(Yu(t),t)+(4===Yu(t).getDay()),e,2)}function Yd(t){return t.getDay()}function Wd(t,e){return cd(Tu.count(Yu(t)-1,t),e,2)}function Xd(t,e){return cd(t.getFullYear()%100,e,2)}function Kd(t,e){return cd((t=Vd(t)).getFullYear()%100,e,2)}function Zd(t,e){return cd(t.getFullYear()%1e4,e,4)}function Gd(t,e){var n=t.getDay();return cd((t=n>=4||0===n?Ru(t):Ru.ceil(t)).getFullYear()%1e4,e,4)}function Jd(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+cd(e/60|0,"0",2)+cd(e%60,"0",2)}function Qd(t,e){return cd(t.getUTCDate(),e,2)}function th(t,e){return cd(t.getUTCHours(),e,2)}function eh(t,e){return cd(t.getUTCHours()%12||12,e,2)}function nh(t,e){return cd(1+Mu.count(Wu(t),t),e,3)}function rh(t,e){return cd(t.getUTCMilliseconds(),e,3)}function ih(t,e){return rh(t,e)+"000"}function oh(t,e){return cd(t.getUTCMonth()+1,e,2)}function ah(t,e){return cd(t.getUTCMinutes(),e,2)}function sh(t,e){return cd(t.getUTCSeconds(),e,2)}function lh(t){var e=t.getUTCDay();return 0===e?7:e}function ch(t,e){return cd(Pu.count(Wu(t)-1,t),e,2)}function uh(t){var e=t.getUTCDay();return e>=4||0===e?Bu(t):Bu.ceil(t)}function dh(t,e){return t=uh(t),cd(Bu.count(Wu(t),t)+(4===Wu(t).getUTCDay()),e,2)}function hh(t){return t.getUTCDay()}function fh(t,e){return cd(Iu.count(Wu(t)-1,t),e,2)}function ph(t,e){return cd(t.getUTCFullYear()%100,e,2)}function gh(t,e){return cd((t=uh(t)).getUTCFullYear()%100,e,2)}function bh(t,e){return cd(t.getUTCFullYear()%1e4,e,4)}function vh(t,e){var n=t.getUTCDay();return cd((t=n>=4||0===n?Bu(t):Bu.ceil(t)).getUTCFullYear()%1e4,e,4)}function yh(){return"+0000"}function mh(){return"%"}function wh(t){return+t}function xh(t){return Math.floor(+t/1e3)}function _h(t){return new Date(t)}function kh(t){return t instanceof Date?+t:+new Date(+t)}function $h(t,e,n,r,i,o,a,s,l,c){var u=Ic(),d=u.invert,h=u.domain,f=c(".%L"),p=c(":%S"),g=c("%I:%M"),b=c("%I %p"),v=c("%a %d"),y=c("%b %d"),m=c("%B"),w=c("%Y");function x(t){return(l(t)<t?f:s(t)<t?p:a(t)<t?g:o(t)<t?b:r(t)<t?i(t)<t?v:y:n(t)<t?m:w)(t)}return u.invert=function(t){return new Date(d(t))},u.domain=function(t){return arguments.length?h(Array.from(t,kh)):h().map(_h)},u.ticks=function(e){var n=h();return t(n[0],n[n.length-1],null==e?10:e)},u.tickFormat=function(t,e){return null==e?x:c(e)},u.nice=function(t){var n=h();return t&&"function"==typeof t.range||(t=e(n[0],n[n.length-1],null==t?10:t)),t?h(Fc(n,t)):u},u.copy=function(){return zc(u,$h(t,e,n,r,i,o,a,s,l,c))},u}function Eh(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Mh(){var t,e,n,r,i,o,a,s=0,l=.5,c=1,u=1,d=Nc,h=!1;function f(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-e)*(u*t<u*e?r:i),d(h?Math.max(0,Math.min(1,t)):t))}function p(t){return function(e){var n,r,i;return arguments.length?([n,r,i]=e,d=Xi(t,[n,r,i]),f):[d(0),d(.5),d(1)]}}return f.domain=function(a){return arguments.length?([s,l,c]=a,t=o(s=+s),e=o(l=+l),n=o(c=+c),r=t===e?0:.5/(e-t),i=e===n?0:.5/(n-e),u=e<t?-1:1,f):[s,l,c]},f.clamp=function(t){return arguments.length?(h=!!t,f):h},f.interpolator=function(t){return arguments.length?(d=t,f):d},f.range=p(Oi),f.rangeRound=p(zi),f.unknown=function(t){return arguments.length?(a=t,f):a},function(a){return o=a,t=a(s),e=a(l),n=a(c),r=t===e?0:.5/(e-t),i=e===n?0:.5/(n-e),u=e<t?-1:1,f}}function Sh(){var t=Uc(Mh()(Nc));return t.copy=function(){return Eh(t,Sh())},$c.apply(t,arguments)}function Ah(){var t=Zc(Mh()).domain([.1,1,10]);return t.copy=function(){return Eh(t,Ah()).base(t.base())},$c.apply(t,arguments)}function Ch(){var t=tu(Mh());return t.copy=function(){return Eh(t,Ch()).constant(t.constant())},$c.apply(t,arguments)}function Th(){var t=ou(Mh());return t.copy=function(){return Eh(t,Th()).exponent(t.exponent())},$c.apply(t,arguments)}function Dh(t){for(var e=t.length/6|0,n=new Array(e),r=0;r<e;)n[r]="#"+t.slice(6*r,6*++r);return n}!function(t){nd=function(t){var e=t.dateTime,n=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,s=t.months,l=t.shortMonths,c=dd(i),u=hd(i),d=dd(o),h=hd(o),f=dd(a),p=hd(a),g=dd(s),b=hd(s),v=dd(l),y=hd(l),m={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return l[t.getMonth()]},B:function(t){return s[t.getMonth()]},c:null,d:Rd,e:Rd,f:Id,g:Kd,G:Gd,H:Ld,I:Od,j:zd,L:Pd,m:jd,M:Ud,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:wh,s:xh,S:Bd,u:Hd,U:Fd,V:qd,w:Yd,W:Wd,x:null,X:null,y:Xd,Y:Zd,Z:Jd,"%":mh},w={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return l[t.getUTCMonth()]},B:function(t){return s[t.getUTCMonth()]},c:null,d:Qd,e:Qd,f:ih,g:gh,G:vh,H:th,I:eh,j:nh,L:rh,m:oh,M:ah,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:wh,s:xh,S:sh,u:lh,U:ch,V:dh,w:hh,W:fh,x:null,X:null,y:ph,Y:bh,Z:yh,"%":mh},x={a:function(t,e,n){var r=f.exec(e.slice(n));return r?(t.w=p.get(r[0].toLowerCase()),n+r[0].length):-1},A:function(t,e,n){var r=d.exec(e.slice(n));return r?(t.w=h.get(r[0].toLowerCase()),n+r[0].length):-1},b:function(t,e,n){var r=v.exec(e.slice(n));return r?(t.m=y.get(r[0].toLowerCase()),n+r[0].length):-1},B:function(t,e,n){var r=g.exec(e.slice(n));return r?(t.m=b.get(r[0].toLowerCase()),n+r[0].length):-1},c:function(t,n,r){return $(t,e,n,r)},d:kd,e:kd,f:Cd,g:md,G:yd,H:Ed,I:Ed,j:$d,L:Ad,m:_d,M:Md,p:function(t,e,n){var r=c.exec(e.slice(n));return r?(t.p=u.get(r[0].toLowerCase()),n+r[0].length):-1},q:xd,Q:Dd,s:Nd,S:Sd,u:pd,U:gd,V:bd,w:fd,W:vd,x:function(t,e,r){return $(t,n,e,r)},X:function(t,e,n){return $(t,r,e,n)},y:md,Y:yd,Z:wd,"%":Td};function _(t,e){return function(n){var r,i,o,a=[],s=-1,l=0,c=t.length;for(n instanceof Date||(n=new Date(+n));++s<c;)37===t.charCodeAt(s)&&(a.push(t.slice(l,s)),null!=(i=od[r=t.charAt(++s)])?r=t.charAt(++s):i="e"===r?" ":"0",(o=e[r])&&(r=o(n,i)),a.push(r),l=s+1);return a.push(t.slice(l,s)),a.join("")}}function k(t,e){return function(n){var r,i,o=ed(1900,void 0,1);if($(o,t,n+="",0)!=n.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(e&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=td(ed(o.y,0,1))).getUTCDay(),r=i>4||0===i?Iu.ceil(r):Iu(r),r=Mu.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=Qu(ed(o.y,0,1))).getDay(),r=i>4||0===i?Tu.ceil(r):Tu(r),r=Eu.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?td(ed(o.y,0,1)).getUTCDay():Qu(ed(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,td(o)):Qu(o)}}function $(t,e,n,r){for(var i,o,a=0,s=e.length,l=n.length;a<s;){if(r>=l)return-1;if(37===(i=e.charCodeAt(a++))){if(i=e.charAt(a++),!(o=x[i in od?e.charAt(a++):i])||(r=o(t,n,r))<0)return-1}else if(i!=n.charCodeAt(r++))return-1}return r}return m.x=_(n,m),m.X=_(r,m),m.c=_(e,m),w.x=_(n,w),w.X=_(r,w),w.c=_(e,w),{format:function(t){var e=_(t+="",m);return e.toString=function(){return t},e},parse:function(t){var e=k(t+="",!1);return e.toString=function(){return t},e},utcFormat:function(t){var e=_(t+="",w);return e.toString=function(){return t},e},utcParse:function(t){var e=k(t+="",!0);return e.toString=function(){return t},e}}}(t),rd=nd.format,nd.parse,id=nd.utcFormat,nd.utcParse}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Nh=Dh("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Rh=Dh("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Lh=Dh("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Oh=Dh("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"),zh=Dh("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Ph=Dh("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),Ih=Dh("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),jh=Dh("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),Uh=Dh("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),Bh=Dh("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),Hh=Dh("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),Fh=t=>Mi(t[t.length-1]),Vh=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Dh),qh=Fh(Vh),Yh=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Dh),Wh=Fh(Yh),Xh=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Dh),Kh=Fh(Xh),Zh=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Dh),Gh=Fh(Zh),Jh=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Dh),Qh=Fh(Jh),tf=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Dh),ef=Fh(tf),nf=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Dh),rf=Fh(nf),of=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Dh),af=Fh(of),sf=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Dh),lf=Fh(sf),cf=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Dh),uf=Fh(cf),df=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Dh),hf=Fh(df),ff=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Dh),pf=Fh(ff),gf=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Dh),bf=Fh(gf),vf=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Dh),yf=Fh(vf),mf=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Dh),wf=Fh(mf),xf=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Dh),_f=Fh(xf),kf=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Dh),$f=Fh(kf),Ef=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Dh),Mf=Fh(Ef),Sf=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Dh),Af=Fh(Sf),Cf=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Dh),Tf=Fh(Cf),Df=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Dh),Nf=Fh(Df),Rf=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Dh),Lf=Fh(Rf),Of=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Dh),zf=Fh(Of),Pf=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Dh),If=Fh(Pf),jf=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Dh),Uf=Fh(jf),Bf=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Dh),Hf=Fh(Bf),Ff=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Dh),Vf=Fh(Ff);function qf(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"}var Yf=Wi(vi(300,.5,0),vi(-240,.5,1)),Wf=Wi(vi(-100,.75,.35),vi(80,1.5,.8)),Xf=Wi(vi(260,.75,.35),vi(80,1.5,.8)),Kf=vi();function Zf(t){(t<0||t>1)&&(t-=Math.floor(t));var e=Math.abs(t-.5);return Kf.h=360*t-100,Kf.s=1.5-1.5*e,Kf.l=.8-.9*e,Kf+""}var Gf=Tr(),Jf=Math.PI/3,Qf=2*Math.PI/3;function tp(t){var e;return t=(.5-t)*Math.PI,Gf.r=255*(e=Math.sin(t))*e,Gf.g=255*(e=Math.sin(t+Jf))*e,Gf.b=255*(e=Math.sin(t+Qf))*e,Gf+""}function ep(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"}function np(t){var e=t.length;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}var rp=np(Dh("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),ip=np(Dh("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),op=np(Dh("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),ap=np(Dh("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function sp(t){return function(){return t}}const lp=Math.cos,cp=Math.min,up=Math.sin,dp=Math.sqrt,hp=Math.PI,fp=2*hp;function pp(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(null==n)e=null;else{const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);e=t}return t},()=>new ia(e)}function gp(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function bp(t){this._context=t}function vp(t){return new bp(t)}function yp(t){return t[0]}function mp(t){return t[1]}function wp(t,e){var n=sp(!0),r=null,i=vp,o=null,a=pp(s);function s(s){var l,c,u,d=(s=gp(s)).length,h=!1;for(null==r&&(o=i(u=a())),l=0;l<=d;++l)!(l<d&&n(c=s[l],l,s))===h&&((h=!h)?o.lineStart():o.lineEnd()),h&&o.point(+t(c,l,s),+e(c,l,s));if(u)return o=null,u+""||null}return t="function"==typeof t?t:void 0===t?yp:sp(t),e="function"==typeof e?e:void 0===e?mp:sp(e),s.x=function(e){return arguments.length?(t="function"==typeof e?e:sp(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:sp(+t),s):e},s.defined=function(t){return arguments.length?(n="function"==typeof t?t:sp(!!t),s):n},s.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),s):i},s.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),s):r},s}bp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};class xp{constructor(t,e){this._context=t,this._x=e}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,e,t,e):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+e)/2,t,this._y0,t,e)}this._x0=t,this._y0=e}}const _p=dp(3);var kp={draw(t,e){const n=.59436*dp(e+cp(e/28,.75)),r=n/2,i=r*_p;t.moveTo(0,n),t.lineTo(0,-n),t.moveTo(-i,-r),t.lineTo(i,r),t.moveTo(-i,r),t.lineTo(i,-r)}},$p={draw(t,e){const n=dp(e/hp);t.moveTo(n,0),t.arc(0,0,n,0,fp)}},Ep={draw(t,e){const n=dp(e/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}};const Mp=dp(1/3),Sp=2*Mp;var Ap={draw(t,e){const n=dp(e/Sp),r=n*Mp;t.moveTo(0,-n),t.lineTo(r,0),t.lineTo(0,n),t.lineTo(-r,0),t.closePath()}},Cp={draw(t,e){const n=.62625*dp(e);t.moveTo(0,-n),t.lineTo(n,0),t.lineTo(0,n),t.lineTo(-n,0),t.closePath()}},Tp={draw(t,e){const n=.87559*dp(e-cp(e/7,2));t.moveTo(-n,0),t.lineTo(n,0),t.moveTo(0,n),t.lineTo(0,-n)}},Dp={draw(t,e){const n=dp(e),r=-n/2;t.rect(r,r,n,n)}},Np={draw(t,e){const n=.4431*dp(e);t.moveTo(n,n),t.lineTo(n,-n),t.lineTo(-n,-n),t.lineTo(-n,n),t.closePath()}};const Rp=up(hp/10)/up(7*hp/10),Lp=up(fp/10)*Rp,Op=-lp(fp/10)*Rp;var zp={draw(t,e){const n=dp(.8908130915292852*e),r=Lp*n,i=Op*n;t.moveTo(0,-n),t.lineTo(r,i);for(let e=1;e<5;++e){const o=fp*e/5,a=lp(o),s=up(o);t.lineTo(s*n,-a*n),t.lineTo(a*r-s*i,s*r+a*i)}t.closePath()}};const Pp=dp(3);var Ip={draw(t,e){const n=-dp(e/(3*Pp));t.moveTo(0,2*n),t.lineTo(-Pp*n,-n),t.lineTo(Pp*n,-n),t.closePath()}};const jp=dp(3);var Up={draw(t,e){const n=.6824*dp(e),r=n/2,i=n*jp/2;t.moveTo(0,-n),t.lineTo(i,r),t.lineTo(-i,r),t.closePath()}};const Bp=-.5,Hp=dp(3)/2,Fp=1/dp(12),Vp=3*(Fp/2+1);var qp={draw(t,e){const n=dp(e/Vp),r=n/2,i=n*Fp,o=r,a=n*Fp+n,s=-o,l=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(s,l),t.lineTo(Bp*r-Hp*i,Hp*r+Bp*i),t.lineTo(Bp*o-Hp*a,Hp*o+Bp*a),t.lineTo(Bp*s-Hp*l,Hp*s+Bp*l),t.lineTo(Bp*r+Hp*i,Bp*i-Hp*r),t.lineTo(Bp*o+Hp*a,Bp*a-Hp*o),t.lineTo(Bp*s+Hp*l,Bp*l-Hp*s),t.closePath()}},Yp={draw(t,e){const n=.6189*dp(e-cp(e/6,1.7));t.moveTo(-n,-n),t.lineTo(n,n),t.moveTo(-n,n),t.lineTo(n,-n)}};const Wp=[$p,Ep,Ap,Dp,zp,Ip,qp],Xp=[$p,Tp,Yp,Up,kp,Np,Cp];function Kp(){}function Zp(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function Gp(t){this._context=t}function Jp(t){this._context=t}function Qp(t){this._context=t}function tg(t,e){this._basis=new Gp(t),this._beta=e}Gp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Zp(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Zp(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},Jp.prototype={areaStart:Kp,areaEnd:Kp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:Zp(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},Qp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Zp(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},tg.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,e=this._y,n=t.length-1;if(n>0)for(var r,i=t[0],o=e[0],a=t[n]-i,s=e[n]-o,l=-1;++l<=n;)r=l/n,this._basis.point(this._beta*t[l]+(1-this._beta)*(i+r*a),this._beta*e[l]+(1-this._beta)*(o+r*s));this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}};var eg=function t(e){function n(t){return 1===e?new Gp(t):new tg(t,e)}return n.beta=function(e){return t(+e)},n}(.85);function ng(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function rg(t,e){this._context=t,this._k=(1-e)/6}rg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ng(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:ng(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var ig=function t(e){function n(t){return new rg(t,e)}return n.tension=function(e){return t(+e)},n}(0);function og(t,e){this._context=t,this._k=(1-e)/6}og.prototype={areaStart:Kp,areaEnd:Kp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:ng(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var ag=function t(e){function n(t){return new og(t,e)}return n.tension=function(e){return t(+e)},n}(0);function sg(t,e){this._context=t,this._k=(1-e)/6}sg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ng(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var lg=function t(e){function n(t){return new sg(t,e)}return n.tension=function(e){return t(+e)},n}(0);function cg(t,e,n){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>1e-12){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/l,i=(i*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>1e-12){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,u=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-e*t._l12_2a)/u,a=(a*c+t._y1*t._l23_2a-n*t._l12_2a)/u}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function ug(t,e){this._context=t,this._alpha=e}ug.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:cg(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var dg=function t(e){function n(t){return e?new ug(t,e):new rg(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function hg(t,e){this._context=t,this._alpha=e}hg.prototype={areaStart:Kp,areaEnd:Kp,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:cg(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var fg=function t(e){function n(t){return e?new hg(t,e):new og(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function pg(t,e){this._context=t,this._alpha=e}pg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:cg(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var gg=function t(e){function n(t){return e?new pg(t,e):new sg(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function bg(t){this._context=t}function vg(t){return t<0?-1:1}function yg(t,e,n){var r=t._x1-t._x0,i=e-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(n-t._y1)/(i||r<0&&-0),s=(o*i+a*r)/(r+i);return(vg(o)+vg(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(s))||0}function mg(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function wg(t,e,n){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,s=(o-r)/3;t._context.bezierCurveTo(r+s,i+s*e,o-s,a-s*n,o,a)}function xg(t){this._context=t}function _g(t){this._context=new kg(t)}function kg(t){this._context=t}function $g(t){this._context=t}function Eg(t){var e,n,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],e=1;e<r-1;++e)i[e]=1,o[e]=4,a[e]=4*t[e]+2*t[e+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],e=1;e<r;++e)n=i[e]/o[e-1],o[e]-=n,a[e]-=n*a[e-1];for(i[r-1]=a[r-1]/o[r-1],e=r-2;e>=0;--e)i[e]=(a[e]-i[e+1])/o[e];for(o[r-1]=(t[r]+i[r-1])/2,e=0;e<r-1;++e)o[e]=2*t[e+1]-i[e+1];return[i,o]}function Mg(t,e){this._context=t,this._t=e}function Sg(t,e,n){this.k=t,this.x=e,this.y=n}function Ag(t){return null!=t&&!Number.isNaN(t)}function Cg(t,e){return+Ag(e)-+Ag(t)||Rt(t,e)}function Tg(t,e){return+Ag(e)-+Ag(t)||Lt(t,e)}function Dg(t){return null!=t&&""!=`${t}`}function Ng(t){return isFinite(t)?t:NaN}function Rg(t){return t>0&&isFinite(t)?t:NaN}function Lg(t){return t<0&&isFinite(t)?t:NaN}function Og(t,e){if(t instanceof Date||(t=new Date(+t)),isNaN(t))return"function"==typeof e?e(t):e;const n=t.getUTCHours(),r=t.getUTCMinutes(),i=t.getUTCSeconds(),o=t.getUTCMilliseconds();return`${a=t.getUTCFullYear(),a<0?`-${zg(-a,6)}`:a>9999?`+${zg(a,6)}`:zg(a,4)}-${zg(t.getUTCMonth()+1,2)}-${zg(t.getUTCDate(),2)}${n||r||i||o?`T${zg(n,2)}:${zg(r,2)}${i||o?`:${zg(i,2)}${o?`.${zg(o,3)}`:""}`:""}Z`:""}`;var a}function zg(t,e){return`${t}`.padStart(e,"0")}bg.prototype={areaStart:Kp,areaEnd:Kp,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}},xg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:wg(this,this._t0,mg(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,wg(this,mg(this,n=yg(this,t,e)),n);break;default:wg(this,this._t0,n=yg(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(_g.prototype=Object.create(xg.prototype)).point=function(t,e){xg.prototype.point.call(this,e,t)},kg.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,i,o){this._context.bezierCurveTo(e,t,r,n,o,i)}},$g.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),2===n)this._context.lineTo(t[1],e[1]);else for(var r=Eg(t),i=Eg(e),o=0,a=1;a<n;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],e[a]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}},Mg.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}}this._x=t,this._y=e}},Sg.prototype={constructor:Sg,scale:function(t){return 1===t?this:new Sg(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Sg(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},Sg.prototype;const Pg=/^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;function Ig(t,e){return Pg.test(t+="")?new Date(t):"function"==typeof e?e(t):e}function jg(t){if(null==t)return;return Lt(t[0],t[t.length-1])}const Ug=1e3,Bg=6e4,Hg=36e5,Fg=864e5,Vg=7*Fg,qg=30*Fg,Yg=365*Fg,Wg=[["millisecond",1],["2 milliseconds",2],["5 milliseconds",5],["10 milliseconds",10],["20 milliseconds",20],["50 milliseconds",50],["100 milliseconds",100],["200 milliseconds",200],["500 milliseconds",500],["second",Ug],["5 seconds",5e3],["15 seconds",15e3],["30 seconds",3e4],["minute",Bg],["5 minutes",3e5],["15 minutes",9e5],["30 minutes",18e5],["hour",Hg],["3 hours",108e5],["6 hours",216e5],["12 hours",432e5],["day",Fg],["2 days",2*Fg],["week",Vg],["2 weeks",2*Vg],["month",qg],["3 months",3*qg],["6 months",6*qg],["year",Yg],["2 years",2*Yg],["5 years",5*Yg],["10 years",10*Yg],["20 years",20*Yg],["50 years",50*Yg],["100 years",100*Yg]],Xg=new Map([["second",Ug],["minute",Bg],["hour",Hg],["day",Fg],["monday",Vg],["tuesday",Vg],["wednesday",Vg],["thursday",Vg],["friday",Vg],["saturday",Vg],["sunday",Vg],["week",Vg],["month",qg],["year",Yg]]),Kg=new Map([["second",wu],["minute",xu],["hour",ku],["day",Eu],["monday",Tu],["tuesday",Du],["wednesday",Nu],["thursday",Ru],["friday",Lu],["saturday",Ou],["sunday",Cu],["week",Cu],["month",Vu],["year",Yu]]),Zg=new Map([["second",wu],["minute",_u],["hour",$u],["day",Su],["monday",Iu],["tuesday",ju],["wednesday",Uu],["thursday",Bu],["friday",Hu],["saturday",Fu],["sunday",Pu],["week",Pu],["month",qu],["year",Wu]]),Gg=Symbol("intervalDuration"),Jg=Symbol("intervalType");for(const[t,e]of Kg)e[Gg]=Xg.get(t),e[Jg]="time";for(const[t,e]of Zg)e[Gg]=Xg.get(t),e[Jg]="utc";const Qg=[["year",Wu,"utc"],["month",qu,"utc"],["day",Su,"utc",6*qg],["hour",$u,"utc",3*Fg],["minute",_u,"utc",216e5],["second",wu,"utc",18e5]],tb=[["year",Yu,"time"],["month",Vu,"time"],["day",Eu,"time",6*qg],["hour",ku,"time",3*Fg],["minute",xu,"time",216e5],["second",wu,"time",18e5]],eb=[Qg[0],tb[0],Qg[1],tb[1],Qg[2],tb[2],...Qg.slice(3)];function nb(t){let e=`${t}`.toLowerCase();e.endsWith("s")&&(e=e.slice(0,-1));let n=1;const r=/^(?:(\d+)\s+)/.exec(e);switch(r&&(e=e.slice(r[0].length),n=+r[1]),e){case"quarter":e="month",n*=3;break;case"half":e="month",n*=6}let i=Zg.get(e);if(!i)throw new Error(`unknown interval: ${t}`);if(n>1&&!i.every)throw new Error(`non-periodic interval: ${e}`);return[e,n]}function rb(t){return ob(nb(t),"time")}function ib(t){return ob(nb(t),"utc")}function ob([t,e],n){let r=("time"===n?Kg:Zg).get(t);return e>1&&(r=r.every(e),r[Gg]=Xg.get(t)*e,r[Jg]=n),r}function ab(t,e){if(!(e>1))return;const n=t[Gg];if(!Wg.some((([,t])=>t===n)))return;if(n%Fg==0&&Fg<n&&n<qg)return;const[r]=Wg[Ot((([,t])=>Math.log(t))).center(Wg,Math.log(n*e))];return("time"===t[Jg]?rb:ib)(r)}function sb(t,e,n){const r="time"===e?rd:id;if(null==n)return r("year"===t?"%Y":"month"===t?"%Y-%m":"day"===t?"%Y-%m-%d":"hour"===t||"minute"===t?"%Y-%m-%dT%H:%M":"second"===t?"%Y-%m-%dT%H:%M:%S":"%Y-%m-%dT%H:%M:%S.%L");const i=function(t){return"left"===t||"right"===t?(t,e)=>`\n${t}\n${e}`:"top"===t?(t,e)=>`${e}\n${t}`:(t,e)=>`${t}\n${e}`}(n);switch(t){case"millisecond":return cb(r(".%L"),r(":%M:%S"),i);case"second":return cb(r(":%S"),r("%-I:%M"),i);case"minute":return cb(r("%-I:%M"),r("%p"),i);case"hour":return cb(r("%-I %p"),r("%b %-d"),i);case"day":return cb(r("%-d"),r("%b"),i);case"month":return cb(r("%b"),r("%Y"),i);case"year":return r("%Y")}throw new Error("unable to format time ticks")}function lb(t,e,n){const r=ve(function(t,e=Ne){const n=[];let r,i=!1;for(const o of t)i&&n.push(e(r,o)),r=o,i=!0;return n}(e,((t,e)=>Math.abs(e-t))));if(r<1e3)return sb("millisecond","utc",n);for(const[i,o,a,s]of function(t){return"time"===t?tb:"utc"===t?Qg:eb}(t)){if(r>s)break;if("hour"===i&&!r)break;if(e.every((t=>o.floor(t)>=t)))return sb(i,a,n)}}function cb(t,e,n){return(r,i,o)=>{const a=t(r,i),s=e(r,i),l=i-jg(o);return i!==l&&void 0!==o[l]&&s===e(o[l],l)?a:n(a,s)}}const ub=Object.getPrototypeOf(Uint8Array),db=Object.prototype.toString,hb=Symbol("reindex");function fb(t,e,n){const r=typeof e;return"string"===r?pb(t,vb(e),n):"function"===r?pb(t,e,n):"number"===r||e instanceof Date||"boolean"===r?zb(t,Mb(e),n):"function"==typeof e?.transform?gb(e.transform(t),n):function(t,e){return null!=t&&e?Kb(t,e):t}(gb(e,n),t?.[hb])}function pb(t,e,n){return zb(t,n?.prototype instanceof ub?function(t){return(e,n)=>Ab(t(e,n))}(e):e,n)}function gb(t,e){return void 0===e?Ob(t):t instanceof e?t:e.prototype instanceof ub&&!(t instanceof ub)?e.from(t,Ab):e.from(t)}const bb=[null],vb=t=>e=>e[t],yb={transform:Xb},mb={transform:t=>t},wb=()=>1,xb=()=>!0,_b=t=>null==t?t:`${t}`,kb=t=>null==t?t:+t,$b=t=>t?t[0]:void 0,Eb=t=>t?t[1]:void 0,Mb=t=>()=>t;function Sb(t){return t instanceof ub?t:zb(t,Ab,Float64Array)}function Ab(t){return null==t?NaN:Number(t)}function Cb(t){return zb(t,Tb)}function Tb(t){return t instanceof Date&&!isNaN(t)?t:"string"==typeof t?Ig(t):null==t||isNaN(t=+t)?void 0:new Date(t)}function Db(t,e){return void 0===t&&(t=e),null===t?[void 0,"none"]:bv(t)?[void 0,t]:[t,void 0]}function Nb(t,e){return void 0===t&&(t=e),null===t||"number"==typeof t?[void 0,t]:[t,void 0]}function Rb(t,e,n){if(null!=t)return Lb(t,e,n)}function Lb(t,e,n){const r=`${t}`.toLowerCase();if(!n.includes(r))throw new Error(`invalid ${e}: ${t}`);return r}function Ob(t){return null==t||t instanceof Array||t instanceof ub?t:Array.from(t)}function zb(t,e,n=Array){return null==t?t:t instanceof n?t.map(e):n.from(t,e)}function Pb(t,e=Array){return t instanceof e?t.slice():e.from(t)}function Ib({x:t,x1:e,x2:n}){return void 0!==t||void 0!==e||void 0!==n}function jb({y:t,y1:e,y2:n}){return void 0!==t||void 0!==e||void 0!==n}function Ub(t){return Ib(t)||jb(t)||void 0!==t.interval}function Bb(t){return t?.toString===db}function Hb(t){return Bb(t)&&(void 0!==t.type||void 0!==t.domain)}function Fb(t){return Bb(t)&&"function"!=typeof t.transform}function Vb(t){return Fb(t)&&void 0===t.value&&void 0===t.channel}function qb(t,e,n,r=mb){return void 0===e&&void 0===n?(e=0,n=void 0===t?r:t):void 0===e?e=void 0===t?0:t:void 0===n&&(n=void 0===t?0:t),[e,n]}function Yb(t,e){return void 0===t&&void 0===e?[$b,Eb]:[t,e]}function Wb({z:t,fill:e,stroke:n}={}){return void 0===t&&([t]=Db(e)),void 0===t&&([t]=Db(n)),t}function Xb(t){const e=t.length,n=new Uint32Array(e);for(let t=0;t<e;++t)n[t]=t;return n}function Kb(t,e){return zb(e,(e=>t[e]),t.constructor)}function Zb(t,e,n){return t.subarray?t.subarray(e,n):t.slice(e,n)}function Gb(t){return null!==t&&"object"==typeof t?t.valueOf():t}function Jb(t){let e;return[{transform:()=>e,label:tv(t)},t=>e=t]}function Qb(t){return null==t?[t]:Jb(t)}function tv(t,e){return"string"==typeof t?t:t&&void 0!==t.label?t.label:e}function ev(t,e){return{transform(n){const r=t.transform(n),i=e.transform(n);return dv(r)||dv(i)?zb(r,((t,e)=>new Date((+r[e]+ +i[e])/2))):zb(r,((t,e)=>(+r[e]+ +i[e])/2),Float64Array)},label:t.label}}function nv(t,e){const n=rv(e?.interval,e?.type);return n?zb(t,n):t}function rv(t,e){const n=iv(t,e);return n&&(t=>Ag(t)?n.floor(t):t)}function iv(t,e){if(null!=t){if("number"==typeof t)return function(t){t=+t,0<t&&t<1&&Number.isInteger(1/t)&&(t=-1/t);const e=Math.abs(t);return t<0?{floor:t=>Math.floor(t*e)/e,offset:(t,n=1)=>(t*e+Math.floor(n))/e,range:(t,n)=>Re(Math.ceil(t*e),n*e).map((t=>t/e))}:{floor:t=>Math.floor(t/e)*e,offset:(t,n=1)=>t+e*Math.floor(n),range:(t,n)=>Re(Math.ceil(t/e),n/e).map((t=>t*e))}}(t);if("string"==typeof t)return("time"===e?rb:ib)(t);if("function"!=typeof t.floor)throw new Error("invalid interval; missing floor method");if("function"!=typeof t.offset)throw new Error("invalid interval; missing offset method");return t}}function ov(t,e){if((t=iv(t,e))&&"function"!=typeof t.range)throw new Error("invalid interval: missing range method");return t}function av(t){return"function"==typeof t?.range}function sv(t){return void 0===t||Fb(t)?t:{value:t}}function lv(t){return t&&"function"==typeof t[Symbol.iterator]}function cv(t){for(const e of t)if(null!=e)return"object"!=typeof e||e instanceof Date}function uv(t){for(const e of t){if(null==e)continue;const t=typeof e;return"string"===t||"boolean"===t}}function dv(t){for(const e of t)if(null!=e)return e instanceof Date}function hv(t){for(const e of t)if(null!=e)return"string"==typeof e&&isNaN(e)&&Ig(e)}function fv(t){for(const e of t)if(null!=e){if("string"!=typeof e)return!1;if(e.trim())return!isNaN(e)}}function pv(t,e){let n;for(const r of t)if(null!=r){if(!e(r))return!1;n=!0}return n}const gv=new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));function bv(t){return"string"==typeof t&&(t=t.toLowerCase().trim(),/^#[0-9a-f]{3,8}$/.test(t)||/^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(t)||gv.has(t))}function vv(t){return"number"==typeof t&&(0<=t&&t<=1||isNaN(t))}function yv(t){return null==t||mv(t)}function mv(t){return/^\s*none\s*$/i.test(t)}function wv(t,e){return Rb(t,e,["middle","top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"])}function xv(t="middle"){return wv(t,"frameAnchor")}function _v(t){return lv(t)?function(t){console.warn("named iterables are deprecated; please use an object instead");const e=new Set;return Object.fromEntries(Array.from(t,(t=>{const{name:n}=t;if(null==n)throw new Error("missing name");const r=`${n}`;if("__proto__"===r)throw new Error(`illegal name: ${r}`);if(e.has(r))throw new Error(`duplicate name: ${r}`);return e.add(r),[n,t]})))}(t):t}function kv(t){return!0===t?t="frame":!1===t?t=null:null!=t&&(t=Lb(t,"clip",["frame","sphere"])),t}const $v=Symbol("position"),Ev=Symbol("color"),Mv=Symbol("radius"),Sv=Symbol("length"),Av=Symbol("opacity"),Cv=Symbol("symbol"),Tv=Symbol("projection"),Dv=new Map([["x",$v],["y",$v],["fx",$v],["fy",$v],["r",Mv],["color",Ev],["opacity",Av],["symbol",Cv],["length",Sv],["projection",Tv]]);const Nv=2/Math.sqrt(3),Rv={draw(t,e){const n=Math.sqrt(e/Math.PI),r=n*Nv,i=r/2;t.moveTo(0,r),t.lineTo(n,i),t.lineTo(n,-i),t.lineTo(0,-r),t.lineTo(-n,-i),t.lineTo(-n,i),t.closePath()}},Lv=new Map([["asterisk",kp],["circle",$p],["cross",Ep],["diamond",Ap],["diamond2",Cp],["hexagon",Rv],["plus",Tp],["square",Dp],["square2",Np],["star",zp],["times",Yp],["triangle",Ip],["triangle2",Up],["wye",qp]]);function Ov(t){return t&&"function"==typeof t.draw}function zv(t){return!!Ov(t)||"string"==typeof t&&Lv.has(t.toLowerCase())}function Pv(t){if(null==t||Ov(t))return t;const e=Lv.get(`${t}`.toLowerCase());if(e)return e;throw new Error(`invalid symbol: ${t}`)}function Iv({filter:t,sort:e,reverse:n,transform:r,initializer:i,...o}={},a){if(void 0===r&&(null!=t&&(r=Fv(t)),null==e||Vb(e)||(r=Uv(r,qv(e))),n&&(r=Uv(r,Vv))),null!=a&&null!=i)throw new Error("transforms cannot be applied after initializers");return{...o,...(null===e||Vb(e))&&{sort:e},transform:Uv(r,a)}}function jv({filter:t,sort:e,reverse:n,initializer:r,...i}={},o){return void 0===r&&(null!=t&&(r=Fv(t)),null==e||Vb(e)||(r=Bv(r,qv(e))),n&&(r=Bv(r,Vv))),{...i,...(null===e||Vb(e))&&{sort:e},initializer:Bv(r,o)}}function Uv(t,e){return null==t?null===e?void 0:e:null==e?null===t?void 0:t:function(n,r,i){return({data:n,facets:r}=t.call(this,n,r,i)),e.call(this,Ob(n),r,i)}}function Bv(t,e){return null==t?null===e?void 0:e:null==e?null===t?void 0:t:function(n,r,i,...o){let a,s,l,c,u,d;return({data:s=n,facets:l=r,channels:a}=t.call(this,n,r,i,...o)),({data:u=s,facets:d=l,channels:c}=e.call(this,s,l,{...i,...a},...o)),{data:u,facets:d,channels:{...a,...c}}}}function Hv(t,e){return(null!=t.initializer?jv:Iv)(t,e)}function Fv(t){return(e,n)=>{const r=fb(e,t);return{data:e,facets:n.map((t=>t.filter((t=>r[t]))))}}}function Vv(t,e){return{data:t,facets:e.map((t=>t.slice().reverse()))}}function qv(t){return("function"==typeof t&&1!==t.length?Yv:Wv)(t)}function Yv(t){return(e,n)=>{const r=(n,r)=>t(e[n],e[r]);return{data:e,facets:n.map((t=>t.slice().sort(r)))}}}function Wv(t){let e,n;({channel:e,value:t,order:n}={...sv(t)});const r=e?.startsWith("-");if(r&&(e=e.slice(1)),void 0===n&&(n=r?Tg:Cg),"function"!=typeof n)switch(`${n}`.toLowerCase()){case"ascending":n=Cg;break;case"descending":n=Tg;break;default:throw new Error(`invalid order: ${n}`)}return(r,i,o)=>{let a;if(void 0===e)a=fb(r,t);else{if(void 0===o)throw new Error("channel sort requires an initializer");if(a=o[e],!a)return{};a=a.value}const s=(t,e)=>n(a[t],a[e]);return{data:r,facets:i.map((t=>t.slice().sort(s)))}}}function Xv(t,...e){for(const{name:n}of t)if(e.includes(n))return!0;return!1}function Kv(t,e,n,r=Zv){let i;Bb(e)&&"reduce"in e&&(i=e.scale,e=e.reduce);const o=r(t,e,n),[a,s]=Jb(o.label);let l;return{name:t,output:void 0===i?a:{value:a,scale:i},initialize(t){o.initialize(t),l=s([])},scope(t,e){o.scope(t,e)},reduce(t,e){l.push(o.reduce(t,e))}}}function Zv(t,e,n,r=Jv){const i=function(t,e){if(void 0!==e[t])return e[t];switch(t){case"x1":case"x2":t="x";break;case"y1":case"y2":t="y"}return e[t]}(t,n),o=r(e,i);let a,s;return{label:tv(o===ay?null:i,o.label),initialize(t){a=void 0===i?t:fb(t,i),"data"===o.scope&&(s=o.reduceIndex(Xb(t),a))},scope(t,e){o.scope===t&&(s=o.reduceIndex(e,a))},reduce:(t,e)=>null==o.scope?o.reduceIndex(t,a,e):o.reduceIndex(t,a,s,e)}}function Gv(t,e){return e?ee(t,(t=>e[t])):[[,t]]}function Jv(t,e,n=Qv){if(null==t)return n(t);if("function"==typeof t.reduceIndex)return t;if("function"==typeof t.reduce&&Bb(t))return function(t){return console.warn("deprecated reduce interface; implement reduceIndex instead."),{...t,reduceIndex:t.reduce.bind(t)}}(t);if("function"==typeof t)return function(t){return{reduceIndex:(e,n,r)=>t(Kb(n,e),r)}}(t);if(/^p\d{2}$/i.test(t))return ty(function(t){const e=+`${t}`.slice(1)/100;return(t,n)=>$e(t,e,n)}(t));switch(`${t}`.toLowerCase()){case"first":return ry;case"last":return oy;case"identity":return ny;case"count":return ay;case"distinct":return sy;case"sum":return null==e?ay:ly;case"proportion":return cy(e,"data");case"proportion-facet":return cy(e,"facet");case"deviation":return ty(qt);case"min":return ty(me);case"min-index":return ty(we);case"max":return ty(ve);case"max-index":return ty(ye);case"mean":return ey(Ae);case"median":return ey(Ce);case"variance":return ty(Vt);case"mode":return ty(De)}return n(t)}function Qv(t){throw new Error(`invalid reduce: ${t}`)}function ty(t){return{reduceIndex:(e,n)=>t(e,(t=>n[t]))}}function ey(t){return{reduceIndex(e,n){const r=t(e,(t=>n[t]));return dv(n)?new Date(r):r}}}const ny={reduceIndex:(t,e)=>Kb(e,t)},ry={reduceIndex:(t,e)=>e[t[0]]},iy={reduceIndex(t,e){const n=oe(ne(t,(t=>t.length),(t=>e[t])),Eb),r=n.slice(-5).reverse();if(r.length<n.length){const t=n.slice(0,-4);r[4]=[`… ${t.length.toLocaleString("en-US")} more`,Le(t,Eb)]}return r.map((([t,e])=>`${t} (${e.toLocaleString("en-US")})`)).join("\n")}},oy={reduceIndex:(t,e)=>e[t[t.length-1]]},ay={label:"Frequency",reduceIndex:t=>t.length},sy={label:"Distinct",reduceIndex(t,e){const n=new Kt;for(const r of t)n.add(e[r]);return n.size}},ly=ty(Le);function cy(t,e){return null==t?{scope:e,label:"Frequency",reduceIndex:(t,e,n=1)=>t.length/n}:{scope:e,reduceIndex:(t,e,n=1)=>Le(t,(t=>e[t]))/n}}const uy={reduceIndex:(t,e,{z:n})=>n};function dy(t,{scale:e,type:n,value:r,filter:i,hint:o,label:a=tv(r)},s){return void 0===o&&"function"==typeof r?.transform&&(o=r.hint),hy(s,{scale:e,type:n,value:fb(t,r),label:a,filter:i,hint:o})}function hy(t,e){const{scale:n,value:r}=e;if(!0===n||"auto"===n)switch(t){case"fill":case"stroke":case"color":e.scale=!0!==n&&pv(r,bv)?null:"color";break;case"fillOpacity":case"strokeOpacity":case"opacity":e.scale=!0!==n&&pv(r,vv)?null:"opacity";break;case"symbol":!0!==n&&pv(r,zv)?(e.scale=null,e.value=zb(r,Pv)):e.scale="symbol";break;default:e.scale=Dv.has(t)?t:null}else if(!1===n)e.scale=null;else if(null!=n&&!Dv.has(n))throw new Error(`unknown scale: ${n}`);return e}function fy(t,e){for(const n in t){const r=t[n];if(r.scale===e)return r}}function py(t,e){const n=t.original;if(n===t)return e;const r=e.value,i=e.value=[];for(let e=0;e<n.length;++e){const o=r[n[e][0]];for(const n of t[e])i[n]=o}return e}function gy(t,e,n){const r=by(t,e);return zb(by(t,n),((t,e)=>Math.abs(t-r[e])),Float64Array)}function by(t,e,n){let r=t[e];if(r||void 0===n||(r=t[n]),r)return r.value;throw new Error(`missing channel: ${e}`)}function vy(t){if(null==t||"function"==typeof t)return t;switch(`${t}`.toLowerCase()){case"ascending":return yy;case"descending":return my}throw new Error(`invalid order: ${t}`)}function yy([t,e],[n,r]){return Cg(e,r)||Cg(t,n)}function my([t,e],[n,r]){return Tg(e,r)||Cg(t,n)}function wy(t,e){let n=t[e];if(n){for(;n.source;)n=n.source;return null===n.source?null:n}}const xy=new Map([["accent",Rh],["category10",Nh],["dark2",Lh],["observable10",Oh],["paired",zh],["pastel1",Ph],["pastel2",Ih],["set1",jh],["set2",Uh],["set3",Bh],["tableau10",Hh]]);const _y=new Map([...xy,["brbg",$y(Vh,qh)],["prgn",$y(Yh,Wh)],["piyg",$y(Xh,Kh)],["puor",$y(Zh,Gh)],["rdbu",$y(Jh,Qh)],["rdgy",$y(tf,ef)],["rdylbu",$y(nf,rf)],["rdylgn",$y(of,af)],["spectral",$y(sf,lf)],["burd",Ey(Jh,Qh)],["buylrd",Ey(nf,rf)],["blues",ky(Rf,Lf)],["greens",ky(Of,zf)],["greys",ky(Pf,If)],["oranges",ky(Ff,Vf)],["purples",ky(jf,Uf)],["reds",ky(Bf,Hf)],["turbo",My(ep)],["viridis",My(rp)],["magma",My(ip)],["inferno",My(op)],["plasma",My(ap)],["cividis",My(qf)],["cubehelix",My(Yf)],["warm",My(Wf)],["cool",My(Xf)],["bugn",ky(cf,uf)],["bupu",ky(df,hf)],["gnbu",ky(ff,pf)],["orrd",ky(gf,bf)],["pubu",ky(mf,wf)],["pubugn",ky(vf,yf)],["purd",ky(xf,_f)],["rdpu",ky(kf,$f)],["ylgn",ky(Sf,Af)],["ylgnbu",ky(Ef,Mf)],["ylorbr",ky(Cf,Tf)],["ylorrd",ky(Df,Nf)],["rainbow",Sy(Zf)],["sinebow",Sy(tp)]]);function ky(t,e){return({length:n})=>1===n?[t[3][1]]:2===n?[t[3][1],t[3][2]]:(n=Math.max(3,Math.floor(n)))>9?Ki(e,n):t[n]}function $y(t,e){return({length:n})=>2===n?[t[3][0],t[3][2]]:(n=Math.max(3,Math.floor(n)))>11?Ki(e,n):t[n]}function Ey(t,e){return({length:n})=>2===n?[t[3][2],t[3][0]]:(n=Math.max(3,Math.floor(n)))>11?Ki((t=>e(1-t)),n):t[n].slice().reverse()}function My(t){return({length:e})=>Ki(t,Math.max(2,Math.floor(e)))}function Sy(t){return({length:e})=>Ki(t,Math.floor(e)+1).slice(0,-1)}function Ay(t){const e=`${t}`.toLowerCase();if(!_y.has(e))throw new Error(`unknown ordinal scheme: ${e}`);return _y.get(e)}function Cy(t,e){const n=Ay(t),r="function"==typeof n?n({length:e}):n;return r.length!==e?r.slice(0,e):r}const Ty=new Map([["brbg",qh],["prgn",Wh],["piyg",Kh],["puor",Gh],["rdbu",Qh],["rdgy",ef],["rdylbu",rf],["rdylgn",af],["spectral",lf],["burd",t=>Qh(1-t)],["buylrd",t=>rf(1-t)],["blues",Lf],["greens",zf],["greys",If],["purples",Uf],["reds",Hf],["oranges",Vf],["turbo",ep],["viridis",rp],["magma",ip],["inferno",op],["plasma",ap],["cividis",qf],["cubehelix",Yf],["warm",Wf],["cool",Xf],["bugn",uf],["bupu",hf],["gnbu",pf],["orrd",bf],["pubugn",yf],["pubu",wf],["purd",_f],["rdpu",$f],["ylgnbu",Mf],["ylgn",Af],["ylorbr",Tf],["ylorrd",Nf],["rainbow",Zf],["sinebow",tp]]);function Dy(t){const e=`${t}`.toLowerCase();if(!Ty.has(e))throw new Error(`unknown quantitative scheme: ${e}`);return Ty.get(e)}const Ny=new Set(["brbg","prgn","piyg","puor","rdbu","rdgy","rdylbu","rdylgn","spectral","burd","buylrd"]);const Ry=t=>e=>t(1-e),Ly=[0,1],Oy=new Map([["number",Ti],["rgb",$i],["hsl",Vi],["hcl",qi],["lab",function(t,e){var n=ki((t=ti(t)).l,(e=ti(e)).l),r=ki(t.a,e.a),i=ki(t.b,e.b),o=ki(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=r(e),t.b=i(e),t.opacity=o(e),t+""}}]]);function zy(t){const e=`${t}`.toLowerCase();if(!Oy.has(e))throw new Error(`unknown interpolator: ${e}`);return Oy.get(e)}function Py(t,e,n,{type:r,nice:i,clamp:o,zero:a,domain:s=Vy(t,n),unknown:l,round:c,scheme:u,interval:d,range:h=(Dv.get(t)===Mv?Yy(n,s):Dv.get(t)===Sv?Wy(n,s):Dv.get(t)===Av?Ly:void 0),interpolate:f=(Dv.get(t)===Ev?null==u&&void 0!==h?$i:Dy(void 0!==u?u:"cyclical"===r?"rainbow":"turbo"):c?zi:Ti),reverse:p}){if(d=ov(d,r),"cyclical"!==r&&"sequential"!==r||(r="linear"),"function"!=typeof f&&(f=zy(f)),p=!!p,void 0!==h){if((s=Ob(s)).length!==(h=Ob(h)).length){if(1===f.length)throw new Error("invalid piecewise interpolator");f=Xi(f,h),h=void 0}}if(1===f.length?(p&&(f=Ry(f),p=!1),void 0===h&&(h=Float64Array.from(s,((t,e)=>e/(s.length-1))),2===h.length&&(h=Ly)),e.interpolate((h===Ly?Mb:Zy)(f))):e.interpolate(f),a){const[t,e]=Yt(s);if(t>0||e<0){(jg(s=Pb(s))||1)===Math.sign(t)?s[0]=0:s[s.length-1]=0}}return p&&(s=Oe(s)),e.domain(s).unknown(l),i&&(e.nice(function(t,e){return!0===t?void 0:"number"==typeof t?t:function(t,e){if((t=ov(t,e))&&"function"!=typeof t.ceil)throw new Error("invalid interval: missing ceil method");return t}(t,e)}(i,r)),s=e.domain()),void 0!==h&&e.range(h),o&&e.clamp(o),{type:r,domain:s,range:h,scale:e,interpolate:f,interval:d}}function Iy(t,e,{exponent:n=1,...r}){return Py(t,au().exponent(n),e,{...r,type:"pow"})}function jy(t,e,{base:n=10,domain:r=Xy(e),...i}){return Py(t,Gc().base(n),e,{...i,domain:r})}function Uy(t,e,{constant:n=1,...r}){return Py(t,eu().constant(n),e,r)}function By(t,e,{range:n,quantiles:r=(void 0===n?5:(n=[...n]).length),n:i=r,scheme:o="rdylbu",domain:a=Ky(e),unknown:s,interpolate:l,reverse:c}){return void 0===n&&(n=void 0!==l?Ki(l,i):Dv.get(t)===Ev?Cy(o,i):void 0),a.length>0&&(a=su(a,void 0===n?{length:i}:n).quantiles()),Hy(t,e,{domain:a,range:n,reverse:c,unknown:s})}function Hy(t,e,{domain:n=[0],unknown:r,scheme:i="rdylbu",interpolate:o,range:a=(void 0!==o?Ki(o,n.length+1):Dv.get(t)===Ev?Cy(i,n.length+1):void 0),reverse:s}){const l=jg(n=Ob(n));if(!isNaN(l)&&!function(t,e){for(let n=1,r=t.length,i=t[0];n<r;++n){const r=Lt(i,i=t[n]);if(0!==r&&r!==e)return!1}return!0}(n,l))throw new Error(`the ${t} scale has a non-monotonic domain`);return s&&(a=Oe(a)),{type:"threshold",scale:lu(l<0?Oe(n):n,void 0===a?[]:a).unknown(r),domain:n,range:a}}function Fy(t,e=Ng){return t.length?[me(t,(({value:t})=>void 0===t?t:me(t,e))),ve(t,(({value:t})=>void 0===t?t:ve(t,e)))]:[0,1]}function Vy(t,e){const n=Dv.get(t);return(n===Mv||n===Av||n===Sv?qy:Fy)(e)}function qy(t){return[0,t.length?ve(t,(({value:t})=>void 0===t?t:ve(t,Ng))):1]}function Yy(t,e){const n=t.find((({radius:t})=>void 0!==t));if(void 0!==n)return[0,n.radius];const r=$e(t,.5,(({value:t})=>void 0===t?NaN:$e(t,.25,Rg))),i=e.map((t=>3*Math.sqrt(t/r))),o=30/ve(i);return o<1?i.map((t=>t*o)):i}function Wy(t,e){const n=Ce(t,(({value:t})=>void 0===t?NaN:Ce(t,Math.abs))),r=e.map((t=>12*t/n)),i=60/ve(r);return i<1?r.map((t=>t*i)):r}function Xy(t){for(const{value:e}of t)if(void 0!==e)for(let n of e){if(n>0)return Fy(t,Rg);if(n<0)return Fy(t,Lg)}return[1,10]}function Ky(t){const e=[];for(const{value:n}of t)if(void 0!==n)for(const t of n)e.push(t);return e}function Zy(t){return(e,n)=>r=>t(e+r*(n-e))}let Gy,Jy=0;function Qy(t){t!==Gy&&(Gy=t,console.warn(t),++Jy)}function tm(t,e,n,r,{type:i,nice:o,clamp:a,domain:s=Fy(r),unknown:l,pivot:c=0,scheme:u,range:d,symmetric:h=!0,interpolate:f=(Dv.get(t)===Ev?null==u&&void 0!==d?$i:Dy(void 0!==u?u:"rdbu"):Ti),reverse:p}){c=+c,s=Ob(s);let[g,b]=s;if(s.length>2&&Qy(`Warning: the diverging ${t} scale domain contains extra elements.`),Lt(g,b)<0&&([g,b]=[b,g],p=!p),g=Math.min(g,c),b=Math.max(b,c),"function"!=typeof f&&(f=zy(f)),void 0!==d&&(f=1===f.length?Zy(f)(...d):Xi(f,d)),p&&(f=Ry(f)),h){const t=n.apply(c),e=t-n.apply(g),r=n.apply(b)-t;e<r?g=n.invert(t-r):e>r&&(b=n.invert(t+e))}return e.domain([g,c,b]).unknown(l).interpolator(f),a&&e.clamp(a),o&&e.nice(o),{type:i,domain:[g,b],pivot:c,interpolate:f,scale:e}}function em(t,e,n){return tm(t,Sh(),om,e,n)}function nm(t,e,{exponent:n=1,...r}){return tm(t,Th().exponent(n=+n),function(t){return.5===t?sm:{apply:e=>Math.sign(e)*Math.pow(Math.abs(e),t),invert:e=>Math.sign(e)*Math.pow(Math.abs(e),1/t)}}(n),e,{...r,type:"diverging-pow"})}function rm(t,e,{base:n=10,pivot:r=1,domain:i=Fy(e,r<0?Lg:Rg),...o}){return tm(t,Ah().base(n=+n),am,e,{domain:i,pivot:r,...o})}function im(t,e,{constant:n=1,...r}){return tm(t,Ch().constant(n=+n),function(t){return{apply:e=>Math.sign(e)*Math.log1p(Math.abs(e/t)),invert:e=>Math.sign(e)*Math.expm1(Math.abs(e))*t}}(n),e,r)}const om={apply:t=>t,invert:t=>t},am={apply:Math.log,invert:Math.exp},sm={apply:t=>Math.sign(t)*Math.sqrt(Math.abs(t)),invert:t=>Math.sign(t)*(t*t)};function lm(t,e,n,r){return Py(t,e,n,r)}function cm(t,e,n){return lm(t,function(){return kc.apply($h(Gu,Ju,Yu,Vu,Cu,Eu,ku,xu,wu,rd).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}(),e,n)}function um(t,e,n){return lm(t,function(){return kc.apply($h(Ku,Zu,Wu,qu,Pu,Mu,$u,_u,wu,id).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}(),e,n)}const dm=Symbol("ordinal");function hm(t,e,n,{type:r,interval:i,domain:o,range:a,reverse:s,hint:l}){return i=ov(i,r),void 0===o&&(o=gm(n,i,t)),"categorical"!==r&&r!==dm||(r="ordinal"),s&&(o=Oe(o)),o=e.domain(o).domain(),void 0!==a&&("function"==typeof a&&(a=a(o)),e.range(a)),{type:r,domain:o,range:a,scale:e,hint:l,interval:i}}function fm(t,e,{type:n,interval:r,domain:i,range:o,scheme:a,unknown:s,...l}){let c;if(r=ov(r,n),void 0===i&&(i=gm(e,r,t)),Dv.get(t)===Cv)c=function(t){return{fill:bm(t,"fill"),stroke:bm(t,"stroke")}}(e),o=void 0===o?function(t){return yv(t.fill)?Xp:Wp}(c):zb(o,Pv);else if(Dv.get(t)===Ev&&(void 0!==o||"ordinal"!==n&&n!==dm||(o=function(t,e="greys"){const n=new Set,[r,i]=Cy(e,2);for(const e of t)if(null!=e)if(!0===e)n.add(i);else{if(!1!==e)return;n.add(r)}return[...n]}(i,a),void 0!==o&&(a=void 0)),void 0===a&&void 0===o&&(a="ordinal"===n?"turbo":"observable10"),void 0!==a))if(void 0!==o){const t=Dy(a),e=o[0],n=o[1]-o[0];o=({length:r})=>Ki((r=>t(e+n*r)),r)}else o=Ay(a);if(s===Ec)throw new Error(`implicit unknown on ${t} scale is not supported`);return hm(t,Mc().unknown(s),e,{...l,type:n,domain:i,range:o,hint:c})}function pm(t,e,n,r){let{round:i}=n;return void 0!==i&&t.round(i=!!i),(t=hm(r,t,e,n)).round=i,t}function gm(t,e,n){const r=new Kt;for(const{value:e,domain:n}of t){if(void 0!==n)return n();if(void 0!==e)for(const t of e)r.add(t)}if(void 0!==e){const[t,n]=Yt(r).map(e.floor,e);return e.range(t,e.offset(n))}if(r.size>1e4&&Dv.get(n)===$v)throw new Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);return oe(r,Cg)}function bm(t,e){let n;for(const{hint:r}of t){const t=r?.[e];if(void 0!==t)if(void 0===n)n=t;else if(n!==t)return}return n}function vm(t,{label:e,inset:n=0,insetTop:r=n,insetRight:i=n,insetBottom:o=n,insetLeft:a=n,round:s,nice:l,clamp:c,zero:u,align:d,padding:h,projection:f,facet:{label:p=e}={},...g}={}){const b={};for(const[n,v]of t){const t=g[n],y=Mm(n,v,{round:Dv.get(n)===$v?s:void 0,nice:l,clamp:c,zero:u,align:d,padding:h,projection:f,...t});if(y){let{label:s=("fx"===n||"fy"===n?p:e),percent:l,transform:c,inset:u,insetTop:d=(void 0!==u?u:"y"===n?r:0),insetRight:h=(void 0!==u?u:"x"===n?i:0),insetBottom:f=(void 0!==u?u:"y"===n?o:0),insetLeft:g=(void 0!==u?u:"x"===n?a:0)}=t||{};if(null==c)c=void 0;else if("function"!=typeof c)throw new Error("invalid scale transform; not a function");y.percent=!!l,y.label=void 0===s?mm(v,y):s,y.transform=c,"x"===n||"fx"===n?(y.insetLeft=+g,y.insetRight=+h):"y"!==n&&"fy"!==n||(y.insetTop=+d,y.insetBottom=+f),b[n]=y}}return b}function ym(t){const e={},n={scales:e};for(const[r,i]of Object.entries(t)){const{scale:t,type:o,interval:a,label:s}=i;e[r]=zm(i),n[r]=t,t.type=o,null!=a&&(t.interval=a),null!=s&&(t.label=s)}return n}function mm(t=[],e){let n;for(const{label:e}of t)if(void 0!==e)if(void 0===n)n=e;else if(n!==e)return;if(void 0!==n)return!Dm(e)&&e.percent&&(n=`${n} (%)`),{inferred:!0,toString:()=>n}}function wm(t){const{marginTop:e,marginRight:n,marginBottom:r,marginLeft:i,width:o,height:a,facet:{marginTop:s,marginRight:l,marginBottom:c,marginLeft:u}}=t;return{marginTop:Math.max(e,s),marginRight:Math.max(n,l),marginBottom:Math.max(r,c),marginLeft:Math.max(i,u),width:o,height:a}}function xm({fx:t,fy:e},n){const{marginTop:r,marginRight:i,marginBottom:o,marginLeft:a,width:s,height:l}=wm(n);return{marginTop:r,marginRight:i,marginBottom:o,marginLeft:a,width:t?t.scale.bandwidth()+a+i:s,height:e?e.scale.bandwidth()+r+o:l,facet:{width:s,height:l}}}function _m(t,e){if(void 0===t.range){const{insetLeft:n,insetRight:r}=t,{width:i,marginLeft:o=0,marginRight:a=0}=e,s=o+n,l=i-a-r;t.range=[s,Math.max(s,l)],Dm(t)||(t.range=Em(t)),t.scale.range(t.range)}$m(t)}function km(t,e){if(void 0===t.range){const{insetTop:n,insetBottom:r}=t,{height:i,marginTop:o=0,marginBottom:a=0}=e,s=o+n,l=i-a-r;t.range=[Math.max(s,l),s],Dm(t)?t.range.reverse():t.range=Em(t),t.scale.range(t.range)}$m(t)}function $m(t){void 0===t.round&&function({type:t}){return"point"===t||"band"===t}(t)&&function({scale:t}){const e=t.domain().length,[n,r]=t.range(),i=t.paddingInner?t.paddingInner():1,o=t.paddingOuter?t.paddingOuter():t.padding(),a=e-i,s=Math.abs(r-n)/Math.max(1,a+2*o);return(s-Math.floor(s))*a}(t)<=30&&t.scale.round(!0)}function Em(t){const e=t.scale.domain().length+Nm(t);if(!(e>2))return t.range;const[n,r]=t.range;return Array.from({length:e},((t,i)=>n+i/(e-1)*(r-n)))}function Mm(t,e=[],n={}){const r=function(t,e,{type:n,domain:r,range:i,scheme:o,pivot:a,projection:s}){if(n=Am(n),"fx"===t||"fy"===t)return"band";"x"!==t&&"y"!==t||null==s||(n=Cm);for(const t of e){const e=Am(t.type);if(void 0!==e)if(void 0===n)n=e;else if(n!==e)throw new Error(`scale incompatible with channel: ${n} !== ${e}`)}if(n===Cm)return;if(void 0!==n)return n;if(void 0===r&&!e.some((({value:t})=>void 0!==t)))return;const l=Dv.get(t);if(l===Mv)return"sqrt";if(l===Av||l===Sv)return"linear";if(l===Cv)return"ordinal";if((r||i||[]).length>2)return Tm(l);if(void 0!==r){if(uv(r))return Tm(l);if(dv(r))return"utc"}else{const t=e.map((({value:t})=>t)).filter((t=>void 0!==t));if(t.some(uv))return Tm(l);if(t.some(dv))return"utc"}if(l===Ev){if(null!=a||function(t){return null!=t&&Ny.has(`${t}`.toLowerCase())}(o))return"diverging";if(function(t){return null!=t&&xy.has(`${t}`.toLowerCase())}(o))return"categorical"}return"linear"}(t,e,n);if(void 0===n.type&&void 0===n.domain&&void 0===n.range&&null==n.interval&&"fx"!==t&&"fy"!==t&&Dm({type:r})){const n=e.map((({value:t})=>t)).filter((t=>void 0!==t));n.some(dv)?Qy(`Warning: some data associated with the ${t} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${Sm(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${t} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${t} scale to "${Sm(r)}".`):n.some(hv)?Qy(`Warning: some data associated with the ${t} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${Sm(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${t} scale to "${Sm(r)}".`):n.some(fv)&&Qy(`Warning: some data associated with the ${t} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${Sm(r)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${t} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${t} scale to "${Sm(r)}".`)}switch(n.type=r,r){case"diverging":case"diverging-sqrt":case"diverging-pow":case"diverging-log":case"diverging-symlog":case"cyclical":case"sequential":case"linear":case"sqrt":case"threshold":case"quantile":case"pow":case"log":case"symlog":n=Lm(e,n,Sb);break;case"identity":switch(Dv.get(t)){case $v:n=Lm(e,n,Sb);break;case Cv:n=Lm(e,n,Om)}break;case"utc":case"time":n=Lm(e,n,Cb)}switch(r){case"diverging":return em(t,e,n);case"diverging-sqrt":return function(t,e,n){return nm(t,e,{...n,exponent:.5})}(t,e,n);case"diverging-pow":return nm(t,e,n);case"diverging-log":return rm(t,e,n);case"diverging-symlog":return im(t,e,n);case"categorical":case"ordinal":case dm:return fm(t,e,n);case"cyclical":case"sequential":case"linear":return function(t,e,n){return Py(t,Bc(),e,n)}(t,e,n);case"sqrt":return function(t,e,n){return Iy(t,e,{...n,exponent:.5})}(t,e,n);case"threshold":return Hy(t,0,n);case"quantile":return By(t,e,n);case"quantize":return function(t,e,{range:n,n:r=(void 0===n?5:(n=[...n]).length),scheme:i="rdylbu",domain:o=Vy(t,e),unknown:a,interpolate:s,reverse:l}){const[c,u]=Yt(o);let d;return void 0===n?(d=fe(c,u,r),d[0]<=c&&d.splice(0,1),d[d.length-1]>=u&&d.pop(),r=d.length+1,n=void 0!==s?Ki(s,r):Dv.get(t)===Ev?Cy(i,r):void 0):(d=Ki(Ti(c,u),r+1).slice(1,-1),c instanceof Date&&(d=d.map((t=>new Date(t))))),jg(Ob(o))<0&&d.reverse(),Hy(t,0,{domain:d,range:n,reverse:l,unknown:a})}(t,e,n);case"pow":return Iy(t,e,n);case"log":return jy(t,e,n);case"symlog":return Uy(t,e,n);case"utc":return um(t,e,n);case"time":return cm(t,e,n);case"point":return function(t,e,{align:n=.5,padding:r=.5,...i}){return pm(Cc().align(n).padding(r),e,i,t)}(t,e,n);case"band":return function(t,e,{align:n=.5,padding:r=.1,paddingInner:i=r,paddingOuter:o=("fx"===t||"fy"===t?0:r),...a}){return pm(Sc().align(n).paddingInner(i).paddingOuter(o),e,a,t)}(t,e,n);case"identity":return function(t){return{type:"identity",scale:(e=Dv.get(t),e===$v||e===Mv||e===Sv||e===Av?Hc():t=>t)};var e}(t);case void 0:return;default:throw new Error(`unknown scale type: ${r}`)}}function Sm(t){return"symbol"==typeof t?t.description:t}function Am(t){return"string"==typeof t?`${t}`.toLowerCase():t}const Cm={toString:()=>"projection"};function Tm(t){switch(t){case $v:return"point";case Ev:return dm;default:return"ordinal"}}function Dm({type:t}){return"ordinal"===t||"point"===t||"band"===t||t===dm}function Nm({type:t}){return"threshold"===t}function Rm(t){if(void 0===t)return!0;const e=t.domain(),n=t(e[0]);for(let r=1,i=e.length;r<i;++r)if(t(e[r])-n)return!1;return!0}function Lm(t,{domain:e,...n},r){for(const n of t)void 0!==n.value&&(void 0===e&&(e=n.value?.domain),n.value=r(n.value));return{domain:void 0===e?e:r(e),...n}}function Om(t){return zb(t,Pv)}function zm({scale:t,type:e,domain:n,range:r,interpolate:i,interval:o,transform:a,percent:s,pivot:l}){if("identity"===e)return{type:"identity",apply:t=>t,invert:t=>t};const c=t.unknown?t.unknown():void 0;return{type:e,domain:Pb(n),...void 0!==r&&{range:Pb(r)},...void 0!==a&&{transform:a},...s&&{percent:s},...void 0!==c&&{unknown:c},...void 0!==o&&{interval:o},...void 0!==i&&{interpolate:i},...t.clamp&&{clamp:t.clamp()},...void 0!==l&&{pivot:l,symmetric:!1},...t.base&&{base:t.base()},...t.exponent&&{exponent:t.exponent()},...t.constant&&{constant:t.constant()},...t.align&&{align:t.align(),round:t.round()},...t.padding&&(t.paddingInner?{paddingInner:t.paddingInner(),paddingOuter:t.paddingOuter()}:{padding:t.padding()}),...t.bandwidth&&{bandwidth:t.bandwidth(),step:t.step()},apply:e=>t(e),...t.invert&&{invert:e=>t.invert(e)}}}function Pm(t,e){const{fx:n,fy:r}=vm(t,e),i=n?.scale.domain(),o=r?.scale.domain();return i&&o?function(...t){const e="function"==typeof t[t.length-1]&&function(t){return e=>t(...e)}(t.pop()),n=(t=t.map(Ht)).map(Ut),r=t.length-1,i=new Array(r+1).fill(0),o=[];if(r<0||n.some(Bt))return o;for(;;){o.push(i.map(((e,n)=>t[n][e])));let a=r;for(;++i[a]===n[a];){if(0===a)return e?o.map(e):o;i[a--]=0}}}(i,o).map((([t,e],n)=>({x:t,y:e,i:n}))):i?i.map(((t,e)=>({x:t,i:e}))):o?o.map(((t,e)=>({y:t,i:e}))):void 0}function Im(t,{fx:e,fy:n}){const r=Xb(t),i=e?.value,o=n?.value;return e&&n?ne(r,(t=>(t.fx=i[t[0]],t.fy=o[t[0]],t)),(t=>i[t]),(t=>o[t])):e?ne(r,(t=>(t.fx=i[t[0]],t)),(t=>i[t])):ne(r,(t=>(t.fy=o[t[0]],t)),(t=>o[t]))}function jm(t){const e=[],n=new Uint32Array(Le(t,(t=>t.length)));for(const r of t){let i=0;for(const e of t)r!==e&&(n.set(e,i),i+=e.length);e.push(n.slice(0,i))}return e}const Um=new Map([["top",qm],["right",Xm],["bottom",Ym],["left",Wm],["top-left",Km(qm,Wm)],["top-right",Km(qm,Xm)],["bottom-left",Km(Ym,Wm)],["bottom-right",Km(Ym,Xm)],["top-empty",function(t,{y:e},{x:n,y:r,empty:i}){if(i)return!1;if(!e)return;const o=Fm(e,r);if(o>0)return Vm(t,n,e[o-1])}],["right-empty",function(t,{x:e},{x:n,y:r,empty:i}){if(i)return!1;if(!e)return;const o=Fm(e,n);if(o<e.length-1)return Vm(t,e[o+1],r)}],["bottom-empty",function(t,{y:e},{x:n,y:r,empty:i}){if(i)return!1;if(!e)return;const o=Fm(e,r);if(o<e.length-1)return Vm(t,n,e[o+1])}],["left-empty",function(t,{x:e},{x:n,y:r,empty:i}){if(i)return!1;if(!e)return;const o=Fm(e,n);if(o>0)return Vm(t,e[o-1],r)}],["empty",function(t,e,{empty:n}){return n}]]);const Bm=new WeakMap;function Hm(t){let e=Bm.get(t);return e||Bm.set(t,e=new Xt(zb(t,((t,e)=>[t,e])))),e}function Fm(t,e){return Hm(t).get(e)}function Vm(t,e,n){return function(t,e,n){return e=Gb(e),n=Gb(n),t.find((t=>Object.is(Gb(t.x),e)&&Object.is(Gb(t.y),n)))}(t,e,n)?.empty}function qm(t,{y:e},{y:n}){return!e||0===Fm(e,n)}function Ym(t,{y:e},{y:n}){return!e||Fm(e,n)===e.length-1}function Wm(t,{x:e},{x:n}){return!e||0===Fm(e,n)}function Xm(t,{x:e},{x:n}){return!e||Fm(e,n)===e.length-1}function Km(t,e){return function(){return t.apply(null,arguments)&&e.apply(null,arguments)}}function Zm(t,{channels:{fx:e,fy:n},groups:r}){return e&&n?t.map((({x:t,y:e})=>r.get(t)?.get(e)??[])):e?t.map((({x:t})=>r.get(t)??[])):t.map((({y:t})=>r.get(t)??[]))}const Gm=Math.PI,Jm=2*Gm,Qm=.618;function tw({projection:t,inset:e=0,insetTop:n=e,insetRight:r=e,insetBottom:i=e,insetLeft:o=e}={},a){if(null==t)return;if("function"==typeof t.stream)return t;let s,l,c="frame";if(Bb(t)){let e;if(({type:t,domain:l,inset:e,insetTop:n=(void 0!==e?e:n),insetRight:r=(void 0!==e?e:r),insetBottom:i=(void 0!==e?e:i),insetLeft:o=(void 0!==e?e:o),clip:c=c,...s}=t),null==t)return}"function"!=typeof t&&({type:t}=ew(t));const{width:u,height:d,marginLeft:h,marginRight:f,marginTop:p,marginBottom:g}=a,b=u-h-f-o-r,v=d-p-g-n-i;if(t=t?.({width:b,height:v,clip:c,...s}),null==t)return;c=function(t,e,n,r,i){if(!1===t||null==t||"number"==typeof t)return t=>t;!0===t&&(t="frame");if("frame"===`${t}`.toLowerCase())return _s(e,n,r,i);throw new Error(`unknown projection clip type: ${t}`)}(c,h,p,u-f,d-g);let y,m=h+o,w=p+n;if(null!=l){const[[e,n],[r,i]]=El(t).bounds(l),o=Math.min(b/(r-e),v/(i-n));o>0?(m-=(o*(e+r)-b)/2,w-=(o*(n+i)-v)/2,y=Ml({point(t,e){this.stream.point(t*o+m,e*o+w)}})):Qy("Warning: the projection could not be fit to the specified domain; using the default scale.")}return y??=0===m&&0===w?iw():Ml({point(t,e){this.stream.point(t+m,e+w)}}),{stream:e=>t.stream(y.stream(c(e)))}}function ew(t){switch(`${t}`.toLowerCase()){case"albers-usa":return nw(ql,.7463,.4673);case"albers":return rw(Vl,.7463,.4673);case"azimuthal-equal-area":return nw(Kl,4,4);case"azimuthal-equidistant":return nw(Gl,Jm,Jm);case"conic-conformal":return rw(rc,Jm,Jm);case"conic-equal-area":return rw(Fl,6.1702,2.9781);case"conic-equidistant":return rw(sc,7.312,3.6282);case"equal-earth":return nw(pc,5.4133,2.6347);case"equirectangular":return nw(oc,Jm,Gm);case"gnomonic":return nw(bc,3.4641,3.4641);case"identity":return{type:iw};case"reflect-y":return{type:ow};case"mercator":return nw(Ql,Jm,Jm);case"orthographic":return nw(yc,2,2);case"stereographic":return nw(wc,2,2);case"transverse-mercator":return nw(_c,Jm,Jm);default:throw new Error(`unknown projection type: ${t}`)}}function nw(t,e,n){return{type:({width:r,height:i,rotate:o,precision:a=.15,clip:s})=>{const l=t();return null!=a&&l.precision?.(a),null!=o&&l.rotate?.(o),"number"==typeof s&&l.clipAngle?.(s),l.scale(Math.min(r/e,i/n)),l.translate([r/2,i/2]),l},aspectRatio:n/e}}function rw(t,e,n){const{type:r,aspectRatio:i}=nw(t,e,n);return{type:t=>{const{parallels:e,domain:n,width:i,height:o}=t,a=r(t);return null!=e&&(a.parallels(e),void 0===n&&a.fitSize([i,o],{type:"Sphere"})),a},aspectRatio:i}}const iw=Mb({stream:t=>t}),ow=Mb(Ml({point(t,e){this.stream.point(t,-e)}}));function aw(t,e,n,r){const i=n[t],o=n[e],a=i.length,s=n[t]=new Float64Array(a).fill(NaN),l=n[e]=new Float64Array(a).fill(NaN);let c;const u=r.stream({point(t,e){s[c]=t,l[c]=e}});for(c=0;c<a;++c)u.point(i[c],o[c])}function sw({projection:t}={}){return null!=t&&("function"==typeof t.stream||(Bb(t)&&(t=t.type),null!=t))}function lw(t){const e=[],n=[],r={scale:"x",value:e},i={scale:"y",value:n},o={point(t,r){e.push(t),n.push(r)},lineStart(){},lineEnd(){},polygonStart(){},polygonEnd(){},sphere(){}};for(const e of t.value)Xa(e,o);return[r,i]}function cw(t={}){const{document:e=("undefined"!=typeof window?window.document:void 0),clip:n}=t;return{document:e,clip:kv(n)}}function uw(t,{document:e}){return sr(Qe(t).call(e.documentElement))}const dw=function(t){let e,n;return(...r)=>((n?.length!==r.length||n.some(((t,e)=>t!==r[e])))&&(n=r,e=t(...r)),e)}((t=>new Intl.NumberFormat(t)));function hw(t){return Og(t,"Invalid Date")}const fw=function(t="en-US"){const e=function(t="en-US"){const e=dw(t);return t=>null==t||isNaN(t)?void 0:e.format(t)}(t);return t=>(t instanceof Date?hw:"number"==typeof t?e:_b)(t)}(),pw=("undefined"!=typeof window?window.devicePixelRatio>1:"undefined"==typeof it)?0:.5;let gw=0;function bw(){return"plot-clip-"+ ++gw}function vw(t,{title:e,href:n,ariaLabel:r,ariaDescription:i,ariaHidden:o,target:a,fill:s,fillOpacity:l,stroke:c,strokeWidth:u,strokeOpacity:d,strokeLinejoin:h,strokeLinecap:f,strokeMiterlimit:p,strokeDasharray:g,strokeDashoffset:b,opacity:v,mixBlendMode:y,imageFilter:m,paintOrder:w,pointerEvents:x,shapeRendering:_,channels:k},{ariaLabel:$,fill:E="currentColor",fillOpacity:M,stroke:S="none",strokeOpacity:A,strokeWidth:C,strokeLinecap:T,strokeLinejoin:D,strokeMiterlimit:N,paintOrder:R}){null===E&&(s=null,l=null),null===S&&(c=null,d=null),yv(E)?yv(S)||yv(s)&&!k?.fill||(S="none"):!yv(S)||yv(c)&&!k?.stroke||(E="none");const[L,O]=Db(s,E),[z,P]=Nb(l,M),[I,j]=Db(c,S),[U,B]=Nb(d,A),[H,F]=Nb(v);mv(j)||(void 0===u&&(u=C),void 0===f&&(f=T),void 0===h&&(h=D),void 0!==p||/^\s*round\s*$/i.test(h)||(p=N),mv(O)||void 0!==w||(w=R));const[V,q]=Nb(u);return null!==E&&(t.fill=Aw(O,"currentColor"),t.fillOpacity=Cw(P,1)),null!==S&&(t.stroke=Aw(j,"none"),t.strokeWidth=Cw(q,1),t.strokeOpacity=Cw(B,1),t.strokeLinejoin=Aw(h,"miter"),t.strokeLinecap=Aw(f,"butt"),t.strokeMiterlimit=Cw(p,4),t.strokeDasharray=Aw(g,"none"),t.strokeDashoffset=Aw(b,"0")),t.target=_b(a),t.ariaLabel=_b($),t.ariaDescription=_b(i),t.ariaHidden=_b(o),t.opacity=Cw(F,1),t.mixBlendMode=Aw(y,"normal"),t.imageFilter=Aw(m,"none"),t.paintOrder=Aw(w,"normal"),t.pointerEvents=Aw(x,"auto"),t.shapeRendering=Aw(_,"auto"),{title:{value:e,optional:!0,filter:null},href:{value:n,optional:!0,filter:null},ariaLabel:{value:r,optional:!0,filter:null},fill:{value:L,scale:"auto",optional:!0},fillOpacity:{value:z,scale:"auto",optional:!0},stroke:{value:I,scale:"auto",optional:!0},strokeOpacity:{value:U,scale:"auto",optional:!0},strokeWidth:{value:V,optional:!0},opacity:{value:H,scale:"auto",optional:!0}}}function yw(t,e){e&&t.text((t=>fw(e[t])))}function mw(t,e){e&&t.text((([t])=>fw(e[t])))}function ww(t,{target:e,tip:n},{ariaLabel:r,title:i,fill:o,fillOpacity:a,stroke:s,strokeOpacity:l,strokeWidth:c,opacity:u,href:d}){r&&Mw(t,"aria-label",(t=>r[t])),o&&Mw(t,"fill",(t=>o[t])),a&&Mw(t,"fill-opacity",(t=>a[t])),s&&Mw(t,"stroke",(t=>s[t])),l&&Mw(t,"stroke-opacity",(t=>l[t])),c&&Mw(t,"stroke-width",(t=>c[t])),u&&Mw(t,"opacity",(t=>u[t])),d&&Ew(t,(t=>d[t]),e),n||function(t,e){e&&t.filter((t=>Dg(e[t]))).append("title").call(yw,e)}(t,i)}function xw(t,{target:e,tip:n},{ariaLabel:r,title:i,fill:o,fillOpacity:a,stroke:s,strokeOpacity:l,strokeWidth:c,opacity:u,href:d}){r&&Mw(t,"aria-label",(([t])=>r[t])),o&&Mw(t,"fill",(([t])=>o[t])),a&&Mw(t,"fill-opacity",(([t])=>a[t])),s&&Mw(t,"stroke",(([t])=>s[t])),l&&Mw(t,"stroke-opacity",(([t])=>l[t])),c&&Mw(t,"stroke-width",(([t])=>c[t])),u&&Mw(t,"opacity",(([t])=>u[t])),d&&Ew(t,(([t])=>d[t]),e),n||function(t,e){e&&t.filter((([t])=>Dg(e[t]))).append("title").call(mw,e)}(t,i)}function*_w(t,e,n,r){const{z:i}=n,{z:o}=r,a=function({ariaLabel:t,title:e,fill:n,fillOpacity:r,stroke:i,strokeOpacity:o,strokeWidth:a,opacity:s,href:l},{tip:c}){return[t,c?void 0:e,n,r,i,o,a,s,l].filter((t=>void 0!==t))}(r,n),s=[...e,...a];for(const e of o?function(t,e,n){const r=ee(t,(t=>e[t]));return void 0===n&&r.size>1+t.length>>1&&Qy("Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null."),r.values()}(t,o,i):[t]){let t,n;t:for(const r of e){for(const t of s)if(!Ag(t[r])){n&&n.push(-1);continue t}if(void 0!==t){n.push(r);for(let e=0;e<a.length;++e){if(Gb(a[e][r])!==t[e]){yield n,t=a.map((t=>Gb(t[r]))),n=[r];continue t}}}else n&&(yield n),t=a.map((t=>Gb(t[r]))),n=[r]}n&&(yield n)}}function kw(t,e,n,r){!function(t,e,n,r){let i;const{clip:o=r.clip}=e;switch(o){case"frame":{const{width:e,height:o,marginLeft:a,marginRight:s,marginTop:l,marginBottom:c}=n,u=bw();i=`url(#${u})`,t=uw("svg:g",r).call((t=>t.append("svg:clipPath").attr("id",u).append("rect").attr("x",a).attr("y",l).attr("width",e-s-a).attr("height",o-l-c))).each((function(){this.appendChild(t.node()),t.node=()=>this}));break}case"sphere":{const{projection:e}=r;if(!e)throw new Error('the "sphere" clip option requires a projection');const n=bw();i=`url(#${n})`,t.append("clipPath").attr("id",n).append("path").attr("d",El(e)({type:"Sphere"}));break}}Mw(t,"aria-label",e.ariaLabel),Mw(t,"aria-description",e.ariaDescription),Mw(t,"aria-hidden",e.ariaHidden),Mw(t,"clip-path",i)}(t,e,n,r),Mw(t,"fill",e.fill),Mw(t,"fill-opacity",e.fillOpacity),Mw(t,"stroke",e.stroke),Mw(t,"stroke-width",e.strokeWidth),Mw(t,"stroke-opacity",e.strokeOpacity),Mw(t,"stroke-linejoin",e.strokeLinejoin),Mw(t,"stroke-linecap",e.strokeLinecap),Mw(t,"stroke-miterlimit",e.strokeMiterlimit),Mw(t,"stroke-dasharray",e.strokeDasharray),Mw(t,"stroke-dashoffset",e.strokeDashoffset),Mw(t,"shape-rendering",e.shapeRendering),Mw(t,"filter",e.imageFilter),Mw(t,"paint-order",e.paintOrder);const{pointerEvents:i=(!1===r.pointerSticky?"none":void 0)}=e;Mw(t,"pointer-events",i)}function $w(t,e){!function(t,e,n){null!=n&&t.style(e,n)}(t,"mix-blend-mode",e.mixBlendMode),Mw(t,"opacity",e.opacity)}function Ew(t,e,n){t.each((function(t){const r=e(t);if(null!=r){const t=this.ownerDocument.createElementNS(Ke.svg,"a");t.setAttribute("fill","inherit"),t.setAttributeNS(Ke.xlink,"href",r),null!=n&&t.setAttribute("target",n),this.parentNode.insertBefore(t,this).appendChild(this)}}))}function Mw(t,e,n){null!=n&&t.attr(e,n)}function Sw(t,e,{x:n,y:r},i=pw,o=pw){i+=e.dx,o+=e.dy,n?.bandwidth&&(i+=n.bandwidth()/2),r?.bandwidth&&(o+=r.bandwidth()/2),(i||o)&&t.attr("transform",`translate(${i},${o})`)}function Aw(t,e){if((t=_b(t))!==e)return t}function Cw(t,e){if((t=kb(t))!==e)return t}const Tw=/^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;function Dw(t){if(void 0===t)return"plot-d6a7b5";if(t=`${t}`,!Tw.test(t))throw new Error(`invalid class name: ${t}`);return t}function Nw(t,e){if("string"==typeof e)t.property("style",e);else if(null!=e)for(const n of t)Object.assign(n.style,e)}function Rw({frameAnchor:t},{width:e,height:n,marginTop:r,marginRight:i,marginBottom:o,marginLeft:a}){return[/left$/.test(t)?a:/right$/.test(t)?e-i:(a+e-i)/2,/^top/.test(t)?r:/^bottom/.test(t)?n-o:(r+n-o)/2]}class Lw{constructor(t,e={},n={},r){const{facet:i="auto",facetAnchor:o,fx:a,fy:s,sort:l,dx:c=0,dy:u=0,margin:d=0,marginTop:h=d,marginRight:f=d,marginBottom:p=d,marginLeft:g=d,clip:b=r?.clip,channels:v,tip:y,render:m}=n;if(this.data=t,this.sort=Vb(l)?l:null,this.initializer=jv(n).initializer,this.transform=this.initializer?n.transform:Iv(n).transform,null===i||!1===i?this.facet=null:(this.facet=Lb(!0===i?"include":i,"facet",["auto","include","exclude","super"]),this.fx=t===bb&&"string"==typeof a?[a]:a,this.fy=t===bb&&"string"==typeof s?[s]:s),this.facetAnchor=function(t){if(null==t)return null;const e=Um.get(`${t}`.toLowerCase());if(e)return e;throw new Error(`invalid facet anchor: ${t}`)}(o),e=_v(e),void 0!==v&&(e={...Pw(v),...e}),void 0!==r&&(e={...vw(this,n,r),...e}),this.channels=Object.fromEntries(Object.entries(e).map((([e,n])=>{if(Fb(n.value)){const{value:t,label:e=n.label,scale:r=n.scale}=n.value;n={...n,label:e,scale:r,value:t}}if(t===bb&&"string"==typeof n.value){const{value:t}=n;n={...n,value:[t]}}return[e,n]})).filter((([t,{value:e,optional:n}])=>{if(null!=e)return!0;if(n)return!1;throw new Error(`missing channel value: ${t}`)}))),this.dx=+c,this.dy=+u,this.marginTop=+h,this.marginRight=+f,this.marginBottom=+p,this.marginLeft=+g,this.clip=kv(b),this.tip=function(t){return!0===t?"xy":!1===t||null==t?null:"string"==typeof t?Lb(t,"tip",["x","y","xy"]):t}(y),"super"===this.facet){if(a||s)throw new Error("super-faceting cannot use fx or fy");for(const t in this.channels){const{scale:n}=e[t];if("x"===n||"y"===n)throw new Error("super-faceting cannot use x or y")}}null!=m&&(this.render=zw(m,this.render))}initialize(t,e,n){let r=Ob(this.data);void 0===t&&null!=r&&(t=[Xb(r)]);const i=t;null!=this.transform&&(({facets:t,data:r}=this.transform(r,t,n)),r=Ob(r)),void 0!==t&&(t.original=i);const o=function(t,e){return Object.fromEntries(Object.entries(t).map((([t,n])=>[t,dy(e,n,t)])))}(this.channels,r);return null!=this.sort&&function(t,e,n,r,i){const{order:o,reverse:a,reduce:s=!0,limit:l}=i;for(const c in i){if(!Dv.has(c))continue;let{value:u,order:d=o,reverse:h=a,reduce:f=s,limit:p=l}=sv(i[c]);const g=u?.startsWith("-");if(g&&(u=u.slice(1)),d=void 0===d?g!==("width"===u||"height"===u)?my:yy:vy(d),null==f||!1===f)continue;const b="fx"===c||"fy"===c?py(e,r[c]):fy(n,c);if(!b)throw new Error(`missing channel for scale: ${c}`);const v=b.value,[y=0,m=1/0]=lv(p)?p:p<0?[p]:[0,p];if(null==u)b.domain=()=>{let t=Array.from(new Kt(v));return h&&(t=t.reverse()),0===y&&m===1/0||(t=t.slice(y,m)),t};else{const e="data"===u?t:"height"===u?gy(n,"y1","y2"):"width"===u?gy(n,"x1","x2"):by(n,u,"y"===u?"y2":"x"===u?"x2":void 0),r=Jv(!0===f?"max":f,e);b.domain=()=>{let t=re(Xb(v),(t=>r.reduceIndex(t,e)),(t=>v[t]));return d&&t.sort(d),h&&t.reverse(),0===y&&m===1/0||(t=t.slice(y,m)),t.map($b)}}}}(r,t,o,e,this.sort),{data:r,facets:t,channels:o}}filter(t,e,n){for(const r in e){const{filter:i=Ag}=e[r];if(null!==i){const e=n[r];t=t.filter((t=>i(e[t])))}}return t}project(t,e,n){for(const r in t)if("x"===t[r].scale&&/^x|x$/.test(r)){const i=r.replace(/^x|x$/,"y");i in t&&"y"===t[i].scale&&aw(r,i,e,n.projection)}}scale(t,e,n){const r=function(t,e){const n=Object.fromEntries(Object.entries(t).map((([t,{scale:n,value:r}])=>{const i=null==n?null:e[n];return[t,null==i?r:zb(r,i)]})));return n.channels=t,n}(t,e);return n.projection&&this.project(t,r,n),r}}function Ow(...t){return t.plot=Lw.prototype.plot,t}function zw(t,e){if(null==t)return null===e?void 0:e;if(null==e)return null===t?void 0:t;if("function"!=typeof t)throw new TypeError(`invalid render transform: ${t}`);if("function"!=typeof e)throw new TypeError(`invalid render transform: ${e}`);return function(n,r,i,o,a,s){return t.call(this,n,r,i,o,a,((t,n,r,i,o)=>e.call(this,t,n,r,i,o,s)))}}function Pw(t){return Object.fromEntries(Object.entries(_v(t)).map((([t,e])=>(void 0===(e="string"==typeof e?{value:e,label:t}:sv(e)).filter&&null==e.scale&&(e={...e,filter:null}),[t,e]))))}function Iw(t,e){return!0===t?.tip?{...t,tip:e}:Bb(t?.tip)&&void 0===t.tip.pointer?{...t,tip:{...t.tip,pointer:e}}:t}function jw({x:t,y:e,fy:n,fx:r},{projection:i,aspectRatio:o},{width:a,marginTopDefault:s,marginRightDefault:l,marginBottomDefault:c,marginLeftDefault:u}){const d=n?n.scale.domain().length:1,h=function(t){if("function"==typeof t?.stream)return Qm;if(Bb(t)&&(t=t.type),null!=t){if("function"!=typeof t){const{aspectRatio:e}=ew(t);if(e)return e}return Qm}}(i);if(h){const t=(1.1*d-.1)/(1.1*(r?r.scale.domain().length:1)-.1)*h,e=Math.max(.1,Math.min(10,t));return Math.round((a-u-l)*e+s+c)}const f=e?Dm(e)?e.scale.domain().length:Math.max(7,17/d):1;if(null!=o){if(o=+o,!(isFinite(o)&&o>0))throw new Error(`invalid aspectRatio: ${o}`);const i=Uw("y",e)/(Uw("x",t)*o),d=r?r.scale.bandwidth():1,h=n?n.scale.bandwidth():1;return(i*(d*(a-u-l)-t.insetLeft-t.insetRight)+e.insetTop+e.insetBottom)/h+s+c}return!(!e&&!n)*Math.max(1,Math.min(60,f*d))*20+30*!!r+60}function Uw(t,e){if(!e)throw new Error(`aspectRatio requires ${t} scale`);const{type:n,domain:r}=e;let i;switch(n){case"linear":case"utc":case"time":i=Number;break;case"pow":{const t=e.scale.exponent();i=e=>Math.pow(e,t);break}case"log":i=Math.log;break;case"point":case"band":return r.length;default:throw new Error(`unsupported ${t} scale for aspectRatio: ${n}`)}const[o,a]=Yt(r);return Math.abs(i(a)-i(o))}const Bw=new WeakMap;function Hw(t,e,{x:n,y:r,px:i,py:o,maxRadius:a=40,channels:s,render:l,...c}={}){return a=+a,null!=i&&(n??=null,s={...s,px:{value:i,scale:"x"}}),null!=o&&(r??=null,s={...s,py:{value:o,scale:"y"}}),{x:n,y:r,channels:s,...c,render:zw((function(n,r,i,o,s,l){const c=(s={...s,pointerSticky:!1}).ownerSVGElement,{data:u}=s.getMarkState(this);let d=Bw.get(c);d||Bw.set(c,d={sticky:!1,roots:[],renders:[]});let h=d.renders.push(N)-1;const{x:f,y:p,fx:g,fy:b}=r;let v=g?g(n.fx)-o.marginLeft:0,y=b?b(n.fy)-o.marginTop:0;f?.bandwidth&&(v+=f.bandwidth()/2),p?.bandwidth&&(y+=p.bandwidth()/2);const m=null!=n.fi;let w;if(m){let t=d.facetStates;t||(d.facetStates=t=new Map),w=t.get(this),w||t.set(this,w=new Map)}const[x,_]=Rw(this,o),{px:k,py:$}=i,E=k?t=>k[t]:Yw(i,x),M=$?t=>$[t]:Ww(i,_);let S,A,C,T;function D(t,e){if(m){if(T&&(T=cancelAnimationFrame(T)),null!=t)return w.set(n.fi,e),void(T=requestAnimationFrame((()=>{T=null;for(const[r,i]of w)if(i<e||i===e&&r<n.fi){t=null;break}N(t)})));w.delete(n.fi)}N(t)}function N(t){if(S===t&&C===d.sticky)return;S=t,C=s.pointerSticky=d.sticky;const e=null==S?[]:[S];m&&(e.fx=n.fx,e.fy=n.fy,e.fi=n.fi);const a=l(e,r,i,o,s);if(A){if(m){const t=A.parentNode,e=A.getAttribute("transform"),n=a.getAttribute("transform");e?a.setAttribute("transform",e):a.removeAttribute("transform"),n?t.setAttribute("transform",n):t.removeAttribute("transform"),a.removeAttribute("aria-label"),a.removeAttribute("aria-description"),a.removeAttribute("aria-hidden")}A.replaceWith(a)}return d.roots[h]=A=a,null==S&&w?.size>1||s.dispatchValue(null==S?null:u[S]),a}function R(r){if(d.sticky||"mouse"===r.pointerType&&1===r.buttons)return;let[i,s]=function(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}(r);i-=v,s-=y;const l=i<o.marginLeft||i>o.width-o.marginRight?1:t,c=s<o.marginTop||s>o.height-o.marginBottom?1:e;let u=null,h=a*a;for(const t of n){const e=l*(E(t)-i),n=c*(M(t)-s),r=e*e+n*n;r<=h&&(u=t,h=r)}if(null!=u&&(1!==t||1!==e)){const t=E(u)-i,e=M(u)-s;h=t*t+e*e}D(u,h)}return c.addEventListener("pointerenter",R),c.addEventListener("pointermove",R),c.addEventListener("pointerdown",(function(t){"mouse"===t.pointerType&&null!=S&&(d.sticky&&d.roots.some((e=>e?.contains(t.target)))||(d.sticky?(d.sticky=!1,d.renders.forEach((t=>t(null)))):(d.sticky=!0,N(S)),t.stopImmediatePropagation()))})),c.addEventListener("pointerleave",(function(t){"mouse"===t.pointerType&&(d.sticky||D(null))})),N(null)}),l)}}function Fw(t){return Hw(1,1,t)}function Vw(t){return Hw(1,.01,t)}function qw(t){return Hw(.01,1,t)}function Yw({x1:t,x2:e,x:n=t},r){return t&&e?n=>(t[n]+e[n])/2:n?t=>n[t]:()=>r}function Ww({y1:t,y2:e,y:n=t},r){return t&&e?n=>(t[n]+e[n])/2:n?t=>n[t]:()=>r}function Xw(t){return Dm(t)&&void 0===t.interval?void 0:"tabular-nums"}function Kw(t,e){let{label:n=t.label,tickSize:r=6,width:i=240,height:o=44+r,marginTop:a=18,marginRight:s=0,marginBottom:l=16+r,marginLeft:c=0,style:u,ticks:d=(i-c-s)/64,tickFormat:h,fontVariant:f=Xw(t),round:p=!0,opacity:g,className:b}=e;const v=cw(e);b=Dw(b),g=Nb(g)[1],null===h&&(h=()=>null);const y=uw("svg",v).attr("class",`${b}-ramp`).attr("font-family","system-ui, sans-serif").attr("font-size",10).attr("width",i).attr("height",o).attr("viewBox",`0 0 ${i} ${o}`).call((t=>t.append("style").text(`:where(.${b}-ramp) {\n  display: block;\n  height: auto;\n  height: intrinsic;\n  max-width: 100%;\n  overflow: visible;\n}\n:where(.${b}-ramp text) {\n  white-space: pre;\n}`))).call(Nw,u);let m,w=t=>t.selectAll(".tick line").attr("y1",a+l-o);const x=p?(t,e)=>t.rangeRound(e):(t,e)=>t.range(e),{type:_,domain:k,range:$,interpolate:E,scale:M,pivot:S}=t;if(E){const t=void 0===$?E:Xi(1===E.length?Zy(E):E,$);m=x(M.copy(),Ki(Ti(c,i-s),Math.min(k.length+(void 0!==S),void 0===$?1/0:$.length)));const e=256,n=v.document.createElement("canvas");n.width=e,n.height=1;const r=n.getContext("2d");for(let n=0,i=e-1;n<e;++n)r.fillStyle=t(n/i),r.fillRect(n,0,1,1);y.append("image").attr("opacity",g).attr("x",c).attr("y",a).attr("width",i-c-s).attr("height",o-a-l).attr("preserveAspectRatio","none").attr("xlink:href",n.toDataURL())}else if("threshold"===_){const t=k,e=void 0===h?t=>t:"string"==typeof h?ba(h):h;m=x(Bc().domain([-1,$.length-1]),[c,i-s]),y.append("g").attr("fill-opacity",g).selectAll().data($).enter().append("rect").attr("x",((t,e)=>m(e-1))).attr("y",a).attr("width",((t,e)=>m(e)-m(e-1))).attr("height",o-a-l).attr("fill",(t=>t)),d=zb(t,((t,e)=>e)),h=n=>e(t[n],n)}else m=x(Sc().domain(k),[c,i-s]),y.append("g").attr("fill-opacity",g).selectAll().data(k).enter().append("rect").attr("x",m).attr("y",a).attr("width",Math.max(0,m.bandwidth()-1)).attr("height",o-a-l).attr("fill",M),w=()=>{};return y.append("g").attr("transform",`translate(0,${o-l})`).call(function(t){return He(0,t)}(m).ticks(Array.isArray(d)?null:d,"string"==typeof h?h:void 0).tickFormat("function"==typeof h?h:void 0).tickSize(r).tickValues(Array.isArray(d)?d:null)).attr("font-size",null).attr("font-family",null).attr("font-variant",Aw(f,"normal")).call(w).call((t=>t.select(".domain").remove())),void 0!==n&&y.append("text").attr("x",c).attr("y",a-6).attr("fill","currentColor").attr("font-weight","bold").text(n),y.node()}const Zw=Math.PI/180;function Gw(t,{marker:e,markerStart:n=e,markerMid:r=e,markerEnd:i=e}={}){t.markerStart=Jw(n),t.markerMid=Jw(r),t.markerEnd=Jw(i)}function Jw(t){if(null==t||!1===t)return null;if(!0===t)return ex;if("function"==typeof t)return t;switch(`${t}`.toLowerCase()){case"none":return null;case"arrow":return Qw("auto");case"arrow-reverse":return Qw("auto-start-reverse");case"dot":return tx;case"circle":case"circle-fill":return ex;case"circle-stroke":return nx;case"tick":return rx("auto");case"tick-x":return rx(90);case"tick-y":return rx(0)}throw new Error(`invalid marker: ${t}`)}function Qw(t){return(e,n)=>uw("svg:marker",n).attr("viewBox","-5 -5 10 10").attr("markerWidth",6.67).attr("markerHeight",6.67).attr("orient",t).attr("fill","none").attr("stroke",e).attr("stroke-width",1.5).attr("stroke-linecap","round").attr("stroke-linejoin","round").call((t=>t.append("path").attr("d","M-1.5,-3l3,3l-3,3"))).node()}function tx(t,e){return uw("svg:marker",e).attr("viewBox","-5 -5 10 10").attr("markerWidth",6.67).attr("markerHeight",6.67).attr("fill",t).attr("stroke","none").call((t=>t.append("circle").attr("r",2.5))).node()}function ex(t,e){return uw("svg:marker",e).attr("viewBox","-5 -5 10 10").attr("markerWidth",6.67).attr("markerHeight",6.67).attr("fill",t).attr("stroke","var(--plot-background)").attr("stroke-width",1.5).call((t=>t.append("circle").attr("r",3))).node()}function nx(t,e){return uw("svg:marker",e).attr("viewBox","-5 -5 10 10").attr("markerWidth",6.67).attr("markerHeight",6.67).attr("fill","var(--plot-background)").attr("stroke",t).attr("stroke-width",1.5).call((t=>t.append("circle").attr("r",3))).node()}function rx(t){return(e,n)=>uw("svg:marker",n).attr("viewBox","-3 -3 6 6").attr("markerWidth",6).attr("markerHeight",6).attr("orient",t).attr("stroke",e).call((t=>t.append("path").attr("d","M0,-3v6"))).node()}let ix=0;function ox(t,e,{stroke:n},r){return sx(t,e,n&&(t=>n[t]),r)}function ax(t,e,{stroke:n},r){return sx(t,e,n&&(([t])=>n[t]),r)}function sx(t,{markerStart:e,markerMid:n,markerEnd:r,stroke:i},o=(()=>i),a){const s=new Map;function l(t){return function(e){const n=o(e);let r=s.get(t);r||s.set(t,r=new Map);let i=r.get(n);if(!i){const e=this.parentNode.insertBefore(t(n,a),this),o="plot-marker-"+ ++ix;e.setAttribute("id",o),r.set(n,i=`url(#${o})`)}return i}}e&&t.attr("marker-start",l(e)),n&&t.attr("marker-mid",l(n)),r&&t.attr("marker-end",l(r))}function lx({inset:t,insetLeft:e,insetRight:n,...r}={}){return[e,n]=ux(t,e,n),{inset:t,insetLeft:e,insetRight:n,...r}}function cx({inset:t,insetTop:e,insetBottom:n,...r}={}){return[e,n]=ux(t,e,n),{inset:t,insetTop:e,insetBottom:n,...r}}function ux(t,e,n){return void 0===t&&void 0===e&&void 0===n?pw?[1,0]:[.5,.5]:[e,n]}function dx(t,{interval:e}){return(t={...sv(t)}).interval=iv(void 0===t.interval?e:t.interval),t}function hx(t,e,n,r){const{[t]:i,[`${t}1`]:o,[`${t}2`]:a}=n,{value:s,interval:l}=dx(i,n);if(null==s||null==l&&!r)return n;const c=tv(i);if(null==l){let e;const i={transform:t=>e||(e=fb(t,s)),label:c};return{...n,[t]:void 0,[`${t}1`]:void 0===o?i:o,[`${t}2`]:void 0!==a||o===a&&r?a:i}}let u,d;function h(t){return void 0!==d&&t===u?d:d=zb(fb(u=t,s),(t=>l.floor(t)))}return e({...n,[t]:void 0,[`${t}1`]:void 0===o?{transform:h,label:c}:o,[`${t}2`]:void 0===a?{transform:t=>h(t).map((t=>l.offset(t))),label:c}:a})}function fx(t,e,n){const{[t]:r}=n,{value:i,interval:o}=dx(r,n);return null==i||null==o?n:e({...n,[t]:{label:tv(r),transform:t=>{const e=zb(fb(t,i),(t=>o.floor(t))),n=e.map((t=>o.offset(t)));return e.map(dv(e)?(t,e)=>null==t||isNaN(t=+t)||null==(e=n[e])||isNaN(e=+e)?void 0:new Date((t+e)/2):(t,e)=>null==t||null==(e=n[e])?NaN:(+t+ +e)/2)}}})}function px(t={}){return hx("x",lx,t)}function gx(t={}){return hx("y",cx,t)}const bx={ariaLabel:"rule",fill:null,stroke:"currentColor"};class vx extends Lw{constructor(t,e={}){const{x:n,y1:r,y2:i,inset:o=0,insetTop:a=o,insetBottom:s=o}=e;super(t,{x:{value:n,scale:"x",optional:!0},y1:{value:r,scale:"y",optional:!0},y2:{value:i,scale:"y",optional:!0}},Iw(e,"x"),bx),this.insetTop=kb(a),this.insetBottom=kb(s),Gw(this,e)}render(t,e,n,r,i){const{x:o,y:a}=e,{x:s,y1:l,y2:c}=n,{width:u,height:d,marginTop:h,marginRight:f,marginLeft:p,marginBottom:g}=r,{insetTop:b,insetBottom:v}=this;return uw("svg:g",i).call(kw,this,r,i).call(Sw,this,{x:s&&o},pw,0).call((e=>e.selectAll().data(t).enter().append("line").call($w,this).attr("x1",s?t=>s[t]:(p+u-f)/2).attr("x2",s?t=>s[t]:(p+u-f)/2).attr("y1",l&&!Rm(a)?t=>l[t]+b:h+b).attr("y2",c&&!Rm(a)?a.bandwidth?t=>c[t]+a.bandwidth()-v:t=>c[t]-v:d-g-v).call(ww,this,n).call(ox,this,n,i))).node()}}class yx extends Lw{constructor(t,e={}){const{x1:n,x2:r,y:i,inset:o=0,insetRight:a=o,insetLeft:s=o}=e;super(t,{y:{value:i,scale:"y",optional:!0},x1:{value:n,scale:"x",optional:!0},x2:{value:r,scale:"x",optional:!0}},Iw(e,"y"),bx),this.insetRight=kb(a),this.insetLeft=kb(s),Gw(this,e)}render(t,e,n,r,i){const{x:o,y:a}=e,{y:s,x1:l,x2:c}=n,{width:u,height:d,marginTop:h,marginRight:f,marginLeft:p,marginBottom:g}=r,{insetLeft:b,insetRight:v}=this;return uw("svg:g",i).call(kw,this,r,i).call(Sw,this,{y:s&&a},0,pw).call((e=>e.selectAll().data(t).enter().append("line").call($w,this).attr("x1",l&&!Rm(o)?t=>l[t]+b:p+b).attr("x2",c&&!Rm(o)?o.bandwidth?t=>c[t]+o.bandwidth()-v:t=>c[t]-v:u-f-v).attr("y1",s?t=>s[t]:(h+d-g)/2).attr("y2",s?t=>s[t]:(h+d-g)/2).call(ww,this,n).call(ox,this,n,i))).node()}}function mx(t,e){let{x:n=mb,y:r,y1:i,y2:o,...a}=gx(e);return[i,o]=xx(r,i,o),new vx(t,{...a,x:n,y1:i,y2:o})}function wx(t,e){let{y:n=mb,x:r,x1:i,x2:o,...a}=px(e);return[i,o]=xx(r,i,o),new yx(t,{...a,y:n,x1:i,x2:o})}function xx(t,e,n){if(null==t){if(void 0===e){if(void 0!==n)return[0,n]}else if(void 0===n)return[0,e]}else{if(void 0===e)return void 0===n?[0,t]:[t,n];if(void 0===n)return[t,e]}return[e,n]}function _x(t,...e){let n=e.length;for(let r=0,i=!0;r<n;++r)"function"!=typeof e[r]&&(i&&(t=t.slice(),i=!1),t.splice(r,2,t[r]+e[r]+t[r+1]),e.splice(r,1),--r,--n);return r=>{let i=t[0];for(let o=0;o<n;++o)i+=e[o](r)+t[o+1];return i}}const kx={ariaLabel:"text",strokeLinejoin:"round",strokeWidth:3,paintOrder:"stroke"},$x="­";class Ex extends Lw{constructor(t,e={}){const{x:n,y:r,text:i=(lv(t)&&cv(t)?mb:yb),frameAnchor:o,textAnchor:a=(/right$/i.test(o)?"end":/left$/i.test(o)?"start":"middle"),lineAnchor:s=(/^top/i.test(o)?"top":/^bottom/i.test(o)?"bottom":"middle"),lineHeight:l=1,lineWidth:c=1/0,textOverflow:u,monospace:d,fontFamily:h=(d?"ui-monospace, monospace":void 0),fontSize:f,fontStyle:p,fontVariant:g,fontWeight:b,rotate:v}=e,[y,m]=Nb(v,0),[w,x]=function(t){return null==t||"number"==typeof t?[void 0,t]:"string"!=typeof t?[t,void 0]:(t=t.trim().toLowerCase(),Nx.has(t)||/^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(t)?[void 0,t]:[t,void 0])}(f);var _;if(super(t,{x:{value:n,scale:"x",optional:!0},y:{value:r,scale:"y",optional:!0},fontSize:{value:w,optional:!0},rotate:{value:(_=y,null==_?null:{transform:t=>fb(t,_,Float64Array),label:tv(_)}),optional:!0},text:{value:i,filter:Dg,optional:!0}},e,kx),this.rotate=m,this.textAnchor=Aw(a,"middle"),this.lineAnchor=Lb(s,"lineAnchor",["top","middle","bottom"]),this.lineHeight=+l,this.lineWidth=+c,this.textOverflow=Mx(u),this.monospace=!!d,this.fontFamily=_b(h),this.fontSize=x,this.fontStyle=_b(p),this.fontVariant=_b(g),this.fontWeight=_b(b),this.frameAnchor=xv(o),!(this.lineWidth>=0))throw new Error(`invalid lineWidth: ${c}`);this.splitLines=Px(this),this.clipLine=Ix(this)}render(t,e,n,r,i){const{x:o,y:a}=e,{x:s,y:l,rotate:c,text:u,title:d,fontSize:h}=n,{rotate:f}=this,[p,g]=Rw(this,r);return uw("svg:g",i).call(kw,this,r,i).call(Dx,this,u,r).call(Sw,this,{x:s&&o,y:l&&a}).call((e=>e.selectAll().data(t).enter().append("text").call($w,this).call(Sx,this,u,d).attr("transform",_x`translate(${s?t=>s[t]:p},${l?t=>l[t]:g})${c?t=>` rotate(${c[t]})`:f?` rotate(${f})`:""}`).call(Mw,"font-size",h&&(t=>h[t])).call(ww,this,n))).node()}}function Mx(t){return null==t?null:Lb(t,"textOverflow",["clip","ellipsis","clip-start","clip-end","ellipsis-start","ellipsis-middle","ellipsis-end"]).replace(/^(clip|ellipsis)$/,"$1-end")}function Sx(t,e,n,r){if(!n)return;const{lineAnchor:i,lineHeight:o,textOverflow:a,splitLines:s,clipLine:l}=e;t.each((function(t){const e=s(fw(n[t])??"").map(l),c=e.length,u="top"===i?.71:"bottom"===i?1-c:(164-100*c)/200;if(c>1){let t=0;for(let n=0;n<c;++n){if(++t,!e[n])continue;const r=this.ownerDocument.createElementNS(Ke.svg,"tspan");r.setAttribute("x",0),n===t-1?r.setAttribute("y",(u+n)*o+"em"):r.setAttribute("dy",t*o+"em"),r.textContent=e[n],this.appendChild(r),t=0}}else u&&this.setAttribute("y",u*o+"em"),this.textContent=e[0];if(a&&!r&&e[0]!==n[t]){const e=this.ownerDocument.createElementNS(Ke.svg,"title");e.textContent=n[t],this.appendChild(e)}}))}function Ax(t,{x:e,y:n,...r}={}){return void 0===r.frameAnchor&&([e,n]=Yb(e,n)),new Ex(t,{...r,x:e,y:n})}function Cx(t,{x:e=mb,...n}={}){return new Ex(t,function(t={}){return fx("y",cx,t)}({...n,x:e}))}function Tx(t,{y:e=mb,...n}={}){return new Ex(t,function(t={}){return fx("x",lx,t)}({...n,y:e}))}function Dx(t,e,n){Mw(t,"text-anchor",e.textAnchor),Mw(t,"font-family",e.fontFamily),Mw(t,"font-size",e.fontSize),Mw(t,"font-style",e.fontStyle),Mw(t,"font-variant",void 0===e.fontVariant?function(t){return t&&(function(t){for(const e of t)if(null!=e)return"number"==typeof e}(t)||dv(t))?"tabular-nums":void 0}(n):e.fontVariant),Mw(t,"font-weight",e.fontWeight)}const Nx=new Set(["inherit","initial","revert","unset","xx-small","x-small","small","medium","large","x-large","xx-large","xxx-large","larger","smaller"]);function Rx(t,e,n){const r=[];let i,o=0;for(const[a,s,l]of function*(t){let e=0,n=0;const r=t.length;for(;n<r;){let r=1;switch(t[n]){case $x:case"-":++n,yield[e,n,!1],e=n;break;case" ":for(yield[e,n,!1];" "===t[++n];);e=n;break;case"\r":"\n"===t[n+1]&&++r;case"\n":yield[e,n,!0],n+=r,e=n;break;default:++n}}yield[e,n,!0]}(t))void 0===i&&(i=a),o>i&&n(t,i,s)>e&&(r.push(t.slice(i,o)+(t[o-1]===$x?"-":"")),i=a),l?(r.push(t.slice(i,s)),i=void 0):o=s;return r}const Lx={a:56,b:63,c:57,d:63,e:58,f:37,g:62,h:60,i:26,j:26,k:55,l:26,m:88,n:60,o:60,p:62,q:62,r:39,s:54,t:38,u:60,v:55,w:79,x:54,y:55,z:55,A:69,B:67,C:73,D:74,E:61,F:58,G:76,H:75,I:28,J:55,K:67,L:58,M:89,N:75,O:78,P:65,Q:78,R:67,S:65,T:65,U:75,V:69,W:98,X:69,Y:67,Z:67,0:64,1:48,2:62,3:64,4:66,5:63,6:65,7:58,8:65,9:65," ":29,"!":32,'"':49,"'":31,"(":39,")":39,",":31,"-":48,".":31,"/":32,":":31,";":31,"?":52,"‘":31,"’":31,"“":47,"”":47,"…":82};function Ox(t,e=0,n=t.length){let r=0;for(let i=e;i<n;i=qx(t,i))r+=Lx[t[i]]??(Wx(t,i)?120:Lx.e);return r}function zx(t,e=0,n=t.length){let r=0;for(let i=e;i<n;i=qx(t,i))r+=Wx(t,i)?126:63;return r}function Px({monospace:t,lineWidth:e,textOverflow:n}){if(null!=n||e==1/0)return t=>t.split(/\r\n?|\n/g);const r=t?zx:Ox,i=100*e;return t=>Rx(t,i,r)}function Ix({monospace:t,lineWidth:e,textOverflow:n}){if(null==n||e==1/0)return t=>t;const r=t?zx:Ox,i=100*e;switch(n){case"clip-start":return t=>Hx(t,i,r,"");case"clip-end":return t=>Bx(t,i,r,"");case"ellipsis-start":return t=>Hx(t,i,r,jx);case"ellipsis-middle":return t=>function(t,e,n,r){t=t.trim();const i=n(t);if(i<=e)return t;const o=n(r)/2,[a,s]=Ux(t,e/2,n,o),[l]=Ux(t,i-e/2-s+o,n,-o);return l<0?r:t.slice(0,a).trimEnd()+r+t.slice(qx(t,l)).trimStart()}(t,i,r,jx);case"ellipsis-end":return t=>Bx(t,i,r,jx)}}const jx="…";function Ux(t,e,n,r){const i=[];let o=0;for(let a=0,s=0,l=t.length;a<l;a=s){s=qx(t,a);const l=n(t,a,s);if(o+l>e){for(o+=r;o>e&&a>0;)s=a,a=i.pop(),o-=n(t,a,s);return[a,e-o]}o+=l,i.push(a)}return[-1,0]}function Bx(t,e,n,r){t=t.trim();const i=n(r),[o]=Ux(t,e,n,i);return o<0?t:t.slice(0,o).trimEnd()+r}function Hx(t,e,n,r){const i=n(t=t.trim());if(i<=e)return t;const o=n(r),[a]=Ux(t,i-e+o,n,-o);return a<0?r:r+t.slice(qx(t,a)).trimStart()}const Fx=/[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy,Vx=/\p{Extended_Pictographic}/uy;function qx(t,e){return e+=function(t,e){const n=t.charCodeAt(e);if(n>=55296&&n<56320){const n=t.charCodeAt(e+1);return n>=56320&&n<57344}return!1}(t,e)?2:1,function(t,e){return!Yx(t,e)&&(Fx.lastIndex=e,Fx.test(t))}(t,e)&&(e=Fx.lastIndex),function(t,e){return 8205===t.charCodeAt(e)}(t,e)?qx(t,e+1):e}function Yx(t,e){return t.charCodeAt(e)<128}function Wx(t,e){return!Yx(t,e)&&(Vx.lastIndex=e,Vx.test(t))}const Xx={ariaLabel:"vector",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinejoin:"round",strokeLinecap:"round"},Kx=3.5,Zx=5*Kx,Gx={draw(t,e,n){const r=e*n/Zx;t.moveTo(0,0),t.lineTo(0,-e),t.moveTo(-r,r-e),t.lineTo(0,-e),t.lineTo(r,r-e)}},Jx={draw(t,e,n){t.moveTo(-n,0),t.lineTo(0,-e),t.lineTo(n,0)}},Qx=new Map([["arrow",Gx],["spike",Jx]]);class t_ extends Lw{constructor(t,e={}){const{x:n,y:r,r:i=Kx,length:o,rotate:a,shape:s=Gx,anchor:l="middle",frameAnchor:c}=e,[u,d]=Nb(o,12),[h,f]=Nb(a,0);super(t,{x:{value:n,scale:"x",optional:!0},y:{value:r,scale:"y",optional:!0},length:{value:u,scale:"length",optional:!0},rotate:{value:h,optional:!0}},e,Xx),this.r=+i,this.length=d,this.rotate=f,this.shape=function(t){if(function(t){return t&&"function"==typeof t.draw}(t))return t;const e=Qx.get(`${t}`.toLowerCase());if(e)return e;throw new Error(`invalid shape: ${t}`)}(s),this.anchor=Lb(l,"anchor",["start","middle","end"]),this.frameAnchor=xv(c)}render(t,e,n,r,i){const{x:o,y:a}=e,{x:s,y:l,length:c,rotate:u}=n,{length:d,rotate:h,anchor:f,shape:p,r:g}=this,[b,v]=Rw(this,r);return uw("svg:g",i).call(kw,this,r,i).call(Sw,this,{x:s&&o,y:l&&a}).call((e=>e.selectAll().data(t).enter().append("path").call($w,this).attr("transform",_x`translate(${s?t=>s[t]:b},${l?t=>l[t]:v})${u?t=>` rotate(${u[t]})`:h?` rotate(${h})`:""}${"start"===f?"":"end"===f?c?t=>` translate(0,${c[t]})`:` translate(0,${d})`:c?t=>` translate(0,${c[t]/2})`:` translate(0,${d/2})`}`).attr("d",c?t=>{const e=oa();return p.draw(e,c[t],g),e}:(()=>{const t=oa();return p.draw(t,d,g),t})()).call(ww,this,n))).node()}}function e_(t,e={}){const{x:n=mb,...r}=e;return new t_(t,{...r,x:n})}function n_(t,e={}){const{y:n=mb,...r}=e;return new t_(t,{...r,y:n})}function r_(t,e){return arguments.length<2&&!lv(t)&&(e=t,t=null),void 0===e&&(e={}),[t,e]}function i_({anchor:t}={},e){return void 0===t?e[0]:Lb(t,"anchor",e)}function o_(t){return i_(t,["left","right"])}function a_(t){return i_(t,["right","left"])}function s_(t){return i_(t,["bottom","top"])}function l_(t){return i_(t,["top","bottom"])}function c_(){const[t,e]=r_(...arguments);return f_("y",o_(e),t,e)}function u_(){const[t,e]=r_(...arguments);return f_("fy",a_(e),t,e)}function d_(){const[t,e]=r_(...arguments);return p_("x",s_(e),t,e)}function h_(){const[t,e]=r_(...arguments);return p_("fx",l_(e),t,e)}function f_(t,e,n,{color:r="currentColor",opacity:i=1,stroke:o=r,strokeOpacity:a=i,strokeWidth:s=1,fill:l=r,fillOpacity:c=i,textAnchor:u,textStroke:d,textStrokeOpacity:h,textStrokeWidth:f,tickSize:p=("y"===t?6:0),tickPadding:g,tickRotate:b,x:v,margin:y,marginTop:m=(void 0===y?20:y),marginRight:w=(void 0===y?"right"===e?40:0:y),marginBottom:x=(void 0===y?20:y),marginLeft:_=(void 0===y?"left"===e?40:0:y),label:k,labelAnchor:$,labelArrow:E,labelOffset:M,...S}){return p=kb(p),g=kb(g),b=kb(b),void 0!==$&&($=Lb($,"labelAnchor",["center","top","bottom"])),E=R_(E),Ow(p&&!yv(o)?function(t,e,n,{strokeWidth:r=1,strokeLinecap:i=null,strokeLinejoin:o=null,facetAnchor:a=e+("y"===t?"-empty":""),frameAnchor:s=e,tickSize:l,inset:c=0,insetLeft:u=c,insetRight:d=c,dx:h=0,y:f=("y"===t?void 0:null),...p}){return k_(n_,t,n,{ariaLabel:`${t}-axis tick`,ariaHidden:!0},{strokeWidth:r,strokeLinecap:i,strokeLinejoin:o,facetAnchor:a,frameAnchor:s,y:f,...p,dx:"left"===e?+h-pw+ +u:+h+pw-d,anchor:"start",length:l,shape:"left"===e?C_:T_})}(t,e,n,{stroke:o,strokeOpacity:a,strokeWidth:s,tickSize:p,tickPadding:g,tickRotate:b,x:v,...S}):null,yv(l)?null:function(t,e,n,{facetAnchor:r=e+("y"===t?"-empty":""),frameAnchor:i=e,tickSize:o,tickRotate:a=0,tickPadding:s=Math.max(3,9-o)+(Math.abs(a)>60?4*Math.cos(a*Zw):0),text:l,textAnchor:c=(Math.abs(a)>60?"middle":"left"===e?"end":"start"),lineAnchor:u=(a>60?"top":a<-60?"bottom":"middle"),fontVariant:d,inset:h=0,insetLeft:f=h,insetRight:p=h,dx:g=0,y:b=("y"===t?void 0:null),...v}){return k_(Tx,t,n,{ariaLabel:`${t}-axis tick label`},{facetAnchor:r,frameAnchor:i,text:l,textAnchor:c,lineAnchor:u,fontVariant:d,rotate:a,y:b,...v,dx:"left"===e?+g-o-s+ +f:+g+ +o+ +s-p},(function(t,n,r,i,o){void 0===d&&(this.fontVariant=D_(t)),void 0===l&&(o.text=$_(t,n,r,i,e))}))}(t,e,n,{fill:l,fillOpacity:c,stroke:d,strokeOpacity:h,strokeWidth:f,textAnchor:u,tickSize:p,tickPadding:g,tickRotate:b,x:v,marginTop:m,marginRight:w,marginBottom:x,marginLeft:_,...S}),yv(l)||null===k?null:Ax([],__({fill:l,fillOpacity:c,...S},(function(n,r,i,o,a){const s=o[t],{marginTop:l,marginRight:c,marginBottom:u,marginLeft:d}="y"===t&&a.inset||a,h=$??(s.bandwidth?"center":"top"),f=M??("right"===e?c:d)-3;return"center"===h?(this.textAnchor=void 0,this.lineAnchor="right"===e?"bottom":"top",this.frameAnchor=e,this.rotate=-90):(this.textAnchor="right"===e?"end":"start",this.lineAnchor=h,this.frameAnchor=`${h}-${e}`,this.rotate=0),this.dy="top"===h?3-l:"bottom"===h?u-3:0,this.dx="right"===e?f:-f,this.ariaLabel=`${t}-axis label`,{facets:[[0]],channels:{text:{value:[N_(t,s,{anchor:e,label:k,labelAnchor:h,labelArrow:E})]}}}}))))}function p_(t,e,n,{color:r="currentColor",opacity:i=1,stroke:o=r,strokeOpacity:a=i,strokeWidth:s=1,fill:l=r,fillOpacity:c=i,textAnchor:u,textStroke:d,textStrokeOpacity:h,textStrokeWidth:f,tickSize:p=("x"===t?6:0),tickPadding:g,tickRotate:b,y:v,margin:y,marginTop:m=(void 0===y?"top"===e?30:0:y),marginRight:w=(void 0===y?20:y),marginBottom:x=(void 0===y?"bottom"===e?30:0:y),marginLeft:_=(void 0===y?20:y),label:k,labelAnchor:$,labelArrow:E,labelOffset:M,...S}){return p=kb(p),g=kb(g),b=kb(b),void 0!==$&&($=Lb($,"labelAnchor",["center","left","right"])),E=R_(E),Ow(p&&!yv(o)?function(t,e,n,{strokeWidth:r=1,strokeLinecap:i=null,strokeLinejoin:o=null,facetAnchor:a=e+("x"===t?"-empty":""),frameAnchor:s=e,tickSize:l,inset:c=0,insetTop:u=c,insetBottom:d=c,dy:h=0,x:f=("x"===t?void 0:null),...p}){return k_(e_,t,n,{ariaLabel:`${t}-axis tick`,ariaHidden:!0},{strokeWidth:r,strokeLinejoin:o,strokeLinecap:i,facetAnchor:a,frameAnchor:s,x:f,...p,dy:"bottom"===e?+h-pw-d:+h+pw+ +u,anchor:"start",length:l,shape:"bottom"===e?S_:A_})}(t,e,n,{stroke:o,strokeOpacity:a,strokeWidth:s,tickSize:p,tickPadding:g,tickRotate:b,y:v,...S}):null,yv(l)?null:function(t,e,n,{facetAnchor:r=e+("x"===t?"-empty":""),frameAnchor:i=e,tickSize:o,tickRotate:a=0,tickPadding:s=Math.max(3,9-o)+(Math.abs(a)>=10?4*Math.cos(a*Zw):0),text:l,textAnchor:c=(Math.abs(a)>=10?a<0^"bottom"===e?"start":"end":"middle"),lineAnchor:u=(Math.abs(a)>=10?"middle":"bottom"===e?"top":"bottom"),fontVariant:d,inset:h=0,insetTop:f=h,insetBottom:p=h,dy:g=0,x:b=("x"===t?void 0:null),...v}){return k_(Cx,t,n,{ariaLabel:`${t}-axis tick label`},{facetAnchor:r,frameAnchor:i,text:void 0===l?null:l,textAnchor:c,lineAnchor:u,fontVariant:d,rotate:a,x:b,...v,dy:"bottom"===e?+g+ +o+ +s-p:+g-o-s+ +f},(function(t,n,r,i,o){void 0===d&&(this.fontVariant=D_(t)),void 0===l&&(o.text=$_(t,n,r,i,e))}))}(t,e,n,{fill:l,fillOpacity:c,stroke:d,strokeOpacity:h,strokeWidth:f,textAnchor:u,tickSize:p,tickPadding:g,tickRotate:b,y:v,marginTop:m,marginRight:w,marginBottom:x,marginLeft:_,...S}),yv(l)||null===k?null:Ax([],__({fill:l,fillOpacity:c,...S},(function(n,r,i,o,a){const s=o[t],{marginTop:l,marginRight:c,marginBottom:u,marginLeft:d}="x"===t&&a.inset||a,h=$??(s.bandwidth?"center":"right"),f=M??("top"===e?l:u)-3;return"center"===h?(this.frameAnchor=e,this.textAnchor=void 0):(this.frameAnchor=`${e}-${h}`,this.textAnchor="right"===h?"end":"start"),this.lineAnchor=e,this.dy="top"===e?-f:f,this.dx="right"===h?c-3:"left"===h?3-d:0,this.ariaLabel=`${t}-axis label`,{facets:[[0]],channels:{text:{value:[N_(t,s,{anchor:e,label:k,labelAnchor:h,labelArrow:E})]}}}}))))}function g_(){const[t,e]=r_(...arguments);return m_("y",o_(e),t,e)}function b_(){const[t,e]=r_(...arguments);return m_("fy",a_(e),t,e)}function v_(){const[t,e]=r_(...arguments);return w_("x",s_(e),t,e)}function y_(){const[t,e]=r_(...arguments);return w_("fx",l_(e),t,e)}function m_(t,e,n,{y:r=("y"===t?void 0:null),x:i=null,x1:o=("left"===e?i:null),x2:a=("right"===e?i:null),...s}){return k_(wx,t,n,{ariaLabel:`${t}-grid`,ariaHidden:!0},{y:r,x1:o,x2:a,...x_(s)})}function w_(t,e,n,{x:r=("x"===t?void 0:null),y:i=null,y1:o=("top"===e?i:null),y2:a=("bottom"===e?i:null),...s}){return k_(mx,t,n,{ariaLabel:`${t}-grid`,ariaHidden:!0},{x:r,y1:o,y2:a,...x_(s)})}function x_({color:t="currentColor",opacity:e=.1,stroke:n=t,strokeOpacity:r=e,strokeWidth:i=1,...o}){return{stroke:n,strokeOpacity:r,strokeWidth:i,...o}}function __({fill:t,fillOpacity:e,fontFamily:n,fontSize:r,fontStyle:i,fontVariant:o,fontWeight:a,monospace:s,pointerEvents:l,shapeRendering:c,clip:u=!1},d){return[,t]=Db(t),[,e]=Nb(e),{facet:"super",x:null,y:null,fill:t,fillOpacity:e,fontFamily:n,fontSize:r,fontStyle:i,fontVariant:o,fontWeight:a,monospace:s,pointerEvents:l,shapeRendering:c,clip:u,initializer:d}}function k_(t,e,n,r,i,o){let a;const s=jv(i).initializer,l=t(n,jv({...i,initializer:function(t,n,r,s,l,c){const u=null==t&&("fx"===e||"fy"===e),{[e]:d}=s;if(!d)throw new Error(`missing scale: ${e}`);const h=d.domain();let{interval:f,ticks:p,tickFormat:g,tickSpacing:b=("x"===e?80:35)}=i;if("string"==typeof p&&L_(d)&&(f=p,p=void 0),void 0===p&&(p=ov(f,d.type)??function(t,e){const[n,r]=Yt(t.range());return(r-n)/e}(d,b)),null==t){if(lv(p))t=Ob(p);else if(av(p))t=M_(p,...Yt(h));else if(d.interval){let e=d.interval;if(d.ticks){const[n,r]=Yt(h);e=ab(e,(r-n)/e[Gg]/p)??e,t=M_(e,n,r)}else{e=ab(e,(t=h).length/p)??e,e!==d.interval&&(t=M_(e,...Yt(t)))}if(e===d.interval){const e=Math.round(t.length/p);e>1&&(t=t.filter(((t,n)=>n%e==0)))}}else t=d.ticks?d.ticks(p):h;if(!d.ticks&&t.length&&t!==h){const n=new Kt(h);t=t.filter((t=>n.has(t))),t.length||Qy(`Warning: the ${e}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`)}"y"===e||"x"===e?n=[Xb(t)]:a[e]={scale:e,value:mb}}o?.call(this,d,t,p,g,a);const v=Object.fromEntries(Object.entries(a).map((([e,n])=>[e,{...n,value:fb(t,n.value)}])));return u&&(n=c.filterFacets(t,v)),{data:t,facets:n,channels:v}}},s));return null==n?(a=l.channels,l.channels={}):a={},void 0!==r&&Object.assign(l,r),void 0===l.clip&&(l.clip=!1),l}function $_(t,e,n,r,i){return{value:E_(t,e,n,r,i)}}function E_(t,e,n,r,i){return"function"!=typeof r||"log"===t.type&&t.tickFormat?void 0===r&&e&&dv(e)?lb(t.type,e,i)??fw:t.tickFormat?t.tickFormat("number"==typeof n?n:null,r):void 0===r?fw:"string"==typeof r?(dv(t.domain())?id:ba)(r):Mb(r):r}function M_(t,e,n){return t.range(e,t.offset(t.floor(n)))}const S_={draw(t,e){t.moveTo(0,0),t.lineTo(0,e)}},A_={draw(t,e){t.moveTo(0,0),t.lineTo(0,-e)}},C_={draw(t,e){t.moveTo(0,0),t.lineTo(-e,0)}},T_={draw(t,e){t.moveTo(0,0),t.lineTo(e,0)}};function D_(t){return t.bandwidth&&!t.interval?void 0:"tabular-nums"}function N_(t,e,{anchor:n,label:r=e.label,labelAnchor:i,labelArrow:o}={}){if(!(null==r||r.inferred&&L_(e)&&/^(date|time|year)$/i.test(r))){if(r=String(r),"auto"===o&&(o=(!e.bandwidth||e.interval)&&!/[↑↓→←]/.test(r)),!o)return r;if(!0===o){const n=function(t){return Math.sign(jg(t.domain()))*Math.sign(jg(t.range()))}(e);n&&(o=/x$/.test(t)||"center"===i?/x$/.test(t)===n<0?"left":"right":n<0?"up":"down")}switch(o){case"left":return`← ${r}`;case"right":return`${r} →`;case"up":return"right"===n?`${r} ↑`:`↑ ${r}`;case"down":return"right"===n?`${r} ↓`:`↓ ${r}`}return r}}function R_(t="auto"){return!yv(t)&&("boolean"==typeof t?t:Lb(t,"labelArrow",["auto","up","right","down","left"]))}function L_(t){return dv(t.domain())}function O_(t,e){if(null==e)return e;const n=t(e);if(!n)throw new Error(`scale not found: ${e}`);return n}function z_(t,e={},n){let{columns:r,tickFormat:i,fontVariant:o=Xw(t),swatchSize:a=15,swatchWidth:s=a,swatchHeight:l=a,marginLeft:c=0,className:u,style:d,width:h}=e;const f=cw(e);u=Dw(u),i=E_(t.scale,t.domain,void 0,i);const p=uw("div",f).attr("class",`${u}-swatches ${u}-swatches-${null!=r?"columns":"wrap"}`);let g;return null!=r?(g=`:where(.${u}-swatches-columns .${u}-swatch) {\n  display: flex;\n  align-items: center;\n  break-inside: avoid;\n  padding-bottom: 1px;\n}\n:where(.${u}-swatches-columns .${u}-swatch::before) {\n  flex-shrink: 0;\n}\n:where(.${u}-swatches-columns .${u}-swatch-label) {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`,p.style("columns",r).selectAll().data(t.domain).enter().append("div").attr("class",`${u}-swatch`).call(n,t,s,l).call((t=>t.append("div").attr("class",`${u}-swatch-label`).attr("title",i).text(i)))):(g=`:where(.${u}-swatches-wrap) {\n  display: flex;\n  align-items: center;\n  min-height: 33px;\n  flex-wrap: wrap;\n}\n:where(.${u}-swatches-wrap .${u}-swatch) {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 1em;\n}`,p.selectAll().data(t.domain).enter().append("span").attr("class",`${u}-swatch`).call(n,t,s,l).append((function(){return this.ownerDocument.createTextNode(i.apply(this,arguments))}))),p.call((t=>t.insert("style","*").text(`:where(.${u}-swatches) {\n  font-family: system-ui, sans-serif;\n  font-size: 10px;\n  margin-bottom: 0.5em;\n}\n:where(.${u}-swatch > svg) {\n  margin-right: 0.5em;\n  overflow: visible;\n}\n${g}`))).style("margin-left",c?+c+"px":null).style("width",void 0===h?null:+h+"px").style("font-variant",Aw(o,"normal")).call(Nw,d).node()}const P_=new Map([["symbol",function(t,{fill:e=(void 0!==t.hint?.fill?t.hint.fill:"none"),fillOpacity:n=1,stroke:r=(void 0!==t.hint?.stroke?t.hint.stroke:yv(e)?"currentColor":"none"),strokeOpacity:i=1,strokeWidth:o=1.5,r:a=4.5,...s}={},l){const[c,u]=Db(e),[d,h]=Db(r),f=O_(l,c),p=O_(l,d),g=a*a*Math.PI;return n=Nb(n)[1],i=Nb(i)[1],o=Nb(o)[1],z_(t,s,((e,r,a,s)=>e.append("svg").attr("viewBox","-8 -8 16 16").attr("width",a).attr("height",s).attr("fill","color"===c?t=>f.scale(t):u).attr("fill-opacity",n).attr("stroke","color"===d?t=>p.scale(t):h).attr("stroke-opacity",i).attr("stroke-width",o).append("path").attr("d",(e=>{const n=oa();return t.scale(e).draw(n,g),n}))))}],["color",j_],["opacity",function({type:t,interpolate:e,...n},{legend:r=!0,color:i=Tr(0,0,0),...o}){if(!e)throw new Error(`${t} opacity scales are not supported`);!0===r&&(r="ramp");if("ramp"!==`${r}`.toLowerCase())throw new Error(`${r} opacity legends are not supported`);return j_({type:t,...n,interpolate:U_(i)},{legend:r,...o})}]]);function I_({className:t,...e},{label:n,ticks:r,tickFormat:i}={},o){return function(t={},...e){let n=t;for(const r of e)for(const e in r)if(void 0===n[e]){const i=r[e];n===t?n={...n,[e]:i}:n[e]=i}return n}(o,{className:t,...e},{label:n,ticks:r,tickFormat:i})}function j_(t,{legend:e=!0,...n}){if(!0===e&&(e="ordinal"===t.type?"swatches":"ramp"),void 0!==t.domain)switch(`${e}`.toLowerCase()){case"swatches":return function(t,{opacity:e,...n}={}){if(!Dm(t)&&!Nm(t))throw new Error(`swatches legend requires ordinal or threshold color scale (not ${t.type})`);return z_(t,n,((t,n,r,i)=>t.append("svg").attr("width",r).attr("height",i).attr("fill",n.scale).attr("fill-opacity",Nb(e)[1]).append("rect").attr("width","100%").attr("height","100%")))}(t,n);case"ramp":return Kw(t,n);default:throw new Error(`unknown legend type: ${e}`)}}function U_(t){const{r:e,g:n,b:r}=Tr(t)||Tr(0,0,0);return t=>`rgba(${e},${n},${r},${t})`}const B_={ariaLabel:"frame",fill:"none",stroke:"currentColor",clip:!1},H_={ariaLabel:"frame",fill:null,stroke:"currentColor",strokeLinecap:"square",clip:!1};class F_ extends Lw{constructor(t={}){const{anchor:e=null,inset:n=0,insetTop:r=n,insetRight:i=n,insetBottom:o=n,insetLeft:a=n,rx:s,ry:l}=t;super(bb,void 0,t,null==e?B_:H_),this.anchor=Rb(e,"anchor",["top","right","bottom","left"]),this.insetTop=kb(r),this.insetRight=kb(i),this.insetBottom=kb(o),this.insetLeft=kb(a),this.rx=kb(s),this.ry=kb(l)}render(t,e,n,r,i){const{marginTop:o,marginRight:a,marginBottom:s,marginLeft:l,width:c,height:u}=r,{anchor:d,insetTop:h,insetRight:f,insetBottom:p,insetLeft:g,rx:b,ry:v}=this,y=l+g,m=c-a-f,w=o+h,x=u-s-p;return uw(d?"svg:line":"svg:rect",i).datum(0).call(kw,this,r,i).call($w,this).call(ww,this,n).call(Sw,this,{}).call("left"===d?t=>t.attr("x1",y).attr("x2",y).attr("y1",w).attr("y2",x):"right"===d?t=>t.attr("x1",m).attr("x2",m).attr("y1",w).attr("y2",x):"top"===d?t=>t.attr("x1",y).attr("x2",m).attr("y1",w).attr("y2",w):"bottom"===d?t=>t.attr("x1",y).attr("x2",m).attr("y1",x).attr("y2",x):t=>t.attr("x",y).attr("y",w).attr("width",m-y).attr("height",x-w).attr("rx",b).attr("ry",v)).node()}}const V_={ariaLabel:"tip",fill:"var(--plot-background)",stroke:"currentColor"},q_=new Set(["geometry","href","src","ariaLabel","scales"]);class Y_ extends Lw{constructor(t,e={}){e.tip&&(e={...e,tip:!1}),void 0===e.title&&lv(t)&&cv(t)&&(e={...e,title:mb});const{x:n,y:r,x1:i,x2:o,y1:a,y2:s,anchor:l,preferredAnchor:c="bottom",monospace:u,fontFamily:d=(u?"ui-monospace, monospace":void 0),fontSize:h,fontStyle:f,fontVariant:p,fontWeight:g,lineHeight:b=1,lineWidth:v=20,frameAnchor:y,format:m,textAnchor:w="start",textOverflow:x,textPadding:_=8,title:k,pointerSize:$=12,pathFilter:E="drop-shadow(0 3px 4px rgba(0,0,0,0.2))"}=e;super(t,{x:{value:null!=i&&null!=o?null:n,scale:"x",optional:!0},y:{value:null!=a&&null!=s?null:r,scale:"y",optional:!0},x1:{value:i,scale:"x",optional:null==o},y1:{value:a,scale:"y",optional:null==s},x2:{value:o,scale:"x",optional:null==i},y2:{value:s,scale:"y",optional:null==a},title:{value:k,optional:!0}},e,V_),this.anchor=wv(l,"anchor"),this.preferredAnchor=wv(c,"preferredAnchor"),this.frameAnchor=xv(y),this.textAnchor=Aw(w,"middle"),this.textPadding=+_,this.pointerSize=+$,this.pathFilter=_b(E),this.lineHeight=+b,this.lineWidth=+v,this.textOverflow=Mx(x),this.monospace=!!u,this.fontFamily=_b(d),this.fontSize=kb(h),this.fontStyle=_b(f),this.fontVariant=_b(p),this.fontWeight=_b(g);for(const t in V_)t in this.channels&&(this[t]=V_[t]);this.splitLines=Px(this),this.clipLine=Ix(this),this.format="string"==typeof m||"function"==typeof m?{title:m}:{...m}}render(t,e,n,r,i){const o=this,{x:a,y:s,fx:l,fy:c}=e,{ownerSVGElement:u,document:d}=i,{anchor:h,monospace:f,lineHeight:p,lineWidth:g}=this,{textPadding:b,pointerSize:v,pathFilter:y}=this,{marginTop:m,marginLeft:w}=r,{x1:x,y1:_,x2:k,y2:$,x:E=x??k,y:M=_??$}=n,S=l?l(t.fx)-w:0,A=c?c(t.fy)-m:0,[C,T]=Rw(this,r),D=Yw(n,C),N=Ww(n,T),R=f?zx:Ox,L=R(jx);let O,z;"title"in n?(O=X_.call(this,{title:n.channels.title},e),z=Z_):(O=X_.call(this,n.channels,e),z=G_);const P=uw("svg:g",i).call(kw,this,r,i).call(Dx,this).call(Sw,this,{x:E&&a,y:M&&s}).call((r=>r.selectAll().data(t).enter().append("g").attr("transform",(t=>`translate(${Math.round(D(t))},${Math.round(N(t))})`)).call($w,this).call((t=>t.append("path").attr("filter",y))).call((r=>r.append("text").each((function(r){const i=sr(this);this.setAttribute("fill","currentColor"),this.setAttribute("fill-opacity",1),this.setAttribute("stroke","none");const a=z.call(o,r,t,O,e,n);if("string"==typeof a)for(const t of o.splitLines(a))I(i,{value:o.clipLine(t)});else{const t=new Set;for(const e of a){const{label:n=""}=e;n&&t.has(n)||(t.add(n),I(i,e))}}}))))));function I(t,{label:e,value:n,color:r,opacity:i}){e??="",n??="";const o=null!=r||null!=i;let a,s=100*g;const[l]=Ux(e,s,R,L);if(l>=0)e=e.slice(0,l).trimEnd()+jx,a=n.trim(),n="";else{(e||!n&&!o)&&(n=" "+n);const[t]=Ux(n,s-R(e),R,L);t>=0&&(a=n.trim(),n=n.slice(0,t).trimEnd()+jx)}const c=t.append("tspan").attr("x",0).attr("dy",`${p}em`).text("​");e&&c.append("tspan").attr("font-weight","bold").text(e),n&&c.append((()=>d.createTextNode(n))),o&&c.append("tspan").text(" ■").attr("fill",r).attr("fill-opacity",i).style("user-select","none"),a&&c.append("title").text(a)}function j(){const{width:t,height:e}=r.facet??r;P.selectChildren().each((function(n){let{x:r,width:i,height:a}=this.getBBox();i=Math.round(i),a=Math.round(a);let s=h;if(void 0===s){const r=D(n)+S,l=N(n)+A,c=r+i+v+2*b<t,u=r-i-v-2*b>0,d=l+a+v+2*b<e,h=l-a-v-2*b>0;s=c&&u?d&&h?o.preferredAnchor:h?"bottom":"top":d&&h?c?"left":"right":(c||u)&&(d||h)?`${h?"bottom":"top"}-${c?"left":"right"}`:o.preferredAnchor}const l=this.firstChild,c=this.lastChild;if(l.setAttribute("d",function(t,e,n,r,i){const o=r+2*n,a=i+2*n;switch(t){case"middle":return`M${-o/2},${-a/2}h${o}v${a}h${-o}z`;case"top-left":return`M0,0l${e},${e}h${o-e}v${a}h${-o}z`;case"top":return`M0,0l${e/2},${e/2}h${(o-e)/2}v${a}h${-o}v${-a}h${(o-e)/2}z`;case"top-right":return`M0,0l${-e},${e}h${e-o}v${a}h${o}z`;case"right":return`M0,0l${-e/2},${-e/2}v${e/2-a/2}h${-o}v${a}h${o}v${e/2-a/2}z`;case"bottom-left":return`M0,0l${e},${-e}h${o-e}v${-a}h${-o}z`;case"bottom":return`M0,0l${e/2},${-e/2}h${(o-e)/2}v${-a}h${-o}v${a}h${(o-e)/2}z`;case"bottom-right":return`M0,0l${-e},${-e}h${e-o}v${-a}h${o}z`;case"left":return`M0,0l${e/2},${-e/2}v${e/2-a/2}h${o}v${a}h${-o}v${e/2-a/2}z`}}(s,v,b,i,a)),r)for(const t of c.childNodes)t.setAttribute("x",-r);c.setAttribute("y",+function(t,e,n){return/^top(?:-|$)/.test(t)?.94-n:-.29-e*n}(s,c.childNodes.length,p).toFixed(6)+"em"),c.setAttribute("transform",`translate(${function(t,e,n,r,i){switch(t){case"middle":return[-r/2,i/2];case"top-left":return[n,e+n];case"top":return[-r/2,e/2+n];case"top-right":return[-r-n,e+n];case"right":return[-e/2-r-n,i/2];case"bottom-left":return[n,-e-n];case"bottom":return[-r/2,-e/2-n];case"bottom-right":return[-r-n,-e-n];case"left":return[n+e/2,i/2]}}(s,v,b,i,a)})`)})),P.attr("visibility",null)}return t.length&&(P.attr("visibility","hidden"),u.isConnected?Promise.resolve().then(j):"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame(j)),P.node()}}function W_(t,{x:e,y:n,...r}={}){return void 0===r.frameAnchor&&([e,n]=Yb(e,n)),new Y_(t,{...r,x:e,y:n})}function X_(t,e){const n={};let r=this.format;r=K_(r,t,"x"),r=K_(r,t,"y"),this.format=r;for(const e in r){const i=r[e];if(null!==i&&!1!==i)if("fx"===e||"fy"===e)n[e]=!0;else{const r=wy(t,e);r&&(n[e]=r)}}for(const e in t){if(e in n||e in r||q_.has(e))continue;const i=wy(t,e);i&&(n[e]=i)}this.facet&&(e.fx&&!("fx"in r)&&(n.fx=!0),e.fy&&!("fy"in r)&&(n.fy=!0));for(const t in n){const r=this.format[t];if("string"==typeof r){const i=n[t]?.value??e[t]?.domain()??[];this.format[t]=(dv(i)?id:ba)(r)}else if(void 0===r||!0===r){const n=e[t];this.format[t]=n?.bandwidth?E_(n,n.domain()):fw}}return n}function K_(t,e,n){if(!(n in t))return t;const r=`${n}1`,i=`${n}2`;if(!(!(r in t)&&r in e||!(i in t)&&i in e))return t;const o=Object.entries(t),a=t[n];return o.splice(o.findIndex((([t])=>t===n))+1,0,[r,a],[i,a]),Object.fromEntries(o)}function Z_(t,e,{title:n}){return this.format.title(n.value[t],t)}function*G_(t,e,n,r,i){for(const o in n){if("fx"===o||"fy"===o){yield{label:tk(r,n,o),value:this.format[o](e[o],t)};continue}if("x1"===o&&"x2"in n)continue;if("y1"===o&&"y2"in n)continue;const a=n[o];if("x2"===o&&"x1"in n)yield{label:Q_(r,n,"x"),value:J_(this.format.x2,n.x1,a,t)};else if("y2"===o&&"y1"in n)yield{label:Q_(r,n,"y"),value:J_(this.format.y2,n.y1,a,t)};else{const e=a.value[t],s=a.scale;if(!Ag(e)&&null==s)continue;yield{label:tk(r,n,o),value:this.format[o](e,t),color:"color"===s?i[o][t]:null,opacity:"opacity"===s?i[o][t]:null}}}}function J_(t,e,n,r){return n.hint?.length?`${t(n.value[r]-e.value[r],r)}`:`${t(e.value[r],r)}–${t(n.value[r],r)}`}function Q_(t,e,n){const r=tk(t,e,`${n}1`,n),i=tk(t,e,`${n}2`,n);return r===i?r:`${r}–${i}`}function tk(t,e,n,r=n){const i=e[n],o=t[i?.scale??n];return String(o?.label??i?.label??r)}function ek(t={}){const{facet:e,style:n,title:r,subtitle:i,caption:o,ariaLabel:a,ariaDescription:s}=t,l=Dw(t.className),c=void 0===t.marks?[]:rk(t.marks);c.push(...function(t){const e=[];for(const n of t){let t=n.tip;if(t){!0===t?t={}:"string"==typeof t&&(t={pointer:t});let{pointer:r,preferredAnchor:i}=t;r=/^x$/i.test(r)?Vw:/^y$/i.test(r)?qw:Fw,t=r(hk(n,t)),t.title=null,void 0===i&&(t.preferredAnchor=r===qw?"left":"bottom");const o=W_(n.data,t);o.facet=n.facet,o.facetAnchor=n.facetAnchor,e.push(o)}}return e}(c));const u=function(t,e){if(null==t)return;const{x:n,y:r}=t;if(null==n&&null==r)return;const i=Ob(t.data);if(null==i)throw new Error("missing facet data");const o={};null!=n&&(o.fx=dy(i,{value:n,scale:"fx"}));null!=r&&(o.fy=dy(i,{value:r,scale:"fy"}));ak(o,e);const a=Im(i,o);return{channels:o,groups:a,data:t.data}}(e,t),d=new Map;for(const e of c){const n=dk(e,u,t);n&&d.set(e,n)}const h=new Map;u&&ck(h,[u],t),ck(h,d,t);const f=rk(function(t,e,n){let{projection:r,x:i={},y:o={},fx:a={},fy:s={},axis:l,grid:c,facet:u={},facet:{axis:d=l,grid:h}=u,x:{axis:f=l,grid:p=(null===f?null:c)}=i,y:{axis:g=l,grid:b=(null===g?null:c)}=o,fx:{axis:v=d,grid:y=(null===v?null:h)}=a,fy:{axis:m=d,grid:w=(null===m?null:h)}=s}=n;(r||!Hb(i)&&!vk("x",t))&&(f=p=null);(r||!Hb(o)&&!vk("y",t))&&(g=b=null);e.has("fx")||(v=y=null);e.has("fy")||(m=w=null);void 0===f&&(f=!bk(t,"x"));void 0===g&&(g=!bk(t,"y"));void 0===v&&(v=!bk(t,"fx"));void 0===m&&(m=!bk(t,"fy"));!0===f&&(f="bottom");!0===g&&(g="left");!0===v&&(v="top"===f||null===f?"bottom":"top");!0===m&&(m="right"===g||null===g?"left":"right");const x=[];return pk(x,w,b_,s),fk(x,m,u_,"right","left",u,s),pk(x,y,y_,a),fk(x,v,h_,"top","bottom",u,a),pk(x,b,g_,o),fk(x,g,c_,"left","right",n,o),pk(x,p,v_,i),fk(x,f,d_,"bottom","top",n,i),x}(c,h,t));for(const e of f){const n=dk(e,u,t);n&&d.set(e,n)}c.unshift(...f);let p=Pm(h,t);if(void 0!==p){const t=u?Zm(p,u):void 0;for(const e of c){if(null===e.facet||"super"===e.facet)continue;const n=d.get(e);void 0!==n&&(n.facetsIndex=null!=e.fx||null!=e.fy?Zm(p,n):t)}const e=new Set;for(const{facetsIndex:t}of d.values())t?.forEach(((t,n)=>{t?.length>0&&e.add(n)}));p.forEach(0<e.size&&e.size<p.length?(t,n)=>t.empty=!e.has(n):t=>t.empty=!1);for(const t of c)if("exclude"===t.facet){const e=d.get(t);void 0!==e&&(e.facetsIndex=jm(e.facetsIndex))}}for(const e of Dv.keys())Hb(t[e])&&"fx"!==e&&"fy"!==e&&h.set(e,[]);const g=new Map;for(const e of c){if(g.has(e))throw new Error("duplicate mark; each mark must be unique");const{facetsIndex:n,channels:r}=d.get(e)??{},{data:i,facets:o,channels:a}=e.initialize(n,r,t);ak(a,t),g.set(e,{data:i,facets:o,channels:a})}const b=vm(ck(h,g,t),t),v=function(t,e,n={}){let r=.5-pw,i=.5+pw,o=.5+pw,a=.5-pw;for(const{marginTop:t,marginRight:n,marginBottom:s,marginLeft:l}of e)t>r&&(r=t),n>i&&(i=n),s>o&&(o=s),l>a&&(a=l);let{margin:s,marginTop:l=(void 0!==s?s:r),marginRight:c=(void 0!==s?s:i),marginBottom:u=(void 0!==s?s:o),marginLeft:d=(void 0!==s?s:a)}=n;l=+l,c=+c,u=+u,d=+d;let{width:h=640,height:f=jw(t,n,{width:h,marginTopDefault:r,marginRightDefault:i,marginBottomDefault:o,marginLeftDefault:a})+Math.max(0,l-r+u-o)}=n;h=+h,f=+f;const p={width:h,height:f,marginTop:l,marginRight:c,marginBottom:u,marginLeft:d};if(t.fx||t.fy){let{margin:t,marginTop:e=(void 0!==t?t:l),marginRight:r=(void 0!==t?t:c),marginBottom:i=(void 0!==t?t:u),marginLeft:o=(void 0!==t?t:d)}=n.facet??{};e=+e,r=+r,i=+i,o=+o,p.facet={marginTop:e,marginRight:r,marginBottom:i,marginLeft:o}}return p}(b,c,t);!function(t,e){const{x:n,y:r,fx:i,fy:o}=t,a=i||o?wm(e):e;i&&_m(i,a),o&&km(o,a);const s=i||o?xm(t,e):e;n&&_m(n,s),r&&km(r,s)}(b,v);const y=ym(b),{fx:m,fy:w}=y,x=m||w?xm(b,v):v,_=m||w?function({fx:t,fy:e},n){const{marginTop:r,marginRight:i,marginBottom:o,marginLeft:a,width:s,height:l}=wm(n),c=t&&yk(t),u=e&&yk(e);return{marginTop:e?u[0]:r,marginRight:t?s-c[1]:i,marginBottom:e?l-u[1]:o,marginLeft:t?c[0]:a,inset:{marginTop:n.marginTop,marginRight:n.marginRight,marginBottom:n.marginBottom,marginLeft:n.marginLeft},width:s,height:l}}(y,v):v,k=cw(t),$=k.document,E=Qe("svg").call($.documentElement);let M=E;k.ownerSVGElement=E,k.className=l,k.projection=tw(t,x),k.filterFacets=(t,e)=>Zm(p,{channels:e,groups:Im(t,e)}),k.getMarkState=t=>{const e=g.get(t),n=d.get(t);return{...e,channels:{...e.channels,...n?.channels}}},k.dispatchValue=t=>{M.value!==t&&(M.value=t,M.dispatchEvent(new Event("input",{bubbles:!0})))};const S=new Set;for(const[e,n]of g)if(null!=e.initializer){const r="super"===e.facet?_:x,i=e.initializer(n.data,n.facets,n.channels,y,r,k);if(void 0!==i.data&&(n.data=i.data),void 0!==i.facets&&(n.facets=i.facets),void 0!==i.channels){const{fx:r,fy:o,...a}=i.channels;lk(a),Object.assign(n.channels,a);for(const e of Object.values(a)){const{scale:n}=e;null!=n&&((A=Dv.get(n))!==$v&&A!==Tv)&&(sk(e,t),S.add(n))}null==r&&null==o||d.set(e,!0)}}var A;if(S.size){const e=new Map;ck(e,g,t,(t=>S.has(t))),ck(h,g,t,(t=>S.has(t)));const n=function(t,e){for(const n in t){const r=t[n],i=e[n];void 0===r.label&&i&&(r.label=i.label)}return t}(vm(e,t),b),{scales:r,...i}=ym(n);Object.assign(b,n),Object.assign(y,i),Object.assign(y.scales,r)}let C,T;void 0!==p&&(C={x:m?.domain(),y:w?.domain()},p=function(t,{x:e,y:n}){return e&&=Hm(e),n&&=Hm(n),t.filter(e&&n?t=>e.has(t.x)&&n.has(t.y):e?t=>e.has(t.x):t=>n.has(t.y)).sort(e&&n?(t,r)=>e.get(t.x)-e.get(r.x)||n.get(t.y)-n.get(r.y):e?(t,n)=>e.get(t.x)-e.get(n.x):(t,e)=>n.get(t.y)-n.get(e.y))}(p,C),T=function(t,e,{marginTop:n,marginLeft:r}){return t&&e?({x:i,y:o})=>`translate(${t(i)-r},${e(o)-n})`:t?({x:e})=>`translate(${t(e)-r},0)`:({y:t})=>`translate(0,${e(t)-n})`}(m,w,v));for(const[t,e]of g)e.values=t.scale(e.channels,y,k);const{width:D,height:N}=v;sr(E).attr("class",l).attr("fill","currentColor").attr("font-family","system-ui, sans-serif").attr("font-size",10).attr("text-anchor","middle").attr("width",D).attr("height",N).attr("viewBox",`0 0 ${D} ${N}`).attr("aria-label",a).attr("aria-description",s).call((t=>t.append("style").text(`:where(.${l}) {\n  --plot-background: white;\n  display: block;\n  height: auto;\n  height: intrinsic;\n  max-width: 100%;\n}\n:where(.${l} text),\n:where(.${l} tspan) {\n  white-space: pre;\n}`))).call(Nw,n);for(const t of c){const{channels:e,values:n,facets:r}=g.get(t);if(void 0===p||"super"===t.facet){let i=null;if(r&&(i=r[0],i=t.filter(i,e,n),0===i.length))continue;const o=t.render(i,y,n,_,k);if(null==o)continue;E.appendChild(o)}else{let i;for(const o of p){if(!(t.facetAnchor?.(p,C,o)??!o.empty))continue;let a=null;if(r){const i=d.has(t);if(a=r[i?o.i:0],a=t.filter(a,e,n),0===a.length)continue;i||a!==r[0]||(a=Zb(a)),a.fx=o.x,a.fy=o.y,a.fi=o.i}const s=t.render(a,y,n,x,k);if(null!=s){(i??=sr(E).append("g")).append((()=>s)).datum(o);for(const t of["aria-label","aria-description","aria-hidden","transform"])s.hasAttribute(t)&&(i.attr(t,s.getAttribute(t)),s.removeAttribute(t))}}i?.selectChildren().attr("transform",T)}}const R=function(t,e,n){const r=[];for(const[i,o]of P_){const a=n[i];if(a?.legend&&i in t){const n=o(t[i],I_(e,t[i],a),(e=>t[e]));null!=n&&r.push(n)}}return r}(b,k,t),{figure:L=null!=r||null!=i||null!=o||R.length>0}=t;L&&(M=$.createElement("figure"),M.className=`${l}-figure`,M.style.maxWidth="initial",null!=r&&M.append(nk($,r,"h2")),null!=i&&M.append(nk($,i,"h3")),M.append(...R,E),null!=o&&M.append(function(t,e){const n=t.createElement("figcaption");return n.append(e),n}($,o)),"value"in E&&(M.value=E.value,delete E.value)),M.scale=function(t){return e=>{if(!Dv.has(e=`${e}`))throw new Error(`unknown scale: ${e}`);return t[e]}}(y.scales),M.legend=function(t,e,n={}){return(r,i)=>{if(!P_.has(r))throw new Error(`unknown legend type: ${r}`);if(r in t)return P_.get(r)(t[r],I_(e,n[r],i),(e=>t[e]))}}(b,k,t);const O=function(){const t=Jy;return Jy=0,Gy=void 0,t}();return O>0&&sr(E).append("text").attr("x",D).attr("y",20).attr("dy","-1em").attr("text-anchor","end").attr("font-family","initial").text("⚠️").append("title").text(`${O.toLocaleString("en-US")} warning${1===O?"":"s"}. Please check the console.`),M}function nk(t,e,n){if(e.ownerDocument)return e;const r=t.createElement(n);return r.append(e),r}function rk(t){return t.flat(1/0).filter((t=>null!=t)).map(ik)}function ik(t){return"function"==typeof t.render?t:new ok(t)}class ok extends Lw{constructor(t){if("function"!=typeof t)throw new TypeError("invalid mark; missing render function");super(),this.render=t}render(){}}function ak(t,e){for(const n in t)sk(t[n],e);return t}function sk(t,e){const{scale:n,transform:r=!0}=t;if(null==n||!r)return;const{type:i,percent:o,interval:a,transform:s=(o?t=>null==t?NaN:100*t:rv(a,i))}=e[n]??{};null!=s&&(t.value=zb(t.value,s),t.transform=!1)}function lk(t){for(const e in t)hy(e,t[e])}function ck(t,e,n,r=xb){for(const{channels:i}of e.values())for(const e in i){const o=i[e],{scale:a}=o;if(null!=a&&r(a))if("projection"===a){if(!sw(n)){const e=void 0===n.x?.domain,r=void 0===n.y?.domain;if(e||r){const[n,i]=lw(o);e&&uk(t,"x",n),r&&uk(t,"y",i)}}}else uk(t,a,o)}return t}function uk(t,e,n){const r=t.get(e);void 0!==r?r.push(n):t.set(e,[n])}function dk(t,e,n){if(null===t.facet||"super"===t.facet)return;const{fx:r,fy:i}=t;if(null!=r||null!=i){const e=Ob(t.data??r??i);if(void 0===e)throw new Error(`missing facet data in ${t.ariaLabel}`);if(null===e)return;const o={};return null!=r&&(o.fx=dy(e,{value:r,scale:"fx"})),null!=i&&(o.fy=dy(e,{value:i,scale:"fy"})),ak(o,n),{channels:o,groups:Im(e,o)}}if(void 0===e)return;const{channels:o,groups:a,data:s}=e;if("auto"!==t.facet||t.data===s)return{channels:o,groups:a};s.length>0&&(a.size>1||1===a.size&&o.fx&&o.fy&&[...a][0][1].size>1)&&Ob(t.data)?.length===s.length&&Qy(`Warning: the ${t.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`)}function hk(t,e={}){return jv({...e,x:null,y:null},((e,n,r,i,o,a)=>a.getMarkState(t)))}function fk(t,e,n,r,i,o,a){if(!e)return;const s=/^\s*both\s*$/i.test(e);a=function(t,e,{line:n=e.line,ticks:r,tickSize:i,tickSpacing:o,tickPadding:a,tickFormat:s,tickRotate:l,fontVariant:c,ariaLabel:u,ariaDescription:d,label:h=e.label,labelAnchor:f,labelArrow:p=e.labelArrow,labelOffset:g}){return{anchor:t,line:n,ticks:r,tickSize:i,tickSpacing:o,tickPadding:a,tickFormat:s,tickRotate:l,fontVariant:c,ariaLabel:u,ariaDescription:d,label:h,labelAnchor:f,labelArrow:p,labelOffset:g}}(s?r:e,o,a);const{line:l}=a;n!==c_&&n!==d_||!l||mv(l)||t.push(function(t){return new F_(t)}(function(t){const{anchor:e,line:n}=t;return{anchor:e,facetAnchor:e+"-empty",stroke:!0===n?void 0:n}}(a))),t.push(n(a)),s&&t.push(n({...a,anchor:i,label:null}))}function pk(t,e,n,r){e&&!mv(e)&&t.push(n(function(t,{stroke:e=(bv(t)?t:void 0),ticks:n=(gk(t)?t:void 0),tickSpacing:r,ariaLabel:i,ariaDescription:o}){return{stroke:e,ticks:n,tickSpacing:r,ariaLabel:i,ariaDescription:o}}(e,r)))}function gk(t){switch(typeof t){case"number":return!0;case"string":return!bv(t)}return lv(t)||"function"==typeof t?.range}function bk(t,e){const n=`${e}-axis `;return t.some((t=>t.ariaLabel?.startsWith(n)))}function vk(t,e){for(const n of e)for(const e in n.channels){const{scale:r}=n.channels[e];if(r===t||"projection"===r)return!0}return!1}function yk(t){const e=t.domain();let n=t(e[0]),r=t(e[e.length-1]);return r<n&&([n,r]=[r,n]),[n,r+t.bandwidth()]}const mk=new Map([["basis",function(t){return new Gp(t)}],["basis-closed",function(t){return new Jp(t)}],["basis-open",function(t){return new Qp(t)}],["bundle",eg],["bump-x",function(t){return new xp(t,!0)}],["bump-y",function(t){return new xp(t,!1)}],["cardinal",ig],["cardinal-closed",ag],["cardinal-open",lg],["catmull-rom",dg],["catmull-rom-closed",fg],["catmull-rom-open",gg],["linear",vp],["linear-closed",function(t){return new bg(t)}],["monotone-x",function(t){return new xg(t)}],["monotone-y",function(t){return new _g(t)}],["natural",function(t){return new $g(t)}],["step",function(t){return new Mg(t,.5)}],["step-after",function(t){return new Mg(t,1)}],["step-before",function(t){return new Mg(t,0)}]]);function wk(t=vp,e){if("function"==typeof t)return t;const n=mk.get(`${t}`.toLowerCase());if(!n)throw new Error(`unknown curve: ${t}`);if(void 0!==e){if("beta"in n)return n.beta(e);if("tension"in n)return n.tension(e);if("alpha"in n)return n.alpha(e)}return n}function xk(t){return vp(t)}function _k(t={y:"count"},e={}){[t,e]=function({cumulative:t,domain:e,thresholds:n,interval:r,...i},o){return[i,{cumulative:t,domain:e,thresholds:n,interval:r,...o}]}(t,e);const{x:n,y:r}=e;return function(t,e,n,r,{data:i=ny,filter:o=ay,sort:a,reverse:s,...l}={},c={}){t=$k(t),e=$k(e),l=function(t,e){return function(t,e,n=Kv){const r=Object.entries(t);return null!=e.title&&void 0===t.title&&r.push(["title",iy]),null!=e.href&&void 0===t.href&&r.push(["href",ry]),r.filter((([,t])=>void 0!==t)).map((([t,r])=>null===r?function(t){return{name:t,initialize(){},scope(){},reduce(){}}}(t):n(t,r,e)))}(t,e,Ek)}(l,c),i=Sk(i,mb),a=null==a?void 0:Ek("sort",a,c),o=null==o?void 0:Mk("filter",o,c),null!=r&&Xv(l,"y","y1","y2")&&(r=null);const[u,d]=Qb(t),[h,f]=Qb(t),[p,g]=Qb(e),[b,v]=Qb(e),[y,m]=null!=r?[r,"y"]:[],[w,x]=Qb(y),{x:_,y:k,z:$,fill:E,stroke:M,x1:S,x2:A,y1:C,y2:T,domain:D,cumulative:N,thresholds:R,interval:L,...O}=c,[z,P]=Qb($),[I]=Db(E),[j]=Db(M),[U,B]=Qb(I),[H,F]=Qb(j);return{..."z"in c&&{z:z||$},..."fill"in c&&{fill:U||E},..."stroke"in c&&{stroke:H||M},...Iv(O,((n,r,c)=>{const u=nv(fb(n,y),c?.[m]),h=fb(n,$),p=fb(n,I),b=fb(n,j),w=function(t,e){for(const n in e){const r=e[n];if(void 0!==r&&!t.some((t=>t.name===n)))return r}}(l,{z:h,fill:p,stroke:b}),_=[],k=[],E=u&&x([]),M=h&&P([]),S=p&&B([]),A=b&&F([]),C=t&&d([]),T=t&&f([]),D=e&&g([]),N=e&&v([]),R=function(t,e,n){const r=t?.(n),i=e?.(n);return r&&i?function*(t){const e=r.bin(t);for(const[t,[o,a]]of r.entries()){const r=i.bin(e[t]);for(const[t,[e,s]]of i.entries())yield[r[t],{data:n,x1:o,y1:e,x2:a,y2:s}]}}:r?function*(t){const e=r.bin(t);for(const[t,[i,o]]of r.entries())yield[e[t],{data:n,x1:i,x2:o}]}:function*(t){const e=i.bin(t);for(const[t,[r,o]]of i.entries())yield[e[t],{data:n,y1:r,y2:o}]}}(t,e,n);let L=0;for(const t of l)t.initialize(n);a&&a.initialize(n),o&&o.initialize(n);for(const t of r){const e=[];for(const e of l)e.scope("facet",t);a&&a.scope("facet",t),o&&o.scope("facet",t);for(const[r,s]of Gv(t,w))for(const[t,c]of Gv(s,u))for(const[s,d]of R(c))if(w&&(d.z=r),!o||o.reduce(s,d)){e.push(L++),k.push(i.reduceIndex(s,n,d)),u&&E.push(t),h&&M.push(w===h?r:h[(s.length>0?s:c)[0]]),p&&S.push(w===p?r:p[(s.length>0?s:c)[0]]),b&&A.push(w===b?r:b[(s.length>0?s:c)[0]]),C&&(C.push(d.x1),T.push(d.x2)),D&&(D.push(d.y1),N.push(d.y2));for(const t of l)t.reduce(s,d);a&&a.reduce(s,d)}_.push(e)}return function(t,e,n){if(e){const n=e.output.transform(),r=(t,e)=>Cg(n[t],n[e]);t.forEach((t=>t.sort(r)))}n&&t.forEach((t=>t.reverse()))}(_,a,s),{data:k,facets:_}})),...!Xv(l,"x")&&(u?{x1:u,x2:h,x:ev(u,h)}:{x:_,x1:S,x2:A}),...!Xv(l,"y")&&(p?{y1:p,y2:b,y:ev(p,b)}:{y:k,y1:C,y2:T}),...w&&{[m]:w},...Object.fromEntries(l.map((({name:t,output:e})=>[t,e])))}}(function(t,{cumulative:e,domain:n,thresholds:r,interval:i},o){void 0===(t={...sv(t)}).domain&&(t.domain=n);void 0===t.cumulative&&(t.cumulative=e);void 0===t.thresholds&&(t.thresholds=r);void 0===t.interval&&(t.interval=i);void 0===t.value&&(t.value=o);return t.thresholds=function(t,e,n=Ck){if(void 0===t)return void 0===e?n:ov(e);if("string"==typeof t){switch(t.toLowerCase()){case"freedman-diaconis":return Me;case"scott":return Se;case"sturges":return be;case"auto":return Ck}return ib(t)}return t}(t.thresholds,t.interval),t}(n,e,mb),null,0,r,t,lx(e))}function kk(t={}){return function(t,e,n={}){if(null==n?.interval)return n;const{reduce:r=ry}=n,i={filter:null};return null!=n[e]&&(i[e]=r),null!=n[`${e}1`]&&(i[`${e}1`]=r),null!=n[`${e}2`]&&(i[`${e}2`]=r),t(i,n)}(_k,"y",Iw(t,"x"))}function $k(t){if(null==t)return;const{value:e,cumulative:n,domain:r=Yt,thresholds:i}=t,o=t=>{let o,a=fb(t,e);if(dv(a)||function(t){return function(t){return av(t)&&"function"==typeof t?.floor&&t.floor()instanceof Date}(t)||lv(t)&&dv(t)}(i)){a=zb(a,Tb,Float64Array);let[t,e]="function"==typeof r?r(a):r,n="function"!=typeof i||av(i)?i:i(a,t,e);"number"==typeof n&&(n=Zu(t,e,n)),av(n)&&(r===Yt&&(t=n.floor(t),e=n.offset(n.floor(e))),n=n.range(t,n.offset(e))),o=n}else{a=Sb(a);let[t,e]="function"==typeof r?r(a):r,n="function"!=typeof i||av(i)?i:i(a,t,e);if("number"==typeof n)if(r===Yt){let r=pe(t,e,n);if(isFinite(r))if(r>0){let i=Math.round(t/r),o=Math.round(e/r);i*r<=t||--i,o*r>e||++o;let a=o-i+1;n=new Float64Array(a);for(let t=0;t<a;++t)n[t]=(i+t)*r}else if(r<0){r=-r;let i=Math.round(t*r),o=Math.round(e*r);i/r<=t||--i,o/r>e||++o;let a=o-i+1;n=new Float64Array(a);for(let t=0;t<a;++t)n[t]=(i+t)/r}else n=[t];else n=[t]}else n=fe(t,e,n);else av(n)&&(r===Yt&&(t=n.floor(t),e=n.offset(n.floor(e))),n=n.range(t,n.offset(e)));o=n}const s=[];if(1===o.length)s.push([o[0],o[0]]);else for(let t=1;t<o.length;++t)s.push([o[t-1],o[t]]);return s.bin=(n<0?Nk:n>0?Dk:Tk)(s,o,a),s};return o.label=tv(e),o}function Ek(t,e,n){return Kv(t,e,n,Mk)}function Mk(t,e,n){return Zv(t,e,n,Sk)}function Sk(t,e){return Jv(t,e,Ak)}function Ak(t){switch(`${t}`.toLowerCase()){case"x":return Lk;case"x1":return zk;case"x2":return Pk;case"y":return Ok;case"y1":return Ik;case"y2":return jk;case"z":return uy}throw new Error(`invalid bin reduce: ${t}`)}function Ck(t,e,n){return Math.min(200,Se(t,e,n))}function Tk(t,e,n){return e=Sb(e),r=>{const i=t.map((()=>[]));for(const t of r)i[It(e,n[t])-1]?.push(t);return i}}function Dk(t,e,n){const r=Tk(t,e,n);return t=>{const e=r(t);for(let t=1,n=e.length;t<n;++t){const n=e[t-1],r=e[t];for(const t of n)r.push(t)}return e}}function Nk(t,e,n){const r=Tk(t,e,n);return t=>{const e=r(t);for(let t=e.length-2;t>=0;--t){const n=e[t+1],r=e[t];for(const t of n)r.push(t)}return e}}function Rk(t,e){const n=(+t+ +e)/2;return t instanceof Date?new Date(n):n}const Lk={reduceIndex:(t,e,{x1:n,x2:r})=>Rk(n,r)},Ok={reduceIndex:(t,e,{y1:n,y2:r})=>Rk(n,r)},zk={reduceIndex:(t,e,{x1:n})=>n},Pk={reduceIndex:(t,e,{x2:n})=>n},Ik={reduceIndex:(t,e,{y1:n})=>n},jk={reduceIndex:(t,e,{y2:n})=>n};function Uk(t={}){return jb(t)?t:{...t,y:mb}}function Bk({x:t,x1:e,x2:n,...r}={}){return r=Iw(r,"y"),void 0===e&&void 0===n?function(t={},e={}){1===arguments.length&&([t,e]=Fk(t));const{y1:n,y:r=n,x:i,...o}=e,[a,s,l,c]=qk(r,i,"y","x",t,o);return{...a,y1:n,y:s,x1:l,x2:c,x:ev(l,c)}}({x:t,...r}):([e,n]=qb(t,e,n),{...r,x1:e,x2:n})}function Hk({y:t,y1:e,y2:n,...r}={}){return r=Iw(r,"x"),void 0===e&&void 0===n?function(t={},e={}){1===arguments.length&&([t,e]=Fk(t));const{x1:n,x:r=n,y:i,...o}=e,[a,s,l,c]=qk(r,i,"x","y",t,o);return{...a,x1:n,x:s,y1:l,y2:c,y:ev(l,c)}}({y:t,...r}):([e,n]=qb(t,e,n),{...r,y1:e,y2:n})}function Fk(t){const{offset:e,order:n,reverse:r,...i}=t;return[{offset:e,order:n,reverse:r},i]}const Vk={length:!0};function qk(t,e=wb,n,r,{offset:i,order:o,reverse:a},s){if(null===e)throw new Error(`stack requires ${r}`);const l=Wb(s),[c,u]=Qb(t),[d,h]=Jb(e),[f,p]=Jb(e);return d.hint=f.hint=Vk,i=function(t){if(null==t)return;if("function"==typeof t)return t;switch(`${t}`.toLowerCase()){case"expand":case"normalize":return Wk;case"center":case"silhouette":return Xk;case"wiggle":return Kk}throw new Error(`unknown offset: ${t}`)}(i),o=function(t,e,n){if(void 0===t&&e===Kk)return Jk(Cg);if(null==t)return;if("string"==typeof t){const e=t.startsWith("-"),r=e?Tg:Cg;switch((e?t.slice(1):t).toLowerCase()){case"value":case n:return function(t){return(e,n,r)=>(e,n)=>t(r[e],r[n])}(r);case"z":return function(t){return(e,n,r,i)=>(e,n)=>t(i[e],i[n])}(r);case"sum":return function(t){return e$(t,((t,e,n,r)=>le(Xb(t),(t=>Le(t,(t=>n[t]))),(t=>r[t]))))}(r);case"appearance":return function(t){return e$(t,((t,e,n,r)=>le(Xb(t),(t=>e[ke(t,(t=>n[t]))]),(t=>r[t]))))}(r);case"inside-out":return Jk(r)}return Qk(vb(t))}if("function"==typeof t)return(1===t.length?Qk:t$)(t);if(Array.isArray(t))return r=t,e$(Cg,(()=>r));var r;throw new Error(`invalid order: ${t}`)}(o,i,r),[Iv(s,((r,s,c)=>{({data:r,facets:s}=function(t,e){if(1===e.length)return{data:t,facets:e};const n=t.length,r=new Uint8Array(n);let i=0;for(const t of e)for(const e of t)r[e]&&++i,r[e]=1;if(0===i)return{data:t,facets:e};const o=(t=Pb(t))[hb]=new Uint32Array(n+i);e=e.map((t=>Pb(t,Uint32Array)));let a=n;r.fill(0);for(const n of e)for(let e=0,i=n.length;e<i;++e){const i=n[e];r[i]?(n[e]=a,t[a]=t[i],o[a]=i,++a):o[i]=i,r[i]=1}return{data:t,facets:e}}(r,s));const d=null==t?void 0:u(nv(fb(r,t),c?.[n])),f=fb(r,e,Float64Array),g=fb(r,l),b=o&&o(r,d,f,g),v=r.length,y=h(new Float64Array(v)),m=p(new Float64Array(v)),w=[];for(const t of s){const e=d?Array.from(ee(t,(t=>d[t])).values()):[t];if(b)for(const t of e)t.sort(b);for(const t of e){let e=0,n=0;a&&t.reverse();for(const r of t){const t=f[r];t<0?e=m[r]=(y[r]=e)+t:t>0?n=m[r]=(y[r]=n)+t:m[r]=y[r]=n}}w.push(e)}return i&&i(w,y,m,g),{data:r,facets:s}})),c,d,f]}function Yk(t,e){let n=0,r=0;for(const i of t){const t=e[i];t<n&&(n=t),t>r&&(r=t)}return[n,r]}function Wk(t,e,n){for(const r of t)for(const t of r){const[r,i]=Yk(t,n);for(const o of t){const t=1/(i-r||1);e[o]=t*(e[o]-r),n[o]=t*(n[o]-r)}}}function Xk(t,e,n){for(const r of t){for(const t of r){const[r,i]=Yk(t,n);for(const o of t){const t=(i+r)/2;e[o]-=t,n[o]-=t}}Zk(r,e,n)}Gk(t,e,n)}function Kk(t,e,n,r){for(const i of t){const t=new Xt;let o=0;for(const a of i){let i=-1;const s=a.map((t=>Math.abs(n[t]-e[t]))),l=a.map((o=>{i=r?r[o]:++i;const a=n[o]-e[o],s=t.has(i)?a-t.get(i):0;return t.set(i,a),s})),c=[0,...Ft(l)];for(const t of a)e[t]+=o,n[t]+=o;const u=Le(s);u&&(o-=Le(s,((t,e)=>(l[e]/2+c[e])*t))/u)}Zk(i,e,n)}Gk(t,e,n)}function Zk(t,e,n){const r=me(t,(t=>me(t,(t=>e[t]))));for(const i of t)for(const t of i)e[t]-=r,n[t]-=r}function Gk(t,e,n){const r=t.length;if(1===r)return;const i=t.map((t=>t.flat())),o=i.map((t=>(me(t,(t=>e[t]))+ve(t,(t=>n[t])))/2)),a=me(o);for(let t=0;t<r;t++){const r=a-o[t];for(const o of i[t])e[o]+=r,n[o]+=r}}function Jk(t){return e$(t,((t,e,n,r)=>{const i=Xb(t),o=le(i,(t=>e[ke(t,(t=>n[t]))]),(t=>r[t])),a=ne(i,(t=>Le(t,(t=>n[t]))),(t=>r[t])),s=[],l=[];let c=0;for(const t of o)c<0?(c+=a.get(t),s.push(t)):(c-=a.get(t),l.push(t));return l.reverse().concat(s)}))}function Qk(t){return e=>{const n=fb(e,t);return(t,e)=>Cg(n[t],n[e])}}function t$(t){return e=>(n,r)=>t(e[n],e[r])}function e$(t,e){return(n,r,i,o)=>{if(!o)throw new Error("missing channel: z");const a=new Xt(e(n,r,i,o).map(((t,e)=>[t,e])));return(e,n)=>t(a.get(o[e]),a.get(o[n]))}}const n$={ariaLabel:"area",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1};class r$ extends Lw{constructor(t,e={}){const{x1:n,y1:r,x2:i,y2:o,z:a,curve:s,tension:l}=e;super(t,{x1:{value:n,scale:"x"},y1:{value:r,scale:"y"},x2:{value:i,scale:"x",optional:!0},y2:{value:o,scale:"y",optional:!0},z:{value:Wb(e),optional:!0}},e,n$),this.z=a,this.curve=wk(s,l)}filter(t){return t}render(t,e,n,r,i){const{x1:o,y1:a,x2:s=o,y2:l=a}=n;return uw("svg:g",i).call(kw,this,r,i).call(Sw,this,e,0,0).call((e=>e.selectAll().data(_w(t,[o,a,s,l],this,n)).enter().append("path").call($w,this).call(xw,this,n).attr("d",function(t,e,n){var r=null,i=sp(!0),o=null,a=vp,s=null,l=pp(c);function c(c){var u,d,h,f,p,g=(c=gp(c)).length,b=!1,v=new Array(g),y=new Array(g);for(null==o&&(s=a(p=l())),u=0;u<=g;++u){if(!(u<g&&i(f=c[u],u,c))===b)if(b=!b)d=u,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),h=u-1;h>=d;--h)s.point(v[h],y[h]);s.lineEnd(),s.areaEnd()}b&&(v[u]=+t(f,u,c),y[u]=+e(f,u,c),s.point(r?+r(f,u,c):v[u],n?+n(f,u,c):y[u]))}if(p)return s=null,p+""||null}function u(){return wp().defined(i).curve(a).context(o)}return t="function"==typeof t?t:void 0===t?yp:sp(+t),e="function"==typeof e?e:sp(void 0===e?0:+e),n="function"==typeof n?n:void 0===n?mp:sp(+n),c.x=function(e){return arguments.length?(t="function"==typeof e?e:sp(+e),r=null,c):t},c.x0=function(e){return arguments.length?(t="function"==typeof e?e:sp(+e),c):t},c.x1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:sp(+t),c):r},c.y=function(t){return arguments.length?(e="function"==typeof t?t:sp(+t),n=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:sp(+t),c):e},c.y1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:sp(+t),c):n},c.lineX0=c.lineY0=function(){return u().x(t).y(e)},c.lineY1=function(){return u().x(t).y(n)},c.lineX1=function(){return u().x(r).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:sp(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(s=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=s=null:s=a(o=t),c):o},c}().curve(this.curve).defined((t=>t>=0)).x0((t=>o[t])).y0((t=>a[t])).x1((t=>s[t])).y1((t=>l[t]))))).node()}}class i$ extends Lw{constructor(t,e,n={},r){super(t,e,n,r);const{inset:i=0,insetTop:o=i,insetRight:a=i,insetBottom:s=i,insetLeft:l=i,rx:c,ry:u}=n;this.insetTop=kb(o),this.insetRight=kb(a),this.insetBottom=kb(s),this.insetLeft=kb(l),this.rx=Aw(c,"auto"),this.ry=Aw(u,"auto")}render(t,e,n,r,i){const{rx:o,ry:a}=this;return uw("svg:g",i).call(kw,this,r,i).call(this._transform,this,e).call((i=>i.selectAll().data(t).enter().append("rect").call($w,this).attr("x",this._x(e,n,r)).attr("width",this._width(e,n,r)).attr("y",this._y(e,n,r)).attr("height",this._height(e,n,r)).call(Mw,"rx",o).call(Mw,"ry",a).call(ww,this,n))).node()}_x(t,{x:e},{marginLeft:n}){const{insetLeft:r}=this;return e?t=>e[t]+r:n+r}_y(t,{y:e},{marginTop:n}){const{insetTop:r}=this;return e?t=>e[t]+r:n+r}_width({x:t},{x:e},{marginRight:n,marginLeft:r,width:i}){const{insetLeft:o,insetRight:a}=this,s=e&&t?t.bandwidth():i-n-r;return Math.max(0,s-o-a)}_height({y:t},{y:e},{marginTop:n,marginBottom:r,height:i}){const{insetTop:o,insetBottom:a}=this,s=e&&t?t.bandwidth():i-n-r;return Math.max(0,s-o-a)}}const o$={ariaLabel:"bar"};class a$ extends i${constructor(t,e={}){const{x1:n,x2:r,y:i}=e;super(t,{x1:{value:n,scale:"x"},x2:{value:r,scale:"x"},y:{value:i,scale:"y",type:"band",optional:!0}},e,o$)}_transform(t,e,{x:n}){t.call(Sw,e,{x:n},0,0)}_x({x:t},{x1:e,x2:n},{marginLeft:r}){const{insetLeft:i}=this;return Rm(t)?r+i:t=>Math.min(e[t],n[t])+i}_width({x:t},{x1:e,x2:n},{marginRight:r,marginLeft:i,width:o}){const{insetLeft:a,insetRight:s}=this;return Rm(t)?o-r-i-a-s:t=>Math.max(0,Math.abs(n[t]-e[t])-a-s)}}class s$ extends i${constructor(t,e={}){const{x:n,y1:r,y2:i}=e;super(t,{y1:{value:r,scale:"y"},y2:{value:i,scale:"y"},x:{value:n,scale:"x",type:"band",optional:!0}},e,o$)}_transform(t,e,{y:n}){t.call(Sw,e,{y:n},0,0)}_y({y:t},{y1:e,y2:n},{marginTop:r}){const{insetTop:i}=this;return Rm(t)?r+i:t=>Math.min(e[t],n[t])+i}_height({y:t},{y1:e,y2:n},{marginTop:r,marginBottom:i,height:o}){const{insetTop:a,insetBottom:s}=this;return Rm(t)?o-r-i-a-s:t=>Math.max(0,Math.abs(n[t]-e[t])-a-s)}}function l$(t,e={}){return Ub(e)||(e={...e,y:yb,x2:mb}),new a$(t,Bk(px(function(t={}){return Ib(t)?t:{...t,x:mb}}(e))))}const c$={ariaLabel:"dot",fill:"none",stroke:"currentColor",strokeWidth:1.5};function u$(t){return void 0===t.sort&&void 0===t.reverse?function(t,{sort:e,...n}={}){return{...(Fb(t)&&void 0!==t.channel?jv:Hv)(n,qv(t)),sort:Vb(e)?e:null}}({channel:"-r"},t):t}class d$ extends Lw{constructor(t,e={}){const{x:n,y:r,r:i,rotate:o,symbol:a=$p,frameAnchor:s}=e,[l,c]=Nb(o,0),[u,d]=function(t){if(null==t||Ov(t))return[void 0,t];if("string"==typeof t){const e=Lv.get(`${t}`.toLowerCase());if(e)return[void 0,e]}return[t,void 0]}(a),[h,f]=Nb(i,null==u?3:4.5);super(t,{x:{value:n,scale:"x",optional:!0},y:{value:r,scale:"y",optional:!0},r:{value:h,scale:"r",filter:Rg,optional:!0},rotate:{value:l,optional:!0},symbol:{value:u,scale:"auto",optional:!0}},u$(e),c$),this.r=f,this.rotate=c,this.symbol=d,this.frameAnchor=xv(s);const{channels:p}=this,{symbol:g}=p;if(g){const{fill:t,stroke:e}=p;g.hint={fill:t?t.value===g.value?"color":"currentColor":this.fill??"currentColor",stroke:e?e.value===g.value?"color":"currentColor":this.stroke??"none"}}}render(t,e,n,r,i){const{x:o,y:a}=e,{x:s,y:l,r:c,rotate:u,symbol:d}=n,{r:h,rotate:f,symbol:p}=this,[g,b]=Rw(this,r),v=p===$p,y=c?void 0:h*h*Math.PI;return Lg(h)&&(t=[]),uw("svg:g",i).call(kw,this,r,i).call(Sw,this,{x:s&&o,y:l&&a}).call((e=>e.selectAll().data(t).enter().append(v?"circle":"path").call($w,this).call(v?t=>{t.attr("cx",s?t=>s[t]:g).attr("cy",l?t=>l[t]:b).attr("r",c?t=>c[t]:h)}:t=>{t.attr("transform",_x`translate(${s?t=>s[t]:g},${l?t=>l[t]:b})${u?t=>` rotate(${u[t]})`:f?` rotate(${f})`:""}`).attr("d",c&&d?t=>{const e=oa();return d[t].draw(e,c[t]*c[t]*Math.PI),e}:c?t=>{const e=oa();return p.draw(e,c[t]*c[t]*Math.PI),e}:d?t=>{const e=oa();return d[t].draw(e,y),e}:(()=>{const t=oa();return p.draw(t,y),t})())}).call(ww,this,n))).node()}}const h$={ariaLabel:"line",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1};class f$ extends Lw{constructor(t,e={}){const{x:n,y:r,z:i,curve:o,tension:a}=e;super(t,{x:{value:n,scale:"x"},y:{value:r,scale:"y"},z:{value:Wb(e),optional:!0}},e,h$),this.z=i,this.curve=function(t=xk,e){return"function"!=typeof t&&"auto"===`${t}`.toLowerCase()?xk:wk(t,e)}(o,a),Gw(this,e)}filter(t){return t}project(t,e,n){this.curve!==xk&&super.project(t,e,n)}render(t,e,n,r,i){const{x:o,y:a}=n,{curve:s}=this;return uw("svg:g",i).call(kw,this,r,i).call(Sw,this,e).call((e=>e.selectAll().data(_w(t,[o,a],this,n)).enter().append("path").call($w,this).call(xw,this,n).call(ax,this,n,i).attr("d",s===xk&&i.projection?function(t,e,n){const r=El(t);return e=Sb(e),n=Sb(n),t=>{let i=[];const o=[i];for(const r of t)-1===r?(i=[],o.push(i)):i.push([e[r],n[r]]);return r({type:"MultiLineString",coordinates:o})}}(i.projection,o,a):wp().curve(s).defined((t=>t>=0)).x((t=>o[t])).y((t=>a[t]))))).node()}}function p$(t,{x:e=yb,y:n=mb,...r}={}){return new f$(t,kk({...r,x:e,y:n}))}Lw.prototype.plot=function({marks:t=[],...e}={}){return ek({...e,marks:[...t,this]})};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const g$=1,b$=2,v$=t=>(...e)=>({_$litDirective$:t,values:e});let y$=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const m$=v$(class extends y${constructor(t){if(super(t),t.type!==g$||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const n=t.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return Y}}),w$=(t,e)=>q`
    <svg width="0" height="0">
      <defs>
        <linearGradient id="${t}" gradientTransform="rotate(90)">${e.map((t=>q`<stop offset="${t.offset}" stop-color="${t.color}" />`))}</linearGradient>
      </defs>
    </svg>
  `,x$=a` /* THIS FILE IS GENERATED; DO NOT EDIT. */ /* this file yields the Tailwind classes that are used in the codebase */

/* ! tailwindcss v3.4.6 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: Inter, Helvetica, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.pointer-events-none {
  pointer-events: none;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.-right-\\[7px\\] {
  right: -7px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.left-2 {
  left: 0.5rem;
}

.right-0 {
  right: 0px;
}

.right-1 {
  right: 0.25rem;
}

.top-0 {
  top: 0px;
}

.top-8 {
  top: 2rem;
}

.top-9 {
  top: 2.25rem;
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.z-\\[1\\] {
  z-index: 1;
}

.z-\\[2\\] {
  z-index: 2;
}

.m-0\\.5 {
  margin: 0.125rem;
}

.-mr-1 {
  margin-right: -0.25rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-\\[1px\\] {
  margin-left: 1px;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.\\!table {
  display: table !important;
}

.table {
  display: table;
}

.table-cell {
  display: table-cell;
}

.table-header-group {
  display: table-header-group;
}

.table-row-group {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-1\\.5 {
  height: 0.375rem;
}

.h-12 {
  height: 3rem;
}

.h-4 {
  height: 1rem;
}

.h-8 {
  height: 2rem;
}

.h-\\[26px\\] {
  height: 26px;
}

.h-\\[38px\\] {
  height: 38px;
}

.h-full {
  height: 100%;
}

.h-screen {
  height: 100vh;
}

.w-1\\.5 {
  width: 0.375rem;
}

.w-4 {
  width: 1rem;
}

.w-40 {
  width: 10rem;
}

.w-48 {
  width: 12rem;
}

.w-7 {
  width: 1.75rem;
}

.w-72 {
  width: 18rem;
}

.w-8 {
  width: 2rem;
}

.w-\\[196px\\] {
  width: 196px;
}

.w-\\[1px\\] {
  width: 1px;
}

.w-full {
  width: 100%;
}

.min-w-full {
  min-width: 100%;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-none {
  flex: none;
}

.table-fixed {
  table-layout: fixed;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-auto {
  cursor: auto;
}

.cursor-col-resize {
  cursor: col-resize;
}

.cursor-default {
  cursor: default;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.resize {
  resize: both;
}

.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-2\\.5 {
  gap: 0.625rem;
}

.gap-3\\.5 {
  gap: 0.875rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-y-0\\.5 {
  row-gap: 0.125rem;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre {
  white-space: pre;
}

.text-wrap {
  text-wrap: wrap;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}

.rounded-bl-\\[5px\\] {
  border-bottom-left-radius: 5px;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem;
}

.rounded-br-\\[5px\\] {
  border-bottom-right-radius: 5px;
}

.rounded-tl {
  border-top-left-radius: 0.25rem;
}

.rounded-tl-\\[5px\\] {
  border-top-left-radius: 5px;
}

.rounded-tr {
  border-top-right-radius: 0.25rem;
}

.rounded-tr-\\[5px\\] {
  border-top-right-radius: 5px;
}

.border {
  border-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-neutral-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-neutral-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-neutral-400 {
  --tw-border-opacity: 1;
  border-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.border-neutral-500 {
  --tw-border-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.border-neutral-600 {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.border-neutral-800 {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-theme-table-border {
  border-color: var(--astra-table-border-color, #e5e7eb);
}

.border-theme-table-border-dark {
  border-color: var(--astra-table-border-color-dark, rgb(52,52,56));
}

.border-transparent {
  border-color: transparent;
}

.\\!bg-neutral-950 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity)) !important;
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
}

.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-neutral-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}

.bg-neutral-200\\/60 {
  background-color: rgb(229 229 229 / 0.6);
}

.bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.bg-neutral-300\\/30 {
  background-color: rgb(212 212 212 / 0.3);
}

.bg-neutral-300\\/85 {
  background-color: rgb(212 212 212 / 0.85);
}

.bg-neutral-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.bg-neutral-500\\/10 {
  background-color: rgb(115 115 115 / 0.1);
}

.bg-neutral-500\\/30 {
  background-color: rgb(115 115 115 / 0.3);
}

.bg-neutral-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-neutral-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.bg-neutral-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}

.bg-neutral-950 {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-theme-table {
  background-color: var(--astra-table-background-color, rgba(255,255,255, 0));
}

.bg-theme-table-border {
  background-color: var(--astra-table-border-color, #e5e7eb);
}

.bg-theme-table-cell-dirty {
  background-color: var(--astra-cell-dirty-background-color, rgb(253 230 138));
}

.bg-theme-table-cell-dirty-dark {
  background-color: var(--astra-cell-dirty-background-color, rgba(234, 179, 8, .6));
}

.bg-theme-table-cell-mutating-background {
  background-color: var(--astra-cell-mutating-background-color, rgb(239 246 255));
}

.bg-theme-table-column {
  background-color: var(--astra-table-column-header-background-color, rgba(255,255,255,0.9));
}

.bg-theme-table-column-dark {
  background-color: var(--astra-table-column-header-background-color-dark, rgba(0,0,0,0.9));
}

.bg-theme-table-dark {
  background-color: var(--astra-table-background-color, rgba(10,10,10, 0));
}

.bg-theme-table-row-even-dark {
  background-color: var(--astra-table-row-even-background-color-dark, rgba(0,0,0));
}

.bg-theme-table-row-hover-dark {
  background-color: var(--astra-table-row-hover-background-color-dark, rgba(255,255,255,0.09));
}

.bg-theme-table-row-new {
  background-color: var(--astra-table-row-new-background-color, rgba(22, 163, 74, 0.33));
}

.bg-theme-table-row-new-dark {
  background-color: var(--astra-table-row-new-background-color-dark, rgba(21, 128, 61, 0.5));
}

.bg-theme-table-row-selected {
  background-color: var(--astra-table-row-selected-background-color, rgba(245, 245, 245, 1));
}

.bg-theme-table-row-selected-dark {
  background-color: var(--astra-table-row-selected-background-color-dark, rgb(23 23 23));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.p-0\\.5 {
  padding: 0.125rem;
}

.p-1\\.5 {
  padding: 0.375rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-3\\.5 {
  padding: 0.875rem;
}

.p-4 {
  padding: 1rem;
}

.p-40 {
  padding: 10rem;
}

.p-6 {
  padding: 1.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-cell-padding-x {
  padding-left: var(--astra-cell-padding-x, 12px);
  padding-right: var(--astra-cell-padding-x, 12px);
}

.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-cell-padding-y {
  padding-top: var(--astra-cell-padding-y, 8px);
  padding-bottom: var(--astra-cell-padding-y, 8px);
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.text-center {
  text-align: center;
}

.text-2xl {
  font-size: 24px;
  line-height: 32px;
}

.text-\\[8px\\] {
  font-size: 8px;
}

.text-sm {
  font-size: 12px;
  line-height: 18px;
}

.text-xl {
  font-size: 20px;
  line-height: 28px;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.capitalize {
  text-transform: capitalize;
}

.italic {
  font-style: italic;
}

.leading-\\[26px\\] {
  line-height: 26px;
}

.leading-\\[9\\.6px\\] {
  line-height: 9.6px;
}

.\\!text-neutral-200 {
  --tw-text-opacity: 1 !important;
  color: rgb(229 229 229 / var(--tw-text-opacity)) !important;
}

.\\!text-neutral-300 {
  --tw-text-opacity: 1 !important;
  color: rgb(212 212 212 / var(--tw-text-opacity)) !important;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}

.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}

.text-neutral-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.text-neutral-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}

.text-neutral-700 {
  --tw-text-opacity: 1;
  color: rgb(64 64 64 / var(--tw-text-opacity));
}

.text-neutral-800 {
  --tw-text-opacity: 1;
  color: rgb(38 38 38 / var(--tw-text-opacity));
}

.text-neutral-900 {
  --tw-text-opacity: 1;
  color: rgb(23 23 23 / var(--tw-text-opacity));
}

.text-neutral-950 {
  --tw-text-opacity: 1;
  color: rgb(10 10 10 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-theme-secondary-content {
  color: var(--astra-secondary-content-color, rgb(42, 42, 42));
}

.text-theme-sidebar-header-content {
  color: var(--astra-header-content-color, #000000);
}

.text-theme-sidebar-li-active {
  color: var(--astra-sidebar-li-active-content-color, rgb(59 130 246));
}

.text-theme-sidebar-li-content {
  color: var(--astra-sidebar-li-content-color, #000000);
}

.text-theme-sidebar-li-content-dark {
  color: var(--astra-sidebar-li-content-color-dark, #ffffff);
}

.text-theme-sidebar-subheader-content {
  color: var(--astra-sidebar-subheader-content-color, #eeeee);
}

.text-theme-table-column-content {
  color: var(--astra-table-column-header-content-color, #000000);
}

.text-theme-table-column-content-dark {
  color: var(--astra-table-column-header-content-color-dark, #ffffff);
}

.text-theme-table-content {
  color: var(--astra-table-content-color, #000000);
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.underline-offset-2 {
  text-underline-offset: 2px;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.placeholder-neutral-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.placeholder-neutral-600::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.caret-current {
  caret-color: currentColor;
}

.caret-transparent {
  caret-color: transparent;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-60 {
  opacity: 0.6;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-black\\/5 {
  --tw-shadow-color: rgb(0 0 0 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-\\[50\\] {
  transition-duration: 50;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.selection\\:bg-violet-500\\/20 *::-moz-selection {
  background-color: rgb(139 92 246 / 0.2);
}

.selection\\:bg-violet-500\\/20 *::selection {
  background-color: rgb(139 92 246 / 0.2);
}

.selection\\:bg-violet-500\\/20::-moz-selection {
  background-color: rgb(139 92 246 / 0.2);
}

.selection\\:bg-violet-500\\/20::selection {
  background-color: rgb(139 92 246 / 0.2);
}

.first\\:border-l:first-child {
  border-left-width: 1px;
}

.odd\\:bg-theme-table-row-odd:nth-child(odd) {
  background-color: var(--astra-table-row-even-background-color, rgba(255,255,255));
}

.even\\:bg-theme-table-row-even:nth-child(even) {
  background-color: var(--astra-table-row-even-background-color, rgba(255,255,255));
}

.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.hover\\:bg-neutral-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.hover\\:bg-neutral-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.hover\\:bg-red-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.hover\\:bg-theme-sidebar-li-hover:hover {
  background-color: var(--astra-hover-sidebar-li-background-color, rgba(0,0,0,0.03));
}

.hover\\:bg-theme-table-row-hover:hover {
  background-color: var(--astra-table-row-hover-background-color, rgba(0,0,0,0.03));
}

.hover\\:bg-theme-table-row-selected-hover:hover {
  background-color: var(--astra-table-row-selected-hover-background-color, rgba(229, 229, 229, 1));
}

.hover\\:text-red-600:hover {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.focus\\:z-\\[1\\]:focus {
  z-index: 1;
}

.focus\\:rounded-\\[4px\\]:focus {
  border-radius: 4px;
}

.focus\\:rounded-md:focus {
  border-radius: 0.375rem;
}

.focus\\:shadow-ringlet:focus {
  --tw-shadow: 0px 0px 0px 3px #d4d4d4;;
  --tw-shadow-colored: 0px 0px 0px 3px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-black:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}

.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.focus\\:ring-neutral-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(115 115 115 / var(--tw-ring-opacity));
}

.focus\\:ring-neutral-950:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(10 10 10 / var(--tw-ring-opacity));
}

.focus-visible\\:ring:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-blue-600:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));
}

.active\\:border-neutral-200:active {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.active\\:bg-neutral-300:active {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.disabled\\:bg-neutral-400:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(163 163 163 / var(--tw-bg-opacity));
}

.group\\/actions:hover .group-hover\\/actions\\:block {
  display: block;
}

.group:hover .group-hover\\:w-1 {
  width: 0.25rem;
}

.group:hover .group-hover\\:bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.group:hover .group-hover\\:bg-theme-table-row-hover {
  background-color: var(--astra-table-row-hover-background-color, rgba(0,0,0,0.03));
}

.group:hover .group-hover\\:bg-theme-table-row-hover-dark {
  background-color: var(--astra-table-row-hover-background-color-dark, rgba(255,255,255,0.09));
}

.group:active .group-active\\:w-1 {
  width: 0.25rem;
}

.group:active .group-active\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.dark\\:border-neutral-600:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.dark\\:border-neutral-700:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.dark\\:border-neutral-800:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.dark\\:border-theme-table-border-dark:is(.dark *) {
  border-color: var(--astra-table-border-color-dark, rgb(52,52,56));
}

.dark\\:bg-blue-950:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(23 37 84 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-50:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-500\\/30:is(.dark *) {
  background-color: rgb(115 115 115 / 0.3);
}

.dark\\:bg-neutral-700\\/50:is(.dark *) {
  background-color: rgb(64 64 64 / 0.5);
}

.dark\\:bg-neutral-700\\/85:is(.dark *) {
  background-color: rgb(64 64 64 / 0.85);
}

.dark\\:bg-neutral-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-950:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity));
}

.dark\\:bg-theme-sidebar-li-hover-dark:is(.dark *) {
  background-color: var(--astra-hover-sidebar-li-background-color-dark, rgba(255,255,255,0.03));
}

.dark\\:bg-theme-table-border-dark:is(.dark *) {
  background-color: var(--astra-table-border-color-dark, rgb(52,52,56));
}

.dark\\:bg-theme-table-cell-dirty-dark:is(.dark *) {
  background-color: var(--astra-cell-dirty-background-color, rgba(234, 179, 8, .6));
}

.dark\\:bg-theme-table-cell-mutating-background-dark:is(.dark *) {
  background-color: var(--astra-cell-mutating-background-color-dark, rgb(23 37 84));
}

.dark\\:bg-theme-table-column-dark:is(.dark *) {
  background-color: var(--astra-table-column-header-background-color-dark, rgba(0,0,0,0.9));
}

.dark\\:bg-theme-table-dark:is(.dark *) {
  background-color: var(--astra-table-background-color, rgba(10,10,10, 0));
}

.dark\\:bg-theme-table-row-new-dark:is(.dark *) {
  background-color: var(--astra-table-row-new-background-color-dark, rgba(21, 128, 61, 0.5));
}

.dark\\:bg-theme-table-row-selected-dark:is(.dark *) {
  background-color: var(--astra-table-row-selected-background-color-dark, rgb(23 23 23));
}

.dark\\:bg-white:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.dark\\:text-black:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.dark\\:text-neutral-200:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 229 229 / var(--tw-text-opacity));
}

.dark\\:text-neutral-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}

.dark\\:text-neutral-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}

.dark\\:text-neutral-50:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:text-neutral-600:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}

.dark\\:text-neutral-950:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(10 10 10 / var(--tw-text-opacity));
}

.dark\\:text-red-400\\/90:is(.dark *) {
  color: rgb(248 113 113 / 0.9);
}

.dark\\:text-theme-secondary-content-dark:is(.dark *) {
  color: var(--astra-secondary-content-color, rgb(213, 213, 213));
}

.dark\\:text-theme-sidebar-li-content-dark:is(.dark *) {
  color: var(--astra-sidebar-li-content-color-dark, #ffffff);
}

.dark\\:text-theme-sidebar-subheader-content-dark:is(.dark *) {
  color: var(--astra-sidebar-subheader-content-color-dark, #eeeeee);
}

.dark\\:text-theme-table-column-content-dark:is(.dark *) {
  color: var(--astra-table-column-header-content-color-dark, #ffffff);
}

.dark\\:text-theme-table-content-dark:is(.dark *) {
  color: var(--astra-table-content-color-dark, #ffffff);
}

.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:text-zinc-600:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}

.dark\\:placeholder-neutral-400:is(.dark *)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.dark\\:placeholder-neutral-400:is(.dark *)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(163 163 163 / var(--tw-placeholder-opacity));
}

.dark\\:placeholder-neutral-600:is(.dark *)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.dark\\:placeholder-neutral-600:is(.dark *)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(82 82 82 / var(--tw-placeholder-opacity));
}

.dark\\:odd\\:bg-theme-table-row-odd-dark:nth-child(odd):is(.dark *) {
  background-color: var(--astra-table-row-even-background-color-dark, rgba(0,0,0));
}

.dark\\:even\\:bg-theme-table-row-even-dark:nth-child(even):is(.dark *) {
  background-color: var(--astra-table-row-even-background-color-dark, rgba(0,0,0));
}

.dark\\:hover\\:bg-neutral-700:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-neutral-800:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-neutral-900:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-red-500\\/10:hover:is(.dark *) {
  background-color: rgb(239 68 68 / 0.1);
}

.dark\\:hover\\:bg-theme-table-row-hover-dark:hover:is(.dark *) {
  background-color: var(--astra-table-row-hover-background-color-dark, rgba(255,255,255,0.09));
}

.hover\\:dark\\:bg-neutral-200:is(.dark *):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}

.hover\\:dark\\:bg-neutral-300\\/10:is(.dark *):hover {
  background-color: rgb(212 212 212 / 0.1);
}

.hover\\:dark\\:bg-neutral-700:is(.dark *):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.dark\\:hover\\:text-red-400:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}

.focus\\:dark\\:border-neutral-300:is(.dark *):focus {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.dark\\:focus\\:shadow-ringlet-dark:focus:is(.dark *) {
  --tw-shadow: 0px 0px 0px 3px #525252;;
  --tw-shadow-colored: 0px 0px 0px 3px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:focus\\:ring-blue-700:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(29 78 216 / var(--tw-ring-opacity));
}

.dark\\:focus\\:ring-neutral-300:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(212 212 212 / var(--tw-ring-opacity));
}

.dark\\:focus\\:ring-neutral-50:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 250 250 / var(--tw-ring-opacity));
}

.dark\\:active\\:border-neutral-800:active:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.dark\\:active\\:bg-neutral-700:active:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.disabled\\:dark\\:bg-neutral-600:is(.dark *):disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.group:hover .dark\\:group-hover\\:bg-blue-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
}

.group:hover .dark\\:group-hover\\:bg-theme-table-row-hover-dark:is(.dark *) {
  background-color: var(--astra-table-row-hover-background-color-dark, rgba(255,255,255,0.09));
}

.group:active .dark\\:group-active\\:bg-blue-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}
 `;function _$(t){return Object.entries(t).map((([t,e])=>!!e&&t)).filter(Boolean).join(" ")}var k$=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};class $$ extends ut{constructor(){super(...arguments),this.theme="light",this._class=this.theme}classMap(){return{dark:"dark"==this.theme}}willUpdate(t){super.willUpdate(t),this._class=_$(this.classMap())}render(){return V`<slot></slot>`}}$$.styles=[x$],k$([gt({attribute:"theme",type:String})],$$.prototype,"theme",void 0),k$([gt({reflect:!0,attribute:"class",type:String})],$$.prototype,"_class",void 0);var E$,M$=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const S$=[w$("mercury",[{offset:"0%",color:"#ffffff"},{offset:"100%",color:"#747474"}]),w$("iridium",[{offset:"0%",color:"#87E9C0"},{offset:"75%",color:"#B9D975"},{offset:"100%",color:"#C9D69B"}]),w$("cobalt",[{offset:"0%",color:"#5956E2"},{offset:"50%",color:"#A99AFF"},{offset:"100%",color:"#82DBFF"}]),w$("afterburn",[{offset:"0%",color:"#E75F98"},{offset:"25%",color:"#FFA285"},{offset:"100%",color:"#CCB8F2"}]),w$("celestial",[{offset:"0%",color:"#D1FFFF"},{offset:"75%",color:"#93FDFF"},{offset:"100%",color:"#1A9EF5"}])],A$=["#E75F98","#FFA285","#CCB8F2"];let C$=E$=class extends $${constructor(){super(...arguments),this.hasUpdatedHeight=!1,this.axisLabelDisplayX="auto",this.niceX=!1,this.labelX=null,this.axisLabelDisplay="left"}static async getChartData(t,e){if(!t)throw new Error("Missing API key");if(!e)throw new Error("Missing chart ID");return fetch(`https://app.outerbase.com/api/v1/chart/${e}`,{method:"POST",headers:{"x-chart-api-key":t,"content-type":"application/json"}}).then((t=>t.json())).catch((t=>{console.error("Outerbase Chart Error: Could not retrieve chart information. ",t)}))}convertDataIntoCastedData(t){let e=JSON.parse(JSON.stringify(t));return e.layers.forEach((t=>{t.result=this.castData(t.result)})),e}castData(t){return t?t.map((t=>{const e={};for(const n in t){const r=t[n];isNaN(r)||""===r?isNaN(Date.parse(r))?e[n]=String(r):e[n]=new Date(r):e[n]=Number(r)}return e})):[]}willUpdate(t){if(super.willUpdate(t),(t.has("apiKey")||t.has("chartId"))&&(async()=>{this.apiKey&&this.chartId&&(this.data=await E$.getChartData(this.apiKey,this.chartId))})(),t.has("data")){this.type=this.data?.layers?.[0]?.type,this.highlights=this.data?.highlights,this.data=this.convertDataIntoCastedData(this.data);const t=this.data?.options;t&&(this.legend=t.legend,this.axisLabelX=t.xAxisLabel,this.axisLabelY=t.yAxisLabel,this.keyX=t.xAxisKey,this.keyY=t.yAxisKeys?.[0],this.sortOrder=t.sortOrder,this.percent=t.percentage)}}getLatestPlot(){const t=this.data?.layers?.[0];if(!t)return null;const e=t.result;if(!e)return null;const n={strokeDasharray:"2",strokeOpacity:.1,stroke:"light"===this.theme?"black":"white"},r={width:this.width,height:this.height,margin:this.margin,marginTop:this.marginTop,marginRight:this.marginRight,marginBottom:this.marginBottom,marginLeft:this.marginLeft,round:this.round,title:this.mainTitle,subtitle:this.subtitle,caption:this.caption,inset:this.inset,color:{type:this.colorType,scheme:this.colorScheme,legend:this.legend},symbol:{legend:this.legend},marks:[]},i={fill:"dark"===this.theme?"#171717":"#FFFFFF",stroke:"dark"===this.theme?"#262626":"#e5e5e5",textPadding:10,lineHeight:1.5};if("bar"===this.type&&(!1!==this.gridX&&r.marks.push(v_(n)),r.marks.push(l$(e,{x:this.keyX,y:this.keyY,tip:i}))),"column"===this.type){!1!==this.gridY&&r.marks.push(g_(n));const t=this.keyX??"",o=this.data?.layers?.[0].result?.map((e=>{if(!isNaN(Date.parse(e[t])))return new Date(e[t])})).filter((t=>void 0!==t))??[],a=o.length&&o.every((t=>t instanceof Date)),s=me(o),l=ve(o);let c;s&&l&&(c=qu.range(s,l)),r.x={...r.x,interval:a?Mu.every(1):void 0,tickValues:a?c:void 0},r.marks.push(function(t,e={}){return Ub(e)||(e={...e,x:yb,y2:mb}),new s$(t,Hk(gx(Uk(e))))}(e,{x:this.keyX,y:this.keyY,fill:"url(#mercury)",inset:.5,tip:i}))}return"line"===this.type&&(!1!==this.gridX&&r.marks.push(v_(n)),r.marks.push(p$(e,{x:this.keyX,y:this.keyY,stroke:(this.data?.options?.yAxisKeys??[]).length>1?A$:"url(#mercury)",tip:i})),!1!==this.niceY&&(this.niceY=!0),r.color.legend=!0,r.color.scheme="purples"),"scatter"===this.type&&r.marks.push(function(t,{x:e,y:n,...r}={}){return void 0===r.frameAnchor&&([e,n]=Yb(e,n)),new d$(t,{...r,x:e,y:n})}(e,{x:this.keyX,y:this.keyY,tip:i})),"area"===this.type&&r.marks.push(p$(e,{x:this.keyX,y:this.keyY,stroke:(this.data?.options?.yAxisKeys??[]).length>1?A$:"url(#mercury)",tip:i}),function(t,e){const{x:n=yb,...r}=kk(e);return new r$(t,Hk(Uk({...r,x1:n,x2:void 0})))}(e,{x:this.keyX,y2:this.keyY,fill:"url(#mercury)",fillOpacity:.1})),r.x={...r.x,label:this.axisLabelX??null,labelAnchor:"center",labelArrow:"none",ticks:this.ticksX,nice:this.niceX,padding:.3},r.y={...r.y,label:this.axisLabelY??null,labelAnchor:"top",labelArrow:"none",ticks:this.ticksY,nice:this.niceY},ek(r)}updated(t){const e=this.shadowRoot.querySelectorAll("rect");for(let t=0;t<e.length;t++)e[t].style.animationDelay=t/50+"s"}render(){let t;if("table"===this.type){const e=this.data?.layers?.[0].result?.[0]?.originalValues;let n;e&&(n={columns:Object.keys(e).map((t=>({name:t})))}),t=V`<astra-table
        schema=${JSON.stringify(n)}
        data="${JSON.stringify(this.data?.layers?.[0].result)}"
        theme="light"
        keyboard-shortcuts
        selectable-rows
        outer-border
        blank-fill
      ></astra-table>`}else t="single_value"===this.type?V`<astra-text variant="h1">single_value</astra-text>`:"text"===this.type?V`<astra-text variant="h1">text</astra-text>`:this.getLatestPlot();const e=V`<div class="bg-transparent selection:bg-violet-500/20 text-zinc-400 dark:text-zinc-600">${t}</div>`,n=V`<div id="themed-plot" class="${m$({dark:"dark"===this.theme,"*:fade barY *:animate-fade":!0})}">
      ${e}
    </div>`;return this.hasUpdatedHeight||setTimeout((()=>{const t=this.shadowRoot?.querySelector("#chart"),{height:e}=t?.getBoundingClientRect()??{height:0};this.height=e,this.hasUpdatedHeight=!0}),0),V`${S$} ${n}`}};C$.styles=[...$$.styles,a`
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .fade {
        opacity: 0;

        @media (prefers-reduced-motion) {
          opacity: 1;
          animation: none;
        }
      }

      .gridDots {
        background-image: radial-gradient(RGBA(255, 255, 255, 0.2) 1px, transparent 0);
        background-size: 24px 24px;
        background-position: 0px 0px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 0.5;
        }
      }

      @keyframes drawLine {
        from {
          opacity: 0;
          stroke-dashoffset: 3600;
        }
        to {
          opacity: 1;
          stroke-dashoffset: 0;
        }
      }

      figure {
        div {
          span {
            svg {
              border-radius: 24px;
              width: 20px;
              overflow: hidden;
            }
          }
        }
      }

      g[aria-label='tip'] {
        g {
          path {
            filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.05));
          }
        }
      }

      svg {
        font-size: 12px;

        g[aria-label='line'] {
          opacity: 0;
          // stroke-dasharray: 4000; // not working as intended; this is needed for the fancy loading animation tho
          transition-property: stroke-width;
          transition: 0.3s ease;
          animation: 1.5s ease-out 0s drawLine forwards;
        }

        // g[aria-label='area'] {
        //   opacity: 0;
        //   transition: 0.4s ease-out;
        // }

        [aria-label='y-axis tick label'],
        [aria-label='y-axis tick'],
        [aria-label='x-axis tick label'],
        [aria-label='x-axis tick'] {
          transition: 0.5s ease;
        }

        g[aria-label='crosshair rule'] {
          stroke-opacity: 0.3;
        }

        &:hover {
          /* [aria-label='line'] {
            stroke-width: 4;
          } */

          [aria-label='area'] {
            opacity: 0.5;
          }

          [aria-label='y-axis tick label'],
          [aria-label='y-axis tick'],
          [aria-label='x-axis tick label'],
          [aria-label='x-axis tick'] {
            opacity: 0.5;
          }
        }

        [aria-label='line']:hover {
          stroke-width: 4;
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scaleY(0.6) translateY(-20px);
        }
        to {
          opacity: 1;
          transform: scaleY(1) translateY(0px);
        }
      }

      .barY {
        g[aria-label='bar'] {
          rect {
            transform-origin: bottom;
            transform: scaleY(0.6) translateY(-20px);
            opacity: 0;
            animation: scaleIn 0.4s cubic-bezier(0.5, 0, 0, 1.1) forwards;
          }
        }
      }
    `],M$([bt()],C$.prototype,"hasUpdatedHeight",void 0),M$([gt({type:String,attribute:"api-key"})],C$.prototype,"apiKey",void 0),M$([gt({type:String,attribute:"chart-id"})],C$.prototype,"chartId",void 0),M$([gt({type:Object})],C$.prototype,"data",void 0),M$([gt({type:String})],C$.prototype,"type",void 0),M$([gt({type:Array})],C$.prototype,"highlights",void 0),M$([gt({type:String,attribute:"key-x"})],C$.prototype,"keyX",void 0),M$([gt({type:String,attribute:"axis-label-x"})],C$.prototype,"axisLabelX",void 0),M$([gt({type:String,attribute:"axis-label-display-x"})],C$.prototype,"axisLabelDisplayX",void 0),M$([gt({type:String,attribute:"ticks-x"})],C$.prototype,"ticksX",void 0),M$([gt({type:Boolean,attribute:"nice-x"})],C$.prototype,"niceX",void 0),M$([gt({type:Boolean,attribute:"grid-x"})],C$.prototype,"gridX",void 0),M$([gt({type:String,attribute:"label-x"})],C$.prototype,"labelX",void 0),M$([gt({type:String,attribute:"key-y"})],C$.prototype,"keyY",void 0),M$([gt({type:String,attribute:"axis-label-y"})],C$.prototype,"axisLabelY",void 0),M$([gt({type:String,attribute:"axis-label-display-y"})],C$.prototype,"axisLabelDisplay",void 0),M$([gt({type:String,attribute:"ticks-y"})],C$.prototype,"ticksY",void 0),M$([gt({type:Boolean,attribute:"nice-y"})],C$.prototype,"niceY",void 0),M$([gt({type:Boolean,attribute:"grid-y"})],C$.prototype,"gridY",void 0),M$([gt({type:String,attribute:"sort-order"})],C$.prototype,"sortOrder",void 0),M$([gt({type:String,attribute:"group-by"})],C$.prototype,"groupBy",void 0),M$([gt({type:Number})],C$.prototype,"width",void 0),M$([gt({type:Number})],C$.prototype,"height",void 0),M$([gt({type:Number})],C$.prototype,"margin",void 0),M$([gt({type:Number,attribute:"margin-top"})],C$.prototype,"marginTop",void 0),M$([gt({type:Number,attribute:"margin-right"})],C$.prototype,"marginRight",void 0),M$([gt({type:Number,attribute:"margin-bottom"})],C$.prototype,"marginBottom",void 0),M$([gt({type:Number,attribute:"margin-left"})],C$.prototype,"marginLeft",void 0),M$([gt({type:String,attribute:"color-type"})],C$.prototype,"colorType",void 0),M$([gt({type:String,attribute:"color-scheme"})],C$.prototype,"colorScheme",void 0),M$([gt({type:Boolean})],C$.prototype,"round",void 0),M$([gt({type:Number})],C$.prototype,"inset",void 0),M$([gt({type:Number,attribute:"inset-top"})],C$.prototype,"insetTop",void 0),M$([gt({type:Number,attribute:"inset-right"})],C$.prototype,"insetRight",void 0),M$([gt({type:Number,attribute:"inset-bottom"})],C$.prototype,"insetBottom",void 0),M$([gt({type:Number,attribute:"inset-left"})],C$.prototype,"insetLeft",void 0),M$([gt({type:String,attribute:"title"})],C$.prototype,"mainTitle",void 0),M$([gt({type:String})],C$.prototype,"subtitle",void 0),M$([gt({type:String})],C$.prototype,"caption",void 0),M$([gt({type:String})],C$.prototype,"legend",void 0),M$([gt({type:Boolean})],C$.prototype,"clamp",void 0),M$([gt({type:Boolean})],C$.prototype,"zero",void 0),M$([gt({type:Boolean})],C$.prototype,"percent",void 0),C$=E$=M$([ht("astra-chart")],C$);var T$=C$,D$=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let N$=class extends ut{constructor(){super(...arguments),this.placeholder="",this.value=""}onInput(t){this.value=t.target.value}render(){const t=this.label?V`<label id="input-label" for="input">${this.label}</label>`:void 0;return V`
      <div>
        <slot name="left"></slot>

        ${t}
        <input
          id="input"
          type="text"
          aria-labelledby="input-label"
          .placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this.onInput}
        />

        <slot name="right"></slot>
      </div>
    `}};N$.styles=[wt,a`
      :host {
        display: block;
      }

      div {
        display: flex;
        gap: 8px;
        border: 1px solid var(--astra-neutral-200);
        border-radius: 6px;
        overflow: hidden; // preserves border-radius from un-rounded children
        align-items: center;
        font-family: var(--astra-font-family);
      }

      div:focus-within {
        outline: 1px solid var(--astra-accent, lime);
        outline-offset: -1px; // 0px draws it _outside_ of the border, where as this covers the border
      }

      input {
        flex: 1;
        padding: 10px 12px;
        color: var(--astra-neutral-900);
        background: var(--astra-neutral-100);
        border: none;
        font-family: var(--astra-font-family);
        font-size: 14px;
        line-height: 20px;
      }

      /* Removed outline:none; to preserve default focus indication */
      input::placeholder {
        color: var(--astra-neutral-500);
        opacity: 1; /* Firefox */
      }

      ::-ms-input-placeholder {
        color: var(--astra-neutral-500);
      }

      label {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        border: 0;
      }

      @media (prefers-color-scheme: dark) {
        div {
          border: 1px solid var(--astra-neutral-800);
        }

        input {
          color: var(--astra-neutral-100);
          background: var(--astra-neutral-900);
        }
      }
    `],D$([gt({type:String})],N$.prototype,"placeholder",void 0),D$([gt({type:String})],N$.prototype,"value",void 0),D$([gt({type:String})],N$.prototype,"label",void 0),N$=D$([ht("astra-input")],N$);var R$=N$;
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{I:L$}=lt,O$=()=>document.createComment(""),z$=(t,e,n)=>{const r=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===n){const e=r.insertBefore(O$(),i),o=r.insertBefore(O$(),i);n=new L$(e,o,t,t.options)}else{const e=n._$AB.nextSibling,o=n._$AM,a=o!==t;if(a){let e;n._$AQ?.(t),n._$AM=t,void 0!==n._$AP&&(e=t._$AU)!==o._$AU&&n._$AP(e)}if(e!==i||a){let t=n._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,i),t=e}}}return n},P$=(t,e,n=t)=>(t._$AI(e,n),t),I$={},j$=t=>{t._$AP?.(!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const t=e.nextSibling;e.remove(),e=t}},U$=(t,e)=>{const n=t._$AN;if(void 0===n)return!1;for(const t of n)t._$AO?.(e,!1),U$(t,e);return!0},B$=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===n?.size)},H$=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),q$(e)}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function F$(t){void 0!==this._$AN?(B$(this),this._$AM=t,H$(this)):this._$AM=t}function V$(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let t=n;t<r.length;t++)U$(r[t],!1),B$(r[t]);else null!=r&&(U$(r,!1),B$(r));else U$(this,t)}const q$=t=>{t.type==b$&&(t._$AP??=V$,t._$AQ??=F$)};class Y$ extends y${constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),H$(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(U$(this,t),B$(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const W$=()=>new X$;class X${}const K$=new WeakMap,Z$=v$(class extends Y${render(t){return W}update(t,[e]){const n=e!==this.Y;return n&&void 0!==this.Y&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),W}rt(t){if("function"==typeof this.Y){const e=this.ht??globalThis;let n=K$.get(e);void 0===n&&(n=new WeakMap,K$.set(e,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?K$.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),G$="important",J$=" !"+G$,Q$=v$(class extends y${constructor(t){if(super(t),t.type!==g$||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?n.removeProperty(t):n[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(J$);t.includes("-")||e?n.setProperty(t,e?r.slice(0,-11):r,e?G$:""):n[t]=r}}return Y}});
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var tE="object"==typeof global&&global&&global.Object===Object&&global,eE="object"==typeof self&&self&&self.Object===Object&&self,nE=tE||eE||Function("return this")(),rE=nE.Symbol,iE=Object.prototype,oE=iE.hasOwnProperty,aE=iE.toString,sE=rE?rE.toStringTag:void 0;var lE=Object.prototype.toString;var cE="[object Null]",uE="[object Undefined]",dE=rE?rE.toStringTag:void 0;function hE(t){return null==t?void 0===t?uE:cE:dE&&dE in Object(t)?function(t){var e=oE.call(t,sE),n=t[sE];try{t[sE]=void 0;var r=!0}catch(t){}var i=aE.call(t);return r&&(e?t[sE]=n:delete t[sE]),i}(t):function(t){return lE.call(t)}(t)}function fE(t){return null!=t&&"object"==typeof t}var pE="[object Symbol]";var gE=Array.isArray,bE=/\s/;var vE=/^\s+/;function yE(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&bE.test(t.charAt(e)););return e}(t)+1).replace(vE,""):t}function mE(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var wE=NaN,xE=/^[-+]0x[0-9a-f]+$/i,_E=/^0b[01]+$/i,kE=/^0o[0-7]+$/i,$E=parseInt;function EE(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||fE(t)&&hE(t)==pE}(t))return wE;if(mE(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=mE(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=yE(t);var n=_E.test(t);return n||kE.test(t)?$E(t.slice(2),n?2:8):xE.test(t)?wE:+t}var ME="[object AsyncFunction]",SE="[object Function]",AE="[object GeneratorFunction]",CE="[object Proxy]";function TE(t){if(!mE(t))return!1;var e=hE(t);return e==SE||e==AE||e==ME||e==CE}var DE,NE=nE["__core-js_shared__"],RE=(DE=/[^.]+$/.exec(NE&&NE.keys&&NE.keys.IE_PROTO||""))?"Symbol(src)_1."+DE:"";var LE=Function.prototype.toString;function OE(t){if(null!=t){try{return LE.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var zE=/^\[object .+?Constructor\]$/,PE=Function.prototype,IE=Object.prototype,jE=PE.toString,UE=IE.hasOwnProperty,BE=RegExp("^"+jE.call(UE).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function HE(t){return!(!mE(t)||(e=t,RE&&RE in e))&&(TE(t)?BE:zE).test(OE(t));var e}function FE(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return HE(n)?n:void 0}var VE=FE(nE,"WeakMap"),qE=9007199254740991,YE=/^(?:0|[1-9]\d*)$/;function WE(t,e){var n=typeof t;return!!(e=null==e?qE:e)&&("number"==n||"symbol"!=n&&YE.test(t))&&t>-1&&t%1==0&&t<e}function XE(t,e){return t===e||t!=t&&e!=e}var KE=9007199254740991;function ZE(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=KE}var GE=Object.prototype;function JE(t){return fE(t)&&"[object Arguments]"==hE(t)}var QE=Object.prototype,tM=QE.hasOwnProperty,eM=QE.propertyIsEnumerable,nM=JE(function(){return arguments}())?JE:function(t){return fE(t)&&tM.call(t,"callee")&&!eM.call(t,"callee")};var rM="object"==typeof t&&t&&!t.nodeType&&t,iM=rM&&"object"==typeof module&&module&&!module.nodeType&&module,oM=iM&&iM.exports===rM?nE.Buffer:void 0,aM=(oM?oM.isBuffer:void 0)||function(){return!1},sM={};sM["[object Float32Array]"]=sM["[object Float64Array]"]=sM["[object Int8Array]"]=sM["[object Int16Array]"]=sM["[object Int32Array]"]=sM["[object Uint8Array]"]=sM["[object Uint8ClampedArray]"]=sM["[object Uint16Array]"]=sM["[object Uint32Array]"]=!0,sM["[object Arguments]"]=sM["[object Array]"]=sM["[object ArrayBuffer]"]=sM["[object Boolean]"]=sM["[object DataView]"]=sM["[object Date]"]=sM["[object Error]"]=sM["[object Function]"]=sM["[object Map]"]=sM["[object Number]"]=sM["[object Object]"]=sM["[object RegExp]"]=sM["[object Set]"]=sM["[object String]"]=sM["[object WeakMap]"]=!1;var lM,cM="object"==typeof t&&t&&!t.nodeType&&t,uM=cM&&"object"==typeof module&&module&&!module.nodeType&&module,dM=uM&&uM.exports===cM&&tE.process,hM=function(){try{var t=uM&&uM.require&&uM.require("util").types;return t||dM&&dM.binding&&dM.binding("util")}catch(t){}}(),fM=hM&&hM.isTypedArray,pM=fM?(lM=fM,function(t){return lM(t)}):function(t){return fE(t)&&ZE(t.length)&&!!sM[hE(t)]},gM=Object.prototype.hasOwnProperty;function bM(t,e){var n=gE(t),r=!n&&nM(t),i=!n&&!r&&aM(t),o=!n&&!r&&!i&&pM(t),a=n||r||i||o,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],l=s.length;for(var c in t)!gM.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||WE(c,l))||s.push(c);return s}var vM=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),yM=Object.prototype.hasOwnProperty;function mM(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||GE))return vM(t);var e,n,r=[];for(var i in Object(t))yM.call(t,i)&&"constructor"!=i&&r.push(i);return r}function wM(t){return null!=(e=t)&&ZE(e.length)&&!TE(e)?bM(t):mM(t);var e}var xM=FE(Object,"create");var _M=Object.prototype.hasOwnProperty;var kM=Object.prototype.hasOwnProperty;function $M(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function EM(t,e){for(var n=t.length;n--;)if(XE(t[n][0],e))return n;return-1}$M.prototype.clear=function(){this.__data__=xM?xM(null):{},this.size=0},$M.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$M.prototype.get=function(t){var e=this.__data__;if(xM){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return _M.call(e,t)?e[t]:void 0},$M.prototype.has=function(t){var e=this.__data__;return xM?void 0!==e[t]:kM.call(e,t)},$M.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=xM&&void 0===e?"__lodash_hash_undefined__":e,this};var MM=Array.prototype.splice;function SM(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}SM.prototype.clear=function(){this.__data__=[],this.size=0},SM.prototype.delete=function(t){var e=this.__data__,n=EM(e,t);return!(n<0)&&(n==e.length-1?e.pop():MM.call(e,n,1),--this.size,!0)},SM.prototype.get=function(t){var e=this.__data__,n=EM(e,t);return n<0?void 0:e[n][1]},SM.prototype.has=function(t){return EM(this.__data__,t)>-1},SM.prototype.set=function(t,e){var n=this.__data__,r=EM(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var AM=FE(nE,"Map");function CM(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function TM(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}TM.prototype.clear=function(){this.size=0,this.__data__={hash:new $M,map:new(AM||SM),string:new $M}},TM.prototype.delete=function(t){var e=CM(this,t).delete(t);return this.size-=e?1:0,e},TM.prototype.get=function(t){return CM(this,t).get(t)},TM.prototype.has=function(t){return CM(this,t).has(t)},TM.prototype.set=function(t,e){var n=CM(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function DM(t){var e=this.__data__=new SM(t);this.size=e.size}DM.prototype.clear=function(){this.__data__=new SM,this.size=0},DM.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},DM.prototype.get=function(t){return this.__data__.get(t)},DM.prototype.has=function(t){return this.__data__.has(t)},DM.prototype.set=function(t,e){var n=this.__data__;if(n instanceof SM){var r=n.__data__;if(!AM||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new TM(r)}return n.set(t,e),this.size=n.size,this};var NM=Object.prototype.propertyIsEnumerable,RM=Object.getOwnPropertySymbols,LM=RM?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}(RM(t),(function(e){return NM.call(t,e)})))}:function(){return[]};function OM(t){return function(t,e,n){var r=e(t);return gE(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,wM,LM)}var zM=FE(nE,"DataView"),PM=FE(nE,"Promise"),IM=FE(nE,"Set"),jM="[object Map]",UM="[object Promise]",BM="[object Set]",HM="[object WeakMap]",FM="[object DataView]",VM=OE(zM),qM=OE(AM),YM=OE(PM),WM=OE(IM),XM=OE(VE),KM=hE;(zM&&KM(new zM(new ArrayBuffer(1)))!=FM||AM&&KM(new AM)!=jM||PM&&KM(PM.resolve())!=UM||IM&&KM(new IM)!=BM||VE&&KM(new VE)!=HM)&&(KM=function(t){var e=hE(t),n="[object Object]"==e?t.constructor:void 0,r=n?OE(n):"";if(r)switch(r){case VM:return FM;case qM:return jM;case YM:return UM;case WM:return BM;case XM:return HM}return e});var ZM=nE.Uint8Array;function GM(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new TM;++e<n;)this.add(t[e])}function JM(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}GM.prototype.add=GM.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},GM.prototype.has=function(t){return this.__data__.has(t)};var QM=1,tS=2;function eS(t,e,n,r,i,o){var a=n&QM,s=t.length,l=e.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(t),u=o.get(e);if(c&&u)return c==e&&u==t;var d=-1,h=!0,f=n&tS?new GM:void 0;for(o.set(t,e),o.set(e,t);++d<s;){var p=t[d],g=e[d];if(r)var b=a?r(g,p,d,e,t,o):r(p,g,d,t,e,o);if(void 0!==b){if(b)continue;h=!1;break}if(f){if(!JM(e,(function(t,e){if(a=e,!f.has(a)&&(p===t||i(p,t,n,r,o)))return f.push(e);var a}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(t),o.delete(e),h}function nS(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function rS(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var iS=1,oS=2,aS="[object Boolean]",sS="[object Date]",lS="[object Error]",cS="[object Map]",uS="[object Number]",dS="[object RegExp]",hS="[object Set]",fS="[object String]",pS="[object Symbol]",gS="[object ArrayBuffer]",bS="[object DataView]",vS=rE?rE.prototype:void 0,yS=vS?vS.valueOf:void 0;var mS=1,wS=Object.prototype.hasOwnProperty;var xS=1,_S="[object Arguments]",kS="[object Array]",$S="[object Object]",ES=Object.prototype.hasOwnProperty;function MS(t,e,n,r,i,o){var a=gE(t),s=gE(e),l=a?kS:KM(t),c=s?kS:KM(e),u=(l=l==_S?$S:l)==$S,d=(c=c==_S?$S:c)==$S,h=l==c;if(h&&aM(t)){if(!aM(e))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new DM),a||pM(t)?eS(t,e,n,r,i,o):function(t,e,n,r,i,o,a){switch(n){case bS:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case gS:return!(t.byteLength!=e.byteLength||!o(new ZM(t),new ZM(e)));case aS:case sS:case uS:return XE(+t,+e);case lS:return t.name==e.name&&t.message==e.message;case dS:case fS:return t==e+"";case cS:var s=nS;case hS:var l=r&iS;if(s||(s=rS),t.size!=e.size&&!l)return!1;var c=a.get(t);if(c)return c==e;r|=oS,a.set(t,e);var u=eS(s(t),s(e),r,i,o,a);return a.delete(t),u;case pS:if(yS)return yS.call(t)==yS.call(e)}return!1}(t,e,l,n,r,i,o);if(!(n&xS)){var f=u&&ES.call(t,"__wrapped__"),p=d&&ES.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,b=p?e.value():e;return o||(o=new DM),i(g,b,n,r,o)}}return!!h&&(o||(o=new DM),function(t,e,n,r,i,o){var a=n&mS,s=OM(t),l=s.length;if(l!=OM(e).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in e:wS.call(e,u)))return!1}var d=o.get(t),h=o.get(e);if(d&&h)return d==e&&h==t;var f=!0;o.set(t,e),o.set(e,t);for(var p=a;++c<l;){var g=t[u=s[c]],b=e[u];if(r)var v=a?r(b,g,u,e,t,o):r(g,b,u,t,e,o);if(!(void 0===v?g===b||i(g,b,n,r,o):v)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var y=t.constructor,m=e.constructor;y==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof m&&m instanceof m||(f=!1)}return o.delete(t),o.delete(e),f}(t,e,n,r,i,o))}function SS(t,e,n,r,i){return t===e||(null==t||null==e||!fE(t)&&!fE(e)?t!=t&&e!=e:MS(t,e,n,r,SS,i))}var AS,CS,TS,DS,NS,RS,LS=function(){return nE.Date.now()},OS=Math.max,zS=Math.min;function PS(t,e,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function p(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=o}function g(){var t=LS();if(p(t))return b(t);s=setTimeout(g,function(t){var n=e-(t-l);return d?zS(n,o-(t-c)):n}(t))}function b(t){return s=void 0,h&&r?f(t):(r=i=void 0,a)}function v(){var t=LS(),n=p(t);if(r=arguments,i=this,l=t,n){if(void 0===s)return function(t){return c=t,s=setTimeout(g,e),u?f(t):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,e),f(l)}return void 0===s&&(s=setTimeout(g,e)),a}return e=EE(e)||0,mE(n)&&(u=!!n.leading,o=(d="maxWait"in n)?OS(EE(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?a:b(LS())},v}function IS(t,e){return SS(t,e)}class jS extends Event{constructor(t){super(t,{bubbles:!0,composed:!0})}}class US extends jS{constructor(t){super("cell-updated"),this.detail=t}}class BS extends jS{constructor(t){super("cell-blurred"),this.detail=t}}class HS extends jS{constructor(t,{data:e,name:n}){super(t),this.name=n,this.data=e}}class FS extends jS{constructor(t,e){super(t),this.plugin=e}}class VS extends HS{constructor(t){super("column-added",t)}}class qS extends HS{constructor(t){super("column-renamed",t)}}class YS extends HS{constructor(t){super("column-removed",t)}}class WS extends HS{constructor(t){super("column-hidden",t)}}class XS extends FS{constructor(t,e){super("column-plugin-activated",e),this.column=t}}class KS extends jS{constructor(t,e){super("column-plugin-deactivated"),this.column=t,this.installation=e}}class ZS extends HS{constructor(t){super("column-updated",t)}}class GS extends jS{constructor(t,e){super(t),this.rows=e}}class JS extends GS{constructor(t){super("row-added",[t])}}class QS extends GS{constructor(t){super("row-removed",t)}}class tA extends GS{constructor(t){super("row-selected",t)}}class eA extends jS{constructor(t){super("menu-selection"),this.value=t}}class nA extends jS{constructor(t){super("resize-start"),this.name=t}}class rA extends jS{constructor(t,e){super("resize-end"),this.name=t,this.delta=e}}class iA extends jS{constructor(t,e){super("resize"),this.name=t,this.delta=e}}class oA extends jS{constructor(t){super("change"),this.value=t}}class aA extends jS{constructor(t){super("menuopen"),this.close=t}}class sA extends jS{constructor(){super("toggle-check")}}!function(t){t.horizontal="horizontal",t.vertical="vertical",t.both="both"}(AS||(AS={})),function(t){t[t.created=0]="created",t[t.updated=1]="updated",t[t.deleted=2]="deleted"}(CS||(CS={})),function(t){t.REAL="REAL",t.INTEGER="INTEGER",t.INT="INT",t.TEXT="TEXT",t.JSON="JSON",t.SMALLINT="SMALLINT",t.BIGINT="BIGINT",t.DECIMAL="DECIMAL",t.NUMERIC="NUMERIC",t.DOUBLE_PRECISION="DOUBLE PRECISION",t.SERIAL="SERIAL",t.BIGSERIAL="BIGSERIAL",t.MONEY="MONEY",t.CHAR="CHAR",t.VARCHAR="VARCHAR",t.BYTEA="BYTEA",t.TIMESTAMP="TIMESTAMP",t.TIMESTAMP_WITH_TIME_ZONE="TIMESTAMP WITH TIME ZONE",t.DATE="DATE",t.DATETIME="DATETIME",t.TIME="TIME",t.TIME_WITH_TIME_ZONE="TIME WITH TIME ZONE",t.INTERVAL="INTERVAL",t.BOOLEAN="BOOLEAN",t.ENUM="ENUM",t.POINT="POINT",t.LINE="LINE",t.LSEG="LSEG",t.BOX="BOX",t.PATH="PATH",t.POLYGON="POLYGON",t.CIRCLE="CIRCLE",t.CIDR="CIDR",t.INET="INET",t.MACADDR="MACADDR",t.MACADDR8="MACADDR8",t.JSONB="JSONB",t.UUID="UUID",t.XML="XML",t.TSVECTOR="TSVECTOR",t.TSQUERY="TSQUERY",t.VARYING="CHARACTER VARYING"}(TS||(TS={})),function(t){t.onEdit="onedit",t.onStopEdit="onstopedit",t.onCancelEdit="oncanceledit",t.onSave="onsave",t.updateCell="updatecell",t.updateRow="updaterow",t.createRow="createrow",t.deleteRow="deleterow",t.getNextPage="getnextpage",t.getPreviousPage="getpreviouspage",t.configurePlugin="configure_plugin",t.installPlugin="install_plugin",t.ephemeralPluginInstall="ephemeral_install_plugin",t.uninstallPlugin="uninstall_plugin",t.sortColumn="sort_column",t.hideColumn="hide_column",t.deleteColumn="delete_column",t.createColumn="create_column",t.updateColumn="update_column",t.createIndex="create_index",t.updateIndex="update_index",t.deleteIndex="delete_index",t.pageNext="page_next",t.cellValue="cellvalue"}(DS||(DS={})),function(t){t.ForeignKey="FOREIGN KEY",t.PrimaryKey="PRIMARY KEY"}(NS||(NS={})),function(t){t.enum="enum",t.sql="sql",t.search="search"}(RS||(RS={}));var lA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let cA=class extends $${constructor(){super(),this.threshold=0,this.scroller=W$(),this.rightScrollZone=W$(),this.rightScrollHandle=W$(),this.bottomScrollZone=W$(),this.bottomScrollHandle=W$(),this.hasHoveringCursor=!1,this.axis=AS.both,this.isDragging=!1,this.verticalScrollPosition=0,this.horizontalScrollPosition=0,this.verticalScrollSize=0,this.horizontalScrollSize=0,this.horizontalScrollProgress=0,this.verticalScrollProgress=0,this.startX=0,this.startY=0,this.scrollStartX=0,this.scrollStartY=0,this._onScroll=this._onScroll?PS(this._onScroll,10).bind(this):this._onScroll.bind(this),this.updateScrollerSizeAndPosition=this.updateScrollerSizeAndPosition.bind(this),this.onWheelVerticalScroller=this.onWheelVerticalScroller.bind(this),this.onWheelHorizontalScroller=this.onWheelHorizontalScroller.bind(this),this.onHorizontalScrollerHandleMouseDown=this.onHorizontalScrollerHandleMouseDown.bind(this),this.onVerticalScrollerHandleMouseDown=this.onVerticalScrollerHandleMouseDown.bind(this)}updateScrollerSizeAndPosition(t){if([AS.both,AS.vertical].includes(this.axis)){const t=this.scroller.value?.scrollTop??0,e=this.scroller.value?.scrollHeight??0,n=(this.scroller.value?.clientHeight??0)/e;this.verticalScrollSize=1===n?0:(this.scroller.value?.clientHeight??0)*n,this.verticalScrollProgress=t/e,this.verticalScrollPosition=this.verticalScrollProgress*(this.scroller.value?.clientHeight??0)}if([AS.both,AS.horizontal].includes(this.axis)){const t=this.scroller.value?.scrollWidth??0,e=this.scroller.value?.scrollLeft??0,n=(this.scroller.value?.clientWidth??0)/t,r=1===n?0:(this.scroller.value?.clientWidth??0)*n;this.horizontalScrollProgress=e/t,this.horizontalScrollSize=r,this.horizontalScrollPosition=this.horizontalScrollProgress*(this.scroller.value?.clientWidth??0)}}_onScroll(t){const e=this.previousScrollPosition??0,n=this.scroller.value?.scrollTop??0;Math.abs(e-n)>this.threshold&&(this.previousScrollPosition=n,"function"==typeof this.onScroll&&this.onScroll())}onClickVerticalScroller(t){if(this.scroller.value){const e=(t.clientY-this.getBoundingClientRect().top)/this.scroller.value.clientHeight;this.scroller.value.scrollTop=e*(this.scroller.value.scrollHeight??0)-this.verticalScrollSize}}onClickHorizontalScroller(t){if(this.scroller.value){const e=(t.clientX-this.getBoundingClientRect().left)/this.scroller.value.clientWidth;this.scroller.value.scrollLeft=e*(this.scroller.value.scrollWidth??0)-this.horizontalScrollSize}}onWheelHorizontalScroller(t){this.scroller.value&&(this.scroller.value.scrollLeft+=t.deltaX)}onWheelVerticalScroller(t){this.scroller.value&&(this.scroller.value.scrollTop+=t.deltaY)}onHorizontalScrollerHandleMouseDown(t){t.preventDefault(),this.startX=t.pageX,this.scrollStartX=this.scroller.value?.scrollLeft??0;const e=t=>{const e=t.pageX-this.startX,n=this.scroller.value?.scrollWidth??0,r=(this.scroller.value?.clientWidth??0)/n;this.scroller.value&&(this.scroller.value.scrollLeft=this.scrollStartX+e/r)},n=t=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",e)}preventDefault(t){t.preventDefault()}onVerticalScrollerHandleMouseDown(t){t.preventDefault(),this.startY=t.pageY,this.scrollStartY=this.scroller.value?.scrollTop??0;const e=t=>{t.preventDefault();const e=t.pageY-this.startY,n=this.scroller.value?.scrollHeight??0,r=(this.scroller.value?.clientHeight??0)/n;this.scroller.value&&(this.scroller.value.scrollTop=this.scrollStartY+e/r)},n=t=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",e)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.scroller.value?.addEventListener("scroll",this.updateScrollerSizeAndPosition,{passive:!0}),this.scroller.value?.addEventListener("scroll",this._onScroll,{passive:!0}),this.scroller.value?.addEventListener("scrollend",this._onScroll,{passive:!0}),this.rightScrollZone.value?.addEventListener("wheel",this.onWheelVerticalScroller,{passive:!0}),this.bottomScrollZone.value?.addEventListener("wheel",this.onWheelHorizontalScroller,{passive:!0}),this.bottomScrollHandle.value?.addEventListener("mousedown",this.onHorizontalScrollerHandleMouseDown),this.rightScrollHandle.value?.addEventListener("mousedown",this.onVerticalScrollerHandleMouseDown),this.rightScrollZone.value?.addEventListener("contextmenu",this.preventDefault),this.bottomScrollZone.value?.addEventListener("contextmenu",this.preventDefault),this.bottomScrollHandle.value?.addEventListener("contextmenu",this.preventDefault),this.rightScrollHandle.value?.addEventListener("contextmenu",this.preventDefault)}),0)}disconnectedCallback(){super.disconnectedCallback(),this.scroller.value?.removeEventListener("scroll",this.updateScrollerSizeAndPosition),this.scroller.value?.removeEventListener("scroll",this._onScroll),this.scroller.value?.removeEventListener("scrollend",this._onScroll),this.rightScrollZone.value?.removeEventListener("wheel",this.onWheelVerticalScroller),this.bottomScrollZone.value?.removeEventListener("wheel",this.onWheelHorizontalScroller),this.bottomScrollHandle.value?.removeEventListener("mousedown",this.onHorizontalScrollerHandleMouseDown),this.rightScrollHandle.value?.removeEventListener("mousedown",this.onVerticalScrollerHandleMouseDown),this.rightScrollZone.value?.removeEventListener("contextmenu",this.preventDefault),this.bottomScrollZone.value?.removeEventListener("contextmenu",this.preventDefault),this.bottomScrollHandle.value?.removeEventListener("contextmenu",this.preventDefault),this.rightScrollHandle.value?.removeEventListener("contextmenu",this.preventDefault)}willUpdate(t){super.willUpdate(t),t.has("theme")&&this.requestUpdate("class"),t.has("hasHoveringCursor")&&this.hasHoveringCursor&&this.updateScrollerSizeAndPosition()}render(){const t="w-full rounded-md bg-neutral-200/60 dark:bg-neutral-700/50 hover:bg-neutral-300 dark:hover:bg-neutral-700 active:bg-neutral-300 dark:active:bg-neutral-700",e="z-50 absolute right-0 bottom-0 m-0.5 transition-opacity duration-300 "+(this.hasHoveringCursor?"opacity-100":"opacity-0"),n={transform:`translateY(${this.verticalScrollPosition}px)`,height:`${this.verticalScrollSize}px`},r={transform:`translateX(${this.horizontalScrollPosition}px)`,width:`${this.horizontalScrollSize}px`};let i="absolute bottom-0 left-0 right-0 top-0 bg-theme-table dark:bg-theme-table-dark";return this.axis===AS.both&&(i+=" overflow-scroll"),this.axis===AS.horizontal&&(i+=" overflow-scroll"),this.axis===AS.vertical&&(i+=" overflow-y-scroll overflow-x-hidden"),V`<!-- this comment exists to force the next line onto the next line -->
      <div
        @mouseleave=${()=>{this.pendingMouseLeave=setTimeout((()=>{this.hasHoveringCursor=!1,delete this.pendingMouseLeave}),1e3)}}
        @mouseenter=${()=>{this.hasHoveringCursor=!0,clearTimeout(this.pendingMouseLeave),delete this.pendingMouseLeave}}
        class=${m$({dark:"dark"===this.theme})}
      >
        <div class="top-0 w-1.5 ${e}" } ${Z$(this.rightScrollZone)} @click=${this.onClickVerticalScroller}>
          <div style=${Q$(n)} class=${t} ${Z$(this.rightScrollHandle)}></div>
        </div>

        <div class="left-0 ${e}" ${Z$(this.bottomScrollZone)} @click=${this.onClickHorizontalScroller}>
          <div style=${Q$(r)} class="h-1.5 ${t}" ${Z$(this.bottomScrollHandle)}></div>
        </div>

        <div class=${i} ${Z$(this.scroller)}>
          <slot></slot>
        </div>
      </div>`}};cA.styles=[...$$.styles,a`
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }

      /* Hide scrollbar for IE, Edge, and Firefox */
      :host {
        -ms-overflow-style: none; /* for Internet Explorer and Edge */
        scrollbar-width: none; /* for Firefox */
      }
    `],lA([gt()],cA.prototype,"onScroll",void 0),lA([gt({type:Number})],cA.prototype,"threshold",void 0),lA([gt()],cA.prototype,"scroller",void 0),lA([gt()],cA.prototype,"rightScrollZone",void 0),lA([gt()],cA.prototype,"rightScrollHandle",void 0),lA([gt()],cA.prototype,"bottomScrollZone",void 0),lA([gt()],cA.prototype,"bottomScrollHandle",void 0),lA([gt()],cA.prototype,"hasHoveringCursor",void 0),lA([gt()],cA.prototype,"axis",void 0),lA([bt()],cA.prototype,"isDragging",void 0),lA([bt()],cA.prototype,"verticalScrollPosition",void 0),lA([bt()],cA.prototype,"horizontalScrollPosition",void 0),lA([bt()],cA.prototype,"verticalScrollSize",void 0),lA([bt()],cA.prototype,"horizontalScrollSize",void 0),cA=lA([ht("astra-scroll-area")],cA);var uA=cA;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const dA=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},hA=v$(class extends y${constructor(t){if(super(t),t.type!==b$)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;void 0===n?n=e:void 0!==e&&(r=e);const i=[],o=[];let a=0;for(const e of t)i[a]=r?r(e,a):a,o[a]=n(e,a),a++;return{values:o,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=(t=>t._$AH)(t),{values:o,keys:a}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=a,o;const s=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=o.length-1;for(;d<=h&&f<=p;)if(null===i[d])d++;else if(null===i[h])h--;else if(s[d]===a[f])l[f]=P$(i[d],o[f]),d++,f++;else if(s[h]===a[p])l[p]=P$(i[h],o[p]),h--,p--;else if(s[d]===a[p])l[p]=P$(i[d],o[p]),z$(t,l[p+1],i[d]),d++,p--;else if(s[h]===a[f])l[f]=P$(i[h],o[f]),z$(t,i[d],i[h]),h--,f++;else if(void 0===c&&(c=dA(a,f,p),u=dA(s,d,h)),c.has(s[d]))if(c.has(s[h])){const e=u.get(a[f]),n=void 0!==e?i[e]:null;if(null===n){const e=z$(t,i[d]);P$(e,o[f]),l[f]=e}else l[f]=P$(n,o[f]),z$(t,i[d],n),i[e]=null;f++}else j$(i[h]),h--;else j$(i[d]),d++;for(;f<=p;){const e=z$(t,l[p+1]);P$(e,o[f]),l[f++]=e}for(;d<=h;){const t=i[d++];null!==t&&j$(t)}return this.ut=a,((t,e=I$)=>{t._$AH=e})(t,l),Y}});var fA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const pA=V`<svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  viewBox="0 0 256 256"
>
  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
</svg>`;let gA=class extends ut{shouldDisplayOptions(t){t?(this.optionsListElement.style.display="block",setTimeout(this.optionsListElement.focus.bind(this.optionsListElement),0)):this.optionsListElement.style.display="none",this.isOpen=t,this.ariaExpanded=t?"true":"false"}onClickOutside(t){"undefined"!=typeof document&&t.target!==this&&(this.shouldDisplayOptions(!1),document.removeEventListener("click",this.onClickOutside))}onClickInside(t){"undefined"!=typeof document&&(this.isOpen?document.removeEventListener("click",this.onClickOutside):document.addEventListener("click",this.onClickOutside),this.shouldDisplayOptions(!this.isOpen))}onKeyDown(t){const{code:e}=t;this.disabled||"Space"!==e&&"Enter"!==e||(t.preventDefault(),this.onClickInside())}renderOption(t,e){return V`<li
      class="option"
      tabindex="0"
      @click=${()=>{this.value=e}}
    >
      ${t}
    </li>`}connectedCallback(){super.connectedCallback(),this.onClickOutside=this.onClickOutside.bind(this),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeyDown)}constructor(){super(),this.ariaExpanded="false",this.placeholder="",this.value="",this.options=[],this.disabled=!1,this.isOpen=!1,this.onKeyDown=this.onKeyDown.bind(this)}render(){const t=this.value.length>0?V`<div class="flex-1">${this.value}</div>`:V`<div class="flex-1 opacity-50">${this.placeholder}</div>`;return V`
      <div id="container" aria-haspopup="listbox" tabindex="0" @click=${this.onClickInside} role="listbox">
        ${t} ${pA}

        <ul id="options-list" aria-owns="container" role="menu">
          ${hA(this.options,(({label:t})=>t),(({label:t,value:e})=>this.renderOption(t,e)))}
        </ul>
      </div>
    `}};gA.styles=[x$,wt,a`
      #container {
        display: flex;
        gap: 8px;
        position: relative;
        cursor: pointer;
        padding: 10px 12px;
        border: 1px solid var(--astra-neutral-200);
        border-radius: 6px;
        background: white;
        font-family: var(--astra-font-family);
        user-select: none;
        -webkit-user-select: none;
      }

      #container:focus-within {
        outline: 1px solid var(--astra-accent, lime);
        outline-offset: -1px; // 0px draws it _outside_ of the border, where as this covers the border
      }

      #options-list {
        display: none;
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        width: 100%;
        z-index: 3;
        background: white;
        border: 1px solid var(--astra-neutral-200);
        border-radius: 6px;
      }

      .option {
        padding: 10px 12px;
        cursor: pointer;
        color: black;
      }

      .option:hover {
        background: var(--astra-neutral-200);
      }

      li {
        list-style-type: none;
      }

      ul {
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 0px;
      }

      @media (prefers-color-scheme: dark) {
        #container {
          background: var(--astra-neutral-900);
          border: 1px solid var(--astra-neutral-800);
          color: white;
        }

        #options-list {
          background: var(--astra-neutral-900);
          border: 1px solid var(--astra-neutral-800);
          border-radius: 6px;
        }

        .option {
          color: white;
        }

        .option:hover {
          background: var(--astra-neutral-800);
        }
      }
    `],fA([gt({attribute:"aria-expanded",reflect:!0})],gA.prototype,"ariaExpanded",void 0),fA([gt({attribute:"placeholder"})],gA.prototype,"placeholder",void 0),fA([gt({attribute:"value"})],gA.prototype,"value",void 0),fA([gt({attribute:"options",type:Array})],gA.prototype,"options",void 0),fA([gt({attribute:"disabled",type:Boolean})],gA.prototype,"disabled",void 0),fA([bt()],gA.prototype,"isOpen",void 0),fA([
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function(t,e){return(e,n,r)=>((t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n))(e,n,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}("#options-list")],gA.prototype,"optionsListElement",void 0),gA=fA([ht("astra-select")],gA);var bA=gA;
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const vA=t=>t??W,yA=t=>V`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="currentColor" viewBox="0 0 256 256">
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>`;var mA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};class wA extends $${constructor(){super(...arguments),this.open=!1,this.options=[],this.activeOptions=[],this.historyStack=[],this.close=()=>this.open=!1}classMap(){return{...super.classMap(),"font-medium select-none whitespace-nowrap":!0}}get menuPositionClasses(){return""}get listElement(){if(!this.open)return null;const t={[this.menuPositionClasses]:!0,"absolute z-[2] overflow-hidden":!0,"rounded-xl p-1.5":!0,"text-sm text-neutral-900 dark:text-white font-medium":!0,"bg-white dark:bg-neutral-900":!0,"shadow-lg shadow-black/5":!0,"border border-neutral-200 dark:border-neutral-800":!0};return V`<ul class=${m$(t)} role="menu">
      ${hA(this.activeOptions,(({label:t})=>t),(({label:t,value:e,classes:n})=>V`<li
            @click=${this.onItemClick}
            data-value=${e}
            class=${_$({[n??""]:!!n,"text-ellipsis overflow-hidden":!0,"rounded-md p-2.5":!0,"text-neutral-700 dark:text-neutral-300":!n,"cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800":!0,"bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800":this.focused===e})}
            role="menuitem"
            ?selected=${this.selection===e}
          >
            ${t}
          </li>`))}
    </ul>`}onTrigger(t){this.open=!this.open,this.activeEvent=t}onItemClick(t){let e=t.target;for(;e&&!e.hasAttribute("data-value")&&e.parentElement;)e=e.parentElement;const n=e.getAttribute("data-value");if(!n)throw new Error("onItemClick didn't recover a selection value");this.onSelection(t,n)}onSelection(t,e){const n=this.options.find((t=>t.value===e));if(n&&n.options)return t.stopPropagation(),t.preventDefault(),this.historyStack.push(this.options),void(this.options=n.options);if("string"==typeof e){const t=new eA(e);this.selection=e,this.dispatchEvent(t)}}onKeyDown(t){const{code:e}=t;if("Escape"===e)this.open=!1;else if("Space"===e||"Enter"===e)t.preventDefault(),this.open=!this.open,t.didCloseMenu=!0,!this.open&&this.focused&&this.onSelection(t,this.focused);else if("ArrowDown"===e||"ArrowRight"===e)if(t.preventDefault(),this.focused){const t=this.activeOptions.findIndex((({value:t},e)=>t===this.focused));t>-1&&t<this.activeOptions.length-1?this.focused=this.activeOptions[t+1].value:t===this.activeOptions.length-1&&(this.focused=this.activeOptions[0].value)}else this.focused=this.activeOptions[0]?.value;else if("ArrowUp"===e||"ArrowLeft"===e)if(t.preventDefault(),this.focused){const t=this.activeOptions.findIndex((({value:t},e)=>t===this.focused));t>0?this.focused=this.activeOptions[t-1].value:0===t&&(this.focused=this.activeOptions[this.activeOptions.length-1].value)}else this.focused=this.activeOptions[this.activeOptions.length-1]?.value;else"Tab"===e&&this.open&&t.preventDefault()}focus(){const t=this.shadowRoot?.querySelector("#trigger");t?.focus()}willUpdate(t){super.willUpdate(t),t.has("open")&&this.open?(this.setAttribute("aria-expanded",""),this.outsideClicker=(t=>{t!==this.activeEvent&&(this.open=!1,delete this.activeEvent,this.outsideClicker&&document.removeEventListener("click",this.outsideClicker))}).bind(this),document.addEventListener("click",this.outsideClicker),this.dispatchEvent(new aA(this.close))):t.has("open")&&!this.open&&(this.removeAttribute("aria-expanded"),this.historyStack.length>0&&(this.options=this.historyStack[0],this.historyStack=[]),this.outsideClicker&&(delete this.activeEvent,document.removeEventListener("click",this.outsideClicker))),t.has("options")&&(this.activeOptions=this.options)}updated(t){super.updated(t),t.has("open")&&!this.open&&(this.focused=void 0)}render(){const t={"relative -mr-1 cursor-pointer":!0,dark:"dark"==this.theme};return V`
      <slot></slot>
      <div
        id="trigger"
        class=${m$(t)}
        aria-haspopup="menu"
        tabindex="0"
        @click=${this.onTrigger}
        @dblclick=${t=>t.stopPropagation()}
        @keydown=${this.onKeyDown}
      >
        <div class=${m$({"border border-transparent":!0,"hover:bg-neutral-100 dark:hover:bg-neutral-900 active:border-neutral-200 dark:active:border-neutral-800":!0,"p-0.5 rounded-md":!0})}>${yA(16)}</div>
        ${this.listElement}
      </div>
    `}}mA([gt({type:Boolean,attribute:"open",reflect:!0})],wA.prototype,"open",void 0),mA([gt({attribute:"selection",type:String})],wA.prototype,"selection",void 0),mA([gt({type:Array,attribute:"options"})],wA.prototype,"options",void 0),mA([bt()],wA.prototype,"activeOptions",void 0),mA([bt()],wA.prototype,"historyStack",void 0),mA([bt()],wA.prototype,"focused",void 0);var xA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let _A=class extends wA{constructor(){super(...arguments),this.value=""}get menuPositionClasses(){return"left-0 right-0 top-8"}onMenuSelection(t){const{value:e}=t;this.value=e}onKeyDown(t){if(this.open)return super.onKeyDown({...t,didCloseMenu:!1});const{code:e}=t;"Space"!==e&&"ArrowLeft"!==e&&"ArrowRight"!==e&&("ArrowDown"===e?this.open=!0:super.onKeyDown({...t,didCloseMenu:!1}))}connectedCallback(){super.connectedCallback(),this.addEventListener("menu-selection",this.onMenuSelection)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("menu-selection",this.onMenuSelection)}willUpdate(t){super.willUpdate(t),t.has("value")&&this.dispatchEvent&&this.dispatchEvent(new oA(this.value))}render(){return V`
            <slot></slot>
            <input
            id="trigger"
            @keydown=${this.onKeyDown}
            .value=${this.value}
            @input=${t=>{const{value:e}=t.target;this.value=e}}
                class="relative w-full focus:ring-1 focus:ring-neutral-950 dark:focus:ring-neutral-50 focus:outline-none px-2 py-1.5 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-600 rounded-md border border-neutral-400 dark:border-neutral-600 ${"dark"===this.theme?"dark":""}"
                tabindex="0"
                type="text"
                autocomplete="off"
                required
            >
                <div class=${m$({"absolute right-1":!0,"border border-transparent":!0,"bg-neutral-50 dark:bg-neutral-950":!0,"hover:bg-neutral-100 dark:hover:bg-neutral-900 active:border-neutral-200 dark:active:border-neutral-800":!0,"p-0.5 rounded-md":!0})} @click=${t=>{const e=this.shadowRoot?.querySelector("#trigger");e?.focus(),this.onTrigger(t)}} aria-haspopup="menu">${yA(16)}</div>
                ${this.listElement}
            </input>
        `}};xA([gt({type:String})],_A.prototype,"value",void 0),_A=xA([ht("astra-input-menu")],_A);var kA,$A=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let EA=kA=class extends $${constructor(){super(...arguments),this.columnName="",this.columnType=""}classMap(){return{"inline-block p-3.5 w-40":!0,"text-xs":!0,"bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50":!0,"rounded-lg border border-neutral-400 dark:border-neutral-600":!0,...super.classMap()}}onChange(t){const{value:e}=t.target;this.columnName=e}onSubmit(t){if(t.preventDefault(),!this.columnName)throw new Error("Missing column name");this.dispatchEvent(new VS({name:this.columnName,data:{type:this.columnType}}))}render(){return V`<form @submit=${this.onSubmit} class="flex flex-col gap-3.5 text-xs">
      <div class="flex flex-col gap-1">
        <label for="column-name" class=${m$(kA.labelClasses)}>Column Name</label>
        <input
          required
          type="text"
          name="column-name"
          id="column-name"
          class=${m$(kA.inputClasses)}
          placeholder="Enter name"
          autocomplete="off"
          .value=${this.columnName}
          @input=${this.onChange}
        />
        ${this.errorMessage}
      </div>

      <div class="flex flex-col gap-1">
        <label for="data-type" class=${m$(kA.labelClasses)}>Select Type</label>

        <astra-input-menu
          ._classMap=${kA.inputClasses}
          .options=${[{label:"Text",value:"Text"},{label:"Integer",value:"Integer"},{label:"Date and time",value:"Date and time"},{label:"Boolean",value:"Boolean"},{label:"Image",value:"Image"},{label:"etc.",value:"etc."}]}
          @change=${t=>{t.stopPropagation(),this.columnType=t.value}}
          @menu-selection=${t=>{t.stopPropagation()}}
        ></astra-input-menu>
      </div>

      <button ?disabled="${0===this.columnName.length}" class=${m$(kA.buttonClasses)} type="submit">
        Create Column
      </button>
    </form>`}};EA.labelClasses={"font-medium":!0},EA.inputClasses={"focus:ring-1 focus:ring-neutral-500 focus:outline-none ":!0,"px-2 py-1.5":!0,"bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50":!0,"placeholder-neutral-600 dark:placeholder-neutral-400":!0,"rounded-md border border-neutral-400 dark:border-neutral-600 focus:dark:border-neutral-300":!0},EA.buttonClasses={"bg-neutral-950 dark:bg-neutral-50 hover:bg-neutral-800 hover:dark:bg-neutral-200":!0,"text-neutral-50 dark:text-neutral-950":!0,"px-5 py-1.5 rounded-md":!0,"disabled:bg-neutral-400 disabled:dark:bg-neutral-600":!0},$A([bt()],EA.prototype,"columnName",void 0),$A([bt()],EA.prototype,"columnType",void 0),$A([bt()],EA.prototype,"errorMessage",void 0),EA=kA=$A([ht("astra-add-column")],EA);let MA=class extends $${classMap(){return{"p-0.5 rounded-md cursor-pointer":!0,"dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900":!0,"border border-transparent active:border-neutral-200 dark:active:border-neutral-800":!0,...super.classMap()}}render(){return V`${t=16,V` <svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
    <line
      x1="128"
      y1="40"
      x2="128"
      y2="216"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>`}`;var t}};MA=$A([ht("astra-add-column-trigger")],MA);var SA,AA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let CA=SA=class extends ut{constructor(){super(...arguments),this.checked=!1,this.theme="light",this.tabIndex=0,this._class="focus:shadow-ringlet dark:focus:shadow-ringlet-dark focus:rounded-md focus:ring-1 focus:ring-black dark:focus:ring-neutral-300 focus:outline-none"}toggleCheckbox(t){t.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new sA)}onKeyDown(t){const{code:e}=t;"Enter"!==e&&"Space"!==e||this.toggleCheckbox(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeyDown)}render(){return V`
      <div class="flex flex-none items-center cursor-pointer ${"dark"===this.theme?"dark":""}" @click="${this.toggleCheckbox}">
        ${this.checked?SA.checkedTemplate:SA.uncheckedTemplate}
        <input type="checkbox" ?checked="${this.checked}" @change="${this.toggleCheckbox}" class="hidden" />
      </div>
    `}};var TA;CA.styles=x$,CA.checkedTemplate=V`<span
    class="bg-black dark:bg-white text-white dark:text-black flex items-center justify-center w-4 h-4 p-0.5 rounded-md"
    >${TA=16,V`<svg xmlns="http://www.w3.org/2000/svg" width="${TA}" height="${TA}" fill="currentColor" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline
      points="40 144 96 200 224 72"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>`}</span
  >`,CA.uncheckedTemplate=V`<span class="w-4 h-4 border border-neutral-500 rounded-md"></span>`,AA([gt({type:Boolean})],CA.prototype,"checked",void 0),AA([gt({type:String})],CA.prototype,"theme",void 0),AA([gt({attribute:"class",type:String,reflect:!0})],CA.prototype,"_class",void 0),CA=SA=AA([ht("check-box")],CA);var DA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let NA=class extends $${classMap(){return{"table-row-group":!0,...super.classMap()}}};NA=DA([ht("astra-rowgroup")],NA);
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
class RA extends y${constructor(t){if(super(t),this.it=W,t.type!==b$)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||null==t)return this._t=void 0,this.it=t;if(t===Y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}RA.directiveName="unsafeHTML",RA.resultType=1;const LA=v$(RA);function OA(t){return t.composedPath().some((t=>{if(t instanceof HTMLElement&&(t.tagName.toLowerCase().includes("outerbase-plugin-editor")||t.tagName.toLowerCase().includes("astra-plugin-editor")))return!0}))}var zA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let PA=class extends wA{get menuPositionClasses(){return"undefined"!=typeof window?"right-0 left-0 top-9":""}render(){const t=m$({dark:"dark"===this.theme});return this.open?V`
          <span class="whitespace-nowrap text-ellipsis bg-red-50 overflow-hidden w-full focus:z-[1]"><slot></slot></span>
          <span
            id="trigger"
            aria-haspopup="menu"
            class=${t}
            @click=${this.onTrigger}
            @dblclick=${t=>t.stopPropagation()}
            @keydown=${this.onKeyDown}
          >
            ${this.listElement}</span
          >
        `:V`<slot></slot>`}};PA=zA([ht("astra-td-menu")],PA);var IA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const jA=["Int","Integer","SmallInt","BigInt","Decimal","Float","Real","Double Precision","TinyInt","MediumInt","Serial","BigSerial"].map((t=>t.toLowerCase())),UA=["Boolean","Bit"].map((t=>t.toLowerCase())),BA=["JSON","JSONB","ARRAY"].map((t=>t.toLowerCase()));class HA extends $${constructor(){super(...arguments),this._didSetInitialValue=!1,this.constrainTypes=!1,this.position={column:"",row:""},this.readonly=!1,this.isInteractive=!1,this.outerBorder=!1,this.separateCells=!1,this.blank=!1,this.isEditing=!1,this.hasMenu=!1,this.isFirstColumn=!1,this.isLastColumn=!1,this.isActive=!1}static moveFocusToNextRow(t){const e=t?.parentElement,n=Array.from(e?.children??[]).indexOf(t),r=e?e.nextElementSibling:null;if(r&&r.children.length>n){var i=r.children[n];i&&i.focus()}}static moveFocusToPreviousRow(t){const e=t?.parentElement,n=Array.from(e?.children??[]).indexOf(t),r=e?e.previousElementSibling:null;if(r&&r.children.length>n){var i=r.children[n];i&&i.focus()}}static onKeyDown(t){const e=t.currentTarget;if("Escape"===t.code&&(t.stopPropagation(),t.preventDefault(),e.isEditing=!1,e.blur()),"Enter"===t.code&&e.isEditing&&t.target instanceof HTMLElement){const n=t.target;setTimeout((()=>{e.blur(),setTimeout((()=>{HA.moveFocusToNextRow(n)}),0)}))}"Enter"===t.code&&!e.isEditing&&e.readonly&&t.preventDefault(),"Enter"!==t.code||e.isEditing||e.readonly||t.target instanceof HTMLElement&&!e.isEditing&&(t.didCloseMenu||(e.isEditing=!0))}static convertToType(t,e){if(t&&"string"==typeof e){if(jA.includes(t))return parseInt(e,10);if(BA.includes(t))return JSON.parse(e);if(UA.includes(t))return"true"===e.toLowerCase().trim();if(""===e)return null}return e}classMap(){return{"cursor-pointer":this.isInteractive&&!this.readonly,...super.classMap()}}get value(){return this._value}set value(t){const e=this._value;e!==t&&(this.constrainTypes?this._value=HA.convertToType(this.type,t)??t:this._value=t,this.requestUpdate("value",e),this._didSetInitialValue&&this.dispatchChangedEvent()),this._didSetInitialValue=!0}get originalValue(){return this._originalValue}set originalValue(t){const e=this._originalValue;this.constrainTypes?this._originalValue=HA.convertToType(this.type,t)??t:this._originalValue=t,this.requestUpdate("originalValue",e)}get dirty(){return!IS(this.value,this.originalValue)}get type(){return this._type}set type(t){this._type=t?.toLowerCase()}updated(t){if(super.updated(t),t.has("isEditing")&&this.isEditing){const t=this.shadowRoot?.querySelector("input");t&&t.select()}}willUpdate(t){super.willUpdate(t),this.constrainTypes&&t.has("type")&&(this.value=HA.convertToType(this.type,this.value)??this._value,this.originalValue=HA.convertToType(this.type,this.originalValue)??this.originalValue)}dispatchChangedEvent(){const t={position:this.position,previousValue:this.originalValue,value:this.value,label:this.label};this.dispatchEvent(new US(t))}dispatchBlurredEvent(){const t={position:this.position,previousValue:this.originalValue,value:this.value,label:this.label};this.dispatchEvent(new BS(t))}onBlur(){this.isEditing=!1,this.dispatchBlurredEvent()}onChange(t){const{value:e}=t.target;this.value=""===e?null:e}}IA([gt({attribute:"constrain-types",type:Boolean})],HA.prototype,"constrainTypes",void 0),IA([gt({attribute:"value",type:String})],HA.prototype,"value",null),IA([gt({attribute:"original-value",type:String})],HA.prototype,"originalValue",null),IA([gt({type:String})],HA.prototype,"dirty",null),IA([gt({type:Object,attribute:"position"})],HA.prototype,"position",void 0),IA([gt({type:String})],HA.prototype,"label",void 0),IA([gt({attribute:"read-only",type:Boolean})],HA.prototype,"readonly",void 0),IA([gt({type:String,attribute:"width"})],HA.prototype,"width",void 0),IA([gt({attribute:"interactive",type:Boolean})],HA.prototype,"isInteractive",void 0),IA([gt({attribute:"outer-border",type:Boolean})],HA.prototype,"outerBorder",void 0),IA([gt({type:Boolean,attribute:"separate-cells"})],HA.prototype,"separateCells",void 0),IA([gt({type:Boolean,attribute:"blank"})],HA.prototype,"blank",void 0),IA([gt({attribute:"type",type:String})],HA.prototype,"type",null),IA([gt({attribute:"is-editing",type:Boolean})],HA.prototype,"isEditing",void 0),IA([gt({attribute:"menu",type:Boolean})],HA.prototype,"hasMenu",void 0),IA([gt({attribute:"is-first-column",type:Boolean})],HA.prototype,"isFirstColumn",void 0),IA([gt({attribute:"is-last-column",type:Boolean})],HA.prototype,"isLastColumn",void 0),IA([gt({attribute:"is-active",type:Boolean})],HA.prototype,"isActive",void 0);var FA,VA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const qA=[{label:"Edit",value:"edit"},{label:"Copy",value:"copy"},{label:"Paste",value:"paste"},{label:"Clear",value:"clear"}],YA=[{label:"Copy",value:"copy"}];customElements.get("astra-td");let WA=FA=class extends HA{static onContextMenu(t){if(OA(t))return;const e=t.currentTarget.shadowRoot?.querySelector("astra-td-menu");e&&(t.preventDefault(),e.focus(),e.open=!0)}static onDragOver(t){t.preventDefault()}static onDrop(t){t.preventDefault()}static onDoubleClick(t){const e=t.currentTarget;e.isEditing||OA(t)||(e.isEditing=!0,setTimeout((()=>{const t=e.shadowRoot?.querySelector("input");t&&(t.focus(),e.readonly||t.setSelectionRange(t.value.length,t.value.length))}),0))}static copyValueToClipboard(t){return null==t?navigator.clipboard.writeText(""):"object"==typeof t?navigator.clipboard.writeText(JSON.stringify(t)):navigator.clipboard.writeText(t.toString())}static async onKeyDown(t){if(function(t){return t.composedPath().some((t=>{if(t instanceof HTMLElement&&(t.tagName.toLowerCase().includes("outerbase-plugin")||t.tagName.toLowerCase().includes("astra-plugin")))return!0}))}(t))return;const e=t.currentTarget,n=e.shadowRoot?.querySelector("astra-td-menu");if(n?.open)return;if(e.plugin&&"Enter"===t.code&&t.target instanceof HTMLElement)return void HA.moveFocusToNextRow(t.target);if(HA.onKeyDown(t),e.isEditing)return;const{code:r}=t;let i=t.target;if(!(i instanceof HTMLElement))return;if("check-box"===i.tagName.toLowerCase()){const e=i.parentElement?.parentElement?.parentElement;return void("ArrowDown"===r?(t.preventDefault(),e?.nextElementSibling?.querySelector("check-box")?.focus()):"ArrowUp"===r?(t.preventDefault(),e?.previousElementSibling?.querySelector("check-box")?.focus()):"ArrowRight"===r&&(t.preventDefault(),i.parentElement?.parentElement?.nextElementSibling?.focus()))}const o=1===t.key.length&&(a=t.key,/^[a-zA-Z0-9 \.,]+$/.test(a));var a;const s=!(t.metaKey||t.shiftKey),l=!(e.type&&BA.includes(e.type));if(o&&s&&l&&(t.preventDefault(),e.readonly||(e.isEditing=!0,e.value=t.key,setTimeout((()=>{const t=e.shadowRoot?.querySelector("input");t?.focus(),t?.setSelectionRange(t.value.length,t.value.length)}),0))),"ArrowRight"===r)return t.preventDefault(),void i?.nextElementSibling?.focus();if("ArrowLeft"!==r){if("ArrowDown"===r){if(t.preventDefault(),t.target instanceof HTMLElement&&!e.isEditing)return void HA.moveFocusToNextRow(t.target)}else if("ArrowUp"===r&&(t.preventDefault(),t.target instanceof HTMLElement&&!e.isEditing))return void HA.moveFocusToPreviousRow(t.target);return t.metaKey&&"KeyC"===r?(t.preventDefault(),FA.copyValueToClipboard(e.value)):e.readonly||"Backspace"!==r&&"Delete"!==r?void 0:(t.preventDefault(),void(e.value=null))}{t.preventDefault();const e=i?.previousElementSibling?.querySelector("check-box");e?e.focus():i?.previousElementSibling?.focus()}}onClick(t){this.isDisplayingPluginEditor||this.plugin||this.contentEditableWrapper.value?.focus()}onPaste(t){this.isDisplayingPluginEditor||this.plugin||(t.preventDefault(),this.value=t.clipboardData?.getData("text"))}classMap(){return{...super.classMap(),"table-cell relative focus:z-[1]":!0,"px-cell-padding-x py-cell-padding-y":!this.plugin&&!this.blank,"px-5":this.blank,"border-theme-table-border dark:border-theme-table-border-dark":!0,"bg-theme-table-row-selected dark:bg-theme-table-row-selected-dark":this.isActive&&(!this.dirty||this.hideDirt),"bg-theme-table-cell-dirty dark:bg-theme-table-cell-dirty-dark":this.dirty&&!this.hideDirt,"group-hover:bg-theme-table-row-hover dark:group-hover:bg-theme-table-row-hover-dark":!this.dirty||this.hideDirt,"focus:shadow-ringlet dark:focus:shadow-ringlet-dark focus:rounded-[4px] focus:ring-1 focus:ring-black dark:focus:ring-neutral-300 focus:outline-none":!this.isEditing&&this.isInteractive,"border-r":this.isInteractive||this._drawRightBorder&&this.separateCells&&this.isLastColumn&&this.outerBorder||this._drawRightBorder&&this.separateCells&&!this.isLastColumn,"first:border-l":this.separateCells&&this.outerBorder,"border-b":this.withBottomBorder}}constructor(){super(),this.pluginAttributes="",this.withBottomBorder=!1,this._drawRightBorder=!1,this.isRowSelector=!1,this.row=void 0,this.column=void 0,this.hideDirt=!1,this.isDisplayingPluginEditor=!1,this.isFirstRow=!1,this.options=qA,this.contentEditableWrapper=W$(),this.onDisplayEditor=this.onDisplayEditor.bind(this),this.onPluginChangeEvent=this.onPluginChangeEvent.bind(this),this.onMenuSelection=this.onMenuSelection.bind(this),this.onPaste=this.onPaste.bind(this),this.onClick=this.onClick.bind(this)}onDisplayEditor(t){const e=t.composedPath().some((t=>t instanceof HTMLElement&&"plugin-editor"===t.id));e||(this.isDisplayingPluginEditor=!1)}onPluginChangeEvent({detail:{action:t,value:e}}){const n=t.toLowerCase();n===DS.onEdit?this.isDisplayingPluginEditor=!0:n===DS.onStopEdit?this.isDisplayingPluginEditor=!1:n===DS.onCancelEdit?(this.isDisplayingPluginEditor=!1,delete this._interstitialValue):n===DS.updateCell&&(this._interstitialValue=e,this.value=e)}async onMenuSelection(t){switch(t.value){case"edit":return this.isEditing=!0;case"copy":return FA.copyValueToClipboard(this.value);case"paste":return this.value=await navigator.clipboard.readText(),void this.dispatchChangedEvent();case"clear":return this.value=null,void this.dispatchChangedEvent();case"reset":return this.value=this.originalValue,void this.dispatchChangedEvent()}}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",FA.onContextMenu),this.addEventListener("click",this.onClick),this.addEventListener("keydown",FA.onKeyDown),this.addEventListener("custom-change",this.onPluginChangeEvent),this.addEventListener("plugin-change",this.onPluginChangeEvent),this.isInteractive&&this.addEventListener("dblclick",FA.onDoubleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("contextmenu",FA.onContextMenu),this.removeEventListener("keydown",FA.onKeyDown),this.removeEventListener("click",this.onClick),this.removeEventListener("dblclick",FA.onDoubleClick),this.removeEventListener("plugin-change",this.onPluginChangeEvent),this.removeEventListener("custom-change",this.onPluginChangeEvent)}willUpdate(t){if(super.willUpdate(t),t.has("isDisplayingPluginEditor")){if("undefined"==typeof document)return;this.isDisplayingPluginEditor?setTimeout((()=>{document.addEventListener("click",this.onDisplayEditor)}),0):document.removeEventListener("click",this.onDisplayEditor)}!t.has("isDisplayingPluginEditor")&&this.isDisplayingPluginEditor||(t.has("isDisplayingPluginEditor")&&!this.isDisplayingPluginEditor&&this._interstitialValue&&(this.value=this._interstitialValue,delete this._interstitialValue),t.has("readonly")&&(this.readonly?this.options=YA:this.options=qA),(t.has("isFirstRow")||t.has("isFirstColumn"))&&(this.isFirstColumn&&this.isFirstRow?this.setAttribute("first-cell","true"):this.removeAttribute("first-cell")))}render(){let t,e,n=null===this.value?null:"object"==typeof this.value?JSON.stringify(this.value):this.value;if(this.plugin&&n&&"string"==typeof n&&(n=n.replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/`/g,"&#96;")),this.plugin){const{config:r,tagName:i}=this.plugin,o=LA(`<${i} cellvalue='${n}' columnName='${this.column}'  configuration='${r}' ${this.pluginAttributes}></${i}>`);t=V`${o}`,this.isDisplayingPluginEditor&&(e=LA(`<${i.replace("outerbase-plugin-cell","outerbase-plugin-editor").replace("astra-plugin-cell","astra-plugin-editor")} cellvalue='${n}' columnName='${this.column}' configuration='${r}' ${this.pluginAttributes}></${i}>`))}else{t=V`<div class=${null==n?"nbsp text-neutral-400 dark:text-neutral-600":"nbsp overflow-hidden text-ellipsis"}>${null===n?"NULL":void 0===n?"DEFAULT":"string"==typeof n?n.replace(/\n/g," "):n}</div>`}const r="dark"===this.theme?"dark":"",i=this.isEditing?V`<div class="${r}">&nbsp;<input .value=${"string"==typeof n?n:n??""} ?readonly=${this.readonly} @input=${this.onChange} class="z-[2] absolute top-0 bottom-0 right-0 left-0 bg-theme-table-cell-mutating-background dark:bg-theme-table-cell-mutating-background-dark outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 px-3 focus:rounded-[4px]" @blur=${this.onBlur}></input></div>`:V``,o=this.blank?V`<slot></slot>`:V``,a=this.dirty?[...this.options,{label:null!==this.originalValue&&"object"==typeof this.originalValue?"Revert":V`Revert to
                    <span class="pointer-events-none italic whitespace-nowrap">
                      ${null===this.originalValue?"NULL":void 0===this.originalValue?"DEFAULT":this.originalValue}
                    </span>`,value:"reset"}]:this.options,s=this.isEditing||this.blank?V``:V`<span
            ${Z$(this.contentEditableWrapper)}
            class="outline-none caret-transparent"
            contenteditable="true"
            spellcheck="false"
            autocorrect="off"
            @dragover=${FA.onDragOver}
            @drop=${FA.onDrop}
            @paste=${this.onPaste}
          >
            <astra-td-menu theme=${this.theme} .options=${a} @menu-selection=${this.onMenuSelection}>
              <span class="whitespace-pre ${"dark"===this.theme?"dark":""}">${t}</span>
              ${this.isDisplayingPluginEditor?V`<span id="plugin-editor" class="absolute top-8 caret-current cursor-auto z-10">${e}</span>`:null}
            </astra-td-menu>
          </span>`;return this.isEditing?i:this.blank?o:s}};WA.styles=[...HA.styles,a`
      .nbsp::after {
        content: '.'; /* Non-breaking space */
        visibility: hidden;
      }
    `],VA([gt({attribute:"plugin-attributes",type:String})],WA.prototype,"pluginAttributes",void 0),VA([gt({type:Boolean,attribute:"bottom-border"})],WA.prototype,"withBottomBorder",void 0),VA([gt({type:Boolean,attribute:"odd"})],WA.prototype,"isOdd",void 0),VA([gt({type:Boolean,attribute:"draw-right-border"})],WA.prototype,"_drawRightBorder",void 0),VA([gt({type:Boolean,attribute:"row-selector"})],WA.prototype,"isRowSelector",void 0),VA([gt({attribute:"row",type:Number})],WA.prototype,"row",void 0),VA([gt({attribute:"column",type:String})],WA.prototype,"column",void 0),VA([gt({attribute:"hide-dirt",type:Boolean})],WA.prototype,"hideDirt",void 0),VA([gt({attribute:"plugin",type:Object})],WA.prototype,"plugin",void 0),VA([gt({attribute:"is-displaying-plugin-editor",type:Boolean})],WA.prototype,"isDisplayingPluginEditor",void 0),VA([gt({attribute:"is-first-row",type:Boolean})],WA.prototype,"isFirstRow",void 0),VA([bt()],WA.prototype,"options",void 0),WA=FA=VA([ht("astra-td")],WA);const XA=t=>V` <svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="currentColor" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <polyline
      points="96 48 176 128 96 208"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>`;var KA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let ZA=class extends wA{classMap(){return{...super.classMap(),"flex items-center justify-between gap-2":!0}}get menuPositionClasses(){return"undefined"!=typeof window?"right-0 top-8":""}};ZA=KA([ht("astra-th-menu")],ZA);var GA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let JA=class extends $${onMouseDown(t){if(!this.column)throw new Error("`column` is unset; aborting");const e=this.column.value??this.column.originalValue??"";this.dispatchEvent(new nA(e));const n=t=>{if(!this.column)throw new Error("`column` is unset; aborting");if(!this.xPosition)throw new Error("`xPosition` is unset; aborting");if(!this.width)throw new Error("`width` is unset; aborting");this.dispatchEvent(new iA(e,t.clientX-this.xPosition))},r=t=>{if(document.removeEventListener("mouseup",r),document.removeEventListener("mousemove",n),!this.column)throw new Error("`column` is unset; aborting");this.dispatchEvent(new rA(e,this.xPosition?t.clientX-this.xPosition:0))};document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),this.xPosition=t.clientX,this.width=parseInt(window.getComputedStyle(this.column).width,10)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.onMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.onMouseDown)}willUpdate(t){super.willUpdate(t),t.has("height")}render(){return V`
      <div
        class="absolute z-[1] top-0 bottom-0 -right-[7px] w-4 flex justify-center cursor-col-resize group ${"dark"===this.theme?"dark":""}"
      >
        <div
          class="h-full ml-[1px] w-[1px] group-hover:w-1 group-active:w-1 bg-theme-table-border dark:bg-theme-table-border-dark group-hover:bg-blue-400 group-active:bg-blue-500 dark:group-hover:bg-blue-900 dark:group-active:bg-blue-800"
        ></div>
      </div>
    `}};GA([gt({type:Number,attribute:"height"})],JA.prototype,"height",void 0),GA([gt({type:Object})],JA.prototype,"column",void 0),JA=GA([ht("column-resizer")],JA);var QA=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let tC=class extends HA{constructor(){super(...arguments),this.readonly=!0,this.withResizer=!1,this.installedPlugins={},this.options=[{label:"Sort A-Z",value:"sort:alphabetical:ascending"},{label:"Sort Z-A",value:"sort:alphabetical:descending"},{label:"Hide Column",value:"hide"},{label:"Rename Column",value:"rename"},{label:"Delete Column",value:"delete",classes:"text-red-500 dark:text-red-400/90 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"}],this._previousWidth=0,this._options=[],this._pluginOptions=[]}classMap(){return{...super.classMap(),"table-cell relative whitespace-nowrap h-[38px]":!0,"cursor-pointer":!0,"border-b border-theme-table-border dark:border-theme-table-border-dark":!0,"first:border-l border-t":this.outerBorder,"px-cell-padding-x py-cell-padding-y":!0,"text-theme-table-column-content dark:text-theme-table-column-content-dark":!0,"bg-theme-table-column dark:bg-theme-table-column-dark":!this.dirty&&!this.isActive,"bg-theme-table-row-selected dark:bg-theme-table-row-selected-dark":!this.dirty&&this.isActive,"bg-theme-table-cell-dirty dark:bg-theme-table-cell-dirty-dark":this.dirty,"select-none":this.hasMenu,"border-r":!this.withResizer&&this.isLastColumn&&this.outerBorder||!this.withResizer&&this.separateCells&&!this.isLastColumn}}get value(){return this._value?.toString()}set value(t){const e=this._value;this._value=t,this.requestUpdate("value",e)}get originalValue(){return this._originalValue?.toString()}set originalValue(t){const e=this._originalValue;this._originalValue=t,this.requestUpdate("value",e)}dispatchChangedEvent(){"string"==typeof this.originalValue&&this.dispatchEvent(new qS({name:this.originalValue,data:{name:this.value}}))}onMenuSelection(t){t.stopPropagation();let e=!1;const n=this.originalValue??this.value??"",r=this.plugins?.find((({tagName:e})=>t.value===e));if(r)return this.dispatchEvent(new XS(n,{...r,columnName:n}));if("uninstall-column-plugin"===t.value){const t=this.installedPlugins[n];if(!t)throw new Error(`Attempting to uninstall a non-existent plugin on ${n}`);this.dispatchEvent(new KS(n,t))}switch(t.value){case"hide":return this.hideColumn();case"rename":return this.isEditing=!0;case"delete":return this.removeColumn();case"reset":return this.dispatchEvent(new qS({name:this.originalValue??"",data:{value:this.value}})),this.value=this.originalValue??"";default:e=!0}e&&this.dispatchEvent(new ZS({name:this.originalValue??this.value??"",data:{action:t.value}}))}onContextMenu(t){const e=this.shadowRoot?.querySelector("astra-th-menu");e&&(t.preventDefault(),e.focus(),e.open=!0)}onClick(t){const e=t.composedPath(),n=e.some((t=>"trigger"===t.getAttribute?.("id"))),r=this.originalValue??this.value,i=!e.some((t=>"column-resizer"===t.tagName?.toLowerCase()));!n&&r&&i&&this.dispatchEvent(new ZS({name:r,data:{action:"sort"}}))}removeColumn(){if(!this.originalValue)throw new Error("missing OG value");this.dispatchEvent(new YS({name:this.originalValue}))}hideColumn(){if(!this.originalValue)throw new Error("missing column name (i.e. this.originalValue)");this.dispatchEvent(new WS({name:this.originalValue}))}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this.onContextMenu),this.addEventListener("click",this.onClick)}disconnectedCallback(){super.disconnectedCallback,this.removeEventListener("contextmenu",this.onContextMenu),this.removeEventListener("click",this.onClick)}firstUpdated(t){this.width&&this.style&&(this.style.width=this.width)}willUpdate(t){super.willUpdate(t),t.has("plugins")&&(this._pluginOptions=this.plugins?.map((t=>({label:t.displayName,value:t.tagName})))??[]),t.has("width")&&this.width&&this.style&&(this.style.width=this.width),t.has("readonly")&&(this.readonly?this.options=[{label:"Sort A-Z",value:"sort:alphabetical:ascending"},{label:"Sort Z-A",value:"sort:alphabetical:descending"},{label:"Hide Column",value:"hide"},{label:"Delete Column",value:"delete",classes:"text-red-500 dark:text-red-400/90 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"}]:this.options=[{label:"Sort A-Z",value:"sort:alphabetical:ascending"},{label:"Sort Z-A",value:"sort:alphabetical:descending"},{label:"Hide Column",value:"hide"},{label:"Rename Column",value:"rename"},{label:"Delete Column",value:"delete",classes:"text-red-500 dark:text-red-400/90 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"}]),(t.has("isFirstColumn")||t.has("isFirstColumn"))&&this.isFirstColumn&&this.setAttribute("first-cell","true")}render(){const t=this.originalValue??this.value??"",e=void 0!==this.installedPlugins?.[t]&&!this.installedPlugins?.[t]?.isDefaultPlugin,n=this.dirty?[...this.options,{label:V`Revert to <span class="pointer-events-none italic whitespace-nowrap">${this.originalValue}</span>`,value:"reset"}]:[...this.options];this._pluginOptions.length>0&&n.splice(2,0,e?{label:V`<span class="">Remove Plugin</span> `,value:"uninstall-column-plugin"}:{label:V`<div class="flex items-center justify-between">Plugins ${XA(16)}</div>`,value:"plugins",options:this._pluginOptions});const r={"absolute top-0 bottom-0 right-0 left-0":!0,dark:"dark"==this.theme},i={dark:"dark"==this.theme};if(this.blank)return V`<div class=${m$(r)}><slot></slot></div> `;{const t=this.isEditing?V`<input .value=${this.value} @input=${this.onChange} @keydown=${HA.onKeyDown} class="z-[1] absolute top-0 bottom-0 right-0 left-0 bg-blue-50 dark:bg-blue-950 outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 px-cell-padding-x font-normal" @blur=${this.onBlur}></input>`:this.hasMenu?V`<astra-th-menu theme=${this.theme} .options=${n} @menu-selection=${this.onMenuSelection}
              ><span class="font-normal truncate">${this.value}</span></astra-th-menu
            >`:V`<span class="font-normal truncate">${this.value}</span>`;return this.withResizer?V`<span class=${m$(i)}
            ><slot></slot>
            ${t}
            <column-resizer
              .column=${this}
              height="${vA(this.tableHeight)}"
              theme=${this.theme}
              @resize-start=${()=>{this._previousWidth=this.width?+this.width.slice(0,-2):0}}
              @resize=${({delta:t})=>{this.width=`${this._previousWidth+t}px`}}
            ></column-resizer
          ></span>`:V`<div class=${m$(i)}><slot></slot>${t}</div>`}}};QA([gt({attribute:"table-height",type:Number})],tC.prototype,"tableHeight",void 0),QA([gt({attribute:"with-resizer",type:Boolean})],tC.prototype,"withResizer",void 0),QA([gt({attribute:"plugins",type:Array})],tC.prototype,"plugins",void 0),QA([gt({attribute:"installed-plugins",type:Object})],tC.prototype,"installedPlugins",void 0),QA([gt({attribute:"options",type:Array})],tC.prototype,"options",void 0),QA([gt({attribute:"value",type:String})],tC.prototype,"value",null),QA([gt({attribute:"original-value",type:String})],tC.prototype,"originalValue",null),QA([bt()],tC.prototype,"_previousWidth",void 0),QA([bt()],tC.prototype,"_options",void 0),QA([bt()],tC.prototype,"_pluginOptions",void 0),tC=QA([ht("astra-th")],tC);var eC=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let nC=class extends $${classMap(){return{"table-header-group sticky z-[2] top-0":!0,...super.classMap()}}};nC=eC([ht("astra-thead")],nC);var rC=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let iC=class extends $${constructor(){super(...arguments),this.selected=!1,this.isHeaderRow=!1,this.new=!1}classMap(){return{"table-row group":!0,"text-theme-table-column-text dark:text-theme-table-column-text-dark":this.isHeaderRow,"bg-theme-table-row-new dark:bg-theme-table-row-new-dark":this.new&&!this.selected,"odd:bg-theme-table-row-odd dark:odd:bg-theme-table-row-odd-dark even:bg-theme-table-row-even dark:even:bg-theme-table-row-even-dark":!this.new&&!this.isHeaderRow&&!this.selected,"bg-theme-table-row-selected dark:bg-theme-table-row-selected-dark hover:bg-theme-table-row-selected-hover dark:hover:bg-theme-row-selected-hover-dark":this.selected&&!this.isHeaderRow,...super.classMap()}}willUpdate(t){super.willUpdate(t),t.has("selected")&&void 0!==t.get("selected")&&this.dispatchEvent(new Event("on-selection"))}};rC([gt({type:Boolean,attribute:"selected"})],iC.prototype,"selected",void 0),rC([gt({type:Boolean,attribute:"header",reflect:!0})],iC.prototype,"isHeaderRow",void 0),rC([gt({type:Boolean,attribute:"new"})],iC.prototype,"new",void 0),iC=rC([ht("astra-tr")],iC);var oC=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let aC=class extends $${set data(t){this.rows=t}get data(){return this.rows}updateVisibleColumns(){this.visibleColumns=this.columns.filter((({name:t,status:e})=>e!==CS.deleted&&-1===this.hiddenColumnNames.indexOf(t)&&-1===this.deletedColumnNames.indexOf(t)))}constructor(){super(),this.selectableRows=!1,this.keyboardShortcuts=!1,this.isNonInteractive=!1,this.outerBorder=!1,this.hiddenColumnNames=[],this.deletedColumnNames=[],this.renamedColumnNames={},this.pluginAttributes="",this.readonly=!1,this.blankFill=!1,this.columnWidthOffsets={},this.addableColumns=!1,this.scrollableEl=W$(),this.rows=[],this.newRows=[],this.oldRows=[],this.existingVisibleRows=[],this.allRowsSelected=!1,this.columns=[],this.visibleColumns=[],this.selectedRowUUIDs=new Set,this.removedRowUUIDs=new Set,this.rowHeight=38,this.visibleEndIndex=0,this.visibleStartIndex=0,this.fromIdToRowMap={},this._previousWidth=0,this.updateTableView=this.updateTableView.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}addNewRow(t){const e={id:t?.id??self.crypto.randomUUID(),values:t?.values??{},originalValues:t?.originalValues??{},isNew:t?.isNew??!0,isDeleted:!1};return this.rows.push(e),this.requestUpdate("rows"),this.dispatchEvent(new JS(e)),e}addNewColumn(t){const e={is_nullable:!1,name:t,position:this.columns.length,model:"column",type:TS.TEXT,unique:!1,primaryKey:!1,autoIncrement:!1,status:CS.created};this.columns=[...this.columns,e],this.rows=this.rows.map((e=>({...e,values:{...e.values,[t]:""}}))),this.dispatchEvent(new VS({name:t})),this.updateVisibleColumns()}toggleSelectedRow(t){const e=this.selectedRowUUIDs;e.has(t)?e.delete(t):e.add(t),this.requestUpdate("selectedRowUUIDs")}clearSelection(){this.selectedRowUUIDs=new Set,this.removedRowUUIDs=new Set,this.shadowRoot?.querySelectorAll(".row-select-checkbox").forEach((t=>{t.checked=!1,t.dispatchEvent(new Event("change"))}))}resetValues(){this.rows=this.rows.filter((({isNew:t})=>!t)).map((t=>({...t,values:{...t.originalValues},isDeleted:!1})))}deleteSelectedRows(){this.selectedRowUUIDs.forEach((t=>this.removedRowUUIDs.add(t)));const t=[];this.selectedRowUUIDs.forEach((e=>{const n=this.rows.find((({id:t})=>e===t));n&&t.push(n)})),this.dispatchEvent(new QS(t)),this.selectedRowUUIDs=new Set,this.requestUpdate("removedRowUUIDs")}resetParams(){this.clearSelection(),this.hiddenColumnNames=[]}_onColumnRemoved({name:t}){this.deletedColumnNames.push(t),this.requestUpdate("columns"),this.updateVisibleColumns()}_onColumnHidden({name:t}){this.hiddenColumnNames.push(t)}_onRowSelection(){const t=[];this.selectedRowUUIDs.forEach((e=>{const n=this.fromIdToRowMap[e];n&&t.push(n)})),this.dispatchEvent(new tA(t))}widthForColumnType(t,e=0){const n=this.visibleColumns.find((({name:e})=>t===e))?.type?.toUpperCase();return[TS.BIGINT,TS.DECIMAL,TS.DECIMAL,TS.DOUBLE_PRECISION,TS.INTEGER,TS.NUMERIC,TS.REAL,TS.SMALLINT,TS.INT].includes(n)?150+e:[TS.CHAR,TS.TEXT,TS.VARCHAR,TS.VARYING].includes(n)?200+e:[TS.TIME,TS.DATE,TS.TIMESTAMP].includes(n)?110+e:[TS.TIME_WITH_TIME_ZONE,TS.DATETIME,TS.TIMESTAMP_WITH_TIME_ZONE].includes(n)||[TS.JSON,TS.JSONB].includes(n)?200+e:[TS.UUID].includes(n)?300+e:200+e}onKeyDown(t){const e=t.composedPath()[0];if(!(e instanceof HTMLElement&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName))return;const{shiftKey:n,key:r}=t;if(n){if("C"===r){const t=`Column ${Date.now()}`,e=prompt("Choose a unique name for this column",t)||t;this.addNewColumn(e)}"R"===r&&this.addNewRow(),"D"===r&&this.deleteSelectedRows()}}_onColumnResizeStart(){const t=this.shadowRoot?.getElementById("table");if(!t)throw new Error("Unexpectedly missing a table");this._previousWidth=t.clientWidth}_onColumnResized({delta:t}){const e=this.shadowRoot?.getElementById("table");if(!e)throw new Error("Unexpectedly missing a table");e.style.width=`${this._previousWidth+t}px`}_onColumnPluginDeactivated({column:t}){this.installedPlugins&&(delete this.installedPlugins[t],this.requestUpdate("installedPlugins"))}setCssVariablesForPlugin(t){"undefined"!=typeof document&&("dark"==t?(document.documentElement.style.setProperty("--ob-background-color","#0A0A0A"),document.documentElement.style.setProperty("--ob-text-color","#FFFFFF"),document.documentElement.style.setProperty("--ob-border-color","#262626"),document.documentElement.style.setProperty("--ob-null-text-color","#959497")):(document.documentElement.style.setProperty("--ob-background-color","#FAFAFA"),document.documentElement.style.setProperty("--ob-text-color","#000000"),document.documentElement.style.setProperty("--ob-border-color","#E5E5E5"),document.documentElement.style.setProperty("--ob-null-text-color","#D0D0D0")),document.documentElement.style.setProperty("--ob-font-family",'"Inter", sans-serif'),document.documentElement.style.setProperty("--ob-cell-font-family",'"Inter", sans-serif'))}renderRows(t){return V`${hA(t,(({id:t})=>t),(({id:t,values:e,originalValues:n,isNew:r},i)=>this.removedRowUUIDs.has(t)?null:V`<astra-tr .selected=${this.selectedRowUUIDs.has(t)} ?new=${r} @on-selection=${this._onRowSelection}>
              <!-- checkmark cell -->
              ${this.selectableRows?V`<astra-td
                    .position=${{row:t,column:"__selected"}}
                    .type=${null}
                    theme=${this.theme}
                    ?separate-cells=${!0}
                    ?draw-right-border=${!0}
                    ?bottom-border=${!0}
                    ?outer-border=${this.outerBorder}
                    ?blank=${!0}
                    ?is-last-row=${i===this.rows.length-1}
                    ?is-last-column=${!1}
                    ?row-selector="${!0}"
                    ?read-only=${!0}
                    ?interactive=${!0}
                    width="42px"
                  >
                    <div class="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center h-full">
                      <check-box
                        ?checked="${this.selectedRowUUIDs.has(t)}"
                        @toggle-check="${()=>this.toggleSelectedRow(t)}"
                        theme=${this.theme}
                      />
                    </div>
                  </astra-td>`:null}

              <!-- render a TableCell for each column of data in the current row -->
              ${hA(this.visibleColumns,(({name:t})=>t),(({name:o},a)=>{const s=this.plugins?.find((({pluginWorkspaceId:t})=>t===this.installedPlugins?.[o]?.plugin_workspace_id)),l=this.plugins?.find((({id:t})=>t===this.installedPlugins?.[o]?.plugin_installation_id)),c=s??l,u=this.realInstalledPlugins?.find((({plugin_workspace_id:t})=>c?.pluginWorkspaceId===t));return c&&u?.config&&(c.config=JSON.stringify(u?.config)),V`
                    <!-- TODO @johnny remove separate-cells and instead rely on css variables to suppress borders -->
                    <!-- TODO @caleb & johnny move plugins to support the new installedPlugins variable -->
                    <astra-td
                      .position=${{row:t,column:o}}
                      .value=${e[o]}
                      .originalValue=${n[o]}
                      .column=${o}
                      width="${this.widthForColumnType(o,this.columnWidthOffsets[o])}px"
                      theme=${this.theme}
                      type=${this.columnTypes?.[o]}
                      .plugin=${c}
                      plugin-attributes=${this.installedPlugins?.[o]?.supportingAttributes??""}
                      ?separate-cells=${!0}
                      ?draw-right-border=${!0}
                      ?bottom-border=${!0}
                      ?outer-border=${this.outerBorder}
                      ?is-last-row=${i===this.rows.length-1}
                      ?is-last-column=${a===this.visibleColumns.length-1}
                      ?is-first-row=${0===i}
                      ?is-first-column=${0===a}
                      ?menu=${!this.isNonInteractive&&!this.readonly}
                      ?interactive=${!this.isNonInteractive}
                      ?hide-dirt=${r}
                      ?read-only=${this.readonly}
                      ?is-active=${o===this.activeColumn}
                    >
                    </astra-td>
                  `}))}
              ${this.blankFill?V`<astra-td ?outer-border=${!1} ?read-only=${!0} ?separate-cells=${!1} ?bottom-border=${!0} ?interactive=${!1} ?menu=${!1} ?blank=${!0}></<astra-td>`:""}
            </astra-tr>`))}`}updateTableView(){const t=this.scrollableEl?.value?.scroller?.value?.scrollTop??0;t?this.updateVisibleRows(t):setTimeout((()=>this.updateVisibleRows(0)),0)}updateVisibleRows(t){const e=this.oldRows,n=Math.max(Math.floor((t??0)/this.rowHeight)-25,0);this.visibleStartIndex!==n&&(this.visibleStartIndex=n);const r=n+this.numberOfVisibleRows()+50,i=r<e.length?r:e.length;this.visibleEndIndex!==i&&(this.visibleEndIndex=i),this.visibleStartIndex===n&&this.visibleEndIndex===i&&this.existingVisibleRows.length===n-i||(this.existingVisibleRows=e.slice(n,i))}numberOfVisibleRows(){return Math.ceil((this.scrollableEl?.value?.scroller?.value?.clientHeight??0)/this.rowHeight)+1}firstUpdated(t){this.keyboardShortcuts&&document.addEventListener("keydown",this.onKeyDown);const e=this.shadowRoot?.getElementById("table");if(!e)throw new Error("Unexpectedly missing a table");this._previousWidth=e.clientWidth,e.style.width=`${this._previousWidth}px`;const n=document.createElement("astra-td");n.withBottomBorder=!0,n.outerBorder=this.outerBorder,n.isInteractive=!0,this.scrollableEl?.value?.appendChild(n),setTimeout((()=>{const t=n.offsetHeight;this.scrollableEl?.value?.removeChild(n),this.rowHeight!==t&&(this.rowHeight=t)}),0)}willUpdate(t){var e,n,r;if(super.willUpdate(t),t.has("schema")&&this.schema&&(this.columns=this.schema.columns,this.columnTypes=(e=this.columns,n="name",r="type",e.reduce(((t,e)=>({...t,[e[n]]:e[r]})),{})),this.updateVisibleColumns()),t.has("theme")&&this.setCssVariablesForPlugin(this.theme),t.has("selectedRowUUIDs")){if(0===this.rows.length)return;this.selectedRowUUIDs.size!==this.rows.length&&this.allRowsSelected?this.allRowsSelected=!1:this.selectedRowUUIDs.size!==this.rows.length||this.allRowsSelected||(this.allRowsSelected=!0)}t.has("rows")&&(this.fromIdToRowMap={},this.newRows=[],this.oldRows=[],this.rows.forEach((t=>{t.isNew&&!t.isDeleted&&this.newRows.push(t),t.isNew||t.isDeleted||this.oldRows.push(t),this.fromIdToRowMap[t.id]=t})),this.updateTableView()),t.has("hiddenColumnNames")&&this.updateVisibleColumns()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.onKeyDown)}render(){const t={"table table-fixed bg-theme-table dark:bg-theme-table-dark":!0,"text-theme-table-content dark:text-theme-table-content-dark text-sm":!0,"min-w-full":!0,relative:!0,dark:"dark"===this.theme},e=this.rows.length>0?V`<check-box
            theme=${this.theme}
            ?checked=${this.allRowsSelected}
            @click=${t=>{t.preventDefault()}}
            @toggle-check=${()=>{this.rows.length===this.selectedRowUUIDs.size?(this.selectedRowUUIDs=new Set,this.allRowsSelected=!1):(this.selectedRowUUIDs=new Set(this.rows.map((({id:t})=>t))),this.allRowsSelected=!0),this._onRowSelection()}}
          />`:"";return V`
            <astra-scroll-area ${Z$(this.scrollableEl)}
                threshold=${25*this.rowHeight*.8}
                theme=${this.theme}
                .onScroll=${this.updateTableView}
            >
                <div
                    id="table"
                    class=${m$(t)}
                    @menuopen=${t=>{this.closeLastMenu!==t.close&&(this.closeLastMenu?.(),this.closeLastMenu=t.close)}}
                >
                    <astra-thead>
                        <astra-tr header>
                            <!-- first column of (optional) checkboxes -->
                            ${this.selectableRows?V`<astra-th
                              theme=${this.theme}
                              table-height=${vA(this._height)}
                              width="42px"
                              .value=${null} .originalValue=${null}
                              ?separate-cells=${!0}
                              ?outer-border=${this.outerBorder}
                              ?is-last-column=${0===this.visibleColumns.length}
                              ?blank=${!0}
                              ?read-only=${this.readonly}
                          /><div class="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center h-full">
                          ${e}
                      </div></astra-th>`:null}
                            ${hA(this.visibleColumns,(({name:t},e)=>t),(({name:t},e)=>V`<astra-th
                                  .options=${this.columnOptions||W}
                                  .plugins="${this.plugins}"
                                  installed-plugins=${JSON.stringify(this.installedPlugins)}
                                  table-height=${vA(this._height)}
                                  theme=${this.theme}
                                  value="${this.renamedColumnNames[t]??t}"
                                  original-value="${t}"
                                  width="${this.widthForColumnType(t,this.columnWidthOffsets[t])}px"
                                  ?separate-cells=${!0}
                                  ?outer-border=${this.outerBorder}
                                  ?menu=${!this.isNonInteractive&&!this.readonly}
                                  ?with-resizer=${!this.isNonInteractive}
                                  ?is-first-column=${0===e}
                                  ?is-last-column=${e===this.visibleColumns.length-1}
                                  ?removable=${!0}
                                  ?interactive=${!this.isNonInteractive}
                                  ?is-active=${t===this.activeColumn}
                                  @column-hidden=${this._onColumnHidden}
                                  @column-removed=${this._onColumnRemoved}
                                  @column-plugin-deactivated=${this._onColumnPluginDeactivated}
                                  @resize-start=${this._onColumnResizeStart}
                                  @resize=${this._onColumnResized}
                                  ?read-only=${this.readonly}
                                >
                                </astra-th>`))}
                            ${this.blankFill?V`<astra-th ?outer-border=${this.outerBorder} ?read-only=${!0} fill .value=${null} .originalValue=${null}>
                            ${this.isNonInteractive||!this.addableColumns?"":V`<span class="flex items-center absolute top-0 left-2 bottom-0 right-0">
                                    <astra-add-column-trigger></astra-add-column-trigger>
                                  </span>`}
                            </<astra-th>`:""}
                        </astra-tr>
                    </astra-thead>

                    <astra-rowgroup>
                        <div
                            style=${Q$({height:`${Math.max(this.visibleStartIndex*this.rowHeight,0)}px`,"will-change":"transform, height"})}
                        ></div>

                        <!-- render a TableRow element for each row of data -->
                        ${this.renderRows(this.newRows)} ${this.renderRows(this.existingVisibleRows)}

                    <div
                        style=${Q$({height:`${Math.max((this.rows.length-this.visibleEndIndex)*this.rowHeight,0)}px`,"will-change":"transform, height"})}
                    ></div>
                </astra-rowgroup>
            </div>
        </div>`}};oC([gt({type:Boolean,attribute:"selectable-rows"})],aC.prototype,"selectableRows",void 0),oC([gt({attribute:"keyboard-shortcuts",type:Boolean})],aC.prototype,"keyboardShortcuts",void 0),oC([gt({attribute:"schema",type:Object})],aC.prototype,"schema",void 0),oC([gt({attribute:"data",type:Array})],aC.prototype,"data",null),oC([gt({attribute:"plugins",type:Array})],aC.prototype,"plugins",void 0),oC([gt({attribute:"installed-plugins",type:Array})],aC.prototype,"installedPlugins",void 0),oC([gt({attribute:"real-installed-plugins",type:Array})],aC.prototype,"realInstalledPlugins",void 0),oC([gt({attribute:"non-interactive",type:Boolean})],aC.prototype,"isNonInteractive",void 0),oC([gt({attribute:"auth-token",type:String})],aC.prototype,"authToken",void 0),oC([gt({attribute:"column-options",type:Array})],aC.prototype,"columnOptions",void 0),oC([gt({attribute:"outer-border",type:Boolean})],aC.prototype,"outerBorder",void 0),oC([gt({attribute:"hidden-columns",type:Array})],aC.prototype,"hiddenColumnNames",void 0),oC([gt({attribute:"deleted-columns",type:Array})],aC.prototype,"deletedColumnNames",void 0),oC([gt({attribute:"renamed-columns",type:Object})],aC.prototype,"renamedColumnNames",void 0),oC([gt({attribute:"plugin-attributes",type:String})],aC.prototype,"pluginAttributes",void 0),oC([gt({attribute:"read-only",type:Boolean})],aC.prototype,"readonly",void 0),oC([gt({attribute:"blank-fill",type:Boolean})],aC.prototype,"blankFill",void 0),oC([gt({attribute:"column-width-offsets",type:Object})],aC.prototype,"columnWidthOffsets",void 0),oC([gt({attribute:"addable-columns",type:Boolean})],aC.prototype,"addableColumns",void 0),oC([gt({attribute:"active-column",type:String})],aC.prototype,"activeColumn",void 0),oC([bt()],aC.prototype,"scrollableEl",void 0),oC([bt()],aC.prototype,"rows",void 0),oC([bt()],aC.prototype,"newRows",void 0),oC([bt()],aC.prototype,"oldRows",void 0),oC([bt()],aC.prototype,"existingVisibleRows",void 0),oC([bt()],aC.prototype,"allRowsSelected",void 0),oC([bt()],aC.prototype,"columns",void 0),oC([bt()],aC.prototype,"visibleColumns",void 0),oC([bt()],aC.prototype,"selectedRowUUIDs",void 0),oC([bt()],aC.prototype,"removedRowUUIDs",void 0),oC([bt()],aC.prototype,"columnTypes",void 0),oC([bt()],aC.prototype,"rowHeight",void 0),oC([bt()],aC.prototype,"visibleEndIndex",void 0),oC([bt()],aC.prototype,"visibleStartIndex",void 0),oC([bt()],aC.prototype,"_height",void 0),aC=oC([ht("astra-table")],aC);var sC=aC;function lC(t,e){const n={};for(const r in t)t[r]!==e[r]&&(n[r]=t[r]);return n}function cC(t,e){return new Set([...Object.keys(t),...Object.keys(e)]).forEach((n=>{n in t||(t[n]=void 0),n in e||(e[n]=void 0)})),[t,e]}var uC=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const dC="app.outerbase.com";let hC=class extends sC{constructor(){super(),this.showSidebar=!1,this.offset=0,this.limit=50,this.total=0,this.hasSelectedRows=!1,this.hasChanges=!1,this.onCellUpdated=this.onCellUpdated.bind(this),this.onMenuSelection=this.onMenuSelection.bind(this)}async fetchSchema(){if(!(this.apiKey&&this.baseId&&this.workspaceId))throw new Error("Fetching data requires an auth-token/api-key, base-id, and workspace id.");return(await(await fetch(`https://${dC}/api/v1/workspace/${this.workspaceId}/base/${this.baseId}/schema`,{headers:{"content-type":"application/json","x-auth-token":this.apiKey}})).json()).response}async fetchData(){if(!this.apiKey)throw new Error("Fetching data requires an api-key");if(!this.fields)throw new Error("Missing fields");const t=await(await fetch(`https://${dC}/api/v1/workspace/${this.workspaceId}/base/${this.baseId}/table/${this.schemaName}/${this.tableName}/rows`,{body:`{"fields":${JSON.stringify(this.fields)},"filters":[],"include_count":true,"limit":${this.limit},"offset":${this.offset},"order":[]}`,headers:{"content-type":"application/json","x-auth-token":this.apiKey},method:"POST"})).json(),e=[];return t.response.items.forEach((t=>{const n={};Object.entries(t).forEach((([t,e])=>{const r=t.toString();r&&e&&(n[r]="object"==typeof e?function(t,e=1){let n=JSON.stringify(t,null,e);const r=e>0?" ".repeat(e):"";return n=n.replace(/\n\s*/g,r),"{}"===n?"{ }":n}(e):e?.toString())})),e.push(n)})),{...t.response,items:e}}detectChanges(){this.hasChanges=this.rows.some((t=>{if(t.isDeleted||t.isNew)return!0;const[e,n]=cC(t.originalValues,t.values);return!IS(e,n)}))||this.newRows.length>0}onAddRow(t){this.addNewRow()}async refreshData(){const t=await this.fetchData();this.data=t.items.map((t=>({id:self.crypto.randomUUID(),values:{...t},originalValues:{...t},isNew:!1,isDeleted:!1}))),this.total=t.count,this.hasChanges=!1}async onRefresh(){const[t,e]=await Promise.all([this.refreshData(),this.fetchSchema()]);this.sourceSchema=e}onDeleteRows(t){const e=this.rows.filter((t=>this.selectedRowUUIDs.has(t.id)));e.forEach((t=>t.isDeleted=!0)),this.requestUpdate("rows"),this.clearSelection(),this.detectChanges()}async onSaveRows(){if(!(this.apiKey&&this.baseId&&this.workspaceId))throw new Error("Saving data requires an auth-token/api-key, base-id, and workspace id.");const t=[],e=[],n=[];this.rows.forEach((r=>{if(r.isNew&&!r.isDeleted)t.push(r);else if(r.isDeleted&&!r.isNew)e.push(r);else if(!r.isDeleted&&!r.isNew){const[t,e]=cC(r.originalValues,r.values);IS(t,e)||n.push(r)}}));const r=this.table?.constraints.find((({type:t})=>t?.toLowerCase().includes("primary")))?.column,i={create:t.map((t=>t.values)),update:n.map((t=>({where:r?{[r]:t.originalValues[r]}:t.originalValues,set:lC(t.values,t.originalValues)}))),remove:e.map((t=>r?{[r]:t.originalValues[r]}:t.originalValues))},o=await fetch(`https://${dC}/api/v1/workspace/${this.workspaceId}/base/${this.baseId}/table/${this.schemaName}/${this.tableName}/rows`,{method:"PUT",body:JSON.stringify(i),headers:{"Content-Type":"application/json","x-auth-token":this.apiKey}});200===o.status?this.onRefresh():console.error(o)}onDiscardChanges(){this.resetValues(),this.hasChanges=!1}onClickNextPage(){this.offset+this.limit>this.total||(this.offset+=this.limit)}onClickPreviousPage(){this.offset<1||(this.offset-=this.limit)}onCellUpdated(t){const e=t,{column:n,row:r}=e.detail.position,i=this.rows.find((t=>t.id===r));if(!i)throw new Error(`Failed to find row with ID = ${r}`);i.values[n]=e.detail.value,this.hasChanges=this.hasChanges||i.values[n]!==i.originalValues[n]}onCellBlurred(t){this.detectChanges()}onRowAdded(t){this.hasChanges=!0}onMenuSelection(t){"reset"===t.value&&this.detectChanges()}async updated(t){const e=t.has.bind(t);if(e("starlink")&&this.starlink){const t=new URLSearchParams(this.starlink.split("?")[1]);this.apiKey=t.get("auth_token")??void 0,this.baseId=t.get("base_id")??void 0,this.workspaceId=t.get("workspace_id")??void 0}if((e("tableName")||e("schemaName")&&this.tableName&&this.schemaName)&&(this.offset=0),(e("apiKey")||e("baseId")||e("workspaceId"))&&(this.sourceSchema=await this.fetchSchema(),this.schemaName||(this.sourceSchema.public?this.schemaName="public":this.schemaName=Object.keys(this.sourceSchema)?.[0]),!this.tableName)){const t=this.sourceSchema[this.schemaName];t&&t.length>0&&(this.tableName=t[0].name)}(e("apiKey")||e("baseId")||e("workspaceId")||e("schemaName")||e("tableName"))&&this.apiKey&&this.baseId&&this.workspaceId&&this.schemaName&&this.tableName&&this.sourceSchema&&(this.table=this.sourceSchema[this.schemaName]?.find((({name:t})=>t===this.tableName)),this.table&&(this.schema={columns:this.table.columns},this.fields=this.table.columns.map((({name:t})=>({field:t,alias:t}))))),(e("apiKey")||e("baseId")||e("workspaceId")||e("fields")||e("offset"))&&this.apiKey&&this.baseId&&this.workspaceId&&this.fields&&this.refreshData(),this.hasSelectedRows=this.selectedRowUUIDs.size>0}connectedCallback(){super.connectedCallback(),this.addEventListener("cell-updated",this.onCellUpdated),this.addEventListener("cell-blurred",this.onCellBlurred),this.addEventListener("row-added",this.onRowAdded),this.addEventListener("menu-selection",this.onMenuSelection)}disconnectedCallback(){super.disconnectedCallback,this.removeEventListener("cell-updated",this.onCellUpdated),this.removeEventListener("menu-selection",this.onMenuSelection)}onTableSelection(t,e){this.schemaName=t,this.tableName=e}renderSidebar(){const t=this.sourceSchema;if(!t)return null;const e=Object.entries(t);return V`<div
      class="w-48 flex flex-col border rounded-tl rounded-bl text-theme-table-content dark:text-theme-table-content-dark bg-theme-table dark:bg-theme-table-dark border-theme-table-border dark:border-theme-table-border-dark"
    >
      <h1
        class="text-xl font-semibold h-12 flex-none flex items-center pl-2  text-theme-sidebar-header-content border-theme-table-border dark:border-theme-table-border-dark"
      >
        Tables
      </h1>

      <div class="relative h-full">
        <astra-scroll-area>
          <ul>
            <!-- scroller content -->
            ${e.map((([t,e])=>V`<div
                    class="py-2 px-2 flex items-center gap-1 text-theme-sidebar-subheader-content dark:text-theme-sidebar-subheader-content-dark"
                  >
                    ${t} ${yA(16)}
                  </div>
                  ${e?.map((e=>V`<li
                        class="py-2 flex flex-row pl-5 pr-2 items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-600  hover:bg-theme-sidebar-li-hover dark:bg-theme-sidebar-li-hover-dark dark:text-white dark:hover:bg-neutral-800 ${m$({"text-theme-sidebar-li-active":this.tableName===e.name,"text-theme-sidebar-li-content":this.tableName!==e.name,"dark:text-theme-sidebar-li-content-dark":this.tableName!==e.name,"font-semibold":this.tableName===e.name})}"
                        @click=${()=>this.onTableSelection(t,e.name)}
                      >
                        <span class="flex-none">${(t=>V`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="currentColor" viewBox="0 0 256 256">
    <path
      d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z"
    ></path>
  </svg>`)(16)}</span>
                        <span class="truncate text-sm">${e.name}</span>
                      </li>`))}`))}
          </ul>
        </astra-scroll-area>
      </div>
    </div>`}render(){const t=super.render(),e=this.hasSelectedRows?V`<astra-button size="compact" theme="${this.theme}" @click=${this.onDeleteRows}>Delete Rows</astra-button>`:null,n=this.hasChanges?V`<astra-button size="compact" theme="${this.theme}" @click=${this.onSaveRows}>Save</astra-button>`:null,r=this.hasChanges?V`<astra-button size="compact" theme="${this.theme}" @click=${this.onDiscardChanges}>Discard</astra-button>`:null,i={"w-8":!0,"h-8":!0,"rounded-md":!0,flex:!0,"items-center":!0,"justify-center":!0},o=this.offset>0,a=this.offset+this.limit<this.total,s={...i,"cursor-pointer":o,"bg-neutral-300/30":o,"dark:bg-neutral-500/30":o,"cursor-not-allowed":!o,"opacity-60":!o,"bg-neutral-500/10":!o,"dark:bg-neutral-900":!o},l={...i,"cursor-pointer":a,"bg-neutral-300/30":a,"dark:bg-neutral-500/30":a,"cursor-not-allowed":!a,"opacity-60":!a,"bg-neutral-500/10":!a,"dark:bg-neutral-900":!a},c=this.showSidebar?this.renderSidebar():null,u=V`
      <div class="relative flex flex-col flex-1 text-theme-secondary-content dark:text-theme-secondary-content-dark">
        <!-- header; action bar -->
        <div
          id="action-bar"
          class="h-12 font-medium bg-theme-table dark:bg-theme-table-dark items-center justify-end flex gap-2.5 text-sm p-2 rounded-tr border-t border-b border-r border-theme-table-border dark:border-theme-table-border-dark"
        >
          <div class="flex items-center justify-center flex-auto font-bold text-xl">${this.tableName}</div>
          ${r} ${e} ${n}
          <astra-button size="compact" theme="${this.theme}" @click=${this.onAddRow}>Add Row</astra-button>
          <astra-button size="compact" theme="${this.theme}" @click=${this.onRefresh}>${(t=>q`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="currentColor" viewBox="0 0 256 256">
    <path
      d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"
    ></path>
  </svg>`)(16)}</astra-button>
        </div>

        <!-- data -->
        <div class="relative flex-1 border-r border-theme-table-border dark:border-theme-table-border-dark">${t}</div>

        <!-- footer; pagination -->
        <div
          id="footer"
          class="h-12 font-medium bg-theme-table dark:bg-theme-table-dark items-center justify-end flex gap-2.5 text-sm py-2 rounded-br border-t border-b border-r border-theme-table-border dark:border-theme-table-border-dark p-2"
        >
          Viewing ${Math.min(this.offset+1,this.total)}-${Math.min(this.offset+this.limit,this.total)} of ${this.total}
          <div class="select-none flex items-center">
            <span class=${m$(s)} @click=${this.onClickPreviousPage}>${(t=>V`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="currentColor" viewBox="0 0 256 256">
    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
  </svg>`)(16)}</span>
            <span class="w-8 text-center">${this.total?this.offset/this.limit+1:1}</span>
            <span class=${m$(l)} @click=${this.onClickNextPage}>${XA(16)}</span>
          </div>
        </div>
      </div>
    `;return V`
      <div
        class="flex flex-row h-full ${m$({dark:"dark"===this.theme,"bg-black":"dark"===this.theme})}"
      >
        ${c} ${u}
      </div>
    `}};hC.styles=[...sC.styles,a`
      :host {
        height: 100%;
      }
    `],uC([gt({attribute:"starlink",type:String})],hC.prototype,"starlink",void 0),uC([gt({attribute:"api-key",type:String})],hC.prototype,"apiKey",void 0),uC([gt({attribute:"workspace-id",type:String})],hC.prototype,"workspaceId",void 0),uC([gt({attribute:"base-id",type:String})],hC.prototype,"baseId",void 0),uC([gt({attribute:"schema-name",type:String})],hC.prototype,"schemaName",void 0),uC([gt({attribute:"table-name",type:String})],hC.prototype,"tableName",void 0),uC([gt({attribute:"side-bar",type:Boolean})],hC.prototype,"showSidebar",void 0),uC([gt({type:Number})],hC.prototype,"offset",void 0),uC([gt({type:Number})],hC.prototype,"limit",void 0),uC([gt({type:Number})],hC.prototype,"total",void 0),uC([bt()],hC.prototype,"fields",void 0),uC([bt()],hC.prototype,"sourceSchema",void 0),uC([bt()],hC.prototype,"table",void 0),uC([bt()],hC.prototype,"hasSelectedRows",void 0),uC([bt()],hC.prototype,"hasChanges",void 0),hC=uC([ht("outerbase-table")],hC);var fC,pC=hC,gC=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};!function(t){t.unspecified="",t.label="label",t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4"}(fC||(fC={}));let bC=class extends ut{constructor(){super(...arguments),this.variant=fC.unspecified}render(){return V`<label class=${this.variant}><slot></slot></label>`}};bC.styles=[wt,a`
      label {
        display: block;
        font-weight: 500;
        font-family: var(--astra-font-family);
        color: black;
        opacity: 0.8;
        cursor: text;
      }

      .label {
        font-weight: 700;
        font-size: 12px;
        font-family: var(--astra-font-family);
        opacity: 0.6;
      }

      .h1 {
        opacity: 1;
        font-size: 36px;
        line-height: 40px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .h2 {
        opacity: 1;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .h3 {
        opacity: 1;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .h4 {
        opacity: 1;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      @media (prefers-color-scheme: dark) {
        label {
          color: white;
        }
      }
    `],gC([gt({attribute:"variant"})],bC.prototype,"variant",void 0),bC=gC([ht("astra-text")],bC);var vC=bC;return t.AstraButton=$t,t.AstraCalendar=Ct,t.AstraCard=Nt,t.AstraInput=R$,t.AstraScrollArea=uA,t.AstraSelect=bA,t.AstraTable=sC,t.AstraText=vC,t.Chart=T$,t.OuterbaseTable=pC,t}({});
