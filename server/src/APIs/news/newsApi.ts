import NewsAPI from "ts-newsapi";

const token = process.env.NEWS_API_TOKEN ? process.env.NEWS_API_TOKEN : "";

const newsAPI = new NewsAPI(token);

class NewsApiService {
    async retornaPrincipaisNoticias(){
        const noticias = await newsAPI.getTopHeadlines({
            country: 'br',
            category: 'sports',
            q: 'copa do mundo',
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
    }

    async retornaTodasNoticias(){

        const noticias = await newsAPI.getEverything({
            q: 'Copa do Mundo',
            qInTitle: 'Copa do Mundo',
            language: 'pt',
            sortBy: 'publishedAt',
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
    }

    async retornaNoticiasPorPesquisa(pesquisa: string){
        const noticias = await newsAPI.getTopHeadlines({
            category: 'sports',
            q: pesquisa,
            country: 'br',
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
    }

}

export default new NewsApiService();