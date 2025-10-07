import { siteInfo, hours } from "@/src/content";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold">{siteInfo.name}</div>
          <p className="mt-3 text-neutral-600">{siteInfo.motto}</p>
        </div>
        <div>
          <p className="font-medium">Contact</p>
          <ul className="mt-2 space-y-2">
            <li>Email: {siteInfo.email}</li>
            <li>Phone: {siteInfo.phone}</li>
            <li>Address: {siteInfo.addressShort}</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Hours</p>
          <p className="mt-2 text-neutral-600">{hours}</p>
        </div>
      </div>
      <div className="container mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Cupping Room. All rights reserved.</div>
    </footer>
  );
}
