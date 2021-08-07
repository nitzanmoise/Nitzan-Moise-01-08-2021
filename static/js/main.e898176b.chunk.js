(this.webpackJsonpheroweather=this.webpackJsonpheroweather||[]).push([[0],{73:function(e,t,r){},77:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(21),i=r.n(n),o=(r(73),r(22)),s=r(16),l=(r(77),r(101)),j=r(102),u=r(103),h=r(20),d=r(99),b=r(2),O=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},barWeapper:{display:"flex",justifyContent:"space-between"}}})),f=function(){var e=O();return Object(b.jsx)("div",{className:"NavBar",children:Object(b.jsx)(l.a,{position:"static",children:Object(b.jsxs)(j.a,{className:e.barWeapper,children:[Object(b.jsx)("h3",{children:"Heoloweather"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{to:"/weather",children:Object(b.jsx)(u.a,{children:"Weather"})}),Object(b.jsx)(h.b,{to:"/favorites",children:Object(b.jsx)(u.a,{children:"Favorites"})})]})]})})})},m=r(107),x="FETCH_USERS_REQUEST",y="FETCH_USERS_SUCCESS",p="FETCH_USERS_FAILURE",v="FETCH_CITY_REQUEST",g="FETCH_CITY_SUCCESS",w="FETCH_CITY_FAILURE",S="FETCH_WEEEKLY_REQUEST",C="FETCH_WEEKLY_SUCCESS",E="FETCH_WEEKLY_FAILURE",T="UPDATE_CURRENT_LOCATION",N="ADD_TO_FAVORITES",F="REMOVE_FROM_FAVORITES",W="gHA6iqGvA52XLn2GWhVSUTrPWIMmHqzB",k=function(e){var t="?apikey=".concat(W,"&q=").concat(e);return function(r){r(R()),fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete"+t).then((function(e){return e.json()})).then((function(e){var t=e[0],c=JSON.stringify(t);localStorage.setItem("city",c),r(U(t)),r(_(t.Key))})).catch((function(t){r(A(t.message)),r(_(e.Key))}))}},_=function(e){var t="".concat(e,"?apikey=").concat(W);return function(r){r(L()),fetch("http://dataservice.accuweather.com/currentconditions/v1/"+t).then((function(e){return e.json()})).then((function(t){var c=t[0],a=JSON.stringify(c);localStorage.setItem("weather",a),r(M(c)),r(I(e))})).catch((function(t){r(B(e)),r(I(e))}))}},I=function(e){var t="".concat(e,"?apikey=").concat(W);return function(e){e(H()),fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+t).then((function(e){return e.json()})).then((function(t){var r=JSON.stringify(t);localStorage.setItem("weekly",r),e(D(t)),e(K())})).catch((function(t){e(z(t.message)),e(K())}))}},R=function(){return{type:v}},U=function(e){return{type:g,payload:e}},A=function(e){var t=JSON.parse(localStorage.getItem("city"));return{type:w,payload:t}},L=function(){return{type:x}},M=function(e){return{type:y,payload:e}},B=function(e){var t=JSON.parse(localStorage.getItem("weather"));return _(e),{type:p,payload:t}},H=function(){return{type:S}},D=function(e){return{type:C,payload:e}},z=function(e){var t=JSON.parse(localStorage.getItem("weekly"));return{type:E,payload:t}},K=function(){return{type:T}},J=function(e){return{type:F,payload:e}},V=r(25),Y=r.n(V),G=r(104),q=r(105),Q=r(106),P=Object(d.a)({root:{minWidth:105,width:"150px",margin:"10px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var X=function(e){var t=e.day,r=e.index,a=P(),n=Object(c.useState)(""),i=Object(s.a)(n,2),o=i[0],l=i[1],j=Object(c.useState)(!0),h=Object(s.a)(j,2),d=h[0],O=h[1],f=Object(c.useState)(""),m=Object(s.a)(f,2),x=m[0],y=m[1],p=["Monday","Tuesday","Wednesday","Thursday","Friday"],v=function(e){return Math.floor(5*(e-32)/9)};return Object(c.useEffect)((function(){var e=t.Temperature.Maximum.Value,c=p.filter((function(e,t){return t===r}));l(v(e)),y(c)}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(G.a,{className:a.root,children:Object(b.jsxs)(q.a,{children:[Object(b.jsx)(Q.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:x}),Object(b.jsxs)(Q.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:[o,d?"C":"F"]}),Object(b.jsx)(u.a,{onClick:function(){var e;d?(l((e=o,Math.floor(9*e/5+32))),O(!1)):(l(v(o)),O(!0))},color:"primary",children:d?"Ferenite":"Celsius"})]})})})};var Z=Object(o.b)((function(e){return{wetherData:e.weather}}),(function(e){return{fetchCity:function(t){return e(k(t))},addToFavorites:function(t){return e(function(e){return{type:N,payload:e}}(t))},removeFromFavorites:function(t){return e(J(t))}}}))((function(e){var t=e.wetherData,r=e.addToFavorites,a=e.removeFromFavorites,n=Object(c.useState)(!1),i=Object(s.a)(n,2),o=i[0],l=i[1];return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:Object(b.jsxs)("div",{className:"weather-panal",children:[Object(b.jsxs)("header",{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{children:t.location.city.LocalizedName}),Object(b.jsxs)("p",{children:[t.location.currWeather.Temperature.Metric.Value,t.location.currWeather.Temperature.Metric.Unit]})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)(Y.a,{style:{color:o?"gold":"black"},className:"heart"}),Object(b.jsx)(u.a,{onClick:function(){o?(l(!1),a(t.location)):(l(!0),r(t.location))},size:"medium",children:o?"Remove from favorites":"Add to favorites"})]})]}),Object(b.jsx)("h1",{children:t.location.currWeather.WeatherText}),Object(b.jsx)("div",{className:"daily-list",children:Object(b.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:t.location.weeklyWeather.DailyForecasts.map((function(e,t){return Object(b.jsx)(X,{day:e,index:t},t)}))})})]})})})})),$=r(55),ee=r.n($);var te=Object(o.b)((function(e){return{wetherData:e.weather}}),(function(e){return{fetchCity:function(t){return e(k(t))}}}))((function(e){var t=e.fetchCity,r=e.wetherData,a=Object(c.useState)(""),n=Object(s.a)(a,2),i=n[0],o=n[1];function l(e){var r=e.target.value;r=r.replace(/[^A-Za-z]/gi,""),o(r),t(e.target.value)}return Object(c.useEffect)((function(){""===r.city.Key&&t("Tel Aviv")})),Object(b.jsxs)("div",{className:"Weather",children:[Object(b.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(b.jsx)(m.a,{item:!0,xs:12,children:Object(b.jsx)("h1",{className:"weather-title",children:"Search for locations"})}),Object(b.jsxs)(m.a,{item:!0,xs:12,children:[Object(b.jsx)("input",{type:"text",placeholder:"Search..",name:"search",value:i,onChange:l}),Object(b.jsx)("button",{onClick:l,children:Object(b.jsx)(ee.a,{className:"search"})})]})]})," ",Object(b.jsx)(Z,{})]})})),re=r(108),ce=r(56),ae=r.n(ce),ne=Object(d.a)({root:{minWidth:175,width:100,margin:"10px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var ie=Object(o.b)((function(e){return{wetherData:e.weather}}),(function(e){return{removeFromFavorites:function(t){return e(J(t))},fetchCity:function(t){return e(k(t))}}}))((function(e){var t=e.wetherData,r=e.removeFromFavorites,c=ne();return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:t.favorites.length>0&&t.favorites.map((function(e,t){return Object(b.jsxs)(G.a,{className:c.root,children:[Object(b.jsxs)("div",{className:"fav-header",children:[Object(b.jsx)(Y.a,{className:"heart"}),Object(b.jsx)(h.b,{className:"arrow-link",to:"/weather",children:Object(b.jsx)(ae.a,{onClick:function(){return function(e){k(e.city.LocalizedName)}(e)}})})]}),Object(b.jsxs)(q.a,{children:[Object(b.jsxs)(Q.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:["City: ",e.city.LocalizedName]}),Object(b.jsxs)(Q.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:["Id: ",e.id]}),Object(b.jsxs)(Q.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:["Temperature: ",e.currWeather.Temperature.Metric.Value," ",e.currWeather.Temperature.Metric.Unit]})]}),Object(b.jsx)(re.a,{children:Object(b.jsx)(u.a,{onClick:function(){return function(e){r(e),console.log("in remove loc")}(e)},size:"medium",children:"Remove from favorites"})})]},t)}))})})}));var oe=function(){return Object(b.jsxs)("div",{className:"Favorites",children:[Object(b.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:Object(b.jsx)(m.a,{item:!0,xs:12,children:Object(b.jsx)("h1",{children:"Favorites"})})}),Object(b.jsx)(ie,{})]})},se=r(8),le=r(109),je=r(110),ue=r(57),he=r.n(ue),de=Object(d.a)({root:{width:"100%",background:"#3f51b5",marginTop:"170px",position:"fixed",bottom:0},link:{color:"white",background:"none"}});var be=function(){var e=de(),t=a.a.useState(0),r=Object(s.a)(t,2),c=r[0],n=r[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(se.d,{children:[Object(b.jsx)(se.b,{path:"/weather",children:Object(b.jsx)(te,{})}),Object(b.jsx)(se.b,{path:"/favorites",children:Object(b.jsx)(oe,{})}),Object(b.jsx)(se.b,{exact:!0,path:"/",children:Object(b.jsx)(se.a,{to:"/weather"})})]}),Object(b.jsxs)(le.a,{value:c,onChange:function(e,t){n(t)},showLabels:!0,className:e.root,children:[Object(b.jsx)(h.b,{to:"/weather",children:Object(b.jsx)(je.a,{className:e.link,icon:Object(b.jsx)(he.a,{}),inkBarStyle:{background:"white"}})}),Object(b.jsx)(h.b,{to:"/favorites",children:Object(b.jsx)(je.a,{className:e.link,icon:Object(b.jsx)(Y.a,{})})})]})," "]})})},Oe=r(33),fe=r(49),me=r(7),xe={loading:!1,city:{Key:""},location:{city:{Key:"",LocalizedName:""},currWeather:{WeatherText:"",Temperature:{Metric:{Value:"",Unit:""}}},weeklyWeather:{DailyForecasts:[]},id:""},currWeather:{},weeklyWeather:{},favorites:[],error:""},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case g:return Object(me.a)(Object(me.a)({},e),{},{city:t.payload});case w:return Object(me.a)(Object(me.a)({loading:!1},e),{},{city:t.payload,error:"error"});case x:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case y:return Object(me.a)(Object(me.a)({},e),{},{currWeather:t.payload});case p:return Object(me.a)(Object(me.a)({},e),{},{currWeather:t.payload,error:"error"});case S:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case C:return Object(me.a)(Object(me.a)({},e),{},{weeklyWeather:t.payload});case E:return Object(me.a)(Object(me.a)({},e),{},{weeklyWeather:t.payload,error:"error"});case T:return Object(me.a)(Object(me.a)({},e),{},{location:{city:e.city,currWeather:e.currWeather,weeklyWeather:e.weeklyWeather,id:e.city.Key}});case N:return Object(me.a)(Object(me.a)({},e),{},{favorites:[].concat(Object(fe.a)(e.favorites),[t.payload])});case F:return Object(me.a)(Object(me.a)({},e),{},{favorites:Object(fe.a)(e.favorites.filter((function(e){return e.id!==t.payload.id})))});default:return e}},pe=Object(Oe.b)({weather:ye}),ve=r(58),ge=Object(Oe.c)(pe,Object(Oe.a)(ve.a));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{store:ge,children:Object(b.jsx)(be,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.e898176b.chunk.js.map