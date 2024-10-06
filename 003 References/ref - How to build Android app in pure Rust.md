---
identifier: 202409181713
---
traits: [[rust]] [[Android]] #discussion
refs: https://www.reddit.com/r/rust/comments/17dr46y/can_i_make_mobile_app_especially_android_entirely/
# How to build Android app in pure Rust
(replied by @coderstephen)
Yes, you can. I have, and I am. Currently all of the pieces are in place for making this possible, but not necessarily neatly packaged up for an easy onboarding experience and you may have to write some annoying plumbing code to get things working.

I'm writing Android apps using the following crates:
- egui
- eframe (glow backend)
- android-activity
- cargo-ndk -> [[repo - cargo ndk]]
- winit
    
App works great and is very responsive and fast, and 100% Rust with not a single line of Java, Kotlin, or Gradle. Just need an `AndroidManifest.xml` and set your activity to `android.app.NativeActivity`.

However, building an APK takes some work and I've found most of the tools out there lacking, so currently I just have a `Makefile` that calls out to the necessary Android SDK command line tools to build a final APK. The gist of it is essentially:
1. Use `cargo ndk` to build `.so`s for the architectures you want to support
2. Use [aapt2](https://developer.android.com/tools/aapt2) to prepare the files to include in your APK and then zip them into an APK file
3. Use `zipalign` to align the archive structure
4. Use `apksigner` to sign with your key
    
And boom, out spits an APK that will install and run on an Android device or emulator.

Once my app is released I'm hoping to extract some of the common stuff into maybe a project template or something so that it is easier to quickstart an Android app. I've also been submitting bugfixes to various lower-level projects I am relying on as I go to ensure compiling to Android works out of the box. One currently to be aware of is that there are some important bugfixes in winit 0.29 for Android just released, but most of the ecosystem may be using 0.28 for a while. I have a branch that backports some those to 0.28 just for myself but hopefully it won't be necessary for much longer.