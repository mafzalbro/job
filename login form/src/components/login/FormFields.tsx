import { useEffect, useState } from "react";
import companies from "../../data/comanies.json";
import CompanyChangeModal from "./CompanyChangeModal";
import PasswordField from "./PasswordFields";

const FormContent = () => {
    const [message, setMessage] = useState<string>('');
    const [pending, setPending] = useState<"company" | "submit" | "">("");
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        companyDb: '0',
        conditionsChecked: false,
    });

    // Validation function
    const validateForm = () => {
        let isValid = true;

        if (formData.companyDb === '0') {
            setMessage('Please select a company DB.')
            isValid = false;
        }
        else if (!formData.username) {
            setMessage('Please enter a username.');
            isValid = false;
        } else if (!formData.password) {
            setMessage('Please enter a password.');
            isValid = false;
        }
        //  else if (!formData.conditionsChecked) {
        //     setMessage('You must agree to the terms and conditions.');
        //     isValid = false;
        // }
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');  // Clear previous messages
        setPending("submit");

        // Validate form before submission
        if (validateForm()) {
            const finalData = { ...formData };
            console.log(finalData);
            setMessage(`Form submitted successfully! ${JSON.stringify(finalData, null, 2)}`);
            setFormData({
                username: '',
                password: '',
                companyDb: '0',
                conditionsChecked: false,
            });
            // Proceed with form submission (you can integrate this with your backend API here)
        }

        setPending("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: !(prevData[name as keyof typeof formData]),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        // Clear message after 5 seconds
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <form onSubmit={handleSubmit} className='input-fields flex flex-col gap-4'>
            {/* Error message (display if there's any validation error) */}
            {message && ((!message?.includes("success")) ? (
                <div className="alert alert-danger">
                    {message}
                </div>
            ) : <div className="alert alert-success">{message}</div>)}

            <div className="w-full flex flex-col">
                {/* Company DB Select */}
                <label htmlFor="company-db" className="mt-4">Company DB</label>
                <select
                    name="companyDb"
                    id="company-db"
                    className="input input-border rounded-full w-full"

                    value={formData.companyDb}
                    onChange={handleInputChange}
                >
                    <option value="0" disabled>
                        Select Company DB
                    </option>
                    {companies.map((company) => (
                        <option key={company.id} value={company.id}>
                            {company.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="input-field flex w-full gap justify-between">
                <div className='w-full flex flex-col'>
                    <label htmlFor="username">Username</label>
                    <input

                        type="text"
                        name="username"
                        id='username'
                        className='input input-border rounded-full w-full'
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Uncomment if email field is in the future */}
            {/* <div className='w-full flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input
                   
                    type="email"
                    name="email"
                    id='email'
                    className='input input-border rounded-full w-full'
                />
            </div> */}

            <div className="input-field flex w-full gap justify-between">
                {/* 
                <div className='w-full flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input

                        type="password"
                        name="password"
                        id='password'
                        placeholder="xxxxxxxx"
                        className='input input-border rounded-full w-full'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div> */}

                <PasswordField
                    value={formData.password}
                    onChange={handleInputChange}
                />

                {/* Uncomment if repeat password field is in the future */}
                {/* <div className='w-full flex flex-col'>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input
                       
                        type="password"
                        name="repeat-password"
                        id='repeat-password'
                        placeholder="xxxxxxxx"
                        className='input input-border rounded-full w-full'
                    />
                </div> */}
            </div>

            {/* <div className="flex gap-4 custom-checkbox">
                <label htmlFor="conditions">
                    <input

                        type="checkbox"
                        id="conditions"
                        name="conditionsChecked"
                        className="checkbox-input"
                        checked={formData.conditionsChecked}
                        onChange={handleInputChange}
                    />

                    <span className="checkbox" tabIndex={0}></span>
                    <span>
                        <span className="checkbox-text">
                            I agree{" "}
                            <a href="#" className='text-blue-500'>Terms of Service</a> and{" "}
                            <a href="#" className='text-blue-500'>Privacy Policy</a>
                        </span>
                    </span>
                </label>
            </div> */}

            <div className="flex gap-4">
                <button type="submit" className={`btn rounded-full submit-button button-text ${pending == "submit" ? 'btn-disabled' : ''}`}>
                    Login
                </button>

                <CompanyChangeModal />
            </div>
        </form >
    );
};

export default FormContent;