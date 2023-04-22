import{_ as a,a as l}from"./chunks/index.e691ab05.js";import{_ as h}from"./chunks/CheckBoxList.e7980e83.js";import{_ as s,i}from"./chunks/index.ae16000d.js";import{o as d,c as p,a as t,u as o,g as e,w as c,h as r,b as n}from"./app.0812faad.js";const u={state:!0,object:[{label:"2 ESP 32 CAM boards"},{label:"2 160 degree cameras"},{label:"1 USB board to power your ESPs"},{label:"1 Programmer board(buying an extra is reccomended)"},{label:"IR emitters, resistors, and preferably PCBs"},{label:"Lower gauge wire to power ESPs"},{label:"Higher gauge wire to power IR LEDs"},{label:"3d printer to print mounts. (Buying them from some place like JLCPCB is also an option)"},{label:"Glue of some form, hot glue highly recommended."}]},_=r('<h1 class="text-[var(--font-accent)]" id="build-guide" tabindex="-1">Build Guide <a class="header-anchor" href="#build-guide" aria-hidden="true">#</a></h1><h2 id="this-page-will-contain-a-step-by-step-assembly-guide" tabindex="-1">This page will contain a step-by-step assembly guide <a class="header-anchor" href="#this-page-will-contain-a-step-by-step-assembly-guide" aria-hidden="true">#</a></h2><h2 id="step-1-make-sure-your-have-read-the-things-to-know-before-you-start-guide" tabindex="-1">Step 1: Make sure your have read the <a href="https://docs.eyetrackvr.dev/getting_started/things_to_know" target="_blank" rel="noreferrer">Things to know before you start</a> guide <a class="header-anchor" href="#step-1-make-sure-your-have-read-the-things-to-know-before-you-start-guide" aria-hidden="true">#</a></h2><p>This will give you a basic overview of the project&#39;s status and what to expect currently.</p><h2 id="step-2-order-all-the-parts-listed-on-our-parts-list" tabindex="-1">Step 2: Order all the parts listed on our <a href="https://docs.eyetrackvr.dev/how_to_build/parts_list" target="_blank" rel="noreferrer">Parts list</a> <a class="header-anchor" href="#step-2-order-all-the-parts-listed-on-our-parts-list" aria-hidden="true">#</a></h2><p>Please take note of the fact that hardware still may change, although with more developments it seems like we are going to stick with current hardware.</p><h2 id="step-3-wait-for-things-to-arrive" tabindex="-1">Step 3: Wait for things to arrive <a class="header-anchor" href="#step-3-wait-for-things-to-arrive" aria-hidden="true">#</a></h2><p>Long shipping times from China are <em>f u n</em>. Please allow anywhere from 2 weeks to 2 months for everything to arrive.</p><h2 id="step-4-gather-up-all-of-your-hardware" tabindex="-1">Step 4: Gather up all of your hardware <a class="header-anchor" href="#step-4-gather-up-all-of-your-hardware" aria-hidden="true">#</a></h2><p>Make sure you have at least the following:</p>',10),m=e("h2",{id:"step-5-install-external-antennas-or-shield-esp-antenna-with-an-antistatic-bag",tabindex:"-1"},[n("Step 5: Install external antennas or shield ESP antenna with an antistatic bag "),e("a",{class:"header-anchor",href:"#step-5-install-external-antennas-or-shield-esp-antenna-with-an-antistatic-bag","aria-hidden":"true"},"#")],-1),g=e("p",null,"Some ESP-CAM boards have issues with signal integrity, there are 2 things you can do to help/solve the issues.",-1),w=e("p",null,"The first option is to use an external antenna.",-1),f=e("p",null,[n("This is the best solution when it comes to the final result. If you have Vive/Tundra trackers, this is a "),e("strong",null,"REQUIRED"),n(" step. The interference from the trackers will make your ESP stream unusable. An antistatic bag does not help in this case. Unfortunately, removing the antenna is not super easy, you have to either move a resistor or, remove it and bridge 2 solder pads. The image attached below shows the orientation of the pads that need to be connected for which mode. You can not bridge all connections and have both antennas active at the same time. The 0-ohm resistor does not need to be on the board, you can simply bridge the connections.")],-1),b=e("p",null,"Below is an example of bridging the connections and attaching an antenna.",-1),y=e("div",{align:"center"},[e("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/aBTZuvg5sM8",title:"How to add an external antenna to an ESP32-CAM (2 methods)",frameborder:"1",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),v=e("p",null,"The second option is to cover the ESP's antenna with an antistatic bag. This can help aid problems, and can completely solve them in some cases. Best of all, it is completely free! However, it should be noted that it performs worse than an external antenna and in certain cases will not solve the issue like if you have Vive trackers.",-1),S=e("div",{align:"center"},[e("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/wS4PS3Mw250",title:"Covering an ESP32-CAM's antenna with anti-static bag",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),k=e("h2",{id:"step-6-attach-cameras-to-esps",tabindex:"-1"},[n("Step 6: Attach cameras to ESPs "),e("a",{class:"header-anchor",href:"#step-6-attach-cameras-to-esps","aria-hidden":"true"},"#")],-1),T=e("p",null,"Look at your ESP and locate the camera ribbon cable connector as circled below.",-1),P=e("p",null,"Flip the gray part up to allow the cameras to be connected. Do not force it, or shove objects into it to open, fingernails are fine.",-1),E=e("p",null,"Now slide in a camera, please note that the pins are facing down, you should only see the black part.",-1),x=e("p",null,"Once the camera has been slid in, press the gray part of the connector back down. There will be a small amount of force but still be gentle. Note the ammount of black coming out of the connector.",-1),C=e("h2",{id:"step-7-connect-esp-to-the-programmer-to-flash",tabindex:"-1"},[n("Step 7: Connect ESP to the programmer to flash "),e("a",{class:"header-anchor",href:"#step-7-connect-esp-to-the-programmer-to-flash","aria-hidden":"true"},"#")],-1),I=e("p",null,"Why flash before you have it assembled? It's simple, to make sure they actually work before you spend time soldering to them.",-1),D=e("p",null,"Slide your ESP into the programmer, and note the USB port goes away from the ESP's camera.",-1),A=r('<h2 id="step-8-configure-visual-studio-code-and-prepare-to-flash-the-firmware" tabindex="-1">Step 8: Configure Visual Studio Code and prepare to flash the firmware <a class="header-anchor" href="#step-8-configure-visual-studio-code-and-prepare-to-flash-the-firmware" aria-hidden="true">#</a></h2><p>Check out our guide on <a href="https://docs.eyetrackvr.dev/firmware_guide/setup_vscode" target="_blank" rel="noreferrer">Setting up VS Code</a></p><p>Once VS Code is set up, move on to the next step.</p><h2 id="step-9-plug-in-your-esp-and-flash-the-firmware" tabindex="-1">Step 9: Plug in your ESP and flash the firmware <a class="header-anchor" href="#step-9-plug-in-your-esp-and-flash-the-firmware" aria-hidden="true">#</a></h2><p>Our guide, <a href="https://docs.eyetrackvr.dev/firmware_guide/upload_and_update_firmware" target="_blank" rel="noreferrer">Building and uploading the firmware manually</a> has steps on how to do this. After it has flashed, make sure you get a video stream in your browser, then power it down and flash your next ESP.</p><h2 id="step-10-connect-your-power-wires-to-a-usb-type-a-board" tabindex="-1">Step 10: Connect your power wires to a USB Type-A board <a class="header-anchor" href="#step-10-connect-your-power-wires-to-a-usb-type-a-board" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Powering from the programmer board <strong>will not work correctly</strong>. This delivers a lower voltage which results in dim LEDs and video artifacts. These are highly likely mess up tracking.</p></div><p>Get two pairs of wire, preferably two different colors, Cut them to length (56mm in my case) and twist together two for ground and two for 5V. Here I used speaker wire where the copper denotes positive and silver negative. Then, strip the wires to about 3mm of exposed wire.</p>',8),B=e("h2",{id:"step-11-cut-wires-for-ir-leds",tabindex:"-1"},[n("Step 11: Cut wires for IR LEDs "),e("a",{class:"header-anchor",href:"#step-11-cut-wires-for-ir-leds","aria-hidden":"true"},"#")],-1),V=e("p",null,"To find the optimal length, take a piece of wire and a marker and mock up your wire route, and mark the wire, cut it, then make another at the same size for the other eye. You will need 3 different cuts of wire. 2 short ones for connecting the 2 PCBs per eye together, 2 Longer ones for power, or ground and 2 slightly longer ones for power or ground for the LED near the camera at the bottom.",-1),L=e("p",null,"Once cut, strip them to around 4mm of exposed wire.",-1),R=e("h2",{id:"step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them",tabindex:"-1"},[n("Step 12: Twist the positive USB wire and positive IR LED wires together and tin them "),e("a",{class:"header-anchor",href:"#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them","aria-hidden":"true"},"#")],-1),N=e("p",null,"Once twisted together add solder to keep them together. This makes the connection much easier.",-1),G=e("h2",{id:"step-13-solder-the-positive-wire-to-esp",tabindex:"-1"},[n("Step 13: Solder the positive wire to ESP "),e("a",{class:"header-anchor",href:"#step-13-solder-the-positive-wire-to-esp","aria-hidden":"true"},"#")],-1),O=e("p",null,"Lay the wire on the outside of the 5V pin and apply solder.",-1),U=r('<h2 id="step-14-solder-the-negative-wire-to-esp" tabindex="-1">Step 14: Solder the negative wire to ESP <a class="header-anchor" href="#step-14-solder-the-negative-wire-to-esp" aria-hidden="true">#</a></h2><p>Repeat <a href="#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them">Step 12</a> but with the negative wires.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As a user in our discord has learned, you can short the <code>IO12</code> pin with the ground pin <code>(GND)</code> without issues.</p></div><p>In the below example I put it on the top of the pin, It will be a week-ish joint but that&#39;s where glue comes in handy.</p>',4),W=r('<h2 id="step-15-wire-up-the-2nd-esp" tabindex="-1">Step 15: Wire up the 2nd ESP <a class="header-anchor" href="#step-15-wire-up-the-2nd-esp" aria-hidden="true">#</a></h2><p>Repeat steps <a href="#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them">12</a>-<a href="#step-14-solder-the-negative-wire-to-esp">14</a> with the 2nd ESP.</p><h2 id="step-16-prepare-to-solder-ir-led-pcbs" tabindex="-1">Step 16: Prepare to solder IR LED PCBs <a class="header-anchor" href="#step-16-prepare-to-solder-ir-led-pcbs" aria-hidden="true">#</a></h2><p>Get your magnifying glass out, it&#39;s time to solder very smol things.</p><p>Gather 4 PCBs, 4 IR LEDs, and either 4 ~350ohm.</p>',5),H=e("p",null,"Here are the PCB pin-out labels:",-1),M=e("p",null,"LED labels:",-1),j=r('<p>If you have different LEDs, please consult their datasheet.</p><p>Some terminology related to them:</p><p><code>5V</code>: 5-volt power in.</p><p><code>GND</code>: Ground or power out.</p><p><code>AR</code>: After-Resistor this is to be used as the power in on the 2nd PCB in series as resistors are not needed on the 2nd PCB since they are on the 1st one.</p><p><code>SNG</code>: Single resistor, use this as 5V in if you are using only <strong>1</strong> <code>~700ohm</code> resistor on V3 boards (not recommended).</p><p><code>Negative</code>: This marks the negative side of the LED.</p><p><code>Positive</code>: This marks the positive side of the LED.</p><h2 id="step-18-solder-resistors-on-pcb-v3" tabindex="-1">Step 18: Solder resistors on PCB V3 <a class="header-anchor" href="#step-18-solder-resistors-on-pcb-v3" aria-hidden="true">#</a></h2><p>You only need 1 PCB to have resistors per eye.</p><p>Tin the resistor pads. Note: in this example, I use too much solder, it should only be enough to lightly cover the pad.</p>',11),F=e("p",null,"Next, grab a resistor and hold it on the pads.",-1),z=e("p",null,"While holding the resistor add solder to your soldering iron and apply it to the resistor.",-1),Y=e("p",null,"I like to do this by having a piece of my solder stick up in the air and then put it on my iron that way.",-1),$=e("p",null,"Flip the PCB and solder the other end.",-1),q=e("p",null,"Now repeat for the other one.",-1),J=e("h2",{id:"solder-leds-on-pcb-v3",tabindex:"-1"},[n("Solder LEDs on PCB V3 "),e("a",{class:"header-anchor",href:"#solder-leds-on-pcb-v3","aria-hidden":"true"},"#")],-1),Q=e("p",null,"Tin the LED pads.",-1),Z=e("p",null,"Orientate the LED and hold it in place.",-1),K=e("p",null,"Solder one end.",-1),X=e("p",null,"Flip around and solder the other end.",-1),ee=e("h2",{id:"wire-up-the-pcbs-v3",tabindex:"-1"},[n("Wire up the PCBs V3 "),e("a",{class:"header-anchor",href:"#wire-up-the-pcbs-v3","aria-hidden":"true"},"#")],-1),te=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"WARNING"),e("p",null,"Pay attention to the direction of the LEDs on the PCBs.")],-1),oe=e("p",null,"If the green dot is facing inwards toward the text like in the picture below:",-1),se=e("p",null,"Use the following diagram:",-1),ie=e("p",null,"If the green dot is facing away from the text like the picture below:",-1),ne=e("p",null,"Use the following diagram:",-1),re=r('<h2 id="step-19-3d-print-mounts" tabindex="-1">Step 19: 3D print mounts <a class="header-anchor" href="#step-19-3d-print-mounts" aria-hidden="true">#</a></h2><p>Head to the 3D printed parts section of the parts list <a href="https://docs.eyetrackvr.dev/how_to_build/parts_list#_3d-printed-mounts" target="_blank" rel="noreferrer">here.</a></p><p>Find which parts are for your headset and print them. Some may work better or worse, it is recommended to test all of them if there are multiple, print one of each kind. If none work, try making an edit yourself if you have the skills. If you have made a mount make sure to ping me, <code>Prohurtz#0001</code>, so I can add them to the list.</p><p>Having trouble getting them to fit? Try resizing the mounts up, or down a little to ensure a good fit.</p><p>There are 2 different types of mounts, how to secure the camera to each type will be documented below.</p><h3 id="type-1" tabindex="-1">Type 1 <a class="header-anchor" href="#type-1" aria-hidden="true">#</a></h3>',6),ae=e("p",null,"This uses a method of sliding in the camera. Generally, this is the recommended mounting method as it generally requires no glue.",-1),le=e("p",null,"Place the camera into the mount",-1),he=e("p",null,"Slowly apply pressure inwards until the camera snaps into place.",-1),de={align:"center"},pe=e("p",null," There is a good chance of breaking the mount when putting in the camera. If this happens you may be able to save the mount depending on where the break was. A small dab of hot glue around the camera is likely all that is needed. ",-1),ce=e("h3",{id:"type-2",tabindex:"-1"},[n("Type 2 "),e("a",{class:"header-anchor",href:"#type-2","aria-hidden":"true"},"#")],-1),ue=e("p",null,"This uses the method of gluing the camera.",-1),_e=e("p",null,"Apply a bit of glue to the bottom of the camera mount.",-1),me=e("p",null,"Place the camera on the mount.",-1),ge=e("h2",{id:"ir-led-mounting",tabindex:"-1"},[n("IR LED mounting "),e("a",{class:"header-anchor",href:"#ir-led-mounting","aria-hidden":"true"},"#")],-1),we=e("p",null,"This again differs from mount to mount.",-1),fe=e("p",null,"In some cases, there are designated spots for the LEDs to go.",-1),be=e("p",null,"In others there are no specified spots, you will have to mess around to find what works best. This image shows the optimal/near-optimal position for the LEDs. Hot glue is your friend with this.",-1),ye=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"Use rubbing alcohol to easily remove hot glue.")],-1),Ie=JSON.parse('{"title":"Build Guide","description":"","frontmatter":{},"headers":[{"level":2,"title":"This page will contain a step-by-step assembly guide","slug":"this-page-will-contain-a-step-by-step-assembly-guide","link":"#this-page-will-contain-a-step-by-step-assembly-guide","children":[]},{"level":2,"title":"Step 1: Make sure your have read the Things to know before you start guide","slug":"step-1-make-sure-your-have-read-the-things-to-know-before-you-start-guide","link":"#step-1-make-sure-your-have-read-the-things-to-know-before-you-start-guide","children":[]},{"level":2,"title":"Step 2: Order all the parts listed on our Parts list","slug":"step-2-order-all-the-parts-listed-on-our-parts-list","link":"#step-2-order-all-the-parts-listed-on-our-parts-list","children":[]},{"level":2,"title":"Step 3: Wait for things to arrive","slug":"step-3-wait-for-things-to-arrive","link":"#step-3-wait-for-things-to-arrive","children":[]},{"level":2,"title":"Step 4: Gather up all of your hardware","slug":"step-4-gather-up-all-of-your-hardware","link":"#step-4-gather-up-all-of-your-hardware","children":[]},{"level":2,"title":"Step 5: Install external antennas or shield ESP antenna with an antistatic bag","slug":"step-5-install-external-antennas-or-shield-esp-antenna-with-an-antistatic-bag","link":"#step-5-install-external-antennas-or-shield-esp-antenna-with-an-antistatic-bag","children":[]},{"level":2,"title":"Step 6: Attach cameras to ESPs","slug":"step-6-attach-cameras-to-esps","link":"#step-6-attach-cameras-to-esps","children":[]},{"level":2,"title":"Step 7: Connect ESP to the programmer to flash","slug":"step-7-connect-esp-to-the-programmer-to-flash","link":"#step-7-connect-esp-to-the-programmer-to-flash","children":[]},{"level":2,"title":"Step 8: Configure Visual Studio Code and prepare to flash the firmware","slug":"step-8-configure-visual-studio-code-and-prepare-to-flash-the-firmware","link":"#step-8-configure-visual-studio-code-and-prepare-to-flash-the-firmware","children":[]},{"level":2,"title":"Step 9: Plug in your ESP and flash the firmware","slug":"step-9-plug-in-your-esp-and-flash-the-firmware","link":"#step-9-plug-in-your-esp-and-flash-the-firmware","children":[]},{"level":2,"title":"Step 10: Connect your power wires to a USB Type-A board","slug":"step-10-connect-your-power-wires-to-a-usb-type-a-board","link":"#step-10-connect-your-power-wires-to-a-usb-type-a-board","children":[]},{"level":2,"title":"Step 11: Cut wires for IR LEDs","slug":"step-11-cut-wires-for-ir-leds","link":"#step-11-cut-wires-for-ir-leds","children":[]},{"level":2,"title":"Step 12: Twist the positive USB wire and positive IR LED wires together and tin them","slug":"step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them","link":"#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them","children":[]},{"level":2,"title":"Step 13: Solder the positive wire to ESP","slug":"step-13-solder-the-positive-wire-to-esp","link":"#step-13-solder-the-positive-wire-to-esp","children":[]},{"level":2,"title":"Step 14: Solder the negative wire to ESP","slug":"step-14-solder-the-negative-wire-to-esp","link":"#step-14-solder-the-negative-wire-to-esp","children":[]},{"level":2,"title":"Step 15: Wire up the 2nd ESP","slug":"step-15-wire-up-the-2nd-esp","link":"#step-15-wire-up-the-2nd-esp","children":[]},{"level":2,"title":"Step 16: Prepare to solder IR LED PCBs","slug":"step-16-prepare-to-solder-ir-led-pcbs","link":"#step-16-prepare-to-solder-ir-led-pcbs","children":[]},{"level":2,"title":"Step 18: Solder resistors on PCB V3","slug":"step-18-solder-resistors-on-pcb-v3","link":"#step-18-solder-resistors-on-pcb-v3","children":[]},{"level":2,"title":"Solder LEDs on PCB V3","slug":"solder-leds-on-pcb-v3","link":"#solder-leds-on-pcb-v3","children":[]},{"level":2,"title":"Wire up the PCBs V3","slug":"wire-up-the-pcbs-v3","link":"#wire-up-the-pcbs-v3","children":[]},{"level":2,"title":"Step 19: 3D print mounts","slug":"step-19-3d-print-mounts","link":"#step-19-3d-print-mounts","children":[{"level":3,"title":"Type 1","slug":"type-1","link":"#type-1","children":[]},{"level":3,"title":"Type 2","slug":"type-2","link":"#type-2","children":[]}]},{"level":2,"title":"IR LED mounting","slug":"ir-led-mounting","link":"#ir-led-mounting","children":[]}],"relativePath":"how_to_build/full_build.md","lastUpdated":1682129377000}'),ve={name:"how_to_build/full_build.md"},De=Object.assign(ve,{setup(Se){return(ke,Te)=>(d(),p("div",null,[_,t(h,{options:{...o(u)}},null,8,["options"]),t(s,{options:o(i).image_one},null,8,["options"]),m,g,w,f,t(s,{options:o(i).external_antenna},null,8,["options"]),b,t(s,{options:o(i).external_antenna_resistors},null,8,["options"]),y,v,S,k,T,t(s,{options:o(i).camera_socket},null,8,["options"]),P,t(s,{options:o(i).camera_socket_clip},null,8,["options"]),E,t(s,{options:o(i).camera_cable},null,8,["options"]),x,t(s,{options:o(i).camera_clip_close},null,8,["options"]),C,I,D,t(s,{options:o(i)._7_12_one},null,8,["options"]),A,t(s,{options:o(i)._7_12_two},null,8,["options"]),B,V,L,R,N,t(s,{options:o(i)._7_12_three},null,8,["options"]),G,O,t(s,{options:o(i)._13_18_one},null,8,["options"]),U,t(s,{options:o(i)._13_18_two},null,8,["options"]),W,t(s,{options:o(i)._13_18_three},null,8,["options"]),H,t(s,{options:o(i)._13_18_four},null,8,["options"]),M,t(s,{options:o(i)._13_18_five},null,8,["options"]),j,t(s,{options:o(i)._13_18_six},null,8,["options"]),F,t(s,{options:o(i)._13_18_seven},null,8,["options"]),z,Y,t(s,{options:o(i)._13_18_eight},null,8,["options"]),$,t(s,{options:o(i)._13_18_nine},null,8,["options"]),q,t(s,{options:o(i)._13_18_ten},null,8,["options"]),J,Q,t(s,{options:o(i).end_one},null,8,["options"]),Z,t(s,{options:o(i).end_two},null,8,["options"]),K,t(s,{options:o(i).end_three},null,8,["options"]),X,t(s,{options:o(i).end_four},null,8,["options"]),ee,te,oe,t(s,{options:o(i).end_five},null,8,["options"]),se,t(s,{options:o(i).end_six},null,8,["options"]),ie,t(s,{options:o(i).end_seven},null,8,["options"]),ne,t(s,{options:o(i).end_eight},null,8,["options"]),re,t(s,{options:o(i).end_nine},null,8,["options"]),ae,le,t(s,{options:o(i).end_ten},null,8,["options"]),he,t(s,{options:o(i).end_eleven},null,8,["options"]),e("div",de,[t(a,{options:o(l).end_one},{content:c(()=>[pe]),_:1},8,["options"])]),ce,t(s,{options:o(i).end_twelve},null,8,["options"]),ue,_e,t(s,{options:o(i).end_thirteen},null,8,["options"]),me,t(s,{options:o(i).end_fourteen},null,8,["options"]),ge,we,fe,t(s,{options:o(i).end_fifteen},null,8,["options"]),be,t(s,{options:o(i).end_sixteen},null,8,["options"]),ye]))}});export{Ie as __pageData,De as default};
