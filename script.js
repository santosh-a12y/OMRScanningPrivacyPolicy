/**
 * Privacy Policy - Interactive Enhancements
 * Vanilla JavaScript (No libraries, zero external dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const siteHeader = document.getElementById('siteHeader');
  const progressBar = document.getElementById('progressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const printBtn = document.getElementById('printBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const currentYearSpan = document.getElementById('currentYear');

  // Set dynamic current year in footer if needed
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Scroll Handling: Header shadow, Back-to-Top visibility, Reading Progress
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Header shadow toggle
    if (siteHeader) {
      if (scrollTop > 15) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }

    // Reading progress bar calculation
    if (progressBar && docHeight > 0) {
      const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Back to top visibility toggle
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  };

  // Attach optimized scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Print Document Trigger
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Copy Email to Clipboard
  if (copyEmailBtn && copyBtnText) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailLink = document.getElementById('contactEmailLink');
      const emailText = emailLink ? emailLink.textContent.trim() : 'ysantosh00179@gmail.com';

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailText);
        } else {
          // Fallback for older browsers
          const tempInput = document.createElement('textarea');
          tempInput.value = emailText;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Visual feedback
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied!';
        copyEmailBtn.classList.add('copied');

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.warn('Unable to copy email address: ', err);
      }
    });
  }
});
