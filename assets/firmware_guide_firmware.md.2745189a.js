import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.e4c952c1.js";const m=JSON.parse('{"title":"What is this?","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/firmware.md","filePath":"firmware_guide/firmware.md","lastUpdated":1698315393000}'),r={name:"firmware_guide/firmware.md"},s=o('<h1 class="text-[var(--font-accent)]" id="what-is-this" tabindex="-1">What is this? <a class="header-anchor" href="#what-is-this" aria-label="Permalink to &quot;What is this? {.text-[var(--font-accent)]}&quot;">​</a></h1><p>Firmware is the second part of the equation to get your trackers going. It lives on the ESP32 chip, and is responsible for streaming video data from the tracker. We currently fully support wireless streaming over 2.4GHz, and are working on adding support for wired streaming to the main desktop App.</p><h2 id="what-should-i-download-and-where" tabindex="-1">What should I download and where? <a class="header-anchor" href="#what-should-i-download-and-where" aria-label="Permalink to &quot;What should I download and where?&quot;">​</a></h2><p>You can access the firmware, as well as flash your boards, using our new <a href="https://github.com/EyeTrackVR/FirmwareFlashingTool" target="_blank" rel="noreferrer">Firmware Flashing Tool</a>.</p><div class="warning custom-block"><p class="custom-block-title">Caution</p><p>This tool is currently in beta.</p></div><p>We are working on adding support for OTA and configuring network settings. If you have any issues, please let us know by opening an issue on the repository.</p><p>This tool relies on our own solution called <code>OpenIris</code>, <a href="https://github.com/EyeTrackVR/OpenIris" target="_blank" rel="noreferrer">found here</a>.</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>You <strong>do not</strong> need to download OpenIris separately. The flashing tool will download it for you.</p></div><p>To check the status of the project, please visit the <a href="/dev_roadmap">Development Road Map</a></p><details class="details custom-block"><summary>I want to use VSCode - How would I do this?</summary><p><a href="./setup_vscode">Follow the steps described here</a></p></details>',10),i=[s];function n(l,d,h,c,p,u){return a(),t("div",null,i)}const w=e(r,[["render",n]]);export{m as __pageData,w as default};
