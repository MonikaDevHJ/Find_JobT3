"use client";

import { useState } from "react";
import { X } from "lucide-react";

const allSugestions = [
    "HTML",
    "CSS",
    "TailWindCss",
    "Javascript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "PostgreSql",
    "Prisma",
    "RestAPI",
    "TRPCApi",
    "Java",
    "Vercel",
    "Docker",
    "GitHub",
    "Excel",
    "Marketing Field",
    "Sales",
];

export default function SkillsInput() {
    const [skills, setSkills] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");



    const filterSuggestion = allSugestions.filter(
        (skill) =>
            skill.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) &&
            !skills.includes(skill),
    );


    // Derived filtered suggestions
    const addSkills = (skill: string) => {
        if (!skills.includes(skill) && skill.trim()! == "") {
            setSkills([...skills, skill]);
            setInputValue("");
        }
    };

    // Remove skills Function
    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };


    //   Add Skills
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            addSkills(inputValue.trim());
        }
    };

    return (
        <div className="w-full  ">
            <label className="mb-2 block text-base font-semibold sm:text-lg">Skills</label>

            {/* Input Type */}
            <input type="text"
            placeholder="type and press enter"
            
                className="w-full rounded border border-gray-500 p-2 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none"
            />


        </div>
    )
}
