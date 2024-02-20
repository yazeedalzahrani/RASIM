// JavaScript to handle image expansion and closure

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.section-image');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            if (!image.classList.contains('image-expanded')) {
                expandImage(image);
            }
        });
    });

    function expandImage(image) {
        image.classList.toggle('image-expanded');
        document.body.classList.toggle('no-scroll');
        
        if (image.classList.contains('image-expanded')) {
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.className = 'close-button-on-image';
            closeButton.addEventListener('click', function () {
                closeImage(image);
            });
            image.parentElement.appendChild(closeButton);
        } else {
            var closeButton = image.parentElement.querySelector('.close-button-on-image');
            if (closeButton) {
                closeButton.remove();
            }
        }
    }

    function closeImage(image) {
        image.classList.remove('image-expanded');
        document.body.classList.remove('no-scroll');
        var closeButton = image.parentElement.querySelector('.close-button-on-image');
        if (closeButton) {
            closeButton.remove();
        }
    }
});
