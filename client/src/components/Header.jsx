import React from 'react';

function Header({ title, subtitle }) {
  return (
    <header className="page-header">
      <div className="page-header-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="page-header-info">
        <span className="system-label">
          Medical Device Compliance System
        </span>
      </div>
    </header>
  );
}

export default Header;
