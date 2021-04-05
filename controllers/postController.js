const models = required('../models')

const postController = {}



postController.getAllPosts = async (req,res) => {
    try {
    let post = await models.publicblog.findAll()

    res.json({post})
    } catch (error) {
    res.json({error})
    }
}

postController.getOnePost = async (req,res) => {
    try {
        let post = await models.publicblog.findOne({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({error})
    }
}

postController.getAllComments = async (req,res) => {
    try {
        let comment = await models.publicblogcomments.findOne({
            where: {
                id: req.params.id
            }
        })
            res.json({comment})
    } catch (error) {
            res.json({error})
    }
res.json({post})
}


postController.createPost = async (req,res) => {
    try {
        let newPost = await models.publicblog.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json({createPost})
    } catch (error) {
        res.json({error})
    }
}

app.get('/', (req,res) => {
    res.send('hello')
})

postController.updatePost = async (req,res) => {
    try {
        let updates = req.body
        let postUpdate = await models.publicblog.findOne({
            where:{
                id: req.params.id
            }
        })
        let final = await postUpdate.update(updates)
        res.json({final})

    } catch (error) {
        res.json({error})
    }
}


postController.delete = async (req,res) => {
    try {
        let deleted = await models.publicblog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({deleted})
    } catch (error) {
        res.json({error})
    }
}
