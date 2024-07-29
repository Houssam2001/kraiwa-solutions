'use client'
import { AuroraBackground } from '@/components/ui/aurora-background';
import Title1 from '@/components/ui/title';
import React, { useState } from 'react';

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index:any) => {
        if (openQuestion === index) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(index);
        }
    };

    const questions = [
        {
            question: 'What services does Kraiwa Solutions offer?',
            answer: 'We offer a wide range of digital solutions, including web development, digital marketing, technology consulting, and custom software development.'
        },
        {
            question: 'How can I request a quote for my project?',
            answer: 'You can request a quote by filling out our contact form on the Contact Us page, emailing us directly, or calling our office. We will get back to you promptly to discuss your project details.'
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'We have experience working across various industries, including healthcare, finance, retail, education, and more. Our diverse expertise allows us to tailor our solutions to meet the specific needs of different sectors.'
        },
        {
            question: 'How long does it take to complete a project?',
            answer: 'The timeline for project completion depends on the scope and complexity of the project. We provide an estimated timeline during the initial consultation and keep you updated throughout the process.'
        },
        {
            question: 'Can you provide examples of your previous work?',
            answer: 'Yes, please visit our Portfolio section to see case studies and examples of projects we have completed for our clients.'
        },
        {
            question: 'Do you offer ongoing support and maintenance?',
            answer: 'Yes, we offer ongoing support and maintenance services to ensure your digital solutions remain up-to-date, secure, and functioning optimally.'
        },
        {
            question: 'How do you ensure the security of my data?',
            answer: 'We implement robust security measures, including encryption, regular security audits, and compliance with industry standards, to protect your data and ensure its confidentiality.'
        },
        {
            question: 'What sets Kraiwa Solutions apart from other digital agencies?',
            answer: 'Our commitment to personalized service, innovative solutions, and a results-driven approach sets us apart. We work closely with our clients to understand their unique needs and deliver tailored solutions that drive success.'
        },
        {
            question: 'How can I stay updated with the latest news and updates from Kraiwa Solutions?',
            answer: 'You can stay updated by subscribing to our newsletter, following us on social media, and regularly checking our blog for the latest industry insights and company news.'
        },
        {
            question: 'What is your pricing structure?',
            answer: 'Our pricing is project-based and depends on the scope and complexity of the work required. We provide transparent and competitive pricing, and detailed quotes during the consultation phase.'
        },
        {
            question: 'Can you help with digital marketing and SEO?',
            answer: 'Yes, we offer comprehensive digital marketing and SEO services to help you improve your online presence, drive traffic, and increase conversions.'
        },
        {
            question: 'How do I get started with Kraiwa Solutions?',
            answer: 'Getting started is easy! Simply contact us through our website, email, or phone, and we\'ll schedule a consultation to discuss your needs and how we can help.'
        }
    ];
    

    return (
        <section className="py-10 mt-10 sm:py-16 lg:py-24 z-20">
            <Title1 title='Explore Common Questions' />
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {questions.map((item, index) => (
                        <div key={index}
                            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button type="button" onClick={() => toggleQuestion(index)}
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === index ? 'transform rotate-0' : 'transform -rotate-180'}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div style={{ display: openQuestion === index ? 'block' : 'none' }} className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 text-base mt-9">
                    Still have questions?
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact our support</span>
                </p>
            </div>
        </section>
    );
};

export default Faq;
