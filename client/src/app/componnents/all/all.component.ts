import { Component, OnInit } from '@angular/core';
import { MaaserService } from 'src/app/maaser.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public localArr
  constructor(public ms: MaaserService) { }

  ngOnInit() {
    this.getDonations()
  }

  getDonations() {
    this.ms.getDonations().subscribe(
      data => {
        this.localArr = data
        console.log(data)
      },
      err => console.log(err)
    )
  }

  getIncomes() {
    this.ms.getIncomes().subscribe(
      data => {
        this.localArr = data
        console.log(data)
      },
      err => console.log(err)
    )
  }

}
