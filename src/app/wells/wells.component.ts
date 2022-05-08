import { Component, OnInit } from '@angular/core';
import { Well } from '../models/Well';
import { WellsService } from '../services/wells.service';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

  constructor(private wellSrv : WellsService) { }

  ngOnInit(): void {
    this.getWells()
  }
  wells : Well[] = []
  getWells() {
    this.wellSrv.allWells().subscribe( (response => {
      this.wells = response
    }))
  }
  changeStatus(id: number ) {
     this.wellSrv.changeStaus(id).subscribe( (response => {
      this.wells = response
    }))
  }

}
