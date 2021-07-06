import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserAuth } from "./user.auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userAuth: UserAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userAuth.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        )
    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(route, state);
    }

}