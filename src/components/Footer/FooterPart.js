import React from 'react';
import { Link } from 'react-router-dom';

const FooterPart = (props) => {
    return (
        <div className="">
      <ul className="">
        {props.menuItems.map((item, index) => (
          <li className="m-4 hover:underline" key={index}>
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default FooterPart;