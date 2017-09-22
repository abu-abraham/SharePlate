"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FoodList = require("../../services/foodList");
var ListComponent = (function () {
    function ListComponent(route) {
        var _this = this;
        this.route = route;
        this.groceryList = [];
        this.route.queryParams.subscribe(function (params) {
            _this.foodList = FoodList.getFoodLists(params._bodyInit);
            console.log(_this.foodList);
        });
    }
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBK0M7QUFDL0Msa0RBQW9EO0FBT3BELElBQWEsYUFBYTtJQUl4Qix1QkFBMkIsS0FBcUI7UUFBaEQsaUJBS0M7UUFMMEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIaEQsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBSTlCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0lBRUgsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO0tBQ2pFLENBQUM7cUNBS2tDLHVCQUFjO0dBSnJDLGFBQWEsQ0FpQnpCO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgRm9vZExpc3QgPSByZXF1aXJlKCcuLi8uLi9zZXJ2aWNlcy9mb29kTGlzdCcpXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICBmb29kTGlzdCA6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5mb29kTGlzdCA9IEZvb2RMaXN0LmdldEZvb2RMaXN0cyhwYXJhbXMuX2JvZHlJbml0KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9vZExpc3QpXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGxldCBpPTA7aTx0aGlzLmZvb2RMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHtuYW1lOiB0aGlzLmZvb2RMaXN0W2ldLmRlc2N9KTtcbiAgICB9XG5cbiAgfVxufSJdfQ==