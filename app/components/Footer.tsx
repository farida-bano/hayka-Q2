import React from 'react';
import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 flex flex-col items-center p-4 font-montserrat">
      {/* Bandage Section */}
      <div className="flex justify-between items-center mb-4 w-full px-4">
      
        <div className="w-[187px] h-[58px] bg-gray-100 flex justify-center items-center font-semibold text-xl">
          <span className="flex">Bandage</span>
        </div>
      </div>

    
      <div className="flex justify-end gap-8 mb-4 w-full px-4">
        <a href="#" className="w-[40px] h-[40px] flex justify-center items-center">
          <Image
            src="/facebook.png" 
            alt="Facebook"
            width={24}
            height={24}
          />
        </a>
        <a href="#" className="w-[40px] h-[40px] flex justify-center items-center">
          <Image
            src="/inst.png" 
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
        <a href="#" className="w-[40px] h-[40px] flex justify-center items-center">
          <Image
            src="/tt.png" 
            alt="Twitter"
            width={24}
            height={24}
          />
        </a>
      </div>

      
      <div className="grid grid-cols-5 gap-8 mb-4">
        
        <div className="w-[148px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Company Info</h4>
          <h5 className="text-sm font-semibold hover:underline ">About Us</h5>
          <h5 className="text-sm font-semibold hover:underline">Careers</h5>
          <h5 className="text-sm font-semibold hover:underline">We Are Hiring</h5>
          <h5 className="text-sm font-semibold hover:underline">Blog</h5>
        </div>
        
       
        <div className="w-[152px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Legal</h4>
          <h5 className="text-sm font-semibold hover:underline">Privacy Policy</h5>
          <h5 className="text-sm font-semibold hover:underline">Terms of Service</h5>
        </div>

      
        <div className="w-[180px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Features</h4>
          <h5 className="text-sm font-semibold hover:underline">Business Marketing</h5>
          <h5 className="text-sm font-semibold hover:underline">User Analytic</h5>
          <h5 className="text-sm font-semibold hover:underline">Live Chat</h5>
          <h5 className="text-sm font-semibold hover:underline">Unlimited Support</h5>
        </div>

       
        <div className="w-[152px] h-[220px] bg-white text-black flex flex-col p-2">
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <h5 className="text-sm font-semibold hover:underline">IOS & Android</h5>
          <h5 className="text-sm font-semibold hover:underline">Watch a Demo</h5>
          <h5 className="text-sm font-semibold hover:underline">Customers</h5>
          <h5 className="text-sm font-semibold hover:underline">API</h5>
        </div>

      
        <div className="w-[250px] h-[220px] bg-white text-black flex flex-col justify-center items-center p-2">
          <h4 className="text-2xl mb-2">Get In Touch</h4>
          <div className="w-[100%] bg-white text-black flex p-2 border border-gray-300 mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-[70%] h-[40px] bg-gray-200 text-black px-3 rounded-l-md focus:outline-none"
            />
            <button className="w-[30%] h-[40px] bg-blue-400 text-white font-semibold rounded-r-md hover:bg-blue-500">
              Subscribe
            </button>
          </div>
          <h5 className="text-sm text-center" style={{ width: "155px", height: "28px" }}>
            Lore imp sum dolor Amit
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
