import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  orders:string[] = ['ASC','DESC'];
  totalElements:number = 0;
  page: number = 0;
  size: number = 5;
  order:string = "ASC";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<object>()

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }


   displayedColumns: string[] = ['id', 'name', 'age', 'email','operation'];
   

  getAll(){
    this.studentService.getAll(this.page,this.size,this.order).subscribe(result=>{
      setTimeout(() => {
        this.dataSource = result.content;
        this.totalElements = result.totalElements;
        this.size = result.size;
      },100);

    });
  }

  delete(id:number){
    this.studentService.delete(id).subscribe();
    setTimeout(() => {this.ngOnInit();}, 200);
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
