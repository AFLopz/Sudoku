let numbers = ['1','2','3','4','5','6','7','8','9','X'];
let numbervalue = null;
function start(){
    let cadena = "<table id='TablaPrincipal' align=center>";
    for (let i = 1; i <= 9; i++) {
        cadena += "<tr>";
        for (let j = 1; j <= 9; j++) {
            cadena += "<td onclick='addNumber(this)' onmouseover='highlight(event,this)' onmouseout='highlight(event,this)' id=" + i + "-" + j + "></td>";
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    document.getElementById("results").innerHTML = cadena;

    let destination = document.getElementById("numbers");
    for (let i = 0; i <= 9; i++){
        let number = document.createElement("button");
        number.id = numbers[i];
        number.value = numbers[i];
        number.innerText = numbers[i];
        number.onclick = function(){
            numbervalue=this.value;
        }
        destination.appendChild(number);
        
    }
}

function addNumber(cell){
    if(numbervalue !==null){
        if (numbervalue==="X"){
            cell.innerText = "";
        } else{
            cell.innerText = numbervalue;
        }
    }
}


function highlight(e,origin){
    let [fil, col] = origin.id.split("-");
    let startfil = Math.floor((fil-1)/3) * 3 + 1;
    let startCol = Math.floor((col-1)/3) * 3 + 1;
    if(e.type === "mouseover"){
        for (let i = startfil; i < startfil + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                document.getElementById(i+"-"+j).style.backgroundColor = "lightgrey";
            }
        }
        for (let j = 1; j <= 9; j++) {
            document.getElementById(fil+"-"+j).style.backgroundColor = "lightgrey";
        }

        for (let i = 1; i <= 9; i++) {
            document.getElementById(i+"-"+col).style.backgroundColor = "lightgrey";
        }
        origin.style.backgroundColor="grey";
    } else if(e.type === "mouseout"){
        for (let i = startfil; i < startfil + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                document.getElementById(i+"-"+j).style.backgroundColor = "";
            }
        }
        for (let j = 1; j <= 9; j++) {
            document.getElementById(fil+"-"+j).style.backgroundColor = "";
        }
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i+"-"+col).style.backgroundColor = "";
        }
    }
}
function alertar(origin){
    alert(origin.id);
}

