import{_ as s,a as l}from"./chunks/index.6357e563.js";import{_ as a,i as r}from"./chunks/index.3d9efac3.js";import{o as d,c as u,a as o,w as p,u as t,h as n,g as e,b as i}from"./app.cf6e716a.js";const h=n('<h1 class="text-[var(--font-accent)]" id="building-and-uploading-the-firmware-manually" tabindex="-1">Building and uploading the firmware manually <a class="header-anchor" href="#building-and-uploading-the-firmware-manually" aria-hidden="true">#</a></h1><p>Uploading your firmware must initially be done over cable. Once you have the tracker connected to your WiFi after your first firmware update, you can opt to use <a href="#how-do-i-use-it">OTA</a> in the future.</p><h2 id="_1-connect-your-tracker-to-your-pc-via-the-programmer" tabindex="-1">1. Connect your tracker to your PC via the programmer <a class="header-anchor" href="#_1-connect-your-tracker-to-your-pc-via-the-programmer" aria-hidden="true">#</a></h2><p>First, connect your ESP32-Cam to your programmer. In the case of the ESP32-Cam-MB board, it&#39;s as simple as sticking it into the socket the way it came in the package and then connecting it to your PC with a micro-USB cable. In some cases, there is a button labeled <code>IOO</code> on the programmer. If that button exists make sure to hold it in while you plug the programmer into your pc, once plugged in you can release the button.</p><p>In the case of an FTDI programmer, the steps aren&#39;t as easy, so grab <a href="https://randomnerdtutorials.com/program-upload-code-esp32-cam/" target="_blank" rel="noreferrer">this guide</a> for how to set it up.</p><h2 id="_2-build-your-firmware" tabindex="-1">2. Build your firmware <a class="header-anchor" href="#_2-build-your-firmware" aria-hidden="true">#</a></h2><ol><li>Press the build button at the bottom of Visual Studio Code.</li></ol><blockquote><p>This builds the firmware, but does not send it to the ESP yet.</p></blockquote><p><img src="https://i.imgur.com/EmSkhFp.png" alt="img"></p><h2 id="_3-upload-your-firmware" tabindex="-1">3. Upload your firmware <a class="header-anchor" href="#_3-upload-your-firmware" aria-hidden="true">#</a></h2><ul><li><p>If you are using the OTA method, skip to the <a href="#how-do-i-use-it">OTA section below</a>.</p></li><li><p>Once the firmware has been built, press the upload button to upload the firmware.</p><p>This sends the firmware to the ESP. <img src="https://i.imgur.com/lI3PFVC.png" alt="img"></p></li></ul>',11),c=e("p",null," The MB board does the resetting for you. If you're using the FTDI programmer, follow the guide linked above (the one from randomnerdtutorials) ",-1),m=n('<ul><li><p>If the upload is successful, you should get an output that looks like this:</p><p><img src="https://i.imgur.com/SDQcCr1.png" alt="img"></p></li></ul><p>Congratulations! You have now successfully uploaded the firmware to your EyeTrackVR Tracker!</p><p>If you have trouble with uploading your firmware over cable check the following:</p><ol><li>Make sure your USB cable from the tracker is plugged firmly into your PC.</li><li>Make sure that your USB cable is a data and charging cable (it is suggested you try other cables or devices with the cable).</li><li>Make sure that your drivers are up-to-date.</li><li>Some ports might not work, try other ones.</li></ol><p>Additionally, this can be caused by software hogging COM ports (<strong>VSCode and Cura can be the cause of this</strong>).</p><h2 id="uploading-via-ota" tabindex="-1">Uploading via OTA <a class="header-anchor" href="#uploading-via-ota" aria-hidden="true">#</a></h2><h3 id="what-is-it" tabindex="-1">What is it? <a class="header-anchor" href="#what-is-it" aria-hidden="true">#</a></h3><p>OTA stands for <code>Over The Air</code>, and it is a way to update your firmware without having to connect your device to your computer.</p><h3 id="how-do-i-use-it" tabindex="-1">How do I use it? <a class="header-anchor" href="#how-do-i-use-it" aria-hidden="true">#</a></h3><p>To use OTA, you need to have working firmware on your ESPs first. Follow <a href="#Building-and-uploading-the-firmware-manually">the manual building guide</a></p><p>Once you have manually flashed the firmware at least once, you can use the <code>OTA</code> environment to upate your ESPs.</p><div class="tip custom-block"><p class="custom-block-title">Coming Soon</p><p>Currently, we only support OTA using the provided web interface, but we are working on a new app, where you will be able to upload your firmware to your ESPs over WiFi straight from the app.</p></div><h4 id="for-firmware-versions-1-1-0-and-up" tabindex="-1">For firmware versions 1.1.0 and up: <a class="header-anchor" href="#for-firmware-versions-1-1-0-and-up" aria-hidden="true">#</a></h4><p>Since version 1.1.0 we&#39;ve switched from using OTA via platformio to a more user-friendly approach.</p>',14),f=e("p",null," You don't have to have the trackers connected to your pc for any of these steps, just powered on and connected to the Wi-Fi. ",-1),_=e("ol",null,[e("li",null,[i("Build the firmware using your current environment, if you've switched to an OTA env in the past - repeat those steps but select the environment without the "),e("code",null,"_OTA"),i(" suffix. Next, press the checkmark button to build it without uploading.")])],-1),g=n('<ol start="2"><li><p>Turn on your trackers and wait for them to connect to Wi-Fi</p></li><li><p>Locate their ip or mDNS name. For mDNS, the default is: <a href="http://openiristracker.local/" target="_blank" rel="noreferrer">http://openiristracker.local/</a></p></li><li><p>Having done that, open <a href="http://openiristracker.local:81/update" target="_blank" rel="noreferrer">http://&lt;your-up-or-mdns-name&gt;:81/update</a> in your browser</p></li></ol><p>for example: <a href="http://openiristracker.local:81/update" target="_blank" rel="noreferrer">http://openiristracker.local/</a></p><p>This should open a page similar to this:</p>',3),y=e("p",null,[i("Click on the select file button, and navigate to where you cloned the project and then to the "),e("code",null,"ESP/"),i(" directory.")],-1),w=e("p",null,[i("Once there, open "),e("code",null,".pio\\build\\your-environment"),i(" like so:")],-1),b=e("blockquote",null,[e("p",null,[i("By default, windows treats files and directories with a dot in front of their name as hidden. To change that - "),e("a",{href:"https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5",target:"_blank",rel:"noreferrer"},"see here")])],-1),v=e("p",null,[i("You'll find a couple files in there, select the one named "),e("code",null,"your-environment-vVersion-feature"),i(".")],-1),k=e("p",null,"like this one:",-1),T=e("ol",{start:"5"},[e("li",null,"Press upload and wait for it to finish. Done!")],-1),A=n(`<h4 id="for-firmware-versions-of-1-0-0-and-under" tabindex="-1">For firmware versions of 1.0.0 and under: <a class="header-anchor" href="#for-firmware-versions-of-1-0-0-and-under" aria-hidden="true">#</a></h4><ol><li>Retrieve the IP or mDNS name of the tracker you wish to flash. The IP can be found through network monitoring applications, or by viewing tracker output in a serial monitor.</li><li>In the <code>ini/user_config.ini</code> file: <ul><li>Put IP or hostname of device into config file</li></ul></li></ol><p>Like so:</p><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[ota]</span></span>
<span class="line"><span style="color:#F07178;">enableota</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#F07178;">otaserverip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">openiristrackerL.local</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># here we use a custom mDNS name</span></span>
<span class="line"><span style="color:#F07178;">otapassword</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12345678</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">otaserverport</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3232</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>Change to OTA env</li></ol><p>To do that, in visual studio code, locate the uplaod button, next to it will be listed a couple of buttons and your current environment.</p><p>For example, if you have a working <code>esp32AIThinker</code> environment, you would change your environment to <code>esp32AIThinker_OTA</code>.</p><p>Click on it.</p>`,8),C=e("p",null,"This will open a list of all available environments, select the one that matches your board and has a _OTA suffix",-1),S=n('<ol start="4"><li>Restart the ESPs, they <strong><em>must</em></strong> be power cycled</li><li>Press the upload button to upload the firmware.<br><br><img src="https://i.imgur.com/lI3PFVC.png" alt="img"></li><li>Do not touch esps or move them during OTA upload</li><li>Wait around 1 minute.</li><li>Repeat for as many trackers as you need.</li></ol><h2 id="finding-the-ip-address-of-your-tracker" tabindex="-1">Finding the IP address of your tracker <a class="header-anchor" href="#finding-the-ip-address-of-your-tracker" aria-hidden="true">#</a></h2><p>Connect your tracker to your PC and then open a serial monitor in VSC by pressing the <code>plug</code> icon.</p>',3),D=e("p",null,"Now, press the restart button on the esp itself. watch the monitor for output like this:",-1),I=n('<p>The text, highlighted in green for demonstration, is the stream address of the camera. Take note of this for input into the software.</p><p>Keep in mind while testing and getting set up, the ESP can only have one client, to use the camera in the app, make sure you close the browser tab you tested it in.</p><h1 id="updating-the-firmware-to-the-newest-version" tabindex="-1">Updating the firmware to the newest version <a class="header-anchor" href="#updating-the-firmware-to-the-newest-version" aria-hidden="true">#</a></h1><p>To update the firmware you&#39;ll need to follow a couple of steps.</p><ol><li><p>Open a terminal and enter the directory you&#39;ve cloned OpenIris into, for example <code>cd D:/OpenIris/</code></p></li><li><p>Save your current changes to the config using <code>git stash</code></p></li><li><p>Download the newest changes from the repo using <code>git pull</code></p></li><li><p>Apply your saved changes so that you don&#39;t have to retype your WI-FI credentials using <code>git stash apply</code></p></li></ol>',5),F=e("p",null," Skip this step if the update message denotes that the config had changed. If it does so, retype your credentials in the updated files. ",-1),P=n('<p>4.1. If anything went wrong, you can reset everything to the default state using <code>git reset --hard</code> and then retyping your credentials</p><ol start="5"><li>Upload your firmware <a href="#Building-and-uploading-the-firmware-manually">following steps from the uploading section</a></li></ol><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><p>If you encountered an issue while following these steps check the <a href="./../misc/faq">FAQ.</a></p><p>If you don&#39;t find an answer to your question there ask in <strong>#questions</strong> channel in <a href="https://discord.gg/kkXYbVykZX" target="_blank" rel="noreferrer">the discord</a>, we will be happy to help.</p><p><em>Adapted from the SlimeVR docs, Some Credit goes to the SlimeVR team <a href="https://docs.slimevr.dev/firmware/setup-and-install.html" target="_blank" rel="noreferrer">here</a></em></p>',6),U=JSON.parse('{"title":"Building and uploading the firmware manually","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Connect your tracker to your PC via the programmer","slug":"_1-connect-your-tracker-to-your-pc-via-the-programmer","link":"#_1-connect-your-tracker-to-your-pc-via-the-programmer","children":[]},{"level":2,"title":"2. Build your firmware","slug":"_2-build-your-firmware","link":"#_2-build-your-firmware","children":[]},{"level":2,"title":"3. Upload your firmware","slug":"_3-upload-your-firmware","link":"#_3-upload-your-firmware","children":[]},{"level":2,"title":"Uploading via OTA","slug":"uploading-via-ota","link":"#uploading-via-ota","children":[{"level":3,"title":"What is it?","slug":"what-is-it","link":"#what-is-it","children":[]},{"level":3,"title":"How do I use it?","slug":"how-do-i-use-it","link":"#how-do-i-use-it","children":[]}]},{"level":2,"title":"Finding the IP address of your tracker","slug":"finding-the-ip-address-of-your-tracker","link":"#finding-the-ip-address-of-your-tracker","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"relativePath":"firmware_guide/upload_and_update_firmware.md","lastUpdated":1680370214000}'),O={name:"firmware_guide/upload_and_update_firmware.md"},q=Object.assign(O,{setup(V){return(x,E)=>(d(),u("div",null,[h,o(s,{options:t(l).upload_firmware_one},{content:p(()=>[c]),_:1},8,["options"]),m,o(s,{options:t(l).upload_firmware_one},{content:p(()=>[f]),_:1},8,["options"]),_,o(a,{options:t(r).upload_firmware_build_button},null,8,["options"]),g,o(a,{options:t(r).upload_firmware_webpage},null,8,["options"]),y,w,b,o(a,{options:t(r).upload_firmware_webpage_directory},null,8,["options"]),v,k,o(a,{options:t(r).upload_firmware_webpage_directory_file},null,8,["options"]),T,o(a,{options:t(r).upload_firmware_webpage_upload_finished},null,8,["options"]),A,o(a,{options:t(r).upload_firmware_select_env},null,8,["options"]),C,o(a,{options:t(r).upload_firmware_select_env_dropdown},null,8,["options"]),S,o(a,{options:t(r).upload_firmware_image_one},null,8,["options"]),D,o(a,{options:t(r).upload_firmware_image_two},null,8,["options"]),I,o(s,{options:t(l).user_warning},{content:p(()=>[F]),_:1},8,["options"]),P]))}});export{U as __pageData,q as default};
