// searvice section script

const cardData = [
    {
        title: "Super Easy to Use",
        content: "At Hostify, we believe that managing your hosting should be as easy as 1-2-3. That's why we've designed our platform to provide a super user-friendly experience, making it a breeze for beginners and seasoned users alike.",
        imageSrc: "img/easy.jpg",
        iconSrc: "img/icone/easy.svg",
        learnMoreLink: "#"
    },
    {
        title: "Simply fast websites",
        content: "Experience blazing-fast websites with Hostify. Our powerful infrastructure ensures rapid loading times, enhancing user experience and SEO. Simply fast websites mean more engagement and better performance for your online presence.",
        imageSrc: "img/fast.jpg",
        iconSrc: "img/icone/computer.svg",
        learnMoreLink: "#"
    },
    {
        title: "WordPress made easy",
        content: "Transform your WordPress experience with Hostify's user-friendly platform. Effortlessly manage, customize, and grow your WordPress site. Our intuitive tools and expert support make WordPress easy, so you can focus on creating content that matters",
        imageSrc: "img/wordpress.jpg",
        iconSrc: "img/icone/satting.svg",
        learnMoreLink: "#"
    },
    {
        title: "24/7 Expert Support",
        content: "Count on Hostify for round-the-clock expert support. Our dedicated team is here 24/7 to assist you with any queries or challenges. With Hostify, enjoy the peace of mind that comes with reliable support at all times.",
        imageSrc: "img/support.jpg",
        iconSrc: "img/icone/clock.svg",
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
    
        if (index === 1 || index === 3) {
            cardSection.classList.add("secondCard");
        }
    });
}

initializeDynamicSections();
