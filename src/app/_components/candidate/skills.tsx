"use client";
import { useState } from "react";
import { X } from "lucide-react"; // for cancel icon
import { useFormContext } from "~/app/context/CandidateFormContext";

const allSuggestions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "REST API",
  "tRPC",
  "Core Java",
  "Java",
];

export default function SkillsInput() {
  const{state, dispatch} = useFormContext();
  const skills = state.experience.skills || []
  const [inputValue, setInputValue] = useState("");

  const filteredSuggestions = allSuggestions.filter(
    (skill) =>
      skill.toLowerCase().includes(inputValue.toLowerCase()) &&
      !skills.includes(skill)
  );

  const addSkill = (skill: string) => {
    if (!skills.includes(skill) && skill.trim() !== "") {
     dispatch({
      type: "SET_EXPERIENCE",
      payload: {skills: [...skills, skill]}
     })
    }
  };

  const removeSkill = (skillToRemove: string) => {
    dispatch({
      type:"SET_EXPERIENCE",
      payload: {skills:skills.filter((s)=> s!== skillToRemove)}
    })
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addSkill(inputValue.trim());
    }
  };

  return (
    <div className="w-full ">
      <label className="mb-2 block text-base font-semibold sm:text-lg">
        Skills
      </label>

      {/* Added skills */}
      <div className="flex flex-wrap gap-2 mb-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1 rounded-full border border-gray-400 px-3 py-1 text-sm font-medium bg-gray-100"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-gray-500 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Type and press Enter..."
        className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Suggestions */}
      {inputValue && filteredSuggestions.length > 0 && (
        <div className="border border-gray-300 mt-1 rounded-md shadow-sm bg-white max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="px-3 py-2 hover:bg-fuchsia-100 cursor-pointer"
              onClick={() => addSkill(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
