document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('/includes/header.html')
            .then(response => response.text())
            .then(html => {
                headerPlaceholder.innerHTML = html;
                const pageTitleElement = document.getElementById('page-title');
                if (pageTitleElement) {
                    pageTitleElement.textContent = document.title;
                }
            })
            .catch(error => {
                console.error('Error fetching header:', error);
                headerPlaceholder.innerHTML = '<p class="text-red-500">Error loading header.</p>';
            });
    }
});
