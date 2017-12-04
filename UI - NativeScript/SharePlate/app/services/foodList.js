"use strict";
var foodDetails_1 = require("./foodDetails");
var http = require("http");
var FoodList = (function () {
    function FoodList() {
    }
    FoodList.prototype.getFoodLists = function (input) {
        console.log(input);
        this.foodList = [];
        input = JSON.parse(input);
        for (var i = 0; i < input.length; i++) {
            var temp;
            this.foodList.push(new foodDetails_1.FoodDetails(input[i].chef_id, input[i].item_id, input[i].desc, input[i].spice_level, input[i].count, input[i].item_image, input[i].price, input[i].event_time, input[i].event_location));
        }
        return this.foodList;
    };
    return FoodList;
}());
module.exports = new FoodList();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb29kTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQXlDO0FBSXpDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUczQjtJQUFBO0lBWUEsQ0FBQztJQVZVLCtCQUFZLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM3QixJQUFJLElBQWlCLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtRQUMzTSxDQUFDO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVELGlCQUFTLElBQUksUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge0Zvb2REZXRhaWxzfSBmcm9tICcuL2Zvb2REZXRhaWxzJ1xuXG5cblxudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG5jbGFzcyBGb29kTGlzdCB7XG4gICAgZm9vZExpc3QgOiBGb29kRGV0YWlsc1tdO1xuICAgIHB1YmxpYyBnZXRGb29kTGlzdHMoaW5wdXQ6IGFueSl7IFxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgdGhpcy5mb29kTGlzdCA9IFtdICAgXG4gICAgICAgIGlucHV0ID0gSlNPTi5wYXJzZShpbnB1dCk7ICAgIFxuICAgICAgICBmb3IobGV0IGkgPTA7aTxpbnB1dC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHZhciB0ZW1wIDpGb29kRGV0YWlscztcbiAgICAgICAgICAgIHRoaXMuZm9vZExpc3QucHVzaChuZXcgRm9vZERldGFpbHMoaW5wdXRbaV0uY2hlZl9pZCxpbnB1dFtpXS5pdGVtX2lkLGlucHV0W2ldLmRlc2MsaW5wdXRbaV0uc3BpY2VfbGV2ZWwsaW5wdXRbaV0uY291bnQsaW5wdXRbaV0uaXRlbV9pbWFnZSxpbnB1dFtpXS5wcmljZSxpbnB1dFtpXS5ldmVudF90aW1lLGlucHV0W2ldLmV2ZW50X2xvY2F0aW9uKSlcbiAgICAgICAgfSBcbiAgICByZXR1cm4gdGhpcy5mb29kTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCA9IG5ldyBGb29kTGlzdCgpO1xuXG4iXX0=