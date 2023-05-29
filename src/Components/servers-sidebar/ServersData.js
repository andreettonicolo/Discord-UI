const ServersData = [
  {
    id: 0,
    server_name: "Messaggi diretti",
    notifiche: 3,
    img: "https://cdn.discordapp.com/embed/avatars/0.png",
    members: [],
    channels: [],
    roles: [],
  },
  {
    id: 1,
    server_name: "Il mio server Discord",
    notifiche: 3,
    img: "https://cdn.discordapp.com/embed/avatars/1.png",
    members: [
      {
        username: "Alice",
        discriminator: "1234",
        status: "online",
        is_bot: false,
      },
      {
        username: "Bob",
        discriminator: "5678",
        status: "idle",
        is_bot: true,
      },
      {
        username: "Charlie",
        discriminator: "9012",
        status: "dnd",
        is_bot: false,
      },
    ],
    channels: [
      {
        name: "generale1",
        type: "text",
        messages: [
          {
            author: "User1",

            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Ciao a tutti, come state oggi?",
            timestamp: "2022-01-01 10:00:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "Ciao User1, sto bene grazie! E tu?",
            timestamp: "2022-01-01 10:01:00",
          },
          {
            author: "User3",
            img: "https://cdn.discordapp.com/embed/avatars/3.png",
            content: "Ciao ragazzi, mi sono appena unito al server!",
            timestamp: "2022-01-01 10:02:00",
          },
          {
            author: "User1",
            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Benvenuto User3!",
            timestamp: "2022-01-01 10:03:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "User1, mi dai una mano con questo problema?",
            timestamp: "2022-01-01 10:05:00",
          },
          {
            author: "User1",
            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Certo, dimmi di che si tratta",
            timestamp: "2022-01-01 10:06:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "Grazie mille, ho problemi con l'audio su Discord",
            timestamp: "2022-01-01 10:07:00",
          },
          {
            author: "User3",
            img: "https://cdn.discordapp.com/embed/avatars/3.png",
            content:
              "Anch'io ho avuto lo stesso problema, User2! Ti posso aiutare io?",
            timestamp: "2022-01-01 10:08:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "Sì, per favore User3!",
            timestamp: "2022-01-01 10:10:00",
          },
          {
            author: "User1",
            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Grazie mille User3!",
            timestamp: "2022-01-01 10:12:00",
          },
        ],
      },
      {
        name: "voce1",
        type: "voice",
        topic: "",
        members_only: true,
      },
    ],
    roles: [
      {
        name: "amministratore",
        permissions: ["manage_roles", "ban_members"],
      },
      {
        name: "utente",
        permissions: [],
      },
    ],
  },
  {
    id: 2,
    server_name: "Secondo Discord",
    notifiche: 3,
    img: "https://cdn.discordapp.com/embed/avatars/2.png",
    members: [
      {
        username: "Alice",
        discriminator: "1234",
        status: "online",
        is_bot: false,
      },
      {
        username: "Bob",
        discriminator: "5678",
        status: "idle",
        is_bot: true,
      },
      {
        username: "Charlie",
        discriminator: "9012",
        status: "dnd",
        is_bot: false,
      },
    ],
    channels: [
      {
        name: "generale",
        type: "text",
        topic: "Discussione generale sul server",
        members_only: false,
        messages : [
          {
            author: "User1",
            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Ciao a tutti, sono nuovo qui!",
            timestamp: "2022-02-01 09:00:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "Benvenuto User1!",
            timestamp: "2022-02-01 09:01:00",
          },
          {
            author: "User3",
            img: "https://cdn.discordapp.com/embed/avatars/3.png",
            content: "Ciao ragazzi, come state?",
            timestamp: "2022-02-01 09:02:00",
          },
          {
            author: "User1",
            img: "https://cdn.discordapp.com/embed/avatars/2.png",
            content: "Sto bene, grazie! E tu?",
            timestamp: "2022-02-01 09:03:00",
          },
          {
            author: "User2",
            img: "https://cdn.discordapp.com/embed/avatars/5.png",
            content: "Anch'io sto bene, grazie!",
            timestamp: "2022-02-01 09:04:00",
          },
          {
            author: "User3",
            img: "https://cdn.discordapp.com/embed/avatars/3.png",
            content: "Io sto abbastanza bene, grazie!",
            timestamp: "2022-02-01 09:05:00",
          },
        ]
      },
      {
        name: "voce",
        type: "voice",
        topic: "",
        members_only: true,
      },
      {
        name: "testoAdmin",
        type: "voice",
        topic: "",
        members_only: true,
      },
    ],
    roles: [
      {
        name: "amministratore",
        permissions: ["manage_roles", "ban_members"],
      },
      {
        name: "utente",
        permissions: [],
      },
    ],
  },
  {
    id: 3,
    server_name: "Terzo Discord",
    notifiche: 3,
    img: "https://cdn.discordapp.com/embed/avatars/3.png",
    members: [
      {
        username: "Alice",
        discriminator: "1234",
        status: "online",
        is_bot: false,
      },
      {
        username: "Bob",
        discriminator: "5678",
        status: "idle",
        is_bot: true,
      },
      {
        username: "Charlie",
        discriminator: "9012",
        status: "dnd",
        is_bot: false,
      },
    ],
    channels: [
      {
        name: "generale",
        type: "text",
        topic: "Discussione generale sul server",
        members_only: false,
      },
      {
        name: "voce",
        type: "voice",
        topic: "",
        members_only: true,
      },
    ],
    roles: [
      {
        name: "amministratore",
        permissions: ["manage_roles", "ban_members"],
      },
      {
        name: "utente",
        permissions: [],
      },
    ],
  },
  {
    id: 4,
    server_name: "Quarto Discord",
    notifiche: 4,
    img: "https://cdn.discordapp.com/embed/avatars/4.png",
    members: [
      {
        username: "Alice",
        discriminator: "1234",
        status: "online",
        is_bot: false,
      },
      {
        username: "Bob",
        discriminator: "5678",
        status: "idle",
        is_bot: true,
      },
      {
        username: "Charlie",
        discriminator: "9012",
        status: "dnd",
        is_bot: false,
      },
    ],
    channels: [
      {
        name: "generale",
        type: "text",
        topic: "Discussione generale sul server",
        members_only: false,
      },
      {
        name: "voce",
        type: "voice",
        topic: "",
        members_only: true,
      },
    ],
    roles: [
      {
        name: "amministratore",
        permissions: ["manage_roles", "ban_members"],
      },
      {
        name: "utente",
        permissions: [],
      },
    ],
  },
  {
    id: 5,
    server_name: "Quinto Discord",
    notifiche: 5,
    img: "https://cdn.discordapp.com/embed/avatars/5.png",
    members: [
      {
        username: "Alice",
        discriminator: "1234",
        status: "online",
        is_bot: false,
      },
      {
        username: "Bob",
        discriminator: "5678",
        status: "idle",
        is_bot: true,
      },
      {
        username: "Charlie",
        discriminator: "9012",
        status: "dnd",
        is_bot: false,
      },
    ],
    channels: [
      {
        name: "generale",
        type: "text",
        topic: "Discussione generale sul server",
        members_only: false,
      },
      {
        name: "voce",
        type: "voice",
        topic: "",
        members_only: true,
      },
    ],
    roles: [
      {
        name: "amministratore",
        permissions: ["manage_roles", "ban_members"],
      },
      {
        name: "utente",
        permissions: [],
      },
    ],
  },
];

export default ServersData;
