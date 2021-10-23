import { ScrollView, View, Image, Text, Pressable, FlatList, TouchableOpacity } from "react-native"
import React from "react"
import Styles from "./style"
import { Url } from '../../Middlare/Middlare'




const ScreenCategory = (props) => {


    const { category, active, filterChangeCategory } = props








    return (

        <View style={Styles.ContainerCategory}>



            <FlatList

                horizontal={true}
                data={category}
                renderItem={({ item }) =>



                    <TouchableOpacity 
                    onPress={() => filterChangeCategory(item._id)}
                    key={item._id}
                    style={[Styles.categoryBox, 
                         active == item._id ? Styles.ActivecategoryBox : null
                        ]}
                    >
                        <Image source={{uri : `${Url}${item.image}`}}
                            style={Styles.image}
                        />
                        <Text style={Styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>




                }
                keyExtractor={item => item._id}



            />







        </View>








    )
}


export default ScreenCategory


/*



        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
                key={1}
                onPress={() => { }}
                style={[Styles.Container, active == -1 ? Styles.active : Styles.inActive
                ]}

            >
                <Image source={require('../../../data/image/uppsalamat/6.jpg')}
                style={Styles.ContainerImage} />
                <Text style={Styles.Containertext}>
                    All
                </Text>
            </Pressable>



            <FlatList

                horizontal={true}
                data={category}
                renderItem={({ item }) =>

                    <Pressable
                        onPress={() => filterChangeCategory(item._id)}
                        key={item._id}
                        style={[Styles.Container, , active == item._id ? Styles.active : Styles.inActive]}
                    >
                        <Image source={{ uri: `${Url}${item.image}` }} style={Styles.ContainerImage} />
                        <Text style={Styles.Containertext, active == item._id ? Styles.active : Styles.inActive}>
                            {item.name}
                        </Text>
                    </Pressable>



                }
                keyExtractor={item => item._id}



            />
        </View>





    {productCategory?.map((item) => {
                return <Pressable
                    onPress={() => {
                        filterChangeCategory(item._id),
                            setActive(productCategory.indexOf(item))
                    }}
                    key={item._id}
                    style={[Styles.Container, { margin: 10 }, active == productCategory.indexOf(item) ? Styles.active : Styles.inActive]}
                >
                     <Image source={require('../../../data/image/uppsalamat/1.jpg')}   style={Styles.ContainerImage} />
                    <Text style={Styles.Containertext}>
                        {item.name}
                    </Text>
                </Pressable>
            })}


*/