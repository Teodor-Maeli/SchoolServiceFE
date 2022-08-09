import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  orders:string[] = ['ASC','DESC'];
  totalElements:number = 0;
  page: number = 0;
  size: number = 5;
  order:string = "ASC";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<object>()



  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }




  displayedColumns: string[] = ['id', 'name', 'email', 'degree', 'operation'];



  getAll() {
    this.teacherService.getAll(this.page, this.size,this.order).subscribe(
      data => {
        setTimeout(()=>{
          this.dataSource = data.content;
          this.totalElements = data.totalElements;

        },100);
      }
    );
  }

  delete(id: number) {
    this.teacherService.delete(id).subscribe();
    setTimeout(() => { this.ngOnInit(); }, 100);
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


}
