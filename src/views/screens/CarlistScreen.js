import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
let column = 0;

const CarlistScreen = ({ }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  };

  useEffect(() => {
    fetch('https://test.borzmotor.com/api/justShowSell/vehicle-all')
      .then(response => response.json())
      .then(response => setCars(response));

    startLoading();
  }, []);

  const filteredCars = cars.filter(x => x.published);

  const Card = () => {
    return <View style={style.card}></View>;
  };

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const categoryList = ['Popüler', 'Yeni Eklenen', 'Önerilen'];
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.categoryListTextActive,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };
  const ListOptions = () => {
    const optionsList = [
      { title: 'Araç Sat', img: require('../../assets/arac-sat.png') },
      { title: 'Konsinye Bırak', img: require('../../assets/konsinye.png') },
    ];
    return (
      <View style={style.optionListContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionCard} key={index}>
            <Image style={style.optImg} source={option.img} />
            <Text style={style.optText}>{option.title}</Text>
          </View>
        ))}
      </View>
    );
  };

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
      <TouchableOpacity onPress={() => navigation.navigate('CarGalleryScreen')}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View></View>
          <View
            style={{
              alignItems: 'center',
              marginRight: 15,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text>Liste Görünümü</Text>
            <Icon name="grid-view" size={30} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
      <View>
        {loading ? (
          <View style={style.detailContainer}>
            <ActivityIndicator
              visible={loading}
              size={50}
              color={COLORS.red}
              animating
              textContent={'Araçlar Yükleniyor...'}
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
              <Text style={{ color: COLORS.dark, marginBottom: 10 }}>
                Araçlar Yükleniyor...
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingLeft: 20,
              paddingVertical: 20,
              paddingBottom: 150,
            }}
            data={filteredCars}
            numColumns={column}
            keyExtractor={item => item._id}
            renderItem={({ item, index }) => (
              <View style={style.card} key={item._id + 'w'}>
                {item.images.map(
                  (img, i) =>
                    item.images[i].case === 0 && (
                      <Pressable
                        key={i}
                        onPress={() =>
                          navigation.navigate('CarDetailScreen', {
                            primaryImage: item.images[i].name,
                            itemId: item._id,
                            itemBrand: item.brand,
                            itemModel: item.model,
                            itemKM: item.kilometers,
                            itemFuel: item.fuel,
                            itemPrice: item.price,
                            itemYear: item.year,
                            itemMotor: item.motor,
                            itemColor: item.color,
                            itemIntro: item.intro,
                            itemGear: item.gear,
                            itemBox: item.box,
                            itemDate: item.date,
                            itemTramer: item.tramer,
                            itemResponsible: item.responsible,
                            itemResponsiblePhone: item.responsiblePhone,
                          })
                        }
                        style={{ width: '40%' }}>
                        <Image
                          key={item.images[i].name}
                          resizeMode="contain"
                          source={{
                            uri:
                              'https://test.borzmotor.com/' +
                              item.images[i].name,
                          }}
                          style={style.cardImage}
                        />
                      </Pressable>
                    ),
                )}
                <View style={{ width: '50%', justifyContent: 'center' }}>
                  <View
                    style={{ width: '96%', marginLeft: '2%', marginRight: '2%' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }}>
                      {item.brand + ' - ' + item.model}
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                      {item.price + ' ₺'}
                    </Text>
                    <Text style={{ fontSize: 10 }}>{item.intro}</Text>
                  </View>
                  <View style={style.detailButtons}>
                    <View style={style.innerTexts}>
                      <Text style={{ fontSize: 12 }}>{item.kilometers + ' KM'}</Text>
                    </View>
                    <View style={style.innerTexts}>
                      <Text style={{ fontSize: 12 }}>{item.fuel}</Text>
                    </View>
                    <View style={style.innerTexts}>
                      <Text style={{ fontSize: 12 }}>{item.gear}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
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
    height: 'auto',
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.grey,
  },
  cardImage: {
    width: '100%',
    height: 85,
    borderRadius: 15,
  },
  cardDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: '#FFF',
  },
  detailContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
    height: '100%',
  },
  introWrapper: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: 'auto',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  detailButtons: {
    justifyContent: 'center',
    height: 'auto',
    alignItems: 'center',
    width: '100%',
  },
  innerTexts: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: 'auto',
    backgroundColor: COLORS.lightGrey,
  },
});
export default CarlistScreen;
