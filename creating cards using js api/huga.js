fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json())
    .then((data) => {
        const container = document.getElementById("cardsContainer");
        
        data.results.forEach((user) => {
            // Create card container
            const card = document.createElement("div");
            card.className = "bg-slate-800 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-200";
            
            // Create image element
            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = `${user.name.first} ${user.name.last}`;
            img.className = "w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-slate-600 shrink-0";
            
            // Create info container
            const infoDiv = document.createElement("div");
            infoDiv.className = "min-w-0";
            
            // Create name heading
            const name = document.createElement("h3");
            name.className = "text-lg sm:text-xl font-bold text-white truncate";
            name.textContent = `${user.name.first} ${user.name.last}`;
            
            // Create email paragraph
            const email = document.createElement("p");
            email.className = "text-gray-400 text-xs sm:text-sm mb-3 truncate";
            email.textContent = user.email;
            
            // Create status badge
            const badge = document.createElement("span");
            badge.className = "inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full";
            badge.textContent = "Active";
            
            // Append elements to info div
            infoDiv.appendChild(name);
            infoDiv.appendChild(email);
            infoDiv.appendChild(badge);
            
            // Append img and info to card
            card.appendChild(img);
            card.appendChild(infoDiv);
            
            // Append card to container
            container.appendChild(card);
        });
    })
    .catch((error) => console.error("Error fetching users:", error));