<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbrtg9wka3uqds' );

/** Database username */
define( 'DB_USER', 'ugxlg5unga9p8' );

/** Database password */
define( 'DB_PASSWORD', 'vy7eyeva4o0h' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '/E,Cr!Pi]$q~ ]|~$ns?/>chS|SCU3d]D%_:],Vu?`d[ZE:u^1G?*&?7pXC:@[I]' );
define( 'SECURE_AUTH_KEY',   'cQnm<s%/GZv&YY45Qe)Rp2EXnQ1Hd0!v:9D}Hq06Ds.k},}U1_sz|0py4l)*.S&0' );
define( 'LOGGED_IN_KEY',     'dD|t$vYJV ch!BK+w=?U <vfp<9H%2!#Nq8n%yr,.b0^3*WBvCIe7><IYYz%H+X7' );
define( 'NONCE_KEY',         'w]k-`&oR{*s9IaxAzal}p)`RIuLGrDr5hT8VN)jzAI$|ERn[+Euo)k&cHE-L/mD4' );
define( 'AUTH_SALT',         '16fLoW{U>4sM&!oMP)/F!J#>_C6X5Y~VE-p@5)/HZfDY*P5QW}{hLCnq28fCQ[-Q' );
define( 'SECURE_AUTH_SALT',  '2[IAY1Igvx5]XKyGPN)+?v.*c*g%)1LeZNp/+_Lg*:`5}N@6,-h*J1WFe-d4qru7' );
define( 'LOGGED_IN_SALT',    'G9E*;;;dN[h(>!w6I(bE@c-qQVSfn`4!|I|Su(C<Kd4}l^/z>[ 6izqWKa0Rl{2E' );
define( 'NONCE_SALT',        '}wj*MihnnWeg.B>}2:j0quy~~nmg^GG-Ac5:<v4AoN8Pwm>OGHkp|v_O9a:Q:XC_' );
define( 'WP_CACHE_KEY_SALT', 'Iz=R q<Tg`#USLr{!EjB0[>x/#8IG~?/  ge}z)i8_i:FnlW4gGE+_xvK5f[rh2G' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ryt_';



/* Add any custom values between this line and the "stop editing" line. */
define( 'HEADLESS_MODE_CLIENT_URL', 'https://mohammeds128.sg-host.com/wp-login.php' );


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
	define( 'WP_DEBUG_LOG', false );
	define( 'WP_DEBUG_DISPLAY', false );
	define('AKISMET_DEBUG', true);
}

define('JWT_AUTH_SECRET_KEY', 'S4J&~?|~3)R+:[ek$RXtv*l)9eX(;xl`7J*~QKT1%M03CJ!#9O!+[_|*HX*>-k2<');
define('JWT_AUTH_CORS_ENABLE', true);

define( 'WP_POST_REVISIONS', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
