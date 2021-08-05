import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/listPost', pathMatch: 'full', },
  { path: 'listPost', component: ListPostComponent },
  { path: 'updatePost/:index', component: UpdatePostComponent },
  { path: 'addPost', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
