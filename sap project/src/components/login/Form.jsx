// import ExternalLoginButtons from './ExternalLoginButtons'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../hooks/ThemeProvider'
import FormFields from './FormFields'

const Form = () => {
    const { theme, isInvertedRequired } = useContext(ThemeContext)


    return (
        <div className="form">
            <div className="form-content flex flex-col gap">
                <div className='flex'>
                    <h2 className="flex w-full flex-col gap-[1rem]">
                        <span>Hello!</span>
                        <span className='leading-6'>We're glad to see you:{")"}</span>
                    </h2>
                    <div>
                        <img src={theme.logo || "nitsel-logo.svg"} alt="logo" style={{ width: "40px", filter: `drop-shadow(1px 1px 2px #fff) invert(${isInvertedRequired ? 0 : 1})` }} />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-[40px] logo' viewBox="0 0 489.83 506"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M345.82,261.4a43.75,43.75,0,0,0,0-61.85L176.62,30.35A103.47,103.47,0,0,0,0,103.51V462.27a43.74,43.74,0,0,0,87.47,0V103.51a16,16,0,0,1,27.3-11.3L284,261.4A43.75,43.75,0,0,0,345.82,261.4Z" /><path className="cls-1" d="M446.09,0a43.73,43.73,0,0,0-43.73,43.74V402.49a16,16,0,0,1-27.3,11.31L205.86,244.6A43.74,43.74,0,1,0,144,306.46l169.2,169.19a103.47,103.47,0,0,0,176.62-73.16V43.74A43.74,43.74,0,0,0,446.09,0Z" /></g></g></svg> */}


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
