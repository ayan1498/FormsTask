import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DataformComponent } from './dataform/dataform.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DataHandlerService } from './shared/data-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    DataformComponent,
    DatalistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
