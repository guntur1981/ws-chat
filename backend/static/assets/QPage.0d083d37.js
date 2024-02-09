import{c as C,f as Q,g as B,d as R,Q as f,m as $,R as P,h as p}from"./vm.e3ccacda.js";import{u as z,a as F}from"./format.f9684010.js";import{c as l,h as o,s as I,g as S,i as y,e as c,l as w,m as D}from"./index.c2dbb6bd.js";const K={xs:8,sm:10,md:14,lg:20,xl:24};var A=C({name:"QChip",props:{...z,...Q,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:n}){const{proxy:{$q:a}}=S(),g=F(e,a),s=B(e,K),u=l(()=>e.selected===!0||e.icon!==void 0),i=l(()=>e.selected===!0?e.iconSelected||a.iconSet.chip.selected:e.icon),d=l(()=>e.iconRemove||a.iconSet.chip.remove),h=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),k=l(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(h.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(g.value===!0?" q-chip--dark q-dark":"")}),m=l(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},v={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||a.lang.label.remove};return{chip:t,remove:v}});function x(t){t.keyCode===13&&b(t)}function b(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function q(t){(t.keyCode===void 0||t.keyCode===13)&&(I(t),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function _(){const t=[];h.value===!0&&t.push(o("div",{class:"q-focus-helper"})),u.value===!0&&t.push(o(f,{class:"q-chip__icon q-chip__icon--left",name:i.value}));const v=e.label!==void 0?[o("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(o("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},$(r.default,v))),e.iconRight&&t.push(o(f,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(o(f,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:d.value,...m.value.remove,onClick:q,onKeyup:q})),t}return()=>{if(e.modelValue===!1)return;const t={class:k.value,style:s.value};return h.value===!0&&Object.assign(t,m.value.chip,{onClick:b,onKeyup:x}),R("div",t,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[P,e.ripple]])}}}),H=C({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:n}}=S(),a=y(w,c);if(a===c)return console.error("QPage needs to be a deep child of QLayout"),c;if(y(D,c)===c)return console.error("QPage needs to be child of QPageContainer"),c;const s=l(()=>{const i=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const d=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(i,d)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-i+"px":n.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":n.screen.height-i+"px"}}),u=l(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>o("main",{class:u.value,style:s.value},p(r.default))}});export{H as Q,A as a};
