(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29730e77"],{"25ce":function(e,r,t){"use strict";var a=t("acd0"),o=t.n(a);o.a},4136:function(e,r,t){"use strict";var a=t("5086"),o=t.n(a);o.a},"43d9":function(e,r,t){"use strict";var a=t("c9b8"),o=t.n(a);o.a},5086:function(e,r,t){},a434:function(e,r,t){"use strict";var a=t("23e7"),o=t("23cb"),i=t("a691"),n=t("50c4"),s=t("7b0b"),c=t("65f0"),d=t("8418"),l=t("1dde"),u=t("ae40"),p=l("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,f=Math.min,_=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,r){var t,a,l,u,p,m,h=s(this),b=n(h.length),x=o(e,b),C=arguments.length;if(0===C?t=a=0:1===C?(t=0,a=b-x):(t=C-2,a=f(v(i(r),0),b-x)),b+t-a>_)throw TypeError(g);for(l=c(h,a),u=0;u<a;u++)p=x+u,p in h&&d(l,u,h[p]);if(l.length=a,t<a){for(u=x;u<b-a;u++)p=u+a,m=u+t,p in h?h[m]=h[p]:delete h[m];for(u=b;u>b-a+t;u--)delete h[u-1]}else if(t>a)for(u=b-a;u>x;u--)p=u+a-1,m=u+t-1,p in h?h[m]=h[p]:delete h[m];for(u=0;u<t;u++)h[u+x]=arguments[u+2];return h.length=b-a+t,l}})},acd0:function(e,r,t){},c9b8:function(e,r,t){},dfc4:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"registro"},[t("h1",{staticClass:"registro_tittle"},[e._v("Registro de Producto")]),t("div",{staticClass:"registro_container"},[t("FormImage",{on:{sendimages:function(r){return e.passImages(r)}}}),t("Formulario",{staticClass:"registro_form",attrs:{images:e.images}})],1)])},o=[],i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"formulario"},[t("h2",{staticClass:"formulario_tittle"},[e._v("Datos del producto:")]),t("form",{staticClass:"formulario_form",attrs:{autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),e.submitForm(r)}}},[t("div",{staticClass:"formulario_group"},[t("label",[t("div",{staticClass:"formulario_name"},[e._v("Nombre Producto:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.nombre_prod,expression:"producto.nombre_prod"}],style:e.$v.producto.nombre_prod.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{type:"text",required:""},domProps:{value:e.producto.nombre_prod},on:{input:function(r){r.target.composing||e.$set(e.producto,"nombre_prod",r.target.value)}}})]),e.$v.producto.nombre_prod.alpha1?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" No se aceptan caracteres especiales. ")]),e.$v.producto.nombre_prod.minLength?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Debe tener una longitud no menor a "+e._s(e.$v.producto.nombre_prod.$params.minLength.min)+". ")]),e.$v.producto.nombre_prod.required?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.producto.nombre_prod.maxLength?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Nombre muy largo maximo "+e._s(e.$v.producto.nombre_prod.$params.maxLength.max)+" caracteres. ")])]),t("div",{staticClass:"formulario_group"},[t("label",[t("div",{staticClass:"formulario_name"},[e._v("Descripción:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.producto.descripcion,expression:"producto.descripcion"}],style:e.$v.producto.descripcion.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{cols:"50",rows:"10",maxlength:"1000"},domProps:{value:e.producto.descripcion},on:{input:function(r){r.target.composing||e.$set(e.producto,"descripcion",r.target.value)}}})]),t("div",{staticClass:"formulario_check-error1"},[e._v(" "+e._s(e.producto.descripcion.length+"/1000")+" caracteres. ")]),e.$v.producto.descripcion.maxLength?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Descripcion muy larga maximo "+e._s(e.$v.producto.descripcion.$params.maxLength.max)+" caracteres. ")]),e.$v.producto.descripcion.required?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")])]),t("div",[t("label",[t("div",{staticClass:"formulario_name"},[e._v("Categoría:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.categoria,expression:"producto.categoria"}],style:e.$v.producto.categoria.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{list:"categorias"},domProps:{value:e.producto.categoria},on:{input:function(r){r.target.composing||e.$set(e.producto,"categoria",r.target.value)}}})]),e.$v.producto.categoria.required?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.producto.categoria.alpha3?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" No se aceptan caracteres especiales. ")]),e._m(0)]),t("div",{staticClass:"formulario_group"},[t("label",[e.producto.peso||e.producto.cantidad?e._e():t("p",{staticClass:"formulario_name"},[e._v(" Precio (Bs.): ")]),e.producto.peso?t("p",{staticClass:"formulario_name"},[e._v(" Precio por "+e._s(e.producto.unidad_med.slice(0,e.producto.unidad_med.length-1))+" "),t("span",[e._v("(Bs):")])]):e._e(),e.producto.cantidad?t("p",{staticClass:"formulario_name"},[e._v(" Precio por unidad "),t("span",[e._v("(Bs):")])]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.precio_unid,expression:"producto.precio_unid"}],style:e.$v.producto.precio_unid.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{type:"text"},domProps:{value:e.producto.precio_unid},on:{input:function(r){r.target.composing||e.$set(e.producto,"precio_unid",r.target.value)}}})]),e.$v.producto.precio_unid.required?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.producto.precio_unid.between?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Campo invalido (0.10-10000). ")]),e.$v.producto.precio_unid.validate_decimales?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Maximo 2 decimales! ")]),e.$v.producto.precio_unid.alpha2?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese un valor numérico. ")])]),t("fieldset",[t("legend",{staticClass:"formulario_name"},[e._v("Cantidad:")]),t("div",{staticClass:"formulario_group"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.unidad,expression:"producto.unidad"}],attrs:{type:"radio",id:"precio_unidades"},domProps:{checked:e._q(e.producto.unidad,null)},on:{click:function(r){return e.selectCantidad(!1)},change:function(r){return e.$set(e.producto,"unidad",null)}}}),t("span",{staticClass:"formulario_name formulario_name-span"},[e._v("Unidades")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.cantidad,expression:"producto.cantidad"}],attrs:{type:"text",disabled:e.disabled,required:!e.disabled},domProps:{value:e.producto.cantidad},on:{input:function(r){r.target.composing||e.$set(e.producto,"cantidad",r.target.value)}}}),e.$v.producto.cantidad.between?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese valores enteros entre (1-1000). ")]),e.$v.producto.cantidad.integer?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Solo se aceptan valores enteros. ")]),e.$v.producto.cantidad.alpha2?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese un valor numérico ")])]),t("div",{staticClass:"formulario_group"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.unidad,expression:"producto.unidad"}],attrs:{type:"radio",value:"peso",id:"precio_peso"},domProps:{checked:e._q(e.producto.unidad,"peso")},on:{click:function(r){return e.selectCantidad(!0)},change:function(r){return e.$set(e.producto,"unidad","peso")}}}),t("span",{staticClass:"formulario_name formulario_name-span"},[e._v("Peso")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.peso,expression:"producto.peso"}],staticClass:"formulario_peso",attrs:{type:"text",step:"0.25",disabled:!e.disabled,required:e.disabled},domProps:{value:e.producto.peso},on:{input:function(r){r.target.composing||e.$set(e.producto,"peso",r.target.value)}}}),t("select",{directives:[{name:"model",rawName:"v-model",value:e.producto.unidad_med,expression:"producto.unidad_med"}],attrs:{required:e.disabled,disabled:!e.disabled},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.producto,"unidad_med",r.target.multiple?t:t[0])}}},[t("option",{attrs:{selected:"",value:""}},[e._v("Elige una opción")]),t("option",{attrs:{value:"Kilogramos"}},[e._v("Kilogramos")]),t("option",{attrs:{value:"Libras"}},[e._v("Libras")]),t("option",{attrs:{value:"Litros"}},[e._v("Litros")]),t("option",{attrs:{value:"Galones"}},[e._v("Galones")]),t("option",{attrs:{value:"Onzas"}},[e._v("Onzas")])]),e.$v.producto.peso.between?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese valores entre (0.10-100). ")]),e.$v.producto.peso.validate_decimales?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Maximo 2 decimales! ")]),e.$v.producto.peso.alpha2?e._e():t("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese un valor numérico. ")])])]),t("div",{staticClass:"formulario_group"},[t("label",[t("div",{staticClass:"formulario_name"},[e._v("Fecha de vencimiento del producto:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.producto.fecha_venc,expression:"producto.fecha_venc"}],attrs:{type:"date",value:"DD/MM/AA",onkeydown:"return false"},domProps:{value:e.producto.fecha_venc},on:{input:function(r){r.target.composing||e.$set(e.producto,"fecha_venc",r.target.value)}}})]),e.$v.producto.fecha_venc.validate_date?e._e():t("div",{staticClass:"formulario_check-error-center"},[e._v(" fecha invalida ")])]),t("button",{staticClass:"formulario_button",attrs:{disabled:e.$v.producto.$invalid}},[e._v(" Confirmar ")])])])},n=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("datalist",{attrs:{id:"categorias"}},[t("option",{attrs:{value:"Farmacia"}}),t("option",{attrs:{value:"Electronicos"}}),t("option",{attrs:{value:"Ropa"}}),t("option",{attrs:{value:"Alimentos"}}),t("option",{attrs:{value:"Entretenimiento"}})])}],s=(t("4160"),t("c975"),t("fb6a"),t("ac1f"),t("1276"),t("159b"),t("96cf"),t("1da1")),c=t("b5ae"),d=c["helpers"].regex("alpha1",/^[a-zA-Z0-9ñ+áéíóúÁÉÍÓÚ'\s]*$/),l=c["helpers"].regex("alpha1",/^[0-9,.\s]*$/),u=c["helpers"].regex("alpha3",/^[a-zA-Z\s]*$/),p=function(e){var r=new Date,t=r.getDate(),a=r.getMonth()+1,o=r.getFullYear(),i=parseInt(e.slice(0,4)),n=parseInt(e.slice(5,7)),s=parseInt(e.slice(8,10));return!c["helpers"].req(e)||!(i<o)&!(i==o&&n<a)&!(o==i&&a==n&&s<t)},m=function(e){var r=String(e);if(r.indexOf(".")>0){var t=r.split("."),a=String(t[1]);return!c["helpers"].req(e)||!(a.length>2)}return!0},v={name:"Formulario",data:function(){return{disabled:!1,producto:{nombre_prod:null,descripcion:"",categoria:null,precio_unid:null,unidad:null,cantidad:null,peso:null,unidad_med:null,fecha_venc:""}}},props:["images"],validations:{producto:{nombre_prod:{required:c["required"],minLength:Object(c["minLength"])(2),maxLength:Object(c["maxLength"])(30),alpha1:d},descripcion:{required:c["required"],maxLength:Object(c["maxLength"])(1e3)},categoria:{required:c["required"],alpha3:u},precio_unid:{required:c["required"],between:Object(c["between"])(.1,1e4),validate_decimales:m,alpha2:l},cantidad:{between:Object(c["between"])(1,1e3),integer:c["integer"],alpha2:l},peso:{between:Object(c["between"])(.1,100),validate_decimales:m,alpha2:l},fecha_venc:{validate_date:p}}},methods:{selectCantidad:function(e){this.disabled=e,this.disabled?(this.producto.cantidad=null,this.producto.peso="",this.producto.unidad_med=""):(this.producto.peso=null,this.producto.unidad_med=null,this.producto.cantidad="")},submitForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.$v.producto.$invalid){r.next=14;break}if(0!=e.images.length){r.next=6;break}alert("Registra por lo menos una imagen"),r.next=12;break;case 6:return r.next=8,e.sendDataProduct();case 8:return t=r.sent,r.next=11,e.sendImage(t);case 11:alert("Producto creado exitosamente");case 12:r.next=15;break;case 14:alert("Rellene todos los datos correctamente");case 15:r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](0),alert(r.t0);case 20:case"end":return r.stop()}}),r,null,[[0,17]])})))()},sendDataProduct:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$http.post("products",{nombre_prod:e.producto.nombre_prod,descripcion:e.producto.descripcion,categoria:e.producto.categoria,precio_unid:e.producto.precio_unid,cantidad:e.producto.cantidad?e.producto.cantidad:null,peso:e.producto.peso?e.producto.peso:null,unidad_med:e.producto.unidad_med?e.producto.unidad_med:null,fecha_venc:""==e.producto.fecha_venc?null:e.producto.fecha_venc});case 3:return t=r.sent,r.abrupt("return",t.data[0].cod_prod);case 7:throw r.prev=7,r.t0=r["catch"](0),new Error("El nombre del producto esta repetido");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},sendImage:function(e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.images.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$http.post("images",{cod_prod:e,imagen:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}}},f=v,_=(t("4136"),t("2877")),g=Object(_["a"])(f,i,n,!1,null,null,null),h=g.exports,b=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"imagenes"},[t("h2",{staticClass:"formulario_tittle"},[e._v("Fotos del producto:")]),t("input",{ref:"files",staticClass:"images_input",attrs:{type:"file",id:"files",accept:"image/*",multiple:""},on:{change:function(r){return e.handleFilesUpload()}}}),t("div",{staticClass:"imagenes_container"},[e._l(e.files,(function(r,a){return t("div",{key:a,class:"imagenes_list "+(0==a?"imagenes_list-firt":"")},[t("img",{ref:"image"+parseInt(a),refInFor:!0,staticClass:"imagenes_preview",attrs:{height:0==a?"360px":"200px"}}),t("span",{staticClass:"imagenes_remove",on:{click:function(r){return e.removeFile(a,2)}}},[e._v("X")])])})),0==e.files.length?t("div",{staticClass:"imagenes_list-firt"}):e._e(),e._l(3,(function(r,a){return[e.image64.length<=a+1?t("div",{key:"image"+a,staticClass:"images_container-button"},[t("button",{staticClass:"add_imagenes",on:{click:function(r){return e.addFiles()}}},[t("span",{staticClass:"images_container-button"},[e._v("+")])])]):e._e()]}))],2),e.$v.files.required?e._e():t("span",{staticClass:"formulario_check-error"},[e._v("Faltan fotografias")]),e.$v.files.maxLength?e._e():t("span",{staticClass:"formulario_check-error"},[e._v("No se aceptan mas de 4 imagenes")])])},x=[];t("a434"),t("b0c0"),t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("3ca3"),t("ddb0");function C(e){return C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}var $={name:"FormImage",data:function(){return{files:[],image64:[]}},validations:{files:{required:c["required"],maxLength:Object(c["maxLength"])(4)}},methods:{addFiles:function(){this.$refs.files.click()},handleFilesUpload:function(){for(var e=this,r=this.$refs.files.files,t=r.length,a=function(){var t=r[o];if(/\.(jpe?g|png)$/i.test(t.name)){for(i=0;i<e.files.length;i++)if(t.name==e.files[i].name)return alert(t.name+" ya fue subido"),e.removeFile(e.files.length+o,1),{v:void 0};if(t.size>1048576)return alert(t.name+" es muy pesado (> 1MB)"),e.removeFile(e.files.length+o,1),{v:void 0};var a=new FileReader;a.readAsDataURL(t),a.onload=function(r){var a=new Image;a.onload=function(){return a.width<640||a.width>1366?(alert("El ancho de "+t.name+" debe estar entre 640px y 1366px"),void e.removeFile(e.files.length+o,1)):a.height<360||a.height>768?(alert("El alto de "+t.name+" debe estar entre 360px y 768px"),void e.removeFile(e.files.length+o,1)):e.files.length>=4?(alert("No puede ingresar más de 4 imagenes"),void e.removeFile(e.files.length+o,1)):(e.createBase64Image(t),e.files.push(t),e.getImagePreviews(),void e.$emit("sendimages",e.image64))},a.src=r.target.result}}else alert(t.name+" no es un archivo jpg o png")},o=0;o<t;o++){var i,n=a();if("object"===C(n))return n.v}},getImagePreviews:function(){for(var e=this,r=function(r){if(/\.(jpe?g|png)$/i.test(e.files[r].name)){var t=new FileReader;t.addEventListener("load",function(){this.$refs["image"+parseInt(r)][0].src=t.result}.bind(e),!1),t.readAsDataURL(e.files[r])}},t=0;t<this.files.length;t++)r(t)},removeFile:function(e,r){this.files.splice(e,1),this.getImagePreviews(),2==r&&this.image64.splice(e,1)},createBase64Image:function(e){var r=this,t=new FileReader;t.readAsDataURL(e),t.onload=function(e){r.image64.push(e.target.result)}}}},w=$,k=(t("43d9"),Object(_["a"])(w,b,x,!1,null,"28130a60",null)),y=k.exports,F={name:"RegistroProducto",components:{Formulario:h,FormImage:y},data:function(){return{images:[]}},methods:{passImages:function(e){this.images=e}}},q=F,I=(t("25ce"),Object(_["a"])(q,a,o,!1,null,"5f4dfb37",null));r["default"]=I.exports}}]);
//# sourceMappingURL=chunk-29730e77.fd0c4b31.js.map