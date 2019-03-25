export class Quote {
  public showAuthor:boolean;
  public showPublisher:boolean;
  constructor(public id: number, public body: string, public author: string, public publisher:string, public date: Date, public likes: number, public unlikes: number){
    this.showAuthor=false;
    this.showPublisher=false;
  }
}
