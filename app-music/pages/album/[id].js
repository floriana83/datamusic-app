import { useRouter } from "next/router"
import data from '../../data/musica.json';

export default function Album () {
    const music = data.response
    const router = useRouter()
    const {id} = router.query
    console.log(router)

    const album = music.find(item =>{
        if(music.id === id) {
            return true
        } else {
            return false
        }
    })

    console.log(album)

    return (
        <div>Album{id} </div>
    )
}