import React from 'react';
import { FaqType } from '../../ts/faqTypes';

type FaqItemProps = {
  faq: FaqType;
};
const FaqItem = ({ faq }: FaqItemProps) => {
  return <div>{faq._id}</div>;
};

export default FaqItem;
