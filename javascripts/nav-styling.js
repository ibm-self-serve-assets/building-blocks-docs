// Style the navigation title with blue + symbol
document.addEventListener('DOMContentLoaded', function() {
  // Find the first navigation link (Bob+ IBM Technology Building Blocks)
  const firstNavLink = document.querySelector('.md-nav--primary > .md-nav__list > .md-nav__item:first-child > .md-nav__link');
  
  if (firstNavLink) {
    // Get the current text
    const text = firstNavLink.textContent;
    
    // Replace "Bob+" with "Bob" + styled "+"
    const styledText = text.replace(/Bob\+/, 'Bob<span style="color:#0f62fe">+</span>');
    
    // Update the HTML
    firstNavLink.innerHTML = styledText;
  }
});

// Made with Bob
