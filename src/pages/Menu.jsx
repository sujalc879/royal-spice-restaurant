import { motion } from "framer-motion";

const menuData = {
  veg: [
    {
      category: "Veg Starters",
      items: [
        { name: "Veg Crispy", price: "₹90 / ₹100" },
        { name: "Veg 65", price: "₹100 / ₹180" },
        { name: "Veg Manchurian Dry", price: "₹80 / ₹150" },
        { name: "Paneer Chilly Dry", price: "₹110 / ₹200" },
      ],
    },
    {
      category: "Veg Soup",
      items: [
        { name: "Veg Manchow Soup", price: "₹90 / ₹130" },
        { name: "Veg Hot & Sour Soup", price: "₹50 / ₹80" },
      ],
    },
    {
      category: "Veg Rice",
      items: [
        { name: "Veg Fried Rice", price: "₹60 / ₹100" },
        { name: "Veg Schezwan Rice", price: "₹70 / ₹110" },
        { name: "Veg Triple Rice", price: "₹90 / ₹150" },
      ],
    },
    {
      category: "Veg Noodles",
      items: [
        { name: "Veg Hakka Noodles", price: "₹80 / ₹100" },
        { name: "Veg Schezwan Noodles", price: "₹70 / ₹120" },
      ],
    },
  ],

  nonVeg: [
    {
      category: "Non-Veg Starters",
      items: [
        { name: "Chicken Chilly Dry", price: "₹90 / ₹170" },
        { name: "Chicken 65", price: "₹100 / ₹200" },
        { name: "Chicken Manchurian Dry", price: "₹80 / ₹150" },
        { name: "Chicken Lollipop", price: "₹90 / ₹160" },
      ],
    },
    {
      category: "Non-Veg Soup",
      items: [
        { name: "Chicken Manchow Soup", price: "₹80 / ₹100" },
        { name: "Chicken Hot & Sour Soup", price: "₹60 / ₹100" },
      ],
    },
    {
      category: "Non-Veg Rice",
      items: [
        { name: "Chicken Fried Rice", price: "₹80 / ₹110" },
        { name: "Chicken Schezwan Rice", price: "₹70 / ₹120" },
        { name: "Chicken Triple Rice", price: "₹90 / ₹150" },
        { name: "Egg Fried Rice", price: "₹60 / ₹100" },
      ],
    },
    {
      category: "Non-Veg Noodles",
      items: [
        { name: "Chicken Hakka Noodles", price: "₹70 / ₹130" },
        { name: "Chicken Schezwan Noodles", price: "₹80 / ₹130" },
        { name: "Egg Hakka Noodles", price: "₹70 / ₹130" },
      ],
    },
  ],
};

export default function Menu() {
  return (
    <section id="menu" className="menu-page">
      <div className="container">

        <motion.h1
          className="menu-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Full Menu
        </motion.h1>

        {/* VEG SECTION */}
        <motion.h2 
          className="veg-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          🟢 Veg Menu
        </motion.h2>

        {menuData.veg.map((section, index) => (
          <div key={index} className="menu-section">
            <h3 className="menu-category veg">{section.category}</h3>
            <div className="menu-grid">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="menu-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* NON VEG SECTION */}
        <motion.h2 
          className="nonveg-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          🔴 Non-Veg Menu
        </motion.h2>

        {menuData.nonVeg.map((section, index) => (
          <div key={index} className="menu-section">
            <h3 className="menu-category nonveg">{section.category}</h3>
            <div className="menu-grid">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="menu-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}