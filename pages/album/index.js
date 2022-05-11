import data from '../../data/musica.json';
import Card from '../../components/Card'
import styles from '../../styles/Home.module.css'

export default function Musica() {
    const music = data.response
   
    return (
      
       
        <div >
        <h1>Music Database</h1>
        {music && music.map((song) => (
          <div>
          <Card key={song.id} poster={song.poster}  title={song.title} author={song.author} genre={song.genre} year={song.year}/>
          <a key={song.id} href={`/album/${song?.id}`}>Click</a>
          </div>
          )
          )}
  
       
  
        </div>
  
     
    )
  }