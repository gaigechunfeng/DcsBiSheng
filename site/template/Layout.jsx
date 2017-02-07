import React from 'react';
import { Link } from 'bisheng/router';

if (typeof window !== 'undefined') {
  require('../static/style');
}

export default ({ themeConfig, children }) => {
  return (
    <div className="container">
      <div className="hidden">
        <div className="container">
          <div className="brand">
            <Link className="home" to={themeConfig.home}>{themeConfig.sitename}</Link>
            {
              !themeConfig.tagline ? null :
                <span>- <span className="tagline">{themeConfig.tagline}</span></span>
            }
          </div>
          {
            !themeConfig.navigation ? null :
              <div className="menu" role="navigation">
                {
                  themeConfig.navigation.map((item, index) =>
                    <Link to={item.link} key={index}>{item.title}</Link>
                  )
                }
              </div>
          }
        </div>
      </div>
      <div className="container" >
        {children}
      </div>
    </div>
  );
}
