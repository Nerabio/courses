import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxBoxModule, DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDrawerModule, DxDropDownBoxModule, DxGanttModule, DxListModule, DxSchedulerModule, DxTextAreaModule, DxTextBoxModule, DxToolbarModule } from 'devextreme-angular';
import { NavigationComponent } from './navigation/navigation.component';
import { CourseService }  from './services/course.service';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { EventService } from './services/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




// Руссификация DevExpress компонентов
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeRu);

import { locale, loadMessages } from "devextreme/localization";
locale('ru');

import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';
import ruMessages from 'devextreme/localization/messages/ru.json';
import ruCldrData from 'devextreme-cldr-data/ru.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';
import Globalize from 'globalize';

Globalize.load(ruCldrData, supplementalCldrData);
Globalize.loadMessages(ruMessages);
Globalize.locale('ru');

@NgModule({
  declarations: [	
    AppComponent,
    NavigationComponent,
    CoursesListComponent,
    CourseDetailsComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxButtonModule,
    DxSchedulerModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxBoxModule,
    DxDropDownBoxModule,
    DxDataGridModule,
    DxGanttModule
  ],
  providers: [CourseService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
