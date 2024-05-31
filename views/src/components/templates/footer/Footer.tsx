import { SendOutlined, FacebookFilled, TwitterOutlined, GithubOutlined } from "@ant-design/icons"
import './style.scss'

export const Footer = () => {
    return (
    <footer>
        <div className="footer-top">
            <div className="flex justify-center items-center gap-20 h-[80px] container"> 
                <h3 className="font-bold text-[18px]">Newsletter</h3>   
                <div className="top-search flex items-center justify-between bg-white w-[380px] py-8 px-20 rounded-[30px]">
                <input type="text" id="first_name" className="text-gray-900 text-sm rounded-lg w-full" placeholder="Your Email" />
                    <div className="search-icon bg-[#0081FE] flex items-center h-[30px] w-[30px] p-20 justify-center rounded-full hover:cursor-pointer">
                            <SendOutlined className="text-white text-center"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div>
                <div className="bottom-menu">
                    <ul className="flex items-center justify-center gap-50 py-20">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">About</a> us</li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="bottom-icons flex items-center justify-center gap-40 pb-20">
                    <FacebookFilled />
                    <TwitterOutlined />
                    <GithubOutlined />
                </div>
                <div className="bottom-copyright flex items-center justify-center pb-20">
                    <p className="text-14">&copy; Copyright 2023 - Lift Media</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer