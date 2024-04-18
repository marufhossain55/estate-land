import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const UpdateProfile = () => {
  const { updateUserProfile } = useAuth();

  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname}`;
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { fullName, image } = data;
    updateUserProfile(fullName, image).then(() => {
      toast.success('update successfully');
    });
  };
  return (
    <div className='w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mx-auto -mb-48'>
      <h1 className='text-2xl font-bold text-center'>Update Profile</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=''
        action=''
        className='space-y-6'
      >
        <div className='space-y-1 text-sm'>
          <label htmlFor='username' className='block dark:text-gray-600'>
            Your name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
            {...register('fullName', { required: true })}
          />
          {errors.fullName && (
            <span className='text-red-500'>This field is required</span>
          )}
        </div>
        <div className='space-y-1 text-sm'>
          <label htmlFor='password' className='block dark:text-gray-600'>
            photo URL
          </label>
          <input
            type='text'
            name='photoURL'
            id='photoURL'
            placeholder='photoURL'
            className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
            {...register('image', { required: true })}
          />
          {errors.image && (
            <span className='text-red-500'>This field is required</span>
          )}
          <div className='flex justify-end text-xs dark:text-gray-600'>
            {/* <a rel='noopener noreferrer' href='#'>
            Forgot Password?
          </a> */}
          </div>
        </div>
        <button className=' btn btn-accent block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600'>
          Update profile
        </button>
      </form>
    </div>
  );
};
export default UpdateProfile;
