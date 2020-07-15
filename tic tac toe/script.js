const cellElements=document.querySelectorAll("[data-cell]");
const board=document.getElementById("board");
const x_class="x";
const o_class="o";
const player_1="Player-1";
const player_2="Player-2";
var j=0;
var a=new Array();
for(var i=1;i<=9;i++)
{
    a[i]=i;
}
var circleturn=false;
cellElements.forEach(cell=>cell.addEventListener("click",handleclick,{once:true}));
function handleclick(e){
    j++;
    var cell=e.target;
    var currentclass;
    if(circleturn){
        currentclass=o_class;
        //hovering effect
        board.className=x_class;
    }
    else{
        currentclass=x_class;
        //hovering effect
        board.className=o_class;
    }
    this.className+=currentclass;
    
    //Win or draw
    if(circleturn){
        a[cell.id]=o_class;
    }
    else{
        a[cell.id]=x_class;
    }
   // console.log(cell.id);
   // console.log(typeof cell.id);
   //console.log(a[1]);
   //console.log(a[2]);
   //console.log(a[3]);
    if(((a[1]===a[2] && a[2]===a[3]) || (a[4]===a[5] && a[5]===a[6]) || (a[7]===a[8] && a[8]===a[9]) || (a[1]===a[4] && a[4]===a[7]) || (a[2]===a[5] && a[5]===a[8]) || (a[3]===a[6] && a[6]===a[9]) || (a[1]===a[5] && a[5]===a[9]) || (a[3]===a[5] && a[5]===a[7]))){
        console.log(currentclass +" win");
        document.querySelector(".data").innerHTML="<h1>"+currentclass.toUpperCase()+" Wins</h1>";
        document.querySelector("#message").className+="show";
    }
    else if(j==9 && !(((a[1]===a[2] && a[2]===a[3]) || (a[4]===a[5] && a[5]===a[6]) || (a[7]===a[8] && a[8]===a[9]) || (a[1]===a[4] && a[4]===a[7]) || (a[2]===a[5] && a[5]===a[8]) || (a[3]===a[6] && a[6]===a[9]) || (a[1]===a[5] && a[5]===a[9]) || (a[3]===a[5] && a[5]===a[7])))){
        console.log("Draw");
        document.querySelector(".data").innerHTML="<h1>Draw!</h1>";
        document.querySelector("#message").className+="show";
    }
    console.log(j);

    //Player-chance
    if(circleturn){
        document.querySelector(".main").innerHTML="<h2>Player 1 (X)</h2>";
    }
    else{
        document.querySelector(".main").innerHTML="<h2>Player 2 (O)</h2>";
    }
    //Swapping chance
    circleturn=!circleturn;
};
function restart(){
//console.log("restart")
//document.querySelector("#board").className="x";
//document.querySelectorAll(".cell").forEach(cell=>cell.className="cell ");
//document.querySelector("#message").className="msg ";
location.reload();
};