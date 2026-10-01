import { Check, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import type { Listing } from "../data/listings";

export default function EnquiryDialog({
  listing,
  onClose,
}: {
  listing: Listing | null;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (name.trim() && email.includes("@") && message.trim()) setSent(true);
  };
  return (
    <div
      className="modal-scrim"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close enquiry"
        >
          <X />
        </button>
        {sent ? (
          <div className="enquiry-success">
            <span>
              <Check />
            </span>
            <p className="eyebrow">ENQUIRY PREVIEW</p>
            <h2 id="enquiry-title">Thanks, {name.trim().split(" ")[0]}.</h2>
            <p>
              This demonstration captured your request on screen only. No
              message was sent or stored.
            </p>
            <button className="primary-button" onClick={onClose}>
              Back to homes
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2 id="enquiry-title">Tell us what home means to you.</h2>
            <p className="form-intro">
              {listing
                ? `Ask us about ${listing.title}.`
                : "Share your search and a Northstar advisor will help you take the next step."}
            </p>
            <form onSubmit={submit}>
              <label>
                Full name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                How can we help?
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us what you are looking for"
                />
              </label>
              <button className="primary-button" type="submit">
                Preview enquiry
              </button>
              <small>
                Portfolio demo: no backend, booking, or email delivery.
              </small>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
