'use strict';
module.exports = (sequelize, DataTypes) => {
  const library_book = sequelize.define('library_book', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        msg: "Ingrese el name"
      }
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        msg: "Ingrese el authors"
      }
    },
    date_published: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        msg: "Ingrese el date_published"
      }
    },
    tier_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        arg: false,
        msg: "Ingrese el tier_id"
      }
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        arg: false,
        msg: "Ingrese el subject_id"
      }
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        arg: false,
        msg: "Ingrese el created_by_id"
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: {
        arg: false,
        msg: "Ingrese el created_at"
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        msg: "Ingrese el slug"
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        msg: "Ingrese el image"
      }
    }
  }, {});
  library_book.associate = function(models) {
    // associations can be defined here
  };
  return library_book;
};