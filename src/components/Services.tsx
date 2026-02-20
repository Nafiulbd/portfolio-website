import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette, Globe, Smartphone, Search,
    Layers, Layout, Code, MonitorPlay,
    Facebook, Instagram, Youtube, TrendingUp,
    MessageSquare, Briefcase, PenTool, Rocket,
    LayoutTemplate, Users, User
} from 'lucide-react';

const Services = () => {
    const myServices = [
        { title: "UX Research", icon: <Search className="w-6 h-6 text-primary" /> },
        { title: "High-fidelity designs", icon: <Palette className="w-6 h-6 text-secondary" /> },
        { title: "Graphic Assets", icon: <LayoutTemplate className="w-6 h-6 text-accent" /> },
        { title: "Design Style Guide", icon: <Layout className="w-6 h-6 text-green-400" /> },
        { title: "Design System", icon: <Layers className="w-6 h-6 text-yellow-400" /> },
        { title: "Prototype", icon: <Smartphone className="w-6 h-6 text-purple-400" /> },
        { title: "Developer Handoff", icon: <Code className="w-6 h-6 text-pink-400" /> }
    ];

    const teamServices = [
        { title: "Video Promotion Ad", desc: "Best for social media", icon: <MonitorPlay className="w-8 h-8 text-red-500" /> },
        { title: "Facebook Page Setup", desc: "Professional page structure", icon: <Facebook className="w-8 h-8 text-blue-500" /> },
        { title: "Facebook Page Automation", desc: "Automated setup & replies", icon: <MessageSquare className="w-8 h-8 text-blue-400" /> },
        { title: "Facebook Marketing", desc: "Boosting & targeted runs", icon: <TrendingUp className="w-8 h-8 text-indigo-400" /> },
        { title: "Instagram Setup", desc: "Page management & growth", icon: <Instagram className="w-8 h-8 text-pink-500" /> },
        { title: "YouTube Channel & SEO", desc: "Setup & search optimization", icon: <Youtube className="w-8 h-8 text-red-600" /> },
        { title: "Website/App Design", desc: "Comprehensive UI/UX", icon: <PenTool className="w-8 h-8 text-primary" /> },
        { title: "Website Development", desc: "Full software implementation", icon: <Globe className="w-8 h-8 text-secondary" /> },
        { title: "SEO Services", desc: "Grow brand/company/website", icon: <Search className="w-8 h-8 text-green-400" /> },
        { title: "Logo & Branding", desc: "Brand identity & guidelines", icon: <Briefcase className="w-8 h-8 text-yellow-500" /> },
        { title: "Graphic Design", desc: "Custom brand/company assets", icon: <Palette className="w-8 h-8 text-accent" /> }
    ];

    return (
        <section id="services" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- My Services Segment --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 text-primary">
                        <User className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">My Services</h2>
                    <p className="text-xl text-primary font-semibold mb-2">
                        Website UI/UX • Web App UI/UX • Mobile App UI/UX
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Dedicated, pixel-perfect design solutions carefully crafted by me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
                    {myServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center space-x-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="p-2 bg-black/20 rounded-lg group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors text-sm sm:text-base">
                                {service.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* --- Team's Services Segment --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-secondary/10 text-secondary">
                        <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Team's Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive end-to-end digital solutions provided by our experienced agency team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-6 rounded-2xl bg-white/5 border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-secondary/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-inner">
                                    {React.cloneElement(service.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-7 h-7 transition-colors duration-300 group-hover:text-white" })}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Call to Action --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-20"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-8 py-4 btn-gradient rounded-full shadow-lg flex items-center justify-center gap-2 group relative overflow-hidden text-white font-bold text-lg"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Call
                            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
