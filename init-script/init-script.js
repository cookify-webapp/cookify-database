db.createUser({
  user: "cookifyAdmin",
  pwd: "GnNZLE4kJnBjfLnU",
  roles: [
    {
      role: "readWrite",
      db: "cookify",
    },
  ],
});

db.createCollection("accounts", { capped: false, collation: { locale: "th" } });
db.createCollection("comments", { capped: false, collation: { locale: "th" } });
db.createCollection("ingredients", {
  capped: false,
  collation: { locale: "th" },
});
db.createCollection("ratings", { capped: false, collation: { locale: "th" } });
db.createCollection("recipes", { capped: false, collation: { locale: "th" } });
db.createCollection("snapshots", {
  capped: false,
  collation: { locale: "th" },
});
db.createCollection("units", { capped: false, collation: { locale: "th" } });
db.createCollection("notifications", {
  capped: false,
  collation: { locale: "th" },
});
db.createCollection("ingredienttypes", {
  capped: false,
  collation: { locale: "th" },
});
db.createCollection("recipetypes", {
  capped: false,
  collation: { locale: "th" },
});
db.createCollection("cookingmethods", {
  capped: false,
  collation: { locale: "th" },
});

db.accounts.insertMany([
  {
    _id: ObjectId("625ec5c4443a3c4c0548045b"),
    username: "AdminAcc",
    email: "admin@mail.com",
    password:
      "%242a%2410%24gGS9fWataoC1Y6dmJ1LhIu%2Fy7jhaBFcJ6KamS4%2Fdmm2RfFgjeF68G",
    accountType: "admin",
    image: null,
    following: [],
    allergy: [],
    bookmark: [],
  },
  {
    _id: ObjectId("625ec5d04605c1d046c0c2ae"),
    username: "MeLoLonJiNo",
    email: "MeLo@mail.com",
    password:
      "%242a%2410%24Fsuz5GPfl01MaBO5DKIvfux.mYZYck3RZUBLsiGfkPAdjE5DRMaAG",
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
    password:
      "%242a%2410%24FYdrNx.p6wT6l57Npc6KVei4vX7yUbQzhKrT5gqyBidAvtHl6hjl6",
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
    password:
      "%242a%2410%24VmXUPVfrjXzN.alFwp4QAeBVgzVXW87Cg9A4d8O8ETYyhl4vmSesi",
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
    password:
      "%242a%2410%24JwzDLbjV%2FEl9W1B2EzSIbe4BhXGLKINnqnkM5DKbmbkzzzvuIRla2",
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
    password:
      "%242a%2410%244jKsXAfgDT%2FtT8wCDg9dG.2ODE2.dfm9jZcPKIKrKg0v4Z.7gx4Zm",
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
    password:
      "%242a%2410%244Czx9ZMf5j0Uw%2FmjlFNkJuPB1CmZHWF%2Fy3V0YQTOPzKefnV9J88r.",
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
    password:
      "%242a%2410%24wUL.Ug40ZiAM4Zr17lBhS.r8QrXI9lY5hn5tdArADjhywpHSfqfza",
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
    password:
      "%242a%2410%24afBY6rkP%2FIRTc3hPn7xs3urG62kO0rXlao.jCaRSCIyTo9e7eC022",
    accountType: "user",
    image: null,
    following: [ObjectId("625ec5eae6d06752d1b7a421")],
    allergy: [],
    bookmark: [],
  },
]);

db.ingredienttypes.insertMany([
  {
    _id: ObjectId("6264262a2242c09a90109b52"),
    name: "เนื้อสัตว์",
  },
  {
    _id: ObjectId("62642635ccd41f53ec5c09b9"),
    name: "ปลาและอาหารทะเล",
  },
  {
    _id: ObjectId("6264263d50eda11fe1a2b8f4"),
    name: "ผักและผลไม้",
  },
  {
    _id: ObjectId("6264264220403a1e86e3ab48"),
    name: "อาหารแปรรูป",
  },
  {
    _id: ObjectId("62642648a293bd52a72832e0"),
    name: "ไข่และผลิตภัณฑ์จากนม",
  },
  {
    _id: ObjectId("6264264d1e6c93c6d70d63cc"),
    name: "ผลิตภัณฑ์จากแป้ง",
  },
  {
    _id: ObjectId("6264265286380372ce46e81b"),
    name: "ข้าว ถั่วและธัญพืช",
  },
  {
    _id: ObjectId("62642656b7f4830a426bf24f"),
    name: "เครื่องปรุงอาหาร",
  },
]);
