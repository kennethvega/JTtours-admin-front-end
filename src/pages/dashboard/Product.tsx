import Layout from '../../components/utility/Layout';
import { useEffect } from 'react';
import usePageRedirect from '../../hooks/usePageRedirect';
const Product = () => {
  usePageRedirect('/login');

  return (
    <Layout>
      <div className="min-h-[50rem]">dash</div>
    </Layout>
  );
};

export default Product;
