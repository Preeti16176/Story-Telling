// Function to start the story
function startStory() {
    // Hide the home page and show the chapter selection page
    document.getElementById("homePage").style.display = "none";
    document.getElementById("storyPage").style.display = "block";
}

// Function to start a specific chapter
function startChapter(chapter) {
    // Hide the chapter selection page and show the story page with selected chapter
    document.getElementById("storyPage").style.display = "none";
    document.getElementById("chapterPage").style.display = "block";

    // Hide all chapters initially
    document.querySelectorAll('.story-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected chapter
    document.getElementById(`chapter-${chapter}`).style.display = 'block';

    // Trigger animation for the selected chapter
    animateChapter(chapter);
}

// Function to animate the story sections
function animateChapter(chapter) {
    const section = document.getElementById(`chapter-${chapter}`);
    
    // Trigger animation on chapter section (fade-in + slide-up effect)
    gsap.to(section, { opacity: 1, y: 0, duration: 1 });
}
