(this["webpackJsonpmr-bitcoin-ifat"]=this["webpackJsonpmr-bitcoin-ifat"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),o=n.n(r),s=(n(39),n(40),n(10)),i=n(3),l=(n(41),n(0)),u=Object(i.f)((function(e){return Object(l.jsxs)("header",{className:"/"===e.location.pathname?"app-header homepage":"app-header",children:[Object(l.jsxs)("h2",{className:"logo",children:["Mr",Object(l.jsx)("span",{children:"."}),"Bitcoin"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(s.c,{exact:!0,to:"/",className:"nav-link home",activeClassName:"active-nav",title:"Home"}),Object(l.jsx)(s.c,{to:"/contact",className:"nav-link contact",activeClassName:"active-nav",title:"Contacts"}),Object(l.jsx)(s.c,{to:"/statistic",className:"nav-link statistic",activeClassName:"active-nav",title:"Statistics"})]})]})})),d=n(2),h=n.n(d),p=n(9),m=n(5),b=n(6),j=n(8),f=n(7);var v={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[e]||t;return JSON.parse(n)}},O={getRate:function(e){return g.apply(this,arguments)},getMarketPrice:function(){return C.apply(this,arguments)},getConfirmedTransactions:function(){return y.apply(this,arguments)}},x=n(49);function g(){return(g=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("https://blockchain.info/tobtc?currency=USD&value=".concat(1));case 3:return n=e.sent,a=(t/n.data).toLocaleString("en-US",{style:"currency",currency:"USD"}),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(){return(C=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=v.load("MarketPrice"))){e.next=4;break}return e.abrupt("return",Promise.resolve(t));case 4:return e.next=6,x.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 6:return n=e.sent,t=n.data.values.map((function(e){var t=e.x,n=e.y;return{x:new Date(1e3*t).toLocaleDateString(["ban","id"]),y:n.toFixed(2)}})),v.store("MarketPrice",t),e.abrupt("return",t);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function y(){return(y=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=v.load("getConfirmedTransactions"))){e.next=4;break}return e.abrupt("return",Promise.resolve(t));case 4:return e.next=6,x.get("https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true");case 6:return n=e.sent,t=n.data.values.map((function(e){var t=e.x,n=e.y;return{x:new Date(1e3*t).toLocaleDateString(["ban","id"]),y:n.toFixed(2)}})),v.store("confirmedTransactions",t),e.abrupt("return",t);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var k={getUser:function(){return{name:"Ochoa Hyde",coins:200,moves:[]}}};n(68);var w=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null,rate:0,isShowInfo:!1},e.setRate=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.getRate(e.state.user.coins);case 3:n=t.sent,e.setState({rate:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=k.getUser();this.setState({user:t},(function(){return e.setRate()}))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.rate;return t&&Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("div",{className:"background"}),Object(l.jsxs)("div",{className:"user-info",children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsxs)("h3",{children:["Coins: ",Object(l.jsx)("span",{children:t.coins})]}),Object(l.jsxs)("h3",{children:["Rate: ",Object(l.jsx)("span",{children:n})]})]})]})}}]),n}(a.Component),M={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=N;e&&e.term&&(a=_(e.term)),t(S(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=N.findIndex((function(t){return t._id===e})),c=N[a],r=function(e){var t=e-1,n=e+1;t<0?t=N.length-1:n>=N.length&&(n=0);return{prev:N[t]._id,next:N[n]._id}}(a);c.neighborContacts=r,c?t(c):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=N.findIndex((function(t){return t._id===e}));-1!==a&&N.splice(a,1),t(N)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=N.findIndex((function(t){return e._id===t._id}));-1!==a&&(N[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),N.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},N=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function S(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function _(e){return e=e.toLocaleLowerCase(),N.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}n(69),n(70);function P(e){var t=e.contact;e.onSelectContact;return Object(l.jsxs)(s.b,{to:"/contact/"+t._id,className:"contact-preview",children:[Object(l.jsx)("img",{src:"https://i.pravatar.cc/150?u=".concat(t._id),alt:""}),Object(l.jsx)("h2",{children:t.name})]})}var L=n(17),z=(n(71),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={term:null},e.handleChange=function(t){var n=t.target;e.setState({term:n.value},(function(){e.props.onChangeFilter(Object(L.a)({},e.state))}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{className:"contact-filter",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("label",{htmlFor:"filter",children:"Filter contacts"}),Object(l.jsx)("input",{type:"text",id:"filter",onChange:this.handleChange,placeholder:"Search..."})]})}}]),n}(a.Component)),D=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:null},e.loadContacts=Object(p.a)(h.a.mark((function t(){var n,a,c=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:null,t.prev=1,t.next=4,M.getContacts(n);case 4:a=t.sent,e.setState({contacts:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.props.setErrMsg("Could not load contact details");case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.onChangeFilter=function(t){e.loadContacts(t)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"render",value:function(){var e=this.state.contacts;return e&&Object(l.jsxs)("div",{className:"contact-list-container",children:[Object(l.jsxs)("div",{className:"contact-ctrls",children:[Object(l.jsx)(s.b,{to:"/contact/edit",className:"btn standard",children:"Add contact"}),Object(l.jsx)(z,{onChangeFilter:this.onChangeFilter},0)]}),Object(l.jsx)("div",{className:"contact-list",children:e.map((function(e){return Object(l.jsx)(P,{contact:e},e._id)}))})]})}}]),n}(a.Component);n(72);function E(e){var t=e.children,n=e.onHideMsg;return Object(l.jsx)("div",{className:"msg",onClick:n,children:Object(l.jsx)("div",{className:"msg-box",children:t})})}n(73);var F=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null,isShowMsg:!1},e.loadContact=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.getContactById(e.props.match.params.id);case 3:n=t.sent,e.setState({contact:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.props.setErrMsg("Could not load contact details");case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.onShowMsg=function(){e.setState({isShowMsg:!0})},e.onHideMsg=function(){e.setState({isShowMsg:!1})},e.onRemoveContact=function(){M.deleteContact(e.state.contact._id),e.props.history.push("/contact"),e.onHideMsg()},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&(console.log("prevProps:",e),this.loadContact())}},{key:"render",value:function(){var e=this,t=this.state,n=t.contact,a=t.isShowMsg;return n&&Object(l.jsxs)("div",{className:"contact-detail-page",children:[Object(l.jsx)("button",{onClick:function(){return e.props.history.push("/contact")},className:"btn standard back",children:"\u2190 Back"}),Object(l.jsxs)("div",{className:"contact-detail-container",children:[Object(l.jsxs)("div",{className:"contact-info",children:[Object(l.jsx)("img",{src:"https://i.pravatar.cc/150?u=".concat(n._id),alt:""}),Object(l.jsx)("h2",{children:n.name}),Object(l.jsx)("h3",{children:n.phone}),Object(l.jsx)("h3",{children:n.email})]}),Object(l.jsxs)("div",{className:"btn-container",children:[Object(l.jsx)("button",{onClick:this.onShowMsg,className:"btn alert",children:"Delete"}),Object(l.jsx)(s.b,{to:"/contact/edit/"+n._id,className:"btn standard",children:"Edit"})]})]}),a&&Object(l.jsxs)(E,{onHideMsg:this.onHideMsg,children:[Object(l.jsx)("p",{children:"Are you sure you want to delete this contact?"}),Object(l.jsx)("button",{className:"btn standard",onClick:this.onRemoveContact,children:"Yes"}),Object(l.jsx)("button",{onClick:this.onHideMsg,className:"btn alert",children:"No"})]}),Object(l.jsxs)("div",{className:"paging",children:[Object(l.jsx)(s.b,{to:"/contact/"+n.neighborContacts.prev,children:"\u2190 Prev"}),Object(l.jsx)(s.b,{to:"/contact/"+n.neighborContacts.next,children:"Next \u2192"})]})]})}}]),n}(a.Component),H=n(18),T=(n(74),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e.setContact=Object(p.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,M.getContactById(e.props.match.params.id);case 4:t.t1=t.sent,t.t2={contact:t.t1},t.t0.setState.call(t.t0,t.t2),t.next=12;break;case 9:t.prev=9,t.t3=t.catch(0),e.props.setErrMsg("Could not load contact details");case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.onHandleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState({contact:Object(L.a)(Object(L.a)({},e.state.contact),{},Object(H.a)({},a,c))})},e.onSaveContact=function(t){t.preventDefault(),M.saveContact(e.state.contact),e.props.history.push(e.props.match.params.id?"/contact/"+e.props.match.params.id:"/contact/")},e.onCloseContact=function(){},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.match.params.id?this.setContact():this.setState({contact:M.getEmptyContact()})}},{key:"render",value:function(){var e=this,t=this.state.contact;return t&&Object(l.jsxs)("form",{onSubmit:this.onSaveContact,className:"contact-edit",children:[Object(l.jsx)("button",{onClick:function(){return e.props.history.goBack()},className:"btn standard back",children:"\u2190 Back"}),Object(l.jsxs)("label",{htmlFor:"name",children:["Name:",Object(l.jsx)("input",{type:"text",value:t.name,id:"name",name:"name",onChange:this.onHandleChange,required:!0})]}),Object(l.jsxs)("label",{htmlFor:"phone",children:["Phone:",Object(l.jsx)("input",{type:"text",id:"phone",name:"phone",value:t.phone,onChange:this.onHandleChange,required:!0})]}),Object(l.jsxs)("label",{htmlFor:"email",children:["Email:",Object(l.jsx)("input",{type:"email",id:"email",name:"email",value:t.email,onChange:this.onHandleChange,required:!0})]}),Object(l.jsx)("button",{className:"btn standard",children:"Save"})]})}}]),n}(a.Component)),A=(n(75),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={errMsg:null},e.setErrMsg=function(t){e.setState({errMsg:t}),setTimeout(e.setState({errMsg:null}),1e3)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.errMsg;return Object(l.jsxs)("div",{children:[Object(l.jsx)(i.a,{component:T,setErrMsg:this.setErrMsg,path:"/contact/edit/:id?"}),Object(l.jsx)(i.a,{exact:!0,component:F,setErrMsg:this.setErrMsg,path:"/contact/:id"}),Object(l.jsx)(i.a,{exact:!0,component:D,setErrMsg:this.setErrMsg,path:"/contact/"}),e&&Object(l.jsx)("p",{children:this.state.errMsg})]})}}]),n}(a.Component)),I=n(34),R=n.n(I),B=(n(77),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={options:{chart:{id:"apexchart-example",stacked:!1},dataLabels:{enabled:!1},colors:["#546E7A"],stroke:{curve:"straight",width:1},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},xaxis:{type:"category",labels:{rotate:-25}}},series:[{name:"series-1",data:a.props.data}]},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"chart-stats",children:[Object(l.jsx)("h3",{children:this.props.title}),Object(l.jsx)(R.a,{className:"chart-stats",options:this.state.options,series:this.state.series,type:"area",width:"100%",height:320})]})}}]),n}(a.Component)),U=(n(78),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={marketPrice:null,confirmedTransactions:null,transactionDates:null},e.setMarketPrices=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getMarketPrice();case 2:n=t.sent,e.setState({marketPrice:n});case 4:case"end":return t.stop()}}),t)}))),e.setTransactionsInfo=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getConfirmedTransactions();case 2:n=t.sent,console.log("confirmedTransactions.values:",n),e.setState({confirmedTransactions:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setMarketPrices(),this.setTransactionsInfo();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.marketPrice,n=e.confirmedTransactions;e.transactionDates;return console.log("confirmedTransactions:",n),Object(l.jsxs)("div",{children:[n&&Object(l.jsx)(B,{data:n,title:"Confirmed Transactions"}),t&&Object(l.jsx)(B,{data:t,title:"Market Price"})]})}}]),n}(a.Component));function q(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{}),Object(l.jsx)("main",{className:"app-main",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{component:A,path:"/contact"}),Object(l.jsx)(i.a,{component:U,path:"/statistic"}),Object(l.jsx)(i.a,{component:w,path:"/"})]})})]})})}o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.da827988.chunk.js.map