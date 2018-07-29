package andy.web.ngbootapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import andy.web.ngbootapp.domain.Stock;
import andy.web.ngbootapp.repo.StockRepo;

@Service
public class StockService {

	@Autowired
	private StockRepo stockRepo;
	
	public List<Stock> getAllStocks() {
		return stockRepo.findAll();
	}
}
