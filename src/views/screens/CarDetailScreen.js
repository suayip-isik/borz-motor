import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  StatusBar,
  Text,
  Dimensions,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { ImageSlider } from "react-native-image-slider-banner";

const { width } = Dimensions.get('screen');

const CarDetailScreen = ({ }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    primaryImage,
    itemId,
    itemBrand,
    itemModel,
    itemKM,
    itemFuel,
    itemPrice,
    itemYear,
    itemMotor,
    itemColor,
    itemIntro,
    itemGear,
    itemBox,
    itemDate,
    itemTramer,
    itemResponsible,
    itemResponsiblePhone,
    images,
  } = route.params;
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  };

  useEffect(() => {
    console.log("item id: ", itemId);
    console.log("")
    console.log("images: ", images)

    startLoading();
    setImagesLink();
  }, []);

  const [gallery, setGallery] = useState([])

  const setImagesLink = (itemId) => {
    images.map((img, i) => {
      setGallery(oldArray => [...oldArray, { "img": "https://test.borzmotor.com/" + img.name.toString() }])
    })
  }

  useEffect(() => {

    console.log("--");
    console.log("galeri: ", gallery);
    console.log("--");

  }, [gallery])


  return (
    <SafeAreaView style={style.safe}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={style.header}>
        <View>
          <Text style={style.location}>Konum</Text>
          <Text style={style.city}>İstanbul</Text>
        </View>
        <Image
          source={require('../../assets/borzmotor-logo.png')}
          style={style.borzlogo}
        />
      </View>
      <ScrollView>
        <ImageSlider
          data={gallery}
          autoPlay={false}
          onItemChanged={(item) => console.log("item", item)}
          closeIconColor="#fff"
        />

        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: COLORS.dark }}>ÖZELLİKLER</Text>
        </View>
        <View style={{ alignItems: 'center' }}></View>
        <View style={style.carDetailContainer}>
          <View style={style.cardDetailRow}>
            <Text style={style.carBrand}></Text>
            <Text style={style.carPrice}>{itemPrice + ' ₺'}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Marka:</Text>
            <Text style={style.detailText}>{itemBrand}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Model:</Text>
            <Text style={style.detailText}>{itemModel}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Araç Paketi:</Text>
            <Text style={style.detailText}>{itemBox}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Motor:</Text>
            <Text style={style.detailText}>{itemMotor}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>YIL:</Text>
            <Text style={style.detailText}>{itemYear}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Vites:</Text>
            <Text style={style.detailText}>{itemGear}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Yakıt:</Text>
            <Text style={style.detailText}>{itemFuel}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Kilometre:</Text>
            <Text style={style.detailText}>{itemKM}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Adres:</Text>
            <Text style={style.detailText}>{'İstanbul/Bahçelievler'}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Sorumlu Kişi:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon name="person" size={17} />
              <Text style={style.detailText}>BorzMotor</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL('tel:${+905322058058}')}>
              <View
                style={{
                  marginTop: 10,
                  width: '80%',
                  backgroundColor: '#019267',
                  paddingHorizontal: 10,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={style.virtualtext}>0532 205 80 58</Text>
                <Icon name="phone-enabled" color={COLORS.white} size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.carDetailContainer}>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Tramer:</Text>
            <Text style={style.detailText}>
              {itemTramer + ' ₺'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  location: {
    color: COLORS.grey,
  },
  city: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },
  borzlogo: {},
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  searchInput: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 250,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  optionCard: {
    height: 170,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optImg: {
    height: 80,
    borderRadius: 10,
    width: '100%',
  },
  optText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  categoryListTextActive: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  card: {
    height: 180,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.grey,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  cardDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    marginTop: 3,
  },
  carBrand: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  carPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  spinnerTextStyle: {
    color: COLORS.dark,
  },
  thumb: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
  backgrounImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
    width: width - 30,
    height: 350,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  bHeader: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -2,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#bd062c',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualtext: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  onloadText: {
    color: COLORS.dark,
  },
  virtualDetailsBtn: {
    width: '80%',
    backgroundColor: '#bd062c',
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  detailContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 35,
    alignItems: 'center',
    height: 50,
  },
  carDetailContainer: {
    height: 'auto',
    backgroundColor: COLORS.white,
    elevation: 10,
    width: '90%',
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.grey,
  },
  carTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  detailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.dark,
    textTransform: 'uppercase',
  },
  listContainer: {
    width: '100%',
    height: 'auto',
  },
});
export default CarDetailScreen;
