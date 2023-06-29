export class Comment {
  user_id:number;
  text:string;
  id:number;
  post_id:number;


  constructor(userId: number, text: string, id: number, post_id: number) {
    this.user_id = userId;
    this.text = text;
    this.id = id;
    this.post_id = post_id;
  }
}
