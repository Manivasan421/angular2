/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/grid/grid';
const styles_Grid:any[] = ([] as any[]);
export const RenderType_Grid:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_Grid,
  data: {animation: ([] as any[])}
}
);
function View_Grid_1():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),2,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.sort(view.context.$implicit.name)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit.descr;
    check(view,2,0,currVal_0);
  });
}
function View_Grid_3():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.parent.context.$implicit[view.context.$implicit.name];
    check(view,1,0,currVal_0);
  });
}
function View_Grid_2():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_Grid_3),
    import0.ɵdirectiveDef(12,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n    '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.columns;
    check(view,3,0,currVal_0);
  },(null as any));
}
export function View_Grid_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Sortable Grid']),
    import0.ɵtextDef((null as any),['\n']),
      import0.ɵelementDef(0,(null as any),(null as any),11,'table',[[
        'class',
        'table table-striped'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),9,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵelementDef(0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_Grid_1),
    import0.ɵdirectiveDef(12,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_Grid_2),
    import0.ɵdirectiveDef(12,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n'])
  ]
  ,(check,view) => {
    var comp:import2.Grid = view.component;
    const currVal_0:any = comp.columns;
    check(view,9,0,currVal_0);
    const currVal_1:any = comp.rows;
    check(view,13,0,currVal_1);
  },(null as any));
}
const RenderType_Grid_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_Grid_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'grid',([] as any[]),(null as any),(null as any),(null as any),View_Grid_0,RenderType_Grid),
    import0.ɵdirectiveDef(1025,(null as any),0,import2.Grid,([] as any[]),(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(null as any));
}
export const GridNgFactory:import0.ComponentFactory<import2.Grid> = import0.ɵcreateComponentFactory('grid',import2.Grid,View_Grid_Host_0);