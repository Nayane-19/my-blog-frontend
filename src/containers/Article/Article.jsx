import React, { useEffect, useState } from "react";
import "./Article.scss";
import { useBlogContext } from "../../contexts/BlogContext";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ImageUrl from "../../components/ImageUrl/ImageUrl";
import { ReactComponent as Writer } from "../../assets/svg/poem.svg";
import { ReactComponent as Calendar } from "../../assets/svg/calendar.svg";

function Article() {
  const { articles } = useBlogContext();
  const articleTitle = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (articles)
      setArticle(articles?.filter((b) => b.attributes.slug == articleTitle.id));
  }, [articles]);

  return (
    <div className="Article">
      <Navigation />
      {article.length > 0 && (
        <div className="container">
          <div className="flex box-title">
            <div className="column info-article">
              <div className="column">
                <span>Autor</span>
                <small>{article[0].attributes.author}</small>
              </div>
              <div className="column">
                <span>Data da publicação</span>
                <small>{article[0].attributes.date_publish}</small>
              </div>
              <h1>{article[0].attributes.title}</h1>
            </div>
            <div className="height-blue"></div>
          </div>
          <div className="column"></div>
          <div className="flex box-article">
            <div className="column box-description">
              <h5>{article[0].attributes.title}</h5>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {article[0].attributes.description}
              </ReactMarkdown>
            </div>
            <div className="column box-info">
              <ImageUrl
                image={
                  article[0].attributes.picture.data.attributes.formats
                    .thumbnail.url
                }
              />
              <div className="flex">
                <Writer />
                <span>{article[0].attributes.author}</span>
              </div>
              <div className="flex">
                <Calendar />
                <span>{article[0].attributes.date_publish}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
