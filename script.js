
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}



// searvice section script

const cardData = [
    {
        title: "Super Easy to Use",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "img/easy.jpg",
        iconSrc: "img/icone/easy.svg",
        learnMoreLink: "#"
    },
    {
        title: "Super Easy to Use",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "img/easy.jpg",
        iconSrc: "img/icone/easy.svg",
        learnMoreLink: "#"
    },
    {
        title: "Super Easy to Use",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageSrc: "img/easy.jpg",
        iconSrc: "img/icone/easy.svg",
        learnMoreLink: "#"
    }
    
];


function createCardSection(data) {
    const section = document.createElement("div");
    section.classList.add("cards");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const icon = document.createElement("aside");
    const iconImg = document.createElement("img");
    iconImg.src = data.iconSrc;
    iconImg.alt = "easy";
    icon.appendChild(iconImg);

    const title = document.createElement("h2");
    title.textContent = data.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = data.content;

    const learnMoreLink = document.createElement("a");
    learnMoreLink.href = data.learnMoreLink;
    learnMoreLink.textContent = "Learn More →";

    cardContent.appendChild(icon);
    cardContent.appendChild(title);
    cardContent.appendChild(paragraph);
    cardContent.appendChild(learnMoreLink);

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = data.imageSrc;
    image.alt = "easy";

    cardImage.appendChild(image);

    section.appendChild(cardContent);
    section.appendChild(cardImage);

    return section;
}


function initializeDynamicSections() {
    const container = document.getElementById("dynamicSectionsContainer");

    // Loop through the data and create card sections
    cardData.forEach((data, index) => {
        const cardSection = createCardSection(data);
        container.appendChild(cardSection);
    
        if (index === 1) {
            cardSection.classList.add("secondCard");
        }
    });
}

initializeDynamicSections();
