let findBrutto = document.getElementById("netToBrutto");
let findNetto = document.getElementById("bruToNetto");

function testCheck() {
    document.getElementById("errorText").innerHTML = ""
    if (findBrutto.checked) {
        document.getElementById("betragInDescription").innerHTML = "Nettobetrag(Preis ohne Mehrwertsteuer) in €"
        document.getElementById("solutionDes").innerHTML = "Bruttobetrag(Endpreis)"
    } else if (findNetto.checked) {
        document.getElementById("betragInDescription").innerHTML = "Bruttobetrag(Preis incl. Mehrwertsteuer) in €"
        document.getElementById("solutionDes").innerHTML = "Nettobetrag"

    } else {
        document.getElementById("errorText").innerHTML = "Abrechnungart nicht ausgewählt!"
    }
}

let taxPercentage;
let percent19 = document.getElementById("nineteen");
let percent7 = document.getElementById("seven");

function percentageChoose(){
    document.getElementById("errorText").innerHTML = ""
    if (percent19.checked) {
        taxPercentage = 19;
    } else {
        taxPercentage = 7;
    } 
}
function showOn(){
    let betragEngabe = document.getElementById("betragIn").value;
    let bruttoBetrag;
    let zwischenSolutionNetto;
    let solMwst;

    if (!taxPercentage){
        document.getElementById("errorText").innerHTML = "Steuersatz nicht ausgewählt!"        

    } else if(findBrutto.checked){
        bruttoBetrag = Number(betragEngabe)+betragEngabe*taxPercentage/100
        solMwst = bruttoBetrag-Number(betragEngabe);
        document.getElementById("taxAmount").innerHTML = solMwst.toFixed(2) + " €";
        document.getElementById("solutionAmount").innerHTML = bruttoBetrag + " €";

    } else if (findNetto.checked){
        zwischenSolutionNetto = Number(betragEngabe)*100/(100+Number(taxPercentage));
        solMwst = Number(betragEngabe) - zwischenSolutionNetto;

        document.getElementById("taxAmount").innerHTML = solMwst.toFixed(2) + " €";
        document.getElementById("solutionAmount").innerHTML = zwischenSolutionNetto.toFixed(2) + " €";
    } else {
        document.getElementById("errorText").innerHTML = "Abrechnungart nicht ausgewählt!"
        
    }
}
