import { Fragment } from "react";

interface serverProps {

}

export default function PostTemplate() {
    return (
        <Fragment>
            <div className="min-w-[36rem] w-36 min-h-[44rem] h-44 m-5 bg-white flex flex-col items-center justify-center border-gray-900 border-2">
                <div className="w-full h-5/6 bg-center bg-cover bg-[url('/moth_mock.jpg')]">
                    
                </div>
                <div className="w-full h-1/6 flex flex-col items-center justify-center bg-gray-900">
                    <form className="w-full flex items-center justify-center">
                        <input type="text" className="bg-transparent m-2 bg-white border-b-2 w-8/12 focus:outline-none text-white"  />
                    </form>
                    <button>
                        🎃
                    </button>
                </div>
            </div>
        </Fragment>
    )
}