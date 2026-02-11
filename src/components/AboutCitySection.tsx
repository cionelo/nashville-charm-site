const AboutCitySection = () => {
  return (
    <section className="bg-section-alt py-12 md:py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            About Nashville, Tennessee
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nashville is the capital and most populous city of the U.S. state of Tennessee. The city is the county seat of Davidson County and is located on the Cumberland River. It is the 24th most-populous city in the United States. Named for Francis Nash, a general of the Continental Army during the American Revolutionary War, the city was founded in 1779.
            </p>
            <p>
              A major center for the music industry, especially country music, Nashville is commonly known as "Music City." It is also home to numerous colleges and universities, including the highly prestigious Vanderbilt University. Nashville is sometimes referred to as "Athens of the South" due to the large number of educational institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCitySection;
