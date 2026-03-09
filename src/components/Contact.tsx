import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { content } from '../content';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaoWBLU1025muPz5eZe4VxePBziFlWcdIhXcCDrsvsXhV_UNExPCFiP0MaziG3sSpn/exec';

            // Convert JSON data to URL Encoded Form Data to bypass CORS preflight
            const urlEncodedData = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                urlEncodedData.append(key, value);
            });

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData.toString()
            });

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.contact.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {content.contact.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{content.contact.info.email.label}</p>
                                        <a href={content.contact.info.email.href} className="text-white hover:text-primary transition-colors">{content.contact.info.email.value}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{content.contact.info.phone.label}</p>
                                        <a href={content.contact.info.phone.href} className="text-white hover:text-primary transition-colors">{content.contact.info.phone.value}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{content.contact.info.location.label}</p>
                                        <p className="text-white">{content.contact.info.location.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-4">
                            {content.contact.socials.map(({ Icon, link }, idx) => (
                                <a
                                    key={idx}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-gray-600"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none placeholder:text-gray-600"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 group relative overflow-hidden text-white font-bold text-lg transition-all ${status === 'success' ? 'bg-green-500 hover:bg-green-600' :
                                    status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                                        'btn-gradient'
                                    } ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {status === 'submitting' ? 'Sending...' :
                                        status === 'success' ? 'Message Sent!' :
                                            status === 'error' ? 'Error Sending' :
                                                'Send Message'}

                                    {status === 'idle' && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    {status === 'success' && <CheckCircle2 className="w-5 h-5" />}
                                    {status === 'error' && <AlertCircle className="w-5 h-5" />}
                                </span>
                                {status === 'idle' && (
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default Contact;
