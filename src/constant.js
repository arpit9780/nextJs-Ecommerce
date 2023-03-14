export const TIME_OUT = 3000;
import mensFashion from "./assets/images/carousel-1.jpg"
import womenFashion from "./assets/images/carousel-2.jpg"
import kidsFashion from "./assets/images/carousel-3.jpg"
import tv from "./assets/images/cat-10.jpg"
import homeFurniture from "./assets/images/product-9.jpg"
import books from "./assets/images/cat-5.jpg"
import food from "./assets/images/cat-6.jpg"
import toy from "./assets/images/cat-7.jpg"
import shoes from "./assets/images/product-4.jpg"
import kitchenAppliance from "./assets/images/product-3.jpg"

export const appRoute = {

    // public
    CATEGORIES: "/categories",
    FEATURES: "/features",
    HOME: "/",
    OFFERS: "/offers",
    PRODUCTS: "/user/productDashboard",
    RECENT_PRODUCT: "/recent-product",
    SHOP: "/admin/shop",
    SIGNIN: "/signin",
    SIGNUP: "/signup",

    //private
    PRODUCT_CREATE: "/admin/shop/create",
    PRODUCT_UPDATE: "/admin/shop/[id]",
    SHOPPING_CARD: "/user/shopping-card",
    ADMIN: "/admin",
    USER: "/user",
    MENS_WEAR: "/categories/men-wear",
    WOMEN_WEAR: "/categories/women-wear",
    KIDS_WEAR: "/categories/kids-wear",
    BOOKS: "/categories/books",
    ELECTRONICS: "/categories/electronics",
    FOOD: "/categories/food",
    FOOTWEAR: "/categories/footwear",
    FURNITURE: "/categories/furniture",
    HEALTH: "/categories/health",
    KITCHEN: "/categories/kitchen",
    TOYS: "/categories/toys",
    TV: "/categories/tv",
}


export const pagesPath = [
    {
        name: "Men Fashion",
        img: mensFashion.src,
        url: appRoute.MENS_WEAR,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Women Fashion",
        img: womenFashion.src,
        url: appRoute.WOMEN_WEAR,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Kids Fashion",
        img: kidsFashion.src,
        url: appRoute.KIDS_WEAR,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "TVs & Appliances",
        img: tv.src,
        url: appRoute.TV,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Home & Furniture",
        img: homeFurniture.src,
        url: appRoute.FURNITURE,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Sports, Books & More",
        img: books.src,
        url: appRoute.BOOKS,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Food Essentials",
        img: food.src,
        url: appRoute.FOOD,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Toys",
        img: toy.src,
        url: appRoute.TOYS,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Footwear",
        img: shoes.src,
        url: appRoute.FOOTWEAR,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
        name: "Kitchen Appliances",
        img: kitchenAppliance.src,
        url: appRoute.KITCHEN,
        details: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
]