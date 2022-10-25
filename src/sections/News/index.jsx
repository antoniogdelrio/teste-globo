import { NewsCard } from "../../components/NewsCard"
import { Typography } from "../../components/Typography"
import { Container } from "../../components/Container"

export const NewsSection = ({
  news
}) => {
    return (
        <Container>
          <section className="flex flex-col justify-center">
                <Typography size="h1" className="mb-4 w-fit">Últimas notícias do The Masked Singer</Typography>
                <div className="flex gap-2 flex-wrap">
                    {
                        news.map(news => (
                            <NewsCard
                                id={news.id}
                                title={news.title}
                                url={news.url}
                                imageURL={news.image}
                                isVideo={news.video}
                            />
                        ))
                    }
                </div>
          </section>
        </Container>
    )
}

export default {}
