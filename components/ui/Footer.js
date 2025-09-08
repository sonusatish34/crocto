import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 border-t lg:text-lg">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Image height={1000} width={1000} src="/images/logo.png" alt="Crocto Logo" className="h-32 lg:w-[221px] w-44 mr-2" />
            </div>
            
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="text-red-500">Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold mb-3">Pages</h3>
            <ul className="space-y-2">
              <li>Licensing</li>
              <li>Instructions</li>
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>More Templates!</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold mb-3">Address</h3>
            <p>Hyderbad</p>
            <h3 className="font-bold mt-4 mb-1">Inquiries</h3>
            <p>978794144444</p>
            <p>info@57dentcare.com</p>
          </div>

          {/* Social Media */}
          <div className="lg:pl-8">
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-5 mt-2">
              <FaFacebookF size={20}/>
              <FaTwitter size={20} />
              <FaYoutube size={20}/>
              <FaPinterest size={20}/>
              <FaLinkedinIn size={20}/>
              <FaTiktok size={20}/>
              <FaInstagram size={20}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
