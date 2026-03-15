import "./RssPage.css"

function RssPage() {
    return (
        <>
            <h1>PicturesKacper RSS</h1>
            <p>Consulta gratis las noticias de canarias7.es, actualizadas cada 30 minutos, en tu lector de noticias o página web.</p>
            <p>Los archivos RSS facilitan la distribución a través de internet de los titulares actualizados de las noticias</p>


            <div className="rss-row">

                <h3>Noticias.</h3>

                <a
                    className="rss-box"
                    href="/rss/kacper-news.xml"
                />

            </div>


        </>
    )
}
export default RssPage;