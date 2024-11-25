'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cartItem, setCartItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchcart = async () => {
      try {
        // cart 품목 list 불러오는 api 만들어서 붙이기
        if (!response.ok) {
          throw new Error('제품 목록을 불러오는 데 실패');
        }
        const data = await response.json();
        setCartItem(data);
      } catch (error) {
        console.error('장바구니를 담는 중에 오류가 발생');
        setError(error.message);
      }
    };
    fetchcart();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  function handlePay() {
    return alert('결제하기는 아직 미구현입니다.');
  }

  return (
    <div className="product-detail p-24">
      <div className="product-info justify-center items-center flex flex-col">
        {product.imageSrc && (
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-64 h-64"
          />
        )}
        <div className="product-details m-10">
          {/*여기에 cartItem db에서 불러오는 품목들 나열하는 코드*/}
          <button
            className="add-to-cart border-2 border-indigo-500/100 rounded-md m-3 float-end"
            onClick={() => {
              handlePay();
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
