// --- STATE & DUMMY DATA ---
const dummyBrands = [
    { name: "Butterfly", logo: "🦋 Butterfly" },
    { name: "Stiga", logo: "⭐ Stiga" },
    { name: "DHS", logo: "🏓 DHS" },
    { name: "Tibhar", logo: "🔥 Tibhar" },
    { name: "Yasaka", logo: "🌟 Yasaka" },
    { name: "Donic", logo: "⚡ Donic" },
    { name: "Joola", logo: "🎯 Joola" },
    { name: "Xiom", logo: "🚀 Xiom" },
    { name: "Nittaku", logo: "🎾 Nittaku" },
    { name: "Andro", logo: "💥 Andro" },
    { name: "Victas", logo: "🎉 Victas" },
    { name: "Friendship", logo: "🤝 Friendship" },
    { name: "Double Fish", logo: "🐟 Double Fish" },
    { name: "Flick", logo: "🎬 Flick" },
    { name: "Loki", logo: "👹 Loki" },
    { name: "Spinfire", logo: "🔥 Spinfire" },
    { name: "Stag", logo: "🦌 Stag" }
];

const dummyProducts = [
 const products = [
  {
    id: 1,
    brand: "Butterfly",
    name: "Tenergy 05 Table Tennis Rubber",
    price: "₹5,549",
    originalPrice: "₹10,100",
    img: "https://image2url.com/r2/default/images/1774177748375-1d1576e7-6cec-4ba1-9739-fbf2d787d033.webp",
    description: "Tenergy 05 is the original rubber in the Tenergy series, designed for players who thrive on topspin-heavy offensive play. Featuring High Tension and Spring Sponge technologies, it allows for explosive spin and consistent power close to or away from the table.",
    specs: {
      "Type": "High Tension Pimples-In",
      "Technology": "High Tension, Spring Sponge",
      "Speed": "83",
      "Spin": "76",
      "Arc": "79",
      "Sponge Hardness": "36",
      "Sheet Color": "Red, Black",
      "Sponge Thickness": "2.1",
      "Country of Origin": "Japan"
    }
  },
  {
    id: 2,
    brand: "Butterfly",
    name: "Tenergy 05 FX Table Tennis Rubber",
    price: "₹5,249",
    originalPrice: "₹10,100",
    img: "https://image2url.com/r2/default/images/1774178820648-4c1f5a96-4a5b-4593-84ee-9a8a601f9263.webp",
    description: "Tenergy FX produces a high level of control without losing high performance. Tenergy 05 FX combines High Tension technology with a version of Spring Sponge that produces a softer feeling.",
    specs: {
      "Type": "High Tension Pimples-In",
      "Technology": "High Tension, Spring Sponge",
      "Speed": "81",
      "Spin": "64",
      "Arc": "65",
      "Sponge Hardness": "32",
      "Sheet Color": "Red, Black",
      "Sponge Thickness": "2.1",
      "Country of Origin": "Japan"
    }
  },
  {
    id: 3,
    brand: "Joola",
    name: "Elevate Pro Tournament Table",
    price: "₹35,000",
    originalPrice: "₹42,000",
    img: "https://images.unsplash.com/photo-1511516315533-356bc0a8504f?auto=format&fit=crop&q=80&w=600",
    description: "ITTF approved competition table with a 25mm thick top for the truest bounce. Folds easily for compact storage.",
    specs: {
      "Thickness": "25mm",
      "Weight": "115kg",
      "Certification": "ITTF Approved"
    }
  },
  {
    id: 4, // Changed ID to 4 to avoid duplication with Tenergy 05 FX
    brand: "Stiga",
    name: "SpinMaster Rubber (Red)",
    price: "₹2,100",
    originalPrice: null, // Added this so your discount logic doesn't break
    img: "https://images.unsplash.com/photo-1626245001392-7abac1f9f9bc?auto=format&fit=crop&q=80&w=600",
    description: "High-tension rubber providing maximum spin and dwell time. Perfect for modern topspin attackers.",
    specs: {
      "Sponge Hardness": "Medium-Hard",
      "Thickness": "2.1mm",
      "Type": "Inverted"
    }
  }
];
]
// --- CORE APPLICATION LOGIC ---
const app = {
    activeBrandFilter: null,

    navigate: function(pageId) {
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const target = document.getElementById(pageId);
        if(target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const navLinks = document.querySelector('.nav-links');
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        if(pageId === 'products' && this.activeBrandFilter === null) {
            this.renderProducts();
        }
    },

    filterByBrand: function(brandName) {
        this.activeBrandFilter = brandName;
        this.navigate('products');
        this.renderProducts();
    },

    clearFilter: function() {
        this.activeBrandFilter = null;
        this.renderProducts();
    },

    // --- NEW MODAL & LEAD GEN LOGIC ---
    showPurchaseModal: function(productId) {
        const product = dummyProducts.find(p => p.id === productId);
        if(product) {
            document.getElementById('modal-product-name').textContent = product.name;
            document.getElementById('purchase-modal').classList.add('active');
            
            // Dynamically update the modal's contact button to pass the product name
            const modalFooter = document.querySelector('.modal-footer');
            if(modalFooter) {
                modalFooter.innerHTML = `
                    <button class="btn-primary" style="width: 100%;" onclick="app.goToContact('${product.name}')">
                        Go to Contact Form
                    </button>
                `;
            }
        }
    },

    closeModal: function() {
        document.getElementById('purchase-modal').classList.remove('active');
    },

    // Closes modal, goes to contact page, and pre-fills the message!
    goToContact: function(productName) {
        this.closeModal();
        this.navigate('contact');
        
        const messageBox = document.querySelector('.contact-form textarea');
        if(messageBox) {
            messageBox.value = `Hi ElevateSports team,\n\nI am interested in purchasing the ${productName}. Could you please let me know how I can proceed with the payment and delivery?\n\nThank you.`;
            // Highlight the text box so the user knows it changed
            messageBox.focus(); 
        }
    },

   // --- CONTACT FORM GOOGLE SHEETS INTEGRATION ---
    setupContactForm: function() {
        const form = document.getElementById('elevate-contact-form');
        if(!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page reload
            
            const btn = document.getElementById('submit-btn');
            const originalText = btn ? btn.textContent : 'Send Message';
            
            // Visual feedback for the user
            if(btn) {
                btn.textContent = 'Sending...';
                btn.disabled = true;
                btn.style.opacity = '0.7';
            }

            // *** PASTE YOUR GOOGLE SCRIPT WEB APP URL BELOW ***
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzAOL7Tc9kNqaIMeAwr0G9eQvyDceOKiLpUtWaV0-mAApWopEuAQYwQK2zuINfqWDRQ/exec'; 
            
            const formData = new FormData(form);

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    alert('Success! Your message has been sent directly to our team. We will be in touch shortly.');
                    form.reset(); // Clear the form
                    
                    // Reset button state
                    if(btn) {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.opacity = '1';
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('Oops! Something went wrong. Please email us directly at support@elevatesports.in');
                    
                    // Reset button state
                    if(btn) {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.opacity = '1';
                    }
                });
        });
    },

    // --- PRODUCT DETAILS RENDERING ---
    viewProduct: function(productId) {
        const product = dummyProducts.find(p => p.id === productId);
        
        if (!product) {
            alert("Product not found!");
            return;
        }

        let specsHTML = '';
        if (product.specs) {
            specsHTML = Object.entries(product.specs).map(([key, value]) => `
                <li><strong>${key}</strong> <span>${value}</span></li>
            `).join('');
        }

        const container = document.getElementById('product-details-container');
        container.innerHTML = `
            <div class="product-details-grid">
                <img src="${product.img}" alt="${product.name}" class="product-details-image">
                <div class="product-info">
                    <p class="product-info-brand">${product.brand}</p>
                    <h1 class="product-info-title">${product.name}</h1>
                    <p class="product-info-price">${product.price}</p>
                    <p class="product-info-desc">${product.description}</p>
                    
                    <ul class="product-specs">
                        ${specsHTML}
                    </ul>

                    <button class="btn-primary" style="width: 100%; font-size: 1.2rem; padding: 15px;" onclick="app.showPurchaseModal(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        this.navigate('product-details');
    },

    // --- MAIN RENDER LOGIC ---
    renderProducts: function() {
        const grid = document.getElementById('products-grid');
        
        let productsToShow = dummyProducts;
        if (this.activeBrandFilter) {
            productsToShow = dummyProducts.filter(product => product.brand === this.activeBrandFilter);
        }

        let productsHTML = '';
        
        if (this.activeBrandFilter) {
            productsHTML += `
                <div style="grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: var(--surface); padding: 15px; border-radius: 8px;">
                    <p style="margin: 0; font-weight: bold;">Showing products for: <span class="text-accent">${this.activeBrandFilter}</span></p>
                    <button class="btn-primary" onclick="app.clearFilter()" style="padding: 6px 15px; font-size: 0.9rem;">Show All Brands</button>
                </div>
            `;
        }

        if (productsToShow.length === 0) {
            productsHTML += `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                    <h3>No products found for ${this.activeBrandFilter}</h3>
                    <p>We are updating our inventory. Check back soon!</p>
                </div>
            `;
        } else {
            productsHTML += productsToShow.map(product => `
                <article class="card">
                    <img src="${product.img}" alt="${product.name}" class="card-img" loading="lazy">
                    <div class="card-body">
                        <p style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${product.brand}</p>
                        <h3>${product.name}</h3>
                        <p class="card-price">${product.price}</p>
                        <button class="btn-primary" style="width: 100%; padding: 8px;" onclick="app.viewProduct(${product.id})">
                            View Details
                        </button>
                    </div>
                </article>
            `).join('');
        }

        grid.innerHTML = productsHTML;
    },

    renderBrands: function() {
        const grid = document.getElementById('brands-grid');
        grid.innerHTML = dummyBrands.map(brand => `
            <div class="card" onclick="app.filterByBrand('${brand.name}')" style="display: flex; align-items: center; justify-content: center; height: 120px; font-size: 1.2rem; font-weight: bold; color: var(--text-muted); cursor: pointer;">
                ${brand.logo}
            </div>
        `).join('');
    },

    init: function() {
        this.renderProducts();
        this.renderBrands();
        this.setupContactForm(); // <-- Initializes the form tracking on page load
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
