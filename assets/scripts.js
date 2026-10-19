//--------------------------------------
//             HORLOGE
//--------------------------------------

const footer = document.getElementById("site-footer") || document.querySelector("footer");

if (footer) {

    const clock = document.createElement("p");
    clock.id = "clock";
    footer.appendChild(clock);

    function updateClock() {

        const now = new Date();

        let date = now.toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        // Met une majuscule au premier caractère
        date = date.charAt(0).toUpperCase() + date.slice(1);

		const hours = String(now.getHours()).padStart(2, "0");
		const minutes = String(now.getMinutes()).padStart(2, "0");

		clock.innerHTML = `
		🗓️	${date} |
		⌚	${hours}<span class="separator"> : </span>${minutes}
		`;

    }

    updateClock();

    // Premier rafraîchissement exactement au changement de minute
    const delay = (60 - new Date().getSeconds()) * 1000;

    setTimeout(() => {
        updateClock();
        setInterval(updateClock, 60000);
    }, delay);

}



//----------------------------
//          DARK THEME
//----------------------------
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
	document.body.classList.toggle("dark");

	});



//--------------------------------------
//      AJOUT DE NOUVELLES CARDS
//--------------------------------------
const container = document.querySelector(".mesCards");

cards.forEach(card => {

    const target = card.target ?? "_blank";

    const rel = target === "_blank"
        ? "noopener noreferrer"
        : "";

    const content = card.icon
        ? `<img src="${card.icon}" alt="${card.title}">`
        : `<span>${card.text ?? ""}</span>`;

    const color = card.color
        ? `background-color:${card.color};`
        : "";


    container.insertAdjacentHTML("beforeend", `
        <div class="card-container">

            <a href="${card.url}"
               target="${target}"
               rel="${rel}">

                <div class="card"
                     style="${color}"
                     title="${card.title}">
                    ${content}
                </div>

            </a>

            <label class="card-label">
                ${card.label ?? card.title}
            </label>

        </div>
    `);

});



//--------------------------------------
//              MODALE
//--------------------------------------

document.querySelectorAll("[data-modal]").forEach(button => {

    button.addEventListener("click", () => {

        document
            .getElementById(button.dataset.modal)
            .showModal();

    });

});

document.querySelectorAll("[data-close]").forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});
