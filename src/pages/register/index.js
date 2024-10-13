import React,{ useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Input,Flex } from 'antd'
import { auth } from '../../services/firebase';
import { ROUTE_CONSTANTS,validation  } from '../../core/utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import reg from '../images/reg.jpeg' 
import "../index.css";

const Register = ()=>{

    const [loading,setLoading] = useState(false);
    const [form] =Form.useForm();
    const navigate = useNavigate();

    const handleRegister = async values=>{
        setLoading(true)
        const { email,password } = values;
    try{
        await createUserWithEmailAndPassword(auth,email,password);
        navigate(ROUTE_CONSTANTS.LOGIN);
    }catch(error){
        console.log(error)
    }finally{
        setLoading(false)
    }
}
return(
   
    <div className='log-reg_container'>
        <img src = {reg} alt = "register" />
        <div className='form-side'>
        <Flex justify='center' >     
        <Form layout='vertical' form = {form} onFinish={handleRegister}>
        <h1>Register</h1>
            <Form.Item
            label = 'First Name'
            name= 'firstName'
            rules = {[
                {
                    required:true,
                    message:"please input your First Name"
                }
            ]}
            >
                <Input type = 'text' placeholder='First Name' />
            </Form.Item>
            
            <Form.Item
            label = 'Last Name'
            name= 'lastName'
            rules = {[
                {
                    required:true,
                    message:"please input your Last Name"
                }
            ]}>
                <Input type = 'text' placeholder='Last Name' />

            </Form.Item>
            <Form.Item
            label = 'Headline'
            name= 'headline'
            rules = {[
                {
                    required:true,
                    message:"please input your Headline"
                }
            ]}>
                <Input type = 'text' placeholder='Headline' />
            </Form.Item>

            <Form.Item
            label = 'Email'
            name= 'email'
            rules = {[
                {
                    required:true,
                    message:"please input your email"
                }
            ]}>
                <Input type = 'email' placeholder='Email' />
            </Form.Item>
            
            <Form.Item
            label = 'Password'
            name= 'password'
            rules = {[
                {
                    required:true,
                    message:"please input your Password"
                },
                {
                    pattern:validation,
                    message:'Wrong password'
                }
            ]}>
                <Input.Password placeholder='Password' />
            </Form.Item>

            <Button type = 'primary' htmlType='submit' loading = {loading}>
                Register
            </Button>
            
            <Link to = {ROUTE_CONSTANTS.LOGIN}>
                Sign in
            </Link>
        </Form>
       </Flex>
       </div>
       </div>
   
)
}

export default Register;