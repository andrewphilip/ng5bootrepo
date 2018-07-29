package andy.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class StockController {
//	@Autowired
//	private StockRepo stockRepo;
	
	@Autowired
	private StockRepoInMongo stockRepo;
	
	@GetMapping("/stocklist")
	public List<Stock> getAllStocks(){
		
		List<Stock> result=stockRepo.findAll();
		System.out.println(result);
		return result;
	}
}
