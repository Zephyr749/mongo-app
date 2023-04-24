const middleWare = (req,res,next) =>{
    console.log('mmiddleware');
    next()
}

export default middleWare