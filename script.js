    function toggleDetails(buttonElement) {
        // Find the parent card
        const card = buttonElement.closest('.project-card');
        // Find the details content inside the card
        const content = card.querySelector('.details-content');
        
        console.log('Toggling card:', card.querySelector('h3').textContent);
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            buttonElement.textContent = 'Hide Details';
        } else {
            content.style.display = 'none';
            buttonElement.textContent = 'View Details';
        }
    }