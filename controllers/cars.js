const cars = require('../models/car');

const home =  (req, res) => {
    res.render('index.ejs');
};

const newOne = async (req, res, next) => {
    res.render('cars/new.ejs');
};

const create = async (req, res, next) => {
    await cars.create(req.body);
    res.redirect('/cars'); // I didn't get it right here
};

const index = async (req, res) => {
    const allCars = await cars.find({});
    res.render('cars/index.ejs',{cars: allCars});
};

const show = async (req, res, next) => {
    const foundCar = await cars.findById(req.params.id);
    res.render('cars/show.ejs',{car: foundCar});
};

const destroy = async (req, res , next) => {
    await cars.findByIdAndDelete(req.params.id);
    res.redirect('/cars');
};

const edit = async (req, res , next ) => {
    const editCar = await cars.findById(req.params.id);
    res.render('cars/edit.ejs',{editCar});
};

const update = async (req, res, next) => {
    await cars.findByIdAndUpdate(req.params.id, req.body);

    res.redirect(`/cars/${req.params.id}`);
}

module.exports = {home,new: newOne,create,index,show,destroy,edit,update};