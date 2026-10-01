import { BedDouble, Heart, MapPin, MoveUpRight, Ruler } from "lucide-react";
import { formatPrice, type Listing } from "../data/listings";

export default function ListingCard({
  listing,
  saved,
  onSave,
  onOpen,
}: {
  listing: Listing;
  saved: boolean;
  onSave: () => void;
  onOpen: () => void;
}) {
  return (
    <article className="listing-card">
      <div className="listing-image">
        <img
          src={listing.image}
          alt={`${listing.title} property`}
          loading="lazy"
        />
        <span className="listing-tag">{listing.tag}</span>
        <button
          className={saved ? "save-button saved" : "save-button"}
          onClick={onSave}
          aria-label={
            saved
              ? `Remove ${listing.title} from saved homes`
              : `Save ${listing.title}`
          }
          aria-pressed={saved}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="listing-content">
        <div className="listing-title-row">
          <div>
            <p>
              {listing.type.toUpperCase()} · {listing.area.toUpperCase()}
            </p>
            <h3>{listing.title}</h3>
          </div>
          <strong>{formatPrice(listing.price)}</strong>
        </div>
        <p className="listing-address">
          <MapPin size={14} />
          {listing.address}
        </p>
        <div className="listing-bottom">
          <span>
            <BedDouble size={17} />
            {listing.beds} beds
          </span>
          <span>{listing.baths} baths</span>
          <span>
            <Ruler size={17} />
            {listing.sqft.toLocaleString()} sq ft
          </span>
          <button
            onClick={onOpen}
            aria-label={`View details for ${listing.title}`}
          >
            <MoveUpRight size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
