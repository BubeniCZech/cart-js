export function toggleModals() {
  const modalBtn = document.querySelectorAll('.modal-btn');
  const modalOverlay = document.querySelector('.modals-overlay');
  const modals = document.querySelectorAll('.modal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  modalBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // console.log(event.target);
      const path = event.currentTarget.getAttribute('data-path');
      // console.log(path);

      modals.forEach((modal) => {
        modal.style.display = '';
        document.body.style.overflow = '';
      });

      document.querySelector(`[data-target="${path}"]`).style.display = 'block';
      modalOverlay.style.opacity = '1';
      modalOverlay.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    });
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.opacity = ''; // modalOverlay.style.cssText = 'opacity: 0; visibility: hidden;';
      modalOverlay.style.visibility = '';
      modals.forEach((modal) => {
        modal.style.display = '';
        document.body.style.overflow = '';
      });
    }
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // console.log(event.target);
      if (event.target === btn) {
        modalOverlay.style.opacity = '';
        modalOverlay.style.visibility = '';
        modals.forEach((modal) => {
          modal.style.display = '';
          document.body.style.overflow = '';
        });
      }
    });
  });
}
