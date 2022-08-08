import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnrollmentsService } from '../enrollments.service';
import { Enrollments } from './enrollments';

@Component({
  selector: 'app-list-enrollments',
  templateUrl: './list-enrollments.component.html',
  styleUrls: ['./list-enrollments.component.css']
})
export class ListEnrollmentsComponent implements OnInit {
  orders: string[] = ['ASC', 'DESC'];
  length!: number;
  pageIndex: number = 0;
  pageSize: number = 5;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<object>()
  enrolls: Enrollments[] = [];
  displayedColumns: string[] = ['id', 'studentId', 'student', 'course', 'grades', 'operation'];
  enrollments!: any;
  reversed:boolean = false;
  @ViewChild(MatPaginator)

  paginator!: MatPaginator;

  constructor(private enrollmentsService: EnrollmentsService) { }

  ngOnInit(): void {
    this.getAll()
    setTimeout(() => {
      this.length = this.enrollments.length;
    }, 1000)
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  firstLastButtons: boolean = true;


  getAll() {
    this.enrollmentsService.getAll().subscribe(data => {
      this.enrollments = data;
      this.dataSource.data = data;
    });
  }

  changePage(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAll();
  }

  reverse(order: string) {

    if (order == "DESC" && this.reversed === false) {
      this.dataSource.data.reverse();
      this.reversed = true;
      this.ngAfterViewInit();
    }else if(order === "ASC" && this.reversed === true){
      this.reversed =false;
      this.dataSource.data.reverse();
      this.ngAfterViewInit();
    }

  }

  delete(sId: number) {
    this.enrollmentsService.delete(sId,).subscribe();
    setTimeout(() => {
       this.ngOnInit();
       }, 200);
  }





}
