import Dashboard from '@mui/icons-material/Dashboard';
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import { ROLES } from "../../utilities/constant/app.constant";
import { IconQuestion,IconGroupUser} from '../../components/icones';
const menuAdmin = [
    {
        id: 'dashbord',
        icon: () => <Dashboard className="side-menu__icon" />,
        title: 'Tableau de bord',
        exact: true,
        navLink: '/admins',
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
    },
    {
        header: "Gestion des paiements",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
        navItems: [
            {
                id: 'payments',
                icon: () => <CurrencyExchange  className="side-menu__icon" />,
                title: 'Paiements',
                navLink: '/client/payments',
                exact: true,
            },
        ],
    },
    {
        header: "News",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
        navItems: [
            {
                id: 'news',
                icon: () => <IconQuestion className="side-menu__icon" />,
                title: 'News',
                navLink: '/twittes',
                exact: true,
            },
        ],
    
    },
    {
        header: "Edition de compte",
        permissions: [ROLES.ADMIN, ROLES.SUPERADMIN],
        navItems: [
            {
                id: 'users',
                icon: () => <IconGroupUser  className="side-menu__icon" />,
                title: 'Usagers',
                navLink: '/handlers/account-users',
                exact: true,
            },
            {
                id: 'admins',
                icon: () => <IconGroupUser  className="side-menu__icon" />,
                title: 'Administrateurs',
                navLink: '/handlers/account-admins',
                exact: true,
            },
        ],
    },
];

export default menuAdmin;
