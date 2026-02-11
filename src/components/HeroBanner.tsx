import heroImage from "@/assets/nashville-hero.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Nashville Tennessee skyline at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/60" />
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 drop-shadow-lg">
          Nashville TN
        </h1>
        <p className="text-sm md:text-base font-heading font-semibold uppercase tracking-[0.2em] text-primary">
          Crawl Space Encapsulation • Vapor Barrier • Mold Removal • Dehumidifier
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
