(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/0p2":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("RliZ");const o=(t,e)=>{switch(e){case"LOWER":return t.toLocaleLowerCase();case"UPPER":return t.toLocaleUpperCase();case"TITLE":return Object(r.g)(t);case"SENTENCE":return a(t);default:return t}},a=t=>t.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,(function(t){return t.toUpperCase()}))},"3V+5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("ofXK"),o=n("3Pt+"),a=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=a.Zb({type:t}),t.\u0275inj=a.Yb({factory:function(e){return new(e||t)},providers:[],imports:[[r.c,o.w]]}),t})()},AgBJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL");let o=(()=>{class t{transform(t,e){return e.reduce((t,e)=>t.get(""+e),t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.ac({name:"getControl",type:t,pure:!0}),t})()},E0so:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("/9RH"),o=n("ofXK"),a=n("fXoL"),i=n("A1CT");let c=(()=>{class t{constructor(t,e){this.utilService=t,this.currencyPipe=e}transform(t,e,n="symbol",a="1.2-2",i="zh"){let c=r.h[null!=e?e:this.utilService.currentCountry.name.toUpperCase()];t%1==0&&(a="1.0-0");let s=Object(o.A)(t,i,Object(o.C)(c,"narrow"),c,a);return c===r.h.SINGAPORE&&(s="S"+s),s=s.split(""),s.splice(2,0," "),s=s.join(""),s}}return t.\u0275fac=function(e){return new(e||t)(a.bc(i.a),a.bc(o.d))},t.\u0275pipe=a.ac({name:"customCurrency",type:t,pure:!0}),t})()},IEde:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("RVMx"),o=n("Qxun"),a=n("AytR"),i=n("KMnQ"),c=n("/0p2"),s=n("E0so"),l=n("fXoL"),g=n("A1CT");let p=(()=>{class t{constructor(t){this.utilService=t,this.formData=r.a.data.FORM,this.currentLanguage=localStorage.getItem(a.a.languageKey)}transform(t,e,n=""){return t&&t.errors?this.getValidationError(t,e,n):""}getValidationError(t,e,n){const o=new s.a(this.utilService);let a=this.currentLanguage&&this.currentLanguage!=i.a.ENGLISH.value?r.a.data[e]:Object(c.a)(r.a.data[e],"SENTENCE");if("UEN"==e&&(a=r.a.data[e]),"Salary"==a&&t.hasError("min"))return this.formData.MIN_SALARY_ERROR.replace("$control$",a).replace("$min$",o.transform(t.errors.min.min));if(t.hasError("required"))return n?this.formData[n].replace("$control$",a):this.formData.REQUIRED_ERROR.replace("$control$",a);if(t.hasError("pattern"))return this.getPatternErrors(t.errors.pattern.requiredPattern,e,a);if(t.hasError("minlength"))return this.formData.MIN_LENGTH_ERROR.replace("$control$",a).replace("$minLength$",t.errors.minlength.requiredLength);if(t.hasError("maxlength"))return this.formData.MAX_LENGTH_ERROR.replace("$control$",a).replace("$maxLength$",t.errors.maxlength.requiredLength);if(t.hasError("max"))return this.formData.MAX_ERROR.replace("$control$",a).replace("$max$",t.errors.max.max);if(t.hasError("min"))return this.formData.MIN_ERROR.replace("$control$",a).replace("$min$",t.errors.min.min);if(t.hasError("matchPassword"))return this.formData.PASSWORD_MISMATCH.replace("$control$",a).replace("$password$",r.a.data.PASSWORD);if(t.hasError("mustMatch"))return this.formData.PASSWORD_MISMATCH.replace("$control$",a).replace("$password$",r.a.data.PASSWORD);if(t.hasError("lengthMatch")){const e=t.getError("lengthMatch");return this.formData.MATCH_LENGTH.replace("$control$",a).replace("$unit$",e.unit).replace("$requiredLength$",e.requiredLength)}return t.hasError("emailExist")?(console.log(t),t.getError("emailExist"),r.a.data.INVITATION_ALREADY_SENT):t.hasError("emailAlreadyAdded")?(console.log(t),t.getError("emailAlreadyAdded"),r.a.data.EMAIL_ALREADY_ADDED):void 0}getPatternErrors(t,e,n){let a,i=r.a.data[e];return t==o.a.email?a="EMAIL":t==o.a.password?(a="PASSWORD",i=n):t==o.a.name?(a="NAME",i=n):t==o.a.phone?(a="PHONE",i=n):t==o.a.price?(a="PRICE",i=n):t==o.a.passRegex?(a="PASSWORD_RULE",i=n):t==o.a.url?(a="COMPANY_WEBSITE",i=n):t==o.a.alphaNumeric&&(a="ZIP_CODE",i=n),this.formData.PATTERN_ERRORS[a].replace("$control$",i)}}return t.\u0275fac=function(e){return new(e||t)(l.bc(g.a))},t.\u0275pipe=l.ac({name:"validate",type:t,pure:!1}),t})()},Qxun:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,password:/^[^\s]+$/,name:/(.|\s)*\S(.|\s)*/,phone:"^[0-9]+$",price:/(^[0][1-9]+)|([1-9]\d*)+$/,positiveNumber:/^[1-9][0-9]*$/,passRegex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,alphaNumeric:/^[a-zA-Z0-9]*$/,url:/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,removeHTML:/<[^>]*>/g}},TInF:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("fXoL"),o=n("ofXK"),a=n("wZkO"),i=n("tyNb");function c(t,e){if(1&t){const t=r.ic();r.hc(0,"a",3,4),r.oc("click",(function(){r.Qc(t);const n=e.$implicit;return r.sc().onClick(n)})),r.hc(2,"span"),r.cd(3),r.gc(),r.hc(4,"span",5),r.cd(5),r.gc(),r.gc()}if(2&t){const t=e.$implicit,n=r.Nc(1);r.zc("routerLink",null==t?null:t.link)("active",n.isActive),r.Pb(3),r.ed("",null==t?null:t.label," "),r.Pb(2),r.dd(null==t?null:t.badge)}}const s=function(t){return{big:t}};let l=(()=>{class t{constructor(){this.tabClicked=new r.r}set tabs(t){this.headerTabs=t}ngOnInit(){}onClick(t){this.tabClicked.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Vb({type:t,selectors:[["app-tabs"]],inputs:{tabInfo:"tabInfo",big:"big",tabs:"tabs"},outputs:{tabClicked:"tabClicked"},decls:3,vars:4,consts:[[1,"tabbing_chat",3,"ngClass"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","",3,"routerLink","active","click",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active","click"],["rla","routerLinkActive"],[1,"badgeNew"]],template:function(t,e){1&t&&(r.hc(0,"div",0),r.hc(1,"nav",1),r.ad(2,c,6,4,"a",2),r.gc(),r.gc()),2&t&&(r.zc("ngClass",r.Ec(2,s,e.big)),r.Pb(2),r.zc("ngForOf",e.headerTabs))},directives:[o.n,a.e,o.o,i.i,a.d,i.h],styles:[".tabbing_chat[_ngcontent-%COMP%]{display:inline-block;overflow:auto;width:100%}.tabbing_chat.big[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);background:transparent}.tabbing_chat.big[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{height:80px;font-size:1.2em;font-weight:700}.mat-tab-nav-bar[_ngcontent-%COMP%]{margin-bottom:0;overflow:auto}.mat-tab-nav-bar[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{font-family:inherit;font-size:16px;font-weight:700;min-width:-webkit-max-content;min-width:max-content;justify-content:flex-start!important}@media (max-width:767px){.mat-tab-nav-bar[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{font-size:15px}}.mat-tab-nav-bar[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-label-active[_ngcontent-%COMP%]{opacity:1;color:#14b1bd;font-weight:700}.badgeNew[_ngcontent-%COMP%]:empty{display:none}.badgeNew[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:6px;font-size:12px;text-align:center}"]}),t})()},XQwj:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingModule",(function(){return B}));var r=n("ofXK"),o=n("SqtC"),a=n("fXoL"),i=n("TInF"),c=n("tyNb");let s=(()=>{class t{constructor(){this.navLinks=[]}ngOnInit(){this.createNavLinks()}createNavLinks(){this.navLinks=[{link:""+o.USER_SETTING_CHANGE_PASSWORD.fullUrl,label:"Change Password"},{link:""+o.USER_SETTING_FAQ.fullUrl,label:"FAQ's"},{link:""+o.USER_SETTING_TERMS_CONDITION.fullUrl,label:"Terms & Conditions"},{link:""+o.USER_SETTING_PRIVACY_POLICY.fullUrl,label:"Privacy Policy"},{link:""+o.USER_SETTING_NOTIFICATION.fullUrl,label:"Notifications"},{link:""+o.USER_SETTING_DELETE_ACCOUNT.fullUrl,label:"Delete Account"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Vb({type:t,selectors:[["app-setting"]],decls:14,vars:1,consts:[[1,"setting-wrapper"],[1,"breadcrumbs"],[1,"setting-wrap"],[1,"header-tabs"],[1,"tabs-wrap"],[3,"tabs"],[1,"white-container"]],template:function(t,e){1&t&&(a.hc(0,"div",0),a.hc(1,"div",1),a.hc(2,"ul"),a.hc(3,"li"),a.hc(4,"a"),a.cd(5,"Home"),a.gc(),a.gc(),a.hc(6,"li"),a.cd(7,"Settings"),a.gc(),a.gc(),a.gc(),a.hc(8,"div",2),a.hc(9,"div",3),a.hc(10,"div",4),a.cc(11,"app-tabs",5),a.hc(12,"div",6),a.cc(13,"router-outlet"),a.gc(),a.gc(),a.gc(),a.gc(),a.gc()),2&t&&(a.Pb(11),a.zc("tabs",e.navLinks))},directives:[i.a,c.k],styles:['.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{margin-bottom:15px}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#14b1bd;display:inline-block;vertical-align:middle;margin-right:10px}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#969ba0;position:relative}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{position:absolute;content:"/";font-size:18px;color:#969ba0;right:-10px;top:-2px}.setting-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:28px;color:#000;margin-bottom:15px}.btn-wrap[_ngcontent-%COMP%]{z-index:99;display:flex;align-items:center;justify-content:flex-start}.btn-wrap[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{padding:9px 25px;font-size:14px;font-weight:500;color:#6e6b6b;background-color:#fff;border:1px solid #6e6b6b;border-radius:5px;margin-right:15px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.request-new-password[_ngcontent-%COMP%]{margin-bottom:15px;text-align:right;position:relative;top:-15px}.request-new-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:600;line-height:1.29;text-align:left;color:#14b1bd}[_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-ripple-element, [_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-slide-toggle-bar, [_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#4bae4f}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label.mat-tab-label-active{opacity:1}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label.mat-tab-label-active .mat-tab-label-content{color:#14b1bd;opacity:1}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label .mat-tab-label-content{font-size:16px;font-weight:600;line-height:1.5;color:#96a5b8}[_nghost-%COMP%]     .tabs-wrap .mat-tab-body-wrapper{padding:0 15px;border-radius:10px;border:1px solid #dbe2ea;background-color:#fff;margin-top:20px}.flex[_ngcontent-%COMP%]{flex-wrap:wrap}@media (max-width:767px){.flex[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]{max-width:100%;flex:0 100%}}.white-container[_ngcontent-%COMP%]{padding:25px;border-radius:10px;border:1px solid #dbe2ea;background-color:#fff;margin-top:20px}']}),t})();var l=n("3Pt+"),g=n("bTqV"),p=n("NFeN"),h=n("qFsG"),d=n("wZkO"),u=n("mrSG"),m=n("AzuR"),b=n("N+K7");let f=(()=>{class t{constructor(t){this.http=t}getCmsData(t){return this.http.get(Object(m.n)(t),{},{showLoader:!0}).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(a.lc(b.a))},t.\u0275prov=a.Xb({token:t,factory:t.\u0275fac}),t})();var x=n("7EHt");function w(t,e){if(1&t){const t=a.ic();a.hc(0,"mat-expansion-panel",2),a.oc("opened",(function(){return a.Qc(t),a.sc().panelOpenState=!0}))("closed",(function(){return a.Qc(t),a.sc().panelOpenState=!1})),a.hc(1,"mat-expansion-panel-header"),a.hc(2,"mat-panel-title"),a.cd(3),a.gc(),a.gc(),a.hc(4,"p",3),a.cd(5),a.gc(),a.gc()}if(2&t){const t=e.$implicit;a.Pb(3),a.ed(" ",null==t?null:t.question," "),a.Pb(2),a.ed(" ",null==t?null:t.answer," ")}}let P=(()=>{class t{constructor(t){this.settings=t,this.faqs=[],this.panelOpenState=!1,this.getFaqs()}ngOnInit(){}getFaqs(){return Object(u.a)(this,void 0,void 0,(function*(){const{data:t}=yield this.settings.getCmsData(2);this.faqs=[...t]}))}}return t.\u0275fac=function(e){return new(e||t)(a.bc(f))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-faq"]],decls:3,vars:1,consts:[[1,"page_main_wrapper","cstm_expansion"],[3,"opened","closed",4,"ngFor","ngForOf"],[3,"opened","closed"],[1,"desc"]],template:function(t,e){1&t&&(a.hc(0,"div",0),a.hc(1,"mat-accordion"),a.ad(2,w,6,2,"mat-expansion-panel",1),a.gc(),a.gc()),2&t&&(a.Pb(2),a.zc("ngForOf",e.faqs))},directives:[x.a,r.o,x.c,x.d,x.e],styles:["[_nghost-%COMP%]     .cstm_expansion .mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:none}[_nghost-%COMP%]     .cstm_expansion .mat-expansion-panel{background:#dfebff;margin-bottom:20px}[_nghost-%COMP%]     .cstm_expansion .mat-expansion-indicator:after{color:#14b1bd}"]}),t})();var _=n("jhN1");let M=(()=>{class t{constructor(t){this.sanitizer=t}transform(t,e){if(!t)return"";switch(e){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Invalid safe type specified: "+e)}}}return t.\u0275fac=function(e){return new(e||t)(a.bc(_.b))},t.\u0275pipe=a.ac({name:"safe",type:t,pure:!0}),t})(),O=(()=>{class t{constructor(t){this.settings=t,this.getPrivacyPolicy()}ngOnInit(){}getPrivacyPolicy(){return Object(u.a)(this,void 0,void 0,(function*(){const{data:{data:t}}=yield this.settings.getCmsData(1);console.log(t),this.tnc=t}))}}return t.\u0275fac=function(e){return new(e||t)(a.bc(f))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-term-condition"]],decls:2,vars:4,consts:[[1,"page_main_wrapper",3,"innerHtml"]],template:function(t,e){1&t&&(a.cc(0,"div",0),a.tc(1,"safe")),2&t&&a.zc("innerHtml",a.vc(1,1,e.tnc,"html"),a.Rc)},pipes:[M],styles:[".page_main_wrapper[_ngcontent-%COMP%]{padding:15px;border-radius:4px;border:1px solid #dfebff;background-color:rgba(36,116,255,.05)}.page_main_wrapper[_ngcontent-%COMP%]   .sec_wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.page_main_wrapper[_ngcontent-%COMP%]   .sec_wrapper[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#6e6b6b;font-size:14px;font-weight:500}"]}),t})(),v=(()=>{class t{constructor(t){this.settings=t,this.getPrivacyPolicy()}ngOnInit(){}getPrivacyPolicy(){return Object(u.a)(this,void 0,void 0,(function*(){const{data:{data:t}}=yield this.settings.getCmsData(0);console.log(t),this.privacyPolicy=t}))}}return t.\u0275fac=function(e){return new(e||t)(a.bc(f))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-privacy-policy"]],decls:2,vars:4,consts:[[1,"page_main_wrapper",3,"innerHtml"]],template:function(t,e){1&t&&(a.cc(0,"div",0),a.tc(1,"safe")),2&t&&a.zc("innerHtml",a.vc(1,1,e.privacyPolicy,"html"),a.Rc)},pipes:[M],styles:[".page_main_wrapper[_ngcontent-%COMP%]{padding:15px;border-radius:4px;border:1px solid #dfebff;background-color:rgba(36,116,255,.05)}.page_main_wrapper[_ngcontent-%COMP%]   .sec_wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.page_main_wrapper[_ngcontent-%COMP%]   .sec_wrapper[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{color:#6e6b6b;font-size:14px;font-weight:500}"]}),t})();var L=n("3V+5"),C=n("kmnG"),y=n("zFkK"),E=n("oX63"),S=n("1jcm");let N=(()=>{class t{}return t.\u0275mod=a.Zb({type:t}),t.\u0275inj=a.Yb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})();var T=n("iU0C"),R=n("md+p"),A=n("A1CT"),k=n("Q+Hy"),I=n("IEde"),z=n("AgBJ");const F=function(){return["oldPassword"]},D=function(){return["newPassword"]},j=function(){return["confirmNewPassword"]};let $=(()=>{class t{constructor(t,e,n,r,o){this._formBuilder=t,this._formService=e,this._utility=n,this._accountService=r,this._profileService=o,this.currentHidePassword=!0,this.newHidePassword=!0,this.confirmHidePassword=!0,this.errormsg=null}ngOnInit(){this.createForm()}createForm(){this.changePasswordForm=this._formBuilder.group({oldPassword:this._formService.getControl("password"),newPassword:this._formService.getControl("passwordRule"),confirmNewPassword:this._formService.getControl("passwordRule")},{validator:this._formService.MustMatch("newPassword","confirmNewPassword")})}submitPasswordForm(t){if(!this.changePasswordForm.valid)return;const e=this.changePasswordForm.value,{oldPassword:n,newPassword:r}=e;this._accountService.changePassword({oldPassword:n,newPassword:r}).then(e=>{this.resetForm(t),this._utility.showAlert(e.message)},t=>{console.log("errr")})}onCancel(t){this.resetForm(t)}resetForm(t){t.resetForm(),this.changePasswordForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(a.bc(l.e),a.bc(R.a),a.bc(A.a),a.bc(E.a),a.bc(k.a))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-change-password"]],decls:44,vars:32,consts:[[3,"formGroup","ngSubmit"],["formDirective","ngForm"],[1,"wrap-input"],[1,"flex"],[1,"col-6"],["checkMaxLength","passwordMaxLength","appearance","outline",1,"example-full-width"],["matInput","","formControlName","oldPassword","placeholder","Enter Old Password",3,"type","keydown"],["matSuffix","",1,"pointer",3,"click"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Enter New Password","appTrim","","formControlName","newPassword",3,"type"],["matInput","","placeholder","Confirm New Password","appTrim","","formControlName","confirmNewPassword",3,"type"],[1,"btn-wrap"],["type","button",1,"cancel-btn",3,"click"],["type","submit",1,"primary-btn",3,"disabled"]],template:function(t,e){if(1&t){const t=a.ic();a.hc(0,"form",0,1),a.oc("ngSubmit",(function(){a.Qc(t);const n=a.Nc(1);return e.submitPasswordForm(n)})),a.hc(2,"div",2),a.hc(3,"div",3),a.hc(4,"div",4),a.hc(5,"mat-label"),a.cd(6,"Current Password"),a.gc(),a.hc(7,"mat-form-field",5),a.hc(8,"input",6),a.oc("keydown",(function(){return e.errorType=0})),a.gc(),a.hc(9,"mat-icon",7),a.oc("click",(function(){return e.currentHidePassword=!e.currentHidePassword})),a.cd(10),a.gc(),a.hc(11,"mat-error"),a.cd(12),a.tc(13,"validate"),a.tc(14,"getControl"),a.gc(),a.gc(),a.gc(),a.gc(),a.hc(15,"div",3),a.hc(16,"div",4),a.hc(17,"mat-label"),a.cd(18,"New Password"),a.gc(),a.hc(19,"mat-form-field",8),a.cc(20,"input",9),a.hc(21,"mat-icon",7),a.oc("click",(function(){return e.newHidePassword=!e.newHidePassword})),a.cd(22),a.gc(),a.hc(23,"mat-error"),a.cd(24),a.tc(25,"validate"),a.tc(26,"getControl"),a.gc(),a.gc(),a.gc(),a.hc(27,"div",4),a.hc(28,"mat-label"),a.cd(29,"Confirm New Password"),a.gc(),a.hc(30,"mat-form-field",8),a.cc(31,"input",10),a.hc(32,"mat-icon",7),a.oc("click",(function(){return e.confirmHidePassword=!e.confirmHidePassword})),a.cd(33),a.gc(),a.hc(34,"mat-error"),a.hc(35,"span"),a.cd(36),a.tc(37,"validate"),a.tc(38,"getControl"),a.gc(),a.gc(),a.gc(),a.gc(),a.gc(),a.hc(39,"div",11),a.hc(40,"button",12),a.oc("click",(function(){a.Qc(t);const n=a.Nc(1);return e.onCancel(n)})),a.cd(41,"Cancel"),a.gc(),a.hc(42,"button",13),a.cd(43," Update Password "),a.gc(),a.gc(),a.gc(),a.gc()}2&t&&(a.zc("formGroup",e.changePasswordForm),a.Pb(8),a.zc("type",e.currentHidePassword?"password":"text"),a.Pb(2),a.ed(" ",e.currentHidePassword?"visibility_off":"visibility"," "),a.Pb(2),a.ed(" ",a.vc(13,11,a.vc(14,14,e.changePasswordForm,a.Dc(29,F)),"PASSWORD")," "),a.Pb(8),a.zc("type",e.newHidePassword?"password":"text"),a.Pb(2),a.ed(" ",e.newHidePassword?"visibility_off":"visibility"," "),a.Pb(2),a.ed(" ",a.vc(25,17,a.vc(26,20,e.changePasswordForm,a.Dc(30,D)),"NEW_PASSWORD")," "),a.Pb(7),a.zc("type",e.confirmHidePassword?"password":"text"),a.Pb(2),a.ed(" ",e.confirmHidePassword?"visibility_off":"visibility"," "),a.Pb(3),a.ed(" ",a.vc(37,23,a.vc(38,26,e.changePasswordForm,a.Dc(31,j)),"CONFIRM_PASSWORD")," "),a.Pb(6),a.zc("disabled",!e.changePasswordForm.valid))},directives:[l.y,l.s,l.j,C.g,C.c,h.b,l.c,l.r,l.h,p.a,C.i,C.b],pipes:[I.a,z.a],styles:["",'.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{margin-bottom:15px}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#14b1bd;display:inline-block;vertical-align:middle;margin-right:10px}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:22px;color:#969ba0;position:relative}.setting-wrapper[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{position:absolute;content:"/";font-size:18px;color:#969ba0;right:-10px;top:-2px}.setting-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;line-height:28px;color:#000;margin-bottom:15px}.btn-wrap[_ngcontent-%COMP%]{z-index:99;display:flex;align-items:center;justify-content:flex-start}.btn-wrap[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{padding:9px 25px;font-size:14px;font-weight:500;color:#6e6b6b;background-color:#fff;border:1px solid #6e6b6b;border-radius:5px;margin-right:15px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.request-new-password[_ngcontent-%COMP%]{margin-bottom:15px;text-align:right;position:relative;top:-15px}.request-new-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;font-weight:600;line-height:1.29;text-align:left;color:#14b1bd}[_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-ripple-element, [_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-slide-toggle-bar, [_nghost-%COMP%]     .tabs-wrap .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#4bae4f}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label.mat-tab-label-active{opacity:1}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label.mat-tab-label-active .mat-tab-label-content{color:#14b1bd;opacity:1}[_nghost-%COMP%]     .tabs-wrap .mat-tab-label .mat-tab-label-content{font-size:16px;font-weight:600;line-height:1.5;color:#96a5b8}[_nghost-%COMP%]     .tabs-wrap .mat-tab-body-wrapper{padding:0 15px;border-radius:10px;border:1px solid #dbe2ea;background-color:#fff;margin-top:20px}.flex[_ngcontent-%COMP%]{flex-wrap:wrap}@media (max-width:767px){.flex[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]{max-width:100%;flex:0 100%}}.white-container[_ngcontent-%COMP%]{padding:25px;border-radius:10px;border:1px solid #dbe2ea;background-color:#fff;margin-top:20px}']}),t})();var H=n("/9RH");let U=(()=>{class t{constructor(t,e){this._accountService=t,this._profileService=e,this.notificationChecked=!1,this.notificationToggleControl=new l.f,this.setToggle()}ngOnInit(){}notificationToggle(t){return Object(u.a)(this,void 0,void 0,(function*(){try{const e={notificationEnabled:t.checked?H.z.ENABLE:H.z.DISABLE};yield this._accountService.onNotificationToggle(e).toPromise(),yield this._profileService.getProfileDetail(!0),this.setToggle()}catch(e){}}))}setToggle(){const{notificationEnabled:t}=this._profileService.profileData;this.notificationChecked=t===H.z.ENABLE,this.notificationToggleControl.setValue(this.notificationChecked)}}return t.\u0275fac=function(e){return new(e||t)(a.bc(E.a),a.bc(k.a))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-notifications"]],decls:6,vars:1,consts:[[1,"flex-notification"],[1,"left-section"],["src","assets/icons/Notification.svg","alt","Notification Icon"],[1,"toggle-wrap"],[3,"formControl","change"]],template:function(t,e){1&t&&(a.hc(0,"div",0),a.hc(1,"div",1),a.cc(2,"img",2),a.cd(3,"Allow notifications "),a.gc(),a.hc(4,"div",3),a.hc(5,"mat-slide-toggle",4),a.oc("change",(function(t){return e.notificationToggle(t)})),a.gc(),a.gc(),a.gc()),2&t&&(a.Pb(5),a.zc("formControl",e.notificationToggleControl))},directives:[S.a,l.r,l.g],styles:[".flex-notification[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:25px 15px}.flex-notification[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:600;font-size:20px;line-height:28px;color:#231e1e}.flex-notification[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();var G=n("pFNx"),V=n("RVMx");function q(t,e){if(1&t&&(a.hc(0,"span",12),a.cd(1),a.gc()),2&t){const t=a.sc();a.Pb(1),a.ed(" ",t.errormsg," ")}}const W=function(){return["reason"]},X=function(){return["password"]},Y=[{path:"",component:s,children:[{path:"",redirectTo:o.USER_SETTING_CHANGE_PASSWORD.path,pathMatch:"full"},{path:o.USER_SETTING_CHANGE_PASSWORD.path,component:$},{path:o.USER_SETTING_FAQ.path,component:P},{path:o.USER_SETTING_TERMS_CONDITION.path,component:O},{path:o.USER_SETTING_PRIVACY_POLICY.path,component:v},{path:o.USER_SETTING_NOTIFICATION.path,component:U},{path:o.USER_SETTING_DELETE_ACCOUNT.path,component:(()=>{class t{constructor(t,e,n,r,o){this._formBuilder=t,this._formService=e,this._accountService=n,this._utility=r,this.userService=o,this.currentHidePassword=!0,this.errormsg=null,this.createForm()}ngOnInit(){}createForm(){this.deletionForm=this._formBuilder.group({password:this._formService.getControl("password"),reason:["",[l.x.required,l.x.minLength(G.a.bioMinLength),l.x.maxLength(G.a.subjectMaxLength)]]})}submitForm(){if(!this.deletionForm.valid)return;const t=Object.assign({},this.deletionForm.value);this._accountService.confirmPassword({password:t.password}).then(t=>{200==t.statusCode&&this.deleteAccount()},t=>{console.log("errr"),this.deletionForm.controls.password.reset()})}deleteAccount(){const t=Object.assign({},this.deletionForm.value);t.reason&&t.reason.length?this._utility.openDialog({message:V.a.data.ARE_YOU_SURE,showTextBox:!0,textBoxType:H.f.PARAGRAPH,textBoxpara:"If you delete your account this process cannot be undone.",hideConfirmButton:!0,cancelButtonText:"Close",confirmButtonText:"Yes"}).subscribe(e=>Object(u.a)(this,void 0,void 0,(function*(){e&&this._accountService.deleteAccount(t.reason?{feedback:t.reason}:{}).then(t=>{200==t.statusCode&&this.userService.navigateToWelcome()},t=>{console.log("errr"),this.deletionForm.controls.password.reset()})}))):this._utility.errorAlert({error:{message:"Please provide a reason to delete your account"}})}onCancel(){this.resetForm()}resetForm(){this.deletionForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(a.bc(l.e),a.bc(R.a),a.bc(E.a),a.bc(A.a),a.bc(k.a))},t.\u0275cmp=a.Vb({type:t,selectors:[["app-delete-account"]],decls:29,vars:20,consts:[[1,"page_main_wrapper"],[1,"row",3,"formGroup","ngSubmit"],[1,"col-6"],["appearance","outline",1,"textarea_autosize"],["matInput","","formControlName","reason","appTrim","","type","text","preventStartingSpace","","placeholder","Describe briefly"],["class","mat-error custom-validation",4,"ngIf"],[1,"col-2"],["checkMaxLength","passwordMaxLength","appearance","outline",1,"example-full-width"],["matInput","","formControlName","password","placeholder","Current Password",3,"type"],["matSuffix","",1,"pointer",3,"click"],[1,"btn-wrap","col-12"],["type","submit",1,"primary-btn"],[1,"mat-error","custom-validation"]],template:function(t,e){1&t&&(a.hc(0,"div",0),a.hc(1,"h2"),a.cd(2," Before you delete your account, Please enter your password to confirm account deletion. "),a.gc(),a.hc(3,"form",1),a.oc("ngSubmit",(function(){return e.submitForm()})),a.hc(4,"div",2),a.hc(5,"mat-label"),a.cd(6,"Reason to delete your account "),a.gc(),a.hc(7,"mat-form-field",3),a.cc(8,"textarea",4),a.hc(9,"mat-error"),a.cd(10),a.tc(11,"validate"),a.tc(12,"getControl"),a.gc(),a.ad(13,q,2,1,"span",5),a.gc(),a.gc(),a.cc(14,"div",6),a.hc(15,"div",2),a.hc(16,"mat-label"),a.cd(17,"Current Password"),a.gc(),a.hc(18,"mat-form-field",7),a.cc(19,"input",8),a.hc(20,"mat-icon",9),a.oc("click",(function(){return e.currentHidePassword=!e.currentHidePassword})),a.cd(21),a.gc(),a.hc(22,"mat-error"),a.cd(23),a.tc(24,"validate"),a.tc(25,"getControl"),a.gc(),a.gc(),a.gc(),a.hc(26,"div",10),a.hc(27,"button",11),a.cd(28,"Delete My Account"),a.gc(),a.gc(),a.gc(),a.gc()),2&t&&(a.Pb(3),a.zc("formGroup",e.deletionForm),a.Pb(7),a.ed(" ",a.vc(11,6,a.vc(12,9,e.deletionForm,a.Dc(18,W)),"DELETE_REASON")," "),a.Pb(3),a.zc("ngIf",e.errorType),a.Pb(6),a.zc("type",e.currentHidePassword?"password":"text"),a.Pb(2),a.ed(" ",e.currentHidePassword?"visibility_off":"visibility"," "),a.Pb(2),a.ed(" ",a.vc(24,12,a.vc(25,15,e.deletionForm,a.Dc(19,X)),"PASSWORD")," "))},directives:[l.y,l.s,l.j,C.g,C.c,h.b,l.c,l.r,l.h,C.b,r.p,p.a,C.i],pipes:[I.a,z.a],styles:[""]}),t})()}]}];let B=(()=>{class t{}return t.\u0275mod=a.Zb({type:t}),t.\u0275inj=a.Yb({factory:function(e){return new(e||t)},providers:[E.a,f],imports:[[r.c,c.j.forChild(Y),T.a,l.w,g.b,p.b,h.c,d.f,x.b,L.a,C.e,y.a,S.b,N]]}),t})()},iU0C:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ofXK"),o=n("wZkO"),a=n("tyNb"),i=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=i.Zb({type:t}),t.\u0275inj=i.Yb({factory:function(e){return new(e||t)},imports:[[r.c,o.f,a.j],o.f,a.j]}),t})()},"md+p":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("3Pt+"),o=n("Qxun"),a=n("pFNx"),i=(n("RVMx"),n("PqYM")),c=n("eIep"),s=n("lJxs"),l=n("fXoL");let g=(()=>{class t{constructor(){this.customValidators={match(t,e,n){return this.compare(t,"MATCH",e||t,n)((t,e)=>t===e)},lowerThan(t,e,n){return this.compare(t,"LOWER",e||t,n)((t,e)=>t<=e)},higherThan(t,e,n){return this.compare(t,"HIGHER",e||t,n)((t,e)=>t>=e)},compare:(t,e,n,r)=>o=>a=>{if(a.value||0===a.value){const i=r||a.parent;if(i){const r=i.controls[t];if(r&&r.errors&&r.errors.compare&&r.updateValueAndValidity(),!r)throw new Error(`Match Control [${n}] not found on parent control.`);if(r.dirty&&!o(a.value,r.value))return{compare:{field:n,type:e}}}}}},this.VALIDATION={name:[r.x.minLength(a.a.nameMinLength),r.x.maxLength(a.a.nameMaxLength)],middleName:[r.x.minLength(a.a.nameMinLength),r.x.maxLength(a.a.nameMaxLength)],companyName:[r.x.minLength(a.a.nameMinLength),r.x.maxLength(a.a.nameMaxLength)],price:[r.x.pattern(o.a.price),r.x.minLength(a.a.priceMinLength),r.x.maxLength(a.a.priceMaxLength),r.x.min(0)],rangeMin:[r.x.pattern(o.a.price),r.x.min(1)],rangeMax:[r.x.pattern(o.a.price),r.x.min(1)],rangeFixed:[r.x.pattern(o.a.price),r.x.min(1)],email:[r.x.pattern(o.a.email),r.x.maxLength(a.a.emailMaxLength)],description:[r.x.minLength(a.a.descriptionMinLength),r.x.maxLength(a.a.descriptionMaxLength)],descriptionMax400:[r.x.minLength(a.a.descriptionMinLength),r.x.maxLength(a.a.descriptionMaxLength400)],descriptionMaxLength1200:[r.x.minLength(a.a.descriptionMinLength),r.x.maxLength(a.a.descriptionMaxLength1200)],ratingDescription:[r.x.minLength(a.a.descriptionMinLength),r.x.maxLength(a.a.descriptionMaxLength)],rating:[],propertyId:[],bookingId:[],hostId:[],password:[r.x.pattern(o.a.password),r.x.minLength(a.a.passwordMinLength),r.x.maxLength(a.a.passwordMaxLength)],passwordRule:[r.x.pattern(o.a.passRegex),r.x.minLength(a.a.passwordMinLength),r.x.maxLength(a.a.passwordMaxLength)],phone:[r.x.pattern(o.a.phone),r.x.minLength(a.a.phoneMinLength),r.x.maxLength(a.a.phoneMaxLength)],dropdown:[],checkbox:[],houseNo:[r.x.minLength(a.a.houseNumberMinLength),r.x.maxLength(a.a.houseNumberMaxLength)],street:[r.x.minLength(a.a.streetMinLength),r.x.maxLength(a.a.streetMaxLength)],address:[r.x.minLength(a.a.addressMinLength),r.x.maxLength(a.a.addressMaxLength)],landmark:[r.x.minLength(a.a.landmarkMinLength),r.x.maxLength(a.a.landmarkMaxLength)],requiredOnly:[],zipCode:[r.x.pattern(o.a.phone),r.x.minLength(a.a.zipcodeMinLength),r.x.maxLength(a.a.zipcodeMaxLength)],zipCodeUser:[r.x.minLength(a.a.zipcodeMinLength),r.x.maxLength(a.a.zipcodeMaxLength)],taxNo:[r.x.minLength(a.a.taxNumberMinLength),r.x.maxLength(a.a.taxNumberMaxLength)],regNo:[r.x.minLength(a.a.regNumberMinLength),r.x.maxLength(a.a.regNumberMaxLength)],dob:[],subject:[r.x.minLength(a.a.bioMinLength),r.x.maxLength(a.a.subjectMaxLength)],subjectRequest:[r.x.minLength(3),r.x.maxLength(200)],subjectDescription:[r.x.minLength(3),r.x.maxLength(800)],uen:[r.x.pattern(o.a.alphaNumeric),r.x.minLength(a.a.uenMinLength),r.x.maxLength(a.a.uenMaxLength)],webSite:[r.x.pattern(o.a.url)],optional:[],title:[r.x.minLength(a.a.mininviteTitleLength),r.x.maxLength(a.a.maxinviteTitleLength)],message:[r.x.minLength(a.a.mininviteMsgLength),r.x.maxLength(a.a.maxinviteMsgLength)]},this.loginAsyncValidator=(t,e,n=500)=>(console.log({bookingId:e}),r=>{const o={email:r.value,bookingId:e};return Object(i.a)(n).pipe(Object(c.a)(()=>t.validateEmail(Object.assign({},o)),t=>(console.log({err:t}),{loginExist:!0})),Object(s.a)(t=>(console.log({res:t}),null),t=>(console.log({err:t}),{loginExist:!0})))})}noWhitespaceValidator(t){return 0!==(t.value||"").trim().length?null:{whitespace:!0}}removeSpaces(t){return t&&t.value&&!t.value.replace(/\s/g,"").length&&t.setValue(""),null}matchPassword(t){let e=t.get("password").value,n=t.get("confirmPassword").value;e!==n?t.get("confirmPassword").setErrors({matchPassword:!0}):e===n&&t.get("confirmPassword").errors&&(delete t.get("confirmPassword").errors.matchPassword,0===Object.keys(t.get("confirmPassword").errors).length&&t.get("confirmPassword").setErrors(null))}MustMatch(t,e){return n=>{const r=n.controls[t],o=n.controls[e];return r&&o?o.errors&&!o.errors.mustMatch?null:void o.setErrors(r.value!==o.value?{mustMatch:!0}:null):null}}getControl(t,e=!0,n){void 0===n&&(n="");let o=[...this.VALIDATION[t]];return e&&o.splice(0,0,"checkbox"===t?r.x.requiredTrue:r.x.required),["checkbox"!==t&&n,r.x.compose(o)]}getFilterFormControls(t){let e={};for(let n of t)e[n]=[null];return e}genrateControlsObj(t){return t.reduce((t,e)=>(t[e]=[""],t),{})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Xb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oX63:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("mrSG"),o=n("SqtC"),a=n("AzuR"),i=n("2Vo4"),c=n("fXoL"),s=n("N+K7"),l=n("A1CT"),g=n("tyNb"),p=n("HmGj");let h=(()=>{class t{constructor(t,e,n,r){this._http=t,this._utility=e,this._router=n,this.firebaseService=r,this.isProfileSetup=new i.a(!1)}loginWithphone(t){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this._http.post(a.a.LOGIN,Object.assign(Object.assign({},t),this._utility.countryId),{skipErrorPopup:!0}).toPromise();return this.loginSuccess(e),e}))}resendVerificationLink(t){try{return this._http.patch(`${a.a.RESEND_EMAIL}/${t}`,{}).toPromise()}catch(e){return null}}reSendOpt(t){return this._http.post(a.a.RESEND_OTP_OUT,Object.assign(Object.assign({},t),this._utility.countryId)).toPromise()}sendOtp(t){return this._http.put(a.a.SEND_OTP,Object.assign(Object.assign({},t),this._utility.countryId),{skipErrorPopup:!0}).toPromise()}forgotWithEmail(t){return this._http.put(a.a.FORGOT_WITH_EMAIL,Object.assign(Object.assign({},t),this._utility.countryId),{skipErrorPopup:!0}).toPromise()}editPhoneSendOtp(t){return this._http.put(a.a.EDIT_PHONE_RESEND_OTP,t).toPromise()}verifyEditPhoneOtp(t){return Object(r.a)(this,void 0,void 0,(function*(){return yield this._http.put(a.a.VERIFY_EDIT_PHONE_OTP,t).toPromise()}))}loginSuccess(t){this._utility.setToken(t.data.authToken);const e=this._utility.getFCMToken();e?this.firebaseService.fcmTokenUpdate(e):this.firebaseService.requestPermission(),this._router.navigate([o.HOME.fullUrl])}isEmailAvailable(t){return Object(r.a)(this,void 0,void 0,(function*(){return this._http.get(a.a.CHECK_COWERKER_EMAIL,t)}))}validateEmail(t){return this._http.get(a.a.CHECK_COWERKER_EMAIL,t)}signup(t){const e=JSON.parse(JSON.stringify(t));delete e.recaptcha;const n=Object.assign({},this._utility.countryPayload);return delete n.currency,this._http.post(a.a.SIGNUP,Object.assign(Object.assign({},e),n),{skipErrorPopup:!0}).toPromise()}forgotPasswordWithEmail(t){return this._http.put(a.a.FORGOT_WITH_EMAIL,Object.assign(Object.assign({},t),this._utility.countryId),{skipErrorPopup:!0,showLoader:!0}).toPromise()}resetPassword(t){return this._http.put(a.a.RESET_PASSWORD,t).toPromise()}changePassword(t){return this._http.put(a.a.CHANGE_PASSWORD,t,{showLoader:!0}).toPromise()}verifyOtp(t){return Object(r.a)(this,void 0,void 0,(function*(){return yield this._http.post(a.a.VERIFY_OTP,t,{showLoader:!0}).toPromise()}))}updateVerifyOtp(t){return Object(r.a)(this,void 0,void 0,(function*(){return yield this._http.post(a.a.UPDATE_VERIFY_OTP,t,{showLoader:!0}).toPromise()}))}verifyResetOtp(t){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this._http.post(a.a.VERIFY_RESET_OTP,t,{showLoader:!0}).toPromise();return this._utility.showAlert(e.message),e}))}resendOtpFromProfile(t){return this._http.post(a.a.RESEND_OTP,t,{showLoader:!0}).toPromise()}confirmPassword(t){return this._http.put(a.o,t,{showLoader:!0}).toPromise()}onNotificationToggle(t){return this._http.put(a.H,t,{showLoader:!0})}deleteAccount(t){return this._http.put(a.r,t,{showLoader:!0}).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(c.lc(s.a),c.lc(l.a),c.lc(g.f),c.lc(p.a))},t.\u0275prov=c.Xb({token:t,factory:t.\u0275fac}),t})()},pFNx:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={emailMaxLength:100,passwordMinLength:8,passwordMaxLength:15,nameMinLength:2,nameMaxLength:100,phoneMinLength:8,phoneMaxLength:14,descriptionMinLength:3,descriptionMaxLength:500,descriptionMaxLength400:400,descriptionMaxLength1200:1200,priceMinLength:1,priceMaxLength:10,minFloor:0,maxFloor:20,minArea:100,maxArea:1e4,houseNumberMinLength:1,houseNumberMaxLength:100,streetMinLength:3,streetMaxLength:100,zipcodeMinLength:2,zipcodeMaxLength:16,taxNumberMinLength:3,taxNumberMaxLength:40,regNumberMinLength:3,regNumberMaxLength:40,landmarkMinLength:3,landmarkMaxLength:140,bioMinLength:3,bioMaxLength:140,addressMinLength:3,addressMaxLength:200,phoneNumber:10,subjectMaxLength:250,maxvacancies:2,uenMinLength:9,uenMaxLength:10,maxinviteTitleLength:100,mininviteTitleLength:2,mininviteMsgLength:3,maxinviteMsgLength:500}},zFkK:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AgBJ"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Zb({type:t}),t.\u0275inj=o.Yb({factory:function(e){return new(e||t)},providers:[r.a]}),t})()}}]);