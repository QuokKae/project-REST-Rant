const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/hannah-wei-ptLWrQH2wn8-unsplash.jpg'
    }]      
    res.render('places/index', { places })
})

module.exports = router