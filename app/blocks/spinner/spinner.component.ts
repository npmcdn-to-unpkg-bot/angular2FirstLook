import {Component,OnDestroy,OnInit} from "angular2/core";
import {Subscription} from "rxjs/Rx";
import {SpinnerService} from "./spinner.service";
import {ISpinnerState} from "./spinner.service";

declare var componentHandler: any;

const ACTIVE_CLASS = 'is-active';

@Component({
    selector: 'story-spinner',
    template: `
        <div class="spinner mdl-spinner mdl-js-spinner mdl-spinner--single-color" [class.is-active]="visible">

        </div>
    `,
    styles: [`.spinner {position: absolute;left: 46%;top: 12%`]
})
export class SpinnerComponent implements OnDestroy, OnInit {

    visible = false;

    private _spinnerStateChanged:Subscription;

    constructor(private _spinnerService:SpinnerService) {
    }

    ngOnDestroy():any {
        this._spinnerStateChanged.unsubscribe();
    }

    ngOnInit():any {
        componentHandler.upgradeDom();
        this._spinnerStateChanged = this._spinnerService.spinnerState
            .subscribe((state:ISpinnerState) => this.visible = state.show);
    }
}