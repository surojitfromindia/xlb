import { Alert, Button, Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { useState } from 'react';
import { getUserExistsStatus, postNewUserRegitser } from '../api/auth/registration';
import { RegistrationForm } from '../interfaces/registrationform';
import { useDispatch } from 'react-redux';
import { register } from '../redux/reducers/authReducer';

type ValidationRules = {
  [elementname in keyof RegistrationForm]: Rule[];
};

export default function RegistrationPage() {
  const dispatch = useDispatch(); //handle register
  let [registratioForm] = Form.useForm<RegistrationForm>();
  const onRegisterFormSubmitHandler = async (values: RegistrationForm) => {
    //check if user name or email exists
    let registration_payload = {
      username: values.username,
      password: values.password,
      confirmpassword: values.confirmpassword,
    };
    let { data, success } = await getUserExistsStatus(registration_payload.username, handleRegistrationFailed);
    if (success) {
      let { user_already_registered, message } = data;
      if (!user_already_registered) {
        let { data: reg_result, success: reg_success } = await postNewUserRegitser(
          registration_payload.username,
          registration_payload.password,
          registration_payload.confirmpassword,
          handleRegistrationFailed
        );
        if (reg_success) {
          dispatch(register(reg_result));
        }
      } else {
        handleRegistrationFailed({ message });
      }
    }
  };

  const validation_rules: ValidationRules = {
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

  const [errorAlert, setErrorAlert] = useState({ visiable: false, message: '' });
  const handleRegistrationFailed = (error_body: any) => {
    if (error_body?.reason) {
      let { message } = error_body.reason;
      if (Array.isArray(message)) {
        setErrorAlert({ visiable: true, message: message.join(',') });
      } else {
        setErrorAlert({ visiable: true, message: message });
      }
    } else {
      setErrorAlert({ visiable: true, message: error_body.message });
    }
  };
  return (
    <div className="p-5 h-screen flex flex-col items-center ">
      <div className="mt-10 w-96">
        <h1 className="text-2xl mb-5">Register to use Reducer&reg;</h1>
        <div className="my-5">
          {errorAlert.visiable && (
            <Alert type="error" afterClose={() => setErrorAlert({ visiable: false, message: '' })} message={errorAlert.message} showIcon closable />
          )}
        </div>
        <Form
          name="registrationform"
          onFinish={onRegisterFormSubmitHandler}
          form={registratioForm}
          layout="vertical"
          labelCol={{ span: 15 }}
          wrapperCol={{ span: 80 }}
        >
          <Form.Item name="username" rules={validation_rules.username}>
            <Input placeholder="User name or Email" />
          </Form.Item>
          <Form.Item name="password" validateFirst={true} rules={validation_rules.password}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="confirmpassword" validateFirst={true} dependencies={['password']} rules={validation_rules.confirmpassword}>
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
