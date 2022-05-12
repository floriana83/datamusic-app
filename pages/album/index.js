import data from '../../data/musica.json';
import Card from '../../components/Card'
import styles from '../../styles/Home.module.css'

export default function Musica() {
  const music = data.response

  return (


    <div >
      <h1>Music Database</h1>
      {music && music.map((song) => (

        <a key={song.id} href={`/album/${song.id}`}>
          <Card key={song.id} item={song} />
        </a>

      )
      )}



    </div>


  )
}