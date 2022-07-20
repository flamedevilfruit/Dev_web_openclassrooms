//--NUMÉRO DE CONFIRMATION DU PANIER--


//Fonction pour récupérer l'identifiant de la commande
function numberConfirm() {
    if (localStorage.getItem("orderId") == null) {
        document.location.href = `index.html`; }
                //--Display Order Number--
    const NumCommande = document.getElementById("orderId");
    NumCommande.innerText =localStorage.getItem("orderId");
    localStorage.clear();
}
numberConfirm(); 
