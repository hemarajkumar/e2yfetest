
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListPageComponent } from './student-list-page/student-list-page.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {CharacterDetailResolver} from "./student-details/character-detail-resolver";

const routes: Routes = [
    {
        path: "",
        component: StudentListPageComponent
    },
    {
        path: 'studentDetails/:id',
        component: StudentDetailsComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
