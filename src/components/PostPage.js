import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage () {

  const { productId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7070/posts/' + productId);
        if (!response.ok) {
          throw new Error('Error')
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        throw new Error('Error')
      }
    };

    fetchData();
    
  }, []);

  const date = (timestamp) => {
    const d = new Date(timestamp);
    return d.toLocaleString('ru-RU');
  }

  return (
    <div>
      <h1>Страница поста ID {data.post?.id}</h1>
      <div className="post">
      <div className="row">
        <div className="avatar"></div>
        <div>
          <div className="name">Имя Фамилия</div>
          <div>{date(data.post?.created)}</div>
        </div>
      </div>
      <div className="content">{data.post?.content}</div>
      </div>
    </div>
  )
}

export default PostPage;