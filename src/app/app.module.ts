import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { CreateStudentsComponent } from './students/create-students/create-students.component';
import {MatTableModule} from '@angular/material/table'; 
import { ListTeachersComponent } from './teachers/list-teachers/list-teachers.component';
import { CreateTeachersComponent } from './teachers/create-teachers/create-teachers.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CreateEnrollmentsComponent } from './enrollments/create-enrollments/create-enrollments.component';
import { ListEnrollmentsComponent } from './enrollments/list-enrollments/list-enrollments.component';
import { ListCoursesComponent } from './courses/list-courses/list-courses.component';
import { CreateCoursesComponent } from './courses/create-courses/create-courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListStudentsComponent,
    CreateStudentsComponent,
    ListTeachersComponent,
    CreateTeachersComponent,
    SideNavComponent,
    CreateEnrollmentsComponent,
    ListEnrollmentsComponent,
    ListCoursesComponent,
    CreateCoursesComponent

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSelectModule
 
  

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
