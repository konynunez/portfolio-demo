import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Work = ({name, description, link, Image}) => {
  return (
    <div className="p-5 m-10 border border-black bg-amber-100 rounded-md">
      Name: {name}
      <br></br>
      Description: {description}
      <br></br>
      Link: {link}
      <br></br>
      Image: {Image}

    </div>
  );
};

export default Work;

