import mysql from 'mysql2';

const pool = mysql.createPool({
	host: 'roundhouse.proxy.rlwy.net',
	user: 'root',
	database: 'railway',
	password: 'gijSriyVNEsQZyNBRmmQcAYcpufDhUaI',
  port: 49810,
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
	idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 0
});


export default pool.promise();
