const editBtn = document.getElementById('editBtn');
const popup = document.getElementById('customPopup');
const closeBtn = document.getElementById('closePopupBtn');

editBtn.addEventListener('click', () => {
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
