import { data } from "js/hp.js";

let filterHouse = []
let house = ""
let name = ""
////////////////////////////////// creation wizard card
function createWizardCard(image, name, actor, gender, house, windCore, alive) {
    let main = document.getElementsByTagName("main")
    let wizardCard = document.createElement("div")

    wizardCard.className = "one__wizard"
    main[0].append(wizardCard);

    wizardCard.insertAdjacentHTML("beforeend", "<img src=" + image + ">")
    wizardCard.insertAdjacentHTML("beforeend", "<h2>" + name + "</h2>")
    wizardCard.insertAdjacentHTML("beforeend", "<p>" + "Actor:" + " " + actor + "</p>")
    wizardCard.insertAdjacentHTML("beforeend", "<p>" + "Gender:" + " " + gender + "</p>")
    wizardCard.insertAdjacentHTML("beforeend", "<p>" + "House:" + " " + house + "</p>")
    wizardCard.insertAdjacentHTML("beforeend", "<p>" + "Wand core:" + " " + windCore + "</p>")
    wizardCard.insertAdjacentHTML("beforeend", "<p>" + "Alive:" + " " + (alive == (true) ? "yes" : "no") + "</p>")
}

/////////////////////////////////// creation all cards
function createAllCards(arrow) {

    arrow.forEach(element => {
        createWizardCard(element.image, element.name, element.actor, element.gender, element.house, element.wand.core, element.alive)
    });
    return;
}
createAllCards(data)


/////////////////////////////////// filtering by name, filtering by school

document.querySelector("select").addEventListener("change", filterBy);
document.querySelector("input").addEventListener("input", filterBy);
function filterBy() {
    name = document.querySelector("input").value
    house = document.querySelector("select").value
    if (house == "Choose one") {
        house = ""
    }

    filterHouse = data
        .filter(elem => elem.name.toLowerCase().includes(name.toLowerCase()))
        .filter(elem => elem.house.includes(house))

    document.querySelector("main").innerHTML = "";
    createAllCards(filterHouse);
}