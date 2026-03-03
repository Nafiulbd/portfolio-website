import { content } from '../content';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-gray-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <img
                                    src={content.about.profileImage.src}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = content.about.profileImage.fallback;
                                    }}
                                    alt="Profile"
                                    className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {content.about.title.prefix} <span className="text-primary">{content.about.title.highlight}</span>
                        </h2>
                        {content.about.bio.map((paragraph, index) => (
                            <p key={index} className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.about.skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    <span className="text-gray-300">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
