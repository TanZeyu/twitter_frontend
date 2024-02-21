import { useState } from 'react';
import { Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog} from 'antd-mobile';
import './index.css';


const Login = () => {
  // const [name, setName] = useState();
  // const [pwd, setPwd] = useState();
  const [form] = Form.useForm()

  const init_val = {
    userName: "None",
    password: "0000"
  }
  const onSubmit = (e) => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }
  return (
    <div className="login">
      <Form layout='horizontal' 
        form = {form}
        mode='card' 
        initialValues={init_val}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Submit
          </Button>
        }
      >

        <Form.Item label='User name' name="userName">
          <Input placeholder='Input user name here' clearable />
        </Form.Item>

        <Form.Item label='Password' name="password">
          <Input placeholder='Input your password here' clearable type='password' />
        </Form.Item>

      </Form>
    </div>
  );
}

export default Login;
