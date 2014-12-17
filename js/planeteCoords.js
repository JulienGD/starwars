var planetesArray = [
    {
        name : 'Alderan',
        posX : 50,
        posY : 50,
        posZ : 50,
        size : 10,
        sens : -1,
        amp  : 70,
        speed : 0.001
      
    },
    {
        name : 'Naboo',
        posX : -50,
        posY : -50,
        posZ : -50,
        size : 10,
        sens : 1,
        amp  : 100,
        speed : 0.0015
      
    },
    {
        name : 'Coruscant',
        posX : -50,
        posY : 100,
        posZ : -50,
        size : 10,
        sens : -1,
        amp  : 440,
        speed : 0.002
      
    },

];


var planetsMetadata = [
    {
        name : "Alderaan",
        image : "./img/alderaan.jpg",
        text : {
            abstract : "Alderaan, située dans les Mondes Centraux, était la deuxième planète du système Alderaan, et le foyer de nombreux héros, notamment Leia Organa Solo, Bail Organa et Ulic Qel-Droma. Connue intergalactiquement pour sa beauté préservée, sa culture raffinée et son engagement envers la paix, les Alderaaniens travaillaient avec et pour la nature qu'ils souhaitaient protéger du mieux qu'ils pouvaient.",
            history : "Alderaan était un fondateur de la République Galactique en 25 053 BBY et une des ancres pour les premières exploratiosn de l'hyper-espace. Alderaan était le quartier général des Ingénieurs Royaux d'Alderaan, un des meilleurs bataillons de la République; avec ces vaisseaux les colons Alderaniens ont conquis Nim Drovis. Pendant les Guerres Mandaloriennes, la planète était menacée d'invasion par les forces de Cassus Fett, mais la force d'invasion fut toute entière éliminée prématurément par une erreur d'utilisation d'un ancien artefact Sith.",
            terrain : "Considérée comme 'la plus belle Étoile' des Mondes Centraux, des plaines sauvages et de vieilles montagnes domianient la surface de la planète. De larges océans et des mers éparpillées procuraient à la planète des conditions idéales pour qu'une grande variété de faune et de flore se développe. Ainsi, Alderaan hébergeait les aniamux les plsu fameux de la galaxie, tels les nerfs, les grazer et le thranta. Les citées d'Alderaan étaient souvent construites en prenant soin de préserver la nature. Crevasse City par exemple fut ocnstruite sur les murs d'un canyon, quasiment invisible depuis le ciel. D'autres furent cosntruites sur des pilotis le long de la côte ou sous la glace polaire. La capitale, Aldera, renommée pour son université, fut construite sur une petite île au centre d'n cratère volcanique.",
            society : " La culture d'Alderaan considérait l'éducation, la comédie, les beaux arts et la résolution pacifique des conflits. Leur participation au sénat Galactique leur tenait à cœur et cela se perpétua à l'équivalent de l'Empire. Les Alderaaniens cherchaient constamment une existence en harmonie avec leur environnement, évidente dans l'intégration de leur société au terrain naturel de la planète. Ils étaient aussi connus pour leur philosophie.",
            government : "En restant une société démocratique, Alderaan était dirigée par une monarchie constitutionelle héréditaire. La Maison d'Organa présidait au dessus de la Cour Suprème et du Haut Conseil législatif d'Alderaan. Ses monarques portaient variablement les titres 'Prince', 'Premier Conseiller', 'Reine', 'Roi' et 'Vice-Roi'. Traditionelleent, l'héritier du trône d'ALderaan siégeait aussi au HAut COnseil d'Alderaan et une période comme Sénateur d'Alderaan. Un vizir aidait le monarque à gouverner, et de nombreuses maisons Nobles avaient chacuen forte influence au gouvernement."            
        }   
    },
    {
        name : "Naboo",
        text : {
            abstract : "Naboo (pronounced /nə'bu/) was a planet that was the sector capital of the Chommell sector near the Outer Rim territories. It was a largely unspoiled world with large plains, swamps and seas. It was mostly known as the homeworld of notable historical figures who played major roles in the downfall of the Galactic Republic and the rise of the Galactic Empire, namely Padmé Amidala, Emperor Palpatine and Jar Jar Binks.",
            geography : "Naboo was a geologically unique world in the galaxy. A plasmic molten outer core surrounded an inner core, believed to be composed primarily of a nickel-iron alloy, with very small amounts of some other elements. These elements were found in abundance in other chemical compositions in the galaxy, but it is the unique properties of the plasma which interested astrophysicists, plasma which the two primary civilizations harnessed to supply clean and efficient energy highly valued throughout the galaxy.",
            history : "Around 3951 BBY, prior to the end of the Sith Civil War, Elsinoré den Tasia ascended to the throne of the Core World of Grizmallt. She sponsored the Republic explorer Kwilaan, who discovered Naboo with a fleet of three ships—Beneficent Tasia, Constant and Mother Vima. The planet became known as Naboo, after the deity Nabu. Naboo quickly became notorious amongst big game hunters who favored the indigenous veermoks, although it would be five decades before permanent Human settlement.",
            culture : "Historically, the Naboo were a pastorial and nomadic people, migrating in tribes and clans on the vast 'oceanic' grass-plains, with few settlements of substance. Tribes traced their descent from the colony vessels that brought them to Naboo, and clans traced descent from the founding settlers. The Naboo continued to place great value on genealogical decent, though by the era of Queen Amidala, few families could trace their history to the original colonists with any certainty.",
            government : "Nabooan politics were notable for applying a system of democratic monarchy, where the eligibility of the Monarch of Naboo was not related to age or power; rulers were traditionally selected for their intelligence. Likewise, citizens were not subject to age restrictions to have the right to vote, but were required to take aptitude tests in school that proved a certain level of intellectual maturity.[13] The monarch's advisors were also elected by popular vote.[17] However, the Naboo favored the purity of heart over any other qualification, which sometimes made them elevate soft-minded individuals to positions beyond their abilities.[18]"
        }
    },
    {
        name : "Coruscant",
        text : {
            abstract : "Coruscant (pronounced /'kɔɹəsɑnt/), originally called Notron, also known as Imperial Center or the Queen of the Core, was a planet located in the Galactic Core. It was generally agreed that Coruscant was, during most of galactic history, the most politically important world in the galaxy. At various times, it was the capital of the Galactic Republic, the Galactic Empire, the New Republic, the Yuuzhan Vong empire, the Galactic Alliance, very briefly the Fel Empire, Darth Krayt's Galactic Empire, and the Galactic Federation Triumvirate. In controlling Coruscant, these governments controlled most of the galaxy in the process.",
            geography : "Geologically, the planet was composed of a molten core with a rocky mantle and a silicate rock crust. At its poles were huge ice caps that were popular spots for tourists. The entire surface of Coruscant was covered by sprawling kilometers-high ecumenopolis, and boasted a population of over a hundred billion to several trillion, depending on the era. Following the end of the Clone Wars, an official census noted 1 trillion official permanent residents. The statistics did not include transients, temporary workers, unregistered populace, nor residents of orbital facilities. Because of these omissions, the actual population of Coruscant was estimated to be three times the official record.[5][19]",
            history : "The recorded history of Coruscant stretches back so far that it becomes indistinguishable from legend…",
            society : "Coruscant was home to a variety of species, though Humans made up the majority. Most of the planet's native species were either extinct or lived in the lowest parts of the Underworld by the time of the Old Republic. The planet was thought to be the home of Humans. Though not all well known citizens were always born on Coruscant, many considered the planet their home.[4]",
            government : "The planet thrives on the changing tide of politics, providing a stable anchor through damaging rebellions, the long-overdue fall of the corrupt Old Republic, and the sweeping introduction of the Emperor's resplendent New Order."
        }
    },
    { 
        name : "Tatooine",
        text : {
            abstract : "Tatooine (pronounced /tætu'in/; Jawaese: Tah doo Een e[8]) was a desert world and the first planet in the binary Tatoo star system. It was part of the Arkanis sector in the Outer Rim Territories. It was inhabited by poor locals who mostly farmed moisture for a living. ",
            history : "Tatooine was first settled around 4200 BBY.[11] The name Tatooine was coined from the Jawa name for the planet, Tah-doo-Een-e. The planet was later represented in the Galactic Senate by Sidrona Diath but it was eventually abandoned by the Republic for a second time. During the Great Hunt, the planet was cleansed of terentatek by the Jedi.",
            geography : "Tatooine is thought to have been one of the oldest planets in known space and was composed of a molten core with a rocky mantle and silicate rock crust. Fossil records suggest Tatooine was once covered in large oceans, which dried up, leaving behind many pre-arid geological formations, including Beggar's Canyon, formed around 2,000,000 BBY, when Tatooine was lush.",
            society : "The inhabitants of Tatooine included many different species from many parts of the galaxy, as can be seen in the multiple bars and cantinas in the cities. Most creatures on the planet loved to gamble on nearly everything, especially podracing, though the sport declined after the rise of the Empire",
            government : ""
        }
    }   
]