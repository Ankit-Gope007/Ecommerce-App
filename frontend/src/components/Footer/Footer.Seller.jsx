import React from "react";

const S_Footer = () => {
    return (
        <footer className="relative w-screen bg-gray-800 text-white mt-10 bottom-0">
            <div className="container mx-auto py-6 px-4 text-center">
                <p>© 2024 ShopEase. All rights reserved.</p>
                <nav className="space-x-4 mt-2">
                    <a href="/help" className="hover:text-blue-400">
                        Help Center
                    </a>
                    <a href="/terms" className="hover:text-blue-400">
                        Terms of Service
                    </a>
                    <a href="/privacy" className="hover:text-blue-400">
                        Privacy Policy
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default S_Footer;