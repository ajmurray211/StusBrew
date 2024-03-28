import cinnimonRolls from './Assets/cinnimon-rolls.jpeg'
import eggsFlour from './Assets/eggs-flour.png'
import bagels from './Assets/bagles.jpeg'
import doughnuts from './Assets/doughnuts.png'
import smorescookies from './Assets/smorescookies.png'

const drinks = [
  { name: "Coffee", types: ["Espresso", "Americano", "Cappuccino", "Latte", "Mocha", "Drip Coffee"] },
  { name: "Tea", types: ["Black", "Green", "Herbal", "Chai"] },
  { name: "Iced Coffee and Iced Tea", types: [] },
  { name: "Cold Brew Coffee", types: [] },
  { name: "Hot Chocolate", types: [] },
  { name: "Specialty Coffee", types: ["Flat White", "Cortado"] },
];

const bakedGoodsSeedData = [
  {
    dropdowns: {
      ingredients: "Bananas, flour, sugar, eggs, butter, baking soda, salt, cinnamon, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0a",
    classification: "baked",
    name: "Banana Bread",
    description: "Homemade banana bread made with ripe bananas and a hint of cinnamon. Great for breakfast or a snack!",
    priceInCents: 1000,
    image: "path/to/banana-bread-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Flour, sugar, brown sugar, butter, eggs, vanilla extract, baking soda, chocolate chips, oats, raisins, peanut butter",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0b",
    classification: "baked",
    name: "12 Dozen Cookies",
    description: "A variety pack of delicious cookies, including chocolate chip, oatmeal raisin, and peanut butter.",
    priceInCents: 1500,
    image: "path/to/cookies-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Flour, sugar, cinnamon, yeast, milk, butter, eggs, cream cheese, powdered sugar, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0c",
    classification: "assorted",
    name: "Cinnamon Roll",
    description: "Soft and gooey cinnamon roll with swirls of cinnamon sugar, topped with cream cheese icing.",
    priceInCents: 500,
    image: "path/to/cinnamon-roll-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Oats, almonds, walnuts, dried cranberries, honey, coconut oil, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0d",
    classification: "assorted",
    name: "Bag of Granola",
    description: "Nutritious granola mix with a blend of oats, nuts, dried fruits, and honey. A wholesome snack!",
    priceInCents: 1500,
    image: "path/to/granola-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Flour, sugar, blueberries, milk, butter, eggs, yeast, powdered sugar, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0e",
    classification: "doughnut",
    name: "Raspberry Doughnut",
    description: "Soft and fluffy doughnut filled with sweet raspberry jam and topped with a raspberry glaze.",
    priceInCents: 180,
    image: "path/to/raspberry-doughnut-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Flour, sugar, cocoa powder, milk, butter, eggs, yeast, powdered sugar, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e0f",
    classification: "doughnut",
    name: "Chocolate Doughnut",
    description: "Decadent chocolate doughnut with a rich chocolate glaze. A chocolate lover's delight!",
    priceInCents: 200,
    image: "path/to/chocolate-doughnut-image.jpg",
    stock: 0,
  },
  {
    dropdowns: {
      ingredients: "Flour, sugar, maple syrup, milk, butter, eggs, yeast, powdered sugar, vanilla extract",
      reviews: [
        "No reviews on this product yet."
      ]
    },
    _id: "6557d5cb94ba78c510071e10",
    classification: "doughnut",
    name: "Maple Doughnut",
    description: "Classic doughnut with a sweet maple glaze, perfect for a cozy breakfast treat.",
    priceInCents: 160,
    image: "path/to/maple-doughnut-image.jpg",
    stock: 0,
  }
];
const sandwichesAndSnacks = [
  { name: "Breakfast Sandwiches", types: ["Bacon, Egg, and Cheese", "Sausage, Egg, and Cheese"] },
  { name: "Paninis", types: ["Ham and Cheese", "Turkey and Pesto", "Caprese"] },
  { name: "Wraps", types: ["Chicken Caesar", "Veggie", "Turkey Club"] },
];

const questions = [
  {
    question: "What types of coffee do you offer?",
    answer: "We offer a variety of coffee options, including espresso-based drinks, brewed coffee, and specialty beverages."
  },
  {
    question: "Can I customize my coffee order?",
    answer: "Yes, you can customize your coffee order with options like milk alternatives, syrups, and decaffeinated choices."
  },
  {
    question: "Do you offer any non-coffee options?",
    answer: "In addition to coffee, we have non-coffee beverages such as tea, hot chocolate, and cold drinks on our menu."
  },
  {
    question: "Are there any seasonal or specialty drinks?",
    answer: "We feature limited-time and seasonal drinks throughout the year. Be sure to ask about our current specials."
  },
  {
    question: "What sizes are available for your drinks?",
    answer: "We offer a range of cup sizes to suit your preference. Our sizes include small, medium, and large."
  },
  {
    question: "Do you have any food options available?",
    answer: "We offer a selection of pastries, sandwiches, and snacks that complement our coffee offerings."
  },
  {
    question: "What are your operating hours and locations?",
    answer: "You can find us at various locations and our operating hours vary. Check our website or social media for the latest updates."
  },
  {
    question: "How can I pay for my order?",
    answer: "We accept cash, credit cards, mobile payment apps, and online orders for your convenience."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes, we have options for customers with dietary restrictions, including gluten-free and vegan choices."
  },
  {
    question: "Is there outdoor seating or a place to sit nearby?",
    answer: "We provide outdoor seating, and there are also nearby areas where you can enjoy your coffee."
  },
  {
    question: "Do you offer loyalty or rewards programs?",
    answer: "Yes, we have a loyalty program that rewards our frequent customers with discounts and special offers."
  },
  {
    question: "How can I book your coffee cart for events or catering?",
    answer: "To book our coffee cart for events or catering, please contact us through our website or by phone."
  },
  {
    question: "Can I place orders in advance or for large groups?",
    answer: "Absolutely! You can place advance orders and catering requests. Contact us to discuss your specific needs."
  },
  {
    question: "Are gift cards available?",
    answer: "Yes, we offer gift cards that you can purchase and share with your friends and loved ones."
  },
];

const merch = [
  {
    "productID": "M31",
    "name": "Mug",
    "variants": [
      {
        "color": "red",
        "productImages": [
        ],
        "sizeOptions": [
          {
            "name": "small",
            "priceInCents": 1000,
          },
          {
            "name": "medium",
            "priceInCents": 1800,
          }
        ],
      }
    ],
    "outOfStock": true,
    "description": "Lorem ipsum dolor sit amet.",
  },
  {
    "productID": "4",
    "name": "Womans cropped longsleeve",
    "variants": [
      {
        "color": "tan",
        "productImages": [
        ],
        "sizeOptions": [
          {
            "name": "small",
            "priceInCents": 1000,
          },
          {
            "name": "medium",
            "priceInCents": 1800,
          }
        ],
      }
    ],
    "outOfStock": true,
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit, sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt. Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora. Sit!",
  },
  {
    "productID": "ss1",
    "name": "Sweatshirt",
    "name": "Womans cropped longsleeve",
    "variants": [
      {
        "color": "tan",
        "productImages": [
        ],
        "sizeOptions": [
          {
            "name": "small",
            "priceInCents": 1000,
          },
          {
            "name": "medium",
            "priceInCents": 1800,
          }
        ],
      }
    ],
    "outOfStock": true,
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit, sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt. Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora. Sit!",
  }
]

const beans = [
  {
    "name": "Signature",
    "productId": "1",
    "region": "South America",
    "type": "Blend",
    "variants": [
      {
        "productImages": [],
        "sizeOptions": [
          {
            "name": "12 ounces",
            "priceInCents": 800,
          },
          {
            "name": "1 lb",
            "priceInCents": 1500,
          },
          {
            "name": "2 lbs",
            "priceInCents": 2500,
          }
        ],
      }
    ],
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit, sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt. Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora. Sit!",
    "ingredients": "Beans",
    "outOfStock": true,
  },
  {
    "name": "Dark roast",
    "productId": "2",
    "region": "Huila Department, Colombia",
    "type": "Blend",
    "variants": [
      {
        "productImages": [],
        "sizeOptions": [
          {
            "name": "12 ounces",
            "priceInCents": 800,
          },
          {
            "name": "1 lb",
            "priceInCents": 1500,
          },
          {
            "name": "2 lbs",
            "priceInCents": 2500,
          }
        ],
      }
    ],
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit, sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt. Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora. Sit!",
    "ingredients": "Beans",
    "outOfStock": true,
  },
  {
    "name": "Medium roast, Caramel",
    "productId": "3",
    "region": "South America",
    "type": "Blend",
    "variants": [
      {
        "productImages": [],
        "sizeOptions": [
          {
            "name": "12 ounces",
            "priceInCents": 800,
          },
          {
            "name": "1 lb",
            "priceInCents": 1500,
          },
          {
            "name": "2 lbs",
            "priceInCents": 2500,
          }
        ],
      }
    ],
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odit enim. Laborum debitis assumenda consequatur fugit.Natus perspiciatis fugit, non nihil vel praesentium omnis qui veritatis totam repudiandae placeat est.Ut facere magni ducimus pariatur dolorem at accusantium quibusdam, quam sequi nesciunt inventore fugiat beatae odiodignissimos asperiores dolore, a sit consequuntur delectus maxime molestiae officiis adipisci reiciendis! Fugit, sequi. Cupiditate consequuntur eos consectetur tempore quisquam tempora odit at ea, perferendis non deserunt atque autem harum nesciunt. Earum a, soluta magni similique excepturi mollitia debitis quae nisi dignissimos tempora. Sit!",
    "ingredients": "Beans, caramel",
    "outOfStock": true,
  }
]

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
      to: 'products',
      title: 'Checkout our current baked goods!',
      button: 'Learn more',
      message: 'Learn about what charities we support and donate to.'
    },
  },
  {
    src: smorescookies,

    announcment: {
      to: 'products',
      title: 'We can ship merch!',
      button: 'Learn more',
      message: 'Shop Stu’s latest styles'
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

export { drinks, bakedGoodsSeedData, sandwichesAndSnacks, questions, merch, beans, mainImgs }