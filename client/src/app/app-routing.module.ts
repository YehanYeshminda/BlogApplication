import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {BlogListComponent} from "./components/blog-list/blog-list.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: '', component: BlogsComponent
  },
  {
    path: 'list', component: BlogListComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
