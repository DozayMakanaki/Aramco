import trustpilot from '../assets/trustpilot-2.svg'

import React from "react";

const AramcoFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo & Trustpilot */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            
            <img src= {trustpilot}
             alt="Trustpilot" className="w-32 md:w-40" />
          </div>
        </div>

        {/* Headquarters Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Headquarters:</h3>
            <p className="text-gray-400">935 W. San Marcos Blvd, Suite 100</p>
            <p className="text-gray-400">San Marcos, CA 92078</p>
            <p className="mt-2">
              <span className="font-semibold">Phone:</span> (877) 700-0942
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@aramco.biz" className="text-blue-400 hover:underline">
                info@aramco.biz
              </a>
            </p>
          </div>

          {/* Mortgage Commitment */}
          <div className="text-sm text-gray-400">
            <p>
              Our mortgage specialists are committed to customer service and strive to make you a customer for life.
              Whether you’re looking for a residential or commercial mortgage, contact one of our experienced loan officers today.
            </p>
          </div>
        </div>

        {/* Equal Housing Opportunity */}
        <div className="flex justify-center md:justify-start mt-6">
          <img src="/equal-housing.png" alt="Equal Housing Opportunity" className="w-20" />
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-sm text-gray-400 text-center md:text-left">
          <p>
            These materials are not from HUD or FHA and were not approved by HUD or a government agency.
            All loans are subject to credit and underwriting approval.
          </p>
          <p className="mt-2">
            The programs advertised on this site are not a commitment or guarantee from ARAMCO Mortgage, Inc. to lend.
            Programs, rates, and other terms are subject to change without notice.
          </p>
        </div>

        {/* Licensing Information */}
        <div className="mt-6 text-sm text-gray-400 text-center md:text-left">
          <p>
            ARAMCO Mortgage, Inc. is an independent mortgage brokerage licensed in California (CA DRE),
            Arizona (AZ DIFI), and Texas (SML).
          </p>
          <p className="mt-2">
            Real Estate Broker, California Department of Real Estate: 01853626 NMLS#: 277316 |
            AZ DIFI#: MB-0951277 AZ DIFI#: MB-BR-1017156 / AZ DIFI#: MB-BR-1015046
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>©2023 ARAMCO Mortgage Inc. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">Terms of Use</a> / 
            <a href="#" className="hover:underline"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AramcoFooter;
