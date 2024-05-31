import useFormContext from '../../hooks/useFormContext';

export const PrintOneTemplate = () => {
    const { data, handleChange } = useFormContext();
    const handleCustomPageText = (e) => {
        data.onePageNumbers = e.target.value;
    };
    return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký in giấy</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Khổ giấy</label>
                <div className='input-content flex items-center'>
                    <select name="onePageSize" value={data.onePageSize} onChange={handleChange} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="Letter">Letter</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số lượng</label>
                <div className='input-content flex items-center'>
                    <input type="number" name="oneCopies" value={data.oneCopies} onChange={handleChange} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" placeholder="1" min="1"/>
                </div>
            </div>
            <div className="flex items-center mb-4">
            </div>
            <div className="mt-20">
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số trang</label>
                <div className="flex items-center mt-16">
                    <input type="radio" name="onePageNumbers" value="all-pages" onChange={handleChange}
                    className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]" checked={data.onePageNumbers === 'all-pages'}/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Toàn bộ trang</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="radio" value="custom-pages" name="onePageNumbers" onChange={handleChange}  className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tùy chỉnh: </label><input id='custom-pages' onChange={handleCustomPageText} type='text' className='disabled ml-10 text-sm border border-[#009EE2] rounded-lg block' placeholder='e.g. 1-5, 8, 11-13' disabled={!data.onePageNumbers || !data.onePageNumbers.includes('custom-pages')}/>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số mặt</label>
                <div className='input-content flex items-center'>
                    <select name='onePageSides' value={data.onePageSides} onChange={handleChange}  className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="1" selected>In một mặt</option> 
                        <option value="2">In hai mặt</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PrintOneTemplate