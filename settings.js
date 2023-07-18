console.log('inside settings');

//selectors
const toggles = document.querySelectorAll(".settings [type='checkbox']"); 

const doc = document.documentElement;

// functions
function updateSiteUi({name, value}){
    //console.log({ name, value });
    return (doc.dataset[name]=value);
}

// event listners 
toggles.forEach((toggle) =>{ 
    toggle.addEventListener("change",(e)=> {
        const { name, checked } = e.target;
        updateSiteUi({name, value: checked})
        localStorage.setItem(name, checked);
    })
})