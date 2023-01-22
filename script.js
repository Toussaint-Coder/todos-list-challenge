var input,  btn , data;
input = document.getElementById("inputkey");
btn = document.getElementById("add");
data = document.getElementById("task-data");

btn.addEventListener("click" , () =>{
    if (!input.value){
         input.style.borderBottom = "solid 2px red";
    } else {
    var arrdata = [];
    arrdata.push(input.value);
        for(let i = 0 ; i < arrdata.length ; i++){

            var displaytag = document.createElement("p");
            var dltbtn = document.createElement("button");
            dltbtn.textContent = "delete";

            displaytag.textContent = arrdata[i];
            displaytag.appendChild(dltbtn);
            data.appendChild(displaytag);

            dltbtn.addEventListener("click" , () => {
               displaytag.style.display = "none";
            });
        }
    }
    console.log(arrdata);
});
