import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/observable";

export interface CanDeactivateCurrent {
    canDeactivate(): boolean | Observable<boolean> | Promise<boolean>;
}
export class CanDeactivateCurrentImpl implements CanDeactivate<CanDeactivateCurrent>{
    canDeactivate(component: CanDeactivateCurrent,
        currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }

}