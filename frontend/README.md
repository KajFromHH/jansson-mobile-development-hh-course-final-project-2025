Add text about frontend...

L) Known technical problems:

1) There is problems in /android directory with following error message:

"The supplied phased action failed with an exception.
A problem occurred configuring root project 'VN_APP'.
A problem occurred evaluating root project 'VN_APP'.
Failed to apply plugin 'com.facebook.react.rootproject'.
A problem occurred configuring project ':app'.
SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at 
'C:\...\jansson-mobile-development-hh-course-final-project-2025\frontend\android\local.properties'."

According to Microsoft Co-pilot, this error message means 
that my Windows workstation doesn't know where the Android SDK.
This is a requirement for native builds such as EAS Build
or running npx react-native run-android.

It is similar like in my Software Development course,
when we need specify JAVA_HOME environment variables
to absolutely correct path for installed Java in each 
our workstations. Otherwise, our Java with Gradle -backend
can't never able to build an java jar in the workstations.

However, since I'm already testing my app functionality
in my Android phone (Samsung Galaxy A20 model) and 
Android SDK is NOT required for enabling app to work 
in Android devices, I didn't see a need to fix this problem now.