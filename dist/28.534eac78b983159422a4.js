(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"00ok":function(n,t,c){"use strict";c.d(t,"a",(function(){return _}));var e=c("3Pt+"),i=c("0IaG"),a=c("7O6Y"),o=c("/9RH"),l=c("fvtg"),p=c("AzuR"),r=c("fXoL"),s=c("md+p"),g=c("A1CT"),d=c("Q+Hy"),u=c("ofXK"),h=c("kmnG"),f=c("QibW"),m=c("dZWe");function P(n,t){if(1&n&&(r.hc(0,"div",7),r.hc(1,"div",8),r.hc(2,"mat-label"),r.cd(3,"Applied on"),r.gc(),r.hc(4,"mat-radio-group",16),r.hc(5,"mat-radio-button",10),r.cd(6,"Past 24 hours"),r.gc(),r.hc(7,"mat-radio-button",10),r.cd(8,"Past week"),r.gc(),r.hc(9,"mat-radio-button",10),r.cd(10,"Past month"),r.gc(),r.gc(),r.gc(),r.gc()),2&n){const n=r.sc();r.Pb(5),r.zc("value",n.appliedOn.day),r.Pb(2),r.zc("value",n.appliedOn.week),r.Pb(2),r.zc("value",n.appliedOn.month)}}function b(n,t){if(1&n&&(r.hc(0,"div",7),r.hc(1,"div",8),r.hc(2,"mat-label"),r.cd(3,"Overall experience"),r.gc(),r.hc(4,"mat-radio-group",17),r.hc(5,"mat-radio-button",10),r.cd(6,"Upto 2 years"),r.gc(),r.hc(7,"mat-radio-button",10),r.cd(8,"Upto 4 years"),r.gc(),r.hc(9,"mat-radio-button",10),r.cd(10,"Upto 6 years"),r.gc(),r.hc(11,"mat-radio-button",10),r.cd(12,"Above 6 years"),r.gc(),r.gc(),r.gc(),r.gc()),2&n){const n=r.sc();r.Pb(5),r.zc("value",n.experience.two),r.Pb(2),r.zc("value",n.experience.four),r.Pb(2),r.zc("value",n.experience.six),r.Pb(2),r.zc("value",n.experience.aboveSix)}}let _=(()=>{class n{constructor(n,t,c,e,i,a){this.formService=n,this.fb=t,this.dialogRef=c,this.data=e,this.utilityService=i,this.userProfileService=a,this.skillData=[],this.status=o.d,this.appliedOn={day:1,week:2,month:3},this.rating={one:1,two:2,three:3},this.experience={two:2,four:4,six:6,aboveSix:7},this.skillsSearchConfig={url:p.G,isPagination:!0,viewKey:"name",valueKey:"_id",selectedValue:[],selectedViewValue:[],placeholder:"Search skills to select..."},this.stateSearchUrl=p.G,this.stateType=o.p.STATE,this.applicantFilterForm=this.createFilterForm(),this.dialogData=e}get f(){return this.applicantFilterForm.controls}ngOnInit(){var n,t,c;if(this.data){const t={skills:null===(n=this.data)||void 0===n?void 0:n.skills,appliedOn:this.data.appliedOn?+this.data.appliedOn:"",experience:this.data.experience?+this.data.experience:"",rating:this.data.rating?+this.data.rating:""};this.applicantFilterForm.patchValue(Object.assign({},t))}let i,o;this.data.skills&&(i=null===(t=this.utilityService.getSessionStorage(a.z.APPLICANT_FILTER_SKILLS))||void 0===t?void 0:t.selectedValue,o=null===(c=this.utilityService.getSessionStorage(a.z.APPLICANT_FILTER_SKILLS))||void 0===c?void 0:c.selectedViewValue),this.skillsSearchConfig=Object.assign(Object.assign({},this.skillsSearchConfig),{selectedControl:this.applicantFilterForm.get("skills"),control:new e.f(""),selectedValue:i&&i.length?i:[],selectedViewValue:o&&o.length?o:[]})}createFilterForm(){return this.fb.group({skills:[""],appliedOn:[""],rating:[""],experience:[""]})}closeDialog(){try{this.dialogRef.close({type:o.n.DISMISS})}catch(n){}}applyFilter(){try{const n=this.utilityService.formatData(this.applicantFilterForm.value);this.utilityService.setSessionStorage(a.z.APPLICANT_FILTER_SKILLS,JSON.stringify({selectedValue:this.skillsSearchConfig.selectedValue,selectedViewValue:this.skillsSearchConfig.selectedViewValue})),this.dialogRef.close({data:l.a.parse(n),type:o.n.APPLY})}catch(n){}}reset(){try{this.applicantFilterForm.reset(),this.utilityService.clearSessionStorage(a.z.APPLICANT_FILTER_SKILLS);const n=this.utilityService.formatData(this.applicantFilterForm.value);this.dialogRef.close({data:l.a.parse(n),type:o.n.CANCEL})}catch(n){}}}return n.\u0275fac=function(t){return new(t||n)(r.bc(s.a),r.bc(e.e),r.bc(i.g),r.bc(i.a),r.bc(g.a),r.bc(d.a))},n.\u0275cmp=r.Vb({type:n,selectors:[["app-applicant-filter"]],decls:36,vars:8,consts:[[1,"filter_main_wrapper"],[1,"heading"],[1,"close_btn",3,"click"],["src","assets/images/filter_close.svg","alt",""],[3,"formGroup"],[1,"filter_body"],["class","row",4,"ngIf"],[1,"row"],[1,"filter_col"],["aria-labelledby","example-radio-group-label","formControlName","rating",1,"example-radio-group"],[1,"example-radio-button",3,"value"],["src","assets/icons/Rating_Icon.svg","alt","Icon",1,"star-icon"],[1,"app-chip-search-form",3,"searchObject","parant"],[1,"btn_wrap"],[1,"primary-btn",3,"click"],[1,"btn_secondry",3,"click"],["aria-labelledby","example-radio-group-label","formControlName","appliedOn",1,"example-radio-group"],["aria-labelledby","example-radio-group-label","formControlName","experience",1,"example-radio-group"]],template:function(n,t){1&n&&(r.hc(0,"div",0),r.hc(1,"div",1),r.hc(2,"h3"),r.cd(3,"FILTER BY"),r.gc(),r.hc(4,"span",2),r.oc("click",(function(){return t.closeDialog()})),r.cc(5,"img",3),r.gc(),r.gc(),r.hc(6,"form",4),r.hc(7,"div",5),r.ad(8,P,11,3,"div",6),r.hc(9,"div",7),r.hc(10,"div",8),r.hc(11,"mat-label"),r.cd(12,"Rating"),r.gc(),r.hc(13,"mat-radio-group",9),r.hc(14,"mat-radio-button",10),r.cd(15,"3 "),r.cc(16,"img",11),r.cd(17," & above"),r.gc(),r.hc(18,"mat-radio-button",10),r.cd(19,"2 "),r.cc(20,"img",11),r.cd(21," & above"),r.gc(),r.hc(22,"mat-radio-button",10),r.cd(23,"1 "),r.cc(24,"img",11),r.cd(25," & above"),r.gc(),r.gc(),r.cc(26,"ul"),r.gc(),r.gc(),r.ad(27,b,13,4,"div",6),r.hc(28,"div",7),r.hc(29,"div",8),r.cc(30,"app-chip-search-form",12),r.gc(),r.gc(),r.gc(),r.hc(31,"div",13),r.hc(32,"button",14),r.oc("click",(function(){return t.applyFilter()})),r.cd(33,"Apply Filter"),r.gc(),r.hc(34,"button",15),r.oc("click",(function(){return t.reset()})),r.cd(35,"Reset"),r.gc(),r.gc(),r.gc(),r.gc()),2&n&&(r.Pb(6),r.zc("formGroup",t.applicantFilterForm),r.Pb(2),r.zc("ngIf",(null==t.dialogData?null:t.dialogData.status)!==t.status.INVITATION),r.Pb(6),r.zc("value",t.rating.three),r.Pb(4),r.zc("value",t.rating.two),r.Pb(4),r.zc("value",t.rating.one),r.Pb(5),r.zc("ngIf",(null==t.dialogData?null:t.dialogData.status)!==t.status.INVITATION),r.Pb(3),r.zc("searchObject",t.skillsSearchConfig)("parant","skills"))},directives:[e.y,e.s,e.j,u.p,h.g,f.b,e.r,e.h,f.a,m.a],styles:[".filter_main_wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{background:hsla(0,0%,93.3%,.9333333333333333);padding:15px;display:flex;align-items:center;justify-content:space-between}.filter_main_wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:0;font-weight:600}.filter_main_wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .close_btn[_ngcontent-%COMP%]{cursor:pointer}.filter_main_wrapper[_ngcontent-%COMP%]   .filter_body[_ngcontent-%COMP%]{max-height:calc(100vh - 137px);overflow-y:auto;padding:15px}.filter_main_wrapper[_ngcontent-%COMP%]   .slider_wrapper[_ngcontent-%COMP%]{border:1px solid #eee;border-radius:7px;padding:20px 15px}.filter_main_wrapper[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:15px 17px;border-top:1px solid hsla(0,0%,83.9%,.5)}.filter_main_wrapper[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:calc(50% - 5px);height:48px;font-size:14px;font-weight:500}.filter_main_wrapper[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-left:0}.filter_main_wrapper[_ngcontent-%COMP%]   .btn_wrap[_ngcontent-%COMP%]   .btn_secondry[_ngcontent-%COMP%]{border:1.5px solid rgba(150,165,184,.5);color:#14b1bd}[_nghost-%COMP%]     .filter_body .app-chip-search-form, [_nghost-%COMP%]     .filter_body .app-chip-search-form .add_skill_wrapper{width:100%}[_nghost-%COMP%]     .filter_body .mat-checkbox{margin-bottom:20px;display:block}[_nghost-%COMP%]     .filter_body mat-label{margin-bottom:20px;display:block;width:100%}[_nghost-%COMP%]     .filter_body .ngx-slider .ngx-slider-pointer{background-color:#14b1bd}[_nghost-%COMP%]     .filter_body .ngx-slider .ngx-slider-selection{background:#14b1bd}[_nghost-%COMP%]     .filter_body .ngx-slider .ngx-slider-bubble{color:#fff;background:#6e6b6b;font-size:12px;font-family:Lato,sans-serif;margin-bottom:6px;border-radius:4px}[_nghost-%COMP%]     .filter_body .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#fff}[_nghost-%COMP%]     .filter_body mat-accordion .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:transparent}[_nghost-%COMP%]     .filter_body mat-accordion .mat-expansion-panel-header-description, [_nghost-%COMP%]     .filter_body mat-accordion .mat-expansion-panel-header-title{margin-right:0}[_nghost-%COMP%]     .filter_body mat-accordion mat-label{margin-bottom:0}[_nghost-%COMP%]     .filter_body mat-accordion .mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 0 3px rgba(0,0,0,.21)}.row[_ngcontent-%COMP%]{margin-bottom:15px;border-bottom:1px solid #eee;padding-bottom:15px}.row[_ngcontent-%COMP%]:last-of-type{margin-bottom:0;border-bottom:0}.row[_ngcontent-%COMP%]   .filter_col[_ngcontent-%COMP%]{padding:0 15px;width:100%}.fix_height[_ngcontent-%COMP%]{min-height:232px}.star-icon[_ngcontent-%COMP%]{position:relative;top:3px}"]}),n})()},"1CcF":function(n,t,c){"use strict";c.d(t,"a",(function(){return h}));var e=c("ofXK"),i=c("STbY"),a=c("bSwM"),o=c("Qu3c"),l=c("gdGC"),p=c("+RAp"),r=c("ZtdD"),s=c("1V3g"),g=c("fXoL");const d=[i.b,a.b,o.b],u=[l.a];let h=(()=>{class n{}return n.\u0275mod=g.Zb({type:n}),n.\u0275inj=g.Yb({factory:function(t){return new(t||n)},imports:[[e.c,...d,...u,p.a,r.a,s.a]]}),n})()},lHGR:function(n,t,c){"use strict";c.d(t,"a",(function(){return H}));var e=c("mrSG"),i=c("fXoL"),a=c("7O6Y"),o=c("/9RH"),l=c("prAM"),p=c("2Mrr"),r=c("tyNb"),s=c("A1CT"),g=c("0IaG"),d=c("ofXK"),u=c("Qu3c"),h=c("STbY"),f=c("bSwM");function m(n,t){1&n&&(i.fc(0),i.hc(1,"figure",2),i.cc(2,"img",3),i.gc(),i.hc(3,"span"),i.cd(4,"Early"),i.gc(),i.ec())}function P(n,t){1&n&&(i.fc(0),i.hc(1,"figure",2),i.cc(2,"img",4),i.gc(),i.hc(3,"span"),i.cd(4,"Night"),i.gc(),i.ec())}function b(n,t){1&n&&(i.fc(0),i.hc(1,"figure",2),i.cc(2,"img",5),i.gc(),i.hc(3,"span"),i.cd(4,"Day"),i.gc(),i.ec())}function _(n,t){1&n&&(i.fc(0),i.hc(1,"figure",2),i.cc(2,"img",6),i.gc(),i.hc(3,"span"),i.cd(4,"All"),i.gc(),i.ec())}let C=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Vb({type:n,selectors:[["app-time-preference"]],inputs:{dayName:"dayName"},decls:5,vars:5,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"time-preference-icon"],["src","assets/icons/Early-Shift-icon.svg","alt","Icon"],["src","assets/icons/Night-Shift-icon.svg","alt","Icon"],["src","assets/icons/Day-Shift-icon.svg","alt","Icon"],["src","assets/icons/Group.svg","alt","Icon"]],template:function(n,t){1&n&&(i.fc(0,0),i.ad(1,m,5,0,"ng-container",1),i.ad(2,P,5,0,"ng-container",1),i.ad(3,b,5,0,"ng-container",1),i.ad(4,_,5,0,"ng-container",1),i.ec()),2&n&&(i.zc("ngSwitch",t.dayName),i.Pb(1),i.zc("ngSwitchCase","early"),i.Pb(1),i.zc("ngSwitchCase","night"),i.Pb(1),i.zc("ngSwitchCase","day"),i.Pb(1),i.zc("ngSwitchCase","all"))},directives:[d.r,d.s],styles:["p[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:18px;color:#231e1e;margin-bottom:5px}img[_ngcontent-%COMP%]{height:auto;display:block}span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:18px;color:#666}.time-preference-icon[_ngcontent-%COMP%]{height:20px}"]}),n})(),O=(()=>{class n{transform(n,...t){let c=n.slice(2,n.length);return c=c.map(n=>n.name),c.join(" , ")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=i.ac({name:"skillsTooltip",type:n,pure:!0}),n})();function x(n,t){1&n&&(i.hc(0,"span",25),i.cd(1,"Previously hired"),i.gc())}function M(n,t){if(1&n&&(i.hc(0,"div",26),i.cc(1,"img",27),i.hc(2,"p"),i.hc(3,"span"),i.cd(4),i.gc(),i.cd(5),i.gc(),i.gc()),2&n){const n=i.sc();i.Pb(4),i.ed("",""+(null==n.applicant||null==n.applicant.rating?null:n.applicant.rating.avgRating)," "),i.Pb(1),i.ed(" (",""+(null==n.applicant||null==n.applicant.rating?null:n.applicant.rating.totalRatings)," reviews) ")}}function w(n,t){if(1&n&&(i.hc(0,"li"),i.cd(1),i.gc()),2&n){const n=t.$implicit;i.Pb(1),i.ed(" ",null==n?null:n.name," ")}}function v(n,t){if(1&n&&(i.hc(0,"li",28),i.tc(1,"skillsTooltip"),i.hc(2,"a"),i.cd(3),i.gc(),i.gc()),2&n){const n=i.sc();i.zc("matTooltip",i.uc(1,2,null==n.applicant||null==n.applicant.skillsAndExperience?null:n.applicant.skillsAndExperience.skills)),i.Pb(3),i.ed("+",(null==n.applicant||null==n.applicant.skillsAndExperience?null:n.applicant.skillsAndExperience.skills.length)-2,"")}}function S(n,t){if(1&n){const n=i.ic();i.fc(0),i.hc(1,"a",29),i.cc(2,"img",30),i.gc(),i.hc(3,"mat-menu",31,32),i.hc(5,"button",33),i.oc("click",(function(){return i.Qc(n),i.sc().viewApplicantDetails()})),i.cc(6,"img",34),i.cd(7,"View details "),i.gc(),i.hc(8,"button",33),i.oc("click",(function(){return i.Qc(n),i.sc().downloadResume()})),i.cc(9,"img",35),i.cd(10,"Download resume "),i.gc(),i.hc(11,"button",33),i.oc("click",(function(){return i.Qc(n),i.sc().reportCandidate()})),i.cc(12,"img",36),i.cd(13,"Report candidate "),i.gc(),i.gc(),i.ec()}if(2&n){const n=i.Nc(4);i.Pb(1),i.zc("matMenuTriggerFor",n)}}function y(n,t){if(1&n){const n=i.ic();i.hc(0,"mat-checkbox",38),i.oc("change",(function(t){return i.Qc(n),i.sc(2).handleCheckbox(t)})),i.gc()}if(2&n){const n=i.sc(2);i.zc("checked",n.isChecked())}}function k(n,t){if(1&n&&(i.fc(0),i.ad(1,y,1,1,"mat-checkbox",37),i.ec()),2&n){const n=i.sc();i.Pb(1),i.zc("ngIf",!n.applicant.isInviteSend)}}function A(n,t){if(1&n&&(i.hc(0,"li"),i.cd(1),i.gc()),2&n){const n=i.sc();i.Pb(1),i.ed(" ",null==n.applicant?null:n.applicant.jobCategories[0].name," ")}}function T(n,t){if(1&n&&(i.hc(0,"li"),i.cd(1),i.gc()),2&n){const n=i.sc();i.Pb(1),i.ed(" ",null==n.applicant||null==n.applicant.jobCategories[1]?null:n.applicant.jobCategories[1].name," ")}}function I(n,t){if(1&n&&(i.hc(0,"li",28),i.tc(1,"skillsTooltip"),i.hc(2,"a"),i.cd(3),i.gc(),i.gc()),2&n){const n=i.sc();i.zc("matTooltip",i.uc(1,2,null==n.applicant?null:n.applicant.jobCategories)),i.Pb(3),i.ed("+",(null==n.applicant||null==n.applicant.jobCategories?null:n.applicant.jobCategories.length)-2,"")}}function z(n,t){if(1&n&&(i.hc(0,"li"),i.cd(1),i.gc()),2&n){const n=i.sc();i.Pb(1),i.ed(" ",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.location[0]?null:n.applicant.locationAndTimeSlot.location[0].name," ")}}function j(n,t){if(1&n&&(i.hc(0,"li"),i.cd(1),i.gc()),2&n){const n=i.sc();i.Pb(1),i.ed(" ",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.location[1]?null:n.applicant.locationAndTimeSlot.location[1].name," ")}}function F(n,t){if(1&n&&(i.hc(0,"li",28),i.tc(1,"skillsTooltip"),i.hc(2,"a"),i.cd(3),i.gc(),i.gc()),2&n){const n=i.sc();i.zc("matTooltip",i.uc(1,2,null==n.applicant||null==n.applicant.locationAndTimeSlot?null:n.applicant.locationAndTimeSlot.location)),i.Pb(3),i.ed("+",(null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.location?null:n.applicant.locationAndTimeSlot.location.length)-2,"")}}function D(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Mon"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.mon)}}function N(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Tue"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.tue)}}function L(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Wed"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.wed)}}function R(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Thu"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.thu)}}function E(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Fri"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.fri)}}function V(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Sat"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.sat)}}function G(n,t){if(1&n&&(i.hc(0,"div",43),i.hc(1,"p"),i.cd(2,"Sun"),i.gc(),i.cc(3,"app-time-preference",44),i.gc()),2&n){const n=i.sc(2);i.Pb(3),i.zc("dayName",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.sun)}}function K(n,t){if(1&n&&(i.hc(0,"div",3),i.hc(1,"div",13),i.cc(2,"img",39),i.hc(3,"h3"),i.cd(4,"Time preferences"),i.gc(),i.gc(),i.hc(5,"div",40),i.hc(6,"div",41),i.ad(7,D,4,1,"div",42),i.ad(8,N,4,1,"div",42),i.ad(9,L,4,1,"div",42),i.ad(10,R,4,1,"div",42),i.ad(11,E,4,1,"div",42),i.ad(12,V,4,1,"div",42),i.ad(13,G,4,1,"div",42),i.gc(),i.gc(),i.gc()),2&n){const n=i.sc();i.Pb(7),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.mon),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.tue),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.wed),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.thu),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.fri),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.sat),i.Pb(1),i.zc("ngIf",null==n.applicant||null==n.applicant.locationAndTimeSlot||null==n.applicant.locationAndTimeSlot.slots?null:n.applicant.locationAndTimeSlot.slots.sun)}}function Q(n,t){if(1&n){const n=i.ic();i.hc(0,"a",48),i.oc("click",(function(){i.Qc(n);const t=i.sc(2);return t.openJobOfferPopup.emit({applicant:t.applicant,previousState:"MAKE_AN_OFFER"})})),i.cd(1,"Make an offer"),i.gc()}}function J(n,t){if(1&n){const n=i.ic();i.hc(0,"a",48),i.oc("click",(function(){return i.Qc(n),i.sc(2).emitInvitePopupEvent()})),i.cd(1,"Invite candidate"),i.gc()}}function X(n,t){1&n&&(i.hc(0,"a",49),i.cd(1,"Invite Sent"),i.gc())}function Y(n,t){if(1&n&&(i.hc(0,"div",45),i.hc(1,"div",13),i.cc(2,"h3"),i.gc(),i.ad(3,Q,2,0,"a",46),i.ad(4,J,2,0,"a",46),i.ad(5,X,2,0,"a",47),i.gc()),2&n){const n=i.sc();i.Pb(3),i.zc("ngIf",(null==n.jobDetails?null:n.jobDetails.jobStatus)!==(null==n.jobStatus?null:n.jobStatus.DRAFT)&&(null==n.jobDetails?null:n.jobDetails.jobStatus)!==n.jobStatus.COMPLETED),i.Pb(1),i.zc("ngIf",!n.applicant.isInviteSend&&!n.hideActions),i.Pb(1),i.zc("ngIf",n.applicant.isInviteSend&&!n.hideActions)}}let H=(()=>{class n{constructor(n,t,c,e){this.appplicantService=n,this.router=t,this.utility=c,this.dialog=e,this.applicant=null,this.ids=[],this.jobStatus=a.n,this.openJobOfferPopup=new i.r,this.updateCount=new i.r,this.changeStatus=new i.r,this.routeToDetails=new i.r,this.invitePopup=new i.r,this.hideActions=!1,this.addRemove=new i.r,this.refreshList=new i.r,this.dFormat=a.d,this.candidateStatus=o.d,this.showCheckbox=!1,this.checked=!1,this.pauseCancelEnum=o.t}set applicantSet(n){this.applicant=n}set showSelection(n){this.showCheckbox=n}set selectedIds(n){this.ids=[...n]}isChecked(){return-1!=this.ids.indexOf(this.applicant._id)}ngOnInit(){}changeStatusEmit(n){return Object(e.a)(this,void 0,void 0,(function*(){this.changeStatus.emit({ids:[this.applicant._id],status:n,previousState:this.candidateStatus.APPLIED,jobId:this.jobDetails._id})}))}handleCheckbox(n){this.addRemove.emit(n.checked)}viewApplicantDetails(){this.routeToDetails.emit({applicantId:this.applicant._id})}emitInvitePopupEvent(){this.invitePopup.emit({})}downloadResume(){var n,t;console.log(this.applicant),(null===(n=this.applicant)||void 0===n?void 0:n.resume)?window.open(null===(t=this.applicant)||void 0===t?void 0:t.resume):this.utility.showAlert("Resume not available.")}reportCandidate(){this.dialog.open(l.a,{disableClose:!0,autoFocus:!1,restoreFocus:!1,data:{applicant:this.applicant}}).afterClosed().subscribe(n=>{})}}return n.\u0275fac=function(t){return new(t||n)(i.bc(p.a),i.bc(r.f),i.bc(s.a),i.bc(g.b))},n.\u0275cmp=i.Vb({type:n,selectors:[["app-search-applicant-card"]],inputs:{hideActions:"hideActions",applicantSet:"applicantSet",showSelection:"showSelection",selectedIds:"selectedIds",jobDetails:"jobDetails"},outputs:{openJobOfferPopup:"openJobOfferPopup",updateCount:"updateCount",changeStatus:"changeStatus",routeToDetails:"routeToDetails",invitePopup:"invitePopup",addRemove:"addRemove",refreshList:"refreshList"},decls:48,vars:20,consts:[[1,"applicant-card"],[1,"applicant-inner"],[1,"flex-row","pb-15"],[1,"col-4"],[1,"user-info-wrap"],[1,"user-pic"],["onerror","this.src='assets/icons/placeholder.svg'","alt","User Image",3,"src"],[1,"user-basic-details"],[1,"user-top-info"],[1,"link",3,"click"],["class","status-wrap",4,"ngIf"],[1,"exp-rating-wrap"],["class","rating-wrap",4,"ngIf"],[1,"title-wrap"],["src","assets/icons/ic_Skills.svg","alt","Skills Icon"],[1,"skills-listing"],[4,"ngFor","ngForOf"],[3,"matTooltip",4,"ngIf"],[1,"top-head"],["src","assets/icons/Add_Job.svg","alt","Skills Icon"],[4,"ngIf"],[1,"flex-row"],["src","assets/icons/location_icon.svg","alt","Skills Icon"],["class","col-4",4,"ngIf"],["class","col-4 contract-text",4,"ngIf"],[1,"status-wrap"],[1,"rating-wrap"],["src","assets/icons/start_icon.svg","alt","Start Icon"],[3,"matTooltip"],[3,"matMenuTriggerFor"],["src","assets/icons/more-icon.svg","alt","Icon"],["yPosition","below"],["belowMenu","matMenu"],["mat-menu-item","",3,"click"],["src","assets/icons/ic_users.svg","alt","Icon"],["src","assets/icons/download-ic-dark.svg","alt","Icon"],["src","assets/icons/Warning_icon_dark.svg","alt","Icon"],["class","example-margin",3,"checked","change",4,"ngIf"],[1,"example-margin",3,"checked","change"],["src","assets/icons/Clock.svg","alt","Skills Icon"],[1,"time-preference-wrap"],[1,"time-preference-listing"],["class","time-preference-item",4,"ngIf"],[1,"time-preference-item"],[3,"dayName"],[1,"col-4","contract-text"],[3,"click",4,"ngIf"],["style","text-decoration: none",4,"ngIf"],[3,"click"],[2,"text-decoration","none"]],template:function(n,t){1&n&&(i.hc(0,"div",0),i.hc(1,"div",1),i.hc(2,"div",2),i.hc(3,"div",3),i.hc(4,"div",4),i.hc(5,"div",5),i.hc(6,"figure"),i.cc(7,"img",6),i.gc(),i.gc(),i.hc(8,"div",7),i.hc(9,"div",8),i.hc(10,"h3",9),i.oc("click",(function(){return t.viewApplicantDetails()})),i.cd(11),i.gc(),i.ad(12,x,2,0,"span",10),i.gc(),i.hc(13,"div",11),i.ad(14,M,6,2,"div",12),i.gc(),i.gc(),i.gc(),i.gc(),i.hc(15,"div",3),i.hc(16,"div",13),i.cc(17,"img",14),i.hc(18,"h3"),i.cd(19,"Skills"),i.gc(),i.gc(),i.hc(20,"ul",15),i.ad(21,w,2,1,"li",16),i.tc(22,"slice"),i.ad(23,v,4,4,"li",17),i.gc(),i.gc(),i.hc(24,"div",3),i.hc(25,"div",18),i.hc(26,"div",13),i.cc(27,"img",19),i.hc(28,"h3"),i.cd(29,"Preferred job roles"),i.gc(),i.gc(),i.ad(30,S,14,1,"ng-container",20),i.ad(31,k,2,1,"ng-container",20),i.gc(),i.hc(32,"ul",15),i.ad(33,A,2,1,"li",20),i.ad(34,T,2,1,"li",20),i.ad(35,I,4,4,"li",17),i.gc(),i.gc(),i.gc(),i.hc(36,"div",21),i.hc(37,"div",3),i.hc(38,"div",13),i.cc(39,"img",22),i.hc(40,"h3"),i.cd(41,"Preferred job area"),i.gc(),i.gc(),i.hc(42,"ul",15),i.ad(43,z,2,1,"li",20),i.ad(44,j,2,1,"li",20),i.ad(45,F,4,4,"li",17),i.gc(),i.gc(),i.ad(46,K,14,7,"div",23),i.ad(47,Y,6,3,"div",24),i.gc(),i.gc(),i.gc()),2&n&&(i.Pb(7),i.zc("src",null!=t.applicant&&t.applicant.profilePicture?null==t.applicant?null:t.applicant.profilePicture:"assets/icons/placeholder.svg",i.Tc),i.Pb(4),i.dd(null==t.applicant?null:t.applicant.fullName),i.Pb(1),i.zc("ngIf",null==t.applicant?null:t.applicant.isPreviouslyHired),i.Pb(2),i.zc("ngIf",null==t.applicant?null:t.applicant.rating),i.Pb(7),i.zc("ngForOf",i.wc(22,16,null==t.applicant||null==t.applicant.skillsAndExperience?null:t.applicant.skillsAndExperience.skills,0,2)),i.Pb(2),i.zc("ngIf",(null==t.applicant||null==t.applicant.skillsAndExperience?null:t.applicant.skillsAndExperience.skills.length)-2>0),i.Pb(7),i.zc("ngIf",!t.showCheckbox),i.Pb(1),i.zc("ngIf",t.showCheckbox),i.Pb(2),i.zc("ngIf",(null==t.applicant||null==t.applicant.jobCategories?null:t.applicant.jobCategories.length)>0),i.Pb(1),i.zc("ngIf",(null==t.applicant||null==t.applicant.jobCategories?null:t.applicant.jobCategories.length)>1),i.Pb(1),i.zc("ngIf",(null==t.applicant||null==t.applicant.jobCategories?null:t.applicant.jobCategories.length)>2),i.Pb(8),i.zc("ngIf",(null==t.applicant||null==t.applicant.locationAndTimeSlot||null==t.applicant.locationAndTimeSlot.location?null:t.applicant.locationAndTimeSlot.location.length)>0),i.Pb(1),i.zc("ngIf",(null==t.applicant||null==t.applicant.locationAndTimeSlot||null==t.applicant.locationAndTimeSlot.location?null:t.applicant.locationAndTimeSlot.location.length)>1),i.Pb(1),i.zc("ngIf",(null==t.applicant||null==t.applicant.locationAndTimeSlot||null==t.applicant.locationAndTimeSlot.location?null:t.applicant.locationAndTimeSlot.location.length)>2),i.Pb(1),i.zc("ngIf",!t.showCheckbox),i.Pb(1),i.zc("ngIf",!t.showCheckbox))},directives:[d.p,d.o,u.a,h.c,h.d,h.a,f.a,C],pipes:[d.x,O],styles:[".applicant-card[_ngcontent-%COMP%]{padding:24px 24px 16px;border-radius:10px;border:1px solid #dbe2ea;background-color:#fff;margin-bottom:10px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]{margin-bottom:15px}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .applied-date[_ngcontent-%COMP%]{text-align:right}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .applied-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:500;line-height:1.5;color:#96a5b8}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{width:calc(100% - 32px);display:flex;align-items:center;margin-bottom:10px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{margin-bottom:0;margin-right:auto}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{height:22px;font-size:14px;font-weight:500;line-height:1.57;color:#96a5b8;margin:0 0 0 5px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{margin:0 auto 0 3px;font-size:13px}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;margin:0 -15px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{padding-bottom:0}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{width:33.33%;flex:0 33.33%;padding:0 15px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{max-width:100%;flex:0 100%}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%]{width:66.66%;flex:0 66.66%;padding:0 15px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%]{max-width:100%;flex:0 100%}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .skills-listing[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .skills-listing[_ngcontent-%COMP%]{justify-content:space-between;margin:10px 0 15px}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .skills-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:32px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:6px 8px;border-radius:4px;background-color:#f1f1f1;font-size:14px;font-weight:500;line-height:1.29;color:#231e1e;margin:0 6px 6px 0}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .skills-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;padding:4px 6px;font-size:13px}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .skills-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:1.29;color:#14b1bd}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:flex-end;margin:0 -10px;position:relative;top:35px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]{justify-content:space-between;margin-bottom:5px}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 10px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0}}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#14b1bd}.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.not-suitable[_ngcontent-%COMP%]{color:#f44336}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .applicant-inner[_ngcontent-%COMP%]   .bottom-action[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}}.applicant-card[_ngcontent-%COMP%]   .top-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .top-head[_ngcontent-%COMP%]{justify-content:inherit}}.applicant-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;color:#231e1e}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{margin:8px 0;font-size:14px}}.applicant-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:5px;height:5px;margin:0 10px;border-radius:50%;background-color:#c4c4c4;display:inline-block}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]{flex-direction:column}}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]{width:56px;height:56px}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;overflow:hidden}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center center}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]{width:calc(100% - 56px);padding-left:15px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]{padding-left:0;width:100%}}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 0 10px}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]{justify-content:center}}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#000;margin:0 10px 0 0}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:8px 0;font-size:16px}}.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%]{height:28px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:6px 8px;border-radius:4px;background-color:#edf4ff;font-size:12px;font-weight:500;line-height:1.5;color:#14b1bd}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .user-info-wrap[_ngcontent-%COMP%]   .user-basic-details[_ngcontent-%COMP%]   .user-top-info[_ngcontent-%COMP%]   .status-wrap[_ngcontent-%COMP%]{height:25px;padding:5px 7px}}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:5px;height:5px;margin:0 10px;border-radius:50%;background-color:#c4c4c4;display:inline-block}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .exp-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0;font-size:14px;font-weight:500;line-height:1.57;color:#6e6b6b}@media (max-width:767px){.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .exp-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .rating-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .rating-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#858585;margin:0}.applicant-card[_ngcontent-%COMP%]   .exp-rating-wrap[_ngcontent-%COMP%]   .rating-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:700;line-height:1.5;color:#231e1e}.applicant-card[_ngcontent-%COMP%]   .pb-15[_ngcontent-%COMP%]{padding-bottom:20px}.contract-text[_ngcontent-%COMP%]{text-align:right}.contract-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#14b1bd;margin-left:15px;text-decoration:underline}@media (max-width:767px){.contract-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}}.time-preference-listing[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 -5px}.time-preference-listing[_ngcontent-%COMP%]   .time-preference-item[_ngcontent-%COMP%]{padding:0 8px}.time-preference-listing[_ngcontent-%COMP%]   .time-preference-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:18px;color:#231e1e;margin-bottom:5px}.time-preference-listing[_ngcontent-%COMP%]   .time-preference-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;display:block}.time-preference-listing[_ngcontent-%COMP%]   .time-preference-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:18px;color:#666}.link[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),n})()},u1Vz:function(n,t,c){"use strict";c.d(t,"a",(function(){return a}));var e=c("ofXK"),i=c("fXoL");let a=(()=>{class n{}return n.\u0275mod=i.Zb({type:n}),n.\u0275inj=i.Yb({factory:function(t){return new(t||n)},imports:[[e.c]]}),n})()}}]);