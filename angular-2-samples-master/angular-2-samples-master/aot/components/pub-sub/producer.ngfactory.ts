/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../components/pub-sub/producer';
import * as import2 from '@angular/forms';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
const styles_Producer:any[] = ([] as any[]);
export const RenderType_Producer:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_Producer,
  data: {animation: ([] as any[])}
}
);
export function View_Producer_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['First Name']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),5,'input',([] as any[]),[
      [
        1,
        'ng-untouched'
      ]
      ,
      [
        1,
        'ng-touched'
      ]
      ,
      [
        1,
        'ng-pristine'
      ]
      ,
      [
        1,
        'ng-dirty'
      ]
      ,
      [
        1,
        'ng-valid'
      ]
      ,
      [
        1,
        'ng-invalid'
      ]
      ,
      [
        1,
        'ng-pending'
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.Producer = view.component;
      if (('input' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnodeValue(view,4).onChange($event.target.value)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnodeValue(view,4).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnodeValue(view,6).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnodeValue(view,6).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_4:any = ((<any>(comp.firstName = $event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(0,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵproviderDef(0,(null as any),2,import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdirectiveDef(10,(null as any),0,import2.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵproviderDef(0,(null as any),3,import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdirectiveDef(0,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Last Name']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),5,'input',([] as any[]),[
      [
        1,
        'ng-untouched'
      ]
      ,
      [
        1,
        'ng-touched'
      ]
      ,
      [
        1,
        'ng-pristine'
      ]
      ,
      [
        1,
        'ng-dirty'
      ]
      ,
      [
        1,
        'ng-valid'
      ]
      ,
      [
        1,
        'ng-invalid'
      ]
      ,
      [
        1,
        'ng-pending'
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.Producer = view.component;
      if (('input' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnodeValue(view,14).onChange($event.target.value)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnodeValue(view,14).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnodeValue(view,16).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnodeValue(view,16).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_4:any = ((<any>(comp.lastName = $event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(0,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵproviderDef(0,(null as any),2,import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdirectiveDef(10,(null as any),0,import2.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵproviderDef(0,(null as any),3,import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdirectiveDef(0,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
      import0.ɵelementDef(0,(null as any),(null as any),4,'div',[[
        'style',
        'margin-top: 10px;'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.Producer = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.createCustomer()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Create Customer']),
    import0.ɵtextDef((null as any),['\n'])
  ]
  ,(check,view) => {
    var comp:import1.Producer = view.component;
    const currVal_0:any = comp.firstName;
    check(view,6,0,currVal_0);
    const currVal_1:any = comp.lastName;
    check(view,16,0,currVal_1);
  },(check,view) => {
    var comp:import1.Producer = view.component;
    const currVal_0:any = import0.ɵnodeValue(view,8).ngClassUntouched;
    const currVal_1:any = import0.ɵnodeValue(view,8).ngClassTouched;
    const currVal_2:any = import0.ɵnodeValue(view,8).ngClassPristine;
    const currVal_3:any = import0.ɵnodeValue(view,8).ngClassDirty;
    const currVal_4:any = import0.ɵnodeValue(view,8).ngClassValid;
    const currVal_5:any = import0.ɵnodeValue(view,8).ngClassInvalid;
    const currVal_6:any = import0.ɵnodeValue(view,8).ngClassPending;
    check(view,3,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = import0.ɵnodeValue(view,18).ngClassUntouched;
    const currVal_8:any = import0.ɵnodeValue(view,18).ngClassTouched;
    const currVal_9:any = import0.ɵnodeValue(view,18).ngClassPristine;
    const currVal_10:any = import0.ɵnodeValue(view,18).ngClassDirty;
    const currVal_11:any = import0.ɵnodeValue(view,18).ngClassValid;
    const currVal_12:any = import0.ɵnodeValue(view,18).ngClassInvalid;
    const currVal_13:any = import0.ɵnodeValue(view,18).ngClassPending;
    check(view,13,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13);
  });
}
const RenderType_Producer_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_Producer_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'producer',([] as any[]),(null as any),(null as any),(null as any),View_Producer_0,RenderType_Producer),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.Producer,[import3.PubSubService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const ProducerNgFactory:import0.ComponentFactory<import1.Producer> = import0.ɵcreateComponentFactory('producer',import1.Producer,View_Producer_Host_0);