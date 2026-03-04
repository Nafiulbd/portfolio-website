


const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Nafiul Alam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
