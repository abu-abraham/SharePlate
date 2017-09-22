import {Observable} from 'data/observable';


var http = require("http");

class FoodDetails{
    chef_id: string;
    item_id: string;
    desc: string;
    spice_level: number;
    count: number;
    item_image: ImageData;
    price: number;
    event_time: string;
    event_location: string;


    constructor(chef_id,item_id,desc,spice_level,count,item_image,price,event_time,event_location){
        this.chef_id = chef_id;
        this.item_id = name;
        this.desc = desc;
        this.spice_level = spice_level;
        this.count = count;
        this.item_image = item_image;
        this.price = price;
        this.event_time = event_time;
        this.event_location = event_location;

    }
}


class FoodList {
    foodList : FoodDetails[];
    public getFoodLists(input: any){        
        for(let i =0;i<input.length;i++){
            var temp :FoodDetails;
            this.foodList.push(new FoodDetails(input[i].chef_id,input[i].item_id,input[i].desc,input[i].spice_level,input[i].count,input[i].item_image,input[i].price,input[i].event_time,input[i].event_location))
        } 
    return this.foodList;
    }
}

export = new FoodList();




