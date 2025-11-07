const Sucursal = require('../../models/Sucursal');

module.exports = async(req, res) =>{
    try{
        const sucursal = await Sucursal.findAll();
        res.json(sucursal);
    }catch(error){
        res.status(500).json({error:'error al buscar Sucursales'});
    }
};