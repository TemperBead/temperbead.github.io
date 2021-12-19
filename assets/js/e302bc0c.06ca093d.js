"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[4694],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(r),y=i,g=f["".concat(u,".").concat(y)]||f[y]||p[y]||o;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1332:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={},u=void 0,s={unversionedId:"Architecture_Dictionary/Events/Negotiation",id:"Architecture_Dictionary/Events/Negotiation",title:"Negotiation",description:"Negotiations are carried out using Contracts, a sub-type of Annotations.",source:"@site/docs/Architecture_Dictionary/Events/Negotiation.md",sourceDirName:"Architecture_Dictionary/Events",slug:"/Architecture_Dictionary/Events/Negotiation",permalink:"/docs/Architecture_Dictionary/Events/Negotiation",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/docs/Architecture_Dictionary/Events/Negotiation.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Dispersal",permalink:"/docs/Architecture_Dictionary/Events/Dispersal"},next:{title:"Pull Request",permalink:"/docs/Architecture_Dictionary/Events/Pull Request"}},l=[],p={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Negotiations are carried out using Contracts, a sub-type of Annotations."),(0,o.kt)("p",null,"The initial offer can be made by either the Project itself, or by any other Person, by Pull Requesting to attach a Contract to any Object.  A counter offer is a Pull Request against that Contract, possibly suggesting changes to the terms, possibly Commenting on it.  The Contract goes through the usual Pull Request cycle, Negotiating, accepting or rejecting."),(0,o.kt)("p",null,"If accepted, the Contract is Merged in with the Object, with it\u2019s Algo being triggered on the event it is watching for, distributing funds and Attribution as required by that Contract."))}f.isMDXComponent=!0}}]);