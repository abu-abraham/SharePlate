import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import FoodList = require('../../services/foodList')

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];
  foodList : any;

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.foodList = FoodList.getFoodLists(params._bodyInit);
      console.log(this.foodList)
    });
  }

  ngOnInit() {
    for (let i=0;i<this.foodList.length;i++){
      this.groceryList.push({name: this.foodList[i].desc});
    }

  }
}