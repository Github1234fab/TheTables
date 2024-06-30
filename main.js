//récupération des éléments du DOM
//récupération de l'input user
let numberChosenByUser = document.querySelector(".input-choice");
//récupération du button submit
let button = document.querySelector(".button");
//récupération de la basile P pour afficher les résultats
let displayOperationResult = document.querySelector(".displayMultiplicationResult");
//récupération de la liste déroulante pour les opérations
let operationOptions = document.querySelector(".operation");



button.addEventListener("click", () => {
        //transformation en nombre de la valeur de l'input
        let numberValueChosenByUser = parseFloat(numberChosenByUser.value);
        console.log(numberValueChosenByUser);
        //stockage des symboles d'opérations
        let symbole;
        //stockage de la valeur de l'input
        let optionChosenByUser = operationOptions.value;
        //  array pour stocker les opérations dans la boucle for.
        let arrayOfResultat = [];

        // boucle for pour faire les opérations
        for (let i = 0; i <= 10; i++) {
                //pour stocker le résultat des opérations
                let result;

                switch (optionChosenByUser) {
                        case "multiplication":
                                result = numberValueChosenByUser * i;
                                console.log(result);
                                symbole = "x";
                                arrayOfResultat.push(`${numberValueChosenByUser} ${symbole} ${i} = ${result}`);
                                break;
                        case "addition":
                                result = numberValueChosenByUser + i;
                                symbole = "+";
                                arrayOfResultat.push(`${numberValueChosenByUser} ${symbole} ${i} = ${result}`);
                                break;
                        case "division":
                                result = (numberValueChosenByUser / numberValueChosenByUser) * i;
                                console.log(result);
                                symbole = "/";
                                arrayOfResultat.push(`${numberValueChosenByUser * i} ${symbole} ${numberValueChosenByUser} = ${result}`);
                                break;
                        case "soustraction":
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
                displayResult.style.display = "flex";
                displayOperationResult.appendChild(displayResult);
        });
});
