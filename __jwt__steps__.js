/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client
 * */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type
 * 3. cookies: http only
 * */

/**
 * 1. set cookies http only. for development secure: false
 *
 * 2. cors
 * cors({
    origin: ["http://localhost:5000"],
    credentials: true,
  })
 *
 * 3. client side axios setting
 * */

/**
 * 1. to send cookies from the client make sure you added withCredential true for the api call using axios
 * 2.use cookie parser as middleware
 * */

/**
 * ---------------------------------
 *  Make API SECURE
 * ---------------------------------
 * The person who should have
 *
 * concept:
 * 1. assign two tokens for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc.). valid for shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 * */

/**
 * 1. jwt --> json web token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. http only, secure, sameSite
 * 4. from client side: axios withCredentials true
 * 5. cors setup origin and credentials: true
 *
 * */

/**
 * 1. for secure api calls
 * 2. server side : instal cookie parser and use it as a middleware
 * 3. re.cookies
 * 4. on the client side: make api call using axios withCredentials: true; for fetch credentials 'include'
 * 5.
 * */
