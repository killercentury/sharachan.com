exports.index = function(req, res){
  res.render('index', { title: 'Shara Chan' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About Me' });
};
