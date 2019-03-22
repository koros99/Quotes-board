export class Quote {
  public showAuthor:boolean;
  public showPublisher:boolean;
  constructor(public id: number, public body: string, public author: string, public publisher:string){
    this.showAuthor=false;
    this.showPublisher=false;
  }
}
