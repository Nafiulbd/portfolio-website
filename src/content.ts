import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => React.createElement('svg', { ...props, role: "img", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" }));

export const content = {
    hero: {
        badge: "Available for Freelance Projects",
        headline: {
            line1: "Crafting Digital",
            line2: "Masterpieces"
        },
        description: "Based in Bangladesh, I specialize in UI/UX Design, Web Development, and Digital Marketing. Transforming ideas into exceptional digital experiences.",
        cta: {
            primary: "Start Project",
            secondary: "View Services"
        }
    },
    about: {
        title: {
            prefix: "About",
            highlight: "Me"
        },
        profileImage: {
            src: "/profile.png",
            fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
        },
        bio: [
            "Hi, I'm MD Nafiul Alam, a passionate UI/UX Designer, Web Developer, and Digital Marketing Specialist. With a keen eye for detail and a drive for perfection, I craft digital experiences that solve real-world problems. My expertise spans across UI/UX research, high-fidelity prototyping, mobile app design, and creating scalable design systems.",
            "Backed by a dedicated agency team, we deliver comprehensive digital solutions. Whether you need an SEO-optimized website, custom software development, engaging video ad promotions, or complete Facebook and YouTube channel management, we are here to elevate your brand's digital presence and drive growth."
        ],
        skills: [
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Figma & Adobe XD',
            'React & Next.js',
            'Tailwind CSS',
            'Node.js & Express',
            'SEO Optimization',
            'Digital Strategy',
        ]
    },
    testimonials: {
        title: "What Clients Say",
        subtitle: "Hear directly from satisfied clients about their experience working with us.",
        items: [
            {
                id: 'zXbIUGWX_3U',
                client: 'Satisfied Client',
                role: 'Business Owner',
                feedback: 'Nafiul transformed our digital presence completely. Highly recommended!',
            },
            {
                id: 'LXb3EKWsInQ',
                client: 'John Smith',
                role: 'Founder, Creative Agency',
                feedback: 'The attention to detail and creative direction was outstanding.',
            },
            {
                id: 'jNQXAC9IVRw',
                client: 'Sarah Wilson',
                role: 'Marketing Director',
                feedback: 'Our SEO rankings skyrocketed after the optimization. Great work!',
            },
        ]
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Ready to start your next project? Let's discuss how we can bring your vision to life.",
        info: {
            email: {
                label: "Email Me",
                value: "designpixperfect@gmail.com",
                href: "mailto:designpixperfect@gmail.com",
                Icon: Mail
            },
            phone: {
                label: "Call Me",
                value: "+880 1634 480 220",
                href: "tel:+8801634480220",
                Icon: Phone
            },
            location: {
                label: "Location",
                value: "Bogura, Bangladesh",
                Icon: MapPin
            }
        },
        socials: [
            { Icon: Facebook, link: "https://www.facebook.com/PixPerfectDesign", label: "Facebook" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/thenafiul/", label: "LinkedIn" },
            { Icon: Instagram, link: "https://www.instagram.com/pixperfectdesign/", label: "Instagram" },
            { Icon: Youtube, link: "https://www.youtube.com/@PixperfectDesign", label: "YouTube" },
            { Icon: BehanceIcon, link: "https://www.behance.net/designernafiul", label: "Behance" }
        ],
        form: {
            placeholders: {
                name: "John Doe",
                email: "john@example.com",
                subject: "Project Discussion",
                message: "Tell me about your project..."
            }
        }
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Here are some of the most common questions I get from clients.",
        items: [
            {
                question: "Do you design for music, betting, or gambling-related platforms?",
                answer: "No. I do not provide UI/UX design services for betting, gambling, or similar platforms. My focus is on ethical, user-centered products that provide real value to users."
            },
            {
                question: "Do you work on projects related to drugs or illegal substances?",
                answer: "No. I do not accept projects that promote drugs, illegal substances, or related activities."
            },
            {
                question: "Do you design for adult or sexually explicit content?",
                answer: "No. I do not design interfaces that promote sexual activity, adult content, or explicit material."
            },
            {
                question: "Do you design movie or entertainment promotion websites?",
                answer: "I do not work on projects that promote movies or entertainment content tied to restricted, adult, or unethical themes. However, general business, SaaS, startup, and product-based platforms are welcome."
            },
            {
                question: "What type of projects do you accept?",
                answer: "I specialize in UI/UX design for websites and mobile apps such as SaaS platforms, startups, business websites, dashboards, landing pages, and productivity-focused digital products & SEO services to grow your brand"
            },
            {
                question: "What if my project is not listed here?",
                answer: "Feel free to message me with your project details before placing an order. I’ll review the scope and let you know if it’s a good fit."
            }
        ]
    }
};
