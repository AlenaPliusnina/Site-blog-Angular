import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { POSTS } from '../data/post-data';
import { __exportStar } from 'tslib';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }

  deletePost(id: number): Post[] {
    return POSTS.splice(id, 1);
  }

}
