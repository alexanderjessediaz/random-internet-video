// import React, {useState} from 'react'

// const randomVidHook = (initialVideo) => {
//     const [videos, setVideos] = useState(initialVideo)
    
//     let randomPlaylistTotal = new Array(201)
//         for (let i=0;i<201;i++){
//             randomPlaylistTotal[i] = i + 1
//         }

        
//         const shufflePlaylist= (playlist,PlaylistTotal) => {
            
//             let numOfVideosInPlaylist = PlaylistTotal.length
//             const randomIndex = Math.floor(Math.random() * numOfVideosInPlaylist)
//             const splitPlaylistUrl = playlist.split('')
//             splitPlaylistUrl.pop()
//             splitPlaylistUrl.push(`${randomIndex}`)
//             const randomVideo = splitPlaylistUrl.join('')
//             setVideos(randomVideo)
//             return randomVideo
//         }
        
//         return [videos,shufflePlaylist]
//     }
//     const randomVideos = 'https://youtube.com/watch?v=0KKMUxn8FZI&list=PLMyztl9rKFp9ZztVDCso2eZHkluQJBLrj&index=1'
    
//     function RandomInternetVidz() {

//     const [videos, shufflePlaylist] = randomVidHook(randomVideos)
    
//         return (
//             <iframe title="random" width="560" height="315" src=''
//                     frameBorder="0"  
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen></iframe>
//         )
// }



// export default RandomInternetVidz