import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectModuleComponent } from './project-module/project-module.component';
import { FilterComponent } from './filter/filter.component';
import { EditComponent } from './edit/edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FormsModule } from '@angular/forms';
import { ApiResponseService } from './api-response.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterComponent,
    ProjectModuleComponent,
    EditComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [ApiResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
