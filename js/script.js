var menuData = {
    categorias: ['Promociones', 'Hamburguesas', 'Pizzas', 'Sandwiches', 'Empanadas', 'Picadas', 'Postres', 'Bebidas sin Alcohol', 'Cervezas'],
    productos: {
        Promociones: [
            {
                nombre: 'Combo Burger',
                descripcion: '2 Hamburguesas Simples + papas fritas + gaseosa',
                precio: '16.500',
                imagen: 'assets/promoções/promo1.webp',
                esPromo: true
            },
            {
                nombre: 'Pizza + Gaseosa',
                descripcion: 'Pizza grande + gaseosa 2L',
                precio: '18.750',
                imagen: 'assets/promoções/promo2.webp',
                esPromo: true
            }
        ],
        Hamburguesas: [
            {
                nombre: 'Hamburguesa Simple',
                descripcion: 'Hamburguesa simple con jugoso blend de carne vacuna y mucho queso derretido en pan brioche.',
                precio: '6.400',
                imagen: 'assets/hamburgueres/x-burger.webp'
            },
            {
                nombre: 'Hamburguesa Completa',
                descripcion: 'Hamburguesa completa con carne vacuna, jamón, queso, lechuga, tomate y mayonesa casera en pan brioche.',
                precio: '7.100',
                imagen: 'assets/hamburgueres/x-salada.webp'
            },
            {
                nombre: 'Hamburguesa Especial',
                descripcion: 'Hamburguesa especial con blend de carne vacuna, queso derretido y fetas crocantes de bacon en pan sellado en manteca.',
                precio: '7.900',
                imagen: 'assets/hamburgueres/x-bacon.webp'
            },
            {
                nombre: 'Hamburguesa Súper',
                descripcion: 'Hamburguesa súper: blend vacuno, bacon, huevo, jamón, queso, lechuga, tomate y mayonesa especial.',
                precio: '10.100',
                imagen: 'assets/hamburgueres/x-tudo.webp'
            }
        ],
        Pizzas: [
            {
                nombre: 'Pizza Margarita',
                descripcion: 'El clásico napolitano con salsa de tomate, muzarella, rodajas de tomate fresco, albahaca y aceite de oliva.',
                precio: '10.500',
                imagen: 'assets/pizzas/marguerita.webp'
            },
            {
                nombre: 'Pizza de Calabresa',
                descripcion: 'Salsa de tomate artesanal, muzarella, fetas de calabresa ahumada especial, cebolla fresca y aceitunas negras.',
                precio: '12.000',
                imagen: 'assets/pizzas/calabresa.webp'
            },
            {
                nombre: 'Pizza Portuguesa',
                descripcion: 'Salsa de tomate, muzarella, jamón cocido, huevos duros picados, cebolla, arvejas y aceitunas.',
                precio: '12.750',
                imagen: 'assets/pizzas/portuguesa.webp'
            },
            {
                nombre: 'Pizza Cuatro Quesos',
                descripcion: 'Una rica combinación de muzarella, provolone, gorgonzola y catupiry original sobre salsa de tomate.',
                precio: '13.900',
                imagen: 'assets/pizzas/quatro-queijos.webp'
            }
        ],
        Sandwiches: [
            {
                nombre: 'Sándwich Común',
                descripcion: 'Sándwich de jamón y queso con lechuga fresca, rodajas de tomate y mayonesa en pan.',
                precio: '9.500',
                imagen: 'assets/sandwiches/sandwich-comun.webp'
            },
            {
                nombre: 'Sándwich Especial',
                descripcion: 'Sándwich de jamón, queso, huevo duro, lechuga, tomate y mayonesa casera en pan.',
                precio: '11.500',
                imagen: 'assets/sandwiches/sandwich-especial.webp'
            },
            {
                nombre: 'Sándwich de Lomito',
                descripcion: 'Sándwich de lomo vacuno con jamón, queso, huevo frito, lechuga, tomate y mayonesa en pan francés.',
                precio: '15.000',
                imagen: 'assets/sandwiches/sandwich-lomito.webp'
            },
            {
                nombre: 'Sándwich Súper',
                descripcion: 'Sándwich súper completo: lomo, bacon, huevo, jamón, queso, lechuga, tomate y mayonesa especial.',
                precio: '18.000',
                imagen: 'assets/sandwiches/sandwich-super.webp'
            }
        ],
        Empanadas: [
            {
                nombre: 'Empanada de Carne',
                descripcion: 'La docena de empanadas de carne cortada a cuchillo, huevo duro, aceitunas verdes y condimento especial.',
                precio: '10.500',
                imagen: 'assets/empanadas/empanada-de-carne.webp'
            },
            {
                nombre: 'Empanada de Pollo',
                descripcion: 'La docena de empanadas de pollo desmenuzado, cebolla, morrón, huevo duro y especias.',
                precio: '10.000',
                imagen: 'assets/empanadas/empanada-de-pollo.webp'
            },
            {
                nombre: 'Empanada de Jamón y Queso',
                descripcion: 'La docena de empanadas de jamón cocido y queso muzarella fundido en tapas artesanales.',
                precio: '8.500',
                imagen: 'assets/empanadas/empanada-de-jamon-queso.webp'
            },
            {
                nombre: 'Empanada Caprese',
                descripcion: 'La docena de empanadas de muzarella, tomate fresco, albahaca y un toque de aceite de oliva.',
                precio: '9.500',
                imagen: 'assets/empanadas/empanada-de-caprese.webp'
            }
        ],
        Picadas: [
            {
                nombre: 'Picada para Dos',
                descripcion: 'Tabla de fiambres y quesos para dos personas: jamón, salame, queso, aceitunas y pan.',
                precio: '14.000',
                imagen: 'assets/picadas/picada-para-dos.webp'
            },
            {
                nombre: 'Picada para Cuatro',
                descripcion: 'Tabla grande de fiambres y quesos para cuatro: jamón, salame, lomito ahumado, queso, aceitunas, pan y pickles.',
                precio: '24.000',
                imagen: 'assets/picadas/picada-para-cuatro.webp'
            },
            {
                nombre: 'Papas con Cheddar y Panceta',
                descripcion: 'Papas fritas crocantes bañadas en salsa cheddar con panceta crocante picada.',
                precio: '9.500',
                imagen: 'assets/picadas/papas-con-cheddar-panceta.webp'
            },
            {
                nombre: 'Papas con Cheddar, Panceta, Verdeo y Huevos',
                descripcion: 'Papas fritas crocantes con salsa cheddar, panceta, cebolla de verdeo y huevo frito.',
                precio: '12.000',
                imagen: 'assets/picadas/papas-con-cheddar-panceta-verdeo-huevos.webp'
            }
        ],
        Postres: [
            {
                nombre: 'Copa de Helado 3 Sabores',
                descripcion: 'Copa con tres bochas de helado cremoso a elección en sabores clásicos.',
                precio: '7.000',
                imagen: 'assets/postres/copa-de-helado-3-sabores.webp'
            },
            {
                nombre: 'Porción de Torta Helada',
                descripcion: 'Porción de torta helada con capas de vainilla, chocolate y crema americana.',
                precio: '8.500',
                imagen: 'assets/postres/porcion-de-torta-helada.webp'
            },
            {
                nombre: 'Cayote con Nueces',
                descripcion: 'Postre de cayote en almíbar con nueces picadas y un toque de crema.',
                precio: '6.000',
                imagen: 'assets/postres/postre-cayote-con-nueces.webp'
            },
            {
                nombre: 'Flan Casero',
                descripcion: 'Clásico flan de leche casero con dulce de leche y crema batida.',
                precio: '6.500',
                imagen: 'assets/postres/postre-flan.webp'
            }
        ],
        'Bebidas sin Alcohol': [
            {
                nombre: 'Agua sin Gas',
                descripcion: 'Agua mineral natural sin gas en botella de 500cc, bien fría.',
                precio: '2.000',
                imagen: 'assets/sin-alcohol/agua-sin-gas.webp'
            },
            {
                nombre: 'Agua con Gas',
                descripcion: 'Agua mineral con gas en botella de 500cc, refrescante y fría.',
                precio: '2.500',
                imagen: 'assets/sin-alcohol/agua-con-gas.webp'
            },
            {
                nombre: 'Pepsi 500cc',
                descripcion: 'Gaseosa Pepsi cola en botella de 500cc bien helada.',
                precio: '3.000',
                imagen: 'assets/sin-alcohol/gaseosa-pepsi-500cc.webp'
            },
            {
                nombre: 'Sprite 500cc',
                descripcion: 'Gaseosa Sprice sabor lima-limón en botella de 500cc super fría.',
                precio: '3.000',
                imagen: 'assets/sin-alcohol/gaseosa-sprite-500cc.webp'
            },
            {
                nombre: 'Mirinda Naranja 500cc',
                descripcion: 'Gaseosa Mirinda sabor naranja en botella de 500cc bien fresca.',
                precio: '3.000',
                imagen: 'assets/sin-alcohol/gaseosa-mirinda-naranja-500cc.webp'
            },
            {
                nombre: 'Seven Up 500cc',
                descripcion: 'Gaseosa Seven Up sabor lima-limón en botella de 500cc helada.',
                precio: '3.000',
                imagen: 'assets/sin-alcohol/gaseosa-seven-up-500cc.webp'
            }
        ],
        Cervezas: [
            {
                nombre: 'Heineken 475cc',
                descripcion: 'Cerveza premium lager puro malte importada en botella de 475cc bien helada.',
                precio: '6.000',
                imagen: 'assets/cervezas/cerveza-heineken-475cc.webp'
            },
            {
                nombre: 'Budweiser 475cc',
                descripcion: 'Cerveza premium americana tipo lager en botella de 475cc extra fría.',
                precio: '5.500',
                imagen: 'assets/cervezas/cerveza-budweiser-475cc.webp'
            },
            {
                nombre: 'Stella Artois 475cc',
                descripcion: 'Cerveza premium belga puro malte en botella de 475cc con aroma suave y final refrescante.',
                precio: '5.500',
                imagen: 'assets/cervezas/cerveza-stella-artois-475cc.webp'
            },
            {
                nombre: 'Quilmes 475cc',
                descripcion: 'Cerveza rubia clásica argentina tipo pilsen en botella de 475cc bien tirada.',
                precio: '4.000',
                imagen: 'assets/cervezas/cerveza-quilmes-475cc.webp'
            },
            {
                nombre: 'Norte 475cc',
                descripcion: 'Cerveza rubia argentina suave y refrescante en botella de 475cc.',
                precio: '4.000',
                imagen: 'assets/cervezas/cerveza-norte-475cc.webp'
            },
            {
                nombre: 'Brahma 475cc',
                descripcion: 'Cerveza pilsen argentina de sabor equilibrado en botella de 475cc helada.',
                precio: '4.000',
                imagen: 'assets/cervezas/cerveza-brahma-475cc.webp'
            }
        ]
    }
};

