export const restaurant = {
  name: "Anjappar San Diego",
  address: "9474 Black Mountain Road, Suite E, San Diego, CA 92126",
  phone: "(858) 566-3700",
  phoneHref: "tel:+18585663700",
  email: "info@anjapparsd.com",
  emailHref: "mailto:info@anjapparsd.com",
  orderUrl: "https://www.anjapparsd.com/Menu?promos=1&pid=10091",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9474+Black+Mountain+Road+Suite+E+San+Diego+CA+92126",
  social: {
    instagram: "https://www.instagram.com/anjappar_sandiego",
    facebook: "https://www.facebook.com/116796001386621",
    x: "https://www.twitter.com/anjapparsd",
    reviews:
      "https://www.google.com/search?q=Anjappar+San+Diego+Reviews",
  },
  hours: [
    ["Monday–Thursday", "11:30 AM–2:30 PM · 5:30 PM–9:30 PM"],
    ["Friday", "11:30 AM–2:30 PM · 5:30 PM–10:00 PM"],
    ["Saturday", "9:30 AM–10:00 PM"],
    ["Sunday", "9:30 AM–9:30 PM"],
  ],
};

export const imageUrls = {
  hero: "/images/hero-table.jpg",
  biryani: "/images/biryani.jpg",
  catering: "/images/catering.jpg",
  dosa: "/images/dosa.jpg",
  mark: "/images/anjappar-logo.png",
  gallery: [
    { src: "/images/gallery-thali.jpg", alt: "South Indian thali with rice, sambar, rasam, and vegetable curries" },
    { src: "/images/dosa.jpg", alt: "Crisp dosa served on a banana leaf with coconut chutney and sambar" },
    { src: "/images/chicken-masala.jpg", alt: "Rich chicken masala in a dark karahi, finished with cream and cilantro" },
    { src: "/images/gallery-biryani-plate.jpg", alt: "Chicken biryani with saffron rice, herbs, and whole spices" },
    { src: "/images/gallery-tandoori.jpg", alt: "Tandoori chicken tikka grilling over charcoal" },
    { src: "/images/gallery-samosa.jpg", alt: "Golden samosas with mint chutney and pomegranate" },
  ],
};

export type MenuItem = { name: string; price?: string; description?: string };
export type MenuCategory = { title: string; items: MenuItem[] };

