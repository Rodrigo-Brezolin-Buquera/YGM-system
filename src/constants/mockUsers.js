export const mockUsers = [
    {
        id: 123,
        name: "Rodrigo Teste",
        email: "rodrigo@mg.com",
        type: "semestral",
        frequency: "2x",
        planStarted: "20/03/2021",
        planEnds: "20/09/2021",
        totalClasses: 24,
        avaliableClasses: 5,
        status: true,
        checkins: [
            {
                id: 434143142,
                name: "hatha",
                date: "27/05/2021",
                day: "quarta",
                time: "19h",
                teacher: "Louize"
            },
            {
                id: 32425323,
                name: "hatha",
                date: "27/09/2021",
                day: "quarta",
                time: "19h",
                teacher: "Louize"
            },
            {
                id: 654356456,
                name: "hatha",
                date: "20/05/2021",
                day: "sábado",
                time: "8h",
                teacher: "Louize"
            }
        ],
        closedPLans: [ {
            id: 32124124,
            type: "semestral",
            frequency: "3x",
            planEnds: "20/08/2020",
        },
        {
            id: 321241243516511,
            type: "mensal",
            frequency: "1x",
            planEnds: "20/06/2020",
        }]

    },
    {
        id: 12123,
        name: "Marcos Teste",
        email: "marco@mg.com",
        type: "mensal",
        frequency: "1x",
        planStarted: "10/05/2021",
        planEnds: "10/06/2021",
        totalClasses: 4,
        avaliableClasses: 0,
        status: false,
        checkins: [],
        closedPLans: [
            {
                type: "semestral",
                frequency: "3x",
                planStarted: "20/08/2020",
            }
        ]
    },
]