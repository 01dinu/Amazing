import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Dinusha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Tiered Cotton Midi Dress',
      slug: 'tiered-cotton-midi -dress',
      category: 'Dresses',
      image: '/images/pa.jpg',
      price: 3200,
      countInStock: 10,
      brand: 'Calson',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
    {
      //_id: 2,
      name: 'Gauze Vacation Shirtdress',
      slug: 'gauze-vacation-shirtdress',
      category: 'Dresses',
      image: '/images/pb.jpg',
      price: 4720,
      countInStock: 0,
      brand: 'Calson',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
    {
      //_id: '3',
      name: 'Mixed Floral Cotton Maxi',
      slug: 'mixed-floral-cotton-maxi',
      category: 'Dresses',
      image: '/images/pc.jpg', //679px x 829px
      price: 5220,
      countInStock: 10,
      brand: 'Calson',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
    {
      // _id: '4',
      name: ' Sleeve Shirtdress',
      slug: 'sleeve-shirtdress',
      category: 'Dresses',
      image: '/images/pd.jpg',
      price: 3290,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality dress',
    },
  ],
};
export default data;
