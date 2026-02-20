import { motion } from 'framer-motion';

const BackgroundGlow = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            {/* Top Left Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/30 rounded-full blur-[100px]"
            />

            {/* Bottom Right Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px]"
            />

            {/* Center Floating Orb */}
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[150px]"
            />

            {/* Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-12 h-12 border-2 border-primary/50 rounded-full opacity-60"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[15%] right-[20%] w-20 h-20 border-2 border-secondary/50 rotate-45 opacity-60"
                />
                <motion.div
                    animate={{ x: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-accent/60 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[30%] right-[10%] w-16 h-16 border-2 border-white/20 rounded-lg opacity-60"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-[40%] left-[5%] w-8 h-8 bg-primary/40 rounded-full"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[60%] right-[30%] w-32 h-32 border border-dashed border-white/20 rounded-full opacity-50"
                />
            </div>
        </div>
    );
};

export default BackgroundGlow;
