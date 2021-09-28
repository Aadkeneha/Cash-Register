var billAmount = document.querySelector("#billamt");
var cashGiven = document.querySelector("#cashamt");
const msg = document.querySelector("#msg-error");
var list_change = document.querySelectorAll(".change");


const calculate = document.querySelector("#btn-calculate");

const notes = [2000,1000,500,100,50,20,10,5,1];

calculate.addEventListener("click",Calculatecash)

function Calculatecash(){
    msg.style.display="none";
    if (billAmount.value > 0){
    
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const returnamt = cashGiven.value - billAmount.value;
            Calculatechange(returnamt);

        }
        else{

            showmsg("The cash given should be greater than or equal to bill amount.");

        }
    }
    else{
        showmsg("The bill amount should be greater than zero.")
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
}