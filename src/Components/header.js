import React from 'react';

const scrollToSection = (id, duration = 700) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const scroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Header = () => {
  return (
    <div className='flex justify-center p-3'>
      <div className='flex gap-20 justify-center bg-black bg-opacity-10 rounded-full p-3 md:w-[90%] lg:w-[50%] xl:w-[40%] fixed'>
        <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition">
          About
        </button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-yellow-400 transition">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;