/* ===== ICONOS SVG PARA CADA TIPO ===== */
var iconosSVG = {
    sandwich: '<svg viewBox="0 0 24 24"><path d="M3 6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V8C21 9.1 20.1 10 19 10H5C3.9 10 3 9.1 3 8V6ZM4 12H20L19 20H5L4 12ZM7 6H9V8H7V6ZM11 6H13V8H11V6Z"/></svg>',
    burger: '<svg viewBox="0 0 24 24"><path d="M5 10C5 6.13 8.13 3 12 3S19 6.13 19 10H5ZM4 12H20C20.55 12 21 12.45 21 13S20.55 14 20 14H4C3.45 14 3 13.55 3 13S3.45 12 4 12ZM5 16H19C19.55 16 20 16.45 20 17V18C20 19.66 18.66 21 17 21H7C5.34 21 4 19.66 4 18V17C4 16.45 4.45 16 5 16Z"/></svg>',
    pizza: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 4C12.33 4 12.67 4.02 13 4.06L12 8L11 4.06C11.33 4.02 11.67 4 12 4ZM4.06 13L8 12L4.06 11C4.02 11.33 4 11.67 4 12S4.02 12.67 4.06 13ZM12 20C11.67 20 11.33 19.98 11 19.94L12 16L13 19.94C12.67 19.98 12.33 20 12 20ZM8.5 8.5L6.34 5.34C7.1 4.62 8.02 4.08 9.04 3.76L8.5 8.5ZM15.5 8.5L14.96 3.76C15.98 4.08 16.9 4.62 17.66 5.34L15.5 8.5ZM19.94 11L16 12L19.94 13C19.98 12.67 20 12.33 20 12S19.98 11.33 19.94 11ZM15.5 15.5L17.66 18.66C16.9 19.38 15.98 19.92 14.96 20.24L15.5 15.5ZM8.5 15.5L9.04 20.24C8.02 19.92 7.1 19.38 6.34 18.66L8.5 15.5Z"/></svg>',
    postre: '<svg viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7C7 8.4 7.6 9.65 8.56 10.54L6 18H18L15.44 10.54C16.4 9.65 17 8.4 17 7C17 4.24 14.76 2 12 2ZM12 4C13.66 4 15 5.34 15 7S13.66 10 12 10S9 8.66 9 7S10.34 4 12 4ZM8.8 16L9.6 13.5H14.4L15.2 16H8.8Z"/></svg>',
    bebida: '<svg viewBox="0 0 24 24"><path d="M6 2V4H8V4.29L5.28 20.24C5.1 21.24 5.88 22 6.88 22H17.12C18.12 22 18.9 21.24 18.72 20.24L16 4.29V4H18V2H6ZM9.32 8H14.68L15.08 10H8.92L9.32 8ZM8.12 14H15.88L16.28 16H7.72L8.12 14ZM7.44 18H16.56L16.88 20H7.12L7.44 18Z"/></svg>'
};

