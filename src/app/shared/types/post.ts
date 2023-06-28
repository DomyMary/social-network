export class Post {
  id: number;
  text:string;
  user_id: number;
  likes:Array<string>;
  comments: Array<string>;


  constructor(id: number, text: string, user_id: number, likes: Array<string>, comments: Array<string>) {
    this.id = id;
    this.text = text;
    this.user_id = user_id;
    this.likes = likes;
    this.comments = comments;
  }


}
