
function verifyAccessToken (req,res,next){
    const token=req.headers['authorization'];
    if (!token){
        res.status(400).send({message:'token not found '})
    }
    const accessToken=token.split('')[1];
    jwt.verify(accessToken,process.env.JWT_KEY,(err)=>{
        if(err){
            res.send('Invalid Access Token or Token is  expired');
        }
        else{
           
            res.send({
             message: 'Resources are fetched successfully'
            })
        }})
        next()
}