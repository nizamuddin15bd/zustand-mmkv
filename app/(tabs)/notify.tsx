import useCartStore from "@/store/cartStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Notify = () => {
  const { reduceProduct, addProduct, products } = useCartStore();
  return (
    <View style={{ flex: 1, marginTop: 10, width: "90%", alignSelf: "center" }}>
      <View style={styles.container}>
        <FlatList
          data={products}
          contentContainerStyle={
            {
              // marginVertical: 30,
              // gap: 20,
            }
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles?.cartItemContainer}>
              <Image
                style={styles?.cartItemImage}
                source={{ uri: item.image }}
              />
              <View style={styles?.itemContainer}>
                <Text style={styles?.cartItemName}>{item?.title}</Text>
                <Text>Price: ${item?.price}</Text>
              </View>
              <View style={styles?.buttonContainer}>
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => reduceProduct(item)}
                >
                  <Ionicons name="remove-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text>{item?.quantity}</Text>
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => addProduct(item)}
                >
                  <Ionicons name="add" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Notify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separate: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  cartItemImage: {
    width: 50,
    height: 50,
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  itemContainer: { flex: 1 },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
