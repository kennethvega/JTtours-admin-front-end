import Layout from '../../components/utility/Layout';
import { VscDiffAdded } from 'react-icons/vsc';
import usePageRedirect from '../../hooks/usePageRedirect';
import { Link } from 'react-router-dom';
import ProductList from '../../components/products/ProductList';
const Product = () => {
  usePageRedirect('/login');

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex justify-between items-center">
          <Link to="/add-product">
            <p className="flex items-center gap-2 hover:text-blue-500 cursor-pointer mb-2 bg-gray-200 px-3 py-2 rounded-md">
              <VscDiffAdded />
              Add a product
            </p>
          </Link>
          Search
        </div>
        <hr />
        <ProductList />
      </div>
    </Layout>
  );
};

export default Product;
