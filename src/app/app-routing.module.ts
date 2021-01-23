import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { EntryComponent } from './entry/entry.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'id', component: EntryComponent, pathMatch:'full'},
  { path: 'kb', component: KnowledgebaseComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
