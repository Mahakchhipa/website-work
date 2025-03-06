"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Button({ btntext }) {
  return (
    <>
      <Link
        href={"/contact-us"}
        className={`quote-shadow font-bold  text-base lg:text-xl px-4 py-2 rounded-[7px] md:px-6 md:py-3  border-[1px] border-slate-300 hover:bg-white hover:text-black text-white`}
      >
        {btntext}
      </Link>
    </>
  );
}

// hover:bg-gradient-to-r from-[#2929DE] to-[#08083A]
