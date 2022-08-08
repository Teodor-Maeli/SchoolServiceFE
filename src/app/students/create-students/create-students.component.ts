import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  creationForm = this.formBuilder.group({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  sendRequest() {
    let teacherRequest = {
      name: this.creationForm.controls['name'].value,
      age: this.creationForm.controls['age'].value,
      email: this.creationForm.controls['email'].value
    }
    this.studentService.save(teacherRequest).subscribe();
  }
}



