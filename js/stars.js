// Function for Stars Background 

function stars() {
    const starCount = 450; 
    const starDiv = document.querySelector('.star-bg'); 
    let i = 0; 

    while (i < starCount) {
        const star = document.createElement('i'); 
        
        // Get Size of Web Page 
        const pageWidth  = document.documentElement.scrollWidth; 
        const pageHeight = document.documentElement.scrollHeight; 

        // Display Effect on Web Page According to its Width and Height 
        const x = Math.floor(Math.random() * pageWidth); 
        const y = Math.floor(Math.random() * pageHeight); 

        // Star Size 
        const size = Math.random() * 4; 

        // Position 
        star.style.left = x + 'px'; 
        star.style.top = y + 'px'; 

        // Star Width and Height 
        star.style.width = 1 + size + 'px'; 
        star.style.height = 1 + size + 'px'; 

        // Animation Delay - speed/quantity of blinking effect 
        const duration = Math.random() * 2; 
        star.style.animationDelay = duration + 's'; 

        // Add Created i Element to Star Div 
        starDiv.appendChild(star); 
        // Increment i 
        i++ 
    } 
} 

stars(); 
