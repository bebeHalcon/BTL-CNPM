import { PATH } from 'constant/config'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export const SidebarHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveSide1 = location.pathname === PATH.historyPrint;
  const isActiveSide2 = location.pathname === PATH.historyBuy;
  return (
    <div className="bg-[#cde5ff] h-[540px] flex flex-col justify-center items-center gap-20">
        <NavLink to={PATH.historyPrint} className={isActiveSide1 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.historyPrint)}}>
            <h3 className={isActiveSide1 ? "font-bold text-white" : "font-bold"}>In ấn</h3>
        </NavLink>
        <NavLink to={PATH.historyBuy} className={isActiveSide2 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.historyBuy)}}>
            <h3 className={isActiveSide2 ? "font-bold text-white" : "font-bold"}>Mua giấy</h3>
        </NavLink>
    </div>
  )
}

export default SidebarHistory