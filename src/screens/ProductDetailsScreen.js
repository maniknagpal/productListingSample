import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useGetProductByIdQuery} from '../services/productsApi';
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const {item: product} = useRoute().params;
  // const { data, error, isLoading } = useGetProductByIdQuery(id); // Fetch product details by ID
  // if (isLoading) {
  //     return (
  //       <View style={styles.container}>
  //         <ActivityIndicator size="large" color="#007bff" />
  //       </View>
  //     );
  //   }
  //   if (error) {
  //     return (
  //       <View style={styles.container}>
  //         <Text style={styles.errorText}>Something went wrong: {error.message}</Text>
  //       </View>
  //     );
  //   }

  //   console.log(data,'data is consoling here')
  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image source={{uri: product.image}} style={styles.productImage} />

      {/* Product Heading */}
      <Text style={styles.heading}>{product.title}</Text>

      {/* Product Subheading */}
      <Text style={styles.subheading}>{product.description}</Text>

      {/* Product Rating */}
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>
          Ratings: {product.rating.rate}/5 {`(${product.rating.count}) reviews`}
        </Text>
      </View>

      {/* Product Price */}
      <Text style={styles.price}>Price: ₹{product.price}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
