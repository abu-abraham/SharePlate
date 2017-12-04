import {Observable} from 'data/observable';
import {FoodDetails} from './foodDetails'



var http = require("http");


class FoodList {
    foodList : FoodDetails[];
    public getFoodLists(input: any){ 
        console.log(input)
        this.foodList = []   
        input = JSON.parse(input);    
        for(let i =0;i<input.length;i++){
            var temp :FoodDetails;
            this.foodList.push(new FoodDetails(input[i].chef_id,input[i].item_id,input[i].desc,input[i].spice_level,input[i].count,input[i].item_image,input[i].price,input[i].event_time,input[i].event_location))
        } 
    return this.foodList;
    }
}

export = new FoodList();

