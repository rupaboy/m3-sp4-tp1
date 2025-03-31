const siteName = 'g8';

export const siteNav = [
    {
        id: 0,
        title: siteName,
        secondaryTitle: 'ERROR 404',
        navPages: [
            {
                id: 0,
                isActive: false,
                name: 'DashBoard',
                link: '/',
            },
            {
                id: 1,
                isActive: false,
                name: 'Colecciones',
                link: 'collections'
            }
        ]
    },
    {
        id: 1,
        title: siteName,
        secondaryTitle: 'Dashboard',
        navPages: [
            {
                id: 0,
                isActive: false,
                name: 'Colecciones',
                link: 'collections'
            },
            {
                id: 1,
                isActive: true,
                name: 'DashBoard',
                link: '/'
            }
        ]
    },
    {
        id: 2,
        title: siteName,
        secondaryTitle: 'Colecciones',
        navPages: [
            {
                id: 0,
                isActive: true,
                name: 'DashBoard',
                link: '/'
            },
            {
                id: 1,
                isActive: false,
                name: 'Colecciones',
                link: 'collections'
            }
        ]
    },
        
];

export const webModule = [
    {
        id: 0,
        title: 'Bienvenidos',
        description: 'Este sitio está eternamente en construcción, editalo a consciencia para aprender, usalo bajo tu propio riesgo.',
    },
    {
        id: 1,
        title: 'System Status',
        description: 'Utilizamos el módulo OS para mostrar información sobre el sistema del usuario.',
    },
    {
        id: 2,
        title: 'Archivos',
        description: 'Utilizamos el módulo FS para manipular archivos de texto',
    },
    {
        id: 3,
        title: 'Colecciones',
        description: 'Listando colecciones desde la base de datos',
        collections: [
            {
                id: 0,
                name: 'superheroes',
                link: '/collections/heroes'
            },
        ]
    },
]

export const collectionsMenu = [
    {
        id: 0,
        name: 'Superheroes',
        description: 'Colección de superheroes creados por el equipo 8',
        link: '/collections/heroes'
    },
    {
        id: 1,
        name: '',
        description: '',
        link: ''
    },
    {
        id: 2,
        name: '',
        description: '',
        link: ''
    },
]