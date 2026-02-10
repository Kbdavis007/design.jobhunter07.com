"use client";

import React, { useState, FormEvent, MouseEvent } from 'react';

export type JobHunterNavItemId = 'home' | 'tools' | 'hunt-tips' | 'about' | 'contact';

export interface JobHunterTopNavProps {
  /** Optional id of the currently active nav item */
  activeItemId?: JobHunterNavItemId;
  /** Called when a nav item is clicked */
  onNavItemClick?: (id: JobHunterNavItemId) => void;
  /** Called when search is submitted */
  onSearchSubmit?: (query: string) => void;
}

const NAV_ITEMS: { id: JobHunterNavItemId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'tools', label: 'Tools' },
  { id: 'hunt-tips', label: 'Hunt Tips' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

import './top-nav.css';

export const JobHunterTopNav: React.FC<JobHunterTopNavProps> = ({
  activeItemId = 'home',
  onNavItemClick,
  onSearchSubmit,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleToggleClick = () => {
    setIsMobileOpen((open) => !open);
  };

  const handleNavClick = (event: MouseEvent<HTMLButtonElement>, id: JobHunterNavItemId) => {
    event.preventDefault();
    onNavItemClick?.(id);
    setIsMobileOpen(false);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearchSubmit?.(query.trim());
    setIsMobileOpen(false);
  };

  return (
    <header className="jh07-nav" role="banner">
      <div className="jh07-nav__inner">
        <a href="#" className="jh07-nav__brand">
          <span className="jh07-nav__logo" aria-hidden="true">
            <span className="jh07-nav__logo-mark" />
          </span>
          <span className="jh07-nav__brand-text">Jobhunter07</span>
        </a>

        <nav
          className="jh07-nav__primary"
          aria-label="Primary navigation"
          id="jh07-main-nav"
        >
          <ul className="jh07-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="jh07-nav__list-item">
                <button
                  type="button"
                  className={
                    'jh07-nav__link' + (item.id === activeItemId ? ' jh07-nav__link--active' : '')
                  }
                  aria-current={item.id === activeItemId ? 'page' : undefined}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <form className="jh07-nav__search" role="search" onSubmit={handleSearchSubmit}>
          <label className="jh07-nav__search-label">
            <span className="jh07-nav__sr-only">Search Jobhunter07</span>
            <input
              className="jh07-nav__search-input"
              placeholder="Search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <button type="submit" className="jh07-nav__search-button" aria-label="Search">
            <span className="jh07-nav__sr-only">Submit search</span>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="jh07-nav__search-icon"
            >
              <path
                d="M11.5 10.5l3 3-1 1-3-3v-.8l-.3-.3A4.5 4.5 0 1111.5 10v.5zM7 10.5A3.5 3.5 0 107 3.5a3.5 3.5 0 000 7z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </form>

        <button
          type="button"
          className="jh07-nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          aria-controls="jh07-mobile-panel"
          onClick={handleToggleClick}
        >
          <span className="jh07-nav__toggle-bar" aria-hidden="true" />
        </button>
      </div>

      <div
        id="jh07-mobile-panel"
        className={
          'jh07-nav__mobile-panel' + (isMobileOpen ? ' jh07-nav__mobile-panel--open' : '')
        }
      >
        <nav aria-label="Mobile primary navigation">
          <ul className="jh07-nav__mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="jh07-nav__mobile-item">
                <button
                  type="button"
                  className={
                    'jh07-nav__mobile-link' +
                    (item.id === activeItemId ? ' jh07-nav__mobile-link--active' : '')
                  }
                  aria-current={item.id === activeItemId ? 'page' : undefined}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <form className="jh07-nav__mobile-search" role="search" onSubmit={handleSearchSubmit}>
          <label className="jh07-nav__mobile-search-label">
            <span className="jh07-nav__sr-only">Search Jobhunter07</span>
            <input
              className="jh07-nav__mobile-search-input"
              placeholder="Search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <button type="submit" className="jh07-nav__mobile-search-button" aria-label="Search">
            <span className="jh07-nav__sr-only">Submit search</span>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="jh07-nav__search-icon"
            >
              <path
                d="M11.5 10.5l3 3-1 1-3-3v-.8l-.3-.3A4.5 4.5 0 1111.5 10v.5zM7 10.5A3.5 3.5 0 107 3.5a3.5 3.5 0 000 7z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};
