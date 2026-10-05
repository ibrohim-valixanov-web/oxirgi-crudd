const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Country = require("./country.model")(sequelize, Sequelize.DataTypes);
const Region = require("./region.model")(sequelize, Sequelize.DataTypes);
const District = require("./district.model")(sequelize, Sequelize.DataTypes);
const Gender = require("./gender.model")(sequelize, Sequelize.DataTypes);
const Flat = require("./flat.model")(sequelize, Sequelize.DataTypes);
const Sector = require("./sector.model")(sequelize, Sequelize.DataTypes);
const SeatType = require("./seatType.model")(sequelize, Sequelize.DataTypes);
const Venue = require("./venue.model")(sequelize, Sequelize.DataTypes);
const VenuePhoto = require("./venuePhoto.model")(sequelize, Sequelize.DataTypes);
const Types = require("./types.model")(sequelize, Sequelize.DataTypes);
const VenueTypes = require("./venueTypes.model")(sequelize, Sequelize.DataTypes);
const Seat = require("./seat.model")(sequelize, Sequelize.DataTypes);
const Lang = require("./lang.model")(sequelize, Sequelize.DataTypes);
const HumanCategory = require("./humanCategory.model")(sequelize, Sequelize.DataTypes);
const EventType = require("./eventType.model")(sequelize, Sequelize.DataTypes);
const Event = require("./event.model")(sequelize, Sequelize.DataTypes);
const TicketStatus = require("./ticketStatus.model")(sequelize, Sequelize.DataTypes);
const TicketType = require("./ticketType.model")(sequelize, Sequelize.DataTypes);
const Ticket = require("./ticket.model")(sequelize, Sequelize.DataTypes);
const Customer = require("./customer.model")(sequelize, Sequelize.DataTypes);
const CustomerCard = require("./customerCard.model")(sequelize, Sequelize.DataTypes);
const CustomerAddress = require("./customerAddress.model")(sequelize, Sequelize.DataTypes);
const Cart = require("./cart.model")(sequelize, Sequelize.DataTypes);
const CartItem = require("./cartItem.model")(sequelize, Sequelize.DataTypes);
const PaymentMethod = require("./paymentMethod.model")(sequelize, Sequelize.DataTypes);
const DeliveryMethod = require("./deliveryMethod.model")(sequelize, Sequelize.DataTypes);
const Discount = require("./discount.model")(sequelize, Sequelize.DataTypes);
const Booking = require("./booking.model")(sequelize, Sequelize.DataTypes);
const Admin = require("./admin.model")(sequelize, Sequelize.DataTypes);
const User = require("./user.model")(sequelize, Sequelize.DataTypes);

const db = {
  Country, Region, District, Gender, Flat, Sector, SeatType, Venue, VenuePhoto, Types, VenueTypes, Seat, Lang, HumanCategory, EventType, Event, TicketStatus, TicketType, Ticket, Customer, CustomerCard, CustomerAddress, Cart, CartItem, PaymentMethod, DeliveryMethod, Discount, Booking, Admin, User
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
