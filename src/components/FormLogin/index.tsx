import React, { memo } from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSnackbar } from 'notistack';
import {useAuth} from '../../contexts/auth';

const FormLogin: React.FC<{}> = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const context = useAuth();
 
  function handleLogin(values: any) {
    console.log(values);
    context.Login();
  }

  // const onFinish = useCallback(
  //   async (values: any) => {
  //     try {
  //       console.log(values);
  //       context.Login();
  //       enqueueSnackbar('Login realizado com sucesso', { 
  //           variant: 'success',
  //       });
  //     } catch {
  //       enqueueSnackbar('Falha ao atualizar afiliado', { 
  //           variant: 'error',
  //       });
  //     } finally {
  //     }
  //   },[enqueueSnackbar]
  // );
 
  return (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleLogin}
            // onFinishFailed={onFinishFailed}
          >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
  );
});

export default FormLogin;
