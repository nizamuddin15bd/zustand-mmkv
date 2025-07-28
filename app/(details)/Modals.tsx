import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Modals = () => {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>Modals</Text>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {},
});
