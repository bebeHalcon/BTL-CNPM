import useFormContext from '../../hooks/useFormContext';
// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// drag drop file component
function DragDropFile() {
    const {data, handleChange, pdfFile, setPdfFile, pdfError, setPdfError} = useFormContext();
    // creating new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // handle file onChange event
    const allowedFiles = ['application/pdf'];
    const handleFile = (e) =>{
        let selectedFile = e.target.files[0];
        handleChange(e);
        if(selectedFile){
            if(selectedFile&&allowedFiles.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend=(e)=>{
                setPdfError('');
                setPdfFile(e.target.result);
            }
            }
            else{
            setPdfError('Not a valid pdf: Please select only PDF');
            setPdfFile('');
            }
        }
        else{
        console.log('please select a PDF');
        }
    }
    // loadFile(data.zeroFile);
    return (
    <div className="container">
    <form>
        {/* <label className="block mb-2 font-medium">Tải file</label> */}
        <input type='file' name='zeroFile' className="block text-sm w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        onChange={handleFile}></input>

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError&&<span className='text-danger'>{pdfError}</span>}

    </form>
    <label className="block mb-2 font-medium">Xem trước</label>
        <div className="viewer h-[75vh]">

        {pdfFile&&(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
        </Worker>
        )}

        {!pdfFile&&<>Chưa có file được chọn</>}

        </div>
    </div>
    );
};

export default DragDropFile