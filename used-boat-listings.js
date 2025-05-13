
class UsedBoatListings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const dealer = this.getAttribute("dealer") || "default";
    const response = await fetch("./mock-used-boats.json");
    const data = await response.json();

    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; font-family: sans-serif;";

    data.forEach(boat => {
      const card = document.createElement("div");
      card.style.cssText = \`
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        width: 300px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      \`;

      card.innerHTML = \`
        <img src="\${boat.image}" alt="\${boat.make} \${boat.model}" style="width:100%; border-radius: 4px;">
        <h3>\${boat.year} \${boat.make} \${boat.model}</h3>
        <p style="font-weight:bold;">\$ \${boat.price.toLocaleString()}</p>
        <p>\${boat.description}</p>
        <small>Asset #: \${boat.name}</small>
      \`;

      container.appendChild(card);
    });

    this.shadowRoot.appendChild(container);
  }
}

customElements.define("used-boat-listings", UsedBoatListings);
