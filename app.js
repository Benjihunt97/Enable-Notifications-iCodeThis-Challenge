const closeBtn = document.querySelectorAll(".close");

closeBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const thisBtn = e.currentTarget;
        const parent = thisBtn.parentElement;

        parent.style.transform = 'scale(0)';

        setTimeout(() => {
            parent.style.transform = 'scale(1)';
        }, 1200);
    });
});
