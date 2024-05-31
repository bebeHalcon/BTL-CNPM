import useFormContext from '../../hooks/useFormContext';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export const PrintTwoTemplate = () => {
    const { data, handleChange } = useFormContext();
    const printer_status = ["Đang rảnh", "Đang in", "Bảo trì"]
    const printers = {
        "A2": [
            ["Canon LBP 3300", 0],
            ["HP LaserJetPro", 1]
        ],
        "A3": [
            ["Epson EcoTank L3150", 2],
            ["Canon PIXMA", 1]
        ],
        "B1": [
            ["Brother HL-L2380DW", 0],
            ["Samsung Xpress M2020W", 0]
            // Add more printers for B1 as needed
        ],
        "B4": [
            ["Dell Color Laser Printer", 1],
            ["Lexmark CX517de", 2]
            // Add more printers for B4 as needed
        ],
        "B8": [
            ["Xerox Phaser 6510", 1],
            ["HP Color LaserJet Pro MFP", 1]
            // Add more printers for B8 as needed
        ],
        "C1": [
            ["Epson WorkForce Pro", 0],
            ["Kyocera Ecosys", 0]
            // Add more printers for C1 as needed
        ],
        "C2": [
            ["HP OfficeJet Pro", 1],
            ["Canon MAXIFY", 2]
            // Add more printers for C2 as needed
        ],
        "C5": [
            ["Ricoh Aficio SP", 2],
            ["Lexmark CS517de", 1]
            // Add more printers for C5 as needed
        ],
    };
    const handlePrinter = () => {
        if (data.twoLocation) {
            const location = document.getElementById('twoLocation').value;
            let all_options = "";
            if (location !== 'not-selected') {
                const print_list = printers[location];
                for(let i = 0; i < print_list.length; i++) {
                    let printer = print_list[i];
                    all_options += `<option value="${printer[0]}" ${printer[1] === 2?"disabled":""} ${data.twoPrinter === printer[0] ? "selected": ""}>${printer[0]} - ${printer_status[printer[1]]}</option>`;
                }
            }
            document.getElementById('twoPrinter').innerHTML = all_options;
        } else {
            document.getElementById('twoPrinter').innerHTML = "";
        }
    };
    const handleLocation = async (e) => {
        await handleChange(e);
        await sleep(100);
        handlePrinter();
    };
    return (
    <div className="PrintTwoTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký địa điểm in</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Nơi in</label>
                <div className='input-content flex items-center'>
                    <select name='twoLocation' id='twoLocation' value={data.twoLocation} onChange={handleLocation} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="not-selected" selected>Chưa chọn</option>
                        <option value="A2">Tòa A2</option>
                        <option value="A3">Tòa A3</option>
                        <option value="B1">Tòa B1</option>
                        <option value="B4">Tòa B4</option>
                        <option value="B8">Tòa B8</option>
                        <option value="C1">Tòa C1</option>
                        <option value="C2">Tòa C2</option>
                        <option value="C5">Tòa C5</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Máy in</label>
    <select name="twoPrinter" id='twoPrinter' value={data.twoPrinter} onClick={handlePrinter} onChange={handleChange} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">{data.twoPrinter && <option value={data.twoPrinter} selected></option>}</select>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Thời gian nhận</label>
                <div className='input-content flex items-center'>
                    <input id='date' type='date' name='twoDate' value={data.twoDate} onChange={handleChange} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" min="07:00" max="18:00">
                    </input>
                    <input id='time' type='time' name='twoTime' value={data.twoTime} onChange={handleChange} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                    </input>
                </div>
            </div>
            
            <div className="flex items-center mt-16 gap-4">
                <input type="checkbox" value="True" checked={data.twoIsAgree} name="twoIsAgree" onChange={handleChange} className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                <label className="ml-2 text-sm font-medium text-gray-900">Tôi đồng ý với các <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Điều khoản dịch vụ</a>.</label>
            </div>
        </div>
        {/* <div className="right col-span-1 flex justify-center items-center ">
            <img src="/img/DHBK_HCM-Catalogue-2015.jpg" alt="Location" className="h-[500px] w-[500px] py-50"></img>
        </div> */}
    </div>
    )
}

export default PrintTwoTemplate