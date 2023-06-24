import { atom } from 'recoil'

export const teamDataState = atom({
    key: 'teamDataState',
    default: {
        csk: {
            championships: [2010, 2011, 2018, 2021],
            name: "Chennai Super Kings",
            teamCaptain: "MS Dhoni",
            teamCoach: "Stephen Fleming",
            teamCode: "csk",
            teamLogo: "https://i.ibb.co/v1CsBPS/csk-ccfd44d6.png",
            themeEndColor: "#DFA925",
            themeStartColor: "#F0D513"
        },
        dc: {
            championships: [],
            name: "Delhi Capitals",
            teamCaptain: "Rishabh Pant",
            teamCoach: "Ricky Ponting",
            teamCode: "dc",
            teamLogo: "https://i.ibb.co/5xFBGrN/dc-451d6286.png",
            themeEndColor: "#B9241A",
            themeStartColor: "#DCB52F"
        },
        kkr: {
            championships: [2012, 2014],
            name: "Kolkata Knight Riders",
            teamCaptain: "Eoin Morgan",
            teamCoach: "Brendon McCullum",
            teamCode: "kkr",
            teamLogo: "https://i.ibb.co/bKJcZxq/kkr-1b584773.png",
            themeEndColor: "#301857",
            themeStartColor: "#6F45AC"
        },
        kxp: {
            championships: [],
            name: "Kings Eleven Punjab",
            teamCaptain: "KL Rahul",
            teamCoach: "Anil Kumble",
            teamCode: "kxp",
            teamLogo: "https://i.ibb.co/2qfSxv2/kxp-bcaa916c.png",
            themeEndColor: "#F64749",
            themeStartColor: "#B31619"
        },
        mi: {
            championships: [2013, 2015, 2017, 2019, 2020],
            name: "Mumbai Indians",
            teamCaptain: "Rohit Sharma",
            teamCoach: "Mahela Jayawardene",
            teamCode: "mi",
            teamLogo: "https://i.ibb.co/fYGwnkk/mi-7134fbda.png",
            themeEndColor: "#0764AB",
            themeStartColor: "#10D6D5"
        },
        rcb: {
            championships: [],
            name: "Royal Challengers Bangalore",
            teamCaptain: "Virat Kohli",
            teamCoach: "Simon Katich",
            teamCode: "rcb",
            teamLogo: "https://i.ibb.co/bbVmHcF/rcb-52a7d9ab.png",
            themeEndColor: "#B98208",
            themeStartColor: "#E5BF65"
        },
        rr: {
            championships: [2008],
            name: "Rajasthan Royals",
            teamCaptain: "Sanju Samson",
            teamCoach: "Andrew McDonald",
            teamCode: "rr",
            teamLogo: "https://i.ibb.co/kM5w28w/rr-3078246d.png",
            themeEndColor: "#163B97",
            themeStartColor: "#315DC9"
        },
        srh: {
            championships: [2016],
            name: "Sunrisers Hyderabad",
            teamCaptain: "Kane Williamson",
            teamCoach: "Trevor Bayliss",
            teamCode: "srh",
            teamLogo: "https://i.ibb.co/3Sr0Gs6/srh-deabb809.png",
            themeEndColor: "#F37107",
            themeStartColor: "#EFBC44"
        }
    }
    
})