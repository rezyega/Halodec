(self["webpackChunkhalodek"]=self["webpackChunkhalodek"]||[]).push([[689],{5298:(M,t,j)=>{"use strict";j.r(t),j.d(t,{default:()=>B});var s=j(3673),N=j(2323),i=j(7891),a=j.n(i),e=j(1488),u=j.n(e),L=j(8868),T=j.n(L);const g=(0,s._)("div",{class:"col-12 row justify-center q-mt-md q-pa-md"},[(0,s._)("div",{class:"col-md-4 col-sm-6 col-xs-10 row"},[(0,s._)("div",{class:"col-6 row justify-center"},[(0,s._)("img",{alt:"Quasar logo",src:a(),style:{"max-width":"90%",height:"auto"}})]),(0,s._)("div",{class:"col-6 row justify-center",style:{"border-left":"1px solid #dedede"}},[(0,s._)("img",{alt:"Quasar logo",src:u(),style:{"max-width":"50%",height:"auto"}})])])],-1),I={class:"col-12 row justify-center q-mt-md"},z={class:"col-md-4 col-xs-10 row justify-center"},D=(0,s._)("div",{class:"text-h6 text-bold"},"Report",-1),c=(0,s._)("td",{class:"fontVar"},"Nama pasien",-1),r={class:"text-right fontData",style:{width:"60%"}},n=(0,s._)("td",{class:"fontVar"},"Tanggal lahir",-1),y={class:"text-right fontData",style:{width:"60%"}},S=(0,s._)("td",{class:"fontVar"},"Lokasi layanan",-1),l={class:"text-right fontData",style:{width:"60%"}},A=(0,s._)("td",{class:"fontVar"},"Waktu & tanggal",-1),x={class:"text-right fontData",style:{width:"60%"}},d=(0,s._)("td",{class:"fontVar"},"Layanan",-1),o={class:"text-right fontData",style:{width:"60%"}},m=(0,s._)("tr",{style:{height:"15px"}},[(0,s._)("td"),(0,s._)("td")],-1),O=(0,s._)("td",{class:"fontVar"},"Hasil",-1),C={class:"text-right fontData",style:{width:"50%"}},k={class:"bg-cyan-1 q-pa-sm"},h=(0,s._)("div",{class:"col row col-12 self-end justify-end"},[(0,s._)("img",{alt:"Quasar logo",src:T(),style:{"max-width":"100%",height:"auto"}})],-1);function E(M,t,j,i,a,e){const u=(0,s.up)("q-card-section"),L=(0,s.up)("q-separator"),T=(0,s.up)("q-card"),E=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(E,{class:"row",style:{background:"#F9F9F9"}},{default:(0,s.w5)((()=>[g,(0,s._)("div",I,[(0,s._)("div",z,[(0,s.Wm)(T,{class:"my-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[D])),_:1}),(0,s.Wm)(L,{inset:""}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s._)("table",null,[(0,s._)("tr",null,[c,(0,s._)("td",r,(0,N.zw)(a.dataPatient.name),1)]),(0,s._)("tr",null,[n,(0,s._)("td",y,(0,N.zw)(a.dataPatient.birthDate),1)]),(0,s._)("tr",null,[S,(0,s._)("td",l,(0,N.zw)(a.dataPatient.locService),1)]),(0,s._)("tr",null,[A,(0,s._)("td",x,(0,N.zw)(a.dataPatient.serviceDateTime),1)]),(0,s._)("tr",null,[d,(0,s._)("td",o,(0,N.zw)(a.dataPatient.service),1)]),m,(0,s._)("tr",null,[O,(0,s._)("td",C,[(0,s._)("span",k,(0,N.zw)(a.dataPatient.testResults),1)])])])])),_:1})])),_:1})])]),h])),_:1})}const w=JSON.parse('[{"id":"1","name":"Fauza Aulia Rahman","birthDate":"13 Maret 1995","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"2","name":"Fauzi Aulia Rahman","birthDate":"13 Maret 1995","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"3","name":"Reazy Ega Frinanda","birthDate":"30 Oktober 1998","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"4","name":"Al Buruuj Mawarda","birthDate":"22 Februari 2006","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"23 Mei 2022","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"5","name":"Muhammad Hafiid Arrayyan","birthDate":"5 November 2007","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"23 Mei 2022","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"6","name":"Muhammad Abdul Wahhab","birthDate":"15 Januari 2005","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"7","name":"Hafshah Nur Aini","birthDate":"21 Juli 2007","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"28 February 2022","service":"RT-PCR","testResults":"NON-REAKTIF"},{"id":"8","name":"Chairun Nisa","birthDate":"10 Januari 2002","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"26 February 2022","service":"RT-Antigen","testResults":"NON-REAKTIF"},{"id":"9","name":"Amjad Qathrunnada","birthDate":"03 September 2002","locService":"Rumah Sakit Universitas Brawijaya","serviceDateTime":"25 February 2022","service":"RT-Antigen","testResults":"NON-REAKTIF"}]');var Y=j(8603),Q=j.n(Y),v=j(5040),U=j.n(v);const b={name:"index",data(){return{dataPatient:{name:"",birthDate:"",locService:"",serviceDateTime:"",service:"",testResults:""}}},created(){this.getData(this.$route.params.id)},methods:{getData(M){this.dataPatient=Q().find(w,{id:M});const t=new Date(this.dataPatient.serviceDateTime);this.dataPatient.serviceDateTime=U()(t).format("D MMMM YYYY")+", 09:00"}}};var f=j(4260),R=j(4379),p=j(151),_=j(5589),F=j(5869),P=j(7518),Z=j.n(P);const W=(0,f.Z)(b,[["render",E]]),B=W;Z()(b,"components",{QPage:R.Z,QCard:p.Z,QCardSection:_.Z,QSeparator:F.Z})},6700:(M,t,j)=>{var s={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function N(M){var t=i(M);return j(t)}function i(M){if(!j.o(s,M)){var t=new Error("Cannot find module '"+M+"'");throw t.code="MODULE_NOT_FOUND",t}return s[M]}N.keys=function(){return Object.keys(s)},N.resolve=i,M.exports=N,N.id=6700},7891:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTMiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAxNTMgMjgiPgogICAgPHBhdGggZmlsbD0iI0UwMDA0RCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4wMi4yODR2Mi4wOTNIMi4wNTZ2MS44MzJjMCAzLjA5NiAxLjk0IDUuNjExIDUuMDI3IDUuNjExUzEyLjM3IDcuMzA1IDEyLjM3IDQuMjFWMi4zNzdoLTIuOTNWLjI4NGg1LjAyVjQuMjFjLjAxNiAyLjA1My0uODU2IDQuMTQ4LTIuMjkxIDUuNjAyLTEuMTQ3IDEuMTYtMi4yIDEuNzQxLTMuNzg0IDIuMDAzdjUuOTgzYzAgNC42OTcgNC4xMiA4LjEwNCA5Ljc5NyA4LjEwNCA1LjUzMyAwIDkuMzk1LTMuMzMyIDkuMzk1LTguMTA0di01Ljk4M2gyLjMyOHY1Ljk4M0MyOS45MDQgMjMuNzA5IDI0Ljk3NSAyOCAxOC4xOCAyOGMtNi45MTMtLjAwMi0xMi4xMjYtNC4zODctMTIuMTI2LTEwLjIwM3YtNS45NTJDMi4yNjMgMTEuMzQxIDAgOC4xNjggMCA0LjIxVi4yODRoNS4wMnpNNjUuMDc3IDguMzhjMy40MyAwIDUuNzI4IDEuOTI2IDUuNzI4IDQuOTU4djguNDg2YzAgMS4xNDMuNTcgMS4yMjcgMS4yMjIgMS4yMzJoLjM4MnYxLjY3MmMtLjM0OC4yMjEtLjg4LjM0OC0xLjYwNC4zNDgtLjc4OCAwLTEuMzIyLS4yODUtMS42NjgtLjg1My0uMTU4LS4yODItLjI4My0uNjMyLS4zNDYtMS4wMS0xLjEzNCAxLjM2LTIuOTI2IDIuMDItNS40MTIgMi4wMi0zLjQgMC01LjczLTEuODktNS43My00Ljc2NSAwLTMuMjUgMi4yMDItNC43OTcgNi42MS01LjE0NCAxLjYzNy0uMTI4IDIuNzM3LS4zMTQgMy4zMzYtLjYuNTk2LS4yODQuODgyLS44NS44ODItMS43MzUgMC0xLjI5My0xLjEwNC0yLjQyOS0zLjQtMi40MjktMS43MzEgMC0zLjE0Ny43NTgtNC4yOCAyLjI0MWwtMS42MDQtMS4zMjZjMS40MTYtMi4wNSAzLjM2Ni0zLjA5NSA1Ljg4NC0zLjA5NXptMTIuNTU2LTUuNjE0djE3LjgzYzAgMS43NjYuNTAyIDIuNDYgMS45ODIgMi40Ni40NCAwIC44MTYtLjAzMiAxLjEzMS0uMTI3djIuMThjLS4zNDUuMDk0LS43Mi4xMjQtMS4xMzEuMTI0LTEuMDQgMC0xLjc5Ni0uMTU3LTIuNzctLjY5Mi0uOTc0LS41MzgtMS41NC0xLjg2Mi0xLjU0LTMuNzg3VjIuNzY2aDIuMzI4em0xMi4xNDUgNS42MTVjMi4zNiAwIDQuMzQzLjgyMiA1Ljk4MiAyLjQzMiAxLjYzNSAxLjYxIDIuNDUzIDMuNTk3IDIuNDUzIDUuOTk2IDAgMi4zOTgtLjgxOCA0LjQxNy0yLjQ1MyA2LjAyNy0xLjY0IDEuNjEtMy42MjIgMi4zOTctNS45ODIgMi4zOTctMi4zNiAwLTQuMzQyLS43ODgtNS45NzgtMi4zOTctMS42MzYtMS42MS0yLjQ1NS0zLjYzLTIuNDU1LTYuMDI3IDAtMi40LjgxOS00LjM4NiAyLjQ1NS01Ljk5NiAxLjYzNi0xLjYxIDMuNjE4LTIuNDMyIDUuOTc4LTIuNDMyem0yNi44MDYtNS42MTVWMjQuNzZoLTIuMzI3di0yLjM2NmMtLjkxNCAxLjYwOS0yLjc3IDIuODQtNS42MzMgMi44NC0yLjIzMyAwLTQuMTU1LS43OS01LjY5Ny0yLjM5OC0xLjU0MS0xLjYxLTIuMzI3LTMuNjI5LTIuMzI3LTYuMDI3IDAtMi40Ljc4Ni00LjM4NSAyLjMyNy01Ljk5NiAxLjU0Mi0xLjYxIDMuNDY0LTIuNDMzIDUuNjk3LTIuNDMzIDIuODYyIDAgNC43MTkgMS4yMzQgNS42MzMgMi44NDJWMi43NjZoMi4zMjd6bTExLjIyNiA1LjYxNWMyLjM2IDAgNC4zNC44MjIgNS45NzggMi40MzIgMS42MzcgMS42MSAyLjQ1NCAzLjU5NyAyLjQ1NCA1Ljk5NiAwIDIuMzk4LS44MTcgNC40MTctMi40NTQgNi4wMjctMS42MzggMS42MS0zLjYxOCAyLjM5Ny01Ljk3OCAyLjM5N3MtNC4zNDMtLjc4OC01Ljk4LTIuMzk3Yy0xLjYzNi0xLjYxLTIuNDU1LTMuNjMtMi40NTUtNi4wMjcgMC0yLjQuODItNC4zODYgMi40NTUtNS45OTYgMS42MzctMS42MSAzLjYyLTIuNDMyIDUuOTgtMi40MzJ6bTE5LjAxNiAwYzIuNDUzIDAgNC40NjguNzkxIDYuMDA4IDIuMzk3bC0xLjQxNCAxLjY0NmMtMS4xOTYtMS4yMzMtMi43MzgtMS44NjQtNC41OTQtMS44NjQtMS43NjMgMC0zLjIxLjYtNC4zNzMgMS43OTctMS4xNjcgMS4xNjktMS43MzMgMi42NTMtMS43MzMgNC40NTIgMCAxLjc5Ny41NjYgMy4yODEgMS43MzMgNC40NzkgMS4xNjQgMS4xNjcgMi42MSAxLjc2OSA0LjM3MyAxLjc2OSAxLjg1NiAwIDMuMzk4LS42MzQgNC41OTQtMS44NjNsMS40MTQgMS42NDJjLTEuNTQgMS42MDktMy41NTUgMi4zOTctNi4wMDggMi4zOTctMi4zNiAwLTQuMzQtLjc4OC01Ljk4LTIuMzk3LTEuNjM1LTEuNjEtMi40NTMtMy42MjktMi40NTMtNi4wMjcgMC0yLjQuODE4LTQuMzg1IDIuNDUzLTUuOTk2IDEuNjQtMS42MSAzLjYyLTIuNDMzIDUuOTgtMi40MzN6TTQ0LjI4MiAyLjc2NXY4Ljc3MmMuODQ3LTEuNzY1IDIuNTc5LTIuOTM0IDQuODc2LTIuOTM0IDMuNDkzIDAgNS42OTUgMi4zNjYgNS42OTUgNS45OTZ2MTAuMTZoLTIuMzI5di05LjY1NWMwLTIuNjU0LTEuNTEtNC4zMjctMy45MzItNC4zMjctMi41MTkgMC00LjMxIDEuODMzLTQuMzEgNC40ODR2OS40OThoLTIuMzNWMi43NjZoMi4zM3ptMjQuMTk0IDEzLjc4OGMtLjQ0MS40NzUtMS44MjYuNzktNC4xMjUuOTc3LTIuODk0LjI1Ni00LjM3My45NDgtNC4zNzMgMi44NzMgMCAxLjY3NCAxLjM4NSAyLjY1MyAzLjY1MiAyLjY1MyAzLjExMyAwIDQuODQ2LTEuNDIgNC44NDYtMy42NnYtMi44NDN6bTIxLjMwMS01Ljk5NGMtMS43NjIgMC0zLjIwOS42LTQuMzczIDEuNzk3LTEuMTY1IDEuMTY5LTEuNzMgMi42NTMtMS43MyA0LjQ1MiAwIDEuNzk3LjU2NSAzLjI4MyAxLjczIDQuNDc5IDEuMTY0IDEuMTY3IDIuNjExIDEuNzY4IDQuMzczIDEuNzY4IDEuNzYzIDAgMy4yMTEtLjYwMSA0LjM3NS0xLjc2OCAxLjE2NS0xLjE5NyAxLjczLTIuNjgyIDEuNzMtNC40NzkgMC0xLjc5OS0uNTY1LTMuMjgzLTEuNzMtNC40NTItMS4xNjQtMS4xOTYtMi42MTItMS43OTctNC4zNzUtMS43OTd6bTE4Ljg0NiAwYy0xLjYzNiAwLTIuOTkxLjYtNC4wOTIgMS43OTctMS4wNjggMS4xNjktMS42MDUgMi42NTMtMS42MDUgNC40NTIgMCAxLjc5Ny41MzcgMy4yODEgMS42MDUgNC40NzkgMS4xMDEgMS4xNjcgMi40NTYgMS43NjkgNC4wOTIgMS43NjkgMS42OTYgMCAzLjExMy0uNjAyIDQuMjE1LTEuNzcgMS4xMzUtMS4xOTcgMS43MDEtMi42ODEgMS43MDEtNC40NzggMC0xLjc5OS0uNTY2LTMuMjgzLTEuNzAxLTQuNDUyLTEuMTAyLTEuMTk2LTIuNTE5LTEuNzk3LTQuMjE1LTEuNzk3em0xOS4xODYgMGMtMS43NjQgMC0zLjIxLjYtNC4zNzQgMS43OTctMS4xNjYgMS4xNjktMS43MyAyLjY1My0xLjczIDQuNDUyIDAgMS43OTcuNTY0IDMuMjgyIDEuNzMgNC40NzkgMS4xNjQgMS4xNjcgMi42MSAxLjc2OCA0LjM3NCAxLjc2OCAxLjc2MiAwIDMuMjEtLjYwMSA0LjM3My0xLjc2OCAxLjE2NC0xLjE5NyAxLjczLTIuNjgyIDEuNzMtNC40NzkgMC0xLjc5OS0uNTY2LTMuMjgzLTEuNzMtNC40NTItMS4xNjMtMS4xOTYtMi42MTEtMS43OTctNC4zNzMtMS43OTd6TTI4LjgxNiAwYzIuNDg4IDAgNC41MTcgMi4wMzMgNC41MTcgNC41MyAwIDIuNTEyLTIuMDI5IDQuNTU1LTQuNTE3IDQuNTU1LTIuNDkxIDAtNC41MTctMi4wNDMtNC41MTctNC41NTUgMC0yLjQ5NyAyLjAyNi00LjUzIDQuNTE3LTQuNTN6bTAgMi4xYy0xLjM1IDAtMi40NDggMS4xMDItMi40NDggMi40NTYgMCAxLjM1IDEuMDk4IDIuNDUyIDIuNDQ4IDIuNDUyIDEuMzQ2IDAgMi40NDYtMS4xMTIgMi40NDYtMi40OCAwLTEuMzQtMS4xLTIuNDI4LTIuNDQ2LTIuNDI4eiIvPgo8L3N2Zz4K"},1488:(M,t,j)=>{M.exports=j.p+"img/logo-moh.d7e32c49.svg"},8868:(M,t,j)=>{M.exports=j.p+"img/report-background.492424fc.svg"}}]);