import"./style-e74fcfd1.js";import{b as t,p as s,n as l}from"./playAgainButton-b72397c4.js";function r(){return JSON.parse(localStorage.getItem("eliminated")||"")}let n=document.getElementById("resultsContainer");function i(){r().reverse().forEach(function(a,e){n.innerHTML+=`
        <div class="PlayerDiv" id="Player${e+1}">
        <p class="roundText" id="round${e+1}">Round ${r().length-e}: </p>
            <div class="nameAndAvatarContainer" id="nameAndAvatarContainer${e+1}">
                <p class="PlayerName" id="playerName${e+1}">${a.name}</p>
                <img class="Avatar" src=${a.avatar} alt="avatar1">
            </div>
            </div>
        </div>
        `})}function o(){i(),t("backResultsDesktop"),s("playAgainResultsDesktop"),l("newGameResultsDesktop"),t("backResultsMobile"),s("playAgainResultsMobile"),l("newGameResultsMobile")}o();
