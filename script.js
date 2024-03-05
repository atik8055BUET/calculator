let btn=document.querySelectorAll(".button");
let str="";
let output=document.querySelector("#output")
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.textContent=="="){
            str=String(eval(str));
            output.innerText=str;
            str="";
        }
        else if(button.textContent=="Del"){
            str=str.slice(0,-1);
            output.innerText=str;
        }
        else if(button.textContent=="C"){
            str="";
            output.innerText=str;
        }
        else{
            str+=button.textContent;
            output.innerText=str; 
        }
        

    })
});
