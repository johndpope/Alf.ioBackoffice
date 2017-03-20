import { EventHeaderComponent } from './pages/event-header/event-header.component';
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AccountModule } from "./shared/account/account.module"
import { IosAccountIconComponent } from "./pages/ios-account-icon/ios-account-icon.component";
import { AppComponent } from "./app.component";
import { DialogContent } from "./pages/staff/event-detail/dialog-content.component"
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        AccountModule
    ],
    entryComponents: [DialogContent],
    declarations: [
        AppComponent,
        EventHeaderComponent,
        IosAccountIconComponent,
        DialogContent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}