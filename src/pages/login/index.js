import { useState } from "react";
import { Form, Button, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebase";
import { ROUTE_CONSTANTS } from "../../core/utils/constants";
import { Link } from "react-router-dom"
import login from '../images/login.webp' 

const Login = () => {
    const [loading,setLoading] = useState(false);
    const form = Form.useForm();

    const handleLogin = async values => {
    setLoading(true)

    try{
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        form.resetFields();
    }catch(error){
        console.log(error)
    
}finally{
    setLoading(false)
 }
};

 return(
    <div className="login">
        <img src = {login} alt = "login" />
        <div className='form-side'></div>
         <Form layout="vertical" form = {form} onFinish = {handleLogin}>
               <Form.Item
                    label = "Email"
                    name = "email"
                    rules = {[
                        {
                            required:true,
                            message:"please input your email"
                        }
                    ]}
                    >
                        <Input type="email" placeholder="Email"/>
                </Form.Item>

                <Form.Item
                    label = "Password"
                    name = "password"
                    tooltip = "Must contain 4-16 characters.."
                    rules = {[
                        {
                            required:true,
                            message:"please input your password"
                        }
                    ]}
                    >
                        <Input.Password placeholder="Password"/>
                </Form.Item>

                <Button type = "primary" htmlType="submit" loading = {loading}>
                    Login
                </Button>
                
                <Link to = {ROUTE_CONSTANTS.REGISTER}>
                    Create Account
                    </Link>
            </Form>
        </div>
  
 )
}
export default Login;