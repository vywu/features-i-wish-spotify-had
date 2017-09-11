import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
  checkArtist(item:any,queryString:string){
    for(let artist of item.track.artists){
      if ((RegExp(queryString).test(artist.name.toLowerCase()))===true)
      {
        return true
      }
    }
    return false
  }
  transform(value: any,queryString:string): any {
    // console.log(queryString);
    // console.log(new RegExp(queryString).test("fam"));
    queryString=queryString.toLowerCase();

      return value.filter((item)=>new RegExp(queryString).test(item.track.name.toLowerCase())||new RegExp(queryString).test(item.track.album.name.toLowerCase())||this.checkArtist(item,queryString));

    }


}
