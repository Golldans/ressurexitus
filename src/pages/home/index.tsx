import { Fragment } from "react";
import PostTemplate from "../../components/home/posts/postTemplate";
import MenuItems from "../../components/home/userMenu/menuItems";

export default function Home() {
    return (
        <Fragment>
            <main className="flex">
               <div className="h-screen w-screen grid grid-cols-10 grid-rows-7 bg-neutral-900">
                    <div className="bg-white row-span-7 grid grid-rows-7">
                        <div className="bg-purple-800">

                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            Hello
                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            Hello
                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            Hello
                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            Hello
                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            Hello
                        </div>
                        <div className="bg-zinc-900 hover:bg-gray-800 duration-200 transition cursor-pointer flex items-center justify-center text-white">
                            
                        </div>
                    </div>
                    <div className="bg-zinc-900 col-span-9">

                    </div>
                    <div className="col-span-9 row-span-6 flex items-center justify-start flex-col">
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                    </div>
                </div> 
            </main>
        </Fragment>
    )
}