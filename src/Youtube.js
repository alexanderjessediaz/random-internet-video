import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
// import Tevin from './Playlists/Tevin'

// const tevinVids = <Tevin

// const tevinPlaylist = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
// const tevinPLTotalNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

// const randomInternetPlaylist = 'http://youtube.com/watch?v=0KKMUxn8FZI&list=PLMyztl9rKFp9ZztVDCso2eZHkluQJBLrj&index=1'

const tevinPlaylist = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
    
let tevinPlaylistTotal = new Array(23)
    for (let i=0;i<23;i++){
        tevinPlaylistTotal[i] = i + 1
    }

class Youtube extends Component {
    
    state = {
        videos:""
    }
    
    
    shufflePlaylist = (playlist,playlistTotal) => {
        let numOfVideosInPlaylist = playlistTotal.length
        const randomIndex = Math.floor(Math.random() * numOfVideosInPlaylist)
        const splitPlaylistUrl = playlist.split('')
        splitPlaylistUrl.pop()
        splitPlaylistUrl.push(`${randomIndex}`)
        const randomVideo = splitPlaylistUrl.join('')
        return randomVideo
    }
    
    handleClick = () => {
        
        this.setState({
            videos:this.shufflePlaylist(tevinPlaylist,tevinPlaylistTotal)
        })
        
    }
    render(){
        
        return(
            <div>
                
                <iframe title="random" width="560" height="315" src={this.state.videos}
                    frameBorder="0"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                    <Button onClick={this.handleClick}>Random</Button>
            </div>
        )
    }
}
export default Youtube