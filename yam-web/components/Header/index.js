import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import './Header.module.css';

const Header = () => {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
      } else {
        navbarRef.current.classList.remove('fixed-header');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

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
                <Link href="/">
                  <a className={classNames('nav-link', { active: pathname === '/' })}>Home</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/about">
                  <a className={classNames('nav-link', { active: pathname === '/about' })}>About</a>
                </Link>
              </li> */}
              <li>
                <Link href="/resume">
                  <a className={classNames('nav-link', { active: pathname === '/resume' })}>
                    Resume
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className={classNames('nav-link', { active: pathname === '/portfolio' })}>
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className={classNames('nav-link', { active: pathname === '/posts' })}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={classNames('nav-link', { active: pathname === '/contact' })}>
                    Contact
                  </a>
                </Link>
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
