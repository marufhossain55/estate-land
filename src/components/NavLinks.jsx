import { Link, NavLink } from 'react-router-dom';
import userImg from '../assets/user.png';
import useAuth from '../Hooks/useAuth';

const NavLinks = () => {
  const { Logout, user } = useAuth();
  const handleLogOut = () => {
    Logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/updateprofile'>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to='/userprofile'>User Profile</NavLink>
      </li>
      <li>
        <NavLink to='/purchasehistory'>Purchase History</NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100 container mx-auto mt-10 top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to='/' className='text-2xl btn btn-ghost'>
          DreamOland
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
      </div>

      <div className='navbar-end space-x-3'>
        {user ? (
          <>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar tooltip'
              data-tip={user?.displayName}
            >
              <div className='w-10 rounded-full'>
                <img alt='username' src={user?.photoURL || userImg} />
              </div>
            </div>
            <div>
              <button onClick={handleLogOut} className='btn btn-accent'>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            {' '}
            <Link to='/login' className='btn btn-accent'>
              Login
            </Link>
          </>
        )}
        {/* <div
          tabIndex={0}
          role='button'
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS Navbar component' src={userImg} />
          </div>
        </div>
        <div>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default NavLinks;
