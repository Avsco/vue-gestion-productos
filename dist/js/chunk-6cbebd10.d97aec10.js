(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cbebd10"],{"15dc":function(e,t,o){"use strict";var r=o("a0a7"),a=o.n(r);a.a},"37cf":function(e,t,o){},"3b02":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._m(1),o("ProductList"),e.isMoreThanTwo?o("div",{staticClass:"formulario_check-error-center"},[e._v(" Seleccione 2 productos como mínimo ")]):e._e(),o("div",[o("ImageAdd",{staticClass:"inline-elem",on:{"send-image":function(t){return e.passImage(t)}}}),o("Form",{staticClass:"inline-elem",attrs:{image:e.imagen}})],1)],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",[o("strong",[e._v("Registro de Promoción")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticClass:"left"},[o("strong",[e._v("Paquete de productos:")])])}],i=(o("b64b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"formulario"},[o("form",{staticClass:"formulario_form",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Nombre de promoción:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.promocion.nombre_prom,expression:"promocion.nombre_prom"}],style:e.$v.promocion.nombre_prom.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{type:"text",required:""},domProps:{value:e.promocion.nombre_prom},on:{input:function(t){t.target.composing||e.$set(e.promocion,"nombre_prom",t.target.value)}}})]),e.$v.promocion.nombre_prom.alpha?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" No se aceptan caracteres especiales. ")]),e.$v.promocion.nombre_prom.minLength?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Debe tener una longitud no menor a "+e._s(e.$v.promocion.nombre_prom.$params.minLength.min)+". ")]),e.$v.promocion.nombre_prom.required?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.promocion.nombre_prom.maxLength?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Nombre muy largo maximo "+e._s(e.$v.promocion.nombre_prom.$params.maxLength.max)+" caracteres. ")])]),o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Descripción:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.promocion.descripcion,expression:"promocion.descripcion"}],style:e.$v.promocion.descripcion.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{cols:"50",rows:"10",maxlength:"1000"},domProps:{value:e.promocion.descripcion},on:{input:function(t){t.target.composing||e.$set(e.promocion,"descripcion",t.target.value)}}})]),o("div",{staticClass:"formulario_check-error1"},[e._v(" "+e._s(e.promocion.descripcion.length+"/1000")+" caracteres. ")]),e.$v.promocion.descripcion.alpha1?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" No se aceptan caracteres especiales. ")]),e.$v.promocion.descripcion.maxLength?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Descripcion muy larga maximo "+e._s(e.$v.promocion.descripcion.$params.maxLength.max)+" caracteres. ")]),e.$v.promocion.descripcion.required?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")])]),o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Precio(Bs.):")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.promocion.precio_unid,expression:"promocion.precio_unid"}],style:e.$v.promocion.precio_unid.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{type:"text"},domProps:{value:e.promocion.precio_unid},on:{input:function(t){t.target.composing||e.$set(e.promocion,"precio_unid",t.target.value)}}})]),e.$v.promocion.precio_unid.required?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.promocion.precio_unid.between?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Campo invalido (0.10-10000). ")]),e.$v.promocion.precio_unid.validate_decimales?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Maximo 2 decimales! ")]),e.$v.promocion.precio_unid.alpha2?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese un valor numérico. ")])]),o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Cantidad:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.promocion.cantidad,expression:"promocion.cantidad"}],style:e.$v.promocion.cantidad.$invalid?"border:1px solid red ":"border:1px solid green ",attrs:{type:"text"},domProps:{value:e.promocion.cantidad},on:{input:function(t){t.target.composing||e.$set(e.promocion,"cantidad",t.target.value)}}})]),e.$v.promocion.cantidad.required?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Campo requerido. ")]),e.$v.promocion.cantidad.between?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese valores enteros entre (1-1000). ")]),e.$v.promocion.cantidad.integer?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Solo se aceptan valores enteros. ")]),e.$v.promocion.cantidad.alpha2?e._e():o("div",{staticClass:"formulario_check-error"},[e._v(" Ingrese un valor numérico ")])]),o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Inicio de promoción:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.promocion.fecha_inicio,expression:"promocion.fecha_inicio"}],attrs:{type:"date",value:"DD/MM/AA",onkeydown:"return false"},domProps:{value:e.promocion.fecha_inicio},on:{input:function(t){t.target.composing||e.$set(e.promocion,"fecha_inicio",t.target.value)}}})]),e.$v.promocion.fecha_inicio.validate_date?e._e():o("div",{staticClass:"formulario_check-error-center"},[e._v(" Fecha fuera de límite ")])]),o("div",{staticClass:"formulario_group"},[o("label",[o("div",{staticClass:"formulario_name"},[e._v("Fin de promoción:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.promocion.fecha_fin,expression:"promocion.fecha_fin"}],attrs:{type:"date",value:"DD/MM/AA",onkeydown:"return false"},domProps:{value:e.promocion.fecha_fin},on:{input:function(t){t.target.composing||e.$set(e.promocion,"fecha_fin",t.target.value)}}})]),e.$v.promocion.fecha_fin.validate_date?e._e():o("div",{staticClass:"formulario_check-error-center"},[e._v(" Fecha fuera de límite ")]),e.$v.promocion.fecha_fin.validate_end_date?e._e():o("div",{staticClass:"formulario_check-error-center"},[e._v(" La promoción termina antes de empezar ")])]),o("button",{staticClass:"formulario_button",class:e.isAllValid,attrs:{disabled:e.$v.promocion.$invalid||""==e.image}},[e._v(" Confirmar ")])])])}),n=[],c=(o("c975"),o("d3b7"),o("ac1f"),o("1276"),o("ddb0"),o("96cf"),o("1da1")),s=o("b5ae"),d=s["helpers"].regex("alpha",/^[a-zA-Z0-9ñ\sáéíóúÁÉÍÓÚ]*$/),u=s["helpers"].regex("alpha1",/^[0-9,.\s]*$/),l=function(e){var t=new Date,o=(new Date).setFullYear(t.getFullYear()+3),r=new Date(Date.parse(e));return r.setDate(r.getDate()+1),t<=r&&r<o},m=function(e,t){if(!t.fecha_inicio||!e)return!0;var o=new Date(Date.parse(t.fecha_inicio)),r=new Date(Date.parse(e));return o.setDate(o.getDate()+1),r.setDate(r.getDate()+1),o<r},p=function(e){var t=String(e);if(t.indexOf(".")>0){var o=t.split("."),r=String(o[1]);return!s["helpers"].req(e)||!(r.length>2)}return!0},v=function(e){return Object.keys(e).length>1},_={name:"Form",props:["image"],data:function(){return{disabled:!1,promocion:{nombre_prom:null,descripcion:"",precio_unid:null,cantidad:null,fecha_inicio:"",fecha_fin:"",product_list:this.$store.state.groupIDselected}}},validations:{promocion:{nombre_prom:{required:s["required"],minLength:Object(s["minLength"])(2),maxLength:Object(s["maxLength"])(30),alpha:d},descripcion:{required:s["required"],maxLength:Object(s["maxLength"])(1e3)},precio_unid:{required:s["required"],between:Object(s["between"])(.1,1e4),validate_decimales:p,alpha2:u},cantidad:{required:s["required"],between:Object(s["between"])(1,1e3),integer:s["integer"],alpha2:u},fecha_inicio:{validate_date:l},fecha_fin:{validate_date:l,validate_end_date:m},product_list:{min_products:v}}},methods:{submitForm:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.$v.promocion.$invalid){t.next=19;break}if(""!=e.image){t.next=6;break}alert("Registra la imagen de la promoción"),t.next=17;break;case 6:t.t0=regeneratorRuntime.keys(e.$store.state.groupIDselected);case 7:if((t.t1=t.t0()).done){t.next=14;break}if(o=t.t1.value,!(e.promocion.cantidad*e.$store.state.groupIDselected[o][0]>e.$store.state.groupIDselected[o][1])){t.next=12;break}return alert("No existen suficientes productos para esta promoción."),t.abrupt("return");case 12:t.next=7;break;case 14:return t.next=16,e.sendDataProm();case 16:alert("Nueva promoción creada exitosamente");case 17:t.next=20;break;case 19:alert("Rellene todos los datos correctamente");case 20:t.next=25;break;case 22:t.prev=22,t.t2=t["catch"](0),alert(t.t2);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})))()},sendDataProm:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.post("promotions",{nombr_prom:e.promocion.nombre_prom,descrip_prom:e.promocion.descripcion,precio_prom:e.promocion.precio_unid,cantidad_prom:e.promocion.cantidad,fecha_ini:e.promocion.fecha_inicio,fecha_fin:e.promocion.fecha_fin,products:e.$store.state.groupIDselected,imagen_prom:e.image});case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t["catch"](0),new Error("El nombre de la promoción esta repetido");case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},computed:{isAllValid:function(){return this.$v.promocion.$invalid||""==this.image?"form_button_disabled":""}}},f=_,h=(o("8103"),o("2877")),g=Object(h["a"])(f,i,n,!1,null,null,null),b=g.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product-list"},[e._l(this.products,(function(t,o){return r("div",{key:t.cod_prod,staticClass:"it-container"},[r("h6",[e._v("Producto "+e._s(o+1))]),r("div",{staticClass:"it-add"},[r("button",{staticClass:"del-button",on:{click:function(o){return e.deleteProduct(t.cod_prod)}}},[e._v("X")]),r("Item",{attrs:{id_product:t.cod_prod,nombre:t.nombre_prod,precio:t.precio_unid,descripcion:t.descripcion,fecha:t.fecha_adic}}),r("label",[e._v("Cantidad: ")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cant_products[t.cod_prod][0],expression:"cant_products[product.cod_prod][0]",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:t.cantidad},domProps:{value:e.cant_products[t.cod_prod][0]},on:{change:function(o){return e.upCounts(t.cod_prod)},input:function(o){o.target.composing||e.$set(e.cant_products[t.cod_prod],0,e._n(o.target.value))},blur:function(t){return e.$forceUpdate()}}})],1)])})),this.products.length<5?r("div",{staticClass:"it-container"},[r("h6",[e._v("Nuevo Producto")]),r("div",{staticClass:"it-add",on:{click:function(t){e.showModal=!e.showModal}}},[r("img",{staticClass:"im-add",attrs:{src:o("a861"),alt:"",width:"340"}})])]):e._e(),this.showModal?r("ModalProduct"):e._e(),this.showModal?r("button",{staticClass:"modl-button term",on:{click:function(t){return e.addProducts()}}},[e._v("Añadir productos")]):e._e(),this.showModal?r("button",{staticClass:"modl-button ext",on:{click:function(t){return e.updateProducts()}}},[e._v("X")]):e._e()],2)},x=[],C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"modal-produc"},[o("Short",{staticClass:"modal-pcontent",attrs:{multipleSelect:!0,onlyUnits:!0}})],1)},w=[],k=o("3a26"),D={name:"ModalProduct",components:{Short:k["a"]}},P=D,I=(o("3e32"),Object(h["a"])(P,C,w,!1,null,"62b7d3b0",null)),y=I.exports,q=o("be89"),M={name:"ProductList",components:{ModalProduct:y,Item:q["a"]},data:function(){return{showModal:!1,products:[],cant_products:{}}},methods:{addProducts:function(){Object.keys(this.$store.state.groupIDselected).length>0?(this.getProducts(),this.showModal=!this.showModal,alert("Productos añadidos.")):alert("No tienes productos seleccionados.")},getProducts:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var o,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=[],r={},t.t0=regeneratorRuntime.keys(e.$store.state.groupIDselected);case 3:if((t.t1=t.t0()).done){t.next=12;break}return a=t.t1.value,t.next=7,e.$http.get("products/".concat(a));case 7:i=t.sent,o.push(i.data.datos[0]),r[a]=[e.$store.state.groupIDselected[a][0],i.data.datos[0].cantidad],t.next=3;break;case 12:e.products=o,e.cant_products=r;case 14:case"end":return t.stop()}}),t)})))()},deleteProduct:function(e){this.$store.commit("deleteID",e),this.getProducts()},updateProducts:function(){this.$store.commit("updateGroup",this.cant_products),this.showModal=!this.showModal},upCounts:function(e){this.$store.state.groupIDselected[e]=this.cant_products[e]}},mounted:function(){-1!=this.$store.state.idSelected[0]&&this.$store.commit("addID",this.$store.state.idSelected),this.getProducts()}},j=M,L=(o("41d8"),Object(h["a"])(j,$,x,!1,null,"73f1edfe",null)),O=L.exports,N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"image-container"},[o("p",[e._v("Foto de la promoción")]),o("div",{staticClass:"image-add"},[o("img",{staticClass:"img-prom",attrs:{src:e.imagen,alt:""},on:{click:function(t){return e.addFiles()}}})]),o("input",{ref:"files",staticClass:"images_input",attrs:{type:"file",id:"files",accept:"image/*"},on:{change:function(t){return e.getImage()}}}),e.$v.image.required?e._e():o("span",{staticClass:"formulario_check-error"},[e._v(" Coloque una fotografia ")])])},F=[],R=(o("b0c0"),{name:"ImageAdd",data:function(){return{image:""}},validations:{image:{required:s["required"]}},methods:{addFiles:function(){this.$refs.files.click()},getImage:function(){var e=this,t=this.$refs.files.files,o=t[0];if(void 0!=o)if(/\.(jpe?g|png)$/i.test(o.name)){if(o.size>1048576)return void alert(o.name+" es muy pesado (> 1MB)");var r=new FileReader;r.addEventListener("load",(function(t){var r=new Image;r.onload=function(){r.width<640||r.width>1366?alert("El ancho de "+o.name+" debe estar entre 640px y 1366px"):r.height<360||r.height>768?alert("El alto de "+o.name+" debe estar entre 360px y 768px"):(e.image=t.target.result,e.$emit("send-image",e.image))},r.src=t.target.result})),r.readAsDataURL(o)}else alert(o.name+" no es un archivo jpg o png")}},computed:{imagen:function(){return""==this.image?o("a861"):this.image}}}),A=R,E=(o("91d8"),Object(h["a"])(A,N,F,!1,null,null,null)),S=E.exports,T={name:"RegistroPromocion",components:{Form:b,ProductList:O,ImageAdd:S},data:function(){return{imagen:""}},methods:{passImage:function(e){this.imagen=e}},computed:{isMoreThanTwo:function(){return Object.keys(this.$store.state.groupIDselected).length<2}}},z=T,U=(o("15dc"),Object(h["a"])(z,r,a,!1,null,"874b5836",null));t["default"]=U.exports},"3e32":function(e,t,o){"use strict";var r=o("8ccb"),a=o.n(r);a.a},"41d8":function(e,t,o){"use strict";var r=o("e86e"),a=o.n(r);a.a},8103:function(e,t,o){"use strict";var r=o("b651"),a=o.n(r);a.a},"8ccb":function(e,t,o){},"91d8":function(e,t,o){"use strict";var r=o("37cf"),a=o.n(r);a.a},a0a7:function(e,t,o){},a861:function(e,t,o){e.exports=o.p+"img/add-product.b045e570.png"},b651:function(e,t,o){},e86e:function(e,t,o){}}]);
//# sourceMappingURL=chunk-6cbebd10.d97aec10.js.map