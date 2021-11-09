import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const defaultNavOptions ={
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    Orders: OrdersScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

// const OrdersNavigator = createStackNavigator({
//   Orders: OrdersScreen
// }, 
//   {
//     defaultNavigationOptions: defaultNavOptions
//   })

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//   },
//   {
//     drawerContentStyle: {
//       activeTintcolor: Colors.primary,
//     },
//   }
// );

export default createAppContainer(ProductsNavigator);
