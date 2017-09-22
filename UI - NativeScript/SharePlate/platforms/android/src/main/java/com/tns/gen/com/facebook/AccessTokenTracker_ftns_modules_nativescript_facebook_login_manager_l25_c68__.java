package com.tns.gen.com.facebook;

public class AccessTokenTracker_ftns_modules_nativescript_facebook_login_manager_l25_c68__ extends com.facebook.AccessTokenTracker implements com.tns.NativeScriptHashCodeProvider {
	public AccessTokenTracker_ftns_modules_nativescript_facebook_login_manager_l25_c68__(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	protected void onCurrentAccessTokenChanged(com.facebook.AccessToken param_0, com.facebook.AccessToken param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onCurrentAccessTokenChanged", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
