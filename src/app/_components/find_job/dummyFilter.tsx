import React, { useState } from "react";

// Define exact keys for experience
type ExperienceKeys = "fresher" | "1-3yrs" | "3-5yrs" | "5+yrs";

const Filter = () => {
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);
  const [experience, setExperience] = useState<Record<ExperienceKeys, boolean>>({
    fresher: false,
    "1-3yrs": false,
    "3-5yrs": false,
    "5+yrs": false,
  });

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setExperience({ ...experience, [name as ExperienceKeys]: checked });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-4 text-left">Filter Jobs</h2>

      {/* Job Type Dropdown */}
      <div className="mb-4 text-left">
        <label className="block mb-1 font-medium">Job Type</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Select Job Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      {/* Location Dropdown */}
      <div className="mb-4 text-left">
        <label className="block mb-1 font-medium">Location</label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="remote">Remote</option>
        </select>
      </div>

      {/* Remote Checkbox */}
      <div className="mb-4 text-left flex items-center">
        <input
          type="checkbox"
          id="remote"
          checked={remote}
          onChange={(e) => setRemote(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="remote" className="font-medium">
          Remote Only
        </label>
      </div>

      {/* Experience Checkboxes */}
      <div className="mb-4 text-left">
        <label className="block mb-1 font-medium">Experience</label>
        {(Object.keys(experience) as ExperienceKeys[]).map((key) => (
          <div key={key} className="flex items-center mb-1">
            <input
              type="checkbox"
              name={key}
              checked={experience[key]}
              onChange={handleExperienceChange}
              className="mr-2"
            />
            <label htmlFor={key}>{key}</label>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
