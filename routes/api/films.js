const router = require('express').Router();

const { Film } = require('../../db');
const { json } = require('sequelize');
const { route } = require('../api');

/**
 * index
 */
router.get('/', async (req, res) => {
    const film = await Film.findAll();
    res.json(film);
});

/**
 * Show
 */
router.get('/:id', async(req, res) => {

    const film = await Film.findByPk(2);
    console.log(req.params.id)
    res.json(film);
})


/**
 * update
 */
router.put('/:id', async(req, res) => {
    await Film.update(req.body, {
        where: {id: req.params.id}
    });
    res.json({success: 'se a actualizado'});
})

/**
 * Store
 */
router.post('/', async(req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
});

router.delete('/:id', async (req, res)=> {
    await Film.destroy({
        where: {id: req.params.id}
    });
    res.json({success: 'se a borrado la pelicula'});
})

module.exports = router;