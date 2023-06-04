import{_ as s,a as d}from"./chunks/index.ad186805.js";import{_ as o,i as r}from"./chunks/index.b64ed29e.js";import{o as l,c as h,a as t,u as a,w as c,h as n,g as e,b as i}from"./app.f041fb01.js";const p=n('<h1 class="text-[var(--font-accent)]" id="how-to-install-run-and-adjust-the-eyetrackvr-app" tabindex="-1">How to install, run and adjust the EyeTrackVR app. <a class="header-anchor" href="#how-to-install-run-and-adjust-the-eyetrackvr-app" aria-hidden="true">#</a></h1><h3 id="step-1-download-the-eyetrackvr-installer-and-install-the-eyetrackvr-app" tabindex="-1">Step 1: Download the EyeTrackVR Installer and install the EyeTrackVR app <a class="header-anchor" href="#step-1-download-the-eyetrackvr-installer-and-install-the-eyetrackvr-app" aria-hidden="true">#</a></h3><p>Go to the latest <a href="https://github.com/RedHawk989/EyeTrackVR/releases/latest" target="_blank" rel="noreferrer">GitHub release here</a> and download the Setup.exe file.</p><p>Follow the prompts and the app should be installed.</p><h2 id="step-2-run-the-eyetrackvr-app" tabindex="-1">Step 2: Run the EyeTrackVR app <a class="header-anchor" href="#step-2-run-the-eyetrackvr-app" aria-hidden="true">#</a></h2><p>If the <code>Create Desktop Shortcut</code> option was checked you should see an icon on your desktop, double click it to run.</p><p>You then should be greeted with a GUI that looks like this:</p>',7),u=n('<h2 id="step-3-getting-familiar-with-settings-and-terminology" tabindex="-1">Step 3: Getting familiar with settings and terminology <a class="header-anchor" href="#step-3-getting-familiar-with-settings-and-terminology" aria-hidden="true">#</a></h2><p>Let&#39;s go over some basic terminology you will find in the app.</p><p>Starting from the top:</p><h3 id="right-eye" tabindex="-1"><code>Right eye</code> <a class="header-anchor" href="#right-eye" aria-hidden="true">#</a></h3><p>Shows the right eye feed and settings only.</p><h3 id="left-eye" tabindex="-1"><code>Left eye</code> <a class="header-anchor" href="#left-eye" aria-hidden="true">#</a></h3><p>Shows the left eye feed and settings only.</p><h3 id="both-eyes" tabindex="-1"><code>Both eyes</code> <a class="header-anchor" href="#both-eyes" aria-hidden="true">#</a></h3><p>Shows both eyes&#39; feed and settings.</p><h3 id="camera-address" tabindex="-1"><code>Camera Address</code> <a class="header-anchor" href="#camera-address" aria-hidden="true">#</a></h3><p>This is where you enter the IP address of your camera. Alternatively, it can be used to put the cam number for wired cameras or pass in a video file.</p><h3 id="tracking-mode" tabindex="-1"><code>Tracking Mode</code> <a class="header-anchor" href="#tracking-mode" aria-hidden="true">#</a></h3><p>This changes the GUI to the tracking mode where it outputs values.</p><h3 id="cropping-mode" tabindex="-1"><code>Cropping Mode</code> <a class="header-anchor" href="#cropping-mode" aria-hidden="true">#</a></h3><p>This is where you will crop out your eye.</p><h3 id="threshold" tabindex="-1"><code>Threshold</code> <a class="header-anchor" href="#threshold" aria-hidden="true">#</a></h3><p>This is used to cut out things that aren&#39;t dark like your pupil.</p><h3 id="rotation" tabindex="-1"><code>Rotation</code> <a class="header-anchor" href="#rotation" aria-hidden="true">#</a></h3><p>For our method to work best, you want your eye to be level. Use this slider to adjust it to where that is the case.</p><h3 id="restart-calibrationn" tabindex="-1"><code>Restart Calibrationn</code> <a class="header-anchor" href="#restart-calibrationn" aria-hidden="true">#</a></h3><p>This will start a calibration mode for your eye where you look to all extremes.</p><h3 id="recenter-eye" tabindex="-1"><code>Recenter Eye</code> <a class="header-anchor" href="#recenter-eye" aria-hidden="true">#</a></h3><p>This will recenter your eye to whatever point you are looking at.</p><h2 id="step-4-adding-your-cameras-to-the-software-and-configuring-them" tabindex="-1">Step 4: Adding your cameras to the software and configuring them <a class="header-anchor" href="#step-4-adding-your-cameras-to-the-software-and-configuring-them" aria-hidden="true">#</a></h2><h3 id="wireless-configuration" tabindex="-1">Wireless configuration <a class="header-anchor" href="#wireless-configuration" aria-hidden="true">#</a></h3><p>Power your ESPs and find what the IP address is for your right eye. This can be done by opening both Cameras in a browser and then holding your finger over your right eye camera.</p><p>Copy that IP address and then close the browser tab with it open.</p><p>Enter that IP address into the app&#39;s <code>Camera Address</code> field.</p><p>Press the <code>Save and Restart Tracking</code> button.</p><h3 id="wired-configuration-experimental" tabindex="-1">Wired configuration (experimental) <a class="header-anchor" href="#wired-configuration-experimental" aria-hidden="true">#</a></h3><p>Find your ESPs in Device Manager and figure out their COM port numbers i. e. <code>COM4</code>.</p><p>Enter that COM port number into the app&#39;s <code>Camera Address</code> field.</p><p>Press the <code>Save and Restart Tracking</code> button.</p><h3 id="setting-up-roi" tabindex="-1">Setting up ROI <a class="header-anchor" href="#setting-up-roi" aria-hidden="true">#</a></h3><p>Don&#39;t see your camera feed? That&#39;s because we haven&#39;t set an ROI.</p>',35),g=e("p",null,[i("Now press the "),e("code",null,"Cropping Mode"),i(" button. You should see a feed of your camera.")],-1),y=e("p",null,"Put your headset on and use an application to see your desktop. (Virtual desktop, SteamVR desktop, etc.)",-1),_=e("p",null,"You should see something like this:",-1),f=e("p",null,"Now, Draw a rectangle that selects your eye.",-1),m=e("p",null,"A good example of an ROI",-1),k=e("p",null,[i("Head back over to the "),e("code",null,"Tracking mode"),i(".")],-1),w=e("p",null,[i("We will now adjust our rotation by moving the "),e("code",null,"Rotation"),i(" slider.")],-1),b=e("p",null,"From this:",-1),v=e("p",null,"To this:",-1),T=e("p",null,"Now we will adjust our threshold.",-1),x=e("p",null,"Continuing with your headset on, move the slider all the way up. start slowly backing it off until mainly only your pupil is being visualized in the threshold viewer.",-1),R=e("p",null,"Example of a threshold being too low:",-1),S=e("p",null,"Example of too high of a threshold:",-1),C=e("p",null,"Example of a good threshold:",-1),E=n('<p>Repeat everything in this step for your left eye.</p><h2 id="step-5-calibrating-your-eyes" tabindex="-1">Step 5: Calibrating your eyes <a class="header-anchor" href="#step-5-calibrating-your-eyes" aria-hidden="true">#</a></h2><p>Once your eye is trackable by the software we need to calibrate it.</p><p>Press the <code>Restart Calibration</code> button and look around. The important part is that you look to all extremes, all the way up, left, etc. Once you have done so, wait for the <code>Mode</code> to say <code>Tracking</code></p><p>The next step is to center your eye.</p><p>Look straight forward and press the <code>Recenter Eye</code> button.</p><p>Your eye is now fully calibrated.</p><p>Repeat for your other eye.</p>',8),V=e("p",null," To best center both eyes, look at one spot and hit the 'Recenter Eye' button for each eye without moving your eyes. ",-1),P=e("h2",{id:"see-anything-outdated-on-this-guide-let-me-know-prohurtz-0001",tabindex:"-1"},[i("See anything outdated on this guide? Let me know! "),e("code",null,"Prohurtz#0001"),i(),e("a",{class:"header-anchor",href:"#see-anything-outdated-on-this-guide-let-me-know-prohurtz-0001","aria-hidden":"true"},"#")],-1),z=JSON.parse('{"title":"How to install, run and adjust the EyeTrackVR app.","description":"","frontmatter":{},"headers":[{"level":3,"title":"Step 1: Download the EyeTrackVR Installer and install the EyeTrackVR app","slug":"step-1-download-the-eyetrackvr-installer-and-install-the-eyetrackvr-app","link":"#step-1-download-the-eyetrackvr-installer-and-install-the-eyetrackvr-app","children":[]},{"level":2,"title":"Step 2: Run the EyeTrackVR app","slug":"step-2-run-the-eyetrackvr-app","link":"#step-2-run-the-eyetrackvr-app","children":[]},{"level":2,"title":"Step 3: Getting familiar with settings and terminology","slug":"step-3-getting-familiar-with-settings-and-terminology","link":"#step-3-getting-familiar-with-settings-and-terminology","children":[{"level":3,"title":"Right eye","slug":"right-eye","link":"#right-eye","children":[]},{"level":3,"title":"Left eye","slug":"left-eye","link":"#left-eye","children":[]},{"level":3,"title":"Both eyes","slug":"both-eyes","link":"#both-eyes","children":[]},{"level":3,"title":"Camera Address","slug":"camera-address","link":"#camera-address","children":[]},{"level":3,"title":"Tracking Mode","slug":"tracking-mode","link":"#tracking-mode","children":[]},{"level":3,"title":"Cropping Mode","slug":"cropping-mode","link":"#cropping-mode","children":[]},{"level":3,"title":"Threshold","slug":"threshold","link":"#threshold","children":[]},{"level":3,"title":"Rotation","slug":"rotation","link":"#rotation","children":[]},{"level":3,"title":"Restart Calibrationn","slug":"restart-calibrationn","link":"#restart-calibrationn","children":[]},{"level":3,"title":"Recenter Eye","slug":"recenter-eye","link":"#recenter-eye","children":[]}]},{"level":2,"title":"Step 4: Adding your cameras to the software and configuring them","slug":"step-4-adding-your-cameras-to-the-software-and-configuring-them","link":"#step-4-adding-your-cameras-to-the-software-and-configuring-them","children":[{"level":3,"title":"Wireless configuration","slug":"wireless-configuration","link":"#wireless-configuration","children":[]},{"level":3,"title":"Wired configuration (experimental)","slug":"wired-configuration-experimental","link":"#wired-configuration-experimental","children":[]},{"level":3,"title":"Setting up ROI","slug":"setting-up-roi","link":"#setting-up-roi","children":[]}]},{"level":2,"title":"Step 5: Calibrating your eyes","slug":"step-5-calibrating-your-eyes","link":"#step-5-calibrating-your-eyes","children":[]},{"level":2,"title":"See anything outdated on this guide? Let me know! Prohurtz#0001","slug":"see-anything-outdated-on-this-guide-let-me-know-prohurtz-0001","link":"#see-anything-outdated-on-this-guide-let-me-know-prohurtz-0001","children":[]}],"relativePath":"software_guide/eyetrackvr_app_guide.md","lastUpdated":1682366995000}'),I={name:"software_guide/eyetrackvr_app_guide.md"},G=Object.assign(I,{setup(A){return(N,O)=>(l(),h("div",null,[p,t(o,{options:a(r).eyetrack_vr_guide_three},null,8,["options"]),u,t(o,{options:a(r).eyetrack_vr_guide_four},null,8,["options"]),g,y,_,t(o,{options:a(r).eyetrack_vr_guide_five},null,8,["options"]),f,m,t(o,{options:a(r).eyetrack_vr_guide_six},null,8,["options"]),k,w,b,t(o,{options:a(r).eyetrack_vr_guide_seven},null,8,["options"]),v,t(o,{options:a(r).eyetrack_vr_guide_eight},null,8,["options"]),T,x,R,t(o,{options:a(r).eyetrack_vr_guide_nine},null,8,["options"]),S,t(o,{options:a(r).eyetrack_vr_guide_ten},null,8,["options"]),C,t(o,{options:a(r).eyetrack_vr_guide_eleven},null,8,["options"]),E,t(s,{options:a(d).eyetrack_vr_guide_two},{content:c(()=>[V]),_:1},8,["options"]),P]))}});export{z as __pageData,G as default};