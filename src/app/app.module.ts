import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { InternshipComponent } from './internship/internship.component';
import { PlacementComponent } from './placement/placement.component';
import { GovComponent } from './gov/gov.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
// import { InternshipContentComponent } from './internship-content/internship-content.component';
// import { CoursesContentComponent } from './courses-content/courses-content.component';
// import { GovContentComponent } from './gov-content/gov-content.component';
// import { PlacementContentComponent } from './placement-content/placement-content.component';
import { JobComponent } from './resumesuggestion/job.component';
import { CountdownModule } from 'ngx-countdown';
import { Job1000Component } from './jobs/job1000/job1000.component';
import { Job1001Component } from './jobs/job1001/job1001.component';
import { Link1000Component } from './links/link1000/link1000.component';
import { Link1001Component } from './links/link1001/link1001.component';
import { Job1003Component } from './jobs/job1003/job1003.component';
import { Job1004Component } from './jobs/job1004/job1004.component';
import { Job1005Component } from './jobs/job1005/job1005.component';
import { Job1006Component } from './jobs/job1006/job1006.component';
import { Job1007Component } from './jobs/job1007/job1007.component';
import { Job1008Component } from './jobs/job1008/job1008.component';
import { Job1009Component } from './jobs/job1009/job1009.component';
import { Job1010Component } from './jobs/job1010/job1010.component';
import { Job1011Component } from './jobs/job1011/job1011.component';
import { Job1012Component } from './jobs/job1012/job1012.component';
import { Job1013Component } from './jobs/job1013/job1013.component';
import { Job1014Component } from './jobs/job1014/job1014.component';
import { Job1015Component } from './jobs/job1015/job1015.component';
import { Job1016Component } from './jobs/job1016/job1016.component';
import { Job1017Component } from './jobs/job1017/job1017.component';
import { Job1018Component } from './jobs/job1018/job1018.component';
import { Job1019Component } from './jobs/job1019/job1019.component';
import { Job1020Component } from './jobs/job1020/job1020.component';
import { Job1021Component } from './jobs/job1021/job1021.component';
import { Job1022Component } from './jobs/job1022/job1022.component';
import { Job1023Component } from './jobs/job1023/job1023.component';
import { Job1024Component } from './jobs/job1024/job1024.component';
import { Job1025Component } from './jobs/job1025/job1025.component';
import { Link1002Component } from './links/link1002/link1002.component';
import { Link1003Component } from './links/link1003/link1003.component';
import { Link1004Component } from './links/link1004/link1004.component';
import { Link1005Component } from './links/link1005/link1005.component';
import { Link1006Component } from './links/link1006/link1006.component';
import { Link1007Component } from './links/link1007/link1007.component';
import { Link1008Component } from './links/link1008/link1008.component';
import { Link1009Component } from './links/link1009/link1009.component';
import { Link1010Component } from './links/link1010/link1010.component';
import { Link1011Component } from './links/link1011/link1011.component';
import { Link1012Component } from './links/link1012/link1012.component';
import { Link1013Component } from './links/link1013/link1013.component';
import { Link1014Component } from './links/link1014/link1014.component';
import { Link1015Component } from './links/link1015/link1015.component';
import { Link1016Component } from './links/link1016/link1016.component';
import { Link1017Component } from './links/link1017/link1017.component';
import { Link1018Component } from './links/link1018/link1018.component';
import { Link1019Component } from './links/link1019/link1019.component';
import { Link1020Component } from './links/link1020/link1020.component';
import { Link1021Component } from './links/link1021/link1021.component';
import { Link1022Component } from './links/link1022/link1022.component';
import { Link1023Component } from './links/link1023/link1023.component';
import { Link1024Component } from './links/link1024/link1024.component';
import { Link1025Component } from './links/link1025/link1025.component';
import { Link1026Component } from './links/link1026/link1026.component';
import { CoursecontentComponent } from './coursecontent/coursecontent.component';
import { InternshipcontentComponent } from './internshipcontent/internshipcontent.component';
import { PlacementcontentComponent } from './placementcontent/placementcontent.component';
import { GovcontentComponent } from './govcontent/govcontent.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    PlacementComponent,
    GovComponent,
    CoursesComponent,
    HomeComponent,
    JobComponent,
    // InternshipContentComponent,
    // CoursesContentComponent,
    // GovContentComponent,
    // PlacementContentComponent,
    Job1000Component,
    Job1001Component,
    Job1003Component,
    Job1004Component,
    Job1005Component,
    Job1006Component,
    Job1007Component,
    Job1008Component,
    Job1009Component,
    Job1010Component,
    Job1011Component,
    Job1012Component,
    Job1013Component,
    Job1014Component,
    Job1015Component,
    Job1016Component,
    Job1017Component,
    Job1018Component,
    Job1019Component,
    Job1020Component,
    Job1021Component,
    Job1022Component,
    Job1023Component,
    Job1024Component,
    Job1025Component,
    Link1000Component,
    Link1001Component,
    Link1002Component,
    Link1003Component,
    Link1004Component,
    Link1005Component,
    Link1006Component,
    Link1007Component,
    Link1008Component,
    Link1009Component,
    Link1010Component,
    Link1011Component,
    Link1012Component,
    Link1013Component,
    Link1014Component,
    Link1015Component,
    Link1016Component,
    Link1017Component,
    Link1018Component,
    Link1019Component,
    Link1020Component,
    Link1021Component,
    Link1022Component,
    Link1023Component,
    Link1024Component,
    Link1025Component,
    Link1026Component,
    CoursecontentComponent,
    InternshipcontentComponent,
    PlacementcontentComponent,
    GovcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    CountdownModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
