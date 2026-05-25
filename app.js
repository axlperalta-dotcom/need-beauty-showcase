/* ==========================================================================
   NEED BEAUTY - INTERACTIVE ENGINE (2026 EDITION)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. HEADER NAV & SCROLL EFFECTS
       ========================================================================== */
    const header = document.querySelector('.main-header');
    const mobileMenuToggle = document.getElementById('btn-mobile-menu');
    const navLinks = document.getElementById('nav-links-menu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on any nav link (for smooth scroll anchors)
        const navItems = navLinks.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       2. HIGH-PERFORMANCE SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Unobserve once revealed to keep layout performant
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // Viewport
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       3. INTERACTIVE SKIN DIAGNOSTIC QUIZ (ZERO-PARTY DATA)
       ========================================================================== */
    const quizBox = document.getElementById('quiz-box');
    const startQuizBtn = document.getElementById('btn-start-quiz');

    // Quiz Questions Data Base
    const quizQuestions = [
        {
            id: 1,
            question: "¿Cómo describirías el estado actual de tu piel?",
            options: [
                { text: "Seca, opaca y con sensación de tirantez", type: "seca" },
                { text: "Mixta o grasa, con brillo en la zona T", type: "grasa" },
                { text: "Sensible, reactiva y con rojeces ocasionales", type: "sensible" }
            ]
        },
        {
            id: 2,
            question: "¿Cuál es tu mayor objetivo o preocupación cutánea?",
            options: [
                { text: "Aportar luminosidad y un efecto dewy natural", goal: "glow" },
                { text: "Restaurar la hidratación profunda y calmar la barrera", goal: "hydration" },
                { text: "Proteger contra el envejecimiento prematuro y rayos UV", goal: "protection" }
            ]
        }
    ];

    let currentStep = 0;
    let quizAnswers = { skin: "", goal: "" };

    if (startQuizBtn && quizBox) {
        startQuizBtn.addEventListener('click', () => {
            currentStep = 0;
            quizAnswers = { skin: "", goal: "" };
            renderQuizStep();
        });
    }

    function renderQuizStep() {
        const q = quizQuestions[currentStep];
        const progressPercent = ((currentStep + 1) / quizQuestions.length) * 100;
        
        let optionsHTML = q.options.map((opt, index) => `
            <button class="quiz-option-card" data-index="${index}">
                <span>${opt.text}</span>
                <span class="quiz-option-dot"></span>
            </button>
        `).join('');

        quizBox.innerHTML = `
            <div class="quiz-step">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <span class="quiz-tag">Paso ${currentStep + 1} de ${quizQuestions.length}</span>
                <h3 class="quiz-question">${q.question}</h3>
                <div class="quiz-options">
                    ${optionsHTML}
                </div>
            </div>
        `;

        // Listen for options selection
        const optionCards = quizBox.querySelectorAll('.quiz-option-card');
        optionCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove previous selected classes
                optionCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                
                const selectedOpt = q.options[card.dataset.index];
                
                if (currentStep === 0) {
                    quizAnswers.skin = selectedOpt.type;
                } else if (currentStep === 1) {
                    quizAnswers.goal = selectedOpt.goal;
                }

                // Proceed to next step with slight micro-delay for smooth feels
                setTimeout(() => {
                    currentStep++;
                    if (currentStep < quizQuestions.length) {
                        renderQuizStep();
                    } else {
                        renderQuizResult();
                    }
                }, 500);
            });
        });
    }

    function renderQuizResult() {
        let recommendedProduct = {
            id: "botanical-glow",
            name: "Botanical Glow Elixir",
            price: 980,
            img: "assets/images/product_campaign.png",
            description: "Tu piel seca se beneficiará de la rica barrera molecular botánica de nuestro aceite de nutrición celular stelar."
        };

        if (quizAnswers.goal === "hydration" || quizAnswers.skin === "sensible") {
            recommendedProduct = {
                id: "squalane-dew",
                name: "Squalane Dew Cream",
                price: 850,
                img: "assets/images/squalane_cream.png",
                description: "Recomendamos nuestra Crema Hidratante Intensa con Ceramidas de Arroz y Escualano Orgánico para calmar tu cutis."
            };
        } else if (quizAnswers.goal === "protection") {
            recommendedProduct = {
                id: "mineral-shield",
                name: "Mineral Shield Fluid SPF 50",
                price: 920,
                img: "assets/images/mineral_shield.png",
                description: "Protección mineral pura SPF 50 infundida con péptidos para defender y restaurar tu barrera celular de forma activa."
            };
        }

        quizBox.innerHTML = `
            <div class="quiz-result-card">
                <span class="result-glow">Diagnóstico Completado</span>
                <h3>Tu Rutina Molecular Recomendada</h3>
                <div class="quiz-result-img-box">
                    <img src="${recommendedProduct.img}" alt="${recommendedProduct.name}">
                </div>
                <span class="result-rec-name">${recommendedProduct.name}</span>
                <p class="quiz-wait-text">${recommendedProduct.description}</p>
                <button class="btn btn-primary compact btn-quiz-add" 
                    data-id="${recommendedProduct.id}" 
                    data-name="${recommendedProduct.name}" 
                    data-price="${recommendedProduct.price}" 
                    data-img="${recommendedProduct.img}">
                    Agregar Fórmula Recomendada
                </button>
            </div>
        `;

        const quizAddBtn = quizBox.querySelector('.btn-quiz-add');
        if (quizAddBtn) {
            quizAddBtn.addEventListener('click', () => {
                addToCart({
                    id: recommendedProduct.id,
                    name: recommendedProduct.name,
                    price: recommendedProduct.price,
                    img: recommendedProduct.img
                });
                quizAddBtn.textContent = "Fórmula Agregada ✓";
                quizAddBtn.style.backgroundColor = "var(--color-terracotta)";
            });
        }
    }

    /* ==========================================================================
       4. TRANSPARENT INGREDIENT MAPPER INTERACTION
       ========================================================================== */
    const mapperItems = document.querySelectorAll('.mapper-item');
    const displayCard = document.getElementById('ingredient-display-card');
    const displayTitle = document.getElementById('display-title');
    const displayDescription = document.getElementById('display-description');
    const displayConcentration = document.getElementById('display-concentration');
    const displayEfficacy = document.getElementById('display-efficacy');
    const displaySource = document.getElementById('display-source-text');

    const ingredientDatabase = {
        bakuchiol: {
            title: "Bakuchiol Botánico",
            desc: "Una alternativa natural y altamente tolerable al retinol. Reduce las líneas de expresión y mejora la elasticidad celular sin causar la irritación o descamación del retinol convencional.",
            concentration: "2.0%",
            efficacy: "94%",
            source: "Cosecha ética en las llanuras del semi-árido de la India."
        },
        hyaluronic: {
            title: "Ácido Hialurónico Multi-Peso",
            desc: "Compuesto bio-tecnológico combinando 3 pesos moleculares distintos. Penetra hasta las capas profundas de la dermis para rellenar líneas finas y retener la humedad hasta 1000 veces su peso.",
            concentration: "1.5%",
            efficacy: "98%",
            source: "Fermentación biológica de sustratos de trigo orgánico francés."
        },
        squalane: {
            title: "Escualano Orgánico de Caña",
            desc: "Un aceite ultra-fino y ligero que imita los lípidos naturales de la piel. Sella la hidratación y repara la barrera cutánea sin obstruir poros ni dejar residuos grasos.",
            concentration: "100%",
            efficacy: "91%",
            source: "Caña de azúcar cultivada de forma sustentable en São Paulo, Brasil."
        }
    };

    mapperItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove active classes
            mapperItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const ingredientKey = item.dataset.ingredient;
            const data = ingredientDatabase[ingredientKey];

            if (data) {
                // Apply a smooth fade out transition
                displayCard.style.opacity = '0.3';
                displayCard.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    displayTitle.textContent = data.title;
                    displayDescription.textContent = data.desc;
                    displayConcentration.textContent = data.concentration;
                    displayEfficacy.textContent = data.efficacy;
                    displaySource.textContent = data.source;

                    // Fade back in
                    displayCard.style.opacity = '1';
                    displayCard.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    });

    /* ==========================================================================
       5. PREMIUM SHOPPING CART DRAWER (WITH SUBSCRIPTION 3.0 MECHANICS)
       ========================================================================== */
    const cartDrawer = document.getElementById('cart-drawer-element');
    const closeCartBtn = document.getElementById('btn-close-cart');
    const overlayClose = document.getElementById('cart-overlay-close');
    const cartCounter = document.getElementById('cart-counter');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
    const checkoutBtn = document.getElementById('btn-checkout');
    const subscribeToggle = document.getElementById('cart-subscribe-toggle');

    let cartList = [];
    let isSubscriptionActive = false;

    // Helper to open cart
    function openCart() {
        cartDrawer.classList.add('active');
        cartDrawer.setAttribute('aria-hidden', 'false');
    }

    // Helper to close cart
    function closeCart() {
        cartDrawer.classList.remove('active');
        cartDrawer.setAttribute('aria-hidden', 'true');
    }

    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (overlayClose) overlayClose.addEventListener('click', closeCart);

    // Global triggers for cart trigger class
    const cartTriggers = document.querySelectorAll('.cart-trigger');
    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    });

    // Listen for Quick Buy actions
    const quickBuyButtons = document.querySelectorAll('.btn-quick-buy');
    quickBuyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = {
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: parseFloat(btn.dataset.price),
                img: btn.dataset.img
            };
            addToCart(item);
            
            // Text feedback
            const originalText = btn.textContent;
            btn.textContent = "¡Agregado!";
            btn.style.backgroundColor = "var(--color-sage)";
            btn.style.color = "#FAF6F0";
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = "";
                btn.style.color = "";
            }, 1500);
        });
    });

    // Cart core operations
    function addToCart(product) {
        const existingItem = cartList.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartList.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartDOM();
        openCart();
    }

    function removeFromCart(productId) {
        cartList = cartList.filter(item => item.id !== productId);
        updateCartDOM();
    }

    function updateQuantity(productId, delta) {
        const item = cartList.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDOM();
            }
        }
    }

    // Subscribe toggle listener (Subscription 3.0 discount)
    if (subscribeToggle) {
        subscribeToggle.addEventListener('change', (e) => {
            isSubscriptionActive = e.target.checked;
            updateCartDOM();
        });
    }

    function updateCartDOM() {
        // Count totals
        const totalItemsCount = cartList.reduce((acc, curr) => acc + curr.quantity, 0);
        cartCounter.textContent = totalItemsCount;

        if (cartList.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-message">
                    <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>
                    <p>Tu bolsa de belleza está vacía.</p>
                    <a href="#coleccion" class="btn btn-secondary inline-btn" id="empty-cart-shop-btn">Explorar Fórmulas</a>
                </div>
            `;
            // Re-bind empty cart button scroll event
            const emptyShopBtn = document.getElementById('empty-cart-shop-btn');
            if (emptyShopBtn) {
                emptyShopBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeCart();
                    document.getElementById('coleccion').scrollIntoView({ behavior: 'smooth' });
                });
            }
            cartSubtotalPrice.textContent = `$0 MXN`;
            return;
        }

        // Render products
        let itemsHTML = cartList.map(item => `
            <div class="cart-item">
                <div class="cart-item-img-box">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">$${item.price} MXN</span>
                    <div class="cart-item-controls">
                        <div class="qty-control">
                            <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
                        </div>
                        <button class="btn-remove-item" data-id="${item.id}">Eliminar</button>
                    </div>
                </div>
            </div>
        `).join('');

        cartItemsContainer.innerHTML = itemsHTML;

        // Add event listeners inside cart
        cartItemsContainer.querySelectorAll('.dec-qty').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(btn.dataset.id, -1));
        });
        cartItemsContainer.querySelectorAll('.inc-qty').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(btn.dataset.id, 1));
        });
        cartItemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });

        // Price calculations
        let subtotal = cartList.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        
        if (isSubscriptionActive) {
            subtotal = subtotal * 0.85; // 15% discount
            cartSubtotalPrice.innerHTML = `<del style="opacity: 0.5; font-size: 0.85rem; margin-right: 8px;">$${subtotal / 0.85} MXN</del> $${subtotal.toFixed(0)} MXN (Sub 3.0)`;
        } else {
            cartSubtotalPrice.textContent = `$${subtotal} MXN`;
        }
    }

    // Checkout Confirmation
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cartList.length === 0) {
                alert("Agrega algún elixir molecular al carrito antes de pagar.");
                return;
            }
            
            const modeText = isSubscriptionActive ? "bajo el plan recurrente de Suscripción 3.0" : "en pago único";
            alert(`¡Procediendo al pago encriptado de NEED BEAUTY!\nHas seleccionado ${cartList.length} tipo(s) de elixires moleculares ${modeText}.\n¡Gracias por probar este rediseño premium!`);
        });
    }

    /* ==========================================================================
       6. CIRCULAR TRACEABILITY TIMELINE INTERACTION
       ========================================================================== */
    const timelineNodes = document.querySelectorAll('.timeline-node');
    
    // Simulate cyclic step animations on timeline as user scrolls near
    const traceSection = document.getElementById('transparencia');
    if (traceSection) {
        let timelineInterval;
        let activeNodeIndex = 0;

        const timelineCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start automatic cyclic highlights
                    timelineInterval = setInterval(() => {
                        timelineNodes.forEach(node => node.classList.remove('active'));
                        timelineNodes[activeNodeIndex].classList.add('active');
                        
                        activeNodeIndex = (activeNodeIndex + 1) % timelineNodes.length;
                    }, 3500);
                } else {
                    clearInterval(timelineInterval);
                }
            });
        };

        const timelineObserver = new IntersectionObserver(timelineCallback, {
            root: null,
            threshold: 0.3
        });

        timelineObserver.observe(traceSection);
    }

    /* ==========================================================================
       7. NEWSLETTER INTEGRATION
       ========================================================================== */
    const newsletterForm = document.getElementById('form-newsletter-footer');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            alert(`¡Fórmula registrada!\n${input.value} se ha suscrito al Boletín Molecular de NEED BEAUTY.`);
            input.value = '';
        });
    }
});
