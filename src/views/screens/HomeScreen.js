import React from 'react';
import {
  StyleSheet,
  Image,
  StatusBar,
  View,
  Dimensions,
  Text,
  Pressable,
  SafeAreaView
} from 'react-native';
import COLORS from '../../consts/colors';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image
        source={require('../../assets/borzmotor-cover-2.png')}
        style={style.image}
      />
      <View style={style.indicatorContainer}>
        <View style={style.indicator}></View>
        <View style={style.indicator}></View>
        <View style={[style.indicator, style.indicatorActive]}></View>
      </View>
      <View style={style.textWrapper}>
        <Text style={style.title}>Çok Farklı</Text>
        <Text style={style.title}>Bir Galeri</Text>
      </View>
      <View style={style.pWrapper}>
        <Text style={style.pText}>Size en uygun aracı</Text>
        <Text style={style.pText}>BorzMotor'da keşfedin!</Text>
      </View>
      <View style={style.clickable}>
        <Pressable onPress={() => navigation.navigate('CarGalleryScreen')}>
          <View style={style.btn}>
            <Text style={style.btntext}>Galeriye Git</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: deviceWidth / 2,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: COLORS.grey,
    resizeMode: 'contain',
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  pWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  pText: {
    fontSize: 16,
    color: COLORS.grey,
  },
  clickable: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: COLORS.white,
  },
});
export default HomeScreen;
