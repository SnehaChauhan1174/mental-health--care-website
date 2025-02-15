const openBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('customPopup');
const closeBtn = document.getElementById('closePopupBtn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex'; // Show popup
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide popup
});

// Optional: Close when clicking outside the popup content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

const showMoreBtn = document.getElementById('showMoreBtn');
const showMorePopup = document.getElementById('showMorePopup');
const closeShowMoreBtn = document.getElementById('closeShowMoreBtn');

document.getElementById('showMoreBtn').addEventListener('click', () => {
    // Optionally, dynamically load full post content here.
    Swal.fire({
      title: 'Full Post Details',
      html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Close'
    });
  });
  

  