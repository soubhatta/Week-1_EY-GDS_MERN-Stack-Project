import { useState } from "react";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Smartphone", price: 300, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: 900, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 50, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smartwatch", price: 200, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Camera", price: 600, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Tablet", price: 250, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Gaming Console", price: 500, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Refrigerator", price: 800, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Washing Machine", price: 700, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Air Conditioner", price: 1200, image: "https://via.placeholder.com/150" },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <header className="header">
        <h1>My E-Commerce Site</h1>
      </header>

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#products">Products</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          <li className="nav-item">
            <a href="#cart" className="cart">
              Cart <span className="cart-count">({cartCount})</span>
            </a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
  <div className="contact-us">
    <h2>Contact Us</h2>
    <p>If you have any questions, feel free to reach out to us!</p>

    <div className="contact-details">
      <p><strong>Email:</strong> contact@ecommerce.com</p>
      <p><strong>Phone:</strong> +1 234 567 890</p>
      <p><strong>Address:</strong> 123 E-Commerce St, City, Country</p>
    </div>

    <form className="contact-form">
      <h3>Send us a Message</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</footer>

    </>
  );
}

export default App;
