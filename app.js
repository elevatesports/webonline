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
    {id: 1, brand: "Butterfly", name: "TENERGY 05 TT Rubber", 
        price: "₹5’549", originalPrice: "₹10,100", 
        img: " https://image2url.com/r2/default/images/1774177748375-1d1576e7-6cec-4ba1-9739-fbf2d787d033.webp",
        description: "Tenergy 05 is the original rubber in the Tenergy series, designed for players who thrive on topspin-heavy offensive play. Featuring High Tension and Spring Sponge technologies, it allows for explosive spin and consistent power close to or away from the table.",
        specs: { "Type": "High Tension Pimple-In", "Technology": "High Tension, Spring Sponge", "Speed": "83", “Spin”: “76”, “Arc”: “79”, “Sponge Hardness”: “36”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}},
{

id: 2, brand: "Butterfly", name: "TENERGY 05 FX TT Rubber", 
        price: "₹5’249", originalPrice: "₹10,100", 
        img: "https://image2url.com/r2/default/images/1774178820648-4c1f5a96-4a5b-4593-84ee-9a8a601f9263.webp",
        description: " Tenergy FX produces a high level of control without losing high performance. Tenergy 05 FX combines High Tension technology with a version of Spring Sponge that produces a softer feeling. It is a result of extensive research, the name deriving from Code 05, being one of many experiments carried out by the Butterfly Research Centre. Tenergy 05 FX is the perfect answer for players who seek to play heavy topspin strokes, whilst maintaining control.",
        specs: { "Type": "High Tension Pimple-In", "Technology": "High Tension, Spring Sponge", "Speed": "81", “Spin”: “64”, “Arc”: “65”, “Sponge Hardness”: “32”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}},
 
{id: 3, brand: "Butterfly", name: "DIGNICS 09 C TT Rubber", 
        price: "₹6,449", originalPrice: "₹12,900", 
        img: "https://image2url.com/r2/default/images/1774760646496-bb17b93b-38d7-41c6-8210-fbe82010fbff.webp",
        description: " Compatible friction and a high level bounce is realised thanks to the synergy effect between the original top sheet and a rather hard Spring Sponge X, to bring out the features of a friction rubber while upgrading the High Tension effect. The pimples code No. 209 delivers topspin and defensive play with high amount of spin as well as ease of over-the-table techniques and counter topspin. Dignics 09C, with the upgraded friction High Tension features, guides a player who expects the unique feeling of a friction rubber to new heights.",
        specs: { "Type": "High Friction High Tension Pimples-In ", "Technology": "High Tension, Spring SpongeX", "Speed": "79", “Spin”: “96”, “Arc”: “96”, “Sponge Hardness”: “44”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}},
{id: 4, brand: "Butterfly", name: "DIGNICS 05 TT Rubber", 
        price: "₹6,349", originalPrice: "₹12,599", 
        img: " https://image2url.com/r2/default/images/1774759354874-8f030ab2-2725-43e1-b6e6-f6a16a9da50c.webp",
        description: " Dignics guides your play to a more advanced level. The essence is the combination of Spring Sponge X, the advanced version of Spring Sponge which has more elasticity; the uniquely composed top sheet, with strengthened abrasion, proves great resistance on the surface, providing the feeling of holding the ball at impact. Adopting pimples code No. 05 recognised for its high spin performance, Dignics 05 is recommended for the player who seeks to generate a high level attacking play imparting powerful topspin, as well as counter topspin play both close to the table and at mid distance..",
        specs: { "Type": "High Tension Pimples-In,", "Technology": "High Tension, Spring SpongeX", "Speed": "86", “Spin”: “85”, “Arc”: “88”, “Sponge Hardness”: “40”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}},
{id: 5, brand: "Butterfly", name: "Glayzer 09C TT Rubber", 
        price: "₹3,749", originalPrice: "₹8,999", 
        img: " https://image2url.com/r2/default/images/1774761821421-e0b97df6-85c8-4965-a8f2-dde577922ff5.webp",
        description: " Grey Spring Sponge X is applied to Glayzer 09C. Strokes with a stable trajectory are made possible, while combining powerful heavy spin with ease of over-the-table techniques at a high level. It is thanks to the combination of a friction top sheet that provides the High Tension effect and Spring Sponge X with a hardness at 42 degrees. The rubber provides players of wider ranging standards the pleasure of executing top spin strokes with heavy spin, unique to a friction High Tension rubber, as well as decisive counter-attacking play on the table.",
        specs: { "Type": "High Tension High Friction Pimples-In,", "Technology": "High Tension, Spring SpongeX", "Speed": "75", “Spin”: “87”, “Arc”: “95”, “Sponge Hardness”: “42”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}},

