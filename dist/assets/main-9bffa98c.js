var $=Object.defineProperty;var I=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var l=(e,t,s)=>(I(e,typeof t!="symbol"?t+"":t,s),s);import"./style-e74fcfd1.js";import{r as a,p as m}from"./audio-63414c73.js";let r=[];a()!=null&&(r=a());function d(){localStorage.setItem("players",JSON.stringify(r))}function B(){if(a()!=null){a();for(let e=1;e<=a().length;e++){let t=document.getElementById(`nameAndAvatarContainer${e}`),s=document.getElementById(`editButton${e}`),n=document.getElementById(`doneButton${e}`);n.addEventListener("click",o=>{o.preventDefault();let v=document.getElementById(`nameInput${e}`).value;t.innerHTML=`
                <p class="homePlayerName" id="playerName${e}">${v}</p>
                <img class="homeAvatar" src=${a()[e-1].avatar} alt="avatar1">
                `,n.style.display="none",s.style.display="block",r[e-1].name=v,d()})}}}function h(){if(a()!=null){a();for(let e=1;e<=a().length;e++){let t=document.getElementById(`nameAndAvatarContainer${e}`),s=document.getElementById(`editButton${e}`),n=document.getElementById(`doneButton${e}`);s.addEventListener("click",o=>{o.preventDefault(),t.innerHTML=`
                <input type="text" name="inputName" id="nameInput${e}" class = "nameInput">
                <img class="homeAvatar" src=${a()[e-1].avatar} alt="avatar1">
                `,s.style.display="none",n.style.display="block"})}}}class b{constructor(t,s){l(this,"name","");l(this,"avatar","");this.name=t,this.avatar=s}}let p=document.getElementById("homePlayersList"),y=document.getElementById("homePlayersSection");function u(){p.innerHTML==""&&(y.style.display="none"),p.innerHTML!=""&&(y.style.display="flex")}let f=document.querySelector("#homePlayersList");function c(){a()!=null&&(f.innerHTML="",a().forEach(function(e,t){f.innerHTML+=`
        <div class="homePlayerDiv" id="homePlayer${t+1}">
        <div class="nameAndAvatarContainer" id="nameAndAvatarContainer${t+1}">
            <p class="homePlayerName" id="playerName${t+1}">${e.name}</p>
            <img class="homeAvatar" src=${e.avatar} alt="avatar1">
        </div>
        <div class="editAndRemoveContainer" id="editAndRemoveContainer${t+1}">
            <button class="doneButton" id="doneButton${t+1}">
                <img class="doneImg" src="./assets/images/icons/done-icon.png" alt="done button image">
            </button>
            <button class="editButton" id="editButton${t+1}">
                <img class="editImg" src="./assets/images/icons/edit-pencil-icon.png" alt="edit button image">
            </button>
            <button class="removeButton" id="removeButton${t+1}">
                <img class="removeImg" src="./assets/images/icons/remove-icon.png" alt="remove button image">
            </button>
        </div>
    </div>
        `}))}function g(){if(a()!=null){a();for(let e=0;e<a().length;e++){let t=document.getElementById(`homePlayer${e+1}`);document.getElementById(`removeButton${e+1}`).addEventListener("click",n=>{n.preventDefault(),t.remove(),r.splice(e,1),d(),c(),u(),g(),m("funnyJump",.5,!1)})}}}let i=["/assets/images/avatars/beardedLady.png","/assets/images/avatars/boingoClown.png","/assets/images/avatars/bombHomer.png","/assets/images/avatars/boredBarney.png","/assets/images/avatars/catmouseCircus.png","/assets/images/avatars/circusBart.png","/assets/images/avatars/circusGirl.png","/assets/images/avatars/circusGirl2.png","/assets/images/avatars/circusKid.png","/assets/images/avatars/circusSeal.png","/assets/images/avatars/clownCircus.png","/assets/images/avatars/homerPennywise.png","/assets/images/avatars/humanDonkey.png","/assets/images/avatars/krusty.png","/assets/images/avatars/longClown.png","/assets/images/avatars/margeCircus.png","/assets/images/avatars/mcGreg.png","/assets/images/avatars/monkey2Circus.png","/assets/images/avatars/monkeyCircus.png","/assets/images/avatars/mrBurnsum.png","/assets/images/avatars/murdererCat.png","/assets/images/avatars/nightmareCircus.png","/assets/images/avatars/sideshowBob.png","/assets/images/avatars/sideshowBob2.png","/assets/images/avatars/simpsonsCircus.png"];function E(){let e=i[Math.floor(Math.random()*i.length)];const t=i.indexOf(e);return t>-1&&i.splice(t,1),e}let A=document.getElementById("btn_name"),L=document.getElementById("form_box");function C(){A.addEventListener("click",e=>{e.preventDefault();let t=document.getElementById("nameField").value;if(t==""&&(m("./../assets/sounds/failure-drum-sound-effect-2.mp3",.4,!1),alert("Please, make sure to type in a name.")),t!=""){m("squeakyToy",.2,!1);let s=new b(t,E());r.push(s),d(),c(),u(),L.reset(),h(),B(),g()}})}let P=document.getElementById("btn_start");function k(){P.addEventListener("click",e=>{e.preventDefault(),a().length<2&&alert("You need to have at least 2 players"),a().length>=2&&(location.href="./../pages/game/index.html")})}function w(){C(),k(),h(),B(),g()}function N(){c(),u(),w()}N();
