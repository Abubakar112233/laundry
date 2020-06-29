(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[(e.$store.state.user||e.$store.state.demo)&&e.$store.state.locale?n("home"):e._e(),e.$store.state.user||!e.$store.state.locale||e.$store.state.demo?e._e():n("login"),e.$store.state.locale?e._e():n("language")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",{staticClass:"primary"},[n("div",[n("plan-laundry",{attrs:{laundries:e.plannedLaundries}})],1),n("div",[n("finish-laundry",{attrs:{laundries:e.finishedLaundries}})],1)])},o=[],l=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-wrap primary justify-start"},[n("v-card",{staticClass:"white ma-2 pa-4",attrs:{elevation:"24",width:"100%"}},[n("span",{staticClass:"text-h5"},[e._v(" "+e._s(e.$t("planLaundry.title"))+" ")])]),n("div",{staticClass:"col-12 col-md-6 col-lg-4 col-xl-3 text-center",staticStyle:{margin:"16px"},style:e.$vuetify.breakpoint.mdAndUp?"":{width:"100%"}},[e.newLaundry?n("new-laundry",{staticStyle:{margin:"8px"},on:{create:e.createNewLaundry,cancel:function(t){e.newLaundry=!1}}}):e._e(),e.newLaundry?e._e():n("v-btn",{staticClass:"ma-4",attrs:{disabled:!e.$store.state.online,outlined:"",color:"white",width:"80%",height:"80%"},on:{click:function(t){e.newLaundry=!0}}},[n("v-icon",{attrs:{primary:""}},[e._v("mdi-plus")]),n("span",[e._v(e._s(e.$t("planLaundry.newLaundry")))])],1)],1),e._l(e.laundries,(function(e,t){return n("div",{key:t,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",staticStyle:{margin:"8px"}},[n("planned-laundry",{attrs:{laundry:e}})],1)}))],2)}),c=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"ma-2"},[n("v-card-text",[n("p",{staticClass:"text-h4 text--primary"},[e._v(" "+e._s(e.formatDate())+" ")]),n("p",{staticClass:"text-h5 text--primary"},[e._v(" "+e._s(e.laundry.category+", "+e.laundry.temperature+", ")+" "),n("v-icon",{attrs:{color:e.laundryReady?"green":"red"}},[e._v(" "+e._s(e.laundryReady?"mdi-check":"mdi-cancel")+" ")]),e._v(" "+e._s(e.laundryReady?e.$t("ready"):e.$t("notReady"))+" ")],1),n("div",{staticClass:"text-center text--primary ma-2"},[e._v(" "+e._s(e.$t("plannedLaundry.plannedBy",{mate:e.laundry.plannedBy}))+" ")]),n("div",{staticClass:"d-flex flex-wrap"},[e._l(e.laundry.participants,(function(t,a){return n("v-chip",{key:a,staticClass:"ma-1",attrs:{color:e.laundry.loaded.find((function(e){return t==e}))?"primary":""}},[e._v(" "+e._s(t)+" ")])})),e.laundry.participants.find((function(t){return e.$store.state.user==t}))&&!e.laundry.loaded.find((function(t){return t==e.$store.state.user}))?n("v-chip",{staticClass:"ma-1",attrs:{disabled:!e.$store.state.online||e.$store.state.demo,outlined:"",link:"",color:"primary"},on:{click:function(t){return e.loadLaundry()}}},[n("v-icon",[e._v("mdi-check")]),e._v(" "+e._s(e.$t("plannedLaundry.loaded"))+" ")],1):e._e(),e.laundry.participants.find((function(t){return e.$store.state.user==t}))||e.laundry.full?e._e():n("v-chip",{staticClass:"ma-1",attrs:{disabled:!e.$store.state.online||e.$store.state.demo,outlined:"",link:"",color:"primary"},on:{click:function(t){return e.participate()}}},[n("v-icon",[e._v("mdi-plus")]),n("span",[e._v(e._s(e.$t("plannedLaundry.participate")))])],1)],2)]),n("v-card-actions",[n("v-btn",{attrs:{disabled:!e.$store.state.online||e.$store.state.demo,dark:e.$store.state.online&&!e.$store.state.demo,color:"primary"},on:{click:function(t){return e.$store.dispatch("startLaundry",e.laundry)}}},[e._v(" "+e._s(e.$t("plannedLaundry.start"))+" ")]),e.laundry.full?e._e():n("v-btn",{attrs:{disabled:!e.$store.state.online||e.$store.state.demo,dark:e.$store.state.online&&!e.$store.state.demo,color:"secondary"},on:{click:function(t){return e.$store.dispatch("fillLaundry",e.laundry)}}},[e._v(" "+e._s(e.$t("plannedLaundry.full"))+" ")]),n("v-btn",{attrs:{disabled:!e.$store.state.online||e.$store.state.demo,dark:e.$store.state.online&&!e.$store.state.demo,color:"red"},on:{click:function(t){return e.$store.dispatch("deleteLaundry",e.laundry)}}},[e._v(" "+e._s(e.$t("delete"))+" ")])],1)],1)},u=[],p=(n("99af"),n("a15b"),{name:"planned-laundry-component",props:["laundry"],computed:{laundryReady:function(){return[].concat(this.laundry.participants).sort().join(",")===[].concat(this.laundry.loaded).sort().join(",")||this.laundry.full}},methods:{participate:function(){this.laundry.participants.push(this.$store.state.user),this.$store.dispatch("updateParticipants",this.laundry)},loadLaundry:function(){this.laundry.loaded.push(this.$store.state.user),this.$store.dispatch("updateLoaded",this.laundry)},formatDate:function(){var e=this.laundry.planned.toDate(),t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("de-DE",t)+" "+this.$t("oClock")}}}),m=p,f=n("2877"),y=n("6544"),h=n.n(y),v=n("8336"),g=n("b0af"),b=n("99d9"),_=n("cc20"),w=n("132d"),$=Object(f["a"])(m,d,u,!1,null,null,null),L=$.exports;h()($,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VChip:_["a"],VIcon:w["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"text-center"},[n("p",{staticClass:"text-h5"},[e._v(" "+e._s(e.$t("planLaundry.newLaundry"))+" ")]),n("div",{staticClass:"d-flex justify-center"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"col-5 ma-2",attrs:{dark:"",color:"primary"}},"v-btn",r,!1),a),[e._v(" "+e._s(e.laundry.planned?e.formatDate(e.laundry.planned):e.$t("newLaundry.chooseDate"))+" ")])]}}])},[n("v-date-picker",{model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1),n("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"col-5 ma-2",attrs:{dark:"",color:"primary"}},"v-btn",r,!1),a),[e._v(" "+e._s(e.laundry.planned?e.formatTime(e.laundry.planned):e.$t("newLaundry.chooseTime"))+" ")])]}}])},[n("v-time-picker",{model:{value:e.selectedTime,callback:function(t){e.selectedTime=t},expression:"selectedTime"}})],1)],1),n("v-select",{staticClass:"ma-3",attrs:{items:e.sortedCategories,rules:[e.categoryNotEmpty],label:e.$t("category"),"item-text":"name",filled:""},model:{value:e.laundry.category,callback:function(t){e.$set(e.laundry,"category",t)},expression:"laundry.category"}}),n("v-select",{staticClass:"ma-3",attrs:{items:e.sortedTemperatures,rules:[e.temperatureNotEmpty],label:e.$t("temperature"),filled:""},model:{value:e.laundry.temperature,callback:function(t){e.$set(e.laundry,"temperature",t)},expression:"laundry.temperature"}}),n("v-card-actions",[n("v-btn",{attrs:{disabled:!e.laundryValid||e.$store.state.demo,dark:e.laundryValid&&!e.$store.state.demo,color:"primary"},on:{click:function(t){return e.$emit("create",e.laundry)}}},[e._v(" "+e._s(e.$t("save"))+" ")]),n("v-btn",{attrs:{dark:"",color:"secondary"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)},C=[],k=(n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("c2a4")),M={name:"new-laundry",data:function(){return{selectedDate:null,selectedTime:null,laundry:{category:null,created:new Date,full:!1,plannedBy:this.$store.state.user,participants:[this.$store.state.user],loaded:[],started:!1,planned:null,temperature:null}}},beforeMount:function(){this.selectedTime=k.defaults.laundryStartTime},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("de-DE")},formatTime:function(e){return new Date(e).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})+" "+this.$t("oClock")},categoryNotEmpty:function(e){return!!e||this.$t("newLaundry.errMssg1")},temperatureNotEmpty:function(e){return!!e||this.$t("newLaundry.errMssg2")}},watch:{selectedDate:function(){var e=new Date;this.selectedTime&&(e.setHours(parseInt(this.selectedTime.split(":")[0])),e.setMinutes(parseInt(this.selectedTime.split(":")[1]))),e.setFullYear(parseInt(this.selectedDate.split("-")[0])),e.setMonth(parseInt(this.selectedDate.split("-")[1])-1),e.setDate(parseInt(this.selectedDate.split("-")[2])),this.laundry.planned=e},selectedTime:function(){var e=new Date;this.selectedDate&&(e.setFullYear(parseInt(this.selectedDate.split("-")[0])),e.setMonth(parseInt(this.selectedDate.split("-")[1])-1),e.setDate(parseInt(this.selectedDate.split("-")[2]))),e.setHours(parseInt(this.selectedTime.split(":")[0])),e.setMinutes(parseInt(this.selectedTime.split(":")[1])),this.laundry.planned=e}},computed:{laundryValid:function(){var e=this.laundry.planned&&"[object Date]"===Object.prototype.toString.call(this.laundry.planned);return e&&null!=this.laundry.category&&null!=this.laundry.temperature},sortedTemperatures:function(){var e=this,t=[].concat(this.$store.state.temperatures);return t.sort((function(e,t){return e.degree-t.degree})),t.map((function(t){return isNaN(t.degree)?e.$t("temperatures."+t.degree):t.degree+"°C"}))},sortedCategories:function(){var e=this,t=this.$store.state.categories.map((function(t){return e.$t("categories."+t.name)}));return t.sort((function(e,t){return e<t?-1:1})),t}}},D=M,V=n("2e4b"),j=n("e449"),O=n("b974"),S=n("c964"),T=Object(f["a"])(D,x,C,!1,null,null,null),N=T.exports;h()(T,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VDatePicker:V["a"],VMenu:j["a"],VSelect:O["a"],VTimePicker:S["a"]});n("96cf");var P=n("1da1"),A=n("59ca"),U=n.n(A);n("e71f"),n("741f");U.a.initializeApp(k.firebaseConfig);var I=U.a.messaging.isSupported()?U.a.messaging():null;I&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then((function(e){I.useServiceWorker(e)})).catch((function(e){console.log(e)}));var E=U.a.firestore();function R(e){var t={title:e.plannedBy+" planned Laundry: "+e.planned.toLocaleDateString("de-DE"),body:e.category+", "+e.temperature,icon:k.notifications.iconUrl},n={notification:t,to:k.notifications.topic};return JSON.stringify(n)}function B(){return H.apply(this,arguments)}function H(){return H=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(I){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,I.getToken();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function F(){I&&(q(),I.onTokenRefresh((function(){q()})))}U.a.firestore().enablePersistence();var W=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(I){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,I.requestPermission();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(I){e.next=2;break}return e.abrupt("return");case 2:return t=new XMLHttpRequest,e.t0=t,e.t1=k.notifications.subscriptionUrl,e.next=7,B();case 7:e.t2=e.sent,e.t3=e.t1+e.t2,e.t4=e.t3+"/rel",e.t5=k.notifications.topic,e.t6=e.t4+e.t5,e.t0.open.call(e.t0,"POST",e.t6,!0),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Authorization",k.notifications.server),t.send();case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=new XMLHttpRequest;t.open("POST",k.notifications.sendUrl,!0),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Authorization",k.notifications.server),t.send(R(e))},J={name:"plan-laundry",components:{PlannedLaundry:L,NewLaundry:N},props:["laundries"],data:function(){return{newLaundry:!1}},methods:{createNewLaundry:function(e){this.$store.dispatch("addLaundry",e),this.newLaundry=!1,z(e)}}},K=J,Y=Object(f["a"])(K,l,c,!1,null,null,null),G=Y.exports;h()(Y,{VBtn:v["a"],VCard:g["a"],VIcon:w["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-wrap primary justify-start"},[n("v-card",{staticClass:"white ma-2 pa-4",attrs:{elevation:"24",width:"100%"},on:{click:function(t){e.oldLaundriesHidden=!e.oldLaundriesHidden}}},[n("span",{staticClass:"text-h5"},[n("v-icon",{attrs:{color:"primary"}},[e._v(" "+e._s(e.oldLaundriesHidden?"mdi-arrow-up-drop-circle":"mdi-arrow-down-drop-circle")+" ")]),e._v(" "+e._s(" "+e.$t("finishLaundry.title"))+" ")],1)]),e._l(e.laundries,(function(t,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.oldLaundriesHidden,expression:"!oldLaundriesHidden"}],key:a,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",staticStyle:{margin:"8px"}},[n("finished-laundry",{attrs:{laundry:t}})],1)}))],2)},Q=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"ma-2"},[n("v-card-text",[n("p",{staticClass:"text-h4 text--primary"},[e._v(" "+e._s(e.formatDate())+" ")]),n("p",{staticClass:"text-h5 text--primary"},[e._v(" "+e._s(e.laundry.category+", "+e.laundry.temperature+", ")+" ")]),n("div",{staticClass:"text-center text--primary ma-2"},[e._v(" "+e._s(e.$t("plannedLaundry.plannedBy",{mate:e.laundry.plannedBy}))+" ")]),n("div",{staticClass:"d-flex flex-wrap"},e._l(e.laundry.participants,(function(t,a){return n("v-chip",{key:a,staticClass:"ma-1",attrs:{color:e.laundry.loaded.find((function(e){return t==e}))?"primary":""}},[e._v(" "+e._s(t)+" ")])})),1)])],1)},ee=[],te={name:"finished-laundry",props:["laundry"],methods:{formatDate:function(){var e=this.laundry.planned.toDate(),t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("de-DE",t)+" "+this.$t("oClock")}}},ne=te,ae=Object(f["a"])(ne,Z,ee,!1,null,null,null),re=ae.exports;h()(ae,{VCard:g["a"],VCardText:b["b"],VChip:_["a"]});var se={name:"finish-laundry",components:{FinishedLaundry:re},props:["laundries"],data:function(){return{oldLaundriesHidden:!0}}},ie=se,oe=Object(f["a"])(ie,X,Q,!1,null,null,null),le=oe.exports;h()(oe,{VCard:g["a"],VIcon:w["a"]});var ce={name:"home",components:{PlanLaundry:G,FinishLaundry:le},computed:{plannedLaundries:function(){return this.$store.state.laundries.filter((function(e){return!e.started})).sort((function(e,t){return e.planned.toDate()-t.planned.toDate()}))},finishedLaundries:function(){return this.$store.state.laundries.filter((function(e){return e.started})).sort((function(e,t){return t.planned.toDate()-e.planned.toDate()}))}}},de=ce,ue=n("f6c4"),pe=Object(f["a"])(de,i,o,!1,null,null,null),me=pe.exports;h()(pe,{VMain:ue["a"]});var fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("div",{staticClass:"d-flex justify-space-around align-center primary",staticStyle:{height:"100%"}},[n("div",{staticClass:"col-12 col-md-6 text-center"},[n("v-card",[n("v-card-text",[n("p",{staticClass:"display-1 text--primary"},[e._v(" "+e._s(e.$t("login.title",{name:e.selectedMate?e.selectedMate+"!":"..."}))+" ")]),n("div",{staticClass:"d-flex flex-wrap"},[e._l(e.$store.state.flatmates,(function(t,a){return n("v-btn",{key:a,staticClass:"col-5 col-md-3 ma-3",attrs:{outlined:t.name==e.selectedMate&&!e.newUser,color:"primary"},on:{click:function(n){return e.selectMate(t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),n("v-btn",{staticClass:"col-5 col-md-3 ma-3",attrs:{outlined:e.demoAccountName==e.selectedMate&&!e.newUser,color:"primary"},on:{click:function(t){return e.selectMate(e.demoAccountName)}}},[e._v(" "+e._s(e.demoAccountName)+" ")]),e.newUser?n("v-text-field",{staticClass:"col-5 col-md-3 ma-3",attrs:{rules:[e.stringValid,e.nameValid],label:e.$t("login.namePlaceholder")},model:{value:e.selectedMate,callback:function(t){e.selectedMate=t},expression:"selectedMate"}}):e._e(),e.newUser?e._e():n("v-btn",{staticClass:"col-7 col-md-3 ma-3",attrs:{outlined:"",color:"primary"},on:{click:function(t){e.newUser=!0}}},[n("v-icon",[e._v("mdi-plus")]),e._v(" "+e._s(e.$t("login.addUser"))+" ")],1)],2)]),n("v-card-actions",[n("v-btn",{attrs:{disabled:!e.userValid,dark:"",color:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.$t("continue"))+" ")]),n("v-btn",{attrs:{disabled:!e.selectedMate,dark:"",color:"secondary"},on:{click:function(t){return e.cancelNewUser()}}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)],1)])])},ye=[],he=(n("7db0"),n("5319"),k.cookiePrefix),ve={setUser:function(e){localStorage.setItem(he+"-user",e)},getUser:function(){return localStorage.getItem(he+"-user")},getLocale:function(){return localStorage.getItem(he+"-locale")},setLocale:function(e){localStorage.setItem(he+"-locale",e)},getPin:function(){return localStorage.getItem(he+"-pin")},setPin:function(e){localStorage.setItem(he+"-pin",e)}},ge={name:"login",data:function(){return{newUser:!1,selectedMate:null}},methods:{cancelNewUser:function(){this.newUser=!1,this.selectedMate=null},selectMate:function(e){this.selectedMate=e,this.newUser=!1},confirm:function(){this.selectedMate!==this.demoAccountName?(ve.setUser(this.selectedMate),this.$store.commit("login",this.selectedMate),this.newUser&&this.$store.dispatch("addUser",this.selectedMate)):this.$store.commit("enterDemo")},stringValid:function(e){return e&&e.replace(/\s/g,"").length>0||this.$t("login.errMssg1")},nameValid:function(e){return e?e===this.demoAccountName?this.$t("login.errMssg2"):!this.$store.state.flatmates.find((function(t){return t.name.toLowerCase().replace(/\s/g,"")==e.toLowerCase().replace(/\s/g,"")}))||this.$t("login.errMssg2"):this.$t("login.errMssg1")}},computed:{userValid:function(){return this.newUser?1==this.nameValid(this.selectedMate)&&1==this.stringValid(this.selectedMate):null!==this.selectedMate},demoAccountName:function(){return k.demoAccountName}}},be=ge,_e=n("8654"),we=Object(f["a"])(be,fe,ye,!1,null,null,null),$e=we.exports;h()(we,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VIcon:w["a"],VMain:ue["a"],VTextField:_e["a"]});var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("div",{staticClass:"d-flex justify-space-around align-center primary",staticStyle:{height:"100%"}},[n("div",{staticClass:"col-12 col-md-6 text-center"},[n("v-card",[n("v-card-text",[n("p",{staticClass:"display-1 text--primary"},[e._v(" "+e._s(e.$t("language.title",{language:e.selectedLocale?e.$t("language."+e.selectedLocale)+"!":"..."}))+" ")]),n("div",{staticClass:"d-flex flex-wrap"},e._l(e.$i18n.availableLocales,(function(t,a){return n("v-btn",{key:a,staticClass:"col-5 col-md-3 ma-3",attrs:{color:"primary"},on:{click:function(n){return e.selectLocale(t)}}},[n("flag",{attrs:{iso:e.flagMapping[t]}}),e._v(" "+e._s(e.$t("language."+t))+" ")],1)})),1)]),n("v-card-actions",[n("v-btn",{attrs:{disabled:!e.selectedLocale,dark:"",color:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.$t("continue"))+" ")])],1)],1)],1)])])},xe=[],Ce={name:"language",data:function(){return{selectedLocale:null,flagMapping:{de:"de",en:"gb"}}},methods:{selectLocale:function(e){this.$i18n.locale=e,this.selectedLocale=e},confirm:function(){ve.setLocale(this.selectedLocale),this.$store.commit("setLocale",this.selectedLocale)}}},ke=Ce,Me=Object(f["a"])(ke,Le,xe,!1,null,null,null),De=Me.exports;h()(Me,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VMain:ue["a"]});var Ve={name:"App",components:{Home:me,Login:$e,Language:De},beforeMount:function(){var e=this;window.addEventListener("offline",(function(){e.$store.commit("setOnline",!1)})),window.addEventListener("online",(function(){e.$store.commit("setOnline",!0)}))}},je=Ve,Oe=n("7496"),Se=Object(f["a"])(je,r,s,!1,null,null,null),Te=Se.exports;h()(Se,{VApp:Oe["a"]});var Ne=n("9483");Object(Ne["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Pe=n("5530"),Ae=n("2f62"),Ue=n("3317");a["a"].use(Ae["a"]);var Ie=new Ae["a"].Store({state:{user:null,locale:null,pin:!1,online:null,laundries:[],flatmates:[],categories:[],temperatures:[],demo:!1},mutations:Object(Pe["a"])({enterDemo:function(e){e.demo=!0},login:function(e,t){e.user=t},setLocale:function(e,t){e.locale=t},pinEntered:function(e,t){e.pin=t},setOnline:function(e,t){e.online=t}},Ue["b"]),actions:{bindFirestore:Object(Ue["a"])((function(e){var t=e.bindFirestoreRef;t("laundries",E.collection("laundries")),t("flatmates",E.collection("flatmates")),t("categories",E.collection("categories")),t("temperatures",E.collection("temperatures"))})),addLaundry:Object(Ue["a"])((function(e,t){return E.collection("laundries").add(t)})),addUser:Object(Ue["a"])((function(e,t){return E.collection("flatmates").add({name:t})})),deleteLaundry:Object(Ue["a"])((function(e,t){return E.collection("laundries").doc(t.id).delete()})),updateLoaded:Object(Ue["a"])((function(e,t){return E.collection("laundries").doc(t.id).update({loaded:t.loaded})})),updateParticipants:Object(Ue["a"])((function(e,t){return E.collection("laundries").doc(t.id).update({participants:t.participants})})),startLaundry:Object(Ue["a"])((function(e,t){return E.collection("laundries").doc(t.id).update({started:!0})})),fillLaundry:Object(Ue["a"])((function(e,t){return E.collection("laundries").doc(t.id).update({full:!0})}))},modules:{}}),Ee=n("f309");a["a"].use(Ee["a"]);var Re=new Ee["a"]({theme:{themes:{light:{primary:k.primaryColor}}}}),Be=n("a925"),He={category:"Kategorie",temperature:"Temperatur",continue:"Weiter",cancel:"Abbrechen",save:"Anlegen",oClock:"Uhr",delete:"Löschen",ready:"bereit",notReady:"nicht bereit",offline:{message:"Keine Internetverbindung. Bitte verbinde dich, um die App zu nutzen!"},login:{title:"Ich bin {name}",addUser:"Neuer Nutzer",namePlaceholder:"Mein Name ist ...",errMssg1:"Name darf nicht leer sein!",errMssg2:"Benutzer existiert bereits!"},language:{de:"Deutsch",en:"Englisch",title:"Ich spreche {language}"},planLaundry:{title:"Geplante Wäschen",newLaundry:"Neue Wäsche"},newLaundry:{errMssg1:"Bitte wähle eine Kategorie aus",errMssg2:"Bitte wähle eine Temperatur aus",chooseTime:"Wähle Zeit",chooseDate:"Wähle Datum"},plannedLaundry:{start:"Starten",full:"Voll",participate:"Teilnehmen",loaded:"Wäsche beladen",plannedBy:"Geplant von {mate}"},finishLaundry:{title:"Vergangene Wäschen"},pin:{title:"Gebe PIN für {mate} ein"},categories:{black:"Schwarz",dark:"Dunkel",light:"Hell",mixed:"Bunt",white:"Weiß"},temperatures:{cold:"Kalt"}},Fe={category:"Category",temperature:"Temperature",continue:"Continue",save:"Create",cancel:"Cancel",oClock:"oClock",delete:"Delete",ready:"ready",notReady:"not ready",offline:{message:"You are offline. Please connect to the internet to use this app!"},login:{title:"I am {name}",addUser:"Add user",namePlaceholder:"My name is ...",errMssg1:"Name must not be empty!",errMssg2:"User already exists!"},language:{de:"German",en:"English",title:"I speak {language}"},planLaundry:{title:"Planned laundries",newLaundry:"New Laundry"},newLaundry:{errMssg1:"Please choose a category",errMssg2:"Please choose a temperature",chooseTime:"Choose time",chooseDate:"Choose date"},plannedLaundry:{start:"Start",full:"Full",participate:"Participate",loaded:"Laundry loaded",plannedBy:"Planned by {mate}"},finishLaundry:{title:"Past Laundries"},pin:{title:"Enter PIN for {mate}"},categories:{black:"Black",dark:"Dark",light:"Light",mixed:"Mixed",white:"White"},temperatures:{cold:"Cold"}};a["a"].use(Be["a"]);var We={en:Fe,de:He},qe=new Be["a"]({locale:"de",fallbackLocale:"en",messages:We}),ze=qe,Je=n("d61f");a["a"].use(Je["a"]),a["a"].config.productionTip=!1,new a["a"]({store:Ie,i18n:ze,vuetify:Re,beforeCreate:function(){W(),F();var e=ve.getUser();e&&Ie.commit("login",e);var t=ve.getLocale();t&&(Ie.commit("setLocale",t),ze.locale=t),navigator.onLine?Ie.commit("setOnline",!0):Ie.commit("setOnline",!1),Ie.dispatch("bindFirestore")},render:function(e){return e(Te)}}).$mount("#app")},c2a4:function(e){e.exports=JSON.parse('{"demoAccountName":"Demo Account","defaults":{"laundryStartTime":"08:00"},"primaryColor":"#009587","cookiePrefix":"laundry","firebaseConfig":{"apiKey":"AIzaSyBRoAuc7UkTERIhYm5dJHHCXnY-b8jkMAE","authDomain":"wg-laundry.firebaseapp.com","databaseURL":"https://wg-laundry.firebaseio.com","projectId":"wg-laundry","storageBucket":"wg-laundry.appspot.com","messagingSenderId":"102605575389","appId":"1:102605575389:web:41b37a202a35a6ba2df734"},"notifications":{"topic":"/topics/newLaundry","iconUrl":"https://laundry.yannickspoerl.de/img/icons/favicon-32x32.png","subscriptionUrl":"https://iid.googleapis.com/iid/v1/","sendUrl":"https://fcm.googleapis.com/fcm/send","server":"key=AAAAF-PE1N0:APA91bFQ7HZNyhrI_n9OW3eeqfbNCsm_xDJmdH1X7JTbUlSE6JBn4sQG8-3Uqr3m8pr0tPFFd33bFYg2XHNiVUj6mNj4PDTTSKDC866CrJGyYobBFkvqEx4V1NopPRESmQbKoF5mRFBF"}}')}});
//# sourceMappingURL=app.8fc1f5dd.js.map