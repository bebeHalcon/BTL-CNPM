import useFormContext from '../../hooks/useFormContext';

function nextWorkingDay(date) {
    while(!(date.getDay() % 6)) {
        date.setDate(date.getDate() + 1);
    }
    return date;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function nextWorkingHour(time: String) {
    let x =  time.split(':');
    let hour = parseInt(x[0]);
    let minute = parseInt(x[1]);
    if (hour < 7 || hour > 18) {
        hour = 7;
        minute = 30;
    }
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}
export const PrintThreeTemplate = () => {
    const { data, handleChange } = useFormContext();
    
    let date = new Date(data.twoDate);
    date = nextWorkingDay(date);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const time = nextWorkingHour(data.twoTime);
    let estimate_time = `Thứ ${day + 1} (${day}/${month}/${year}), ${time}`;

    const handlePaid = async (e) => {
        handleChange(e);
        if (e.target.checked) {
            document.getElementById('spinner_checked').hidden = true;
            document.getElementById('spinner_loading').hidden = false;
            await sleep(2000);
            document.getElementById('spinner_loading').hidden = true;
            document.getElementById('spinner_checked').hidden = false;
            alert("Xác nhận thanh toán thành công!");
        } else {
            document.getElementById('spinner_loading').hidden = true;
            document.getElementById('spinner_checked').hidden = true;
        }
    }
    return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-2 ml-[50px] py-10">
        <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Thanh toán</h1>
        <div>
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">(Hóa đơn đã được chuyển sang <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">BKPay</a>, vui lòng thanh toán TRƯỚC <span id='estimate-time' className='text-rose-600'>{`ngày ${day}/${month}/${year}`}</span>)</p>
        </div>
        <div className="mt-20">
            <p className="block mb-2 text-sm font-medium text-[#009EE2]">Tài liệu: <span id='estimate-time' className='text-rose-600'>{data.zeroFile.split('\\')[data.zeroFile.split('\\').length - 1]}</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Khổ giấy: <span id='estimate-time' className='text-rose-600'>{data.onePageSize}</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Chế độ in: <span id='estimate-time' className='text-rose-600'>In {data.onePageSides} mặt</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Trang in: <span id='estimate-time' className='text-rose-600'>{data.onePageNumbers}</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Số lượng: <span id='estimate-time' className='text-rose-600'>{data.oneCopies} bản</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Nơi in - máy in: <span id='estimate-time' className='text-rose-600'>Tòa {data.twoLocation} - Máy {data.twoPrinter}</span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Tổng tiền: <span id='estimate-time' className='text-rose-600'>{data.oneCopies * 3}.000 VNĐ </span></p>
        </div>
        <div className="mt-20">
        <p className="block mb-2 text-sm font-medium text-[#009EE2]">Thời gian nhận tài liệu (dự kiến): <span id='estimate-time' className='text-rose-600'>{estimate_time}</span></p>
        </div>
        <div className="flex items-center mt-16 gap-4">
            <input type="checkbox" value="True" checked={data.threeIsPaid} name="threeIsPaid" onChange={handlePaid} className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
            <label className="ml-2 text-sm font-medium text-gray-900">Xác nhận đã thanh toán qua BKPay.</label>
            <div role="status" id='spinner_loading' hidden={true}>
            <svg aria-hidden="true" className="w-20 h-20 me-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            </div>
            <div id="spinner_checked" className='left' hidden={true}>
            <svg className="w-20 h-20 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            </div>
        </div>
        </div>
    </div>
    )
}

export default PrintThreeTemplate