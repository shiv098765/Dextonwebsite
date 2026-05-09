import React, { useState, useEffect } from "react";

function Home() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('theme-dark');
    else document.documentElement.classList.remove('theme-dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div style={{ padding: 20 }}>
      <button className="toggle-btn" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
        {theme === 'dark' ? '🌙 Night' : '☀️ Light'}
      </button>
    </div>
  );
}

export default Home