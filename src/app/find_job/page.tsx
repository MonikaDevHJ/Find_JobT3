import React from 'react'
import SearchBar from "../_components/find_job/SearchBar"
import Filter from "../_components/find_job/Filter"
import JobList from "../_components/find_job/JobList"
const findJob = () => {
  return (
    <div className=' text-center '>
      {/* Search Bar */}
      <SearchBar />

      {/* Flex container for Filter and JobList */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 max-w-6xl mx-auto p-1">
        {/* Left: Filter */}
        <div className="w-full md:w-1/4">
          <Filter />
        </div>

        {/* Right: Job List */}
        <div className="w-full md:w-3/4">
          <JobList />
        </div>
      </div>
    </div>
  )
}

export default findJob
