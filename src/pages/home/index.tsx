import { Fragment } from "react";
import PostTemplate from "../../components/home/posts/postTemplate";
import MenuItems from "../../components/home/userMenu/menuItems";

export default function Home() {
    return (
        <Fragment>
            <main className="flex">
               <div className="h-screen w-1/6 flex flex-col items-center justify-center sticky top-0 bg-neutral-900">
                    <div className="w-full h-5/6 flex flex-col items-center justify-start">
                        <MenuItems title={'Profile'}/>
                        <MenuItems title={'Activity'}/>
                    </div>
                    <div className="w-full h-1/6 flex items-center justify-center">
                        <div className="w-5/6 h-1/2 flex flex-col bg-white rounded-md">
                            <span>
                                Hello, i&apos;m a user!
                            </span>
                            <span>
                                And i&apos;m his score!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-4/6 flex flex-col items-center justify-start bg-neutral-900">
                    <PostTemplate />
                    <PostTemplate />
                    <PostTemplate />
                    <PostTemplate />
                </div>
                <div className="h-screen w-1/6 sticky top-0 bg-neutral-900">
                </div> 
            </main>
        </Fragment>
    )
}