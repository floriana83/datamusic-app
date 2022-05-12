import { useRouter } from "next/router"
import data from '../../data/musica.json';
import Card from '../../components/Card'


export default function Album () {
    const music = data.response
    const router = useRouter()
    const {id} = router.query
    console.log("music", music)

    const album = music.find(item => item.id == id)
 
    // console.log(album)
    if (!album){
        return (<div>chupa</div>)
    }

    return (
        <div>
        <Card key={album.id} item={album}/>
        <a href={"/album"}>Torna al catalogo</a>
        </div>

    )
}