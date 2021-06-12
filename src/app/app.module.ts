import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

import { PostsService } from '../app/services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostListComponent, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
