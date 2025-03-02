



document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("editBtn")) {
            event.preventDefault(); // Prevent default link behavior
            
            console.log("✅ Edit button clicked!");

           

            // ✅ Get post details from data attributes
            const postId = event.target.getAttribute("data-id");
            const postTitle = event.target.getAttribute("data-title");
            const postDescription = event.target.getAttribute("data-description");
            const postImage = event.target.getAttribute("data-image");

            console.log("🆔 Post ID:", postId);
            console.log("✏ Title:", postTitle);
            console.log("🖼 Image:", postImage);
            console.log("📃 Description:", postDescription);

            // ✅ Set form action & input values
            editForm.action = `/posts/${postId}?_method=PUT`;
            document.getElementById("postTitle").value = postTitle || "";
            document.getElementById("postDescription").value = postDescription?.trim() || "";
            document.getElementById("imageUrl").value = postImage || "";

            // ✅ Show the popup/modal
            document.getElementById("customPopup").style.display = "block";
        }
    });

    // ✅ Close the popup when close button is clicked
    document.getElementById("closePopupBtn").addEventListener("click", function () {
        document.getElementById("customPopup").style.display = "none";
    });
});
