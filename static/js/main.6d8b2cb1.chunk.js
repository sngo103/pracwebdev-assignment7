(this["webpackJsonppracwebdev-assignment7"]=this["webpackJsonppracwebdev-assignment7"]||[]).push([[0],{24:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(33),i=n.n(s),c=(n(24),n(17)),d=n(5),o=n(6),b=n(8),m=n(7),l=n(4),u=n(2),j=n.p+"static/media/bankofreact.4ef31777.png",x=n(0),p=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(c.a)({},e.state.user),r=t.target.name,a=t.target.value;n[r]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(x.jsx)(u.a,{to:{pathname:"/pracwebdev-assignment7/home",state:{userName:this.state.user}}}):Object(x.jsxs)("div",{className:"container justify-center text-center",children:[Object(x.jsx)("img",{className:"inline-block p-3",src:j,alt:"bank"}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{className:"text-5xl p-5 font-bold",children:"Bank of React"}),Object(x.jsx)("h1",{className:"text-xl font-bold",children:"*Sign in with any username and any password."}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",htmlFor:"userName",children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50"})]}),Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{htmlFor:"password",className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",children:"Password"}),Object(x.jsx)("input",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",type:"password",name:"password"})]}),Object(x.jsx)("button",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500",children:"Log In"})]})]})}}]),n}(r.Component),h=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"inline-flex items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",children:["Current Balance: ",this.props.accountBalance<0?Object(x.jsxs)(x.Fragment,{children:["-$",-1*this.props.accountBalance.toFixed(2)]}):Object(x.jsxs)(x.Fragment,{children:["$",this.props.accountBalance.toFixed(2)," "]})]})})}}]),n}(r.Component),g=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container justify-center text-center",children:[Object(x.jsx)("img",{className:"inline-block p-3",src:j,alt:"bank"}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{className:"text-5xl p-5 font-bold",children:"Bank of React"}),Object(x.jsx)(h,{userName:this.props.user,accountBalance:this.props.accountBalance}),Object(x.jsx)("br",{}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-400 hover:bg-red-500 md:text-lg my-2",to:"/pracwebdev-assignment7/debits",children:"My Debits"}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-400 hover:bg-green-500 md:text-lg my-2",to:"/pracwebdev-assignment7/credits",children:"My Credits"}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2",to:"/pracwebdev-assignment7/userProfile",children:"My Profile"})]})}}]),n}(r.Component),f=n(15),O=n.n(f),v=n(18),y=n(12),w=n.p+"static/media/debit.c8d5fa92.png",N=n(19),C=n.n(N),D=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).handleAmountChange=function(e){var t={date:r.state.newDebit.date,amount:parseFloat(e.target.value)||"",description:r.state.newDebit.description};r.setState({newDebit:t})},r.handleDateChange=function(e){var t={date:e.target.value,amount:r.state.newDebit.amount,description:r.state.newDebit.description};r.setState({newDebit:t})},r.handleDescriptionChange=function(e){var t={date:r.state.newDebit.date,amount:r.state.newDebit.amount,description:e.target.value};r.setState({newDebit:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.state.debits;console.log("NEWCRED:",r.state.newDebit);var n=r.state.accountBalance-r.state.newDebit.amount;t.push(r.formatDebit(r.state.newDebit)),console.log("NEWCREDITS:",t),r.setState({accountBalance:n,debits:t,newDebit:{amount:"",date:"",description:""}})},r.state={accountBalance:r.props.accountBalance,debits:[],newDebit:{amount:"",date:"",description:""},error:!1},r.handleAmountChange=r.handleAmountChange.bind(Object(y.a)(r)),r.handleDateChange=r.handleDateChange.bind(Object(y.a)(r)),r.handleDescriptionChange=r.handleDescriptionChange.bind(Object(y.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(y.a)(r)),r}return Object(o.a)(n,[{key:"formatDebit",value:function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"flex justify-center items-center col-span-2 m-1 px-2 py-1 bg-red-600 font-medium rounded-md text-white",children:e.date}),Object(x.jsxs)("div",{className:"flex justify-center items-center col-span-1 m-1 px-2 py-1 border-2 border-red-500 font-medium rounded-md text-red-600 bg-red-50",children:["-$",e.amount]}),Object(x.jsx)("div",{className:"flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 border-2 border-red-500 font-medium rounded-md text-red-600 bg-red-50",children:e.description||Object(x.jsx)("text",{className:"text-gray-500",children:"No description provided."})})]})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://moj-api.herokuapp.com/debits").then((function(e){console.log("Debit:",e.data);var n=e.data.map((function(e){return t.formatDebit(e)}));t.setState({debits:n})})).catch((function(e){console.log("Error:",e),t.setState({error:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container justify-center text-center",children:[Object(x.jsx)("img",{className:"inline-block pb-3 pt-10",src:w,alt:"bank"}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{className:"text-5xl p-5 font-bold",children:"My Debits"}),Object(x.jsx)(h,{accountBalance:this.state.accountBalance}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-600 md:text-lg",children:"Debit History"}),this.state.error?Object(x.jsx)("div",{children:" Something went wrong, please try again. "}):Object(x.jsxs)("div",{className:"grid grid-cols-12 py-1 border border-transparent font-medium text-red-600 bg-white",children:[Object(x.jsx)("div",{className:"flex justify-center items-center col-span-2 m-1 px-2 py-1 font-medium text-white bg-red-600",children:"Date"}),Object(x.jsx)("div",{className:"flex justify-center items-center col-span-1 m-1 px-2 py-1 font-medium text-white bg-red-600",children:"Amount"}),Object(x.jsx)("div",{className:"flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 font-medium text-white bg-red-600",children:"Description"}),this.state.debits.map((function(e){return e}))]}),Object(x.jsx)("div",{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-600 md:text-lg my-2",children:"Add New Debit"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500",children:"Amount"}),Object(x.jsx)("input",{required:!0,type:"text",onChange:this.handleAmountChange,value:this.state.newDebit.amount,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"})]}),Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500",children:"Date"}),Object(x.jsx)("input",{required:!0,type:"date",onChange:this.handleDateChange,value:this.state.newDebit.date,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"})]}),Object(x.jsxs)("div",{className:"grid grid-cols-4 m-3",children:[Object(x.jsx)("label",{className:"flex justify-center items-center col-start-2 m-1 px-1 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500",children:"Description"}),Object(x.jsx)("textarea",{onChange:this.handleDescriptionChange,value:this.state.newDebit.description,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"})]}),Object(x.jsx)("input",{type:"submit",value:"Submit",className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-500"})]}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-400 hover:bg-green-500 md:text-lg my-2",to:"/pracwebdev-assignment7/credits",children:"My Credits"}),Object(x.jsxs)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2",to:"/pracwebdev-assignment7/home",children:[" ","Return to Home"," "]})]})}}]),n}(r.Component),S=n.p+"static/media/credit.f3f71674.png",k=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).handleAmountChange=function(e){var t={date:r.state.newCredit.date,amount:parseFloat(e.target.value)||"",description:r.state.newCredit.description};r.setState({newCredit:t})},r.handleDateChange=function(e){var t={date:e.target.value,amount:r.state.newCredit.amount,description:r.state.newCredit.description};r.setState({newCredit:t})},r.handleDescriptionChange=function(e){var t={date:r.state.newCredit.date,amount:r.state.newCredit.amount,description:e.target.value};r.setState({newCredit:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.state.credits,n=r.state.accountBalance+r.state.newCredit.amount;t.push(r.formatCredit(r.state.newCredit)),r.setState({accountBalance:n,credits:t,newCredit:{amount:"",date:"",description:""}})},r.state={accountBalance:r.props.accountBalance,credits:[],newCredit:{amount:"",date:"",description:""},error:!1},r.handleAmountChange=r.handleAmountChange.bind(Object(y.a)(r)),r.handleDateChange=r.handleDateChange.bind(Object(y.a)(r)),r.handleDescriptionChange=r.handleDescriptionChange.bind(Object(y.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(y.a)(r)),r}return Object(o.a)(n,[{key:"formatCredit",value:function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"flex justify-center items-center col-span-2 m-1 px-2 py-1 bg-green-600 font-medium rounded-md text-white",children:e.date}),Object(x.jsxs)("div",{className:"flex justify-center items-center col-span-1 m-1 px-2 py-1 border-2 border-green-500 font-medium rounded-md text-green-600 bg-green-50",children:["$",e.amount]}),Object(x.jsx)("div",{className:"flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 border-2 border-green-500 font-medium rounded-md text-green-600 bg-green-50",children:e.description||Object(x.jsx)("text",{className:"text-gray-500",children:"No description provided."})})]})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://moj-api.herokuapp.com/credits").then((function(e){console.log("Credit:",e.data);var n=e.data.map((function(e,n){return t.formatCredit(e,n)}));t.setState({credits:n})})).catch((function(e){console.log("Error:",e),t.setState({error:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container justify-center text-center",children:[Object(x.jsx)("img",{className:"inline-block pb-3 pt-10",src:S,alt:"bank"}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{className:"text-5xl p-5 font-bold",children:"My Credits"}),Object(x.jsx)(h,{accountBalance:this.state.accountBalance}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-600 md:text-lg",children:"Credit History"}),this.state.error?Object(x.jsx)("div",{children:" Something went wrong, please try again. "}):Object(x.jsxs)("div",{className:"grid grid-cols-12 py-1 border border-transparent font-medium text-green-600 bg-white",children:[Object(x.jsx)("div",{className:"flex justify-center items-center col-span-2 m-1 px-2 py-1 font-medium text-white bg-green-600",children:"Date"}),Object(x.jsx)("div",{className:"flex justify-center items-center col-span-1 m-1 px-2 py-1 font-medium text-white bg-green-600",children:"Amount"}),Object(x.jsx)("div",{className:"flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 font-medium text-white bg-green-600",children:"Description"}),this.state.credits.map((function(e){return e}))]}),Object(x.jsx)("div",{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-600 md:text-lg my-2",children:"Add New Credit"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500",children:"Amount"}),Object(x.jsx)("input",{required:!0,type:"text",onChange:this.handleAmountChange,value:this.state.newCredit.amount,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"})]}),Object(x.jsxs)("div",{className:"container m-3",children:[Object(x.jsx)("label",{className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500",children:"Date"}),Object(x.jsx)("input",{required:!0,type:"date",onChange:this.handleDateChange,value:this.state.newCredit.date,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"})]}),Object(x.jsxs)("div",{className:"grid grid-cols-4 m-3",children:[Object(x.jsx)("label",{className:"flex justify-center items-center col-start-2 m-1 px-1 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500",children:"Description"}),Object(x.jsx)("textarea",{onChange:this.handleDescriptionChange,value:this.state.newCredit.description,className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"})]}),Object(x.jsx)("input",{type:"submit",value:"Submit",className:"m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"})]}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center border border-transparent text-base font-medium text-white bg-red-400 hover:bg-red-500 md:text-lg my-2",to:"/pracwebdev-assignment7/debits",children:"My Debits"}),Object(x.jsxs)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2",to:"/pracwebdev-assignment7/home",children:[" ","Return to Home"," "]})]})}}]),n}(r.Component),B=n.p+"static/media/profile.8d0a8730.png",F=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container justify-center text-center",children:[Object(x.jsx)("img",{className:"inline-block p-3",src:B,alt:"bank"}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{className:"text-5xl p-5 font-bold",children:"User Profile"}),Object(x.jsx)("div",{className:"items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",children:"Username "})," ",Object(x.jsxs)("div",{children:[" ",this.props.userName]}),Object(x.jsx)("div",{className:"items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50",children:"Member Since "})," ",Object(x.jsxs)("div",{children:[" ",this.props.memberSince]}),Object(x.jsx)("br",{}),Object(x.jsx)(l.b,{className:"w-full flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg",to:"/pracwebdev-assignment7/",children:"Return to Home"})]})}}]),n}(r.Component),A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(c.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:14568.27,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{children:Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{exact:!0,path:"/pracwebdev-assignment7/",render:function(){return Object(x.jsx)(p,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(x.jsx)(u.b,{exact:!0,path:"/pracwebdev-assignment7/home",render:function(t){return function(t){return Object(x.jsx)(g,Object(c.a)({user:e.state.currentUser.userName,accountBalance:e.state.accountBalance},t))}(t)}}),Object(x.jsx)(u.b,{exact:!0,path:"/pracwebdev-assignment7/userProfile",render:function(){return Object(x.jsx)(F,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(x.jsx)(u.b,{exact:!0,path:"/pracwebdev-assignment7/debits",render:function(){return Object(x.jsx)(D,{accountBalance:e.state.accountBalance})}}),Object(x.jsx)(u.b,{exact:!0,path:"/pracwebdev-assignment7/credits",render:function(){return Object(x.jsx)(k,{accountBalance:e.state.accountBalance})}})]})}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"text-center text-black font-semibold",children:[" ","\u2764\ufe0f Brought to you by Team Food: Samantha Ngo, Gabby Gonzalez, Nirmala Kuhl, Kristy Lau \u2764\ufe0f ",Object(x.jsx)("br",{}),"April 2021"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}}]),n}(r.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),M()}},[[67,1,2]]]);
//# sourceMappingURL=main.6d8b2cb1.chunk.js.map