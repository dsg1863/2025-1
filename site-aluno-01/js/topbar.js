// JavaScript to add a "Voltar para índice" link to the top of every page
window.onload = function() {
    // Create the link element
    var topBar = document.createElement('div');
    var link = document.createElement('a');
    
    // Set the link attributes
    link.href = 'https://dsg1863.github.io/2024-2/';
    link.textContent = 'Projetos 2024-2';
    
    // Apply the CSS class
    topBar.classList.add('top-bar');
    
    // Append the link to the top bar
    topBar.appendChild(link);
    
    // Add the top bar to the body, at the top of the page
    document.body.insertBefore(topBar, document.body.firstChild);
};

