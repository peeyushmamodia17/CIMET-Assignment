const {post} = require("../../middleware/axios");
const apiPath = require("../../constant/index");

const generateToken = async (req, res) => {
    try {
        const response = await post(`${process.env.apiUrl}${apiPath.GENERATE_TOKEN}`);
        if (response.status === 200 && response.data.status) {
            const token = response.data.data.token;
            const dataObj = {
                session_id: process.env.session_id
            }
            const planList = await post(`${process.env.apiUrl}${apiPath.PLAN_LIST}`, dataObj, token);
            if (planList.status === 200 && response.data.status) {
                return res.status(200).json(planList.data);
            } else {
                return res.status(400).json({message: "Error!"});
            }
        } else {
            return res.status(400).json({message: "Error!"});
        }
    } catch (err) {
        return res.status(400).json({message: "Error!"})
    }
}

module.exports = {
    generateToken
}