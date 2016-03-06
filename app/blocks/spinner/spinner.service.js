System.register(["angular2/core", "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var SpinnerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            SpinnerService = (function () {
                function SpinnerService() {
                    this._spinnerSubject = new Rx_1.Subject();
                    this.spinnerState = this._spinnerSubject;
                }
                SpinnerService.prototype.show = function () {
                    this._spinnerSubject.next({ show: true });
                };
                SpinnerService.prototype.hide = function () {
                    this._spinnerSubject.next({ show: false });
                };
                SpinnerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SpinnerService);
                return SpinnerService;
            }());
            exports_1("SpinnerService", SpinnerService);
        }
    }
});
//# sourceMappingURL=spinner.service.js.map