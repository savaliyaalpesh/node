var usermodel = require('../model/usermodel')

exports.insert = async (req, res) => {
    var data = await usermodel.create(req.body)

    res.status(200).json({
        status: data
    })
}

exports.get_data = async (req, res) => {

    var limit = 20
    var total_record = await usermodel.find().count(query)
    var total_page = Math.ceil(total_record / limit);
    var page_no = req.query.page_no;
    var email = req.query.email
    var query= email?{email}:req.body

    if(page_no == undefined){
        page_no = 1
    }

    var start  = (page_no - 1) * limit
    var data = await usermodel.find(query).limit(limit).skip(start) 

    res.status(200).json({
        status: data,
    })
}

exports.update_data = async (req, res) => {
    var id = req.params.id
    var data = await usermodel.findByIdAndUpdate(id, req.body)

    res.status(200).json({
        status: "data update"
    })
}

exports.delete_data = async (req, res) => {
    var id = req.params.id
    var data = await usermodel.findByIdAndDelete(id)

    res.status(200).json({
        status: "data delete"
    })
}

exports.get_single = async (req, res) => {
    var id = req.params.id
    var data = await usermodel.findById(id)

    res.status(200).json({
        status: data
    })
}

exports.get_column = async (req, res) => {

    var data = await usermodel.find({ "email": req.body.email })

    res.status(200).json({
        status: data
    })
}


