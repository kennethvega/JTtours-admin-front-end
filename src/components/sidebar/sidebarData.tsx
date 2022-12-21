import { RiProductHuntLine, RiDoubleQuotesL, RiQuestionnaireLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { GrUserSettings } from 'react-icons/gr';
export const menu = [
  {
    title: 'Products',
    icon: <RiProductHuntLine />,
    path: '/',
  },
  {
    title: 'Bookings',
    icon: <BsCalendarDate />,
    path: '/bookings',
  },
  {
    title: 'Customer emails',
    icon: <AiOutlineMail />,
    path: '/customer-emails',
  },
  {
    title: 'Customer review',
    icon: <RiDoubleQuotesL />,
    path: '/customer-review',
  },
  {
    title: "FAQ's",
    icon: <RiQuestionnaireLine />,
    path: '/faq',
  },
  {
    title: 'Settings',
    icon: <GrUserSettings />,
    path: '/account-settings',
  },
];
