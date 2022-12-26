import React from "react";
import FooterPart from "./FooterPart";
import { GrCaretDown } from "react-icons/gr";


const Footer = () => {
  const part1 = [
    { name: "FAQ", link: "/" },
    { name: "Investor Relations", link: "/" },
    { name: "Privacy", link: "/" },
    { name: "Speed Test", link: "/" },
  ];
  const part2 = [
    { name: "Help Centre", link: "/" },
    { name: "Jobs", link: "/" },
    { name: "Cookie Preferences", link: "/" },
    { name: "Legal Notices", link: "/" },
  ];
  const part3 = [
    { name: "Account", link: "/" },
    { name: "Ways to Watch", link: "/" },
    { name: "Corporate Information", link: "/" },
    { name: "Only on Netflix", link: "/" },
  ];
  const part4 = [
    { name: "Media Centre", link: "/" },
    { name: "Terms of Use", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  return (
    <div className="w-8/12 m-auto text-gray-600 py-16">
      <p className="m-3">Questions? Call 000-800-919-1694</p>
      <div className="sm:flex md:flex lg:flex justify-between">
      <FooterPart key={3} menuTitle="" menuItems={part1} />
      <FooterPart key={3} menuTitle="" menuItems={part2} />
      <FooterPart key={3} menuTitle="" menuItems={part3} />
      <FooterPart key={3} menuTitle="" menuItems={part4} />
      </div>
      <div className="border-[1px] w-[120px] p-2 border-gray-700 m-4">
        <span className="mr-2 text-white">&#10753;</span>
        <span>
          <select className="bg-transparent text-white" name="cars" id="cars">
            <option value="volvo">English</option>
            <option value="saab">हिंदी</option>
          </select>
        </span>
      </div>
      <p className="m-2">Netflix India</p>
    </div>
  );
};

export default Footer;
