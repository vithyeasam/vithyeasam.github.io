(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify",function(){return t(1709)}])},1709:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(4051),a=t.n(r),i=t(5893),u=t(7283),l=t(1068),s=t(2814),o=t(7294),c=t(1922),f=t.n(c),m=t(6024);function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n,t,r,a,i,u){try{var l=e[i](u),s=l.value}catch(o){return void t(o)}l.done?n(s):Promise.resolve(s).then(r,a)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function u(e){d(i,r,a,u,l,"next",e)}function l(e){d(i,r,a,u,l,"throw",e)}u(void 0)}))}}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],u=!0,l=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(s){l=!0,a=s}finally{try{u||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(){var e,n,t=(e=["\n  mutation verifyUserWithCreateCompany(\n    $token: String!\n    $verifyNumber: String!\n    $data: CompanyInput\n  ) {\n    verifyUserWithCreateCompany(\n      token: $token\n      verifyNumber: $verifyNumber\n      data: $data\n    ) {\n      token\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return v=function(){return t},t}var g=(0,u.Ps)(v());function b(){var e=(0,o.useState)(""),n=e[0],t=e[1];(0,o.useEffect)((function(){var e=localStorage.getItem("token");t(e)}),[]);var r=(0,o.useState)(!1),u=r[0],c=r[1],p=(0,o.useState)(""),d=p[0],v=p[1],b=(0,o.useState)(""),_=b[0],x=b[1],j=(0,o.useState)(1),N=j[0],C=j[1],S=(0,o.useState)(""),w=S[0],k=S[1],F=h((0,l.D)(g),2),T=F[0],E=F[1].error;function P(){return(P=y(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T({variables:{token:n,verifyNumber:d,data:{exchangeRate:_,closePayrollDate:N,name:w}}}).then((function(){return c(!0)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.jsx)("div",{className:f().body,children:(0,i.jsx)("div",{className:f().signupFrm,children:(0,i.jsxs)("form",{action:"",method:"post",className:f().form,onSubmit:function(e){return P.apply(this,arguments)},children:[(0,i.jsx)("div",{className:f().title,children:(0,i.jsx)("img",{src:"/assets/img/logo/klahan-logos.png",alt:""})}),u?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(s.G,{icon:m.fV7,style:{fontSize:100,color:"green"}})}),(0,i.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20},children:"Register done!"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:f().inputContainer,children:[(0,i.jsx)("label",{htmlFor:"verify",className:f().label,children:"Verify Code:"}),(0,i.jsx)("input",{type:"text",id:"verify",name:"verify",className:f().input,value:d,onChange:function(e){return v(e.currentTarget.value)}})]}),(0,i.jsxs)("div",{className:f().inputContainer,children:[(0,i.jsx)("label",{htmlFor:"name",className:f().label,children:"Company Name:"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",className:f().input,value:w,onChange:function(e){return k(e.currentTarget.value)}})]}),(0,i.jsxs)("div",{className:f().inputContainer,children:[(0,i.jsx)("label",{htmlFor:"payroll",className:f().label,children:"Close Payroll Date:"}),(0,i.jsx)("input",{type:"number",id:"payroll",name:"payroll",className:f().input,value:N,onChange:function(e){return C(Number(e.currentTarget.value))}})]}),(0,i.jsxs)("div",{className:f().inputContainer,children:[(0,i.jsx)("label",{htmlFor:"rate",className:f().label,children:"Exchange Rate:"}),(0,i.jsx)("input",{type:"text",id:"rate",name:"rate",className:f().input,value:_,onChange:function(e){return x(e.currentTarget.value)}})]}),(0,i.jsx)("button",{type:"submit",className:f().submitBtn,style:_&&d&&w&&N?{backgroundColor:"blue"}:{backgroundColor:"gray"},disabled:!(_&&d&&w&&N),children:"Submit"}),E?(0,i.jsx)("p",{style:{color:"red"},children:E.message}):""]})]})})})}},1922:function(e){e.exports={body:"singup_body__i7_Vl",signupFrm:"singup_signupFrm__T85WX",form:"singup_form__Zd1Rm",title:"singup_title__F_t9C",inputContainer:"singup_inputContainer__U36Af",input:"singup_input__2VQLT",label:"singup_label__g_HoL",submitBtn:"singup_submitBtn__N6mNS"}}},function(e){e.O(0,[766,148,814,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);