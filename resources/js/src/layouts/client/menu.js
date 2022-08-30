import Dashboard from '@mui/icons-material/Dashboard';
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import { ROLES } from "../../utilities/constant/app.constant";

const menuClient = [
    {
        id: 'dashbord',
        icon: () => <Dashboard />,
        title: 'Tableau de bord',
        exact: true,
        navLink: '/users',
        permissions: [ROLES.USER]
    },
    {
        id: 'crypto',
        icon: () => <CurrencyExchange className="side-menu__icon" />,
        title: 'Crypto Xchange',
        navLink: '/clients/crypto-xchange',
        exact: true,
        permissions: [ROLES.USER],
    },
];

export default menuClient;
