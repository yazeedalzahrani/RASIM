// JavaScript to handle image expansion and spotlight effect

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.section-image');
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            if (!image.classList.contains('image-expanded')) {
                expandImage(image);
            }
        });
    });

    function expandImage(image) {
        // Remove 'spotlight' class from all images
        images.forEach(function (img) {
            img.classList.remove('spotlight');
        });
        // Add 'spotlight' class to the clicked image
        image.classList.add('spotlight');
        
        overlay.style.display = 'block'; // Show the overlay
        image.classList.toggle('image-expanded');
        document.body.classList.toggle('no-scroll');
        
        if (image.classList.contains('image-expanded')) {
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.className = 'close-button-on-image';
            closeButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevent the click event from propagating to the image
                closeImage(image);
            });
            image.parentElement.appendChild(closeButton);
        }
    }

    function closeImage(image) {
        overlay.style.display = 'none'; // Hide the overlay
        image.classList.remove('image-expanded');
        document.body.classList.remove('no-scroll');
        var closeButton = image.parentElement.querySelector('.close-button-on-image');
        if (closeButton) {
            closeButton.remove();
        }
    }

    // Close the expanded image when clicking on it
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('image-expanded')) {
            closeImage(event.target);
        }
    });
});
