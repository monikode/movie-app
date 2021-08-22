import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomePipe } from './components/home.pipe';
import { LoginPipe } from './pages/login.pipe';
import { MoviePipe } from './pages/movie.pipe';
import { WatchlistPipe } from './pages/watchlist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    HomePipe,
    LoginPipe,
    MoviePipe,
    WatchlistPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
