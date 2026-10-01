import { ArrowRight, Compass, Heart, Search } from "lucide-react";
import { useMemo, useState } from "react";
import AgentSection from "./components/AgentSection";
import EnquiryDialog from "./components/EnquiryDialog";
import Header from "./components/Header";
import ListingCard from "./components/ListingCard";
import PropertyDialog from "./components/PropertyDialog";
import RedesignStory from "./components/RedesignStory";
import SearchBar, { type SearchFilters } from "./components/SearchBar";
import { listings, type Listing } from "./data/listings";

const initialFilters: SearchFilters = { area: "", type: "All types", beds: 0, maxPrice: 0 };

export default function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [applied, setApplied] = useState(initialFilters);
  const [selected, setSelected] = useState<Listing | null>(null);
  const [enquiry, setEnquiry] = useState<Listing | null | "general">(null);
  const [saved, setSaved] = useState<number[]>([]);
  const filtered = useMemo(() => listings.filter(home => (!applied.area || `${home.area} ${home.address} ${home.title}`.toLowerCase().includes(applied.area.toLowerCase())) && (applied.type === "All types" || home.type === applied.type) && home.beds >= applied.beds && (!applied.maxPrice || home.price <= applied.maxPrice)), [applied]);
  const toggleSaved = (id: number) => setSaved(current => current.includes(id) ? current.filter(value => value !== id) : [...current, id]);
  const showEnquiry = (listing: Listing | "general") => { setSelected(null); setEnquiry(listing); };
  const search = () => { setApplied(filters); document.getElementById("homes")?.scrollIntoView({ behavior: "smooth" }); };

  return <><Header onContact={() => showEnquiry("general")} /><main><section className="hero"><img src="/images/coastal-house.png" alt="Contemporary waterfront home at sunset"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow">CURATED HOMES · GREATER SEATTLE</p><h1>Find a place that <em>feels like yours.</em></h1><p>Remarkable homes, thoughtful guidance, and a clearer way to make your next move.</p><a href="#homes">Explore the collection <ArrowRight size={18}/></a></div><div className="hero-index">01 / 03 <span>THE WATERLINE HOUSE · BAINBRIDGE ISLAND</span></div></section>
    <div className="search-wrap"><SearchBar filters={filters} setFilters={setFilters} onSearch={search}/></div>
    <section className="homes-section" id="homes"><div className="section-heading"><div><p className="eyebrow">HOMES TO CONSIDER</p><h2>Spaces for what’s next.</h2></div><p>Browse a considered collection of homes across the city, the islands, and the places in between.</p></div><div className="results-bar"><span>{filtered.length} {filtered.length === 1 ? "home" : "homes"} found</span><span><Heart size={15}/>{saved.length} saved</span></div>{filtered.length ? <div className="listing-grid">{filtered.map(listing => <ListingCard key={listing.id} listing={listing} saved={saved.includes(listing.id)} onSave={() => toggleSaved(listing.id)} onOpen={() => setSelected(listing)}/>)}</div> : <div className="empty-results"><Search size={31}/><h3>No homes match those filters.</h3><p>Try a broader location or a higher price range.</p><button onClick={() => { setFilters(initialFilters); setApplied(initialFilters); }}>Clear filters</button></div>}</section>
    <section className="approach-section" id="approach"><div><p className="eyebrow">THE NORTHSTAR WAY</p><h2>A search shaped around your life.</h2><p>A home is more than its square footage. We focus on the details that make everyday life feel right, and make the path to a decision easier to follow.</p><button onClick={() => showEnquiry("general")}>Talk to an advisor <ArrowRight size={18}/></button></div><div className="approach-art"><Compass size={190} strokeWidth={.7}/><span>LOCAL KNOWLEDGE<br/>CLEAR DIRECTION</span></div></section>
    <AgentSection onContact={() => showEnquiry("general")}/><RedesignStory/><section className="closing-cta"><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Let’s find what home means to you.</h2><button onClick={() => showEnquiry("general")}>Start a conversation <ArrowRight size={18}/></button></section></main>
    <footer className="site-footer"><a href="#top">✦ NORTHSTAR REALTY</a><p>Fictional brokerage and listings created for a portfolio redesign demonstration.</p><span>© 2026 Northstar Realty</span></footer>
    {selected && <PropertyDialog listing={selected} onClose={() => setSelected(null)} onEnquire={() => showEnquiry(selected)}/>}
    {enquiry && <EnquiryDialog key={enquiry === "general" ? "general" : enquiry.id} listing={enquiry === "general" ? null : enquiry} onClose={() => setEnquiry(null)}/>}
  </>;
}
