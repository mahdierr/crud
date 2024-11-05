db.createCollection("contactlist")
db.contactlist.insertMany([
    { "nom": "Ben", "prenom": "Moris", "email": "ben@gmail.com", "age": 26 },
    { "nom": "Kefi", "prenom": "Seif", "email": "kefi@gmail.com", "age": 15 },
    { "nom": "Emilie", "prenom": "Brouge", "email": "emilie.b@gmail.com", "age": 40 },
    { "nom": "Alex", "prenom": "Brown", "age": 4 },
    { "nom": "Denzel", "prenom": "Washington", "age": 3 }
])

db.contactlist.find()

db.contactlist.find({ "prenom": "Seif" })
db.contactlist.find({ "_id": ObjectId("ID_du_contact") })
db.contactlist.find({ "age": { $gt: 18 } })

db.contactlist.find({
    "age": { $gt: 18 },
    "nom": /ah/i
})

db.contactlist.updateOne(
    { "prenom": "Seif" },
    { $set: { "prenom": "Anis" } }
)

db.contactlist.deleteMany({ "age": { $lt: 5 } })

db.contactlist.find()

db.createCollection("contactlist")

db.contactlist.insertMany([...])

db.contactlist.find()

db.contactlist.find({ "_id": ObjectId("ID_du_contact") })

db.contactlist.find({ "age": { $gt: 18 } })

db.contactlist.find({ "age": { $gt: 18 }, "nom": /ah/i })

db.contactlist.updateOne({ "prenom": "Seif" }, { $set: { "prenom": "Anis" } })

db.contactlist.deleteMany({ "age": { $lt: 5 } })

db.contactlist.find()