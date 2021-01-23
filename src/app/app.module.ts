import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryComponent } from './entry/entry.component';
import { MarkdownModule, MarkedOptions} from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { EntryDisplayComponent } from './entry-display/entry-display.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { PopularComponent } from './popular/popular.component';
import { FavesComponent } from './faves/faves.component';
import { BigSearchComponent } from './big-search/big-search.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PopularService } from './popular.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntryComponent,
    KnowledgebaseComponent,
    EntryDisplayComponent,
    FooterComponent,
    CategoriesComponent,
    PopularComponent,
    FavesComponent,
    BigSearchComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    AutocompleteLibModule
  ],
  providers: [PopularService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
