
// MODULES//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar'; //-- add @angular/material --//
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS//

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './modules/blog/components/navigation-bar/navigation-bar.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';
import { CommandBarComponent } from './modules/blog/components/command-bar/command-bar.component';
import { BookItemComponent } from './modules/book/components/book-item/book-item.component';
import { UserItemComponent } from './modules/user/components/user-item/user-item.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BookFormComponent,
    CommandBarComponent,
    BookItemComponent,
    UserItemComponent,
    BlogListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
