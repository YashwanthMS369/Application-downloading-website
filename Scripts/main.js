document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.side-bar-content');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('clicked');
            });
            this.classList.toggle('clicked');
        });
    });
});