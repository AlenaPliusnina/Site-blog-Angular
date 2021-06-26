import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { __exportStar } from 'tslib';

@Injectable({
  providedIn:'root'
})
export class PostsService {

  posts: Post[] = [];

  constructor() {}

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPosts() {
    return this.posts;
  }

  getPostInfo(id: number) {
    return this.posts.find((post) => { return post.id == id });
  }

  deletePost(id: number): Post[] {
    return this.posts.splice(id, 1);
  }

}
