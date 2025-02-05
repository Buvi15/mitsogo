// Email Validation
document.getElementById('signupBtn').addEventListener('click', function () {
let email = document.getElementById('email').value;
if (email.includes("@")) {
alert("Thank you for signing up!");
} else {
alert("Please enter a valid email address.");
}
});

// FAQ_SECTION-- Show and Hide

    function showFAQ(textId, imageId) {
        document.querySelectorAll('.faq-text').forEach(el => el.classList.remove('visible'));
        document.querySelectorAll('.faq-image-content').forEach(el => el.classList.remove('visible'));
        document.getElementById(textId).classList.add('visible');
        document.getElementById(imageId).classList.add('visible');
    }

   
