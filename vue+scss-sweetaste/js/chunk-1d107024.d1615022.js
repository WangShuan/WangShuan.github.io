(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d107024"],{"56bb":function(t,e,a){"use strict";a("9546")},"7cb4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container sm-px0"},[t.done?s("div",{staticClass:"mainImg"},[s("div",{staticClass:"mainImg-content"},[t._m(12),s("img",{staticClass:"mainImg-titleImg",attrs:{src:a("cb3a"),alt:"付款成功"}}),s("router-link",{staticClass:"mainImg-btn",attrs:{to:"/products/all-desserts"}},[t._v(" 繼續逛逛 ")])],1)]):s("div",{staticClass:"content"},[1===t.step?s("div",{staticClass:"l-checkout"},[t._m(0),s("form",{staticClass:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.checkForm(1)}}},[t._m(1),t._m(2),s("div",{staticClass:"w-100"},[s("label",{staticClass:"form-label",attrs:{for:"address"}},[t._v("地址")]),s("div",{staticClass:"flex-between"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.checkstep1.city,expression:"checkstep1.city"}],staticClass:"form-input select-mb form-w50",attrs:{id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.checkstep1,"city",e.target.multiple?a:a[0])}}},[s("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("縣市")]),s("option",{attrs:{value:"台北市"}},[t._v("台北市")]),s("option",{attrs:{value:"桃園縣"}},[t._v("桃園縣")]),s("option",{attrs:{value:"新竹市"}},[t._v("新竹市")]),s("option",{attrs:{value:"苗栗縣"}},[t._v("苗栗縣")]),s("option",{attrs:{value:"高雄市"}},[t._v("高雄市")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.checkstep1.area,expression:"checkstep1.area"}],staticClass:"form-input select-mb form-w50",attrs:{id:"area"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.checkstep1,"area",e.target.multiple?a:a[0])}}},[s("option",{attrs:{selected:"",disabled:"",value:""}},[t._v("區")]),s("option",{attrs:{value:"中山區"}},[t._v("中山區")]),s("option",{attrs:{value:"中正區"}},[t._v("中正區")]),s("option",{attrs:{value:"仁愛區"}},[t._v("仁愛區")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkstep1.address,expression:"checkstep1.address"}],staticClass:"form-input",attrs:{type:"text",name:"",id:"address",required:"",placeholder:"幸福路 520 號",minlength:"5"},domProps:{value:t.checkstep1.address},on:{input:function(e){e.target.composing||t.$set(t.checkstep1,"address",e.target.value)}}})]),s("input",{staticClass:"form-submit",attrs:{type:"submit",value:"下一步"}})])]):t._e(),2===t.step?s("div",{staticClass:"l-checkout"},[t._m(3),s("form",{staticClass:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.checkForm(2)}}},[t._m(4),s("label",{staticClass:"form-label",attrs:{for:"fastname"}},[t._v("持卡人姓名")]),t._m(5),s("div",{staticClass:"w-100"},[s("label",{staticClass:"form-label",attrs:{for:"date"}},[t._v("有效期限")]),s("div",{staticClass:"flex-between"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.card.mm,expression:"card.mm"}],staticClass:"form-input form-w50",attrs:{id:"month"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.card,"mm",e.target.multiple?a:a[0])}}},[s("option",{attrs:{selected:"",disabled:"",value:""}},[t._v("月")]),s("option",{attrs:{value:"01"}},[t._v("01")]),s("option",{attrs:{value:"02"}},[t._v("02")]),s("option",{attrs:{value:"03"}},[t._v("03")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.card.yy,expression:"card.yy"}],staticClass:"form-input form-w50",attrs:{id:"year"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.card,"yy",e.target.multiple?a:a[0])}}},[s("option",{attrs:{selected:"",disabled:"",value:""}},[t._v("年")]),s("option",{attrs:{value:"25"}},[t._v("25")]),s("option",{attrs:{value:"26"}},[t._v("26")]),s("option",{attrs:{value:"27"}},[t._v("27")])])])]),t._m(6),s("input",{staticClass:"form-submit",attrs:{type:"submit",value:"下一步"}})])]):t._e(),3===t.step?s("div",{staticClass:"l-checkout"},[t._m(7),s("form",{staticClass:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.checkoutDone()}}},[s("div",{staticClass:"form-btnGroup"},[s("button",{staticClass:"form-btn",class:{"form-btn-active":t.iseGUI},on:{click:function(e){t.iseGUI=!0}}},[t._v(" 電子發票 ")]),s("button",{staticClass:"form-btn",class:{"form-btn-active":!t.iseGUI},on:{click:function(e){t.iseGUI=!1}}},[t._v(" 郵寄發票 ")])]),t.iseGUI?[t._m(8),t._m(9)]:[s("div",{staticClass:"w-100"},[s("div",{staticClass:"flex-between"},[s("label",{staticClass:"form-label",attrs:{for:"address"}},[t._v("地址")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isSame,expression:"isSame"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isSame)?t._i(t.isSame,null)>-1:t.isSame},on:{change:function(e){var a=t.isSame,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=null,l=t._i(a,r);s.checked?l<0&&(t.isSame=a.concat([r])):l>-1&&(t.isSame=a.slice(0,l).concat(a.slice(l+1)))}else t.isSame=i}}}),t._v(" 同運送地址")])]),s("div",{staticClass:"flex-between"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.eGUI.city,expression:"eGUI.city"}],staticClass:"form-input select-mb form-w50",attrs:{id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.eGUI,"city",e.target.multiple?a:a[0])}}},[s("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("縣市")]),s("option",{attrs:{value:"台北市"}},[t._v("台北市")]),s("option",{attrs:{value:"桃園縣"}},[t._v("桃園縣")]),s("option",{attrs:{value:"新竹市"}},[t._v("新竹市")]),s("option",{attrs:{value:"苗栗縣"}},[t._v("苗栗縣")]),s("option",{attrs:{value:"高雄市"}},[t._v("高雄市")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.eGUI.area,expression:"eGUI.area"}],staticClass:"form-input select-mb form-w50",attrs:{id:"area"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.eGUI,"area",e.target.multiple?a:a[0])}}},[s("option",{attrs:{selected:"",disabled:"",value:""}},[t._v("區")]),s("option",{attrs:{value:"中山區"}},[t._v("中山區")]),s("option",{attrs:{value:"中正區"}},[t._v("中正區")]),s("option",{attrs:{value:"仁愛區"}},[t._v("仁愛區")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.eGUI.address,expression:"eGUI.address"}],staticClass:"form-input",attrs:{type:"text",name:"",id:"address",required:"",minlength:"5",placeholder:"幸福路 520 號"},domProps:{value:t.eGUI.address},on:{input:function(e){e.target.composing||t.$set(t.eGUI,"address",e.target.value)}}})]),t._m(10)],s("input",{staticClass:"form-submit pointer",attrs:{type:"submit",value:"下一步"}})],2)]):t._e(),s("div",{staticClass:"orderSummaryContent"},[s("div",{staticClass:"orderSummary"},[s("div",{staticClass:"orderSummary-title"},[t._v("訂單摘要")]),s("div",{staticClass:"orderSummary-body"},[s("div",{staticClass:"flex-between orderSummary-text"},[s("span",[t._v("小計")]),s("span",[t._v("NT$ "+t._s(t.totalPrice))])]),t._m(11),s("div",{staticClass:"flex-between orderSummary-boldText"},[s("span",[t._v("總計")]),s("span",[t._v("NT$ "+t._s(t.totalPrice+300))])])])]),s("div",{staticClass:"orderSummary orderSummary-mt"},[s("ul",{staticClass:"orderSummary-list"},[s("li",{staticClass:"orderSummary-list-title"},[t._v("購物清單")]),t._l(t.cart,(function(e){return s("li",{key:e.id,staticClass:"orderSummary-item"},[s("div",{staticClass:"orderSummary-item-img",style:{"background-image":"url("+e.imageUrl+")"}}),s("div",[s("div",{staticClass:"orderSummary-item-title"},[t._v(" "+t._s(e.title)+" ("+t._s(e.qty)+") ")]),s("div",{staticClass:"orderSummary-item-totalPrice"},[t._v(" NT$ "+t._s(e.price*e.qty)+" ")])])])}))],2)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-between"},[a("div",{staticClass:"l-checkout-title float-left"},[t._v("運送")]),a("div",{staticClass:"l-stepbarContent float-right"},[a("ul",{staticClass:"l-stepbar"},[a("li",{staticClass:"l-stepbar-item l-stepbar-item-active"}),a("li",{staticClass:"l-stepbar-item"}),a("li",{staticClass:"l-stepbar-item"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 flex-between"},[a("div",{staticClass:"form-w50"},[a("label",{staticClass:"form-label",attrs:{for:"fastname"}},[t._v("姓氏")]),a("input",{staticClass:"form-input",attrs:{type:"text",id:"fastname",placeholder:"王",required:"",minlength:"1"}})]),a("div",{staticClass:"form-w50"},[a("label",{staticClass:"form-label",attrs:{for:"lastname"}},[t._v("名字")]),a("input",{staticClass:"form-input",attrs:{type:"text",required:"",id:"lastname",placeholder:"小明",minlength:"1"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"tel"}},[t._v("電話")]),a("input",{staticClass:"form-input",attrs:{type:"tel",id:"tel",required:"",placeholder:"0912-345-678",minlength:"7",pattern:"[0-9]{4}-[0-9]{3}-[0-9]{3}"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-between"},[a("div",{staticClass:"l-checkout-title float-left"},[t._v("付款")]),a("div",{staticClass:"l-stepbarContent float-right"},[a("ul",{staticClass:"l-stepbar"},[a("li",{staticClass:"l-stepbar-item l-stepbar-item-success"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])]),a("li",{staticClass:"l-stepbar-item l-stepbar-item-active"}),a("li",{staticClass:"l-stepbar-item"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"cardNum"}},[t._v("信用卡卡號")]),a("input",{staticClass:"form-input",attrs:{type:"text",name:"",id:"cardNum",placeholder:"9012-3456-7890-1234",pattern:"[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}",required:""}}),a("div",{staticClass:"input-icon"},[a("span",{staticClass:"material-icons"},[t._v(" credit_card ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 flex-between"},[a("div",{staticClass:"form-w50"},[a("input",{staticClass:"form-input",attrs:{type:"text",name:"",id:"fastname",placeholder:"王",required:"",minlength:"1"}})]),a("div",{staticClass:"form-w50"},[a("input",{staticClass:"form-input",attrs:{type:"text",name:"",id:"lastname",placeholder:"小明",required:"",minlength:"1"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"key"}},[t._v("背面末三碼")]),a("input",{staticClass:"form-input form-w50",attrs:{type:"text",name:"",id:"key",placeholder:"123",pattern:"[0-9]*",minlength:"3",maxlength:"3",required:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-between"},[a("div",{staticClass:"l-checkout-title float-left"},[t._v("發票")]),a("div",{staticClass:"l-stepbarContent float-right"},[a("ul",{staticClass:"l-stepbar"},[a("li",{staticClass:"l-stepbar-item l-stepbar-item-success"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])]),a("li",{staticClass:"l-stepbar-item l-stepbar-item-success"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])]),a("li",{staticClass:"l-stepbar-item l-stepbar-item-active"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("電子郵件信箱")]),a("input",{staticClass:"form-input",attrs:{type:"email",name:"",id:"email",placeholder:"example@email.com"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"taxId"}},[t._v("統一編號（選填）")]),a("input",{staticClass:"form-input",attrs:{type:"text",name:"",id:"taxId",placeholder:"12345678"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("label",{staticClass:"form-label",attrs:{for:"taxId"}},[t._v("統一編號（選填）")]),a("input",{staticClass:"form-input",attrs:{type:"text",name:"",id:"taxId",placeholder:"12345678"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-between orderSummary-text"},[a("span",[t._v("運費")]),a("span",[t._v("NT$ 300")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-stepbarContent"},[a("ul",{staticClass:"l-stepbar l-stepbar-success"},[a("li",{staticClass:"l-stepbar-item"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])]),a("li",{staticClass:"l-stepbar-item"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])]),a("li",{staticClass:"l-stepbar-item"},[a("span",{staticClass:"material-icons"},[t._v(" check_circle ")])])])])}],r=(a("c740"),a("a434"),a("159b"),{inject:["reload"],data:function(){return{cart:[],key:0,totalPrice:0,step:1,done:!1,iseGUI:!0,checkstep1:{city:"",area:"",address:""},card:{mm:"",yy:""},checkstep3:{email:""},eGUI:{city:"",area:"",address:""},isSame:!1}},watch:{isSame:function(){var t=this;t.isSame&&(t.eGUI.city=t.checkstep1.city,t.eGUI.area=t.checkstep1.area,t.eGUI.address=t.checkstep1.address)}},methods:{lessQty:function(t){t.qty>1?t.qty--:1==t.qty&&this.delProduct(t),this.getTotal()},addQty:function(t){t.qty++,this.getTotal()},delProduct:function(t){var e=this,a=e.cart.findIndex((function(e){return e.id===t.id}));e.cart.splice(a,1),e.$parent.updateCart(t),e.getTotal()},getTotal:function(){var t=this,e=0;t.cart.forEach((function(t){e+=t.price*t.qty})),t.totalPrice=e},checkoutDone:function(){var t=this;if(t.iseGUI)t.checkstep3.email?(t.step=1,t.done=!0,t.$parent.cart=[],t.$parent.totalQty=0):alert("請輸入電子郵件信箱！");else{if(!t.eGUI.city)return alert("請選擇縣市。");if(!t.eGUI.area)return alert("請選擇地區。");t.step=1,t.done=!0,t.$parent.cart=[],t.$parent.totalQty=0}},checkForm:function(t){var e=this;if(1===t){if(!e.checkstep1.city)return alert("請選擇縣市。");if(!e.checkstep1.area)return alert("請選擇地區。");e.step=t+1}else if(2===t){if(!e.card.mm)return alert("請選擇有效期限月份。");if(!e.card.yy)return alert("請選擇有效期限年份。");e.step=t+1}}},created:function(){var t=this;t.cart=t.$parent.cart,t.getTotal()}}),l=r,c=(a("56bb"),a("2877")),n=Object(c["a"])(l,s,i,!1,null,"68e52d02",null);e["default"]=n.exports},9546:function(t,e,a){},cb3a:function(t,e,a){t.exports=a.p+"img/lg-付款成功.91cb59c4.svg"}}]);
//# sourceMappingURL=chunk-1d107024.d1615022.js.map