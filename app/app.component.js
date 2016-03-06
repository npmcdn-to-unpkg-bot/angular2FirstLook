System.register(["angular2/core", "angular2/router", 'rxjs/Rx', './characters/characters', './dashboard/dashboard', './vehicles/vehicles', './blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, router_1, characters_1, dashboard_1, vehicles_1, blocks_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (characters_1_1) {
                characters_1 = characters_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (vehicles_1_1) {
                vehicles_1 = vehicles_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_service) {
                    this._service = _service;
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Characters', link: ['Characters'] },
                        { caption: 'Vehicles', link: ['Vehicles'] }
                    ];
                }
                AppComponent.prototype.resetDb = function () {
                    this._service.activate("yeah", "fuck");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'story-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, blocks_1.SpinnerComponent, blocks_1.ToastComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            blocks_1.SpinnerService,
                            blocks_1.ToastService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent, useAsDefault: true },
                        { path: '/vehicles/...', name: 'Vehicles', component: vehicles_1.VehiclesComponent },
                        { path: '/characters/...', name: 'Characters', component: characters_1.CharactersComponent }
                    ]), 
                    __metadata('design:paramtypes', [blocks_1.ToastService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map