import { useRef, useEffect } from 'react';

const Header = () => {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
      } else {
        navbarRef.current.classList.remove('fixed-header');
      }
      const navlinks = document.querySelectorAll('a.nav-link');
      navlinks.forEach((element) => {
        const section = document.getElementById(element.hash.slice(1));
        const scrollY = window.scrollY || window.pageYOffset;
        const sectionHeight = section.offsetTop + section.clientHeight;
        if (scrollY >= section.offsetTop && scrollY < sectionHeight) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const navigate = (e) => {
    e.preventDefault();
    const { offsetTop } = document.querySelector(e.target.hash);
    const scrollOptions = {
      top: offsetTop,
      behavior: 'smooth',
    };
    window.scrollTo(scrollOptions);
    collapseRef.current.classList.toggle('show');
  };

  const toggleNavbar = (e) => {
    e.preventDefault();
    const visible = collapseRef.current.classList.contains('show');
    if (visible) {
      if (window.scrollY <= 60) {
        navbarRef.current.classList.remove('fixed-header');
      }
    } else {
      navbarRef.current.classList.add('fixed-header');
    }
    collapseRef.current.classList.toggle('show');
  };

  return (
    <header>
      <nav
        className="navbar header-nav header-nav-white fixed-top navbar-expand-lg"
        ref={navbarRef}
      >
        <div className="container">
          {/* Brand */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand" href="#">
            Yagnesh <span className="theme-bg" />
          </a>
          {/* / */}
          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarYagnesh"
            aria-controls="navbarYagnesh"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
          {/* / */}
          {/* Top Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarYagnesh"
            ref={collapseRef}
          >
            <ul className="navbar-nav">
              <li>
                <a className="nav-link active" href="#home-box" onClick={navigate}>
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#aboutus" onClick={navigate}>
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link" href="#services" onClick={navigate}>
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#portfolio" onClick={navigate}>
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link" href="#blog" onClick={navigate}>
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact" onClick={navigate}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* / */}
        </div>
        {/* Container */}
      </nav>
      {/* Navbar */}
    </header>
  );
};

export default Header;
