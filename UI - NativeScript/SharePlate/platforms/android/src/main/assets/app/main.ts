import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as tnsOAuthModule from 'nativescript-oauth';

var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: '1661629463878511',
    clientSecret: '386d64f6ad67c1c417035abd458c8013',
    scope: ['email','user_work_history'] 
  };
 
  tnsOAuthModule.initFacebook(facebookInitOptions);

platformNativeScriptDynamic().bootstrapModule(AppModule);
