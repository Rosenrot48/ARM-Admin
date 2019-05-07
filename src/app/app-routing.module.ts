import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileChangeComponent} from './profile-change/profile-change.component';
import {TreeComponent} from './tree/tree.component';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';
import {EditComponent} from './edit/edit.component';
import {AddObjectComponent} from './add-object/add-object.component';



const routes: Routes = [
  { path: '', component: TreeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profileChange', component: ProfileChangeComponent},
  { path: 'list', component: ListComponent},
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'add-object', component: AddObjectComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
