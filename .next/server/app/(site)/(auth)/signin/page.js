(()=>{var e={};e.id=838,e.ids=[838],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},76256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var a=r(70260),s=r(28203),o=r(25155),i=r.n(o),n=r(67292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let l=["",{children:["(site)",{children:["(auth)",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,76337)),"/Users/debrajroy/Desktop/webzyraa/src/app/(site)/(auth)/signin/page.tsx"]}]},{}]},{}]},{forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"/Users/debrajroy/Desktop/webzyraa/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,13438)),"/Users/debrajroy/Desktop/webzyraa/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/debrajroy/Desktop/webzyraa/src/app/(site)/(auth)/signin/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(site)/(auth)/signin/page",pathname:"/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},23317:(e,t,r)=>{Promise.resolve().then(r.bind(r,15478))},81525:(e,t,r)=>{Promise.resolve().then(r.bind(r,42250))},58939:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(45512);r(58009);var s=r(90993),o=r(1458);let i=({actionText:e="Sign In"})=>(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row md:flex items-center",children:[(0,a.jsxs)("button",{onClick:()=>(0,s.signIn)("google"),className:"flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer",children:[e,(0,a.jsx)(o.Icon,{icon:"flat-color-icons:google",width:"22",height:"22"})]}),(0,a.jsxs)("button",{onClick:()=>(0,s.signIn)("github"),className:"flex w-full items-center justify-center gap-2.5 rounded-full border border-dark_black/10 dark:border-white/20 p-3 text-dark_black dark:text-white dark:bg-white/20 duration-200 ease-in hover:bg-dark_black/5 dark:hover:bg-white/5 hover:cursor-pointer",children:[e,(0,a.jsx)(o.Icon,{icon:"logos:github-icon",width:"22",height:"22"})]})]})},42250:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(45512),s=r(28531),o=r.n(s),i=r(79334),n=r(58009),d=r(22403),l=r(58939),c=r(47687),p=r(98944);let u=()=>{let e=(0,i.useRouter)(),[t,r]=(0,n.useState)(!1),[s,u]=(0,n.useState)({email:"",password:""}),[b,m]=(0,n.useState)({email:"",password:""}),f=()=>{let e={email:"",password:""},t=!0;return s.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(e.email="Please enter a valid email address.",t=!1):(e.email="Email is required.",t=!1),s.password?s.password.length<6&&(e.password="Password must be at least 6 characters long.",t=!1):(e.password="Password is required.",t=!1),m(e),t},h=async t=>{if(t.preventDefault(),f()){r(!0);try{await new Promise(e=>setTimeout(e,2e3)),localStorage.setItem("user",JSON.stringify({user:s.email})),e.push("/")}catch(e){d.Ay.error("Something went wrong. Please try again.")}finally{r(!1)}}};return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl  before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"-mx-4 flex flex-wrap",children:(0,a.jsx)("div",{className:"w-full px-4",children:(0,a.jsxs)("div",{className:"relative shadow-lg mx-auto max-w-32 overflow-hidden rounded-lg bg-white dark:bg-dark_black px-8 py-14 text-center sm:px-12 md:px-16",children:[(0,a.jsx)("div",{className:"mb-10 flex justify-center",children:(0,a.jsx)(p.A,{})}),(0,a.jsx)(l.A,{actionText:"Sign In"}),(0,a.jsxs)("span",{className:"z-1 relative my-8 block text-center",children:[(0,a.jsx)("span",{className:"-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20"}),(0,a.jsx)("span",{className:"text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block bg-white dark:bg-dark_black px-3",children:"OR"})]}),(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsxs)("div",{className:"mb-5 text-left",children:[(0,a.jsx)("input",{type:"email",placeholder:"Email",onChange:e=>u({...s,email:e.target.value}),className:`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                                                ${b.email?"border-red-500":"border-stroke"} 
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:focus:border-opacity-50`}),b.email&&(0,a.jsx)("p",{className:"text-red-500 dark:text-red-500 text-sm mt-1",children:b.email})]}),(0,a.jsxs)("div",{className:"mb-5 text-left",children:[(0,a.jsx)("input",{type:"password",placeholder:"Password",onChange:e=>u({...s,password:e.target.value}),className:`w-full rounded-full border px-5 py-3 outline-hidden transition  dark:border-white/20 dark:bg-black/40 
                                                ${b.email?" border-red-500":"border-stroke"} 
                                                focus:border-dark_black/50 dark:focus:border-white/50`}),b.password&&(0,a.jsx)("p",{className:"text-red-500 dark:text-red-500 text-sm mt-1",children:b.password})]}),(0,a.jsx)("div",{className:"mb-9",children:(0,a.jsxs)("button",{type:"submit",className:"flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black ",children:["Sign In ",t&&(0,a.jsx)(c.A,{})]})})]}),(0,a.jsx)(o(),{href:"/forgot-password",className:"mb-2 inline-block text-dark_black/50 dark:text-white/50 dark:hover:text-white/70 hover:text-dark_black",children:"Forget Password?"}),(0,a.jsxs)("p",{className:"text-dark_black/70 dark:text-white/50",children:["Not a member yet?"," ",(0,a.jsx)(o(),{href:"/signup",className:"text-dark_black dark:text-white hover:text-dark_black/50 dark:hover:text-white/50",children:"Sign Up"})]})]})})})})})})}},47687:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(45512);r(58009);let s=()=>(0,a.jsx)("span",{className:"ml-1.5 h-4 w-4 animate-spin rounded-full border-2 border-solid border-white dark:border-dark_black border-t-transparent dark:border-t-transparent"})},76337:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>o});var a=r(62740),s=r(15478);let o={title:"Sign In | Webzyra"},i=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.default,{})})},15478:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/debrajroy/Desktop/webzyraa/src/app/components/auth/sign-in/index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/debrajroy/Desktop/webzyraa/src/app/components/auth/sign-in/index.tsx","default")},22403:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>H});var a,s=r(58009);let o={data:""},i=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},p={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},b=(e,t,r,a,s)=>{let o=u(e),i=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[i]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=n.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);p[i]=c(s?{["@keyframes "+i]:t}:t,r?"":"."+i)}let b=r&&p.g?p.g:null;return r&&(p.g=p[i]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(p[i],t,a,b),i},m=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function f(e){let t=this||{},r=e.call?e(t.p):e;return b(r.unshift?r.raw?m(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let h,x,g,k=f.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),d=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(d),n.className=f.apply(r,a)+(d?" "+d:""),t&&(n.ref=i);let l=e;return e[0]&&(l=n.as||e,delete n.as),g&&l[0]&&g(n),h(l,n)}return t?t(s):s}}var v=e=>"function"==typeof e,y=(e,t)=>v(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),_=((()=>{let e;return()=>e})(),"default"),N=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],z={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},$=(e,t=_)=>{A[t]=N(A[t]||z,e),P.forEach(([e,r])=>{e===t&&r(A[t])})},I=e=>Object.keys(A).forEach(t=>$(e,t)),S=e=>Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===e)),C=(e=_)=>t=>{$(t,e)},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),E=e=>(t,r)=>{let a=D(t,e,r);return C(a.toasterId||S(a.id))({type:2,toast:a}),a.id},O=(e,t)=>E("blank")(e,t);O.error=E("error"),O.success=E("success"),O.loading=E("loading"),O.custom=E("custom"),O.dismiss=(e,t)=>{let r={type:3,toastId:e};t?C(t)(r):I(r)},O.dismissAll=e=>O.dismiss(void 0,e),O.remove=(e,t)=>{let r={type:4,toastId:e};t?C(t)(r):I(r)},O.removeAll=e=>O.remove(void 0,e),O.promise=(e,t,r)=>{let a=O.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?y(t.success,e):void 0;return s?O.success(s,{id:a,...r,...null==r?void 0:r.success}):O.dismiss(a),e}).catch(e=>{let s=t.error?y(t.error,e):void 0;s?O.error(s,{id:a,...r,...null==r?void 0:r.error}):O.dismiss(a)}),e};var U=k`
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
`;var H=O}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,191,444],()=>r(76256));module.exports=a})();