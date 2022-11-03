import NewsAPI from "ts-newsapi";

const newsAPI = new NewsAPI('711330771f7f48078253525ada651541');

const apiKey = 'pub_12968880797de02e0db17de5c9abfaf47e88f'

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