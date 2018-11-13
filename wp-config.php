<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'clakett');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R3[*Uvy]A(o8K+WK@Vlx@DC/pw`CLYX`Z:P|/?W741;d</$ciM`ef1A`D#H`9/p1');
define('SECURE_AUTH_KEY',  'by)8xY98>sB=_}vL<PT4#e?T [-mq~qpUA9bU$-C?8*4:h{cv.NMkpmO>CUYY`P0');
define('LOGGED_IN_KEY',    't_&+DnTgRr(j]<{[YKnw`A]6Q9tLvI2u{Dj  >^9T&~g;;S?8gCh2x@es9=)CYPB');
define('NONCE_KEY',        '>_= 6]@{W9qLf2B%`PNBRV?~]-VMa/z9<S8;5[|!;aJ?xAFWI]T=&Hw9JN>UUIQ!');
define('AUTH_SALT',        'E29I#~IG%5$xog{NgW8DBg|brgWEGnSfwYre(3j v3#jsp,ihzand^Q;]4t[#`@:');
define('SECURE_AUTH_SALT', 'gE]&rc*1mea0l(%b?~{b;|^Z5)5ozXA(;01e:.vY7~awLhAK)P2II A?:(/YA6lf');
define('LOGGED_IN_SALT',   ' {kA]D-rZfe%Ap`xwU%y!rbDevWt9h=1bz!^_a,}s[]xmT-.HpEN% Ux-qDU4{.M');
define('NONCE_SALT',       '(Crk0=X-%Rp*kQW1;1x%6Uafv1W}xWIe3#K<?`zAS{d633L:^)go?qP`e*iJV,u$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('FS_METHOD', 'direct');


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
