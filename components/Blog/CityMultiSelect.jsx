"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";

export default function CityMultiSelect({ cities, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  //close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(city) {
    if (selected.includes(city)) {
      onChange(selected.filter((c) => c !== city));
    } else {
      onChange([...selected, city]);
    }
  }

  //summary shown on the closed dropdown button
  const label =
    selected.length === 0
      ? "All cities"
      : selected.length <= 2
        ? selected.join(", ")
        : `${selected.length} cities selected`;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="border-terracotta flex w-full items-center justify-between gap-2 rounded-2xl border-1 px-3 py-2 md:w-fit"
      >
        <span className="flex items-center gap-1">
          <MapPin className="size-4" />
          <span className={selected.length ? "" : "text-gray-500"}>
            {label}
          </span>
        </span>
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="border-terracotta absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl border-1 bg-white py-1 shadow-lg">
          <li
            onClick={() => onChange([])}
            className="hover:bg-warm-stone flex cursor-pointer items-center justify-between px-3 py-2"
          >
            <span>All cities</span>
            {selected.length === 0 && (
              <Check className="text-terracotta size-4" />
            )}
          </li>
          {cities.map((city) => {
            const isSelected = selected.includes(city);
            return (
              <li
                key={city}
                onClick={() => toggle(city)}
                className="hover:bg-warm-stone flex cursor-pointer items-center justify-between px-3 py-2"
              >
                <span className={isSelected ? "font-semibold" : ""}>
                  {city}
                </span>
                {isSelected && <Check className="text-terracotta size-4" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
