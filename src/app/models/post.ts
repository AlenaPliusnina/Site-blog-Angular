export class Post {
  id: number;
  title: string;
  content: string;
  created: string;
  lastChange: string;

  constructor(id:number, title:string, content:string, created:string, lastChange:string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created = created;
    this.lastChange = lastChange;
  }
}
