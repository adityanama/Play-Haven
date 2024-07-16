import { shuffleArray } from "./utils/shuffle";

export const GameData = [
    {
        sliderData: [
            {
                id: 1,
                title: 'Red Dead Redemption 2',
                developer: 'Rockstar Games',
                img: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png',
                description: 'America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.',
                price: 3999,
                discount: 0,
            },

            {
                id: 2,
                title: 'God of War Ragnarök',
                developer: 'Santa Monica Studio',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/KkIiB8w4CBvZspu6zyzOza3p.png',
                description: 'From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters. The threat of Ragnarök grows ever closer. Kratos and Atreus must choose between their own safety and the safety of the realms.',
                price: 3099,
                discount: 0,
            },

            {
                id: 3,
                title: 'Grand Theft Auto V',
                developer: 'Rockstar Games',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png',
                description: 'When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.',
                price: 2399,
                discount: 0,
            },

            {
                id: 4,
                title: `Marvel's Spider Man 2`,
                developer: 'Insomniac Games',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png',
                description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.',
                price: 3749,
                discount: 0,
            },
            {
                id: 5,
                title: `UNCHARTED™ : Legacy of Thieves Collection`,
                developer: 'Naughty Dog',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/gTUWTlvPHzxFJ2JAxtDyI2eS.png',
                description: 'Seek your legacy and leave your mark on the map in UNCHARTED: Legacy of Thieves Collection. Experience Naughty Dog’s thrilling, cinematic storytelling and the iconic franchise’s largest blockbuster action set pieces. Discover lost history with the charismatic yet complex thieves, Nathan Drake and Chloe Frazer, as they travel the world with a sense of wonder, pursuing extraordinary adventures and lost lore.',
                price: 2799,
                discount: 0,
            },
        ]
    },

    {
        specialOfferData: [
            {
                id: 6,
                title: 'Cricket 24',
                developer: 'Big Ant Studios',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d7fba97907064aa33d64c140a8f07c2a8e49d5fa36829a5b.png?w=440&thumb=false',
                description: 'Cricket 24 is the culmination of a decade of Cricket video game development and includes teams from every corner of the globe. Players will be able to take on major cricket nations including Australia and England in the official Ashes, West Indies, New Zealand, Ireland and more, plus for the first time ever, professional Indian T20 teams, all set in over 50 detailed official stadiums. Cricket 24 is the most complete video game simulation of cricket seen to date.',
                price: 1999,
                discount: 30,
                specialPrice: 1999,
            },
            {
                id: 7,
                title: 'Watch Dogs Legion',
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202007/0200/ohDfr1TcylLqbwva38ONyLHO.png',
                description: 'Build a resistance from virtually anyone you see as you hack, infiltrate, and fight to take back a near-future London that is facing its downfall. Recruit and play as anyone in the city. Everyone you see has a unique backstory, personality, and skill set. Hack armed drones, deploy spider-bots, and take down enemies using an Augmented Reality Cloak. Explore a massive urban open world featuring London’s many iconic landmarks and fun side activities. Take your recruits online and team up with your friends as you complete missions and challenging endgame content. ',
                price: 1499,
                discount: 50,
                specialPrice: 1499,
            },
            {
                id: 8,
                title: `Assassin's Creed Odyssey`,
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/cdn/EP0001/CUSA09303_00/tzKcptCCUkiigpacybO8xWmvxPS7vIzk.png?w=440&thumb=false',
                description: 'Sentenced to death by your family, embark on a journey from outcast mercenary to legendary Greek hero and uncover the truth about your past. Forge your path through a gorgeous world where mountains and sea collide. Meet Ancient Greece’s most famous figures and discover a pivotal point in history that shaped western civilisation. For the first time in the series, choose the hero you want to become and decide the fate of the world around you. Customize your equipment and master new special abilities, tailoring your character’s skillset to your play style. Fight your way across Greece, engaging in visceral battles both on land and sea, to become a legend.',
                price: 699,
                discount: 75,
                specialPrice: 699,
            },
            {
                id: 9,
                title: `Marvel's Spider-Man: Miles Morales`,
                developer: 'Insomanic Games',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png?w=440&thumb=false',
                description: 'In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it. ',
                price: 2299,
                discount: 15,
                specialPrice: 2299,
            },
        ]
    },

    {
        NewRelease: [
            {
                id: 10,
                title: 'WWE 2K24',
                developer: '2K',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202401/0902/8ef9ab648b8b46461778764d6942c44a1c485abd7879e7ce.png',
                description: 'oin the biggest superstars in sports entertainment as WWE 2K24 presents a retelling of WrestleMania’s greatest moments from the last 40 years.Take part in some of wrestling’s most unforgettable and career-defining matches, choosing from the likes of “Stone Cold” Steve Austin, Undertaker and Andre the Giant, alongside current contenders “The American Nightmare” Cody Rhodes, John Cena, Rhea Ripley and Roman Reigns.',
                price: '3499',
                discount: 0,
            },
            {
                id: 11,
                title: 'Ghost of Tsushima DIRECTOR’S CUT',
                developer: 'Sucker Punch Productions',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png?w=440&thumb=false',
                description: 'Uncover the hidden wonders of Tsushima in this open-world action adventure from Sucker Punch Productions and PlayStation Studios, available for PS5 and PS4.Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island.',
                price: 2799,
                discount: 0,
            },
            {
                id: 12,
                title: `Assassin's Creed® Mirage`,
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/phwiQjbJddEg979YucUoP3Vr.png?w=440&thumb=false',
                description: 'Experience the home of the original Assassins in this exciting new narrative-driven, open world adventure. 15 years since the first Assassins Creed redefined adventure, experience the franchises trademark parkour and stealth like never before - in Assassins Creed Mirage.In this smaller scale, back to basics Assassins caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future. Stalk the shadows. Become the ultimate assassin.',
                price: 2499,
                discount: 0,
            },
            {
                id: 13,
                title: 'Tekken 8',
                developer: 'BANDAI NAMCO Studios',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png?w=440&thumb=false',
                description: 'Feel the power of every hit in Tekken 8, the latest entry in the legendary fighting game franchise from Bandai Namco. Utilising the power and realism of Unreal Engine 5.  Ground-breaking new features, breathtakingly detailed character models and dramatic environments make this one of the most visually stunning and immersive titles in the genre yet. Tekken 8 picks up after the gruesome battle that ended in Heihachi Mishima’s defeat in Tekken 7, focusing on a new rivalry, pitting father against son as Jin Kazama stands in defiance against Kazuya Mishima in a city-shattering face-to-face showdown.',
                price: 2649,
                discount: 0,
            },
        ],
    },
    {
        other: [
            {
                id: 14,
                title: 'Call of Duty®: Black Ops 6',
                developer: 'Activision',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/1421/5811b9a8ab59c7703c3d4f0a60748c029208aed35f28d7f3.png',
                description: 'Developed by Treyarch and Raven, Black Ops 6 is a spy action thriller set in the early 90s, a period of transition and upheaval in global politics, characterised by the end of the Cold War and the rise of the United States as a single superpower. With a mind-bending narrative, and unbound by the rules of engagement, this is signature Black Ops across a cinematic single-player Campaign, a best-in-class Multiplayer experience, and with the epic return of Round-Based Zombies.',
                price: 5499,
                discount: 0,
            },
            {
                id: 15,
                title: `Assassin's Creed Origins`,
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05625_00/3/i_1918d4f78a3ed7521b7936984d525927a03a03e241bdd3d748bfd23c104d45db/i/icon0.png',
                description: 'Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment.Sail down the Nile, uncover the mysteries of the pyramids or fight your way against dangerous ancient factions and wild beasts as you explore this gigantic and unpredictable land. The Origins of the Assassin’s Brotherhood.Engage into multiple quests and gripping stories as you cross paths with strong and memorable characters, from the wealthiest high-born to the most desperate outcasts.',
                price: 3799,
                discount: 0,
            },
            {
                id: 16,
                title: 'Watch Dogs 2',
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/qBxvfDJJ9dbavai6xsWOcWaxRDGRb7h0.png',
                description: 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area. Team up with Dedsec, a notorious group of hackers, to execute the biggest hack in history take down ctOS 2.0, an invasive operating system being used by criminal masterminds to monitor and manipulate citizens on a massive scale.Explore the dynamic open-world, full of gameplay possibilities. Hack into every connected device and take control of the city infrastructure. Develop different skills to suit your playstyle, and upgrade your hacker tools – RC cars, Quadcopter drone, 3D printed weapons and much more.',
                price: 2099,
                specialPrice: 2099,
                discount: 25,
            },
            {
                id: 17,
                title: 'EA SPORTS™ FC 24',
                developer: 'Electronic Arts',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/1122/7a3b10ed3abad7f4f23f7f148e7e48e78e2cc8dc0c541090.png',
                description: 'EA SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimised by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.',
                price: 4499,
                discount: 0,
            },
            {
                id: 18,
                title: 'Cyberpunk 2077',
                developer: 'CD Projekt',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/1517/UyPJCxbE3EoeLtUxjoFBnsD4.png',
                description: 'Cyberpunk 2077 is an open-world action-adventure from the creators of The Witcher 3: Wild Hunt, CD Projekt Red. Set in Night City, a megalopolis obsessed with power, glamour and body modification, you play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. Upgraded with next-gen in mind and featuring free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.  The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?',
                price: 1799,
                specialPrice: 1799,
                discount: 35,
            },
            {
                id: 19,
                title: 'Far Cry 6',
                developer: 'Ubisoft',
                img: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/xqoTYwf0S55ro6fwcIIY1KI4.png',
                description: 'Welcome to Yara, a tropical paradise frozen in time. Far Cry 6 immerses players into the adrenaline-filled world of a modern-day guerrilla revolution. Join the revolution and push back against the oppressive regime of dictator Antón Castillo and his teenage son Diego, brought to life by Hollywood stars Giancarlo Esposito (The Mandalorian, Breaking Bad) and Anthony Gonzalez (Coco). Playing as Dani Rojas, immerse yourself in the journey of a military dropout turned guerrilla revolutionary. To even the odds against Antón’s military, you’ll have to adopt the Resolver philosophy, employing an arsenal of unique and surprising new weapons, vehicles and animal companions to ignite a revolutionary movement that will burn the tyrannical regime to the ground',
                price: 3999,
                discount: 0,
            },
            {
                id: 20,
                title: 'The Last of Us Part II Remastered',
                developer: 'Naughty Dog',
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/315718bce7eed62e3cf3fb02d61b81ff1782d6b6cf850fa4.png',
                description: 'Play the winner of over 300 Game of the Year awards, remastered for the PlayStation®5 console. Relive or play for the first time Ellie and Abby’s story, now with graphical enhancements, new gameplay modes like the roguelike survival experience No Return, full DualSense® wireless controller integration, and more. Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.',
                price: 2899,
                discount: 0,
            },
            
        ]
    },
]

export const Games = [];

GameData.map((GameObj) => {
    const key = Object.keys(GameObj)[0];
    const games = GameObj[key];

    games.forEach(game => {
        Games.push(game);
    })
})

shuffleArray(Games);