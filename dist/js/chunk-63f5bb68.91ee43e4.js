(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f5bb68"],{"5ebf":function(t,s,a){},a194:function(t,s,a){"use strict";a("5ebf")},b7c8:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.order.id?a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("h4",[t._v("載入中 請稍候...")])]),a("div",{staticClass:"container text-dark"},[a("div",{staticClass:"my-3"},[a("h4",{staticClass:"my-3"},[t._v("結帳")]),a("form",{staticClass:"row justify-content-md-center",on:{submit:function(s){return s.preventDefault(),t.payOrder(t.times)}}},[t.order.is_paid?t._e():a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"border p-3 mb-3"},[t._m(0),a("h6",[a("div",{staticClass:"float-left"},[t._v("小計：")]),a("div",{staticClass:"float-right"},[t._v("NT$ "+t._s(t._f("numFormat")(t.order.total)))])]),a("br"),t._m(1),a("h4",{staticClass:"mt-5 border-top py-3",class:{h5:t.order.final_total!==t.order.total}},[a("div",{staticClass:"float-left"},[t._v("總計")]),a("div",{staticClass:"float-right"},[t._v("NT$ "+t._s(t._f("numFormat")(t.order.total)))])]),"2"===t.paymethods&&t.order.is_paid?a("h3",{staticClass:"bg-dark text-light p-2 my-3"},[t._v(" 請於三日內完成匯款🙏 ")]):"1"===t.paymethods&&t.order.is_paid?a("h3",{staticClass:"bg-dark text-light p-2 my-3"},[t._v(" 已完成結帳手續😊 ")]):t._e()]),a("div",{staticClass:"border p-3"},[t._m(2),a("hr"),a("table",{staticClass:"table table-borderless text-dark"},[a("tbody",t._l(t.order.products,(function(s){return a("tr",{key:s.id},[a("th",[a("img",{staticClass:"cart-img",attrs:{src:s.product.imageUrl,alt:s.product.title}})]),a("td",{staticClass:"text-left"},[a("p",[t._v(" "+t._s(s.product.title)+" "),a("br"),a("span",{staticClass:"text-muted"},[t._v(" NT$"+t._s(s.product.price)+" ")]),t._v(" x "+t._s(s.qty)+" ")])])])})),0)])])]),a("div",{staticClass:"col-lg-8 col-md-6"},[a("div",{staticClass:"p-2"},[t._m(3),a("div",{staticClass:"progress mx-lg-5"},[a("div",{staticClass:"progress-bar",class:t.step})]),1===t.times?a("div",{staticClass:"my-3"},[a("div",{staticClass:"border p-3 mx-lg-5"},[a("h5",{staticClass:"my-3"},[t._v("收件人資料")]),a("table",{staticClass:"table text-dark m-0"},[a("tbody",[a("tr",[a("th",{staticClass:"border-0",attrs:{width:"120"}},[t._v("Email :")]),a("td",{staticClass:"border-0",attrs:{width:""}},[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名 :")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話 :")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址 :")]),a("td",[t._v(t._s(t.order.user.address))])])])])])]):2===t.times?a("div",{staticClass:"my-3"},[a("div",{staticClass:"border p-3 mx-lg-5"},[a("h5",{staticClass:"my-3"},[t._v("付款方式")]),a("div",{staticClass:"my-3"},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymethods,expression:"paymethods"}],staticClass:"custom-control-input",attrs:{id:"getandpay",name:"paymentMethod",type:"radio",required:"",value:"1"},domProps:{checked:t._q(t.paymethods,"1")},on:{change:function(s){t.paymethods="1"}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"getandpay"}},[t._v(" 取貨付款 ")])]),a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymethods,expression:"paymethods"}],staticClass:"custom-control-input",attrs:{id:"transfer",name:"paymentMethod",type:"radio",required:"",value:"2"},domProps:{checked:t._q(t.paymethods,"2")},on:{change:function(s){t.paymethods="2"}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"transfer"}},[t._v(" 銀行轉帳 ")])])]),a("div",{staticClass:"bank",class:{"d-none":"1"===t.paymethods}},[a("p",{staticClass:"my-3"},[t._v("ATM 轉帳繳款資料如下")]),t._m(4)])])]):t._e(),a("div",{staticClass:"my-3 px-lg-5 down",class:{"d-none":3!==t.times}},[t.order.is_paid?a("h3",{staticClass:"my-4 text-success"},[t._v(" ☑️ 結帳成功 ")]):t._e(),a("table",{staticClass:"table table-striped text-dark m-0"},[a("tbody",[a("tr",[a("th",[t._v("姓名 :")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話 :")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址 :")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v(" 購買品項 : ")]),a("td",t._l(t.order.products,(function(s){return a("span",{key:s.id},[t._v(" "+t._s(s.product.title)+" x "+t._s(s.qty)+" "),a("br")])})),0)]),a("tr",[a("th",[t._v("付款方式 :")]),"1"===t.paymethods?a("td",[t._v("貨到付款")]):"2"===t.paymethods?a("td",[t._v("ATM 匯款")]):t._e()]),a("tr",[a("th",[t._v("付款狀態 :")]),"1"===t.paymethods&&t.order.is_paid?a("td",{staticClass:"text-muted"},[t._v(" 已選擇貨到付款 ")]):"2"===t.paymethods&&t.order.is_paid?a("td",{staticClass:"text-muted"},[t._v(" 已選擇ATM 匯款 ")]):t._e(),!1===t.order.is_paid?a("td",{staticClass:"text-muted"},[a("i",[t._v("等待付款中")])]):t._e()])])])]),3!==t.times?a("button",{staticClass:"btn btn-dark my-3"},[t._v(" 下一步 ")]):t._e(),3===t.times?a("button",{staticClass:"btn btn-dark my-3",on:{click:function(s){return t.$router.push("/products/all")}}},[t._v(" 再去逛逛 ")]):t._e()])])])])])],1):t._e()},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"mb-4"},[a("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),t._v(" 訂單摘要 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h6",[a("div",{staticClass:"float-left"},[t._v(" 運費 "),a("i",{staticClass:"small text-muted"},[t._v("(週年慶 - 免運費)")]),t._v(" ： ")]),a("div",{staticClass:"float-right"},[a("del",{staticClass:"text-secondary mr-2"},[t._v("NT$ 200")]),t._v(" NT$ 0 ")]),a("br")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"mb-3"},[a("i",{staticClass:"fa fa-list-ol",attrs:{"aria-hidden":"true"}}),t._v(" 購物車內容 ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row my-3 text-muted"},[a("div",{staticClass:"col-4"},[t._v("1.確認資料")]),a("div",{staticClass:"col-4"},[t._v("2.付款方式")]),a("div",{staticClass:"col-4"},[t._v("3.完成")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table table-striped table-bordered text-dark"},[a("tbody",[a("tr",[a("th",[t._v("◆ 銀行名稱：")]),a("td",[t._v("012 台北富邦銀行")])]),a("tr",[a("th",[t._v("◆ 戶 名：")]),a("td",[t._v("拼圖迷股份有限公司")])]),a("tr",[a("th",[t._v("◆ 帳 號：")]),a("td",[t._v("123-321-123456-7")])])])])}],i=(a("99af"),a("1157")),d=a.n(i),o={data:function(){return{order:{},orderId:"",isLoading:!1,step:{"w-50":!1,"w-100":!1},times:1,paymethods:"1",card:{name:"",num:"",key:"",mm:"",yy:""}}},methods:{getOrder:function(){var t=this;t.isLoading=!0;var s="".concat("https://vue-course-api.hexschool.io/","api/").concat("wangxuan","/order/").concat(t.orderId);t.$http.get(s).then((function(s){t.isLoading=!1,s.data.success?(t.order=s.data.order,t.order.is_paid&&(t.times=3,t.step["w-100"]=!0)):t.$bus.$emit("message:push",s.data.message,"danger")}))},payOrder:function(t){var s=this;if(s.isLoading=!0,s.times++,1===t)s.step["w-50"]=!0;else if(2===t){s.step["w-100"]=!0;var a="".concat("https://vue-course-api.hexschool.io/","api/").concat("wangxuan","/pay/").concat(s.orderId);s.$http.post(a).then((function(t){t.data.success?(s.$bus.$emit("message:push","結帳確認完成","dark"),s.getOrder(),d()(".down").show()):s.$bus.$emit("message:push",t.data.message,"danger")}))}s.isLoading=!1}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},watch:{paymethods:function(){var t=this;"1"===t.paymethods?d()(".bank").hide():"2"===t.paymethods&&d()(".bank").show()}}},c=o,l=(a("a194"),a("2877")),n=Object(l["a"])(c,e,r,!1,null,"bc24b4b0",null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-63f5bb68.91ee43e4.js.map