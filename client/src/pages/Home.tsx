/**
 * Parchment After Dark reminder: the home page moves like a printed dining story:
 * candlelit hero, generous parchment editorial spreads, one dish marquee, and no generic card grid.
 */
import { ArrowDown, ArrowUpRight, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";
import { imageUrls, restaurant } from "@/data/restaurant";

const marqueeDishes = ["Chicken 65", "Mutton Dum Biryani", "Aappam", "Pepper Chicken", "Paneer 65", "Chettinad Fish Curry"];

export default function Home() {
  return (
    <>
      <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(41,38,34,.82) 0%, rgba(41,38,34,.56) 44%, rgba(41,38,34,.2) 100%), url(${imageUrls.hero})` }}>
        <div className="hero-meta"><span>Authentic Chettinad cuisine</span><span>San Diego, CA</span></div>
        <div className="hero-content"><p className="eyebrow">Mira Mesa · Since 1964</p><p className="hero-wordmark">ANJAPPAR</p><h1>Depth of spice.<br /><em>Room at the table.</em></h1><div className="hero-actions"><a href={restaurant.orderUrl} target="_blank" rel="noreferrer" className="ghost-action ghost-action--light">Order online</a><Link href="/Food-Menu" className="text-action">Explore the menu <ArrowUpRight size={16} /></Link></div></div>
        <a className="hero-scroll" href="#story"><ArrowDown size={17} /> Scroll to taste</a>
      </section>

      <section className="marquee-strip" aria-label="Signature dishes"><div className="marquee-track">{[...marqueeDishes, ...marqueeDishes].map((dish, index) => <span key={`${dish}-${index}`}>{dish}<i>✦</i></span>)}</div></section>

      <section id="story" className="home-story section-pad"><div className="story-side-label"><span>01</span><p>From Chennai<br />to San Diego</p></div><div className="story-main"><p className="eyebrow">The Anjappar table</p><h2>Chettinad cooking<br />with <em>distance and depth.</em></h2><div className="story-main-copy"><p>From its roots in Chennai to the table in Mira Mesa, Anjappar is built around the unmistakable character of Chettinad cuisine: layered spice, slow-simmered gravies, fragrant rice, and the familiar generosity of a meal meant to be shared.</p><Link href="/about-us" className="arrow-link">Read our story <ArrowUpRight size={17} /></Link></div></div></section>

      <section className="home-menu-preview"><div className="menu-preview-image"><img src={imageUrls.biryani} alt="Fragrant biryani served in traditional metal bowls on a dark table" /></div><div className="menu-preview-copy"><p className="eyebrow">The full table</p><h2>Find your<br /><em>favorite course.</em></h2><p>Crisp dosas. Deep curries. Slow-cooked biryanis. Thali meals that unfold with every spoonful. The menu moves from bright beginnings to the long, warm finish.</p><Link href="/Food-Menu" className="arrow-link">Explore the menu <ArrowUpRight size={17} /></Link><div className="menu-preview-note"><span>Breakfast is served weekends from 9:30 AM</span><ChevronRight size={16} /></div></div></section>

      <section className="gallery-spread"><div className="gallery-spread-heading"><p className="eyebrow">A close look</p><h2>Made for<br />the <em>shared table.</em></h2></div><div className="gallery-grid">{imageUrls.gallery.map((image, index) => <figure key={image.src} className={`gallery-image gallery-image--${index + 1}`}><img src={image.src} alt={image.alt} /></figure>)}</div></section>

      <section className="home-catering" style={{ backgroundImage: `linear-gradient(90deg, rgba(41,38,34,.88), rgba(41,38,34,.48)), url(${imageUrls.catering})` }}><div><p className="eyebrow">Catering and private events</p><h2>Let the table<br />travel <em>beautifully.</em></h2><p>Celebrations, office gatherings, and rooms full of people who expect a memorable meal. We’ll help you shape the occasion around the food.</p><div className="hero-actions"><Link href="/Catering" className="ghost-action ghost-action--light">Explore catering</Link><Link href="/party" className="text-action text-action--light">Plan a party <ArrowUpRight size={16} /></Link></div></div></section>

      <section className="home-review section-pad"><div className="review-intro"><p className="eyebrow">From a Google review</p><div className="review-stars" aria-label="Five stars">{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div><p className="review-author">Balaji K.</p></div><blockquote>“Authentic Indian food. Goat biryani is a must-try, and the Chicken 65, goat paya with aappam, fish polichadu, and soups were all standouts.”</blockquote><a href={restaurant.social.reviews} target="_blank" rel="noreferrer" className="arrow-link">Read more reviews <ArrowUpRight size={17} /></a></section>

      <section className="home-visit"><div className="home-visit-copy"><p className="eyebrow">Come in</p><h2>Every table<br />has a <em>story.</em></h2><p>Meet us in Mira Mesa for a weekday lunch, weekend breakfast, an evening shared over biryani, or a table held for the whole group.</p><div className="home-visit-actions"><a href={restaurant.directionsUrl} target="_blank" rel="noreferrer">9474 Black Mountain Rd <ArrowUpRight size={15} /></a><Link href="/reservations">Reserve a table <ArrowUpRight size={15} /></Link></div></div><img src={imageUrls.dosa} alt="Crisp dosa on a banana leaf with coconut chutney, sambar, and spice powders" /></section>
    </>
  );
}
