const Sucursal = require('../../models/Sucursal');

module.exports = async (req, res) =>{
    try {
        const sucursal = await Sucursal.findByPk(req.params.id);
        if(!sucursal) {
            return res.status(404).json({ error: 'Poema no econtrado'});
        }
        await sucursal.destroy();
        res.json({ message: 'Sucursal eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el Poema'});
    }
};