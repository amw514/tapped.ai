import { IconBrandAndroid } from "@tabler/icons-react";
import { Apple, Code, Youtube, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-lg mb-4 text-primary">company</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://tapped.tolt.io/"
                    className="hover:text-primary transition-colors"
                  >
                    referral program
                  </a>
                </li>
                <li>
                  <a
                    href="https://tappedapp.notion.site/join-tapped-9ccf655358344b21979f73adadf22d98?pvs=74"
                    className="hover:text-primary transition-colors"
                  >
                    careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://tappedapp.notion.site/the-record-label-of-the-future-cf8298dd5c6d4b5b800f11eced46c261?pvs=4"
                    className="hover:text-primary transition-colors"
                  >
                    neo record label
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.tapped.ai/"
                    className="hover:text-primary transition-colors"
                  >
                    blog
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@tapped.ai?subject=Hi"
                    className="hover:text-primary transition-colors"
                  >
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg mb-4 text-primary">legal</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://app.tapped.ai/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.tapped.ai/terms"
                    className="hover:text-primary transition-colors"
                  >
                    terms & conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.tapped.ai/eula"
                    className="hover:text-primary transition-colors"
                  >
                    eula
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">tool suite</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://getmusicart.com/"
                  className="hover:text-primary transition-colors"
                >
                  cover art
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicepk.com/"
                  className="hover:text-primary transition-colors"
                >
                  press kit
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicmarketing.com/"
                  className="hover:text-primary transition-colors"
                >
                  marketing plan
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicviralchecker.com/"
                  className="hover:text-primary transition-colors"
                >
                  viral checker
                </a>
              </li>
              <li>
                <a
                  href="https://getmusiccontent.com/"
                  className="hover:text-primary transition-colors"
                >
                  social media ideas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">download</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://apps.apple.com/us/app/tapped-ai/id1574937614"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <Apple className="mr-2" size={20} />
                  <span>ios</span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.intheloopstudio"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <IconBrandAndroid className="mr-2" size={20} />
                  <span>android</span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.tapped.ai/"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <Code className="mr-2" size={20} />
                  <span>api</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">connect</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@TappedAi_"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://twitter.com/tappedai"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/tappedai/"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/tappedai/"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full  hover:bg-primary hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} tappedx. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
