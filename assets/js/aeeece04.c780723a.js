(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[2441],{46449:function(e,t,o){"use strict";o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=o(83117),n=o(80102),r=(o(67294),o(3905)),s=o(93456),i=["components"],l={},d="Pool Process",c={unversionedId:"Pool_Process",id:"Pool_Process",title:"Pool Process",description:"Target",source:"@site/pool/Pool_Process.md",sourceDirName:".",slug:"/Pool_Process",permalink:"/pool/Pool_Process",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/pool/Pool_Process.md",tags:[],version:"current",frontMatter:{},sidebar:"pool",previous:{title:"Idea Template",permalink:"/pool/Idea_Template"}},h={},p=[{value:"Target",id:"target",level:2},{value:"Inherits",id:"inherits",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"License",id:"license",level:2},{value:"Process",id:"process",level:2}],u={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pool-process"},"Pool Process"),(0,r.kt)("h2",{id:"target"},"Target"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../dust/Ideas/I11"},"I11 Request-Idea")),(0,r.kt)("h2",{id:"inherits"},"Inherits"),(0,r.kt)("p",null,"[User Dictionary]","(../docs/User Dictionary)"),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"This Process is offered for further use and alteration under the ","[Core DPL]","(../docs/DPL/Core DPL)"),(0,r.kt)("h1",{id:"preface"},"Preface"),(0,r.kt)("p",null,"This is a process which takes Requests and Ideas from Dust through to having been completed with Outputs."),(0,r.kt)("p",null,"It's currently in use by ",(0,r.kt)("a",{parentName:"p",href:"."},"Pool.md")," and forms part of the QA Guidance for that pool, along with the templates for"),(0,r.kt)("p",null,"For further reading on the background for this process, please see ","[Background for The Pool Process]","(../blog/drafts/Background Pool Process)"),(0,r.kt)("p",null,"For the templates referenced below see:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"[Request Template]","(../pool/Request Template)"),(0,r.kt)("li",{parentName:"ol"},"[Idea Template]","(../pool/Idea Template)")),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)(s.Mermaid,{config:{},chart:"\nstateDiagram\n    [*] --\x3e Dust\n    Dust --\x3e poolEntryQA : submit\n    poolEntryQA --\x3e Dust : fail\n    poolEntryQA --\x3e inPool : pass\n    state inPool {\n      [*] --\x3e Open\n      inCompletionQA --\x3e Locked : fail\n      Locked --\x3e inCompletionQA : submit\n      Open --\x3e Locked : Contract/Escrow lock\n      Locked --\x3e Open : Contract/Escrow release\n      Locked --\x3e Locked : Funding / Work\n      inCompletionQA --\x3e Finalised : Pass\n    }\n",mdxType:"Mermaid"}),(0,r.kt)("h1",{id:"process-diagram-definitions"},"Process Diagram Definitions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking. This the is entry area into the process. NFTs may (optionally) be generated by the author at any point in this state, one per doc."),(0,r.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool has stipulated. NFTs are required to pass QA and must be of suitable content and unique."),(0,r.kt)("li",{parentName:"ol"},"Open: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to in a permissionless manner but not under escrow. A running total of the time/payments spent to date are recorded."),(0,r.kt)("li",{parentName:"ol"},"Locked: A contract has been negotiated between a Funder a Worker for delivery of the all or parts of the Outputs stated in the Idea, with funds put in escrow. A running total of the time/payments spent to date are recorded, and for any escrow payments made, the fact of that payment is also recorded."),(0,r.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work promised in the Idea, which may have referenced a Request, has been completed. I.e. did it do what it said it would do?"),(0,r.kt)("li",{parentName:"ol"},"Finalised: the Outputs produced from the work are now available for use, having passed QA. These Outputs come with the context of the Idea which kicked off the work, and (optionally) the Request which the Idea is attempting to fulfil.")),(0,r.kt)("h1",{id:"process-description"},"Process Description"),(0,r.kt)("p",null,"To implement the states and state transistions two different folders are used in git."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the ",(0,r.kt)("a",{parentName:"li",href:"../dust"},"website/dust")," folder. They are not listed in ",(0,r.kt)("a",{parentName:"li",href:"../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Open' state are in the ",(0,r.kt)("a",{parentName:"li",href:"."},"website/pool")," folder, and linked from the Open grid in ",(0,r.kt)("a",{parentName:"li",href:"."},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Dust -> Open state change involves copying the file from one folder to the next, not moving it. This way we replicate a fork. The time/cost data grid in ",(0,r.kt)("a",{parentName:"li",href:"."},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Locked -> Finalised state change moves the link and time/cost data to the Finalised grid in ",(0,r.kt)("a",{parentName:"li",href:"."},"Pool.md"))),(0,r.kt)("p",null,"In order to pass the Dust -> Open state change, Requests and Ideas will be checked by QA against the templates for ","[Requests]","(../pool/Request Template) and ","[Ideas]","(../pool/Idea Template)."),(0,r.kt)("p",null,"A Request/Idea pair, or a solo Idea, can pass from either from Open or Locked -> Finalised by passing QA, which will judge whether what was described in the Idea has been completed, and for Request/Ideas, whether or to which extent the end execution has held to the original Strategic and Tactical Intents in the Requst."),(0,r.kt)("p",null,"Ideas that are inside of the Pool (either Open or Locked) are available for funding by pool members."),(0,r.kt)("p",null,"A record of the states of all Requests/Ideas are maintained in the pool dashboard - ",(0,r.kt)("a",{parentName:"p",href:"."},"Pool.md")," which contains a markdown grid of Requests and the Ideas in each state. For each row we track a tally of the USD funds and the time expenditure used against each one. This information is moved, during state changes, not duplicated."),(0,r.kt)("p",null,"All work carried out on Requests/Ideas inside the pool must track their time in pomos, being a 25 min segment of time. Logging of these can be outside of the pool, but evidence must be provided to QA in the form of a time log when applying for Finalised."),(0,r.kt)("p",null,"Funding for Locked Request/Ideas are required to have a contract, which includes the ","[Core DPL]","(../docs/DPL/Core DPL). The Escrow Service used is TBD."),(0,r.kt)("p",null,"When the lock times out, or the workers declare failure, or both parties agree, escrow is released back to the funder and the Idea moves back to Open state in the pool"),(0,r.kt)("p",null,"When Request/Idea/Output is submitted to QA for acceptance as Finalised, QA may give feedback if the work carried out does not meet the standard stated in the Idea, or may sign off and allow it to be moved to Finalised, at which point escrow funds are automatically issued."),(0,r.kt)("p",null,"QA we will use a combination of youtube live streamed calls and pull requests to provide feedback. Feedback for failed QA attempts is therefore in recorded form rather than documents. Successful QA attempts are documented by an accepted pull request."),(0,r.kt)("h1",{id:"complexity-count"},"Complexity Count"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Baseline complexity before this process: XX"),(0,r.kt)("li",{parentName:"ol"},"Complexity after thjs process: XX")))}m.isMDXComponent=!0},11748:function(e,t,o){var a={"./locale":89234,"./locale.js":89234};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=11748}}]);