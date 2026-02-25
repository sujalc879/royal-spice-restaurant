import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-wrapper">

        {/* LEFT SIDE - CONTACT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Visit Jay Malhar Dhaba</h2>

          <div className="contact-item">
            <span>📍</span>
            <p>Shop No 1, Sitaram Nagar Road, Shanti Nagar, Talvali, Ghansoli Gaon, Ghansoli, Thane, Navi Mumbai, Maharashtra 400701</p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>9224768068</p>
          </div>

          <div className="contact-item">
            <span>🕒</span>
            <p>Daily: 11:30 AM – 12:00 AM</p>
          </div>

          <div className="contact-buttons">
            <a href="tel:9224768068" className="btn btn-primary">
              Call Now
            </a>

            <a
              href="https://wa.me/919224768068"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4542925304745!2d72.99773637549546!3d19.131581550224674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0ae192343c9%3A0xc6d1daa7aa45fadd!2sJay%20Malhar%20Dhaba!5e0!3m2!1sen!2sin!4v1772004662504!5m2!1sen!2sin" width="600" height="450" style={{border : "0px"}} loading="lazy"></iframe>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;