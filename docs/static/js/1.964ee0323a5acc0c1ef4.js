webpackJsonp([1],{LC6h:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.date {\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 13.5px;\n}\n.negative {\n  color: red;\n}\n.number {\n  text-align: right;\n  font-size: 13.5px;\n}\n.ontimeTable-table {\n  clear: both;\n  max-width: 350px;\n}\n.ontimeTable-table td {\n  width: 25%;\n}\n.positive {\n  color: green;\n}\n.table-component__th {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.25px;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/katiemarriner/Desktop/code/SubwayProjects/vue_subway-status-history-app/src/components/OntimeTable.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;CACpB",file:"OntimeTable.vue",sourcesContent:["\n.date {\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 13.5px;\n}\n.negative {\n  color: red;\n}\n.number {\n  text-align: right;\n  font-size: 13.5px;\n}\n.ontimeTable-table {\n  clear: both;\n  max-width: 350px;\n}\n.ontimeTable-table td {\n  width: 25%;\n}\n.positive {\n  color: green;\n}\n.table-component__th {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.25px;\n  text-align: center;\n}\n"],sourceRoot:""}])},PmGi:function(e,t,n){"use strict";function a(e){n("TJKm")}Object.defineProperty(t,"__esModule",{value:!0});var r={name:"OntimeTable",props:["ontime"],data:function(){return{}},computed:{},mounted:function(){},methods:{formatDate:function(e){return["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][e.PERIOD_MONTH-1]+" "+e.PERIOD_YEAR},formatPercent:function(e){return e.toFixed(2)+"%"},formatPctPt:function(e){var t=(Number(e.MONTHLY_ACTUAL)-Number(e.MONTHLY_TARGET)).toFixed(2),n="";return t<0?n="negative":t>0&&(n="positive"),'<span class="'+n+'">'+t+"</span>"}},components:{}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table-component",{attrs:{data:e.ontime,"sort-by":"PERIOD_YEAR","show-filter":!1,"sort-order":"desc","show-caption":!1,"table-class":"ontimeTable-table"}},[n("table-column",{attrs:{formatter:e.formatDate,label:"Month","cell-class":"date","header-class":"date"}}),e._v(" "),n("table-column",{attrs:{show:"MONTHLY_ACTUAL",formatter:e.formatPercent,label:"Actual","data-type":"numeric","cell-class":"number","header-class":"number"}}),e._v(" "),n("table-column",{attrs:{show:"MONTHLY_TARGET",formatter:e.formatPercent,label:"Target","data-type":"numeric","cell-class":"number","header-class":"number"}}),e._v(" "),n("table-column",{attrs:{label:"% point difference","data-type":"numeric","cell-class":"number","header-class":"number"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{innerHTML:e._s(e.formatPctPt(t))}})]}}])})],1)},s=[],l={render:o,staticRenderFns:s},c=l,i=n("VU/8"),A=a,u=i(r,c,!1,A,null,null);t.default=u.exports},TJKm:function(e,t,n){var a=n("LC6h");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("50bb9982",a,!0)}});
//# sourceMappingURL=1.964ee0323a5acc0c1ef4.js.map