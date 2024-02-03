// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('click', function () {
        chooseOption('no');
    });

    yesButton.addEventListener('click', function () {
        chooseOption('yes');
    });

    function moveNoButton() {
        // Define the rectangular area
        const minX = 50; // Minimum X-coordinate
        const maxX = 300; // Maximum X-coordinate
        const minY = 50; // Minimum Y-coordinate
        const maxY = 150; // Maximum Y-coordinate

        // Generate random coordinates within the specified rectangular area
        const newX = Math.random() * (maxX - minX) + minX;
        const newY = Math.random() * (maxY - minY) + minY;

        // Move the button to the new coordinates
        noButton.style.transition = 'transform 0.3s ease-in-out';
        noButton.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    function chooseOption(option) {
        const cat = document.getElementById('cat');
        const messageContainer = document.getElementById('message-container');
        const message = document.getElementById('message');

        if (option === 'no') {
            cat.classList.add('dodge-animation');
            setTimeout(() => {
                alert("Nice try, but there's only one answer!");
                cat.classList.remove('dodge-animation');
            }, 1000);
        } else if (option === 'yes') {
            cat.src = 'kissing-cat.gif';
            message.innerHTML = "YAAAY MMWAAH I LOVE YOU the LOML ♡ pliz let me take u out on a date my babygurll hehe";
            messageContainer.style.display = 'block';
            alert("Yay! 😻 pliz click ok to continue and also u dont have to choose YES or NO again.");
        }
    }
});
