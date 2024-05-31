import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    const [pdfFile, setPdfFile] = useState(null);
    // pdf file error state
    const [pdfError, setPdfError]=useState('');
    const title = {
        0: 'Tải tài liệu',
        1: 'Đăng ký in giấy',
        2: 'Đăng ký địa điểm in',
        3: 'Thanh toán'
    }

    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        zeroFile: null,
        onePageSize: "A4",
        oneCopies: 1,
        onePageNumbers: "all-pages",
        onePageSides: 1,
        twoIsAgree: false,
        twoLocation: "not-selected",
        twoPrinter: "",
        twoDate: null,
        twoTime: null,
        threeIsPaid: false
    })

    useEffect(() => {
        if (false) {
            setData(prevData => ({
                ...prevData,
            }))
        }
        }, [data.threeIsPaid])

        const handleChange = e => {
            const type = e.target.type
    
            const name = e.target.name
    
            const value = type === "checkbox"
                ? e.target.checked
                : e.target.value
            setData(prevData => ({
                ...prevData,
                [name]: value
            }))
            // alert(JSON.stringify(data))
        }
    

    const { ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Boolean(data.zeroFile) === true;

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('one'))
        .map(key => data[key])
        .every(Boolean)

    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('two'))
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
        || (page === 2 && !canNextPage3)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide, pdfFile, setPdfFile, pdfError, setPdfError}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 