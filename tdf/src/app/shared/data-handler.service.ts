import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  //dataSelected = new EventEmitter<User[]>();

  userData : User[] = [new User('Ayan', 'Male', 'ayan@gmail.com', 8967065736), new User('Shampa', 'Female', 'shampa@gmail.com', 9332945061)];

    getuserData () {
      return this.userData;
    }

    adduserData(user : User) {

      //this.userData1 = this.userData;
      //this.userData = Object.create(this.userData1.constructor.prototype);
      //this.userData1.constructor.apply(this.userData);
      this.userData.push(user);
      //this.dataSelected.emit(this.userData);
    }

    constructor() { }
}
