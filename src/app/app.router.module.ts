import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard.service";
import { ErrordisplayComponent } from "./errordisplay/errordisplay.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerResolverService } from "./server-resolver.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { CanDeactivateCurrentImpl } from "./servers/server.deactivate";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children:
            [{ path: ':id/:name', component: UserComponent }]
    },
    {
        path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children:
            [{ path: ':id', component: ServerComponent,resolve:{server:ServerResolverService} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateCurrentImpl] }]
    },
    // { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'page-not-found', component: ErrordisplayComponent, data: {message:'error in loading page' }},
    { path: '**', redirectTo: '/page-not-found' }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoute,{useHash:true})],
    exports: [RouterModule]
})
export class AppRouterModule {

}