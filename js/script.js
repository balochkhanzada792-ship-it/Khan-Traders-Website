/* ============================================================
   KHAN TRADERS & AL SHAHBAZAR ZARAI ALLAAT — Master Script
   Refreshed v2.0 — All interactive features
   ============================================================ */

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.products': 'Products',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        'home.title': "Pakistan's Trusted Agricultural Machinery Dealer",
        'home.subtitle': 'Providing high-quality agricultural machinery with reliable service, genuine products and easy installment plans for farmers across Pakistan.',
        'cta.call': '📞 Call Now',
        'cta.whatsapp': '💬 WhatsApp',
        'cta.products': 'View Products',
        'cta.details': 'View Details',
        'stats.title': 'Our Impact',
        'stats.farmers': 'Farmers Served',
        'stats.experience': 'Years Experience',
        'stats.machines': 'Machine Types',
        'stats.villages': 'Satisfied Villages',
        'products.title': 'Trending Products',
        'product.riceName': 'Rice Thresher',
        'product.riceDesc': 'High-performance Rice Thresher designed for fast, clean and efficient harvesting with dependable performance.',
        'product.laserName': 'Laser Land Leveler',
        'product.laserDesc': 'Advanced Laser Land Leveler for accurate field leveling, improved irrigation and better crop production.',
        'why.title': 'Why Choose Us?',
        'why.genuine': '✅ Genuine Products',
        'why.genuineText': 'We provide genuine and high-quality agricultural machinery for modern farming.',
        'why.installments': '💰 Easy Installments',
        'why.installmentsText': 'Flexible installment plans are available for selected agricultural machinery.',
        'why.delivery': '🚚 Fast Delivery',
        'why.deliveryText': 'Quick and reliable delivery service to farmers across Pakistan.',
        'why.trusted': '🤝 Trusted Dealer',
        'why.trustedText': 'Trusted by farmers for quality products, fair prices and excellent service.',
        'testimonials.title': 'What Our Farmers Say',
        'testimonial.one': '"I bought a Wheat Thresher from Khan Traders. The quality is excellent and the installment plan made it very affordable. Highly recommended!"',
        'testimonial.oneAuthor': '— Muhammad Ramzan',
        'testimonial.oneCity': 'Ahmadpur Sial, Jhang',
        'testimonial.two': '"Best agricultural machinery dealer in our area. Their Laser Land Leveler improved my crop yield significantly. Great after-sales service!"',
        'testimonial.twoAuthor': '— Saleem Akhtar',
        'testimonial.twoCity': 'Shorkot, Jhang',
        'testimonial.three': '"I\'ve been buying spare parts from Khan Traders for years. They always have genuine products at fair prices. Trustworthy business."',
        'testimonial.threeAuthor': '— Allah Ditta',
        'testimonial.threeCity': 'Adda Daina More, Jhang',
        'installment.title': 'Easy Installment Plans',
        'installment.text': 'Buy your agricultural machinery with convenient monthly installment plans. Contact us today for complete details.',
        'faq.title': 'Frequently Asked Questions',
        'faq.q1': 'What types of agricultural machinery do you offer?',
        'faq.a1': 'We offer a wide range including Wheat Threshers, Rice Threshers, Laser Land Levelers, Rotavators, Reaper Machines, Seed Drills, Multi Crop Threshers, and genuine spare parts.',
        'faq.q2': 'Do you offer installment plans?',
        'faq.a2': 'Yes! We provide flexible and easy monthly installment plans on selected agricultural machinery. Contact us for complete details and eligibility.',
        'faq.q3': 'Do you deliver machinery to my village?',
        'faq.a3': 'Absolutely. We offer fast and reliable delivery service to farmers across Pakistan, including remote villages.',
        'faq.q4': 'How can I get the latest price?',
        'faq.a4': 'Call or WhatsApp us directly to receive the latest prices, availability, and delivery details for the equipment you need.',
        'contact.homeTitle': 'Contact Us',
        'contact.homeText': 'We are always ready to help you with agricultural machinery, prices, installments, and product information.',
        'contact.mapTitle': 'Our Location',
        'contact.mapText': 'Visit our agricultural machinery showroom at Adda Daina More.',
        'footer.tagline': 'Your Trusted Agricultural Machinery Dealer',
        'footer.address': '📍 Adda Daina More, Tehsil Ahmadpur Sial, Jhang',
        'footer.phone': '📞 ⁦0300-8312814⁩',
        'footer.whatsapp': '💬 WhatsApp: ⁦0300-7919158⁩',
        'products.faqTitle': 'Product FAQs',
        'products.faqQ1': 'What is the warranty on your machinery?',
        'products.faqA1': 'All our agricultural machinery comes with manufacturer warranty. Contact us for specific warranty details on each product.',
        'products.faqQ2': 'Can I get a demo before purchasing?',
        'products.faqA2': 'Yes, we arrange product demonstrations so you can see the machinery in action before making a decision.',
        'products.faqQ3': 'Do you offer spare parts for all machines?',
        'products.faqA3': 'Yes, we stock genuine spare parts for all our agricultural machinery to ensure long-term maintenance and support.',
        'products.moreText': 'Contact us today for product prices, installment plans and complete machinery details.',
        'contact.locationTitle': 'Our Location',
        'contact.locationText': 'Visit our shop at Adda Daina More.',
        'about.breadcrumb': 'About Us',
        'about.title': 'About Our Company',
        'about.text': 'Khan Traders & Al Shahbaaz Zarai Allaat is a trusted agricultural machinery dealer located at Adda Daina More, Pakistan. We are committed to providing high-quality farming equipment with reliable customer service and affordable prices.',
        'about.who': 'Who We Are',
        'about.mission': '🌾 Our Mission',
        'about.missionText': 'Our mission is to provide modern agricultural machinery that helps farmers increase productivity while reducing time, effort and operational costs.',
        'about.vision': '🎯 Our Vision',
        'about.visionText': "We aim to become one of Pakistan's most trusted suppliers of agricultural machinery through quality products and excellent customer service.",
        'about.offer': '🚜 What We Offer',
        'about.offerText': 'Wheat Threshers, Rice Threshers, Rotavators, Laser Land Levelers, Seed Drills, Multi Crop Threshers, Spare Parts and many other agricultural machines.',
        'about.trust': '🤝 Why Farmers Trust Us',
        'about.trustText': 'Genuine machinery, competitive prices, easy installment plans, after-sales support and honest customer dealing.',
        'about.faqTitle': 'Common Questions',
        'about.faqQ1': 'Where are you located?',
        'about.faqA1': 'We are located at Adda Daina More, Tehsil Ahmadpur Sial, District Jhang, Punjab, Pakistan.',
        'about.faqQ2': 'What are your business hours?',
        'about.faqA2': 'We are open daily from 8:00 AM to 8:00 PM. You can also call us anytime for inquiries.',
        'about.faqQ3': 'Do you provide after-sales service?',
        'about.faqA3': 'Yes, we provide complete after-sales support and guidance for all our agricultural machinery.',
        'contact.more': 'Need More Information?',
        'contact.moreText': 'Our team is always ready to help you choose the right agricultural machinery.',
        'products.heroTitle': 'Our Agricultural Machinery',
        'products.heroText': 'We provide high-quality agricultural machinery, genuine spare parts, affordable prices and easy installment plans for farmers across Pakistan.',
        'products.sectionTitle': 'Our Products',
        'products.getPrice': 'Get Price',
        'product.wheatName': 'Wheat Thresher',
        'product.wheatDesc': 'Heavy-duty Wheat Thresher built to deliver high productivity, clean grain separation and dependable performance.',
        'product.riceName': 'Rice Thresher',
        'product.riceDesc': 'High-performance Rice Thresher designed for fast, efficient and clean harvesting.',
        'product.laserName': 'Laser Land Leveler',
        'product.laserDesc': 'Advanced Laser Land Leveler for accurate field leveling, better irrigation and improved crop production.',
        'product.rotavatorName': 'Rotavator',
        'product.rotavatorDesc': 'Powerful Rotavator engineered for effective soil preparation while saving both time and fuel.',
        'product.reaperName': 'Reaper Machine',
        'product.reaperDesc': 'Reliable Wheat and Rice Reaper Machine designed for fast, clean and efficient harvesting with excellent field performance.',
        'product.seedName': 'Seed Drill',
        'product.seedDesc': 'Precision Seed Drill for accurate seed placement, ensuring uniform crop growth and higher productivity.',
        'product.spareName': 'Laser Land Leveler Spare Parts',
        'product.spareDesc': 'Genuine spare parts with long service life, reliable performance and perfect compatibility.',
        'product.multiName': 'Multi Crop Thresher',
        'product.multiDesc': 'Versatile Multi Crop Thresher suitable for processing different crops with high efficiency and low grain loss.',
        'gallery.title': 'Our Machinery Gallery',
        'gallery.text': 'Browse our collection of high-quality agricultural machinery available at Khan Traders & Al Shahbaaz Zarai Allaat. Click any image to enlarge.',
        'gallery.subtitle': 'Click on any image to view in full size',
        'gallery.contactText': 'Contact us today for prices, installments and machinery details.',
        'contact.title': 'Contact Us',
        'contact.text': 'We are always ready to help you with agricultural machinery, prices, installments, and product information.',
        'contact.breadcrumb': 'Contact Us',
        'contact.getInTouch': 'Get In Touch',
        'contact.shopLabel': '🏢 Shop Name:',
        'contact.addressLabel': '📍 Address:',
        'contact.callLabel': '📞 Call:',
        'contact.whatsappLabel': '💬 WhatsApp:',
        'contact.priceLabel': '💰 Price:',
        'contact.installmentLabel': '💳 Installment:',
        'contact.formTitle': 'Send Us a Message',
        'contact.formText': 'Fill out the form below and we will get back to you as soon as possible.',
        'contact.nameLabel': 'Your Name *',
        'contact.phoneLabel': 'Phone Number *',
        'contact.emailLabel': 'Email (optional)',
        'contact.productLabel': 'Interested Product',
        'contact.selectProduct': 'Select a product (optional)',
        'contact.messageLabel': 'Your Message *',
        'contact.sendButton': 'Send Message'
    },
    ur: {
        'nav.home': 'ہوم',
        'nav.about': 'ہم بارے میں',
        'nav.products': 'مصنوعات',
        'nav.gallery': 'گیلری',
        'nav.contact': 'رابطہ',
        'home.title': 'پاکستان کے قابل اعتماد زرعی مشینری ڈیلر',
        'home.subtitle': 'ہم پاکستان بھر کے کسانوں کے لیے اعلیٰ معیار کی زرعی مشینری، اصل مصنوعات اور آسان قسطی سہولت فراہم کرتے ہیں۔',
        'cta.call': '📞 ابھی کال کریں',
        'cta.whatsapp': '💬 واٹس ایپ',
        'cta.products': 'مصنوعات دیکھیں',
        'cta.details': 'تفصیلات دیکھیں',
        'stats.title': 'ہماری تاثیر',
        'stats.farmers': 'کسانوں کی خدمت',
        'stats.experience': 'تجربے کے سال',
        'stats.machines': 'مشینوں کی اقسام',
        'stats.villages': 'مطمئن دیہات',
        'products.title': 'مقبول مصنوعات',
        'product.riceName': 'رائس تھریشر',
        'product.riceDesc': 'اعلیٰ کارکردگی والی رائس تھریشر تیز، صاف اور موثر کٹائی کے لیے بنائی گئی ہے۔',
        'product.laserName': 'لیزر لینڈ لیولر',
        'product.laserDesc': 'دقیق سطح سازی، بہتر آبپاشی اور بہتر فصل کی پیداوار کے لیے جدید لیزر لینڈ لیولر۔',
        'why.title': 'ہمیں کیوں منتخب کریں؟',
        'why.genuine': '✅ اصل مصنوعات',
        'why.genuineText': 'ہم جدید زراعت کے لیے اصل اور اعلیٰ معیار کی زرعی مشینری فراہم کرتے ہیں۔',
        'why.installments': '💰 آسان قسطیں',
        'why.installmentsText': 'منتخب زرعی مشینری کے لیے لچکدار قسطی سہولت موجود ہے۔',
        'why.delivery': '🚚 تیز ترسیل',
        'why.deliveryText': 'پاکستان بھر کے کسانوں تک تیز اور قابل اعتماد ڈیلیوری فراہم کی جاتی ہے۔',
        'why.trusted': '🤝 قابل اعتماد ڈیلر',
        'why.trustedText': 'کسانوں کی نیت، معیار، منصفانہ قیمت اور بہترین خدمت کے باعث ہم قابل اعتماد ہیں۔',
        'testimonials.title': 'کسانوں کا بیان',
        'testimonial.one': '"میں نے خان ٹریڈرز سے گندم کے تھریشر کی خریداری کی۔ معیار بہت اچھا ہے اور قسطی سہولت نے خرید کو آسان بنایا۔ بہت سفارش کی جاتی ہے!"',
        'testimonial.oneAuthor': '— محمد رمضان',
        'testimonial.oneCity': 'احمد پور سیال، جھنگ',
        'testimonial.two': '"ہمارے علاقے میں یہ بہترین زرعی مشینری ڈیلر ہے۔ ان کا لیزر لینڈ لیولر میرے فصل کی پیداوار کو بہت بہتر بنا چکا ہے۔ شاندار بعد از فروخت خدمت!"',
        'testimonial.twoAuthor': '— سلیم اختر',
        'testimonial.twoCity': 'شورکوٹ، جھنگ',
        'testimonial.three': '"میں کئی سالوں سے خان ٹریڈرز سے اسپیر پارٹس خریدتا ہوں۔ وہ ہمیشہ اصل مصنوعات منصفانہ قیمتوں پر فراہم کرتے ہیں۔ ایک قابل اعتماد کاروبار۔"',
        'testimonial.threeAuthor': '— اللہ دتہ',
        'testimonial.threeCity': 'عدا ڈائنا موڑ، جھنگ',
        'installment.title': 'آسان قسطی منصوبے',
        'installment.text': 'آپ اپنی زرعی مشینری آسان ماہانہ قسطوں میں خرید سکتے ہیں۔ مکمل تفصیلات کے لیے ہم سے رابطہ کریں۔',
        'faq.title': 'اکثر پوچھے گئے سوالات',
        'faq.q1': 'آپ کس قسم کی زرعی مشینری فراہم کرتے ہیں؟',
        'faq.a1': 'ہم گندم کے تھریشر، رائس تھریشر، لیزر لینڈ لیولر، روتاویٹر، ریپر مشین، سیڈ ڈریل، ملٹی کرپ تھریشر اور اصل اسپیر پارٹس فراہم کرتے ہیں۔',
        'faq.q2': 'کیا آپ قسطی منصوبے بھی دیتے ہیں؟',
        'faq.a2': 'جی ہاں! منتخب زرعی مشینری پر ہم لچکدار اور آسان ماہانہ قسطی سہولت فراہم کرتے ہیں۔ مکمل تفصیلات کے لیے رابطہ کریں۔',
        'faq.q3': 'کیا آپ میرے گاؤں تک مشینری بھی پہنچاتے ہیں؟',
        'faq.a3': 'بالکل! ہم پاکستان بھر کے کسانوں، بشمول دور دراز دیہاتوں تک تیز اور قابل اعتماد ڈیلیوری فراہم کرتے ہیں۔',
        'faq.q4': 'میں تازہ قیمت کیسے حاصل کر سکتا ہوں؟',
        'faq.a4': 'براہِ کرم براہِ راست کال یا واٹس ایپ کریں تاکہ آپ کو مطلوبہ مشینری کی تازہ قیمت، دستیابی اور ڈیلیوری کی معلومات مل سکیں۔',
        'contact.homeTitle': 'رابطہ کریں',
        'contact.homeText': 'ہم آپ کو زرعی مشینری، قیمتوں، قسطوں اور مصنوعات کی معلومات میں مدد کے لیے ہمیشہ تیار ہیں۔',
        'contact.mapTitle': 'ہماری جگہ',
        'contact.mapText': 'ہماری زرعی مشینری شاوروم اڈا ڈائنا موڑ پر ہے۔',
        'footer.tagline': 'آپ کے قابل اعتماد زرعی مشینری ڈیلر',
        'footer.address': '📍 اڈا ڈائنا موڑ، تحصیل احمد پور سیال، جھنگ',
        'footer.phone': '📞 ⁦0300-8312814⁩',
        'footer.whatsapp': '💬 واٹس ایپ: ⁦0300-7919158⁩',
        'products.faqTitle': 'مصنوعات کے سوالات',
        'products.faqQ1': 'آپ کی مشینری پر گارنٹی کیا ہے؟',
        'products.faqA1': 'ہماری تمام زرعی مشینری مینوفیکچرر کی گارنٹی کے ساتھ آتی ہے۔ کسی خاص مصنوعات کے بارے میں معلومات کے لیے ہم سے رابطہ کریں۔',
        'products.faqQ2': 'کیا میں خرید سے پہلے ڈیمو دیکھ سکتا ہوں؟',
        'products.faqA2': 'جی ہاں، ہم مصنوعات کے ڈیمو کا انتظام کرتے ہیں تاکہ آپ خرید سے پہلے مشینری کو دیکھ سکیں۔',
        'products.faqQ3': 'کیا آپ ہر مشین کے لیے اسپیر پارٹس فراہم کرتے ہیں؟',
        'products.faqA3': 'جی ہاں، ہم اپنی تمام زرعی مشینری کے لیے اصل اسپیر پارٹس فراہم کرتے ہیں تاکہ طویل مدتی سہولت اور دیکھ بھال ممکن ہو۔',
        'products.moreText': 'آج ہی مصنوعات کی قیمت، قسطی منصوبے اور مکمل تفصیلات کے لیے ہم سے رابطہ کریں۔',
        'contact.locationTitle': 'ہماری جگہ',
        'contact.locationText': 'ہماری دکان اڈا ڈائنا موڑ پر ہے۔',
        'about.breadcrumb': 'ہم بارے میں',
        'about.title': 'ہماری کمپنی',
        'about.text': 'خان ٹریڈرز اینڈ الشہباز زرعی اللات اڈا ڈائنا موڑ، پاکستان میں واقع ایک قابل اعتماد زرعی مشینری ڈیلر ہے۔ ہم اعلیٰ معیار کے زراعتی سامان، قابل اعتماد خدمت اور معقول قیمتوں کے ساتھ فراہم کرتے ہیں۔',
        'about.who': 'ہم کون ہیں',
        'about.mission': '🌾 ہماری مشن',
        'about.missionText': 'ہماری مشن جدید زرعی مشینری فراہم کرنا ہے جو کسانوں کو پیداوار میں اضافہ کرنے میں مدد دے اور وقت، محنت اور آپریشنل اخراجات کو کم کرے۔',
        'about.vision': '🎯 ہماری vision',
        'about.visionText': 'ہم پاکستان کے قابل اعتماد زرعی مشینری فراہم کنندگان میں سے ایک بننا چاہتے ہیں، جس کے لیے معیار اور بہترین خدمت بنیادی اصول ہیں۔',
        'about.offer': '🚜 ہم کیا فراہم کرتے ہیں',
        'about.offerText': 'گندم کے تھریشر، رائس تھریشر، روتاویٹر، لیزر لینڈ لیولر، سیڈ ڈریل، ملٹی کرپ تھریشر، اسپیر پارٹس اور دیگر زرعی مشینری۔',
        'about.trust': '🤝 کیوں کسان ہمارے پر اعتماد کرتے ہیں',
        'about.trustText': 'اصل مشینری، منصفانہ قیمت، آسان قسطی سہولت، بعد از فروخت خدمت اور ایماندار کاروباری سلوک۔',
        'about.faqTitle': 'عام سوالات',
        'about.faqQ1': 'آپ کا مقام کہاں ہے؟',
        'about.faqA1': 'ہم اڈا ڈائنا موڑ، تحصیل احمد پور سیال، ضلع جھنگ، پنجاب، پاکستان میں موجود ہیں۔',
        'about.faqQ2': 'آپ کے کاروباری اوقات کیا ہیں؟',
        'about.faqA2': 'ہم ہر دن صبح 8:00 سے شام 8:00 تک موجود رہتے ہیں۔ سوالات کے لیے آپ ہم کو کال کر سکتے ہیں۔',
        'about.faqQ3': 'کیا آپ بعد از فروخت خدمت بھی دیتے ہیں؟',
        'about.faqA3': 'جی ہاں، ہم اپنی تمام زرعی مشینری کے لیے مکمل بعد از فروخت مدد اور رہنمائی فراہم کرتے ہیں۔',
        'contact.more': 'مزید معلومات چاہیں؟',
        'contact.moreText': 'ہمارا ٹیم آپ کو مناسب زرعی مشینری منتخب کرنے میں مدد کے لیے ہمیشہ تیار ہے۔',
        'products.heroTitle': 'ہماری زرعی مشینری',
        'products.heroText': 'ہم اعلیٰ معیار کی زرعی مشینری، اصل اسپیر پارٹس، معقول قیمتوں اور آسان قسطی سہولت کے ساتھ کسانوں کی خدمت کرتے ہیں۔',
        'products.sectionTitle': 'ہماری مصنوعات',
        'products.getPrice': 'قیمت معلوم کریں',
        'product.wheatName': 'گندم تھریشر',
        'product.wheatDesc': 'بھاری مشین، جو زیادہ پیداوار، صاف دانہ الگ کرنے اور قابل اعتماد کارکردگی کے لیے تیار کی گئی ہے۔',
        'product.riceName': 'رائس تھریشر',
        'product.riceDesc': 'تیز، مؤثر اور صاف کٹائی کے لیے اعلیٰ کارکردگی والا رائس تھریشر۔',
        'product.laserName': 'لیزر لینڈ لیولر',
        'product.laserDesc': 'زمین کو درست ہموار کرنے، بہتر آبپاشی اور فصل کی پیداوار بڑھانے کے لیے جدید لیزر لینڈ لیولر۔',
        'product.rotavatorName': 'روٹاویٹر',
        'product.rotavatorDesc': 'زمین کی مؤثر تیاری کے لیے طاقتور روٹاویٹر، جو وقت اور ایندھن دونوں کی بچت کرتا ہے۔',
        'product.reaperName': 'ریپر مشین',
        'product.reaperDesc': 'گندم اور چاول کی تیز، صاف اور مؤثر کٹائی کے لیے قابل اعتماد ریپر مشین۔',
        'product.seedName': 'سیڈ ڈرل',
        'product.seedDesc': 'بیجوں کو درست فاصلے پر بونے کے لیے پریسیژن سیڈ ڈرل، جو یکساں فصل اور بہتر پیداوار میں مدد دیتی ہے۔',
        'product.spareName': 'لیزر لینڈ لیولر کے اسپیئر پارٹس',
        'product.spareDesc': 'طویل عمر، قابل اعتماد کارکردگی اور بہترین مطابقت رکھنے والے اصل اسپیئر پارٹس۔',
        'product.multiName': 'ملٹی کراپ تھریشر',
        'product.multiDesc': 'مختلف فصلوں کی مؤثر تھریشنگ کے لیے موزوں ملٹی کراپ تھریشر، جس سے دانے کا ضیاع کم ہوتا ہے۔',
        'gallery.title': 'ہماری مشینری گیلری',
        'gallery.text': 'خان ٹریڈرز اینڈ الشہباز زرعی آلات میں دستیاب اعلیٰ معیار کی زرعی مشینری کی تصاویر دیکھیں۔ کسی بھی تصویر پر کلک کر کے اسے بڑے سائز میں دیکھیں۔',
        'gallery.subtitle': 'کسی بھی تصویر پر کلک کریں اور اسے مکمل سائز میں دیکھیں۔',
        'gallery.wheat': 'گندم تھریشر',
        'gallery.rice': 'رائس تھریشر',
        'gallery.laser': 'لیزر لینڈ لیولر',
        'gallery.rotavator': 'روٹاویٹر',
        'gallery.reaper': 'ریپر مشین',
        'gallery.seed': 'سیڈ ڈرل',
        'gallery.multiCrop': 'ملٹی کراپ تھریشر',
        'gallery.spareParts': 'اسپیئر پارٹس',
        'gallery.shop': 'ہماری دکان',
        'gallery.contactText': 'آج ہی قیمت، قسط اور مشینری کی تفصیلات کے لیے ہم سے رابطہ کریں۔',
        'contact.title': 'رابطہ کریں',
        'contact.text': 'ہم آپ کو زرعی مشینری، قیمتوں، قسطوں اور مصنوعات کی معلومات میں مدد کے لیے ہمیشہ تیار ہیں۔',
        'contact.breadcrumb': 'رابطہ',
        'contact.getInTouch': 'ہم سے رابطہ کریں',
        'contact.shopLabel': '🏢 شاپ کا نام:',
        'contact.addressLabel': '📍 پتہ:',
        'contact.callLabel': '📞 کال:',
        'contact.whatsappLabel': '💬 واٹس ایپ:',
        'contact.priceLabel': '💰 قیمت:',
        'contact.installmentLabel': '💳 قسط:',
        'contact.formTitle': 'ہمیں پیغام بھیجیں',
        'contact.formText': 'نیچے فارم پُر کریں، اور ہم جلد ہی آپ سے رابطہ کریں گے۔',
        'contact.nameLabel': 'آپ کا نام *',
        'contact.phoneLabel': 'فون نمبر *',
        'contact.emailLabel': 'ای میل (اختیاری)',
        'contact.productLabel': 'دلچسپی والی مصنوعات',
        'contact.selectProduct': 'مصنوعات منتخب کریں (اختیاری)',
        'contact.messageLabel': 'آپ کا پیغام *',
        'contact.sendButton': 'پیغام بھیجیں'
    }
};

