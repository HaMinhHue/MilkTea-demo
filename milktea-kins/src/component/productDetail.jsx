import React, { useState, useEffect } from 'react';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    // Giả sử có một hàm API để lấy thông tin sản phẩm dựa trên ID từ params
    const fetchProduct = async () => {
      try {
        const response = await api.getProductById(match.params.productId);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Giả sử có một hàm API để lấy bình luận dựa trên ID sản phẩm
    const fetchComments = async () => {
      try {
        const response = await api.getCommentsByProductId(match.params.productId);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchProduct();
    fetchComments();
  }, [match.params.productId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Giả sử có một hàm API để gửi bình luận
      await api.postComment(match.params.productId, commentText);
      // Sau khi gửi bình luận thành công, cập nhật danh sách bình luận
      const response = await api.getCommentsByProductId(match.params.productId);
      setComments(response.data);
      // Đặt lại trường văn bản bình luận về trạng thái ban đầu
      setCommentText('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <h3>Bình luận</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Nhập bình luận của bạn"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default ProductDetail;
