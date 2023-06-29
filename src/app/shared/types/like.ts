export class Like{
  postId: number;
  userId:number;
  id: number;

  constructor(postId: number, userId: number, id: number) {
    this.postId = postId;
    this.userId = userId;
    this.id = id;
  }
}
