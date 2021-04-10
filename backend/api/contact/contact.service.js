
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByContactname,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('contacts')
        var contacts = await collection.find(criteria).toArray()
       
        return contacts
    } catch (err) {
        logger.error('cannot find contacts', err)
        throw err
    }
}

async function getById(contactId) {
    try {
        const collection = await dbService.getCollection('contacts')
        const contact = await collection.findOne({ '_id': ObjectId(contactId)})
        return contact
    } catch (err) {
        logger.error(`while finding contact ${contactId}`, err)
        throw err
    }
}
async function getByContactname(contactname) {
    try {
        const collection = await dbService.getCollection('contacts')
        const contact = await collection.findOne({ contactname })
        return contact
    } catch (err) {
        logger.error(`while finding contact ${contactname}`, err)
        throw err
    }
}

async function remove(contactId) {
    try {
        const collection = await dbService.getCollection('contacts')
        await collection.deleteOne({ '_id': ObjectId(contactId) })
    } catch (err) {
        logger.error(`cannot remove contact ${contactId}`, err)
        throw err
    }
}

async function update(contact) {
    try {
        // peek only updatable fields!
        const contactToSave = {
            _id: contact._id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        }
        const collection = await dbService.getCollection('contacts')
        await collection.updateOne({ '_id': ObjectId(contactToSave._id) }, { $set: contactToSave })
        return contactToSave;
    } catch (err) {
        logger.error(`cannot update contact ${contact._id}`, err)
        throw err
    }
}

async function add(contact) {
    try {
        // peek only updatable fields!
        const contactToAdd = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        }
        const collection = await dbService.getCollection('contacts')
        await collection.insertOne(contactToAdd)
        return contactToAdd
    } catch (err) {
        logger.error('cannot insert contact', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.term) {
        const txtCriteria = { $regex: filterBy.term, $options: 'i' }
        criteria.$or = [
            {
                name: txtCriteria
            },
            {
                phone: txtCriteria
            }
        ]
    }
    // if (filterBy.minBalance) {
    //     criteria.balance = { $gte: filterBy.minBalance }
    // }
    return criteria
}



