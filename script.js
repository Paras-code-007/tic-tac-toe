let arr=[]  //empty array unlimeted now limit defined 
//for defining limit use this
//let arr= new Array(3)  //array of 3 elements is created 

//cretated a 2D array structure/skeleton ready to put elements in it
for(let i=0;i<=2;i++){
    arr[i]=[]
}

window.onload= gamestart

let restart= document.getElementById('restart')
restart.onclick= gamestart;
let playerwin
function gamestart() {
    
    let row 
    let col
    let move=1
    playerwin= undefined
    //initialise the 2D array values 
    for(let i=0;i<=2;i++){
        for(let j=0;j<=2;j++){
            arr[i][j]=null;
        }
    }
    // console.log(arr)

    let cells= document.getElementsByClassName('col')
    for(let i=0;i<cells.length;i++){
        cells[i].innerText="";
    }
    let playerturnbrd
    let playerturnarr = Math.floor(Math.random()*2)
    // console.log(playerturnarr)
    if(playerturnarr==0){
        playerturnbrd= "O"
    }
    else{
        playerturnbrd="X"
    }
    let player= document.getElementById('player')
    player.innerText= playerturnbrd

    
    //*Assigning all td a clcik function
    /*
    let td= document.getElementsByClassName('col')
    td.onclick= function () {
        console.log("yo")
    } this will work ony for the first element having class col beacuse td is a array of all elements having class col and array na,e refer to first element therfore td.onclick= something will means equating it to first element
    here we can use jquery to assign all elements in a object a function
    */

    let td=$('.col')
    td.click(function () {
        // console.log("yo")
        //now here this referred to DOM object instead of jquery object because click functions is assigned to all the dom object present inside jquery object and this always refers to DOM object because this always indicate to where event happened and always in that case will be DOM not jquery object
        // console.log(this)
        this.innerText= playerturnbrd
        // $(this).text(playerturnbrd)
        // console.log(this.parentElement.id=="row1")

        //*array mein dalna hai jahan clicked 
        if(this.parentElement.id=="row0"){
            row= 0
        }
        if(this.parentElement.id=="row1"){
            row= 1
        }
        if(this.parentElement.id=="row2"){
            row= 2
        }
        // if(this.className=="col col0"){
        //     console.log("yes")
        // }

        if(this.className=="col col0"){
            col=0
        }
        if(this.className=="col col1"){
            col=1
        }
        if(this.className=="col col2"){
            col=2
        }
        arr[row][col]= playerturnarr
        if(playerturnarr==0){
            playerturnarr=1
            playerturnbrd="X"
            player.innerText="X"
        }else{
            playerturnarr=0
            playerturnbrd="O"
            player.innerText="O"
        }
        console.log(row,col,arr)
        let test= check(row,col)
        if(test==0||move==9){
            alert("game over, playerwin"+playerwin)
            td.click(null)
        }
        move++
    }) //so all td are assigned this function
    //this is the differrence between jquery object and dom array of html collection

}


function check(row,col) {
    let temp="";
    
    //row check
    for(let i=0;i<=2;i++){
        temp+= arr[row][i];
    }
    if(temp=="111"){
        playerwin="X"       
        return 0;
    }
    if(temp=="000"){
        playerwin="O"       
        return 0;
    }
    
    temp=""

    //col check
    for(let i=0;i<=2;i++){
        temp+= arr[i][col]
    }
    if(temp=="111"){
        playerwin="X"       
        return 0;
    }
    if(temp=="000"){
        playerwin="O"       
        return 0;
    }

    temp=""
    let temp1=""
    //diagonal check
    for(let i=0;i<=2;i++){
        for(let j=0;j<=2;j++){
            if(i==j){
                temp+=arr[i][j];
            }
            if(i+j==2){
                temp1+=arr[i][j];
            }
        }
    }
    if(temp=="111"){
        playerwin="X"       
        return 0;
    }
    if(temp=="000"){
        playerwin="O"       
        return 0;
    }
    if(temp1=="111"){
        playerwin="X"       
        return 0;
    }
    if(temp1=="000"){
        playerwin="O"       
        return 0;
    }

}