const introVideo = document.getElementById('intro-video');
const homepageContent = document.querySelector('.homepage-content');

// Play the video and hide it when the page loads
window.onload = function () {
    introVideo.play();
    introVideo.addEventListener('ended', () => {
        introVideo.style.display = 'none';
        homepageContent.style.animation = 'slideDown 1s forwards';
    });
};
