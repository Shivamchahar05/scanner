(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/jrk":function(t,e,n){"use strict";n.r(e),n.d(e,"JobDetailsModule",(function(){return $}));var c=n("ofXK"),o=n("mrSG"),i=n("7O6Y"),a=n("/9RH"),l=n("SqtC"),r=n("RVMx"),s=n("fXoL"),g=n("tyNb"),d=n("u9as"),p=n("A1CT"),u=n("6c3r"),h=n("STbY"),b=n("7EHt"),m=n("YtCS"),_=n("E0so"),f=n("+xuN");function P(t,e){if(1&t&&(s.hc(0,"span",56),s.cd(1),s.gc()),2&t){const t=e.$implicit;s.Pb(1),s.ed(" ",null==t?null:t.name," ")}}function v(t,e){1&t&&(s.hc(0,"span",56),s.cd(1," NA "),s.gc())}function C(t,e){if(1&t&&(s.hc(0,"div",33),s.hc(1,"span",56),s.cd(2),s.gc(),s.gc()),2&t){const t=s.sc();s.Pb(2),s.dd((null==t.activeJob||null==t.activeJob.experience?null:t.activeJob.experience.type[0])==(null==t.experienceType?null:t.experienceType.NO_EXP)?"No experience":"Experienced")}}function O(t,e){1&t&&(s.hc(0,"p"),s.cd(1,"No data"),s.gc())}function M(t,e){1&t&&(s.hc(0,"h3",40),s.cd(1,"Custom requirements"),s.gc())}function w(t,e){if(1&t&&(s.hc(0,"div",57),s.hc(1,"p"),s.cd(2),s.gc(),s.gc()),2&t){const t=s.sc();s.Pb(2),s.dd(null==t.activeJob?null:t.activeJob.requirment)}}function x(t,e){if(1&t&&(s.hc(0,"tr"),s.hc(1,"td"),s.cd(2),s.gc(),s.hc(3,"td"),s.cd(4),s.tc(5,"customDate"),s.gc(),s.hc(6,"td"),s.cd(7),s.tc(8,"customDate"),s.gc(),s.hc(9,"td"),s.cd(10),s.tc(11,"customCurrency"),s.gc(),s.hc(12,"td"),s.cd(13),s.tc(14,"customCurrency"),s.gc(),s.gc()),2&t){const t=e.$implicit,n=s.sc(4);s.Pb(2),s.dd(null==t?null:t.title),s.Pb(2),s.ed(" ",s.vc(5,5,null==t?null:t.startTime,null==n.dFormat?null:n.dFormat.ONLY_TIME)," "),s.Pb(3),s.ed(" ",s.vc(8,8,null==t?null:t.endTime,null==n.dFormat?null:n.dFormat.ONLY_TIME)," "),s.Pb(3),s.ed(" ",s.uc(11,11,null==n.activeJob||null==n.activeJob.baseSalary?null:n.activeJob.baseSalary.salary)," /hr "),s.Pb(3),s.ed(" ",s.vc(14,13,null==t||null==t.additionalAllowance?null:t.additionalAllowance.salary,2==t.additionalAllowance.currency?"MALAYSIA":"SINGAPORE")," /hr ")}}function y(t,e){if(1&t&&(s.fc(0),s.ad(1,x,15,16,"tr",68),s.ec()),2&t){const t=s.sc().$implicit;s.Pb(1),s.zc("ngForOf",null==t?null:t.timeSlots)}}function J(t,e){1&t&&(s.hc(0,"div",69),s.cd(1,"No time slot found"),s.gc())}function S(t,e){if(1&t&&(s.hc(0,"mat-expansion-panel",59),s.hc(1,"mat-expansion-panel-header"),s.hc(2,"mat-panel-title"),s.hc(3,"h3"),s.cd(4),s.gc(),s.hc(5,"p"),s.cd(6),s.gc(),s.gc(),s.gc(),s.hc(7,"div",60),s.hc(8,"table",61),s.hc(9,"tr"),s.hc(10,"th",62),s.cd(11,"Title"),s.gc(),s.hc(12,"th",63),s.cd(13,"Start time"),s.gc(),s.hc(14,"th",64),s.cd(15,"End time"),s.gc(),s.hc(16,"th",65),s.cd(17,"Base salary"),s.gc(),s.hc(18,"th",66),s.cd(19,"Additional allowances"),s.gc(),s.gc(),s.ad(20,y,2,1,"ng-container",45),s.ad(21,J,2,0,"ng-template",null,67,s.bd),s.gc(),s.gc(),s.gc()),2&t){const t=e.$implicit,n=e.index,c=e.first,o=s.Nc(22);s.zc("expanded",c),s.Pb(4),s.fd(" Location ",n+1," : (",null==t||null==t.address?null:t.address.title,") "),s.Pb(2),s.gd(" ",null!=t&&null!=t.address&&t.address.addressLine&&null!=t&&null!=t.address&&t.address.cityName?(null==t||null==t.address||null==t.address.jobArea?null:t.address.jobArea.name)+", "+(null==t||null==t.address?null:t.address.addressLine)+", ":(null==t||null==t.address||null==t.address.jobArea?null:t.address.jobArea.name)+", "+(null==t||null==t.address?null:t.address.addressLine)," ",null!=t&&t.address&&null!=t&&null!=t.address&&t.address.cityName&&null!=t&&null!=t.address&&t.address.zipcode?(null==t||null==t.address?null:t.address.cityName)+", ":null==t||null==t.address?null:t.address.cityName," ",null==t||null==t.address?null:t.address.zipcode," "),s.Pb(14),s.zc("ngIf",null==t?null:t.timeSlots)("ngIfElse",o)}}function j(t,e){if(1&t&&(s.fc(0),s.ad(1,S,23,8,"mat-expansion-panel",58),s.ec()),2&t){const t=s.sc();s.Pb(1),s.zc("ngForOf",null==t.activeJob?null:t.activeJob.jobSite)}}function D(t,e){1&t&&(s.hc(0,"div",70),s.cd(1,"No job site found"),s.gc())}function E(t,e){if(1&t){const t=s.ic();s.hc(0,"button",53),s.oc("click",(function(){return s.Qc(t),s.sc().editJobDetail()})),s.cc(1,"img",71),s.hc(2,"span"),s.cd(3,"Edit job details"),s.gc(),s.gc()}}function A(t,e){if(1&t){const t=s.ic();s.hc(0,"button",53),s.oc("click",(function(){s.Qc(t);const e=s.sc();return e.jobApplicant(null==e.activeJob?null:e.activeJob._id)})),s.cc(1,"img",72),s.hc(2,"span"),s.cd(3,"Job applications"),s.gc(),s.gc()}}const I=function(t){return[t]};function k(t,e){if(1&t&&(s.hc(0,"button",73),s.tc(1,"absolutePath"),s.cc(2,"img",74),s.hc(3,"span"),s.cd(4,"Search candidate"),s.gc(),s.gc()),2&t){const t=s.sc();s.zc("routerLink",s.Ec(4,I,s.vc(1,1,"SEARCH_APPLICANT_LIST",null==t.activeJob?null:t.activeJob._id)))}}function z(t,e){if(1&t){const t=s.ic();s.hc(0,"button",75),s.oc("click",(function(){s.Qc(t);const e=s.sc();return e.updateCancelPause(null==e.activeJob?null:e.activeJob._id,0===(null==e.activeJob?null:e.activeJob.totalSignedContract)?e.pauseCanelEnum.CANCEL:e.pauseCanelEnum.PAUSE)})),s.cc(1,"img",76),s.hc(2,"span"),s.cd(3),s.gc(),s.gc()}if(2&t){const t=s.sc();s.Pb(3),s.dd(0===(null==t.activeJob?null:t.activeJob.totalHiredCount)?"Cancel job":"Pause job")}}const L=function(){return{page:1,limit:10}};let N=(()=>{class t{constructor(t,e,n,c){this.route=t,this.jobListService=e,this.router=n,this.utility=c,this.dFormat=i.d,this.experienceType=a.q,this.minEstimate=0,this.maxEstimate=0,this.jobStatus=i.n,this.pauseCanelEnum=a.t,this.jobId=this.route.snapshot.paramMap.get("jobId")}ngOnInit(){this.jobId&&this.fetchJobDetail()}calculateEstimate(){const{workingHours:t,baseSalary:e,jobSite:n}=this.activeJob,c=+t.hours,o=+e.salary;let i=[];n.forEach(t=>{i=[...i,...t.timeSlots.map(t=>{var e;return null!==(e=+t.additionalAllowance.salary)&&void 0!==e?e:0})]});const a=Math.min(...i),l=Math.max(...i);this.minEstimate=c*(o+a)+c*(o+a)*.18,this.maxEstimate=c*(o+l)+c*(o+l)*.18}fetchJobDetail(){this.jobListService.jobDetailRequest(this.jobId).then(t=>{const{data:e}=t;this.activeJob=e,this.calculateEstimate()})}getPayTypeValue(t){var e,n;let c;if(t&&1===t.payForWorker)c=`${(null===(e=null==t?void 0:t.payHourlyRange)||void 0===e?void 0:e.min)||0}-${(null===(n=null==t?void 0:t.payHourlyRange)||void 0===n?void 0:n.max)||0}/hr`;else{const e=null==t?void 0:t.payFixed;c=e?""+e:0}return c}daysBetween(t,e){const n=new Date(t),c=new Date(e);return 1+(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5}editJobDetail(){var t;if(this.activeJob.timeline&&new Date(null===(t=this.activeJob.timeline)||void 0===t?void 0:t.startDate)<=new Date)return void this.utility.showAlert("Cannot edit this job as it has already started.",5e3);const{_id:e=""}=this.activeJob;this.router.navigate([l.JOB_EDIT.fullUrl,e])}jobApplicant(t){this.router.navigate([l.APPLICANT_LIST.fullUrl(t)])}copyJob(t){this.utility.openDialog({message:"Are you sure you want to copy this job?",hideConfirmButton:!0,cancelButtonText:"Close",confirmButtonText:"Yes"}).subscribe(e=>{e&&(this.utility.setJobCopy({jobCopyId:t,isCopyJob:!0}),setTimeout(()=>{this.router.navigate([l.JOB_ADD.fullUrl])},0))})}searchCandidate(t){}updateCancelPause(t,e){let n={message:r.a.data.ARE_YOU_SURE,showTextBox:!0,textBoxType:a.f.PARAGRAPH,textBoxpara:this.pauseCanelEnum.CANCEL===e?r.a.data.CANCEL_CONFIRM:r.a.data.PAUSE_CONFIRM,hideConfirmButton:!0,cancelButtonText:"Close",confirmButtonText:"Yes"};try{this.utility.openDialog(n).subscribe(n=>Object(o.a)(this,void 0,void 0,(function*(){if(n){const n={jobId:t,type:e};(yield this.jobListService.updateCancelPauseJob(n)).data&&(this.utility.showAlert("Status updated successfully !"),this.fetchJobDetail())}})))}catch(c){console.error(c)}}}return t.\u0275fac=function(e){return new(e||t)(s.bc(g.a),s.bc(d.a),s.bc(g.f),s.bc(p.a))},t.\u0275cmp=s.Vb({type:t,selectors:[["app-job-details"]],decls:148,vars:44,consts:[[1,"page_main_wrapper"],[1,"breadcrumbs"],[3,"routerLink","queryParams"],[1,"top_haed"],[1,"left_col"],[1,"id"],[3,"status"],[1,"right_col"],[1,"list_wrapper"],[1,"inner_col"],["src","assets/images/pass.svg","alt",""],[1,"label"],[1,"count"],["src","assets/images/app_user.svg","alt",""],["src","assets/images/hired.svg","alt",""],[1,"morebtn",3,"matMenuTriggerFor"],["src","assets/images/More.svg","alt",""],[1,"inner_wrapper"],[1,"section-header"],[1,"title"],[1,"sec-title"],[1,"row"],[1,"col-md-4"],[1,"info"],[1,"key"],["src","assets/images/Addjob_new.svg","alt",""],[1,"value"],["src","assets/images/Building_Sector.svg","alt",""],["src","assets/images/Vacancy_new.svg","alt",""],["src","assets/icons/currency_icon.svg","alt",""],["src","assets/images/Clock.svg","alt",""],[1,"col-md-12"],["src","assets/images/Skills.svg","alt",""],[1,"skill_wrapper"],["class","skill",4,"ngFor","ngForOf"],["class","skill",4,"ngIf"],["src","assets/icons/Work_Experience.svg","alt",""],["class","skill_wrapper",4,"ngIf","ngIfElse"],["noExp",""],["src","assets/icons/Add_shift.svg","alt",""],[1,"title-sec"],[1,"info-card","content-description","mb-15"],["class","title-sec",4,"ngIf"],["class","info-card content-description",4,"ngIf"],[1,"accordion-wrap"],[4,"ngIf","ngIfElse"],["noJobsite",""],["src","assets/icons/Service_Charge.png","alt",""],[1,"info-row",2,"margin-left","5px"],[2,"background-color","rgb(237, 244, 255)","color","rgb(20, 177, 189)","font-style","italic"],["menu","matMenu"],["type","button","mat-menu-item","",3,"click",4,"ngIf"],["type","button","mat-menu-item","",3,"routerLink",4,"ngIf"],["type","button","mat-menu-item","",3,"click"],["src","assets/images/copy.svg","alt",""],["mat-menu-item","",3,"click",4,"ngIf"],[1,"skill"],[1,"info-card","content-description"],[3,"expanded",4,"ngFor","ngForOf"],[3,"expanded"],[1,"table-wrap"],["summary","timeslot table"],["scope","title"],["scope","start time"],["scope","end time"],["scope","base time"],["scope","additional allowances"],["noTimeslot",""],[4,"ngFor","ngForOf"],[1,"no-timeslot"],[1,"no-jobsite"],["src","assets/images/edit_new.svg","alt",""],["src","assets/images/Applicant.svg","alt",""],["type","button","mat-menu-item","",3,"routerLink"],["src","assets/images/user_new.svg","alt",""],["mat-menu-item","",3,"click"],["src","assets/icons/Close_ic.svg","alt","Delete Icon",2,"margin","0"]],template:function(t,e){if(1&t&&(s.hc(0,"div",0),s.hc(1,"div",1),s.hc(2,"ul"),s.hc(3,"li"),s.hc(4,"a"),s.cd(5," Staffing "),s.gc(),s.gc(),s.hc(6,"li",2),s.tc(7,"absolutePath"),s.hc(8,"a"),s.cd(9,"Jobs "),s.gc(),s.gc(),s.hc(10,"li"),s.cd(11,"Job details"),s.gc(),s.gc(),s.gc(),s.hc(12,"div",3),s.hc(13,"div",4),s.hc(14,"p",5),s.cd(15),s.cc(16,"app-job-status-chip",6),s.gc(),s.gc(),s.hc(17,"div",7),s.hc(18,"div",8),s.hc(19,"div",9),s.cc(20,"img",10),s.hc(21,"p",11),s.cd(22,"Views"),s.gc(),s.hc(23,"h3",12),s.cd(24),s.gc(),s.gc(),s.hc(25,"div",9),s.cc(26,"img",13),s.hc(27,"p",11),s.cd(28,"Applications"),s.gc(),s.hc(29,"h3",12),s.cd(30),s.gc(),s.gc(),s.hc(31,"div",9),s.cc(32,"img",14),s.hc(33,"p",11),s.cd(34,"Hired"),s.gc(),s.hc(35,"h3",12),s.cd(36),s.gc(),s.gc(),s.gc(),s.hc(37,"figure",15),s.cc(38,"img",16),s.gc(),s.gc(),s.gc(),s.hc(39,"div",17),s.hc(40,"div",18),s.hc(41,"h3",19),s.cd(42,"Job details"),s.gc(),s.gc(),s.hc(43,"h4",20),s.cd(44),s.gc(),s.hc(45,"div",21),s.hc(46,"div",22),s.hc(47,"div",23),s.hc(48,"p",24),s.cc(49,"img",25),s.cd(50," Job role "),s.gc(),s.hc(51,"h3",26),s.cd(52),s.gc(),s.gc(),s.gc(),s.hc(53,"div",22),s.hc(54,"div",23),s.hc(55,"p",24),s.cc(56,"img",27),s.cd(57," Business category "),s.gc(),s.hc(58,"h3",26),s.cd(59),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(60,"div",21),s.hc(61,"div",22),s.hc(62,"div",23),s.hc(63,"p",24),s.cc(64,"img",28),s.cd(65," Position (s) "),s.gc(),s.hc(66,"h3",26),s.cd(67),s.gc(),s.gc(),s.gc(),s.hc(68,"div",22),s.hc(69,"div",23),s.hc(70,"p",24),s.cc(71,"img",29),s.cd(72," Base pay "),s.gc(),s.hc(73,"h3",26),s.cd(74),s.tc(75,"customCurrency"),s.gc(),s.gc(),s.gc(),s.hc(76,"div",22),s.hc(77,"div",23),s.hc(78,"p",24),s.cc(79,"img",30),s.cd(80," Duration of Employment "),s.gc(),s.hc(81,"h3",26),s.cd(82),s.tc(83,"customDate"),s.tc(84,"customDate"),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(85,"div",21),s.hc(86,"div",31),s.hc(87,"div",23),s.hc(88,"p",24),s.cc(89,"img",32),s.cd(90," Skills "),s.gc(),s.hc(91,"div",33),s.ad(92,P,2,1,"span",34),s.ad(93,v,2,0,"span",35),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(94,"div",21),s.hc(95,"div",22),s.hc(96,"div",23),s.hc(97,"p",24),s.cc(98,"img",36),s.cd(99," Experience "),s.gc(),s.ad(100,C,3,1,"div",37),s.ad(101,O,2,0,"ng-template",null,38,s.bd),s.gc(),s.gc(),s.hc(103,"div",22),s.hc(104,"div",23),s.hc(105,"p",24),s.cc(106,"img",39),s.cd(107," Minimum engagement "),s.gc(),s.hc(108,"h3",26),s.cd(109),s.gc(),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(110,"div",17),s.hc(111,"h3",40),s.cd(112,"Job description"),s.gc(),s.hc(113,"div",41),s.hc(114,"p"),s.cd(115),s.gc(),s.gc(),s.ad(116,M,2,0,"h3",42),s.ad(117,w,3,1,"div",43),s.gc(),s.hc(118,"div",17),s.hc(119,"div",18),s.hc(120,"h3",19),s.cd(121,"Salary & Schedule"),s.gc(),s.gc(),s.hc(122,"h3",40),s.cd(123,"Location & shifts"),s.gc(),s.hc(124,"div",44),s.hc(125,"mat-accordion"),s.ad(126,j,2,1,"ng-container",45),s.ad(127,D,2,0,"ng-template",null,46,s.bd),s.gc(),s.gc(),s.hc(129,"div",21),s.hc(130,"div",22),s.hc(131,"div",23),s.hc(132,"p",24),s.cc(133,"img",47),s.cd(134," Estimated invoice "),s.gc(),s.hc(135,"div",48),s.hc(136,"p",49),s.cd(137," The estimated total invoice will be provided to you by our consultants. "),s.gc(),s.gc(),s.gc(),s.gc(),s.gc(),s.gc(),s.hc(138,"mat-menu",null,50),s.ad(140,E,4,0,"button",51),s.ad(141,A,4,0,"button",51),s.ad(142,k,5,6,"button",52),s.hc(143,"button",53),s.oc("click",(function(){return e.copyJob(null==e.activeJob?null:e.activeJob._id)})),s.cc(144,"img",54),s.hc(145,"span"),s.cd(146,"Copy job"),s.gc(),s.gc(),s.ad(147,z,4,1,"button",55),s.gc(),s.gc()),2&t){const t=s.Nc(102),n=s.Nc(128),c=s.Nc(139);s.Pb(6),s.zc("routerLink",s.Ec(41,I,s.uc(7,30,"USER_JOB")))("queryParams",s.Dc(43,L)),s.Pb(9),s.ed(" Job Id: ",null==e.activeJob?null:e.activeJob.jobId," "),s.Pb(1),s.zc("status",null==e.activeJob?null:e.activeJob.jobStatus),s.Pb(8),s.ed(" ",(null==e.activeJob?null:e.activeJob.totalVisitedCount)||0," "),s.Pb(6),s.ed(" ",(null==e.activeJob?null:e.activeJob.totalAppliedCount)||0," "),s.Pb(6),s.ed(" ",(null==e.activeJob?null:e.activeJob.totalHiredCount)||0," "),s.Pb(1),s.zc("matMenuTriggerFor",c),s.Pb(7),s.dd(null==e.activeJob?null:e.activeJob.title),s.Pb(8),s.ed(" ",null==e.activeJob||null==e.activeJob.jobRole?null:e.activeJob.jobRole.name," "),s.Pb(7),s.ed(" ",null==e.activeJob||null==e.activeJob.businessCategory?null:e.activeJob.businessCategory.name," "),s.Pb(8),s.dd(null==e.activeJob?null:e.activeJob.vacancies),s.Pb(7),s.ed(" ",s.vc(75,32,null==e.activeJob||null==e.activeJob.baseSalary?null:e.activeJob.baseSalary.salary,2==(null==e.activeJob||null==e.activeJob.baseSalary?null:e.activeJob.baseSalary.currency)?"MALAYSIA":"SINGAPORE")," /hr "),s.Pb(8),s.fd(" ",s.vc(83,35,null==e.activeJob||null==e.activeJob.timeline?null:e.activeJob.timeline.startDate,null==e.dFormat?null:e.dFormat.ONLY_DATE)," to ",s.vc(84,38,null==e.activeJob||null==e.activeJob.timeline?null:e.activeJob.timeline.endDate,null==e.dFormat?null:e.dFormat.ONLY_DATE)," "),s.Pb(10),s.zc("ngForOf",null==e.activeJob?null:e.activeJob.skills),s.Pb(1),s.zc("ngIf",!(null!=e.activeJob&&null!=e.activeJob.skills&&e.activeJob.skills.length)),s.Pb(7),s.zc("ngIf",null==e.activeJob||null==e.activeJob.experience?null:e.activeJob.experience.type)("ngIfElse",t),s.Pb(9),s.fd(" ",null==e.activeJob||null==e.activeJob.workingHours?null:e.activeJob.workingHours.hours," hrs & ",null==e.activeJob||null==e.activeJob.workingHours?null:e.activeJob.workingHours.days," days /person in week "),s.Pb(6),s.dd(null==e.activeJob?null:e.activeJob.description),s.Pb(1),s.zc("ngIf",null==e.activeJob?null:e.activeJob.requirment),s.Pb(1),s.zc("ngIf",null==e.activeJob?null:e.activeJob.requirment),s.Pb(9),s.zc("ngIf",null==e.activeJob?null:e.activeJob.jobSite)("ngIfElse",n),s.Pb(14),s.zc("ngIf",(null==e.activeJob?null:e.activeJob.totalAppliedCount)<=0&&(null==e.activeJob?null:e.activeJob.jobStatus)==e.jobStatus.PUBLISHED||(null==e.activeJob?null:e.activeJob.jobStatus)==(null==e.jobStatus?null:e.jobStatus.DRAFT)),s.Pb(1),s.zc("ngIf",(null==e.activeJob?null:e.activeJob.jobStatus)!==e.jobStatus.DRAFT),s.Pb(1),s.zc("ngIf",(null==e.activeJob?null:e.activeJob.jobStatus)==e.jobStatus.PUBLISHED),s.Pb(5),s.zc("ngIf",(null==e.activeJob?null:e.activeJob.jobStatus)===e.jobStatus.PUBLISHED)}},directives:[g.g,u.a,h.c,c.o,c.p,b.a,h.d,h.a,b.c,b.d,b.e],pipes:[m.a,_.a,f.a],styles:['.page_main_wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#14b1bd;display:inline-block;vertical-align:middle;margin-right:10px}.page_main_wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#969ba0;position:relative}.page_main_wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{position:absolute;content:"/";font-size:18px;color:#969ba0;right:-10px;top:-2px}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width:991px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .left_col[_ngcontent-%COMP%]{width:50%}@media (max-width:991px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .left_col[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .left_col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin-bottom:5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .left_col[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{color:#6e6b6b;font-size:14px;margin-bottom:0}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .left_col[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{height:32px;padding:6px 8px;border-radius:4px;margin-left:10px;font-size:14px;font-family:Lato,sans-serif;font-weight:500;line-height:1.71;color:#ef5279;background-color:#fdf5f7}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]{display:flex;width:50%;align-items:center}@media (max-width:991px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]{width:100%;justify-content:flex-end;margin-bottom:20px}}@media (max-width:576px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;background:#fff;border-radius:4px;margin-left:auto;justify-content:space-between}@media (max-width:576px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]{margin-bottom:20px;width:100%;flex-direction:column}}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]   .inner_col[_ngcontent-%COMP%]{display:flex;align-items:center;padding:6px 10px;justify-content:center}@media (max-width:576px){.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]   .inner_col[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid #eee}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]   .inner_col[_ngcontent-%COMP%]:last-of-type{border-bottom:0}}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]   .inner_col[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#96a5b8;font-size:14px;font-weight:600;margin:0 7px}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .list_wrapper[_ngcontent-%COMP%]   .inner_col[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{color:#000;margin-bottom:0;font-weight:700}.page_main_wrapper[_ngcontent-%COMP%]   .top_haed[_ngcontent-%COMP%]   .right_col[_ngcontent-%COMP%]   .morebtn[_ngcontent-%COMP%]{margin-left:10px;cursor:pointer}.page_main_wrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%]{margin:20px 0;border-radius:6px;box-shadow:0 4px 8px 0 rgba(44,39,56,.04);border:1px solid #dbe2ea;background-color:#fff;padding:15px}.page_main_wrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%]   .sec_wrapper[_ngcontent-%COMP%]{margin-bottom:25px}.page_main_wrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%]   .sec_wrapper.bg_grey[_ngcontent-%COMP%]{padding:24px;border-radius:4px;background-color:#f4f8ff}.page_main_wrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%]   .sec_wrapper.bg_grey[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.page_main_wrapper[_ngcontent-%COMP%]   .inner_wrapper[_ngcontent-%COMP%]   .sec_wrapper.bg_grey[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1.57;color:#231e1e}.info[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.info[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{margin-bottom:5px;color:#96a5b8;font-weight:500;display:flex;align-items:center}.info[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px}.info[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]{height:32px;padding:6px 8px;background-color:#f1f1f1;border-radius:4px;border:1px solid rgba(150,165,184,.2);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:14px;font-weight:500;line-height:1.57;display:flex;align-items:center;margin:0 8px 8px 0;color:#231e1e}.info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;color:#231e1e;margin-bottom:0;padding:0 5px}.skill_wrapper[_ngcontent-%COMP%]{display:flex}.border_bottom[_ngcontent-%COMP%]{border-bottom:1px solid #eee;padding-bottom:20px;margin-bottom:20px}.author[_ngcontent-%COMP%]{color:#6e6b6b;font-size:14px;margin-left:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:0;font-weight:500}  .mat-menu-item{width:100%;display:flex;align-items:center}  .mat-menu-item img{margin-right:10px}.section-header[_ngcontent-%COMP%]{margin-bottom:15px;border-bottom:1px solid #dbe2ea}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:1.4}.sec-title[_ngcontent-%COMP%], .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#231e1e}.sec-title[_ngcontent-%COMP%]{line-height:1.1}.info-card[_ngcontent-%COMP%]{padding:24px;border-radius:6px;background-color:#f4f8ff}.info-card.mb-15[_ngcontent-%COMP%]{margin-bottom:20px}.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-all}.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .title-sec[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1.57;color:#231e1e}.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:25%;color:#96a5b8;white-space:nowrap}.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1.29;text-align:left;padding:25px 0}.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#231e1e;position:relative}.table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{width:100%;height:1px;background:#edf2f6;position:absolute;content:"";left:0;top:0}.accordion-wrap[_ngcontent-%COMP%]{margin-bottom:25px}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#f4f8ff}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:none;border:1px solid #e3edff}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel-header-title{flex-direction:column}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel-header-title label{font-size:12px;font-weight:500;line-height:1.5;color:#6e6b6b}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel-header-title h3{font-size:14px;font-weight:500;line-height:1.71;color:#231e1e;margin-bottom:0}[_nghost-%COMP%]     .inner_wrapper .mat-expansion-panel-header{padding:10px 16px;background-color:#f4f8ff}.curr[_ngcontent-%COMP%]{vertical-align:middle}.filter_col[_ngcontent-%COMP%]{padding:0 15px;width:50%}']}),t})();var T=n("QibW"),R=n("faKS"),F=n("t+th"),Y=n("oEMd"),B=n("gdGC"),H=n("u1Vz");const U=[{path:"",component:N}];let $=(()=>{class t{}return t.\u0275mod=s.Zb({type:t}),t.\u0275inj=s.Yb({factory:function(e){return new(e||t)},providers:[d.a],imports:[[c.c,g.j.forChild(U),T.c,R.a,h.b,b.b,F.a,Y.a,B.a,H.a]]}),t})()},"Kd/A":function(t,e,n){var c,o,i;!function(a){if("object"==typeof t.exports){var l=a(0,e);void 0!==l&&(t.exports=l)}else o=[n,e],void 0===(i="function"==typeof(c=a)?c.apply(e,o):c)||(t.exports=i)}((function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=void 0;e.default=["zh",[["\u4e0a\u5348","\u4e0b\u5348"],n,n],n,[["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"]],n,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]],n,[["\u516c\u5143\u524d","\u516c\u5143"],n,n],0,[6,0],["y/M/d","y\u5e74M\u6708d\u65e5",n,"y\u5e74M\u6708d\u65e5EEEE"],["ah:mm","ah:mm:ss","z ah:mm:ss","zzzz ah:mm:ss"],["{1} {0}",n,n,n],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"CNY","\xa5","\u4eba\u6c11\u5e01",{AUD:["AU$","$"],CNY:["\xa5"],ILR:["ILS"],JPY:["JP\xa5","\xa5"],KRW:["\uffe6","\u20a9"],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",function(t){return 5}]}))},oEMd:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n("fXoL"),o=n("ofXK"),i=n("E0so"),a=n("Kd/A"),l=n.n(a);Object(o.F)(l.a);let r=(()=>{class t{}return t.\u0275mod=c.Zb({type:t}),t.\u0275inj=c.Yb({factory:function(e){return new(e||t)},providers:[o.d,i.a,{provide:c.D,useValue:"zh"}]}),t})()},"t+th":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n("ofXK"),o=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[c.c]]}),t})()},u1Vz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n("ofXK"),o=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},imports:[[c.c]]}),t})()},u9as:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n("fXoL"),o=n("SqtC"),i=n("AzuR"),a=n("N+K7"),l=n("Q+Hy");let r=(()=>{class t{constructor(t,e){this.httpService=t,this.userProfileService=e,this.applicantChageEvent=new c.r,this.filterQuery=new c.r,this.applicantActionEvent=new c.r,this.selectCandidateEvent=new c.r}jobListing(t){return this.httpService.get(i.C,t,{showLoader:!0})}jobDetailRequest(t){return this.httpService.get(`${i.C}/${t}`,{},{showLoader:!0}).toPromise()}deleteJobRequest(t){return this.httpService.delete(`${i.C}/${t.id}`).toPromise()}updateCancelPauseJob(t){return this.httpService.put(i.j,t).toPromise()}jobRoleListing(){return this.httpService.get(i.F,{isClient:!0}).toPromise()}jobSkillListing(){return this.httpService.get(i.G).toPromise()}countryDropDwon(t={}){return this.httpService.get(i.t.DROPDWON_COUNTRY,t).toPromise()}stateDropDwon(t={},e=!1){return this.httpService.get(i.t.DROPDWON_STATE,t).toPromise()}cityDropDwon(t={},e=!1){return this.httpService.get(i.t.DROPDWON_CITY,t).toPromise()}stateCityDropDwon(t={},e=!1){return this.httpService.get(i.E,t).toPromise()}zipDropDwon(t={},e=!1){return this.httpService.get(i.t.DROPDWON_ZIPCODE,t).toPromise()}fetchDropdownMeta(t={},e=!1){return this.httpService.get(i.t.DROPDWON_META,t).toPromise()}getShiftRequest(){return this.httpService.get(i.t.DROPDWON_SHIFT).toPromise()}getCandidateListing(t={}){return this.httpService.get(i.k,t,{showLoader:!0}).toPromise()}getSearchCandidateListing(t={}){return this.httpService.get(i.S,t,{showLoader:!0}).toPromise()}copyJob(t){return this.httpService.post(o.JOBS,{jobId:t},{showLoader:!0}).toPromise()}applicantActionRequest(t){return this.httpService.put(i.a.HIRING+"/actions",t,{showLoader:!0}).toPromise()}getApplicantDetail(t={}){return this.httpService.get(i.a.HIRING+"/candidate/detail",t,{showLoader:!0}).toPromise()}getJobCounts(){return this.httpService.get(""+i.V,{},{showLoader:!0}).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(c.lc(a.a),c.lc(l.a))},t.\u0275prov=c.Xb({token:t,factory:t.\u0275fac}),t})()}}]);