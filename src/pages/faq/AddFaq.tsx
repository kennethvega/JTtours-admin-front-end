import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/utility/Layout';

const AddFaq = () => {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <Link to="/faq">
          <p className="flex items-center gap-2 hover:text-blue-500 cursor-pointer mb-2 bg-gray-200 px-3 py-2 rounded-md">&larr; Back to FAQ's list</p>
        </Link>
      </div>
    </Layout>
  );
};

export default AddFaq;
