'use client';

import { redirect, useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const ListPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();

  // const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        if (!response.ok) {
          throw new Error('제품을 불러오는 데 실패했습니다.');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('제품 상세 정보 불러오기 실패:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // cartId: 카트db id, productId: 물건 id
  function handleCart() {
    const putInCart = () => {
      try {
        fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          userId: session.user.id,
          productId: product.id,
        });
      } catch (error) {
        console.error('장바구니를 담는 중에 오류가 발생');
        setError(error.message);
      }
    };
    putInCart();
    redirect('/cart');
  }

  return (
    <div className="product-detail p-24">
      <div className="product-info justify-center items-center flex flex-col">
        {product.imageSrc && (
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-max h-max"
          />
        )}
        <div className="product-details m-10">
          <h1>{product.name}</h1>
          <p>
            <strong>제품 설명:</strong> {product.description}
          </p>
          <p>
            <strong>가격:</strong> {product.price}원
          </p>
          <p>
            <strong>재고:</strong> {product.stock}
          </p>
          <button
            className="add-to-cart border-2 border-indigo-500/100 rounded-md m-3 float-end"
            onClick={() => {
              handleCart();
            }}
          >
            장바구니로 보내기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
