import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <Link className="w-full md:w-[75%] lg:w-[57%]  font-medium text-3xl text-white text-center bg-slate-800 p-8 my-6 rounded-md"href={'/'}>
            <div>
                <h1 className="text-center ">Driss&apos;s Blog 💻</h1>
            </div>
        </Link>

    );
};

export default Header;
