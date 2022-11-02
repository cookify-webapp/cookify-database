db.createUser({ user: "cookifyAdmin", pwd: "GnNZLE4kJnBjfLnU", roles: [ { role: "readWrite", db: "cookify" } ] });

db.createCollection("accounts", { capped: false, collation: { locale: "th" } });
db.createCollection("comments", { capped: false, collation: { locale: "th" } });
db.createCollection("ingredients", { capped: false, collation: { locale: "th" } });
db.createCollection("recipes", { capped: false, collation: { locale: "th" } });
db.createCollection("snapshots", { capped: false, collation: { locale: "th" } });
db.createCollection("units", { capped: false, collation: { locale: "th" } });
db.createCollection("notifications", { capped: false, collation: { locale: "th" } });
db.createCollection("ingredienttypes", { capped: false, collation: { locale: "th" } });
db.createCollection("complaints", { capped: false, collation: { locale: "th" } });
db.createCollection("cookingmethods", { capped: false, collation: { locale: "th" } });

db.ingredienttypes.insertMany([
  { _id: ObjectId("6264262a2242c09a90109b52"), name: "เนื้อสัตว์" },
  { _id: ObjectId("62642635ccd41f53ec5c09b9"), name: "ปลาและอาหารทะเล" },
  { _id: ObjectId("6264263d50eda11fe1a2b8f4"), name: "ผักและผลไม้" },
  { _id: ObjectId("6264264220403a1e86e3ab48"), name: "อาหารแปรรูป" },
  { _id: ObjectId("62642648a293bd52a72832e0"), name: "ไข่และผลิตภัณฑ์จากนม" },
  { _id: ObjectId("6264264d1e6c93c6d70d63cc"), name: "ผลิตภัณฑ์จากแป้ง" },
  { _id: ObjectId("6264265286380372ce46e81b"), name: "ข้าว ถั่วและธัญพืช" },
  { _id: ObjectId("62642656b7f4830a426bf24f"), name: "เครื่องปรุงอาหาร" },
]);

db.cookingmethods.insertMany([
  { _id: ObjectId("626c3a060254ba5cd96b50c2"), name: "อบ" },
  { _id: ObjectId("626c3a0a6b6fe9a8ca46dda8"), name: "ต้ม" },
  { _id: ObjectId("626c3a0f172511708027e8eb"), name: "ทอด" },
  { _id: ObjectId("626c3a1353d281f1c46fb579"), name: "นึ่ง" },
  { _id: ObjectId("626c3a165369a031505e315f"), name: "รมควัน" },
  { _id: ObjectId("626c3a1beafd981b648d50c0"), name: "ตุ๋น" },
  { _id: ObjectId("626c3a1e54e487dfb0234d3b"), name: "ลวก" },
  { _id: ObjectId("626c3a23be5104f99fef68d7"), name: "ผัด" },
  { _id: ObjectId("626c3a279c65b3a236797b53"), name: "ปิ้งย่าง" },
  { _id: ObjectId("626c3a2a60c7637219acc40b"), name: "ยำดอง" },
  { _id: ObjectId("626c3a31d1e8e4d36604d408"), name: "แช่เย็น" },
]);

db.units.insertMany([
  { _id: ObjectId("626d479e5b4bfde4d83361b9"), name: "กรัม", queryKey: "gram" },
  { _id: ObjectId("626d47a2d94a44efb5ab6ab6"), name: "มิลลิลิตร", queryKey: "milliliter" },
  { _id: ObjectId("626d47a5f4bb34e56d6b05d6"), name: "ช้อนโต๊ะ", queryKey: "tablespoon" },
  { _id: ObjectId("626d47aabd8906bf6a69eaf9"), name: "ช้อนชา", queryKey: "teaspoon" },
  { _id: ObjectId("626d47ad32d751bb803bcf7d"), name: "ถ้วยตวง", queryKey: "cup" },
  { _id: ObjectId("626d47b08d3599ea80a665ad"), name: "ชิ้น", queryKey: "piece" },
  { _id: ObjectId("626d47b7554f62e715d6d05a"), name: "ลูก/ผล", queryKey: "whole" },
  { _id: ObjectId("626d47bb14dd0301cbd72d94"), name: "แผ่น", queryKey: "slice" },
  { _id: ObjectId("626d47bf130242373ba8d680"), name: "ฟอง", queryKey: "whole" },
  { _id: ObjectId("626d47c28f38cc8d65496d68"), name: "ตัว", queryKey: "whole" },
]);
