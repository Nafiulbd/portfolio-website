import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react';
import { content } from '../content';

const Testimonials = () => {
    // Placeholder videos - Replace 'videoId' with actual YouTube video IDs
    const videos = content.testimonials.items;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setIsPlaying(false);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[30%] h-[60%] bg-primary/20 rounded-full blur-[100px] opacity-70" />
                <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[30%] h-[60%] bg-secondary/20 rounded-full blur-[100px] opacity-70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">{content.testimonials.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {content.testimonials.subtitle}
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="aspect-video w-full bg-black/50 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-shadow duration-500 border border-white/10 relative group-video">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative"
                            >
                                {!isPlaying ? (
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="w-full h-full relative group cursor-pointer block"
                                        aria-label={`Play video testimonial from ${videos[currentIndex].client}`}
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${videos[currentIndex].id}/maxresdefault.jpg`}
                                            alt={`Video thumbnail for ${videos[currentIndex].client}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback if maxresdefault doesn't exist (some videos don't have it)
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://img.youtube.com/vi/${videos[currentIndex].id}/hqdefault.jpg`;
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" />
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=1`}
                                        title="Client Review"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-cover"
                                    ></iframe>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    {!isPlaying && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 z-10 group"
                                aria-label="Previous Review"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 z-10 group"
                                aria-label="Next Review"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </>
                    )}
                </div>

                {/* Client Details Overlay */}
                <div className="mt-8 text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-center mb-4">
                                <Quote className="w-8 h-8 text-primary opacity-50" />
                            </div>
                            <p className="text-xl md:text-2xl font-light italic text-gray-300 mb-4 max-w-3xl mx-auto">
                                "{videos[currentIndex].feedback}"
                            </p>
                            <h4 className="text-lg font-bold text-white">{videos[currentIndex].client}</h4>
                            <p className="text-sm text-primary">{videos[currentIndex].role}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {videos.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                                }`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
