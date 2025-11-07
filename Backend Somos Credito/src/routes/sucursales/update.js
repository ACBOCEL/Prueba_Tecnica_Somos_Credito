const Sucursal = require('../../models/Sucursal')

module.exports = async (req, res) => {
    try{
    const sucursal = await Sucursal.findByPk(req.params.id);
        if(!sucursal) {
            return res.status(400).json({ error: 'Sucursal no econtrada'});
        }
        await sucursal.update(req.body);
        res.json(sucursal);
    }catch (error) {
        res.status(500).json({ error: 'error al actualizar la sucursal'})
    }
}