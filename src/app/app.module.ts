import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';

import { AppComponent } from './app.component';
import { DragulaComponent } from './components/dragula/dragula.component';
import { SmoothDndComponent } from './components/smooth-dnd/smooth-dnd.component';

const routes: Routes = [
  { path: 'smoothdnd', component: SmoothDndComponent },
  { path: 'dragula', component: DragulaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DragulaComponent,
    SmoothDndComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DragulaModule.forRoot(),
    NgxSmoothDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
