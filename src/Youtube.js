import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

// Tevin

const tevinPlaylist = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
    
let tevinPlaylistTotal = new Array(23)
    for (let i=0;i<23;i++){
        tevinPlaylistTotal[i] = i + 1
    }


// Random InternetVidz

let randomPlaylistTotal = new Array(201)
        for (let i=0;i<201;i++){
            randomPlaylistTotal[i] = i + 1
        }



const randomPlaylist = 'https://youtube.com/embed/watch?v=0KKMUxn8FZI&list=PLMyztl9rKFp9ZztVDCso2eZHkluQJBLrj&index=1'


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
    
    tevinClick = () => {
        
        this.setState({
            videos:this.shufflePlaylist(tevinPlaylist,tevinPlaylistTotal)
        })
    }
    randomClick = () => {
        
        this.setState({
            videos:this.shufflePlaylist(randomPlaylist,randomPlaylistTotal)
        })
    }
    render(){
        
        return(
            <div>
                
                <iframe title="random" width="560" height="315" src={this.state.videos}
                    frameBorder="0"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                    <Button onClick={this.tevinClick}>Random Tevin</Button>
                    <Button onClick={this.randomClick}>Random Internet Vidz</Button>
            </div>
        )
    }
}
export default Youtube