function applyLanguage(lang) {
    const target = translations[lang] ? lang : 'en';
    const nodes = document.querySelectorAll('[data-i18n]');

    nodes.forEach((node) => {
        const key = node.dataset.i18n;
        if (translations[target][key]) {
            node.textContent = translations[target][key];
        }
    });

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
        langToggle.textContent = target === 'ur' ? 'English' : 'اردو';
        langToggle.setAttribute('aria-label', target === 'ur' ? 'Switch to English' : 'اردو میں تبدیل کریں');
    }

    document.documentElement.lang = target === 'ur' ? 'ur' : 'en';
    document.body.dir = target === 'ur' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-urdu', target === 'ur');
    localStorage.setItem('khanLanguage', target);
}

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const preferredLang = localStorage.getItem('khanLanguage') || 'en';
    applyLanguage(preferredLang);

    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const activeLang = localStorage.getItem('khanLanguage') === 'ur' ? 'en' : 'ur';
            applyLanguage(activeLang);
        });
    }

    // ---------- 1. Mobile Menu Toggle ----------
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationMenu = document.querySelector('nav ul');

    if (menuToggle && navigationMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navigationMenu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            menuToggle.classList.toggle('is-active', isOpen);
        });

        // Close menu on link click
        navigationMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navigationMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // ---------- 2. Scroll Reveal (Intersection Observer) ----------
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally unobserve after reveal
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.10,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach((el) => revealObserver.observe(el));
    }

    // ---------- 3. Back to Top Button ----------
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Scroll to top');
    backToTop.innerHTML = '&#8593;'; // ↑ arrow
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('is-visible');
        } else {
            backToTop.classList.remove('is-visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------- 4. Testimonial Carousel ----------
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        const dotsContainer = carousel.parentElement.querySelector('.testimonial-dots');
        let currentSlide = 0;
        let autoSlideInterval;

        // Create dots
        if (dotsContainer) {
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            });
        }

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            currentSlide = index;

            // Update dots
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.testimonial-dot');
                dots.forEach((d, i) => d.classList.toggle('active', i === index));
            }
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }

        // Initialize: show first slide
        goToSlide(0);
        startAutoSlide();

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    // ---------- 5. FAQ Accordion ----------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');

                // Close all other items
                faqItems.forEach((other) => other.classList.remove('is-open'));

                // Toggle current
                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        }
    });

    // ---------- 6. Stats Counter Animation ----------
    const statNumbers = document.querySelectorAll('.stat-item h3');

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = parseInt(target.getAttribute('data-count'), 10);
                    if (!finalValue || target.dataset.animated) return;

                    target.dataset.animated = 'true';
                    animateCounter(target, finalValue);
                    counterObserver.unobserve(target);
                }
            });
        }, { threshold: 0.50 });

        statNumbers.forEach((el) => counterObserver.observe(el));
    }

    function animateCounter(element, target) {
        const duration = 2000; // ms
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            // Format with commas
            element.textContent = current.toLocaleString() + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        }

        requestAnimationFrame(update);
    }

    // ---------- 7. Lightbox for Gallery Images ----------
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'Image lightbox');
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img src="" alt="Enlarged image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Open lightbox on gallery images
    document.querySelectorAll('.gallery-img, .card img[loading="lazy"]').forEach((img) => {
        img.addEventListener('click', (e) => {
            // Only open if it's a gallery page or has gallery-img class
            if (img.classList.contains('gallery-img') || window.location.pathname.includes('gallery')) {
                e.preventDefault();
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Enlarged image';
                lightbox.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });

    // ---------- 8. Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ---------- 9. Contact Form Handler (if present) ----------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';

            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            // Simulate send (in production, use Formspree or similar)
            setTimeout(() => {
                const successMsg = document.createElement('div');
                successMsg.style.cssText = `
                    padding: 16px 20px;
                    background: #d4edda;
                    color: #155724;
                    border-radius: 8px;
                    margin-top: 16px;
                    font-weight: 600;
                    text-align: center;
                `;
                successMsg.textContent = '✅ Thank you! Your message has been sent. We will contact you soon.';

                // Remove old success message if any
                const oldMsg = contactForm.querySelector('.form-success');
                if (oldMsg) oldMsg.remove();

                successMsg.className = 'form-success';
                contactForm.appendChild(successMsg);
                contactForm.reset();

                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }

                // Auto-remove after 5 seconds
                setTimeout(() => {
                    if (successMsg.parentNode) successMsg.remove();
                }, 5000);
            }, 1200);
        });
    }

    // ---------- 10. Active nav highlight on scroll (for single-page anchors) ----------
    // (Not needed for multi-page site, but kept for future use)

    console.log('Khan Traders website — Refreshed v2.0 loaded successfully.');
});