export const foodMenu: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Chicken 65", price: "$14.95", description: "Cubes of chicken marinated with 65 masala and deep-fried." },
      { name: "Chicken Lollipop", price: "$15.95" },
      { name: "Nethili Fry", price: "$15.95" },
      { name: "Chicken Manchurian", price: "$15.95" },
      { name: "Chili Chicken", price: "$15.95" },
      { name: "Gobi 65", price: "$13.95" },
      { name: "Mushroom 65", price: "$13.95", description: "Mushrooms coated with spicy chickpea batter and fried." },
      { name: "Paneer 65", price: "$14.95" },
      { name: "Samosa", price: "$7.95 / 3 pcs" },
      { name: "Medu Vada", price: "$8.95 / 3 pcs" },
      { name: "Onion Pakoda", price: "$7.95" },
    ],
  },
  {
    title: "Vegetable Curries",
    items: [
      { name: "Chettinad Veg Kuruma", price: "$13.95", description: "Mixed vegetables in coconut, green chili, and Chettinad spice gravy." },
      { name: "Dal Tadka", price: "$13.95" },
      { name: "Ennai Kathrikkai Kolambu", price: "$13.95", description: "Chettinad-style eggplant." },
      { name: "Paneer Tikka Masala", price: "$15.95" },
      { name: "Kadai Paneer", price: "$15.95" },
      { name: "Paneer Butter Masala", price: "$15.95" },
      { name: "Chef’s Special Malai Kofta", price: "$15.95" },
      { name: "Chana Masala", price: "$13.95" },
    ],
  },
  {
    title: "Dosa & Uthappam",
    items: [
      { name: "Plain Dosa", price: "$11.95", description: "Crisp fermented-rice pancake with chutney and sambar." },
      { name: "Onion Dosa", price: "$12.95" },
      { name: "Ghee Masala Dosa", price: "$13.95" },
      { name: "Ghee Podi Masala Dosa", price: "$14.95" },
      { name: "Keema Dosa — Chicken", price: "$16.95" },
      { name: "Keema Dosa — Mutton", price: "$17.95" },
      { name: "Paneer Stuffed Special Dosa", price: "$15.95" },
      { name: "Mysore Masala Dosa", price: "$14.95", description: "Spiced dosa with chilies, mint chutney, and clarified butter." },
      { name: "Onion Uthappam", price: "$12.95" },
      { name: "Egg Uthappam", price: "$14.95" },
    ],
  },
  {
    title: "Idly, Aappam & Idiyappam",
    items: [
      { name: "Idly with Sambar & Chutney", price: "$12.95 / 3 pcs" },
      { name: "Ghee Podi Idly", price: "$11.95" },
      { name: "Idly with Chettinad Chicken Curry", price: "$18.95" },
      { name: "Aappam with Coconut Milk", price: "$12.95 / 2 pcs" },
      { name: "Aappam with Chettinad Chicken Masala", price: "$18.95" },
      { name: "Aappam with Mutton Masala", price: "$19.95" },
      { name: "Idiyappam with Coconut Milk", price: "$12.95 / 5 pcs" },
      { name: "Idiyappam with Chettinad Fish Curry", price: "$19.95 / 5 pcs" },
    ],
  },
  {
    title: "Biryanis",
    items: [
      { name: "Boneless Chicken Dum Biryani", price: "$17.95", description: "Marinated chicken and fragrant basmati rice cooked dum-style." },
      { name: "Chicken 65 Biryani", price: "$17.95" },
      { name: "Chicken Dum Biryani", price: "$15.95" },
      { name: "Nattukozhi Biryani", price: "$18.95", description: "Country chicken." },
      { name: "Mutton Dum Biryani", price: "$19.95", description: "Seeraga samba rice, tender goat, ginger, garlic, and Chettinad masala." },
      { name: "Vegetable Biryani", price: "$13.95" },
      { name: "Paneer 65 Biryani", price: "$15.95" },
      { name: "Mushroom 65 Biryani", price: "$15.95" },
    ],
  },
  {
    title: "Thali Meals",
    items: [
      { name: "Anjappar Vegetarian Meal", price: "$14.95", description: "Rice, chapati, curries, sambar, rasam, poriyal, dal, curd, appalam, and pickle." },
      { name: "Anjappar Egg Meal", price: "$16.95" },
      { name: "Anjappar Chicken Meal", price: "$17.95" },
      { name: "Anjappar Mutton Meal", price: "$18.95" },
      { name: "Anjappar Fish Meal", price: "$18.95" },
    ],
  },
  {
    title: "Poultry & Mutton",
    items: [
      { name: "Butter Chicken Masala", price: "$16.95" },
      { name: "Chettinad Chicken Masala", price: "$16.95" },
      { name: "Chicken Sukka Varuval", price: "$17.95" },
      { name: "Nattukozhi Masala", price: "$19.95", description: "Country chicken, bone-in." },
      { name: "Pepper Chicken Masala", price: "$17.95" },
      { name: "Chettinad Mutton Masala", price: "$19.95", description: "Tender lamb in Chettinad gravy." },
      { name: "Mutton Sukka Varuval", price: "$19.95", description: "A specialty of Anjappar." },
      { name: "Lamb Vindaloo", price: "$17.95" },
    ],
  },
  {
    title: "Seafood & Tandoori",
    items: [
      { name: "Chettinad Fish Curry", price: "$17.95", description: "Pomfret fish." },
      { name: "Vavvaal Varuval", price: "$18.95", description: "Pomfret." },
      { name: "Tandoor Pomfret", price: "$18.95" },
      { name: "Shrimp 65", price: "$18.95" },
      { name: "Shrimp Tikka Masala", price: "$18.95" },
      { name: "Tandoori Chicken", price: "$16.95 / half · $27.95 / full" },
      { name: "Paneer Tikka Kebab", price: "$15.95" },
    ],
  },
  {
    title: "Breads, Rice & Wok",
    items: [
      { name: "Butter Naan", price: "$3.95" },
      { name: "Garlic Naan", price: "$3.95" },
      { name: "Parotta", price: "$4.95" },
      { name: "Chappathi", price: "$6.95 / 3 pcs" },
      { name: "Chicken Koththu Parotta", price: "$17.95" },
      { name: "Mutton Koththu Parotta", price: "$18.95" },
      { name: "Veg Fried Rice", price: "$13.95" },
      { name: "Schezwan Chicken Noodles", price: "$16.95" },
    ],
  },
  {
    title: "Soup & Dessert",
    items: [
      { name: "Mutton Bone Soup", price: "$5.95" },
      { name: "Nattukozhi Rasam Soup", price: "$5.95" },
      { name: "Rasam", price: "$4.95" },
      { name: "Gulab Jamun", price: "$5.95" },
      { name: "Rasmalai", price: "$5.95" },
      { name: "Pineapple Kesari", price: "$5.95" },
      { name: "Falooda", price: "$8.95" },
      { name: "Jigarthanda", price: "$9.95" },
    ],
  },
];

export const drinks: MenuCategory[] = [
  {
    title: "Alcoholic Beverages",
    items: [
      { name: "Indian Beer", price: "$9.95 / 650 ml", description: "Indian beers, Old Monk, and others." },
      { name: "Taj Indian Beer", price: "$5.95 / 330 ml" },
      { name: "King Fisher Beer", price: "$6.95 / 330 ml" },
      { name: "Gorka Beer", price: "$6.95 / 330 ml" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Mango Lassi", price: "$4.95" },
      { name: "Nannari Sarbath", price: "$4.95" },
      { name: "Rose Milk", price: "$4.95" },
      { name: "Tea", price: "$3.95" },
      { name: "Coffee", price: "$4.95" },
      { name: "Limca", price: "$3.45" },
      { name: "Thums Up", price: "$3.45" },
      { name: "Lemon Soda", price: "$4.95" },
      { name: "Butter Milk", price: "$4.95" },
    ],
  },
];

export const promotions = [
  "Anjappar Jackfruit Biryani",
  "Mutton Liver Fry",
  "Jackfruit Biryani",
  "Al Faham",
  "Crispy Garlic Tofu",
];
