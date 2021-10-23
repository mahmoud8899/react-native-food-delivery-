
import { Platform } from 'react-native'
export const dataSlider = ['Pizza', 'burger', 'sushi', 'kebab', 'Meat', 'chicken', 'vegetarian']
export const URIimage = 'http://192.168.0.138:8000'


export let Url = ''

{
    Platform.OS === 'android' ?
        Url = 'http://192.168.0.9:8000'
        : Url = 'http://192.168.0.9:8000'
}




export const LingthMax = (name, max = 16) => {

    if (name.length > max) {
        return name.slice(0, max - 2) + '..';
    }

    return name
}


export const AddAdesss = [
    {
        name: 'Mahmoud alamdhoud',
        adress: 'heluplsa edc 2',
        city: 'Uppsala',
        zipCode: '2333 43',
        phone: +942323223232,

    }
]

export const MethodCart = [
    {
        id: 1,
        name: 'crdit cart'
    }, {

        id: 2,
        name: 'Bank transfer'

    }
]

export const cunstNmae = (name, maxSize = 40) => {

    if (name?.length > maxSize) {

        return name.slice(0, maxSize - 3) + '...';
    }

    return name

}


export const ListData = [


    {
        id: 4,
        name: 'kebab',
        image: require('../../data/image/uppsalamat/1.jpg'),
        price: 40,
        rating: 1,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '1'
        },
    },


    {
        id: 5,
        name: 'Meat',
        image: require('../../data/image/uppsalamat/2.jpg'),
        price: 50,
        rating: 1,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '2'
        },
    },

    {
        id: 6,
        name: 'chicken',
        image: require('../../data/image/uppsalamat/3.jpg'),
        price: 60,
        rating: 2.5,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },

    {
        id: 7,
        name: 'chicken',
        image: require('../../data/image/uppsalamat/3.jpg'),
        price: 60,
        rating: 2.5,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },


    {
        id: 7,
        name: 'chicken',
        image: require('../../data/image/uppsalamat/3.jpg'),
        price: 60,
        rating: 2.5,
        description: 'On Android, React Navigation hooks in to the hardwar when the user presses it, so it behaves as the user would expect.',
        category: {
            id: '3'
        },
    },




]



export const categoryName = [
    {
        id: '1',
        name: 'Electronics'
    },
    {
        id: '2',
        name: 'Beauty'
    },
    {
        id: '3',
        name: 'Computers'
    },
    {
        id: '4',
        name: 'Garden'
    },


]


export const LooImageSlider = [
    require('../../data/image/uppsalamat/1.jpg'),
    require('../../data/image/uppsalamat/2.jpg'),
    require('../../data/image/uppsalamat/3.jpg'),

]




