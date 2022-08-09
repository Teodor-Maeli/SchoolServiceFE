import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { Teacher } from 'src/app/teachers/teacher';
import { TeacherService } from 'src/app/teachers/teacher.service';
import { Course } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  orders:string[] = ['ASC','DESC'];
  totalElements:number = 0;
  page: number = 0;
  size: number = 5;
  order:string = "ASC";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<object>()
  teachers:Teacher[]= [];

  constructor(private coursesService: CoursesService,private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getAll();
    this.loadTeachers();
  }
  
  displayedColumns: string[] = ['id', 'name', 'duration', 'teacherId', 'teacher','operation','select'];
  

  getAll() {
    this.coursesService.getAll(this.page,this.size,this.order).subscribe(result => {
      this.dataSource = result.content
        this.totalElements = result.totalElements;
    })
  }

  delete(id: number) {
    this.coursesService.delete(id).subscribe();
    setTimeout(() => {
       this.ngOnInit();
       }, 200);
  }

  pageChanged(event: any) {
    this.size = event.pageSize;
    this.page = event.pageIndex;
    this.getAll();
  }


  selectOrder(event:any){
    this.order = event;
    this.getAll();
  }


  loadTeachers(){
    this.teacherService.getAll(0,20,'ASC').subscribe(data=>{
      this.teachers = data.content;
      
    })
  }

  assignTeacher(courseId:number,teacherId:number){
    this.coursesService.assignTeacher(courseId,teacherId).subscribe();
    console.log(teacherId,courseId)
    setTimeout(()=>{
      this.ngOnInit();
    },1000);

  }

}
