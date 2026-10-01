document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const surprise = document.getElementById("surprise");
    const confetti = document.getElementById("confetti");

    if (!openBtn || !surprise) {
        console.log("openBtn atau surprise tidak ditemukan");
        return;
    }

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


    function createConfetti(amount) {

        if (!confetti) return;

        const colors = [
            "#ff8a65",
            "#ffb49f",
            "#ff9fbd",
            "#ffd166",
            "#8edcff",
            "#e9faff"
        ];

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("div");

            piece.className = "confetti-piece";

            const size = 5 + Math.random() * 9;
            const duration = 2.5 + Math.random() * 2;

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.width =
                size + "px";

            piece.style.height =
                size * 1.7 + "px";

            piece.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            piece.style.borderRadius =
                Math.random() > 0.5 ? "50%" : "2px";

            piece.style.animationDuration =
                duration + "s";

            piece.style.animationDelay =
                Math.random() * 0.8 + "s";

            piece.style.setProperty(
                "--drift",
                (Math.random() * 400 - 200) + "px"
            );

            confetti.appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, (duration + 1) * 1000);
        }
    }


    // Confetti kecil saat halaman pertama dibuka
    setTimeout(() => {
        createConfetti(35);
    }, 1200);

});
