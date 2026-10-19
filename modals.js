
/* =========================================================
   GESTION DES MODALES
========================================================= */

// Conteneur qui recevra les modales chargées
const modalContainer = document.getElementById("modal-container");


/* =========================================================
   OUVERTURE D'UNE MODALE
========================================================= */

document.addEventListener("click", async (event) => {

    // Vérifie si le clic provient d'un bouton d'ouverture
    const boutonOuverture = event.target.closest("[data-modal]");

    if (boutonOuverture) {

        // Récupère le nom de la modale à ouvrir
        const nom = boutonOuverture.dataset.modal;

        // Convention : le fichier et l'identifiant portent le même nom
        const idModal = `modal-${nom}`;

        // Vérifie si la modale est déjà présente dans la page
        let modal = document.getElementById(idModal);

        // Si elle n'existe pas encore, on la charge
        if (!modal) {

            try {

                // Récupère le fichier HTML correspondant
                const reponse = await fetch(`modals/${nom}.html`);

                // Vérifie que le fichier a bien été trouvé
                if (!reponse.ok) {
                    throw new Error(
                        `Impossible de charger ${nom}.html`
                    );
                }

                // Convertit la réponse en texte HTML
                const html = await reponse.text();

                // Crée un conteneur temporaire pour analyser le HTML
                const template = document.createElement("template");
                template.innerHTML = html.trim();

                // Récupère la balise dialog
                modal = template.content.querySelector("dialog");

                // Vérifie que le fichier contient bien une modale
                if (!modal || modal.id !== idModal) {
                    throw new Error(
                        `La modale attendue est introuvable : ${idModal}`
                    );
                }

                // Insère la modale dans la page
                modalContainer.appendChild(modal);

            } catch (erreur) {

                // Affiche le détail technique dans la console
                console.error(erreur);

                // Informe l'utilisateur
                alert("Impossible de charger cette modale.");

                return;
            }
        }

        // Ouvre la modale
        if (!modal.open) {
            modal.showModal();
        }

        return;
    }

    /* =====================================================
       FERMETURE D'UNE MODALE
    ===================================================== */

    // Fonctionne également pour les modales chargées après coup
    const boutonFermeture = event.target.closest("[data-close]");

    if (boutonFermeture) {

        // Recherche la modale contenant le bouton
        const modal = boutonFermeture.closest("dialog");

        // Ferme la modale si elle existe et est ouverte
        if (modal?.open) {
            modal.close();
        }
    }
});
