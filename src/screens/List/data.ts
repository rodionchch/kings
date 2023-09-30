const data = [
  {
    id: 1,
    title: 'Rolls-Royce',
    subtitle: 'Ghost',
    price: '4 490 AED',
    brand: 'rr',
    preview:
      'https://thumb.tildacdn.com/tild6538-6662-4139-b439-633432303030/-/resize/320x/-/format/webp/rolls4kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3763-6163-4161-a235-366535653436/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3761-3835-4362-a363-336539303566/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3735-3066-4038-a262-383563326337/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['sedan', 'luxury', 'rolls'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '6592 cc',
      maxSpeed: '250 km/h',
      transmission: 'Robotic 8',
      zeroToHundred: '5 seconds',
      power: '563 HP',
    },
  },

  {
    id: 2,
    title: 'Mercedes-Benz',
    subtitle: 'G63',
    price: '2 010 AED',
    brand: 'mers',
    preview:
      'https://thumb.tildacdn.com/tild6231-6635-4262-a566-633663356366/-/resize/320x/-/format/webp/2gelikkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3062-3764-4461-b463-643262313835/-/resize/320x/-/format/webp/photo_2023-10-01_011.jpeg',
      'https://thumb.tildacdn.com/tild3062-3832-4531-b064-653933666136/-/resize/320x/-/format/webp/photo_2023-10-01_011.jpeg',
      'https://thumb.tildacdn.com/tild3663-3763-4361-a131-616231346163/-/resize/320x/-/format/webp/photo_2023-10-01_011.jpeg',
    ],
    tags: ['suv', 'luxury', 'mercedes'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3982 cc',
      maxSpeed: '220 km/h',
      transmission: 'Automatic 9',
      zeroToHundred: '4.5 seconds',
      power: '585 HP',
    },
  },

  {
    id: 3,
    title: 'Porsche',
    subtitle: '911 TurboS',
    price: '2 885 AED',
    brand: 'porshe',
    preview:
      'https://thumb.tildacdn.com/tild3931-3630-4766-b138-616364393034/-/resize/320x/-/format/webp/911greenkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild6533-3464-4630-b231-666163613833/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild3066-6539-4238-b539-346231643939/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild6631-3938-4538-b538-633434363730/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
    ],
    tags: ['coupe', 'sportscar', 'porsche'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3800 cc',
      maxSpeed: '320 km/h',
      transmission: 'Manual 7',
      zeroToHundred: '2.7 seconds',
      power: '650 HP',
    },
  },

  {
    id: 4,
    title: 'Audi',
    subtitle: 'RSQ8',
    price: '2 005 AED',
    brand: 'audi',
    preview:
      'https://thumb.tildacdn.com/tild6231-6363-4937-a330-633632376161/-/resize/320x/-/format/webp/audiqkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3066-3339-4366-a161-376133646339/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild6363-3464-4664-b239-313633313831/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild6435-6237-4164-b131-636637636437/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
    ],
    tags: ['suv', 'sportscar', 'audi'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3996 cc',
      maxSpeed: '250 km/h',
      transmission: 'Tiptronic 8',
      zeroToHundred: '3.8 seconds',
      power: '600 HP',
    },
  },
  {
    id: 5,
    title: 'Porsche',
    subtitle: 'Cayenne',
    price: '1 060 AED',
    brand: 'porshe',
    preview:
      'https://thumb.tildacdn.com/tild3439-6262-4465-b939-373833613235/-/resize/320x/-/format/webp/cayenekvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3565-3966-4362-a239-336237303832/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild6632-6435-4732-b931-343033343662/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
      'https://thumb.tildacdn.com/tild3136-3832-4063-a335-353139393338/-/resize/320x/-/format/webp/photo_2023-10-01_012.jpeg',
    ],
    tags: ['suv', 'sportscar', 'porsche'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3996 cc',
      maxSpeed: '286 km/h',
      transmission: 'Automatic 8',
      zeroToHundred: '4.1 seconds',
      power: '550 HP',
    },
  },

  {
    id: 6,
    title: 'Chevrolet',
    subtitle: 'Chevelle',
    price: '4 000 AED',
    brand: 'chevrolet',
    preview:
      'https://thumb.tildacdn.com/tild3763-3564-4766-a462-346639373261/-/resize/320x/-/format/webp/chevroletkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild6136-3236-4261-a461-653166633166/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
      'https://thumb.tildacdn.com/tild3062-3066-4636-b839-656435383766/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
      'https://thumb.tildacdn.com/tild6137-3135-4534-b638-366436653839/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
    ],
    tags: ['coupe', 'musclescar', 'chevrolet'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3996 cc',
      maxSpeed: '286 km/h',
      transmission: 'Automatic 4',
      zeroToHundred: '4.1 seconds',
      power: '430 HP',
    },
  },

  {
    id: 7,
    title: 'Ferrari',
    subtitle: 'F8 Spider',
    price: '4 490 AED',
    brand: 'ferrari',
    preview:
      'https://thumb.tildacdn.com/tild3237-3862-4533-a537-616638343331/-/resize/320x/-/format/webp/ferrakvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3139-3664-4566-a161-633766323063/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
      'https://thumb.tildacdn.com/tild3638-3636-4030-b036-356362393130/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
      'https://thumb.tildacdn.com/tild3634-3435-4766-a366-626133343239/-/resize/320x/-/format/webp/photo_2023-10-01_013.jpeg',
    ],
    tags: ['cabrio', 'sportscar', 'ferrari'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3902 cc',
      maxSpeed: '340 km/h',
      transmission: 'Robotic',
      zeroToHundred: '2.9 seconds',
      power: '720 HP',
    },
  },
];

export default data;
