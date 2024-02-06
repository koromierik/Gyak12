import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {Appmodule} from 'app'

if (environment.production) {
  enableProdMode();

}

platformBrowserDynamic().bootstrapModule(Appmodule).catch( err => console.error());