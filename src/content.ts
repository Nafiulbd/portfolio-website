import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
            { Icon: Youtube, link: "https://www.youtube.com/@PixperfectDesign", label: "YouTube" }
        ],
        form: {
            placeholders: {
                name: "John Doe",
                email: "john@example.com",
                subject: "Project Discussion",
                message: "Tell me about your project..."
            }
        }
    }
};
