import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/post.service';
import { Post } from '../../models/post';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

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
        this.post.created = postInfo.created;
        this.post.lastChange = postInfo.lastChange;
      }
    }
    
  }
}
