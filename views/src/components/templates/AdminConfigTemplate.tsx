import { useState } from 'react';

export const AdminConfigTemplate = () => {
    
    const [inputAmountValue, setInputAmountValue] = useState('');
    const [inputDateValue, setInputDateValue] = useState('');

    const handleInputAmountChange = (event) => {
        let value = parseInt(event.target.value, 10) || 0;
        const max = 30;
        value = value > max ? max : value;
        setInputAmountValue(value.toString());
    };
    const handleInputDateChange = (event) => {
        let value = parseInt(event.target.value, 10) || 0;
        const max = 30;
        value = value > max ? max : value;
        setInputDateValue(value.toString());
    };

    return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Tùy chỉnh cấu hình</h1>

            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số lượng</label>
                <div className='input-content flex items-center'>
                <input type="number" className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" placeholder="30" min="0" max="30" value={inputAmountValue} onChange={handleInputAmountChange}/>
                </div>
            </div>

            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Ngày làm mới số giấy in mỗi tháng</label>
                <div className='input-content flex items-center'>
                    <input type="number" className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" placeholder="1" min = "1" max="31" value={inputDateValue} onChange={handleInputDateChange}/>
                </div>
            </div>

            <div className="flex items-center mb-4"></div>
            <div className="mt-20">
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Định dạng file</label>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="pdf" name="file-type" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">.pdf</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="doc" name="file-type" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">.doc</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="txt" name="file-type" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">.txt</label>
                </div>
            </div>

            <div className='flex items-center justify-end py-20'>
                <button className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                    Xác nhận
                </button>
            </div>
        </div>
    </div>
    )
}

export default AdminConfigTemplate