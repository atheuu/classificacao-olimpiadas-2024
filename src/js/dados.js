// Dados reais dos países das Olimpíadas de 2024
const equipes = [
    {
        equipe: "Estados Unidos",
        abreviacao: "USA",
        ouro: 40,
        prata: 44,
        bronze: 42,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/USA.png"
    },
    {
        equipe: "China",
        abreviacao: "CHN",
        ouro: 40,
        prata: 27,
        bronze: 24,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CHN.png"
    },
    {
        equipe: "Japão",
        abreviacao: "JPN",
        ouro: 20,
        prata: 12,
        bronze: 13,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/JPN.png"
    },
    {
        equipe: "Austrália",
        abreviacao: "AUS",
        ouro: 18,
        prata: 19,
        bronze: 16,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/AUS.png"
    },
    {
        equipe: "França",
        abreviacao: "FRA",
        ouro: 16,
        prata: 26,
        bronze: 22,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/FRA.png"
    },
    {
        equipe: "Países Baixos",
        abreviacao: "NED",
        ouro: 15,
        prata: 7,
        bronze: 12,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/NED.png"
    },
    {
        equipe: "Grã-Bretanha",
        abreviacao: "GBR",
        ouro: 14,
        prata: 22,
        bronze: 29,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GBR.png"
    },
    {
        equipe: "Coréia do Sul",
        abreviacao: "KOR",
        ouro: 13,
        prata: 9,
        bronze: 10,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/KOR.png"
    },
    {
        equipe: "Itália",
        abreviacao: "ITA",
        ouro: 12,
        prata: 13,
        bronze: 15,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ITA.png"
    },
    {
        equipe: "Alemanha",
        abreviacao: "GER",
        ouro: 12,
        prata: 13,
        bronze: 8,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GER.png"
    },
    {
        equipe: "Nova Zelândia",
        abreviacao: "NZL",
        ouro: 10,
        prata: 7,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/NZL.png"
    },
    {
        equipe: "Canadá",
        abreviacao: "CAN",
        ouro: 9,
        prata: 7,
        bronze: 11,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CAN.png"
    },
    {
        equipe: "Uzbequistão",
        abreviacao: "UZB",
        ouro: 8,
        prata: 2,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/UZB.png"
    },
    {
        equipe: "Hungria",
        abreviacao: "HUN",
        ouro: 6,
        prata: 7,
        bronze: 6,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/HUN.png"
    },
    {
        equipe: "Espanha",
        abreviacao: "ESP",
        ouro: 5,
        prata: 4,
        bronze: 9,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ESP.png"
    },
    {
        equipe: "Suécia",
        abreviacao: "SWE",
        ouro: 4,
        prata: 4,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SWE.png"
    },
    {
        equipe: "Quênia",
        abreviacao: "KEN",
        ouro: 4,
        prata: 2,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/KEN.png"
    },
    {
        equipe: "Noruega",
        abreviacao: "NOR",
        ouro: 4,
        prata: 1,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/NOR.png"
    },
    {
        equipe: "Irlanda",
        abreviacao: "IRL",
        ouro: 4,
        prata: 0,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/IRL.png"
    },
    {
        equipe: "Brasil",
        abreviacao: "BRA",
        ouro: 3,
        prata: 7,
        bronze: 10,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/BRA.png"
    },    
    {
        equipe: "Irã",
        abreviacao: "IRI",
        ouro: 3,
        prata: 6,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/IRI.png"
    },
    {
        equipe: "Ucrânia",
        abreviacao: "UKR",
        ouro: 3,
        prata: 5,
        bronze: 4,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/UKR.png"
    },
    {
        equipe: "Romênia",
        abreviacao: "ROU",
        ouro: 3,
        prata: 4,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ROU.png"
    },
    {
        equipe: "Geórgia",
        abreviacao: "GEO",
        ouro: 3,
        prata: 3,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GEO.png"
    },
    {
        equipe: "Bélgica",
        abreviacao: "BEL",
        ouro: 3,
        prata: 1,
        bronze: 6,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/BEL.png"
    },
    {
        equipe: "Bulgária",
        abreviacao: "BUL",
        ouro: 3,
        prata: 1,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/BUL.png"
    },
    {
        equipe: "Sérvia",
        abreviacao: "SRB",
        ouro: 3,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SRB.png"
    },
    {
        equipe: "Tchéquia",
        abreviacao: "CZE",
        ouro: 3,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CZE.png"
    },
    {
        equipe: "Dinamarca",
        abreviacao: "DEN",
        ouro: 2,
        prata: 2,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/DEN.png"
    },
    {
        equipe: "Azerbaijão",
        abreviacao: "AZE",
        ouro: 2,
        prata: 2,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/AZE.png"
    },
    {
        equipe: "Croácia",
        abreviacao: "CRO",
        ouro: 2,
        prata: 2,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CRO.png"
    },
    {
        equipe: "Cuba",
        abreviacao: "CUB",
        ouro: 2,
        prata: 1,
        bronze: 6,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CUB.png"
    },
    {
        equipe: "Bahrein",
        abreviacao: "BRN",
        ouro: 2,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/BRN.png"
    },
    {
        equipe: "Eslovênia",
        abreviacao: "SLO",
        ouro: 2,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SLO.png"
    },
    {
        equipe: "Taipé Chinês",
        abreviacao: "TPE",
        ouro: 2,
        prata: 0,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/TPE.png"
    },
    {
        equipe: "Áustria",
        abreviacao: "AUT",
        ouro: 2,
        prata: 0,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/AUT.png"
    },
    {
        equipe: "Hong Kong",
        abreviacao: "HKG",
        ouro: 2,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/HKG.png"
    },
    {
        equipe: "Filipinas",
        abreviacao: "PHI",
        ouro: 2,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PHI.png"
    },
    {
        equipe: "Argélia",
        abreviacao: "ALG",
        ouro: 2,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ALG.png"
    },
    {
        equipe: "Indonésia",
        abreviacao: "INA",
        ouro: 2,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/INA.png"
    },    
    {
        equipe: "Israel",
        abreviacao: "ISR",
        ouro: 1,
        prata: 5,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ISR.png"
    },
    {
        equipe: "Polônia",
        abreviacao: "POL",
        ouro: 1,
        prata: 4,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/POL.png"
    },
    {
        equipe: "Cazaquistão",
        abreviacao: "KAZ",
        ouro: 1,
        prata: 3,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/KAZ.png"
    },
    {
        equipe: "Jamaica",
        abreviacao: "JAM",
        ouro: 1,
        prata: 3,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/JAM.png"
    },
    {
        equipe: "África do Sul",
        abreviacao: "RSA",
        ouro: 1,
        prata: 3,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/RSA.png"
    },
    {
        equipe: "Tailândia",
        abreviacao: "THA",
        ouro: 1,
        prata: 3,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/THA.png"
    },
    {
        equipe: "Etiópia",
        abreviacao: "ETH",
        ouro: 1,
        prata: 3,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ETH.png"
    },
    {
        equipe: "Suíça",
        abreviacao: "SUI",
        ouro: 1,
        prata: 2,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SUI.png"
    },
    {
        equipe: "Equador",
        abreviacao: "ECU",
        ouro: 1,
        prata: 2,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ECU.png"
    },
    {
        equipe: "Portugal",
        abreviacao: "POR",
        ouro: 1,
        prata: 2,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/POR.png"
    },
    {
        equipe: "Grécia",
        abreviacao: "GRE",
        ouro: 1,
        prata: 1,
        bronze: 6,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GRE.png"
    },
    {
        equipe: "Argentina",
        abreviacao: "ARG",
        ouro: 1,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ARG.png"
    },
    {
        equipe: "Egito",
        abreviacao: "EGY",
        ouro: 1,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/EGY.png"
    },
    {
        equipe: "Tunísia",
        abreviacao: "TUN",
        ouro: 1,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/TUN.png"
    },
    {
        equipe: "Botsuana",
        abreviacao: "BOT",
        ouro: 1,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/BOT.png"
    },
    {
        equipe: "Chile",
        abreviacao: "CHI",
        ouro: 1,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CHI.png"
    },
    {
        equipe: "Santa Lúcia",
        abreviacao: "LCA",
        ouro: 1,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/LCA.png"
    },
    {
        equipe: "Uganda",
        abreviacao: "UGA",
        ouro: 1,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/UGA.png"
    },
    {
        equipe: "República Dominicana",
        abreviacao: "DOM",
        ouro: 1,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/DOM.png"
    },
    {
        equipe: "Guatemala",
        abreviacao: "GUA",
        ouro: 1,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GUA.png"
    },    
    {
        equipe: "Marrocos",
        abreviacao: "MAR",
        ouro: 1,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/MAR.png"
    },
    {
        equipe: "Dominica",
        abreviacao: "DMA",
        ouro: 1,
        prata: 0,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/DMA.png"
    },
    {
        equipe: "Paquistão",
        abreviacao: "PAK",
        ouro: 1,
        prata: 0,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PAK.png"
    },
    {
        equipe: "Turquia",
        abreviacao: "TUR",
        ouro: 0,
        prata: 3,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/TUR.png"
    },
    {
        equipe: "México",
        abreviacao: "MEX",
        ouro: 0,
        prata: 3,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/MEX.png"
    },
    {
        equipe: "Armênia",
        abreviacao: "ARM",
        ouro: 0,
        prata: 3,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ARM.png"
    },
    {
        equipe: "Colômbia",
        abreviacao: "COL",
        ouro: 0,
        prata: 3,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/COL.png"
    },
    {
        equipe: "Quirguistão",
        abreviacao: "KGZ",
        ouro: 0,
        prata: 2,
        bronze: 4,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/KGZ.png"
    },
    {
        equipe: "Coreia do Norte",
        abreviacao: "PRK",
        ouro: 0,
        prata: 2,
        bronze: 4,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PRK.png"
    },
    {
        equipe: "Lituânia",
        abreviacao: "LTU",
        ouro: 0,
        prata: 2,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/LTU.png"
    },
    {
        equipe: "Índia",
        abreviacao: "IND",
        ouro: 0,
        prata: 1,
        bronze: 5,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/IND.png"
    },
    {
        equipe: "República da Maldávia",
        abreviacao: "MDA",
        ouro: 0,
        prata: 1,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/MDA.png"
    },
    {
        equipe: "Kosovo",
        abreviacao: "KOS",
        ouro: 0,
        prata: 1,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/KOS.png"
    },
    {
        equipe: "Chipre",
        abreviacao: "CYP",
        ouro: 0,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CYP.png"
    },
    {
        equipe: "Fiji",
        abreviacao: "FIJ",
        ouro: 0,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/FIJ.png"
    },
    {
        equipe: "Jordânia",
        abreviacao: "JOR",
        ouro: 0,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/JOR.png"
    },
    {
        equipe: "Mongólia",
        abreviacao: "MGL",
        ouro: 0,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/MGL.png"
    },
    {
        equipe: "Panamá",
        abreviacao: "PAN",
        ouro: 0,
        prata: 1,
        bronze: 0,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PAN.png"
    },
    {
        equipe: "Tajiquistão",
        abreviacao: "TJK",
        ouro: 0,
        prata: 0,
        bronze: 3,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/TJK.png"
    },
    {
        equipe: "Albânia",
        abreviacao: "ALB",
        ouro: 0,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ALB.png"
    },    
    {
        equipe: "Granada",
        abreviacao: "GRN",
        ouro: 0,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/GRN.png"
    },
    {
        equipe: "Malásia",
        abreviacao: "MAS",
        ouro: 0,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/MAS.png"
    },
    {
        equipe: "Porto Rico",
        abreviacao: "PUR",
        ouro: 0,
        prata: 0,
        bronze: 2,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PUR.png"
    },
    {
        equipe: "Costa do Marfim",
        abreviacao: "CIV",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CIV.png"
    },
    {
        equipe: "Cabo Verde",
        abreviacao: "CPV",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/CPV.png"
    },
    {
        equipe: "Equipe Olímpica de Refugiados",
        abreviacao: "EOR",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/EOR.png"
    },
    {
        equipe: "Peru",
        abreviacao: "PER",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/PER.png"
    },
    {
        equipe: "Catar",
        abreviacao: "QAT",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/QAT.png"
    },
    {
        equipe: "Singapura",
        abreviacao: "SGP",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SGP.png"
    },
    {
        equipe: "Eslováquia",
        abreviacao: "SVK",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/SVK.png"
    },
    {
        equipe: "Zâmbia",
        abreviacao: "ZAM",
        ouro: 0,
        prata: 0,
        bronze: 1,
        url: "https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/ZAM.png"
    },    
];