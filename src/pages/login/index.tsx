import { Fragment, useState } from "react";

export default function Login() {

    const [showLogin, setShowLogin] = useState(true);
    const [showTrustMessage, setShowTrustMessage] = useState(false);

    const handleShowTrustMessage = () => {
        setShowTrustMessage(!showTrustMessage);
    }


    return (
        <Fragment>
            <section className="w-screen h-screen bg-neutral-900 flex flex-col items-center justify-center">
                {
                    showTrustMessage ?
                    <form className="flex flex-col items-center justify-center">
                        <h1>
                            Should we trust you?
                        </h1>
                        <input className="m-1" placeholder="Email" type="email" name="" id="" />
                        <input className="m-1" placeholder="Username" type="text" name="" id="" />
                        <input className="m-1" placeholder="Password" type="password" name="" id="" />
                        <input className="m-1" placeholder="Confirm password" type="password" name="" id="" />
                        <div>
                            <button>
                                You can trust me
                            </button>
                        </div>
                    </form>
                    :
                    <form className="flex flex-col">
                        <input placeholder="Username" type="text" name="" id=""  className="m-5"/>
                        <input placeholder="Password" type="password" name="" id="" className="m-5"/>
                        <div>
                            <button className="bg-purple-700 m-1">Forgot your password?</button>
                            <button className="bg-purple-700 m-1">Login</button>
                        </div>
                    </form>
                }
                <button className="bg-purple-700 p-5 hover:bg-purple-900 duration-200" onClick={handleShowTrustMessage}>
                    New here?
                </button>
            </section>
        </Fragment>
    ) 
}