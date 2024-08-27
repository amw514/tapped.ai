import { IconBrandAndroid } from "@tabler/icons-react";
import { Apple, Code } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h2 className="font-bold text-lg mb-4 text-primary">Company</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://tapped.tolt.io/"
                  className="hover:text-primary transition-colors"
                >
                  Referral Program
                </a>
              </li>
              <li>
                <a
                  href="https://tappedapp.notion.site/join-tapped-9ccf655358344b21979f73adadf22d98?pvs=74"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://tappedapp.notion.site/the-record-label-of-the-future-cf8298dd5c6d4b5b800f11eced46c261?pvs=4"
                  className="hover:text-primary transition-colors"
                >
                  Neo Record Label
                </a>
              </li>
              <li>
                <a
                  href="https://blog.tapped.ai/"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@tapped.ai?subject=Hi"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">Tool Suite</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://getmusicart.com/"
                  className="hover:text-primary transition-colors"
                >
                  Cover Art
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicepk.com/"
                  className="hover:text-primary transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicmarketing.com/"
                  className="hover:text-primary transition-colors"
                >
                  Marketing Plan
                </a>
              </li>
              <li>
                <a
                  href="https://getmusicviralchecker.com/"
                  className="hover:text-primary transition-colors"
                >
                  Viral Checker
                </a>
              </li>
              <li>
                <a
                  href="https://getmusiccontent.com/"
                  className="hover:text-primary transition-colors"
                >
                  Social Media Ideas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.tapped.ai/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://app.tapped.ai/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://app.tapped.ai/eula"
                  className="hover:text-primary transition-colors"
                >
                  EULA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4 text-primary">Download</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://apps.apple.com/us/app/tapped-ai/id1574937614"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <Apple className="mr-2" size={20} />
                  <span>iOS</span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.intheloopstudio"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <IconBrandAndroid className="mr-2" size={20} />
                  <span>Android</span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.tapped.ai/"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <Code className="mr-2" size={20} />
                  <span>API</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} Tapped AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
