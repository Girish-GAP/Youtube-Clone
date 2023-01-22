import { Box } from '@mui/system';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Instead of rendering one by one we are add it new file and rendering from only one file 
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from './components'


// we can replace selecolumn with the instatnt return
const App = () => (
    <BrowserRouter>

        <Box sx = {{backgroundColor : '#000'}}>
            <Navbar/>
            <Routes>    
                <Route path = "/" exact element = {<Feed/>}/>
                <Route path = "/video/:id" element = {<VideoDetails/>}/>
                <Route path = "/Channel/:id" element = {<ChannelDetails/>}/>
                <Route path = "/Search/:id" element = {<SearchFeed/>}/>
            </Routes>
        </Box>
    
    </BrowserRouter>
);


export default App;


// Routes is an built in component of react dom.
// Inside of it we can place indivisual route components.
// Feed is the component
// In video route we are going to render the video element