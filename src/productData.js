import cinnimonRolls from './Assets/cinnimon-rolls.png'
import beans1 from './Assets/beans.png'
import eggsFlour from './Assets/eggs-flour.png'
import cupBeans from './Assets/cup-beans2.png'

const beans = [
    {
        outOfStock: true,
        name: 'Signature',
        src: process.env.PUBLIC_URL + '/assets/beanBag.png',
        type: 'Blend',
        area: 'South America',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans'
    },
    {
        outOfStock: false,
        name: 'Dark roast',
        src: process.env.PUBLIC_URL + '/assets/beanBag.png',
        type: 'Blend',
        area: 'Huila Department, Colombia',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans'
    },
    {
        outOfStock: true,
        name: 'Medim roast, Caramel',
        src: process.env.PUBLIC_URL + '/assets/beanBag.png',
        type: 'Blend',
        area: 'South America',
        sizes: [{ amount: '12 ounces', price: '8.00' }, { amount: '1 lb', price: '15.00' }, { amount: '2 lbs', price: '25.00' }],
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        ingredients: 'Beans, caremel'
    },
]

const merch = [
    {
        src: process.env.PUBLIC_URL + '/assets/merch/womansLongsleeveCrop/tanTimberlend.png',
        name: 'Womans cropped longsleeve',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '10.00',
        outOfStock: false,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        colors: ['red', 'yellow', 'black']
    },
    {
        src: process.env.PUBLIC_URL + '/assets/merch/maleSweatshirt/whiteMales.png',
        name: 'Sweatshirt',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '15.00',
        outOfStock: true,

        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!', colors: ['grey', 'white', 'black']
    },
    {
        src: process.env.PUBLIC_URL + '/assets/merch/mug2/whiteMug2.png',
        name: 'Mug w/ logo',
        sizes: [{ amount: 'Small', price: '15.00' }, { amount: 'Medium', price: '18.00' }, { amount: 'Large', price: '25.00' }],
        price: '8.00',
        outOfStock: false,
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit,sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt.Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora.Sit!',
        colors: ['grey', 'white']
    },
]

// const mainImgs = [
//     {
//         src: process.env.PUBLIC_URL + '/assets/eggs-flour.png',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         key: 1,
//     },
//     // {
//     //     src: process.env.PUBLIC_URL + '/assets/dough.png',
//     //     altText: 'Slide 2',
//     //     caption: 'Slide 2',
//     //     key: 2,
//     // },
//     // {
//     //     src: process.env.PUBLIC_URL + '/assets/croissants.png',
//     //     altText: 'Slide 3',
//     //     caption: 'Slide 3',
//     //     key: 3,
//     // },
//     {
//         src: process.env.PUBLIC_URL + '/assets/cup-beans2.png',
//         altText: 'Slide 4',
//         caption: 'Slide 4',
//         key: 4,
//     },
//     {
//         src: process.env.PUBLIC_URL + '/assets/beans.png',
//         altText: 'Slide 5',
//         caption: 'Slide 5',
//         key: 5,
//     },
//     {
//         src: process.env.PUBLIC_URL + '/assets/beans.png',
//         altText: 'Slide 6',
//         caption: 'Slide 6',
//         key: 6,
//     },
// ];
const mainImgs = [
    {
        src: eggsFlour,
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    // {
    //     src: process.env.PUBLIC_URL + '/assets/dough.png',
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