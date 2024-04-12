import React from "react";
import { useState } from "react";
import { AppLoading } from "expo";
// import { ImageBackground } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import logo from "./assets/eerie_tides_logo.png";
import landing_temp_cover from "./assets/landing_temp_cover.jpeg";

export async function loadFonts() {
  await Font.loadAsync({
    MyFont: require("./assets/fonts/Morganite-Bold.ttf"),
  });
}

const TeamMember = ({ name, position, image }) => (
  <View style={styles.teamMember}>
    <Image source={image} style={styles.teamMemberImage} />
    <View style={styles.infoContainer}>
      <Text style={{ fontWeight: 700 }}>{name}</Text>
      <Text>{position}</Text>
    </View>
  </View>
);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Image source={landing_temp_cover} style={styles.bannerImage} />
        <View style={styles.banner}>
          <View style={styles.coverButton}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() =>
                Linking.openURL("https://eerie-tides-landing.vercel.app")
              }
            >
              <Text style={styles.playButtonText}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.storyContainer}>
          <Text style={styles.storyTitle}>Story</Text>
          <Text style={styles.storyText}>
            Eerie tides is an under-water horror themed videogame. Where the
            player gets imersed into an underwater accident, trying to uncover
            the misteries that bring to reality that eerie feeling you get when
            diving into deep waters.
          </Text>
        </View>
        <Text style={styles.storyTitle}>Eerie Tides's Team</Text>

        <View style={styles.teamContainer}>
          <View style={styles.teamColumn}>
            <TeamMember
              name="Ivan Lua"
              position="Game Developer"
              image="https://avatars.githubusercontent.com/u/71847983?v=4"
            />
            <TeamMember
              name="Derek Alvarado"
              position="Music Producer"
              image="https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/417065052_399587009533028_5320411093734619725_n.jpg?ccb=11-4&oh=01_ASAPk1TdywG-cMMH-syXDJbozJYnUA3vOLAV_Dbn0Lm0_A&oe=66231D23&_nc_sid=e6ed6c&_nc_cat=106"
            />
            <TeamMember
              name="Salvador Perez"
              position="Game Developer"
              image="https://avatars.githubusercontent.com/u/134955611?v=4"
            />
            <TeamMember
              name="Jonatan Caleb"
              position="Game Developer"
              image="https://avatars.githubusercontent.com/u/71664858?v=4"
            />
          </View>
          <View style={styles.teamColumn}>
            <TeamMember
              name="Carlos Salazar"
              position="Game Developer"
              image="https://avatars.githubusercontent.com/u/80538989?v=4"
            />
            <TeamMember
              name="Carlos Acosta"
              position="Game Developer"
              image="https://avatars.githubusercontent.com/u/71846585?v=4"
            />
            <TeamMember
              name="Mauricio Ruiz"
              position="Graphic Designer"
              image="https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/425016303_1363126774369231_137642594200464304_n.jpg?ccb=11-4&oh=01_ASBJi73_1c4DzfvJRig4WhPBW4WivTFSGpMAAZPPrh7dOQ&oe=661B0366&_nc_sid=e6ed6c&_nc_cat=106"
            />
            <TeamMember
              name="Andres Villa"
              position="Graphic Designer"
              image="https://avatars.githubusercontent.com/u/134955611?v=4"
            />
            <TeamMember
              name="Omar Ramos"
              position="Story Designer"
              image="https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/426180734_751318329965227_476812138117648195_n.jpg?ccb=11-4&oh=01_ASC7-rKkAkmhEISsd0eyQUqRv70iBiyswE-m2HfaSKY9Vg&oe=6620350A&_nc_sid=e6ed6c&_nc_cat=101"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  teamMemberImage: {
    filter: "grayscale(100%) contrast(1.2)",
    flex: 1,
    width: "100%",
    height: 200,
  },
  teamContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: 20,
    gap: 20,
    height: "3000px",
    flex: 1,
  },
  teamColumn: {
    gap: 20,
  },
  teamMember: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    width: "180px",
  },
  logo: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  banner: {
    alignItems: "center",
    width: "80%",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  playButton: {
    marginTop: 20,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  playButtonText: {
    fontWeight: 700,
    fontSize: 20,
    color: "black",
  },
  storyContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  storyTitle: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 10,
    color: "white",
  },
  storyText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  storyImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  callToAction: {
    alignItems: "center",
  },
  seeYourTimesText: {
    fontSize: 30,
    marginBottom: 10,
    color: "white",
  },
  leaderboardButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  leaderboardButtonText: {
    fontSize: 20,
    color: "black",
  },
});

export default App;
