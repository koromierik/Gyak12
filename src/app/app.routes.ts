import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesHomeComponent } from "./movies-home/movies-home.component";
import { AddMoviesComponent } from "./add-movies/add-movies.component";


const routes: Routes = [
    {path: '', component: MoviesHomeComponent },
    {path: 'addMovie', component: AddMoviesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
