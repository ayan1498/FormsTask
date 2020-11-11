import { Component } from '@angular/core';
import { DataHandlerService } from './shared/data-handler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataHandlerService]
})
export class AppComponent {
  title = 'tdf';
}
