(function(){"use strict";var t={9477:function(t,r,e){e(6992),e(8674),e(9601),e(7727);var n=e(8935),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},o=[],c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"nav-bar"}},[e("router-link",{attrs:{to:"/products",id:"products-link"}},[e("h1",[t._v("FABULOUS FOOTWEAR")])]),e("router-link",{attrs:{to:"/cart",id:"cart-link"}},[e("button",[t._v("Shopping Cart")])])],1)},s=[],i={name:"NavBar"},u=i,d=e(1001),p=(0,d.Z)(u,c,s,!1,null,"36011602",null),l=p.exports,m={name:"App",components:{NavBar:l}},f=m,v=(0,d.Z)(f,a,o,!1,null,null,null),h=v.exports,_=e(2809),g=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"page-wrap"}},[e("ProductsGrid",{attrs:{products:t.products}})],1)},w=[],C=e(6198),I=(e(8975),e(6166)),b=e.n(I),x=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"grid-wrap"},t._l(t.products,(function(t){return e("ProductsGridItem",{key:t.id,attrs:{product:t}})})),1)},P=[],k=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-item"},[e("img",{attrs:{src:t.product.imageUrl}}),e("h3",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),e("p",{staticClass:"product-price"},[t._v("$"+t._s(t.product.price))]),e("router-link",{attrs:{to:"/products/"+t.product.id}},[e("button",[t._v("View Details")])])],1)},Z=[],$={name:"ProductsGridItem",props:["product"]},y=$,O=(0,d.Z)(y,k,Z,!1,null,"7d8231cc",null),R=O.exports,E={name:"ProductsGrid",props:["products"],components:{ProductsGridItem:R}},F=E,N=(0,d.Z)(F,x,P,!1,null,"7010ae06",null),T=N.exports,S={name:"ProductsPage",components:{ProductsGrid:T},data:function(){return{products:[]}},created:function(){var t=this;return(0,C.Z)(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,b().get("/api/products");case 2:e=r.sent,n=e.data,t.products=n;case 5:case"end":return r.stop()}}),r)})))()}},L=S,j=(0,d.Z)(L,g,w,!1,null,null,null),G=j.exports,A=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.product?e("div",{attrs:{id:"page-wrap"}},[e("div",{attrs:{id:"img-wrap"}},[e("img",{attrs:{src:t.product.imageUrl}})]),e("div",{attrs:{id:"product-details"}},[e("h1",[t._v(t._s(t.product.name))]),e("h3",{attrs:{id:"price"}},[t._v(t._s(t.product.price))]),e("p",[t._v("Average rating: "+t._s(t.product.averageRating))]),t.itemIsInCart||t.showSuccessMessage?t._e():e("button",{attrs:{id:"add-to-cart"},on:{click:t.addToCart}},[t._v("Add to Cart")]),!t.itemIsInCart&&t.showSuccessMessage?e("button",{staticClass:"green-button",attrs:{id:"add-to-cart"}},[t._v("Succefully added item to cart!")]):t._e(),t.itemIsInCart?e("button",{staticClass:"grey-button",attrs:{id:"add-to-cart"}},[t._v("Item is already in cart!")]):t._e(),e("h4",[t._v("Description")]),e("p",[t._v(t._s(t.product.description))])])]):e("NotFoundPage")},M=[],U=(e(1539),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("h1",[t._v("404: Page Not Found")])}),B=[],D={name:"NotFoundPage"},V=D,W=(0,d.Z)(V,U,B,!1,null,"f9e48c92",null),q=W.exports,z={name:"ProductDetailPage",components:{NotFoundPage:q},data:function(){return{product:{},cartItems:[],showSuccessMessage:!1}},computed:{itemIsInCart:function(){var t=this;return this.cartItems.some((function(r){return r.id===t.product.id}))}},methods:{addToCart:function(){var t=this;return(0,C.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,b().post("/api/users/12345/cart",{productId:t.$route.params.id});case 2:t.showSuccessMessage=!0,setTimeout((function(){t.$route.push("/products")}),1500);case 4:case"end":return r.stop()}}),r)})))()}},created:function(){var t=this;return(0,C.Z)(regeneratorRuntime.mark((function r(){var e,n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,b().get("/api/products/".concat(t.$route.params.id));case 2:return e=r.sent,n=e.data,t.product=n,r.next=7,b().get("/api/users/12345/cart");case 7:a=r.sent,o=a.data,t.cartItems=o;case 10:case"end":return r.stop()}}),r)})))()}},H=z,J=(0,d.Z)(H,A,M,!1,null,"e6c66912",null),K=J.exports,Q=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"page-wrap"}},[e("CartList",{attrs:{cartItems:t.cartItems},on:{"remove-from-cart":function(r){return t.removeFromCart(r)}}})],1)},X=[],Y=(e(9653),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"grid-wrap"},[e("h1",[t._v("Shopping Cart")]),t.cartItems.length>0?e("div",[t._l(t.cartItems,(function(r){return e("CartListItem",{key:r.id,attrs:{item:r},on:{"remove-from-cart":function(r){return t.$emit("remove-from-cart",r)}}})})),e("h3",{attrs:{id:"total-price"}},[t._v("Total: $"+t._s(t.totalPrice))]),e("button",{attrs:{id:"checkout-button"}},[t._v("Proceed to Checkout")])],2):e("p",[t._v("The cart is empty!")])])}),tt=[],rt=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-container"},[e("img",{staticClass:"item-image",attrs:{src:t.item.imageUrl}}),e("div",{staticClass:"details-wrap"},[e("h3",[t._v(t._s(t.item.name))]),e("p",[t._v("$"+t._s(t.item.price))])]),e("button",{staticClass:"remove-button",on:{click:function(r){return t.$emit("remove-from-cart",t.item.id)}}},[t._v("Remove from Cart")])])},et=[],nt={name:"CartListItem",props:["item"]},at=nt,ot=(0,d.Z)(at,rt,et,!1,null,"a4067ca4",null),ct=ot.exports,st={name:"CartList",props:["cartItems"],components:{CartListItem:ct},computed:{totalPrice:function(){return this.cartItems.reduce((function(t,r){return t+Number(r.price)}),0)}}},it=st,ut=(0,d.Z)(it,Y,tt,!1,null,null,null),dt=ut.exports,pt={name:"CartPage",components:{CartList:dt},data:function(){return{cartItems:[]}},methods:{removeFromCart:function(t){var r=this;return(0,C.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b()["delete"]("/api/users/12345/cart/".concat(t));case 2:n=e.sent,r.cartItems=n.data;case 4:case"end":return e.stop()}}),e)})))()}},computed:{totalPrice:function(){return this.cartItems.reduce((function(t,r){return t+Number(r.price)}),0)}},created:function(){var t=this;return(0,C.Z)(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,b().get("api/users/12345/cart");case 2:e=r.sent,n=e.data,t.cartItems=n;case 5:case"end":return r.stop()}}),r)})))()}},lt=pt,mt=(0,d.Z)(lt,Q,X,!1,null,null,null),ft=mt.exports;n.Z.use(_.Z);var vt=[{path:"/products",name:"Products",component:G},{path:"/products/:id",name:"ProductDetail",component:K},{path:"/cart",name:"Cart",component:ft},{path:"/",redirect:"/products"},{path:"*",component:q}],ht=new _.Z({mode:"history",base:"/",routes:vt}),_t=ht;n.Z.config.productionTip=!1,new n.Z({router:_t,render:function(t){return t(h)}}).$mount("#app")}},r={};function e(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,loaded:!1,exports:{}};return t[n](o,o.exports,e),o.loaded=!0,o.exports}e.m=t,function(){var t=[];e.O=function(r,n,a,o){if(!n){var c=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],o=t[d][2];for(var s=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(s=!1,o<c&&(c=o));if(s){t.splice(d--,1);var u=a();void 0!==u&&(r=u)}}return r}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,a,o]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var a,o,c=n[0],s=n[1],i=n[2],u=0;if(c.some((function(r){return 0!==t[r]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(i)var d=i(e)}for(r&&r(n);u<c.length;u++)o=c[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},n=self["webpackChunkfsv_front_end"]=self["webpackChunkfsv_front_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(9477)}));n=e.O(n)})();
//# sourceMappingURL=app-legacy.190f9c0a.js.map