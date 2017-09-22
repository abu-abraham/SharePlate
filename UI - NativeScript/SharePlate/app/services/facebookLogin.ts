import * as tnsOAuthModule from 'nativescript-oauth'
import * as Facebook from 'nativescript-facebook';
import {Observable} from 'data/observable';


var http = require("http");

class UserDetails{
    id: string;
    name: string;
    picture_url: string;
    email: string;
    birthday: Date;
    work: string;
    location: string;
    education: string;

    constructor(id,name,url,email,birthday,loc,work,education){
        this.id = id;
        this.name = name;
        this.picture_url = url;
        this.email = email;
        this.birthday = birthday;
        this.work = work;
        this.location = loc;
        this.education = education;

    }
}


class FacebookLogin {
    accessToken: string;
    userId: string;
    username: string;
    avatarUrl: string;
    userDetails : UserDetails;

    private get_latest_school(schools: any): string{
        var current_year  = new Date().getFullYear();
        var school = "None"
        for (let i = 0; i<schools.length;i++){
            try{
                let details = schools[i];
                let year = details.year.name;
                if (current_year <= year ){
                    school = details.school.name;
                }
            }
            catch(ex){
                console.log("Error "+ex);
            }
            
        }
        return school;
    }

    private get_latest_work(works: any): string{
        var current_date  = new Date();
        var organization = "None"
        for (let i = 0; i<works.length;i++){
            try{
                let details = works[i];
                let end_date = details.end_date;
                if (current_date <= end_date ){
                    organization = details.employer.name;
                }
            }
            catch(ex){
                console.log("Error "+ex);
            }
            
        }
        return organization;
    }

    private get_details_in_required_format(obj : any): UserDetails{
        return (new UserDetails(obj.id,obj.name,encodeURIComponent(obj.picture.data.url),obj.email,obj.birthday,obj.location.name,this.get_latest_work(obj.work),this.get_latest_school(obj.education)))
         
    }
        
    public bypass_login(): Promise<any>{

        var p = new Promise<any>((resolve, reject) => { 
            resolve("Done");
        });
        return p;
    }

    public login ():Promise<any> {

        var p = new Promise<any>((resolve, reject) => { 
            console.log("Here")        
            tnsOAuthModule.login().then(()=>{
                console.log("Logged IN")
                this.accessToken = tnsOAuthModule.accessToken();
                //EAAXnPkHxW28BALZCsH4uNNpxkE7DiPFlXWhz7a9gIKZAcTslOkhnNIIwaEsCUqhhz7cl8FV7WkPfrmRZBtp6AAz8WjbJMC2dws0tM1pZAG2HA5wvxRphbXrlG7vwKh5QAYfwgVsm0e3dQXvLE6iaoPFC0WDiUeTv910B0od7uAZDZD
                http.getJSON("https://graph.facebook.com" + "/me?fields=id,name,picture,email,birthday,work,location,education&access_token=" + tnsOAuthModule.accessToken())
                .then((res) => {
                    console.log("Got all info required")
                    this.userDetails = <UserDetails>this.get_details_in_required_format((res));
                    console.log(JSON.stringify(this.userDetails))
                    fetch("http://afb2abe1.ngrok.io/login/"+JSON.stringify(this.userDetails))
                    .then((r) => {
                         resolve(r);
                        })
                    .catch((error)=>{
                        console.log(error)
                        reject(error)
                    });

                })
            })
    
        });
    return p;
    }
}

export = new FacebookLogin();




