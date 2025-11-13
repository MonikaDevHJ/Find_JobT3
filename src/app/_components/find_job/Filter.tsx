"use client";
import React, { useState } from "react";

type FiltersState = Record<string, string[]>;

type filterProps = {
  selectedFilters: FiltersState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

const Filter = ({selectedFilters, setSelectedFilters}:filterProps) => {
  // TS knows each key has an array of strings
  const [openFilterKey, setOpenFilterKey] = React.useState<string | null>(null);

  const filters = [
      {
      key: "InterviewMode",
      name: "Interview Mode",
      options: ["Online", "Offline",]
    },
      {
      key: "WorkMode",
      name: "WorkMode",
      options: ["Hybrid", "Office", "Remote",]
    },

   
    {
      key: "eligibility",
      name: "Education",
      options: [
        "Gradtion",
        "Post Graduation",
        "10 th",
        "12 th",
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
      options: ["0-3 Lakh", "3-6 Lakh", "6-12 Lakh", "12-24 Lakh", "24-30 Lakh"],
    },
    {
      key: "freshness",
      name: "FreshNess",
      options: ["Last 30 Days", "Last 15 Days", "Last 10 Days", "Last 1 Days"]
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

  const activeFilter = filters.find((f) => f.key === openFilterKey);

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5 shadow-xl sm:max-w-sm md:max-w-md">
      <p className="text-xl font-semibold">Apply Filters</p>

      {filters.map((filter) => (
        <div key={filter.key} className="mt-6 text-start">
          <p className="font-semibold text-black">{filter.name}</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {filter.options?.map((opt, idx) => (
              <div
                key={idx}
                className="flex w-full items-center gap-2 sm:w-1/2 md:w-full"
              >
                <input
                  type="checkbox"
                  checked = {selectedFilters[filter.key]?.includes(opt) || false}
                  onChange={(e) =>
                    handleChange(filter.key, opt, e.target.checked)
                  }
                // name={filter.key}
                // id={`${filter.key}-${idx}`}
                // value={opt}
                />
                <label
                  htmlFor={`${filter.key}-${idx}`}
                  className="text-gray-900"
                >
                  {opt}
                </label>
              </div>
            ))}

            {filter.options.length > 3 && (
              <button
                onClick={() => setOpenFilterKey(filter.key)}
                className="mt-2 text-blue-600 underline"
              >
                View More
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Model */}

      {openFilterKey && activeFilter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border-gray-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold"> {activeFilter.name}</h2>
              <button
                onClick={() => setOpenFilterKey(null)}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {activeFilter.options.map((opt, index) => (
                <label key={index} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[activeFilter.key]?.includes(opt) || false
                    }
                    onChange={(e) =>
                      handleChange(activeFilter.key, opt, e.target.checked)
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>

            <div className="mt-6 flex  justify-end gap-3">
              <button className="rounded border px-3 py-1 hover:bg-gray-100">
                close
              </button>
              <button className="rounded bg-blue-600 px-4 py-4 text-white hover:bg-blue-700">
                Apply
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
