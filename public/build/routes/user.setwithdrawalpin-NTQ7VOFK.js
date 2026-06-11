import{a as v}from"/build/_shared/chunk-ZYO3LTNC.js";import{a as A}from"/build/_shared/chunk-QX2A73K4.js";import{a as I}from"/build/_shared/chunk-ZYWVDPL2.js";import{a as O}from"/build/_shared/chunk-CXJHSFWB.js";import{a as H}from"/build/_shared/chunk-PGOH7JLP.js";import{m as S,n as g,r as w,t as P}from"/build/_shared/chunk-5BPS7M3R.js";import{a as L,b as k}from"/build/_shared/chunk-GDLBX7ER.js";import{c as l}from"/build/_shared/chunk-Q3IECNXJ.js";var T=l(H(),1);var c=l(L(),1);var V=l(O(),1);var p=l(L());var n=(...t)=>t.filter((e,u,o)=>Boolean(e)&&e.trim()!==""&&o.indexOf(e)===u).join(" ").trim();var B=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var F=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,u,o)=>o?o.toUpperCase():u.toLowerCase());var x=t=>{let e=F(t);return e.charAt(0).toUpperCase()+e.slice(1)};var r=l(L());var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var M=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var R=(0,r.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:C,...h},b)=>(0,r.createElement)("svg",{ref:b,...D,width:e,height:e,stroke:t,strokeWidth:o?Number(u)*24/Number(e):u,className:n("lucide",f),...!d&&!M(h)&&{"aria-hidden":"true"},...h},[...C.map(([y,U])=>(0,r.createElement)(y,U)),...Array.isArray(d)?d:[d]]));var m=(t,e)=>{let u=(0,p.forwardRef)(({className:o,...f},d)=>(0,p.createElement)(R,{ref:d,iconNode:e,className:n(`lucide-${B(x(t))}`,`lucide-${t}`,o),...f}));return u.displayName=x(t),u};var G=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],s=m("user",G);var W=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],i=m("x",W);var E=l(v(),1),a=l(k(),1);function z(){let{setUserStoreManager:t,getUserStoreManager:e}=A(),[u,o]=(0,c.useState)(null),f=P(),d=w();return(0,c.useEffect)(()=>{let C=e()},[e]),{user:u,actionData:f,setUserStoreManager:t,loader_:d}}function q(){let{loader_:t,actionData:e,setUserStoreManager:u}=z();return(0,c.useEffect)(()=>{console.log({actionData:e}),e?.error&&I({variant:"destructive",title:"Set Withdrawal Pin Failed",description:e.error?.detail?.toString()||e.error?.toString()||"Withdrawal Pin Creation failed"}),e?.data&&(I({variant:"default",title:"Withdrawal PIN updated successfully",description:"Withdrawal PIN created successfully"}),u(e.data,!0))},[e]),(0,a.jsxs)("div",{className:"flex min-h-screen items-center justify-center bg-white p-6 font-sans relative",children:[(0,a.jsx)(S,{to:"/user/wallet",className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800",children:(0,a.jsx)(i,{size:24})}),(0,a.jsxs)(g,{className:"w-full max-w-lg text-center",method:"POST",children:[(0,a.jsx)("input",{type:"hidden",name:"intent",value:"create-withdrawal-pin"}),(0,a.jsx)("div",{className:"mb-8 flex justify-center",children:(0,a.jsxs)("div",{className:"relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E5E5EF]",children:[(0,a.jsx)("div",{className:"absolute h-24 w-24 rounded-full border border-slate-100"}),(0,a.jsx)("div",{className:"absolute h-32 w-32 rounded-full border border-slate-50/50"}),(0,a.jsx)(s,{className:"h-8 w-8 text-[#1A1A1A]",fill:"currentColor"})]})}),(0,a.jsx)("h1",{className:"mb-2 text-2xl font-bold tracking-tight text-[#1A1A1A]",children:"Set withdrawal PIN"}),(0,a.jsx)("p",{className:"mb-10 text-[15px] text-gray-500",children:"We sent a token to your email address. Please enter it below along with your desired withdrawal PIN."}),(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsxs)("label",{className:"mb-2 block text-[15px] font-medium text-[#1A1A1A]",children:["token",(0,a.jsx)("span",{className:"ml-0.5 text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",maxLength:4,minLength:4,pattern:"[0-9]*",name:"token",placeholder:"4 digit token sent to your email",className:"w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"})})]}),(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsxs)("label",{className:"mb-2 block text-[15px] font-medium text-[#1A1A1A]",children:["Withdrawal PIN",(0,a.jsx)("span",{className:"ml-0.5 text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",maxLength:6,minLength:6,pattern:"[0-9]*",name:"withdrawal_pin",placeholder:"Enter your desired 6-digit PIN",className:"w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"})})]}),(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsxs)("label",{className:"mb-2 block text-[15px] font-medium text-[#1A1A1A]",children:["Confirm Withdrawal PIN",(0,a.jsx)("span",{className:"ml-0.5 text-red-500",children:"*"})]}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",maxLength:6,minLength:6,pattern:"[0-9]*",name:"confirm_withdrawal_pin",placeholder:"Confirm your 6-digit PIN",className:"w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-[#4D4966]"})})]}),(0,a.jsx)("button",{type:"submit",className:"mt-10 w-full rounded-2xl bg-[#4D4966] py-4 text-lg font-semibold text-white transition-all hover:bg-[#3f3b55] active:scale-[0.99]",children:"Create Withdrawal PIN"})]})]})}export{q as default};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/user.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
