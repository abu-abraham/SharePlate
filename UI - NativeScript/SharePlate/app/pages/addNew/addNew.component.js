"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var foodDetails_1 = require("../../services/foodDetails");
var router_1 = require("@angular/router");
var FacebookLogin = require("../../services/facebookLogin");
var page_1 = require("ui/page");
var AddNewComponent = (function () {
    function AddNewComponent(router, routerExtensions, page) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    AddNewComponent.prototype.back = function () {
        console.log("Back");
        this.routerExtensions.backToPreviousPage();
    };
    AddNewComponent.prototype.done = function () {
        var _this = this;
        var dishName = this.page.getViewById("dishName").text;
        var dishPrice = this.page.getViewById("dishPrice").text;
        var dischDesc = this.page.getViewById("dishDesc").text;
        var dishCount = this.page.getViewById("dishCount").text;
        var eventLocation = this.page.getViewById("eventLocation").text;
        var foodDetails = new foodDetails_1.FoodDetails(FacebookLogin.getUserDetails().id, null, dischDesc, 7, dishCount, null, dishPrice, null, eventLocation, dishName);
        fetch("https://1d01b2d2.ngrok.io/item/" + JSON.stringify(foodDetails))
            .then(function (r) {
            var navigationExtras = {
                queryParams: r
            };
            _this.router.navigate(["/list"], navigationExtras);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddNewComponent.prototype.ngOnInit = function () {
        console.log(FacebookLogin.getUserDetails().id);
    };
    return AddNewComponent;
}());
AddNewComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/addNew/addNew.html",
        styleUrls: ["pages/addNew/addNew-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, nativescript_angular_1.RouterExtensions, page_1.Page])
], AddNewComponent);
exports.AddNewComponent = AddNewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkTmV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZE5ldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkRBQXVEO0FBQ3ZELDBEQUFzRDtBQUN0RCwwQ0FBMkQ7QUFDM0QsNERBQThEO0FBQzlELGdDQUErQjtBQVEvQixJQUFhLGVBQWU7SUFFeEIseUJBQW9CLE1BQWMsRUFBUyxnQkFBa0MsRUFBUyxJQUFVO1FBQTVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU1RixDQUFDO0lBRUMsOEJBQUksR0FBWDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLDhCQUFJLEdBQVg7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBWSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVksV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25FLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFZLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRSxJQUFJLFdBQVcsR0FBZ0IsSUFBSSx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUV4SixLQUFLLENBQUMsaUNBQWlDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRSxJQUFJLENBQUMsVUFBQyxDQUFDO1lBQ04sSUFBSSxnQkFBZ0IsR0FBcUI7Z0JBQ3ZDLFdBQVcsRUFBRSxDQUFDO2FBQ2YsQ0FBQztZQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUM5QyxDQUFDLENBQUM7YUFDTCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFaEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO0tBQzlDLENBQUM7cUNBRzhCLGVBQU0sRUFBMkIsdUNBQWdCLEVBQWUsV0FBSTtHQUZ2RixlQUFlLENBb0MzQjtBQXBDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiXG5pbXBvcnQge0Zvb2REZXRhaWxzfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb29kRGV0YWlscydcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBGYWNlYm9va0xvZ2luID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvZmFjZWJvb2tMb2dpbicpXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2FkZE5ldy9hZGROZXcuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2FkZE5ldy9hZGROZXctY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBZGROZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBwYWdlOiBQYWdlKXtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgcHVibGljIGJhY2soKXtcbiAgICBjb25zb2xlLmxvZyhcIkJhY2tcIilcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgZG9uZSgpe1xuICAgIGxldCBkaXNoTmFtZSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxUZXh0RmllbGQ+KFwiZGlzaE5hbWVcIikudGV4dDtcbiAgICBsZXQgZGlzaFByaWNlID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJkaXNoUHJpY2VcIikudGV4dDtcbiAgICBsZXQgZGlzY2hEZXNjID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJkaXNoRGVzY1wiKS50ZXh0O1xuICAgIGxldCBkaXNoQ291bnQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8VGV4dEZpZWxkPihcImRpc2hDb3VudFwiKS50ZXh0O1xuICAgIGxldCBldmVudExvY2F0aW9uID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFRleHRGaWVsZD4oXCJldmVudExvY2F0aW9uXCIpLnRleHQ7XG4gICAgdmFyIGZvb2REZXRhaWxzOiBGb29kRGV0YWlscyA9IG5ldyBGb29kRGV0YWlscyhGYWNlYm9va0xvZ2luLmdldFVzZXJEZXRhaWxzKCkuaWQsbnVsbCxkaXNjaERlc2MsNyxkaXNoQ291bnQsbnVsbCxkaXNoUHJpY2UsbnVsbCxldmVudExvY2F0aW9uLGRpc2hOYW1lKTsgXG4gICAgXG4gICAgZmV0Y2goXCJodHRwczovLzFkMDFiMmQyLm5ncm9rLmlvL2l0ZW0vXCIrSlNPTi5zdHJpbmdpZnkoZm9vZERldGFpbHMpKVxuICAgIC50aGVuKChyKSA9PiB7XG4gICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHJcbiAgICAgIH07XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSxuYXZpZ2F0aW9uRXh0cmFzKVxuICAgICAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhGYWNlYm9va0xvZ2luLmdldFVzZXJEZXRhaWxzKCkuaWQpXG5cbiAgfVxufSJdfQ==