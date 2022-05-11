


const Card = ({poster,title,author,genre,year }) => {


    return (
        <div>
            <div >
                <img src={poster}/>
            </div>
            <div >
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{genre}</p>
                <p>{year}</p>
            </div>
        </div>
    );
};

export default Card;