import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCoursesComponent } from './courses/create-courses/create-courses.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { CreateEnrollmentsComponent } from './enrollments/create-enrollments/create-enrollments.component';
import { ListEnrollmentsComponent } from './enrollments/list-enrollments/list-enrollments.component';
import { CreateStudentsComponent } from './students/create-students/create-students.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { CreateTeachersComponent } from './teachers/create-teachers/create-teachers.component';
import { ListTeachersComponent } from './teachers/list-teachers/list-teachers.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'courses-list', component: ListCoursesComponent },
  { path: 'enrollments-list', component: ListEnrollmentsComponent },
  { path: 'students-list', component: ListStudentsComponent },
  { path: 'teachers-list', component: ListTeachersComponent },
  { path: 'teachers-create', component: CreateTeachersComponent },
  { path: 'students-create', component: CreateStudentsComponent },
  { path: 'courses-create', component: CreateCoursesComponent },
  { path: 'enrollments-create', component: CreateEnrollmentsComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: '',redirectTo:'welcome',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
