import { memo } from 'react';
import logo from "../../../shared/images/mainLogo/logo.svg"
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
      <header>
          <nav className='container flex items-center justify-between'>
              <div >
                  <ul className='flex items-center gap-5'>
                      <li>
                          <NavLink to={"/"}>Homepage</NavLink>
                      </li>
                      <li>
                          <NavLink to={"/"}>About</NavLink>
                      </li>
                 </ul>
              </div>
              <div>
                  <img className='block w-[100px]'  src={logo} alt="" />
              </div>
              <div></div>
          </nav>
   </header>
  );
};

export default memo(Header);