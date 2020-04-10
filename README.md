There is two way to implement Firebase Phone Authentication in the Cordova application. first, by using Cordova plugin another is using firebase-js-sdk .

If you go with the first option, you’ll have to find a Cordova plugin which also provides all the Firebase services otherwise, your Cordova plugin authenticated user will not work with firebase-js-sdk services eg. you’ll unable to perform database CRUD operations.

And, if you go with the second option, you have to configure a lot of things related to Captcha/reCaptcha. You can see here in the official document.

Don’t worry we are not implementing all these kinds of stuff, Here we’re going to use firebase-js-sdk with Firebase Phone Authentication without Captcha and ReactJS application in a simple way, You don’t need to learn the whole React for this but if you want to use React with Cordova, you can get many examples on the Medium or Google.

https://medium.com/@BHAR4T/cordova-with-firebase-phone-authentication-without-captcha-6663427920d9
