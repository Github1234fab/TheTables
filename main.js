//récupération des éléments du DOM
//récupération des boutons  de choix d'opération
let operationButtonsChoice = document.querySelectorAll(".button-choice-operation");
//récupération de l'input user
// let numberChosenByUser = document.querySelector(".input-choice");
let numberChosenByUser = document.querySelectorAll(".button-choice-table");
//récupération du button submit
let button = document.querySelector(".button");
//récupération de la basile P pour afficher les résultats
let displayOperationResult = document.querySelector(".displayMultiplicationResult");
//récupération de la liste déroulante pour les opérations
let operationOptions = document.querySelector(".operation");
//stockage de la valeur de l'input
let numberValueChosenByUser;
//écoute de l'événement click sur les buttons de choix de table
numberChosenByUser.forEach((el) => {
        el.addEventListener("click", (e) => {
                console.log(e.target);
                numberValueChosenByUser = parseFloat(e.target.value);
                el.style.boxShadow = "0 0 10px 1px black inset";
        });
});


let operationButtonsValueChoice;

//écoute de l'événement click sur les buttons de choix d'opération
operationButtonsChoice.forEach((el) => {
        el.addEventListener("click", (e) => {
                console.log("operation");
                console.log(e.target);
                operationButtonsValueChoice = e.target.value;
                console.log(operationButtonsValueChoice);
        });
});

//écouter l'événement click sur le button submit
button.addEventListener("click", () => {
        console.log("submit");
        //stockage des symboles d'opérations
        let symbole;
        //stockage de la valeur de l'input
        // let optionChosenByUser = operationOptions.value;
        //  array pour stocker les opérations dans la boucle for.
        let arrayOfResultat = [];

        // boucle for pour faire les opérations
        for (let i = 0; i <= 10; i++) {
                //pour stocker le résultat des opérations
                let result;
                switch (operationButtonsValueChoice) {
                        case "x":
                                result = numberValueChosenByUser * i;
                                console.log(result);
                                symbole = "x";
                                arrayOfResultat.push(`${numberValueChosenByUser} ${symbole} ${i} = ${result}`);
                                break;
                        case "+":
                                result = numberValueChosenByUser + i;
                                symbole = "+";
                                arrayOfResultat.push(`${numberValueChosenByUser} ${symbole} ${i} = ${result}`);
                                break;
                        case "/":
                                result = (numberValueChosenByUser / numberValueChosenByUser) * i;
                                console.log(result);
                                symbole = "/";
                                arrayOfResultat.push(`${numberValueChosenByUser * i} ${symbole} ${numberValueChosenByUser} = ${result}`);
                                break;
                        case "-":
                                result = i + numberValueChosenByUser - numberValueChosenByUser;
                                symbole = "-";
                                arrayOfResultat.push(`${i + numberValueChosenByUser} ${symbole} ${numberValueChosenByUser} = ${result}`);
                                break;
                }
        }
        displayOperationResult.innerHTML = "";
        arrayOfResultat.forEach((el) => {
                let displayResult = document.createElement("li");
                displayResult.textContent = el;
                displayResult.style.fontSize = "0.8rem";
                displayOperationResult.appendChild(displayResult);
        });
});
