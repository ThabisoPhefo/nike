import { Link } from '@remix-run/react';

export function Hero() {
  return (
    <section className="relative h-[52vh] md:h-[62vh] w-full overflow-hidden mb-[60px] bg-gray-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/hero-section/hero-image.jpg')`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-sm md:text-base text-white mb-6">Just In: Shox TL</h2>
          <h1 className="font-nike-futura text-5xl md:text-6xl font-black text-white mb-3 leading-[1.4] tracking-tighter transform scale-y-[1.18] origin-bottom [text-shadow:_3px_3px_4px_rgb(0_0_0_/_30%)] [-webkit-text-stroke:_2px_rgba(255,255,255,0.9)] font-[900]">
            DISRUPTIVE
            <br />
            <span className="font-nike-futura font-[900] [-webkit-text-stroke:_2px_rgba(255,255,255,0.9)]">BY DESIGN</span>
          </h1>
          <p className="text-white text-sm md:text-base mb-4 max-w-lg">
            Ahead of its time, the iconic Shox TL pushes 
            the boundaries of style with its future-forward silhouette.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
} 