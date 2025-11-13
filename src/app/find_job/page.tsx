'use client'

import React, { useState } from 'react'

import Filter from "../_components/find_job/Filter"
import JobList from "../_components/find_job/JobList"

type FiltersState = Record<string, string[]>


const FindJob = () => {
  
  // here we will store the whatever the filter the user selects
  const [selectedFilters, setSelectedFilters] = useState<FiltersState>({});

  return (
    <div className=' text-center '>

      {/* Flex container for Filter and JobList */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 max-w-6xl mx-auto p-1">
        {/* Left: Filter */}
        <div className="w-full md:w-1/4">
        {/* pass this state to filter */}
          <Filter 
          selectedFilters={selectedFilters} 
          setSelectedFilters={setSelectedFilters}
           />
        </div>

        {/* Right: Job List */}
        <div className="w-full md:w-3/4">
        {/* Also pass this state to JObList */}
          <JobList  
          selectedFilters={selectedFilters} 
          />
        </div>
      </div>
    </div>
  )
}

export default FindJob
