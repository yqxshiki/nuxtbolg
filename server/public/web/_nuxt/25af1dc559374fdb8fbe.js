(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6,9],{319:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:s,d:i,h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v="en",m={};m[v]=h;var _=function(t){return t instanceof $},w=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(v=r),r},g=function(t,e,n){if(_(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new $(r)},x=f;x.l=w,x.i=_,x.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var $=function(){function l(t){this.$L=this.$L||w(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return x},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",a)},f.month=function(t){return this.$g(t,"$M",u)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var c=this,d=!!x.u(o)||o,l=x.p(t),f=function(t,e){var n=x.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(i)},h=function(t,e){return x.w(c.toDate()[t].apply(c.toDate(),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},v=this.$W,m=this.$M,_=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case a:return d?f(1,0):f(31,11);case u:return d?f(1,m):f(0,m+1);case s:var g=this.$locale().weekStart||0,$=(v<g?v+7:v)-g;return f(d?_-$:_+(6-$),m);case i:case"date":return h(w+"Hours",0);case r:return h(w+"Minutes",1);case n:return h(w+"Seconds",2);case e:return h(w+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var c,d=x.p(s),l="set"+(this.$u?"UTC":""),f=(c={},c[i]=l+"Date",c.date=l+"Date",c[u]=l+"Month",c[a]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[d],h=d===i?this.$D+(o-this.$W):o;if(d===u||d===a){var v=this.clone().set("date",1);v.$d[f](h),v.init(),this.$d=v.set("date",Math.min(this.$D,v.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[x.p(t)]()},f.add=function(t,o){var c,d=this;t=Number(t);var l=x.p(o),f=function(e){var n=g(d);return x.w(n.date(n.date()+Math.round(e*t)),d)};if(l===u)return this.set(u,this.$M+t);if(l===a)return this.set(a,this.$y+t);if(l===i)return f(1);if(l===s)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,v=this.$d.getTime()+t*h;return x.w(v,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,c=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return x.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:x.s(o+1,2,"0"),MMM:l(i.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,a,2),ddd:l(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:x.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:x.s(u,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||v[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var l,f=x.p(c),h=g(t),v=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,_=x.m(this,h);return _=(l={},l[a]=_/12,l[u]=_,l[o]=_/3,l[s]=(m-v)/6048e5,l[i]=(m-v)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[f]||m,d?_:x.a(_)},f.daysInMonth=function(){return this.endOf(u).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return x.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}();return g.prototype=$.prototype,g.extend=function(t,e){return t(e,$,g),g},g.locale=w,g.isDayjs=_,g.unix=function(t){return g(1e3*t)},g.en=m[v],g.Ls=m,g}()},320:function(t,e,n){var content=n(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("a1b7e28c",content,!0,{sourceMap:!1})},321:function(t,e,n){var content=n(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("32b38dec",content,!0,{sourceMap:!1})},322:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4469d9a0",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";var r=n(320);n.n(r).a},327:function(t,e,n){(e=n(16)(!1)).push([t.i,"#contact[data-v-c7ca60b4]{width:100%;height:240px;margin-top:-2rem}.container[data-v-c7ca60b4]{display:-webkit-box;display:flex;justify-content:space-around;text-align:center;line-height:200px;width:100%}.wrap div[data-v-c7ca60b4]{width:100%;height:80px;margin-top:-1rem}.description[data-v-c7ca60b4]{font-size:24px;font-weight:bolder}.description[data-v-c7ca60b4],.mindescription[data-v-c7ca60b4]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.mindescription[data-v-c7ca60b4]{font-size:1rem}.iconfont[data-v-c7ca60b4]{font-size:3rem}",""]),t.exports=e},328:function(t,e,n){t.exports=n.p+"img/d2e70cd.jpg"},329:function(t,e,n){t.exports=n.p+"img/fbe2bf8.png"},330:function(t,e,n){"use strict";var r=n(321);n.n(r).a},331:function(t,e,n){(e=n(16)(!1)).push([t.i,".wrap[data-v-5d9c8de0]{max-width:76%;height:100%;overflow:hidden;margin:0 auto}h2[data-v-5d9c8de0]{margin-left:2rem;margin-top:1rem;cursor:pointer}h2[data-v-5d9c8de0],h2 .iconfont[data-v-5d9c8de0]{color:red}.container[data-v-5d9c8de0]{width:80%;margin:0 auto}.article-flex[data-v-5d9c8de0]{display:-webkit-box;display:flex}.article[data-v-5d9c8de0]{width:80%;margin:0 auto 2rem}.article-img[data-v-5d9c8de0]{width:200px;-webkit-transition:all .5s;transition:all .5s}.article:hover .article-img[data-v-5d9c8de0]{-webkit-transform:scale(1.1);transform:scale(1.1)}.article-sidebar[data-v-5d9c8de0]{margin-left:1rem}.article-title[data-v-5d9c8de0]{font-size:1.4rem;font-weight:700;color:#333;font-family:Times New Roman,Times,serif}.article:hover .article-title[data-v-5d9c8de0]{color:#337ab7}.article-body[data-v-5d9c8de0]{overflow:hidden;text-indent:1rem;color:#666;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.article-info[data-v-5d9c8de0]{color:#096;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin-top:1rem}.article-info img[data-v-5d9c8de0]{width:34px;height:34px;display:inline-block;border-radius:100%;margin-right:1rem}.el-row-6[data-v-5d9c8de0]{margin-left:10%}.title-border[data-v-5d9c8de0]{border-bottom:2px solid #eee;line-height:40px}.flex img[data-v-5d9c8de0]{width:100px}.green[data-v-5d9c8de0],.green a[data-v-5d9c8de0]{color:#096}.sidebar-info[data-v-5d9c8de0]{padding-left:.8rem;padding-right:.8rem;padding-bottom:.8rem;max-width:300px;margin-top:-1rem}.el-col-18[data-v-5d9c8de0],.sidebar-info[data-v-5d9c8de0]{background:#fff}.calendar-info[data-v-5d9c8de0]{max-width:300px}.friend-info[data-v-5d9c8de0],.recommend-info[data-v-5d9c8de0],.website-info[data-v-5d9c8de0]{background:#fff;padding:.8rem;margin-top:1rem;max-width:300px}.tools[data-v-5d9c8de0]{margin-bottom:1rem;font-size:.8rem;line-height:70px}.tools[data-v-5d9c8de0],.tools a[data-v-5d9c8de0]{width:100%;height:70px}.tools a[data-v-5d9c8de0]{display:inline-block;display:-webkit-box;display:flex}.tools a:hover .toolsimg[data-v-5d9c8de0]{-webkit-transform:scale(1.1);transform:scale(1.1)}.tools img[data-v-5d9c8de0]{width:70px;height:70px;margin-left:1rem;margin-right:1rem;-webkit-transition:all .5s;transition:all .5s}.fslinks[data-v-5d9c8de0]{margin:.4rem}",""]),t.exports=e},332:function(t,e,n){"use strict";var r=n(322);n.n(r).a},333:function(t,e,n){(e=n(16)(!1)).push([t.i,"@media screen and (min-width:1360px){img[data-v-be5dbfce]{width:100%;height:340px}}.el-carousel__item h3[data-v-be5dbfce]{color:#475669;font-size:14px;opacity:.75;line-height:300px;margin:0}.el-carousel__item[data-v-be5dbfce]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-be5dbfce]:nth-child(odd){background-color:#d3dce6}",""]),t.exports=e},337:function(t,e,n){var content=n(542);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("57520614",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n.r(e);n(43),n(121);var r=n(319),o=n.n(r),c={name:"hot",data:function(){return{length:"",list:[],tools:[],fslinks:[],value:new Date}},filters:{filter:function(t){return t.replace(/<\/?.+?>/g,"")},yeardata:function(t){return o()(t).format("YYYY/MM/DD")}},methods:{getTools:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios.get("/tools"));case 2:t=e.sent,this.tools=t.data;case 4:case"end":return e.stop()}}),null,this)},getfslink:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios.get("/fslinks"));case 2:t=e.sent,this.fslinks=t.data;case 4:case"end":return e.stop()}}),null,this)},getBlog:function(){var t=this;this.$axios.get("/blog").then((function(e){t.length=e.data.length,length<=4?e.data.map((function(e,n){t.list.unshift(e)})):t.list=e.data.slice(t.length-5,t.length)}))}},mounted:function(){this.getBlog(),this.getTools(),this.getfslink()}},d=(n(330),n(18)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"hot"}},[r("div",{staticClass:"wrap"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:18}},[r("h2",[r("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n          最新文章\n        ")]),t._v(" "),r("div",{staticClass:"container"},t._l(t.list,(function(e,o){return r("div",{key:o,staticClass:"article"},[r("nuxt-link",{attrs:{to:{name:"list-list",params:{list:e._id,title:e.title}}}},[r("h4",{staticClass:"article-title"},[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"article-flex"},[r("img",{staticClass:"article-img",attrs:{src:e.icon,alt:""}}),t._v(" "),r("span",{staticClass:"article-sidebar"},[r("div",{staticClass:"article-body"},[t._v(t._s(t._f("filter")(e.bodyrender)))]),t._v(" "),r("div",{staticClass:"article-info"},[r("img",{attrs:{src:n(180),alt:""}}),t._v(" "),r("span",[t._v("Scrook:"+t._s(t._f("yeardata")(e.createdAt)))])])])])],1)})),0)]),t._v(" "),r("el-col",{attrs:{span:6}},[r("el-row",{attrs:{span:6}},[r("div",{staticClass:"sidebar-info"},[r("h3",{staticClass:"title-border"},[t._v("我的名片")]),t._v(" "),r("div",{staticClass:"userinfo"},[r("p",[r("strong",[t._v("网名")]),t._v(":Scrook\n              ")]),t._v(" "),r("p",[r("strong",[t._v("职业")]),t._v(":web前端开发工程师\n              ")]),t._v(" "),r("p",[r("strong",[t._v("现居")]),t._v(":湖北省-武汉市\n              ")]),t._v(" "),r("p",[r("strong",[t._v("Email")]),t._v(":1023942883@qq.com\n              ")])]),t._v(" "),r("div",{staticClass:"flex"},[r("img",{attrs:{src:n(328),alt:"添加QQ"}}),t._v(" "),r("img",{attrs:{src:n(329),alt:"添加微信"}})])])]),t._v(" "),r("el-row",{attrs:{span:6}},[r("div",{staticClass:"recommend-info"},[r("h3",{staticClass:"title-border"},[t._v("推荐工具")]),t._v(" "),t._l(t.tools,(function(e){return r("div",{key:e._id,staticClass:"tools"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"toolsimg",attrs:{src:e.icon,alt:""}}),t._v(" "),r("span",[t._v(t._s(e.name))])])])}))],2)]),t._v(" "),r("el-row",{attrs:{span:6}},[r("div",{staticClass:"website-info"},[r("h3",{staticClass:"title-border"},[t._v("站点信息")]),t._v(" "),r("p",[r("strong",[t._v("建站时间")]),t._v(":2019-12-14\n            ")]),t._v(" "),r("p",[r("strong",[t._v("网站类型")]),t._v(":博客\n            ")]),t._v(" "),r("p",[r("strong",[t._v("文章统计")]),t._v(":\n              "),r("span",{staticClass:"green"},[t._v(t._s(this.length)+"篇文章")])]),t._v(" "),r("p",[r("strong",[t._v("标签管理")]),t._v(":\n              "),r("span",{staticClass:"green"},[r("nuxt-link",{attrs:{to:"/category"}},[t._v("标签云")])],1)])])]),t._v(" "),r("el-row",{attrs:{span:6}},[r("div",{staticClass:"friend-info"},[r("h3",{staticClass:"title-border"},[t._v("友情链接")]),t._v(" "),t._l(t.fslinks,(function(e){return r("div",{key:e._id,staticClass:"fslinks"},[r("a",{attrs:{href:e.link}},[r("el-tag",{attrs:{type:e.type}},[t._v(t._s(e.name))])],1)])}))],2)])],1)],1)],1)])}),[],!1,null,"5d9c8de0",null);e.default=component.exports},339:function(t,e,n){"use strict";n.r(e);n(43);var r={name:"swiper",data:function(){return{imgsrc:""}},computed:{getimg:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$axios.get("/imglist"));case 2:t=e.sent,this.imgsrc=t.data[0].items;case 4:case"end":return e.stop()}}),null,this)}},created:function(){this.getimg}},o=(n(332),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"swiper"}},[e("el-carousel",{attrs:{interval:3e3,type:"card",height:"340px"}},this._l(this.imgsrc,(function(t){return e("el-carousel-item",{key:t.index},[e("img",{staticClass:"medium",attrs:{src:t.url,alt:t.image}})])})),1)],1)}),[],!1,null,"be5dbfce",null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var r={},o=(n(326),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"description"},[t._v("QQ support")]),t._v(" "),n("div",{staticClass:"mindescription"},[t._v("1023942883")])]),t._v(" "),n("div",{staticClass:"wrap"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"description"},[t._v("Mail support")]),t._v(" "),n("div",{staticClass:"mindescription"},[t._v("\n        1023942883@qq.com\n        "),n("strong",[t._v("Or")]),t._v("\n        yiqixingyb@yeah.net\n      ")])]),t._v(" "),n("div",{staticClass:"wrap"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"description"},[t._v("My location")]),t._v(" "),n("div",{staticClass:"mindescription"},[t._v("Wuhan Qingchuan University")])]),t._v(" "),n("div",{staticClass:"wrap"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),n("div",{staticClass:"description"},[t._v("Personal blog")]),t._v(" "),n("div",{staticClass:"mindescription"},[t._v("https://www.yqxshiki.com/")])])])])}],!1,null,"c7ca60b4",null);e.default=component.exports},540:function(t,e,n){t.exports=n.p+"img/d0289dc.png"},541:function(t,e,n){"use strict";var r=n(337);n.n(r).a},542:function(t,e,n){(e=n(16)(!1)).push([t.i,'#index[data-v-9ce62276]{width:100%;margin-top:3rem}.center[data-v-9ce62276]{width:100%;margin:0 auto}footer[data-v-9ce62276]{width:100%;background:#354d4d;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}footer[data-v-9ce62276]:before{background:#000 -webkit-gradient(linear,right top,left top,from(#4cd964),color-stop(#5ac8fa),color-stop(#007aff),color-stop(#34aadc),color-stop(#5856d6),to(#ff2d55));background:#000 linear-gradient(270deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);content:"";height:8px;position:absolute;top:-2%;width:100%}.introduce[data-v-9ce62276]{font-size:1.2rem;font-weight:700;cursor:pointer;color:#000}.introduce[data-v-9ce62276]:hover,.keep[data-v-9ce62276]{color:#000}.keep[data-v-9ce62276]{margin-top:40px;margin-left:40px}.keep a[data-v-9ce62276]{color:#000}.keep a[data-v-9ce62276] :hover{color:#0ff;border-bottom:1px solid #0ff}',""]),t.exports=e},545:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"keep"},[e("span",[this._v("关于yqxshiki个人网站")]),this._v(" "),e("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank"}},[e("span",[this._v("鄂ICP备19027794号")])]),this._v(" "),e("div",{staticStyle:{width:"300px",margin:"0 auto",padding:"20px 0"}},[e("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011602000714"}},[e("img",{staticStyle:{float:"left"},attrs:{src:n(540)}}),this._v(" "),e("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[this._v("鄂公网安备 42011602000714号")])])])])])}],o=n(339),c=n(340),d=n(338),l={layout:"sidebar",name:"index",components:{swiper:o.default,contact:c.default,hotacticle:d.default},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){t.$nuxt.$loading.finish()}))}))}},f=(n(541),n(18)),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"index"}},[e("div",{staticClass:"center"},[e("swiper"),this._v(" "),e("hotacticle"),this._v(" "),e("contact")],1),this._v(" "),this._m(0)])}),r,!1,null,"9ce62276",null);e.default=component.exports}}]);