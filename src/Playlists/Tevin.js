import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function TevinPlaylists(){
    const [video,setVideo] = useState(`https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`)

    function makePlaylistArray(){
        let tevinPlaylistTotal = new Array(23)
        for (let i=0;i<23;i++) tevinPlaylistTotal[i] = i + 1 
        return tevinPlaylistTotal
    }
    
    function randomize(){
        let numOfVideosInPlaylist = makePlaylistArray().length
        let initialVideo = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
        const randomIndex = Math.floor(Math.random() * numOfVideosInPlaylist)
        const splitPlaylistUrl = initialVideo.split('')
        splitPlaylistUrl.pop()
        splitPlaylistUrl.push(`${randomIndex}`)
        return splitPlaylistUrl.join('')
    }
    
    

    return (
        <div>
            <iframe 
                title="random" width="560" height="315" src={video}
                frameBorder="0"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <Button onClick={()=>setVideo(randomize)}>Randomize</Button>
        </div>
    )

}

export default TevinPlaylists