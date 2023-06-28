import {Component, OnInit, Output} from '@angular/core';
import {RequestService} from "../../../shared/services/request.service";
import {Router} from "@angular/router";
import {Post} from "../../../shared/types/post";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
 button= document.getElementById("buttonLike");
  posts= new Array<Post>()

  constructor( private requestService : RequestService) {
  }

ngOnInit() {
this.getPosts();
}


getPosts(){
  return this.requestService.get("posts").subscribe((res: any) => {
    // 1 Leggo la risposta ricevuta dal server
    console.log(res);
    console.log(this.posts)
    this.posts=res;
  }, (error) => {
    console.error(error);
    // 2 La chiamata è andata in errore e di conseguenza bisognerebbe notificare l'utente
  }, () => {
    // 3 La chiamata è stata completata con successo (SENZA ERRORI) e si può procedere con il login
  });
}



addLike(postId:number){
    this.requestService.post("add-like/"+ postId, postId).subscribe((res:any)=>{
      console.log(res);
    }, (err) => {
      console.log(err)
    }, ()=>{
           alert("il like è fatto");

    })
}

removelike(postId: number, idLike:number){
    this.requestService.delete("remove-like/"+ idLike +"/" + postId).subscribe((res:any)=>{
    console.log(res);
  }, (err) => {
    console.log(err)
  }, ()=>{
    alert("il like è rimosso");

  })

}

  clickLike(postId:number, userId:number, arrayLike:Array<any>){
    for(let i=0;i<arrayLike.length;i++){
      if(arrayLike[i].user_id!=userId && arrayLike[i].post_id!=postId){
        this.addLike(postId);
        this.button!.classList.add(" active");
      } else{
        this.removelike(postId, arrayLike[i].id);
        this.button!.classList.remove("active");
      }
    }

  }


}
