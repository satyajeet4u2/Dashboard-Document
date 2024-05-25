import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: any;
  users: any
  constructor(private http: HttpClient,){}


 ngOnInit(): void {
   this.getPost();
   this.getUsers();
 }
  title = 'Document-Dashboard';

  getPost() {
    this.http.get<{ message: string, posts: any }>(environment.API_URL + '/posts')
      .pipe(map((postData) => {
        return postData.posts.map((post: any) => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath,
            creator: post.creator
          };
        });
      }))
      .subscribe((transformDataPost) => {
        console.log(transformDataPost);
        this.posts = transformDataPost;
        // this.postUpdate.next([...this.posts]);
        console.log("api int", this.posts);
      });
    // return [...this.posts];
  }


  getUsers() {
    this.http.get<{ message: string, users: any }>(environment.API_URL + '/user/users')
      .pipe(map((userData) => {
        return userData.users.map((user: any) => {
          return {
            name: user.name,
            email: user.email,
            id: user._id,
            role: user.role,
            creator: user.creator
          };
        });
      }))
      .subscribe((transformDataPost) => {
        console.log(transformDataPost);
        this.users = transformDataPost;
        // this.postUpdate.next([...this.posts]);
        console.log("api users", this.users);
      });
    // return [...this.posts];
  }
}
