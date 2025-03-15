const root = document.querySelector(':root');
const modebttn = document.getElementById("mode");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
let mode = "light";


function applyDark(){
    moon.style.display = "block";
    sun.style.display = "none";
    root.style.setProperty('--bg-color', '#2c332e');
    root.style.setProperty('--accent-color', '#3d4741');
    root.style.setProperty('--highlight-color', '#637068');
    root.style.setProperty('--base-color', '#1d211e');
    root.style.setProperty('--font-color', 'white');
}
function applyLight(){
    sun.style.display = "block";
    moon.style.display = "none";
    root.style.setProperty('--bg-color', 'color-mix(in hsl, hsl(145, 46%, 70%), white 50%)');
    root.style.setProperty('--accent-color', 'color(srgb 0.941 0.960 .941)');
    root.style.setProperty('--highlight-color', '#d1ded1');
    root.style.setProperty('--base-color', 'white');
    root.style.setProperty('--font-color', 'black');
}
window.addEventListener("load", (event) => {
    mode = localStorage.getItem("mode");
    modebttn.style.display = "block";
    if (mode == null) {
        localStorage.setItem("mode", "light");
    } else{
        if (mode == "light"){
            sun.style.display = "block";
            moon.style.display = "none";
            applyLight();
        } else{
            moon.style.display = "block";
            sun.style.display = "none";
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