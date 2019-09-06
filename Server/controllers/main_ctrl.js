'use strict';

module.exports = () => {
    return {
        routeSimpleResponse: (req, res) => {
            res.status(200).send({ name: "Octávio Duarte" });
        }
    };
};