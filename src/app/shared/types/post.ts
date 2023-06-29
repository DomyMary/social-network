import {Like} from "./like";
import {Comment} from "./comment";

export class Post {
  id: number;
  text:string;
  user_id: number;
  likes:Array<Like>;
  comments: Array<Comment>;


  constructor(id: number, text: string, user_id: number, likes: Array<Like>, comments: Array<Comment>) {
    this.id = id;
    this.text = text;
    this.user_id = user_id;
    this.likes = likes;
    this.comments = comments;
  }


}
