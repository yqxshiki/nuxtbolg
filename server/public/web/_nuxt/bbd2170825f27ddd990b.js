(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{322:function(e,t,r){var content=r(333);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("4469d9a0",content,!0,{sourceMap:!1})},332:function(e,t,r){"use strict";var n=r(322);r.n(n).a},333:function(e,t,r){(t=r(16)(!1)).push([e.i,"@media screen and (min-width:1360px){img[data-v-be5dbfce]{width:100%;height:340px}}.el-carousel__item h3[data-v-be5dbfce]{color:#475669;font-size:14px;opacity:.75;line-height:300px;margin:0}.el-carousel__item[data-v-be5dbfce]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-be5dbfce]:nth-child(odd){background-color:#d3dce6}",""]),e.exports=t},339:function(e,t,r){"use strict";r.r(t);r(43);var n={name:"swiper",data:function(){return{imgsrc:""}},computed:{getimg:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$axios.get("/imglist"));case 2:e=t.sent,this.imgsrc=e.data[0].items;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.getimg}},c=(r(332),r(18)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"swiper"}},[t("el-carousel",{attrs:{interval:3e3,type:"card",height:"340px"}},this._l(this.imgsrc,(function(e){return t("el-carousel-item",{key:e.index},[t("img",{staticClass:"medium",attrs:{src:e.url,alt:e.image}})])})),1)],1)}),[],!1,null,"be5dbfce",null);t.default=component.exports}}]);