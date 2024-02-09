import{q as _e,r as I,a as ae,i as Ve,a0 as Ae,w as K,o as oe,g as J,c as b,_ as Fe,a1 as pe,a2 as Be,s as xe,n as W,j as Ee,$ as $e,h as x,O as X,T as Oe,a3 as Te,b as Ie,P as fe,N as Pe}from"./index.c2dbb6bd.js";import{Q as ce,h as G,c as de,a as je}from"./vm.e3ccacda.js";import{a as Le,u as De,b as Ke}from"./QBtn.8bb4b6b6.js";import{u as Ce,a as we}from"./format.f9684010.js";let re,ee=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),ve=4096;function qe(){(re===void 0||ee+16>ve)&&(ee=0,re=ze(ve));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function Me(e,t){return e===void 0?t===!0?`f_${qe()}`:void 0:e}function Ne(e,t=!0){if(_e.value===!0){const u=I(e);return t===!0&&e===void 0&&ae(()=>{u.value=`f_${qe()}`}),u}return I(Me(e,t))}function Ue({validate:e,resetValidation:t,requiresQForm:u}){const i=Ve(Ae,!1);if(i!==!1){const{props:f,proxy:d}=J();Object.assign(d,{validate:e,resetValidation:t}),K(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>me.test(e)||te.test(e),hexaOrRgbaColor:e=>ge.test(e)||ne.test(e),anyColor:e=>he.test(e)||te.test(e)||ne.test(e)},Ze=[!0,!1,"ondemand"],He={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ze.includes(e)}};function Qe(e,t){const{props:u,proxy:i}=J(),f=I(!1),d=I(null),v=I(!1);Ue({validate:j,resetValidation:P});let p=0,F;const w=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),k=b(()=>u.disable!==!0&&w.value===!0&&t.value===!1),c=b(()=>u.error===!0||f.value===!0),H=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);K(()=>u.modelValue,()=>{v.value=!0,k.value===!0&&u.lazyRules===!1&&O()});function _(){u.lazyRules!=="ondemand"&&k.value===!0&&v.value===!0&&O()}K(()=>u.reactiveRules,z=>{z===!0?F===void 0&&(F=K(()=>u.rules,_,{immediate:!0,deep:!0})):F!==void 0&&(F(),F=void 0)},{immediate:!0}),K(()=>u.lazyRules,_),K(e,z=>{z===!0?v.value=!0:k.value===!0&&u.lazyRules!=="ondemand"&&O()});function P(){p++,t.value=!1,v.value=!1,f.value=!1,d.value=null,O.cancel()}function j(z=u.modelValue){if(u.disable===!0||w.value===!1)return!0;const V=++p,q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(R,M)=>{R===!0&&q(),f.value=R,d.value=M||null,t.value=!1},N=[];for(let R=0;R<u.rules.length;R++){const M=u.rules[R];let $;if(typeof M=="function"?$=M(z,ue):typeof M=="string"&&ue[M]!==void 0&&($=ue[M](z)),$===!1||typeof $=="string")return L(!0,$),!1;$!==!0&&$!==void 0&&N.push($)}return N.length===0?(L(!1),!0):(t.value=!0,Promise.all(N).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return V===p&&L(!1),!0;const M=R.find($=>$===!1||typeof $=="string");return V===p&&L(M!==void 0,M),M===void 0},R=>(V===p&&(console.error(R),L(!0)),!1)))}const O=Fe(j,0);return oe(()=>{F!==void 0&&F(),O.cancel()}),Object.assign(i,{resetValidation:P,validate:j}),pe(i,"hasError",()=>c.value),{isDirtyModel:v,hasRules:w,hasError:c,errorMessage:H,validate:j,resetValidation:P}}const be=/^on[A-Z]/;function We(e,t){const u={listeners:I({}),attributes:I({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&be.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)be.test(v)===!0&&(d[v]=t.props[v]);u.attributes.value=f,u.listeners.value=d}return Be(i),i(),u}let ie=[],Ye=[];function Se(e){Ye.length===0?e():ie.push(e)}function Je(e){ie=ie.filter(t=>t!==e)}function se(e){return e!=null&&(""+e).length!==0}const Xe={...Ce,...He,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ge=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function et({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:f,vnode:d}=J(),v=we(u,f.$q),p=Ne(u.for,e);return{requiredForAttr:e,tag:t===!0?b(()=>u.tag):{value:"label"},isDark:v,editable:b(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:We(i,d),targetUid:p,rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function tt(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=J(),{$q:v}=d;let p=null;e.hasValue===void 0&&(e.hasValue=b(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:a,focus:M}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:F,hasRules:w,hasError:k,errorMessage:c,resetValidation:H}=Qe(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),P=b(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),j=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=b(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&P.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=b(()=>t.labelSlot===!0||t.label!==void 0),q=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),L=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=b(()=>{const n={};return e.targetUid.value&&(n.for=e.targetUid.value),t.disable===!0&&(n["aria-disabled"]="true"),n});K(()=>t.for,n=>{e.targetUid.value=Me(n,e.requiredForAttr)});function R(){const n=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(n===null||n.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==n&&g.focus({preventScroll:!0}))}function M(){Se(R)}function $(){Je(R);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function o(n){p!==null&&(clearTimeout(p),p=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function a(n,g){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),g!==void 0&&g())})}function s(n){xe(n),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),W(()=>{const g=F.value;H(),F.value=g})}function r(){const n=[];return i.prepend!==void 0&&n.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),n.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),k.value===!0&&t.noErrorIcon===!1&&n.push(S("error",[x(ce,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(S("inner-loading-append",i.loading!==void 0?i.loading():[x(Le,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(S("inner-clearable-append",[x(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&n.push(S("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function h(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),V.value===!0&&n.push(x("div",{class:q.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(G(i.default))}function m(){let n,g;k.value===!0?c.value!==null?(n=[x("div",{role:"alert"},c.value)],g=`q--slot-error-${c.value}`):(n=G(i.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[x("div",t.hint)],g=`q--slot-hint-${t.hint}`):(n=G(i.hint),g="q--slot-hint"));const U=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&U===!1&&n===void 0)return;const C=x("div",{key:g,class:"q-field__messages col"},n);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?C:x(Oe,{name:"q-transition--field-message"},()=>C),U===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function S(n,g){return g===null?null:x("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let y=!1;return Ee(()=>{y=!0}),$e(()=>{y===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ae(()=>{d.focus()}),oe(()=>{p!==null&&clearTimeout(p)}),Object.assign(d,{focus:M,blur:$}),function(){const g=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return x(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...g},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},r()),P.value===!0?m():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const ye={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Re=Object.keys(le);Re.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const nt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Re.join("")+"])|(.)","g"),ke=/[.*+?^${}()|[\]\\]/g,B=String.fromCharCode(1),lt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function at(e,t,u,i){let f,d,v,p,F,w;const k=I(null),c=I(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}K(()=>e.type+e.autogrow,j),K(()=>e.mask,o=>{if(o!==void 0)O(c.value,!0);else{const a=M(c.value);j(),e.modelValue!==a&&t("update:modelValue",a)}}),K(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&O(c.value,!0)}),K(()=>e.unmaskedValue,()=>{k.value===!0&&O(c.value)});function _(){if(j(),k.value===!0){const o=N(M(e.modelValue));return e.fillMask!==!1?$(o):o}return e.modelValue}function P(o){if(o<f.length)return f.slice(-o);let a="",s=f;const r=s.indexOf(B);if(r>-1){for(let h=o-s.length;h>0;h--)a+=B;s=s.slice(0,r)+a+s.slice(r)}return s}function j(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&H(),k.value===!1){p=void 0,f="",d="";return}const o=ye[e.mask]===void 0?e.mask:ye[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(ke,"\\$&"),r=[],h=[],m=[];let S=e.reverseFillMask===!0,y="",n="";o.replace(nt,(E,l,A,Q,Z)=>{if(Q!==void 0){const D=le[Q];m.push(D),n=D.negate,S===!0&&(h.push("(?:"+n+"+)?("+D.pattern+"+)?(?:"+n+"+)?("+D.pattern+"+)?"),S=!1),h.push("(?:"+n+"+)?("+D.pattern+")?")}else if(A!==void 0)y="\\"+(A==="\\"?"":A),m.push(A),r.push("([^"+y+"]+)?"+y+"?");else{const D=l!==void 0?l:Z;y=D==="\\"?"\\\\\\\\":D.replace(ke,"\\\\$&"),m.push(D),r.push("([^"+y+"]+)?"+y+"?")}});const g=new RegExp("^"+r.join("")+"("+(y===""?".":"[^"+y+"]")+"+)?"+(y===""?"":"["+y+"]*")+"$"),U=h.length-1,C=h.map((E,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+E):l===U?new RegExp("^"+E+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+E));v=m,p=E=>{const l=g.exec(e.reverseFillMask===!0?E:E.slice(0,m.length+1));l!==null&&(E=l.slice(1).join(""));const A=[],Q=C.length;for(let Z=0,D=E;Z<Q;Z++){const Y=C[Z].exec(D);if(Y===null)break;D=D.slice(Y.shift().length),A.push(...Y)}return A.length!==0?A.join(""):E},f=m.map(E=>typeof E=="string"?E:B).join(""),d=f.split(B).join(a)}function O(o,a,s){const r=i.value,h=r.selectionEnd,m=r.value.length-h,S=M(o);a===!0&&j();const y=N(S),n=e.fillMask!==!1?$(y):y,g=c.value!==n;r.value!==n&&(r.value=n),g===!0&&(c.value=n),document.activeElement===r&&W(()=>{if(n===d){const C=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(C,C,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const C=r.selectionEnd;let E=h-1;for(let l=F;l<=E&&l<C;l++)f[l]!==B&&E++;V.right(r,E);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const C=e.reverseFillMask===!0?h===0?n.length>y.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(y.length,m)+1))+1:h;r.setSelectionRange(C,C,"forward");return}if(e.reverseFillMask===!0)if(g===!0){const C=Math.max(0,n.length-(n===d?0:Math.min(y.length,m+1)));C===1&&h===1?r.setSelectionRange(C,C,"forward"):V.rightReverse(r,C)}else{const C=n.length-m;r.setSelectionRange(C,C,"backward")}else if(g===!0){const C=Math.max(0,f.indexOf(B),Math.min(y.length,h)-1);V.right(r,C)}else{const C=h-1;V.right(r,C)}});const U=e.unmaskedValue===!0?M(n):n;String(e.modelValue)!==U&&(e.modelValue!==null||U!=="")&&u(U,!0)}function z(o,a,s){const r=N(M(o.value));a=Math.max(0,f.indexOf(B),Math.min(r.length,a)),F=a,o.setSelectionRange(a,s,"forward")}const V={left(o,a){const s=f.slice(a-1).indexOf(B)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(f[r]===B){a=r,s===!0&&a++;break}if(r<0&&f[a]!==void 0&&f[a]!==B)return V.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const s=o.value.length;let r=Math.min(s,a+1);for(;r<=s;r++)if(f[r]===B){a=r;break}else f[r-1]===B&&(a=r);if(r>s&&f[a-1]!==void 0&&f[a-1]!==B)return V.left(o,s);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const s=P(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(s[r-1]===B){a=r;break}else if(s[r]===B&&(a=r,r===0))break;if(r<0&&s[a]!==void 0&&s[a]!==B)return V.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const s=o.value.length,r=P(s),h=r.slice(0,a+1).indexOf(B)===-1;let m=Math.min(s,a+1);for(;m<=s;m++)if(r[m-1]===B){a=m,a>0&&h===!0&&a--;break}if(m>s&&r[a-1]!==void 0&&r[a-1]!==B)return V.leftReverse(o,s);o.setSelectionRange(a,a,"forward")}};function q(o){t("click",o),w=void 0}function L(o){if(t("keydown",o),Te(o)===!0||o.altKey===!0)return;const a=i.value,s=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(w=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&w===void 0&&(w=a.selectionDirection==="forward"?s:r);const h=V[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),h(a,w===s?r:s),o.shiftKey){const m=a.selectionStart;a.setSelectionRange(Math.min(w,m),Math.max(w,m),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(V.left(a,s),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(V.rightReverse(a,r),a.setSelectionRange(s,a.selectionEnd,"forward"))}function N(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return R(o);const a=v;let s=0,r="";for(let h=0;h<a.length;h++){const m=o[s],S=a[h];if(typeof S=="string")r+=S,m===S&&s++;else if(m!==void 0&&S.regex.test(m))r+=S.transform!==void 0?S.transform(m):m,s++;else return r}return r}function R(o){const a=v,s=f.indexOf(B);let r=o.length-1,h="";for(let m=a.length-1;m>=0&&r>-1;m--){const S=a[m];let y=o[r];if(typeof S=="string")h=S+h,y===S&&r--;else if(y!==void 0&&S.regex.test(y))do h=(S.transform!==void 0?S.transform(y):y)+h,r--,y=o[r];while(s===m&&y!==void 0&&S.regex.test(y));else return h}return h}function M(o){return typeof o!="string"||p===void 0?typeof o=="number"?p(""+o):o:p(o)}function $(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:c,hasMask:k,moveCursorForPaste:z,updateMaskValue:O,onMaskedKeydown:L,onMaskedClick:q}}const ot={name:String};function rt(e){return b(()=>e.name||e.for)}function ut(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}const it=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,st=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,dt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ft=/[a-z0-9_ -]$/i;function ct(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ie.is.firefox===!0?ft.test(u.data)===!1:it.test(u.data)===!0||st.test(u.data)===!0||dt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var bt=de({name:"QInput",inheritAttrs:!1,props:{...Xe,...lt,...ot,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ge,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=J(),{$q:f}=i,d={};let v=NaN,p,F,w=null,k;const c=I(null),H=rt(e),{innerValue:_,hasMask:P,moveCursorForPaste:j,updateMaskValue:O,onMaskedKeydown:z,onMaskedClick:V}=at(e,t,y,c),q=ut(e,!0),L=b(()=>se(_.value)),N=ct(m),R=et(),M=b(()=>e.type==="textarea"||e.autogrow===!0),$=b(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),o=b(()=>{const l={...R.splitAttrs.listeners.value,onInput:m,onPaste:h,onChange:g,onBlur:U,onFocus:fe};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=N,P.value===!0&&(l.onKeydown=z,l.onClick=V),e.autogrow===!0&&(l.onAnimationend=S),l}),a=b(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});K(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),K(()=>e.modelValue,l=>{if(P.value===!0){if(F===!0&&(F=!1,String(l)===v))return;O(l)}else _.value!==l&&(_.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete d.value));e.autogrow===!0&&W(n)}),K(()=>e.autogrow,l=>{l===!0?W(n):c.value!==null&&u.rows>0&&(c.value.style.height="auto")}),K(()=>e.dense,()=>{e.autogrow===!0&&W(n)});function s(){Se(()=>{const l=document.activeElement;c.value!==null&&c.value!==l&&(l===null||l.id!==R.targetUid.value)&&c.value.focus({preventScroll:!0})})}function r(){c.value!==null&&c.value.select()}function h(l){if(P.value===!0&&e.reverseFillMask!==!0){const A=l.target;j(A,A.selectionStart,A.selectionEnd)}t("paste",l)}function m(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const A=l.target.value;if(l.target.qComposing===!0){d.value=A;return}if(P.value===!0)O(A,!1,l.inputType);else if(y(A),$.value===!0&&l.target===document.activeElement){const{selectionStart:Q,selectionEnd:Z}=l.target;Q!==void 0&&Z!==void 0&&W(()=>{l.target===document.activeElement&&A.indexOf(l.target.value)===0&&l.target.setSelectionRange(Q,Z)})}e.autogrow===!0&&n()}function S(l){t("animationend",l),n()}function y(l,A){k=()=>{w=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,A===!0&&(F=!0),t("update:modelValue",l),W(()=>{v===l&&(v=NaN)})),k=void 0},e.type==="number"&&(p=!0,d.value=l),e.debounce!==void 0?(w!==null&&clearTimeout(w),d.value=l,w=setTimeout(k,e.debounce)):k()}function n(){requestAnimationFrame(()=>{const l=c.value;if(l!==null){const A=l.parentNode.style,{scrollTop:Q}=l,{overflowY:Z,maxHeight:D}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=Z!==void 0&&Z!=="scroll";Y===!0&&(l.style.overflowY="hidden"),A.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt(D,10)<l.scrollHeight?"auto":"hidden"),A.marginBottom="",l.scrollTop=Q}})}function g(l){N(l),w!==null&&(clearTimeout(w),w=null),k!==void 0&&k(),t("change",l.target.value)}function U(l){l!==void 0&&fe(l),w!==null&&(clearTimeout(w),w=null),k!==void 0&&k(),p=!1,F=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=_.value!==void 0?_.value:"")})}function C(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}oe(()=>{U()}),ae(()=>{e.autogrow===!0&&n()}),Object.assign(R,{innerValue:_,fieldClass:b(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:c,emitValue:y,hasValue:L,floatingLabel:b(()=>L.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||se(e.displayValue)),getControl:()=>x(M.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:C()}:q.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},C()),x("span",e.shadowText)])});const E=tt(R);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>c.value}),pe(i,"nativeEl",()=>c.value),E}}),yt=de({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const u=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>x("div",{class:u.value},G(t.default))}}),kt=de({name:"QItem",props:{...Ce,...De,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:u}){const{proxy:{$q:i}}=J(),f=we(e,i),{hasLink:d,linkAttrs:v,linkClass:p,linkTag:F,navigateOnClick:w}=Ke(),k=I(null),c=I(null),H=b(()=>e.clickable===!0||d.value===!0||e.tag==="label"),_=b(()=>e.disable!==!0&&H.value===!0),P=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(f.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?p.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(_.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),j=b(()=>{if(e.insetLevel===void 0)return null;const q=i.lang.rtl===!0?"Right":"Left";return{["padding"+q]:16+e.insetLevel*56+"px"}});function O(q){_.value===!0&&(c.value!==null&&(q.qKeyEvent!==!0&&document.activeElement===k.value?c.value.focus():document.activeElement===c.value&&k.value.focus()),w(q))}function z(q){if(_.value===!0&&Pe(q,[13,32])===!0){xe(q),q.qKeyEvent=!0;const L=new MouseEvent("click",q);L.qKeyEvent=!0,k.value.dispatchEvent(L)}u("keyup",q)}function V(){const q=je(t.default,[]);return _.value===!0&&q.unshift(x("div",{class:"q-focus-helper",tabindex:-1,ref:c})),q}return()=>{const q={ref:k,class:P.value,style:j.value,role:"listitem",onClick:O,onKeyup:z};return _.value===!0?(q.tabindex=e.tabindex||"0",Object.assign(q,v.value)):H.value===!0&&(q["aria-disabled"]="true"),x(F.value,q,V())}}});export{yt as Q,kt as a,bt as b,ot as c,Ge as d,et as e,rt as f,ut as g,tt as h,se as i,Xe as u};