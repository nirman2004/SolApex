import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="max-w-xs mx-2 my-3">
            <div className="relative bg-white shadow-md rounded-md overflow-hidden">
                <div className="absolute top-0 right-0 m-2 flex justify-end">
                    <span className="inline-block bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1">{source}</span>
                </div>
                <img 
                    src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} 
                    className="w-full h-40 object-cover" 
                    alt="news" 
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold">{title}</h5>
                    <p className="text-sm text-gray-700">{description}</p>
                    <p className="text-xs text-gray-500"><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a 
                        rel="noreferrer" 
                        href={newsUrl} 
                        target="_blank" 
                        className="inline-block bg-black text-white text-sm font-medium py-1 px-3 mt-2 rounded hover:bg-gray-800"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
