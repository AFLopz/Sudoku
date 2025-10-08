let numbers = ['1','2','3','4','5','6','7','8','9','X'];
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
    /*"-87491625",  
    "241568379",   
    "569327418",   
    "758619234",   
    "123784596",   
    "496253187",   
    "934176852",   
    "675832941",   
    "81294576-"*/ 
    ]
var solution = [
    "387491625",  
    "241568379",   
    "569327418",   
    "758619234",   
    "123784596",   
    "496253187",   
    "934176852",   
    "675832941",   
    "812945763"  
    ]
let numbervalue = null;
function start(){
    let cadena = "<table id='TablaPrincipal' align=center>";
    for (let i = 1; i <= 9; i++) {
        cadena += "<tr>";
        for (let j = 1; j <= 9; j++) {
            let x = board[i-1];
            if (x.charAt(j-1)==="-"){
                cadena += "<td onclick='addNumber(this),checkright(this)'  onmouseover='highlight(event,this)' onmouseout='highlight(event,this)' id=" + i + "-" + j + "></td>";
            }else{
                cadena += "<td id=" + i + "-" + j +">"+x.charAt(j-1)+"</td>";
            }
            
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
    if(checkwin()){
        alert("Has ganado");
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

function checkright(cell){
    let error = document.getElementById("digiterror");
    let [fil, col] = cell.id.split("-");
    let x = solution[fil-1];
    if (cell.innerText===x.charAt(col-1)){  
        cell.removeAttribute('onclick');
        cell.removeAttribute('onmouseover');
    }else{
        cell.innerText="";
        error.innerHTML++;
    }
}

function checkwin(){
    for (let i = 1; i <= 9; i++){
        let x = solution[i-1];
        for (let j = 1; j <= 9; j++){
            if (document.getElementById(i+"-"+j).innerText !== x.charAt(j-1)){
                return false;
            }
        }
    }
    return true;
}


