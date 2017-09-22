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
      this.foodList = FoodList.getFoodLists(params);
      console.log(this.foodList)
    });
  }

  ngOnInit() {
    this.groceryList.push({ name: "Apples" });
    this.groceryList.push({ name: "Bananas" });
    this.groceryList.push({ name: "Oranges" });
  }
}