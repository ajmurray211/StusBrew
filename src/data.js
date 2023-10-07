const drinks = [
  { name: "Coffee", types: ["Espresso", "Americano", "Cappuccino", "Latte", "Mocha", "Drip Coffee"] },
  { name: "Tea", types: ["Black", "Green", "Herbal", "Chai"] },
  { name: "Iced Coffee and Iced Tea", types: [] },
  { name: "Cold Brew Coffee", types: [] },
  { name: "Hot Chocolate", types: [] },
  { name: "Specialty Coffee", types: ["Flat White", "Cortado"] },
];

const pastriesAndBakedGoods = [
  { name: "Croissants", types: ["Plain", "Chocolate", "Almond"] },
  { name: "Muffins", types: ["Blueberry", "Banana Nut", "Chocolate Chip"] },
  { name: "Bagels", types: ["with Cream Cheese", "Jam", "As Sandwiches"] },
  { name: "Cookies", types: ["Chocolate Chip", "Oatmeal Raisin", "Sugar"] },
  { name: "Brownies", types: [] },
  { name: "Coffee Cake", types: [] },
  { name: "Donuts", types: [] },
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
          "75c4c005-b10a-44d3-9f44-f9a3748a690e.png"
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
          "e8af6aa8-3037-470f-8d2c-4ec218c60432.png"
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
          "e8af6aa8-3037-470f-8d2c-4ec218c60432.png"
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

export { drinks, pastriesAndBakedGoods, sandwichesAndSnacks, questions, merch, beans }
