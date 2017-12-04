import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular"
import {FoodDetails} from '../../services/foodDetails'
import { Router, NavigationExtras } from "@angular/router";
import FacebookLogin = require('../../services/facebookLogin')
import { Page } from "ui/page";

import { TextField } from "ui/text-field";
@Component({
  selector: "list",
  templateUrl: "pages/addNew/addNew.html",
  styleUrls: ["pages/addNew/addNew-common.css"]
})
export class AddNewComponent implements OnInit {

    constructor(private router: Router,private routerExtensions: RouterExtensions,private page: Page){
        
        }

   public back(){
    console.log("Back")
    this.routerExtensions.backToPreviousPage();
  }

  public done(){
    let dishName = this.page.getViewById<TextField>("dishName").text;
    let dishPrice = this.page.getViewById<TextField>("dishPrice").text;
    let dischDesc = this.page.getViewById<TextField>("dishDesc").text;
    let dishCount = this.page.getViewById<TextField>("dishCount").text;
    let eventLocation = this.page.getViewById<TextField>("eventLocation").text;
    var foodDetails: FoodDetails = new FoodDetails(FacebookLogin.getUserDetails().id,null,dischDesc,7,dishCount,null,dishPrice,null,eventLocation,dishName); 
    
    fetch("https://1d01b2d2.ngrok.io/item/"+JSON.stringify(foodDetails))
    .then((r) => {
      let navigationExtras: NavigationExtras = {
        queryParams: r
      };
      this.router.navigate(["/list"],navigationExtras)
        })
    .catch((error)=>{
        console.log(error)
    });
  }


  ngOnInit() {
    console.log(FacebookLogin.getUserDetails().id)

  }
}