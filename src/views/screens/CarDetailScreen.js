import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  Text,
  Modal,
  Animated,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import COLORS from '../../consts/colors';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

//const deviceWidth = Dimensions.get('window').width;
const {width} = Dimensions.get('screen');

const CarDetailScreen = ({}) => {
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
    fetch('https://test.borzmotor.com/api/justShowSell/vehicle-all')
      .then(response => response.json())
      .then(response => setCar(response));

    startLoading();
  }, []);  

  const gallery = [];

  const logoList = [
    {
      brand: 'renault',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/renault.png',
    },
    {
      brand: 'citroen',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/citroen.png',
    },
    {
      brand: 'fiat',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/fiat.png',
    },
    {
      brand: 'opel',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/opel.png',
    },
    {
      brand: 'hyundai',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/hyundai.png',
    },
    {
      brand: 'ds auto',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/ds.png',
    },
    {
      brand: 'ford',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/ford.png',
    },
    {
      brand: 'mini',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/mini.png',
    },
    {
      brand: 'skoda',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/skoda.png',
    },
    {
      brand: 'kia',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/kia.png',
    },
    {
      brand: 'toyota',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/toyota.png',
    },
    {
      brand: 'volkswagen',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/volkswagen.png',
    },
    {
      brand: 'harley davidson',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/audi.png',
    },
    {
      brand: 'audi',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/audi.png',
    },
    {
      brand: 'land rover',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/land-rover.png',
    },
    {
      brand: 'honda',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/honda.png',
    },
    {
      brand: 'dodge',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/dodge.png',
    },
    {
      brand: 'seat',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/seat.png',
    },
    {
      brand: 'peugeot',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/peugeot.png',
    },
    {
      brand: 'nissan',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/nissan.png',
    },
    {
      brand: 'bmw',
      logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/bmw.png',
    },
  ];

  const filteredCars = car.filter(
    x =>
      x._id === itemId &&
      x.images.map((img, i) => {
        gallery.push('https://test.borzmotor.com/' + x.images[i].name);
      }),
  );

  //console.log(JSON.stringify(gallery));

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
      {/*
      <View style={style.searchWrapper}>
        <View style={style.searchInput}>
          <Icon name="search" size={25} color={COLORS.grey} />
          <TextInput placeholder="Model veya Markaya Göre Ara..." />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" color={COLORS.white} size={25} />
        </View>
      </View>
      */}
      <ScrollView>
        {/*
        <ListOptions></ListOptions>
        <ListCategories></ListCategories>        
        */}
        <View style={style.listContainer}>
          {loading ? (
            <View
              style={{
                marginTop: 5,
                marginBottom: 45,
                alignItems: 'center',
                height: 50,
              }}>
              <ActivityIndicator
                visible={loading}
                size={50}
                color={COLORS.red}
                animating
                textContent={'Resimler Yükleniyor...'}
              />
              <View
                style={{
                  width: '80%',
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 20,
                  height: 40,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: COLORS.dark,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: COLORS.dark, marginBottom: 10}}>
                  Resimler Yükleniyor...
                </Text>
              </View>
            </View>
          ) : (
            <SliderBox
              images={gallery}
              sliderBoxHeight={250}
              parentWitdh={'100%'}
              onCurrentImagePressed={index =>
                navigation.navigate('ImageScreen', {
                  selectedImage: gallery[index],
                })
              }
              dotColor="#FFEE58"
              inactiveDotColor={COLORS.white}
              paginationBoxVerticalPadding={20}
              autoplay
              autoplayInterval={5000}
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'contain'}
              paginationBoxStyle={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
              }}
              dotStyle={{
                width: 4,
                height: 4,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                borderRadius: 15,
                width: '97%',
                marginTop: 5,
              }}
              imageLoadingColor="#2196F3"
            />
          )}
          <View style={style.virtualTag}>
            <Text style={style.virtualtext}>
              {itemBrand.toUpperCase() + ' - ' + itemModel.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.dark}}>ÖZELLİKLER</Text>
        </View>
        <View style={{alignItems: 'center'}}></View>
        <View style={style.carDetailContainer}>
          <View style={style.cardDetailRow}>
            <Text style={style.carBrand}></Text>
            <Text style={style.carPrice}>{itemPrice + ' ₺'}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Marka:</Text>
            <Text style={style.detailText}>{itemBrand.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Model:</Text>
            <Text style={style.detailText}>{itemModel.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Araç Paketi:</Text>
            <Text style={style.detailText}>{itemBox.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Motor:</Text>
            <Text style={style.detailText}>{itemMotor.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>YIL:</Text>
            <Text style={style.detailText}>{itemYear.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Vites:</Text>
            <Text style={style.detailText}>{itemGear.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Yakıt:</Text>
            <Text style={style.detailText}>{itemFuel.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Kilometre:</Text>
            <Text style={style.detailText}>{itemKM.toUpperCase()}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Adres:</Text>
            <Text style={style.detailText}>{'İstanbul/Bahçelievler'}</Text>
          </View>
          <View style={style.cardDetailRow}>
            <Text style={style.detailText}>Sorumlu Kişi:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="person" size={17} />
              <Text style={style.detailText}>BorzMotor</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=> Linking.openURL('tel:${+905322058058}')}>
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
              {itemTramer.toUpperCase() + ' ₺'}
            </Text>
          </View>
        </View>
      </ScrollView>
      {/*
      <Image style={style.thumb} source={{uri:"https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/"+filteredCars[0].brand+".png"}} />
      */}
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
  },
  listContainer: {
    width: '100%',
    height: 'auto',
  },
});
export default CarDetailScreen;
