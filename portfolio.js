const skills = document.querySelectorAll(".skill");
const infoBox = document.getElementById("skill-info");

skills.forEach(skill => {
    skill.addEventListener("click", () => {

        skills.forEach(s => s.classList.remove("active"));
        skill.classList.add("active");

        infoBox.innerHTML = `
            <h3>${skill.querySelector("span").textContent}</h3>
            <p>${skill.dataset.info}</p>
        `;
    });
});