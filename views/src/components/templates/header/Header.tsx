import { PATH } from 'constant/config';
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export const Header = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("Home");
  const [authInfo, setAuthInfo] = useState({
    isLogin: false,
  });
  const cookies = new Cookies();
  
  useEffect(() => {
    const token = cookies.get('TOKEN');

    if (token === undefined) {
      setAuthInfo(() => ({ isLogin: false}));
    }

    else {
      axios
        .post('http://localhost:8080/api/authorization/student', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data);
          setAuthInfo({ isLogin: true});
        })
        .catch((error) => {
          console.error(error);
          setAuthInfo({ isLogin: false});
        });
    }
  }, []);

  const handleSignOut = () => {
    if (!authInfo.isLogin) {
      alert('Có lỗi xảy ra!');
      return;
    }
    cookies.remove('TOKEN', {
      path: "/",
    });
    setAuthInfo({ isLogin: false});
    navigate('/');
    console.log('Đã đăng xuất');
    window.location.reload();
  }

  return (
    <header className='flex items-center'>
        <div className='grid grid-cols-4 container'>
          <div className="header-logo col-span-1 flex items-center hover:cursor-pointer" onClick={() => { navigate('/') }}>
              <img src="/img/logoBK.png" alt="logo" style={{
                  width: '80px',
                  height: '76.4px',
                  objectFit: 'cover'
              }}/>
              <h1 className="font-bold">SOFTWARE <br /> ENGINEERING</h1>
          </div>
          <div className="header-menu col-span-2">
              <ul className='flex items-center h-full gap-[40px] justify-center font-normal'>
                <li><a className={page === "Home" ? "active" : ""} onClick={() => {setPage("Home"); navigate(PATH.home)}}>Home</a></li>
                <li><a className={page === "About" ? "active" : ""} onClick={() => {setPage("About"); navigate(PATH.about)}}>About</a></li>
                <li><a className={page === "Contact" ? "active" : ""} onClick={() => {setPage("Contact"); navigate(PATH.home)}}>Contact</a></li>
                <li><a className={page === "Feedback" ? "active" : ""} onClick={() => {setPage("Feedback"); navigate(PATH.home)}}>Feedback</a></li>
              </ul>
          </div>
          <div className="header-action col-span-1 flex items-center gap-20 justify-end">
          {authInfo.isLogin == true ? null : (
            <button onClick={() => { navigate(PATH.loginRoute) }} className="bg-white text-[#1B1BEF] border-2 border-[#1B1BEF] hover:bg-[#1B1BEF] hover:text-white transition-all font-medium py-4 px-20 rounded">
              Login
            </button>
          )}
          {authInfo.isLogin == true ? null : (
            <button onClick={() => { navigate(PATH.signUp) }} className="bg-[#1B1BEF] text-white border-2 border-[#1B1BEF] hover:bg-white hover:text-[#1B1BEF] transition-all font-medium py-4 px-20 rounded">
              Sign up
            </button>
          )}
          {authInfo.isLogin == false ? null : (
            <button onClick={handleSignOut} className="bg-[#1B1BEF] text-white border-2 border-[#1B1BEF] hover:bg-white hover:text-[#1B1BEF] transition-all font-medium py-4 px-20 rounded">
              Sign out
            </button>
          )}
          </div>
        </div>
    </header>
  )
}

export default Header