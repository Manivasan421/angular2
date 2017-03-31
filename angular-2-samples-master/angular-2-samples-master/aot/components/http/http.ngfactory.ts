/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../components/http/http';
import * as import2 from '@angular/common';
import * as import3 from '@angular/http';
const styles_HttpSample:any[] = ([] as any[]);
export const RenderType_HttpSample:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_HttpSample,
  data: {animation: ([] as any[])}
}
);
function View_HttpSample_1():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '\n    ',
      '\n'
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit;
    check(view,1,0,currVal_0);
  });
}
function View_HttpSample_2():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '\n    ',
      '\n'
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit;
    check(view,1,0,currVal_0);
  });
}
function View_HttpSample_3():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '\n    ',
      '\n'
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit;
    check(view,1,0,currVal_0);
  });
}
function View_HttpSample_4():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-danger'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        There was an error loading the list of friends (Intentional error testing)\n    ']),
    import0.ɵtextDef((null as any),['\n'])
  ]
  ,(null as any),(null as any));
}
export function View_HttpSample_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Making Http Requests']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    Click a country to display that country\'s capitol. Observables in flight will be cancelled prior to loading new data.\n']),
    import0.ɵtextDef((null as any),['\n\n']),
      import0.ɵelementDef(0,(null as any),(null as any),26,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),24,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.HttpSample = view.component;
      if (('click' === eventName)) {
        comp.country.next('usa');
        const pd_0:any = ((<any>(comp.activeCountry = 'usa')) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(4,(null as any),0,import2.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpureObjectDef(['active']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['USA']),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.HttpSample = view.component;
      if (('click' === eventName)) {
        comp.country.next('denmark');
        const pd_0:any = ((<any>(comp.activeCountry = 'denmark')) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(4,(null as any),0,import2.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpureObjectDef(['active']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Denmark']),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.HttpSample = view.component;
      if (('click' === eventName)) {
        comp.country.next('germany');
        const pd_0:any = ((<any>(comp.activeCountry = 'germany')) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(4,(null as any),0,import2.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpureObjectDef(['active']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Germany']),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.HttpSample = view.component;
      if (('click' === eventName)) {
        comp.country.next('argentina');
        const pd_0:any = ((<any>(comp.activeCountry = 'argentina')) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdirectiveDef(4,(null as any),0,import2.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpureObjectDef(['active']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Argentina']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵtextDef((null as any),['\n\n']),
      import0.ɵelementDef(0,(null as any),(null as any),3,'div',[[
        'style',
        'margin-left: 10px;'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['The capitol is ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    List of friends using Observables\n']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_HttpSample_1),
    import0.ɵdirectiveDef(12,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    List of friends loaded using Promises\n']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_HttpSample_2),
    import0.ɵdirectiveDef(12,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    List of friends and customer loaded successfully in parallel\n']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Friends:']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_HttpSample_3),
    import0.ɵdirectiveDef(12,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Customer:']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    Loaded a contract after first loading a customer\n']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      'Customer: ',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      'Product: ',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_HttpSample_4),
    import0.ɵdirectiveDef(0,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    Making a post request\n']),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),13,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.HttpSample = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.postData()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Post Data']),
    import0.ɵtextDef((null as any),['\n\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Posted the following values:']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),2,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/viewarticle/angular-2.0-and-http'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Read more here'])
  ]
  ,(check,view) => {
    var comp:import1.HttpSample = view.component;
    const currVal_0:any = check(view,11,0,comp.isActive('usa'));
    check(view,10,0,currVal_0);
    const currVal_1:any = check(view,17,0,comp.isActive('denmark'));
    check(view,16,0,currVal_1);
    const currVal_2:any = check(view,23,0,comp.isActive('germany'));
    check(view,22,0,currVal_2);
    const currVal_3:any = check(view,29,0,comp.isActive('argentina'));
    check(view,28,0,currVal_3);
    const currVal_4:any = comp.result.friends;
    check(view,45,0,currVal_4);
    const currVal_5:any = comp.friendsAsPromise.friends;
    check(view,53,0,currVal_5);
    const currVal_6:any = comp.combined.friends;
    check(view,64,0,currVal_6);
    const currVal_7:any = comp.error;
    check(view,91,0,currVal_7);
  },(check,view) => {
    var comp:import1.HttpSample = view.component;
    const currVal_0:any = comp.capitol;
    check(view,37,0,currVal_0);
    const currVal_1:any = comp.combined.customer.name;
    check(view,72,0,currVal_1);
    const currVal_2:any = ((comp.customer == null)? (null as any): comp.customer.name);
    check(view,82,0,currVal_2);
    const currVal_3:any = ((comp.contract == null)? (null as any): comp.contract.product);
    check(view,85,0,currVal_3);
    const currVal_4:any = comp.postResponse.firstName;
    check(view,105,0,currVal_4);
    const currVal_5:any = comp.postResponse.lastName;
    check(view,108,0,currVal_5);
  });
}
const RenderType_HttpSample_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_HttpSample_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'ng-component',([] as any[]),(null as any),(null as any),(null as any),View_HttpSample_0,RenderType_HttpSample),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.HttpSample,[import3.Http],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const HttpSampleNgFactory:import0.ComponentFactory<import1.HttpSample> = import0.ɵcreateComponentFactory('ng-component',import1.HttpSample,View_HttpSample_Host_0);