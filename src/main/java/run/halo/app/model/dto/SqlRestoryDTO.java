package run.halo.app.model.dto;
/**
 * sql还原DTO
 *
 * @author jifu
 * @date 2022-7-26
 */
public class SqlRestoryDTO {
    /**
     * 日志
     */
    private String sqlLog;
    /**
     * sql
     */
    private String sql;

    public String getSqlLog() {
        return sqlLog;
    }

    public SqlRestoryDTO setSqlLog(String sqlLog) {
        this.sqlLog = sqlLog;
        return this;
    }

    public String getSql() {
        return sql;
    }

    public SqlRestoryDTO setSql(String sql) {
        this.sql = sql;
        return this;
    }
}
