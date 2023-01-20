import { Product } from "../../../domain/product/product.model";
import { ProductRepository } from "../../../domain/product/product.repository.model";

const productMocks: Product[] = [
  {
    name: "Vino blanco",
    price: 13,
    id: 1,
    image:
      "https://bodegasnodus.es/wp-content/uploads/2021/01/chaval-blanco-2.jpg",
  },
  {
    name: "Vino Tinto",
    price: 10,
    id: 2,
    image: "https://bodegasnodus.es/wp-content/uploads/2020/05/nodus_bobal.jpg",
  },
  {
    name: "Nestea",
    price: 2.5,
    id: 3,
    image:
      "https://www.tumenuenlaoficina.es/wp-content/uploads/2020/11/nestea.jpg",
  },
  {
    name: "Hamburguesa",
    price: 12,
    id: 4,
    image:
      "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg",
  },
  {
    name: "Pizza",
    price: 13.5,
    id: 5,
    image:
      "https://images.hola.com/imagenes/cocina/recetas/20190911149183/pizza-margarita/0-717-935/pizza-t.jpg? tx=w_680",
  },
  {
    name: "Pasta de salmón",
    price: 7,
    id: 6,
    image:
      "https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/espaguetis-salmon-queso_philadelphia_461715202_143042655_1706x960.jpg",
  },
  {
    name: "Brownie",
    price: 4,
    id: 7,
    image: "https://img2.rtve.es/v/5548331?w=1600&preview=1585575726371.jpg",
  },
  {
    name: "Tarta de queso",
    price: 4,
    id: 8,
    image: "https://i.ytimg.com/vi/4iBmo59k8Vc/maxresdefault.jpg",
  },
  {
    name: "Limonada",
    price: 1.5,
    id: 9,
    image: "https://i.blogs.es/774e9c/1366_20005/1366_2000.jpg",
  },
  {
    name: "Tarta de limón",
    price: 4,
    id: 10,
    image: "https://imag.bonviveur.com/tarta-de-limon-en-el-plato.jpg",
  },
  {
    name: "Pasta carbonara",
    price: 7,
    id: 11,
    image: "https://i.blogs.es/8819e1/carbonara-rec/1366_2000.jpg",
  },
  {
    name: "Pasta boloñesa",
    price: 8.5,
    id: 12,
    image:
      "https://cdn7.kiwilimon.com/recetaimagen/30306/960x640/33677.jpg.jpg",
  },
  {
    name: "Ensalada",
    price: 4.5,
    id: 13,
    image:
      "https://imag.bonviveur.com/ensalada-de-lechuga-y-tomate-foto-cerca.jpg",
  },
  {
    name: "Agua",
    price: 1,
    id: 14,
    image:
      "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202104/05/00118630004077____2__600x600.jpg",
  },
  {
    name: "Lasaña",
    price: 6,
    id: 15,
    image:
      "https://www.deliciosi.com/images/1500/1519/lasa%C3%B1a-de-carne-mixta.jpg",
  },
  {
    name: "Wok de carne",
    price: 11,
    id: 16,
    image:
      "https://www.divinacocina.es/wp-content/uploads/2021/07/WOK.TERNERA-VERDURAS.jpg",
  },
  {
    name: "Tortilla de patatas",
    price: 4,
    id: 17,
    image: "https://img2.rtve.es/i/?w=1600&i=1646742456228.jpg",
  },
  {
    name: "Croissant",
    price: 2.5,
    id: 18,
    image:
      "https://www.hogarmania.com/archivos/202101/cocina-recetas-como-hacer-croissants-cruasanes-caseros-668x400x80xX.jpg",
  },
  {
    name: "Café",
    price: 1.25,
    id: 19,
    image: "https://i.blogs.es/421374/cafe-con-leche2/450_1000.jpg",
  },
  {
    name: "Chocolate caliente",
    price: 1,
    id: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Turkishcoffee.jpg/800px-Turkishcoffee.jpg",
  },
  {
    name: "Crêpe",
    price: 4.5,
    id: 21,
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2022/03/best-crepes-recipe-1x1-1.jpg",
  },
  {
    name: "Muffin de arándanos",
    price: 4.5,
    id: 22,
    image:
      "https://4.bp.blogspot.com/-VZJujogTLas/WQZxilB7cCI/AAAAAAAAFfw/kb9GeoIfIUwfybHwAmPcQPiiRoLs7RUWwCLcB/s1600/muffins-caseros-de-maiz-arandanos-frescos.jpg",
  },
  {
    name: "Tacos",
    price: 7.5,
    id: 23,
    image:
      "https://saposyprincesas.elmundo.es/wp-content/uploads/2022/02/Tacos-de-pollo.jpg",
  },
  {
    name: "Quesadilla",
    price: 8.5,
    id: 24,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2021/05/Quesadillas-de-pollo.jpg",
  },
  {
    name: "Entrecot",
    price: 28,
    id: 25,
    image:
      "https://www.pequerecetas.com/wp-content/uploads/2022/10/entrecot-a-la-plancha-poco-hecho-receta.jpg",
  },
  {
    name: "Presa",
    price: 22,
    id: 29,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/2e/41/93/presa-iberica-con-patatas.jpg",
  },
];

export class ProductDevRepository implements ProductRepository {
  getProducts(): Product[] {
    return productMocks;
  }

  getProductById(id: number): Product | undefined {
    return productMocks.find((p) => p.id === id);
  }
}
