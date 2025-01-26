import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const FairDeal = () => {
  const categories = [
    {
      name: 'Cold Drinks\nJuices',
      image: require('../assets/images/coke.png'),
    },
    {
      name: 'Biscuits\nCookies',
      image: require('../assets/images/parleg.png'),
    },
    {name: 'Hygiene\nWellness', image: require('../assets/images/pads.png')},
    {
      name: 'Chocolate\nSweets',
      image: require('../assets/images/chocola.png'),
    },
    {
      name: 'Breakfast\nSauces',
      image: require('../assets/images/kellogs.png'),
    },
    {name: 'Packaged\nFood', image: require('../assets/images/maggie.png')},
  ];

  const trendingItems = [
    {
      id: '1',
      name: 'Sting Energy Drink',
      price: '₹516',
      originalPrice: '₹600',
      margin: '₹2',
      image: require('../assets/images/sting.png'),
      quantity: '250 ml',
      mrp: '₹20',
      buying: true,
    },
    {
      id: '2',
      name: 'Mountain Dew',
      price: '₹516',
      originalPrice: '₹600',
      margin: '₹2',
      image: require('../assets/images/dew.png'),
      quantity: '250 ml',
      mrp: '₹20',
      buying: false,
    },
    {
      id: '3',
      name: 'Red Bull Energy Drink',
      price: '₹516',
      originalPrice: '₹600',
      margin: '₹2',
      image: require('../assets/images/redBull.png'),
      quantity: '250 ml',
      mrp: '₹20',
      buying: false,
    },
    {
      id: '4',
      name: 'Sprite',
      price: '₹516',
      originalPrice: '₹600',
      margin: '₹2',
      image: require('../assets/images/sprite.png'),
      quantity: '250 ml',
      mrp: '₹20',
      buying: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header for the app */}
      <ImageBackground
        style={styles.header}
        source={require('../assets/images/headImage.png')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.location}>Badshahpur</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                source={require('../assets/images/map-pin.png')}
                style={{height: 17, width: 17, resizeMode: 'contain'}}
              />
              <Text style={styles.subLocation}>Gurugram, Haryana</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={require('../assets/images/rewards.png')}
              style={{height: 75, width: 75, resizeMode: 'contain'}}
            />
            <Image
              source={require('../assets/images/profile.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 0.8}}>
            <Image
              source={require('../assets/images/searchMagnifi.png')}
              style={{height: 24, width: 24, resizeMode: 'contain'}}
            />
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              flex: 0.1,
            }}>
            <View style={{height: 17, width: 2, backgroundColor: '#E3E3E3'}} />
            <Image
              source={require('../assets/images/mic.png')}
              style={{height: 24, width: 24, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </ImageBackground>

      <ScrollView nestedScrollEnabled>
        {/* Explore categories */}
        <View style={styles.categoriesContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.sectionTitle}>Explore by Categories</Text>
            <View style={{flexDirection: 'row', gap: 2}}>
              <Text style={{...styles.sectionTitle, color: '#8B8C99'}}>
                See All
              </Text>
              <Image
                source={require('../assets/images/arrow-left.png')}
                style={{height: 24, width: 24, resizeMode: 'contain'}}
              />
            </View>
          </View>
          <FlatList
            data={categories}
            numColumns={3} // Display 3 columns
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.categoryCard}>
                <View
                  style={{
                    backgroundColor: '#F0F4F8',
                    borderRadius: 15,
                    paddingHorizontal: width / 30,
                  }}>
                  <Image source={item.image} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* Trending area list */}
        <View style={styles.trendingContainer}>
          <Text style={styles.sectionTitle}>Trending in your area</Text>
          <FlatList
            data={trendingItems}
            numColumns={2} // Display 2 columns
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.trendingCard}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 999,
                    // top: 2,
                    right: 15,
                  }}>
                  {item?.buying ? (
                    <ImageBackground
                      source={require('../assets/images/offLabel.png')}
                      style={{
                        height: 26,
                        width: 30,
                        resizeMode: 'contain',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        14% off
                      </Text>
                    </ImageBackground>
                  ) : null}
                </View>
                <View style={{backgroundColor: '#F0F4F8', borderRadius: 15}}>
                  <Image source={item.image} style={styles.trendingImage} />
                  <View
                    style={{
                      backgroundColor: '#fff',
                      marginVertical: 5,
                      marginHorizontal: 5,
                      padding: 5,
                      borderRadius: 10,
                      alignSelf: 'flex-start',
                    }}>
                    <Text style={{color: '#2959A3', fontSize: 12}}>
                      MRP {item?.mrp}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#DFEDFA',
                      marginVertical: 5,
                      padding: 5,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#2959A3'}}>Pack 30</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#DFEDFA',
                      marginVertical: 5,
                      padding: 5,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: '#2959A3'}}>
                      Margin {item?.margin}
                    </Text>
                  </View>
                </View>

                <Text style={styles.trendingName}>{item.name}</Text>

                <Text
                  style={{...styles.originalPrice, textDecorationLine: 'none'}}>
                  {item?.quantity}
                </Text>

                <Text style={styles.trendingPrice}>
                  {item.price}{' '}
                  <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                </Text>
                {item?.buying ? (
                  <TouchableOpacity
                    style={{
                      ...styles.addButton,
                      backgroundColor: '#fff',
                    }}>
                    <Text
                      style={{
                        ...styles.addButtonText,
                        color: '#388E3C',
                      }}>
                      ADD
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        ...styles.addButton,
                        backgroundColor: '#388E3C',
                        flex: 0.9,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <Text
                          style={{
                            ...styles.addButtonText,
                            color: '#fff',
                          }}>
                          4 Pack
                        </Text>
                        <Image
                          source={require('../assets/images/arrow-lower.png')}
                          style={{height: 12, width: 12, resizeMode: 'contain'}}
                        />
                      </View>
                    </TouchableOpacity>
                    <Image
                      source={require('../assets/images/deleteIc.png')}
                      style={{height: 22, width: 22, resizeMode: 'contain'}}
                    />
                  </View>
                )}
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e0f7ff',
    padding: 16,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subLocation: {
    fontSize: 14,
    color: 'gray',
  },
  searchContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchInput: {
    fontSize: 16,
    textAlign: 'left',
  },
  categoriesContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'black',
  },
  categoryCard: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  trendingContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  trendingCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    // padding: 12,
    margin: 8,
    // width: '70%',
  },
  trendingImage: {
    width: '100%',
    height: 125,
    resizeMode: 'contain',
  },
  trendingName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  trendingPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  addButton: {
    marginTop: 8,
    borderColor: '#D9E0E4',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  addButtonText: {
    fontWeight: 'bold',
  },
});

export default FairDeal;
