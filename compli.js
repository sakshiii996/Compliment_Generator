const compliments = {
    romantic: [
        "Being with you feels like home.",
        "I fall for you more and more every single day.",
        "You make my world brighter just by being in it.",
        "You’re not just my love, you’re my favorite everything.",
        "My heart beats happier whenever you’re around.",
        "You make ordinary moments feel magical.",
        "You’re the reason I believe in love.",
        "I can never get enough of your eyes—they’re my favorite view.",
        "I feel lucky just to call you mine.",
        "You make me want to be the best version of myself.",
        "Every little thing you do makes me love you more.",
        "My favorite place is right next to you.",
        "You’re the most beautiful chapter of my life.",
        "You make love feel effortless and pure.",
        "I’d choose you in every lifetime, without a doubt.",
        "Your voice is my favorite sound in the world.",
        "Every hug from you feels like the safest place on earth.",
        "You don’t just touch my hand—you touch my soul.",
        "You’re not my dream come true—you’re better than I ever dreamed.",
        "Your smile is the most beautiful part of my day.",
    ],
    funny: [

        "You must be a magician, because every time I look at you, everyone else disappears… and so does my brain.",
        "If you were a vegetable, you’d be a cute-cumber.",
        "You’re proof that even my bad decisions sometimes turn out amazing.",
        "You make my heart race faster than when the waiter brings food to the wrong table.",
        "You must be tired, because you’ve been running through my weird thoughts all day.",
        "If being attractive was a crime, you’d be serving a life sentence.",
        "You’re like a cloud… because every time you go away, it gets dark and I get grumpy.",
        "You’re my favorite notification.",
        "If kisses were snowflakes, I’d send you a blizzard… but knowing me, I’d trip and fall in it.",
        "You’re so sweet, you could put Hershey’s out of business.",
        "You must be Google, because you’ve got everything I’ve been searching for (plus some weird stuff).",
        "You make me smile wider than when someone says free pizza.",
        "You’re the reason my phone battery dies so quickly.",
        "If I had a star for every time you made me laugh, I’d have a galaxy.",
        "You’re like my favorite hoodie—I never want to let you go.",
        "Your laugh is so contagious, it should come with a health warning.",
        "You’re the reason I check my hair in the mirror… and then mess it up again.",
        "You’re like my password—I can’t function without you.",
        "If you were a meme, you’d be the one I never stop sending.",
        "You’re like WiFi—life’s better when you’re around.",
    ],
    motivational: [
        "You have a strength that inspires everyone around you.",
        "Your dedication is proof that success is coming your way.",
        "You handle challenges like a pro, and I admire that so much.",
        "You have the power to achieve anything you set your mind to.",
        "Your hard work today is building the future you deserve.",
        "You shine brightest when things get tough.",
        "You turn obstacles into stepping stones.",
        "Your focus and persistence make you unstoppable.",
        "You inspire others without even realizing it.",
        "You’re living proof that consistency beats talent.",
        "You have a fire inside you that nothing can put out.",
        "You don’t quit, and that’s why you’ll win.",
        "Your journey may be tough, but your strength is tougher.",
        "You’re writing a success story with every step you take.",
        "Your mindset is your greatest superpower.",
        "You’ve come so far—imagine how much further you’ll go.",
        "You have the courage most people only wish they had.",
        "Your growth is proof that discipline pays off.",
        "You are capable of more than you’ll ever give yourself credit for.",
        "You don’t just dream—you actually work for it, and that’s rare.",
    ],
    friendly: [
        "You make everything more fun just by being there.",
        "You have the kind of vibe that makes people feel comfortable instantly.",
        "Your sense of humor could cheer up anyone.",
        "You’re one of the most genuine people I know.",
        "You listen in a way that makes people feel truly heard.",
        "Your energy is so positive—it’s contagious.",
        "You’re the kind of friend everyone wishes they had.",
        "Spending time with you always feels effortless.",
        "You’re amazing at making people feel included.",
        "You bring out the best in people.",
        "Your smile can make even the toughest day lighter.",
        "You give the best advice, without even trying too hard.",
        "You’re dependable in the best way possible.",
        "You have a talent for making memories unforgettable.",
        "You know how to make people laugh at just the right moment.",
        "You’re the kind of person who makes places feel like home.",
        "You bring warmth wherever you go.",
        "You’re so easy to trust—it’s a rare quality.",
        "You’re the type of person who makes ordinary days special.",
        "Talking to you always brightens my day.",
    ],
};

const complimentText = document.querySelector(".complimentText");
const categorySelect = document.getElementById("category");
const newBtn = document.querySelector(".new");
const speakBtn = document.querySelector(".speak");
const favBtn = document.querySelector(".fav");
const shareBtn = document.querySelector(".share");
const DarkModeBtn = document.querySelector(".darkMode");
const favList = document.querySelector(".favBar ul");
const favourites = [];



const modal = document.getElementById("shareModal");
const shareInput = document.getElementById("shareText");
const copyBtn = document.getElementById("copyBtn");
const closeBtn = document.querySelector(".closeBtn");

const whatsappLink = document.querySelector(".whatsapp");
const instagramLink = document.querySelector(".instagram");
const twitterLink = document.querySelector(".twitter");
const linkedinLink = document.querySelector(".linkedin");

// new compliment 
newBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    const pool = compliments[category];
    const random = pool[Math.floor(Math.random() * pool.length)];
    complimentText.textContent = random;
    complimentText.setAttribute("data-category", category);
});

//speak compliment
speakBtn.addEventListener("click", () => {
    const text = complimentText.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
})

// Add to fav 
favBtn.addEventListener("click", () => {
    const text = complimentText.textContent.trim();
    const category = complimentText.getAttribute("data-category");
    if (text === "") return;
    if(!favourites.includes(text)){
        favourites.push(text);
    
        const li = document.createElement("li");
        li.textContent = `[${category}] ${text}`;
        favList.appendChild(li);
    }
    else {
        alert("This Compliment is already in your favourites !");
    }
});

// Share modal
shareBtn.addEventListener("click", () => {
    const text = complimentText.textContent;
    shareInput.value = text;

    const encoded = encodeURIComponent(text);

    whatsappLink.href = `https://wa.me/?text=${encoded}`;
    instagramLink.href = `https://www.instagram.com/?text=${encoded}`;
    twitterLink.href = `https://twitter.com/intent/tweet?text=${encoded}`;
    linkedinLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;

    modal.classList.add("active");
});

copyBtn.addEventListener("click", () => {
    shareInput.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Dark mode toggle 

DarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});