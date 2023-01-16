import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';

const routes: Routes = [
  {
    path: 'blog-list',
    component: BlogFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
