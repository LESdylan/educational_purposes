document.addEventListener("DOMContentLoaded", function () {
    // Récupération des éléments du DOM
    const accountNameInput = document.getElementById("account-name");
    const initialBalanceInput = document.getElementById("initial-balance");
    const createAccountButton = document.getElementById("create-account");

    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");
    const typeInput = document.getElementById("type");
    const addTransactionButton = document.getElementById("add-transaction");

    const currentBalanceParagraph = document.getElementById("current-balance");
    const transactionsList = document.getElementById("transactions-ul");

    let account = null; // Variable pour stocker l'objet Compte

    // Écouter le clic sur le bouton "Créer le Compte"
    createAccountButton.addEventListener("click", function () {
        const accountName = accountNameInput.value;
        const initialBalance = parseFloat(initialBalanceInput.value);

        // Vérifier que les champs ne sont pas vides
        if (accountName && !isNaN(initialBalance)) {
            // Créer un nouvel objet Compte
            account = new Compte(accountName, initialBalance);

            // Mettre à jour l'affichage du solde actuel
            updateCurrentBalance();

            // Activer la section de transactions
            descriptionInput.disabled = false;
            amountInput.disabled = false;
            typeInput.disabled = false;
            addTransactionButton.disabled = false;
        } else {
            alert("Veuillez remplir tous les champs correctement.");
        }
    });

    // Écouter le clic sur le bouton "Ajouter la Transaction"
    addTransactionButton.addEventListener("click", function () {
        // Vérifier que le compte a été créé
        if (account) {
            const description = descriptionInput.value;
            const amount = parseFloat(amountInput.value);
            const type = typeInput.value;

            // Vérifier que les champs ne sont pas vides
            if (description && !isNaN(amount)) {
                // Ajouter la transaction au compte
                account.ajouterTransaction(description, amount, type);

                // Mettre à jour l'affichage du solde actuel
                updateCurrentBalance();

                // Afficher la liste des transactions
                displayTransactionsList();
            } else {
                alert("Veuillez remplir tous les champs correctement.");
            }
        } else {
            alert("Veuillez d'abord créer un compte.");
        }
    });

    // Fonction pour mettre à jour l'affichage du solde actuel
    function updateCurrentBalance() {
        currentBalanceParagraph.textContent = `Solde actuel: $${account.solde.toFixed(2)}`;
    }

    // Fonction pour afficher la liste des transactions
    function displayTransactionsList() {
        // Effacer la liste actuelle
        transactionsList.innerHTML = "";

        // Ajouter chaque transaction à la liste
        for (const transaction of account.transactions) {
            const li = document.createElement("li");
            li.textContent = `${transaction.description} - ${transaction.montant.toFixed(2)} (${transaction.type})`;
            transactionsList.appendChild(li);
        }
    }
});
