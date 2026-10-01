import { Search, SlidersHorizontal } from "lucide-react";
import type { PropertyType } from "../data/listings";

export interface SearchFilters { area: string; type: "All types" | PropertyType; beds: number; maxPrice: number; }

export default function SearchBar({ filters, setFilters, onSearch }: { filters: SearchFilters; setFilters: (filters: SearchFilters) => void; onSearch: () => void }) {
  return <form className="search-bar" role="search" onSubmit={event => { event.preventDefault(); onSearch(); }}>
    <label className="search-location"><span>LOCATION</span><input value={filters.area} onChange={event => setFilters({ ...filters, area: event.target.value })} placeholder="City or neighborhood" aria-label="City or neighborhood" /></label>
    <label><span>PROPERTY TYPE</span><select value={filters.type} onChange={event => setFilters({ ...filters, type: event.target.value as SearchFilters["type"] })}><option>All types</option><option>House</option><option>Condo</option><option>Townhome</option></select></label>
    <label><span>MIN. BEDROOMS</span><select value={filters.beds} onChange={event => setFilters({ ...filters, beds: Number(event.target.value) })}><option value={0}>Any beds</option><option value={2}>2+ beds</option><option value={3}>3+ beds</option><option value={4}>4+ beds</option></select></label>
    <label><span>MAX. PRICE</span><select value={filters.maxPrice} onChange={event => setFilters({ ...filters, maxPrice: Number(event.target.value) })}><option value={0}>Any price</option><option value={1500000}>Up to $1.5m</option><option value={2000000}>Up to $2m</option><option value={2500000}>Up to $2.5m</option></select></label>
    <button className="search-submit" type="submit"><Search size={18} /> Search homes</button>
    <SlidersHorizontal className="search-accent" aria-hidden="true" />
  </form>;
}
