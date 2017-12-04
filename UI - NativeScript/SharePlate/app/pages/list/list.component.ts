import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import FoodList = require('../../services/foodList')
import {FoodDetails} from '../../services/foodDetails';
import { Router, NavigationExtras } from "@angular/router";
import FacebookLogin = require('../../services/facebookLogin')
import * as dialogs from "ui/dialogs";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];
  foodList : any;

  public constructor(private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.foodList = FoodList.getFoodLists(params._bodyInit);
      console.log(this.foodList)
    });
  }

   public addNew(){
    this.router.navigate(["/addNew"])
  }


  public onTap(item: FoodDetails){
    let dishRequest = {}
    fetch("https://1d01b2d2.ngrok.io/order/"+FacebookLogin.getUserDetails().id+"/"+item.item_id)
    .then((r) => {      
      dialogs.alert({
          title: "Request Sent",
          message: "Your request is sent for approval, please give an hour",
          okButtonText: "Ok"
      }).then(() => {
          console.log("Dialog closed!");
      });
        })
    .catch((error)=>{
        console.log(error)
    });

    
    console.log("CLICKED"+item.item_name);
  }

  ngOnInit() {
    for (let i=0;i<this.foodList.length;i++){
      this.groceryList.push({name: this.foodList[i].desc});
    }

  }
}