/* ===== REFERENCIAS DOM ===== */
var listaCategorias = document.getElementById('listaCategorias');
var contenedorMenu = document.getElementById('contenedorMenu');
var scrollBloqueado = false;

/* ===== SCROLL SOLO HORIZONTAL PARA CATEGORIAS ===== */
function centrarBtnCategoria(btn) {
    var container = document.getElementById('listaCategorias');
    var btnOffset = btn.offsetLeft;
    var center = btnOffset - (container.clientWidth / 2) + (btn.offsetWidth / 2);
    container.scrollTo({ left: center, behavior: 'smooth' });
}

/* ===== RENDERIZAR CATEGORIAS ===== */
function renderCategorias() {
    listaCategorias.innerHTML = '';
    menuData.categorias.forEach(function (cat, index) {
        var btn = document.createElement('button');
        btn.className = 'categorias__btn' + (index === 0 ? ' categorias__btnActivo' : '');
        btn.textContent = cat;
        btn.setAttribute('data-cat', cat);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.addEventListener('click', function () {
            seleccionarCategoria(cat);
        });
        listaCategorias.appendChild(btn);
    });
}

/* ===== SELECCIONAR CATEGORIA ===== */
function seleccionarCategoria(cat) {
    scrollBloqueado = true;

    /* Actualizar estado visual de botones */
    var botones = listaCategorias.querySelectorAll('.categorias__btn');
    for (var i = 0; i < botones.length; i++) {
        var btn = botones[i];
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'true');
            centrarBtnCategoria(btn);
        } else {
            btn.classList.remove('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'false');
        }
    }

    /* Scroll vertical a la seccion correspondiente */
    var seccion = document.getElementById('grupo_' + cat);
    if (seccion) {
        var catAltura = document.querySelector('.categorias').offsetHeight;
        var destino = seccion.offsetTop - catAltura - 6;
        window.scrollTo({ top: destino, behavior: 'smooth' });
    }

    /* Desbloquear el scroll spy despues de un momento */
    setTimeout(function () {
        scrollBloqueado = false;
    }, 800);
}

