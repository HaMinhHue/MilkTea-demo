import axios from 'axios';

const API_BASE_URL = 'https://example-api.com'; // Thay thế bằng URL API của bạn

const getProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};

const getCommentsByProductId = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

const postComment = async (productId, commentText) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products/${productId}/comments`, {
      text: commentText,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error;
  }
};

export { getProductDetail, getCommentsByProductId, postComment };
