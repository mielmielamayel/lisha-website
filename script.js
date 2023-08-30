let clickCount = 5; 

document.getElementById("heart")?.addEventListener("click", () => {
  if (clickCount > 0) {
    const clickInstructions = document.getElementById("click-instructions");
    
    if (clickCount === 1) {
      clickInstructions.textContent = "";
      document.getElementById("heart").style.animation = "explode 1s forwards";
      
      setTimeout(() => {
        const explosionText = document.createElement("p");
        explosionText.textContent = "I MISS YOU ELISHA";
        explosionText.className = "explosion-text";
        document.querySelector(".page").appendChild(explosionText);
        
        setTimeout(() => {
          window.location.href = "page3.html";
        }, 2000);
      }, 700); 
    } else {
      clickInstructions.textContent = `Click this heart ${clickCount - 1} times`;
      clickCount--;
    }
  }
});

document.getElementById("proceed-button")?.addEventListener("click", () => {
  window.location.href = "page2.html"; 
});

document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back();
});
