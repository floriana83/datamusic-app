import { useRouter } from "next/router"
import data from '../../data/musica.json';
import Card from '../../components/Card'


export default function Album () {
    const music = data.response
    const router = useRouter()
    const {id} = router.query
    // console.log(router)

    const album = music.find(item =>{
        if(item.id === id){
            return true 
        }else{
            return false
  
        }})
 
    console.log(album)

    return (
        <div>
        <Card key={album?.id} poster={album?.poster}  title={album?.title} author={album?.author} genre={album?.genre} year={album?.year}/>
        <a href={"/"}>Torna al catalogo</a>
        </div>

    )
}