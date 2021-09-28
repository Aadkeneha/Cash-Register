var billAmount = document.querySelector("#billamt");
var cashGiven = document.querySelector("#cashamt");
const msg = document.querySelector("#msg-error");
var list_change = document.querySelectorAll(".change");
const next = document.querySelector("#btn-next");
const calculate = document.querySelector("#btn-calculate");

var billvsection = document.querySelector(".billvalid");
var table = document.querySelector(".table-display");

hidden();

const notes = [2000,1000,500,100,50,20,10,5,1];

next.addEventListener("click",function showsection(){
    hiddenmsg();
    if(billAmount.value > 0){
        billvsection.style.display="block";

        calculate.addEventListener("click",Calculatecash)

    }
    else{
        if(typeof billAmount.value === 'string'){
            showmsg("Please enter a valid input number"); 
        }
        else{

            showmsg("The cash given should be greater than or equal to bill amount."); 

        }
         
    }
    

})



function Calculatecash(){
    hiddenmsg();

        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const returnamt = cashGiven.value - billAmount.value;
            Calculatechange(returnamt);

        }
        else{

            showmsg("The cash given should be greater than or equal to bill amount.");

        }
    

}

function showmsg(errormsg){
    msg.style.display="block";
    msg.innerText = errormsg;
}

function Calculatechange(returnamt){
    for(let i=0; i<notes.length;i++){
        const no_of_notes = Math.trunc(returnamt / notes[i]);
        returnamt = returnamt %  notes[i];
        list_change[i].innerText= no_of_notes;
    }
    table.style.display="block";
}

function hiddenmsg(){
    msg.style.display="none";
}

function hidden(){

    billvsection.style.display="none";
    table.style.display="none";
}