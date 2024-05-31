import { PATH } from 'constant/config';
import { useNavigate } from 'react-router-dom'
import Modal from "./FeedbackModal";
import React from "react";

export const UserTemplate = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleSubmit = (email) => {
        console.log('Email submitted:', email);
    };
  return (
    <div className="UserTemplate">
        <div className="top h-[500px]">
            <div className="top w-full h-[300px] bg-cover bg-center bg-[url('/img/userImage.jpg')]">
                <div className="overlay w-full h-full bg-black opacity-70"></div>
            </div>
        </div>
        <div className="bottom absolute top-[51%] left-[33%]">
            <div className="flex items-center justify-center gap-50">
                <div onClick={() => { navigate(PATH.printZero) }} className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer">
                    <h2 className="font-bold">PRINT</h2>
                    <p>In tài liệu, sách, <br/> photo, ...</p>
                </div>
                <div onClick={() => { navigate(PATH.historyPrint) }} className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer">
                    <h2 className="font-bold">HISTORY</h2>
                    <p>Xem lịch sử sử<br/>dụng máy in</p>
                </div>
                <div className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer" onClick={handleOpen}>
                    <h2 className="font-bold">FEEDBACK</h2>
                    <p>Giúp chúng tôi<br/>hoàn thiện hơn </p>
                </div>
            </div>
            <h1 className="text-center text-[40px] font-bold pt-26 text-[#009EE2]">Trải nghiệm ngay nào</h1>
            <Modal isOpen={open} onClose={handleClose} onSubmit={handleSubmit}>
                <>
                </>
            </Modal>
        </div>
    </div>
  )
}

export default UserTemplate