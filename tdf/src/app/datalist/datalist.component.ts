import { Component, Input, OnInit } from '@angular/core';
import { DataHandlerService } from '../shared/data-handler.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  userData : User[];


  constructor(private dataService :  DataHandlerService) { }

  ngOnInit() {
    this.userData = this.dataService.getuserData();
    //this.dataService.dataSelected.subscribe(
      //(userData : User[]) => {
        //this.userData = userData;
      //}
    //)
  }

}
