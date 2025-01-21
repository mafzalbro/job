// import ExternalLoginButtons from './ExternalLoginButtons'
import FormFields from './FormFields'
const Form = () => {
    return (
        <div className="form">
            <div className="form-content flex flex-col gap">
                <div className='flex'>
                    <h2 className="flex w-full flex-col gap-[1rem]">
                        <span>Hello!</span>
                        <span className='leading-6'>We're glad to see you:{")"}</span>
                    </h2>
                    <div>
                        <img src="nitsel-logo.svg" alt="nitsel-logo" style={{width: "40px"}}/>
                    </div>
                </div>
                {/* <ExternalLoginButtons />
                <div className='flex-center or-line'>
                    Or
                </div> */}
                <FormFields />
            </div>
        </div>
    )
}
export default Form
