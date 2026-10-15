
import React from 'react';
import { products } from '../data/demoData.js';
import Header from '../components/Header.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function Products() {
  const columns = [
    { key: 'productId', label: 'Product ID' },
    { key: 'productName', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'status', label: 'Status' }
  ];

  return (
    <div className="products-page">
      <Header
        title="Products"
        subtitle="Medical device product registry and status tracking"
      />

      <section className="page-section">
        <div className="section-heading">
          <h2>Product Registry</h2>
          <p>View and track registered medical device products.</p>
        </div>

        <DataTable columns={columns} data={products} />
      </section>

      <section className="page-section">
        <h2>Product Status</h2>

        <div className="product-status-list">
          {products.map((product) => (
            <article className="product-status-item" key={product.id}>
              <div>
                <h3>{product.productName}</h3>
                <p>
                  {product.productId} · {product.category}
                </p>
              </div>

              <StatusBadge status={product.status} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
