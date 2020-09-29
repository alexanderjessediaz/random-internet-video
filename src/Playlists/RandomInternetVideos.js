import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

const RandomInternetVideos = () => {
    const [video,setVideo] = useState('https://youtube.com/embed/v=0KKMUxn8FZI&list=PLMyztl9rKFp9ZztVDCso2eZHkluQJBLrj&index=1')
    
    function makePlaylistArray(){
        let randomPlaylistTotal = new Array(201)
        for (let i=0;i<201;i++) randomPlaylistTotal[i] = i + 1 
        return randomPlaylistTotal
    }


        
    function randomize(){
        let numOfVideosInPlaylist = makePlaylistArray().length
        let initialVideo = 'https://youtube.com/embed/v=0KKMUxn8FZI&list=PLMyztl9rKFp9ZztVDCso2eZHkluQJBLrj&index=1'
        const randomIndex = Math.floor(Math.random() * numOfVideosInPlaylist)
        const splitPlaylistUrl = initialVideo.split('')
        splitPlaylistUrl.pop()
        splitPlaylistUrl.push(`${randomIndex}`)
        return splitPlaylistUrl.join('')
    }
        return (
            <div>
            <iframe 
                title="random" width="800" height="400" src={video}
                frameBorder="0"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <Button onClick={()=>setVideo(randomize)}>Randomize</Button>
        </div>
        )
}

export default RandomInternetVideos