export const site = {
    title: 'g8 | CRUD',
    logo: 'g8',
    isActive: '',
    errorTag: '',
    nav:
    [
        {
            id: 'home',
            title: 'Home',
            description: 'fullstack JS mod 3 sp3 tp3 | grupo 8 | rupaboy',
            icon: '⌂',
            link: '/api/',
            isHidden: false,
            
        },
        {
            id: 'all',
            title: 'Dashboard',
            description: 'Colección Superhéroes',
            icon: '⇓',
            link: '/api/heroes/',
            isHidden: false,
            
        },
        {
            id: 'error404',
            title: 'Error 404',
            description: 'La URL es incorrecta o no está disponible',
            icon: '☹',
            link: '404',
            isHidden: true,
        },
        {
            id: 'error500',
            title: 'Error 500',
            description: 'Error de datos del servidor',
            icon: '☠',
            link: '500',
            isHidden: true,
        },
        {
            id: 'error400',
            title: 'Error 400',
            description: 'Solicitud incorrecta',
            icon: '⚠',
            link: '400',
            isHidden: true,
        },
        {
            id: 'result',
            title: 'Results',
            description: 'Resultados filtrados',
            icon: '👁',
            link: '',
            isHidden: true,
        },
    ],
    collectionNav:
    [    
        {
            id: 'find',
            title: 'Buscar',
            description: 'Buscar por atributo',
            icon: '⌕',
            link: '/api/heroes/buscar',
            isHidden: false,
        },  
        {
            id: 'add',
            title: 'Agregar Héroe',
            description: 'Llena los campos para crear un nuevo Héroe',
            icon: '+',
            link: '/api/heroes/nuevo',
            isHidden: false,
        },
    ],
    addNav:
    [    
        {
            id: 'submit',
            title: 'Confirmar Héroe',
            description: 'Agrega el superhéroe a la colección',
            icon: '⮠',
            isHidden: false,
        },
        {
            id: 'reset',
            title: 'Reiniciar formulario',
            description: 'Vacía todos los campos del formulario',
            icon: '↺',
            isHidden: false,
        },
    ],
    editNav:
    [    
        {
            id: 'submit',
            title: 'Confirmar Cambios',
            description: 'Edición de atributos del superhéroe',
            icon: '⮠',
            isHidden: false,
        },
        {
            id: 'reset',
            title: 'Recuperar datos originales',
            description: 'Recupera los datos originales del formulario',
            icon: '↺',
            isHidden: false,
        },
    ],
    deleteNav:
    [    
        {
            id: 'confirm',
            title: 'Confirmar Eliminación',
            description: 'Elimina el superhéroe de la colección',
            icon: '🗑',
            isHidden: false,
        },
        {
            id: 'cancel',
            title: 'Cancelar eliminación',
            description: 'Cancela la eliminación del superhéroe.',
            icon: '↶',
            isHidden: false,
        },
    ],
    resultNav:
    [    
        {
            id: 'edit',
            title: 'Editar Héroe',
            description: 'Editar todos los atributos',
            icon: '✍',
            isHidden: false,
        },
        {
            id: 'del',
            title: 'Eliminar Héroe',
            description: 'Elimina a éste superhéroe de la colección',
            icon: '🗑',
            isHidden: false,
        },
    ],
    trashNav:
    [    
        {
            id: 'recover',
            title: 'Recuperar Héroe',
            description: 'Devuelve el superhéroe a la colección',
            icon: '♻',
            isHidden: false,
        },
    ],
};