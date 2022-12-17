import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Autorization: React.FС = () => {

  const [logged, setLogged] = useState(false)
  const [errorMess, setErrorMes] = useState()
  const [remember, setRemember] = useState(true)

  const accounts = useSelector(state => state.accounts.accounts);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    var keys = Object.keys(accounts)
    for (var i = 0; i < keys.length; i++) {
      if (values.username === keys[i] && values.password === accounts[keys[i]].password) {
        console.log("Success autorization!")
        if (remember) {
          localStorage.setItem("username", values.username)
          localStorage.setItem("password", values.password)
        }
        setLogged(true)
      }
    }
    if (logged === false) {
      setErrorMes("Invalid username or password")
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <section className='autorization'>
      <h3 className='autorizationHeader'>Autentification</h3>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='autorizationForm'
      >
        <Form.Item

          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {errorMess}

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
          <Checkbox onClick={() => setRemember((prevRemember) => { return !prevRemember })}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 20 }}>
          <Button type="primary" htmlType="submit" className='autorizationButton'>
            Log in
          </Button>
        </Form.Item>
      </Form>

      {logged && <Navigate to="/mainLayout" />}

    </section>
  );
};


export default Autorization