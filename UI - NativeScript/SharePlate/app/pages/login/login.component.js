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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyRDtBQUMzRCw0REFBOEQ7QUFROUQsSUFBYSxjQUFjO0lBRTNCLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsQyxDQUFDO0lBQ0MsK0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWE7WUFDckMsSUFBSSxnQkFBZ0IsR0FBcUI7Z0JBQ3ZDLFdBQVcsRUFBRSxRQUFRO2FBQ3RCLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQUkwQixlQUFNO0dBRnJCLGNBQWMsQ0FlMUI7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgRmFjZWJvb2tMb2dpbiA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL2ZhY2Vib29rTG9naW4nKVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcblxufVxuICBzdWJtaXQoKSB7XG4gICAgRmFjZWJvb2tMb2dpbi5sb2dpbigpLnRoZW4oKHJlc3BvbnNlOiBhbnkpPT57XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiByZXNwb25zZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSxuYXZpZ2F0aW9uRXh0cmFzKVxuICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpXG4gICAgICB9KVxuICB9XG59Il19