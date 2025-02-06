const organizationRepo = require("../repositories/organization.repository")

const createOrg = async (name) => {

    if (!name?.length)//empty, undefined, null
    {
        throw new Error("Faulty Payload")
    }
    const result = await organizationRepo.create(name)
    return result.id;
}

module.exports = {
    createOrg
}