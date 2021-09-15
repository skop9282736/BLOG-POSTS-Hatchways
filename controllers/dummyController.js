class DummyController {
    constructor(app, connection) {
        this.app = app;
        this.connection = connection;
        this.ping();
    }

    /*
        Route: /api/ping
        Method: GET
    */
    ping() {
        this.app.get('/api/ping', function(req, res) {
            return res
                    .status(200)
                    .send({
                        "success": true
                    })
        })
    }

}

module.exports = (app) => { return new DummyController(app);}