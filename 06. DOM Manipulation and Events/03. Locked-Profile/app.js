function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(b => b.addEventListener('click', showHide));

    function showHide(e) {
        const button = e.target;
        const profile = button.parentElement;
        const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

        if (isLocked) {
            return;
        }

        const hiddenInformation = profile.querySelector('div');
        const isVisible = hiddenInformation.style.display === 'block';

        if (isVisible) {
            hiddenInformation.style.display = 'none';
            button.textContent = 'Show more';
        } else {
            hiddenInformation.style.display = 'block';
            button.textContent = 'Hide it';
        }
    }
}
