(()=>{var e={};e.id=332,e.ids=[332],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},30252:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var a=t(70260),s=t(28203),o=t(25155),i=t.n(o),d=t(67292),n={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>d[e]);t.d(r,n);let l=["",{children:["(site)",{children:["(auth)",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,90315)),"/Users/debrajroy/Desktop/webzyraa/src/app/(site)/(auth)/signup/page.tsx"]}]},{}]},{}]},{forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/Users/debrajroy/Desktop/webzyraa/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,13438)),"/Users/debrajroy/Desktop/webzyraa/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/debrajroy/Desktop/webzyraa/src/app/(site)/(auth)/signup/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(site)/(auth)/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7075:(e,r,t)=>{Promise.resolve().then(t.bind(t,98004))},72731:(e,r,t)=>{Promise.resolve().then(t.bind(t,48208))},58939:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var a=t(45512);t(58009);var s=t(90993),o=t(1458);let i=({actionText:e="Sign In"})=>(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row md:flex items-center",children:[(0,a.jsxs)("button",{onClick:()=>(0,s.signIn)("google"),className:"flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer",children:[e,(0,a.jsx)(o.Icon,{icon:"flat-color-icons:google",width:"22",height:"22"})]}),(0,a.jsxs)("button",{onClick:()=>(0,s.signIn)("github"),className:"flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer",children:[e,(0,a.jsx)(o.Icon,{icon:"logos:github-icon",width:"22",height:"22"})]})]})},48208:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var a=t(45512),s=t(28531),o=t.n(s),i=t(79334),d=t(22403),n=t(58939),l=t(58009),c=t(47687),p=t(98944);let u=()=>{let e=(0,i.useRouter)(),[r,t]=(0,l.useState)(!1),[s,u]=(0,l.useState)({name:"",email:"",password:""}),[b,m]=(0,l.useState)({name:"",email:"",password:""}),f=e=>e.trim()?/^[a-zA-Z\s]{3,}$/.test(e)?"":"Name must be at least 3 characters and contain only letters":"Name is required",h=e=>e.trim()?/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)?"":"Enter a valid email address":"Email is required",x=e=>e.trim()?e.length<6?"Password must be at least 6 characters":"":"Password is required",g=e=>{let{name:r,value:t}=e.target;u(e=>({...e,[r]:t})),m(e=>({...e,[r]:"name"===r?f(t):"email"===r?h(t):x(t)}))},k=async r=>{r.preventDefault();let a=f(s.name),o=h(s.email),i=x(s.password);if(m({name:a,email:o,password:i}),a||o||i){d.Ay.error("Please fix the errors before submitting.");return}t(!0);try{await new Promise(e=>setTimeout(e,2e3)),localStorage.setItem("user",JSON.stringify({user:s.name})),e.push("/")}catch(e){d.Ay.error("Something went wrong. Please try again.")}finally{t(!1)}};return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"-mx-4 flex flex-wrap",children:(0,a.jsx)("div",{className:"w-full px-4",children:(0,a.jsxs)("div",{className:"relative shadow-lg mx-auto max-w-32 overflow-hidden rounded-lg bg-white dark:bg-dark_black px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-16",children:[(0,a.jsx)("div",{className:"mb-10 flex justify-center",children:(0,a.jsx)(p.A,{})}),(0,a.jsx)(n.A,{actionText:"Sign Up"}),(0,a.jsxs)("span",{className:"z-1 relative my-8 block text-center",children:[(0,a.jsx)("span",{className:"-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20 dark:bg-opacity-20 bg-opacity-10"}),(0,a.jsx)("span",{className:"text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block dark:bg-dark_black bg-white px-3",children:"OR"})]}),(0,a.jsxs)("form",{onSubmit:k,children:[(0,a.jsxs)("div",{className:"mb-5 text-left",children:[(0,a.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:s.name,onChange:g,className:`w-full rounded-full border px-5 py-3 outline-hidden transition  focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${b.name?"border-red-500 dark:border-red-500":"border-stroke"} 
                                                focus:border-dark_black/50 dark:focus:border-white/50`}),b.name&&(0,a.jsx)("p",{className:"text-red-500 dark:text-red-500 text-sm mt-1",children:b.name})]}),(0,a.jsxs)("div",{className:"mb-5 text-left",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:s.email,onChange:g,className:`w-full rounded-full border px-5 py-3 outline-hidden transition  focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${b.email?"border-red-500 dark:border-red-500":"border-stroke"}
                                                focus:border-dark_black/50 dark:focus:border-white/50`}),b.email&&(0,a.jsx)("p",{className:"text-red-500 dark:text-red-500 text-sm mt-1",children:b.email})]}),(0,a.jsxs)("div",{className:"mb-5 text-left",children:[(0,a.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:s.password,onChange:g,className:`w-full rounded-full border px-5 py-3 outline-hidden transition focus:border-dark_black dark:border-white/20 dark:bg-black/50
                                                ${b.password?"border-red-500 dark:border-red-500":"border-stroke"}
                                                focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50 `}),b.password&&(0,a.jsx)("p",{className:"text-red-500 dark:text-red-500 text-sm mt-1",children:b.password})]}),(0,a.jsx)("div",{className:"mb-9",children:(0,a.jsxs)("button",{type:"submit",className:"flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black ",disabled:r,children:["Sign Up ",r&&(0,a.jsx)(c.A,{})]})})]}),(0,a.jsxs)("div",{className:"flex flex-col max-w-xs mx-auto gap-2",children:[(0,a.jsxs)("p",{className:"text-dark_black/70 dark:text-white/50",children:["By creating an account, you agree with our"," ",(0,a.jsx)(o(),{href:"/privacy-policy",className:"text-dark_black dark:text-white dark:hover:text-white-50",children:"Privacy"})," ","and"," ",(0,a.jsx)(o(),{href:"/privacy-policy",className:"text-dark_black dark:text-white dark:hover:text-white-50",children:"Policy"}),"."]}),(0,a.jsxs)("p",{className:"text-dark_black/70 dark:text-white/50",children:["Already have an account?",(0,a.jsxs)(o(),{href:"/signin",className:"text-dark_black dark:text-white dark:hover:text-white/50",children:[" ","Sign In"]})]})]})]})})})})})})}},47687:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var a=t(45512);t(58009);let s=()=>(0,a.jsx)("span",{className:"ml-1.5 h-4 w-4 animate-spin rounded-full border-2 border-solid border-white dark:border-dark_black border-t-transparent dark:border-t-transparent"})},90315:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>o});var a=t(62740),s=t(98004);let o={title:"Sign Up | Webzyra"},i=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.default,{})})},98004:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/debrajroy/Desktop/webzyraa/src/app/components/auth/sign-up/index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/debrajroy/Desktop/webzyraa/src/app/components/auth/sign-up/index.tsx","default")},22403:(e,r,t)=>{"use strict";t.d(r,{Ay:()=>Z});var a,s=t(58009);let o={data:""},i=e=>{if("object"==typeof window){let r=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return r.nonce=window.__nonce__,r.parentNode||(e||document.head).appendChild(r),r.firstChild}return e||o},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,r)=>{let t="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?t=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":r)+"}":"object"==typeof i?a+=c(i,r?r.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(o,i):o+":"+i+";")}return t+(r&&s?r+"{"+s+"}":s)+a},p={},u=e=>{if("object"==typeof e){let r="";for(let t in e)r+=t+u(e[t]);return r}return e},b=(e,r,t,a,s)=>{let o=u(e),i=p[o]||(p[o]=(e=>{let r=0,t=11;for(;r<e.length;)t=101*t+e.charCodeAt(r++)>>>0;return"go"+t})(o));if(!p[i]){let r=o!==e?e:(e=>{let r,t,a=[{}];for(;r=d.exec(e.replace(n,""));)r[4]?a.shift():r[3]?(t=r[3].replace(l," ").trim(),a.unshift(a[0][t]=a[0][t]||{})):a[0][r[1]]=r[2].replace(l," ").trim();return a[0]})(e);p[i]=c(s?{["@keyframes "+i]:r}:r,t?"":"."+i)}let b=t&&p.g?p.g:null;return t&&(p.g=p[i]),((e,r,t,a)=>{a?r.data=r.data.replace(a,e):-1===r.data.indexOf(e)&&(r.data=t?e+r.data:r.data+e)})(p[i],r,a,b),i},m=(e,r,t)=>e.reduce((e,a,s)=>{let o=r[s];if(o&&o.call){let e=o(t),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=r?"."+r:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function f(e){let r=this||{},t=e.call?e(r.p):e;return b(t.unshift?t.raw?m(t,[].slice.call(arguments,1),r.p):t.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):t,i(r.target),r.g,r.o,r.k)}f.bind({g:1});let h,x,g,k=f.bind({k:1});function w(e,r){let t=this||{};return function(){let a=arguments;function s(o,i){let d=Object.assign({},o),n=d.className||s.className;t.p=Object.assign({theme:x&&x()},d),t.o=/ *go\d+/.test(n),d.className=f.apply(t,a)+(n?" "+n:""),r&&(d.ref=i);let l=e;return e[0]&&(l=d.as||e,delete d.as),g&&l[0]&&g(d),h(l,d)}return r?r(s):s}}var y=e=>"function"==typeof e,v=(e,r)=>y(e)?e(r):e,j=(()=>{let e=0;return()=>(++e).toString()})(),_=((()=>{let e;return()=>e})(),"default"),N=(e,r)=>{let{toastLimit:t}=e.settings;switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,t)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:a}=r;return N(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=r;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let o=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},z={},$=(e,r=_)=>{z[r]=N(z[r]||A,e),P.forEach(([e,t])=>{e===r&&t(z[r])})},C=e=>Object.keys(z).forEach(r=>$(e,r)),S=e=>Object.keys(z).find(r=>z[r].toasts.some(r=>r.id===e)),I=(e=_)=>r=>{$(r,e)},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},E=(e,r="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...t,id:(null==t?void 0:t.id)||j()}),D=e=>(r,t)=>{let a=E(r,e,t);return I(a.toasterId||S(a.id))({type:2,toast:a}),a.id},O=(e,r)=>D("blank")(e,r);O.error=D("error"),O.success=D("success"),O.loading=D("loading"),O.custom=D("custom"),O.dismiss=(e,r)=>{let t={type:3,toastId:e};r?I(r)(t):C(t)},O.dismissAll=e=>O.dismiss(void 0,e),O.remove=(e,r)=>{let t={type:4,toastId:e};r?I(r)(t):C(t)},O.removeAll=e=>O.remove(void 0,e),O.promise=(e,r,t)=>{let a=O.loading(r.loading,{...t,...null==t?void 0:t.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=r.success?v(r.success,e):void 0;return s?O.success(s,{id:a,...t,...null==t?void 0:t.success}):O.dismiss(a),e}).catch(e=>{let s=r.error?v(r.error,e):void 0;s?O.error(s,{id:a,...t,...null==t?void 0:t.error}):O.dismiss(a)}),e};var U=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),L=(w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),M=k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,T=(w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,w("div")`
  position: absolute;
`,w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${T} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,a=s.createElement,c.p=void 0,h=a,x=void 0,g=void 0,f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Z=O}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,191,444],()=>t(30252));module.exports=a})();