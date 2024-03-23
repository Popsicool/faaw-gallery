const showText = (e) => {
    const card = document.getElementById("info");
    card.style.display = "block";
    const text = `
    <h3 class= 'info-head'>${e.title}</h3>
    <p class= 'info-body'>${e.body}</p>
    `;
    card.innerHTML = text;
  };
  const hideText = () => {
    const card = document.getElementById("info");
    card.innerHTML = "";
    card.style.display = "none";
  };

  export {showText, hideText}