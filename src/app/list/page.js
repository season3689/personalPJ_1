'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 제품 목록을 가져오는 useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product'); // 모든 제품을 가져오는 API 호출
        if (!response.ok) {
          throw new Error('제품 목록을 불러오는 데 실패했습니다.');
        }
        const data = await response.json();
        setProducts(data); // 제품 목록 상태 업데이트
      } catch (error) {
        console.error('제품 목록을 가져오는 중 오류가 발생했습니다', error);
        setError(error.message); // 오류 메시지 상태 업데이트
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-24">
      <ul className="flex flex-wrap gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <Link href={`/list/${product.id}`}>
              <img src={product.imageSrc} className="w-64 h-64" />
            </Link>
            <p>{product.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
