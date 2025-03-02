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

showMoreBtn.addEventListener('click', () => {
  // Optionally, fetch full post content dynamically here.
  showMorePopup.style.display = 'flex';
});

closeShowMoreBtn.addEventListener('click', () => {
  showMorePopup.style.display = 'none';
});

// Close when clicking outside the popup content (optional)
window.addEventListener('click', (event) => {
  if (event.target === showMorePopup) {
    showMorePopup.style.display = 'none';
  }
});


(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

  