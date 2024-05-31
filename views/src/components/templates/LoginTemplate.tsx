import { UserOutlined, KeyOutlined, GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons'
import { PATH } from 'constant/config';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const LoginTemplate = ({Admin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/signin", {
                email: email,
                password: password,
            })
            .then((response) => {
                cookies.set("TOKEN", response.data.token, {
                    path: "/",
                });

                setTimeout(() => {
                    window.location.reload();
                }, 500);

                const token = cookies.get("TOKEN");
                if (Admin){
                    axios.post("http://localhost:8080/api/authorization/admin",{},{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        console.log(response.data);
                        navigate(PATH.admin);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                } else {
                    axios.post("http://localhost:8080/api/authorization/student",{},{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        console.log(response.data);
                        navigate(PATH.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                }
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                    window.alert(errorMessage);
                }
            });
        // navigate(PATH.user);   
    };

    const navigate = useNavigate();
    return (
        <div className="LoginTemplate grid grid-cols-2">
            <div className="content-left col-span-1 flex items-center justify-center">
                <div className="h-[450px] w-[450px]">
                    <img src="img/loginImage.png" alt="loginImage" className="h-full w-full p-40"/>
                </div>
            </div>
            <div className="content-right col-span-1 flex justify-center pr-[100px] pt-10">
                <div className='w-full mx-auto flex-col items-center'>
                    <h2 className="text-[#009EE2] font-bold text-center text-[40px]">Welcome</h2>
                    <div>
                        <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Username</label>
                        <div className='input-content flex items-center'>
                            <UserOutlined className='mr-3 text-[20px]'/>
                            <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Password</label>
                        <div className='input-content flex items-center'>
                            <KeyOutlined className='mr-3 text-[20px]'/>
                            <input type="password" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className='flex items-center justify-end my-10'>
                        <p className='text-14 hover:cursor-pointer'>Forgot your password?</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button onClick={(e) => handleSubmit(e)} className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                            LOGIN
                        </button>
                    </div>
                    <div className='flex items-center justify-center my-20'>
                        <p className='w-[150px] h-[1px] bg-black'></p>
                        <p className='mx-10 text-[15px]'>OR</p>
                        <p className='w-[150px] h-[1px] bg-black'></p>
                    </div>
                    <div className='login-icons flex items-center justify-center gap-10'>
                        <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                            <GoogleOutlined className='text-20 hover:cursor-pointer'/>
                        </div>
                        <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                            <FacebookOutlined className='text-20 hover:cursor-pointer'/>
                        </div>
                        <div className='flex items-center justify-center bg-[#E7F2F5] w-[90px] h-[40px] rounded-[10px]'>
                            <GithubOutlined className='text-20 hover:cursor-pointer'/>
                        </div>
                    </div>
                    <div className='login-signup flex items-center justify-center mt-10 mb-20'>
                        <p className='text-14'>Don't have account? <span onClick={() => { navigate(PATH.signUp) }} className='font-bold hover:cursor-pointer'>Register Now</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginTemplate