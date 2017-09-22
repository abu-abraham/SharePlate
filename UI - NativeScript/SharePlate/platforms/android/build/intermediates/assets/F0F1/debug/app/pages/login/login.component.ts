import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import FacebookLogin = require('../../services/facebookLogin')

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent {

constructor(private router: Router){

}
  submit() {
    FacebookLogin.login().then((response: any)=>{
        let navigationExtras: NavigationExtras = {
          queryParams: response
        };
        this.router.navigate(["/list"],navigationExtras)
      }).catch(()=>{
          console.log("Error")
      })
  }
}