/* ===== RENDERIZAR MENU ===== */
function renderMenu() {
    contenedorMenu.innerHTML = '';

    menuData.categorias.forEach(function (cat) {
        var grupo = document.createElement('div');
        grupo.className = 'menu__grupo';
        grupo.id = 'grupo_' + cat;

        /* Encabezado de categoria */
        var encabezado = document.createElement('div');
        encabezado.className = 'menu__encabezado';

        var titulo = document.createElement('h2');
        titulo.className = 'menu__titulo';
        titulo.textContent = cat;

        var linea = document.createElement('div');
        linea.className = 'menu__linea';

        var puntos = document.createElement('div');
        puntos.className = 'menu__puntos';
        puntos.setAttribute('aria-hidden', 'true');
        for (var p = 0; p < 3; p++) {
            var punto = document.createElement('span');
            punto.className = 'menu__punto';
            puntos.appendChild(punto);
        }

        encabezado.appendChild(titulo);
        encabezado.appendChild(linea);
        encabezado.appendChild(puntos);

        /* Grid de productos */
        var grid = document.createElement('div');
        grid.className = 'menu__grid';

        var productos = menuData.productos[cat];
        for (var i = 0; i < productos.length; i++) {
            var prod = productos[i];
            grid.appendChild(crearCard(prod));
        }

        grupo.appendChild(encabezado);
        grupo.appendChild(grid);
        contenedorMenu.appendChild(grupo);
    });
}

