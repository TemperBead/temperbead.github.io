"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1375],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={},s=void 0,u={unversionedId:"Drafts/Provenance Accounting/End Consumer Data Recovery",id:"Drafts/Provenance Accounting/End Consumer Data Recovery",title:"End Consumer Data Recovery",description:"When products are sold through a retailer, the retailers current systems destroy data, in that the barcodes only represent classes of goods, not individual items, and the retailers receipts to customers do not provide individual product serial numbers.",source:"@site/nfas/Drafts/Provenance Accounting/End Consumer Data Recovery.md",sourceDirName:"Drafts/Provenance Accounting",slug:"/Drafts/Provenance Accounting/End Consumer Data Recovery",permalink:"/nfas/Drafts/Provenance Accounting/End Consumer Data Recovery",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Drafts/Provenance Accounting/End Consumer Data Recovery.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"Immutable Permissioning",permalink:"/nfas/Drafts/Immutable Permissioning"},next:{title:"List of Integrations",permalink:"/nfas/Drafts/Provenance Accounting/List of Integrations"}},l={},d=[],h={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When products are sold through a retailer, the retailers current systems destroy data, in that the barcodes only represent classes of goods, not individual items, and the retailers receipts to customers do not provide individual product serial numbers."),(0,a.kt)("p",null,"Because this is the norm, we need to have the ability to recover the uniqueness of the sold item after it has been sold. This seems possible if a QR code can be attached to the item somehow. Customers can then use an application to scan the QR code, or enter the serial number into a web page, or send us a photo of the item so that we can recover the QR code from the image on their behalf."),(0,a.kt)("p",null,"Additionally the factory need to enter each individual code into our system at point of manufacture, which might add significant cost to the process. So much so that the system may need to start in batch mode, where each item is actually virtual, rather than individually identifiable."),(0,a.kt)("p",null,"Whichever way is chosen, we need to consider:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How the end consumer will recover the data"),(0,a.kt)("li",{parentName:"ol"},"How the factory will enter the data into our system"),(0,a.kt)("li",{parentName:"ol"},"How the factory will identify each individual item"),(0,a.kt)("li",{parentName:"ol"},"What the cost to the factory is"),(0,a.kt)("li",{parentName:"ol"},"How each point in the supply chain will update the object"),(0,a.kt)("li",{parentName:"ol"},"How the supply chain participants will handle constituent components, such as bales of cotton")),(0,a.kt)("p",null,"The cost of the data entry and the tagging cannot be more than 0.1% of the total cost (just to guess at a number)"))}p.isMDXComponent=!0}}]);