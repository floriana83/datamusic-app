import style from '../../styles/Card.module.css'
const Card = ({poster,title,author,genre,year }) => {


    return (
        <div className={style.wrapper} >
                <img src={poster} width="200" height="200" className={style.productImg} />
          
            

            <div className={style.cardDescription}>
<div className={style.cardDecription__Title}>
  <p className={style.cardDecription__title}>{title}</p>
</div>
<div className={style.cardDecription__descriptionContainer}>
  <p className={style.cardDecription__description}>autore:{author}</p>
  <p className={style.cardDecription__description}>genere:{genre}</p>

  <p className={style.cardDecription__description}>anno:{year}</p>
</div>
</div>

</div>
      
    );
};

export default Card;

