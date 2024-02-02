import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import EGForm from '../components/form/EGForm';
import EGInput from '../components/form/EGInput';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    emailOrUser: 'john.doe@example.com',
    password: 'Password123!',
  };

  const [login] = useLoginMutation();

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
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify='center' align='middle' style={{ height: '100vh' }}>
      <EGForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <EGInput
          type='text'
          name='emailOrUser'
          label='Enter username or Email'
        />
        <EGInput type='text' name='password' label='Password' />
        <Button htmlType='submit'>Login</Button>
      </EGForm>
    </Row>
  );
};

export default Login;
