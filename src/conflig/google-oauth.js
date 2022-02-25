require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const userSchema = require("../models/user.model")
const { v4: uuidv4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:2000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // });
      let user = await userSchema
        .findOne({ email: profile?.email })
        .lean()
        .exec();

      if (!user) {
        user = await userSchema.create({
          email: profile?.email,
          password: uuidv4(),
          role: ["customer"],
        });
      }
      console.log(user);
    //   console.log("email:", profile?.email);
    //   console.log(uuidv4());
      return done(null, user);
    }
  )
);
module.exports = passport;
