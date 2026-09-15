// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId !== "#") {

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        }

    });

});


// Header Button

function showMessage() {

    alert("Welcome to Reddy Anna Sports Entertainment!");

}


// Hero Explore Button

function exploreGames() {

    document.querySelector('#games').scrollIntoView({
        behavior: 'smooth'
    });

}


// Floating Contact Button - WhatsApp

function contactUs() {

    window.open(
        "https://wa.me/917509970907",
        "_blank"
    );

}


// Game Card Click Effect

document.querySelectorAll('.top-game-card').forEach(function(card) {

    card.addEventListener('click', function() {

        const name = this.querySelector('.game-name').innerText;

        alert("You selected: " + name);

    });

});
