(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/1cH":function(t,e,i){"use strict";i.d(e,"a",(function(){return I})),i.d(e,"b",(function(){return N})),i.d(e,"c",(function(){return z}));var o=i("u47x"),s=i("8LU1"),n=i("fXoL"),a=i("FKr1"),l=i("quSY"),c=i("XNiG"),r=i("NXyV"),h=i("VRyK"),p=i("LRne"),u=i("xgIS"),d=i("ofXK"),m=i("rDax"),_=i("vxfF"),b=i("FtGj"),v=i("nLfN"),g=i("+rOU"),y=i("3Pt+"),f=i("kmnG"),O=i("IzEk"),w=i("eIep"),A=i("pLZG"),S=i("lJxs"),C=i("vkgz"),P=i("3E0/"),E=i("cH1L");const F=["panel"];function x(t,e){if(1&t&&(n.hc(0,"div",0,1),n.xc(2),n.gc()),2&t){const t=n.sc();n.zc("id",t.id)("ngClass",t._classList)}}const R=["*"];let j=0;class L{constructor(t,e){this.source=t,this.option=e}}class D{}const T=Object(a.t)(D),k=new n.y("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}});let V=(()=>{class t extends T{constructor(t,e,i){super(),this._changeDetectorRef=t,this._elementRef=e,this._activeOptionChanges=l.a.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new n.r,this.opened=new n.r,this.closed=new n.r,this.optionActivated=new n.r,this._classList={},this.id="mat-autocomplete-"+j++,this._autoActiveFirstOption=!!i.autoActiveFirstOption}get isOpen(){return this._isOpen&&this.showPanel}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=Object(s.c)(t)}set classList(t){this._classList=t&&t.length?t.split(" ").reduce((t,e)=>(t[e.trim()]=!0,t),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}ngAfterContentInit(){this._keyManager=new o.b(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new L(this,t);this.optionSelected.emit(e)}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}}return t.\u0275fac=function(e){return new(e||t)(n.bc(n.i),n.bc(n.o),n.bc(k))},t.\u0275dir=n.Wb({type:t,viewQuery:function(t,e){var i;1&t&&(n.Wc(n.X,!0),n.hd(F,!0)),2&t&&(n.Mc(i=n.pc())&&(e.template=i.first),n.Mc(i=n.pc())&&(e.panel=i.first))},inputs:{displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",classList:["class","classList"],panelWidth:"panelWidth"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[n.Mb]}),t})(),I=(()=>{class t extends V{constructor(){super(...arguments),this._visibleClass="mat-autocomplete-visible",this._hiddenClass="mat-autocomplete-hidden"}}return t.\u0275fac=function(e){return W(e||t)},t.\u0275cmp=n.Vb({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,i){var o;1&t&&(n.Ub(i,a.f,!0),n.Ub(i,a.k,!0)),2&t&&(n.Mc(o=n.pc())&&(e.optionGroups=o),n.Mc(o=n.pc())&&(e.options=o))},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[n.Ob([{provide:a.g,useExisting:t}]),n.Mb],ngContentSelectors:R,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(n.yc(),n.ad(0,x,3,2,"ng-template"))},directives:[d.n],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})();const W=n.jc(I),M=new n.y("mat-autocomplete-scroll-strategy"),X={provide:M,deps:[m.d],useFactory:function(t){return()=>t.scrollStrategies.reposition()}},Y={provide:y.p,useExisting:Object(n.ib)(()=>z),multi:!0};let K=(()=>{class t{constructor(t,e,i,o,s,n,a,p,u,d){this._element=t,this._overlay=e,this._viewContainerRef=i,this._zone=o,this._changeDetectorRef=s,this._dir=a,this._formField=p,this._document=u,this._viewportRuler=d,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=l.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new c.a,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(r.a)(()=>this.autocomplete&&this.autocomplete.options?Object(h.a)(...this.autocomplete.options.map(t=>t.onSelectionChange)):this._zone.onStable.pipe(Object(O.a)(1),Object(w.a)(()=>this.optionSelections))),this._scrollStrategy=n}get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=Object(s.c)(t)}ngAfterViewInit(){const t=this._getWindow();void 0!==t&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();void 0!==t&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Object(h.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(A.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(A.a)(()=>this._overlayAttached)):Object(p.a)()).pipe(Object(S.a)(t=>t instanceof a.m?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return Object(h.a)(Object(u.a)(this._document,"click"),Object(u.a)(this._document,"touchend")).pipe(Object(A.a)(t=>{const e=this._isInsideShadowRoot&&t.composedPath?t.composedPath()[0]:t.target,i=this._formField?this._formField._elementRef.nativeElement:null,o=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&(!i||!i.contains(e))&&(!o||!o.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode;if(e!==b.h||Object(b.t)(t)||t.preventDefault(),this.activeOption&&e===b.g&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const i=this.autocomplete._keyManager.activeItem,o=e===b.q||e===b.e;this.panelOpen||e===b.p?this.autocomplete._keyManager.onKeydown(t):o&&this._canOpen()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}_handleInput(t){let e=t.target,i=e.value;"number"===e.type&&(i=""==i?null:parseFloat(i)),this._previousValue!==i&&(this._previousValue=i,this._onChange(i),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe(Object(O.a)(1)),e=this.autocomplete.options.changes.pipe(Object(C.a)(()=>this._positionStrategy.reapplyLastPosition()),Object(P.a)(0));return Object(h.a)(t,e).pipe(Object(w.a)(()=>{const t=this.panelOpen;return this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelOpen&&(this._overlayRef.updatePosition(),t!==this.panelOpen&&this.autocomplete.opened.emit()),this.panelClosingActions}),Object(O.a)(1)).subscribe(t=>this._setValueAndClose(t))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){const e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,i=null!=e?e:"";this._formField?this._formField._control.value=i:this._element.nativeElement.value=i,this._previousValue=i}_setValueAndClose(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!Object(v.c)(this._element.nativeElement));let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new g.i(this.autocomplete.template,this._viewContainerRef),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,t.keydownEvents().subscribe(t=>{(t.keyCode===b.h&&!Object(b.t)(t)||t.keyCode===b.q&&Object(b.t)(t,"altKey"))&&(this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation(),t.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new m.e({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}];let s;s="above"===this.position?o:"below"===this.position?e:[...e,...o],t.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){var t;return(null===(t=this._document)||void 0===t?void 0:t.defaultView)||window}_scrollToOption(t){const e=this.autocomplete,i=Object(a.q)(t,e.options,e.optionGroups);if(0===t&&1===i)e._setScrollTop(0);else{const i=e.options.toArray()[t];if(i){const t=i._getHostElement(),o=Object(a.r)(t.offsetTop,t.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(o)}}}}return t.\u0275fac=function(e){return new(e||t)(n.bc(n.o),n.bc(m.d),n.bc(n.db),n.bc(n.J),n.bc(n.i),n.bc(M),n.bc(E.b,8),n.bc(f.a,9),n.bc(d.e,8),n.bc(_.d))},t.\u0275dir=n.Wb({type:t,inputs:{position:["matAutocompletePosition","position"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"],autocomplete:["matAutocomplete","autocomplete"],connectedTo:["matAutocompleteConnectedTo","connectedTo"]},features:[n.Nb]}),t})(),z=(()=>{class t extends K{constructor(){super(...arguments),this._aboveClass="mat-autocomplete-panel-above"}}return t.\u0275fac=function(e){return H(e||t)},t.\u0275dir=n.Wb({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&n.oc("focusin",(function(){return e._handleFocus()}))("blur",(function(){return e._onTouched()}))("input",(function(t){return e._handleInput(t)}))("keydown",(function(t){return e._handleKeydown(t)})),2&t&&n.Qb("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-owns",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",!e.autocompleteDisabled)},exportAs:["matAutocompleteTrigger"],features:[n.Ob([Y]),n.Mb]}),t})();const H=n.jc(z);let N=(()=>{class t{}return t.\u0275mod=n.Zb({type:t}),t.\u0275inj=n.Yb({factory:function(e){return new(e||t)},providers:[X],imports:[[m.g,a.l,a.i,d.c],_.a,a.l,a.i]}),t})()}}]);