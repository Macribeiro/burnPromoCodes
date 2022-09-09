
db.promotionalCode.updateOne({_id: 0001}, {$set: {code: 12345, participantIdentifier: 40024867888}}),
db.promotionalCode.updateOne({_id: 0002}, {$set: {code: 54321, participantIdentifier: 40024867899}}),
db.promotionalCode.updateOne({_id: 0003}, {$set: {code: 12354, participantIdentifier: 40024867888}}),
db.promotionalCode.updateOne({_id: 0004}, {$set: {code: 67890, participantIdentifier: 40024867888}})