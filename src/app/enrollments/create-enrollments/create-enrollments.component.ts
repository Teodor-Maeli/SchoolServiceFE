import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { EnrollmentsService } from '../enrollments.service';

@Component({
  selector: 'app-create-enrollments',
  templateUrl: './create-enrollments.component.html',
  styleUrls: ['./create-enrollments.component.css']
})
export class CreateEnrollmentsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private enrollmentsService: EnrollmentsService) { }

  ngOnInit(): void {
  }

  creationForm = this.formBuilder.group({
    cId:new FormControl(),
    sId:new FormControl()
});

sendRequest(){

  this.enrollmentsService.send(this.creationForm.controls['cId'].value, this.creationForm.controls['sId'].value).subscribe()
}

}
