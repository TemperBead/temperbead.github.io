"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[358],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={},l="R16 Provenance Accounting",c={unversionedId:"Requests/R16",id:"Requests/R16",title:"R16 Provenance Accounting",description:"End Consumer Data Recovery",source:"@site/dust/Requests/R16.md",sourceDirName:"Requests",slug:"/Requests/R16",permalink:"/dust/Requests/R16",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Requests/R16.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"R15 Immutable Permissioning",permalink:"/dust/Requests/R15"},next:{title:"R17 Covenant Resolution System",permalink:"/dust/Requests/R17"}},u={},h=[{value:"End Consumer Data Recovery",id:"end-consumer-data-recovery",level:2},{value:"List of Integrations",id:"list-of-integrations",level:2},{value:"Operating Costs Estimate",id:"operating-costs-estimate",level:2},{value:"Retailer Dashboard Requirements",id:"retailer-dashboard-requirements",level:2},{value:"Workflows for Customer",id:"workflows-for-customer",level:2}],d={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"r16-provenance-accounting"},"R16 Provenance Accounting"),(0,o.kt)("h2",{id:"end-consumer-data-recovery"},"End Consumer Data Recovery"),(0,o.kt)("p",null,"When products are sold through a retailer, the retailers current systems destroy data, in that the barcodes only represent classes of goods, not individual items, and the retailers receipts to customers do not provide individual product serial numbers."),(0,o.kt)("p",null,"Because this is the norm, we need to have the ability to recover the uniqueness of the sold item after it has been sold. This seems possible if a QR code can be attached to the item somehow. Customers can then use an application to scan the QR code, or enter the serial number into a web page, or send us a photo of the item so that we can recover the QR code from the image on their behalf."),(0,o.kt)("p",null,"Additionally the factory need to enter each individual code into our system at point of manufacture, which might add significant cost to the process. So much so that the system may need to start in batch mode, where each item is actually virtual, rather than individually identifiable."),(0,o.kt)("p",null,"Whichever way is chosen, we need to consider:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How the end consumer will recover the data"),(0,o.kt)("li",{parentName:"ol"},"How the factory will enter the data into our system"),(0,o.kt)("li",{parentName:"ol"},"How the factory will identify each individual item"),(0,o.kt)("li",{parentName:"ol"},"What the cost to the factory is"),(0,o.kt)("li",{parentName:"ol"},"How each point in the supply chain will update the object"),(0,o.kt)("li",{parentName:"ol"},"How the supply chain participants will handle constituent components, such as bales of cotton")),(0,o.kt)("p",null,"The cost of the data entry and the tagging cannot be more than 0.1% of the total cost (just to guess at a number)"),(0,o.kt)("h2",{id:"list-of-integrations"},"List of Integrations"),(0,o.kt)("p",null,"The customer needs to list out what external systems need integrating with for the system to be considered a success."),(0,o.kt)("h2",{id:"operating-costs-estimate"},"Operating Costs Estimate"),(0,o.kt)("p",null,"To track each individual object incurs some infrastructure cost. We need to calculate what this cost is so the feasibility can be calculated. It does not make sense to track items whose value is anything less than 100x this infrastructure cost, as a guess."),(0,o.kt)("p",null,"This is a cost per chain calculation, and based on an estimated chain size, with a rough guess at software labour cost slice."),(0,o.kt)("h2",{id:"retailer-dashboard-requirements"},"Retailer Dashboard Requirements"),(0,o.kt)("p",null,"When wholesalers and distributors are selling to retailers, significant value can be passed on to the retailers by giving them a dashboard that has visibility into the state of the supply chain, and provides forecasts for what the retailer is likely to need. The retailer is then prompted to purchase based on this data, which results in an overall smoothing of the supply chain. Often the retailer will not have great visibility of forecasting ability on their end anyway, so would be grateful for the prompting, in many cases."),(0,o.kt)("p",null,"This functionality is enhanced by the retailer giving sales data to the distributor, but this would require some kind of integration with whatever system they operate."),(0,o.kt)("h2",{id:"workflows-for-customer"},"Workflows for Customer"),(0,o.kt)("p",null,"A target customer has been identified, and the workflows that they expect their business to follow need to be captured. Once these workflows are captured, along with scale estimates and value estimates, we can provide estimates of build time, and a sequence of building out those workflows."),(0,o.kt)("p",null,"Once these workflows are described, we aim to map them to the competition businesses, to see where our value add is."),(0,o.kt)("p",null,"Initial workflows that we will automate can then be determined, as well as assessment of alternatives to Dreamcatcher based software."))}m.isMDXComponent=!0}}]);