import { BedDouble, Check, MapPin, Ruler, X } from "lucide-react";
import { agents, formatPrice, type Listing } from "../data/listings";
import useDialogFocus from "./useDialogFocus";

export default function PropertyDialog({
  listing,
  onClose,
  onEnquire,
}: {
  listing: Listing;
  onClose: () => void;
  onEnquire: () => void;
}) {
  const dialogRef = useDialogFocus(onClose);
  const agent = agents.find((person) => person.id === listing.agentId)!;
  return (
    <div
      className="modal-scrim"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="property-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-title"
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close property details"
        >
          <X />
        </button>
        <img
          className="dialog-image"
          src={listing.image}
          alt={`${listing.title} interior or exterior`}
        />
        <div className="dialog-content">
          <p className="eyebrow">
            {listing.type} · {listing.area}
          </p>
          <h2 id="property-title">{listing.title}</h2>
          <p className="dialog-address">
            <MapPin size={16} />
            {listing.address}
          </p>
          <strong className="dialog-price">{formatPrice(listing.price)}</strong>
          <div className="dialog-facts">
            <span>
              <BedDouble size={18} />
              {listing.beds} beds
            </span>
            <span>{listing.baths} baths</span>
            <span>
              <Ruler size={18} />
              {listing.sqft.toLocaleString()} sq ft
            </span>
          </div>
          <p>{listing.description}</p>
          <h3>At a glance</h3>
          <ul>
            {listing.features.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <div className="dialog-agent">
            <span>{agent.initials}</span>
            <div>
              <b>{agent.name}</b>
              <small>{agent.role}</small>
            </div>
          </div>
          <button className="primary-button" onClick={onEnquire}>
            Enquire about this home
          </button>
        </div>
      </div>
    </div>
  );
}
