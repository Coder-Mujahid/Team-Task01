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