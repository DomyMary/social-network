export class Like{
  post_id: number;
  user_id:number;
  id: number;

  constructor(post_id: number, user_id: number, id: number) {
    this.post_id = post_id;
    this.user_id = user_id;
    this.id = id;
  }
}
