import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostsService } from '../../services/post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts();  
  }

  getPosts(): void {
    this.posts = this.postsService.getPosts();
  }

  redirect(post: any) {
    this.router.navigate(['post', post.id], { 
      state: { postData: post } 
    });
  }
}
