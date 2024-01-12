// Sample data for the footer
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
        src: '/img/logo.png',
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