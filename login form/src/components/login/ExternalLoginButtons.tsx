import { BsGoogle, BsTwitter } from "react-icons/bs"
import Button from "./Button"
import { FaFacebookF } from "react-icons/fa"

const ExternalLoginButtons = () => {
    return (
        <div className="flex justify-between">
            <Button onClick={() => { window.location.href = "http://localhost:3000/google" }}>
                <BsGoogle style={{ marginRight: "4px" }} size={16} /> Sign up with Google
            </Button>
            <Button onClick={() => { window.location.href = "http://localhost:3000/facebook" }} bordered>
                <FaFacebookF size={20} />
            </Button>
            <Button onClick={() => { window.location.href = "http://localhost:3000/twitter" }} bordered>
                <BsTwitter size={20} />
            </Button>
        </div>
    )
}

export default ExternalLoginButtons
