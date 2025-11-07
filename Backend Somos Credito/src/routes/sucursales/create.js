const Sucursal = require('../../models/Sucursal');

module.exports = async (req, res) => {
    try {
        const nuevaSucursal = await Sucursal.create(req.body);
        res.status(201).json(nuevaSucursal);
    }   catch (error) {
        res.status(500).json({error: 'Error al crear la nueva sucursal'});
    }
};