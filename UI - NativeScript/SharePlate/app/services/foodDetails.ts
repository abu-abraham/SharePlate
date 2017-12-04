export class FoodDetails{
    chef_id: string;
    item_id: string;
    desc: string;
    spice_level: number;
    count: number;
    item_image: ImageData;
    price: number;
    event_time: string;
    event_location: string;
    item_name?:string;


    constructor(chef_id,item_id,desc,spice_level,count,item_image,price,event_time,event_location,item_name=null){
        this.chef_id = chef_id;
        this.item_id = item_id;
        this.desc = desc;
        this.spice_level = spice_level;
        this.count = count;
        this.item_image = item_image;
        this.price = price;
        this.event_time = event_time;
        this.event_location = event_location;
        this.item_name = item_name

    }
}