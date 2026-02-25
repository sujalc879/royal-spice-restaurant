import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Authentic Indian & Chinese Flavors at Jay Malhar Dhaba
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Serving Ghansoli Gaon with fresh spices, rich taste & warm hospitality.
        </motion.p>

        <motion.div id="viewMenu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="tel:9224768068" className="btn btn-primary">Order Now</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;