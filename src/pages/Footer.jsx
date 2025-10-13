import React from 'react';
import { Instagram, Youtube, X } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    x: "https://x.com/babarkhan19761",
    instagram: "https://www.instagram.com/tanzeelkhanpak/",
    youtube: "https://youtube.com",
  };

  const navItems = [
    {
      title: "Product",
      links: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Examples", "Community", "Guides", "Docs", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
  ];

  const NavColumn = ({ title, links }) => (
    <div>
      <h4 className="text-sm font-semibold mb-4 text-gray-300">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
            <div className="flex items-center space-x-3 mb-4">
              <img src="Logo.png" alt="Logo" className="h-10 w-10 object-contain ml-0 md:ml-14" />
              <span className="text-lg font-medium">UI Kit</span>
            </div>

            <div className="flex space-x-6 mt-6 md:mt-36 ml-0 md:ml-14">
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <X size={20} />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-gray-400 hover:text-purple-800 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch us on YouTube"
                className="text-gray-400 hover:text-purple-700 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 w-full md:w-auto text-center sm:text-left mr-0 md:mr-16">
            {navItems.map((item) => (
              <NavColumn key={item.title} title={item.title} links={item.links} />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          Developed by{" "}
          <span className="text-purple-700 font-medium hover:text-blue-400 transition-colors">
            Tanzeel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