/* ===== CREAR CARD DE PRODUCTO ===== */
function crearCard(prod) {
    var card = document.createElement('article');
    card.className = 'card';
    if (prod.esPromo) {
        card.classList.add('card--promo');
    }

    /* Imagen */
    var imagen = document.createElement('div');
    imagen.className = 'card__imagen';

    var fondo = document.createElement('div');
    fondo.className = 'card__imagenFondo';
    fondo.style.backgroundImage = 'url("assets/fondo_card.webp")';
    fondo.style.backgroundSize = 'cover';
    fondo.style.backgroundPosition = 'center';

    var overlay = document.createElement('div');
    overlay.className = 'card__imagenOverlay';

    var imgProd = document.createElement('img');
    imgProd.src = prod.imagen;
    imgProd.className = 'card__productoImg';
    imgProd.alt = prod.nombre;

    imagen.appendChild(fondo);
    imagen.appendChild(overlay);
    imagen.appendChild(imgProd);

    /* Contenido */
    var contenido = document.createElement('div');
    contenido.className = 'card__contenido';

    var nombre = document.createElement('h3');
    nombre.className = prod.esPromo ? 'card__nombre--promo' : 'card__nombre';
    nombre.textContent = prod.nombre;

    var descripcion = document.createElement('p');
    descripcion.className = prod.esPromo ? 'card__descripcion--promo' : 'card__descripcion';
    descripcion.textContent = prod.descripcion;

    var precio = document.createElement('span');
    precio.className = prod.esPromo ? 'card__precio--promo' : 'card__precio';
    precio.textContent = '$ ' + prod.precio;

    contenido.appendChild(nombre);
    contenido.appendChild(descripcion);
    contenido.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(contenido);

    return card;
}

/* ===== SCROLL SPY CON INTERSECTIONOBSERVER ===== */
function iniciarScrollSpy() {
    var opciones = {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
        /* Si el scroll foi provocado por click, não atualizar */
        if (scrollBloqueado) return;

        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                var cat = entry.target.id.replace('grupo_', '');
                var botones = listaCategorias.querySelectorAll('.categorias__btn');
                for (var j = 0; j < botones.length; j++) {
                    var btn = botones[j];
                    if (btn.getAttribute('data-cat') === cat) {
                        btn.classList.add('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'true');
                        centrarBtnCategoria(btn);
                    } else {
                        btn.classList.remove('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'false');
                    }
                }
                break;
            }
        }
    }, opciones);

    var grupos = contenedorMenu.querySelectorAll('.menu__grupo');
    for (var i = 0; i < grupos.length; i++) {
        observer.observe(grupos[i]);
    }
}

/* ===== INICIALIZACION ===== */
renderCategorias();
renderMenu();
iniciarScrollSpy();