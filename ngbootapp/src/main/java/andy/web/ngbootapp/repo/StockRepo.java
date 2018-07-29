package andy.web.ngbootapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import andy.web.ngbootapp.domain.Stock;

@Repository
public interface StockRepo  extends JpaRepository<Stock, String>
{

}
