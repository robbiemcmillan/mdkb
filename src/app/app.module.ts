import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryComponent } from './entry/entry.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { EntryDisplayComponent } from './entry-display/entry-display.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopularService } from './popular.service';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SearchBarComponent } from './search-bar/search-bar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntryComponent,
    KnowledgebaseComponent,
    EntryDisplayComponent,
    FooterComponent,
    CategoriesComponent,
    MainSearchComponent,
    HomeComponent,
    HeaderComponent,
    AboutmeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
