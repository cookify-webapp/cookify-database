db.createUser({
  user: "cookifyAdmin",
  pwd: "cookifyAdminPwd",
  roles: [
    {
      role: "readWrite",
      db: "cookify",
    },
  ],
});

db.createCollection("accounts", { capped: false, collation: { locale: 'th' } });

db.accounts.insertMany([
  {
    _id: ObjectId("625ec5c4443a3c4c0548045b"),
    username: "Admin",
    email: "admin@mail.com",
    password: "$2a$10$lUZahXaNO5xGFfpglkv1keJTg4BQjMfur8OK9pFYbvky2AEVPBI96",
    accountType: "admin",
    image: null,
    following: [],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5d04605c1d046c0c2ae"),
    username: "MeLo",
    email: "MeLo@mail.com",
    password: "$2a$10$6n8jntU92PFcmy5YlCQVaur0yTHpV6LfB3MXIpdBAzOz4EQTsqOMO",
    accountType: "admin",
    image: null,
    following: [],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5d9cb848302931ce63f"),
    username: "MrnDew",
    email: "napat.wtn@gmail.com",
    password: "$2a$10$yDAA1RSg/wBVYaPrNNsviuX3dgPPErE7QiIROb8lGSVfPS1i9VU3e",
    accountType: "admin",
    image: null,
    following: [],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5e49e3515d000d13c0a"),
    username: "ZeNosAyumu",
    email: "zenos.ayumu@gmail.com",
    password: "$2a$10$XrCbd2tJ7gsbvThnVyh5tOsZLyNOI98oRNKreVOorEknvMHI03bDK",
    accountType: "admin",
    image: null,
    following: [ObjectId("625ec5d04605c1d046c0c2ae")],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5eae6d06752d1b7a421"),
    username: "บาบาร่า อิคุโย๊",
    email: "Babara@mail.com",
    password: "$2a$10$2w1RrNPi0vKsetAW4zhSHevkP6H.wdaH1s/woORoghWgZ4to7HmZK",
    accountType: "user",
    image: null,
    following: [
      ObjectId("625ec5f48912ea1a6ba32daf"),
      ObjectId("625ec5fbb54656ff76ebcb95"),
    ],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5f48912ea1a6ba32daf"),
    username: "ไรเดน โชกุน",
    email: "Raiden.Ei@mail.com",
    password: "$2a$10$Up4toiO.6NYoOpp4KFSqpuIKV0EMjN/SgE3AQPHWQFaBP3P3b2bTS",
    accountType: "user",
    image: null,
    following: [],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5fbb54656ff76ebcb95"),
    username: "คุโจว ซาระ",
    email: "Kujou_Sara@mail.com",
    password: "$2a$10$lbhdcrjDamiUgtnLJTaGMepKm.7OipJr5VhR5czrypHnJq0yA.cTG",
    accountType: "user",
    image: null,
    following: [ObjectId("625ec5f48912ea1a6ba32daf")],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec6041834cec2508baa20"),
    username: "ขุนพล โกวโร่",
    email: "Gourou@mail.com",
    password: "$2a$10$V988fIjAyfQl6o3o2bWGgeYXIleaYvDVfobJ8yD9tMRCWbErvyjCa",
    accountType: "user",
    image: null,
    following: [
      ObjectId("625ec5d04605c1d046c0c2ae"),
      ObjectId("625ec5d9cb848302931ce63f"),
      ObjectId("625ec5e49e3515d000d13c0a"),
    ],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec60df2539145d5b99110"),
    username: "นักกวีขึ้เมา",
    email: "Venti@mail.com",
    password: "$2a$10$ujrlftVGDb4DUonCi.7V0uKM3bkom7xnS.D48J.IoOqmTH0y28Gmi",
    accountType: "user",
    image: null,
    following: [ObjectId("625ec5eae6d06752d1b7a421")],
    allergy: [],
    bookmark: [],
  },
]);
