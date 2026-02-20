
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Nafiul Alam. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
