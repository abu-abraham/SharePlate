"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var login_response_1 = require("./login-response");
var LOGIN_PERMISSIONS = ["public_profile", "email"];
var androidApplication;
var _act;
var loginManager;
function _registerLogoutCallback(callback) {
    exports.onLogoutCallback = callback;
}
exports._registerLogoutCallback = _registerLogoutCallback;
function init(fbId) {
    com.facebook.FacebookSdk.setAutoLogAppEventsEnabled(true);
    setAppId(fbId);
    androidApplication = application.android;
    try {
        com.facebook.FacebookSdk.sdkInitialize(androidApplication.context.getApplicationContext());
    }
    catch (e) {
        console.log("nativescript-facebook: The plugin could not find the android library, try to clean the android platform");
    }
    exports.onLoginCallback = com.facebook.CallbackManager.Factory.create();
    loginManager = com.facebook.login.LoginManager.getInstance();
    var LogoutAccessTokenTracker = com.facebook.AccessTokenTracker.extend({
        onCurrentAccessTokenChanged: function (oldToken, newToken) {
            if (oldToken != null && newToken == null && exports.onLogoutCallback) {
                exports.onLogoutCallback();
            }
        }
    });
    var accessTokenTracker = new LogoutAccessTokenTracker();
    accessTokenTracker.startTracking();
}
exports.init = init;
function _registerLoginCallback(callback) {
    var act = androidApplication.foregroundActivity || androidApplication.startActivity;
    _act = act;
    loginManager.registerCallback(exports.onLoginCallback, new com.facebook.FacebookCallback({
        onSuccess: function (result) {
            var token = result.getAccessToken().getToken();
            var loginResponse = new login_response_1.LoginResponse(token);
            callback(null, loginResponse);
        },
        onCancel: function () {
            callback(new Error('canceled'));
        },
        onError: function (e) {
            var errorMessage = "Error with Facebook";
            if (e.getErrorMessage) {
                errorMessage += ": " + e.getErrorMessage();
            }
            else if (e.getErrorCode) {
                errorMessage += ": Code " + e.getErrorCode();
            }
            else {
                errorMessage += ": " + e;
            }
            callback(new Error(errorMessage));
        }
    }));
    var onActivityResult = function (args) {
        if (exports.onLoginCallback.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
            unsubscribe();
        }
    };
    var unsubscribe = function () {
        androidApplication.off(application.AndroidApplication.activityResultEvent, onActivityResult);
    };
    androidApplication.on(application.AndroidApplication.activityResultEvent, onActivityResult);
}
exports._registerLoginCallback = _registerLoginCallback;
function setAppId(fbAppId) {
    com.facebook.FacebookSdk.setApplicationId(fbAppId);
}
function requestPublishPermissions(permissions, callback) {
    _registerLoginCallback(callback);
    var javaPermissionsList = java.util.Arrays.asList(permissions);
    loginManager.logInWithPublishPermissions(_act, javaPermissionsList);
}
exports.requestPublishPermissions = requestPublishPermissions;
function requestReadPermissions(permissions, callback) {
    _registerLoginCallback(callback);
    var javaPermissionsList = java.util.Arrays.asList(permissions);
    loginManager.logInWithReadPermissions(_act, javaPermissionsList);
}
exports.requestReadPermissions = requestReadPermissions;
function login(callback) {
    requestReadPermissions(LOGIN_PERMISSIONS, callback);
}
exports.login = login;
function logout(callback) {
    loginManager.logOut();
    if (callback) {
        callback();
    }
}
exports.logout = logout;