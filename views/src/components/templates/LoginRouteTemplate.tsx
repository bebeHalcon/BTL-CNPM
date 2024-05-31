import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

export const LoginRouteTemplate = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12 h-4/6 shadow-3xl rounded-xl">
                <form className="p-12 md:p-24">
                    <div className="flex items-center justify-center mb-8">
                    <div>
                    <img src="/img/logoBK.png"></img>
                    </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-500 mb-6 border-b-2 border-blue-700 pb-2">Log in using your account on:</h1>
                    <div className="pb-6">
                    <button onClick={()=>{navigate(PATH.login, {state: {Admin: false}})}} className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-medium py-3 md:py-4 w-full rounded-md transform transition duration-300 hover:scale-105">
                        Lecturers/Staffs/Students of HCMUT
                    </button>
                    </div>
                    <div className="mt-4 mb-6 border-b-2 border-blue-700 pb-12">
                    <button onClick={()=>{navigate(PATH.login, {state: {Admin: true}})}} className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-medium py-3 md:py-4 w-full rounded-md transform transition duration-300 hover:scale-105">
                        SPSO
                    </button>
                    </div>
                </form>
            </div>
         </div>
    )
}

export default LoginRouteTemplate