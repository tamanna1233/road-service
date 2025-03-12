import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    {/* Helmet is used to define the document head metadata */}
<Helmet>
     <title>Logistics Company - Reliable & Fast Services</title>
     <meta name="description" content="We provide the best logistics services with reliability and efficiency." />
     <meta 
          name="keywords" 
          content="truck repair services, fleet maintenance, emergency roadside assistance, heavy-duty truck repair, commercial vehicle servicing, diesel engine diagnostics, mobile truck repair, semi-truck maintenance, transmission repair, best logistics company, truck towing, certified truck technicians, 24/7 truck repair, DOT inspections, fleet manager reviews, truck roadside assistance ratings, preventive truck maintenance, heavy truck breakdown service, logistics support for trucking companies" 
        />    
         <meta name="author" content="Truck and trailer repair" />
   </Helmet>
    <section name="#FAQ"  className="py-20 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#F39C12] text-gray-900 rounded-full text-sm font-semibold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold mb-4 text-white" >
            Common Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Find answers to the most frequently asked questions about our truck repair and roadside assistance services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2, // Stagger delay between items
                },
              },
            }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item bg-neutral-700 rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{once:false,amount:0.3}}
                >
                <button
                  onClick={() => toggleAnswer(index)}
                  className="faq-question w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {faq.question}
                  </span>
                  <svg
                    className={`faq-icon w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer px-6 pb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{once:false,amount:0.3}}
                  >
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    {faq.list && (
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        {faq.list.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{once:false,amount:0.3}}

                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div className='grid place-items-center py-12 rounded-2xl mx-auto  w-6/11 px-4 bg-neutral-700 mt-12'>
     <motion.h1 className='text-2xl text-yellow-500 font-bold'>Still Have Questions?</motion.h1>
     <motion.h2>Can't find the answer you're looking for? Our team is here to help with any specific questions about our services.</motion.h2>
     <motion.div className='flex gap-4 justify-center items-center mt-4'>

     <motion.button className='bg-black p-2 rounded-lg'>Contact Our Team</motion.button>
     <motion.button className='bg-red-700 p-2 rounded-lg'> Call Emergency Support</motion.button>
     </motion.div>

      </motion.div>
    </section></>
  );
};

const faqData = [
  {
    question: 'What types of trucks and commercial vehicles do you service?',
    answer: 'We service all types of commercial vehicles including:',
    list: [
      'Class 7-8 semi-trucks and tractor-trailers',
      'Medium-duty delivery trucks (Class 4-6)',
      'Box trucks and straight trucks',
      'Refrigerated trucks and reefer units',
      'Dump trucks and construction vehicles',
      'Utility trucks and service vehicles',
      'Diesel pickups and fleet vehicles',
    ],
  },
  {
    question: 'How quickly can you respond to an emergency breakdown?',
    answer: `Our average response time is 60 minutes or less in our primary service areas. Response times may vary depending on:`,
    list: [
      'Your location relative to our service centers',
      'Traffic and weather conditions',
      'Time of day and current service demand',
    ],
  },
  {
    question: 'What services can be performed roadside vs. at your facilities?',
    answer: (
      <div>
        <strong>Our roadside services include:</strong>
        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Tire changes and repairs
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Jump starts and battery replacements
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Fuel delivery and DEF refills
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Minor electrical repairs
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Air system repairs
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Basic engine diagnostics
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Minor mechanical repairs
          </motion.li>
        </ul>

        <strong>Services typically performed at our facilities:</strong>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Major engine repairs and overhauls
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Transmission rebuilds
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Complete electrical system diagnostics
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Extensive preventive maintenance
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            DOT inspections
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Frame and alignment repairs
          </motion.li>
          <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Major component replacements
          </motion.li>
        </ul>
      </div>
    ),
  },
  // More FAQ items can be added here
];

export default FAQ;
