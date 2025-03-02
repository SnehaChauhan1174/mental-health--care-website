document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".editBtn");
    const popup = document.getElementById("customPopup");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const editPostForm = document.getElementById("editPostForm");

    editButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get post details from data attributes
            const postId = this.getAttribute("data-id");
            const postTitle = this.getAttribute("data-title");
            const postDescription = this.getAttribute("data-description");
            const postImage = this.getAttribute("data-image");

            // Set form values
            document.getElementById("editPostTitle").value = postTitle;
            document.getElementById("editPostDescription").value = postDescription;
            document.getElementById("editImageUrl").value = postImage;
            document.getElementById("editPostId").value = postId;

            // Update form action dynamically
            editPostForm.action = `/posts/${postId}?_method=PUT`;

            // Show the popup
            popup.style.display = "block";
        });
    });

    // Close popup when clicking close button
    closePopupBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup if clicking outside content
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

