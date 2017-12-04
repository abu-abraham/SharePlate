"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FoodList = require("../../services/foodList");
var router_2 = require("@angular/router");
var FacebookLogin = require("../../services/facebookLogin");
var dialogs = require("ui/dialogs");
var ListComponent = (function () {
    function ListComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.groceryList = [];
        this.route.queryParams.subscribe(function (params) {
            _this.foodList = FoodList.getFoodLists(params._bodyInit);
            console.log(_this.foodList);
        });
    }
    ListComponent.prototype.addNew = function () {
        this.router.navigate(["/addNew"]);
    };
    ListComponent.prototype.onTap = function (item) {
        var dishRequest = {};
        fetch("https://1d01b2d2.ngrok.io/order/" + FacebookLogin.getUserDetails().id + "/" + item.item_id)
            .then(function (r) {
            dialogs.alert({
                title: "Request Sent",
                message: "Your request is sent for approval, please give an hour",
                okButtonText: "Ok"
            }).then(function () {
                console.log("Dialog closed!");
            });
        })
            .catch(function (error) {
            console.log(error);
        });
        console.log("CLICKED" + item.item_name);
    };
    ListComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.foodList.length; i++) {
            this.groceryList.push({ name: this.foodList[i].desc });
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBK0M7QUFDL0Msa0RBQW9EO0FBRXBELDBDQUEyRDtBQUMzRCw0REFBOEQ7QUFDOUQsb0NBQXNDO0FBT3RDLElBQWEsYUFBYTtJQUl4Qix1QkFBMkIsS0FBcUIsRUFBUyxNQUFjO1FBQXZFLGlCQUtDO1FBTDBCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUh2RSxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFJOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhCQUFNLEdBQWI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUdNLDZCQUFLLEdBQVosVUFBYSxJQUFpQjtRQUM1QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7UUFDcEIsS0FBSyxDQUFDLGtDQUFrQyxHQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0YsSUFBSSxDQUFDLFVBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSx3REFBd0Q7Z0JBQ2pFLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDO2FBQ0wsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFHSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFFSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7S0FDakUsQ0FBQztxQ0FLa0MsdUJBQWMsRUFBaUIsZUFBTTtHQUo1RCxhQUFhLENBMEN6QjtBQTFDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IEZvb2RMaXN0ID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvZm9vZExpc3QnKVxuaW1wb3J0IHtGb29kRGV0YWlsc30gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9vZERldGFpbHMnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9mYWNlYm9va0xvZ2luJylcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG4gIGZvb2RMaXN0IDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZm9vZExpc3QgPSBGb29kTGlzdC5nZXRGb29kTGlzdHMocGFyYW1zLl9ib2R5SW5pdCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2RMaXN0KVxuICAgIH0pO1xuICB9XG5cbiAgIHB1YmxpYyBhZGROZXcoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRkTmV3XCJdKVxuICB9XG5cblxuICBwdWJsaWMgb25UYXAoaXRlbTogRm9vZERldGFpbHMpe1xuICAgIGxldCBkaXNoUmVxdWVzdCA9IHt9XG4gICAgZmV0Y2goXCJodHRwczovLzFkMDFiMmQyLm5ncm9rLmlvL29yZGVyL1wiK0ZhY2Vib29rTG9naW4uZ2V0VXNlckRldGFpbHMoKS5pZCtcIi9cIitpdGVtLml0ZW1faWQpXG4gICAgLnRoZW4oKHIpID0+IHsgICAgICBcbiAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgIHRpdGxlOiBcIlJlcXVlc3QgU2VudFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciByZXF1ZXN0IGlzIHNlbnQgZm9yIGFwcHJvdmFsLCBwbGVhc2UgZ2l2ZSBhbiBob3VyXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KTtcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRFwiK2l0ZW0uaXRlbV9uYW1lKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGZvciAobGV0IGk9MDtpPHRoaXMuZm9vZExpc3QubGVuZ3RoO2krKyl7XG4gICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goe25hbWU6IHRoaXMuZm9vZExpc3RbaV0uZGVzY30pO1xuICAgIH1cblxuICB9XG59Il19