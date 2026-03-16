import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: "Our guests were amazed by how beautiful and easy-to-use our digital invitation was. It felt so personal and elegant.",
      couple: "Sarah & James",
      location: "London, UK",
    },
    {
      quote: "We saved so much time and created something truly unique. The template was stunning and our guests loved the RSVP feature.",
      couple: "Priya & Rahul",
      location: "Mumbai, India",
    },
    {
      quote: "The quality of the design exceeded our expectations. It perfectly captured the romantic feel we wanted for our wedding.",
      couple: "Maria & Carlos",
      location: "Barcelona, Spain",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Love Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.couple}
              className="p-8 rounded-lg border border-border bg-card space-y-6 hover:shadow-soft transition-shadow duration-500"
            >
              <p className="text-sm font-light text-muted-foreground leading-relaxed italic font-display">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display text-base font-medium text-foreground">{t.couple}</p>
                <p className="text-xs text-muted-foreground font-light tracking-wide">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
