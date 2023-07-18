console.log('inside settings');

//selectors
const toggles = document.querySelectorAll(".settings [type='checkbox']"); 

const radios = document.querySelectorAll(".settings [type='radio']"); 

const audioCheck = document.querySelector("#audio-check");
const audioToggle = document.querySelector("#audio-toggle");

const doc = document.documentElement;

let isAudioPlayable;

// functions
function updateSiteUi({name, value}){
    //console.log({ name, value });
    if(name === "customColor" ) {
        return doc.style.setProperty("--customColor", `var(--${value})`);
    }
    return (doc.dataset[name]=value);
}

function playAudio(type) {
    if(isAudioPlayable){
        const audioSound = type === "check" ? audioCheck : audioToggle;
        audioSound.currentTime = 0;
        audioSound.play();
    }
}

// event listners 
toggles.forEach((toggle) =>{ 
    toggle.addEventListener("change",(e)=> {
        const { name, checked } = e.target;
        updateSiteUi({name, value: checked})
        localStorage.setItem(name, checked);
        if(name ==="sound"){
            isAudioPlayable = checked;
        }
        playAudio("toggle")
    })
})

radios.forEach((radio) =>{ 
    radio.addEventListener("change",(e)=> {
        const { name, id } = e.target;
        updateSiteUi({name, value: id})
        localStorage.setItem(name, id);
        playAudio("check")
    })
})
