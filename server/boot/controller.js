module.exports = function(app) {
	var router = app.loopback.Router();

	var Tipo = app.models.Tipo;
	var Sabores = app.models.Sabores;

	router.get('/',function(req,res){
		Tipo.find({},function(err,objResult){
			if(err) return res.sendStatus(404);
			console.log(objResult);
			res.render('index',{
				c:objResult
			});
		});
	});

	router.get('/sabores',function(req,res){
		var idTipo = req.query.idTipo;
		console.log(idTipo);
		Sabores.find({where: {tipoId:idTipo}},function(err,objResult){
			if(err) return res.sendStatus(404);
			console.log(objResult);
			res.render('sabores',{
				sabores:objResult
			});
		});
	});

	app.use(router);


}