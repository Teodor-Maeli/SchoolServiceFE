import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  creationForm = this.formBuilder.group({
    name:new FormControl(''),
    duration:new FormControl()
});

sendRequest(){
  let courseRequest = {
    name:this.creationForm.controls['name'].value,
    duration:this.creationForm.controls['duration'].value
  }

  this.coursesService.send(courseRequest);
}

}