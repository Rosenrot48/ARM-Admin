import {Pipe, PipeTransform} from '@angular/core';
import {Stub_object} from '../stub_object';

@Pipe({


  name: 'selectedObject'
})

export class SelectedObjectPipe implements PipeTransform {
  transform(allObjects: Stub_object[], objectId: number): any {
    return allObjects.filter(object => object.id === objectId);
  }
}
