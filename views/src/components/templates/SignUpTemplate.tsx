import { UserOutlined, KeyOutlined, PhoneOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons'
import { PATH } from 'constant/config';
import { useNavigate } from 'react-router-dom'

export const SignUpTemplate = () => {
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
                        <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Username" />
                    </div>
                </div>
                <div className='mt-20'>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Password</label>
                    <div className='input-content flex items-center'>
                        <KeyOutlined className='mr-3 text-[20px]'/>
                        <input type="password" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Password" />
                    </div>
                </div>
                <div className='mt-20'>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Phone</label>
                    <div className='input-content flex items-center'>
                        <PhoneOutlined className='mr-3 text-[20px]'/>
                        <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Phone" />
                    </div>
                </div>
                <div className='mt-20'>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">Email</label>
                    <div className='input-content flex items-center'>
                        <MailOutlined className='mr-3 text-[20px]'/>
                        <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" />
                    </div>
                </div>
                <div className='mt-20'>
                    <label className="ml-30 block mb-2 text-sm font-medium text-[#009EE2]">MSSV</label>
                    <div className='input-content flex items-center'>
                        <TeamOutlined className='mr-3 text-[20px]'/>
                        <input type="text" className="border border-[#009EE2] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="MSSV" />
                    </div>
                </div>
                <div className='flex items-center justify-center mt-20'>
                    <button className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                        Sign Up
                    </button>
                </div>
                <div className='login-signup flex items-center justify-center mt-10 mb-20'>
                    <p className='text-14'>Do have an account? <span onClick={() => { navigate(PATH.login) }} className='font-bold hover:cursor-pointer'>Login Now</span></p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default SignUpTemplate