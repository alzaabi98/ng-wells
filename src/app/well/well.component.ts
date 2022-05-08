import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Well } from '../models/Well';
import { WellsService } from '../services/wells.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  id!: number;
  well!: Well;
  constructor(private route: ActivatedRoute,private wellSrv : WellsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log(params['id'])
      this.id = params['id']
      this. getWell()
    })
  }

    getWell() {
    this.wellSrv.getWell(this.id).subscribe( (response => {
      console.log(response)
      this.well = response
    }))
  }
  disabledColor = "#393739"
  enabledColor = "#59FF06"
  // change valve status in backend
  changeStatus(id: number, name: string ) {
    if (id == -1) {
      this.toastr.error("Invalid Well Id", "Error", { timeOut:1000})
      return
    }
     this.wellSrv.changeStaus(id).subscribe( (response => {
      this.getWell()
      this.showSuccess(name)
    }))
  }
  /// change status by name of valve
  changeStatusByName(name : string) {
    let id = this.valveIdBasedOnName(name);
    this.changeStatus(id, name)
  }
  /// get valve id  by name
  valveIdBasedOnName(name: string) : number {

    let valve = this.well.valves.find( valve => valve.name == name )

    if (valve) {
      console.log(valve.id)
      return valve.id
    } else {
      return -1
    }
  }
  /// get valve status by name
  statusByValveName(name: string) : boolean {
    let valve = this.well.valves.find( valve => valve.name == name )

    if (valve) {
      console.log(valve.id)
      return valve.status
    } else {
      return false
    }
  }

  showSuccess(name: string) {
    this.toastr.success( `(${name}) Valve Installation Status was updated.`, 'Updated',  {
      timeOut: 900
    });

  }

}
