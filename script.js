
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}
// dynamic list item for search domain name --------------------------------------

const domainData = [
    { domain: ".com", price: "$9.26" },
    { domain: ".sg", price: "$7.91" },
    { domain: ".space", price: "$12.98" },
    { domain: ".info", price: "$14.15" },
    { domain: ".net", price: "$16.15" },
    { domain: ".xyz", price: "$10.15" }
  ];
  
  const domainList = document.getElementById("domainList");
  const moreLink = document.getElementById("moreLink");
  
  domainData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.domain} ${item.price}`;
    domainList.insertBefore(li, moreLink);
  });

  
// searvice section script-------------------------------------------------------------

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

    cardData.forEach((data, index) => {
        const cardSection = createCardSection(data);
        container.appendChild(cardSection);
    
        if (index === 1 || index === 3) {
            cardSection.classList.add("secondCard");
        }
    });
}

initializeDynamicSections();


// dynamic data for Controll pannel--------------------------------------------------


const badgeData = [
    {
      iconSrc: "img/icone/snap.svg",
      title: "Easy Start & Managed Updates",
      content: "Our cloud plans include easy onboarding for new and existing sites and managed WordPress and WooCommerce auto-updates."
    },
    {
      iconSrc: "img/icone/growth.svg",
      title: "Staging, Git & WP-CLI",
      content: "We make your WordPress and WooCommerce development flow easier with a convenient staging tool and Git and WP-CLI integration."
    },
    {
      iconSrc: "img/icone/wordpress.svg",
      title: "Dynamic Caching & More",
      content: "Speed up your WordPress and Woo sites with our SG Optimizer plugin through smart dynamic caching and multiple other performance optimizations."
    }
  ];
  
  const badgeList = document.getElementById("badgeList");
  
  badgeData.forEach(badge => {
    const badgeContent = document.createElement("div");
    badgeContent.classList.add("badgeContent");
  
    const icon = document.createElement("img");
    icon.src = badge.iconSrc;
    icon.alt = "badge icon";
  
    const badgeText = document.createElement("div");
    badgeText.classList.add("badgeText");
  
    const title = document.createElement("h2");
    title.textContent = badge.title;
  
    const small = document.createElement("small");
    small.textContent = badge.content;
  
    badgeText.appendChild(title);
    badgeText.appendChild(small);
  
    badgeContent.appendChild(icon);
    badgeContent.appendChild(badgeText);
  
    badgeList.appendChild(badgeContent);
  });


 // Sample data for the footer -------------------------------------------------------
 const footerData = {
    company: [
        { text: 'About', link: '#' },
        { text: 'Affiliates', link: '#' },
        { text: 'Blog', link: '#' },
        // Add more company links as needed
    ],
    products: [
        { text: 'WordPress Hosting', link: '#' },
        { text: 'Free Automated WordPress', link: '#' },
        { text: 'Migrations', link: '#' },
        // Add more products links as needed
    ],
    support: [
        { text: 'Contact', link: '#' },
        { text: 'Knowledge Base', link: '#' },
        { text: 'Forums', link: '#' },
        // Add more support links as needed
    ],
    domains: [
        { text: 'Domain Checker', link: '#' },
        { text: 'Domain Transfer', link: '#' },
        { text: 'Free Domain', link: '#' },
        // Add more domains links as needed
    ],
    logo: {
        src: 'img/logo.png',
        alt: 'logo',
    },
    copyright: 'Copywrite &copy; 2024 Hostify',
};

// Function to create a single footer section
function createFooterSection(title, links) {
    const section = document.createElement('div');
    section.classList.add('single-footer');

    if (title === 'COMPANY') {
        const logoSection = document.createElement('div');
        logoSection.classList.add('logo');
        const logoImg = document.createElement('img');
        logoImg.src = footerData.logo.src;
        logoImg.alt = footerData.logo.alt;
        logoSection.appendChild(logoImg);

        const copyrightP = document.createElement('p');
        copyrightP.classList.add('Copywrite');
        copyrightP.innerHTML = footerData.copyright;

        section.appendChild(logoSection);
        section.appendChild(copyrightP);
    } else {
        const heading = document.createElement('h3');
        heading.textContent = title;
        section.appendChild(heading);

        const ul = document.createElement('ul');
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.link;
            a.textContent = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        });

        section.appendChild(ul);
    }

    return section;
}

// Function to initialize the dynamic content
function initializeDynamicContent() {
    const container = document.getElementById('dynamicFooterContent');

    // Create and append the sections
    container.appendChild(createFooterSection('COMPANY'));
    container.appendChild(createFooterSection('PRODUCTS', footerData.products));
    container.appendChild(createFooterSection('SUPPORT', footerData.support));
    container.appendChild(createFooterSection('DOMAINS', footerData.domains));
}

// Call the initialization function
initializeDynamicContent();