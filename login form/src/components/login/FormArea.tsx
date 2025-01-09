import FormImage from './FormImage.tsx'
import Form from './Form.tsx'
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
