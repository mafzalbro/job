import FormImage from './FormImage'
import Form from './Form'
import "./Form.css"

const FormArea = () => {
    return (
        <div className='form-area'>
            <div className='form-container text flex responsive-flex justify-between'>
                <FormImage />
                <Form />
            </div>
        </div>
    )
}

export default FormArea
