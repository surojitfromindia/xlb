import { Button, Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { useContext } from 'react';
import { getUserExistsStatus } from '../api/auth/registration';
import { AppContext } from '../context/Store/store';
import { RegistrationForm } from '../interfaces/registrationform';

type ValidationRules = {
  [elementname in keyof RegistrationForm]: Rule[];
};

export default function RegistrationPage() {
  const { dispatch } = useContext(AppContext);
  //handle register
  let [registratioForm] = Form.useForm<RegistrationForm>();
  const onRegisterFormSubmitHandler = async(values: RegistrationForm) => {
    //check if user name or email exists
    let registration_payload = {
      username : values.username,
    }
    let is_user_registered = await getUserExistsStatus(registration_payload.username)
    console.log("Checking user registration",is_user_registered)
    dispatch({ type: 'register', user_info: { email: values.username } });
  };

  const validatio_rules: ValidationRules = {
    username: [
      {
        required: true,
        message: 'User name or email is required',
      },
    ],
    password: [
      {
        required: true,
        message: 'Password is required',
      },
      {
        min: 6,
        message: 'Password must be more than 6 character',
      },
    ],
    confirmpassword: [
      {
        required: true,
        message: 'Please enter confirmation password',
      },
      {
        validator: (_: any, value: string) => {
          //if two password does not match throw error
          const password = registratioForm.getFieldValue('password');
          if (password !== value) {
            return Promise.reject(new Error('Two password does not match'));
          }
          return Promise.resolve();
        },
      },
    ],
  };

  return (
    <div className="p-5 h-screen flex flex-col items-center ">
      <div className="mt-10">
        <h1 className="text-2xl mb-5">Register to use Reducer&reg;</h1>
        <Form
          name="registrationform"
          onFinish={onRegisterFormSubmitHandler}
          form={registratioForm}
          layout="vertical"
          className="w-96"
          labelCol={{ span: 15 }}
          wrapperCol={{ span: 80 }}
        >
          <Form.Item name="username" rules={validatio_rules.username}>
            <Input placeholder="User name or Email" />
          </Form.Item>
          <Form.Item name="password" validateFirst={true} rules={validatio_rules.password}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="confirmpassword" validateFirst={true} dependencies={['password']} rules={validatio_rules.confirmpassword}>
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
            Or have account ? <a href="/">Login now!</a>
          </Form.Item>
        </Form>
      </div>{' '}
    </div>
  );
}
