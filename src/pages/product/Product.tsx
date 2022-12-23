import Layout from '../../components/utility/Layout';
import { VscDiffAdded } from 'react-icons/vsc';
import usePageRedirect from '../../hooks/usePageRedirect';
import { Link } from 'react-router-dom';
const Product = () => {
  usePageRedirect('/login');

  return (
    <Layout>
      <div className="min-h-[50rem]">
        <div className="flex">
          <Link to="/add-product">
            <p className="flex items-center gap-2 hover:text-blue-500 cursor-pointer mb-2 bg-gray-200 px-3 py-2 rounded-md">
              <VscDiffAdded />
              Add a product
            </p>
          </Link>
        </div>
        <hr />
      </div>
    </Layout>
  );
};

export default Product;
