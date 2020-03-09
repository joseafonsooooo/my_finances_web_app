/* Salarios / Budgets */
/* CONFIGURE HERE */
var salarioA = 1100;
var salarioB = 800;
var budgetAlimentacao = 300;
var budgetGasolina = 200;
var budgetPortagens = 100;

/* Load Fields */
var pA = document.getElementById("dA");
var pB = document.getElementById("dB");
var pC = document.getElementById("dC");
var pD = document.getElementById("dD");
var pE = document.getElementById("dE");
var pF = document.getElementById("dF");
var pG = document.getElementById("dG");
var pH = document.getElementById("dH");
var pI = document.getElementById("dI");
var pJ = document.getElementById("dJ");
var pK = document.getElementById("dK");
var pL = document.getElementById("dL");
var pM = document.getElementById("dM");
var pN = document.getElementById("dN");
var pO = document.getElementById("dO");
var pP = document.getElementById("dP");
var pQ = document.getElementById("dQ");
var pR = document.getElementById("dR");
var pS = document.getElementById("dS");

var v1 = document.getElementById("val1");
var v2 = document.getElementById("val2");
var v3 = document.getElementById("val3");
var v4 = document.getElementById("val4");

var budg1 = document.getElementById("b1");
var budg2 = document.getElementById("b2");
var budg3 = document.getElementById("b3");

var salariosId = document.getElementById("salarios");

/* Load Submit BUTTON */
var submit = document.getElementById("submit");

/*--- Inputs ---*/
    pA.value = 0; 
    pB.value = 0; 
    pC.value = 0; 
    pD.value = 0; 
    pE.value = 0; 
    pF.value = 0; 
    pG.value = 0; 
    pH.value = 0; 
    pI.value = 0; 
    pJ.value = 0; 
    pK.value = 0; 
    pL.value = 0; 
    pM.value = 0; 
    pN.value = 0; 
    pO.value = 0; 
    pP.value = 0; 
    pQ.value = 0; 
    pR.value = 0; 
    pS.value = 0; 

/*--- Results ---*/
    v1.innerHTML = 0;
    v2.innerHTML = 0;
    v3.innerHTML = 0;
    v4.innerHTML = 0;

/*--- Budgets ---*/
    budg1.innerHTML = budgetAlimentacao;
    budg2.innerHTML = budgetGasolina;
    budg3.innerHTML = budgetPortagens;

/*--- Salarios ---*/
    var salarios = salarioA + salarioB;
    salariosId.innerHTML = salarios + " €";


/* SUBMIT button Calculates All Values and Show Them */

var foodValues;
var gasValues;
var tollsValues;
var allValues;

var a;
var b;
var c;
var grTwo = document.getElementById("graph2");

submit.onclick = function() {
    allValues = 
      parseFloat(pA.value) 
    + parseFloat(pB.value)
    + parseFloat(pC.value)
    + parseFloat(pD.value)
    + parseFloat(pE.value)
    + parseFloat(pF.value)
    + parseFloat(pG.value)
    + parseFloat(pH.value)
    + parseFloat(pI.value)
    + parseFloat(pJ.value)
    + parseFloat(pK.value)
    + parseFloat(pL.value)
    + parseFloat(pM.value)
    + parseFloat(pN.value)
    + parseFloat(pO.value)
    + parseFloat(pP.value)
    + parseFloat(pQ.value)
    + parseFloat(pR.value)
    + parseFloat(pS.value);

    /* ALIMENTACAO */
    foodValues = parseFloat(pP.value);
    v1.innerHTML = budgetAlimentacao - foodValues + " €";

    /* GASOLINA */
    gasValues = parseFloat(pQ.value);
    v2.innerHTML = budgetAlimentacao - gasValues + " €";

    /* PORTAGENS */
    tollsValues = parseFloat(pR.value);
    v3.innerHTML = budgetAlimentacao - tollsValues + " €";

    /* TOTAL */ 
    v4.innerHTML = salarios - allValues + " €";

    
    /* Graphic Data */
    a = salarios;
    b = salarios - allValues;
    c = (b * 100) / a;

    grTwo.classList.remove("blink");

    if (c < 1){
        c = 0;
    } 

    grTwo.style.width = c + "%";
    grTwo.innerHTML = parseInt(c) + " %";

}












/*--- Extras : Screenshot / SAVE button / Rename with Date / Refresh Window / Show Date ---*/
var date;
var dateDetails;
var dateDetails2;
var dateText;
var month;
var monthText;

function giveMeDate() {
    date = new Date();
    
    month = date.getMonth();

    if (month == 0){
        monthText = "Janeiro";
    }
    else if (month == 1){
        monthText = "Fevereiro";
    }
    else if (month == 2){
        monthText = "Março";
    }
    else if (month == 3){
        monthText = "Abril";
    }
    else if (month == 4){
        monthText = "Maio";
    }
    else if (month == 5){
        monthText = "Junho";
    }
    else if (month == 6){
        monthText = "Julho";
    }
    else if (month == 7){
        monthText = "Agosto";
    }
    else if (month == 8){
        monthText = "Setembro";
    }
    else if (month == 9){
        monthText = "Outubro";
    }
    else if (month == 10){
        monthText = "Novembro";
    }
    else if (month == 11){
        monthText = "Dezembro";
    }
      
    dateDetails = date.getDate() + "_" + monthText.substring(0,3) + "_" + date.getFullYear();
    dateDetails2 = date.getDate() + " de " + monthText + " de " + date.getFullYear();
}


function makeScreenshot()
{
    html2canvas(document.getElementById("screenshot"), {scale: 2}).then(canvas =>
    {
        canvas.id = "canvasID";
        var main = document.getElementById("main");
        while (main.firstChild) { main.removeChild(main.firstChild); }
        main.appendChild(canvas);
    });
}

document.getElementById("a-make").addEventListener('click', function()
{
    document.getElementById("a-make").style.display = "none";
    document.getElementById("submit").style.display = "none";
    makeScreenshot();
    document.getElementById("a-download").style.display = "inline";
    document.getElementById("a-refresh").style.display = "inline";

}, false);

document.getElementById("a-download").addEventListener('click', function()
{
    giveMeDate();
    this.href = document.getElementById("canvasID").toDataURL();
    this.download = dateDetails + ".png";
}, false);

document.getElementById("a-refresh").addEventListener('click', function()
{
    document.location.reload(true);
}, false);


/* Show date */
var dateId = document.getElementById("displayDate");

window.onload = function(){
    giveMeDate();
    dateId.innerHTML = dateDetails2;
};






