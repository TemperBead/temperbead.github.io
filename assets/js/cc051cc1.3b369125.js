(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[7444],{5310:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),l=a(93456),r=["components"],s={},p="I11 Request-Idea",m={unversionedId:"Ideas/I11",id:"Ideas/I11",title:"I11 Request-Idea",description:"I11 Request-Idea",source:"@site/pool/Ideas/I11.md",sourceDirName:"Ideas",slug:"/Ideas/I11",permalink:"/pool/Ideas/I11",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/pool/Ideas/I11.md",tags:[],version:"current",frontMatter:{},sidebar:"pool",previous:{title:"Requests",permalink:"/pool/Requests/"},next:{title:"Ideas",permalink:"/pool/Ideas/"}},d={},u=[{value:"Version",id:"version",level:2},{value:"Target",id:"target",level:2},{value:"Inherits",id:"inherits",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Concept",id:"concept",level:2},{value:"Diagram Definitions",id:"diagram-definitions",level:2},{value:"Many to Many Requests/Ideas",id:"many-to-many-requestsideas",level:2},{value:"Pool Governance",id:"pool-governance",level:2},{value:"Actors and Actions",id:"actors-and-actions",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"Definition of Done",id:"definition-of-done",level:2}],k={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"i11-request-idea"},"I11 Request-Idea"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"I11 Request-Idea",src:a(98750).Z,width:"256",height:"256"})),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("p",null,"v1.0, dated 12 May 2022 "),(0,i.kt)("h2",{id:"target"},"Target"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pool/Requests/R10"},"R10 Request-Idea")),(0,i.kt)("h2",{id:"inherits"},"Inherits"),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/Requests/R10"},"R10 Request-Idea")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/Ideas/I11"},"I11 Request-Idea")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/Request_Template"},"Request Template")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/Idea_Template"},"Idea Template")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/Pool_Process"},"Pool Process")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool/governance"},"Pool Governance")),(0,i.kt)("li",{parentName:"ol"},"Existing App Concepts in Pool, Escrow.")),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("p",null,"We want to encourage Requests and Ideas to be written down, no matter how vague, as early as possible, then provide a route to move from that vagueness through to having them admitted to a Pool, executed and produce Outputs. To do this we'd set up areas in git where md files flow through the following process:"),(0,i.kt)(l.Mermaid,{config:{},chart:"\nstateDiagram\n\n    [*] --\x3e Dust\n    Dust --\x3e poolEntryQA : submit\n    poolEntryQA --\x3e Dust : fail\n    poolEntryQA --\x3e inPool : pass\n    state inPool {\n\n    [*] --\x3e Fundable\n      inCompletionQA --\x3e Escrowed : fail\n      Escrowed --\x3e inCompletionQA : submit\n      Fundable --\x3e Escrowed : Escrow lock\n      Escrowed --\x3e Fundable : Escrow release\n      Escrowed --\x3e Escrowed : Funding - Work\n    inCompletionQA --\x3e Completed : Pass\n    }\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"diagram-definitions"},"Diagram Definitions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking. This is the entry area into the process. NFTs images will be generated by the Worker, one per Request/Idea."),(0,i.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool has stipulated. NFT images are required to pass QA and must be of suitable content and unique. For an Idea to pass poolEntryQA it must reference a Request, and QA must be satisfied that it is coherent with that Request. That is, it must address at least one of the Request's Tactical Intents, and must not be incompatible with any of the Musts/Must Nots in all of the Tactical Intents in that Request. Moreover and more broadly, it must further the Request's stated Strategic Intent."),(0,i.kt)("li",{parentName:"ol"},"Fundable: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to in a permissionless manner but not under escrow. A running total of the time/payments spent to date are recorded."),(0,i.kt)("li",{parentName:"ol"},"Escrowed: A contract has been negotiated between a Funder and a Worker for delivery of all or parts of the Outputs stated in the Idea, with funds put in escrow. A running total of the time/payments spent to date are recorded, and for any escrow payments made, the fact of that payment is also recorded."),(0,i.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work in the linked Idea, which references a Request, has been completed. I.e. did it do what it said it would do? To be accepted at this stage, QA must satisfy themselves that the Outputs->Idea->Request bottom up stack is coherent. That is, the Output meets some or all of the requirements of the Idea, and that by doing so does not violate any of the Musts/Must Nots in the Request that the Idea targets. Note that this submission of Outputs does not need to reference the original Idea or Request, and may reference more than one Idea or Requests, but in all cases the Ideas and Requests referenced must be in the Pool."),(0,i.kt)("li",{parentName:"ol"},"Output: the Assets produced from the work are now available for use, having passed QA. These Outputs come with the context of one or more Idea which it meets the requirements of, and that for each referenced Idea, the Output does not violate any of the Requests which those Ideas are attempting to fulfil. Note that for an Output to have reached this state there must be at least one Output->Idea->Request stacks.")),(0,i.kt)("p",null,"When funds are escrowed they come with a lock, which allows QA to release them based on the contents of the contract, which references the Idea or part of the Idea, and whether they judge that contract to have been completed. That lock can time out, or the worker can declare failure, or both parties agree not to proceed, at which point escrow is released back to the funder and the Idea moves back to Fundable state in the pool if there are no further escrows in place."),(0,i.kt)("p",null,"A record of these states would be maintained in a file named ",(0,i.kt)("a",{parentName:"p",href:"/pool"},"Pool.md")," which contains a markdown grid of Requests and the Ideas in each state. For each row we track a tally of the USD funds and the time expenditure used against each one. This information is moved, during state changes, not duplicated."),(0,i.kt)("p",null,"To implement the states and state transitions, we'd use two different folders in git, and a pool dashboard (",(0,i.kt)("a",{parentName:"p",href:"/pool"},"Pool.md"),")"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the ",(0,i.kt)("a",{parentName:"li",href:"/nfas"},"nfas")," folder. They are not listed in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")),(0,i.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Fundable' state are in the ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"pool")," folder, and linked from the Fundable grid in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")),(0,i.kt)("li",{parentName:"ol"},"Dust -> Fundable state change involves copying the file from one folder to the next, not moving it. This way we replicate a fork."),(0,i.kt)("li",{parentName:"ol"},"Escrowed -> Completed and Open -> Completed state changes moves the link and time/cost data to the Completed grid in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")," but does not involve copying the file itself.")),(0,i.kt)("p",null,"The templates for Requests and Ideas will be linked from ",(0,i.kt)("a",{parentName:"p",href:"/pool"},"Pool.md"),". We'd publish the Request/Idea process at the bottom of ",(0,i.kt)("a",{parentName:"p",href:"/pool"},"Pool.md"),"."),(0,i.kt)("p",null,"For implementing QA we will use a combination of youtube live streamed calls and pull requests between msm & inv. Feedback for failed QA attempts is therefore in recorded form rather than documents. Successful QA attempts are documented by an accepted pull request."),(0,i.kt)("p",null,"We do not have an attribution algo for the dispersal of any revenue that comes, should it ever come. However, we do have two units that we can record now as to the contribution. The two units are time (hrs) and dollars. The time and dollars are logged against the Asset that was being worked on inj ",(0,i.kt)("a",{parentName:"p",href:"/pool"},"Pool.md"),". We invite a Request in due course to produce a starter Attribution Algo to generate the algorithmic cap table."),(0,i.kt)("h2",{id:"many-to-many-requestsideas"},"Many to Many Requests/Ideas"),(0,i.kt)("p",null,"Once in the Pool, the aim is to encourage a free-flow between Requests and Ideas that may well result in the production of new Requests and Ideas (each of which needs to pass QA independently.) Ie"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Two or more Requests can be targetted by the same Idea as a child. That is, if two Requests aim at different outcomes, but can be solved by a single Idea, that's to be encouraged."),(0,i.kt)("li",{parentName:"ol"},"Two or more Ideas similarly can target a single Request. E.g. a Request/Idea is submitted. Either while still being worked on or after the Outputs are in Completed, a separate Idea, not known at the time of the initial Request/Idea, can be submitted. It could be that the Idea has long since been completed but someone else is now offering a better or different Idea than the one initially used."),(0,i.kt)("li",{parentName:"ol"},"An Idea targetted at a Request may highlight the possibility for a new Request that has yet to be written. In this case, a new Request can be written retrospectively for that Idea to target. In some cases a Request can trigger a potent Idea that has several Requests that it could address.")),(0,i.kt)("p",null,"In all cases, QA will only consider a one to one matching of Request/Idea. If additional Requests or Ideas are needed to meet this matching, then they are generated as Dust and go through QA in the normal process."),(0,i.kt)("h2",{id:"pool-governance"},"Pool Governance"),(0,i.kt)("p",null,"The right for Workers and Funders to interact in the pool are based on certain states of each, e.g. KYC pass. These are stated in ",(0,i.kt)("a",{parentName:"p",href:"/pool/governance"},"Pool Governance")," and are enforced by the Moderator."),(0,i.kt)("h2",{id:"actors-and-actions"},"Actors and Actions"),(0,i.kt)("p",null,"Actors are non-exclusive; a single user can perform multiple roles."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"QA")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PASS_REQUEST_ENTRY")," { pool, request } // Submitted Request meets published quality requirements for entry to Pool."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_REQUEST_ENTRY")," { pool, request, feedback } // Submitted Request does not meet published quality requirements for entry to Pool. Feedback given in url link to recording (audio or Youthube)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PASS_IDEA_ENTRY")," { pool, idea } // Submitted (Idea) meets published quality requirements for entry to Pool."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_IDEA_ENTRY")," { pool, idea, feedback } // Submitted Idea does not meet published quality requirements for entry to Pool. Feedback given in recording (audio or Youthube)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PASS_COMPLETION")," { pool, idea, gitCommitHash } // Submitted Idea meets Pool standards to release Escrow."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_COMPLETION")," { pool, idea, gitCommitHash, feedback } // Submitted Request does not meet Pool standards to release Escrow. Feedback given in recording (audio or Youthube)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"WORKER")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_REQUEST")," { request }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_IDEA")," { idea }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_REQUEST")," { request } // Voluntarily delete a Request, leaving forks untouched"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_IDEA")," { idea } // Voluntarily delete an Idea, leaving forks untouched"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TRY_REQUEST_ENTRY")," { pool, request }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TRY_IDEA_ENTRY")," { pool, idea }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_OUTPUT")," { gitCommitHash }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"RECORD_LABOUR")," { target, worklog } // Record time spent on Object"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_NFT_IMAGE")," { target, image }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TRY_COMPLETION")," { pool, idea, gitCommitHash }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")," { contract } // Commit to Contracts with Funders following negotiation"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"REVOKE_CONTRACT")," { contract }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")," { pool }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"LEAVE_MEMBERSHIP")," { pool }"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"FUNDER")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")," { contract, funds } // Commit to Contracts with Workers following negotiation"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"REVOKE_CONTRACT")," { contract } // Transfer capital to Escrow referencing either a Contract or a Request or an Idea"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")," { pool }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"LEAVE_MEMBERSHIP")," { pool }"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"MODERATOR")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_POOL")," { pool }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_POOL")," { pool, poolUpdates } // On QA:PASS_REQUEST_ENTRY, QA:PASS_IDEA_ENTRY, QA:PASS_IDEA_COMPLETE, WORKER:SIGN && FUNDER:SIGN"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ADD_MEMBERSHIP")," { pool, actor } // Issue the right of Worker or Funder to interact with the Pool based on Pool Governance"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_MEMBERSHIP")," { pool, actor } // Revoke the right of Worker or Funder to interact with the Pool based on Pool Governance"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ADD_FUNDS")," { pool, actor }"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"PAYOUT_FUNDS")," { pool, actor }")))),(0,i.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request/Idea submission. For each of Request and Idea:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Start State: Request/Idea not written or submitted."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_REQUEST")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_IDEA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_NFT_IMAGE")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_REQUEST_ENTRY")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"QA"),":",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_REQUEST_ENTRY"),"|| ",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_REQUEST")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_IDEA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_REQUEST"),"|| ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_IDEA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_REQUEST_ENTRY")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"QA"),":",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_REQUEST_ENTRY"),"|| ",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_REQUEST"),"|| ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_IDEA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_REQUEST_ENTRY")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"QA"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PASS_REQUEST_ENTRY")," || ",(0,i.kt)("inlineCode",{parentName:"li"},"PASS_IDEA_ENTRY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_POOL")),(0,i.kt)("li",{parentName:"ol"},"End state:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Dust Request/Idea in ",(0,i.kt)("a",{parentName:"li",href:"/nfas"},"nfas")),(0,i.kt)("li",{parentName:"ol"},"Pool Request/Idea in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"pool")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")," updated with Request/Idea under 'Fundable'."))))),(0,i.kt)("li",{parentName:"ol"},"Fund the Idea:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Start State: Request, with Idea that targets it, both in Pool 'Fundable.'"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"REVOKE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"REVOKE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PROPOSE_CONTRACT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_POOL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_FUNDS")),(0,i.kt)("li",{parentName:"ol"},"End state: Idea moved to Escrowed table in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md"),", including previous time/USD."))),(0,i.kt)("li",{parentName:"ol"},"Work on Idea Outputs while Escrowed",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_OUTPUT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"RECORD_LABOUR")),(0,i.kt)("li",{parentName:"ol"},"End State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."))),(0,i.kt)("li",{parentName:"ol"},"Complete an Idea",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_COMPLETION")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"QA"),":",(0,i.kt)("inlineCode",{parentName:"li"},"FAIL_COMPLETION")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE_OUTPUT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"TRY_COMPLETION")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"QA"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PASS_COMPLETION")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"PAYOUT_FUNDS")),(0,i.kt)("li",{parentName:"ol"},"End Change: Escrowed -> Completed table updated in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md"),". Record on QA acceptance recorded in Idea."))),(0,i.kt)("li",{parentName:"ol"},"Pool Membership Management",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE_POOL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"LEAVE_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"WORKER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"LEAVE_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"FUNDER"),":",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_MEMBERSHIP")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"MODERATOR"),":",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE_MEMBERSHIP"))))),(0,i.kt)("h2",{id:"implementation-steps"},"Implementation Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Draft the initial version of the process in ",(0,i.kt)("a",{parentName:"li",href:"/pool/Pool_Process"},"Pool Process"),"."),(0,i.kt)("li",{parentName:"ol"},"Draft compatible Templates at ",(0,i.kt)("a",{parentName:"li",href:"/pool/Request_Template"},"Request Template"),", ",(0,i.kt)("a",{parentName:"li",href:"/pool/Idea_Template"},"Idea Template")),(0,i.kt)("li",{parentName:"ol"},"Set the data in ",(0,i.kt)("a",{parentName:"li",href:"/pool"},"Pool.md")," for any existing Requests/Ideas."),(0,i.kt)("li",{parentName:"ol"},"Run an initial trivial Test Request/Idea pair through the process to Completed, which involves generating Outputs and two state changes with QA at each. Take notes on where the process is incomplete or misfires."),(0,i.kt)("li",{parentName:"ol"},"With the notes on the action of the process, submit an Idea and a Request for improvements to the Pool. Run the improvements Request/Idea pair through the process to improve the process. Repeat until no major changes to the core process are proposed. (Changes to the wider, non-simple case are recorded as Dust Requests for future work.)"),(0,i.kt)("li",{parentName:"ol"},"Record the complexity count for the current ",(0,i.kt)("a",{parentName:"li",href:"/docs/User_Dictionary"},"The User Dictionary"),", update with all terms in this process, then recalculate the complexity count. Record results in the ",(0,i.kt)("a",{parentName:"li",href:"/pool/Pool_Process"},"Pool Process"),"."),(0,i.kt)("li",{parentName:"ol"},"Create Dust for all existing App Concepts, then run each, one by one, through to Escrowed.")),(0,i.kt)("h2",{id:"definition-of-done"},"Definition of Done"),(0,i.kt)("p",null,"Done is when the process has passed all integration tests, ",(0,i.kt)("a",{parentName:"p",href:"/docs/User_Dictionary"},"The User Dictionary")," has been updated, the complexity count (number of Dictionary concepts used) is known, one cycle of self-improvement has been proven and all existing Apps have been created as Dust , then run each, one by one, through to Escrowed."))}h.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=11748},98750:function(e,t,a){"use strict";t.Z=a.p+"assets/images/I11-a2836673e46c08c3d0407ed2b9ff847c.png"}}]);