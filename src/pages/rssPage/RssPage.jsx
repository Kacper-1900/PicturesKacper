import "./RssPage.css"

function RssPage() {
    return (
        <div className="rss-page">
            <h1>PicturesKacper RSS</h1>
            <p>Consulta gratis las noticias de PicturesKacpers, actualizadas cada mucho tiempo, en tu lector de noticias o página web.</p>
            <p>Los archivos RSS facilitan la distribución a través de internet de los titulares actualizados de las noticias.</p>

            <div className="rss-row">
                <h3>Noticias</h3>
                <a
                    className="rss-box"
                    href="/rss/kacper-news.xml"
                ></a>
            </div>
        </div>
    )
}

export default RssPage;