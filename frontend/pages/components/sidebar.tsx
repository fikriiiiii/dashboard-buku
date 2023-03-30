import React from "react";
import Link from "next/link";

const sidebar = () => {
  return (
    <>
      <div className="relative h-32 w-[214px] ">
        <div className="fixed inset-y-0 left-0 w-48 bg-[#4E73DF] shadow-[4px_0px_20px_rgba(0,0,0,0.05)]">
          <section className="pt-4">
            <h1 className="text-white text-2xl text-center mb-4 font-black">
              COBAAJA
            </h1>
            <hr />
            <ul className="text-white pt-10">
              <li className="mb-6">
                <Link href="/components/dashboard" className="hover:font-black px-6 py-2">DASHBOARD</Link>
              </li>
              <li className="mb-6">
                <Link href="/components/buku" className="hover:font-black px-6 py-2">BUKU</Link>
              </li>
              <li className="mb-6">
                <Link href="#" className="hover:font-black px-6 py-2">LOGOUT</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default sidebar;
