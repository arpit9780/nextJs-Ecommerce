import { appRoute } from '@/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Layout from '@/component/layout';


const PrivateRoute = ({ children }) => {
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false);

    const { role, token } = useSelector((state) => {
        return {
            role: state?.RootReducer?.authSlice?.role,
            token : state?.RootReducer?.authSlice?.Token
        }
    })

    useEffect(() => {
        setHydrated(true);
    }, [role]);
    if (!hydrated) {
        return null;
    }



    let unProtectedRoutes = [
        appRoute.FEATURES,
        appRoute.HOME,
        appRoute.OFFERS,
        appRoute.RECENT_PRODUCT,
        appRoute.SEARCH,

        appRoute.ADMIN,
        appRoute.SIGNIN,
        appRoute.SIGNUP,

        appRoute.CATEGORIES,
        appRoute.MENS_WEAR,
        appRoute.KIDS_WEAR,
        appRoute.WOMEN_WEAR,
        appRoute.BOOKS,
        appRoute.ELECTRONICS,
        appRoute.FOOD,
        appRoute.FOOTWEAR,
        appRoute.FURNITURE,
        appRoute.HEALTH,
        appRoute.KITCHEN,
        appRoute.TOYS,
        appRoute.TV,
    ]

    let userRoutes = [
        appRoute.CATEGORIES,
        appRoute.FEATURES,
        appRoute.HOME,
        appRoute.SEARCH,

        appRoute.RECENT_PRODUCT,
        appRoute.OFFERS,
        appRoute.SHOPPING_CARD,
        appRoute.USER,

        appRoute.CATEGORIES,
        appRoute.MENS_WEAR,
        appRoute.KIDS_WEAR,
        appRoute.WOMEN_WEAR,
        appRoute.BOOKS,
        appRoute.ELECTRONICS,
        appRoute.FOOD,
        appRoute.FOOTWEAR,
        appRoute.FURNITURE,
        appRoute.HEALTH,
        appRoute.KITCHEN,
        appRoute.TOYS,
        appRoute.TV,
    ]

    let adminRoutes = [
        appRoute.FEATURES,
        appRoute.HOME,
        appRoute.ALL_USERS,
        appRoute.SEARCH,

        appRoute.SHOP,
        appRoute.PRODUCT_CREATE,
        appRoute.PRODUCT_UPDATE,
        appRoute.ADMIN
    ]

    const pathIsUnProtected = unProtectedRoutes.indexOf(router.pathname) === -1;
    const adminPath = adminRoutes.indexOf(router.pathname) === -1;
    const userPath = userRoutes.indexOf(router.pathname) === -1;


    if (token === undefined && !role && pathIsUnProtected) {
        router.push(appRoute.HOME);
    } else if (token !== undefined && role === "Welcome admin..!!" && adminPath) {
        router.push(appRoute.SHOP);
    } else if (token !== undefined && role === "Welcome user..!!" && userPath) {
        router.push(appRoute.HOME)
    }
    return <Layout>
        {children}
    </Layout>
}

export default PrivateRoute