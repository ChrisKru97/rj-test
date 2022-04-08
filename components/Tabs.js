import React, { useContext } from 'react';
import NavLink from './NavLink';

import { SelectedTabContext } from '../selectedTab/context';

const Tabs = ({ children, navItems, contentClassName }) => {
  const { active, setActive } = useContext(SelectedTabContext);

  return (
    <>
      <nav className="flex mb-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item}
            selected={active === index}
            onClick={() => setActive(index)}
          >
            {item}
          </NavLink>
        ))}
      </nav>
      <div className={contentClassName}>{children[active]}</div>
    </>
  );
};

export default Tabs;
