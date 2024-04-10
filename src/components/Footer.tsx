import React from "react";

function Footer() {
  return (
    <div className="bg-black pb-24 text-white flex max-w-[1900px] h-full pt-8 justify-between px-64 ">
      <div className="flex-col">
        <h1 className="font-bold">Abstract</h1>
        <h2>Branches</h2>
      </div>
      <div className="flex-col">
        <h1 className="font-bold">Resources</h1>
        <ul>Blog</ul>
        <ul>Help Center</ul>
        <ul>Release Notes</ul>
        <ul>Status</ul>
      </div>
      <div className="flex-col">
        <h1 className="font-bold">Community</h1>
        <ul>Twitter</ul>
        <ul>LinkedIn</ul>
        <ul>Facebook</ul>
        <ul>Dribbble</ul>
        <ul>Podcast</ul>
      </div>
      <div className="flex-col">
        <h1 className="font-bold">Company</h1>
        <ul>About Us</ul>
        <ul>Careers</ul>
        <ul>Legal</ul>
        <h1 className="font-bold mt-4">Contact Us</h1>
        <ul>info@abstract.com</ul>
      </div>
      <div className="flex-col h-auto content-end pt-48">
        <img src="" alt="" />
        <h2 className="">
          @ Copyright 2022 <br />
          Abstract Studio Design, Inc. <br />
          All rights reserved
        </h2>
      </div>
    </div>
  );
}

export default Footer;
