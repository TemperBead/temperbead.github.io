"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[7111],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40711:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(83117),o=r(80102),n=(r(67294),r(3905)),i=["components"],s={},l="I04 Securities Guardian",u={unversionedId:"Ideas/I04",id:"Ideas/I04",title:"I04 Securities Guardian",description:"Proposal Scope",source:"@site/nfas/Ideas/I04.md",sourceDirName:"Ideas",slug:"/Ideas/I04",permalink:"/nfas/Ideas/I04",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Ideas/I04.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"README",permalink:"/nfas/Requests/"},next:{title:"I05 Markdown NFT Mode",permalink:"/nfas/Ideas/I05"}},c={},p=[{value:"Proposal Scope",id:"proposal-scope",level:2},{value:"Proposed Approach",id:"proposed-approach",level:2},{value:"Must have",id:"must-have",level:3},{value:"Could have",id:"could-have",level:3},{value:"Should",id:"should",level:3},{value:"Must Not",id:"must-not",level:3},{value:"Proposed Output",id:"proposed-output",level:2},{value:"Proposed Timeline",id:"proposed-timeline",level:2},{value:"Proposed Contract",id:"proposed-contract",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"i04-securities-guardian"},"I04 Securities Guardian"),(0,n.kt)("h2",{id:"proposal-scope"},"Proposal Scope"),(0,n.kt)("p",null,"This proposal covers Tactical Intent 1 of 04 Securities Guardian. It's execution will take Tactical Intents 2-4 into account as the end use. On a successful PR, certain aspects of Tactical Intents 2-4 that can be expressed by the use of the statechart will be addressed. Aspects that require integration with DC automation will be left to others."),(0,n.kt)("h2",{id:"proposed-approach"},"Proposed Approach"),(0,n.kt)("h3",{id:"must-have"},"Must have"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Be designed in all ways to protect all actors from exploitations by others, even if someone actively wanted to be exploited.")),(0,n.kt)("p",null,"The number of possible exploits is too unwieldy for a single statechart to be practically complete. As an alternative, I propose a set of state 'triggers' - transitions of state based on types of activity during the current state that trigger the Security Guardian."),(0,n.kt)("p",null,'E.g. If the Fwd NFA is in Development, has Investment and Contributors, and an Investor promotes that Fwd NFA, then the state would change to "Security Guardian Check". This would allow for a cautious approach (any activity during a state of a susceptable type will be checked), and would allow the Security Guardian checklist to be updated regularly without changes to the statechart and therefore flow.'),(0,n.kt)("p",null,"NB, the previous statechart at ",(0,n.kt)("a",{parentName:"p",href:"https://miro.com/app/board/o9J_lS2-5J4=/"},"https://miro.com/app/board/o9J_lS2-5J4=/")," can easily be re-purposed as the assessment check, as it deals not with the triggers, but an assessment of the current situation in terms of Securities Law. I'll propose using something similar to detail the assessment if this proposal is accepted."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Be versioned and upgradeable")),(0,n.kt)("p",null,"I propose UML v2.0, using Mermaid, and committed through github."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Operate synchronously with no external calls")),(0,n.kt)("p",null,"Noted. This may restrict the notification to the current state that a promotion is underway to promotions that occur only on-chain, or which are reported on-chain."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Be deterministic and repeatable")),(0,n.kt)("p",null,"Pre-requisite for this is a 'timeslice' of the current state each time the Security Guardian is triggered, which would allow the decision to be reviewed and repeated, and would remove any async input."),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Be applicable to every Actor / NFT pair in the system")),(0,n.kt)("p",null,"I've identified the following Actors and NFT States. Each will have a pairing with the other:"),(0,n.kt)("p",null,"Actors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Security Guardian (Software Agent)"),(0,n.kt)("li",{parentName:"ul"},"Dreamcatcher System (Software Agent)"),(0,n.kt)("li",{parentName:"ul"},"Governance"),(0,n.kt)("li",{parentName:"ul"},"Contributor, Permissionless"),(0,n.kt)("li",{parentName:"ul"},"Contributor, Permissioned, Sweat Only"),(0,n.kt)("li",{parentName:"ul"},"Contributor, Permissioned, Hybrid, (Sweat and cash)"),(0,n.kt)("li",{parentName:"ul"},"Investor, No Participation"),(0,n.kt)("li",{parentName:"ul"},"Investor, Participant"),(0,n.kt)("li",{parentName:"ul"},"QA Service"),(0,n.kt)("li",{parentName:"ul"},"Escrow Service"),(0,n.kt)("li",{parentName:"ul"},"Arbiter")),(0,n.kt)("p",null,"Broad States to cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Idea is being formed, but not yet articulated as a Fwd NFA"),(0,n.kt)("li",{parentName:"ul"},"Fwd NFA is being developed, but is not yet available for revenue or value generation"),(0,n.kt)("li",{parentName:"ul"},"NFA is available for revenue, value generation or inclusion in another Project"),(0,n.kt)("li",{parentName:"ul"},"NFA is no longer being developed, but is being promoted for use or sale (typically only used e.g. in one-off pieces, such as a photograph.)"),(0,n.kt)("li",{parentName:"ul"},"NFA is no longer being developed or promoted (used only for state transitions back to 'promoted')")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Define allowed states with a large margin of error, beyond doubt")),(0,n.kt)("p",null,"See above note on the statechart being used as a 'trigger' for any event that could possibly result in Securities Law issues."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Be scopable for simple high level views")),(0,n.kt)("p",null,'The above "Broad States" will have embedded states within those that show higher granularity. In my view this high granularity is indeed necessary in order to prove the statechart complete, afterwhich lower granularity views can be generated.'),(0,n.kt)("h3",{id:"could-have"},"Could have"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Include states that model specific exploits, such as pump and dump, theft, failure to deliver, did not understand what was purchasing, insider trading, sybil attack, market manipulation, and others")),(0,n.kt)("p",null,"Modelling of these would be through a series of transition flows through the statechart to be produced. E.g. a pump and dump may be modelled by"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Transition 1: S1 (Fwd NFA) -- Fwd NFA invested in by Actor: Investor --\x3e S2 (Fwd NFA in Development)"),(0,n.kt)("li",{parentName:"ol"},"Transition 2: S2 (Fwd NFA in Development) -- Actor: Investor promotes Fwd NFA --\x3e S3 (Securities Guarian Triggered)"),(0,n.kt)("li",{parentName:"ol"},"Transition 3: S3 (Securities Guarian Triggered) -- Actor: Securities Guardian Accepts content of Promotion --\x3e S2 (Fwd NFA in Development)"),(0,n.kt)("li",{parentName:"ol"},"Transition 4: S2 (Fwd NFA in Development) -- Actor: Investor sells out --\x3e S3 (Securities Guarian Triggered)"),(0,n.kt)("li",{parentName:"ol"},"Transition 5: S3 (Securities Guarian Triggered) -- Actor: Securities Guardian triggers exception on sale close to promotion --\x3e S4 (Fwd NFA Locked)"),(0,n.kt)("li",{parentName:"ol"},"Transition 6: S4 (Fwd NFA Locked) --\x3e //")),(0,n.kt)("p",null,"These is a gross example to show roughly the approach. That is, specific exploits can be modelled using the proposed statechart and a script to prove/demonstrate it's response."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Include the QA service provider as an actor in the system")),(0,n.kt)("p",null,"Agree that this is a necessary actor at v1."),(0,n.kt)("h3",{id:"should"},"Should"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Permit generation of overlay statecharts representing a specific jurisdictions classification rules")),(0,n.kt)("p",null,"With the proposed approach, any transition that could possibly result in a breach is triggered through the statechart, and passed to the securities guardian rulebase for assessment. That way, e.g. multiple jurisdictions can be assessed, the geo of the user can select one, or the sum of all jurisdictions (hardest case) can be applied and more easily updated."),(0,n.kt)("h3",{id:"must-not"},"Must Not"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Be overly influenced by any specific jurisdiction, as invulnerability is a universal goal")),(0,n.kt)("p",null,"Reference the above 'trigger approach'; I believe that meets this requirement."),(0,n.kt)("h2",{id:"proposed-output"},"Proposed Output"),(0,n.kt)("p",null,"Initial format (for ease): Matrix compatible with translation to UML v2.0 statechart.\nPR will use Mermaid syntax."),(0,n.kt)("h2",{id:"proposed-timeline"},"Proposed Timeline"),(0,n.kt)("p",null,"First PR - 2 days."),(0,n.kt)("h2",{id:"proposed-contract"},"Proposed Contract"),(0,n.kt)("p",null,"DPL in force. Attribution only."))}h.isMDXComponent=!0}}]);