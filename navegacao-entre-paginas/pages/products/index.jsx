import Link from 'next/link';
import React from 'react';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link href='/'>
        <a>Ir a home</a>
      </Link>
    </div>
  );
}

export default Products;
