import{_ as s,a as l}from"./chunks/index.ad186805.js";import{_ as a,i as r}from"./chunks/index.b64ed29e.js";import{o as d,c as u,a as o,w as p,u as t,h as i,g as e,b as n}from"./app.f041fb01.js";const h=i("",17),c=e("p",null," The MB board does the resetting for you. If you're using the FTDI programmer, follow the guide linked above (the one from randomnerdtutorials) ",-1),m=i("",14),f=e("p",null," You don't have to have the trackers connected to your pc for any of these steps, just powered on and connected to the Wi-Fi. ",-1),_=e("ol",null,[e("li",null,[n("Build the firmware using your current environment, if you've switched to an OTA env in the past - repeat those steps but select the environment without the "),e("code",null,"_OTA"),n(" suffix. Next, press the checkmark button to build it without uploading.")])],-1),g=i("",3),y=e("p",null,[n("Click on the select file button, and navigate to where you cloned the project and then to the "),e("code",null,"ESP/"),n(" directory.")],-1),w=e("p",null,[n("Once there, open "),e("code",null,".pio\\build\\your-environment"),n(" like so:")],-1),b=e("blockquote",null,[e("p",null,[n("By default, windows treats files and directories with a dot in front of their name as hidden. To change that - "),e("a",{href:"https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5",target:"_blank",rel:"noreferrer"},"see here")])],-1),v=e("p",null,[n("You'll find a couple files in there, select the one named "),e("code",null,"your-environment-vVersion-feature"),n(".")],-1),k=e("p",null,"like this one:",-1),T=e("ol",{start:"5"},[e("li",null,"Press upload and wait for it to finish. Done!")],-1),C=i("",8),S=e("p",null,"This will open a list of all available environments, select the one that matches your board and has a _OTA suffix",-1),A=i("",3),P=e("p",null,"Now, press the restart button on the esp itself. watch the monitor for output like this:",-1),D=i("",5),I=e("p",null," Skip this step if the update message denotes that the config had changed. If it does so, retype your credentials in the updated files. ",-1),F=i("",6),U=JSON.parse('{"title":"Building and uploading the firmware manually","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Connect your tracker to your PC","slug":"_1-connect-your-tracker-to-your-pc","link":"#_1-connect-your-tracker-to-your-pc","children":[{"level":3,"title":"Option 1: Connect ESP32-CAM via the programmer","slug":"option-1-connect-esp32-cam-via-the-programmer","link":"#option-1-connect-esp32-cam-via-the-programmer","children":[]},{"level":3,"title":"Option 2: Connect ESP32-S3 via USB-C directly","slug":"option-2-connect-esp32-s3-via-usb-c-directly","link":"#option-2-connect-esp32-s3-via-usb-c-directly","children":[]}]},{"level":2,"title":"2. Build your firmware","slug":"_2-build-your-firmware","link":"#_2-build-your-firmware","children":[]},{"level":2,"title":"3. Upload your firmware","slug":"_3-upload-your-firmware","link":"#_3-upload-your-firmware","children":[]},{"level":2,"title":"Uploading via OTA","slug":"uploading-via-ota","link":"#uploading-via-ota","children":[{"level":3,"title":"What is it?","slug":"what-is-it","link":"#what-is-it","children":[]},{"level":3,"title":"How do I use it?","slug":"how-do-i-use-it","link":"#how-do-i-use-it","children":[]}]},{"level":2,"title":"Finding the IP address of your tracker","slug":"finding-the-ip-address-of-your-tracker","link":"#finding-the-ip-address-of-your-tracker","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"relativePath":"firmware_guide/upload_and_update_firmware.md","lastUpdated":1682366995000}'),O={name:"firmware_guide/upload_and_update_firmware.md"},q=Object.assign(O,{setup(E){return(x,V)=>(d(),u("div",null,[h,o(s,{options:t(l).upload_firmware_one},{content:p(()=>[c]),_:1},8,["options"]),m,o(s,{options:t(l).upload_firmware_one},{content:p(()=>[f]),_:1},8,["options"]),_,o(a,{options:t(r).upload_firmware_build_button},null,8,["options"]),g,o(a,{options:t(r).upload_firmware_webpage},null,8,["options"]),y,w,b,o(a,{options:t(r).upload_firmware_webpage_directory},null,8,["options"]),v,k,o(a,{options:t(r).upload_firmware_webpage_directory_file},null,8,["options"]),T,o(a,{options:t(r).upload_firmware_webpage_upload_finished},null,8,["options"]),C,o(a,{options:t(r).upload_firmware_select_env},null,8,["options"]),S,o(a,{options:t(r).upload_firmware_select_env_dropdown},null,8,["options"]),A,o(a,{options:t(r).upload_firmware_image_one},null,8,["options"]),P,o(a,{options:t(r).upload_firmware_image_two},null,8,["options"]),D,o(s,{options:t(l).user_warning},{content:p(()=>[I]),_:1},8,["options"]),F]))}});export{U as __pageData,q as default};
