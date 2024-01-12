// dynamic data for Controll pannel--------------------------------------------------


const badgeData = [
    {
      iconSrc: "/img/icone/snap.svg",
      title: "Easy Start & Managed Updates",
      content: "Our cloud plans include easy onboarding for new and existing sites and managed WordPress and WooCommerce auto-updates."
    },
    {
      iconSrc: "/img/icone/growth.svg",
      title: "Staging, Git & WP-CLI",
      content: "We make your WordPress and WooCommerce development flow easier with a convenient staging tool and Git and WP-CLI integration."
    },
    {
      iconSrc: "/img/icone/wordpress.svg",
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
