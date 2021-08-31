class NewsController {

    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Helo')
    }
}

module.exports = new NewsController;