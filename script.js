/**
 * script.js
 * Handles dynamic year update and theme toggling (light/dark mode)
 * for the portfolio website.
 */
      
      (function(){
        document.getElementById('copyright-year').textContent = new Date().getFullYear();
        const toggle = document.getElementById('theme-toggle');
        const root = document.documentElement;
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const current = stored || (prefersDark ? 'dark' : 'light');
        if(current === 'dark') {
          root.setAttribute('data-theme','dark');
          if(toggle){ toggle.setAttribute('aria-pressed','true'); toggle.textContent='☀️'; }
        } else {
          root.removeAttribute('data-theme');
          if(toggle){ toggle.setAttribute('aria-pressed','false'); toggle.textContent='🌙'; }
        }
        if(toggle){
          toggle.addEventListener('click', function(){
            const isDark = root.getAttribute('data-theme') === 'dark';
            if(isDark){
              root.removeAttribute('data-theme');
              localStorage.setItem('theme','light');
              this.setAttribute('aria-pressed','false');
              this.textContent='🌙';
            } else {
              root.setAttribute('data-theme','dark');
              localStorage.setItem('theme','dark');
              this.setAttribute('aria-pressed','true');
              this.textContent='☀️';
            }
          });
        }
      })();
    