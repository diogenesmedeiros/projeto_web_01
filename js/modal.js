const openModalButtons = document.querySelectorAll('[id^="openModal"]');
const closeModalButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal() {
    modals.forEach(modal => modal.style.display = 'none');
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.id.replace('openModal', 'modal');
        openModal(modalId);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal();
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});