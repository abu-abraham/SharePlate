"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FacebookLogin = require("../../services/facebookLogin");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        FacebookLogin.login().then(function (response) {
            var navigationExtras = {
                queryParams: response
            };
            console.log(response);
            _this.router.navigate(["/list"], navigationExtras);
        }).catch(function () {
            console.log("Error");
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyRDtBQUMzRCw0REFBOEQ7QUFROUQsSUFBYSxjQUFjO0lBRTNCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0MsK0JBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWE7WUFDckMsSUFBSSxnQkFBZ0IsR0FBcUI7Z0JBQ3ZDLFdBQVcsRUFBRSxRQUFRO2FBQ3RCLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBSTBCLGVBQU07R0FGckIsY0FBYyxDQWdCMUI7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9mYWNlYm9va0xvZ2luJylcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG5cbn1cbiAgc3VibWl0KCkge1xuICAgIEZhY2Vib29rTG9naW4ubG9naW4oKS50aGVuKChyZXNwb25zZTogYW55KT0+e1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICBxdWVyeVBhcmFtczogcmVzcG9uc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSxuYXZpZ2F0aW9uRXh0cmFzKVxuICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpXG4gICAgICB9KVxuICB9XG59Il19