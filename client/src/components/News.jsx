import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
    const [articles, setArticles] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?q=energy&apiKey=41da50c11b0e4ac6ab1cbc08b7df5e76`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `SolApex | News`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1 className="text-center mt-24 mb-8 text-2xl font-bold">SolApex - Top Renewable Energy Headlines</h1>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {articles.map((element) => {
                            return (
                                <NewsItem
                                    key={element.url}
                                    title={element.title ? element.title : ''}
                                    description={element.description ? element.description : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            );
                        })}
                    </div>
                </div>
            
        </>
    );
};

export default News;
