import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const Register = () => {
  const { createUser } = useAuth();

  ////////////////////
  const location = useLocation();
  useEffect(() => {
    document.title = `Register`;
  }, [location]);
  /////////////
  ////////////////////////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  ///////////////////////////////////////
  const handleNestedSubmit = (e) => {
    e.preventDefault();
    handlePassSubmit();
  };
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassSubmit = (event) => {
    event.preventDefault();

    // Regular expressions for validation
    const uppercaseRegex = /[A-Z]/;
    console.log(uppercaseRegex);
    const lowercaseRegex = /[a-z]/;

    // Validation checks
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

    // Password meets all criteria
    setErrorMessage(''); // Clear error message
    // Here you can submit the form or perform any other action
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
            <label htmlFor='displayName' className='block mb-2 text-sm'>
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
