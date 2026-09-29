import { footerColumns } from "@/data/content";
import Logo from "./Logo";

// Footer: newsletter signup, three link columns and the copyright bar.
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-x pb-12 pt-[71px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex flex-col gap-[45px] lg:w-[528px] lg:shrink-0">
            <div className="flex flex-col gap-4">
              <Logo textColor="#242528" />
              <p className="font-body text-sm leading-[1.6] text-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <form className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] rounded-full border border-gray-200 px-6 font-body text-base leading-[1.6] text-gray-950 placeholder:text-gray-950 focus:border-persian-blue focus:outline-none sm:w-[376px]"
                />
                <button
                  type="submit"
                  className="rounded-pill bg-electric-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-gray-950 transition-transform hover:scale-[1.03]"
                >
                  Search
                </button>
              </form>
              <p className="max-w-[504px] font-body text-xs leading-[1.6] text-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our
                company.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:flex lg:w-[580px] lg:pt-12">
            {footerColumns.map((links, i) => (
              <ul key={i} className="flex flex-col gap-4 lg:w-[167px]">
                {links.map((link) => (
                  <li key={link} className="font-body text-sm leading-[1.6]">
                    <a
                      href="#"
                      className="whitespace-nowrap text-gray-950 hover:text-persian-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 lg:mt-[130px]">
          <div className="h-px w-full bg-gray-200" />
          <div className="mt-[22px] flex flex-col gap-3 font-body text-xs leading-[1.6] text-gray-950 sm:flex-row sm:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-persian-blue">Privacy Policy</a>
              <a href="#" className="hover:text-persian-blue">Terms of Service</a>
              <a href="#" className="hover:text-persian-blue">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
