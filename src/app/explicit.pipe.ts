import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explicit'
})
export class ExplicitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(track=>{return track.explicit==false;})
  }

}
