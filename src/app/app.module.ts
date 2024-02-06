import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule} from  
import { AppComponent } from "./app.component";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { AddMoviesComponent } from "./add-movies/add-movies.component";

@NgModule({
    declarations: [
        AppComponent,
        ToolBarComponent,
        MoviesHomeComponent,
        AddMoviesComponent

],
imports: [
        BrowserModule,
        AppRoutingModule

],
providers: [],
bootstrap: [AppComponent]

})

export class AppModule {}

