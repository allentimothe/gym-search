import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "13.50",
    image: "https://www.nuggetmarket.com/media/images/10/03/beef-lasagna-square.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "13.50",
    image: "https://more.ctv.ca/content/dam/lifestyle/uploadImg/2020/4/5/the-cheesiest-meat-lasagna.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "13.50",
    image: "https://static01.nyt.com/images/2021/02/19/dining/aw-lasagna/merlin_183955317_b1b74946-185c-4471-8741-e48728f9639d-articleLarge.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "13.50",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F04%2F13%2Fuse.png",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "13.50",
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/gluten-free-dairy-free-lasagna.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
