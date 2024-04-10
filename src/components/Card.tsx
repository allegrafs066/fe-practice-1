import React from "react";

function Card({ img, alt, title, content, link }: any) {
  return (
    <div className="flex w-88 h-48 ">
      <img className="object-contain w-20 h-20 mr-10" src={img} alt={alt} />
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-3xl mb-8">{content}</p>
        <a className="font-bold text-xl" href={link}>
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default Card;
