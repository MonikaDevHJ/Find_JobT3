"use client";
import React, { useState } from "react";

type FiltersState = {
  [key: string]: string[];
};

const Filter = () => {
  // TS knows each key has an array of strings
  const [selectedFilters, setSelectedFilters] = useState<FiltersState>({});
  const [openFilterKey, setOpenFilterKey] = useState<string|null>(null)

  const filters = [
    {
      key: "education",
      name: "Education",
      options: [
        "UnderGradtion",
        "Under Graduation",
        "Post Graduation",
        "10th",
        "12Th",
        "Diploma",
      ],
    },
    {
      key: "location",
      name: "Location",
      options: [
        "Bengalore",
        "Mumbai",
        "Chennai",
        "Delhi",
        "Gujarath",
        "Hassan",
      ],
    },
    {
      key: "salary",
      name: "Salary",
      options: ["0-3 Lakh", "3-6 Lakh", "6-12 Lakh", "12-24 Lakh"],
    },
  ];

  function handleChange(key: string, opt: string, checked: boolean) {
    setSelectedFilters((prev) => {
      const current = prev[key] || [];
      let updatedForKey: string[];

      if (checked) {
        // add this option (avoid duplicates)
        updatedForKey = [...current, opt];
      } else {
        // remove this option
        updatedForKey = current.filter((item) => item !== opt);
      }

      return {
        ...prev,
        [key]: updatedForKey,
      };
    });
  }

  const activeFilter = filters.find((f)=>f.key === openFilterKey)

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5 shadow-xl sm:max-w-sm md:max-w-md">
      <p className="text-xl font-semibold">Apply Filters</p>

      {filters.map((filter) => (
        <div key={filter.key} className="mt-6 text-start">
          <p className="font-semibold text-black">{filter.name}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {filter.options?.map((opt, idx) => (
              <div
                key={idx}
                className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(filter.key, opt, e.target.checked)
                  }
                  name={filter.key}
                  id={`${filter.key}-${idx}`}
                  value={opt}
                />
                <label
                  htmlFor={`${filter.key}-${idx}`}
                  className="text-gray-900"
                >
                  {opt}
                </label>
              </div>

            ))}

            {
              filter.options.length>4 && (
                <button
                onClick={()=>setOpenFilterKey(filter.key)}
                className="mt-2 text-blue-600 underline"
                >
                  View More
                </button>
              )
            }
          </div>
        </div>
      ))}

      {/* removed the debug <pre> so nothing shows below */}
    </div>
  );
};

export default Filter;
