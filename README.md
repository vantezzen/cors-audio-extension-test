# CORS + WebExtension AudioContext Test

This extension is a simple test to see how/if CORS can be unblocked by webextensions to allow `audioContext.createMediaElementSource` on elements that were previously CORS-protected.

> Disclaimer: This extension is a basic Proof-of-concept for testing. Do not leave it turned on as it will remove CORS protection from Google content - potentially leaving your Google account at risk!

The extension tries to open an AudioContext analyzer on videos playing on yewtube (invidious) which normally fails due to CORS issues. If the CORS unblock failed, you will see "MediaElementAudioSource outputs zeroes due to CORS access restrictions for https://yewtu.be/latest_version?id=DQ8orIurGxw" in the console - the goal it to not have this appear.

With Manifest v2 it uses "webRequest", with Manifest v3 it uses the "declarativeNetRequest" API to add a "Access-Control-Allow-Origin: \*" header to the video requests.

## Usage

1. Clone the repository
2. Install the extension into the browser using `manifest.json` (Manifest v3/Chrome) or `manifest_v2.json` (Manifest v2/Firefox)
   > When using with Firefox, rename "manifest_v2.json" to "manifest.json"
3. Open https://yewtu.be/watch?v=DQ8orIurGxw
