import Link from "next/link";
import { Fragment } from "react";

interface serverProps {
    title: string;
}

export default function MenuItems({title}: serverProps) {
    return (
        <Fragment>
            <div className="w-5/6 m-1 p-1 rounded-sm bg-gray-800">
                <Link href={'#'}>
                    <a className="text-gray-500 hover:text-white duration-300 cursor-pointer">
                        {title}
                    </a>
                </Link>
            </div>
        </Fragment>
    )
}