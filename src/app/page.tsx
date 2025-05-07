import Image from "next/image";
import Logo from "../assets/Logo-colored.svg";
import LogoFooter from "../assets/Logo-footer-colored.svg";
import "./globals.css";
import { ArrowRight } from 'lucide-react';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import Section6 from '@/components/Section6';


export default function Home() {
  return (
    <div className="flex flex-col max-w-[1440px] items-center justify-items-center min-h-screen m-auto px-10">
      <header className="flex flex-row w-full items-center justify-center p-6">
        
        <div className="flex flex-row flex-1 justify-start items-center gap-4">
          <div className="relative w-32 h-8">
            <Image src={Logo} alt="Logo Uteach" fill className="text-black" />
          </div>
          <div className="flex flex-row gap-6 items-center justify-center">
            <a className='cursor-pointer hover:text-gray-600 transition-colors' href='/'>Products</a>
            <a className='cursor-pointer hover:text-gray-600 transition-colors' href='/'>Solutions</a>
            <a className='cursor-pointer hover:text-gray-600 transition-colors' href='/'>Pricing</a>
            <select className='flex border-none w-auto bg-transparent cursor-pointer hover:text-gray-600 transition-colors focus:outline-none appearance-auto'>
              <option value="resources" selected>Resources</option>
              <option value="help-center">Help Center</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row just items-center gap-4 px-1">
          <button className='px-2 py-1 rounded-lg hover:opacity-70'>Login In</button>
          <button className='border-2 rounded-lg px-2 py-1 hover:opacity-70'>Sign Up Now</button>
        </div>
      </header>


      <main className="flex flex-col w-full min-h-screen items-center p-10 justify-center">
        <div className='flex flex-col w-full flex-1 justify-center items-center px-2 space-y-10'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />

        </div>
      </main>
      <footer className="flex flex-col w-full h-80 px-6 items-center justify-center bg-foreground bottom-0">
        <div className='absolute'>
          <div className="grid grid-cols-6 gap-4 pt-14 w-full h-full text-white">
            <div className="flex flex-col gap-4 justify-start items-start">
              <div className="relative w-32 h-10 ">
                <Image src={LogoFooter} alt="Logo Uteach" fill className="text-black" />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <span className="mt-2">Product</span>
              <span className="mt-2">Pricing</span>
              <span className="mt-2">Overview</span>
              <span className="mt-2">Browse</span>
              <span className="mt-2 flex text-center">Accessibility <span className="ml-2 bg-[#F3E8FF] rounded-lg px-2 py-0.5 text-foreground font-light text-[12px]">BETA</span></span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <span className="mt-2">Solution</span>
              <span className="mt-2">Brainstorming</span>
              <span className="mt-2">Ideation</span>
              <span className="mt-2">Wireframing</span>
              <span className="mt-2">Research</span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <span className="mt-2">Resources</span>
              <span className="mt-2">Help Center</span>
              <span className="mt-2">Blog</span>
              <span className="mt-2">Tutorials</span>
              <span className="mt-2">FAQs</span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <span className="mt-2">Support</span>
              <span className="mt-2">Contact Us</span>
              <span className="mt-2">Developers</span>
              <span className="mt-2">Documentation</span>
              <span className="mt-2">Integrations</span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <span className="mt-2">Company</span>
              <span className="mt-2">About</span>
              <span className="mt-2">Press</span>
              <span className="mt-2">Events</span>
              <span className="mt-2 flex">Request Demo <ArrowRight className='ml-2' /></span>
            </div>
          </div>

          <div className="flex flex-row w-full h-20 items-center justify-between p-10 text-white">
            <span>uteach @ 2023. All rights reserved.</span>
            <div className="flex flex-row gap-4">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Contact</span>
              <span>EN</span>
              <span>EUR</span>
              <span>icon</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