{id: 6, brand: "Butterfly", name: "Glayzer TT Rubber", 
        price: "₹3,749", originalPrice: "₹8,999", 
        img: " https://image2url.com/r2/default/images/1774762548074-05816153-4054-4102-9e58-476740c2c03c.webp",
        description: " Grey Spring Sponge X is applied to Glayzer. Power, generated by spin, is brought to the stroke. Also, a stable trajectory is made possible thanks to the combination of a top sheet which possesses the ideal feeling of holding the ball, and the strengthened abrasion resistance of the surface adopting Spring Sponge X with a hardness at 38 degrees. Thus, this rubber provides players of wider ranging levels the joy to execute powerful top spin strokes from both forehand and backhand, focusing on spin and counter-attacking play.",
        specs: { "Type": "High Tension Pimples-In,", "Technology": "High Tension, Spring SpongeX", "Speed": "81", “Spin”: “83”, “Arc”: “82”, “Sponge Hardness”: “38”, “Sheet Color”: “Red, Black”, “Sponge Thickness”: “2.1”, “Country Of Origin”: “Japan”}}

];

// --- HELPER FUNCTION: Calculate Discount Percentage ---
function calculateDiscount(currentPriceStr, originalPriceStr) {
    // Strip out non-numeric characters (like ₹ and commas) to do math
    const current = parseInt(currentPriceStr.replace(/[^0-9]/g, ''), 10);
    const original = parseInt(originalPriceStr.replace(/[^0-9]/g, ''), 10);
    
    if (original > current) {
        const discount = Math.round(((original - current) / original) * 100);
        return `${discount}% OFF`;
    }
    return 'SALE'; // Fallback if math fails
}

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

            // Script URL dynamically connected to your Google Sheet
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

        // Generate Pricing HTML for the details page
        const priceHTML = product.originalPrice 
            ? `<div class="price-container" style="margin-bottom: 20px;">
                   <p class="product-info-price" style="margin: 0;">${product.price}</p>
                   <p class="price-original" style="font-size: 1.2rem;">${product.originalPrice}</p>
               </div>`
            : `<p class="product-info-price">${product.price}</p>`;

        // Generate dynamic badge text (e.g. "15% OFF")
        let badgeText = "SALE";
        if (product.originalPrice) {
            badgeText = calculateDiscount(product.price, product.originalPrice);
        }

        const badgeHTML = product.originalPrice ? `<span class="discount-badge" style="position: relative; top: 0; right: 0; display: inline-block; margin-bottom: 10px;">${badgeText}</span>` : '';


        const container = document.getElementById('product-details-container');
        container.innerHTML = `
            <div class="product-details-grid">
                <img src="${product.img}" alt="${product.name}" class="product-details-image">
                <div class="product-info">
                    ${badgeHTML}
                    <p class="product-info-brand">${product.brand}</p>
                    <h1 class="product-info-title">${product.name}</h1>
                    ${priceHTML}
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
            productsHTML += productsToShow.map(product => {
                // 1. Check if the product has a discount
                const hasDiscount = product.originalPrice ? true : false;
                
                // 2. Calculate dynamic badge text
                let badgeText = "SALE";
                if (hasDiscount) {
                    badgeText = calculateDiscount(product.price, product.originalPrice);
                }

                // 3. Generate the Badge HTML if discounted
                const badgeHTML = hasDiscount ? `<span class="discount-badge">${badgeText}</span>` : '';
                
                // 4. Generate the Pricing HTML (Strikethrough + New Price)
                const priceHTML = hasDiscount 
                    ? `<div class="price-container">
                           <p class="card-price">${product.price}</p>
                           <p class="price-original">${product.originalPrice}</p>
                       </div>`
                    : `<div class="price-container"><p class="card-price">${product.price}</p></div>`;

                // 5. Return the full card HTML
                return `
                    <article class="card">
                        ${badgeHTML}
                        <img src="${product.img}" alt="${product.name}" class="card-img" loading="lazy">
                        <div class="card-body">
                            <p style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${product.brand}</p>
                            <h3>${product.name}</h3>
                            ${priceHTML}
                            <button class="btn-primary" style="width: 100%; padding: 8px;" onclick="app.viewProduct(${product.id})">
                                View Details
                            </button>
                        </div>
                    </article>
                `;
            }).join('');
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
