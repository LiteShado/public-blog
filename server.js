
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const models = require('./models')

const getAllPosts = async (req,res) => {
    try {
    let post = await models.publicblog.findAll()

    res.json({post})
    } catch (error) {
    res.json({error})
    }
}

const getOnePost = async (req,res) => {
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

const getAllComments = async (req,res) => {
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


const createPost = async (req,res) => {
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

const updatePost = async (req,res) => {
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

const deletePost = async(req,res) => {
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

app.get('/publicblog', getAllPosts)
app.get('/publicblog/:id', getOnePost)
app.get('/publicblogcomments/:id', getAllComments)
app.post('/publicblog',createPost)
app.put('/publicblog/:id',updatePost)
app.delete('/publicblog/:id', deletePost)
