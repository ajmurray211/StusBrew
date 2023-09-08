import cinnimonRolls from './Assets/cinnimon-rolls.jpeg'
import eggsFlour from './Assets/eggs-flour.png'
import bagels from './Assets/bagles.jpeg'
import doughnuts from './Assets/doughnuts.png'
import smorescookies from './Assets/smorescookies.png'

console.log(smorescookies)

const importAll = (r) => r.keys().map(r);
const generalImages = importAll(require.context('./Assets', false, /\.(png|jpe?g|svg)$/));
const maleSweatshirt = importAll(require.context('./Assets/Merch/maleSweatshirt', false, /\.(png|jpe?g|svg)$/));
const mug1 = importAll(require.context('./Assets/Merch/mug1', false, /\.(png|jpe?g|svg)$/));
const mug2 = importAll(require.context('./Assets/Merch/mug2', false, /\.(png|jpe?g|svg)$/));
const womansLongsleeveCrop = importAll(require.context('./Assets/Merch/womansLongsleeveCrop', false, /\.(png|jpe?g|svg)$/));

const mainImgs = [
    {
        src: eggsFlour,
        announcment: {
            to: 'about',
            title: 'Lending a helping bean',
            button: 'Learn more',
            message: 'Learn about what charities we support and donate to.'
        }
    },
    {
        src: bagels,
        announcment: {
            to: 'about',
            title: "Stu's story",
            button: 'Learn more',
            message: 'The story of Stu and why this shop means so much.'
        }
    },
    {
        src: cinnimonRolls,
        announcment: {
            to: 'beanPage',
            title: 'Checkout our current baked goods!',
            button: 'Learn more',
            message: 'Learn about what charities we support and donate to.'
        },
    },
    {
        src: smorescookies,

        announcment: {
            to: 'merchPage',
            title: 'Checkout our current Merch!',
            button: 'Learn more',
            message: 'Find the hottest stus styles on the block.'
        },
    },
    {
        src: doughnuts,
        announcment: {
            to: 'about',
            title: 'Lending a helping bean',
            button: 'Learn more',
            message: 'Learn about what charities we support and donate to.'
        }
        ,
    },
];


export { mainImgs }