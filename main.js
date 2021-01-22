const mesDiv = document.getElementsByTagName("div");
const divCustom = document.createElement("div");
const article = document.getElementById("notreBase");

divCustom.style.width = "10%";
divCustom.style.height = "10%";

let arrSquare = [];

function genererCouleurs() {
	if (article.innerHTML != "") article.innerHTML = "";
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			// Je créer une div custom en clonant le modèle divCustom
			const uneDivCustom = divCustom.cloneNode();
			const estUni = Math.floor(Math.random() * 2);
			// J'applique une couleur aléatoire
			if (estUni == 1) {
				uneDivCustom.style.backgroundColor =
					"rgb(" +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					")";
			} else {
				uneDivCustom.style.background =
					"linear-gradient(" +
					Math.floor(Math.random() * 361) +
					"deg,rgb(" +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					"), rgb(" +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					"," +
					Math.floor(Math.random() * 256) +
					"))";
			}
			arrSquare.push(uneDivCustom);
			article.append(uneDivCustom);
		}
	}
}	
 genererCouleurs();
const buttonGaspard = document.getElementById("gaspard");
document.addEventListener("click", function () {
	genererCouleurs();
});
