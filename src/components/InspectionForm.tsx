import { useState } from "react";

const InspectionForm = () => {
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you about service in zip code ${zip}.`);
    setZip("");
  };

  return (
    <div className="bg-card rounded-lg shadow-xl p-6 md:p-8 border border-border">
      <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
        Schedule FREE Inspection
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-semibold text-foreground mb-1"
          >
            What is your Zip Code? <span className="text-destructive">*</span>
          </label>
          <input
            id="zip"
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
            className="w-full border border-input rounded px-3 py-2.5 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter zip code"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-accent-foreground font-heading font-bold py-3 rounded hover:brightness-110 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InspectionForm;
