function analyzeSkin() {
    const result = document.getElementById("skinResult");
    const tips = document.getElementById("skinTips");
    const preview = document.getElementById("preview");
    const fileInput = document.getElementById("skinImage");
    const file = fileInput.files[0];
  
    if (!file) {
      result.textContent = "Please upload an image first.";
      preview.style.display = "none";
      return;
    }
        // Save history
function saveSkinLog(skinType) {
    const logs = JSON.parse(localStorage.getItem("skinLogs")) || [];
  
    const newLog = {
      date: new Date().toLocaleString(),
      type: skinType
    };
  
    logs.push(newLog);
    localStorage.setItem("skinLogs", JSON.stringify(logs));
  }

    
  
  function loadSkinHistory() {
    const logs = JSON.parse(localStorage.getItem("skinLogs")) || [];
    const list = document.getElementById("historyList");
    list.innerHTML = "";
  
    if (logs.length === 0) {
      list.innerHTML = "<li>No history yet.</li>";
      return;
    }
  
    logs.forEach(log => {
      const li = document.createElement("li");
      li.textContent = `${log.date} — ${log.type}`;
      list.appendChild(li);
    });
  }
  
  // Call this when page loads
  window.onload = loadSkinHistory;
  


 // Show preview
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  
    result.textContent = "Analyzing skin...";
  
    setTimeout(() => {
      const skinTypes = ["Oily", "Dry", "Combination", "Sensitive", "Normal"];
      const detected = skinTypes[Math.floor(Math.random() * skinTypes.length)];
  
      result.textContent = `Detected Skin Type: ${detected}`;
      tips.textContent = getTipsForSkinType(detected);
    }, 2000)    
    
    
    saveSkinLog(diagnosis); // if using real API
    // or
    saveSkinLog(detected); // if using fake skin type
    
  
    
    
    ;
  }
  
  function getTipsForSkinType(type) {
    const solutions = {
      "Oily": "Use a gentle cleanser, avoid harsh scrubs, and choose oil-free moisturizers.",
      "Dry": "Hydrate with thick moisturizers and avoid long hot showers.",
      "Combination": "Use a balanced routine: hydrating toner and a gel-based moisturizer.",
      "Sensitive": "Use fragrance-free, soothing products like aloe vera or oatmeal-based creams.",
      "Normal": "Maintain a simple routine with cleanser, moisturizer, and sunscreen."
    };
    return `Suggested Routine: ${solutions[type]}`;
  }



  function toggleMenu() {
    document.getElementById("navbarLinks").classList.toggle("show");
  }
  
  function showSection(section) {
    document.getElementById("aboutSection").style.display = section === "about" ? "block" : "none";
    document.getElementById("tipsSection").style.display = section === "tips" ? "block" : "none";
    document.querySelector(".main-container").style.display = section === "home" ? "block" : "none";
  
    // Optional: scroll to top of the section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
    
  