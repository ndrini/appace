// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// import { items } from './data';

// export default function App() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => setSelectedItem(item)}>
//       <View style={styles.item}>
//         <Image style={styles.itemImage} source={item.image} />
//         <Text style={styles.itemText}>{item.text}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderDetailPage = () => (
//     <View style={styles.detailPage}>
//       <Carousel
//         data={selectedItem.images}
//         renderItem={({ item }) => (
//           <Image style={styles.carouselImage} source={item} />
//         )}
//         sliderWidth={350}
//         itemWidth={350}
//       />
//       <Text style={styles.detailTitle}>{selectedItem.text}</Text>
//       <Text style={styles.detailText}>{selectedItem.description}</Text>
//       <TouchableOpacity
//         style={styles.detailLink}
//         onPress={() => console.log('External link clicked')}>
//         <Text style={styles.detailLinkText}>{selectedItem.linkText}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {selectedItem ? (
//         renderDetailPage()
//       ) : (
//         <FlatList
//           data={items}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   detailPage: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   carouselImage: {
//     width: 350,
//     height: 250,
//     marginBottom: 20,
//   },
//   detailTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   detailText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   detailLink: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   detailLinkText: {
//     fontSize: 16,
//     color: '#007AFF',
//   },
// });
