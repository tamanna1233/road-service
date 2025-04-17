import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { client } from "../sanity"
import { useNavigate } from 'react-router-dom';
const Contact = () => {
const [form ,setFrom]=useState({
  name:"",
  email:"",
  phone:"",
  message:"",
})
  const[isSubmiting,setIsSubmiting]=useState(false)
const navigate=useNavigate()
const handleChange=(e)=>{
setFrom(()=>(({...form,[e.target.name]:e.target.value})))
}


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmiting(true);

  const contactDoc = {
    _type: 'contact',
    ...form,
    createdAt: new Date().toISOString(),
  };

  try {
    await client.create(contactDoc);
    setFrom({ name: '', email: '', phone: '', message: '' });
    navigate('/thankyou')
  } catch (err) {
    console.error('Sanity error:', err);
  } finally {
    setIsSubmiting(false);
  }
};
  return (
    <section name="contact" className="bg-gray-200 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto" />
        <h3 className="m-8">
        Get in touch with our logistics experts for all your transportation and fleet management needs.        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg text-black shadow-lg">
          <div className="bg-black rounded-t-lg text-yellow-400 p-8">
            <h1 className="text-3xl">Send Us a Message</h1>
            <h2 className="text-white">We'll get back to you within 24 hours.</h2>
          </div>
          <form  onSubmit={handleSubmit} className="flex flex-col gap-4 py-4 container px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Name*</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                value={form.phone}
                className="w-full p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 border outline-none"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message*</label>
              <textarea
                name="message"
                rows="5"
                required
                onChange={handleChange}
                value={form.message}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="consent" required className="mt-1" />
              <label htmlFor="consent" className="text-gray-700">
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition"
            >
             {isSubmiting?"sending...":"Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
         

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-xl font-bold mb-6 text-black">Contact Information</h1>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-black rounded-full p-2 text-white">📞</div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">General Phone</h2>
                  <p className="text-black">
                    <a href="tel:+91 8580466164" className="hover:text-black" aria-label='call us on +91 85804-66164'>+91 85804-66164</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black rounded-full p-2 text-white">✉️</div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">Email</h2>
                  <p className="text-black">
                    <a href="mailto:Rahulwalia@gmail.com" className="hover:text-black" aria-label='email us on Rahulwalia@gmail.com '>Rahulwalia@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black rounded-full p-2 text-white">🕒</div>
                <div className='flex flex-col justify-center gap-4 text-black'>
                  <h2 className="font-semibold  mb-1">Business Hours</h2>
                  
                <span>Monday - Friday: 8:00 AM - 6:00 PM</span>  
              
                 <span>Saturday:9:00 AM - 3:00 PM</span> 
                 <span>Sunday:Closed</span> 
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <span className='text-2xl font-bold py-4'>Connect With Us</span>
            <div>
              <ul className='flex items-center gap-4 py-4'>
                <li className=' p-4 rounded-full bg-black text-yellow-300'><FaSquareXTwitter size={30}/></li>
                <li className=' p-4 rounded-full bg-black text-yellow-300'><FaLinkedin size={30}/></li>
                <li className=' p-4 rounded-full bg-black text-yellow-300'><FaWhatsapp size={30}/></li>

              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16  rounded-lg shadow bg-white p-6 col-span-full">
          <h3 className="text-2xl font-bold mb-6 text-center text-black">Visit Our Headquarters</h3>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="HeadQuarters Map"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.639817462499!2d76.72315147538758!3d30.704648588445684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed864c4dffff%3A0xe1b605ac27e4dc2d!2sMohali%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1695123456789"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mohali,Punjab,India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black hover:text-[#E74C3C] transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                  clipRule="evenodd"
                />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
