require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const userSchema = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://giftcart-backend.herokuapp.com/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // });
      // console.log(profile);
      let user = await userSchema
        .findOne({ email: profile?.email })
        .lean()
        .exec();
      if (!user) {
        user = await userSchema.create({
          first_name: profile?.given_name,
          last_name: profile?.family_name,
          email: profile?.email,
          password: uuidv4(),
        });
      }

      // console.log(user);
      //   console.log("email:", profile?.email);
      //   console.log(uuidv4());
      return done(null, user);
    }
  )
);
module.exports = passport;
