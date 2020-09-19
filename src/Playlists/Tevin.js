const tevinPlaylists = (props) => {
    const tevinPlaylist = `https://www.youtube.com/embed/watch?v=996TyFiZx_0&list=PLxpr798LbTOLnya9JNEuwzPQ2qFP8ejBZ&index=1`
    let tevinPlaylistTotal = new Array(23)
    for (let i=0;i<23;i++){
        tevinPlaylistTotal[i] = i + 1
    }
    return (
        {tevinPlaylist},{tevinPlaylistTotal}
    )
}

export default tevinPlaylists