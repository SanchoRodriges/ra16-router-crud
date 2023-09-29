import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPostPage () {

  const { productId } = useParams();

  const [postData, setPostData] = useState('');

  const [postContent, setPostContent] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7070/posts/' + productId);
        if (!response.ok) {
          throw new Error('Error')
        }
        const responseData = await response.json();
        setPostData(responseData);
        setPostContent(responseData.post?.content);
      } catch (e) {
        throw new Error('Error')
      }
    };

    fetchData();

  }, []);

  const editPostHandler = async () => {
    try {
      const response = await fetch('http://localhost:7070/posts/' + productId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          "id": 1,
          "content": postContent
          })
      });
      if (!response.ok) {
        throw new Error('Error')
      }

      navigate(-1);
      
    } catch (e) {
      throw new Error('Error')
    }
  };

  return (
    <div>
      <h1>Редактирование поста ID {postData.post?.id}</h1>
      <div className="post">
        <form>
          <textarea
            value={postContent}
            onChange={e => setPostContent(e.target.value)}
          />
        </form>
      </div>
      <div className="post-page-buttons">
        <button onClick={ editPostHandler }>Сохранить</button>
        <button onClick={() => { navigate(-1) }}>Отмена</button>
      </div>
    </div>
  )
}

export default EditPostPage;