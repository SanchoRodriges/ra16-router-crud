import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPost () {

  const navigate = useNavigate();

  const [postContent, setPostContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (postContent === '') return;

    await sendPost();

    navigate('/');

    setPostContent('');
    
  }

  const sendPost = async () => {
    try {
      const response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          "id": 1,
          "content": postContent
          })
      });
      
      if (!response.ok) {
        throw new Error('Ошибка')
      }

    } catch (e) {
      throw new Error('Ошибка')
    }

  };

  const handleCancel = () => {
    navigate('/');
  }

  return (
    <div className="add-post-page">
      <h1>Создание нового поста</h1>
      
      <form>
        <textarea
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">Добавить</button>
        <button onClick={handleCancel} type="submit">Отмена</button>
      </form>
    </div>
  )
}

export default AddPost;