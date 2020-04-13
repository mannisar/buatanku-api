const multer = require('multer')
const path = require('path')
const response = require('./response')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb({ code: 'EXTENSION_FILE' }, false)
  }
}

const image = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024
  }
})

const avatar = image.single('avatar')

const uploadSingleImage = (req, res, next) => {
  avatar(req, res, err => {
    if (err instanceof multer.MulterError) {
      if (err && err.code === 'LIMIT_FILE_SIZE') {
        return response.error(res, 404, 'File Too Large! MAX (1 MB)')
      }
    } else if (err && err.code === 'EXTENSION_FILE') {
      return response.error(res, 404, 'Please Upload Only Image!')
    }
    next()
  })
}

const photo = image.array('photo', 3)

const uploadMultiImage = (req, res, next) => {
  photo(req, res, err => {
    if (err instanceof multer.MulterError) {
      if (err && err.code === 'LIMIT_FILE_SIZE') {
        return response.error(res, 404, 'File Too Large! MAX (1 MB)')
      } else if (err && err.code === 'LIMIT_UNEXPECTED_FILE') {
        return response.error(res, 404, 'File Too Much! MAX (3 PHOTO)')
      }
    } else if (err && err.code === 'EXTENSION_FILE') {
      return response.error(res, 404, 'Please Upload Only Image!')
    }
    next()
  })
}

module.exports = {
  uploadSingleImage: uploadSingleImage,
  uploadMultiImage: uploadMultiImage
}
