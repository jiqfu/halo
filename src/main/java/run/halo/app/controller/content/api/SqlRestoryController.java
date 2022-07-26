package run.halo.app.controller.content.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import run.halo.app.model.dto.MenuDTO;
import run.halo.app.model.dto.SqlRestoryDTO;
import run.halo.app.model.vo.MenuVO;
import run.halo.app.service.MenuService;
import run.halo.app.service.SqlRestoryService;
import java.util.List;

import static org.springframework.data.domain.Sort.Direction.DESC;

/**
 * sqlRestory sql还原
 *
 * @author jifu
 * @date 2022-7-26
 */
@RestController("ApiSqlRestoryController")
@RequestMapping("/api/content/sql-restory")
public class SqlRestoryController {

    private final SqlRestoryService sqlRestoryService;

    public SqlRestoryController(SqlRestoryService sqlRestoryService) {
        this.sqlRestoryService = sqlRestoryService;
    }

    @PostMapping
    @ApiOperation("Sql Restore")
    public SqlRestoryDTO sqlRestore(@RequestBody SqlRestoryDTO sqlRestoryDTO) {
        return sqlRestoryService.sqlRestore(sqlRestoryDTO);
    }

}
