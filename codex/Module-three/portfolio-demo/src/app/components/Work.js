import React from 'react';
import Image from 'next/image';

const Work = ({ name, description, link, image }) => {
  return (
    <div className="p-5 m-10 border border-black bg-amber-100 rounded-md">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={name} width={400} height={200} className="rounded" />
      </a>
    </div>
  );
};

export default Work;
