import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Well } from '../models/Well';
import { TreeService } from '../services/tree.service';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  fillColor = 'rgb(255,0,0)';
  disabledColor = "#393739"
  enabledColor = "#59FF06"

  changeColor () {
      const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
  constructor(private treeService : TreeService) {

   }

  ngOnInit(): void {

    this.getWells()

  }
   wells : Well[] = [];
  getWells()  {

      this.treeService.allWells().subscribe( (response) => {
        this.wells = response
        console.log(this.wells);
      },
      (error) => {
        console.log(error)
      }
      );

  }

  updateVale(id : number) {
    console.log(id)
        this.treeService.updateVale(id).subscribe( (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }
      );
  }

}
