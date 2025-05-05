import Image from "next/image";
import Logo from "./assets/Logo-colored.svg";
import LogoFooter from "./assets/Logo-footer-colored.svg";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[1440px] items-center justify-items-center min-h-screen m-auto p-10 overflow-hidden">
      <header className="flex flex-row w-full items-center justify-center bg-amber-300 p-6">
        
        <div className="flex flex-row flex-1 justify-start items-center gap-4 bg-red-300">
          <div className="relative w-32 h-8">
            <Image src={Logo} alt="Logo Uteach" fill className="text-black" />
          </div>
          <div className="flex flex-row gap-4">
            <span>Products</span>
            <span>Solutions</span>
            <span>Pricing</span>
            <span>Resources</span>
          </div>
        </div>
        <div className="flex flex-row just items-center gap-4 bg-blue-300">
          <button>Login In</button>
          <button>Sign Up Now</button>
        </div>
      </header>
      <main className="flex flex-col w-full items-center justify-center gap-8">
        
      </main>
      <footer className="flex flex-col w-full h-96 px-6 items-center justify-center bg-foreground">
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
            <span className="mt-2">Request Demo →</span>
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
      </footer>
    </div>
  );
}
