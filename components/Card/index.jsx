import style from '../../styles/Card.module.css'
const Card = ({ item }) => {
  console.log(item)
  return (
    <div className={style.wrapper} >
      <img src={item.poster} width="200" height="200" className={style.productImg} />



      <div className={style.cardDescription}>
        <div className={style.cardDecription__Title}>
          <p className={style.cardDecription__title}>{item.title}</p>
        </div>
        <div className={style.cardDecription__descriptionContainer}>
          <p className={style.cardDecription__description}>autore:{item.author}</p>
          <p className={style.cardDecription__description}>genere:{item.genre}</p>

          <p className={style.cardDecription__description}>anno:{item.year}</p>
        </div>
      </div>

    </div>

  );
};

export default Card;

