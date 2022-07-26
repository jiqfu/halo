package run.halo.app.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ObjectUtils;
import java.util.Arrays;
import java.util.List;

public class SqlRestoryUtils {
    private static final Logger logger = LoggerFactory.getLogger(SqlRestoryUtils.class);
    public static final String SQL_START = "==>  Preparing: ";
    public static final String SQL_END = "\n";
    public static final String PARAM_START = "==> Parameters: ";
    public static final String PARAM_END = "\n";
    public static final String PARAM_STRING_TYPE = "String";
    public static final String PARAM_TIMESTAMP = "Timestamp";
    public static final List<String>
        ADD_SINGLE_QUOTES_LIST = Arrays.asList(PARAM_STRING_TYPE, PARAM_TIMESTAMP);
    public static final String REPLACE_REG = "[?]";
    public static final String SPLIT = ", ";
    public static final String SINGLE_QUOTES = "'";


    public SqlRestoryUtils() {
    }

    public static String restore(String sourceSql) {
        if (ObjectUtils.isEmpty(sourceSql)) {
            return sourceSql;
        }
        if (!sourceSql.contains(SQL_START)) {
            return sourceSql;
        }
        String sql = sourceSql.substring(sourceSql.indexOf(SQL_START) + SQL_START.length(), sourceSql.indexOf(SQL_END, sourceSql.indexOf(SQL_START) + SQL_START.length()));
        String param = sourceSql.substring(sourceSql.indexOf(PARAM_START) + PARAM_START.length(), sourceSql.indexOf(PARAM_END, sourceSql.indexOf(PARAM_START) + PARAM_START.length()));
        String[] paramArray = param.split(SPLIT);
        for (int i = 0; i < paramArray.length; i++) {
            Param paramTemp = new Param(paramArray[i]);
            if (ADD_SINGLE_QUOTES_LIST.contains(paramTemp.getType())) {
                sql = sql.replaceFirst(REPLACE_REG,
                    SINGLE_QUOTES + paramTemp.getValue() + SINGLE_QUOTES);
            } else {
                sql = sql.replaceFirst(REPLACE_REG,
                    ObjectUtils.isEmpty(paramTemp.getValue()) ? "null" :
                        paramTemp.getValue());
            }
        }
        return sql;
    }

    private static class Param {
        private String value;
        private String type;
        public Param(String param) {
            if (param.contains("(")) {
                this.value = param.substring(0, param.lastIndexOf("("));
                this.type = param.substring(param.indexOf("(") + 1, param.lastIndexOf(")"));
            } else {
                this.value = null;
                this.type = null;
            }
        }
        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }

}