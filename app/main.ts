import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from "./app.component";

bootstrap(AppComponent,[])
    .then(success => console.log("Bootstrap success"))
    .then(error => console.log(error));
