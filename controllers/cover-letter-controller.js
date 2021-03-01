const Model = require("../models/cover-letter-model");

exports.create = (req, res, next) => {
  console.log("body>>.", req.body);
  if (req.files) {
    let file = "https://cv-node-app.herokuapp.com/upload/" + req.files.clProfileImage.name;
    req.files.clProfileImage.mv(
      "public/upload/" + req.files.clProfileImage.name,
      function (error) {
        if (error) {
          console.log("Couldn't upload file");
          console.log(error);
        } else {
          console.log("File succesfully uploaded.");
        }
      }
    );

    const model = new Model({
      userId: req.body.userId,
      cvId: req.body.cvId,
      clFirstName: req.body.clFirstName,
      clLastName: req.body.clLastName,
      clProfession: req.body.clProfession,
      clEmail: req.body.clEmail,
      clPhone: req.body.clPhone,
      clAddress: req.body.clAddress,
      clDescription: req.body.clDescription,
      clProfileImage: file,
      path: req.body.path,
    });
    model
      .save()
      .then((createdObject) => {
        console.log(createdObject);
        res.status(201).json({
          message: "Created successfully",
          model: createdObject,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Creation failed!",
        });
      });
  } else {
    const model = new Model({
      userId: req.body.userId,
      cvId: req.body.cvId,
      clFirstName: req.body.clFirstName,
      clLastName: req.body.clLastName,
      clProfession: req.body.clProfession,
      clEmail: req.body.clEmail,
      clPhone: req.body.clPhone,
      clAddress: req.body.clAddress,
      clDescription: req.body.clDescription,
      clProfileImage: req.body.clProfileImage,
      path: req.body.path,
    });
    model
      .save()
      .then((createdObject) => {
        console.log(createdObject);
        res.status(201).json({
          message: "Created successfully",
          model: createdObject,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Creation failed!",
        });
      });
  }
};

// Get
exports.get = (req, res, next) => {
  Model.find({ userId: req.body.id })
    .then((documents) => {
      res.status(200).json({
        message: "Data fetched!!!",
        list: documents,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Getting data failed!",
      });
    });
};

// // Delete
exports.delete = (req, res, next) => {
  Model.deleteOne({ _id: req.body.id })
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not deleted!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Deletion failed!",
      });
    });
};

exports.update = (req, res, next) => {
  // console.log(req.body)
  const model = new Model({
    _id: req.body.id,
    userId: req.body.userId,
    cvId: req.body.cvId,
    clFirstName: req.body.clFirstName,
    clLastName: req.body.clLastName,
    clProfession: req.body.clProfession,
    clEmail: req.body.clEmail,
    clPhone: req.body.clPhone,
    clAddress: req.body.clAddress,
    clDescription: req.body.clDescription,
  });
  Model.updateOne({ _id: req.body.id }, model)
    .then((result) => {
      console.log(result);
      if (result.nModified > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "No updated!",
      });
    });
};
