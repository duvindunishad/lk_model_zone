import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Latest Update Photo Shoots</li>
              <li>Event</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li>Model Bank</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">SOCIAL MEDIA</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-blue-600" size={24} />
              <FaTwitter className="text-blue-400" size={24} />
              <FaYoutube className="text-red-600" size={24} />
              <FaPinterestP className="text-red-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">
          Copyright © 2024 LK Model Zone. All rights reserved. Designed and Developed by 
          <a href="#" className="text-yellow-400 ml-1">LK Model Zone Team</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;