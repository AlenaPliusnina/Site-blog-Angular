import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/post.service';
import { Post } from '../../models/post'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number = 0;
  title: string = '';
  content: string = '';
  created: string = '';
  lastChange: string = '';
  
  post: Post = {
    id: this.id,
    title: this.title,
    content: this.content,
    created: this.created,
    lastChange: this.lastChange
  };

  isModalDialogVisible: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id !== undefined) {
      let postInfo = this.postsService.getPostInfo(this.id);
      if (postInfo) {
        this.post.title = postInfo.title;
        this.post.content = postInfo.content;
      }
    }
  }

  deletPost(id: number) {
    this.postsService.deletePost(id);
    this.router.navigate(['']);
  }

  savePost(post: Post) {
    if (this.id !== undefined) {
      let getPost = this.postsService.posts.find((post) => { return post.id == this.id });
      if (getPost) {
        let date = new Date().toISOString();

        getPost.title = post.title;
        getPost.content = post.content;
        getPost.lastChange = date.slice(0, 10) + ' ' + date.slice(11, 19);
      }
    } else {
      let date = new Date().toISOString();

      post.created =  date.slice(0, 10) + ' ' + date.slice(11, 19);
      post.lastChange = date.slice(0, 10) + ' ' + date.slice(11, 19);

      if (this.postsService.posts.length !== 0) {
        let lastPost = this.postsService.posts[this.postsService.posts.length-1];
        post.id = lastPost.id + 1;
      } else {
        post.id = 0;
      }
      
      this.postsService.addPost(post);
    }
  }
 
	public showDialog() {
		this.isModalDialogVisible = true;
	}

	public closeModal(id: number, isConfirmed: boolean) {
    if (isConfirmed) {
      this.deletPost(id);
    }
		this.isModalDialogVisible = false;
	}
}