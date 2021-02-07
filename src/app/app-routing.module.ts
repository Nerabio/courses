import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';

const routes: Routes = [
  {path: '', component: CoursesListComponent},
  {path: 'index.html', component: CoursesListComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: 'course-details/:id', component: CourseDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
