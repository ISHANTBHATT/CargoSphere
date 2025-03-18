import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-white px-10">
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo2.png" alt=" " width={500} height={150} />
              {/* <div className="h-8 w-8 bg-white"></div>
              <span className="font-medium text-white">Square Card</span> */}
            </div>
            <p className="text-gray-400">
              Innovative solutions and cutting-edge technology empower
              businesses to optimize their logistics operations, ensuring
              efficient and reliable transportation of goods across the globe
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-black">Quick Access</h3>
            <ul className="space-y-2 text-gray-500 flex flex-col justify-between">
              <Link href="/about">
                <li>About Us</li>
              </Link>
              <Link href="/prodduct">
                <li>Product</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-black">Help</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Branches</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-black">Follow Us</h3>
            {/* <p className="text-gray-400 mb-4">
              To Know The Latest News And Updates, Enter Your Email So That We
              Can Contact You.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter Email Address"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-secondary text-white hover:bg-secondary/90">
                Subscribe
              </Button>
            </div> */}
            <div className="flex gap-4 mt-6">
              <Facebook className="text-gray-700 hover:text-secondary" />
              <Twitter className="text-gray-700 hover:text-secondary" />
              <Instagram className="text-gray-700 hover:text-secondary" />
              <Linkedin className="text-gray-700 hover:text-secondary" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container py-6 text-center text-gray-400">
          Copyright © 2023 CargoSphere. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
