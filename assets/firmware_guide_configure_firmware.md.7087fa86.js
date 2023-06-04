import{_ as s,a as d}from"./chunks/index.ad186805.js";import{_ as a,i as n}from"./chunks/index.b64ed29e.js";import{o as c,c as l,a as t,u as i,w as h,g as e,b as o,h as r}from"./app.f041fb01.js";const u=e("h1",{class:"text-[var(--font-accent)]",id:"configuring-the-firmware",tabindex:"-1"},[o("Configuring the firmware "),e("a",{class:"header-anchor",href:"#configuring-the-firmware","aria-hidden":"true"},"#")],-1),p=e("h2",{id:"once-you-have-opened-the-project-you-should-see-something-on-the-left-side-like-this",tabindex:"-1"},[o("Once you have opened the project, you should see something on the left side like this "),e("a",{class:"header-anchor",href:"#once-you-have-opened-the-project-you-should-see-something-on-the-left-side-like-this","aria-hidden":"true"},"#")],-1),f=e("h2",{id:"open-the-ini-user-config-ini-file",tabindex:"-1"},[o("Open the "),e("code",null,"ini/user_config.ini"),o(" file "),e("a",{class:"header-anchor",href:"#open-the-ini-user-config-ini-file","aria-hidden":"true"},"#")],-1),m=r('<p>Replace the placeholder text with your correct SSID (WiFi access point name), and password respectfully.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Special characters such as <code>!</code> and <code>@</code> are not supported. If you have a special character in your password or ssid, you will need to change it.</p><p>Spaces are not supported either. If you have a space in either, you will need to change it.</p><p>The firmware supports AP mode, but it is not recommended. If you are using AP mode, you will need to set the <code>enableadhoc</code> to <code>1</code>.</p><p>Then, you will need to set the <code>ap_ssid</code> to the name of your AP, and <code>ap_password</code> to the password of your AP.</p><p>You can choose to leave the <code>ap_ssid</code> and <code>ap_password</code> as defaults, but you will need to set the <code>enableadhoc</code> to <code>1</code>.</p><blockquote><p><strong>Note</strong>: If you are enabling AP mode for both ESPs, you will need to set the <code>ap_ssid</code> and <code>ap_password</code> to different values for both ESPs. It is best to set AP mode only for one ESP, and leave the other ESP in STA mode. Connect the other ESP to the AP of the ESP in AP mode. Then connect your computer to the AP of the ESP in AP mode. This will allow you to connect to the ESP in AP mode, and the ESP in STA mode.</p></blockquote></div>',2),w=e("p",null," Make sure your wifi router has a 2.4 GHz band. While most do, this is not always the case. Setting each band (5GHz, and 2.4GHz) to different SSIDs is recommended, though not required. ",-1),g=r('<p>Double check that you have correctly entered your WiFi credentials and that said wifi network has a 2.4GHz band.</p><h3 id="additonal-configuration" tabindex="-1">Additonal configuration <a class="header-anchor" href="#additonal-configuration" aria-hidden="true">#</a></h3><h4 id="mdns" tabindex="-1"><code>mDNS</code> <a class="header-anchor" href="#mdns" aria-hidden="true">#</a></h4><p>If you do not wish to manually keep track of the ESPs IP addresses and ports, you can enable the mDNS feature. This will allow you to connect to the ESPs using the following format: <code>http://&lt;some_name&gt;.local</code>. This will only work if you are connected to the same network as the ESPs, and if you have enabled mDNS on your computer. If you are using Windows, you can enable mDNS by following <a href="./mdns">this guide</a>.</p><h4 id="ota" tabindex="-1"><code>OTA</code> <a class="header-anchor" href="#ota" aria-hidden="true">#</a></h4><p>The firmware supports OTA updates. This means that you can update the firmware without having to connect to the ESPs. To enable OTA updates, you will need to set the <code>enableota</code> to <code>1</code>. Then, you will need to set the <code>otapassword</code> to the password you wish to use to update the firmware. You will need to use this password to update the firmware. If you do not wish to use a password, you can set the <code>otapassword</code> to nothing. This will allow you to update the firmware without a password. However, this is not recommended, as anyone on your network will be able to update the firmware.</p><p>You will also need to set the <code>otaserverip</code> to the IP address of the ESP you wish to update. This is the IP address of the ESP you wish to update. If you are using mDNS, you can use the mDNS name of the ESP you wish to update. For example, if you are updating the ESP with the dns set to <code>http://esp32.local</code>, you will need to set the <code>otaserverip</code> to <code>http://esp32.local</code>.</p><h4 id="rest-api" tabindex="-1"><code>REST API</code> <a class="header-anchor" href="#rest-api" aria-hidden="true">#</a></h4><p>The firmware also supports a fully featured REST API. This means that you can control the ESPs using a REST API. This feature is enabled by defauly, and can not be turned off.</p><p>This feature is used more for advanced users, and is not required for basic operation.</p><p>The REST API was developed to be used by our new app (still in development). However, it can be used by any REST API client, you can not send POST requests to the ESPs using a browser though, so some REST API functionality can only be used by tools like <a href="https://www.thunderclient.com/" target="_blank" rel="noreferrer">Thunder Client</a> or <a href="https://www.postman.com/" target="_blank" rel="noreferrer">Postman</a>.</p><p>The full REST API is documented <a href="/firmware_guide/rest_api.html">here</a>.</p><h4 id="environments" tabindex="-1"><code>Environments</code> <a class="header-anchor" href="#environments" aria-hidden="true">#</a></h4><p>The firmware supports multiple environments. This means that we have full support for multiple types of esps. Each ESP is configured to be in a different environment. If you are using a different ESP, you will need to change the environment to the correct one. The environments are as follows:</p><ul><li><code>esp32AIThinker</code> - This is the default environment. This is for the ESP32-AI-THINKER and generic alibaba/aliexpress/amazon esp cam boards.</li><li><code>esp32Cam</code> - This is for the special ESP32-CAM, it is unlikely that you will need to use this environment.</li><li><code>esp32M5Stack</code> - This is for ESP32M5Stack.</li><li><code>esp32WRover</code> - This is for the ESP32WRover.</li><li><code>esp-eye</code> - This is for the ESP-EYE (not the S3 variant).</li><li><code>wrooms3</code> - For FREENOVE-ESP32-S3 (<em>wireless mode</em>)</li><li><code>wrooms3QIO</code> - For FREENOVE-ESP32-S3 (<em>wireless mode</em>, for boards with octal flash)</li><li><code>wrooms3USB</code> - For FREENOVE-ESP32-S3 (<em>wired mode</em>)</li><li><code>wrooms3QIOUSB</code> - For FREENOVE-ESP32-S3 (<em>wired mode</em>, for boards with octal flash)</li><li><code>xiaosenses3_release</code> - For SeedStudio&#39;s XAIO ESP32-S3 Sense (<em>wireless mode</em>)</li><li><code>xiaosenses3_USB_release</code> - For SeedStudio&#39;s XAIO ESP32-S3 Sense (<em>wired mode</em>) Each environment has a <code>debug</code> and <code>release</code> configuration. The <code>debug</code> configuration is for debugging, and the <code>release</code> configuration is for production. The <code>debug</code> configuration is not recommended for production, as it will use more memory, and will be slower. However we recommend using the <code>debug</code> configuration for initial configuration and testing, as it will be easier to debug, for you and for us. Once you are confident that the firmware is working correctly, you can switch to the <code>release</code> configuration.</li></ul><p>The <code>debug</code> configuration will print out debug messages to the serial port. The <code>release</code> configuration will not print out debug messages to the serial port, and will only print errors. This will save memory, and will make the firmware faster.</p><p>The default configutration is <code>debug</code> for the <code>espAIThinker</code> environment. If you are using a different ESP, please follow the GIF(s) below to change the environment.</p><div class="tip custom-block"><p class="custom-block-title">Coming Soon</p><p>GIF(s) for changing the environment will be added soon.</p><p>Want to help? <a href="https://github.com/RedHawk989/EyeTrackVR-Docs" target="_blank" rel="noreferrer">Submit a PR</a> to add the GIF(s).</p></div><div class="tip custom-block"><p class="custom-block-title">Coming Soon</p><p>We are working on a new app that will allow you to configure the firmware, flash the boards, and connect to Social VR Games using a GUI. This will make it easier to configure the firmware, and will allow you to configure the firmware without having to use/download <code>VSCode</code> or our <code>platformio</code> project. We are hard at work on this, but do not currently have a release date. Please check back frequently.</p></div><h2 id="now-move-on-to-uploading-the-firmware" tabindex="-1"><a href="/firmware_guide/upload_and_update_firmware.html">Now, move on to uploading the firmware</a> <a class="header-anchor" href="#now-move-on-to-uploading-the-firmware" aria-hidden="true">#</a></h2>',20),v=JSON.parse('{"title":"Configuring the firmware","description":"","frontmatter":{},"headers":[{"level":2,"title":"Once you have opened the project, you should see something on the left side like this","slug":"once-you-have-opened-the-project-you-should-see-something-on-the-left-side-like-this","link":"#once-you-have-opened-the-project-you-should-see-something-on-the-left-side-like-this","children":[]},{"level":2,"title":"Open the ini/user_config.ini file","slug":"open-the-ini-user-config-ini-file","link":"#open-the-ini-user-config-ini-file","children":[{"level":3,"title":"Additonal configuration","slug":"additonal-configuration","link":"#additonal-configuration","children":[]}]},{"level":2,"title":"Now, move on to uploading the firmware","slug":"now-move-on-to-uploading-the-firmware","link":"#now-move-on-to-uploading-the-firmware","children":[]}],"relativePath":"firmware_guide/configure_firmware.md","lastUpdated":1685903742000}'),y={name:"firmware_guide/configure_firmware.md"},k=Object.assign(y,{setup(S){return(_,b)=>(c(),l("div",null,[u,p,t(a,{options:i(n).configure_firmware_one},null,8,["options"]),f,t(a,{options:i(n).configure_firmware_two},null,8,["options"]),m,t(s,{options:i(d).parts_list_one},{content:h(()=>[w]),_:1},8,["options"]),g]))}});export{v as __pageData,k as default};
