const heroes = [

    {
        "name": "Uther",
        "icon": './assets/uther.jpg',
        "faction": "Alliance, Silver Hand",
        "species": "Human",
        "gender": "Male",
        "class": "Paladin",
        "firstSeen": "Warcraft II: Tides of Darkness",
        "hint1": "Was one of the Lich King's first victims",
        "hint2": "Played a prominent role in the Shadowlands expansion of WoW",
        "hint3": "Lead the an order of Paladins"
    },

    {
        "name": "Jaina",
        "icon": './assets/jaina.jpg',
        "faction": "Alliance, Kirin Tor",
        "species": "Human",
        "gender": "Female",
        "class": "Mage",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "The slaughter at Theramore was a defining event for this person",
        "hint2": "Often seen weilding frost based magic",
        "hint3": "From the island of Kul Tiras"
    },

    {
        "name": "Anduin",
        "icon": './assets/anduin.png',
        "faction": "Alliance",
        "species": "Human",
        "gender": "Male",
        "class": "Priest",
        "firstSeen": "World of Warcraft (2004)",
        "hint1": "The son of a prominent figure in Stormwind",
        "hint2": "Less of a warrior, more of a leader",
        "hint3": "Was used as a pawn by the Jailer"
    },

    {
        "name": "Greymane",
        "icon": './assets/greymane.jpg',
        "faction": "Alliance, Gilneas",
        "species": "Human, Worgan",
        "gender": "Male",
        "class": "Rouge",
        "firstSeen": "World of Warcraft: Cataclysm",
        "hint1": "Players have been demanding a 'retaking' of this persons homeland",
        "hint2": "One of Anduin's main advisors",
        "hint3": "Cursed with being a Worgan"
    },

    {
        "name": "Sylvanas",
        "icon": './assets/sylvanas.jpg',
        "faction": "Horde, Forsaken",
        "species": "High Elf, Undead",
        "gender": "Female",
        "class": "Hunter, Rouge",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Died trying to protect civilians from an invansion",
        "hint2": "Possibly the most consequential person ever slain by Arthas Menithil",
        "hint3": "Burned Teldrasil"
    },
    {
        "name": "Thrall",
        "icon": './assets/thrall.jpg',
        "faction": "Horde, Frostwolves",
        "species": "Orc",
        "gender": "Male",
        "class": "Shaman",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Born in a slave camp",
        "hint2": "Lead a slave rebellion",
        "hint3": "Weilder of the legendary Doomhammer"
    },
    {
        "name": "Garrosh",
        "icon": './assets/garrosh.jpg',
        "faction": "Horde, Iron Horde",
        "species": "Orc",
        "gender": "Male",
        "class": "Warrior",
        "firstSeen": "World of Warcraft: Burning Crusade",
        "hint1": "Former WarChief of the horde",
        "hint2": "Was turned on by the Horde due to Warmongering",
        "hint3": "Spent the rest of time being tortured in Revendreth"
    },
    {
        "name": "Kael'thas",
        "icon": './assets/kaelthas.jpg',
        "faction": "Alliance, Kirin Tor, Burning Legion",
        "species": "High Elf, Blood Elf",
        "gender": "Male",
        "class": "Mage",
        "firstSeen": "Warcraft III: The Frozen Throne",
        "hint1": "Played a prominent role in Warcraft 3, specifically around Arthas' story",
        "hint2": "When they failed to protect their homeland, turned to the Burning Legion for more power",
        "hint3": "Can be found in Revendreth, working on atonement"
    },

    {
        "name": "Hogger",
        "icon": './assets/hogger.png',
        "faction": "Riverpaw Pack, Defias Brotherhood",
        "species": "Gnoll",
        "gender": "Male",
        "class": "Warrior",
        "firstSeen": "World of Warcraft (2004)",
        "hint1": "Responsible for a huge amount of new player in-game deaths (Alliance)",
        "hint2": "Wanted by the King of Stormwind",
        "hint3": "One of the most sought out creatures in all of Elwynn Forest"
    },

    {
        "name": "Deathwing",
        "icon": './assets/deathwing.jpg',
        "faction": "Black Dragonflight, Former Earthwarder",
        "species": "Dragon",
        "gender": "Male",
        "class": "Aspect",
        "firstSeen": "World of Warcraft: Cataclysm",
        "hint1": "Is rarely ever in a humanoid visage",
        "hint2": "Corrupted by whispers of the old gods",
        "hint3": "One of the Dragonflight storylines is centered on this character and their legacy"
    },

    {
        "name": "Alexstrasza",
        "icon": './assets/alexstrasza.png',
        "faction": "Red Dragonflight, Aspect of Life",
        "species": "Dragon",
        "gender": "Female",
        "class": "Aspect",
        "firstSeen": "Warcraft II",
        "hint1": "Not part of the Horde or Alliance",
        "hint2": "The original Drakthyr",
        "hint3": "Known for having healing flame powers"
    },

    {
        "name": "Tyrande",
        "icon": './assets/tyrande.jpg',
        "faction": "Alliance, Sisters of Elune",
        "species": "Night Elf",
        "gender": "Female",
        "class": "Priest",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Oversaw the faith of Elune",
        "hint2": "Became the Warrior of Elune in times of need",
        "hint3": "Picked Malfurion over Illidan"
    },

    {
        "name": "Arthas",
        "icon": './assets/arthas.jpg',
        "faction": "Alliance, Scourge",
        "species": "Human, Undead",
        "gender": "Male",
        "class": "Death Knight",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Had a romantic association with a powerful Mage",
        "hint2": "Hailed from the Kingdom of Lordaeron",
        "hint3": "The first Death Knight"
    },

    {
        "name": "Kel'thuzad",
        "icon": './assets/kelthuzad.jpg',
        "faction": "Cult of the Damned, Scourge",
        "species": "Human, Undead",
        "gender": "Male",
        "class": "Necromancer, Lich",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "One of the only purely evil characters in all of Warcraft",
        "hint2": "Created the plague of undeath",
        "hint3": "Killed and resurrected as a powerful Lich"
    },

    {
        "name": "Whitemane",
        "icon": './assets/whitemane.png',
        "faction": "Scarlet Crusade, Ebon Blade",
        "species": "Human, Undead",
        "gender": "Female",
        "class": "Priest, Death Knight",
        "firstSeen": "World of Warcraft: Mists of Pandaria",
        "hint1": "Family was killed by the plague of undeath",
        "hint2": "Participated in a holy war against all undead",
        "hint3": "Was resurected in Legion as one of the Four Horsemen of the Ebon Blade"
    },

    {
        "name": "Maiev",
        "icon": './assets/maiev.jpg',
        "faction": "Alliance, Wardens",
        "species": "Night Elf",
        "gender": "Female",
        "class": "Warden",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Former Priestess of Elune",
        "hint2": "Volunteered to oversee the formation of the Wardens",
        "hint3": "Oversaw the imprisonment of Illidan Stormrage"
    },

    {
        "name": "Gazlowe",
        "icon": './assets/gazlowe.jpg',
        "faction": "Horde",
        "species": "Goblin",
        "gender": "Male",
        "class": "Tinkerer",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Designed and Built Orgrimmar",
        "hint2": "Was notably neutral until recently when they joined the horde",
        "hint3": "Currently the only Goblin on the Horde Council"
    },

    {
        "name": "Anub'arak",
        "icon": './assets/anubarak.jpg',
        "faction": "Scourge, Azjol-Nerub",
        "species": "Nerubian, Undead",
        "gender": "Male",
        "class": "Cryptlord",
        "firstSeen": "Warcraft III: The Frozen Throne",
        "hint1": "The King of a long forgotten empire",
        "hint2": "First encountered in the frozen wastes of Northrend",
        "hint3": "Known amongst his people as the Traitor King"
    },

    {
        "name": "Illidan",
        "icon": './assets/illidan.jpg',
        "faction": "Burning Legion, Illidari",
        "species": "Night Elf",
        "gender": "Male",
        "class": "Demon Hunter",
        "firstSeen": "Warcraft III: Reign of Chaos",
        "hint1": "Competed for Tyrande's affection",
        "hint2": "Given extra power by the legion just to betray the legion",
        "hint3": "'You are not prepared!'"
    },

    {
        "name": "Malfurion",
        "icon": './assets/Malfurion.jpg',
        "faction": "Alliance, Cenarion Circle",
        "species": "Night Elf",
        "gender": "Male",
        "class": "Druid",
        "firstSeen": "Warcraft III: The Frozen Throne",
        "hint1": "Slept for 10,000 years",
        "hint2": "One of the oldest and wisest characters in all of Warcraft",
        "hint3": "Stayed in Ardenweald to return Ysera to Azeroth"
    },

    {
        "name": "Edwin Vancleef",
        "icon": './assets/edwinvancleef.jpg',
        "faction": "Defias Brotherhood, Stonemasons Guild",
        "species": "Human",
        "gender": "Male",
        "class": "Rogue",
        "firstSeen": "World of Warcraft (2004)",
        "hint1": "Felt betrayed by Stormwind after the rebuilding of the city",
        "hint2": "Formed a gang of former masons and outlaws",
        "hint3": "Known for his trademark red bandana"
    }
    
]