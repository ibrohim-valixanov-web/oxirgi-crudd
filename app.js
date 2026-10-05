const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");

const countryRoute = require("./routes/countryRoutes");
const regionRoute = require("./routes/regionRoutes");
const districtRoute = require("./routes/districtRoutes");
const genderRoute = require("./routes/genderRoutes");
const flatRoute = require("./routes/flatRoutes");
const sectorRoute = require("./routes/sectorRoutes");
const seatTypeRoute = require("./routes/seatTypeRoutes");
const venueRoute = require("./routes/venueRoutes");
const venuePhotoRoute = require("./routes/venuePhotoRoutes");
const typesRoute = require("./routes/typesRoutes");
const venueTypesRoute = require("./routes/venueTypesRoutes");
const seatRoute = require("./routes/seatRoutes");
const langRoute = require("./routes/langRoutes");
const humanCategoryRoute = require("./routes/humanCategoryRoutes");
const eventTypeRoute = require("./routes/eventTypeRoutes");
const eventRoute = require("./routes/eventRoutes");
const ticketStatusRoute = require("./routes/ticketStatusRoutes");
const ticketTypeRoute = require("./routes/ticketTypeRoutes");
const ticketRoute = require("./routes/ticketRoutes");
const customerRoute = require("./routes/customerRoutes");
const customerCardRoute = require("./routes/customerCardRoutes");
const customerAddressRoute = require("./routes/customerAddressRoutes");
const cartRoute = require("./routes/cartRoutes");
const cartItemRoute = require("./routes/cartItemRoutes");
const paymentMethodRoute = require("./routes/paymentMethodRoutes");
const deliveryMethodRoute = require("./routes/deliveryMethodRoutes");
const discountRoute = require("./routes/discountRoutes");
const bookingRoute = require("./routes/bookingRoutes");
const adminRoute = require("./routes/adminRoutes");
const userRoute = require("./routes/userRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", countryRoute);
app.use("/api", regionRoute);
app.use("/api", districtRoute);
app.use("/api", genderRoute);
app.use("/api", flatRoute);
app.use("/api", sectorRoute);
app.use("/api", seatTypeRoute);
app.use("/api", venueRoute);
app.use("/api", venuePhotoRoute);
app.use("/api", typesRoute);
app.use("/api", venueTypesRoute);
app.use("/api", seatRoute);
app.use("/api", langRoute);
app.use("/api", humanCategoryRoute);
app.use("/api", eventTypeRoute);
app.use("/api", eventRoute);
app.use("/api", ticketStatusRoute);
app.use("/api", ticketTypeRoute);
app.use("/api", ticketRoute);
app.use("/api", customerRoute);
app.use("/api", customerCardRoute);
app.use("/api", customerAddressRoute);
app.use("/api", cartRoute);
app.use("/api", cartItemRoute);
app.use("/api", paymentMethodRoute);
app.use("/api", deliveryMethodRoute);
app.use("/api", discountRoute);
app.use("/api", bookingRoute);
app.use("/api", adminRoute);
app.use("/api", userRoute);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
