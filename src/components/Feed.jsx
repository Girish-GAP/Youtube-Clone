import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/featchFromAPI'

const Feed = () => {

  // States
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState([])


  // This is the lifecyle hook which immedetly called at intial component load like ngFor 
  // the following featchFromAPI function returns the proise and .then weil execute after complieting the promise
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>
                            (setVideos(data.items)))
  }, 
  [selectedCategory] )  // it will recall this function when ever we change the category
  // empty array means : code inside this function will only run when page reloads

  return (
    <Stack sx = {{flexDirection : {sx : "column", md : "row" }}}>

      <Box sx = {{height : {sx : 'auto', md : '92vh'}, 
      borderRight : '1px solid #3d3d3d', px : {sx : 0, md : 2}}}>
        <SideBar
          selectedCategory = {selectedCategory}
          setselectedCategory = {setselectedCategory}
        />
          <Typography className= "copyright"
          variant= "body2" sx = {{mt : 1.5, color : '#fff'}}>
              Copyright 2022 JSM Media
          </Typography>
      </Box>

      <Box p = {2} sx = {{overflowY : 'auto', height : '90vh' , flex : 2}}>
          <Typography variant='h4' fontWeight = "bold" mb = {2}
          sx = {{color : 'white'}}>
            {selectedCategory} <span style={{color : '#F31503'}}>videos</span>
          </Typography>

          <Videos videos = {videos}/>
      </Box>


    </Stack>
  )
}

export default Feed