const navLinks = document.querySelectorAll(".nav-link");
const coursesHTML = document.getElementById("courses");
let menuItems = {};

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
});

const getData = () => {
    return fetch("data.json")
        .then(response => response.json())
        .then(data => {
            menuItems = data;
        });
};

const displayMenu = (course) => {
    coursesHTML.innerHTML = "";
    const courses = Object.values(course);
    console.log(courses);

    courses.forEach(course => {
        console.log(course);
        const cardCol = document.createElement("div");
        cardCol.classList = ("col-lg d-flex justify-content-center align-items-center mb-5")
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";
    
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = course.img;
        card.append(cardImg);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = course.header;
        cardBody.append(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = course.description;
        cardBody.append(cardText);

        card.append(cardBody);

        cardCol.append(card);

        coursesHTML.append(cardCol);
    })


}

getData().then(() => {
    displayMenu(menuItems.starters)
});
