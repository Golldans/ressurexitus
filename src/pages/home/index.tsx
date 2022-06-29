import { Fragment, useEffect, useState } from "react";
import PostTemplate from "../../components/home/posts/postTemplate";
import MenuItems from "../../components/home/userMenu/menuItems";

export default function Home() {

    const [scroll_height, set_scroll_height] = useState(0);

    const handle_nav_bar = () => {
        const height = document.querySelector('#post-window');
        if (height == undefined || height == null) return;
        set_scroll_height(height.scrollTop);
    }

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
                    <div className={`col-span-9`}>
                        <div className={`${scroll_height == 0 ? 'h-full' : 'h-1/2'} bg-zinc-600 w-full h-full transition-all duration-100`}>

                        </div>
                    </div>
                    <div id="post-window" onScroll={() => handle_nav_bar()} className="col-span-9 row-span-6 flex items-center justify-start flex-col overflow-y-scroll">
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
                        <PostTemplate />
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