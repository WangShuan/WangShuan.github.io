(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207472"],{a09f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{key:t.dataKey},[s("div",{staticClass:"navbar"},[s("div",{staticClass:"d-flex flex-wrap align-items-center"},[s("div",{staticClass:"navbar-title",on:{click:function(a){return a.stopPropagation(),t.$parent.leaveFolder()}}},[t._v(" 我的雲端硬碟 ")]),s("div",{staticClass:"navbar-title-arrow"}),s("div",{staticClass:"navbar-title-folderName"},[t._v("已標記星號")]),t.search?[s("div",{staticClass:"navbar-title-arrow"}),s("div",{staticClass:"navbar-title-folderName"},[t._v('"'+t._s(t.search)+'" 搜尋結果')])]:t._e()],2),s("div",{staticClass:"navbar-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"navbar-search-input",attrs:{type:"text",placeholder:"搜尋您的檔案"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),s("div",{staticClass:"w-100 title"},[t._v("資料夾")]),s("transition",{attrs:{name:"fade"}},[t.folder[0]&&!t.filterRet?s("div",{staticClass:"row gutter-10"},t._l(t.folder,(function(a){return s("div",{key:a.fullPath,staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12",class:{"d-none":a.isTrash}},[s("div",{staticClass:"folder",on:{click:function(e){return e.target!==e.currentTarget?null:t.$parent.enterFolder(a.fullPath)}}},[s("div",{staticClass:"folder-btnGroup"},[s("div",{staticClass:"folder-btn",on:{click:function(e){return e.stopPropagation(),t.toggleStarFolder(a)}}},[a.isStar?s("img",{attrs:{src:e("5925"),alt:"標記星號"}}):s("img",{attrs:{src:e("8a7e"),alt:"標記星號"}})]),s("div",{staticClass:"dropdown"},[s("div",{staticClass:"folder-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("img",{attrs:{src:e("b68c"),alt:"選單"}})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("共享")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.clickDownloadFolder(a)}}},[t._v("下載")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openReNameModal(a)}}},[t._v("重新命名")]),s("a",{staticClass:"dropdown-item border-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickTrashFolder(a)}}},[t._v("移至垃圾桶")])])])]),s("span",{staticClass:"text-truncate d-inline-block px-2 w-100"},[t._v(t._s(a.fakeName))])])])})),0):t._e()]),s("transition",{attrs:{name:"fade"}},[t.filterRet?s("div",{staticClass:"row gutter-10"},t._l(t.filterRet.folders,(function(a){return s("div",{key:a.fullPath,staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12",class:{"d-none":a.isTrash}},[s("div",{staticClass:"folder",on:{click:function(e){return e.target!==e.currentTarget?null:t.$parent.enterFolder(a.fullPath)}}},[s("div",{staticClass:"folder-btnGroup"},[s("div",{staticClass:"folder-btn",on:{click:function(e){return e.stopPropagation(),t.toggleStarFolder(a)}}},[a.isStar?s("img",{attrs:{src:e("5925"),alt:"標記星號"}}):s("img",{attrs:{src:e("8a7e"),alt:"標記星號"}})]),s("div",{staticClass:"dropdown"},[s("div",{staticClass:"folder-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("img",{attrs:{src:e("b68c"),alt:"選單"}})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("共享")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.clickDownloadFolder(a)}}},[t._v("下載")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openReNameModal(a)}}},[t._v("重新命名")]),s("a",{staticClass:"dropdown-item border-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickTrashFolder(a)}}},[t._v("移至垃圾桶")])])])]),s("span",{staticClass:"text-truncate d-inline-block px-2 w-100"},[t._v(t._s(a.fakeName))])])])})),0):t._e()]),s("div",{staticClass:"w-100 title"},[t._v("檔案")]),s("transition",{attrs:{name:"fade"}},[t.file[0]&&!t.filterRet?s("div",{staticClass:"row gutter-10"},t._l(t.file,(function(a){return s("div",{key:a.fullPath,staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12",class:{"d-none":a.isTrash}},[s("div",{staticClass:"file"},[s("div",{staticClass:"file-btnGroup"},[s("div",{staticClass:"file-btn",on:{click:function(e){return e.stopPropagation(),t.toggleStarFile(a)}}},[a.isStar?s("img",{attrs:{src:e("5925"),alt:"標記星號"}}):s("img",{attrs:{src:e("8a7e"),alt:"標記星號"}})]),s("div",{staticClass:"dropdown"},[s("div",{staticClass:"file-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("img",{attrs:{src:e("b68c"),alt:"選單"}})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("共享")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.clickDownload(a.name)}}},[t._v(" 下載 ")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openReNameModal(a)}}},[t._v("重新命名")]),s("a",{staticClass:"dropdown-item border-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickTrash(a)}}},[t._v(" 移至垃圾桶 ")])])])]),s("img",{staticClass:"file-img",attrs:{src:a.imgUrl,alt:""}}),s("span",{staticClass:"text-truncate d-inline-block px-2 w-100"},[t._v(t._s(a.fakeName))])])])})),0):t._e()]),s("transition",{attrs:{name:"fade"}},[t.filterRet?s("div",{staticClass:"row gutter-10"},t._l(t.filterRet.files,(function(a){return s("div",{key:a.fullPath,staticClass:"col-xl-3 col-lg-4 col-md-6 col-sm-12",class:{"d-none":a.isTrash}},[s("div",{staticClass:"file"},[s("div",{staticClass:"file-btnGroup"},[s("div",{staticClass:"file-btn",on:{click:function(e){return e.stopPropagation(),t.toggleStarFile(a)}}},[a.isStar?s("img",{attrs:{src:e("5925"),alt:"標記星號"}}):s("img",{attrs:{src:e("8a7e"),alt:"標記星號"}})]),s("div",{staticClass:"dropdown"},[s("div",{staticClass:"file-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("img",{attrs:{src:e("b68c"),alt:"選單"}})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("共享")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.clickDownload(a.name)}}},[t._v(" 下載 ")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openReNameModal(a)}}},[t._v("重新命名")]),s("a",{staticClass:"dropdown-item border-0",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickTrash(a)}}},[t._v(" 移至垃圾桶 ")])])])]),s("img",{staticClass:"file-img",attrs:{src:a.imgUrl,alt:""}}),s("span",{staticClass:"text-truncate d-inline-block px-2 w-100"},[t._v(t._s(a.fakeName))])])])})),0):t._e()]),s("ReName",{attrs:{item:t.item,oldName:t.oldName}})],1)},r=[],i=(e("ac1f"),e("841c"),e("159b"),e("b0c0"),e("c740"),e("a434"),e("1157")),n=e.n(i),l=e("10c8"),o={data:function(){return{folder:this.$parent.starFolder,file:this.$parent.starFile,search:"",dataKey:0,item:{},oldName:""}},components:{ReName:l["a"]},computed:{filterRet:function(){var t=this;if(this.search||this.$parent.search){var a={files:[],folders:[]};return this.folder.forEach((function(e){-1!==e.name.indexOf(t.search||t.$parent.search)&&a.folders.push(e)})),this.file.forEach((function(e){-1!==e.name.indexOf(t.search||t.$parent.search)&&a.files.push(e)})),a}return!1}},methods:{openReNameModal:function(t){n()("#rename-modal").modal("show"),this.item=t,this.oldName=t.fakeName},toggleStarFolder:function(t){if(t.isStar=!t.isStar,this.dataKey+=1,t.name=t.fullPath,t.isStar)this.folder.push(t);else{var a=this.folder.findIndex((function(a){return a==t}));this.folder.splice(a,1)}},toggleStarFile:function(t){if(t.isStar=!t.isStar,this.dataKey+=1,t.name=t.fullPath,t.isStar)this.file.push(t);else{var a=this.file.findIndex((function(a){return a==t}));this.file.splice(a,1)}},clickTrash:function(t){confirm("是否要將 "+t.name+" 移至垃圾桶？")&&(t.isTrash=!0,this.$parent.trashFile.push(t),this.dataKey+=1)},clickTrashFolder:function(t){confirm("是否要將 "+t.name+" 移至垃圾桶？")&&(t.isTrash=!0,this.$parent.trashFolder.push(t),this.dataKey+=1)}},created:function(){}},c=o,d=e("2877"),u=Object(d["a"])(c,s,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d207472.5770a302.js.map