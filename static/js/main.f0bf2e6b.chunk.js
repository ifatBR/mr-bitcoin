(this["webpackJsonpmr-bitcoin-ifat"]=this["webpackJsonpmr-bitcoin-ifat"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),o=n.n(r),s=(n(38),n(6)),i=n(7),l=n(9),u=n(8),d=(n(39),n(10)),h=n(3),m=(n(40),n(0)),p=Object(h.f)((function(e){return console.log("props.match.path:",e),Object(m.jsxs)("header",{className:"/"===e.location.pathname?"app-header homepage":"app-header",children:[Object(m.jsxs)("h2",{className:"logo",children:["Mr",Object(m.jsx)("span",{children:"."}),"Bitcoin"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(d.c,{exact:!0,to:"/",className:"nav-link home",activeClassName:"active-nav",title:"Home"}),Object(m.jsx)(d.c,{to:"/contact",className:"nav-link contact",activeClassName:"active-nav",title:"Contacts"}),Object(m.jsx)(d.c,{to:"/statistic",className:"nav-link statistic",activeClassName:"active-nav",title:"Statistics"})]})]})})),f=n(2),j=n.n(f),b=n(5);var v={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage[e]||t;return JSON.parse(n)}},O={getRate:function(e){return g.apply(this,arguments)},getMarketPrice:function(){return C.apply(this,arguments)},getConfirmedTransactions:function(){return y.apply(this,arguments)}},x=n(48);function g(){return(g=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("https://blockchain.info/tobtc?currency=USD&value=".concat(1));case 3:return n=e.sent,a=t/n.data,e.abrupt("return",a.toFixed(2));case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(){return(C=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=v.load("MarketPrice"))){e.next=4;break}return e.abrupt("return",Promise.resolve(t));case 4:return e.next=6,x.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 6:return n=e.sent,v.store("MarketPrice",n.data),e.abrupt("return",n.data);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=v.load("getConfirmedTransactions"))){e.next=4;break}return e.abrupt("return",Promise.resolve(t));case 4:return e.next=6,x.get("https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true");case 6:return n=e.sent,v.store("getConfirmedTransactions",n.data),e.abrupt("return",n.data);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var k={getUser:function(){return{name:"Ochoa Hyde",coins:200,moves:[]}}};n(67);var w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null,rate:0,isShowInfo:!1},e.setRate=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.getRate(e.state.user.coins);case 3:n=t.sent,e.setState({rate:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=k.getUser();this.setState({user:t},(function(){return e.setRate()}))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.rate;return t&&Object(m.jsxs)("div",{className:"home-page",children:[Object(m.jsx)("div",{className:"background"}),Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("h3",{children:["Coins: ",Object(m.jsx)("span",{children:t.coins})]}),Object(m.jsxs)("h3",{children:["Rate: ",Object(m.jsxs)("span",{children:["$",n]})]})]})]})}}]),n}(a.Component),N={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=S;e&&e.term&&(a=P(e.term)),t(_(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=S.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return t._id===e}));-1!==a&&S.splice(a,1),t(S)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return e._id===t._id}));-1!==a&&(S[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),S.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},S=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function _(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function P(e){return e=e.toLocaleLowerCase(),S.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}n(68),n(69);function z(e){var t=e.contact;e.onSelectContact;return Object(m.jsxs)(d.b,{to:"/contact/"+t._id,className:"contact-preview",children:[Object(m.jsx)("img",{src:"https://i.pravatar.cc/150?u=".concat(t._id),alt:""}),Object(m.jsx)("h2",{children:t.name})]})}var L=n(18),M=(n(70),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={term:null},e.handleChange=function(t){var n=t.target;e.setState({term:n.value},(function(){e.props.onChangeFilter(Object(L.a)({},e.state))}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"contact-filter",onSubmit:function(e){return e.preventDefault()},children:[Object(m.jsx)("label",{htmlFor:"filter",children:"Filter contacts"}),Object(m.jsx)("input",{type:"text",id:"filter",onChange:this.handleChange,placeholder:"Search..."})]})}}]),n}(a.Component)),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:null},e.loadContacts=Object(b.a)(j.a.mark((function t(){var n,a,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:null,t.next=3,N.getContacts(n);case 3:a=t.sent,e.setState({contacts:a});case 5:case"end":return t.stop()}}),t)}))),e.onChangeFilter=function(t){e.loadContacts(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"render",value:function(){var e=this.state.contacts;return e&&Object(m.jsxs)("div",{className:"contact-list-container",children:[Object(m.jsxs)("div",{className:"contact-ctrls",children:[Object(m.jsx)(d.b,{to:"/contact/edit",className:"btn standard",children:"Add contact"}),Object(m.jsx)(M,{onChangeFilter:this.onChangeFilter},0)]}),Object(m.jsx)("div",{className:"contact-list",children:e.map((function(e){return Object(m.jsx)(z,{contact:e},e._id)}))})]})}}]),n}(a.Component),R=(n(71),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e.onRemoveContact=function(){N.deleteContact(e.state.contact._id),e.props.history.push("/contact")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getContactById(this.props.match.params.id);case 2:t=e.sent,this.setState({contact:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact;return e&&Object(m.jsxs)("div",{className:"contact-detail-page",children:[Object(m.jsx)(d.b,{to:"/contact",className:"btn standard back",children:"\u2190 Back"}),Object(m.jsxs)("div",{className:"contact-info",children:[Object(m.jsx)("img",{src:"https://i.pravatar.cc/150?u=".concat(e._id),alt:""}),Object(m.jsx)("h2",{children:e.name}),Object(m.jsx)("h3",{children:e.phone}),Object(m.jsx)("h3",{children:e.email})]}),Object(m.jsxs)("div",{className:"btn-container",children:[Object(m.jsx)("button",{onClick:this.onRemoveContact,className:"btn alert",children:"Delete"}),Object(m.jsx)(d.b,{to:"/contact/edit/"+e._id,className:"btn standard",children:"Edit"})]})]})}}]),n}(a.Component)),A=(n(72),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e.contactId=null,e.setContact=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N.getContactById(e.props.match.params.id);case 3:t.t1=t.sent,t.t2={contact:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}}),t)}))),e.onHandleChange=function(t){var n=t.target,a=Object(L.a)({},e.state.contact);console.log("contact:"),a[n.name]=n.value,e.setState({contact:a})},e.onSaveContact=function(t){t.preventDefault(),N.saveContact(e.state.contact),e.props.history.push(e.props.match.params.id?"/contact/"+e.props.match.params.id:"/contact/")},e.onCloseContact=function(){},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.match.params.id?this.setContact():this.setState({contact:N.getEmptyContact()})}},{key:"render",value:function(){var e=this.state.contact;return e&&Object(m.jsxs)("form",{onSubmit:this.onSaveContact,className:"contact-edit",children:[Object(m.jsx)(d.b,{to:this.props.match.params.id?"/contact/"+this.props.match.params.id:"/contact/",className:"btn standard back",children:"\u2190 Back"}),Object(m.jsxs)("label",{htmlFor:"name",children:["Name:",Object(m.jsx)("input",{type:"text",value:e.name,id:"name",name:"name",onChange:this.onHandleChange,required:!0})]}),Object(m.jsxs)("label",{htmlFor:"phone",children:["Phone:",Object(m.jsx)("input",{type:"text",id:"phone",name:"phone",value:e.phone,onChange:this.onHandleChange,required:!0})]}),Object(m.jsxs)("label",{htmlFor:"email",children:["Email:",Object(m.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:this.onHandleChange,required:!0})]}),Object(m.jsx)("button",{className:"btn standard",children:"Save"})]})}}]),n}(a.Component)),D=(n(73),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:null},e.loadContacts=Object(b.a)(j.a.mark((function t(){var n,a,c=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:null,t.next=3,N.getContacts(n);case 3:a=t.sent,e.setState({contacts:a});case 5:case"end":return t.stop()}}),t)}))),e.onChangeFilter=function(t){e.loadContacts(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"render",value:function(){var e=this.state.contacts;return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{component:A,path:"/contact/edit/:id?"}),Object(m.jsx)(h.a,{exact:!0,component:R,path:"/contact/:id"}),Object(m.jsx)(h.a,{exact:!0,component:F,contacts:e,path:"/contact/"})]})}}]),n}(a.Component)),T=n(17);n(74);function B(e){var t=e.data,n=e.title;return t&&Object(m.jsxs)("div",{className:"chart",children:[Object(m.jsx)("h3",{children:n}),Object(m.jsxs)(T.Sparklines,{data:t,width:200,children:[Object(m.jsx)(T.SparklinesLine,{style:{stroke:"orange",fill:"none"}}),Object(m.jsx)(T.SparklinesSpots,{style:{stroke:"darkRed",fill:"darkRed"}}),Object(m.jsx)(T.SparklinesNormalBand,{height:"200",style:{fill:"darkOrange",fillOpacity:.1}})]})]})}n(75);var H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={marketPrice:null,confirmedTransactions:null},e.setMarketPrices=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getMarketPrice();case 2:n=t.sent,e.setState({marketPrice:n.values.map((function(e){return""+e.y}))});case 4:case"end":return t.stop()}}),t)}))),e.confirmedTransactions=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getConfirmedTransactions();case 2:n=t.sent,e.setState({confirmedTransactions:n.values.map((function(e){return""+e.y}))});case 4:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setMarketPrices(),this.confirmedTransactions();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.marketPrice,n=e.confirmedTransactions;return Object(m.jsxs)("div",{className:"statistic-page",children:[Object(m.jsx)("h2",{children:"Statistics"}),Object(m.jsxs)("div",{className:"chart-container",children:[t&&Object(m.jsx)(B,{data:t,title:"Market Price"}),n&&Object(m.jsx)(B,{data:n,title:"Confirmed Transactions"})]})]})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(d.a,{children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(p,{}),Object(m.jsx)("main",{className:"app-main",children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{component:D,path:"/contact"}),Object(m.jsx)(h.a,{component:H,path:"/statistic"}),Object(m.jsx)(h.a,{component:w,path:"/"})]})})]})})}}]),n}(a.Component);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f0bf2e6b.chunk.js.map