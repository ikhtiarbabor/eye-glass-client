/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd';
import { FieldValues } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import EGForm from '../components/form/EGForm';
import EGInput from '../components/form/EGInput';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { TError } from '../types';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    emailOrUser: 'john.doe@example.com',
    password: 'Password123!',
  };

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        emailOrUser: data.emailOrUser,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err: TError | any) {
      toast.error(`${err.data.message}`, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className='max-w-md mx-auto grid items-center min-h-screen'>
      <div className='border px-8 rounded-lg bg-gray-100 '>
        <EGForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <h2 className='text-2xl font-bold text my-4 text-center text-gray-700'>
            Login
          </h2>
          <EGInput
            type='text'
            name='emailOrUser'
            placeholder='Enter Your Email Or Username'
          />
          <EGInput
            type='text'
            name='password'
            placeholder='Enter your password'
          />
          <div className='flex justify-between items-center '>
            <button
              disabled={isLoading}
              className='px-3 py-1 rounded-md my-5 hover:bg-slate-600 duration-150 bg-gray-700 text-white'
            >
              {isLoading ? <Spin /> : 'Login'}
            </button>
            <Link
              to='/register'
              className='capitalize underline text-xs text-gray-500 hover:text-blue-500 duration-200'
            >
              New to Eye glass? Please Register!
            </Link>
          </div>
        </EGForm>
      </div>
    </div>
  );
};

export default Login;
