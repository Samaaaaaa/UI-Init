import { faNoteSticky, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User, Home, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-2 header flex">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="hidden flex space-x-4 text-gray-700 font-medium">
        <li className="">الإدارة</li>
          <li className="hover:text-gray-900 cursor-pointer">
            الرئيسية
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            الإدارة
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            الخريجين
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            وحدة ضمان الجودة
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            الإعدادات
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            الطلب
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            برنامج التسجيل
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            برنامج تسجيل الطلب
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            عرض المزيد
            
          </li>

        </ul>

        <FontAwesomeIcon className="py-2 mt-1" icon={faChevronLeft} />
      </div>

      <div className="flex">
      <div className="bgIcon">
      <FontAwesomeIcon icon={faHouse} />
      </div>

      <div className="bgIcon">
      <FontAwesomeIcon icon={faNoteSticky} />
      </div>

      <div className="bgIcon">
      <FontAwesomeIcon icon={faUser} />
      </div>
      </div>
    </nav>
  );
}
