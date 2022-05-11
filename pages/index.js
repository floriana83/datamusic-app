import Head from 'next/head'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import data from '../data/musica.json';
import Link from 'next/link';

export default function Home() {
  const music = data.response
 
  return (
    <div >
      <Head>
        <title>App Music</title>
        <meta name="description" content="Music database" />

      </Head>
      <div>
      {music && music.map((song) => (
        <div>
        <Card key={song.id} poster={song.poster}  title={song.title} author={song.author} genre={song.genre} year={song.year}/>
        <a key={song.id} href={`/album/${song?.id}`}>Click</a>
        </div>
        )
        )}

     

      </div>

    </div>
  )
}






