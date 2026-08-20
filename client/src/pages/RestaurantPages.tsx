/**
 * Parchment After Dark reminder: pages read as editorial spreads—hero photography, sharp rules,
 * monumental light display type, and purposeful destination links. No soft cards or generic grids.
 */
import { FormEvent, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, CalendarDays, ChevronRight, Clock3, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drinks, foodMenu, imageUrls, promotions, restaurant, type MenuCategory } from "@/data/restaurant";

type Crumb = { label: string; href?: string };

function Breadcrumb({ current }: { current: string }) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: current }];
  return <nav className="breadcrumb" aria-label="Breadcrumb">{crumbs.map((crumb, index) => <span key={crumb.label}>{crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}{index === 0 && <ChevronRight size={13} />}</span>)}</nav>;
}

function PageIntro({ eyebrow, title, text, image, current, children }: { eyebrow: string; title: string; text: string; image?: string; current: string; children?: React.ReactNode }) {
  const pageTone = current.toLowerCase().replace(/\s+/g, "-");
  const routeCue = current === "Menu" ? "A printed selection · San Diego" : current === "Catering" ? "For gatherings, near and far" : current === "Contact" ? "9474 Black Mountain Road · Suite E" : current === "Reservations" ? "A table held with care" : current === "Private Parties" ? "A gathering worth lingering over" : null;
  return (
    <section className={`page-intro page-intro--${pageTone} ${image ? "page-intro--image" : ""}`} style={image ? { backgroundImage: `linear-gradient(rgba(41,38,34,.38), rgba(41,38,34,.78)), url(${image})` } : undefined}>
      <div className="page-intro-inner">
        <Breadcrumb current={current} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro-copy">{text}</p>
        {routeCue && <p className="route-cue"><span aria-hidden="true" />{routeCue}</p>}
        {children}
      </div>
    </section>
  );
}

function Rule() { return <div className="editorial-rule" aria-hidden="true" />; }

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "arrow-link";
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}<ArrowUpRight size={17} /></a>;
  return <Link href={href} className={cls}>{children}<ArrowUpRight size={17} /></Link>;
}

