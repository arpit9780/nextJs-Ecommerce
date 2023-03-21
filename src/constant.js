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
import vendor1 from './assets/images/vendor-1.jpg'
import vendor2 from './assets/images/vendor-2.jpg'
import vendor3 from './assets/images/vendor-3.jpg'
import vendor4 from './assets/images/vendor-4.jpg'
import vendor5 from './assets/images/vendor-5.jpg'
import vendor6 from './assets/images/vendor-6.jpg'
import vendor7 from './assets/images/vendor-7.jpg'
import vendor8 from './assets/images/vendor-8.jpg'

export const vendors = [
    { image: vendor1.src },
    { image: vendor2.src },
    { image: vendor3.src },
    { image: vendor4.src },
    { image: vendor5.src },
    { image: vendor6.src },
    { image: vendor7.src },
    { image: vendor8.src },
]

export const appRoute = {

    // public
    CATEGORIES: "/categories",
    FEATURES: "/features",
    HOME: "/",
    OFFERS: "/offers",
    RECENT_PRODUCT: "/recent-product",
    SHOP: "/profile/shop",
    SIGNIN: "/signin",
    SIGNUP: "/signup",

    //private
    PRODUCT_CREATE: "/profile/shop/create",
    PRODUCT_UPDATE: "/profile/shop/[id]",
    SHOPPING_CARD: "/user/shopping-card",
    ADMIN: "/profile",
    ALL_USERS: "/profile/all-users",
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
    SEARCH : "/search"
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