import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/post.service';
import { POSTS } from '../../data/post-data';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService],
})
export class PostComponent implements OnInit {

  post:any;
  isModalDialogVisible: boolean = false;

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    if (window.history.state.postData) {
      this.post = window.history.state.postData;
    } else {
      this.post = {};
    }
  }

  deletPost(id: number) {
    this.postsService.deletePost(id);
    this.router.navigate(['']);
  }
  savePost(id: number, title: string, content: string) {
    console.log(id)
    if (id !== undefined) {
      console.log(id)
      POSTS.forEach((post) => {
        if (post.id === id) {
          post.title = title;
          post.content = content;
        }
      });  
    } else {
      POSTS.push({
        id: POSTS.length,
        title: title,
        content: content
      });
    }
    this.router.navigate(['']);
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