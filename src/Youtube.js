import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

const tevinPlaylist = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
const tevinPLTotalNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]





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
        console.log(randomVideo)
        return randomVideo
    }
    
    handleClick = () => {
        
        this.setState({
            videos:this.shufflePlaylist(tevinPlaylist,tevinPLTotalNumber)
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