package run.halo.app.service;

import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;
import run.halo.app.model.dto.MenuDTO;
import run.halo.app.model.dto.SqlRestoryDTO;
import run.halo.app.model.entity.Menu;
import run.halo.app.model.params.MenuParam;
import run.halo.app.model.vo.MenuTeamVO;
import run.halo.app.model.vo.MenuVO;
import run.halo.app.service.base.CrudService;
import java.util.List;

/**
 * sql restory service
 *
 * @author jifu
 * @date 2022-7-26
 */
public interface SqlRestoryService {


    /**
     * sql 还原
     * @param sqlRestoryDTO 待处理数据
     * @return 结果
     */
    SqlRestoryDTO sqlRestore(SqlRestoryDTO sqlRestoryDTO);
}
