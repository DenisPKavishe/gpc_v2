import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './LandingPage/HomePage';
import Hero from './LandingPage/Hero/Hero';

function App() {
  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <HomePage />
      
    </>
  )
}

export default App
