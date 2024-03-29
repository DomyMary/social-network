import {Like} from "./like";
import {Comment} from "./comment";

export class Post {
  id: number;
  text:string;
  user_id: number;
  liked:boolean;
  likes:Array<Like>;
  comments: Array<Comment>;


  constructor(id: number, text: string, user_id: number, liked:boolean, likes: Array<Like>, comments: Array<Comment>) {
    this.id = id;
    this.text = text;
    this.user_id = user_id;
    this.liked=liked;
    this.likes = likes;
    this.comments = comments;
  }

  public static getPostObj(): Post{
    return new Post(0,'',0,false,[],[]);
  }


}
