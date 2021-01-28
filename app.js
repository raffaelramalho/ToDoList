var btn = document.getElementById("save");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");



const listAdd = () => {
    if (input.value === ""){
        alert("Be sure to fill all the boxes!")
    }else{
        var li = document.createElement("LI");
        let text = document.createTextNode(input.value);
        li.appendChild(text);
        document.querySelector("ul").appendChild(li);
        input.value="";
    }
};
document.querySelector("#themes").addEventListener("click" ,e=>{
    const themes = {
        theme1: () => {
        document.getElementById("app").style.backgroundColor = "var(--default-bg)";
        document.getElementById("app").style.backgroundImage = "var(--default-image)";
        },
    
        theme2: () => {
        document.getElementById("app").style.backgroundColor = "var(--second-bg)";
        document.getElementById("app").style.backgroundImage = "var(--second-image)";
        },
    
        theme3: () => {
        document.getElementById("app").style.backgroundColor = "var(--third-bg)";
        document.getElementById("app").style.backgroundImage = "var(--third-image)";
        },
        theme4: () => {
        document.getElementById("app").style.backgroundColor = "var(--fourth-bg)";
        document.getElementById("app").style.backgroundImage = "var(--fourth-image)";
        },
        theme5: () =>{
        document.getElementById("app").style.backgroundColor = "var(--fiveth-bg)";
        document.getElementById("app").style.backgroundImage = "var(--fiveth-image)";
        }
    }
    const currentTheme = e.target.id;
    themes[currentTheme]();
})

