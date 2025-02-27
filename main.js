//récupération des boutons  de choix d'opération
let operationButtonsChoice = document.querySelectorAll(".button-choice-operation");
//récupération de l'input user
// let numberChosenByUser = document.querySelector(".input-choice");
let numberChosenByUser = document.querySelectorAll(".button-choice-table");
//récupération du button submit
let button = document.querySelector(".button-submit");
//récupération de la basile P pour afficher les résultats
let displayOperationResult = document.querySelector(".displayMultiplicationResult");
//récupération de la liste déroulante pour les opérations
let operationOptions = document.querySelector(".operation");
//stockage de la valeur de l'input

//écouteur sur choix chiffre table
let numberValueChosenByUser;

//écouteur sur choix opération
let operationButtonsValueChoice;

// Garde la trace du bouton actuellement sélectionné
let selectedTableButton = null;
let selectedOperationButton = null;

// ++++++++++++++++++++++++++++++++++++++++++
//écoute de l'événement click sur les buttons de choix de table
numberChosenByUser.forEach((el) => {
        el.addEventListener("click", (e) => {
                numberValueChosenByUser = parseFloat(e.target.value);
                if (selectedTableButton) {
                        selectedTableButton.classList.remove("button-table-chosen");
                }
                el.classList.add("button-table-chosen");
                selectedTableButton = el;
        });
});

// ++++++++++++++++++++++++++++++++++++++++++
// écoute de l'événement click sur les buttons de choix d'opération
operationButtonsChoice.forEach((el) => {
        el.addEventListener("click", (e) => {
                operationButtonsValueChoice = e.target.value;
                if (selectedOperationButton) {
                        selectedOperationButton.classList.remove("button-operation-chosen");
                }
                el.classList.add("button-operation-chosen");
                selectedOperationButton = el;
        });
});

// ++++++++++++++++++++++++++++++++++++++++++
//écouter l'événement click sur le button submit
button.addEventListener("click", () => {
        //stockage des symboles d'opérations
        let symbole;
        //stockage de la valeur de l'input
        // let optionChosenByUser = operationOptions.value;
        //  array pour stocker les opérations dans la boucle for.
        let arrayOfResultat = [];

        // boucle for pour faire les opérations
        for (let i = 1; i <= 10; i++) {
                //pour stocker le résultat des opérations
                let result;
                switch (operationButtonsValueChoice) {
                        case "x":
                                result = numberValueChosenByUser * i;
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

        // ++++++++++++++++++++++++++++++
        //affichage des résultats dans le DOM
        displayOperationResult.innerHTML = "";
        arrayOfResultat.forEach((el) => {
                let displayResult = document.createElement("li");
                displayResult.textContent = el;
                displayOperationResult.appendChild(displayResult);
                displayOperationResult.classList.add("shadowResult");
        });
});