function GhostAction({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "ghost-action";
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function MenuList({ categories, intro }: { categories: MenuCategory[]; intro?: string }) {
  const [active, setActive] = useState(categories[0]?.title ?? "");
  const visible = useMemo(() => active === "All" ? categories : categories.filter((category) => category.title === active), [active, categories]);
  return (
    <section className="menu-section section-pad" aria-label="Menu categories">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">The menu</p><h2>Choose your<br /><em>feast.</em></h2></div>
        {intro && <p className="split-heading-copy">{intro}</p>}
      </div>
      <Rule />
      <div className="menu-filter" aria-label="Menu category filter">
        <button type="button" className={active === "All" ? "is-active" : ""} onClick={() => setActive("All")}>All dishes</button>
        {categories.map((category) => <button type="button" key={category.title} className={active === category.title ? "is-active" : ""} onClick={() => setActive(category.title)}>{category.title}</button>)}
      </div>
      <div className="menu-category-stack">
        {visible.map((category) => (
          <section className="menu-category" key={category.title}>
            <div className="menu-category-title"><p className="eyebrow">{category.title}</p><span>{String(categories.indexOf(category) + 1).padStart(2, "0")}</span></div>
            <div className="menu-items">
              {category.items.map((item) => (
                <article className="menu-item" key={item.name}>
                  <div><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}</div>
                  {item.price && <strong>{item.price}</strong>}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="menu-disclaimer">Prices and availability are subject to change. Please confirm with the restaurant when placing an order.</p>
    </section>
  );
}

function InquiryForm({ subject, compact = false }: { subject: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = [data.get("firstName"), data.get("lastName")].filter(Boolean).join(" ");
    const lines = [
      `Name: ${name || "Not provided"}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Guests / occasion: ${data.get("details") || "Not provided"}`,
      `Message: ${data.get("message") || "Not provided"}`,
    ];
    window.location.href = `mailto:${restaurant.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }
  return (
    <form className={`inquiry-form ${compact ? "inquiry-form--compact" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
        {!compact && <label className="form-span">Guests / occasion<input name="details" placeholder="e.g. 30 guests · family celebration" /></label>}
        <label className="form-span">How can we help?<textarea name="message" rows={4} required /></label>
      </div>
      <div className="form-submit-row">
        <Button type="submit" variant="outline" className="form-button">Send a note to our table <Send size={15} /></Button>
        {sent ? <p className="form-note">Your email app should open with the inquiry details. If it does not, please call {restaurant.phone}.</p> : <p className="form-note">Submitting opens your email app with the details prepared for our team.</p>}
      </div>
    </form>
  );
}

function ContactStrip() {
  return (
    <section className="contact-strip">
      <div><p className="eyebrow">A table waits</p><h2>Find us in<br />Mira Mesa.</h2></div>
      <div className="contact-strip-actions"><a href={restaurant.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions</a><a href={restaurant.phoneHref}><Phone size={17} /> {restaurant.phone}</a></div>
    </section>
  );
}

export function FoodMenuPage() {
  return <><PageIntro current="Menu" eyebrow="The full table" title="From dosa to dum biryani." text="A generous Chettinad menu shaped by deep spice, slow cooking, and dishes made to gather around." image={imageUrls.biryani}><GhostAction href={restaurant.orderUrl} external>Order online</GhostAction></PageIntro><MenuList categories={foodMenu} intro="From crisp starters and South Indian breakfasts to thali meals, curries, and biryanis, choose the pace of your table." /><ContactStrip /></>;
}

export function DrinksPage() {
  return <><PageIntro current="Drinks" eyebrow="Pour something bright" title="A quiet pause between courses." text="House favorites, familiar Indian drinks, and a concise beer list for the table." image={imageUrls.hero}><p className="intro-note">21+ only for alcoholic beverages.</p></PageIntro><MenuList categories={drinks} intro="Cooling, spirited, and made for the rhythm of a South Indian meal." /><ContactStrip /></>;
}

function EventInquiryPage({ current, eyebrow, title, text, image, detail, subject }: { current: string; eyebrow: string; title: string; text: string; image: string; detail: string; subject: string }) {
  return <><PageIntro current={current} eyebrow={eyebrow} title={title} text={text} image={image}><GhostAction href="#inquiry">Start an inquiry</GhostAction></PageIntro><section id="inquiry" className="inquiry-section section-pad"><div className="inquiry-aside"><p className="eyebrow">Make it yours</p><h2>{detail}</h2><p>Tell us the date, occasion, and shape of your gathering. Our team will follow up to help make the meal feel considered from the first course onward.</p><a href={restaurant.phoneHref} className="arrow-link">Speak with the team <ArrowUpRight size={17} /></a></div><InquiryForm subject={subject} /></section><ContactStrip /></>;
}

export function CateringPage() {
  return <EventInquiryPage current="Catering" eyebrow="At your table" title="Chettinad, in generous company." text="Bring the vivid depth of pepper chicken, mutton biryani, and vegetarian specialties to your next San Diego gathering." image={imageUrls.catering} detail="Let the menu travel beautifully." subject="Anjappar catering inquiry" />;
}

export function PartiesPage() {
  return <EventInquiryPage current="Private Parties" eyebrow="Gather well" title="Make room for the whole table." text="Birthdays, baby showers, office functions, and every occasion that tastes better shared." image={imageUrls.catering} detail="A celebration, made delicious." subject="Anjappar private party inquiry" />;
}

export function ReservationsPage() {
  return <EventInquiryPage current="Reservations" eyebrow="Come dine" title="Your table, held with care." text="Share your preferred date, time, guest count, and any special requests. We will follow up to confirm your reservation." image={imageUrls.hero} detail="Settle in for something richly familiar." subject="Anjappar reservation request" />;
}

export function AboutPage() {
  return <><PageIntro current="Our Story" eyebrow="From Chennai to San Diego" title="A table set by Chettinad." text="A cuisine with a remarkable sense of place, prepared with the depth, warmth, and generosity that make guests return." image={imageUrls.hero} /><section className="story-section section-pad"><div className="story-statement"><p className="eyebrow">Since the beginning</p><h2>More than five decades of flavors worth returning to.</h2></div><div className="story-copy"><p>Our humble beginnings started in Chennai over five decades ago, offering the city authentic Chettinad food. As diners sought out its particular depth of spice and home-style warmth, Anjappar expanded to new tables around the world.</p><p>Today, in San Diego, we continue to honor those culinary traditions with fresh ingredients, time-held recipes, and a menu designed for food lovers who want to taste something distinctive.</p><p>Whether the table calls for a crisp dosa, a fragrant biryani, or a complete thali, the intention is simple: serve the food with care and make the dining room feel like it has been waiting for you.</p></div></section><section className="photo-statement"><img src={imageUrls.dosa} alt="Crisp dosa on a banana leaf with coconut chutney and sambar" /><div><p className="eyebrow">The table is open</p><h2>Heritage in every course.</h2><Link href="/Food-Menu" className="arrow-link">Explore the menu <ArrowUpRight size={17} /></Link></div></section><ContactStrip /></>;
}

export function EventsPage() {
  return <><PageIntro current="Events" eyebrow="On the calendar" title="A reason to come together." text="Future restaurant events will be shared here. For a table, a group celebration, or a special dining request, our team is ready to help." image={imageUrls.catering}><GhostAction href="/reservations">Make a reservation</GhostAction></PageIntro><section className="empty-events section-pad"><p className="eyebrow">Upcoming gatherings</p><h2>We are preparing the next occasion.</h2><p>There are no verified upcoming events to share at the moment. Follow us on Instagram for the latest restaurant news, or contact us for a gathering of your own.</p><a href={restaurant.social.instagram} target="_blank" rel="noreferrer" className="arrow-link">Follow @anjappar_sandiego <ArrowUpRight size={17} /></a></section><ContactStrip /></>;
}

export function PromotionsPage() {
  return <><PageIntro current="Promotions" eyebrow="From the kitchen" title="Featured at the table." text="A selection of dishes recently highlighted by our kitchen. Please confirm availability when ordering." image={imageUrls.biryani}><GhostAction href={restaurant.orderUrl} external>Order online</GhostAction></PageIntro><section className="promotion-section section-pad"><p className="eyebrow">Currently featured</p><div className="promotion-list">{promotions.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item}</h2><a href={restaurant.orderUrl} target="_blank" rel="noreferrer" aria-label={`Order ${item}`}><ArrowUpRight size={22} /></a></article>)}</div><p className="menu-disclaimer">Featured-item availability may change. Please confirm when you place your order.</p></section><ContactStrip /></>;
}

export function SpecialsPage() {
  return <><PageIntro current="Specials" eyebrow="On its way" title="A new special is taking shape." text="Our kitchen is updating the specials list. Return soon, or follow along for the next limited table favorite." image={imageUrls.dosa}><GhostAction href="/Food-Menu">See the full menu</GhostAction></PageIntro><ContactStrip /></>;
}

export function ContactPage() {
  return <><PageIntro current="Contact" eyebrow="Come find us" title="Let’s set the table." text="Questions, group plans, and dining requests are all welcome. Reach out directly or prepare an email inquiry below." image={imageUrls.hero} /><section className="contact-page-grid section-pad"><div className="contact-detail"><p className="eyebrow">Visit</p><h2>9474 Black Mountain Road<br />Suite E<br />San Diego, CA 92126</h2><a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" className="arrow-link">Get directions <ArrowUpRight size={17} /></a><Rule /><p className="eyebrow">Reach us</p><a href={restaurant.phoneHref} className="contact-big-link">{restaurant.phone}</a><a href={restaurant.emailHref} className="contact-big-link">{restaurant.email}</a><div className="hours-list">{restaurant.hours.map(([day, time]) => <p key={day}><strong>{day}</strong><span>{time}</span></p>)}</div></div><div><p className="eyebrow">Drop us a note</p><h2 className="contact-form-heading">The details<br />matter.</h2><InquiryForm subject="Anjappar general inquiry" /></div></section></>;
}

export function PrivacyPage() {
  return <><PageIntro current="Privacy Policy" eyebrow="Privacy" title="A clear policy." text="This policy describes information collected when users interact with the Anjappar San Diego website." /><article className="policy section-pad"><p>Any user interacting with www.anjapparsd.com and providing name, address, telephone number, e-mail address, domain name or URL, or any other personally identifiable information permits www.anjapparsd.com to use such information for commercial purposes of its own, including contacting users about products and services which may be of interest.</p><p>For each visitor to our website, our web server recognizes only the visitor's domain name, not the e-mail address. We collect information volunteered by the visitor, such as form submissions and/or site registrations. This information is used to improve the content of our website; it is not shared with other organizations for commercial purposes.</p><p>Any user who does not wish to receive further contacts from www.anjapparsd.com should send a specific request by email marked “Privacy-Urgent” to <a href={restaurant.emailHref}>{restaurant.email}</a>.</p><p>www.anjapparsd.com does not sell, rent, or otherwise disclose its mailing lists to third parties. www.anjapparsd.com reserves the right to modify this policy at any time in its sole and absolute discretion.</p></article></>;
}
