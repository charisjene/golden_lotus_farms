import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronRight, Package, Truck, Shield, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Ayam Cemani Hatching Eggs",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop",
    description: "Rare Indonesian breed, solid black feathers, meat, and bones",
    quantity: 6,
    available: true
  },
  {
    id: 2,
    name: "Silkie Bantam Hatching Eggs",
    price: 45.99,
    image: '/assets/photos/silkieBantam.png',
    description: "Fluffy, gentle birds with black skin and blue earlobes",
    quantity: 8,
    available: true
  },
  {
    id: 3,
    name: "Lavender Orpington Hatching Eggs",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&h=300&fit=crop",
    description: "Beautiful lavender-colored feathers, excellent layers",
    quantity: 6,
    available: true
  },
  {
    id: 4,
    name: "Swedish Blue Hatching Eggs",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=400&h=300&fit=crop",
    description: "Stunning blue plumage, cold-hardy and dual-purpose",
    quantity: 8,
    available: true
  },
  {
    id: 5,
    name: "Frizzle Cochin Hatching Eggs",
    price: 72.99,
    image: "/assets/photos/frizzleCochin.png",
    description: "Unique curled feathers, friendly temperament",
    quantity: 6,
    available: true
  },
  {
    id: 6,
    name: "Cream Legbar Hatching Eggs",
    price: 58.99,
    image: "/assets/photos/creamLegbar.png",
    description: "Auto-sexing breed that lays beautiful blue eggs",
    quantity: 8,
    available: true
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newCount) => {
    if (newCount === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, count: newCount } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    setShowCart(false);
    setCheckoutStep(1);
  };

  const completeOrder = () => {
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    setCart([]);
    setCurrentPage('home');
    setCheckoutStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
  };

  const styles = {
    nav: {
      background: '#78350f',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      padding: '0.5rem',
      transition: 'color 0.2s'
    },
    cartButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      position: 'relative'
    },
    cartBadge: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      background: '#ef4444',
      color: 'white',
      fontSize: '0.75rem',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    hero: {
      background: 'linear-gradient(to bottom right, #fef3c7, #fed7aa)',
      padding: '5rem 1rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '1rem'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: '#92400e',
      marginBottom: '2rem'
    },
    heroText: {
      fontSize: '1.125rem',
      color: '#b45309',
      marginBottom: '2rem',
      maxWidth: '42rem',
      margin: '0 auto 2rem'
    },
    button: {
      background: '#d97706',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'background 0.2s'
    },
    section: {
      padding: '4rem 1rem',
      background: 'white'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#78350f',
      marginBottom: '3rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    featureCard: {
      textAlign: 'center',
      padding: '1.5rem'
    },
    featureIcon: {
      background: '#fef3c7',
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem'
    },
    productCard: {
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s'
    },
    productImage: {
      width: '100%',
      height: '12rem',
      objectFit: 'cover'
    },
    productContent: {
      padding: '1.5rem'
    },
    productTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '0.5rem'
    },
    productDescription: {
      color: '#6b7280',
      marginBottom: '1rem',
      fontSize: '0.875rem'
    },
    productPrice: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    },
    price: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#d97706'
    },
    cartOverlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 50
    },
    cartPanel: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: '100%',
      maxWidth: '24rem',
      background: 'white',
      boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
      padding: '1.5rem',
      overflowY: 'auto'
    },
    cartHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem'
    },
    cartItem: {
      display: 'flex',
      gap: '1rem',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '1rem',
      marginBottom: '1rem'
    },
    cartItemImage: {
      width: '5rem',
      height: '5rem',
      objectFit: 'cover',
      borderRadius: '0.25rem'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem'
    },
    quantityButton: {
      background: '#e5e7eb',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer'
    },
    checkoutContainer: {
      padding: '3rem 1rem',
      background: '#f9fafb',
      minHeight: '100vh'
    },
    checkoutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      maxWidth: '64rem',
      margin: '0 auto'
    },
    formCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem'
    },
    input: {
      border: '1px solid #d1d5db',
      borderRadius: '0.25rem',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      width: '100%'
    },
    footer: {
      background: '#78350f',
      color: 'white',
      padding: '2rem 1rem',
      marginTop: '3rem',
      textAlign: 'center'
    }
  };

  const HomePage = () => (
    <>
      <div style={styles.hero}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={styles.heroTitle}>Golden Lotus Farms</h1>
           <img 
          src="/assets/photos/lotusBaby.png" 
          alt="Golden Lotus Farms" 
          style={{ 
            width: '300px', 
            maxHeight: '300px', 
            margin: '1rem auto 2rem',
            display: 'block',
            borderRadius: '50%'
          }} 
        />
          <p style={styles.heroSubtitle}>Premium Hatching Eggs from Exotic Chicken Breeds</p>
          <p style={styles.heroText}>
            We specialize in rare and exotic chicken breeds, shipping fresh, fertile hatching eggs nationwide with care and expertise.
          </p>
          <button
            style={styles.button}
            onClick={() => setCurrentPage('products')}
            onMouseOver={(e) => e.target.style.background = '#b45309'}
            onMouseOut={(e) => e.target.style.background = '#d97706'}
          >
            Shop Our Collection <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>Why Choose Golden Lotus Farms?</h2>
          <div style={styles.grid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Package style={{ color: '#d97706' }} size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#78350f' }}>Expert Packaging</h3>
              <p style={{ color: '#6b7280' }}>Our eggs are carefully packaged with premium materials to ensure safe delivery</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Truck style={{ color: '#d97706' }} size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#78350f' }}>Nationwide Shipping</h3>
              <p style={{ color: '#6b7280' }}>Fast, reliable shipping to all 50 states with tracking included</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Shield style={{ color: '#d97706' }} size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#78350f' }}>Fertility Guarantee</h3>
              <p style={{ color: '#6b7280' }}>We guarantee the fertility and quality of every egg we ship</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '4rem 1rem', background: '#fef3c7' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1.5rem' }}>Start Your Exotic Flock Today</h2>
          <p style={{ fontSize: '1.125rem', color: '#92400e', marginBottom: '2rem' }}>
            Browse our selection of rare and beautiful chicken breeds. Each dozen eggs is collected fresh, carefully inspected, and shipped with detailed incubation instructions.
          </p>
          <button
            style={styles.button}
            onClick={() => setCurrentPage('products')}
            onMouseOver={(e) => e.target.style.background = '#b45309'}
            onMouseOut={(e) => e.target.style.background = '#d97706'}
          >
            View All Products
          </button>
        </div>
      </div>
    </>
  );

  const ProductsPage = () => (
    <div style={styles.section}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '2rem', textAlign: 'center' }}>Our Hatching Eggs</h1>
        <div style={styles.grid}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <div style={styles.productContent}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
                <div style={styles.productPrice}>
                  <span style={styles.price}>${product.price}</span>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>{product.quantity} eggs</span>
                </div>
                <button
                  style={{ ...styles.button, width: '100%', justifyContent: 'center' }}
                  onClick={() => addToCart(product)}
                  onMouseOver={(e) => e.target.style.background = '#b45309'}
                  onMouseOut={(e) => e.target.style.background = '#d97706'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CheckoutPage = () => (
    <div style={styles.checkoutContainer}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '2rem' }}>Checkout</h1>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem', background: checkoutStep >= 1 ? '#d97706' : '#e5e7eb', color: checkoutStep >= 1 ? 'white' : '#6b7280' }}>
            1. Shipping
          </div>
          <div style={{ flex: 1, padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem', background: checkoutStep >= 2 ? '#d97706' : '#e5e7eb', color: checkoutStep >= 2 ? 'white' : '#6b7280' }}>
            2. Payment
          </div>
          <div style={{ flex: 1, padding: '0.5rem', textAlign: 'center', borderRadius: '0.25rem', background: checkoutStep >= 3 ? '#d97706' : '#e5e7eb', color: checkoutStep >= 3 ? 'white' : '#6b7280' }}>
            3. Review
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            {checkoutStep === 1 && (
              <div style={styles.formCard}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1.5rem' }}>Shipping Information</h2>
                <div style={styles.formGrid}>
                  <input style={styles.input} type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                  <input style={styles.input} type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                  <input style={{ ...styles.input, gridColumn: '1 / -1' }} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                  <input style={{ ...styles.input, gridColumn: '1 / -1' }} type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                  <input style={{ ...styles.input, gridColumn: '1 / -1' }} type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleInputChange} />
                  <input style={styles.input} type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
                  <input style={styles.input} type="text" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} />
                  <input style={styles.input} type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleInputChange} />
                </div>
                <button
                  style={{ ...styles.button, width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
                  onClick={() => setCheckoutStep(2)}
                  onMouseOver={(e) => e.target.style.background = '#b45309'}
                  onMouseOut={(e) => e.target.style.background = '#d97706'}
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {checkoutStep === 2 && (
              <div style={styles.formCard}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1.5rem' }}>Payment Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input style={styles.input} type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleInputChange} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input style={styles.input} type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleInputChange} />
                    <input style={styles.input} type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleInputChange} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <button
                    style={{ flex: 1, padding: '0.75rem', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600' }}
                    onClick={() => setCheckoutStep(1)}
                  >
                    Back
                  </button>
                  <button
                    style={{ ...styles.button, flex: 1, justifyContent: 'center' }}
                    onClick={() => setCheckoutStep(3)}
                    onMouseOver={(e) => e.target.style.background = '#b45309'}
                    onMouseOut={(e) => e.target.style.background = '#d97706'}
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 3 && (
              <div style={styles.formCard}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1.5rem' }}>Review Your Order</h2>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Shipping To:</h3>
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.address}</p>
                  <p>{formData.city}, {formData.state} {formData.zip}</p>
                  <p>{formData.email}</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Payment Method:</h3>
                  <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    style={{ flex: 1, padding: '0.75rem', background: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600' }}
                    onClick={() => setCheckoutStep(2)}
                  >
                    Back
                  </button>
                  <button
                    style={{ flex: 1, padding: '0.75rem', background: '#16a34a', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '600' }}
                    onClick={completeOrder}
                    onMouseOver={(e) => e.target.style.background = '#15803d'}
                    onMouseOut={(e) => e.target.style.background = '#16a34a'}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div style={{ ...styles.formCard, position: 'sticky', top: '5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1rem' }}>Order Summary</h3>
              <div style={{ marginBottom: '1rem' }}>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <span>{item.name} x{item.count}</span>
                    <span>${(item.price * item.count).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Shipping:</span>
                  <span>$15.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.125rem', borderTop: '1px solid #e5e7eb', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                  <span>Total:</span>
                  <span style={{ color: '#d97706' }}>${(cartTotal + 15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div style={styles.section}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '1.5rem' }}>About Golden Lotus Farms</h1>
        <div style={styles.formCard}>
          <img 
  src="/assets/photos/farmPhoto.png" 
  alt="Our Farm" 
  style={{ 
    width: '100%', 
    maxWidth: '800px',
    height: 'auto',
    margin: '1rem auto 2rem',
    display: 'block',
    borderRadius: '0.75rem',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
  }} 
/>
          <p style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>
            Golden Lotus Farms is a family-owned business dedicated to breeding and raising exceptional exotic chicken breeds. Founded in 2015, we've built a reputation for providing the highest quality hatching eggs to enthusiasts and breeders across the United States.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Our farm is located in the heart of the countryside, where our chickens roam freely in spacious, natural environments. We believe that healthy, happy birds produce the best eggs, which is why we focus on ethical breeding practices and superior care.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Every egg we ship is carefully collected, cleaned, and inspected to ensure the highest fertility rates. We package each order with premium materials and ship via expedited methods to guarantee your eggs arrive in perfect condition.
          </p>
          <p>
            Whether you're starting your first exotic flock or adding to an established collection, Golden Lotus Farms is here to help you succeed. Thank you for choosing us as your trusted source for premium hatching eggs.
          </p>
          <div style={{ marginTop: '1rem' }}>
  <a 
    href="https://www.facebook.com/golden.lotus.farms" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      color: '#78350f',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem'
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    Visit our Facebook page
  </a>
</div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.navContent}>
            <div style={styles.logo} onClick={() => setCurrentPage('home')}>
              <img src='lotusLogo.png' style={{ fill: '#fbbf24', color: '#fbbf24', width: '50px' }} />
              <span>Golden Lotus Farms</span>
            </div>
            
            <div style={{ ...styles.navLinks, '@media (max-width: 768px)': { display: mobileMenuOpen ? 'flex' : 'none' } }}>
              <button style={styles.navButton} onClick={() => setCurrentPage('home')} onMouseOver={(e) => e.target.style.color = '#fbbf24'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</button>
              <button style={styles.navButton} onClick={() => setCurrentPage('products')} onMouseOver={(e) => e.target.style.color = '#fbbf24'} onMouseOut={(e) => e.target.style.color = 'white'}>Products</button>
              <button style={styles.navButton} onClick={() => setCurrentPage('about')} onMouseOver={(e) => e.target.style.color = '#fbbf24'} onMouseOut={(e) => e.target.style.color = 'white'}>About</button>
              <button style={styles.cartButton} onClick={() => setShowCart(!showCart)}>
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span style={styles.cartBadge}>{cartCount}</span>
                )}
              </button>
              <a 
  href="https://www.facebook.com/golden.lotus.farms" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ 
    color: 'white', 
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem'
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
</a>
            </div>

            <button style={{ ...styles.navButton, display: 'none' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {showCart && (
        <div style={styles.cartOverlay} onClick={() => setShowCart(false)}>
          <div style={styles.cartPanel} onClick={(e) => e.stopPropagation()}>
            <div style={styles.cartHeader}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f' }}>Shopping Cart</h2>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setShowCart(false)}>
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#9ca3af', padding: '2rem' }}>Your cart is empty</p>
            ) : (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  {cart.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                      <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: '600', fontSize: '0.875rem' }}>{item.name}</h3>
                        <p style={{ color: '#d97706', fontWeight: 'bold' }}>${item.price}</p>
                        <div style={styles.quantityControls}>
                          <button style={styles.quantityButton} onClick={() => updateQuantity(item.id, item.count - 1)}>-</button>
                          <span>{item.count}</span>
                          <button style={styles.quantityButton} onClick={() => updateQuantity(item.id, item.count + 1)}>+</button>
                          <button
                            style={{ marginLeft: 'auto', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Subtotal:</span>
                    <span style={{ fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#6b7280' }}>
                    <span>Shipping:</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <button
                  style={{ ...styles.button, width: '100%', justifyContent: 'center' }}
                  onClick={handleCheckout}
                  onMouseOver={(e) => e.target.style.background = '#b45309'}
                  onMouseOut={(e) => e.target.style.background = '#d97706'}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'checkout' && <CheckoutPage />}
      {currentPage === 'about' && <AboutPage />}

    <footer style={styles.footer}>
  <p style={{ marginBottom: '0.5rem' }}>&copy; 2025 Golden Lotus Farms. All rights reserved.</p>
  <p style={{ fontSize: '0.875rem', color: '#fbbf24', marginBottom: '1rem' }}>Shipping nationwide with care since 2015</p>
  <a 
    href="https://www.facebook.com/golden.lotus.farms" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      color: 'white',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '0.5rem',
      transition: 'background 0.2s'
    }}
    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
    onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
    Follow us on Facebook
  </a>
</footer>
    </div>
  );
}

export default App;