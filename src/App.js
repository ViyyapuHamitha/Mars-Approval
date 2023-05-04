import React from 'react'
import {
  Button,
  Form,
  Input,
  Select,
  message,
} from 'antd';
import NavBar from "./components/NavBar"
import "./App.css"
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 9,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 12,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Sign Up success!');
  };
  const onFinishFailed = () => {
    message.error('Sign Up failed! Please try again');
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <NavBar />
      <br></br>
      <div class="container d-flex justify-content-center">
      <Form
      {...formItemLayout}
      form={form}
      name="sign up"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        prefix: '+91',
      }}
      style={{
        maxWidth:600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="first name"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Enter your first name',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="middle name"
        label="Middle Name"
        rules={[
          {
            required: false,
            message: 'Enter your middle name',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="last name"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Enter your last name',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="employee id"
        label="Employee ID"
        rules={[
          {
            required: true,
            message: 'Enter your Employee ID',
          },
        ]}
      >
        <Input/>
      </Form.Item>


      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default App
