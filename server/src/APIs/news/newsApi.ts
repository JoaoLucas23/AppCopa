import NewsAPI from "ts-newsapi";

const newsAPI = new NewsAPI('711330771f7f48078253525ada651541');

class NewsApiService {
    async retornaPrincipaisNoticias(){
        const noticias = await newsAPI.getTopHeadlines({
            country: 'br',
            category: 'sports',
            q: 'futebol',

        })

        const formatado = [];

        for (const news of noticias.articles) {
            formatado.push({
                titulo: news.title,
                descricao: news.description,
                url: news.url,
                imagem: news.urlToImage,
                data: news.publishedAt,
                fonte: news.source.name,
                conteudo: news.content,
            })
        }

        return formatado;

        // noticias.articles.map((noticia) => {
        //     return {
        //         titulo: noticia.title,
        //         descricao: noticia.description,
        //         url: noticia.url,
        //         imagem: noticia.urlToImage,
        //         data: noticia.publishedAt,
        //         fonte: noticia.source.name,
        //     }
        // });
    }
}

export default new NewsApiService();