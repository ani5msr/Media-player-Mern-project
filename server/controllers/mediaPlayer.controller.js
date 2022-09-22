import mongoose from 'mongoose'
let gridfs = null
mongoose.connection.on('connected', () => {
    gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db)
})
const create = (req, res) => {
    let newform = new formidable.IncomingForm()
    newform.keepExtensions = true
    newform.parse(req, async (error, fields, files) => {
        if (error) {
          return res.status(400).json({
            error_message: "Video could not be uploaded"
          })
        }
        let newMedia = new Media(fields)
        newMedia.postedBy= req.profile
        if(files.video){
          let writestream = gridfs.openUploadStream(newMedia._id, {
            contentType: files.video.type || 'binary/octet-stream'})
          fs.createReadStream(files.video.path).pipe(writestream)
        }
        try {
          let result = await newMedia.save()
          res.status(200).json(result)
        }
        catch (error){
            return res.status(400).json({
              error_message: errorHandler.getErrorMessage(error)
            })
        }
      })
  }