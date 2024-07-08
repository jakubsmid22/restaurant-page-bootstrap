const navLinks = document.querySelectorAll(".nav-link");
const coursesHTML = document.getElementById("courses");
const startersBtn = document.getElementById("startersBtn");
const breakfastBtn = document.getElementById("breakfastBtn");
const lunchBtn = document.getElementById("lunchBtn");
const dinnerBtn = document.getElementById("dinnerBtn");
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

    courses.forEach(course => {
        const cardCol = document.createElement("div");
        cardCol.classList = ("col-lg d-flex justify-content-center align-items-center mb-5")
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "20rem";
        card.style.height = "25rem";
    
        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top", "object-fit-cover");
        cardImg.style.height = "50%"
        cardImg.src = course.img;
        card.append(cardImg);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = course.header;
        cardBody.append(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = course.description;
        cardBody.append(cardText);

        const price = document.createElement("h6");
        price.classList.add("card-text");
        price.textContent = course.price + " Kč";
        cardBody.append(price);

        card.append(cardBody);

        cardCol.append(card);

        coursesHTML.append(cardCol);
    })


}

const setActive = (e) => {
    document.querySelectorAll(".course").forEach(course => {
        course.classList.remove("course-active");
    })
    e.classList.add("course-active");
}

startersBtn.addEventListener("click", () => {
    getData().then(() => {
        displayMenu(menuItems.starters)
    });

    setActive(startersBtn);
});

breakfastBtn.addEventListener("click", () => {
    getData().then(() => {
        displayMenu(menuItems.breakfast)
    });

    setActive(breakfastBtn);
})

lunchBtn.addEventListener("click", () => {
    getData().then(() => {
        displayMenu(menuItems.lunch)
    });

    setActive(lunchBtn);
})

dinnerBtn.addEventListener("click", () => {
    getData().then(() => {
        displayMenu(menuItems.dinner)
    });

    setActive(dinnerBtn);
});

getData().then(() => {
    displayMenu(menuItems.starters)
});