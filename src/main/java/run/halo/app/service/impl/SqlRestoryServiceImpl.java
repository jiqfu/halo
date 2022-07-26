package run.halo.app.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import run.halo.app.model.dto.SqlRestoryDTO;
import run.halo.app.service.SqlRestoryService;
import run.halo.app.utils.SqlRestoryUtils;

@Service
public class SqlRestoryServiceImpl implements SqlRestoryService {
    @Override
    public SqlRestoryDTO sqlRestore(SqlRestoryDTO sqlRestoryDTO) {
        if (ObjectUtils.isEmpty(sqlRestoryDTO) || ObjectUtils.isEmpty(sqlRestoryDTO.getSqlLog())) {
            return sqlRestoryDTO;
        }
        return sqlRestoryDTO.setSql(SqlRestoryUtils.restore(sqlRestoryDTO.getSqlLog()));
    }
}
