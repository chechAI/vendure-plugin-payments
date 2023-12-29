import { addNavMenuItem } from '@vendure/admin-ui/core';

export default [
    addNavMenuItem(
        {
            id: 'payments',
            icon: 'dollar',
            label: 'Payments',
            routerLink: ['/extensions/payments'],
        },
        'sales'
    ),
];
