import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    title:"Home",
    component:HomeComponent,
    path:''
  },
  {
    title:"Blog",
    component:BlogComponent,
    path:'blog'
  },
  {
    title:"Users",
    component:UsersComponent,
    path:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
