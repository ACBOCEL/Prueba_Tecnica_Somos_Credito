const Sucursal = require('../../models/Sucursal');

module.exports = async (req, res) => {
    try{
        const sucursal = await Sucursal.findByPk(req.params.id);
        if(!sucursal){
            return res.status(404).json({ error: 'Sucursal no encontrada'});
        }
        res.json(sucursal);
    }catch (error) {
        res.status(500).json({ error: 'Error al buscar la Sucursal'})
    }
}