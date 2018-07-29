package andy.web.ngbootapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import andy.web.ngbootapp.domain.Stock;
import andy.web.ngbootapp.service.StockService;

@RestController
public class StockController {
	
	@Autowired
	private StockService stockSrvc;
	
	@GetMapping("/stocklist")
	public List<Stock> getAllStocks(){
		
		List<Stock> result=stockSrvc.getAllStocks();
		System.out.println(result);
		return result;
	}
}
