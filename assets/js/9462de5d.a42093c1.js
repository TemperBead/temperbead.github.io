(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[8035],{20506:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=a(93456),s=["components"],l={},d="I11 Request-Idea",p={unversionedId:"Ideas/I11",id:"Ideas/I11",title:"I11 Request-Idea",description:"Target",source:"@site/nfas/Ideas/I11.md",sourceDirName:"Ideas",slug:"/Ideas/I11",permalink:"/nfas/Ideas/I11",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Ideas/I11.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"I07 Web Liquidity Pooling",permalink:"/nfas/Ideas/I07"},next:{title:"I12 WebDOS framework",permalink:"/nfas/Ideas/I12"}},m={},h=[{value:"Target",id:"target",level:2},{value:"Inherits",id:"inherits",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Concept",id:"concept",level:2},{value:"Actors and Actions",id:"actors-and-actions",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"Actors and Actions",id:"actors-and-actions-1",level:2},{value:"Implementation Steps",id:"implementation-steps-1",level:2}],u={toc:h};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"i11-request-idea"},"I11 Request-Idea"),(0,i.kt)("h2",{id:"target"},"Target"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/blob/master/website/nfas/Requests/R10.md"},"R10 Request-Idea")),(0,i.kt)("h2",{id:"inherits"},"Inherits"),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nfas/Ideas/I11"},"I11 Request-Idea")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dreamcatcher-tech.github.io/pool/"},"DC Pool Page")),(0,i.kt)("li",{parentName:"ul"},"App Concepts, TBD."),(0,i.kt)("li",{parentName:"ul"},"Complexity count")),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("p",null,"We want to encourage Requests and Ideas to be written down, not matter how vague, as early as possible, then provide a route to move from that vagueness through to having them admitted to a Pool, executed and produce Outputs.  To do this we'd set up areas in git where md files flow through the following process:  "),(0,i.kt)(r.Mermaid,{config:{},chart:"\nstateDiagram\n    direction LR\n\n    \n    [*] --\x3e Dust\n    Dust --\x3e poolEntryQA : submit\n    poolEntryQA --\x3e Dust : fail\n    poolEntryQA --\x3e inPool : pass\n    state inPool {\n      direction LR\n    [*] --\x3e Open\n      inCompletionQA --\x3e Locked : fail\n      Locked --\x3e inCompletionQA : submit\n      Open --\x3e Locked : Funding / Work\n      Locked --\x3e Locked : Funding / Work\n    inCompletionQA --\x3e Finalised : Pass\n    }\n    \n\n",mdxType:"Mermaid"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking.  This the is entry area into the process.   NFTs may (optionally) be generated by the author at any point in this state, one per doc."),(0,i.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool as stipulated.  NFTs are generated for docs that do not yet have them, and pass QA."),(0,i.kt)("li",{parentName:"ol"},"Open: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to, but no such contribution has yet been made."),(0,i.kt)("li",{parentName:"ol"},"Locked: Work/Funding has been applied to this Request/Idea.  This is the state Requests and Ideas that have passed Pool QA are in before they have been fully executed.  In this state a running total of the time/payments spent to date are recorded."),(0,i.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work promised in the Idea, which may have referenced a Request, has been completed.  I.e. did it do what it said it would do? NFTs are generated at this stage for Outputs if they pass QA."),(0,i.kt)("li",{parentName:"ol"},"Output: the Assets produced from the work are now available for use, having passed QA.  These Outputs come with the context of the Idea which kicked off the work, and (optionally) the Request which the Idea is attempting to fulfil.")),(0,i.kt)("p",null,"A record of these states would be maintained in a file named Market.md which contains a markdown grid of Requests and the Ideas in each state.  For each row we track a tally of the USD funds and the time expenditure used against each one.  This information is moved, during state changes, not duplicated."),(0,i.kt)("p",null,"To implement the states and state transistions, we'd use two different folders in git, and a pool dashboard (market.md)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the website/nfas/Drafts folder, and linked from the Dust grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Open' state are in website/nfas/Requests or website/nfas/Ideas folders, and linked from the Open grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"Dust -> Open and Open -> Locked state change involves copying the file from one folder to the next, not moving it.  This way we replicate a fork.  The time/cost data grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"Locked -> Finalised state change moves the link and time/cost data to the Finalised grid in market.md")),(0,i.kt)("p",null,"We'd keep the templates for Requests and Ideas in the website/AppData folder, and link to them from market.md.  We'd publish the Request/Idea process at the bottom of market.md."),(0,i.kt)("p",null,"For implementing QA we will use a combination of youtube live streamed calls and pull requests between msm & inv.  Feedback for failed QA attempts is therefore in recorded form rather than documents.  Successful QA attempts are documented by an accepted pull request."),(0,i.kt)("p",null,"We do not have an attribution algo for the dispersal of any revenue that comes, should it ever come.  However, we do have two units that we can record now as to the contribution.  The two units are pomos and dollars.  The pomos and dollars are logged against the Asset that was being worked on.  We invite a Request in due course to produce a starter Attribution Algo to generate the algorithmic cap table.  "),(0,i.kt)("h2",{id:"actors-and-actions"},"Actors and Actions"),(0,i.kt)("p",null,"Actors are non-exclusive; a single user can perform multiple roles."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Authors",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Create and edit Requests and/or Ideas."))),(0,i.kt)("li",{parentName:"ol"},"QA",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Reviews Requests and Ideas against the formats"),(0,i.kt)("li",{parentName:"ol"},"Records feedback to workers through youtube/voice recording."),(0,i.kt)("li",{parentName:"ol"},"Receive PRs for state changes"))),(0,i.kt)("li",{parentName:"ol"},"Workers",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Write and implement feedback for Requests/Ideas."),(0,i.kt)("li",{parentName:"ol"},"Submit PRs for state changes"),(0,i.kt)("li",{parentName:"ol"},"Produce the Outputs"),(0,i.kt)("li",{parentName:"ol"},"Log work data"),(0,i.kt)("li",{parentName:"ol"},"May generate NFTs for their docs."))),(0,i.kt)("li",{parentName:"ol"},"Funders",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Pool money against a Request, or an Idea in the Pool."))),(0,i.kt)("li",{parentName:"ol"},"Moderator",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Generates NFTs at State Change Open -> Locked if the doc does not already have one."),(0,i.kt)("li",{parentName:"ol"},"Updates market.md."),(0,i.kt)("li",{parentName:"ol"},"Ensures new Requests/Ideas appear on the website."))),(0,i.kt)("li",{parentName:"ol"},"Architects",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Submit the overall DC Request/Idea process to self improvement")))),(0,i.kt)("h2",{id:"implementation-steps"},"Implementation Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Draft the guidance section in market.md and Templates."),(0,i.kt)("li",{parentName:"ol"},"Populate the data in market.md for any existing Requests/Ideas."),(0,i.kt)("li",{parentName:"ol"},"Run the integration tests 1-4 on a Test Request/Idea pair.  This pair will be trivial - we need to test through to Finalised, which involves generating Outputs and two state changes with QA at each, so we will keep it light in order to focus on the integration tests themselves.  "),(0,i.kt)("li",{parentName:"ol"},"Check/update that ",(0,i.kt)("a",{parentName:"li",href:"https://dreamcatcher-tech.github.io/docs/"},"The User Dictionary")," is correct for the terms used.  "),(0,i.kt)("li",{parentName:"ol"},"Run Integration test 5 (Self Improvement) on the notes generated on the process to this point."),(0,i.kt)("li",{parentName:"ol"},"Create Dust for all existing App Concepts, then run each, one by one, through to Locked.")),(0,i.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,i.kt)("p",null,"These integration tests are intended "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request submission:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Author: Write a Request and records it in Drafts. "),(0,i.kt)("li",{parentName:"ol"},"Author: Submit the Request to poolEntryQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request. Have it bounce with QA feedback in audio or video.  "),(0,i.kt)("li",{parentName:"ol"},"Author: Update Request based on feedback"),(0,i.kt)("li",{parentName:"ol"},"Author: Resubmit to poolEntryQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of market.md."),(0,i.kt)("li",{parentName:"ol"},"State Change: Dust -> Open, folders updated, market.md updated, Request passes guidance and template checks."))),(0,i.kt)("li",{parentName:"ol"},"Idea Submission targetted at Request",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"As above steps."),(0,i.kt)("li",{parentName:"ol"},"QA: Consider Request/Idea lock in each poolEntryQA submission."))),(0,i.kt)("li",{parentName:"ol"},"Work on Idea Outputs while Locked",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Worker: Produce and update Outputs, while recording effort and the impact of that effort."),(0,i.kt)("li",{parentName:"ol"},"Funder: Contribute and distribute money, while recording contribution and the impact of that investment."))),(0,i.kt)("li",{parentName:"ol"},"Finalise an Idea ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Worker: Submit to inCompletionQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request. Have it bounce with QA feedback in audio or video.  "),(0,i.kt)("li",{parentName:"ol"},"Worker: Update Output based on feedback"),(0,i.kt)("li",{parentName:"ol"},"Worker: Resubmit to inCompletionQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of market.md."),(0,i.kt)("li",{parentName:"ol"},"State Change: Locked -> Finalised, folders updated, market.md updated."))),(0,i.kt)("li",{parentName:"ol"},"Self improvement",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Architects: For notes taken on the Open -> Finalised process",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Submit an Idea for the improvement to be made (targetted at ",(0,i.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea"),")"),(0,i.kt)("li",{parentName:"ol"},"Submit to State Change Open -> Locked QA"),(0,i.kt)("li",{parentName:"ol"},"Pass QA, and update folders and market.md"),(0,i.kt)("li",{parentName:"ol"},"Carry out the improvement, logging time."),(0,i.kt)("li",{parentName:"ol"},"Submit to State Change Locked -> Finalised QA"),(0,i.kt)("li",{parentName:"ol"},"Pass QA, and update folders and market.md")))))),(0,i.kt)("p",null,"Done is when the process has passed all three integration tests, ",(0,i.kt)("a",{parentName:"p",href:"https://dreamcatcher-tech.github.io/docs/"},"The User Dictionary")," has been updated, the complexity count (number of Dictionary concepts used) is known and one cycle of self-improvement has been proven."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking.  This the is entry area into the process.   NFTs may (optionally) be generated by the author at any point in this state, one per doc."),(0,i.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool as stipulated.  NFTs are generated for docs that do not yet have them, and pass QA."),(0,i.kt)("li",{parentName:"ol"},"Open: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to, but no such contribution has yet been made."),(0,i.kt)("li",{parentName:"ol"},"inProgress: Work/Funding has been applied to this Request/Idea.  This is the state Requests and Ideas that have passed Pool QA are in before they have been fully executed.  In this state a running total of the time/payments spent to date are recorded."),(0,i.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work promised in the Idea, which may have referenced a Request, has been completed.  I.e. did it do what it said it would do? NFTs are generated at this stage for Outputs if they pass QA."),(0,i.kt)("li",{parentName:"ol"},"Output: the Assets produced from the work are now available for use, having passed QA.  These Outputs come with the context of the Idea which kicked off the work, and (optionally) the Request which the Idea is attempting to fulfil.")),(0,i.kt)("p",null,"A record of these states would be maintained in a file named Market.md which contains a markdown grid of Requests and the Ideas in each state.  For each row we track a tally of the USD funds and the time expenditure used against each one.  This information is moved, during state changes, not duplicated."),(0,i.kt)("p",null,"To implement the states and state transistions, we'd use two different folders in git, and a pool dashboard (market.md)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the website/nfas/Drafts folder, and linked from the Dust grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Open' state are in website/nfas/Requests or website/nfas/Ideas folders, and linked from the Open grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"Dust -> Open and Open -> inProgress state change involves copying the file from one folder to the next, not moving it.  This way we replicate a fork.  The time/cost data grid in market.md"),(0,i.kt)("li",{parentName:"ol"},"inProgress -> Finalised state change moves the link and time/cost data to the Finalised grid in market.md")),(0,i.kt)("p",null,"We'd keep the templates for Requests and Ideas in the website/AppData folder, and link to them from market.md.  We'd publish the Request/Idea process at the bottom of market.md."),(0,i.kt)("p",null,"For implementing QA we will use a combination of youtube live streamed calls and pull requests between msm & inv.  Feedback for failed QA attempts is therefore in recorded form rather than documents.  Successful QA attempts are documented by an accepted pull request."),(0,i.kt)("p",null,"We do not have an attribution algo for the dispersal of any revenue that comes, should it ever come.  However, we do have two units that we can record now as to the contribution.  The two units are pomos and dollars.  The pomos and dollars are logged against the Asset that was being worked on.  We invite a Request in due course to produce a starter Attribution Algo to generate the algorithmic cap table.  "),(0,i.kt)("h2",{id:"actors-and-actions-1"},"Actors and Actions"),(0,i.kt)("p",null,"Actors are non-exclusive; a single user can perform multiple roles."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Authors",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Create and edit Requests and/or Ideas."))),(0,i.kt)("li",{parentName:"ol"},"QA",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Reviews Requests and Ideas against the formats"),(0,i.kt)("li",{parentName:"ol"},"Records feedback to workers through youtube/voice recording."),(0,i.kt)("li",{parentName:"ol"},"Receive PRs for state changes"))),(0,i.kt)("li",{parentName:"ol"},"Workers",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Write and implement feedback for Requests/Ideas."),(0,i.kt)("li",{parentName:"ol"},"Submit PRs for state changes"),(0,i.kt)("li",{parentName:"ol"},"Produce the Outputs"),(0,i.kt)("li",{parentName:"ol"},"Log work data"),(0,i.kt)("li",{parentName:"ol"},"May generate NFTs for their docs."))),(0,i.kt)("li",{parentName:"ol"},"Funders",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Pool money against a Request, or an Idea in the Pool."))),(0,i.kt)("li",{parentName:"ol"},"Moderator",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Generates NFTs at State Change Open -> Locked if the doc does not already have one."),(0,i.kt)("li",{parentName:"ol"},"Updates market.md."),(0,i.kt)("li",{parentName:"ol"},"Ensures new Requests/Ideas appear on the website."))),(0,i.kt)("li",{parentName:"ol"},"Architects",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Submit the overall DC Request/Idea process to self improvement")))),(0,i.kt)("h2",{id:"implementation-steps-1"},"Implementation Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Draft the guidance section in market.md and Templates."),(0,i.kt)("li",{parentName:"ol"},"Populate the data in market.md for any existing Requests/Ideas."),(0,i.kt)("li",{parentName:"ol"},"Run the integration tests 1-4 on a Test Request/Idea pair.  This pair will be trivial - we need to test through to Finalised, which involves generating Outputs and two state changes with QA at each, so we will keep it light in order to focus on the integration tests themselves.  "),(0,i.kt)("li",{parentName:"ol"},"Check/update that ",(0,i.kt)("a",{parentName:"li",href:"https://dreamcatcher-tech.github.io/docs/"},"The User Dictionary")," is correct for the terms used.  "),(0,i.kt)("li",{parentName:"ol"},"Run Integration test 5 (Self Improvement) on the notes generated on the process to this point."),(0,i.kt)("li",{parentName:"ol"},"Create Dust for all existing App Concepts, then run each, one by one, through to inProgress.")),(0,i.kt)("h1",{id:"integration-tests-1"},"Integration Tests"),(0,i.kt)("p",null,"These integration tests are intended "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request submission:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Author: Write a Request and records it in Drafts. "),(0,i.kt)("li",{parentName:"ol"},"Author: Submit the Request to poolEntryQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request. Have it bounce with QA feedback in audio or video.  "),(0,i.kt)("li",{parentName:"ol"},"Author: Update Request based on feedback"),(0,i.kt)("li",{parentName:"ol"},"Author: Resubmit to poolEntryQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of market.md."),(0,i.kt)("li",{parentName:"ol"},"State Change: Dust -> Open, folders updated, market.md updated, Request passes guidance and template checks."))),(0,i.kt)("li",{parentName:"ol"},"Idea Submission targetted at Request",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"As above steps."),(0,i.kt)("li",{parentName:"ol"},"QA: Consider Request/Idea lock in each poolEntryQA submission."))),(0,i.kt)("li",{parentName:"ol"},"Work on Idea Outputs while inProgress",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Worker: Produce and update Outputs, while recording effort and the impact of that effort."),(0,i.kt)("li",{parentName:"ol"},"Funder: Contribute and distribute money, while recording contribution and the impact of that investment."))),(0,i.kt)("li",{parentName:"ol"},"Finalise an Idea ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Worker: Submit to inCompletionQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request. Have it bounce with QA feedback in audio or video.  "),(0,i.kt)("li",{parentName:"ol"},"Worker: Update Output based on feedback"),(0,i.kt)("li",{parentName:"ol"},"Worker: Resubmit to inCompletionQA"),(0,i.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of market.md."),(0,i.kt)("li",{parentName:"ol"},"State Change: inProgress -> Finalised, folders updated, market.md updated."))),(0,i.kt)("li",{parentName:"ol"},"Self improvement",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Architects: For notes taken on the Open -> Finalised process",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Submit an Idea for the improvement to be made (targetted at ",(0,i.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea"),")"),(0,i.kt)("li",{parentName:"ol"},"Submit to State Change Open -> Locked QA"),(0,i.kt)("li",{parentName:"ol"},"Pass QA, and update folders and market.md"),(0,i.kt)("li",{parentName:"ol"},"Carry out the improvement, logging time."),(0,i.kt)("li",{parentName:"ol"},"Submit to State Change Locked -> Finalised QA"),(0,i.kt)("li",{parentName:"ol"},"Pass QA, and update folders and market.md")))))),(0,i.kt)("p",null,"Done is when the process has passed all three integration tests, ",(0,i.kt)("a",{parentName:"p",href:"https://dreamcatcher-tech.github.io/docs/"},"The User Dictionary")," has been updated, the complexity count (number of Dictionary concepts used) is known and one cycle of self-improvement has been proven."))}c.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=11748}}]);