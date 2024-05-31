import { useState } from 'react';
import axios from "axios";

const Modal = ({ isOpen, onClose, onSubmit, children }) => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        mssv: '',
        email: '',
        comment: '',
        experienceScale: 5
    });

    if (!isOpen) return null;

    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        // axios.post("http://localhost:8080/api/feedback/student/give", {
        //         name: formData.name,
        //         contactNumber: formData.name,
        //         mssv: formData.name,
        //         email: formData.name,
        //         comment: formData.name,
        //         experienceScale: formData.name
        //     })
        //     .then((response) => {
        //         if (response.status === 200 && response.data.code === 300) {
        //             setFormData({
        //                 name: '',
        //                 contactNumber: '',
        //                 mssv: '',
        //                 email: '',
        //                 comment: '',
        //                 experienceScale: 5
        //             });
        //             onClose();
        //         }
        //     })
        //     .catch((error) => {
        //         console.error("Error!!!!!!", error);
        //     });
        
        setFormData({
            name: '',
            contactNumber: '',
            mssv: '',
            email: '',
            comment: '',
            experienceScale: 5
        });
        onClose();
    };

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    background: 'white',
                    width: '500px',
                    padding: '2%',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        cursor: 'pointer',
                        color: '#2071B2',
                        fontSize: '14px',
                    }}
                    onClick={onClose}
                >
                    Back
                </div>

                <div className="flex flex-row justify-between gap-10">
                    <div className="flex-1">
                        <label>
                            <span className="text-[#2071B2] font-bold">Name</span>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888' }}
                            />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label>
                            <span className="text-[#2071B2] font-bold">Contact Number</span>
                            <input
                                type="tel"
                                value={formData.contactNumber}
                                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888' }}
                            />
                        </label>
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-10 mt-10">
                    <div className="flex-1">
                        <label>
                            <span className="text-[#2071B2] font-bold">MSSV</span>
                            <input
                                type="text"
                                value={formData.mssv}
                                onChange={(e) => handleInputChange('mssv', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888' }}
                            />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label>
                            <span className="text-[#2071B2] font-bold">Email</span>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888' }}
                            />
                        </label>
                    </div>
                </div>

                <div className="mt-20">
                    <label className="text-[#2071B2] font-bold">
                        Share your experience in scaling
                        <div className="mt-10">
                            {['Worst', 'Not good', 'Fine', 'Look good', 'Very good'].map((label, index) => (
                                <span
                                    key={index}
                                    style={{
                                        fontSize: '14px',
                                        margin: '0 16px',
                                        color: formData.experienceScale >= index + 1 ? '#2071B2' : '#d3d3d3',
                                    }}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            value={formData.experienceScale}
                            onChange={(e) => handleInputChange('experienceScale', parseInt(e.target.value))}
                            style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888' }}
                        />
                    </label>
                </div>

                <div className="mt-30">
                    <textarea
                        value={formData.comment}
                        placeholder="Add your comments..."
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '10px', border: '1px solid #888888', minHeight: '100px' }}
                    />
                </div>

                <br />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white font-bold py-10 px-20 w-full h-full rounded-md cursor-pointer"
                >
                    Submit
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;