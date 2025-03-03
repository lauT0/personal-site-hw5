const root = document.querySelector(':root');
const modebttn = document.getElementById("mode");
let mode = "light";


function applyDark(){
    modebttn.innerHTML = "light"
    root.style.setProperty('--bg-color', '#2c332e');
    root.style.setProperty('--accent-color', '#3d4741');
    root.style.setProperty('--highlight-color', '#637068');
    root.style.setProperty('--base-color', '#1d211e');
    root.style.setProperty('--font-color', 'white');
}
function applyLight(){
    modebttn.innerHTML = "dark"
    root.style.setProperty('--bg-color', 'color-mix(in hsl, hsl(145, 46%, 70%), white 50%)');
    root.style.setProperty('--accent-color', 'color(srgb 0.941 0.960 .941)');
    root.style.setProperty('--highlight-color', '#d1ded1');
    root.style.setProperty('--base-color', 'white');
    root.style.setProperty('--font-color', 'black');
}
window.addEventListener("load", (event) => {
    modebttn.style.display = "block";
    if (localStorage.length == 0) {
        localStorage.setItem("mode", "light");
    } else{
        mode = localStorage.getItem("mode");
        if (mode == "light"){
            applyLight();
        } else{
            applyDark();
        }
    }
});


modebttn.addEventListener("click", (event) =>{
    if (mode == "light"){
        mode = "dark";
        localStorage.setItem("mode", "dark");
        applyDark();
    } else{
        mode = "light";
        localStorage.setItem("mode", "light");
        applyLight();
    }
})