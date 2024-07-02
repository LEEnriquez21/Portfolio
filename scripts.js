/* Function for changing the cssvalue of projects so that it hides the images */
function showContent(cardId) {
    const card = document.getElementById(cardId);
    const img = card.querySelector('img');
    const content = card.querySelector('.card_contentP');
    const button = card.querySelector('.toggle-button');

    if (content.style.display === 'none') {
        img.style.display = 'none';
        content.style.display = 'block';
        button.textContent = 'Show Image';
    } else {
        img.style.display = 'block';
        content.style.display = 'none';
        button.textContent = 'Show Details';
    }
}
/*Event type listener for handling the button on the contact page*/
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.event_button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alertUser();
        });
    });
});
/*Show alert type message*/ 
function alertUser() {
    alert("Message Sent!");
}