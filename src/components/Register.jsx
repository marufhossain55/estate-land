import { useEffect, useState } from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();

  ////////////////////
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname;
  }, [location]);
  /////////////
  ////////////////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigation system
  const Navigate = useNavigate();
  const location1 = useLocation();
  const from = location1?.state || '/';

  const onSubmit = (data) => {
    const { email, password, fullName, image } = data;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    if (!uppercaseRegex.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter');
      return;
    }

    if (!lowercaseRegex.test(password)) {
      setErrorMessage('Password must contain at least one lowercase letter');
      return;
    }

    createUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        Navigate(from);
      });
      toast.success('registration successfull');
    });
  };
  ///////////////////////////////////////

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto'>
      <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold'>Register</h1>
        <p className='text-sm dark:text-gray-600'>
          Sign Up to create your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=''
        action=''
        className='space-y-12'
      >
        <div className='space-y-4'>
          <div>
            <label htmlFor='name' className='block mb-2 text-sm'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              {...register('FullName', { required: true })}
            />
            {errors.FullName && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='leroy@gmail.com'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor='photoURL' className='block mb-2 text-sm'>
              photoURL
            </label>
            <input
              type='text'
              name='image'
              id='image'
              placeholder='Photo URL'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              {...register('image')}
            />
            {errors.image && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div>
            <div className='flex justify-between mb-2'>
              <label htmlFor='password' className='text-sm'>
                Password
              </label>
            </div>
            <input
              onChange={handlePasswordChange}
              type='password'
              name='password'
              id='password'
              placeholder='*****'
              className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button
              type='submit'
              className='btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50'
            >
              Register
            </button>
          </div>
          <p className='px-6 text-sm text-center dark:text-gray-600'>
            Already have an account ?
            <NavLink
              to='/login'
              rel='noopener noreferrer'
              href='#'
              className='font-bold hover:underline dark:text-violet-600'
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
