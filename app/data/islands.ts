import { Island, QuizQuestion } from '../types';

export const islands: Island[] = [
  {
    id: 'samoa',
    name: 'Samoa',
    emoji: '🌺',
    color: 'from-blue-500 to-cyan-500',
    sections: {
      history: 'Samoa has been inhabited for over 3,000 years. The Samoan islands were first settled by Lapita people around 1500 BCE. European contact began in the 18th century, and Samoa became independent in 1962, making it the first Pacific island nation to gain independence.',
      culture: 'Samoan culture is built on the fa\'a Samoa, or "the Samoan way," which emphasizes community, family, and respect for elders. The matai (chief) system remains central to village governance. Traditional arts include siapo (bark cloth), tatau (tattooing), and siva (dance).',
      traditions: 'The \'ava ceremony is a sacred ritual welcoming important guests. Traditional Samoan tattooing (tatau) is a rite of passage for young men. The fiafia night celebrates with fire dancing, singing, and traditional performances. Family and communal living are core values.',
      language: 'Samoan (Gagana Samoa) is a Polynesian language spoken by over 500,000 people. Common phrases: Talofa (hello), Fa\'afetai (thank you), Tofa (goodbye). The language has formal and informal registers based on social context.'
    }
  },
  {
    id: 'aotearoa',
    name: 'Aotearoa (New Zealand)',
    emoji: '🌿',
    color: 'from-green-500 to-emerald-500',
    sections: {
      history: 'The Māori people arrived in Aotearoa around 1250-1300 CE in great voyaging canoes (waka). Each iwi (tribe) traces its lineage to specific waka. European contact began in 1642 with Abel Tasman, and the Treaty of Waitangi was signed in 1840.',
      culture: 'Māori culture emphasizes whakapapa (genealogy), mana (prestige), and kaitiakitanga (guardianship). The marae (communal meeting ground) is central to community life. Traditional arts include whakairo (carving), tā moko (tattooing), and kapa haka (performing arts).',
      traditions: 'The pōwhiri is a traditional welcome ceremony featuring the karanga (call), haka (challenge), and hongi (pressing of noses). The hangi is traditional earth oven cooking. Wharenui (meeting houses) represent ancestors and tell tribal stories through carvings.',
      language: 'Te Reo Māori is an official language of New Zealand. Common phrases: Kia ora (hello/thank you), Haere mai (welcome), Aroha (love). The language experienced revival efforts starting in the 1980s with Māori language nests (kōhanga reo).'
    }
  },
  {
    id: 'hawaii',
    name: 'Hawaiʻi',
    emoji: '🌴',
    color: 'from-orange-500 to-red-500',
    sections: {
      history: 'Ancient Hawaiians arrived from Marquesas Islands around 400 CE, with a second wave from Tahiti around 1000 CE. King Kamehameha I unified the islands in 1810. Hawaii became a US territory in 1898 and the 50th state in 1959.',
      culture: 'Hawaiian culture centers on aloha (love and compassion), \'ohana (family), and mālama \'āina (caring for the land). The kapu system regulated ancient society. Traditional practices include hula (dance), oli (chant), and lua (martial art). Respect for kupuna (elders) is paramount.',
      traditions: 'The lei represents love and respect, given for celebrations and farewells. Luau feasts celebrate life events with traditional foods like kalua pig and poi. Ho\'oponopono is a practice of reconciliation. Surfing (he\'e nalu) originated in Hawaii as the "sport of kings."',
      language: 'Hawaiian (ʻŌlelo Hawaiʻi) is one of two official state languages. Common phrases: Aloha (hello/goodbye/love), Mahalo (thank you), ʻOhana (family). The language uses only 13 letters and emphasizes the \'okina (glottal stop) and kahakō (macron).'
    }
  },
  {
    id: 'tonga',
    name: 'Tonga',
    emoji: '👑',
    color: 'from-red-500 to-pink-500',
    sections: {
      history: 'Tonga has been inhabited for over 3,000 years. The Tuʻi Tonga Empire ruled much of Polynesia from 950-1865 CE. Tonga never lost its sovereignty to colonial powers and remains the only Polynesian monarchy. The current dynasty was founded in 1845.',
      culture: 'Tongan culture emphasizes respect (faka\'apa\'apa), family loyalty, and the monarchy. The social hierarchy includes royalty, nobles, and commoners. Traditional arts include ngatu (decorated bark cloth), lalanga (weaving), and lakalaka (group dance). Gift-giving is central to relationships.',
      traditions: 'The kava ceremony is a formal ritual for important occasions. Sunday is strictly observed as a day of rest and worship. Traditional feasts (pola) celebrate weddings, birthdays, and other milestones with abundant food displays showing generosity and status.',
      language: 'Tongan is spoken by about 200,000 people worldwide. Common phrases: Mālō e lelei (hello), Mālō \'aupito (thank you), Nofo ā (goodbye). The language has formal registers used when addressing royalty or in ceremonial contexts.'
    }
  },
  {
    id: 'fiji',
    name: 'Fiji',
    emoji: '🥥',
    color: 'from-teal-500 to-blue-500',
    sections: {
      history: 'Fiji was settled around 3,500 years ago by Austronesian peoples, later influenced by Melanesian culture. The islands were unified under Cakobau in 1871. Fiji became a British colony in 1874 and gained independence in 1970. The culture blends indigenous Fijian and Indian influences.',
      culture: 'Fijian culture centers on vanua (land and people), loloma (love and hospitality), and communal living. The mataqali (clan) system organizes society. Traditional practices include meke (dance and storytelling), pottery, and masterful navigation. Chiefs (turaga) command great respect.',
      traditions: 'The yaqona (kava) ceremony welcomes visitors and marks important events. Lovo is traditional underground cooking. The bula spirit embodies the warm, welcoming Fijian character. Traditional warriors performed the cibi war dance, which influenced modern rugby traditions.',
      language: 'Fijian (iTaukei) and Fiji Hindi are spoken alongside English. Common phrases: Bula (hello/life), Vinaka (thank you), Moce (goodbye). The language has many dialects across the island groups, with standard Fijian based on the Bauan dialect.'
    }
  },
  {
    id: 'french-polynesia',
    name: 'French Polynesia',
    emoji: '🏝️',
    color: 'from-purple-500 to-pink-500',
    sections: {
      history: 'The islands were settled by Polynesians around 1000 BCE. European contact began with Spanish explorers in 1521. France established a protectorate in 1842, and the islands became an overseas territory in 1946. The region includes Tahiti, Bora Bora, and the Marquesas Islands.',
      culture: 'Tahitian and wider Ma\'ohi culture emphasizes \'aita pea pea (no worries), family, and connection to nature. Traditional arts include \'orero (oratory), tapa cloth making, and himene (polyphonic singing). Tattoo art has seen a major revival, reconnecting with ancient traditions.',
      traditions: 'Heiva festival celebrates Polynesian culture with dancing, singing, and sports. The \'ōte\'a is a rapid, rhythmic dance performed by both men and women. Traditional navigation used stars, currents, and bird flight. Flower crowns (hei) are worn daily, with tiare being the symbolic flower.',
      language: 'Tahitian (Reo Tahiti) is the main Polynesian language, with French as the official language. Common phrases: Ia ora na (hello), Māuruuru (thank you), Nana (goodbye). The language shares roots with Hawaiian and Māori, showing ancient Polynesian connections.'
    }
  }
];

