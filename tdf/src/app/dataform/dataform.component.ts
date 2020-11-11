import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../shared/data-handler.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {

  userModel : User =new User('', '', '', null);

  constructor(private dataService : DataHandlerService)
  {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let temp = Object.assign({}, this.userModel);
    //var temp =new User(this.userModel.name, this.userModel.gender, this.userModel.email, this.userModel.phone);

    this.dataService.adduserData(temp);
  }

}
