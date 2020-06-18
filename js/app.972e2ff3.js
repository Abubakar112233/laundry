(function(e){function t(t){for(var n,s,i=t[0],o=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[e.$store.state.user&&e.$store.state.locale&&e.$store.state.online?a("home"):e._e(),!e.$store.state.user&&e.$store.state.locale?a("login"):e._e(),e.$store.state.locale?e._e():a("language"),e.$store.state.online?e._e():a("offline")],1)},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",{staticClass:"primary"},[a("div",[a("plan-laundry",{attrs:{laundries:e.plannedLaundries}})],1),a("div",[a("finish-laundry",{attrs:{laundries:e.finishedLaundries}})],1)])},i=[],o=(a("4de4"),a("59ca")),c=a.n(o),d=(a("e71f"),a("c2a4")),u=d.firebaseConfig,p=c.a.initializeApp(u).firestore(),f={addUser:function(e){p.collection("flatmates").add({name:e})},addLaundry:function(e){p.collection("laundries").add(e)},deleteLaundry:function(e){p.collection("laundries").doc(e.id).delete()},fillLaundry:function(e){p.collection("laundries").doc(e.id).update({full:!0})},startLaundry:function(e){p.collection("laundries").doc(e.id).update({started:!0})},updateParticipants:function(e){p.collection("laundries").doc(e.id).update({participants:e.participants})},updateLoaded:function(e){p.collection("laundries").doc(e.id).update({loaded:e.loaded})}},m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-wrap primary"},[a("v-card",{staticClass:"white ma-2 pa-4",attrs:{elevation:"24",width:"100%"}},[a("span",{staticClass:"text-h5"},[e._v(" "+e._s(e.$t("planLaundry.title"))+" ")])]),a("div",{staticClass:"col-12 col-md-6 col-lg-4 col-xl-3 text-center",staticStyle:{margin:"16px"},style:e.$vuetify.breakpoint.mdAndUp?"":{width:"100%"}},[e.newLaundry?a("new-laundry",{staticStyle:{margin:"8px"},on:{create:e.createNewLaundry,cancel:function(t){e.newLaundry=!1}}}):e._e(),e.newLaundry?e._e():a("v-btn",{staticClass:"ma-4",attrs:{outlined:"",color:"white",width:"80%",height:"80%"},on:{click:function(t){e.newLaundry=!0}}},[a("v-icon",{attrs:{primary:""}},[e._v("mdi-plus")]),a("span",[e._v(e._s(e.$t("planLaundry.newLaundry")))])],1)],1),e._l(e.laundries,(function(e,t){return a("div",{key:t,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",staticStyle:{margin:"8px"}},[a("planned-laundry",{attrs:{laundry:e}})],1)}))],2)},y=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-2"},[a("v-card-text",[a("p",{staticClass:"text-h4 text--primary"},[e._v(" "+e._s(e.formatDate())+" ")]),a("p",{staticClass:"text-h5 text--primary"},[e._v(" "+e._s(e.laundry.category+", "+e.laundry.temperature+", ")+" "),a("v-icon",{attrs:{color:e.laundryReady?"green":"red"}},[e._v(" "+e._s(e.laundryReady?"mdi-check":"mdi-cancel")+" ")]),e._v(" "+e._s(e.laundryReady?e.$t("ready"):e.$t("notReady"))+" ")],1),a("div",{staticClass:"text-center text--primary ma-2"},[e._v(" "+e._s(e.$t("plannedLaundry.plannedBy",{mate:e.laundry.plannedBy}))+" ")]),a("div",{staticClass:"d-flex flex-wrap"},[e._l(e.laundry.participants,(function(t,n){return a("v-chip",{key:n,staticClass:"ma-1",attrs:{color:e.laundry.loaded.find((function(e){return t==e}))?"primary":""}},[e._v(" "+e._s(t)+" ")])})),e.laundry.participants.find((function(t){return e.$store.state.user==t}))&&!e.laundry.loaded.find((function(t){return t==e.$store.state.user}))?a("v-chip",{staticClass:"ma-1",attrs:{outlined:"",link:"",color:"primary"},on:{click:function(t){return e.loadLaundry()}}},[a("v-icon",[e._v("mdi-check")]),e._v(" "+e._s(e.$t("plannedLaundry.loaded"))+" ")],1):e._e(),e.laundry.participants.find((function(t){return e.$store.state.user==t}))||e.laundry.full?e._e():a("v-chip",{staticClass:"ma-1",attrs:{outlined:"",link:"",color:"primary"},on:{click:function(t){return e.participate()}}},[a("v-icon",[e._v("mdi-plus")]),a("span",[e._v(e._s(e.$t("plannedLaundry.participate")))])],1)],2)]),a("v-card-actions",[a("v-btn",{attrs:{dark:"",color:"primary"},on:{click:function(t){return e.startLaundry()}}},[e._v(" "+e._s(e.$t("plannedLaundry.start"))+" ")]),e.laundry.full?e._e():a("v-btn",{attrs:{dark:"",color:"secondary"},on:{click:function(t){return e.fillLaundry()}}},[e._v(" "+e._s(e.$t("plannedLaundry.full"))+" ")]),a("v-btn",{attrs:{dark:"",color:"red"},on:{click:function(t){return e.deleteLaundry()}}},[e._v(" "+e._s(e.$t("delete"))+" ")])],1)],1)},v=[],g=(a("99af"),a("a15b"),{name:"planned-laundry-component",props:["laundry"],computed:{laundryReady:function(){return[].concat(this.laundry.participants).sort().join(",")===[].concat(this.laundry.loaded).sort().join(",")||this.laundry.full}},methods:{startLaundry:function(){f.startLaundry(this.laundry)},fillLaundry:function(){f.fillLaundry(this.laundry)},participate:function(){this.laundry.participants.push(this.$store.state.user),f.updateParticipants(this.laundry)},loadLaundry:function(){this.laundry.loaded.push(this.$store.state.user),f.updateLoaded(this.laundry)},deleteLaundry:function(){f.deleteLaundry(this.laundry)},formatDate:function(){var e=this.laundry.planned.toDate(),t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("de-DE",t)+" "+this.$t("oClock")}}}),_=g,b=a("2877"),L=a("6544"),C=a.n(L),w=a("8336"),x=a("b0af"),$=a("99d9"),k=a("cc20"),M=a("132d"),V=Object(b["a"])(_,h,v,!1,null,null,null),D=V.exports;C()(V,{VBtn:w["a"],VCard:x["a"],VCardActions:$["a"],VCardText:$["b"],VChip:k["a"],VIcon:M["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"text-center"},[a("p",{staticClass:"text-h5"},[e._v(" "+e._s(e.$t("planLaundry.newLaundry"))+" ")]),a("div",{staticClass:"d-flex justify-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"col-5 ma-2",attrs:{dark:"",color:"primary"}},"v-btn",r,!1),n),[e._v(" "+e._s(e.laundry.planned?e.formatDate(e.laundry.planned):e.$t("newLaundry.chooseDate"))+" ")])]}}])},[a("v-date-picker",{model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1),a("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"col-5 ma-2",attrs:{dark:"",color:"primary"}},"v-btn",r,!1),n),[e._v(" "+e._s(e.laundry.planned?e.formatTime(e.laundry.planned):e.$t("newLaundry.chooseTime"))+" ")])]}}])},[a("v-time-picker",{model:{value:e.selectedTime,callback:function(t){e.selectedTime=t},expression:"selectedTime"}})],1)],1),a("v-select",{staticClass:"ma-3",attrs:{items:e.sortedCategories,rules:[e.categoryNotEmpty],label:e.$t("category"),"item-text":"name",filled:""},model:{value:e.laundry.category,callback:function(t){e.$set(e.laundry,"category",t)},expression:"laundry.category"}}),a("v-select",{staticClass:"ma-3",attrs:{items:e.sortedTemperatures,rules:[e.temperatureNotEmpty],label:e.$t("temperature"),filled:""},model:{value:e.laundry.temperature,callback:function(t){e.$set(e.laundry,"temperature",t)},expression:"laundry.temperature"}}),a("v-card-actions",[a("v-btn",{attrs:{disabled:!e.laundryValid,dark:"",color:"primary"},on:{click:function(t){return e.$emit("create",e.laundry)}}},[e._v(" "+e._s(e.$t("save"))+" ")]),a("v-btn",{attrs:{dark:"",color:"secondary"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)},S=[],j=(a("d81d"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),{name:"new-laundry",data:function(){return{selectedDate:null,selectedTime:null,categories:[],temperatures:[],laundry:{category:null,created:new Date,full:!1,plannedBy:this.$store.state.user,participants:[this.$store.state.user],loaded:[],started:!1,planned:null,temperature:null}}},beforeMount:function(){this.selectedTime=d.defaults.laundryStartTime},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("de-DE")},formatTime:function(e){return new Date(e).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})+" "+this.$t("oClock")},categoryNotEmpty:function(e){return!!e||this.$t("newLaundry.errMssg1")},temperatureNotEmpty:function(e){return!!e||this.$t("newLaundry.errMssg2")}},watch:{selectedDate:function(){var e=new Date;this.selectedTime&&(e.setHours(parseInt(this.selectedTime.split(":")[0])),e.setMinutes(parseInt(this.selectedTime.split(":")[1]))),e.setFullYear(parseInt(this.selectedDate.split("-")[0])),e.setMonth(parseInt(this.selectedDate.split("-")[1])-1),e.setDate(parseInt(this.selectedDate.split("-")[2])),this.laundry.planned=e},selectedTime:function(){var e=new Date;this.selectedDate&&(e.setFullYear(parseInt(this.selectedDate.split("-")[0])),e.setMonth(parseInt(this.selectedDate.split("-")[1])-1),e.setDate(parseInt(this.selectedDate.split("-")[2]))),e.setHours(parseInt(this.selectedTime.split(":")[0])),e.setMinutes(parseInt(this.selectedTime.split(":")[1])),this.laundry.planned=e}},computed:{laundryValid:function(){var e=this.laundry.planned&&"[object Date]"===Object.prototype.toString.call(this.laundry.planned);return e&&null!=this.laundry.category&&null!=this.laundry.temperature},sortedTemperatures:function(){var e=[].concat(this.temperatures);return e.sort((function(e,t){return e.degree-t.degree})),e.map((function(e){return isNaN(e.degree)?e.degree:e.degree+"°C"}))},sortedCategories:function(){var e=[].concat(this.categories);return e.sort((function(e,t){return e.name<t.name?-1:1})),e}},firestore:{categories:p.collection("categories"),temperatures:p.collection("temperatures")}}),I=j,O=a("2e4b"),P=a("e449"),E=a("b974"),U=a("c964"),N=Object(b["a"])(I,T,S,!1,null,null,null),B=N.exports;C()(N,{VBtn:w["a"],VCard:x["a"],VCardActions:$["a"],VDatePicker:O["a"],VMenu:P["a"],VSelect:E["a"],VTimePicker:U["a"]});var A={name:"plan-laundry",components:{PlannedLaundry:D,NewLaundry:B},props:["laundries"],data:function(){return{newLaundry:!1}},methods:{createNewLaundry:function(e){f.addLaundry(e),this.newLaundry=!1}}},R=A,F=Object(b["a"])(R,m,y,!1,null,null,null),W=F.exports;C()(F,{VBtn:w["a"],VCard:x["a"],VIcon:M["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-wrap primary"},[a("v-card",{staticClass:"white ma-2 pa-4",attrs:{elevation:"24",width:"100%"}},[a("span",{staticClass:"text-h5"},[e._v(" "+e._s(e.$t("finishLaundry.title"))+" ")])]),e._l(e.laundries,(function(e,t){return a("div",{key:t,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",staticStyle:{margin:"8px"}},[a("finished-laundry",{attrs:{laundry:e}})],1)}))],2)},H=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-2"},[a("v-card-text",[a("p",{staticClass:"text-h4 text--primary"},[e._v(" "+e._s(e.formatDate())+" ")]),a("p",{staticClass:"text-h5 text--primary"},[e._v(" "+e._s(e.laundry.category+", "+e.laundry.temperature+", ")+" ")]),a("div",{staticClass:"text-center text--primary ma-2"},[e._v(" "+e._s(e.$t("plannedLaundry.plannedBy",{mate:e.laundry.plannedBy}))+" ")]),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.laundry.participants,(function(t,n){return a("v-chip",{key:n,staticClass:"ma-1",attrs:{color:e.laundry.loaded.find((function(e){return t==e}))?"primary":""}},[e._v(" "+e._s(t)+" ")])})),1)])],1)},G=[],J={name:"finished-laundry",props:["laundry"],methods:{formatDate:function(){var e=this.laundry.planned.toDate(),t={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("de-DE",t)+" "+this.$t("oClock")}}},K=J,q=Object(b["a"])(K,Y,G,!1,null,null,null),X=q.exports;C()(q,{VCard:x["a"],VCardText:$["b"],VChip:k["a"]});var Z={name:"finish-laundry",components:{FinishedLaundry:X},props:["laundries"]},Q=Z,ee=Object(b["a"])(Q,z,H,!1,null,null,null),te=ee.exports;C()(ee,{VCard:x["a"]});var ae={name:"home",components:{PlanLaundry:W,FinishLaundry:te},data:function(){return{laundries:[]}},computed:{plannedLaundries:function(){return this.laundries.filter((function(e){return!e.started})).sort((function(e,t){return e.planned.toDate()-t.planned.toDate()}))},finishedLaundries:function(){return this.laundries.filter((function(e){return e.started})).sort((function(e,t){return t.planned.toDate()-e.planned.toDate()}))}},firestore:{categories:p.collection("categories"),flatmates:p.collection("flatmates"),laundries:p.collection("laundries"),temperatures:p.collection("temperatures")}},ne=ae,re=a("f6c4"),le=Object(b["a"])(ne,s,i,!1,null,null,null),se=le.exports;C()(le,{VMain:re["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("div",{staticClass:"d-flex justify-space-around align-center primary",staticStyle:{height:"100%"}},[a("div",{staticClass:"col-12 col-md-6 text-center"},[a("v-card",[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[e._v(" "+e._s(e.$t("login.title",{name:e.selectedMate?e.selectedMate+"!":"..."}))+" ")]),a("div",{staticClass:"d-flex flex-wrap"},[e._l(e.flatmates,(function(t,n){return a("v-btn",{key:n,staticClass:"col-5 col-md-3 ma-3",attrs:{outlined:t.name==e.selectedMate&&!e.newUser,color:"primary"},on:{click:function(a){return e.selectMate(t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),e.newUser?a("v-text-field",{staticClass:"col-5 col-md-3 ma-3",attrs:{rules:[e.stringValid,e.nameValid],label:e.$t("login.namePlaceholder")},model:{value:e.selectedMate,callback:function(t){e.selectedMate=t},expression:"selectedMate"}}):e._e(),e.newUser?e._e():a("v-btn",{staticClass:"col-7 col-md-3 ma-3",attrs:{outlined:"",color:"primary"},on:{click:function(t){e.newUser=!0}}},[a("v-icon",[e._v("mdi-plus")]),e._v(" "+e._s(e.$t("login.addUser"))+" ")],1)],2)]),a("v-card-actions",[a("v-btn",{attrs:{disabled:!e.userValid,dark:"",color:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.$t("continue"))+" ")]),a("v-btn",{attrs:{disabled:!e.selectedMate,dark:"",color:"secondary"},on:{click:function(t){return e.cancelNewUser()}}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)],1)])])},oe=[],ce=(a("7db0"),a("5319"),d.cookiePrefix),de={setUser:function(e){localStorage.setItem(ce+"-user",e)},getUser:function(){return localStorage.getItem(ce+"-user")},getLocale:function(){return localStorage.getItem(ce+"-locale")},setLocale:function(e){localStorage.setItem(ce+"-locale",e)},getPin:function(){return localStorage.getItem(ce+"-pin")},setPin:function(e){localStorage.setItem(ce+"-pin",e)}},ue={name:"login",data:function(){return{newUser:!1,selectedMate:null,flatmates:[]}},methods:{cancelNewUser:function(){this.newUser=!1,this.selectedMate=null},selectMate:function(e){this.selectedMate=e,this.newUser=!1},confirm:function(){de.setUser(this.selectedMate),this.$store.commit("login",this.selectedMate),this.newUser&&f.addUser(this.selectedMate)},stringValid:function(e){return e&&e.replace(/\s/g,"").length>0||this.$t("login.errMssg1")},nameValid:function(e){return e?!this.flatmates.find((function(t){return t.name.toLowerCase().replace(/\s/g,"")==e.toLowerCase().replace(/\s/g,"")}))||this.$t("login.errMssg2"):this.$t("login.errMssg1")}},computed:{userValid:function(){return this.newUser?1==this.nameValid(this.selectedMate)&&1==this.stringValid(this.selectedMate):null!==this.selectedMate}},firestore:{flatmates:p.collection("flatmates")}},pe=ue,fe=a("8654"),me=Object(b["a"])(pe,ie,oe,!1,null,null,null),ye=me.exports;C()(me,{VBtn:w["a"],VCard:x["a"],VCardActions:$["a"],VCardText:$["b"],VIcon:M["a"],VMain:re["a"],VTextField:fe["a"]});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("div",{staticClass:"d-flex justify-space-around align-center primary",staticStyle:{height:"100%"}},[a("div",{staticClass:"col-12 col-md-6 text-center"},[a("v-card",[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[e._v(" "+e._s(e.$t("language.title",{language:e.selectedLocale?e.$t("language."+e.selectedLocale)+"!":"..."}))+" ")]),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.$i18n.availableLocales,(function(t,n){return a("v-btn",{key:n,staticClass:"col-5 col-md-3 ma-3",attrs:{color:"primary"},on:{click:function(a){return e.selectLocale(t)}}},[a("flag",{attrs:{iso:e.flagMapping[t]}}),e._v(" "+e._s(e.$t("language."+t))+" ")],1)})),1)]),a("v-card-actions",[a("v-btn",{attrs:{disabled:!e.selectedLocale,dark:"",color:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.$t("continue"))+" ")])],1)],1)],1)])])},ve=[],ge={name:"language",data:function(){return{selectedLocale:null,flagMapping:{de:"de",en:"gb"}}},methods:{selectLocale:function(e){this.$i18n.locale=e,this.selectedLocale=e},confirm:function(){de.setLocale(this.selectedLocale),this.$store.commit("setLocale",this.selectedLocale)}}},_e=ge,be=Object(b["a"])(_e,he,ve,!1,null,null,null),Le=be.exports;C()(be,{VBtn:w["a"],VCard:x["a"],VCardActions:$["a"],VCardText:$["b"],VMain:re["a"]});var Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("div",{staticClass:"d-flex justify-space-around align-center primary",staticStyle:{height:"100%"}},[a("div",{staticClass:"col-12 col-md-6 text-center"},[a("v-card",[a("v-card-text",[a("p",{staticClass:"text-h5 text--primary"},[e._v(" "+e._s(e.$t("offline.message"))+" ")])])],1)],1)])])},we=[],xe={name:"offline"},$e=xe,ke=Object(b["a"])($e,Ce,we,!1,null,null,null),Me=ke.exports;C()(ke,{VCard:x["a"],VCardText:$["b"],VMain:re["a"]});var Ve={name:"App",components:{Home:se,Login:ye,Language:Le,Offline:Me},beforeMount:function(){var e=this;window.addEventListener("offline",(function(){e.$store.commit("setOnline",!1)})),window.addEventListener("online",(function(){e.$store.commit("setOnline",!0)}))}},De=Ve,Te=a("7496"),Se=Object(b["a"])(De,r,l,!1,null,null,null),je=Se.exports;C()(Se,{VApp:Te["a"]});var Ie=a("9483");Object(Ie["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Oe=a("2f62");n["a"].use(Oe["a"]);var Pe=new Oe["a"].Store({state:{user:null,locale:null,pin:!1,online:null},mutations:{login:function(e,t){e.user=t},setLocale:function(e,t){e.locale=t},pinEntered:function(e,t){e.pin=t},setOnline:function(e,t){e.online=t}},actions:{},modules:{}}),Ee=a("f309");n["a"].use(Ee["a"]);var Ue=new Ee["a"]({theme:{themes:{light:{primary:d.primaryColor}}}}),Ne=a("a925"),Be={category:"Kategorie",temperature:"Temperatur",continue:"Weiter",cancel:"Abbrechen",save:"Anlegen",oClock:"Uhr",delete:"Löschen",ready:"bereit",notReady:"nicht bereit",offline:{message:"Keine Internetverbindung. Bitte verbinde dich, um die App zu nutzen!"},login:{title:"Ich bin {name}",addUser:"Neuer Nutzer",namePlaceholder:"Mein Name ist ...",errMssg1:"Name darf nicht leer sein!",errMssg2:"Benutzer existiert bereits!"},language:{de:"Deutsch",en:"Englisch",title:"Ich spreche {language}"},planLaundry:{title:"Geplante Wäschen",newLaundry:"Neue Wäsche"},newLaundry:{errMssg1:"Bitte wähle eine Kategorie aus",errMssg2:"Bitte wähle eine Temperatur aus",chooseTime:"Wähle Zeit",chooseDate:"Wähle Datum"},plannedLaundry:{start:"Starten",full:"Voll",participate:"Teilnehmen",loaded:"Wäsche beladen",plannedBy:"Geplant von {mate}"},finishLaundry:{title:"Vergangene Wäschen"},pin:{title:"Gebe PIN für {mate} ein"}},Ae={category:"Category",temperature:"Temperature",continue:"Continue",save:"Create",cancel:"Cancel",oClock:"oClock",delete:"Delete",ready:"ready",notReady:"not ready",offline:{message:"You are offline. Please connect to the internet to use this app!"},login:{title:"I am {name}",addUser:"Add user",namePlaceholder:"My name is ...",errMssg1:"Name must not be empty!",errMssg2:"User already exists!"},language:{de:"German",en:"English",title:"I speak {language}"},planLaundry:{title:"Planned laundries",newLaundry:"New Laundry"},newLaundry:{errMssg1:"Please choose a category",errMssg2:"Please choose a temperature",chooseTime:"Choose time",chooseDate:"Choose date"},plannedLaundry:{start:"Start",full:"Full",participate:"Participate",loaded:"Laundry loaded",plannedBy:"Planned by {mate}"},finishLaundry:{title:"Past Laundries"},pin:{title:"Enter PIN for {mate}"}};n["a"].use(Ne["a"]);var Re={en:Ae,de:Be},Fe=new Ne["a"]({locale:"de",fallbackLocale:"en",messages:Re}),We=Fe,ze=a("d61f"),He=a("0ff2");n["a"].use(ze["a"]),n["a"].use(He["a"]),n["a"].config.productionTip=!1,new n["a"]({store:Pe,i18n:We,vuetify:Ue,beforeCreate:function(){var e=de.getUser();e&&Pe.commit("login",e);var t=de.getLocale();t&&(Pe.commit("setLocale",t),We.locale=t),navigator.onLine?Pe.commit("setOnline",!0):Pe.commit("setOnline",!1)},render:function(e){return e(je)}}).$mount("#app")},c2a4:function(e){e.exports=JSON.parse('{"defaults":{"laundryStartTime":"08:00"},"primaryColor":"#009587","cookiePrefix":"laundry","firebaseConfig":{"apiKey":"AIzaSyBRoAuc7UkTERIhYm5dJHHCXnY-b8jkMAE","authDomain":"wg-laundry.firebaseapp.com","databaseURL":"https://wg-laundry.firebaseio.com","projectId":"wg-laundry","storageBucket":"wg-laundry.appspot.com","messagingSenderId":"102605575389","appId":"1:102605575389:web:41b37a202a35a6ba2df734"}}')}});
//# sourceMappingURL=app.972e2ff3.js.map