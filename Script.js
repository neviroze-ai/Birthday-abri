document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const surprise = document.getElementById("surprise");
    const wishBtn = document.getElementById("wishBtn");
    const wishText = document.getElementById("wishText");
    const giftBtn = document.getElementById("giftBtn");
    const foodReveal = document.getElementById("foodReveal");
    const chaosBtn = document.getElementById("chaosBtn");
    const chaosText = document.getElementById("chaosText");

    const partyEmojis = ["🎉", "✨", "⭐", "🔥", "🩵", "🎀", "💫", "🎈", "😭", "🧚🏻‍♀️"];

    openBtn.addEventListener("click", () => {
        surprise.classList.remove("hidden");
        document.body.classList.add("party");

        openBtn.textContent = "CHAOS UNLOCKED 😭🔥";
        openBtn.disabled = true;

        createConfetti(180);

        setTimeout(() => {
            surprise.scrollIntoView({
                behavior: "smooth"
            });
        }, 200);
    });

    wishBtn.addEventListener("click", () => {

        wishText.textContent =
            "May your stars always find you, my Star Fairy. ⭐🩵";

        wishBtn.textContent = "WISH SENT ✨";
        wishBtn.disabled = true;

        createConfetti(80);

        burstEmojis(20);
    });

    chaosBtn.addEventListener("click", () => {

        const messages = [
            "YOU PRESSED IT. WHY WOULD YOU DO THAT 😭",
            "STAR FAIRY HAS OFFICIALLY LOST CONTROL ⭐",
            "FIRE LADY APPROVES THIS CHAOS 🔥",
            "BIRTHDAY SECURITY HAS BEEN NOTIFIED 🚨",
            "TOO LATE. THE PARTY IS ESCALATING.",
            "ERROR 404: NORMAL BIRTHDAY NOT FOUND.",
            "YOU HAVE UNLOCKED MAXIMUM NONSENSE."
        ];

        chaosText.textContent =
            messages[Math.floor(Math.random() * messages.length)];

        createConfetti(100);
        burstEmojis(35);

        chaosBtn.textContent = "I REGRET NOTHING 😭";
    });

    giftBtn.addEventListener("click", () => {

        foodReveal.classList.remove("hidden");

        giftBtn.textContent = "BIRYANI UNLOCKED 🍛";
        giftBtn.disabled = true;

        createConfetti(220);
        burstEmojis(40);

        setTimeout(() => {
            foodReveal.scrollIntoView({
                behavior: "smooth"
            });
        }, 300);
    });

    function createConfetti(amount) {

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("div");

            piece.className = "confetti-piece";

            const size = 5 + Math.random() * 9;
            const duration = 2.5 + Math.random() * 2;

            piece.style.left = Math.random() * 100 + "vw";
            piece.style.width = size + "px";
            piece.style.height = size * 1.7 + "px";
            piece.style.background =
                randomColor();
            piece.style.borderRadius =
                Math.random() > .5 ? "50%" : "2px";
            piece.style.animationDuration =
                duration + "s";
            piece.style.animationDelay =
                Math.random() * .8 + "s";
            piece.style.setProperty(
                "--drift",
                (Math.random() * 400 - 200) + "px"
            );

            document.getElementById("confetti").appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, (duration + 1) * 1000);
        }
    }

    function randomColor() {

        const colors = [
            "#ff8a65",
            "#ffb49f",
            "#ff9fbd",
            "#ffd166",
            "#8edcff",
            "#e9faff"
        ];

        return colors[
            Math.floor(Math.random() * colors.length)
        ];
    }

    function burstEmojis(amount) {

        for (let i = 0; i < amount; i++) {

            const emoji =
                document.createElement("div");

            emoji.className = "chaos-piece";

            emoji.textContent =
                partyEmojis[
                    Math.floor(
                        Math.random() * partyEmojis.length
                    )
                ];

            emoji.style.left =
                Math.random() * 100 + "vw";

            emoji.style.top =
                40 + Math.random() * 30 + "vh";

            emoji.style.setProperty(
                "--x",
                (Math.random() * 500 - 250) + "px"
            );

            emoji.style.setProperty(
                "--y",
                (Math.random() * 500 - 250) + "px"
            );

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 2300);
        }
    }

    setTimeout(() => {
        createConfetti(35);
    }, 1200);

});
