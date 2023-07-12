export class User {
  id: number;
  password:string;
  username: string;


  constructor(id: number, password: string, username: string) {
    this.id = id;
    this.password = password;
    this.username = username;
  }

  public static getUserObj(): User{
    return new User(0,'','');
  }
}
