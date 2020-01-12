"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SQLHelper {
    static async query(columnName, tableName, where) {
        const sql = require("mssql");
        await sql.connect("mssql://user:password@dbserver/database");
        const result = await sql.query(`select top 1 ${columnName} from ${tableName} where ${where}`);
        return Object.values(result.recordset[0]).toString();
    }
}
exports.SQLHelper = SQLHelper;
//# sourceMappingURL=SQLHelper.js.map