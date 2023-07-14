import App from '../App.jsx';
import { createBrowserRouter } from "react-router-dom";
import SecondStepContact from '../pages/SecondStepContact.jsx';
import ThirdStepMailing from '../pages/ThirdStepMailing.jsx';
import Customers from '../pages/dashboard/Customers.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/step2_contact_infos",
      element: <SecondStepContact />,
    },
    {
      path: "/step3_mailing_infos",
      element: <ThirdStepMailing />,
    },
    {
      path: "/dashboard/customers",
      element: <Customers />,
    },
  ]
);

export default router;
