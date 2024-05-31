import useFormContext from "../hooks/useFormContext"
import { PrintZero, PrintOne, PrintTwo, PrintThree } from "pages"
const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <PrintZero/>,
        1: <PrintOne/>,
        2: <PrintTwo/>,
        3: <PrintThree/>,
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs