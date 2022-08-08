import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder , Validators}  from '@angular/forms';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent implements OnInit {


  constructor(private teacherService: TeacherService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  creationForm = this.formBuilder.group({
    name:new FormControl(''),
    email:new FormControl(''),
    degree:new FormControl('')
  });

  
  sendRequest(){
    let teacherRequest = {
      name:this.creationForm.controls['name'].value,
      email:this.creationForm.controls['email'].value,
      degree:this.creationForm.controls['degree'].value
    }

    this.teacherService.save(teacherRequest).subscribe();
    
  }
}
