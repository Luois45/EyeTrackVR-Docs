import{_ as o,i as a}from"./chunks/index.9f7265df.js";import{o as i,c as s,G as n,b as r,V as l,z as e,a as t}from"./chunks/framework.7384f92b.js";const d=l('<h1 class="text-[var(--font-accent)]" id="setting-up-the-environment" tabindex="-1">Setting up the environment <a class="header-anchor" href="#setting-up-the-environment" aria-label="Permalink to &quot;Setting up the environment {.text-[var(--font-accent)]}&quot;">​</a></h1><p>This procedure will show how to prepare your system for uploading the firmware to your tracker.</p><h2 id="_1-install-visual-studio-code" tabindex="-1">1. Install Visual Studio Code <a class="header-anchor" href="#_1-install-visual-studio-code" aria-label="Permalink to &quot;1. Install Visual Studio Code&quot;">​</a></h2><p>Download the <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">latest Visual Studio Code</a> and install it.</p><h3 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h3><br>',6),h=e("h3",{id:"install",tabindex:"-1"},[t("Install "),e("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),c=e("br",null,null,-1),_=l('<h2 id="_2-install-the-drivers" tabindex="-1">2. Install the drivers <a class="header-anchor" href="#_2-install-the-drivers" aria-label="Permalink to &quot;2. Install the drivers&quot;">​</a></h2><p>In order to flash the firmware, you&#39;ll need some drivers, mainly the CH340 drivers, here&#39;s where to get them from:</p><p><a href="https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all" target="_blank" rel="noreferrer">https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all</a></p><h2 id="_3-install-platformio-ide" tabindex="-1">3. Install PlatformIO IDE <a class="header-anchor" href="#_3-install-platformio-ide" aria-label="Permalink to &quot;3. Install PlatformIO IDE&quot;">​</a></h2><p>Once Visual Studio Code is installed, open it and install <a href="https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide" target="_blank" rel="noreferrer">PlatformIO IDE for VSCode</a>, an extension that will allow you to connect to the tracker, build and upload the firmware.</p>',5),p=l('<h2 id="_4-clone-the-firmware-project" tabindex="-1">4. Clone the firmware project <a class="header-anchor" href="#_4-clone-the-firmware-project" aria-label="Permalink to &quot;4. Clone the firmware project&quot;">​</a></h2><p>Make sure you close any current projects you have open or open a new window before moving forward with these steps.</p><ol><li>Go to <a href="https://github.com/EyeTrackVR/OpenIris" target="_blank" rel="noreferrer">https://github.com/EyeTrackVR/OpenIris</a> and <code>clone</code> the latest version from the <code>main</code> branch. <ol><li><p>If you do not have <code>git</code> installed please install it from <a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">here</a>.</p></li><li><p>Open Git Bash.</p></li></ol></li></ol>',3),u=e("ol",null,[e("li",null,[t("Change the directory to the directory that you want the firmware to be cloned. Ex: "),e("code",null,"cd C:/")])],-1),m=e("ol",null,[e("li",null,[t("Clone the repository by entering the command: "),e("code",null,"git clone https://github.com/EyeTrackVR/OpenIris.git")])],-1),f=e("p",null,[t("For more info about cloning please refer to "),e("a",{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",target:"_blank",rel:"noreferrer"},"this documentation")],-1),g=e("p",null,[e("em",null,[e("strong",null,"Do not download as a zip")]),t(" - please only properly clone the project, take note of the path you run the clone command in, this is where the files will be downloaded. When we open it in PlatformIO later, this path will be needed.")],-1),w=e("ol",null,[e("li",null,[t("Open the firmware in VSCode by going to PlatformIO, selecting open, then navigating to "),e("code",null,"OpenIris/ESP"),t(" folder and opening it.")])],-1),v=e("p",null,[e("em",null,[t("This is an adaptation from SlimeVR. Some Credit goes to the SlimeVR team "),e("a",{href:"https://docs.slimevr.dev/firmware/setup-and-install.html",target:"_blank",rel:"noreferrer"},"adapted from here")])],-1),V=JSON.parse('{"title":"Setting up the environment","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/setup_vscode.md","filePath":"firmware_guide/setup_vscode.md","lastUpdated":1689532703000}'),b={name:"firmware_guide/setup_vscode.md"},P=Object.assign(b,{setup(I){return(k,S)=>(i(),s("div",null,[d,n(o,{options:r(a).setup_vscode_image_one},null,8,["options"]),h,c,n(o,{options:r(a).setup_vscode_image_two},null,8,["options"]),_,n(o,{options:r(a).setup_vscode_image_three},null,8,["options"]),p,n(o,{options:r(a).setup_vscode_image_four},null,8,["options"]),u,n(o,{options:r(a).setup_vscode_image_five},null,8,["options"]),m,n(o,{options:r(a).setup_vscode_image_six},null,8,["options"]),f,g,w,n(o,{options:r(a).setup_vscode_image_seven},null,8,["options"]),v]))}});export{V as __pageData,P as default};
