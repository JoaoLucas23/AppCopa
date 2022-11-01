import NewsAPI from "ts-newsapi";

const newsAPI = new NewsAPI('711330771f7f48078253525ada651541');

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

    async retornaTodasNoticias(pesquisa: string){

        const keyWords = pesquisa == '' ? 'copa do mundo' : pesquisa + ' copa do mundo';

        console.log(pesquisa);

        const noticias = await newsAPI.getEverything({
            q: keyWords,
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

    async retornaNoticiasPorPais(pais: string){
        const noticias = await newsAPI.getTopHeadlines({
            country: 'br',
            category: 'sports',
            q: pais,
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
        const noticias = await newsAPI.getEverything({
            q: pesquisa + ' copa do mundo',
            language: 'pt',
            sortBy: 'relevancy',
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