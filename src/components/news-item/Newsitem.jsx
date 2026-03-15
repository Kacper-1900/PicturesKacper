import "./Newsitem.css"

function Newsitem(props) {
    return (
        <div className="news-item" id={`news-id-${props.newsId}`}>

            <img
                className="news-image"
                src={props.image}
                alt={props.title}
            />

            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <p className="news-date">{props.date}</p>

        </div>
    )
}

export default Newsitem;