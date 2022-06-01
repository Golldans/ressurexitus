import Link from "next/link";
import React, { Fragment, useState } from "react";
import { http } from "../../util/http";

export default function Login() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');

    const [showLogin, setShowLogin] = useState(true);
    const [showTrustMessage, setShowTrustMessage] = useState(false);

    const handleShowTrustMessage = () => {
        setShowTrustMessage(!showTrustMessage);
    }

    const registerUser = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        const userRegisterPayload = {
            email,
            username,
            password,
            verifiedPassword,
        };

        await http.post('/user/save', userRegisterPayload)
            .then(() => {alert('user registered!')})
            .catch(() => {alert('exception registering user')})
    }


    return (
        <Fragment>
            <section className="w-screen h-screen bg-neutral-900 bg-cover bg-center flex flex-col items-center justify-center">
                <div className="w-screen h-1/6 flex items-center justify-between p-2">
                    <Link href={'#'}>
                        <a className="text-white">
                            Back to menu
                        </a>
                    </Link>
                    <Link href={'#'}>
                        <a className="text-white" onClick={handleShowTrustMessage}>
                            New here?
                        </a>
                    </Link>
                </div>
                <div className="w-screen h-5/6 flex flex-col items-center justify-center">
                {
                    showTrustMessage ?
                    <form className="w-96 flex flex-col items-center justify-center" onSubmit={registerUser}>
                        <h1>
                            Should we trust you?
                        </h1>
                        <input onChange={(e) => {setEmail(e.target.value)}} value={email} className="m-1" placeholder="Email" type="email" name="" id="" />
                        <input onChange={(e) => {setUsername(e.target.value)}} value={username} className="m-1" placeholder="Username" type="text" name="" id="" />
                        <input onChange={(e) => {setPassword(e.target.value)}} value={password} className="m-1" placeholder="Password" type="password" name="" id="" />
                        <input onChange={(e) => {setVerifiedPassword(e.target.value)}} value={verifiedPassword} className="m-1" placeholder="Confirm password" type="password" name="" id="" />
                        <div>
                            <button className="bg-white m-5 p-2 hover:bg-gray-200">
                                You can trust me
                            </button>
                        </div>
                    </form>
                    :
                    <form className="w-96 flex flex-col items-center text-white">
                        <input placeholder="Username" type="text" name="" id=""  className="m-5 w-80 p-2 bg-transparent bg-white border-b-2 focus:outline-none"/>
                        <input placeholder="Password" type="password" name="" id="" className="m-5 w-80 p-2 bg-transparent bg-white border-b-2 focus:outline-none"/>
                        <button className="bg-purple-700 m-1 p-2 w-80 hover:bg-purple-900 duration-400 transition">Login</button>
                    </form>
                }
                </div>
            </section>
        </Fragment>
    ) 
}