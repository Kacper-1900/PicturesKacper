import Newsitem from "../../components/news-item/Newsitem";
import news from "../../data/news";

function News() {
    return (
        <div>
            {
                news.map((item, index) => {
                    return <Newsitem key={index} newsId={index} title={item.title} description={item.description} />
                })
            }

        </div>
    )
}

export default News;