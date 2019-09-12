import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '40%' }}
            >
              <Block flex style={styles.profileCard2}>
              <Block middle style={styles.avatarContainer}>
                  <Image
                    source={Images.ProfilePicture}
                    style={styles.avatar}
                  />
                </Block>
              </Block>
              <Text
                size={23}
                color="#525F7F"
                style={{ marginLeft: '5%', marginTop: '3%' }}>
                LOREM
              </Text>
              <Block flex style={styles.profileCard}>
                <Block style={styles.info}>
                  <Block row space="between">
                    <Block middle style={{marginLeft: -10}}> 
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={8}>Ligar</Text>
                    </Block>
                    <Block middle style={{marginLeft: 5}}>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={8}>Serviços</Text>
                    </Block>
                    <Block middle style={{marginLeft: 5}}>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={8}>Endereço</Text>
                    </Block>
                    <Block middle style={{marginLeft: 5}}>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={8}>Comentários</Text>
                    </Block>
                    <Block middle style={{marginLeft: 5}}>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={8}>Favoritos</Text>
                    </Block>
                  </Block>
                </Block>
                  <Block   
                    style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1, }}
                  >
                  </Block>
                 <Text style={{marginTop:'3%'}}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida egestas enim vel dapibus. Nullam vitae nulla turpis. Vestibulum luctus venenatis risus vel faucibus. Sed non scelerisque libero. Integer faucibus viverra porttitor. Nulla id diam est. Etiam pretium urna volutpat velit posuere, at tempor mauris molestie. In faucibus diam leo, vel efficitur lorem euismod non. Aliquam non sagittis justo. 
                 </Text>
                 <Block row space="between">
                    <Block middle style={{marginTop: 40}}> 
                     <Image
                      source={{uri : Images.ProfilePicture2}}
                      style={styles.avatar2}
                     />
                    </Block>
                    <Block middle style={{marginTop: 40, marginLeft: -50}}>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                       nome do meliante
                      </Text>
                      <Text size={8}>comentario do meliante</Text>
                    </Block>
                    <Block middle style={{marginTop: 40}}>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={8}>Serviços</Text>
                    </Block>
                  </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 3.5
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 35,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
  },
  profileCard2: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  info: {
    paddingHorizontal: 40,
    marginTop: 24,
     paddingBottom: 24
  },
  avatarContainer: {
    marginTop: -12
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
    position: 'absolute',
    right: 0 
  },
  avatar2: {
    width: 84,
    height: 84,
    borderRadius: 43,
    borderWidth: 0,
    marginTop:30
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
