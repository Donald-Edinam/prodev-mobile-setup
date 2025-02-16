import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/assets/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Other components go here */}
          <View style={styles.companyLogo}>
            <Image source={require("@/assets/assets/Logo.png")} />
          </View>
        </ImageBackground>
        <View style={styles.textGroup}>
          <Text style={styles.textLarge}>Find your favorite place here</Text>
          <Text style={styles.textSmall}>The best prices for over 2 </Text>
          <Text style={styles.textSmall}>million properties worldwide</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.textSmall}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", paddingVertical: 20, position: "absolute", top: 600, width: "100%" }}>
          <Text style={{ color: "white" }}>Continue to home</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 1,
  },
  textGroup: {
    alignItems: "center",
    padding: 20,
    position: "absolute",
     top: 100
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    position: "absolute",
    top: 500,
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});