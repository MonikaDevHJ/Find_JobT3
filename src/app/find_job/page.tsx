import React from 'react'
import SearchBar from "../_components/find_job/SearchBar"
import Filter from"../_components/find_job/Filter"
import  JobList from "../_components/find_job/JobList"
const findJob = () => {
  return (
    <div>
      <SearchBar/>
      <Filter/>
      <JobList/>
      <p>Find Job</p>
    </div>
  )
}

export default findJob
  