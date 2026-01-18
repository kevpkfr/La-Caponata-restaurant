export const products = [
  // 🫒 ANTIPASTI (Entradas)
  {
    id: 1,
    name: "Caponata Siciliana",
    slug: "caponata-siciliana",
    price: 8.5,
    category: "antipasti",
    description:
      "Plato tradicional siciliano a base de berenjena asada, tomate confitado, aceitunas negras y alcaparras, aliñado con aceite de oliva extra virgen.",
    promo: true,
    image:
      "https://imag.bonviveur.com/presentacion-de-la-caponata-siciliana.jpg",
    tags: ["tradicional", "vegetariano", "vegano"],
    prepTime: "15 min",
    spicy: false
  },
  {
    id: 2,
    name: "Arancini al Ragù",
    slug: "arancini-al-ragu",
    price: 7.5,
    category: "antipasti",
    description:
      "Croquetas de arroz Arborio rellenas de ragú de ternera, queso mozzarella y guisantes, empanizadas y fritas al punto justo.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w-800&auto=format&fit=crop",
    tags: ["frito", "clásico", "crujiente"],
    prepTime: "20 min",
    spicy: false
  },
  {
    id: 3,
    name: "Bruschetta Pomodoro",
    slug: "bruschetta-pomodoro",
    price: 6.5,
    category: "antipasti",
    description:
      "Rebanadas de pan rústico tostado con tomate fresco, albahaca, ajo y aceite de oliva de primera prensada.",
    promo: true,
    image:
      "https://img-global.cpcdn.com/recipes/8f4e0473c9521f20/300x426cq80/bruschetta-di-pomodoro-e-basilico-foto-principal.webp",
    tags: ["clásico", "vegetariano", "fresco"],
    prepTime: "10 min",
    spicy: false
  },
  {
    id: 4,
    name: "Prosciutto e Melone",
    slug: "prosciutto-e-melone",
    price: 9.5,
    category: "antipasti",
    description:
      "Fino jamón de Parma acompañado de melón cantalupo fresco, una combinación clásica italiana.",
    promo: false,
    image:
      "https://duespaghetti.com/wp-content/uploads/2023/11/Prosciutto-e-melone-scaled-720x540.jpg",
    tags: ["clásico", "premium", "fresco"],
    prepTime: "5 min",
    spicy: false
  },
  {
    id: 5,
    name: "Carpaccio di Manzo",
    slug: "carpaccio-di-manzo",
    price: 12.5,
    category: "antipasti",
    description:
      "Finas láminas de lomo de res curada, con rúcula, queso parmesano y salsa de mostaza y miel.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop",
    tags: ["premium", "gourmet", "crudo"],
    prepTime: "15 min",
    spicy: false
  },

  // 🍕 PIZZAS SICILIANAS
  {
    id: 6,
    name: "Pizza Margherita",
    slug: "pizza-margherita",
    price: 12.5,
    category: "pizzas",
    description:
      "La pizza clásica italiana con salsa de tomate San Marzano, mozzarella di bufala fresca, albahaca y aceite de oliva.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
    tags: ["pizza", "clásico", "vegetariano"],
    prepTime: "25 min",
    spicy: false
  },
  {
    id: 7,
    name: "Pizza Siciliana",
    slug: "pizza-siciliana",
    price: 14.99,
    category: "pizzas",
    description:
      "Pizza de masa gruesa estilo Sicilia con tomate, cebolla morada, anchoas, aceitunas Kalamata y orégano.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop",
    tags: ["pizza", "tradicional", "salado"],
    prepTime: "30 min",
    spicy: false
  },
  {
    id: 8,
    name: "Pizza Quattro Formaggi",
    slug: "pizza-quattro-formaggi",
    price: 15.5,
    category: "pizzas",
    description:
      "Mezcla perfecta de cuatro quesos italianos: gorgonzola, mozzarella, parmesano y fontina sobre masa artesanal.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop",
    tags: ["pizza", "quesos", "cremosa"],
    prepTime: "28 min",
    spicy: false
  },
  {
    id: 9,
    name: "Pizza Diavola",
    slug: "pizza-diavola",
    price: 16.5,
    category: "pizzas",
    description:
      "Para los amantes del picante: salami picante, mozzarella, aceitunas y chiles rojos frescos.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=800&auto=format&fit=crop",
    tags: ["pizza", "picante", "carnes"],
    prepTime: "25 min",
    spicy: true
  },
  {
    id: 10,
    name: "Pizza Funghi e Tartufo",
    slug: "pizza-funghi-e-tartufo",
    price: 18.5,
    category: "pizzas",
    description:
      "Pizza gourmet con champiñones Portobello, queso taleggio, rúcula y aceite de trufa negra.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=800&auto=format&fit=crop",
    tags: ["pizza", "gourmet", "vegetariano"],
    prepTime: "30 min",
    spicy: false
  },

  // 🍝 PRIMI PIATTI (Pastas)
  {
    id: 11,
    name: "Pasta alla Norma",
    slug: "pasta-alla-norma",
    price: 13.99,
    category: "primi",
    description:
      "Pasta rigatoni con salsa de tomate, berenjena frita, ricotta salata y albahaca fresca.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop",
    tags: ["pasta", "vegetariano", "tradicional"],
    prepTime: "20 min",
    spicy: false
  },
  {
    id: 12,
    name: "Spaghetti ai Frutti di Mare",
    slug: "spaghetti-frutti-di-mare",
    price: 18.5,
    category: "primi",
    description:
      "Spaghetti al dente con mariscos frescos: mejillones, camarones, calamares y almejas en salsa de vino blanco.",
    promo: false,
    image:
      "https://img.taste.com.au/ZZyXt5Qy/taste/2016/11/spaghettoni-with-ai-frutti-di-mare-78797-1.jpeg",
    tags: ["mariscos", "fresco", "clásico"],
    prepTime: "25 min",
    spicy: false
  },
  {
    id: 13,
    name: "Fettuccine Alfredo",
    slug: "fettuccine-alfredo",
    price: 14.5,
    category: "primi",
    description:
      "Fettuccine casero con salsa cremosa de parmesano, mantequilla y pimienta negra recién molida.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop",
    tags: ["pasta", "cremosa", "clásico"],
    prepTime: "18 min",
    spicy: false
  },
  {
    id: 14,
    name: "Risotto ai Funghi Porcini",
    slug: "risotto-ai-funghi-porcini",
    price: 16.99,
    category: "primi",
    description:
      "Risotto cremoso con hongos porcini secos, caldo de verduras y queso parmesano reggiano.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop",
    tags: ["risotto", "vegetariano", "cremoso"],
    prepTime: "30 min",
    spicy: false
  },
  {
    id: 15,
    name: "Lasagna alla Bolognese",
    slug: "lasagna-alla-bolognese",
    price: 15.5,
    category: "primi",
    description:
      "Capas de pasta fresca, ragú de carne, besciamella y queso parmesano horneado al punto perfecto.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop",
    tags: ["horneado", "clásico", "confort"],
    prepTime: "35 min",
    spicy: false
  },

  // 🍖 SECONDI PIATTI (Platos principales)
  {
    id: 16,
    name: "Pollo alla Siciliana",
    slug: "pollo-alla-siciliana",
    price: 16.99,
    category: "secondi",
    description:
      "Pechuga de pollo guisada con tomate cherry, aceitunas verdes, alcaparras y hierbas mediterráneas.",
    promo: false,
    image:
      "https://www.giallozafferano.es/images/10-1038/pollo-a-la-siciliana_1200x800.jpg",
    tags: ["pollo", "tradicional", "guisado"],
    prepTime: "40 min",
    spicy: false
  },
  {
    id: 17,
    name: "Pesce al Limone",
    slug: "pesce-al-limone",
    price: 22.5,
    category: "secondi",
    description:
      "Filete de lubina fresca con salsa ligera de limón siciliano, alcaparras y perejil italiano.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop",
    tags: ["pescado", "ligero", "fresco"],
    prepTime: "25 min",
    spicy: false
  },
  {
    id: 18,
    name: "Ossobuco alla Milanese",
    slug: "ossobuco-alla-milanese",
    price: 28.5,
    category: "secondi",
    description:
      "Codillo de ternera guisado lentamente con vino blanco, verduras y gremolata, acompañado de risotto.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop",
    tags: ["ternera", "gourmet", "tradicional"],
    prepTime: "120 min",
    spicy: false
  },
  {
    id: 19,
    name: "Cotoletta alla Milanese",
    slug: "cotoletta-alla-milanese",
    price: 19.5,
    category: "secondi",
    description:
      "Milanesa de ternera empanizada y frita en mantequilla, servida con limón y ensalada.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop",
    tags: ["ternera", "frito", "clásico"],
    prepTime: "30 min",
    spicy: false
  },
  {
    id: 20,
    name: "Agnello al Forno",
    slug: "agnello-al-forno",
    price: 26.5,
    category: "secondi",
    description:
      "Pierna de cordero horneada lentamente con romero, ajo y patatas al romero.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop",
    tags: ["cordero", "horneado", "premium"],
    prepTime: "90 min",
    spicy: false
  },

  // 🍰 DOLCI (Postres)
  {
    id: 21,
    name: "Cannoli Siciliani",
    slug: "cannoli-siciliani",
    price: 6.99,
    category: "dolci",
    description:
      "Rollo crujiente relleno de ricotta dulce artesanal, chips de chocolate y frutas confitadas.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    tags: ["postre", "clásico", "tradicional"],
    prepTime: "10 min",
    spicy: false
  },
  {
    id: 22,
    name: "Cassata Siciliana",
    slug: "cassata-siciliana",
    price: 7.5,
    category: "dolci",
    description:
      "Pastel tradicional de ricotta, bizcocho al limoncello, frutas confitadas y cubierta de mazapán.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop",
    tags: ["postre", "tradicional", "rico"],
    prepTime: "15 min",
    spicy: false
  },
  {
    id: 23,
    name: "Tiramisù Classico",
    slug: "tiramisu-classico",
    price: 8.5,
    category: "dolci",
    description:
      "Postre clásico italiano con capas de bizcocho Savoiardi embebido en café, crema de mascarpone y cacao.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop",
    tags: ["postre", "clásico", "cremoso"],
    prepTime: "12 min",
    spicy: false
  },
  {
    id: 24,
    name: "Panna Cotta ai Frutti di Bosco",
    slug: "panna-cotta-ai-frutti-di-bosco",
    price: 7.5,
    category: "dolci",
    description:
      "Crema de vainilla cuajada servida con salsa de frutos rojos frescos y menta.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop",
    tags: ["postre", "cremoso", "frutal"],
    prepTime: "8 min",
    spicy: false
  },
  {
    id: 25,
    name: "Gelato Artigianale",
    slug: "gelato-artigianale",
    price: 5.5,
    category: "dolci",
    description:
      "Helado artesanal italiano. Sabores: pistacho siciliano, stracciatella, limoncello o nocciola.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop",
    tags: ["helado", "artesanal", "refrescante"],
    prepTime: "5 min",
    spicy: false
  },

  // 🍷 BEVANDE (Bebidas)
  {
    id: 26,
    name: "Limonata Italiana",
    slug: "limonata-italiana",
    price: 4.5,
    category: "bebidas",
    description:
      "Bebida refrescante de limón natural siciliano con menta fresca y poco azúcar.",
    promo: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWacal_Eh5QDlYkS8-bkIgOOo7Alt0prr9A&s",
    tags: ["refresco", "natural", "fresco"],
    prepTime: "3 min",
    spicy: false
  },
  {
    id: 27,
    name: "Vino Tinto Siciliano",
    slug: "vino-tinto-siciliano",
    price: 7.99,
    category: "bebidas",
    description:
      "Copa de Nero d'Avola, vino tinto siciliano con cuerpo y notas a frutos rojos.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&auto=format&fit=crop",
    tags: ["vino", "premium", "tinto"],
    prepTime: "2 min",
    spicy: false
  },
  {
    id: 28,
    name: "Vino Blanco Chardonnay",
    slug: "vino-blanco-chardonnay",
    price: 7.5,
    category: "bebidas",
    description:
      "Copa de Chardonnay siciliano, fresco y afrutado, perfecto para mariscos y pastas.",
    promo: false,
    image:
      "https://yavinoclub.com/wp-content/uploads/2022/03/wine-2789265_1280-min-1.jpg",
    tags: ["vino", "blanco", "afrutado"],
    prepTime: "2 min",
    spicy: false
  },
  {
    id: 29,
    name: "Espresso Italiano",
    slug: "espresso-italiano",
    price: 3.5,
    category: "bebidas",
    description:
      "Café espresso tradicional italiano, fuerte y aromático, servido con azúcar al gusto.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&auto=format&fit=crop",
    tags: ["café", "tradicional", "energético"],
    prepTime: "5 min",
    spicy: false
  },
  {
    id: 30,
    name: "Aperol Spritz",
    slug: "aperol-spritz",
    price: 9.5,
    category: "bebidas",
    description:
      "Cóctel italiano clásico con Aperol, prosecco y soda, decorado con naranja.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop",
    tags: ["cóctel", "refrescante", "clásico"],
    prepTime: "8 min",
    spicy: false
  },

  // 🧀 PLATOS ESPECIALES
  {
    id: 31,
    name: "Gnocchi al Pesto Genovese",
    slug: "gnocchi-al-pesto-genovese",
    price: 14.5,
    category: "primi",
    description:
      "Gnocchi de papa caseros con pesto fresco de albahaca genovesa, piñones y queso parmesano.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop",
    tags: ["pasta", "vegetariano", "cremoso"],
    prepTime: "22 min",
    spicy: false
  },
  {
    id: 32,
    name: "Polpo alla Griglia",
    slug: "polpo-alla-griglia",
    price: 19.5,
    category: "antipasti",
    description:
      "Pulpo a la parrilla con puré de patatas, aceite de oliva picante y limón confitado.",
    promo: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRs1wKpKUJcBQ4ZFdULVuF4veYdabTVPiRUw&s",
    tags: ["mariscos", "gourmet", "parrilla"],
    prepTime: "35 min",
    spicy: true
  },
  {
    id: 33,
    name: "Tagliata di Manzo",
    slug: "tagliata-di-manzo",
    price: 24.5,
    category: "secondi",
    description:
      "Corte de ribeye a la parrilla, cortado en finas láminas sobre rúcula con aceite de trufa.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop",
    tags: ["carne", "premium", "parrilla"],
    prepTime: "25 min",
    spicy: false
  },
  {
    id: 34,
    name: "Pizza Vegetariana",
    slug: "pizza-vegetariana",
    price: 13.5,
    category: "pizzas",
    description:
      "Pizza con berenjena, calabacín, pimientos asados, aceitunas y queso de cabra.",
    promo: false,
    image:
      "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=800&auto=format&fit=crop",
    tags: ["pizza", "vegetariano", "saludable"],
    prepTime: "28 min",
    spicy: false
  },
  {
    id: 35,
    name: "Affogato al Caffè",
    slug: "affogato-al-caffe",
    price: 6.5,
    category: "dolci",
    description:
      "Bola de helado de vainilla bañada en espresso caliente, servida con galletas amaretti.",
    promo: true,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop",
    tags: ["postre", "café", "caliente/frío"],
    prepTime: "7 min",
    spicy: false
  }
];

// Categorías para el filtrado (actualizadas)
export const categories = [
  { id: "antipasti", name: "Antipasti", label: "Entradas", count: 6 },
  { id: "pizzas", name: "Pizzas", label: "Pizzas Sicilianas", count: 6 },
  { id: "primi", name: "Primi", label: "Pastas y Risottos", count: 7 },
  { id: "secondi", name: "Secondi", label: "Platos Principales", count: 6 },
  { id: "dolci", name: "Dolci", label: "Postres Italianos", count: 6 },
  { id: "bebidas", name: "Bebidas", label: "Bebidas y Vinos", count: 5 }
];

// Función para obtener productos por categoría
export const getProductsByCategory = (category) => {
  if (category === "todos") return products;
  return products.filter(product => product.category === category);
};

// Función para obtener productos en promoción
export const getPromoProducts = () => {
  return products.filter(product => product.promo);
};

// Función para buscar productos
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};