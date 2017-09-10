/**
 * Created by vw on 2017-09-03.
 */
export class Track{
  public name: string;
  public artists: string[];

  public length: string;
  public id:string
  constructor(name:string,artists:string[],length:string,id:string){
    this.name=name;
    this.artists=artists;
    this.id=id;
    this.length=length;
  };
}
