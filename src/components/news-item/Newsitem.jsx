import "./Newsitem.css"

function Newsitem(props){
    return(
        <div className="news-item" id={`news-id-${props.newsId}`}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Newsitem;