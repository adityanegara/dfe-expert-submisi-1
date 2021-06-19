const paragraphElement = document.getElementById("testing-paragraph");
const buttonElement = document.getElementById("testing-button");
console.log("cache busting");

const changeParagraph = (newText) =>{
    paragraphElement.innerText = newText;
}

export const main = () =>{
    buttonElement.addEventListener("click", ()=>{
        changeParagraph("Aditya Negara");
    });    
}