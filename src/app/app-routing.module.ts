import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipComponent } from './internship/internship.component';
import { PlacementComponent } from './placement/placement.component';
import { GovComponent } from './gov/gov.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './resumesuggestion/job.component';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'internship_opportunities', component: InternshipComponent},
  { path: 'placement', component: PlacementComponent},
  { path: 'government_opportunities', component: GovComponent },
  { path: 'free_courses', component: CoursesComponent},
  { path: 'home', component: HomeComponent},
  { path: 'job1000', component: Job1000Component},
  { path: 'job1001', component: Job1001Component},
  { path: 'link1000', component: Link1000Component},
  { path: 'link1001', component: Link1001Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
