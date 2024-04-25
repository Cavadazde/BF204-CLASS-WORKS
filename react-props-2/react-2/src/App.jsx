
import './App.css'
import Courses from './components/Courses';
import AddForm from './components/AddForm'
import array from './components/data/data'
import { useState } from 'react';


function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses =data.filter((q)=>{
    return q.name
     .toLowerCase()
     .trim()
     .includes(searchQuery.trim().toLowerCase())
  })

  console.log(filteredCourses)

  return (
    <>
  <AddForm data={data } setData={setData}/>
  <Courses data={filteredCourses}/>


    </>
  )
}

export default App
