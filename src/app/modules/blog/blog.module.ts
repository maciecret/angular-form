import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatInputModule
  ]
})
export class BlogModule { 

  // blogFunction = () => {
  //   let userModule = new UserModule()
  //   userModule.userModuleMethod()
  // }

}
