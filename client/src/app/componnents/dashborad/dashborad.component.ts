import { Component, OnInit } from '@angular/core';
import { MaaserService } from 'src/app/maaser.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  public localMaaser
  public localDonationsArr
  public localIncomesArr
  constructor(public ms: MaaserService) { }
  ngOnInit() {
    this.ms.getMaaser().subscribe(
      data => {
        this.localMaaser = data
        console.log(data)
      },
      err => console.log(err)
    )

    this.getDonations()
    this.getIncomes()
  }

  getDonations() {
    this.ms.getDonations().subscribe(
      data => {
        this.localDonationsArr = data
        console.log(data)
      },
      err => console.log(err)
    )
  }

  getIncomes() {
    this.ms.getIncomes().subscribe(
      data => {
        this.localIncomesArr = data
        console.log(data)
      },
      err => console.log(err)
    )

  }
}
