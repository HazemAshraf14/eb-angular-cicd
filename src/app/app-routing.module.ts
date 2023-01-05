import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './component/login/login.component';
import { TagsInfoComponent } from './component/tags-info/tags-info.component';
import { AuthenticationGuard } from './service/authentication.guard';
// import { GraphComponent } from './component/ph-graph/ph-graph.component';

const routes: Routes = [
  { component: LoginComponent, path: "login" },
  
  { component: TagsInfoComponent, path: "tags-info", canActivate: [AuthenticationGuard] },
  {  path: "**" ,redirectTo: 'tags-info' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
