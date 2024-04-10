import React from 'react';
import { Link } from 'react-router-dom';
import { navConfig } from '../navConfig';

export default () => {
  return (
    <div className="demo-index">
      {navConfig.map((t) => (
        <div className="demo-nav" key={t.title}>
          <h2 className="demo-nav-title">{t.title}</h2>
          <ul className="demo-nav-list">
            {t.list.map((tt) => (
              <li key={tt.code}>
                <Link className="demo-nav-link" to={`/${tt.code}`}>
                  {`${tt.code} ${tt.name}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
