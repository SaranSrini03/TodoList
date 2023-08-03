let inputBox = document.getElementById("inputbox");
let addBtn = document.getElementById("btn");
let listValue = document.getElementById("listValue");
let bottom = document.querySelector(".bottom");


addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
});


addBtn.addEventListener('click',()=>{
    if(!inputBox.value){
        alert("Field is Empty!");
    }
    else{
        let inputBoxValue = inputBox.value;
        let newValue = document.createElement("input");
        newValue.setAttribute("id","listValue");
        newValue.setAttribute("readonly",true);
        let editButton = document.createElement("input");
        editButton.setAttribute("type","button");
        editButton.setAttribute("id","editBtn");
        editButton.setAttribute("value","edit");
        let deleteButton = document.createElement("input");
        deleteButton.setAttribute("type","button");
        deleteButton.setAttribute("id","deleteBtn");
        deleteButton.setAttribute("value","X");
    
    
        bottom.appendChild(newValue);
        bottom.appendChild(editButton);
        bottom.appendChild(deleteButton);

    
        newValue.value = inputBoxValue;
        inputBox.value = null;

        editButton.addEventListener('click',()=>{
            if(editButton.getAttribute("value") === "edit"){
                newValue.removeAttribute("readonly");
                editButton.setAttribute("value","save");
                newValue.style.cursor = "text";
                

            
            }
            else{
                newValue.setAttribute("readonly",true);
                editButton.setAttribute("value","edit");
                newValue.style.cursor = "pointer";

            }
        });
        deleteButton.addEventListener('click',()=>{
            bottom.removeChild(newValue);
            bottom.removeChild(editButton);
            bottom.removeChild(deleteButton);
        });
        newValue.addEventListener('click',()=>{
            if(editButton.getAttribute("value")=== "edit" && newValue.style.textDecoration === "none"){
                newValue.style.color = "black";
                newValue.style.textDecoration = "line-through";
            }
            else{
                newValue.style.textDecoration = "none";
                newValue.style.color = "rgb(28, 28, 28)";
            }
        });
    }

});

