import { useEffect, useState } from "react";
import PasswordField from "./PasswordFields";

const CompanyChangeModal = () => {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    // companyDb: "0",
    // conditionsChecked: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy JSON data for the table
  const companies = [
    { id: "1", dbName: "DB1", companyName: "Company A" },
    { id: "2", dbName: "DB2", companyName: "Company B" },
    { id: "3", dbName: "DB3", companyName: "Company C" },
    { id: "4", dbName: "DB4", companyName: "Company D" },
    { id: "5", dbName: "DB5", companyName: "Company E" },
  ];

  // Validation function
  const validateForm = () => {
    let isValid = true;

    if (!formData.username) {
      setMessage("Please enter a username.");
      isValid = false;
    } else if (!formData.password) {
      setMessage("Please enter a password.");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setMessage(""); // Clear previous messages
    setPending("submit");

    // Validate form before submission
    if (validateForm()) {
      const finalData = { ...formData };
      console.log(finalData);
      setMessage(`Form submitted successfully! ${JSON.stringify(finalData, null, 2)}`);
      setFormData({
        username: "",
        password: "",
        // companyDb: "0",
        // conditionsChecked: false,
      });
      // Proceed with form submission (you can integrate this with your backend API here)
    }

    setPending("");
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: !(prevData[name]),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Clear message after 5 seconds
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className={`btn rounded-full submit-button button-text ${pending == "company" ? 'btn-disabled' : ''}`}
      >
        Change Company
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => { setIsModalOpen(false) }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}
          >
            <div className="form-content">
              {/* <button onClick={toggleModal} className="close-btn">
                &times;
              </button> */}
              <div className="graphics">
              </div>
              <h2>
                <span className="company-db-mb-2">
                  Company  DB
                </span>
              </h2>
            </div>

            <div className="input-fields flex flex-col gap-4">
              {/* Error message (display if there's any validation error) */}
              {message && ((!message?.includes("success")) ? (
                <div className="alert alert-danger">{message}</div>
              ) : (
                <div className="alert alert-success">{message}</div>
              ))}


              <div className="input-field flex w-full gap justify-between">
                <div className="w-full flex flex-col">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="input input-border rounded-full w-full"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="input-field flex w-full gap justify-between">
                {/* <div className="w-full flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="xxxxxxxx"
                    className="input input-border rounded-full w-full"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div> */}
                <PasswordField onChange={handleInputChange} value={formData.password} />
              </div>

            </div>

            {/* Table with DB name and company name */}
            <div className="company-table mt-4">
              <h3 className="text-xl font-semibold">Company DB List</h3>
              <table className="table-auto w-full mt-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">DB Name</th>
                    <th className="px-4 py-2 border">Company Name</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.id}>
                      <td className="px-4 py-2 border">{company.dbName}</td>
                      <td className="px-4 py-2 border">{company.companyName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="flex gap-4 mt-2">
              <button
                onClick={handleSubmit}
                className={`btn rounded-full submit-button button-text ${pending == "submit" ? "btn-disabled" : ""
                  }`}
              >
                Login
              </button>
              <button
                onClick={toggleModal}
                className={`btn rounded-full submit-button button-text ${pending == "submit" ? "btn-disabled" : ""
                  }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyChangeModal;