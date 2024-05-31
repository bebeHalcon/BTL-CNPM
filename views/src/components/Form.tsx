import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext"
import { PATH } from 'constant/config';
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const navigate = useNavigate();

    const content = (
        <form className="" onSubmit={handleSubmit}>
            <FormInputs />
            <div className="pt-15 button-container">
            <button type="button" className={disablePrev ? `button ${prevHide} bg-[#009EE2] text-white border-2 border-[#009EE2] transition-all font-bold py-6 px-34 rounded-[10px] opacity-50 cursor-not-allowed mx-1` : `button ${prevHide} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px] mx-1`} onClick={handlePrev} disabled={disablePrev}>Quay lại</button>

            <button type="button" className={disableNext ? `button ${nextHide} bg-[#009EE2] text-white border-2 border-[#009EE2] transition-all font-bold py-6 px-34 rounded-[10px] opacity-50 cursor-not-allowed mx-1` : `button ${nextHide} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px] mx-1`} onClick={handleNext} disabled={disableNext}>Tiếp theo</button>

            <button type="submit" className={!canSubmit?`button ${!canSubmit} bg-[#009EE2] text-white border-2 border-[#009EE2] transition-all font-bold py-6 px-34 rounded-[10px] opacity-50 cursor-not-allowed mx-1` : `button ${!canSubmit} bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded-[10px] mx-1`} onClick={()=>{navigate(PATH.user)}}disabled={!canSubmit}>Hoàn tất</button>
            </div>
            

        </form>
    )

    return content
}
export default Form