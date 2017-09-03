/**
 * Created by vw on 2017-09-03.
 */
export class Track{
  public name: string;
  public artists: string[];

  public length: string;
  constructor(name:string,artists:string[],length:string){
    this.name=name;
    this.artists=artists;

    this.length=length;
  };
}
