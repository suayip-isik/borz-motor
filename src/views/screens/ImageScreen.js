import React from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import ImageZoom from 'react-native-image-pan-zoom';

const ImageScreen = ({ }) => {
  const navigation = useNavigation();

  const route = useRoute();
  const { selectedImage } = route.params;

  return (
    <SafeAreaView style={style.safe}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 25,
          width: '100%',
          height: 40,
        }}>
        <View
          style={{
            backgroundColor: COLORS.dark,
            justifyContent: 'center',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-ios"
              color={COLORS.white}
              style={{ marginLeft: 15 }}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={200}
        imageHeight={200}>
        <Image
          resizeMode="contain"
          style={{ width: 200, height: 200 }}
          source={{ uri: selectedImage }}
        />
      </ImageZoom>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    height: '100%',
    width: '100%',
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
export default ImageScreen;
