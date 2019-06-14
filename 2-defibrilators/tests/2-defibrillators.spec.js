import { expect } from "chai";
import defibrillators from "../src/main";

describe("Functional - Defibrillators", () => {
  it("Example", () => {
    const testInput = Object.freeze({
      lon: 3.879483,
      lat: 43.608177,
      defibrillators: [
        {
          id: 1,
          name: "Maison de la Prevention Sante",
          address: "6 rue Maguelone 340000 Montpellier",
          phone: "",
          lon: 3.87952263361082,
          lat: 43.6071285339217
        },
        {
          id: 2,
          name: "Hotel de Ville",
          address: "1 place Georges Freche 34267 Montpellier",
          phone: "",
          lon: 3.89652239197876,
          lat: 43.5987299452849
        },
        {
          id: 3,
          name: "Zoo de Lunaret",
          address: "50 avenue Agropolis 34090 Mtp",
          phone: "",
          lon: 3.87388031141133,
          lat: 43.6395872778854
        }
      ]
    });
    const expectedResult = "Maison de la Prevention Sante";
    expect(defibrillators(testInput)).to.equals(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Exact position", () => {
    const testInput = Object.freeze({
      lon: 3.88995587137398,
      lat: 43.6260090150577,
      defibrillators: [
        {
          id: 1,
          name: "Maison de la Prevention Sante",
          address: "6 rue Maguelone 340000 Montpellier",
          phone: "04 67 02 21 60",
          lon: 3.87952263361082,
          lat: 43.6071285339217
        },
        {
          id: 2,
          name: "Hotel de Ville",
          address: "1 place Georges Freche 34267 Montpellier",
          phone: "04 67 34 44 93",
          lon: 3.89652239197876,
          lat: 43.5987299452849
        },
        {
          id: 3,
          name: "Zoo de Lunaret",
          address: "50 avenue Agropolis 34090 Mtp",
          phone: "04 67 54 45 23",
          lon: 3.87388031141133,
          lat: 43.6395872778854
        },
        {
          id: 4,
          name: "Centre municipal Garosud",
          address: "34000 Montpellier",
          phone: "04 67 34 74 62",
          lon: 3.85859221929501,
          lat: 43.5725732056683
        },
        {
          id: 14,
          name: "Service surveillance voie publique (ASVP)",
          address: " 8 Avenue Louis Blanc",
          phone: "04 99 58 80 31-32",
          lon: 3.87964814275905,
          lat: 43.6144971208687
        },
        {
          id: 16,
          name: "Poste de police Ecusson Centre ville",
          address: "19 bis Rue durand 34000 Montpellier",
          phone: "04 67 34 70 89",
          lon: 3.87860749270054,
          lat: 43.6050174770208
        },
        {
          id: 17,
          name: "Unite Service Fourriere",
          address: "1945 avenue de toulouse",
          phone: "04 67 06 10 51",
          lon: 3.85396082760103,
          lat: 43.5873825371736
        },
        {
          id: 18,
          name: "Poste de police Hotel de ville",
          address: "789 chemin de moulares",
          phone: "",
          lon: 3.89399056177745,
          lat: 43.5988579879724
        },
        {
          id: 20,
          name: "Palais des sports Pierre-de-Coubertin",
          address: "Avenue de Naples 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.81388672389191,
          lat: 43.6382964524906
        },
        {
          id: 21,
          name: "Gymnase Francois Spinosi",
          address: "Rue de la Cavalade 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.91771560379933,
          lat: 43.5989740159529
        },
        {
          id: 22,
          name: "Plateau sportif de Grammont Terrain 9, 10, 11",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 67 64 29 43",
          lon: 3.93528362675365,
          lat: 43.6141400501416
        },
        {
          id: 23,
          name: "Maison de la Democratie",
          address: "16, rue de la Republique 34 Mtp",
          phone: "04 67 34 88 00",
          lon: 3.87908231371128,
          lat: 43.605322134559
        },
        {
          id: 24,
          name: "Gymnase Albert Batteux",
          address: "150 rue Francois-Joseph-Gossec 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.85685695958441,
          lat: 43.5740760521572
        },
        {
          id: 25,
          name: "Gymnase Bernard-Jouanique",
          address: "Rue Jaques-Dalcroze 34080 Montpellier",
          phone: "04 67 54 63 99",
          lon: 3.84713719383276,
          lat: 43.6209657932612
        },
        {
          id: 26,
          name: "Stade Municipal Sabathe",
          address: "Impasse Saint-Cleophas 34000 Montpellier",
          phone: "04 67 47 10 22",
          lon: 3.87069461025189,
          lat: 43.5979909515727
        },
        {
          id: 27,
          name: "Salle de Sports Alain Achille",
          address: "1 place Marcel-Godechot 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.86929208332712,
          lat: 43.6186500172655
        },
        {
          id: 28,
          name: "Gymnase Alain Le Hetet",
          address: "237 route de Vauguieres 34 Montpellier",
          phone: "04 67 65 39 69",
          lon: 3.90623909083357,
          lat: 43.6056481110058
        },
        {
          id: 29,
          name: "Maison pour tous Albert Dubout",
          address: "1071 avenue de la Justice de Castelnau 34090 Montpellier",
          phone: "04 67 02 68 58",
          lon: 3.88249943562772,
          lat: 43.6264526269792
        },
        {
          id: 30,
          name: "Maison pour tous Albert Camus",
          address: "118 allee Maurice-Bonafos 34080 Montpellier",
          phone: "04 67 27 3341",
          lon: 3.86999152558735,
          lat: 43.5968636559527
        },
        {
          id: 31,
          name: "Mairie annexe de proximite Mosson",
          address: "111 place de Tipasa Mas de la Paillade 34080 Montpellier",
          phone: "04 67 75 19 10",
          lon: 3.81644667226683,
          lat: 43.6280352697417
        },
        {
          id: 32,
          name: "Maison pour tous Francois Villon",
          address: "Rue des Araucarias 34080 Montpellier",
          phone: "04 67 45 04 57",
          lon: 3.839535231275,
          lat: 43.6153516866351
        },
        {
          id: 33,
          name: "Maison pour tous Melina Mercouri",
          address: "842 rue de la Vieille Poste 34 Montpellier",
          phone: "04 99 92 23 80",
          lon: 3.90822213186834,
          lat: 43.6134538722091
        },
        {
          id: 35,
          name: "Cimetiere Saint-lazare",
          address: "2 rond-point du Souvenir Francais 34000 Montpellier",
          phone: "04 67 75 34 46",
          lon: 3.93613553570902,
          lat: 43.6154360341943
        },
        {
          id: 36,
          name: "Cimetiere Saint-Etienne",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 99 52 87 35",
          lon: 3.88995587137398,
          lat: 43.6260090150577
        },
        {
          id: 37,
          name: "Piscine PITOT",
          address: "40 Allee J.RAYMOND MONTPELLIER",
          phone: "04 67 52 58 89",
          lon: 3.870303933901,
          lat: 43.6123825678961
        },
        {
          id: 38,
          name: "Piscine A. NAKACHE",
          address: "237 route de Vauguieres MONTPELLIER",
          phone: "04 67 22 57 05",
          lon: 3.90629916344486,
          lat: 43.6064087905768
        },
        {
          id: 39,
          name: "Piscine J. TARIS",
          address: "67 rue L.Michel MONTPELLIER",
          phone: "04 67 79 03 11",
          lon: 3.90104518912559,
          lat: 43.6205269425253
        },
        {
          id: 41,
          name: "Piscine J. VIVES",
          address: "1933 AVENUE DE Maurin MONTPELLIER",
          phone: "04 67 27 74 79",
          lon: 3.87258256366286,
          lat: 43.5878357304832
        },
        {
          id: 40,
          name: "Piscine M. SPILLIART",
          address: "154 Rue C.DESMOULINS MONTPELLIER",
          phone: "04 67 42 00 92",
          lon: 3.8431426079266,
          lat: 43.5982457580602
        },
        {
          id: 42,
          name: "Piscine S. BERLIOUX",
          address: "551 rue Metairie de Saysset MONTPELLIER",
          phone: "04 67 65 38 71",
          lon: 3.89523245626307,
          lat: 43.5904333774241
        },
        {
          id: 43,
          name: "Piscine NEPTUNE",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: "04 67 75 34 93",
          lon: 3.89308118861399,
          lat: 43.6074454675728
        },
        {
          id: 44,
          name: "Piscine OLYMPIQUE ANTIGONE",
          address: "195 avenue J.CARTIER MONTPELLIER",
          phone: "04 67 15 63 04",
          lon: 3.81486874802702,
          lat: 43.6203748477124
        },
        {
          id: 45,
          name: "STADE DE LA MOSSON",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: " 04 67 75 74 16",
          lon: 3.81316555213326,
          lat: 43.6218734166524
        },
        {
          id: 46,
          name: "STADE Y. DU MANOIR",
          address: "Avenue de la Vanniere MONTPELLIER",
          phone: "04 67 13 60 00",
          lon: 3.85003952312189,
          lat: 43.5936065771106
        },
        {
          id: 47,
          name: "PALAIS DES SPORTS R.BOUGNOL",
          address: "1000, avenue du Val de Montferrand MONTPELLIER",
          phone: "04 67 52 76 14",
          lon: 3.87431554927809,
          lat: 43.6380433134334
        },
        {
          id: 48,
          name: "PATINOIRE VEGAPOLIS",
          address: "Place de France MONTPELLIER",
          phone: "04 99 522 600",
          lon: 3.91489059571308,
          lat: 43.6029210639592
        },
        {
          id: 49,
          name: "CAP OMEGA",
          address: "Rond point Benjamin Franklin MONTPELLIER",
          phone: "04 67 59 30 01",
          lon: 3.91427706121347,
          lat: 43.618609351242
        },
        {
          id: 50,
          name: "S.F.M.A.",
          address: "Avenue Albert EINSTEIN MONTPELLIER",
          phone: "04 67 22 83 78",
          lon: 3.93573870254207,
          lat: 43.6156043738023
        },
        {
          id: 51,
          name: "MUSEE FABRE",
          address: "13, rue Montpellieret 34000 Montpellier",
          phone: "04 67 14 83 00",
          lon: 3.88015202860524,
          lat: 43.6117202928099
        },
        {
          id: 52,
          name: "MEDIATHEQUE E.ZOLA",
          address: "218 Bd de l'Aeroport International 34000 Montpellier",
          phone: "04 67 34 87 00",
          lon: 3.89315695628937,
          lat: 43.6084838193755
        },
        {
          id: 53,
          name: "DOMAINE DE LA PROVIDENCE",
          address: "1784 Avenue de TOULOUSE MONTPELLIER",
          phone: "04 99 64 25 80",
          lon: 3.85389341433135,
          lat: 43.5886305406899
        },
        {
          id: 54,
          name: "RDC PAVILLON JUNON",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89083244140238,
          lat: 43.6081660748674
        },
        {
          id: 55,
          name: "RDC PAVILLON ZEUS",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89081696430097,
          lat: 43.6078670518814
        },
        {
          id: 58,
          name: "PAVILLON ZEUS (Salle Marianne)",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89066621413495,
          lat: 43.6077521695801
        },
        {
          id: 56,
          name: "E.S.B.A.M.A.",
          address: "130 , RUE YEHUDI MONTPELLIER",
          phone: "04 99 58 32 87",
          lon: 3.88438064294719,
          lat: 43.6169436571347
        },
        {
          id: 57,
          name: "MONTPELLIER DANCE",
          address: "18 Rue Sainte Ursule MONTPELLIER",
          phone: "04 67 60 83 60",
          lon: 3.87836849830977,
          lat: 43.6139908031415
        },
        {
          id: 59,
          name: "CRR",
          address: "14 Rue Eugene Lisbonne 34000 Montpellier",
          phone: "04 67 66 88 46",
          lon: 3.87409666178277,
          lat: 43.610433894746
        },
        {
          id: 60,
          name: "TAM",
          address: "Parking comedie centre ville",
          phone: "04 67 07 63 79",
          lon: 3.88022104344314,
          lat: 43.6089439889165
        },
        {
          id: 61,
          name: "TAM",
          address: "Parking Corum",
          phone: "04 67 07 63 79",
          lon: 3.88238703743398,
          lat: 43.6140271812289
        },
        {
          id: 62,
          name: "CCAS (Banque d'Acceuil)",
          address: "125 place Thermidor 34000 MONTPELLIER",
          phone: "04 99 52 77 53 06 14 09 40 21",
          lon: 3.89927443503256,
          lat: 43.6020241114814
        },
        {
          id: 65,
          name:
            "Universite Montpellier 1 UFR d'Economie (1er etage, a cote des bureaux de l'administration)",
          address: " Avenue Raymond Dugrand CS 79606 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 24 44",
          lon: 3.89956530126954,
          lat: 43.6037248716731
        },
        {
          id: 66,
          name:
            "Universite Montpellier 1 UFR AES (1er etage, en face de la salle des professeurs)",
          address:
            "Espace Richter Avenue Raymond Dugrand CS 59640 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 23 33",
          lon: 3.89991643490189,
          lat: 43.6031038225234
        },
        {
          id: 64,
          name: "Universite Montpellier 1 ISEM IPAG (Loge)",
          address:
            "Espace Richter Bat b Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "ISEM : 04 34 43 20 00 IPAG : 04 67 15 85 46",
          lon: 3.89904523736634,
          lat: 43.6042583430944
        },
        {
          id: 63,
          name:
            "Universite Montpellier 1 Services Mutualises Richter PC Securite",
          address:
            "Espace Richter Bat E, BIU, MdE, Rue Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "",
          lon: 3.89848334164309,
          lat: 43.6041786988646
        },
        {
          id: 67,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment1)",
          address: "39 rue de l'universite 34060 Montpellier Cedex 2",
          phone: "04 67 61 54 00",
          lon: 3.87717345678089,
          lat: 43.6140582253597
        },
        {
          id: 68,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment2)",
          address: "",
          phone: "",
          lon: 3.87633518840488,
          lat: 43.6138609333465
        },
        {
          id: 69,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge batiment Historique)",
          address: "2 rue Ecole de Medecine CS 59001 34060 MONTPELLIER Cedex 2",
          phone: "04 67 60 10 00",
          lon: 3.87354913287527,
          lat: 43.612951860071
        },
        {
          id: 70,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge Institut biologie)",
          address: "",
          phone: "",
          lon: 3.87409700190794,
          lat: 43.6150688127327
        },
        {
          id: 71,
          name:
            "Universite Montpellier 1 UFR Odontologie (Hall Premier Etage Bat A)",
          address:
            "545, avenue du Professeur J.L Viala 34193 MONTPELLIER Cedex 5",
          phone: "04 67 10 44 70",
          lon: 3.82353507060243,
          lat: 43.6362497267334
        },
        {
          id: 72,
          name: "Universite Montpellier 1 UFR Pharmacie (LogeBat A)",
          address:
            "15, avenue Charles Flahault BP 14491 34093 MONTPELLIER Cedex 5",
          phone: "04 67 54 80 00",
          lon: 3.86189868456889,
          lat: 43.6232360922128
        },
        {
          id: 73,
          name:
            "Universite Montpellier 1 UFR Pharmacie (Galerie a cote de la pharmacie experimentale)",
          address: "",
          phone: "",
          lon: 3.86034021457447,
          lat: 43.6220496094564
        },
        {
          id: 74,
          name: "Universite Montpellier 1 UFR Staps (Batiment A)",
          address: "700, avenue du Pic Saint-Loup 34090 MONTPELLIER",
          phone: "04 67 41 57 00",
          lon: 3.8538650451542,
          lat: 43.640831368515
        },
        {
          id: 75,
          name: "Universite Montpellier 1 UFR Staps (P1)",
          address: "",
          phone: "",
          lon: 3.84875782514269,
          lat: 43.6393278958929
        },
        {
          id: 76,
          name: "Universite Montpellier 1 UFR Staps (Palais des Sports)",
          address: "",
          phone: "",
          lon: 3.84872346174789,
          lat: 43.6401970759746
        },
        {
          id: 77,
          name: "Universite Montpellier 2 PC Securite",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86080925535177,
          lat: 43.6320478884427
        },
        {
          id: 79,
          name: "Universite Montpellier 2 Secretariat IAE",
          address: "place Eugene Bataillon 34095 MONTPELLIER CEDEX 5",
          phone: "04 67 14 31 11",
          lon: 3.86173924182999,
          lat: 43.6324310982988
        },
        {
          id: 78,
          name: "Universite Montpellier 2 Couloir de la presidence 1er etage",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86403637133178,
          lat: 43.6320955198071
        },
        {
          id: 80,
          name: "Universite Montpellier 2 Laboratoire AREVA",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86719128258212,
          lat: 43.6340354958767
        },
        {
          id: 81,
          name: "Universite Montpellier 2 SCOPPS",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86651938060978,
          lat: 43.6329423512668
        },
        {
          id: 82,
          name: "Universite Montpellier 2 Laboratoire L2C",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86500072175922,
          lat: 43.6325272513173
        },
        {
          id: 86,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Piscine",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86372265447782,
          lat: 43.6347707699201
        },
        {
          id: 85,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Gymnase",
          address: "Rue Emile Jeanbreau",
          phone: "04 67 14 31 11",
          lon: 3.86411975731741,
          lat: 43.634431102342
        },
        {
          id: 84,
          name: "Universite Montpellier 2 HALL IEM",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86621601700653,
          lat: 43.6350134840932
        },
        {
          id: 88,
          name: "Universite paul valery montpellier 3 Loge Entree",
          address: "Av. Val de montferrand 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86987294089832,
          lat: 43.6310996420996
        },
        {
          id: 89,
          name: "Universite paul valery montpellier batiment Marc Bloch",
          address: "Route de mende 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86914576305111,
          lat: 43.6327403750896
        },
        {
          id: 90,
          name:
            "Universite Paul Valery montpellier 3 Site Saint Charles Loge Entree",
          address:
            'Rue du Professeur Henri Serre 34080 MONTPELLIER Arret tram " albert 1er"',
          phone: "04 67 14 55 23",
          lon: 3.87378574801668,
          lat: 43.6165624740146
        },
        {
          id: 91,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "8, rue de l'ecole Normale 34000 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.86759222312708,
          lat: 43.6208396831232
        },
        {
          id: 92,
          name: "Montpellier Ecole National Superieure de Chimie (Laboratoire)",
          address: "104, rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83738323298412,
          lat: 43.6371761537967
        },
        {
          id: 93,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "220 - 276 rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83828534323613,
          lat: 43.6375710817093
        },
        {
          id: 94,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Boutonnet",
          address: "2, Rue Emile Duploye 34090 MONTPELLIER Cedex 01",
          phone: "04 67 63 52 06",
          lon: 3.86940780515415,
          lat: 43.6234756772261
        },
        {
          id: 95,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Triolet",
          address: "1061, av. Prof. Joseph Anglada 34090 MONTPELLIER",
          phone: "04 67 63 50 16",
          lon: 3.86018125270489,
          lat: 43.631191261367
        },
        {
          id: 96,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Vert-Bois",
          address: "205, rue de la Chenaie 34090 MONTPELLIER",
          phone: "04 67 63 66 45",
          lon: 3.87086361964785,
          lat: 43.6348289810456
        },
        {
          id: 98,
          name: "CROUS de MONTPELLIER Services Centraux",
          address: "2, rue Monteil 34033 Montpellier",
          phone: " 04 67 41 50 08",
          lon: 3.87001135797271,
          lat: 43.6224491662391
        },
        {
          id: 97,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Richter",
          address: "80, rue Brumaire- 34000 Montpellier",
          phone: "04 67 15 84 47",
          lon: 3.89922794228039,
          lat: 43.6028938663275
        },
        {
          id: 99,
          name: "CREPS",
          address: "2 Avenue Charles Flahault 34090 MONTPELLIER",
          phone: "",
          lon: 3.86618003917991,
          lat: 43.6191123089151
        },
        {
          id: 100,
          name: "Maison des sports (Sport Et Psychologie) Herault Sport",
          address: "200 avenue du Pere Soulas 34090 MONTPELLIER",
          phone: "04 67 54 82 29",
          lon: 3.86583323268375,
          lat: 43.6183423905225
        },
        {
          id: 101,
          name: "Herault Sport",
          address:
            "747 avenue des apothicaires Parc Euromedecine   34090 Montpellier",
          phone: "04 67 54 82 29",
          lon: 3.83559883662065,
          lat: 43.6416646402407
        },
        {
          id: 103,
          name: "Lycee Frederic Bazille",
          address: "3224 route de Mende 34093 MONTPELLIER",
          phone: "04 67 63 89 87",
          lon: 3.8639010584102,
          lat: 43.6460180385688
        },
        {
          id: 104,
          name: "Lycee Jean Mermoz",
          address: "717 avenue Jean Mermoz 34000 MONTPELLIER",
          phone: "04 67 20 60 00",
          lon: 3.89080547314588,
          lat: 43.610863473281
        },
        {
          id: 106,
          name: "Lycee Leonard de Vinci",
          address: "Rue du Professeur Blayac 34085 MONTPELLIER cedex 4",
          phone: "04 67 10 40 10",
          lon: 3.82313209556008,
          lat: 43.6271809795402
        },
        {
          id: 105,
          name: "Lycee Jules Ferry",
          address: "270 avenue de la colline 34070 MONTPELLIER",
          phone: "04 67 10 74 01",
          lon: 3.84226731025644,
          lat: 43.6052528635409
        },
        {
          id: 107,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 99 52 54 49",
          lon: 3.87110915929521,
          lat: 43.6065196099402
        },
        {
          id: 108,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "90 allee Almicare Calvetti 34000 Montpellier",
          phone: "04 99 52 54 49",
          lon: 3.82126953167633,
          lat: 43.6322018829039
        },
        {
          id: 109,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.87064343057042,
          lat: 43.6068847626242
        },
        {
          id: 110,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address:
            "Century 2 , 101 place pierre Duhem le millenaire 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.91465549573187,
          lat: 43.6068978500869
        },
        {
          id: 111,
          name: "Prefecture de l'Herault",
          address: "34 Place des Martyrs de la resistance 34000 MONTPELLIER",
          phone: "04 67 61 60 45",
          lon: 3.87675679668135,
          lat: 43.6114960399587
        },
        {
          id: 113,
          name: "Cour d'appel",
          address: "1 rue Foch 34000 MONTPELLIER",
          phone: "04 34 08 81 92",
          lon: 3.87282071734522,
          lat: 43.6112848970996
        },
        {
          id: 112,
          name: "Tribunal de grande instance",
          address: "Place Pierre Flotte 34000 MONTPELLIER",
          phone: "04 67 12 61 09",
          lon: 3.86914794017784,
          lat: 43.6102006063269
        },
        {
          id: 115,
          name: "Gare Sncf de Montpellier St Roch",
          address: "1, Place Auguste Gibert 34000 MONTPELLIER",
          phone: "06 25 91 00 28",
          lon: 3.88084502925211,
          lat: 43.6047523852628
        },
        {
          id: 114,
          name: "Hotel de Police de Montpellier",
          address: "206 avenue du Comte de Melgueil 34000 MONTPELLIER",
          phone: "04 99 13 50 00",
          lon: 3.89161633267666,
          lat: 43.603513899768
        },
        {
          id: 116,
          name: "Pharmacie de L'Europe",
          address: "2600 avenue de l'europe 34080 MONTPELLIER",
          phone: "04 67 75 16 37",
          lon: 3.82007583943153,
          lat: 43.6418758605771
        },
        {
          id: 117,
          name: "Pharmacie de l'ovalie",
          address: "2750 Boulevard Paul Valery 34070 MONTPELLIER",
          phone: "04 67 27 71 72",
          lon: 3.84964180769663,
          lat: 43.5950383978097
        },
        {
          id: 118,
          name: "Pharmacie Ravoire",
          address: "33, Rue du Faubourg Saint JAUMES 34000 MONTPELLIER",
          phone: "04 67 63 38 84",
          lon: 3.86983030264785,
          lat: 43.6147553510548
        },
        {
          id: 119,
          name: "Citroen montpellier",
          address: "730 Avenue des pres d'arenes 34000 MONTPELLIER",
          phone: "04 67 12 67 01",
          lon: 3.88299732333175,
          lat: 43.5906567856049
        },
        {
          id: 120,
          name: "Grand Garage de l'Herault Peugeot Montpellier (commerce)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88118576492958,
          lat: 43.5829591529706
        },
        {
          id: 121,
          name: "Grand Garage de l'Herault Peugeot Montpellier (atelier)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88146330454406,
          lat: 43.5835668089934
        },
        {
          id: 122,
          name: "Centre commercial Polygone PC Securite (es1 montpellier)",
          address: "1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 67 99 41 60",
          lon: 3.88578382216927,
          lat: 43.6083221486189
        },
        {
          id: 123,
          name: "Fnac Montpellier",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 34 09 06 55",
          lon: 3.88567011518647,
          lat: 43.6085330470563
        },
        {
          id: 124,
          name: "Galeries La Fayette",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes BP 3521 34000 MONTPELLIER",
          phone: "04 67 64 83 00",
          lon: 3.88553285006607,
          lat: 43.6081092231254
        },
        {
          id: 125,
          name: "Geant casino Pres d'Arenes (Pc Securite)",
          address: " 504 Avenue du mas d'argelliers 34070 MONTPELLIER",
          phone: "04 67 86 43 69",
          lon: 3.88808523342942,
          lat: 43.586264441135
        },
        {
          id: 126,
          name: "Geant casino Celleneuve (Pc Securite)",
          address: "129 bis avenue de Lodeve 34070 MONTPELLIER",
          phone: "04 67 86 43 69 04 99 77 34 00",
          lon: 3.83992052015185,
          lat: 43.6125224275035
        },
        {
          id: 127,
          name: "Centre Commercial Odysseum",
          address: "2 place de Lisbonne 34000 MONTPELLIER",
          phone: "04 67 13 50 55",
          lon: 3.92046106179072,
          lat: 43.6045260331335
        },
        {
          id: 128,
          name: "Magasin IKEA",
          address: "Odysseum 34000 MONTPELLIER",
          phone: "",
          lon: 3.92438329923687,
          lat: 43.6041477817148
        },
        {
          id: 129,
          name: "Chronopost",
          address: "1129 Rue de la castelle 34070 MONTPELLIER",
          phone: "04 67 99 11 03 06 69 58 35 62",
          lon: 3.86885461893472,
          lat: 43.5772303319782
        },
        {
          id: 130,
          name: "DELL",
          address: "1 rond-point Benjamin Franklin 34000 MONTPELLIER",
          phone: "06 58 57 85 24",
          lon: 3.91169360147975,
          lat: 43.6184228864032
        },
        {
          id: 131,
          name: "France 3 Sud Montpellier",
          address: "10 allee John Napier 34000 MONTPELLIER",
          phone: "04 67 20 30 40",
          lon: 3.90921459780798,
          lat: 43.6145658661223
        },
        {
          id: 132,
          name: "France Telecom",
          address: "245 rue de la Galera 34000 MONTPELLIER",
          phone: "04 67 14 66 66",
          lon: 3.83704301955449,
          lat: 43.6384175720502
        },
        {
          id: 133,
          name: "Sanofi Aventis",
          address: "371 rue professeur Blayac 34000 MONTPELLIER",
          phone: "04 99 77 78 79",
          lon: 3.82943569760855,
          lat: 43.6234283430937
        },
        {
          id: 134,
          name: "Veolia Eau",
          address: "765 rue Henri Becquerel BP41246 34965 MONTPELLIER CEDEX 2",
          phone: "04 67 20 73 73 06 20 69 33 70",
          lon: 3.91517278210411,
          lat: 43.612096722739
        },
        {
          id: 135,
          name: "Banque de France",
          address: "98 avenue de Lodeve 34061 MONTPELLIER",
          phone: "04 67 06 79 74",
          lon: 3.85350136943136,
          lat: 43.6102729619807
        },
        {
          id: 136,
          name: "Mutuelle des motards",
          address: "1056 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84315528199888,
          lat: 43.642457500046
        },
        {
          id: 137,
          name: "Mutuelle des motards",
          address: "1027 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84351021937092,
          lat: 43.6430362920199
        },
        {
          id: 138,
          name: "Groupama Sud",
          address: "Place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "04 67 34 78 86",
          lon: 3.86748181412747,
          lat: 43.6031265793569
        },
        {
          id: 139,
          name: "Montpellier beton SERVANT Prestations",
          address: "1, Rue de la Premiere Ecluse 34070 MONTPELLIER",
          phone: "04 67 92 15 10",
          lon: 3.89578183610751,
          lat: 43.5877632296267
        },
        {
          id: 140,
          name: "Hotel IBIS Centre Comedie",
          address: "Allee Jules Milhau Immeuble le Triangle 34000 MONTPELLIER",
          phone: "04 99 13 29 99",
          lon: 3.88315927070696,
          lat: 43.6089881225671
        },
        {
          id: 141,
          name: "Hotel IBIS Montpellier Sud",
          address: "164 avenue palavas 34070 MONTPELLIER",
          phone: "04 67 58 82 30",
          lon: 3.89172749729087,
          lat: 43.5892502551644
        },
        {
          id: 142,
          name: "Hotel mercure",
          address: "Carrefour de l'aeroport 34000 MONTPELLIER",
          phone: "04 67 20 63 63",
          lon: 3.8940718175978,
          lat: 43.6089445631649
        },
        {
          id: 143,
          name: "Hotel mercure centre",
          address: "Rue de la Spirale 34000 MONTPELLIER",
          phone: "04 67 99 89 89",
          lon: 3.88547541488289,
          lat: 43.6090902690373
        },
        {
          id: 144,
          name: "Hotel NOVOTEL",
          address: "125 avenue Palavas 34070 MONTPELLIER",
          phone: "04 99 52 34 34",
          lon: 3.89234991103325,
          lat: 43.5895487658564
        },
        {
          id: 145,
          name: "CRS 56",
          address: "1 Rue Louis Lepine 34000 MONTPELLIER",
          phone: "04 67 13 17 00",
          lon: 3.90653250762828,
          lat: 43.6122198808195
        },
        {
          id: 146,
          name: "Accueil clinique du millenaire Accueil",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91375491076165,
          lat: 43.6020754291092
        },
        {
          id: 147,
          name: "Accueil clinique du millenaire Urgences",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91353989374935,
          lat: 43.6014966033821
        },
        {
          id: 148,
          name: "Ametra",
          address: "201 place de Thessalie 34000 MONTPELLIER",
          phone: "04 67 84 76 40",
          lon: 3.89226740440157,
          lat: 43.6075603632208
        },
        {
          id: 149,
          name: "apec",
          address: "170 rue leon blum 34000 MONTPELLIER",
          phone: "",
          lon: 3.89052741878513,
          lat: 43.6087911504281
        },
        {
          id: 150,
          name: "Arcade SFGE",
          address: "1-55 Rue de la Constituante 34000 MONTPELLIER",
          phone: "",
          lon: 3.89422323604739,
          lat: 43.6019066687056
        },
        {
          id: 151,
          name: "ASPM SECTION AFPS",
          address: "1635 Avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.9167804322775,
          lat: 43.6113532636814
        },
        {
          id: 152,
          name: "Cafeteria UFR AES",
          address: "257-269 Rue Vendemiaire 34000 MONTPELLIER",
          phone: "",
          lon: 3.89935218745248,
          lat: 43.603025020351
        },
        {
          id: 153,
          name: "Caisse MSA Languedoc",
          address: "4 place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86725032663434,
          lat: 43.6029957496972
        },
        {
          id: 154,
          name: "Centre Mutualiste Neurologique PROPARA",
          address: "263 Rue du Caducee 34000 MONTPELLIER",
          phone: "",
          lon: 3.83221040954412,
          lat: 43.6433843496942
        },
        {
          id: 155,
          name: "Communaute d Agglomeration de Montpellier",
          address: "50 place Zeus",
          phone: "",
          lon: 3.8906414844389,
          lat: 43.6076132052153
        },
        {
          id: 156,
          name: "D.D.S.I.S. HERAULT",
          address: "2 Rue Duval-Jouve 34000 MONTPELLIER",
          phone: "",
          lon: 3.86542459122745,
          lat: 43.610311327355
        },
        {
          id: 157,
          name: "DDTM34 - site du Millenaire",
          address: "233 rue Guglielmo Marconi 34000 MONTPELLIER",
          phone: "",
          lon: 3.91125189536332,
          lat: 43.6121330162831
        },
        {
          id: 158,
          name: "Ecole Superieure Des Beaux Arts",
          address: "130 Rue Yehudi Menuhin 34000 MONTPELLIER",
          phone: "",
          lon: 3.88398298908056,
          lat: 43.6171934153182
        },
        {
          id: 159,
          name: "Faculte de Droit",
          address: "Rue de l'Ecole Mage 34000 MONTPELLIER",
          phone: "",
          lon: 3.87687944359565,
          lat: 43.6137132951212
        },
        {
          id: 160,
          name: "faculte de pharmacie",
          address: "15 avenue charles flahault 34000 MONTPELLIER",
          phone: "",
          lon: 3.86185840432793,
          lat: 43.6239506766346
        },
        {
          id: 161,
          name: "fafsea",
          address: "2460 avenue albert einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.92771433730696,
          lat: 43.6106200898298
        },
        {
          id: 162,
          name: "Hotel des impots",
          address: "40 rue de louvois 34000 MONTPELLIER",
          phone: "",
          lon: 3.81969688714667,
          lat: 43.6323423132911
        },
        {
          id: 163,
          name: "Inset de Montpellier",
          address: "76 Place de la Revolution 34000 MONTPELLIER",
          phone: "",
          lon: 3.89825148899358,
          lat: 43.6039740268785
        },
        {
          id: 164,
          name: "maison agriculture",
          address: "place chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86633327325595,
          lat: 43.6038860913024
        },
        {
          id: 165,
          name: "TALCO LR",
          address: "40 rue de Pinville 34000 MONTPELLIER",
          phone: "",
          lon: 3.90506063238055,
          lat: 43.6138087474829
        },
        {
          id: 166,
          name: "Zenith Sud",
          address: "avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.93074702939992,
          lat: 43.6128228432964
        },
        {
          id: 168,
          name: "Action d'Urgence Internationale",
          address: "1401 rue de fontcouverte 34070 MONTPELLIER",
          phone: "",
          lon: 3.85255897515535,
          lat: 43.5935288046927
        },
        {
          id: 169,
          name: "Cfpmea",
          address: "501 des metairies de saysset 34070 MONTPELLIER",
          phone: "",
          lon: 3.89423707713714,
          lat: 43.5906087749725
        },
        {
          id: 172,
          name: "Amphitheatre d'O",
          address: "121 Rue de la Carrierasse 34090 MONTPELLIER",
          phone: "",
          lon: 3.83507767297601,
          lat: 43.6351213340499
        },
        {
          id: 173,
          name: "Batiment k Iut montpellier 2",
          address: "139 Avenue d'Occitanie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85149578101552,
          lat: 43.6350358178596
        },
        {
          id: 174,
          name: "Bibliotheque st charles",
          address: "Rue auguste broussonnet 34090 MONTPELLIER",
          phone: "",
          lon: 3.87258316660111,
          lat: 43.6155361363529
        },
        {
          id: 175,
          name: "Centre de formation professionnel croix rouge",
          address: "Rue de la valesiere 34090 MONTPELLIER",
          phone: "",
          lon: 3.83009545801086,
          lat: 43.6415334891597
        },
        {
          id: 176,
          name: "Chru",
          address: "Avenue Augustin Fliche 34090 MONTPELLIER",
          phone: "",
          lon: 3.86151292659671,
          lat: 43.6295976450315
        },
        {
          id: 177,
          name: "Chru euromed",
          address: "Rue du caduce 34090 MONTPELLIER",
          phone: "",
          lon: 3.8350137442276,
          lat: 43.6425510639908
        },
        {
          id: 179,
          name: "CHU Lapeyronie hall d'accueil",
          address: "Pont Lapeyronie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85207580919409,
          lat: 43.6301375533552
        },
        {
          id: 178,
          name: "Chru lapeyronie",
          address: "Avenue du doyen gaston giraud 34090 MONTPELLIER",
          phone: "",
          lon: 3.85081289792181,
          lat: 43.6313023033573
        },
        {
          id: 181,
          name: "Ipl sante envirronement durable Mediterrranee",
          address: "778 rue de la croix verte 34090 MONTPELLIER",
          phone: "",
          lon: 3.84083465416705,
          lat: 43.6447155674701
        },
        {
          id: 182,
          name: "Les Jardins de Grasse",
          address: "1482 Rue de Saint-Priest 34090 MONTPELLIER",
          phone: "",
          lon: 3.83534242743301,
          lat: 43.6375404910418
        },
        {
          id: 183,
          name: "Parcs Nationaux de France",
          address: "1037 rue Jean Francois Breton 34090 MONTPELLIER",
          phone: "",
          lon: 3.87871736858804,
          lat: 43.6474178784164
        },
        {
          id: 187,
          name: "Cirad",
          address: "Avenue agropolis 34398 MONTPELLIER",
          phone: "",
          lon: 3.868430789818,
          lat: 43.6504884118088
        },
        {
          id: 188,
          name: "Mornay",
          address: "26 allee jules milhau 34965 MONTPELLIER",
          phone: "",
          lon: 3.88335468006384,
          lat: 43.6090204423773
        },
        {
          id: 189,
          name: "Boulodrome Bernard Gasset",
          address: "122 avenue Maurice Planes 34070 MONTPELLIER",
          phone: "",
          lon: 3.84329169898554,
          lat: 43.5967806501323
        }
      ]
    });
    const expectedResult = "Cimetiere Saint-Etienne";
    expect(defibrillators(testInput)).to.equals(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Complete file", () => {
    const testInput = Object.freeze({
      lon: 3.874054,
      lat: 43.606779,
      defibrillators: [
        {
          id: 1,
          name: "Maison de la Prevention Sante",
          address: "6 rue Maguelone 340000 Montpellier",
          phone: "04 67 02 21 60",
          lon: 3.87952263361082,
          lat: 43.6071285339217
        },
        {
          id: 2,
          name: "Hotel de Ville",
          address: "1 place Georges Freche 34267 Montpellier",
          phone: "04 67 34 44 93",
          lon: 3.89652239197876,
          lat: 43.5987299452849
        },
        {
          id: 3,
          name: "Zoo de Lunaret",
          address: "50 avenue Agropolis 34090 Mtp",
          phone: "04 67 54 45 23",
          lon: 3.87388031141133,
          lat: 43.6395872778854
        },
        {
          id: 4,
          name: "Centre municipal Garosud",
          address: "34000 Montpellier",
          phone: "04 67 34 74 62",
          lon: 3.85859221929501,
          lat: 43.5725732056683
        },
        {
          id: 14,
          name: "Service surveillance voie publique (ASVP)",
          address: " 8 Avenue Louis Blanc",
          phone: "04 99 58 80 31-32",
          lon: 3.87964814275905,
          lat: 43.6144971208687
        },
        {
          id: 16,
          name: "Poste de police Ecusson Centre ville",
          address: "19 bis Rue durand 34000 Montpellier",
          phone: "04 67 34 70 89",
          lon: 3.87860749270054,
          lat: 43.6050174770208
        },
        {
          id: 17,
          name: "Unite Service Fourriere",
          address: "1945 avenue de toulouse",
          phone: "04 67 06 10 51",
          lon: 3.85396082760103,
          lat: 43.5873825371736
        },
        {
          id: 18,
          name: "Poste de police Hotel de ville",
          address: "789 chemin de moulares",
          phone: "",
          lon: 3.89399056177745,
          lat: 43.5988579879724
        },
        {
          id: 20,
          name: "Palais des sports Pierre-de-Coubertin",
          address: "Avenue de Naples 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.81388672389191,
          lat: 43.6382964524906
        },
        {
          id: 21,
          name: "Gymnase Francois Spinosi",
          address: "Rue de la Cavalade 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.91771560379933,
          lat: 43.5989740159529
        },
        {
          id: 22,
          name: "Plateau sportif de Grammont Terrain 9, 10, 11",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 67 64 29 43",
          lon: 3.93528362675365,
          lat: 43.6141400501416
        },
        {
          id: 23,
          name: "Maison de la Democratie",
          address: "16, rue de la Republique 34 Mtp",
          phone: "04 67 34 88 00",
          lon: 3.87908231371128,
          lat: 43.605322134559
        },
        {
          id: 24,
          name: "Gymnase Albert Batteux",
          address: "150 rue Francois-Joseph-Gossec 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.85685695958441,
          lat: 43.5740760521572
        },
        {
          id: 25,
          name: "Gymnase Bernard-Jouanique",
          address: "Rue Jaques-Dalcroze 34080 Montpellier",
          phone: "04 67 54 63 99",
          lon: 3.84713719383276,
          lat: 43.6209657932612
        },
        {
          id: 26,
          name: "Stade Municipal Sabathe",
          address: "Impasse Saint-Cleophas 34000 Montpellier",
          phone: "04 67 47 10 22",
          lon: 3.87069461025189,
          lat: 43.5979909515727
        },
        {
          id: 27,
          name: "Salle de Sports Alain Achille",
          address: "1 place Marcel-Godechot 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.86929208332712,
          lat: 43.6186500172655
        },
        {
          id: 28,
          name: "Gymnase Alain Le Hetet",
          address: "237 route de Vauguieres 34 Montpellier",
          phone: "04 67 65 39 69",
          lon: 3.90623909083357,
          lat: 43.6056481110058
        },
        {
          id: 29,
          name: "Maison pour tous Albert Dubout",
          address: "1071 avenue de la Justice de Castelnau 34090 Montpellier",
          phone: "04 67 02 68 58",
          lon: 3.88249943562772,
          lat: 43.6264526269792
        },
        {
          id: 30,
          name: "Maison pour tous Albert Camus",
          address: "118 allee Maurice-Bonafos 34080 Montpellier",
          phone: "04 67 27 3341",
          lon: 3.86999152558735,
          lat: 43.5968636559527
        },
        {
          id: 31,
          name: "Mairie annexe de proximite Mosson",
          address: "111 place de Tipasa Mas de la Paillade 34080 Montpellier",
          phone: "04 67 75 19 10",
          lon: 3.81644667226683,
          lat: 43.6280352697417
        },
        {
          id: 32,
          name: "Maison pour tous Francois Villon",
          address: "Rue des Araucarias 34080 Montpellier",
          phone: "04 67 45 04 57",
          lon: 3.839535231275,
          lat: 43.6153516866351
        },
        {
          id: 33,
          name: "Maison pour tous Melina Mercouri",
          address: "842 rue de la Vieille Poste 34 Montpellier",
          phone: "04 99 92 23 80",
          lon: 3.90822213186834,
          lat: 43.6134538722091
        },
        {
          id: 35,
          name: "Cimetiere Saint-lazare",
          address: "2 rond-point du Souvenir Francais 34000 Montpellier",
          phone: "04 67 75 34 46",
          lon: 3.93613553570902,
          lat: 43.6154360341943
        },
        {
          id: 36,
          name: "Cimetiere Saint-Etienne",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 99 52 87 35",
          lon: 3.88995587137398,
          lat: 43.6260090150577
        },
        {
          id: 37,
          name: "Piscine PITOT",
          address: "40 Allee J.RAYMOND MONTPELLIER",
          phone: "04 67 52 58 89",
          lon: 3.870303933901,
          lat: 43.6123825678961
        },
        {
          id: 38,
          name: "Piscine A. NAKACHE",
          address: "237 route de Vauguieres MONTPELLIER",
          phone: "04 67 22 57 05",
          lon: 3.90629916344486,
          lat: 43.6064087905768
        },
        {
          id: 39,
          name: "Piscine J. TARIS",
          address: "67 rue L.Michel MONTPELLIER",
          phone: "04 67 79 03 11",
          lon: 3.90104518912559,
          lat: 43.6205269425253
        },
        {
          id: 41,
          name: "Piscine J. VIVES",
          address: "1933 AVENUE DE Maurin MONTPELLIER",
          phone: "04 67 27 74 79",
          lon: 3.87258256366286,
          lat: 43.5878357304832
        },
        {
          id: 40,
          name: "Piscine M. SPILLIART",
          address: "154 Rue C.DESMOULINS MONTPELLIER",
          phone: "04 67 42 00 92",
          lon: 3.8431426079266,
          lat: 43.5982457580602
        },
        {
          id: 42,
          name: "Piscine S. BERLIOUX",
          address: "551 rue Metairie de Saysset MONTPELLIER",
          phone: "04 67 65 38 71",
          lon: 3.89523245626307,
          lat: 43.5904333774241
        },
        {
          id: 43,
          name: "Piscine NEPTUNE",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: "04 67 75 34 93",
          lon: 3.89308118861399,
          lat: 43.6074454675728
        },
        {
          id: 44,
          name: "Piscine OLYMPIQUE ANTIGONE",
          address: "195 avenue J.CARTIER MONTPELLIER",
          phone: "04 67 15 63 04",
          lon: 3.81486874802702,
          lat: 43.6203748477124
        },
        {
          id: 45,
          name: "STADE DE LA MOSSON",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: " 04 67 75 74 16",
          lon: 3.81316555213326,
          lat: 43.6218734166524
        },
        {
          id: 46,
          name: "STADE Y. DU MANOIR",
          address: "Avenue de la Vanniere MONTPELLIER",
          phone: "04 67 13 60 00",
          lon: 3.85003952312189,
          lat: 43.5936065771106
        },
        {
          id: 47,
          name: "PALAIS DES SPORTS R.BOUGNOL",
          address: "1000, avenue du Val de Montferrand MONTPELLIER",
          phone: "04 67 52 76 14",
          lon: 3.87431554927809,
          lat: 43.6380433134334
        },
        {
          id: 48,
          name: "PATINOIRE VEGAPOLIS",
          address: "Place de France MONTPELLIER",
          phone: "04 99 522 600",
          lon: 3.91489059571308,
          lat: 43.6029210639592
        },
        {
          id: 49,
          name: "CAP OMEGA",
          address: "Rond point Benjamin Franklin MONTPELLIER",
          phone: "04 67 59 30 01",
          lon: 3.91427706121347,
          lat: 43.618609351242
        },
        {
          id: 50,
          name: "S.F.M.A.",
          address: "Avenue Albert EINSTEIN MONTPELLIER",
          phone: "04 67 22 83 78",
          lon: 3.93573870254207,
          lat: 43.6156043738023
        },
        {
          id: 51,
          name: "MUSEE FABRE",
          address: "13, rue Montpellieret 34000 Montpellier",
          phone: "04 67 14 83 00",
          lon: 3.88015202860524,
          lat: 43.6117202928099
        },
        {
          id: 52,
          name: "MEDIATHEQUE E.ZOLA",
          address: "218 Bd de l'Aeroport International 34000 Montpellier",
          phone: "04 67 34 87 00",
          lon: 3.89315695628937,
          lat: 43.6084838193755
        },
        {
          id: 53,
          name: "DOMAINE DE LA PROVIDENCE",
          address: "1784 Avenue de TOULOUSE MONTPELLIER",
          phone: "04 99 64 25 80",
          lon: 3.85389341433135,
          lat: 43.5886305406899
        },
        {
          id: 54,
          name: "RDC PAVILLON JUNON",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89083244140238,
          lat: 43.6081660748674
        },
        {
          id: 55,
          name: "RDC PAVILLON ZEUS",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89081696430097,
          lat: 43.6078670518814
        },
        {
          id: 58,
          name: "PAVILLON ZEUS (Salle Marianne)",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89066621413495,
          lat: 43.6077521695801
        },
        {
          id: 56,
          name: "E.S.B.A.M.A.",
          address: "130 , RUE YEHUDI MONTPELLIER",
          phone: "04 99 58 32 87",
          lon: 3.88438064294719,
          lat: 43.6169436571347
        },
        {
          id: 57,
          name: "MONTPELLIER DANCE",
          address: "18 Rue Sainte Ursule MONTPELLIER",
          phone: "04 67 60 83 60",
          lon: 3.87836849830977,
          lat: 43.6139908031415
        },
        {
          id: 59,
          name: "CRR",
          address: "14 Rue Eugene Lisbonne 34000 Montpellier",
          phone: "04 67 66 88 46",
          lon: 3.87409666178277,
          lat: 43.610433894746
        },
        {
          id: 60,
          name: "TAM",
          address: "Parking comedie centre ville",
          phone: "04 67 07 63 79",
          lon: 3.88022104344314,
          lat: 43.6089439889165
        },
        {
          id: 61,
          name: "TAM",
          address: "Parking Corum",
          phone: "04 67 07 63 79",
          lon: 3.88238703743398,
          lat: 43.6140271812289
        },
        {
          id: 62,
          name: "CCAS (Banque d'Acceuil)",
          address: "125 place Thermidor 34000 MONTPELLIER",
          phone: "04 99 52 77 53 06 14 09 40 21",
          lon: 3.89927443503256,
          lat: 43.6020241114814
        },
        {
          id: 65,
          name:
            "Universite Montpellier 1 UFR d'Economie (1er etage, a cote des bureaux de l'administration)",
          address: " Avenue Raymond Dugrand CS 79606 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 24 44",
          lon: 3.89956530126954,
          lat: 43.6037248716731
        },
        {
          id: 66,
          name:
            "Universite Montpellier 1 UFR AES (1er etage, en face de la salle des professeurs)",
          address:
            "Espace Richter Avenue Raymond Dugrand CS 59640 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 23 33",
          lon: 3.89991643490189,
          lat: 43.6031038225234
        },
        {
          id: 64,
          name: "Universite Montpellier 1 ISEM IPAG (Loge)",
          address:
            "Espace Richter Bat b Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "ISEM : 04 34 43 20 00 IPAG : 04 67 15 85 46",
          lon: 3.89904523736634,
          lat: 43.6042583430944
        },
        {
          id: 63,
          name:
            "Universite Montpellier 1 Services Mutualises Richter PC Securite",
          address:
            "Espace Richter Bat E, BIU, MdE, Rue Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "",
          lon: 3.89848334164309,
          lat: 43.6041786988646
        },
        {
          id: 67,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment1)",
          address: "39 rue de l'universite 34060 Montpellier Cedex 2",
          phone: "04 67 61 54 00",
          lon: 3.87717345678089,
          lat: 43.6140582253597
        },
        {
          id: 68,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment2)",
          address: "",
          phone: "",
          lon: 3.87633518840488,
          lat: 43.6138609333465
        },
        {
          id: 69,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge batiment Historique)",
          address: "2 rue Ecole de Medecine CS 59001 34060 MONTPELLIER Cedex 2",
          phone: "04 67 60 10 00",
          lon: 3.87354913287527,
          lat: 43.612951860071
        },
        {
          id: 70,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge Institut biologie)",
          address: "",
          phone: "",
          lon: 3.87409700190794,
          lat: 43.6150688127327
        },
        {
          id: 71,
          name:
            "Universite Montpellier 1 UFR Odontologie (Hall Premier Etage Bat A)",
          address:
            "545, avenue du Professeur J.L Viala 34193 MONTPELLIER Cedex 5",
          phone: "04 67 10 44 70",
          lon: 3.82353507060243,
          lat: 43.6362497267334
        },
        {
          id: 72,
          name: "Universite Montpellier 1 UFR Pharmacie (LogeBat A)",
          address:
            "15, avenue Charles Flahault BP 14491 34093 MONTPELLIER Cedex 5",
          phone: "04 67 54 80 00",
          lon: 3.86189868456889,
          lat: 43.6232360922128
        },
        {
          id: 73,
          name:
            "Universite Montpellier 1 UFR Pharmacie (Galerie a cote de la pharmacie experimentale)",
          address: "",
          phone: "",
          lon: 3.86034021457447,
          lat: 43.6220496094564
        },
        {
          id: 74,
          name: "Universite Montpellier 1 UFR Staps (Batiment A)",
          address: "700, avenue du Pic Saint-Loup 34090 MONTPELLIER",
          phone: "04 67 41 57 00",
          lon: 3.8538650451542,
          lat: 43.640831368515
        },
        {
          id: 75,
          name: "Universite Montpellier 1 UFR Staps (P1)",
          address: "",
          phone: "",
          lon: 3.84875782514269,
          lat: 43.6393278958929
        },
        {
          id: 76,
          name: "Universite Montpellier 1 UFR Staps (Palais des Sports)",
          address: "",
          phone: "",
          lon: 3.84872346174789,
          lat: 43.6401970759746
        },
        {
          id: 77,
          name: "Universite Montpellier 2 PC Securite",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86080925535177,
          lat: 43.6320478884427
        },
        {
          id: 79,
          name: "Universite Montpellier 2 Secretariat IAE",
          address: "place Eugene Bataillon 34095 MONTPELLIER CEDEX 5",
          phone: "04 67 14 31 11",
          lon: 3.86173924182999,
          lat: 43.6324310982988
        },
        {
          id: 78,
          name: "Universite Montpellier 2 Couloir de la presidence 1er etage",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86403637133178,
          lat: 43.6320955198071
        },
        {
          id: 80,
          name: "Universite Montpellier 2 Laboratoire AREVA",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86719128258212,
          lat: 43.6340354958767
        },
        {
          id: 81,
          name: "Universite Montpellier 2 SCOPPS",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86651938060978,
          lat: 43.6329423512668
        },
        {
          id: 82,
          name: "Universite Montpellier 2 Laboratoire L2C",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86500072175922,
          lat: 43.6325272513173
        },
        {
          id: 86,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Piscine",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86372265447782,
          lat: 43.6347707699201
        },
        {
          id: 85,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Gymnase",
          address: "Rue Emile Jeanbreau",
          phone: "04 67 14 31 11",
          lon: 3.86411975731741,
          lat: 43.634431102342
        },
        {
          id: 84,
          name: "Universite Montpellier 2 HALL IEM",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86621601700653,
          lat: 43.6350134840932
        },
        {
          id: 88,
          name: "Universite paul valery montpellier 3 Loge Entree",
          address: "Av. Val de montferrand 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86987294089832,
          lat: 43.6310996420996
        },
        {
          id: 89,
          name: "Universite paul valery montpellier batiment Marc Bloch",
          address: "Route de mende 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86914576305111,
          lat: 43.6327403750896
        },
        {
          id: 90,
          name:
            "Universite Paul Valery montpellier 3 Site Saint Charles Loge Entree",
          address:
            'Rue du Professeur Henri Serre 34080 MONTPELLIER Arret tram " albert 1er"',
          phone: "04 67 14 55 23",
          lon: 3.87378574801668,
          lat: 43.6165624740146
        },
        {
          id: 91,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "8, rue de l'ecole Normale 34000 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.86759222312708,
          lat: 43.6208396831232
        },
        {
          id: 92,
          name: "Montpellier Ecole National Superieure de Chimie (Laboratoire)",
          address: "104, rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83738323298412,
          lat: 43.6371761537967
        },
        {
          id: 93,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "220 - 276 rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83828534323613,
          lat: 43.6375710817093
        },
        {
          id: 94,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Boutonnet",
          address: "2, Rue Emile Duploye 34090 MONTPELLIER Cedex 01",
          phone: "04 67 63 52 06",
          lon: 3.86940780515415,
          lat: 43.6234756772261
        },
        {
          id: 95,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Triolet",
          address: "1061, av. Prof. Joseph Anglada 34090 MONTPELLIER",
          phone: "04 67 63 50 16",
          lon: 3.86018125270489,
          lat: 43.631191261367
        },
        {
          id: 96,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Vert-Bois",
          address: "205, rue de la Chenaie 34090 MONTPELLIER",
          phone: "04 67 63 66 45",
          lon: 3.87086361964785,
          lat: 43.6348289810456
        },
        {
          id: 98,
          name: "CROUS de MONTPELLIER Services Centraux",
          address: "2, rue Monteil 34033 Montpellier",
          phone: " 04 67 41 50 08",
          lon: 3.87001135797271,
          lat: 43.6224491662391
        },
        {
          id: 97,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Richter",
          address: "80, rue Brumaire- 34000 Montpellier",
          phone: "04 67 15 84 47",
          lon: 3.89922794228039,
          lat: 43.6028938663275
        },
        {
          id: 99,
          name: "CREPS",
          address: "2 Avenue Charles Flahault 34090 MONTPELLIER",
          phone: "",
          lon: 3.86618003917991,
          lat: 43.6191123089151
        },
        {
          id: 100,
          name: "Maison des sports (Sport Et Psychologie) Herault Sport",
          address: "200 avenue du Pere Soulas 34090 MONTPELLIER",
          phone: "04 67 54 82 29",
          lon: 3.86583323268375,
          lat: 43.6183423905225
        },
        {
          id: 101,
          name: "Herault Sport",
          address:
            "747 avenue des apothicaires Parc Euromedecine   34090 Montpellier",
          phone: "04 67 54 82 29",
          lon: 3.83559883662065,
          lat: 43.6416646402407
        },
        {
          id: 103,
          name: "Lycee Frederic Bazille",
          address: "3224 route de Mende 34093 MONTPELLIER",
          phone: "04 67 63 89 87",
          lon: 3.8639010584102,
          lat: 43.6460180385688
        },
        {
          id: 104,
          name: "Lycee Jean Mermoz",
          address: "717 avenue Jean Mermoz 34000 MONTPELLIER",
          phone: "04 67 20 60 00",
          lon: 3.89080547314588,
          lat: 43.610863473281
        },
        {
          id: 106,
          name: "Lycee Leonard de Vinci",
          address: "Rue du Professeur Blayac 34085 MONTPELLIER cedex 4",
          phone: "04 67 10 40 10",
          lon: 3.82313209556008,
          lat: 43.6271809795402
        },
        {
          id: 105,
          name: "Lycee Jules Ferry",
          address: "270 avenue de la colline 34070 MONTPELLIER",
          phone: "04 67 10 74 01",
          lon: 3.84226731025644,
          lat: 43.6052528635409
        },
        {
          id: 107,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 99 52 54 49",
          lon: 3.87110915929521,
          lat: 43.6065196099402
        },
        {
          id: 108,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "90 allee Almicare Calvetti 34000 Montpellier",
          phone: "04 99 52 54 49",
          lon: 3.82126953167633,
          lat: 43.6322018829039
        },
        {
          id: 109,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.87064343057042,
          lat: 43.6068847626242
        },
        {
          id: 110,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address:
            "Century 2 , 101 place pierre Duhem le millenaire 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.91465549573187,
          lat: 43.6068978500869
        },
        {
          id: 111,
          name: "Prefecture de l'Herault",
          address: "34 Place des Martyrs de la resistance 34000 MONTPELLIER",
          phone: "04 67 61 60 45",
          lon: 3.87675679668135,
          lat: 43.6114960399587
        },
        {
          id: 113,
          name: "Cour d'appel",
          address: "1 rue Foch 34000 MONTPELLIER",
          phone: "04 34 08 81 92",
          lon: 3.87282071734522,
          lat: 43.6112848970996
        },
        {
          id: 112,
          name: "Tribunal de grande instance",
          address: "Place Pierre Flotte 34000 MONTPELLIER",
          phone: "04 67 12 61 09",
          lon: 3.86914794017784,
          lat: 43.6102006063269
        },
        {
          id: 115,
          name: "Gare Sncf de Montpellier St Roch",
          address: "1, Place Auguste Gibert 34000 MONTPELLIER",
          phone: "06 25 91 00 28",
          lon: 3.88084502925211,
          lat: 43.6047523852628
        },
        {
          id: 114,
          name: "Hotel de Police de Montpellier",
          address: "206 avenue du Comte de Melgueil 34000 MONTPELLIER",
          phone: "04 99 13 50 00",
          lon: 3.89161633267666,
          lat: 43.603513899768
        },
        {
          id: 116,
          name: "Pharmacie de L'Europe",
          address: "2600 avenue de l'europe 34080 MONTPELLIER",
          phone: "04 67 75 16 37",
          lon: 3.82007583943153,
          lat: 43.6418758605771
        },
        {
          id: 117,
          name: "Pharmacie de l'ovalie",
          address: "2750 Boulevard Paul Valery 34070 MONTPELLIER",
          phone: "04 67 27 71 72",
          lon: 3.84964180769663,
          lat: 43.5950383978097
        },
        {
          id: 118,
          name: "Pharmacie Ravoire",
          address: "33, Rue du Faubourg Saint JAUMES 34000 MONTPELLIER",
          phone: "04 67 63 38 84",
          lon: 3.86983030264785,
          lat: 43.6147553510548
        },
        {
          id: 119,
          name: "Citroen montpellier",
          address: "730 Avenue des pres d'arenes 34000 MONTPELLIER",
          phone: "04 67 12 67 01",
          lon: 3.88299732333175,
          lat: 43.5906567856049
        },
        {
          id: 120,
          name: "Grand Garage de l'Herault Peugeot Montpellier (commerce)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88118576492958,
          lat: 43.5829591529706
        },
        {
          id: 121,
          name: "Grand Garage de l'Herault Peugeot Montpellier (atelier)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88146330454406,
          lat: 43.5835668089934
        },
        {
          id: 122,
          name: "Centre commercial Polygone PC Securite (es1 montpellier)",
          address: "1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 67 99 41 60",
          lon: 3.88578382216927,
          lat: 43.6083221486189
        },
        {
          id: 123,
          name: "Fnac Montpellier",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 34 09 06 55",
          lon: 3.88567011518647,
          lat: 43.6085330470563
        },
        {
          id: 124,
          name: "Galeries La Fayette",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes BP 3521 34000 MONTPELLIER",
          phone: "04 67 64 83 00",
          lon: 3.88553285006607,
          lat: 43.6081092231254
        },
        {
          id: 125,
          name: "Geant casino Pres d'Arenes (Pc Securite)",
          address: " 504 Avenue du mas d'argelliers 34070 MONTPELLIER",
          phone: "04 67 86 43 69",
          lon: 3.88808523342942,
          lat: 43.586264441135
        },
        {
          id: 126,
          name: "Geant casino Celleneuve (Pc Securite)",
          address: "129 bis avenue de Lodeve 34070 MONTPELLIER",
          phone: "04 67 86 43 69 04 99 77 34 00",
          lon: 3.83992052015185,
          lat: 43.6125224275035
        },
        {
          id: 127,
          name: "Centre Commercial Odysseum",
          address: "2 place de Lisbonne 34000 MONTPELLIER",
          phone: "04 67 13 50 55",
          lon: 3.92046106179072,
          lat: 43.6045260331335
        },
        {
          id: 128,
          name: "Magasin IKEA",
          address: "Odysseum 34000 MONTPELLIER",
          phone: "",
          lon: 3.92438329923687,
          lat: 43.6041477817148
        },
        {
          id: 129,
          name: "Chronopost",
          address: "1129 Rue de la castelle 34070 MONTPELLIER",
          phone: "04 67 99 11 03 06 69 58 35 62",
          lon: 3.86885461893472,
          lat: 43.5772303319782
        },
        {
          id: 130,
          name: "DELL",
          address: "1 rond-point Benjamin Franklin 34000 MONTPELLIER",
          phone: "06 58 57 85 24",
          lon: 3.91169360147975,
          lat: 43.6184228864032
        },
        {
          id: 131,
          name: "France 3 Sud Montpellier",
          address: "10 allee John Napier 34000 MONTPELLIER",
          phone: "04 67 20 30 40",
          lon: 3.90921459780798,
          lat: 43.6145658661223
        },
        {
          id: 132,
          name: "France Telecom",
          address: "245 rue de la Galera 34000 MONTPELLIER",
          phone: "04 67 14 66 66",
          lon: 3.83704301955449,
          lat: 43.6384175720502
        },
        {
          id: 133,
          name: "Sanofi Aventis",
          address: "371 rue professeur Blayac 34000 MONTPELLIER",
          phone: "04 99 77 78 79",
          lon: 3.82943569760855,
          lat: 43.6234283430937
        },
        {
          id: 134,
          name: "Veolia Eau",
          address: "765 rue Henri Becquerel BP41246 34965 MONTPELLIER CEDEX 2",
          phone: "04 67 20 73 73 06 20 69 33 70",
          lon: 3.91517278210411,
          lat: 43.612096722739
        },
        {
          id: 135,
          name: "Banque de France",
          address: "98 avenue de Lodeve 34061 MONTPELLIER",
          phone: "04 67 06 79 74",
          lon: 3.85350136943136,
          lat: 43.6102729619807
        },
        {
          id: 136,
          name: "Mutuelle des motards",
          address: "1056 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84315528199888,
          lat: 43.642457500046
        },
        {
          id: 137,
          name: "Mutuelle des motards",
          address: "1027 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84351021937092,
          lat: 43.6430362920199
        },
        {
          id: 138,
          name: "Groupama Sud",
          address: "Place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "04 67 34 78 86",
          lon: 3.86748181412747,
          lat: 43.6031265793569
        },
        {
          id: 139,
          name: "Montpellier beton SERVANT Prestations",
          address: "1, Rue de la Premiere Ecluse 34070 MONTPELLIER",
          phone: "04 67 92 15 10",
          lon: 3.89578183610751,
          lat: 43.5877632296267
        },
        {
          id: 140,
          name: "Hotel IBIS Centre Comedie",
          address: "Allee Jules Milhau Immeuble le Triangle 34000 MONTPELLIER",
          phone: "04 99 13 29 99",
          lon: 3.88315927070696,
          lat: 43.6089881225671
        },
        {
          id: 141,
          name: "Hotel IBIS Montpellier Sud",
          address: "164 avenue palavas 34070 MONTPELLIER",
          phone: "04 67 58 82 30",
          lon: 3.89172749729087,
          lat: 43.5892502551644
        },
        {
          id: 142,
          name: "Hotel mercure",
          address: "Carrefour de l'aeroport 34000 MONTPELLIER",
          phone: "04 67 20 63 63",
          lon: 3.8940718175978,
          lat: 43.6089445631649
        },
        {
          id: 143,
          name: "Hotel mercure centre",
          address: "Rue de la Spirale 34000 MONTPELLIER",
          phone: "04 67 99 89 89",
          lon: 3.88547541488289,
          lat: 43.6090902690373
        },
        {
          id: 144,
          name: "Hotel NOVOTEL",
          address: "125 avenue Palavas 34070 MONTPELLIER",
          phone: "04 99 52 34 34",
          lon: 3.89234991103325,
          lat: 43.5895487658564
        },
        {
          id: 145,
          name: "CRS 56",
          address: "1 Rue Louis Lepine 34000 MONTPELLIER",
          phone: "04 67 13 17 00",
          lon: 3.90653250762828,
          lat: 43.6122198808195
        },
        {
          id: 146,
          name: "Accueil clinique du millenaire Accueil",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91375491076165,
          lat: 43.6020754291092
        },
        {
          id: 147,
          name: "Accueil clinique du millenaire Urgences",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91353989374935,
          lat: 43.6014966033821
        },
        {
          id: 148,
          name: "Ametra",
          address: "201 place de Thessalie 34000 MONTPELLIER",
          phone: "04 67 84 76 40",
          lon: 3.89226740440157,
          lat: 43.6075603632208
        },
        {
          id: 149,
          name: "apec",
          address: "170 rue leon blum 34000 MONTPELLIER",
          phone: "",
          lon: 3.89052741878513,
          lat: 43.6087911504281
        },
        {
          id: 150,
          name: "Arcade SFGE",
          address: "1-55 Rue de la Constituante 34000 MONTPELLIER",
          phone: "",
          lon: 3.89422323604739,
          lat: 43.6019066687056
        },
        {
          id: 151,
          name: "ASPM SECTION AFPS",
          address: "1635 Avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.9167804322775,
          lat: 43.6113532636814
        },
        {
          id: 152,
          name: "Cafeteria UFR AES",
          address: "257-269 Rue Vendemiaire 34000 MONTPELLIER",
          phone: "",
          lon: 3.89935218745248,
          lat: 43.603025020351
        },
        {
          id: 153,
          name: "Caisse MSA Languedoc",
          address: "4 place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86725032663434,
          lat: 43.6029957496972
        },
        {
          id: 154,
          name: "Centre Mutualiste Neurologique PROPARA",
          address: "263 Rue du Caducee 34000 MONTPELLIER",
          phone: "",
          lon: 3.83221040954412,
          lat: 43.6433843496942
        },
        {
          id: 155,
          name: "Communaute d Agglomeration de Montpellier",
          address: "50 place Zeus",
          phone: "",
          lon: 3.8906414844389,
          lat: 43.6076132052153
        },
        {
          id: 156,
          name: "D.D.S.I.S. HERAULT",
          address: "2 Rue Duval-Jouve 34000 MONTPELLIER",
          phone: "",
          lon: 3.86542459122745,
          lat: 43.610311327355
        },
        {
          id: 157,
          name: "DDTM34 - site du Millenaire",
          address: "233 rue Guglielmo Marconi 34000 MONTPELLIER",
          phone: "",
          lon: 3.91125189536332,
          lat: 43.6121330162831
        },
        {
          id: 158,
          name: "Ecole Superieure Des Beaux Arts",
          address: "130 Rue Yehudi Menuhin 34000 MONTPELLIER",
          phone: "",
          lon: 3.88398298908056,
          lat: 43.6171934153182
        },
        {
          id: 159,
          name: "Faculte de Droit",
          address: "Rue de l'Ecole Mage 34000 MONTPELLIER",
          phone: "",
          lon: 3.87687944359565,
          lat: 43.6137132951212
        },
        {
          id: 160,
          name: "faculte de pharmacie",
          address: "15 avenue charles flahault 34000 MONTPELLIER",
          phone: "",
          lon: 3.86185840432793,
          lat: 43.6239506766346
        },
        {
          id: 161,
          name: "fafsea",
          address: "2460 avenue albert einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.92771433730696,
          lat: 43.6106200898298
        },
        {
          id: 162,
          name: "Hotel des impots",
          address: "40 rue de louvois 34000 MONTPELLIER",
          phone: "",
          lon: 3.81969688714667,
          lat: 43.6323423132911
        },
        {
          id: 163,
          name: "Inset de Montpellier",
          address: "76 Place de la Revolution 34000 MONTPELLIER",
          phone: "",
          lon: 3.89825148899358,
          lat: 43.6039740268785
        },
        {
          id: 164,
          name: "maison agriculture",
          address: "place chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86633327325595,
          lat: 43.6038860913024
        },
        {
          id: 165,
          name: "TALCO LR",
          address: "40 rue de Pinville 34000 MONTPELLIER",
          phone: "",
          lon: 3.90506063238055,
          lat: 43.6138087474829
        },
        {
          id: 166,
          name: "Zenith Sud",
          address: "avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.93074702939992,
          lat: 43.6128228432964
        },
        {
          id: 168,
          name: "Action d'Urgence Internationale",
          address: "1401 rue de fontcouverte 34070 MONTPELLIER",
          phone: "",
          lon: 3.85255897515535,
          lat: 43.5935288046927
        },
        {
          id: 169,
          name: "Cfpmea",
          address: "501 des metairies de saysset 34070 MONTPELLIER",
          phone: "",
          lon: 3.89423707713714,
          lat: 43.5906087749725
        },
        {
          id: 172,
          name: "Amphitheatre d'O",
          address: "121 Rue de la Carrierasse 34090 MONTPELLIER",
          phone: "",
          lon: 3.83507767297601,
          lat: 43.6351213340499
        },
        {
          id: 173,
          name: "Batiment k Iut montpellier 2",
          address: "139 Avenue d'Occitanie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85149578101552,
          lat: 43.6350358178596
        },
        {
          id: 174,
          name: "Bibliotheque st charles",
          address: "Rue auguste broussonnet 34090 MONTPELLIER",
          phone: "",
          lon: 3.87258316660111,
          lat: 43.6155361363529
        },
        {
          id: 175,
          name: "Centre de formation professionnel croix rouge",
          address: "Rue de la valesiere 34090 MONTPELLIER",
          phone: "",
          lon: 3.83009545801086,
          lat: 43.6415334891597
        },
        {
          id: 176,
          name: "Chru",
          address: "Avenue Augustin Fliche 34090 MONTPELLIER",
          phone: "",
          lon: 3.86151292659671,
          lat: 43.6295976450315
        },
        {
          id: 177,
          name: "Chru euromed",
          address: "Rue du caduce 34090 MONTPELLIER",
          phone: "",
          lon: 3.8350137442276,
          lat: 43.6425510639908
        },
        {
          id: 179,
          name: "CHU Lapeyronie hall d'accueil",
          address: "Pont Lapeyronie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85207580919409,
          lat: 43.6301375533552
        },
        {
          id: 178,
          name: "Chru lapeyronie",
          address: "Avenue du doyen gaston giraud 34090 MONTPELLIER",
          phone: "",
          lon: 3.85081289792181,
          lat: 43.6313023033573
        },
        {
          id: 181,
          name: "Ipl sante envirronement durable Mediterrranee",
          address: "778 rue de la croix verte 34090 MONTPELLIER",
          phone: "",
          lon: 3.84083465416705,
          lat: 43.6447155674701
        },
        {
          id: 182,
          name: "Les Jardins de Grasse",
          address: "1482 Rue de Saint-Priest 34090 MONTPELLIER",
          phone: "",
          lon: 3.83534242743301,
          lat: 43.6375404910418
        },
        {
          id: 183,
          name: "Parcs Nationaux de France",
          address: "1037 rue Jean Francois Breton 34090 MONTPELLIER",
          phone: "",
          lon: 3.87871736858804,
          lat: 43.6474178784164
        },
        {
          id: 187,
          name: "Cirad",
          address: "Avenue agropolis 34398 MONTPELLIER",
          phone: "",
          lon: 3.868430789818,
          lat: 43.6504884118088
        },
        {
          id: 188,
          name: "Mornay",
          address: "26 allee jules milhau 34965 MONTPELLIER",
          phone: "",
          lon: 3.88335468006384,
          lat: 43.6090204423773
        },
        {
          id: 189,
          name: "Boulodrome Bernard Gasset",
          address: "122 avenue Maurice Planes 34070 MONTPELLIER",
          phone: "",
          lon: 3.84329169898554,
          lat: 43.5967806501323
        }
      ]
    });
    const expectedResult = "Caisse Primaire d'Assurance Maladie";
    expect(defibrillators(testInput)).to.equals(
      expectedResult,
      JSON.stringify(testInput)
    );
  });

  it("Complete file 2", () => {
    const testInput = Object.freeze({
      lon: 3.833542,
      lat: 43.634646,
      defibrillators: [
        {
          id: 1,
          name: "Maison de la Prevention Sante",
          address: "6 rue Maguelone 340000 Montpellier",
          phone: "04 67 02 21 60",
          lon: 3.87952263361082,
          lat: 43.6071285339217
        },
        {
          id: 2,
          name: "Hotel de Ville",
          address: "1 place Georges Freche 34267 Montpellier",
          phone: "04 67 34 44 93",
          lon: 3.89652239197876,
          lat: 43.5987299452849
        },
        {
          id: 3,
          name: "Zoo de Lunaret",
          address: "50 avenue Agropolis 34090 Mtp",
          phone: "04 67 54 45 23",
          lon: 3.87388031141133,
          lat: 43.6395872778854
        },
        {
          id: 4,
          name: "Centre municipal Garosud",
          address: "34000 Montpellier",
          phone: "04 67 34 74 62",
          lon: 3.85859221929501,
          lat: 43.5725732056683
        },
        {
          id: 14,
          name: "Service surveillance voie publique (ASVP)",
          address: " 8 Avenue Louis Blanc",
          phone: "04 99 58 80 31-32",
          lon: 3.87964814275905,
          lat: 43.6144971208687
        },
        {
          id: 16,
          name: "Poste de police Ecusson Centre ville",
          address: "19 bis Rue durand 34000 Montpellier",
          phone: "04 67 34 70 89",
          lon: 3.87860749270054,
          lat: 43.6050174770208
        },
        {
          id: 17,
          name: "Unite Service Fourriere",
          address: "1945 avenue de toulouse",
          phone: "04 67 06 10 51",
          lon: 3.85396082760103,
          lat: 43.5873825371736
        },
        {
          id: 18,
          name: "Poste de police Hotel de ville",
          address: "789 chemin de moulares",
          phone: "",
          lon: 3.89399056177745,
          lat: 43.5988579879724
        },
        {
          id: 20,
          name: "Palais des sports Pierre-de-Coubertin",
          address: "Avenue de Naples 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.81388672389191,
          lat: 43.6382964524906
        },
        {
          id: 21,
          name: "Gymnase Francois Spinosi",
          address: "Rue de la Cavalade 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.91771560379933,
          lat: 43.5989740159529
        },
        {
          id: 22,
          name: "Plateau sportif de Grammont Terrain 9, 10, 11",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 67 64 29 43",
          lon: 3.93528362675365,
          lat: 43.6141400501416
        },
        {
          id: 23,
          name: "Maison de la Democratie",
          address: "16, rue de la Republique 34 Mtp",
          phone: "04 67 34 88 00",
          lon: 3.87908231371128,
          lat: 43.605322134559
        },
        {
          id: 24,
          name: "Gymnase Albert Batteux",
          address: "150 rue Francois-Joseph-Gossec 34000 Montpellier",
          phone: "04 67 03 02 24",
          lon: 3.85685695958441,
          lat: 43.5740760521572
        },
        {
          id: 25,
          name: "Gymnase Bernard-Jouanique",
          address: "Rue Jaques-Dalcroze 34080 Montpellier",
          phone: "04 67 54 63 99",
          lon: 3.84713719383276,
          lat: 43.6209657932612
        },
        {
          id: 26,
          name: "Stade Municipal Sabathe",
          address: "Impasse Saint-Cleophas 34000 Montpellier",
          phone: "04 67 47 10 22",
          lon: 3.87069461025189,
          lat: 43.5979909515727
        },
        {
          id: 27,
          name: "Salle de Sports Alain Achille",
          address: "1 place Marcel-Godechot 34000 Montpellier",
          phone: "04 67 15 90 35",
          lon: 3.86929208332712,
          lat: 43.6186500172655
        },
        {
          id: 28,
          name: "Gymnase Alain Le Hetet",
          address: "237 route de Vauguieres 34 Montpellier",
          phone: "04 67 65 39 69",
          lon: 3.90623909083357,
          lat: 43.6056481110058
        },
        {
          id: 29,
          name: "Maison pour tous Albert Dubout",
          address: "1071 avenue de la Justice de Castelnau 34090 Montpellier",
          phone: "04 67 02 68 58",
          lon: 3.88249943562772,
          lat: 43.6264526269792
        },
        {
          id: 30,
          name: "Maison pour tous Albert Camus",
          address: "118 allee Maurice-Bonafos 34080 Montpellier",
          phone: "04 67 27 3341",
          lon: 3.86999152558735,
          lat: 43.5968636559527
        },
        {
          id: 31,
          name: "Mairie annexe de proximite Mosson",
          address: "111 place de Tipasa Mas de la Paillade 34080 Montpellier",
          phone: "04 67 75 19 10",
          lon: 3.81644667226683,
          lat: 43.6280352697417
        },
        {
          id: 32,
          name: "Maison pour tous Francois Villon",
          address: "Rue des Araucarias 34080 Montpellier",
          phone: "04 67 45 04 57",
          lon: 3.839535231275,
          lat: 43.6153516866351
        },
        {
          id: 33,
          name: "Maison pour tous Melina Mercouri",
          address: "842 rue de la Vieille Poste 34 Montpellier",
          phone: "04 99 92 23 80",
          lon: 3.90822213186834,
          lat: 43.6134538722091
        },
        {
          id: 35,
          name: "Cimetiere Saint-lazare",
          address: "2 rond-point du Souvenir Francais 34000 Montpellier",
          phone: "04 67 75 34 46",
          lon: 3.93613553570902,
          lat: 43.6154360341943
        },
        {
          id: 36,
          name: "Cimetiere Saint-Etienne",
          address: "Avenue Albert Einstein 34000 Montpellier",
          phone: "04 99 52 87 35",
          lon: 3.88995587137398,
          lat: 43.6260090150577
        },
        {
          id: 37,
          name: "Piscine PITOT",
          address: "40 Allee J.RAYMOND MONTPELLIER",
          phone: "04 67 52 58 89",
          lon: 3.870303933901,
          lat: 43.6123825678961
        },
        {
          id: 38,
          name: "Piscine A. NAKACHE",
          address: "237 route de Vauguieres MONTPELLIER",
          phone: "04 67 22 57 05",
          lon: 3.90629916344486,
          lat: 43.6064087905768
        },
        {
          id: 39,
          name: "Piscine J. TARIS",
          address: "67 rue L.Michel MONTPELLIER",
          phone: "04 67 79 03 11",
          lon: 3.90104518912559,
          lat: 43.6205269425253
        },
        {
          id: 41,
          name: "Piscine J. VIVES",
          address: "1933 AVENUE DE Maurin MONTPELLIER",
          phone: "04 67 27 74 79",
          lon: 3.87258256366286,
          lat: 43.5878357304832
        },
        {
          id: 40,
          name: "Piscine M. SPILLIART",
          address: "154 Rue C.DESMOULINS MONTPELLIER",
          phone: "04 67 42 00 92",
          lon: 3.8431426079266,
          lat: 43.5982457580602
        },
        {
          id: 42,
          name: "Piscine S. BERLIOUX",
          address: "551 rue Metairie de Saysset MONTPELLIER",
          phone: "04 67 65 38 71",
          lon: 3.89523245626307,
          lat: 43.5904333774241
        },
        {
          id: 43,
          name: "Piscine NEPTUNE",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: "04 67 75 34 93",
          lon: 3.89308118861399,
          lat: 43.6074454675728
        },
        {
          id: 44,
          name: "Piscine OLYMPIQUE ANTIGONE",
          address: "195 avenue J.CARTIER MONTPELLIER",
          phone: "04 67 15 63 04",
          lon: 3.81486874802702,
          lat: 43.6203748477124
        },
        {
          id: 45,
          name: "STADE DE LA MOSSON",
          address: "Avenue de Heidelberg MONTPELLIER",
          phone: " 04 67 75 74 16",
          lon: 3.81316555213326,
          lat: 43.6218734166524
        },
        {
          id: 46,
          name: "STADE Y. DU MANOIR",
          address: "Avenue de la Vanniere MONTPELLIER",
          phone: "04 67 13 60 00",
          lon: 3.85003952312189,
          lat: 43.5936065771106
        },
        {
          id: 47,
          name: "PALAIS DES SPORTS R.BOUGNOL",
          address: "1000, avenue du Val de Montferrand MONTPELLIER",
          phone: "04 67 52 76 14",
          lon: 3.87431554927809,
          lat: 43.6380433134334
        },
        {
          id: 48,
          name: "PATINOIRE VEGAPOLIS",
          address: "Place de France MONTPELLIER",
          phone: "04 99 522 600",
          lon: 3.91489059571308,
          lat: 43.6029210639592
        },
        {
          id: 49,
          name: "CAP OMEGA",
          address: "Rond point Benjamin Franklin MONTPELLIER",
          phone: "04 67 59 30 01",
          lon: 3.91427706121347,
          lat: 43.618609351242
        },
        {
          id: 50,
          name: "S.F.M.A.",
          address: "Avenue Albert EINSTEIN MONTPELLIER",
          phone: "04 67 22 83 78",
          lon: 3.93573870254207,
          lat: 43.6156043738023
        },
        {
          id: 51,
          name: "MUSEE FABRE",
          address: "13, rue Montpellieret 34000 Montpellier",
          phone: "04 67 14 83 00",
          lon: 3.88015202860524,
          lat: 43.6117202928099
        },
        {
          id: 52,
          name: "MEDIATHEQUE E.ZOLA",
          address: "218 Bd de l'Aeroport International 34000 Montpellier",
          phone: "04 67 34 87 00",
          lon: 3.89315695628937,
          lat: 43.6084838193755
        },
        {
          id: 53,
          name: "DOMAINE DE LA PROVIDENCE",
          address: "1784 Avenue de TOULOUSE MONTPELLIER",
          phone: "04 99 64 25 80",
          lon: 3.85389341433135,
          lat: 43.5886305406899
        },
        {
          id: 54,
          name: "RDC PAVILLON JUNON",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89083244140238,
          lat: 43.6081660748674
        },
        {
          id: 55,
          name: "RDC PAVILLON ZEUS",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89081696430097,
          lat: 43.6078670518814
        },
        {
          id: 58,
          name: "PAVILLON ZEUS (Salle Marianne)",
          address: "50 Place Zeus MONTPELLIER",
          phone: "04 67 13 69 27",
          lon: 3.89066621413495,
          lat: 43.6077521695801
        },
        {
          id: 56,
          name: "E.S.B.A.M.A.",
          address: "130 , RUE YEHUDI MONTPELLIER",
          phone: "04 99 58 32 87",
          lon: 3.88438064294719,
          lat: 43.6169436571347
        },
        {
          id: 57,
          name: "MONTPELLIER DANCE",
          address: "18 Rue Sainte Ursule MONTPELLIER",
          phone: "04 67 60 83 60",
          lon: 3.87836849830977,
          lat: 43.6139908031415
        },
        {
          id: 59,
          name: "CRR",
          address: "14 Rue Eugene Lisbonne 34000 Montpellier",
          phone: "04 67 66 88 46",
          lon: 3.87409666178277,
          lat: 43.610433894746
        },
        {
          id: 60,
          name: "TAM",
          address: "Parking comedie centre ville",
          phone: "04 67 07 63 79",
          lon: 3.88022104344314,
          lat: 43.6089439889165
        },
        {
          id: 61,
          name: "TAM",
          address: "Parking Corum",
          phone: "04 67 07 63 79",
          lon: 3.88238703743398,
          lat: 43.6140271812289
        },
        {
          id: 62,
          name: "CCAS (Banque d'Acceuil)",
          address: "125 place Thermidor 34000 MONTPELLIER",
          phone: "04 99 52 77 53 06 14 09 40 21",
          lon: 3.89927443503256,
          lat: 43.6020241114814
        },
        {
          id: 65,
          name:
            "Universite Montpellier 1 UFR d'Economie (1er etage, a cote des bureaux de l'administration)",
          address: " Avenue Raymond Dugrand CS 79606 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 24 44",
          lon: 3.89956530126954,
          lat: 43.6037248716731
        },
        {
          id: 66,
          name:
            "Universite Montpellier 1 UFR AES (1er etage, en face de la salle des professeurs)",
          address:
            "Espace Richter Avenue Raymond Dugrand CS 59640 34960 MONTPELLIER Cedex 2",
          phone: "04 34 43 23 33",
          lon: 3.89991643490189,
          lat: 43.6031038225234
        },
        {
          id: 64,
          name: "Universite Montpellier 1 ISEM IPAG (Loge)",
          address:
            "Espace Richter Bat b Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "ISEM : 04 34 43 20 00 IPAG : 04 67 15 85 46",
          lon: 3.89904523736634,
          lat: 43.6042583430944
        },
        {
          id: 63,
          name:
            "Universite Montpellier 1 Services Mutualises Richter PC Securite",
          address:
            "Espace Richter Bat E, BIU, MdE, Rue Vendemiaire CS 19519 34960 MONTPELLIER Cedex 2",
          phone: "",
          lon: 3.89848334164309,
          lat: 43.6041786988646
        },
        {
          id: 67,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment1)",
          address: "39 rue de l'universite 34060 Montpellier Cedex 2",
          phone: "04 67 61 54 00",
          lon: 3.87717345678089,
          lat: 43.6140582253597
        },
        {
          id: 68,
          name: "Universite Montpellier 1 UFR Droit (accueil batiment2)",
          address: "",
          phone: "",
          lon: 3.87633518840488,
          lat: 43.6138609333465
        },
        {
          id: 69,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge batiment Historique)",
          address: "2 rue Ecole de Medecine CS 59001 34060 MONTPELLIER Cedex 2",
          phone: "04 67 60 10 00",
          lon: 3.87354913287527,
          lat: 43.612951860071
        },
        {
          id: 70,
          name:
            "Universite Montpellier 1 UFR Medecine (Loge Institut biologie)",
          address: "",
          phone: "",
          lon: 3.87409700190794,
          lat: 43.6150688127327
        },
        {
          id: 71,
          name:
            "Universite Montpellier 1 UFR Odontologie (Hall Premier Etage Bat A)",
          address:
            "545, avenue du Professeur J.L Viala 34193 MONTPELLIER Cedex 5",
          phone: "04 67 10 44 70",
          lon: 3.82353507060243,
          lat: 43.6362497267334
        },
        {
          id: 72,
          name: "Universite Montpellier 1 UFR Pharmacie (LogeBat A)",
          address:
            "15, avenue Charles Flahault BP 14491 34093 MONTPELLIER Cedex 5",
          phone: "04 67 54 80 00",
          lon: 3.86189868456889,
          lat: 43.6232360922128
        },
        {
          id: 73,
          name:
            "Universite Montpellier 1 UFR Pharmacie (Galerie a cote de la pharmacie experimentale)",
          address: "",
          phone: "",
          lon: 3.86034021457447,
          lat: 43.6220496094564
        },
        {
          id: 74,
          name: "Universite Montpellier 1 UFR Staps (Batiment A)",
          address: "700, avenue du Pic Saint-Loup 34090 MONTPELLIER",
          phone: "04 67 41 57 00",
          lon: 3.8538650451542,
          lat: 43.640831368515
        },
        {
          id: 75,
          name: "Universite Montpellier 1 UFR Staps (P1)",
          address: "",
          phone: "",
          lon: 3.84875782514269,
          lat: 43.6393278958929
        },
        {
          id: 76,
          name: "Universite Montpellier 1 UFR Staps (Palais des Sports)",
          address: "",
          phone: "",
          lon: 3.84872346174789,
          lat: 43.6401970759746
        },
        {
          id: 77,
          name: "Universite Montpellier 2 PC Securite",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86080925535177,
          lat: 43.6320478884427
        },
        {
          id: 79,
          name: "Universite Montpellier 2 Secretariat IAE",
          address: "place Eugene Bataillon 34095 MONTPELLIER CEDEX 5",
          phone: "04 67 14 31 11",
          lon: 3.86173924182999,
          lat: 43.6324310982988
        },
        {
          id: 78,
          name: "Universite Montpellier 2 Couloir de la presidence 1er etage",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86403637133178,
          lat: 43.6320955198071
        },
        {
          id: 80,
          name: "Universite Montpellier 2 Laboratoire AREVA",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86719128258212,
          lat: 43.6340354958767
        },
        {
          id: 81,
          name: "Universite Montpellier 2 SCOPPS",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86651938060978,
          lat: 43.6329423512668
        },
        {
          id: 82,
          name: "Universite Montpellier 2 Laboratoire L2C",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86500072175922,
          lat: 43.6325272513173
        },
        {
          id: 86,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Piscine",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86372265447782,
          lat: 43.6347707699201
        },
        {
          id: 85,
          name: "Universite Montpellier 2 Centre Sportif Universitaire Gymnase",
          address: "Rue Emile Jeanbreau",
          phone: "04 67 14 31 11",
          lon: 3.86411975731741,
          lat: 43.634431102342
        },
        {
          id: 84,
          name: "Universite Montpellier 2 HALL IEM",
          address: "",
          phone: "04 67 14 31 11",
          lon: 3.86621601700653,
          lat: 43.6350134840932
        },
        {
          id: 88,
          name: "Universite paul valery montpellier 3 Loge Entree",
          address: "Av. Val de montferrand 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86987294089832,
          lat: 43.6310996420996
        },
        {
          id: 89,
          name: "Universite paul valery montpellier batiment Marc Bloch",
          address: "Route de mende 34199 MONTPELLIER",
          phone: "04 67 14 55 23",
          lon: 3.86914576305111,
          lat: 43.6327403750896
        },
        {
          id: 90,
          name:
            "Universite Paul Valery montpellier 3 Site Saint Charles Loge Entree",
          address:
            'Rue du Professeur Henri Serre 34080 MONTPELLIER Arret tram " albert 1er"',
          phone: "04 67 14 55 23",
          lon: 3.87378574801668,
          lat: 43.6165624740146
        },
        {
          id: 91,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "8, rue de l'ecole Normale 34000 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.86759222312708,
          lat: 43.6208396831232
        },
        {
          id: 92,
          name: "Montpellier Ecole National Superieure de Chimie (Laboratoire)",
          address: "104, rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83738323298412,
          lat: 43.6371761537967
        },
        {
          id: 93,
          name: "Montpellier Ecole National Superieure de Chimie",
          address: "220 - 276 rue de la galera 34090 MONTPELLIER",
          phone: "04 67 14 72 83",
          lon: 3.83828534323613,
          lat: 43.6375710817093
        },
        {
          id: 94,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Boutonnet",
          address: "2, Rue Emile Duploye 34090 MONTPELLIER Cedex 01",
          phone: "04 67 63 52 06",
          lon: 3.86940780515415,
          lat: 43.6234756772261
        },
        {
          id: 95,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Triolet",
          address: "1061, av. Prof. Joseph Anglada 34090 MONTPELLIER",
          phone: "04 67 63 50 16",
          lon: 3.86018125270489,
          lat: 43.631191261367
        },
        {
          id: 96,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Vert-Bois",
          address: "205, rue de la Chenaie 34090 MONTPELLIER",
          phone: "04 67 63 66 45",
          lon: 3.87086361964785,
          lat: 43.6348289810456
        },
        {
          id: 98,
          name: "CROUS de MONTPELLIER Services Centraux",
          address: "2, rue Monteil 34033 Montpellier",
          phone: " 04 67 41 50 08",
          lon: 3.87001135797271,
          lat: 43.6224491662391
        },
        {
          id: 97,
          name: "CROUS de MONTPELLIER Restaurants Universitaires Richter",
          address: "80, rue Brumaire- 34000 Montpellier",
          phone: "04 67 15 84 47",
          lon: 3.89922794228039,
          lat: 43.6028938663275
        },
        {
          id: 99,
          name: "CREPS",
          address: "2 Avenue Charles Flahault 34090 MONTPELLIER",
          phone: "",
          lon: 3.86618003917991,
          lat: 43.6191123089151
        },
        {
          id: 100,
          name: "Maison des sports (Sport Et Psychologie) Herault Sport",
          address: "200 avenue du Pere Soulas 34090 MONTPELLIER",
          phone: "04 67 54 82 29",
          lon: 3.86583323268375,
          lat: 43.6183423905225
        },
        {
          id: 101,
          name: "Herault Sport",
          address:
            "747 avenue des apothicaires Parc Euromedecine   34090 Montpellier",
          phone: "04 67 54 82 29",
          lon: 3.83559883662065,
          lat: 43.6416646402407
        },
        {
          id: 103,
          name: "Lycee Frederic Bazille",
          address: "3224 route de Mende 34093 MONTPELLIER",
          phone: "04 67 63 89 87",
          lon: 3.8639010584102,
          lat: 43.6460180385688
        },
        {
          id: 104,
          name: "Lycee Jean Mermoz",
          address: "717 avenue Jean Mermoz 34000 MONTPELLIER",
          phone: "04 67 20 60 00",
          lon: 3.89080547314588,
          lat: 43.610863473281
        },
        {
          id: 106,
          name: "Lycee Leonard de Vinci",
          address: "Rue du Professeur Blayac 34085 MONTPELLIER cedex 4",
          phone: "04 67 10 40 10",
          lon: 3.82313209556008,
          lat: 43.6271809795402
        },
        {
          id: 105,
          name: "Lycee Jules Ferry",
          address: "270 avenue de la colline 34070 MONTPELLIER",
          phone: "04 67 10 74 01",
          lon: 3.84226731025644,
          lat: 43.6052528635409
        },
        {
          id: 107,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 99 52 54 49",
          lon: 3.87110915929521,
          lat: 43.6065196099402
        },
        {
          id: 108,
          name: "Caisse Primaire d'Assurance Maladie",
          address: "90 allee Almicare Calvetti 34000 Montpellier",
          phone: "04 99 52 54 49",
          lon: 3.82126953167633,
          lat: 43.6322018829039
        },
        {
          id: 109,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address: "29 cours Gambetta 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.87064343057042,
          lat: 43.6068847626242
        },
        {
          id: 110,
          name: "Caisse d'assurance retraite et de la Sante au travail",
          address:
            "Century 2 , 101 place pierre Duhem le millenaire 34000 MONTPELLIER",
          phone: "04 67 12 94 72",
          lon: 3.91465549573187,
          lat: 43.6068978500869
        },
        {
          id: 111,
          name: "Prefecture de l'Herault",
          address: "34 Place des Martyrs de la resistance 34000 MONTPELLIER",
          phone: "04 67 61 60 45",
          lon: 3.87675679668135,
          lat: 43.6114960399587
        },
        {
          id: 113,
          name: "Cour d'appel",
          address: "1 rue Foch 34000 MONTPELLIER",
          phone: "04 34 08 81 92",
          lon: 3.87282071734522,
          lat: 43.6112848970996
        },
        {
          id: 112,
          name: "Tribunal de grande instance",
          address: "Place Pierre Flotte 34000 MONTPELLIER",
          phone: "04 67 12 61 09",
          lon: 3.86914794017784,
          lat: 43.6102006063269
        },
        {
          id: 115,
          name: "Gare Sncf de Montpellier St Roch",
          address: "1, Place Auguste Gibert 34000 MONTPELLIER",
          phone: "06 25 91 00 28",
          lon: 3.88084502925211,
          lat: 43.6047523852628
        },
        {
          id: 114,
          name: "Hotel de Police de Montpellier",
          address: "206 avenue du Comte de Melgueil 34000 MONTPELLIER",
          phone: "04 99 13 50 00",
          lon: 3.89161633267666,
          lat: 43.603513899768
        },
        {
          id: 116,
          name: "Pharmacie de L'Europe",
          address: "2600 avenue de l'europe 34080 MONTPELLIER",
          phone: "04 67 75 16 37",
          lon: 3.82007583943153,
          lat: 43.6418758605771
        },
        {
          id: 117,
          name: "Pharmacie de l'ovalie",
          address: "2750 Boulevard Paul Valery 34070 MONTPELLIER",
          phone: "04 67 27 71 72",
          lon: 3.84964180769663,
          lat: 43.5950383978097
        },
        {
          id: 118,
          name: "Pharmacie Ravoire",
          address: "33, Rue du Faubourg Saint JAUMES 34000 MONTPELLIER",
          phone: "04 67 63 38 84",
          lon: 3.86983030264785,
          lat: 43.6147553510548
        },
        {
          id: 119,
          name: "Citroen montpellier",
          address: "730 Avenue des pres d'arenes 34000 MONTPELLIER",
          phone: "04 67 12 67 01",
          lon: 3.88299732333175,
          lat: 43.5906567856049
        },
        {
          id: 120,
          name: "Grand Garage de l'Herault Peugeot Montpellier (commerce)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88118576492958,
          lat: 43.5829591529706
        },
        {
          id: 121,
          name: "Grand Garage de l'Herault Peugeot Montpellier (atelier)",
          address: "905 rue de l'industrie 34007 MONTPELLIER",
          phone: "04 67 06 25 02 04 67 06 25 25",
          lon: 3.88146330454406,
          lat: 43.5835668089934
        },
        {
          id: 122,
          name: "Centre commercial Polygone PC Securite (es1 montpellier)",
          address: "1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 67 99 41 60",
          lon: 3.88578382216927,
          lat: 43.6083221486189
        },
        {
          id: 123,
          name: "Fnac Montpellier",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes 34000 MONTPELLIER",
          phone: "04 34 09 06 55",
          lon: 3.88567011518647,
          lat: 43.6085330470563
        },
        {
          id: 124,
          name: "Galeries La Fayette",
          address:
            "Centre cial Le Polygone 1 rue des Pertuisanes BP 3521 34000 MONTPELLIER",
          phone: "04 67 64 83 00",
          lon: 3.88553285006607,
          lat: 43.6081092231254
        },
        {
          id: 125,
          name: "Geant casino Pres d'Arenes (Pc Securite)",
          address: " 504 Avenue du mas d'argelliers 34070 MONTPELLIER",
          phone: "04 67 86 43 69",
          lon: 3.88808523342942,
          lat: 43.586264441135
        },
        {
          id: 126,
          name: "Geant casino Celleneuve (Pc Securite)",
          address: "129 bis avenue de Lodeve 34070 MONTPELLIER",
          phone: "04 67 86 43 69 04 99 77 34 00",
          lon: 3.83992052015185,
          lat: 43.6125224275035
        },
        {
          id: 127,
          name: "Centre Commercial Odysseum",
          address: "2 place de Lisbonne 34000 MONTPELLIER",
          phone: "04 67 13 50 55",
          lon: 3.92046106179072,
          lat: 43.6045260331335
        },
        {
          id: 128,
          name: "Magasin IKEA",
          address: "Odysseum 34000 MONTPELLIER",
          phone: "",
          lon: 3.92438329923687,
          lat: 43.6041477817148
        },
        {
          id: 129,
          name: "Chronopost",
          address: "1129 Rue de la castelle 34070 MONTPELLIER",
          phone: "04 67 99 11 03 06 69 58 35 62",
          lon: 3.86885461893472,
          lat: 43.5772303319782
        },
        {
          id: 130,
          name: "DELL",
          address: "1 rond-point Benjamin Franklin 34000 MONTPELLIER",
          phone: "06 58 57 85 24",
          lon: 3.91169360147975,
          lat: 43.6184228864032
        },
        {
          id: 131,
          name: "France 3 Sud Montpellier",
          address: "10 allee John Napier 34000 MONTPELLIER",
          phone: "04 67 20 30 40",
          lon: 3.90921459780798,
          lat: 43.6145658661223
        },
        {
          id: 132,
          name: "France Telecom",
          address: "245 rue de la Galera 34000 MONTPELLIER",
          phone: "04 67 14 66 66",
          lon: 3.83704301955449,
          lat: 43.6384175720502
        },
        {
          id: 133,
          name: "Sanofi Aventis",
          address: "371 rue professeur Blayac 34000 MONTPELLIER",
          phone: "04 99 77 78 79",
          lon: 3.82943569760855,
          lat: 43.6234283430937
        },
        {
          id: 134,
          name: "Veolia Eau",
          address: "765 rue Henri Becquerel BP41246 34965 MONTPELLIER CEDEX 2",
          phone: "04 67 20 73 73 06 20 69 33 70",
          lon: 3.91517278210411,
          lat: 43.612096722739
        },
        {
          id: 135,
          name: "Banque de France",
          address: "98 avenue de Lodeve 34061 MONTPELLIER",
          phone: "04 67 06 79 74",
          lon: 3.85350136943136,
          lat: 43.6102729619807
        },
        {
          id: 136,
          name: "Mutuelle des motards",
          address: "1056 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84315528199888,
          lat: 43.642457500046
        },
        {
          id: 137,
          name: "Mutuelle des motards",
          address: "1027 rue de la croix verte 34294 MONTPELLIER",
          phone: "04 67 72 73 20",
          lon: 3.84351021937092,
          lat: 43.6430362920199
        },
        {
          id: 138,
          name: "Groupama Sud",
          address: "Place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "04 67 34 78 86",
          lon: 3.86748181412747,
          lat: 43.6031265793569
        },
        {
          id: 139,
          name: "Montpellier beton SERVANT Prestations",
          address: "1, Rue de la Premiere Ecluse 34070 MONTPELLIER",
          phone: "04 67 92 15 10",
          lon: 3.89578183610751,
          lat: 43.5877632296267
        },
        {
          id: 140,
          name: "Hotel IBIS Centre Comedie",
          address: "Allee Jules Milhau Immeuble le Triangle 34000 MONTPELLIER",
          phone: "04 99 13 29 99",
          lon: 3.88315927070696,
          lat: 43.6089881225671
        },
        {
          id: 141,
          name: "Hotel IBIS Montpellier Sud",
          address: "164 avenue palavas 34070 MONTPELLIER",
          phone: "04 67 58 82 30",
          lon: 3.89172749729087,
          lat: 43.5892502551644
        },
        {
          id: 142,
          name: "Hotel mercure",
          address: "Carrefour de l'aeroport 34000 MONTPELLIER",
          phone: "04 67 20 63 63",
          lon: 3.8940718175978,
          lat: 43.6089445631649
        },
        {
          id: 143,
          name: "Hotel mercure centre",
          address: "Rue de la Spirale 34000 MONTPELLIER",
          phone: "04 67 99 89 89",
          lon: 3.88547541488289,
          lat: 43.6090902690373
        },
        {
          id: 144,
          name: "Hotel NOVOTEL",
          address: "125 avenue Palavas 34070 MONTPELLIER",
          phone: "04 99 52 34 34",
          lon: 3.89234991103325,
          lat: 43.5895487658564
        },
        {
          id: 145,
          name: "CRS 56",
          address: "1 Rue Louis Lepine 34000 MONTPELLIER",
          phone: "04 67 13 17 00",
          lon: 3.90653250762828,
          lat: 43.6122198808195
        },
        {
          id: 146,
          name: "Accueil clinique du millenaire Accueil",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91375491076165,
          lat: 43.6020754291092
        },
        {
          id: 147,
          name: "Accueil clinique du millenaire Urgences",
          address: "220 bd penelope 34000 MONTPELLIER",
          phone: "04 99 53 61 03",
          lon: 3.91353989374935,
          lat: 43.6014966033821
        },
        {
          id: 148,
          name: "Ametra",
          address: "201 place de Thessalie 34000 MONTPELLIER",
          phone: "04 67 84 76 40",
          lon: 3.89226740440157,
          lat: 43.6075603632208
        },
        {
          id: 149,
          name: "apec",
          address: "170 rue leon blum 34000 MONTPELLIER",
          phone: "",
          lon: 3.89052741878513,
          lat: 43.6087911504281
        },
        {
          id: 150,
          name: "Arcade SFGE",
          address: "1-55 Rue de la Constituante 34000 MONTPELLIER",
          phone: "",
          lon: 3.89422323604739,
          lat: 43.6019066687056
        },
        {
          id: 151,
          name: "ASPM SECTION AFPS",
          address: "1635 Avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.9167804322775,
          lat: 43.6113532636814
        },
        {
          id: 152,
          name: "Cafeteria UFR AES",
          address: "257-269 Rue Vendemiaire 34000 MONTPELLIER",
          phone: "",
          lon: 3.89935218745248,
          lat: 43.603025020351
        },
        {
          id: 153,
          name: "Caisse MSA Languedoc",
          address: "4 place Jean Antoine de Chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86725032663434,
          lat: 43.6029957496972
        },
        {
          id: 154,
          name: "Centre Mutualiste Neurologique PROPARA",
          address: "263 Rue du Caducee 34000 MONTPELLIER",
          phone: "",
          lon: 3.83221040954412,
          lat: 43.6433843496942
        },
        {
          id: 155,
          name: "Communaute d Agglomeration de Montpellier",
          address: "50 place Zeus",
          phone: "",
          lon: 3.8906414844389,
          lat: 43.6076132052153
        },
        {
          id: 156,
          name: "D.D.S.I.S. HERAULT",
          address: "2 Rue Duval-Jouve 34000 MONTPELLIER",
          phone: "",
          lon: 3.86542459122745,
          lat: 43.610311327355
        },
        {
          id: 157,
          name: "DDTM34 - site du Millenaire",
          address: "233 rue Guglielmo Marconi 34000 MONTPELLIER",
          phone: "",
          lon: 3.91125189536332,
          lat: 43.6121330162831
        },
        {
          id: 158,
          name: "Ecole Superieure Des Beaux Arts",
          address: "130 Rue Yehudi Menuhin 34000 MONTPELLIER",
          phone: "",
          lon: 3.88398298908056,
          lat: 43.6171934153182
        },
        {
          id: 159,
          name: "Faculte de Droit",
          address: "Rue de l'Ecole Mage 34000 MONTPELLIER",
          phone: "",
          lon: 3.87687944359565,
          lat: 43.6137132951212
        },
        {
          id: 160,
          name: "faculte de pharmacie",
          address: "15 avenue charles flahault 34000 MONTPELLIER",
          phone: "",
          lon: 3.86185840432793,
          lat: 43.6239506766346
        },
        {
          id: 161,
          name: "fafsea",
          address: "2460 avenue albert einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.92771433730696,
          lat: 43.6106200898298
        },
        {
          id: 162,
          name: "Hotel des impots",
          address: "40 rue de louvois 34000 MONTPELLIER",
          phone: "",
          lon: 3.81969688714667,
          lat: 43.6323423132911
        },
        {
          id: 163,
          name: "Inset de Montpellier",
          address: "76 Place de la Revolution 34000 MONTPELLIER",
          phone: "",
          lon: 3.89825148899358,
          lat: 43.6039740268785
        },
        {
          id: 164,
          name: "maison agriculture",
          address: "place chaptal 34000 MONTPELLIER",
          phone: "",
          lon: 3.86633327325595,
          lat: 43.6038860913024
        },
        {
          id: 165,
          name: "TALCO LR",
          address: "40 rue de Pinville 34000 MONTPELLIER",
          phone: "",
          lon: 3.90506063238055,
          lat: 43.6138087474829
        },
        {
          id: 166,
          name: "Zenith Sud",
          address: "avenue Albert Einstein 34000 MONTPELLIER",
          phone: "",
          lon: 3.93074702939992,
          lat: 43.6128228432964
        },
        {
          id: 168,
          name: "Action d'Urgence Internationale",
          address: "1401 rue de fontcouverte 34070 MONTPELLIER",
          phone: "",
          lon: 3.85255897515535,
          lat: 43.5935288046927
        },
        {
          id: 169,
          name: "Cfpmea",
          address: "501 des metairies de saysset 34070 MONTPELLIER",
          phone: "",
          lon: 3.89423707713714,
          lat: 43.5906087749725
        },
        {
          id: 172,
          name: "Amphitheatre d'O",
          address: "121 Rue de la Carrierasse 34090 MONTPELLIER",
          phone: "",
          lon: 3.83507767297601,
          lat: 43.6351213340499
        },
        {
          id: 173,
          name: "Batiment k Iut montpellier 2",
          address: "139 Avenue d'Occitanie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85149578101552,
          lat: 43.6350358178596
        },
        {
          id: 174,
          name: "Bibliotheque st charles",
          address: "Rue auguste broussonnet 34090 MONTPELLIER",
          phone: "",
          lon: 3.87258316660111,
          lat: 43.6155361363529
        },
        {
          id: 175,
          name: "Centre de formation professionnel croix rouge",
          address: "Rue de la valesiere 34090 MONTPELLIER",
          phone: "",
          lon: 3.83009545801086,
          lat: 43.6415334891597
        },
        {
          id: 176,
          name: "Chru",
          address: "Avenue Augustin Fliche 34090 MONTPELLIER",
          phone: "",
          lon: 3.86151292659671,
          lat: 43.6295976450315
        },
        {
          id: 177,
          name: "Chru euromed",
          address: "Rue du caduce 34090 MONTPELLIER",
          phone: "",
          lon: 3.8350137442276,
          lat: 43.6425510639908
        },
        {
          id: 179,
          name: "CHU Lapeyronie hall d'accueil",
          address: "Pont Lapeyronie 34090 MONTPELLIER",
          phone: "",
          lon: 3.85207580919409,
          lat: 43.6301375533552
        },
        {
          id: 178,
          name: "Chru lapeyronie",
          address: "Avenue du doyen gaston giraud 34090 MONTPELLIER",
          phone: "",
          lon: 3.85081289792181,
          lat: 43.6313023033573
        },
        {
          id: 181,
          name: "Ipl sante envirronement durable Mediterrranee",
          address: "778 rue de la croix verte 34090 MONTPELLIER",
          phone: "",
          lon: 3.84083465416705,
          lat: 43.6447155674701
        },
        {
          id: 182,
          name: "Les Jardins de Grasse",
          address: "1482 Rue de Saint-Priest 34090 MONTPELLIER",
          phone: "",
          lon: 3.83534242743301,
          lat: 43.6375404910418
        },
        {
          id: 183,
          name: "Parcs Nationaux de France",
          address: "1037 rue Jean Francois Breton 34090 MONTPELLIER",
          phone: "",
          lon: 3.87871736858804,
          lat: 43.6474178784164
        },
        {
          id: 187,
          name: "Cirad",
          address: "Avenue agropolis 34398 MONTPELLIER",
          phone: "",
          lon: 3.868430789818,
          lat: 43.6504884118088
        },
        {
          id: 188,
          name: "Mornay",
          address: "26 allee jules milhau 34965 MONTPELLIER",
          phone: "",
          lon: 3.88335468006384,
          lat: 43.6090204423773
        },
        {
          id: 189,
          name: "Boulodrome Bernard Gasset",
          address: "122 avenue Maurice Planes 34070 MONTPELLIER",
          phone: "",
          lon: 3.84329169898554,
          lat: 43.5967806501323
        }
      ]
    });
    const expectedResult = "Amphitheatre d'O";
    expect(defibrillators(testInput)).to.equals(
      expectedResult,
      JSON.stringify(testInput)
    );
  });
});
