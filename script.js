const projects = {
    game1: {
        title: "דינוזאור של כרום",
        description: "משחק ריצה בו הדינוזאור נמנע ממכשולים במדבר.",
        link: "https://live-game1.com",
        image: "1.png"
    },
    game2: {
        title: "משחק החצים",
        description: "משחק מהירות שבו צריך ללחוץ על החץ המתאים בזמן הנכון.",
        link: "https://live-game2.com",
        image: "3.png"
    },
    game3: {
        title: "משחק הביטקוין",
        description: "משחק כלכלי שבו אוספים ביטקוינים תוך הימנעות ממכשולים.",
        link: "https://live-game3.com",
        image: "2.png"
    },
    game4: {
        title: "משחק הקפיצות בחלל",
        description: "משחק שבו הדמות קופצת בין כוכבים וחייבת להישאר בחיים.",
        link: "https://live-game4.com",
        image: "4.png"
    },
    game5: {
        title: "אתר נטפליקס",
        description: "אתר דמוי נטפליקס המציג סרטים ותוכניות עם עיצוב מתקדם.",
        link: "https://live-game5.com",
        image: "5.png"
    },
    game6: {
        title: "משחק המספרים",
        description: "משחק ניחוש שבו צריך לגלות את המספר הנכון.",
        link: "https://live-game6.com",
        image: "numbers.png"
    },
    game7: {
        title: "WORDLE",
        description: "משחק מילים שבו צריך לנחש מילה ב-6 ניסיונות בלבד.",
        link: "https://live-game7.com",
        image: "wordle.png"
    }
};

function openModal(projectId) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const liveLink = document.getElementById("live-link");
    const modalImage = document.getElementById("modal-image");

    const project = projects[projectId];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    liveLink.href = project.link;
    modalImage.src = project.image;

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
