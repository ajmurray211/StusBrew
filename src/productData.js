import cinnimonRolls from './Assets/cinnimon-rolls.png'
import beans1 from './Assets/beans.png'
import eggsFlour from './Assets/eggs-flour.png'
import cupBeans from './Assets/cup-beans2.png'
import beanBag from './Assets/beanBag.png'

const importAll = (r) => r.keys().map(r);
const generalImages = importAll(require.context('./Assets', false, /\.(png|jpe?g|svg)$/));
const maleSweatshirt = importAll(require.context('./Assets/Merch/maleSweatshirt', false, /\.(png|jpe?g|svg)$/));
const mug1 = importAll(require.context('./Assets/Merch/mug1', false, /\.(png|jpe?g|svg)$/));
const mug2 = importAll(require.context('./Assets/Merch/mug2', false, /\.(png|jpe?g|svg)$/));
const womansLongsleeveCrop = importAll(require.context('./Assets/Merch/womansLongsleeveCrop', false, /\.(png|jpe?g|svg)$/));

const beans = [
    {
        outOfStock: true,
        name: 'Signature',
        src: [generalImages[0]],
        type: 'Blend',
        area: 'South America',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans'
    },
    {
        outOfStock: false,
        name: 'Dark roast',
        src: [generalImages[0]],
        type: 'Blend',
        area: 'Huila Department, Colombia',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans'
    },
    {
        outOfStock: true,
        name: 'Medim roast, Caramel',
        src: [generalImages[0]],
        type: 'Blend',
        area: 'South America',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans, caremel'
    },
]

const merch = [
    {
        src: womansLongsleeveCrop,
        name: 'Womans cropped longsleeve',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '10.00',
        outOfStock: false,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        colors: ['red', 'yellow', 'black']
    },
    {
        src: maleSweatshirt,
        name: 'Sweatshirt',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '15.00',
        outOfStock: true,

        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!', colors: ['grey', 'white', 'black']
    },
    {
        src: mug2,
        name: 'Mug w/ logo',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '8.00',
        outOfStock: false,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        colors: ['grey', 'white']
    },
]

const mainImgs = [
    {
        src: eggsFlour,
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    // {
    //     src: '../Assets/dough.png',
    //     altText: 'Slide 2',
    //     caption: 'Slide 2',
    //     key: 2,
    // },
    {
        src: cinnimonRolls,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
    {
        src: cupBeans,
        altText: 'Slide 4',
        caption: 'Slide 4',
        key: 4,
    },
    {
        src: beans1,
        altText: 'Slide 5',
        caption: 'Slide 5',
        key: 5,
    },
];


export { beans, merch, mainImgs }