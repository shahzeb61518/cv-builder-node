const Model = require("../models/cvs-model");

exports.create = (req, res, next) => {
  console.log("body>>.", req.body);
  console.log("tags>>.", req.body.tags);

  if (req.files) {
    let file = "https://cv-node-app.herokuapp.com/upload/" + req.files.personalImage.name;
    req.files.personalImage.mv(
      "public/upload/" + req.files.personalImage.name,
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
      personalFirstName: req.body.personalFirstName,
      personalLastName: req.body.personalLastName,
      personalProfession: req.body.personalProfession,
      personalSummary: req.body.personalSummary,
      personalSpecialization: req.body.personalSpecialization,
      personalImage: file,
      contactEmail: req.body.contactEmail,
      contactMobile: req.body.contactMobile,
      contactHome: req.body.contactHome,
      contactWebsite: req.body.contactWebsite,
      contactAddress: req.body.contactAddress,

      education1From: req.body.education1From,
      education1To: req.body.education1To,
      education1Course: req.body.education1Course,
      educationInstitue1: req.body.educationInstitue1,
      education2From: req.body.education2From,
      education2To: req.body.education2To,
      education2Course: req.body.education2Course,
      educationInstitue2: req.body.educationInstitue2,

      education3From: req.body.education3From,
      education3To: req.body.education3To,
      education3Course: req.body.education3Course,
      educationInstitue3: req.body.educationInstitue3,

      experience1From: req.body.experience1From,
      experience1To: req.body.experience1To,
      experience1Position: req.body.experience1Position,
      experience2From: req.body.experience2From,
      experience2To: req.body.experience2To,
      experience2Position: req.body.experience2Position,
      experience3From: req.body.experience3From,
      experience3To: req.body.experience3To,
      experience3Position: req.body.experience3Position,
      tag: req.body.tags,
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
      personalFirstName: req.body.personalFirstName,
      personalLastName: req.body.personalLastName,
      personalProfession: req.body.personalProfession,
      personalSummary: req.body.personalSummary,
      personalSpecialization: req.body.personalSpecialization,
      personalImage: req.body.personalImage,
      contactEmail: req.body.contactEmail,
      contactMobile: req.body.contactMobile,
      contactHome: req.body.contactHome,
      contactWebsite: req.body.contactWebsite,
      contactAddress: req.body.contactAddress,

      education1From: req.body.education1From,
      education1To: req.body.education1To,
      education1Course: req.body.education1Course,
      educationInstitue1: req.body.educationInstitue1,
      education2From: req.body.education2From,
      education2To: req.body.education2To,
      education2Course: req.body.education2Course,
      educationInstitue2: req.body.educationInstitue2,

      education3From: req.body.education3From,
      education3To: req.body.education3To,
      education3Course: req.body.education3Course,
      educationInstitue3: req.body.educationInstitue3,

      experience1From: req.body.experience1From,
      experience1To: req.body.experience1To,
      experience1Position: req.body.experience1Position,
      experience2From: req.body.experience2From,
      experience2To: req.body.experience2To,
      experience2Position: req.body.experience2Position,
      experience3From: req.body.experience3From,
      experience3To: req.body.experience3To,
      experience3Position: req.body.experience3Position,
      tag: req.body.tags,
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
    personalFirstName: req.body.personalFirstName,
    personalLastName: req.body.personalLastName,
    personalProfession: req.body.personalProfession,
    personalSummary: req.body.personalSummary,
    personalSpecialization: req.body.personalSpecialization,
    contactEmail: req.body.contactEmail,
    contactMobile: req.body.contactMobile,
    contactHome: req.body.contactHome,
    contactWebsite: req.body.contactWebsite,
    contactAddress: req.body.contactAddress,

    education1From: req.body.education1From,
    education1To: req.body.education1To,
    education1Course: req.body.education1Course,
    educationInstitue1: req.body.educationInstitue1,
    education2From: req.body.education2From,
    education2To: req.body.education2To,
    education2Course: req.body.education2Course,
    educationInstitue2: req.body.educationInstitue2,

    education3From: req.body.education3From,
    education3To: req.body.education3To,
    education3Course: req.body.education3Course,
    educationInstitue3: req.body.educationInstitue3,

    experience1From: req.body.experience1From,
    experience1To: req.body.experience1To,
    experience1Position: req.body.experience1Position,
    experience2From: req.body.experience2From,
    experience2To: req.body.experience2To,
    experience2Position: req.body.experience2Position,
    experience3From: req.body.experience3From,
    experience3To: req.body.experience3To,
    experience3Position: req.body.experience3Position,
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
