class NewsController{

    //[GET] /news
    index(req,res){
          res.render('news');  
    }


    show(req,res){
          res.render('here');  
    }


}

module.exports = new NewsController;