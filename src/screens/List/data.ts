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

  {
    id: 8,
    title: 'Mercedes-Benz',
    subtitle: 'G63',
    price: '2 210 AED',
    brand: 'mers',
    preview:
      'https://thumb.tildacdn.com/tild3035-6162-4338-b034-326335643034/-/resize/320x/-/format/webp/gelikkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild6133-6339-4538-b466-316363393465/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild3661-3634-4162-b539-313338613837/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6330-3330-4662-b661-376131626230/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
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
    id: 9,
    title: 'Mercedes-Benz',
    subtitle: 'GLS450',
    price: '1 000 AED',
    brand: 'mers',
    preview:
      'https://thumb.tildacdn.com/tild3034-3530-4338-a130-306132386630/-/resize/320x/-/format/webp/glskvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3466-3038-4732-a461-323330303837/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6530-3733-4232-b661-613330616236/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6163-3138-4436-b934-623639653565/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
    ],
    tags: ['suv', 'luxury', 'mercedes'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '2999 cc',
      maxSpeed: '246 km/h',
      transmission: 'Automatic 9',
      zeroToHundred: '6.2 seconds',
      power: '367 HP',
    },
  },

  {
    id: 10,
    title: 'Porsche',
    subtitle: '911 TurboS',
    price: '2 900 AED',
    brand: 'porshe',
    preview:
      'https://thumb.tildacdn.com/tild3435-3533-4565-b564-306334653535/-/resize/320x/-/format/webp/kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3338-3233-4231-b730-643430333834/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild3961-3139-4232-a231-393865636561/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6563-6635-4834-a337-313832316631/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
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
    id: 11,
    title: 'Lamborghini',
    subtitle: 'Aventador S Roadster',
    price: '5 500 AED',
    brand: 'lamborghini',
    preview:
      'https://thumb.tildacdn.com/tild3266-3232-4234-b236-643763333465/-/resize/320x/-/format/webp/lambokvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild6132-3135-4030-b264-646533366335/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6630-3130-4335-b236-303530636438/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild3539-3938-4961-b830-353835616633/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
    ],
    tags: ['cabrio', 'sportscar', 'lambo'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '6498 cc',
      maxSpeed: '320 km/h',
      transmission: 'Robotic 7',
      zeroToHundred: '3 seconds',
      power: '700 HP',
    },
  },

  {
    id: 12,
    title: 'Mercedes-Benz',
    subtitle: 'Maybach',
    price: '2 155 AED',
    brand: 'mers',
    preview:
      'https://thumb.tildacdn.com/tild6339-3963-4438-b764-343834366162/-/resize/320x/-/format/webp/maybachkvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild6637-3233-4134-b032-373662613130/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6361-6463-4134-b461-616532303135/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild6162-3638-4134-b537-383732316162/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
    ],
    tags: ['sedan', 'luxury', 'mercedes'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3982 cc',
      maxSpeed: '250 km/h',
      transmission: 'Automatic',
      zeroToHundred: '4.8 seconds',
      power: '503 HP',
    },
  },

  {
    id: 13,
    title: 'Rolls-Royce',
    subtitle: 'Ghost',
    price: '4 490 AED',
    brand: 'rr',
    preview:
      'https://thumb.tildacdn.com/tild3931-3935-4533-a133-326432636664/-/resize/320x/-/format/webp/rolls2kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3863-3366-4334-b562-663666393561/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild3965-3636-4366-b063-383534353230/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
      'https://thumb.tildacdn.com/tild3137-3964-4632-a634-343535343264/-/resize/320x/-/format/webp/photo_2023-10-01_014.jpeg',
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
    id: 14,
    title: 'Mercedes-Benz',
    subtitle: 'S500 Brabus',
    price: '2 050 AED',
    brand: 'mers',
    preview:
      'https://thumb.tildacdn.com/tild6231-3536-4333-a434-336235653161/-/resize/320x/-/format/webp/s600kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3933-3164-4537-b531-663131343134/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3037-6265-4364-b764-376362663665/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild6636-6364-4436-a664-666138383235/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['sedan', 'luxury', 'mercedes'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '4663 cc',
      maxSpeed: '250 km/h',
      transmission: 'Automatic 7',
      zeroToHundred: '4.8 seconds',
      power: '455 HP',
    },
  },

  {
    id: 15,
    title: 'Porsche',
    subtitle: '911 Targa 4',
    price: '1 700 AED',
    brand: 'porshe',
    preview:
      'https://thumb.tildacdn.com/tild6639-6239-4366-b339-356431376365/-/resize/320x/-/format/webp/targakvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3236-6638-4634-b432-343965396333/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3037-3531-4535-b732-643939336166/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild6334-3562-4933-b330-313534633531/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['cabrio', 'sportscar', 'porsche'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '2981 cc',
      maxSpeed: '289 km/h',
      transmission: 'PDK 8',
      zeroToHundred: '4.4 seconds',
      power: '385 HP',
    },
  },

  {
    id: 16,
    title: 'Lamborghini',
    subtitle: 'Urus',
    price: '3 980 AED',
    brand: 'lamborghini',
    preview:
      'https://thumb.tildacdn.com/tild3964-6566-4532-b462-386163363933/-/resize/320x/-/format/webp/uruskvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3132-6534-4839-a631-613433643738/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3534-3938-4963-b062-353738376666/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3363-3336-4035-b631-393862623036/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['suv', 'sportscar', 'lambo'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3996 cc',
      maxSpeed: '305 km/h',
      transmission: 'Automatic 8',
      zeroToHundred: '3.6 seconds',
      power: '666 HP',
    },
  },

  {
    id: 16,
    title: 'BMW',
    subtitle: 'X6 M Competition',
    price: '1 400 AED',
    brand: 'bmw',
    preview:
      'https://thumb.tildacdn.com/tild6230-6165-4533-b763-306564336235/-/resize/320x/-/format/webp/x5kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3134-6537-4131-b261-636165346335/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3932-6135-4237-a662-393363306133/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3561-6332-4133-a466-356532356630/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['suv', 'sportscar', 'bmw'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '4395 cc',
      maxSpeed: '250 km/h',
      transmission: 'Automatic 8',
      zeroToHundred: '3.8 seconds',
      power: '625 HP',
    },
  },

  {
    id: 17,
    title: 'BMW',
    subtitle: 'X7',
    price: '1 300 AED',
    brand: 'bmw',
    preview:
      'https://thumb.tildacdn.com/tild3131-3630-4631-b630-383465643534/-/resize/320x/-/format/webp/xm7kvadrat.jpg',
    images: [
      'https://thumb.tildacdn.com/tild3736-3531-4233-a431-646339316465/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3930-3463-4139-a266-363836376131/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
      'https://thumb.tildacdn.com/tild3134-3733-4161-b231-323663653937/-/resize/320x/-/format/webp/photo_2023-10-01_015.jpeg',
    ],
    tags: ['suv', 'luxury', 'bmw'],
    specifications: {
      engine: 'Petrol',
      engineVolume: '3998 cc',
      maxSpeed: '250 km/h',
      transmission: 'Automatic 8',
      zeroToHundred: '5.8 seconds',
      power: '380 HP',
    },
  },
];

export default data;
