import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


import logo from "./assets/logo.png";
import heroImage from "./assets/hero2.jpg";
import winnieImage from "./assets/winnie.jpg";
import transformationImage from "./assets/transformation.jpeg";
import lifestyle1 from "./assets/lifestyle-1.jpeg";
import lifestyle2 from "./assets/lifestyle-2.jpg";
import programImage from "./assets/program.jpg";
import gutHealthImage from "./assets/gut-health.jpg";
import recipeBook from "./assets/recipe-book.jpg";
import workbook from "./assets/workbook.jpg";
import bundleImage from "./assets/bundle.jpg";
import eventsImage from "./assets/events.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#E4EEF0] text-[#16232B] font-sans antialiased selection:bg-[#FF5804] selection:text-[#E4EEF0]">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FF5804]/95 backdrop-blur-md border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xs uppercase tracking-[0.2em] font-bold text-[#16232B] hover:text-white transition-colors py-2"
          >
            {isMenuOpen ? "Close —" : "Menu +"}
          </button>
<a href="/" className="flex items-center">
  <img 
    src={logo} 
    alt="Winnie Fitness Logo" 
    className="h-10 w-10 object-contain rounded-full border-2 bg-black border-[#FF5804] p-1" 
  />
</a>

          <a 
            href="#consultation" 
            className="hidden sm:inline-block text-xs uppercase tracking-[0.15em] font-semibold text-[#E4EEF0] bg-[#075056] hover:bg-[#FF5804] px-6 py-3 transition-all duration-300 rounded-xs shadow-sm"
          >
            Book 1:1 Consultation
          </a>
        </div>

        {/* Mobile / Slide Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#FF5804]] border-b border-[#075056] overflow-hidden"
            >
              <ul className="max-w-7xl mx-auto px-6 sm:px-10 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-xs uppercase tracking-[0.15em] font-medium text-[#E4EEF0]">
                {[
                  ['Credibility', '#credibility'],
                  ['About Winnie', '#about'],
                  ['Approach', '#approach'],
                  ['Program Structure', '#program'],
                  ['Myth Busting', '#myths'],
                  ['Gut Health', '#gut-health'],
                  ['Bundle Offer', '#bundle'],
                  ['Events & Coaching', '#events'],
                  ['FAQ', '#faq']
                ].map(([label, href]) => (
                  <li key={label}>
                    <a 
                      href={href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-black transition-all"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-14 pb-16 lg:py-18 border-b border-[#075056]/15 bg-[#E4EEF0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Text Content Block */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
              <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-bold text-[#075056] bg-[#FF5804]/10 px-3 py-1 border border-[#FF5804]/30 rounded-xs">
                Nutrition · Fitness · Sustainable Change
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#16232B] tracking-tight">
                Fix What’s <span className="italic font-light text-[#FF5804]">Actually Driving</span> Your Weight Gain
              </h1>

              <p className="text-base sm:text-lg text-[#16232B]/80 font-light leading-relaxed max-w-xl">
                Stop starving yourself. Rebalance your blood sugar, lower insulin, and rebuild your metabolism with sustainable, high-protein nutrition.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#FF5804] hover:bg-[#075056] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all text-center rounded-xs shadow-sm">
                  Start Your Journey
                </button>
                <a 
                  href="#consultation" 
                  className="w-full sm:w-auto px-8 py-4 border border-[#075056] hover:bg-[#075056] hover:text-[#E4EEF0] text-[#075056] text-xs uppercase tracking-[0.15em] font-bold text-center transition-all rounded-xs"
                >
                  Book 1:1 Consultation
                </a>
              </div>
            </div>

            {/* Featured Image Card */}
            <div className="w-full lg:col-span-5" data-aos="fade-up" data-aos-delay="150">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] bg-[#075056]/10 border border-[#075056]/20 overflow-hidden shadow-sm rounded-xs">
                <img 
                  src={heroImage} 
                  alt="Winnie Fitness Overview" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CREDIBILITY METRICS & TRANSFORMATION SHOWCASE */}
      <section id="credibility" className="py-20 bg-[#075056] text-[#E4EEF0] border-b border-[#075056]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#075056]">
            
            <div className="pt-6 md:pt-0 md:pr-8 space-y-2" data-aos="fade-up">
              <span className="font-serif text-4xl sm:text-5xl font-normal text-[#FF5804] ">9-Week</span>
              <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#E4EEF0]/80">Guided Reset System</h3>
            </div>

            <div className="pt-6 md:pt-0 md:px-8 space-y-2" data-aos="fade-up" data-aos-delay="100">
              <span className="font-serif text-4xl sm:text-5xl font-normal text-[#FF5804] ">115-Page</span>
              <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#E4EEF0]/80">Practical Implementation Workbook</h3>
            </div>

            <div className="pt-6 md:pt-0 md:pl-8 space-y-2" data-aos="fade-up" data-aos-delay="200">
              <span className="font-serif text-4xl sm:text-5xl font-normal text-[#FF5804] ">1:1 Support</span>
              <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#E4EEF0]/80">Personal Consultations & Coaching</h3>
            </div>

          </div>

          {/* Transformation Highlight Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#075056]/30 border border-[#075056] p-6 sm:p-8 rounded-xs" data-aos="fade-up">
            <div className="lg:col-span-5 aspect-[16/10] bg-[#16232B] overflow-hidden border border-[#075056]/50">
              <img 
                src={transformationImage} 
                alt="Client Transformations" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF5804]">Real Results</span>
              <h3 className="font-serif text-2xl text-[#E4EEF0]">Proven Metabolic Shifts</h3>
              <p className="text-xs sm:text-sm text-[#E4EEF0]/80 font-light leading-relaxed">
                Sustainable fat loss is not about starvation; it is the natural byproduct of hormonal balance, insulin regulation, and consistent high-protein nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT WINNIE */}
      <section id="about" className="py-24 border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-20">
          
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <blockquote className="font-serif text-2xl sm:text-4xl italic text-[#16232B] leading-relaxed">
              "I don't believe in starving yourself. I believe in understanding your body."
            </blockquote>
            <cite className="block mt-4 text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804] not-italic">
              — Winnie
            </cite>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6" data-aos="fade-up">
              <div className="rounded-none overflow-hidden bg-[#075056]/10 aspect-[3/4] border border-[#075056]/20">
                <img 
                  src={winnieImage} 
                  alt="Winnie Founder" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Lifestyle Image Pair Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#075056]/10 border border-[#075056]/20 overflow-hidden">
                  <img 
                    src={lifestyle1} 
                    alt="Winnie Lifestyle 1" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="aspect-square bg-[#075056]/10 border border-[#075056]/20 overflow-hidden">
                  <img 
                    src={lifestyle2} 
                    alt="Winnie Lifestyle 2" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8" data-aos="fade-up" data-aos-delay="150">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal tracking-tight">
                I’ve Been Where You Are.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#16232B]/80 font-light leading-relaxed">
                <p>
                  Hi, I'm Winnie, and I know exactly what it feels like when your body feels like it's fighting you.
                </p>
                <p>
                  After I had my baby, postpartum, with PCOS, I gained 24kg. Unlike the "snap back" stories you hear everywhere, nothing was shifting it. Not the intense workouts. Not the sheer effort I had always relied on before. Nothing worked.
                </p>
                <p>
                  That’s when I stopped guessing and started studying what my body actually needed. I dove into blood sugar balance, insulin regulation, intermittent fasting, and training in a fasted state. Almost a year later, I had lost 26kg, let go of stubborn belly fat I couldn’t shake for years, and rebuilt a stronger body—all while managing PCOS, not pretending it didn't exist.
                </p>
                <p className="font-semibold text-[#075056]">
                  That is the exact program I built. It wasn't written from a textbook; it was forged by living through it.
                </p>
              </div>

              <div className="p-8 bg-[#075056] text-[#E4EEF0] border border-[#075056] space-y-4 rounded-xs shadow-sm">
                <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-[#FF5804]">
                  This Works at Every Stage of Life
                </h3>
                <p className="text-xs sm:text-sm text-[#E4EEF0]/90 font-light leading-relaxed">
                  Whether you are in your 20s, 30s, 40s, 50s, or 60s+, this approach is built for you (recommended for ages 21+). It is especially powerful if you are navigating menopause or andropause, where a high-protein approach preserves vital muscle mass, supports your metabolism, boosts energy, and improves sleep quality.
                </p>
                <p className="text-xs sm:text-sm text-[#E4EEF0]/90 font-light leading-relaxed">
                  Your body's needs change with every decade—for men and women alike. This program changes with you.
                </p>
                <div className="pt-2">
                  <button className="px-6 py-3 bg-[#FF5804] hover:bg-[#16232B] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs">
                    Start Your Own Journey
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* THE APPROACH */}
      <section id="approach" className="py-24 bg-[#075056]/5 border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
          
          <div className="max-w-3xl space-y-4" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">The Methodology</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal leading-tight">
              You’ve Tried the Diets. You’倍 Tried the Gym. So Why Isn’t the Weight Coming Off?
            </h2>
            <p className="text-sm sm:text-base text-[#16232B]/80 font-light leading-relaxed">
              Most weight loss advice treats your body like a simple calculator: eat less, move more, done. If it were really that simple, you would have solved this a long time ago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 bg-[#E4EEF0] border border-[#075056]/20 space-y-6 rounded-xs shadow-sm" data-aos="fade-up">
              <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-[#075056]">Three Fundamental Drivers</h3>
              <ul className="space-y-4 font-serif text-xl sm:text-2xl text-[#16232B] divide-y divide-[#075056]/15">
                <li className="pt-2">1. Balancing your blood sugar</li>
                <li className="pt-4">2. Bringing down your insulin levels</li>
                <li className="pt-4">3. Eating enough protein</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#16232B]/70 font-light leading-relaxed">
                When these three factors are out of balance, your body actively holds onto fat and fights your efforts—no matter how disciplined or strong-willed you are.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-[#E4EEF0] border border-[#075056]/20 space-y-6 rounded-xs shadow-sm" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-[#075056]">The Two-Part System</h3>
              <ol className="space-y-6 text-sm sm:text-base text-[#16232B]/80 font-light leading-relaxed">
                <li>
                  <strong className="block text-[#075056] font-semibold mb-1">1. Phased Nutrition Roadmap</strong>
                  A structured weight loss program built around real food and realistic habits—zero extreme restriction.
                </li>
                <li>
                  <strong className="block text-[#075056] font-semibold mb-1">2. Gut Health Support</strong>
                  A practical gut health system designed to ease bloating, indigestion, and digestive discomfort.
                </li>
              </ol>
              <div className="pt-4">
                <button className="w-full py-4 bg-[#FF5804] hover:bg-[#075056] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs">
                  Get My Weight Loss Program
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section id="program" className="py-24 border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 space-y-16">
          
          <div className="text-center space-y-3" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#075056]">Architecture</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal">How the Coaching Program Works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 sm:p-10 border border-[#075056]/20 bg-[#E4EEF0] space-y-4 rounded-xs shadow-sm" data-aos="fade-up">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#E4EEF0] bg-[#075056] px-3 py-1 rounded-xs">
                  Phase 1
                </span>
                <h3 className="font-serif text-2xl text-[#16232B]">The 9-Week Reset (Detox Phase)</h3>
                <p className="text-xs sm:text-sm text-[#16232B]/80 font-light leading-relaxed">
                  We begin by eliminating the specific foods that disrupt your gut microflora and trigger insulin and blood sugar spikes—the quiet culprits keeping your body stuck in "fat-storage" mode. Over these 9 weeks, your insulin levels normalize, your gut microflora begins to heal, and your body finally releases stored fat.
                </p>
              </div>

              <div className="p-8 sm:p-10 border border-[#075056]/20 bg-[#E4EEF0] space-y-4 rounded-xs shadow-sm" data-aos="fade-up" data-aos-delay="150">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#E4EEF0] bg-[#FF5804] px-3 py-1 rounded-xs">
                  Phase 2
                </span>
                <h3 className="font-serif text-2xl text-[#16232B]">The Sustainable 9-Week Plan</h3>
                <p className="text-xs sm:text-sm text-[#16232B]/80 font-light leading-relaxed">
                  Once your metabolic foundation is reset, we transition into a long-term plan designed to last for years—one that intentionally includes the foods you love. A plan that is too restrictive to live with isn't a strategy; it's just a countdown until you give up.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/5] bg-[#075056]/10 border border-[#075056]/20 overflow-hidden rounded-xs" data-aos="fade-up" data-aos-delay="200">
              <img 
                src={programImage} 
                alt="Program Materials" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

          </div>

          <div className="text-center" data-aos="fade-up">
            <button className="px-8 py-4 bg-[#FF5804] hover:bg-[#075056] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs shadow-sm">
              Get Started Today
            </button>
          </div>

        </div>
      </section>

      {/* MYTH-BUSTING SECTION */}
      <section id="myths" className="py-24 bg-[#16232B] text-[#E4EEF0] border-b border-[#075056]/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
          
          <div className="text-center space-y-2" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">Clarity</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#E4EEF0] font-normal">Let’s Set the Record Straight</h2>
          </div>

          <div className="space-y-6" data-aos="fade-up">
            {[
              {
                q: "Myth 1: Isn't losing weight just about starving yourself?",
                a: "No, and this myth derails more health journeys than anything else. Starvation-style dieting might show a brief drop on the scale in week one, but it slows your metabolism, causes muscle loss, and triggers rebound binges. Lasting weight loss comes from nourishing your body correctly."
              },
              {
                q: "Myth 2: What about intermittent fasting? Does it actually work?",
                a: "Intermittent fasting can be a helpful tool, but it isn't magic. It won't fix poor gut health or undo a diet full of ultra-processed foods. If unguided, it can leave you fatigued and hormonally stuck."
              },
              {
                q: "Myth 3: If I just eat less, won't I lose weight?",
                a: "Eating less without eating right almost always backfires. Cravings spike, energy crashes, and your body adapts by slowing down. The goal is eating the right food structured for your metabolism."
              },
              {
                q: "Myth 4: Do I have to give up chapati, ugali, and everything I love forever?",
                a: "Absolutely not. Deciding you can never eat local staples leads to burnout. My program uses phased nutrition with built-in flexibility for planned enjoyment once you are in the sustainable phase."
              }
            ].map((myth, idx) => (
              <details key={idx} className="group p-6 bg-[#075056]/20 border border-[#075056] cursor-pointer rounded-xs">
                <summary className="font-serif text-lg sm:text-xl text-[#E4EEF0] flex justify-between items-center list-none">
                  <span>{myth.q}</span>
                  <span className="text-xs font-sans text-[#FF5804] group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pt-4 text-xs sm:text-sm text-[#E4EEF0]/80 font-light leading-relaxed border-t border-[#075056]/50 mt-4">
                  <strong className="text-[#FF5804] font-semibold block mb-1">The Reality:</strong>
                  {myth.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <a 
              href="#consultation" 
              className="inline-block px-8 py-4 border border-[#FF5804] hover:bg-[#FF5804] hover:text-[#E4EEF0] text-[#FF5804] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs"
            >
              Book a Consultation to Find Out What's Right for You
            </a>
          </div>

        </div>
      </section>

      {/* THE GUT HEALTH SOLUTION */}
      <section id="gut-health" className="py-24 border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
          
          <div className="max-w-3xl space-y-4" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">Microbiome Care</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal">The Missing Piece: Your Gut Health</h2>
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#075056] pt-2">
              Bloating after meals • Constipation • Indigestion • Irregular bowels • Constant sugar cravings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6" data-aos="fade-up">
              <p className="text-sm sm:text-base text-[#16232B]/80 font-light leading-relaxed">
                These aren't random annoyances—they are direct signals that your gut microflora needs attention. My Gut Health Recipe Book teaches you how to create your own probiotics, prebiotics, and digestive enzymes right at home using simple local ingredients.
              </p>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#16232B]">Inside, you will learn practical recipes to relieve:</p>
                <ul className="text-xs sm:text-sm text-[#16232B]/80 font-light space-y-2 list-disc list-inside">
                  <li>Bloating after daily meals</li>
                  <li>Constipation and irregular bowel movements</li>
                  <li>Persistent indigestion</li>
                  <li>Chronic low energy caused by poor nutrient absorption</li>
                </ul>
              </div>

              <div className="p-4 bg-[#075056]/10 border border-[#075056]/20 text-xs text-[#16232B]/70 rounded-xs">
                <strong>Disclaimer:</strong> This is a practical, hands-on recipe guide, not a clinical medical treatment. If you have a diagnosed digestive condition (such as ulcers, SIBO, or IBS), please consult your medical doctor before starting.
              </div>

              <button className="px-8 py-4 bg-[#FF5804] hover:bg-[#075056] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs shadow-sm">
                Get the Gut Health Recipe Book
              </button>
            </div>

            <div className="rounded-none overflow-hidden bg-[#075056]/10 aspect-[4/3] border border-[#075056]/20" data-aos="fade-up" data-aos-delay="150">
              <img 
                src={gutHealthImage} 
                alt="Gut Health Solutions" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

          </div>

        </div>
      </section>

      {/* THE BUNDLE OFFER */}
      <section id="bundle" className="py-24 bg-[#075056]/5 border-b border-[#075056]/15">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-12" data-aos="fade-up">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">Complete System</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal">Save When You Bundle</h2>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#075056]">One Workbook. One Recipe Book. One Goal: A Body That Works With You.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="bg-[#E4EEF0] border border-[#075056]/20 flex flex-col justify-between rounded-xs overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-[#075056]/10 border-b border-[#075056]/15 overflow-hidden">
                <img 
                  src={workbook} 
                  alt="Weight Loss Workbook" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-[#16232B]">Weight Loss Workbook</h3>
                <p className="text-xs text-[#16232B]/80 font-light leading-relaxed">
                  Your practical, no-starvation roadmap containing meal guidance, habit-building strategies, and lifestyle integration.
                </p>
              </div>
            </div>

            <div className="bg-[#E4EEF0] border border-[#075056]/20 flex flex-col justify-between rounded-xs overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-[#075056]/10 border-b border-[#075056]/15 overflow-hidden">
                <img 
                  src={recipeBook} 
                  alt="Gut Health Recipe Book" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-[#16232B]">Gut Health Recipe Book</h3>
                <p className="text-xs text-[#16232B]/80 font-light leading-relaxed">
                  Home-made probiotic, prebiotic, and enzyme recipes designed to eliminate bloating and indigestion naturally.
                </p>
              </div>
            </div>

            <div className="bg-[#E4EEF0] border-2 border-[#FF5804] flex flex-col justify-between rounded-xs overflow-hidden shadow-md relative">
              <div className="aspect-[4/3] bg-[#075056]/10 border-b border-[#075056]/15 overflow-hidden">
                <img 
                  src={bundleImage} 
                  alt="Full Bundle Set" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E4EEF0] bg-[#FF5804] px-2 py-0.5 rounded-xs inline-block">Best Value</span>
                <h3 className="font-serif text-xl text-[#16232B]">Workbook + Recipe Bundle</h3>
                <p className="text-xs text-[#16232B]/80 font-light leading-relaxed">
                  Combine both resources for a complete, end-to-end metabolic and microbiome transformation plan.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button className="px-8 py-4 bg-[#FF5804] hover:bg-[#075056] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs shadow-sm">
              Grab the Workbook + Recipe Book and Save
            </button>
          </div>

        </div>
      </section>

      {/* EVENTS & 1:1 SUPPORT */}
      <section id="events" className="py-24 border-b border-[#075056]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
          
          <div className="text-center space-y-2" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">Coaching</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal">Let’s Go Further, Together</h2>
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#075056]">Events, Community & Direct Coaching</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:h-full bg-[#075056]/10 border border-[#075056]/20 overflow-hidden rounded-xs" data-aos="fade-up">
              <img 
                src={eventsImage} 
                alt="Community Coaching Events" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#E4EEF0] border border-[#075056]/20 flex flex-col justify-between space-y-8 rounded-xs shadow-sm" data-aos="fade-up">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-[#16232B]">Group Events & Accountability</h3>
                  <p className="text-xs sm:text-sm text-[#16232B]/80 font-light leading-relaxed">
                    Live online coaching sessions via Google Meet and in-person hands-on workshops designed to build community and keep you on track.
                  </p>
                </div>
                <button className="w-full py-4 border border-[#075056] hover:bg-[#075056] hover:text-[#E4EEF0] text-[#075056] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs">
                  Join the Next Event
                </button>
              </div>

              <div id="consultation" className="p-8 bg-[#075056] text-[#E4EEF0] flex flex-col justify-between space-y-8 rounded-xs shadow-md" data-aos="fade-up" data-aos-delay="150">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-[#E4EEF0]">1:1 Coaching Consultations</h3>
                  <p className="text-xs sm:text-sm text-[#E4EEF0]/80 font-light leading-relaxed">
                    Direct access for tailored guidance, blood work analysis, personalized macronutrient adjustments, and individualized metabolic troubleshooting.
                  </p>
                </div>
                <button className="w-full py-4 bg-[#FF5804] hover:bg-[#16232B] text-[#E4EEF0] text-xs uppercase tracking-[0.15em] font-bold transition-all rounded-xs">
                  Book Your 1:1 Consultation
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-24 bg-[#075056]/5 border-b border-[#075056]/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
          
          <div className="text-center space-y-2" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5804]">Support</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4" data-aos="fade-up">
            {[
              {
                q: "Is this program suitable for men as well?",
                a: "Yes. Insulin regulation, high-protein nutrition, and gut microbiome optimization apply equally to men and women looking to shed fat and retain muscle mass."
              },
              {
                q: "What age group is this program intended for?",
                a: "The program is recommended for adults aged 21 and above. It is especially effective for adults navigating hormonal shifts in their 30s, 40s, 50s, and beyond."
              },
              {
                q: "Do I need special or expensive exotic foods?",
                a: "Not at all. The entire system is built around easily accessible, whole, local ingredients found in standard grocery stores and local markets."
              },
              {
                q: "Are the digital products delivered immediately?",
                a: "Yes. Access details for your workbooks and recipe guides are emailed instantly upon purchase."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group p-6 bg-[#E4EEF0] border border-[#075056]/20 cursor-pointer rounded-xs">
                <summary className="font-serif text-lg text-[#16232B] flex justify-between items-center list-none">
                  <span>{faq.q}</span>
                  <span className="text-xs font-sans text-[#FF5804] group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pt-4 text-xs sm:text-sm text-[#16232B]/80 font-light leading-relaxed border-t border-[#075056]/15 mt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
<footer className="py-16 bg-[#16232B] text-[#E4EEF0]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#075056]/40 pb-12">
    <div>
      <a href="/" className="font-serif text-2xl tracking-tight font-bold text-[#E4EEF0]">
        Winnie<span className="italic font-normal text-[#FF5804]">Fitness</span>
      </a>
      <p className="text-xs text-[#E4EEF0]/70 font-light mt-2 max-w-sm">
        Sustainable fat loss and microbiome care through actionable, science-informed nutrition.
      </p>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 mt-6">
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/winniefitness.ke/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="p-2 bg-[#075056]/30 hover:bg-[#FF5804] text-[#E4EEF0] rounded-full transition-all duration-300"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a 
          href="https://www.youtube.com/@WinnieFitness" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="YouTube"
          className="p-2 bg-[#075056]/30 hover:bg-[#FF5804] text-[#E4EEF0] rounded-full transition-all duration-300"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* TikTok */}
        <a 
          href="https://www.tiktok.com/@winniefitness.ke" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="TikTok"
          className="p-2 bg-[#075056]/30 hover:bg-[#FF5804] text-[#E4EEF0] rounded-full transition-all duration-300"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.28 1.56-1.22 2.55.03.95.53 1.86 1.34 2.37.82.53 1.88.58 2.74.15.82-.4 1.39-1.25 1.48-2.16.03-2.22.01-4.44.01-6.66V.02z"/>
          </svg>
        </a>

        
      </div>
    </div>

    <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.15em] text-[#E4EEF0]/80">
      <a href="#about" className="text-[#FF5804] transition-colors">About</a>
      <a href="#program" className="text-[#FF5804] transition-colors">Program</a>
      <a href="#gut-health" className="text-[#FF5804] transition-colors">Gut Health</a>
      <a href="#bundle" className="text-[#FF5804] transition-colors">Bundle</a>
      <a href="#consultation" className="text-[#FF5804] transition-colors">1:1 Coaching</a>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#E4EEF0]/50 gap-4">
    <p>© {new Date().getFullYear()} Winnie Fitness. All rights reserved.</p>
    <p>Designed for Sustainable Health</p>
  </div>
</footer>

    </div>
  );
}

export default App;