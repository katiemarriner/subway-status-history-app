webpackJsonp([2],{MfgY:function(e,t){},NHnr:function(e,t,r){"use strict";function n(e){r("WXaH")}function o(e){r("fyY2")}function a(e){r("zJEp")}function s(e){r("oq+B")}function l(e){r("MfgY")}Object.defineProperty(t,"__esModule",{value:!0});var u=r("7+uW"),i=r("sch3"),c=r.n(i),d=r("e2PK"),_=r.n(d),p=r("U6bP"),h=r.n(p),y={name:"AppHeader"},m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"header-content"},[e._v("\n    Subway Status History\n  ")])])}],g={render:m,staticRenderFns:v},f=g,w=r("VU/8"),A=n,b=w(y,f,!1,A,null,null),k=b.exports,M={name:"AppFooter",data:function(){return{}}},x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"appFooter-container"},[r("p",{staticClass:"appFooter-text"},[e._v("Source: MTA")])])}],T={render:x,staticRenderFns:B},S=T,C=r("VU/8"),j=o,F=C(M,S,!1,j,null,null),E=F.exports,N={name:"app",data:function(){return{trains:_.a,detail:h.a}},components:{AppHeader:k,AppFooter:E}},P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AppHeader"),e._v(" "),r("div",{attrs:{id:"app"}},[r("router-view",{attrs:{trains:e.trains,detail:e.detail}})],1),e._v(" "),r("AppFooter")],1)},L=[],Y={render:P,staticRenderFns:L},D=Y,Q=r("VU/8"),R=a,W=Q(N,D,!1,R,null,null),z=W.exports,J=r("/ocq"),H={name:"LinesListRow",data:function(){return{}}},q=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("Hi")])},G=[],X={render:q,staticRenderFns:G},V=X,U=r("VU/8"),I=U(H,V,!1,null,null,null),O=I.exports,Z=r("vwbq"),K=r("bPnB"),$=r("bi+f"),ee={name:"SubwayMap",props:["colors"],created:function(){var e=this;Z.a("./src/assets/mapSubway.json",function(t,r){new $.StaticCanvasMap({element:".subway-map",data:[{features:K.a(r,r.objects.mapSubway),static:{paintfeature:function(t,r){var n=t,o=r.properties.name.substring(0,1),a=e.colors[o]?e.colors[o].route_color:"000";n.context.strokeStyle="#"+a,n.context.stroke()}}}]}).init()})}},te=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"subway-map"})},re=[],ne={render:te,staticRenderFns:re},oe=ne,ae=r("VU/8"),se=ae(ee,oe,!1,null,null,null),le=se.exports,ue={name:"LinesList",props:["trains","detail"],data:function(){return{columns:[{name:"route_id"}]}},mounted:function(){},methods:{formatter:function(e){return e},getTrain:function(e){this.$router.push({path:"/line/"+e.data.route_id})},setStyle:function(e){return{backgroundColor:null!==e?"#"+e:"#6D6E71"}}},components:{LinesListRow:O,SubwayMap:le}},ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"trainList-container"},[r("table-component",{attrs:{"table-class":"trainList-table",data:e.trains,"sort-by":"route_short_name","sort-order":"asc","show-caption":!1,"show-filter":!1},on:{rowClick:e.getTrain}},[r("table-column",{attrs:{show:"route_short_name",label:"Route",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticClass:"route-symbol",style:e.setStyle(t.route_color)},[e._v(e._s(t.route_short_name)+"\n            ")])]}}])}),e._v(" "),r("table-column",{attrs:{show:"route_long_name",label:""}})],1)],1),e._v(" "),r("div",{staticClass:"trainDetail-container"},[r("router-view",{attrs:{detail:e.detail}})],1)])},ce=[],de={render:ie,staticRenderFns:ce},_e=de,pe=r("VU/8"),he=s,ye=pe(ue,_e,!1,he,"data-v-3abdc53c",null),me=ye.exports,ve=r("hu1L"),ge=r.n(ve),fe={name:"LineDetail",props:["detail"],data:function(){return{train:this.detail[this.$route.params.id]}},mounted:function(){},methods:{getArrow:function(){return ge.a.arrowL+" View list"},goBack:function(){this.$router.push({path:"/"})},routeColor:function(e){return{"background-color":"#"+e}}},components:{OntimeChart:function(){return r.e(0).then(r.bind(null,"6KHQ"))}}},we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("span",{staticClass:"listDetail-back",domProps:{innerHTML:e._s(e.getArrow())},on:{click:e.goBack}}),e._v(" "),r("table",{},[r("tr",[r("td",{staticClass:"route-symbol-td"},[r("span",{staticClass:"route-symbol",style:e.routeColor(e.train.route_color)},[e._v(e._s(e.$route.params.id))])]),e._v(" "),r("td",{staticClass:"name"},[e._v(e._s(e.train.route_long_name))])]),e._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[r("p",{staticClass:"small description"},[e._v(e._s(e.train.route_desc))])])])]),e._v(" "),r("OntimeChart",{attrs:{detail:e.detail}})],1)},Ae=[],be={render:we,staticRenderFns:Ae},ke=be,Me=r("VU/8"),xe=l,Be=Me(fe,ke,!1,xe,null,null),Te=Be.exports;u.a.use(J.a);var Se=new J.a({routes:[{path:"/",name:"LinesList",component:me,props:!0},{path:"/line/:id",name:"line",component:Te,props:!0}]});u.a.use(c.a),u.a.config.productionTip=!1,new u.a({el:"#app",router:Se,template:"<App/>",components:{App:z}})},U6bP:function(e,t){e.exports={1:{agency_id:"MTA NYCT",route_short_name:"1",route_long_name:"Broadway - 7 Avenue Local",route_desc:"Trains operate between 242 St in the Bronx and South Ferry in Manhattan, most times",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t1cur.pdf",route_color:"EE352E",route_text_color:null},2:{agency_id:"MTA NYCT",route_short_name:"2",route_long_name:"7 Avenue Express",route_desc:"Trains operate between Wakefield-241 St, Bronx, and Flatbush Av-Brooklyn College, Brooklyn, at all times. Trains operate local in Bronx and Brooklyn. Trains operate express in Manhattan except late night when it operates local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t2cur.pdf",route_color:"EE352E",route_text_color:" "},3:{agency_id:"MTA NYCT",route_short_name:"3",route_long_name:"7 Avenue Express",route_desc:"Trains operate between 148 St, 7 Av, Manhattan, and New Lots Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Manhattan between 148 St, 7 Av and Times Square-42 St.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t3cur.pdf",route_color:"EE352E",route_text_color:null},4:{agency_id:"MTA NYCT",route_short_name:"4",route_long_name:"Lexington Avenue Express",route_desc:"Trains operate daily between Woodlawn/Jerome Av, Bronx, and Utica Av/Eastern Pkwy, Brooklyn, running express in Manhattan and Brooklyn. During late night and early morning hours, trains runs local in Manhattan and Brooklyn, and extends beyond Utica Av to New Lots/Livonia Avs, Brooklyn.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t4cur.pdf",route_color:"00933C",route_text_color:null},5:{agency_id:"MTA NYCT",route_short_name:"5",route_long_name:"Lexington Avenue Express",route_desc:"Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn. At all other times except during late nights, trains operate between Dyre Av, Bronx, and Bowling Green, Manhattan. During late nights trains operate only in the Bronx between Dyre Av and E 180 St/MorrisPark Av. Customers who ride during late night hours can transfer to 2 service at the E 180 St Station. At all times, trains operate express in Manhattan and Brooklyn. Weekdays, trains in the Bronx operate express from E 180 St to 149 St-3 Av during morning rush hours (from about 6 AM to 9 AM), and from 149 St-3 Av to E 180 St during the evening rush hours (from about 4 PM to 7 PM).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t5cur.pdf",route_color:"00933C",route_text_color:null},6:{agency_id:"MTA NYCT",route_short_name:"6",route_long_name:"Lexington Avenue Local",route_desc:"Local trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, at all times.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t6cur.pdf",route_color:"00933C",route_text_color:null},7:{agency_id:"MTA NYCT",route_short_name:"7",route_long_name:"Flushing Local",route_desc:"Trains operate between Main St-Flushing, Queens, and 11th Av-34th St, at all times. ",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t7cur.pdf",route_color:"B933AD",route_text_color:null},"5X":{agency_id:"MTA NYCT",route_short_name:"5X",route_long_name:"Lexington Avenue Express",route_desc:"Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn. At all other times except during late nights, trains operate between Dyre Av, Bronx, and Bowling Green, Manhattan. During late nights trains operate only in the Bronx between Dyre Av and E 180 St/MorrisPark Av. Customers who ride during late night hours can transfer to 2 service at the E 180 St Station. At all times, trains operate express in Manhattan and Brooklyn. Weekdays, trains in the Bronx operate express from E 180 St to 149 St-3 Av during morning rush hours (from about 6 AM to 9 AM), and from 149 St-3 Av to E 180 St during the evening rush hours (from about 4 PM to 7 PM).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t5cur.pdf",route_color:"00933C",route_text_color:null},"6X":{agency_id:"MTA NYCT",route_short_name:"6X",route_long_name:"Lexington Avenue Express",route_desc:"Express trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, weekday mornings toward Manhattan. Weekday afternoons and evenings, these trains operate express to the Bronx.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t6cur.pdf",route_color:"00A65C",route_text_color:null},"7X":{agency_id:"MTA NYCT",route_short_name:"7X",route_long_name:"Flushing Express",route_desc:"Trains operate between Main St-Flushing, Queens, and 11th Av-34th St, Manhattan, weekday mornings toward Manhattan. Weekday afternoons and evenings, these trains operate express to Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t7cur.pdf",route_color:"B933AD",route_text_color:null},GS:{agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"42 St Shuttle",route_desc:"Operates in Manhattan between Grand Central and Times Square. The shuttle provides a free transfer between 4, 5, 6, and 7 service at Grand Central-42 St and A, C, E, N, Q, R, W, 1, 2, 3, and 7 service at Times Square-42 St. The shuttle runs at all times except during late nights, from about 12 midnight to 6 AM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t0cur.pdf",route_color:"6D6E71",route_text_color:null},A:{agency_id:"MTA NYCT",route_short_name:"A",route_long_name:"8 Avenue Express",route_desc:"Trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6 AM until about midnight, additional trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway). During weekday morning rush hours, special trains, denoted in the schedule by a diamond symbol, operate from Rockaway Park-Beach 116 St, Queens, toward Manhattan. These trains make local stops between Rockaway Park and Broad Channel. Similarly, in the evening rush hour special trains leave Manhattan operating toward Rockaway Park-Beach 116 St, Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tacur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},B:{agency_id:"MTA NYCT",route_short_name:"B",route_long_name:"6 Avenue Express",route_desc:"Trains operate, weekdays only, between 145 St, Manhattan, and Brighton Beach, Brooklyn at all times except late nights. The route extends to Bedford Park Blvd, Bronx, during rush hours.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tbcur.pdf",route_color:"FF6319",route_text_color:null},C:{agency_id:"MTA NYCT",route_short_name:"C",route_long_name:"8 Avenue Local",route_desc:"Trains operate between 168 St, Manhattan, and Euclid Av, Brooklyn, daily from about 6 AM to 11 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tccur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},D:{agency_id:"MTA NYCT",route_short_name:"D",route_long_name:"6 Avenue Express",route_desc:"Trains operate, at all times, from 205 Street, Bronx, to Stillwell Avenue, Brooklyn via Central Park West and 6th Avenue in Manhattan, and via the Manhattan Bridge to and from Brooklyn. When in Brooklyn trains operate via 4th Avenue then through Bensonhurst to Coney Island. Trains typically operate local in the Bronx, express in Manhattan, and local in Brooklyn. But please note that Bronx rush hour trains operate express (peak direction ONLY), and Brooklyn trains operate express along the 4th Avenue segment (all times except late nights).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tdcur.pdf",route_color:"FF6319",route_text_color:null},E:{agency_id:"MTA NYCT",route_short_name:"E",route_long_name:"8 Avenue Local",route_desc:"Trains operate between Jamaica Center (Parsons/Archer), Queens, and World Trade Center, Manhattan, at all times.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tecur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},F:{agency_id:"MTA NYCT",route_short_name:"F",route_long_name:"Queens Blvd Express/ 6 Av Local",route_desc:"Trains operate at all times between Jamaica, Queens, and Stillwell Av, Brooklyn via the 63 St Connector (serving 21 St-Queensbridge, Roosevelt Island, Lexington Av-63 St, and 57 St-6 Av). F trains operate express along Queens Blvd at all times. Trains do not serve Queens Plaza, 23 St-Ely Av, Lexington Av-53 St and 5 Av-53 St.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tfcur.pdf",route_color:"FF6319",route_text_color:null},FS:{agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"Franklin Avenue Shuttle",route_desc:"Train provides full time connecting service between the A and C at the Franklin Av/Fulton St station, and the Q at the Prospect Park/Empire Blvd station. A free transfer is also available at the Botanic Garden/Eastern Parkway Station to the 2, 3, 4, and 5 service.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tscur.pdf",route_color:null,route_text_color:null},G:{agency_id:"MTA NYCT",route_short_name:"G",route_long_name:"Brooklyn-Queens Crosstown",route_desc:"Trains operate between Court Square, Queens and Church Av, Brooklyn weekdays, and all weekend. Weekday evenings and late nights, trains operate between Forest Hill-71 Av, Queens and Church Av, Brooklyn.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tgcur.pdf",route_color:"6CBE45",route_text_color:null},J:{agency_id:"MTA NYCT",route_short_name:"J",route_long_name:"Nassau St Local",route_desc:"Trains operate weekdays between Jamaica Center (Parsons/Archer), Queens, and Broad St, Manhattan. During weekdays, Trains going to Manhattan run express in Brooklyn between Myrtle Av and Marcy Av from about 7 AM to 1 PM and from Manhattan from 1:30 PM and 8 PM. During weekday rush hours, trains provide skip-stop service. Skip-stop service means that some stations are served by J trains, some stations are served by the Z trains, and some stations are served by both J and Z trains. J/Z skip-stop service runs towards Manhattan from about 7 AM to 8:15 AM and from Manhattan from about 4:30 PM to 5:45 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tjcur.pdf",route_color:"996633",route_text_color:null},L:{agency_id:"MTA NYCT",route_short_name:"L",route_long_name:"14 St-Canarsie Local",route_desc:"Trains operate between 8 Av/14 St, Manhattan, and Rockaway Pkwy/Canarsie, Brooklyn, 24 hours daily.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tlcur.pdf",route_color:"A7A9AC",route_text_color:null},M:{agency_id:"MTA NYCT",route_short_name:"M",route_long_name:"QNS BLVD-6th AVE/ Myrtle Local",route_desc:"Trains operate between Middle Village-Metropolitan Avenue, Queens and Myrtle Avenue, Brooklyn at all times. Service is extended weekdays (except late nights) Continental Ave, Queens, All trains provide local service.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tmcur.pdf",route_color:"FF6319",route_text_color:null},N:{agency_id:"MTA NYCT",route_short_name:"N",route_long_name:"Broadway Local",route_desc:"Trains operate from Ditmars Boulevard, Queens, to Stillwell Avenue, Brooklyn, at all times. N trains in Manhattan operate along Broadway and across the Manhattan Bridge to and from Brooklyn. Trains in Brooklyn operate along 4th Avenue, then through Borough Park to Gravesend. Trains typically operate local in Queens, and either express or local in Manhattan and Brooklyn, depending on the time. Late night trains operate via Whitehall Street, Manhattan. Late night service is local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tncur.pdf",route_color:"FCCC0A",route_text_color:null},Q:{agency_id:"MTA NYCT",route_short_name:"Q",route_long_name:"Broadway Express",route_desc:"Trains operate between Astoria, Queens, and Stillwell Av, Brooklyn except nights. During late nights trains will operate from 57th Street/7th Avenue, Manhattan, and Stillwell Av, Brooklyn. Trains operate express from 34th St. via Broadway to Canal Street, except late nights when trains operate express 34th to Canal(lower level), cross into Brooklyn via Manhattan Bridge, then operate local to and from Stillwell Av.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tqcur.pdf",route_color:"FCCC0A",route_text_color:null},R:{agency_id:"MTA NYCT",route_short_name:"R",route_long_name:"Broadway Local",route_desc:"Trains operate local between Forest Hills-71 Av, Queens, and 95 St/4 Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Brooklyn between 36 St and 95 St/4 Av.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/trcur.pdf",route_color:"FCCC0A",route_text_color:null},H:{agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"Rockaway Park Shuttle",route_desc:"Service operates at all times between Broad Channel, and Rockaway Park, Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/thcur.pdf",route_color:null,route_text_color:null},W:{agency_id:"MTA NYCT",route_short_name:"W",route_long_name:"Broadway Local",route_desc:"Trains operate from Ditmars Boulevard, Queens, to Stillwell Avenue, Brooklyn, at all times. N trains in Manhattan operate along Broadway and across the Manhattan Bridge to and from Brooklyn. Trains in Brooklyn operate along 4th Avenue, then through Borough Park to Gravesend. Trains typically operate local in Queens, and either express or local in Manhattan and Brooklyn, depending on the time. Late night trains operate via Whitehall Street, Manhattan. Late night service is local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/twcur.pdf",route_color:"FCCC0A",route_text_color:null},Z:{agency_id:"MTA NYCT",route_short_name:"Z",route_long_name:"Nassau St Express",route_desc:"During weekday rush hours, J and Z trains provide skip-stop service. Skip-stop service means that some stations are served by J trains, some stations are served by the Z trains, and some stations are served by both J and Z trains. J/Z skip-stop service runs towards Manhattan from about 7 AM to 8:15 AM and from Manhattan from about 4:30 PM to 5:45 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tjcur.pdf",route_color:"996633",route_text_color:null},SI:{agency_id:"MTA NYCT",route_short_name:"SIR",route_long_name:"Staten Island Railway",route_desc:"Service runs 24 hours a day between the St George and Tottenville terminals. At the St George terminal, customers can make connections with Staten Island Ferry service to Manhattan.",route_type:2,route_url:"http://web.mta.info/nyct/service/pdf/sircur.pdf",route_color:null,route_text_color:null}}},WXaH:function(e,t){},e2PK:function(e,t){e.exports=[{route_id:"1",agency_id:"MTA NYCT",route_short_name:"1",route_long_name:"Broadway - 7 Avenue Local",route_desc:"Trains operate between 242 St in the Bronx and South Ferry in Manhattan, most times",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t1cur.pdf",route_color:"EE352E",route_text_color:null},{route_id:"2",agency_id:"MTA NYCT",route_short_name:"2",route_long_name:"7 Avenue Express",route_desc:"Trains operate between Wakefield-241 St, Bronx, and Flatbush Av-Brooklyn College, Brooklyn, at all times. Trains operate local in Bronx and Brooklyn. Trains operate express in Manhattan except late night when it operates local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t2cur.pdf",route_color:"EE352E",route_text_color:" "},{route_id:"3",agency_id:"MTA NYCT",route_short_name:"3",route_long_name:"7 Avenue Express",route_desc:"Trains operate between 148 St, 7 Av, Manhattan, and New Lots Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Manhattan between 148 St, 7 Av and Times Square-42 St.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t3cur.pdf",route_color:"EE352E",route_text_color:null},{route_id:"4",agency_id:"MTA NYCT",route_short_name:"4",route_long_name:"Lexington Avenue Express",route_desc:"Trains operate daily between Woodlawn/Jerome Av, Bronx, and Utica Av/Eastern Pkwy, Brooklyn, running express in Manhattan and Brooklyn. During late night and early morning hours, trains runs local in Manhattan and Brooklyn, and extends beyond Utica Av to New Lots/Livonia Avs, Brooklyn.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t4cur.pdf",route_color:"00933C",route_text_color:null},{route_id:"5",agency_id:"MTA NYCT",route_short_name:"5",route_long_name:"Lexington Avenue Express",route_desc:"Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn. At all other times except during late nights, trains operate between Dyre Av, Bronx, and Bowling Green, Manhattan. During late nights trains operate only in the Bronx between Dyre Av and E 180 St/MorrisPark Av. Customers who ride during late night hours can transfer to 2 service at the E 180 St Station. At all times, trains operate express in Manhattan and Brooklyn. Weekdays, trains in the Bronx operate express from E 180 St to 149 St-3 Av during morning rush hours (from about 6 AM to 9 AM), and from 149 St-3 Av to E 180 St during the evening rush hours (from about 4 PM to 7 PM).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t5cur.pdf",route_color:"00933C",route_text_color:null},{route_id:"5X",agency_id:"MTA NYCT",route_short_name:"5X",route_long_name:"Lexington Avenue Express",route_desc:"Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn. At all other times except during late nights, trains operate between Dyre Av, Bronx, and Bowling Green, Manhattan. During late nights trains operate only in the Bronx between Dyre Av and E 180 St/MorrisPark Av. Customers who ride during late night hours can transfer to 2 service at the E 180 St Station. At all times, trains operate express in Manhattan and Brooklyn. Weekdays, trains in the Bronx operate express from E 180 St to 149 St-3 Av during morning rush hours (from about 6 AM to 9 AM), and from 149 St-3 Av to E 180 St during the evening rush hours (from about 4 PM to 7 PM).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t5cur.pdf",route_color:"00933C",route_text_color:null},{route_id:"6",agency_id:"MTA NYCT",route_short_name:"6",route_long_name:"Lexington Avenue Local",route_desc:"Local trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, at all times.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t6cur.pdf",route_color:"00933C",route_text_color:null},{route_id:"6X",agency_id:"MTA NYCT",route_short_name:"6X",route_long_name:"Lexington Avenue Express",route_desc:"Express trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, weekday mornings toward Manhattan. Weekday afternoons and evenings, these trains operate express to the Bronx.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t6cur.pdf",route_color:"00A65C",route_text_color:null},{route_id:"7",agency_id:"MTA NYCT",route_short_name:"7",route_long_name:"Flushing Local",route_desc:"Trains operate between Main St-Flushing, Queens, and 11th Av-34th St, at all times. ",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t7cur.pdf",route_color:"B933AD",route_text_color:null},{route_id:"7X",agency_id:"MTA NYCT",route_short_name:"7X",route_long_name:"Flushing Express",route_desc:"Trains operate between Main St-Flushing, Queens, and 11th Av-34th St, Manhattan, weekday mornings toward Manhattan. Weekday afternoons and evenings, these trains operate express to Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t7cur.pdf",route_color:"B933AD",route_text_color:null},{route_id:"GS",agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"42 St Shuttle",route_desc:"Operates in Manhattan between Grand Central and Times Square. The shuttle provides a free transfer between 4, 5, 6, and 7 service at Grand Central-42 St and A, C, E, N, Q, R, W, 1, 2, 3, and 7 service at Times Square-42 St. The shuttle runs at all times except during late nights, from about 12 midnight to 6 AM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/t0cur.pdf",route_color:"6D6E71",route_text_color:null},{route_id:"A",agency_id:"MTA NYCT",route_short_name:"A",route_long_name:"8 Avenue Express",route_desc:"Trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6 AM until about midnight, additional trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway). During weekday morning rush hours, special trains, denoted in the schedule by a diamond symbol, operate from Rockaway Park-Beach 116 St, Queens, toward Manhattan. These trains make local stops between Rockaway Park and Broad Channel. Similarly, in the evening rush hour special trains leave Manhattan operating toward Rockaway Park-Beach 116 St, Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tacur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},{route_id:"B",agency_id:"MTA NYCT",route_short_name:"B",route_long_name:"6 Avenue Express",route_desc:"Trains operate, weekdays only, between 145 St, Manhattan, and Brighton Beach, Brooklyn at all times except late nights. The route extends to Bedford Park Blvd, Bronx, during rush hours.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tbcur.pdf",route_color:"FF6319",route_text_color:null},{route_id:"C",agency_id:"MTA NYCT",route_short_name:"C",route_long_name:"8 Avenue Local",route_desc:"Trains operate between 168 St, Manhattan, and Euclid Av, Brooklyn, daily from about 6 AM to 11 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tccur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},{route_id:"D",agency_id:"MTA NYCT",route_short_name:"D",route_long_name:"6 Avenue Express",route_desc:"Trains operate, at all times, from 205 Street, Bronx, to Stillwell Avenue, Brooklyn via Central Park West and 6th Avenue in Manhattan, and via the Manhattan Bridge to and from Brooklyn. When in Brooklyn trains operate via 4th Avenue then through Bensonhurst to Coney Island. Trains typically operate local in the Bronx, express in Manhattan, and local in Brooklyn. But please note that Bronx rush hour trains operate express (peak direction ONLY), and Brooklyn trains operate express along the 4th Avenue segment (all times except late nights).",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tdcur.pdf",route_color:"FF6319",route_text_color:null},{route_id:"E",agency_id:"MTA NYCT",route_short_name:"E",route_long_name:"8 Avenue Local",route_desc:"Trains operate between Jamaica Center (Parsons/Archer), Queens, and World Trade Center, Manhattan, at all times.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tecur.pdf",route_color:"2850AD",route_text_color:"FFFFFF"},{route_id:"F",agency_id:"MTA NYCT",route_short_name:"F",route_long_name:"Queens Blvd Express/ 6 Av Local",route_desc:"Trains operate at all times between Jamaica, Queens, and Stillwell Av, Brooklyn via the 63 St Connector (serving 21 St-Queensbridge, Roosevelt Island, Lexington Av-63 St, and 57 St-6 Av). F trains operate express along Queens Blvd at all times. Trains do not serve Queens Plaza, 23 St-Ely Av, Lexington Av-53 St and 5 Av-53 St.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tfcur.pdf",route_color:"FF6319",route_text_color:null},{route_id:"FS",agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"Franklin Avenue Shuttle",route_desc:"Train provides full time connecting service between the A and C at the Franklin Av/Fulton St station, and the Q at the Prospect Park/Empire Blvd station. A free transfer is also available at the Botanic Garden/Eastern Parkway Station to the 2, 3, 4, and 5 service.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tscur.pdf",route_color:null,route_text_color:null},{route_id:"G",agency_id:"MTA NYCT",route_short_name:"G",route_long_name:"Brooklyn-Queens Crosstown",route_desc:"Trains operate between Court Square, Queens and Church Av, Brooklyn weekdays, and all weekend. Weekday evenings and late nights, trains operate between Forest Hill-71 Av, Queens and Church Av, Brooklyn.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tgcur.pdf",route_color:"6CBE45",route_text_color:null},{route_id:"J",agency_id:"MTA NYCT",route_short_name:"J",route_long_name:"Nassau St Local",route_desc:"Trains operate weekdays between Jamaica Center (Parsons/Archer), Queens, and Broad St, Manhattan. During weekdays, Trains going to Manhattan run express in Brooklyn between Myrtle Av and Marcy Av from about 7 AM to 1 PM and from Manhattan from 1:30 PM and 8 PM. During weekday rush hours, trains provide skip-stop service. Skip-stop service means that some stations are served by J trains, some stations are served by the Z trains, and some stations are served by both J and Z trains. J/Z skip-stop service runs towards Manhattan from about 7 AM to 8:15 AM and from Manhattan from about 4:30 PM to 5:45 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tjcur.pdf",route_color:"996633",route_text_color:null},{route_id:"L",agency_id:"MTA NYCT",route_short_name:"L",route_long_name:"14 St-Canarsie Local",route_desc:"Trains operate between 8 Av/14 St, Manhattan, and Rockaway Pkwy/Canarsie, Brooklyn, 24 hours daily.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tlcur.pdf",route_color:"A7A9AC",route_text_color:null},{route_id:"M",agency_id:"MTA NYCT",route_short_name:"M",route_long_name:"QNS BLVD-6th AVE/ Myrtle Local",route_desc:"Trains operate between Middle Village-Metropolitan Avenue, Queens and Myrtle Avenue, Brooklyn at all times. Service is extended weekdays (except late nights) Continental Ave, Queens, All trains provide local service.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tmcur.pdf",route_color:"FF6319",route_text_color:null},{route_id:"N",agency_id:"MTA NYCT",route_short_name:"N",route_long_name:"Broadway Local",route_desc:"Trains operate from Ditmars Boulevard, Queens, to Stillwell Avenue, Brooklyn, at all times. N trains in Manhattan operate along Broadway and across the Manhattan Bridge to and from Brooklyn. Trains in Brooklyn operate along 4th Avenue, then through Borough Park to Gravesend. Trains typically operate local in Queens, and either express or local in Manhattan and Brooklyn, depending on the time. Late night trains operate via Whitehall Street, Manhattan. Late night service is local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tncur.pdf",route_color:"FCCC0A",route_text_color:null},{route_id:"Q",agency_id:"MTA NYCT",route_short_name:"Q",route_long_name:"Broadway Express",route_desc:"Trains operate between Astoria, Queens, and Stillwell Av, Brooklyn except nights. During late nights trains will operate from 57th Street/7th Avenue, Manhattan, and Stillwell Av, Brooklyn. Trains operate express from 34th St. via Broadway to Canal Street, except late nights when trains operate express 34th to Canal(lower level), cross into Brooklyn via Manhattan Bridge, then operate local to and from Stillwell Av.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tqcur.pdf",route_color:"FCCC0A",route_text_color:null},{route_id:"R",agency_id:"MTA NYCT",route_short_name:"R",route_long_name:"Broadway Local",route_desc:"Trains operate local between Forest Hills-71 Av, Queens, and 95 St/4 Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Brooklyn between 36 St and 95 St/4 Av.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/trcur.pdf",route_color:"FCCC0A",route_text_color:null},{route_id:"H",agency_id:"MTA NYCT",route_short_name:"S",route_long_name:"Rockaway Park Shuttle",route_desc:"Service operates at all times between Broad Channel, and Rockaway Park, Queens.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/thcur.pdf",route_color:null,route_text_color:null},{route_id:"W",agency_id:"MTA NYCT",route_short_name:"W",route_long_name:"Broadway Local",route_desc:"Trains operate from Ditmars Boulevard, Queens, to Stillwell Avenue, Brooklyn, at all times. N trains in Manhattan operate along Broadway and across the Manhattan Bridge to and from Brooklyn. Trains in Brooklyn operate along 4th Avenue, then through Borough Park to Gravesend. Trains typically operate local in Queens, and either express or local in Manhattan and Brooklyn, depending on the time. Late night trains operate via Whitehall Street, Manhattan. Late night service is local.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/twcur.pdf",route_color:"FCCC0A",route_text_color:null},{route_id:"Z",agency_id:"MTA NYCT",route_short_name:"Z",route_long_name:"Nassau St Express",route_desc:"During weekday rush hours, J and Z trains provide skip-stop service. Skip-stop service means that some stations are served by J trains, some stations are served by the Z trains, and some stations are served by both J and Z trains. J/Z skip-stop service runs towards Manhattan from about 7 AM to 8:15 AM and from Manhattan from about 4:30 PM to 5:45 PM.",route_type:1,route_url:"http://web.mta.info/nyct/service/pdf/tjcur.pdf",route_color:"996633",route_text_color:null},{route_id:"SI",agency_id:"MTA NYCT",route_short_name:"SIR",route_long_name:"Staten Island Railway",route_desc:"Service runs 24 hours a day between the St George and Tottenville terminals. At the St George terminal, customers can make connections with Staten Island Ferry service to Manhattan.",route_type:2,route_url:"http://web.mta.info/nyct/service/pdf/sircur.pdf",route_color:null,route_text_color:null}]},fyY2:function(e,t){},"oq+B":function(e,t){},uslO:function(e,t,r){function n(e){return r(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="uslO"},zJEp:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f401364308004c536ee3.js.map