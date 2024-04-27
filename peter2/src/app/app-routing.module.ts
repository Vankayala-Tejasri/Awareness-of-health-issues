import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RetComponent } from './ret/ret.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GetallComponent } from './getall/getall.component';
import { MalariaComponent } from './malaria/malaria.component';
import { CancerComponent } from './cancer/cancer.component';
import { AsthamaComponent } from './asthama/asthama.component';
import { BpComponent } from './bp/bp.component';
import { CovidintroComponent } from './covidintro/covidintro.component';
import { ChickenpoxComponent } from './chickenpox/chickenpox.component';
import { HeartattackComponent } from './heartattack/heartattack.component';
import { DiabitiesComponent } from './diabities/diabities.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { StatsComponent } from './stats/stats.component';
import { CovidtestingComponent } from './covidtesting/covidtesting.component';
import { AnemiaComponent } from './anemia/anemia.component';
import { TermsComponent } from './terms/terms.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { CovidupdatesComponent } from './covidupdates/covidupdates.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'app', component: AppComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: RetComponent },
  { path: 'main', component: MainComponent },
  { path: 'edit', component: EditComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'getall', component: GetallComponent },
  { path: 'malaria', component: MalariaComponent },
  { path: 'cancer', component: CancerComponent },
  { path: 'asthama', component: AsthamaComponent },
  { path: 'bp', component: BpComponent },
  { path: 'covidintro', component: CovidintroComponent },
  { path: 'chickenpox', component: ChickenpoxComponent },
  { path: 'heartattack', component: HeartattackComponent },
  { path: 'diabities', component: DiabitiesComponent },
  { path: 'thyroid', component: ThyroidComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'covidtesting', component: CovidtestingComponent },
  { path: 'anemia', component: AnemiaComponent },
  {path:'terms',component:TermsComponent},
  {path:'precautions',component:PrecautionsComponent},
  {path:'treatment',component:TreatmentComponent},
  {path:'covidupdates',component:CovidupdatesComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const myRountings = [
  InsertComponent,
  ReadComponent,
  DeleteComponent,
  UpdateComponent,
  AppComponent,
  CovidComponent

]