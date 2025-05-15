import { MapPin, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#1a1a1a]">Get in Touch</h2>
        <p className="text-gray-600 mb-8">We’d love to hear from you — reach out or visit our studio.</p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890?text=Hi%20ShivStudio!%20I%20am%20interested%20in%20a%20photo%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition mb-8"
        >
          <PhoneCall size={18} /> Chat on WhatsApp
        </a>

        {/* Address with Icon */}
        <div className="flex justify-center items-center gap-2 mb-4 text-gray-700">
          <MapPin size={20} />
          <span>Our Location</span>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.7120275993275!2d76.84140397536697!3d30.585673774655543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbfe14f84a241%3A0x23362c1ab67aea18!2sSHIV%20STUDIO!5e0!3m2!1sen!2sca!4v1747277601363!5m2!1sen!2sca"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
