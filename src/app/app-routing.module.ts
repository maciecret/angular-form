import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  // {path: 'blog', component: BlogListComponent},
  {path: 'blog', component: BlogFormComponent, loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)},

  
  {path: 'books', component: BookFormComponent},
  // {path: '', redirectTo: 'book', pathMatch: 'full'},
  // {path: 'book', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
