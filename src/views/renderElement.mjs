export const site = {
    title: 'g8 | CRUD',
    logo: 'g8',
    isActive: 'heroes',
    mainTag: '',
    nav:
    [
        {
            id: 'home',
            title: 'Home',
            description: 'fullstack JS mod 3 sp3 tp3 | grupo 8 | rupaboy',
            link: '/api/',
            isHidden: false,
        },
        {
            id: 'heroes',
            title: 'Dashboard',
            description: 'Colección Superhéroes',
            link: '/api/heroes/',
            isHidden: false,
        },
        {
            id: 'error404',
            title: 'Error 404',
            description: 'Página no disponible',
            link: '404',
            isHidden: true,
        },
    ],
    subNav:
    [    
        {
            id: 'add',
            title: 'Agregar Héroe',
            description: 'Llena los campos para crear un nuevo Héroe',
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
            isHidden: false,
        },
        {
            id: 'reset',
            title: 'Reiniciar formulario',
            description: 'Vacía todos los campos del formulario',
            isHidden: false,
        },
    ],
    editNav:
    [    
        {
            id: 'submit',
            title: 'Confirmar Cambios',
            description: 'Cambia el superhéroe de la colección',
            isHidden: false,
        },
        {
            id: 'reset',
            title: 'Recuperar datos originales',
            description: 'Recupera los datos originales del formulario',
            isHidden: false,
        },
    ],
    deleteNav:
    [    
        {
            id: 'confirm',
            title: 'Confirmar Eliminación',
            description: 'Elimina el superhéroe de la colección',
            isHidden: false,
        },
        {
            id: 'cancel',
            title: 'Cancelar eliminación',
            description: 'Cancela la eliminación del superhéroe.',
            isHidden: false,
        },
    ],
    resultNav:
    [    
        {
            id: 'edit',
            title: 'Editar Héroe',
            description: 'Editar todos los atributos',
            isHidden: false,
        },
        {
            id: 'del',
            title: 'Eliminar Héroe',
            description: 'Elimina a éste superhéroe de la colección',
            isHidden: false,
        },
    ],
    trashNav:
    [    
        {
            id: 'recover',
            title: 'Recuperar Héroe',
            description: 'Devuelve el superhéroe a la colección',
            isHidden: false,
        },
    ],
};