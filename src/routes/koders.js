
const express = require('express')
const koder = require('../usecases/koder')

const router = express.Router()

// GET /koders -> getAll()
router.get('/', async (request, response) => {
  try {
    const koders = await koder.getAll()
    response.json({
      success: true,
      message: 'all koders',
      data: {
        koders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

// POST /koders
// Objetivo: Crear un koder

// obtener datos del koder de request.body
// pasar la data al caso de uso koder.create
//

router.post('/', async (request, response) => {
  try {
    const newKoder = await koder.create(request.body)
    response.json({
      success: true,
      message: 'Koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const koderFound = await koder.getById(id)

    response.json({
      success: true,
      message: 'koder found',
      data: {
        koder: koderFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const deletedKoder = await koder.deleteById(id)
    response.json({
      success: true,
      message: 'Koder deleted',
      data: {
        koder: deletedKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderPatched = await koder.updateById(id, request.body)
    response.json({
      success: true,
      message: 'koder updated',
      data: {
        koder: koderPatched
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
