// Apparition en fondu des sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        setTimeout(() => {
            section.style.transition = "all 1s ease-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
});

// Fonction pour afficher un projet spécifique
function showProject(projectId) {
    document.getElementById("project-details").classList.remove("hidden"); // Afficher la section des détails
    document.getElementById("project-" + projectId).classList.remove("hidden"); // Afficher le projet spécifique
}

// Fonction pour cacher les détails du projet et revenir à la vue de portfolio
function hideProject() {
    document.getElementById("project-details").classList.add("hidden"); // Masquer la section des détails
    var projects = document.querySelectorAll(".project-detail");
    projects.forEach(function(project) {
        project.classList.add("hidden"); // Masquer tous les projets détaillés
    });
}
// Bouton de switch mode sombre
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Ajouter un bouton flottant
const modeButton = document.createElement("button");
modeButton.textContent = "Mode Sombre";
modeButton.className = "dark-toggle";
modeButton.onclick = toggleDarkMode;
document.body.appendChild(modeButton);
