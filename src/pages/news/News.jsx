import Newsitem from "../../components/news-item/Newsitem";
import news from "../../data/news.js";
import "./News.css"

function News() {
    return (
        <div>
            {
                news.map((item, index) => {
                    return <Newsitem key={index} newsId={index} title={item.title} image={item.image} description={item.description} date={item.date}/>
                })
            }

        </div>
    )
}

export default News;