import React from 'react';
import Link from 'next/link';

export type FooterNavRowProps = {
  nav_text: string;
  nav: {
    name: string;
    href: string;
  }[];
};

const FooterNavRow: React.FC<FooterNavRowProps> = ({ nav_text, nav }) => {
  return (
    <div className="bg-gray-800 hidden p-4 xl:block">
      <p className="mb-2 ">{nav_text}</p>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <span className="link">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavRow;