export const funFacts = [
  'Samoa is home to the world\'s largest Polynesian population.',
  'The Māori hongi (pressing of noses) shares the "ha" or breath of life.',
  'Ancient Hawaiians could determine time of day by observing fish behavior.',
  'Tonga is the only Pacific island nation that was never colonized.',
  'Fiji has over 300 islands, but only about 110 are permanently inhabited.',
  'Tahitian vanilla is considered among the finest in the world.',
  'The Samoan fire knife dance (ailao) originated from ancient warriors.',
  'New Zealand\'s national rugby team performs the haka before every match.',
  'Hawaii has its own time zone and is the only US state that grows coffee commercially.',
  'Tongan ngatu cloth can take months to make and is highly valued.',
  'Fiji is known as the "soft coral capital of the world" for its reefs.',
  'French Polynesia spans an area as large as Europe, but with only 280,000 people.',
];

export const quizQuestions: Record<string, QuizQuestion[]> = {
  samoa: [
    {
      id: 'samoa-1',
      question: 'What does "fa\'a Samoa" mean?',
      options: ['The Samoan chief', 'The Samoan way', 'The Samoan dance', 'The Samoan island'],
      correctAnswer: 1
    },
    {
      id: 'samoa-2',
      question: 'When did Samoa gain its independence?',
      options: ['1945', '1952', '1962', '1972'],
      correctAnswer: 2
    },
    {
      id: 'samoa-3',
      question: 'What is a matai in Samoan culture?',
      options: ['A type of food', 'A chief or family leader', 'A traditional dance', 'A ceremonial house'],
      correctAnswer: 1
    },
    {
      id: 'samoa-4',
      question: 'What is tatau?',
      options: ['A greeting', 'Traditional tattooing', 'A cooking method', 'A canoe'],
      correctAnswer: 1
    },
    {
      id: 'samoa-5',
      question: 'What is the \'ava ceremony used for?',
      options: ['Cooking food', 'Welcoming guests', 'Building houses', 'Fishing'],
      correctAnswer: 1
    },
    {
      id: 'samoa-6',
      question: 'What is siapo?',
      options: ['Bark cloth', 'A weapon', 'A fish', 'A mountain'],
      correctAnswer: 0
    },
    {
      id: 'samoa-7',
      question: 'What does "Talofa" mean?',
      options: ['Goodbye', 'Thank you', 'Hello', 'Please'],
      correctAnswer: 2
    },
    {
      id: 'samoa-8',
      question: 'What is a fiafia night?',
      options: ['A day of rest', 'A traditional celebration with performances', 'A fishing expedition', 'A religious ceremony'],
      correctAnswer: 1
    },
    {
      id: 'samoa-9',
      question: 'When were the Samoan islands first settled?',
      options: ['500 BCE', '1000 BCE', '1500 BCE', '2000 BCE'],
      correctAnswer: 2
    },
    {
      id: 'samoa-10',
      question: 'What is siva?',
      options: ['Traditional dance', 'Traditional food', 'Traditional weapon', 'Traditional boat'],
      correctAnswer: 0
    }
  ],
  aotearoa: [
    {
      id: 'aotearoa-1',
      question: 'What does "Aotearoa" mean?',
      options: ['Land of the long white cloud', 'Land of the warriors', 'Land of the birds', 'Land of the mountains'],
      correctAnswer: 0
    },
    {
      id: 'aotearoa-2',
      question: 'What is a pōwhiri?',
      options: ['A traditional weapon', 'A welcome ceremony', 'A type of food', 'A meeting house'],
      correctAnswer: 1
    },
    {
      id: 'aotearoa-3',
      question: 'What is the hongi?',
      options: ['A dance', 'Pressing of noses in greeting', 'A war cry', 'A feast'],
      correctAnswer: 1
    },
    {
      id: 'aotearoa-4',
      question: 'What is a marae?',
      options: ['A weapon', 'A boat', 'Communal meeting ground', 'A chief'],
      correctAnswer: 2
    },
    {
      id: 'aotearoa-5',
      question: 'What does "Kia ora" mean?',
      options: ['Goodbye', 'Hello/Thank you', 'Please', 'Sorry'],
      correctAnswer: 1
    },
    {
      id: 'aotearoa-6',
      question: 'When did the Māori arrive in Aotearoa?',
      options: ['500-600 CE', '800-900 CE', '1250-1300 CE', '1500-1600 CE'],
      correctAnswer: 2
    },
    {
      id: 'aotearoa-7',
      question: 'What is a hangi?',
      options: ['Traditional earth oven cooking', 'A type of dance', 'A weapon', 'A greeting'],
      correctAnswer: 0
    },
    {
      id: 'aotearoa-8',
      question: 'What is tā moko?',
      options: ['A song', 'Traditional tattooing', 'A food', 'A celebration'],
      correctAnswer: 1
    },
    {
      id: 'aotearoa-9',
      question: 'What are waka?',
      options: ['Mountains', 'Voyaging canoes', 'Chiefs', 'Weapons'],
      correctAnswer: 1
    },
    {
      id: 'aotearoa-10',
      question: 'What does "aroha" mean?',
      options: ['Warrior', 'Love', 'Chief', 'Dance'],
      correctAnswer: 1
    }
  ],
  hawaii: [
    {
      id: 'hawaii-1',
      question: 'What does "aloha" mean?',
      options: ['Hello only', 'Goodbye only', 'Hello, goodbye, and love', 'Thank you'],
      correctAnswer: 2
    },
    {
      id: 'hawaii-2',
      question: 'Who unified the Hawaiian islands?',
      options: ['King Kalākaua', 'King Kamehameha I', 'Queen Liliʻuokalani', 'King Lunalilo'],
      correctAnswer: 1
    },
    {
      id: 'hawaii-3',
      question: 'What is \'ohana?',
      options: ['A dance', 'Family', 'A flower', 'A food'],
      correctAnswer: 1
    },
    {
      id: 'hawaii-4',
      question: 'Where did surfing originate?',
      options: ['Australia', 'California', 'Hawaii', 'Tahiti'],
      correctAnswer: 2
    },
    {
      id: 'hawaii-5',
      question: 'What is a lei?',
      options: ['A weapon', 'A garland/necklace', 'A dance', 'A chief'],
      correctAnswer: 1
    },
    {
      id: 'hawaii-6',
      question: 'What does "mahalo" mean?',
      options: ['Hello', 'Goodbye', 'Please', 'Thank you'],
      correctAnswer: 3
    },
    {
      id: 'hawaii-7',
      question: 'What is hula?',
      options: ['Traditional dance', 'Traditional food', 'Traditional weapon', 'Traditional boat'],
      correctAnswer: 0
    },
    {
      id: 'hawaii-8',
      question: 'When did Hawaii become a US state?',
      options: ['1945', '1950', '1959', '1965'],
      correctAnswer: 2
    },
    {
      id: 'hawaii-9',
      question: 'What is a luau?',
      options: ['A type of flower', 'A traditional feast', 'A dance', 'A greeting'],
      correctAnswer: 1
    },
    {
      id: 'hawaii-10',
      question: 'How many letters are in the Hawaiian alphabet?',
      options: ['13', '18', '21', '26'],
      correctAnswer: 0
    }
  ],
  tonga: [
    {
      id: 'tonga-1',
      question: 'What makes Tonga unique among Pacific nations?',
      options: ['Largest population', 'Never colonized', 'Most islands', 'Oldest culture'],
      correctAnswer: 1
    },
    {
      id: 'tonga-2',
      question: 'What is ngatu?',
      options: ['A dance', 'Decorated bark cloth', 'A weapon', 'A food'],
      correctAnswer: 1
    },
    {
      id: 'tonga-3',
      question: 'What does "Mālō e lelei" mean?',
      options: ['Goodbye', 'Thank you', 'Hello', 'Please'],
      correctAnswer: 2
    },
    {
      id: 'tonga-4',
      question: 'What type of government does Tonga have?',
      options: ['Republic', 'Democracy', 'Monarchy', 'Dictatorship'],
      correctAnswer: 2
    },
    {
      id: 'tonga-5',
      question: 'What is the kava ceremony?',
      options: ['A dance', 'A formal ritual for important occasions', 'A cooking method', 'A wedding'],
      correctAnswer: 1
    },
    {
      id: 'tonga-6',
      question: 'What is lakalaka?',
      options: ['A food', 'Group dance', 'A weapon', 'A boat'],
      correctAnswer: 1
    },
    {
      id: 'tonga-7',
      question: 'What day is strictly observed as a day of rest in Tonga?',
      options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
      correctAnswer: 2
    },
    {
      id: 'tonga-8',
      question: 'What is a pola?',
      options: ['A chief', 'Traditional feast', 'A dance', 'A house'],
      correctAnswer: 1
    },
    {
      id: 'tonga-9',
      question: 'When was the Tuʻi Tonga Empire?',
      options: ['500-800 CE', '950-1865 CE', '1200-1500 CE', '1500-1800 CE'],
      correctAnswer: 1
    },
    {
      id: 'tonga-10',
      question: 'What does faka\'apa\'apa mean?',
      options: ['Love', 'Respect', 'Family', 'Dance'],
      correctAnswer: 1
    }
  ],
  fiji: [
    {
      id: 'fiji-1',
      question: 'What does "Bula" mean?',
      options: ['Goodbye', 'Thank you', 'Hello/Life', 'Please'],
      correctAnswer: 2
    },
    {
      id: 'fiji-2',
      question: 'How many islands does Fiji have?',
      options: ['About 100', 'About 200', 'About 300', 'About 400'],
      correctAnswer: 2
    },
    {
      id: 'fiji-3',
      question: 'What is a lovo?',
      options: ['A dance', 'Underground cooking', 'A weapon', 'A greeting'],
      correctAnswer: 1
    },
    {
      id: 'fiji-4',
      question: 'What is meke?',
      options: ['Dance and storytelling', 'A food', 'A weapon', 'A boat'],
      correctAnswer: 0
    },
    {
      id: 'fiji-5',
      question: 'What does "Vinaka" mean?',
      options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
      correctAnswer: 2
    },
    {
      id: 'fiji-6',
      question: 'What is yaqona?',
      options: ['A dance', 'Kava drink and ceremony', 'A food', 'A house'],
      correctAnswer: 1
    },
    {
      id: 'fiji-7',
      question: 'When did Fiji gain independence?',
      options: ['1960', '1965', '1970', '1975'],
      correctAnswer: 2
    },
    {
      id: 'fiji-8',
      question: 'What is Fiji known as for its underwater features?',
      options: ['Fish capital', 'Soft coral capital', 'Shark capital', 'Whale capital'],
      correctAnswer: 1
    },
    {
      id: 'fiji-9',
      question: 'What is a mataqali?',
      options: ['A chief', 'A clan system', 'A dance', 'A food'],
      correctAnswer: 1
    },
    {
      id: 'fiji-10',
      question: 'What war dance influenced modern rugby traditions?',
      options: ['Haka', 'Cibi', 'Siva', 'Meke'],
      correctAnswer: 1
    }
  ],
  'french-polynesia': [
    {
      id: 'fp-1',
      question: 'What does "Ia ora na" mean?',
      options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
      correctAnswer: 1
    },
    {
      id: 'fp-2',
      question: 'What is the most famous island in French Polynesia?',
      options: ['Bora Bora', 'Tahiti', 'Moorea', 'Marquesas'],
      correctAnswer: 1
    },
    {
      id: 'fp-3',
      question: 'What is the Heiva festival?',
      options: ['A religious ceremony', 'Celebration of Polynesian culture', 'A fishing event', 'A harvest festival'],
      correctAnswer: 1
    },
    {
      id: 'fp-4',
      question: 'What is \'orero?',
      options: ['Dance', 'Oratory/speech', 'Food', 'Weapon'],
      correctAnswer: 1
    },
    {
      id: 'fp-5',
      question: 'What is the symbolic flower of Tahiti?',
      options: ['Hibiscus', 'Orchid', 'Tiare', 'Plumeria'],
      correctAnswer: 2
    },
    {
      id: 'fp-6',
      question: 'What does "Māuruuru" mean?',
      options: ['Hello', 'Goodbye', 'Thank you', 'Love'],
      correctAnswer: 2
    },
    {
      id: 'fp-7',
      question: 'What is \'ōte\'a?',
      options: ['A food', 'A rapid, rhythmic dance', 'A boat', 'A weapon'],
      correctAnswer: 1
    },
    {
      id: 'fp-8',
      question: 'When were the islands first settled?',
      options: ['500 BCE', '1000 BCE', '1500 BCE', '2000 BCE'],
      correctAnswer: 1
    },
    {
      id: 'fp-9',
      question: 'What is French Polynesia famous for producing?',
      options: ['Coffee', 'Vanilla', 'Cocoa', 'Tea'],
      correctAnswer: 1
    },
    {
      id: 'fp-10',
      question: 'What does \'aita pea pea mean?',
      options: ['Hello', 'No worries', 'Goodbye', 'Thank you'],
      correctAnswer: 1
    }
  ]
};
