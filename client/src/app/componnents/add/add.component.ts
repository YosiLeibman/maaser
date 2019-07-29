import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaaserService } from 'src/app/maaser.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public myForm: FormGroup
  constructor(public fb: FormBuilder, public ms: MaaserService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      destenation: "",
      description: "",
      sum: 0
    })
  }

  send() {
    console.log(this.myForm.value.destenation)
    this.ms.add(this.myForm.value.destenation, this.myForm.value).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
